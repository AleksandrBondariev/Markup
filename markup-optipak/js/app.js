jQuery(function() {
	initFoundation();
});

function initFoundation() {
	jQuery(document).foundation();
}


  	    $( function() {
        "use strict";
        
        var $portfolioMasonryOne = $('.portfolio-masonry-one').isotope({
            itemSelector: '.portfolio-masonry-one-item',
            masonry: {
              columnWidth: 180,
              gutter: 10
            }
        }); 
        
        var $portfolioMasonryOneFullwidth = $('.portfolio-masonry-one-fullwidth').isotope({
            itemSelector: '.portfolio-masonry-one-item',
            masonry: {
              columnWidth: 180,
              gutter: 10
            }
        });
        
        var $portfolioMasonryTwo = $('.portfolio-masonry-two').isotope({
            itemSelector: '.portfolio-masonry-two-item',
            masonry: {
              columnWidth: 250,
              gutter: 10
            }
        });
        
        var $portfolioMasonryTwoFullwidth = $('.portfolio-masonry-two-fullwidth').isotope({
            itemSelector: '.portfolio-masonry-two-item',
            masonry: {
              columnWidth: 250,
              gutter: 10
            }
        });
        
        var $portfolio = $('.portfolio').isotope({
            itemSelector: '.portfolio-item',
            masonry: {
              rowHeight: 350
            }
        });
        
        var $blogMasonry6col = $('.blog-masonry-6col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-lg-2',
              gutter: 0
            }
        });
        
        var $blogMasonry4Col = $('.blog-masonry-4col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-md-3',
              gutter: 0
            }
        });
        
        var $blogMasonry3Col = $('.blog-masonry-3col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-md-4',
              gutter: 0
            }
        });
        
        var $blogMasonry2Col = $('.blog-masonry-2col').isotope({
            itemSelector: '.blog-masonry-item',
            masonry: {
              columnWidth: '.col-md-6',
              gutter: 0
            }
        });
        
        $('ul.filters li a').on('click', function() {
            var filterValue = $( this ).attr('data-filter');
            $portfolioMasonryOne.isotope({ filter: filterValue });
            $portfolioMasonryOneFullwidth.isotope({ filter: filterValue });
            $portfolioMasonryTwo.isotope({ filter: filterValue });
            $portfolioMasonryTwoFullwidth.isotope({ filter: filterValue });
            $portfolio.isotope({ filter: filterValue });
        });       
        

        $('ul.filters li a').on('click', function(){
            $('ul.filters li a').removeClass('active');
            $(this).addClass('active');
        });

    });


 	$('.owl-carousel').owlCarousel({
	    items:1,
      animateOut: 'fadeOut',
	    loop:true,
      lazyLoad:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1,
	            dots:false
	        },
	        600:{
	            items:1,
	            dots:false
	        },
	        1000:{
	            items:1,
	            dots:true
	        }
	    }
	});

$(document).ready(function(){

    $("#back-top").hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

});

function XHRrequest(n) {
  var url = '';
  var $title = $('<h2 />');
  var $body = $('<div />');
  var $reveal = $('#ajaxReveal');
  var $revealContent = $('#ajaxRevealContent');
  
  switch(n){
    case 1:
      url = 'http://alexbondariev.pro/bodya/2';
      break;
    case 2:
      url = 'http://alexbondariev.pro/bodya/3';
      break;
    case 3:
      url = 'http://alexbondariev.pro/bodya/4';
      break;
    default:
      return;
  }

  $.ajax({
    url: url,
    dataType: "json"
  }).done(function(response){
    $title.text( response.title);    
    $body.text(response.body);
    $revealContent.empty();
    $revealContent.append($title).append($body);
    $reveal.foundation('open');  
  });
  
  
}

function XHRrequest1(n) {
  var url = '';
  var $title = $('<h2 />');
  var $body = $('<div />');
  var $reveal = $('#ajaxReveal1');
  var $revealContent1 = $('#ajaxRevealContent1');
  
  switch(n){
    case 1:
      url = 'http://alexbondariev.pro/bodya/2';
      break;
    case 2:
      url = 'http://alexbondariev.pro/bodya/3';
      break;
    case 3:
      url = 'http://alexbondariev.pro/bodya/4';
      break;
    default:
      return;
  }

  $.ajax({
    url: url,
    dataType: "json"
  }).done(function(response){
    $title.text( response.title);    
    $body.text(response.body);
    $revealContent1.empty();
    $revealContent1.append($title).append($body);
    $reveal.foundation('open');  
  });
  
  
}

function XHRrequest2(n) {
  var url = '';
  var $title = $('<h2 />');
  var $body = $('<div />');
  var $reveal = $('#ajaxReveal2');
  var $revealContent2 = $('#ajaxRevealContent2');
  
  switch(n){
    case 1:
      url = 'http://alexbondariev.pro/bodya/2';
      break;
    case 2:
      url = 'http://alexbondariev.pro/bodya/3';
      break;
    case 3:
      url = 'http://alexbondariev.pro/bodya/4';
      break;
    default:
      return;
  }

  $.ajax({
    url: url,
    dataType: "json"
  }).done(function(response){
    $title.text( response.title);    
    $body.text(response.body);
    $revealContent2.empty();
    $revealContent2.append($title).append($body);
    $reveal.foundation('open');  
  });
  
  
}

