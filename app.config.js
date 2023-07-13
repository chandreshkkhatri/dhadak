const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const envName = process.env.ENVIRONMENT || "dev";
const localHostUrl = process.env.LOCALHOST_URL || "http://localhost:8000";

const isProduction = envName === "production";
const androidPackageNameBase = "com.openmandi.dhadak";

const packageName = isProduction
  ? androidPackageNameBase
  : `${androidPackageNameBase}.${envName}`;
const bundleIdentifier = packageName;

const appNameBase = "Manthan";
const appName = isProduction ? appNameBase : `${appNameBase}-${envName}`;

module.exports = () => ({
  expo: {
    name: appName,
    slug: "dhadak",
    version: "0.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: packageName,
      versionCode: 6,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "e3bf33f0-480c-49ad-bbd0-6c029f45ccae",
      },
      envName,
      localHostUrl,
    },
    owner: "chandresh.code",
    runtimeVersion: "exposdk:48.0.0",
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/e3bf33f0-480c-49ad-bbd0-6c029f45ccae",
    },
  },
});
