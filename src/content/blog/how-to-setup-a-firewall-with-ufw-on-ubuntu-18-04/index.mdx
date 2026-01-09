---
title: 'How to setup a Firewall with UFW on Ubuntu 18.04+'
description: 'UFW - Uncomplicated Firewall provides a user friendly way to create an IPv4 or IPv6 host-based firewall which helps a regular user to deny all incoming connections without much configuration.'
date: '2018-07-16'
tags: ['Linux', 'Ubuntu', 'Security', 'Firewall']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

**UFW (Uncomplicated Firewall)** is a user-friendly interface to manage iptables firewall rules in Ubuntu and Debian-based systems. It simplifies the process of allowing and denying network traffic without complex command syntax.

<Callout variant="note">
UFW is installed by default on most Ubuntu installations (18.04+), but it comes disabled. This prevents accidental lockouts during initial server setup.
</Callout>

## Prerequisites

You'll need:
- Root or sudo access on your Ubuntu server
- SSH connection for remote management (highly recommended)
- Basic understanding of network ports

## Installation

UFW comes with Ubuntu by default. If it was removed or you're on a minimal installation, install it with:

```bash
sudo apt update
sudo apt install ufw
```

## Step 1: Check Current Status

UFW is disabled by default. Check the current status and existing rules:

```bash
sudo ufw status
```

Output will show `Status: inactive` on first run. No rules are loaded yet.

<Callout variant="warning" title="Critical: Secure SSH First">
Before enabling the firewall, you **must** add a rule allowing SSH. If you block SSH while connected remotely, you'll lock yourself out and lose access to your server!
</Callout>

## Step 2: Allow SSH Access (CRITICAL)

Add a rule to allow SSH connections before enabling the firewall:

```bash
sudo ufw allow ssh
```

Alternatively, allow by port number:

```bash
sudo ufw allow 22
```

**If SSH runs on a custom port** (recommended for security), allow that port instead:

```bash
sudo ufw allow 2222
```

Replace `2222` with your actual SSH port.

<Callout variant="tip" title="Why Allow SSH First?">
UFW defaults to **deny all incoming connections**. Once enabled, only explicitly allowed ports accept traffic. Without an SSH rule, you lose remote access immediately.
</Callout>

## Step 3: Enable the Firewall

Now enable UFW:

```bash
sudo ufw enable
```

You'll see a warning:
```
Command may disrupt existing ssh connections. Proceed with operation (y|n)?
```

Enter `y` — you've already whitelisted SSH, so your connection will remain active.

<Callout variant="note">
UFW is now active! It denies all incoming connections except those you explicitly allow.
</Callout>

## Step 4: Add Rules for Your Services

### Allow Web Server (HTTP/HTTPS)

If running a web server, allow HTTP and HTTPS:

```bash
sudo ufw allow http    # Port 80
sudo ufw allow https   # Port 443
```

Or allow specific ports:

```bash
sudo ufw allow 80
sudo ufw allow 443
```

### Allow Custom Application Ports

For any service, use the port number:

```bash
sudo ufw allow 3000     # Node.js development server
sudo ufw allow 5432     # PostgreSQL database
sudo ufw allow 3306     # MySQL database
sudo ufw allow 6379     # Redis cache
```

### Allow Specific Protocols

Allow TCP-only or UDP-only traffic:

```bash
sudo ufw allow 53/tcp   # DNS over TCP
sudo ufw allow 53/udp   # DNS over UDP
sudo ufw allow 1194/udp # OpenVPN
```

### Allow by Service Name

UFW recognizes common service names from `/etc/services`:

```bash
sudo ufw allow dns      # Port 53
sudo ufw allow ftp      # Port 21
sudo ufw allow smtp     # Port 25
sudo ufw allow imap     # Port 143
sudo ufw allow pop3     # Port 110
```

## Step 5: View and Manage Rules

### Check Current Rules

```bash
sudo ufw status
```

