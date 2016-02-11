(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
*
* This file was generated. To edit the contents edit the
* .ironrc file for your project.
*
*/

module.exports = {
    "siteHeader" : require( './../../components/siteHeader' ),
    "siteFooter" : require( './../../components/siteFooter' ),
    "background" : require( './../../components/background' ),
    "backgroundImage" : require( './../../components/backgroundImage' ),
    "collapsibleContainer" : require( './../../components/collapsibleContainer' ),
    "video" : require( './../../components/video' ),
    "columns" : require( './../../components/columns' ),
    "image" : require( './../../components/image' ),
    "text" : require( './../../components/text' ),
    "video" : require( './../../components/video' ),
    "ctaList" : require( './../../components/ctaList' ),
    "breadcrumbs" : require( './../../components/breadcrumbs' ),
    "pinLink" : require( './../../components/pinLink' ),
    "pinAnchor" : require( './../../components/pinAnchor' ),
    "textImage" : require( './../../components/textImage' ),
    "textHeadline" : require( './../../components/textHeadline' ),
    "sliderContainer" : require( './../../components/sliderContainer' ),
    "tabLeftContainer" : require( './../../components/tabLeftContainer' ),
    "tabBottomContainer" : require( './../../components/tabBottomContainer' ),
    "tabTopContainer" : require( './../../components/tabTopContainer' ),
    "tabGridContainer" : require( './../../components/tabGridContainer' ),
    "tabGridItem" : require( './../../components/tabGridItem' ),
    "filterDropdown" : require( './../../components/filterDropdown' ),
    "bannerPage" : require( './../../components/bannerPage' ),
    "boxLinkContainer" : require( './../../components/boxLinkContainer' ),
    "boxLink" : require( './../../components/boxLink' ),
    "textJumbo" : require( './../../components/textJumbo' ),
    "bannerInline" : require( './../../components/bannerInline' ),
    "bannerTile" : require( './../../components/bannerTile' ),
    "quote" : require( './../../components/quote' ),
    "textList" : require( './../../components/textList' ),
    "tableList" : require( './../../components/tableList' ),
    "linkList" : require( './../../components/linkList' ),
    "iconList" : require( './../../components/iconList' ),
    "linkListMulti" : require( './../../components/linkListMulti' ),
    "iconListLinkContainer" : require( './../../components/iconListLinkContainer' ),
    "iconListLink" : require( './../../components/iconListLink' ),
    "cardContainer" : require( './../../components/cardContainer' ),
    "card" : require( './../../components/card' ),
    "cardLink" : require( './../../components/cardLink' ),
    "audienceRoutingContainer" : require( './../../components/audienceRoutingContainer' ),
    "audienceRoutingItem" : require( './../../components/audienceRoutingItem' ),
    "smTextImage" : require( './../../components/smTextImage' ),
    "itsmTextImage" : require( './../../components/itsmTextImage' ),
    "contactCardContainer" : require( './../../components/contactCardContainer' ),
    "contactCard" : require( './../../components/contactCard' ),
    "contactNav" : require( './../../components/contactNav' ),
    "contactSubNav" : require( './../../components/contactSubNav' ),
    "pyramidNav" : require( './../../components/pyramidNav' ),
    "eloquaStandardForm" : require( './../../components/eloquaStandardForm' ),
    "eloquaContactUsForm" : require( './../../components/eloquaContactUsForm' ),
    "eloquaFooter" : require( './../../components/eloquaFooter' ),
    "shareBar" : require( './../../components/shareBar' ),
    "eventListing" : require( './../../components/eventListing' ),
    "mediaListing" : require( './../../components/mediaListing' ),
    "galleryContainer" : require( './../../components/galleryContainer' ),
    "galleryItem" : require( './../../components/galleryItem' ),
    "thankYouResource" : require( './../../components/thankYouResource' ),
    "thankYouLinkList" : require( './../../components/thankYouLinkList' ),
    "thankYouSocial" : require( './../../components/thankYouSocial' ),
}

},{"./../../components/audienceRoutingContainer":3,"./../../components/audienceRoutingItem":4,"./../../components/background":5,"./../../components/backgroundImage":6,"./../../components/bannerInline":7,"./../../components/bannerPage":8,"./../../components/bannerTile":9,"./../../components/boxLink":10,"./../../components/boxLinkContainer":11,"./../../components/breadcrumbs":12,"./../../components/card":13,"./../../components/cardContainer":14,"./../../components/cardLink":15,"./../../components/collapsibleContainer":16,"./../../components/columns":17,"./../../components/contactCard":18,"./../../components/contactCardContainer":19,"./../../components/contactNav":20,"./../../components/contactSubNav":21,"./../../components/ctaList":22,"./../../components/eloquaContactUsForm":23,"./../../components/eloquaFooter":24,"./../../components/eloquaStandardForm":25,"./../../components/eventListing":26,"./../../components/filterDropdown":27,"./../../components/galleryContainer":28,"./../../components/galleryItem":29,"./../../components/iconList":31,"./../../components/iconListLink":32,"./../../components/iconListLinkContainer":33,"./../../components/image":34,"./../../components/itsmTextImage":35,"./../../components/linkList":36,"./../../components/linkListMulti":37,"./../../components/mediaListing":38,"./../../components/pinAnchor":39,"./../../components/pinLink":40,"./../../components/pyramidNav":41,"./../../components/quote":42,"./../../components/shareBar":43,"./../../components/siteFooter":44,"./../../components/siteHeader":45,"./../../components/sliderContainer":46,"./../../components/smTextImage":47,"./../../components/tabBottomContainer":48,"./../../components/tabGridContainer":49,"./../../components/tabGridItem":50,"./../../components/tabLeftContainer":51,"./../../components/tabTopContainer":52,"./../../components/tableList":53,"./../../components/text":54,"./../../components/textHeadline":55,"./../../components/textImage":56,"./../../components/textJumbo":57,"./../../components/textList":58,"./../../components/thankYouLinkList":59,"./../../components/thankYouResource":60,"./../../components/thankYouSocial":61,"./../../components/video":62}],2:[function(require,module,exports){
/**
 *  This is the main file for pagelibs
 */

// App scripts

// Vendor Scripts
var bootstrap = require ( '../../node_modules/bootstrap-sass' );

// Original Slick, Latest version loaded through Bower
// var slick = require ( '../../bower_components/slick-carousel/slick/slick.js' );
// Old Slick, used on current website
// var slick = require ( '../vendor/slick-carousel-1.3.15/slick.min.js' );
// New Slick with modified focus on slide after slide is changed
// Line 2602 is commented out
// var slick = require ( '../vendor/slick-carousel-modified/slick-modified.js' );
// var widowFix = require ( '../vendor/widowFix/widowFix.js' );
// var matchHeight = require ( '../vendor/matchHeight/matchHeight.js' );
// var polyfills = require ( '../vendor/polyfills/polyfill-fixedsticky.js' );
// var snPolyfills = require ( './js/polyfills.js' );

// Custom Scripts
var components = require( './pagelibs.components' );
var globalComponent = require( '../../components/global' );

globalComponent.init( components );

},{"../../components/global":30,"../../node_modules/bootstrap-sass":63,"./pagelibs.components":1}],3:[function(require,module,exports){
/**
 *  This is the main file for audienceRoutingContainer
 */



var audienceRoutingContainer = function(){

}

module.exports = audienceRoutingContainer;

},{}],4:[function(require,module,exports){
/**
 *  This is the main file for audienceRoutingItem
 */



var audienceRoutingItem = function(){

	var resizeTimer;

	var getBreakpoint = function(){

		$('body, html').css('overflow', 'hidden');
        windowWidth = $(window).width();
        $('body, html').css('overflow', 'visible');

	    if (windowWidth >= 1200 ) {
	        return 'lg';
	    } else if (windowWidth >= 992 ) {
	        return 'md';
	    } else if (windowWidth >= 768 ) {
	        return 'sm';
	    } else if (windowWidth >= 480 ) {
	        return 'xs';
	    } else {
	    	return 'xx';
	    }
	}

	var equalHeightColumns = function(){

		if (getBreakpoint() === 'xs' || getBreakpoint() === 'xx') {
			$('.columns-component').each(function(){
				$(this).find('.audience-item-component').matchHeight({ remove: true });
			});
		} else {
			$('.columns-component').each(function(){
				$(this).find('.audience-item-component').matchHeight({ byRow: false });
			});
		};
	}

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			equalHeightColumns();

			$(window).on('resize', function(){
				equalHeightColumns();
			});
			
		};

	});
}

module.exports = audienceRoutingItem;

},{}],5:[function(require,module,exports){
/**
 *  This is the main file for background
 */



var background = function(){

}

module.exports = background;

},{}],6:[function(require,module,exports){
/**
 *  This is the main file for backgroundImage
 */



var backgroundImage = function(){

}

module.exports = backgroundImage;

},{}],7:[function(require,module,exports){
/**
 *  This is the main file for bannerInline
 */



var bannerInline = function(){

}

module.exports = bannerInline;

},{}],8:[function(require,module,exports){
/**
 *  This is the main file for bannerPage
 */



var bannerPage = function(){

}

module.exports = bannerPage;

},{}],9:[function(require,module,exports){
/**
 *  This is the main file for bannerTile
 */



var bannerTile = function(){

}

module.exports = bannerTile;

},{}],10:[function(require,module,exports){
/**
 *  This is the main file for boxLink
 */



var boxLink = function(){

}

module.exports = boxLink;

},{}],11:[function(require,module,exports){
/**
 *  This is the main file for boxLinkContainer
 */



var boxLinkContainer = function(){

}

module.exports = boxLinkContainer;

},{}],12:[function(require,module,exports){
/**
 *  This is the main file for breadcrumbs
 */



var breadcrumbs = function(){

}

module.exports = breadcrumbs;

},{}],13:[function(require,module,exports){
/**
 *  This is the main file for card
 */



var card = function(){

}

module.exports = card;

},{}],14:[function(require,module,exports){
/**
 *  This is the main file for cardContainer
 */



var cardContainer = function(){

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			$('.card-container-component').each(function(){
				$(this).find('.card-body').matchHeight();
			});
			
		};

	});
}

module.exports = cardContainer;

},{}],15:[function(require,module,exports){
/**
 *  This is the main file for cardLink
 */



var cardLink = function(){

}

module.exports = cardLink;

},{}],16:[function(require,module,exports){
/**
 *  This is the main file for collapsibleContainer
 */



var collapsibleContainer = function(){

	// Init
	var buildCollapsibleContainer = function(collapsibleItem){

		// collapsibleItem.addClass('collapsed');
		var collapsibleContent = collapsibleItem.find('.collapsible-content');
		var expandBtn = collapsibleItem.find('.btn-expand-collapse');
		var expandBtnLabel = expandBtn.attr('data-label');
		expandBtn.text(expandBtnLabel);

		// collapsibleItem.on('click', expandBtn, function(){
		expandBtn.on('click', function(){

			if (!collapsibleItem.hasClass('expanded')) {
				collapsibleContent.slideDown();
				expandBtnLabel = expandBtn.attr('data-label-in');
				expandBtn.text(expandBtnLabel);
				collapsibleItem.addClass('expanded');
			} else {
				collapsibleContent.slideUp();
				expandBtnLabel = expandBtn.attr('data-label');
				expandBtn.text(expandBtnLabel);
				collapsibleItem.removeClass('expanded');
			}
		});
	}

	$(document).ready(function(){

		$('.collapsible-container-component').each(function(){
			var collapsibleItem = $(this);
			buildCollapsibleContainer(collapsibleItem);
		});

	});

}	

module.exports = collapsibleContainer;

},{}],17:[function(require,module,exports){
/**
 *  This is the main file for columns
 */



var columns = function(){

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {
			
			$('.columns-component').each(function(){
				$(this).find('[class*="-bg"]').matchHeight();
			});
			
		};

	});
}

