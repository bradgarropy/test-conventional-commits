const config = {
    "dryRun": false,
    "plugins": [
        ["@semantic-release/commit-analyzer", {preset: "conventionalcommits"}],
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/git"
    ]
}

module.exports = config
