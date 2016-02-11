var gulp 			 = require( 'gulp' );
var browserify 		 = require( 'browserify' );
var shim             = require( 'browserify-shim' );
var iron			 = require( 'iron-fe' );
var path			 = require( 'path' );
var source           = require( 'vinyl-source-stream' );
var rename           = require( 'gulp-rename' );
var es               = require( 'event-stream' );

function browserifyPrototype(  ) {

	// return gulp.src('./prototype/src/js/*.js')
 //        .pipe(browserify({
 //            insertGlobals : true,
 //            debug : !gulp.env.production
 //        }))
 //        .pipe(gulp.dest('./prototype/dist/js'));

 return browserify({
        debug: true,
        entries: ['./prototype/src/js/demo.js', './prototype/src/js/highlight.min.js']
    }).bundle()
        .pipe(source('prototype.bundle.js'))
        .pipe(gulp.dest('./prototype/dist/js/'))
        .on('end', function(){
            console.log("       Prototype JS Bundled ");
        });

}


module.exports = browserifyPrototype;
