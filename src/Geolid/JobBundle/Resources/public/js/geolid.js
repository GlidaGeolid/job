$(document).ready(function(){

    /**
     * Replaces the foundation sticky because of a time concurrency issue with scrollmagic.
     */
     $('#site-nav-container').hcSticky({
        //topSpacing: 0,
         innerTop: 0,
         wrapperClassName: 'hide-for-print hide-for-small'
     });

    /**
     * Home slider.
     */

    $('#home-slider').unslider({
        speed: 800,               //  The speed to animate each slide (in milliseconds)
        delay: 6000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true               //  Support responsive design. May break non-responsive designs
    });

    /**
     * Offer nav woman.
     */
     $('#offer-nav').hcSticky({
        innerTop: -100,
        wrapperClassName: 'hide-for-print hide-for-small hide-for-medium'
     });

    $("#cookie-notice").hide();
    if (document.cookie.indexOf("cookie-accept") <= 0) {
        $("#cookie-notice").show();
    }
    $('#cn-accept-cookie').click(function (e) {
        e.preventDefault();
        $('#cookie-notice').remove();
        var date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = "cookie-accept=true" + expires + "; path=/";
    });

    /**
     * Custom form validation patterns.
     *
     * Used with the apply form.
     */
    $(document).foundation({
        abide : {
            patterns: {
                name: /^[^0-9"'`~,.;:\\[\]|{}()<>=_*/+-]+$/,
                phone: /^[0-9 ()+-]+$/
            },
            validators: {
                requiredBySource: function(el, required, parent) {
                    var $el = $(el);
                    if ($el.attr('data-source') == $('[name=\'job_apply[source]\']:checked').val()) {
                        return $el.val() != '';
                    }
                    return true;
                }
            }
        }
    });

    /** Iphone bug :
     * http://foundation.zurb.com/forum/posts/1651-cant-get-off-canvas-to-toggle-on-mobile
     */
    $('a.left-off-canvas-toggle').on('click',function(){
    });

    /**
     * International alert.
     */
    if (window.localStorage.getItem('international-alert') != 'dismiss') {
        $('#international-alert').css('display', 'block');
    }
    $('#international-alert-close').click(function(){
        window.localStorage.setItem('international-alert', 'dismiss');
        $('#international-alert').css('display', 'none');
    });

    /**
     * Wheter an element exists.
     *
     * Used with scrollmagic effects.
     */
    $.fn.exists = function(callback) {
        var args = [].slice.call(arguments, 1);
        if (this.length) {
            callback.call(this, args);
        }
        return this;
    };

    /**
     * Apply pages.
     */

    /**
     * In firefox, if you click on a source that is not the default one then reload the page,
     * the input visually remains checked but the form value is the html value.
     */
    if ($('#job_apply_source_0').is(':checked')) {
        $('#job_apply_offer').closest('.row').show('slow');
        $('#job_apply_job').closest('.row').hide('slow');
    }
    else if ($('#job_apply_source_1').is(':checked')) {
        $('#job_apply_offer').closest('.row').hide('slow');
        $('#job_apply_job').closest('.row').show('slow');
    }

    /**
     * Hide the offer or job fields depending on application type.
     */
    $('#job_apply_source_0').on('click', function(){
        $('#job_apply_offer').closest('.row').show('slow');
        $('#job_apply_job').closest('.row').hide('slow');
    });
    $('#job_apply_source_1').on('click', function(){
        $('#job_apply_offer').closest('.row').hide('slow');
        $('#job_apply_job').closest('.row').show('slow');
    });

    /**
     * Autosend form.
     */
    $('select.autosubmit').change(function() {
        $(this).closest('form').submit();
    });
});
