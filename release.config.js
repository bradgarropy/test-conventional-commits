const config = {
    dryRun: false,
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
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
                ],
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
                presetConfig: {
                    types: [
                        {type: "feat", section: "Features"},
                        {type: "fix", section: "Bug Fixes"},
                        {type: "docs", hidden: false},
                        {type: "style", hidden: false},
                        {type: "refactor", hidden: false},
                        {type: "perf", hidden: false},
                        {type: "test", hidden: false},
                        {type: "build", hidden: false},
                        {type: "ci", hidden: false},
                        {type: "chore", hidden: false},
                        {type: "revent", hidden: false},
                    ],
                },
            },
        ],
        [
            "@semantic-release/changelog",
            {
                changelogFile: "changelog.md",
            },
        ],
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["changelog.md", "package.json", "package-lock.json"],
                message: "chore(release): ${nextRelease.version} [skip ci]",
            },
        ],
        "@semantic-release/github",
    ],
}

module.exports = config
