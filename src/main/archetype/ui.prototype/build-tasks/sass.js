var gulp             = require( 'gulp' );
var browserify       = require( 'browserify' );
var iron             = require( 'iron-fe' );
var path             = require( 'path' );
var source           = require( 'vinyl-source-stream' );
var rename           = require( 'gulp-rename' );
var es               = require( 'event-stream' );
var sass             = require( 'gulp-sass' );
var postcss          = require( 'gulp-postcss' );
var autoprefixer     = require( 'autoprefixer' );
var eol              = require( 'gulp-line-ending-corrector' );

function sassTask(  ) {

    let librariesToCompile = iron.clientlibraries.get.all();

    // map them to our stream function
    var tasks = librariesToCompile.map(function(lib) {
        return gulp.src(lib.entry.style)
            .pipe(sass().on('error', sass.logError))
            // rename them to have "bundle as postfix"
            .pipe(rename({ extname: '.bundle.css' }))
            .pipe(postcss( [ autoprefixer({browsers: ['Chrome >= 30', 'ff >= 30', 'ie >= 9', 'Safari >= 6']}) ] ))
            .pipe(eol({eolc: 'LF', encoding: 'utf8'}))
            .pipe(gulp.dest( lib.path + "/build/css" ))
            .on('end', function(){
                console.log("       Bundled " + lib.name);
            });
        });
    // create a merged stream
    return es.merge.apply(null, tasks);


}


module.exports = sassTask;
