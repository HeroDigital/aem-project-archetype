/**
 *    {{list_all_pages}}
 */
module.exports.register = function(Handlebars, options) {
	Handlebars.registerHelper("list_all_pages", function(options) {
		console.log(assemble.views.pages);
	    return assemble.views.pages;
	});
};