var gulp  = require( 'gulp' );
var shell = require( 'gulp-shell' );
var path  = require( 'path' );

function watchDev(port) {

    var watcher = gulp.watch('../ui.apps/src/main/content/jcr_root/**/*.{html,js,css,jsp}');

    watcher.on('change', function(event) {
        if (event.type == 'changed') {
            var idx = event.path.indexOfEnd('/jcr_root/');
            var aemPath = event.path.substr(idx);
            var filename = path.basename(aemPath);
            var dirname = path.dirname(aemPath);

            shell.task("curl -s -X POST -H 'Content-Type: multipart/form-data' -u admin:admin" +
                        " -F '"+filename+"=@"+event.path+"' http://localhost:"+port+"/" + dirname)();
        }
    });
}

function watchDevAuth() {
    return watchDev(4502);
}

function watchDevPub() {
    return watchDev(4503);
}

String.prototype.indexOfEnd = function(string) {
    var io = this.indexOf(string);
    return io == -1 ? -1 : io + string.length;
}

exports.auth = watchDevAuth;
exports.pub = watchDevPub;