module.exports = columns;

},{}],18:[function(require,module,exports){
/**
 *  This is the main file for contactCard
 */



var contactCard = function(){

}

module.exports = contactCard;

},{}],19:[function(require,module,exports){
/**
 *  This is the main file for contactCardContainer
 */



var contactCardContainer = function(){

}

module.exports = contactCardContainer;

},{}],20:[function(require,module,exports){
/**
 *  This is the main file for contactNav
 */



var contactNav = function(){

}

module.exports = contactNav;

},{}],21:[function(require,module,exports){
/**
 *  This is the main file for contactSubNav
 */



var contactSubNav = function(){

	$(document).ready(function(){

		$('.contact-sub-nav-component li:first-child a').addClass('active');

		$('.contact-sub-nav-component').on('click', 'a', function(e){
			// getNavHeight();
		  	var href = $(this).attr("href");
		  	var index = $(this).attr("data-index");


		  	$('.contact-sub-nav-component a').removeClass('active');
		  	$(this).addClass('active');

		  	// first index (0) is the location of the pin, so offset is the reverse of the others
		  	// var menuHeightOffset = (index === "0") ? -topMenuHeight : topMenuHeight;

		  	if ($(href).length > 0) {
			    var offsetTop = href === "#" ? 0 : $(href).offset().top;
			  	$('html, body').stop().animate({ 
			      	scrollTop: offsetTop
			  	}, 500);
			}

		  	$(this).removeClass('active');
			$('.contact-sub-nav-component li:first-child a').addClass('active');
		  	e.preventDefault();
		});
	});

}

module.exports = contactSubNav;

},{}],22:[function(require,module,exports){
/**
 *  This is the main file for ctaList
 */



var ctaList = function(){

	// $(document).ready(function(){
	// 	$('.site-wrapper').on('click', '.btn-to-top', function (event) {
	// 		event.preventDefault();
 //            $('html,body').animate({ scrollTop: 0 }, 1000);
 //    		return false;
 //        });
 //    });
}

module.exports = ctaList;

},{}],23:[function(require,module,exports){
/**
 *  This is the main file for eloquaContactUsForm
 */



var eloquaContactUsForm = function(){

}

module.exports = eloquaContactUsForm;

},{}],24:[function(require,module,exports){
/**
 *  This is the main file for eloquaFooter
 */



var eloquaFooter = function(){

}

module.exports = eloquaFooter;

},{}],25:[function(require,module,exports){
/**
 *  This is the main file for eloquaStandardForm
 */



var eloquaStandardForm = function(){

}

module.exports = eloquaStandardForm;

},{}],26:[function(require,module,exports){
/**
 *  This is the main file for resultListing
 */

var resultListing = function(){

	// Result Listing Component Class
    var resultListing = function(){

        var componentElement = '.event-listing-component';
        var dropdownElement = componentElement + ' .filter-control';
        var searchField = componentElement + ' .search-field';
		var resultArea = componentElement + ' .result-area';

        var currentPage = 1;
        var itemsPerPage = $(componentElement).attr('data-items-per-page');
        var readMoreLabel = $(componentElement).attr('data-readmore-cta-text');
        var registerLabel = $(componentElement).attr('data-register-cta-text');

        var _self = this;

        _self.originalData = false;
        _self.filteredData = false;
        _self.filterStatus = false;
        _self.searchStatus = false;
        _self.urlStatus = false;


        _self.filterTerms = [];

        var convertToDate = function(dt) { 
	        return new Date(dt).toDateString();
	    };

        var getViewportWidth = function(){

            $('body, html').css('overflow', 'hidden');
            var viewportWidth = $(window).width();
            $('body, html').css('overflow', 'visible');
            
            return viewportWidth;
        }

        // Build Grid Item
        _self.buildGridItem = function(itemData){

            if (itemData == undefined) { return; };

            var startDate, endDate;

            startDate = convertToDate(itemData.startDate);
            endDate = convertToDate(itemData.endDate);

            var html = '';

            html += '<!-- Event Card Component -->';
            html += '<div class="component event-card-component card-grid-size">';

            html += '   <a href="#" class="card-body open-event-modal">';
            html += '       <span class="event-icon icon-' + itemData.eventTypeId + '"></span>';
            html += '       <span class="event-type">' + itemData.eventType + '</span>';
            html += '   	<h4 class="event-title">' + itemData.title + '</h4>';
            if (itemData.location === undefined && itemData.country !== 'All') {
            	html += '   	<span class="event-location">' + itemData.country + '</span>';
           	} else if (itemData.country === undefined){
            	html += '   	<span class="event-location">' + itemData.location + '</span>';
	        } else if (itemData.country !== 'All' ) {
	            html += '   	<span class="event-location">' + itemData.location + ', ' + itemData.country + '</span>';
	        }
            if (itemData.startDate !== 0) {
            	html += '   	<span class="event-date">' + startDate + '</span>';
            }
            html += '   </a>';

		    html += '   <ul class="card-btns">';
			html += '   	<li class="card-btn-1"><a href="#" class="open-event-modal">' + readMoreLabel + '</a></li>';
			html += '   	<li class="card-btn-2"><a href="' + itemData.registerUrl + '" target="_blank">' + registerLabel + '</a></li>';
			html += '   </ul>';

            html += '	<div class="event-modal-content">';
            html += '		<div class="row">';
            if (itemData.eventImage !== undefined ) {
            // html += '           <div class="col-sm-4 event-image">';
            // html += '               <img class="img-responsive" src="' + itemData.eventImage + '" />';
            // html += '           </div>';
            html += '           <div class="col-sm-4 event-image" style="background-image: url(' + itemData.eventImage + ');">';
            html += '           </div>';
            html += '			<div class="col-sm-8 col-sm-offset-4 event-description">';
            } else {
            html += '			<div class="col-sm-12 event-description">';
            }
            html += '				<div class="text-component text-block">';
            html += '   				<h4 class="event-title">' + itemData.title + '</h4>';
            if (itemData.location === undefined && itemData.country !== 'All') {
            	html += '   				<span class="event-location">' + itemData.country + '</span>';
           	} else if (itemData.country === undefined){
            	html += '   				<span class="event-location">' + itemData.location + '</span>';
	        } else if (itemData.country !== 'All' ) {
	            html += '   				<span class="event-location">' + itemData.location + ', ' + itemData.country + '</span>';
	        }
	        if (itemData.startDate !== 0) {
            	html += '   				<span class="event-date">' + startDate + '</span>';
            }
            html +=    					itemData.description;
            html += '				</div>';
            html += '				<div class="component cta-list text-left">';
            html += '					<a href="' + itemData.registerUrl + '" class="btn btn-red btn-text">' + registerLabel + '</a>';
            html += '				</div>';
            html += '			</div>';
            html += '		</div>';
            html += '	</div>';

            html += '</div>';

            return html;
        }

        // Page Browsing
        var prevPage = function(){
            if (currentPage > 1) {
                currentPage--;
                loadResultPage(currentPage);
            }
        }

        var nextPage = function(){
            if (currentPage < numPages()) {
                currentPage++;
                loadResultPage(currentPage);
            }
        }
            
        var loadResultPage = function(page){

            var btnNext = $(componentElement+' .next-page');
            var btnPrev = $(componentElement+' .prev-page');
            var listingArea = $(resultArea);
            var pageNrDiv = $(componentElement+' .pages-nr');

            currentPage = page;
         
            // Validate page
            if (page < 1) page = 1;
            if (page > numPages()) page = numPages();

            listingArea.innerHTML = "";

            displayResultsOnPage(page)

            if (page == 1) {
                btnPrev.hide();
            } else {
                btnPrev.show();
            }

            if (page == numPages()) {
                btnNext.hide();
            } else {
                btnNext.show();
            }
        }

        var numPages = function(){
            var allResultItems = filterAllResults().length;
            return Math.ceil(allResultItems / itemsPerPage);
        }

        // Filter Content
        var filterAllResults = function(){

            var filteredResults = [];
            var filteredResultsAfterSearch = [];
            var data = _self.originalData;

            if (data[Object.keys(data)[0]] === undefined) { return [] };
            
            if (_self.filterStatus) {

                for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
                    var resultItem = data[Object.keys(data)[0]][i];
                    if (containsFilterTag(resultItem.tags, _self.filterTerms)) {
                        filteredResults.push(resultItem);
                    }
                };

                if (_self.searchStatus) {

	                for (var i = 0; i < filteredResults.length; i++) {
	                	var resultItem = filteredResults[i];

	                	if (containsSearchString(resultItem)) {
	                        filteredResultsAfterSearch.push(resultItem);
	                    }
	                }
                };

            } else if (_self.searchStatus) {

                for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
                	var resultItem = data[Object.keys(data)[0]][i];

                	if (containsSearchString(resultItem)) {
                        filteredResultsAfterSearch.push(resultItem);
                    }
                }
                
            } else {

                for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
                    var resultItem = data[Object.keys(data)[0]][i];

                    filteredResults.push(resultItem);
                }

            };

            if( filteredResultsAfterSearch.length > 0 ){
            	return filteredResultsAfterSearch
            } else {
            	return filteredResults;
            }
            
        }

        var displayPagination = function(resultNr, page){
            var resultFrom,
                resultTo,
                resultTotal = resultNr,
                pagesNrTotal,
                paginationNavHtml = '',
                paginationNavNrTotal,
                paginationMaxPages = 6;

            if (page === 1) {
                resultFrom = 1;
                resultTo = itemsPerPage;

                if(resultTo > resultTotal){
                    resultTo = resultTotal;
                }
            } else {
                resultFrom = itemsPerPage * ( page - 1 ) + 1;
                resultTo = ( itemsPerPage * ( page - 1 ) ) + (itemsPerPage * 1);

                // console.log('resultTo', resultTo);

                if(resultTo > resultTotal){
                    resultTo = resultTotal;
                }
            };

            // Display pagination nav
            pagesNrTotal = Math.ceil(resultNr / itemsPerPage);

            if (pagesNrTotal >= 1) {
                $('.paginator').find('.pages').fadeIn();
                $('.paginator').find('.prev-page').removeClass('hidden');

                if (pagesNrTotal > paginationMaxPages) {
                    var pagesFrom,
                        pagesTo;

                    paginationNavNrTotal = 7;

                    pagesFrom = page - 3;
                    pagesTo = page + 3;

                    if (pagesTo > pagesNrTotal) {
                        pagesTo = pagesNrTotal;
                    };

                    if (pagesFrom < 1) { 
                        pagesFrom = 1;
                        pagesTo = paginationNavNrTotal;
                    }

                    for (var i = pagesFrom; i <= pagesTo; i++) {

                        if ( page === i ) {
                            paginationNavHtml += '<li><span>' + i + '</span></li>';
                        } else if( pagesTo === i && (pagesNrTotal - 3) >= page ){
                            paginationNavHtml += '<li><a href="#'+ pagesNrTotal +'" class="page-nr">...</a></li>';
                        } else if( pagesFrom === i && page > 3 ){
                            paginationNavHtml += '<li><a href="#1" class="page-nr">...</a></li>';
                        } else {
                            paginationNavHtml += '<li><a href="#'+ i +'" class="page-nr">' + i + '</a></li>';
                        }
                    };

                } else {
                    paginationNavNrTotal = pagesNrTotal;

                    for (var i = 1; i <= paginationNavNrTotal; i++) {
                        if (page === i) {
                            paginationNavHtml += '<li><span>' + i + '</span></li>';
                        } else {
                            paginationNavHtml += '<li><a href="#'+ i +'" class="page-nr">' + i + '</a></li>';
                        }
                    };
                }
            } else {
                $('.paginator').find('.pages').fadeOut();
                $('.paginator').find('.prev-page').addClass('hidden');
            }

            $('.pages-nr').html(paginationNavHtml);
            

            if (resultNr === null) {
                $('.result-nr').text(0);
                $('.showing-result-nr').text('0');

            } else {
                $('.result-nr').text(resultTotal);
                $('.showing-result-nr').text( resultFrom + ' - ' + resultTo );
            };
        }

        var displayResultsOnPage = function(page){
            var html = '';
            var data = filterAllResults();

            if (data.length !== 0) {

                displayPagination(data.length, page);

                for (var i = (page-1) * itemsPerPage; i < (page * itemsPerPage); i++) {
                    if (data.length <= i) break;
                    html += _self.buildGridItem(data[i]);
                }

            } else {
                displayPagination(null, page)
                html = '';
            }

            $('.result-area').hide().html(html).fadeIn(1000);
        }

        var setFilterTermsArray = function(){
            $(dropdownElement).each(function(){
                var selectedFilterTag = $(this).val();
                _self.filterTerms.push(selectedFilterTag);
            });
        }

        var resetFilterTermsArray = function(){

            var i = 0;
            _self.filterStatus = false;
            _self.filterTerms = [];

            // Empty Input Value
            resetSearchTerm();

            // Set all dropdowns to default value
            $(dropdownElement).each(function(){
                $(this).val(0);
                _self.filterTerms[i] = '0';
                i++;
            });

            // $('.get-results').each( function(){
            //     $(this).removeClass('active');
            // });

            loadResultPage(1);
        }

        var resetSearchTerm = function(){

            _self.searchStatus = false;

            // Empty Input Value
            $('#resultSearch').val('');

            loadResultPage(1);
        }

        var containsFilterTag = function(resultTags, filterTags){

            var match = false,
                matchCount = 0;

            var resultTagsLen = resultTags.length,
                filterTagsLen = filterTags.length;

            for (var i = 0; i < filterTagsLen; i++) { 
                if (filterTags[i] === '0') {
                    matchCount++;
                } else {
                    for (var j = 0; j < resultTagsLen; j++) { 

                        if (resultTags[j].id.startsWith(filterTags[i])) {

                            matchCount++;
                        }
                    }
                }
            }
            if (matchCount === filterTagsLen) {
                match = true;
            };
            return match;
        }

        // Search
        var containsSearchString = function(resultItem) {
			
			if (!_self.searchStatus) return;

			// Check if string is in the title

			var resultItemTitleLC = resultItem.title.toLowerCase();
			var searchLC = _self.searchStatus.toLowerCase();
			var searchingValue = new RegExp('.*' + searchLC + '.*');

			if (resultItemTitleLC.match(searchingValue)) {
				return true;
			} else {

                if(resultItem.description != undefined){
                    var resultItemDescriptionLC = resultItem.description.toLowerCase();
                    if (resultItemDescriptionLC.match(searchingValue)){
                        return true;
                    } else {
                        return false;
                    }
                }
			}
		}

        // Get URL filter params
        var getUrlFilterParams = function() {
            var urlParams = window.location.href.split('#')[1];

            if (urlParams === undefined) { return false; };

            // urlParamsArr = urlParams.split('&');
            _self.filterTerms = urlParams.split('|');

            _self.filterStatus = true;
            _self.urlStatus = true;

            updateDropdowns();
        }

        var updateDropdowns = function(){
            $(dropdownElement).each(function(){
                var selectedFilterTag = $(this).val();


                $(this).find('option').each(function(){
                    $(this).attr('value');

                    for (var i = 0; i < _self.filterTerms.length; i++) {
                        optionVal = $(this).val();
                        
                        if( _self.filterTerms[i] == $(this).attr('value')){

                            $(this).attr('selected', 'selected');
                        }
                    };

                });

                if($(this).val() != null){
                    $(this).siblings('.filter-value').html($(this).find('option:selected').text());
                }
            });
        }

        // Get Data
        var GetData = function(){
            if (!$(componentElement).length) return;

            var staticJson = $(componentElement).attr('data-src-json');

            // Example of JSON
            // {
            // 	"events": 
            // 	[
            //     	{
            // 	        "title": "HMG - CIO Executive Leadership Summit",
            // 	        "description": "<p>&nbsp;</p>\n<p>ServiceNow is a Gold Sponsor at this year's HMG Executive Leadership Summit.</p>\n<p>&nbsp;</p>\n<p>The CIO Executive Leadership Summit delivers world class thought leadership in a club-like setting where attendees will receive unique insights into best practices and will hear success stories involving leadership, management, technology and career development.</p>\n<p>&nbsp;</p>\n<p>Highly interactive sessions will provide many opportunities for attendees, speakers and panelists to be engaged in both learning and discussion. The objective for the day is to deliver high quality useful information that attendees can develop into an action plan.</p>\n<p>&nbsp;</p>\n<p><b>Key Areas of Focus Include:</b></p>\n<ul>\n<li>Strategy, Process Improvement and Alignment</li>\n<li>Innovation and Technology</li>\n<li>Career Management and Leadership Development</li>\n</ul>\n<div>&nbsp;</div>\n<p><b>Key Topics Will Include:</b></p>\n<ul>\n<li>Transformational Leadership</li>\n<li>Innovation and Growth Strategies</li>\n<li>Creating and Maintaining Trust and Relationships with CXOs</li>\n<li>Career Management and Development</li>\n<li>The Cloud</li>\n<li>Social Enterprise</li>\n<li>Mobile Workforce</li>\n<li>Security</li>\n<li>Strategic Sourcing</li>\n<li>Business Analytics</li>\n</ul>\n",
            // 	        "location": "New Brunswick, NJ",
            // 	        "registerUrl": "http://www.hmgstrategy.com/results/home.asp?resultID=66",
            // 	        "eventImage":"/content/dam/servicenow/us/contactus/requestinfo_vector_hi-res.png.imgo.png",
            //          "eventType":"NowForum",
            //          "eventTypeId":"forums",
            // 	        "region": "AMS",
            // 	        "country": "United States",
            // 	        "area": "AMS East (AREA)",
            // 	        "startDate": 1404777600000,
            // 	        "endDate": 1404777600000,
            // 	        "tags": [{
            // 	            "id": "servicenow:result-specific/trade-shows",
            // 	            "title": "Trade Shows"
            // 	        }, {
            // 	            "id": "servicenow:Alpha/H",
            // 	            "title": "H"
            // 	        }, {
            // 	            "id": "servicenow:month/Jul",
            // 	            "title": "Jul"
            // 	        }, {
            // 	            "id": "servicenow:calls-to-action/learn-more",
            // 	            "title": "Learn More"
            // 	        }, {
            // 	            "id": "servicenow:Geo/north-america",
            // 	            "title": "North America"
            // 	        }, {
            // 	            "id": "servicenow:Country/united states",
            // 	            "title": "United States"
            // 	        }]
            // 	    }
            //     ]
            // }

            // Initial build
            $.getJSON( staticJson, function(data) {
                _self.originalData = data;
                loadResultPage(1);
            });
        }


        /* ========================================================================
        // Result Handler on load
        */
        $(document).ready(function(){

            if (!$(componentElement).length) return;

            // Get URL Filter Params
            if(getUrlFilterParams() === false ){

                // Set Filter Array for searched terms
                setFilterTermsArray();

            }

            // Load all Data
            GetData();

            $(componentElement+' .pages-nr').on('click', 'a', function (e) {
                e.preventDefault();
                var pageGoTo = $(this).attr('href').split('#')[1];
                loadResultPage( Number(pageGoTo) );
            });
            $(componentElement+' .paginator').on('click', '.next-page', function(e){
                e.preventDefault();
                nextPage();
            });
            $(componentElement+' .paginator').on('click', '.prev-page', function(e){
                e.preventDefault();
                prevPage();
            });

            // Card Modal
            $('body').on('click', '.open-event-modal', function(e){
	            e.preventDefault();

                if (getViewportWidth() >= 768) {

    	            var innerHTML = $(this).parents('.event-card-component').find('.event-modal-content').html();

    	            $('#resultModal')
    	                .find('.event-modal-content')
    	                .html(innerHTML);

    	            $('#resultModal').modal();
                };
	            
	        });

		    // Default Modal Markup
		    var default_modal_markup = $('<div class="modal modal-event fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">\
		            <div class="modal-dialog modal-lg modal-dialog-default">\
		                <div class="modal-content">\
		                    <div class="modal-header">\
		                        <button type="button" class="btn close" data-dismiss="modal" aria-hidden="true"></button>\
		                    </div>\
		                    <div class="modal-body event-modal-content">\
		                    </div>\
		                </div>\
		            </div>\
		        </div>');

		    $('body').append(default_modal_markup);

	        $('#resultModal').on('hide.bs.modal', function (e) {
	            $('#resultModal')
	                .find('.event-modal-content')
	                .html('');
	        });

	        // Search Input Field
            $(searchField).submit(function(e) {
                e.preventDefault();

                var searchTerm = $(this).find('input').val();

                if (searchTerm.split('').length >= 3) {

                    _self.searchStatus = searchTerm;
                    loadResultPage(1);

                } else {
                    return false;
                }
            });

            // Show Search Reset Button once user enters term
            $(searchField+' input').keypress(function() {
                $(this).siblings('.btn-search-reset').show();
            });

            // Reset Search
            $(searchField).on('click', '.btn-search-reset', function(e) {
                e.preventDefault();
                resetSearchTerm();
                $(this).hide();
            });

            // Filter Dropdowns
            $(dropdownElement).on('change', function(){

                var i = 0;
                var reload = true;
                _self.filterStatus = true;

                $(dropdownElement).each(function(){
                    var selectedFilterTag = $(this).val();
                    _self.filterTerms[i] = selectedFilterTag;
                    if (selectedFilterTag !== '0') {
                        reload = false;
                    }
                    i++;
                });

                if (reload) {
                    resetFilterTermsArray();
                };

                loadResultPage(1);
            });

            // Reset Filters
            $(componentElement+' .btn-reset-filter').click( function (e) {

                e.preventDefault();
                resetFilterTermsArray();

            });

        });
    };

    var resultListing = new resultListing();

}

