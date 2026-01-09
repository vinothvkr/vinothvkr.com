---
title: 'How to install PHP 7.3 in Ubuntu 18.04'
description: 'Step-by-step guide to install PHP 7.3 on Ubuntu 18.04. Learn how to add the Ondřej Surý PPA and install PHP for Nginx or Apache.'
date: '2019-10-08'
tags: ['Ubuntu', 'php', 'Debian']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

By default, Ubuntu 18.04 LTS includes PHP 7.2 in its official repositories. However, many modern applications require PHP 7.3 or later—for example, the latest WordPress versions, Laravel frameworks, and other web applications.

This guide shows how to install PHP 7.3 on Ubuntu 18.04 using Ondřej Surý's PPA, a widely-trusted source for newer PHP versions.

<Callout variant="note">
**Why Not Use Official Repos?** Ubuntu LTS versions (like 18.04) maintain package versions for stability. Third-party PPAs like Ondřej's provide newer versions with security updates for the application lifecycle.
</Callout>

## Prerequisites

- Ubuntu 18.04 LTS or derivative (Linux Mint, Pop!_OS, etc.)
- Root or sudo access
- Internet connection
- apt package manager

## Step 1: Add Ondřej Surý's PPA Repository

Ondřej Surý maintains a well-maintained repository of unsupported PHP versions for Debian and Ubuntu. First, add his PPA:

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

This adds the PPA to your system and refreshes the package list.

<Callout variant="tip">
Adding multiple repos: You can add other PPAs from Ondřej for related tools like `ppa:ondrej/apache2` (for Apache) or `ppa:ondrej/nginx` (for Nginx) if needed.
</Callout>

## Step 2: Install PHP 7.3

After adding the PPA, install PHP 7.3. Choose based on your web server:

### For Nginx (with PHP-FPM)

```bash
sudo apt install php7.3-fpm
```

This installs PHP 7.3 FastCGI Process Manager (FPM) for use with Nginx. FPM is more efficient than mod_php for high-traffic sites.

### For Apache (with mod_php)

```bash
sudo apt install php7.3
```

This installs PHP 7.3 with Apache module support, automatically enabling mod_php.

### Install Common Extensions (Optional)

Most applications need additional PHP extensions:

```bash
sudo apt install php7.3-mysql php7.3-gd php7.3-curl php7.3-mbstring php7.3-xml php7.3-zip
```

<Callout variant="note">
**Common Extensions Explained:**
- `php7.3-mysql` — MySQL/MariaDB database support
- `php7.3-gd` — Image manipulation (required for many CMS platforms)
- `php7.3-curl` — HTTP requests (needed for API calls)
- `php7.3-mbstring` — Multi-byte string support (internationalization)
- `php7.3-xml` — XML parsing support
- `php7.3-zip` — ZIP archive support
</Callout>

## Step 3: Verify the Installation

Confirm that PHP 7.3 was installed correctly:

```bash
php -v
```

Output should show:

```
PHP 7.3.x-x (cli) (built: ...)
Copyright (c) 1997-2019 The PHP Group
```

### Check PHP Information

For detailed information about your PHP installation (modules, configuration, etc.):

```bash
php -i
```

Or create a simple info script:

```bash
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php
```

Then visit `http://yourserver/info.php` in a browser.

<Callout variant="warning">
**Security:** Always delete the `info.php` file after verification. Exposing phpinfo() publicly reveals system details to attackers.
</Callout>

## Step 4: Enable PHP-FPM Service (Nginx only)

If you installed php7.3-fpm, enable and start the service:

```bash
sudo systemctl enable php7.3-fpm
sudo systemctl start php7.3-fpm
```

Verify it's running:

```bash
sudo systemctl status php7.3-fpm
```

## Troubleshooting

### Dependency Conflicts

If you receive dependency errors, clear the package cache:

```bash
sudo apt clean
sudo apt autoclean
sudo apt autoremove
sudo apt update
```

### Multiple PHP Versions

If you have multiple PHP versions installed, check which is default:

```bash
update-alternatives --list php
```

Switch versions:

```bash
sudo update-alternatives --set php /usr/bin/php7.3
```

### Check Apache Module

For Apache, verify mod_php is enabled:

```bash
sudo a2enmod php7.3
sudo systemctl restart apache2
```

## Summary

You have successfully installed PHP 7.3 on Ubuntu 18.04. Your web server (Nginx or Apache) can now run modern PHP applications that require version 7.3. Remember to keep your system updated with:

```bash
sudo apt update && sudo apt upgrade
```

For additional help, consult the [official Ondřej Surý PPA page](https://launchpad.net/~ondrej/+archive/ubuntu/php) or [PHP documentation](https://www.php.net/docs.php).
