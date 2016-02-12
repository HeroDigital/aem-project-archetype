'use strict';

import gulp from 'gulp';
import iron from 'iron-fe';

// build js
import browserify               from './build-tasks/browserify';
import watchBrowserify          from './build-tasks/watch-browserify';
// build sass
import sass                     from './build-tasks/sass';
import watchSass                from './build-tasks/watch-sass';
// move compiled css/js to aem clientlibs
import moveToCq                 from './build-tasks/move-to-cq';
import moveFontsToCq            from './build-tasks/fonts-to-cq';
// prototype
import sassPrototype            from './build-tasks/prototype-sass';
import browserifyPrototype      from './build-tasks/prototype-browserify';
import assemblePrototype        from './build-tasks/prototype-assemble';
import movePagelibsToPrototype  from './build-tasks/prototype-move-pagelibs';
import moveExtlibsToPrototype   from './build-tasks/prototype-move-extlibs';
import moveExtlibsCssToPrototype   from './build-tasks/prototype-move-extlibs-css';
import moveSrcCssToPrototype   from './build-tasks/prototype-move-src-css';
import moveFontsToPrototype     from './build-tasks/fonts-to-prototype';
import prettifyHtml             from './build-tasks/prettify';
import watchDev                 from './build-tasks/watch-dev.js';

var runSequence = require('run-sequence');

/*
 * BUILD TASKS
 */
gulp.task( 'browserify', browserify );
gulp.task( 'sass', sass );
gulp.task( 'moveToCq', moveToCq );
gulp.task( 'moveFontsToCq', moveFontsToCq );

/*
 * DEV TASKS
 */
gulp.task( 'watchBrowserify', watchBrowserify );
gulp.task( 'watchSass', watchSass );

/*
 * PROTOTYPE Specific Tasks
 */
gulp.task( 'assemble', assemblePrototype );
gulp.task( 'sassPrototype', sassPrototype );
gulp.task( 'browserifyPrototype', browserifyPrototype );
gulp.task( 'movePageLibs', movePagelibsToPrototype );
gulp.task( 'moveExtLibs', moveExtlibsToPrototype );
gulp.task( 'moveExtLibsCss', moveExtlibsCssToPrototype );
gulp.task( 'moveSrcCss', moveSrcCssToPrototype );
gulp.task( 'moveFontsToPrototype', moveFontsToPrototype );
gulp.task( 'prettifyHtml', prettifyHtml );

// Prototype sequences
gulp.task( 'html', function(callback) {
    runSequence(
        'assemble',
        'prettifyHtml',
        callback
    );
});
gulp.task( 'cssPrototype', function(callback) {
    runSequence(
        'sassPrototype',
        callback
    );
});
gulp.task( 'jsPrototype', function(callback) {
    runSequence(
        'browserifyPrototype',
        callback
    );
});

// Development sequences
gulp.task( 'css', function(callback) {
    runSequence(
        'sass',
        'movePageLibs',
        callback
    );
});
gulp.task( 'js', function(callback) {
    runSequence(
        'browserify',
        'movePageLibs',
        callback
    );
});

// Watch when develop
gulp.task( 'watch', watchDev );

// prototype final sequence
gulp.task( 'prototype', function(callback) {
    runSequence(
        // 'html',
        'css',
        'js',
        'movePageLibs',
        'moveExtLibs',
        'moveExtLibsCss',
        'moveSrcCss',
        'moveFontsToPrototype',
        callback
    );
});

gulp.task( 'install' , function(){
    iron.install();
});

// gulp default task: $ gulp
gulp.task('default', function(callback) {
    runSequence(
        'browserify',
        'sass',
        'moveToCq',
        'moveFontsToCq',
        callback
    );
});
