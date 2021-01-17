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
        [
            "@semantic-release/release-notes-generator",
            {
                "preset": "conventionalcommits",
            }
        ],
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "changelog.md"
            }
        ],
        "@semantic-release/npm",
        [
            "@semantic-release/git", {
                "assets": ["changelog.md", "package.json", "package-lock.json"],
                "message": "chore(release): ${nextRelease.version} [skip ci]"
            }
        ],
        "@semantic-release/github"
    ]
}

module.exports = config
