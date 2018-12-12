var config = require('./config').config;
var gulp = require('gulp');
var tslint = require('gulp-tslint');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject("tsconfig.json");

gulp.task('tslint', function () {
    return gulp.src(config.typeScriptSource)
        .pipe(tslint({
            formatter: 'prose',
            program: require("tslint").Linter.createProgram("./tsconfig.json")
        }))
        .pipe(tslint.report());
});

gulp.task("buildTS", ["tslint"], function () {
   var tsResult = gulp.src(config.typeScriptSource)
       .pipe(tsProject());
   return tsResult.js
       .pipe(gulp.dest(config.destinationPath));
});
