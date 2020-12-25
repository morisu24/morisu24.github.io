jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	init();
    $(".biography").on("click", function() {
        $('.biography').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.biography-details').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".bio-close-trigger").on("click", function() {
        $('.biography-details').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.biography').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".skill").on("click", function() {
        $('.skill').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.skill-details').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".ski-close-trigger").on("click", function() {
        $('.skill-details').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.skill').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".publications").on("click", function() {
        $('.publications').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.publications-details').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".pub-close-trigger").on("click", function() {
        $('.publications-details').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.publications').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".hobbies").on("click", function() {
        $('.hobbies').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.hobbies-details').animate({ height: 'show' }, 'slow');   // 右に表示
    });
    $(".hob-close-trigger").on("click", function() {
        $('.hobbies-details').animate({ height: 'hide' }, 'slow');   // 左に非表示
        $('.hobbies').animate({ height: 'show' }, 'slow');   // 右に表示
    });


	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
    });
    
    $(".DOI-link").click(function(){
        if($(this).find("a").attr("target")=="_blank"){
            window.open($(this).find("a").attr("href"), '_blank');
        }else{
            window.location=$(this).find("a").attr("href");
        }
    return false;
    });

    $(".hob-link").click(function(){
        if($(this).find("a").attr("target")=="_blank"){
            window.open($(this).find("a").attr("href"), '_blank');
        }else{
            window.location=$(this).find("a").attr("href");
        }
    return false;
    });

});



! function(a) {
    "use strict";
    a(document).ready(function() {
        function b() {
            window.location = i
        }
        var e = a(".site-title"),
            f = a("body");
        setTimeout(function() {
            f.addClass("loaded")
        }, 150);
        var g = a(".project-assets").children("div");
        a.each(g, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 150 * b)
            })
        });
        var h = a(".projects-feed .project");
        a.each(h, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 50 * b)
            })
        });
        var i;
        a("a").on("click", function(a) {
            return "" == this.href || null == this.href ? void a.preventDefault() : void(-1 == this.href.indexOf("#") && -1 == this.href.indexOf("mailto:") && -1 == this.href.indexOf("javascript:") && "_blank" != this.target && (a.preventDefault(), i = this.href, f.removeClass("loaded"), setTimeout(b, 250)))
        })
    })
}(window.jQuery);


function init() {
    $(".biography-details").hide();
    $(".skill-details").hide();
    $(".publications-details").hide();
    $(".hobbies-details").hide();

}

