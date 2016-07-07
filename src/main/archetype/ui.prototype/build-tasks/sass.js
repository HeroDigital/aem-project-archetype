var gulp             = require( 'gulp' );
var source           = require( 'vinyl-source-stream' );
var rename           = require( 'gulp-rename' );
var sass             = require( 'gulp-sass' );
var postcss          = require( 'gulp-postcss' );
var autoprefixer     = require( 'autoprefixer' );
var eol              = require( 'gulp-line-ending-corrector' );

function sassTask(  ) {

    gulp.src('client-libraries/pagelibs/styles/pagelibs.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( rename({ extname: '.bundle.css' }) )
        .pipe( postcss([ autoprefixer({browsers: ['Chrome >= 30', 'ff >= 30', 'ie >= 9', 'Safari >= 6']}) ]) )
        .pipe( eol({eolc: 'LF', encoding: 'utf8'}) )
        .pipe( gulp.dest( 'prototype/dist/css/' ) ) // prototype css
        .pipe( gulp.dest( '../ui.apps/src/main/content/jcr_root/etc/clientlibs/${cssId}-pagelibs/css' ) ); // aem css
}

module.exports = sassTask;
