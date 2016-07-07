var gulp                = require( 'gulp' );
var browserify          = require( 'browserify' );
var shim                = require( 'browserify-shim' );
var path                = require( 'path' );
var source              = require( 'vinyl-source-stream' );
var buffer              = require( 'vinyl-buffer' );
var rename              = require( 'gulp-rename' );
var eol                 = require( 'gulp-line-ending-corrector' );

function browserifyTask() {
    browserify('client-libraries/pagelibs/pagelibs.js', {transform: [shim]})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe( source('pagelibs.bundle.js') )
        .pipe( buffer() )
        .pipe( eol({eolc: 'LF', encoding: 'utf8'}) )
        .pipe( gulp.dest('prototype/dist/js/') )
        .pipe( gulp.dest('../ui.apps/src/main/content/jcr_root/etc/clientlibs/${cssId}-pagelibs/js') );
}

module.exports = browserifyTask;