module.exports = resultListing;

},{}],27:[function(require,module,exports){
/**
 *  This is the main file for filterDropdown
 */



var filterDropdown = function(){

	// Filter Dropdown Component Element
    var componentElement = '.variation-2';

    // Create Filter Dropdown Label
    var createDropdownLabel = function(element){

    	$(element).prepend('<span class="filter-value"></span');

    }
	
	// Update Filter Dropdown Label
    var updateDropdownLabel = function(element){

    	var dropdownElementComp,
    		selectedValueText,
    		selectedValue,
    		dropdownTitle;

    	dropdownElementComp = $(element).parents('.filter-dropdown-component');

    	if(dropdownElementComp.length === 0){
    		dropdownElementComp = $(element);
    	}

    	selectedValueText = dropdownElementComp.find('option:selected').text();
    	selectedValue = dropdownElementComp.find('option:selected').val();

    	if (selectedValueText === '') {
    		selectedValueText = dropdownElementComp.find('.filter-control option:first-child').text();
    	} 

    	if (selectedValue === undefined) {
    		selectedValueText = dropdownElementComp.find('.filter-control option:first-child').val();
    	} 

    	dropdownTitle = dropdownElementComp.find('.title').text();

		if (selectedValue === '0') {
			dropdownElementComp.find('.filter-value').html('<span>' + dropdownTitle + '</span>: ' + selectedValueText);
		} else {
			dropdownElementComp.find('.filter-value').html(selectedValueText);
		}
    }
    
    $(document).ready(function(){

        $(componentElement).each(function(){
        	var thisComponent = this;
        	createDropdownLabel(thisComponent);
        	updateDropdownLabel(thisComponent);
        });

        // Event Listener
        $(componentElement + ' .filter-control').on('change', function(){
        	var thisDropdown = this;
        	updateDropdownLabel(thisDropdown);
        });

    });
}

module.exports = filterDropdown;

},{}],28:[function(require,module,exports){
/**
 *  This is the main file for galleryContainer
 */



var galleryContainer = function(){

	var resizeTimer,
		componentClass = '.gallery-container-component';

    var getViewportWidth = function(){

        $('body, html').css('overflow', 'hidden');
        var viewportWidth = $(window).width();
        $('body, html').css('overflow', 'visible');
        
        return viewportWidth;
    }

    var setupForMobile = function(){

    	removeGalleryModal();

    	$('.open-in-modal').off();

    	$(componentClass).off('click touchstart', '.title-block').on('click touchstart', '.title-block', function(){
    		console.log('touch');

			var collapsibleItem = $(this).parents('.gallery-item-component');
			var collapsibleItemPanel = $(this).parents('.gallery-item-component').find('.item-modal-content');
			
			if(collapsibleItem.hasClass('open')){
				console.log('item has OPEN class');
				collapsibleItem.removeClass('open');
				collapsibleItemPanel.slideUp();
			} else {
				console.log('item without OPEN class');
				$('.gallery-item-component.open').find('.item-modal-content').slideUp();
				$('.gallery-item-component').removeClass('open');
				collapsibleItemPanel.slideDown();
				collapsibleItem.addClass('open');
			}

		});

	}

    var setupForDesktop = function(){

    	buildGalleryModal();

		// Desktop Setup
		$(componentClass).each(function(){
			$(this).find('.item-body').matchHeight();
		});

		// Remove event listener for mobile func
    	$('.title-block').off();
    	
    	$('.gallery-item-component').each( function(){
    		$(this).removeClass('open');
    		$(this).find('.item-modal-content').removeAttr('style');
    	});

		// Card Modal
        $(componentClass).off('click', '.open-in-modal').on('click', '.open-in-modal', function(e){
            e.preventDefault();

            if (getViewportWidth() >= 768) {

	            var innerHTML = $(this).find('.item-modal-content').clone();

                innerHTML.removeAttr('style');

	            $('#galleryModal')
	                .find('.gallery-modal-content')
	                .html(innerHTML);

	            $('#galleryModal').modal();
            };
            
        });

	}

	var buildContainer = function(){
		if (getViewportWidth() >= 768) {

			// Desktop Setup
			setupForDesktop();

			$(componentClass).removeClass('mobile-version').addClass('desktop-version');

		} else {

			// Mobile Setup
			setupForMobile()

			$(componentClass).removeClass('desktop-version').addClass('mobile-version');
		}
	}

    var buildGalleryModal = function(){

	    // Default Modal Markup
	    var default_modal_markup = $('<div class="modal modal-gallery fade" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">\
	            <div class="modal-dialog modal-lg modal-dialog-default">\
	                <div class="modal-content">\
	                    <div class="modal-header">\
	                        <button type="button" class="btn close" data-dismiss="modal" aria-hidden="true"></button>\
	                    </div>\
	                    <div class="modal-body gallery-modal-content">\
	                    </div>\
	                </div>\
	            </div>\
	        </div>');

	    $('body').append(default_modal_markup);

        $('#galleryModal').on('hide.bs.modal', function (e) {
            $('#galleryModal')
                .find('.gallery-modal-content')
                .html('');
        });
	}

	var removeGalleryModal = function(){
		$('#galleryModal').remove();

    	$('.modal').modal('hide');
    	$('.modal-backdrop').remove();
    	$('body').removeAttr('style').removeClass('modal-open');
	}
	
	// CQ Check - disable slick in author mode
	if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {
	
	// On page load
	$(document).ready(function(){

		buildContainer();
			
	});

	// On page resize - 250ms delay
	$(window).on('resize', function(){

	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(function() {

	        buildContainer();

	    }, 250);

	});

	// if CQ
	};
}

module.exports = galleryContainer;

},{}],29:[function(require,module,exports){
/**
 *  This is the main file for galleryItem
 */



var galleryItem = function(){

}

module.exports = galleryItem;

},{}],30:[function(require,module,exports){
module.exports = {
    init : function(components){
        // console.log("init: ");
        // console.log(components);
        components.video();
        components.text();
        components.image();
        // components.ctaList();
        components.siteHeader();
        components.siteFooter();
        components.sliderContainer();
        components.collapsibleContainer();
        components.tabLeftContainer();
        components.tabBottomContainer();
        components.tabTopContainer();
        components.tabGridContainer();
        components.filterDropdown();
        components.cardContainer();
        components.iconList();
        components.quote();
        components.columns();
        components.linkListMulti();
        components.iconList();
        components.pinAnchor();
        components.pinLink();
        components.textImage();
        components.audienceRoutingItem();
        components.itsmTextImage();
        components.contactSubNav();
        components.eventListing();
        components.mediaListing();
        components.galleryContainer();
    }
}

},{}],31:[function(require,module,exports){
/**
 *  This is the main file for iconList
 */



var iconList = function(){

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		/* Version 1
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

	        var resizeTimer,
            	windowWidth,
            	itemsStacked = true;

	        if ( $(window).width() >= 768 ) {

	        	$('.icon-list-component').each( function(){
					$(this).find(' .list-item').matchHeight({
		                byRow: false
		            });
		        });
		        itemsStacked = false;
	        };

	        $(window).on('resize', function(){

	            clearTimeout(resizeTimer);
	            resizeTimer = setTimeout(function() {

	                if ( !itemsStacked && $(window).width() < 768 ){

	                	$('.icon-list-component').each( function(){
							$(this).find(' .list-item').matchHeight({
				                remove: true
				            });
				        });
		        		itemsStacked = true;
	                };

			        if ( itemsStacked && $(window).width() >= 768 ) {

			        	$('.icon-list-component').each( function(){
							$(this).find(' .list-item').matchHeight({
				                byRow: false
				            });
				        });
				        itemsStacked = false;
			        };

	            }, 250);
	        });
			
		};*/

		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {
			
		};

	});
}

