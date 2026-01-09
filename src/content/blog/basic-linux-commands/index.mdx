---
title: 'Basic Linux commands'
description: 'Essential Linux commands for user and group management, file permissions, and system administration.'
date: '2020-07-23'
tags: ['Linux', 'Ubuntu', 'Fedora']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

This guide covers essential Linux commands for user and group management, which are fundamental for system administration and security. Whether you're managing a single server or multiple systems, these commands will help you maintain user accounts efficiently.

<Callout variant="note">
Most of these commands require **sudo** (superuser) privileges. If you're not in the sudoers group, ask your system administrator to grant access before proceeding.
</Callout>

## User Management

### List All Users

Display all user accounts on the system:

```bash
cat /etc/passwd
```

Each line shows: username, password hash, UID, GID, full name, home directory, and login shell.

### Add a New User

Create a new user account with a home directory:

```bash
sudo adduser username
```

This command will prompt you to:
- Set a password
- Confirm the password
- Enter user information (name, room number, phone, etc.) — leave blank if not needed

### Add User to Sudo Group

Grant administrative privileges to an existing user:

```bash
sudo usermod -aG sudo username
```

The `-aG` flag means: **-a** (append) and **-G** (groups). The user is added to the sudo group without removing from other groups.

<Callout variant="warning" title="Sudo Access">
Only add trusted users to the sudo group, as they gain root-level access. Always verify before granting sudo privileges.
</Callout>

### Delete a User

Remove a user account while keeping their home directory:

```bash
sudo deluser username
```

### Delete User and Home Directory

Completely remove a user and all their files:

```bash
sudo deluser --remove-home username
```

<Callout variant="danger" title="Permanent Deletion">
This command permanently deletes the user's home directory and all files. There is no undo — ensure you have backups before proceeding.
</Callout>

## Group Management

### List All Groups

Display all groups on the system:

```bash
cat /etc/group
```

Each line shows: group name, password field, GID, and member list.

### Create a New Group

```bash
sudo addgroup groupname
```

### Add User to Group

```bash
sudo usermod -aG groupname username
```

### Remove User from Group

```bash
sudo deluser username groupname
```

## File Permissions and Ownership

### Change Group Ownership

Assign a group to a directory and all its contents recursively:

```bash
sudo chgrp -R groupname directoryname
```

The `-R` flag applies the change recursively to all files and subdirectories.

<Callout variant="tip">
For example, to give the `www-data` group ownership of a web directory:
```bash
sudo chgrp -R www-data /var/www/mysite
```
</Callout>

### Change File Ownership

Change both user and group ownership:

```bash
sudo chown -R username:groupname directoryname
```

Example:
```bash
sudo chown -R ubuntu:ubuntu /home/ubuntu/myproject
```

### View File Permissions

```bash
ls -l filename
```

Output shows permissions, owner, group, size, date, and filename.

## Summary

These fundamental commands are essential for managing users, groups, and permissions in Linux systems. Regular practice will make these operations second nature for system administration tasks.

To make directory read write access to group

```
sudo chmod g+rwx -R directoryname
```
