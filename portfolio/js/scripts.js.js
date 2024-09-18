
$(document).ready(function() {
    // Initialize controller
    var controller = new ScrollMagic.Controller();

    // Loop through each panel and create a scene
    $('.panel').each(function() {
        var panelId = $(this).attr('id');
        
        // Create a scene
        new ScrollMagic.Scene({
            triggerElement: "#" + panelId,
            triggerHook: 0.5,
            duration: "100%"
        })
        .setPin("#" + panelId)
        .setTween(gsap.fromTo("#" + panelId, {opacity: 0}, {opacity: 1, duration: 1}))
        .addTo(controller);
    });
});