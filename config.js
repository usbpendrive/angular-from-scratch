var baseDirs = {
    sourceRoot: "src/",
    codeRoot: 'com',
    destinationPath: 'build',
    mapPath: 'maps',
    testRoot: 'tests/',
    testWebRoot: 'base/'
};

var configObject = {
    typeScriptSource: [baseDirs.sourceRoot + "**/*.ts"],
    typeScriptTestSource: [baseDirs.testRoot + "**/*.ts"],
    htmlSource: [baseDirs.sourceRoot + "**/*.html"],
    htmlTemplateSource: [baseDirs.sourceRoot + baseDirs.codeRoot + '/**/*.html'],
    javaScriptLibraries: [baseDirs.sourceRoot + 'js/**/*.js'],
    destinationPathForJSLibraries: baseDirs.destinationPath + '/js',
    cssSource: [baseDirs.sourceRoot + '**/*.css', '!' + baseDirs.sourceRoot + baseDirs.codeRoot + '/**/*.css'],
    cssDestinationFile: 'app.min.css',
    cssStyleURLsSource: [baseDirs.sourceRoot + baseDirs.codeRoot + '/**/*.css'],
    destinationPathForCSSStyleURLs: baseDirs.destinationPath + '/' + baseDirs.codeRoot,
    destinationPathForCSSStyleURLMaps: '..' + baseDirs.mapPath + '/' + baseDirs.codeRoot,
    staticAssetsSource: [baseDirs.sourceRoot + 'img/*.*'],
    destinationPathForStaticAssets: baseDirs.destinationPath + '/img'
};

var staticConfig = {
    nodeModulesSource: "node_modules/**",
    angularLibraries: [
        'core-js/client/shim.min.js',
        'zone.js/dist/**',
        'systemjs/dist/system.src.js',
        '@angular/**/bundles/**',
        'rxjs/**/*.js',
        'tslib/**.js'
    ],
    deletePath: [baseDirs.destinationPath + '/**'],
    devMode: true,
    testFilePatterns: [
        { pattern: baseDirs.testRoot + "base.test.ts" },
        { pattern: configObject.typeScriptSource[0] },
        { pattern: configObject.htmlTemplateSource[0] },
        { pattern: configObject.cssStyleURLsSource[0] },
        { pattern: configObject.typeScriptTestSource[0] }
    ],
    defaultDirsToExclude: [
        baseDirs.sourceRoot + baseDirs.codeRoot + '/ragnarok/sample/main/main.ts',
    ]
};

exports.config = Object.assign(baseDirs, configObject, staticConfig);
