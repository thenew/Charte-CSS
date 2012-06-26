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

    $$('.exemple').each(function(item, index){
        var boxY = item.getElement('.main-col').getPosition().y;
        var boxH = item.getElement('.main-col > *').getHeight();
        var stickyX = item.getElement('aside').getPosition().x;
        var stickyH = item.getElement('aside > *').getHeight();

        window.addEvent('scroll', function(e){
            // Si le content est assez grand et le sticky assez petit
            if(boxH > 250 && stickyH < boxH/2) {
                // si on scroll sur le content
                if ((window.getScroll().y >= boxY) && (window.getScroll().y <= (boxY+boxH-stickyH)) ) {
                    item.getElement('aside').setStyles({
                        position: 'fixed',
                        top: 10,
                        left: stickyX
                    });
                } else {
                    item.getElement('aside').setStyles({
                        position: 'relative',
                        top: 'inherit',
                        left: 'inherit'
                    });
                }
            }
        });

    });

});
