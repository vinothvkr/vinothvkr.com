---
title: 'How to setup own VPN server'
description: 'In this tutorial we are using Ubuntu 20.04 server, so the steps shown below would work on almost all the Debian based linux distributions.'
date: '2020-06-19'
tags: ['Linux', 'Ubuntu', 'OpenVPN']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

Setting up your own VPN (Virtual Private Network) server provides secure, encrypted access to your network from anywhere. This step-by-step guide will walk you through installing and configuring OpenVPN on a Linux server in just minutes using an automated setup script.

## Prerequisites

You'll need the following to get started:

- A **VPS (Virtual Private Server)** with a public IP address
- **Linux distribution** (Ubuntu 20.04 LTS recommended, works with Debian-based distros)
- **SSH access** to your server with root or sudo privileges
- **curl** installed on your server (usually pre-installed)

<Callout variant="tip" title="Why Your Own VPN?">
Running your own VPN gives you complete control over encryption, logging policies, and server location — unlike commercial VPN providers where you must trust the operator.
</Callout>

## The Setup Process

We'll use the **angristan/openvpn-install** script, an automated setup tool that configures OpenVPN server and creates client certificates in seconds. This eliminates manual certificate generation and configuration file editing.

## Step 1: Download and Prepare the Script

SSH into your server and download the installation script:

```bash
curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
```

Make the script executable:

```bash
chmod +x openvpn-install.sh
```

Run the script with sudo privileges:

```bash
sudo ./openvpn-install.sh
```

## Step 2: Configure the VPN Server

The script will prompt you with several configuration questions. Here's what each option controls:

### IP Address Selection

```
IP address: XXX.XX.XX.XXX
```

The script auto-detects your VPS's public IP address. **Verify this is correct** — this IP is how clients will connect to your VPN server.

<Callout variant="warning">
If you see a private IP (e.g., 192.168.x.x or 10.x.x.x), your VPS may not have a public IP. Contact your provider or check your network configuration.
</Callout>

### IPv6 Support

```
Do you want to enable IPv6 support (NAT)? [y/n]: n
```

**Recommendation:** Enter `n` unless you specifically need IPv6. Most users should disable it for simpler firewall rules and wider compatibility with older networks.

### Port Selection

```
Which port do you want OpenVPN to listen to?
     1) Default: 1194
     2) Custom
     3) Random [49152-65535]
Port choice [1-3]: 1
```

**Options explained:**
- **Default (1194)**: Standard OpenVPN port; works in most networks but may be blocked by restrictive firewalls
- **Custom**: Choose your own port (e.g., 443 for HTTPS-like obfuscation)
- **Random**: Generate a random high port; better obfuscation from ISPs

<Callout variant="tip">
If you're behind a restrictive corporate firewall, port 443 (HTTPS) often gets better network access than 1194.
</Callout>

### Protocol Selection

```
What protocol do you want OpenVPN to use?
UDP is faster. Unless it is not available, you shouldn't use TCP.
     1) UDP
     2) TCP
Protocol [1-2]: 1
```

**Recommendation:** Choose **UDP (option 1)** for better speed and lower latency. Use TCP only if your network actively blocks UDP traffic.

### DNS Resolver Selection

```
What DNS resolvers do you want to use with the VPN?
     1) Current system resolvers (from /etc/resolv.conf)
     2) Self-hosted DNS Resolver (Unbound)
     3) Cloudflare (Anycast: worldwide)
     4) Quad9 (Anycast: worldwide)
     5) Quad9 uncensored (Anycast: worldwide)
     6) FDN (France)
     7) DNS.WATCH (Germany)
     8) OpenDNS (Anycast: worldwide)
     9) Google (Anycast: worldwide)
    10) Yandex Basic (Russia)
    11) AdGuard DNS (Anycast: worldwide)
    12) NextDNS (Anycast: worldwide)
    13) Custom
DNS [1-12]: 3
```

**Recommendation:** Choose **Cloudflare (option 3)** for privacy and speed. Options 4-5 (Quad9) are excellent for privacy with malware blocking. Avoid your ISP's DNS (option 1) — it defeats VPN privacy.

### Compression Setting

```
Do you want to use compression? It is not recommended since the VORACLE attack make use of it.
Enable compression? [y/n]: n
```

**Recommendation:** Enter `n`. Compression is disabled by default for security — it's vulnerable to the VORACLE timing attack that can leak data even when encrypted.

