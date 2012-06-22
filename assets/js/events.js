

window.addEvent('domready', function(){

    // Highlight
    hljs.initHighlightingOnLoad();

    // Smooth scroll
    var scrollAnchor = new Fx.Scroll(window);

    $$('.scrollAnchor').addEvent('click', function(e){
        e.preventDefault();

        var href = e.target.getProperty('href');
        var anchor = href.split('#')[1];

        scrollAnchor.toElement($(anchor));

    });


});
