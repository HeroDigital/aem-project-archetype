var gulp = require('gulp');
var prettify = require('gulp-prettify');

function prettifyHtml() {

    return gulp.src('prototype/dist/pages/*.html')
            .pipe(prettify({indent_size: 4}))
            .pipe(gulp.dest('prototype/dist/pages'));
}

module.exports = prettifyHtml;
