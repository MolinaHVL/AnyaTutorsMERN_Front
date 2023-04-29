module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-discard-duplicates'),
        require('postcss-merge-rules')
    ]
};