var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function moveExtlibsCssToPrototype() {

    return gulp.src( 'client-libraries/extlibs/styles/**.css', {
            base : 'client-libraries/extlibs/styles'
        })
        .pipe(gulp.dest("prototype/dist/css"))
        .on('end', function(){
            console.log( "      Moved external CSS files to prototype folder ");
        });
}

module.exports = moveExtlibsCssToPrototype;
