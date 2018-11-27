import DeviceInfo from 'react-native-device-info';
import { isWeb, isAndroid, isNative } from '../utils/common';

if (isNative) {
  const brand = DeviceInfo.getBrand();
  const buildNumber = DeviceInfo.getBuildNumber();
  const carrier = DeviceInfo.getCarrier(); // "SOFTBANK"
  const freeDiskStorage = DeviceInfo.getFreeDiskStorage();
  const fontScale = DeviceInfo.getFontScale(); // 1.2
  const storageSize = DeviceInfo.getTotalDiskCapacity();
  const totalMemory = DeviceInfo.getTotalMemory(); // 1995018240
  console.log('>>>>>>>>>>>>>>>>>>>> brand: ', brand);
  console.log('>>>>>>>>>>>>>>>>>>>> buildNumber: ', buildNumber);
  console.log('>>>>>>>>>>>>>>>>>>>> carrier: ', carrier);
  console.log('>>>>>>>>>>>>>>>>>>>> freeDiskStorage: ', freeDiskStorage);
  console.log('>>>>>>>>>>>>>>>>>>>> fontScale: ', fontScale);
  console.log('>>>>>>>>>>>>>>>>>>>> storageSize: ', storageSize);
  console.log('>>>>>>>>>>>>>>>>>>>> totalMemory: ', totalMemory);
}

if (isWeb) {
  const firstInstallTime = DeviceInfo.getFirstInstallTime();
  const maxMemory = DeviceInfo.getMaxMemory(); // 402653183
  console.log('>>>>>>>>>>>>>>>>>>>> firstInstallTime: ', firstInstallTime);
  console.log('>>>>>>>>>>>>>>>>>>>> maxMemory: ', maxMemory);
}

if (isAndroid) {
  const apiLevel = DeviceInfo.getAPILevel();
  const firstInstallTime = DeviceInfo.getFirstInstallTime();
  const referrer = DeviceInfo.getInstallReferrer();
  const instanceId = DeviceInfo.getInstanceID();
  const lastUpdateTime = DeviceInfo.getLastUpdateTime();
  const maxMemory = DeviceInfo.getMaxMemory(); // 402653183
  const phoneNumber = DeviceInfo.getPhoneNumber();
  const serialNumber = DeviceInfo.getSerialNumber();
  console.log('>>>>>>>>>>>>>>>>>>>> apiLevel: ', apiLevel);
  console.log('>>>>>>>>>>>>>>>>>>>> firstInstallTime: ', firstInstallTime);
  console.log('>>>>>>>>>>>>>>>>>>>> referrer: ', referrer);
  console.log('>>>>>>>>>>>>>>>>>>>> instanceId: ', instanceId);
  console.log('>>>>>>>>>>>>>>>>>>>> lastUpdateTime: ', lastUpdateTime);
  console.log('>>>>>>>>>>>>>>>>>>>> maxMemory: ', maxMemory);
  console.log('>>>>>>>>>>>>>>>>>>>> phoneNumber: ', phoneNumber);
  console.log('>>>>>>>>>>>>>>>>>>>> serialNumber: ', serialNumber);
}

// Para todas as verções.
const appName = DeviceInfo.getApplicationName(); // "Learnium Mobile"
const bundleId = DeviceInfo.getBundleId(); // "com.learnium.mobile"
const deviceCountry = DeviceInfo.getDeviceCountry(); // "US"
const deviceId = DeviceInfo.getDeviceId();
const deviceLocale = DeviceInfo.getDeviceLocale();
const deviceName = DeviceInfo.getDeviceName();
const manufacturer = DeviceInfo.getManufacturer();
const model = DeviceInfo.getModel();
const readableVersion = DeviceInfo.getReadableVersion();
const systemName = DeviceInfo.getSystemName();
const systemVersion = DeviceInfo.getSystemVersion();
const timezone = DeviceInfo.getTimezone(); // "Africa/Tunis"
const uniqueId = DeviceInfo.getUniqueID();
const userAgent = DeviceInfo.getUserAgent();
const version = DeviceInfo.getVersion();
const is24Hour = DeviceInfo.is24Hour(); // true
const isEmulator = DeviceInfo.isEmulator(); // false
console.log('>>>>>>>>>>>>>>>>>>>> appName: ', appName);
console.log('>>>>>>>>>>>>>>>>>>>> bundleId: ', bundleId);
console.log('>>>>>>>>>>>>>>>>>>>> deviceCountry: ', deviceCountry);
console.log('>>>>>>>>>>>>>>>>>>>> deviceId: ', deviceId);
console.log('>>>>>>>>>>>>>>>>>>>> deviceLocale: ', deviceLocale);
console.log('>>>>>>>>>>>>>>>>>>>> deviceName: ', deviceName);
console.log('>>>>>>>>>>>>>>>>>>>> manufacturer: ', manufacturer);
console.log('>>>>>>>>>>>>>>>>>>>> model: ', model);
console.log('>>>>>>>>>>>>>>>>>>>> readableVersion: ', readableVersion);
console.log('>>>>>>>>>>>>>>>>>>>> systemName: ', systemName);
console.log('>>>>>>>>>>>>>>>>>>>> systemVersion: ', systemVersion);
console.log('>>>>>>>>>>>>>>>>>>>> timezone: ', timezone);
console.log('>>>>>>>>>>>>>>>>>>>> uniqueId: ', uniqueId);
console.log('>>>>>>>>>>>>>>>>>>>> userAgent: ', userAgent);
console.log('>>>>>>>>>>>>>>>>>>>> version: ', version);
console.log('>>>>>>>>>>>>>>>>>>>> is24Hour: ', is24Hour);
console.log('>>>>>>>>>>>>>>>>>>>> isEmulator: ', isEmulator);

DeviceInfo.getBatteryLevel().then(batteryLevel => {
  console.log('>>>>>>>>>>>>>>>>>>>> batteryLevel: ', batteryLevel);
});
DeviceInfo.isPinOrFingerprintSet()(isPinOrFingerprintSet => {
  console.log('>>>>>>>>>>>>>>>>>>>> isPinOrFingerprintSet: ', isPinOrFingerprintSet);
});