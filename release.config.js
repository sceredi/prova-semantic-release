const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      "assets": ["dist/*.js", "dist/*.js.map"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/changelog',   // Updates the changelog file with release notes
    '@semantic-release/github',  // Publishes the release on GitHub
    '@semantic-release/git'  // Commits the changelog and package.json version changes
  ]
};

module.exports = config;
