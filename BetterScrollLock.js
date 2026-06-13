(function () {
  if (window.__BETTER_SCROLL_LOCK__) return;
  window.__BETTER_SCROLL_LOCK__ = true;

  function betterScrollLock() {
    const homebutton = document.querySelector(`a[href='/app']`)

    if(document.getElementById('revolt-scroll-lock-overlay')&&homebutton){
        homebutton.removeAttribute('href')
    }else if(!document.getElementById('revolt-scroll-lock-overlay')){
        const homebutton2 = document.querySelector(`a[aria-label*='pending']`)
        if(!homebutton2) return;
        homebutton2.setAttribute('href','/app')
    }
  }

  const observer = new MutationObserver(() => {
    betterScrollLock();
  });

  function init() {
    betterScrollLock();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();