var gulp = require('gulp');
var prettify = require('gulp-prettify');

function prettifyHtml() {

    return gulp.src('prototype/dist/**/*.html')
            .pipe(prettify({
            	indent_inner_html: false,
            	indent_size: 4,
            	padcomments: true
            }))
            .pipe(gulp.dest('prototype/dist'));
}

module.exports = prettifyHtml;
