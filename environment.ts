import Constants from "expo-constants";

const environments = {
  development: {
    apiUrl: `${Constants.expoConfig?.extra?.localHostUrl}/api/v1`,
  },
  preview: {
    apiUrl: "https://dev.dhadkan.openmandi.in/api/v1",
  },
  staging: {
    apiUrl: "https://staging.dhadkan.openmandi.in/api/v1",
  },
  production: {
    apiUrl: "https://dhadkan.openmandi.in/api/v1",
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
