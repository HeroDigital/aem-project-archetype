var gulp = require( 'gulp' );

function moveFontsToCq() {

    gulp.src( ["client-libraries/pagelibs/fonts/**/**"] )
        .pipe( gulp.dest('../ui.apps/src/main/content/jcr_root/etc/clientlibs/${cssId}-pagelibs/fonts') )
        .pipe( gulp.dest('prototype/dist/fonts') );
}

module.exports = moveFontsToCq;
