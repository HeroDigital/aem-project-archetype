var gulp = require('gulp');
var server = require('gulp-server-livereload');

function webserver() {
    gulp.src('.')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filename, cb) {
                    cb(filename.indexOf('ui.prototype/prototype/dist') > 0);
                }
            },
            directoryListing: true,
            open: true
        }));
}

module.exports = webserver;
