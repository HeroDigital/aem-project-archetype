var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function movePagelibsToPrototype() {

    let librariesToCompile = iron.clientlibraries.get.all();

    var tasks = librariesToCompile.map(function(lib) {
        return gulp.src( lib.path + "/build/**/**", {
                base : lib.path + "/build"
            })
            .pipe(gulp.dest("prototype/dist"))
            .on('end', function(){
                console.log( "      Moved JS and CSS bundles to prototype folder " );
            });
    });

    // create a merged stream
    return es.merge.apply(null, tasks);
}

module.exports = movePagelibsToPrototype;
