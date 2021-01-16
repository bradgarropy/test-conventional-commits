const config = {
    "dryRun": false,
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            preset: "conventionalcommits",
            releaseRules: [
                {
                    type: "feat", release: "minor",
                    type: "fix", release: "patch",
                    type: "docs", release: "patch",
                    type: "style", release: "patch",
                    type: "refactor", release: "patch",
                    type: "perf", release: "patch",
                    type: "test", release: "patch",
                    type: "chore", release: "patch",
                }
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/github"
    ]
}

module.exports = config
