(function (global) {
    System.config({
        paths: {
            'js': 'js/'
        },
        map: {
            app: 'com',
            '@angular/core': 'js:@angular/core/bundles/core.umd.js',
            '@angular/common': 'js:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'js:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'js:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'js:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/common/http': 'js:@angular/common/bundles/common-http.umd.js',
            '@angular/router': 'js:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'js:@angular/forms/bundles/forms.umd.js',
            'rxjs': 'js:rxjs',
            'tslib': 'js:tslib',
        },
        packages: {
            app: {
                main: './ragnarok/sample/main/main.js',
                defaultExtension: 'js'
            },
            'rxjs/ajax': {main: 'index.js', defaultExtension: 'js' },
            'rxjs/operators': {main: 'index.js', defaultExtension: 'js' },
            'rxjs/testing': {main: 'index.js', defaultExtension: 'js' },
            'rxjs/websocket': {main: 'index.js', defaultExtension: 'js' },
            rxjs: { main: 'index.js', defaultExtension: 'js' },
            tslib: {
                main: '/tslib.js'
            }
        }
    });
})(this);
