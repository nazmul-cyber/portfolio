/** Speed helpers: async fonts, LinkedIn click-to-load */
(function () {
  'use strict';

  /* Async Google Fonts — system font shows instantly */
  function loadFonts() {
    var id = 'nazmul-fonts';
    if (document.getElementById(id)) return;
    var link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@600;700&family=Noto+Sans+Bengali:wght@400;600;700&display=swap';
    document.head.appendChild(link);
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadFonts, { timeout: 2000 });
  } else {
    setTimeout(loadFonts, 120);
  }

  /* LinkedIn embed — load only on click */
  function initLinkedInFacade() {
    document.querySelectorAll('[data-linkedin-src]').forEach(function (wrap) {
      if (wrap.dataset.linkedinReady) return;
      wrap.dataset.linkedinReady = '1';
      var src = wrap.dataset.linkedinSrc;
      if (!src) return;
      wrap.innerHTML =
        '<button type="button" class="linkedin-load-btn" aria-label="Load LinkedIn post">' +
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' +
        ' Load LinkedIn Post</button>';
      wrap.querySelector('.linkedin-load-btn').addEventListener('click', function () {
        var height = wrap.dataset.linkedinHeight || '700';
        wrap.innerHTML =
          '<iframe src="' + src + '" title="LinkedIn post" height="' + height + '" width="504" ' +
          'frameborder="0" allowfullscreen loading="lazy"></iframe>';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLinkedInFacade);
  } else {
    initLinkedInFacade();
  }
})();