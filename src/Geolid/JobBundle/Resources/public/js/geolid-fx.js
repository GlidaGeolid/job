$(document).ready(function($){

var controller;
if (false && Modernizr.touch) {
    // Touch screens.
    // Try to use IScroll.
} else {
    // init the controller
    controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
}

/* Site nav shortening. */
$('#site-nav').exists(function(){

    var offset = 0;
    if ($('#international-alert').is(':visible') ) {
        offset = $('#international-alert').outerHeight();
    }

    var timeline = new TimelineMax().add([
        TweenMax.to('#site-nav .name img', 0.3, {height: '32px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav', 0.3, {lineHeight: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav li:not(.has-form) a:not(.button)', 0.3, {lineHeight: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav .has-form', 0.3, {height: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav .has-form', 0.3, {lineHeight: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav', 0.3, {height: '45px', ease: Linear.easeNone})
    ]);
    new ScrollScene({
        duration: 200,
        offset: offset,
        triggerElement: 'body'
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onLeave')
        //.addIndicators({zindex: 100})
    ;

});

//$('.section-fx').each(function(){
$('.notch-wrapper').each(function(){

    var timeline = new TimelineMax().add([
//        TweenMax.to(this, 0.6, {paddingTop: '0', ease: Linear.easeNone})
        TweenMax.to(this, 0.6, {marginTop: '-200', ease: Linear.easeNone})
    ]);
    new ScrollScene({
        duration: 0,
        offset: -100,
        reverse: false,
        triggerElement: this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
    ;

});

$('.testimonial:nth-of-type(2n+1)').each(function(){

    $(this).css('position', 'relative');
    $(this).css('right', '100%');

    var timeline = new TimelineMax().add([
        TweenMax.to(this, 0.5, {right: '0', ease: Circ.easeOut}),
        //TweenMax.from(this, 0.5, {opacity: '0', ease: Circ.easeOut})
    ]);
    new ScrollScene({
        duration: 0,
        offset: 300,
        reverse: false,
        triggerElement: this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onEnter')
        //.addIndicators({zindex: 100})
    ;

});

$('.testimonial:nth-of-type(2n+0)').each(function(){

    $(this).css('position', 'relative');
    $(this).css('left', '100%');

    var timeline = new TimelineMax().add([
        TweenMax.to(this, 1, {left: '0', ease: Circ.easeOut}),
        //TweenMax.from(this, 1, {opacity: '0', ease: Circ.easeOut})
    ]);
    new ScrollScene({
        duration: 0,
        offset: 220,
        reverse: false,
        triggerElement: this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onEnter')
        //.addIndicators({zindex: 100})
    ;

});

$('#customers').exists(function(){

    var tweens = [];
    $('#customers-cards li').css('position','relative').each(function() {
        tweens.push(TweenMax.from($(this), 0.6, {
            delay: Math.random() * .2,
            left: (Math.random() * 2 - 1) * 200,
            top: (Math.random() * 2 - 1) * 200,
            opacity: 0,
            ease: Linear.easeNone
        }));
    });
    var timeline = new TimelineMax().add(tweens);
    new ScrollScene({
        duration: 0,
        offset: -180,
        reverse: false,
        triggerElement: '#customers-cards'
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
    ;

});

$('#home-overview .fx-item').each(function(){
    var $this = $(this);

    /**
     * The #home-overview must not shrink when .fx-item divs
     * are set to position relavite.
     */
    var parentMinHeight = $this.parent().css('minHeight');
    var height = $this.css('height');
    if (parentMinHeight < height) {
        $this.parent().css('minHeight', height);
    }
    $this.css('position', 'relative');

    var timeline = new TimelineMax().add([
        TweenMax.from($this, 1, {bottom: -200, ease: Circ.easeOut}),
        TweenMax.from($this, 1, {opacity: 0, ease: Circ.easeOut})
    ]);

    new ScrollScene({
        duration: 0,
        offset: -300,
        reverse: false,
        triggerElement: $this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
        /**
         * Sometimes the anti-shrink code above doesn't do the job,
         * so after the effect ends, reset the position to static.
         */
        .on('start', function (event) {
            function end() {
                $this.css('position', 'static');
            };
            setTimeout(function(){end();}, 1000);
        });
    ;

});

$('#home-backstage .fx-item').each(function(){
    var $this = $(this);

    $this.css('position', 'relative');

    var timeline = new TimelineMax().add([
        TweenMax.from($this, 1, {opacity: 0, ease: Linear.easeNone})
    ]);

    new ScrollScene({
        duration: 0,
        offset: -150,
        reverse: false,
        triggerElement: $this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
    ;

});

$('#backstage-diaporama').exists(function(){

    var path = '/bundles/geolidjob/img/backstage/';

    var images = [];
    for (i=1; i<=9; i++){
        images[i-1] = 'galerie-'+i+'.jpg';
    }

    var diaporama = $('#backstage-diaporama');
    var nitems = 8; // Number of items to display.
    var displayed = []; // Index of images displayed for each item.
    var stack = []; // Index of images that are not displayed.

    diaporama.empty();

    for (var i = 0; i < images.length && i < nitems; i++) {
        var image = $('<img/>');
        image.attr('src', path + images[i]);

        var div = $('<div/>');
        div.css('position', 'relative');
        div.append(image);

        var li = $('<li/>');
        li.append(div);

        if (i >= 4) {
            li.addClass('hide-for-small');
        }

        diaporama.append(li);
        displayed[i] = i;
    }

    for (var i = nitems; i < images.length; i++) {
        stack.push(i);
    }

    function change () {
        var itemNumber = Math.floor(Math.random() * nitems);
        var currentItem = diaporama.find('li:nth-child(' + (itemNumber + 1) + ')');

        /* There are less photos on small devices. */
        if (!currentItem.is(':visible')) {
            change();
            return;
        }

        var currentDiv = currentItem.find('div');

        var image = $('<img/>');
        var imageIndex = stack.shift();
        image.attr('src', path + images[imageIndex]);

        var newDiv = $('<div/>');
        newDiv.css('position', 'relative');
        newDiv.css('zIndex', '9');
        newDiv.append(image);

        stack.push(displayed[itemNumber]);
        displayed[itemNumber] = imageIndex;

        var timeline = new TimelineMax();
        var randx = Math.random() < 0.5 ? -1 : 1;
        var randy = Math.random() < 0.5 ? -1 : 1;

        timeline
            .add(
                TweenMax.to(currentDiv, 2, {
                    ease: Circ.easeIn,
                    onComplete: function() {
                        currentDiv.remove();
                        currentItem.append(newDiv);
                    },
                    opacity: 0
                })
            )
            .add(
                TweenMax.from(newDiv, 0.6, {
                    ease: Circ.easeOut,
                    left: randx * 300,
                    onComplete: function() {
                        newDiv.css('zIndex', '1');
                    },
                    opacity: 0,
                    top: randy * 300
                })
            );
    }

    setInterval(change, 4000);

});

}); //$(document).ready
