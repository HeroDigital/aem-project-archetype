// DEMO code highlight, escaping html blocks
(function($){
  String.prototype.HTMLEncode = function (str) {
    var result = "";
    var str = (arguments.length === 1) ? str : this;
    for (var i = 0; i < str.length; i++) {
      var chrcode = str.charCodeAt(i);
      result += (chrcode > 128) ? "&#" + chrcode + ";" : str.substr(i, 1)
    }
    return result;
  }
  $('.code-to-escape').each( function(){
    var toEscape = $(this).html();
    $(this).text(toEscape.HTMLEncode());
  });

  $(document).ready(function() {

    $('#demoDashborad').on('click', '#setWhiteText', function(e) {
      e.preventDefault();
      $('[data-component-name="hero-image-banner"]').addClass('white-text');
    });

    $('#demoDashborad').on('click', '#setBlackText', function(e) {
      e.preventDefault();
      $('[data-component-name="hero-image-banner"]').removeClass('white-text');
    });

    $('#demoDashborad').on('click', '#setHeroBg', function(e) {
      e.preventDefault();
      var newBG = $('#heroBg').val();
      console.log(newBG);
      $('[data-component-name="hero-image-banner"]').css('background-image', 'url('+newBG+')' );
    });

    // $('.html-component').find('img').each( function(){
    //   var oldSrc = $(this).attr('src');
    //   $(this).attr('src', 'http://author-purestorage-prod.adobecqms.net/'+oldSrc);
    // });
    $('.nav').on('click', '#setDefaultTheme', function(e) {
      e.preventDefault();
      $('.site-content').removeClass('red-theme', 'blue-theme');
    });
    $('.nav').on('click', '#setBlueTheme', function(e) {
      e.preventDefault();
      $('.site-content').removeClass('red-theme').addClass('blue-theme');
    });
    $('.nav').on('click', '#setRedTheme', function(e) {
      e.preventDefault();
      $('.site-content').removeClass('blue-theme').addClass('red-theme');
    });
  });
}(jQuery))