import Constants from "expo-constants";

const environments = {
  development: {
    apiUrl: `${Constants.expoConfig?.extra?.localHostUrl}/dhadkan/api/v1`,
  },
  preview: {
    apiUrl: "https://preview.example.com",
  },
  staging: {
    apiUrl: "https://staging.example.com",
  },
  production: {
    apiUrl: "https://example.com",
  },
};

const getEnvVars = (env = Constants.manifest?.releaseChannel) => {
  if (__DEV__) {
    return environments.development;
  } else if (env === "preview") {
    return environments.preview;
  } else if (env === "staging") {
    return environments.staging;
  } else if (env === "production") {
    return environments.production;
  }
};

const currentEnvironment = getEnvVars();

export default currentEnvironment;
