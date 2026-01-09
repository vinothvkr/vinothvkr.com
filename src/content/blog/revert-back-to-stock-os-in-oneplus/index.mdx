---
title: 'Revert back to stock OS in OnePlus'
description: 'This guide shows how to restore the stock Oxygen OS from any custom ROM in OnePlus 7 and latest OnePlus devices. This may work in 7 and below version of devices. But this worked 100% in my 7T device and this how I reverted back my device.'
date: '2021-05-31'
tags: ['Android', 'Oxygen OS', 'OnePlus']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro'

This comprehensive guide walks you through the process of restoring the stock Oxygen OS from any custom ROM on OnePlus 7 and newer devices. While this method may work on OnePlus 7 and earlier versions, it has been verified to work flawlessly on the OnePlus 7T.

<Callout variant="warning">
**Important:** Please read through the entire guide at least once before following the steps to avoid issues from missed instructions. Additionally, **backup all your data** before proceeding, as this process will wipe your device.
</Callout>

## Requirements

Before you begin, make sure you have the following:

- **ADB and Fastboot** - If not already installed, follow [this setup guide](https://wiki.lineageos.org/adb_fastboot_guide.html)
- **Oxygen OS ROM** - Download from [OnePlus Support](https://www.oneplus.in/support) (select your device model)
- **payload-dumper-go** - Download from [GitHub Releases](https://github.com/ssut/payload-dumper-go/releases)
- **Windows PC** - This guide uses Windows commands
- **USB Cable** - To connect your OnePlus device

## Preparation

### Step 1: Organize Files

1. Create a folder named `android` in your C: drive (`C:\android`)
2. Download the Oxygen OS ROM file and place it in the `android` folder
3. Extract the `payload-dumper-go` zip file
4. Move `payload-dumper-go.exe` to the `C:\android` folder

### Step 2: Extract ROM Files

1. Open PowerShell or Command Prompt and navigate to your android folder:
   ```
   cd C:\android
   ```

2. Extract the ROM using payload-dumper-go:
   ```
   .\payload-dumper-go.exe .\OnePlusXXXX_...._XXXX.zip
   ```
   *(Replace `OnePlusXXXX_...._XXXX.zip` with your actual ROM filename)*

3. Wait for the extraction to complete. You'll see a new folder named `extracted_XXXXXXXX_XXXXX`

4. Navigate to the extracted folder:
   ```
   cd extracted_XXXXXXXX_XXXXX
   ```
   *(Replace with your actual extracted folder name)*

## Flashing Process

<Callout variant="warning">
**Warning:** The flashing process will erase all data on your device. Ensure you have backed up everything important before proceeding.
</Callout>

### Step 1: Boot into Fastboot Mode

1. Power off your OnePlus device completely
2. Hold `Volume Up` + `Volume Down` + `Power` simultaneously until the fastboot menu appears
3. In your PowerShell window, verify the device is detected:
   ```
   fastboot devices
   ```
   You should see your device listed with a serial number

### Step 2: Flash Boot and Recovery

1. Flash the boot and recovery images:
   ```
   fastboot flash --slot=all boot boot.img
   fastboot flash --slot=all recovery recovery.img
   ```

2. Reboot into fastbootd mode:
   ```
   fastboot reboot fastboot
   ```
   Wait a few seconds for the device to reboot into fastbootd mode.

### Step 3: Complete Flash Process

1. Start by wiping the device and then run all the flashing commands in sequence. This may take several minutes:

   ```
   fastboot -w
   fastboot flash --slot=all abl abl.img
   fastboot flash --slot=all aop aop.img
   fastboot flash --slot=all bluetooth bluetooth.img
   fastboot flash --slot=all boot boot.img
   fastboot flash --slot=all cmnlib64 cmnlib64.img
   fastboot flash --slot=all cmnlib cmnlib.img
   fastboot flash --slot=all devcfg devcfg.img
   fastboot flash --slot=all dsp dsp.img
   fastboot flash --slot=all dtbo dtbo.img
   fastboot flash --slot=all hyp hyp.img
   fastboot flash --slot=all imagefv imagefv.img
   fastboot flash --slot=all keymaster keymaster.img
   fastboot flash --slot=all LOGO LOGO.img
   fastboot flash --slot=all modem modem.img
   fastboot flash --slot=all multiimgoem multiimgoem.img
   fastboot flash --slot=all odm odm.img
   fastboot flash --slot=all oem_stanvbk oem_stanvbk.img
   fastboot flash --slot=all opproduct opproduct.img
   fastboot flash --slot=all qupfw qupfw.img
   fastboot flash --slot=all recovery recovery.img
   fastboot flash --slot=all storsec storsec.img
   fastboot flash --slot=all tz tz.img
   fastboot flash --slot=all uefisecapp uefisecapp.img
   fastboot flash --slot=all vbmeta vbmeta.img
   fastboot flash --slot=all vbmeta_system vbmeta_system.img
   fastboot flash --slot=all xbl_config xbl_config.img
   fastboot flash --slot=all xbl xbl.img
   fastboot reboot fastboot
   fastboot flash --slot=all system system.img
   fastboot flash --slot=all system_ext system_ext.img
   fastboot flash --slot=all vendor vendor.img
   fastboot flash --slot=all product product.img
   ```

<Callout variant="note">
The flashing process may take 10-15 minutes. Do not disconnect your device or interrupt the process. Wait for all commands to complete successfully.
</Callout>

## Post-Flash Steps

### Option 1: Reboot Device (Recommended)

If you want to keep the bootloader unlocked:
```
fastboot reboot
```

Your device will boot into the stock Oxygen OS with a fresh installation.

### Option 2: Lock the Bootloader

If you want to restore the bootloader lock:

1. Reboot to bootloader:
   ```
   fastboot reboot bootloader
   ```

2. Lock the bootloader:
   ```
   fastboot oem lock
   ```

3. Follow the on-screen prompts on your device to confirm the lock

4. After the lock completes, reboot:
   ```
   fastboot reboot
   ```

## Troubleshooting

- **Device not detected**: Ensure USB debugging is enabled and try a different USB port
- **Flashing errors**: Make sure all image files are in the correct directory
- **Slow flashing**: This is normal; do not interrupt the process
- **Device stuck**: Hold the power button for 10 seconds to force restart

## Conclusion

Congratulations! You have successfully restored the stock Oxygen OS on your OnePlus device. Your phone should now run the official Oxygen OS with a clean slate. If you encounter any issues, please check the troubleshooting section or consult the OnePlus community forums.

---

If this guide helped you, consider supporting my work by [buying me a coffee](https://www.buymeacoffee.com/vinothvkr) ☕
