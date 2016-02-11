var gulp            = require( 'gulp' );
var bower           = require( 'gulp-bower' );

function bowerTask() {
    return bower().pipe(gulp.dest('./bower_components')) ;
}

module.exports = bowerTask;