module.exports = iconList;

},{}],32:[function(require,module,exports){
/**
 *  This is the main file for iconListLink
 */



var iconListLink = function(){

}

module.exports = iconListLink;

},{}],33:[function(require,module,exports){
/**
 *  This is the main file for iconListLinkContainer
 */



var iconListLinkContainer = function(){

}

module.exports = iconListLinkContainer;

},{}],34:[function(require,module,exports){
/**
 *  This is the main file for image
 */



var image = function(){

	var resizeTimer,
		windowWidth,
		componentClass = '.img-load-responsive',
		dataDesktopImgAttr = 'data-desktop-img',
		dataMobileImgAttr = 'data-mobile-img',
		mobileImgVisible;

	var getScreenWidth = function(){

		$('body, html').css('overflow', 'hidden');
        var windowWidth = $(window).width();
        $('body, html').css('overflow', 'visible');

        return windowWidth;
	}

	var getDataSrc = function(imgEle, attrName){

		var desktopSrc = $(imgEle).attr(attrName);

		if (desktopSrc == '') {
			desktopSrc = $(imgEle).attr(dataDesktopImgAttr);
		};

		if(imgEle.nodeName == 'IMG'){
			$(imgEle).attr('src', desktopSrc);
		} else {
			$(imgEle).attr('style', 'background-image: url(' + desktopSrc + ');');
		}
	}

	var setDesktopImg = function(){
		// console.log('set Desktop Img');

		mobileImgVisible = false;

		$(componentClass).each(function(){
			var imgEle = this;
			getDataSrc(imgEle, dataDesktopImgAttr);
		});

		$.fn.matchHeight._update();
	}

	var setMobileImg = function(){
		// console.log('set Mobile Img');

		mobileImgVisible = true;

		$(componentClass).each(function(){
			var imgEle = this;
			getDataSrc(imgEle, dataMobileImgAttr);
		});
	}

	$(document).ready(function(){

		if (getScreenWidth() >= 768) {
			setDesktopImg();
		} else {
			mobileImgVisible = true;
			setMobileImg();
		}
		
	});

	$(window).on('resize', function(){

	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(function() {

	    	// console.log('mobileImgVisible', mobileImgVisible);

			if (getScreenWidth() >= 768 && mobileImgVisible ) {
				setDesktopImg();
			} else if(getScreenWidth() < 768 && !mobileImgVisible) {
				setMobileImg();
			}

	    }, 250);

	});
}

module.exports = image;
},{}],35:[function(require,module,exports){
/**
 *  This is the main file for itsmTextImage
 */


var itsmTextImage = function()
{
	$(document).ready(function()
	{
		itsmTextImageHeight();
	});

	$(window).resize(function(event)
	{
		itsmTextImageHeight();
	});

	var itsmTextImageHeight = function()
	{
		var itsm_comp = $('.itsm-text-image-component');

		if (itsm_comp.length)
		{
			itsm_comp.each(function()
			{
				var in_tab = $(this).parents('.tab-panels'),
					itsm_cols = (in_tab.length) ? in_tab.find('.itsm-col-inner') : $(this).find('.itsm-col-inner');

				if (Modernizr.mq('(min-width: 992px)'))
				{
					itsm_cols.matchHeight();
				}
				else
				{
					itsm_cols.css('height', 'auto');
				}
			});
		}
	}
}


module.exports = itsmTextImage;
},{}],36:[function(require,module,exports){
/**
 *  This is the main file for linkList
 */



var linkList = function(){

}

module.exports = linkList;

},{}],37:[function(require,module,exports){
/**
 *  This is the main file for linkListMulti
 */



var linkListMulti = function(){

	var resizeTimer,
		windowWidth,
		componentClass = '.link-list-multi-component';

	var getBreakpoint = function(){

		//windowWidth = $(window).width();
		$('body, html').css('overflow', 'hidden');
        windowWidth = $(window).width();
        // windowWidth = $('body').innerWidth();
        $('body, html').css('overflow', 'visible');

	    if (windowWidth >= 1200 ) {
	        // console.log('Breakpoint: lg');
	        return 'lg';
	    } else if (windowWidth >= 992 ) {
	        // console.log('Breakpoint: md');
	        return 'md';
	    } else if (windowWidth >= 768 ) {
	        // console.log('Breakpoint: sm');
	        return 'sm';
	    } else if (windowWidth >= 480 ) {
	        // console.log('Breakpoint: xs');
	        return 'xs';
	    } else {
	    	return 'xx';
	    }
	}

	var setAccordionBtns = function(){
		$(componentClass).each(function(){
			$(this).addClass('accordion-btns');
		});
		$('.link-list-multi-component').on('click touchstart', '.list-item-title a', function(e){
			e.preventDefault();
			if($(this).parents('.list-item').hasClass('open')){
				// console.log('item has OPEN class');
				$('.link-list-multi-component .list-item').removeClass('open');
			} else {
				// console.log('item without OPEN class');
				$('.link-list-multi-component .list-item').removeClass('open');
				$(this).parents('.list-item').addClass('open');
			}
		});
	}

	var removeAccordionBtns = function(){
		$(componentClass).each(function(){
			$(this).removeClass('accordion-btns');
		});
		$('.link-list-multi-component .list-item').removeClass('open');

		$('.link-list-multi-component').off('click touchstart', '.list-item-title a');
	}

	// Main func
	var initLinkListMulti = function(){
		if (getBreakpoint() !== 'lg') {
        	setAccordionBtns();
        } else {
        	removeAccordionBtns();
        }
	}

	// Events
	$(document).ready(function(){
		initLinkListMulti();
	});

	$(window).on('resize', function(){

	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(function() {

	        initLinkListMulti();

	    }, 250);
	});
}

module.exports = linkListMulti;

},{}],38:[function(require,module,exports){
/**
 *  This is the main file for mediaListing
 */

var mediaListing = function(){

	// Result Listing Component Class
    var resultListing = function(){

        var componentElement = '.media-listing-component';
        var dropdownElement = componentElement + ' .filter-control';
        var dropdownSortingElement = componentElement + ' .filter-date-sorting';
        var searchField = componentElement + ' .search-field';
        var resultArea = componentElement + ' .result-area';

        var currentPage = 1;
        var itemsPerPage = $(componentElement).attr('data-items-per-page');
        var readMoreLabel = $(componentElement).attr('data-readmore-cta-text');

        var _self = this;

        _self.originalData = false;
        _self.filteredData = false;
        _self.filterStatus = false;
        _self.filterOrderStatus = true;
        _self.searchStatus = false;


        _self.filterTerms = [];

        var convertToDate = function(dt) { 
            return new Date(dt).toDateString();
        };

        var getViewportWidth = function(){

            $('body, html').css('overflow', 'hidden');
            var viewportWidth = $(window).width();
            $('body, html').css('overflow', 'visible');
            
            return viewportWidth;
        }

        // Build Result Item
        _self.buildGridItem = function(itemData){

            if (itemData == undefined) { return; };

            var html = '';

            html += '<!-- Media Card Component -->';
            html += '<div class="component media-card-component card-grid-size">';

            html += '   <a href="' + itemData.url + '" class="card-body">';
            html += '       <h4 class="media-title">' + itemData.title + '</h4>';
            if (itemData.publishDateStr !== undefined) {
                html += '       <span class="media-date">' + itemData.publishDateStr + '</span>';
            }
            html += '   </a>';
            html += '   <ul class="card-btns">';
            html += '       <li class="card-btn-1"><a href="' + itemData.url + '" class="open-event-modal">' + readMoreLabel + '</a></li>';
            html += '   </ul>';
            html += '</div>';

            return html;
        }

        // Page Browsing
        var prevPage = function(){
            if (currentPage > 1) {
                currentPage--;
                loadResultPage(currentPage);
            }
        }

        var nextPage = function(){
            if (currentPage < numPages()) {
                currentPage++;
                loadResultPage(currentPage);
            }
        }
            
        var loadResultPage = function(page){

            var btnNext = $(componentElement+' .next-page');
            var btnPrev = $(componentElement+' .prev-page');
            var listingArea = $(resultArea);
            var pageNrDiv = $(componentElement+' .pages-nr');

            currentPage = page;
         
            // Validate page
            if (page < 1) page = 1;
            if (page > numPages()) page = numPages();

            listingArea.innerHTML = "";

            // for (var i = (page-1) * itemsPerPage; i < (page * itemsPerPage); i++) {
            //     listingArea.innerHTML += objJson[i].adName + "<br>";
            // }
            // pageNrDiv.innerHTML = page;

            displayResultsOnPage(page)

            if (page == 1) {
                btnPrev.hide();
            } else {
                btnPrev.show();
            }

            if (page == numPages()) {
                btnNext.hide();
            } else {
                btnNext.show();
            }
        }

        var numPages = function()
        {
            var allResultItems = filterAllResults().length;
            return Math.ceil(allResultItems / itemsPerPage);
        }

        // Filter Content
        var filterAllResults = function(){

            var filteredResults = [];
            var filteredResultsAfterSearch = [];
            var data = _self.originalData;

            if (data[Object.keys(data)[0]] === undefined) { return [] };
            
            if (_self.filterStatus) {

                for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
                    var resultItem = data[Object.keys(data)[0]][i];
                    if (containsFilterTag(resultItem.tags, _self.filterTerms)) {

                        filteredResults.push(resultItem);
                    }
                };

                if (_self.searchStatus) {

                    for (var i = 0; i < filteredResults.length; i++) {
                        var resultItem = filteredResults[i];

                        if (containsSearchString(resultItem)) {
                            filteredResultsAfterSearch.push(resultItem);
                        }
                    }
                };

            } else if (_self.searchStatus) {

                for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
                    var resultItem = data[Object.keys(data)[0]][i];

                    if (containsSearchString(resultItem)) {
                        filteredResultsAfterSearch.push(resultItem);
                    }
                }
                
            } else {

                for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
                    var resultItem = data[Object.keys(data)[0]][i];

                    filteredResults.push(resultItem);
                }

            };
            
            if (_self.filterOrderStatus) {
                return data[Object.keys(data)[0]].reverse(); 
            }

            if( filteredResultsAfterSearch.length > 0 ){
                return filteredResultsAfterSearch
            } else {
                return filteredResults;
            }
            
        }

        var displayAllResults = function(data){
            var html = '';
            var resultCount = 0;

            for (var i = 0; i < data.length; i++) {
                var resultItem = data[i];
                html += _self.buildGridItem(resultItem);
                resultCount++;
            }

            $(componentElement+' .result-count').text(resultCount);
            $(componentElement+' .result-area').hide().html(html).fadeIn(1000);
        }

        var displayPagination = function(resultNr, page){
            var resultFrom,
                resultTo,
                resultTotal = resultNr,
                pagesNrTotal,
                paginationNavHtml = '',
                paginationNavNrTotal,
                paginationMaxPages = 6;

            if (page === 1) {
                resultFrom = 1;
                resultTo = itemsPerPage;

                if(resultTo > resultTotal){
                    resultTo = resultTotal;
                }
            } else {
                resultFrom = itemsPerPage * ( page - 1 ) + 1;
                resultTo = ( itemsPerPage * ( page - 1 ) ) + (itemsPerPage * 1);

                // console.log('resultTo', resultTo);

                if(resultTo > resultTotal){
                    resultTo = resultTotal;
                }
            };

            // Display pagination nav
            pagesNrTotal = Math.ceil(resultNr / itemsPerPage);

            if (pagesNrTotal >= 1) {
                $('.paginator').find('.pages').fadeIn();
                $('.paginator').find('.prev-page').removeClass('hidden');

                if (pagesNrTotal > paginationMaxPages) {
                    var pagesFrom,
                        pagesTo;

                    paginationNavNrTotal = 7;

                    pagesFrom = page - 3;
                    pagesTo = page + 3;

                    if (pagesTo > pagesNrTotal) {
                        pagesTo = pagesNrTotal;
                    };

                    if (pagesFrom < 1) { 
                        pagesFrom = 1;
                        pagesTo = paginationNavNrTotal;
                    }

                    for (var i = pagesFrom; i <= pagesTo; i++) {

                        if ( page === i ) {
                            paginationNavHtml += '<li><span>' + i + '</span></li>';
                        } else if( pagesTo === i && (pagesNrTotal - 3) >= page ){
                            paginationNavHtml += '<li><a href="#'+ pagesNrTotal +'" class="page-nr">...</a></li>';
                        } else if( pagesFrom === i && page > 3 ){
                            paginationNavHtml += '<li><a href="#1" class="page-nr">...</a></li>';
                        } else {
                            paginationNavHtml += '<li><a href="#'+ i +'" class="page-nr">' + i + '</a></li>';
                        }
                    };

                } else {
                    paginationNavNrTotal = pagesNrTotal;

                    for (var i = 1; i <= paginationNavNrTotal; i++) {
                        if (page === i) {
                            paginationNavHtml += '<li><span>' + i + '</span></li>';
                        } else {
                            paginationNavHtml += '<li><a href="#'+ i +'" class="page-nr">' + i + '</a></li>';
                        }
                    };
                }
            } else {
                $('.paginator').find('.pages').fadeOut();
                $('.paginator').find('.prev-page').addClass('hidden');
            }

            $('.pages-nr').html(paginationNavHtml);
            

            if (resultNr === null) {
                $('.result-nr').text(0);
                $('.showing-result-nr').text('0');

            } else {
                $('.result-nr').text(resultTotal);
                $('.showing-result-nr').text( resultFrom + ' - ' + resultTo );
            };
        }

        var displayResultsOnPage = function(page){
            var html = '';
            var data = filterAllResults();

            if (data.length !== 0) {

                displayPagination(data.length, page);

                // var resultCount = 0;

                // for (var i = 0; i < data.length; i++) {
                //     var result = data[i];
                //     html += _self.buildGridItem(result);
                //     resultCount++;
                // }

                // (1 - 1) * 6 = 0; 0< (1 * 6); i++;

                for (var i = (page-1) * itemsPerPage; i < (page * itemsPerPage); i++) {
                    if (data.length <= i) break;
                    html += _self.buildGridItem(data[i]);
                }

            } else {
                displayPagination(null, page)
                html = '';
            }

            // $('.result-container-component .result-count').text(itemsPerPage);
            $('.result-area').hide().html(html).fadeIn(1000);
        }

        var setFilterTermsArray = function(){
            $(dropdownElement).each(function(){
                var selectedFilterTag = $(this).val();
                _self.filterTerms.push(selectedFilterTag);
            });
        }

        var resetFilterTermsArray = function(){

            var i = 0;
            _self.filterStatus = false;
            _self.filterTerms = [];

            // Empty Input Value
            resetSearchTerm();

            // Set all dropdowns to default value
            $(dropdownElement).each(function(){
                $(this).val(0);
                _self.filterTerms[i] = '0';
                i++;
            });

            // $('.get-results').each( function(){
            //     $(this).removeClass('active');
            // });

            loadResultPage(1);
        }

        var resetSearchTerm = function(){

            _self.searchStatus = false;

            // Empty Input Value
            $('#resultSearch').val('');

            loadResultPage(1);
        }

        var containsFilterTag = function(resultTags, filterTags){

            // console.log('containsFilterTag');

            var match = false,
                matchCount = 0;

            var resultTagsLen = resultTags.length,
                filterTagsLen = filterTags.length;

            for (var i = 0; i < filterTagsLen; i++) { 
                if (filterTags[i] === '0') {
                    matchCount++;
                } else {
                    for (var j = 0; j < resultTagsLen; j++) { 

                        // // console.log('a', a[i].id);
                        // // console.log('b', b[j].id);

                        if (resultTags[j].id.startsWith(filterTags[i])) {
                            // b.splice(j, 1);
                            // len2=b.length;

                            // console.log('filterTags[i]', filterTags[i]);
                            // console.log('resultTags[j].id', resultTags[j].id);

                            matchCount++;
                        }
                    }
                }
            }
            if (matchCount === filterTagsLen) {
                match = true;
            };
            return match;
        }

        var containsFilterTag2 = function(resultTags, filterTags){
            var match = false,
                matchCount = 0;

            var resultTagsLen = resultTags.length,
                filterTagsLen = filterTags.length;

            for (var i = 0; i < resultTagsLen; i++) { 
                for (var j = 0; j < filterTagsLen; j++) { 

                    // // console.log('a', a[i].id);
                    // // console.log('b', b[j].id);

                    if (resultTags[i].id === filterTags[j] || filterTags[j] === '0') {
                        // b.splice(j, 1);
                        // len2=b.length;

                        matchCount++;
                    }
                }
            }
            if (matchCount === filterTagsLen) {
                match = true;
            };
            return match;
        }

        // Search
        var containsSearchString = function(resultItem) {
            
            if (!_self.searchStatus) return;

            // Check if string is in the title

            var resultItemTitleLC = resultItem.title.toLowerCase();
            var searchLC = _self.searchStatus.toLowerCase();
            var searchingValue = new RegExp('.*' + searchLC + '.*');

            if (resultItemTitleLC.match(searchingValue)) {
                return true;
            } else {

                if(resultItem.description != undefined){
                    var resultItemDescriptionLC = resultItem.description.toLowerCase();
                    if (resultItemDescriptionLC.match(searchingValue)){
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }

        // Get Data
        var GetData = function(){
            if (!$(componentElement).length) return;

            var staticJson = $(componentElement).attr('data-src-json');

            
            // Exmple of JSON
            // {
            //     "pressReleases": [
            //         {
            //             "url": "/content/servicenow/us/company/media/press-room/servicenow-to-participate-in-upcoming-investor-conferences.html",
            //             "title": "ServiceNow to Participate in Upcoming Investor Conferences",
            //             "publishDate": 1382943600000,
            //             "publishDateStr": "October 28, 2013",
            //             "tags": [{
            //                 "id": "servicenow:article-types/press-release",
            //                 "title": "Press Release"
            //             }]
            //         }, {
            //             "url": "/content/servicenow/us/company/media/press-room/servicenow-reports-financial-results-for-third-quarter-2013.html",
            //             "title": "ServiceNow Reports Financial Results for Third Quarter 2013",
            //             "publishDate": 1382511600000,
            //             "publishDateStr": "October 23, 2013",
            //             "tags": [{
            //                 "id": "servicenow:article-types/press-release",
            //                 "title": "Press Release"
            //             }]
            //         }
            //     ]
            // }

            // loadResultPage(1);
            
            // Initial build
            $.getJSON( staticJson, function(data) {
                _self.originalData = data;
                loadResultPage(1);
            });
        }

        /* ========================================================================
        // Result Handler on load
        */
        $(document).ready(function(){

            if (!$(componentElement).length) return;

            // Set Filter Array for searched terms
            setFilterTermsArray();

            // Load all Data
            GetData();

            $(componentElement+' .pages-nr').on('click', 'a', function (e) {
                e.preventDefault();
                var pageGoTo = $(this).attr('href').split('#')[1];
                loadResultPage( Number(pageGoTo) );
            });
            $(componentElement+' .paginator').on('click', '.next-page', function(e){
                e.preventDefault();
                nextPage();
            });
            $(componentElement+' .paginator').on('click', '.prev-page', function(e){
                e.preventDefault();
                prevPage();
            });

            // Card Modal
            $('body').on('click', '.open-result-modal', function(e){
                e.preventDefault();

                if (getViewportWidth() >= 768) {

                    var innerHTML = $(this).parents('.result-card-component').find('.result-modal-content').html();

                    $('#resultModal')
                        .find('.result-modal-content')
                        .html(innerHTML);

                    $('#resultModal').modal();
                };
                
            });

            // Default Modal Markup
            var default_modal_markup = $('<div class="modal modal-result fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">\
                    <div class="modal-dialog modal-lg modal-dialog-default">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <button type="button" class="btn close" data-dismiss="modal" aria-hidden="true"></button>\
                            </div>\
                            <div class="modal-body result-modal-content">\
                            </div>\
                        </div>\
                    </div>\
                </div>');

            $('body').append(default_modal_markup);

            $('#resultModal').on('hide.bs.modal', function (e) {
                $('#resultModal')
                    .find('.result-modal-content')
                    .html('');
            });

            // Search Input Field
            $(searchField).submit(function(e) {
                e.preventDefault();

                var searchTerm = $(this).find('input').val();

                if (searchTerm.split('').length >= 3) {

                    _self.searchStatus = searchTerm;
                    loadResultPage(1);

                } else {
                    return false;
                }
            });

            // Show Search Reset Button once user enters term
            $(searchField+' input').keypress(function() {
                $(this).siblings('.btn-search-reset').show();
            });

            // Reset Search
            $(searchField).on('click', '.btn-search-reset', function(e) {
                e.preventDefault();
                resetSearchTerm();
                $(this).hide();
            });

            // Filter Dropdowns
            $(dropdownElement).on('change', function(){

                var i = 0;
                var reload = true;
                _self.filterStatus = true;

                $(dropdownElement).each(function(){
                    var selectedFilterTag = $(this).val();
                    _self.filterTerms[i] = selectedFilterTag;
                    if (selectedFilterTag !== '0') {
                        reload = false;
                    }
                    i++;
                });

                if (reload) {
                    resetFilterTermsArray();
                };

                loadResultPage(1);
            });

            // Filter Sorting Dropdowns
            $(dropdownSortingElement).on('change', function(){

                _self.filterOrderStatus = true;

                loadResultPage(1);
            });

            // Reset Filters
            $(componentElement+' .btn-reset-filter').click( function (e) {

                e.preventDefault();
                resetFilterTermsArray();

            });

        });
    };

    var pressReleasesListing = new resultListing();

}

module.exports = mediaListing;

},{}],39:[function(require,module,exports){
/**
 *  This is the main file for pinAnchor
 */



var pinAnchor = function(){

	var pinScrollSpy = function(){
		// console.log("Anchor PIN pinScrollSpy");

		// This takes the expanded height (when viewed in full) and not the "pinned" smaller height
		// var getNavHeight = function(){
		// 	topMenuHeight = $(".pin-anchor-component ul").outerHeight(); 
		// }

		//var topMenuHeight = $(".pin-anchor-component ul").outerHeight(); // This takes the expanded height (when viewed in full) and not the "pinned" smaller height
		var topMenuHeight = 93; // hard-code for now to 93px

		// Cache selectors
		var lastId,
		    topMenu = $(".pin-anchor-component ul"),
		    // All list items
		    menuItems = topMenu.find("a"),
		    // Anchors corresponding to menu items
		    scrollItems = menuItems.map(function(){
		      	var item = $($(this).attr("href"));
		      	if (item.length) { return item; }
		    });

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
			// getNavHeight();
		  	var href = $(this).attr("href");
		  	var index = $(this).attr("data-index");

		  	// first index (0) is the location of the pin, so offset is the reverse of the others
		  	var menuHeightOffset = (index === "0") ? -topMenuHeight : topMenuHeight;

		  	if ($(href).length > 0) {
			    var offsetTop = href === "#" ? 0 : $(href).offset().top-menuHeightOffset+1;
			  	$('html, body').stop().animate({ 
			      	scrollTop: offsetTop
			  	}, 300);
			}
		  	e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   	// Get container scroll position
		   	var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   	// Get id of current scroll item
		   	var cur = scrollItems.map(function(){
		     	if ($(this).offset().top < fromTop)
		       		return this;
		   	});
		   	// Get the id of the current element
		   	cur = cur[cur.length-1];
		   	var id = cur && cur.length ? cur[0].id : "";
		   
		   	if (lastId !== id) {
		       	lastId = id;
		       	// Set/remove active class
		       	menuItems
		         	.parent().removeClass("active")
		         	.end().filter("[href=#"+id+"]").parent().addClass("active");
		   	}                   
		});
	}

	// Events
	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			// console.log("Anchor PIN");

			if ($('.pin-anchor-component').length !== 0) {

				// Scroll Spy
				pinScrollSpy();

		        var fixadentMenu = $(".pin-inner");
		        // var posMenu = fixadentMenu.offset();
		        // var posMenuNew;
		        // var posMenuReset = false;

		        FixedSticky.tests.sticky = false;

		        $('.pin-anchor-component').fixedsticky();

		        // console.log(posMenu.top);

		        // var fixadentCTA = $("#cta-box");
		        // var posCTA = fixadentCTA.offset();

		        /*
				$(window).on('scroll', function(){

					posMenuNew = fixadentMenu.offset();
					// console.log(posMenuNew.top);

					if (!posMenuReset && posMenu.top !== posMenuNew.top ) {
						// console.log('Reset');
						posMenu = fixadentMenu.offset();
						posMenuReset = true;
						posMenu.top = posMenuNew.top;
					} else {

					}

					// fix submenu to top
		            if ($(this).scrollTop() > (posMenu.top) && $(fixadentMenu.css('position') == 'static')) {
		                $(fixadentMenu).addClass('fixed');
		            } else {
		                $(fixadentMenu).removeClass('fixed');
		            }

		            // fix cta to top
		            // if ($(this).scrollTop() + 120 > (posCTA.top) && $(fixadentCTA.css('position') == 'static')) {
		            //     $(fixadentCTA).addClass('fixed-cta');
		            // } else {
		            //     $(fixadentCTA).removeClass('fixed-cta');
		            // }

				});
				*/

			    $( '.pin-anchor-component' ).on('click touchstart', '.btn-mobile-dropdown', function(event) {
			    	event.stopPropagation();
	        		event.preventDefault();
	        		
	        		if(event.handled !== true) {
	            		$(this).parents( '.pin-inner' ).toggleClass('open');
	            		event.handled = true;
			        } else {
			            return false;
			        }
			    	
			    });

		    };
			
		};


	});
}

