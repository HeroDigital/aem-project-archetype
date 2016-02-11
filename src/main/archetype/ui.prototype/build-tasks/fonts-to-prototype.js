var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function moveFontsToPrototype() {

    return gulp.src( 'client-libraries/pagelibs/fonts/**/**', {
            base : 'client-libraries/pagelibs'
        })
        .pipe(gulp.dest("prototype/dist"))
        .on('end', function(){
            console.log( "      Moved Font files to CQ ");
        });
}

module.exports = moveFontsToPrototype;
