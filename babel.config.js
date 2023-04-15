module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        "module:react-native-dotenv", {
          envName: "Development",
          moduleName: "@env",
          path: ".env",
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};
