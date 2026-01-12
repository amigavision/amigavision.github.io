!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).littlefoot = {});
}(this, function (t) {
  "use strict";

  function e(t, e) {
    t.classList.add(e);
  }

  function n(t, e) {
    t.classList.remove(e);
  }

  function o(t, e) {
    return t.classList.contains(e);
  }

  const i = "littlefoot__tooltip";

  function s(t, e) {
    var n, o;
    return (
      (null !==
        (o =
          null === (n = t.ownerDocument) || void 0 === n
            ? void 0
            : n.defaultView) && void 0 !== o
        ? o
        : window
      ).getComputedStyle(t).getPropertyValue(e) || ""
    );
  }

  function r(t, e) {
    const n = Number.parseFloat(s(t, e));
    return Number.isNaN(n) ? 0 : n;
  }

  function l(t) {
    const e = r(t, "margin-left"),
      n = t.offsetWidth - e;
    return (t.getBoundingClientRect().left + n / 2) / window.innerWidth;
  }

  function c(t, o, i) {
    const [s, c] = function (t, e) {
      const n = r(e, "margin-top"),
        o = 2 * n + e.offsetHeight,
        i = t.getBoundingClientRect().top + t.offsetHeight / 2,
        s = window.innerHeight - i;
      return s >= o || s >= i
        ? ["below", s - n - 15]
        : ["above", i - n - 15];
    }(o, t);

    if (i !== s) {
      n(t, "is-" + i);
      e(t, "is-" + s);
      const r = 100 * l(o) + "%",
        c = "above" === s ? "100%" : "0";
      t.style.transformOrigin = r + " " + c;
    }
    return [s, c];
  }

  const a = "is-active",
    u = "is-changing",
    d = "is-scrollable";

  function f({ id: t, button: f, content: m, host: p, popover: v, wrapper: h }) {
    let b = 0,
      g = "above";
    const y = () => document.body.contains(v);

    return {
      id: t,

      activate: t => {
        f.setAttribute("aria-expanded", "true");
        e(f, u);
        e(f, a);
        f.insertAdjacentElement("afterend", v);
        v.style.maxWidth = document.body.clientWidth + "px";
        b = (function (t) {
          const e = s(t, "max-height");
          if ("" === e || "none" === e) return Number.POSITIVE_INFINITY;
          const n = Number.parseFloat(e);
          return Number.isNaN(n)
            ? Number.POSITIVE_INFINITY
            : Math.round(n);
        })(m);
        null == t || t(v, f);
      },

      dismiss: t => {
        f.setAttribute("aria-expanded", "false");
        e(f, u);
        n(f, a);
        n(v, a);
        null == t || t(v, f);
      },

      isActive: () => o(f, a),
      isReady: () => !o(f, u),

      ready: () => {
        e(v, a);
        n(f, u);
      },

      remove: () => {
        v.remove();
        n(f, u);
      },

      reposition: () => {
        if (y()) {
          const [t, o] = c(v, f, g);
          g = t;
          m.style.maxHeight = Math.min(b, o) + "px";
          v.offsetHeight < m.scrollHeight
            ? (e(v, d), m.setAttribute("tabindex", "0"))
            : (n(v, d), m.removeAttribute("tabindex"));
        }
      },

      resize: () => {
        if (!y()) return;
        v.style.left =
          (function (t, e) {
            const n = t.offsetWidth;
            return (
              -l(e) * n +
              r(e, "margin-left") +
              e.offsetWidth / 2
            );
          })(m, f) + "px";

        h.style.maxWidth = m.offsetWidth + "px";

        (function (t, e) {
          const n = t.querySelector("." + i);
          n && (n.style.left = 100 * l(e) + "%");
        })(v, f);
      },

      destroy: () => p.remove()
    };
  }

  function m(t, e = 0) {
    let n, o = 0;
    return function (...i) {
      const s = Date.now(),
        r = Math.max(0, o + e - s);
      if (0 === r) {
        o = s;
        return void t.apply(this, i);
      }
      void 0 !== n && window.clearTimeout(n);
      n = window.setTimeout(() => {
        o = Date.now();
        n = void 0;
        t.apply(this, i);
      }, r);
    };
  }

  const p = "is-fully-scrolled",
    v = t => o => {
      const i = o.currentTarget,
        s = -o.deltaY;
      s > 0 && n(t, p);
      i &&
        s <= 0 &&
        s < i.clientHeight + i.scrollTop - i.scrollHeight &&
        e(t, p);
    };

  const h = "littlefoot__content",
    b = "littlefoot__wrapper",
    g = "littlefoot--print",
    y = (...t) => t.forEach(t => e(t, g));

  function w(t, e) {
    return Array.from(t.querySelectorAll(e));
  }

  function E(t, e) {
    return t.querySelector("." + e) || t.firstElementChild || t;
  }

  function T(t) {
    const e = document.createElement("div");
    e.innerHTML = t;
    const n = e.firstElementChild;
    n.remove();
    return n;
  }

  function x(t) {
    return void 0 !== t;
  }

  function A(t) {
    const e = t.parentElement,
      n = w(e, ":scope > :not(." + g + ")"),
      o = n.filter(t => "HR" === t.tagName);
    n.length === o.length && (y(...o.concat(e)), A(e));
  }

  function D(t, e) {
    const n = t.parentElement;
    t.remove();
    n &&
      n !== e &&
      !n.innerHTML.replace(/(\[\]|&nbsp;|\s)/g, "") &&
      D(n, e);
  }

  function S([t, e, n], o) {
    const i = T(n.outerHTML);

    w(i, '[href$="#' + t + '"]').forEach(t => {
      D(t, i);
    });

    const s = i.innerHTML.trim();

    return [
      e,
      n,
      {
        id: String(o + 1),
        number: o + 1,
        reference:
          "lf-" +
          String(t).replace(/[^A-Za-z0-9_-]/g, "-") +
          "-" +
          String(o + 1),
        content: s.startsWith("<") ? s : "<p>" + s + "</p>"
      }
    ];
  }

  // (rest of file unchanged)
  t.default = j;
  t.littlefoot = j;
  Object.defineProperty(t, "__esModule", { value: !0 });
});
