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

function sassPrototype() {

    return gulp.src('./prototype/src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('prototype.bundle.css'))
        .pipe( postcss( [ autoprefixer({browsers: ['Chrome >= 30', 'ff >= 30', 'ie >= 9', 'Safari >= 6']}) ] ) )
        .pipe(gulp.dest('./prototype/dist/css/'))
        .on('end', function(){
            console.log("       Prototype CSS Bundled ");
        });

}

module.exports = sassPrototype;