module.exports = pinAnchor;

},{}],40:[function(require,module,exports){
/**
 *  This is the main file for pinLink
 */



var pinLink = function(){

	// Events
	$(document).ready(function(){

		if ($('.pin-link-component').length !== 0) {

	        var fixadentMenu = $(".pin-inner");
	        var posMenu = fixadentMenu.offset();
	        var posMenuNew;
	        var posMenuReset = false;

	        // console.log(posMenu.top);

	        // var fixadentCTA = $("#cta-box");
	        // var posCTA = fixadentCTA.offset();



			$(window).on('scroll', function(){

				posMenuNew = fixadentMenu.offset();
				// console.log(posMenuNew.top);

				if (!posMenuReset && posMenu.top !== posMenuNew.top ) {
					// console.log('Reset');
					posMenu = fixadentMenu.offset();
					posMenuReset = true;
					posMenu.top = posMenuNew.top;
				} else {

				}

				// fix submenu to top
	            if ($(this).scrollTop() > (posMenu.top) && $(fixadentMenu.css('position') == 'static')) {
	                $(fixadentMenu).addClass('fixed');
	            } else {
	                $(fixadentMenu).removeClass('fixed');
	            }

	            // fix cta to top
	            // if ($(this).scrollTop() + 120 > (posCTA.top) && $(fixadentCTA.css('position') == 'static')) {
	            //     $(fixadentCTA).addClass('fixed-cta');
	            // } else {
	            //     $(fixadentCTA).removeClass('fixed-cta');
	            // }

			});

		    $( '.pin-link-component' ).on('click touchstart', '.btn-mobile-dropdown', function(event) {
		    	event.stopPropagation();
        		event.preventDefault();
        		
        		if(event.handled !== true) {
            		$(this).parents( '.pin-inner' ).toggleClass('open');
            		event.handled = true;
		        } else {
		            return false;
		        }
		    	
		    });

	    };
	});
}

module.exports = pinLink;
},{}],41:[function(require,module,exports){
/**
 *  This is the main file for pyramidNav
 */



var pyramidNav = function(){

}

module.exports = pyramidNav;

},{}],42:[function(require,module,exports){
/**
 *  This is the main file for quote
 */



var quote = function(){

	var getBreakpoint = function(){

		//windowWidth = $(window).width();
		$('body, html').css('overflow', 'hidden');
        windowWidth = $(window).width();
        // windowWidth = $('body').innerWidth();
        $('body, html').css('overflow', 'visible');
		
		// console.log('windowWidth:', windowWidth);

	    if (windowWidth >= 1200 ) {
	        // console.log('Breakpoint: lg');
	        return 'lg';
	    } else if (windowWidth >= 992 ) {
	        // console.log('Breakpoint: md');
	        return 'md';
	    } else if (windowWidth >= 768 ) {
	        // console.log('Breakpoint: sm');
	        return 'sm';
	    } else if (windowWidth >= 480 ) {
	        // console.log('Breakpoint: xs');
	        return 'xs';
	    } else {
	        // console.log('Breakpoint: xs');
	    	return 'xx';
	    }
	}

	$(document).ready(function(){

		// console.log('quote component');
		if (getBreakpoint() !== 'xx'){
			$('blockquote p').widowFix();
		}

	});

}

module.exports = quote;

},{}],43:[function(require,module,exports){
/**
 *  This is the main file for shareBar
 */



var shareBar = function(){

}

module.exports = shareBar;

},{}],44:[function(require,module,exports){
/**
 *  This is the main file for siteFooter
 */

var siteFooter = function(){

    $('.footer-showall').click(function() {
		$('.mega-footer').fadeToggle(function() {
			if ($(".mega-footer").is(":visible")) {
				$('.footer-showall .red').html('-');
			} else {
				$('.footer-showall .red').html('+');
			}
		});;
	});
	
}

module.exports = siteFooter;
},{}],45:[function(require,module,exports){
/**
 *  This is the main file for siteHeader
 */

var siteHeader = function(){
    // console.log('siteHeader Component Loaded');

	// $('.main-menu').hover(function() {
	// 	heroContainer.slickPause();
	// });
	// $('.main-menu').mouseout(function() {
	// 	heroContainer.slickPlay();
	// });

	// Set mobile mouse events
	$('.mobile-button').click(function() {
		$(this).toggleClass('open');
		$('.mobile-menu').fadeToggle(250);
		$('.mobileSearchContainer').fadeOut(250);
	});
	$('.mobile-search').click(function() {
		$('.mobileSearchContainer').fadeToggle();
		$('.msSearchForm').focus();
		$('.mobile-menu').fadeOut(250);
		$('.mobile-button').removeClass('open');
	});

	//close search on body scroll
	$(window).scroll(function(){
		//store initial scrolltop when scrolling starts
		if (!window.scrollIdx) {
            scrollIdx = $('body').scrollTop();
		}
		//if you scroll in either direction more than 100 pixels, search hides
		if ( $('body').scrollTop() > (scrollIdx+100) || $('body').scrollTop() < (scrollIdx-100) ) {
			$('.fixed-menu form').removeClass('open');
            scrollIdx = undefined;
		}
	});

	//mobile nav clicks
	$('.mobile-menu').on('click', 'li', function(e){
		var $el = $(this),
			$span = $el.children('a').children('span').eq(0),
			$ul = $el.children('ul');
		$ul.slideToggle(250);
		$span.text($span.text() == "+" ? "-" : "+");
		$el.siblings().children('ul').slideUp(250);
		$el.siblings().children('a').children('span').text("+");
		e.stopPropagation();
	});

	$('.fixed-menu .searchFixed').on('click', function() {
		$(this).find('form').toggleClass('open')
			.find('input').focus();
	})
	$('.fixed-menu form').on('click', function(e) {
		e.stopPropagation();
	});
	$(window).on('scroll', function() {
		$('.fmSearch').fadeOut();
	});
}

module.exports = siteHeader;
},{}],46:[function(require,module,exports){
/**
 *  This is the main file for sliderContainer
 */



var sliderContainer = function(){

	$(document).ready(function(){
		
		// CQ Check - disable slick in author mode
		if (!editmode.isEditMode()) {

			var resetSlideHeight = function(){
				// console.log('Reset Height', $('.slick-list').height());
				// $('.slick-list').css('height','' );
				// console.log('After Reset Height', $('.slick-list').height());
				// $('.slick-slide').css('height','' );

				// console.log('.slick-list Height', $('.slick-list').height());
				// console.log('.slick-slide Height', $('.slick-slide').height());


				// $('.slick-list').css('height', 'auto');
				// $('.slick-slide').css('height', $('.slick-list').height()  );

				// console.log('.slick-list Height AFTER', $('.slick-list').height());
				// console.log('.slick-slide Height AFTER', $('.slick-slide').height());

				$('.slider-content-dots .slider').each(function() {
					var $this = $(this);
					$this.find('.slick-list').css('height', $this.find('.slick-slide.slick-active').height());
					$this.find('.slick-slide.slick-active').css('height', 'auto' );
				});
				$('.slider-content-arrows .slider').each(function() {
					var $this = $(this);
					$this.find('.slick-list').css('height', $this.find('.slick-slide.slick-active').height());
					$this.find('.slick-slide.slick-active').css('height', 'auto' );
				});
				$('.slider-content-dots-arrows .slider').each(function() {
					var $this = $(this);
					$this.find('.slick-list').css('height', $this.find('.slick-slide.slick-active').height());
					$this.find('.slick-slide.slick-active').css('height', 'auto' );
				});
				$('.slider-content-express .slider').each(function() {
					var $this = $(this);
					$this.find('.slick-list').css('height', $this.find('.slick-slide.slick-active').height());
					$this.find('.slick-slide.slick-active').css('height', 'auto' );
				});
			}

			// For use with Banner Page
			$('.slider-banner-page .slider').each(function() {
				var $this = $(this);
				var autoplay = $this.data('slider-autoplay');
				var lazyMode = $this.data('slider-lazy');
				$this.slick({
					dots: true,
					arrows: false,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					fade: true,
					cssEase: 'linear',
					autoplay: autoplay,
					lazyLoad: lazyMode,
					adaptiveHeight: false,
					autoplaySpeed: 10000
				});
			});

			// For use with Content
			$('.slider-content-dots .slider').each(function() {
				var $this = $(this);
				var autoplay = $this.data('slider-autoplay');
				var lazyMode = $this.data('slider-lazy');
				$this.slick({
					dots: true,
					arrows: false,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					fade: false,
					cssEase: 'linear',
					autoplay: autoplay,
					autoplaySpeed: 7000,
					// lazyLoad: lazyMode,
					// adaptiveHeight: false
					// lazyLoad: false,
					// adaptiveHeight: true
					lazyLoad: lazyMode,
					adaptiveHeight: true
				});

			});

			// For use with Content
			$('.slider-content-arrows .slider').each(function() {
				var $this = $(this);
				var autoplay = $this.data('slider-autoplay');
				var lazyMode = $this.data('slider-lazy');
				$this.slick({
					dots: false,
					arrows: true,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					fade: false,
					cssEase: 'linear',
					autoplay: autoplay,
					autoplaySpeed: 7000,
					// lazyLoad: lazyMode,
					// adaptiveHeight: false
					// lazyLoad: false,
					// adaptiveHeight: true
					lazyLoad: lazyMode,
					adaptiveHeight: true
				});
				
			});

			// For use with Content
			$('.slider-content-dots-arrows .slider').each(function() {
				var $this = $(this);
				var autoplay = $this.data('slider-autoplay');
				var lazyMode = $this.data('slider-lazy');
				$this.slick({
					dots: true,
					arrows: true,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					fade: false,
					cssEase: 'linear',
					autoplay: autoplay,
					autoplaySpeed: 7000,
					// lazyLoad: lazyMode,
					// adaptiveHeight: false
					// lazyLoad: true,
					// adaptiveHeight: true
					lazyLoad: lazyMode,
					adaptiveHeight: true
				});

			});

			// For use with Content
			$('.slider-content-express .slider').each(function() {
				var $this = $(this);
				var autoplay = $this.data('slider-autoplay');
				var lazyMode = $this.data('slider-lazy');
				$this.slick({
					dots: true,
					arrows: true,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					fade: false,
					cssEase: 'linear',
					autoplay: autoplay,
					autoplaySpeed: 7000,
					// lazyLoad: lazyMode,
					// adaptiveHeight: false
					// lazyLoad: false,
					// adaptiveHeight: true
					lazyLoad: lazyMode,
					adaptiveHeight: true
				});

			});

			$('.slick-dots button').on('click', function(e){
				e.preventDefault();

				// console.log('prevent default');
				// return false;
			});

			// var stHeight = $('.slick-track').height();
			// $('.slick-slide').css('height',stHeight + 'px' );

			// $(window).on('scroll', function(){
			// 	console.log('scroll');
			// 	return false;
			// });

			// Timeout reset height for lazyload sliders
            setTimeout(resetSlideHeight, 1500);
		};

	});
}

module.exports = sliderContainer;

},{}],47:[function(require,module,exports){
/**
 *  This is the main file for smTextImage
 */



var smTextImage = function(){

}

module.exports = smTextImage;

},{}],48:[function(require,module,exports){
/**
 *  This is the main file for tabBottomContainer
 */



var tabBottomContainer = function(){

	var resizeTimer,
		tabSliderStatus = false,
		tabSliderNavStatus = false;

	var getBreakpoint = function(){

		//windowWidth = $(window).width();
		$('body, html').css('overflow', 'hidden');
        windowWidth = $(window).width();
        // windowWidth = $('body').innerWidth();
        $('body, html').css('overflow', 'visible');
		
		// console.log('windowWidth:', windowWidth);

	    if (windowWidth >= 1200 ) {
	        // console.log('Breakpoint: lg');
	        return 'lg';
	    } else if (windowWidth >= 992 ) {
	        // console.log('Breakpoint: md');
	        return 'md';
	    } else if (windowWidth >= 768 ) {
	        // console.log('Breakpoint: sm');
	        return 'sm';
	    } else if (windowWidth >= 480 ) {
	        // console.log('Breakpoint: xs');
	        return 'xs';
	    } else {
	        // console.log('Breakpoint: xs');
	    	return 'xx';
	    }
	}

	// Updating styling "selected" on nav items
	var updateNav = function(tabSliderNavObj, tabSliderNav){

	    //remove all selections
	    tabSliderNav.find('a').removeClass('selected');
	    
	    //display current selection in nav
	    var item_index = tabSliderNavObj.slick('slickCurrentSlide');
	    tabSliderNav.find('a').eq(item_index).addClass('selected');
	};

	// Click listener for nav items
	var navClick = function(tabSliderNavObj, tabSliderNav, navItem){
	    
	    //get current index
	    var item_index = $(navItem).index();

	    //remove all selections
	    if(!$(navItem).hasClass('selected')){
	    	tabSliderNav.find('a').removeClass('selected');
	    }
	    //move carousel to selection
	    tabSliderNavObj.slick('slickGoTo', item_index)
	};

	// Init
    var buildTabBottomComponent = function(sliderItem){

    	// Set Slider
		var tabSliderContainer = sliderItem;
		var tabSlider = tabSliderContainer.find('.tab-panels');
		var tabSliderNav = tabSliderContainer.find('.tab-nav');
		var tabSliderNavObj = false;

	   	if (getBreakpoint() === 'xx') {

	   		if (tabSliderStatus) {
	   			tabSlider.slick('unslick');
	   		};

	   		// Setup main tab slider
	   		tabSliderStatus = true;
	   		tabSliderNavObj = tabSlider.slick({
		       	dots: false,
				arrows: false,
				infinite: false,
				speed: 150,
				slidesToShow: 1,
				fade: true,
				cssEase: 'linear',
				adaptiveHeight: true,
				asNavFor: '.tab-nav'
				// autoplay: true,
				// autoplaySpeed: 4000
		   	});

		   	// Setup tab nav as slider
	   		tabSliderNavStatus = true;
			tabSliderNav.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.tab-panels',
				dots: false,
				centerMode: true,
				infinite: false,
				focusOnSelect: true
			});

			// reset slides to slide 1
			updateNav(tabSliderNavObj, tabSliderNav);

		} else{

	   		if (tabSliderStatus) {
	   			tabSlider.slick('unslick');
	   		};

	   		// Setup main tab slider desktop version
	   		tabSliderStatus = true;
	   		tabSliderNavObj = tabSlider.slick({
		       	dots: false,
				arrows: false,
				infinite: false,
				speed: 150,
				slidesToShow: 1,
				fade: true,
				cssEase: 'linear',
				adaptiveHeight: false
				// autoplay: true,
				// autoplaySpeed: 4000
		   	});

			// reset slides to slide 1
		   	updateNav(tabSliderNavObj, tabSliderNav);

			if(tabSliderNavStatus){
        		tabSliderNav.slick('unslick');
        	}
		}

	   	tabSlider.on('afterChange', function(){
           	updateNav(tabSliderNavObj, tabSliderNav);
       	});

       	tabSliderNav.find('a').eq(0).addClass('selected');

	   	tabSliderNav.find('a').on('click', function(e){
	   		e.preventDefault();
	   		var navItem = $(this);
	   		navClick(tabSliderNavObj, tabSliderNav, navItem);
	   	});
    };

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			$('.tab-bottom-container-component').each(function(){
				var sliderItem = $(this);
				buildTabBottomComponent(sliderItem);
			});
			
		};

	});

	$(window).on('resize', function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {
		    clearTimeout(resizeTimer);
		    resizeTimer = setTimeout(function() {

		        $('.tab-bottom-container-component').each(function(){
					var sliderItem = $(this);
					buildTabBottomComponent(sliderItem);
				});

		    }, 250);
		};

	});
}