Output example:
```
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere
80                         ALLOW       Anywhere
443                        ALLOW       Anywhere
22 (v6)                    ALLOW       Anywhere (v6)
80 (v6)                    ALLOW       Anywhere (v6)
443 (v6)                   ALLOW       Anywhere (v6)
```

For detailed rule information:

```bash
sudo ufw status numbered
```

### Deny Specific Ports

Explicitly deny a port (rarely needed due to default deny):

```bash
sudo ufw deny 80
```

### Delete Rules

Delete by allow/deny and port:

```bash
sudo ufw delete allow 80
sudo ufw delete deny 80
```

Or delete by rule number (from `ufw status numbered`):

```bash
sudo ufw delete 3
```

<Callout variant="warning">
Always verify the rule number before deletion. Removing the wrong rule could expose your server.
</Callout>

## Advanced Usage

### Allow from Specific IP Address

Restrict access to a service from a single IP:

```bash
sudo ufw allow from 192.168.1.100 to any port 3306
```

This allows only 192.168.1.100 to access MySQL.

### Allow Ranges of Ports

```bash
sudo ufw allow 6000:6007/tcp  # Allow TCP ports 6000-6007 (X11)
```

### Enable/Disable Without Clearing Rules

```bash
sudo ufw disable        # Deactivate temporarily (rules preserved)
sudo ufw enable         # Re-enable with existing rules
```

### Reset to Defaults

<Callout variant="danger" title="Destructive Operation">
This removes all rules and disables UFW. Use only for troubleshooting:
```bash
sudo ufw reset
```
</Callout>

## Common Service Ports Reference

| Service | Port | Protocol | UFW Command |
|---------|------|----------|-------------|
| SSH | 22 | TCP | `ufw allow ssh` |
| HTTP | 80 | TCP | `ufw allow http` |
| HTTPS | 443 | TCP | `ufw allow https` |
| DNS | 53 | TCP/UDP | `ufw allow dns` |
| SMTP | 25 | TCP | `ufw allow smtp` |
| MySQL | 3306 | TCP | `ufw allow 3306` |
| PostgreSQL | 5432 | TCP | `ufw allow 5432` |
| MongoDB | 27017 | TCP | `ufw allow 27017` |
| Redis | 6379 | TCP | `ufw allow 6379` |
| OpenVPN | 1194 | UDP | `ufw allow 1194/udp` |

## Troubleshooting

<Callout variant="problem" title="Locked Out of SSH">
If you can't SSH after enabling UFW:
1. Use the hosting provider's console/IPMI to access the server
2. Run: `sudo ufw allow 22`
3. Reconnect via SSH

Always allow SSH **before** enabling the firewall!
</Callout>

<Callout variant="problem" title="Application Not Accessible">
If your web server shows "connection refused":
1. Verify the application is running: `sudo netstat -tlnp | grep LISTEN`
2. Check if port is allowed: `sudo ufw status | grep PORT_NUMBER`
3. Add rule if missing: `sudo ufw allow PORT_NUMBER`
</Callout>

<Callout variant="problem" title="UFW Not Starting After Reboot">
Some systems disable UFW on boot. Make it persistent:
```bash
sudo systemctl enable ufw
sudo systemctl start ufw
```
</Callout>

## Security Best Practices

<Callout variant="tip" title="Security Hardening">
- **Principle of Least Privilege**: Only allow ports your services actually need
- **Use Service Names**: `ufw allow ssh` is clearer than `ufw allow 22`
- **Document Rules**: Comment your UFW configuration for future reference
- **Review Regularly**: Periodically run `sudo ufw status` to audit active rules
- **Monitor Denied Connections**: Check logs with `sudo tail -f /var/log/ufw.log`
</Callout>

## Conclusion

UFW provides a simple yet powerful way to secure your Linux server with a default-deny firewall policy. By allowing only necessary ports and protocols, you significantly reduce your attack surface. Always prioritize SSH security to maintain remote access.
