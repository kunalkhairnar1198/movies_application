const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

async function getConfig() {
  const defaultConfig = await getDefaultConfig(__dirname);

  // Merge your custom Metro config with default settings
  const mergedConfig = mergeConfig(defaultConfig, {});

  // Wrap with Reanimated config
  return wrapWithReanimatedMetroConfig(mergedConfig);
}

module.exports = getConfig();
