var gulp = require( 'gulp' );

function moveExtlibsToPrototype() {

    return gulp.src( 'client-libraries/extlibs/**.js', {
            base : 'client-libraries/extlibs'
        })
        .pipe(gulp.dest("prototype/dist/js"));
}

module.exports = moveExtlibsToPrototype;
