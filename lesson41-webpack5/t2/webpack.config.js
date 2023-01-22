const path = require('path');

module.exports = {
  entry: {
    dashboard: './src/dashboard/index.js',
    profile: './src/profile/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  watch: true,
};