module.exports = tabBottomContainer;

},{}],49:[function(require,module,exports){
/**
 *  This is the main file for tabGridContainer
 */



var tabGridContainer = function(){

	var componentElement = '.tab-grid-container-component';
	var dropdownElement = componentElement + ' .filter-control';
	var resultArea = '';

	var _self = this;

	_self.originalData = false;
	_self.filteredData = false;
	_self.filterStatus = false;


	_self.filterTerms = [];

	// Build Grid Item
	_self.buildGridItem = function(itemData){
		var html = '';

		html += '<!-- Tab Grid Item Component -->';
		html += '<div class="component tab-grid-item-component size-1x1 light-grey image-top image-on-top">';
		html += '<a class="item-link" href="' + itemData.url + '" title="' + itemData.name + '">';
		html += '<span class="item-inner">';
		html += '<span class="item-content">';
		html += '<img class="item-img" src="' + itemData.imageUrl + '" />';
		html += '<span class="item-caption">' + itemData.shortDescription + '</span>';
		html += '</span>';
		html += '</span>';
		html += '</a>';
		html += '</div>';

        return html;
	}

	_self.buildVideoItem = function(customer, itemData){
		var modalCtaText = $(componentElement).attr('data-video-modal-cta-text');

		var html = '';

		html += '<!-- Video Component -->';
		html += '<div class="component video-component with-caption" style="background-image: url(\'' + itemData.thumbnail + '\')">';
		html += '<a href="#" class="videomodallink" data-cta-link="'+customer.url+'" data-cta-link-text="'+modalCtaText+'" data-toggle="modal" data-target="#videoModal" data-ooyala="' + itemData.videoId + '">';
		html += '<span class="media-caption"><img src="' + itemData.captionLogo + '" />' + itemData.caption + '</span>';
		html += '</a>';
		html += '</div>';

        return html;
	}

	// Filter Content for `Videos` Tab
	var filterAllVideos = function(){
		// console.log('filterAllVideos', _self.filterTerms);

		var filteredCustomers = [];
		var data = _self.originalData;
		
		if (_self.filterStatus) {
			for (var i = 0; i < data.customers.length; i++) {
				var customer = data.customers[i];

				if (customer.videos.length > 0) {
					if (containsFilterTag(customer.tags, _self.filterTerms)) {

						filteredCustomers.push(customer);
					}
				};
			}
		} else {
			for (var i = 0; i < data.customers.length; i++) {
				var customer = data.customers[i];

				if (customer.videos.length > 0) {
					filteredCustomers.push(customer);
				};
			}
		}

		displayAllVideos(filteredCustomers);
	}

	var displayAllVideos = function(data){
		var html = '';
		var resultCount = 0;

		// // console.log('displayAllVideos', data);
		
		for (var i = 0; i < data.length; i++) {
			var customer = data[i];

			if (customer.videos.length > 0) {
				for (var j = 0; j < customer.videos.length; j++) {
					html += _self.buildVideoItem(customer, customer.videos[j]);
					resultCount++;
				}
			};
		}
		$('#tab2 .result-count').text(resultCount);
		$('#tab2 .result-area').html(html);
	}

	// Filter Content for `All CUstomers` Tab
	var filterAllCustomers = function(){
		// console.log('filterAllCustomers');

		var filteredCustomers = [];
		var data = _self.originalData;
		
		if (_self.filterStatus) {
			for (var i = 0; i < data.customers.length; i++) {
				var customer = data.customers[i];
				if (containsFilterTag(customer.tags, _self.filterTerms)) {

					filteredCustomers.push(customer);
				}
			}
		} else {
			for (var i = 0; i < data.customers.length; i++) {
				var customer = data.customers[i];

				filteredCustomers.push(customer);
			}
		}

		displayAllCustomers(filteredCustomers);
	}

	var displayAllCustomers = function(data){
		var html = '';
		var resultCount = 0;

		for (var i = 0; i < data.length; i++) {
			var customer = data[i];
			html += _self.buildGridItem(customer);
			resultCount++;
		}

		$('#tab3 .result-count').text(resultCount);
		$('#tab3 .result-area').html(html);
	}

	// Filter Dropdown
	var filterChange = function(){
		var i = 0;
		var reload = false;
		_self.filterStatus = true;

		$(dropdownElement).each(function(){
			var selectedFilterTag = $(this).val();
			_self.filterTerms[i] = selectedFilterTag;
			if (selectedFilterTag === '0') {
				reload = true;
			} else {
				reload = false;
			}
			i++;
		});

		if (reload) {
			resetFilterTermsArray();
		};

		filterAllVideos();
		filterAllCustomers();
	}

	var setFilterTermsArray = function(){
		$(dropdownElement).each(function(){
	    	var selectedFilterTag = $(this).val();
			_self.filterTerms.push(selectedFilterTag);
	    });
	}

	var resetFilterTermsArray = function(){

		var i = 0;
		_self.filterStatus = false;
		_self.filterTerms = [];

		$(dropdownElement).each(function(){
			$(this).val(0);
			_self.filterTerms[i] = '0';
			i++;
	    });

	    // console.log(_self.filterTerms);

		$('.get-results').each( function(){
			$(this).removeClass('active');
		});

	    filterAllVideos();
		filterAllCustomers();
	}

	var containsFilterTag = function(customerTags, filterTags){

		// console.log('containsFilterTag');

		var match = false,
			matchCount = 0;

		var customerTagsLen = customerTags.length,
			filterTagsLen = filterTags.length;

	    for (var i = 0; i < filterTagsLen; i++) { 
	    	if (filterTags[i] === '0') {
	    		matchCount++;
	    	} else {
		        for (var j = 0; j < customerTagsLen; j++) { 

		        	// // console.log('a', a[i].id);
		        	// // console.log('b', b[j].id);

		            if (customerTags[j].id.startsWith(filterTags[i])) {
		                // b.splice(j, 1);
		                // len2=b.length;

						// console.log('filterTags[i]', filterTags[i]);
						// console.log('customerTags[j].id', customerTags[j].id);

		                matchCount++;
		            }
		        }
		    }
	    }
	    if (matchCount === filterTagsLen) {
	    	match = true;
	    };
	    return match;
	}

	var containsFilterTag2 = function(customerTags, filterTags){
		var match = false,
			matchCount = 0;

		var customerTagsLen = customerTags.length,
			filterTagsLen = filterTags.length;

	    for (var i = 0; i < customerTagsLen; i++) { 
	        for (var j = 0; j < filterTagsLen; j++) { 

	        	// // console.log('a', a[i].id);
	        	// // console.log('b', b[j].id);

	            if (customerTags[i].id === filterTags[j] || filterTags[j] === '0') {
	                // b.splice(j, 1);
	                // len2=b.length;

	                matchCount++;
	            }
	        }
	    }
	    if (matchCount === filterTagsLen) {
	    	match = true;
	    };
	    return match;
	}

	// Filter Letter
	var filterLetterHighlight = function(){
		var i = 0;
		var reload = false;

		// Handle ALPHA bar for VIDEOS
		$('.filter-letter.videos .letter-sort').each(function(){

			var filterLetter = $(this).attr('data-sort');
			var customers = _self.originalData.customers;
			var customersLen = _self.originalData.customers.length;

		    for (var i = 0; i < customersLen; i++) { 

		    	if (customers[i].tags.length > 0) {

			        for (var j = 0; j < customers[i].tags.length; j++) { 



			        	// // console.log('id', customers[i].tags[j].id);
			        	// // console.log('b', b[j].id);

			            if (filterLetter === customers[i].tags[j].id && customers[i].videos.length) {
			                // b.splice(j, 1);
			                // len2=b.length;

							$(this).addClass('get-results').removeClass('letter-sort');
			            }
			        }
			    }
		    }
		});

		// Handle ALPHA bar for CUSTOMERS
		$('.filter-letter.customers .letter-sort').each(function(){

			var filterLetter = $(this).attr('data-sort');
			var customers = _self.originalData.customers;
			var customersLen = _self.originalData.customers.length;

		    for (var i = 0; i < customersLen; i++) { 

		    	if (customers[i].tags.length > 0) {

			        for (var j = 0; j < customers[i].tags.length; j++) { 



			        	// // console.log('id', customers[i].tags[j].id);
			        	// // console.log('b', b[j].id);

			            if (filterLetter === customers[i].tags[j].id) {
			                // b.splice(j, 1);
			                // len2=b.length;

							$(this).addClass('get-results').removeClass('letter-sort');
			            }
			        }
			    }
		    }
		});

	}

	// Get Data
	var GetData = function(){
		if (!$(componentElement).length) return;

		var staticJson = $(componentElement).attr('data-src-json');

		$.ajax( staticJson, {
			success: function(data) {

				_self.originalData = data;

				// Letter Filter Highlight
				filterLetterHighlight();

				// Initial build
				filterAllVideos();
				filterAllCustomers();
				
				// $('#main').html($(data).find('#main *'));
				// $('#notification-bar').text('The page has been successfully loaded');
			},
			error: function() {
				// $('#notification-bar').text('An error occurred');
			}
		});
	}

	// On Load INIT
	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			// Set Filter Array for searched terms
			setFilterTermsArray();

			// Load all Data
			GetData();

			// Listen to tabs change
			$(componentElement+' .tab-nav a').on('shown.bs.tab', function (e) {
				
				resetFilterTermsArray();
			});

			// Filter Dropdowns
			$(dropdownElement).on('change', function(){

				var i = 0;
				var reload = true;
				_self.filterStatus = true;

				$(dropdownElement).each(function(){
					var selectedFilterTag = $(this).val();
					_self.filterTerms[i] = selectedFilterTag;
					if (selectedFilterTag !== '0') {
						reload = false;
					}
					i++;
				});

				if (reload) {
					resetFilterTermsArray();
				};

				filterAllVideos();
				filterAllCustomers();

			});

			// Filter Letters
			$(componentElement+' .filter-letter').click( function (e) {

				if ($(e.target).hasClass('get-results')){

					resetFilterTermsArray();

					$('.get-results').each( function(){
						$(this).removeClass('active');
					});
					$(e.target).addClass('active');

					_self.filterStatus = true;

					var filterLetter = $(e.target).attr('data-sort');
					_self.filterTerms = [];
					_self.filterTerms.push(filterLetter);

					filterAllVideos();
					filterAllCustomers();
				}

			});

			// Reset Filters
			$(componentElement+' .btn-reset-filter').click( function (e) {
				e.preventDefault();
				resetFilterTermsArray();

			});

			$(componentElement).on('click', '.scroll-to-top', function (event) {
				event.preventDefault();
                $('html,body').animate({ scrollTop: 0 }, 1000);
        		return false;
	        });

			$(componentElement).on('click', '.tab-nav a', function (e) {
			  	e.preventDefault();
			  	// console.info('tab clicked');
			  	$(this).tab('show');
			  	
			});
			
		};

	});
}

