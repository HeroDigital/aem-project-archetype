var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function moveSrcCssToPrototype() {

    return gulp.src( 'prototype/src/demo/css/**.css', {
            base : 'prototype/src/demo/css'
        })
        .pipe(gulp.dest("prototype/dist/css"))
        .on('end', function(){
            console.log( "      Moved src CSS files to prototype folder ");
        });
}

module.exports = moveSrcCssToPrototype;
