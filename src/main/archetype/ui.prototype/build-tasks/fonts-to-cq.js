var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function moveFontsToCq() {

    let librariesToCompile = iron.clientlibraries.get.all();

    var tasks = librariesToCompile.map(function(lib) {
        return gulp.src( lib.path + "/fonts/**/**", {
                base : lib.path + "/fonts"
            })
            .pipe(gulp.dest( "../" + lib.aemPath + "/fonts" ))
			.on('end', function(){
                console.log( " Fonts Moved: " + lib.name );
            	console.log( "		    To: " + lib.aemPath );
			});
    });

    // create a merged stream
    return es.merge.apply(null, tasks);
}

module.exports = moveFontsToCq;
