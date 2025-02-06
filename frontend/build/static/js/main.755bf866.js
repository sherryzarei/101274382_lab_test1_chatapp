/*! For license information please see main.755bf866.js.LICENSE.txt */
(() => {
  var e = {
      380: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          "use strict";
          var t, n;
          function r() {
            return t.apply(null, arguments);
          }
          function a(e) {
            t = e;
          }
          function i(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function o(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function s(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function l(e) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (s(e, t)) return !1;
            return !0;
          }
          function u(e) {
            return void 0 === e;
          }
          function c(e) {
            return (
              "number" === typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function d(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function f(e, t) {
            var n,
              r = [],
              a = e.length;
            for (n = 0; n < a; ++n) r.push(t(e[n], n));
            return r;
          }
          function h(e, t) {
            for (var n in t) s(t, n) && (e[n] = t[n]);
            return (
              s(t, "toString") && (e.toString = t.toString),
              s(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function p(e, t, n, r) {
            return Gn(e, t, n, r, !0).utc();
          }
          function m() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1,
            };
          }
          function g(e) {
            return null == e._pf && (e._pf = m()), e._pf;
          }
          function y(e) {
            var t = null,
              r = !1,
              a = e._d && !isNaN(e._d.getTime());
            return (
              a &&
                ((t = g(e)),
                (r = n.call(t.parsedDateParts, function (e) {
                  return null != e;
                })),
                (a =
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidEra &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && r))),
                e._strict &&
                  (a =
                    a &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour)),
              null != Object.isFrozen && Object.isFrozen(e)
                ? a
                : ((e._isValid = a), e._isValid)
            );
          }
          function v(e) {
            var t = p(NaN);
            return null != e ? h(g(t), e) : (g(t).userInvalidated = !0), t;
          }
          n = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                var t,
                  n = Object(this),
                  r = n.length >>> 0;
                for (t = 0; t < r; t++)
                  if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1;
              };
          var b = (r.momentProperties = []),
            w = !1;
          function k(e, t) {
            var n,
              r,
              a,
              i = b.length;
            if (
              (u(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              u(t._i) || (e._i = t._i),
              u(t._f) || (e._f = t._f),
              u(t._l) || (e._l = t._l),
              u(t._strict) || (e._strict = t._strict),
              u(t._tzm) || (e._tzm = t._tzm),
              u(t._isUTC) || (e._isUTC = t._isUTC),
              u(t._offset) || (e._offset = t._offset),
              u(t._pf) || (e._pf = g(t)),
              u(t._locale) || (e._locale = t._locale),
              i > 0)
            )
              for (n = 0; n < i; n++) u((a = t[(r = b[n])])) || (e[r] = a);
            return e;
          }
          function _(e) {
            k(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === w && ((w = !0), r.updateOffset(this), (w = !1));
          }
          function S(e) {
            return e instanceof _ || (null != e && null != e._isAMomentObject);
          }
          function x(e) {
            !1 === r.suppressDeprecationWarnings &&
              "undefined" !== typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function E(e, t) {
            var n = !0;
            return h(function () {
              if (
                (null != r.deprecationHandler && r.deprecationHandler(null, e),
                n)
              ) {
                var a,
                  i,
                  o,
                  l = [],
                  u = arguments.length;
                for (i = 0; i < u; i++) {
                  if (((a = ""), "object" === typeof arguments[i])) {
                    for (o in ((a += "\n[" + i + "] "), arguments[0]))
                      s(arguments[0], o) &&
                        (a += o + ": " + arguments[0][o] + ", ");
                    a = a.slice(0, -2);
                  } else a = arguments[i];
                  l.push(a);
                }
                x(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(l).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var C,
            N = {};
          function O(e, t) {
            null != r.deprecationHandler && r.deprecationHandler(e, t),
              N[e] || (x(t), (N[e] = !0));
          }
          function T(e) {
            return (
              ("undefined" !== typeof Function && e instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function R(e) {
            var t, n;
            for (n in e)
              s(e, n) && (T((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
            (this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }
          function D(e, t) {
            var n,
              r = h({}, e);
            for (n in t)
              s(t, n) &&
                (o(e[n]) && o(t[n])
                  ? ((r[n] = {}), h(r[n], e[n]), h(r[n], t[n]))
                  : null != t[n]
                  ? (r[n] = t[n])
                  : delete r[n]);
            for (n in e) s(e, n) && !s(t, n) && o(e[n]) && (r[n] = h({}, r[n]));
            return r;
          }
          function P(e) {
            null != e && this.set(e);
          }
          (r.suppressDeprecationWarnings = !1),
            (r.deprecationHandler = null),
            (C = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) s(e, t) && n.push(t);
                  return n;
                });
          var M = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          };
          function L(e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return T(r) ? r.call(t, n) : r;
          }
          function j(e, t, n) {
            var r = "" + Math.abs(e),
              a = t - r.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, a)).toString().substr(1) +
              r
            );
          }
          var A =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            U = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            F = {},
            z = {};
          function Y(e, t, n, r) {
            var a = r;
            "string" === typeof r &&
              (a = function () {
                return this[r]();
              }),
              e && (z[e] = a),
              t &&
                (z[t[0]] = function () {
                  return j(a.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (z[n] = function () {
                  return this.localeData().ordinal(a.apply(this, arguments), e);
                });
          }
          function I(e) {
            return e.match(/\[[\s\S]/)
              ? e.replace(/^\[|\]$/g, "")
              : e.replace(/\\/g, "");
          }
          function B(e) {
            var t,
              n,
              r = e.match(A);
            for (t = 0, n = r.length; t < n; t++)
              z[r[t]] ? (r[t] = z[r[t]]) : (r[t] = I(r[t]));
            return function (t) {
              var a,
                i = "";
              for (a = 0; a < n; a++) i += T(r[a]) ? r[a].call(t, e) : r[a];
              return i;
            };
          }
          function W(e, t) {
            return e.isValid()
              ? ((t = H(t, e.localeData())), (F[t] = F[t] || B(t)), F[t](e))
              : e.localeData().invalidDate();
          }
          function H(e, t) {
            var n = 5;
            function r(e) {
              return t.longDateFormat(e) || e;
            }
            for (U.lastIndex = 0; n >= 0 && U.test(e); )
              (e = e.replace(U, r)), (U.lastIndex = 0), (n -= 1);
            return e;
          }
          var V = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          };
          function q(e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n
                  .match(A)
                  .map(function (e) {
                    return "MMMM" === e ||
                      "MM" === e ||
                      "DD" === e ||
                      "dddd" === e
                      ? e.slice(1)
                      : e;
                  })
                  .join("")),
                this._longDateFormat[e]);
          }
          var $ = "Invalid date";
          function G() {
            return this._invalidDate;
          }
          var Q = "%d",
            K = /\d{1,2}/;
          function J(e) {
            return this._ordinal.replace("%d", e);
          }
          var Z = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          };
          function X(e, t, n, r) {
            var a = this._relativeTime[n];
            return T(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
          }
          function ee(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return T(n) ? n(t) : n.replace(/%s/i, t);
          }
          var te = {
            D: "date",
            dates: "date",
            date: "date",
            d: "day",
            days: "day",
            day: "day",
            e: "weekday",
            weekdays: "weekday",
            weekday: "weekday",
            E: "isoWeekday",
            isoweekdays: "isoWeekday",
            isoweekday: "isoWeekday",
            DDD: "dayOfYear",
            dayofyears: "dayOfYear",
            dayofyear: "dayOfYear",
            h: "hour",
            hours: "hour",
            hour: "hour",
            ms: "millisecond",
            milliseconds: "millisecond",
            millisecond: "millisecond",
            m: "minute",
            minutes: "minute",
            minute: "minute",
            M: "month",
            months: "month",
            month: "month",
            Q: "quarter",
            quarters: "quarter",
            quarter: "quarter",
            s: "second",
            seconds: "second",
            second: "second",
            gg: "weekYear",
            weekyears: "weekYear",
            weekyear: "weekYear",
            GG: "isoWeekYear",
            isoweekyears: "isoWeekYear",
            isoweekyear: "isoWeekYear",
            w: "week",
            weeks: "week",
            week: "week",
            W: "isoWeek",
            isoweeks: "isoWeek",
            isoweek: "isoWeek",
            y: "year",
            years: "year",
            year: "year",
          };
          function ne(e) {
            return "string" === typeof e
              ? te[e] || te[e.toLowerCase()]
              : void 0;
          }
          function re(e) {
            var t,
              n,
              r = {};
            for (n in e) s(e, n) && (t = ne(n)) && (r[t] = e[n]);
            return r;
          }
          var ae = {
            date: 9,
            day: 11,
            weekday: 11,
            isoWeekday: 11,
            dayOfYear: 4,
            hour: 13,
            millisecond: 16,
            minute: 14,
            month: 8,
            quarter: 7,
            second: 15,
            weekYear: 1,
            isoWeekYear: 1,
            week: 5,
            isoWeek: 5,
            year: 1,
          };
          function ie(e) {
            var t,
              n = [];
            for (t in e) s(e, t) && n.push({ unit: t, priority: ae[t] });
            return (
              n.sort(function (e, t) {
                return e.priority - t.priority;
              }),
              n
            );
          }
          var oe,
            se = /\d/,
            le = /\d\d/,
            ue = /\d{3}/,
            ce = /\d{4}/,
            de = /[+-]?\d{6}/,
            fe = /\d\d?/,
            he = /\d\d\d\d?/,
            pe = /\d\d\d\d\d\d?/,
            me = /\d{1,3}/,
            ge = /\d{1,4}/,
            ye = /[+-]?\d{1,6}/,
            ve = /\d+/,
            be = /[+-]?\d+/,
            we = /Z|[+-]\d\d:?\d\d/gi,
            ke = /Z|[+-]\d\d(?::?\d\d)?/gi,
            _e = /[+-]?\d+(\.\d{1,3})?/,
            Se =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            xe = /^[1-9]\d?/,
            Ee = /^([1-9]\d|\d)/;
          function Ce(e, t, n) {
            oe[e] = T(t)
              ? t
              : function (e, r) {
                  return e && n ? n : t;
                };
          }
          function Ne(e, t) {
            return s(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(Oe(e));
          }
          function Oe(e) {
            return Te(
              e
                .replace("\\", "")
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (e, t, n, r, a) {
                    return t || n || r || a;
                  }
                )
            );
          }
          function Te(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          function Re(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function De(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = Re(t)), n;
          }
          oe = {};
          var Pe = {};
          function Me(e, t) {
            var n,
              r,
              a = t;
            for (
              "string" === typeof e && (e = [e]),
                c(t) &&
                  (a = function (e, n) {
                    n[t] = De(e);
                  }),
                r = e.length,
                n = 0;
              n < r;
              n++
            )
              Pe[e[n]] = a;
          }
          function Le(e, t) {
            Me(e, function (e, n, r, a) {
              (r._w = r._w || {}), t(e, r._w, r, a);
            });
          }
          function je(e, t, n) {
            null != t && s(Pe, e) && Pe[e](t, n._a, n, e);
          }
          function Ae(e) {
            return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
          }
          var Ue = 0,
            Fe = 1,
            ze = 2,
            Ye = 3,
            Ie = 4,
            Be = 5,
            We = 6,
            He = 7,
            Ve = 8;
          function qe(e) {
            return Ae(e) ? 366 : 365;
          }
          Y("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? j(e, 4) : "+" + e;
          }),
            Y(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            Y(0, ["YYYY", 4], 0, "year"),
            Y(0, ["YYYYY", 5], 0, "year"),
            Y(0, ["YYYYYY", 6, !0], 0, "year"),
            Ce("Y", be),
            Ce("YY", fe, le),
            Ce("YYYY", ge, ce),
            Ce("YYYYY", ye, de),
            Ce("YYYYYY", ye, de),
            Me(["YYYYY", "YYYYYY"], Ue),
            Me("YYYY", function (e, t) {
              t[Ue] = 2 === e.length ? r.parseTwoDigitYear(e) : De(e);
            }),
            Me("YY", function (e, t) {
              t[Ue] = r.parseTwoDigitYear(e);
            }),
            Me("Y", function (e, t) {
              t[Ue] = parseInt(e, 10);
            }),
            (r.parseTwoDigitYear = function (e) {
              return De(e) + (De(e) > 68 ? 1900 : 2e3);
            });
          var $e,
            Ge = Ke("FullYear", !0);
          function Qe() {
            return Ae(this.year());
          }
          function Ke(e, t) {
            return function (n) {
              return null != n
                ? (Ze(this, e, n), r.updateOffset(this, t), this)
                : Je(this, e);
            };
          }
          function Je(e, t) {
            if (!e.isValid()) return NaN;
            var n = e._d,
              r = e._isUTC;
            switch (t) {
              case "Milliseconds":
                return r ? n.getUTCMilliseconds() : n.getMilliseconds();
              case "Seconds":
                return r ? n.getUTCSeconds() : n.getSeconds();
              case "Minutes":
                return r ? n.getUTCMinutes() : n.getMinutes();
              case "Hours":
                return r ? n.getUTCHours() : n.getHours();
              case "Date":
                return r ? n.getUTCDate() : n.getDate();
              case "Day":
                return r ? n.getUTCDay() : n.getDay();
              case "Month":
                return r ? n.getUTCMonth() : n.getMonth();
              case "FullYear":
                return r ? n.getUTCFullYear() : n.getFullYear();
              default:
                return NaN;
            }
          }
          function Ze(e, t, n) {
            var r, a, i, o, s;
            if (e.isValid() && !isNaN(n)) {
              switch (((r = e._d), (a = e._isUTC), t)) {
                case "Milliseconds":
                  return void (a
                    ? r.setUTCMilliseconds(n)
                    : r.setMilliseconds(n));
                case "Seconds":
                  return void (a ? r.setUTCSeconds(n) : r.setSeconds(n));
                case "Minutes":
                  return void (a ? r.setUTCMinutes(n) : r.setMinutes(n));
                case "Hours":
                  return void (a ? r.setUTCHours(n) : r.setHours(n));
                case "Date":
                  return void (a ? r.setUTCDate(n) : r.setDate(n));
                case "FullYear":
                  break;
                default:
                  return;
              }
              (i = n),
                (o = e.month()),
                (s = 29 !== (s = e.date()) || 1 !== o || Ae(i) ? s : 28),
                a ? r.setUTCFullYear(i, o, s) : r.setFullYear(i, o, s);
            }
          }
          function Xe(e) {
            return T(this[(e = ne(e))]) ? this[e]() : this;
          }
          function et(e, t) {
            if ("object" === typeof e) {
              var n,
                r = ie((e = re(e))),
                a = r.length;
              for (n = 0; n < a; n++) this[r[n].unit](e[r[n].unit]);
            } else if (T(this[(e = ne(e))])) return this[e](t);
            return this;
          }
          function tt(e, t) {
            return ((e % t) + t) % t;
          }
          function nt(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n = tt(t, 12);
            return (
              (e += (t - n) / 12),
              1 === n ? (Ae(e) ? 29 : 28) : 31 - ((n % 7) % 2)
            );
          }
          ($e = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            Y("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            Y("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            Y("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            Ce("M", fe, xe),
            Ce("MM", fe, le),
            Ce("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            Ce("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            Me(["M", "MM"], function (e, t) {
              t[Fe] = De(e) - 1;
            }),
            Me(["MMM", "MMMM"], function (e, t, n, r) {
              var a = n._locale.monthsParse(e, r, n._strict);
              null != a ? (t[Fe] = a) : (g(n).invalidMonth = e);
            });
          var rt =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            at = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            it = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            ot = Se,
            st = Se;
          function lt(e, t) {
            return e
              ? i(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || it).test(t)
                      ? "format"
                      : "standalone"
                  ][e.month()]
              : i(this._months)
              ? this._months
              : this._months.standalone;
          }
          function ut(e, t) {
            return e
              ? i(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[it.test(t) ? "format" : "standalone"][
                    e.month()
                  ]
              : i(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }
          function ct(e, t, n) {
            var r,
              a,
              i,
              o = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  r = 0;
                r < 12;
                ++r
              )
                (i = p([2e3, r])),
                  (this._shortMonthsParse[r] = this.monthsShort(
                    i,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[r] = this.months(
                    i,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? -1 !== (a = $e.call(this._shortMonthsParse, o))
                  ? a
                  : null
                : -1 !== (a = $e.call(this._longMonthsParse, o))
                ? a
                : null
              : "MMM" === t
              ? -1 !== (a = $e.call(this._shortMonthsParse, o)) ||
                -1 !== (a = $e.call(this._longMonthsParse, o))
                ? a
                : null
              : -1 !== (a = $e.call(this._longMonthsParse, o)) ||
                -1 !== (a = $e.call(this._shortMonthsParse, o))
              ? a
              : null;
          }
          function dt(e, t, n) {
            var r, a, i;
            if (this._monthsParseExact) return ct.call(this, e, t, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                r = 0;
              r < 12;
              r++
            ) {
              if (
                ((a = p([2e3, r])),
                n &&
                  !this._longMonthsParse[r] &&
                  ((this._longMonthsParse[r] = new RegExp(
                    "^" + this.months(a, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[r] = new RegExp(
                    "^" + this.monthsShort(a, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[r] ||
                  ((i =
                    "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
                  (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[r].test(e))
              )
                return r;
              if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                return r;
              if (!n && this._monthsParse[r].test(e)) return r;
            }
          }
          function ft(e, t) {
            if (!e.isValid()) return e;
            if ("string" === typeof t)
              if (/^\d+$/.test(t)) t = De(t);
              else if (!c((t = e.localeData().monthsParse(t)))) return e;
            var n = t,
              r = e.date();
            return (
              (r = r < 29 ? r : Math.min(r, nt(e.year(), n))),
              e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
              e
            );
          }
          function ht(e) {
            return null != e
              ? (ft(this, e), r.updateOffset(this, !0), this)
              : Je(this, "Month");
          }
          function pt() {
            return nt(this.year(), this.month());
          }
          function mt(e) {
            return this._monthsParseExact
              ? (s(this, "_monthsRegex") || yt.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = ot),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }
          function gt(e) {
            return this._monthsParseExact
              ? (s(this, "_monthsRegex") || yt.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (s(this, "_monthsRegex") || (this._monthsRegex = st),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }
          function yt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              a,
              i = [],
              o = [],
              s = [];
            for (t = 0; t < 12; t++)
              (n = p([2e3, t])),
                (r = Te(this.monthsShort(n, ""))),
                (a = Te(this.months(n, ""))),
                i.push(r),
                o.push(a),
                s.push(a),
                s.push(r);
            i.sort(e),
              o.sort(e),
              s.sort(e),
              (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              ));
          }
          function vt(e, t, n, r, a, i, o) {
            var s;
            return (
              e < 100 && e >= 0
                ? ((s = new Date(e + 400, t, n, r, a, i, o)),
                  isFinite(s.getFullYear()) && s.setFullYear(e))
                : (s = new Date(e, t, n, r, a, i, o)),
              s
            );
          }
          function bt(e) {
            var t, n;
            return (
              e < 100 && e >= 0
                ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                  (t = new Date(Date.UTC.apply(null, n))),
                  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
                : (t = new Date(Date.UTC.apply(null, arguments))),
              t
            );
          }
          function wt(e, t, n) {
            var r = 7 + t - n;
            return (-(7 + bt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
          }
          function kt(e, t, n, r, a) {
            var i,
              o,
              s = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + wt(e, r, a);
            return (
              s <= 0
                ? (o = qe((i = e - 1)) + s)
                : s > qe(e)
                ? ((i = e + 1), (o = s - qe(e)))
                : ((i = e), (o = s)),
              { year: i, dayOfYear: o }
            );
          }
          function _t(e, t, n) {
            var r,
              a,
              i = wt(e.year(), t, n),
              o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
            return (
              o < 1
                ? (r = o + St((a = e.year() - 1), t, n))
                : o > St(e.year(), t, n)
                ? ((r = o - St(e.year(), t, n)), (a = e.year() + 1))
                : ((a = e.year()), (r = o)),
              { week: r, year: a }
            );
          }
          function St(e, t, n) {
            var r = wt(e, t, n),
              a = wt(e + 1, t, n);
            return (qe(e) - r + a) / 7;
          }
          function xt(e) {
            return _t(e, this._week.dow, this._week.doy).week;
          }
          Y("w", ["ww", 2], "wo", "week"),
            Y("W", ["WW", 2], "Wo", "isoWeek"),
            Ce("w", fe, xe),
            Ce("ww", fe, le),
            Ce("W", fe, xe),
            Ce("WW", fe, le),
            Le(["w", "ww", "W", "WW"], function (e, t, n, r) {
              t[r.substr(0, 1)] = De(e);
            });
          var Et = { dow: 0, doy: 6 };
          function Ct() {
            return this._week.dow;
          }
          function Nt() {
            return this._week.doy;
          }
          function Ot(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function Tt(e) {
            var t = _t(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function Rt(e, t) {
            return "string" !== typeof e
              ? e
              : isNaN(e)
              ? "number" === typeof (e = t.weekdaysParse(e))
                ? e
                : null
              : parseInt(e, 10);
          }
          function Dt(e, t) {
            return "string" === typeof e
              ? t.weekdaysParse(e) % 7 || 7
              : isNaN(e)
              ? null
              : e;
          }
          function Pt(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          Y("d", 0, "do", "day"),
            Y("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            Y("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            Y("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            Y("e", 0, 0, "weekday"),
            Y("E", 0, 0, "isoWeekday"),
            Ce("d", fe),
            Ce("e", fe),
            Ce("E", fe),
            Ce("dd", function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            Ce("ddd", function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            Ce("dddd", function (e, t) {
              return t.weekdaysRegex(e);
            }),
            Le(["dd", "ddd", "dddd"], function (e, t, n, r) {
              var a = n._locale.weekdaysParse(e, r, n._strict);
              null != a ? (t.d = a) : (g(n).invalidWeekday = e);
            }),
            Le(["d", "e", "E"], function (e, t, n, r) {
              t[r] = De(e);
            });
          var Mt =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            Lt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            At = Se,
            Ut = Se,
            Ft = Se;
          function zt(e, t) {
            var n = i(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  e && !0 !== e && this._weekdays.isFormat.test(t)
                    ? "format"
                    : "standalone"
                ];
            return !0 === e ? Pt(n, this._week.dow) : e ? n[e.day()] : n;
          }
          function Yt(e) {
            return !0 === e
              ? Pt(this._weekdaysShort, this._week.dow)
              : e
              ? this._weekdaysShort[e.day()]
              : this._weekdaysShort;
          }
          function It(e) {
            return !0 === e
              ? Pt(this._weekdaysMin, this._week.dow)
              : e
              ? this._weekdaysMin[e.day()]
              : this._weekdaysMin;
          }
          function Bt(e, t, n) {
            var r,
              a,
              i,
              o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  r = 0;
                r < 7;
                ++r
              )
                (i = p([2e3, 1]).day(r)),
                  (this._minWeekdaysParse[r] = this.weekdaysMin(
                    i,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[r] = this.weekdaysShort(
                    i,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[r] = this.weekdays(
                    i,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? -1 !== (a = $e.call(this._weekdaysParse, o))
                  ? a
                  : null
                : "ddd" === t
                ? -1 !== (a = $e.call(this._shortWeekdaysParse, o))
                  ? a
                  : null
                : -1 !== (a = $e.call(this._minWeekdaysParse, o))
                ? a
                : null
              : "dddd" === t
              ? -1 !== (a = $e.call(this._weekdaysParse, o)) ||
                -1 !== (a = $e.call(this._shortWeekdaysParse, o)) ||
                -1 !== (a = $e.call(this._minWeekdaysParse, o))
                ? a
                : null
              : "ddd" === t
              ? -1 !== (a = $e.call(this._shortWeekdaysParse, o)) ||
                -1 !== (a = $e.call(this._weekdaysParse, o)) ||
                -1 !== (a = $e.call(this._minWeekdaysParse, o))
                ? a
                : null
              : -1 !== (a = $e.call(this._minWeekdaysParse, o)) ||
                -1 !== (a = $e.call(this._weekdaysParse, o)) ||
                -1 !== (a = $e.call(this._shortWeekdaysParse, o))
              ? a
              : null;
          }
          function Wt(e, t, n) {
            var r, a, i;
            if (this._weekdaysParseExact) return Bt.call(this, e, t, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                r = 0;
              r < 7;
              r++
            ) {
              if (
                ((a = p([2e3, 1]).day(r)),
                n &&
                  !this._fullWeekdaysParse[r] &&
                  ((this._fullWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[r] ||
                  ((i =
                    "^" +
                    this.weekdays(a, "") +
                    "|^" +
                    this.weekdaysShort(a, "") +
                    "|^" +
                    this.weekdaysMin(a, "")),
                  (this._weekdaysParse[r] = new RegExp(
                    i.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
              )
                return r;
              if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                return r;
              if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                return r;
              if (!n && this._weekdaysParse[r].test(e)) return r;
            }
          }
          function Ht(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = Je(this, "Day");
            return null != e
              ? ((e = Rt(e, this.localeData())), this.add(e - t, "d"))
              : t;
          }
          function Vt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }
          function qt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = Dt(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
          }
          function $t(e) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || Kt.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = At),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }
          function Gt(e) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || Kt.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (s(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = Ut),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }
          function Qt(e) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || Kt.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ft),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }
          function Kt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              a,
              i,
              o = [],
              s = [],
              l = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = p([2e3, 1]).day(t)),
                (r = Te(this.weekdaysMin(n, ""))),
                (a = Te(this.weekdaysShort(n, ""))),
                (i = Te(this.weekdays(n, ""))),
                o.push(r),
                s.push(a),
                l.push(i),
                u.push(r),
                u.push(a),
                u.push(i);
            o.sort(e),
              s.sort(e),
              l.sort(e),
              u.sort(e),
              (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + l.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              ));
          }
          function Jt() {
            return this.hours() % 12 || 12;
          }
          function Zt() {
            return this.hours() || 24;
          }
          function Xt(e, t) {
            Y(e, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function en(e, t) {
            return t._meridiemParse;
          }
          function tn(e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }
          Y("H", ["HH", 2], 0, "hour"),
            Y("h", ["hh", 2], 0, Jt),
            Y("k", ["kk", 2], 0, Zt),
            Y("hmm", 0, 0, function () {
              return "" + Jt.apply(this) + j(this.minutes(), 2);
            }),
            Y("hmmss", 0, 0, function () {
              return (
                "" +
                Jt.apply(this) +
                j(this.minutes(), 2) +
                j(this.seconds(), 2)
              );
            }),
            Y("Hmm", 0, 0, function () {
              return "" + this.hours() + j(this.minutes(), 2);
            }),
            Y("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
              );
            }),
            Xt("a", !0),
            Xt("A", !1),
            Ce("a", en),
            Ce("A", en),
            Ce("H", fe, Ee),
            Ce("h", fe, xe),
            Ce("k", fe, xe),
            Ce("HH", fe, le),
            Ce("hh", fe, le),
            Ce("kk", fe, le),
            Ce("hmm", he),
            Ce("hmmss", pe),
            Ce("Hmm", he),
            Ce("Hmmss", pe),
            Me(["H", "HH"], Ye),
            Me(["k", "kk"], function (e, t, n) {
              var r = De(e);
              t[Ye] = 24 === r ? 0 : r;
            }),
            Me(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            Me(["h", "hh"], function (e, t, n) {
              (t[Ye] = De(e)), (g(n).bigHour = !0);
            }),
            Me("hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[Ye] = De(e.substr(0, r))),
                (t[Ie] = De(e.substr(r))),
                (g(n).bigHour = !0);
            }),
            Me("hmmss", function (e, t, n) {
              var r = e.length - 4,
                a = e.length - 2;
              (t[Ye] = De(e.substr(0, r))),
                (t[Ie] = De(e.substr(r, 2))),
                (t[Be] = De(e.substr(a))),
                (g(n).bigHour = !0);
            }),
            Me("Hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[Ye] = De(e.substr(0, r))), (t[Ie] = De(e.substr(r)));
            }),
            Me("Hmmss", function (e, t, n) {
              var r = e.length - 4,
                a = e.length - 2;
              (t[Ye] = De(e.substr(0, r))),
                (t[Ie] = De(e.substr(r, 2))),
                (t[Be] = De(e.substr(a)));
            });
          var nn = /[ap]\.?m?\.?/i,
            rn = Ke("Hours", !0);
          function an(e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }
          var on,
            sn = {
              calendar: M,
              longDateFormat: V,
              invalidDate: $,
              ordinal: Q,
              dayOfMonthOrdinalParse: K,
              relativeTime: Z,
              months: rt,
              monthsShort: at,
              week: Et,
              weekdays: Mt,
              weekdaysMin: jt,
              weekdaysShort: Lt,
              meridiemParse: nn,
            },
            ln = {},
            un = {};
          function cn(e, t) {
            var n,
              r = Math.min(e.length, t.length);
            for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
            return r;
          }
          function dn(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function fn(e) {
            for (var t, n, r, a, i = 0; i < e.length; ) {
              for (
                t = (a = dn(e[i]).split("-")).length,
                  n = (n = dn(e[i + 1])) ? n.split("-") : null;
                t > 0;

              ) {
                if ((r = pn(a.slice(0, t).join("-")))) return r;
                if (n && n.length >= t && cn(a, n) >= t - 1) break;
                t--;
              }
              i++;
            }
            return on;
          }
          function hn(e) {
            return !(!e || !e.match("^[^/\\\\]*$"));
          }
          function pn(t) {
            var n = null;
            if (void 0 === ln[t] && e && e.exports && hn(t))
              try {
                (n = on._abbr),
                  Object(
                    (function () {
                      var e = new Error("Cannot find module 'undefined'");
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })()
                  ),
                  mn(n);
              } catch (r) {
                ln[t] = null;
              }
            return ln[t];
          }
          function mn(e, t) {
            var n;
            return (
              e &&
                ((n = u(t) ? vn(e) : gn(e, t))
                  ? (on = n)
                  : "undefined" !== typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              on._abbr
            );
          }
          function gn(e, t) {
            if (null !== t) {
              var n,
                r = sn;
              if (((t.abbr = e), null != ln[e]))
                O(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (r = ln[e]._config);
              else if (null != t.parentLocale)
                if (null != ln[t.parentLocale]) r = ln[t.parentLocale]._config;
                else {
                  if (null == (n = pn(t.parentLocale)))
                    return (
                      un[t.parentLocale] || (un[t.parentLocale] = []),
                      un[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  r = n._config;
                }
              return (
                (ln[e] = new P(D(r, t))),
                un[e] &&
                  un[e].forEach(function (e) {
                    gn(e.name, e.config);
                  }),
                mn(e),
                ln[e]
              );
            }
            return delete ln[e], null;
          }
          function yn(e, t) {
            if (null != t) {
              var n,
                r,
                a = sn;
              null != ln[e] && null != ln[e].parentLocale
                ? ln[e].set(D(ln[e]._config, t))
                : (null != (r = pn(e)) && (a = r._config),
                  (t = D(a, t)),
                  null == r && (t.abbr = e),
                  ((n = new P(t)).parentLocale = ln[e]),
                  (ln[e] = n)),
                mn(e);
            } else
              null != ln[e] &&
                (null != ln[e].parentLocale
                  ? ((ln[e] = ln[e].parentLocale), e === mn() && mn(e))
                  : null != ln[e] && delete ln[e]);
            return ln[e];
          }
          function vn(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return on;
            if (!i(e)) {
              if ((t = pn(e))) return t;
              e = [e];
            }
            return fn(e);
          }
          function bn() {
            return C(ln);
          }
          function wn(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === g(e).overflow &&
                ((t =
                  n[Fe] < 0 || n[Fe] > 11
                    ? Fe
                    : n[ze] < 1 || n[ze] > nt(n[Ue], n[Fe])
                    ? ze
                    : n[Ye] < 0 ||
                      n[Ye] > 24 ||
                      (24 === n[Ye] &&
                        (0 !== n[Ie] || 0 !== n[Be] || 0 !== n[We]))
                    ? Ye
                    : n[Ie] < 0 || n[Ie] > 59
                    ? Ie
                    : n[Be] < 0 || n[Be] > 59
                    ? Be
                    : n[We] < 0 || n[We] > 999
                    ? We
                    : -1),
                g(e)._overflowDayOfYear && (t < Ue || t > ze) && (t = ze),
                g(e)._overflowWeeks && -1 === t && (t = He),
                g(e)._overflowWeekday && -1 === t && (t = Ve),
                (g(e).overflow = t)),
              e
            );
          }
          var kn =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            _n =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Sn = /Z|[+-]\d\d(?::?\d\d)?/,
            xn = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
              ["YYYYMM", /\d{6}/, !1],
              ["YYYY", /\d{4}/, !1],
            ],
            En = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            Cn = /^\/?Date\((-?\d+)/i,
            Nn =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            On = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          function Tn(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              s = e._i,
              l = kn.exec(s) || _n.exec(s),
              u = xn.length,
              c = En.length;
            if (l) {
              for (g(e).iso = !0, t = 0, n = u; t < n; t++)
                if (xn[t][1].exec(l[1])) {
                  (a = xn[t][0]), (r = !1 !== xn[t][2]);
                  break;
                }
              if (null == a) return void (e._isValid = !1);
              if (l[3]) {
                for (t = 0, n = c; t < n; t++)
                  if (En[t][1].exec(l[3])) {
                    i = (l[2] || " ") + En[t][0];
                    break;
                  }
                if (null == i) return void (e._isValid = !1);
              }
              if (!r && null != i) return void (e._isValid = !1);
              if (l[4]) {
                if (!Sn.exec(l[4])) return void (e._isValid = !1);
                o = "Z";
              }
              (e._f = a + (i || "") + (o || "")), In(e);
            } else e._isValid = !1;
          }
          function Rn(e, t, n, r, a, i) {
            var o = [
              Dn(e),
              at.indexOf(t),
              parseInt(n, 10),
              parseInt(r, 10),
              parseInt(a, 10),
            ];
            return i && o.push(parseInt(i, 10)), o;
          }
          function Dn(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          function Pn(e) {
            return e
              .replace(/\([^()]*\)|[\n\t]/g, " ")
              .replace(/(\s\s+)/g, " ")
              .replace(/^\s\s*/, "")
              .replace(/\s\s*$/, "");
          }
          function Mn(e, t, n) {
            return (
              !e ||
              Lt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
              ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
            );
          }
          function Ln(e, t, n) {
            if (e) return On[e];
            if (t) return 0;
            var r = parseInt(n, 10),
              a = r % 100;
            return ((r - a) / 100) * 60 + a;
          }
          function jn(e) {
            var t,
              n = Nn.exec(Pn(e._i));
            if (n) {
              if (
                ((t = Rn(n[4], n[3], n[2], n[5], n[6], n[7])), !Mn(n[1], t, e))
              )
                return;
              (e._a = t),
                (e._tzm = Ln(n[8], n[9], n[10])),
                (e._d = bt.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (g(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function An(e) {
            var t = Cn.exec(e._i);
            null === t
              ? (Tn(e),
                !1 === e._isValid &&
                  (delete e._isValid,
                  jn(e),
                  !1 === e._isValid &&
                    (delete e._isValid,
                    e._strict
                      ? (e._isValid = !1)
                      : r.createFromInputFallback(e))))
              : (e._d = new Date(+t[1]));
          }
          function Un(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function Fn(e) {
            var t = new Date(r.now());
            return e._useUTC
              ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
              : [t.getFullYear(), t.getMonth(), t.getDate()];
          }
          function zn(e) {
            var t,
              n,
              r,
              a,
              i,
              o = [];
            if (!e._d) {
              for (
                r = Fn(e),
                  e._w && null == e._a[ze] && null == e._a[Fe] && Yn(e),
                  null != e._dayOfYear &&
                    ((i = Un(e._a[Ue], r[Ue])),
                    (e._dayOfYear > qe(i) || 0 === e._dayOfYear) &&
                      (g(e)._overflowDayOfYear = !0),
                    (n = bt(i, 0, e._dayOfYear)),
                    (e._a[Fe] = n.getUTCMonth()),
                    (e._a[ze] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = o[t] = r[t];
              for (; t < 7; t++)
                e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Ye] &&
                0 === e._a[Ie] &&
                0 === e._a[Be] &&
                0 === e._a[We] &&
                ((e._nextDay = !0), (e._a[Ye] = 0)),
                (e._d = (e._useUTC ? bt : vt).apply(null, o)),
                (a = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Ye] = 24),
                e._w &&
                  "undefined" !== typeof e._w.d &&
                  e._w.d !== a &&
                  (g(e).weekdayMismatch = !0);
            }
          }
          function Yn(e) {
            var t, n, r, a, i, o, s, l, u;
            null != (t = e._w).GG || null != t.W || null != t.E
              ? ((i = 1),
                (o = 4),
                (n = Un(t.GG, e._a[Ue], _t(Qn(), 1, 4).year)),
                (r = Un(t.W, 1)),
                ((a = Un(t.E, 1)) < 1 || a > 7) && (l = !0))
              : ((i = e._locale._week.dow),
                (o = e._locale._week.doy),
                (u = _t(Qn(), i, o)),
                (n = Un(t.gg, e._a[Ue], u.year)),
                (r = Un(t.w, u.week)),
                null != t.d
                  ? ((a = t.d) < 0 || a > 6) && (l = !0)
                  : null != t.e
                  ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
                  : (a = i)),
              r < 1 || r > St(n, i, o)
                ? (g(e)._overflowWeeks = !0)
                : null != l
                ? (g(e)._overflowWeekday = !0)
                : ((s = kt(n, r, a, i, o)),
                  (e._a[Ue] = s.year),
                  (e._dayOfYear = s.dayOfYear));
          }
          function In(e) {
            if (e._f !== r.ISO_8601)
              if (e._f !== r.RFC_2822) {
                (e._a = []), (g(e).empty = !0);
                var t,
                  n,
                  a,
                  i,
                  o,
                  s,
                  l,
                  u = "" + e._i,
                  c = u.length,
                  d = 0;
                for (
                  l = (a = H(e._f, e._locale).match(A) || []).length, t = 0;
                  t < l;
                  t++
                )
                  (i = a[t]),
                    (n = (u.match(Ne(i, e)) || [])[0]) &&
                      ((o = u.substr(0, u.indexOf(n))).length > 0 &&
                        g(e).unusedInput.push(o),
                      (u = u.slice(u.indexOf(n) + n.length)),
                      (d += n.length)),
                    z[i]
                      ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(i),
                        je(i, n, e))
                      : e._strict && !n && g(e).unusedTokens.push(i);
                (g(e).charsLeftOver = c - d),
                  u.length > 0 && g(e).unusedInput.push(u),
                  e._a[Ye] <= 12 &&
                    !0 === g(e).bigHour &&
                    e._a[Ye] > 0 &&
                    (g(e).bigHour = void 0),
                  (g(e).parsedDateParts = e._a.slice(0)),
                  (g(e).meridiem = e._meridiem),
                  (e._a[Ye] = Bn(e._locale, e._a[Ye], e._meridiem)),
                  null !== (s = g(e).era) &&
                    (e._a[Ue] = e._locale.erasConvertYear(s, e._a[Ue])),
                  zn(e),
                  wn(e);
              } else jn(e);
            else Tn(e);
          }
          function Bn(e, t, n) {
            var r;
            return null == n
              ? t
              : null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : null != e.isPM
              ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                r || 12 !== t || (t = 0),
                t)
              : t;
          }
          function Wn(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              s = !1,
              l = e._f.length;
            if (0 === l)
              return (g(e).invalidFormat = !0), void (e._d = new Date(NaN));
            for (a = 0; a < l; a++)
              (i = 0),
                (o = !1),
                (t = k({}, e)),
                null != e._useUTC && (t._useUTC = e._useUTC),
                (t._f = e._f[a]),
                In(t),
                y(t) && (o = !0),
                (i += g(t).charsLeftOver),
                (i += 10 * g(t).unusedTokens.length),
                (g(t).score = i),
                s
                  ? i < r && ((r = i), (n = t))
                  : (null == r || i < r || o) &&
                    ((r = i), (n = t), o && (s = !0));
            h(e, n || t);
          }
          function Hn(e) {
            if (!e._d) {
              var t = re(e._i),
                n = void 0 === t.day ? t.date : t.day;
              (e._a = f(
                [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
                function (e) {
                  return e && parseInt(e, 10);
                }
              )),
                zn(e);
            }
          }
          function Vn(e) {
            var t = new _(wn(qn(e)));
            return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
          }
          function qn(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || vn(e._l)),
              null === t || (void 0 === n && "" === t)
                ? v({ nullInput: !0 })
                : ("string" === typeof t && (e._i = t = e._locale.preparse(t)),
                  S(t)
                    ? new _(wn(t))
                    : (d(t) ? (e._d = t) : i(n) ? Wn(e) : n ? In(e) : $n(e),
                      y(e) || (e._d = null),
                      e))
            );
          }
          function $n(e) {
            var t = e._i;
            u(t)
              ? (e._d = new Date(r.now()))
              : d(t)
              ? (e._d = new Date(t.valueOf()))
              : "string" === typeof t
              ? An(e)
              : i(t)
              ? ((e._a = f(t.slice(0), function (e) {
                  return parseInt(e, 10);
                })),
                zn(e))
              : o(t)
              ? Hn(e)
              : c(t)
              ? (e._d = new Date(t))
              : r.createFromInputFallback(e);
          }
          function Gn(e, t, n, r, a) {
            var s = {};
            return (
              (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
              (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
              ((o(e) && l(e)) || (i(e) && 0 === e.length)) && (e = void 0),
              (s._isAMomentObject = !0),
              (s._useUTC = s._isUTC = a),
              (s._l = n),
              (s._i = e),
              (s._f = t),
              (s._strict = r),
              Vn(s)
            );
          }
          function Qn(e, t, n, r) {
            return Gn(e, t, n, r, !1);
          }
          (r.createFromInputFallback = E(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (r.ISO_8601 = function () {}),
            (r.RFC_2822 = function () {});
          var Kn = E(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Qn.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : v();
              }
            ),
            Jn = E(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Qn.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : v();
              }
            );
          function Zn(e, t) {
            var n, r;
            if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length))
              return Qn();
            for (n = t[0], r = 1; r < t.length; ++r)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          }
          function Xn() {
            return Zn("isBefore", [].slice.call(arguments, 0));
          }
          function er() {
            return Zn("isAfter", [].slice.call(arguments, 0));
          }
          var tr = function () {
              return Date.now ? Date.now() : +new Date();
            },
            nr = [
              "year",
              "quarter",
              "month",
              "week",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond",
            ];
          function rr(e) {
            var t,
              n,
              r = !1,
              a = nr.length;
            for (t in e)
              if (
                s(e, t) &&
                (-1 === $e.call(nr, t) || (null != e[t] && isNaN(e[t])))
              )
                return !1;
            for (n = 0; n < a; ++n)
              if (e[nr[n]]) {
                if (r) return !1;
                parseFloat(e[nr[n]]) !== De(e[nr[n]]) && (r = !0);
              }
            return !0;
          }
          function ar() {
            return this._isValid;
          }
          function ir() {
            return Or(NaN);
          }
          function or(e) {
            var t = re(e),
              n = t.year || 0,
              r = t.quarter || 0,
              a = t.month || 0,
              i = t.week || t.isoWeek || 0,
              o = t.day || 0,
              s = t.hour || 0,
              l = t.minute || 0,
              u = t.second || 0,
              c = t.millisecond || 0;
            (this._isValid = rr(t)),
              (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60),
              (this._days = +o + 7 * i),
              (this._months = +a + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = vn()),
              this._bubble();
          }
          function sr(e) {
            return e instanceof or;
          }
          function lr(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function ur(e, t, n) {
            var r,
              a = Math.min(e.length, t.length),
              i = Math.abs(e.length - t.length),
              o = 0;
            for (r = 0; r < a; r++)
              ((n && e[r] !== t[r]) || (!n && De(e[r]) !== De(t[r]))) && o++;
            return o + i;
          }
          function cr(e, t) {
            Y(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
              );
            });
          }
          cr("Z", ":"),
            cr("ZZ", ""),
            Ce("Z", ke),
            Ce("ZZ", ke),
            Me(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = fr(ke, e));
            });
          var dr = /([\+\-]|\d\d)/gi;
          function fr(e, t) {
            var n,
              r,
              a = (t || "").match(e);
            return null === a
              ? null
              : 0 ===
                (r =
                  60 *
                    (n = ((a[a.length - 1] || []) + "").match(dr) || [
                      "-",
                      0,
                      0,
                    ])[1] +
                  De(n[2]))
              ? 0
              : "+" === n[0]
              ? r
              : -r;
          }
          function hr(e, t) {
            var n, a;
            return t._isUTC
              ? ((n = t.clone()),
                (a =
                  (S(e) || d(e) ? e.valueOf() : Qn(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + a),
                r.updateOffset(n, !1),
                n)
              : Qn(e).local();
          }
          function pr(e) {
            return -Math.round(e._d.getTimezoneOffset());
          }
          function mr(e, t, n) {
            var a,
              i = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" === typeof e) {
                if (null === (e = fr(ke, e))) return this;
              } else Math.abs(e) < 16 && !n && (e *= 60);
              return (
                !this._isUTC && t && (a = pr(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != a && this.add(a, "m"),
                i !== e &&
                  (!t || this._changeInProgress
                    ? Mr(this, Or(e - i, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      r.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? i : pr(this);
          }
          function gr(e, t) {
            return null != e
              ? ("string" !== typeof e && (e = -e), this.utcOffset(e, t), this)
              : -this.utcOffset();
          }
          function yr(e) {
            return this.utcOffset(0, e);
          }
          function vr(e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(pr(this), "m")),
              this
            );
          }
          function br() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" === typeof this._i) {
              var e = fr(we, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
          }
          function wr(e) {
            return (
              !!this.isValid() &&
              ((e = e ? Qn(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 === 0)
            );
          }
          function kr() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }
          function _r() {
            if (!u(this._isDSTShifted)) return this._isDSTShifted;
            var e,
              t = {};
            return (
              k(t, this),
              (t = qn(t))._a
                ? ((e = t._isUTC ? p(t._a) : Qn(t._a)),
                  (this._isDSTShifted =
                    this.isValid() && ur(t._a, e.toArray()) > 0))
                : (this._isDSTShifted = !1),
              this._isDSTShifted
            );
          }
          function Sr() {
            return !!this.isValid() && !this._isUTC;
          }
          function xr() {
            return !!this.isValid() && this._isUTC;
          }
          function Er() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          r.updateOffset = function () {};
          var Cr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Nr =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Or(e, t) {
            var n,
              r,
              a,
              i = e,
              o = null;
            return (
              sr(e)
                ? (i = { ms: e._milliseconds, d: e._days, M: e._months })
                : c(e) || !isNaN(+e)
                ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
                : (o = Cr.exec(e))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (i = {
                    y: 0,
                    d: De(o[ze]) * n,
                    h: De(o[Ye]) * n,
                    m: De(o[Ie]) * n,
                    s: De(o[Be]) * n,
                    ms: De(lr(1e3 * o[We])) * n,
                  }))
                : (o = Nr.exec(e))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (i = {
                    y: Tr(o[2], n),
                    M: Tr(o[3], n),
                    w: Tr(o[4], n),
                    d: Tr(o[5], n),
                    h: Tr(o[6], n),
                    m: Tr(o[7], n),
                    s: Tr(o[8], n),
                  }))
                : null == i
                ? (i = {})
                : "object" === typeof i &&
                  ("from" in i || "to" in i) &&
                  ((a = Dr(Qn(i.from), Qn(i.to))),
                  ((i = {}).ms = a.milliseconds),
                  (i.M = a.months)),
              (r = new or(i)),
              sr(e) && s(e, "_locale") && (r._locale = e._locale),
              sr(e) && s(e, "_isValid") && (r._isValid = e._isValid),
              r
            );
          }
          function Tr(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function Rr(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function Dr(e, t) {
            var n;
            return e.isValid() && t.isValid()
              ? ((t = hr(t, e)),
                e.isBefore(t)
                  ? (n = Rr(e, t))
                  : (((n = Rr(t, e)).milliseconds = -n.milliseconds),
                    (n.months = -n.months)),
                n)
              : { milliseconds: 0, months: 0 };
          }
          function Pr(e, t) {
            return function (n, r) {
              var a;
              return (
                null === r ||
                  isNaN(+r) ||
                  (O(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (a = n),
                  (n = r),
                  (r = a)),
                Mr(this, Or(n, r), e),
                this
              );
            };
          }
          function Mr(e, t, n, a) {
            var i = t._milliseconds,
              o = lr(t._days),
              s = lr(t._months);
            e.isValid() &&
              ((a = null == a || a),
              s && ft(e, Je(e, "Month") + s * n),
              o && Ze(e, "Date", Je(e, "Date") + o * n),
              i && e._d.setTime(e._d.valueOf() + i * n),
              a && r.updateOffset(e, o || s));
          }
          (Or.fn = or.prototype), (Or.invalid = ir);
          var Lr = Pr(1, "add"),
            jr = Pr(-1, "subtract");
          function Ar(e) {
            return "string" === typeof e || e instanceof String;
          }
          function Ur(e) {
            return (
              S(e) ||
              d(e) ||
              Ar(e) ||
              c(e) ||
              zr(e) ||
              Fr(e) ||
              null === e ||
              void 0 === e
            );
          }
          function Fr(e) {
            var t,
              n,
              r = o(e) && !l(e),
              a = !1,
              i = [
                "years",
                "year",
                "y",
                "months",
                "month",
                "M",
                "days",
                "day",
                "d",
                "dates",
                "date",
                "D",
                "hours",
                "hour",
                "h",
                "minutes",
                "minute",
                "m",
                "seconds",
                "second",
                "s",
                "milliseconds",
                "millisecond",
                "ms",
              ],
              u = i.length;
            for (t = 0; t < u; t += 1) (n = i[t]), (a = a || s(e, n));
            return r && a;
          }
          function zr(e) {
            var t = i(e),
              n = !1;
            return (
              t &&
                (n =
                  0 ===
                  e.filter(function (t) {
                    return !c(t) && Ar(e);
                  }).length),
              t && n
            );
          }
          function Yr(e) {
            var t,
              n,
              r = o(e) && !l(e),
              a = !1,
              i = [
                "sameDay",
                "nextDay",
                "lastDay",
                "nextWeek",
                "lastWeek",
                "sameElse",
              ];
            for (t = 0; t < i.length; t += 1) (n = i[t]), (a = a || s(e, n));
            return r && a;
          }
          function Ir(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }
          function Br(e, t) {
            1 === arguments.length &&
              (arguments[0]
                ? Ur(arguments[0])
                  ? ((e = arguments[0]), (t = void 0))
                  : Yr(arguments[0]) && ((t = arguments[0]), (e = void 0))
                : ((e = void 0), (t = void 0)));
            var n = e || Qn(),
              a = hr(n, this).startOf("day"),
              i = r.calendarFormat(this, a) || "sameElse",
              o = t && (T(t[i]) ? t[i].call(this, n) : t[i]);
            return this.format(o || this.localeData().calendar(i, this, Qn(n)));
          }
          function Wr() {
            return new _(this);
          }
          function Hr(e, t) {
            var n = S(e) ? e : Qn(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = ne(t) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(t).valueOf())
            );
          }
          function Vr(e, t) {
            var n = S(e) ? e : Qn(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = ne(t) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(t).valueOf() < n.valueOf())
            );
          }
          function qr(e, t, n, r) {
            var a = S(e) ? e : Qn(e),
              i = S(t) ? t : Qn(t);
            return (
              !!(this.isValid() && a.isValid() && i.isValid()) &&
              ("(" === (r = r || "()")[0]
                ? this.isAfter(a, n)
                : !this.isBefore(a, n)) &&
              (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
            );
          }
          function $r(e, t) {
            var n,
              r = S(e) ? e : Qn(e);
            return (
              !(!this.isValid() || !r.isValid()) &&
              ("millisecond" === (t = ne(t) || "millisecond")
                ? this.valueOf() === r.valueOf()
                : ((n = r.valueOf()),
                  this.clone().startOf(t).valueOf() <= n &&
                    n <= this.clone().endOf(t).valueOf()))
            );
          }
          function Gr(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }
          function Qr(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }
          function Kr(e, t, n) {
            var r, a, i;
            if (!this.isValid()) return NaN;
            if (!(r = hr(e, this)).isValid()) return NaN;
            switch (
              ((a = 6e4 * (r.utcOffset() - this.utcOffset())), (t = ne(t)))
            ) {
              case "year":
                i = Jr(this, r) / 12;
                break;
              case "month":
                i = Jr(this, r);
                break;
              case "quarter":
                i = Jr(this, r) / 3;
                break;
              case "second":
                i = (this - r) / 1e3;
                break;
              case "minute":
                i = (this - r) / 6e4;
                break;
              case "hour":
                i = (this - r) / 36e5;
                break;
              case "day":
                i = (this - r - a) / 864e5;
                break;
              case "week":
                i = (this - r - a) / 6048e5;
                break;
              default:
                i = this - r;
            }
            return n ? i : Re(i);
          }
          function Jr(e, t) {
            if (e.date() < t.date()) return -Jr(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(n, "months");
            return (
              -(
                n +
                (t - r < 0
                  ? (t - r) / (r - e.clone().add(n - 1, "months"))
                  : (t - r) / (e.clone().add(n + 1, "months") - r))
              ) || 0
            );
          }
          function Zr() {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }
          function Xr(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? W(
                  n,
                  t
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : T(Date.prototype.toISOString)
              ? t
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", W(n, "Z"))
              : W(
                  n,
                  t
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }
          function ea() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e,
              t,
              n,
              r,
              a = "moment",
              i = "";
            return (
              this.isLocal() ||
                ((a =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (i = "Z")),
              (e = "[" + a + '("]'),
              (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              (n = "-MM-DD[T]HH:mm:ss.SSS"),
              (r = i + '[")]'),
              this.format(e + t + n + r)
            );
          }
          function ta(e) {
            e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
            var t = W(this, e);
            return this.localeData().postformat(t);
          }
          function na(e, t) {
            return this.isValid() && ((S(e) && e.isValid()) || Qn(e).isValid())
              ? Or({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function ra(e) {
            return this.from(Qn(), e);
          }
          function aa(e, t) {
            return this.isValid() && ((S(e) && e.isValid()) || Qn(e).isValid())
              ? Or({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function ia(e) {
            return this.to(Qn(), e);
          }
          function oa(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = vn(e)) && (this._locale = t), this);
          }
          (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var sa = E(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function la() {
            return this._locale;
          }
          var ua = 1e3,
            ca = 60 * ua,
            da = 60 * ca,
            fa = 3506328 * da;
          function ha(e, t) {
            return ((e % t) + t) % t;
          }
          function pa(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - fa
              : new Date(e, t, n).valueOf();
          }
          function ma(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - fa
              : Date.UTC(e, t, n);
          }
          function ga(e) {
            var t, n;
            if (
              void 0 === (e = ne(e)) ||
              "millisecond" === e ||
              !this.isValid()
            )
              return this;
            switch (((n = this._isUTC ? ma : pa), e)) {
              case "year":
                t = n(this.year(), 0, 1);
                break;
              case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                t = n(this.year(), this.month(), 1);
                break;
              case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                t = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t -= ha(t + (this._isUTC ? 0 : this.utcOffset() * ca), da));
                break;
              case "minute":
                (t = this._d.valueOf()), (t -= ha(t, ca));
                break;
              case "second":
                (t = this._d.valueOf()), (t -= ha(t, ua));
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }
          function ya(e) {
            var t, n;
            if (
              void 0 === (e = ne(e)) ||
              "millisecond" === e ||
              !this.isValid()
            )
              return this;
            switch (((n = this._isUTC ? ma : pa), e)) {
              case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                t =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t +=
                    da -
                    ha(t + (this._isUTC ? 0 : this.utcOffset() * ca), da) -
                    1);
                break;
              case "minute":
                (t = this._d.valueOf()), (t += ca - ha(t, ca) - 1);
                break;
              case "second":
                (t = this._d.valueOf()), (t += ua - ha(t, ua) - 1);
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }
          function va() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }
          function ba() {
            return Math.floor(this.valueOf() / 1e3);
          }
          function wa() {
            return new Date(this.valueOf());
          }
          function ka() {
            var e = this;
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond(),
            ];
          }
          function _a() {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds(),
            };
          }
          function Sa() {
            return this.isValid() ? this.toISOString() : null;
          }
          function xa() {
            return y(this);
          }
          function Ea() {
            return h({}, g(this));
          }
          function Ca() {
            return g(this).overflow;
          }
          function Na() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }
          function Oa(e, t) {
            var n,
              a,
              i,
              o = this._eras || vn("en")._eras;
            for (n = 0, a = o.length; n < a; ++n)
              switch (
                ("string" === typeof o[n].since &&
                  ((i = r(o[n].since).startOf("day")),
                  (o[n].since = i.valueOf())),
                typeof o[n].until)
              ) {
                case "undefined":
                  o[n].until = 1 / 0;
                  break;
                case "string":
                  (i = r(o[n].until).startOf("day").valueOf()),
                    (o[n].until = i.valueOf());
              }
            return o;
          }
          function Ta(e, t, n) {
            var r,
              a,
              i,
              o,
              s,
              l = this.eras();
            for (e = e.toUpperCase(), r = 0, a = l.length; r < a; ++r)
              if (
                ((i = l[r].name.toUpperCase()),
                (o = l[r].abbr.toUpperCase()),
                (s = l[r].narrow.toUpperCase()),
                n)
              )
                switch (t) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (o === e) return l[r];
                    break;
                  case "NNNN":
                    if (i === e) return l[r];
                    break;
                  case "NNNNN":
                    if (s === e) return l[r];
                }
              else if ([i, o, s].indexOf(e) >= 0) return l[r];
          }
          function Ra(e, t) {
            var n = e.since <= e.until ? 1 : -1;
            return void 0 === t
              ? r(e.since).year()
              : r(e.since).year() + (t - e.offset) * n;
          }
          function Da() {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].name;
              if (r[e].until <= n && n <= r[e].since) return r[e].name;
            }
            return "";
          }
          function Pa() {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].narrow;
              if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
            }
            return "";
          }
          function Ma() {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].abbr;
              if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
            }
            return "";
          }
          function La() {
            var e,
              t,
              n,
              a,
              i = this.localeData().eras();
            for (e = 0, t = i.length; e < t; ++e)
              if (
                ((n = i[e].since <= i[e].until ? 1 : -1),
                (a = this.clone().startOf("day").valueOf()),
                (i[e].since <= a && a <= i[e].until) ||
                  (i[e].until <= a && a <= i[e].since))
              )
                return (this.year() - r(i[e].since).year()) * n + i[e].offset;
            return this.year();
          }
          function ja(e) {
            return (
              s(this, "_erasNameRegex") || Ba.call(this),
              e ? this._erasNameRegex : this._erasRegex
            );
          }
          function Aa(e) {
            return (
              s(this, "_erasAbbrRegex") || Ba.call(this),
              e ? this._erasAbbrRegex : this._erasRegex
            );
          }
          function Ua(e) {
            return (
              s(this, "_erasNarrowRegex") || Ba.call(this),
              e ? this._erasNarrowRegex : this._erasRegex
            );
          }
          function Fa(e, t) {
            return t.erasAbbrRegex(e);
          }
          function za(e, t) {
            return t.erasNameRegex(e);
          }
          function Ya(e, t) {
            return t.erasNarrowRegex(e);
          }
          function Ia(e, t) {
            return t._eraYearOrdinalRegex || ve;
          }
          function Ba() {
            var e,
              t,
              n,
              r,
              a,
              i = [],
              o = [],
              s = [],
              l = [],
              u = this.eras();
            for (e = 0, t = u.length; e < t; ++e)
              (n = Te(u[e].name)),
                (r = Te(u[e].abbr)),
                (a = Te(u[e].narrow)),
                o.push(n),
                i.push(r),
                s.push(a),
                l.push(n),
                l.push(r),
                l.push(a);
            (this._erasRegex = new RegExp("^(" + l.join("|") + ")", "i")),
              (this._erasNameRegex = new RegExp("^(" + o.join("|") + ")", "i")),
              (this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i")),
              (this._erasNarrowRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              ));
          }
          function Wa(e, t) {
            Y(0, [e, e.length], 0, t);
          }
          function Ha(e) {
            return Ka.call(
              this,
              e,
              this.week(),
              this.weekday() + this.localeData()._week.dow,
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }
          function Va(e) {
            return Ka.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function qa() {
            return St(this.year(), 1, 4);
          }
          function $a() {
            return St(this.isoWeekYear(), 1, 4);
          }
          function Ga() {
            var e = this.localeData()._week;
            return St(this.year(), e.dow, e.doy);
          }
          function Qa() {
            var e = this.localeData()._week;
            return St(this.weekYear(), e.dow, e.doy);
          }
          function Ka(e, t, n, r, a) {
            var i;
            return null == e
              ? _t(this, r, a).year
              : (t > (i = St(e, r, a)) && (t = i),
                Ja.call(this, e, t, n, r, a));
          }
          function Ja(e, t, n, r, a) {
            var i = kt(e, t, n, r, a),
              o = bt(i.year, 0, i.dayOfYear);
            return (
              this.year(o.getUTCFullYear()),
              this.month(o.getUTCMonth()),
              this.date(o.getUTCDate()),
              this
            );
          }
          function Za(e) {
            return null == e
              ? Math.ceil((this.month() + 1) / 3)
              : this.month(3 * (e - 1) + (this.month() % 3));
          }
          Y("N", 0, 0, "eraAbbr"),
            Y("NN", 0, 0, "eraAbbr"),
            Y("NNN", 0, 0, "eraAbbr"),
            Y("NNNN", 0, 0, "eraName"),
            Y("NNNNN", 0, 0, "eraNarrow"),
            Y("y", ["y", 1], "yo", "eraYear"),
            Y("y", ["yy", 2], 0, "eraYear"),
            Y("y", ["yyy", 3], 0, "eraYear"),
            Y("y", ["yyyy", 4], 0, "eraYear"),
            Ce("N", Fa),
            Ce("NN", Fa),
            Ce("NNN", Fa),
            Ce("NNNN", za),
            Ce("NNNNN", Ya),
            Me(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
              var a = n._locale.erasParse(e, r, n._strict);
              a ? (g(n).era = a) : (g(n).invalidEra = e);
            }),
            Ce("y", ve),
            Ce("yy", ve),
            Ce("yyy", ve),
            Ce("yyyy", ve),
            Ce("yo", Ia),
            Me(["y", "yy", "yyy", "yyyy"], Ue),
            Me(["yo"], function (e, t, n, r) {
              var a;
              n._locale._eraYearOrdinalRegex &&
                (a = e.match(n._locale._eraYearOrdinalRegex)),
                n._locale.eraYearOrdinalParse
                  ? (t[Ue] = n._locale.eraYearOrdinalParse(e, a))
                  : (t[Ue] = parseInt(e, 10));
            }),
            Y(0, ["gg", 2], 0, function () {
              return this.weekYear() % 100;
            }),
            Y(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            Wa("gggg", "weekYear"),
            Wa("ggggg", "weekYear"),
            Wa("GGGG", "isoWeekYear"),
            Wa("GGGGG", "isoWeekYear"),
            Ce("G", be),
            Ce("g", be),
            Ce("GG", fe, le),
            Ce("gg", fe, le),
            Ce("GGGG", ge, ce),
            Ce("gggg", ge, ce),
            Ce("GGGGG", ye, de),
            Ce("ggggg", ye, de),
            Le(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
              t[r.substr(0, 2)] = De(e);
            }),
            Le(["gg", "GG"], function (e, t, n, a) {
              t[a] = r.parseTwoDigitYear(e);
            }),
            Y("Q", 0, "Qo", "quarter"),
            Ce("Q", se),
            Me("Q", function (e, t) {
              t[Fe] = 3 * (De(e) - 1);
            }),
            Y("D", ["DD", 2], "Do", "date"),
            Ce("D", fe, xe),
            Ce("DD", fe, le),
            Ce("Do", function (e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            Me(["D", "DD"], ze),
            Me("Do", function (e, t) {
              t[ze] = De(e.match(fe)[0]);
            });
          var Xa = Ke("Date", !0);
          function ei(e) {
            var t =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == e ? t : this.add(e - t, "d");
          }
          Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            Ce("DDD", me),
            Ce("DDDD", ue),
            Me(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = De(e);
            }),
            Y("m", ["mm", 2], 0, "minute"),
            Ce("m", fe, Ee),
            Ce("mm", fe, le),
            Me(["m", "mm"], Ie);
          var ti = Ke("Minutes", !1);
          Y("s", ["ss", 2], 0, "second"),
            Ce("s", fe, Ee),
            Ce("ss", fe, le),
            Me(["s", "ss"], Be);
          var ni,
            ri,
            ai = Ke("Seconds", !1);
          for (
            Y("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              Y(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              Y(0, ["SSS", 3], 0, "millisecond"),
              Y(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              Y(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              Y(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              Y(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              Y(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              Y(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              Ce("S", me, se),
              Ce("SS", me, le),
              Ce("SSS", me, ue),
              ni = "SSSS";
            ni.length <= 9;
            ni += "S"
          )
            Ce(ni, ve);
          function ii(e, t) {
            t[We] = De(1e3 * ("0." + e));
          }
          for (ni = "S"; ni.length <= 9; ni += "S") Me(ni, ii);
          function oi() {
            return this._isUTC ? "UTC" : "";
          }
          function si() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          (ri = Ke("Milliseconds", !1)),
            Y("z", 0, 0, "zoneAbbr"),
            Y("zz", 0, 0, "zoneName");
          var li = _.prototype;
          function ui(e) {
            return Qn(1e3 * e);
          }
          function ci() {
            return Qn.apply(null, arguments).parseZone();
          }
          function di(e) {
            return e;
          }
          (li.add = Lr),
            (li.calendar = Br),
            (li.clone = Wr),
            (li.diff = Kr),
            (li.endOf = ya),
            (li.format = ta),
            (li.from = na),
            (li.fromNow = ra),
            (li.to = aa),
            (li.toNow = ia),
            (li.get = Xe),
            (li.invalidAt = Ca),
            (li.isAfter = Hr),
            (li.isBefore = Vr),
            (li.isBetween = qr),
            (li.isSame = $r),
            (li.isSameOrAfter = Gr),
            (li.isSameOrBefore = Qr),
            (li.isValid = xa),
            (li.lang = sa),
            (li.locale = oa),
            (li.localeData = la),
            (li.max = Jn),
            (li.min = Kn),
            (li.parsingFlags = Ea),
            (li.set = et),
            (li.startOf = ga),
            (li.subtract = jr),
            (li.toArray = ka),
            (li.toObject = _a),
            (li.toDate = wa),
            (li.toISOString = Xr),
            (li.inspect = ea),
            "undefined" !== typeof Symbol &&
              null != Symbol.for &&
              (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">";
              }),
            (li.toJSON = Sa),
            (li.toString = Zr),
            (li.unix = ba),
            (li.valueOf = va),
            (li.creationData = Na),
            (li.eraName = Da),
            (li.eraNarrow = Pa),
            (li.eraAbbr = Ma),
            (li.eraYear = La),
            (li.year = Ge),
            (li.isLeapYear = Qe),
            (li.weekYear = Ha),
            (li.isoWeekYear = Va),
            (li.quarter = li.quarters = Za),
            (li.month = ht),
            (li.daysInMonth = pt),
            (li.week = li.weeks = Ot),
            (li.isoWeek = li.isoWeeks = Tt),
            (li.weeksInYear = Ga),
            (li.weeksInWeekYear = Qa),
            (li.isoWeeksInYear = qa),
            (li.isoWeeksInISOWeekYear = $a),
            (li.date = Xa),
            (li.day = li.days = Ht),
            (li.weekday = Vt),
            (li.isoWeekday = qt),
            (li.dayOfYear = ei),
            (li.hour = li.hours = rn),
            (li.minute = li.minutes = ti),
            (li.second = li.seconds = ai),
            (li.millisecond = li.milliseconds = ri),
            (li.utcOffset = mr),
            (li.utc = yr),
            (li.local = vr),
            (li.parseZone = br),
            (li.hasAlignedHourOffset = wr),
            (li.isDST = kr),
            (li.isLocal = Sr),
            (li.isUtcOffset = xr),
            (li.isUtc = Er),
            (li.isUTC = Er),
            (li.zoneAbbr = oi),
            (li.zoneName = si),
            (li.dates = E(
              "dates accessor is deprecated. Use date instead.",
              Xa
            )),
            (li.months = E(
              "months accessor is deprecated. Use month instead",
              ht
            )),
            (li.years = E(
              "years accessor is deprecated. Use year instead",
              Ge
            )),
            (li.zone = E(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              gr
            )),
            (li.isDSTShifted = E(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              _r
            ));
          var fi = P.prototype;
          function hi(e, t, n, r) {
            var a = vn(),
              i = p().set(r, t);
            return a[n](i, e);
          }
          function pi(e, t, n) {
            if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return hi(e, t, n, "month");
            var r,
              a = [];
            for (r = 0; r < 12; r++) a[r] = hi(e, r, n, "month");
            return a;
          }
          function mi(e, t, n, r) {
            "boolean" === typeof e
              ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((n = t = e),
                (e = !1),
                c(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var a,
              i = vn(),
              o = e ? i._week.dow : 0,
              s = [];
            if (null != n) return hi(t, (n + o) % 7, r, "day");
            for (a = 0; a < 7; a++) s[a] = hi(t, (a + o) % 7, r, "day");
            return s;
          }
          function gi(e, t) {
            return pi(e, t, "months");
          }
          function yi(e, t) {
            return pi(e, t, "monthsShort");
          }
          function vi(e, t, n) {
            return mi(e, t, n, "weekdays");
          }
          function bi(e, t, n) {
            return mi(e, t, n, "weekdaysShort");
          }
          function wi(e, t, n) {
            return mi(e, t, n, "weekdaysMin");
          }
          (fi.calendar = L),
            (fi.longDateFormat = q),
            (fi.invalidDate = G),
            (fi.ordinal = J),
            (fi.preparse = di),
            (fi.postformat = di),
            (fi.relativeTime = X),
            (fi.pastFuture = ee),
            (fi.set = R),
            (fi.eras = Oa),
            (fi.erasParse = Ta),
            (fi.erasConvertYear = Ra),
            (fi.erasAbbrRegex = Aa),
            (fi.erasNameRegex = ja),
            (fi.erasNarrowRegex = Ua),
            (fi.months = lt),
            (fi.monthsShort = ut),
            (fi.monthsParse = dt),
            (fi.monthsRegex = gt),
            (fi.monthsShortRegex = mt),
            (fi.week = xt),
            (fi.firstDayOfYear = Nt),
            (fi.firstDayOfWeek = Ct),
            (fi.weekdays = zt),
            (fi.weekdaysMin = It),
            (fi.weekdaysShort = Yt),
            (fi.weekdaysParse = Wt),
            (fi.weekdaysRegex = $t),
            (fi.weekdaysShortRegex = Gt),
            (fi.weekdaysMinRegex = Qt),
            (fi.isPM = tn),
            (fi.meridiem = an),
            mn("en", {
              eras: [
                {
                  since: "0001-01-01",
                  until: 1 / 0,
                  offset: 1,
                  name: "Anno Domini",
                  narrow: "AD",
                  abbr: "AD",
                },
                {
                  since: "0000-12-31",
                  until: -1 / 0,
                  offset: 1,
                  name: "Before Christ",
                  narrow: "BC",
                  abbr: "BC",
                },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return (
                  e +
                  (1 === De((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th")
                );
              },
            }),
            (r.lang = E(
              "moment.lang is deprecated. Use moment.locale instead.",
              mn
            )),
            (r.langData = E(
              "moment.langData is deprecated. Use moment.localeData instead.",
              vn
            ));
          var ki = Math.abs;
          function _i() {
            var e = this._data;
            return (
              (this._milliseconds = ki(this._milliseconds)),
              (this._days = ki(this._days)),
              (this._months = ki(this._months)),
              (e.milliseconds = ki(e.milliseconds)),
              (e.seconds = ki(e.seconds)),
              (e.minutes = ki(e.minutes)),
              (e.hours = ki(e.hours)),
              (e.months = ki(e.months)),
              (e.years = ki(e.years)),
              this
            );
          }
          function Si(e, t, n, r) {
            var a = Or(t, n);
            return (
              (e._milliseconds += r * a._milliseconds),
              (e._days += r * a._days),
              (e._months += r * a._months),
              e._bubble()
            );
          }
          function xi(e, t) {
            return Si(this, e, t, 1);
          }
          function Ei(e, t) {
            return Si(this, e, t, -1);
          }
          function Ci(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function Ni() {
            var e,
              t,
              n,
              r,
              a,
              i = this._milliseconds,
              o = this._days,
              s = this._months,
              l = this._data;
            return (
              (i >= 0 && o >= 0 && s >= 0) ||
                (i <= 0 && o <= 0 && s <= 0) ||
                ((i += 864e5 * Ci(Ti(s) + o)), (o = 0), (s = 0)),
              (l.milliseconds = i % 1e3),
              (e = Re(i / 1e3)),
              (l.seconds = e % 60),
              (t = Re(e / 60)),
              (l.minutes = t % 60),
              (n = Re(t / 60)),
              (l.hours = n % 24),
              (o += Re(n / 24)),
              (s += a = Re(Oi(o))),
              (o -= Ci(Ti(a))),
              (r = Re(s / 12)),
              (s %= 12),
              (l.days = o),
              (l.months = s),
              (l.years = r),
              this
            );
          }
          function Oi(e) {
            return (4800 * e) / 146097;
          }
          function Ti(e) {
            return (146097 * e) / 4800;
          }
          function Ri(e) {
            if (!this.isValid()) return NaN;
            var t,
              n,
              r = this._milliseconds;
            if ("month" === (e = ne(e)) || "quarter" === e || "year" === e)
              switch (
                ((t = this._days + r / 864e5), (n = this._months + Oi(t)), e)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((t = this._days + Math.round(Ti(this._months))), e)) {
                case "week":
                  return t / 7 + r / 6048e5;
                case "day":
                  return t + r / 864e5;
                case "hour":
                  return 24 * t + r / 36e5;
                case "minute":
                  return 1440 * t + r / 6e4;
                case "second":
                  return 86400 * t + r / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * t) + r;
                default:
                  throw new Error("Unknown unit " + e);
              }
          }
          function Di(e) {
            return function () {
              return this.as(e);
            };
          }
          var Pi = Di("ms"),
            Mi = Di("s"),
            Li = Di("m"),
            ji = Di("h"),
            Ai = Di("d"),
            Ui = Di("w"),
            Fi = Di("M"),
            zi = Di("Q"),
            Yi = Di("y"),
            Ii = Pi;
          function Bi() {
            return Or(this);
          }
          function Wi(e) {
            return (e = ne(e)), this.isValid() ? this[e + "s"]() : NaN;
          }
          function Hi(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var Vi = Hi("milliseconds"),
            qi = Hi("seconds"),
            $i = Hi("minutes"),
            Gi = Hi("hours"),
            Qi = Hi("days"),
            Ki = Hi("months"),
            Ji = Hi("years");
          function Zi() {
            return Re(this.days() / 7);
          }
          var Xi = Math.round,
            eo = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
          function to(e, t, n, r, a) {
            return a.relativeTime(t || 1, !!n, e, r);
          }
          function no(e, t, n, r) {
            var a = Or(e).abs(),
              i = Xi(a.as("s")),
              o = Xi(a.as("m")),
              s = Xi(a.as("h")),
              l = Xi(a.as("d")),
              u = Xi(a.as("M")),
              c = Xi(a.as("w")),
              d = Xi(a.as("y")),
              f =
                (i <= n.ss && ["s", i]) ||
                (i < n.s && ["ss", i]) ||
                (o <= 1 && ["m"]) ||
                (o < n.m && ["mm", o]) ||
                (s <= 1 && ["h"]) ||
                (s < n.h && ["hh", s]) ||
                (l <= 1 && ["d"]) ||
                (l < n.d && ["dd", l]);
            return (
              null != n.w &&
                (f = f || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
              ((f = f ||
                (u <= 1 && ["M"]) ||
                (u < n.M && ["MM", u]) ||
                (d <= 1 && ["y"]) || ["yy", d])[2] = t),
              (f[3] = +e > 0),
              (f[4] = r),
              to.apply(null, f)
            );
          }
          function ro(e) {
            return void 0 === e
              ? Xi
              : "function" === typeof e && ((Xi = e), !0);
          }
          function ao(e, t) {
            return (
              void 0 !== eo[e] &&
              (void 0 === t
                ? eo[e]
                : ((eo[e] = t), "s" === e && (eo.ss = t - 1), !0))
            );
          }
          function io(e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n,
              r,
              a = !1,
              i = eo;
            return (
              "object" === typeof e && ((t = e), (e = !1)),
              "boolean" === typeof e && (a = e),
              "object" === typeof t &&
                ((i = Object.assign({}, eo, t)),
                null != t.s && null == t.ss && (i.ss = t.s - 1)),
              (r = no(this, !a, i, (n = this.localeData()))),
              a && (r = n.pastFuture(+this, r)),
              n.postformat(r)
            );
          }
          var oo = Math.abs;
          function so(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function lo() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              r,
              a,
              i,
              o,
              s,
              l = oo(this._milliseconds) / 1e3,
              u = oo(this._days),
              c = oo(this._months),
              d = this.asSeconds();
            return d
              ? ((e = Re(l / 60)),
                (t = Re(e / 60)),
                (l %= 60),
                (e %= 60),
                (n = Re(c / 12)),
                (c %= 12),
                (r = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
                (a = d < 0 ? "-" : ""),
                (i = so(this._months) !== so(d) ? "-" : ""),
                (o = so(this._days) !== so(d) ? "-" : ""),
                (s = so(this._milliseconds) !== so(d) ? "-" : ""),
                a +
                  "P" +
                  (n ? i + n + "Y" : "") +
                  (c ? i + c + "M" : "") +
                  (u ? o + u + "D" : "") +
                  (t || e || l ? "T" : "") +
                  (t ? s + t + "H" : "") +
                  (e ? s + e + "M" : "") +
                  (l ? s + r + "S" : ""))
              : "P0D";
          }
          var uo = or.prototype;
          return (
            (uo.isValid = ar),
            (uo.abs = _i),
            (uo.add = xi),
            (uo.subtract = Ei),
            (uo.as = Ri),
            (uo.asMilliseconds = Pi),
            (uo.asSeconds = Mi),
            (uo.asMinutes = Li),
            (uo.asHours = ji),
            (uo.asDays = Ai),
            (uo.asWeeks = Ui),
            (uo.asMonths = Fi),
            (uo.asQuarters = zi),
            (uo.asYears = Yi),
            (uo.valueOf = Ii),
            (uo._bubble = Ni),
            (uo.clone = Bi),
            (uo.get = Wi),
            (uo.milliseconds = Vi),
            (uo.seconds = qi),
            (uo.minutes = $i),
            (uo.hours = Gi),
            (uo.days = Qi),
            (uo.weeks = Zi),
            (uo.months = Ki),
            (uo.years = Ji),
            (uo.humanize = io),
            (uo.toISOString = lo),
            (uo.toString = lo),
            (uo.toJSON = lo),
            (uo.locale = oa),
            (uo.localeData = la),
            (uo.toIsoString = E(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              lo
            )),
            (uo.lang = sa),
            Y("X", 0, 0, "unix"),
            Y("x", 0, 0, "valueOf"),
            Ce("x", be),
            Ce("X", _e),
            Me("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e));
            }),
            Me("x", function (e, t, n) {
              n._d = new Date(De(e));
            }),
            (r.version = "2.30.1"),
            a(Qn),
            (r.fn = li),
            (r.min = Xn),
            (r.max = er),
            (r.now = tr),
            (r.utc = p),
            (r.unix = ui),
            (r.months = gi),
            (r.isDate = d),
            (r.locale = mn),
            (r.invalid = v),
            (r.duration = Or),
            (r.isMoment = S),
            (r.weekdays = vi),
            (r.parseZone = ci),
            (r.localeData = vn),
            (r.isDuration = sr),
            (r.monthsShort = yi),
            (r.weekdaysMin = wi),
            (r.defineLocale = gn),
            (r.updateLocale = yn),
            (r.locales = bn),
            (r.weekdaysShort = bi),
            (r.normalizeUnits = ne),
            (r.relativeTimeRounding = ro),
            (r.relativeTimeThreshold = ao),
            (r.calendarFormat = Ir),
            (r.prototype = li),
            (r.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            r
          );
        })();
      },
      144: (e, t, n) => {
        "use strict";
        var r = n(60),
          a = n(724);
        function i(e) {
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
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function m(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
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
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
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
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
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
          k = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          D = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function j(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var A,
          U = Object.assign;
        function F(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              A = (t && t[1]) || "";
            }
          return "\n" + A + e;
        }
        var z = !1;
        function Y(e, t) {
          if (!e || z) return "";
          z = !0;
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
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var l = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function I(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = Y(e.type, !1));
            case 11:
              return (e = Y(e.type.render, !1));
            case 1:
              return (e = Y(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case _:
              return "Portal";
            case E:
              return "Profiler";
            case x:
              return "StrictMode";
            case T:
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
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case D:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
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
              return B(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
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
        function H(e) {
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
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
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
        function $(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
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
        function Q(e, t) {
          var n = t.checked;
          return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          J(e, t);
          var n = H(t.value),
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
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function X(e, t, n) {
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
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
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
        var he = {
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
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ye = U(
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
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
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
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          Se = null,
          xe = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof _e) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ka(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = xe;
            if (((xe = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Te() {}
        var Re = !1;
        function De(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== xe) && (Te(), Ne());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
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
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Me = !1;
          }
        function je(e, t, n, r, a, i, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ae = !1,
          Ue = null,
          Fe = !1,
          ze = null,
          Ye = {
            onError: function (e) {
              (Ae = !0), (Ue = e);
            },
          };
        function Ie(e, t, n, r, a, i, o, s, l) {
          (Ae = !1), (Ue = null), je.apply(Ye, arguments);
        }
        function Be(e) {
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
        function We(e) {
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
        function He(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return He(a), e;
                    if (o === r) return He(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var $e = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Je = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Xe = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
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
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~a;
            0 !== s ? (r = dt(s)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ht(e, t) {
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
        function pt(e) {
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
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
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
        var kt,
          _t,
          St,
          xt,
          Et,
          Ct = !1,
          Nt = [],
          Ot = null,
          Tt = null,
          Rt = null,
          Dt = new Map(),
          Pt = new Map(),
          Mt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function jt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Dt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function At(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ut(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
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
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Yt() {
          (Ct = !1),
            null !== Ot && Ft(Ot) && (Ot = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            null !== Rt && Ft(Rt) && (Rt = null),
            Dt.forEach(zt),
            Pt.forEach(zt);
        }
        function It(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Yt)));
        }
        function Bt(e) {
          function t(t) {
            return It(t, e);
          }
          if (0 < Nt.length) {
            It(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && It(Ot, e),
              null !== Tt && It(Tt, e),
              null !== Rt && It(Rt, e),
              Dt.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Ut(n), null === n.blockedOn && Mt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Vt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), $t(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), $t(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function $t(e, t, n, r) {
          if (Ht) {
            var a = Qt(e, t, n, r);
            if (null === a) Hr(e, t, r, Gt, n), jt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ot = At(Ot, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Tt = At(Tt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = At(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Dt.set(i, At(Dt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Pt.set(i, At(Pt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && kt(i),
                  null === (i = Qt(e, t, n, r)) && Hr(e, t, r, Gt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Qt(e, t, n, r) {
          if (((Gt = null), null !== (e = va((e = ke(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Kt(e) {
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
              switch (Ze()) {
                case Xe:
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
        var Jt = null,
          Zt = null,
          Xt = null;
        function en() {
          if (Xt) return Xt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Xt = a.slice(e, 1 < t ? 1 - t : void 0));
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
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
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
        var on,
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
          cn = an(un),
          dn = U({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          hn = U({}, dn, {
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
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(hn),
          mn = an(U({}, hn, { dataTransfer: 0 })),
          gn = an(U({}, dn, { relatedTarget: 0 })),
          yn = an(
            U({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = U({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          wn = an(U({}, un, { data: 0 })),
          kn = {
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
          _n = {
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
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return xn;
        }
        var Cn = U({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
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
          Nn = an(Cn),
          On = an(
            U({}, hn, {
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
          Tn = an(
            U({}, dn, {
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
          Rn = an(
            U({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Dn = U({}, hn, {
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
          Pn = an(Dn),
          Mn = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          jn = null;
        c && "documentMode" in document && (jn = document.documentMode);
        var An = c && "TextEvent" in window && !jn,
          Un = c && (!Ln || (jn && 8 < jn && 11 >= jn)),
          Fn = String.fromCharCode(32),
          zn = !1;
        function Yn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
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
        function In(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Ce(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          $n = null;
        function Gn(e) {
          Fr(e, 0);
        }
        function Qn(e) {
          if ($(wa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Xn = "oninput" in document;
            if (!Xn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Xn = "function" === typeof er.oninput);
            }
            Zn = Xn;
          } else Zn = !1;
          Jn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), ($n = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn($n)) {
            var t = [];
            Vn(t, $n, e, ke(e)), De(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), ($n = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn($n);
        }
        function ir(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
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
            var a = n[r];
            if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
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
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
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
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
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
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
            gr !== G(r) ||
            ("selectionStart" in (r = gr) && hr(r)
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
              0 < (r = qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _r = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          xr = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          "TransitionEvent" in window || delete _r.transitionend.transition);
        var Cr = Er("animationend"),
          Nr = Er("animationiteration"),
          Or = Er("animationstart"),
          Tr = Er("transitionend"),
          Rr = new Map(),
          Dr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Pr(e, t) {
          Rr.set(e, t), l(t, [e]);
        }
        for (var Mr = 0; Mr < Dr.length; Mr++) {
          var Lr = Dr[Mr];
          Pr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Pr(Cr, "onAnimationEnd"),
          Pr(Nr, "onAnimationIteration"),
          Pr(Or, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(Tr, "onTransitionEnd"),
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
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ar = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function Ur(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, s, l, u) {
              if ((Ie.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(i(198));
                var c = Ue;
                (Ae = !1), (Ue = null), Fe || ((Fe = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  Ur(a, s, u), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  Ur(a, s, u), (i = l);
                }
            }
          }
          if (Fe) throw ((e = ze), (Fe = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Yr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ir = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ir]) {
            (e[Ir] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ar.has(t) || Yr(t, !1, e), Yr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ir] || ((t[Ir] = !0), Yr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = $t;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = va(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          De(function () {
            var r = i,
              a = ke(n),
              o = [];
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
                    l = pn;
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
                    l = Tn;
                    break;
                  case Cr:
                  case Nr:
                  case Or:
                    l = yn;
                    break;
                  case Tr:
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
                    l = On;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== m &&
                      ((h = m),
                      null !== f &&
                        null != (m = Pe(p, f)) &&
                        c.push(Vr(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!va(u) && !u[pa])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : wa(l)),
                  (h = null == u ? s : wa(u)),
                  ((s = new c(m, p + "leave", l, n, a)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(f, p + "enter", u, n, a)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = $r(h)) p++;
                    for (h = 0, m = f; m; m = $r(m)) h++;
                    for (; 0 < p - h; ) (c = $r(c)), p--;
                    for (; 0 < h - p; ) (f = $r(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = $r(c)), (f = $r(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Gr(o, s, l, c, !1),
                  null !== u && null !== d && Gr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? wa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Kn;
              else if (Hn(s))
                if (Jn) g = or;
                else {
                  g = ar;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Vn(o, g, n, a)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
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
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var v;
              if (Ln)
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
                Bn
                  ? Yn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Un &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (v = en())
                    : ((Zt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Bn = !0))),
                0 < (y = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = In(n)) && (b.data = v))),
                (v = An
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return In(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Ln && Yn(e, t))
                          ? ((e = en()), (Xt = Zt = Jt = null), (Bn = !1), e)
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
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Fr(o, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Pe(e, n)) && r.unshift(Vr(e, i, a)),
              null != (i = Pe(e, t)) && r.push(Vr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              a
                ? null != (l = Pe(n, i)) && o.unshift(Vr(n, l, s))
                : a || (null != (l = Pe(n, i)) && o.push(Vr(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Kr, "");
        }
        function Zr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(i(425));
        }
        function Xr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
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
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function ua(e) {
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
        function ca(e) {
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
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          ha = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ya = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ka(e) {
          return e[ha] || null;
        }
        var _a = [],
          Sa = -1;
        function xa(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Sa || ((e.current = _a[Sa]), (_a[Sa] = null), Sa--);
        }
        function Ca(e, t) {
          Sa++, (_a[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          Oa = xa(Na),
          Ta = xa(!1),
          Ra = Na;
        function Da(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Pa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ma() {
          Ea(Ta), Ea(Oa);
        }
        function La(e, t, n) {
          if (Oa.current !== Na) throw Error(i(168));
          Ca(Oa, t), Ca(Ta, n);
        }
        function ja(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return U({}, n, r);
        }
        function Aa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Ra = Oa.current),
            Ca(Oa, e),
            Ca(Ta, Ta.current),
            !0
          );
        }
        function Ua(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = ja(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Ta),
              Ea(Oa),
              Ca(Oa, e))
            : Ea(Ta),
            Ca(Ta, n);
        }
        var Fa = null,
          za = !1,
          Ya = !1;
        function Ia(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ba() {
          if (!Ya && null !== Fa) {
            Ya = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (za = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), $e(Xe, Ba), a);
            } finally {
              (bt = t), (Ya = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          Va = null,
          qa = 0,
          $a = [],
          Ga = 0,
          Qa = null,
          Ka = 1,
          Ja = "";
        function Za(e, t) {
          (Wa[Ha++] = qa), (Wa[Ha++] = Va), (Va = e), (qa = t);
        }
        function Xa(e, t, n) {
          ($a[Ga++] = Ka), ($a[Ga++] = Ja), ($a[Ga++] = Qa), (Qa = e);
          var r = Ka;
          e = Ja;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ka = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ja = i + e);
          } else (Ka = (1 << i) | (n << a) | r), (Ja = e);
        }
        function ei(e) {
          null !== e.return && (Za(e, 1), Xa(e, 1, 0));
        }
        function ti(e) {
          for (; e === Va; )
            (Va = Wa[--Ha]), (Wa[Ha] = null), (qa = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Qa; )
            (Qa = $a[--Ga]),
              ($a[Ga] = null),
              (Ja = $a[--Ga]),
              ($a[Ga] = null),
              (Ka = $a[--Ga]),
              ($a[Ga] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Pu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function si(e, t) {
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
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qa ? { id: Ka, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!si(e, t)) {
                if (li(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && si(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (li(e)) throw (fi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function hi() {
          (ri = ni = null), (ai = !1);
        }
        function pi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var mi = w.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yi = xa(null),
          vi = null,
          bi = null,
          wi = null;
        function ki() {
          wi = bi = vi = null;
        }
        function _i(e) {
          var t = yi.current;
          Ea(yi), (e._currentValue = t);
        }
        function Si(e, t, n) {
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
        function xi(e, t) {
          (vi = e),
            (wi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Ei(e) {
          var t = e._currentValue;
          if (wi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === vi) throw Error(i(308));
              (bi = e), (vi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Ci = null;
        function Ni(e) {
          null === Ci ? (Ci = [e]) : Ci.push(e);
        }
        function Oi(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ni(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ti(e, r)
          );
        }
        function Ti(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ri = !1;
        function Di(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Pi(e, t) {
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
        function Mi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Li(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Tl))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ti(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ni(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ti(e, n)
          );
        }
        function ji(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Ai(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
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
        function Ui(e, t, n, r) {
          var a = e.updateQueue;
          Ri = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (i = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = l = null, s = i; ; ) {
              var f = s.lane,
                h = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = s;
                  switch (((f = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(h, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(h, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = U({}, d, f);
                      break e;
                    case 2:
                      Ri = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [s]) : f.push(s));
              } else
                (h = {
                  eventTime: h,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Ul |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Fi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var zi = new r.Component().refs;
        function Yi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ii = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              i = Mi(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Li(e, i, a)) && (ru(t, e, a, r), ji(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              i = Mi(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Li(e, i, a)) && (ru(t, e, a, r), ji(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Mi(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Li(e, a, r)) && (ru(t, e, r, n), ji(t, e, r));
          },
        };
        function Bi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, i);
        }
        function Wi(e, t, n) {
          var r = !1,
            a = Na,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ei(i))
              : ((a = Pa(t) ? Ra : Oa.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Da(e, a)
                  : Na)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ii),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ii.enqueueReplaceState(t, t.state, null);
        }
        function Vi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = zi), Di(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ei(i))
            : ((i = Pa(t) ? Ra : Oa.current), (a.context = Da(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Yi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ii.enqueueReplaceState(a, a.state, null),
              Ui(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === zi && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function $i(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Gi(e) {
          return (0, e._init)(e._payload);
        }
        function Qi(e) {
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
          function a(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
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
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === P &&
                    Gi(i) === t.type))
              ? (((r = a(t, n.props)).ref = qi(e, t, n)), (r.return = e), r)
              : (((r = ju(n.type, n.key, n.props, null, e.mode, r)).ref = qi(
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
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = ju(t.type, t.key, t.props, null, e.mode, n)).ref = qi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = zu(t, e.mode, n)).return = e), t;
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || j(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              $i(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case _:
                  return n.key === a ? c(e, t, n, r) : null;
                case P:
                  return h(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || j(n)) return null !== a ? null : d(e, t, n, r, null);
              $i(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case P:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || j(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              $i(t, r);
            }
            return null;
          }
          function m(a, i, s, l) {
            for (
              var u = null, c = null, d = i, m = (i = 0), g = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = h(a, d, s[m], l);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(a, d),
                (i = o(y, i, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === s.length) return n(a, d), ai && Za(a, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(a, s[m], l)) &&
                  ((i = o(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ai && Za(a, m), u;
            }
            for (d = r(a, d); m < s.length; m++)
              null !== (g = p(d, a, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (i = o(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, m),
              u
            );
          }
          function g(a, s, l, u) {
            var c = j(l);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var d = (c = null), m = s, g = (s = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = h(a, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (s = o(b, s, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(a, m), ai && Za(a, g), c;
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = f(a, v.value, u)) &&
                  ((s = o(v, s, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ai && Za(a, g), c;
            }
            for (m = r(a, m); !v.done; g++, v = l.next())
              null !== (v = p(m, a, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (s = o(v, s, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, g),
              c
            );
          }
          return function e(r, i, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === P &&
                            Gi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = qi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Au(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = i))
                      : (((l = ju(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = qi(r, i, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case _:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = zu(o, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case P:
                  return e(r, i, (c = o._init)(o._payload), l);
              }
              if (te(o)) return m(r, i, o, l);
              if (j(o)) return g(r, i, o, l);
              $i(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Fu(o, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var Ki = Qi(!0),
          Ji = Qi(!1),
          Zi = {},
          Xi = xa(Zi),
          eo = xa(Zi),
          to = xa(Zi);
        function no(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca(Xi, Zi), (e = t.nodeType))) {
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
          Ea(Xi), Ca(Xi, t);
        }
        function ao() {
          Ea(Xi), Ea(eo), Ea(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Xi.current),
            n = le(t, e.type);
          t !== n && (Ca(eo, e), Ca(Xi, n));
        }
        function oo(e) {
          eo.current === e && (Ea(Xi), Ea(eo));
        }
        var so = xa(0);
        function lo(e) {
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
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = w.ReactCurrentDispatcher,
          ho = w.ReactCurrentBatchConfig,
          po = 0,
          mo = null,
          go = null,
          yo = null,
          vo = !1,
          bo = !1,
          wo = 0,
          ko = 0;
        function _o() {
          throw Error(i(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function xo(e, t, n, r, a, o) {
          if (
            ((po = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (yo = go = null),
                (t.updateQueue = null),
                (fo.current = us),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = os),
            (t = null !== go && null !== go.next),
            (po = 0),
            (yo = go = mo = null),
            (vo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Eo() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yo ? (mo.memoizedState = yo = e) : (yo = yo.next = e), yo
          );
        }
        function No() {
          if (null === go) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === yo ? mo.memoizedState : yo.next;
          if (null !== t) (yo = t), (go = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === yo ? (mo.memoizedState = yo = e) : (yo = yo.next = e);
          }
          return yo;
        }
        function Oo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function To(e) {
          var t = No(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              (a.next = o.next), (o.next = s);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((po & d) === d)
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
                  (mo.lanes |= d),
                  (Ul |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Ul |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ro(e) {
          var t = No(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== a);
            sr(o, t.memoizedState) || (ws = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Do() {}
        function Po(e, t) {
          var n = mo,
            r = No(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (ws = !0)),
            (r = r.queue),
            Ho(jo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== yo && 1 & yo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zo(9, Lo.bind(null, n, r, a, t), void 0, null),
              null === Rl)
            )
              throw Error(i(349));
            0 !== (30 & po) || Mo(n, t, a);
          }
          return a;
        }
        function Mo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Lo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ao(t) && Uo(e);
        }
        function jo(e, t, n) {
          return n(function () {
            Ao(t) && Uo(e);
          });
        }
        function Ao(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Uo(e) {
          var t = Ti(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Fo(e) {
          var t = Co();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Oo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function zo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Yo() {
          return No().memoizedState;
        }
        function Io(e, t, n, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = zo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var a = No();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((i = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = zo(t, n, i, r));
          }
          (mo.flags |= e), (a.memoizedState = zo(1 | t, n, i, r));
        }
        function Wo(e, t) {
          return Io(8390656, 8, e, t);
        }
        function Ho(e, t) {
          return Bo(2048, 8, e, t);
        }
        function Vo(e, t) {
          return Bo(4, 2, e, t);
        }
        function qo(e, t) {
          return Bo(4, 4, e, t);
        }
        function $o(e, t) {
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
        function Go(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, $o.bind(null, t, e), n)
          );
        }
        function Qo() {}
        function Ko(e, t) {
          var n = No();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Jo(e, t) {
          var n = No();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & po)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (mo.lanes |= n), (Ul |= n), (e.baseState = !0)),
              t);
        }
        function Xo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ho.transition;
          ho.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ho.transition = r);
          }
        }
        function es() {
          return No().memoizedState;
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
            as(t, n);
          else if (null !== (n = Oi(e, t, n, r))) {
            ru(n, e, r, tu()), is(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) as(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ni(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Oi(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), is(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function as(e, t) {
          bo = vo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function is(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var os = {
            readContext: Ei,
            useCallback: _o,
            useContext: _o,
            useEffect: _o,
            useImperativeHandle: _o,
            useInsertionEffect: _o,
            useLayoutEffect: _o,
            useMemo: _o,
            useReducer: _o,
            useRef: _o,
            useState: _o,
            useDebugValue: _o,
            useDeferredValue: _o,
            useTransition: _o,
            useMutableSource: _o,
            useSyncExternalStore: _o,
            useId: _o,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Ei,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ei,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Io(4194308, 4, $o.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Io(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Io(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
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
                (e = e.dispatch = ts.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: Fo,
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = Fo(!1),
                t = e[0];
              return (
                (e = Xo.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Co();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(i(349));
                0 !== (30 & po) || Mo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Wo(jo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                zo(9, Lo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Rl.identifierPrefix;
              if (ai) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - ot(Ka) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Ei,
            useCallback: Ko,
            useContext: Ei,
            useEffect: Ho,
            useImperativeHandle: Go,
            useInsertionEffect: Vo,
            useLayoutEffect: qo,
            useMemo: Jo,
            useReducer: To,
            useRef: Yo,
            useState: function () {
              return To(Oo);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return Zo(No(), go.memoizedState, e);
            },
            useTransition: function () {
              return [To(Oo)[0], No().memoizedState];
            },
            useMutableSource: Do,
            useSyncExternalStore: Po,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Ei,
            useCallback: Ko,
            useContext: Ei,
            useEffect: Ho,
            useImperativeHandle: Go,
            useInsertionEffect: Vo,
            useLayoutEffect: qo,
            useMemo: Jo,
            useReducer: Ro,
            useRef: Yo,
            useState: function () {
              return Ro(Oo);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              var t = No();
              return null === go
                ? (t.memoizedState = e)
                : Zo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [Ro(Oo)[0], No().memoizedState];
            },
            useMutableSource: Do,
            useSyncExternalStore: Po,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += I(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
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
        var hs = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Mi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vl || ((Vl = !0), (ql = r)), fs(0, t);
            }),
            n
          );
        }
        function ms(e, t, n) {
          (n = Mi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fs(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                fs(0, t),
                  "function" !== typeof r &&
                    (null === $l ? ($l = new Set([this])) : $l.add(this));
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
            r = e.pingCache = new hs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
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
        function vs(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Mi(-1, 1)).tag = 2), Li(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function ks(e, t, n, r) {
          t.child = null === e ? Ji(t, null, n, r) : Ki(t, e.child, n, r);
        }
        function _s(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            xi(t, a),
            (r = xo(e, t, n, r, i, a)),
            (n = Eo()),
            null === e || ws
              ? (ai && n && ei(t), (t.flags |= 1), ks(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vs(e, t, a))
          );
        }
        function Ss(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Mu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = ju(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), xs(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return Vs(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xs(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vs(e, t, a);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ns(e, t, n, r, a);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Ll, Ml),
                (Ml |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Ll, Ml),
                  (Ml |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ca(Ll, Ml),
                (Ml |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Ll, Ml),
              (Ml |= r);
          return ks(e, t, a, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ns(e, t, n, r, a) {
          var i = Pa(n) ? Ra : Oa.current;
          return (
            (i = Da(t, i)),
            xi(t, a),
            (n = xo(e, t, n, r, i, a)),
            (r = Eo()),
            null === e || ws
              ? (ai && r && ei(t), (t.flags |= 1), ks(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vs(e, t, a))
          );
        }
        function Os(e, t, n, r, a) {
          if (Pa(n)) {
            var i = !0;
            Aa(t);
          } else i = !1;
          if ((xi(t, a), null === t.stateNode))
            Hs(e, t), Wi(t, n, r), Vi(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ei(u))
              : (u = Da(t, (u = Pa(n) ? Ra : Oa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Hi(t, o, r, u)),
              (Ri = !1);
            var f = t.memoizedState;
            (o.state = f),
              Ui(t, r, o, a),
              (l = t.memoizedState),
              s !== r || f !== l || Ta.current || Ri
                ? ("function" === typeof c &&
                    (Yi(t, n, c, r), (l = t.memoizedState)),
                  (s = Ri || Bi(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Pi(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : gi(t.type, s)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ei(l))
                : (l = Da(t, (l = Pa(n) ? Ra : Oa.current)));
            var h = n.getDerivedStateFromProps;
            (c =
              "function" === typeof h ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== d || f !== l) && Hi(t, o, r, l)),
              (Ri = !1),
              (f = t.memoizedState),
              (o.state = f),
              Ui(t, r, o, a);
            var p = t.memoizedState;
            s !== d || f !== p || Ta.current || Ri
              ? ("function" === typeof h &&
                  (Yi(t, n, h, r), (p = t.memoizedState)),
                (u = Ri || Bi(t, n, u, r, f, p, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ts(e, t, n, r, i, a);
        }
        function Ts(e, t, n, r, a, i) {
          Cs(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ua(t, n, !1), Vs(e, t, i);
          (r = t.stateNode), (bs.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ki(t, e.child, null, i)),
                (t.child = Ki(t, null, s, i)))
              : ks(e, t, s, i),
            (t.memoizedState = r.state),
            a && Ua(t, n, !0),
            t.child
          );
        }
        function Rs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ds(e, t, n, r, a) {
          return hi(), pi(a), (t.flags |= 256), ks(e, t, n, r), t.child;
        }
        var Ps,
          Ms,
          Ls,
          js,
          As = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Us(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fs(e, t, n) {
          var r,
            a = t.pendingProps,
            o = so.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(so, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Uu(l, a, 0, null)),
                      (e = Au(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Us(n)),
                      (t.memoizedState = As),
                      e)
                    : zs(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ys(e, t, s, (r = ds(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Uu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Au(o, a, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ki(t, e.child, null, s),
                    (t.child.memoizedState = Us(s)),
                    (t.memoizedState = As),
                    o);
              if (0 === (1 & t.mode)) return Ys(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Ys(e, t, s, (r = ds((o = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (r = Rl)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ti(e, a), ru(r, e, a, -1));
                }
                return gu(), Ys(e, t, s, (r = ds(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ou.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    (($a[Ga++] = Ka),
                    ($a[Ga++] = Ja),
                    ($a[Ga++] = Qa),
                    (Ka = e.id),
                    (Ja = e.overflow),
                    (Qa = t)),
                  (t = zs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, o, n);
          if (s) {
            (s = a.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Lu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Lu(r, s))
                : ((s = Au(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Us(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = As),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Lu(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function zs(e, t) {
          return (
            ((t = Uu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ys(e, t, n, r) {
          return (
            null !== r && pi(r),
            Ki(t, e.child, null, n),
            ((e = zs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Is(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Si(e.return, t, n);
        }
        function Bs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Ws(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((ks(e, t, r.children, n), 0 !== (2 & (r = so.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Is(e, n, t);
                else if (19 === e.tag) Is(e, n, t);
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
          if ((Ca(so, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === lo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bs(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === lo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bs(t, !0, n, null, i);
                break;
              case "together":
                Bs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ul |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function qs(e, t) {
          if (!ai)
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
        function $s(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Gs(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
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
              return $s(t), null;
            case 1:
            case 17:
              return Pa(t.type) && Ma(), $s(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ea(Ta),
                Ea(Oa),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (su(ii), (ii = null)))),
                Ms(e, t),
                $s(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ls(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return $s(t), null;
                }
                if (((e = no(Xi.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[ha] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      zr("cancel", r), zr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      zr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < jr.length; a++) zr(jr[a], r);
                      break;
                    case "source":
                      zr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      zr("error", r), zr("load", r);
                      break;
                    case "details":
                      zr("toggle", r);
                      break;
                    case "input":
                      K(r, o), zr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        zr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), zr("invalid", r);
                  }
                  for (var l in (ve(n, o), (a = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          zr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), X(r, o, !0);
                      break;
                    case "textarea":
                      q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Xr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
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
                    (e[fa] = t),
                    (e[ha] = r),
                    Ps(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        zr("cancel", e), zr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < jr.length; a++) zr(jr[a], e);
                        a = r;
                        break;
                      case "source":
                        zr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        zr("error", e), zr("load", e), (a = r);
                        break;
                      case "details":
                        zr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = Q(e, r)), zr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = U({}, r, { value: void 0 })),
                          zr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), zr("invalid", e);
                    }
                    for (o in (ve(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && zr("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        q(e), X(e, r, !1);
                        break;
                      case "textarea":
                        q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Xr);
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
              return $s(t), null;
            case 6:
              if (e && null != t.stateNode) js(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Xi.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return $s(t), null;
            case 13:
              if (
                (Ea(so),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), hi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[fa] = t;
                  } else
                    hi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $s(t), (o = !1);
                } else null !== ii && (su(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & so.current)
                        ? 0 === jl && (jl = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $s(t),
                  null);
            case 4:
              return (
                ao(),
                Ms(e, t),
                null === e && Br(t.stateNode.containerInfo),
                $s(t),
                null
              );
            case 10:
              return _i(t.type._context), $s(t), null;
            case 19:
              if ((Ea(so), null === (o = t.memoizedState))) return $s(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) qs(o, !1);
                else {
                  if (0 !== jl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = lo(e))) {
                        for (
                          t.flags |= 128,
                            qs(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(so, (1 & so.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Je() > Wl &&
                    ((t.flags |= 128),
                    (r = !0),
                    qs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = lo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      qs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ai)
                    )
                      return $s(t), null;
                  } else
                    2 * Je() - o.renderingStartTime > Wl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = so.current),
                  Ca(so, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($s(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ml) &&
                    ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $s(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Qs(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Pa(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ea(Ta),
                Ea(Oa),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ea(so),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                hi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(so), null;
            case 4:
              return ao(), null;
            case 10:
              return _i(t.type._context), null;
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
          (Ms = function () {}),
          (Ls = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Xi.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (a = U({}, a, { value: void 0 })),
                    (r = U({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Xr);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var l = a[c];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          l[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && zr("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (js = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ks = !1,
          Js = !1,
          Zs = "function" === typeof WeakSet ? WeakSet : Set,
          Xs = null;
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
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && tl(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function al(e, t) {
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
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ol(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ol(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[ha],
              delete t[ma],
              delete t[ga],
              delete t[ya]),
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
                    (t.onclick = Xr));
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
        function hl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Js || el(n, t);
            case 6:
              var r = dl,
                a = fl;
              (dl = null),
                hl(e, t, n),
                (fl = a),
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
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Bt(e))
                  : la(dl, n.stateNode));
              break;
            case 4:
              (r = dl),
                (a = fl),
                (dl = n.stateNode.containerInfo),
                (fl = !0),
                hl(e, t, n),
                (dl = r),
                (fl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Js &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      tl(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              hl(e, t, n);
              break;
            case 1:
              if (
                !Js &&
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
              hl(e, t, n);
              break;
            case 21:
              hl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Js = (r = Js) || null !== n.memoizedState),
                  hl(e, t, n),
                  (Js = r))
                : hl(e, t, n);
              break;
            default:
              hl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zs()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
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
                if (null === dl) throw Error(i(160));
                pl(o, s, a), (dl = null), (fl = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
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
                  rl(3, e, e.return), al(3, e);
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
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      J(a, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var h = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(a, !!o.multiple, p, !1)
                          : h !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[ha] = o;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), vl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
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
                  Bt(t.containerInfo);
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
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bl = Je())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Js = (c = Js) || d), gl(t, e), (Js = c))
                  : gl(t, e),
                vl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (f = Xs = d; null !== Xs; ) {
                      switch (((p = (h = Xs).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, h, h.return);
                          break;
                        case 1:
                          el(h, h.return);
                          var m = h.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = h), (n = h.return);
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
                          el(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            _l(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Xs = p)) : _l(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
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
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cl(e, ll(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ul(e, ll(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Xs = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xs; ) {
            var a = Xs,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Ks;
              if (!o) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || Js;
                s = Ks;
                var u = Js;
                if (((Ks = o), (Js = l) && !u))
                  for (Xs = a; null !== Xs; )
                    (l = (o = Xs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Sl(a)
                        : null !== l
                        ? ((l.return = o), (Xs = l))
                        : Sl(a);
                for (; null !== i; ) (Xs = i), wl(i, t, n), (i = i.sibling);
                (Xs = a), (Ks = s), (Js = u);
              }
              kl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Xs = i))
                : kl(e);
          }
        }
        function kl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Js || al(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Js)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Fi(t, o, r);
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
                        Fi(t, s, n);
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
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Js || (512 & t.flags && il(t));
              } catch (h) {
                Eu(t, t.return, h);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function _l(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, a, l);
                    }
                  }
                  var i = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Eu(t, o, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Xs = s);
              break;
            }
            Xs = t.return;
          }
        }
        var xl,
          El = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Nl = w.ReactCurrentOwner,
          Ol = w.ReactCurrentBatchConfig,
          Tl = 0,
          Rl = null,
          Dl = null,
          Pl = 0,
          Ml = 0,
          Ll = xa(0),
          jl = 0,
          Al = null,
          Ul = 0,
          Fl = 0,
          zl = 0,
          Yl = null,
          Il = null,
          Bl = 0,
          Wl = 1 / 0,
          Hl = null,
          Vl = !1,
          ql = null,
          $l = null,
          Gl = !1,
          Ql = null,
          Kl = 0,
          Jl = 0,
          Zl = null,
          Xl = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Tl) ? Je() : -1 !== Xl ? Xl : (Xl = Je());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Tl) && 0 !== Pl
            ? Pl & -Pl
            : null !== mi.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Jl) throw ((Jl = 0), (Zl = null), Error(i(185)));
          yt(e, n, r),
            (0 !== (2 & Tl) && e === Rl) ||
              (e === Rl && (0 === (2 & Tl) && (Fl |= n), 4 === jl && lu(e, Pl)),
              au(e, r),
              1 === n &&
                0 === Tl &&
                0 === (1 & t.mode) &&
                ((Wl = Je() + 500), za && Ba()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                s = 1 << o,
                l = a[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = ht(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Rl ? Pl : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (za = !0), Ia(e);
                  })(uu.bind(null, e))
                : Ia(uu.bind(null, e)),
                oa(function () {
                  0 === (6 & Tl) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Xe;
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
              n = Ru(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Xl = -1), (eu = 0), 0 !== (6 & Tl))) throw Error(i(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === Rl ? Pl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var a = Tl;
            Tl |= 2;
            var o = mu();
            for (
              (Rl === e && Pl === t) ||
              ((Hl = null), (Wl = Je() + 500), hu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (l) {
                pu(e, l);
              }
            ki(),
              (Cl.current = o),
              (Tl = a),
              null !== Dl ? (t = 0) : ((Rl = null), (Pl = 0), (t = jl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = Al), hu(e, 0), lu(e, r), au(e, Je()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
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
                  })(a) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((n = Al), hu(e, 0), lu(e, r), au(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  _u(e, Il, Hl);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Bl + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(_u.bind(null, e, Il, Hl), t);
                    break;
                  }
                  _u(e, Il, Hl);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
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
                    e.timeoutHandle = ra(_u.bind(null, e, Il, Hl), r);
                    break;
                  }
                  _u(e, Il, Hl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return au(e, Je()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Yl;
          return (
            e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Il), (Il = n), null !== t && su(t)),
            e
          );
        }
        function su(e) {
          null === Il ? (Il = e) : Il.push.apply(Il, e);
        }
        function lu(e, t) {
          for (
            t &= ~zl,
              t &= ~Fl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Tl)) throw Error(i(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Je()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Al), hu(e, 0), lu(e, t), au(e, Je()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _u(e, Il, Hl),
            au(e, Je()),
            null
          );
        }
        function cu(e, t) {
          var n = Tl;
          Tl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && ((Wl = Je() + 500), za && Ba());
          }
        }
        function du(e) {
          null !== Ql && 0 === Ql.tag && 0 === (6 & Tl) && Su();
          var t = Tl;
          Tl |= 1;
          var n = Ol.transition,
            r = bt;
          try {
            if (((Ol.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ol.transition = n), 0 === (6 & (Tl = t)) && Ba();
          }
        }
        function fu() {
          (Ml = Ll.current), Ea(Ll);
        }
        function hu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Dl))
            for (n = Dl.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ma();
                  break;
                case 3:
                  ao(), Ea(Ta), Ea(Oa), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ea(so);
                  break;
                case 10:
                  _i(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (Dl = e = Lu(e.current, null)),
            (Pl = Ml = t),
            (jl = 0),
            (Al = null),
            (zl = Fl = Ul = 0),
            (Il = Yl = null),
            null !== Ci)
          ) {
            for (t = 0; t < Ci.length; t++)
              if (null !== (r = (n = Ci[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ci = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Dl;
            try {
              if ((ki(), (fo.current = os), vo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vo = !1;
              }
              if (
                ((po = 0),
                (yo = go = mo = null),
                (bo = !1),
                (wo = 0),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (jl = 1), (Al = t), (Dl = null);
                break;
              }
              e: {
                var o = e,
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
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = ys(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      vs(p, s, l, 0, t),
                      1 & p.mode && gs(o, c, t),
                      (u = c);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gs(o, c, t), gu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & l.mode) {
                  var y = ys(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vs(y, s, l, 0, t),
                      pi(cs(u, l));
                    break e;
                  }
                }
                (o = u = cs(u, l)),
                  4 !== jl && (jl = 2),
                  null === Yl ? (Yl = [o]) : Yl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ai(o, ps(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var v = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $l || !$l.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ai(o, ms(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ku(n);
            } catch (w) {
              (t = w), Dl === n && null !== n && (Dl = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cl.current;
          return (Cl.current = os), null === e ? os : e;
        }
        function gu() {
          (0 !== jl && 3 !== jl && 2 !== jl) || (jl = 4),
            null === Rl ||
              (0 === (268435455 & Ul) && 0 === (268435455 & Fl)) ||
              lu(Rl, Pl);
        }
        function yu(e, t) {
          var n = Tl;
          Tl |= 2;
          var r = mu();
          for ((Rl === e && Pl === t) || ((Hl = null), hu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((ki(), (Tl = n), (Cl.current = r), null !== Dl))
            throw Error(i(261));
          return (Rl = null), (Pl = 0), jl;
        }
        function vu() {
          for (; null !== Dl; ) wu(Dl);
        }
        function bu() {
          for (; null !== Dl && !Qe(); ) wu(Dl);
        }
        function wu(e) {
          var t = xl(e.alternate, e, Ml);
          (e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (Dl = t),
            (Nl.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Gs(n, t, Ml))) return void (Dl = n);
            } else {
              if (null !== (n = Qs(n, t)))
                return (n.flags &= 32767), void (Dl = n);
              if (null === e) return (jl = 6), void (Dl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Dl = t);
            Dl = t = e;
          } while (null !== t);
          0 === jl && (jl = 5);
        }
        function _u(e, t, n) {
          var r = bt,
            a = Ol.transition;
          try {
            (Ol.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Ql);
                if (0 !== (6 & Tl)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
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
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Rl && ((Dl = Rl = null), (Pl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Gl ||
                    ((Gl = !0),
                    Ru(tt, function () {
                      return Su(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ol.transition), (Ol.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Tl;
                  (Tl |= 4),
                    (Nl.current = null),
                    (function (e, t) {
                      if (((ea = Ht), hr((e = fr())))) {
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
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (l = s + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (h = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++c === a && (l = s),
                                    h === o && ++d === r && (u = s),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
                                }
                                f = p;
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
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xs = t;
                        null !== Xs;

                      )
                        if (
                          ((e = (t = Xs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xs = e);
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
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
                                            : gi(t.type, g),
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
                                    throw Error(i(163));
                                }
                            } catch (k) {
                              Eu(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xs = e);
                              break;
                            }
                            Xs = t.return;
                          }
                      (m = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    pr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bl(n, e, a),
                    Ke(),
                    (Tl = l),
                    (bt = s),
                    (Ol.transition = o);
                } else e.current = n;
                if (
                  (Gl && ((Gl = !1), (Ql = e), (Kl = a)),
                  (o = e.pendingLanes),
                  0 === o && ($l = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vl) throw ((Vl = !1), (e = ql), (ql = null), e);
                0 !== (1 & Kl) && 0 !== e.tag && Su(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Zl
                      ? Jl++
                      : ((Jl = 0), (Zl = e))
                    : (Jl = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Ol.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Ql) {
            var e = wt(Kl),
              t = Ol.transition,
              n = bt;
            try {
              if (((Ol.transition = null), (bt = 16 > e ? 16 : e), null === Ql))
                var r = !1;
              else {
                if (((e = Ql), (Ql = null), (Kl = 0), 0 !== (6 & Tl)))
                  throw Error(i(331));
                var a = Tl;
                for (Tl |= 4, Xs = e.current; null !== Xs; ) {
                  var o = Xs,
                    s = o.child;
                  if (0 !== (16 & Xs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Xs = c; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Xs = f);
                          else
                            for (; null !== Xs; ) {
                              var h = (d = Xs).sibling,
                                p = d.return;
                              if ((ol(d), d === c)) {
                                Xs = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), (Xs = h);
                                break;
                              }
                              Xs = p;
                            }
                        }
                      }
                      var m = o.alternate;
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
                      Xs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Xs = s);
                  else
                    e: for (; null !== Xs; ) {
                      if (0 !== (2048 & (o = Xs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, o, o.return);
                        }
                      var v = o.sibling;
                      if (null !== v) {
                        (v.return = o.return), (Xs = v);
                        break e;
                      }
                      Xs = o.return;
                    }
                }
                var b = e.current;
                for (Xs = b; null !== Xs; ) {
                  var w = (s = Xs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Xs = w);
                  else
                    e: for (s = b; null !== Xs; ) {
                      if (0 !== (2048 & (l = Xs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (_) {
                          Eu(l, l.return, _);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (Xs = k);
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((Tl = a),
                  Ba(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ol.transition = t);
            }
          }
          return !1;
        }
        function xu(e, t, n) {
          (e = Li(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), au(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) xu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r)))
                ) {
                  (t = Li(t, (e = ms(t, (e = cs(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), au(t, e));
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
              (4 === jl ||
              (3 === jl && (130023424 & Pl) === Pl && 500 > Je() - Bl)
                ? hu(e, 0)
                : (zl |= n)),
            au(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ti(e, t)) && (yt(e, t, n), au(e, n));
        }
        function Ou(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function Ru(e, t) {
          return $e(e, t);
        }
        function Du(e, t, n, r) {
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
          return new Du(e, t, n, r);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
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
        function ju(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Mu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Au(n.children, a, o, t);
              case x:
                (s = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Pu(12, n, t, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Pu(13, n, t, a)).elementType = T), (e.lanes = o), e
                );
              case R:
                return (
                  ((e = Pu(19, n, t, a)).elementType = R), (e.lanes = o), e
                );
              case M:
                return Uu(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      s = 10;
                      break e;
                    case N:
                      s = 9;
                      break e;
                    case O:
                      s = 11;
                      break e;
                    case D:
                      s = 14;
                      break e;
                    case P:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pu(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = Pu(7, e, r, t)).lanes = n), e;
        }
        function Uu(e, t, n, r) {
          return (
            ((e = Pu(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Pu(6, e, null, t)).lanes = n), e;
        }
        function zu(e, t, n) {
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
        function Yu(e, t, n, r, a) {
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
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Iu(e, t, n, r, a, i, o, s, l) {
          return (
            (e = new Yu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Pu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Di(i),
            e
          );
        }
        function Bu(e) {
          if (!e) return Na;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pa(n)) return ja(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, a, i, o, s, l) {
          return (
            ((e = Iu(n, r, !0, e, 0, i, 0, s, l)).context = Bu(null)),
            (n = e.current),
            ((i = Mi((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Li(n, i, a),
            (e.current.lanes = a),
            yt(e, a, r),
            au(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            i = tu(),
            o = nu(a);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Mi(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Li(a, t, o)) && (ru(e, a, o, i), ji(e, a, o)),
            o
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        xl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rs(t), hi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Pa(t.type) && Aa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(yi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(so, 1 & so.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fs(e, t, n)
                            : (Ca(so, 1 & so.current),
                              null !== (e = Vs(e, t, n)) ? e.sibling : null);
                        Ca(so, 1 & so.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ws(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(so, so.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Vs(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), ai && 0 !== (1048576 & t.flags) && Xa(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hs(e, t), (e = t.pendingProps);
              var a = Da(t, Oa.current);
              xi(t, n), (a = xo(null, t, r, e, a, n));
              var o = Eo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pa(r) ? ((o = !0), Aa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Di(t),
                    (a.updater = Ii),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Vi(t, r, e, n),
                    (t = Ts(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    ks(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hs(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === D) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Os(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _s(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, gi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ns(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Os(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 3:
              e: {
                if ((Rs(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Pi(e, t),
                  Ui(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ds(e, t, r, n, (a = cs(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ds(e, t, r, n, (a = cs(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Ji(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((hi(), r === a)) {
                    t = Vs(e, t, n);
                    break e;
                  }
                  ks(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Cs(e, t),
                ks(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Fs(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ki(t, null, r, n)) : ks(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _s(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 7:
              return ks(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ks(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  Ca(yi, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !Ta.current) {
                      t = Vs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Mi(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Si(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Si(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                ks(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                xi(t, n),
                (r = r((a = Ei(a)))),
                (t.flags |= 1),
                ks(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gi((r = t.type), t.pendingProps)),
                Ss(e, t, r, (a = gi(r.type, a)), n)
              );
            case 15:
              return xs(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gi(r, a)),
                Hs(e, t),
                (t.tag = 1),
                Pa(r) ? ((e = !0), Aa(t)) : (e = !1),
                xi(t, n),
                Wi(t, r, a),
                Vi(t, r, a, n),
                Ts(null, t, r, !0, e, n)
              );
            case 19:
              return Ws(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Gu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = Vu(o);
                s.call(e);
              };
            }
            Hu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Vu(o);
                    i.call(e);
                  };
                }
                var o = Wu(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = o),
                  (e[pa] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Vu(l);
                  s.call(e);
                };
              }
              var l = Iu(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = l),
                (e[pa] = l.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Hu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return Vu(o);
        }
        (Ku.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Hu(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    au(t, Je()),
                    0 === (6 & Tl) && ((Wl = Je() + 500), Ba()));
                }
                break;
              case 13:
                du(function () {
                  var t = Ti(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = Ti(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              $u(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ti(e, t);
              if (null !== n) ru(n, e, t, tu());
              $u(e, t);
            }
          }),
          (xt = function () {
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
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
                      var a = ka(r);
                      if (!a) throw Error(i(90));
                      $(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = cu),
          (Te = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Ce, Ne, cu],
          },
          nc = {
            findFiberByHostInstance: va,
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
              return null === (e = Ve(e)) ? null : e.stateNode;
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
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ju(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: _,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ju(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Gu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Iu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ju(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = Gu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[pa] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      180: (e, t, n) => {
        "use strict";
        var r = n(292);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      292: (e, t, n) => {
        "use strict";
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
        "use strict";
        var r = n(60),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      564: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
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
            (this.updater = n || p);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
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
        var k = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          S = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              _.call(t, a) && !x.hasOwnProperty(a) && (i[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === i[a] && (i[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function O(e, t) {
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
        function T(e, t, a, i, o) {
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
              (o = o((l = e))),
              (e = "" === i ? "." + O(l, 0) : i),
              k(o)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  T(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + O((s = e[u]), u);
              l += T(s, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += T((s = s.value), t, a, (c = i + O(s, u++)), o);
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
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function D(e) {
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
          M = { transition: null },
          L = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: M,
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
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              i = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                _.call(t, u) &&
                  !x.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
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
              _init: D,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
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
        "use strict";
        e.exports = n(564);
      },
      496: (e, t, n) => {
        "use strict";
        e.exports = n(36);
      },
      692: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < a && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
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
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), M(_);
            else {
              var t = r(c);
              null !== t && L(k, t.startTime - e);
            }
        }
        function _(e, n) {
          (m = !1), g && ((g = !1), v(C), (C = -1)), (p = !0);
          var i = h;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (h = f.priorityLevel);
                var s = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && L(k, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (h = i), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          x = !1,
          E = null,
          C = -1,
          N = 5,
          O = -1;
        function T() {
          return !(t.unstable_now() - O < N);
        }
        function R() {
          if (null !== E) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((x = !1), (E = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var D = new MessageChannel(),
            P = D.port2;
          (D.port1.onmessage = R),
            (S = function () {
              P.postMessage(null);
            });
        } else
          S = function () {
            y(R, 0);
          };
        function M(e) {
          (E = e), x || ((x = !0), S());
        }
        function L(e, n) {
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
            m || p || ((m = !0), M(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
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
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
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
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(C), (C = -1)) : (g = !0), L(k, i - o)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), M(_))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      724: (e, t, n) => {
        "use strict";
        e.exports = n(692);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & a && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(i, o), i;
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
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => Ut,
          hasStandardBrowserEnv: () => Ft,
          hasStandardBrowserWebWorkerEnv: () => Yt,
        });
      var t = {};
      n.r(t),
        n.d(t, {
          Decoder: () => Zr,
          Encoder: () => Kr,
          PacketType: () => Qr,
          protocol: () => Gr,
        });
      var r,
        a = n(60),
        i = n.t(a, 2),
        o = n(180),
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
      function h(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function p(e, t, n, r) {
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
      function y(e, t, n, a) {
        void 0 === a && (a = {});
        let { window: i = document.defaultView, v5Compat: o = !1 } = a,
          s = i.history,
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
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
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
            return e(i, s);
          },
          listen(e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(c, v),
              (f = e),
              () => {
                i.removeEventListener(c, v), (f = null);
              }
            );
          },
          createHref: (e) => t(i, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = r.Push;
            let a = p(w.location, e, t);
            n && n(a, e), (g = y() + 1);
            let u = h(a, g),
              c = w.createHref(a);
            try {
              s.pushState(u, "", c);
            } catch (d) {
              if (d instanceof DOMException && "DataCloneError" === d.name)
                throw d;
              i.location.assign(c);
            }
            o && f && f({ action: l, location: w.location, delta: 1 });
          },
          replace: function (e, t) {
            l = r.Replace;
            let a = p(w.location, e, t);
            n && n(a, e), (g = y());
            let i = h(a, g),
              u = w.createHref(a);
            s.replaceState(i, "", u),
              o && f && f({ action: l, location: w.location, delta: 0 });
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
        let r = M(("string" === typeof t ? g(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = w(e);
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
        })(a);
        let i = null;
        for (let o = 0; null == i && o < a.length; ++o) i = R(a[o], P(r));
        return i;
      }
      function w(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, i) => {
          let o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (d(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          let s = F([r, o.relativePath]),
            l = n.concat(o);
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
              t.push({ path: s, score: T(s, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of k(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function k(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          i = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [i, ""] : [i];
        let o = k(r.join("/")),
          s = [];
        return (
          s.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
          a && s.push(...o),
          s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const _ = /^:[\w-]+$/,
        S = 3,
        x = 2,
        E = 1,
        C = 10,
        N = -2,
        O = (e) => "*" === e;
      function T(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(O) && (r += N),
          t && (r += x),
          n
            .filter((e) => !O(e))
            .reduce((e, t) => e + (_.test(t) ? S : "" === t ? E : C), r)
        );
      }
      function R(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          i = [];
        for (let o = 0; o < n.length; ++o) {
          let e = n[o],
            s = o === n.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            u = D(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
              l
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          i.push({
            params: r,
            pathname: F([a, u.pathname]),
            pathnameBase: z(F([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = F([a, u.pathnameBase]));
        }
        return i;
      }
      function D(e, t) {
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
              a =
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
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let i = a[0],
          o = i.replace(/(.)\/+$/, "$1"),
          s = a.slice(1),
          l = r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = s[n] || "";
              o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const l = s[n];
            return (
              (e[r] =
                a && !l
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
        return { params: l, pathname: i, pathnameBase: o, pattern: e };
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
      function M(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function L(e, t, n, r) {
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
      function j(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function A(e, t) {
        let n = j(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function U(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = g(e))
            : ((a = u({}, e)),
              d(
                !a.pathname || !a.pathname.includes("?"),
                L("?", "pathname", "search", a)
              ),
              d(
                !a.pathname || !a.pathname.includes("#"),
                L("#", "pathname", "hash", a)
              ),
              d(
                !a.search || !a.search.includes("#"),
                L("#", "search", "hash", a)
              ));
        let i,
          o = "" === e || "" === a.pathname,
          s = o ? "/" : a.pathname;
        if (null == s) i = n;
        else {
          let e = t.length - 1;
          if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          i = e >= 0 ? t[e] : "/";
        }
        let l = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? g(e) : e,
              i = n
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
            return { pathname: i, search: Y(r), hash: I(a) };
          })(a, i),
          c = s && "/" !== s && s.endsWith("/"),
          f = (o || "." === s) && n.endsWith("/");
        return l.pathname.endsWith("/") || (!c && !f) || (l.pathname += "/"), l;
      }
      const F = (e) => e.join("/").replace(/\/\/+/g, "/"),
        z = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        Y = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        I = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function B(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        H = (new Set(W), ["get", ...W]);
      new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          V.apply(this, arguments)
        );
      }
      const q = a.createContext(null);
      const $ = a.createContext(null);
      const G = a.createContext(null);
      const Q = a.createContext(null);
      const K = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const J = a.createContext(null);
      function Z() {
        return null != a.useContext(Q);
      }
      function X() {
        return Z() || d(!1), a.useContext(Q).location;
      }
      function ee(e) {
        a.useContext(G).static || a.useLayoutEffect(e);
      }
      function te() {
        let { isDataRoute: e } = a.useContext(K);
        return e
          ? (function () {
              let { router: e } = de(ue.UseNavigateStable),
                t = he(ce.UseNavigateStable),
                n = a.useRef(!1);
              return (
                ee(() => {
                  n.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, V({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              Z() || d(!1);
              let e = a.useContext(q),
                { basename: t, future: n, navigator: r } = a.useContext(G),
                { matches: i } = a.useContext(K),
                { pathname: o } = X(),
                s = JSON.stringify(A(i, n.v7_relativeSplatPath)),
                l = a.useRef(!1);
              return (
                ee(() => {
                  l.current = !0;
                }),
                a.useCallback(
                  function (n, a) {
                    if ((void 0 === a && (a = {}), !l.current)) return;
                    if ("number" === typeof n) return void r.go(n);
                    let i = U(n, JSON.parse(s), o, "path" === a.relative);
                    null == e &&
                      "/" !== t &&
                      (i.pathname =
                        "/" === i.pathname ? t : F([t, i.pathname])),
                      (a.replace ? r.replace : r.push)(i, a.state, a);
                  },
                  [t, r, s, o, e]
                )
              );
            })();
      }
      function ne(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { future: r } = a.useContext(G),
          { matches: i } = a.useContext(K),
          { pathname: o } = X(),
          s = JSON.stringify(A(i, r.v7_relativeSplatPath));
        return a.useMemo(
          () => U(e, JSON.parse(s), o, "path" === n),
          [e, s, o, n]
        );
      }
      function re(e, t, n, i) {
        Z() || d(!1);
        let { navigator: o } = a.useContext(G),
          { matches: s } = a.useContext(K),
          l = s[s.length - 1],
          u = l ? l.params : {},
          c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let f,
          h = X();
        if (t) {
          var p;
          let e = "string" === typeof t ? g(t) : t;
          "/" === c ||
            (null == (p = e.pathname) ? void 0 : p.startsWith(c)) ||
            d(!1),
            (f = e);
        } else f = h;
        let m = f.pathname || "/",
          y = b(e, { pathname: "/" === c ? m : m.slice(c.length) || "/" });
        let v = le(
          y &&
            y.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: F([
                  c,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : F([
                        c,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          s,
          n,
          i
        );
        return t && v
          ? a.createElement(
              Q.Provider,
              {
                value: {
                  location: V(
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
      function ae() {
        let e = (function () {
            var e;
            let t = a.useContext(J),
              n = fe(ce.UseRouteError),
              r = he(ce.UseRouteError);
            if (void 0 !== t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = B(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: r };
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("h2", null, "Unexpected Application Error!"),
          a.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? a.createElement("pre", { style: i }, n) : null,
          null
        );
      }
      const ie = a.createElement(ae, null);
      class oe extends a.Component {
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
            ? a.createElement(
                K.Provider,
                { value: this.props.routeContext },
                a.createElement(J.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function se(e) {
        let { routeContext: t, match: n, children: r } = e,
          i = a.useContext(q);
        return (
          i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
          a.createElement(K.Provider, { value: t }, r)
        );
      }
      function le(e, t, n, r) {
        var i;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === r && (r = null),
          null == e)
        ) {
          var o;
          if (null == (o = n) || !o.errors) return null;
          e = n.matches;
        }
        let s = e,
          l = null == (i = n) ? void 0 : i.errors;
        if (null != l) {
          let e = s.findIndex(
            (e) => e.route.id && (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || d(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (n && r && r.v7_partialHydration)
          for (let a = 0; a < s.length; a++) {
            let e = s[a];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (c = a),
              e.route.id)
            ) {
              let { loaderData: t, errors: r } = n,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!r || void 0 === r[e.route.id]);
              if (e.route.lazy || a) {
                (u = !0), (s = c >= 0 ? s.slice(0, c + 1) : [s[0]]);
                break;
              }
            }
          }
        return s.reduceRight((e, r, i) => {
          let o,
            d = !1,
            f = null,
            h = null;
          var p;
          n &&
            ((o = l && r.route.id ? l[r.route.id] : void 0),
            (f = r.route.errorElement || ie),
            u &&
              (c < 0 && 0 === i
                ? ((p = "route-fallback"),
                  !1 || pe[p] || (pe[p] = !0),
                  (d = !0),
                  (h = null))
                : c === i &&
                  ((d = !0), (h = r.route.hydrateFallbackElement || null))));
          let m = t.concat(s.slice(0, i + 1)),
            g = () => {
              let t;
              return (
                (t = o
                  ? f
                  : d
                  ? h
                  : r.route.Component
                  ? a.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                a.createElement(se, {
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
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === i)
            ? a.createElement(oe, {
                location: n.location,
                revalidation: n.revalidation,
                component: f,
                error: o,
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
        let t = a.useContext(q);
        return t || d(!1), t;
      }
      function fe(e) {
        let t = a.useContext($);
        return t || d(!1), t;
      }
      function he(e) {
        let t = (function (e) {
            let t = a.useContext(K);
            return t || d(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || d(!1), n.route.id;
      }
      const pe = {};
      i.startTransition;
      function me(e) {
        d(!1);
      }
      function ge(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: i,
          navigationType: o = r.Pop,
          navigator: s,
          static: l = !1,
          future: u,
        } = e;
        Z() && d(!1);
        let c = t.replace(/^\/*/, "/"),
          f = a.useMemo(
            () => ({
              basename: c,
              navigator: s,
              static: l,
              future: V({ v7_relativeSplatPath: !1 }, u),
            }),
            [c, u, s, l]
          );
        "string" === typeof i && (i = g(i));
        let {
            pathname: h = "/",
            search: p = "",
            hash: m = "",
            state: y = null,
            key: v = "default",
          } = i,
          b = a.useMemo(() => {
            let e = M(h, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: p,
                    hash: m,
                    state: y,
                    key: v,
                  },
                  navigationType: o,
                };
          }, [c, h, p, m, y, v, o]);
        return null == b
          ? null
          : a.createElement(
              G.Provider,
              { value: f },
              a.createElement(Q.Provider, { children: n, value: b })
            );
      }
      function ye(e) {
        let { children: t, location: n } = e;
        return re(ve(t), n);
      }
      new Promise(() => {});
      a.Component;
      function ve(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let i = [...t, r];
            if (e.type === a.Fragment)
              return void n.push.apply(n, ve(e.props.children, i));
            e.type !== me && d(!1), e.props.index && e.props.children && d(!1);
            let o = {
              id: e.props.id || i.join("-"),
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
            e.props.children && (o.children = ve(e.props.children, i)),
              n.push(o);
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
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const ke = [
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
      } catch (ga) {}
      new Map();
      const _e = i.startTransition;
      l.flushSync, i.useId;
      function Se(e) {
        let { basename: t, children: n, future: r, window: i } = e,
          o = a.useRef();
        var s;
        null == o.current &&
          (o.current =
            (void 0 === (s = { window: i, v5Compat: !0 }) && (s = {}),
            y(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return p(
                  "",
                  { pathname: n, search: r, hash: a },
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
        let l = o.current,
          [u, c] = a.useState({ action: l.action, location: l.location }),
          { v7_startTransition: d } = r || {},
          f = a.useCallback(
            (e) => {
              d && _e ? _e(() => c(e)) : c(e);
            },
            [c, d]
          );
        return (
          a.useLayoutEffect(() => l.listen(f), [l, f]),
          a.createElement(ge, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: l,
            future: r,
          })
        );
      }
      const xe =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Ee = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ce = a.forwardRef(function (e, t) {
          let n,
            {
              onClick: r,
              relative: i,
              reloadDocument: o,
              replace: s,
              state: l,
              target: u,
              to: c,
              preventScrollReset: f,
              unstable_viewTransition: h,
            } = e,
            p = we(e, ke),
            { basename: g } = a.useContext(G),
            y = !1;
          if ("string" === typeof c && Ee.test(c) && ((n = c), xe))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                n = M(t.pathname, g);
              t.origin === e.origin && null != n
                ? (c = n + t.search + t.hash)
                : (y = !0);
            } catch (ga) {}
          let v = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              Z() || d(!1);
              let { basename: r, navigator: i } = a.useContext(G),
                { hash: o, pathname: s, search: l } = ne(e, { relative: n }),
                u = s;
              return (
                "/" !== r && (u = "/" === s ? r : F([r, s])),
                i.createHref({ pathname: u, search: l, hash: o })
              );
            })(c, { relative: i }),
            b = (function (e, t) {
              let {
                  target: n,
                  replace: r,
                  state: i,
                  preventScrollReset: o,
                  relative: s,
                  unstable_viewTransition: l,
                } = void 0 === t ? {} : t,
                u = te(),
                c = X(),
                d = ne(e, { relative: s });
              return a.useCallback(
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
                      state: i,
                      preventScrollReset: o,
                      relative: s,
                      unstable_viewTransition: l,
                    });
                  }
                },
                [c, u, d, r, i, n, e, o, s, l]
              );
            })(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: f,
              relative: i,
              unstable_viewTransition: h,
            });
          return a.createElement(
            "a",
            be({}, p, {
              href: n || v,
              onClick:
                y || o
                  ? r
                  : function (e) {
                      r && r(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: u,
            })
          );
        });
      var Ne, Oe;
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
        })(Oe || (Oe = {}));
      var Te = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Re = a.createContext && a.createContext(Te),
        De = function () {
          return (
            (De =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            De.apply(this, arguments)
          );
        },
        Pe = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function Me(e) {
        return (
          e &&
          e.map(function (e, t) {
            return a.createElement(e.tag, De({ key: t }, e.attr), Me(e.child));
          })
        );
      }
      function Le(e) {
        return function (t) {
          return a.createElement(
            je,
            De({ attr: De({}, e.attr) }, t),
            Me(e.child)
          );
        };
      }
      function je(e) {
        var t = function (t) {
          var n,
            r = e.attr,
            i = e.size,
            o = e.title,
            s = Pe(e, ["attr", "size", "title"]),
            l = i || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            a.createElement(
              "svg",
              De(
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
                  style: De(
                    De({ color: e.color || t.color }, t.style),
                    e.style
                  ),
                  height: l,
                  width: l,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && a.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== Re
          ? a.createElement(Re.Consumer, null, function (e) {
              return t(e);
            })
          : t(Te);
      }
      function Ae(e) {
        return Le({
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
      function Ue(e) {
        return Le({
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
      function Fe(e) {
        return Le({
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
      function ze(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: Ye } = Object.prototype,
        { getPrototypeOf: Ie } = Object,
        Be = ((e) => (t) => {
          const n = Ye.call(t);
          return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        We = (e) => ((e = e.toLowerCase()), (t) => Be(t) === e),
        He = (e) => (t) => typeof t === e,
        { isArray: Ve } = Array,
        qe = He("undefined");
      const $e = We("ArrayBuffer");
      const Ge = He("string"),
        Qe = He("function"),
        Ke = He("number"),
        Je = (e) => null !== e && "object" === typeof e,
        Ze = (e) => {
          if ("object" !== Be(e)) return !1;
          const t = Ie(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Xe = We("Date"),
        et = We("File"),
        tt = We("Blob"),
        nt = We("FileList"),
        rt = We("URLSearchParams");
      function at(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), Ve(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              i = r.length;
            let o;
            for (n = 0; n < i; n++) (o = r[n]), t.call(null, e[o], o, e);
          }
      }
      function it(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const ot =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        st = (e) => !qe(e) && e !== ot;
      const lt =
        ((ut = "undefined" !== typeof Uint8Array && Ie(Uint8Array)),
        (e) => ut && e instanceof ut);
      var ut;
      const ct = We("HTMLFormElement"),
        dt = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        ft = We("RegExp"),
        ht = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          at(n, (n, a) => {
            let i;
            !1 !== (i = t(n, a, e)) && (r[a] = i || n);
          }),
            Object.defineProperties(e, r);
        },
        pt = "abcdefghijklmnopqrstuvwxyz",
        mt = "0123456789",
        gt = { DIGIT: mt, ALPHA: pt, ALPHA_DIGIT: pt + pt.toUpperCase() + mt };
      const yt = We("AsyncFunction"),
        vt = {
          isArray: Ve,
          isArrayBuffer: $e,
          isBuffer: function (e) {
            return (
              null !== e &&
              !qe(e) &&
              null !== e.constructor &&
              !qe(e.constructor) &&
              Qe(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (Qe(e.append) &&
                  ("formdata" === (t = Be(e)) ||
                    ("object" === t &&
                      Qe(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && $e(e.buffer)),
              t
            );
          },
          isString: Ge,
          isNumber: Ke,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: Je,
          isPlainObject: Ze,
          isUndefined: qe,
          isDate: Xe,
          isFile: et,
          isBlob: tt,
          isRegExp: ft,
          isFunction: Qe,
          isStream: (e) => Je(e) && Qe(e.pipe),
          isURLSearchParams: rt,
          isTypedArray: lt,
          isFileList: nt,
          forEach: at,
          merge: function e() {
            const { caseless: t } = (st(this) && this) || {},
              n = {},
              r = (r, a) => {
                const i = (t && it(n, a)) || a;
                Ze(n[i]) && Ze(r)
                  ? (n[i] = e(n[i], r))
                  : Ze(r)
                  ? (n[i] = e({}, r))
                  : Ve(r)
                  ? (n[i] = r.slice())
                  : (n[i] = r);
              };
            for (let a = 0, i = arguments.length; a < i; a++)
              arguments[a] && at(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              at(
                t,
                (t, r) => {
                  n && Qe(t) ? (e[r] = ze(t, n)) : (e[r] = t);
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
            let a, i, o;
            const s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
                (o = a[i]),
                  (r && !r(o, e, t)) || s[o] || ((t[o] = e[o]), (s[o] = !0));
              e = !1 !== n && Ie(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: Be,
          kindOfTest: We,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (Ve(e)) return e;
            let t = e.length;
            if (!Ke(t)) return null;
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
          isHTMLForm: ct,
          hasOwnProperty: dt,
          hasOwnProp: dt,
          reduceDescriptors: ht,
          freezeMethods: (e) => {
            ht(e, (t, n) => {
              if (Qe(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              Qe(r) &&
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
            return Ve(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: it,
          global: ot,
          isContextDefined: st,
          ALPHABET: gt,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : gt.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              Qe(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (Je(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = Ve(e) ? [] : {};
                    return (
                      at(e, (e, t) => {
                        const i = n(e, r + 1);
                        !qe(i) && (a[t] = i);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: yt,
          isThenable: (e) => e && (Je(e) || Qe(e)) && Qe(e.then) && Qe(e.catch),
        };
      function bt(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      vt.inherits(bt, Error, {
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
            config: vt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const wt = bt.prototype,
        kt = {};
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
        kt[e] = { value: e };
      }),
        Object.defineProperties(bt, kt),
        Object.defineProperty(wt, "isAxiosError", { value: !0 }),
        (bt.from = (e, t, n, r, a, i) => {
          const o = Object.create(wt);
          return (
            vt.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            bt.call(o, e.message, t, n, r, a),
            (o.cause = e),
            (o.name = e.name),
            i && Object.assign(o, i),
            o
          );
        });
      const _t = bt;
      function St(e) {
        return vt.isPlainObject(e) || vt.isArray(e);
      }
      function xt(e) {
        return vt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Et(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = xt(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const Ct = vt.toFlatObject(vt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const Nt = function (e, t, n) {
        if (!vt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = vt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !vt.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || u,
          i = n.dots,
          o = n.indexes,
          s =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            vt.isSpecCompliantForm(t);
        if (!vt.isFunction(a))
          throw new TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (vt.isDate(e)) return e.toISOString();
          if (!s && vt.isBlob(e))
            throw new _t("Blob is not supported. Use a Buffer instead.");
          return vt.isArrayBuffer(e) || vt.isTypedArray(e)
            ? s && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, n, a) {
          let s = e;
          if (e && !a && "object" === typeof e)
            if (vt.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (vt.isArray(e) &&
                (function (e) {
                  return vt.isArray(e) && !e.some(St);
                })(e)) ||
              ((vt.isFileList(e) || vt.endsWith(n, "[]")) &&
                (s = vt.toArray(e)))
            )
              return (
                (n = xt(n)),
                s.forEach(function (e, r) {
                  !vt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === o ? Et([n], r, i) : null === o ? n : n + "[]",
                      l(e)
                    );
                }),
                !1
              );
          return !!St(e) || (t.append(Et(a, n, i), l(e)), !1);
        }
        const c = [],
          d = Object.assign(Ct, {
            defaultVisitor: u,
            convertValue: l,
            isVisitable: St,
          });
        if (!vt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!vt.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                vt.forEach(n, function (n, i) {
                  !0 ===
                    (!(vt.isUndefined(n) || null === n) &&
                      a.call(t, n, vt.isString(i) ? i.trim() : i, r, d)) &&
                    e(n, r ? r.concat(i) : [i]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function Ot(e) {
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
      function Tt(e, t) {
        (this._pairs = []), e && Nt(e, this, t);
      }
      const Rt = Tt.prototype;
      (Rt.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Rt.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, Ot);
              }
            : Ot;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const Dt = Tt;
      function Pt(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Mt(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || Pt,
          a = n && n.serialize;
        let i;
        if (
          ((i = a
            ? a(t, n)
            : vt.isURLSearchParams(t)
            ? t.toString()
            : new Dt(t, n).toString(r)),
          i)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      }
      const Lt = class {
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
            vt.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        jt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        At = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : Dt,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        Ut = "undefined" !== typeof window && "undefined" !== typeof document,
        Ft =
          ((zt = "undefined" !== typeof navigator && navigator.product),
          Ut && ["ReactNative", "NativeScript", "NS"].indexOf(zt) < 0);
      var zt;
      const Yt =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        It = { ...e, ...At };
      const Bt = function (e) {
        function t(e, n, r, a) {
          let i = e[a++];
          if ("__proto__" === i) return !0;
          const o = Number.isFinite(+i),
            s = a >= e.length;
          if (((i = !i && vt.isArray(r) ? r.length : i), s))
            return vt.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !o;
          (r[i] && vt.isObject(r[i])) || (r[i] = []);
          return (
            t(e, n, r[i], a) &&
              vt.isArray(r[i]) &&
              (r[i] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let i;
                for (r = 0; r < a; r++) (i = n[r]), (t[i] = e[i]);
                return t;
              })(r[i])),
            !o
          );
        }
        if (vt.isFormData(e) && vt.isFunction(e.entries)) {
          const n = {};
          return (
            vt.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return vt
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
      const Wt = {
        transitional: jt,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = vt.isObject(e);
            a && vt.isHTMLForm(e) && (e = new FormData(e));
            if (vt.isFormData(e)) return r ? JSON.stringify(Bt(e)) : e;
            if (
              vt.isArrayBuffer(e) ||
              vt.isBuffer(e) ||
              vt.isStream(e) ||
              vt.isFile(e) ||
              vt.isBlob(e)
            )
              return e;
            if (vt.isArrayBufferView(e)) return e.buffer;
            if (vt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let i;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return Nt(
                    e,
                    new It.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return It.isNode && vt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (i = vt.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return Nt(
                  i ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (vt.isString(e))
                    try {
                      return (t || JSON.parse)(e), vt.trim(e);
                    } catch (ga) {
                      if ("SyntaxError" !== ga.name) throw ga;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Wt.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && vt.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (ga) {
                if (n) {
                  if ("SyntaxError" === ga.name)
                    throw _t.from(
                      ga,
                      _t.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw ga;
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
        env: { FormData: It.classes.FormData, Blob: It.classes.Blob },
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
      vt.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Wt.headers[e] = {};
      });
      const Ht = Wt,
        Vt = vt.toObjectSet([
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
        qt = Symbol("internals");
      function $t(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Gt(e) {
        return !1 === e || null == e
          ? e
          : vt.isArray(e)
          ? e.map(Gt)
          : String(e);
      }
      function Qt(e, t, n, r, a) {
        return vt.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            vt.isString(t)
              ? vt.isString(r)
                ? -1 !== t.indexOf(r)
                : vt.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class Kt {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = $t(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const i = vt.findKey(r, a);
            (!i ||
              void 0 === r[i] ||
              !0 === n ||
              (void 0 === n && !1 !== r[i])) &&
              (r[i || t] = Gt(e));
          }
          const i = (e, t) => vt.forEach(e, (e, n) => a(e, n, t));
          return (
            vt.isPlainObject(e) || e instanceof this.constructor
              ? i(e, t)
              : vt.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              ? i(
                  ((e) => {
                    const t = {};
                    let n, r, a;
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (a = e.indexOf(":")),
                            (n = e.substring(0, a).trim().toLowerCase()),
                            (r = e.substring(a + 1).trim()),
                            !n ||
                              (t[n] && Vt[n]) ||
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
              : null != e && a(t, e, n),
            this
          );
        }
        get(e, t) {
          if ((e = $t(e))) {
            const n = vt.findKey(this, e);
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
              if (vt.isFunction(t)) return t.call(this, e, n);
              if (vt.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = $t(e))) {
            const n = vt.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Qt(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = $t(e))) {
              const a = vt.findKey(n, e);
              !a || (t && !Qt(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return vt.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Qt(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            vt.forEach(this, (r, a) => {
              const i = vt.findKey(n, a);
              if (i) return (t[i] = Gt(r)), void delete t[a];
              const o = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(a)
                : String(a).trim();
              o !== a && delete t[a], (t[o] = Gt(r)), (n[o] = !0);
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
            vt.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && vt.isArray(n) ? n.join(", ") : n);
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
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[qt] = this[qt] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = $t(e);
            t[r] ||
              (!(function (e, t) {
                const n = vt.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return vt.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Kt.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        vt.reduceDescriptors(Kt.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        vt.freezeMethods(Kt);
      const Jt = Kt;
      function Zt(e, t) {
        const n = this || Ht,
          r = t || n,
          a = Jt.from(r.headers);
        let i = r.data;
        return (
          vt.forEach(e, function (e) {
            i = e.call(n, i, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          i
        );
      }
      function Xt(e) {
        return !(!e || !e.__CANCEL__);
      }
      function en(e, t, n) {
        _t.call(this, null == e ? "canceled" : e, _t.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      vt.inherits(en, _t, { __CANCEL__: !0 });
      const tn = en;
      const nn = It.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, a, i) {
              const o = [e + "=" + encodeURIComponent(t)];
              vt.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
                vt.isString(r) && o.push("path=" + r),
                vt.isString(a) && o.push("domain=" + a),
                !0 === i && o.push("secure"),
                (document.cookie = o.join("; "));
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
      function rn(e, t) {
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
      const an = It.hasStandardBrowserEnv
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
                const t = vt.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      const on = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          i = 0,
          o = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            const l = Date.now(),
              u = r[o];
            a || (a = l), (n[i] = s), (r[i] = l);
            let c = o,
              d = 0;
            for (; c !== i; ) (d += n[c++]), (c %= e);
            if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), l - a < t))
              return;
            const f = u && l - u;
            return f ? Math.round((1e3 * d) / f) : void 0;
          }
        );
      };
      function sn(e, t) {
        let n = 0;
        const r = on(50, 250);
        return (a) => {
          const i = a.loaded,
            o = a.lengthComputable ? a.total : void 0,
            s = i - n,
            l = r(s);
          n = i;
          const u = {
            loaded: i,
            total: o,
            progress: o ? i / o : void 0,
            bytes: s,
            rate: l || void 0,
            estimated: l && o && i <= o ? (o - i) / l : void 0,
            event: a,
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      const ln =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const a = Jt.from(e.headers).normalize();
              let i,
                o,
                { responseType: s, withXSRFToken: l } = e;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(i),
                  e.signal && e.signal.removeEventListener("abort", i);
              }
              if (vt.isFormData(r))
                if (
                  It.hasStandardBrowserEnv ||
                  It.hasStandardBrowserWebWorkerEnv
                )
                  a.setContentType(!1);
                else if (!1 !== (o = a.getContentType())) {
                  const [e, ...t] = o
                    ? o
                        .split(";")
                        .map((e) => e.trim())
                        .filter(Boolean)
                    : [];
                  a.setContentType(
                    [e || "multipart/form-data", ...t].join("; ")
                  );
                }
              let c = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                a.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const d = rn(e.baseURL, e.url);
              function f() {
                if (!c) return;
                const r = Jt.from(
                  "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                );
                !(function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new _t(
                          "Request failed with status code " + n.status,
                          [_t.ERR_BAD_REQUEST, _t.ERR_BAD_RESPONSE][
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
                  Mt(d, e.params, e.paramsSerializer),
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
                    (n(new _t("Request aborted", _t.ECONNABORTED, e, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  n(new _t("Network Error", _t.ERR_NETWORK, e, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const r = e.transitional || jt;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new _t(
                        t,
                        r.clarifyTimeoutError ? _t.ETIMEDOUT : _t.ECONNABORTED,
                        e,
                        c
                      )
                    ),
                    (c = null);
                }),
                It.hasStandardBrowserEnv &&
                  (l && vt.isFunction(l) && (l = l(e)),
                  l || (!1 !== l && an(d))))
              ) {
                const t =
                  e.xsrfHeaderName &&
                  e.xsrfCookieName &&
                  nn.read(e.xsrfCookieName);
                t && a.set(e.xsrfHeaderName, t);
              }
              void 0 === r && a.setContentType(null),
                "setRequestHeader" in c &&
                  vt.forEach(a.toJSON(), function (e, t) {
                    c.setRequestHeader(t, e);
                  }),
                vt.isUndefined(e.withCredentials) ||
                  (c.withCredentials = !!e.withCredentials),
                s && "json" !== s && (c.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  c.addEventListener("progress", sn(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener("progress", sn(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((i = (t) => {
                    c &&
                      (n(!t || t.type ? new tn(null, e, c) : t),
                      c.abort(),
                      (c = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(i),
                  e.signal &&
                    (e.signal.aborted
                      ? i()
                      : e.signal.addEventListener("abort", i)));
              const h = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(d);
              h && -1 === It.protocols.indexOf(h)
                ? n(
                    new _t(
                      "Unsupported protocol " + h + ":",
                      _t.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : c.send(r || null);
            });
          },
        un = { http: null, xhr: ln };
      vt.forEach(un, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (ga) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const cn = (e) => "- ".concat(e),
        dn = (e) => vt.isFunction(e) || null === e || !1 === e,
        fn = (e) => {
          e = vt.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let i = 0; i < t; i++) {
            let t;
            if (
              ((n = e[i]),
              (r = n),
              !dn(n) && ((r = un[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new _t("Unknown adapter '".concat(t, "'"));
            if (r) break;
            a[t || "#" + i] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
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
                ? "since :\n" + e.map(cn).join("\n")
                : " " + cn(e[0])
              : "as no adapter specified";
            throw new _t(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function hn(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new tn(null, e);
      }
      function pn(e) {
        hn(e),
          (e.headers = Jt.from(e.headers)),
          (e.data = Zt.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return fn(e.adapter || Ht.adapter)(e).then(
          function (t) {
            return (
              hn(e),
              (t.data = Zt.call(e, e.transformResponse, t)),
              (t.headers = Jt.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Xt(t) ||
                (hn(e),
                t &&
                  t.response &&
                  ((t.response.data = Zt.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = Jt.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const mn = (e) => (e instanceof Jt ? e.toJSON() : e);
      function gn(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return vt.isPlainObject(e) && vt.isPlainObject(t)
            ? vt.merge.call({ caseless: n }, e, t)
            : vt.isPlainObject(t)
            ? vt.merge({}, t)
            : vt.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return vt.isUndefined(t)
            ? vt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function i(e, t) {
          if (!vt.isUndefined(t)) return r(void 0, t);
        }
        function o(e, t) {
          return vt.isUndefined(t)
            ? vt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function s(n, a, i) {
          return i in t ? r(n, a) : i in e ? r(void 0, n) : void 0;
        }
        const l = {
          url: i,
          method: i,
          data: i,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          withXSRFToken: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: s,
          headers: (e, t) => a(mn(e), mn(t), !0),
        };
        return (
          vt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const i = l[r] || a,
              o = i(e[r], t[r], r);
            (vt.isUndefined(o) && i !== s) || (n[r] = o);
          }),
          n
        );
      }
      const yn = "1.6.7",
        vn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          vn[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const bn = {};
      vn.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.6.7] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, i) => {
          if (!1 === e)
            throw new _t(
              r(a, " has been removed" + (t ? " in " + t : "")),
              _t.ERR_DEPRECATED
            );
          return (
            t &&
              !bn[a] &&
              ((bn[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, i)
          );
        };
      };
      const wn = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new _t(
                "options must be an object",
                _t.ERR_BAD_OPTION_VALUE
              );
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const i = r[a],
                o = t[i];
              if (o) {
                const t = e[i],
                  n = void 0 === t || o(t, i, e);
                if (!0 !== n)
                  throw new _t(
                    "option " + i + " must be " + n,
                    _t.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new _t("Unknown option " + i, _t.ERR_BAD_OPTION);
            }
          },
          validators: vn,
        },
        kn = wn.validators;
      class _n {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new Lt(), response: new Lt() });
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
            (t = gn(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            wn.assertOptions(
              n,
              {
                silentJSONParsing: kn.transitional(kn.boolean),
                forcedJSONParsing: kn.transitional(kn.boolean),
                clarifyTimeoutError: kn.transitional(kn.boolean),
              },
              !1
            ),
            null != r &&
              (vt.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : wn.assertOptions(
                    r,
                    { encode: kn.function, serialize: kn.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let i = a && vt.merge(a.common, a[t.method]);
          a &&
            vt.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = Jt.concat(i, a));
          const o = [];
          let s = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((s = s && e.synchronous), o.unshift(e.fulfilled, e.rejected));
          });
          const l = [];
          let u;
          this.interceptors.response.forEach(function (e) {
            l.push(e.fulfilled, e.rejected);
          });
          let c,
            d = 0;
          if (!s) {
            const e = [pn.bind(this), void 0];
            for (
              e.unshift.apply(e, o),
                e.push.apply(e, l),
                c = e.length,
                u = Promise.resolve(t);
              d < c;

            )
              u = u.then(e[d++], e[d++]);
            return u;
          }
          c = o.length;
          let f = t;
          for (d = 0; d < c; ) {
            const e = o[d++],
              t = o[d++];
            try {
              f = e(f);
            } catch (h) {
              t.call(this, h);
              break;
            }
          }
          try {
            u = pn.call(this, f);
          } catch (h) {
            return Promise.reject(h);
          }
          for (d = 0, c = l.length; d < c; ) u = u.then(l[d++], l[d++]);
          return u;
        }
        getUri(e) {
          return Mt(
            rn((e = gn(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      vt.forEach(["delete", "get", "head", "options"], function (e) {
        _n.prototype[e] = function (t, n) {
          return this.request(
            gn(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        vt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                gn(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (_n.prototype[e] = t()), (_n.prototype[e + "Form"] = t(!0));
        });
      const Sn = _n;
      class xn {
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
            e(function (e, r, a) {
              n.reason || ((n.reason = new tn(e, r, a)), t(n.reason));
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
            token: new xn(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const En = xn;
      const Cn = {
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
      Object.entries(Cn).forEach((e) => {
        let [t, n] = e;
        Cn[n] = t;
      });
      const Nn = Cn;
      const On = (function e(t) {
        const n = new Sn(t),
          r = ze(Sn.prototype.request, n);
        return (
          vt.extend(r, Sn.prototype, n, { allOwnKeys: !0 }),
          vt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(gn(t, n));
          }),
          r
        );
      })(Ht);
      (On.Axios = Sn),
        (On.CanceledError = tn),
        (On.CancelToken = En),
        (On.isCancel = Xt),
        (On.VERSION = yn),
        (On.toFormData = Nt),
        (On.AxiosError = _t),
        (On.Cancel = On.CanceledError),
        (On.all = function (e) {
          return Promise.all(e);
        }),
        (On.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (On.isAxiosError = function (e) {
          return vt.isObject(e) && !0 === e.isAxiosError;
        }),
        (On.mergeConfig = gn),
        (On.AxiosHeaders = Jt),
        (On.formToJSON = (e) => Bt(vt.isHTMLForm(e) ? new FormData(e) : e)),
        (On.getAdapter = fn),
        (On.HttpStatusCode = Nn),
        (On.default = On);
      const Tn = On;
      var Rn = n(496);
      const Dn = function () {
        const [e, t] = (0, a.useState)(null),
          [n, r] = (0, a.useState)(null),
          i = te();
        return (0, Rn.jsx)("div", {
          className:
            "bg-gray-900 min-h-screen flex justify-center items-center",
          children: (0, Rn.jsxs)("div", {
            className:
              "bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white",
            children: [
              (0, Rn.jsx)("h2", {
                className: "text-2xl font-semibold text-center mb-4",
                children: "Login",
              }),
              (0, Rn.jsxs)("form", {
                onSubmit: async (t) => {
                  t.preventDefault();
                  let r = { username: e, password: n };
                  r.username = r.username.toLowerCase();
                  try {
                    const e = await Tn.post(
                      "http://127.0.0.1:5100/user/login",
                      r
                    );
                    200 === e.data.status
                      ? (localStorage.setItem("valid", !0),
                        localStorage.setItem("token", e.data.token),
                        localStorage.setItem("username", e.data.username),
                        localStorage.setItem("id", e.data.id),
                        i("/dashboard"))
                      : (localStorage.setItem("valid", !1),
                        alert("Invalid credentials"));
                  } catch (a) {
                    alert("Invalid credentials");
                  }
                },
                className: "flex flex-col gap-4",
                children: [
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Fe, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "text",
                        id: "username",
                        className:
                          "w-full h-12 pl-10 pr-3 text-base bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Username",
                        onChange: (e) => t(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Ue, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "password",
                        id: "password",
                        className:
                          "w-full h-12 pl-10 pr-3 text-base bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Password",
                        onChange: (e) => r(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsx)("button", {
                    type: "submit",
                    className:
                      "h-12 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition",
                    children: "Login",
                  }),
                ],
              }),
              (0, Rn.jsxs)("div", {
                className: "text-center mt-4 text-gray-400",
                children: [
                  (0, Rn.jsx)("span", { children: "or " }),
                  (0, Rn.jsx)(Ce, {
                    to: "/signup",
                    className: "text-blue-400 hover:underline",
                    children: "Register Here!",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function Pn() {
        const [e, t] = (0, a.useState)(""),
          [n, r] = (0, a.useState)(""),
          [i, o] = (0, a.useState)(""),
          [s, l] = (0, a.useState)(""),
          [u, c] = (0, a.useState)(""),
          [d, f] = (0, a.useState)(""),
          h = {
            firstName: e,
            lastName: n,
            username: i,
            email: s,
            password: u,
            con_password: d,
          },
          p = te();
        return (0, Rn.jsx)("div", {
          className:
            "bg-gray-900 min-h-screen flex justify-center items-center",
          children: (0, Rn.jsxs)("div", {
            className:
              "bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white",
            children: [
              (0, Rn.jsx)("h2", {
                className: "text-2xl font-semibold text-center mb-4",
                children: "Sign Up",
              }),
              (0, Rn.jsxs)("form", {
                onSubmit: async (e) => {
                  e.preventDefault();
                  const { password: t, con_password: n } = h;
                  if (t === n) {
                    const e = await Tn.post(
                      "http://127.0.0.1:5100/user/signup",
                      h
                    );
                    201 === e.data.status
                      ? (localStorage.setItem("valid", !0),
                        localStorage.setItem("token", e.data.token),
                        localStorage.setItem("username", e.data.username),
                        localStorage.setItem("id", e.data.id),
                        alert("Registration Successful"),
                        p("/dashboard"))
                      : alert("Registration Failed");
                  } else alert("Password and Confirm Password must be same");
                },
                className: "flex flex-col gap-4",
                children: [
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Fe, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "text",
                        className:
                          "w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "First Name",
                        onChange: (e) => t(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Fe, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "text",
                        className:
                          "w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Last Name",
                        onChange: (e) => r(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Ae, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "email",
                        className:
                          "w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Email",
                        onChange: (e) => l(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Fe, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "text",
                        className:
                          "w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Username",
                        onChange: (e) => o(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Ue, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "password",
                        className:
                          "w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Password",
                        onChange: (e) => c(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, Rn.jsx)(Ue, {
                        className: "absolute left-3 top-3 text-gray-400",
                        size: 20,
                      }),
                      (0, Rn.jsx)("input", {
                        type: "password",
                        className:
                          "w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "Confirm Password",
                        onChange: (e) => f(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, Rn.jsx)("button", {
                    type: "submit",
                    className:
                      "h-12 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition",
                    children: "Register",
                  }),
                ],
              }),
              (0, Rn.jsxs)("div", {
                className: "text-center mt-4 text-gray-400",
                children: [
                  (0, Rn.jsx)("span", {
                    children: "Already have an account? ",
                  }),
                  (0, Rn.jsx)(Ce, {
                    to: "/",
                    className: "text-blue-400 hover:underline",
                    children: "Login",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Mn() {
        return (0, Rn.jsx)("div", {
          children: (0, Rn.jsx)("div", {
            className:
              "container mx-auto min-h-screen min-w-full flex justify-center items-center",
            children: (0, Rn.jsxs)("div", {
              className:
                " flex flex-col justify-center items-center text-center text-4xl bg-white/40 z-20 border-4 rounded-xl border-slate-700 py-24 px-56",
              children: [
                (0, Rn.jsx)("h1", {
                  className: "text-[#282828] ",
                  children: "404 Error",
                }),
                (0, Rn.jsx)("h3", {
                  className: "text-[#282828] ",
                  children: "Page not found",
                }),
              ],
            }),
          }),
        });
      }
      function Ln() {
        const [e, t] = (0, a.useState)([]),
          [n, r] = (0, a.useState)([]),
          i = te();
        (0, a.useEffect)(() => {
          o(), s();
        }, []);
        const o = async () => {
            try {
              const e = await Tn.get("http://127.0.0.1:5100/group/groups");
              t(e.data);
            } catch (e) {
              console.error("Error loading groups:", e);
            }
          },
          s = async () => {
            try {
              const e = await Tn.get("http://127.0.0.1:5100/user/users");
              r(e.data.data);
            } catch (e) {
              console.error("Error loading users:", e);
            }
          };
        return (0, Rn.jsxs)("div", {
          className: "bg-gray-900 min-h-screen text-white",
          children: [
            (0, Rn.jsxs)("div", {
              className:
                "flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md",
              children: [
                (0, Rn.jsx)("h1", {
                  className: "text-3xl font-semibold",
                  children: "Dashboard",
                }),
                (0, Rn.jsxs)("div", {
                  className: "space-x-4",
                  children: [
                    (0, Rn.jsx)(Ce, {
                      to: "/group",
                      children: (0, Rn.jsx)("button", {
                        className:
                          "bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white",
                        children: "Add Group",
                      }),
                    }),
                    (0, Rn.jsx)("button", {
                      onClick: () => {
                        localStorage.clear(), i("/");
                      },
                      className:
                        "bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white",
                      children: "Logout",
                    }),
                  ],
                }),
              ],
            }),
            (0, Rn.jsxs)("div", {
              className:
                "container mx-auto p-6 flex flex-col md:flex-row gap-8 mt-10",
              children: [
                (0, Rn.jsxs)("div", {
                  className:
                    "w-full md:w-1/2 bg-gray-800 p-5 rounded-lg shadow-lg",
                  children: [
                    (0, Rn.jsx)("h2", {
                      className: "text-xl font-semibold mb-4 border-b pb-2",
                      children: "Users",
                    }),
                    n.length > 0
                      ? n.map((e) =>
                          (0, Rn.jsx)(
                            "div",
                            {
                              className:
                                "bg-gray-700 p-3 mb-2 rounded-lg shadow-md",
                              children: (0, Rn.jsxs)("p", {
                                children: [
                                  (0, Rn.jsx)("strong", {
                                    children: "Username:",
                                  }),
                                  " ",
                                  e.username,
                                ],
                              }),
                            },
                            e._id
                          )
                        )
                      : (0, Rn.jsx)("p", {
                          className: "text-gray-400",
                          children: "No users available",
                        }),
                  ],
                }),
                (0, Rn.jsxs)("div", {
                  className:
                    "w-full md:w-1/2 bg-gray-800 p-5 rounded-lg shadow-lg",
                  children: [
                    (0, Rn.jsx)("h2", {
                      className: "text-xl font-semibold mb-4 border-b pb-2",
                      children: "Groups",
                    }),
                    e.length > 0
                      ? e.map((e) =>
                          (0, Rn.jsxs)(
                            "div",
                            {
                              className:
                                "bg-gray-700 p-4 mb-3 rounded-lg shadow-md",
                              children: [
                                (0, Rn.jsxs)("p", {
                                  className: "font-semibold",
                                  children: ["Group Name: ", e.name],
                                }),
                                (0, Rn.jsxs)("p", {
                                  className: "text-sm text-gray-400",
                                  children: ["Members: ", e.members.length],
                                }),
                                (0, Rn.jsxs)("div", {
                                  className: "mt-2 flex space-x-3",
                                  children: [
                                    (0, Rn.jsx)("button", {
                                      onClick: () => {
                                        return (
                                          (t = e._id),
                                          void i("/chat/".concat(t))
                                        );
                                        var t;
                                      },
                                      className:
                                        "bg-green-600 hover:bg-green-500 px-3 py-1 rounded-lg text-white",
                                      children: "Join",
                                    }),
                                    (0, Rn.jsx)("button", {
                                      onClick: () =>
                                        (async (e) => {
                                          try {
                                            await Tn.delete(
                                              "http://127.0.0.1:5100/group/".concat(
                                                e
                                              )
                                            ),
                                              o();
                                          } catch (t) {
                                            console.error(
                                              "Error deleting group:",
                                              t
                                            );
                                          }
                                        })(e._id),
                                      className:
                                        "bg-red-600 hover:bg-red-500 px-3 py-1 rounded-lg text-white",
                                      children: "Delete",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e._id
                          )
                        )
                      : (0, Rn.jsx)("p", {
                          className: "text-gray-400",
                          children: "No groups available",
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function jn(e) {
        return Le({
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
      function An(e) {
        return Le({
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
      function Un() {
        const [e, t] = (0, a.useState)({ name: "", member: [] }),
          n = te();
        return (0, Rn.jsxs)("div", {
          className: "bg-gray-900 min-h-screen text-white",
          children: [
            (0, Rn.jsx)("div", {
              className:
                "flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md",
              children: (0, Rn.jsx)(Ce, {
                to: "/dashboard",
                children: (0, Rn.jsx)(An, {
                  className:
                    "text-3xl text-white hover:text-gray-400 cursor-pointer",
                }),
              }),
            }),
            (0, Rn.jsx)("div", {
              className:
                "container mx-auto flex justify-center items-center min-h-screen",
              children: (0, Rn.jsxs)("div", {
                className:
                  "bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md",
                children: [
                  (0, Rn.jsx)("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: "Add Group",
                  }),
                  (0, Rn.jsxs)("form", {
                    onSubmit: async (t) => {
                      t.preventDefault();
                      const r = localStorage.getItem("id");
                      try {
                        const t = await Tn.post(
                          "http://127.0.0.1:5100/group/create",
                          e
                        );
                        if ((console.log("nnnn", t), t.data._id)) {
                          const e = t.data._id;
                          await Tn.post(
                            "http://127.0.0.1:5100/group/".concat(
                              e,
                              "/members"
                            ),
                            { memberId: r }
                          ),
                            n("/dashboard");
                        }
                      } catch (a) {
                        alert(a.response.data.error), console.log(a);
                      }
                    },
                    className: "flex flex-col gap-4",
                    children: [
                      (0, Rn.jsx)("div", {
                        className: "relative",
                        children: (0, Rn.jsxs)("div", {
                          className: "relative flex items-center mt-1",
                          children: [
                            (0, Rn.jsx)(jn, {
                              className:
                                "absolute left-3 text-gray-400 text-lg",
                            }),
                            (0, Rn.jsx)("input", {
                              type: "text",
                              name: "name",
                              value: e.name,
                              onChange: (n) => {
                                const { name: r, value: a } = n.target;
                                var i;
                                t({
                                  ...e,
                                  [r]:
                                    ((i = a),
                                    i.charAt(0).toUpperCase() + i.slice(1)),
                                });
                              },
                              className:
                                "w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Enter group name",
                              required: !0,
                            }),
                          ],
                        }),
                      }),
                      (0, Rn.jsx)("button", {
                        type: "submit",
                        className:
                          "w-full h-12 px-6 py-2 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition-all",
                        children: "Add Group",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      const Fn = Object.create(null);
      (Fn.open = "0"),
        (Fn.close = "1"),
        (Fn.ping = "2"),
        (Fn.pong = "3"),
        (Fn.message = "4"),
        (Fn.upgrade = "5"),
        (Fn.noop = "6");
      const zn = Object.create(null);
      Object.keys(Fn).forEach((e) => {
        zn[Fn[e]] = e;
      });
      const Yn = { type: "error", data: "parser error" },
        In =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        Bn = "function" === typeof ArrayBuffer,
        Wn = (e) =>
          "function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
        Hn = (e, t, n) => {
          let { type: r, data: a } = e;
          return In && a instanceof Blob
            ? t
              ? n(a)
              : Vn(a, n)
            : Bn && (a instanceof ArrayBuffer || Wn(a))
            ? t
              ? n(a)
              : Vn(new Blob([a]), n)
            : n(Fn[r] + (a || ""));
        },
        Vn = (e, t) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const e = n.result.split(",")[1];
              t("b" + (e || ""));
            }),
            n.readAsDataURL(e)
          );
        };
      function qn(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      let $n;
      const Gn =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Qn = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256);
      for (let n = 0; n < 64; n++) Qn[Gn.charCodeAt(n)] = n;
      const Kn = "function" === typeof ArrayBuffer,
        Jn = (e, t) => {
          if ("string" !== typeof e) return { type: "message", data: Xn(e, t) };
          const n = e.charAt(0);
          if ("b" === n)
            return { type: "message", data: Zn(e.substring(1), t) };
          return zn[n]
            ? e.length > 1
              ? { type: zn[n], data: e.substring(1) }
              : { type: zn[n] }
            : Yn;
        },
        Zn = (e, t) => {
          if (Kn) {
            const n = ((e) => {
              let t,
                n,
                r,
                a,
                i,
                o = 0.75 * e.length,
                s = e.length,
                l = 0;
              "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
              const u = new ArrayBuffer(o),
                c = new Uint8Array(u);
              for (t = 0; t < s; t += 4)
                (n = Qn[e.charCodeAt(t)]),
                  (r = Qn[e.charCodeAt(t + 1)]),
                  (a = Qn[e.charCodeAt(t + 2)]),
                  (i = Qn[e.charCodeAt(t + 3)]),
                  (c[l++] = (n << 2) | (r >> 4)),
                  (c[l++] = ((15 & r) << 4) | (a >> 2)),
                  (c[l++] = ((3 & a) << 6) | (63 & i));
              return u;
            })(e);
            return Xn(n, t);
          }
          return { base64: !0, data: e };
        },
        Xn = (e, t) =>
          "blob" === t
            ? e instanceof Blob
              ? e
              : new Blob([e])
            : e instanceof ArrayBuffer
            ? e
            : e.buffer,
        er = String.fromCharCode(30);
      function tr() {
        return new TransformStream({
          transform(e, t) {
            !(function (e, t) {
              In && e.data instanceof Blob
                ? e.data.arrayBuffer().then(qn).then(t)
                : Bn && (e.data instanceof ArrayBuffer || Wn(e.data))
                ? t(qn(e.data))
                : Hn(e, !1, (e) => {
                    $n || ($n = new TextEncoder()), t($n.encode(e));
                  });
            })(e, (n) => {
              const r = n.length;
              let a;
              if (r < 126)
                (a = new Uint8Array(1)), new DataView(a.buffer).setUint8(0, r);
              else if (r < 65536) {
                a = new Uint8Array(3);
                const e = new DataView(a.buffer);
                e.setUint8(0, 126), e.setUint16(1, r);
              } else {
                a = new Uint8Array(9);
                const e = new DataView(a.buffer);
                e.setUint8(0, 127), e.setBigUint64(1, BigInt(r));
              }
              e.data && "string" !== typeof e.data && (a[0] |= 128),
                t.enqueue(a),
                t.enqueue(n);
            });
          },
        });
      }
      let nr;
      function rr(e) {
        return e.reduce((e, t) => e + t.length, 0);
      }
      function ar(e, t) {
        if (e[0].length === t) return e.shift();
        const n = new Uint8Array(t);
        let r = 0;
        for (let a = 0; a < t; a++)
          (n[a] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
      }
      function ir(e) {
        if (e)
          return (function (e) {
            for (var t in ir.prototype) e[t] = ir.prototype[t];
            return e;
          })(e);
      }
      (ir.prototype.on = ir.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (ir.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (ir.prototype.off =
          ir.prototype.removeListener =
          ir.prototype.removeAllListeners =
          ir.prototype.removeEventListener =
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
              for (var a = 0; a < r.length; a++)
                if ((n = r[a]) === t || n.fn === t) {
                  r.splice(a, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (ir.prototype.emit = function (e) {
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
            for (var a = (n = n.slice(0)).length; r < a; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (ir.prototype.emitReserved = ir.prototype.emit),
        (ir.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (ir.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      const or =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
      function sr(e) {
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
      const lr = or.setTimeout,
        ur = or.clearTimeout;
      function cr(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = lr.bind(or)), (e.clearTimeoutFn = ur.bind(or)))
          : ((e.setTimeoutFn = or.setTimeout.bind(or)),
            (e.clearTimeoutFn = or.clearTimeout.bind(or)));
      }
      class dr extends Error {
        constructor(e, t, n) {
          super(e),
            (this.description = t),
            (this.context = n),
            (this.type = "TransportError");
        }
      }
      class fr extends ir {
        constructor(e) {
          super(),
            (this.writable = !1),
            cr(this, e),
            (this.opts = e),
            (this.query = e.query),
            (this.socket = e.socket);
        }
        onError(e, t, n) {
          return super.emitReserved("error", new dr(e, t, n)), this;
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
          const t = Jn(e, this.socket.binaryType);
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
      const hr =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        pr = 64,
        mr = {};
      let gr,
        yr = 0,
        vr = 0;
      function br(e) {
        let t = "";
        do {
          (t = hr[e % pr] + t), (e = Math.floor(e / pr));
        } while (e > 0);
        return t;
      }
      function wr() {
        const e = br(+new Date());
        return e !== gr ? ((yr = 0), (gr = e)) : e + "." + br(yr++);
      }
      for (; vr < pr; vr++) mr[hr[vr]] = vr;
      let kr = !1;
      try {
        kr =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (ya) {}
      const _r = kr;
      function Sr(e) {
        const t = e.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!t || _r))
            return new XMLHttpRequest();
        } catch (ga) {}
        if (!t)
          try {
            return new or[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (ga) {}
      }
      function xr() {}
      const Er = null != new Sr({ xdomain: !1 }).responseType;
      class Cr extends ir {
        constructor(e, t) {
          super(),
            cr(this, t),
            (this.opts = t),
            (this.method = t.method || "GET"),
            (this.uri = e),
            (this.data = void 0 !== t.data ? t.data : null),
            this.create();
        }
        create() {
          var e;
          const t = sr(
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
          const n = (this.xhr = new Sr(t));
          try {
            n.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) &&
                    n.setRequestHeader(e, this.opts.extraHeaders[e]);
              }
            } catch (ga) {}
            if ("POST" === this.method)
              try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (ga) {}
            try {
              n.setRequestHeader("Accept", "*/*");
            } catch (ga) {}
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
          } catch (ga) {
            return void this.setTimeoutFn(() => {
              this.onError(ga);
            }, 0);
          }
          "undefined" !== typeof document &&
            ((this.index = Cr.requestsCount++),
            (Cr.requests[this.index] = this));
        }
        onError(e) {
          this.emitReserved("error", e, this.xhr), this.cleanup(!0);
        }
        cleanup(e) {
          if ("undefined" !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = xr), e))
              try {
                this.xhr.abort();
              } catch (ga) {}
            "undefined" !== typeof document && delete Cr.requests[this.index],
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
        ((Cr.requestsCount = 0),
        (Cr.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", Nr);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in or ? "pagehide" : "unload", Nr, !1);
        }
      function Nr() {
        for (let e in Cr.requests)
          Cr.requests.hasOwnProperty(e) && Cr.requests[e].abort();
      }
      const Or =
          "function" === typeof Promise && "function" === typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0),
        Tr = or.WebSocket || or.MozWebSocket,
        Rr =
          "undefined" !== typeof navigator &&
          "string" === typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase();
      const Dr = {
          websocket: class extends fr {
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
                n = Rr
                  ? {}
                  : sr(
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
                this.ws = Rr ? new Tr(e, t, n) : t ? new Tr(e, t) : new Tr(e);
              } catch (ya) {
                return this.emitReserved("error", ya);
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
                Hn(n, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e);
                  } catch (ga) {}
                  r &&
                    Or(() => {
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
                  (t[this.opts.timestampParam] = wr()),
                this.supportsBinary || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            check() {
              return !!Tr;
            }
          },
          webtransport: class extends fr {
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
                        nr || (nr = new TextDecoder());
                        const n = [];
                        let r = 0,
                          a = -1,
                          i = !1;
                        return new TransformStream({
                          transform(o, s) {
                            for (n.push(o); ; ) {
                              if (0 === r) {
                                if (rr(n) < 1) break;
                                const e = ar(n, 1);
                                (i = 128 === (128 & e[0])),
                                  (a = 127 & e[0]),
                                  (r = a < 126 ? 3 : 126 === a ? 1 : 2);
                              } else if (1 === r) {
                                if (rr(n) < 2) break;
                                const e = ar(n, 2);
                                (a = new DataView(
                                  e.buffer,
                                  e.byteOffset,
                                  e.length
                                ).getUint16(0)),
                                  (r = 3);
                              } else if (2 === r) {
                                if (rr(n) < 8) break;
                                const e = ar(n, 8),
                                  t = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length
                                  ),
                                  i = t.getUint32(0);
                                if (i > Math.pow(2, 21) - 1) {
                                  s.enqueue(Yn);
                                  break;
                                }
                                (a = i * Math.pow(2, 32) + t.getUint32(4)),
                                  (r = 3);
                              } else {
                                if (rr(n) < a) break;
                                const e = ar(n, a);
                                s.enqueue(Jn(i ? e : nr.decode(e), t)), (r = 0);
                              }
                              if (0 === a || a > e) {
                                s.enqueue(Yn);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = e.readable.pipeThrough(t).getReader(),
                      r = tr();
                    r.readable.pipeTo(e.writable),
                      (this.writer = r.writable.getWriter());
                    const a = () => {
                      n.read()
                        .then((e) => {
                          let { done: t, value: n } = e;
                          t || (this.onPacket(n), a());
                        })
                        .catch((e) => {});
                    };
                    a();
                    const i = { type: "open" };
                    this.query.sid &&
                      (i.data = '{"sid":"'.concat(this.query.sid, '"}')),
                      this.writer.write(i).then(() => this.onOpen());
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
                    Or(() => {
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
          polling: class extends fr {
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
              (this.supportsBinary = Er && !t),
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
                const n = e.split(er),
                  r = [];
                for (let a = 0; a < n.length; a++) {
                  const e = Jn(n[a], t);
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
                  let a = 0;
                  e.forEach((e, i) => {
                    Hn(e, !1, (e) => {
                      (r[i] = e), ++a === n && t(r.join(er));
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
                  (t[this.opts.timestampParam] = wr()),
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
                new Cr(this.uri(), e)
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
        Pr =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        Mr = [
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
      function Lr(e) {
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
        let a = Pr.exec(e || ""),
          i = {},
          o = 14;
        for (; o--; ) i[Mr[o]] = a[o] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((i.source = t),
            (i.host = i.host
              .substring(1, i.host.length - 1)
              .replace(/;/g, ":")),
            (i.authority = i.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (i.ipv6uri = !0)),
          (i.pathNames = (function (e, t) {
            const n = /\/{2,9}/g,
              r = t.replace(n, "/").split("/");
            ("/" != t.slice(0, 1) && 0 !== t.length) || r.splice(0, 1);
            "/" == t.slice(-1) && r.splice(r.length - 1, 1);
            return r;
          })(0, i.path)),
          (i.queryKey = (function (e, t) {
            const n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r);
              }),
              n
            );
          })(0, i.query)),
          i
        );
      }
      class jr extends ir {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            e && "object" === typeof e && ((t = e), (e = null)),
            e
              ? ((e = Lr(e)),
                (t.hostname = e.host),
                (t.secure = "https" === e.protocol || "wss" === e.protocol),
                (t.port = e.port),
                e.query && (t.query = e.query))
              : t.host && (t.hostname = Lr(t.host).host),
            cr(this, t),
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
                for (let r = 0, a = n.length; r < a; r++) {
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
          return new Dr[e](n);
        }
        open() {
          let e;
          if (
            this.opts.rememberUpgrade &&
            jr.priorWebsocketSuccess &&
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
          } catch (ga) {
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
          jr.priorWebsocketSuccess = !1;
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
                    (jr.priorWebsocketSuccess = "websocket" === t.name),
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
          function a() {
            n || ((n = !0), u(), t.close(), (t = null));
          }
          const i = (e) => {
            const n = new Error("probe error: " + e);
            (n.transport = t.name), a(), this.emitReserved("upgradeError", n);
          };
          function o() {
            i("transport closed");
          }
          function s() {
            i("socket closed");
          }
          function l(e) {
            t && e.name !== t.name && a();
          }
          const u = () => {
            t.removeListener("open", r),
              t.removeListener("error", i),
              t.removeListener("close", o),
              this.off("close", s),
              this.off("upgrading", l);
          };
          t.once("open", r),
            t.once("error", i),
            t.once("close", o),
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
            (jr.priorWebsocketSuccess = "websocket" === this.transport.name),
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
                        for (let r = 0, a = e.length; r < a; r++)
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
          const a = { type: e, data: t, options: n };
          this.emitReserved("packetCreate", a),
            this.writeBuffer.push(a),
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
          (jr.priorWebsocketSuccess = !1),
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
      jr.protocol = 4;
      jr.protocol;
      const Ar = "function" === typeof ArrayBuffer,
        Ur = (e) =>
          "function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
        Fr = Object.prototype.toString,
        zr =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" === Fr.call(Blob)),
        Yr =
          "function" === typeof File ||
          ("undefined" !== typeof File &&
            "[object FileConstructor]" === Fr.call(File));
      function Ir(e) {
        return (
          (Ar && (e instanceof ArrayBuffer || Ur(e))) ||
          (zr && e instanceof Blob) ||
          (Yr && e instanceof File)
        );
      }
      function Br(e, t) {
        if (!e || "object" !== typeof e) return !1;
        if (Array.isArray(e)) {
          for (let t = 0, n = e.length; t < n; t++) if (Br(e[t])) return !0;
          return !1;
        }
        if (Ir(e)) return !0;
        if (
          e.toJSON &&
          "function" === typeof e.toJSON &&
          1 === arguments.length
        )
          return Br(e.toJSON(), !0);
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && Br(e[n])) return !0;
        return !1;
      }
      function Wr(e) {
        const t = [],
          n = e.data,
          r = e;
        return (
          (r.data = Hr(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        );
      }
      function Hr(e, t) {
        if (!e) return e;
        if (Ir(e)) {
          const n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          const n = new Array(e.length);
          for (let r = 0; r < e.length; r++) n[r] = Hr(e[r], t);
          return n;
        }
        if ("object" === typeof e && !(e instanceof Date)) {
          const n = {};
          for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Hr(e[r], t));
          return n;
        }
        return e;
      }
      function Vr(e, t) {
        return (e.data = qr(e.data, t)), delete e.attachments, e;
      }
      function qr(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" === typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (let n = 0; n < e.length; n++) e[n] = qr(e[n], t);
        else if ("object" === typeof e)
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = qr(e[n], t));
        return e;
      }
      const $r = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        Gr = 5;
      var Qr;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(Qr || (Qr = {}));
      class Kr {
        constructor(e) {
          this.replacer = e;
        }
        encode(e) {
          return (e.type !== Qr.EVENT && e.type !== Qr.ACK) || !Br(e)
            ? [this.encodeAsString(e)]
            : this.encodeAsBinary({
                type: e.type === Qr.EVENT ? Qr.BINARY_EVENT : Qr.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id,
              });
        }
        encodeAsString(e) {
          let t = "" + e.type;
          return (
            (e.type !== Qr.BINARY_EVENT && e.type !== Qr.BINARY_ACK) ||
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
      function Jr(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      class Zr extends ir {
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
            const n = t.type === Qr.BINARY_EVENT;
            n || t.type === Qr.BINARY_ACK
              ? ((t.type = n ? Qr.EVENT : Qr.ACK),
                (this.reconstructor = new Xr(t)),
                0 === t.attachments && super.emitReserved("decoded", t))
              : super.emitReserved("decoded", t);
          } else {
            if (!Ir(e) && !e.base64) throw new Error("Unknown type: " + e);
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
          if (void 0 === Qr[n.type])
            throw new Error("unknown packet type " + n.type);
          if (n.type === Qr.BINARY_EVENT || n.type === Qr.BINARY_ACK) {
            const r = t + 1;
            for (; "-" !== e.charAt(++t) && t != e.length; );
            const a = e.substring(r, t);
            if (a != Number(a) || "-" !== e.charAt(t))
              throw new Error("Illegal attachments");
            n.attachments = Number(a);
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
            if (!Zr.isPayloadValid(n.type, r))
              throw new Error("invalid payload");
            n.data = r;
          }
          return n;
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver);
          } catch (ga) {
            return !1;
          }
        }
        static isPayloadValid(e, t) {
          switch (e) {
            case Qr.CONNECT:
              return Jr(t);
            case Qr.DISCONNECT:
              return void 0 === t;
            case Qr.CONNECT_ERROR:
              return "string" === typeof t || Jr(t);
            case Qr.EVENT:
            case Qr.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ("number" === typeof t[0] ||
                  ("string" === typeof t[0] && -1 === $r.indexOf(t[0])))
              );
            case Qr.ACK:
            case Qr.BINARY_ACK:
              return Array.isArray(t);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class Xr {
        constructor(e) {
          (this.packet = e), (this.buffers = []), (this.reconPack = e);
        }
        takeBinaryData(e) {
          if (
            (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const e = Vr(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function ea(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      const ta = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class na extends ir {
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
            ea(e, "open", this.onopen.bind(this)),
            ea(e, "packet", this.onpacket.bind(this)),
            ea(e, "error", this.onerror.bind(this)),
            ea(e, "close", this.onclose.bind(this)),
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
          if (ta.hasOwnProperty(e))
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
          const a = { type: Qr.EVENT, data: n, options: {} };
          if (
            ((a.options.compress = !1 !== this.flags.compress),
            "function" === typeof n[n.length - 1])
          ) {
            const e = this.ids++,
              t = n.pop();
            this._registerAckCallback(e, t), (a.id = e);
          }
          const i =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!i || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(a), this.packet(a))
                : this.sendBuffer.push(a)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(e, t) {
          var n,
            r = this;
          const a =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout;
          if (void 0 === a) return void (this.acks[e] = t);
          const i = this.io.setTimeoutFn(() => {
            delete this.acks[e];
            for (let t = 0; t < this.sendBuffer.length; t++)
              this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
            t.call(this, new Error("operation has timed out"));
          }, a);
          this.acks[e] = function () {
            r.io.clearTimeoutFn(i);
            for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
              n[a] = arguments[a];
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
          const a =
            void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
          return new Promise((t, r) => {
            n.push((e, n) => (a ? (e ? r(e) : t(n)) : t(e))),
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
                var a = arguments.length,
                  i = new Array(a > 1 ? a - 1 : 0),
                  o = 1;
                o < a;
                o++
              )
                i[o - 1] = arguments[o];
              n(null, ...i);
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
            type: Qr.CONNECT,
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
              case Qr.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case Qr.EVENT:
              case Qr.BINARY_EVENT:
                this.onevent(e);
                break;
              case Qr.ACK:
              case Qr.BINARY_ACK:
                this.onack(e);
                break;
              case Qr.DISCONNECT:
                this.ondisconnect();
                break;
              case Qr.CONNECT_ERROR:
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
                var r = arguments.length, a = new Array(r), i = 0;
                i < r;
                i++
              )
                a[i] = arguments[i];
              t.packet({ type: Qr.ACK, id: e, data: a });
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
            this.connected && this.packet({ type: Qr.DISCONNECT }),
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
      function ra(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (ra.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (ra.prototype.reset = function () {
          this.attempts = 0;
        }),
        (ra.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (ra.prototype.setMax = function (e) {
          this.max = e;
        }),
        (ra.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      class aa extends ir {
        constructor(e, n) {
          var r;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            e && "object" === typeof e && ((n = e), (e = void 0)),
            ((n = n || {}).path = n.path || "/socket.io"),
            (this.opts = n),
            cr(this, n),
            this.reconnection(!1 !== n.reconnection),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = n.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new ra({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == n.timeout ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = e);
          const a = n.parser || t;
          (this.encoder = new a.Encoder()),
            (this.decoder = new a.Decoder()),
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
          this.engine = new jr(this.uri, this.opts);
          const t = this.engine,
            n = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const r = ea(t, "open", function () {
              n.onopen(), e && e();
            }),
            a = (t) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", t),
                e ? e(t) : this.maybeReconnectOnOpen();
            },
            i = ea(t, "error", a);
          if (!1 !== this._timeout) {
            const e = this._timeout,
              n = this.setTimeoutFn(() => {
                r(), a(new Error("timeout")), t.close();
              }, e);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
          return this.subs.push(r), this.subs.push(i), this;
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
            ea(e, "ping", this.onping.bind(this)),
            ea(e, "data", this.ondata.bind(this)),
            ea(e, "error", this.onerror.bind(this)),
            ea(e, "close", this.onclose.bind(this)),
            ea(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(e) {
          try {
            this.decoder.add(e);
          } catch (ga) {
            this.onclose("parse error", ga);
          }
        }
        ondecoded(e) {
          Or(() => {
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
              : ((n = new na(this, e, t)), (this.nsps[e] = n)),
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
      const ia = {};
      function oa(e, t) {
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
                (r = Lr(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            const a = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + a + ":" + r.port + t),
              (r.href =
                r.protocol +
                "://" +
                a +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(e, (t = t || {}).path || "/socket.io"),
          r = n.source,
          a = n.id,
          i = n.path,
          o = ia[a] && i in ia[a].nsps;
        let s;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || o
            ? (s = new aa(r, t))
            : (ia[a] || (ia[a] = new aa(r, t)), (s = ia[a])),
          n.query && !t.query && (t.query = n.queryKey),
          s.socket(n.path, t)
        );
      }
      Object.assign(oa, { Manager: aa, Socket: na, io: oa, connect: oa });
      const sa = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(
            (e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t
          )
          .join(" ")
          .trim();
      };
      var la = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      const ua = (0, a.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: r = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: s = "",
            children: l,
            iconNode: u,
            ...c
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...la,
              width: r,
              height: r,
              stroke: n,
              strokeWidth: o ? (24 * Number(i)) / Number(r) : i,
              className: sa("lucide", s),
              ...c,
            },
            [
              ...u.map((e) => {
                let [t, n] = e;
                return (0, a.createElement)(t, n);
              }),
              ...(Array.isArray(l) ? l : [l]),
            ]
          );
        }),
        ca = ((e, t) => {
          const n = (0, a.forwardRef)((n, r) => {
            let { className: i, ...o } = n;
            return (0, a.createElement)(ua, {
              ref: r,
              iconNode: t,
              className: sa(
                "lucide-".concat(
                  ((s = e),
                  s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())
                ),
                i
              ),
              ...o,
            });
            var s;
          });
          return (n.displayName = "".concat(e)), n;
        })("ArrowLeft", [
          ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
          ["path", { d: "M19 12H5", key: "x3x0zl" }],
        ]);
      var da = n(380),
        fa = n.n(da);
      function ha() {
        const { groupId: e } = (function () {
            let { matches: e } = a.useContext(K),
              t = e[e.length - 1];
            return t ? t.params : {};
          })(),
          t = "http://127.0.0.1:5100",
          [n, r] = (0, a.useState)([]),
          [i, o] = (0, a.useState)(!0),
          [s, l] = (0, a.useState)(""),
          [u, c] = (0, a.useState)(""),
          [d, f] = (0, a.useState)({}),
          h = (0, a.useRef)(null),
          p = te(),
          m = localStorage.getItem("username");
        (0, a.useEffect)(() => {
          const n = localStorage.getItem("token");
          if (n) {
            h.current = oa(t, { auth: { token: n } });
            return (
              (async () => {
                try {
                  const a = await Tn.get(
                    "".concat(t, "/group/").concat(e, "/messages"),
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(n),
                      },
                    }
                  );
                  200 === a.status &&
                    r(
                      a.data.map((e) => ({
                        message: e.message,
                        username: e.sender.username,
                        time: fa()(e.createdAt).format("hh:mm A"),
                      }))
                    );
                } catch (a) {
                  console.error("Error fetching messages:", a);
                } finally {
                  o(!1);
                }
              })(),
              h.current.on("message", (e) => {
                (e.time = fa()(e.createdAt).format("hh:mm A")),
                  r((t) => [...t, e]);
              }),
              h.current.on("type", (e) => c("".concat(e, " is typing..."))),
              h.current.on("stopTyping", () => c("")),
              () => h.current.disconnect()
            );
          }
        }, [e]);
        return (0, Rn.jsx)("div", {
          className:
            "bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4",
          children: (0, Rn.jsxs)("div", {
            className: "w-full max-w-2xl bg-gray-800 p-5 rounded-lg shadow-lg",
            children: [
              (0, Rn.jsxs)("div", {
                className: "flex justify-between items-center mb-1",
                children: [
                  (0, Rn.jsx)("button", {
                    onClick: () => p(-1),
                    className: "text-gray-400 hover:text-white",
                    children: (0, Rn.jsx)(ca, { size: 24 }),
                  }),
                  (0, Rn.jsx)("h1", {
                    className: "text-xl font-bold text-white",
                    children: "Group Chat",
                  }),
                  (0, Rn.jsx)(Ce, {
                    to: "/dashboard",
                    className: "text-red-400 hover:underline",
                    children: "Leave",
                  }),
                ],
              }),
              u &&
                (0, Rn.jsx)("div", {
                  className: "text-sm text-gray-300 mb-2",
                  children: u,
                }),
              (0, Rn.jsx)("div", {
                className:
                  "overflow-y-auto max-h-[500px] space-y-3 p-2 bg-gray-700 rounded-lg",
                children: i
                  ? (0, Rn.jsx)("div", {
                      className: "text-gray-400 text-center",
                      children: "Loading messages...",
                    })
                  : n.length > 0
                  ? n.map((e, t) =>
                      (0, Rn.jsx)(
                        "div",
                        {
                          className: "flex ".concat(
                            e.username === m ? "justify-end" : "justify-start"
                          ),
                          children: (0, Rn.jsxs)("div", {
                            className:
                              "p-3 rounded-lg max-w-xs break-words ".concat(
                                e.username === m
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-300 text-black"
                              ),
                            children: [
                              e.username !== m &&
                                (0, Rn.jsx)("div", {
                                  className:
                                    "text-xs font-semibold text-gray-700",
                                  children: e.username,
                                }),
                              (0, Rn.jsx)("div", {
                                className: "text-sm",
                                children: e.message,
                              }),
                              (0, Rn.jsx)("div", {
                                className:
                                  "text-xs text-gray-500 mt-1 text-right",
                                children: e.time,
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    )
                  : (0, Rn.jsx)("div", {
                      className: "text-gray-400 text-center",
                      children: "No messages yet",
                    }),
              }),
              (0, Rn.jsxs)("form", {
                onSubmit: (t) => {
                  if ((t.preventDefault(), s.trim())) {
                    const t = fa()().format("hh:mm A");
                    h.current.emit("chatMessage", {
                      message: s,
                      sender: m,
                      group: e,
                    }),
                      r((e) => [...e, { message: s, username: m, time: t }]),
                      l("");
                  }
                },
                className: "mt-4 flex gap-2",
                children: [
                  (0, Rn.jsx)("input", {
                    type: "text",
                    value: s,
                    onChange: (e) => l(e.target.value),
                    className:
                      "flex-1 p-2 rounded-lg border-none focus:outline-none text-black",
                    placeholder: "Type a message...",
                  }),
                  (0, Rn.jsx)("button", {
                    type: "submit",
                    className:
                      "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700",
                    children: "Send",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      const pa = (e) => {
        const t = te();
        return (
          (0, a.useEffect)(() => {
            localStorage.getItem("token") || t("/");
          }, [t]),
          (0, Rn.jsx)(e.component, {})
        );
      };
      const ma = function () {
        return (0, Rn.jsx)("div", {
          className: "App",
          children: (0, Rn.jsx)(Se, {
            children: (0, Rn.jsxs)(ye, {
              children: [
                (0, Rn.jsx)(me, {
                  path: "/",
                  exact: !0,
                  element: (0, Rn.jsx)(Dn, {}),
                }),
                (0, Rn.jsx)(me, {
                  path: "/signup",
                  element: (0, Rn.jsx)(Pn, {}),
                }),
                (0, Rn.jsx)(me, {
                  path: "/dashboard",
                  element: (0, Rn.jsx)(pa, { component: Ln }),
                }),
                (0, Rn.jsx)(me, {
                  path: "/group",
                  element: (0, Rn.jsx)(pa, { component: Un }),
                }),
                (0, Rn.jsx)(me, {
                  path: "/chat/:groupId",
                  element: (0, Rn.jsx)(pa, { component: ha }),
                }),
                (0, Rn.jsx)(me, { path: "*", element: (0, Rn.jsx)(Mn, {}) }),
              ],
            }),
          }),
        });
      };
      o.createRoot(document.getElementById("root")).render((0, Rn.jsx)(ma, {}));
    })();
})();
//# sourceMappingURL=main.755bf866.js.map
