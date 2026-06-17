---
title: 'Oxygen OS OnePlus 7T OTA Updates'
description: 'Complete list of OTA update links for OnePlus 7T. Download official Oxygen OS OTA updates with checksums and version information.'
date: '2021-12-23'
tags: ['Android', 'Oxygen OS', 'OnePlus', 'OTA Updates']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

This article provides official over-the-air (OTA) update links for OnePlus 7T devices running Oxygen OS. Use these links to manually download and install updates on your device.

<Callout variant="note">
**What is an OTA Update?** OTA (Over-The-Air) updates allow you to update your device wirelessly without a computer. You can download updates directly on your phone or use the provided links with a computer.
</Callout>

## Oxygen OS 11.0.5.1 (Build HD65AA)

This update was released on December 10, 2021. Below are the available OTA packages for this version.

<Callout variant="note">
**Incremental vs Full Updates:** Incremental updates are smaller and contain only the changes from your current version. Full updates contain the entire OS and can be used from any previous version.
</Callout>

### Incremental Update

Use this if you're updating from an earlier version of Oxygen OS 11.

| Property | Details |
|----------|----------|
| **Version** | OnePlus7TOxygen_14_2112101928 |
| **Build Number** | OnePlus7TOxygen_14.I.31_GLO_0310_2112101928 |
| **File Size** | ~650 MB (estimated) |
| **MD5 Checksum** | `2dd6f0de11a78b2cc7dcb24b79472cf2` |
| **Download** | [OnePlus7TOxygen_14.I.31_OTA_0300-0310_patch_2112101928_ebcc0044.zip](https://otafsg-cost-az.coloros.com/OnePlus7T/OnePlus7TOxygen_14.I.31_GLO_0310_2112101928/patch/amazone2/GLO/OnePlus7TOxygen/OnePlus7TOxygen_14.I.31_GLO_0310_2112101928/OnePlus7TOxygen_14.I.31_OTA_0300-0310_patch_2112101928_ebcc0044.zip) |

### Full Update

Use this for a clean installation or if the incremental update fails.

| Property | Details |
|----------|----------|
| **Version** | OnePlus7TOxygen_14_2112101928 |
| **Build Number** | OnePlus7TOxygen_14.I.31_GLO_0310_2112101928 |
| **File Size** | ~2.5 GB (estimated) |
| **MD5 Checksum** | `ef3ad3623454dabe6da1a55999cb1d1a` |
| **Download** | [OnePlus7TOxygen_14.I.31_OTA_0310_all_2112101928_89439b64.zip](https://otafsg-cost-az.coloros.com/OnePlus7T/OnePlus7TOxygen_14.I.31_GLO_0310_2112101928/patch/amazone2/GLO/OnePlus7TOxygen/OnePlus7TOxygen_14.I.31_GLO_0310_2112101928/OnePlus7TOxygen_14.I.31_OTA_0310_all_2112101928_89439b64.zip) |

## How to Verify Downloads

After downloading the OTA file, verify its integrity using the MD5 checksum:

1. **Windows:** Open PowerShell and run:
   ```powershell
   certutil -hashfile "OnePlus7TOxygen_14.I.31_OTA_0300-0310_patch_2112101928_ebcc0044.zip" MD5
   ```

2. **macOS:** Open Terminal and run:
   ```bash
   md5 "OnePlus7TOxygen_14.I.31_OTA_0300-0310_patch_2112101928_ebcc0044.zip"
   ```

3. **Linux:** Open Terminal and run:
   ```bash
   md5sum "OnePlus7TOxygen_14.I.31_OTA_0300-0310_patch_2112101928_ebcc0044.zip"
   ```

Compare the output with the MD5 checksum provided above. If they match, the file downloaded correctly.

## Installation Instructions

For manual OTA installation via ADB:

1. Enable USB Debugging on your OnePlus 7T
2. Connect your device to a computer
3. Copy the OTA zip file to your device's internal storage
4. Go to **Settings > System > System Update > Local Update**
5. Select the downloaded OTA file and confirm
6. Your device will reboot and install the update

## Additional Resources

- **Oxygen Updater App:** [GitHub Repository](https://github.com/oxygen-updater/oxygen-updater) - Download the official Oxygen Updater app for easier OTA management
- **OnePlus Support:** Visit [OnePlus Support](https://www.oneplus.in/support) for device-specific support and additional updates
- **Community:** Join the [OnePlus Community](https://forums.oneplus.com/) for discussions and support

---

**Last Updated:** December 23, 2021

<Callout variant="warning">
**Note:** Always backup your data before installing OTA updates. While OTA updates are generally safe, unexpected issues can occasionally occur.
</Callout>
