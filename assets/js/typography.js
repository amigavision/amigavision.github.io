(function () {
  function applyTypography() {
    /* insert hair spaces before and after em dashes */
    [].forEach.call(document.querySelectorAll('.content p, .content li, .post-content p, .post-content li, .listing li a'), function (p) {
      [].forEach.call(p.childNodes, function (c) {
        if (c instanceof Text) {
          var value = c.nodeValue.replace(/ [\u2014] /g, '\u200A\u2014\u200A');
          if (value !== c.nodeValue) {
            c.nodeValue = value;
          }
        }
      });
    });

    /* Avoid widows for key elements */
    var selector = '.description, .listing li a, p, em, strong, li';
    if (window.innerWidth > 720) selector += ', h1, h2, .news-card h3, .blog-post h3 a';
    [].forEach.call(document.querySelectorAll(selector), function (h) {
      var last = h.lastChild, matches;
      if (last instanceof Text &&
          !last.nodeValue.match(/^\S+\s\S+(?:\s\S+)?$/) &&
          (matches = last.nodeValue.match(/\S+ \S+$/))) {
        var match = matches[0];
        if (!match) return;
        last.nodeValue = last.nodeValue.slice(0, -match.length) + match.replace(' ', '\u00A0');
      }
    });
  }

  applyTypography();
})();
