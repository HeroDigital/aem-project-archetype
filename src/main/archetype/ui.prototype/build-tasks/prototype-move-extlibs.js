var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function moveExtlibsToPrototype() {

    return gulp.src( 'client-libraries/extlibs/**.js', {
            base : 'client-libraries/extlibs'
        })
        .pipe(gulp.dest("prototype/dist/js"))
        .on('end', function(){
            console.log( "      Moved external JS files to prototype folder ");
        });
}

module.exports = moveExtlibsToPrototype;
