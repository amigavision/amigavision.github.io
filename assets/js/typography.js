(function () {
  function applyTypography() {
    /* insert hair spaces before and after em dashes */
    [].forEach.call(document.querySelectorAll('header + section > p, header + section li, .listing li a'), function (p) {
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
    if (window.innerWidth > 720) selector += ', h1, h2';
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTypography);
  } else {
    applyTypography();
  }
})();
