/*! For license information please see main.55436ceb.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      144: (e, t, n) => {
        var r = n(60),
          o = n(724);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          D = Object.assign;
        function U(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var B = !1;
        function I(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  s = a.length - 1;
                1 <= i && 0 <= s && o[i] !== a[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== a[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || o[i] !== a[s])) {
                        var l = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case _:
              return "StrictMode";
            case O:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function G(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function ae(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          _e = null;
        function Ee(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Oe() {}
        var Re = !1;
        function Te(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return je(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== _e) && (Oe(), Ne());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Le = !1;
          }
        function ze(e, t, n, r, o, a, i, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          De = null,
          Ue = !1,
          Be = null,
          Ie = {
            onError: function (e) {
              (Fe = !0), (De = e);
            },
          };
        function Me(e, t, n, r, o, a, i, s, l) {
          (Fe = !1), (De = null), ze.apply(Ie, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (qe(e) !== e) throw Error(a(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ve(o), e;
                    if (i === r) return Ve(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Je = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Ge = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var s = i & ~o;
            0 !== s ? (r = dt(s)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          _t,
          Et,
          Ct = !1,
          Nt = [],
          jt = null,
          Ot = null,
          Rt = null,
          Tt = new Map(),
          Pt = new Map(),
          Lt = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Dt(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function It() {
          (Ct = !1),
            null !== jt && Ut(jt) && (jt = null),
            null !== Ot && Ut(Ot) && (Ot = null),
            null !== Rt && Ut(Rt) && (Rt = null),
            Tt.forEach(Bt),
            Pt.forEach(Bt);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, It)));
        }
        function qt(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Nt.length) {
            Mt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Mt(jt, e),
              null !== Ot && Mt(Ot, e),
              null !== Rt && Mt(Rt, e),
              Tt.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function $t(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if (Vt) {
            var o = Jt(e, t, n, r);
            if (null === o) Vr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (jt = Ft(jt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Ot = Ft(Ot, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Rt = Ft(Rt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Tt.set(a, Ft(Tt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Pt.set(a, Ft(Pt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && xt(a),
                  null === (a = Jt(e, t, n, r)) && Vr(e, t, r, Kt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Jt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = xe(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Gt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Gt,
            r = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = D({}, un, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = on(pn),
          mn = on(D({}, pn, { dataTransfer: 0 })),
          gn = on(D({}, dn, { relatedTarget: 0 })),
          yn = on(
            D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = D({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(vn),
          wn = on(D({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return _n;
        }
        var Cn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = on(Cn),
          jn = on(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = on(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Rn = on(
            D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = D({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = on(Tn),
          Ln = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Fn = c && "TextEvent" in window && !zn,
          Dn = c && (!An || (zn && 8 < zn && 11 >= zn)),
          Un = String.fromCharCode(32),
          Bn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Qn = null;
        function Kn(e) {
          Ur(e, 0);
        }
        function Jn(e) {
          if (Q(xo(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Gn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Gn = Zn;
          } else Gn = !1;
          Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(Qn)) {
            var t = [];
            Wn(t, Qn, e, xe(e)), Te(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(Qn);
        }
        function ar(e, t) {
          if ("click" === e) return Jn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && lr(vr, r)) ||
              ((vr = r),
              0 < (r = $r(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = Er("animationend"),
          Nr = Er("animationiteration"),
          jr = Er("animationstart"),
          Or = Er("transitionend"),
          Rr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Pr(e, t) {
          Rr.set(e, t), l(t, [e]);
        }
        for (var Lr = 0; Lr < Tr.length; Lr++) {
          var Ar = Tr[Lr];
          Pr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        Pr(Cr, "onAnimationEnd"),
          Pr(Nr, "onAnimationIteration"),
          Pr(jr, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, s, l, u) {
              if ((Me.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(a(198));
                var c = De;
                (Fe = !1), (De = null), Ue || ((Ue = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && o.isPropagationStopped()))
                    break e;
                  Dr(o, s, u), (a = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (s = r[i]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && o.isPropagationStopped())
                  )
                    break e;
                  Dr(o, s, u), (a = l);
                }
            }
          }
          if (Ue) throw ((e = Be), (Ue = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = $t;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = bo(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = a = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = a,
              o = xe(n),
              i = [];
            e: {
              var s = Rr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Nn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case Cr:
                  case Nr:
                  case jr:
                    l = yn;
                    break;
                  case Or:
                    l = Rn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = jn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Pe(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, o)),
                  i.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (d = qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == l ? s : xo(l)),
                  (p = null == u ? s : xo(u)),
                  ((s = new c(m, h + "leave", l, n, o)).target = d),
                  (s.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(f, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = l; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Kr(i, s, l, c, !1),
                  null !== u && null !== d && Kr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xo(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Yn;
              else if (Vn(s))
                if (Xn) g = ir;
                else {
                  g = or;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, o)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? xo(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var v;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (v = en())
                    : ((Gt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (qn = !0))),
                0 < (y = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Mn(n)) && (b.data = v))),
                (v = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!An && In(e, t))
                          ? ((e = en()), (Zt = Gt = Xt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Ur(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Pe(e, n)) && r.unshift(Wr(e, a, o)),
              null != (a = Pe(e, t)) && r.push(Wr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              o
                ? null != (l = Pe(n, a)) && i.unshift(Wr(n, l, s))
                : o || (null != (l = Pe(n, a)) && i.push(Wr(n, l, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Jr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Yr, "");
        }
        function Gr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          qt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          go = "__reactEvents$" + fo,
          yo = "__reactListeners$" + fo,
          vo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var So = [],
          _o = -1;
        function Eo(e) {
          return { current: e };
        }
        function Co(e) {
          0 > _o || ((e.current = So[_o]), (So[_o] = null), _o--);
        }
        function No(e, t) {
          _o++, (So[_o] = e.current), (e.current = t);
        }
        var jo = {},
          Oo = Eo(jo),
          Ro = Eo(!1),
          To = jo;
        function Po(e, t) {
          var n = e.type.contextTypes;
          if (!n) return jo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Lo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ao() {
          Co(Ro), Co(Oo);
        }
        function zo(e, t, n) {
          if (Oo.current !== jo) throw Error(a(168));
          No(Oo, t), No(Ro, n);
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || "Unknown", o));
          return D({}, n, r);
        }
        function Do(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              jo),
            (To = Oo.current),
            No(Oo, e),
            No(Ro, Ro.current),
            !0
          );
        }
        function Uo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Fo(e, t, To)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Co(Ro),
              Co(Oo),
              No(Oo, e))
            : Co(Ro),
            No(Ro, n);
        }
        var Bo = null,
          Io = !1,
          Mo = !1;
        function qo(e) {
          null === Bo ? (Bo = [e]) : Bo.push(e);
        }
        function Ho() {
          if (!Mo && null !== Bo) {
            Mo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bo = null), (Io = !1);
            } catch (o) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), Qe(Ze, Ho), o);
            } finally {
              (bt = t), (Mo = !1);
            }
          }
          return null;
        }
        var Vo = [],
          Wo = 0,
          $o = null,
          Qo = 0,
          Ko = [],
          Jo = 0,
          Yo = null,
          Xo = 1,
          Go = "";
        function Zo(e, t) {
          (Vo[Wo++] = Qo), (Vo[Wo++] = $o), ($o = e), (Qo = t);
        }
        function ea(e, t, n) {
          (Ko[Jo++] = Xo), (Ko[Jo++] = Go), (Ko[Jo++] = Yo), (Yo = e);
          var r = Xo;
          e = Go;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Go = a + e);
          } else (Xo = (1 << a) | (n << o) | r), (Go = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === $o; )
            ($o = Vo[--Wo]), (Vo[Wo] = null), (Qo = Vo[--Wo]), (Vo[Wo] = null);
          for (; e === Yo; )
            (Yo = Ko[--Jo]),
              (Ko[Jo] = null),
              (Go = Ko[--Jo]),
              (Ko[Jo] = null),
              (Xo = Ko[--Jo]),
              (Ko[Jo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function sa(e, t) {
          var n = Pu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Xo, overflow: Go } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && la(e, t)
                  ? sa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) sa(e, t), (t = uo(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = w.ReactCurrentBatchConfig;
        function ya(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var va = Eo(null),
          ba = null,
          wa = null,
          xa = null;
        function ka() {
          xa = wa = ba = null;
        }
        function Sa(e) {
          var t = va.current;
          Co(va), (e._currentValue = t);
        }
        function _a(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ea(e, t) {
          (ba = e),
            (xa = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Ca(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ba) throw Error(a(308));
              (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var Na = null;
        function ja(e) {
          null === Na ? (Na = [e]) : Na.push(e);
        }
        function Oa(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), ja(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Ra(e, r)
          );
        }
        function Ra(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ta = !1;
        function Pa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function La(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Aa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function za(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ol))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Ra(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), ja(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Ra(e, n)
          );
        }
        function Fa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Da(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ua(e, t, n, r) {
          var o = e.updateQueue;
          Ta = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === i ? (a = u) : (i.next = u), (i = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = l = null, s = a; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      Ta = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Dl |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ba(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ia = new r.Component().refs;
        function Ma(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var qa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Aa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ru(t, e, o, r), Fa(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Aa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ru(t, e, o, r), Fa(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Aa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = za(e, o, r)) && (ru(t, e, r, n), Fa(t, e, r));
          },
        };
        function Ha(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(o, a);
        }
        function Va(e, t, n) {
          var r = !1,
            o = jo,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ca(a))
              : ((o = Lo(t) ? To : Oo.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Po(e, o)
                  : jo)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = qa),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Wa(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && qa.enqueueReplaceState(t, t.state, null);
        }
        function $a(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Ia), Pa(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = Ca(a))
            : ((a = Lo(t) ? To : Oo.current), (o.context = Po(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Ma(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && qa.enqueueReplaceState(o, o.state, null),
              Ua(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Qa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Ia && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ka(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ja(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Au(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === P &&
                    Ja(a) === t.type))
              ? (((r = o(t, n.props)).ref = Qa(e, t, n)), (r.return = e), r)
              : (((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Qa(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Fu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Uu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = Fu(t, e.mode, n, null)).return = e), t;
              Ka(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === o ? u(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case P:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== o ? null : d(e, t, n, r, null);
              Ka(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case P:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || z(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              Ka(t, r);
            }
            return null;
          }
          function m(o, a, s, l) {
            for (
              var u = null, c = null, d = a, m = (a = 0), g = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = p(o, d, s[m], l);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === s.length) return n(o, d), aa && Zo(o, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(o, s[m], l)) &&
                  ((a = i(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return aa && Zo(o, m), u;
            }
            for (d = r(o, d); m < s.length; m++)
              null !== (g = h(d, o, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              u
            );
          }
          function g(o, s, l, u) {
            var c = z(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var d = (c = null), m = s, g = (s = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (s = i(b, s, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(o, m), aa && Zo(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = f(o, v.value, u)) &&
                  ((s = i(v, s, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return aa && Zo(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = l.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (s = i(v, s, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, g),
              c
            );
          }
          return function e(r, a, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === P &&
                            Ja(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = Qa(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((a = Fu(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = a))
                      : (((l = zu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = Qa(r, a, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Bu(i, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case P:
                  return e(r, a, (c = i._init)(i._payload), l);
              }
              if (te(i)) return m(r, a, i, l);
              if (z(i)) return g(r, a, i, l);
              Ka(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Uu(i, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var Xa = Ya(!0),
          Ga = Ya(!1),
          Za = {},
          ei = Eo(Za),
          ti = Eo(Za),
          ni = Eo(Za);
        function ri(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((No(ni, t), No(ti, e), No(ei, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Co(ei), No(ei, t);
        }
        function ai() {
          Co(ei), Co(ti), Co(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = le(t, e.type);
          t !== n && (No(ti, e), No(ei, n));
        }
        function si(e) {
          ti.current === e && (Co(ei), Co(ti));
        }
        var li = Eo(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          gi = null,
          yi = null,
          vi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function ki() {
          throw Error(a(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function _i(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (yi = gi = null),
                (t.updateQueue = null),
                (fi.current = us),
                (e = n(r, o));
            } while (bi);
          }
          if (
            ((fi.current = is),
            (t = null !== gi && null !== gi.next),
            (hi = 0),
            (yi = gi = mi = null),
            (vi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ei() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ni() {
          if (null === gi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gi.next;
          var t = null === yi ? mi.memoizedState : yi.next;
          if (null !== t) (yi = t), (gi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (gi = e).memoizedState,
              baseState: gi.baseState,
              baseQueue: gi.baseQueue,
              queue: gi.queue,
              next: null,
            }),
              null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function ji(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = gi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (mi.lanes |= d),
                  (Dl |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (mi.lanes |= i), (Dl |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ri(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            sr(i, t.memoizedState) || (ws = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function Pi(e, t) {
          var n = mi,
            r = Ni(),
            o = t(),
            i = !sr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (ws = !0)),
            (r = r.queue),
            Vi(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bi(9, Ai.bind(null, n, r, o, t), void 0, null),
              null === Rl)
            )
              throw Error(a(349));
            0 !== (30 & hi) || Li(n, t, o);
          }
          return o;
        }
        function Li(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ai(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fi(t) && Di(e);
        }
        function zi(e, t, n) {
          return n(function () {
            Fi(t) && Di(e);
          });
        }
        function Fi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Di(e) {
          var t = Ra(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Ui(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ji,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Bi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ii() {
          return Ni().memoizedState;
        }
        function Mi(e, t, n, r) {
          var o = Ci();
          (mi.flags |= e),
            (o.memoizedState = Bi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function qi(e, t, n, r) {
          var o = Ni();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== gi) {
            var i = gi.memoizedState;
            if (((a = i.destroy), null !== r && Si(r, i.deps)))
              return void (o.memoizedState = Bi(t, n, a, r));
          }
          (mi.flags |= e), (o.memoizedState = Bi(1 | t, n, a, r));
        }
        function Hi(e, t) {
          return Mi(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return qi(2048, 8, e, t);
        }
        function Wi(e, t) {
          return qi(4, 2, e, t);
        }
        function $i(e, t) {
          return qi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            qi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Ji() {}
        function Yi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Gi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Dl |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function es() {
          return Ni().memoizedState;
        }
        function ts(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            os(t, n);
          else if (null !== (n = Oa(e, t, n, r))) {
            ru(n, e, r, tu()), as(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) os(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), ja(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Oa(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), as(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function os(e, t) {
          bi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function as(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var is = {
            readContext: Ca,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Ca,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ca,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Mi(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Mi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Mi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Ui,
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Ui(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = Ci();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(a(349));
                0 !== (30 & hi) || Li(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Hi(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Bi(9, Ai.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Rl.identifierPrefix;
              if (aa) {
                var n = Go;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Ca,
            useCallback: Yi,
            useContext: Ca,
            useEffect: Vi,
            useImperativeHandle: Ki,
            useInsertionEffect: Wi,
            useLayoutEffect: $i,
            useMemo: Xi,
            useReducer: Oi,
            useRef: Ii,
            useState: function () {
              return Oi(ji);
            },
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              return Gi(Ni(), gi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(ji)[0], Ni().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Pi,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Ca,
            useCallback: Yi,
            useContext: Ca,
            useEffect: Vi,
            useImperativeHandle: Ki,
            useInsertionEffect: Wi,
            useLayoutEffect: $i,
            useMemo: Xi,
            useReducer: Ri,
            useRef: Ii,
            useState: function () {
              return Ri(ji);
            },
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              var t = Ni();
              return null === gi
                ? (t.memoizedState = e)
                : Gi(t, gi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(ji)[0], Ni().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Pi,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function ds(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Aa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wl || ((Wl = !0), ($l = r)), fs(0, t);
            }),
            n
          );
        }
        function ms(e, t, n) {
          (n = Aa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fs(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fs(0, t),
                  "function" !== typeof r &&
                    (null === Ql ? (Ql = new Set([this])) : Ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ps();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function ys(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vs(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Aa(-1, 1)).tag = 2), za(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Ga(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function ks(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ea(t, o),
            (r = _i(e, t, n, r, a, o)),
            (n = Ei()),
            null === e || ws
              ? (aa && n && ta(t), (t.flags |= 1), xs(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ws(e, t, o))
          );
        }
        function Ss(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Lu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), _s(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Au(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _s(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Ws(e, t, o);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ns(e, t, n, r, o);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                No(Al, Ll),
                (Ll |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  No(Al, Ll),
                  (Ll |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                No(Al, Ll),
                (Ll |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              No(Al, Ll),
              (Ll |= r);
          return xs(e, t, o, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ns(e, t, n, r, o) {
          var a = Lo(n) ? To : Oo.current;
          return (
            (a = Po(t, a)),
            Ea(t, o),
            (n = _i(e, t, n, r, a, o)),
            (r = Ei()),
            null === e || ws
              ? (aa && r && ta(t), (t.flags |= 1), xs(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ws(e, t, o))
          );
        }
        function js(e, t, n, r, o) {
          if (Lo(n)) {
            var a = !0;
            Do(t);
          } else a = !1;
          if ((Ea(t, o), null === t.stateNode))
            Vs(e, t), Va(t, n, r), $a(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var l = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ca(u))
              : (u = Po(t, (u = Lo(n) ? To : Oo.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Wa(t, i, r, u)),
              (Ta = !1);
            var f = t.memoizedState;
            (i.state = f),
              Ua(t, r, i, o),
              (l = t.memoizedState),
              s !== r || f !== l || Ro.current || Ta
                ? ("function" === typeof c &&
                    (Ma(t, n, c, r), (l = t.memoizedState)),
                  (s = Ta || Ha(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = u),
                  (r = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              La(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ya(t.type, s)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ca(l))
                : (l = Po(t, (l = Lo(n) ? To : Oo.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== d || f !== l) && Wa(t, i, r, l)),
              (Ta = !1),
              (f = t.memoizedState),
              (i.state = f),
              Ua(t, r, i, o);
            var h = t.memoizedState;
            s !== d || f !== h || Ro.current || Ta
              ? ("function" === typeof p &&
                  (Ma(t, n, p, r), (h = t.memoizedState)),
                (u = Ta || Ha(t, n, u, r, f, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Os(e, t, n, r, a, o);
        }
        function Os(e, t, n, r, o, a) {
          Cs(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Uo(t, n, !1), Ws(e, t, a);
          (r = t.stateNode), (bs.current = t);
          var s =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, s, a)))
              : xs(e, t, s, a),
            (t.memoizedState = r.state),
            o && Uo(t, n, !0),
            t.child
          );
        }
        function Rs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Ts(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Ps,
          Ls,
          As,
          zs,
          Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ds(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Us(e, t, n) {
          var r,
            o = t.pendingProps,
            i = li.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            No(li, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Du(l, o, 0, null)),
                      (e = Fu(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ds(n)),
                      (t.memoizedState = Fs),
                      e)
                    : Bs(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Is(e, t, s, (r = ds(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = Fu(i, o, s, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, s),
                    (t.child.memoizedState = Ds(s)),
                    (t.memoizedState = Fs),
                    i);
              if (0 === (1 & t.mode)) return Is(e, t, s, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Is(e, t, s, (r = ds((i = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (r = Rl)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | s)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Ra(e, o), ru(r, e, o, -1));
                }
                return gu(), Is(e, t, s, (r = ds(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ju.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Ko[Jo++] = Xo),
                    (Ko[Jo++] = Go),
                    (Ko[Jo++] = Yo),
                    (Xo = e.id),
                    (Go = e.overflow),
                    (Yo = t)),
                  (t = Bs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, r, i, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Au(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (s = Au(r, s))
                : ((s = Fu(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Ds(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fs),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Au(s, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Bs(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Is(e, t, n, r) {
          return (
            null !== r && ma(r),
            Xa(t, e.child, null, n),
            ((e = Bs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ms(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _a(e.return, t, n);
        }
        function qs(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Hs(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = li.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ms(e, n, t);
                else if (19 === e.tag) Ms(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((No(li, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  qs(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                qs(t, !0, n, null, a);
                break;
              case "together":
                qs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Dl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Au((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Au(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $s(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ks(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qs(t), null;
            case 1:
            case 17:
              return Lo(t.type) && Ao(), Qs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Co(Ro),
                Co(Oo),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (su(ia), (ia = null)))),
                Ls(e, t),
                Qs(t),
                null
              );
            case 5:
              si(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                As(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Qs(t), null;
                }
                if (((e = ri(ei.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < zr.length; o++) Br(zr[o], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Br("invalid", r);
                  }
                  for (var l in (ve(n, i), (o = null), i))
                    if (i.hasOwnProperty(l)) {
                      var u = i[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Ps(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < zr.length; o++) Br(zr[o], e);
                        o = r;
                        break;
                      case "source":
                        Br("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (o = r);
                        break;
                      case "details":
                        Br("toggle", e), (o = r);
                        break;
                      case "input":
                        Y(e, r), (o = J(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = D({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Br("invalid", e);
                    }
                    for (i in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Br("scroll", e)
                              : null != c && b(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qs(t), null;
            case 6:
              if (e && null != t.stateNode) zs(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Qs(t), null;
            case 13:
              if (
                (Co(li),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qs(t), (i = !1);
                } else null !== ia && (su(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & li.current)
                        ? 0 === zl && (zl = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qs(t),
                  null);
            case 4:
              return (
                ai(),
                Ls(e, t),
                null === e && qr(t.stateNode.containerInfo),
                Qs(t),
                null
              );
            case 10:
              return Sa(t.type._context), Qs(t), null;
            case 19:
              if ((Co(li), null === (i = t.memoizedState))) return Qs(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) $s(i, !1);
                else {
                  if (0 !== zl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ui(e))) {
                        for (
                          t.flags |= 128,
                            $s(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return No(li, (1 & li.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Hl &&
                    ((t.flags |= 128),
                    (r = !0),
                    $s(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $s(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !aa)
                    )
                      return Qs(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $s(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = li.current),
                  No(li, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qs(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ll) &&
                    (Qs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Js(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Lo(t.type) && Ao(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Co(Ro),
                Co(Oo),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return si(t), null;
            case 13:
              if (
                (Co(li),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Co(li), null;
            case 4:
              return ai(), null;
            case 10:
              return Sa(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Ps = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ls = function () {}),
          (As = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = J(e, o)), (r = J(e, r)), (i = []);
                  break;
                case "select":
                  (o = D({}, o, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Br("scroll", e),
                            i || l === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (zs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ys = !1,
          Xs = !1,
          Gs = "function" === typeof WeakSet ? WeakSet : Set,
          Zs = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && tl(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ol(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[go],
              delete t[yo],
              delete t[vo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var dl = null,
          fl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Xs || el(n, t);
            case 6:
              var r = dl,
                o = fl;
              (dl = null),
                pl(e, t, n),
                (fl = o),
                null !== (dl = r) &&
                  (fl
                    ? ((e = dl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : dl.removeChild(n.stateNode));
              break;
            case 18:
              null !== dl &&
                (fl
                  ? ((e = dl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    qt(e))
                  : lo(dl, n.stateNode));
              break;
            case 4:
              (r = dl),
                (o = fl),
                (dl = n.stateNode.containerInfo),
                (fl = !0),
                pl(e, t, n),
                (dl = r),
                (fl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      tl(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Xs &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Eu(n, t, s);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xs = (r = Xs) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Xs = r))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gs()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (dl = l.stateNode), (fl = !1);
                      break e;
                    case 3:
                    case 4:
                      (dl = l.stateNode.containerInfo), (fl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === dl) throw Error(a(160));
                hl(i, s, o), (dl = null), (fl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gl(t, e), vl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), ol(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  rl(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              gl(t, e), vl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (gl(t, e),
                vl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(o, i),
                      be(l, s);
                    var c = be(l, i);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ge(o, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, f)
                        : "children" === d
                        ? fe(o, f)
                        : b(o, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        G(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), vl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gl(t, e),
                vl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gl(t, e), vl(e);
              break;
            case 13:
              gl(t, e),
                vl(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (ql = Xe())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xs = (c = Xs) || d), gl(t, e), (Xs = c))
                  : gl(t, e),
                vl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zs = e, d = e.child; null !== d; ) {
                    for (f = Zs = d; null !== Zs; ) {
                      switch (((h = (p = Zs).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            kl(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zs = h)) : kl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gl(t, e), vl(e), 4 & r && ml(e);
            case 21:
          }
        }
        function vl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    cl(e, ll(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ul(e, ll(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Zs = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zs; ) {
            var o = Zs,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Ys;
              if (!i) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Xs;
                s = Ys;
                var u = Xs;
                if (((Ys = i), (Xs = l) && !u))
                  for (Zs = o; null !== Zs; )
                    (l = (i = Zs).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Sl(o)
                        : null !== l
                        ? ((l.return = i), (Zs = l))
                        : Sl(o);
                for (; null !== a; ) (Zs = a), wl(a, t, n), (a = a.sibling);
                (Zs = o), (Ys = s), (Xs = u);
              }
              xl(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Zs = a))
                : xl(e);
          }
        }
        function xl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs || ol(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xs)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ya(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ba(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ba(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && qt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Xs || (512 & t.flags && al(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Zs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zs = n);
              break;
            }
            Zs = t.return;
          }
        }
        function kl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            if (t === e) {
              Zs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zs = n);
              break;
            }
            Zs = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ol(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, o, l);
                    }
                  }
                  var a = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Eu(t, a, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Zs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Zs = s);
              break;
            }
            Zs = t.return;
          }
        }
        var _l,
          El = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Nl = w.ReactCurrentOwner,
          jl = w.ReactCurrentBatchConfig,
          Ol = 0,
          Rl = null,
          Tl = null,
          Pl = 0,
          Ll = 0,
          Al = Eo(0),
          zl = 0,
          Fl = null,
          Dl = 0,
          Ul = 0,
          Bl = 0,
          Il = null,
          Ml = null,
          ql = 0,
          Hl = 1 / 0,
          Vl = null,
          Wl = !1,
          $l = null,
          Ql = null,
          Kl = !1,
          Jl = null,
          Yl = 0,
          Xl = 0,
          Gl = null,
          Zl = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ol) ? Xe() : -1 !== Zl ? Zl : (Zl = Xe());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ol) && 0 !== Pl
            ? Pl & -Pl
            : null !== ga.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Xl) throw ((Xl = 0), (Gl = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & Ol) && e === Rl) ||
              (e === Rl && (0 === (2 & Ol) && (Ul |= n), 4 === zl && lu(e, Pl)),
              ou(e, r),
              1 === n &&
                0 === Ol &&
                0 === (1 & t.mode) &&
                ((Hl = Xe() + 500), Io && Ho()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                s = 1 << i,
                l = o[i];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (o[i] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Rl ? Pl : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Io = !0), qo(e);
                  })(uu.bind(null, e))
                : qo(uu.bind(null, e)),
                io(function () {
                  0 === (6 & Ol) && Ho();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ru(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zl = -1), (eu = 0), 0 !== (6 & Ol))) throw Error(a(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === Rl ? Pl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var o = Ol;
            Ol |= 2;
            var i = mu();
            for (
              (Rl === e && Pl === t) ||
              ((Vl = null), (Hl = Xe() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (l) {
                hu(e, l);
              }
            ka(),
              (Cl.current = i),
              (Ol = o),
              null !== Tl ? (t = 0) : ((Rl = null), (Pl = 0), (t = zl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = Fl), pu(e, 0), lu(e, r), ou(e, Xe()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(a(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Fl), pu(e, 0), lu(e, r), ou(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ku(e, Ml, Vl);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = ql + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(ku.bind(null, e, Ml, Vl), t);
                    break;
                  }
                  ku(e, Ml, Vl);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - it(r);
                    (i = 1 << s), (s = t[s]) > o && (o = s), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(ku.bind(null, e, Ml, Vl), r);
                    break;
                  }
                  ku(e, Ml, Vl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Il;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Ml), (Ml = n), null !== t && su(t)),
            e
          );
        }
        function su(e) {
          null === Ml ? (Ml = e) : Ml.push.apply(Ml, e);
        }
        function lu(e, t) {
          for (
            t &= ~Bl,
              t &= ~Ul,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ol)) throw Error(a(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ou(e, Xe()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Fl), pu(e, 0), lu(e, t), ou(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Ml, Vl),
            ou(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var n = Ol;
          Ol |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && ((Hl = Xe() + 500), Io && Ho());
          }
        }
        function du(e) {
          null !== Jl && 0 === Jl.tag && 0 === (6 & Ol) && Su();
          var t = Ol;
          Ol |= 1;
          var n = jl.transition,
            r = bt;
          try {
            if (((jl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (jl.transition = n), 0 === (6 & (Ol = t)) && Ho();
          }
        }
        function fu() {
          (Ll = Al.current), Co(Al);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ao();
                  break;
                case 3:
                  ai(), Co(Ro), Co(Oo), di();
                  break;
                case 5:
                  si(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Co(li);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (Tl = e = Au(e.current, null)),
            (Pl = Ll = t),
            (zl = 0),
            (Fl = null),
            (Bl = Ul = Dl = 0),
            (Ml = Il = null),
            null !== Na)
          ) {
            for (t = 0; t < Na.length; t++)
              if (null !== (r = (n = Na[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Na = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((ka(), (fi.current = is), vi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((hi = 0),
                (yi = gi = mi = null),
                (bi = !1),
                (wi = 0),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (zl = 1), (Fl = t), (Tl = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Pl),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = ys(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      vs(h, s, l, 0, t),
                      1 & h.mode && gs(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gs(i, c, t), gu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & l.mode) {
                  var y = ys(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vs(y, s, l, 0, t),
                      ma(cs(u, l));
                    break e;
                  }
                }
                (i = u = cs(u, l)),
                  4 !== zl && (zl = 2),
                  null === Il ? (Il = [i]) : Il.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Da(i, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ql || !Ql.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Da(i, ms(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (w) {
              (t = w), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cl.current;
          return (Cl.current = is), null === e ? is : e;
        }
        function gu() {
          (0 !== zl && 3 !== zl && 2 !== zl) || (zl = 4),
            null === Rl ||
              (0 === (268435455 & Dl) && 0 === (268435455 & Ul)) ||
              lu(Rl, Pl);
        }
        function yu(e, t) {
          var n = Ol;
          Ol |= 2;
          var r = mu();
          for ((Rl === e && Pl === t) || ((Vl = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((ka(), (Ol = n), (Cl.current = r), null !== Tl))
            throw Error(a(261));
          return (Rl = null), (Pl = 0), zl;
        }
        function vu() {
          for (; null !== Tl; ) wu(Tl);
        }
        function bu() {
          for (; null !== Tl && !Je(); ) wu(Tl);
        }
        function wu(e) {
          var t = _l(e.alternate, e, Ll);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Tl = t),
            (Nl.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ks(n, t, Ll))) return void (Tl = n);
            } else {
              if (null !== (n = Js(n, t)))
                return (n.flags &= 32767), void (Tl = n);
              if (null === e) return (zl = 6), void (Tl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === zl && (zl = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            o = jl.transition;
          try {
            (jl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Jl);
                if (0 !== (6 & Ol)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Rl && ((Tl = Rl = null), (Pl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Kl ||
                    ((Kl = !0),
                    Ru(tt, function () {
                      return Su(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = jl.transition), (jl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Ol;
                  (Ol |= 4),
                    (Nl.current = null),
                    (function (e, t) {
                      if (((eo = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (l = s + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (l = s),
                                    p === i && ++d === r && (u = s),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zs = t;
                        null !== Zs;

                      )
                        if (
                          ((e = (t = Zs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zs = e);
                        else
                          for (; null !== Zs; ) {
                            t = Zs;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ya(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (x) {
                              Eu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zs = e);
                              break;
                            }
                            Zs = t.return;
                          }
                      (m = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    hr(to),
                    (Vt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bl(n, e, o),
                    Ye(),
                    (Ol = l),
                    (bt = s),
                    (jl.transition = i);
                } else e.current = n;
                if (
                  (Kl && ((Kl = !1), (Jl = e), (Yl = o)),
                  (i = e.pendingLanes),
                  0 === i && (Ql = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Wl) throw ((Wl = !1), (e = $l), ($l = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && Su(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Gl
                      ? Xl++
                      : ((Xl = 0), (Gl = e))
                    : (Xl = 0),
                  Ho();
              })(e, t, n, r);
          } finally {
            (jl.transition = o), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Jl) {
            var e = wt(Yl),
              t = jl.transition,
              n = bt;
            try {
              if (((jl.transition = null), (bt = 16 > e ? 16 : e), null === Jl))
                var r = !1;
              else {
                if (((e = Jl), (Jl = null), (Yl = 0), 0 !== (6 & Ol)))
                  throw Error(a(331));
                var o = Ol;
                for (Ol |= 4, Zs = e.current; null !== Zs; ) {
                  var i = Zs,
                    s = i.child;
                  if (0 !== (16 & Zs.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Zs = c; null !== Zs; ) {
                          var d = Zs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zs = f);
                          else
                            for (; null !== Zs; ) {
                              var p = (d = Zs).sibling,
                                h = d.return;
                              if ((il(d), d === c)) {
                                Zs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zs = p);
                                break;
                              }
                              Zs = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Zs = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Zs = s);
                  else
                    e: for (; null !== Zs; ) {
                      if (0 !== (2048 & (i = Zs).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Zs = v);
                        break e;
                      }
                      Zs = i.return;
                    }
                }
                var b = e.current;
                for (Zs = b; null !== Zs; ) {
                  var w = (s = Zs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Zs = w);
                  else
                    e: for (s = b; null !== Zs; ) {
                      if (0 !== (2048 & (l = Zs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ol(9, l);
                          }
                        } catch (k) {
                          Eu(l, l.return, k);
                        }
                      if (l === s) {
                        Zs = null;
                        break e;
                      }
                      var x = l.sibling;
                      if (null !== x) {
                        (x.return = l.return), (Zs = x);
                        break e;
                      }
                      Zs = l.return;
                    }
                }
                if (
                  ((Ol = o),
                  Ho(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (jl.transition = t);
            }
          }
          return !1;
        }
        function _u(e, t, n) {
          (e = za(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), ou(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ql || !Ql.has(r)))
                ) {
                  (t = za(t, (e = ms(t, (e = cs(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Pl & n) === n &&
              (4 === zl ||
              (3 === zl && (130023424 & Pl) === Pl && 500 > Xe() - ql)
                ? pu(e, 0)
                : (Bl |= n)),
            ou(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ra(e, t)) && (yt(e, t, n), ou(e, n));
        }
        function ju(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function Ru(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pu(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Lu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Au(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zu(e, t, n, r, o, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Lu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Fu(n.children, o, i, t);
              case _:
                (s = 8), (o |= 8);
                break;
              case E:
                return (
                  ((e = Pu(12, n, t, 2 | o)).elementType = E), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Pu(13, n, t, o)).elementType = O), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Pu(19, n, t, o)).elementType = R), (e.lanes = i), e
                );
              case L:
                return Du(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      s = 10;
                      break e;
                    case N:
                      s = 9;
                      break e;
                    case j:
                      s = 11;
                      break e;
                    case T:
                      s = 14;
                      break e;
                    case P:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pu(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Fu(e, t, n, r) {
          return ((e = Pu(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = Pu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Uu(e, t, n) {
          return ((e = Pu(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = Pu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Iu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Mu(e, t, n, r, o, a, i, s, l) {
          return (
            (e = new Iu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Pu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Pa(a),
            e
          );
        }
        function qu(e) {
          if (!e) return jo;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Lo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Lo(n)) return Fo(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, o, a, i, s, l) {
          return (
            ((e = Mu(n, r, !0, e, 0, a, 0, s, l)).context = qu(null)),
            (n = e.current),
            ((a = Aa((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            za(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ou(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o);
          return (
            (n = qu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Aa(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = za(o, t, i)) && (ru(e, o, i, a), Fa(e, o, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $u(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          $u(e, t), (e = e.alternate) && $u(e, t);
        }
        _l = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ro.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rs(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Lo(t.type) && Do(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        No(va, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (No(li, 1 & li.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Us(e, t, n)
                            : (No(li, 1 & li.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        No(li, 1 & li.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          No(li, li.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vs(e, t), (e = t.pendingProps);
              var o = Po(t, Oo.current);
              Ea(t, n), (o = _i(null, t, r, e, o, n));
              var i = Ei();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lo(r) ? ((i = !0), Do(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Pa(t),
                    (o.updater = qa),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    $a(t, r, e, n),
                    (t = Os(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    xs(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ya(r, e)),
                  o)
                ) {
                  case 0:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 1:
                    t = js(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, ya(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ns(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                js(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 3:
              e: {
                if ((Rs(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  La(e, t),
                  Ua(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ts(e, t, r, n, (o = cs(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Ts(e, t, r, n, (o = cs(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ga(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                Cs(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Us(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ks(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = o.value),
                  No(va, r._currentValue),
                  (r._currentValue = s),
                  null !== i)
                )
                  if (sr(i.value, s)) {
                    if (i.children === o.children && !Ro.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        s = i.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Aa(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              _a(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          _a(s, n, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                xs(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ea(t, n),
                (r = r((o = Ca(o)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = ya((r = t.type), t.pendingProps)),
                Ss(e, t, r, (o = ya(r.type, o)), n)
              );
            case 15:
              return _s(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ya(r, o)),
                Vs(e, t),
                (t.tag = 1),
                Lo(r) ? ((e = !0), Do(t)) : (e = !1),
                Ea(t, n),
                Va(t, r, o),
                $a(t, r, o, n),
                Os(null, t, r, !0, e, n)
              );
            case 19:
              return Hs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ju(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Wu(i);
                s.call(e);
              };
            }
            Vu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wu(i);
                    a.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wu(l);
                  s.call(e);
                };
              }
              var l = Mu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = l),
                (e[mo] = l.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Vu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Wu(i);
        }
        (Yu.prototype.render = Ju.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Ju.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Vu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ou(t, Xe()),
                    0 === (6 & Ol) && ((Hl = Xe() + 500), Ho()));
                }
                break;
              case 13:
                du(function () {
                  var t = Ra(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ra(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Qu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ra(e, t);
              if (null !== n) ru(n, e, t, tu());
              Qu(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      Q(r), G(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cu),
          (Oe = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, xo, ko, Ce, Ne, cu],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Mu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Ju(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gu(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              s = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, o, 0, i, s)),
              (e[mo] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gu(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      180: (e, t, n) => {
        var r = n(292);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      292: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(144));
      },
      36: (e, t, n) => {
        var r = n(60),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      564: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            a = {},
            i = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, o) && !_.hasOwnProperty(o) && (a[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === a[o] && (a[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: a,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, o, a, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === a ? "." + j(l, 0) : a),
              x(i)
                ? ((o = ""),
                  null != e && (o = e.replace(N, "$&/") + "/"),
                  O(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + j((s = e[u]), u);
              l += O(s, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += O((s = s.value), t, o, (c = a + j(s, u++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          L = { transition: null },
          A = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !_.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      60: (e, t, n) => {
        e.exports = n(564);
      },
      496: (e, t, n) => {
        e.exports = n(36);
      },
      692: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < o && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && A(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), v(C), (C = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !O()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var s = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && o(u),
                  w(n);
              } else o(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && A(x, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          E = null,
          C = -1,
          N = 5,
          j = -1;
        function O() {
          return !(t.unstable_now() - j < N);
        }
        function R() {
          if (null !== E) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            P = T.port2;
          (T.port1.onmessage = R),
            (S = function () {
              P.postMessage(null);
            });
        } else
          S = function () {
            y(R, 0);
          };
        function L(e) {
          (E = e), _ || ((_ = !0), S());
        }
        function A(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(C), (C = -1)) : (g = !0), A(x, a - i)))
                : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      724: (e, t, n) => {
        e.exports = n(692);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, o) {
      if ((1 & o && (r = this(r)), 8 & o)) return r;
      if ("object" === typeof r && r) {
        if (4 & o && r.__esModule) return r;
        if (16 & o && "function" === typeof r.then) return r;
      }
      var a = Object.create(null);
      n.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & o && r; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(a, i), a;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => Mt,
          hasStandardBrowserEnv: () => qt,
          hasStandardBrowserWebWorkerEnv: () => Vt,
        });
      var t = {};
      n.r(t),
        n.d(t, {
          Decoder: () => eo,
          Encoder: () => Gr,
          PacketType: () => Xr,
          protocol: () => Yr,
        });
      var r,
        o = n(60),
        a = n.t(o, 2),
        i = n(180),
        s = n(292),
        l = n.t(s, 2);
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          u.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(r || (r = {}));
      const c = "popstate";
      function d(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function f(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function p(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function h(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          u(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? g(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function m(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function g(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function y(e, t, n, o) {
        void 0 === o && (o = {});
        let { window: a = document.defaultView, v5Compat: i = !1 } = o,
          s = a.history,
          l = r.Pop,
          f = null,
          g = y();
        function y() {
          return (s.state || { idx: null }).idx;
        }
        function v() {
          l = r.Pop;
          let e = y(),
            t = null == e ? null : e - g;
          (g = e), f && f({ action: l, location: w.location, delta: t });
        }
        function b(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : m(e);
          return (
            d(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), s.replaceState(u({}, s.state, { idx: g }), ""));
        let w = {
          get action() {
            return l;
          },
          get location() {
            return e(a, s);
          },
          listen(e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(c, v),
              (f = e),
              () => {
                a.removeEventListener(c, v), (f = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = r.Push;
            let o = h(w.location, e, t);
            n && n(o, e), (g = y() + 1);
            let u = p(o, g),
              c = w.createHref(o);
            try {
              s.pushState(u, "", c);
            } catch (d) {
              if (d instanceof DOMException && "DataCloneError" === d.name)
                throw d;
              a.location.assign(c);
            }
            i && f && f({ action: l, location: w.location, delta: 1 });
          },
          replace: function (e, t) {
            l = r.Replace;
            let o = h(w.location, e, t);
            n && n(o, e), (g = y());
            let a = p(o, g),
              u = w.createHref(o);
            s.replaceState(a, "", u),
              i && f && f({ action: l, location: w.location, delta: 0 });
          },
          go: (e) => s.go(e),
        };
        return w;
      }
      var v;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(v || (v = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function b(e, t, n) {
        void 0 === n && (n = "/");
        let r = L(("string" === typeof t ? g(t) : t).pathname || "/", n);
        if (null == r) return null;
        let o = w(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(o);
        let a = null;
        for (let i = 0; null == a && i < o.length; ++i) a = R(o[i], P(r));
        return a;
      }
      function w(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (d(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let s = U([r, i.relativePath]),
            l = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (d(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            w(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: O(s, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of x(e.path)) o(e, t, r);
            else o(e, t);
          }),
          t
        );
      }
      function x(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          o = n.endsWith("?"),
          a = n.replace(/\?$/, "");
        if (0 === r.length) return o ? [a, ""] : [a];
        let i = x(r.join("/")),
          s = [];
        return (
          s.push(...i.map((e) => ("" === e ? a : [a, e].join("/")))),
          o && s.push(...i),
          s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const k = /^:[\w-]+$/,
        S = 3,
        _ = 2,
        E = 1,
        C = 10,
        N = -2,
        j = (e) => "*" === e;
      function O(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(j) && (r += N),
          t && (r += _),
          n
            .filter((e) => !j(e))
            .reduce((e, t) => e + (k.test(t) ? S : "" === t ? E : C), r)
        );
      }
      function R(e, t) {
        let { routesMeta: n } = e,
          r = {},
          o = "/",
          a = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            s = i === n.length - 1,
            l = "/" === o ? t : t.slice(o.length) || "/",
            u = T(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
              l
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          a.push({
            params: r,
            pathname: U([o, u.pathname]),
            pathnameBase: B(U([o, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (o = U([o, u.pathnameBase]));
        }
        return a;
      }
      function T(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            f(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              o =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (o += "\\/*$")
              : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
            let a = new RegExp(o, t ? void 0 : "i");
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          o = t.match(n);
        if (!o) return null;
        let a = o[0],
          i = a.replace(/(.)\/+$/, "$1"),
          s = o.slice(1),
          l = r.reduce((e, t, n) => {
            let { paramName: r, isOptional: o } = t;
            if ("*" === r) {
              let e = s[n] || "";
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const l = s[n];
            return (
              (e[r] =
                o && !l
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          f(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ")."
                          ),
                          e
                        );
                      }
                    })(l || "", r)),
              e
            );
          }, {});
        return { params: l, pathname: a, pathnameBase: i, pattern: e };
      }
      function P(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            f(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function L(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function A(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function z(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function F(e, t) {
        let n = z(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function D(e, t, n, r) {
        let o;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (o = g(e))
            : ((o = u({}, e)),
              d(
                !o.pathname || !o.pathname.includes("?"),
                A("?", "pathname", "search", o)
              ),
              d(
                !o.pathname || !o.pathname.includes("#"),
                A("#", "pathname", "hash", o)
              ),
              d(
                !o.search || !o.search.includes("#"),
                A("#", "search", "hash", o)
              ));
        let a,
          i = "" === e || "" === o.pathname,
          s = i ? "/" : o.pathname;
        if (null == s) a = n;
        else {
          let e = t.length - 1;
          if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            o.pathname = t.join("/");
          }
          a = e >= 0 ? t[e] : "/";
        }
        let l = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: o = "",
              } = "string" === typeof e ? g(e) : e,
              a = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: a, search: I(r), hash: M(o) };
          })(o, a),
          c = s && "/" !== s && s.endsWith("/"),
          f = (i || "." === s) && n.endsWith("/");
        return l.pathname.endsWith("/") || (!c && !f) || (l.pathname += "/"), l;
      }
      const U = (e) => e.join("/").replace(/\/\/+/g, "/"),
        B = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        I = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        M = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function q(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const H = ["post", "put", "patch", "delete"],
        V = (new Set(H), ["get", ...H]);
      new Set(V), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      const $ = o.createContext(null);
      const Q = o.createContext(null);
      const K = o.createContext(null);
      const J = o.createContext(null);
      const Y = o.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const X = o.createContext(null);
      function G() {
        return null != o.useContext(J);
      }
      function Z() {
        return G() || d(!1), o.useContext(J).location;
      }
      function ee(e) {
        o.useContext(K).static || o.useLayoutEffect(e);
      }
      function te() {
        let { isDataRoute: e } = o.useContext(Y);
        return e
          ? (function () {
              let { router: e } = de(ue.UseNavigateStable),
                t = pe(ce.UseNavigateStable),
                n = o.useRef(!1);
              return (
                ee(() => {
                  n.current = !0;
                }),
                o.useCallback(
                  function (r, o) {
                    void 0 === o && (o = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, W({ fromRouteId: t }, o)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              G() || d(!1);
              let e = o.useContext($),
                { basename: t, future: n, navigator: r } = o.useContext(K),
                { matches: a } = o.useContext(Y),
                { pathname: i } = Z(),
                s = JSON.stringify(F(a, n.v7_relativeSplatPath)),
                l = o.useRef(!1);
              return (
                ee(() => {
                  l.current = !0;
                }),
                o.useCallback(
                  function (n, o) {
                    if ((void 0 === o && (o = {}), !l.current)) return;
                    if ("number" === typeof n) return void r.go(n);
                    let a = D(n, JSON.parse(s), i, "path" === o.relative);
                    null == e &&
                      "/" !== t &&
                      (a.pathname =
                        "/" === a.pathname ? t : U([t, a.pathname])),
                      (o.replace ? r.replace : r.push)(a, o.state, o);
                  },
                  [t, r, s, i, e]
                )
              );
            })();
      }
      function ne(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { future: r } = o.useContext(K),
          { matches: a } = o.useContext(Y),
          { pathname: i } = Z(),
          s = JSON.stringify(F(a, r.v7_relativeSplatPath));
        return o.useMemo(
          () => D(e, JSON.parse(s), i, "path" === n),
          [e, s, i, n]
        );
      }
      function re(e, t, n, a) {
        G() || d(!1);
        let { navigator: i } = o.useContext(K),
          { matches: s } = o.useContext(Y),
          l = s[s.length - 1],
          u = l ? l.params : {},
          c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let f,
          p = Z();
        if (t) {
          var h;
          let e = "string" === typeof t ? g(t) : t;
          "/" === c ||
            (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
            d(!1),
            (f = e);
        } else f = p;
        let m = f.pathname || "/",
          y = b(e, { pathname: "/" === c ? m : m.slice(c.length) || "/" });
        let v = le(
          y &&
            y.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: U([
                  c,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : U([
                        c,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          s,
          n,
          a
        );
        return t && v
          ? o.createElement(
              J.Provider,
              {
                value: {
                  location: W(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    f
                  ),
                  navigationType: r.Pop,
                },
              },
              v
            )
          : v;
      }
      function oe() {
        let e = (function () {
            var e;
            let t = o.useContext(X),
              n = fe(ce.UseRouteError),
              r = pe(ce.UseRouteError);
            if (void 0 !== t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = q(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          a = { padding: "0.5rem", backgroundColor: r };
        return o.createElement(
          o.Fragment,
          null,
          o.createElement("h2", null, "Unexpected Application Error!"),
          o.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? o.createElement("pre", { style: a }, n) : null,
          null
        );
      }
      const ae = o.createElement(oe, null);
      class ie extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? o.createElement(
                Y.Provider,
                { value: this.props.routeContext },
                o.createElement(X.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function se(e) {
        let { routeContext: t, match: n, children: r } = e,
          a = o.useContext($);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = n.route.id),
          o.createElement(Y.Provider, { value: t }, r)
        );
      }
      function le(e, t, n, r) {
        var a;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === r && (r = null),
          null == e)
        ) {
          var i;
          if (null == (i = n) || !i.errors) return null;
          e = n.matches;
        }
        let s = e,
          l = null == (a = n) ? void 0 : a.errors;
        if (null != l) {
          let e = s.findIndex(
            (e) => e.route.id && (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || d(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (n && r && r.v7_partialHydration)
          for (let o = 0; o < s.length; o++) {
            let e = s[o];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (c = o),
              e.route.id)
            ) {
              let { loaderData: t, errors: r } = n,
                o =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!r || void 0 === r[e.route.id]);
              if (e.route.lazy || o) {
                (u = !0), (s = c >= 0 ? s.slice(0, c + 1) : [s[0]]);
                break;
              }
            }
          }
        return s.reduceRight((e, r, a) => {
          let i,
            d = !1,
            f = null,
            p = null;
          var h;
          n &&
            ((i = l && r.route.id ? l[r.route.id] : void 0),
            (f = r.route.errorElement || ae),
            u &&
              (c < 0 && 0 === a
                ? ((h = "route-fallback"),
                  !1 || he[h] || (he[h] = !0),
                  (d = !0),
                  (p = null))
                : c === a &&
                  ((d = !0), (p = r.route.hydrateFallbackElement || null))));
          let m = t.concat(s.slice(0, a + 1)),
            g = () => {
              let t;
              return (
                (t = i
                  ? f
                  : d
                  ? p
                  : r.route.Component
                  ? o.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                o.createElement(se, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
            ? o.createElement(ie, {
                location: n.location,
                revalidation: n.revalidation,
                component: f,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var ue = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(ue || {}),
        ce = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ce || {});
      function de(e) {
        let t = o.useContext($);
        return t || d(!1), t;
      }
      function fe(e) {
        let t = o.useContext(Q);
        return t || d(!1), t;
      }
      function pe(e) {
        let t = (function (e) {
            let t = o.useContext(Y);
            return t || d(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || d(!1), n.route.id;
      }
      const he = {};
      a.startTransition;
      function me(e) {
        d(!1);
      }
      function ge(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: a,
          navigationType: i = r.Pop,
          navigator: s,
          static: l = !1,
          future: u,
        } = e;
        G() && d(!1);
        let c = t.replace(/^\/*/, "/"),
          f = o.useMemo(
            () => ({
              basename: c,
              navigator: s,
              static: l,
              future: W({ v7_relativeSplatPath: !1 }, u),
            }),
            [c, u, s, l]
          );
        "string" === typeof a && (a = g(a));
        let {
            pathname: p = "/",
            search: h = "",
            hash: m = "",
            state: y = null,
            key: v = "default",
          } = a,
          b = o.useMemo(() => {
            let e = L(p, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: h,
                    hash: m,
                    state: y,
                    key: v,
                  },
                  navigationType: i,
                };
          }, [c, p, h, m, y, v, i]);
        return null == b
          ? null
          : o.createElement(
              K.Provider,
              { value: f },
              o.createElement(J.Provider, { children: n, value: b })
            );
      }
      function ye(e) {
        let { children: t, location: n } = e;
        return re(ve(t), n);
      }
      new Promise(() => {});
      o.Component;
      function ve(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          o.Children.forEach(e, (e, r) => {
            if (!o.isValidElement(e)) return;
            let a = [...t, r];
            if (e.type === o.Fragment)
              return void n.push.apply(n, ve(e.props.children, a));
            e.type !== me && d(!1), e.props.index && e.props.children && d(!1);
            let i = {
              id: e.props.id || a.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = ve(e.props.children, a)),
              n.push(i);
          }),
          n
        );
      }
      function be() {
        return (
          (be = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          be.apply(this, arguments)
        );
      }
      function we(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const xe = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (po) {}
      new Map();
      const ke = a.startTransition;
      l.flushSync, a.useId;
      function Se(e) {
        let { basename: t, children: n, future: r, window: a } = e,
          i = o.useRef();
        var s;
        null == i.current &&
          (i.current =
            (void 0 === (s = { window: a, v5Compat: !0 }) && (s = {}),
            y(
              function (e, t) {
                let { pathname: n, search: r, hash: o } = e.location;
                return h(
                  "",
                  { pathname: n, search: r, hash: o },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : m(t);
              },
              null,
              s
            )));
        let l = i.current,
          [u, c] = o.useState({ action: l.action, location: l.location }),
          { v7_startTransition: d } = r || {},
          f = o.useCallback(
            (e) => {
              d && ke ? ke(() => c(e)) : c(e);
            },
            [c, d]
          );
        return (
          o.useLayoutEffect(() => l.listen(f), [l, f]),
          o.createElement(ge, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: l,
            future: r,
          })
        );
      }
      const _e =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Ee = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ce = o.forwardRef(function (e, t) {
          let n,
            {
              onClick: r,
              relative: a,
              reloadDocument: i,
              replace: s,
              state: l,
              target: u,
              to: c,
              preventScrollReset: f,
              unstable_viewTransition: p,
            } = e,
            h = we(e, xe),
            { basename: g } = o.useContext(K),
            y = !1;
          if ("string" === typeof c && Ee.test(c) && ((n = c), _e))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                n = L(t.pathname, g);
              t.origin === e.origin && null != n
                ? (c = n + t.search + t.hash)
                : (y = !0);
            } catch (po) {}
          let v = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              G() || d(!1);
              let { basename: r, navigator: a } = o.useContext(K),
                { hash: i, pathname: s, search: l } = ne(e, { relative: n }),
                u = s;
              return (
                "/" !== r && (u = "/" === s ? r : U([r, s])),
                a.createHref({ pathname: u, search: l, hash: i })
              );
            })(c, { relative: a }),
            b = (function (e, t) {
              let {
                  target: n,
                  replace: r,
                  state: a,
                  preventScrollReset: i,
                  relative: s,
                  unstable_viewTransition: l,
                } = void 0 === t ? {} : t,
                u = te(),
                c = Z(),
                d = ne(e, { relative: s });
              return o.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== r ? r : m(c) === m(d);
                    u(e, {
                      replace: n,
                      state: a,
                      preventScrollReset: i,
                      relative: s,
                      unstable_viewTransition: l,
                    });
                  }
                },
                [c, u, d, r, a, n, e, i, s, l]
              );
            })(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: f,
              relative: a,
              unstable_viewTransition: p,
            });
          return o.createElement(
            "a",
            be({}, h, {
              href: n || v,
              onClick:
                y || i
                  ? r
                  : function (e) {
                      r && r(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: u,
            })
          );
        });
      var Ne, je;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Ne || (Ne = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(je || (je = {}));
      var Oe = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Re = o.createContext && o.createContext(Oe),
        Te = function () {
          return (
            (Te =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Te.apply(this, arguments)
          );
        },
        Pe = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function Le(e) {
        return (
          e &&
          e.map(function (e, t) {
            return o.createElement(e.tag, Te({ key: t }, e.attr), Le(e.child));
          })
        );
      }
      function Ae(e) {
        return function (t) {
          return o.createElement(
            ze,
            Te({ attr: Te({}, e.attr) }, t),
            Le(e.child)
          );
        };
      }
      function ze(e) {
        var t = function (t) {
          var n,
            r = e.attr,
            a = e.size,
            i = e.title,
            s = Pe(e, ["attr", "size", "title"]),
            l = a || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            o.createElement(
              "svg",
              Te(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                r,
                s,
                {
                  className: n,
                  style: Te(
                    Te({ color: e.color || t.color }, t.style),
                    e.style
                  ),
                  height: l,
                  width: l,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && o.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== Re
          ? o.createElement(Re.Consumer, null, function (e) {
              return t(e);
            })
          : t(Oe);
      }
      function Fe(e) {
        return Ae({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48",
                d: "M244 400L100 256l144-144M120 256h292",
              },
            },
          ],
        })(e);
      }
      function De(e) {
        return Ae({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40",
              },
            },
            {
              tag: "path",
              attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M288 336l80-80-80-80M80 256h272",
              },
            },
          ],
        })(e);
      }
      function Ue(e) {
        return Ae({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
              },
            },
          ],
        })(e);
      }
      function Be(e) {
        return Ae({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",
              },
            },
          ],
        })(e);
      }
      function Ie(e) {
        return Ae({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
              },
            },
          ],
        })(e);
      }
      var Me = n(496);
      const qe = () => (
        (0, o.useEffect)(() => {
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 80, density: { enable: !0, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 },
              },
              opacity: {
                value: 0.5,
                random: !1,
                anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
              },
              size: {
                value: 3,
                random: !0,
                anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
              },
              line_linked: {
                enable: !0,
                distance: 150,
                color: "#000000",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: !0,
                speed: 3,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: { enable: !1, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: !0, mode: "grab" },
                onclick: { enable: !0, mode: "push" },
                resize: !0,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: !0,
          });
        }, []),
        (0, Me.jsx)("div", {
          id: "particles-js",
          className:
            "particles-container absolute z-0 w-full h-full overflow-hidden",
        })
      );
      function He(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: Ve } = Object.prototype,
        { getPrototypeOf: We } = Object,
        $e = ((e) => (t) => {
          const n = Ve.call(t);
          return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        Qe = (e) => ((e = e.toLowerCase()), (t) => $e(t) === e),
        Ke = (e) => (t) => typeof t === e,
        { isArray: Je } = Array,
        Ye = Ke("undefined");
      const Xe = Qe("ArrayBuffer");
      const Ge = Ke("string"),
        Ze = Ke("function"),
        et = Ke("number"),
        tt = (e) => null !== e && "object" === typeof e,
        nt = (e) => {
          if ("object" !== $e(e)) return !1;
          const t = We(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        rt = Qe("Date"),
        ot = Qe("File"),
        at = Qe("Blob"),
        it = Qe("FileList"),
        st = Qe("URLSearchParams");
      function lt(e, t) {
        let n,
          r,
          { allOwnKeys: o = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), Je(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = r.length;
            let i;
            for (n = 0; n < a; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function ut(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          o = n.length;
        for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
        return null;
      }
      const ct =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        dt = (e) => !Ye(e) && e !== ct;
      const ft =
        ((pt = "undefined" !== typeof Uint8Array && We(Uint8Array)),
        (e) => pt && e instanceof pt);
      var pt;
      const ht = Qe("HTMLFormElement"),
        mt = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        gt = Qe("RegExp"),
        yt = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          lt(n, (n, o) => {
            let a;
            !1 !== (a = t(n, o, e)) && (r[o] = a || n);
          }),
            Object.defineProperties(e, r);
        },
        vt = "abcdefghijklmnopqrstuvwxyz",
        bt = "0123456789",
        wt = { DIGIT: bt, ALPHA: vt, ALPHA_DIGIT: vt + vt.toUpperCase() + bt };
      const xt = Qe("AsyncFunction"),
        kt = {
          isArray: Je,
          isArrayBuffer: Xe,
          isBuffer: function (e) {
            return (
              null !== e &&
              !Ye(e) &&
              null !== e.constructor &&
              !Ye(e.constructor) &&
              Ze(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (Ze(e.append) &&
                  ("formdata" === (t = $e(e)) ||
                    ("object" === t &&
                      Ze(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && Xe(e.buffer)),
              t
            );
          },
          isString: Ge,
          isNumber: et,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: tt,
          isPlainObject: nt,
          isUndefined: Ye,
          isDate: rt,
          isFile: ot,
          isBlob: at,
          isRegExp: gt,
          isFunction: Ze,
          isStream: (e) => tt(e) && Ze(e.pipe),
          isURLSearchParams: st,
          isTypedArray: ft,
          isFileList: it,
          forEach: lt,
          merge: function e() {
            const { caseless: t } = (dt(this) && this) || {},
              n = {},
              r = (r, o) => {
                const a = (t && ut(n, o)) || o;
                nt(n[a]) && nt(r)
                  ? (n[a] = e(n[a], r))
                  : nt(r)
                  ? (n[a] = e({}, r))
                  : Je(r)
                  ? (n[a] = r.slice())
                  : (n[a] = r);
              };
            for (let o = 0, a = arguments.length; o < a; o++)
              arguments[o] && lt(arguments[o], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              lt(
                t,
                (t, r) => {
                  n && Ze(t) ? (e[r] = He(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let o, a, i;
            const s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
                (i = o[a]),
                  (r && !r(i, e, t)) || s[i] || ((t[i] = e[i]), (s[i] = !0));
              e = !1 !== n && We(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: $e,
          kindOfTest: Qe,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (Je(e)) return e;
            let t = e.length;
            if (!et(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: ht,
          hasOwnProperty: mt,
          hasOwnProp: mt,
          reduceDescriptors: yt,
          freezeMethods: (e) => {
            yt(e, (t, n) => {
              if (Ze(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              Ze(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return Je(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: ut,
          global: ct,
          isContextDefined: dt,
          ALPHABET: wt,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : wt.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              Ze(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (tt(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const o = Je(e) ? [] : {};
                    return (
                      lt(e, (e, t) => {
                        const a = n(e, r + 1);
                        !Ye(a) && (o[t] = a);
                      }),
                      (t[r] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: xt,
          isThenable: (e) => e && (tt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch),
        };
      function St(e, t, n, r, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          o && (this.response = o);
      }
      kt.inherits(St, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: kt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const _t = St.prototype,
        Et = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        Et[e] = { value: e };
      }),
        Object.defineProperties(St, Et),
        Object.defineProperty(_t, "isAxiosError", { value: !0 }),
        (St.from = (e, t, n, r, o, a) => {
          const i = Object.create(_t);
          return (
            kt.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            St.call(i, e.message, t, n, r, o),
            (i.cause = e),
            (i.name = e.name),
            a && Object.assign(i, a),
            i
          );
        });
      const Ct = St;
      function Nt(e) {
        return kt.isPlainObject(e) || kt.isArray(e);
      }
      function jt(e) {
        return kt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Ot(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = jt(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const Rt = kt.toFlatObject(kt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const Tt = function (e, t, n) {
        if (!kt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = kt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !kt.isUndefined(t[e]);
            }
          )).metaTokens,
          o = n.visitor || u,
          a = n.dots,
          i = n.indexes,
          s =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            kt.isSpecCompliantForm(t);
        if (!kt.isFunction(o))
          throw new TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (kt.isDate(e)) return e.toISOString();
          if (!s && kt.isBlob(e))
            throw new Ct("Blob is not supported. Use a Buffer instead.");
          return kt.isArrayBuffer(e) || kt.isTypedArray(e)
            ? s && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, n, o) {
          let s = e;
          if (e && !o && "object" === typeof e)
            if (kt.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (kt.isArray(e) &&
                (function (e) {
                  return kt.isArray(e) && !e.some(Nt);
                })(e)) ||
              ((kt.isFileList(e) || kt.endsWith(n, "[]")) &&
                (s = kt.toArray(e)))
            )
              return (
                (n = jt(n)),
                s.forEach(function (e, r) {
                  !kt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? Ot([n], r, a) : null === i ? n : n + "[]",
                      l(e)
                    );
                }),
                !1
              );
          return !!Nt(e) || (t.append(Ot(o, n, a), l(e)), !1);
        }
        const c = [],
          d = Object.assign(Rt, {
            defaultVisitor: u,
            convertValue: l,
            isVisitable: Nt,
          });
        if (!kt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!kt.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                kt.forEach(n, function (n, a) {
                  !0 ===
                    (!(kt.isUndefined(n) || null === n) &&
                      o.call(t, n, kt.isString(a) ? a.trim() : a, r, d)) &&
                    e(n, r ? r.concat(a) : [a]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function Pt(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Lt(e, t) {
        (this._pairs = []), e && Tt(e, this, t);
      }
      const At = Lt.prototype;
      (At.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (At.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, Pt);
              }
            : Pt;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const zt = Lt;
      function Ft(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Dt(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || Ft,
          o = n && n.serialize;
        let a;
        if (
          ((a = o
            ? o(t, n)
            : kt.isURLSearchParams(t)
            ? t.toString()
            : new zt(t, n).toString(r)),
          a)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
        }
        return e;
      }
      const Ut = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            kt.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        Bt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        It = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : zt,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        Mt = "undefined" !== typeof window && "undefined" !== typeof document,
        qt =
          ((Ht = "undefined" !== typeof navigator && navigator.product),
          Mt && ["ReactNative", "NativeScript", "NS"].indexOf(Ht) < 0);
      var Ht;
      const Vt =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        Wt = { ...e, ...It };
      const $t = function (e) {
        function t(e, n, r, o) {
          let a = e[o++];
          if ("__proto__" === a) return !0;
          const i = Number.isFinite(+a),
            s = o >= e.length;
          if (((a = !a && kt.isArray(r) ? r.length : a), s))
            return kt.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i;
          (r[a] && kt.isObject(r[a])) || (r[a] = []);
          return (
            t(e, n, r[a], o) &&
              kt.isArray(r[a]) &&
              (r[a] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const o = n.length;
                let a;
                for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
                return t;
              })(r[a])),
            !i
          );
        }
        if (kt.isFormData(e) && kt.isFunction(e.entries)) {
          const n = {};
          return (
            kt.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return kt
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const Qt = {
        transitional: Bt,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              o = kt.isObject(e);
            o && kt.isHTMLForm(e) && (e = new FormData(e));
            if (kt.isFormData(e)) return r ? JSON.stringify($t(e)) : e;
            if (
              kt.isArrayBuffer(e) ||
              kt.isBuffer(e) ||
              kt.isStream(e) ||
              kt.isFile(e) ||
              kt.isBlob(e)
            )
              return e;
            if (kt.isArrayBufferView(e)) return e.buffer;
            if (kt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let a;
            if (o) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return Tt(
                    e,
                    new Wt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Wt.isNode && kt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (a = kt.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return Tt(
                  a ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return o || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (kt.isString(e))
                    try {
                      return (t || JSON.parse)(e), kt.trim(e);
                    } catch (po) {
                      if ("SyntaxError" !== po.name) throw po;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Qt.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && kt.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (po) {
                if (n) {
                  if ("SyntaxError" === po.name)
                    throw Ct.from(
                      po,
                      Ct.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw po;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Wt.classes.FormData, Blob: Wt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      kt.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Qt.headers[e] = {};
      });
      const Kt = Qt,
        Jt = kt.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Yt = Symbol("internals");
      function Xt(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Gt(e) {
        return !1 === e || null == e
          ? e
          : kt.isArray(e)
          ? e.map(Gt)
          : String(e);
      }
      function Zt(e, t, n, r, o) {
        return kt.isFunction(r)
          ? r.call(this, t, n)
          : (o && (t = n),
            kt.isString(t)
              ? kt.isString(r)
                ? -1 !== t.indexOf(r)
                : kt.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class en {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function o(e, t, n) {
            const o = Xt(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const a = kt.findKey(r, o);
            (!a ||
              void 0 === r[a] ||
              !0 === n ||
              (void 0 === n && !1 !== r[a])) &&
              (r[a || t] = Gt(e));
          }
          const a = (e, t) => kt.forEach(e, (e, n) => o(e, n, t));
          return (
            kt.isPlainObject(e) || e instanceof this.constructor
              ? a(e, t)
              : kt.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              ? a(
                  ((e) => {
                    const t = {};
                    let n, r, o;
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (o = e.indexOf(":")),
                            (n = e.substring(0, o).trim().toLowerCase()),
                            (r = e.substring(o + 1).trim()),
                            !n ||
                              (t[n] && Jt[n]) ||
                              ("set-cookie" === n
                                ? t[n]
                                  ? t[n].push(r)
                                  : (t[n] = [r])
                                : (t[n] = t[n] ? t[n] + ", " + r : r));
                        }),
                      t
                    );
                  })(e),
                  t
                )
              : null != e && o(t, e, n),
            this
          );
        }
        get(e, t) {
          if ((e = Xt(e))) {
            const n = kt.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (kt.isFunction(t)) return t.call(this, e, n);
              if (kt.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = Xt(e))) {
            const n = kt.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Zt(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function o(e) {
            if ((e = Xt(e))) {
              const o = kt.findKey(n, e);
              !o || (t && !Zt(0, n[o], o, t)) || (delete n[o], (r = !0));
            }
          }
          return kt.isArray(e) ? e.forEach(o) : o(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const o = t[n];
            (e && !Zt(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            kt.forEach(this, (r, o) => {
              const a = kt.findKey(n, o);
              if (a) return (t[a] = Gt(r)), void delete t[o];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(o)
                : String(o).trim();
              i !== o && delete t[o], (t[i] = Gt(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            kt.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && kt.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[Yt] = this[Yt] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = Xt(e);
            t[r] ||
              (!(function (e, t) {
                const n = kt.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, o) {
                      return this[r].call(this, t, e, n, o);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return kt.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      en.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        kt.reduceDescriptors(en.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        kt.freezeMethods(en);
      const tn = en;
      function nn(e, t) {
        const n = this || Kt,
          r = t || n,
          o = tn.from(r.headers);
        let a = r.data;
        return (
          kt.forEach(e, function (e) {
            a = e.call(n, a, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          a
        );
      }
      function rn(e) {
        return !(!e || !e.__CANCEL__);
      }
      function on(e, t, n) {
        Ct.call(this, null == e ? "canceled" : e, Ct.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      kt.inherits(on, Ct, { __CANCEL__: !0 });
      const an = on;
      const sn = Wt.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, o, a) {
              const i = [e + "=" + encodeURIComponent(t)];
              kt.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                kt.isString(r) && i.push("path=" + r),
                kt.isString(o) && i.push("domain=" + o),
                !0 === a && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read(e) {
              const t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove(e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : { write() {}, read: () => null, remove() {} };
      function ln(e, t) {
        return e &&
          !(function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          })(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const un = Wt.hasStandardBrowserEnv
        ? (function () {
            const e = /(msie|trident)/i.test(navigator.userAgent),
              t = document.createElement("a");
            let n;
            function r(n) {
              let r = n;
              return (
                e && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                  href: t.href,
                  protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                  host: t.host,
                  search: t.search ? t.search.replace(/^\?/, "") : "",
                  hash: t.hash ? t.hash.replace(/^#/, "") : "",
                  hostname: t.hostname,
                  port: t.port,
                  pathname:
                    "/" === t.pathname.charAt(0)
                      ? t.pathname
                      : "/" + t.pathname,
                }
              );
            }
            return (
              (n = r(window.location.href)),
              function (e) {
                const t = kt.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      const cn = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let o,
          a = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            const l = Date.now(),
              u = r[i];
            o || (o = l), (n[a] = s), (r[a] = l);
            let c = i,
              d = 0;
            for (; c !== a; ) (d += n[c++]), (c %= e);
            if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), l - o < t))
              return;
            const f = u && l - u;
            return f ? Math.round((1e3 * d) / f) : void 0;
          }
        );
      };
      function dn(e, t) {
        let n = 0;
        const r = cn(50, 250);
        return (o) => {
          const a = o.loaded,
            i = o.lengthComputable ? o.total : void 0,
            s = a - n,
            l = r(s);
          n = a;
          const u = {
            loaded: a,
            total: i,
            progress: i ? a / i : void 0,
            bytes: s,
            rate: l || void 0,
            estimated: l && i && a <= i ? (i - a) / l : void 0,
            event: o,
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      const fn =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const o = tn.from(e.headers).normalize();
              let a,
                i,
                { responseType: s, withXSRFToken: l } = e;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(a),
                  e.signal && e.signal.removeEventListener("abort", a);
              }
              if (kt.isFormData(r))
                if (
                  Wt.hasStandardBrowserEnv ||
                  Wt.hasStandardBrowserWebWorkerEnv
                )
                  o.setContentType(!1);
                else if (!1 !== (i = o.getContentType())) {
                  const [e, ...t] = i
                    ? i
                        .split(";")
                        .map((e) => e.trim())
                        .filter(Boolean)
                    : [];
                  o.setContentType(
                    [e || "multipart/form-data", ...t].join("; ")
                  );
                }
              let c = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const d = ln(e.baseURL, e.url);
              function f() {
                if (!c) return;
                const r = tn.from(
                  "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                );
                !(function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new Ct(
                          "Request failed with status code " + n.status,
                          [Ct.ERR_BAD_REQUEST, Ct.ERR_BAD_RESPONSE][
                            Math.floor(n.status / 100) - 4
                          ],
                          n.config,
                          n.request,
                          n
                        )
                      )
                    : e(n);
                })(
                  function (e) {
                    t(e), u();
                  },
                  function (e) {
                    n(e), u();
                  },
                  {
                    data:
                      s && "text" !== s && "json" !== s
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: r,
                    config: e,
                    request: c,
                  }
                ),
                  (c = null);
              }
              if (
                (c.open(
                  e.method.toUpperCase(),
                  Dt(d, e.params, e.paramsSerializer),
                  !0
                ),
                (c.timeout = e.timeout),
                "onloadend" in c
                  ? (c.onloadend = f)
                  : (c.onreadystatechange = function () {
                      c &&
                        4 === c.readyState &&
                        (0 !== c.status ||
                          (c.responseURL &&
                            0 === c.responseURL.indexOf("file:"))) &&
                        setTimeout(f);
                    }),
                (c.onabort = function () {
                  c &&
                    (n(new Ct("Request aborted", Ct.ECONNABORTED, e, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  n(new Ct("Network Error", Ct.ERR_NETWORK, e, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const r = e.transitional || Bt;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new Ct(
                        t,
                        r.clarifyTimeoutError ? Ct.ETIMEDOUT : Ct.ECONNABORTED,
                        e,
                        c
                      )
                    ),
                    (c = null);
                }),
                Wt.hasStandardBrowserEnv &&
                  (l && kt.isFunction(l) && (l = l(e)),
                  l || (!1 !== l && un(d))))
              ) {
                const t =
                  e.xsrfHeaderName &&
                  e.xsrfCookieName &&
                  sn.read(e.xsrfCookieName);
                t && o.set(e.xsrfHeaderName, t);
              }
              void 0 === r && o.setContentType(null),
                "setRequestHeader" in c &&
                  kt.forEach(o.toJSON(), function (e, t) {
                    c.setRequestHeader(t, e);
                  }),
                kt.isUndefined(e.withCredentials) ||
                  (c.withCredentials = !!e.withCredentials),
                s && "json" !== s && (c.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  c.addEventListener("progress", dn(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener("progress", dn(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((a = (t) => {
                    c &&
                      (n(!t || t.type ? new an(null, e, c) : t),
                      c.abort(),
                      (c = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(a),
                  e.signal &&
                    (e.signal.aborted
                      ? a()
                      : e.signal.addEventListener("abort", a)));
              const p = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(d);
              p && -1 === Wt.protocols.indexOf(p)
                ? n(
                    new Ct(
                      "Unsupported protocol " + p + ":",
                      Ct.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : c.send(r || null);
            });
          },
        pn = { http: null, xhr: fn };
      kt.forEach(pn, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (po) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const hn = (e) => "- ".concat(e),
        mn = (e) => kt.isFunction(e) || null === e || !1 === e,
        gn = (e) => {
          e = kt.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const o = {};
          for (let a = 0; a < t; a++) {
            let t;
            if (
              ((n = e[a]),
              (r = n),
              !mn(n) && ((r = pn[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new Ct("Unknown adapter '".concat(t, "'"));
            if (r) break;
            o[t || "#" + a] = r;
          }
          if (!r) {
            const e = Object.entries(o).map((e) => {
              let [t, n] = e;
              return (
                "adapter ".concat(t, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(hn).join("\n")
                : " " + hn(e[0])
              : "as no adapter specified";
            throw new Ct(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function yn(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new an(null, e);
      }
      function vn(e) {
        yn(e),
          (e.headers = tn.from(e.headers)),
          (e.data = nn.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return gn(e.adapter || Kt.adapter)(e).then(
          function (t) {
            return (
              yn(e),
              (t.data = nn.call(e, e.transformResponse, t)),
              (t.headers = tn.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              rn(t) ||
                (yn(e),
                t &&
                  t.response &&
                  ((t.response.data = nn.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = tn.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const bn = (e) => (e instanceof tn ? e.toJSON() : e);
      function wn(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return kt.isPlainObject(e) && kt.isPlainObject(t)
            ? kt.merge.call({ caseless: n }, e, t)
            : kt.isPlainObject(t)
            ? kt.merge({}, t)
            : kt.isArray(t)
            ? t.slice()
            : t;
        }
        function o(e, t, n) {
          return kt.isUndefined(t)
            ? kt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function a(e, t) {
          if (!kt.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return kt.isUndefined(t)
            ? kt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function s(n, o, a) {
          return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
        }
        const l = {
          url: a,
          method: a,
          data: a,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: s,
          headers: (e, t) => o(bn(e), bn(t), !0),
        };
        return (
          kt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const a = l[r] || o,
              i = a(e[r], t[r], r);
            (kt.isUndefined(i) && a !== s) || (n[r] = i);
          }),
          n
        );
      }
      const xn = "1.6.7",
        kn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          kn[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const Sn = {};
      kn.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.6.7] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, o, a) => {
          if (!1 === e)
            throw new Ct(
              r(o, " has been removed" + (t ? " in " + t : "")),
              Ct.ERR_DEPRECATED
            );
          return (
            t &&
              !Sn[o] &&
              ((Sn[o] = !0),
              console.warn(
                r(
                  o,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, o, a)
          );
        };
      };
      const _n = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new Ct(
                "options must be an object",
                Ct.ERR_BAD_OPTION_VALUE
              );
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0; ) {
              const a = r[o],
                i = t[a];
              if (i) {
                const t = e[a],
                  n = void 0 === t || i(t, a, e);
                if (!0 !== n)
                  throw new Ct(
                    "option " + a + " must be " + n,
                    Ct.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new Ct("Unknown option " + a, Ct.ERR_BAD_OPTION);
            }
          },
          validators: kn,
        },
        En = _n.validators;
      class Cn {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new Ut(), response: new Ut() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              n.stack
                ? t &&
                  !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                  (n.stack += "\n" + t)
                : (n.stack = t);
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = wn(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: o } = t;
          void 0 !== n &&
            _n.assertOptions(
              n,
              {
                silentJSONParsing: En.transitional(En.boolean),
                forcedJSONParsing: En.transitional(En.boolean),
                clarifyTimeoutError: En.transitional(En.boolean),
              },
              !1
            ),
            null != r &&
              (kt.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : _n.assertOptions(
                    r,
                    { encode: En.function, serialize: En.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let a = o && kt.merge(o.common, o[t.method]);
          o &&
            kt.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete o[e];
              }
            ),
            (t.headers = tn.concat(a, o));
          const i = [];
          let s = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((s = s && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const l = [];
          let u;
          this.interceptors.response.forEach(function (e) {
            l.push(e.fulfilled, e.rejected);
          });
          let c,
            d = 0;
          if (!s) {
            const e = [vn.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, l),
                c = e.length,
                u = Promise.resolve(t);
              d < c;

            )
              u = u.then(e[d++], e[d++]);
            return u;
          }
          c = i.length;
          let f = t;
          for (d = 0; d < c; ) {
            const e = i[d++],
              t = i[d++];
            try {
              f = e(f);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            u = vn.call(this, f);
          } catch (p) {
            return Promise.reject(p);
          }
          for (d = 0, c = l.length; d < c; ) u = u.then(l[d++], l[d++]);
          return u;
        }
        getUri(e) {
          return Dt(
            ln((e = wn(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      kt.forEach(["delete", "get", "head", "options"], function (e) {
        Cn.prototype[e] = function (t, n) {
          return this.request(
            wn(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        kt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, o) {
              return this.request(
                wn(o || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (Cn.prototype[e] = t()), (Cn.prototype[e + "Form"] = t(!0));
        });
      const Nn = Cn;
      class jn {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, o) {
              n.reason || ((n.reason = new an(e, r, o)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return {
            token: new jn(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const On = jn;
      const Rn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Rn).forEach((e) => {
        let [t, n] = e;
        Rn[n] = t;
      });
      const Tn = Rn;
      const Pn = (function e(t) {
        const n = new Nn(t),
          r = He(Nn.prototype.request, n);
        return (
          kt.extend(r, Nn.prototype, n, { allOwnKeys: !0 }),
          kt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(wn(t, n));
          }),
          r
        );
      })(Kt);
      (Pn.Axios = Nn),
        (Pn.CanceledError = an),
        (Pn.CancelToken = On),
        (Pn.isCancel = rn),
        (Pn.VERSION = xn),
        (Pn.toFormData = Tt),
        (Pn.AxiosError = Ct),
        (Pn.Cancel = Pn.CanceledError),
        (Pn.all = function (e) {
          return Promise.all(e);
        }),
        (Pn.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Pn.isAxiosError = function (e) {
          return kt.isObject(e) && !0 === e.isAxiosError;
        }),
        (Pn.mergeConfig = wn),
        (Pn.AxiosHeaders = tn),
        (Pn.formToJSON = (e) => $t(kt.isHTMLForm(e) ? new FormData(e) : e)),
        (Pn.getAdapter = gn),
        (Pn.HttpStatusCode = Tn),
        (Pn.default = Pn);
      const Ln = Pn;
      const An = function () {
        const [e, t] = (0, o.useState)(null),
          [n, r] = (0, o.useState)(null),
          a = te();
        return (0, Me.jsxs)("div", {
          className:
            "container flex justify-center items-center min-h-screen min-w-full",
          children: [
            (0, Me.jsx)(qe, {}),
            (0, Me.jsxs)("div", {
              className:
                "inner-container flex flex-col justify-center items-center gap-1.5 min-h-[520px] min-w-[400px] bg-sky-900/60 shadow-[1px_1px_10px_1px_#000000,8px_8px_0px_0px_#344454,12px_12px_10px_0px_#000000] m-auto relative sm:min-w-[400px] sm:min-h-[520px] ",
              children: [
                (0, Me.jsx)("div", {
                  className:
                    "-top-[45px] flex justify-center items-center relative mb-6",
                  children: (0, Me.jsx)("div", {
                    className:
                      " bg-sky-950/80 p-5 rounded-full shadow-[0px_0px_9px_2px_#344454] absolute",
                    children: (0, Me.jsx)(De, {
                      className:
                        "text-5xl hover:animate-[rotate_1.1s_ease-out_alternate-reverse_infinite]",
                    }),
                  }),
                }),
                (0, Me.jsx)("div", {
                  className:
                    "welcome text-center\tmt-6 mb-2 text-2xl font-bold",
                  children: (0, Me.jsxs)("h2", {
                    className: "title",
                    children: [
                      "Hello there,",
                      (0, Me.jsx)("br", {}),
                      "Please Login below!",
                    ],
                  }),
                }),
                (0, Me.jsxs)("form", {
                  className:
                    "myForm flex flex-col gap-4 justify-center items-center w-80  ",
                  autoComplete: "off",
                  onSubmit: async (t) => {
                    t.preventDefault();
                    let r = { username: e, password: n };
                    r.username = r.username.toLowerCase();
                    try {
                      const e = await Ln.post(
                        "http://127.0.0.1:5100/user/login",
                        r
                      );
                      200 === e.data.status
                        ? (localStorage.setItem("valid", !0),
                          localStorage.setItem("token", e.data.token),
                          localStorage.setItem("username", e.data.username),
                          localStorage.setItem("id", e.data.id),
                          a("/dashboard"))
                        : (localStorage.setItem("valid", !1),
                          alert("Invalid credentials"));
                    } catch (o) {
                      alert("Invalid credentials");
                    }
                  },
                  children: [
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "text",
                            id: "username",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 focus:outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Username",
                            onChange: (e) => t(e.target.value),
                          }),
                          (0, Me.jsx)(Ie, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "user-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "password",
                            id: "password",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Password",
                            onChange: (e) => r(e.target.value),
                          }),
                          (0, Me.jsx)(Be, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "pass-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className: "input-con w-full text-center",
                      children: (0, Me.jsx)("input", {
                        type: "submit",
                        value: "Login",
                        name: "login",
                        id: "loginButton",
                        className:
                          "h-11 px-3 w-full border-2 border-solid border-gray-400 bg-transparent bg-none cursor-pointer text-lg font-bold text-slate-300 shadow-[inset_0_0_0_0_#7692A7] hover:bg-transparent hover:border-white hover:text-white hover:shadow-[inset_0_0_100px_0_#7692A7] focus:bg-transparent focus:border-white focus:text-white focus:shadow-[inset_0_0_100px_0_#7692A7] active:bg-transparent active:border-white active:text-white active:shadow-[inset_0_0_100px_0_#7692A7] outline-0 hover:animate-[scale_1.1s_ease-out_alternate-reverse_infinite]",
                      }),
                    }),
                    (0, Me.jsxs)("div", {
                      className:
                        "f-r-r-con input-con flex flex-col justify-center items-center w-full gap-3",
                      children: [
                        (0, Me.jsxs)("div", {
                          className:
                            "flex gap-1 justify-center items-center mt-3 mb-2",
                          children: [
                            (0, Me.jsx)("p", { children: "----------------" }),
                            (0, Me.jsx)("span", { children: "or" }),
                            (0, Me.jsx)("p", { children: "----------------" }),
                          ],
                        }),
                        (0, Me.jsx)("div", {
                          className:
                            "f-r-con check flex flex-col justify-center items-end gap-1",
                          children: (0, Me.jsx)(Ce, {
                            to: "/signup",
                            className: "register focus:outline-0",
                            id: "regLink",
                            children: "Register Here!",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function zn() {
        const [e, t] = (0, o.useState)(""),
          [n, r] = (0, o.useState)(""),
          [a, i] = (0, o.useState)(""),
          [s, l] = (0, o.useState)(""),
          [u, c] = (0, o.useState)(""),
          [d, f] = (0, o.useState)(""),
          p = {
            firstName: e,
            lastName: n,
            username: a,
            email: s,
            password: u,
            con_password: d,
          },
          h = te();
        return (0, Me.jsxs)("div", {
          className:
            "container flex justify-center items-center min-h-screen min-w-full",
          children: [
            (0, Me.jsx)(qe, {}),
            (0, Me.jsxs)("div", {
              className:
                "inner-container flex justify-center items-center flex-col gap-1.5 bg-sky-900/60 min-h-[585px] min-w-[380px] shadow-[1px_1px_10px_1px_#000000,8px_8px_0px_0px_#344454,12px_12px_10px_0px_#000000] m-auto relative md:min-w-[420px] md:min-h-[560px]",
              children: [
                (0, Me.jsx)("div", {
                  className:
                    "top-0 flex justify-center items-center relative md:mb-10",
                  children: (0, Me.jsx)("div", {
                    className:
                      "icon bg-sky-950/80 p-5 rounded-full shadow-[0px_0px_9px_2px_#344454] absolute",
                    children: (0, Me.jsx)(De, {
                      className:
                        "text-5xl hover:animate-[rotate_1.1s_ease-out_alternate-reverse_infinite]",
                    }),
                  }),
                }),
                (0, Me.jsx)("div", {
                  className: "welcome mt-8 mb-2 md:my-3",
                  children: (0, Me.jsxs)("h2", {
                    className: "title text-center text-2xl font-bold",
                    children: [
                      "Hello there,",
                      (0, Me.jsx)("br", {}),
                      "Please Register below!",
                    ],
                  }),
                }),
                (0, Me.jsxs)("form", {
                  className:
                    "myForm flex flex-col gap-4 justify-center items-center w-72 md:grid md:grid-cols-2 md:w-[350px] md:gap-2.5",
                  autoComplete: "off",
                  onSubmit: async (e) => {
                    e.preventDefault();
                    const { password: t, con_password: n } = p;
                    if (t === n) {
                      const e = await Ln.post(
                        "http://127.0.0.1:5100/user/signup",
                        p
                      );
                      201 === e.data.status
                        ? (localStorage.setItem("valid", !0),
                          localStorage.setItem("token", e.data.token),
                          localStorage.setItem("username", e.data.username),
                          localStorage.setItem("id", e.data.id),
                          alert("Registration Successful"),
                          h("/dashboard"))
                        : alert("Registration Failed");
                    } else alert("Password and Confirm Password must be same");
                  },
                  children: [
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "text",
                            value: p.firstName,
                            id: "firstName",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 focus:outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "First Name",
                            onChange: (e) => t(e.target.value),
                            required: !0,
                          }),
                          (0, Me.jsx)(Ie, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "user-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "text",
                            value: p.lastName,
                            id: "lastName",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Last Name",
                            onChange: (e) => r(e.target.value),
                            required: !0,
                          }),
                          (0, Me.jsx)(Ie, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "user-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full md:col-span-2 flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "text",
                            value: p.username,
                            id: "username",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Username",
                            onChange: (e) => i(e.target.value),
                            required: !0,
                          }),
                          (0, Me.jsx)(Ie, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "username-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full md:col-span-2 flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "email",
                            value: p.email,
                            id: "email",
                            className:
                              "input-lg  h-11 pl-9  px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Email",
                            onChange: (e) => l(e.target.value),
                            required: !0,
                          }),
                          (0, Me.jsx)(Ue, {
                            className: "absolute top-3 left-3 ",
                            size: 20,
                            id: "email-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full md:col-span-2 flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "password",
                            value: p.password,
                            id: "password",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Password",
                            onChange: (e) => c(e.target.value),
                            required: !0,
                          }),
                          (0, Me.jsx)(Be, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "pass-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con relative w-full md:col-span-2 flex flex-row justify-center items-center",
                      children: (0, Me.jsxs)("span", {
                        className: "span-con relative w-full",
                        children: [
                          (0, Me.jsx)("input", {
                            type: "password",
                            value: p.con_password,
                            id: "con_password",
                            className:
                              "input-lg h-11 pl-9 px-3 w-full text-base border border-solid border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]",
                            placeholder: "Confirm Password",
                            onChange: (e) => f(e.target.value),
                            required: !0,
                          }),
                          (0, Me.jsx)(Be, {
                            className: "absolute top-3 left-3",
                            size: 20,
                            id: "pass-icon",
                          }),
                        ],
                      }),
                    }),
                    (0, Me.jsx)("div", {
                      className:
                        "input-con w-full text-center md:col-span-2 md:mt-2",
                      children: (0, Me.jsx)("input", {
                        type: "submit",
                        value: "Register",
                        name: "register",
                        id: "register",
                        className:
                          "h-11 px-3 w-full border-2 border-solid border-gray-400 bg-transparent bg-none cursor-pointer text-lg font-bold text-slate-300 shadow-[inset_0_0_0_0_#7692A7] hover:bg-transparent hover:border-white hover:text-white hover:shadow-[inset_0_0_100px_0_#7692A7] focus:bg-transparent focus:border-white focus:text-white focus:shadow-[inset_0_0_100px_0_#7692A7] active:bg-transparent active:border-white active:text-white active:shadow-[inset_0_0_100px_0_#7692A7] outline-0 hover:animate-[scale_1.1s_ease-out_alternate-reverse_infinite]",
                      }),
                    }),
                    (0, Me.jsxs)("div", {
                      className:
                        "f-r-con flex flex-col justify-center items-center col-span-2 gap-2 pb-5",
                      children: [
                        (0, Me.jsxs)("div", {
                          className:
                            "flex gap-1 justify-center items-center mt-2 mb-1",
                          children: [
                            (0, Me.jsx)("p", { children: "----------------" }),
                            (0, Me.jsx)("span", { children: "or" }),
                            (0, Me.jsx)("p", { children: "----------------" }),
                          ],
                        }),
                        (0, Me.jsx)(Ce, {
                          to: "/",
                          className: "register focus:outline-0 text-center",
                          id: "logLink",
                          children: "Already Have an Account!",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Fn() {
        return (0, Me.jsx)("div", {
          children: (0, Me.jsxs)("div", {
            className:
              "container mx-auto min-h-screen min-w-full flex justify-center items-center",
            children: [
              (0, Me.jsx)(qe, {}),
              (0, Me.jsxs)("div", {
                className:
                  " flex flex-col justify-center items-center text-center text-4xl bg-white/40 z-20 border-4 rounded-xl border-slate-700 py-24 px-56",
                children: [
                  (0, Me.jsx)("h1", {
                    className: "text-[#282828] ",
                    children: "404 Error",
                  }),
                  (0, Me.jsx)("h3", {
                    className: "text-[#282828] ",
                    children: "Page not found",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Dn() {
        const [e, t] = (0, o.useState)([]),
          [n, r] = (0, o.useState)([]);
        (0, o.useEffect)(() => {
          a(), i();
        }, []);
        const a = async () => {
            try {
              const e = await Ln.get("http://127.0.0.1:5100/group/groups");
              t(e.data);
            } catch (e) {
              console.error("Error loading groups:", e);
            }
          },
          i = async () => {
            try {
              const e = await Ln.get("http://127.0.0.1:5100/user/users");
              r(e.data.data);
            } catch (e) {
              console.error("Error loading users:", e);
            }
          },
          s = te();
        return (0, Me.jsxs)("div", {
          children: [
            (0, Me.jsx)("div", {
              className:
                "flex items-start justify-start pl-5 py-4 text-gray-500 bg-[#282828] ",
              children: (0, Me.jsx)("h1", {
                className: "text-4xl font-bold",
                children: "Dashboard",
              }),
            }),
            (0, Me.jsxs)("div", {
              className: "container mx-auto min-h-screen min-w-full",
              children: [
                (0, Me.jsx)(qe, {}),
                (0, Me.jsx)("div", {
                  className:
                    "flex items-center justify-center min-h-screen min-w-full px-5 ",
                  children: (0, Me.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center relative  p-4 my-10 bg-white rounded-lg  shadow-[0px_0px_25px_10px_#282828] sm:w-[90%] md:w-full lg:w-2/3 ",
                    children: [
                      (0, Me.jsx)("div", {
                        className:
                          "flex flex-col justify-center items-center my-3 ",
                        children: (0, Me.jsx)("h2", {
                          className: "mb-2 text-2xl font-bold text-gray-700",
                          children: "Welcome to Dashboard",
                        }),
                      }),
                      (0, Me.jsxs)("div", {
                        className:
                          "flex flex-row gap-3 lg:px-12 lg:absolute lg:top-6 lg:right-12  xl:px-0 xl:top-6 xl:right-6",
                        children: [
                          (0, Me.jsx)(Ce, {
                            to: "/group",
                            children: (0, Me.jsx)("button", {
                              className:
                                "text-slate-100 bg-sky-700 rounded-xl px-4 py-2 hover:bg-gray-700/50  text-xl ",
                              children: "Add Group",
                            }),
                          }),
                          (0, Me.jsx)(Ce, {
                            to: "/",
                            children: (0, Me.jsx)("button", {
                              className:
                                "text-slate-700 bg-red-700/30 rounded-xl px-4 py-2  hover:bg-red-700/50 text-xl ",
                              onClick: () => {
                                localStorage.clear(), s("/");
                              },
                              children: "Log-out",
                            }),
                          }),
                        ],
                      }),
                      (0, Me.jsxs)("div", {
                        className:
                          "flex w-full flex-row justify-center items-center gap-8",
                        children: [
                          (0, Me.jsxs)("div", {
                            className:
                              "w-6/12 border-r-2 pr-6 max-h-[450px] overflow-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:w-5/12",
                            children: [
                              n.map((e) =>
                                (0, Me.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col justify-between items-left text-slate-700 py-2 gap-2 rounded-none sm:w-full",
                                    children: (0, Me.jsx)("div", {
                                      className:
                                        " bg-gray-700/30 rounded-xl divide-y",
                                      children: (0, Me.jsxs)("div", {
                                        className:
                                          "flex flex-row gap-16 px-3 py-2",
                                        children: [
                                          (0, Me.jsx)("h4", {
                                            children: "User Name:",
                                          }),
                                          (0, Me.jsx)("p", {
                                            children: e.username,
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  e._id
                                )
                              ),
                              0 === n.length &&
                                (0, Me.jsx)("div", {
                                  className:
                                    "flex flex-col justify-center items-center py-3",
                                  children: (0, Me.jsx)("div", {
                                    className:
                                      "flex-1 justify-center items-center py-32 pl-16 pr-8 bg-slate-600/80 rounded-2xl shadow-lg shadow-black/70",
                                    children: (0, Me.jsx)("h4", {
                                      className: "text-xl text-white -ml-9",
                                      children: "No user available",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          (0, Me.jsxs)("div", {
                            className:
                              "w-full min-h-[570px] max-h-[570px] overflow-auto overscroll-contain pt-48 sm:flex sm:flex-col sm:justify-center sm:items-center",
                            children: [
                              e.map((e) =>
                                (0, Me.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col justify-between items-left text-slate-700 py-4 px-2 gap-2 border-b-2 border-black rounded-none pb-4 sm:w-full",
                                    children: (0, Me.jsxs)("div", {
                                      className:
                                        " bg-gray-700/30 rounded-xl divide-y",
                                      children: [
                                        (0, Me.jsxs)("div", {
                                          className:
                                            "flex flex-row  gap-16  px-3 py-2",
                                          children: [
                                            (0, Me.jsx)("h4", {
                                              children: "Group Name:",
                                            }),
                                            (0, Me.jsx)("p", {
                                              children: e.name,
                                            }),
                                          ],
                                        }),
                                        (0, Me.jsxs)("div", {
                                          className:
                                            "flex flex-row gap-16 px-3 py-2",
                                          children: [
                                            (0, Me.jsx)("h4", {
                                              children: "Members:",
                                            }),
                                            (0, Me.jsxs)("p", {
                                              children: [
                                                e.members.length,
                                                " member/s",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, Me.jsxs)("div", {
                                          className:
                                            "flex flex-row justify-center items-center px-2 py-2 sm:items-right sm:justify-end",
                                          children: [
                                            (0, Me.jsx)("div", {
                                              className:
                                                "flex flex-row space-x-5 gap-16 px-3 py-2",
                                              children: (0, Me.jsx)(Ce, {
                                                to: "/chat/".concat(e._id),
                                                children: (0, Me.jsx)(
                                                  "button",
                                                  {
                                                    className:
                                                      "bg-gray-700/30 rounded-xl px-4 py-2 hover:bg-gray-700/50 sm:px-12",
                                                    onClick: () =>
                                                      (async (e) => {
                                                        s("/chat/".concat(e));
                                                      })(e._id),
                                                    children: "Join",
                                                  }
                                                ),
                                              }),
                                            }),
                                            (0, Me.jsx)("div", {
                                              className:
                                                "flex flex-row space-x-5 gap-16 px-3 py-2",
                                              children: (0, Me.jsx)("button", {
                                                type: "submit",
                                                onClick: () =>
                                                  (async (e) => {
                                                    try {
                                                      await Ln.delete(
                                                        "http://127.0.0.1:5100/group/".concat(
                                                          e
                                                        )
                                                      ),
                                                        a();
                                                    } catch (t) {
                                                      console.error(
                                                        "Error deleting group:",
                                                        t
                                                      );
                                                    }
                                                  })(e._id),
                                                className:
                                                  "bg-red-500/70 rounded-xl px-4 py-2 hover:bg-red-700 hover:text-white sm:px-12",
                                                children: "Delete",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  e._id
                                )
                              ),
                              0 === e.length &&
                                (0, Me.jsx)("div", {
                                  className:
                                    "flex flex-col justify-center items-center  py-3",
                                  children: (0, Me.jsx)("div", {
                                    className:
                                      "flex-1 justify-center items-center py-28 px-32 bg-slate-600/80 rounded-2xl shadow-lg shadow-black/70",
                                    children: (0, Me.jsx)("h4", {
                                      className: "text-xl text-white",
                                      children: "No group available",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function Un(e) {
        return Ae({
          tag: "svg",
          attr: { viewBox: "0 0 15 15", fill: "none" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z",
                fill: "currentColor",
              },
            },
          ],
        })(e);
      }
      function Bn() {
        const [e, t] = (0, o.useState)({ name: "", member: [] }),
          n = te();
        return (0, Me.jsxs)("div", {
          children: [
            (0, Me.jsx)("div", {
              className:
                "flex flex-col items-start justify-start pl-5 py-4  text-gray-500 bg-[#282828] absolute w-full z-10",
              children: (0, Me.jsx)("h1", {
                className: "text-4xl font-bold",
                children: "Add Group",
              }),
            }),
            (0, Me.jsxs)("div", {
              className: "container mx-auto min-h-screen min-w-full",
              children: [
                (0, Me.jsx)(qe, {}),
                (0, Me.jsx)("div", {
                  className:
                    "flex items-center justify-center min-h-screen min-w-fit px-8",
                  children: (0, Me.jsxs)("div", {
                    className:
                      "flex flex-col relative justify-center items-center w-full p-4 bg-white rounded-lg md:w-2/3 lg:w-1/3 z-10 mt-16 shadow-[0px_0px_25px_10px_#282828]",
                    children: [
                      (0, Me.jsx)(Ce, {
                        to: "/dashboard",
                        className: "absolute top-2 left-2 hover:cursor-pointer",
                        children: (0, Me.jsx)(Fe, {
                          className: "text-4xl text-black",
                        }),
                      }),
                      (0, Me.jsxs)("div", {
                        className: "flex flex-col justify-center items-center ",
                        children: [
                          (0, Me.jsx)("h2", {
                            className: "mb-2 text-xl font-bold text-gray-700",
                            children: "Add Group",
                          }),
                          (0, Me.jsx)("p", {
                            className: "text-sm text-gray-400",
                            children:
                              "Please fill the form to add a new group.",
                          }),
                        ],
                      }),
                      (0, Me.jsx)("div", {
                        className: "flex flex-col mt-4 w-80 justify-center ",
                        children: (0, Me.jsxs)("form", {
                          onSubmit: async (t) => {
                            t.preventDefault();
                            const r = localStorage.getItem("id");
                            try {
                              const t = await Ln.post(
                                "http://127.0.0.1:5100/group/create",
                                e
                              );
                              if ((console.log("nnnn", t), t.data._id)) {
                                const e = t.data._id;
                                await Ln.post(
                                  "http://127.0.0.1:5100/group/".concat(
                                    e,
                                    "/members"
                                  ),
                                  { memberId: r }
                                ),
                                  n("/dashboard");
                              }
                            } catch (o) {
                              alert(o.response.data.error), console.log(o);
                            }
                          },
                          autoComplete: "false",
                          className: " flex flex-col",
                          children: [
                            (0, Me.jsxs)("div", {
                              className: "flex flex-col relative ",
                              children: [
                                (0, Me.jsx)("label", {
                                  className: "text-gray-400 mb-1",
                                  children: "Group name",
                                }),
                                (0, Me.jsxs)("div", {
                                  className: "flex relative mx-2",
                                  children: [
                                    (0, Me.jsx)("span", {
                                      className:
                                        "inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400 scale-[1.2]",
                                      children: (0, Me.jsx)(Un, {}),
                                    }),
                                    (0, Me.jsx)("input", {
                                      type: "text",
                                      name: "name",
                                      value: e.name,
                                      onChange: (n) => {
                                        const { name: r, value: o } = n.target;
                                        var a;
                                        t({
                                          ...e,
                                          [r]:
                                            ((a = o),
                                            a.charAt(0).toUpperCase() +
                                              a.slice(1)),
                                        });
                                      },
                                      className:
                                        "w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline",
                                      placeholder: "Group name",
                                      required: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Me.jsx)("div", {
                              className:
                                "flex flex-col mt-6 w-52  justify-self-center self-center ",
                              children: (0, Me.jsx)("button", {
                                type: "submit",
                                className:
                                  " place-self-center w-full h-12 px-6 py-2 font-medium tracking-wide text-white capitalize duration-200 transform bg-sky-600 rounded-full hover:bg-sky-500 focus:outline-none focus:bg-sky-500 hover:scale-[1.095] transition-all duration-800 ease-linear ",
                                children: "Add Group",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      const In = Object.create(null);
      (In.open = "0"),
        (In.close = "1"),
        (In.ping = "2"),
        (In.pong = "3"),
        (In.message = "4"),
        (In.upgrade = "5"),
        (In.noop = "6");
      const Mn = Object.create(null);
      Object.keys(In).forEach((e) => {
        Mn[In[e]] = e;
      });
      const qn = { type: "error", data: "parser error" },
        Hn =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        Vn = "function" === typeof ArrayBuffer,
        Wn = (e) =>
          "function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
        $n = (e, t, n) => {
          let { type: r, data: o } = e;
          return Hn && o instanceof Blob
            ? t
              ? n(o)
              : Qn(o, n)
            : Vn && (o instanceof ArrayBuffer || Wn(o))
            ? t
              ? n(o)
              : Qn(new Blob([o]), n)
            : n(In[r] + (o || ""));
        },
        Qn = (e, t) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const e = n.result.split(",")[1];
              t("b" + (e || ""));
            }),
            n.readAsDataURL(e)
          );
        };
      function Kn(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      let Jn;
      const Yn =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Xn = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256);
      for (let n = 0; n < 64; n++) Xn[Yn.charCodeAt(n)] = n;
      const Gn = "function" === typeof ArrayBuffer,
        Zn = (e, t) => {
          if ("string" !== typeof e) return { type: "message", data: tr(e, t) };
          const n = e.charAt(0);
          if ("b" === n)
            return { type: "message", data: er(e.substring(1), t) };
          return Mn[n]
            ? e.length > 1
              ? { type: Mn[n], data: e.substring(1) }
              : { type: Mn[n] }
            : qn;
        },
        er = (e, t) => {
          if (Gn) {
            const n = ((e) => {
              let t,
                n,
                r,
                o,
                a,
                i = 0.75 * e.length,
                s = e.length,
                l = 0;
              "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
              const u = new ArrayBuffer(i),
                c = new Uint8Array(u);
              for (t = 0; t < s; t += 4)
                (n = Xn[e.charCodeAt(t)]),
                  (r = Xn[e.charCodeAt(t + 1)]),
                  (o = Xn[e.charCodeAt(t + 2)]),
                  (a = Xn[e.charCodeAt(t + 3)]),
                  (c[l++] = (n << 2) | (r >> 4)),
                  (c[l++] = ((15 & r) << 4) | (o >> 2)),
                  (c[l++] = ((3 & o) << 6) | (63 & a));
              return u;
            })(e);
            return tr(n, t);
          }
          return { base64: !0, data: e };
        },
        tr = (e, t) =>
          "blob" === t
            ? e instanceof Blob
              ? e
              : new Blob([e])
            : e instanceof ArrayBuffer
            ? e
            : e.buffer,
        nr = String.fromCharCode(30);
      function rr() {
        return new TransformStream({
          transform(e, t) {
            !(function (e, t) {
              Hn && e.data instanceof Blob
                ? e.data.arrayBuffer().then(Kn).then(t)
                : Vn && (e.data instanceof ArrayBuffer || Wn(e.data))
                ? t(Kn(e.data))
                : $n(e, !1, (e) => {
                    Jn || (Jn = new TextEncoder()), t(Jn.encode(e));
                  });
            })(e, (n) => {
              const r = n.length;
              let o;
              if (r < 126)
                (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r);
              else if (r < 65536) {
                o = new Uint8Array(3);
                const e = new DataView(o.buffer);
                e.setUint8(0, 126), e.setUint16(1, r);
              } else {
                o = new Uint8Array(9);
                const e = new DataView(o.buffer);
                e.setUint8(0, 127), e.setBigUint64(1, BigInt(r));
              }
              e.data && "string" !== typeof e.data && (o[0] |= 128),
                t.enqueue(o),
                t.enqueue(n);
            });
          },
        });
      }
      let or;
      function ar(e) {
        return e.reduce((e, t) => e + t.length, 0);
      }
      function ir(e, t) {
        if (e[0].length === t) return e.shift();
        const n = new Uint8Array(t);
        let r = 0;
        for (let o = 0; o < t; o++)
          (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
      }
      function sr(e) {
        if (e)
          return (function (e) {
            for (var t in sr.prototype) e[t] = sr.prototype[t];
            return e;
          })(e);
      }
      (sr.prototype.on = sr.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (sr.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (sr.prototype.off =
          sr.prototype.removeListener =
          sr.prototype.removeAllListeners =
          sr.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + e];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === t || n.fn === t) {
                  r.splice(o, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (sr.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (sr.prototype.emitReserved = sr.prototype.emit),
        (sr.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (sr.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      const lr =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
      function ur(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(
          (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
          {}
        );
      }
      const cr = lr.setTimeout,
        dr = lr.clearTimeout;
      function fr(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = cr.bind(lr)), (e.clearTimeoutFn = dr.bind(lr)))
          : ((e.setTimeoutFn = lr.setTimeout.bind(lr)),
            (e.clearTimeoutFn = lr.clearTimeout.bind(lr)));
      }
      class pr extends Error {
        constructor(e, t, n) {
          super(e),
            (this.description = t),
            (this.context = n),
            (this.type = "TransportError");
        }
      }
      class hr extends sr {
        constructor(e) {
          super(),
            (this.writable = !1),
            fr(this, e),
            (this.opts = e),
            (this.query = e.query),
            (this.socket = e.socket);
        }
        onError(e, t, n) {
          return super.emitReserved("error", new pr(e, t, n)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(e) {
          "open" === this.readyState && this.write(e);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(e) {
          const t = Zn(e, this.socket.binaryType);
          this.onPacket(t);
        }
        onPacket(e) {
          super.emitReserved("packet", e);
        }
        onClose(e) {
          (this.readyState = "closed"), super.emitReserved("close", e);
        }
        pause(e) {}
        createUri(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            e +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(t)
          );
        }
        _hostname() {
          const e = this.opts.hostname;
          return -1 === e.indexOf(":") ? e : "[" + e + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(e) {
          const t = (function (e) {
            let t = "";
            for (let n in e)
              e.hasOwnProperty(n) &&
                (t.length && (t += "&"),
                (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
            return t;
          })(e);
          return t.length ? "?" + t : "";
        }
      }
      const mr =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        gr = 64,
        yr = {};
      let vr,
        br = 0,
        wr = 0;
      function xr(e) {
        let t = "";
        do {
          (t = mr[e % gr] + t), (e = Math.floor(e / gr));
        } while (e > 0);
        return t;
      }
      function kr() {
        const e = xr(+new Date());
        return e !== vr ? ((br = 0), (vr = e)) : e + "." + xr(br++);
      }
      for (; wr < gr; wr++) yr[mr[wr]] = wr;
      let Sr = !1;
      try {
        Sr =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (ho) {}
      const _r = Sr;
      function Er(e) {
        const t = e.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!t || _r))
            return new XMLHttpRequest();
        } catch (po) {}
        if (!t)
          try {
            return new lr[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (po) {}
      }
      function Cr() {}
      const Nr = null != new Er({ xdomain: !1 }).responseType;
      class jr extends sr {
        constructor(e, t) {
          super(),
            fr(this, t),
            (this.opts = t),
            (this.method = t.method || "GET"),
            (this.uri = e),
            (this.data = void 0 !== t.data ? t.data : null),
            this.create();
        }
        create() {
          var e;
          const t = ur(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          t.xdomain = !!this.opts.xd;
          const n = (this.xhr = new Er(t));
          try {
            n.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) &&
                    n.setRequestHeader(e, this.opts.extraHeaders[e]);
              }
            } catch (po) {}
            if ("POST" === this.method)
              try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (po) {}
            try {
              n.setRequestHeader("Accept", "*/*");
            } catch (po) {}
            null === (e = this.opts.cookieJar) ||
              void 0 === e ||
              e.addCookies(n),
              "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (n.timeout = this.opts.requestTimeout),
              (n.onreadystatechange = () => {
                var e;
                3 === n.readyState &&
                  (null === (e = this.opts.cookieJar) ||
                    void 0 === e ||
                    e.parseCookies(n)),
                  4 === n.readyState &&
                    (200 === n.status || 1223 === n.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" === typeof n.status ? n.status : 0
                          );
                        }, 0));
              }),
              n.send(this.data);
          } catch (po) {
            return void this.setTimeoutFn(() => {
              this.onError(po);
            }, 0);
          }
          "undefined" !== typeof document &&
            ((this.index = jr.requestsCount++),
            (jr.requests[this.index] = this));
        }
        onError(e) {
          this.emitReserved("error", e, this.xhr), this.cleanup(!0);
        }
        cleanup(e) {
          if ("undefined" !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = Cr), e))
              try {
                this.xhr.abort();
              } catch (po) {}
            "undefined" !== typeof document && delete jr.requests[this.index],
              (this.xhr = null);
          }
        }
        onLoad() {
          const e = this.xhr.responseText;
          null !== e &&
            (this.emitReserved("data", e),
            this.emitReserved("success"),
            this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      }
      if (
        ((jr.requestsCount = 0),
        (jr.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", Or);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in lr ? "pagehide" : "unload", Or, !1);
        }
      function Or() {
        for (let e in jr.requests)
          jr.requests.hasOwnProperty(e) && jr.requests[e].abort();
      }
      const Rr =
          "function" === typeof Promise && "function" === typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0),
        Tr = lr.WebSocket || lr.MozWebSocket,
        Pr =
          "undefined" !== typeof navigator &&
          "string" === typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase();
      const Lr = {
          websocket: class extends hr {
            constructor(e) {
              super(e), (this.supportsBinary = !e.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const e = this.uri(),
                t = this.opts.protocols,
                n = Pr
                  ? {}
                  : ur(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
              try {
                this.ws = Pr ? new Tr(e, t, n) : t ? new Tr(e, t) : new Tr(e);
              } catch (ho) {
                return this.emitReserved("error", ho);
              }
              (this.ws.binaryType = this.socket.binaryType),
                this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (e) =>
                  this.onClose({
                    description: "websocket connection closed",
                    context: e,
                  })),
                (this.ws.onmessage = (e) => this.onData(e.data)),
                (this.ws.onerror = (e) => this.onError("websocket error", e));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1;
                $n(n, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e);
                  } catch (po) {}
                  r &&
                    Rr(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              "undefined" !== typeof this.ws &&
                (this.ws.close(), (this.ws = null));
            }
            uri() {
              const e = this.opts.secure ? "wss" : "ws",
                t = this.query || {};
              return (
                this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = kr()),
                this.supportsBinary || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            check() {
              return !!Tr;
            }
          },
          webtransport: class extends hr {
            get name() {
              return "webtransport";
            }
            doOpen() {
              "function" === typeof WebTransport &&
                ((this.transport = new WebTransport(
                  this.createUri("https"),
                  this.opts.transportOptions[this.name]
                )),
                this.transport.closed
                  .then(() => {
                    this.onClose();
                  })
                  .catch((e) => {
                    this.onError("webtransport error", e);
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((e) => {
                    const t = (function (e, t) {
                        or || (or = new TextDecoder());
                        const n = [];
                        let r = 0,
                          o = -1,
                          a = !1;
                        return new TransformStream({
                          transform(i, s) {
                            for (n.push(i); ; ) {
                              if (0 === r) {
                                if (ar(n) < 1) break;
                                const e = ir(n, 1);
                                (a = 128 === (128 & e[0])),
                                  (o = 127 & e[0]),
                                  (r = o < 126 ? 3 : 126 === o ? 1 : 2);
                              } else if (1 === r) {
                                if (ar(n) < 2) break;
                                const e = ir(n, 2);
                                (o = new DataView(
                                  e.buffer,
                                  e.byteOffset,
                                  e.length
                                ).getUint16(0)),
                                  (r = 3);
                              } else if (2 === r) {
                                if (ar(n) < 8) break;
                                const e = ir(n, 8),
                                  t = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length
                                  ),
                                  a = t.getUint32(0);
                                if (a > Math.pow(2, 21) - 1) {
                                  s.enqueue(qn);
                                  break;
                                }
                                (o = a * Math.pow(2, 32) + t.getUint32(4)),
                                  (r = 3);
                              } else {
                                if (ar(n) < o) break;
                                const e = ir(n, o);
                                s.enqueue(Zn(a ? e : or.decode(e), t)), (r = 0);
                              }
                              if (0 === o || o > e) {
                                s.enqueue(qn);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = e.readable.pipeThrough(t).getReader(),
                      r = rr();
                    r.readable.pipeTo(e.writable),
                      (this.writer = r.writable.getWriter());
                    const o = () => {
                      n.read()
                        .then((e) => {
                          let { done: t, value: n } = e;
                          t || (this.onPacket(n), o());
                        })
                        .catch((e) => {});
                    };
                    o();
                    const a = { type: "open" };
                    this.query.sid &&
                      (a.data = '{"sid":"'.concat(this.query.sid, '"}')),
                      this.writer.write(a).then(() => this.onOpen());
                  });
                }));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1;
                this.writer.write(n).then(() => {
                  r &&
                    Rr(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              var e;
              null === (e = this.transport) || void 0 === e || e.close();
            }
          },
          polling: class extends hr {
            constructor(e) {
              if (
                (super(e), (this.polling = !1), "undefined" !== typeof location)
              ) {
                const t = "https:" === location.protocol;
                let n = location.port;
                n || (n = t ? "443" : "80"),
                  (this.xd =
                    ("undefined" !== typeof location &&
                      e.hostname !== location.hostname) ||
                    n !== e.port);
              }
              const t = e && e.forceBase64;
              (this.supportsBinary = Nr && !t),
                this.opts.withCredentials && (this.cookieJar = void 0);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(e) {
              this.readyState = "pausing";
              const t = () => {
                (this.readyState = "paused"), e();
              };
              if (this.polling || !this.writable) {
                let e = 0;
                this.polling &&
                  (e++,
                  this.once("pollComplete", function () {
                    --e || t();
                  })),
                  this.writable ||
                    (e++,
                    this.once("drain", function () {
                      --e || t();
                    }));
              } else t();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(e) {
              ((e, t) => {
                const n = e.split(nr),
                  r = [];
                for (let o = 0; o < n.length; o++) {
                  const e = Zn(n[o], t);
                  if ((r.push(e), "error" === e.type)) break;
                }
                return r;
              })(e, this.socket.binaryType).forEach((e) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === e.type &&
                    this.onOpen(),
                  "close" === e.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(e);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved("pollComplete"),
                  "open" === this.readyState && this.poll());
            }
            doClose() {
              const e = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? e() : this.once("open", e);
            }
            write(e) {
              (this.writable = !1),
                ((e, t) => {
                  const n = e.length,
                    r = new Array(n);
                  let o = 0;
                  e.forEach((e, a) => {
                    $n(e, !1, (e) => {
                      (r[a] = e), ++o === n && t(r.join(nr));
                    });
                  });
                })(e, (e) => {
                  this.doWrite(e, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              const e = this.opts.secure ? "https" : "http",
                t = this.query || {};
              return (
                !1 !== this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = kr()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            request() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                Object.assign(
                  e,
                  { xd: this.xd, cookieJar: this.cookieJar },
                  this.opts
                ),
                new jr(this.uri(), e)
              );
            }
            doWrite(e, t) {
              const n = this.request({ method: "POST", data: e });
              n.on("success", t),
                n.on("error", (e, t) => {
                  this.onError("xhr post error", e, t);
                });
            }
            doPoll() {
              const e = this.request();
              e.on("data", this.onData.bind(this)),
                e.on("error", (e, t) => {
                  this.onError("xhr poll error", e, t);
                }),
                (this.pollXhr = e);
            }
          },
        },
        Ar =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        zr = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function Fr(e) {
        if (e.length > 2e3) throw "URI too long";
        const t = e,
          n = e.indexOf("["),
          r = e.indexOf("]");
        -1 != n &&
          -1 != r &&
          (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
        let o = Ar.exec(e || ""),
          a = {},
          i = 14;
        for (; i--; ) a[zr[i]] = o[i] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((a.source = t),
            (a.host = a.host
              .substring(1, a.host.length - 1)
              .replace(/;/g, ":")),
            (a.authority = a.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (a.ipv6uri = !0)),
          (a.pathNames = (function (e, t) {
            const n = /\/{2,9}/g,
              r = t.replace(n, "/").split("/");
            ("/" != t.slice(0, 1) && 0 !== t.length) || r.splice(0, 1);
            "/" == t.slice(-1) && r.splice(r.length - 1, 1);
            return r;
          })(0, a.path)),
          (a.queryKey = (function (e, t) {
            const n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r);
              }),
              n
            );
          })(0, a.query)),
          a
        );
      }
      class Dr extends sr {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            e && "object" === typeof e && ((t = e), (e = null)),
            e
              ? ((e = Fr(e)),
                (t.hostname = e.host),
                (t.secure = "https" === e.protocol || "wss" === e.protocol),
                (t.port = e.port),
                e.query && (t.query = e.query))
              : t.host && (t.hostname = Fr(t.host).host),
            fr(this, t),
            (this.secure =
              null != t.secure
                ? t.secure
                : "undefined" !== typeof location &&
                  "https:" === location.protocol),
            t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
            (this.hostname =
              t.hostname ||
              ("undefined" !== typeof location
                ? location.hostname
                : "127.0.0.1")),
            (this.port =
              t.port ||
              ("undefined" !== typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = t.transports || [
              "polling",
              "websocket",
              "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              t
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" === typeof this.opts.query &&
              (this.opts.query = (function (e) {
                let t = {},
                  n = e.split("&");
                for (let r = 0, o = n.length; r < o; r++) {
                  let e = n[r].split("=");
                  t[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
                }
                return t;
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" === typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                )),
              "127.0.0.1" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(e) {
          const t = Object.assign({}, this.opts.query);
          (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
          const n = Object.assign(
            {},
            this.opts,
            {
              query: t,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[e]
          );
          return new Lr[e](n);
        }
        open() {
          let e;
          if (
            this.opts.rememberUpgrade &&
            Dr.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            e = "websocket";
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (po) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }
        setTransport(e) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = e),
            e
              .on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (e) => this.onClose("transport close", e));
        }
        probe(e) {
          let t = this.createTransport(e),
            n = !1;
          Dr.priorWebsocketSuccess = !1;
          const r = () => {
            n ||
              (t.send([{ type: "ping", data: "probe" }]),
              t.once("packet", (e) => {
                if (!n)
                  if ("pong" === e.type && "probe" === e.data) {
                    if (
                      ((this.upgrading = !0),
                      this.emitReserved("upgrading", t),
                      !t)
                    )
                      return;
                    (Dr.priorWebsocketSuccess = "websocket" === t.name),
                      this.transport.pause(() => {
                        n ||
                          ("closed" !== this.readyState &&
                            (u(),
                            this.setTransport(t),
                            t.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", t),
                            (t = null),
                            (this.upgrading = !1),
                            this.flush()));
                      });
                  } else {
                    const e = new Error("probe error");
                    (e.transport = t.name),
                      this.emitReserved("upgradeError", e);
                  }
              }));
          };
          function o() {
            n || ((n = !0), u(), t.close(), (t = null));
          }
          const a = (e) => {
            const n = new Error("probe error: " + e);
            (n.transport = t.name), o(), this.emitReserved("upgradeError", n);
          };
          function i() {
            a("transport closed");
          }
          function s() {
            a("socket closed");
          }
          function l(e) {
            t && e.name !== t.name && o();
          }
          const u = () => {
            t.removeListener("open", r),
              t.removeListener("error", a),
              t.removeListener("close", i),
              this.off("close", s),
              this.off("upgrading", l);
          };
          t.once("open", r),
            t.once("error", a),
            t.once("close", i),
            this.once("close", s),
            this.once("upgrading", l),
            -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e
              ? this.setTimeoutFn(() => {
                  n || t.open();
                }, 200)
              : t.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (Dr.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let e = 0;
            const t = this.upgrades.length;
            for (; e < t; e++) this.probe(this.upgrades[e]);
          }
        }
        onPacket(e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", e),
              this.emitReserved("heartbeat"),
              this.resetPingTimeout(),
              e.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "ping":
                this.sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong");
                break;
              case "error":
                const t = new Error("server error");
                (t.code = e.data), this.onError(t);
                break;
              case "message":
                this.emitReserved("data", e.data),
                  this.emitReserved("message", e.data);
            }
        }
        onHandshake(e) {
          this.emitReserved("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            (this.maxPayload = e.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const e = this.getWritablePackets();
            this.transport.send(e),
              (this.prevBufferLen = e.length),
              this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (
            !(
              this.maxPayload &&
              "polling" === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer;
          let e = 1;
          for (let n = 0; n < this.writeBuffer.length; n++) {
            const r = this.writeBuffer[n].data;
            if (
              (r &&
                (e +=
                  "string" === typeof (t = r)
                    ? (function (e) {
                        let t = 0,
                          n = 0;
                        for (let r = 0, o = e.length; r < o; r++)
                          (t = e.charCodeAt(r)),
                            t < 128
                              ? (n += 1)
                              : t < 2048
                              ? (n += 2)
                              : t < 55296 || t >= 57344
                              ? (n += 3)
                              : (r++, (n += 4));
                        return n;
                      })(t)
                    : Math.ceil(1.33 * (t.byteLength || t.size))),
              n > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, n);
            e += 2;
          }
          var t;
          return this.writeBuffer;
        }
        write(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        send(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        sendPacket(e, t, n, r) {
          if (
            ("function" === typeof t && ((r = t), (t = void 0)),
            "function" === typeof n && ((r = n), (n = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (n = n || {}).compress = !1 !== n.compress;
          const o = { type: e, data: t, options: n };
          this.emitReserved("packetCreate", o),
            this.writeBuffer.push(o),
            r && this.once("flush", r),
            this.flush();
        }
        close() {
          const e = () => {
              this.onClose("forced close"), this.transport.close();
            },
            t = () => {
              this.off("upgrade", t), this.off("upgradeError", t), e();
            },
            n = () => {
              this.once("upgrade", t), this.once("upgradeError", t);
            };
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? n() : e();
                  })
                : this.upgrading
                ? n()
                : e()),
            this
          );
        }
        onError(e) {
          (Dr.priorWebsocketSuccess = !1),
            this.emitReserved("error", e),
            this.onClose("transport error", e);
        }
        onClose(e, t) {
          ("opening" !== this.readyState &&
            "open" !== this.readyState &&
            "closing" !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" === typeof removeEventListener &&
              (removeEventListener(
                "beforeunload",
                this.beforeunloadEventListener,
                !1
              ),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", e, t),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(e) {
          const t = [];
          let n = 0;
          const r = e.length;
          for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
          return t;
        }
      }
      Dr.protocol = 4;
      Dr.protocol;
      const Ur = "function" === typeof ArrayBuffer,
        Br = (e) =>
          "function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
        Ir = Object.prototype.toString,
        Mr =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" === Ir.call(Blob)),
        qr =
          "function" === typeof File ||
          ("undefined" !== typeof File &&
            "[object FileConstructor]" === Ir.call(File));
      function Hr(e) {
        return (
          (Ur && (e instanceof ArrayBuffer || Br(e))) ||
          (Mr && e instanceof Blob) ||
          (qr && e instanceof File)
        );
      }
      function Vr(e, t) {
        if (!e || "object" !== typeof e) return !1;
        if (Array.isArray(e)) {
          for (let t = 0, n = e.length; t < n; t++) if (Vr(e[t])) return !0;
          return !1;
        }
        if (Hr(e)) return !0;
        if (
          e.toJSON &&
          "function" === typeof e.toJSON &&
          1 === arguments.length
        )
          return Vr(e.toJSON(), !0);
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && Vr(e[n])) return !0;
        return !1;
      }
      function Wr(e) {
        const t = [],
          n = e.data,
          r = e;
        return (
          (r.data = $r(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        );
      }
      function $r(e, t) {
        if (!e) return e;
        if (Hr(e)) {
          const n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          const n = new Array(e.length);
          for (let r = 0; r < e.length; r++) n[r] = $r(e[r], t);
          return n;
        }
        if ("object" === typeof e && !(e instanceof Date)) {
          const n = {};
          for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = $r(e[r], t));
          return n;
        }
        return e;
      }
      function Qr(e, t) {
        return (e.data = Kr(e.data, t)), delete e.attachments, e;
      }
      function Kr(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" === typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (let n = 0; n < e.length; n++) e[n] = Kr(e[n], t);
        else if ("object" === typeof e)
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Kr(e[n], t));
        return e;
      }
      const Jr = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        Yr = 5;
      var Xr;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(Xr || (Xr = {}));
      class Gr {
        constructor(e) {
          this.replacer = e;
        }
        encode(e) {
          return (e.type !== Xr.EVENT && e.type !== Xr.ACK) || !Vr(e)
            ? [this.encodeAsString(e)]
            : this.encodeAsBinary({
                type: e.type === Xr.EVENT ? Xr.BINARY_EVENT : Xr.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id,
              });
        }
        encodeAsString(e) {
          let t = "" + e.type;
          return (
            (e.type !== Xr.BINARY_EVENT && e.type !== Xr.BINARY_ACK) ||
              (t += e.attachments + "-"),
            e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
            null != e.id && (t += e.id),
            null != e.data && (t += JSON.stringify(e.data, this.replacer)),
            t
          );
        }
        encodeAsBinary(e) {
          const t = Wr(e),
            n = this.encodeAsString(t.packet),
            r = t.buffers;
          return r.unshift(n), r;
        }
      }
      function Zr(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      class eo extends sr {
        constructor(e) {
          super(), (this.reviver = e);
        }
        add(e) {
          let t;
          if ("string" === typeof e) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet"
              );
            t = this.decodeString(e);
            const n = t.type === Xr.BINARY_EVENT;
            n || t.type === Xr.BINARY_ACK
              ? ((t.type = n ? Xr.EVENT : Xr.ACK),
                (this.reconstructor = new to(t)),
                0 === t.attachments && super.emitReserved("decoded", t))
              : super.emitReserved("decoded", t);
          } else {
            if (!Hr(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet"
              );
            (t = this.reconstructor.takeBinaryData(e)),
              t &&
                ((this.reconstructor = null), super.emitReserved("decoded", t));
          }
        }
        decodeString(e) {
          let t = 0;
          const n = { type: Number(e.charAt(0)) };
          if (void 0 === Xr[n.type])
            throw new Error("unknown packet type " + n.type);
          if (n.type === Xr.BINARY_EVENT || n.type === Xr.BINARY_ACK) {
            const r = t + 1;
            for (; "-" !== e.charAt(++t) && t != e.length; );
            const o = e.substring(r, t);
            if (o != Number(o) || "-" !== e.charAt(t))
              throw new Error("Illegal attachments");
            n.attachments = Number(o);
          }
          if ("/" === e.charAt(t + 1)) {
            const r = t + 1;
            for (; ++t; ) {
              if ("," === e.charAt(t)) break;
              if (t === e.length) break;
            }
            n.nsp = e.substring(r, t);
          } else n.nsp = "/";
          const r = e.charAt(t + 1);
          if ("" !== r && Number(r) == r) {
            const r = t + 1;
            for (; ++t; ) {
              const n = e.charAt(t);
              if (null == n || Number(n) != n) {
                --t;
                break;
              }
              if (t === e.length) break;
            }
            n.id = Number(e.substring(r, t + 1));
          }
          if (e.charAt(++t)) {
            const r = this.tryParse(e.substr(t));
            if (!eo.isPayloadValid(n.type, r))
              throw new Error("invalid payload");
            n.data = r;
          }
          return n;
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver);
          } catch (po) {
            return !1;
          }
        }
        static isPayloadValid(e, t) {
          switch (e) {
            case Xr.CONNECT:
              return Zr(t);
            case Xr.DISCONNECT:
              return void 0 === t;
            case Xr.CONNECT_ERROR:
              return "string" === typeof t || Zr(t);
            case Xr.EVENT:
            case Xr.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ("number" === typeof t[0] ||
                  ("string" === typeof t[0] && -1 === Jr.indexOf(t[0])))
              );
            case Xr.ACK:
            case Xr.BINARY_ACK:
              return Array.isArray(t);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class to {
        constructor(e) {
          (this.packet = e), (this.buffers = []), (this.reconPack = e);
        }
        takeBinaryData(e) {
          if (
            (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const e = Qr(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function no(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      const ro = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class oo extends sr {
        constructor(e, t, n) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = e),
            (this.nsp = t),
            n && n.auth && (this.auth = n.auth),
            (this._opts = Object.assign({}, n)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const e = this.io;
          this.subs = [
            no(e, "open", this.onopen.bind(this)),
            no(e, "packet", this.onpacket.bind(this)),
            no(e, "error", this.onerror.bind(this)),
            no(e, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.unshift("message"), this.emit.apply(this, t), this;
        }
        emit(e) {
          if (ro.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          if (
            (n.unshift(e),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(n), this;
          const o = { type: Xr.EVENT, data: n, options: {} };
          if (
            ((o.options.compress = !1 !== this.flags.compress),
            "function" === typeof n[n.length - 1])
          ) {
            const e = this.ids++,
              t = n.pop();
            this._registerAckCallback(e, t), (o.id = e);
          }
          const a =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!a || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(o), this.packet(o))
                : this.sendBuffer.push(o)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(e, t) {
          var n,
            r = this;
          const o =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout;
          if (void 0 === o) return void (this.acks[e] = t);
          const a = this.io.setTimeoutFn(() => {
            delete this.acks[e];
            for (let t = 0; t < this.sendBuffer.length; t++)
              this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
            t.call(this, new Error("operation has timed out"));
          }, o);
          this.acks[e] = function () {
            r.io.clearTimeoutFn(a);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            t.apply(r, [null, ...n]);
          };
        }
        emitWithAck(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          const o =
            void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
          return new Promise((t, r) => {
            n.push((e, n) => (o ? (e ? r(e) : t(n)) : t(e))),
              this.emit(e, ...n);
          });
        }
        _addToQueue(e) {
          var t = this;
          let n;
          "function" === typeof e[e.length - 1] && (n = e.pop());
          const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          e.push(function (e) {
            if (r !== t._queue[0]) return;
            if (null !== e)
              r.tryCount > t._opts.retries && (t._queue.shift(), n && n(e));
            else if ((t._queue.shift(), n)) {
              for (
                var o = arguments.length,
                  a = new Array(o > 1 ? o - 1 : 0),
                  i = 1;
                i < o;
                i++
              )
                a[i - 1] = arguments[i];
              n(null, ...a);
            }
            return (r.pending = !1), t._drainQueue();
          }),
            this._queue.push(r),
            this._drainQueue();
        }
        _drainQueue() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.connected || 0 === this._queue.length) return;
          const t = this._queue[0];
          (t.pending && !e) ||
            ((t.pending = !0),
            t.tryCount++,
            (this.flags = t.flags),
            this.emit.apply(this, t.args));
        }
        packet(e) {
          (e.nsp = this.nsp), this.io._packet(e);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((e) => {
                this._sendConnectPacket(e);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(e) {
          this.packet({
            type: Xr.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
              : e,
          });
        }
        onerror(e) {
          this.connected || this.emitReserved("connect_error", e);
        }
        onclose(e, t) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", e, t);
        }
        onpacket(e) {
          if (e.nsp === this.nsp)
            switch (e.type) {
              case Xr.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case Xr.EVENT:
              case Xr.BINARY_EVENT:
                this.onevent(e);
                break;
              case Xr.ACK:
              case Xr.BINARY_ACK:
                this.onack(e);
                break;
              case Xr.DISCONNECT:
                this.ondisconnect();
                break;
              case Xr.CONNECT_ERROR:
                this.destroy();
                const t = new Error(e.data.message);
                (t.data = e.data.data), this.emitReserved("connect_error", t);
            }
        }
        onevent(e) {
          const t = e.data || [];
          null != e.id && t.push(this.ack(e.id)),
            this.connected
              ? this.emitEvent(t)
              : this.receiveBuffer.push(Object.freeze(t));
        }
        emitEvent(e) {
          if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const n of t) n.apply(this, e);
          }
          super.emit.apply(this, e),
            this._pid &&
              e.length &&
              "string" === typeof e[e.length - 1] &&
              (this._lastOffset = e[e.length - 1]);
        }
        ack(e) {
          const t = this;
          let n = !1;
          return function () {
            if (!n) {
              n = !0;
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              t.packet({ type: Xr.ACK, id: e, data: o });
            }
          };
        }
        onack(e) {
          const t = this.acks[e.id];
          "function" === typeof t &&
            (t.apply(this, e.data), delete this.acks[e.id]);
        }
        onconnect(e, t) {
          (this.id = e),
            (this.recovered = t && this._pid === t),
            (this._pid = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((e) => this.emitEvent(e)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((e) => {
              this.notifyOutgoingListeners(e), this.packet(e);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: Xr.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(e) {
          return (this.flags.compress = e), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(e) {
          return (this.flags.timeout = e), this;
        }
        onAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(e),
            this
          );
        }
        prependAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(e),
            this
          );
        }
        offAny(e) {
          if (!this._anyListeners) return this;
          if (e) {
            const t = this._anyListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(e),
            this
          );
        }
        prependAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(e),
            this
          );
        }
        offAnyOutgoing(e) {
          if (!this._anyOutgoingListeners) return this;
          if (e) {
            const t = this._anyOutgoingListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(e) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const n of t) n.apply(this, e.data);
          }
        }
      }
      function ao(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (ao.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (ao.prototype.reset = function () {
          this.attempts = 0;
        }),
        (ao.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (ao.prototype.setMax = function (e) {
          this.max = e;
        }),
        (ao.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      class io extends sr {
        constructor(e, n) {
          var r;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            e && "object" === typeof e && ((n = e), (e = void 0)),
            ((n = n || {}).path = n.path || "/socket.io"),
            (this.opts = n),
            fr(this, n),
            this.reconnection(!1 !== n.reconnection),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = n.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new ao({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == n.timeout ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = e);
          const o = n.parser || t;
          (this.encoder = new o.Encoder()),
            (this.decoder = new o.Decoder()),
            (this._autoConnect = !1 !== n.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(e) {
          return arguments.length
            ? ((this._reconnection = !!e), this)
            : this._reconnection;
        }
        reconnectionAttempts(e) {
          return void 0 === e
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = e), this);
        }
        reconnectionDelay(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = e),
              null === (t = this.backoff) || void 0 === t || t.setMin(e),
              this);
        }
        randomizationFactor(e) {
          var t;
          return void 0 === e
            ? this._randomizationFactor
            : ((this._randomizationFactor = e),
              null === (t = this.backoff) || void 0 === t || t.setJitter(e),
              this);
        }
        reconnectionDelayMax(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = e),
              null === (t = this.backoff) || void 0 === t || t.setMax(e),
              this);
        }
        timeout(e) {
          return arguments.length ? ((this._timeout = e), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(e) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new Dr(this.uri, this.opts);
          const t = this.engine,
            n = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const r = no(t, "open", function () {
              n.onopen(), e && e();
            }),
            o = (t) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", t),
                e ? e(t) : this.maybeReconnectOnOpen();
            },
            a = no(t, "error", o);
          if (!1 !== this._timeout) {
            const e = this._timeout,
              n = this.setTimeoutFn(() => {
                r(), o(new Error("timeout")), t.close();
              }, e);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
          return this.subs.push(r), this.subs.push(a), this;
        }
        connect(e) {
          return this.open(e);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          const e = this.engine;
          this.subs.push(
            no(e, "ping", this.onping.bind(this)),
            no(e, "data", this.ondata.bind(this)),
            no(e, "error", this.onerror.bind(this)),
            no(e, "close", this.onclose.bind(this)),
            no(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(e) {
          try {
            this.decoder.add(e);
          } catch (po) {
            this.onclose("parse error", po);
          }
        }
        ondecoded(e) {
          Rr(() => {
            this.emitReserved("packet", e);
          }, this.setTimeoutFn);
        }
        onerror(e) {
          this.emitReserved("error", e);
        }
        socket(e, t) {
          let n = this.nsps[e];
          return (
            n
              ? this._autoConnect && !n.active && n.connect()
              : ((n = new oo(this, e, t)), (this.nsps[e] = n)),
            n
          );
        }
        _destroy(e) {
          const t = Object.keys(this.nsps);
          for (const n of t) {
            if (this.nsps[n].active) return;
          }
          this._close();
        }
        _packet(e) {
          const t = this.encoder.encode(e);
          for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
        }
        cleanup() {
          this.subs.forEach((e) => e()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(e, t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", e, t),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const e = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const n = this.setTimeoutFn(() => {
              e.skipReconnect ||
                (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                e.skipReconnect ||
                  e.open((t) => {
                    t
                      ? ((e._reconnecting = !1),
                        e.reconnect(),
                        this.emitReserved("reconnect_error", t))
                      : e.onreconnect();
                  }));
            }, t);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
        }
        onreconnect() {
          const e = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", e);
        }
      }
      const so = {};
      function lo(e, t) {
        "object" === typeof e && ((t = e), (e = void 0));
        const n = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = e;
            (n = n || ("undefined" !== typeof location && location)),
              null == e && (e = n.protocol + "//" + n.host),
              "string" === typeof e &&
                ("/" === e.charAt(0) &&
                  (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e =
                    "undefined" !== typeof n
                      ? n.protocol + "//" + e
                      : "https://" + e),
                (r = Fr(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            const o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + o + ":" + r.port + t),
              (r.href =
                r.protocol +
                "://" +
                o +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(e, (t = t || {}).path || "/socket.io"),
          r = n.source,
          o = n.id,
          a = n.path,
          i = so[o] && a in so[o].nsps;
        let s;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || i
            ? (s = new io(r, t))
            : (so[o] || (so[o] = new io(r, t)), (s = so[o])),
          n.query && !t.query && (t.query = n.queryKey),
          s.socket(n.path, t)
        );
      }
      function uo() {
        const { groupId: e } = (function () {
            let { matches: e } = o.useContext(Y),
              t = e[e.length - 1];
            return t ? t.params : {};
          })(),
          t = "http://127.0.0.1:5100",
          [n, r] = (0, o.useState)([]),
          [a, i] = (0, o.useState)(!0),
          [s, l] = (0, o.useState)(""),
          [u, c] = (0, o.useState)(""),
          [d, f] = (0, o.useState)({}),
          p = (0, o.useRef)(null),
          h = te();
        (0, o.useEffect)(() => {
          const n = localStorage.getItem("token");
          localStorage.getItem("username");
          if (n) {
            p.current = lo(t, { auth: { token: n } });
            return (
              (async () => {
                try {
                  const o = await Ln.get(
                    "".concat(t, "/group/").concat(e, "/messages"),
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(n),
                      },
                    }
                  );
                  if (200 === o.status) {
                    const e = o.data.map((e) => ({
                      message: e.message,
                      sender: e.sender.username,
                    }));
                    r(e);
                  } else console.error("Failed to fetch messages");
                  const a = await Ln.get("".concat(t, "/group/").concat(e), {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer ".concat(n),
                    },
                  });
                  if (200 === a.status) {
                    f(a);
                  }
                } catch (o) {
                  console.error("Error fetching messages:", o);
                } finally {
                  i(!1);
                }
              })(),
              p.current.on("message", (e) => {
                console.log("New message:", e), r((t) => [...t, e]);
              }),
              p.current.on("type", (e) => {
                c(e, " is typing ...");
              }),
              p.current.on("stopTyping", () => {
                c("");
              }),
              () => {
                p.current.disconnect();
              }
            );
          }
        }, [e, t]),
          (0, o.useEffect)(() => {
            if (!d || !d.data) return;
            const t = localStorage.getItem("username"),
              n = localStorage.getItem("id");
            console.log("Joining room:", d.data.name),
              p.current.emit("joinRoom", {
                username: t,
                userId: n,
                room: d.data.name,
                groupId: e,
                token: localStorage.getItem("token"),
              });
          }, [d]);
        return (0, Me.jsxs)("div", {
          children: [
            (0, Me.jsx)("div", {
              className:
                "flex items-start justify-start pl-5 py-4 text-gray-500 bg-[#282828] ",
              children: (0, Me.jsx)("h1", {
                className: "text-4xl font-bold",
                children: "Chat",
              }),
            }),
            (0, Me.jsxs)("div", {
              className: "container mx-auto min-h-screen min-w-full",
              children: [
                (0, Me.jsx)(qe, {}),
                (0, Me.jsx)("div", {
                  className:
                    "flex items-center justify-center min-h-screen min-w-full px-5",
                  children: (0, Me.jsxs)("div", {
                    className:
                      "flex flex-col w-full max-w-2xl p-4 relative bg-gray-800/80 rounded-lg shadow-lg",
                    children: [
                      (0, Me.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, Me.jsx)("h1", {
                            className: "text-2xl font-bold text-gray-200",
                            children: "Chat",
                          }),
                          (0, Me.jsxs)("div", {
                            className: "flex gap-2 justify-center items-center",
                            children: [
                              (0, Me.jsx)(Ce, {
                                to: "/dashboard",
                                className:
                                  "px-3 py-1 text-sm font-semibold text-gray-200 bg-red-600 rounded hover:bg-red-800 transition duration-200 ease-in-out",
                                onClick: async () => {
                                  localStorage.getItem("token");
                                  const t = localStorage.getItem("id");
                                  try {
                                    const n = localStorage.getItem("username");
                                    p.current.emit("leaveRoom", {
                                      user: t,
                                      username: n,
                                      groupId: e,
                                      name: d.data.name,
                                    }),
                                      console.log("Left the room"),
                                      h("/dashboard");
                                  } catch (n) {
                                    console.error("Error leaving the room:", n);
                                  }
                                },
                                children: "Leave",
                              }),
                              (0, Me.jsx)(Ce, {
                                to: "/dashboard",
                                className:
                                  "px-3 py-1 text-sm font-semibold text-gray-200 bg-gray-500 rounded hover:bg-slate-900 transition duration-200 ease-in-out",
                                children: "back",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u &&
                        (0, Me.jsx)("div", {
                          className: "text-gray-200 text-sm",
                          children: u,
                        }),
                      (0, Me.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center mt-4 space-y-4 overflow-y-auto",
                        children: [
                          (0, Me.jsx)("div", {
                            className:
                              "flex-1 bg-slate-200 min-h-[250px] max-h-[250px] w-9/12 overflow-auto scroll-smooth  rounded-lg text-black border px-3 py-2",
                            children: a
                              ? (0, Me.jsx)("div", {
                                  className: "text-gray-700 text-center",
                                  children: "Loading messages...",
                                })
                              : n.length > 0
                              ? n.map((e, t) => {
                                  var n;
                                  return (0, Me.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-start gap-2",
                                      children: [
                                        (0, Me.jsxs)("div", {
                                          className:
                                            "text-gray-700 text-sm font-semibold",
                                          children: [
                                            null !==
                                              (n =
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.username) && void 0 !== n
                                              ? n
                                              : e.sender,
                                            ":",
                                          ],
                                        }),
                                        (0, Me.jsx)("div", {
                                          className: "text-gray-700 text-sm",
                                          children: e.message,
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                })
                              : (0, Me.jsx)("div", {
                                  className: "text-gray-200 text-center",
                                  children: "No messages yet",
                                }),
                          }),
                          (0, Me.jsx)("div", {
                            className: "w-full",
                            children: (0, Me.jsxs)("form", {
                              className:
                                "w-full flex justify-center items-center gap-2",
                              children: [
                                (0, Me.jsx)("input", {
                                  type: "text",
                                  name: "newMessage",
                                  value: s,
                                  onChange: (e) => {
                                    const t = e.target.value;
                                    l(t);
                                    const n = localStorage.getItem("username");
                                    p.current.emit("typing", {
                                      room: d.data.name,
                                      username: n,
                                    }),
                                      "" === t &&
                                        p.current.emit("stopTyping", {
                                          room: d.data.name,
                                        });
                                  },
                                  className:
                                    "w-6/12 h-10 pl-3  text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline focus:outline-none",
                                  placeholder: "Type here ....",
                                }),
                                (0, Me.jsx)("button", {
                                  type: "submit",
                                  onClick: async (t) => {
                                    t.preventDefault();
                                    const n = localStorage.getItem("token"),
                                      r = localStorage.getItem("id"),
                                      o = localStorage.getItem("username");
                                    if (n)
                                      try {
                                        console.log("Sending message:", s),
                                          p.current.emit(
                                            "chatMessage",
                                            { message: s, sender: r, group: e },
                                            d.data.name,
                                            o
                                          ),
                                          l(""),
                                          c("");
                                      } catch (a) {
                                        console.error(
                                          "Error sending message:",
                                          a
                                        );
                                      }
                                  },
                                  name: "submit",
                                  className:
                                    "text-base px-4 py-2 rounded-lg bg-gray-300/60 text-gray-200 hover:text-gray-900/70 hover:bg-gray-500 focus:outline-none focus:text-gray-900/70  focus:shadow-outline transition duration-200 ease-in-out ",
                                  children: "Send",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      Object.assign(lo, { Manager: io, Socket: oo, io: lo, connect: lo });
      const co = (e) => {
        const t = te();
        return (
          (0, o.useEffect)(() => {
            localStorage.getItem("token") || t("/");
          }, [t]),
          (0, Me.jsx)(e.component, {})
        );
      };
      const fo = function () {
        return (0, Me.jsx)("div", {
          className: "App",
          children: (0, Me.jsx)(Se, {
            children: (0, Me.jsxs)(ye, {
              children: [
                (0, Me.jsx)(me, {
                  path: "/",
                  exact: !0,
                  element: (0, Me.jsx)(An, {}),
                }),
                (0, Me.jsx)(me, {
                  path: "/signup",
                  element: (0, Me.jsx)(zn, {}),
                }),
                (0, Me.jsx)(me, {
                  path: "/dashboard",
                  element: (0, Me.jsx)(co, { component: Dn }),
                }),
                (0, Me.jsx)(me, {
                  path: "/group",
                  element: (0, Me.jsx)(co, { component: Bn }),
                }),
                (0, Me.jsx)(me, {
                  path: "/chat/:groupId",
                  element: (0, Me.jsx)(co, { component: uo }),
                }),
                (0, Me.jsx)(me, { path: "*", element: (0, Me.jsx)(Fn, {}) }),
              ],
            }),
          }),
        });
      };
      i.createRoot(document.getElementById("root")).render((0, Me.jsx)(fo, {}));
    })();
})();
//# sourceMappingURL=main.55436ceb.js.map
