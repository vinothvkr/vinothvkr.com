---
title: 'Fedora Workstation Setup - My Daily Driver'
description: 'A comprehensive guide to setting up Fedora Workstation as a productive development environment.'
date: '2026-05-23'
tags: ['Fedora', 'Linux']
image: './banner.png'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro'

## Overview

This guide walks through my personal setup for Fedora Workstation on my daily driver laptop. These are tools and configurations I personally prefer and use daily for development and productivity. Your preferences may differ, so feel free to adapt this setup to your specific needs and workflow.

<Callout>
  Credit to [devangshekhawat](https://github.com/devangshekhawat) for some parts
  of this guide, adopted from
  [Fedora-44-Post-Install-Guide](https://github.com/devangshekhawat/Fedora-44-Post-Install-Guide).
</Callout>

## Prerequisites

- Fedora Workstation installed and initial setup completed
- `sudo` access on your system
- Internet connection for downloading packages

## Install Essential Packages

These packages provide system monitoring, development tools, and customization options:

- **btop** — Interactive process viewer and system monitor
- **nodejs24** — JavaScript runtime for development
- **nextcloud-client** — Sync files with Nextcloud servers
- **gnome-tweaks** — Customize GNOME desktop settings
- **gnome-extensions-app** — Manage GNOME Shell extensions

```bash
sudo dnf install btop nodejs24 nextcloud-client gnome-tweaks gnome-extensions-app
```

<Callout type="tip">
  For LTS stability in production environments, consider installing `nodejs20`
  instead of `nodejs24`.
</Callout>

## Install Visual Studio Code

[VS Code](https://code.visualstudio.com/) is a lightweight, powerful code editor. Installing from Microsoft's official repository ensures regular updates.

```bash
# Import Microsoft's GPG key
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

# Add VS Code repository
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null

# Update package cache and install
sudo dnf check-update

sudo dnf install code
```

<Callout type="tip">
  After installation, launch VS Code with `code` and customize it with
  extensions for your preferred languages and tools.
</Callout>

## Configure Git and Generate SSH Key

Set up Git with your identity and generate an ED25519 SSH key (more secure than RSA).

```bash
# Generate SSH key (replace with your email)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Configure Git globally
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --global init.defaultBranch main
```

Then [add your public key (~/.ssh/id_ed25519.pub) to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) or your Git hosting service.

## Install GNOME Extensions

These extensions enhance the GNOME desktop experience:

- **AppIndicator** — Show system tray icons in the top panel
- **Blur My Shell** — Add blur effects to the shell UI

```bash
sudo dnf install gnome-shell-extension-appindicator gnome-shell-extension-blur-my-shell
```

You can manage installed extensions using the "Extensions" app installed earlier.

## Install and Configure Tailscale

[Tailscale](https://tailscale.com/) is a zero-config VPN service that makes it easy to access your devices securely.

```bash
# Add Tailscale repository
sudo dnf config-manager addrepo --from-repofile=https://pkgs.tailscale.com/stable/fedora/tailscale.repo

# Update cache and install
sudo dnf check-update

sudo dnf install tailscale

# Enable and start the Tailscale daemon
sudo systemctl enable --now tailscaled

# Authenticate with your Tailscale account
sudo tailscale up
```

### Enable System Tray Integration

To show Tailscale status in your system tray:

```bash
# Configure systray to start on login
tailscale configure systray --enable-startup=systemd

# Enable and start the user-level systray service
systemctl --user daemon-reload
systemctl --user enable tailscale-systray
systemctl --user start tailscale-systray
```

### Optional: Grant Tailscale Operator Privileges

```bash
# Replace 'username' with your actual username
sudo tailscale set --operator=username

# Accept subnet routes from other Tailscale devices
sudo tailscale set --accept-routes
```

<Callout type="warning">
  Enabling `--accept-routes` allows other Tailscale machines to send traffic
  through your device. Only enable this if you understand the security
  implications.
</Callout>

## Install RPM Fusion

[RPM Fusion](https://rpmfusion.org/) provides additional software repositories with packages that cannot be included in Fedora due to licensing or patent restrictions. This includes multimedia codecs, drivers, and other proprietary software.

```bash
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Upgrade Multimedia Packages

After adding RPM Fusion, upgrade your multimedia packages to include better codec support:

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

<Callout type="warning">
  The `--allowerasing` flag removes conflicting packages. Review what's being
  removed before confirming.
</Callout>

## Hardware Video Acceleration

Hardware video acceleration significantly improves video playback performance and reduces CPU usage by offloading decoding to your GPU:

```bash
# Common libraries for all systems
sudo dnf install ffmpeg-libs libva libva-utils

# For Intel GPUs
sudo dnf swap libva-intel-media-driver intel-media-driver --allowerasing
sudo dnf install libva-intel-driver
```

<Callout type="tip">
  If you have an AMD or NVIDIA GPU, install the appropriate drivers for hardware
  acceleration support.
</Callout>

## Disable removable media auto mount and open

```bash
gsettings set org.gnome.desktop.media-handling automount false
gsettings set org.gnome.desktop.media-handling automount-open false
```

## Next Steps

<Callout>
  Your Fedora setup is complete! Here are some recommendations to personalize
  your environment further.
</Callout>

- Customize GNOME using the Tweaks app for keyboard shortcuts and appearance
- Install VS Code extensions for your preferred programming languages
- Explore additional GNOME extensions from [extensions.gnome.org](https://extensions.gnome.org/)
- Set up your development environment per project needs
- Keep your system updated regularly with `sudo dnf upgrade`

Happy coding!
