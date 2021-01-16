const config = {
    "dryRun": false,
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            preset: "conventionalcommits",
            releaseRules: [
                {type: "feat", release: "minor"},
                {type: "fix", release: "patch"},
                {type: "docs", release: "patch"},
                {type: "style", release: "patch"},
                {type: "refactor", release: "patch"},
                {type: "perf", release: "patch"},
                {type: "test", release: "patch"},
                {type: "build", release: "patch"},
                {type: "ci", release: "patch"},
                {type: "chore", release: "patch"},
                {type: "revert", release: "patch"},
            ]
        }],
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "changelog.md"
            }
        ],
        // "@semantic-release/npm",
        // "@semantic-release/github"
    ]
}

module.exports = config