### Encryption Settings

```
Customize encryption settings? [y/n]: n
```

**Recommendation:** Enter `n` to use the script's default, production-ready encryption settings. Modern defaults use AES-256-GCM which is both secure and performant.

Press Enter to proceed with installation. The script will now compile and configure your OpenVPN server (this may take 2-5 minutes).

<Callout variant="note">
The installation process handles certificate generation, key creation, and server configuration automatically. No manual setup required!
</Callout>

## Step 3: Create Your First VPN Client

Once server installation completes, the script prompts you to create a client certificate. This generates the `.ovpn` file you'll use to connect.

### Client Name

```
Client Name: swiftionvpn
```

Choose a descriptive name for this client (e.g., "laptop", "phone", "home"). You can create additional clients later using the same script.

### Password Protection

```
Do you want to protect the configuration file with a password?
(e.g. encrypt the private key with a password)
   1) Add a passwordless client
   2) Use a password for the client
Select an option [1-2]: 1
```

**Recommendation:** Choose **option 2 (Use a password)** for enhanced security. You'll enter this password each time you connect to the VPN, protecting your private key if the `.ovpn` file is lost or stolen.

If you choose password protection, the script will prompt you to set a password — remember this for future connections!

Once complete, your client configuration file is ready in `/home/username/clientname.ovpn`.

## Step 4: Download the Client Configuration

Download the `.ovpn` file to your local machine using SCP (Secure Copy):

```bash
scp username@ipaddress:/home/username/swiftionvpn.ovpn swiftionvpn.ovpn
```

Replace:
- `username` — Your VPS login username
- `ipaddress` — Your VPS public IP address
- `swiftionvpn.ovpn` — The client name you created

The file will be saved to your current directory.

<Callout variant="tip" title="Securing the Config File">
Treat your `.ovpn` file like a password. It contains your private key and server connection details. Store it in a secure location, and consider setting folder permissions: `chmod 600 swiftionvpn.ovpn`
</Callout>

## Step 5: Connect to Your VPN

### Installing OpenVPN Client

Download and install the OpenVPN client for your operating system:
- **Windows**: https://openvpn.net/download-open-vpn/
- **macOS**: https://openvpn.net/download-open-vpn/ or `brew install openvpn`
- **Linux**: `sudo apt install openvpn` (Debian/Ubuntu)
- **iOS/Android**: Search "OpenVPN Connect" in your app store

### Importing the Configuration

1. Open OpenVPN client
2. Select **"Import Profile"** or **"Add File"**
3. Choose the `swiftionvpn.ovpn` file you downloaded
4. The VPN connection will appear in your list

### Connecting

Click the connection to establish the tunnel. If you set a password, you'll be prompted to enter it (or your client name if passwordless).

<Callout variant="note">
You're now connected! All traffic routes through your encrypted VPN tunnel. Verify your new IP address at https://whatismyipaddress.com
</Callout>

You're now connected! All traffic routes through your encrypted VPN tunnel. Verify your new IP address at https://whatismyipaddress.com

## Managing Additional Clients

To add more VPN clients (phone, laptop, etc.), re-run the installation script:

```bash
sudo ./openvpn-install.sh
```

Select **"Add a new user"** and follow the prompts. This creates additional `.ovpn` files without reconfiguring the server.

## Troubleshooting Common Issues

<Callout variant="problem" title="Connection Refused">
Ensure the VPS firewall allows traffic on your chosen port. Check with: `sudo ufw status` (if using UFW firewall).
</Callout>

<Callout variant="problem" title="Slow Connection Speed">
Switch to UDP protocol if using TCP. UDP is significantly faster for most users.
</Callout>

<Callout variant="problem" title="DNS Leaks">
Your ISP's DNS may bypass the tunnel. Use a DNS leak tester (https://www.dnsleaktest.com/) to verify. If leaking, restart the OpenVPN client or change DNS providers in server settings.
</Callout>

## Security Best Practices

- **Firewall**: Only expose port 1194 (or your chosen port) to the internet
- **Updates**: Keep your VPS updated: `sudo apt update && sudo apt upgrade`
- **Monitor connections**: Run `sudo ./openvpn-install.sh` and select "Show active connections" to audit who's connected
- **Revoke clients**: Re-run the script and select "Revoke a user" if a client is compromised

## Conclusion

You now have a fully functional, encrypted VPN server that you control. Enjoy secure, private browsing from anywhere in the world!
