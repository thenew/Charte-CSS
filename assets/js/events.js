window.addEvent('domready', function(){

    // Highlight
    $$('.highlight').each(function(el){
        hljs.highlightBlock(el)
    });

    // notes
    $$('.n').addEvents({
        mouseenter: function(e){
            // console.log(e.target.getProperty('data-target'));
            var def = e.target.getProperty('data-target');
            $$('#'+def).toggleClass('active');
        },
        mouseleave: function(e){
            var def = e.target.getProperty('data-target');
            $$('#'+def).toggleClass('active');
        }
    });

    // Smooth scroll
    var scrollAnchor = new Fx.Scroll(window);
    $$('.scrollAnchor').addEvent('click', function(e){
        e.preventDefault();
        var href = e.target.getProperty('href');
        var anchor = href.split('#')[1];
        scrollAnchor.toElement($(anchor));
    });

    var pos = $$('.exemple-order').getPosition();
    console.log(pos);

    window.addEvent('scroll', function(e){
        // console.log(window.getScroll().y);
        // var useFixedSidebar = window.getScroll() >= 400;
        // alert(useFixedSidebar);
        // $('.my-sidebar-items').toggleClass('fixed', useFixedSidebar);
    });

});
