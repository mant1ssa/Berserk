;(function(){
    const body = document.querySelector("body");

    var closestAttr = function(item, attr){
        var node = item;
        while(node){
            var attrValue = node.getAttribute(attr);
            if(attrValue){
                return attrValue;
            }

            node = node.parentElement;
        }
        return null;
    };

    var scroll = function(target){
        // console.log(target);
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop;

        window.scrollTo(0, targetOffsetTop);
    }

    body.addEventListener("click", function(e){
        var target = e.target;
        var scrollToItemClass = closestAttr(target, 'data-scroll-to');

        console.log(target);

        if(scrollToItemClass === null){
            return;
        }
        e.preventDefault();

        var scrollToItem = document.querySelector('.'+scrollToItemClass);

        if(scrollToItem){
            scroll(scrollToItem);
        }
    })
})();