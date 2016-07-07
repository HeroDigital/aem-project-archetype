var gulp = require( 'gulp' );

function moveExtlibsCssToPrototype() {

    return gulp.src( 'client-libraries/extlibs/styles/**.css', {
            base : 'client-libraries/extlibs/styles'
        })
        .pipe(gulp.dest("prototype/dist/css"));
}

module.exports = moveExtlibsCssToPrototype;
