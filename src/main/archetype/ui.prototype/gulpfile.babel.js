'use strict';

import gulp         from 'gulp';
import runSequence  from 'run-sequence';

// build js
import browserify               from './build-tasks/browserify';
import watchBrowserify          from './build-tasks/watch-browserify';
// build sass
import sass                     from './build-tasks/sass';
import watchSass                from './build-tasks/watch-sass';
// copy fonts to cq and prototype
import copyFonts                from './build-tasks/copy-fonts';
// prototype
import assemblePrototypeDocs        from './build-tasks/prototype-assemble-docs';
import assemblePrototypePages       from './build-tasks/prototype-assemble-pages';
import moveExtlibsToPrototype       from './build-tasks/prototype-move-extlibs';
import moveExtlibsCssToPrototype    from './build-tasks/prototype-move-extlibs-css';
import watchDev                     from './build-tasks/watch-dev.js';
import webserver                    from './build-tasks/webserver.js';

/*
 * BUILD TASKS
 */
gulp.task( 'browserify', browserify );
gulp.task( 'sass', sass );
gulp.task( 'copyFonts', copyFonts );

/*
 * DEV TASKS
 */
gulp.task( 'watchBrowserify', watchBrowserify );
gulp.task( 'watchSass', watchSass );

/*
 * PROTOTYPE Specific Tasks
 */
gulp.task( 'assembleDocs', assemblePrototypeDocs );
gulp.task( 'assemblePages', assemblePrototypePages );
gulp.task( 'moveExtLibs', moveExtlibsToPrototype );
gulp.task( 'moveExtLibsCss', moveExtlibsCssToPrototype );

/* Build the handlebar files into the prototype html files */
gulp.task( 'html', function(callback) {
    runSequence(
        'assembleDocs',
        'assemblePages',
        callback
    );
});

/* Setup watch task */
gulp.task( 'watch', watchDev );

/* Setup webserver */
gulp.task( 'webserver', webserver );

// prototype final sequence
gulp.task( 'prototype', function(callback) {
    gulp.start(
        'html',
        'sass',
        'browserify',
        'moveExtLibs',
        'moveExtLibsCss',
        'copyFonts'
    );
});

// gulp default task: $ gulp
gulp.task('default', function(callback) {
    gulp.start(
        'sass',
        'browserify',
        'copyFonts'
    );
});
