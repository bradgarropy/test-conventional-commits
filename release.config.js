const config = {
    dryRun: false,
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "conventionalcommits",
                releaseRules: [
                    {breaking: true, release: "major"},
                    {revert: true, release: "patch"},
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
                parserOpts: {
                    noteKeywords: ["BREAKING CHANGE"],
                },
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
                presetConfig: {
                    types: [
                        {
                            type: "feat",
                            hidden: false,
                            section: "Features",
                        },
                        {
                            type: "fix",
                            hidden: false,
                            section: "Fixes",
                        },
                        {
                            type: "docs",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "style",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "refactor",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "perf",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "test",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "build",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "ci",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "chore",
                            hidden: false,
                            section: "Improvements",
                        },
                        {
                            type: "revent",
                            hidden: false,
                            section: "Improvements",
                        },
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
