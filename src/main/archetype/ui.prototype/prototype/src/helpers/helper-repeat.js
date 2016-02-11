/**
 *    {{#repeat '10'}}
 *       {{> button }}
 *    {{/repeat}}
 */
module.exports.register = function(Handlebars, options) {
  assemble.helper('read', function(n, context) {
  	var times = '';
    for (var i = 0; i < n; ++i) {
      times += context.fn(this);
    }
    return times;
});
};

// assemble.helper('read', function(n, context) {
//   	var times = '';
//     for (var i = 0; i < n; ++i) {
//       times += context.fn(this);
//     }
//     return times;
// });