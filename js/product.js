;(function(){
    var closestItemByClass = function(item, className) {
        var node = item;
    
        while(node) {
          if (node.classList.contains(className)) {
            return node;
          }
    
          node = node.parentElement;
        }
    
        return null;
      };

    const ch = document.querySelector('.catalog');
    console.log('chaffafa');
    if (ch === null) {
        return;
      }

      var catalogNav = ch.querySelector('.hero__footer');

      catalogNav.addEventListener('click', function(e) {
        var target = e.target;
        var item = closestItemByClass(target, 'hero__size');
    
        if (item === null || item.classList.contains('is-active')) {
          return;
        }
    
        e.preventDefault();
        var previousBtnActive = catalogNav.querySelector('.hero__size.is-active');
    
        previousBtnActive.classList.remove('is-active');
        item.classList.add('is-active');
      });
    // ch.addEventListener('click', function(e){
    //     var target = e.target;
    //     console.log('target');

    //     if (target === null || target.classList.contains('is-active')) {
    //         return;
    //     }
    //     e.preventDefault();

    //     const prevBtnActive = document.querySelector('hero__size.is-active');
    //     prevBtnActive.classList.remove('is-active');

    //     ch.classList.add('is-active');
    // })
})();