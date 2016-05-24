
var _ = require('lodash');

module.exports = function registerHelpers(assembleInst) {

    /*
    * handlebars helper used on listing page to list all
    * prototype pages.
    */
    assembleInst.helper('listAllTemplates', function (context) {
        try {
            var html = '';
            var fileNameFromKey = /^.*\/(.+)\.hbs$/;

            var pages = this.app.views.pages;
            var keys = _.keys(pages).sort();

            _.forEach(keys, function (key) {
                var view = pages[key];
                var title = view.data.pagetitle;
                var match = fileNameFromKey.exec(key);
                var fileName = (match) ? match[1] : key;

                html += '<li><a href="' + fileName + '.html">' + title + '</a></li>';

            });

            return html;
        } catch (err) {
            console.log(err)
        }
    });
}