module.exports = tabGridContainer;

},{}],50:[function(require,module,exports){
/**
 *  This is the main file for tabGridItem
 */



var tabGridItem = function(){

}

module.exports = tabGridItem;

},{}],51:[function(require,module,exports){
/**
 *  This is the main file for tabLeftContainer
 */



var tabLeftContainer = function(){

	// Updating styling "selected" on nav items
	var updateNav = function(tabSliderNavObj, tabSliderNav){

	    //remove all selections
	    tabSliderNav.find('a').removeClass('selected');
	    
	    //display current selection in nav
	    var item_index = tabSliderNavObj.slick('slickCurrentSlide');
	    tabSliderNav.find('a').eq(item_index).addClass('selected');
	};

	// Click listener for nav items
	var navClick = function(tabSliderNavObj, tabSliderNav, navItem){
	    
	    //get current index
	    var item_index = $(navItem).index();

	    //remove all selections
	    if(!$(navItem).hasClass('selected')){
	    	tabSliderNav.find('a').removeClass('selected');
	    }
	    //move carousel to selection
	    tabSliderNavObj.slick('slickGoTo', item_index)
	};

	// Init
    var buildTabLeftComponent = function(sliderItem, startOnSLide){

    	// Set Slider
		var tabSliderContainer = sliderItem;
		var tabSlider = tabSliderContainer.find('.tab-panels');
		var tabSliderNav = tabSliderContainer.find('.tab-nav');
		var tabSliderNavObj = false;

	   	tabSliderNavObj = tabSlider.slick({
	       	dots: false,
			arrows: false,
			// infinite: true,
			speed: 150,
			slidesToShow: 1,
			initialSlide: startOnSLide,
			fade: true,
			adaptiveHeight: true,
			cssEase: 'linear'
			// autoplay: true,
			// autoplaySpeed: 4000
	   	});   

	   	tabSlider.on('afterChange', function(){
           	updateNav(tabSliderNavObj, tabSliderNav);
       	});

       	tabSliderNav.find('a').eq(startOnSLide).addClass('selected');

	   	tabSliderNav.find('a').on('click', function(e){
	   		e.preventDefault();
	   		var navItem = $(this);
	   		navClick(tabSliderNavObj, tabSliderNav, navItem);
	   	});
    };

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			$('.tab-left-container-component').each(function(){
				var sliderItem = $(this);
				var startOnSLide = sliderItem.attr('data-show-tab') || 0;
				buildTabLeftComponent(sliderItem, startOnSLide);
			});
			
		};

	});
}

