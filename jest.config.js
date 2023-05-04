module.exports = {
    transform: {
        '\\.svg': `<rootDir>/__mocks__/svgTransform.js`,
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '\\.svg': `<rootDir>/__mocks__/svgTransform.js`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mocks.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [
        `node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`,
    ],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testEnvironmentOptions: {
        url: `http://localhost`,
    },
    setupFiles: [`<rootDir>/loadershim.js`],
    testEnvironment: `jsdom`,
    setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
