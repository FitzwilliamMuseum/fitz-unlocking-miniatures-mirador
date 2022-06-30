module.exports = {
  type: 'react-app',
  webpack: {
    publicPath: process.env.GITLAB_PAGES_BASE_PATH ? process.env.GITLAB_PAGES_BASE_PATH : ''
  }
}