module.exports = tabLeftContainer;

},{}],52:[function(require,module,exports){
/**
 *  This is the main file for tabTopContainer
 */



var tabTopContainer = function(){

	var resizeTimer,
		windowWidth,
		componentClass = '.tab-top-container-component',
		sliderStatus = false;

	var getBreakpoint = function(){

		//windowWidth = $(window).width();
		$('body, html').css('overflow', 'hidden');
        windowWidth = $(window).width();
        // windowWidth = $('body').innerWidth();
        $('body, html').css('overflow', 'visible');
		
		// console.log('windowWidth:', windowWidth);

	    if (windowWidth >= 1200 ) {
	        // console.log('Breakpoint: lg');
	        return 'lg';
	    } else if (windowWidth >= 992 ) {
	        // console.log('Breakpoint: md');
	        return 'md';
	    } else if (windowWidth >= 768 ) {
	        // console.log('Breakpoint: sm');
	        return 'sm';
	    } else if (windowWidth >= 480 ) {
	        // console.log('Breakpoint: xs');
	        return 'xs';
	    } else {
	    	return 'xx';
	    }
	}

	// Updating styling "selected" on nav items
	var updateNav = function(tabSliderNavObj, tabSliderNav){

	    //remove all selections
	    tabSliderNav.find('a').removeClass('selected');
	    
	    //display current selection in nav
	    var item_index = tabSliderNavObj.slick('slickCurrentSlide');
	    tabSliderNav.find('a').eq(item_index).addClass('selected');
	};

	// Click listener for nav items
	var navClick = function(tabSliderNavObj, tabSliderNav, navItem){
	    
	    //get current index
	    var item_index = $(navItem).index();

	    //remove all selections
	    if(!$(navItem).hasClass('selected')){
	    	tabSliderNav.find('a').removeClass('selected');
	    }
	    //move carousel to selection
	    tabSliderNavObj.slick('slickGoTo', item_index)
	};

	// Init
    var buildTabBottomComponent = function(sliderItem){

    	// Set Slider
		var tabSliderContainer = sliderItem;
		var tabSlider = tabSliderContainer.find('.tab-panels');
		var tabSliderNav = tabSliderContainer.find('.tab-nav');
		var tabSliderNavObj = false;

    	if (getBreakpoint() !== 'xx' && getBreakpoint() !== 'xs' && getBreakpoint() !== 'sm') {
        	// console.log('Add slick');

        	$('.tab-panel-inner').attr('style', '');

        	// $('.mobile-nav-item').off('click touchstart');

        	sliderStatus = true;

		   	tabSliderNavObj = tabSlider.slick({
		       	dots: false,
				arrows: false,
				// infinite: true,
				speed: 150,
				slidesToShow: 1,
				fade: true,
				cssEase: 'linear'
				// autoplay: true,
				// autoplaySpeed: 4000
		   	});   

		   	tabSlider.on('afterChange', function(){
	           	updateNav(tabSliderNavObj, tabSliderNav);
	       	});
	       	
	       	//remove all selections
	    	tabSliderNav.find('a').removeClass('selected').blur();

	       	tabSliderNav.find('a').eq(0).addClass('selected');

		   	tabSliderNav.find('a').on('click', function(e){
		   		e.preventDefault();
		   		var navItem = $(this);
		   		navClick(tabSliderNavObj, tabSliderNav, navItem);
		   	});
        } else {

        	if (sliderStatus) {
        		tabSlider.slick('unslick');
        	}
        }
    };

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			$('.tab-top-container-component').each(function(){
				var sliderItem = $(this);
				buildTabBottomComponent(sliderItem);
			});
			// console.log(getBreakpoint());
		};

		$('.mobile-nav-item').on('click touchstart', function(e){
			e.preventDefault();
			
			if($(this).hasClass('open')){
				// console.log('item has OPEN class');
				$(this).removeClass('open');
				$(this).next('.tab-panel-inner').slideUp();
			} else {
				// console.log('item without OPEN class');
				$('.mobile-nav-item.open').next('.tab-panel-inner').slideUp();
				$('.mobile-nav-item.open').removeClass('open');
				$(this).next('.tab-panel-inner').slideDown();
				$(this).addClass('open');
			}

		});

	});

	$(window).on('resize', function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {
		    clearTimeout(resizeTimer);
		    resizeTimer = setTimeout(function() {

		        $('.tab-top-container-component').each(function(){
					var sliderItem = $(this);
					buildTabBottomComponent(sliderItem);
				});

		    }, 250);
		};

	});
}

module.exports = tabTopContainer;

},{}],53:[function(require,module,exports){
/**
 *  This is the main file for tableList
 */



var tableList = function(){

}

module.exports = tableList;

},{}],54:[function(require,module,exports){
/**
 *  This is the main file for text
 */



var text = function(){
    $(document).ready(function(){

        // Smooth scroll on anchor links
        $('.text-component.text-block').on('click', 'a', function(e){
            var href = $(this).attr("href");

            if ($(href).length > 0) {
                var offsetTop = href === "#" ? 0 : $(href).offset().top;
                $('html, body').stop().animate({ 
                    scrollTop: offsetTop
                }, 300);

                e.preventDefault();
                return false;
            } else if (href === "#") {
                $('html,body').animate({ scrollTop: 0 }, 300);
                e.preventDefault();
                return false;
            }
            
        });
    });
}

module.exports = text;

},{}],55:[function(require,module,exports){
/**
 *  This is the main file for textHeadline
 */



var textHeadline = function(){

}

module.exports = textHeadline;

},{}],56:[function(require,module,exports){
/**
 *  This is the main file for textImage
 */



var textImage = function(){

	var resizeTimer;

	var getBreakpoint = function(){

		//windowWidth = $(window).width();
		$('body, html').css('overflow', 'hidden');
        windowWidth = $(window).width();
        // windowWidth = $('body').innerWidth();
        $('body, html').css('overflow', 'visible');
		
		// console.log('windowWidth:', windowWidth);

	    if (windowWidth >= 1200 ) {
	        // console.log('Breakpoint: lg');
	        return 'lg';
	    } else if (windowWidth >= 992 ) {
	        // console.log('Breakpoint: md');
	        return 'md';
	    } else if (windowWidth >= 768 ) {
	        // console.log('Breakpoint: sm');
	        return 'sm';
	    } else if (windowWidth >= 480 ) {
	        // console.log('Breakpoint: xs');
	        return 'xs';
	    } else {
	        // console.log('Breakpoint: xs');
	    	return 'xx';
	    }
	}

	var setHeightTextCol = function(){

		if (getBreakpoint() === 'lg' || getBreakpoint() === 'md') {
			
			// console.log('textImage: matchHeight ON');
			
			$('.image-left, .image-right').each(function(){
				// $(this).find('.text-col').matchHeight({
				// 	byRow: true,
				// 	property: 'height',
				// 	// target: $(this).siblings('.image-col'),
				// 	target: $('.image-col'),
				// 	remove: false
				// });
				if(!$(this).hasClass('variation-2')){
					var colHeight = $(this).find('.image-col').height();
					$(this).find('.text-col').height(colHeight);
				}
			});

		} else {

			// console.log('textImage: matchHeight OFF');
			
			// $('.image-left, .image-right').each(function(){
			// 	$(this).find('.col-sm-12').matchHeight({ remove: true });
			// });

			$('.text-col').each(function(){
				$(this).attr('style', '');
			});
		}
	}

	$(document).ready(function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {

			setHeightTextCol();
			
		};

	});

	$(window).on('resize', function(){

		// CQ Check - disable slick in author mode
		if (typeof CQ !== 'undefined' || !editmode.isEditMode()) {
		    clearTimeout(resizeTimer);
		    resizeTimer = setTimeout(function() {
			
				setHeightTextCol();

		    }, 250);
		};

	});

}

module.exports = textImage;

},{}],57:[function(require,module,exports){
/**
 *  This is the main file for textJumbo
 */



var textJumbo = function(){

}

module.exports = textJumbo;

},{}],58:[function(require,module,exports){
/**
 *  This is the main file for textList
 */



var textList = function(){

}

module.exports = textList;

},{}],59:[function(require,module,exports){
/**
 *  This is the main file for thankYouLinkList
 */



var thankYouLinkList = function(){

}

module.exports = thankYouLinkList;

},{}],60:[function(require,module,exports){
/**
 *  This is the main file for thankYouResource
 */



var thankYouResource = function(){

}

module.exports = thankYouResource;

},{}],61:[function(require,module,exports){
/**
 *  This is the main file for thankYouSocial
 */



var thankYouSocial = function(){

}

module.exports = thankYouSocial;

},{}],62:[function(require,module,exports){
/**
 *  This is the main file for video
 */

var video = function(){
    // console.log("init video");

    $(document).ready(function(){

        $('body').on('click', '.videomodallink', function(e){
            e.preventDefault();

            var videoID = $(this).attr('data-ooyala');
            var ctaLink = $(this).attr('data-cta-link');
            var ctaText = $(this).attr('data-cta-link-text');
            // console.log(videoID);

            if (ctaLink && ctaText) {
                $('#videoModal .video-btn-more a').attr('href', ctaLink);
                $('#videoModal .video-btn-more a').text(ctaText);
                $('#videoModal .video-btn-more').show();
            } else {
                $('#videoModal .video-btn-more').hide();
            }

            if ( typeof OO !== 'undefined' ) {
                OO.ready(function() { 

                    videoPlayer = OO.Player.create(
                        'videoPlayerWrapper', 
                        videoID, {

                            /* Include the onCreate() function in these embedded parameters. */
                            onCreate : window.onCreate,
                            autoplay: true,
                            wmode: 'opaque'
                        }
                    );

                    videoPlayer.play(); // auto-play
                });
                
                // jQuery('#lgVid1').modal({
                //     autoResize: true,
                //     overlayClose: false
                // });
                
                // jQuery(document).on('click', '.simplemodal-close', function() {
                //     thismovieplayer.destroy();
                // });
            
                // $('#videoModal').on('shown.bs.modal', function (e) {
                //     console.log('Modal Show');
                //     videoPlayer = OO.Player.create(
                //         'videoPlayerWrapper', 
                //         'I1OW51ZDrG8kszhSFU-z4jNWpAakQMVh', {

                //         /* Include the onCreate() function in these embedded parameters. */
                //         onCreate : window.onCreate
                //         }
                //     );
                //     // videoPlayer.play();
                // });

                $('#videoModal').on('hide.bs.modal', function (e) {
                    // console.log('Modal Hide');
                    videoPlayer.destroy();
                });

            } else {
                console.info('Ooyala JS missing');
            }
        });

    });
}

module.exports = video;

},{}],63:[function(require,module,exports){
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

},{}]},{},[2]);
