const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const env = process.env.ENV_NAME || "production";
const localHostUrl = process.env.LOCALHOST_URL || "http://localhost:8000";

const isProduction = env === "production";
const androidPackageNameBase = "com.openmandi.dhadak";

const packageName = isProduction
  ? androidPackageNameBase
  : `${androidPackageNameBase}.${env}`;
const bundleIdentifier = packageName;

const appNameBase = "Dhadkan";
const appName = isProduction ? appNameBase : `${appNameBase}-${env}`;

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
      envName: env,
      localHostUrl,
    },
    owner: "chandresh.code",
    runtimeVersion: {
      policy: "sdkVersion",
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/e3bf33f0-480c-49ad-bbd0-6c029f45ccae",
    },
  },
});
