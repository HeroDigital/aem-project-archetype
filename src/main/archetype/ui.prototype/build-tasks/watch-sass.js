var gulp 		 = require( 'gulp' );

function watchSassTask() {

	var sassToWatch = [
		"./components/**/styles/**/**.scss",
		"./client-libraries/**/styles/**/**.scss",
		"./client-libraries/vendor/**/**.scss"
	]

	gulp.watch( sassToWatch, ['sass'] );

}


module.exports = watchSassTask;
