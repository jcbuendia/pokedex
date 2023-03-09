module.exports = (api) => {
  api.cache(false);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.json',
            '.jsx',
            '.ts',
            '.tsx'
          ],
          alias: {
            '@utils': './src/utils',
            '@providers': './src/providers',
            '@screens': './src/screens',
            '@containers': './src/containers',
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@common': './src/commons',
            '@config': './src/config',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@layouts': './src/layouts'
          }
        }
      ]
    ]
  };
};
