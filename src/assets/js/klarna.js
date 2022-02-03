!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/"),
    t((t.s = 132));
})([
  function(e, t) {
    var n = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = n);
  },
  function(e, t, n) {
    e.exports = { default: n(162), __esModule: !0 };
  },
  function(e, t, n) {
    var r = n(4),
      o = n(0),
      i = n(16),
      a = n(20),
      u = n(21),
      s = function(e, t, n) {
        var c,
          f,
          l,
          d = e & s.F,
          p = e & s.G,
          h = e & s.S,
          v = e & s.P,
          y = e & s.B,
          g = e & s.W,
          m = p ? o : o[t] || (o[t] = {}),
          _ = m.prototype,
          w = p ? r : h ? r[t] : (r[t] || {}).prototype;
        p && (n = t);
        for (c in n)
          ((f = !d && w && void 0 !== w[c]) && u(m, c)) ||
            ((l = f ? w[c] : n[c]),
            (m[c] =
              p && "function" != typeof w[c]
                ? n[c]
                : y && f
                ? i(l, r)
                : g && w[c] == l
                ? (function(e) {
                    var t = function(t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(l)
                : v && "function" == typeof l
                ? i(Function.call, l)
                : l),
            v &&
              (((m.virtual || (m.virtual = {}))[c] = l),
              e & s.R && _ && !_[c] && a(_, c, l)));
      };
    (s.F = 1),
      (s.G = 2),
      (s.S = 4),
      (s.P = 8),
      (s.B = 16),
      (s.W = 32),
      (s.U = 64),
      (s.R = 128),
      (e.exports = s);
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(45),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default =
      o.default ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
  },
  function(e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function(e, t, n) {
    var r = n(74)("wks"),
      o = n(53),
      i = n(4).Symbol,
      a = "function" == typeof i;
    (e.exports = function(e) {
      return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e));
    }).store = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(14),
      o = n.n(r);
    t.a = {
      __data: {},
      clear: function() {
        var e = this;
        o()(this.__data).forEach(function(t) {
          delete e.__data[t];
        });
      },
      set: function(e, t) {
        this.__data[e] = t;
      },
      get: function(e) {
        return this.__data[e];
      },
      delete: function(e) {
        delete this.__data[e];
      },
    };
  },
  function(e, t, n) {
    "use strict";
    var r,
      o = n(49),
      i = n.n(o),
      a = n(141),
      u = n.n(a),
      s = n(50),
      c = function(e) {
        return e.replace(/_/g, "-").toLowerCase();
      },
      f = function(e) {
        return -1 !== e.indexOf("payment-review")
          ? "Klarna Payment Review"
          : "Klarna";
      },
      l = ["ES", "IT", "GB", "IE", "PT"];
    t.a = {
      trackingPath: "api/_t/v1/credit",
      acquiringPurchaseFlow: { libraryPath: "/apf/latest/library/main.js" },
      klarnaFontsCssUrl: "https://x.klarnacdn.net/ui/fonts/v1.3/fonts.css",
      oneOfferingVersion: "v1",
      app: {
        version: u.a.trim(),
        staticPaymentMethod: function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "v1",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "index";
          return {
            id: function(e) {
              return "klarna-" + c(e) + "-static";
            },
            staticCdnBaseUrl:
              "https://x.klarnacdn.net/kp/one-offering/" + e + "/static",
            appsCdnBaseUrl:
              "https://x.klarnacdn.net/kp/one-offering/" + e + "/apps",
            entry: t + ".html",
            defaultEntry: "index.html",
            style: {
              width: "100%",
              maxWidth: "600px",
              minWidth: "280px",
              display: "inline-block",
              textAlign: "left",
            },
            supportedLocales: ["en", "en-gb", "en-us"],
            supportedIntents: ["buy"],
            supportedPaymentMethodCategories: ["pay_over_time", "pay_later"],
            timeout: 5e3,
          };
        },
        popup: {
          id: function(e) {
            return "klarna-" + c(e) + "-popup";
          },
          entry: "popup.html",
          width: 500,
          height: 700,
          title: "Klarna Payments",
          timeout: 1e4,
        },
        main: {
          id: function(e) {
            return "klarna-" + c(e) + "-main";
          },
          title: f,
          entry: "main.html",
          style: {
            height: "230px",
            width: "100%",
            maxWidth: "600px",
            minWidth: "280px",
          },
          loaderStyle:
            ((r = {
              base: {
                alignItems: "center",
                display: "inline-flex",
                flexDirection: "column",
                flexShrink: "0",
                height: "230px",
                maxWidth: "600px",
                minWidth: "280px",
                width: "100%",
                zIndex: "10",
              },
            }),
            i()(r, s.c.DOTS, { justifyContent: "center" }),
            i()(r, s.c.SKELETON, { justifyContent: "flex-start" }),
            r),
          timeout: 3e4,
          sandbox:
            "allow-forms allow-modals allow-popups allow-same-origin allow-scripts",
          countriesWithAllowedCamera: l,
          countriesWithLoader: [
            "SE",
            "NO",
            "FI",
            "DK",
            "DE",
            "AT",
            "NL",
            "CH",
            "US",
            "GB",
          ],
          removalPollInterval: 100,
        },
        fullscreen: {
          id: function(e) {
            return "klarna-" + c(e) + "-fullscreen";
          },
          title: f,
          entry: "fullscreen.html",
          style: {
            border: "0",
            display: "block",
            height: "0",
            left: "0",
            maxHeight: "100%",
            maxWidth: "100%",
            position: "absolute",
            opacity: "0",
            top: "0",
            width: "100%",
            webkitTransition: "opacity 0.3s",
            transition: "opacity 0.3s",
            zIndex: "2147483647",
          },
          timeout: 3e4,
          creationDelay: 500,
          sandbox:
            "allow-forms allow-modals allow-popups allow-same-origin allow-scripts",
          countriesWithAllowedCamera: l,
        },
        deviceRecognition: {
          id: "klarna-payments-device-recognition",
          path: "klarna-static-assets/device-recognition/5646259",
          style: {
            border: "0",
            display: "block",
            height: "0",
            left: "0",
            position: "absolute",
            opacity: "0",
            top: "0",
            width: "0",
          },
          supportedCountries: [
            "US",
            "GB",
            "CH",
            "DE",
            "AT",
            "NL",
            "BE",
            "AU",
            "DK",
            "ES",
            "IT",
            "CA",
            "FR",
            "NZ",
            "PL",
            "IE",
            "PT",
          ],
          type1: { supportedCountries: ["US", "GB"] },
          type2: { supportedCountries: ["CH"] },
          type3: {
            supportedCountries: [
              "US",
              "GB",
              "DE",
              "AT",
              "NL",
              "BE",
              "AU",
              "ES",
              "IT",
              "CA",
              "FR",
              "NZ",
              "PL",
              "IE",
              "PT",
            ],
            orgId: { US: "87rxrdob", EU: "87rxrdob" },
          },
          timeout: 3e4,
          sandbox: "allow-same-origin allow-scripts",
        },
      },
      supportedPaymentMethodCategories: [
        "card",
        "direct_bank_transfer",
        "direct_debit",
        "pay_in_parts",
        "pay_later",
        "pay_now",
        "pay_over_time",
      ],
      paymentMethods: [
        "base_account",
        "deferred_interest",
        "direct_bank_transfer",
        "direct_debit",
        "fixed_amount",
        "invoice",
        "b2b_invoice",
        "pix",
      ],
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function(e, t, n) {
    e.exports = !n(23)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          },
        }).a
      );
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return i;
    });
    var r = n(198),
      o = n(206),
      i = o;
    t.a = r.a;
  },
  function(e, t, n) {
    e.exports = { default: n(135), __esModule: !0 };
  },
  function(e, t, n) {
    var r = n(13),
      o = n(94),
      i = n(66),
      a = Object.defineProperty;
    t.f = n(9)
      ? Object.defineProperty
      : function(e, t, n) {
          if ((r(e), (t = i(t, !0)), r(n), o))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function(e, t, n) {
    var r = n(8);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function(e, t, n) {
    e.exports = { default: n(157), __esModule: !0 };
  },
  function(e, t, n) {
    "use strict";
    var r = n(3),
      o = n.n(r),
      i = n(211),
      a = n(225),
      u = n(226),
      s = n(241),
      c = n(242),
      f = null,
      l = function(e) {
        f = e;
      },
      d = function() {
        return null !== f ? f : Object(c.a)();
      },
      p = Object(u.a)({ adapter: i.a, featuresStore: a.a });
    t.a = o()({}, p, {
      init: i.a.init,
      isFeatureSupported: a.a.has,
      getFeatures: a.a.get,
      setIsSupportedOverride: l,
      isLoaded: s.a,
      isSupported: d,
    });
  },
  function(e, t, n) {
    var r = n(37);
    e.exports = function(e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function(n, r, o) {
            return e.call(t, n, r, o);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t, n) {
    e.exports = n(160);
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = function(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new o.default(function(e, n) {
          function r(i, a) {
            try {
              var u = t[i](a),
                s = u.value;
            } catch (e) {
              return void n(e);
            }
            if (!u.done)
              return o.default.resolve(s).then(
                function(e) {
                  r("next", e);
                },
                function(e) {
                  r("throw", e);
                }
              );
            e(s);
          }
          return r("next");
        });
      };
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return l;
    }),
      n.d(t, "e", function() {
        return d;
      }),
      n.d(t, "f", function() {
        return p;
      }),
      n.d(t, "j", function() {
        return h;
      }),
      n.d(t, "d", function() {
        return v;
      }),
      n.d(t, "h", function() {
        return y;
      }),
      n.d(t, "k", function() {
        return g;
      }),
      n.d(t, "a", function() {
        return m;
      }),
      n.d(t, "b", function() {
        return _;
      }),
      n.d(t, "c", function() {
        return w;
      }),
      n.d(t, "i", function() {
        return b;
      });
    var r = n(113),
      o = n.n(r),
      i = n(58),
      a = n.n(i),
      u = n(114),
      s = n.n(u),
      c = n(118),
      f = n.n(c),
      l = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "The container selector is invalid. Please, check that the used ID or CSS class name is correct and that it targets an existing DOM element.";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (n.message = e), (n.name = "InvalidContainerSelectorError"), n;
        }
        return f()(t, e), t;
      })(Error),
      d = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "The client token is invalid. Make sure it has not been tampered with in any way.";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (n.message = e), (n.name = "InvalidClientTokenError"), n;
        }
        return f()(t, e), t;
      })(Error),
      p = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "The client token signature is invalid. Make sure it has not been tampered with in any way.";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (
            (n.message = e), (n.name = "InvalidClientTokenSignatureError"), n
          );
        }
        return f()(t, e), t;
      })(Error),
      h = (function(e) {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "This payment method category is not supported: " + e;
          a()(this, t);
          var r = s()(this, (t.__proto__ || o()(t)).call(this, n));
          return (
            (r.message = n),
            (r.name = "PaymentMethodCategoryNotSupportedError"),
            r
          );
        }
        return f()(t, e), t;
      })(Error),
      v = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "An instance ID must be provided when the `payment_method_categories` option is used.";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (n.message = e), (n.name = "InstanceIDNotProvidedError"), n;
        }
        return f()(t, e), t;
      })(Error),
      y = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "The instance ID must only contain alphabets, numbers, underscores (_) and hyphens (-).";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (n.message = e), (n.name = "InvalidInstanceIDError"), n;
        }
        return f()(t, e), t;
      })(Error),
      g = (function(e) {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "The provided preferred payment method is not supported.";
          a()(this, t);
          var r = s()(this, (t.__proto__ || o()(t)).call(this, n));
          return (
            (r.message = n),
            (r.name = "PreferredPaymentMethodNotSupportedError"),
            r
          );
        }
        return f()(t, e), t;
      })(Error),
      m = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "The application has not yet been initialized. Call `init` first to initialize it.";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (
            (n.message = e), (n.name = "ApplicationNotInitializedError"), n
          );
        }
        return f()(t, e), t;
      })(Error),
      _ = (function(e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "The application has not yet been loaded. Call `load` first to load it.";
          a()(this, t);
          var n = s()(this, (t.__proto__ || o()(t)).call(this, e));
          return (n.message = e), (n.name = "ApplicationNotLoadedError"), n;
        }
        return f()(t, e), t;
      })(Error),
      w = (function(e) {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "This event name is not supported: " + e;
          a()(this, t);
          var r = s()(this, (t.__proto__ || o()(t)).call(this, n));
          return (r.message = n), (r.name = "EventNotSupportedError"), r;
        }
        return f()(t, e), t;
      })(Error),
      b = (function(e) {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "This operation is not supported: " + e;
          a()(this, t);
          var r = s()(this, (t.__proto__ || o()(t)).call(this, n));
          return (r.message = n), (r.name = "OperationNotSupportedError"), r;
        }
        return f()(t, e), t;
      })(Error);
  },
  function(e, t, n) {
    var r = n(12),
      o = n(38);
    e.exports = n(9)
      ? function(e, t, n) {
          return r.f(e, t, o(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        };
  },
  function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t);
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var o = n(173),
      i = r(o),
      a = n(67),
      u = r(a);
    t.default = (function() {
      function e(e, t) {
        var n = [],
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (
            var a, s = (0, u.default)(e);
            !(r = (a = s.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          (o = !0), (i = e);
        } finally {
          try {
            !r && s.return && s.return();
          } finally {
            if (o) throw i;
          }
        }
        return n;
      }
      return function(t, n) {
        if (Array.isArray(t)) return t;
        if ((0, i.default)(Object(t))) return e(t, n);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })();
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t, n) {
    n(144);
    for (
      var r = n(4),
        o = n(20),
        i = n(30),
        a = n(5)("toStringTag"),
        u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
        s = 0;
      s < u.length;
      s++
    ) {
      var c = u[s],
        f = r[c],
        l = f && f.prototype;
      l && !l[a] && o(l, a, c), (i[c] = i.Array);
    }
  },
  function(e, t, n) {
    var r = n(68),
      o = n(69);
    e.exports = function(e) {
      return r(o(e));
    };
  },
  function(e, t, n) {
    var r = n(69);
    e.exports = function(e) {
      return Object(r(e));
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(150)(!0);
    n(70)(
      String,
      "String",
      function(e) {
        (this._t = String(e)), (this._i = 0);
      },
      function() {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function(e, t, n) {
    "use strict";
    function r() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t
        .filter(function(e) {
          return !!e;
        })
        .map(i)
        .join("/");
    }
    function o() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return u()(e)
        .map(function(t) {
          return t + "=" + encodeURIComponent(e[t]);
        })
        .join("&");
    }
    function i() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return "/" === (e || "").substr(-1) ? e.slice(0, -1) : e;
    }
    (t.b = r), (t.a = o);
    var a = n(14),
      u = n.n(a);
  },
  function(e, t, n) {
    "use strict";
    function r() {
      return Date.now() + ++o;
    }
    t.a = r;
    var o = 0;
  },
  function(e, t) {
    e.exports = {};
  },
  function(e, t, n) {
    var r = n(96),
      o = n(75);
    e.exports =
      Object.keys ||
      function(e) {
        return r(e, o);
      };
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(153),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return (0, o.default)(e);
    };
  },
  function(e, t, n) {
    var r = n(16),
      o = n(99),
      i = n(100),
      a = n(13),
      u = n(52),
      s = n(76),
      c = {},
      f = {},
      t = (e.exports = function(e, t, n, l, d) {
        var p,
          h,
          v,
          y,
          g = d
            ? function() {
                return e;
              }
            : s(e),
          m = r(n, l, t ? 2 : 1),
          _ = 0;
        if ("function" != typeof g) throw TypeError(e + " is not iterable!");
        if (i(g)) {
          for (p = u(e.length); p > _; _++)
            if ((y = t ? m(a((h = e[_]))[0], h[1]) : m(e[_])) === c || y === f)
              return y;
        } else
          for (v = g.call(e); !(h = v.next()).done; )
            if ((y = o(v, m, h.value, t)) === c || y === f) return y;
      });
    (t.BREAK = c), (t.RETURN = f);
  },
  function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        try {
          window.localStorage.setItem(e, t);
        } catch (e) {}
      },
      o = function(e) {
        try {
          return window.localStorage.getItem(e);
        } catch (e) {}
        return null;
      },
      i = function(e) {
        try {
          window.localStorage.removeItem(e);
        } catch (e) {}
      };
    t.a = { set: r, get: o, remove: i };
  },
  function(e, t, n) {
    var r = n(8);
    e.exports = function(e, t) {
      if (!r(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      return e.parentNode !== t.container;
    }
    function o(e, t) {
      return !new RegExp("^" + t.baseURL).test(e.src);
    }
    function i() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window;
      return new c.a(function(n, i) {
        var u = e.beforeLoad,
          s = void 0 === u ? function() {} : u,
          c = e.timeout,
          f = void 0 === c ? 2e4 : c,
          g = {},
          m = a(e.id);
        if (
          m &&
          (function(t) {
            return e.reCreateIframe || r(t, e) || o(t, e);
          })(m)
        )
          m.parentNode.removeChild(m), m.removeOnLoadListener();
        else if (m) return s({ iframe: m, removeLoader: _(m, g, e) }), n(m);
        if (
          (y[e.id] && (t.clearTimeout(y[e.id]), delete y[e.id]),
          e.showLoader && "none" !== e.style.display)
        )
          try {
            var E = Object(d.a)({ loaderType: e.loaderType }),
              A = E.el,
              S = E.styles;
            (g.el = document.createElement("div")),
              g.el.appendChild(A),
              g.el.setAttribute("id", e.id + "-loader"),
              (g.tagStyles = S),
              w(g, e);
          } catch (e) {
            g.el = null;
          }
        var O = document.createElement("iframe");
        (O.__ID__ = Object(p.a)()),
          O.setAttribute("id", e.id),
          O.setAttribute("name", e.id),
          O.setAttribute("title", e.title),
          O.setAttribute("scrolling", "no"),
          O.setAttribute("frameborder", "0"),
          e.shouldAllowCamera && O.setAttribute("allow", "camera"),
          (O.frameBorder = "0"),
          (O.src = e.url),
          e.sandbox && O.setAttribute("sandbox", e.sandbox),
          e.onCreate && e.onCreate(O),
          s({ iframe: O, removeLoader: _(O, g, e) }),
          l()(O.style, e.style);
        var k = t.setTimeout(function() {
          i(O);
        }, f);
        y[e.id] = k;
        var P = function() {
          t.clearTimeout(k),
            delete y[e.id],
            e.onLoad && e.onLoad(O),
            e.loaderType === v.c.DOTS && _(O, g, e)(),
            n(O);
        };
        (O.removeOnLoadListener = function() {
          Object(h.b)(O, "load", P);
        }),
          Object(h.a)(O, "load", P),
          b(O, g, e),
          e.container.appendChild(O);
      });
    }
    function a(e) {
      return document.getElementById(e);
    }
    function u(e) {
      try {
        return e.__ID__;
      } catch (e) {
        return;
      }
    }
    (t.b = i), (t.a = a), (t.c = u);
    var s = n(1),
      c = n.n(s),
      f = n(45),
      l = n.n(f),
      d = n(255),
      p = n(29),
      h = n(256),
      v = n(50),
      y = {},
      g = function(e) {
        return !(!e || !e.el);
      },
      m = function(e) {
        var t = e && e.querySelector(".skeleton");
        t && t.classList && t.classList.add("is-hidden");
      },
      _ = function(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function() {
          var r = 0;
          g(t) && n.loaderType === v.c.SKELETON && ((r = v.b), m(t.el)),
            setTimeout(function() {
              g(t) && t.el.parentNode && t.el.parentNode.removeChild(t.el),
                g(t) && (e.style.display = "inline");
            }, r);
        };
      },
      w = function(e, t) {
        var n = {};
        null != t.loaderStyle &&
          (n = l()({}, t.loaderStyle.base, t.loaderStyle[t.loaderType])),
          l()(e.el.style, t.style, n);
      },
      b = function(e, t, n) {
        g(t) &&
          (t.tagStyles && n.container.appendChild(t.tagStyles),
          n.container.appendChild(t.el),
          (e.style.display = "none"));
      };
  },
  function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
      return n.call(e).slice(8, -1);
    };
  },
  function(e, t) {
    e.exports = !0;
  },
  function(e, t, n) {
    var r = n(12).f,
      o = n(21),
      i = n(5)("toStringTag");
    e.exports = function(e, t, n) {
      e &&
        !o((e = n ? e : e.prototype), i) &&
        r(e, i, { configurable: !0, value: t });
    };
  },
  function(e, t) {},
  function(e, t, n) {
    var r = n(53)("meta"),
      o = n(8),
      i = n(21),
      a = n(12).f,
      u = 0,
      s =
        Object.isExtensible ||
        function() {
          return !0;
        },
      c = !n(23)(function() {
        return s(Object.preventExtensions({}));
      }),
      f = function(e) {
        a(e, r, { value: { i: "O" + ++u, w: {} } });
      },
      l = function(e, t) {
        if (!o(e))
          return "symbol" == typeof e
            ? e
            : ("string" == typeof e ? "S" : "P") + e;
        if (!i(e, r)) {
          if (!s(e)) return "F";
          if (!t) return "E";
          f(e);
        }
        return e[r].i;
      },
      d = function(e, t) {
        if (!i(e, r)) {
          if (!s(e)) return !0;
          if (!t) return !1;
          f(e);
        }
        return e[r].w;
      },
      p = function(e) {
        return c && h.NEED && s(e) && !i(e, r) && f(e), e;
      },
      h = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: l,
        getWeak: d,
        onFreeze: p,
      });
  },
  function(e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function(e, t, n) {
    e.exports = { default: n(199), __esModule: !0 };
  },
  function(e, t, n) {
    "use strict";
    var r = function() {
      return /^(dev-proxy|localhost|0\.0\.0\.0|(.+\.)?klarna\.(com|net))$/.test(
        (arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : window
        ).location.hostname
      );
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    function r() {
      if (!i.a.isSupported() || !o.a.get("nativeHookApiHandshakeResponse"))
        return null;
      var e = o.a.get("nativeHookApiHandshakeResponse"),
        t = e.deviceName,
        n = e.merchantAppName,
        r = e.merchantAppVersion,
        a = e.merchantReturnURL,
        u = e.osName,
        s = e.osVersion,
        c = e.nativeVersion,
        f = e.productOptions,
        l = void 0;
      try {
        l = f ? JSON.parse(f) : {};
      } catch (e) {
        l = {};
      }
      return {
        deviceName: t,
        merchantAppName: n,
        merchantAppVersion: r,
        merchantReturnURL: a,
        osName: u,
        osVersion: s,
        nativeVersion: c,
        productOptions: l,
      };
    }
    t.a = r;
    var o = n(6),
      i = n(15);
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = t,
        u = f[a];
      if (n && u && i(u.target) !== i(e)) {
        try {
          u.destroy();
        } catch (e) {}
        delete f[a];
      }
      return f[a] || ((u = f[a] = o(e, r)), (u.target = e)), u;
    }
    function o(e, t) {
      var n = { frame: e };
      return (
        e &&
          e.nodeType !== window.Node.ELEMENT_NODE &&
          e.window &&
          (n = { window: e }),
        new s.a({ sourceID: "library", target: n, debug: c }, u()({}, t))
      );
    }
    function i(e) {
      try {
        return e.__ID__;
      } catch (e) {}
    }
    t.a = r;
    var a = n(3),
      u = n.n(a),
      s = n(259),
      c = !1,
      f = {};
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(64),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = function(e, t, n) {
      return (
        t in e
          ? (0, o.default)(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      });
    var r = 0.8,
      o = 1e3 * r,
      i = { DOTS: "dots", SKELETON: "skeleton" };
  },
  function(e, t, n) {
    var r = n(13),
      o = n(147),
      i = n(75),
      a = n(73)("IE_PROTO"),
      u = function() {},
      s = function() {
        var e,
          t = n(65)("iframe"),
          r = i.length;
        for (
          t.style.display = "none",
            n(97).appendChild(t),
            t.src = "javascript:",
            e = t.contentWindow.document,
            e.open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            s = e.F;
          r--;

        )
          delete s.prototype[i[r]];
        return s();
      };
    e.exports =
      Object.create ||
      function(e, t) {
        var n;
        return (
          null !== e
            ? ((u.prototype = r(e)),
              (n = new u()),
              (u.prototype = null),
              (n[a] = e))
            : (n = s()),
          void 0 === t ? n : o(n, t)
        );
      };
  },
  function(e, t, n) {
    var r = n(72),
      o = Math.min;
    e.exports = function(e) {
      return e > 0 ? o(r(e), 9007199254740991) : 0;
    };
  },
  function(e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function(e, t, n) {
    var r = n(39),
      o = n(5)("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function() {
            return arguments;
          })()
        ),
      a = function(e, t) {
        try {
          return e[t];
        } catch (e) {}
      };
    e.exports = function(e) {
      var t, n, u;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" == typeof (n = a((t = Object(e)), o))
        ? n
        : i
        ? r(t)
        : "Object" == (u = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : u;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(159),
      o = n(169),
      i = n(172),
      a = n(176),
      u = n(177),
      s = n(112),
      c = n(178),
      f = Object(o.a)(r.a),
      l = Object(i.a)(f),
      d = Object(a.a)(f),
      p = Object(u.a)(f);
    t.a = {
      getNativeVersion: s.a,
      init: l,
      isSupported: c.a,
      sendSessionInitiatedEvent: d,
      sendSessionApprovedEvent: p,
    };
  },
  function(e, t) {
    e.exports = function(e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function(e, t, n) {
    var r = n(20);
    e.exports = function(e, t, n) {
      for (var o in t) n && e[o] ? (e[o] = t[o]) : r(e, o, t[o]);
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      });
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var o = n(182),
      i = r(o),
      a = n(184),
      u = r(a),
      s =
        "function" == typeof u.default && "symbol" == typeof i.default
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof u.default &&
                e.constructor === u.default &&
                e !== u.default.prototype
                ? "symbol"
                : typeof e;
            };
    t.default =
      "function" == typeof u.default && "symbol" === s(i.default)
        ? function(e) {
            return void 0 === e ? "undefined" : s(e);
          }
        : function(e) {
            return e &&
              "function" == typeof u.default &&
              e.constructor === u.default &&
              e !== u.default.prototype
              ? "symbol"
              : void 0 === e
              ? "undefined"
              : s(e);
          };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "c", function() {
        return i;
      }),
      n.d(t, "e", function() {
        return a;
      }),
      n.d(t, "d", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "g", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return f;
      });
    var r = function(e, t) {
        if (!window.navigator || !window.navigator.userAgent) return !1;
        var n = window.navigator.userAgent;
        return t
          ? -1 !== n.toLowerCase().indexOf(e.toLowerCase())
          : -1 !== n.indexOf(e);
      },
      o = function() {
        return (
          window.navigator &&
          window.navigator.platform &&
          (/iPad|iPhone/.test(window.navigator.platform) ||
            (/MacIntel/.test(window.navigator.platform) &&
              window.navigator.maxTouchPoints > 0))
        );
      },
      i = function() {
        return r("iPhone");
      },
      a = function() {
        return (
          window.navigator.vendor &&
          window.navigator.vendor.indexOf("Apple") > -1 &&
          !r("CriOS") &&
          !r("FxiOS")
        );
      },
      u = function() {
        return r("Instagram") && r("iPhone");
      },
      s = function() {
        return r("Trident/7.0;", !0) && (r("; rv:11") || r("; rv 11"));
      },
      c = function() {
        if (!window.navigator || !window.navigator.userAgent) return !1;
        var e = window.navigator.standalone,
          t = window.navigator.userAgent.toLowerCase(),
          n = /safari/.test(t),
          r = /iphone|ipod|ipad/.test(t);
        return (
          (window.webkit && window.webkit.messageHandlers) ||
          (r && !e && !n) ||
          /webview/g.test(t) ||
          /android.*(wv|.0.0.0)/g.test(t) ||
          /linux; u; android/g.test(t)
        );
      },
      f = function() {
        return (
          "attachShadow" in
          (arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window
          ).HTMLElement.prototype
        );
      };
  },
  function(e, t, n) {
    "use strict";
    function r() {
      try {
        var e = Object(o.a)("ku1-vid"),
          t = Object(o.a)("ku1-sid"),
          n = Object(o.a)("klarna-shopping-browser-session-id"),
          r = {};
        if (!e && !t && !n) return;
        return (
          e && (r.ku1_vid = e),
          t && (r.ku1_sid = t),
          n && (r.shopping_browser_session_id = n),
          r
        );
      } catch (e) {}
    }
    t.a = r;
    var o = n(121);
  },
  function(e, t, n) {
    "use strict";
    var r = n(6),
      o = function(e) {
        var t = e.id,
          n = e.instanceID,
          o = e.paymentMethodCategory,
          i = n || o,
          a = r.a.get("instancesWithApplicationResetDone");
        if (i) {
          if (a && -1 === a.indexOf(i))
            return (
              r.a.set("instancesWithApplicationResetDone", a.concat(i)), !0
            );
        } else if (!1 === r.a.get(t + ":applicationResetDone"))
          return r.a.set(t + ":applicationResetDone", !0), !0;
        return !1;
      };
    t.a = o;
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(22),
      a = n.n(i),
      u = n(11),
      s = n.n(u),
      c = n(3),
      f = n.n(c),
      l = n(18),
      d = n.n(l),
      p = n(15),
      h = n(7),
      v = n(36),
      y = n(126),
      g = n(10),
      m = n(28),
      _ = n(6),
      w = n(89),
      b = n(128),
      E = n(263),
      A = n(271),
      S = n(273),
      O = (n(274), n(60)),
      k = (n(277), n(50));
    t.a = (function() {
      function e(e) {
        return t.apply(this, arguments);
      }
      var t = d()(
        o.a.mark(function e(t) {
          var n,
            r,
            i,
            u,
            c,
            l,
            d,
            T,
            I,
            C,
            R,
            L,
            x,
            N,
            M,
            j,
            D,
            U,
            H,
            F,
            B,
            K,
            W,
            V,
            Y,
            J,
            G = t.id,
            z = t.iframeName,
            q = t.clientToken,
            Z = void 0 === q ? {} : q,
            X = t.rawClientToken,
            Q = t.container,
            $ = t.tracker,
            ee = t.options,
            te = void 0 === ee ? {} : ee,
            ne = t.appConfig,
            re = void 0 === ne ? {} : ne,
            oe = t.renderFullscreen,
            ie = void 0 === oe || oe;
          return o.a.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = Z.sessionID),
                      (r = Z.sessionType),
                      (i = Z.scheme),
                      (u = Z.purchaseCountry),
                      (c = Z.merchantName),
                      (l = Z.environment),
                      (d = Z.experiments),
                      (T = void 0 === d ? {} : d),
                      (e.next = 11);
                    break;
                  case 5:
                    e.next = 11;
                    break;
                  case 7:
                    (e.prev = 7),
                      (e.t0 = e.catch(2)),
                      $.event(g.b.INVALID_CLIENT_TOKEN_SIGNATURE, {
                        error: e.t0,
                        rawClientToken: X,
                      });
                  case 11:
                    return (
                      (I = f()({}, h.a.app, re)),
                      (C = te.payment_method_category),
                      (R = te.payment_method_categories),
                      (L = te.instance_id),
                      (x = z || L || C || r || G),
                      (N = Object(y.a)(G, x)),
                      (M = !!_.a.get(G + ":popupExperimentEnabled")),
                      (j = function(e, t) {
                        $.event(
                          e,
                          f()({}, t, {
                            app_version: I.version,
                            payment_method_category: C,
                            payment_method_categories: R,
                            name: x,
                          })
                        );
                      }),
                      (D = function(e, t) {
                        return function() {
                          var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          j(
                            e,
                            f()({}, t, { iframe_unique_id: Object(v.c)(n) })
                          );
                        };
                      }),
                      (U = p.a.isSupported()),
                      (H = p.a.getFeatures()),
                      (F = Object(m.a)({
                        data: s()({
                          mainIframeID: I.main.id(x),
                          popupWindowEnabled: M,
                          nativeHookApiSupported: U,
                          nativeHookApiFeatures: H,
                          paymentMethodCategory: C,
                          instanceID: L,
                          scheme: i,
                          sessionType: r,
                          sessionID: n,
                          merchantName: c,
                          environment: l,
                        }),
                      })),
                      (B = Object(m.a)({
                        data: s()({
                          onShowExternalDocumentRegistered: !!te.on_show_external_document,
                          fullscreenIframeID: I.fullscreen.id(x),
                          popupWindowEnabled: M,
                          nativeHookApiSupported: U,
                          nativeHookApiFeatures: H,
                          paymentMethodCategory: C,
                          purchaseCountry: u,
                          instanceID: L,
                          scheme: i,
                          sessionType: r,
                          sessionID: n,
                          merchantName: c,
                          environment: l,
                        }),
                      })),
                      T["kp-client-dr-on-load"] &&
                        "control" !== T["kp-client-dr-on-load"] &&
                        Object(w.a)({
                          id: G,
                          appConfig: re,
                          clientToken: Z,
                          iframeName: z,
                          options: te,
                          tracker: $,
                        }),
                      (K =
                        Object(O.c)() &&
                        T["kp-client-fullscreen-layout-style-fix"]),
                      (W =
                        Object(O.e)() &&
                        T["kp-client-fullscreen-layout-style-fix"]),
                      (V = K || W || Object(O.d)()),
                      (Y = function(e) {
                        return Object(b.a)(
                          f()(
                            {
                              name: x,
                              container: document.body,
                              scrollBlockStyleContainer: Q,
                              baseURL: _.a.get(G + ":versionedBaseURL"),
                              params: F,
                              onCreate: D(g.b.FULLSCREEN_IFRAME_CREATED, {
                                params: F,
                              }),
                              onLoad: D(g.b.FULLSCREEN_IFRAME_LOADED),
                              shouldSandbox: !!T.sandbox_iframes,
                              shouldAllowCamera:
                                -1 !==
                                (
                                  I.fullscreen.countriesWithAllowedCamera || []
                                ).indexOf(u),
                              shouldUseLayoutStyleFix: V,
                            },
                            I.fullscreen
                          ),
                          N,
                          j
                        ).then(
                          function(t) {
                            return e.send(P("ready")), t;
                          },
                          function() {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            throw (D(g.b.FULLSCREEN_IFRAME_TIMED_OUT)(t),
                            e.send(P("error")),
                            t);
                          }
                        );
                      }),
                      (J = function(e, t) {
                        return function() {
                          var r = Object(m.a)({
                              sid: n,
                              miid: I.main.id(x),
                              id: x,
                            }),
                            o = void 0;
                          return Object(A.a)(
                            f()(
                              {
                                name: x,
                                baseURL: _.a.get(G + ":versionedBaseURL"),
                                params: r,
                                onOpened: function(n, r) {
                                  (o = n),
                                    j(g.b.POPUP_WINDOW_OPENED),
                                    e.show(),
                                    t.send({ action: "showPopupBackdrop" });
                                  var i = !1;
                                  t.addMethods({
                                    focusPopupWindow: function(e) {
                                      n.focus(),
                                        i ||
                                          setTimeout(function() {
                                            r.call("checkFocus", function(t) {
                                              (i = !0), e(t);
                                            });
                                          }, 0);
                                    },
                                    closePopupWindow: function() {
                                      n.close();
                                    },
                                  });
                                },
                                onClosed: function() {
                                  j(g.b.POPUP_WINDOW_CLOSED),
                                    e.hide(),
                                    t.send({ action: "hidePopupBackdrop" });
                                },
                                onError: function(e) {
                                  j(g.b.POPUP_WINDOW_ERROR, { error: e });
                                },
                              },
                              I.popup
                            ),
                            j
                          )
                            .then(function(e) {
                              return j(g.b.POPUP_WINDOW_READY), e;
                            })
                            .catch(function(e) {
                              o && o.close();
                              var t = e instanceof Error ? e.message : e;
                              throw (j(g.b.POPUP_WINDOW_ERROR, { error: t }),
                              e);
                            });
                        };
                      }),
                      e.abrupt(
                        "return",
                        Object(E.a)(
                          f()(
                            {
                              name: x,
                              container: Q,
                              showLoader:
                                -1 !== I.main.countriesWithLoader.indexOf(u),
                              loaderType:
                                T["kp-client-loader_type"] || k.c.DOTS,
                              baseURL: _.a.get(G + ":versionedBaseURL"),
                              params: B,
                              onCreate: D(g.b.MAIN_IFRAME_CREATED, {
                                params: B,
                              }),
                              onLoad: D(g.b.MAIN_IFRAME_LOADED),
                              onVisible: D(g.b.MAIN_IFRAME_VISIBLE),
                              onShowExternalDocument:
                                te.on_show_external_document,
                              onRedirect: te.on_redirect,
                              shouldSandbox: !!T.sandbox_iframes,
                              shouldAllowCamera:
                                -1 !==
                                (
                                  I.main.countriesWithAllowedCamera || []
                                ).indexOf(u),
                            },
                            I.main
                          ),
                          N,
                          function(e) {
                            return function() {
                              D.apply(void 0, arguments)(e);
                            };
                          }
                        ).then(
                          function(e) {
                            var t = a()(e, 2),
                              n = t[0],
                              r = t[1],
                              o = n.id;
                            return (
                              setTimeout(function() {
                                ie &&
                                  Y(r)
                                    .then(function(e) {
                                      var t = a()(e, 3),
                                        i = t[0],
                                        u = t[1],
                                        s = t[2];
                                      M &&
                                        _.a.set(G + ":renderPopupFn", J(s, u));
                                      var c = h.a.app.main.removalPollInterval;
                                      Object(S.a)(o, c)
                                        .then(function() {
                                          D(g.b.MAIN_IFRAME_REMOVED)(n),
                                            r.destroy();
                                          try {
                                            i &&
                                              i.parentNode &&
                                              (i.parentNode.removeChild(i),
                                              D(
                                                g.b
                                                  .FULLSCREEN_IFRAME_AUTO_REMOVED
                                              )(i)),
                                              u.destroy();
                                          } catch (e) {
                                            D(
                                              g.b
                                                .FULLSCREEN_IFRAME_AUTO_REMOVAL_FAILED
                                            )(i);
                                          }
                                        })
                                        .catch(function(e) {
                                          D(
                                            g.b.MAIN_IFRAME_REMOVAL_POLL_FAILED
                                          )(n);
                                        });
                                    })
                                    .catch(function(e) {
                                      r.send(P("error"));
                                    });
                              }, h.a.app.fullscreen.creationDelay),
                              r
                            );
                          },
                          function() {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            throw (D(g.b.MAIN_IFRAME_TIMED_OUT)(e), e);
                          }
                        )
                      )
                    );
                  case 31:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[2, 7]]
          );
        })
      );
      return e;
    })();
    var P = function(e) {
      return { action: "setFullscreenStatus", status: e };
    };
  },
  function(e, t, n) {
    e.exports = { default: n(139), __esModule: !0 };
  },
  function(e, t, n) {
    var r = n(8),
      o = n(4).document,
      i = r(o) && r(o.createElement);
    e.exports = function(e) {
      return i ? o.createElement(e) : {};
    };
  },
  function(e, t, n) {
    var r = n(8);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, o;
      if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
        return o;
      if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
      if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t, n) {
    e.exports = { default: n(143), __esModule: !0 };
  },
  function(e, t, n) {
    var r = n(39);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function(e, t) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(40),
      o = n(2),
      i = n(71),
      a = n(20),
      u = n(30),
      s = n(146),
      c = n(41),
      f = n(98),
      l = n(5)("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = function() {
        return this;
      };
    e.exports = function(e, t, n, h, v, y, g) {
      s(n, t, h);
      var m,
        _,
        w,
        b = function(e) {
          if (!d && e in O) return O[e];
          switch (e) {
            case "keys":
            case "values":
              return function() {
                return new n(this, e);
              };
          }
          return function() {
            return new n(this, e);
          };
        },
        E = t + " Iterator",
        A = "values" == v,
        S = !1,
        O = e.prototype,
        k = O[l] || O["@@iterator"] || (v && O[v]),
        P = k || b(v),
        T = v ? (A ? b("entries") : P) : void 0,
        I = "Array" == t ? O.entries || k : k;
      if (
        (I &&
          (w = f(I.call(new e()))) !== Object.prototype &&
          w.next &&
          (c(w, E, !0), r || "function" == typeof w[l] || a(w, l, p)),
        A &&
          k &&
          "values" !== k.name &&
          ((S = !0),
          (P = function() {
            return k.call(this);
          })),
        (r && !g) || (!d && !S && O[l]) || a(O, l, P),
        (u[t] = P),
        (u[E] = p),
        v)
      )
        if (
          ((m = {
            values: A ? P : b("values"),
            keys: y ? P : b("keys"),
            entries: T,
          }),
          g)
        )
          for (_ in m) _ in O || i(O, _, m[_]);
        else o(o.P + o.F * (d || S), t, m);
      return m;
    };
  },
  function(e, t, n) {
    e.exports = n(20);
  },
  function(e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function(e, t, n) {
    var r = n(74)("keys"),
      o = n(53);
    e.exports = function(e) {
      return r[e] || (r[e] = o(e));
    };
  },
  function(e, t, n) {
    var r = n(0),
      o = n(4),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n(40) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(e, t, n) {
    var r = n(54),
      o = n(5)("iterator"),
      i = n(30);
    e.exports = n(0).getIteratorMethod = function(e) {
      if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t, n;
      (this.promise = new e(function(e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = o(t)),
        (this.reject = o(n));
    }
    var o = n(37);
    e.exports.f = function(e) {
      return new r(e);
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var r = {
      SESSION_INITIATED: "KP_SESSION_INITIATED",
      SESSION_APPROVED: "KP_SESSION_APPROVED",
      AUTH_REQUEST: "KP_AUTH_REQUEST",
      DEAL_REQUEST: "KP_DEAL_REQUEST",
    };
  },
  function(e, t, n) {
    "use strict";
    var r = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.region,
        n = void 0 === t ? "" : t,
        r = e.sessionID;
      return "krn:kp-" + n.toLowerCase() + ":session:" + r;
    };
    t.a = r;
  },
  function(e, t, n) {
    t.f = n(5);
  },
  function(e, t, n) {
    var r = n(4),
      o = n(0),
      i = n(40),
      a = n(80),
      u = n(12).f;
    e.exports = function(e) {
      var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || u(t, e, { value: a.f(e) });
    };
  },
  function(e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      o = n(2),
      i = n(43),
      a = n(23),
      u = n(20),
      s = n(57),
      c = n(33),
      f = n(56),
      l = n(8),
      d = n(41),
      p = n(12).f,
      h = n(84)(0),
      v = n(9);
    e.exports = function(e, t, n, y, g, m) {
      var _ = r[e],
        w = _,
        b = g ? "set" : "add",
        E = w && w.prototype,
        A = {};
      return (
        v &&
        "function" == typeof w &&
        (m ||
          (E.forEach &&
            !a(function() {
              new w().entries().next();
            })))
          ? ((w = t(function(t, n) {
              f(t, w, e, "_c"),
                (t._c = new _()),
                void 0 != n && c(n, g, t[b], t);
            })),
            h(
              "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                ","
              ),
              function(e) {
                var t = "add" == e || "set" == e;
                e in E &&
                  (!m || "clear" != e) &&
                  u(w.prototype, e, function(n, r) {
                    if ((f(this, w, e), !t && m && !l(n)))
                      return "get" == e && void 0;
                    var o = this._c[e](0 === n ? 0 : n, r);
                    return t ? this : o;
                  });
              }
            ),
            m ||
              p(w.prototype, "size", {
                get: function() {
                  return this._c.size;
                },
              }))
          : ((w = y.getConstructor(t, e, g, b)),
            s(w.prototype, n),
            (i.NEED = !0)),
        d(w, e),
        (A[e] = w),
        o(o.G + o.W + o.F, A),
        m || y.setStrong(w, e, g),
        w
      );
    };
  },
  function(e, t, n) {
    var r = n(16),
      o = n(68),
      i = n(26),
      a = n(52),
      u = n(215);
    e.exports = function(e, t) {
      var n = 1 == e,
        s = 2 == e,
        c = 3 == e,
        f = 4 == e,
        l = 6 == e,
        d = 5 == e || l,
        p = t || u;
      return function(t, u, h) {
        for (
          var v,
            y,
            g = i(t),
            m = o(g),
            _ = r(u, h, 3),
            w = a(m.length),
            b = 0,
            E = n ? p(t, w) : s ? p(t, 0) : void 0;
          w > b;
          b++
        )
          if ((d || b in m) && ((v = m[b]), (y = _(v, b, g)), e))
            if (n) E[b] = y;
            else if (y)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return b;
                case 2:
                  E.push(v);
              }
            else if (f) return !1;
        return l ? -1 : c || f ? f : E;
      };
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(2);
    e.exports = function(e) {
      r(r.S, e, {
        of: function() {
          for (var e = arguments.length, t = new Array(e); e--; )
            t[e] = arguments[e];
          return new this(t);
        },
      });
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      o = n(37),
      i = n(16),
      a = n(33);
    e.exports = function(e) {
      r(r.S, e, {
        from: function(e) {
          var t,
            n,
            r,
            u,
            s = arguments[1];
          return (
            o(this),
            (t = void 0 !== s),
            t && o(s),
            void 0 == e
              ? new this()
              : ((n = []),
                t
                  ? ((r = 0),
                    (u = i(s, arguments[2], 2)),
                    a(e, !1, function(e) {
                      n.push(u(e, r++));
                    }))
                  : a(e, !1, n.push, n),
                new this(n))
          );
        },
      });
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t = (e.scheme, e.sessionType),
        n = e.options,
        r = e.onError,
        a = void 0 === r ? function() {} : r,
        u = o.a.supportedPaymentMethodCategories,
        s = o.a.paymentMethods,
        c = n.payment_method_category,
        f = n.payment_method_categories,
        l = n.preferred_payment_method,
        d = n.instance_id;
      if ("payments" === t) {
        if (c && -1 === u.indexOf(c))
          throw (a("PaymentMethodCategoryNotSupportedError"), new i.j(c));
        if (
          (f &&
            f.forEach(function(e) {
              if (-1 === u.indexOf(e))
                throw (a("PaymentMethodCategoryNotSupportedError"), new i.j(e));
            }),
          f && !d)
        )
          throw (a("InstanceIDNotProvidedError"), new i.d());
        if (f && !/^[\w-]+$/.test(d))
          throw (a("InvalidInstanceIDError"), new i.h());
      }
      if (l && -1 === s.indexOf(l))
        throw (a("PreferredPaymentMethodNotSupportedError"), new i.k(s));
    }
    t.a = r;
    var o = n(7),
      i = n(19);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      s.on(e, t);
    }
    function o(e, t) {
      s.removeListener(e, t);
    }
    function i(e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      s.emit.apply(s, [e].concat(n));
    }
    (t.c = r), (t.b = o), (t.a = i);
    var a = n(257),
      u = n.n(a),
      s = new u.a();
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(11),
      a = n.n(i),
      u = n(3),
      s = n.n(u),
      c = n(18),
      f = n.n(c),
      l = n(28),
      d = n(10),
      p = n(36),
      h = n(7),
      v = n(6);
    t.a = (function() {
      function e(e) {
        return t.apply(this, arguments);
      }
      var t = f()(
        o.a.mark(function e(t) {
          var n,
            r,
            i,
            u,
            c,
            f,
            w,
            b,
            E,
            A,
            S,
            O,
            k,
            P,
            T,
            I,
            C,
            R,
            L,
            x = t.id,
            N = t.appConfig,
            M = void 0 === N ? {} : N,
            j = t.clientToken,
            D = void 0 === j ? {} : j,
            U = t.iframeName,
            H = t.options,
            F = void 0 === H ? {} : H,
            B = t.tracker;
          return o.a.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      (n = s()({}, h.a.app, M)),
                      (r = n.deviceRecognition),
                      (i = n.version),
                      -1 !== r.supportedCountries.indexOf(D.purchaseCountry) &&
                        "production" === D.environment)
                    ) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    return (
                      (u = !!v.a.get(x + ":reCreateDeviceRecognitionIframe")),
                      (c = D.baseURL),
                      (f = D.sessionID),
                      (w = D.sessionType),
                      (b = D.purchaseCountry),
                      (E = D.experiments),
                      (A = void 0 === E ? {} : E),
                      (S = c + "/v1/sessions/" + f),
                      (O = !!A.sandbox_iframes),
                      (k = F.payment_method_category),
                      (P = F.payment_method_categories),
                      (T = F.instance_id),
                      (I = U || T || k || w || x),
                      (C = function(e) {
                        return function() {
                          var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          B.event(e, {
                            iframe_unique_id: Object(p.c)(t),
                            app_version: i,
                            payment_method_category: k,
                            payment_method_categories: P,
                            name: I,
                          });
                        };
                      }),
                      (R = Object(l.b)(c, r.path, "index.html")),
                      (L = encodeURIComponent(
                        a()({
                          INTEGRATOR: "klarna-payments",
                          DEVICE_RECOGNITION_URL: Object(l.b)(
                            S,
                            "device_recognition"
                          ),
                          AUTH_HEADER: " ",
                          TYPE1: { enabled: y(r, b) },
                          TYPE2: s()(
                            {},
                            g(r, b) ? { enabled: !0, ref: f } : { enabled: !1 }
                          ),
                          TYPE3: s()(
                            {},
                            m(r, b)
                              ? { enabled: !0, orgId: _(r, b), ref: f }
                              : { enabled: !1 }
                          ),
                        })
                      )),
                      (e.next = 17),
                      Object(p.b)({
                        container: document.body,
                        url: R + "#" + L,
                        baseURL: c,
                        id: r.id,
                        onCreate: C(d.b.DEVICE_RECOGNITION_IFRAME_CREATED),
                        onLoad: C(d.b.DEVICE_RECOGNITION_IFRAME_LOADED),
                        style: r.style,
                        timeout: r.timeout,
                        reCreateIframe: u,
                        sandbox: O ? r.sandbox : null,
                      }).catch(C(d.b.DEVICE_RECOGNITION_IFRAME_TIMED_OUT))
                    );
                  case 17:
                    v.a.set(x + ":reCreateDeviceRecognitionIframe", !1),
                      (e.next = 22);
                    break;
                  case 20:
                    (e.prev = 20), (e.t0 = e.catch(0));
                  case 22:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[0, 20]]
          );
        })
      );
      return e;
    })();
    var y = function(e, t) {
        return e.type1.supportedCountries.indexOf(t) > -1;
      },
      g = function(e, t) {
        return e.type2.supportedCountries.indexOf(t) > -1;
      },
      m = function(e, t) {
        return e.type3.supportedCountries.indexOf(t) > -1;
      },
      _ = function(e, t) {
        var n = e.type3;
        return n.orgId[t] || n.orgId.EU;
      };
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(64),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            (0, o.default)(e, r.key, r);
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      });
    var r;
    !(function(e) {
      (e.FROM_PGW = "3rd_party_pm_event_from_pgw"),
        (e.TO_PGW = "3rd_party_pm_event_to_pgw"),
        (e.AP_TOKEN_COLLECTED = "AP_TOKEN_COLLECTED"),
        (e.AP_TOKEN_COLLECTION_FAILED = "AP_TOKEN_COLLECTION_FAILED"),
        (e.AP_PAYMENT_REQUEST = "AP_PAYMENT_REQUEST"),
        (e.AP_ERROR = "AP_ERROR");
    })(r || (r = {}));
    var o;
    !(function(e) {
      (e.AP_INITIAL_SYNC = "ap_initial_sync_pay"),
        (e.AP_INITIAL_SYNC_RES = "ap_initial_sync_parent"),
        (e.AP_PAYMENT_REQUEST = "ap_payment_request"),
        (e.AP_MERCHANT_VALIDATION = "ap_validate_merchant"),
        (e.AP_MERCHANT_VALIDATION_RES = "merchant_validation_response"),
        (e.AP_SEND_TOKEN = "ap_token"),
        (e.AP_CANCEL = "ap_cancel"),
        (e.AP_ERROR = "ap_error");
    })(o || (o = {}));
    var i;
    !(function(e) {
      (e.APPLE_PAY = "apple_pay"), (e.GOOGLE_PAY = "google_pay");
    })(i || (i = {}));
    var a;
    !(function(e) {
      (e.PAYMENT_REQUEST = "PAYMENT_REQUEST"),
        (e.TOKEN_COLLECTED = "TOKEN_COLLECTED"),
        (e.TOKEN_COLLECTION_FAILED = "TOKEN_COLLECTION_FAILED"),
        (e.ERROR = "ERROR");
    })(a || (a = {}));
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      });
    var r = function(e) {
        var t;
        return (
          (null ===
            (t = null === e || void 0 === e ? void 0 : e.ownerDocument) ||
          void 0 === t
            ? void 0
            : t.defaultView) || window
        );
      },
      o = function() {
        return (
          (null === window || void 0 === window
            ? void 0
            : window.ApplePaySession) && ApplePaySession.canMakePayments()
        );
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      o = n.n(r),
      i = n(136),
      a = n.n(i),
      u = n(7),
      s = n(142),
      c = n(55),
      f = n(6),
      l = n(179),
      d = n(19),
      p = n(10),
      h = n(28),
      v = n(60),
      y = n(120),
      g = n(207),
      m = n(208),
      _ = n(122),
      w = n(34),
      b = n(123),
      E = n(210),
      A = n(15),
      S = n(243),
      O = n(46),
      k = u.a.app,
      P = k.version,
      T = k.main,
      I = k.fullscreen,
      C = k.popup,
      R = /^v\d\.\d\.\d-\d+-g[a-z0-9]{10}$/,
      L = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : window;
        return function() {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = r.client_token,
            k = void 0;
          try {
            k = a()(i);
          } catch (e) {
            throw new d.e();
          }
          var L = Object(p.a)(e),
            x = Object(h.b)(k.base_url),
            N = k.session_id,
            M = (k.session_type || e).toLowerCase(),
            j = k.language,
            D = k.purchase_country,
            U = k.region,
            H = !!k.scheme,
            F = k.experiments || [],
            B = Object(g.a)(F),
            K = Object(m.a)(F, B["kp-client-app-version"]),
            W = t.__APP_VERSION__ || P.trim();
          K && R.test(K) && (W = K);
          var V = !!w.a.get("__klarna_payments_local_mode__"),
            Y = V ? "http://0.0.0.0:3000" : Object(h.b)(x, W),
            J = n.location.hostname,
            G = e + ":" + N + ":isUtopiaFlowEnabled";
          try {
            var z =
              Object(v.f)() &&
              !A.a.isSupported() &&
              !Object(v.g)() &&
              "klarna" === k.design &&
              H;
            f.a.set(G, "variate-1" === B["kp-client-utopia-flow"] && z),
              "string" == typeof B["kp-client-utopia-flow"] &&
                f.a.set(e + ":" + N + ":isEligibleUtopiaEnvironment", z);
          } catch (e) {
            f.a.set(G, !1);
          }
          var q = !!f.a.get(G),
            Z =
              q &&
              B["kp-client-utopia-static-widget"] &&
              "control" !== B["kp-client-utopia-static-widget"];
          f.a.set(e + ":" + N + ":isUtopiaStaticWidgetEnabled", Z),
            Z
              ? f.a.get(e + ":" + N + ":isUtopiaStaticWidgetFontsInjected") ||
                (f.a.set(
                  e + ":" + N + ":isUtopiaStaticWidgetFontsInjected",
                  !0
                ),
                Object(E.a)(document.body))
              : Object(s.a)([Object(h.b)(Y, T.entry), Object(h.b)(Y, I.entry)]);
          var X = f.a.get(e + ":rawClientToken");
          if (
            (X &&
              X !== i &&
              (f.a.set("instancesWithApplicationResetDone", []),
              f.a.set(e + ":applicationResetDone", !1),
              f.a.set(e + ":reCreateDeviceRecognitionIframe", !0)),
            A.a.isSupported())
          ) {
            var Q = !(
              !B["kp-client-prevent-native-hook-api-in-iframe"] &&
              !B["in-app-sdk-prevent-native-hook-api-in-iframe"]
            );
            if (Object(y.a)() && !B["in-app-sdk-enabled-for-shopping-browser"])
              A.a.setIsSupportedOverride(!1);
            else if (Q)
              try {
                n !== n.top && A.a.setIsSupportedOverride(!1);
              } catch (e) {}
          }
          A.a.isSupported() &&
            A.a.isFeatureSupported("experiments") &&
            A.a.setExperiments(
              F.map(function(e) {
                return {
                  reference: e.name,
                  variate: (e.parameters || {}).variate_id,
                };
              })
            );
          var $ = { session_type: M, merchant_url: J, scheme: H };
          if (
            (q && ($.utopia = !0),
            L.configure(k, $),
            H && "variate-1" === B["kp-client-popup-purchase-flow"])
          ) {
            var ee = A.a.isSupported() || Object(v.a)() || Object(v.g)();
            f.a.set(e + ":popupExperimentEnabled", !ee);
          }
          q &&
            (Z &&
              (f.a.set(
                e + ":" + N + ":oneOfferingVersion",
                B["kp-client-one-offering-version"] || u.a.oneOfferingVersion
              ),
              f.a.set(
                e + ":" + N + ":oneOfferingStaticVariant",
                B["kp-client-utopia-static-widget"]
              )),
            f.a.set(
              e + ":" + N + ":apfLibraryUrl",
              B["kp-client-apf-library-url"] || x
            ),
            Object(_.a)({ id: e, sessionID: N, tracker: L })),
            f.a.get(e + ":popupExperimentEnabled") &&
              Object(s.a)([Object(h.b)(Y, C.entry)]),
            f.a.set(e + ":versionedBaseURL", Y),
            f.a.set(e + ":previousRawClientToken", X),
            f.a.set(e + ":rawClientToken", i),
            f.a.set(e + ":clientToken", {
              designID: k.design,
              analyticsPropertyID: k.analytics_property_id,
              traceFlow: k.trace_flow,
              environment: k.environment,
              merchantName: k.merchant_name,
              clientEventBaseURL: k.client_event_base_url,
              sessionID: N,
              scheme: H,
              experiments: B,
              merchantURL: J,
              sessionType: M,
              language: j,
              purchaseCountry: D,
              region: U,
              baseURL: x,
              version: "v1.10.0-734-g03a211a9",
            }),
            f.a.set(e + ":initialized", !0),
            f.a.get("apiSetupEventSent") ||
              (L.event(p.b.API_SETUP, {
                api_script_url: Object(l.a)(),
                app_version: W,
                in_top_window: !Object(b.a)(),
                native_hook_api_supported: A.a.isSupported(),
                timestamp: f.a.get("setupTimestamp"),
              }),
              f.a.set("apiSetupEventSent", !0)),
            L.event(p.b.INIT_CALLED, { client_token: i });
          var te = e + ":" + N + ":shoppingBrowser:initPromise";
          try {
            if (Object(S.a)({ scheme: H }) && !f.a.get(te)) {
              var ne = c.a.getNativeVersion(),
                re = { region: U, sessionID: N };
              f.a.get(e + ":" + N + ":shoppingBrowser:sessionInitiated") ||
                (c.a.sendSessionInitiatedEvent(re),
                f.a.set(e + ":" + N + ":shoppingBrowser:sessionInitiated", !0)),
                L.event(p.b.SHOPPING_BROWSER_NATIVE_API_INIT, {
                  native_version: ne,
                });
              var oe = c.a
                .init(re, "production")
                .then(function(e) {
                  return (
                    L.event(p.b.SHOPPING_BROWSER_NATIVE_API_INIT_COMPLETED, {
                      native_version: ne,
                      pending_messages: o()(e),
                    }),
                    e
                  );
                })
                .catch(function(e) {
                  "`shoppingBrowserNativeApi.init` timed out." === e.message
                    ? L.event(p.b.SHOPPING_BROWSER_NATIVE_API_INIT_TIMED_OUT, {
                        native_version: ne,
                      })
                    : L.event(p.b.SHOPPING_BROWSER_NATIVE_API_ERROR, {
                        native_version: ne,
                        error: e.message,
                      }),
                    f.a.delete(te);
                });
              f.a.set(te, oe);
            }
          } catch (t) {
            L.event(p.b.SHOPPING_BROWSER_NATIVE_API_ERROR, {
              error: t.message,
            }),
              f.a.delete(e + ":" + N + ":shoppingBrowser:sessionInitiated"),
              f.a.delete(te);
          }
          return (
            Object(O.a)() &&
              r.product &&
              f.a.set(e + ":integratingProduct", r.product),
            ("credit" === M || H) &&
              Object.defineProperty(t, "initialized", {
                get: function() {
                  return L.event(p.b.INITIALIZED_FLAG_READ), !0;
                },
                configurable: !0,
              }),
            "complete" === document.readyState
              ? L.event(p.b.PAGE_ALREADY_LOADED)
              : n.addEventListener("load", function() {
                  return L.event(p.b.PAGE_LOADED);
                }),
            Object(O.a)() &&
              r.product &&
              ["hpp", "hppx"].indexOf(r.product.product_id) > -1 &&
              (q && (t.isUtopiaFlowEnabled = q),
              k.ua_enabled_and_one_pm &&
                (t.isUserAccountEnabledWithOnePaymentMethod = !0)),
            t
          );
        };
      };
    t.a = L;
  },
  function(e, t, n) {
    e.exports =
      !n(9) &&
      !n(23)(function() {
        return (
          7 !=
          Object.defineProperty(n(65)("div"), "a", {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(e, t) {
    e.exports = function(e, t) {
      return { value: t, done: !!e };
    };
  },
  function(e, t, n) {
    var r = n(21),
      o = n(25),
      i = n(148)(!1),
      a = n(73)("IE_PROTO");
    e.exports = function(e, t) {
      var n,
        u = o(e),
        s = 0,
        c = [];
      for (n in u) n != a && r(u, n) && c.push(n);
      for (; t.length > s; ) r(u, (n = t[s++])) && (~i(c, n) || c.push(n));
      return c;
    };
  },
  function(e, t, n) {
    var r = n(4).document;
    e.exports = r && r.documentElement;
  },
  function(e, t, n) {
    var r = n(21),
      o = n(26),
      i = n(73)("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function(e) {
        return (
          (e = o(e)),
          r(e, i)
            ? e[i]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  function(e, t, n) {
    var r = n(13);
    e.exports = function(e, t, n, o) {
      try {
        return o ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && r(i.call(e)), t);
      }
    };
  },
  function(e, t, n) {
    var r = n(30),
      o = n(5)("iterator"),
      i = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (r.Array === e || i[o] === e);
    };
  },
  function(e, t, n) {
    var r = n(5)("iterator"),
      o = !1;
    try {
      var i = [7][r]();
      (i.return = function() {
        o = !0;
      }),
        Array.from(i, function() {
          throw 2;
        });
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
        var i = [7],
          a = i[r]();
        (a.next = function() {
          return { done: (n = !0) };
        }),
          (i[r] = function() {
            return a;
          }),
          e(i);
      } catch (e) {}
      return n;
    };
  },
  function(e, t, n) {
    var r = n(2),
      o = n(0),
      i = n(23);
    e.exports = function(e, t) {
      var n = (o.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(n)),
        r(
          r.S +
            r.F *
              i(function() {
                n(1);
              }),
          "Object",
          a
        );
    };
  },
  function(e, t, n) {
    var r = n(13),
      o = n(37),
      i = n(5)("species");
    e.exports = function(e, t) {
      var n,
        a = r(e).constructor;
      return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n);
    };
  },
  function(e, t, n) {
    var r,
      o,
      i,
      a = n(16),
      u = n(164),
      s = n(97),
      c = n(65),
      f = n(4),
      l = f.process,
      d = f.setImmediate,
      p = f.clearImmediate,
      h = f.MessageChannel,
      v = f.Dispatch,
      y = 0,
      g = {},
      m = function() {
        var e = +this;
        if (g.hasOwnProperty(e)) {
          var t = g[e];
          delete g[e], t();
        }
      },
      _ = function(e) {
        m.call(e.data);
      };
    (d && p) ||
      ((d = function(e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (g[++y] = function() {
            u("function" == typeof e ? e : Function(e), t);
          }),
          r(y),
          y
        );
      }),
      (p = function(e) {
        delete g[e];
      }),
      "process" == n(39)(l)
        ? (r = function(e) {
            l.nextTick(a(m, e, 1));
          })
        : v && v.now
        ? (r = function(e) {
            v.now(a(m, e, 1));
          })
        : h
        ? ((o = new h()),
          (i = o.port2),
          (o.port1.onmessage = _),
          (r = a(i.postMessage, i, 1)))
        : f.addEventListener &&
          "function" == typeof postMessage &&
          !f.importScripts
        ? ((r = function(e) {
            f.postMessage(e + "", "*");
          }),
          f.addEventListener("message", _, !1))
        : (r =
            "onreadystatechange" in c("script")
              ? function(e) {
                  s.appendChild(c("script")).onreadystatechange = function() {
                    s.removeChild(this), m.call(e);
                  };
                }
              : function(e) {
                  setTimeout(a(m, e, 1), 0);
                })),
      (e.exports = { set: d, clear: p });
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function(e, t, n) {
    var r = n(13),
      o = n(8),
      i = n(77);
    e.exports = function(e, t) {
      if ((r(e), o(t) && t.constructor === e)) return t;
      var n = i.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      o = n(0),
      i = n(12),
      a = n(9),
      u = n(5)("species");
    e.exports = function(e) {
      var t = "function" == typeof o[e] ? o[e] : r[e];
      a &&
        t &&
        !t[u] &&
        i.f(t, u, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        return e[t].bind(e);
      },
      o = function(e, t) {
        return (
          t.webkit &&
          t.webkit.messageHandlers &&
          t.webkit.messageHandlers.AsyncJavaScriptHandler &&
          "function" ==
            typeof t.webkit.messageHandlers.AsyncJavaScriptHandler[e] &&
          r(t.webkit.messageHandlers.AsyncJavaScriptHandler, e)
        );
      },
      i = function(e, t) {
        return (
          t.WCJavaScriptHandlerInterface &&
          "function" == typeof t.WCJavaScriptHandlerInterface[e] &&
          r(t.WCJavaScriptHandlerInterface, e)
        );
      },
      a = function(e, t) {
        return o(e, t) || i(e, t);
      },
      u = function(e) {
        return o("postMessage", e) || i("handleMessage", e);
      },
      s = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window;
        return e ? a(e, t) : u(t);
      };
    t.a = s;
  },
  function(e, t, n) {
    "use strict";
    var r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
      o = function() {
        return r.replace(/[xy]/g, function(e) {
          var t = (16 * Math.random()) | 0;
          return ("x" === e ? t : (3 & t) | 8).toString(16);
        });
      };
    t.a = o;
  },
  function(e, t, n) {
    "use strict";
    var r = n(78);
    t.a = {
      minimumSupportedNativeVersion: { year: 21, week: 11 },
      features: {
        checkBeforeSend: [{ name: r.a.AUTH_REQUEST }],
        alwaysSend: [
          {
            name: r.a.DEAL_REQUEST,
            minimumSupportedNativeVersion: { year: 21, week: 22 },
          },
        ],
      },
      initTimeout: 100,
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(112),
      o = function(e, t) {
        return (
          "development" === e || /^.+\.klarna\.net$/.test(t.location.hostname)
        );
      },
      i = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          n = arguments[2];
        if (o(t, n)) return !0;
        var i = Object(r.b)(),
          a = i.year,
          u = i.week,
          s = a === e.year && u >= e.week;
        return a > e.year || s;
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return u;
    }),
      n.d(t, "a", function() {
        return s;
      });
    var r = n(22),
      o = n.n(r),
      i = /Klarna\/((\d+)\.(\d+)\.(\d+))/,
      a = function(e) {
        return (e.navigator && e.navigator.userAgent) || "";
      },
      u = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window,
          t = a(e),
          n = t.match(i) || [],
          r = o()(n, 5),
          u = r[0],
          s = r[1],
          c = r[2],
          f = r[3],
          l = r[4];
        return u
          ? {
              fullVersion: s,
              year: Number(c),
              week: Number(f),
              build: Number(l),
            }
          : {};
      },
      s = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window;
        return u(e).fullVersion;
      };
  },
  function(e, t, n) {
    e.exports = { default: n(180), __esModule: !0 };
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(59),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = function(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t ||
        ("object" !== (void 0 === t ? "undefined" : (0, o.default)(t)) &&
          "function" != typeof t)
        ? e
        : t;
    };
  },
  function(e, t, n) {
    var r = n(39);
    e.exports =
      Array.isArray ||
      function(e) {
        return "Array" == r(e);
      };
  },
  function(e, t, n) {
    var r = n(96),
      o = n(75).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function(e) {
        return r(e, o);
      };
  },
  function(e, t, n) {
    var r = n(44),
      o = n(38),
      i = n(25),
      a = n(66),
      u = n(21),
      s = n(94),
      c = Object.getOwnPropertyDescriptor;
    t.f = n(9)
      ? c
      : function(e, t) {
          if (((e = i(e)), (t = a(t, !0)), s))
            try {
              return c(e, t);
            } catch (e) {}
          if (u(e, t)) return o(!r.f.call(e, t), e[t]);
        };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var o = n(191),
      i = r(o),
      a = n(195),
      u = r(a),
      s = n(59),
      c = r(s);
    t.default = function(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            (void 0 === t ? "undefined" : (0, c.default)(t))
        );
      (e.prototype = (0, u.default)(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (i.default ? (0, i.default)(e, t) : (e.__proto__ = t));
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(9),
      o = n(31),
      i = n(82),
      a = n(44),
      u = n(26),
      s = n(68),
      c = Object.assign;
    e.exports =
      !c ||
      n(23)(function() {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function(e) {
            t[e] = e;
          }),
          7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
        );
      })
        ? function(e, t) {
            for (
              var n = u(e), c = arguments.length, f = 1, l = i.f, d = a.f;
              c > f;

            )
              for (
                var p,
                  h = s(arguments[f++]),
                  v = l ? o(h).concat(l(h)) : o(h),
                  y = v.length,
                  g = 0;
                y > g;

              )
                (p = v[g++]), (r && !d.call(h, p)) || (n[p] = h[p]);
            return n;
          }
        : c;
  },
  function(e, t, n) {
    "use strict";
    var r = n(121),
      o = function() {
        try {
          return !!Object(r.a)("klarna-shopping-browser-session-id");
        } catch (e) {}
        return !1;
      };
    t.a = o;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : document.cookie,
        n = t.match(new RegExp(e + "=([^;]+)"));
      if (n) return n[1];
    }
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t = e.id,
        n = e.sessionID,
        r = e.tracker,
        s = o.a.get(t + ":" + n + ":apfLibraryUrl"),
        c = new URL(a.a.acquiringPurchaseFlow.libraryPath, s).toString(),
        f = Object(i.a)(c)
          .then(function() {
            r.event(u.b.APF_LIB_FETCH_COMPLETED);
          })
          .catch(function(e) {
            r.event(u.b.APF_LIB_FETCH_ERROR, {
              name: e.name,
              message: e.message,
            }),
              o.a.delete(t + ":" + n + ":loadApfPromise");
          });
      return (
        r.event(u.b.APF_LIB_FETCH_STARTED),
        o.a.set(t + ":" + n + ":loadApfPromise", f),
        f
      );
    }
    var o = n(6),
      i = n(209),
      a = n(7),
      u = n(10);
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      return e.top !== e;
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(12).f,
      o = n(51),
      i = n(57),
      a = n(16),
      u = n(56),
      s = n(33),
      c = n(70),
      f = n(95),
      l = n(107),
      d = n(9),
      p = n(43).fastKey,
      h = n(35),
      v = d ? "_s" : "size",
      y = function(e, t) {
        var n,
          r = p(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n;
      };
    e.exports = {
      getConstructor: function(e, t, n, c) {
        var f = e(function(e, r) {
          u(e, f, t, "_i"),
            (e._t = t),
            (e._i = o(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[v] = 0),
            void 0 != r && s(r, n, e[c], e);
        });
        return (
          i(f.prototype, {
            clear: function() {
              for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (e._f = e._l = void 0), (e[v] = 0);
            },
            delete: function(e) {
              var n = h(this, t),
                r = y(n, e);
              if (r) {
                var o = r.n,
                  i = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  i && (i.n = o),
                  o && (o.p = i),
                  n._f == r && (n._f = o),
                  n._l == r && (n._l = i),
                  n[v]--;
              }
              return !!r;
            },
            forEach: function(e) {
              h(this, t);
              for (
                var n,
                  r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function(e) {
              return !!y(h(this, t), e);
            },
          }),
          d &&
            r(f.prototype, "size", {
              get: function() {
                return h(this, t)[v];
              },
            }),
          f
        );
      },
      def: function(e, t, n) {
        var r,
          o,
          i = y(e, t);
        return (
          i
            ? (i.v = n)
            : ((e._l = i = {
                i: (o = p(t, !0)),
                k: t,
                v: n,
                p: (r = e._l),
                n: void 0,
                r: !1,
              }),
              e._f || (e._f = i),
              r && (r.n = i),
              e[v]++,
              "F" !== o && (e._i[o] = i)),
          e
        );
      },
      getEntry: y,
      setStrong: function(e, t, n) {
        c(
          e,
          t,
          function(e, n) {
            (this._t = h(e, t)), (this._k = n), (this._l = void 0);
          },
          function() {
            for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
            return e._t && (e._l = n = n ? n.n : e._t._f)
              ? "keys" == t
                ? f(0, n.k)
                : "values" == t
                ? f(0, n.v)
                : f(0, [n.k, n.v])
              : ((e._t = void 0), f(1));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          l(t);
      },
    };
  },
  function(e, t, n) {
    var r = n(54),
      o = n(218);
    e.exports = function(e) {
      return function() {
        if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
        return o(this);
      };
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(127),
      o = n(88),
      i = function(e, t) {
        return function(n) {
          return Object(o.a)(e + ":" + r.c, n, t);
        };
      },
      a = function(e, t) {
        return function() {
          return Object(o.a)(e + ":" + r.b, t);
        };
      },
      u = function(e, t) {
        return function() {
          return Object(o.a)(e + ":" + r.a, t);
        };
      },
      s = function(e, t) {
        return function(n) {
          return Object(o.a)(e + ":" + r.d, n, t);
        };
      },
      c = function(e, t) {
        return function() {
          return Object(o.a)(e + ":" + r.g, t);
        };
      },
      f = function(e, t) {
        return function() {
          return Object(o.a)(e + ":" + r.f, t);
        };
      },
      l = function(e, t) {
        return function() {
          return Object(o.a)(e + ":" + r.e, t);
        };
      },
      d = function(e, t) {
        return {
          heightChanged: i(e, t),
          fullscreenOverlayShown: a(e, t),
          fullscreenOverlayHidden: u(e, t),
          paymentMethodSelected: s(e, t),
          userAccountLoginRequested: c(e, t),
          userAccountLoginReady: f(e, t),
          userAccountLoginLoggedIn: l(e, t),
        };
      };
    t.a = d;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "g", function() {
        return u;
      }),
      n.d(t, "f", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return c;
      });
    var r = "heightChanged",
      o = "fullscreenOverlayShown",
      i = "fullscreenOverlayHidden",
      a = "paymentMethodSelected",
      u = "userAccountLoginRequested",
      s = "userAccountLoginReady",
      c = "userAccountLoginLoggedIn";
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      try {
        var t = window.getComputedStyle(e).marginTop;
        return t ? parseInt(t) : 0;
      } catch (e) {
        return 0;
      }
    }
    function o() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments[1],
        n = arguments[2],
        o = e.url || Object(h.b)(e.baseURL, e.entry),
        i = e.id(e.name),
        a = e.title(e.name),
        u = void 0,
        s = !1,
        l = void 0,
        v = void 0,
        g = void 0,
        b = function(n) {
          return function() {
            s ||
              ((v = r(document.documentElement)),
              (g = r(document.body)),
              (l = window.pageYOffset || document.documentElement.scrollTop));
            var o = function() {
              c({
                iframe: n,
                topPosition: l,
                extraDocumentTopOffset: v,
                extraBodyTopOffset: g,
                shouldMoveBody: !y.a.isSupported(),
                shouldUseLayoutStyleFix: e.shouldUseLayoutStyleFix,
              }),
                t.fullscreenOverlayShown(),
                (s = !0);
            };
            y.a.isSupported() && !_
              ? ((_ = !0),
                y.a.fullscreenReplaceWebView().then(function(e) {
                  e.success
                    ? (o(),
                      y.a.fullscreenMoveWebView().then(function(e) {
                        e.success || y.a.fullscreenRestoreWebView(), (_ = !1);
                      }))
                    : (_ = !1);
                }))
              : (o(), (_ = !1));
          };
        },
        E = function(n) {
          return function() {
            var r = function() {
              f({
                iframe: n,
                topPosition: l,
                shouldUseLayoutStyleFix: e.shouldUseLayoutStyleFix,
              }),
                t.fullscreenOverlayHidden(),
                (s = !1);
            };
            y.a.isSupported() && !w
              ? ((w = !0),
                y.a.fullscreenReplaceOverlay().then(function(e) {
                  e.success && (r(), y.a.fullscreenRestoreWebView()), (w = !1);
                }))
              : (r(), (w = !1));
          };
        },
        A = function(e) {
          var t = e.iframe;
          u = Object(p.a)(t, i, !0, {
            show: b(t),
            hide: E(t),
            nativeHookApi: function(e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              var o = y.a[e],
                i =
                  "function" == typeof n[n.length - 1]
                    ? n.pop()
                    : function() {};
              "function" == typeof o && o.apply(void 0, n).then(i);
            },
            trackEvent: n,
          });
        };
      return (
        e.scrollBlockStyleContainer &&
          e.scrollBlockStyleContainer.appendChild(m),
        Object(d.b)({
          container: e.container,
          url: o + (e.params ? "#" + e.params + "&" : ""),
          baseURL: e.baseURL,
          id: i,
          title: a,
          onCreate: e.onCreate,
          onLoad: e.onLoad,
          style: e.style,
          timeout: e.timeout,
          sandbox: e.shouldSandbox ? e.sandbox : null,
          shouldAllowCamera: e.shouldAllowCamera,
          beforeLoad: A,
        }).then(function(e) {
          return [e, u, { show: b(e), hide: E(e) }];
        })
      );
    }
    function i(e) {
      var t = e.topPosition,
        n = e.bodyPositionType,
        r = e.extraDocumentTopOffset,
        o = e.shouldMoveBody,
        i = e.shouldUseLayoutStyleFix;
      m.innerHTML =
        "\n    html." +
        g +
        " {\n      overflow: visible !important;\n      " +
        (i ? "position: static !important;" : "") +
        "\n    }\n    body." +
        g +
        " {\n      width: 100% !important;\n      height: 100% !important;\n      min-height: 100% !important;\n      top: " +
        (o ? -(t - r) : 0) +
        "px !important;\n      background-position-y: " +
        (o ? -(t - r) : 0) +
        "px !important;\n      overflow: hidden !important;\n      position: " +
        n +
        " !important;\n      box-sizing: border-box !important;\n    }\n  ";
    }
    function a() {
      window.removeEventListener("scroll", a),
        window.scrollTo(0, 0),
        (m.innerHTML =
          "\n    " +
          (m.innerHTML || "") +
          "\n    body." +
          g +
          " * { max-height: 0 !important; }\n    body." +
          g +
          ' iframe[id$="-fullscreen"] { max-height: 100% !important; }\n  ');
    }
    function u(e, t, n, o) {
      var u = n ? "absolute" : "fixed";
      return (
        Object(v.e)() &&
        "relative" === window.getComputedStyle(document.body).position
          ? ((m.innerHTML =
              "\n      body." + g + " { position: initial !important; }\n    "),
            setTimeout(function() {
              var e = r(document.documentElement);
              i({
                topPosition:
                  window.pageYOffset || document.documentElement.scrollTop,
                bodyPositionType: u,
                extraDocumentTopOffset: e,
                shouldMoveBody: o,
                shouldUseLayoutStyleFix: n,
              });
            }, 30))
          : i({
              topPosition: e,
              bodyPositionType: u,
              extraDocumentTopOffset: t,
              shouldMoveBody: o,
              shouldUseLayoutStyleFix: n,
            }),
        n && window.addEventListener("scroll", a),
        setTimeout(function() {
          l.a(document.documentElement, g), l.a(document.body, g);
        }, 10),
        m
      );
    }
    function s(e, t) {
      t && window.removeEventListener("scroll", a),
        l.b(document.documentElement, g),
        l.b(document.body, g),
        void 0 !== e && window.scrollTo(0, e);
    }
    function c(e) {
      var t = e.extraBodyTopOffset,
        n = e.extraDocumentTopOffset,
        r = e.iframe,
        o = e.shouldMoveBody,
        i = e.shouldUseLayoutStyleFix,
        a = e.topPosition;
      (r.style.height = "100%"),
        (r.style.opacity = "1"),
        o && (r.style.marginTop = a - (n + t) + "px"),
        u(a, n, i, o);
    }
    function f(e) {
      var t = e.iframe,
        n = e.topPosition,
        r = e.shouldUseLayoutStyleFix,
        o = function() {
          (t.style.height = "0"), (t.style.opacity = "0");
        };
      r ? setTimeout(o, 100) : o(), s(n, r);
    }
    t.a = o;
    var l = n(258),
      d = n(36),
      p = n(48),
      h = n(28),
      v = n(60),
      y = n(15),
      g = "klarna-payments-fso-open",
      m = document.createElement("style"),
      _ = !1,
      w = !1;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = n(3),
      a = n.n(i),
      u = n(58),
      s = n.n(u),
      c = n(90),
      f = n.n(c),
      l = n(260),
      d = n.n(l),
      p = n(261),
      h = (function() {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if ((s()(this, e), !n.target))
            throw new Error("Property `options.target` is required.");
          "[object Object]" === Object.prototype.toString.call(n.debug)
            ? ((this.debug = !!n.debug.logs),
              (this.logErrors = !!n.debug.errors))
            : ((this.debug = !!n.debug), (this.logErrors = this.debug)),
            (this.posten = e.createPosten(a()({}, n, { debug: this.debug }))),
            (this.posten.onMessage = function() {
              t.posten &&
                t.posten.hasTarget() &&
                t.onMessage.apply(t, arguments);
            }),
            (this.messageHandlers = {}),
            (this.queue = n.queue || []),
            (this.sourceID = n.sourceID || "NO NAME"),
            (this.targetIsReady = n.targetIsReady),
            (this.shouldBuffer = !this.targetIsReady),
            (this.autoSyncOnStart =
              null != n.autoSyncOnStart
                ? n.autoSyncOnStart
                : !this.targetIsReady),
            this.addMessageHandler(
              "@@messenger/ready",
              this.onReadyMessage.bind(this)
            ),
            this.addMessageHandler(
              "@@messenger/SYN",
              this.onSyncMessage.bind(this)
            ),
            this.addMessageHandler(
              "@@messenger/SYN-ACK",
              this.onAcknowledgeSyncMessage.bind(this)
            ),
            this.addMessageHandler(
              "@@messenger/ACK",
              this.onAcknowledgeMessage.bind(this)
            ),
            this.addMessageHandler(
              "@@messenger/transferPort",
              this.onTransferPort.bind(this)
            ),
            this.startTargetExistenceCheckPolling(
              n.targetExistenceCheckInterval
            ),
            this.targetIsReady
              ? this.ready()
              : this.autoSyncOnStart && this.sync();
        }
        return (
          f()(e, null, [
            {
              key: "createPosten",
              value: function(t) {
                var n = t.src,
                  r = void 0 === n ? window : n,
                  o = t.target,
                  i = t.origin,
                  a = void 0 === i ? "*" : i,
                  u = t.debug,
                  s = t.sourceID,
                  c = t.disableMessageSourceCheck,
                  f = {
                    src: r,
                    origin: a,
                    console: d.a,
                    debug: u,
                    sourceID: s,
                    disableMessageSourceCheck: c,
                  };
                return (
                  o.url && (f.origin = e.getOriginFromURL(o.url)),
                  o.window
                    ? (f.target = o.window)
                    : o.frame && (f.frame = o.frame),
                  new p.a(f)
                );
              },
            },
            {
              key: "getOriginFromURL",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = e.match(/^[a-z]+:\/\/[a-z0-9A-Z\.:\-]+/);
                if (t) return t[0];
              },
            },
          ]),
          f()(e, [
            {
              key: "log",
              value: function() {
                if (this.debug) {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  d.a.log.apply(
                    d.a,
                    ["[Messenger(%s)]", this.sourceID].concat(t)
                  );
                }
              },
            },
            {
              key: "logError",
              value: function() {
                if (this.debug && this.logErrors) {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  d.a.error.apply(
                    d.a,
                    ["[Messenger(%s)]", this.sourceID].concat(t)
                  );
                }
              },
            },
            {
              key: "hasTarget",
              value: function() {
                return this.posten && this.posten.hasTarget();
              },
            },
            {
              key: "startTargetExistenceCheckPolling",
              value: function() {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 100;
                this.existenceCheckPoller = setInterval(function() {
                  e.shouldBuffer ||
                    e.hasTarget() ||
                    (e.log("Target no longer exists. Start buffering."),
                    (e.shouldBuffer = !0));
                }, t);
              },
            },
            {
              key: "sync",
              value: function() {
                this.hasTarget() &&
                  (this.posten.send({ action: "@@messenger/SYN" }),
                  this.log("SYN"));
              },
            },
            {
              key: "acknowledgeSync",
              value: function() {
                this.hasTarget() &&
                  (this.posten.send({ action: "@@messenger/SYN-ACK" }),
                  this.log("SYN-ACK"));
              },
            },
            {
              key: "acknowledge",
              value: function() {
                this.hasTarget() &&
                  (this.posten.send({ action: "@@messenger/ACK" }),
                  this.log("ACK"));
              },
            },
            {
              key: "addMessageHandler",
              value: function(e, t) {
                var n = this;
                return (
                  (this.messageHandlers[e] = t),
                  function() {
                    delete n.messageHandlers[e];
                  }
                );
              },
            },
            {
              key: "transferPort",
              value: function(e) {
                this.log("Transfer port:", e),
                  this.send({ action: "@@messenger/transferPort", port: e });
              },
            },
            {
              key: "getPort",
              value: function() {
                var e = this;
                return this.port
                  ? o.a.resolve(this.port)
                  : new o.a(function(t) {
                      e.resolvePortPromise = t;
                    });
              },
            },
            {
              key: "send",
              value: function(e) {
                !this.shouldBuffer && this.hasTarget()
                  ? this.posten.send(a()({}, e, { __sourceID: this.sourceID }))
                  : (this.log("Buffering message:", e), this.queue.push(e));
              },
            },
            {
              key: "ready",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.fromPostMessage,
                  n = void 0 !== t && t;
                this.hasTarget() &&
                  (this.log("Ready to receive messages."),
                  (this.shouldBuffer = !1),
                  n || this.send({ action: "@@messenger/ready" }),
                  this.flush(this.queue, this.send));
              },
            },
            {
              key: "flush",
              value: function() {
                for (
                  this.log("Flushing buffer:", [].concat(this.queue));
                  this.queue.length > 0;

                )
                  this.send(this.queue.shift());
              },
            },
            {
              key: "pause",
              value: function() {
                this.shouldBuffer = !0;
              },
            },
            {
              key: "destroy",
              value: function() {
                clearInterval(this.existenceCheckPoller),
                  this.posten && this.posten.unbind(),
                  delete this.posten;
              },
            },
            {
              key: "onMessage",
              value: function(e, t, n) {
                if (e) return void this.logError(e);
                var r = this.messageHandlers[t.action];
                "function" == typeof r && r(t, n);
              },
            },
            {
              key: "onReadyMessage",
              value: function() {
                this.ready({ fromPostMessage: !0 });
              },
            },
            {
              key: "onSyncMessage",
              value: function(e) {
                this.acknowledgeSync();
              },
            },
            {
              key: "onAcknowledgeSyncMessage",
              value: function(e) {
                this.ready({ fromPostMessage: !0 }), this.acknowledge();
              },
            },
            {
              key: "onAcknowledgeMessage",
              value: function(e) {
                this.ready({ fromPostMessage: !0 });
              },
            },
            {
              key: "onTransferPort",
              value: function(e, t) {
                var n = t.ports[0];
                this.log("Received port:", n),
                  !this.port &&
                    this.resolvePortPromise &&
                    this.resolvePortPromise(n),
                  (this.port = n);
              },
            },
          ]),
          e
        );
      })();
    t.a = h;
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(18),
      a = n.n(i),
      u = n(1),
      s = n.n(u),
      c = this,
      f = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        return new s.a(
          (function() {
            var n = a()(
              o.a.mark(function n(r) {
                var i, a;
                return o.a.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (i = void 0),
                            (a = setTimeout(function() {
                              r(i);
                            }, t)),
                            (n.prev = 2),
                            (n.next = 5),
                            e()
                          );
                        case 5:
                          (i = n.sent), (n.next = 10);
                          break;
                        case 8:
                          (n.prev = 8), (n.t0 = n.catch(2));
                        case 10:
                          clearTimeout(a), r(i);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  c,
                  [[2, 8]]
                );
              })
            );
            return function(e) {
              return n.apply(this, arguments);
            };
          })()
        );
      };
    t.a = { withTimeout: f };
  },
  function(e, t, n) {
    "use strict";
    function r() {
      return o.a.get("_klarna_mdid") || o.a.get("klarna-mdid");
    }
    t.a = r;
    var o = n(34);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(133);
    Object(r.a)();
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      s.a.set("setupTimestamp", new Date().getTime());
      var t = (e.Klarna = e.Klarna || {}),
        n = ["init", "load", "authorize", "on", "off"];
      (t.Credit = o(
        "credit",
        [].concat(n, ["reauthorize", "loadPaymentReview"])
      )),
        (t.DirectBankTransfer = o(
          "direct_bank_transfer",
          [].concat(n, ["finalize"])
        )),
        (t.DirectDebit = o("direct_debit", [].concat(n, ["reauthorize"]))),
        (t.Payments = o(
          "payments",
          []
            .concat(n, ["reauthorize", "finalize", "loadPaymentReview"])
            .concat(Object(c.a)() ? ["validateCard"] : [])
        )),
        u.a.isSupported()
          ? (u.a.init(),
            u.a.handshake().then(function(t) {
              s.a.set("nativeHookApiHandshakeResponse", t),
                Object(f.a)() || i(e);
            }),
            Object(f.a)() && i(e))
          : i(e);
    }
    function o(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return t.reduce(function(t, r) {
        return (t[r] = a.a[r](e, n)), t;
      }, n);
    }
    function i(e) {
      var t = e.klarnaAsyncCallback;
      "function" == typeof t && t();
    }
    t.a = r;
    var a = n(134),
      u = n(15),
      s = n(6),
      c = n(46),
      f = n(120);
  },
  function(e, t, n) {
    "use strict";
    var r = n(93),
      o = n(244),
      i = n(292),
      a = n(293),
      u = n(295),
      s = n(296),
      c = n(297),
      f = n(298),
      l = n(299),
      d = n(46),
      p = {
        init: r.a,
        load: o.a,
        loadPaymentReview: i.a,
        authorize: a.a,
        reauthorize: u.a,
        finalize: s.a,
        on: c.a,
        off: f.a,
      };
    Object(d.a)() && (p.validateCard = l.a), (t.a = p);
  },
  function(e, t, n) {
    var r = n(0),
      o = r.JSON || (r.JSON = { stringify: JSON.stringify });
    e.exports = function(e) {
      return o.stringify.apply(o, arguments);
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      this.message = e;
    }
    var o = n(137);
    (r.prototype = new Error()),
      (r.prototype.name = "InvalidTokenError"),
      (e.exports = function(e, t) {
        if ("string" != typeof e) throw new r("Invalid token specified");
        t = t || {};
        var n = !0 === t.header ? 0 : 1;
        try {
          return JSON.parse(o(e.split(".")[n]));
        } catch (e) {
          throw new r("Invalid token specified: " + e.message);
        }
      }),
      (e.exports.InvalidTokenError = r);
  },
  function(e, t, n) {
    function r(e) {
      return decodeURIComponent(
        o(e).replace(/(.)/g, function(e, t) {
          var n = t
            .charCodeAt(0)
            .toString(16)
            .toUpperCase();
          return n.length < 2 && (n = "0" + n), "%" + n;
        })
      );
    }
    var o = n(138);
    e.exports = function(e) {
      var t = e.replace(/-/g, "+").replace(/_/g, "/");
      switch (t.length % 4) {
        case 0:
          break;
        case 2:
          t += "==";
          break;
        case 3:
          t += "=";
          break;
        default:
          throw "Illegal base64url string!";
      }
      try {
        return r(t);
      } catch (e) {
        return o(t);
      }
    };
  },
  function(e, t) {
    function n(e) {
      this.message = e;
    }
    function r(e) {
      var t = String(e).replace(/=+$/, "");
      if (t.length % 4 == 1)
        throw new n(
          "'atob' failed: The string to be decoded is not correctly encoded."
        );
      for (
        var r, i, a = 0, u = 0, s = "";
        (i = t.charAt(u++));
        ~i && ((r = a % 4 ? 64 * r + i : i), a++ % 4)
          ? (s += String.fromCharCode(255 & (r >> ((-2 * a) & 6))))
          : 0
      )
        i = o.indexOf(i);
      return s;
    }
    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (n.prototype = new Error()),
      (n.prototype.name = "InvalidCharacterError"),
      (e.exports =
        ("undefined" != typeof window &&
          window.atob &&
          window.atob.bind(window)) ||
        r);
  },
  function(e, t, n) {
    n(140);
    var r = n(0).Object;
    e.exports = function(e, t, n) {
      return r.defineProperty(e, t, n);
    };
  },
  function(e, t, n) {
    var r = n(2);
    r(r.S + r.F * !n(9), "Object", { defineProperty: n(12).f });
  },
  function(e, t) {
    e.exports = "v1.0.0-22682-g1a1fad86b3\n";
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : document.head;
      "string" == typeof e && (e = [e]);
      try {
        var n = i("prefetch", e, t);
        t.appendChild(o(n));
      } catch (e) {}
    }
    function o(e) {
      var t = document.createDocumentFragment();
      return (
        e.forEach(function(e) {
          return t.appendChild(e);
        }),
        t
      );
    }
    function i(e, t, n) {
      return t.filter(a(n)).map(function(t) {
        var n = document.createElement("link");
        return (n.rel = e), (n.href = t), n;
      });
    }
    function a(e) {
      var t = {},
        n = !0,
        r = !1,
        o = void 0;
      try {
        for (
          var i, a = s()(e.querySelectorAll('link[rel="prefetch"]'));
          !(n = (i = a.next()).done);
          n = !0
        ) {
          var u = i.value;
          t[u.href] = !0;
        }
      } catch (e) {
        (r = !0), (o = e);
      } finally {
        try {
          !n && a.return && a.return();
        } finally {
          if (r) throw o;
        }
      }
      return function(e) {
        return !t[e];
      };
    }
    t.a = r;
    var u = n(67),
      s = n.n(u);
    n(152);
  },
  function(e, t, n) {
    n(24), n(27), (e.exports = n(151));
  },
  function(e, t, n) {
    "use strict";
    var r = n(145),
      o = n(95),
      i = n(30),
      a = n(25);
    (e.exports = n(70)(
      Array,
      "Array",
      function(e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function() {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), o(1))
          : "keys" == t
          ? o(0, n)
          : "values" == t
          ? o(0, e[n])
          : o(0, [n, e[n]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function(e, t) {
    e.exports = function() {};
  },
  function(e, t, n) {
    "use strict";
    var r = n(51),
      o = n(38),
      i = n(41),
      a = {};
    n(20)(a, n(5)("iterator"), function() {
      return this;
    }),
      (e.exports = function(e, t, n) {
        (e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator");
      });
  },
  function(e, t, n) {
    var r = n(12),
      o = n(13),
      i = n(31);
    e.exports = n(9)
      ? Object.defineProperties
      : function(e, t) {
          o(e);
          for (var n, a = i(t), u = a.length, s = 0; u > s; )
            r.f(e, (n = a[s++]), t[n]);
          return e;
        };
  },
  function(e, t, n) {
    var r = n(25),
      o = n(52),
      i = n(149);
    e.exports = function(e) {
      return function(t, n, a) {
        var u,
          s = r(t),
          c = o(s.length),
          f = i(a, c);
        if (e && n != n) {
          for (; c > f; ) if ((u = s[f++]) != u) return !0;
        } else
          for (; c > f; f++)
            if ((e || f in s) && s[f] === n) return e || f || 0;
        return !e && -1;
      };
    };
  },
  function(e, t, n) {
    var r = n(72),
      o = Math.max,
      i = Math.min;
    e.exports = function(e, t) {
      return (e = r(e)), e < 0 ? o(e + t, 0) : i(e, t);
    };
  },
  function(e, t, n) {
    var r = n(72),
      o = n(69);
    e.exports = function(e) {
      return function(t, n) {
        var i,
          a,
          u = String(o(t)),
          s = r(n),
          c = u.length;
        return s < 0 || s >= c
          ? e
            ? ""
            : void 0
          : ((i = u.charCodeAt(s)),
            i < 55296 ||
            i > 56319 ||
            s + 1 === c ||
            (a = u.charCodeAt(s + 1)) < 56320 ||
            a > 57343
              ? e
                ? u.charAt(s)
                : i
              : e
              ? u.slice(s, s + 2)
              : a - 56320 + ((i - 55296) << 10) + 65536);
      };
    };
  },
  function(e, t, n) {
    var r = n(13),
      o = n(76);
    e.exports = n(0).getIterator = function(e) {
      var t = o(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return r(t.call(e));
    };
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = [].concat(e.core || []);
      return (
        u()(t).forEach(function(r) {
          if (e[r]) {
            var o = e[r][t[r]];
            o instanceof Array ? n.push.apply(n, i()(o)) : o && n.push(o);
          }
        }),
        n
      );
    }
    t.a = r;
    var o = n(32),
      i = n.n(o),
      a = n(14),
      u = n.n(a);
  },
  function(e, t, n) {
    e.exports = { default: n(154), __esModule: !0 };
  },
  function(e, t, n) {
    n(27), n(155), (e.exports = n(0).Array.from);
  },
  function(e, t, n) {
    "use strict";
    var r = n(16),
      o = n(2),
      i = n(26),
      a = n(99),
      u = n(100),
      s = n(52),
      c = n(156),
      f = n(76);
    o(
      o.S +
        o.F *
          !n(101)(function(e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function(e) {
          var t,
            n,
            o,
            l,
            d = i(e),
            p = "function" == typeof this ? this : Array,
            h = arguments.length,
            v = h > 1 ? arguments[1] : void 0,
            y = void 0 !== v,
            g = 0,
            m = f(d);
          if (
            (y && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
            void 0 == m || (p == Array && u(m)))
          )
            for (t = s(d.length), n = new p(t); t > g; g++)
              c(n, g, y ? v(d[g], g) : d[g]);
          else
            for (l = m.call(d), n = new p(); !(o = l.next()).done; g++)
              c(n, g, y ? a(l, v, [o.value, g], !0) : o.value);
          return (n.length = g), n;
        },
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(12),
      o = n(38);
    e.exports = function(e, t, n) {
      t in e ? r.f(e, t, o(0, n)) : (e[t] = n);
    };
  },
  function(e, t, n) {
    n(158), (e.exports = n(0).Object.keys);
  },
  function(e, t, n) {
    var r = n(26),
      o = n(31);
    n(102)("keys", function() {
      return function(e) {
        return o(r(e));
      };
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(32),
      a = n.n(i),
      u = n(18),
      s = n.n(u),
      c = n(11),
      f = n.n(c),
      l = n(108),
      d = n(109),
      p = this,
      h = function(e, t) {
        Object(l.a)()(f()({ event: e, id: Object(d.a)(), message: f()(t) }));
      },
      v = function(e) {
        return !!Object(l.a)(e);
      },
      y = (function() {
        var e = s()(
          o.a.mark(function e(t) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            var u;
            return o.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(u = Object(l.a)(t))) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", u.apply(void 0, a()(r)));
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              p
            );
          })
        );
        return function(t) {
          return e.apply(this, arguments);
        };
      })();
    t.a = { sendMessage: h, isSupportedMethod: v, callMethod: y };
  },
  function(e, t, n) {
    var r =
        (function() {
          return this;
        })() || Function("return this")(),
      o =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      i = o && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (e.exports = n(161)), o))
      r.regeneratorRuntime = i;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (e) {
        r.regeneratorRuntime = void 0;
      }
  },
  function(e, t) {
    !(function(t) {
      "use strict";
      function n(e, t, n, r) {
        var i = t && t.prototype instanceof o ? t : o,
          a = Object.create(i.prototype),
          u = new p(r || []);
        return (a._invoke = c(e, n, u)), a;
      }
      function r(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      function o() {}
      function i() {}
      function a() {}
      function u(e) {
        ["next", "throw", "return"].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e);
          };
        });
      }
      function s(e) {
        function t(n, o, i, a) {
          var u = r(e[n], e, o);
          if ("throw" !== u.type) {
            var s = u.arg,
              c = s.value;
            return c && "object" == typeof c && m.call(c, "__await")
              ? Promise.resolve(c.__await).then(
                  function(e) {
                    t("next", e, i, a);
                  },
                  function(e) {
                    t("throw", e, i, a);
                  }
                )
              : Promise.resolve(c).then(function(e) {
                  (s.value = e), i(s);
                }, a);
          }
          a(u.arg);
        }
        function n(e, n) {
          function r() {
            return new Promise(function(r, o) {
              t(e, n, r, o);
            });
          }
          return (o = o ? o.then(r, r) : r());
        }
        var o;
        this._invoke = n;
      }
      function c(e, t, n) {
        var o = O;
        return function(i, a) {
          if (o === P) throw new Error("Generator is already running");
          if (o === T) {
            if ("throw" === i) throw a;
            return v();
          }
          for (n.method = i, n.arg = a; ; ) {
            var u = n.delegate;
            if (u) {
              var s = f(u, n);
              if (s) {
                if (s === I) continue;
                return s;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (o === O) throw ((o = T), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            o = P;
            var c = r(e, t, n);
            if ("normal" === c.type) {
              if (((o = n.done ? T : k), c.arg === I)) continue;
              return { value: c.arg, done: n.done };
            }
            "throw" === c.type &&
              ((o = T), (n.method = "throw"), (n.arg = c.arg));
          }
        };
      }
      function f(e, t) {
        var n = e.iterator[t.method];
        if (n === y) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = y),
              f(e, t),
              "throw" === t.method)
            )
              return I;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return I;
        }
        var o = r(n, e.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), I;
        var i = o.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = y)),
              (t.delegate = null),
              I)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            I);
      }
      function l(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function d(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function p(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(l, this),
          this.reset(!0);
      }
      function h(e) {
        if (e) {
          var t = e[w];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                for (; ++n < e.length; )
                  if (m.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = y), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: v };
      }
      function v() {
        return { value: y, done: !0 };
      }
      var y,
        g = Object.prototype,
        m = g.hasOwnProperty,
        _ = "function" == typeof Symbol ? Symbol : {},
        w = _.iterator || "@@iterator",
        b = _.asyncIterator || "@@asyncIterator",
        E = _.toStringTag || "@@toStringTag",
        A = "object" == typeof e,
        S = t.regeneratorRuntime;
      if (S) return void (A && (e.exports = S));
      (S = t.regeneratorRuntime = A ? e.exports : {}), (S.wrap = n);
      var O = "suspendedStart",
        k = "suspendedYield",
        P = "executing",
        T = "completed",
        I = {},
        C = {};
      C[w] = function() {
        return this;
      };
      var R = Object.getPrototypeOf,
        L = R && R(R(h([])));
      L && L !== g && m.call(L, w) && (C = L);
      var x = (a.prototype = o.prototype = Object.create(C));
      (i.prototype = x.constructor = a),
        (a.constructor = i),
        (a[E] = i.displayName = "GeneratorFunction"),
        (S.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === i || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (S.mark = function(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, a)
              : ((e.__proto__ = a), E in e || (e[E] = "GeneratorFunction")),
            (e.prototype = Object.create(x)),
            e
          );
        }),
        (S.awrap = function(e) {
          return { __await: e };
        }),
        u(s.prototype),
        (s.prototype[b] = function() {
          return this;
        }),
        (S.AsyncIterator = s),
        (S.async = function(e, t, r, o) {
          var i = new s(n(e, t, r, o));
          return S.isGeneratorFunction(t)
            ? i
            : i.next().then(function(e) {
                return e.done ? e.value : i.next();
              });
        }),
        u(x),
        (x[E] = "Generator"),
        (x[w] = function() {
          return this;
        }),
        (x.toString = function() {
          return "[object Generator]";
        }),
        (S.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (S.values = h),
        (p.prototype = {
          constructor: p,
          reset: function(e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = y),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = y),
              this.tryEntries.forEach(d),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  m.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = y);
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0],
              t = e.completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function(e) {
            function t(t, r) {
              return (
                (i.type = "throw"),
                (i.arg = e),
                (n.next = t),
                r && ((n.method = "next"), (n.arg = y)),
                !!r
              );
            }
            if (this.done) throw e;
            for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r],
                i = o.completion;
              if ("root" === o.tryLoc) return t("end");
              if (o.tryLoc <= this.prev) {
                var a = m.call(o, "catchLoc"),
                  u = m.call(o, "finallyLoc");
                if (a && u) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                m.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var i = o ? o.completion : {};
            return (
              (i.type = e),
              (i.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), I)
                : this.complete(i)
            );
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              I
            );
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), d(n), I;
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  d(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(e, t, n) {
            return (
              (this.delegate = { iterator: h(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = y),
              I
            );
          },
        });
    })(
      (function() {
        return this;
      })() || Function("return this")()
    );
  },
  function(e, t, n) {
    n(42), n(27), n(24), n(163), n(167), n(168), (e.exports = n(0).Promise);
  },
  function(e, t, n) {
    "use strict";
    var r,
      o,
      i,
      a,
      u = n(40),
      s = n(4),
      c = n(16),
      f = n(54),
      l = n(2),
      d = n(8),
      p = n(37),
      h = n(56),
      v = n(33),
      y = n(103),
      g = n(104).set,
      m = n(165)(),
      _ = n(77),
      w = n(105),
      b = n(166),
      E = n(106),
      A = s.TypeError,
      S = s.process,
      O = S && S.versions,
      k = (O && O.v8) || "",
      P = s.Promise,
      T = "process" == f(S),
      I = function() {},
      C = (o = _.f),
      R = !!(function() {
        try {
          var e = P.resolve(1),
            t = ((e.constructor = {})[n(5)("species")] = function(e) {
              e(I, I);
            });
          return (
            (T || "function" == typeof PromiseRejectionEvent) &&
            e.then(I) instanceof t &&
            0 !== k.indexOf("6.6") &&
            -1 === b.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      L = function(e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t;
      },
      x = function(e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          m(function() {
            for (var r = e._v, o = 1 == e._s, i = 0; n.length > i; )
              !(function(t) {
                var n,
                  i,
                  a,
                  u = o ? t.ok : t.fail,
                  s = t.resolve,
                  c = t.reject,
                  f = t.domain;
                try {
                  u
                    ? (o || (2 == e._h && j(e), (e._h = 1)),
                      !0 === u
                        ? (n = r)
                        : (f && f.enter(),
                          (n = u(r)),
                          f && (f.exit(), (a = !0))),
                      n === t.promise
                        ? c(A("Promise-chain cycle"))
                        : (i = L(n))
                        ? i.call(n, s, c)
                        : s(n))
                    : c(r);
                } catch (e) {
                  f && !a && f.exit(), c(e);
                }
              })(n[i++]);
            (e._c = []), (e._n = !1), t && !e._h && N(e);
          });
        }
      },
      N = function(e) {
        g.call(s, function() {
          var t,
            n,
            r,
            o = e._v,
            i = M(e);
          if (
            (i &&
              ((t = w(function() {
                T
                  ? S.emit("unhandledRejection", o, e)
                  : (n = s.onunhandledrejection)
                  ? n({ promise: e, reason: o })
                  : (r = s.console) &&
                    r.error &&
                    r.error("Unhandled promise rejection", o);
              })),
              (e._h = T || M(e) ? 2 : 1)),
            (e._a = void 0),
            i && t.e)
          )
            throw t.v;
        });
      },
      M = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      j = function(e) {
        g.call(s, function() {
          var t;
          T
            ? S.emit("rejectionHandled", e)
            : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      D = function(e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          (t = t._w || t),
          (t._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          x(t, !0));
      },
      U = function(e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw A("Promise can't be resolved itself");
            (t = L(e))
              ? m(function() {
                  var r = { _w: n, _d: !1 };
                  try {
                    t.call(e, c(U, r, 1), c(D, r, 1));
                  } catch (e) {
                    D.call(r, e);
                  }
                })
              : ((n._v = e), (n._s = 1), x(n, !1));
          } catch (e) {
            D.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    R ||
      ((P = function(e) {
        h(this, P, "Promise", "_h"), p(e), r.call(this);
        try {
          e(c(U, this, 1), c(D, this, 1));
        } catch (e) {
          D.call(this, e);
        }
      }),
      (r = function(e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }),
      (r.prototype = n(57)(P.prototype, {
        then: function(e, t) {
          var n = C(y(this, P));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = T ? S.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && x(this, !1),
            n.promise
          );
        },
        catch: function(e) {
          return this.then(void 0, e);
        },
      })),
      (i = function() {
        var e = new r();
        (this.promise = e),
          (this.resolve = c(U, e, 1)),
          (this.reject = c(D, e, 1));
      }),
      (_.f = C = function(e) {
        return e === P || e === a ? new i(e) : o(e);
      })),
      l(l.G + l.W + l.F * !R, { Promise: P }),
      n(41)(P, "Promise"),
      n(107)("Promise"),
      (a = n(0).Promise),
      l(l.S + l.F * !R, "Promise", {
        reject: function(e) {
          var t = C(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      l(l.S + l.F * (u || !R), "Promise", {
        resolve: function(e) {
          return E(u && this === a ? P : this, e);
        },
      }),
      l(
        l.S +
          l.F *
            !(
              R &&
              n(101)(function(e) {
                P.all(e).catch(I);
              })
            ),
        "Promise",
        {
          all: function(e) {
            var t = this,
              n = C(t),
              r = n.resolve,
              o = n.reject,
              i = w(function() {
                var n = [],
                  i = 0,
                  a = 1;
                v(e, !1, function(e) {
                  var u = i++,
                    s = !1;
                  n.push(void 0),
                    a++,
                    t.resolve(e).then(function(e) {
                      s || ((s = !0), (n[u] = e), --a || r(n));
                    }, o);
                }),
                  --a || r(n);
              });
            return i.e && o(i.v), n.promise;
          },
          race: function(e) {
            var t = this,
              n = C(t),
              r = n.reject,
              o = w(function() {
                v(e, !1, function(e) {
                  t.resolve(e).then(n.resolve, r);
                });
              });
            return o.e && r(o.v), n.promise;
          },
        }
      );
  },
  function(e, t) {
    e.exports = function(e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function(e, t, n) {
    var r = n(4),
      o = n(104).set,
      i = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      u = r.Promise,
      s = "process" == n(39)(a);
    e.exports = function() {
      var e,
        t,
        n,
        c = function() {
          var r, o;
          for (s && (r = a.domain) && r.exit(); e; ) {
            (o = e.fn), (e = e.next);
            try {
              o();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (s)
        n = function() {
          a.nextTick(c);
        };
      else if (!i || (r.navigator && r.navigator.standalone))
        if (u && u.resolve) {
          var f = u.resolve(void 0);
          n = function() {
            f.then(c);
          };
        } else
          n = function() {
            o.call(r, c);
          };
      else {
        var l = !0,
          d = document.createTextNode("");
        new i(c).observe(d, { characterData: !0 }),
          (n = function() {
            d.data = l = !l;
          });
      }
      return function(r) {
        var o = { fn: r, next: void 0 };
        t && (t.next = o), e || ((e = o), n()), (t = o);
      };
    };
  },
  function(e, t, n) {
    var r = n(4),
      o = r.navigator;
    e.exports = (o && o.userAgent) || "";
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      o = n(0),
      i = n(4),
      a = n(103),
      u = n(106);
    r(r.P + r.R, "Promise", {
      finally: function(e) {
        var t = a(this, o.Promise || i.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function(n) {
                return u(t, e()).then(function() {
                  return n;
                });
              }
            : e,
          n
            ? function(n) {
                return u(t, e()).then(function() {
                  throw n;
                });
              }
            : e
        );
      },
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      o = n(77),
      i = n(105);
    r(r.S, "Promise", {
      try: function(e) {
        var t = o.f(this),
          n = i(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise;
      },
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(170),
      o = n(171),
      i = function(e) {
        return { checkFeatures: Object(r.a)(e), external: Object(o.a)(e) };
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = n(14),
      a = n.n(i),
      u = function() {
        return "kp_shopping_browser_cb_" + Date.now();
      },
      s = function(e) {
        return "[object Object]" === {}.toString.call(e);
      },
      c = function(e) {
        return s(e)
          ? a()(e).filter(function(t) {
              return e[t];
            })
          : [];
      },
      f = function(e, t, n) {
        return new o.a(function(r) {
          var o = u();
          (n[o] = function(e) {
            r(c(e));
          }),
            e.sendMessage("checkFeatures", { features: t, handlerName: o });
        });
      },
      l = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window;
        return function(n) {
          return e.isSupportedMethod("checkFeatures")
            ? e
                .callMethod("checkFeatures", n)
                .then(JSON.parse)
                .then(c)
            : f(e, n, t);
        };
      };
    t.a = l;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t) {
        e.sendMessage("external", t);
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(18),
      a = n.n(i),
      u = n(1),
      s = n.n(u),
      c = n(32),
      f = n.n(c),
      l = n(110),
      d = n(79),
      p = n(109),
      h = n(111),
      v = this,
      y = function(e, t, n) {
        return e.reduce(function(e, r) {
          var o = r.minimumSupportedNativeVersion,
            i = r.name;
          return !o || Object(h.a)(o, t, n) ? [].concat(f()(e), [i]) : e;
        }, []);
      },
      g = function(e, t) {
        return function(n) {
          var r = Object(p.a)(),
            o = { message_id: r, message_type: n, session_krn: Object(d.a)(t) };
          return e.external({ eventName: n, eventData: o }), r;
        };
      },
      m = function(e) {
        return function(t) {
          return t.map(e);
        };
      },
      _ = function(e) {
        return new s.a(function(t) {
          e.setTimeout(t, l.a.initTimeout, []);
        });
      },
      w = function(e, t, n) {
        return s.a.race([e.checkFeatures(t), _(n)]);
      },
      b = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window;
        return (function() {
          var n = a()(
            o.a.mark(function n(r, i) {
              var a, u, s, c, d, p;
              return o.a.wrap(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = l.a.features),
                          (u = a.checkBeforeSend),
                          (s = a.alwaysSend),
                          (c = y(u, i, t)),
                          (d = y(s, i, t)),
                          (p = m(g(e, r))),
                          (n.t0 = []),
                          (n.t1 = f.a),
                          (n.next = 8),
                          w(e, c, t).then(p)
                        );
                      case 8:
                        return (
                          (n.t2 = n.sent),
                          (n.t3 = (0, n.t1)(n.t2)),
                          (n.t4 = f()(p(d))),
                          n.abrupt("return", n.t0.concat.call(n.t0, n.t3, n.t4))
                        );
                      case 12:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                v
              );
            })
          );
          return function(e, t) {
            return n.apply(this, arguments);
          };
        })();
      };
    t.a = b;
  },
  function(e, t, n) {
    e.exports = { default: n(174), __esModule: !0 };
  },
  function(e, t, n) {
    n(24), n(27), (e.exports = n(175));
  },
  function(e, t, n) {
    var r = n(54),
      o = n(5)("iterator"),
      i = n(30);
    e.exports = n(0).isIterable = function(e) {
      var t = Object(e);
      return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t));
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(78),
      o = n(79),
      i = function(e) {
        return function(t) {
          var n = { session_krn: Object(o.a)(t), session_id: t.sessionID };
          e.external({ eventName: r.a.SESSION_INITIATED, eventData: n });
        };
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    var r = n(78),
      o = n(79),
      i = function(e) {
        return function(t) {
          var n = { session_krn: Object(o.a)(t), session_id: t.sessionID };
          e.external({ eventName: r.a.SESSION_APPROVED, eventData: n });
        };
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    var r = n(108),
      o = n(111),
      i = n(110),
      a = i.a.minimumSupportedNativeVersion,
      u = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window;
        try {
          return Object(o.a)(a, e, t) && !!Object(r.a)();
        } catch (e) {
          return !1;
        }
      };
    t.a = u;
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : document.scripts;
      try {
        var t = o(function(e) {
            var t = e.src;
            return u.test(t);
          }, e),
          n = e[e.length - 1];
        if (t && t[0] && t[0].src) return t[0].src;
        if (n) return n.src;
      } catch (e) {}
    }
    function o(e, t) {
      return [].concat(a()(t)).filter(e);
    }
    t.a = r;
    var i = n(32),
      a = n.n(i),
      u = /^https?:\/\/[^/]*klarna[^/]*(?:\/kp)?\/lib\/v[^/]+\/api\.js(?:\?.*)?$/;
  },
  function(e, t, n) {
    n(181), (e.exports = n(0).Object.getPrototypeOf);
  },
  function(e, t, n) {
    var r = n(26),
      o = n(98);
    n(102)("getPrototypeOf", function() {
      return function(e) {
        return o(r(e));
      };
    });
  },
  function(e, t, n) {
    e.exports = { default: n(183), __esModule: !0 };
  },
  function(e, t, n) {
    n(27), n(24), (e.exports = n(80).f("iterator"));
  },
  function(e, t, n) {
    e.exports = { default: n(185), __esModule: !0 };
  },
  function(e, t, n) {
    n(186), n(42), n(189), n(190), (e.exports = n(0).Symbol);
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      o = n(21),
      i = n(9),
      a = n(2),
      u = n(71),
      s = n(43).KEY,
      c = n(23),
      f = n(74),
      l = n(41),
      d = n(53),
      p = n(5),
      h = n(80),
      v = n(81),
      y = n(187),
      g = n(115),
      m = n(13),
      _ = n(8),
      w = n(26),
      b = n(25),
      E = n(66),
      A = n(38),
      S = n(51),
      O = n(188),
      k = n(117),
      P = n(82),
      T = n(12),
      I = n(31),
      C = k.f,
      R = T.f,
      L = O.f,
      x = r.Symbol,
      N = r.JSON,
      M = N && N.stringify,
      j = p("_hidden"),
      D = p("toPrimitive"),
      U = {}.propertyIsEnumerable,
      H = f("symbol-registry"),
      F = f("symbols"),
      B = f("op-symbols"),
      K = Object.prototype,
      W = "function" == typeof x && !!P.f,
      V = r.QObject,
      Y = !V || !V.prototype || !V.prototype.findChild,
      J =
        i &&
        c(function() {
          return (
            7 !=
            S(
              R({}, "a", {
                get: function() {
                  return R(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function(e, t, n) {
              var r = C(K, t);
              r && delete K[t], R(e, t, n), r && e !== K && R(K, t, r);
            }
          : R,
      G = function(e) {
        var t = (F[e] = S(x.prototype));
        return (t._k = e), t;
      },
      z =
        W && "symbol" == typeof x.iterator
          ? function(e) {
              return "symbol" == typeof e;
            }
          : function(e) {
              return e instanceof x;
            },
      q = function(e, t, n) {
        return (
          e === K && q(B, t, n),
          m(e),
          (t = E(t, !0)),
          m(n),
          o(F, t)
            ? (n.enumerable
                ? (o(e, j) && e[j][t] && (e[j][t] = !1),
                  (n = S(n, { enumerable: A(0, !1) })))
                : (o(e, j) || R(e, j, A(1, {})), (e[j][t] = !0)),
              J(e, t, n))
            : R(e, t, n)
        );
      },
      Z = function(e, t) {
        m(e);
        for (var n, r = y((t = b(t))), o = 0, i = r.length; i > o; )
          q(e, (n = r[o++]), t[n]);
        return e;
      },
      X = function(e, t) {
        return void 0 === t ? S(e) : Z(S(e), t);
      },
      Q = function(e) {
        var t = U.call(this, (e = E(e, !0)));
        return (
          !(this === K && o(F, e) && !o(B, e)) &&
          (!(t || !o(this, e) || !o(F, e) || (o(this, j) && this[j][e])) || t)
        );
      },
      $ = function(e, t) {
        if (((e = b(e)), (t = E(t, !0)), e !== K || !o(F, t) || o(B, t))) {
          var n = C(e, t);
          return (
            !n || !o(F, t) || (o(e, j) && e[j][t]) || (n.enumerable = !0), n
          );
        }
      },
      ee = function(e) {
        for (var t, n = L(b(e)), r = [], i = 0; n.length > i; )
          o(F, (t = n[i++])) || t == j || t == s || r.push(t);
        return r;
      },
      te = function(e) {
        for (
          var t, n = e === K, r = L(n ? B : b(e)), i = [], a = 0;
          r.length > a;

        )
          !o(F, (t = r[a++])) || (n && !o(K, t)) || i.push(F[t]);
        return i;
      };
    W ||
      ((x = function() {
        if (this instanceof x) throw TypeError("Symbol is not a constructor!");
        var e = d(arguments.length > 0 ? arguments[0] : void 0),
          t = function(n) {
            this === K && t.call(B, n),
              o(this, j) && o(this[j], e) && (this[j][e] = !1),
              J(this, e, A(1, n));
          };
        return i && Y && J(K, e, { configurable: !0, set: t }), G(e);
      }),
      u(x.prototype, "toString", function() {
        return this._k;
      }),
      (k.f = $),
      (T.f = q),
      (n(116).f = O.f = ee),
      (n(44).f = Q),
      (P.f = te),
      i && !n(40) && u(K, "propertyIsEnumerable", Q, !0),
      (h.f = function(e) {
        return G(p(e));
      })),
      a(a.G + a.W + a.F * !W, { Symbol: x });
    for (
      var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        re = 0;
      ne.length > re;

    )
      p(ne[re++]);
    for (var oe = I(p.store), ie = 0; oe.length > ie; ) v(oe[ie++]);
    a(a.S + a.F * !W, "Symbol", {
      for: function(e) {
        return o(H, (e += "")) ? H[e] : (H[e] = x(e));
      },
      keyFor: function(e) {
        if (!z(e)) throw TypeError(e + " is not a symbol!");
        for (var t in H) if (H[t] === e) return t;
      },
      useSetter: function() {
        Y = !0;
      },
      useSimple: function() {
        Y = !1;
      },
    }),
      a(a.S + a.F * !W, "Object", {
        create: X,
        defineProperty: q,
        defineProperties: Z,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: ee,
        getOwnPropertySymbols: te,
      });
    var ae = c(function() {
      P.f(1);
    });
    a(a.S + a.F * ae, "Object", {
      getOwnPropertySymbols: function(e) {
        return P.f(w(e));
      },
    }),
      N &&
        a(
          a.S +
            a.F *
              (!W ||
                c(function() {
                  var e = x();
                  return (
                    "[null]" != M([e]) ||
                    "{}" != M({ a: e }) ||
                    "{}" != M(Object(e))
                  );
                })),
          "JSON",
          {
            stringify: function(e) {
              for (var t, n, r = [e], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
              if (((n = t = r[1]), (_(t) || void 0 !== e) && !z(e)))
                return (
                  g(t) ||
                    (t = function(e, t) {
                      if (
                        ("function" == typeof n && (t = n.call(this, e, t)),
                        !z(t))
                      )
                        return t;
                    }),
                  (r[1] = t),
                  M.apply(N, r)
                );
            },
          }
        ),
      x.prototype[D] || n(20)(x.prototype, D, x.prototype.valueOf),
      l(x, "Symbol"),
      l(Math, "Math", !0),
      l(r.JSON, "JSON", !0);
  },
  function(e, t, n) {
    var r = n(31),
      o = n(82),
      i = n(44);
    e.exports = function(e) {
      var t = r(e),
        n = o.f;
      if (n)
        for (var a, u = n(e), s = i.f, c = 0; u.length > c; )
          s.call(e, (a = u[c++])) && t.push(a);
      return t;
    };
  },
  function(e, t, n) {
    var r = n(25),
      o = n(116).f,
      i = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [],
      u = function(e) {
        try {
          return o(e);
        } catch (e) {
          return a.slice();
        }
      };
    e.exports.f = function(e) {
      return a && "[object Window]" == i.call(e) ? u(e) : o(r(e));
    };
  },
  function(e, t, n) {
    n(81)("asyncIterator");
  },
  function(e, t, n) {
    n(81)("observable");
  },
  function(e, t, n) {
    e.exports = { default: n(192), __esModule: !0 };
  },
  function(e, t, n) {
    n(193), (e.exports = n(0).Object.setPrototypeOf);
  },
  function(e, t, n) {
    var r = n(2);
    r(r.S, "Object", { setPrototypeOf: n(194).set });
  },
  function(e, t, n) {
    var r = n(8),
      o = n(13),
      i = function(e, t) {
        if ((o(e), !r(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function(e, t, r) {
              try {
                (r = n(16)(
                  Function.call,
                  n(117).f(Object.prototype, "__proto__").set,
                  2
                )),
                  r(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function(e, n) {
                return i(e, n), t ? (e.__proto__ = n) : r(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: i,
    };
  },
  function(e, t, n) {
    e.exports = { default: n(196), __esModule: !0 };
  },
  function(e, t, n) {
    n(197);
    var r = n(0).Object;
    e.exports = function(e, t) {
      return r.create(e, t);
    };
  },
  function(e, t, n) {
    var r = n(2);
    r(r.S, "Object", { create: n(51) });
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return {
        configure: function(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          o(p[e], t) && ((p[e] = Object(d.a)(a(p[e], t))), (h[e] = n));
        },
        event: function(n) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          p[e] && p[e].event(n, l()({}, t, h[e], r));
        },
      };
    }
    function o(e, t) {
      return !e || i(e, t);
    }
    function i(e, t) {
      var n = e.getConfig(),
        r = u(t);
      return (
        c()(r).filter(function(e) {
          return r[e] !== n[e];
        }).length > 0
      );
    }
    function a(e, t) {
      return l()({}, u(t), { instanceId: e && e.getConfig().instanceId });
    }
    function u(e) {
      return {
        baseUrl: e.client_event_base_url,
        client: "kp",
        clientVersion: "v1.10.0-734-g03a211a9",
        environment: e.environment,
        sessionId: e.session_id,
      };
    }
    t.a = r;
    var s = n(14),
      c = n.n(s),
      f = n(3),
      l = n.n(f),
      d = n(201),
      p = {},
      h = {};
  },
  function(e, t, n) {
    n(200), (e.exports = n(0).Object.assign);
  },
  function(e, t, n) {
    var r = n(2);
    r(r.S + r.F, "Object", { assign: n(119) });
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.baseUrl,
        n = e.environment;
      return (
        t ||
          console.log(
            "[Error] client_event_base_url not provided in the clientToken!"
          ),
        i(n) && t ? Object(a.a)(e) : o(e)
      );
    }
    function o(e) {
      return (
        console.info(
          "[Tracking (disabled)] Setting up fake instance with config",
          e
        ),
        {
          event: function() {
            for (var t, n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            (t = console).info.apply(
              t,
              ["[Tracking (disabled)]"].concat(r, [{ config: e }])
            );
          },
          getConfig: function() {
            return e;
          },
        }
      );
    }
    function i(e) {
      return ["production", "playground", "staging"].indexOf(e) > -1;
    }
    t.a = r;
    var a = n(202);
  },
  function(e, t, n) {
    "use strict";
    var r = n(203);
    t.a = r.a;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      function t(e, t) {
        var n = u()(t)
          .sort()
          .map(function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
          })
          .join("&");
        return "" + s + d + p + "/" + h + "/" + e + "?" + n;
      }
      function n(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) throw new TypeError("expected `name` as first parameter");
        n = i()({}, n, {
          iid: g,
          sid: v,
          timestamp: n.timestamp || new Date().getTime(),
        });
        var r = t(e, n);
        l.a.isSupported(o) ? l.a.create(r, o) : f.a.create(r, o);
      }
      function r() {
        return {
          baseUrl: s,
          client: p,
          clientVersion: h,
          sessionId: v,
          instanceId: g,
        };
      }
      var o =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      if ("object" !== (void 0 === e ? "undefined" : c()(e)) || !e)
        throw new TypeError("expected configuration object");
      var a = e.baseUrl,
        s = void 0 === a ? "https://evt.klarna.com" : a,
        p = e.client,
        h = e.clientVersion,
        v = e.sessionId,
        y = e.instanceId,
        g = void 0 === y ? Math.floor(9e3 * Math.random()) + 1e3 : y;
      if ("string" != typeof p)
        throw new TypeError("expected `client` in the configuration object");
      if ("string" != typeof h)
        throw new TypeError(
          "expected `clientVersion` in the configuration object"
        );
      if ("string" != typeof v)
        throw new TypeError("expected `sessionId` in the configuration object");
      return { event: n, getConfig: r };
    }
    t.a = r;
    var o = n(3),
      i = n.n(o),
      a = n(14),
      u = n.n(a),
      s = n(59),
      c = n.n(s),
      f = n(204),
      l = n(205),
      d = "/v1/";
  },
  function(e, t, n) {
    "use strict";
    t.a = {
      create: function(e, t) {
        new t.Image().src = e;
      },
    };
  },
  function(e, t, n) {
    "use strict";
    t.a = {
      create: function(e, t) {
        t.navigator.sendBeacon(e);
      },
      isSupported: function(e) {
        return !!e.navigator && !!e.navigator.sendBeacon;
      },
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "API_SETUP", function() {
        return r;
      }),
      n.d(t, "INITIALIZED_FLAG_READ", function() {
        return o;
      }),
      n.d(t, "AUTHORIZE_CALLED", function() {
        return i;
      }),
      n.d(t, "AUTHORIZE_COMPLETED", function() {
        return a;
      }),
      n.d(t, "AUTHORIZE_FAILED", function() {
        return u;
      }),
      n.d(t, "FULLSCREEN_IFRAME_CREATED", function() {
        return s;
      }),
      n.d(t, "FULLSCREEN_IFRAME_LOADED", function() {
        return c;
      }),
      n.d(t, "FULLSCREEN_IFRAME_TIMED_OUT", function() {
        return f;
      }),
      n.d(t, "FULLSCREEN_IFRAME_AUTO_REMOVED", function() {
        return l;
      }),
      n.d(t, "FULLSCREEN_IFRAME_AUTO_REMOVAL_FAILED", function() {
        return d;
      }),
      n.d(t, "INIT_CALLED", function() {
        return p;
      }),
      n.d(t, "LOAD_CALLED", function() {
        return h;
      }),
      n.d(t, "LOAD_COMPLETED", function() {
        return v;
      }),
      n.d(t, "LOAD_FAILED", function() {
        return y;
      }),
      n.d(t, "LOAD_NATIVE_HOOK_API_HANDSHAKE_WAIT_STARTED", function() {
        return g;
      }),
      n.d(t, "LOAD_NATIVE_HOOK_API_HANDSHAKE_WAIT_FINISHED", function() {
        return m;
      }),
      n.d(t, "LOAD_NATIVE_HOOK_API_HANDSHAKE_WAIT_TIMED_OUT", function() {
        return _;
      }),
      n.d(t, "LOAD_PAYMENT_REVIEW_CALLED", function() {
        return w;
      }),
      n.d(t, "LOAD_PAYMENT_REVIEW_COMPLETED", function() {
        return b;
      }),
      n.d(t, "LOAD_PAYMENT_REVIEW_FAILED", function() {
        return E;
      }),
      n.d(t, "MAIN_IFRAME_CREATED", function() {
        return A;
      }),
      n.d(t, "MAIN_IFRAME_LOADED", function() {
        return S;
      }),
      n.d(t, "MAIN_IFRAME_VISIBLE", function() {
        return O;
      }),
      n.d(t, "MAIN_IFRAME_TIMED_OUT", function() {
        return k;
      }),
      n.d(t, "MAIN_IFRAME_REMOVED", function() {
        return P;
      }),
      n.d(t, "MAIN_IFRAME_REMOVAL_POLL_FAILED", function() {
        return T;
      }),
      n.d(t, "DEVICE_RECOGNITION_IFRAME_CREATED", function() {
        return I;
      }),
      n.d(t, "DEVICE_RECOGNITION_IFRAME_LOADED", function() {
        return C;
      }),
      n.d(t, "DEVICE_RECOGNITION_IFRAME_TIMED_OUT", function() {
        return R;
      }),
      n.d(t, "REAUTHORIZE_CALLED", function() {
        return L;
      }),
      n.d(t, "REAUTHORIZE_COMPLETED", function() {
        return x;
      }),
      n.d(t, "REAUTHORIZE_FAILED", function() {
        return N;
      }),
      n.d(t, "FINALIZE_CALLED", function() {
        return M;
      }),
      n.d(t, "FINALIZE_COMPLETED", function() {
        return j;
      }),
      n.d(t, "FINALIZE_FAILED", function() {
        return D;
      }),
      n.d(t, "ON_SHOW_EXTERNAL_DOCUMENT_HANDLER_CALLED", function() {
        return U;
      }),
      n.d(t, "ON_SHOW_EXTERNAL_DOCUMENT_FALLBACK_CALLED", function() {
        return H;
      }),
      n.d(t, "ON_REDIRECT_HANDLER_CALLED", function() {
        return F;
      }),
      n.d(t, "AUTHORIZE_UNEXPECTED_ERROR", function() {
        return B;
      }),
      n.d(t, "INVALID_CLIENT_TOKEN_SIGNATURE", function() {
        return K;
      }),
      n.d(t, "PAGE_ALREADY_LOADED", function() {
        return W;
      }),
      n.d(t, "PAGE_LOADED", function() {
        return V;
      }),
      n.d(t, "CHECK_ENABLED_WALLETS", function() {
        return Y;
      }),
      n.d(t, "CHECK_ENABLED_WALLETS_FINISHED", function() {
        return J;
      }),
      n.d(t, "CHECK_ENABLED_WALLETS_ERROR", function() {
        return G;
      }),
      n.d(t, "SHOW_WALLET_PAYMENT_SHEET", function() {
        return z;
      }),
      n.d(t, "SHOW_WALLET_PAYMENT_SHEET_FINISHED", function() {
        return q;
      }),
      n.d(t, "SHOW_WALLET_PAYMENT_SHEET_ERROR", function() {
        return Z;
      }),
      n.d(t, "POPUP_WINDOW_OPENED", function() {
        return X;
      }),
      n.d(t, "POPUP_WINDOW_READY", function() {
        return Q;
      }),
      n.d(t, "POPUP_WINDOW_CLOSED", function() {
        return $;
      }),
      n.d(t, "POPUP_WINDOW_ERROR", function() {
        return ee;
      }),
      n.d(t, "SHOPPING_BROWSER_NATIVE_API_INIT", function() {
        return te;
      }),
      n.d(t, "SHOPPING_BROWSER_NATIVE_API_INIT_COMPLETED", function() {
        return ne;
      }),
      n.d(t, "SHOPPING_BROWSER_NATIVE_API_INIT_TIMED_OUT", function() {
        return re;
      }),
      n.d(t, "SHOPPING_BROWSER_NATIVE_API_ERROR", function() {
        return oe;
      }),
      n.d(t, "ONE_OFFERING_STATIC_FETCH_STARTED", function() {
        return ie;
      }),
      n.d(t, "ONE_OFFERING_STATIC_FETCH_COMPLETED", function() {
        return ae;
      }),
      n.d(t, "ONE_OFFERING_STATIC_FETCH_ERROR", function() {
        return ue;
      }),
      n.d(t, "ONE_OFFERING_STATIC_API_CALLED", function() {
        return se;
      }),
      n.d(t, "APF_UNHANDLED_ERROR", function() {
        return ce;
      }),
      n.d(t, "APF_ABORTED", function() {
        return fe;
      }),
      n.d(t, "APF_COMPLETED", function() {
        return le;
      }),
      n.d(t, "APF_LIB_FETCH_STARTED", function() {
        return de;
      }),
      n.d(t, "APF_LIB_FETCH_COMPLETED", function() {
        return pe;
      }),
      n.d(t, "APF_LIB_FETCH_ERROR", function() {
        return he;
      }),
      n.d(t, "APF_LIB_UNAVAILABLE", function() {
        return ve;
      }),
      n.d(t, "APF_TRIGGERED", function() {
        return ye;
      }),
      n.d(t, "REDIRECT_URL_VALIDATION_FAILED", function() {
        return ge;
      });
    var r = "api_setup",
      o = "initialized_flag_read",
      i = "authorize_called",
      a = "authorize_completed",
      u = "authorize_failed",
      s = "fullscreen_iframe_created",
      c = "fullscreen_iframe_loaded",
      f = "fullscreen_iframe_timed_out",
      l = "fullscreen_iframe_auto_removed",
      d = "fullscreen_iframe_auto_removal_failed",
      p = "init_called",
      h = "load_called",
      v = "load_completed",
      y = "load_failed",
      g = "load_nhapi_handshake_wait_started",
      m = "load_nhapi_handshake_wait_finished",
      _ = "load_nhapi_handshake_wait_timed_out",
      w = "load_payment_review_called",
      b = "load_payment_review_completed",
      E = "load_payment_review_failed",
      A = "main_iframe_created",
      S = "main_iframe_loaded",
      O = "main_iframe_visible",
      k = "main_iframe_timed_out",
      P = "main_iframe_removed",
      T = "main_iframe_removal_poll_failed",
      I = "dr_iframe_created",
      C = "dr_iframe_loaded",
      R = "dr_iframe_timed_out",
      L = "reauthorize_called",
      x = "reauthorize_completed",
      N = "reauthorize_failed",
      M = "finalize_called",
      j = "finalize_completed",
      D = "finalize_failed",
      U = "on_show_external_document_handler_called",
      H = "on_show_external_document_fallback_called",
      F = "on_redirect_handler_called",
      B = "authorize_unexpected_error",
      K = "invalid_client_token_signature",
      W = "page_already_loaded",
      V = "page_loaded",
      Y = "check_enabled_wallets",
      J = "check_enabled_wallets_finished",
      G = "check_enabled_wallets_error",
      z = "show_wallet_payment_sheet",
      q = "show_wallet_payment_sheet_finished",
      Z = "show_wallet_payment_sheet_error",
      X = "popup_window_opened",
      Q = "popup_window_ready",
      $ = "popup_window_closed",
      ee = "popup_window_error",
      te = "sbnapi_init",
      ne = "sbnapi_init_completed",
      re = "sbnapi_init_timed_out",
      oe = "sbnapi_error",
      ie = "one_offering_static_fetch_started",
      ae = "one_offering_static_fetch_completed",
      ue = "one_offering_static_fetch_error",
      se = "one_offering_static_api_called",
      ce = "apf_unhandled_error",
      fe = "apf_aborted",
      le = "apf_completed",
      de = "apf_lib_fetch_started",
      pe = "apf_lib_fetch_completed",
      he = "apf_lib_fetch_error",
      ve = "apf_lib_unavailable",
      ye = "apf_triggered",
      ge = "redirect_url_validation_failed";
  },
  function(e, t, n) {
    "use strict";
    var r = n(49),
      o = n.n(r),
      i = n(3),
      a = n.n(i),
      u = n(59),
      s = n.n(u),
      c = n(34),
      f = function(e) {
        try {
          var t = void 0;
          try {
            t = JSON.parse(c.a.get("__klarna_experiments__"));
          } catch (e) {}
          return (t || e || []).reduce(function(e, t) {
            return "object" === (void 0 === t ? "undefined" : s()(t)) &&
              (t.reference || t.name)
              ? a()({}, e, o()({}, t.reference || t.name, t.variate || !0))
              : e;
          }, {});
        } catch (e) {}
        return {};
      };
    t.a = f;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e, t) {
      if ("string" == typeof t)
        try {
          var n = e.find(function(e) {
              return "kp-client-app-version" === (e.name || e.reference);
            }),
            r = n || {},
            o = r.parameters;
          return (void 0 === o ? {} : o).version || t;
        } catch (e) {}
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(1),
      a = n.n(i),
      u = n(18),
      s = n.n(u);
    t.a = (function() {
      function e(e) {
        return t.apply(this, arguments);
      }
      var t = s()(
        o.a.mark(function e(t) {
          return o.a.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new a.a(function(e, n) {
                        var r = document.createElement("script");
                        (r.src = t),
                          r.addEventListener("load", function() {
                            return e();
                          }),
                          r.addEventListener("error", function(e) {
                            return n(e);
                          }),
                          document.body.appendChild(r);
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
      return e;
    })();
  },
  function(e, t, n) {
    "use strict";
    var r = n(7),
      o = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document.body,
          t = document.createElement("link");
        (t.rel = "stylesheet"),
          (t.href = r.a.klarnaFontsCssUrl),
          e.appendChild(t);
      };
    t.a = o;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = n(212),
      a = n.n(i),
      u = n(22),
      s = n.n(u),
      c = n(221),
      f = n(222),
      l = [],
      d = {},
      p = {},
      h = void 0,
      v = function() {
        for (; l.length; ) {
          var e = l.shift(),
            t = s()(e, 3),
            n = t[0],
            r = t[1],
            o = t[2];
          g(n, r).then(o);
        }
      },
      y = function() {
        return Object(f.a)().then(function(e) {
          e.addReceiver("KlarnaPayments", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.action,
              n = e.messageId,
              r = e.params;
            "function" == typeof d[n] && d[n](r || {}),
              p[t] instanceof a.a &&
                p[t].forEach(function(e) {
                  "function" == typeof e && e(r || {});
                });
          }),
            (h = e),
            v();
        });
      },
      g = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return h
          ? new o.a(function(n) {
              var r = Object(c.a)();
              (d[r] = n),
                h.postMessage({
                  receiver: "Native",
                  sender: "KlarnaPayments",
                  messageId: r,
                  action: e,
                  params: t,
                });
            })
          : new o.a(function(n) {
              l.push([e, t, n]);
            });
      },
      m = function(e, t) {
        return (
          p[e] || (p[e] = new a.a()),
          p[e].add(t),
          function() {
            p[e].delete(t);
          }
        );
      };
    t.a = { init: y, callAction: g, onAction: m };
  },
  function(e, t, n) {
    e.exports = { default: n(213), __esModule: !0 };
  },
  function(e, t, n) {
    n(42), n(27), n(24), n(214), n(217), n(219), n(220), (e.exports = n(0).Set);
  },
  function(e, t, n) {
    "use strict";
    var r = n(124),
      o = n(35);
    e.exports = n(83)(
      "Set",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(e) {
          return r.def(o(this, "Set"), (e = 0 === e ? 0 : e), e);
        },
      },
      r
    );
  },
  function(e, t, n) {
    var r = n(216);
    e.exports = function(e, t) {
      return new (r(e))(t);
    };
  },
  function(e, t, n) {
    var r = n(8),
      o = n(115),
      i = n(5)("species");
    e.exports = function(e) {
      var t;
      return (
        o(e) &&
          ((t = e.constructor),
          "function" != typeof t ||
            (t !== Array && !o(t.prototype)) ||
            (t = void 0),
          r(t) && null === (t = t[i]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function(e, t, n) {
    var r = n(2);
    r(r.P + r.R, "Set", { toJSON: n(125)("Set") });
  },
  function(e, t, n) {
    var r = n(33);
    e.exports = function(e, t) {
      var n = [];
      return r(e, !1, n.push, n, t), n;
    };
  },
  function(e, t, n) {
    n(85)("Set");
  },
  function(e, t, n) {
    n(86)("Set");
  },
  function(e, t, n) {
    "use strict";
    var r = (function(e) {
      return function() {
        return String(++e);
      };
    })(0);
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = n(223),
      a = n(224),
      u = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window;
        return e.__KlarnaNativeHook
          ? o.a.resolve(e.__KlarnaNativeHook)
          : Object(i.a)(a.a.sdkBridgeScriptURL).then(function() {
              return e.__KlarnaNativeHook;
            });
      };
    t.a = u;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e4,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : document;
        return new o.a(function(r, o) {
          setTimeout(function() {
            o(new Error("Loading of " + e + " timed out."));
          }, t);
          var i = n.createElement("script");
          (i.src = e), (i.onload = r), n.body.appendChild(i);
        });
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    t.a = {
      sdkBridgeScriptURL:
        "https://x.klarnacdn.net/mobile-sdk/mobile-js-snippet/v1/app.min.js",
    };
  },
  function(e, t, n) {
    "use strict";
    var r = [],
      o = function(e) {
        Array.isArray(e) && (r = e);
      },
      i = function() {
        return r;
      },
      a = function(e) {
        return r.indexOf(e) > -1;
      };
    t.a = { set: o, get: i, has: a };
  },
  function(e, t, n) {
    "use strict";
    var r = n(227),
      o = n(228),
      i = n(229),
      a = n(230),
      u = n(231),
      s = n(232),
      c = n(233),
      f = n(234),
      l = n(235),
      d = n(236),
      p = n(237),
      h = n(238),
      v = n(239),
      y = n(240),
      g = function(e) {
        var t = e.adapter,
          n = e.featuresStore;
        return {
          fullscreenMoveWebView: Object(r.a)(t),
          fullscreenReplaceOverlay: Object(o.a)(t),
          fullscreenReplaceWebView: Object(i.a)(t),
          fullscreenRestoreWebView: Object(a.a)(t),
          getData: Object(u.a)(t),
          handshake: Object(s.a)(t, n),
          heightChanged: Object(c.a)(t),
          hideInternalBrowser: Object(f.a)(t),
          openExternalApp: Object(l.a)(t),
          openExternalBrowser: Object(d.a)(t),
          putData: Object(p.a)(t),
          setExperiments: Object(h.a)(t),
          show3DSecure: Object(v.a)(t),
          showInternalBrowser: Object(y.a)(t),
        };
      };
    t.a = g;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function() {
        return e.callAction("fullscreenMoveWebView", {
          shouldScrollToTop: "true",
        });
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function() {
        return e.callAction("fullscreenReplaceOverlay");
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function() {
        return e.callAction("fullscreenReplaceWebView");
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function() {
        return e.callAction("fullscreenRestoreWebView");
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t) {
        return e.callAction("getData", { key: t });
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        return function() {
          return e
            .callAction("handshake", {
              componentName: "KlarnaPayments",
              componentVersion: "v1.10.0-734-g03a211a9",
            })
            .then(function() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return o(t, e), e;
            });
        };
      },
      o = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = [];
        -1 !== JSON.parse(t.features || "[]").indexOf("experiments") &&
          n.push("experiments"),
          e.set(n);
      };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t) {
        return e.callAction("heightChanged", { height: String(t) });
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function() {
        return e.callAction("hideInternalBrowser");
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t) {
        return e.callAction("openExternalApp", { url: t });
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t) {
        return e.callAction("openExternalBrowser", { url: t });
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t, n) {
        return e.callAction("putData", {
          key: t,
          value: void 0 === n ? void 0 : String(n),
        });
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      o = n.n(r),
      i = function(e) {
        return function(t) {
          e.callAction("setExperiments", { experiments: o()(t) });
        };
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      return function(t) {
        return e.callAction("show3DSecure", t);
      };
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(3),
      o = n.n(r),
      i = n(1),
      a = n.n(i),
      u = n(11),
      s = n.n(u),
      c = function(e) {
        return function(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = function(t) {
              return e.callAction("showInternalBrowser", t);
            },
            i = n.hideOnUrls;
          if (Array.isArray(i) && i.filter(Boolean).length) {
            return r({ url: t, hideOnUrls: s()(i) }).then(function(t) {
              return t.success
                ? new a.a(function(t) {
                    var n = e.onAction("hideOnUrlInternalBrowser", function(e) {
                      i.indexOf(e.cause) > -1 &&
                        (n(), t(o()({}, e, { hidden: !0 })));
                    });
                  })
                : t;
            });
          }
          return r({ url: t });
        };
      };
    t.a = c;
  },
  function(e, t, n) {
    "use strict";
    var r = function() {
      return !!(arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : window
      ).__KlarnaNativeHook;
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      return (
        !!(
          e.webkit &&
          e.webkit.messageHandlers &&
          e.webkit.messageHandlers.KlarnaNativeHookMessageHandler
        ) || !!e.KlarnaNativeHookMessageHandler
      );
    };
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    var r = n(55),
      o = n(60),
      i = n(123),
      a = function(e) {
        return (
          e.scheme &&
          r.a.isSupported("production") &&
          (!Object(o.b)() || !Object(i.a)())
        );
      };
    t.a = a;
  },
  function(e, t, n) {
    "use strict";
    var r = n(64),
      o = n.n(r),
      i = n(245),
      a = n.n(i),
      u = n(45),
      s = n.n(u),
      c = n(32),
      f = n.n(c),
      l = n(251),
      d = n.n(l),
      p = n(1),
      h = n.n(p),
      v = n(3),
      y = n.n(v),
      g = n(22),
      m = n.n(g),
      _ = n(6),
      w = n(19),
      b = n(10),
      E = n(29),
      A = n(61),
      S = n(47),
      O = n(62),
      k = n(87),
      P = n(63),
      T = n(89),
      I = n(281),
      C = n(289),
      R = n(290),
      L = n(131),
      x = n(291),
      N = n(130),
      M = n(15),
      j = n(55),
      D = n(7),
      U = n(93),
      H = function(e, t) {
        return function(n, r, i) {
          var u = F(n, r, i),
            c = m()(u, 3);
          (n = c[0]), (r = c[1]), (i = c[2]);
          var l = Object(E.a)(),
            p = Object(b.a)(e, { api: e, oid: l }),
            v = n.payment_method_category,
            g = n.payment_method_categories,
            H = n.preferred_payment_method,
            K = n.instance_id,
            W = {
              payment_method_category: v,
              payment_method_categories: g,
              preferred_payment_method: H,
              instance_id: K,
            },
            V = function(e) {
              return (
                e && p.event(b.b.LOAD_FAILED, y()({}, W, { error: e })),
                i({ show_form: !1 })
              );
            };
          if (void 0 === n.client_token) {
            if (!_.a.get(e + ":initialized")) throw (V(), new w.a());
          } else Object(U.a)(e, t)({ client_token: n.client_token });
          p.event(
            b.b.LOAD_CALLED,
            y()({}, W, { client_token: n.client_token })
          );
          var Y = _.a.get(e + ":clientToken"),
            J = Y.experiments,
            G = void 0 === J ? {} : J,
            z = Y.scheme,
            q = Y.sessionType,
            Z = Y.sessionID,
            X = K || v || q || e,
            Q = n.container;
          if ("string" != typeof Q) {
            if (!(Q instanceof HTMLElement))
              throw (V("TypeError(options.container)"),
              new TypeError(
                "Property `options.container` must be a string (CSS selector) or HTMLElement"
              ));
          } else if (!(Q = document.querySelector(Q)))
            throw (V("InvalidContainerSelectorError"), new w.g());
          Object(k.a)({ scheme: z, sessionType: q, options: n, onError: V });
          var $ = Object(A.a)(),
            ee = x.a.get("_klarna_access_token"),
            te = Object(O.a)({
              id: e,
              instanceID: K,
              paymentMethodCategory: v,
            }),
            ne = _.a.get(e + ":integratingProduct"),
            re = function(t) {
              var n = function(n) {
                  var o = n.mdid,
                    a = n.inAppSdkParams,
                    u = n.shoppingBrowserPendingMessages,
                    s = _.a.get(e + ":" + Z + ":isEligibleUtopiaEnvironment"),
                    c = y()(
                      {
                        api: e,
                        libVersion: "v1.10.0-734-g03a211a9",
                        mdid: o,
                        nativeHookApiSupported: M.a.isSupported(),
                        operationID: l,
                        paymentMethodCategories: g,
                        paymentMethodCategory: v,
                        preferredPaymentMethod: H,
                        resetApplication: te,
                        upstreamData: $,
                        userAccountAccessToken: ee,
                        integratingProduct: ne,
                      },
                      a ? { inAppSdkParams: a } : {},
                      u ? { shoppingBrowserPendingMessages: u } : {},
                      void 0 !== s ? { isEligibleUtopiaEnvironment: s } : {},
                      Y
                    );
                  t.call("load", c, r, function() {
                    p.event(b.b.LOAD_COMPLETED), i.apply(void 0, arguments);
                  });
                },
                o = {};
              try {
                if (j.a.isSupported("production")) {
                  var a = _.a.get(e + ":" + Z + ":shoppingBrowser:initPromise");
                  a &&
                    (o.shoppingBrowserNativeApi = new h.a(function(e) {
                      try {
                        a.then(function(t) {
                          Array.isArray(t) &&
                            t.length &&
                            e({ shoppingBrowserPendingMessages: t });
                        }).finally(function() {
                          e({});
                        });
                      } catch (t) {
                        e({});
                      }
                    }));
                }
              } catch (e) {
                delete o.shoppingBrowserNativeApi;
              }
              try {
                M.a.isSupported() &&
                  (o.nativeHookApi = new h.a(function(e) {
                    try {
                      p.event(b.b.LOAD_NATIVE_HOOK_API_HANDSHAKE_WAIT_STARTED),
                        Object(R.a)(5e3)
                          .then(function() {
                            p.event(
                              b.b.LOAD_NATIVE_HOOK_API_HANDSHAKE_WAIT_FINISHED
                            );
                            var t = Object(S.a)();
                            return N.a
                              .withTimeout(B, 5e3)
                              .then(function() {
                                var n =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  r = n.value;
                                e({ mdid: r, inAppSdkParams: t });
                              })
                              .catch(function() {
                                e({ mdid: null, inAppSdkParams: t });
                              });
                          })
                          .catch(function(e) {
                            e &&
                              "Handshake timeout" === e.message &&
                              (p.event(
                                b.b
                                  .LOAD_NATIVE_HOOK_API_HANDSHAKE_WAIT_TIMED_OUT
                              ),
                              M.a.setIsSupportedOverride(!1));
                          })
                          .finally(function() {
                            e({ mdid: null });
                          });
                    } catch (t) {
                      e({ mdid: null });
                    }
                  }));
              } catch (e) {
                delete o.nativeHookApi;
              }
              var u = { mdid: Object(L.a)() },
                c = d()(o);
              if (c.length)
                try {
                  h.a
                    .all(c)
                    .then(function(e) {
                      n(s.a.apply(Object, [u].concat(f()(e))));
                    })
                    .catch(function() {
                      n(u);
                    });
                } catch (e) {
                  n(u);
                }
              else n(u);
            },
            oe = _.a.get(e + ":rawClientToken");
          try {
            if (_.a.get(e + ":" + Z + ":isUtopiaStaticWidgetEnabled")) {
              try {
                var ie = D.a.app.main.id(X),
                  ae = Q.querySelector("#" + ie);
                ae && ae.remove();
              } catch (e) {}
              _.a.set(X + ":" + Z + ":updateFromLoad", r);
              var ue = e + ":staticPaymentMethodRegistry",
                se = e + ":staticPaymentMethodApiMethodName";
              _.a.get(ue) ||
                (_.a.set(se, "__kp_static_api_" + Object(E.a)() + "__"),
                _.a.set(ue, new a.a()));
              var ce = _.a.get(ue),
                fe = _.a.get(se);
              window[fe] || o()(window, fe, { value: Object(C.a)(e, p.event) });
              var le = function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = _.a.get(e + ":" + Z + ":oneOfferingVersion"),
                  r = _.a.get(e + ":" + Z + ":oneOfferingStaticVariant");
                return Object(I.a)(
                  y()(
                    {
                      config: D.a.app.staticPaymentMethod(n, r),
                      apiMethodName: fe,
                      name: X,
                      registry: ce,
                      container: Q,
                      paymentMethodCategory: v,
                    },
                    Y,
                    t
                  ),
                  p.event
                );
              };
              return (
                le()
                  .then(function() {
                    p.event(b.b.LOAD_COMPLETED), i({ show_form: !0 });
                  })
                  .catch(function() {
                    V("create_static_payment_method_failed");
                  }),
                _.a.set(X + ":createStaticPaymentMethod", le),
                void (
                  G["kp-client-dr-on-load"] &&
                  "control" !== G["kp-client-dr-on-load"] &&
                  Object(T.a)({ id: e, clientToken: Y, tracker: p, options: n })
                )
              );
            }
            try {
              var de = _.a.get(e + ":" + Z + ":oneOfferingVersion");
              if (de) {
                var pe = _.a.get(e + ":" + Z + ":oneOfferingStaticVariant"),
                  he = D.a.app.staticPaymentMethod(de, pe).id(X),
                  ve = Q.querySelector("#" + he);
                ve && ve.remove();
              }
            } catch (e) {}
          } catch (e) {
            return void V(e.message);
          }
          Object(P.a)({
            id: e,
            clientToken: Y,
            rawClientToken: oe,
            container: Q,
            tracker: p,
            options: n,
          }).then(re, function() {
            return V("bootstrap_failed");
          });
        };
      },
      F = function(e, t, n) {
        if ("function" == typeof t) {
          var r = [t, {}];
          (n = r[0]), (t = r[1]);
        } else (t = t || {}), (n = n || function() {});
        return [e || {}, t, n];
      },
      B = function() {
        return M.a.getData("klarna-mdid");
      };
    t.a = H;
  },
  function(e, t, n) {
    e.exports = { default: n(246), __esModule: !0 };
  },
  function(e, t, n) {
    n(42), n(27), n(24), n(247), n(248), n(249), n(250), (e.exports = n(0).Map);
  },
  function(e, t, n) {
    "use strict";
    var r = n(124),
      o = n(35);
    e.exports = n(83)(
      "Map",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function(e) {
          var t = r.getEntry(o(this, "Map"), e);
          return t && t.v;
        },
        set: function(e, t) {
          return r.def(o(this, "Map"), 0 === e ? 0 : e, t);
        },
      },
      r,
      !0
    );
  },
  function(e, t, n) {
    var r = n(2);
    r(r.P + r.R, "Map", { toJSON: n(125)("Map") });
  },
  function(e, t, n) {
    n(85)("Map");
  },
  function(e, t, n) {
    n(86)("Map");
  },
  function(e, t, n) {
    e.exports = { default: n(252), __esModule: !0 };
  },
  function(e, t, n) {
    n(253), (e.exports = n(0).Object.values);
  },
  function(e, t, n) {
    var r = n(2),
      o = n(254)(!1);
    r(r.S, "Object", {
      values: function(e) {
        return o(e);
      },
    });
  },
  function(e, t, n) {
    var r = n(9),
      o = n(31),
      i = n(25),
      a = n(44).f;
    e.exports = function(e) {
      return function(t) {
        for (var n, u = i(t), s = o(u), c = s.length, f = 0, l = []; c > f; )
          (n = s[f++]), (r && !a.call(u, n)) || l.push(e ? [n, u[n]] : u[n]);
        return l;
      };
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t = e.loaderType,
        n = document.createElement("div"),
        r = "kp-loader-" + Date.now().toString(16);
      if (t === o.c.SKELETON) {
        n.innerHTML =
          '\n      <div class="klarna-payments-skeleton">\n        <div class="klarna-payments-skeleton-container">\n          <div class="klarna-payments-skeleton-paragraph is-short"></div>\n          <div class="klarna-payments-skeleton-paragraph is-short"></div>\n          <div class="klarna-payments-skeleton-paragraph"></div>\n        </div>\n        <div class="klarna-payments-skeleton-paragraph is-medium"></div>\n      </div>\n    ';
        var i = n.querySelector(".klarna-payments-skeleton"),
          a = document.createElement("style");
        return (
          (a.innerHTML =
            "      \n      .klarna-payments-skeleton {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        max-width: 600px;\n        min-width: 240px;\n        opacity: 1;\n        transition: opacity " +
            o.a +
            "s ease-in;\n      }\n      \n      .klarna-payments-skeleton.is-hidden {\n        opacity: 0;\n      }\n\n      .klarna-payments-skeleton-container {\n        display: flex;\n        flex-direction: column;\n        padding: 10px 15px 0;\n        margin-bottom: 10px;\n        background-color: #f0eeeb;\n      }\n      \n      .klarna-payments-skeleton-paragraph {\n        margin: 0 0 10px;\n        background-color: #e1dfdf;\n        height: 15px;\n        width: 100%;\n\n        animation-name: shimmer;\n        animation-duration: 1.5s;\n        animation-iteration-count: infinite;\n\n        -webkit-animation-name: shimmer;\n        -webkit-animation-duration: 1.5s;\n        -webkit-animation-iteration-count: infinite;\n      }\n      \n      .klarna-payments-skeleton-paragraph.is-short {\n        width: 33%;\n      }\n      \n      .klarna-payments-skeleton-paragraph.is-medium {\n        width: 66%;\n      }\n      \n      @keyframes shimmer {\n        0% {\n          opacity: 1;\n        }\n        30% {\n          opacity: 0.6;\n        }\n        50% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n    "),
          { el: i, styles: a }
        );
      }
      var u = document.createElement("style");
      return (
        (u.innerHTML =
          "\n    .klarna-payments-loader {\n      display: inline-block;\n      position: relative;\n      width: 30px;\n      height: 30px;\n      box-sizing: border-box;\n      transform: scale(.65);\n    }\n    .klarna-payments-loader div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      box-sizing: border-box;\n      width: 30px;\n      height: 30px;\n      border: 3px solid #000;\n      border-radius: 50%;\n      animation: klarna-payments-loader 1.3s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #000 transparent transparent transparent;\n    }\n    .klarna-payments-loader div:nth-child(1) {\n      animation-delay: -0.45s;\n    }\n    .klarna-payments-loader div:nth-child(2) {\n      animation-delay: -0.3s;\n    }\n    .klarna-payments-loader div:nth-child(3) {\n      animation-delay: -0.15s;\n    }\n    @keyframes klarna-payments-loader {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  "),
        (n.innerHTML =
          '\n    <div id="' +
          r +
          '" class="klarna-payments-loader"><div></div><div></div><div></div><div></div></div>\n  '),
        { el: n.querySelector("div"), styles: u }
      );
    }
    t.a = r;
    var o = n(50);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      e.addEventListener
        ? e.addEventListener(t, n, !1)
        : e.attachEvent("on" + t, n);
    }
    function o(e, t, n) {
      e.removeEventListener
        ? e.removeEventListener(t, n)
        : e.detachEvent("on" + t, n);
    }
    (t.a = r), (t.b = o);
  },
  function(e, t, n) {
    "use strict";
    function r() {}
    function o(e, t, n) {
      (this.fn = e), (this.context = t), (this.once = n || !1);
    }
    function i(e, t, n, r, i) {
      if ("function" != typeof n)
        throw new TypeError("The listener must be a function");
      var a = new o(n, r || e, i),
        u = c ? c + t : t;
      return (
        e._events[u]
          ? e._events[u].fn
            ? (e._events[u] = [e._events[u], a])
            : e._events[u].push(a)
          : ((e._events[u] = a), e._eventsCount++),
        e
      );
    }
    function a(e, t) {
      0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
    }
    function u() {
      (this._events = new r()), (this._eventsCount = 0);
    }
    var s = Object.prototype.hasOwnProperty,
      c = "~";
    Object.create &&
      ((r.prototype = Object.create(null)), new r().__proto__ || (c = !1)),
      (u.prototype.eventNames = function() {
        var e,
          t,
          n = [];
        if (0 === this._eventsCount) return n;
        for (t in (e = this._events))
          s.call(e, t) && n.push(c ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? n.concat(Object.getOwnPropertySymbols(e))
          : n;
      }),
      (u.prototype.listeners = function(e) {
        var t = c ? c + e : e,
          n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var r = 0, o = n.length, i = new Array(o); r < o; r++)
          i[r] = n[r].fn;
        return i;
      }),
      (u.prototype.listenerCount = function(e) {
        var t = c ? c + e : e,
          n = this._events[t];
        return n ? (n.fn ? 1 : n.length) : 0;
      }),
      (u.prototype.emit = function(e, t, n, r, o, i) {
        var a = c ? c + e : e;
        if (!this._events[a]) return !1;
        var u,
          s,
          f = this._events[a],
          l = arguments.length;
        if (f.fn) {
          switch ((f.once && this.removeListener(e, f.fn, void 0, !0), l)) {
            case 1:
              return f.fn.call(f.context), !0;
            case 2:
              return f.fn.call(f.context, t), !0;
            case 3:
              return f.fn.call(f.context, t, n), !0;
            case 4:
              return f.fn.call(f.context, t, n, r), !0;
            case 5:
              return f.fn.call(f.context, t, n, r, o), !0;
            case 6:
              return f.fn.call(f.context, t, n, r, o, i), !0;
          }
          for (s = 1, u = new Array(l - 1); s < l; s++) u[s - 1] = arguments[s];
          f.fn.apply(f.context, u);
        } else {
          var d,
            p = f.length;
          for (s = 0; s < p; s++)
            switch (
              (f[s].once && this.removeListener(e, f[s].fn, void 0, !0), l)
            ) {
              case 1:
                f[s].fn.call(f[s].context);
                break;
              case 2:
                f[s].fn.call(f[s].context, t);
                break;
              case 3:
                f[s].fn.call(f[s].context, t, n);
                break;
              case 4:
                f[s].fn.call(f[s].context, t, n, r);
                break;
              default:
                if (!u)
                  for (d = 1, u = new Array(l - 1); d < l; d++)
                    u[d - 1] = arguments[d];
                f[s].fn.apply(f[s].context, u);
            }
        }
        return !0;
      }),
      (u.prototype.on = function(e, t, n) {
        return i(this, e, t, n, !1);
      }),
      (u.prototype.once = function(e, t, n) {
        return i(this, e, t, n, !0);
      }),
      (u.prototype.removeListener = function(e, t, n, r) {
        var o = c ? c + e : e;
        if (!this._events[o]) return this;
        if (!t) return a(this, o), this;
        var i = this._events[o];
        if (i.fn)
          i.fn !== t || (r && !i.once) || (n && i.context !== n) || a(this, o);
        else {
          for (var u = 0, s = [], f = i.length; u < f; u++)
            (i[u].fn !== t || (r && !i[u].once) || (n && i[u].context !== n)) &&
              s.push(i[u]);
          s.length ? (this._events[o] = 1 === s.length ? s[0] : s) : a(this, o);
        }
        return this;
      }),
      (u.prototype.removeAllListeners = function(e) {
        var t;
        return (
          e
            ? ((t = c ? c + e : e), this._events[t] && a(this, t))
            : ((this._events = new r()), (this._eventsCount = 0)),
          this
        );
      }),
      (u.prototype.off = u.prototype.removeListener),
      (u.prototype.addListener = u.prototype.on),
      (u.prefixed = c),
      (u.EventEmitter = u),
      (e.exports = u);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      RegExp(t).test(e.className) ||
        (e.className ? (e.className += " " + t) : (e.className = t));
    }
    function o(e, t) {
      var n = e.className.split(" ");
      e.className = n
        .filter(function(e) {
          return e !== t;
        })
        .join(" ");
    }
    (t.a = r), (t.b = o);
  },
  function(e, t, n) {
    "use strict";
    var r = (n(129), n(262));
    n.d(t, "a", function() {
      return r.a;
    });
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      for (e = e.split(","); e.length; ) {
        var n = e.pop();
        o[n] || (o[n] = t);
      }
    }
    var o = window.console || {};
    r("memory", {});
    r(
      "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn",
      function() {}
    ),
      (e.exports = o);
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      o = n.n(r),
      i = n(58),
      a = n.n(i),
      u = n(90),
      s = n.n(u),
      c = (function() {
        function e(t) {
          a()(this, e),
            (this.origin = t.origin),
            (this.target = t.target),
            (this.frame = t.frame),
            (this.debug = t.debug),
            (this.console = t.console || console),
            (this.sendPlainObject = t.sendPlainObject),
            (this.sourceID = t.sourceID || "unknown"),
            (this.disableMessageSourceCheck = !!t.disableMessageSourceCheck),
            (this._listener = null),
            (this.onMessage = function() {
              throw new Error("Missing `onMessage` callback");
            }),
            this.bindToMessage(this.onPostMessage, this);
        }
        return (
          s()(e, null, [
            {
              key: "addListener",
              value: function(e, t) {
                window.removeEventListener
                  ? window.addEventListener("message", t, !1)
                  : window.attachEvent("on" + e, t, !1);
              },
            },
            {
              key: "removeListener",
              value: function(e, t) {
                window.removeEventListener
                  ? window.removeEventListener("message", t)
                  : window.detachEvent("on" + e, t);
              },
            },
          ]),
          s()(e, [
            {
              key: "getTarget",
              value: function() {
                return this.frame
                  ? "function" == typeof this.frame
                    ? this.frame()
                    : this.frame.contentWindow
                  : this.target;
              },
            },
            {
              key: "hasTarget",
              value: function() {
                try {
                  return !!this.getTarget();
                } catch (e) {
                  return !1;
                }
              },
            },
            {
              key: "onPostMessage",
              value: function(e) {
                var t = void 0;
                try {
                  if (
                    !this.disableMessageSourceCheck &&
                    this.hasTarget() &&
                    !f(e.srcElement) &&
                    !l(e.srcElement) &&
                    e.source !== this.getTarget()
                  )
                    return void (
                      this.debug &&
                      this.console.warn(
                        "[Posten(%s)] ignored message:",
                        this.sourceID,
                        e
                      )
                    );
                  if ("*" !== this.origin && e.origin !== this.origin)
                    return void (
                      this.debug &&
                      this.console.warn(
                        "[Posten(%s)] rejected message from " +
                          e.origin +
                          ", expecting " +
                          this.origin +
                          ". Target window:",
                        this.sourceID,
                        this.getTarget()
                      )
                    );
                  (t = this.sendPlainObject ? e.data : JSON.parse(e.data)),
                    this.debug &&
                      this.console.info(
                        "%c [Posten(%s) <- %s] message received:",
                        "color: #16a085",
                        this.sourceID,
                        e.origin || "unknown",
                        t
                      ),
                    this.onMessage(null, t, e);
                } catch (e) {
                  this.onMessage(e);
                }
              },
            },
            {
              key: "send",
              value: function(e) {
                if (!this.sendPlainObject)
                  for (var t in e)
                    if (e[t] && e[t].toJSON)
                      try {
                        e[t].toJSON = null;
                      } catch (e) {}
                var n = void 0;
                f(e.port) && ((n = e.port), delete e.port);
                var r = this.getTarget(),
                  i = this.sendPlainObject ? e : o()(e);
                f(r) || l(r)
                  ? r.postMessage(i)
                  : r.postMessage(i, this.origin, n ? [n] : []),
                  this.debug &&
                    this.console.info(
                      "%c [Posten -> %s] sending message:",
                      "color: #16a085",
                      this.origin,
                      e
                    );
              },
            },
            {
              key: "bindToMessage",
              value: function(t, n) {
                this._listener = function() {
                  t.apply(n, arguments);
                };
                var r = this.getTarget();
                f(r) || l(r)
                  ? (r.onmessage = this._listener)
                  : e.addListener("message", this._listener);
              },
            },
            {
              key: "unbind",
              value: function() {
                if (this._listener) {
                  var t = this.getTarget();
                  f(t) || l(t)
                    ? (t.onmessage = null)
                    : e.removeListener("message", this._listener),
                    (this._listener = null);
                }
              },
            },
          ]),
          e
        );
      })();
    t.a = c;
    var f = function(e) {
        return "MessagePort" in window && e instanceof window.MessagePort;
      },
      l = function(e) {
        return (
          "BroadcastChannel" in window && e instanceof window.BroadcastChannel
        );
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(32),
      o = n.n(r),
      i = n(3),
      a = n.n(i),
      u = n(1),
      s = n.n(u),
      c = n(113),
      f = n.n(c),
      l = n(58),
      d = n.n(l),
      p = n(90),
      h = n.n(p),
      v = n(114),
      y = n.n(v),
      g = n(118),
      m = n.n(g),
      _ = n(129),
      w = (function(e) {
        function t() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          d()(this, t);
          var r = y()(this, (t.__proto__ || f()(t)).call(this, e));
          return (
            r.addMessageHandler("rpc", function(e) {
              r.onRPCMessage(e);
            }),
            (r.methods = n),
            (r.callbacks = {}),
            (r.sequence = 0),
            r
          );
        }
        return (
          m()(t, e),
          h()(t, [
            {
              key: "apply",
              value: function(e, t) {
                var n = this,
                  r = t[t.length - 1],
                  o = "" + this.sequence++,
                  i = void 0;
                return (
                  "function" == typeof r
                    ? ((this.callbacks[o] = r), (t = t.slice(0, -1)))
                    : (i = new s.a(function(e) {
                        n.callbacks[o] = function() {
                          for (
                            var t = arguments.length, n = Array(t), r = 0;
                            r < t;
                            r++
                          )
                            n[r] = arguments[r];
                          e(n);
                        };
                      })),
                  this.send({ action: "rpc", seq: o, method: e, args: t }),
                  i
                );
              },
            },
            {
              key: "call",
              value: function(e) {
                for (
                  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                return this.apply(e, n);
              },
            },
            {
              key: "addMethods",
              value: function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                this.methods = a()({}, this.methods, e);
              },
            },
            {
              key: "onRequest",
              value: function(e) {
                var t = this,
                  n = e.method,
                  r = e.seq,
                  i = e.args,
                  a = void 0 === i ? [] : i,
                  u = this.methods[n];
                if (u && "function" == typeof u) {
                  var s = a.concat(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    t.send({ action: "rpc", responseSeq: r, args: n });
                  });
                  u.apply(void 0, o()(s));
                }
              },
            },
            {
              key: "onResponse",
              value: function(e) {
                var t = e.responseSeq,
                  n = e.args,
                  r = void 0 === n ? [] : n;
                if (t) {
                  var i = this.callbacks[t];
                  delete this.callbacks[t],
                    "function" == typeof i && i.apply(void 0, o()(r));
                }
              },
            },
            {
              key: "onRPCMessage",
              value: function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.method
                  ? this.onRequest(e)
                  : e.responseSeq && this.onResponse(e);
              },
            },
          ]),
          t
        );
      })(_.a);
    t.a = w;
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments[1],
        n = arguments[2],
        r = Object(p.b)(e.baseURL, e.entry),
        i = e.id(e.name),
        u = e.title(e.name),
        v = void 0,
        m = function(r) {
          var u = r.iframe,
            f = r.removeLoader,
            p = n ? n(u) : function() {},
            m = function(t) {
              return (
                p(d.b.ON_SHOW_EXTERNAL_DOCUMENT_HANDLER_CALLED, {
                  document_url: t,
                }),
                e.onShowExternalDocument(t)
              );
            };
          (v = Object(l.a)(u, i, !0, {
            startIframeVisibilityPolling: function(t) {
              o(u, e, t);
            },
            trackEvent: p,
            redirect: function(t) {
              var n = w.exec(t),
                r = n && n.length > 1 && n[1];
              if (!n || (r && !b.test(r)))
                return void p(d.b.REDIRECT_URL_VALIDATION_FAILED, {
                  url_protocol: r || "unknown",
                });
              c.a.isSupported()
                ? c.a.openExternalApp(t).then(function(e) {
                    e.success || c.a.openExternalBrowser(t);
                  })
                : Object(y.a)() && "function" == typeof e.onRedirect
                ? (p(d.b.ON_REDIRECT_HANDLER_CALLED), e.onRedirect(t))
                : "function" == typeof e.onShowExternalDocument
                ? m(t)
                : Object(h.a)(t);
            },
            onShowExternalDocument: function(t, n) {
              if ("function" == typeof e.onShowExternalDocument) {
                n(!1 === m(t));
              } else
                p(d.b.ON_SHOW_EXTERNAL_DOCUMENT_FALLBACK_CALLED, {
                  document_url: t,
                }),
                  n(!1);
            },
            onPaymentMethodSelected: function(e) {
              t.paymentMethodSelected(e);
            },
            onUserAccountLoginRequested: function() {
              t.userAccountLoginRequested();
            },
            onUserAccountLoginReady: function() {
              t.userAccountLoginReady();
            },
            onUserAccountLoginLoggedIn: function() {
              t.userAccountLoginLoggedIn();
            },
            nativeHookApi: function(e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              var o = c.a[e],
                i =
                  "function" == typeof n[n.length - 1]
                    ? n.pop()
                    : function() {};
              "function" == typeof o && o.apply(void 0, n).then(i);
            },
            removeLoader: f,
            checkEnabledWallets: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = arguments[1];
              p(d.b.CHECK_ENABLED_WALLETS, { wallets: s()(e) });
              var n = e.map(function(e) {
                return Object(g.b)(e).then(function(t) {
                  return t && e;
                });
              });
              a.a
                .all(n)
                .then(function(e) {
                  var n = e.filter(function(e) {
                    return e;
                  });
                  p(d.b.CHECK_ENABLED_WALLETS_FINISHED, {
                    enabled_wallets: s()(n),
                  }),
                    t(n);
                })
                .catch(function(e) {
                  p(d.b.CHECK_ENABLED_WALLETS_ERROR, { error: e.message }),
                    t([]);
                });
            },
            showWalletPaymentSheet: function(e, t) {
              p(d.b.SHOW_WALLET_PAYMENT_SHEET),
                Object(g.a)(e, { iframeId: i })
                  .then(function(e) {
                    p(d.b.SHOW_WALLET_PAYMENT_SHEET_FINISHED), t(e);
                  })
                  .catch(function(e) {
                    p(d.b.SHOW_WALLET_PAYMENT_SHEET_ERROR, {
                      error: e.message,
                    }),
                      t(null);
                  });
            },
          })),
            v.addMessageHandler("setHeight", function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = parseInt(e.height, 10);
              (u.style.height = n + "px"),
                t.heightChanged(n),
                c.a.isSupported() && c.a.heightChanged(n);
            });
        };
      return Object(f.b)({
        showLoader: e.showLoader,
        loaderType: e.loaderType,
        container: e.container,
        url: r + "#" + e.params + "&",
        baseURL: e.baseURL,
        id: i,
        title: u,
        onCreate: e.onCreate,
        onLoad: e.onLoad,
        style: e.style,
        loaderStyle: e.loaderStyle,
        timeout: e.timeout,
        sandbox: e.shouldSandbox ? e.sandbox : null,
        shouldAllowCamera: e.shouldAllowCamera,
        beforeLoad: m,
      }).then(function(e) {
        return [e, v];
      });
    }
    function o(e, t, n) {
      var r = function() {
        n(), t.onVisible && t.onVisible(e);
      };
      Object(v.a)(e, r, { interval: m, timeout: _ });
    }
    t.a = r;
    var i = n(1),
      a = n.n(i),
      u = n(11),
      s = n.n(u),
      c = n(15),
      f = n(36),
      l = n(48),
      d = n(10),
      p = n(28),
      h = n(264),
      v = n(265),
      y = n(46),
      g = n(267),
      m = 300,
      _ = 12e4,
      w = /^([a-z]+):\/\//,
      b = /^(https|bankid|klarna)/;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      (arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : window
      ).location.href = e;
    }
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = setInterval(function() {
          Object(o.a)(e, 0.51) && (clearInterval(r), (r = null), t());
        }, n.interval);
      setTimeout(function() {
        r && clearInterval(r);
      }, n.timeout);
    }
    t.a = r;
    var o = n(266);
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = function(e, t) {
          return document.elementFromPoint(e, t);
        },
        r = window.innerWidth || document.documentElement.clientWidth,
        o = window.innerHeight || document.documentElement.clientHeight,
        i = e.getBoundingClientRect(),
        a = i.bottom - i.top,
        u = i.right - i.left,
        s = parseInt(a * t, 10),
        c = parseInt(u * t, 10),
        f = i.top > 0 && i.top < o - s,
        l = i.bottom < o && i.bottom > s,
        d = i.left > 0 && i.left < r - c,
        p = i.right < r && i.right > c;
      return (
        !((!f && !l) || (!d && !p)) &&
        (e.contains(n(i.left, i.top + s)) ||
          e.contains(n(i.right - 1, i.top + s)) ||
          e.contains(n(i.top + c, i.top)) ||
          e.contains(n(i.bottom + c, i.bottom)))
      );
    }
    t.a = r;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return f;
    }),
      n.d(t, "a", function() {
        return l;
      });
    var r = n(49),
      o = n.n(r),
      i = n(1),
      a = n.n(i),
      u = n(130),
      s = n(268),
      c = o()({}, s.a.APPLE_PAY, {
        isEnabled: function() {
          return a.a.resolve(Object(s.c)());
        },
        authenticate: function(e, t) {
          var n = t.iframeId;
          return Object(s.b)(n, e);
        },
      }),
      f = function(e) {
        return c[e] ? u.a.withTimeout(c[e].isEnabled, 100) : a.a.resolve(!1);
      },
      l = function(e, t) {
        return c[e.wallet]
          ? c[e.wallet].authenticate(e, t)
          : a.a.reject(new Error('Wallet "' + e.wallet + '" is not defined'));
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(91),
      o = (n(269), n(270)),
      i = n(92);
    n.d(t, "a", function() {
      return r.c;
    }),
      n.d(t, "b", function() {
        return o.a;
      }),
      n.d(t, "c", function() {
        return i.b;
      });
  },
  function(e, t, n) {
    "use strict";
    n(91), n(92);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return y;
    });
    var r,
      o,
      i = n(1),
      a = n.n(i),
      u = n(11),
      s = (n.n(u), n(91)),
      c = (n(92), !0),
      f = !0,
      l = function(e) {
        return document.getElementById(e);
      },
      d = function(e) {
        var t = e.iframeId;
        return function(e) {
          var n;
          o = !0;
          var r = e.validationURL,
            i = l(t);
          null ===
            (n = null === i || void 0 === i ? void 0 : i.contentWindow) ||
            void 0 === n ||
            n.postMessage(
              {
                event: s.b.TO_PGW,
                action: s.a.AP_MERCHANT_VALIDATION,
                validationURL: r,
                domain: window.location.host,
              },
              "*"
            );
        };
      },
      p = function(e) {
        var t = e.session,
          n = e.resolve;
        return function(e) {
          var r,
            o =
              null === (r = null === e || void 0 === e ? void 0 : e.payment) ||
              void 0 === r
                ? void 0
                : r.token;
          n(o), t.completePayment(ApplePaySession.STATUS_SUCCESS);
        };
      },
      h = function(e) {
        var t = e.resolve,
          n = e.reject;
        return function() {
          o ? t() : n(new Error("Payment sheet was not shown"));
        };
      },
      v = function e(t) {
        var n;
        try {
          n = JSON.parse(t.data);
        } catch (e) {
          n = t.data;
        }
        if (n.event === s.b.FROM_PGW)
          switch (n.action) {
            case s.a.AP_MERCHANT_VALIDATION_RES:
              delete n.event,
                delete n.action,
                f &&
                  ((f = !1),
                  setTimeout(function() {
                    return (f = !0);
                  }, 1e3),
                  r.completeMerchantValidation(n),
                  window.removeEventListener("message", e));
          }
      },
      y = function(e, t) {
        return new a.a(function(n, i) {
          c &&
            ((o = !1),
            (c = !1),
            setTimeout(function() {
              return (c = !0);
            }, 5e3),
            window.addEventListener("message", v),
            (r = new ApplePaySession(1, t)),
            (r.onvalidatemerchant = d({ iframeId: e })),
            (r.onpaymentauthorized = p({
              iframeId: e,
              session: r,
              resolve: n,
            })),
            (r.oncancel = h({ resolve: n, reject: i })),
            r.begin());
        });
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = n(272),
      a = n.n(i),
      u = n(28),
      s = n(29),
      c = n(48),
      f = function(e, t) {
        var n = e.width,
          r = e.height,
          i = a()(e, ["width", "height"]);
        return new o.a(function(e, o) {
          var a = i.id(i.name),
            f = Object(u.b)(i.baseURL, i.entry),
            l = f + "?" + i.params,
            d = window.top.outerHeight / 2 + window.top.screenY - r / 2,
            p = window.top.outerWidth / 2 + window.top.screenX - n / 2,
            h = i.onOpened || function() {},
            v = i.onClosed || function() {},
            y = i.onError || function() {},
            g = window.open(
              l,
              a,
              "\n      scrollbars=yes,\n      status=no,\n      resizable=no,\n      width=" +
                n +
                ",\n      height=" +
                r +
                ",\n      top=" +
                d +
                ",\n      left=" +
                p +
                "\n    "
            ),
            m = !1,
            _ = !1;
          if (!g) return void o(new Error("Popup window blocked."));
          g.__ID__ = Object(s.a)();
          var w = {
              getReference: function() {
                return g;
              },
              getID: function() {
                return a;
              },
              isClosed: function() {
                return g && g.closed;
              },
              focus: function() {
                g && window.focus && g.focus();
              },
              close: function() {
                w.isClosed() || g.close();
              },
            },
            b = Object(c.a)(g, a, !0, { trackEvent: t });
          h(w, b), w.focus(), window.addEventListener("unload", w.close);
          try {
            var E = g.document.open();
            E.write(
              '\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>Klarna Payments</title>\n      <style>\n        html {\n          width: 100%;\n          height: 100%;\n          background-color: white;\n        }\n        body {\n          width: 100%;\n          height: 100%;\n          padding: 0;\n          margin: 0;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n        #logo-wrapper {\n          opacity: 0.5;\n          transform: scale(1.8);\n          transition: opacity .1s linear;\n        }\n       </style>\n    </head>\n    <body>\n      <div id="logo-wrapper">\n        <svg focusable="false" width="81" height="20">\n          <g transform="translate(0, 0) scale(1)">\n            <path d="M78.3352549,14.3292706 C77.0678017,14.3292706 76.0403439,15.3567284 76.0403439,16.6243597 C76.0403439,17.8916348 77.0678017,18.9192707 78.3352549,18.9192707 C79.6027081,18.9192707 80.630344,17.8916348 80.630344,16.6243597 C80.630344,15.3567284 79.6027081,14.3292706 78.3352549,14.3292706" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M70.7958568,7.22817345 L70.7958568,6.4467803 L74.4529833,6.4467803 L74.4529833,18.6618356 L70.7958568,18.6618356 L70.7958568,17.8811547 C69.7626656,18.5857975 68.5156063,19 67.1704277,19 C63.6107082,19 60.7250027,16.1142945 60.7250027,12.554575 C60.7250027,8.99485561 63.6107082,6.10915009 67.1704277,6.10915009 C68.5156063,6.10915009 69.7626656,6.52335256 70.7958568,7.22817345 Z M67.4697718,15.6974209 C69.3000267,15.6974209 70.7835696,14.2902722 70.7835696,12.554575 C70.7835696,10.8188779 69.3000267,9.41208536 67.4697718,9.41208536 C65.6395168,9.41208536 64.1559739,10.8188779 64.1559739,12.554575 C64.1559739,14.2902722 65.6395168,15.6974209 67.4697718,15.6974209 Z" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M54.2263333,6.11823191 C52.765406,6.11823191 51.3828316,6.57178896 50.4584442,7.82312205 L50.4584442,6.4474926 L46.8169884,6.4474926 L46.8169884,18.6618356 L50.503141,18.6618356 L50.503141,12.2427657 C50.503141,10.3852653 51.7487757,9.47565814 53.2485235,9.47565814 C54.8558285,9.47565814 55.7798597,10.4358386 55.7798597,12.2174791 L55.7798597,18.6618356 L59.4327124,18.6618356 L59.4327124,10.8940256 C59.4327124,8.05141421 57.1725844,6.11823191 54.2263333,6.11823191" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M41.5278044,8.03788051 L41.5278044,6.44695838 L37.7834212,6.44695838 L37.7834212,18.6618356 L41.536174,18.6618356 L41.536174,12.9588053 C41.536174,11.0347048 43.6216104,10.0004452 45.0686479,10.0004452 C45.0834281,10.0004452 45.097318,10.0018698 45.1120982,10.0020479 L45.1120982,6.44767068 C43.6269526,6.44767068 42.2609392,7.08357654 41.5278044,8.03788051" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M32.2128788,7.22817345 L32.2128788,6.4467803 L35.8701833,6.4467803 L35.8701833,18.6618356 L32.2128788,18.6618356 L32.2128788,17.8811547 C31.1796876,18.5857975 29.9326283,19 28.5876277,19 C25.0279083,19 22.1422028,16.1142945 22.1422028,12.554575 C22.1422028,8.99485561 25.0279083,6.10915009 28.5876277,6.10915009 C29.9326283,6.10915009 31.1796876,6.52335256 32.2128788,7.22817345 Z M28.8867938,15.6974209 C30.7170487,15.6974209 32.2007697,14.2902722 32.2007697,12.554575 C32.2007697,10.8188779 30.7170487,9.41208536 28.8867938,9.41208536 C27.0567169,9.41208536 25.5729959,10.8188779 25.5729959,12.554575 C25.5729959,14.2902722 27.0567169,15.6974209 28.8867938,15.6974209 Z" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M16.8150889 18.6618356 20.6429893 18.6618356 20.6429893 1.00338343 16.8150889 1.00338343z" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M14.1770857,1 L10.2104649,1 C10.2104649,4.25111544 8.71570325,7.23511837 6.10957549,9.1873547 L4.53806353,10.3642524 L10.6271604,18.6673559 L15.6335612,18.6673559 L10.0307872,11.0272257 C12.6865979,8.38263373 14.1770857,4.82469505 14.1770857,1" fill="rgba(150, 147, 145, 1)"></path>\n            <path d="M0 18.6666436 4.05334336 18.6666436 4.05334336 1 0 1z" fill="rgba(150, 147, 145, 1)"></path>\n          </g>\n        </svg>\n      </div>\n      <script>\n        window.loaded = true;\n      </script>\n    </body>\n  </html>\n'
            ),
              E.close();
          } catch (e) {
            y(e.message, w);
          }
          var A = setInterval(function() {
              try {
                g.loaded && (clearInterval(A), g.location.replace(l));
              } catch (e) {
                clearInterval(A), y(e.message, w);
              }
            }, 20),
            S = setInterval(function() {
              w.isClosed() &&
                (v(),
                b.destroy(),
                clearInterval(S),
                clearInterval(A),
                m || (o(new Error("Popup closed prematurely.")), (_ = !0)));
            }, 100),
            O = setTimeout(function() {
              o(new Error("Popup window timed out.")), (_ = !0), w.close();
            }, i.timeout);
          b.addMessageHandler("error", function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            m
              ? (y(e.error, w), e.closePopup && w.close())
              : (o(new Error(e.error || "Unexpected error.")),
                (_ = !0),
                clearInterval(A),
                clearTimeout(O),
                w.close());
          }),
            b.addMessageHandler("ready", function() {
              _ || (w.focus(), (m = !0), e(w), clearTimeout(O));
            });
        });
      };
    t.a = f;
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      });
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = function(e, t) {
        if (!e) return o.a.reject(new Error("Provided element ID is null."));
        var n = void 0,
          r = new o.a(function(r) {
            n = setInterval(function() {
              document.getElementById(e) || (clearInterval(n), r());
            }, t);
          });
        return (
          r.catch(function() {
            clearInterval(n);
          }),
          r
        );
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    var r = n(17),
      o = n.n(r),
      i = n(18),
      a = n.n(i),
      u = n(19);
    t.a = (function() {
      function e() {
        return t.apply(this, arguments);
      }
      var t = a()(
        o.a.mark(function e() {
          var t,
            r,
            i,
            a,
            s,
            c,
            f,
            l =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            d = l.token,
            p = l.publicKey;
          return o.a.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = "crypto" in window && "subtle" in window.crypto),
                      t || n(275),
                      (r = n(276)),
                      (i = r.Jose),
                      (a = r.JoseJWS),
                      (s = new i.WebCryptographer()),
                      (c = void 0),
                      (e.prev = 5),
                      (f = new a.Verifier(s, d)),
                      (e.next = 9),
                      f.addRecipient(p, p.kid, "RS256")
                    );
                  case 9:
                    return (e.next = 11), f.verify();
                  case 11:
                    (c = e.sent), (e.next = 18);
                    break;
                  case 14:
                    throw ((e.prev = 14), (e.t0 = e.catch(5)), new u.f());
                  case 18:
                    if (null != c && (!c || c[0].verified)) {
                      e.next = 20;
                      break;
                    }
                    throw new u.f();
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[5, 14]]
          );
        })
      );
      return e;
    })();
  },
  function(e, t, n) {
    var r, o;
    /**
     * @file Web Cryptography API shim
     * @author Artem S Vybornov <vybornov@gmail.com>
     * @license MIT
     */
    !(function(n, i) {
      (r = []),
        void 0 !==
          (o = function() {
            return i(n);
          }.apply(t, r)) && (e.exports = o);
    })("undefined" != typeof self ? self : this, function(e) {
      "use strict";
      function t(e) {
        return btoa(e)
          .replace(/\=+$/, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
      }
      function n(e) {
        return (
          (e += "==="),
          (e = e.slice(0, -e.length % 4)),
          atob(e.replace(/-/g, "+").replace(/_/g, "/"))
        );
      }
      function r(e) {
        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
          t[n] = e.charCodeAt(n);
        return t;
      }
      function o(e) {
        return (
          e instanceof ArrayBuffer && (e = new Uint8Array(e)),
          String.fromCharCode.apply(String, e)
        );
      }
      function i(e) {
        var t = { name: (e.name || e || "").toUpperCase().replace("V", "v") };
        switch (t.name) {
          case "SHA-1":
          case "SHA-256":
          case "SHA-384":
          case "SHA-512":
            break;
          case "AES-CBC":
          case "AES-GCM":
          case "AES-KW":
            e.length && (t.length = e.length);
            break;
          case "HMAC":
            e.hash && (t.hash = i(e.hash)), e.length && (t.length = e.length);
            break;
          case "RSAES-PKCS1-v1_5":
            e.publicExponent &&
              (t.publicExponent = new Uint8Array(e.publicExponent)),
              e.modulusLength && (t.modulusLength = e.modulusLength);
            break;
          case "RSASSA-PKCS1-v1_5":
          case "RSA-OAEP":
            e.hash && (t.hash = i(e.hash)),
              e.publicExponent &&
                (t.publicExponent = new Uint8Array(e.publicExponent)),
              e.modulusLength && (t.modulusLength = e.modulusLength);
            break;
          default:
            throw new SyntaxError("Bad algorithm name");
        }
        return t;
      }
      function a(e) {
        return {
          HMAC: {
            "SHA-1": "HS1",
            "SHA-256": "HS256",
            "SHA-384": "HS384",
            "SHA-512": "HS512",
          },
          "RSASSA-PKCS1-v1_5": {
            "SHA-1": "RS1",
            "SHA-256": "RS256",
            "SHA-384": "RS384",
            "SHA-512": "RS512",
          },
          "RSAES-PKCS1-v1_5": { "": "RSA1_5" },
          "RSA-OAEP": { "SHA-1": "RSA-OAEP", "SHA-256": "RSA-OAEP-256" },
          "AES-KW": { 128: "A128KW", 192: "A192KW", 256: "A256KW" },
          "AES-GCM": { 128: "A128GCM", 192: "A192GCM", 256: "A256GCM" },
          "AES-CBC": { 128: "A128CBC", 192: "A192CBC", 256: "A256CBC" },
        }[e.name][(e.hash || {}).name || e.length || ""];
      }
      function u(e) {
        (e instanceof ArrayBuffer || e instanceof Uint8Array) &&
          (e = JSON.parse(decodeURIComponent(escape(o(e)))));
        var t = { kty: e.kty, alg: e.alg, ext: e.ext || e.extractable };
        switch (t.kty) {
          case "oct":
            t.k = e.k;
          case "RSA":
            ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach(function(
              n
            ) {
              n in e && (t[n] = e[n]);
            });
            break;
          default:
            throw new TypeError("Unsupported key type");
        }
        return t;
      }
      function s(e) {
        var t = u(e);
        return (
          b && ((t.extractable = t.ext), delete t.ext),
          r(unescape(encodeURIComponent(JSON.stringify(t)))).buffer
        );
      }
      function c(e) {
        var n = l(e),
          r = !1;
        n.length > 2 && ((r = !0), n.shift());
        var i = { ext: !0 };
        switch (n[0][0]) {
          case "1.2.840.113549.1.1.1":
            var a = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
              u = l(n[1]);
            r && u.shift();
            for (var s = 0; s < u.length; s++)
              u[s][0] || (u[s] = u[s].subarray(1)), (i[a[s]] = t(o(u[s])));
            i.kty = "RSA";
            break;
          default:
            throw new TypeError("Unsupported key type");
        }
        return i;
      }
      function f(e) {
        var t,
          o = [["", null]],
          i = !1;
        switch (e.kty) {
          case "RSA":
            for (
              var a = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
                u = [],
                s = 0;
              s < a.length && a[s] in e;
              s++
            ) {
              var c = (u[s] = r(n(e[a[s]])));
              128 & c[0] &&
                ((u[s] = new Uint8Array(c.length + 1)), u[s].set(c, 1));
            }
            u.length > 2 && ((i = !0), u.unshift(new Uint8Array([0]))),
              (o[0][0] = "1.2.840.113549.1.1.1"),
              (t = u);
            break;
          default:
            throw new TypeError("Unsupported key type");
        }
        return (
          o.push(new Uint8Array(d(t)).buffer),
          i ? o.unshift(new Uint8Array([0])) : (o[1] = { tag: 3, value: o[1] }),
          new Uint8Array(d(o)).buffer
        );
      }
      function l(e, t) {
        if (
          (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
          t || (t = { pos: 0, end: e.length }),
          t.end - t.pos < 2 || t.end > e.length)
        )
          throw new RangeError("Malformed DER");
        var n = e[t.pos++],
          r = e[t.pos++];
        if (r >= 128) {
          if (((r &= 127), t.end - t.pos < r))
            throw new RangeError("Malformed DER");
          for (var i = 0; r--; ) (i <<= 8), (i |= e[t.pos++]);
          r = i;
        }
        if (t.end - t.pos < r) throw new RangeError("Malformed DER");
        var a;
        switch (n) {
          case 2:
            a = e.subarray(t.pos, (t.pos += r));
            break;
          case 3:
            if (e[t.pos++]) throw new Error("Unsupported bit string");
            r--;
          case 4:
            a = new Uint8Array(e.subarray(t.pos, (t.pos += r))).buffer;
            break;
          case 5:
            a = null;
            break;
          case 6:
            var u = btoa(o(e.subarray(t.pos, (t.pos += r))));
            if (!(u in A)) throw new Error("Unsupported OBJECT ID " + u);
            a = A[u];
            break;
          case 48:
            a = [];
            for (var s = t.pos + r; t.pos < s; ) a.push(l(e, t));
            break;
          default:
            throw new Error("Unsupported DER tag 0x" + n.toString(16));
        }
        return a;
      }
      function d(e, t) {
        t || (t = []);
        var n = 0,
          o = 0,
          i = t.length + 2;
        if ((t.push(0, 0), e instanceof Uint8Array)) {
          (n = 2), (o = e.length);
          for (var a = 0; a < o; a++) t.push(e[a]);
        } else if (e instanceof ArrayBuffer) {
          (n = 4), (o = e.byteLength), (e = new Uint8Array(e));
          for (var a = 0; a < o; a++) t.push(e[a]);
        } else if (null === e) (n = 5), (o = 0);
        else if ("string" == typeof e && e in S) {
          var u = r(atob(S[e]));
          (n = 6), (o = u.length);
          for (var a = 0; a < o; a++) t.push(u[a]);
        } else if (e instanceof Array) {
          for (var a = 0; a < e.length; a++) d(e[a], t);
          (n = 48), (o = t.length - i);
        } else {
          if (
            !(
              "object" == typeof e &&
              3 === e.tag &&
              e.value instanceof ArrayBuffer
            )
          )
            throw new Error("Unsupported DER value " + e);
          (e = new Uint8Array(e.value)), (n = 3), (o = e.byteLength), t.push(0);
          for (var a = 0; a < o; a++) t.push(e[a]);
          o++;
        }
        if (o >= 128) {
          var s = o,
            o = 4;
          for (
            t.splice(
              i,
              0,
              (s >> 24) & 255,
              (s >> 16) & 255,
              (s >> 8) & 255,
              255 & s
            );
            o > 1 && !(s >> 24);

          )
            (s <<= 8), o--;
          o < 4 && t.splice(i, 4 - o), (o |= 128);
        }
        return t.splice(i - 2, 2, n, o), t;
      }
      function p(e, t, n, r) {
        Object.defineProperties(this, {
          _key: { value: e },
          type: { value: e.type, enumerable: !0 },
          extractable: {
            value: void 0 === n ? e.extractable : n,
            enumerable: !0,
          },
          algorithm: { value: void 0 === t ? e.algorithm : t, enumerable: !0 },
          usages: { value: void 0 === r ? e.usages : r, enumerable: !0 },
        });
      }
      function h(e) {
        return "verify" === e || "encrypt" === e || "wrapKey" === e;
      }
      function v(e) {
        return "sign" === e || "decrypt" === e || "unwrapKey" === e;
      }
      if ("function" != typeof Promise) throw "Promise support required";
      var y = e.crypto || e.msCrypto;
      if (y) {
        var g = y.subtle || y.webkitSubtle;
        if (g) {
          var m = e.Crypto || y.constructor || Object,
            _ = e.SubtleCrypto || g.constructor || Object,
            w =
              (e.CryptoKey || e.Key || Object,
              e.navigator.userAgent.indexOf("Edge/") > -1),
            b = !!e.msCrypto && !w,
            E = !y.subtle && !!y.webkitSubtle;
          if (b || E) {
            var A = { KoZIhvcNAQEB: "1.2.840.113549.1.1.1" },
              S = { "1.2.840.113549.1.1.1": "KoZIhvcNAQEB" };
            if (
              (["generateKey", "importKey", "unwrapKey"].forEach(function(e) {
                var t = g[e];
                g[e] = function(o, f, l) {
                  var d,
                    m,
                    _,
                    w = [].slice.call(arguments);
                  switch (e) {
                    case "generateKey":
                      (d = i(o)), (m = f), (_ = l);
                      break;
                    case "importKey":
                      (d = i(l)),
                        (m = w[3]),
                        (_ = w[4]),
                        "jwk" === o &&
                          ((f = u(f)),
                          f.alg || (f.alg = a(d)),
                          f.key_ops ||
                            (f.key_ops =
                              "oct" !== f.kty
                                ? "d" in f
                                  ? _.filter(v)
                                  : _.filter(h)
                                : _.slice()),
                          (w[1] = s(f)));
                      break;
                    case "unwrapKey":
                      (d = w[4]), (m = w[5]), (_ = w[6]), (w[2] = l._key);
                  }
                  if ("generateKey" === e && "HMAC" === d.name && d.hash)
                    return (
                      (d.length =
                        d.length ||
                        {
                          "SHA-1": 512,
                          "SHA-256": 512,
                          "SHA-384": 1024,
                          "SHA-512": 1024,
                        }[d.hash.name]),
                      g.importKey(
                        "raw",
                        y.getRandomValues(new Uint8Array((d.length + 7) >> 3)),
                        d,
                        m,
                        _
                      )
                    );
                  if (
                    E &&
                    "generateKey" === e &&
                    "RSASSA-PKCS1-v1_5" === d.name &&
                    (!d.modulusLength || d.modulusLength >= 2048)
                  )
                    return (
                      (o = i(o)),
                      (o.name = "RSAES-PKCS1-v1_5"),
                      delete o.hash,
                      g
                        .generateKey(o, !0, ["encrypt", "decrypt"])
                        .then(function(e) {
                          return Promise.all([
                            g.exportKey("jwk", e.publicKey),
                            g.exportKey("jwk", e.privateKey),
                          ]);
                        })
                        .then(function(e) {
                          return (
                            (e[0].alg = e[1].alg = a(d)),
                            (e[0].key_ops = _.filter(h)),
                            (e[1].key_ops = _.filter(v)),
                            Promise.all([
                              g.importKey("jwk", e[0], d, !0, e[0].key_ops),
                              g.importKey("jwk", e[1], d, m, e[1].key_ops),
                            ])
                          );
                        })
                        .then(function(e) {
                          return { publicKey: e[0], privateKey: e[1] };
                        })
                    );
                  if (
                    (E || (b && "SHA-1" === (d.hash || {}).name)) &&
                    "importKey" === e &&
                    "jwk" === o &&
                    "HMAC" === d.name &&
                    "oct" === f.kty
                  )
                    return g.importKey("raw", r(n(f.k)), l, w[3], w[4]);
                  if (E && "importKey" === e && ("spki" === o || "pkcs8" === o))
                    return g.importKey("jwk", c(f), l, w[3], w[4]);
                  if (b && "unwrapKey" === e)
                    return g.decrypt(w[3], l, f).then(function(e) {
                      return g.importKey(o, e, w[4], w[5], w[6]);
                    });
                  var A;
                  try {
                    A = t.apply(g, w);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                  return (
                    b &&
                      (A = new Promise(function(e, t) {
                        (A.onabort = A.onerror = function(e) {
                          t(e);
                        }),
                          (A.oncomplete = function(t) {
                            e(t.target.result);
                          });
                      })),
                    (A = A.then(function(e) {
                      return (
                        "HMAC" === d.name &&
                          (d.length || (d.length = 8 * e.algorithm.length)),
                        0 == d.name.search("RSA") &&
                          (d.modulusLength ||
                            (d.modulusLength = (
                              e.publicKey || e
                            ).algorithm.modulusLength),
                          d.publicExponent ||
                            (d.publicExponent = (
                              e.publicKey || e
                            ).algorithm.publicExponent)),
                        (e =
                          e.publicKey && e.privateKey
                            ? {
                                publicKey: new p(
                                  e.publicKey,
                                  d,
                                  m,
                                  _.filter(h)
                                ),
                                privateKey: new p(
                                  e.privateKey,
                                  d,
                                  m,
                                  _.filter(v)
                                ),
                              }
                            : new p(e, d, m, _))
                      );
                    }))
                  );
                };
              }),
              ["exportKey", "wrapKey"].forEach(function(e) {
                var n = g[e];
                g[e] = function(i, s, c) {
                  var l = [].slice.call(arguments);
                  switch (e) {
                    case "exportKey":
                      l[1] = s._key;
                      break;
                    case "wrapKey":
                      (l[1] = s._key), (l[2] = c._key);
                  }
                  if (
                    ((E || (b && "SHA-1" === (s.algorithm.hash || {}).name)) &&
                      "exportKey" === e &&
                      "jwk" === i &&
                      "HMAC" === s.algorithm.name &&
                      (l[0] = "raw"),
                    !E ||
                      "exportKey" !== e ||
                      ("spki" !== i && "pkcs8" !== i) ||
                      (l[0] = "jwk"),
                    b && "wrapKey" === e)
                  )
                    return g.exportKey(i, s).then(function(e) {
                      return (
                        "jwk" === i &&
                          (e = r(
                            unescape(encodeURIComponent(JSON.stringify(u(e))))
                          )),
                        g.encrypt(l[3], c, e)
                      );
                    });
                  var d;
                  try {
                    d = n.apply(g, l);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                  return (
                    b &&
                      (d = new Promise(function(e, t) {
                        (d.onabort = d.onerror = function(e) {
                          t(e);
                        }),
                          (d.oncomplete = function(t) {
                            e(t.target.result);
                          });
                      })),
                    "exportKey" === e &&
                      "jwk" === i &&
                      (d = d.then(function(e) {
                        return (E ||
                          (b && "SHA-1" === (s.algorithm.hash || {}).name)) &&
                          "HMAC" === s.algorithm.name
                          ? {
                              kty: "oct",
                              alg: a(s.algorithm),
                              key_ops: s.usages.slice(),
                              ext: !0,
                              k: t(o(e)),
                            }
                          : ((e = u(e)),
                            e.alg || (e.alg = a(s.algorithm)),
                            e.key_ops ||
                              (e.key_ops =
                                "public" === s.type
                                  ? s.usages.filter(h)
                                  : "private" === s.type
                                  ? s.usages.filter(v)
                                  : s.usages.slice()),
                            e);
                      })),
                    !E ||
                      "exportKey" !== e ||
                      ("spki" !== i && "pkcs8" !== i) ||
                      (d = d.then(function(e) {
                        return (e = f(u(e)));
                      })),
                    d
                  );
                };
              }),
              ["encrypt", "decrypt", "sign", "verify"].forEach(function(e) {
                var t = g[e];
                g[e] = function(n, r, o, a) {
                  if (b && (!o.byteLength || (a && !a.byteLength)))
                    throw new Error("Empy input is not allowed");
                  var u = [].slice.call(arguments),
                    s = i(n);
                  if (
                    (b &&
                      ("encrypt" === e || "decrypt" === e) &&
                      r.algorithm.hash &&
                      (u[0].hash = u[0].hash || r.algorithm.hash),
                    b && "decrypt" === e && "AES-GCM" === s.name)
                  ) {
                    var c = n.tagLength >> 3;
                    (u[2] = (o.buffer || o).slice(0, o.byteLength - c)),
                      (n.tag = (o.buffer || o).slice(o.byteLength - c));
                  }
                  u[1] = r._key;
                  var f;
                  try {
                    f = t.apply(g, u);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                  return (
                    b &&
                      (f = new Promise(function(t, n) {
                        (f.onabort = f.onerror = function(e) {
                          n(e);
                        }),
                          (f.oncomplete = function(n) {
                            var n = n.target.result;
                            if (
                              "encrypt" === e &&
                              n instanceof AesGcmEncryptResult
                            ) {
                              var r = n.ciphertext,
                                o = n.tag;
                              (n = new Uint8Array(r.byteLength + o.byteLength)),
                                n.set(new Uint8Array(r), 0),
                                n.set(new Uint8Array(o), r.byteLength),
                                (n = n.buffer);
                            }
                            t(n);
                          });
                      })),
                    f
                  );
                };
              }),
              b)
            ) {
              var O = g.digest;
              (g.digest = function(e, t) {
                if (!t.byteLength) throw new Error("Empy input is not allowed");
                var n;
                try {
                  n = O.call(g, e, t);
                } catch (e) {
                  return Promise.reject(e);
                }
                return (n = new Promise(function(e, t) {
                  (n.onabort = n.onerror = function(e) {
                    t(e);
                  }),
                    (n.oncomplete = function(t) {
                      e(t.target.result);
                    });
                }));
              }),
                (e.crypto = Object.create(y, {
                  getRandomValues: {
                    value: function(e) {
                      return y.getRandomValues(e);
                    },
                  },
                  subtle: { value: g },
                })),
                (e.CryptoKey = p);
            }
            E &&
              ((y.subtle = g),
              (e.Crypto = m),
              (e.SubtleCrypto = _),
              (e.CryptoKey = p));
          }
        }
      }
    });
  },
  function(e, t, n) {
    !(function(t, n) {
      e.exports = n();
    })(window, function() {
      return (function(e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        var n = {};
        return (
          (t.m = e),
          (t.c = n),
          (t.d = function(e, n, r) {
            t.o(e, n) ||
              Object.defineProperty(e, n, { enumerable: !0, get: r });
          }),
          (t.r = function(e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (t.t = function(e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (t.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & n && "string" != typeof e)
            )
              for (var o in e)
                t.d(
                  r,
                  o,
                  function(t) {
                    return e[t];
                  }.bind(null, o)
                );
            return r;
          }),
          (t.n = function(e) {
            var n =
              e && e.__esModule
                ? function() {
                    return e.default;
                  }
                : function() {
                    return e;
                  };
            return t.d(n, "a", n), n;
          }),
          (t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = ""),
          t((t.s = 1))
        );
      })([
        function(e, t, n) {
          "use strict";
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function o() {
            for (var e = [], t = 0, n = 0; n < arguments.length; n++)
              e.push(v(arguments[n])), (t += e[n].length);
            var r = new Uint8Array(t),
              o = 0;
            for (n = 0; n < arguments.length; n++)
              for (var i = 0; i < e[n].length; i++) r[o++] = e[n][i];
            return u.assert(o === t, "arrayBufferConcat: unexpected offset"), r;
          }
          n.r(t),
            n.d(t, "importPublicKey", function() {
              return s;
            }),
            n.d(t, "importPrivateKey", function() {
              return c;
            }),
            n.d(t, "importEcPublicKey", function() {
              return f;
            }),
            n.d(t, "importEcPrivateKey", function() {
              return l;
            }),
            n.d(t, "importRsaPublicKey", function() {
              return d;
            }),
            n.d(t, "importRsaPrivateKey", function() {
              return p;
            }),
            n.d(t, "isString", function() {
              return h;
            }),
            n.d(t, "arrayish", function() {
              return v;
            }),
            n.d(t, "convertRsaKey", function() {
              return y;
            }),
            n.d(t, "arrayFromString", function() {
              return g;
            }),
            n.d(t, "arrayFromUtf8String", function() {
              return m;
            }),
            n.d(t, "stringFromArray", function() {
              return _;
            }),
            n.d(t, "utf8StringFromArray", function() {
              return w;
            }),
            n.d(t, "stripLeadingZeros", function() {
              return b;
            }),
            n.d(t, "arrayFromInt32", function() {
              return E;
            }),
            n.d(t, "arrayBufferConcat", function() {
              return o;
            }),
            n.d(t, "sha256", function() {
              return A;
            }),
            n.d(t, "isCryptoKey", function() {
              return S;
            }),
            n.d(t, "Base64Url", function() {
              return O;
            });
          var i = n(2),
            a = n(1),
            u = new i.a(),
            s = function(e, t) {
              switch (t) {
                case "RS256":
                case "RS384":
                case "RS512":
                case "PS256":
                case "PS384":
                case "PS512":
                  return d(e, t);
                case "ES256":
                case "ES384":
                case "ES512":
                  return f(e, t);
                default:
                  throw Error("unsupported algorithm: " + t);
              }
            },
            c = function(e, t) {
              switch (t) {
                case "RS256":
                case "RS384":
                case "RS512":
                case "PS256":
                case "PS384":
                case "PS512":
                  return p(e, t);
                case "ES256":
                case "ES384":
                case "ES512":
                  return l(e, t);
                default:
                  throw Error("unsupported algorithm: " + t);
              }
            },
            f = function(e, t) {
              var n = u.getSignConfig(t),
                r = u.getKeyUsageByAlg(t);
              return a.Jose.crypto.subtle.importKey("jwk", e, n.id, !1, [
                r.publicKey,
              ]);
            },
            l = function(e, t) {
              var n = u.getSignConfig(t),
                r = u.getKeyUsageByAlg(t);
              return a.Jose.crypto.subtle.importKey("jwk", e, n.id, !1, [
                r.privateKey,
              ]);
            },
            d = function(e, t) {
              var n,
                r,
                o = u.getKeyUsageByAlg(t);
              if ("wrapKey" === o.publicKey)
                e.alg || (e.alg = t),
                  (n = y(e, ["n", "e"])),
                  (r = u.getCryptoConfig(t));
              else {
                var i = {};
                for (var s in e)
                  Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s]);
                !i.alg && t && (i.alg = t),
                  (r = u.getSignConfig(i.alg)),
                  ((n = y(i, ["n", "e"])).ext = !0);
              }
              return a.Jose.crypto.subtle.importKey("jwk", n, r.id, !1, [
                o.publicKey,
              ]);
            },
            p = function(e, t) {
              var n,
                r,
                o = u.getKeyUsageByAlg(t);
              if ("unwrapKey" === o.privateKey)
                e.alg || (e.alg = t),
                  (n = y(e, ["n", "e", "d", "p", "q", "dp", "dq", "qi"])),
                  (r = u.getCryptoConfig(t));
              else {
                var i = {};
                for (var s in e)
                  Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s]);
                (r = u.getSignConfig(t)),
                  !i.alg && t && (i.alg = t),
                  ((n = y(i, [
                    "n",
                    "e",
                    "d",
                    "p",
                    "q",
                    "dp",
                    "dq",
                    "qi",
                  ])).ext = !0);
              }
              return a.Jose.crypto.subtle.importKey("jwk", n, r.id, !1, [
                o.privateKey,
              ]);
            },
            h = function(e) {
              return "string" == typeof e || e instanceof String;
            },
            v = function(e) {
              return e instanceof Array
                ? e
                : e instanceof Uint8Array
                ? e
                : e instanceof ArrayBuffer
                ? new Uint8Array(e)
                : void u.assert(!1, "arrayish: invalid input");
            },
            y = function(e, t) {
              var n,
                r = {},
                o = [];
              t.map(function(t) {
                void 0 === e[t] && o.push(t);
              }),
                o.length > 0 &&
                  u.assert(!1, "convertRsaKey: Was expecting " + o.join()),
                void 0 !== e.kty &&
                  u.assert(
                    "RSA" === e.kty,
                    "convertRsaKey: expecting rsaKey['kty'] to be 'RSA'"
                  ),
                (r.kty = "RSA");
              try {
                u.getSignConfig(e.alg), (n = e.alg);
              } catch (t) {
                try {
                  u.getCryptoConfig(e.alg), (n = e.alg);
                } catch (e) {
                  u.assert(
                    n,
                    "convertRsaKey: expecting rsaKey['alg'] to have a valid value"
                  );
                }
              }
              r.alg = n;
              for (
                var i = function(e) {
                    return parseInt(e, 16);
                  },
                  a = 0;
                a < t.length;
                a++
              ) {
                var s = t[a],
                  c = e[s],
                  f = new O();
                if ("e" === s)
                  "number" == typeof c && (c = f.encodeArray(b(E(c))));
                else if (/^([0-9a-fA-F]{2}:)+[0-9a-fA-F]{2}$/.test(c)) {
                  var l = c.split(":").map(i);
                  c = f.encodeArray(b(l));
                } else
                  "string" != typeof c &&
                    u.assert(
                      !1,
                      "convertRsaKey: expecting rsaKey['" +
                        s +
                        "'] to be a string"
                    );
                r[s] = c;
              }
              return r;
            },
            g = function(e) {
              u.assert(h(e), "arrayFromString: invalid input");
              var t = e.split("").map(function(e) {
                return e.charCodeAt(0);
              });
              return new Uint8Array(t);
            },
            m = function(e) {
              return (
                u.assert(h(e), "arrayFromUtf8String: invalid input"),
                (e = unescape(encodeURIComponent(e))),
                g(e)
              );
            },
            _ = function(e) {
              e = v(e);
              for (var t = "", n = 0; n < e.length; n++)
                t += String.fromCharCode(e[n]);
              return t;
            },
            w = function(e) {
              u.assert(
                e instanceof ArrayBuffer,
                "utf8StringFromArray: invalid input"
              );
              var t = _(e);
              return decodeURIComponent(escape(t));
            },
            b = function(e) {
              e instanceof ArrayBuffer && (e = new Uint8Array(e));
              for (var t = !0, n = [], r = 0; r < e.length; r++)
                (t && 0 === e[r]) || ((t = !1), n.push(e[r]));
              return n;
            },
            E = function(e) {
              u.assert("number" == typeof e, "arrayFromInt32: invalid input"),
                u.assert((e == e) | 0, "arrayFromInt32: out of range");
              for (
                var t = new Uint8Array(new Uint32Array([e]).buffer),
                  n = new Uint8Array(4),
                  r = 0;
                r < 4;
                r++
              )
                n[r] = t[3 - r];
              return n.buffer;
            },
            A = function(e) {
              return a.Jose.crypto.subtle
                .digest({ name: "SHA-256" }, g(e))
                .then(function(e) {
                  return new O().encodeArray(e);
                });
            },
            S = function(e) {
              return (
                "CryptoKey" === e.constructor.name ||
                !!Object.prototype.hasOwnProperty.call(e, "algorithm")
              );
            },
            O = (function() {
              function e() {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
              }
              var t, n;
              return (
                (t = e),
                (n = [
                  {
                    key: "encode",
                    value: function(e) {
                      return (
                        u.assert(h(e), "Base64Url.encode: invalid input"),
                        btoa(e)
                          .replace(/\+/g, "-")
                          .replace(/\//g, "_")
                          .replace(/=+$/, "")
                      );
                    },
                  },
                  {
                    key: "encodeArray",
                    value: function(e) {
                      return this.encode(_(e));
                    },
                  },
                  {
                    key: "decode",
                    value: function(e) {
                      return (
                        u.assert(h(e), "Base64Url.decode: invalid input"),
                        atob(e.replace(/-/g, "+").replace(/_/g, "/"))
                      );
                    },
                  },
                  {
                    key: "decodeArray",
                    value: function(e) {
                      return (
                        u.assert(h(e), "Base64Url.decodeArray: invalid input"),
                        g(this.decode(e))
                      );
                    },
                  },
                ]) && r(t.prototype, n),
                e
              );
            })();
        },
        function(e, t, n) {
          "use strict";
          n.r(t),
            function(e, r) {
              function o(e) {
                return (o =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function(e) {
                        return typeof e;
                      }
                    : function(e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              n.d(t, "crypto", function() {
                return i;
              }),
                n.d(t, "Utils", function() {
                  return d;
                }),
                n.d(t, "setCrypto", function() {
                  return v;
                }),
                n.d(t, "Jose", function() {
                  return y;
                }),
                n.d(t, "JoseJWE", function() {
                  return p;
                }),
                n.d(t, "JoseJWS", function() {
                  return h;
                }),
                n.d(t, "caniuse", function() {
                  return g;
                });
              var i,
                a = n(0),
                u = n(4),
                s = n(5),
                c = n(6),
                f = n(7),
                l = n(2);
              n.d(t, "WebCryptographer", function() {
                return l.a;
              });
              var d = a,
                p = { Encrypter: u.a, Decrypter: s.a },
                h = { Signer: c.a, Verifier: f.a },
                v = function(e) {
                  i = e;
                };
              "undefined" != typeof window &&
                void 0 !== window.crypto &&
                (v(window.crypto), i.subtle || (i.subtle = i.webkitSubtle));
              var y = {
                JoseJWS: h,
                JoseJWE: p,
                WebCryptographer: l.a,
                crypto: i,
                Utils: d,
              };
              (t.default = { Jose: y, WebCryptographer: l.a }),
                "function" != typeof atob &&
                  (atob = function(t) {
                    return e.from(t, "base64").toString("binary");
                  }),
                "function" != typeof btoa &&
                  (btoa = function(t) {
                    return (t instanceof e
                      ? t
                      : e.from(t.toString(), "binary")
                    ).toString("base64");
                  });
              var g = function() {
                var e = !0;
                e =
                  (e =
                    (e =
                      (e = e && "function" == typeof Promise) &&
                      "function" == typeof Promise.reject) &&
                    "function" == typeof Promise.prototype.then) &&
                  "function" == typeof Promise.all;
                var t = window || r;
                return (e =
                  (e =
                    (e =
                      (e =
                        (e =
                          (e =
                            (e =
                              (e =
                                (e =
                                  (e =
                                    (e =
                                      (e =
                                        (e =
                                          (e =
                                            (e =
                                              (e =
                                                (e =
                                                  (e =
                                                    (e =
                                                      e &&
                                                      "object" ===
                                                        o(t.crypto)) &&
                                                    "object" ===
                                                      o(t.crypto.subtle)) &&
                                                  "function" ==
                                                    typeof t.crypto
                                                      .getRandomValues) &&
                                                "function" ==
                                                  typeof t.crypto.subtle
                                                    .importKey) &&
                                              "function" ==
                                                typeof t.crypto.subtle
                                                  .generateKey) &&
                                            "function" ==
                                              typeof t.crypto.subtle
                                                .exportKey) &&
                                          "function" ==
                                            typeof t.crypto.subtle.wrapKey) &&
                                        "function" ==
                                          typeof t.crypto.subtle.unwrapKey) &&
                                      "function" ==
                                        typeof t.crypto.subtle.encrypt) &&
                                    "function" ==
                                      typeof t.crypto.subtle.decrypt) &&
                                  "function" == typeof t.crypto.subtle.sign) &&
                                "function" == typeof ArrayBuffer) &&
                              ("function" == typeof Uint8Array ||
                                "object" ===
                                  ("undefined" == typeof Uint8Array
                                    ? "undefined"
                                    : o(Uint8Array)))) &&
                            ("function" == typeof Uint32Array ||
                              "object" ===
                                ("undefined" == typeof Uint32Array
                                  ? "undefined"
                                  : o(Uint32Array)))) &&
                          "object" ===
                            ("undefined" == typeof JSON
                              ? "undefined"
                              : o(JSON))) && "function" == typeof JSON.parse) &&
                      "function" == typeof JSON.stringify) &&
                    "function" == typeof atob) && "function" == typeof btoa);
              };
            }.call(this, n(8).Buffer, n(3));
        },
        function(e, t, n) {
          "use strict";
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          n.d(t, "a", function() {
            return a;
          });
          var o = n(0),
            i = n(1),
            a = (function() {
              function e() {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  this.setKeyEncryptionAlgorithm("RSA-OAEP"),
                  this.setContentEncryptionAlgorithm("A256GCM"),
                  this.setContentSignAlgorithm("RS256");
              }
              var t, n;
              return (
                (t = e),
                (n = [
                  {
                    key: "setKeyEncryptionAlgorithm",
                    value: function(e) {
                      this.keyEncryption = this.getCryptoConfig(e);
                    },
                  },
                  {
                    key: "getKeyEncryptionAlgorithm",
                    value: function() {
                      return this.keyEncryption.jweName;
                    },
                  },
                  {
                    key: "setContentEncryptionAlgorithm",
                    value: function(e) {
                      this.content_encryption = this.getCryptoConfig(e);
                    },
                  },
                  {
                    key: "getContentEncryptionAlgorithm",
                    value: function() {
                      return this.content_encryption.jweName;
                    },
                  },
                  {
                    key: "setContentSignAlgorithm",
                    value: function(e) {
                      this.content_sign = this.getSignConfig(e);
                    },
                  },
                  {
                    key: "getContentSignAlgorithm",
                    value: function() {
                      return this.content_sign.jwa_name;
                    },
                  },
                  {
                    key: "createIV",
                    value: function() {
                      var e = new Uint8Array(
                        new Array(this.content_encryption.iv_bytes)
                      );
                      return i.Jose.crypto.getRandomValues(e);
                    },
                  },
                  {
                    key: "createCek",
                    value: function() {
                      var e = this.getCekWorkaround(this.content_encryption);
                      return i.Jose.crypto.subtle.generateKey(
                        e.id,
                        !0,
                        e.enc_op
                      );
                    },
                  },
                  {
                    key: "wrapCek",
                    value: function(e, t) {
                      return i.Jose.crypto.subtle.wrapKey(
                        "raw",
                        e,
                        t,
                        this.keyEncryption.id
                      );
                    },
                  },
                  {
                    key: "unwrapCek",
                    value: function(e, t) {
                      var n = this.getCekWorkaround(this.content_encryption),
                        r = this.content_encryption.specific_cekBytes > 0,
                        o = this.keyEncryption.id;
                      return i.Jose.crypto.subtle.unwrapKey(
                        "raw",
                        e,
                        t,
                        o,
                        n.id,
                        r,
                        n.dec_op
                      );
                    },
                  },
                  {
                    key: "getCekWorkaround",
                    value: function(e) {
                      var t = e.specific_cekBytes;
                      if (t) {
                        if (16 === t)
                          return {
                            id: { name: "AES-CBC", length: 128 },
                            enc_op: ["encrypt"],
                            dec_op: ["decrypt"],
                          };
                        if (32 === t)
                          return {
                            id: { name: "AES-CBC", length: 256 },
                            enc_op: ["encrypt"],
                            dec_op: ["decrypt"],
                          };
                        if (64 === t)
                          return {
                            id: { name: "HMAC", hash: { name: "SHA-256" } },
                            enc_op: ["sign"],
                            dec_op: ["verify"],
                          };
                        if (128 === t)
                          return {
                            id: { name: "HMAC", hash: { name: "SHA-384" } },
                            enc_op: ["sign"],
                            dec_op: ["verify"],
                          };
                        this.assert(!1, "getCekWorkaround: invalid len");
                      }
                      return {
                        id: e.id,
                        enc_op: ["encrypt"],
                        dec_op: ["decrypt"],
                      };
                    },
                  },
                  {
                    key: "encrypt",
                    value: function(e, t, n, r) {
                      var o = this,
                        a = this.content_encryption;
                      if (e.length !== a.iv_bytes)
                        return Promise.reject(Error("invalid IV length"));
                      if (a.auth.aead) {
                        var u = a.auth.tagBytes,
                          s = {
                            name: a.id.name,
                            iv: e,
                            additionalData: t,
                            tagLength: 8 * u,
                          };
                        return n.then(function(e) {
                          return i.Jose.crypto.subtle
                            .encrypt(s, e, r)
                            .then(function(e) {
                              var t = e.byteLength - u;
                              return { cipher: e.slice(0, t), tag: e.slice(t) };
                            });
                        });
                      }
                      var c = this.splitKey(a, n, ["encrypt"]),
                        f = c[0],
                        l = c[1].then(function(t) {
                          var n = { name: a.id.name, iv: e };
                          return i.Jose.crypto.subtle.encrypt(n, t, r);
                        }),
                        d = l.then(function(n) {
                          return o.truncatedMac(a, f, t, e, n);
                        });
                      return Promise.all([l, d]).then(function(e) {
                        return { cipher: e[0], tag: e[1] };
                      });
                    },
                  },
                  {
                    key: "compare",
                    value: function(e, t, n, r) {
                      return (
                        this.assert(
                          n instanceof Uint8Array,
                          "compare: invalid input"
                        ),
                        this.assert(
                          r instanceof Uint8Array,
                          "compare: invalid input"
                        ),
                        t.then(function(t) {
                          var o = i.Jose.crypto.subtle.sign(e.auth.id, t, n),
                            a = i.Jose.crypto.subtle.sign(e.auth.id, t, r);
                          return Promise.all([o, a]).then(function(e) {
                            var t = new Uint8Array(e[0]),
                              n = new Uint8Array(e[1]);
                            if (t.length !== n.length)
                              throw new Error("compare failed");
                            for (var r = 0; r < t.length; r++)
                              if (t[r] !== n[r])
                                throw new Error("compare failed");
                            return Promise.resolve(null);
                          });
                        })
                      );
                    },
                  },
                  {
                    key: "decrypt",
                    value: function(e, t, n, r, a) {
                      var u = this;
                      if (n.length !== this.content_encryption.iv_bytes)
                        return Promise.reject(
                          Error("decryptCiphertext: invalid IV")
                        );
                      var s = this.content_encryption;
                      if (s.auth.aead) {
                        var c = {
                          name: s.id.name,
                          iv: n,
                          additionalData: t,
                          tagLength: 8 * s.auth.tagBytes,
                        };
                        return e.then(function(e) {
                          var t = o.arrayBufferConcat(r, a);
                          return i.Jose.crypto.subtle.decrypt(c, e, t);
                        });
                      }
                      var f = this.splitKey(s, e, ["decrypt"]),
                        l = f[0],
                        d = f[1],
                        p = this.truncatedMac(s, l, t, n, r);
                      return Promise.all([d, p]).then(function(e) {
                        var t = e[0],
                          o = e[1];
                        return u
                          .compare(s, l, new Uint8Array(o), a)
                          .then(function() {
                            var e = { name: s.id.name, iv: n };
                            return i.Jose.crypto.subtle.decrypt(e, t, r);
                          })
                          .catch(function() {
                            return Promise.reject(
                              Error("decryptCiphertext: MAC failed.")
                            );
                          });
                      });
                    },
                  },
                  {
                    key: "sign",
                    value: function(e, t, n) {
                      var r = this.content_sign;
                      return (
                        e.alg && (r = this.getSignConfig(e.alg)),
                        n.then(function(n) {
                          var a = new o.Base64Url();
                          return i.Jose.crypto.subtle.sign(
                            r.id,
                            n,
                            o.arrayFromString(
                              a.encode(JSON.stringify(e)) +
                                "." +
                                a.encodeArray(t)
                            )
                          );
                        })
                      );
                    },
                  },
                  {
                    key: "verify",
                    value: function(e, t, n, r, a) {
                      var u = this.content_sign;
                      return r.then(function(r) {
                        return i.Jose.crypto.subtle
                          .verify(u.id, r, n, o.arrayFromString(e + "." + t))
                          .then(function(e) {
                            return { kid: a, verified: e };
                          });
                      });
                    },
                  },
                  {
                    key: "keyId",
                    value: function(e) {
                      return o.sha256(e.n + "+" + e.d);
                    },
                  },
                  {
                    key: "splitKey",
                    value: function(e, t, n) {
                      var r = t.then(function(e) {
                        return i.Jose.crypto.subtle.exportKey("raw", e);
                      });
                      return [
                        r.then(function(t) {
                          if (
                            8 * t.byteLength !==
                            e.id.length + 8 * e.auth.key_bytes
                          )
                            return Promise.reject(
                              Error("encryptPlainText: incorrect cek length")
                            );
                          var n = t.slice(0, e.auth.key_bytes);
                          return i.Jose.crypto.subtle.importKey(
                            "raw",
                            n,
                            e.auth.id,
                            !1,
                            ["sign"]
                          );
                        }),
                        r.then(function(t) {
                          if (
                            8 * t.byteLength !==
                            e.id.length + 8 * e.auth.key_bytes
                          )
                            return Promise.reject(
                              Error("encryptPlainText: incorrect cek length")
                            );
                          var r = t.slice(e.auth.key_bytes);
                          return i.Jose.crypto.subtle.importKey(
                            "raw",
                            r,
                            e.id,
                            !1,
                            n
                          );
                        }),
                      ];
                    },
                  },
                  {
                    key: "getCryptoConfig",
                    value: function(e) {
                      switch (e) {
                        case "RSA-OAEP":
                          return {
                            jweName: "RSA-OAEP",
                            id: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
                          };
                        case "RSA-OAEP-256":
                          return {
                            jweName: "RSA-OAEP-256",
                            id: { name: "RSA-OAEP", hash: { name: "SHA-256" } },
                          };
                        case "A128KW":
                          return {
                            jweName: "A128KW",
                            id: { name: "AES-KW", length: 128 },
                          };
                        case "A256KW":
                          return {
                            jweName: "A256KW",
                            id: { name: "AES-KW", length: 256 },
                          };
                        case "dir":
                          return { jweName: "dir" };
                        case "A128CBC-HS256":
                          return {
                            jweName: "A128CBC-HS256",
                            id: { name: "AES-CBC", length: 128 },
                            iv_bytes: 16,
                            specific_cekBytes: 32,
                            auth: {
                              key_bytes: 16,
                              id: { name: "HMAC", hash: { name: "SHA-256" } },
                              truncated_bytes: 16,
                            },
                          };
                        case "A256CBC-HS512":
                          return {
                            jweName: "A256CBC-HS512",
                            id: { name: "AES-CBC", length: 256 },
                            iv_bytes: 16,
                            specific_cekBytes: 64,
                            auth: {
                              key_bytes: 32,
                              id: { name: "HMAC", hash: { name: "SHA-512" } },
                              truncated_bytes: 32,
                            },
                          };
                        case "A128GCM":
                          return {
                            jweName: "A128GCM",
                            id: { name: "AES-GCM", length: 128 },
                            iv_bytes: 12,
                            auth: { aead: !0, tagBytes: 16 },
                          };
                        case "A256GCM":
                          return {
                            jweName: "A256GCM",
                            id: { name: "AES-GCM", length: 256 },
                            iv_bytes: 12,
                            auth: { aead: !0, tagBytes: 16 },
                          };
                        default:
                          throw Error("unsupported algorithm: " + e);
                      }
                    },
                  },
                  {
                    key: "truncatedMac",
                    value: function(e, t, n, r, a) {
                      return t.then(function(t) {
                        var u = new Uint8Array(o.arrayFromInt32(8 * n.length)),
                          s = new Uint8Array(8);
                        s.set(u, 4);
                        var c = o.arrayBufferConcat(n, r, a, s);
                        return i.Jose.crypto.subtle
                          .sign(e.auth.id, t, c)
                          .then(function(t) {
                            return t.slice(0, e.auth.truncated_bytes);
                          });
                      });
                    },
                  },
                  {
                    key: "getSignConfig",
                    value: function(e) {
                      switch (e) {
                        case "RS256":
                          return {
                            jwa_name: "RS256",
                            id: {
                              name: "RSASSA-PKCS1-v1_5",
                              hash: { name: "SHA-256" },
                            },
                          };
                        case "RS384":
                          return {
                            jwa_name: "RS384",
                            id: {
                              name: "RSASSA-PKCS1-v1_5",
                              hash: { name: "SHA-384" },
                            },
                          };
                        case "RS512":
                          return {
                            jwa_name: "RS512",
                            id: {
                              name: "RSASSA-PKCS1-v1_5",
                              hash: { name: "SHA-512" },
                            },
                          };
                        case "PS256":
                          return {
                            jwa_name: "PS256",
                            id: {
                              name: "RSA-PSS",
                              hash: { name: "SHA-256" },
                              saltLength: 20,
                            },
                          };
                        case "PS384":
                          return {
                            jwa_name: "PS384",
                            id: {
                              name: "RSA-PSS",
                              hash: { name: "SHA-384" },
                              saltLength: 20,
                            },
                          };
                        case "PS512":
                          return {
                            jwa_name: "PS512",
                            id: {
                              name: "RSA-PSS",
                              hash: { name: "SHA-512" },
                              saltLength: 20,
                            },
                          };
                        case "HS256":
                          return {
                            jwa_name: "HS256",
                            id: { name: "HMAC", hash: { name: "SHA-256" } },
                          };
                        case "HS384":
                          return {
                            jwa_name: "HS384",
                            id: { name: "HMAC", hash: { name: "SHA-384" } },
                          };
                        case "HS512":
                          return {
                            jwa_name: "HS512",
                            id: { name: "HMAC", hash: { name: "SHA-512" } },
                          };
                        case "ES256":
                          return {
                            jwa_name: "ES256",
                            id: {
                              name: "ECDSA",
                              namedCurve: "P-256",
                              hash: { name: "SHA-256" },
                            },
                          };
                        case "ES384":
                          return {
                            jwa_name: "ES384",
                            id: {
                              name: "ECDSA",
                              namedCurve: "P-384",
                              hash: { name: "SHA-384" },
                            },
                          };
                        case "ES512":
                          return {
                            jwa_name: "ES512",
                            id: {
                              name: "ECDSA",
                              namedCurve: "P-521",
                              hash: { name: "SHA-512" },
                            },
                          };
                        default:
                          throw Error("unsupported algorithm: " + e);
                      }
                    },
                  },
                  {
                    key: "getKeyUsageByAlg",
                    value: function(e) {
                      switch (e) {
                        case "RS256":
                        case "RS384":
                        case "RS512":
                        case "PS256":
                        case "PS384":
                        case "PS512":
                        case "HS256":
                        case "HS384":
                        case "HS512":
                        case "ES256":
                        case "ES384":
                        case "ES512":
                        case "ES256K":
                          return { publicKey: "verify", privateKey: "sign" };
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "A128KW":
                        case "A256KW":
                          return {
                            publicKey: "wrapKey",
                            privateKey: "unwrapKey",
                          };
                        default:
                          throw Error("unsupported algorithm: " + e);
                      }
                    },
                  },
                  {
                    key: "assert",
                    value: function(e, t) {
                      if (!e) throw new Error(t);
                    },
                  },
                ]) && r(t.prototype, n),
                e
              );
            })();
        },
        function(e, t) {
          function n(e) {
            return (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          var r;
          r = (function() {
            return this;
          })();
          try {
            r = r || new Function("return this")();
          } catch (e) {
            "object" ===
              ("undefined" == typeof window ? "undefined" : n(window)) &&
              (r = window);
          }
          e.exports = r;
        },
        function(e, t, n) {
          "use strict";
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          n.d(t, "a", function() {
            return i;
          });
          var o = n(0),
            i = (function() {
              function e(t, n) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.cryptographer = t),
                  (this.keyPromise = n),
                  (this.userHeaders = {});
              }
              var t, n;
              return (
                (t = e),
                (n = [
                  {
                    key: "addHeader",
                    value: function(e, t) {
                      this.userHeaders[e] = t;
                    },
                  },
                  {
                    key: "encrypt",
                    value: function(e) {
                      var t, n;
                      "dir" === this.cryptographer.getKeyEncryptionAlgorithm()
                        ? ((t = Promise.resolve(this.keyPromise)), (n = []))
                        : ((t = this.cryptographer.createCek()),
                          (n = Promise.all([this.keyPromise, t]).then(
                            function(e) {
                              var t = e[0],
                                n = e[1];
                              return this.cryptographer.wrapCek(n, t);
                            }.bind(this)
                          )));
                      var r = function(e, t) {
                        var n = {};
                        for (var r in this.userHeaders)
                          n[r] = this.userHeaders[r];
                        (n.alg = this.cryptographer.getKeyEncryptionAlgorithm()),
                          (n.enc = this.cryptographer.getContentEncryptionAlgorithm());
                        var i = new o.Base64Url().encode(JSON.stringify(n)),
                          a = this.cryptographer.createIV(),
                          u = o.arrayFromString(i);
                        return (
                          (t = o.arrayFromUtf8String(t)),
                          this.cryptographer
                            .encrypt(a, u, e, t)
                            .then(function(e) {
                              return (e.header = i), (e.iv = a), e;
                            })
                        );
                      }.bind(this, t, e)();
                      return Promise.all([n, r]).then(function(e) {
                        var t = e[0],
                          n = e[1],
                          r = new o.Base64Url();
                        return (
                          n.header +
                          "." +
                          r.encodeArray(t) +
                          "." +
                          r.encodeArray(n.iv) +
                          "." +
                          r.encodeArray(n.cipher) +
                          "." +
                          r.encodeArray(n.tag)
                        );
                      });
                    },
                  },
                ]) && r(t.prototype, n),
                e
              );
            })();
        },
        function(e, t, n) {
          "use strict";
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          n.d(t, "a", function() {
            return i;
          });
          var o = n(0),
            i = (function() {
              function e(t, n) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.cryptographer = t),
                  (this.keyPromise = n),
                  (this.headers = {}),
                  (this.base64UrlEncoder = new o.Base64Url());
              }
              var t, n;
              return (
                (t = e),
                (n = [
                  {
                    key: "getHeaders",
                    value: function() {
                      return this.headers;
                    },
                  },
                  {
                    key: "decrypt",
                    value: function(e) {
                      var t,
                        n = e.split(".");
                      if (5 !== n.length)
                        return Promise.reject(Error("decrypt: invalid input"));
                      if (
                        ((this.headers = JSON.parse(
                          this.base64UrlEncoder.decode(n[0])
                        )),
                        !this.headers.alg)
                      )
                        return Promise.reject(Error("decrypt: missing alg"));
                      if (!this.headers.enc)
                        return Promise.reject(Error("decrypt: missing enc"));
                      if (
                        (this.cryptographer.setKeyEncryptionAlgorithm(
                          this.headers.alg
                        ),
                        this.cryptographer.setContentEncryptionAlgorithm(
                          this.headers.enc
                        ),
                        this.headers.crit)
                      )
                        return Promise.reject(
                          Error("decrypt: crit is not supported")
                        );
                      if ("dir" === this.headers.alg)
                        t = Promise.resolve(this.keyPromise);
                      else {
                        var r = this.base64UrlEncoder.decodeArray(n[1]);
                        t = this.keyPromise.then(
                          function(e) {
                            return this.cryptographer.unwrapCek(r, e);
                          }.bind(this)
                        );
                      }
                      return this.cryptographer
                        .decrypt(
                          t,
                          o.arrayFromString(n[0]),
                          this.base64UrlEncoder.decodeArray(n[2]),
                          this.base64UrlEncoder.decodeArray(n[3]),
                          this.base64UrlEncoder.decodeArray(n[4])
                        )
                        .then(o.utf8StringFromArray);
                    },
                  },
                ]) && r(t.prototype, n),
                e
              );
            })();
        },
        function(e, t, n) {
          "use strict";
          function r(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
          }
          n.d(t, "a", function() {
            return u;
          });
          var a = n(0),
            u = (function() {
              function e(t) {
                r(this, e),
                  (this.cryptographer = t),
                  (this.keyPromises = {}),
                  (this.waiting_kid = 0),
                  (this.headers = {}),
                  (this.signer_aads = {}),
                  (this.signer_headers = {});
              }
              return (
                i(e, [
                  {
                    key: "addSigner",
                    value: function(e, t, n, r) {
                      var o,
                        i,
                        u,
                        s = this;
                      if (
                        (a.isCryptoKey(e)
                          ? (o = new Promise(function(t) {
                              t(e);
                            }))
                          : ((i =
                              n && n.alg
                                ? n.alg
                                : s.cryptographer.getContentSignAlgorithm()),
                            (o = a.importPrivateKey(e, i, "sign"))),
                        t)
                      )
                        u = new Promise(function(e) {
                          e(t);
                        });
                      else {
                        if (a.isCryptoKey(e))
                          throw new Error(
                            "keyId is a mandatory argument when the key is a CryptoKey"
                          );
                        u = this.cryptographer.keyId(e);
                      }
                      return (
                        s.waiting_kid++,
                        u.then(function(e) {
                          return (
                            (s.keyPromises[e] = o),
                            s.waiting_kid--,
                            n && (s.signer_aads[e] = n),
                            r && (s.signer_headers[e] = r),
                            e
                          );
                        })
                      );
                    },
                  },
                  {
                    key: "addSignature",
                    value: function(e, t, n) {
                      if (
                        (a.isString(e) && (e = JSON.parse(e)),
                        e.payload &&
                          a.isString(e.payload) &&
                          e.protected &&
                          a.isString(e.protected) &&
                          e.header &&
                          e.header instanceof Object &&
                          e.signature &&
                          a.isString(e.signature))
                      )
                        return this.sign(s.fromObject(e), t, n);
                      throw new Error("JWS is not a valid JWS object");
                    },
                  },
                  {
                    key: "sign",
                    value: function(e, t, n) {
                      function r(e, t, n, r, i) {
                        var u;
                        if (
                          (t || (t = {}),
                          t.alg ||
                            ((t.alg = o.cryptographer.getContentSignAlgorithm()),
                            (t.typ = "JWT")),
                          t.kid || (t.kid = i),
                          a.isString(e))
                        )
                          u = a.arrayFromUtf8String(e);
                        else
                          try {
                            u = a.arrayish(e);
                          } catch (t) {
                            if (e instanceof s)
                              u = a.arrayFromString(
                                new a.Base64Url().decode(e.payload)
                              );
                            else {
                              if (!(e instanceof Object))
                                throw new Error("cannot sign this message");
                              u = a.arrayFromUtf8String(JSON.stringify(e));
                            }
                          }
                        return o.cryptographer.sign(t, u, r).then(function(r) {
                          var o = new s(t, n, u, r);
                          return e instanceof s
                            ? (delete o.payload,
                              e.signatures
                                ? e.signatures.push(o)
                                : (e.signatures = [o]),
                              e)
                            : o;
                        });
                      }
                      var o = this,
                        i = [];
                      if (0 === Object.keys(o.keyPromises).length)
                        throw new Error(
                          "No signers defined. At least one is required to sign the JWS."
                        );
                      if (o.waiting_kid)
                        throw new Error("still generating key IDs");
                      for (var u in o.keyPromises)
                        Object.prototype.hasOwnProperty.call(
                          o.keyPromises,
                          u
                        ) && i.push(u);
                      return (function e(t, n, i, a, u) {
                        if (u.length) {
                          var s = u.shift(),
                            c = r(
                              t,
                              o.signer_aads[s] || n,
                              o.signer_headers[s] || i,
                              a[s],
                              s
                            );
                          return (
                            u.length &&
                              (c = c.then(function(t) {
                                return e(t, null, null, a, u);
                              })),
                            c
                          );
                        }
                      })(e, t, n, o.keyPromises, i);
                    },
                  },
                ]),
                e
              );
            })(),
            s = (function() {
              function e(t, n, o, i) {
                r(this, e), (this.header = n);
                var u = new a.Base64Url();
                (this.payload = u.encodeArray(o)),
                  i && (this.signature = u.encodeArray(i)),
                  (this.protected = u.encode(JSON.stringify(t)));
              }
              return (
                i(e, [
                  {
                    key: "fromObject",
                    value: function(t) {
                      var n = new e(t.protected, t.header, t.payload, null);
                      return (
                        (n.signature = t.signature),
                        (n.signatures = t.signatures),
                        n
                      );
                    },
                  },
                  {
                    key: "JsonSerialize",
                    value: function() {
                      return JSON.stringify(this);
                    },
                  },
                  {
                    key: "CompactSerialize",
                    value: function() {
                      return (
                        this.protected +
                        "." +
                        this.payload +
                        "." +
                        this.signature
                      );
                    },
                  },
                ]),
                e
              );
            })();
        },
        function(e, t, n) {
          "use strict";
          function r(e) {
            return (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          n.d(t, "a", function() {
            return a;
          });
          var i = n(0),
            a = (function() {
              function e(t, n, o) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var a, u, s, c, f, l, d;
                if (
                  ((this.cryptographer = t),
                  (a = t.getContentSignAlgorithm()),
                  i.isString(n))
                )
                  if (
                    (u = /^([0-9a-z_-]+)\.([0-9a-z_-]+)\.([0-9a-z_-]+)$/i.exec(
                      n
                    ))
                  ) {
                    if (4 !== u.length)
                      throw new Error("wrong JWS compact serialization format");
                    n = { protected: u[1], payload: u[2], signature: u[3] };
                  } else n = JSON.parse(n);
                else if ("object" !== r(n))
                  throw new Error("data format not supported");
                (s = n.protected),
                  (c = n.header),
                  (f = n.payload),
                  (l =
                    n.signatures instanceof Array
                      ? n.signatures.slice(0)
                      : []).forEach(function(e) {
                    (e.aad = e.protected),
                      (e.protected = JSON.parse(
                        new i.Base64Url().decode(e.protected)
                      ));
                  }),
                  (this.aad = s),
                  (d = new i.Base64Url().decode(s));
                try {
                  d = JSON.parse(d);
                } catch (e) {}
                if (!d && !c)
                  throw new Error("at least one header is required");
                if (!d.alg) throw new Error("'alg' is a mandatory header");
                if (d.alg !== a)
                  throw new Error(
                    "the alg header '" +
                      d.alg +
                      "' doesn't match the requested algorithm '" +
                      a +
                      "'"
                  );
                if (d && d.typ && "JWT" !== d.typ)
                  throw new Error("typ '" + d.typ + "' not supported");
                n.signature &&
                  l.unshift({
                    aad: s,
                    protected: d,
                    header: c,
                    signature: n.signature,
                  }),
                  (this.signatures = []);
                for (var p = 0; p < l.length; p++)
                  (this.signatures[p] = JSON.parse(JSON.stringify(l[p]))),
                    (this.signatures[p].signature = i.arrayFromString(
                      new i.Base64Url().decode(l[p].signature)
                    ));
                (this.payload = f),
                  (this.keyPromises = {}),
                  (this.waiting_kid = 0),
                  o && (this.keyfinder = o);
              }
              var t, n;
              return (
                (t = e),
                (n = [
                  {
                    key: "addRecipient",
                    value: function(e, t, n) {
                      var r,
                        o,
                        a = this;
                      if (
                        ((o = i.isCryptoKey(e)
                          ? new Promise(function(t) {
                              t(e);
                            })
                          : i.importPublicKey(
                              e,
                              n || a.cryptographer.getContentSignAlgorithm(),
                              "verify"
                            )),
                        t)
                      )
                        r = new Promise(function(e) {
                          e(t);
                        });
                      else {
                        if (i.isCryptoKey(e))
                          throw new Error(
                            "keyId is a mandatory argument when the key is a CryptoKey"
                          );
                        console.log("it's unsafe to omit a keyId"),
                          (r = this.cryptographer.keyId(e));
                      }
                      return (
                        a.waiting_kid++,
                        r.then(function(e) {
                          return (a.keyPromises[e] = o), a.waiting_kid--, e;
                        })
                      );
                    },
                  },
                  {
                    key: "verify",
                    value: function() {
                      var e = this,
                        t = e.signatures,
                        n = e.keyPromises,
                        r = e.keyfinder,
                        o = [];
                      if (!(r || Object.keys(e.keyPromises).length > 0))
                        throw new Error(
                          "No recipients defined. At least one is required to verify the JWS."
                        );
                      if (e.waiting_kid)
                        throw new Error("still generating key IDs");
                      return (
                        t.forEach(function(t) {
                          var a = t.protected.kid;
                          r && (n[a] = r(a)),
                            o.push(
                              e.cryptographer
                                .verify(t.aad, e.payload, t.signature, n[a], a)
                                .then(function(t) {
                                  return (
                                    t.verified &&
                                      (t.payload = new i.Base64Url().decode(
                                        e.payload
                                      )),
                                    t
                                  );
                                })
                            );
                        }),
                        Promise.all(o)
                      );
                    },
                  },
                ]) && o(t.prototype, n),
                e
              );
            })();
        },
        function(e, t, n) {
          "use strict";
          (function(e) {
            function r() {
              return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function o(e, t) {
              if (r() < t) throw new RangeError("Invalid typed array length");
              return (
                i.TYPED_ARRAY_SUPPORT
                  ? ((e = new Uint8Array(t)).__proto__ = i.prototype)
                  : (null === e && (e = new i(t)), (e.length = t)),
                e
              );
            }
            function i(e, t, n) {
              if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i))
                return new i(e, t, n);
              if ("number" == typeof e) {
                if ("string" == typeof t)
                  throw new Error(
                    "If encoding is specified then the first argument must be a string"
                  );
                return s(this, e);
              }
              return a(this, e, t, n);
            }
            function a(e, t, n, r) {
              if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
              return "undefined" != typeof ArrayBuffer &&
                t instanceof ArrayBuffer
                ? (function(e, t, n, r) {
                    if ((t.byteLength, n < 0 || t.byteLength < n))
                      throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0))
                      throw new RangeError("'length' is out of bounds");
                    return (
                      (t =
                        void 0 === n && void 0 === r
                          ? new Uint8Array(t)
                          : void 0 === r
                          ? new Uint8Array(t, n)
                          : new Uint8Array(t, n, r)),
                      i.TYPED_ARRAY_SUPPORT
                        ? ((e = t).__proto__ = i.prototype)
                        : (e = c(e, t)),
                      e
                    );
                  })(e, t, n, r)
                : "string" == typeof t
                ? (function(e, t, n) {
                    if (
                      (("string" == typeof n && "" !== n) || (n = "utf8"),
                      !i.isEncoding(n))
                    )
                      throw new TypeError(
                        '"encoding" must be a valid string encoding'
                      );
                    var r = 0 | l(t, n),
                      a = (e = o(e, r)).write(t, n);
                    return a !== r && (e = e.slice(0, a)), e;
                  })(e, t, n)
                : (function(e, t) {
                    if (i.isBuffer(t)) {
                      var n = 0 | f(t.length);
                      return 0 === (e = o(e, n)).length
                        ? e
                        : (t.copy(e, 0, 0, n), e);
                    }
                    if (t) {
                      if (
                        ("undefined" != typeof ArrayBuffer &&
                          t.buffer instanceof ArrayBuffer) ||
                        "length" in t
                      )
                        return "number" != typeof t.length ||
                          (r = t.length) != r
                          ? o(e, 0)
                          : c(e, t);
                      if ("Buffer" === t.type && B(t.data)) return c(e, t.data);
                    }
                    var r;
                    throw new TypeError(
                      "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                    );
                  })(e, t);
            }
            function u(e) {
              if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
              if (e < 0)
                throw new RangeError('"size" argument must not be negative');
            }
            function s(e, t) {
              if (
                (u(t), (e = o(e, t < 0 ? 0 : 0 | f(t))), !i.TYPED_ARRAY_SUPPORT)
              )
                for (var n = 0; n < t; ++n) e[n] = 0;
              return e;
            }
            function c(e, t) {
              var n = t.length < 0 ? 0 : 0 | f(t.length);
              e = o(e, n);
              for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
              return e;
            }
            function f(e) {
              if (e >= r())
                throw new RangeError(
                  "Attempt to allocate Buffer larger than maximum size: 0x" +
                    r().toString(16) +
                    " bytes"
                );
              return 0 | e;
            }
            function l(e, t) {
              if (i.isBuffer(e)) return e.length;
              if (
                "undefined" != typeof ArrayBuffer &&
                "function" == typeof ArrayBuffer.isView &&
                (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
              )
                return e.byteLength;
              "string" != typeof e && (e = "" + e);
              var n = e.length;
              if (0 === n) return 0;
              for (var r = !1; ; )
                switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;
                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return j(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n;
                  case "hex":
                    return n >>> 1;
                  case "base64":
                    return D(e).length;
                  default:
                    if (r) return j(e).length;
                    (t = ("" + t).toLowerCase()), (r = !0);
                }
            }
            function d(e, t, n) {
              var r = !1;
              if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                return "";
              if (
                ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
              )
                return "";
              if ((n >>>= 0) <= (t >>>= 0)) return "";
              for (e || (e = "utf8"); ; )
                switch (e) {
                  case "hex":
                    return k(this, t, n);
                  case "utf8":
                  case "utf-8":
                    return A(this, t, n);
                  case "ascii":
                    return S(this, t, n);
                  case "latin1":
                  case "binary":
                    return O(this, t, n);
                  case "base64":
                    return E(this, t, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return P(this, t, n);
                  default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    (e = (e + "").toLowerCase()), (r = !0);
                }
            }
            function p(e, t, n) {
              var r = e[t];
              (e[t] = e[n]), (e[n] = r);
            }
            function h(e, t, n, r, o) {
              if (0 === e.length) return -1;
              if (
                ("string" == typeof n
                  ? ((r = n), (n = 0))
                  : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
                (n = +n),
                isNaN(n) && (n = o ? 0 : e.length - 1),
                n < 0 && (n = e.length + n),
                n >= e.length)
              ) {
                if (o) return -1;
                n = e.length - 1;
              } else if (n < 0) {
                if (!o) return -1;
                n = 0;
              }
              if (("string" == typeof t && (t = i.from(t, r)), i.isBuffer(t)))
                return 0 === t.length ? -1 : v(e, t, n, r, o);
              if ("number" == typeof t)
                return (
                  (t &= 255),
                  i.TYPED_ARRAY_SUPPORT &&
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? o
                      ? Uint8Array.prototype.indexOf.call(e, t, n)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                    : v(e, [t], n, r, o)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function v(e, t, n, r, o) {
              function i(e, t) {
                return 1 === u ? e[t] : e.readUInt16BE(t * u);
              }
              var a,
                u = 1,
                s = e.length,
                c = t.length;
              if (
                void 0 !== r &&
                ("ucs2" === (r = String(r).toLowerCase()) ||
                  "ucs-2" === r ||
                  "utf16le" === r ||
                  "utf-16le" === r)
              ) {
                if (e.length < 2 || t.length < 2) return -1;
                (u = 2), (s /= 2), (c /= 2), (n /= 2);
              }
              if (o) {
                var f = -1;
                for (a = n; a < s; a++)
                  if (i(e, a) === i(t, -1 === f ? 0 : a - f)) {
                    if ((-1 === f && (f = a), a - f + 1 === c)) return f * u;
                  } else -1 !== f && (a -= a - f), (f = -1);
              } else
                for (n + c > s && (n = s - c), a = n; a >= 0; a--) {
                  for (var l = !0, d = 0; d < c; d++)
                    if (i(e, a + d) !== i(t, d)) {
                      l = !1;
                      break;
                    }
                  if (l) return a;
                }
              return -1;
            }
            function y(e, t, n, r) {
              n = Number(n) || 0;
              var o = e.length - n;
              r ? (r = Number(r)) > o && (r = o) : (r = o);
              var i = t.length;
              if (i % 2 != 0) throw new TypeError("Invalid hex string");
              r > i / 2 && (r = i / 2);
              for (var a = 0; a < r; ++a) {
                var u = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(u)) return a;
                e[n + a] = u;
              }
              return a;
            }
            function g(e, t, n, r) {
              return U(j(t, e.length - n), e, n, r);
            }
            function m(e, t, n, r) {
              return U(
                (function(e) {
                  for (var t = [], n = 0; n < e.length; ++n)
                    t.push(255 & e.charCodeAt(n));
                  return t;
                })(t),
                e,
                n,
                r
              );
            }
            function _(e, t, n, r) {
              return m(e, t, n, r);
            }
            function w(e, t, n, r) {
              return U(D(t), e, n, r);
            }
            function b(e, t, n, r) {
              return U(
                (function(e, t) {
                  for (
                    var n, r, o, i = [], a = 0;
                    a < e.length && !((t -= 2) < 0);
                    ++a
                  )
                    (n = e.charCodeAt(a)),
                      (r = n >> 8),
                      (o = n % 256),
                      i.push(o),
                      i.push(r);
                  return i;
                })(t, e.length - n),
                e,
                n,
                r
              );
            }
            function E(e, t, n) {
              return 0 === t && n === e.length
                ? H.fromByteArray(e)
                : H.fromByteArray(e.slice(t, n));
            }
            function A(e, t, n) {
              n = Math.min(e.length, n);
              for (var r = [], o = t; o < n; ) {
                var i,
                  a,
                  u,
                  s,
                  c = e[o],
                  f = null,
                  l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (o + l <= n)
                  switch (l) {
                    case 1:
                      c < 128 && (f = c);
                      break;
                    case 2:
                      128 == (192 & (i = e[o + 1])) &&
                        (s = ((31 & c) << 6) | (63 & i)) > 127 &&
                        (f = s);
                      break;
                    case 3:
                      (i = e[o + 1]),
                        (a = e[o + 2]),
                        128 == (192 & i) &&
                          128 == (192 & a) &&
                          (s = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) >
                            2047 &&
                          (s < 55296 || s > 57343) &&
                          (f = s);
                      break;
                    case 4:
                      (i = e[o + 1]),
                        (a = e[o + 2]),
                        (u = e[o + 3]),
                        128 == (192 & i) &&
                          128 == (192 & a) &&
                          128 == (192 & u) &&
                          (s =
                            ((15 & c) << 18) |
                            ((63 & i) << 12) |
                            ((63 & a) << 6) |
                            (63 & u)) > 65535 &&
                          s < 1114112 &&
                          (f = s);
                  }
                null === f
                  ? ((f = 65533), (l = 1))
                  : f > 65535 &&
                    ((f -= 65536),
                    r.push(((f >>> 10) & 1023) | 55296),
                    (f = 56320 | (1023 & f))),
                  r.push(f),
                  (o += l);
              }
              return (function(e) {
                var t = e.length;
                if (t <= K) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; r < t; )
                  n += String.fromCharCode.apply(String, e.slice(r, (r += K)));
                return n;
              })(r);
            }
            function S(e, t, n) {
              var r = "";
              n = Math.min(e.length, n);
              for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
              return r;
            }
            function O(e, t, n) {
              var r = "";
              n = Math.min(e.length, n);
              for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
              return r;
            }
            function k(e, t, n) {
              var r = e.length;
              (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
              for (var o = "", i = t; i < n; ++i) o += M(e[i]);
              return o;
            }
            function P(e, t, n) {
              for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
                o += String.fromCharCode(r[i] + 256 * r[i + 1]);
              return o;
            }
            function T(e, t, n) {
              if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
              if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length");
            }
            function I(e, t, n, r, o, a) {
              if (!i.isBuffer(e))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance'
                );
              if (t > o || t < a)
                throw new RangeError('"value" argument is out of bounds');
              if (n + r > e.length) throw new RangeError("Index out of range");
            }
            function C(e, t, n, r) {
              t < 0 && (t = 65535 + t + 1);
              for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
                e[n + o] =
                  (t & (255 << (8 * (r ? o : 1 - o)))) >>>
                  (8 * (r ? o : 1 - o));
            }
            function R(e, t, n, r) {
              t < 0 && (t = 4294967295 + t + 1);
              for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
                e[n + o] = (t >>> (8 * (r ? o : 3 - o))) & 255;
            }
            function L(e, t, n, r, o, i) {
              if (n + r > e.length) throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("Index out of range");
            }
            function x(e, t, n, r, o) {
              return o || L(e, 0, n, 4), F.write(e, t, n, r, 23, 4), n + 4;
            }
            function N(e, t, n, r, o) {
              return o || L(e, 0, n, 8), F.write(e, t, n, r, 52, 8), n + 8;
            }
            function M(e) {
              return e < 16 ? "0" + e.toString(16) : e.toString(16);
            }
            function j(e, t) {
              var n;
              t = t || 1 / 0;
              for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                  if (!o) {
                    if (n > 56319) {
                      (t -= 3) > -1 && i.push(239, 191, 189);
                      continue;
                    }
                    if (a + 1 === r) {
                      (t -= 3) > -1 && i.push(239, 191, 189);
                      continue;
                    }
                    o = n;
                    continue;
                  }
                  if (n < 56320) {
                    (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
                    continue;
                  }
                  n = 65536 + (((o - 55296) << 10) | (n - 56320));
                } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (((o = null), n < 128)) {
                  if ((t -= 1) < 0) break;
                  i.push(n);
                } else if (n < 2048) {
                  if ((t -= 2) < 0) break;
                  i.push((n >> 6) | 192, (63 & n) | 128);
                } else if (n < 65536) {
                  if ((t -= 3) < 0) break;
                  i.push(
                    (n >> 12) | 224,
                    ((n >> 6) & 63) | 128,
                    (63 & n) | 128
                  );
                } else {
                  if (!(n < 1114112)) throw new Error("Invalid code point");
                  if ((t -= 4) < 0) break;
                  i.push(
                    (n >> 18) | 240,
                    ((n >> 12) & 63) | 128,
                    ((n >> 6) & 63) | 128,
                    (63 & n) | 128
                  );
                }
              }
              return i;
            }
            function D(e) {
              return H.toByteArray(
                (function(e) {
                  if (
                    (e = (function(e) {
                      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                    })(e).replace(W, "")).length < 2
                  )
                    return "";
                  for (; e.length % 4 != 0; ) e += "=";
                  return e;
                })(e)
              );
            }
            function U(e, t, n, r) {
              for (
                var o = 0;
                o < r && !(o + n >= t.length || o >= e.length);
                ++o
              )
                t[o + n] = e[o];
              return o;
            }
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var H = n(9),
              F = n(10),
              B = n(11);
            (t.Buffer = i),
              (t.SlowBuffer = function(e) {
                return +e != e && (e = 0), i.alloc(+e);
              }),
              (t.INSPECT_MAX_BYTES = 50),
              (i.TYPED_ARRAY_SUPPORT =
                void 0 !== e.TYPED_ARRAY_SUPPORT
                  ? e.TYPED_ARRAY_SUPPORT
                  : (function() {
                      try {
                        var e = new Uint8Array(1);
                        return (
                          (e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                              return 42;
                            },
                          }),
                          42 === e.foo() &&
                            "function" == typeof e.subarray &&
                            0 === e.subarray(1, 1).byteLength
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
              (t.kMaxLength = r()),
              (i.poolSize = 8192),
              (i._augment = function(e) {
                return (e.__proto__ = i.prototype), e;
              }),
              (i.from = function(e, t, n) {
                return a(null, e, t, n);
              }),
              i.TYPED_ARRAY_SUPPORT &&
                ((i.prototype.__proto__ = Uint8Array.prototype),
                (i.__proto__ = Uint8Array),
                "undefined" != typeof Symbol &&
                  Symbol.species &&
                  i[Symbol.species] === i &&
                  Object.defineProperty(i, Symbol.species, {
                    value: null,
                    configurable: !0,
                  })),
              (i.alloc = function(e, t, n) {
                return (function(e, t, n, r) {
                  return (
                    u(t),
                    t <= 0
                      ? o(e, t)
                      : void 0 !== n
                      ? "string" == typeof r
                        ? o(e, t).fill(n, r)
                        : o(e, t).fill(n)
                      : o(e, t)
                  );
                })(null, e, t, n);
              }),
              (i.allocUnsafe = function(e) {
                return s(null, e);
              }),
              (i.allocUnsafeSlow = function(e) {
                return s(null, e);
              }),
              (i.isBuffer = function(e) {
                return !(null == e || !e._isBuffer);
              }),
              (i.compare = function(e, t) {
                if (!i.isBuffer(e) || !i.isBuffer(t))
                  throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (
                  var n = e.length, r = t.length, o = 0, a = Math.min(n, r);
                  o < a;
                  ++o
                )
                  if (e[o] !== t[o]) {
                    (n = e[o]), (r = t[o]);
                    break;
                  }
                return n < r ? -1 : r < n ? 1 : 0;
              }),
              (i.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;
                  default:
                    return !1;
                }
              }),
              (i.concat = function(e, t) {
                if (!B(e))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                if (0 === e.length) return i.alloc(0);
                var n;
                if (void 0 === t)
                  for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = i.allocUnsafe(t),
                  o = 0;
                for (n = 0; n < e.length; ++n) {
                  var a = e[n];
                  if (!i.isBuffer(a))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  a.copy(r, o), (o += a.length);
                }
                return r;
              }),
              (i.byteLength = l),
              (i.prototype._isBuffer = !0),
              (i.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 16-bits"
                  );
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this;
              }),
              (i.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 32-bits"
                  );
                for (var t = 0; t < e; t += 4)
                  p(this, t, t + 3), p(this, t + 1, t + 2);
                return this;
              }),
              (i.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 64-bits"
                  );
                for (var t = 0; t < e; t += 8)
                  p(this, t, t + 7),
                    p(this, t + 1, t + 6),
                    p(this, t + 2, t + 5),
                    p(this, t + 3, t + 4);
                return this;
              }),
              (i.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e
                  ? ""
                  : 0 === arguments.length
                  ? A(this, 0, e)
                  : d.apply(this, arguments);
              }),
              (i.prototype.equals = function(e) {
                if (!i.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === i.compare(this, e);
              }),
              (i.prototype.inspect = function() {
                var e = "",
                  n = t.INSPECT_MAX_BYTES;
                return (
                  this.length > 0 &&
                    ((e = this.toString("hex", 0, n)
                      .match(/.{2}/g)
                      .join(" ")),
                    this.length > n && (e += " ... ")),
                  "<Buffer " + e + ">"
                );
              }),
              (i.prototype.compare = function(e, t, n, r, o) {
                if (!i.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
                if (
                  (void 0 === t && (t = 0),
                  void 0 === n && (n = e ? e.length : 0),
                  void 0 === r && (r = 0),
                  void 0 === o && (o = this.length),
                  t < 0 || n > e.length || r < 0 || o > this.length)
                )
                  throw new RangeError("out of range index");
                if (r >= o && t >= n) return 0;
                if (r >= o) return -1;
                if (t >= n) return 1;
                if (this === e) return 0;
                for (
                  var a = (o >>>= 0) - (r >>>= 0),
                    u = (n >>>= 0) - (t >>>= 0),
                    s = Math.min(a, u),
                    c = this.slice(r, o),
                    f = e.slice(t, n),
                    l = 0;
                  l < s;
                  ++l
                )
                  if (c[l] !== f[l]) {
                    (a = c[l]), (u = f[l]);
                    break;
                  }
                return a < u ? -1 : u < a ? 1 : 0;
              }),
              (i.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n);
              }),
              (i.prototype.indexOf = function(e, t, n) {
                return h(this, e, t, n, !0);
              }),
              (i.prototype.lastIndexOf = function(e, t, n) {
                return h(this, e, t, n, !1);
              }),
              (i.prototype.write = function(e, t, n, r) {
                if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                else if (void 0 === n && "string" == typeof t)
                  (r = t), (n = this.length), (t = 0);
                else {
                  if (!isFinite(t))
                    throw new Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  (t |= 0),
                    isFinite(n)
                      ? ((n |= 0), void 0 === r && (r = "utf8"))
                      : ((r = n), (n = void 0));
                }
                var o = this.length - t;
                if (
                  ((void 0 === n || n > o) && (n = o),
                  (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
                )
                  throw new RangeError(
                    "Attempt to write outside buffer bounds"
                  );
                r || (r = "utf8");
                for (var i = !1; ; )
                  switch (r) {
                    case "hex":
                      return y(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                      return g(this, e, t, n);
                    case "ascii":
                      return m(this, e, t, n);
                    case "latin1":
                    case "binary":
                      return _(this, e, t, n);
                    case "base64":
                      return w(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return b(this, e, t, n);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + r);
                      (r = ("" + r).toLowerCase()), (i = !0);
                  }
              }),
              (i.prototype.toJSON = function() {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0),
                };
              });
            var K = 4096;
            (i.prototype.slice = function(e, t) {
              var n,
                r = this.length;
              if (
                ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                (t = void 0 === t ? r : ~~t) < 0
                  ? (t += r) < 0 && (t = 0)
                  : t > r && (t = r),
                t < e && (t = e),
                i.TYPED_ARRAY_SUPPORT)
              )
                (n = this.subarray(e, t)).__proto__ = i.prototype;
              else {
                var o = t - e;
                n = new i(o, void 0);
                for (var a = 0; a < o; ++a) n[a] = this[a + e];
              }
              return n;
            }),
              (i.prototype.readUIntLE = function(e, t, n) {
                (e |= 0), (t |= 0), n || T(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                  r += this[e + i] * o;
                return r;
              }),
              (i.prototype.readUIntBE = function(e, t, n) {
                (e |= 0), (t |= 0), n || T(e, t, this.length);
                for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
                  r += this[e + --t] * o;
                return r;
              }),
              (i.prototype.readUInt8 = function(e, t) {
                return t || T(e, 1, this.length), this[e];
              }),
              (i.prototype.readUInt16LE = function(e, t) {
                return t || T(e, 2, this.length), this[e] | (this[e + 1] << 8);
              }),
              (i.prototype.readUInt16BE = function(e, t) {
                return t || T(e, 2, this.length), (this[e] << 8) | this[e + 1];
              }),
              (i.prototype.readUInt32LE = function(e, t) {
                return (
                  t || T(e, 4, this.length),
                  (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                    16777216 * this[e + 3]
                );
              }),
              (i.prototype.readUInt32BE = function(e, t) {
                return (
                  t || T(e, 4, this.length),
                  16777216 * this[e] +
                    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                );
              }),
              (i.prototype.readIntLE = function(e, t, n) {
                (e |= 0), (t |= 0), n || T(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                  r += this[e + i] * o;
                return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
              }),
              (i.prototype.readIntBE = function(e, t, n) {
                (e |= 0), (t |= 0), n || T(e, t, this.length);
                for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
                  i += this[e + --r] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
              }),
              (i.prototype.readInt8 = function(e, t) {
                return (
                  t || T(e, 1, this.length),
                  128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                );
              }),
              (i.prototype.readInt16LE = function(e, t) {
                t || T(e, 2, this.length);
                var n = this[e] | (this[e + 1] << 8);
                return 32768 & n ? 4294901760 | n : n;
              }),
              (i.prototype.readInt16BE = function(e, t) {
                t || T(e, 2, this.length);
                var n = this[e + 1] | (this[e] << 8);
                return 32768 & n ? 4294901760 | n : n;
              }),
              (i.prototype.readInt32LE = function(e, t) {
                return (
                  t || T(e, 4, this.length),
                  this[e] |
                    (this[e + 1] << 8) |
                    (this[e + 2] << 16) |
                    (this[e + 3] << 24)
                );
              }),
              (i.prototype.readInt32BE = function(e, t) {
                return (
                  t || T(e, 4, this.length),
                  (this[e] << 24) |
                    (this[e + 1] << 16) |
                    (this[e + 2] << 8) |
                    this[e + 3]
                );
              }),
              (i.prototype.readFloatLE = function(e, t) {
                return t || T(e, 4, this.length), F.read(this, e, !0, 23, 4);
              }),
              (i.prototype.readFloatBE = function(e, t) {
                return t || T(e, 4, this.length), F.read(this, e, !1, 23, 4);
              }),
              (i.prototype.readDoubleLE = function(e, t) {
                return t || T(e, 8, this.length), F.read(this, e, !0, 52, 8);
              }),
              (i.prototype.readDoubleBE = function(e, t) {
                return t || T(e, 8, this.length), F.read(this, e, !1, 52, 8);
              }),
              (i.prototype.writeUIntLE = function(e, t, n, r) {
                (e = +e),
                  (t |= 0),
                  (n |= 0),
                  r || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1,
                  i = 0;
                for (this[t] = 255 & e; ++i < n && (o *= 256); )
                  this[t + i] = (e / o) & 255;
                return t + n;
              }),
              (i.prototype.writeUIntBE = function(e, t, n, r) {
                (e = +e),
                  (t |= 0),
                  (n |= 0),
                  r || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1,
                  i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                  this[t + o] = (e / i) & 255;
                return t + n;
              }),
              (i.prototype.writeUInt8 = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 1, 255, 0),
                  i.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
              (i.prototype.writeUInt16LE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 2, 65535, 0),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                    : C(this, e, t, !0),
                  t + 2
                );
              }),
              (i.prototype.writeUInt16BE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 2, 65535, 0),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                    : C(this, e, t, !1),
                  t + 2
                );
              }),
              (i.prototype.writeUInt32LE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 4, 4294967295, 0),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t + 3] = e >>> 24),
                      (this[t + 2] = e >>> 16),
                      (this[t + 1] = e >>> 8),
                      (this[t] = 255 & e))
                    : R(this, e, t, !0),
                  t + 4
                );
              }),
              (i.prototype.writeUInt32BE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 4, 4294967295, 0),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e))
                    : R(this, e, t, !1),
                  t + 4
                );
              }),
              (i.prototype.writeIntLE = function(e, t, n, r) {
                if (((e = +e), (t |= 0), !r)) {
                  var o = Math.pow(2, 8 * n - 1);
                  I(this, e, t, n, o - 1, -o);
                }
                var i = 0,
                  a = 1,
                  u = 0;
                for (this[t] = 255 & e; ++i < n && (a *= 256); )
                  e < 0 && 0 === u && 0 !== this[t + i - 1] && (u = 1),
                    (this[t + i] = (((e / a) >> 0) - u) & 255);
                return t + n;
              }),
              (i.prototype.writeIntBE = function(e, t, n, r) {
                if (((e = +e), (t |= 0), !r)) {
                  var o = Math.pow(2, 8 * n - 1);
                  I(this, e, t, n, o - 1, -o);
                }
                var i = n - 1,
                  a = 1,
                  u = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
                  e < 0 && 0 === u && 0 !== this[t + i + 1] && (u = 1),
                    (this[t + i] = (((e / a) >> 0) - u) & 255);
                return t + n;
              }),
              (i.prototype.writeInt8 = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 1, 127, -128),
                  i.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                  e < 0 && (e = 255 + e + 1),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
              (i.prototype.writeInt16LE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 2, 32767, -32768),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                    : C(this, e, t, !0),
                  t + 2
                );
              }),
              (i.prototype.writeInt16BE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 2, 32767, -32768),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                    : C(this, e, t, !1),
                  t + 2
                );
              }),
              (i.prototype.writeInt32LE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 4, 2147483647, -2147483648),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = 255 & e),
                      (this[t + 1] = e >>> 8),
                      (this[t + 2] = e >>> 16),
                      (this[t + 3] = e >>> 24))
                    : R(this, e, t, !0),
                  t + 4
                );
              }),
              (i.prototype.writeInt32BE = function(e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || I(this, e, t, 4, 2147483647, -2147483648),
                  e < 0 && (e = 4294967295 + e + 1),
                  i.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e))
                    : R(this, e, t, !1),
                  t + 4
                );
              }),
              (i.prototype.writeFloatLE = function(e, t, n) {
                return x(this, e, t, !0, n);
              }),
              (i.prototype.writeFloatBE = function(e, t, n) {
                return x(this, e, t, !1, n);
              }),
              (i.prototype.writeDoubleLE = function(e, t, n) {
                return N(this, e, t, !0, n);
              }),
              (i.prototype.writeDoubleBE = function(e, t, n) {
                return N(this, e, t, !1, n);
              }),
              (i.prototype.copy = function(e, t, n, r) {
                if (
                  (n || (n = 0),
                  r || 0 === r || (r = this.length),
                  t >= e.length && (t = e.length),
                  t || (t = 0),
                  r > 0 && r < n && (r = n),
                  r === n)
                )
                  return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                  throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length),
                  e.length - t < r - n && (r = e.length - t + n);
                var o,
                  a = r - n;
                if (this === e && n < t && t < r)
                  for (o = a - 1; o >= 0; --o) e[o + t] = this[o + n];
                else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
                  for (o = 0; o < a; ++o) e[o + t] = this[o + n];
                else
                  Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
                return a;
              }),
              (i.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                  if (
                    ("string" == typeof t
                      ? ((r = t), (t = 0), (n = this.length))
                      : "string" == typeof n && ((r = n), (n = this.length)),
                    1 === e.length)
                  ) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o);
                  }
                  if (void 0 !== r && "string" != typeof r)
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof r && !i.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n)
                  throw new RangeError("Out of range index");
                if (n <= t) return this;
                var a;
                if (
                  ((t >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  e || (e = 0),
                  "number" == typeof e)
                )
                  for (a = t; a < n; ++a) this[a] = e;
                else {
                  var u = i.isBuffer(e) ? e : j(new i(e, r).toString()),
                    s = u.length;
                  for (a = 0; a < n - t; ++a) this[a + t] = u[a % s];
                }
                return this;
              });
            var W = /[^+\/0-9A-Za-z-_]/g;
          }.call(this, n(3)));
        },
        function(e, t, n) {
          "use strict";
          function r(e) {
            var t = e.length;
            if (t % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
          }
          function o(e, t, n) {
            for (var r, o, a = [], u = t; u < n; u += 3)
              (r =
                ((e[u] << 16) & 16711680) +
                ((e[u + 1] << 8) & 65280) +
                (255 & e[u + 2])),
                a.push(
                  i[((o = r) >> 18) & 63] +
                    i[(o >> 12) & 63] +
                    i[(o >> 6) & 63] +
                    i[63 & o]
                );
            return a.join("");
          }
          (t.byteLength = function(e) {
            var t = r(e),
              n = t[0],
              o = t[1];
            return (3 * (n + o)) / 4 - o;
          }),
            (t.toByteArray = function(e) {
              for (
                var t,
                  n = r(e),
                  o = n[0],
                  i = n[1],
                  s = new u(
                    (function(e, t, n) {
                      return (3 * (t + n)) / 4 - n;
                    })(0, o, i)
                  ),
                  c = 0,
                  f = i > 0 ? o - 4 : o,
                  l = 0;
                l < f;
                l += 4
              )
                (t =
                  (a[e.charCodeAt(l)] << 18) |
                  (a[e.charCodeAt(l + 1)] << 12) |
                  (a[e.charCodeAt(l + 2)] << 6) |
                  a[e.charCodeAt(l + 3)]),
                  (s[c++] = (t >> 16) & 255),
                  (s[c++] = (t >> 8) & 255),
                  (s[c++] = 255 & t);
              return (
                2 === i &&
                  ((t =
                    (a[e.charCodeAt(l)] << 2) | (a[e.charCodeAt(l + 1)] >> 4)),
                  (s[c++] = 255 & t)),
                1 === i &&
                  ((t =
                    (a[e.charCodeAt(l)] << 10) |
                    (a[e.charCodeAt(l + 1)] << 4) |
                    (a[e.charCodeAt(l + 2)] >> 2)),
                  (s[c++] = (t >> 8) & 255),
                  (s[c++] = 255 & t)),
                s
              );
            }),
            (t.fromByteArray = function(e) {
              for (
                var t, n = e.length, r = n % 3, a = [], u = 0, s = n - r;
                u < s;
                u += 16383
              )
                a.push(o(e, u, u + 16383 > s ? s : u + 16383));
              return (
                1 === r
                  ? ((t = e[n - 1]),
                    a.push(i[t >> 2] + i[(t << 4) & 63] + "=="))
                  : 2 === r &&
                    ((t = (e[n - 2] << 8) + e[n - 1]),
                    a.push(
                      i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + "="
                    )),
                a.join("")
              );
            });
          for (
            var i = [],
              a = [],
              u = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              s =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              c = 0,
              f = s.length;
            c < f;
            ++c
          )
            (i[c] = s[c]), (a[s.charCodeAt(c)] = c);
          (a["-".charCodeAt(0)] = 62), (a["_".charCodeAt(0)] = 63);
        },
        function(e, t) {
          (t.read = function(e, t, n, r, o) {
            var i,
              a,
              u = 8 * o - r - 1,
              s = (1 << u) - 1,
              c = s >> 1,
              f = -7,
              l = n ? o - 1 : 0,
              d = n ? -1 : 1,
              p = e[t + l];
            for (
              l += d, i = p & ((1 << -f) - 1), p >>= -f, f += u;
              f > 0;
              i = 256 * i + e[t + l], l += d, f -= 8
            );
            for (
              a = i & ((1 << -f) - 1), i >>= -f, f += r;
              f > 0;
              a = 256 * a + e[t + l], l += d, f -= 8
            );
            if (0 === i) i = 1 - c;
            else {
              if (i === s) return a ? NaN : (1 / 0) * (p ? -1 : 1);
              (a += Math.pow(2, r)), (i -= c);
            }
            return (p ? -1 : 1) * a * Math.pow(2, i - r);
          }),
            (t.write = function(e, t, n, r, o, i) {
              var a,
                u,
                s,
                c = 8 * i - o - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : i - 1,
                h = r ? 1 : -1,
                v = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((u = isNaN(t) ? 1 : 0), (a = f))
                    : ((a = Math.floor(Math.log(t) / Math.LN2)),
                      t * (s = Math.pow(2, -a)) < 1 && (a--, (s *= 2)),
                      (t += a + l >= 1 ? d / s : d * Math.pow(2, 1 - l)) * s >=
                        2 && (a++, (s /= 2)),
                      a + l >= f
                        ? ((u = 0), (a = f))
                        : a + l >= 1
                        ? ((u = (t * s - 1) * Math.pow(2, o)), (a += l))
                        : ((u = t * Math.pow(2, l - 1) * Math.pow(2, o)),
                          (a = 0)));
                o >= 8;
                e[n + p] = 255 & u, p += h, u /= 256, o -= 8
              );
              for (
                a = (a << o) | u, c += o;
                c > 0;
                e[n + p] = 255 & a, p += h, a /= 256, c -= 8
              );
              e[n + p - h] |= 128 * v;
            });
        },
        function(e, t) {
          var n = {}.toString;
          e.exports =
            Array.isArray ||
            function(e) {
              return "[object Array]" == n.call(e);
            };
        },
      ]);
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(45),
      o = (n.n(r), n(278)),
      i = n.n(o),
      a = n(279),
      u = n.n(a),
      s = n(280),
      c = n.n(s);
    t.a = (function() {
      var e = { production: i.a, staging: u.a, playground: c.a };
      return e;
    })();
  },
  function(e, t) {
    e.exports = {
      e: "AQAB",
      n:
        "rvgQXST3R7oGUm_EVD4-Yq4Z2xPsiYIpSiSvn6oP93Grybftb4gAI7LuFbIAjWbqA4eWU7A9N7v4e9z7t-ObtLlLEZU3C0ybo47iCza7-URcI74sDb755BuucHsz2yVa3dzRVNvL_g5aryCETgomXnSKBC45SiE8jvpvJxUdFpxDhRLHZ7aPx1_TefDkvcQ6ZCRpT8HZqudZ0Ire0FZusj11EmZ8zRy3HTq-ERm5mn8mBNsswywbWrfOnJHLMmfX8cOxhywdik1lQYXxTVyLE7UImN3bf6dexVmUparrVnXpGV3pWB5SJLKFNVvbnrElqosaW53hMBkP6mOta9ibJw",
      kty: "RSA",
      kid: "LkO1jkj0htwzI32KnlH4LS0FY___65O25rXiXOxqzgQ",
    };
  },
  function(e, t) {
    e.exports = {
      e: "AQAB",
      n:
        "7-gQDoUGlVFyDzLw4D2OQR8fDR_PTmztBNpxG2M7AhJ-S_ReNSVPLucZFv1WnXlXhcl2SxAyyKaBZObpztwcGNuEuRQCh_kerhLkbeu_JUgcFf5iHhq5kWEvBEI_knOuAcKVkH5ueHd8VixvxVEcYVkDwyYj8j0SZyzwT8Nx6dFz0nU-XGmMoDZSjNJgKDDRMdX6DJTLyLqW5GY531wAUYUZxzJgdSaMMK355cRV1fR2YEI52yhaUBGdESsAZeZCvbENcdOIGirrFUGy5yKhv-4evaO-AMBewHePa2qqSppf3URfFiVkrmPdkT4GTm5xc6u9V0n2e21SpR60IbsRyQ",
      kty: "RSA",
      kid: "G-eRSv2-sWKgRaVdk92o7NpISOka-z1wgXpverflxaw",
    };
  },
  function(e, t) {
    e.exports = {
      e: "AQAB",
      n:
        "maQhqXBSqr-Qyb3YftZu_5ZqytDEAWn2frrtG5VKrEJLOfl6xNNZJ4IvA4adykPWrceXU3F6Y_cDx-2ZO-w2UccHa2mNBQyDqQaQBn5xp2BZvPNFRzLPTwac_msIrgSa4yvbaUhU-d4uHkfzOXyeK9dDf8Thk7FurN0Blyqztu6jaYfhukYfO0c35_C5Xox1jg3w8OhgaNc6ho0ATTyxDJXTT9Eh0FwgmdZEC01kioRK3hkEb5UvXufcXhowDrSCYoCiwjRi5hDoBxYgYirjhckQVQ-KqgeNs5ikcXRTCYezN_NLFhim-agyIAlE3aXFYFxrBWS1mZfx9Yc7EIOB8w",
      kty: "RSA",
      kid: "tkiJj_cFIXuHgXhnzU6DtJGcwbWN4FV3pT5suTPKvYM",
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(3),
      o = n.n(r),
      i = n(282),
      a = n.n(i),
      u = n(45),
      s = n.n(u),
      c = n(49),
      f = n.n(c),
      l = n(11),
      d = n.n(l),
      p = n(17),
      h = n.n(p),
      v = n(18),
      y = n.n(v),
      g = n(1),
      m = n.n(g),
      _ = n(10),
      w = n(28),
      b = n(288),
      E = this,
      A = {
        API_METHOD_NAME: "apiMethodName",
        APPS_BASE_URL: "appsBaseUrl",
        API_KEY: "apiKey",
      },
      S = function(e) {
        return "klarna" === e ? "default" : e;
      },
      O = function(e, t, n) {
        var r = (e + "-" + t).toLowerCase(),
          o = n.supportedLocales;
        return o.includes(r) ? r : o.includes(e) ? e : o[0];
      },
      k = function(e, t) {
        var n = t.supportedIntents;
        return n.includes(e) ? e : n[0];
      },
      P = function(e, t) {
        var n = t.supportedPaymentMethodCategories;
        return n.includes(e) ? e : n[0];
      },
      T = function(e) {
        var t = e.config,
          n = e.designID,
          r = e.intent,
          o = void 0 === r ? "buy" : r,
          i = e.language,
          a = e.paymentMethodCategory,
          u = e.purchaseCountry,
          s = S(n),
          c = O(i, u, t).toLowerCase(),
          f = k(o, t),
          l = P(a, t).replace(/_/g, "-");
        return Object(w.b)(t.staticCdnBaseUrl, s, c, f, l);
      },
      I = function() {
        return (Date.now() + Date.now() * Math.random())
          .toString(16)
          .slice(0, 11);
      },
      C = function(e, t, n) {
        return (
          n(_.b.ONE_OFFERING_STATIC_FETCH_STARTED, {
            file_path: e.replace(t.staticCdnBaseUrl, ""),
          }),
          m.a.race([
            window.fetch(e).then(
              (function() {
                var t = y()(
                  h.a.mark(function t(n) {
                    var r;
                    return h.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (n.ok) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(
                                "Fetching " + e + " failed (" + n.status + ")"
                              );
                            case 2:
                              if (
                                (r = n.headers.get("content-type")) &&
                                r.includes("text/html")
                              ) {
                                t.next = 5;
                                break;
                              }
                              throw new TypeError(
                                "Fetched content has incorrect MIME type (" +
                                  r +
                                  ")"
                              );
                            case 5:
                              return t.abrupt("return", n.text());
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      E
                    );
                  })
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            new m.a(function(n, r) {
              return setTimeout(function() {
                r(new Error("Fetching " + e + " timed out"));
              }, t.timeout);
            }),
          ])
        );
      },
      R = function(e) {
        var t,
          n = e.apiMethodName,
          r = e.appsCdnBaseUrl,
          o = e.html,
          i = e.id,
          a = e.staticID,
          u = e.style,
          c = document.createElement("div"),
          l = c.attachShadow({ mode: "closed" }),
          p = o.replace(/^<!--.*-->\n?/, ""),
          h = d()(
            ((t = {}),
            f()(t, A.API_METHOD_NAME, n),
            f()(t, A.APPS_BASE_URL, r),
            f()(t, A.API_KEY, a),
            t)
          ).replace(/\\"/g, '"'),
          v = p.replace(new RegExp("__RUNTIME_SETTINGS__", "g"), h);
        return (
          (l.innerHTML = v), Object(b.a)(l), (c.id = i), s()(c.style, u), c
        );
      },
      L = new a.a(),
      x = (function() {
        var e = y()(
          h.a.mark(function e(t, n) {
            var r, i, a, u, s, c, f, l, d, p, v, y, g;
            return h.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.apiMethodName),
                        (i = t.config),
                        (a = t.container),
                        (u = t.name),
                        (s = i.id(u)),
                        (c = T(t)),
                        (f = c + "/" + i.defaultEntry),
                        (l = c + "/" + i.entry),
                        !(d = document.getElementById(s)))
                      ) {
                        e.next = 12;
                        break;
                      }
                      if (!(p = L.get(d)) || p.baseURL !== c) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      L.delete(d), d.parentNode.removeChild(d);
                    case 12:
                      return (
                        (e.prev = 12),
                        (e.next = 15),
                        C(l, i, n).catch(function(e) {
                          if (
                            /failed \(4\d\d\)$/.test(e.message) &&
                            i.entry !== i.defaultEntry
                          )
                            return (
                              n(_.b.ONE_OFFERING_STATIC_FETCH_ERROR, {
                                error: e.message,
                                variant: i.entry,
                              }),
                              C(f, i, n)
                            );
                          throw e;
                        })
                      );
                    case 15:
                      (v = e.sent),
                        (y = I() + I()),
                        t.registry.set(y, {
                          category: t.paymentMethodCategory,
                        }),
                        (g = R(
                          o()({}, i, {
                            apiMethodName: r,
                            html: v,
                            id: s,
                            staticID: y,
                          })
                        )),
                        L.set(g, { baseURL: c, staticID: y }),
                        a.appendChild(g),
                        n(_.b.ONE_OFFERING_STATIC_FETCH_COMPLETED),
                        (e.next = 28);
                      break;
                    case 24:
                      throw ((e.prev = 24),
                      (e.t0 = e.catch(12)),
                      n(_.b.ONE_OFFERING_STATIC_FETCH_ERROR, {
                        error: e.t0.message,
                      }),
                      e.t0);
                    case 28:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              E,
              [[12, 24]]
            );
          })
        );
        return function(t, n) {
          return e.apply(this, arguments);
        };
      })();
    t.a = x;
  },
  function(e, t, n) {
    e.exports = { default: n(283), __esModule: !0 };
  },
  function(e, t, n) {
    n(42), n(24), n(284), n(286), n(287), (e.exports = n(0).WeakMap);
  },
  function(e, t, n) {
    "use strict";
    var r,
      o = n(4),
      i = n(84)(0),
      a = n(71),
      u = n(43),
      s = n(119),
      c = n(285),
      f = n(8),
      l = n(35),
      d = n(35),
      p = !o.ActiveXObject && "ActiveXObject" in o,
      h = u.getWeak,
      v = Object.isExtensible,
      y = c.ufstore,
      g = function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      m = {
        get: function(e) {
          if (f(e)) {
            var t = h(e);
            return !0 === t
              ? y(l(this, "WeakMap")).get(e)
              : t
              ? t[this._i]
              : void 0;
          }
        },
        set: function(e, t) {
          return c.def(l(this, "WeakMap"), e, t);
        },
      },
      _ = (e.exports = n(83)("WeakMap", g, m, c, !0, !0));
    d &&
      p &&
      ((r = c.getConstructor(g, "WeakMap")),
      s(r.prototype, m),
      (u.NEED = !0),
      i(["delete", "has", "get", "set"], function(e) {
        var t = _.prototype,
          n = t[e];
        a(t, e, function(t, o) {
          if (f(t) && !v(t)) {
            this._f || (this._f = new r());
            var i = this._f[e](t, o);
            return "set" == e ? this : i;
          }
          return n.call(this, t, o);
        });
      }));
  },
  function(e, t, n) {
    "use strict";
    var r = n(57),
      o = n(43).getWeak,
      i = n(13),
      a = n(8),
      u = n(56),
      s = n(33),
      c = n(84),
      f = n(21),
      l = n(35),
      d = c(5),
      p = c(6),
      h = 0,
      v = function(e) {
        return e._l || (e._l = new y());
      },
      y = function() {
        this.a = [];
      },
      g = function(e, t) {
        return d(e.a, function(e) {
          return e[0] === t;
        });
      };
    (y.prototype = {
      get: function(e) {
        var t = g(this, e);
        if (t) return t[1];
      },
      has: function(e) {
        return !!g(this, e);
      },
      set: function(e, t) {
        var n = g(this, e);
        n ? (n[1] = t) : this.a.push([e, t]);
      },
      delete: function(e) {
        var t = p(this.a, function(t) {
          return t[0] === e;
        });
        return ~t && this.a.splice(t, 1), !!~t;
      },
    }),
      (e.exports = {
        getConstructor: function(e, t, n, i) {
          var c = e(function(e, r) {
            u(e, c, t, "_i"),
              (e._t = t),
              (e._i = h++),
              (e._l = void 0),
              void 0 != r && s(r, n, e[i], e);
          });
          return (
            r(c.prototype, {
              delete: function(e) {
                if (!a(e)) return !1;
                var n = o(e);
                return !0 === n
                  ? v(l(this, t)).delete(e)
                  : n && f(n, this._i) && delete n[this._i];
              },
              has: function(e) {
                if (!a(e)) return !1;
                var n = o(e);
                return !0 === n ? v(l(this, t)).has(e) : n && f(n, this._i);
              },
            }),
            c
          );
        },
        def: function(e, t, n) {
          var r = o(i(t), !0);
          return !0 === r ? v(e).set(t, n) : (r[e._i] = n), e;
        },
        ufstore: v,
      });
  },
  function(e, t, n) {
    n(85)("WeakMap");
  },
  function(e, t, n) {
    n(86)("WeakMap");
  },
  function(e, t, n) {
    "use strict";
    var r = n(67),
      o = n.n(r),
      i = function e(t) {
        if ("SCRIPT" === t.tagName) t.parentNode.replaceChild(a(t), t);
        else {
          var n = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var u, s = o()(t.childNodes);
              !(n = (u = s.next()).done);
              n = !0
            ) {
              e(u.value);
            }
          } catch (e) {
            (r = !0), (i = e);
          } finally {
            try {
              !n && s.return && s.return();
            } finally {
              if (r) throw i;
            }
          }
        }
        return t;
      },
      a = function(e) {
        var t = document.createElement("script");
        t.text = e.innerHTML;
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var a, u = o()(e.attributes);
            !(n = (a = u.next()).done);
            n = !0
          ) {
            var s = a.value;
            t.setAttribute(s.name, s.value);
          }
        } catch (e) {
          (r = !0), (i = e);
        } finally {
          try {
            !n && u.return && u.return();
          } finally {
            if (r) throw i;
          }
        }
        return t;
      };
    t.a = i;
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      o = n.n(r),
      i = n(17),
      a = n.n(i),
      u = n(22),
      s = n.n(u),
      c = n(3),
      f = n.n(c),
      l = n(18),
      d = n.n(l),
      p = n(7),
      h = n(6),
      v = n(126),
      y = n(128),
      g = n(10),
      m = this,
      _ = /^([\w-.]+\.)?(klarnacdn\.net|klarna\.(net|com)|localhost)$/,
      w = function(e) {
        var t = e ? new URL(e) : {},
          n = t.hostname;
        return _.test(n);
      },
      b = function(e, t) {
        return function(e) {
          var t = e.url;
          if (!w(t)) throw new Error("URL hostname not supported.");
          window.open(t);
        };
      },
      E = function(e, t, n) {
        return (function() {
          var r = d()(
            a.a.mark(function r(o) {
              var i,
                u,
                c,
                l,
                d,
                g,
                _,
                b,
                E,
                A,
                S,
                O = o.url,
                k = o.hidden;
              return a.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (w(O)) {
                          r.next = 2;
                          break;
                        }
                        throw new Error("URL hostname not supported.");
                      case 2:
                        if (
                          ((i = e + ":staticPaymentMethodFullscreenReference"),
                          (u = h.a.get(i) || {}),
                          !u[O])
                        ) {
                          r.next = 10;
                          break;
                        }
                        if (
                          ((c = u[O]),
                          (l = c.api),
                          (d = c.id),
                          !document.getElementById(d))
                        ) {
                          r.next = 10;
                          break;
                        }
                        if (!k) {
                          r.next = 9;
                          break;
                        }
                        return r.abrupt("return");
                      case 9:
                        return r.abrupt("return", l.show());
                      case 10:
                        return (
                          (g = f()(
                            {
                              container: document.body,
                              scrollBlockStyleContainer: document.body,
                              name: e,
                              url: O,
                            },
                            p.a.app.fullscreen
                          )),
                          (_ = Object(v.a)(e, t.category)),
                          (r.next = 14),
                          Object(y.a)(g, _, n)
                        );
                      case 14:
                        (b = r.sent),
                          (E = s()(b, 3)),
                          (A = E[0]),
                          (S = E[2]),
                          (u[O] = { api: S, id: A.id }),
                          h.a.set(i, u),
                          k || S.show();
                      case 21:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                m
              );
            })
          );
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      },
      A = function(e) {
        return function(t) {
          var n = t.url;
          return e.openInFullscreen({ hidden: !0, url: n });
        };
      },
      S = function(e, t) {
        return function(n, r) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            a = h.a.get(e + ":staticPaymentMethodRegistry"),
            u = a && a.get(n);
          if (!u) throw new Error("Invalid API key.");
          t(g.b.ONE_OFFERING_STATIC_API_CALLED, {
            method_name: r,
            method_options: o()(i),
          });
          var s = [e, u, t],
            c = {
              openExternalLink: b.apply(void 0, s),
              openInFullscreen: E.apply(void 0, s),
            };
          if (((c.preloadInFullscreen = A(c)), !c.hasOwnProperty(r)))
            throw new Error("Method not supported.");
          return c[r](i);
        };
      };
    t.a = S;
  },
  function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n.n(r),
      i = n(6),
      a = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : window;
        return new o.a(function(r, o) {
          var a = void 0,
            u = void 0,
            s = function() {
              i.a.get("nativeHookApiHandshakeResponse") &&
                (n.clearInterval(a), n.clearTimeout(u), r());
            };
          (a = n.setInterval(s, t)),
            (u = n.setTimeout(function() {
              n.clearInterval(a), o(new Error("Handshake timeout"));
            }, e)),
            s();
        });
      };
    t.a = a;
  },
  function(e, t, n) {
    "use strict";
    var r = function(e) {
      try {
        return window.sessionStorage.getItem(e);
      } catch (e) {}
      return null;
    };
    t.a = { get: r };
  },
  function(e, t, n) {
    "use strict";
    var r = n(3),
      o = n.n(r),
      i = n(7),
      a = n(6),
      u = n(19),
      s = n(10),
      c = n(29),
      f = n(62),
      l = n(63),
      d = n(47),
      p = ["US", "GB"],
      h = function(e, t) {
        return function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function() {},
            r = Object(c.a)(),
            h = Object(s.a)(e, { api: e, oid: r }),
            v = Object(d.a)(),
            y = function(e) {
              return (
                e && h.event(s.b.LOAD_PAYMENT_REVIEW_FAILED, { error: e }),
                n({ show_form: !1 })
              );
            };
          if (!a.a.get(e + ":initialized")) throw (y(), new u.a());
          h.event(s.b.LOAD_PAYMENT_REVIEW_CALLED);
          var g = a.a.get(e + ":clientToken") || {},
            m = g.purchaseCountry,
            _ = t.container;
          if (-1 === p.indexOf(m))
            throw (y("OperationNotSupportedError"),
            new u.i(
              null,
              "The operation is not supported for the current purchase country."
            ));
          if ("string" != typeof _) {
            if (!(_ instanceof HTMLElement))
              throw (y("TypeError(options.container)"),
              new TypeError(
                "Property `options.container` must be a string (CSS selector) or HTMLElement"
              ));
          } else if (!(_ = document.querySelector(_)))
            throw (y("InvalidContainerSelectorError"), new u.g());
          var w = Object(f.a)({ id: e }),
            b = function(e) {
              e.call(
                "loadPaymentReview",
                o()(
                  { operationID: r, resetApplication: w },
                  v ? { inAppSdkParams: v } : {},
                  g
                ),
                function() {
                  h.event(s.b.LOAD_PAYMENT_REVIEW_COMPLETED),
                    n.apply(void 0, arguments);
                }
              );
            },
            E = {
              main: o()({}, i.a.app.main, {
                style: o()({}, i.a.app.main.style, { height: "80px" }),
              }),
            },
            A = a.a.get(e + ":rawClientToken");
          Object(l.a)({
            id: e,
            clientToken: g,
            rawClientToken: A,
            container: _,
            options: t,
            tracker: h,
            appConfig: E,
            iframeName: "payment-review",
            renderFullscreen: !1,
          })
            .then(b)
            .catch(function() {
              return y("bootstrap_failed");
            });
        };
      };
    t.a = h;
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      if ("function" == typeof t) {
        var r = [t, {}];
        (n = r[0]), (t = r[1]);
      } else if ("function" == typeof e) {
        var o = [e, {}, {}];
        (n = o[0]), (e = o[1]), (t = o[2]);
      } else n = n || function() {};
      return [e || {}, t || {}, n];
    }
    var o = n(3),
      i = n.n(o),
      a = n(14),
      u = n.n(a),
      s = n(22),
      c = n.n(s),
      f = n(6),
      l = n(7),
      d = n(36),
      p = n(19),
      h = n(10),
      v = n(48),
      y = n(29),
      g = n(34),
      m = n(131),
      _ = n(294),
      w = n(15),
      b = n(55),
      E = n(61),
      A = n(47),
      S = n(122),
      O = n(89),
      k = {},
      P = function(e) {
        return function(t, n, o) {
          var a = void 0,
            s = void 0,
            P = void 0;
          if ("payments" === e) {
            var T = r(t, n, o),
              I = c()(T, 3);
            if (
              ((a = I[0]),
              (s = I[1]),
              (o = I[2]),
              (P = "payments"),
              -1 !== u()(s).indexOf("payment_method_category") ||
                -1 !== u()(s).indexOf("instance_id"))
            ) {
              var C = [a, s];
              (s = C[0]), (a = C[1]), (P = "payments_legacy");
            }
          } else {
            var R = r(t, n, o),
              L = c()(R, 3);
            (s = L[0]), (a = L[1]), (o = L[2]), (P = "non_payments");
          }
          var x = Object(y.a)(),
            N = Object(h.a)(e, { api: e, oid: x }),
            M = l.a.supportedPaymentMethodCategories,
            j = f.a.get(e + ":clientToken") || {},
            D = j.experiments,
            U = void 0 === D ? {} : D,
            H = j.region,
            F = j.sessionID,
            B = j.sessionType,
            K = a.payment_method_category,
            W = a.instance_id,
            V = a.auto_finalize,
            Y = Object(A.a)(),
            J = W || K || B || e,
            G = {
              payment_method_category: K,
              instance_id: W,
              auto_finalize: V,
            },
            z = !!f.a.get(e + ":popupExperimentEnabled"),
            q = f.a.get(e + ":" + F + ":isUtopiaFlowEnabled");
          if (
            (N.event(h.b.AUTHORIZE_CALLED, i()({}, G, { signature: P })),
            (!z && !q) || !k[J])
          ) {
            var Z = function(e) {
              return (
                e && N.event(h.b.AUTHORIZE_FAILED, i()({}, G, { error: e })),
                o({ show_form: !1, approved: !1 })
              );
            };
            if ("payments" === B) {
              if (K && -1 === M.indexOf(K))
                throw (Z("PaymentMethodCategoryNotSupportedError"), new p.j(K));
              if (W && !/^[\w-]+$/.test(W))
                throw (Z("InvalidInstanceIDError"), new p.h());
            }
            (U["kp-client-dr-on-load"] &&
              "control" !== U["kp-client-dr-on-load"]) ||
              Object(O.a)({
                id: e,
                clientToken: j,
                iframeName: J,
                options: a,
                tracker: N,
              });
            var X = function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = n.mdid;
                r &&
                  (w.a.isSupported()
                    ? w.a.putData("klarna-mdid", r)
                    : g.a.set("_klarna_mdid", r));
                try {
                  if (b.a.isSupported("production")) {
                    var i = f.a.get(
                        e + ":" + F + ":shoppingBrowser:sessionInitiated"
                      ),
                      a = f.a.get(
                        e + ":" + F + ":shoppingBrowser:sessionApproved"
                      );
                    i &&
                      !a &&
                      (b.a.sendSessionApprovedEvent({
                        region: H,
                        sessionID: F,
                      }),
                      f.a.set(
                        e + ":" + F + ":shoppingBrowser:sessionApproved",
                        !0
                      ));
                  }
                } catch (e) {
                  N.event(h.b.SHOPPING_BROWSER_NATIVE_API_ERROR, {
                    error: e.message,
                  });
                }
                try {
                  N.event(h.b.AUTHORIZE_COMPLETED, t), (k[J] = !1), o(t);
                } catch (e) {
                  N.event(h.b.AUTHORIZE_UNEXPECTED_ERROR, { error: e.message });
                }
              },
              Q = l.a.app.main.id(J),
              $ = Object(d.a)(Q);
            if (f.a.get(e + ":" + F + ":isUtopiaStaticWidgetEnabled")) {
              var ee = f.a.get(e + ":" + F + ":oneOfferingVersion"),
                te = f.a.get(e + ":" + F + ":oneOfferingStaticVariant"),
                ne = l.a.app.staticPaymentMethod(ee, te),
                re = ne.id(J);
              if (!document.getElementById(re))
                throw (Z("ApplicationNotLoadedError"), new p.b());
            } else if (!$) throw (Z("ApplicationNotLoadedError"), new p.b());
            if (q) {
              var oe =
                  f.a.get(e + ":" + F + ":loadApfPromise") ||
                  Object(S.a)({ id: e, sessionID: F, tracker: N }),
                ie = f.a.get(e + ":rawClientToken"),
                ae = Object(_.a)(
                  f.a.get(J + ":" + F + ":updateFromLoad") || {},
                  s
                ),
                ue = f.a.get(e + ":integratingProduct"),
                se = Object(m.a)(),
                ce = Object(E.a)(),
                fe = function(e) {
                  f.a
                    .get(J + ":createStaticPaymentMethod")(e)
                    .catch(function() {
                      Z("create_static_payment_method_failed");
                    });
                };
              return (
                f.a.delete(J + ":" + F + ":updateFromLoad"),
                (k[J] = !0),
                void oe.then(function() {
                  if (!window.klarnaAcquiringPurchaseFlowLibrary)
                    return (
                      N.event(h.b.APF_LIB_UNAVAILABLE),
                      void X({ show_form: !1, approved: !1 })
                    );
                  window.klarnaAcquiringPurchaseFlowLibrary
                    .render({
                      token: ie,
                      merchantOptions: { mdid: se, upstreamData: ce },
                      merchantUpdate: ae,
                      integratingProduct: ue,
                      paymentMethodCategory: K,
                      onUpdate: f.a.get(
                        e + ":" + F + ":isUtopiaStaticWidgetEnabled"
                      )
                        ? fe
                        : void 0,
                    })
                    .then(function(e) {
                      N.event(
                        h.b.APF_COMPLETED,
                        e && { completed: e.completed, show_form: e.show_form }
                      ),
                        X(e || { show_form: !0, approved: !1 });
                    })
                    .catch(function(e) {
                      var t =
                        window.klarnaAcquiringPurchaseFlowLibrary.errors
                          .AbortedError;
                      if (t && e instanceof t)
                        return (
                          N.event(h.b.APF_ABORTED),
                          void X({ show_form: !0, approved: !1 })
                        );
                      N.event(h.b.APF_UNHANDLED_ERROR, {
                        name: e.name,
                        message: e.message,
                      }),
                        X({ show_form: !1, approved: !1 });
                    }),
                    N.event(h.b.APF_TRIGGERED);
                })
              );
            }
            k[J] = !0;
            var le = i()(
                {
                  api: e,
                  autoFinalize: V,
                  operationID: x,
                  paymentMethodCategory: K,
                },
                Y ? { inAppSdkParams: Y } : {},
                j
              ),
              de = function() {
                Object(v.a)($, Q).apply("authorize", [s, le, X]);
              };
            if (z) {
              var pe = function(e) {
                  var t = function(t, n) {
                    X(t, n), e && "function" == typeof e.close && e.close();
                  };
                  Object(v.a)($, Q).apply("authorize", [s, le, t]);
                },
                he = f.a.get(e + ":renderPopupFn");
              if ("function" == typeof he) {
                try {
                  he()
                    .then(pe)
                    .catch(function() {
                      de();
                    });
                } catch (e) {
                  de();
                }
                return;
              }
            }
            de();
          }
        };
      };
    t.a = P;
  },
  function(e, t, n) {
    "use strict";
    function r() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length,
          n = Array(t > 1 ? t - 1 : 0),
          o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return n.reduce(function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i()(t).reduce(function(e, n) {
          return (e[n] = a(t[n]) ? r({}, e[n], t[n]) : t[n]), e;
        }, e);
      }, e);
    }
    t.a = r;
    var o = n(14),
      i = n.n(o),
      a = function(e) {
        return "[object Object]" === {}.toString.call(e);
      };
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      if ("function" == typeof t) {
        var r = [t, {}];
        (n = r[0]), (t = r[1]);
      } else if ("function" == typeof e) {
        var o = [e, {}, {}];
        (n = o[0]), (e = o[1]), (t = o[2]);
      } else n = n || function() {};
      return [e || {}, t || {}, n];
    }
    var o = n(3),
      i = n.n(o),
      a = n(14),
      u = n.n(a),
      s = n(22),
      c = n.n(s),
      f = n(7),
      l = n(6),
      d = n(19),
      p = n(10),
      h = n(29),
      v = n(61),
      y = n(62),
      g = n(87),
      m = n(63),
      _ = n(34),
      w = n(15),
      b = n(47),
      E = function(e) {
        return function(t, n, o) {
          var a = void 0,
            s = void 0,
            E = void 0;
          if ("payments" === e) {
            var A = r(t, n, o),
              S = c()(A, 3);
            if (
              ((a = S[0]),
              (s = S[1]),
              (o = S[2]),
              (E = "payments"),
              -1 !== u()(s).indexOf("payment_method_category"))
            ) {
              var O = [a, s];
              (s = O[0]), (a = O[1]), (E = "payments_legacy");
            }
          } else {
            var k = r(t, n, o),
              P = c()(k, 3);
            (s = P[0]), (a = P[1]), (o = P[2]), (E = "non_payments");
          }
          var T = Object(h.a)(),
            I = Object(p.a)(e, { api: e, oid: T }),
            C = Object(b.a)(),
            R = a.payment_method_category,
            L = a.payment_method_categories,
            x = a.instance_id,
            N = {
              payment_method_category: R,
              payment_method_categories: L,
              instance_id: x,
            };
          I.event(p.b.REAUTHORIZE_CALLED, i()({}, N, { signature: E }));
          var M = function(e) {
            return (
              e && I.event(p.b.REAUTHORIZE_FAILED, i()({}, N, { error: e })),
              o({ show_form: !1, approved: !1 })
            );
          };
          if (!l.a.get(e + ":initialized"))
            throw (M("ApplicationNotInitializedError"), new d.a());
          var j = l.a.get(e + ":clientToken"),
            D = j.scheme,
            U = j.sessionType,
            H = document.body;
          Object(g.a)({ scheme: D, sessionType: U, options: a, onError: M });
          var F = Object(v.a)(),
            B = Object(y.a)({ id: e, instanceID: x, paymentMethodCategory: R }),
            K = function(t) {
              t.call(
                "reauthorize",
                i()(
                  {
                    api: e,
                    operationID: T,
                    paymentMethodCategory: R,
                    paymentMethodCategories: L,
                    upstreamData: F,
                    resetApplication: B,
                  },
                  C ? { inAppSdkParams: C } : {},
                  j
                ),
                s,
                function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.mdid;
                  n &&
                    (w.a.isSupported()
                      ? w.a.putData("klarna-mdid", n)
                      : _.a.set("_klarna_mdid", n)),
                    I.event(p.b.REAUTHORIZE_COMPLETED, e),
                    o(e);
                }
              );
            },
            W = l.a.get(e + ":rawClientToken");
          Object(m.a)({
            id: e,
            clientToken: j,
            rawClientToken: W,
            container: H,
            tracker: I,
            options: a,
            appConfig: {
              main: i()({}, f.a.app.main, { style: { display: "none" } }),
            },
          })
            .then(K)
            .catch(function() {
              return M("bootstrap_failed");
            });
        };
      };
    t.a = E;
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      if ("function" == typeof t) {
        var r = [t, {}];
        (n = r[0]), (t = r[1]);
      } else if ("function" == typeof e) {
        var o = [e, {}, {}];
        (n = o[0]), (e = o[1]), (t = o[2]);
      } else n = n || function() {};
      return [e || {}, t || {}, n];
    }
    var o = n(3),
      i = n.n(o),
      a = n(14),
      u = n.n(a),
      s = n(22),
      c = n.n(s),
      f = n(7),
      l = n(6),
      d = n(19),
      p = n(10),
      h = n(29),
      v = n(61),
      y = n(62),
      g = n(87),
      m = n(63),
      _ = n(34),
      w = n(15),
      b = n(47),
      E = function(e) {
        return function(t, n, o) {
          var a = void 0,
            s = void 0,
            E = void 0;
          if ("payments" === e) {
            var A = r(t, n, o),
              S = c()(A, 3);
            if (
              ((a = S[0]),
              (s = S[1]),
              (o = S[2]),
              (E = "payments"),
              -1 !== u()(s).indexOf("payment_method_category"))
            ) {
              var O = [a, s];
              (s = O[0]), (a = O[1]), (E = "payments_legacy");
            }
          } else {
            var k = r(t, n, o),
              P = c()(k, 3);
            (s = P[0]), (a = P[1]), (o = P[2]), (E = "non_payments");
          }
          var T = Object(h.a)(),
            I = Object(p.a)(e, { api: e, oid: T }),
            C = a.payment_method_category,
            R = a.payment_method_categories,
            L = a.instance_id,
            x = Object(b.a)(),
            N = {
              payment_method_category: C,
              payment_method_categories: R,
              instance_id: L,
            };
          I.event(p.b.FINALIZE_CALLED, i()({}, N, { signature: E }));
          var M = function(e) {
            return (
              e && I.event(p.b.FINALIZE_FAILED, i()({}, N, { error: e })),
              o({ show_form: !1, approved: !1 })
            );
          };
          if (!l.a.get(e + ":initialized"))
            throw (M("ApplicationNotInitializedError"), new d.a());
          var j = l.a.get(e + ":clientToken"),
            D = j.scheme,
            U = j.sessionType,
            H = document.body;
          Object(g.a)({ scheme: D, sessionType: U, options: a, onError: M });
          var F = Object(v.a)(),
            B = Object(y.a)({ id: e, instanceID: L, paymentMethodCategory: C }),
            K = function(t) {
              t.call(
                "finalize",
                i()(
                  {
                    api: e,
                    operationID: T,
                    paymentMethodCategory: C,
                    paymentMethodCategories: R,
                    upstreamData: F,
                    resetApplication: B,
                  },
                  x ? { inAppSdkParams: x } : {},
                  j
                ),
                s,
                function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.mdid;
                  n &&
                    (w.a.isSupported()
                      ? w.a.putData("klarna-mdid", n)
                      : _.a.set("_klarna_mdid", n)),
                    I.event(p.b.FINALIZE_COMPLETED, e),
                    o(e);
                }
              );
            },
            W = l.a.get(e + ":rawClientToken");
          Object(m.a)({
            id: e,
            clientToken: j,
            rawClientToken: W,
            container: H,
            options: a,
            tracker: I,
            appConfig: {
              main: i()({}, f.a.app.main, { style: { display: "none" } }),
            },
          })
            .then(K)
            .catch(function() {
              return M("bootstrap_failed");
            });
        };
      };
    t.a = E;
  },
  function(e, t, n) {
    "use strict";
    var r = n(19),
      o = n(88),
      i = n(127),
      a = n(46),
      u = function(e) {
        return function(t, n) {
          switch (t) {
            case i.c:
            case i.b:
            case i.a:
              return Object(o.c)(e + ":" + t, n);
            case i.d:
            case i.g:
            case i.f:
            case i.e:
              if (Object(a.a)()) return Object(o.c)(e + ":" + t, n);
              throw new r.c(t);
            default:
              throw new r.c(t);
          }
        };
      };
    t.a = u;
  },
  function(e, t, n) {
    "use strict";
    var r = n(88),
      o = function(e) {
        return function(t, n) {
          return Object(r.b)(e + ":" + t, n);
        };
      };
    t.a = o;
  },
  function(e, t, n) {
    "use strict";
    var r = n(7),
      o = n(36),
      i = n(48),
      a = function(e) {
        return function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments[1],
            a = t.instance_id || e,
            u = r.a.app.main.id(a),
            s = Object(o.a)(u),
            c = { api: e };
          Object(i.a)(s, u).apply("validateCard", [{}, c, n]);
        };
      };
    t.a = a;
  },
]);
