---
title: 'How to install ZNC on Ubuntu 18.04'
description: 'Complete guide to install and configure ZNC IRC bouncer on Ubuntu 18.04 with systemd support.'
date: '2018-07-12'
tags: ['Linux', 'Ubuntu']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

**ZNC** is an IRC (Internet Relay Chat) bouncer that acts as an intermediary between your IRC client and IRC networks. Key benefits include:

- **Stay connected** — Receive messages even when your client is disconnected
- **Multiple clients** — Connect from different devices simultaneously
- **Message history** — Replay messages when you reconnect
- **Network bridging** — Connect to multiple IRC networks through one server

This guide sets up ZNC as a systemd daemon on Ubuntu 18.04 for production use.

<Callout variant="note">
**What is an IRC Bouncer?** A bouncer stays connected to IRC networks 24/7, storing messages offline. When your client connects, the bouncer relays everything you missed while away.
</Callout>

## Prerequisites

- Ubuntu 18.04 LTS server
- Root or sudo access
- Static IP address (recommended for persistent connections)
- Network access to IRC servers (port 6697 for SSL, 6667 for plain)

## Step 1: Update System and Install ZNC

First, update your system packages:

```bash
sudo apt update
sudo apt upgrade
```

Install ZNC and development files:

```bash
sudo apt install znc znc-dev
```

The `znc-dev` package is optional but recommended if you plan to install ZNC modules.

## Step 2: Create ZNC System User

Create a dedicated system user to run ZNC (security best practice):

```bash
sudo useradd --create-home -d /var/lib/znc --system --shell /sbin/nologin --comment "User to run ZNC daemon" --user-group znc
```

This command:
- Creates a home directory at `/var/lib/znc`
- Sets it as a system account (no login shell)
- Creates a dedicated group for the user

## Step 3: Generate ZNC Configuration

Generate the initial configuration interactively:

```bash
sudo -u znc /usr/bin/znc --datadir=/var/lib/znc --makeconf
```

The script will guide you through setup with prompts. Here's what each section means:

### Global Settings

```
[ ?? ] Listen on port (1025 to 65534): 6697
[ ?? ] Listen using SSL (yes/no) [no]: yes
[ ?? ] Listen using both IPv4 and IPv6 (yes/no) [yes]: yes
```

<Callout variant="tip">
**Port Selection:**
- **6697** — Standard secure port for IRC bouncers
- **6667** — Plain unencrypted port (less secure)
- Choose **yes** for SSL for encrypted connections
</Callout>

The script will generate an SSL certificate automatically.

### Admin User

```
[ ?? ] Username (alphanumeric): adminuser
[ ?? ] Enter password: [enter a strong password]
[ ?? ] Confirm password: [repeat]
[ ?? ] Nick [adminuser]: yournick
[ ?? ] Alternate nick [yournick_]:
[ ?? ] Ident [adminuser]:
[ ?? ] Real name [Got ZNC?]: Your Real Name
```

<Callout variant="warning">
Use a **strong password** — this account has full control over your ZNC server. Consider using a password manager to generate and store it securely.
</Callout>

### Network Configuration

```
[ ?? ] Set up a network? (yes/no) [yes]: yes
[ ** ]
[ ** ] -- Network settings --
[ ** ]
[ ?? ] Name [freenode]: freenode
[ ?? ] Server host [chat.freenode.net]: irc.libera.chat
[ ?? ] Server uses SSL? (yes/no) [yes]: yes
[ ?? ] Server port (1 to 65535) [6697]: 6697
[ ?? ] Initial channels: #ubuntu,#linux,#help
```

<Callout variant="note">
Freenode has merged with Libera.Chat. Update the server to `irc.libera.chat` if setting up for current networks.
</Callout>

### Finish Configuration

When asked to launch ZNC immediately:

```
[ ?? ] Launch ZNC now? (yes/no) [yes]: no
```

Choose **no** — we'll set up systemd first.

## Step 4: Create Systemd Service File

Create a systemd unit file for ZNC:

```bash
sudo nano /etc/systemd/system/znc.service
```

Paste the following configuration:

```ini
[Unit]
Description=ZNC Service
After=network-online.target

[Service]
ExecStart=/usr/bin/znc -f --datadir=/var/lib/znc
User=znc
Group=znc
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Save the file (`Ctrl+X`, then `Y`, then `Enter`).

### What Each Line Does

- `ExecStart` — Runs ZNC in foreground mode (`-f` flag)
- `User=znc` — Runs as the znc user we created
- `Restart=on-failure` — Automatically restarts if ZNC crashes
- `WantedBy=multi-user.target` — Starts at boot time

## Step 5: Enable and Start ZNC Service

Enable ZNC to start at boot:

```bash
sudo systemctl enable znc
```

Start the ZNC service:

```bash
sudo systemctl start znc
```

Verify it's running:

```bash
sudo systemctl status znc
```

You should see `Active: active (running)`.

## Step 6: Connect to Your ZNC Server

### Via Web Admin Panel

Open your browser and visit:

```
https://your_server_ip:6697/
```

Login with the admin credentials you created earlier.

<Callout variant="warning">
Self-signed SSL certificate: Your browser will show a security warning since ZNC generates self-signed certificates. Click "Advanced" and proceed — this is expected.
</Callout>

### Via IRC Client

Configure your IRC client to connect to ZNC instead of direct IRC:

```
Server: your_server_ip
Port: 6697
Password: username/networkname:password
Nick: yournick
```

Example:
```
Server: 192.168.1.100
Port: 6697
Password: adminuser/freenode:mypassword
Nick: mynick
```

## Troubleshooting

### Check ZNC Logs

View recent ZNC activity:

```bash
sudo journalctl -u znc -n 20
```

### Restart ZNC

If configuration changes fail to apply:

```bash
sudo systemctl restart znc
```

### Permission Denied Errors

Ensure the znc user owns the config directory:

```bash
sudo chown -R znc:znc /var/lib/znc
```

### Port Already in Use

Check if another process is using port 6697:

```bash
sudo netstat -tulpn | grep 6697
```

## Summary

You have successfully installed and configured ZNC as a persistent IRC bouncer on Ubuntu 18.04. Your ZNC server will automatically:

- Start at system boot
- Reconnect to IRC networks
- Store offline messages for your clients
- Provide secure access via SSL

For additional configuration and module management, visit the web admin panel at `https://your_server_ip:6697/` or consult the [official ZNC documentation](https://wiki.znc.in/).
