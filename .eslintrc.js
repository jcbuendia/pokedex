module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'no-catch-shadow': 'off',
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-module': {
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
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@providers': './src/providers',
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
    }
  }
};
