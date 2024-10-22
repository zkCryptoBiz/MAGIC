import { a as ef, b as Fe, c as _ } from "./chunk-RIUMFBNJ.mjs";
var St = {};
ef(St, {
  Children: () => jn,
  Component: () => Ee,
  Fragment: () => ur,
  Profiler: () => ET,
  PureComponent: () => RT,
  StrictMode: () => PT,
  Suspense: () => os,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => FT,
  cloneElement: () => fr,
  createContext: () => ke,
  createElement: () => Qa,
  createFactory: () => _T,
  createRef: () => to,
  default: () => x,
  forwardRef: () => Ae,
  isValidElement: () => zt,
  lazy: () => IT,
  memo: () => OT,
  startTransition: () => dr,
  unstable_act: () => LT,
  useCallback: () => ie,
  useContext: () => A,
  useDebugValue: () => MT,
  useDeferredValue: () => AT,
  useEffect: () => $,
  useId: () => mi,
  useImperativeHandle: () => DT,
  useInsertionEffect: () => ot,
  useLayoutEffect: () => st,
  useMemo: () => ae,
  useReducer: () => VT,
  useRef: () => D,
  useState: () => Xe,
  useSyncExternalStore: () => Og,
  useTransition: () => zT,
  version: () => BT,
});
var x = {},
  is = Symbol.for("react.element"),
  fT = Symbol.for("react.portal"),
  dT = Symbol.for("react.fragment"),
  hT = Symbol.for("react.strict_mode"),
  pT = Symbol.for("react.profiler"),
  mT = Symbol.for("react.provider"),
  gT = Symbol.for("react.context"),
  vT = Symbol.for("react.forward_ref"),
  yT = Symbol.for("react.suspense"),
  bT = Symbol.for("react.memo"),
  xT = Symbol.for("react.lazy"),
  Sg = Symbol.iterator;
function wT(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sg && e[Sg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Tg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Eg = Object.assign,
  Rg = {};
function eo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rg),
    (this.updater = n || Tg);
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pg() {}
Pg.prototype = eo.prototype;
function nf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rg),
    (this.updater = n || Tg);
}
var rf = (nf.prototype = new Pg());
rf.constructor = nf;
Eg(rf, eo.prototype);
rf.isPureReactComponent = !0;
var kg = Array.isArray,
  Fg = Object.prototype.hasOwnProperty,
  of = { current: null },
  _g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ig(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Fg.call(t, r) && !_g.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: is,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: of.current,
  };
}
function ST(e, t) {
  return {
    $$typeof: is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function kT(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Cg = /\/+/g;
function tf(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kT("" + e.key)
    : t.toString(36);
}
function Ya(e, t, n, r, i) {
  var o = typeof e;
  (o !== "undefined" && o !== "boolean") || (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case is:
          case fT:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + tf(s, 0) : r),
      kg(i)
        ? ((n = ""),
          e != null && (n = e.replace(Cg, "$&/") + "/"),
          Ya(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (sf(i) &&
            (i = ST(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Cg, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), kg(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + tf(o, a);
      s += Ya(o, t, n, l, i);
    }
  else if (((l = wT(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + tf(o, a++)), (s += Ya(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Xa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ya(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function CT(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var It = { current: null },
  Ka = { transition: null },
  TT = {
    ReactCurrentDispatcher: It,
    ReactCurrentBatchConfig: Ka,
    ReactCurrentOwner: of,
  };
x.Children = {
  map: Xa,
  forEach: function (e, t, n) {
    Xa(
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
      Xa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
x.Component = eo;
x.Fragment = dT;
x.Profiler = pT;
x.PureComponent = nf;
x.StrictMode = hT;
x.Suspense = yT;
x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TT;
x.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Eg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = of.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Fg.call(t, l) &&
        !_g.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: is, type: e.type, key: i, ref: o, props: r, _owner: s };
};
x.createContext = function (e) {
  return (
    (e = {
      $$typeof: gT,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mT, _context: e }),
    (e.Consumer = e)
  );
};
x.createElement = Ig;
x.createFactory = function (e) {
  var t = Ig.bind(null, e);
  return (t.type = e), t;
};
x.createRef = function () {
  return { current: null };
};
x.forwardRef = function (e) {
  return { $$typeof: vT, render: e };
};
x.isValidElement = sf;
x.lazy = function (e) {
  return { $$typeof: xT, _payload: { _status: -1, _result: e }, _init: CT };
};
x.memo = function (e, t) {
  return { $$typeof: bT, type: e, compare: t === void 0 ? null : t };
};
x.startTransition = function (e) {
  var t = Ka.transition;
  Ka.transition = {};
  try {
    e();
  } finally {
    Ka.transition = t;
  }
};
x.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
x.useCallback = function (e, t) {
  return It.current.useCallback(e, t);
};
x.useContext = function (e) {
  return It.current.useContext(e);
};
x.useDebugValue = function () {};
x.useDeferredValue = function (e) {
  return It.current.useDeferredValue(e);
};
x.useEffect = function (e, t) {
  return It.current.useEffect(e, t);
};
x.useId = function () {
  return It.current.useId();
};
x.useImperativeHandle = function (e, t, n) {
  return It.current.useImperativeHandle(e, t, n);
};
x.useInsertionEffect = function (e, t) {
  return It.current.useInsertionEffect(e, t);
};
x.useLayoutEffect = function (e, t) {
  return It.current.useLayoutEffect(e, t);
};
x.useMemo = function (e, t) {
  return It.current.useMemo(e, t);
};
x.useReducer = function (e, t, n) {
  return It.current.useReducer(e, t, n);
};
x.useRef = function (e) {
  return It.current.useRef(e);
};
x.useState = function (e) {
  return It.current.useState(e);
};
x.useSyncExternalStore = function (e, t, n) {
  return It.current.useSyncExternalStore(e, t, n);
};
x.useTransition = function () {
  return It.current.useTransition();
};
x.version = "18.2.0";
var jn = x.Children,
  Ee = x.Component,
  ur = x.Fragment,
  ET = x.Profiler,
  RT = x.PureComponent,
  PT = x.StrictMode,
  os = x.Suspense,
  FT = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fr = x.cloneElement,
  ke = x.createContext,
  Qa = x.createElement,
  _T = x.createFactory,
  to = x.createRef,
  Ae = x.forwardRef,
  zt = x.isValidElement,
  IT = x.lazy,
  OT = x.memo,
  dr = x.startTransition,
  LT = x.unstable_act,
  ie = x.useCallback,
  A = x.useContext,
  MT = x.useDebugValue,
  AT = x.useDeferredValue,
  $ = x.useEffect,
  mi = x.useId,
  DT = x.useImperativeHandle,
  ot = x.useInsertionEffect,
  st = x.useLayoutEffect,
  ae = x.useMemo,
  VT = x.useReducer,
  D = x.useRef,
  Xe = x.useState,
  Og = x.useSyncExternalStore,
  zT = x.useTransition,
  BT = x.version;
var $T = "default" in St ? x : St,
  no = {},
  NT = $T,
  HT = Symbol.for("react.element"),
  jT = Symbol.for("react.fragment"),
  WT = Object.prototype.hasOwnProperty,
  UT = NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  GT = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) WT.call(t, r) && !GT.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: HT,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: UT.current,
  };
}
no.Fragment = jT;
no.jsx = Lg;
no.jsxs = Lg;
var je = no.Fragment,
  k = no.jsx,
  ue = no.jsxs;
var qT = Object.create,
  fl = Object.defineProperty,
  XT = Object.getOwnPropertyDescriptor,
  Zv = Object.getOwnPropertyNames,
  YT = Object.getPrototypeOf,
  KT = Object.prototype.hasOwnProperty,
  QT = (e, t, n) =>
    t in e
      ? fl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  pn = (e, t) =>
    function () {
      return t || (0, e[Zv(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  ZT = (e, t) => {
    for (var n in t) fl(e, n, { get: t[n], enumerable: !0 });
  },
  JT = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Zv(t))
        !KT.call(e, i) &&
          i !== n &&
          fl(e, i, {
            get: () => t[i],
            enumerable: !(r = XT(t, i)) || r.enumerable,
          });
    return e;
  },
  Kn = (e, t, n) => (
    (n = e != null ? qT(YT(e)) : {}),
    JT(
      t || !e || !e.__esModule
        ? fl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  C = (e, t, n) => (QT(e, typeof t != "symbol" ? t + "" : t, n), n),
  zf = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  ce = (e, t, n) => (
    zf(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Zt = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  Bf = (e, t, n, r) => (
    zf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  $t = (e, t, n) => (zf(e, t, "access private method"), n),
  eE = pn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  tE = pn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(eE()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  dl = { skipAnimations: !1, useManualTiming: !1 },
  pt = (e) => e;
function nE(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    o = new WeakSet(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    o.has(c) && (l.schedule(c), e()), c(s);
  }
  let l = {
    schedule: (c, u = !1, f = !1) => {
      let m = f && r ? t : n;
      return u && o.add(c), m.has(c) || m.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    process: (c) => {
      if (((s = c), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(c));
    },
  };
  return l;
}
var as = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  rE = 40;
function Jv(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = as.reduce((h, p) => ((h[p] = nE(o)), h), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: f,
      postRender: d,
    } = s,
    m = () => {
      let h = dl.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, rE), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(m));
    },
    g = () => {
      (n = !0), (r = !0), i.isProcessing || e(m);
    };
  return {
    schedule: as.reduce((h, p) => {
      let y = s[p];
      return (h[p] = (w, T = !1, S = !1) => (n || g(), y.schedule(w, T, S))), h;
    }, {}),
    cancel: (h) => {
      for (let p = 0; p < as.length; p++) s[as[p]].cancel(h);
    },
    state: i,
    steps: s,
  };
}
var {
    schedule: ee,
    cancel: Kt,
    state: et,
    steps: tl,
  } = Jv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pt, !0),
  ey = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  iE = 1e-7,
  oE = 12;
function sE(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = ey(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > iE && ++a < oE);
  return s;
}
function fo(e, t, n, r) {
  if (e === t && n === r) return pt;
  let i = (o) => sE(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : ey(i(o), t, r));
}
var $f = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Nf = (e) => (t) => 1 - e(1 - t),
  Hf = fo(0.33, 1.53, 0.69, 0.99),
  hl = Nf(Hf),
  jf = $f(hl),
  Wf = (e) =>
    (e *= 2) < 1 ? 0.5 * hl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  pl = (e) => 1 - Math.sin(Math.acos(e)),
  Uf = Nf(pl),
  Gf = $f(pl),
  xs = pt,
  Qt = pt,
  pr = (e, t, n) => (n > t ? t : n < e ? e : n),
  ws = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ar = ws("deg"),
  Wn = ws("%"),
  q = ws("px"),
  aE = ws("vh"),
  lE = ws("vw"),
  Mg = {
    ...Wn,
    parse: (e) => Wn.parse(e) / 100,
    transform: (e) => Wn.transform(e * 100),
  },
  ho = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ps = { ...ho, transform: (e) => pr(0, 1, e) },
  Za = { ...ho, default: 1 },
  us = (e) => Math.round(e * 1e5) / 1e5,
  qf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cE(e) {
  return e == null;
}
var uE =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Xf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && uE.test(n) && n.startsWith(e)) ||
      (t && !cE(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ty = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    let [i, o, s, a] = r.match(qf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  fE = (e) => pr(0, 255, e),
  af = { ...ho, transform: (e) => Math.round(fE(e)) },
  bi = {
    test: Xf("rgb", "red"),
    parse: ty("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      af.transform(e) +
      ", " +
      af.transform(t) +
      ", " +
      af.transform(n) +
      ", " +
      us(ps.transform(r)) +
      ")",
  };
function dE(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var yf = { test: Xf("#"), parse: dE, transform: bi.transform },
  ro = {
    test: Xf("hsl", "hue"),
    parse: ty("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Wn.transform(us(t)) +
      ", " +
      Wn.transform(us(n)) +
      ", " +
      us(ps.transform(r)) +
      ")",
  },
  ht = {
    test: (e) => bi.test(e) || yf.test(e) || ro.test(e),
    parse: (e) =>
      bi.test(e) ? bi.parse(e) : ro.test(e) ? ro.parse(e) : yf.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? bi.transform(e)
        : ro.transform(e),
  },
  hE =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function pE(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(qf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(hE)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var ny = "number",
  ry = "color",
  mE = "var",
  gE = "var(",
  Ag = "${}",
  vE =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ms(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        vE,
        (l) => (
          ht.test(l)
            ? (r.color.push(o), i.push(ry), n.push(ht.parse(l)))
            : l.startsWith(gE)
            ? (r.var.push(o), i.push(mE), n.push(l))
            : (r.number.push(o), i.push(ny), n.push(parseFloat(l))),
          ++o,
          Ag
        )
      )
      .split(Ag);
  return { values: n, split: a, indexes: r, types: i };
}
function iy(e) {
  return ms(e).values;
}
function oy(e) {
  let { split: t, types: n } = ms(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === ny
          ? (o += us(i[s]))
          : a === ry
          ? (o += ht.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var yE = (e) => (typeof e == "number" ? 0 : e);
function bE(e) {
  let t = iy(e);
  return oy(e)(t.map(yE));
}
var mr = { test: pE, parse: iy, createTransformer: oy, getAnimatableNone: bE },
  Pn = (e) => e * 1e3,
  Un = (e) => e / 1e3,
  lf = 0.001,
  xE = 0.01,
  Dg = 10,
  wE = 0.05,
  SE = 1;
function sy({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  xs(e <= Pn(Dg), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  (s = pr(wE, SE, s)),
    (e = pr(xE, Dg, Un(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            m = bf(c, s),
            g = Math.exp(-f);
          return lf - (d / m) * g;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(c, 2) * e,
            g = Math.exp(-f),
            v = bf(Math.pow(c, 2), s);
          return ((-i(c) + lf > 0 ? -1 : 1) * ((d - m) * g)) / v;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -lf + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = CE(i, o, a);
  if (((e = Pn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var kE = 12;
function CE(e, t, n) {
  let r = n;
  for (let i = 1; i < kE; i++) r = r - e(r) / t(r);
  return r;
}
function bf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function ay(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var TE = 5;
function ly(e, t, n) {
  let r = Math.max(t - TE, 0);
  return ay(n - e(r), t - r);
}
var EE = ["duration", "bounce"],
  RE = ["stiffness", "damping", "mass"];
function Vg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function PE(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Vg(e, RE) && Vg(e, EE)) {
    let n = sy(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Ss({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = PE({ ...r, velocity: -Un(r.velocity || 0) }),
    m = f || 0,
    g = l / (2 * Math.sqrt(a * c)),
    v = o - i,
    b = Un(Math.sqrt(a / c)),
    h = Math.abs(v) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let p;
  if (g < 1) {
    let y = bf(b, g);
    p = (w) => {
      let T = Math.exp(-g * b * w);
      return (
        o - T * (((m + g * b * v) / y) * Math.sin(y * w) + v * Math.cos(y * w))
      );
    };
  } else if (g === 1) p = (y) => o - Math.exp(-b * y) * (v + (m + b * v) * y);
  else {
    let y = b * Math.sqrt(g * g - 1);
    p = (w) => {
      let T = Math.exp(-g * b * w),
        S = Math.min(y * w, 300);
      return (
        o - (T * ((m + g * b * v) * Math.sinh(S) + y * v * Math.cosh(S))) / y
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (y) => {
      let w = p(y);
      if (d) s.done = y >= u;
      else {
        let T = 0;
        g < 1 && (T = y === 0 ? Pn(m) : ly(p, y, w));
        let S = Math.abs(T) <= n,
          E = Math.abs(o - w) <= t;
        s.done = S && E;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function xf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    m = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    g = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
        ? a
        : l,
    v = n * t,
    b = f + v,
    h = s === void 0 ? b : s(b);
  h !== b && (v = h - f);
  let p = (R) => -v * Math.exp(-R / r),
    y = (R) => h + p(R),
    w = (R) => {
      let M = p(R),
        I = y(R);
      (d.done = Math.abs(M) <= c), (d.value = d.done ? h : I);
    },
    T,
    S,
    E = (R) => {
      m(d.value) &&
        ((T = R),
        (S = Ss({
          keyframes: [d.value, g(d.value)],
          velocity: ly(y, R, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let M = !1;
        return (
          !S && T === void 0 && ((M = !0), w(R), E(R)),
          T !== void 0 && R >= T ? S.next(R - T) : (!M && w(R), d)
        );
      },
    }
  );
}
var cy = fo(0.42, 0, 1, 1),
  uy = fo(0, 0, 0.58, 1),
  Yf = fo(0.42, 0, 0.58, 1),
  FE = (e, t) => (n) => t(e(n)),
  Gn = (...e) => e.reduce(FE),
  Dr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  _e = (e, t, n) => e + (t - e) * n;
function cf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function _E({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = cf(l, a, e + 1 / 3)), (o = cf(l, a, e)), (s = cf(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function il(e, t) {
  return (n) => (n > 0 ? t : e);
}
var uf = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  IE = [yf, bi, ro],
  OE = (e) => IE.find((t) => t.test(e));
function zg(e) {
  let t = OE(e);
  if (
    (xs(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === ro && (n = _E(n)), n;
}
var Bg = (e, t) => {
    let n = zg(e),
      r = zg(t);
    if (!n || !r) return il(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = uf(n.red, r.red, o)),
      (i.green = uf(n.green, r.green, o)),
      (i.blue = uf(n.blue, r.blue, o)),
      (i.alpha = _e(n.alpha, r.alpha, o)),
      bi.transform(i)
    );
  },
  fy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  dy = fy("--"),
  LE = fy("var(--"),
  Kf = (e) => (LE(e) ? ME.test(e.split("/*")[0].trim()) : !1),
  ME =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  wf = new Set(["none", "hidden"]);
function AE(e, t) {
  return wf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function DE(e, t) {
  return (n) => _e(e, t, n);
}
function Qf(e) {
  return typeof e == "number"
    ? DE
    : typeof e == "string"
    ? Kf(e)
      ? il
      : ht.test(e)
      ? Bg
      : BE
    : Array.isArray(e)
    ? hy
    : typeof e == "object"
    ? ht.test(e)
      ? Bg
      : VE
    : il;
}
function hy(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => Qf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function VE(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Qf(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function zE(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var BE = (e, t) => {
  let n = mr.createTransformer(t),
    r = ms(e),
    i = ms(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (wf.has(e) && !i.values.length) || (wf.has(t) && !r.values.length)
      ? AE(e, t)
      : Gn(hy(zE(r, i), i.values), n)
    : (xs(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      il(e, t));
};
function Zf(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? _e(e, t, n)
    : Qf(e)(e, t);
}
function $E(e, t, n) {
  let r = [],
    i = n || Zf,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || pt : t;
      a = Gn(l, a);
    }
    r.push(a);
  }
  return r;
}
function ks(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Qt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = $E(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = Dr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(pr(e[0], e[o - 1], c)) : l;
}
var py = (e) => Array.isArray(e) && typeof e[0] != "number",
  Jf = (e) => Array.isArray(e) && typeof e[0] == "number",
  $g = {
    linear: pt,
    easeIn: cy,
    easeInOut: Yf,
    easeOut: uy,
    circIn: pl,
    circInOut: Gf,
    circOut: Uf,
    backIn: hl,
    backInOut: jf,
    backOut: Hf,
    anticipate: Wf,
  },
  Sf = (e) => {
    if (Jf(e)) {
      Qt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return fo(t, n, r, i);
    } else if (typeof e == "string")
      return Qt($g[e] !== void 0, `Invalid easing type '${e}'`), $g[e];
    return e;
  };
function my(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Dr(0, t, r);
    e.push(_e(n, 1, i));
  }
}
function gy(e) {
  let t = [0];
  return my(t, e.length - 1), t;
}
function NE(e, t) {
  return e.map((n) => n * t);
}
function HE(e, t) {
  return e.map(() => t || Yf).splice(0, e.length - 1);
}
function gs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = py(r) ? r.map(Sf) : Sf(r),
    o = { done: !1, value: t[0] },
    s = NE(n && n.length === t.length ? n : gy(t), e),
    a = ks(s, t, { ease: Array.isArray(i) ? i : HE(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var Cs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  zr = new Set(Cs),
  jE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Ng = (e) => e === ho || e === q,
  Hg = (e, t) => parseFloat(e.split(", ")[t]),
  jg =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Hg(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? Hg(o[1], e) : 0;
      }
    },
  WE = new Set(["x", "y", "z"]),
  UE = Cs.filter((e) => !WE.has(e));
function GE(e) {
  let t = [];
  return (
    UE.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var lo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: jg(4, 13),
  y: jg(5, 14),
};
lo.translateX = lo.x;
lo.translateY = lo.y;
var xi = new Set(),
  kf = !1,
  Cf = !1;
function vy() {
  if (Cf) {
    let e = Array.from(xi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      let i = GE(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && _.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Cf = !1), (kf = !1), xi.forEach((e) => e.complete()), xi.clear();
}
function yy() {
  xi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Cf = !0);
  });
}
function qE() {
  yy(), vy();
}
var ed = class {
    constructor(e, t, n, r, i, o = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = o);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (xi.add(this),
            kf || ((kf = !0), ee.read(yy), ee.resolveKeyframes(vy)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let o = r?.get(),
              s = e[e.length - 1];
            if (o !== void 0) e[0] = o;
            else if (n && t) {
              let a = n.readValue(t, s);
              a != null && (e[0] = a);
            }
            e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        xi.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), xi.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  nl;
function XE() {
  nl = void 0;
}
var qn = {
    now: () => (
      nl === void 0 &&
        qn.set(
          et.isProcessing || dl.useManualTiming
            ? et.timestamp
            : performance.now()
        ),
      nl
    ),
    set: (e) => {
      (nl = e), queueMicrotask(XE);
    },
  },
  ol = { current: !1 };
function ml(e) {
  return typeof e == "function";
}
var Wg = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (mr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function YE(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function KE(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let o = e[e.length - 1],
    s = Wg(i, t),
    a = Wg(o, t);
  return (
    xs(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
    ),
    !s || !a ? !1 : YE(e) || ((n === "spring" || ml(n)) && r)
  );
}
var QE = (e) => e !== null;
function gl(e, { repeat: t, repeatType: n = "loop" }, r) {
  let i = e.filter(QE),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var ZE = 40,
  by = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...s
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = qn.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > ZE
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && qE(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      (this.resolvedAt = qn.now()), (this.hasAttemptedResolve = !0);
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !KE(e, n, r, i))
        if (ol.current || !o) {
          a?.(gl(e, this.options, t)), s?.(), this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Tf = 2e4;
function xy(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < Tf; ) (t += n), (r = e.next(t));
  return t >= Tf ? 1 / 0 : t;
}
var JE = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => ee.update(t, !0),
      stop: () => Kt(t),
      now: () => (et.isProcessing ? et.timestamp : qn.now()),
    };
  },
  eR = { decay: xf, inertia: xf, tween: gs, keyframes: gs, spring: Ss },
  tR = (e) => e / 100,
  vl = class extends by {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: a } = this.options;
          a && a();
        });
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        o = r?.KeyframeResolver || ed,
        s = (a, l) => this.onKeyframesResolved(a, l);
      (this.resolver = new o(i, s, t, n, r)), this.resolver.scheduleResolve();
    }
    initPlayback(e) {
      let {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = ml(t) ? t : eR[t] || gs,
        a,
        l;
      s !== gs &&
        typeof e[0] != "number" &&
        ((a = Gn(tR, Zf(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      i === "mirror" &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = xy(c));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: E } = this.options;
        return { done: !0, value: E[E.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: m,
        repeatDelay: g,
        onUpdate: v,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      let b = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        h = this.speed >= 0 ? b < 0 : b > c;
      (this.currentTime = Math.max(b, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let p = this.currentTime,
        y = i;
      if (d) {
        let E = Math.min(this.currentTime, c) / u,
          R = Math.floor(E),
          M = E % 1;
        !M && E >= 1 && (M = 1),
          M === 1 && R--,
          (R = Math.min(R, d + 1)),
          !!(R % 2) &&
            (m === "reverse"
              ? ((M = 1 - M), g && (M -= g / u))
              : m === "mirror" && (y = o)),
          (p = pr(0, 1, M) * u);
      }
      let w = h ? { done: !1, value: a[0] } : y.next(p);
      s && (w.value = s(w.value));
      let { done: T } = w;
      !h &&
        l !== null &&
        (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && T));
      return (
        S && r !== void 0 && (w.value = gl(a, this.options, r)),
        v && v(w.value),
        S && this.finish(),
        w
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Un(e.calculatedDuration) : 0;
    }
    get time() {
      return Un(this.currentTime);
    }
    set time(e) {
      (e = Pn(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = Un(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: e = JE, onPlay: t, startTime: n } = this.options;
      this.driver || (this.driver = e((i) => this.tick(i))), t && t();
      let r = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime
        ? this.state === "finished" && (this.startTime = r)
        : (this.startTime = n ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  };
function wy(e) {
  return new vl(e);
}
var Sy = (e) => /^0[^.\s]+$/u.test(e);
function nR(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Sy(e)
    : !0;
}
var ky = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  rR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function iR(e) {
  let t = rR.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var oR = 4;
function Cy(e, t, n = 1) {
  Qt(
    n <= oR,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = iR(e);
  if (!r) return;
  let o = _.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return ky(s) ? parseFloat(s) : s;
  }
  return Kf(i) ? Cy(i, t, n + 1) : i;
}
var Ty = (e) => (t) => t.test(e),
  sR = { test: (e) => e === "auto", parse: (e) => e },
  Ey = [ho, q, Wn, Ar, lE, aE, sR],
  Ug = (e) => Ey.find(Ty(e)),
  aR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function lR(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(qf) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = aR.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var cR = /\b([a-z-]*)\(.*?\)/gu,
  Ef = {
    ...mr,
    getAnimatableNone: (e) => {
      let t = e.match(cR);
      return t ? t.map(lR).join(" ") : e;
    },
  },
  uR = {
    borderWidth: q,
    borderTopWidth: q,
    borderRightWidth: q,
    borderBottomWidth: q,
    borderLeftWidth: q,
    borderRadius: q,
    radius: q,
    borderTopLeftRadius: q,
    borderTopRightRadius: q,
    borderBottomRightRadius: q,
    borderBottomLeftRadius: q,
    width: q,
    maxWidth: q,
    height: q,
    maxHeight: q,
    top: q,
    right: q,
    bottom: q,
    left: q,
    padding: q,
    paddingTop: q,
    paddingRight: q,
    paddingBottom: q,
    paddingLeft: q,
    margin: q,
    marginTop: q,
    marginRight: q,
    marginBottom: q,
    marginLeft: q,
    backgroundPositionX: q,
    backgroundPositionY: q,
  },
  fR = {
    rotate: Ar,
    rotateX: Ar,
    rotateY: Ar,
    rotateZ: Ar,
    scale: Za,
    scaleX: Za,
    scaleY: Za,
    scaleZ: Za,
    skew: Ar,
    skewX: Ar,
    skewY: Ar,
    distance: q,
    translateX: q,
    translateY: q,
    translateZ: q,
    x: q,
    y: q,
    z: q,
    perspective: q,
    transformPerspective: q,
    opacity: ps,
    originX: Mg,
    originY: Mg,
    originZ: q,
  },
  Gg = { ...ho, transform: Math.round },
  td = {
    ...uR,
    ...fR,
    zIndex: Gg,
    size: q,
    fillOpacity: ps,
    strokeOpacity: ps,
    numOctaves: Gg,
  },
  dR = {
    ...td,
    color: ht,
    backgroundColor: ht,
    outlineColor: ht,
    fill: ht,
    stroke: ht,
    borderColor: ht,
    borderTopColor: ht,
    borderRightColor: ht,
    borderBottomColor: ht,
    borderLeftColor: ht,
    filter: Ef,
    WebkitFilter: Ef,
  },
  nd = (e) => dR[e];
function Ry(e, t) {
  let n = nd(e);
  return (
    n !== Ef && (n = mr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var hR = new Set(["auto", "none", "0"]);
function pR(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    typeof o == "string" && !hR.has(o) && ms(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let o of t) e[o] = Ry(n, i);
}
var Py = class extends ed {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let a = 0; a < e.length; a++) {
        let l = e[a];
        if (typeof l == "string" && ((l = l.trim()), Kf(l))) {
          let c = Cy(l, t.current);
          c !== void 0 && (e[a] = c),
            a === e.length - 1 && (this.finalKeyframe = l);
        }
      }
      if ((this.resolveNoneKeyframes(), !jE.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        o = Ug(r),
        s = Ug(i);
      if (o !== s)
        if (Ng(o) && Ng(s))
          for (let a = 0; a < e.length; a++) {
            let l = e[a];
            typeof l == "string" && (e[a] = parseFloat(l));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let r = 0; r < e.length; r++) nR(e[r]) && n.push(r);
      n.length && pR(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      n === "height" && (this.suspendedScrollY = _.pageYOffset),
        (this.measuredOrigin = lo[n](
          e.measureViewportBox(),
          _.getComputedStyle(e.current)
        )),
        (t[0] = this.measuredOrigin);
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      var e;
      let { element: t, name: n, unresolvedKeyframes: r } = this;
      if (!t || !t.current) return;
      let i = t.getValue(n);
      i && i.jump(this.measuredOrigin, !1);
      let o = r.length - 1,
        s = r[o];
      (r[o] = lo[n](t.measureViewportBox(), _.getComputedStyle(t.current))),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        !((e = this.removedTransforms) === null || e === void 0) &&
          e.length &&
          this.removedTransforms.forEach(([a, l]) => {
            t.getValue(a).set(l);
          }),
        this.resolveNoneKeyframes();
    }
  },
  Fy = new Set(["opacity", "clipPath", "filter", "transform"]),
  mR = 10,
  gR = (e, t) => {
    let n = "",
      r = Math.max(Math.round(t / mR), 2);
    for (let i = 0; i < r; i++) n += e(Dr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function rd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var vR = { linearEasing: void 0 };
function yR(e, t) {
  let n = rd(e);
  return () => {
    var r;
    return (r = vR[t]) !== null && r !== void 0 ? r : n();
  };
}
var sl = yR(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function _y(e) {
  return !!(
    (typeof e == "function" && sl()) ||
    !e ||
    (typeof e == "string" && (e in Rf || sl())) ||
    Jf(e) ||
    (Array.isArray(e) && e.every(_y))
  );
}
var ls = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Rf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ls([0, 0.65, 0.55, 1]),
    circOut: ls([0.55, 0, 1, 0.45]),
    backIn: ls([0.31, 0.01, 0.66, -0.59]),
    backOut: ls([0.33, 1.53, 0.69, 0.99]),
  };
function Iy(e, t) {
  if (e)
    return typeof e == "function" && sl()
      ? gR(e, t)
      : Jf(e)
      ? ls(e)
      : Array.isArray(e)
      ? e.map((n) => Iy(n, t) || Rf.easeOut)
      : Rf[e];
}
function bR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = Iy(a, i);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function qg(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
var xR = rd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  al = 10,
  wR = 2e4;
function SR(e) {
  return ml(e.type) || e.type === "spring" || !_y(e.ease);
}
function kR(e, t) {
  let n = new vl({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < wR; ) (r = n.sample(o)), i.push(r.value), (o += al);
  return { times: void 0, keyframes: i, duration: o - al, ease: "linear" };
}
var Oy = { anticipate: Wf, backInOut: jf, circInOut: Gf };
function CR(e) {
  return e in Oy;
}
var Pf = class extends by {
  constructor(e) {
    super(e);
    let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
    (this.resolver = new Py(
      i,
      (o, s) => this.onKeyframesResolved(o, s),
      t,
      n,
      r
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, t) {
    var n;
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
      startTime: c,
    } = this.options;
    if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
    if (
      (typeof o == "string" && sl() && CR(o) && (o = Oy[o]), SR(this.options))
    ) {
      let {
          onComplete: f,
          onUpdate: d,
          motionValue: m,
          element: g,
          ...v
        } = this.options,
        b = kR(e, v);
      (e = b.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = b.duration),
        (i = b.times),
        (o = b.ease),
        (s = "keyframes");
    }
    let u = bR(a.owner.current, l, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (u.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (qg(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            let { onComplete: f } = this.options;
            a.set(gl(e, this.options, t)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: r, times: i, type: s, ease: o, keyframes: e }
    );
  }
  get duration() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { duration: t } = e;
    return Un(t);
  }
  get time() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { animation: t } = e;
    return Un(t.currentTime || 0);
  }
  set time(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.currentTime = Pn(e);
  }
  get speed() {
    let { resolved: e } = this;
    if (!e) return 1;
    let { animation: t } = e;
    return t.playbackRate;
  }
  set speed(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.playbackRate = e;
  }
  get state() {
    let { resolved: e } = this;
    if (!e) return "idle";
    let { animation: t } = e;
    return t.playState;
  }
  get startTime() {
    let { resolved: e } = this;
    if (!e) return null;
    let { animation: t } = e;
    return t.startTime;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      let { resolved: t } = this;
      if (!t) return pt;
      let { animation: n } = t;
      qg(n, e);
    }
    return pt;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.playState === "finished" && this.updateFinishedPromise(), t.play();
  }
  pause() {
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    let { resolved: e } = this;
    if (!e) return;
    let {
      animation: t,
      keyframes: n,
      duration: r,
      type: i,
      ease: o,
      times: s,
    } = e;
    if (t.playState === "idle" || t.playState === "finished") return;
    if (this.time) {
      let {
          motionValue: l,
          onUpdate: c,
          onComplete: u,
          element: f,
          ...d
        } = this.options,
        m = new vl({
          ...d,
          keyframes: n,
          duration: r,
          type: i,
          ease: o,
          times: s,
          isGenerator: !0,
        }),
        g = Pn(this.time);
      l.setWithVelocity(m.sample(g - al).value, m.sample(g).value, al);
    }
    let { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    let { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    let { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: o,
      type: s,
    } = e;
    return (
      xR() &&
      n &&
      Fy.has(n) &&
      t &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate &&
      !r &&
      i !== "mirror" &&
      o !== 0 &&
      s !== "inertia"
    );
  }
};
function id(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function yl(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function TR([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var od = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return id(this.subscriptions, e), () => yl(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  Xg = 30,
  ER = (e) => !isNaN(parseFloat(e)),
  fs = { current: void 0 },
  bl = class {
    constructor(e, t = {}) {
      (this.version = "11.11.7"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = qn.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = qn.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = ER(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new od());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              ee.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return fs.current && fs.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = qn.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > Xg
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Xg);
      return ay(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Vr(e, t) {
  return new bl(e, t);
}
var xl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  RR = "framerAppearId",
  sd = "data-" + xl(RR),
  We = (e) => !!(e && e.getVelocity);
function Yg(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function ad(e, t, n, r) {
  if (typeof t == "function") {
    let [i, o] = Yg(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [i, o] = Yg(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function wl(e, t, n) {
  let r = e.getProps();
  return ad(r, t, n !== void 0 ? n : r.custom, e);
}
var PR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  FR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  _R = { type: "keyframes", duration: 0.8 },
  IR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  OR = (e, { keyframes: t }) =>
    t.length > 2
      ? _R
      : zr.has(e)
      ? e.startsWith("scale")
        ? FR(t[1])
        : PR
      : IR;
function ld(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var LR = rd(() => _.ScrollTimeline !== void 0),
  Ly = class {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((r) =>
        LR() && r.attachTimeline ? r.attachTimeline(e) : t(r)
      );
      return () => {
        n.forEach((r, i) => {
          r && r(), this.animations[i].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };
function MR({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
var cd =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      let a = ld(r, e) || {},
        l = a.delay || r.delay || 0,
        { elapsed: c = 0 } = r;
      c = c - Pn(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      MR(a) || (u = { ...u, ...OR(e, u) }),
        u.duration && (u.duration = Pn(u.duration)),
        u.repeatDelay && (u.repeatDelay = Pn(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let f = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (f = !0)),
        (ol.current || dl.skipAnimations) &&
          ((f = !0), (u.duration = 0), (u.delay = 0)),
        f && !o && t.get() !== void 0)
      ) {
        let d = gl(u.keyframes, a);
        if (d !== void 0)
          return (
            ee.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new Ly([])
          );
      }
      return !o && Pf.supports(u) ? new Pf(u) : new vl(u);
    },
  Ff = (e) => Array.isArray(e),
  AR = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  DR = (e) => (Ff(e) ? e[e.length - 1] || 0 : e);
function VR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Vr(n));
}
function ud(e, t) {
  let n = wl(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = DR(o[s]);
    VR(e, s, a);
  }
}
function My(e) {
  return e.props[sd];
}
function zR(e) {
  return !!(We(e) && e.add);
}
function Ay(e) {
  if (zr.has(e)) return "transform";
  if (Fy.has(e)) return xl(e);
}
function _f(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (zR(r)) return r.add(t);
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
    Ay(t) &&
    e.setStaticValue("willChange", "transform");
}
function BR({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function fd(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  let c = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (let f in l) {
    let d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      m = l[f];
    if (m === void 0 || (u && BR(u, f))) continue;
    let g = { delay: n, ...ld(s || {}, f) },
      v = !1;
    if (_.MotionHandoffAnimation) {
      let h = My(e);
      if (h) {
        let p = _.MotionHandoffAnimation(h, f, ee);
        p !== null && ((g.startTime = p), (v = !0));
      }
    }
    _f(e, f),
      d.start(
        cd(f, d, m, e.shouldReduceMotion && zr.has(f) ? { type: !1 } : g, e, v)
      );
    let b = d.animation;
    b && c.push(b);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        ee.update(() => {
          a && ud(e, a);
        });
      }),
    c
  );
}
function If(e, t, n = {}) {
  var r;
  let i = wl(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all(fd(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return $R(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function $R(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(NR)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          s.push(
            If(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function NR(e, t) {
  return e.sortNodePosition(t);
}
function dd(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => If(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = If(e, t, n);
  else {
    let i = typeof t == "function" ? wl(e, t, n.custom) : t;
    r = Promise.all(fd(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function vs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Dy(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ys(e) {
  return typeof e == "string" || Array.isArray(e);
}
var hd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  pd = ["initial", ...hd],
  HR = pd.length;
function Vy(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let n = e.parent ? Vy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  let t = {};
  for (let n = 0; n < HR; n++) {
    let r = pd[n],
      i = e.props[r];
    (ys(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var jR = [...hd].reverse(),
  WR = hd.length;
function UR(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => dd(e, n, r)));
}
function GR(e) {
  let t = UR(e),
    n = Kg(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = wl(
        e,
        u,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        let { transition: m, transitionEnd: g, ...v } = d;
        c = { ...c, ...v, ...g };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let { props: c } = e,
      u = Vy(e.parent) || {},
      f = [],
      d = new Set(),
      m = {},
      g = 1 / 0;
    for (let b = 0; b < WR; b++) {
      let h = jR[b],
        p = n[h],
        y = c[h] !== void 0 ? c[h] : u[h],
        w = ys(y),
        T = h === l ? p.isActive : null;
      T === !1 && (g = b);
      let S = y === u[h] && y !== c[h] && w;
      if (
        (S && r && e.manuallyAnimateOnMount && (S = !1),
        (p.protectedKeys = { ...m }),
        (!p.isActive && T === null) ||
          (!y && !p.prevProp) ||
          vs(y) ||
          typeof y == "boolean")
      )
        continue;
      let E = qR(p.prevProp, y),
        R = E || (h === l && p.isActive && !S && w) || (b > g && w),
        M = !1,
        I = Array.isArray(y) ? y : [y],
        G = I.reduce(i(h), {});
      T === !1 && (G = {});
      let { prevResolvedValues: z = {} } = p,
        de = { ...z, ...G },
        ye = (W) => {
          (R = !0),
            d.has(W) && ((M = !0), d.delete(W)),
            (p.needsAnimating[W] = !0);
          let X = e.getValue(W);
          X && (X.liveStyle = !1);
        };
      for (let W in de) {
        let X = G[W],
          se = z[W];
        if (m.hasOwnProperty(W)) continue;
        let j = !1;
        Ff(X) && Ff(se) ? (j = !Dy(X, se)) : (j = X !== se),
          j
            ? X != null
              ? ye(W)
              : d.add(W)
            : X !== void 0 && d.has(W)
            ? ye(W)
            : (p.protectedKeys[W] = !0);
      }
      (p.prevProp = y),
        (p.prevResolvedValues = G),
        p.isActive && (m = { ...m, ...G }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!(S && E) || M) &&
          f.push(...I.map((W) => ({ animation: W, options: { type: h } })));
    }
    if (d.size) {
      let b = {};
      d.forEach((h) => {
        let p = e.getBaseTarget(h),
          y = e.getValue(h);
        y && (y.liveStyle = !0), (b[h] = p ?? null);
      }),
        f.push({ animation: b });
    }
    let v = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var m;
        return (m = d.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, c);
      }),
      (n[l].isActive = c);
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Kg()), (r = !0);
    },
  };
}
function qR(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Dy(t, e) : !1;
}
function gi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Kg() {
  return {
    animate: gi(!0),
    whileInView: gi(),
    whileHover: gi(),
    whileTap: gi(),
    whileDrag: gi(),
    whileFocus: gi(),
    exit: gi(),
  };
}
var Br = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  XR = class extends Br {
    constructor(e) {
      super(e), e.animationState || (e.animationState = GR(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      vs(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this);
    }
  },
  YR = 0,
  KR = class extends Br {
    constructor() {
      super(...arguments), (this.id = YR++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive("exit", !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  Sl = { animation: { Feature: XR }, exit: { Feature: KR } },
  zy = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function kl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var By = (e) => (t) => zy(t) && e(t, kl(t));
function hr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Xn(e, t, n, r) {
  return hr(e, t, By(n), r);
}
var Of = (e, t) => Math.abs(e - t);
function $y(e, t) {
  let n = Of(e.x, t.x),
    r = Of(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function Ny(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Qg = Ny("dragHorizontal"),
  Zg = Ny("dragVertical");
function Hy(e) {
  let t = !1;
  if (e === "y") t = Zg();
  else if (e === "x") t = Qg();
  else {
    let n = Qg(),
      r = Zg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function md() {
  let e = Hy(!0);
  return e ? (e(), !1) : !0;
}
var jy = 1e-4,
  QR = 1 - jy,
  ZR = 1 + jy,
  Wy = 0.01,
  JR = 0 - Wy,
  eP = 0 + Wy;
function Bt(e) {
  return e.max - e.min;
}
function tP(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Jg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = _e(t.min, t.max, e.origin)),
    (e.scale = Bt(n) / Bt(t)),
    (e.translate = _e(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= QR && e.scale <= ZR) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= JR && e.translate <= eP) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function ds(e, t, n, r) {
  Jg(e.x, t.x, n.x, r ? r.originX : void 0),
    Jg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ev(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Bt(t));
}
function nP(e, t, n) {
  ev(e.x, t.x, n.x), ev(e.y, t.y, n.y);
}
function tv(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Bt(t));
}
function hs(e, t, n) {
  tv(e.x, t.x, n.x), tv(e.y, t.y, n.y);
}
var nv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  io = () => ({ x: nv(), y: nv() }),
  rv = () => ({ min: 0, max: 0 }),
  De = () => ({ x: rv(), y: rv() }),
  po = ke(null);
function Uy() {
  let e = A(po);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = mi();
  $(() => r(i), []);
  let o = ie(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
var bs = ke({}),
  Cl = ke({}),
  ll = {};
function gd(e) {
  Object.assign(ll, e);
}
var rP = (e, t) => e.depth - t.depth,
  Gy = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      id(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      yl(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(rP),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function kt(e) {
  let t = We(e) ? e.get() : e;
  return AR(t) ? t.toValue() : t;
}
function qy(e, t) {
  let n = qn.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (Kt(r), e(o - t));
    };
  return ee.read(r, !0), () => Kt(r);
}
var Yn = ke({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ts = ke({}),
  Tl = typeof _ < "u",
  ki = Tl ? st : $,
  Xy = ke({ strict: !1 }),
  { schedule: vd, cancel: TB } = Jv(queueMicrotask, !1);
function oo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function iP(e, t, n, r, i) {
  var o, s;
  let { visualElement: a } = A(Ts),
    l = A(Xy),
    c = A(po),
    u = A(Yn).reducedMotion,
    f = D();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  let d = f.current,
    m = A(Cl);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    oP(f.current, n, i, m),
    ot(() => {
      d && d.update(n, c);
    });
  let g = n[sd],
    v = D(
      !!g &&
        !(
          !((o = _.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(_, g)
        ) &&
        ((s = _.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(_, g))
    );
  return (
    ki(() => {
      d &&
        ((_.MotionIsMounted = !0),
        d.updateFeatures(),
        vd.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    $(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var b;
            (b = _.MotionHandoffMarkAsComplete) === null ||
              b === void 0 ||
              b.call(_, g);
          }),
          (v.current = !1)));
    }),
    d
  );
}
function oP(e, t, n, r) {
  let {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Yy(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && oo(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function Yy(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Yy(e.parent);
}
function sP(e, t, n) {
  return ie(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : oo(n) && (n.current = r));
    },
    [t]
  );
}
function El(e) {
  return vs(e.animate) || pd.some((t) => ys(e[t]));
}
function Ky(e) {
  return !!(El(e) || e.variants);
}
function aP(e, t) {
  if (El(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ys(n) ? n : void 0,
      animate: ys(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function lP(e) {
  let { initial: t, animate: n } = aP(e, A(Ts));
  return ae(() => ({ initial: t, animate: n }), [iv(t), iv(n)]);
}
function iv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var ov = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  co = {};
for (let e in ov) co[e] = { isEnabled: (t) => ov[e].some((n) => !!t[n]) };
function cP(e) {
  for (let t in e) co[t] = { ...co[t], ...e[t] };
}
var yd = Symbol.for("motionComponentSymbol");
function Qy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && cP(e);
  function o(a, l) {
    let c,
      u = { ...A(Yn), ...a, layoutId: uP(a) },
      { isStatic: f } = u,
      d = lP(a),
      m = r(a, f);
    if (!f && Tl) {
      fP(u, e);
      let g = dP(u);
      (c = g.MeasureLayout),
        (d.visualElement = iP(i, m, u, t, g.ProjectionNode));
    }
    return ue(Ts.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? k(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, sP(m, d.visualElement, l), m, f, d.visualElement),
      ],
    });
  }
  let s = Ae(o);
  return (s[yd] = i), s;
}
function uP({ layoutId: e }) {
  let t = A(bs).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function fP(e, t) {
  let n = A(Xy).strict;
}
function dP(e) {
  let { drag: t, layout: n } = co;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function gr(e) {
  let t = D(null);
  return t.current === null && (t.current = e()), t.current;
}
function hP(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  o,
  s,
  a
) {
  let l = { latestValues: pP(i, o, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (c) => r(i, c, l)), l;
}
var Rl = (e) => (t, n) => {
  let r = A(Ts),
    i = A(po),
    o = () => hP(e, t, r, i, n);
  return n ? o() : gr(o);
};
function sv(e, t, n) {
  let r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    let o = ad(e, r[i]);
    if (o) {
      let { transitionEnd: s, transition: a, ...l } = o;
      n(l, s);
    }
  }
}
function pP(e, t, n, r, i) {
  var o;
  let s = {},
    a =
      r &&
      ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) ===
        void 0,
    l = i(e, {});
  for (let v in l) s[v] = kt(l[v]);
  let { initial: c, animate: u } = e,
    f = El(e),
    d = Ky(e);
  t &&
    d &&
    !f &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
  let m = n ? n.initial === !1 : !1;
  m = m || c === !1;
  let g = m ? u : c;
  return (
    g &&
      typeof g != "boolean" &&
      !vs(g) &&
      sv(e, g, (v, b) => {
        for (let h in v) {
          let p = v[h];
          if (Array.isArray(p)) {
            let y = m ? p.length - 1 : 0;
            p = p[y];
          }
          p !== null && (s[h] = p);
        }
        for (let h in b) s[h] = b[h];
      }),
    a &&
      u &&
      c !== !1 &&
      !vs(u) &&
      sv(e, u, (v) => {
        for (let b in v)
          if (Ay(b)) {
            s.willChange = "transform";
            return;
          }
      }),
    s
  );
}
var Zy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  mP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  gP = Cs.length;
function Jy(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < gP; o++) {
    let s = Cs[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      let c = Zy(a, td[s]);
      if (!l) {
        i = !1;
        let u = mP[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
var vP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function uo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    vP.has(e)
  );
}
var e0 = (e) => !uo(e);
function t0(e) {
  e && (e0 = (t) => (t.startsWith("on") ? !uo(t) : e(t)));
}
try {
  t0(tE().default);
} catch {}
function n0(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((e0(i) ||
        (n === !0 && uo(i)) ||
        (!t && !uo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var Si = new WeakMap(),
  cl = { current: null },
  bd = { current: !1 };
function r0() {
  if (((bd.current = !0), !!Tl))
    if (_.matchMedia) {
      let e = _.matchMedia("(prefers-reduced-motion)"),
        t = () => (cl.current = e.matches);
      e.addListener(t), t();
    } else cl.current = !1;
}
function yP(e, t, n) {
  for (let r in t) {
    let i = t[r],
      o = n[r];
    if (We(i)) e.addValue(r, i);
    else if (We(o)) e.addValue(r, Vr(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        let s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        let s = e.getStaticValue(r);
        e.addValue(r, Vr(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var bP = [...Ey, ht, mr],
  xP = (e) => bP.find(Ty(e)),
  av = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  xd = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: o,
      },
      s = {}
    ) {
      (this.applyWillChange = !1),
        (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = ed),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let f = qn.now();
          this.renderScheduledAt < f &&
            ((this.renderScheduledAt = f), ee.render(this.render, !1, !0));
        });
      let { latestValues: a, renderState: l } = o;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = t.initial ? { ...a } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = s),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = El(t)),
        (this.isVariantNode = Ky(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this
      );
      for (let f in u) {
        let d = u[f];
        a[f] !== void 0 && We(d) && d.set(a[f], !1);
      }
    }
    mount(e) {
      (this.current = e),
        Si.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        bd.current || r0(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : cl.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      Si.delete(this.current),
        this.projection && this.projection.unmount(),
        Kt(this.notifyUpdate),
        Kt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = zr.has(e),
        r = t.on("change", (s) => {
          (this.latestValues[e] = s),
            this.props.onUpdate && ee.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender),
        o;
      _.MotionCheckAppearSync && (o = _.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), i(), o && o(), t.owner && t.stop();
        });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in co) {
        let t = co[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let i = this.features[e];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : De();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < av.length; n++) {
        let r = av[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = "on" + r,
          o = e[i];
        o && (this.propEventSubscriptions[r] = this.on(r, o));
      }
      (this.prevMotionValues = yP(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Vr(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
            n !== void 0
          ? n
          : this.readValueFromInstance(this.current, e, this.options);
      return (
        r != null &&
          (typeof r == "string" && (ky(r) || Sy(r))
            ? (r = parseFloat(r))
            : !xP(r) && mr.test(t) && (r = Ry(e, t)),
          this.setBaseTarget(e, We(r) ? r.get() : r)),
        We(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r;
      if (typeof n == "string" || typeof n == "object") {
        let o = ad(
          this.props,
          n,
          (t = this.presenceContext) === null || t === void 0
            ? void 0
            : t.custom
        );
        o && (r = o[e]);
      }
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !We(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new od()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function wP(e) {
  if (typeof Proxy > "u") return e;
  let t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
var i0 = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = _),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let u = df(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = $y(u.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !d) return;
        let { point: m } = u,
          { timestamp: g } = et;
        this.history.push({ ...m, timestamp: g });
        let { onStart: v, onMove: b } = this.handlers;
        f ||
          (v && v(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, f) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = ff(f, this.transformPagePoint)),
          ee.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, f) => {
        this.end();
        let { onEnd: d, onSessionEnd: m, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let v = df(
          u.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ff(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && d && d(u, v), m && m(u, v);
      }),
      !zy(e))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || _);
    let o = kl(e),
      s = ff(o, this.transformPagePoint),
      { point: a } = s,
      { timestamp: l } = et;
    this.history = [{ ...a, timestamp: l }];
    let { onSessionStart: c } = t;
    c && c(e, df(s, this.history)),
      (this.removeListeners = Gn(
        Xn(this.contextWindow, "pointermove", this.handlePointerMove),
        Xn(this.contextWindow, "pointerup", this.handlePointerUp),
        Xn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Kt(this.updatePoint);
  }
};
function ff(e, t) {
  return t ? { point: t(e.point) } : e;
}
function lv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function df({ point: e }, t) {
  return {
    point: e,
    delta: lv(e, o0(t)),
    offset: lv(e, SP(t)),
    velocity: kP(t, 0.1),
  };
}
function SP(e) {
  return e[0];
}
function o0(e) {
  return e[e.length - 1];
}
function kP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = o0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Pn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Un(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function CP(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? _e(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? _e(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function TP(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: cv(e.x, n, i), y: cv(e.y, t, r) };
}
function uv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function EP(e, t) {
  return { x: uv(e.x, t.x), y: uv(e.y, t.y) };
}
function RP(e, t) {
  let n = 0.5,
    r = Bt(e),
    i = Bt(t);
  return (
    i > r
      ? (n = Dr(t.min, t.max - r, e.min))
      : r > i && (n = Dr(e.min, e.max - i, t.min)),
    pr(0, 1, n)
  );
}
function PP(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Lf = 0.35;
function FP(e = Lf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Lf),
    { x: fv(e, "left", "right"), y: fv(e, "top", "bottom") }
  );
}
function fv(e, t, n) {
  return { min: dv(e, t), max: dv(e, n) };
}
function dv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function hn(e) {
  return [e("x"), e("y")];
}
function s0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function _P({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function IP(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function hf(e) {
  return e === void 0 || e === 1;
}
function Mf({ scale: e, scaleX: t, scaleY: n }) {
  return !hf(e) || !hf(t) || !hf(n);
}
function vi(e) {
  return (
    Mf(e) ||
    a0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function a0(e) {
  return hv(e.x) || hv(e.y);
}
function hv(e) {
  return e && e !== "0%";
}
function ul(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function pv(e, t, n, r, i) {
  return i !== void 0 && (e = ul(e, i, r)), ul(e, n, r) + t;
}
function Af(e, t = 0, n = 1, r, i) {
  (e.min = pv(e.min, t, n, r, i)), (e.max = pv(e.max, t, n, r, i));
}
function l0(e, { x: t, y: n }) {
  Af(e.x, t.translate, t.scale, t.originPoint),
    Af(e.y, n.translate, n.scale, n.originPoint);
}
var mv = 0.999999999999,
  gv = 1.0000000000001;
function OP(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        ao(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), l0(e, s)),
      r && vi(o.latestValues) && ao(e, o.latestValues));
  }
  t.x < gv && t.x > mv && (t.x = 1), t.y < gv && t.y > mv && (t.y = 1);
}
function so(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function vv(e, t, n, r, i = 0.5) {
  let o = _e(e.min, e.max, i);
  Af(e, t, n, o, r);
}
function ao(e, t) {
  vv(e.x, t.x, t.scaleX, t.scale, t.originX),
    vv(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function c0(e, t) {
  return s0(IP(e.getBoundingClientRect(), t));
}
function LP(e, t, n) {
  let r = c0(e, n),
    { scroll: i } = t;
  return i && (so(r.x, i.offset.x), so(r.y, i.offset.y)), r;
}
var u0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  MP = new WeakMap(),
  AP = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = De()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(kl(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = Hy(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            hn((v) => {
              let b = this.getAxisMotionValue(v).get() || 0;
              if (Wn.test(b)) {
                let { projection: h } = this.visualElement;
                if (h && h.layout) {
                  let p = h.layout.layoutBox[v];
                  p && (b = Bt(p) * (parseFloat(b) / 100));
                }
              }
              this.originPoint[v] = b;
            }),
            m && ee.postRender(() => m(c, u)),
            _f(this.visualElement, "transform");
          let { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: m,
            onDrag: g,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: v } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = DP(v)),
              this.currentDirection !== null && m && m(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, v),
            this.updateAxis("y", u.point, v),
            this.visualElement.render(),
            g && g(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          hn((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new i0(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: u0(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && ee.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Ja(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = CP(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && oo(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = TP(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = FP(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          hn((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = PP(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !oo(e)) return !1;
      let n = e.current;
      Qt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = LP(n, r.root, this.visualElement.getTransformPagePoint()),
        o = EP(r.layout.layoutBox, i);
      if (t) {
        let s = t(_P(o));
        (this.hasMutatedConstraints = !!s), s && (o = s0(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = hn((c) => {
          if (!Ja(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            m = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, m);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        _f(this.visualElement, e),
        n.start(cd(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      hn((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      hn((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      hn((t) => {
        let { drag: n } = this.getProps();
        if (!Ja(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - _e(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!oo(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      hn((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = RP({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        hn((o) => {
          if (!Ja(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(_e(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      MP.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Xn(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          oo(a) &&
            a.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        ee.read(n);
      let o = hr(_, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (hn((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = Lf,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Ja(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function DP(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var VP = class extends Br {
    constructor(e) {
      super(e),
        (this.removeGroupControls = pt),
        (this.removeListeners = pt),
        (this.controls = new AP(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || pt);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  yv = (e) => (t, n) => {
    e && ee.postRender(() => e(t, n));
  },
  zP = class extends Br {
    constructor() {
      super(...arguments), (this.removePointerDownListener = pt);
    }
    onPointerDown(e) {
      this.session = new i0(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: u0(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: yv(e),
        onStart: yv(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && ee.postRender(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Xn(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  rl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function bv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var ss = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (q.test(e)) e = parseFloat(e);
        else return e;
      let n = bv(e, t.target.x),
        r = bv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  BP = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = mr.parse(e);
      if (i.length > 5) return r;
      let o = mr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = _e(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  $P = class extends Ee {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      gd(NP),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (rl.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                ee.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        vd.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function f0(e) {
  let [t, n] = Uy(),
    r = A(bs);
  return k($P, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A(Cl),
    isPresent: t,
    safeToRemove: n,
  });
}
var NP = {
    borderRadius: {
      ...ss,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ss,
    borderTopRightRadius: ss,
    borderBottomLeftRadius: ss,
    borderBottomRightRadius: ss,
    boxShadow: BP,
  },
  d0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  HP = d0.length,
  xv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  wv = (e) => typeof e == "number" || q.test(e);
function jP(e, t, n, r, i, o) {
  i
    ? ((e.opacity = _e(0, n.opacity !== void 0 ? n.opacity : 1, WP(r))),
      (e.opacityExit = _e(t.opacity !== void 0 ? t.opacity : 1, 0, UP(r))))
    : o &&
      (e.opacity = _e(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < HP; s++) {
    let a = `border${d0[s]}Radius`,
      l = Sv(t, a),
      c = Sv(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || wv(l) === wv(c)
        ? ((e[a] = Math.max(_e(xv(l), xv(c), r), 0)),
          (Wn.test(c) || Wn.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = _e(t.rotate || 0, n.rotate || 0, r));
}
function Sv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var WP = h0(0, 0.5, Uf),
  UP = h0(0.5, 0.95, pt);
function h0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Dr(e, t, r)));
}
function kv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function dn(e, t) {
  kv(e.x, t.x), kv(e.y, t.y);
}
function Cv(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Tv(e, t, n, r, i) {
  return (
    (e -= t), (e = ul(e, 1 / n, r)), i !== void 0 && (e = ul(e, 1 / i, r)), e
  );
}
function GP(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Wn.test(t) &&
      ((t = parseFloat(t)), (t = _e(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = _e(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Tv(e.min, t, n, a, i)),
    (e.max = Tv(e.max, t, n, a, i));
}
function Ev(e, t, [n, r, i], o, s) {
  GP(e, t[n], t[r], t[i], t.scale, o, s);
}
var qP = ["x", "scaleX", "originX"],
  XP = ["y", "scaleY", "originY"];
function Rv(e, t, n, r) {
  Ev(e.x, t, qP, n ? n.x : void 0, r ? r.x : void 0),
    Ev(e.y, t, XP, n ? n.y : void 0, r ? r.y : void 0);
}
function Pv(e) {
  return e.translate === 0 && e.scale === 1;
}
function p0(e) {
  return Pv(e.x) && Pv(e.y);
}
function Fv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function YP(e, t) {
  return Fv(e.x, t.x) && Fv(e.y, t.y);
}
function _v(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function m0(e, t) {
  return _v(e.x, t.x) && _v(e.y, t.y);
}
function Iv(e) {
  return Bt(e.x) / Bt(e.y);
}
function Ov(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var KP = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    id(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (yl(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function QP(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: m,
      skewY: g,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      m && (r += `skewX(${m}deg) `),
      g && (r += `skewY(${g}deg) `);
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
function g0(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function v0(e, t, n) {
  let r = We(e) ? e : Vr(e);
  return r.start(cd("", r, t, n)), r.animation;
}
var yi = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  cs = typeof _ < "u" && _.MotionDebug !== void 0,
  pf = ["", "X", "Y", "Z"],
  ZP = { visibility: "hidden" },
  Lv = 1e3,
  JP = 0;
function mf(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function y0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = My(t);
  if (_.MotionHasOptimisedAnimation(n, "transform")) {
    let { layout: i, layoutId: o } = e.options;
    _.MotionCancelOptimisedAnimation(n, "transform", ee, !(i || o));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && y0(r);
}
function b0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = JP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            cs &&
              (yi.totalNodes =
                yi.resolvedTargetDeltas =
                yi.recalculatedProjection =
                  0),
            this.nodes.forEach(nF),
            this.nodes.forEach(aF),
            this.nodes.forEach(lF),
            this.nodes.forEach(rF),
            cs && _.MotionDebug.record(yi);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gy());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new od()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = g0(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = qy(d, 250)),
            rl.hasAnimatedSinceResize &&
              ((rl.hasAnimatedSinceResize = !1), this.nodes.forEach(Av));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let v = this.options.transition || u.getDefaultTransition() || hF,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: h } =
                  u.getProps(),
                p = !this.targetLayout || !m0(this.targetLayout, g) || m,
                y = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, y);
                let w = { ...ld(v, "layout"), onPlay: b, onComplete: h };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || Av(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Kt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(cF),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (_.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          y0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mv);
        return;
      }
      this.isUpdating || this.nodes.forEach(oF),
        (this.isUpdating = !1),
        this.nodes.forEach(sF),
        this.nodes.forEach(eF),
        this.nodes.forEach(tF),
        this.clearAllSnapshots();
      let a = qn.now();
      (et.delta = pr(0, 1e3 / 60, a - et.timestamp)),
        (et.timestamp = a),
        (et.isProcessing = !0),
        tl.update.process(et),
        tl.preRender.process(et),
        tl.render.process(et),
        (et.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(iF), this.sharedNodes.forEach(uF);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ee.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ee.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = De()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        let l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !p0(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || vi(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        pF(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      let { visualElement: a } = this.options;
      if (!a) return De();
      let l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(mF)
        )
      ) {
        let { scroll: u } = this.root;
        u && (so(l.x, u.offset.x), so(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      let l = De();
      if (
        (dn(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c],
          { scroll: f, options: d } = u;
        u !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && dn(l, s), so(l.x, f.offset.x), so(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      let l = De();
      dn(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          ao(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          vi(u.latestValues) && ao(l, u.latestValues);
      }
      return vi(this.latestValues) && ao(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = De();
      dn(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !vi(c.latestValues)) continue;
        Mf(c.latestValues) && c.updateSnapshot();
        let u = De(),
          f = c.measurePageBox();
        dn(u, f),
          Rv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return vi(this.latestValues) && Rv(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== et.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = et.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = De()),
              (this.relativeTargetOrigin = De()),
              hs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              dn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = De()), (this.targetWithTransforms = De())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                nP(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : dn(this.target, this.layout.layoutBox),
                l0(this.target, this.targetDelta))
              : dn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = De()),
                (this.relativeTargetOrigin = De()),
                hs(this.relativeTargetOrigin, this.target, m.target),
                dn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          cs && yi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Mf(this.parent.latestValues) ||
          a0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === et.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      dn(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        m = this.treeScale.y;
      OP(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = De()));
      let { target: g } = a;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Cv(this.prevProjectionDelta.x, this.projectionDelta.x),
          Cv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ds(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== m ||
          !Ov(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ov(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        cs && yi.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        let l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = io()),
        (this.projectionDelta = io()),
        (this.projectionDeltaWithTransform = io());
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = io();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = De(),
        m = l ? l.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = m !== g,
        b = this.getStack(),
        h = !b || b.members.length <= 1,
        p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(dF));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (w) => {
        let T = w / 1e3;
        Dv(f.x, s.x, T),
          Dv(f.y, s.y, T),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            fF(this.relativeTarget, this.relativeTargetOrigin, d, T),
            y && YP(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = De()),
            dn(y, this.relativeTarget)),
          v &&
            ((this.animationValues = u), jP(u, c, this.latestValues, T, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Kt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ee.update(() => {
          (rl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = v0(0, Lv, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Lv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          x0(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || De();
          let f = Bt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = Bt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        dn(a, l),
          ao(a, u),
          ds(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new KP()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && mf("z", s, c, this.animationValues);
      for (let u = 0; u < pf.length; u++)
        mf(`rotate${pf[u]}`, s, c, this.animationValues),
          mf(`skew${pf[u]}`, s, c, this.animationValues);
      s.render();
      for (let u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ZP;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = kt(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = kt(s?.pointerEvents) || "")),
          this.hasProjected &&
            !vi(this.latestValues) &&
            ((v.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = QP(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: m, y: g } = this.projectionDelta;
      (c.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let v in ll) {
        if (d[v] === void 0) continue;
        let { correct: b, applyTo: h } = ll[v],
          p = c.transform === "none" ? d[v] : b(d[v], f);
        if (h) {
          let y = h.length;
          for (let w = 0; w < y; w++) c[h[w]] = p;
        } else c[v] = p;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? kt(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Mv),
        this.root.sharedNodes.clear();
    }
  };
}
function eF(e) {
  e.updateLayout();
}
function tF(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? hn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Bt(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : x0(o, n.layoutBox, r) &&
        hn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Bt(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    let a = io();
    ds(a, r, n.layoutBox);
    let l = io();
    s ? ds(l, e.applyTransform(i, !0), n.measuredBox) : ds(l, r, n.layoutBox);
    let c = !p0(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: m } = f;
        if (d && m) {
          let g = De();
          hs(g, n.layoutBox, d.layoutBox);
          let v = De();
          hs(v, r, m.layoutBox),
            m0(g, v) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function nF(e) {
  cs && yi.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function rF(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function iF(e) {
  e.clearSnapshot();
}
function Mv(e) {
  e.clearMeasurements();
}
function oF(e) {
  e.isLayoutDirty = !1;
}
function sF(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Av(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function aF(e) {
  e.resolveTargetDelta();
}
function lF(e) {
  e.calcProjection();
}
function cF(e) {
  e.resetSkewAndRotation();
}
function uF(e) {
  e.removeLeadSnapshot();
}
function Dv(e, t, n) {
  (e.translate = _e(t.translate, 0, n)),
    (e.scale = _e(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Vv(e, t, n, r) {
  (e.min = _e(t.min, n.min, r)), (e.max = _e(t.max, n.max, r));
}
function fF(e, t, n, r) {
  Vv(e.x, t.x, n.x, r), Vv(e.y, t.y, n.y, r);
}
function dF(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var hF = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zv = (e) =>
    typeof Fe < "u" && Fe.userAgent && Fe.userAgent.toLowerCase().includes(e),
  Bv = zv("applewebkit/") && !zv("chrome/") ? Math.round : pt;
function $v(e) {
  (e.min = Bv(e.min)), (e.max = Bv(e.max));
}
function pF(e) {
  $v(e.x), $v(e.y);
}
function x0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !tP(Iv(t), Iv(n), 0.2))
  );
}
function mF(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
var gF = b0({
    attachResizeListener: (e, t) => hr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  wi = { current: void 0 },
  w0 = b0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!wi.current) {
        let e = new gF({});
        e.mount(_), e.setOptions({ layoutScroll: !0 }), (wi.current = e);
      }
      return wi.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => _.getComputedStyle(e).position === "fixed",
  }),
  S0 = {
    pan: { Feature: zP },
    drag: { Feature: VP, ProjectionNode: w0, MeasureLayout: f0 },
  };
function Nv(e, t) {
  let n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || md()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      let l = a[r];
      l && ee.postRender(() => l(o, s));
    };
  return Xn(e.current, n, i, { passive: !e.getProps()[r] });
}
var vF = class extends Br {
    mount() {
      this.unmount = Gn(Nv(this.node, !0), Nv(this.node, !1));
    }
    unmount() {}
  },
  yF = class extends Br {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Gn(
        hr(this.node.current, "focus", () => this.onFocus()),
        hr(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  k0 = (e, t) => (t ? (e === t ? !0 : k0(e, t.parentElement)) : !1);
function gf(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, kl(n));
}
var bF = class extends Br {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = pt),
        (this.removeEndListeners = pt),
        (this.removeAccessibleListeners = pt),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Xn(
              _,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !k0(this.node.current, s.target) ? c : l;
                f && ee.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = Xn(_, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = Gn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  gf("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && ee.postRender(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = hr(this.node.current, "keyup", o)),
                gf("down", (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = hr(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && gf("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = hr(this.node.current, "blur", n);
          this.removeAccessibleListeners = Gn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && ee.postRender(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !md()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && ee.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Xn(
          e.globalTapTarget ? _ : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = hr(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Gn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  Df = new WeakMap(),
  vf = new WeakMap(),
  xF = (e) => {
    let t = Df.get(e.target);
    t && t(e);
  },
  wF = (e) => {
    e.forEach(xF);
  };
function SF({ root: e, ...t }) {
  let n = e || document;
  vf.has(n) || vf.set(n, {});
  let r = vf.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(wF, { root: e, ...t })), r[i];
}
function kF(e, t, n) {
  let r = SF(t);
  return (
    Df.set(e, n),
    r.observe(e),
    () => {
      Df.delete(e), r.unobserve(e);
    }
  );
}
var CF = { some: 0, all: 1 },
  TF = class extends Br {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : CF[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return kF(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(EF(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function EF({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var C0 = {
    inView: { Feature: TF },
    tap: { Feature: bF },
    focus: { Feature: yF },
    hover: { Feature: vF },
  },
  T0 = { layout: { ProjectionNode: w0, MeasureLayout: f0 } },
  RF = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
function wd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(RF.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function E0(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var R0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function P0(e, t, n, r) {
  E0(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(R0.has(i) ? i : xl(i), t.attrs[i]);
}
function F0(e, { layout: t, layoutId: n }) {
  return (
    zr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ll[e] || e === "opacity"))
  );
}
function Sd(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (We(i[s]) ||
      (t.style && We(t.style[s])) ||
      F0(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
  );
}
function _0(e, t, n) {
  let r = Sd(e, t, n);
  for (let i in e)
    if (We(e[i]) || We(t[i])) {
      let o =
        Cs.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var kd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  I0 = () => ({ ...kd(), attrs: {} });
function Cd(e, t, n) {
  let { style: r, vars: i, transformOrigin: o } = e,
    s = !1,
    a = !1;
  for (let l in t) {
    let c = t[l];
    if (zr.has(l)) {
      s = !0;
      continue;
    } else if (dy(l)) {
      i[l] = c;
      continue;
    } else {
      let u = Zy(c, td[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = Jy(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    let { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function Hv(e, t, n) {
  return typeof e == "string" ? e : q.transform(t + n * e);
}
function PF(e, t, n) {
  let r = Hv(t, e.x, e.width),
    i = Hv(n, e.y, e.height);
  return `${r} ${i}`;
}
var FF = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  _F = { offset: "strokeDashoffset", array: "strokeDasharray" };
function IF(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? FF : _F;
  e[o.offset] = q.transform(-r);
  let s = q.transform(t),
    a = q.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Td(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f
) {
  if ((Cd(e, c, f), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: d, style: m, dimensions: g } = e;
  d.transform && (g && (m.transform = d.transform), delete d.transform),
    g &&
      (i !== void 0 || o !== void 0 || m.transform) &&
      (m.transformOrigin = PF(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && IF(d, s, a, l, !1);
}
var Ed = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  OF = {
    useVisualState: Rl({
      scrapeMotionValuesFromProps: _0,
      createRenderState: I0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ee.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ee.render(() => {
            Td(n, r, Ed(t.tagName), e.transformTemplate), P0(t, n);
          });
      },
    }),
  },
  LF = {
    useVisualState: Rl({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Sd,
      createRenderState: kd,
    }),
  };
function O0(e, t, n) {
  for (let r in t) !We(t[r]) && !F0(r, n) && (e[r] = t[r]);
}
function MF({ transformTemplate: e }, t) {
  return ae(() => {
    let n = kd();
    return Cd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function AF(e, t) {
  let n = e.style || {},
    r = {};
  return O0(r, n, e), Object.assign(r, MF(e, t)), r;
}
function DF(e, t) {
  let n = {},
    r = AF(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function VF(e, t, n, r) {
  let i = ae(() => {
    let o = I0();
    return (
      Td(o, t, Ed(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    O0(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function zF(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (wd(n) ? VF : DF)(r, o, s, n),
      c = n0(r, typeof n == "string", e),
      u = n !== ur ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = ae(() => (We(f) ? f.get() : f), [f]);
    return Qa(n, { ...u, children: d });
  };
}
function BF(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    let s = {
      ...(wd(r) ? OF : LF),
      preloadedFeatures: e,
      useRender: zF(i),
      createVisualElement: t,
      Component: r,
    };
    return Qy(s);
  };
}
var L0 = class extends xd {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Py);
  }
  sortInstanceNodePosition(e, t) {
    return e.compareDocumentPosition(t) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, t) {
    return e.style ? e.style[t] : void 0;
  }
  removeValueFromRenderState(e, { vars: t, style: n }) {
    delete t[e], delete n[e];
  }
};
function $F(e) {
  return _.getComputedStyle(e);
}
var M0 = class extends L0 {
    constructor() {
      super(...arguments),
        (this.type = "html"),
        (this.applyWillChange = !0),
        (this.renderInstance = E0);
    }
    readValueFromInstance(e, t) {
      if (zr.has(t)) {
        let n = nd(t);
        return (n && n.default) || 0;
      } else {
        let n = $F(e),
          r = (dy(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return c0(e, t);
    }
    build(e, t, n) {
      Cd(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Sd(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      We(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
  },
  A0 = class extends L0 {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = De);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (zr.has(t)) {
        let n = nd(t);
        return (n && n.default) || 0;
      }
      return (t = R0.has(t) ? t : xl(t)), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return _0(e, t, n);
    }
    build(e, t, n) {
      Td(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      P0(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = Ed(e.tagName)), super.mount(e);
    }
  },
  Rd = (e, t) => (wd(e) ? new A0(t) : new M0(t, { allowProjection: e !== ur })),
  NF = BF({ ...Sl, ...C0, ...S0, ...T0 }, Rd),
  mn = wP(NF);
var HF = class extends Ee {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function jF({ children: e, isPresent: t }) {
  let n = mi(),
    r = D(null),
    i = D({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = A(Yn);
  return (
    ot(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    k(HF, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: fr(e, { ref: r }),
    })
  );
}
var WF = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = gr(UF),
    l = mi(),
    c = ie(
      (f) => {
        a.set(f, !0);
        for (let d of a.values()) if (!d) return;
        r && r();
      },
      [a, r]
    ),
    u = ae(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      o ? [Math.random(), c] : [n, c]
    );
  return (
    ae(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    $(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = k(jF, { isPresent: n, children: e })),
    k(po.Provider, { value: u, children: e })
  );
};
function UF() {
  return new Map();
}
var el = (e) => e.key || "";
function jv(e) {
  let t = [];
  return (
    jn.forEach(e, (n) => {
      zt(n) && t.push(n);
    }),
    t
  );
}
var Pd = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  Qt(!t, "Replace exitBeforeEnter with mode='wait'");
  let a = ae(() => jv(e), [e]),
    l = a.map(el),
    c = D(!0),
    u = D(a),
    f = gr(() => new Map()),
    [d, m] = Xe(a),
    [g, v] = Xe(a);
  ki(() => {
    (c.current = !1), (u.current = a);
    for (let p = 0; p < g.length; p++) {
      let y = el(g[p]);
      l.includes(y) ? f.delete(y) : f.get(y) !== !0 && f.set(y, !1);
    }
  }, [g, l.length, l.join("-")]);
  let b = [];
  if (a !== d) {
    let p = [...a];
    for (let y = 0; y < g.length; y++) {
      let w = g[y],
        T = el(w);
      l.includes(T) || (p.splice(y, 0, w), b.push(w));
    }
    s === "wait" && b.length && (p = b), v(jv(p)), m(a);
    return;
  }
  let { forceRender: h } = A(bs);
  return k(je, {
    children: g.map((p) => {
      let y = el(p),
        w = a === g || l.includes(y),
        T = () => {
          if (f.has(y)) f.set(y, !0);
          else return;
          let S = !0;
          f.forEach((E) => {
            E || (S = !1);
          }),
            S && (h?.(), v(u.current), i && i());
        };
      return k(
        WF,
        {
          isPresent: w,
          initial: !c.current || r ? void 0 : !1,
          custom: w ? void 0 : n,
          presenceAffectsLayout: o,
          mode: s,
          onExitComplete: w ? void 0 : T,
          children: p,
        },
        y
      );
    }),
  });
};
function D0({ children: e, isValidProp: t, ...n }) {
  t && t0(t), (n = { ...A(Yn), ...n }), (n.isStatic = gr(() => n.isStatic));
  let r = ae(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return k(Yn.Provider, { value: r, children: e });
}
var V0 = ke(null);
function GF() {
  let e = D(!1);
  return (
    ki(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Fd() {
  let e = GF(),
    [t, n] = Xe(0),
    r = ie(() => {
      e.current && n(t + 1);
    }, [t]);
  return [ie(() => ee.postRender(r), [r]), t];
}
var qF = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Wv() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(qF);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var z0 = (e) => e === !0,
  XF = (e) => z0(e === !0) || e === "id",
  B0 = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = A(bs),
      i = A(V0),
      [o, s] = Fd(),
      a = D(null),
      l = r.id || i;
    a.current === null &&
      (XF(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (z0(n) && r.group) || Wv() }));
    let c = ae(() => ({ ...a.current, forceRender: o }), [s]);
    return k(bs.Provider, { value: c, children: e });
  },
  YF = { renderer: Rd, ...Sl },
  $0 = { renderer: Rd, ...Sl, ...C0 },
  KF = { ...$0, ...S0, ...T0 };
function Ci(e) {
  let t = gr(() => Vr(e)),
    { isStatic: n } = A(Yn);
  if (n) {
    let [, r] = Xe(e);
    $(() => t.on("change", r), []);
  }
  return t;
}
function N0(e, t) {
  let n = Ci(t()),
    r = () => n.set(t());
  return (
    r(),
    ki(() => {
      let i = () => ee.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), Kt(r);
      };
    }),
    n
  );
}
var QF = (e) => e && typeof e == "object" && e.mix,
  ZF = (e) => (QF(e) ? e.mix : void 0);
function H0(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = ks(i, o, { mixer: ZF(o[0]), ...s });
  return t ? a(r) : a;
}
function JF(e) {
  (fs.current = []), e();
  let t = N0(fs.current, e);
  return (fs.current = void 0), t;
}
function Pl(e, t, n, r) {
  if (typeof e == "function") return JF(e);
  let i = typeof t == "function" ? t : H0(t, n, r);
  return Array.isArray(e) ? Uv(e, i) : Uv([e], ([o]) => i(o));
}
function Uv(e, t) {
  let n = gr(() => []);
  return N0(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function Gv(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function _d(e, t = {}) {
  let { isStatic: n } = A(Yn),
    r = D(null),
    i = Ci(We(e) ? Gv(e.get()) : e),
    o = D(i.get()),
    s = D(() => {}),
    a = () => {
      let c = r.current;
      c && c.time === 0 && c.sample(et.delta),
        l(),
        (r.current = wy({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    ot(
      () =>
        i.attach(
          (c, u) =>
            n
              ? u(c)
              : ((o.current = c), (s.current = u), ee.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    ki(() => {
      if (We(e)) return e.on("change", (c) => i.set(Gv(c)));
    }, [i]),
    i
  );
}
function j0(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (Qt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
function e_(e) {
  let t = D(0),
    { isStatic: n } = A(Yn);
  $(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      t.current || (t.current = i), e(i - t.current, o);
    };
    return ee.update(r, !0), () => Kt(r);
  }, [e]);
}
function W0() {
  !bd.current && r0();
  let [e] = Xe(cl.current);
  return e;
}
function U0() {
  let e = W0(),
    { reducedMotion: t } = A(Yn);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function t_(e) {
  e.values.forEach((t) => t.stop());
}
function Vf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && ud(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          Vf(o, t);
        });
  });
}
function n_(e, t) {
  if (Array.isArray(t)) return Vf(e, t);
  if (typeof t == "string") return Vf(e, [t]);
  ud(e, t);
}
function G0() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Qt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(dd(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Qt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            n_(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          t_(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var q0 = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function r_(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(xy(r), Tf);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: Un(i),
  };
}
function Id(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function X0(e, t, n, r) {
  return typeof e == "string" && Id(t)
    ? j0(e, n, r)
    : e instanceof NodeList
    ? Array.from(e)
    : Array.isArray(e)
    ? e
    : [e];
}
function qv(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function i_(e, t) {
  return py(e) ? e[q0(0, e.length, t)] : e;
}
function o_(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (yl(e, i), r--);
  }
}
function s_(e, t, n, r, i, o) {
  o_(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: _e(i, o, r[s]), easing: i_(n, s) });
}
function a_(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var l_ = "easeInOut";
function c_(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let o = t.duration || 0.3,
    s = new Map(),
    a = new Map(),
    l = {},
    c = new Map(),
    u = 0,
    f = 0,
    d = 0;
  for (let m = 0; m < e.length; m++) {
    let g = e[m];
    if (typeof g == "string") {
      c.set(g, f);
      continue;
    } else if (!Array.isArray(g)) {
      c.set(g.name, qv(f, g.at, u, c));
      continue;
    }
    let [v, b, h = {}] = g;
    h.at !== void 0 && (f = qv(f, h.at, u, c));
    let p = 0,
      y = (w, T, S, E = 0, R = 0) => {
        let M = u_(w),
          { delay: I = 0, times: G = gy(M), type: z = "keyframes", ...de } = T,
          { ease: ye = t.ease || "easeOut", duration: re } = T,
          J = typeof I == "function" ? I(E, R) : I,
          W = M.length,
          X = ml(z) ? z : i?.[z];
        if (W <= 2 && X) {
          let le = 100;
          if (W === 2 && h_(M)) {
            let Je = M[1] - M[0];
            le = Math.abs(Je);
          }
          let fe = { ...de };
          re !== void 0 && (fe.duration = Pn(re));
          let Z = r_(fe, le, X);
          (ye = Z.ease), (re = Z.duration);
        }
        re ?? (re = o);
        let se = f + J,
          j = se + re;
        G.length === 1 && G[0] === 0 && (G[1] = 1);
        let me = G.length - M.length;
        me > 0 && my(G, me),
          M.length === 1 && M.unshift(null),
          s_(S, M, ye, G, se, j),
          (p = Math.max(J + re, p)),
          (d = Math.max(j, d));
      };
    if (We(v)) {
      let w = Xv(v, a);
      y(b, h, Yv("default", w));
    } else {
      let w = X0(v, b, r, l),
        T = w.length;
      for (let S = 0; S < T; S++) {
        (b = b), (h = h);
        let E = w[S],
          R = Xv(E, a);
        for (let M in b) y(b[M], f_(h, M), Yv(M, R), S, T);
      }
    }
    (u = f), (f += p);
  }
  return (
    a.forEach((m, g) => {
      for (let v in m) {
        let b = m[v];
        b.sort(a_);
        let h = [],
          p = [],
          y = [];
        for (let T = 0; T < b.length; T++) {
          let { at: S, value: E, easing: R } = b[T];
          h.push(E), p.push(Dr(0, d, S)), y.push(R || "easeOut");
        }
        p[0] !== 0 && (p.unshift(0), h.unshift(h[0]), y.unshift(l_)),
          p[p.length - 1] !== 1 && (p.push(1), h.push(null)),
          s.has(g) || s.set(g, { keyframes: {}, transition: {} });
        let w = s.get(g);
        (w.keyframes[v] = h),
          (w.transition[v] = { ...t, duration: d, ease: y, times: p, ...n });
      }
    }),
    s
  );
}
function Xv(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Yv(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function u_(e) {
  return Array.isArray(e) ? e : [e];
}
function f_(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var d_ = (e) => typeof e == "number",
  h_ = (e) => e.every(d_);
function p_(e, t) {
  return e in t;
}
var m_ = class extends xd {
  constructor() {
    super(...arguments), (this.type = "object");
  }
  readValueFromInstance(e, t) {
    if (p_(t, e)) {
      let n = e[t];
      if (typeof n == "string" || typeof n == "number") return n;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, t) {
    delete t.output[e];
  }
  measureInstanceViewportBox() {
    return De();
  }
  build(e, t) {
    Object.assign(e.output, t);
  }
  renderInstance(e, { output: t }) {
    Object.assign(e, t);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
function g_(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = g0(e) ? new A0(t) : new M0(t);
  n.mount(e), Si.set(e, n);
}
function v_(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new m_(t);
  n.mount(e), Si.set(e, n);
}
function y_(e, t) {
  return We(e) || typeof e == "number" || (typeof e == "string" && !Id(t));
}
function Y0(e, t, n, r) {
  let i = [];
  if (y_(e, t)) i.push(v0(e, (Id(t) && t.default) || t, n && (n.default || n)));
  else {
    let o = X0(e, t, r),
      s = o.length;
    Qt(!!s, "No valid elements provided.");
    for (let a = 0; a < s; a++) {
      let l = o[a],
        c = l instanceof Element ? g_ : v_;
      Si.has(l) || c(l);
      let u = Si.get(l),
        f = { ...n };
      "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, s)),
        i.push(...fd(u, { ...t, transition: f }, {}));
    }
  }
  return i;
}
function b_(e, t, n) {
  let r = [];
  return (
    c_(e, t, n, { spring: Ss }).forEach(
      ({ keyframes: o, transition: s }, a) => {
        r.push(...Y0(a, o, s));
      }
    ),
    r
  );
}
function x_(e) {
  return Array.isArray(e) && Array.isArray(e[0]);
}
function K0(e) {
  function t(n, r, i) {
    let o = [];
    x_(n) ? (o = b_(n, r, e)) : (o = Y0(n, r, i, e));
    let s = new Ly(o);
    return e && e.animations.push(s), s;
  }
  return t;
}
var Ti = K0();
function Q0() {
  let e = gr(G0);
  return ki(e.mount, []), e;
}
var Z0 = Q0;
var w_ = { some: 0, all: 1 };
function Fl(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  let o = j0(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : w_[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function S_(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = Xe(!1);
  return (
    $(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Fl(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function Od(e) {
  return e !== null && typeof e == "object" && yd in e;
}
function J0(e) {
  if (Od(e)) return e[yd];
}
function Ld() {
  return k_;
}
function k_(e) {
  wi.current &&
    ((wi.current.isUpdating = !1), wi.current.blockUpdate(), e && e());
}
function eb() {
  let [e, t] = Fd(),
    n = Ld(),
    r = D();
  return (
    $(() => {
      ee.postRender(() =>
        ee.postRender(() => {
          t === r.current && (ol.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (ol.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function tb() {
  return ie(() => {
    let t = wi.current;
    t && t.resetTree();
  }, []);
}
var Kv = () => ({});
var h$ = Rl({ scrapeMotionValuesFromProps: Kv, createRenderState: Kv });
var nb = {};
ZT(nb, { Group: () => E_, Item: () => __ });
var rb = ke(null);
function C_(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = _e(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? TR(e, i, i + o)
    : e;
}
function T_(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  let a = gr(() => mn[t]),
    l = [],
    c = D(!1);
  Qt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let m = l.findIndex((g) => f === g.value);
      m !== -1 ? (l[m].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(P_);
    },
    updateOrder: (f, d, m) => {
      if (c.current) return;
      let g = C_(l, f, d, m);
      l !== g &&
        ((c.current = !0), r(g.map(R_).filter((v) => i.indexOf(v) !== -1)));
    },
  };
  return (
    $(() => {
      c.current = !1;
    }),
    k(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: k(rb.Provider, { value: u, children: e }),
    })
  );
}
var E_ = Ae(T_);
function R_(e) {
  return e.value;
}
function P_(e, t) {
  return e.layout.min - t.layout.min;
}
function Qv(e, t = 0) {
  return We(e) ? e : Ci(t);
}
function F_(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = gr(() => mn[r]),
    c = A(rb),
    u = { x: Qv(t.x), y: Qv(t.y) },
    f = Pl([u.x, u.y], ([v, b]) => (v || b ? 1 : "unset"));
  Qt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: m, updateOrder: g } = c;
  return k(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (v, b) => {
      let { velocity: h } = b;
      h[d] && g(n, u[d].get(), h[d]), i && i(v, b);
    },
    onLayoutMeasure: (v) => m(n, v),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var __ = Ae(F_);
function I_(e, t) {
  if (e === "first") return 0;
  {
    let n = t - 1;
    return e === "last" ? n : n / 2;
  }
}
function Md(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, o) => {
    let s = typeof n == "number" ? n : I_(n, o),
      a = Math.abs(s - i),
      l = e * a;
    if (r) {
      let c = o * e;
      l = Sf(r)(l / c) * c;
    }
    return t + l;
  };
}
var O_ = as.reduce((e, t) => ((e[t] = (n) => Kt(n)), e), {});
var h2 = {};
ef(h2, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => t2,
  createPortal: () => n2,
  createRoot: () => r2,
  default: () => xS,
  findDOMNode: () => i2,
  flushSync: () => o2,
  hydrate: () => s2,
  hydrateRoot: () => a2,
  render: () => l2,
  unmountComponentAtNode: () => c2,
  unstable_batchedUpdates: () => u2,
  unstable_renderSubtreeIntoContainer: () => f2,
  version: () => d2,
});
var Al = {};
ef(Al, {
  default: () => Y,
  unstable_IdlePriority: () => A_,
  unstable_ImmediatePriority: () => D_,
  unstable_LowPriority: () => V_,
  unstable_NormalPriority: () => z_,
  unstable_Profiling: () => B_,
  unstable_UserBlockingPriority: () => $_,
  unstable_cancelCallback: () => N_,
  unstable_continueExecution: () => H_,
  unstable_forceFrameRate: () => j_,
  unstable_getCurrentPriorityLevel: () => W_,
  unstable_getFirstCallbackNode: () => U_,
  unstable_next: () => G_,
  unstable_now: () => M_,
  unstable_pauseExecution: () => q_,
  unstable_requestPaint: () => X_,
  unstable_runWithPriority: () => Y_,
  unstable_scheduleCallback: () => K_,
  unstable_shouldYield: () => Q_,
  unstable_wrapCallback: () => Z_,
});
var Y = {};
function zd(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < _l(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function Fn(e) {
  return e.length === 0 ? null : e[0];
}
function Ol(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > _l(a, n))
        l < i && 0 > _l(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > _l(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function _l(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((ib = performance),
    (Y.unstable_now = function () {
      return ib.now();
    }))
  : ((Ad = Date),
    (ob = Ad.now()),
    (Y.unstable_now = function () {
      return Ad.now() - ob;
    }));
var ib,
  Ad,
  ob,
  Qn = [],
  $r = [],
  L_ = 1,
  gn = null,
  Ct = 3,
  Ll = !1,
  Ei = !1,
  Rs = !1,
  lb = typeof setTimeout == "function" ? setTimeout : null,
  cb = typeof clearTimeout == "function" ? clearTimeout : null,
  sb = typeof setImmediate < "u" ? setImmediate : null;
typeof Fe < "u" &&
  Fe.scheduling !== void 0 &&
  Fe.scheduling.isInputPending !== void 0 &&
  Fe.scheduling.isInputPending.bind(Fe.scheduling);
function Bd(e) {
  for (var t = Fn($r); t !== null; ) {
    if (t.callback === null) Ol($r);
    else {
      if (!(t.startTime <= e)) break;
      Ol($r), (t.sortIndex = t.expirationTime), zd(Qn, t);
    }
    t = Fn($r);
  }
}
function $d(e) {
  if (((Rs = !1), Bd(e), !Ei))
    if (Fn(Qn) !== null) (Ei = !0), Hd(Nd);
    else {
      var t = Fn($r);
      t !== null && jd($d, t.startTime - e);
    }
}
function Nd(e, t) {
  (Ei = !1), Rs && ((Rs = !1), cb(Ps), (Ps = -1)), (Ll = !0);
  var n = Ct;
  try {
    for (
      Bd(t), gn = Fn(Qn);
      gn !== null && (!(gn.expirationTime > t) || (e && !db()));

    ) {
      var r = gn.callback;
      if (typeof r == "function") {
        (gn.callback = null), (Ct = gn.priorityLevel);
        var i = r(gn.expirationTime <= t);
        (t = Y.unstable_now()),
          typeof i == "function" ? (gn.callback = i) : gn === Fn(Qn) && Ol(Qn),
          Bd(t);
      } else Ol(Qn);
      gn = Fn(Qn);
    }
    if (gn !== null) var o = !0;
    else {
      var s = Fn($r);
      s !== null && jd($d, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (gn = null), (Ct = n), (Ll = !1);
  }
}
var Ml = !1,
  Il = null,
  Ps = -1,
  ub = 5,
  fb = -1;
function db() {
  return !(Y.unstable_now() - fb < ub);
}
function Dd() {
  if (Il !== null) {
    var e = Y.unstable_now();
    fb = e;
    var t = !0;
    try {
      t = Il(!0, e);
    } finally {
      t ? Es() : ((Ml = !1), (Il = null));
    }
  } else Ml = !1;
}
var Es;
typeof sb == "function"
  ? (Es = function () {
      sb(Dd);
    })
  : typeof MessageChannel < "u"
  ? ((Vd = new MessageChannel()),
    (ab = Vd.port2),
    (Vd.port1.onmessage = Dd),
    (Es = function () {
      ab.postMessage(null);
    }))
  : (Es = function () {
      lb(Dd, 0);
    });
var Vd, ab;
function Hd(e) {
  (Il = e), Ml || ((Ml = !0), Es());
}
function jd(e, t) {
  Ps = lb(function () {
    e(Y.unstable_now());
  }, t);
}
Y.unstable_IdlePriority = 5;
Y.unstable_ImmediatePriority = 1;
Y.unstable_LowPriority = 4;
Y.unstable_NormalPriority = 3;
Y.unstable_Profiling = null;
Y.unstable_UserBlockingPriority = 2;
Y.unstable_cancelCallback = function (e) {
  e.callback = null;
};
Y.unstable_continueExecution = function () {
  Ei || Ll || ((Ei = !0), Hd(Nd));
};
Y.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (ub = 0 < e ? Math.floor(1e3 / e) : 5);
};
Y.unstable_getCurrentPriorityLevel = function () {
  return Ct;
};
Y.unstable_getFirstCallbackNode = function () {
  return Fn(Qn);
};
Y.unstable_next = function (e) {
  switch (Ct) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = Ct;
  }
  var n = Ct;
  Ct = t;
  try {
    return e();
  } finally {
    Ct = n;
  }
};
Y.unstable_pauseExecution = function () {};
Y.unstable_requestPaint = function () {};
Y.unstable_runWithPriority = function (e, t) {
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
  var n = Ct;
  Ct = e;
  try {
    return t();
  } finally {
    Ct = n;
  }
};
Y.unstable_scheduleCallback = function (e, t, n) {
  var r = Y.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: L_++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        zd($r, e),
        Fn(Qn) === null &&
          e === Fn($r) &&
          (Rs ? (cb(Ps), (Ps = -1)) : (Rs = !0), jd($d, n - r)))
      : ((e.sortIndex = i), zd(Qn, e), Ei || Ll || ((Ei = !0), Hd(Nd))),
    e
  );
};
Y.unstable_shouldYield = db;
Y.unstable_wrapCallback = function (e) {
  var t = Ct;
  return function () {
    var n = Ct;
    Ct = t;
    try {
      return e.apply(this, arguments);
    } finally {
      Ct = n;
    }
  };
};
var M_ = Y.unstable_now,
  A_ = Y.unstable_IdlePriority,
  D_ = Y.unstable_ImmediatePriority,
  V_ = Y.unstable_LowPriority,
  z_ = Y.unstable_NormalPriority,
  B_ = Y.unstable_Profiling,
  $_ = Y.unstable_UserBlockingPriority,
  N_ = Y.unstable_cancelCallback,
  H_ = Y.unstable_continueExecution,
  j_ = Y.unstable_forceFrameRate,
  W_ = Y.unstable_getCurrentPriorityLevel,
  U_ = Y.unstable_getFirstCallbackNode,
  G_ = Y.unstable_next,
  q_ = Y.unstable_pauseExecution,
  X_ = Y.unstable_requestPaint,
  Y_ = Y.unstable_runWithPriority,
  K_ = Y.unstable_scheduleCallback,
  Q_ = Y.unstable_shouldYield,
  Z_ = Y.unstable_wrapCallback;
var J_ = "default" in St ? x : St,
  eI = "default" in Al ? Y : Al,
  rn = {},
  bx = J_,
  nn = eI;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var xx = new Set(),
  Ks = {};
function Bi(e, t) {
  Ao(e, t), Ao(e + "Capture", t);
}
function Ao(e, t) {
  for (Ks[e] = t, e = 0; e < t.length; e++) xx.add(t[e]);
}
var Sr = !(
    typeof _ > "u" ||
    typeof _.document > "u" ||
    typeof _.document.createElement > "u"
  ),
  dh = Object.prototype.hasOwnProperty,
  tI =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hb = {},
  pb = {};
function nI(e) {
  return dh.call(pb, e)
    ? !0
    : dh.call(hb, e)
    ? !1
    : tI.test(e)
    ? (pb[e] = !0)
    : ((hb[e] = !0), !1);
}
function rI(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function iI(e, t, n, r) {
  if (t === null || typeof t > "u" || rI(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Mt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var vt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    vt[e] = new Mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  vt[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  vt[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  vt[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    vt[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  vt[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  vt[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  vt[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  vt[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rp = /[\-:]([a-z])/g;
function ip(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rp, ip);
    vt[t] = new Mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rp, ip);
    vt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(rp, ip);
  vt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  vt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new Mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  vt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function op(e, t, n, r) {
  var i = vt.hasOwnProperty(t) ? vt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (iI(t, n, i, r) && (n = null),
    r || i === null
      ? nI(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dl = Symbol.for("react.element"),
  vo = Symbol.for("react.portal"),
  yo = Symbol.for("react.fragment"),
  sp = Symbol.for("react.strict_mode"),
  hh = Symbol.for("react.profiler"),
  wx = Symbol.for("react.provider"),
  Sx = Symbol.for("react.context"),
  ap = Symbol.for("react.forward_ref"),
  ph = Symbol.for("react.suspense"),
  mh = Symbol.for("react.suspense_list"),
  lp = Symbol.for("react.memo"),
  Hr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var kx = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var mb = Symbol.iterator;
function Fs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mb && e[mb]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wd,
  Be = Object.assign;
function Vs(e) {
  if (Wd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wd = (t && t[1]) || "";
    }
  return (
    `
` +
    Wd +
    e
  );
}
var Ud = !1;
function Gd(e, t) {
  if (!e || Ud) return "";
  Ud = !0;
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
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ud = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vs(e) : "";
}
function oI(e) {
  switch (e.tag) {
    case 5:
      return Vs(e.type);
    case 16:
      return Vs("Lazy");
    case 13:
      return Vs("Suspense");
    case 19:
      return Vs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gd(e.type, !1)), e;
    case 11:
      return (e = Gd(e.type.render, !1)), e;
    case 1:
      return (e = Gd(e.type, !0)), e;
    default:
      return "";
  }
}
function gh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yo:
      return "Fragment";
    case vo:
      return "Portal";
    case hh:
      return "Profiler";
    case sp:
      return "StrictMode";
    case ph:
      return "Suspense";
    case mh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sx:
        return (e.displayName || "Context") + ".Consumer";
      case wx:
        return (e._context.displayName || "Context") + ".Provider";
      case ap:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lp:
        return (
          (t = e.displayName || null), t !== null ? t : gh(e.type) || "Memo"
        );
      case Hr:
        (t = e._payload), (e = e._init);
        try {
          return gh(e(t));
        } catch {}
    }
  return null;
}
function sI(e) {
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
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
      return gh(t);
    case 8:
      return t === sp ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ni(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Cx(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function aI(e) {
  var t = Cx(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vl(e) {
  e._valueTracker || (e._valueTracker = aI(e));
}
function Tx(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Cx(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function fc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vh(e, t) {
  var n = t.checked;
  return Be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gb(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ni(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ex(e, t) {
  (t = t.checked), t != null && op(e, "checked", t, !1);
}
function yh(e, t) {
  Ex(e, t);
  var n = ni(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bh(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bh(e, t.type, ni(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vb(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bh(e, t, n) {
  (t === "number" && fc(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zs = Array.isArray;
function Fo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ni(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function xh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yb(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (zs(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ni(n) };
}
function Rx(e, t) {
  var n = ni(t.value),
    r = ni(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bb(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Px(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Px(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var zl,
  Fx = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        zl = zl || document.createElement("div"),
          zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ns = {
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
  lI = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ns).forEach(function (e) {
  lI.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ns[t] = Ns[e]);
  });
});
function _x(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ns.hasOwnProperty(e) && Ns[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ix(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _x(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var cI = Be(
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
function Sh(e, t) {
  if (t) {
    if (cI[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function kh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ch = null;
function cp(e) {
  return (
    (e = e.target || e.srcElement || _),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Th = null,
  _o = null,
  Io = null;
function xb(e) {
  if ((e = ma(e))) {
    if (typeof Th != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Bc(t)), Th(e.stateNode, e.type, t));
  }
}
function Ox(e) {
  _o ? (Io ? Io.push(e) : (Io = [e])) : (_o = e);
}
function Lx() {
  if (_o) {
    var e = _o,
      t = Io;
    if (((Io = _o = null), xb(e), t)) for (e = 0; e < t.length; e++) xb(t[e]);
  }
}
function Mx(e, t) {
  return e(t);
}
function Ax() {}
var qd = !1;
function Dx(e, t, n) {
  if (qd) return e(t, n);
  qd = !0;
  try {
    return Mx(e, t, n);
  } finally {
    (qd = !1), (_o !== null || Io !== null) && (Ax(), Lx());
  }
}
function Zs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bc(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Eh = !1;
if (Sr)
  try {
    (mo = {}),
      Object.defineProperty(mo, "passive", {
        get: function () {
          Eh = !0;
        },
      }),
      _.addEventListener("test", mo, mo),
      _.removeEventListener("test", mo, mo);
  } catch {
    Eh = !1;
  }
var mo;
function uI(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Hs = !1,
  dc = null,
  hc = !1,
  Rh = null,
  fI = {
    onError: function (e) {
      (Hs = !0), (dc = e);
    },
  };
function dI(e, t, n, r, i, o, s, a, l) {
  (Hs = !1), (dc = null), uI.apply(fI, arguments);
}
function hI(e, t, n, r, i, o, s, a, l) {
  if ((dI.apply(this, arguments), Hs)) {
    if (!Hs) throw Error(O(198));
    var c = dc;
    (Hs = !1), (dc = null), hc || ((hc = !0), (Rh = c));
  }
}
function $i(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wb(e) {
  if ($i(e) !== e) throw Error(O(188));
}
function pI(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $i(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wb(i), e;
        if (o === r) return wb(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function zx(e) {
  return (e = pI(e)), e !== null ? Bx(e) : null;
}
function Bx(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bx(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $x = nn.unstable_scheduleCallback,
  Sb = nn.unstable_cancelCallback,
  mI = nn.unstable_shouldYield,
  gI = nn.unstable_requestPaint,
  Ye = nn.unstable_now,
  vI = nn.unstable_getCurrentPriorityLevel,
  up = nn.unstable_ImmediatePriority,
  Nx = nn.unstable_UserBlockingPriority,
  pc = nn.unstable_NormalPriority,
  yI = nn.unstable_LowPriority,
  Hx = nn.unstable_IdlePriority,
  Ac = null,
  tr = null;
function bI(e) {
  if (tr && typeof tr.onCommitFiberRoot == "function")
    try {
      tr.onCommitFiberRoot(Ac, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Mn = Math.clz32 ? Math.clz32 : SI,
  xI = Math.log,
  wI = Math.LN2;
function SI(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((xI(e) / wI) | 0)) | 0;
}
var Bl = 64,
  $l = 4194304;
function Bs(e) {
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
function mc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Bs(a)) : ((o &= s), o !== 0 && (r = Bs(o)));
  } else (s = n & ~i), s !== 0 ? (r = Bs(s)) : o !== 0 && (r = Bs(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function kI(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function CI(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Mn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = kI(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ph(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function jx() {
  var e = Bl;
  return (Bl <<= 1), !(4194240 & Bl) && (Bl = 64), e;
}
function Xd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ha(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mn(t)),
    (e[t] = n);
}
function TI(e, t) {
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
    var i = 31 - Mn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function fp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Ce = 0;
function Wx(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var Ux,
  dp,
  Gx,
  qx,
  Xx,
  Fh = !1,
  Nl = [],
  Xr = null,
  Yr = null,
  Kr = null,
  Js = new Map(),
  ea = new Map(),
  Wr = [],
  EI =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kb(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xr = null;
      break;
    case "dragenter":
    case "dragleave":
      Yr = null;
      break;
    case "mouseover":
    case "mouseout":
      Kr = null;
      break;
    case "pointerover":
    case "pointerout":
      Js.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ea.delete(t.pointerId);
  }
}
function _s(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ma(t)), t !== null && dp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function RI(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Xr = _s(Xr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Yr = _s(Yr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Kr = _s(Kr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Js.set(o, _s(Js.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ea.set(o, _s(ea.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Yx(e) {
  var t = Fi(e.target);
  if (t !== null) {
    var n = $i(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vx(n)), t !== null)) {
          (e.blockedOn = t),
            Xx(e.priority, function () {
              Gx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function tc(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _h(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = ma(n)), t !== null && dp(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (Ch = r), n.target.dispatchEvent(r), (Ch = null), t.shift();
  }
  return !0;
}
function Cb(e, t, n) {
  tc(e) && n.delete(t);
}
function PI() {
  (Fh = !1),
    Xr !== null && tc(Xr) && (Xr = null),
    Yr !== null && tc(Yr) && (Yr = null),
    Kr !== null && tc(Kr) && (Kr = null),
    Js.forEach(Cb),
    ea.forEach(Cb);
}
function Is(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fh ||
      ((Fh = !0),
      nn.unstable_scheduleCallback(nn.unstable_NormalPriority, PI)));
}
function ta(e) {
  function t(i) {
    return Is(i, e);
  }
  if (0 < Nl.length) {
    Is(Nl[0], e);
    for (var n = 1; n < Nl.length; n++) {
      var r = Nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xr !== null && Is(Xr, e),
      Yr !== null && Is(Yr, e),
      Kr !== null && Is(Kr, e),
      Js.forEach(t),
      ea.forEach(t),
      n = 0;
    n < Wr.length;
    n++
  )
    (r = Wr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wr.length && ((n = Wr[0]), n.blockedOn === null); )
    Yx(n), n.blockedOn === null && Wr.shift();
}
var Oo = Er.ReactCurrentBatchConfig,
  gc = !0;
function FI(e, t, n, r) {
  var i = Ce,
    o = Oo.transition;
  Oo.transition = null;
  try {
    (Ce = 1), hp(e, t, n, r);
  } finally {
    (Ce = i), (Oo.transition = o);
  }
}
function _I(e, t, n, r) {
  var i = Ce,
    o = Oo.transition;
  Oo.transition = null;
  try {
    (Ce = 4), hp(e, t, n, r);
  } finally {
    (Ce = i), (Oo.transition = o);
  }
}
function hp(e, t, n, r) {
  if (gc) {
    var i = _h(e, t, n, r);
    if (i === null) th(e, t, r, vc, n), kb(e, r);
    else if (RI(i, e, t, n, r)) r.stopPropagation();
    else if ((kb(e, r), 4 & t && -1 < EI.indexOf(e))) {
      for (; i !== null; ) {
        var o = ma(i);
        if (
          (o !== null && Ux(o),
          (o = _h(e, t, n, r)),
          o === null && th(e, t, r, vc, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else th(e, t, r, null, n);
  }
}
var vc = null;
function _h(e, t, n, r) {
  if (((vc = null), (e = cp(r)), (e = Fi(e)), e !== null))
    if (((t = $i(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vx(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vc = e), null;
}
function Kx(e) {
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
      switch (vI()) {
        case up:
          return 1;
        case Nx:
          return 4;
        case pc:
        case yI:
          return 16;
        case Hx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gr = null,
  pp = null,
  nc = null;
function Qx() {
  if (nc) return nc;
  var e,
    t,
    n = pp,
    r = n.length,
    i = "value" in Gr ? Gr.value : Gr.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (nc = i.slice(e, 1 < t ? 1 - t : void 0));
}
function rc(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hl() {
  return !0;
}
function Tb() {
  return !1;
}
function on(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Hl
        : Tb),
      (this.isPropagationStopped = Tb),
      this
    );
  }
  return (
    Be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Hl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hl));
      },
      persist: function () {},
      isPersistent: Hl,
    }),
    t
  );
}
var Yd,
  Kd,
  Os,
  Ho = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mp = on(Ho),
  pa = Be({}, Ho, { view: 0, detail: 0 }),
  II = on(pa),
  Dc = Be({}, pa, {
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
    getModifierState: gp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Os &&
            (Os && e.type === "mousemove"
              ? ((Yd = e.screenX - Os.screenX), (Kd = e.screenY - Os.screenY))
              : (Kd = Yd = 0),
            (Os = e)),
          Yd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Kd;
    },
  }),
  Eb = on(Dc),
  OI = Be({}, Dc, { dataTransfer: 0 }),
  LI = on(OI),
  MI = Be({}, pa, { relatedTarget: 0 }),
  Qd = on(MI),
  AI = Be({}, Ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  DI = on(AI),
  VI = Be({}, Ho, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : _.clipboardData;
    },
  }),
  zI = on(VI),
  BI = Be({}, Ho, { data: 0 }),
  Rb = on(BI),
  $I = {
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
  NI = {
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
  HI = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jI(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = HI[e]) && !!t[e];
}
function gp() {
  return jI;
}
var WI = Be({}, pa, {
    key: function (e) {
      if (e.key) {
        var t = $I[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = rc(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? NI[e.keyCode] || "Unidentified"
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
    getModifierState: gp,
    charCode: function (e) {
      return e.type === "keypress" ? rc(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? rc(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  UI = on(WI),
  GI = Be({}, Dc, {
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
  }),
  Pb = on(GI),
  qI = Be({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gp,
  }),
  XI = on(qI),
  YI = Be({}, Ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  KI = on(YI),
  QI = Be({}, Dc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  ZI = on(QI),
  JI = [9, 13, 27, 32],
  vp = Sr && "CompositionEvent" in _,
  js = null;
Sr && "documentMode" in document && (js = document.documentMode);
var eO = Sr && "TextEvent" in _ && !js,
  Zx = Sr && (!vp || (js && 8 < js && 11 >= js)),
  Fb = String.fromCharCode(32),
  _b = !1;
function Jx(e, t) {
  switch (e) {
    case "keyup":
      return JI.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ew(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var bo = !1;
function tO(e, t) {
  switch (e) {
    case "compositionend":
      return ew(t);
    case "keypress":
      return t.which !== 32 ? null : ((_b = !0), Fb);
    case "textInput":
      return (e = t.data), e === Fb && _b ? null : e;
    default:
      return null;
  }
}
function nO(e, t) {
  if (bo)
    return e === "compositionend" || (!vp && Jx(e, t))
      ? ((e = Qx()), (nc = pp = Gr = null), (bo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rO = {
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
function Ib(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rO[e.type] : t === "textarea";
}
function tw(e, t, n, r) {
  Ox(r),
    (t = yc(t, "onChange")),
    0 < t.length &&
      ((n = new mp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ws = null,
  na = null;
function iO(e) {
  dw(e, 0);
}
function Vc(e) {
  var t = So(e);
  if (Tx(t)) return e;
}
function oO(e, t) {
  if (e === "change") return t;
}
var nw = !1;
Sr &&
  (Sr
    ? ((Wl = "oninput" in document),
      Wl ||
        ((Zd = document.createElement("div")),
        Zd.setAttribute("oninput", "return;"),
        (Wl = typeof Zd.oninput == "function")),
      (jl = Wl))
    : (jl = !1),
  (nw = jl && (!document.documentMode || 9 < document.documentMode)));
var jl, Wl, Zd;
function Ob() {
  Ws && (Ws.detachEvent("onpropertychange", rw), (na = Ws = null));
}
function rw(e) {
  if (e.propertyName === "value" && Vc(na)) {
    var t = [];
    tw(t, na, e, cp(e)), Dx(iO, t);
  }
}
function sO(e, t, n) {
  e === "focusin"
    ? (Ob(), (Ws = t), (na = n), Ws.attachEvent("onpropertychange", rw))
    : e === "focusout" && Ob();
}
function aO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vc(na);
}
function lO(e, t) {
  if (e === "click") return Vc(t);
}
function cO(e, t) {
  if (e === "input" || e === "change") return Vc(t);
}
function uO(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dn = typeof Object.is == "function" ? Object.is : uO;
function ra(e, t) {
  if (Dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!dh.call(t, i) || !Dn(e[i], t[i])) return !1;
  }
  return !0;
}
function Lb(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mb(e, t) {
  var n = Lb(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Lb(n);
  }
}
function iw(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? iw(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function ow() {
  for (var e = _, t = fc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = fc(e.document));
  }
  return t;
}
function yp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fO(e) {
  var t = ow(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    iw(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || _),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Mb(n, o));
        var s = Mb(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var dO = Sr && "documentMode" in document && 11 >= document.documentMode,
  xo = null,
  Ih = null,
  Us = null,
  Oh = !1;
function Ab(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oh ||
    xo == null ||
    xo !== fc(r) ||
    ((r = xo),
    "selectionStart" in r && yp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          _
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Us && ra(Us, r)) ||
      ((Us = r),
      (r = yc(Ih, "onSelect")),
      0 < r.length &&
        ((t = new mp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xo))));
}
function Ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var wo = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd"),
  },
  Jd = {},
  sw = {};
Sr &&
  ((sw = document.createElement("div").style),
  "AnimationEvent" in _ ||
    (delete wo.animationend.animation,
    delete wo.animationiteration.animation,
    delete wo.animationstart.animation),
  "TransitionEvent" in _ || delete wo.transitionend.transition);
function zc(e) {
  if (Jd[e]) return Jd[e];
  if (!wo[e]) return e;
  var t,
    n = wo[e];
  for (t in n) if (n.hasOwnProperty(t) && t in sw) return (Jd[e] = n[t]);
  return e;
}
var aw = zc("animationend"),
  lw = zc("animationiteration"),
  cw = zc("animationstart"),
  uw = zc("transitionend"),
  fw = new Map(),
  Db =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ii(e, t) {
  fw.set(e, t), Bi(t, [e]);
}
for (Gl = 0; Gl < Db.length; Gl++)
  (ql = Db[Gl]),
    (Vb = ql.toLowerCase()),
    (zb = ql[0].toUpperCase() + ql.slice(1)),
    ii(Vb, "on" + zb);
var ql, Vb, zb, Gl;
ii(aw, "onAnimationEnd");
ii(lw, "onAnimationIteration");
ii(cw, "onAnimationStart");
ii("dblclick", "onDoubleClick");
ii("focusin", "onFocus");
ii("focusout", "onBlur");
ii(uw, "onTransitionEnd");
Ao("onMouseEnter", ["mouseout", "mouseover"]);
Ao("onMouseLeave", ["mouseout", "mouseover"]);
Ao("onPointerEnter", ["pointerout", "pointerover"]);
Ao("onPointerLeave", ["pointerout", "pointerover"]);
Bi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Bi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Bi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Bi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Bi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $s =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  hO = new Set("cancel close invalid load scroll toggle".split(" ").concat($s));
function Bb(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hI(r, t, void 0, e), (e.currentTarget = null);
}
function dw(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Bb(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Bb(i, a, c), (o = l);
        }
    }
  }
  if (hc) throw ((e = Rh), (hc = !1), (Rh = null), e);
}
function Ie(e, t) {
  var n = t[Vh];
  n === void 0 && (n = t[Vh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hw(t, e, 2, !1), n.add(r));
}
function eh(e, t, n) {
  var r = 0;
  t && (r |= 4), hw(n, e, r, t);
}
var Xl = "_reactListening" + Math.random().toString(36).slice(2);
function ia(e) {
  if (!e[Xl]) {
    (e[Xl] = !0),
      xx.forEach(function (n) {
        n !== "selectionchange" && (hO.has(n) || eh(n, !1, e), eh(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xl] || ((t[Xl] = !0), eh("selectionchange", !1, t));
  }
}
function hw(e, t, n, r) {
  switch (Kx(t)) {
    case 1:
      var i = FI;
      break;
    case 4:
      i = _I;
      break;
    default:
      i = hp;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Eh ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function th(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Fi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Dx(function () {
    var c = o,
      u = cp(n),
      f = [];
    e: {
      var d = fw.get(e);
      if (d !== void 0) {
        var m = mp,
          g = e;
        switch (e) {
          case "keypress":
            if (rc(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = UI;
            break;
          case "focusin":
            (g = "focus"), (m = Qd);
            break;
          case "focusout":
            (g = "blur"), (m = Qd);
            break;
          case "beforeblur":
          case "afterblur":
            m = Qd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Eb;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = LI;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = XI;
            break;
          case aw:
          case lw:
          case cw:
            m = DI;
            break;
          case uw:
            m = KI;
            break;
          case "scroll":
            m = II;
            break;
          case "wheel":
            m = ZI;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = zI;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Pb;
        }
        var v = (4 & t) !== 0,
          b = !v && e === "scroll",
          h = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p, y = c; y !== null; ) {
          p = y;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              h !== null && ((w = Zs(y, h)), w != null && v.push(oa(y, w, p)))),
            b)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((d = new m(d, g, null, n, u)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (m = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === Ch ||
          !(g = n.relatedTarget || n.fromElement) ||
          (!Fi(g) && !g[kr])) &&
          (m || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : _),
          m
            ? ((g = n.relatedTarget || n.toElement),
              (m = c),
              (g = g ? Fi(g) : null),
              g !== null &&
                ((b = $i(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((m = null), (g = c)),
          m !== g))
      ) {
        if (
          ((v = Eb),
          (w = "onMouseLeave"),
          (h = "onMouseEnter"),
          (y = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((v = Pb),
            (w = "onPointerLeave"),
            (h = "onPointerEnter"),
            (y = "pointer")),
          (b = m == null ? d : So(m)),
          (p = g == null ? d : So(g)),
          (d = new v(w, y + "leave", m, n, u)),
          (d.target = b),
          (d.relatedTarget = p),
          (w = null),
          Fi(u) === c &&
            ((v = new v(h, y + "enter", g, n, u)),
            (v.target = p),
            (v.relatedTarget = b),
            (w = v)),
          (b = w),
          m && g)
        )
          e: {
            for (v = m, h = g, y = 0, p = v; p; p = go(p)) y++;
            for (p = 0, w = h; w; w = go(w)) p++;
            for (; 0 < y - p; ) (v = go(v)), y--;
            for (; 0 < p - y; ) (h = go(h)), p--;
            for (; y--; ) {
              if (v === h || (h !== null && v === h.alternate)) break e;
              (v = go(v)), (h = go(h));
            }
            v = null;
          }
        else v = null;
        m !== null && $b(f, d, m, v, !1),
          g !== null && b !== null && $b(f, b, g, v, !0);
      }
      if (
        ((d = c ? So(c) : _),
        (m = d.nodeName && d.nodeName.toLowerCase()),
        m === "select" || (m === "input" && d.type === "file"))
      )
        var T = oO;
      else if (Ib(d))
        if (nw) T = cO;
        else {
          T = aO;
          var S = sO;
        }
      else
        (m = d.nodeName) &&
          m.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (T = lO);
      switch (
        (T && (T = T(e, c))
          ? tw(f, T, n, u)
          : (S && S(e, d, c),
            e === "focusout" &&
              (S = d._wrapperState) &&
              S.controlled &&
              d.type === "number" &&
              bh(d, "number", d.value)),
        (S = c ? So(c) : _),
        e)
      ) {
        case "focusin":
          (Ib(S) || S.contentEditable === "true") &&
            ((xo = S), (Ih = c), (Us = null));
          break;
        case "focusout":
          Us = Ih = xo = null;
          break;
        case "mousedown":
          Oh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Oh = !1), Ab(f, n, u);
          break;
        case "selectionchange":
          if (dO) break;
        case "keydown":
        case "keyup":
          Ab(f, n, u);
      }
      var E;
      if (vp)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        bo
          ? Jx(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Zx &&
          n.locale !== "ko" &&
          (bo || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && bo && (E = Qx())
            : ((Gr = u),
              (pp = "value" in Gr ? Gr.value : Gr.textContent),
              (bo = !0))),
        (S = yc(c, R)),
        0 < S.length &&
          ((R = new Rb(R, e, null, n, u)),
          f.push({ event: R, listeners: S }),
          E ? (R.data = E) : ((E = ew(n)), E !== null && (R.data = E)))),
        (E = eO ? tO(e, n) : nO(e, n)) &&
          ((c = yc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Rb("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = E)));
    }
    dw(f, t);
  });
}
function oa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Zs(e, n)),
      o != null && r.unshift(oa(e, o, i)),
      (o = Zs(e, t)),
      o != null && r.push(oa(e, o, i))),
      (e = e.return);
  }
  return r;
}
function go(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $b(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Zs(n, o)), l != null && s.unshift(oa(n, l, a)))
        : i || ((l = Zs(n, o)), l != null && s.push(oa(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var pO = /\r\n?/g,
  mO = /\u0000|\uFFFD/g;
function Nb(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      pO,
      `
`
    )
    .replace(mO, "");
}
function Yl(e, t, n) {
  if (((t = Nb(t)), Nb(e) !== t && n)) throw Error(O(425));
}
function bc() {}
var Lh = null,
  Mh = null;
function Ah(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Dh = typeof setTimeout == "function" ? setTimeout : void 0,
  gO = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hb = typeof Promise == "function" ? Promise : void 0,
  vO =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hb < "u"
      ? function (e) {
          return Hb.resolve(null).then(e).catch(yO);
        }
      : Dh;
function yO(e) {
  setTimeout(function () {
    throw e;
  });
}
function nh(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ta(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ta(t);
}
function Qr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function jb(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jo = Math.random().toString(36).slice(2),
  er = "__reactFiber$" + jo,
  sa = "__reactProps$" + jo,
  kr = "__reactContainer$" + jo,
  Vh = "__reactEvents$" + jo,
  bO = "__reactListeners$" + jo,
  xO = "__reactHandles$" + jo;
function Fi(e) {
  var t = e[er];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kr] || n[er])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = jb(e); e !== null; ) {
          if ((n = e[er])) return n;
          e = jb(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ma(e) {
  return (
    (e = e[er] || e[kr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function So(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Bc(e) {
  return e[sa] || null;
}
var zh = [],
  ko = -1;
function oi(e) {
  return { current: e };
}
function Oe(e) {
  0 > ko || ((e.current = zh[ko]), (zh[ko] = null), ko--);
}
function Re(e, t) {
  ko++, (zh[ko] = e.current), (e.current = t);
}
var ri = {},
  Pt = oi(ri),
  jt = oi(!1),
  Mi = ri;
function Do(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ri;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Wt(e) {
  return (e = e.childContextTypes), e != null;
}
function xc() {
  Oe(jt), Oe(Pt);
}
function Wb(e, t, n) {
  if (Pt.current !== ri) throw Error(O(168));
  Re(Pt, t), Re(jt, n);
}
function pw(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, sI(e) || "Unknown", i));
  return Be({}, n, r);
}
function wc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ri),
    (Mi = Pt.current),
    Re(Pt, e),
    Re(jt, jt.current),
    !0
  );
}
function Ub(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = pw(e, t, Mi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Oe(jt),
      Oe(Pt),
      Re(Pt, e))
    : Oe(jt),
    Re(jt, n);
}
var yr = null,
  $c = !1,
  rh = !1;
function mw(e) {
  yr === null ? (yr = [e]) : yr.push(e);
}
function wO(e) {
  ($c = !0), mw(e);
}
function si() {
  if (!rh && yr !== null) {
    rh = !0;
    var e = 0,
      t = Ce;
    try {
      var n = yr;
      for (Ce = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yr = null), ($c = !1);
    } catch (i) {
      throw (yr !== null && (yr = yr.slice(e + 1)), $x(up, si), i);
    } finally {
      (Ce = t), (rh = !1);
    }
  }
  return null;
}
var Co = [],
  To = 0,
  Sc = null,
  kc = 0,
  vn = [],
  yn = 0,
  Ai = null,
  br = 1,
  xr = "";
function Ri(e, t) {
  (Co[To++] = kc), (Co[To++] = Sc), (Sc = e), (kc = t);
}
function gw(e, t, n) {
  (vn[yn++] = br), (vn[yn++] = xr), (vn[yn++] = Ai), (Ai = e);
  var r = br;
  e = xr;
  var i = 32 - Mn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Mn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (br = (1 << (32 - Mn(t) + i)) | (n << i) | r),
      (xr = o + e);
  } else (br = (1 << o) | (n << i) | r), (xr = e);
}
function bp(e) {
  e.return !== null && (Ri(e, 1), gw(e, 1, 0));
}
function xp(e) {
  for (; e === Sc; )
    (Sc = Co[--To]), (Co[To] = null), (kc = Co[--To]), (Co[To] = null);
  for (; e === Ai; )
    (Ai = vn[--yn]),
      (vn[yn] = null),
      (xr = vn[--yn]),
      (vn[yn] = null),
      (br = vn[--yn]),
      (vn[yn] = null);
}
var tn = null,
  en = null,
  Le = !1,
  Ln = null;
function vw(e, t) {
  var n = bn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gb(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (tn = e), (en = Qr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (tn = e), (en = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = Ai !== null ? { id: br, overflow: xr } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = bn(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (tn = e),
          (en = null),
          !0)
      );
    default:
      return !1;
  }
}
function Bh(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function $h(e) {
  if (Le) {
    var t = en;
    if (t) {
      var n = t;
      if (!Gb(e, t)) {
        if (Bh(e)) throw Error(O(418));
        t = Qr(n.nextSibling);
        var r = tn;
        t && Gb(e, t)
          ? vw(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Le = !1), (tn = e));
      }
    } else {
      if (Bh(e)) throw Error(O(418));
      (e.flags = (-4097 & e.flags) | 2), (Le = !1), (tn = e);
    }
  }
}
function qb(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tn = e;
}
function Kl(e) {
  if (e !== tn) return !1;
  if (!Le) return qb(e), (Le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ah(e.type, e.memoizedProps))),
    t && (t = en))
  ) {
    if (Bh(e)) throw (yw(), Error(O(418)));
    for (; t; ) vw(e, t), (t = Qr(t.nextSibling));
  }
  if ((qb(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              en = Qr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      en = null;
    }
  } else en = tn ? Qr(e.stateNode.nextSibling) : null;
  return !0;
}
function yw() {
  for (var e = en; e; ) e = Qr(e.nextSibling);
}
function Vo() {
  (en = tn = null), (Le = !1);
}
function wp(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
var SO = Er.ReactCurrentBatchConfig;
function In(e, t) {
  if (e && e.defaultProps) {
    (t = Be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Cc = oi(null),
  Tc = null,
  Eo = null,
  Sp = null;
function kp() {
  Sp = Eo = Tc = null;
}
function Cp(e) {
  var t = Cc.current;
  Oe(Cc), (e._currentValue = t);
}
function Nh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Lo(e, t) {
  (Tc = e),
    (Sp = Eo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ht = !0), (e.firstContext = null));
}
function wn(e) {
  var t = e._currentValue;
  if (Sp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Eo === null)) {
      if (Tc === null) throw Error(O(308));
      (Eo = e), (Tc.dependencies = { lanes: 0, firstContext: e });
    } else Eo = Eo.next = e;
  return t;
}
var _i = null;
function Tp(e) {
  _i === null ? (_i = [e]) : _i.push(e);
}
function bw(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Tp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Cr(e, r)
  );
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jr = !1;
function Ep(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xw(e, t) {
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
function wr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & ge)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Cr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Tp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Cr(e, n)
  );
}
function ic(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fp(e, n);
  }
}
function Xb(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function Ec(e, t, n, r) {
  var i = e.updateQueue;
  jr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            v = a;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                f = g.call(m, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (-65537 & g.flags) | 128;
            case 0:
              if (
                ((g = v.payload),
                (d = typeof g == "function" ? g.call(m, f, d) : g),
                d == null)
              )
                break e;
              f = Be({}, f, d);
              break e;
            case 2:
              jr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = m), (l = f)) : (u = u.next = m),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Vi |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Yb(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var ww = new bx.Component().refs;
function Hh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && $i(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Lt(),
      i = ei(e),
      o = wr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Zr(e, o, i)),
      t !== null && (An(t, e, i, r), ic(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Lt(),
      i = ei(e),
      o = wr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zr(e, o, i)),
      t !== null && (An(t, e, i, r), ic(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Lt(),
      r = ei(e),
      i = wr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Zr(e, i, r)),
      t !== null && (An(t, e, r, n), ic(t, e, r));
  },
};
function Kb(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !ra(n, r) ||
        !ra(i, o)
  );
}
function Sw(e, t, n) {
  var r = !1,
    i = ri,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = wn(o))
      : ((i = Wt(t) ? Mi : Pt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Do(e, i) : ri)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Qb(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nc.enqueueReplaceState(t, t.state, null);
}
function jh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = ww), Ep(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = wn(o))
    : ((o = Wt(t) ? Mi : Pt.current), (i.context = Do(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Hh(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Nc.enqueueReplaceState(i, i.state, null),
      Ec(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ls(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === ww && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Ql(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zb(e) {
  var t = e._init;
  return t(e._payload);
}
function kw(e) {
  function t(h, p) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [p]), (h.flags |= 16)) : y.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = ti(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((h.flags |= 2), p) : y)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, y, w) {
    return p === null || p.tag !== 6
      ? ((p = uh(y, h.mode, w)), (p.return = h), p)
      : ((p = i(p, y)), (p.return = h), p);
  }
  function l(h, p, y, w) {
    var T = y.type;
    return T === yo
      ? u(h, p, y.props.children, w, y.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Hr &&
            Zb(T) === p.type))
      ? ((w = i(p, y.props)), (w.ref = Ls(h, p, y)), (w.return = h), w)
      : ((w = uc(y.type, y.key, y.props, null, h.mode, w)),
        (w.ref = Ls(h, p, y)),
        (w.return = h),
        w);
  }
  function c(h, p, y, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = fh(y, h.mode, w)), (p.return = h), p)
      : ((p = i(p, y.children || [])), (p.return = h), p);
  }
  function u(h, p, y, w, T) {
    return p === null || p.tag !== 7
      ? ((p = Li(y, h.mode, w, T)), (p.return = h), p)
      : ((p = i(p, y)), (p.return = h), p);
  }
  function f(h, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = uh("" + p, h.mode, y)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dl:
          return (
            (y = uc(p.type, p.key, p.props, null, h.mode, y)),
            (y.ref = Ls(h, null, p)),
            (y.return = h),
            y
          );
        case vo:
          return (p = fh(p, h.mode, y)), (p.return = h), p;
        case Hr:
          var w = p._init;
          return f(h, w(p._payload), y);
      }
      if (zs(p) || Fs(p))
        return (p = Li(p, h.mode, y, null)), (p.return = h), p;
      Ql(h, p);
    }
    return null;
  }
  function d(h, p, y, w) {
    var T = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return T !== null ? null : a(h, p, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Dl:
          return y.key === T ? l(h, p, y, w) : null;
        case vo:
          return y.key === T ? c(h, p, y, w) : null;
        case Hr:
          return (T = y._init), d(h, p, T(y._payload), w);
      }
      if (zs(y) || Fs(y)) return T !== null ? null : u(h, p, y, w, null);
      Ql(h, y);
    }
    return null;
  }
  function m(h, p, y, w, T) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(y) || null), a(p, h, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Dl:
          return (h = h.get(w.key === null ? y : w.key) || null), l(p, h, w, T);
        case vo:
          return (h = h.get(w.key === null ? y : w.key) || null), c(p, h, w, T);
        case Hr:
          var S = w._init;
          return m(h, p, y, S(w._payload), T);
      }
      if (zs(w) || Fs(w)) return (h = h.get(y) || null), u(p, h, w, T, null);
      Ql(p, w);
    }
    return null;
  }
  function g(h, p, y, w) {
    for (
      var T = null, S = null, E = p, R = (p = 0), M = null;
      E !== null && R < y.length;
      R++
    ) {
      E.index > R ? ((M = E), (E = null)) : (M = E.sibling);
      var I = d(h, E, y[R], w);
      if (I === null) {
        E === null && (E = M);
        break;
      }
      e && E && I.alternate === null && t(h, E),
        (p = o(I, p, R)),
        S === null ? (T = I) : (S.sibling = I),
        (S = I),
        (E = M);
    }
    if (R === y.length) return n(h, E), Le && Ri(h, R), T;
    if (E === null) {
      for (; R < y.length; R++)
        (E = f(h, y[R], w)),
          E !== null &&
            ((p = o(E, p, R)), S === null ? (T = E) : (S.sibling = E), (S = E));
      return Le && Ri(h, R), T;
    }
    for (E = r(h, E); R < y.length; R++)
      (M = m(E, h, R, y[R], w)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? R : M.key),
          (p = o(M, p, R)),
          S === null ? (T = M) : (S.sibling = M),
          (S = M));
    return (
      e &&
        E.forEach(function (G) {
          return t(h, G);
        }),
      Le && Ri(h, R),
      T
    );
  }
  function v(h, p, y, w) {
    var T = Fs(y);
    if (typeof T != "function") throw Error(O(150));
    if (((y = T.call(y)), y == null)) throw Error(O(151));
    for (
      var S = (T = null), E = p, R = (p = 0), M = null, I = y.next();
      E !== null && !I.done;
      R++, I = y.next()
    ) {
      E.index > R ? ((M = E), (E = null)) : (M = E.sibling);
      var G = d(h, E, I.value, w);
      if (G === null) {
        E === null && (E = M);
        break;
      }
      e && E && G.alternate === null && t(h, E),
        (p = o(G, p, R)),
        S === null ? (T = G) : (S.sibling = G),
        (S = G),
        (E = M);
    }
    if (I.done) return n(h, E), Le && Ri(h, R), T;
    if (E === null) {
      for (; !I.done; R++, I = y.next())
        (I = f(h, I.value, w)),
          I !== null &&
            ((p = o(I, p, R)), S === null ? (T = I) : (S.sibling = I), (S = I));
      return Le && Ri(h, R), T;
    }
    for (E = r(h, E); !I.done; R++, I = y.next())
      (I = m(E, h, R, I.value, w)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? R : I.key),
          (p = o(I, p, R)),
          S === null ? (T = I) : (S.sibling = I),
          (S = I));
    return (
      e &&
        E.forEach(function (z) {
          return t(h, z);
        }),
      Le && Ri(h, R),
      T
    );
  }
  function b(h, p, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === yo &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Dl:
          e: {
            for (var T = y.key, S = p; S !== null; ) {
              if (S.key === T) {
                if (((T = y.type), T === yo)) {
                  if (S.tag === 7) {
                    n(h, S.sibling),
                      (p = i(S, y.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  S.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Hr &&
                    Zb(T) === S.type)
                ) {
                  n(h, S.sibling),
                    (p = i(S, y.props)),
                    (p.ref = Ls(h, S, y)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, S);
                break;
              }
              t(h, S), (S = S.sibling);
            }
            y.type === yo
              ? ((p = Li(y.props.children, h.mode, w, y.key)),
                (p.return = h),
                (h = p))
              : ((w = uc(y.type, y.key, y.props, null, h.mode, w)),
                (w.ref = Ls(h, p, y)),
                (w.return = h),
                (h = w));
          }
          return s(h);
        case vo:
          e: {
            for (S = y.key; p !== null; ) {
              if (p.key === S) {
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, y.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, p);
                break;
              }
              t(h, p), (p = p.sibling);
            }
            (p = fh(y, h.mode, w)), (p.return = h), (h = p);
          }
          return s(h);
        case Hr:
          return (S = y._init), b(h, p, S(y._payload), w);
      }
      if (zs(y)) return g(h, p, y, w);
      if (Fs(y)) return v(h, p, y, w);
      Ql(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, y)), (p.return = h), (h = p))
          : (n(h, p), (p = uh(y, h.mode, w)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return b;
}
var zo = kw(!0),
  Cw = kw(!1),
  ga = {},
  nr = oi(ga),
  aa = oi(ga),
  la = oi(ga);
function Ii(e) {
  if (e === ga) throw Error(O(174));
  return e;
}
function Rp(e, t) {
  switch ((Re(la, t), Re(aa, e), Re(nr, ga), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wh(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wh(t, e));
  }
  Oe(nr), Re(nr, t);
}
function Bo() {
  Oe(nr), Oe(aa), Oe(la);
}
function Tw(e) {
  Ii(la.current);
  var t = Ii(nr.current),
    n = wh(t, e.type);
  t !== n && (Re(aa, e), Re(nr, n));
}
function Pp(e) {
  aa.current === e && (Oe(nr), Oe(aa));
}
var Ve = oi(0);
function Rc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ih = [];
function Fp() {
  for (var e = 0; e < ih.length; e++)
    ih[e]._workInProgressVersionPrimary = null;
  ih.length = 0;
}
var oc = Er.ReactCurrentDispatcher,
  oh = Er.ReactCurrentBatchConfig,
  Di = 0,
  ze = null,
  tt = null,
  at = null,
  Pc = !1,
  Gs = !1,
  ca = 0,
  kO = 0;
function Tt() {
  throw Error(O(321));
}
function _p(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dn(e[n], t[n])) return !1;
  return !0;
}
function Ip(e, t, n, r, i, o) {
  if (
    ((Di = o),
    (ze = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oc.current = e === null || e.memoizedState === null ? RO : PO),
    (e = n(r, i)),
    Gs)
  ) {
    o = 0;
    do {
      if (((Gs = !1), (ca = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (at = tt = null),
        (t.updateQueue = null),
        (oc.current = FO),
        (e = n(r, i));
    } while (Gs);
  }
  if (
    ((oc.current = Fc),
    (t = tt !== null && tt.next !== null),
    (Di = 0),
    (at = tt = ze = null),
    (Pc = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Op() {
  var e = ca !== 0;
  return (ca = 0), e;
}
function Jn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return at === null ? (ze.memoizedState = at = e) : (at = at.next = e), at;
}
function Sn() {
  if (tt === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = tt.next;
  var t = at === null ? ze.memoizedState : at.next;
  if (t !== null) (at = t), (tt = e);
  else {
    if (e === null) throw Error(O(310));
    (tt = e),
      (e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null,
      }),
      at === null ? (ze.memoizedState = at = e) : (at = at.next = e);
  }
  return at;
}
function ua(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sh(e) {
  var t = Sn(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = tt,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((Di & u) === u)
        l !== null &&
          (l = l.next =
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
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (ze.lanes |= u),
          (Vi |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      Dn(r, t.memoizedState) || (Ht = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ze.lanes |= o), (Vi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ah(e) {
  var t = Sn(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Dn(o, t.memoizedState) || (Ht = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ew() {}
function Rw(e, t) {
  var n = ze,
    r = Sn(),
    i = t(),
    o = !Dn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ht = !0)),
    (r = r.queue),
    Lp(_w.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (at !== null && 1 & at.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      fa(9, Fw.bind(null, n, r, i, t), void 0, null),
      lt === null)
    )
      throw Error(O(349));
    30 & Di || Pw(n, t, i);
  }
  return i;
}
function Pw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Fw(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Iw(t) && Ow(e);
}
function _w(e, t, n) {
  return n(function () {
    Iw(t) && Ow(e);
  });
}
function Iw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dn(e, n);
  } catch {
    return !0;
  }
}
function Ow(e) {
  var t = Cr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function Jb(e) {
  var t = Jn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ua,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = EO.bind(null, ze, e)),
    [t.memoizedState, e]
  );
}
function fa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Lw() {
  return Sn().memoizedState;
}
function sc(e, t, n, r) {
  var i = Jn();
  (ze.flags |= e),
    (i.memoizedState = fa(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hc(e, t, n, r) {
  var i = Sn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (tt !== null) {
    var s = tt.memoizedState;
    if (((o = s.destroy), r !== null && _p(r, s.deps))) {
      i.memoizedState = fa(t, n, o, r);
      return;
    }
  }
  (ze.flags |= e), (i.memoizedState = fa(1 | t, n, o, r));
}
function ex(e, t) {
  return sc(8390656, 8, e, t);
}
function Lp(e, t) {
  return Hc(2048, 8, e, t);
}
function Mw(e, t) {
  return Hc(4, 2, e, t);
}
function Aw(e, t) {
  return Hc(4, 4, e, t);
}
function Dw(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Vw(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hc(4, 4, Dw.bind(null, t, e), n)
  );
}
function Mp() {}
function zw(e, t) {
  var n = Sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _p(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Bw(e, t) {
  var n = Sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _p(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $w(e, t, n) {
  return 21 & Di
    ? (Dn(n, t) || ((n = jx()), (ze.lanes |= n), (Vi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ht = !0)), (e.memoizedState = n));
}
function CO(e, t) {
  var n = Ce;
  (Ce = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oh.transition;
  oh.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ce = n), (oh.transition = r);
  }
}
function Nw() {
  return Sn().memoizedState;
}
function TO(e, t, n) {
  var r = ei(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hw(e))
  )
    jw(t, n);
  else if (((n = bw(e, t, n, r)), n !== null)) {
    var i = Lt();
    An(n, e, r, i), Ww(n, t, r);
  }
}
function EO(e, t, n) {
  var r = ei(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hw(e)) jw(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Dn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Tp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = bw(e, t, i, r)),
      n !== null && ((i = Lt()), An(n, e, r, i), Ww(n, t, r));
  }
}
function Hw(e) {
  var t = e.alternate;
  return e === ze || (t !== null && t === ze);
}
function jw(e, t) {
  Gs = Pc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ww(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fp(e, n);
  }
}
var Fc = {
    readContext: wn,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useInsertionEffect: Tt,
    useLayoutEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useMutableSource: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    unstable_isNewReconciler: !1,
  },
  RO = {
    readContext: wn,
    useCallback: function (e, t) {
      return (Jn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wn,
    useEffect: ex,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        sc(4194308, 4, Dw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return sc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return sc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Jn();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = TO.bind(null, ze, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jb,
    useDebugValue: Mp,
    useDeferredValue: function (e) {
      return (Jn().memoizedState = e);
    },
    useTransition: function () {
      var e = Jb(!1),
        t = e[0];
      return (e = CO.bind(null, e[1])), (Jn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ze,
        i = Jn();
      if (Le) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), lt === null)) throw Error(O(349));
        30 & Di || Pw(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ex(_w.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        fa(9, Fw.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jn(),
        t = lt.identifierPrefix;
      if (Le) {
        var n = xr,
          r = br;
        (n = (r & ~(1 << (32 - Mn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ca++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = kO++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  PO = {
    readContext: wn,
    useCallback: zw,
    useContext: wn,
    useEffect: Lp,
    useImperativeHandle: Vw,
    useInsertionEffect: Mw,
    useLayoutEffect: Aw,
    useMemo: Bw,
    useReducer: sh,
    useRef: Lw,
    useState: function () {
      return sh(ua);
    },
    useDebugValue: Mp,
    useDeferredValue: function (e) {
      var t = Sn();
      return $w(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = sh(ua)[0],
        t = Sn().memoizedState;
      return [e, t];
    },
    useMutableSource: Ew,
    useSyncExternalStore: Rw,
    useId: Nw,
    unstable_isNewReconciler: !1,
  },
  FO = {
    readContext: wn,
    useCallback: zw,
    useContext: wn,
    useEffect: Lp,
    useImperativeHandle: Vw,
    useInsertionEffect: Mw,
    useLayoutEffect: Aw,
    useMemo: Bw,
    useReducer: ah,
    useRef: Lw,
    useState: function () {
      return ah(ua);
    },
    useDebugValue: Mp,
    useDeferredValue: function (e) {
      var t = Sn();
      return tt === null ? (t.memoizedState = e) : $w(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = ah(ua)[0],
        t = Sn().memoizedState;
      return [e, t];
    },
    useMutableSource: Ew,
    useSyncExternalStore: Rw,
    useId: Nw,
    unstable_isNewReconciler: !1,
  };
function $o(e, t) {
  try {
    var n = "",
      r = t;
    do (n += oI(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function lh(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _O = typeof WeakMap == "function" ? WeakMap : Map;
function Uw(e, t, n) {
  (n = wr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ic || ((Ic = !0), (Jh = r)), Wh(e, t);
    }),
    n
  );
}
function Gw(e, t, n) {
  (n = wr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wh(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wh(e, t),
          typeof r != "function" &&
            (Jr === null ? (Jr = new Set([this])) : Jr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function tx(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _O();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = WO.bind(null, e, t, n)), t.then(e, e));
}
function nx(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rx(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wr(-1, 1)), (t.tag = 2), Zr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var IO = Er.ReactCurrentOwner,
  Ht = !1;
function Ot(e, t, n, r) {
  t.child = e === null ? Cw(t, null, n, r) : zo(t, e.child, n, r);
}
function ix(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Lo(t, i),
    (r = Ip(e, t, n, r, o, i)),
    (n = Op()),
    e !== null && !Ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tr(e, t, i))
      : (Le && n && bp(t), (t.flags |= 1), Ot(e, t, r, i), t.child)
  );
}
function ox(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Hp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qw(e, t, o, r, i))
      : ((e = uc(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ra), n(s, r) && e.ref === t.ref)
    )
      return Tr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ti(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qw(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ra(o, r) && e.ref === t.ref) {
      if (((Ht = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), Tr(e, t, i);
      131072 & e.flags && (Ht = !0);
    }
  }
  return Uh(e, t, n, r, i);
}
function Xw(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(Po, Jt),
        (Jt |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(Po, Jt),
          (Jt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Re(Po, Jt),
        (Jt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Re(Po, Jt),
      (Jt |= r);
  return Ot(e, t, i, n), t.child;
}
function Yw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uh(e, t, n, r, i) {
  var o = Wt(n) ? Mi : Pt.current;
  return (
    (o = Do(t, o)),
    Lo(t, i),
    (n = Ip(e, t, n, r, o, i)),
    (r = Op()),
    e !== null && !Ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tr(e, t, i))
      : (Le && r && bp(t), (t.flags |= 1), Ot(e, t, n, i), t.child)
  );
}
function sx(e, t, n, r, i) {
  if (Wt(n)) {
    var o = !0;
    wc(t);
  } else o = !1;
  if ((Lo(t, i), t.stateNode === null))
    ac(e, t), Sw(t, n, r), jh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = wn(c))
      : ((c = Wt(n) ? Mi : Pt.current), (c = Do(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Qb(t, s, r, c)),
      (jr = !1);
    var d = t.memoizedState;
    (s.state = d),
      Ec(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || jt.current || jr
        ? (typeof u == "function" && (Hh(t, n, u, r), (l = t.memoizedState)),
          (a = jr || Kb(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      xw(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : In(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = wn(l))
        : ((l = Wt(n) ? Mi : Pt.current), (l = Do(t, l)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Qb(t, s, r, l)),
      (jr = !1),
      (d = t.memoizedState),
      (s.state = d),
      Ec(t, r, s, i);
    var g = t.memoizedState;
    a !== f || d !== g || jt.current || jr
      ? (typeof m == "function" && (Hh(t, n, m, r), (g = t.memoizedState)),
        (c = jr || Kb(t, n, c, r, d, g, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gh(e, t, n, r, o, i);
}
function Gh(e, t, n, r, i, o) {
  Yw(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && Ub(t, n, !1), Tr(e, t, o);
  (r = t.stateNode), (IO.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = zo(t, e.child, null, o)), (t.child = zo(t, null, a, o)))
      : Ot(e, t, a, o),
    (t.memoizedState = r.state),
    i && Ub(t, n, !0),
    t.child
  );
}
function Kw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wb(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wb(e, t.context, !1),
    Rp(e, t.containerInfo);
}
function ax(e, t, n, r, i) {
  return Vo(), wp(i), (t.flags |= 256), Ot(e, t, n, r), t.child;
}
var qh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qw(e, t, n) {
  var r,
    i = t.pendingProps,
    o = Ve.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    Re(Ve, 1 & o),
    e === null)
  )
    return (
      $h(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Uc(a, i, 0, null)),
              (e = Li(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Xh(n)),
              (t.memoizedState = qh),
              e)
            : Ap(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return OO(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = ti(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = ti(r, s)) : ((s = Li(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Xh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = qh),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = ti(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function Ap(e, t) {
  return (
    (t = Uc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zl(e, t, n, r) {
  return (
    r !== null && wp(r),
    zo(t, e.child, null, n),
    (e = Ap(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function OO(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = lh(Error(O(422)))), Zl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Uc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Li(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && zo(t, e.child, null, s),
        (t.child.memoizedState = Xh(s)),
        (t.memoizedState = qh),
        o);
  if (!(1 & t.mode)) return Zl(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(O(419))), (r = lh(o, r, void 0)), Zl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ht || a)) {
    if (((r = lt), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Cr(e, i), An(r, e, i, -1));
    }
    return Np(), (r = lh(Error(O(421)))), Zl(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = UO.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (en = Qr(i.nextSibling)),
      (tn = t),
      (Le = !0),
      (Ln = null),
      e !== null &&
        ((vn[yn++] = br),
        (vn[yn++] = xr),
        (vn[yn++] = Ai),
        (br = e.id),
        (xr = e.overflow),
        (Ai = t)),
      (t = Ap(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lx(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nh(e.return, t, n);
}
function ch(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Zw(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ot(e, t, r.children, n), (r = Ve.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lx(e, n, t);
        else if (e.tag === 19) lx(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Re(Ve, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Rc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ch(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Rc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ch(t, !0, n, null, o);
        break;
      case "together":
        ch(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ac(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ti(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ti(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function LO(e, t, n) {
  switch (t.tag) {
    case 3:
      Kw(t), Vo();
      break;
    case 5:
      Tw(t);
      break;
    case 1:
      Wt(t.type) && wc(t);
      break;
    case 4:
      Rp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Re(Cc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Re(Ve, 1 & Ve.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qw(e, t, n)
          : (Re(Ve, 1 & Ve.current),
            (e = Tr(e, t, n)),
            e !== null ? e.sibling : null);
      Re(Ve, 1 & Ve.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return Zw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Re(Ve, Ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Xw(e, t, n);
  }
  return Tr(e, t, n);
}
var Jw, Yh, eS, tS;
Jw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yh = function () {};
eS = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ii(nr.current);
    var o = null;
    switch (n) {
      case "input":
        (i = vh(e, i)), (r = vh(e, r)), (o = []);
        break;
      case "select":
        (i = Be({}, i, { value: void 0 })),
          (r = Be({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = xh(e, i)), (r = xh(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = bc);
    }
    Sh(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ks.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ks.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && Ie("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
tS = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ms(e, t) {
  if (!Le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function MO(e, t, n) {
  var r = t.pendingProps;
  switch ((xp(t), t.tag)) {
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
      return Et(t), null;
    case 1:
      return Wt(t.type) && xc(), Et(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bo(),
        Oe(jt),
        Oe(Pt),
        Fp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Kl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), Ln !== null && (np(Ln), (Ln = null)))),
        Yh(e, t),
        Et(t),
        null
      );
    case 5:
      Pp(t);
      var i = Ii(la.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        eS(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Et(t), null;
        }
        if (((e = Ii(nr.current)), Kl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[er] = t), (r[sa] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              Ie("cancel", r), Ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ie("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < $s.length; i++) Ie($s[i], r);
              break;
            case "source":
              Ie("error", r);
              break;
            // case "img":
            case "image":
            case "link":
              Ie("error", r), Ie("load", r);
              break;
            case "details":
              Ie("toggle", r);
              break;
            case "input":
              gb(r, o), Ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Ie("invalid", r);
              break;
            case "textarea":
              yb(r, o), Ie("invalid", r);
          }
          Sh(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ks.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Ie("scroll", r);
            }
          switch (n) {
            case "input":
              Vl(r), vb(r, o, !0);
              break;
            case "textarea":
              Vl(r), bb(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = bc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Px(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[er] = t),
            (e[sa] = r),
            Jw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = kh(n, r)), n)) {
              case "dialog":
                Ie("cancel", e), Ie("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < $s.length; i++) Ie($s[i], e);
                i = r;
                break;
              case "source":
                Ie("error", e), (i = r);
                break;
            //   case "img":
              case "image":
              case "link":
                Ie("error", e), Ie("load", e), (i = r);
                break;
              case "details":
                Ie("toggle", e), (i = r);
                break;
              case "input":
                gb(e, r), (i = vh(e, r)), Ie("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Be({}, r, { value: void 0 })),
                  Ie("invalid", e);
                break;
              case "textarea":
                yb(e, r), (i = xh(e, r)), Ie("invalid", e);
                break;
              default:
                i = r;
            }
            Sh(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Ix(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Fx(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Qs(e, l)
                    : typeof l == "number" && Qs(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ks.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Ie("scroll", e)
                      : l != null && op(e, o, l, s));
              }
            switch (n) {
              case "input":
                Vl(e), vb(e, r, !1);
                break;
              case "textarea":
                Vl(e), bb(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ni(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Fo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Fo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = bc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
            //   case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Et(t), null;
    case 6:
      if (e && t.stateNode != null) tS(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Ii(la.current)), Ii(nr.current), Kl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[er] = t),
            (o = r.nodeValue !== n) && ((e = tn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yl(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yl(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[er] = t),
            (t.stateNode = r);
      }
      return Et(t), null;
    case 13:
      if (
        (Oe(Ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Le && en !== null && 1 & t.mode && !(128 & t.flags))
          yw(), Vo(), (t.flags |= 98560), (o = !1);
        else if (((o = Kl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[er] = t;
          } else
            Vo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          Et(t), (o = !1);
        } else Ln !== null && (np(Ln), (Ln = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & Ve.current ? nt === 0 && (nt = 3) : Np())),
          t.updateQueue !== null && (t.flags |= 4),
          Et(t),
          null);
    case 4:
      return (
        Bo(), Yh(e, t), e === null && ia(t.stateNode.containerInfo), Et(t), null
      );
    case 10:
      return Cp(t.type._context), Et(t), null;
    case 17:
      return Wt(t.type) && xc(), Et(t), null;
    case 19:
      if ((Oe(Ve), (o = t.memoizedState), o === null)) return Et(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) Ms(o, !1);
        else {
          if (nt !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = Rc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ms(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Re(Ve, (1 & Ve.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ye() > No &&
            ((t.flags |= 128), (r = !0), Ms(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Rc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ms(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Le)
            )
              return Et(t), null;
          } else
            2 * Ye() - o.renderingStartTime > No &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ms(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ye()),
          (t.sibling = null),
          (n = Ve.current),
          Re(Ve, r ? (1 & n) | 2 : 1 & n),
          t)
        : (Et(t), null);
    case 22:
    case 23:
      return (
        $p(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Jt && (Et(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : Et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function AO(e, t) {
  switch ((xp(t), t.tag)) {
    case 1:
      return (
        Wt(t.type) && xc(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Bo(),
        Oe(jt),
        Oe(Pt),
        Fp(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return Pp(t), null;
    case 13:
      if (
        (Oe(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Vo();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return Oe(Ve), null;
    case 4:
      return Bo(), null;
    case 10:
      return Cp(t.type._context), null;
    case 22:
    case 23:
      return $p(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jl = !1,
  Rt = !1,
  DO = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function Ro(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ue(e, t, r);
      }
    else n.current = null;
}
function nS(e, t, n) {
  try {
    n();
  } catch (r) {
    Ue(e, t, r);
  }
}
var cx = !1;
function VO(e, t) {
  if (((Lh = gc), (e = ow()), yp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || _;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mh = { focusedElem: e, selectionRange: n }, gc = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var g = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    b = g.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : In(t.type, v),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          Ue(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (g = cx), (cx = !1), g;
}
function qs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && nS(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function jc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
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
function Kh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function rS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), rS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[er], delete t[sa], delete t[Vh], delete t[bO], delete t[xO])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function iS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ux(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || iS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Qh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qh(e, t, n), e = e.sibling; e !== null; ) Qh(e, t, n), (e = e.sibling);
}
function Zh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zh(e, t, n), e = e.sibling; e !== null; ) Zh(e, t, n), (e = e.sibling);
}
var mt = null,
  On = !1;
function Nr(e, t, n) {
  for (n = n.child; n !== null; ) oS(e, t, n), (n = n.sibling);
}
function oS(e, t, n) {
  if (tr && typeof tr.onCommitFiberUnmount == "function")
    try {
      tr.onCommitFiberUnmount(Ac, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Rt || Ro(n, t);
    case 6:
      var r = mt,
        i = On;
      (mt = null),
        Nr(e, t, n),
        (mt = r),
        (On = i),
        mt !== null &&
          (On
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode));
      break;
    case 18:
      mt !== null &&
        (On
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? nh(e.parentNode, n)
              : e.nodeType === 1 && nh(e, n),
            ta(e))
          : nh(mt, n.stateNode));
      break;
    case 4:
      (r = mt),
        (i = On),
        (mt = n.stateNode.containerInfo),
        (On = !0),
        Nr(e, t, n),
        (mt = r),
        (On = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Rt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && nS(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Nr(e, t, n);
      break;
    case 1:
      if (
        !Rt &&
        (Ro(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ue(n, t, a);
        }
      Nr(e, t, n);
      break;
    case 21:
      Nr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Rt = (r = Rt) || n.memoizedState !== null), Nr(e, t, n), (Rt = r))
        : Nr(e, t, n);
      break;
    default:
      Nr(e, t, n);
  }
}
function fx(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new DO()),
      t.forEach(function (r) {
        var i = GO.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function _n(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (mt = a.stateNode), (On = !1);
              break e;
            case 3:
              (mt = a.stateNode.containerInfo), (On = !0);
              break e;
            case 4:
              (mt = a.stateNode.containerInfo), (On = !0);
              break e;
          }
          a = a.return;
        }
        if (mt === null) throw Error(O(160));
        oS(o, s, i), (mt = null), (On = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Ue(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) sS(t, e), (t = t.sibling);
}
function sS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_n(t, e), Zn(e), 4 & r)) {
        try {
          qs(3, e, e.return), jc(3, e);
        } catch (v) {
          Ue(e, e.return, v);
        }
        try {
          qs(5, e, e.return);
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      break;
    case 1:
      _n(t, e), Zn(e), 512 & r && n !== null && Ro(n, n.return);
      break;
    case 5:
      if (
        (_n(t, e),
        Zn(e),
        512 & r && n !== null && Ro(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Qs(i, "");
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Ex(i, o),
              kh(a, s);
            var c = kh(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Ix(i, f)
                : u === "dangerouslySetInnerHTML"
                ? Fx(i, f)
                : u === "children"
                ? Qs(i, f)
                : op(i, u, f, c);
            }
            switch (a) {
              case "input":
                yh(i, o);
                break;
              case "textarea":
                Rx(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? Fo(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Fo(i, !!o.multiple, o.defaultValue, !0)
                      : Fo(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[sa] = o;
          } catch (v) {
            Ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((_n(t, e), Zn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (_n(t, e), Zn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ta(t.containerInfo);
        } catch (v) {
          Ue(e, e.return, v);
        }
      break;
    case 4:
      _n(t, e), Zn(e);
      break;
    case 13:
      _n(t, e),
        Zn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (zp = Ye())),
        4 & r && fx(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((Rt = (c = Rt) || u), _n(t, e), (Rt = c)) : _n(t, e),
        Zn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (B = e, u = e.child; u !== null; ) {
            for (f = B = u; B !== null; ) {
              switch (((d = B), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qs(4, d, d.return);
                  break;
                case 1:
                  Ro(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      Ue(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Ro(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    hx(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (B = m)) : hx(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = _x("display", s)));
              } catch (v) {
                Ue(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                Ue(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      _n(t, e), Zn(e), 4 & r && fx(e);
      break;
    case 21:
      break;
    default:
      _n(t, e), Zn(e);
  }
}
function Zn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (iS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Qs(i, ""), (r.flags &= -33));
          var o = ux(e);
          Zh(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ux(e);
          Qh(e, a, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      Ue(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function zO(e, t, n) {
  (B = e), aS(e, t, n);
}
function aS(e, t, n) {
  for (var r = (1 & e.mode) !== 0; B !== null; ) {
    var i = B,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Jl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Rt;
        a = Jl;
        var c = Rt;
        if (((Jl = s), (Rt = l) && !c))
          for (B = i; B !== null; )
            (s = B),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? px(i)
                : l !== null
                ? ((l.return = s), (B = l))
                : px(i);
        for (; o !== null; ) (B = o), aS(o, t, n), (o = o.sibling);
        (B = i), (Jl = a), (Rt = c);
      }
      dx(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (B = o))
        : dx(e, t, n);
  }
}
function dx(e) {
  for (; B !== null; ) {
    var t = B;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Rt || jc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Rt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : In(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Yb(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yb(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                //   case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && ta(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Rt || (512 & t.flags && Kh(t));
      } catch (d) {
        Ue(t, t.return, d);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function hx(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function px(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jc(4, t);
          } catch (l) {
            Ue(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ue(t, i, l);
            }
          }
          var o = t.return;
          try {
            Kh(t);
          } catch (l) {
            Ue(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Kh(t);
          } catch (l) {
            Ue(t, s, l);
          }
      }
    } catch (l) {
      Ue(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (B = a);
      break;
    }
    B = t.return;
  }
}
var BO = Math.ceil,
  _c = Er.ReactCurrentDispatcher,
  Dp = Er.ReactCurrentOwner,
  xn = Er.ReactCurrentBatchConfig,
  ge = 0,
  lt = null,
  Qe = null,
  gt = 0,
  Jt = 0,
  Po = oi(0),
  nt = 0,
  da = null,
  Vi = 0,
  Wc = 0,
  Vp = 0,
  Xs = null,
  Nt = null,
  zp = 0,
  No = 1 / 0,
  vr = null,
  Ic = !1,
  Jh = null,
  Jr = null,
  ec = !1,
  qr = null,
  Oc = 0,
  Ys = 0,
  ep = null,
  lc = -1,
  cc = 0;
function Lt() {
  return 6 & ge ? Ye() : lc !== -1 ? lc : (lc = Ye());
}
function ei(e) {
  return 1 & e.mode
    ? 2 & ge && gt !== 0
      ? gt & -gt
      : SO.transition !== null
      ? (cc === 0 && (cc = jx()), cc)
      : ((e = Ce),
        e !== 0 || ((e = _.event), (e = e === void 0 ? 16 : Kx(e.type))),
        e)
    : 1;
}
function An(e, t, n, r) {
  if (50 < Ys) throw ((Ys = 0), (ep = null), Error(O(185)));
  ha(e, n, r),
    (2 & ge && e === lt) ||
      (e === lt && (!(2 & ge) && (Wc |= n), nt === 4 && Ur(e, gt)),
      Ut(e, r),
      n === 1 && ge === 0 && !(1 & t.mode) && ((No = Ye() + 500), $c && si()));
}
function Ut(e, t) {
  var n = e.callbackNode;
  CI(e, t);
  var r = mc(e, e === lt ? gt : 0);
  if (r === 0)
    n !== null && Sb(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sb(n), t === 1))
      e.tag === 0 ? wO(mx.bind(null, e)) : mw(mx.bind(null, e)),
        vO(function () {
          !(6 & ge) && si();
        }),
        (n = null);
    else {
      switch (Wx(r)) {
        case 1:
          n = up;
          break;
        case 4:
          n = Nx;
          break;
        case 16:
          n = pc;
          break;
        case 536870912:
          n = Hx;
          break;
        default:
          n = pc;
      }
      n = mS(n, lS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function lS(e, t) {
  if (((lc = -1), (cc = 0), 6 & ge)) throw Error(O(327));
  var n = e.callbackNode;
  if (Mo() && e.callbackNode !== n) return null;
  var r = mc(e, e === lt ? gt : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = Lc(e, r);
  else {
    t = r;
    var i = ge;
    ge |= 2;
    var o = uS();
    (lt === e && gt === t) || ((vr = null), (No = Ye() + 500), Oi(e, t));
    do
      try {
        HO();
        break;
      } catch (a) {
        cS(e, a);
      }
    while (1);
    kp(),
      (_c.current = o),
      (ge = i),
      Qe !== null ? (t = 0) : ((lt = null), (gt = 0), (t = nt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ph(e)), i !== 0 && ((r = i), (t = tp(e, i)))), t === 1)
    )
      throw ((n = da), Oi(e, 0), Ur(e, r), Ut(e, Ye()), n);
    if (t === 6) Ur(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !$O(i) &&
          ((t = Lc(e, r)),
          t === 2 && ((o = Ph(e)), o !== 0 && ((r = o), (t = tp(e, o)))),
          t === 1))
      )
        throw ((n = da), Oi(e, 0), Ur(e, r), Ut(e, Ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Pi(e, Nt, vr);
          break;
        case 3:
          if (
            (Ur(e, r), (130023424 & r) === r && ((t = zp + 500 - Ye()), 10 < t))
          ) {
            if (mc(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Lt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Dh(Pi.bind(null, e, Nt, vr), t);
            break;
          }
          Pi(e, Nt, vr);
          break;
        case 4:
          if ((Ur(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Mn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ye() - r),
            (r =
              (120 > r
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
                : 1960 * BO(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Dh(Pi.bind(null, e, Nt, vr), r);
            break;
          }
          Pi(e, Nt, vr);
          break;
        case 5:
          Pi(e, Nt, vr);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ut(e, Ye()), e.callbackNode === n ? lS.bind(null, e) : null;
}
function tp(e, t) {
  var n = Xs;
  return (
    e.current.memoizedState.isDehydrated && (Oi(e, t).flags |= 256),
    (e = Lc(e, t)),
    e !== 2 && ((t = Nt), (Nt = n), t !== null && np(t)),
    e
  );
}
function np(e) {
  Nt === null ? (Nt = e) : Nt.push.apply(Nt, e);
}
function $O(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Dn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ur(e, t) {
  for (
    t &= ~Vp,
      t &= ~Wc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mx(e) {
  if (6 & ge) throw Error(O(327));
  Mo();
  var t = mc(e, 0);
  if (!(1 & t)) return Ut(e, Ye()), null;
  var n = Lc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ph(e);
    r !== 0 && ((t = r), (n = tp(e, r)));
  }
  if (n === 1) throw ((n = da), Oi(e, 0), Ur(e, t), Ut(e, Ye()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pi(e, Nt, vr),
    Ut(e, Ye()),
    null
  );
}
function Bp(e, t) {
  var n = ge;
  ge |= 1;
  try {
    return e(t);
  } finally {
    (ge = n), ge === 0 && ((No = Ye() + 500), $c && si());
  }
}
function zi(e) {
  qr !== null && qr.tag === 0 && !(6 & ge) && Mo();
  var t = ge;
  ge |= 1;
  var n = xn.transition,
    r = Ce;
  try {
    if (((xn.transition = null), (Ce = 1), e)) return e();
  } finally {
    (Ce = r), (xn.transition = n), (ge = t), !(6 & ge) && si();
  }
}
function $p() {
  (Jt = Po.current), Oe(Po);
}
function Oi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gO(n)), Qe !== null))
    for (n = Qe.return; n !== null; ) {
      var r = n;
      switch ((xp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xc();
          break;
        case 3:
          Bo(), Oe(jt), Oe(Pt), Fp();
          break;
        case 5:
          Pp(r);
          break;
        case 4:
          Bo();
          break;
        case 13:
          Oe(Ve);
          break;
        case 19:
          Oe(Ve);
          break;
        case 10:
          Cp(r.type._context);
          break;
        case 22:
        case 23:
          $p();
      }
      n = n.return;
    }
  if (
    ((lt = e),
    (Qe = e = ti(e.current, null)),
    (gt = Jt = t),
    (nt = 0),
    (da = null),
    (Vp = Wc = Vi = 0),
    (Nt = Xs = null),
    _i !== null)
  ) {
    for (t = 0; t < _i.length; t++)
      if (((n = _i[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    _i = null;
  }
  return e;
}
function cS(e, t) {
  do {
    var n = Qe;
    try {
      if ((kp(), (oc.current = Fc), Pc)) {
        for (var r = ze.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Pc = !1;
      }
      if (
        ((Di = 0),
        (at = tt = ze = null),
        (Gs = !1),
        (ca = 0),
        (Dp.current = null),
        n === null || n.return === null)
      ) {
        (nt = 1), (da = t), (Qe = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = gt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var m = nx(s);
          if (m !== null) {
            (m.flags &= -257),
              rx(m, s, a, o, t),
              1 & m.mode && tx(o, c, t),
              (t = m),
              (l = c);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else g.add(l);
            break e;
          }
          if (!(1 & t)) {
            tx(o, c, t), Np();
            break e;
          }
          l = Error(O(426));
        } else if (Le && 1 & a.mode) {
          var b = nx(s);
          if (b !== null) {
            !(65536 & b.flags) && (b.flags |= 256),
              rx(b, s, a, o, t),
              wp($o(l, a));
            break e;
          }
        }
        (o = l = $o(l, a)),
          nt !== 4 && (nt = 2),
          Xs === null ? (Xs = [o]) : Xs.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Uw(o, l, t);
              Xb(o, h);
              break e;
            case 1:
              a = l;
              var p = o.type,
                y = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Jr === null || !Jr.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Gw(o, a, t);
                Xb(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dS(n);
    } catch (T) {
      (t = T), Qe === n && n !== null && (Qe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function uS() {
  var e = _c.current;
  return (_c.current = Fc), e === null ? Fc : e;
}
function Np() {
  (nt !== 0 && nt !== 3 && nt !== 2) || (nt = 4),
    lt === null || (!(268435455 & Vi) && !(268435455 & Wc)) || Ur(lt, gt);
}
function Lc(e, t) {
  var n = ge;
  ge |= 2;
  var r = uS();
  (lt === e && gt === t) || ((vr = null), Oi(e, t));
  do
    try {
      NO();
      break;
    } catch (i) {
      cS(e, i);
    }
  while (1);
  if ((kp(), (ge = n), (_c.current = r), Qe !== null)) throw Error(O(261));
  return (lt = null), (gt = 0), nt;
}
function NO() {
  for (; Qe !== null; ) fS(Qe);
}
function HO() {
  for (; Qe !== null && !mI(); ) fS(Qe);
}
function fS(e) {
  var t = pS(e.alternate, e, Jt);
  (e.memoizedProps = e.pendingProps),
    t === null ? dS(e) : (Qe = t),
    (Dp.current = null);
}
function dS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = AO(n, t)), n !== null)) {
        (n.flags &= 32767), (Qe = n);
        return;
      }
      if (e === null) {
        (nt = 6), (Qe = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = MO(n, t, Jt)), n !== null)) {
      Qe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Qe = t;
      return;
    }
    Qe = t = e;
  } while (t !== null);
  nt === 0 && (nt = 5);
}
function Pi(e, t, n) {
  var r = Ce,
    i = xn.transition;
  try {
    (xn.transition = null), (Ce = 1), jO(e, t, n, r);
  } finally {
    (xn.transition = i), (Ce = r);
  }
  return null;
}
function jO(e, t, n, r) {
  do Mo();
  while (qr !== null);
  if (6 & ge) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (TI(e, o),
    e === lt && ((Qe = lt = null), (gt = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      ec ||
      ((ec = !0),
      mS(pc, function () {
        return Mo(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = xn.transition), (xn.transition = null);
    var s = Ce;
    Ce = 1;
    var a = ge;
    (ge |= 4),
      (Dp.current = null),
      VO(e, n),
      sS(n, e),
      fO(Mh),
      (gc = !!Lh),
      (Mh = Lh = null),
      (e.current = n),
      zO(n, e, i),
      gI(),
      (ge = a),
      (Ce = s),
      (xn.transition = o);
  } else e.current = n;
  if (
    (ec && ((ec = !1), (qr = e), (Oc = i)),
    (o = e.pendingLanes),
    o === 0 && (Jr = null),
    bI(n.stateNode, r),
    Ut(e, Ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ic) throw ((Ic = !1), (e = Jh), (Jh = null), e);
  return (
    1 & Oc && e.tag !== 0 && Mo(),
    (o = e.pendingLanes),
    1 & o ? (e === ep ? Ys++ : ((Ys = 0), (ep = e))) : (Ys = 0),
    si(),
    null
  );
}
function Mo() {
  if (qr !== null) {
    var e = Wx(Oc),
      t = xn.transition,
      n = Ce;
    try {
      if (((xn.transition = null), (Ce = 16 > e ? 16 : e), qr === null))
        var r = !1;
      else {
        if (((e = qr), (qr = null), (Oc = 0), 6 & ge)) throw Error(O(331));
        var i = ge;
        for (ge |= 4, B = e.current; B !== null; ) {
          var o = B,
            s = o.child;
          if (16 & B.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null; ) {
                  var u = B;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (B = f);
                  else
                    for (; B !== null; ) {
                      u = B;
                      var d = u.sibling,
                        m = u.return;
                      if ((rS(u), u === c)) {
                        B = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (B = d);
                        break;
                      }
                      B = m;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var b = v.sibling;
                    (v.sibling = null), (v = b);
                  } while (v !== null);
                }
              }
              B = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), (B = s);
          else
            e: for (; B !== null; ) {
              if (((o = B), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qs(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (B = h);
                break e;
              }
              B = o.return;
            }
        }
        var p = e.current;
        for (B = p; B !== null; ) {
          s = B;
          var y = s.child;
          if (2064 & s.subtreeFlags && y !== null) (y.return = s), (B = y);
          else
            e: for (s = p; B !== null; ) {
              if (((a = B), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jc(9, a);
                  }
                } catch (T) {
                  Ue(a, a.return, T);
                }
              if (a === s) {
                B = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (B = w);
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((ge = i), si(), tr && typeof tr.onPostCommitFiberRoot == "function")
        )
          try {
            tr.onPostCommitFiberRoot(Ac, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ce = n), (xn.transition = t);
    }
  }
  return !1;
}
function gx(e, t, n) {
  (t = $o(n, t)),
    (t = Uw(e, t, 1)),
    (e = Zr(e, t, 1)),
    (t = Lt()),
    e !== null && (ha(e, 1, t), Ut(e, t));
}
function Ue(e, t, n) {
  if (e.tag === 3) gx(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gx(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Jr === null || !Jr.has(r)))
        ) {
          (e = $o(n, e)),
            (e = Gw(t, e, 1)),
            (t = Zr(t, e, 1)),
            (e = Lt()),
            t !== null && (ha(t, 1, e), Ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function WO(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Lt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    lt === e &&
      (gt & n) === n &&
      (nt === 4 || (nt === 3 && (130023424 & gt) === gt && 500 > Ye() - zp)
        ? Oi(e, 0)
        : (Vp |= n)),
    Ut(e, t);
}
function hS(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = $l), ($l <<= 1), !(130023424 & $l) && ($l = 4194304))
      : (t = 1));
  var n = Lt();
  (e = Cr(e, t)), e !== null && (ha(e, t, n), Ut(e, n));
}
function UO(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hS(e, n);
}
function GO(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), hS(e, n);
}
var pS;
pS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || jt.current) Ht = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (Ht = !1), LO(e, t, n);
      Ht = (131072 & e.flags) !== 0;
    }
  else (Ht = !1), Le && 1048576 & t.flags && gw(t, kc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ac(e, t), (e = t.pendingProps);
      var i = Do(t, Pt.current);
      Lo(t, n), (i = Ip(null, t, r, e, i, n));
      var o = Op();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Wt(r) ? ((o = !0), wc(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ep(t),
            (i.updater = Nc),
            (t.stateNode = i),
            (i._reactInternals = t),
            jh(t, r, e, n),
            (t = Gh(null, t, r, !0, o, n)))
          : ((t.tag = 0), Le && o && bp(t), Ot(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ac(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = XO(r)),
          (e = In(r, e)),
          i)
        ) {
          case 0:
            t = Uh(null, t, r, e, n);
            break e;
          case 1:
            t = sx(null, t, r, e, n);
            break e;
          case 11:
            t = ix(null, t, r, e, n);
            break e;
          case 14:
            t = ox(null, t, r, In(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        Uh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        sx(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Kw(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          xw(e, t),
          Ec(t, r, null, n);
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
            (i = $o(Error(O(423)), t)), (t = ax(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = $o(Error(O(424)), t)), (t = ax(e, t, r, n, i));
            break e;
          }
          for (
            en = Qr(t.stateNode.containerInfo.firstChild),
              tn = t,
              Le = !0,
              Ln = null,
              n = Cw(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Vo(), r === i)) {
            t = Tr(e, t, n);
            break e;
          }
          Ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tw(t),
        e === null && $h(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ah(r, i) ? (s = null) : o !== null && Ah(r, o) && (t.flags |= 32),
        Yw(e, t),
        Ot(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && $h(t), null;
    case 13:
      return Qw(e, t, n);
    case 4:
      return (
        Rp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zo(t, null, r, n)) : Ot(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        ix(e, t, r, i, n)
      );
    case 7:
      return Ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Re(Cc, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Dn(o.value, s)) {
            if (o.children === i.children && !jt.current) {
              t = Tr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = wr(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Nh(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Nh(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ot(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Lo(t, n),
        (i = wn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ot(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = In(r, t.pendingProps)),
        (i = In(r.type, i)),
        ox(e, t, r, i, n)
      );
    case 15:
      return qw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        ac(e, t),
        (t.tag = 1),
        Wt(r) ? ((e = !0), wc(t)) : (e = !1),
        Lo(t, n),
        Sw(t, r, i),
        jh(t, r, i, n),
        Gh(null, t, r, !0, e, n)
      );
    case 19:
      return Zw(e, t, n);
    case 22:
      return Xw(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function mS(e, t) {
  return $x(e, t);
}
function qO(e, t, n, r) {
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
function bn(e, t, n, r) {
  return new qO(e, t, n, r);
}
function Hp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function XO(e) {
  if (typeof e == "function") return Hp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ap)) return 11;
    if (e === lp) return 14;
  }
  return 2;
}
function ti(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = bn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
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
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function uc(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Hp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case yo:
        return Li(n.children, i, o, t);
      case sp:
        (s = 8), (i |= 8);
        break;
      case hh:
        return (
          (e = bn(12, n, t, 2 | i)), (e.elementType = hh), (e.lanes = o), e
        );
      case ph:
        return (e = bn(13, n, t, i)), (e.elementType = ph), (e.lanes = o), e;
      case mh:
        return (e = bn(19, n, t, i)), (e.elementType = mh), (e.lanes = o), e;
      case kx:
        return Uc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wx:
              s = 10;
              break e;
            case Sx:
              s = 9;
              break e;
            case ap:
              s = 11;
              break e;
            case lp:
              s = 14;
              break e;
            case Hr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = bn(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Li(e, t, n, r) {
  return (e = bn(7, e, r, t)), (e.lanes = n), e;
}
function Uc(e, t, n, r) {
  return (
    (e = bn(22, e, r, t)),
    (e.elementType = kx),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function uh(e, t, n) {
  return (e = bn(6, e, null, t)), (e.lanes = n), e;
}
function fh(e, t, n) {
  return (
    (t = bn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function YO(e, t, n, r, i) {
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
    (this.eventTimes = Xd(0)),
    (this.expirationTimes = Xd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function jp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new YO(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = bn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ep(o),
    e
  );
}
function KO(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gS(e) {
  if (!e) return ri;
  e = e._reactInternals;
  e: {
    if ($i(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Wt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Wt(n)) return pw(e, n, t);
  }
  return t;
}
function vS(e, t, n, r, i, o, s, a, l) {
  return (
    (e = jp(n, r, !0, e, i, o, s, a, l)),
    (e.context = gS(null)),
    (n = e.current),
    (r = Lt()),
    (i = ei(n)),
    (o = wr(r, i)),
    (o.callback = t ?? null),
    Zr(n, o, i),
    (e.current.lanes = i),
    ha(e, i, r),
    Ut(e, r),
    e
  );
}
function Gc(e, t, n, r) {
  var i = t.current,
    o = Lt(),
    s = ei(i);
  return (
    (n = gS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zr(i, t, s)),
    e !== null && (An(e, i, s, o), ic(e, i, s)),
    s
  );
}
function Mc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vx(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wp(e, t) {
  vx(e, t), (e = e.alternate) && vx(e, t);
}
function QO() {
  return null;
}
var yS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Up(e) {
  this._internalRoot = e;
}
qc.prototype.render = Up.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Gc(e, t, null, null);
};
qc.prototype.unmount = Up.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zi(function () {
      Gc(null, e, null, null);
    }),
      (t[kr] = null);
  }
};
function qc(e) {
  this._internalRoot = e;
}
qc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wr.length && t !== 0 && t < Wr[n].priority; n++);
    Wr.splice(n, 0, e), n === 0 && Yx(e);
  }
};
function Gp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yx() {}
function ZO(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Mc(s);
        o.call(c);
      };
    }
    var s = vS(t, r, e, 0, null, !1, !1, "", yx);
    return (
      (e._reactRootContainer = s),
      (e[kr] = s.current),
      ia(e.nodeType === 8 ? e.parentNode : e),
      zi(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Mc(l);
      a.call(c);
    };
  }
  var l = jp(e, 0, !1, null, null, !1, !1, "", yx);
  return (
    (e._reactRootContainer = l),
    (e[kr] = l.current),
    ia(e.nodeType === 8 ? e.parentNode : e),
    zi(function () {
      Gc(t, l, n, r);
    }),
    l
  );
}
function Yc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Mc(s);
        a.call(l);
      };
    }
    Gc(t, s, e, i);
  } else s = ZO(n, t, e, i, r);
  return Mc(s);
}
Ux = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bs(t.pendingLanes);
        n !== 0 &&
          (fp(t, 1 | n), Ut(t, Ye()), !(6 & ge) && ((No = Ye() + 500), si()));
      }
      break;
    case 13:
      zi(function () {
        var r = Cr(e, 1);
        if (r !== null) {
          var i = Lt();
          An(r, e, 1, i);
        }
      }),
        Wp(e, 1);
  }
};
dp = function (e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = Lt();
      An(t, e, 134217728, n);
    }
    Wp(e, 134217728);
  }
};
Gx = function (e) {
  if (e.tag === 13) {
    var t = ei(e),
      n = Cr(e, t);
    if (n !== null) {
      var r = Lt();
      An(n, e, t, r);
    }
    Wp(e, t);
  }
};
qx = function () {
  return Ce;
};
Xx = function (e, t) {
  var n = Ce;
  try {
    return (Ce = e), t();
  } finally {
    Ce = n;
  }
};
Th = function (e, t, n) {
  switch (t) {
    case "input":
      if ((yh(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Bc(r);
            if (!i) throw Error(O(90));
            Tx(r), yh(r, i);
          }
        }
      }
      break;
    case "textarea":
      Rx(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fo(e, !!n.multiple, t, !1);
  }
};
Mx = Bp;
Ax = zi;
var JO = { usingClientEntryPoint: !1, Events: [ma, So, Bc, Ox, Lx, Bp] },
  As = {
    findFiberByHostInstance: Fi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  e2 = {
    bundleType: As.bundleType,
    version: As.version,
    rendererPackageName: As.rendererPackageName,
    rendererConfig: As.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Er.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = zx(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: As.findFiberByHostInstance || QO,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Ds.isDisabled && Ds.supportsFiber)
)
  try {
    (Ac = Ds.inject(e2)), (tr = Ds);
  } catch {}
var Ds;
rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JO;
rn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gp(t)) throw Error(O(200));
  return KO(e, t, null, n);
};
rn.createRoot = function (e, t) {
  if (!Gp(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = yS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = jp(e, 1, !1, null, null, n, !1, r, i)),
    (e[kr] = t.current),
    ia(e.nodeType === 8 ? e.parentNode : e),
    new Up(t)
  );
};
rn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = zx(t)), (e = e === null ? null : e.stateNode), e;
};
rn.flushSync = function (e) {
  return zi(e);
};
rn.hydrate = function (e, t, n) {
  if (!Xc(t)) throw Error(O(200));
  return Yc(null, e, t, !0, n);
};
rn.hydrateRoot = function (e, t, n) {
  if (!Gp(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = yS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = vS(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[kr] = t.current),
    ia(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new qc(t);
};
rn.render = function (e, t, n) {
  if (!Xc(t)) throw Error(O(200));
  return Yc(null, e, t, !1, n);
};
rn.unmountComponentAtNode = function (e) {
  if (!Xc(e)) throw Error(O(40));
  return (
    !!e._reactRootContainer &&
    (zi(function () {
      Yc(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[kr] = null);
      });
    }),
    !0)
  );
};
rn.unstable_batchedUpdates = Bp;
rn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xc(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Yc(e, t, n, !1, r);
};
rn.version = "18.2.0-next-9e3b772b8-20220608";
function bS() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS);
    } catch (e) {
      console.error(e);
    }
}
bS();
var sn = rn,
  xS = sn,
  t2 = sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  n2 = sn.createPortal,
  r2 = sn.createRoot,
  i2 = sn.findDOMNode,
  o2 = sn.flushSync,
  s2 = sn.hydrate,
  a2 = sn.hydrateRoot,
  l2 = sn.render,
  c2 = sn.unmountComponentAtNode,
  u2 = sn.unstable_batchedUpdates,
  f2 = sn.unstable_renderSubtreeIntoContainer,
  d2 = sn.version;
var p2 = pn({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0);
      var t = class {
        constructor() {
          (this.hex = "#000000"),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0);
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a))))
          );
        }
        rgbToHex() {
          (this.hex = "#"),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b));
        }
        hexToRgb() {
          (this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5));
        }
        xyzToRgb() {
          (this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z
            ));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          (this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i);
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV)));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          (this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            (this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          (this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c);
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            m = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          (this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / m),
            (this.b0i = (d * n) / m),
            (this.b1s = f / (m + 126452)),
            (this.b1i = ((d - 769860) * n) / (m + 126452));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l);
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) (this.hsluv_s = 0), (this.hsluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hsluv_s = 0), (this.hsluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            (this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l);
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l);
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) (this.hpluv_p = 0), (this.hpluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hpluv_p = 0), (this.hpluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            (this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l);
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hpluvToRgb() {
          this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hsluvToHex() {
          this.hsluvToRgb(), this.rgbToHex();
        }
        hpluvToHex() {
          this.hpluvToRgb(), this.rgbToHex();
        }
        rgbToHsluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv();
        }
        rgbToHpluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv();
        }
        hexToHsluv() {
          this.hexToRgb(), this.rgbToHsluv();
        }
        hexToHpluv() {
          this.hexToRgb(), this.rgbToHpluv();
        }
      };
      (e.Hsluv = t),
        (t.hexChars = "0123456789abcdef"),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878);
    },
  }),
  m2 = pn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, m) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var g = new o(f, d || c, m),
          v = r ? r + u : u;
        return (
          c._events[v]
            ? c._events[v].fn
              ? (c._events[v] = [c._events[v], g])
              : c._events[v].push(g)
            : ((c._events[v] = g), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var m = 0, g = d.length, v = new Array(g); m < g; m++)
            v[m] = d[m].fn;
          return v;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, m, g, v) {
          var b = r ? r + u : u;
          if (!this._events[b]) return !1;
          var h = this._events[b],
            p = arguments.length,
            y,
            w;
          if (h.fn) {
            switch ((h.once && this.removeListener(u, h.fn, void 0, !0), p)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, f), !0;
              case 3:
                return h.fn.call(h.context, f, d), !0;
              case 4:
                return h.fn.call(h.context, f, d, m), !0;
              case 5:
                return h.fn.call(h.context, f, d, m, g), !0;
              case 6:
                return h.fn.call(h.context, f, d, m, g, v), !0;
            }
            for (w = 1, y = new Array(p - 1); w < p; w++)
              y[w - 1] = arguments[w];
            h.fn.apply(h.context, y);
          } else {
            var T = h.length,
              S;
            for (w = 0; w < T; w++)
              switch (
                (h[w].once && this.removeListener(u, h[w].fn, void 0, !0), p)
              ) {
                case 1:
                  h[w].fn.call(h[w].context);
                  break;
                case 2:
                  h[w].fn.call(h[w].context, f);
                  break;
                case 3:
                  h[w].fn.call(h[w].context, f, d);
                  break;
                case 4:
                  h[w].fn.call(h[w].context, f, d, m);
                  break;
                default:
                  if (!y)
                    for (S = 1, y = new Array(p - 1); S < p; S++)
                      y[S - 1] = arguments[S];
                  h[w].fn.apply(h[w].context, y);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, m) {
          var g = r ? r + u : u;
          if (!this._events[g]) return this;
          if (!f) return a(this, g), this;
          var v = this._events[g];
          if (v.fn)
            v.fn === f &&
              (!m || v.once) &&
              (!d || v.context === d) &&
              a(this, g);
          else {
            for (var b = 0, h = [], p = v.length; b < p; b++)
              (v[b].fn !== f ||
                (m && !v[b].once) ||
                (d && v[b].context !== d)) &&
                h.push(v[b]);
            h.length
              ? (this._events[g] = h.length === 1 ? h[0] : h)
              : a(this, g);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  Am = pn({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(h) {
        if (r === setTimeout) return setTimeout(h, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(h, 0);
        try {
          return r(h, 0);
        } catch {
          try {
            return r.call(null, h, 0);
          } catch {
            return r.call(this, h, 0);
          }
        }
      }
      function l(h) {
        if (i === clearTimeout) return clearTimeout(h);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(h);
        try {
          return i(h);
        } catch {
          try {
            return i.call(null, h);
          } catch {
            return i.call(this, h);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function m() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && g());
      }
      function g() {
        if (!u) {
          var h = a(m);
          u = !0;
          for (var p = c.length; p; ) {
            for (f = c, c = []; ++d < p; ) f && f[d].run();
            (d = -1), (p = c.length);
          }
          (f = null), (u = !1), l(h);
        }
      }
      n.nextTick = function (h) {
        var p = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var y = 1; y < arguments.length; y++) p[y - 1] = arguments[y];
        c.push(new v(h, p)), c.length === 1 && !u && a(g);
      };
      function v(h, p) {
        (this.fun = h), (this.array = p);
      }
      (v.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function b() {}
      (n.on = b),
        (n.addListener = b),
        (n.once = b),
        (n.off = b),
        (n.removeListener = b),
        (n.removeAllListeners = b),
        (n.emit = b),
        (n.prependListener = b),
        (n.prependOnceListener = b),
        (n.listeners = function (h) {
          return [];
        }),
        (n.binding = function (h) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (h) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  RN = pn({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(
      e,
      t
    ) {
      (function (n, r) {
        typeof e == "object" && typeof t < "u"
          ? r(e)
          : typeof define == "function" && define.amd
          ? define(["exports"], r)
          : ((n = typeof globalThis < "u" ? globalThis : n || self),
            r((n.ResizeObserver = {})));
      })(e, function (n) {
        "use strict";
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = "ResizeObserver loop completed with undelivered notifications.",
          a = function () {
            var P;
            typeof ErrorEvent == "function"
              ? (P = new ErrorEvent("error", { message: s }))
              : ((P = document.createEvent("Event")),
                P.initEvent("error", !1, !1),
                (P.message = s)),
              _.dispatchEvent(P);
          },
          l;
        (function (P) {
          (P.BORDER_BOX = "border-box"),
            (P.CONTENT_BOX = "content-box"),
            (P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(F, L) {
              (this.inlineSize = F), (this.blockSize = L), c(this);
            }
            return P;
          })(),
          f = (function () {
            function P(F, L, N, pe) {
              return (
                (this.x = F),
                (this.y = L),
                (this.width = N),
                (this.height = pe),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var F = this,
                  L = F.x,
                  N = F.y,
                  pe = F.top,
                  _t = F.right,
                  dt = F.bottom,
                  qe = F.left,
                  cr = F.width,
                  Yt = F.height;
                return {
                  x: L,
                  y: N,
                  top: pe,
                  right: _t,
                  bottom: dt,
                  left: qe,
                  width: cr,
                  height: Yt,
                };
              }),
              (P.fromRect = function (F) {
                return new P(F.x, F.y, F.width, F.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && "getBBox" in P;
          },
          m = function (P) {
            if (d(P)) {
              var F = P.getBBox(),
                L = F.width,
                N = F.height;
              return !L && !N;
            }
            var pe = P,
              _t = pe.offsetWidth,
              dt = pe.offsetHeight;
            return !(_t || dt || P.getClientRects().length);
          },
          g = function (P) {
            var F, L;
            if (P instanceof Element) return !0;
            var N =
              (L =
                (F = P) === null || F === void 0 ? void 0 : F.ownerDocument) ===
                null || L === void 0
                ? void 0
                : L.defaultView;
            return !!(N && P instanceof N.Element);
          },
          v = function (P) {
            switch (P.tagName) {
              case "INPUT":
                if (P.type !== "image") break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
            //   case "IMG":
                return !0;
            }
            return !1;
          },
          b = typeof _ < "u" ? _ : {},
          h = new WeakMap(),
          p = /auto|scroll/,
          y = /^tb|vertical/,
          w = /msie|trident/i.test(b.navigator && b.navigator.userAgent),
          T = function (P) {
            return parseFloat(P || "0");
          },
          S = function (P, F, L) {
            return (
              P === void 0 && (P = 0),
              F === void 0 && (F = 0),
              L === void 0 && (L = !1),
              new u((L ? F : P) || 0, (L ? P : F) || 0)
            );
          },
          E = c({
            devicePixelContentBoxSize: S(),
            borderBoxSize: S(),
            contentBoxSize: S(),
            contentRect: new f(0, 0, 0, 0),
          }),
          R = function (P, F) {
            if ((F === void 0 && (F = !1), h.has(P) && !F)) return h.get(P);
            if (m(P)) return h.set(P, E), E;
            var L = getComputedStyle(P),
              N = d(P) && P.ownerSVGElement && P.getBBox(),
              pe = !w && L.boxSizing === "border-box",
              _t = y.test(L.writingMode || ""),
              dt = !N && p.test(L.overflowY || ""),
              qe = !N && p.test(L.overflowX || ""),
              cr = N ? 0 : T(L.paddingTop),
              Yt = N ? 0 : T(L.paddingRight),
              pi = N ? 0 : T(L.paddingBottom),
              Ji = N ? 0 : T(L.paddingLeft),
              rT = N ? 0 : T(L.borderTopWidth),
              iT = N ? 0 : T(L.borderRightWidth),
              oT = N ? 0 : T(L.borderBottomWidth),
              sT = N ? 0 : T(L.borderLeftWidth),
              vg = Ji + Yt,
              yg = cr + pi,
              Zu = sT + iT,
              Ju = rT + oT,
              bg = qe ? P.offsetHeight - Ju - P.clientHeight : 0,
              xg = dt ? P.offsetWidth - Zu - P.clientWidth : 0,
              aT = pe ? vg + Zu : 0,
              lT = pe ? yg + Ju : 0,
              Ga = N ? N.width : T(L.width) - aT - xg,
              qa = N ? N.height : T(L.height) - lT - bg,
              cT = Ga + vg + xg + Zu,
              uT = qa + yg + bg + Ju,
              wg = c({
                devicePixelContentBoxSize: S(
                  Math.round(Ga * devicePixelRatio),
                  Math.round(qa * devicePixelRatio),
                  _t
                ),
                borderBoxSize: S(cT, uT, _t),
                contentBoxSize: S(Ga, qa, _t),
                contentRect: new f(Ji, cr, Ga, qa),
              });
            return h.set(P, wg), wg;
          },
          M = function (P, F, L) {
            var N = R(P, L),
              pe = N.borderBoxSize,
              _t = N.contentBoxSize,
              dt = N.devicePixelContentBoxSize;
            switch (F) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return dt;
              case l.BORDER_BOX:
                return pe;
              default:
                return _t;
            }
          },
          I = (function () {
            function P(F) {
              var L = R(F);
              (this.target = F),
                (this.contentRect = L.contentRect),
                (this.borderBoxSize = c([L.borderBoxSize])),
                (this.contentBoxSize = c([L.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  L.devicePixelContentBoxSize,
                ]));
            }
            return P;
          })(),
          G = function (P) {
            if (m(P)) return 1 / 0;
            for (var F = 0, L = P.parentNode; L; ) (F += 1), (L = L.parentNode);
            return F;
          },
          z = function () {
            var P = 1 / 0,
              F = [];
            r.forEach(function (dt) {
              if (dt.activeTargets.length !== 0) {
                var qe = [];
                dt.activeTargets.forEach(function (Yt) {
                  var pi = new I(Yt.target),
                    Ji = G(Yt.target);
                  qe.push(pi),
                    (Yt.lastReportedSize = M(Yt.target, Yt.observedBox)),
                    Ji < P && (P = Ji);
                }),
                  F.push(function () {
                    dt.callback.call(dt.observer, qe, dt.observer);
                  }),
                  dt.activeTargets.splice(0, dt.activeTargets.length);
              }
            });
            for (var L = 0, N = F; L < N.length; L++) {
              var pe = N[L];
              pe();
            }
            return P;
          },
          de = function (P) {
            r.forEach(function (L) {
              L.activeTargets.splice(0, L.activeTargets.length),
                L.skippedTargets.splice(0, L.skippedTargets.length),
                L.observationTargets.forEach(function (pe) {
                  pe.isActive() &&
                    (G(pe.target) > P
                      ? L.activeTargets.push(pe)
                      : L.skippedTargets.push(pe));
                });
            });
          },
          ye = function () {
            var P = 0;
            for (de(P); i(); ) (P = z()), de(P);
            return o() && a(), P > 0;
          },
          re,
          J = [],
          W = function () {
            return J.splice(0).forEach(function (P) {
              return P();
            });
          },
          X = function (P) {
            if (!re) {
              var F = 0,
                L = document.createTextNode(""),
                N = { characterData: !0 };
              new MutationObserver(function () {
                return W();
              }).observe(L, N),
                (re = function () {
                  L.textContent = "" + (F ? F-- : F++);
                });
            }
            J.push(P), re();
          },
          se = function (P) {
            X(function () {
              requestAnimationFrame(P);
            });
          },
          j = 0,
          me = function () {
            return !!j;
          },
          le = 250,
          fe = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          Z = [
            "resize",
            "load",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
            "keyup",
            "keydown",
            "mouseup",
            "mousedown",
            "mouseover",
            "mouseout",
            "blur",
            "focus",
          ],
          Je = function (P) {
            return P === void 0 && (P = 0), Date.now() + P;
          },
          Me = !1,
          ft = (function () {
            function P() {
              var F = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return F.schedule();
                });
            }
            return (
              (P.prototype.run = function (F) {
                var L = this;
                if ((F === void 0 && (F = le), !Me)) {
                  Me = !0;
                  var N = Je(F);
                  se(function () {
                    var pe = !1;
                    try {
                      pe = ye();
                    } finally {
                      if (((Me = !1), (F = N - Je()), !me())) return;
                      pe ? L.run(1e3) : F > 0 ? L.run(F) : L.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (P.prototype.observe = function () {
                var F = this,
                  L = function () {
                    return F.observer && F.observer.observe(document.body, fe);
                  };
                document.body ? L() : b.addEventListener("DOMContentLoaded", L);
              }),
              (P.prototype.start = function () {
                var F = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  Z.forEach(function (L) {
                    return b.addEventListener(L, F.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var F = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  Z.forEach(function (L) {
                    return b.removeEventListener(L, F.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          we = new ft(),
          Xt = function (P) {
            !j && P > 0 && we.start(), (j += P), !j && we.stop();
          },
          En = function (P) {
            return !d(P) && !v(P) && getComputedStyle(P).display === "inline";
          },
          Rn = (function () {
            function P(F, L) {
              (this.target = F),
                (this.observedBox = L || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (P.prototype.isActive = function () {
                var F = M(this.target, this.observedBox, !0);
                return (
                  En(this.target) && (this.lastReportedSize = F),
                  this.lastReportedSize.inlineSize !== F.inlineSize ||
                    this.lastReportedSize.blockSize !== F.blockSize
                );
              }),
              P
            );
          })(),
          he = (function () {
            function P(F, L) {
              (this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = F),
                (this.callback = L);
            }
            return P;
          })(),
          Hn = new WeakMap(),
          it = function (P, F) {
            for (var L = 0; L < P.length; L += 1)
              if (P[L].target === F) return L;
            return -1;
          },
          fn = (function () {
            function P() {}
            return (
              (P.connect = function (F, L) {
                var N = new he(F, L);
                Hn.set(F, N);
              }),
              (P.observe = function (F, L, N) {
                var pe = Hn.get(F),
                  _t = pe.observationTargets.length === 0;
                it(pe.observationTargets, L) < 0 &&
                  (_t && r.push(pe),
                  pe.observationTargets.push(new Rn(L, N && N.box)),
                  Xt(1),
                  we.schedule());
              }),
              (P.unobserve = function (F, L) {
                var N = Hn.get(F),
                  pe = it(N.observationTargets, L),
                  _t = N.observationTargets.length === 1;
                pe >= 0 &&
                  (_t && r.splice(r.indexOf(N), 1),
                  N.observationTargets.splice(pe, 1),
                  Xt(-1));
              }),
              (P.disconnect = function (F) {
                var L = this,
                  N = Hn.get(F);
                N.observationTargets.slice().forEach(function (pe) {
                  return L.unobserve(F, pe.target);
                }),
                  N.activeTargets.splice(0, N.activeTargets.length);
              }),
              P
            );
          })(),
          Ua = (function () {
            function P(F) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (typeof F != "function")
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              fn.connect(this, F);
            }
            return (
              (P.prototype.observe = function (F, L) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!g(F))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                fn.observe(this, F, L);
              }),
              (P.prototype.unobserve = function (F) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!g(F))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                fn.unobserve(this, F);
              }),
              (P.prototype.disconnect = function () {
                fn.disconnect(this);
              }),
              (P.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
              }),
              P
            );
          })();
        (n.ResizeObserver = Ua),
          (n.ResizeObserverEntry = I),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, "__esModule", { value: !0 });
      });
    },
  }),
  g2 = pn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        m = t ? Symbol.for("react.suspense_list") : 60120,
        g = t ? Symbol.for("react.memo") : 60115,
        v = t ? Symbol.for("react.lazy") : 60116,
        b = t ? Symbol.for("react.block") : 60121,
        h = t ? Symbol.for("react.fundamental") : 60117,
        p = t ? Symbol.for("react.responder") : 60118,
        y = t ? Symbol.for("react.scope") : 60119;
      function w(S) {
        if (typeof S == "object" && S !== null) {
          var E = S.$$typeof;
          switch (E) {
            case n:
              switch (((S = S.type), S)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return S;
                default:
                  switch (((S = S && S.$$typeof), S)) {
                    case l:
                    case f:
                    case v:
                    case g:
                    case a:
                      return S;
                    default:
                      return E;
                  }
              }
            case r:
              return E;
          }
        }
      }
      function T(S) {
        return w(S) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = v),
        (e.Memo = g),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (S) {
          return T(S) || w(S) === c;
        }),
        (e.isConcurrentMode = T),
        (e.isContextConsumer = function (S) {
          return w(S) === l;
        }),
        (e.isContextProvider = function (S) {
          return w(S) === a;
        }),
        (e.isElement = function (S) {
          return typeof S == "object" && S !== null && S.$$typeof === n;
        }),
        (e.isForwardRef = function (S) {
          return w(S) === f;
        }),
        (e.isFragment = function (S) {
          return w(S) === i;
        }),
        (e.isLazy = function (S) {
          return w(S) === v;
        }),
        (e.isMemo = function (S) {
          return w(S) === g;
        }),
        (e.isPortal = function (S) {
          return w(S) === r;
        }),
        (e.isProfiler = function (S) {
          return w(S) === s;
        }),
        (e.isStrictMode = function (S) {
          return w(S) === o;
        }),
        (e.isSuspense = function (S) {
          return w(S) === d;
        }),
        (e.isValidElementType = function (S) {
          return (
            typeof S == "string" ||
            typeof S == "function" ||
            S === i ||
            S === u ||
            S === s ||
            S === o ||
            S === d ||
            S === m ||
            (typeof S == "object" &&
              S !== null &&
              (S.$$typeof === v ||
                S.$$typeof === g ||
                S.$$typeof === a ||
                S.$$typeof === l ||
                S.$$typeof === f ||
                S.$$typeof === h ||
                S.$$typeof === p ||
                S.$$typeof === y ||
                S.$$typeof === b))
          );
        }),
        (e.typeOf = w);
    },
  }),
  v2 = pn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t
    ) {
      "use strict";
      t.exports = g2();
    },
  }),
  $u = pn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = v2(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(b) {
        return n.isMemo(b) ? s : a[b.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        g = Object.prototype;
      function v(b, h, p) {
        if (typeof h != "string") {
          if (g) {
            var y = m(h);
            y && y !== g && v(b, y, p);
          }
          var w = u(h);
          f && (w = w.concat(f(h)));
          for (var T = l(b), S = l(h), E = 0; E < w.length; ++E) {
            var R = w[E];
            if (!i[R] && !(p && p[R]) && !(S && S[R]) && !(T && T[R])) {
              var M = d(h, R);
              try {
                c(b, R, M);
              } catch {}
            }
          }
        }
        return b;
      }
      t.exports = v;
    },
  }),
  y2 = pn({
    "../../../node_modules/archy/index.js"(e, t) {
      t.exports = function n(r, i, o) {
        i === void 0 && (i = ""), o || (o = {});
        var s = function (u) {
          var f = {
            "\u2502": "|",
            "\u2514": "`",
            "\u251C": "+",
            "\u2500": "-",
            "\u252C": "-",
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == "string" && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || "").split(`
`),
          c =
            `
` +
            i +
            (a.length ? s("\u2502") : " ") +
            " ";
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                m = u.nodes && u.nodes.length,
                g = i + (d ? " " : s("\u2502")) + " ";
              return (
                i +
                s(d ? "\u2514" : "\u251C") +
                s("\u2500") +
                s(m ? "\u252C" : "\u2500") +
                " " +
                n(u, g, o).slice(i.length + 2)
              );
            })
            .join("")
        );
      };
    },
  }),
  b2 = pn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(h, p) {
          document.addEventListener
            ? h.addEventListener("scroll", p, !1)
            : h.attachEvent("scroll", p);
        }
        function r(h) {
          document.body
            ? h()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function p() {
                document.removeEventListener("DOMContentLoaded", p), h();
              })
            : document.attachEvent("onreadystatechange", function p() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", p), h());
              });
        }
        function i(h) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(h)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(h, p) {
          h.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            p +
            ";";
        }
        function s(h) {
          var p = h.a.offsetWidth,
            y = p + 100;
          return (
            (h.f.style.width = y + "px"),
            (h.c.scrollLeft = y),
            (h.b.scrollLeft = h.b.scrollWidth + 100),
            h.g !== p ? ((h.g = p), !0) : !1
          );
        }
        function a(h, p) {
          function y() {
            var T = w;
            s(T) && T.a.parentNode && p(T.g);
          }
          var w = h;
          n(h.b, y), n(h.c, y), s(h);
        }
        function l(h, p) {
          var y = p || {};
          (this.family = h),
            (this.style = y.style || "normal"),
            (this.weight = y.weight || "normal"),
            (this.stretch = y.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function m() {
          if (u === null)
            if (g() && /Apple/.test(_.navigator.vendor)) {
              var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                _.navigator.userAgent
              );
              u = !!h && 603 > parseInt(h[1], 10);
            } else u = !1;
          return u;
        }
        function g() {
          return d === null && (d = !!document.fonts), d;
        }
        function v() {
          if (f === null) {
            var h = document.createElement("div");
            try {
              h.style.font = "condensed 100px sans-serif";
            } catch {}
            f = h.style.font !== "";
          }
          return f;
        }
        function b(h, p) {
          return [h.style, h.weight, v() ? h.stretch : "", "100px", p].join(
            " "
          );
        }
        (l.prototype.load = function (h, p) {
          var y = this,
            w = h || "BESbswy",
            T = 0,
            S = p || 3e3,
            E = new Date().getTime();
          return new Promise(function (R, M) {
            if (g() && !m()) {
              var I = new Promise(function (z, de) {
                  function ye() {
                    new Date().getTime() - E >= S
                      ? de(Error("" + S + "ms timeout exceeded"))
                      : document.fonts
                          .load(b(y, '"' + y.family + '"'), w)
                          .then(function (re) {
                            1 <= re.length ? z() : setTimeout(ye, 25);
                          }, de);
                  }
                  ye();
                }),
                G = new Promise(function (z, de) {
                  T = setTimeout(function () {
                    de(Error("" + S + "ms timeout exceeded"));
                  }, S);
                });
              Promise.race([G, I]).then(function () {
                clearTimeout(T), R(y);
              }, M);
            } else
              r(function () {
                function z() {
                  var Z;
                  (Z =
                    (W != -1 && X != -1) ||
                    (W != -1 && se != -1) ||
                    (X != -1 && se != -1)) &&
                    ((Z = W != X && W != se && X != se) ||
                      (c === null &&
                        ((Z = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          _.navigator.userAgent
                        )),
                        (c =
                          !!Z &&
                          (536 > parseInt(Z[1], 10) ||
                            (parseInt(Z[1], 10) === 536 &&
                              11 >= parseInt(Z[2], 10))))),
                      (Z =
                        c &&
                        ((W == j && X == j && se == j) ||
                          (W == me && X == me && se == me) ||
                          (W == le && X == le && se == le)))),
                    (Z = !Z)),
                    Z &&
                      (fe.parentNode && fe.parentNode.removeChild(fe),
                      clearTimeout(T),
                      R(y));
                }
                function de() {
                  if (new Date().getTime() - E >= S)
                    fe.parentNode && fe.parentNode.removeChild(fe),
                      M(Error("" + S + "ms timeout exceeded"));
                  else {
                    var Z = document.hidden;
                    (Z === !0 || Z === void 0) &&
                      ((W = ye.a.offsetWidth),
                      (X = re.a.offsetWidth),
                      (se = J.a.offsetWidth),
                      z()),
                      (T = setTimeout(de, 50));
                  }
                }
                var ye = new i(w),
                  re = new i(w),
                  J = new i(w),
                  W = -1,
                  X = -1,
                  se = -1,
                  j = -1,
                  me = -1,
                  le = -1,
                  fe = document.createElement("div");
                (fe.dir = "ltr"),
                  o(ye, b(y, "sans-serif")),
                  o(re, b(y, "serif")),
                  o(J, b(y, "monospace")),
                  fe.appendChild(ye.a),
                  fe.appendChild(re.a),
                  fe.appendChild(J.a),
                  document.body.appendChild(fe),
                  (j = ye.a.offsetWidth),
                  (me = re.a.offsetWidth),
                  (le = J.a.offsetWidth),
                  de(),
                  a(ye, function (Z) {
                    (W = Z), z();
                  }),
                  o(ye, b(y, '"' + y.family + '",sans-serif')),
                  a(re, function (Z) {
                    (X = Z), z();
                  }),
                  o(re, b(y, '"' + y.family + '",serif')),
                  a(J, function (Z) {
                    (se = Z), z();
                  }),
                  o(J, b(y, '"' + y.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((_.FontFaceObserver = l),
              (_.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function gm(e, t) {
  let n = { style: t };
  return x.isValidElement(e) ? x.cloneElement(e, n) : x.createElement(e, n);
}
var x2 = class extends Error {},
  au = class extends Error {},
  w2 = class extends Ee {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof x2)) {
        let n = new au();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return gm(e, t);
    }
  },
  S2 = ":([a-z]\\w*)",
  Yi = new RegExp(S2, "gi");
function X1(e, t) {
  return e.replace(Yi, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function Y1(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = wS(e),
    [r, i] = wS(t),
    o = k2(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function wS(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var qp = 46,
  qo = 47,
  di = (e, t) => e.charCodeAt(t),
  SS = (e, t) => e.lastIndexOf(t),
  Yo = (e, t, n) => e.slice(t, n);
function k2(e, t) {
  if (e === t || ((e = "/" + CS(e)), (t = "/" + CS(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = di(e, n + c);
    if (f !== di(t, o + c)) break;
    f === qo && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (di(t, o + c) === qo) return Yo(t, o + c + 1);
      if (c === 0) return Yo(t, o + c);
    } else i > a && (di(e, n + c) === qo ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || di(e, c) === qo) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${Yo(t, o + l)}`;
}
var C2 = !1,
  Kc = "/",
  kS = (e) => e === qo;
function CS(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = di(e, s);
    else {
      if (kS(o)) break;
      o = qo;
    }
    if (kS(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            di(t, t.length - 1) !== qp ||
            di(t, t.length - 2) !== qp
          ) {
            if (t.length > 2) {
              let a = SS(t, Kc);
              a === -1
                ? ((t = ""), (n = 0))
                : ((t = Yo(t, 0, a)), (n = t.length - 1 - SS(t, Kc))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          C2 && ((t += t.length > 0 ? `${Kc}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${Kc}${Yo(e, r + 1, s)}`)
            : (t = Yo(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === qp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function K1(e) {
  let t = typeof _ < "u" ? _.location.search : "";
  return t ? T2(t, e) : e;
}
function T2(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function Sa(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function qi(e) {
  return typeof e == "string";
}
var E2 = "preload";
function Q1(e) {
  return typeof e == "object" && e !== null && !x.isValidElement(e) && E2 in e;
}
function MN(e) {
  let t = x.lazy(e),
    n,
    r,
    i = x.forwardRef(function (s, a) {
      return x.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function Dm(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function R2(e) {
  return /bot|-google|google-|yandex|ia_archiver/iu.test(e);
}
function Z1(e) {
  if ("scheduler" in _) {
    if ("yield" in scheduler) return scheduler.yield(e);
    if ("postTask" in scheduler) return scheduler.postTask(() => {}, e);
  }
  return e?.priority === "user-blocking"
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t);
      });
}
async function P2(e, t) {
  return await Z1(t), e();
}
function ka(e) {
  return new Promise((t) => {
    setTimeout(t, 100),
      requestAnimationFrame(() => {
        P2(t, e);
      });
  });
}
function J1(e, t, n) {
  st(() => {
    (async () => {
      await ka(n), e();
    })();
  }, t);
}
var xu = () => {};
async function F2(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    m = Array.from(u.matchAll(Yi)),
    g = await Promise.all(
      m.map(async (p) => {
        var y;
        let w = p?.[0],
          T = p?.[1];
        if (!w || !T)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let S = o[T];
        if (!S || !qi(S))
          throw new Error(`No slug found for path variable ${T}`);
        let E = await ((y = s?.[i]) === null || y === void 0
          ? void 0
          : y.call(s));
        if (!E || !t) return S;
        let R = await E.getRecordIdBySlug(S, t);
        if (!R) return S;
        let M = await E.getSlugByRecordId(R, n);
        if (!M) {
          f = !0;
          let I = await E.getSlugByRecordId(R, r);
          return I && (d[T] = I), I ?? S;
        }
        return (d[T] = M), M;
      })
    ),
    v = 0,
    b = "",
    h = !1;
  for (let p = 0; p < m.length; p++) {
    let y = m[p],
      w = g[p];
    !y ||
      !w ||
      ((b += u.substring(v, y.index)),
      (v =
        ((a = y.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = y[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (b += g[p]),
      (h = !0));
  }
  return h && (u = b), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function _2({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await F2(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = K1(l.path)),
    l
  );
}
function I2(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var O2 = { global: void 0, routes: {} },
  ek = x.createContext(O2);
function zN({ children: e, value: t }) {
  return k(ek.Provider, { value: t, children: e });
}
function L2() {
  return x.useContext(ek);
}
var Xp = 10,
  M2 = 1e4;
function A2(e) {
  let t = Xp,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < M2; ) (n = e.next(t)), r.push(n.value), (t += Xp);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - Xp }
  );
}
var Ir = (e) => `--view-transition-${e}`;
function vm(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function tk(e) {
  let { innerWidth: t, innerHeight: n } = _,
    [r, i] = vm(e.x),
    [o, s] = vm(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var D2 = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${Ir("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${Ir("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${Ir("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  V2 = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = tk(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, _.innerWidth - n),
            Math.max(r, _.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  z2 = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = tk(e),
        i = _.innerHeight - r,
        o = _.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  B2 = {
    makeKeyframe: (e, t, n) => {
      let [, r] = vm(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${Ir("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${Ir("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${Ir("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  $2 = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${Ir("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${Ir("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${Ir("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  N2 = { circle: V2, conic: D2, inset: z2, blinds: B2, wipe: $2 },
  H2 = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function TS(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function j2(e) {
  return e ? N2[e] : void 0;
}
function ES(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (W2(t)) {
    let { easing: c, duration: u } = A2(
      Ss({ keyframes: [0, 1], ...U2(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let s = j2((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = TS(n, "start", e, s),
    l = TS({ ...H2, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
function W2(e) {
  return e.type === "spring";
}
function U2(e) {
  return e.durationBasedSpring
    ? { duration: e.duration, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var nk = "view-transition-styles",
  G2 = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function q2({ exit: e = G2, enter: t }) {
  let n = document.createElement("style");
  n.id = nk;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += ES("exit", e)),
    (r += ES("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
var X2 = (() =>
  typeof _ < "u" ? _.requestIdleCallback || _.setTimeout : setTimeout)();
function Y2() {
  X2(() => {
    ee.render(() => {
      performance.mark("framer-vt-remove");
      let e = document.getElementById(nk);
      e && document.head.removeChild(e);
    });
  });
}
var RS = () => {};
function K2() {
  return !!document.startViewTransition;
}
function Q2(e) {
  return new Promise((t) => {
    ee.render(() => {
      performance.mark("framer-vt-style"), q2(e), t();
    });
  });
}
async function PS(e, t, n) {
  if (!K2()) {
    e();
    return;
  }
  if ((await Q2(t), n?.aborted)) return;
  performance.mark("framer-vt");
  let r = document.startViewTransition(async () => {
    performance.mark("framer-vt-freeze"),
      !n?.aborted &&
        (n?.addEventListener("abort", () => r.skipTransition()), await e());
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark("framer-vt-unfreeze");
      })
      .catch(RS),
    Promise.all([r.ready, r.finished])
      .then(() => {
        performance.mark("framer-vt-finished"), Y2();
      })
      .catch(RS),
    r
  );
}
function rk() {
  let e = L2(),
    t = D(void 0);
  return (
    $(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    ie(
      (n, r, i, o, s) => {
        let a = I2(n, r, e);
        if (a) {
          let l = new Promise((f) => {
              t.current = f;
            }),
            c = async () => {
              i(), await l;
            },
            u = async () => (
              await ka({ priority: "user-blocking", signal: s }).catch(xu),
              PS(c, a, s)
            );
          return o ? u() : PS(c, a);
        } else return i();
      },
      [e]
    )
  );
}
function ik(e) {
  let t = `${e}-start`,
    n = `${e}-end`,
    r = D(void 0);
  return (
    J1(
      () => {
        r.current && (r.current(), (r.current = void 0));
      },
      void 0,
      { priority: "user-blocking" }
    ),
    ie(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      return (
        performance.mark(t),
        i
          .finally(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch((o) => {
            console.error(o);
          })
      );
    }, [e, t, n])
  );
}
async function FS(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  },
  l = !1,
  c = !1
) {
  let { path: u } = t;
  if (u)
    try {
      let f = Vm(t, {
          currentRoutePath: n,
          currentPathVariables: r,
          hash: i,
          pathVariables: o,
          preserveQueryParams: a,
        }),
        d = ok({ routeId: e, hash: i, pathVariables: o, localeId: s }, f, l, c);
      l || (await d);
    } catch {}
}
function Z2(e) {
  let t = "routeId";
  return Sa(e) && qi(e[t]);
}
function J2(e, t, n = !1) {
  performance.mark("framer-history-replace"),
    (n ? _.history.__proto__.replaceState : _.history.replaceState).call(
      _.history,
      e,
      "",
      t
    );
}
var Qc = !0,
  _S = (() => {
    if (typeof Fe > "u") return !1;
    let e = Fe.userAgent,
      t = e.indexOf("Chrome/"),
      n = +e.slice(t + 7, e.indexOf(".", t));
    return n > 101 && n < 128;
  })();
async function ok(e, t, n = !1, r = !1) {
  if (
    (n && (await ka({ priority: "user-blocking" })),
    performance.mark("framer-history-push"),
    !r)
  ) {
    _.history.pushState(e, "", t);
    return;
  }
  let i = !1,
    o;
  Qc &&
    ((o = () => {
      var s;
      if (((i = !0), _S)) return;
      let a =
        "Popstate called after intercept(). Please report this to the Framer team.";
      console.error(a),
        (s = _.__framer_events) === null ||
          s === void 0 ||
          s.push([
            "published_site_load_recoverable_error",
            { message: a, userAgent: Fe.userAgent },
          ]);
    }),
    _.addEventListener("popstate", o, { once: !0 })),
    _S && Qc
      ? _.history.__proto__.pushState.call(_.history, e, "", t)
      : _.history.pushState(e, "", t),
    Qc &&
      queueMicrotask(() => {
        i || ((Qc = !1), _.removeEventListener("popstate", o));
      });
}
function eL({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  st(() => {
    e ||
      (performance.mark("framer-history-set-initial-state"),
      J2({ routeId: t, pathVariables: n, localeId: r }, void 0, !0));
  }, []);
}
function tL(e, t) {
  let n = rk(),
    r = ik("framer-route-change-popstate"),
    i = D(void 0),
    o = ie(
      async ({ state: a }) => {
        var l, c, u, f, d, m;
        if (
          (!((l = _.navigation) === null || l === void 0) &&
            l.transition &&
            ((u =
              (c = _.navigation) === null || c === void 0
                ? void 0
                : c.transition) === null || u === void 0
              ? void 0
              : u.navigationType) !== "traverse") ||
          !Sa(a)
        )
          return;
        let { routeId: g, hash: v, pathVariables: b, localeId: h } = a;
        if (!qi(g)) return;
        r();
        let p = () => {
            t(
              g,
              qi(h) ? h : void 0,
              qi(v) ? v : void 0,
              Sa(b) ? b : void 0,
              !1,
              !0
            );
          },
          y = await n(e.current, g, p, !1);
        y
          ? y.updateCallbackDone
              .then(
                (f = i.current) === null || f === void 0 ? void 0 : f.resolve
              )
              .catch(
                (d = i.current) === null || d === void 0 ? void 0 : d.reject
              )
          : (m = i.current) === null || m === void 0 || m.resolve();
      },
      [e, r, t, n]
    ),
    s = ie((a) => {
      a.navigationType === "traverse" &&
        a.intercept({
          async handler() {
            await new Promise((l, c) => {
              i.current = { resolve: l, reject: c };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  $(() => {
    var a;
    return (
      _.addEventListener("popstate", o),
      (a = _.navigation) === null ||
        a === void 0 ||
        a.addEventListener("navigate", s),
      () => {
        var l;
        _.removeEventListener("popstate", o),
          (l = _.navigation) === null ||
            l === void 0 ||
            l.removeEventListener("navigate", s);
      }
    );
  }, [o, s]);
}
function nL(e, t, n) {
  let r = Dm(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Yi, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function Vm(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  var l;
  let c = t ?? "/";
  n && (c = c.replace(Yi, (g, v) => String(n[v] || g)));
  let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
  i && (f = f.replace(Yi, (g, v) => String(i[v] || g)));
  let d = nL(r, e, o),
    m = c === f && d;
  return (
    s && (f = Y1(c, f)), (a || m) && (f = K1(f)), d && (f = `${f}#${d}`), f
  );
}
async function rL(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${X1(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((_.location.href = _.location.origin + i), !0)
    : !1;
}
async function iL(e) {
  let t = await _2(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (!qi(t.path)) throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await rL(e.route, t.pathVariables, e.nextLocale))
      )
        return;
    } catch {}
    return t;
  }
}
function oL() {
  let e = D(Promise.resolve()),
    t = D(),
    n = ie((r) => {
      if (r.navigationType === "traverse") return;
      let i = t.current;
      i?.signal.addEventListener("abort", () => {
        i.abort("user aborted");
      }),
        r.intercept({ handler: () => e.current });
    }, []);
  return ie(
    (r, i, o) => {
      if (!_.navigation) {
        i();
        return;
      }
      (e.current = r),
        (t.current = o),
        _.navigation.addEventListener("navigate", n),
        i(!0),
        r.catch(xu).finally(() => {
          _.navigation.removeEventListener("navigate", n);
        });
    },
    [n]
  );
}
function Pr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var zn = !1;
function NN() {
  (zn = !0), performance.mark("framer-hydration-start");
}
var IS = !1,
  OS = !1,
  LS = !1;
function sL() {
  let e = "framer-hydration-router";
  ot(() => {
    IS || !zn || ((IS = !0), performance.mark(`${e}-insertion-effect`));
  }, []),
    st(() => {
      OS || !zn || ((OS = !0), performance.mark(`${e}-layout-effect`));
    }, []),
    $(() => {
      LS || !zn || ((LS = !0), performance.mark(`${e}-effect`));
    }, []);
}
var MS = !1,
  AS = !1,
  DS = !1;
function aL() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}render-end`;
  return (
    ot(() => {
      MS ||
        !zn ||
        ((MS = !0),
        performance.mark(i),
        Pr(`${e}render`, `${e}start`, i),
        performance.mark(`${e}insertion-effects-start`));
    }, []),
    st(() => {
      AS ||
        !zn ||
        ((AS = !0),
        performance.mark(`${e}layout-effects-start`),
        requestAnimationFrame(() => {
          var o, s, a;
          performance.mark(r),
            Pr(
              `${e}uho`,
              (s =
                (o = performance.getEntriesByName(n)[0]) === null ||
                o === void 0
                  ? void 0
                  : o.name) !== null && s !== void 0
                ? s
                : (a = performance.getEntriesByName(t)[0]) === null ||
                  a === void 0
                ? void 0
                : a.name,
              r
            );
        }));
    }, []),
    $(() => {
      var o;
      if (DS || !zn) return;
      DS = !0;
      let s = `${e}effects-start`;
      performance.mark(s),
        ((o = performance.getEntriesByName(r)[0]) === null || o === void 0
          ? void 0
          : o.name) ||
          (Pr(`${e}commit`, t, s), performance.mark(`${e}effects-sync`));
    }, []),
    null
  );
}
var VS = !1,
  zS = !1,
  BS = !1,
  $S = !1;
function lL() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}start`,
    o = `${e}insertion-effects-end`,
    s = `${e}first-paint`,
    a = `${e}browser-raf-end`;
  return (
    ot(() => {
      VS ||
        !zn ||
        ((VS = !0),
        performance.mark(o),
        Pr(`${e}insertion-effects`, `${e}insertion-effects-start`, o));
    }, []),
    st(() => {
      zS ||
        !zn ||
        ((zS = !0),
        performance.mark(t),
        Pr(`${e}layout-effects`, `${e}layout-effects-start`, t),
        requestAnimationFrame(() => {
          performance.mark(a), Pr(`${e}raf`, r, a);
        }));
    }, []),
    $(() => {
      var l, c, u;
      BS ||
        !zn ||
        ((BS = !0),
        performance.mark(n),
        Pr(
          `${e}effects`,
          (c =
            (l = performance.getEntriesByName(s)[0]) === null || l === void 0
              ? void 0
              : l.name) !== null && c !== void 0
            ? c
            : (u = performance.getEntriesByName(`${e}effects-start`)[0]) ===
                null || u === void 0
            ? void 0
            : u.name,
          n
        ));
    }, []),
    J1(
      () => {
        $S ||
          !zn ||
          (($S = !0),
          performance.mark(s),
          Pr(`${e}time-to-first-paint`, i, s),
          Pr(`${e}browser-render`, a, s));
      },
      [],
      { priority: "user-blocking" }
    ),
    null
  );
}
function cL() {
  return aL(), null;
}
function uL() {
  return lL(), null;
}
var NS = { Start: cL, End: uL },
  xa = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
  ],
  sk = (e) => {
    var t, n;
    !(
      (n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) ===
        null || n === void 0
    ) &&
      n.call(t, "#main") &&
      (e.stopPropagation(),
      performance.mark("framer-react-event-handling-prevented"));
  },
  ak = !1;
function jN() {
  if (!xa) return;
  (ak = !0), performance.mark("framer-react-event-handling-start");
  let e = { capture: !0 };
  xa.forEach((t) => document.body.addEventListener(t, sk, e));
}
function fL() {
  return (
    $(() => {
      if (!ak || !xa) return;
      let e = { capture: !0 };
      xa.forEach((t) => document.body.removeEventListener(t, sk, e)),
        (xa = void 0),
        performance.mark("framer-react-event-handling-end");
    }, []),
    null
  );
}
var zm = !1;
function UN() {
  zm = !0;
}
function dL() {
  zm = !1;
}
function hL() {
  let e = D(typeof _ > "u" || zm);
  return (
    $(() => {
      e.current = !1;
    }, []),
    e
  );
}
function pL(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
function lk(e) {
  return x.useCallback((t) => e[t], [e]);
}
var Bm = (() => x.createContext({}))();
function mL({ api: e, children: t }) {
  return k(Bm.Provider, { value: e, children: t });
}
function Nu() {
  return x.useContext(Bm);
}
function gL({ routes: e, children: t }) {
  let n = lk(e);
  return k(Bm.Provider, { value: { getRoute: n }, children: t });
}
var vL = class extends Ee {
    constructor() {
      super(...arguments), (this.state = { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        e instanceof au ||
          console.error("Derived error in SuspenseErrorBoundary", e),
        { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      if (e instanceof au) return;
      let r = t?.componentStack;
      if (
        (console.error("Caught error in SuspenseErrorBoundary", e, r),
        typeof _ < "u")
      ) {
        let i =
          e instanceof Error && typeof e.stack == "string" ? e.stack : null;
        (n = _.__framer_events) === null ||
          n === void 0 ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), stack: i, componentStack: i ? void 0 : r },
          ]);
      }
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (this.state.error instanceof au) throw this.state.error.cause;
      return k(os, { children: this.props.fallbackChildren });
    }
  },
  yL = (() => (typeof _ < "u" ? new Promise(() => {}) : null))();
function bL() {
  if (typeof _ > "u") return null;
  throw yL;
}
function ck({ children: e }) {
  return k(vL, {
    fallbackChildren: e,
    children: k(os, { fallback: k(bL, {}), children: e }),
  });
}
var HS = "default";
function xL() {
  let [e, t] = x.useState(0);
  return [e, x.useCallback(() => t((n) => n + 1), [])];
}
var wL = async () => {},
  SL = { activeLocale: null, locales: [], setLocale: wL },
  uk = x.createContext(SL);
function kL() {
  return x.useContext(uk);
}
function jS(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    RL(r, t);
    return;
  }
  n || _.scrollTo(0, 0);
}
function CL(e) {
  let t = D([]);
  return (
    st(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    ie((n) => {
      t.current.push(n);
    }, [])
  );
}
function TL(e) {
  let t = oL(),
    n = ik("framer-route-change"),
    r = D(void 0);
  return ie(
    async (i, o, s = !0) => {
      var a;
      if ((dL(), !e))
        return (
          await o?.(),
          i(),
          n(),
          new Promise((m) => {
            m();
          })
        );
      (a = r.current) === null || a === void 0 || a.abort();
      let l = s ? new AbortController() : void 0;
      r.current = l;
      let c = l?.signal,
        u = n();
      if (!o) return (r.current = void 0), i(c), u;
      i(c),
        await ka({ priority: "user-visible", signal: c }).catch(xu),
        await ka({ priority: "user-visible", signal: c }).catch(xu);
      let f,
        d = new Promise((m, g) => {
          (f = m), c?.aborted ? g() : c?.addEventListener("abort", g);
        });
      return (
        t(d, o, l),
        u.then(() => {
          f();
        })
      );
    },
    [e, n, t]
  );
}
function EL({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
  enableAsyncURLUpdates: u = !1,
}) {
  sL(),
    eL({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: a,
    });
  let f = rk(),
    [d, m] = xL(),
    g = CL(d),
    v = TL(u),
    b = D(r),
    h = D(n),
    p = D(a),
    y = p.current,
    w = ae(() => {
      var J;
      return (J = l.find(({ id: W }) => (y ? W === y : W === HS))) !== null &&
        J !== void 0
        ? J
        : null;
    }, [y, l]),
    T = ae(
      () => ({
        activeLocale: w,
        locales: l,
        setLocale: async (J) => {
          let W;
          qi(J) ? (W = J) : Sa(J) && (W = J.id);
          let X = l.find(({ id: le }) => le === HS),
            se = l.find(({ id: le }) => le === W);
          if (!se) return;
          let j = b.current,
            me = s[j];
          if (me)
            try {
              let le = await iL({
                currentLocale: w,
                nextLocale: se,
                route: me,
                routeId: j,
                defaultLocale: X,
                pathVariables: h.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!le) return;
              let fe = h.current,
                Z = Z2(_.history.state)
                  ? _.history.state.paginationInfo
                  : void 0,
                Je = le.path;
              (h.current = le.pathVariables),
                (p.current = se.id),
                v(
                  () => {
                    f(j, j, () => dr(m), u);
                  },
                  async (ft = !1) => {
                    if (Je)
                      return ok(
                        {
                          routeId: j,
                          pathVariables: fe,
                          localeId: se.id,
                          paginationInfo: Z,
                        },
                        Je,
                        !1,
                        ft
                      );
                  },
                  !1
                );
            } catch {}
        },
      }),
      [w, o, u, m, l, c, s, v, f]
    ),
    S = ie(
      (J, W, X, se, j = !1, me = !1, le) => {
        let fe = b.current;
        if (
          ((b.current = J),
          (h.current = se),
          (p.current = W),
          g(() => {
            jS(X, j, me);
          }),
          me)
        ) {
          dr(m);
          return;
        }
        v((Z) => {
          f(fe, J, () => dr(m), u, Z);
        }, le);
      },
      [u, m, g, v, f]
    );
  tL(b, S);
  let E = ie(
      async (J, W, X, se) => {
        var j, me;
        let le = s[J];
        if (X) {
          let we = new Set(),
            Xt = (j = le?.path) !== null && j !== void 0 ? j : "/";
          for (let En of Xt.matchAll(Yi)) {
            let Rn = En[1];
            if (Rn === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            we.add(Rn);
          }
          X = Object.fromEntries(
            Object.entries(X).filter(([En]) => we.has(En))
          );
        }
        let fe = Dm(le, W),
          Z = h.current,
          Je = p.current;
        if (
          pL(
            { routeId: b.current, pathVariables: Z },
            { routeId: J, pathVariables: X }
          )
        ) {
          jS(fe, se, !1);
          let we = s[J];
          if (
            ((me = _.history.state) === null || me === void 0
              ? void 0
              : me.hash) === W ||
            t ||
            !we
          )
            return;
          let Xt = FS(
            J,
            we,
            {
              currentRoutePath: we.path,
              currentPathVariables: Z,
              pathVariables: X,
              hash: W,
              localeId: Je,
              preserveQueryParams: c,
            },
            u
          );
          return u ? void 0 : await Xt;
        }
        if (!le) return;
        let Me = s[b.current];
        S(
          J,
          Je,
          fe,
          X,
          se,
          !1,
          t
            ? void 0
            : async (we = !1) =>
                FS(
                  J,
                  le,
                  {
                    currentRoutePath: Me?.path,
                    currentPathVariables: Z,
                    hash: W,
                    pathVariables: X,
                    localeId: Je,
                    preserveQueryParams: c,
                  },
                  !1,
                  we
                )
        );
      },
      [s, S, t, c, u]
    ),
    R = lk(s),
    M = b.current,
    I = h.current,
    G = ae(
      () => ({
        navigate: E,
        getRoute: R,
        currentRouteId: M,
        currentPathVariables: I,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [E, R, M, I, s, o, c]
    ),
    z = s[b.current];
  if (!z) throw new Error(`Router cannot find route for ${b.current}`);
  let de = !w || !z.includedLocales || z.includedLocales.includes(w.id),
    ye = z.path && I ? X1(z.path, I) : z.path,
    re = String(y) + ye;
  return k(mL, {
    api: G,
    children: k(uk.Provider, {
      value: T,
      children: ue(ck, {
        children: [
          k(w2, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: d,
            children: ue(
              ur,
              {
                children: [k(NS.Start, {}), de ? gm(z.page, e) : i && gm(i, e)],
              },
              re
            ),
          }),
          k(fL, {}),
          k(NS.End, {}),
        ],
      }),
    }),
  });
}
function RL(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var Zc, Yp, WS;
function PL(e) {
  if (WS !== e) {
    Zc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Zc[n] = { path: n, depth: FL(n), routeId: t });
    (Yp = Object.values(Zc)),
      Yp.sort(({ depth: t }, { depth: n }) => n - t),
      (WS = e);
  }
  return [Zc, Yp];
}
function fk(e, t, n = !0, r = []) {
  let [i, o] = PL(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: m }) => m === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let m = r.find(({ slug: g }) => g === "");
      m && (a = m.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = US(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: m } of o) {
    let g = US(l, d);
    if (g.isMatch)
      return { routeId: m, localeId: a, pathVariables: g.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function FL(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function US(e, t) {
  let n = [],
    i = _L(t).replace(Yi, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function _L(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var IL = "page";
function GS(e) {
  return Sa(e) && IL in e && e.page !== void 0;
}
var OL = (() => x.createContext(void 0))();
function $m() {
  var e;
  let t = Nu(),
    n = A(OL),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
var Nm = (() => typeof _ < "u" && !R2(Fe.userAgent))();
function LL(e, t = !0) {
  let { getRoute: n } = Nu();
  $(() => {
    if (!(!n || !t || !Nm)) for (let r of e) dk(n(r));
  }, [e, n, t]);
}
async function dk(e) {
  if (!Nm || !e) return;
  let t = e.page;
  if (!(!t || !Q1(t))) {
    await Z1();
    try {
      await t.preload();
    } catch {}
  }
}
var qS = new Set();
function Ca(e, ...t) {
  qS.has(e) || (qS.add(e), console.warn(e, ...t));
}
function ML(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  Ca(i);
}
var hk = class {
    constructor() {
      C(this, "observers", new Set()), C(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  rt = (() => {
    function e(t) {
      return (
        ML(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Bn(t) ? t : new DL(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Bn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Bn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  XS = "onUpdate",
  YS = "finishTransaction";
function Bn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    XS in e &&
    e[XS] instanceof Function &&
    YS in e &&
    e[YS] instanceof Function
  );
}
function AL(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = rt(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var DL = class {
  constructor(e) {
    (this.value = e), C(this, "observers", new hk());
  }
  static interpolationFor(e, t) {
    if (Bn(e)) return AL(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    Bn(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Jc(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function KS(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function cn(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: KS(i.x, o.x),
      y: KS(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      (o += c.x), (s += c.y);
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(cn || (cn = {}));
var ym = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function ai(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function Ko(e) {
  return !isNaN(e) && isFinite(e);
}
function li(e) {
  let t = bm(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function bm(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var VL = (() => p2().Hsluv)(),
  Gt = new VL();
function zL(e, t, n) {
  return (
    (Gt.rgb_r = e / 255),
    (Gt.rgb_g = t / 255),
    (Gt.rgb_b = n / 255),
    Gt.rgbToHsluv(),
    { h: Gt.hsluv_h, s: Gt.hsluv_s, l: Gt.hsluv_l }
  );
}
function BL(e, t, n, r = 1) {
  return (
    (Gt.hsluv_h = e),
    (Gt.hsluv_s = t),
    (Gt.hsluv_l = n),
    Gt.hsluvToRgb(),
    { r: Gt.rgb_r * 255, g: Gt.rgb_g * 255, b: Gt.rgb_b * 255, a: r }
  );
}
function eu(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function $L(e, t, n) {
  return {
    r: Ko(e) ? Dt(e, 255) * 255 : 0,
    g: Ko(t) ? Dt(t, 255) * 255 : 0,
    b: Ko(n) ? Dt(n, 255) * 255 : 0,
  };
}
function QS(e, t, n, r) {
  let i = [
    Qp(Math.round(e).toString(16)),
    Qp(Math.round(t).toString(16)),
    Qp(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Hm(e, t, n) {
  let r,
    i,
    o = Dt(e, 255),
    s = Dt(t, 255),
    a = Dt(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Kp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function NL(e, t, n) {
  let r, i, o;
  if (
    ((e = Dt(e, 360)), (t = Dt(t * 100, 100)), (n = Dt(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = Kp(a, s, e + 1 / 3)), (i = Kp(a, s, e)), (o = Kp(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function ZS(e, t, n) {
  (e = Dt(e, 255)), (t = Dt(t, 255)), (n = Dt(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function HL(e, t, n) {
  (e = Dt(e, 360) * 6), (t = Dt(t * 100, 100)), (n = Dt(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Dt(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    jL(e) && (e = "100%");
    let i = WL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function jL(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function WL(e) {
  return typeof e == "string" && e.includes("%");
}
function Qp(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var rr = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function jm(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = ym[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = rr.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = rr.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb",
      }
    : (i = rr.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: li(i[2] ?? ""),
        l: li(i[3] ?? ""),
        a: 1,
        format: "hsl",
      }
    : (i = rr.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: li(i[2] ?? ""),
        l: li(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl",
      }
    : (i = rr.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: li(i[2] ?? ""),
        v: li(i[3] ?? ""),
        a: 1,
        format: "hsv",
      }
    : (i = rr.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: li(i[2] ?? ""),
        v: li(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv",
      }
    : (i = rr.hex8.exec(n))
    ? {
        r: ln(i[1] ?? ""),
        g: ln(i[2] ?? ""),
        b: ln(i[3] ?? ""),
        a: JS(i[4] ?? ""),
        format: r ? "name" : "hex",
      }
    : (i = rr.hex6.exec(n))
    ? {
        r: ln(i[1] ?? ""),
        g: ln(i[2] ?? ""),
        b: ln(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex",
      }
    : (i = rr.hex4.exec(n))
    ? {
        r: ln(`${i[1]}${i[1]}`),
        g: ln(`${i[2]}${i[2]}`),
        b: ln(`${i[3]}${i[3]}`),
        a: JS(i[4] + "" + i[4]),
        format: r ? "name" : "hex",
      }
    : (i = rr.hex3.exec(n))
    ? {
        r: ln(`${i[1]}${i[1]}`),
        g: ln(`${i[2]}${i[2]}`),
        b: ln(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex",
      }
    : !1;
}
function ln(e) {
  return parseInt(e, 16);
}
function JS(e) {
  return ln(e) / 255;
}
var e1 = new Map(),
  U = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = e1.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (e1.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = UL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? jm(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => QS(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...zL(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = ZS(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = ZS(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = QS(o.r, o.g, o.b, !0);
        for (let a of Object.keys(ym)) if (ym[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: ai(a, [0, 1], [o.r, s.r], l),
            g: ai(a, [0, 1], [o.g, s.g], l),
            b: ai(a, [0, 1], [o.b, s.b], l),
            a: ai(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let m = f.h,
            g = d.h,
            v = g - m;
          v > 180 ? (v = g - 360 - m) : v < -180 && (v = g + 360 - m);
          let b = {
            h: ai(a, [0, 1], [m, m + v], l),
            s: ai(a, [0, 1], [f.s, d.s], l),
            l: ai(a, [0, 1], [f.l, d.l], l),
            a: ai(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(b)) : (u = e(BL(b.h, b.s, b.l, b.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => Hm(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          m = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * m + (a * (f - m)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = ks([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function UL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = xm({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = GL(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = xm(e))
          : (i = pk(e))),
    i
  );
}
function GL(e) {
  let t = jm(e);
  if (t) return t.format === "hsl" ? pk(t) : t.format === "hsv" ? qL(t) : xm(t);
}
function qL(e) {
  let t = HL(e.h, e.s, e.v);
  return {
    ...Hm(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? mk(e.a) : 1,
  };
}
function xm(e) {
  let t = $L(e.r, e.g, e.b);
  return {
    ...Hm(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? mk(e.a) : 1,
  };
}
function pk(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = Ko(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ko(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = bm(e.s)),
    (r = Ko(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = bm(e.l)),
    (i = NL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function mk(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var t1 = (e) => e instanceof bl;
var XL = (() => m2().EventEmitter)(),
  YL = class {
    constructor() {
      C(this, "_emitter", new XL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  KL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    document: { cookie: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    requestIdleCallback: () => 0,
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
  },
  qt = typeof _ > "u" ? KL : _,
  QL = (e) => {
    setTimeout(e, 1 / 60);
  },
  ZL = (() => qt.requestAnimationFrame || QL)(),
  n1 = (e) => ZL(e),
  va = (() => 1 / 60)(),
  JL = class extends YL {
    constructor(e = !1) {
      super(),
        C(this, "_started", !1),
        C(this, "_frame", 0),
        C(this, "_frameTasks", []),
        C(this, "tick", () => {
          this._started &&
            (n1(this.tick),
            this.emit("update", this._frame, va),
            this.emit("render", this._frame, va),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      va = e;
    }
    static get TimeStep() {
      return va;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), n1(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * va;
    }
  },
  gk = new JL(),
  wm = { target: "PREVIEW", zoom: 1 };
var be = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => wm.target,
  hasRestrictions: () => {
    let e = wm.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
var tu = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
gd({
  borderTopWidth: tu("y"),
  borderLeftWidth: tu("x"),
  borderRightWidth: tu("x"),
  borderBottomWidth: tu("y"),
});
function V(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function Se(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var Qo = x.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function eM({ children: e }) {
  if (A(Qo).top) return k(je, { children: e });
  let n = D({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = D({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = D(new Set()).current,
    o = ie(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let m = c || l;
      if (
        !u &&
        !i.has(m) &&
        (!n.current.byLayoutId[m] || n.current.byLayoutId[m] === m)
      )
        return (
          n.current.count[f][m] === void 0 &&
            ((n.current.count[f][m] = 0),
            (n.current.byLayoutId[m] = m),
            (r.current[f][l] = m)),
          i.add(m),
          m
        );
      let g;
      if (u?.length)
        for (let S = u.length - 1; S >= 0; S--) {
          let E = u[S];
          V(!!E, "duplicatedId must be defined");
          let R = n.current[f][E],
            M = n.current.byLastId[E];
          if (M && !g) {
            let z = n.current.byLayoutId[M],
              de = !z || z === c;
            M && !i.has(M) && (!c || de) && (g = [M, E]);
          }
          let I = R ? n.current.byLayoutId[R] : void 0,
            G = !I || I === c;
          if (R && !i.has(R) && (!c || G))
            return (
              (r.current[f][l] = R), (r.current.byLastId[E] = R), i.add(R), R
            );
        }
      let v = n.current.byLastId[l];
      if (v && !i.has(v)) return i.add(v), (r.current.byId[l] = v), v;
      if (g) {
        let [S, E] = g;
        return (r.current[f][l] = S), (r.current.byLastId[E] = S), i.add(S), S;
      }
      let b = n.current.byPossibleId[l];
      if (b && !i.has(b)) return i.add(b), (r.current.byId[l] = b), b;
      let h = u?.[0],
        p = c || h || l,
        y = (n.current.count[f][p] ?? -1) + 1,
        { layoutId: w, value: T } = tM(p, y, i);
      if (
        ((n.current.count[f][p] = T), (r.current[f][l] = w), u?.length && !c)
      ) {
        let S = u[u.length - 1];
        if ((S && (r.current.byLastId[S] = w), u.length > 1))
          for (let E = 0; E < u.length - 1; E++) {
            let R = u[E];
            R !== void 0 &&
              (r.current.byPossibleId[R] || (r.current.byPossibleId[R] = w));
          }
      }
      return (r.current.byLayoutId[w] = m), i.add(w), w;
    }, []),
    s = ie(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = D({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return k(Qo.Provider, { value: a, children: e });
}
function tM(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function nM({ enabled: e = !0, ...t }) {
  let n = A(Qo),
    r = ae(() => ({ ...n, enabled: e }), [e]);
  return k(Qo.Provider, { ...t, value: r });
}
function Zi(e) {
  let t = D(null);
  return t.current === null && (t.current = e()), t.current;
}
var rM = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  iM = (() => ({
    ...rM,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  }))(),
  vk = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  oM = (() => ({ ...vk, fontWeight: 500 }))(),
  sM = (() => ({
    ...vk,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }))();
function p6(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${aM(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return ue("div", {
    style: iM,
    children: [
      k("div", { className: "text", style: oM, children: r }),
      i && k("div", { className: "text", style: sM, children: i }),
    ],
  });
}
function aM(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
function Q(e) {
  return typeof e == "number" && isFinite(e);
}
function lM(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function lu(e) {
  return typeof e != "string" && typeof e != "number";
}
function cu(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !lM(e);
}
function cM(e) {
  return e * (Math.PI / 180);
}
var Cn = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = cn.angleFromX(t.a, t.b),
          i = cM(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s }
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          m = (u - l) * (a - o) - (f - c) * (s - i),
          g = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && m === 0) || m === 0) return null;
        let v = d / m,
          b = g / m;
        return r && (v < 0 || v > 1 || b < 0 || b > 1)
          ? null
          : { x: i + v * (s - i), y: o + v * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = cn(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => cn.distance(t.a, t.b)),
      e
    );
  })(),
  K = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => K.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = Jc(e.x, t),
        r = Jc(e.y, t),
        i = Jc(e.width, t),
        o = Jc(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: K.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: K.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        (t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = cn.distance(t, n),
        l = cn.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(K.minX)), y: Math.min(...e.map(K.minY)) },
        n = { x: Math.max(...e.map(K.maxX)), y: Math.max(...e.map(K.maxY)) };
      return K.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: K.minX(e), y: K.minY(e) },
      { x: K.minX(e), y: K.maxY(e) },
      { x: K.maxX(e), y: K.minY(e) },
      { x: K.maxX(e), y: K.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        m = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: m };
    },
    containsPoint: (e, t) =>
      !(
        t.x < K.minX(e) ||
        t.x > K.maxX(e) ||
        t.y < K.minY(e) ||
        t.y > K.maxY(e) ||
        isNaN(e.x) ||
        isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of K.points(t)) if (!K.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= K.maxX(e) ||
        K.maxX(t) <= e.x ||
        t.y >= K.maxY(e) ||
        K.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = K.maxX(e),
        r = K.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = K.maxY(e),
        r = K.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => K.intersects(n, e)) === void 0,
    isEqual: (e, t) => K.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > K.maxX(e) && (n = t.x - K.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > K.maxY(e) && (r = t.y - K.maxY(e)),
        cn.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: K.minX(e), y: K.minY(e) },
        r = { x: K.minX(t), y: K.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = K.minX(e),
        r = K.minY(e),
        i = K.maxX(e),
        o = K.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = K.cornerPoints(e);
      return [Cn(t, n), Cn(n, r), Cn(r, i), Cn(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              i.x = t.x;
              break;
            case "center":
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              i.x = t.x + t.width - e.width;
              break;
            default:
              Se(r);
          }
          break;
        case "left":
          i.x = t.x - e.width;
          break;
        case "right":
          i.x = t.x + t.width;
          break;
        default:
          Se(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              i.y = t.y;
              break;
            case "center":
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              i.y = t.y + t.height - e.height;
              break;
            default:
              Se(r);
          }
          break;
        case "top":
          i.y = t.y - e.height;
          break;
        case "bottom":
          i.y = t.y + t.height;
          break;
        default:
          Se(n);
      }
      return i;
    },
  };
var yk = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    Q(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || Q(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || Q(e.maxHeight)) && (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function wu(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var bk = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = yk.quickfix({
          left: Q(t) || Bn(t),
          right: Q(n) || Bn(n),
          top: Q(r) || Bn(r),
          bottom: Q(i) || Bn(i),
          widthType: wu(o),
          heightType: wu(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        m = null,
        g = 0,
        v = 0;
      if (f.widthType !== 0 && typeof o == "string") {
        let p = parseFloat(o);
        o.endsWith("fr")
          ? ((g = 3), (d = p))
          : o === "auto"
          ? (g = 2)
          : ((g = 1), (d = p / 100));
      } else o !== void 0 && typeof o != "string" && (d = rt.getNumber(o));
      if (f.heightType !== 0 && typeof s == "string") {
        let p = parseFloat(s);
        s.endsWith("fr")
          ? ((v = 3), (m = p))
          : s === "auto"
          ? (v = 2)
          : ((v = 1), (m = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != "string" && (m = rt.getNumber(s));
      let b = 0.5,
        h = 0.5;
      return (
        a && (b = parseFloat(a) / 100),
        l && (h = parseFloat(l) / 100),
        {
          left: f.left ? rt.getNumber(t) : null,
          right: f.right ? rt.getNumber(n) : null,
          top: f.top ? rt.getNumber(r) : null,
          bottom: f.bottom ? rt.getNumber(i) : null,
          widthType: g,
          heightType: v,
          width: d,
          height: m,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: b,
          centerAnchorY: h,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? rt.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? rt.getNumber(t?.sizing.height) : null,
        l = r1(e.left, e.right);
      if (s && Q(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (Q(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            Se(e.widthType);
        }
      let c = r1(e.top, e.bottom);
      if (a && Q(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (Q(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            Se(e.heightType);
        }
      return pM(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = bk.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? rt.getNumber(c.width) : null,
        f = c ? rt.getNumber(c.height) : null;
      e.left !== null
        ? (o = e.left)
        : u && e.right !== null
        ? (o = u - e.right - a)
        : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
          ? (s = f - e.bottom - l)
          : f && (s = e.centerAnchorY * f - l / 2);
      let d = { x: o, y: s, width: a, height: l };
      return r ? K.pixelAligned(d) : d;
    },
  },
  uM = 200,
  fM = 200;
function Su(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function dM(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Su("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Su("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function hM(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Su("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Su("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function pM(e, t, n, r, i) {
  let o = hM(Q(e) ? e : uM, n, r, i),
    s = dM(Q(t) ? t : fM, n, r, i);
  return (
    Q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (Q(n.left) && Q(n.right)
        ? (s = o / n.aspectRatio)
        : Q(n.top) && Q(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function r1(e, t) {
  return !Q(e) || !Q(t) ? null : e + t;
}
function mM(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Va(e) {
  return !e._constraints || mM(e) ? !1 : e._constraints.enabled;
}
function gM(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    Q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    Q(n) && Q(r) ? { width: n, height: r } : null
  );
}
function vM(e) {
  let t = gM(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return Q(n) && Q(r) ? { x: n, y: r, ...t } : null;
}
function Ta(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Va(e) || r) return vM(e);
  let i = yM(e),
    o = bM(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return bk.toRect(i, s, null, n, null);
}
function yM(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = yk.quickfix({
      left: Q(t),
      right: Q(n),
      top: Q(r),
      bottom: Q(i),
      widthType: wu(l),
      heightType: wu(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    m = null,
    g = null,
    v = 0,
    b = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let y = parseFloat(l);
    l.endsWith("fr")
      ? ((v = 3), (m = y))
      : l === "auto"
      ? (v = 2)
      : ((v = 1), (m = y / 100));
  } else l !== void 0 && typeof l != "string" && (m = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let y = parseFloat(c);
    c.endsWith("fr")
      ? ((b = 3), (g = y))
      : c === "auto"
      ? (b = 2)
      : ((b = 1), (g = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (g = c);
  let h = 0.5,
    p = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (h = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (p = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: v,
      heightType: b,
      width: m,
      height: g,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: h,
      centerAnchorY: p,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var xk = x.createContext({ parentSize: 0 });
function bM(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function za() {
  return x.useContext(xk).parentSize;
}
function wk(e) {
  return typeof e == "object";
}
var xM = (e) => {
  let t = za(),
    { parentSize: n, children: r } = e,
    i = x.useMemo(() => ({ parentSize: n }), [wM(n), SM(n)]);
  return t === 1
    ? r
      ? k(je, { children: r })
      : null
    : k(xk.Provider, { value: i, children: r });
};
function wM(e) {
  return wk(e) ? e.width : e;
}
function SM(e) {
  return wk(e) ? e.height : e;
}
function kM(e, t) {
  return k(xM, { parentSize: t, children: e });
}
function CM(e) {
  let t = za();
  return Ta(e, t, !0);
}
function Sk({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var TM = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    (e.Padding = "padding"),
    (e.BorderRadius = "borderradius"),
    (e.CollectionReference = "collectionreference"),
    (e.MultiCollectionReference = "multicollectionreference"),
    e
  ))(TM || {}),
  Zp;
function EM() {
  if (Zp !== void 0) return Zp;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (Zp = t), t;
}
var Ki = "flexbox-gap-not-supported",
  i1 = !1;
function b6() {
  i1 || ((i1 = !0), !EM() && document.body.classList.add(Ki));
}
var RM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  PM = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  FM = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  _M = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  IM = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  OM = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  LM = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  MM = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  AM = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  DM = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  VM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  zM = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
}
`,
  BM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  $M = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  NM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  HM = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  jM = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    zM,
    VM,
    RM,
    PM,
    FM,
    _M,
    IM,
    OM,
    LM,
    MM,
    AM,
    DM,
    BM,
    $M,
    NM,
    HM,
  ],
  WM = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  UM = new Set(),
  Jp;
function kk(e, t, n = UM) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!Jp) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) Jp = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = Jp;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var GM = ["[data-framer-component-type] { position: absolute; }"],
  qM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  XM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  YM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  KM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  QM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  ZM = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  JM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  eA = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  tA = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    qM,
    XM,
    YM,
    KM,
    QM,
    ZM,
    JM,
    eA,
  ],
  nA = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  rA = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${Ki} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  iA = (() => `
.${Ki} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  oA = (() => `
.${Ki}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Ki}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  sA = (() => `
.${Ki}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Ki}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  aA = (() => [nA, iA, ...rA, oA, sA])(),
  lA = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  cA = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  uA = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  fA = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  dA = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  hA = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  pA = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  mA = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  gA = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  vA = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  em = "--framer-will-change-override",
  yA = "(background: -webkit-named-image(i))",
  bA = "(grid-template-rows: subgrid)",
  xA = (e) =>
    e
      ? [
          `body { ${em}: none; }`,
          `@supports ${yA} and (not ${bA}) { body { ${em}: transform; } }`,
        ]
      : [`body { ${em}: none; }`],
  wA = (e) => (e ? mA : []),
  SA = [".svgContainer svg { display: block; }"],
  Ck = (e) => [
    ...xA(e),
    ...GM,
    ...tA,
    ...WM,
    ...jM,
    ...aA,
    ...lA,
    ...cA,
    ...uA,
    ...dA,
    ...fA,
    ...hA,
    ...pA,
    ...wA(e),
    ...SA,
    ...gA,
    ...vA,
  ],
  kA = Ck(!1),
  CA = Ck(!0),
  o1 = !1;
function Ba() {
  if (o1) return;
  o1 = !0;
  let e = be.current() === be.preview ? CA : kA;
  for (let t of e) kk(t, void 0, void 0);
}
function Or(e) {
  return typeof e == "function";
}
function Hu(e) {
  return typeof e == "boolean";
}
function xe(e) {
  return typeof e == "string";
}
function bt(e) {
  return Number.isFinite(e);
}
function ju(e) {
  return Array.isArray(e);
}
function Ze(e) {
  return e !== null && typeof e == "object" && !ju(e);
}
function Ne(e) {
  return typeof e > "u";
}
function Pe(e) {
  return e === null;
}
function Zo(e) {
  return e == null;
}
function Wm(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function Tk(e) {
  return Ze(e) && Or(e.return);
}
function TA(e) {
  return Ze(e) || Or(e);
}
var s1 = "optional";
function EA(e) {
  return !!e && s1 in e && e[s1] === !0;
}
function RA(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "multicollectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
        return xe(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return Hu(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Ne(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return bt(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = Ze(e.defaultValue) ? e.defaultValue : {};
        return Ze(e.controls) && Ek(t, e.controls), t;
      }
      case "array":
        return ju(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Ek(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Ne(i) || EA(r)) continue;
    let o = RA(r);
    Ne(o) || (e[n] = o);
  }
}
function PA(e) {
  if (Ze(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function FA(e, t) {
  if (!TA(e)) return;
  let n = PA(e);
  Ek(n, t);
}
function x6(e, t) {
  Object.assign(e, { propertyControls: t }), FA(e, t);
}
function _A(e) {
  return e.propertyControls;
}
var xt = (e) => e;
function IA(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var OA =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  LA = IA(
    (e) =>
      OA.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  a1 = (e) => () => {
    Ca(e);
  },
  MA = () => () => {},
  AA = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = ut.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  DA = !1,
  VA = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
        ? MA()
        : a1(
            DA
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  ut = new Proxy(AA, VA);
var l1 = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  zA = {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "126px auto",
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)",
    opacity: 0.2,
  };
function BA(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Rk(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function Um(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: Rk(e.positionX, e.positionY),
    objectFit: BA(e.fit),
  };
}
function $A({ image: e, containerSize: t, nodeId: n, alt: r, draggable: i }) {
  let o = ut.useImageSource(e, t, n),
    s = Um(e),
    a = x.useRef(null);
  return k("img", {
    ref: a,
    decoding: "async",
    loading: e.loading,
    sizes: e.sizes,
    srcSet: e.srcSet,
    src: o,
    alt: r ?? e.alt ?? "",
    style: s,
    draggable: i,
  });
}
function NA({ image: e, containerSize: t, nodeId: n }) {
  let r = x.useRef(null),
    i = ut.useImageElement(e, t, n),
    o = Um(e);
  return (
    x.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    k("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function HA({ nodeId: e, image: t, containerSize: n }) {
  let r = x.useRef(null),
    i = ut.useImageSource(t, n, e);
  return (
    x.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = Um(t);
      ut.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    k("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function Pk({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...l1, ...zA },
    i = null;
  if (xe(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = bt(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = ut.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = Rk(t.positionX, t.positionY)),
        (r.opacity = void 0),
        (r.border = 0),
        (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (i = null);
    } else
      be.current() !== be.canvas
        ? (i = k($A, { image: t, ...n }))
        : ut.canRenderOptimizedCanvasImage(ut.useImageSource(t))
        ? (i = k(HA, { image: t, ...n }))
        : (i = k(NA, { image: t, ...n }));
  return k(mn.div, {
    layoutId: e,
    style: i ? l1 : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
var jA = "src",
  Ui = {
    isImageObject: function (e) {
      return !e || typeof e == "string" ? !1 : jA in e;
    },
  };
function WA(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == "string" && (e = { ...e, src: s }), e;
}
function UA(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Ui.isImageObject(t)) return;
  let r = null;
  if (
    (xe(n) ? (r = { alt: "", src: n }) : (r = rt.get(t, null)),
    !!Ui.isImageObject(r))
  )
    return WA(r, e);
}
function GA(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function qA(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), k(mn.div, { style: n }))
    : (GA(e, n, !1),
      k(mn.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function $a(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? mn[e]
    : mn.div;
}
var XA = Kn(Am(), 1),
  Tn = typeof Fe < "u" ? Fe : void 0,
  Qi = () => typeof document == "object";
var YA = () =>
    Tn && /Chrome/.test(Tn.userAgent) && /Google Inc/.test(Tn.vendor) && !JA(),
  KA = () =>
    Tn && /Safari/.test(Tn.userAgent) && /Apple Computer/.test(Tn.vendor),
  QA = () => Tn && /Firefox\/\d+\.\d+$/.test(Tn.userAgent),
  ZA = () => Tn && /FramerX/.test(Tn.userAgent),
  JA = () => Tn && /Edg\//.test(Tn.userAgent);
var eD = () => XA.default.env.NODE_ENV === "test";
var tD = YA();
function Fk(e) {
  let t = {};
  return (
    !tD ||
      be.current() !== be.canvas ||
      ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
  );
}
function Gm(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function nD(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = x.Children.map(t, (r) =>
        x.isValidElement(r) ? x.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function Wu(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function Na(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = A(Qo);
  return ae(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var _k = typeof document < "u" ? st : $,
  ts = x.createContext(!1);
function Ik() {
  let [e, t] = x.useState(0);
  return x.useCallback(() => t((n) => n + 1), []);
}
var rD = "data-framer-size-compatibility-wrapper";
function iD(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(rD)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Ok)
    .map(Lk);
}
function Ok(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Lk(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(Ok);
  return t ? Lk(t) : e;
}
function Uu(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!A(ts),
    c = be.current() === be.canvas;
  _k(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        ut.queueMeasureRequest(Gm(i), t.current, n(t.current)));
  });
}
function oD(e) {
  let t = e.closest("[data-framer-component-container]");
  t && ut.queueMeasureRequest(Gm(t.id), t, iD(t));
}
var Ea = Object.keys;
function ku(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var sD = "equals";
function c1(e) {
  return e === null || !(sD in e) ? !1 : typeof e.equals == "function";
}
function qm(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function aD(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!qm(e[r], t[r])) return !1;
  return !0;
}
function lD(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Gu(e[r], t[r], !0)) return !1;
  return !0;
}
function cD(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!qm(r, t.get(n))) return !1;
  return !0;
}
function uD(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Gu(r, t.get(n), !0)) return !1;
  return !0;
}
function fD(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function dD(e, t) {
  let n = Ea(e);
  if (n.length !== Ea(t).length) return !1;
  for (let r of n) {
    if (!ku(t, r)) return !1;
    if (!(r === "_owner" && ku(e, "$$typeof") && e.$$typeof) && !qm(e[r], t[r]))
      return !1;
  }
  return !0;
}
function hD(e, t) {
  let n = Ea(e);
  if (n.length !== Ea(t).length) return !1;
  for (let r of n) {
    if (!ku(t, r)) return !1;
    if (
      !(r === "_owner" && ku(e, "$$typeof") && e.$$typeof) &&
      !Gu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function Gu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? lD(e, t) : aD(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? uD(e, t) : cD(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return fD(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let m = e instanceof RegExp,
    g = t instanceof RegExp;
  return m && g
    ? e.toString() === t.toString()
    : m !== g
    ? !1
    : c1(e) && c1(t)
    ? e.equals(t)
    : n
    ? hD(e, t)
    : dD(e, t);
}
function Ke(e, t, n = !0) {
  try {
    return Gu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var Mk = "0.000001px",
  tm = (() => ` translateZ(${Mk})`)(),
  Ak = (() => ZA() || KA() || eD())();
function pD(e) {
  e.willChange = "transform";
  let t = be.current() === be.canvas;
  Ak && t && (e.translateZ = Mk);
}
function Xm(e) {
  (e.willChange = "transform"), mD(e, !0);
}
function mD(e, t) {
  let n = be.current() === be.canvas;
  if (!Ak || !n) return;
  let r = (xe(e.transform) && e.transform) || "";
  t
    ? r.includes(tm) || (e.transform = r + tm)
    : (e.transform = r.replace(tm, ""));
}
function Dk(e, t, n, r = !0) {
  if (!e) return;
  let i = xt(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var uu = (() => {
  class e extends Ee {
    constructor() {
      super(...arguments),
        C(this, "layerElement", null),
        C(this, "setLayerElement", (n) => {
          this.layerElement = n;
        });
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? pD(r) : Xm(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !Ke(this.props, n);
    }
    componentDidUpdate(n) {
      xt(this.props).clip &&
        xt(this.props).radius === 0 &&
        xt(n).radius !== 0 &&
        Dk(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return C(e, "defaultProps", {}), e;
})();
function gD(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function vD(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  gD(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var Vk = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  Ym = {
    hueRotate: (e, t) => U.toHslString(U.hueRotate(U(e), t)),
    setAlpha: (e, t) => U.toRgbString(U.alpha(U(e), t)),
    getAlpha: (e) => {
      let t = jm(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => U.toRgbString(U.multiplyAlpha(U(e), t)),
    toHex: (e) => U.toHexString(U(e)).toUpperCase(),
    toRgb: (e) => U.toRgb(U(e)),
    toRgbString: (e) => U.toRgbString(U(e)),
    toHSV: (e) => U.toHsv(U(e)),
    toHSL: (e) => U.toHsl(U(e)),
    toHslString: (e) => U.toHslString(U(e)),
    toHsvString: (e) => U.toHsvString(U(e)),
    hsvToHSLString: (e) => U.toHslString(U(eu(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => U.toHexString(U(eu(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => U.toRgbString(U(eu(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => eu(e.h, e.s, e.v),
    rgbaToString: (e) => U.toRgbString(U(e)),
    rgbToHexString: (e) => U.toHexString(U(e)),
    hslToString: (e) => U.toHslString(U(e)),
    hslToRgbString: (e) => U.toRgbString(U(e)),
    toColorPickerSquare: (e) => U.toRgbString(U({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => U(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = U(e)),
      typeof t == "string" && (t = U(t)),
      U.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = U(e);
      return t.a !== 1 ? U.toRgbString(t) : U.toHexString(t);
    },
  },
  yD = /var\(.+\)/,
  bD = new Map();
function xD(e, t) {
  let n = [e, t];
  return yD.test(e) ? e : vD(1e3, bD, n, () => Ym.multiplyAlpha(e, t));
}
function Ha(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: xD(r.value, t) }))
  );
}
function zk(e, t) {
  let n = 0;
  return (
    Ha(e, t).forEach((r) => {
      n ^= Vk(r.value) ^ r.position;
    }),
    n
  );
}
var wD = ["stops"];
function Bk(e) {
  return e && wD.every((t) => t in e);
}
var SD = ["start", "end"];
function $k(e) {
  return e && SD.every((t) => t in e);
}
var kD = ["angle", "alpha"],
  Ra = {
    isLinearGradient: (e) => e && kD.every((t) => t in e) && ($k(e) || Bk(e)),
    hash: (e) => e.angle ^ zk(e, e.alpha),
    toCSS: (e, t) => {
      let n = Ha(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  CD = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  Pa = {
    isRadialGradient: (e) => e && CD.every((t) => t in e) && ($k(e) || Bk(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      zk(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Ha(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(", ")})`;
    },
  };
function TD({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || t1(t)
      ? (n.backgroundColor = t)
      : U.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || U.toRgbString(e))
    : e &&
      ((e = rt.get(e, null)),
      typeof e == "string" || t1(e)
        ? (n.background = e)
        : Ra.isLinearGradient(e)
        ? (n.background = Ra.toCSS(e))
        : Pa.isRadialGradient(e)
        ? (n.background = Pa.toCSS(e))
        : U.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || U.toRgbString(e)));
}
function ve(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function ED(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function RD(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function PD(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    ve(e, "size", t),
    ve(e, "width", t),
    ve(e, "height", t),
    ve(e, "minWidth", t),
    ve(e, "minHeight", t),
    ve(e, "top", t),
    ve(e, "right", t),
    ve(e, "bottom", t),
    ve(e, "left", t),
    ve(e, "position", t),
    ve(e, "overflow", t),
    ve(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && ve(e, "border", t),
    ve(e, "borderRadius", t),
    ve(e, "radius", t, "borderRadius"),
    ve(e, "color", t),
    ve(e, "shadow", t, "boxShadow"),
    ve(e, "x", t),
    ve(e, "y", t),
    ve(e, "z", t),
    ve(e, "rotate", t),
    ve(e, "rotateX", t),
    ve(e, "rotateY", t),
    ve(e, "rotateZ", t),
    ve(e, "scale", t),
    ve(e, "scaleX", t),
    ve(e, "scaleY", t),
    ve(e, "skew", t),
    ve(e, "skewX", t),
    ve(e, "skewY", t),
    ve(e, "originX", t),
    ve(e, "originY", t),
    ve(e, "originZ", t),
    TD(e, t),
    t
  );
}
function FD(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof xt(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var u1 = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  _D = (() => new Set([...u1, ...u1.map((e) => `${e}Capture`)]))();
function ID(e) {
  if (e.drag) return "grab";
  for (let t in e) if (_D.has(t)) return "pointer";
}
var nm = "overflow";
function OD(e) {
  return f1(e) ? !0 : e.style ? !!f1(e.style) : !1;
}
function f1(e) {
  return nm in e && (e[nm] === "scroll" || e[nm] === "auto");
}
function Nk(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: m,
    } = e,
    g = kt(e.minWidth),
    v = kt(e.minHeight),
    b = kt(e.maxWidth),
    h = kt(e.maxHeight);
  return {
    top: kt(n),
    left: kt(t),
    bottom: kt(r),
    right: kt(i),
    width: kt(o),
    height: kt(s),
    size: kt(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: m,
    minWidth: g,
    minHeight: v,
    maxWidth: b,
    maxHeight: h,
  };
}
var d1 = { x: 0, y: 0, width: 200, height: 200 };
function LD(e) {
  x.useInsertionEffect(() => {
    Ba();
  }, []);
  let t = !!A(ts),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = Nk(e),
    a = CM(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: be.current() !== be.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !FD(e) && !e.__fromCanvasComponent && !OD(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = x.Children.count(e.children) > 0 &&
      x.Children.toArray(e.children).every(
        (h) => typeof h == "string" || typeof h == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    m = PD(e);
  o === void 0 &&
    !i &&
    (ED(m) || (l.width = d1.width), RD(m) || (l.height = d1.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let g = {};
  Va(s) &&
    a &&
    !Sk(e) &&
    (g = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, m, g, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    uu.applyWillChange(e, l, !0);
  let v = l;
  l.transform || (v = { x: 0, y: 0, ...l });
  let b = be.current() === be.canvas;
  return (
    e.positionSticky
      ? (!b || t) &&
        ((v.position = "sticky"),
        (v.willChange = "transform"),
        (v.zIndex = 1),
        (v.top = e.positionStickyTop),
        (v.right = e.positionStickyRight),
        (v.bottom = e.positionStickyBottom),
        (v.left = e.positionStickyLeft))
      : b &&
        (e.positionFixed || e.positionAbsolute) &&
        (v.position = "absolute"),
    "rotate" in v && v.rotate === void 0 && delete v.rotate,
    [v, a]
  );
}
var MD = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function AD(e) {
  let t = {};
  for (let n in e)
    (uo(n) || LA(n)) && !MD.has(n)
      ? (t[n] = xt(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof xt(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = xt(e)[n]));
  return t;
}
function DD(e) {
  return "data-framer-name" in e;
}
var VD = Ae(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = nD(t),
      u = AD(l),
      f = Na(t),
      d = ID(t),
      m = D(null),
      g = n ?? m,
      v = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": xt(t)["data-framer-offset-parent-id"],
      };
    !DD(t) && r && (xt(v)["data-framer-name"] = r);
    let [b, h] = LD(l),
      p = Nk(l),
      y = Sk(p);
    i && !(h && !y && Va(p))
      ? (u.transformTemplate || (u.transformTemplate = Wu(i)),
        Object.assign(v, Fk(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      Uu(t, g);
    let w = UA(t),
      T = !!A(ts),
      S = zD(l, p, h, T),
      E = kM(
        ue(je, {
          children: [
            w
              ? k(Pk, {
                  alt: t.alt ?? "",
                  image: w,
                  containerSize: h ?? void 0,
                  nodeId: t.id && Gm(t.id),
                  layoutId: f,
                })
              : null,
            c,
            k(qA, { ...s, border: o, layoutId: f }),
          ],
        }),
        S
      ),
      R = $a(t.as),
      { size: M, radius: I, shadow: G } = b;
    return (
      M !== void 0 &&
        (delete b.size,
        b.height === void 0 && (b.height = M),
        b.width === void 0 && (b.width = M)),
      I !== void 0 && (delete b.radius, (b.borderRadius = I)),
      G !== void 0 && (delete b.shadow, (b.boxShadow = G)),
      ue(R, { ...v, ...u, layoutId: f, style: b, ref: g, children: [E, a] })
    );
  }),
  fu = Ae(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? k(VD, { ...t, ref: n }) : null;
  });
function zD(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
var Km = "__LAYOUT_TREE_ROOT",
  Hk = x.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  BD = class extends Ee {
    constructor() {
      super(...arguments),
        C(this, "shouldAnimate", !1),
        C(this, "transition"),
        C(this, "lead"),
        C(this, "follow"),
        C(this, "scheduledPromotion", !1),
        C(this, "scheduledDidUpdate", !1),
        C(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        C(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        C(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        C(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === Km &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return k(Hk.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  $D = { width: "100%", height: "100%", backgroundColor: "none" };
function ND(e) {
  return k(mn.div, { layoutId: Km, style: $D, children: e.children });
}
var HD = x.createContext(null);
var K6 = Kn($u(), 1);
var Z6 = Kn($u(), 1);
var h1 = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  Fr = Symbol("private"),
  rm = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [Fr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new hk(),
            reset() {
              for (let s in o)
                if (h1(o, s)) {
                  let a = h1(t, s) ? xt(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, WD);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[Fr].reset()),
      (e.addObserver = (t, n) => t[Fr].observers.add(n)),
      e
    );
  })(),
  jD = class {
    constructor() {
      C(this, "set", (e, t, n, r) => {
        if (t === Fr) return !1;
        let i = e[Fr],
          o,
          s;
        if (
          (Bn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = rt(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = xt(e)[t];
        if (c !== void 0) {
          Bn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (xt(e)[t] = s));
          let u = s !== null && typeof s == "object";
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        C(this, "get", (e, t, n) => {
          if (t === Fr) return xt(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[Fr].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(Fr);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== Fr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  WD = new jD();
var UD = "opacity";
function GD(e) {
  return UD in e;
}
function qD(e, t) {
  if (!GD(e)) return;
  let n = rt.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function XD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function jk(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function YD(e, t) {
  let n = [];
  Q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    Q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    Q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    Q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    Q(e.invert) && n.push(`invert(${e.invert / 100})`),
    Q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    Q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    Q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...XD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function KD(e, t) {
  Q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Qm(e, t) {
  KD(e, t), YD(e, t);
}
var QD = class extends Ee {
    constructor() {
      super(...arguments),
        C(this, "layoutMaybeMutated"),
        C(this, "projectionNodes", new Map()),
        C(this, "rootProjectionNode"),
        C(this, "isExiting"),
        C(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === Km && !this.props.isExiting
        ),
        C(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return k(Cl.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  ZD = (e) => {
    let t = x.useContext(Hk);
    return k(QD, { ...e, sharedLayoutContext: t });
  },
  Wk = x.createContext(!0);
function cH() {
  return A(Wk);
}
function JD() {
  return new Map();
}
function eV() {
  return Zi(JD);
}
var tV = ke({ register: () => {}, deregister: () => {} }),
  nV = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = eV(),
      i = ie(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = ie(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = D({ register: i, deregister: o }).current;
    return (
      $(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, Or(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      k(tV.Provider, { value: s, children: n })
    );
  };
var im = x.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: m,
  instant: g,
  initialProps: v,
  exitProps: b,
  position: h = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: p,
  index: y,
  areMagicMotionLayersPresent: w,
  id: T,
  isInitial: S,
}) {
  let E = Z0(),
    R = A(po),
    { persistLayoutIdCache: M } = A(Qo),
    I = D({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: p1({}, v, s),
    }),
    G = D(null),
    z = R !== null && !R.isPresent;
  n && I.current.wasCurrent === void 0 && M(),
    $(() => {
      if (t || !E) return;
      if (z) {
        I.current = { ...I.current, wasBeingRemoved: z };
        return;
      }
      let { wasPrevious: fe, wasCurrent: Z } = I.current,
        Je = (n && !Z) || (!z && I.current.wasBeingRemoved && n),
        Me = r && !fe,
        ft = p1(I.current.origins, v, s),
        we = I.current.wasReset;
      Je || Me
        ? (E.stop(), E.start({ zIndex: y, ...ft, ...s }), (we = !1))
        : we === !1 &&
          (E.stop(), E.set({ zIndex: y, ...Gi, opacity: 0 }), (we = !0)),
        (I.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: we,
          origins: ft,
        });
    }, [n, r, z]);
  let de = g ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    ye = g ? { type: !1 } : m || d,
    re = { ...h };
  (re.left === void 0 || re.right === void 0) && (re.width = "auto"),
    (re.top === void 0 || re.bottom === void 0) && (re.height = "auto");
  let W = (m1(s) || m1(v)) && (t || n || r) ? 1200 : void 0,
    X = { ...Gi, ...I.current.origins },
    se = t
      ? {
          initial: { ...X, ...v },
          animate: { ...X, ...s, transition: de },
          exit: { ...X, ...b, transition: d },
        }
      : { animate: E, exit: { ...X, ...b, transition: ye } },
    j = !(z || w === !1),
    me = !!n && j;
  return ue(fu, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || z || (n && p) ? y : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: W,
    },
    children: [
      t &&
        k(fu, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: g && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: z ? void 0 : c,
        }),
      k(fu, {
        ...re,
        ...se,
        transition: {
          default: de,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: z ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && S) || t || (n && p) ? 1 : 0,
        },
        "data-is-present": j ? void 0 : !1,
        ref: G,
        children: k(HD.Provider, {
          value: G,
          children: k(Wk.Provider, {
            value: me,
            children: k(nV, {
              isCurrent: me,
              isOverlayed: i,
              children: k(ZD, {
                isLead: n,
                animatesLayout: !!p,
                transition: de,
                isExiting: !j,
                isOverlayed: i,
                id: T,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
rV);
function rV(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function p1(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (Q(t.originX) && (r.originX = t.originX),
      Q(t.originY) && (r.originY = t.originY),
      Q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (Q(n.originX) && (r.originX = n.originX),
      Q(n.originY) && (r.originY = n.originY),
      Q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function m1(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var Gi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  iV = class {
    constructor() {
      C(this, "warning", () => {
        Ca(
          "The Navigator API is only available inside of Framer: https://www.framer.com/"
        );
      }),
        C(this, "goBack", () => this.warning()),
        C(this, "instant", () => this.warning()),
        C(this, "fade", () => this.warning()),
        C(this, "push", () => this.warning()),
        C(this, "modal", () => this.warning()),
        C(this, "overlay", () => this.warning()),
        C(this, "flip", () => this.warning()),
        C(this, "customTransition", () => this.warning()),
        C(this, "magicMotion", () => this.warning());
    }
  },
  oV = new iV(),
  sV = ke(oV),
  ct = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function aV(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return ct.PushLeft;
    case "left":
      return ct.PushRight;
    case "bottom":
      return ct.PushUp;
    case "top":
      return ct.PushDown;
  }
}
function lV(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return ct.OverlayLeft;
    case "left":
      return ct.OverlayRight;
    case "bottom":
      return ct.OverlayUp;
    case "top":
      return ct.OverlayDown;
  }
}
function cV(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return ct.FlipLeft;
    case "left":
      return ct.FlipRight;
    case "bottom":
      return ct.FlipUp;
    case "top":
      return ct.FlipDown;
  }
}
var uV = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function g1(e, t) {
  switch (t.type) {
    case "addOverlay":
      return dV(e, t.transition, t.component);
    case "removeOverlay":
      return hV(e);
    case "add":
      return Uk(e, t.key, t.transition, t.component);
    case "remove":
      return Gk(e);
    case "update":
      return fV(e, t.key, t.component);
    case "back":
      return pV(e);
    case "forward":
      return mV(e);
    default:
      return;
  }
}
function fV(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function dV(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function hV(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Uk(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? bV(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let g in e.containerIndex)
    e.containerIndex[g] === c && (e.containerIndex[g] = yV(g, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = gV(e, t, l),
    m = qk(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: m,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function pV(e) {
  let t = { ...e.containers },
    n = Gk(e);
  if (n) return (n.containers = t), n;
}
function mV(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = Uk(e, n, r, i);
  if (s) return (s.history = o), s;
}
function Gk(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  V(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = vV(e, r, n),
    f = qk(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function gV(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function vV(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function yV(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function qk(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = xV(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function bV(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function xV(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return nu("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return nu("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return nu("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return nu("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var wV = Ea(Gi);
function nu(e, t, n) {
  let r = {},
    i = {};
  return (
    wV.forEach((o) => {
      (r[o] = Gi[o]), (i[o] = { ...n, from: Gi[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${xt(Gi)[o]}%` : xt(Gi)[o];
        (xt(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var SV = x.createContext(void 0);
var Xk = x.createContext(void 0),
  kV = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends Ee {
        constructor(c) {
          var u;
          super(c),
            Zt(this, n),
            Zt(this, i),
            Zt(this, a),
            Zt(this, e, null),
            C(this, "state", uV()),
            Zt(this, s, (b) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let h = g1(this.state, b);
              if (!h) return;
              let { skipLayoutAnimation: p } = this.props,
                y = h.history[h.current],
                w =
                  (b.type === "add" && b.transition.withMagicMotion) ||
                  (b.type === "forward" && y?.transition.withMagicMotion) ||
                  (b.type === "remove" && !!h.previousTransition),
                T = () => {
                  var S;
                  this.setState(h),
                    y?.key &&
                      ((S = this.context) == null || S.call(this, y.key));
                };
              p && !w ? p(T) : T();
            }),
            C(this, "goBack", () => {
              var b;
              if (!$t(this, i, o).call(this))
                return (
                  Bf(
                    this,
                    e,
                    ((b = globalThis.event) == null ? void 0 : b.timeStamp) ||
                      null
                  ),
                  this.state.currentOverlay !== -1
                    ? ce(this, s).call(this, { type: "removeOverlay" })
                    : ce(this, s).call(this, { type: "remove" })
                );
            });
          let f = this.props.children;
          if (!f || !cu(f) || !lu(f)) return;
          let d = { ...ct.Instant },
            g = {
              type: "add",
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            v = g1(this.state, g);
          v && (this.state = v);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!cu(f) || !lu(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? $t(this, a, l).call(this, f, ct.Instant)
              : ce(this, s).call(this, {
                  type: "update",
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          $t(this, a, l).call(this, c, ct.Instant, void 0);
        }
        fade(c, u) {
          $t(this, a, l).call(this, c, ct.Fade, u);
        }
        push(c, u) {
          $t(this, a, l).call(this, c, aV(u), u);
        }
        modal(c, u) {
          $t(this, a, l).call(this, c, ct.Modal, u);
        }
        overlay(c, u) {
          $t(this, a, l).call(this, c, lV(u), u);
        }
        flip(c, u) {
          $t(this, a, l).call(this, c, cV(u), u);
        }
        magicMotion(c, u) {
          $t(this, a, l).call(this, c, ct.MagicMotion, u);
        }
        customTransition(c, u) {
          $t(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, m;
          let g = $t(this, n, r).call(this, { overCurrentContext: !1 }),
            v = $t(this, n, r).call(this, { overCurrentContext: !0 }),
            b = CV(v),
            h = v.current > -1,
            p = this.state.history.length === 1,
            y = [];
          for (let [T, S] of Object.entries(this.state.containers)) {
            let E = this.state.containerIndex[T];
            V(E !== void 0, "Container's index must be registered");
            let R = this.state.containerVisualIndex[T];
            V(R !== void 0, "Container's visual index must be registered");
            let M = this.state.containerIsRemoved[T],
              I = this.state.history[E],
              G = this.state.transitionForContainer[T],
              z = E === this.state.current,
              de = E === this.state.previous,
              ye = z ? !1 : M,
              re =
                ((c = I?.transition) == null ? void 0 : c.withMagicMotion) ||
                (z && !!this.state.previousTransition);
            y.push(
              k(
                im,
                {
                  id: T,
                  index: R,
                  isInitial: p,
                  isCurrent: z,
                  isPrevious: de,
                  isOverlayed: h,
                  visible: z || de,
                  position: (u = I?.transition) == null ? void 0 : u.position,
                  instant: y1(E, g),
                  transitionProps: G,
                  animation: v1(E, g),
                  backfaceVisible: IV(E, g),
                  exitAnimation:
                    (f = I?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = I?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (m = I?.transition) == null ? void 0 : m.enter,
                  withMagicMotion: re,
                  areMagicMotionLayersPresent: ye ? !1 : void 0,
                  children: k(ND, {
                    children: b1({ component: S, transition: I?.transition }),
                  }),
                },
                T
              )
            );
          }
          let w = this.state.overlayStack.map((T, S) =>
            k(
              im,
              {
                isLayeredContainer: !0,
                isCurrent: S === this.state.currentOverlay,
                position: T.transition.position,
                initialProps: _V(S, v),
                transitionProps: OV(S, v),
                instant: y1(S, v, !0),
                animation: v1(S, v),
                exitProps: T.transition.enter,
                visible: LV(S, v),
                backdropColor: PV(T.transition),
                backfaceVisible: FV(S, v),
                onTapBackdrop: MV(T.transition, this.goBack),
                index: this.state.current + 1 + S,
                children: b1({
                  component: T.component,
                  transition: T.transition,
                }),
              },
              T.key
            )
          );
          return k(fu, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
              overflow: "hidden",
              backgroundColor: "unset",
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: k(sV.Provider, {
              value: this,
              children: ue(Xk.Provider, {
                value: p,
                children: [
                  k(im, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: TV(b),
                    animation: EV(b),
                    backfaceVisible: RV(b),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: k(eM, {
                      children: k(BD, {
                        children: k(Pd, {
                          presenceAffectsLayout: !1,
                          children: y,
                        }),
                      }),
                    }),
                  }),
                  k(Pd, { children: w }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: m,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: m, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? ce(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, m;
        if (
          $t(this, i, o).call(this) ||
          (Bf(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null
          ),
          !c || !cu(c) || !lu(c))
        )
          return;
        let g = { ...u, ...f };
        if (!!g.overCurrentContext)
          return ce(this, s).call(this, {
            type: "addOverlay",
            transition: g,
            component: c,
          });
        let b =
          ((m = c.key) == null ? void 0 : m.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        ce(this, s).call(this, {
          type: "add",
          key: b,
          transition: g,
          component: c,
        });
      }),
      C(t, "defaultProps", { enabled: !0 }),
      C(t, "contextType", SV),
      t
    );
  })(),
  Yk = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function CV(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function TV({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function EV({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : Yk;
}
function RV({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function PV(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function FV(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function _V(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function IV(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function OV(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function v1(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return Yk;
}
function y1(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function LV(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function b1(e) {
  return x.Children.map(e.component, (n) => {
    var r;
    if (!cu(n) || !lu(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? Ze(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      x.cloneElement(n, i)
    );
  });
}
function MV(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function AV(e) {
  let t = tb(),
    n = Ld();
  return (
    x.useInsertionEffect(() => {
      Ba();
    }, []),
    k(kV, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var mH = Kn($u(), 1);
var xH = Kn(Am(), 1);
function DV(e, t) {
  let n,
    r = (...o) => {
      qt.clearTimeout(n), (n = qt.setTimeout(e, t, ...o));
    },
    i = () => {
      qt.clearTimeout(n);
    };
  return (r.cancel = i), r;
}
function Sm(...e) {
  return e.filter(Boolean).join(" ");
}
var VV = (() => {
    function e(t = {}) {
      let n = rm(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => rm.resetObject(t));
      }),
      (e.addObserver = (t, n) => rm.addObserver(t, n)),
      e
    );
  })(),
  om = VV;
var zV = { update: 0 },
  BV = x.createContext({ update: NaN });
var $V = class extends Ee {
    constructor() {
      super(...arguments),
        C(this, "observers", []),
        C(this, "state", zV),
        C(this, "taskAdded", !1),
        C(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        C(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), gk.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), om.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        om._stores.forEach((t) => {
          let n = om.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        k(BV.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  GH = Kn($u(), 1);
function km(e, t) {
  Or(e) ? e(t) : Kk(e) && (e.current = t);
}
function Kk(e) {
  return Ze(e) && "current" in e;
}
function x1(e, t) {
  return {
    get current() {
      return e.current;
    },
    set current(n) {
      (e.current = n), t(n);
    },
  };
}
function NV(...e) {
  return (t) => e.forEach((n) => km(n, t));
}
function Zm(e) {
  let t = Zi(() => HV(e));
  return t.useSetup(e), t.cloneAsElement;
}
function HV(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = w1(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = w1(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle."
      );
    return (
      (r = !0),
      jn.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      jn.map(s, (l) => {
        if (zt(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return fr(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return k(je, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function w1(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    km(n, r), km(t, r);
  };
}
var jV = x.createContext({});
var cj = x.forwardRef(({ width: e, height: t, y: n, children: r, ...i }, o) => {
    let s = x.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
      a = Zm(o);
    return k(jV.Provider, { value: s, children: a(r, i) });
  }),
  WV = (e) =>
    x.forwardRef((t, n) => {
      let r = Na(t);
      return k(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  UV = class extends Ee {
    constructor() {
      super(...arguments), C(this, "state", { hasError: !1 });
    }
    componentDidCatch(e, t) {
      var n;
      let r = t?.componentStack;
      if (
        (console.error(
          "Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.",
          r
        ),
        this.setState({ hasError: !0 }),
        typeof _ < "u" && Math.random() <= 0.01)
      ) {
        let i =
          e instanceof Error && typeof e.stack == "string" ? e.stack : null;
        (n = _.__framer_events) == null ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), stack: i, componentStack: i ? void 0 : r },
          ]);
      }
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  GV = x.forwardRef(({ children: e, layoutId: t, as: n, ...r }, i) => {
    let o = Zi(() => (t ? `${t}-container` : void 0)),
      s = $a(n);
    return k(s, {
      layoutId: o,
      ...r,
      ref: i,
      children: k(ts.Provider, {
        value: !0,
        children: k(nM, {
          enabled: !1,
          children: k(B0, {
            id: t ?? "",
            inherit: "id",
            children: k(UV, {
              children: x.Children.map(e, (a) =>
                x.isValidElement(a) ? x.cloneElement(a, { layoutId: t }) : a
              ),
            }),
          }),
        }),
      }),
    });
  }),
  mj = WV(GV),
  qV = x.createContext(void 0),
  XV = "style[data-framer-css-ssr-minified]",
  YV = (() => {
    var e;
    if (!Qi()) return new Set();
    let t =
      (e = document.querySelector(XV)) == null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  KV = "data-framer-css-ssr",
  Qk = (e, t, n) =>
    x.forwardRef((r, i) => {
      let { sheet: o, cache: s } = x.useContext(qV) ?? {};
      if (!Qi()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return ue(je, {
          children: [
            k("style", {
              [KV]: !0,
              "data-framer-component": n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            k(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        x.useInsertionEffect(() => {
          if (n && YV.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && kk(l, o, s));
        }, []),
        k(e, { ...r, ref: i })
      );
    }),
  Jm = x.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  Cu = "framer-cursor-none",
  Cm = "framer-pointer-events-none",
  QV = x.memo(function ({ children: t }) {
    let n = Zi(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = U0();
    return ue(Jm.Provider, { value: n, children: [t, !r && k(r3, {})] });
  }),
  ZV = (() =>
    Qk(QV, [
      `.${Cu}, .${Cu} * { cursor: none !important; }`,
      `.${Cm}, .${Cm} * { pointer-events: none !important; }`,
    ]))(),
  JV = (() => ({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  }))();
function e3(e) {
  return !(!e || e.placement || e.alignment);
}
function ru(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      Se(e);
  }
}
function t3(e, t = "center") {
  switch (e) {
    case "top":
      return `${ru(t)}, -100%`;
    case "right":
      return `0%, ${ru(t)}`;
    case "bottom":
      return `${ru(t)}, 0%`;
    case "left":
      return `-100%, ${ru(t)}`;
    default:
      return "-50%, -50%";
  }
}
var S1 = "data-framer-portal-id";
function k1(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(S1)) {
      let i = n.getAttribute(S1);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function n3(e) {
  for (let t in e) return !1;
  return !0;
}
var r3 = x.memo(function () {
  let { onRegisterCursors: t } = A(Jm),
    n = Ci(0),
    r = Ci(0),
    i = Ci(0),
    o = x.useRef(null),
    s = x.useRef({ cursors: {}, cursorHash: void 0 }),
    a = Ik(),
    l = !n3(s.current.cursors);
  x.useEffect(() => {
    let S = 0,
      E = 0;
    function R() {
      n.set(S), r.set(E), Ti(i, 1, { type: "tween", duration: 0.2 });
    }
    function M(z) {
      z.pointerType !== "touch" &&
        ((S = z.clientX), (E = z.clientY), ee.update(R));
    }
    let I = () => {
      if (!l) return;
      let z = k1(S, E);
      z !== s.current.cursorHash &&
        ((s.current.cursorHash = z), ee.update(() => a()));
    };
    ee.read(I, !0);
    function G(z) {
      if (z.target === o.current || !o.current) return;
      let de = new PointerEvent(z.type, {
        bubbles: !0,
        cancelable: z.cancelable,
        pointerType: z.pointerType,
        pointerId: z.pointerId,
        composed: z.composed,
        isPrimary: z.isPrimary,
        buttons: z.buttons,
        button: z.button,
      });
      ee.update(() => {
        var ye;
        (ye = o.current) == null || ye.dispatchEvent(de);
      });
    }
    return (
      qt.addEventListener("pointermove", M),
      document.addEventListener("pointerdown", G),
      document.addEventListener("pointerup", G),
      () => {
        qt.removeEventListener("pointermove", M),
          document.removeEventListener("pointerdown", G),
          document.removeEventListener("pointerup", G),
          Kt(I);
      }
    );
  }, [i, n, r, l, a]),
    x.useEffect(() => {
      function S() {
        Ti(i, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", S),
        qt.addEventListener("blur", S),
        () => {
          document.removeEventListener("mouseleave", S),
            qt.removeEventListener("blur", S);
        }
      );
    }, [i]),
    x.useLayoutEffect(() => {
      function S(R) {
        (s.current.cursors = R),
          (s.current.cursorHash = k1(n.get(), r.get())),
          a();
      }
      let E = t(S);
      return () => {
        E(), document.body.classList.toggle(Cu, !1);
      };
    }, [n, r, t, a]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = e3(f);
  x.useLayoutEffect(() => {
    document.body.classList.toggle(Cu, d);
  }, [d]);
  let m = f?.component,
    g = f?.transition ?? { duration: 0 },
    v = _d(n, g),
    b = _d(r, g),
    h = Pl(() => {
      var S;
      return v.get() + (((S = f?.offset) == null ? void 0 : S.x) ?? 0);
    }),
    p = Pl(() => {
      var S;
      return b.get() + (((S = f?.offset) == null ? void 0 : S.y) ?? 0);
    }),
    y = f?.alignment,
    w = f?.placement,
    T = x.useCallback((S, E) => `translate(${t3(w, y)}) ${E}`, [y, w]);
  return !f || !m
    ? null
    : k(m, {
        transformTemplate: T,
        style: { ...JV, x: h, y: p, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: Cm,
      });
});
function wj(e) {
  let { registerCursors: t } = A(Jm),
    n = Zi(() => e);
  x.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var i3 = x.createContext(void 0),
  eg = class {
    constructor(e) {
      (this.resolver = e), C(this, "status");
    }
    static is(e) {
      return e instanceof eg;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    waitFor() {
      return this.resolver();
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          Se(e);
      }
    }
  },
  Zk = x.createContext(void 0),
  Rj = (() => Zk.Provider)(),
  Jk = () => x.useContext(Zk) ?? {};
function tg(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : tg(e.parentElement, t)
    : null;
}
function o3({ children: e }) {
  let { useGranularSuspense: t } = Jk();
  return t ? k(ck, { children: e }) : e;
}
function s3(e) {
  return Ae(function (n, r) {
    return k(o3, { children: k(e, { ...n, ref: r }) });
  });
}
var C1 = "element",
  a3 = "collection",
  l3 = "collectionItemId",
  c3 = "pathVariables",
  eC = "framer/page-link,";
function tC(e) {
  return xe(e) && e.startsWith(`data:${eC}`);
}
function ng(e) {
  if (tC(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(eC.length),
        r = t.searchParams,
        i = r.has(C1) ? r.get(C1) : void 0,
        o,
        s = r.get(a3),
        a = r.get(l3),
        l = r.get(c3);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function u3(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = ng(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var f3 = 500,
  d3 = 0.9,
  h3 = 1.7,
  p3 = 4,
  m3 = 1 / 0,
  Wo = new WeakMap(),
  iu = new Set(),
  Uo = new Map();
function g3() {
  var e;
  let t = Fe.connection || Fe.mozConnection || Fe.webkitConnection || {},
    n = Fe.deviceMemory && Fe.deviceMemory > h3,
    r,
    i,
    o;
  function s() {
    (r = t.effectiveType || ""),
      (i = t.saveData || r.includes("2g")),
      (o = r === "3g" || n ? p3 : m3);
  }
  (e = t.addEventListener) == null || e.call(t, "change", s), s();
  let a = new IntersectionObserver(u, { threshold: d3 }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let m = Uo.get(f);
    if (!m?.size || iu.has(f)) return;
    ++l, iu.add(f);
    let g = dk(f).catch(() => {});
    a.unobserve(d), Wo.delete(d);
    for (let v of m) a.unobserve(v), Wo.delete(v);
    m.clear(), Uo.delete(f), await g, --l;
  }
  function u(f) {
    var d;
    for (let m of f) {
      let g = m.target,
        v = Wo.get(g);
      if (!v || iu.has(v)) {
        a.unobserve(g), Wo.delete(g);
        continue;
      }
      let b = Uo.get(v),
        h = ((d = Uo.get(v)) == null ? void 0 : d.size) ?? 0;
      if (m.isIntersecting) {
        if (l >= o) continue;
        b ? b.add(g) : Uo.set(v, new Set([g])),
          setTimeout(c.bind(void 0, v, g), f3);
      } else b && b.delete(g), h <= 1 && Uo.delete(v);
    }
  }
  return (f, d) => {
    if (!iu.has(f))
      return (
        Wo.set(d, f),
        a.observe(d),
        () => {
          Wo.delete(d), a.unobserve(d);
        }
      );
  };
}
var v3 = !Nm || typeof IntersectionObserver > "u" ? null : g3(),
  sm = Symbol("noLocale"),
  ou = new Map();
function y3(e, t, n) {
  var r, i;
  let o =
    (i = (r = ou?.get(n?.id ?? sm)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = ou.get(n?.id ?? sm) ?? new Map();
  ou.set(n?.id ?? sm, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new eg(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
var b3 = "webPageId";
function T1(e) {
  return !!(e && typeof e == "object" && b3 in e);
}
function x3(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Tm(e) {
  if (!tC(e)) return e;
  let t = ng(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: x3(i) };
}
var nC = /:([a-z]\w*)/gi,
  w3 = ke(void 0);
function rC() {
  var e;
  let t = A(w3),
    n = (e = $m()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function iC(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(nC))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function rg(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function S3(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function ig(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function am(e, t = void 0) {
  let n = rg(e),
    r = ig(t, n);
  return {
    href: e === "" || S3(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function oC(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = tg(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    c && Q1(c?.page) && c.page.preload(),
      (a = e.navigate) == null || a.call(e, t, n, r, i);
  };
}
function k3(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      V(u, "unresolvedSlug should be defined");
      let f = y3(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let m = f.read();
        m && (l[c] = m);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function C3(e, t, n, r, i, o, s, a) {
  var l;
  let c = { ...i, ...o, ...a?.path },
    u = { ...i, ...s, ...a?.hash },
    f = (l = e.getRoute) == null ? void 0 : l.call(e, n),
    d = Vm(f, {
      currentRoutePath: t?.path,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: c,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
    }),
    m = d.split("#", 2)[1];
  return { routeId: n, route: f, href: d, elementId: m, pathVariables: c };
}
function T3(e, t, n) {
  if (!(!e.routes || !e.getRoute || !rg(t)))
    try {
      let [i, o] = t.split("#", 2);
      V(i !== void 0, "A href must have a defined pathname.");
      let [s] = i.split("?", 2);
      V(s !== void 0, "A href must have a defined pathname.");
      let { routeId: a, pathVariables: l } = fk(e.routes, s),
        c = e.getRoute(a);
      if (c) {
        let u = Object.assign({}, n, l);
        return {
          routeId: a,
          route: c,
          href: t,
          elementId: o,
          pathVariables: u,
        };
      }
    } catch {}
}
function E3(e, t, n, r, i) {
  let {
      webPageId: o,
      hash: s,
      pathVariables: a,
      hashVariables: l,
      unresolvedHashSlugs: c,
      unresolvedPathSlugs: u,
    } = n,
    f = k3(u, c, e.collectionUtils, r);
  return C3(e, t, o, s, i, a, l, f);
}
function R3(e, t, n, r, i, o) {
  if (!r) return am(e, t);
  let s = T3(n, e, i);
  if (!s) return am(e, t);
  let { routeId: a, route: l, elementId: c, pathVariables: u } = s;
  if (!l) return am(e, t);
  let f = Vm(l, {
      currentRoutePath: r.path,
      currentPathVariables: r.pathVariables,
      hash: c,
      pathVariables: u,
      preserveQueryParams: n.preserveQueryParams,
    }),
    d = ig(t, !0);
  return { href: f, target: d, onClick: oC(n, a, c, u, o) };
}
function P3(e, t, n) {
  var r;
  if (xe(e)) {
    let o = rg(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split("#", 2);
    if (s === void 0) return;
    let [a] = s.split("?", 2);
    if (a === void 0) return;
    let { routeId: l } = fk(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var Ij = s3(
  Ae(({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = Nu(),
      a = $m(),
      l = rC(),
      { activeLocale: c } = kL(),
      u = D(null),
      f = ae(() => {
        let g,
          v = (h) => {
            var p;
            if (h === null) {
              g?.(), (g = void 0);
              return;
            }
            let y = T1(t) ? t : Tm(t);
            if (!y) return;
            let w = P3(y, s, a);
            w && (g = (p = v3) == null ? void 0 : p(w, h));
          },
          b = zt(e) && "ref" in e;
        return b && Kk(e.ref)
          ? x1(e.ref, v)
          : b && Or(e.ref)
          ? NV(e.ref, v)
          : x1(u, v);
      }, [t, s, a, e]),
      d = Zm(o),
      m = ae(() => {
        if (!t) return {};
        let g = T1(t) ? t : Tm(t);
        if (!g) return {};
        if (xe(g)) return R3(g, n, s, a, l, r);
        let {
            routeId: v,
            href: b,
            elementId: h,
            pathVariables: p,
          } = E3(s, a, g, c, l),
          y = ig(n, !0);
        return {
          href: b,
          target: y,
          onClick: oC(s, v, h, p, r),
          "data-framer-page-link-current": (a && iC(a, g, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return d(e, { ...i, ...m, ref: f });
  })
);
var F3 = x.createContext(void 0);
function _3(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      (r.onload = () => t()), (r.onerror = n), (r.src = e);
    } catch (r) {
      n(r);
    }
  });
}
function I3(e) {
  return typeof e == "object" && e !== null;
}
function O3(e, t) {
  if (t === "") return e;
  let n = t.split(/[.[\]]+/u).filter((i) => i.length > 0),
    r = e;
  for (let i of n) {
    if (!I3(r)) return;
    r = r[i];
  }
  return r;
}
function ya(e) {
  return `${e.credentials}:${e.url}`;
}
var L3 = { status: "loading", data: void 0 };
function M3(e) {
  return xe(e) && !isNaN(Number(e));
}
function A3(e, t) {
  switch (e) {
    case "string":
      return xe(t) || bt(t);
    case "color":
      return xe(t);
    case "boolean":
      return Hu(t);
    case "number":
      return bt(t) || M3(t);
    case "link":
    case "image":
      return xe(t) && Em(t);
    default: {
      let n = e;
      return !1;
    }
  }
}
function D3(e, t) {
  if (e.status === "loading") return t.fallbackValue;
  if (e.status === "error") throw e.error;
  let n = O3(e.data, t.resultKeyPath);
  if (Ne(n)) throw new Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!A3(t.resultOutputType, n))
    throw new Error(
      `Resolved value '${n}' is not valid for type '${t.resultOutputType}'`
    );
  return n;
}
function Em(e) {
  try {
    return !!new URL(e).protocol;
  } catch {}
}
function lm(e, t) {
  if (be.current() === be.canvas) return !1;
  let n = t === 0 ? 500 : t * 1e3,
    r = Date.now(),
    i = e + n;
  return r >= i;
}
var E1 = () => {},
  Rr,
  du,
  Ni,
  Hi,
  ba,
  ci,
  hu = class {
    constructor() {
      C(this, "responseValues", new Map()),
        Zt(this, Rr, new Map()),
        Zt(this, du, new Set()),
        Zt(this, Ni, new Map()),
        Zt(this, Hi, new Map()),
        Zt(this, ba, new Map()),
        Zt(this, ci, new Map()),
        C(
          this,
          "persistCache",
          DV(() => {
            let e = {};
            for (let [t, n] of this.responseValues) {
              if (!n || n.status !== "success") continue;
              let r = ce(this, Ni).get(t);
              if (!r || r === 0) continue;
              let i = ce(this, Hi).get(t);
              i && ((i && lm(i, r)) || (e[t] = [i, r, n.data]));
            }
            try {
              localStorage.setItem(hu.cacheKey, JSON.stringify(e));
            } catch {}
          }, 500)
        );
    }
    unmount() {
      for (let [e, t] of ce(this, ci)) clearInterval(t), ce(this, ci).delete(e);
    }
    stopQueryRefetching(e) {
      let t = ya(e),
        n = ce(this, ci).get(t);
      n && (clearInterval(n), ce(this, ci).delete(t));
    }
    startQueryRefetching(e) {
      let t = ya(e),
        n = ce(this, ci).get(t),
        r = ce(this, Ni).get(t);
      if (n || !r) return;
      let i = qt.setInterval(() => {
        if (document.visibilityState === "hidden") return;
        let o = ce(this, Hi).get(t);
        !r || !o || this.fetchWithCache({ ...e, cacheDuration: r });
      }, r);
      ce(this, ci).set(t, i);
    }
    hydrateCache() {
      try {
        let e = localStorage.getItem(hu.cacheKey);
        if (!e) return;
        let t = JSON.parse(e);
        if (typeof t != "object") throw new Error("Invalid cache data");
        for (let n in t) {
          let r = t[n];
          if (!Array.isArray(r) || r.length !== 3)
            throw new Error("Invalid cache data");
          let [i, o, s] = r;
          lm(i, o) ||
            (ce(this, Hi).set(n, i),
            ce(this, Ni).set(n, o),
            this.responseValues.set(n, { status: "success", data: s }));
        }
      } catch {
        try {
          localStorage.removeItem(hu.cacheKey);
        } catch {}
      }
    }
    setResponseValue(e, t) {
      this.responseValues.set(e, t), this.persistCache();
      let n = ce(this, Rr).get(e);
      if (n) for (let r of n) r();
    }
    async prefetch(e) {
      if (!Qi() || !Em(e.url)) return;
      let t = ya(e);
      ce(this, du).add(t), await this.fetchWithCache(e);
      let n = this.getValue(t);
      if (!n || n.status === "loading")
        throw new Error("Unexpected result status for prefetch");
      let r = ce(this, Rr).get(t);
      for (let o of r ?? []) o();
      let i = D3(n, e);
      return (
        e.resultOutputType === "image" && xe(i) && (await _3(i).catch(E1)), i
      );
    }
    async fetchWithCache(e) {
      if (!Qi()) return;
      let t = ya(e),
        n = ce(this, ba).get(t);
      if (n) return n;
      let r = ce(this, Hi).get(t),
        i = r && lm(r, e.cacheDuration);
      if (this.responseValues.has(t) && !i) return;
      this.responseValues.get(t) || this.setResponseValue(t, L3);
      let a = (async () => {
        try {
          let l = await fetch(e.url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: e.credentials,
          });
          if (!l.ok) {
            this.setResponseValue(t, {
              status: "error",
              error: new Error("Invalid Response Status"),
              data: void 0,
            });
            return;
          }
          let c = await l.json();
          this.setResponseValue(t, { status: "success", data: c }),
            ce(this, Hi).set(t, Date.now());
        } catch (l) {
          this.setResponseValue(t, { status: "error", error: l, data: void 0 });
        }
      })();
      return (
        ce(this, ba).set(t, a),
        a.finally(() => {
          ce(this, ba).delete(t);
        }),
        a
      );
    }
    getValue(e, t = !1) {
      if (!(t && !ce(this, du).has(e))) return this.responseValues.get(e);
    }
    subscribe(e, t, n = !1) {
      let { url: r, cacheDuration: i } = e;
      if (!Em(r)) return E1;
      let o = ya(e),
        s = ce(this, Ni).get(o);
      (!s || i < s) && ce(this, Ni).set(o, i),
        n || (this.startQueryRefetching(e), this.fetchWithCache(e));
      let a = ce(this, Rr).get(o) ?? new Set();
      return (
        a.add(t),
        ce(this, Rr).set(o, a),
        () => {
          let l = ce(this, Rr).get(o);
          l &&
            (l.delete(t),
            l.size === 0 && ce(this, Rr).delete(o),
            ce(this, Rr).size === 0 && this.stopQueryRefetching(e));
        }
      );
    }
  },
  sC = hu;
Rr = new WeakMap();
du = new WeakMap();
Ni = new WeakMap();
Hi = new WeakMap();
ba = new WeakMap();
ci = new WeakMap();
C(sC, "cacheKey", "framer-fetch-client-cache");
var V3 = ke(void 0),
  z3 = ke(!0),
  B3 = ({ children: e, client: t }) => {
    let [n] = Xe(() => t ?? new sC()),
      [r, i] = Xe(!0);
    return (
      $(
        () => (
          n.hydrateCache(),
          dr(() => {
            i(!1);
          }),
          () => n.unmount()
        ),
        [n]
      ),
      k(z3.Provider, {
        value: r,
        children: k(V3.Provider, { value: n, children: e }),
      })
    );
  },
  $3,
  N3,
  H3,
  j3,
  W3;
$3 = new WeakMap();
N3 = new WeakMap();
H3 = new WeakMap();
j3 = new WeakMap();
W3 = new WeakMap();
function Vj({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: o,
  collectionUtils: s,
  notFoundPage: a,
  isReducedMotion: l = !1,
  includeDataObserver: c = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: d,
}) {
  let { enableAsyncURLUpdates: m } = Jk();
  if (
    (x.useEffect(() => {
      t || gk.start();
    }, []),
    t)
  )
    return k(D0, {
      reducedMotion: l ? "user" : "never",
      children: k(B3, {
        children: k(ZV, {
          children: k(F3.Provider, {
            value: r,
            children: k(EL, {
              initialRoute: n,
              initialPathVariables: i,
              initialLocaleId: u,
              routes: o,
              collectionUtils: s,
              notFoundPage: a,
              locales: f,
              defaultPageStyle: { minHeight: "100vh", width: "auto" },
              preserveQueryParams: d,
              enableAsyncURLUpdates: m,
            }),
          }),
        }),
      }),
    });
  {
    let g = c ? $V : x.Fragment;
    return k(g, {
      children: k(gL, {
        routes: o,
        children: k(AV, {
          children: x.isValidElement(e) ? e : x.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function U3(e, t, n) {
  let r = jn.map(e, (i) => (zt(i) ? fr(i, t) : i));
  return n ? r : k(je, { children: r });
}
var aC = x.createContext(void 0),
  lC = "ssr-variant";
function R1(e, t, n, r, i, o, s, a) {
  let l = x.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !x.isValidElement(c))
    return (
      console.warn(
        "PropertyOverrides: expected exactly one React element for a child",
        t
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [v] of Object.entries(r)) {
    if (v === i) continue;
    let b = e[v];
    if (!b || !q3(c.props, b)) {
      f.push(v);
      continue;
    }
    let h = P1([v], o);
    h.length && u.push({ variants: h, propOverrides: b });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    m = P1(d, o);
  m.length && u.unshift({ variants: m });
  let g = [];
  for (let { variants: v, propOverrides: b } of u) {
    if (a && !v.includes(a)) continue;
    let h = v.join("+"),
      p = k(
        aC.Provider,
        { value: new Set(v), children: s(c, b ? { ...n, ...b } : n) },
        h
      ),
      y = G3(v, o, r);
    y.length
      ? (V(u.length > 1, "Must branch out when there are hiddenClassNames"),
        (p = k("div", { className: `${lC} ${y.join(" ")}`, children: p }, h)))
      : V(u.length === 1, "Cannot branch out when hiddenClassNames is empty"),
      g.push(p);
  }
  return (
    V(
      !a || g.length === 1,
      "Must render exactly one branch when activeVariantId is given"
    ),
    g
  );
}
function cC(e) {
  return e.split("-")[2];
}
function G3(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    e.includes(i) || s || r.push(`hidden-${cC(o)}`);
  }
  return r;
}
function P1(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function q3(e, t) {
  for (let n of Object.keys(t)) if (!Ke(e[n], t[n], !0)) return !0;
  return !1;
}
function X3(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var Y3 = x.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = Zm(o),
      a = x.useContext(aC),
      l = hL(),
      c = Zi(() => (l.current ? (Qi() ? 1 : 2) : 0)),
      u = x.useContext(i3);
    if (!u)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, X3(t, i, n));
      case 1:
        return R1(n, r, i, d, f, a, s, t);
      case 2:
        return R1(n, r, i, d, f, a, U3, void 0);
      default:
        Se(c);
    }
  }),
  Nj = (() => Qk(Y3, `.${lC} { display: contents }`, "PropertyOverrides"))();
var K3 = Kn(y2(), 1);
function Q3(e) {
  return {
    trace(...t) {
      var n;
      return (n = ut.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = ut.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = ut.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = ut.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = ut.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function Z3(e) {
  return ju(e) && e.every(Ze);
}
function uC(e) {
  return Ze(e) && Or(e.read) && Or(e.preload);
}
function fC(e) {
  return Z3(e) || uC(e);
}
function og(e) {
  return Ze(e) && Ze(e.schema);
}
function dC(e) {
  return Ze(e) && Ze(e.collectionByLocaleId);
}
async function F1(e, t) {
  return uC(e) ? (await e.preload(t), e.read(t)) : e;
}
var hC = class {
  constructor(e, t) {
    (this.collection = e),
      (this.locale = t),
      C(this, "schema"),
      C(this, "indexes", []);
    let n = _A(e);
    V(n, "Collection does not have properties");
    let r = { id: { type: "string", isNullable: !1 } },
      i = Object.entries(n);
    for (let [o, s] of i) {
      if (!s) continue;
      let a = s.type;
      V(a !== "array", "Array properties are not supported"),
        V(a !== "object", "Object properties are not supported"),
        (r[o] = { type: a, isNullable: !0 });
    }
    this.schema = r;
  }
  getDatabaseItem(e, t) {
    let n = {};
    for (let r in this.schema) {
      let i = e[r];
      if (Zo(i)) continue;
      let o = this.schema[r];
      Ne(o) ||
        (V(o.type !== "unknown", "Invalid definition type"),
        (n[r] = { type: o.type, value: i }));
    }
    return { pointer: t, data: n };
  }
  async resolveRichText(e) {
    if (eg.is(e)) {
      let t = e.preload();
      return t && (await t), e.read();
    }
    return e;
  }
  async scanItems() {
    return (await F1(this.collection, this.locale)).map((t, n) => {
      let r = String(n);
      return this.getDatabaseItem(t, r);
    });
  }
  async resolveItems(e) {
    let t = await F1(this.collection, this.locale);
    return e.map((n) => {
      let r = Number(n),
        i = t[r];
      return V(i, "Can't find collection item"), this.getDatabaseItem(i, n);
    });
  }
  compareItems(e, t) {
    return Number(e.pointer) - Number(t.pointer);
  }
};
function J3(e, t) {
  switch (e?.type) {
    case "array":
      return {
        type: "array",
        value: e.value.map((r) => ne.cast(r, t.definition)),
      };
  }
  return null;
}
function pC(e) {
  switch (e?.type) {
    case "boolean":
      return e;
    case "number":
    case "string":
      return { type: "boolean", value: !!e.value };
  }
  return null;
}
function Vt(e) {
  let t = pC(e);
  return t?.value ?? !1;
}
function ez(e) {
  switch (e?.type) {
    case "color":
      return e;
  }
  return null;
}
function mC(e) {
  switch (e?.type) {
    case "date":
      return e;
    case "number":
    case "string": {
      let t = new Date(e.value);
      return Wm(t) ? { type: "date", value: t.toISOString() } : null;
    }
  }
  return null;
}
function tz(e) {
  let t = mC(e);
  return t?.value ?? null;
}
function nz(e) {
  switch (e?.type) {
    case "enum":
      return e;
    case "string":
      return { type: "enum", value: e.value };
  }
  return null;
}
function rz(e) {
  switch (e?.type) {
    case "file":
      return e;
  }
  return null;
}
function iz(e) {
  switch (e?.type) {
    case "link":
      return e;
    case "string":
      try {
        let { protocol: t } = new URL(e.value);
        return t === "http:" || t === "https:"
          ? { type: "link", value: e.value }
          : null;
      } catch {
        return null;
      }
  }
  return null;
}
function gC(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: "number", value: t } : null;
    }
  }
  return null;
}
function sg(e) {
  let t = gC(e);
  return t?.value ?? null;
}
function oz(e, t) {
  switch (e?.type) {
    case "object": {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [i, o] of r) {
        let s = e.value[i] ?? null;
        n[i] = ne.cast(s, o);
      }
      return { type: "object", value: n };
    }
  }
  return null;
}
function sz(e) {
  switch (e?.type) {
    case "responsiveimage":
      return e;
  }
  return null;
}
function az(e) {
  switch (e?.type) {
    case "richtext":
      return e;
  }
  return null;
}
function vC(e) {
  switch (e?.type) {
    case "string":
      return e;
    case "number":
      return { type: "string", value: String(e.value) };
  }
  return null;
}
function ji(e) {
  let t = vC(e);
  return t?.value ?? null;
}
var ne = {
  cast(e, t) {
    switch (t.type) {
      case "array":
        return J3(e, t);
      case "boolean":
        return pC(e);
      case "color":
        return ez(e);
      case "date":
        return mC(e);
      case "enum":
        return nz(e);
      case "file":
        return rz(e);
      case "link":
        return iz(e);
      case "number":
        return gC(e);
      case "object":
        return oz(e, t);
      case "responsiveimage":
        return sz(e);
      case "richtext":
        return az(e);
      case "string":
        return vC(e);
      case "unknown":
        return e;
      default:
        Se(t, "Unsupported cast");
    }
  },
  parse(e) {
    return Hu(e)
      ? { type: "boolean", value: e }
      : Wm(e)
      ? { type: "date", value: e.toISOString() }
      : bt(e)
      ? { type: "number", value: e }
      : xe(e)
      ? { type: "string", value: e }
      : ju(e)
      ? { type: "array", value: e.map(ne.parse) }
      : null;
  },
  equal(e, t, n) {
    return e?.type !== t?.type ? !1 : Wi(e, t, n) === 0;
  },
  lessThan(e, t, n) {
    return e?.type !== t?.type ? !1 : Wi(e, t, n) < 0;
  },
  lessThanOrEqual(e, t, n) {
    return e?.type !== t?.type ? !1 : Wi(e, t, n) <= 0;
  },
  greaterThan(e, t, n) {
    return e?.type !== t?.type ? !1 : Wi(e, t, n) > 0;
  },
  greaterThanOrEqual(e, t, n) {
    return e?.type !== t?.type ? !1 : Wi(e, t, n) >= 0;
  },
  in(e, t, n) {
    return t?.type !== "array" ? !1 : t.value.some((r) => ne.equal(r, e, n));
  },
  indexOf(e, t, n) {
    return e?.type !== "array"
      ? -1
      : e.value.findIndex((r) => ne.equal(r, t, n));
  },
  contains(e, t, n) {
    let r = ji(e),
      i = ji(t);
    return Pe(r) || Pe(i)
      ? !1
      : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
        r.includes(i));
  },
  startsWith(e, t, n) {
    let r = ji(e),
      i = ji(t);
    return Pe(r) || Pe(i)
      ? !1
      : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
        r.startsWith(i));
  },
  endsWith(e, t, n) {
    let r = ji(e),
      i = ji(t);
    return Pe(r) || Pe(i)
      ? !1
      : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
        r.endsWith(i));
  },
  length(e) {
    switch (e?.type) {
      case "array":
        return e.value.length;
    }
    return 0;
  },
  stringify(e) {
    if (e === null) return "null";
    switch (e.type) {
      case "array":
        return `[${e.value.map(ne.stringify).join(", ")}]`;
      case "boolean":
      case "number":
        return String(e.value);
      case "string":
        return `'${e.value}'`;
      case "enum":
        return `'${e.value}' /* Enum */`;
      case "color":
        return `'${e.value}' /* Color */`;
      case "date":
        return `'${e.value}' /* Date */`;
      case "richtext":
        return "RichText";
      case "responsiveimage":
        return "ResponsiveImage";
      case "file":
        return "File";
      case "link":
        return xe(e.value) ? `'${e.value}' /* Link */` : "Link";
      case "object":
        return "Object";
      default:
        Se(e);
    }
  },
};
function Wi(e, t, n) {
  if (Pe(e) || Pe(t)) return V(e === t), 0;
  switch (e.type) {
    case "array": {
      V(e.type === t.type);
      let r = e.value.length,
        i = t.value.length;
      if (r < i) return -1;
      if (r > i) return 1;
      for (let o = 0; o < r; o++) {
        let s = e.value[o],
          a = t.value[o];
        V(!Ne(s), "Left item must exist"), V(!Ne(a), "Right item must exist");
        let l = Wi(s, a, n);
        if (l !== 0) return l;
      }
      return 0;
    }
    case "boolean":
      return (
        V(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        V(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      V(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        V(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        V(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "link": {
      V(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        V(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "object": {
      V(e.type === t.type);
      let r = Object.keys(e.value).sort(),
        i = Object.keys(t.value).sort();
      if (r.length < i.length) return -1;
      if (r.length > i.length) return 1;
      for (let o = 0; o < r.length; o++) {
        let s = r[o],
          a = i[o];
        if (
          (V(!Ne(s), "Left key must exist"),
          V(!Ne(a), "Left key must exist"),
          s < a)
        )
          return -1;
        if (s > a) return 1;
        let l = e.value[s],
          c = t.value[a];
        V(!Ne(l), "Left value must exist"), V(!Ne(c), "Right value must exist");
        let u = Wi(l, c, n);
        if (u !== 0) return u;
      }
      return 0;
    }
    case "responsiveimage": {
      V(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "richtext": {
      V(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      V(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      Se(e);
  }
}
var Rm = "index",
  Ft = class {
    static from(e, t) {
      return sr(e, t, void 0);
    }
  },
  wt = class extends Ft {
    constructor(e, t, n) {
      super(),
        (this.schema = e),
        (this.name = t),
        (this.collection = n),
        C(this, "definition"),
        t === Rm
          ? (this.definition = { type: "number", isNullable: !1 })
          : (this.definition = e[t] ?? null);
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof wt &&
        Ke(this.definition, e.definition) &&
        Ke(e.name, this.name) &&
        Ke(e.collection, this.collection)
      );
    }
    evaluate(e) {
      let t = this.name;
      if (Ne(e) || t === Rm) throw new Error(`Can't evaluate identifier: ${t}`);
      if (this.collection) {
        let n = `${this.collection}_${t}`;
        return e.data[n] ?? e.data[t] ?? null;
      }
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  $e = class extends Ft {
    constructor(e, t) {
      super(), (this.definition = e), (this.value = t);
    }
    stringify() {
      return ne.stringify(this.value);
    }
    static fromNull() {
      return new $e(null, null);
    }
    static fromBoolean(e) {
      return new $e(
        { type: "boolean", isNullable: Pe(e) },
        Pe(e) ? null : { type: "boolean", value: e }
      );
    }
    static fromDate(e) {
      return new $e(
        { type: "date", isNullable: Pe(e) },
        Pe(e) ? null : { type: "date", value: e }
      );
    }
    static fromEnum(e) {
      return new $e(
        { type: "enum", isNullable: Pe(e) },
        Pe(e) ? null : { type: "enum", value: e }
      );
    }
    static fromNumber(e) {
      return new $e(
        { type: "number", isNullable: Pe(e) },
        Pe(e) ? null : { type: "number", value: e }
      );
    }
    static fromString(e) {
      return new $e(
        { type: "string", isNullable: Pe(e) },
        Pe(e) ? null : { type: "string", value: e }
      );
    }
    equals(e) {
      return (
        e instanceof $e &&
        Ke(this.definition, e.definition) &&
        Ke(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  ja = class extends Ft {
    constructor(e) {
      super(),
        (this.argumentExpressions = e),
        C(this, "collation", { type: 0 });
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if (Ne(t)) throw new Error("Missing argument in function call");
      return t;
    }
    equals(e) {
      return (
        e instanceof ja &&
        Ke(this.constructor, e.constructor) &&
        Ke(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  qu = class extends ja {
    constructor() {
      super(...arguments),
        C(this, "definition", qu.getDefinition()),
        C(this, "sourceExpression", this.getArgumentExpression(0)),
        C(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Pe(e) || e.type !== "string" || Pe(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Xu = class extends ja {
    constructor() {
      super(...arguments),
        C(this, "definition", Xu.getDefinition()),
        C(this, "sourceExpression", this.getArgumentExpression(0)),
        C(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Pe(e) || e.type !== "string" || Pe(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Yu = class extends ja {
    constructor() {
      super(...arguments),
        C(this, "definition", Yu.getDefinition()),
        C(this, "sourceExpression", this.getArgumentExpression(0)),
        C(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Pe(e) || e.type !== "string" || Pe(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Tu = class extends Ft {
    constructor(e, t, n) {
      super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        C(this, "definition"),
        C(this, "collation", { type: 0 });
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      n && r.push(n.definition), (this.definition = Tu.getDefinition(r));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error("Incompatible types in CASE expression");
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { ...t, isNullable: n } : null;
    }
    stringify() {
      let e = "CASE";
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += " END"),
        e
      );
    }
    equals(e) {
      return (
        e instanceof Tu &&
        Ke(this.valueExpression, e.valueExpression) &&
        Ke(this.conditions, e.conditions) &&
        Ke(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? ne.equal(s, r, this.collation) : Vt(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        e.push(t.whenExpression), e.push(t.thenExpression);
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  lz = class {
    constructor(e, t) {
      (this.whenExpression = e), (this.thenExpression = t);
    }
  },
  yC = class extends Ft {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    equals(e) {
      return (
        e instanceof yC &&
        Ke(this.constructor, e.constructor) &&
        Ke(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  Fa = class extends yC {
    constructor() {
      super(...arguments), C(this, "definition", Fa.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: !Vt(t) };
    }
  },
  _a = class extends Ft {
    constructor(e) {
      super(),
        (this.operandExpressions = e),
        C(this, "definition", _a.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(" AND ");
    }
    equals(e) {
      return (
        e instanceof _a &&
        Ke(this.constructor, e.constructor) &&
        Ke(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  Xi = class extends _a {
    constructor() {
      super(...arguments), C(this, "operator", "AND");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return Vt(r);
        }),
      };
    }
  },
  wa = class extends _a {
    constructor() {
      super(...arguments), C(this, "operator", "OR");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return Vt(r);
        }),
      };
    }
  },
  lr = class extends Ft {
    constructor(e, t) {
      super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        C(this, "definition", lr.getDefinition()),
        C(this, "collation", { type: 0 });
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${
        this.operator
      } ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof lr &&
        Ke(this.constructor, e.constructor) &&
        Ke(this.leftExpression, e.leftExpression) &&
        Ke(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  Jo = class extends lr {
    constructor() {
      super(...arguments), C(this, "operator", "=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: ne.equal(t, n, this.collation) };
    }
  },
  es = class extends lr {
    constructor() {
      super(...arguments), C(this, "operator", "!=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: !ne.equal(t, n, this.collation) };
    }
  },
  Ia = class extends lr {
    constructor() {
      super(...arguments), C(this, "operator", "<");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: ne.lessThan(t, n, this.collation) };
    }
  },
  Oa = class extends lr {
    constructor() {
      super(...arguments), C(this, "operator", "<=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: ne.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  La = class extends lr {
    constructor() {
      super(...arguments), C(this, "operator", ">");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: ne.greaterThan(t, n, this.collation) };
    }
  },
  Ma = class extends lr {
    constructor() {
      super(...arguments), C(this, "operator", ">=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: ne.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  Wa = class extends Ft {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof Wa &&
        Ke(this.constructor, e.constructor) &&
        Ke(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  Ku = class extends Wa {
    constructor() {
      super(...arguments),
        C(this, "dataType", "BOOLEAN"),
        C(this, "definition", Ku.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !0 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return ne.cast(t, this.definition);
    }
  },
  ag = class extends Wa {
    constructor() {
      super(...arguments),
        C(this, "dataType", "DATE"),
        C(this, "definition", ag.getDefinition());
    }
    static getDefinition() {
      return { type: "date", isNullable: !0 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return ne.cast(t, this.definition);
    }
  },
  lg = class extends Wa {
    constructor() {
      super(...arguments),
        C(this, "dataType", "NUMBER"),
        C(this, "definition", lg.getDefinition());
    }
    static getDefinition() {
      return { type: "number", isNullable: !0 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return ne.cast(t, this.definition);
    }
  },
  cg = class extends Wa {
    constructor() {
      super(...arguments),
        C(this, "dataType", "STRING"),
        C(this, "definition", cg.getDefinition());
    }
    static getDefinition() {
      return { type: "string", isNullable: !0 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return ne.cast(t, this.definition);
    }
  };
function sr(e, t, n) {
  let r = cz(e, t, n),
    i = r instanceof $e;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new $e(r.definition, o);
  }
  return r;
}
function cz(e, t, n) {
  switch (e.type) {
    case "Identifier":
      return uz(e, t);
    case "LiteralValue":
      return fz(e, n);
    case "FunctionCall":
      return hz(e, t);
    case "Case":
      return pz(e, t, n);
    case "UnaryOperation":
      return mz(e, t);
    case "BinaryOperation":
      return vz(e, t);
    case "TypeCast":
      return Ez(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function uz(e, t) {
  return new wt(t, e.name, e.collection);
}
function fz(e, t) {
  var n;
  let r = dz(e.value);
  switch (t?.type) {
    case "boolean": {
      let i = Vt(r.value);
      return $e.fromBoolean(i);
    }
    case "date": {
      let i = tz(r.value);
      return $e.fromDate(i);
    }
    case "enum":
      return ((n = r.value) == null ? void 0 : n.type) === "string"
        ? $e.fromEnum(r.value.value)
        : r;
    case "number": {
      let i = sg(r.value);
      return $e.fromNumber(i);
    }
    case "string": {
      let i = ji(r.value);
      return $e.fromString(i);
    }
  }
  return r;
}
function dz(e) {
  if (Hu(e)) return $e.fromBoolean(e);
  if (Wm(e)) {
    let t = e.toISOString();
    return $e.fromDate(t);
  }
  return bt(e) ? $e.fromNumber(e) : xe(e) ? $e.fromString(e) : $e.fromNull();
}
function hz(e, t) {
  let n = e.arguments.map((r) => sr(r, t, void 0));
  switch (e.functionName) {
    case "CONTAINS":
      return new qu(n);
    case "STARTS_WITH":
      return new Xu(n);
    case "ENDS_WITH":
      return new Yu(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function pz(e, t, n) {
  let r = e.value && sr(e.value, t, void 0),
    i = e.value && Aa(e.value, t),
    o = e.conditions.map((a) => {
      let l = sr(a.when, t, i),
        c = sr(a.then, t, n);
      return new lz(l, c);
    }),
    s = e.else && sr(e.else, t, n);
  return new Tu(r, o, s);
}
function mz(e, t) {
  let n = sr(e.value, t, void 0);
  switch (e.operator) {
    case "not":
      return Pm(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function Pm(e) {
  var t;
  if (e instanceof Fa) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === "boolean"
      ? n
      : new Ku(n);
  }
  if (e instanceof Jo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new es(n, r);
  }
  if (e instanceof es) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Jo(n, r);
  }
  if (e instanceof Ia) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Ma(n, r);
  }
  if (e instanceof Oa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new La(n, r);
  }
  if (e instanceof La) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Oa(n, r);
  }
  if (e instanceof Ma) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Ia(n, r);
  }
  if (e instanceof Xi) {
    let { operandExpressions: n } = e,
      r = n.map(Pm);
    return new wa(r);
  }
  if (e instanceof Xi) {
    let { operandExpressions: n } = e,
      r = n.map(Pm);
    return new Xi(r);
  }
  return new Fa(e);
}
function gz(e, t) {
  if (e.operator !== "and" && e.operator !== "or")
    return Aa(e.left, t) || Aa(e.right, t);
}
function vz(e, t) {
  let n = gz(e, t),
    r = sr(e.left, t, n),
    i = sr(e.right, t, n);
  switch (e.operator) {
    case "and":
      return yz(r, i);
    case "or":
      return bz(r, i);
    case "==":
      return xz(r, i);
    case "!=":
      return wz(r, i);
    case "<":
      return Sz(r, i);
    case "<=":
      return kz(r, i);
    case ">":
      return Cz(r, i);
    case ">=":
      return Tz(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function yz(e, t) {
  let n = [];
  return (
    e instanceof Xi ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof Xi ? n.push(...t.operandExpressions) : n.push(t),
    new Xi(n)
  );
}
function bz(e, t) {
  let n = [];
  return (
    e instanceof wa ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof wa ? n.push(...t.operandExpressions) : n.push(t),
    new wa(n)
  );
}
function xz(e, t) {
  let n = e instanceof wt;
  return t instanceof wt && !n ? new Jo(t, e) : new Jo(e, t);
}
function wz(e, t) {
  let n = e instanceof wt;
  return t instanceof wt && !n ? new es(t, e) : new es(e, t);
}
function Sz(e, t) {
  let n = e instanceof wt;
  return t instanceof wt && !n ? new La(t, e) : new Ia(e, t);
}
function kz(e, t) {
  let n = e instanceof wt;
  return t instanceof wt && !n ? new Ma(t, e) : new Oa(e, t);
}
function Cz(e, t) {
  let n = e instanceof wt;
  return t instanceof wt && !n ? new Ia(t, e) : new La(e, t);
}
function Tz(e, t) {
  let n = e instanceof wt;
  return t instanceof wt && !n ? new Oa(t, e) : new Ma(e, t);
}
function Ez(e, t) {
  let n = sr(e.value, t, void 0);
  switch (e.dataType) {
    case "BOOLEAN":
      return Rz(n);
    case "DATE":
      return Pz(n);
    case "NUMBER":
      return Fz(n);
    case "STRING":
      return _z(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function Rz(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "boolean"
    ? e
    : new Ku(e);
}
function Pz(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "date"
    ? e
    : new ag(e);
}
function Fz(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "number"
    ? e
    : new lg(e);
}
function _z(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "string"
    ? e
    : new cg(e);
}
function Aa(e, t) {
  switch (e.type) {
    case "Identifier":
      return Iz(e, t);
    case "LiteralValue":
      return;
    case "FunctionCall":
      return Oz(e);
    case "Case":
      return Lz(e, t);
    case "UnaryOperation":
      return Mz(e);
    case "BinaryOperation":
      return Az(e);
    case "TypeCast":
      return Dz(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function Iz(e, t) {
  return t[e.name];
}
function Oz(e) {
  switch (e.functionName) {
    case "CONTAINS":
      return qu.getDefinition();
    case "STARTS_WITH":
      return Xu.getDefinition();
    case "ENDS_WITH":
      return Yu.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function Lz(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = Aa(r.then, t);
    Ne(i) || n.push(i);
  }
  if (e.else) {
    let r = Aa(e.else, t);
    Ne(r) || n.push(r);
  }
  return Tu.getDefinition(n) ?? void 0;
}
function Mz(e) {
  switch (e.operator) {
    case "not":
      return Fa.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function Az(e) {
  switch (e.operator) {
    case "and":
    case "or":
      return _a.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
      return lr.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function Dz(e) {
  switch (e.dataType) {
    case "BOOLEAN":
      return Ku.getDefinition();
    case "DATE":
      return ag.getDefinition();
    case "NUMBER":
      return lg.getDefinition();
    case "STRING":
      return cg.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function Lr(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`;
}
function $n(e) {
  return `(items: ${e})`;
}
var Mr = class {
    constructor() {
      C(this, "executionTime", 0), C(this, "itemCount", 0);
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  bC = class extends Mr {
    constructor(e, t) {
      super(), (this.collection = e), (this.alias = t);
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${Lr(this.executionTime)} ${$n(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      let e = await this.collection.scanItems();
      return Ne(this.alias)
        ? e
        : e.map((t) => {
            let n = { ...t.data },
              r = Object.entries(n);
            for (let [i, o] of r) n[`${this.alias}_${i}`] = o;
            return { pointer: t.pointer, data: n };
          });
    }
  },
  Vz = class extends Mr {
    constructor(e, t, n) {
      super(), (this.leftPlan = e), (this.rightPlan = t), (this.constraint = n);
    }
    inspect() {
      let e = Math.max(
        this.leftPlan.executionTime ?? 0,
        this.rightPlan.executionTime ?? 0
      );
      return {
        label: `LeftJoinPlan ${Lr(
          this.executionTime - e,
          this.executionTime
        )} ${$n(this.itemCount)}`,
        nodes: [this.leftPlan.inspect(), this.rightPlan.inspect()],
      };
    }
    async _execute() {
      var e;
      let t = await this.leftPlan.execute(),
        n = await this.rightPlan.execute(),
        r = [];
      for (let i of t) {
        let o = !1;
        for (let s of n) {
          let a = { pointer: i.pointer, data: { ...i.data, ...s.data } };
          (e = this.constraint.evaluate(a)) != null &&
            e.value &&
            (r.push(a), (o = !0));
        }
        o || r.push(i);
      }
      return r;
    }
  },
  _r = class extends Mr {
    constructor(e, t) {
      super(), (this.index = e), (this.query = t);
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case "All":
              return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
              return `${n.type} ${ne.stringify(n.value)}`;
            default:
              Se(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== "Identifier" ||
          !i ||
          i.type === "All" ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(", ")}) ${Lr(this.executionTime)} ${$n(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  zz = class extends Mr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${Lr(
          this.executionTime - e,
          this.executionTime
        )} ${$n(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new Eu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  Bz = class extends Mr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${Lr(
          this.executionTime - e,
          this.executionTime
        )} ${$n(this.itemCount)} ${$n(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new Eu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  $z = class extends Mr {
    constructor(e, t, n, r) {
      super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r);
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${Lr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${$n(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== "Identifier") continue;
          let i = n.data[r.name];
          i?.type === "richtext" &&
            this.richTextResolver.resolve(r.name, i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  xC = class extends Mr {
    constructor(e, t) {
      super(), (this.childPlan = e), (this.filterExpression = t);
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${Lr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${$n(this.itemCount)} ${$n(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return Vt(n);
      });
    }
  },
  Nz = class extends Mr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n);
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions
          .map(
            (t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`
          )
          .join(", ")}) ${Lr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${$n(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        let r = { ...t, data: {} },
          i = { ...n, data: {} };
        for (let { expression: o, direction: s, collation: a } of this
          .orderExpressions) {
          let l = s === "asc";
          if (o instanceof wt && o.name === Rm) {
            let f = this.collection.compareItems(r, i);
            return l ? f : -f;
          }
          let c = o.evaluate(t),
            u = o.evaluate(n);
          if (!ne.equal(c, u, a)) {
            if (ne.lessThan(c, u, a) || Zo(c)) return l ? -1 : 1;
            if (ne.greaterThan(c, u, a) || Zo(u)) return l ? 1 : -1;
            throw new Error("Invalid comparison result.");
          }
        }
        return this.collection.compareItems(r, i);
      });
    }
  },
  Hz = class {
    constructor(e, t, n) {
      (this.expression = e), (this.direction = t), (this.collation = n);
    }
  },
  jz = class extends Mr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n);
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${
          ((e = this.limitExpression) == null ? void 0 : e.stringify()) ??
          "Infinity"
        }, OFFSET ${
          ((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"
        }) ${Lr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${$n(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(Zo(t) || t.type !== "number")) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(Zo(t) || t.type !== "number")) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  Eu = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new Eu();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new Eu();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  Wz = class {
    constructor(e) {
      (this.collections = e), C(this, "cache", new Map());
    }
    resolve(e, t) {
      let n = this.cache.get(e) ?? new Map();
      this.cache.set(e, n);
      let r = n.get(t);
      if (r) return r;
      for (let i of this.collections)
        if (e in i.schema) {
          let o = i.resolveRichText(t);
          return n.set(t, o), o;
        }
      throw new Error(`Rich text field not found: ${e}`);
    }
  },
  _1 = { type: "unknown", isNullable: !0 };
function Uz(e) {
  return Ze(e) && Or(e.getHash);
}
function oe(e, ...t) {
  let n = t.map((r) => (Uz(r) ? r.getHash() : JSON.stringify(r)));
  return `${e}(${n.join(", ")})`;
}
var ug = class {
    constructor(e, t) {
      (this.data = e), (this.pointer = t), C(this, "cached");
    }
    resolve() {
      return (
        this.cached ?? (this.cached = this.data.resolveRichText(this.pointer)),
        this.cached
      );
    }
  },
  Da = "index",
  wC = class extends Set {
    merge(e) {
      for (let t of e) this.add(t);
    }
    equals(e) {
      if (this === e) return !0;
      if (this.size !== e.size) return !1;
      for (let t of this) if (!e.has(t)) return !1;
      return !0;
    }
    subsetOf(e) {
      if (this === e) return !0;
      if (this.size > e.size) return !1;
      for (let t of this) if (!e.has(t)) return !1;
      return !0;
    }
    getHash() {
      let e = [];
      for (let t of this) e.push(t.id);
      return e.sort((t, n) => t - n), oe(this.name, ...e);
    }
  };
var Gz = class {
  constructor(e, t, n) {
    (this.id = e),
      (this.name = t),
      (this.data = n),
      C(this, "indexes", new Xz()),
      C(this, "fields", new H());
  }
};
var qz = class {
    constructor(e, t, n, r, i, o) {
      (this.id = e),
        (this.data = t),
        (this.collection = n),
        (this.lookupNodes = r),
        (this.constraint = i),
        (this.ordering = o),
        C(this, "resolvedFields", new H());
      for (let s in t.schema)
        for (let a of n.fields) a.name === s && this.resolvedFields.add(a);
    }
  },
  Xz = class extends wC {
    constructor() {
      super(...arguments), C(this, "name", "Indexes");
    }
  };
var su = class {
    constructor(e, t, n, r) {
      (this.id = e),
        (this.name = t),
        (this.definition = n),
        (this.collection = r);
    }
    getValue(e) {
      V(this.name, "Can only get value of field with a name");
      let t = e.data[this.name];
      return t?.type === "richtext"
        ? (V(this.collection, "Rich text field must have a collection"),
          { type: "richtext", value: new ug(this.collection.data, t.value) })
        : t ?? null;
    }
  },
  H = class extends wC {
    constructor() {
      super(...arguments), C(this, "name", "Fields");
    }
  };
function Yz() {
  return 25;
}
function Kz() {
  return 100 * 125;
}
var Ru = 1e3,
  te = class {
    constructor(e) {
      this.network = e;
    }
    static estimate(e, t) {
      let n = Yz(),
        r = Kz(),
        i = e * n + t / r;
      return new te(i);
    }
    static max(e, t) {
      let n = Math.max(e.network, t.network);
      return new te(n);
    }
    static compare(e, t) {
      return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
    }
    add(e) {
      return (this.network += e.network), this;
    }
    toString() {
      return `${this.network}ms`;
    }
  };
function SC(e) {
  let t = e.next();
  return V(t.done, "Generator must not yield"), t.value;
}
async function Qu(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function* He(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let o = e[i];
    if (Tk(o)) {
      let s = o.next();
      s.done
        ? (t[i] = s.value)
        : r.push(
            Qu(o, s).then((a) => {
              t[i] = a;
            })
          );
    } else t[i] = o;
  }
  return r.length > 0 && (yield Promise.all(r)), t;
}
function* Pu(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let o = e[i];
    if (Tk(o)) {
      let s = o.next();
      s.done
        ? (t[i] = s.value)
        : r.push(
            Qu(o, s).then((a) => {
              t[i] = a;
            })
          );
    } else t[i] = o;
  }
  return r.length > 0 && (yield Promise.all(r)), t;
}
var un = class {
    constructor(e, t) {
      (this.ordering = e), (this.resolvedFields = t);
    }
    getHash() {
      return oe("RequiredProps", this.ordering, this.resolvedFields);
    }
    get isMinimal() {
      return this.ordering.length === 0 && this.resolvedFields.size === 0;
    }
    canProvide(e) {
      return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
    }
    canProvideOrdering(e) {
      return this.ordering.length === 0
        ? !0
        : e.canProvideOrdering(this.ordering);
    }
    canProvideResolvedFields(e) {
      return this.resolvedFields.size === 0
        ? !0
        : e.canProvideResolvedFields(this.resolvedFields);
    }
  },
  hi = class {
    constructor() {
      C(this, "pointers", new Map()), C(this, "values", new Map());
    }
    getKey() {
      let e = this.pointers.values();
      return Array.from(e).join("-");
    }
    addValue(e, t) {
      this.values.set(e, t);
    }
    getValue(e) {
      return this.values.get(e) ?? null;
    }
    mergeValues(e) {
      for (let [t, n] of e.values) this.addValue(t, n);
    }
    addPointer(e, t) {
      this.pointers.set(e, t);
    }
    getPointer(e) {
      return this.pointers.get(e);
    }
    mergePointers(e) {
      for (let [t, n] of e.pointers) this.addPointer(t, n);
    }
    merge(e) {
      this.mergeValues(e), this.mergePointers(e);
    }
  },
  or = class {
    constructor(e, t = []) {
      (this.fields = e), (this.tuples = t);
    }
    push(e) {
      this.tuples.push(e);
    }
    filter(e) {
      let t = this.tuples.filter(e);
      return new or(this.fields, t);
    }
    map(e, t) {
      let n = this.tuples.map(t);
      return new or(e, n);
    }
    sort(e) {
      let t = Array.from(this.tuples).sort(e);
      return new or(this.fields, t);
    }
    slice(e, t) {
      let n = this.tuples.slice(e, t);
      return new or(this.fields, n);
    }
    union(e) {
      let t = new H();
      for (let i of this.fields) e.fields.has(i) && t.add(i);
      let n = new Set(),
        r = new or(t);
      for (let i of this.tuples) {
        let o = i.getKey();
        n.add(o), r.push(i);
      }
      for (let i of e.tuples) {
        let o = i.getKey();
        n.has(o) || r.push(i);
      }
      return r;
    }
    intersection(e) {
      let t = new H();
      for (let i of this.fields) e.fields.has(i) && t.add(i);
      let n = new Set(),
        r = new or(t);
      for (let i of this.tuples) {
        let o = i.getKey();
        n.add(o);
      }
      for (let i of e.tuples) {
        let o = i.getKey();
        n.has(o) && r.push(i);
      }
      return r;
    }
  },
  kC = class {
    constructor(e) {
      this.isSynchronous = e;
    }
  },
  Nn = class extends kC {
    constructor() {
      super(...arguments), C(this, "group");
    }
    getGroup() {
      return V(this.group, "Node must be in a group"), this.group;
    }
    setGroup(e) {
      V(!this.group, "Node is already in a group"), (this.group = e);
    }
    evaluateSync() {
      let e = this.evaluate(void 0);
      return SC(e);
    }
    evaluateAsync() {
      let e = this.evaluate(void 0);
      return Qu(e);
    }
  },
  Fm = class {
    constructor(e, t) {
      (this.input = e), (this.field = t);
    }
    getHash() {
      return oe("ProjectionField", this.input, this.field.id);
    }
  },
  CC = class extends Nn {
    constructor(e, t, n) {
      let r = e.isSynchronous;
      for (let i of t) r && (r = i.input.isSynchronous);
      super(r),
        (this.input = e),
        (this.projections = t),
        (this.passthrough = n),
        C(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe(
        "RelationalProject",
        this.inputGroup.id,
        ...this.projections,
        this.passthrough
      );
    }
    getOutputFields() {
      let e = new H();
      e.merge(this.passthrough);
      for (let t of this.projections) e.add(t.field);
      return e;
    }
    canProvideOrdering() {
      return !0;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new H(e.resolvedFields);
      for (let n of this.projections)
        t.merge(n.input.referencedFields), t.delete(n.field);
      return new un(e.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = new te(0);
      for (let o of this.projections) {
        let s = o.input.optimize(e);
        i = te.max(i, s);
      }
      return new te(0).add(te.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.projections.map((i) => {
          let o = i.input.getOptimized();
          return new Fm(o, i.field);
        });
      return new CC(n, r, this.passthrough);
    }
    *evaluate(e) {
      let t = this.getOutputFields(),
        n = yield* this.input.evaluate(e),
        r = yield* Pu(
          n.tuples.map((i) =>
            Pu(
              this.projections.map((o) =>
                He({ field: o.field, value: o.input.evaluate(e, i) })
              )
            )
          )
        );
      return n.map(t, (i, o) => {
        let s = new hi();
        s.mergePointers(i);
        for (let l of this.passthrough) {
          let c = i.getValue(l);
          s.addValue(l, c);
        }
        let a = r[o];
        V(a, "Projections must exist");
        for (let { field: l, value: c } of a) s.addValue(l, c);
        return s;
      });
    }
  },
  ns = { type: 0 },
  Ge = class extends kC {
    constructor(e, t, n) {
      super(n),
        (this.referencedFields = e),
        (this.referencedOuterFields = t),
        (this.isSynchronous = n);
    }
    evaluateSync() {
      let e = this.evaluate(void 0, void 0);
      return SC(e);
    }
    evaluateAsync() {
      let e = this.evaluate(void 0, void 0);
      return Qu(e);
    }
  },
  Qz = { type: 0 },
  fg = class {
    constructor(e, t) {
      (this.when = e), (this.then = t);
    }
    getHash() {
      return oe("CaseCondition", this.when, this.then);
    }
  },
  TC = class extends Ge {
    constructor(e, t, n) {
      let r = new H(),
        i = new H(),
        o = !0;
      e &&
        (r.merge(e.referencedFields),
        i.merge(e.referencedOuterFields),
        o && (o = e.isSynchronous));
      for (let { when: s, then: a } of t)
        r.merge(s.referencedFields),
          i.merge(s.referencedOuterFields),
          o && (o = s.isSynchronous),
          r.merge(a.referencedFields),
          i.merge(a.referencedOuterFields),
          o && (o = a.isSynchronous);
      n &&
        (r.merge(n.referencedFields),
        i.merge(n.referencedOuterFields),
        o && (o = n.isSynchronous)),
        super(r, i, o),
        (this.input = e),
        (this.conditions = t),
        (this.otherwise = n),
        C(this, "definition", { type: "unknown", isNullable: !0 });
    }
    getHash() {
      return oe("ScalarCase", this.input, ...this.conditions, this.otherwise);
    }
    toString() {
      let e = "CASE";
      this.input && (e = `${e} ${this.input}`);
      for (let { when: t, then: n } of this.conditions)
        e = `${e} WHEN ${t} THEN ${n}`;
      return this.otherwise && (e = `${e} ELSE ${this.otherwise}`), `${e} END`;
    }
    optimize(e) {
      var t, n;
      (t = this.input) == null || t.optimize(e);
      for (let r of this.conditions) r.when.optimize(e), r.then.optimize(e);
      return (n = this.otherwise) == null || n.optimize(e), new te(0);
    }
    getOptimized() {
      var e, t;
      let n = (e = this.input) == null ? void 0 : e.getOptimized(),
        r = this.conditions.map((o) => {
          let s = o.when.getOptimized(),
            a = o.then.getOptimized();
          return new fg(s, a);
        }),
        i = (t = this.otherwise) == null ? void 0 : t.getOptimized();
      return new TC(n, r, i);
    }
    *evaluate(e, t) {
      var n, r;
      let {
        input: i,
        conditions: o,
        otherwise: s,
      } = yield* He({
        input: ((n = this.input) == null ? void 0 : n.evaluate(e, t)) ?? null,
        conditions: Pu(
          this.conditions.map((a) =>
            He({ when: a.when.evaluate(e, t), then: a.then.evaluate(e, t) })
          )
        ),
        otherwise:
          ((r = this.otherwise) == null ? void 0 : r.evaluate(e, t)) ?? null,
      });
      if (this.input) {
        for (let { when: a, then: l } of o) if (ne.equal(i, a, Qz)) return l;
      } else for (let { when: a, then: l } of o) if (Vt(a)) return l;
      return s;
    }
  },
  cm = class {
    constructor(e, t = "asc") {
      (this.field = e), (this.direction = t);
    }
    getHash() {
      return oe("OrderingField", this.field.id, this.direction);
    }
  },
  ar = class {
    constructor(e) {
      C(this, "fields", []), e && this.merge(e);
    }
    get length() {
      return this.fields.length;
    }
    getHash() {
      return oe("Ordering", ...this.fields);
    }
    push(e) {
      this.fields.push(e);
    }
    merge(e) {
      this.fields.push(...e.fields);
    }
    equals(e) {
      return this === e
        ? !0
        : this.length !== e.length
        ? !1
        : this.getHash() === e.getHash();
    }
  },
  _m = class {
    constructor(e) {
      (this.parent = e),
        C(this, "node"),
        C(this, "ordering"),
        C(this, "fields", []);
    }
    takeNode() {
      let e = this.node;
      return V(e, "Node is missing"), (this.node = void 0), e;
    }
    setNode(e) {
      V(!this.node, "Node already set"), (this.node = e);
    }
    setOrdering(e) {
      this.ordering = e;
    }
    push() {
      return new _m(this);
    }
    replace() {
      return new _m(this.parent);
    }
    addField(e) {
      this.fields.push(e);
    }
    addFieldsFromScope(e) {
      for (let t of e.fields) this.addField(t);
    }
    resolveField(e, t) {
      var n;
      let r = [];
      for (let i of this.fields)
        i.name === e && ((t && i.collectionName !== t) || r.push(i));
      if (r.length === 1) return r[0];
      if (r.length > 1) throw new Error("Ambiguous fields");
      return (n = this.parent) == null ? void 0 : n.resolveField(e, t);
    }
    has(e) {
      var t;
      return this.fields.includes(e)
        ? !0
        : ((t = this.parent) == null ? void 0 : t.has(e)) ?? !1;
    }
    getRequiredOrdering() {
      return this.ordering ?? new ar();
    }
    getRequiredResolvedFields() {
      let e = new H();
      for (let { field: t } of this.fields) t.collection && e.add(t);
      return e;
    }
    getRequiredProps() {
      let e = this.getRequiredOrdering(),
        t = this.getRequiredResolvedFields();
      return new un(e, t);
    }
    getNamedFields() {
      let e = {};
      for (let { name: t, field: n } of this.fields) e[t] = n;
      return e;
    }
    getSingleField() {
      V(this.fields.length === 1, "Scope must contain exactly one field");
      let e = this.fields[0];
      return V(e, "Field must exist"), e.field;
    }
  },
  Zz = class {
    constructor(e, t, n) {
      (this.normalizer = e),
        (this.query = t),
        (this.locale = n),
        C(this, "collectionId", 0),
        C(this, "indexId", 0),
        C(this, "fieldId", 0),
        C(this, "subqueries", []);
    }
    build() {
      let e = new _m();
      return this.buildQuery(e, this.query);
    }
    buildQuery(e, t) {
      let n = { type: "Select", ...t };
      return this.buildSelect(e, n);
    }
    buildSelect(e, t) {
      let n = this.buildFrom(e, t.from),
        r = n.getRequiredOrdering();
      if (t.where) {
        let a = n.takeNode(),
          l = this.buildExpression(n, t.where),
          c = this.normalizer.newRelationalFilter(a, l);
        n.setNode(c);
      }
      let i = [],
        o;
      if (t.orderBy) {
        o = new ar();
        for (let a of t.orderBy)
          if (a.type === "Identifier") {
            let l = n.resolveField(a.name, a.collection);
            if (Ne(l)) continue;
            let c = new cm(l.field, a.direction);
            o.push(c);
          } else {
            let l = this.buildExpression(n, a),
              c = this.fieldId++,
              u = new su(c, void 0, l.definition, void 0),
              f = new Fm(l, u);
            i.push(f);
            let d = new cm(u, a.direction);
            o.push(d);
          }
        o.merge(r);
      } else o = r;
      let s = this.buildSelectList(n, t.select, i);
      if ((s.setOrdering(o), t.offset)) {
        let a = s.takeNode(),
          l = this.buildExpression(e, t.offset),
          c = this.normalizer.newRelationalOffset(a, l, o);
        s.setNode(c);
      }
      if (t.limit) {
        let a = s.takeNode(),
          l = this.buildExpression(e, t.limit),
          c = this.normalizer.newRelationalLimit(a, l, o);
        s.setNode(c);
      }
      return s;
    }
    buildSelectList(e, t, n) {
      let r = e.push(),
        i = new H(),
        o = [...n];
      for (let l of t)
        if (l.type === "Identifier") {
          let c = e.resolveField(l.name, l.collection);
          if (Ne(c)) continue;
          i.add(c.field), r.addField({ ...c, name: l.alias ?? c.name });
        } else {
          let c = this.buildExpression(e, l);
          V(l.alias, "Subqueries should have an alias");
          let u = this.fieldId++,
            f = l.alias,
            d = new su(u, f, c.definition, void 0),
            m = new Fm(c, d);
          o.push(m), r.addField({ field: d, name: f });
        }
      let s = e.takeNode(),
        a = this.normalizer.newRelationalProject(s, o, i);
      return r.setNode(a), r;
    }
    buildFrom(e, t) {
      switch (t.type) {
        case "Collection":
          return this.buildCollection(e, t);
        case "LeftJoin":
          return this.buildJoin(e, t);
        default:
          Se(t, "Unsupported from type");
      }
    }
    buildCollection(e, t) {
      let n = e.push(),
        r = Jz(t.data, this.locale),
        i = t.alias,
        o = this.collectionId++,
        s = new Gz(o, i, r);
      for (let [l, c] of Object.entries(r.schema)) {
        let u = this.fieldId++,
          f = new su(u, l, c, s);
        n.addField({ field: f, name: l, collectionName: i }), s.fields.add(f);
      }
      {
        let l = { type: "number", isNullable: !1 },
          c = this.fieldId++,
          u = new su(c, Da, l, s);
        n.addField({ field: u, name: Da, collectionName: i });
        let f = new ar(),
          d = new cm(u);
        f.push(d), n.setOrdering(f);
      }
      for (let l of r.indexes) {
        let c = [];
        for (let g of l.fields) {
          let v = this.buildExpression(n, g);
          c.push(v);
        }
        let u;
        l.where && (u = this.buildExpression(n, l.where));
        let f = new ar(),
          d = this.indexId++,
          m = new qz(d, l, s, c, u, f);
        s.indexes.add(m);
      }
      let a = this.normalizer.newRelationalScan(s);
      return n.setNode(a), n;
    }
    buildJoin(e, t) {
      let n = this.buildFrom(e, t.left),
        r = this.buildFrom(e, t.right),
        i = new ar(),
        o = n.getRequiredOrdering();
      i.merge(o);
      let s = r.getRequiredOrdering();
      i.merge(s);
      let a = e.push();
      a.addFieldsFromScope(n), a.addFieldsFromScope(r), a.setOrdering(i);
      let l = this.buildExpression(a, t.constraint),
        c = n.takeNode(),
        u = r.takeNode(),
        f;
      switch (t.type) {
        case "LeftJoin":
          f = this.normalizer.newRelationalLeftJoin(c, u, l);
          break;
        default:
          Se(t.type, "Unsupported join type");
      }
      return a.setNode(f), a;
    }
    buildExpression(e, t) {
      switch (t.type) {
        case "Identifier":
          return this.buildIdentifier(e, t);
        case "LiteralValue":
          return this.buildLiteralValue(t);
        case "FunctionCall":
          return this.buildFunctionCall(e, t);
        case "Case":
          return this.buildCase(e, t);
        case "UnaryOperation":
          return this.buildUnaryOperation(e, t);
        case "BinaryOperation":
          return this.buildBinaryOperation(e, t);
        case "TypeCast":
          return this.buildTypeCast(e, t);
        case "Select":
          throw new Error(
            "Subqueries are only supported inside subquery function calls"
          );
        default:
          Se(t, "Unsupported expression");
      }
    }
    buildIdentifier(e, t) {
      let n = e.resolveField(t.name, t.collection);
      if (n) {
        let r = !1;
        for (let i of this.subqueries)
          r
            ? i.referencedOuterFields.add(n.field)
            : ((r = i.inScope.has(n)), r && i.referencedFields.add(n.field));
        return this.normalizer.newScalarVariable(n.field, r);
      }
      return this.normalizer.newScalarConstant(_1, null);
    }
    buildLiteralValue(e) {
      let t = ne.parse(e.value);
      return this.normalizer.newScalarConstant(_1, t);
    }
    buildFunctionCall(e, t) {
      let n = (r) => {
        let i = t.arguments[r];
        return V(i, "Missing argument"), this.buildExpression(e, i);
      };
      switch (t.functionName) {
        case "CONTAINS": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarContains(r, i);
        }
        case "STARTS_WITH": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarStartsWith(r, i);
        }
        case "ENDS_WITH": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarEndsWith(r, i);
        }
        case "LENGTH": {
          let r = n(0);
          return this.normalizer.newScalarLength(r);
        }
        case "INDEX_OF": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarIndexOf(r, i);
        }
        case "ARRAY": {
          let r = t.arguments[0];
          return (
            V(r, "Missing argument"),
            V(r.type === "Select", "Subqueries require a select expression"),
            this.buildSubqueryArray(e, r)
          );
        }
        case "FLAT_ARRAY": {
          let r = t.arguments[0];
          return (
            V(r, "Missing argument"),
            V(r.type === "Select", "Subqueries require a select expression"),
            this.buildSubqueryFlatArray(e, r)
          );
        }
        default:
          throw new Error("Unsupported function name");
      }
    }
    buildSubqueryArray(e, t) {
      try {
        let n = new I1(e);
        this.subqueries.push(n);
        let r = this.buildSelect(e, t),
          i = r.takeNode(),
          o = r.getNamedFields(),
          s = r.getRequiredOrdering(),
          a = n.referencedFields,
          l = n.referencedOuterFields;
        return this.normalizer.newScalarArray(i, o, s, a, l);
      } finally {
        this.subqueries.pop();
      }
    }
    buildSubqueryFlatArray(e, t) {
      try {
        let n = new I1(e);
        this.subqueries.push(n);
        let r = this.buildSelect(e, t),
          i = r.takeNode(),
          o = r.getSingleField(),
          s = r.getRequiredOrdering(),
          a = n.referencedFields,
          l = n.referencedOuterFields;
        return this.normalizer.newScalarFlatArray(i, o, s, a, l);
      } finally {
        this.subqueries.pop();
      }
    }
    buildCase(e, t) {
      let n;
      t.value && (n = this.buildExpression(e, t.value));
      let r = t.conditions.map((o) => {
          let s = this.buildExpression(e, o.when),
            a = this.buildExpression(e, o.then);
          return new fg(s, a);
        }),
        i;
      return (
        t.else && (i = this.buildExpression(e, t.else)),
        this.normalizer.newScalarCase(n, r, i)
      );
    }
    buildUnaryOperation(e, t) {
      let n = this.buildExpression(e, t.value);
      switch (t.operator) {
        case "not":
          return this.normalizer.newScalarNot(n);
        default:
          Se(t.operator, "Unsupported unary operator");
      }
    }
    buildBinaryOperation(e, t) {
      let n = this.buildExpression(e, t.left),
        r = this.buildExpression(e, t.right);
      switch (t.operator) {
        case "and":
          return this.normalizer.newScalarAnd(n, r);
        case "or":
          return this.normalizer.newScalarOr(n, r);
        case "==":
          return this.normalizer.newScalarEquals(n, r);
        case "!=":
          return this.normalizer.newScalarNotEquals(n, r);
        case "<":
          return this.normalizer.newScalarLessThan(n, r);
        case "<=":
          return this.normalizer.newScalarLessThanOrEqual(n, r);
        case ">":
          return this.normalizer.newScalarGreaterThan(n, r);
        case ">=":
          return this.normalizer.newScalarGreaterThanOrEqual(n, r);
        case "in":
          return this.normalizer.newScalarIn(n, r);
        default:
          Se(t.operator, "Unsupported binary operator");
      }
    }
    buildTypeCast(e, t) {
      let n = this.buildExpression(e, t.value);
      switch (t.dataType) {
        case "BOOLEAN": {
          let r = { type: "boolean", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        case "DATE": {
          let r = { type: "date", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        case "NUMBER": {
          let r = { type: "number", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        case "STRING": {
          let r = { type: "string", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        default:
          throw new Error("Unsupported data type");
      }
    }
  };
function Jz(e, t) {
  if (fC(e)) return new hC(e, t);
  if (og(e)) return e;
  if (dC(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Se(e, "Unsupported collection type");
}
var I1 = class {
    constructor(e) {
      (this.inScope = e),
        C(this, "referencedFields", new H()),
        C(this, "referencedOuterFields", new H());
    }
  },
  Fu = class extends Nn {
    constructor(e, t) {
      super(e.isSynchronous && t.isSynchronous),
        (this.input = e),
        (this.predicate = t),
        C(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("RelationalFilter", this.inputGroup.id, this.predicate);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering() {
      return !0;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new H(e.resolvedFields);
      return t.merge(this.predicate.referencedFields), new un(e.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = this.predicate.optimize(e);
      return new te(0).add(te.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.predicate.getOptimized();
      return new Fu(n, r);
    }
    *evaluate(e) {
      let t = yield* this.input.evaluate(e),
        n = yield* Pu(t.tuples.map((r) => this.predicate.evaluate(e, r)));
      return t.filter((r, i) => {
        let o = n[i] ?? null;
        return Vt(o);
      });
    }
  },
  kn = class extends Nn {
    constructor(e, t) {
      super(!1), (this.index = e), (this.query = t);
    }
    getHash() {
      return oe("RelationalIndexLookup", this.index.id, ...this.query);
    }
    getOutputFields() {
      return this.index.collection.fields;
    }
    canProvideOrdering(e) {
      return e.equals(this.index.ordering);
    }
    canProvideResolvedFields(e) {
      return e.subsetOf(this.index.resolvedFields);
    }
    optimize() {
      let e = this.query.every((t) => t.type === "All");
      return te.estimate(1, e ? 100 * Ru : 50 * Ru);
    }
    getOptimized() {
      return new kn(this.index, this.query);
    }
    *evaluate() {
      let e = this.index,
        t = e.collection,
        n = this.getOutputFields(),
        i = (yield e.data.lookupItems(this.query)).map((o) => {
          let s = new hi();
          for (let a of e.resolvedFields) {
            let l = a.getValue(o);
            s.addPointer(t, o.pointer), s.addValue(a, l);
          }
          return s;
        });
      return new or(n, i);
    }
  },
  EC = class extends Nn {
    constructor(e, t) {
      super(e.isSynchronous && t.isSynchronous),
        (this.left = e),
        (this.right = t),
        C(this, "leftGroup", this.left.getGroup()),
        C(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe(
        "RelationalIntersection",
        this.leftGroup.id,
        this.rightGroup.id
      );
    }
    getOutputFields() {
      let e = new H(),
        t = this.leftGroup.relational.outputFields,
        n = this.rightGroup.relational.outputFields;
      for (let r of t) n.has(r) && e.add(r);
      return e;
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e) {
      let t = new ar();
      return new un(t, e.resolvedFields);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(t),
        o = e.optimizeGroup(this.rightGroup, i);
      return te.max(r, o);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(e),
        i = this.rightGroup.getOptimized(r);
      return new EC(n, i);
    }
    *evaluate(e) {
      let { left: t, right: n } = yield* He({
        left: this.left.evaluate(e),
        right: this.right.evaluate(e),
      });
      return t.intersection(n);
    }
  },
  _u = class extends Nn {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
        (this.left = e),
        (this.right = t),
        (this.constraint = n),
        C(this, "leftGroup", this.left.getGroup()),
        C(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe(
        "RelationalLeftJoin",
        this.leftGroup.id,
        this.rightGroup.id,
        this.constraint
      );
    }
    getOutputFields() {
      let e = new H();
      return (
        e.merge(this.leftGroup.relational.outputFields),
        e.merge(this.rightGroup.relational.outputFields),
        e
      );
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e, t) {
      let n = new H(),
        r = e.relational.outputFields;
      for (let o of t.resolvedFields) r.has(o) && n.add(o);
      for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
      let i = new ar();
      return new un(i, n);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(this.leftGroup, t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(this.rightGroup, t),
        o = e.optimizeGroup(this.rightGroup, i),
        s = this.constraint.optimize(e);
      return te.max(te.max(r, o), s);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(this.leftGroup, e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(this.rightGroup, e),
        i = this.rightGroup.getOptimized(r),
        o = this.constraint.getOptimized();
      return new _u(n, i, o);
    }
    *evaluate(e) {
      let t = this.getOutputFields(),
        n = new or(t),
        { left: r, right: i } = yield* He({
          left: this.left.evaluate(e),
          right: this.right.evaluate(e),
        });
      for (let o of r.tuples) {
        let s = !1;
        for (let a of i.tuples) {
          let l = new hi();
          l.merge(o), l.merge(a);
          let c = yield* this.constraint.evaluate(e, l);
          Vt(c) && (n.push(l), (s = !0));
        }
        s || n.push(o);
      }
      return n;
    }
  },
  dg = class extends Nn {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
        (this.left = e),
        (this.right = t),
        (this.constraint = n),
        C(this, "leftGroup", this.left.getGroup()),
        C(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe(
        "RelationalRightJoin",
        this.leftGroup.id,
        this.rightGroup.id,
        this.constraint
      );
    }
    getOutputFields() {
      let e = new H();
      return (
        e.merge(this.leftGroup.relational.outputFields),
        e.merge(this.rightGroup.relational.outputFields),
        e
      );
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e, t) {
      let n = new H(),
        r = e.relational.outputFields;
      for (let o of t.resolvedFields) r.has(o) && n.add(o);
      for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
      let i = new ar();
      return new un(i, n);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(this.leftGroup, t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(this.rightGroup, t),
        o = e.optimizeGroup(this.rightGroup, i),
        s = this.constraint.optimize(e);
      return te.max(te.max(r, o), s);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(this.leftGroup, e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(this.rightGroup, e),
        i = this.rightGroup.getOptimized(r),
        o = this.constraint.getOptimized();
      return new dg(n, i, o);
    }
    *evaluate(e) {
      let t = this.getOutputFields(),
        n = new or(t),
        { left: r, right: i } = yield* He({
          left: this.left.evaluate(e),
          right: this.right.evaluate(e),
        });
      for (let o of i.tuples) {
        let s = !1;
        for (let a of r.tuples) {
          let l = new hi();
          l.merge(o), l.merge(a);
          let c = yield* this.constraint.evaluate(e, l);
          Vt(c) && (n.push(l), (s = !0));
        }
        s || n.push(o);
      }
      return n;
    }
  },
  Iu = class extends Nn {
    constructor(e) {
      super(!1), (this.collection = e);
    }
    getHash() {
      return oe("RelationalScan", this.collection.id);
    }
    getOutputFields() {
      return this.collection.fields;
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields(e) {
      return e.subsetOf(this.collection.fields);
    }
    optimize() {
      return te.estimate(1, 200 * Ru);
    }
    getOptimized() {
      return new Iu(this.collection);
    }
    *evaluate() {
      let e = this.collection,
        t = this.getOutputFields(),
        r = (yield e.data.scanItems()).map((i) => {
          let o = new hi();
          for (let s of t) {
            let a = s.getValue(i);
            o.addPointer(e, i.pointer), o.addValue(s, a);
          }
          return o;
        });
      return new or(t, r);
    }
  },
  RC = class extends Nn {
    constructor(e, t) {
      super(e.isSynchronous && t.isSynchronous),
        (this.left = e),
        (this.right = t),
        C(this, "leftGroup", this.left.getGroup()),
        C(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe("RelationalUnion", this.leftGroup.id, this.rightGroup.id);
    }
    getOutputFields() {
      let e = new H(),
        t = this.leftGroup.relational.outputFields,
        n = this.rightGroup.relational.outputFields;
      for (let r of t) n.has(r) && e.add(r);
      return e;
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e) {
      let t = new ar();
      return new un(t, e.resolvedFields);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(t),
        o = e.optimizeGroup(this.rightGroup, i);
      return te.max(r, o);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(e),
        i = this.rightGroup.getOptimized(r);
      return new RC(n, i);
    }
    *evaluate(e) {
      let { left: t, right: n } = yield* He({
        left: this.left.evaluate(e),
        right: this.right.evaluate(e),
      });
      return t.union(n);
    }
  },
  Ou = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarAnd", this.left, this.right);
    }
    toString() {
      return `${this.left} && ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Ou(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: Vt(n) && Vt(r) };
    }
  },
  Vn = class extends Ge {
    constructor(e, t) {
      let n = new H(),
        r = new H();
      super(n, r, !0), (this.definition = e), (this.value = t);
    }
    getHash() {
      return oe("ScalarConstant", this.definition, this.value);
    }
    toString() {
      return ne.stringify(this.value);
    }
    optimize() {
      return new te(0);
    }
    getOptimized() {
      return this;
    }
    *evaluate() {
      return this.value;
    }
  },
  e5 = { type: 0 },
  hg = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarContains", this.source, this.target);
    }
    toString() {
      return `CONTAINS(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new hg(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* He({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "boolean", value: ne.contains(n, r, e5) };
    }
  },
  t5 = { type: 0 },
  pg = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarEndsWith", this.source, this.target);
    }
    toString() {
      return `ENDS_WITH(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new pg(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* He({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "boolean", value: ne.endsWith(n, r, t5) };
    }
  },
  Lu = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarEquals", this.left, this.right);
    }
    toString() {
      return `${this.left} == ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Lu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: ne.equal(n, r, ns) };
    }
  },
  Mu = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarGreaterThan", this.left, this.right);
    }
    toString() {
      return `${this.left} > ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Mu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: ne.greaterThan(n, r, ns) };
    }
  },
  Au = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarGreaterThanOrEqual", this.left, this.right);
    }
    toString() {
      return `${this.left} >= ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Au(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: ne.greaterThanOrEqual(n, r, ns) };
    }
  },
  Du = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarLessThan", this.left, this.right);
    }
    toString() {
      return `${this.left} < ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Du(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: ne.lessThan(n, r, ns) };
    }
  },
  Vu = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarLessThanOrEqual", this.left, this.right);
    }
    toString() {
      return `${this.left} <= ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Vu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: ne.lessThanOrEqual(n, r, ns) };
    }
  },
  zu = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarNotEquals", this.left, this.right);
    }
    toString() {
      return `${this.left} != ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new zu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: !ne.equal(n, r, ns) };
    }
  },
  Bu = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarOr", this.left, this.right);
    }
    toString() {
      return `${this.left} || ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Bu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: Vt(n) || Vt(r) };
    }
  },
  n5 = { type: 0 },
  mg = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarStartsWith", this.source, this.target);
    }
    toString() {
      return `STARTS_WITH(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new mg(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* He({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "boolean", value: ne.startsWith(n, r, n5) };
    }
  },
  r5 = class {
    constructor(e) {
      (this.normalizer = e), C(this, "memo", this.normalizer.memo);
    }
    explore(e) {
      let t = e.getGroup();
      if (e instanceof _u) {
        let n = new dg(e.left, e.right, e.constraint);
        this.memo.addRelational(n, t);
      }
      if (e instanceof Fu) {
        if (e.predicate instanceof Ou) {
          let n = this.normalizer.newRelationalFilter(
              e.input,
              e.predicate.left
            ),
            r = this.normalizer.newRelationalFilter(e.input, e.predicate.right),
            i = new EC(n, r);
          this.memo.addRelational(i, t);
        }
        if (e.predicate instanceof Bu) {
          let n = this.normalizer.newRelationalFilter(
              e.input,
              e.predicate.left
            ),
            r = this.normalizer.newRelationalFilter(e.input, e.predicate.right),
            i = new RC(n, r);
          this.memo.addRelational(i, t);
        }
      }
      if (e instanceof Iu)
        for (let n of e.collection.indexes) {
          if (n.constraint) continue;
          let r = ir(n.lookupNodes.length),
            i = new kn(n, r);
          this.memo.addRelational(i, t);
        }
      if (e instanceof Fu) {
        for (let n of e.inputGroup.nodes)
          if (n instanceof Iu)
            for (let r of n.collection.indexes) {
              if (
                e.predicate instanceof Lu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof Vn &&
                r.data.supportedLookupTypes.includes("Equals")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = { type: "Equals", value: e.predicate.right.value };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof zu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof Vn &&
                r.data.supportedLookupTypes.includes("NotEquals")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = { type: "NotEquals", value: e.predicate.right.value };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof Du &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof Vn &&
                r.data.supportedLookupTypes.includes("LessThan")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = {
                  type: "LessThan",
                  value: e.predicate.right.value,
                  inclusive: !1,
                };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof Vu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof Vn &&
                r.data.supportedLookupTypes.includes("LessThan")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = {
                  type: "LessThan",
                  value: e.predicate.right.value,
                  inclusive: !0,
                };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof Mu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof Vn &&
                r.data.supportedLookupTypes.includes("GreaterThan")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = {
                  type: "GreaterThan",
                  value: e.predicate.right.value,
                  inclusive: !1,
                };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof Au &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof Vn &&
                r.data.supportedLookupTypes.includes("GreaterThan")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = {
                  type: "GreaterThan",
                  value: e.predicate.right.value,
                  inclusive: !0,
                };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof hg &&
                e.predicate.source === r.lookupNodes[0] &&
                e.predicate.target instanceof Vn &&
                r.data.supportedLookupTypes.includes("Contains")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = { type: "Contains", value: e.predicate.target.value };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof mg &&
                e.predicate.source === r.lookupNodes[0] &&
                e.predicate.target instanceof Vn &&
                r.data.supportedLookupTypes.includes("StartsWith")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = { type: "StartsWith", value: e.predicate.target.value };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof pg &&
                e.predicate.source === r.lookupNodes[0] &&
                e.predicate.target instanceof Vn &&
                r.data.supportedLookupTypes.includes("EndsWith")
              ) {
                let i = ir(r.lookupNodes.length);
                i[0] = { type: "EndsWith", value: e.predicate.target.value };
                let o = new kn(r, i);
                this.memo.addRelational(o, t);
              }
            }
      }
    }
  };
function ir(e) {
  let t = { type: "All" };
  return new Array(e).fill(t);
}
var i5 = class {
    constructor(e, t) {
      (this.id = e),
        (this.relational = t),
        C(this, "nodes", []),
        C(this, "winners", new Map());
    }
    addNode(e) {
      this.nodes.push(e), e.setGroup(this);
    }
    getWinner(e) {
      let t = e.getHash(),
        n = this.winners.get(t);
      if (n) return n;
      let r = new o5();
      return this.winners.set(t, r), r;
    }
    getOptimized(e) {
      let t = this.getWinner(e);
      V(t.node, "Group not optimized");
      let n = t.node.getOptimized(e);
      return n.setGroup(this), n;
    }
  },
  o5 = class {
    constructor() {
      C(this, "node"), C(this, "cost", new te(1 / 0));
    }
    update(e, t) {
      te.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t));
    }
  },
  s5 = class {
    constructor(e) {
      this.outputFields = e;
    }
    isCompatible(e) {
      return this.outputFields.equals(e.outputFields);
    }
  },
  a5 = class {
    constructor() {
      C(this, "nodes", new Map()), C(this, "groups", []);
    }
    addGroup(e) {
      let t = this.groups.length,
        n = new i5(t, e);
      return this.groups.push(n), n;
    }
    addRelational(e, t) {
      let n = e.getHash(),
        r = this.nodes.get(n);
      if (r) return r;
      this.nodes.set(n, e);
      let i = e.getOutputFields(),
        o = new s5(i);
      return (
        t ?? (t = this.addGroup(o)),
        t.addNode(e),
        V(
          o.isCompatible(t.relational),
          "Group has inconsistent relational props"
        ),
        e
      );
    }
    addScalar(e) {
      let t = e.getHash(),
        n = this.nodes.get(t);
      return n || (this.nodes.set(t, e), e);
    }
  },
  PC = class extends Nn {},
  FC = class extends PC {
    constructor(e, t) {
      super(!1),
        (this.input = e),
        (this.fields = t),
        C(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("EnforcerResolve", this.inputGroup.id, this.fields);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering() {
      return !0;
    }
    canProvideResolvedFields(e) {
      return e.subsetOf(this.fields);
    }
    getInputRequiredProps(e) {
      let t = new H();
      return new un(e.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n);
      return te.estimate(0, 100 * Ru).add(r);
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t);
      return new FC(n, this.fields);
    }
    *evaluate(e) {
      let t = yield* this.input.evaluate(e);
      V(this.fields.subsetOf(t.fields), "Fields can't be resolved");
      let n = new Set();
      for (let i of this.fields)
        V(i.collection, "Collection required to resolve field"),
          n.add(i.collection);
      for (let i of t.tuples)
        for (let o of this.fields) {
          let s = i.getValue(o);
          s?.type === "richtext" &&
            (V(s.value instanceof ug, "Pointer must be wrapped"),
            s.value.resolve());
        }
      let r = yield Promise.all(
        Array.from(n).map(async (i) => {
          let o = t.tuples.map((a) => {
              let l = a.getPointer(i);
              return V(l, "Pointer required to resolve field"), l;
            }),
            s = await i.data.resolveItems(o);
          return V(s.length === o.length, "Invalid number of items"), [i, s];
        })
      );
      return t.map(t.fields, (i, o) => {
        let s = new hi();
        s.merge(i);
        for (let [a, l] of r) {
          let c = l[o];
          V(c, "Item not found");
          let u = i.getPointer(a);
          V(c.pointer === u, "Pointer mismatch");
          for (let f of a.fields) {
            let d = f.getValue(c);
            s.addValue(f, d);
          }
        }
        return s;
      });
    }
  },
  um = { type: 0 },
  _C = class extends PC {
    constructor(e, t) {
      super(e.isSynchronous),
        (this.input = e),
        (this.ordering = t),
        C(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("EnforcerSort", this.inputGroup.id, this.ordering);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e) {
      return e.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new H(e.resolvedFields);
      for (let { field: r } of this.ordering.fields) r.name !== Da && t.add(r);
      let n = new ar();
      return new un(n, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n);
      return new te(0).add(r);
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t);
      return new _C(n, this.ordering);
    }
    *evaluate(e) {
      return (yield* this.input.evaluate(e)).sort((n, r) => {
        for (let { field: i, direction: o } of this.ordering.fields) {
          let s = o === "asc";
          if (i.name === Da) {
            let c = i.collection;
            V(c, "Collection required for sorting");
            let u = n.getPointer(c);
            V(u, "Pointer required for sorting");
            let f = { pointer: u, data: {} },
              d = r.getPointer(c);
            V(d, "Pointer required for sorting");
            let m = { pointer: d, data: {} },
              g = c.data.compareItems(f, m);
            return s ? g : -g;
          }
          let a = n.getValue(i),
            l = r.getValue(i);
          if (!ne.equal(a, l, um)) {
            if (Pe(a) || ne.lessThan(a, l, um)) return s ? -1 : 1;
            if (Pe(l) || ne.greaterThan(a, l, um)) return s ? 1 : -1;
            throw new Error("Invalid comparison");
          }
        }
        return 0;
      });
    }
  },
  IC = class extends Nn {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous),
        (this.input = e),
        (this.limit = t),
        (this.ordering = n),
        C(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("RelationalLimit", this.inputGroup.id, this.limit);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e) {
      return e.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new H(e.resolvedFields);
      return t.merge(this.limit.referencedFields), new un(this.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = this.limit.optimize(e);
      return new te(0).add(te.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.limit.getOptimized();
      return new IC(n, r, this.ordering);
    }
    *evaluate(e) {
      let { input: t, limit: n } = yield* He({
          input: this.input.evaluate(e),
          limit: this.limit.evaluate(e, void 0),
        }),
        r = sg(n) ?? 1 / 0;
      return r === 1 / 0 ? t : t.slice(0, r);
    }
  },
  OC = class extends Nn {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous),
        (this.input = e),
        (this.offset = t),
        (this.ordering = n),
        C(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("RelationalOffset", this.inputGroup.id, this.offset);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e) {
      return e.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new H(e.resolvedFields);
      return t.merge(this.offset.referencedFields), new un(this.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = this.offset.optimize(e);
      return new te(0).add(te.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.offset.getOptimized();
      return new OC(n, r, this.ordering);
    }
    *evaluate(e) {
      let { input: t, offset: n } = yield* He({
          input: this.input.evaluate(e),
          offset: this.offset.evaluate(e, void 0),
        }),
        r = sg(n) ?? 0;
      return r === 0 ? t : t.slice(r);
    }
  },
  LC = class extends Ge {
    constructor(e, t, n, r, i) {
      super(r, i, e.isSynchronous),
        (this.input = e),
        (this.namedFields = t),
        (this.ordering = n),
        (this.referencedFields = r),
        (this.referencedOuterFields = i),
        C(this, "inputGroup", this.input.getGroup()),
        C(this, "definition");
      let o = {},
        s = Object.entries(t);
      for (let [a, l] of s) o[a] = l.definition;
      this.definition = {
        type: "array",
        isNullable: !1,
        definition: { type: "object", isNullable: !1, definitions: o },
      };
    }
    getHash() {
      let e = {},
        t = Object.entries(this.namedFields);
      for (let [n, r] of t) e[n] = r.id;
      return oe(
        "ScalarArray",
        this.inputGroup.id,
        e,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    toString() {
      return `ARRAY(${this.inputGroup.id})`;
    }
    getInputRequiredProps() {
      let e = new H(),
        t = Object.values(this.namedFields);
      for (let n of t) e.add(n);
      return new un(this.ordering, e);
    }
    optimize(e) {
      let t = this.getInputRequiredProps(),
        n = e.optimizeGroup(this.inputGroup, t);
      return new te(0).add(n);
    }
    getOptimized() {
      let e = this.getInputRequiredProps(),
        t = this.inputGroup.getOptimized(e);
      return new LC(
        t,
        this.namedFields,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    *evaluate(e, t) {
      let n = new hi();
      e && n.merge(e), t && n.merge(t);
      let r = yield* this.input.evaluate(n),
        i = Object.entries(this.namedFields);
      return {
        type: "array",
        value: r.tuples.map((o) => {
          let s = {};
          for (let [a, l] of i) s[a] = o.getValue(l);
          return { type: "object", value: s };
        }),
      };
    }
  },
  MC = class extends Ge {
    constructor(e, t) {
      super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
        (this.input = e),
        (this.definition = t),
        V(t.isNullable, "Unsupported non-nullable cast");
    }
    getHash() {
      return oe("ScalarCast", this.input, this.definition);
    }
    toString() {
      return `CAST(${this.input} AS ${this.definition.type.toUpperCase()})`;
    }
    optimize(e) {
      return this.input.optimize(e);
    }
    getOptimized() {
      let e = this.input.getOptimized();
      return new MC(e, this.definition);
    }
    *evaluate(e, t) {
      let n = yield* this.input.evaluate(e, t);
      return ne.cast(n, this.definition);
    }
  },
  AC = class extends Ge {
    constructor(e, t, n, r, i) {
      super(r, i, e.isSynchronous),
        (this.input = e),
        (this.field = t),
        (this.ordering = n),
        (this.referencedFields = r),
        (this.referencedOuterFields = i),
        C(this, "inputGroup", this.input.getGroup()),
        C(this, "definition"),
        (this.definition = {
          type: "array",
          isNullable: !1,
          definition: this.field.definition,
        });
    }
    getHash() {
      return oe(
        "ScalarFlatArray",
        this.inputGroup.id,
        this.field.id,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    toString() {
      return `FLAT_ARRAY(${this.inputGroup.id})`;
    }
    getInputRequiredProps() {
      let e = new H();
      return e.add(this.field), new un(this.ordering, e);
    }
    optimize(e) {
      let t = this.getInputRequiredProps(),
        n = e.optimizeGroup(this.inputGroup, t);
      return new te(0).add(n);
    }
    getOptimized() {
      let e = this.getInputRequiredProps(),
        t = this.inputGroup.getOptimized(e);
      return new AC(
        t,
        this.field,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    *evaluate(e, t) {
      let n = new hi();
      return (
        e && n.merge(e),
        t && n.merge(t),
        {
          type: "array",
          value: (yield* this.input.evaluate(n)).tuples.map((i) =>
            i.getValue(this.field)
          ),
        }
      );
    }
  },
  l5 = { type: 0 },
  DC = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarIn", this.left, this.right);
    }
    toString() {
      return `${this.left} IN ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new DC(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: ne.in(n, r, l5) };
    }
  },
  c5 = { type: 1 },
  VC = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        C(this, "definition", { type: "number", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarIndexOf", this.source, this.target);
    }
    toString() {
      return `INDEX_OF(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new VC(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* He({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "number", value: ne.indexOf(n, r, c5) };
    }
  },
  zC = class extends Ge {
    constructor(e) {
      super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
        (this.input = e),
        C(this, "definition", { type: "number", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarLength", this.input);
    }
    toString() {
      return `LENGTH(${this.input})`;
    }
    optimize(e) {
      return this.input.optimize(e);
    }
    getOptimized() {
      let e = this.input.getOptimized();
      return new zC(e);
    }
    *evaluate(e, t) {
      let n = yield* this.input.evaluate(e, t);
      return { type: "number", value: ne.length(n) };
    }
  },
  Im = class extends Ge {
    constructor(e) {
      super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
        (this.input = e),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarNot", this.input);
    }
    toString() {
      return `NOT ${this.input}`;
    }
    optimize(e) {
      return this.input.optimize(e);
    }
    getOptimized() {
      let e = this.input.getOptimized();
      return new Im(e);
    }
    *evaluate(e, t) {
      let n = yield* this.input.evaluate(e, t);
      return { type: "boolean", value: !Vt(n) };
    }
  },
  u5 = { type: 0 },
  BC = class extends Ge {
    constructor(e, t) {
      let n = new H();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new H();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        C(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarNotIn", this.left, this.right);
    }
    toString() {
      return `${this.left} NOT IN ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return te.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new BC(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* He({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: !ne.in(n, r, u5) };
    }
  },
  an = class extends Ge {
    constructor(e, t) {
      V(e.name !== Da, "Invalid field name");
      let n = new H(),
        r = new H();
      t ? r.add(e) : n.add(e),
        super(n, r, !0),
        (this.field = e),
        (this.isOuterField = t),
        C(this, "definition", this.field.definition);
    }
    getHash() {
      return oe("ScalarVariable", this.field.id, this.isOuterField);
    }
    toString() {
      return `"${this.field.name}" /* ${this.field.id} */`;
    }
    optimize() {
      return new te(0);
    }
    getOptimized() {
      return this;
    }
    *evaluate(e, t) {
      return this.isOuterField
        ? (V(e, "Context must exist"), e.getValue(this.field))
        : (V(t, "Tuple must exist"), t.getValue(this.field));
    }
  },
  f5 = class {
    constructor(e) {
      this.memo = e;
    }
    finishRelational(e) {
      return this.memo.addRelational(e);
    }
    newRelationalScan(e) {
      let t = new Iu(e);
      return this.finishRelational(t);
    }
    newRelationalIndexLookup(e, t) {
      let n = new kn(e, t);
      return this.finishRelational(n);
    }
    newRelationalLeftJoin(e, t, n) {
      let r = new _u(e, t, n);
      return this.finishRelational(r);
    }
    newRelationalRightJoin(e, t, n) {
      return this.newRelationalLeftJoin(t, e, n);
    }
    newRelationalFilter(e, t) {
      if (
        e instanceof _u &&
        t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)
      ) {
        let r = this.newRelationalFilter(e.left, t);
        return this.newRelationalLeftJoin(r, e.right, e.constraint);
      }
      if (
        e instanceof dg &&
        t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)
      ) {
        let r = this.newRelationalFilter(e.right, t);
        return this.newRelationalLeftJoin(e.left, r, e.constraint);
      }
      let n = new Fu(e, t);
      return this.finishRelational(n);
    }
    newRelationalProject(e, t, n) {
      let r = new CC(e, t, n);
      return this.finishRelational(r);
    }
    newRelationalLimit(e, t, n) {
      let r = new IC(e, t, n);
      return this.finishRelational(r);
    }
    newRelationalOffset(e, t, n) {
      let r = new OC(e, t, n);
      return this.finishRelational(r);
    }
    finishScalar(e) {
      if (
        !(e instanceof Vn) &&
        e.isSynchronous &&
        e.referencedFields.size === 0 &&
        e.referencedOuterFields.size === 0
      ) {
        let n = e.evaluateSync();
        return this.newScalarConstant(e.definition, n);
      }
      return this.memo.addScalar(e);
    }
    removeUnknown(e, t) {
      if (e.definition.type !== "unknown" || t.type === "unknown") return e;
      let n = { ...t, isNullable: !0 };
      return this.newScalarCast(e, n);
    }
    newScalarVariable(e, t) {
      let n = new an(e, t);
      return this.finishScalar(n);
    }
    newScalarConstant(e, t) {
      let n = new Vn(e, t);
      return this.finishScalar(n);
    }
    newScalarNot(e) {
      if (e instanceof Im) {
        if (e.input.definition.type === "boolean") return e.input;
        let n = { type: "boolean", isNullable: !0 };
        return this.newScalarCast(e.input, n);
      }
      if (e instanceof Lu) return this.newScalarNotEquals(e.left, e.right);
      if (e instanceof zu) return this.newScalarEquals(e.left, e.right);
      if (e instanceof Du)
        return this.newScalarGreaterThanOrEqual(e.left, e.right);
      if (e instanceof Vu) return this.newScalarGreaterThan(e.left, e.right);
      if (e instanceof Mu)
        return this.newScalarLessThanOrEqual(e.left, e.right);
      if (e instanceof Au) return this.newScalarLessThan(e.left, e.right);
      if (e instanceof Ou) {
        let n = this.newScalarNot(e.left),
          r = this.newScalarNot(e.right);
        return this.newScalarOr(n, r);
      }
      if (e instanceof Bu) {
        let n = this.newScalarNot(e.left),
          r = this.newScalarNot(e.right);
        return this.newScalarAnd(n, r);
      }
      let t = new Im(e);
      return this.finishScalar(t);
    }
    newScalarAnd(e, t) {
      let n = new Ou(e, t);
      return this.finishScalar(n);
    }
    newScalarOr(e, t) {
      let n = new Bu(e, t);
      return this.finishScalar(n);
    }
    newScalarEquals(e, t) {
      let n = e instanceof an;
      if (t instanceof an && !n) return this.newScalarEquals(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new Lu(e, t);
      return this.finishScalar(i);
    }
    newScalarNotEquals(e, t) {
      let n = e instanceof an;
      if (t instanceof an && !n) return this.newScalarNotEquals(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new zu(e, t);
      return this.finishScalar(i);
    }
    newScalarLessThan(e, t) {
      let n = e instanceof an;
      if (t instanceof an && !n) return this.newScalarGreaterThan(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new Du(e, t);
      return this.finishScalar(i);
    }
    newScalarLessThanOrEqual(e, t) {
      let n = e instanceof an;
      if (t instanceof an && !n) return this.newScalarGreaterThanOrEqual(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new Vu(e, t);
      return this.finishScalar(i);
    }
    newScalarGreaterThan(e, t) {
      let n = e instanceof an;
      if (t instanceof an && !n) return this.newScalarLessThan(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new Mu(e, t);
      return this.finishScalar(i);
    }
    newScalarGreaterThanOrEqual(e, t) {
      let n = e instanceof an;
      if (t instanceof an && !n) return this.newScalarLessThanOrEqual(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new Au(e, t);
      return this.finishScalar(i);
    }
    newScalarIn(e, t) {
      t.definition.type === "array" &&
        (e = this.removeUnknown(e, t.definition.definition));
      let n = { type: "array", isNullable: !0, definition: e.definition };
      t = this.removeUnknown(t, n);
      let r = new DC(e, t);
      return this.finishScalar(r);
    }
    newScalarNotIn(e, t) {
      t.definition.type === "array" &&
        (e = this.removeUnknown(e, t.definition.definition));
      let n = { type: "array", isNullable: !0, definition: e.definition };
      t = this.removeUnknown(t, n);
      let r = new BC(e, t);
      return this.finishScalar(r);
    }
    newScalarCase(e, t, n) {
      if (e) {
        let i = [];
        for (let { when: o, then: s } of t) {
          let a = this.removeUnknown(o, e.definition),
            l = new fg(a, s);
          i.push(l);
        }
        t = i;
      }
      let r = new TC(e, t, n);
      return this.finishScalar(r);
    }
    newScalarContains(e, t) {
      let n = new hg(e, t);
      return this.finishScalar(n);
    }
    newScalarStartsWith(e, t) {
      let n = new mg(e, t);
      return this.finishScalar(n);
    }
    newScalarEndsWith(e, t) {
      let n = new pg(e, t);
      return this.finishScalar(n);
    }
    newScalarLength(e) {
      let t = new zC(e);
      return this.finishScalar(t);
    }
    newScalarIndexOf(e, t) {
      let n = new VC(e, t);
      return this.finishScalar(n);
    }
    newScalarArray(e, t, n, r, i) {
      let o = new LC(e, t, n, r, i);
      return this.finishScalar(o);
    }
    newScalarFlatArray(e, t, n, r, i) {
      let o = new AC(e, t, n, r, i);
      return this.finishScalar(o);
    }
    newScalarCast(e, t) {
      if (e.definition.type === t.type) return e;
      let n = new MC(e, t);
      return this.finishScalar(n);
    }
  },
  d5 = class {
    constructor(e, t) {
      (this.query = e),
        (this.locale = t),
        C(this, "memo", new a5()),
        C(this, "normalizer", new f5(this.memo)),
        C(this, "explorer", new r5(this.normalizer));
    }
    optimize() {
      let t = new Zz(this.normalizer, this.query, this.locale).build(),
        r = t.takeNode().getGroup(),
        i = t.getRequiredProps();
      this.optimizeGroup(r, i);
      let o = r.getOptimized(i),
        s = t.getNamedFields();
      return [o, s];
    }
    optimizeGroup(e, t) {
      let n = e.getWinner(t);
      if (n.node) return n.cost;
      let r = e.nodes[0];
      V(r, "Normalized node not found"), this.createEnforcer(n, r, t);
      for (let i of e.nodes) {
        if (t.canProvide(i)) {
          let o = i.optimize(this, t);
          n.update(i, o);
        }
        t.isMinimal && this.explorer.explore(i);
      }
      return n.cost;
    }
    createEnforcer(e, t, n) {
      if (n.resolvedFields.size > 0) {
        let r = new FC(t, n.resolvedFields),
          i = r.optimize(this, n);
        e.update(r, i);
      }
      if (n.ordering.length > 0) {
        let r = new _C(t, n.ordering),
          i = r.optimize(this, n);
        e.update(r, i);
      }
    }
  };
function h5(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function p5(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function m5(e) {
  return `${e.functionName}(${e.arguments.map((t) => At(t)).join(", ")})`;
}
function g5(e) {
  let t = "CASE";
  e.value && (t += ` ${At(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${At(n.when)} THEN ${At(n.then)}`;
  return e.else && (t += ` ELSE ${At(e.else)}`), (t += " END"), t;
}
function v5(e) {
  let t = At(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function y5(e) {
  let t = At(e.left),
    n = At(e.right),
    r = e.operator.toUpperCase();
  return `${t} ${r} ${n}`;
}
function b5(e) {
  return `CAST(${At(e.value)} as ${e.dataType})`;
}
function At(e) {
  switch (e.type) {
    case "Identifier":
      return h5(e);
    case "LiteralValue":
      return p5(e);
    case "FunctionCall":
      return m5(e);
    case "Case":
      return g5(e);
    case "UnaryOperation":
      return v5(e);
    case "BinaryOperation":
      return y5(e);
    case "TypeCast":
      return b5(e);
    case "Select":
      return `${$C(e)}`;
    default:
      Se(e);
  }
}
function x5(e) {
  return og(e.data)
    ? "Collection"
    : e.alias
    ? `"${e.data.displayName}" AS "${e.alias}"`
    : `"${e.data.displayName}"`;
}
function w5(e) {
  let t = `${Om(e.left)} LEFT JOIN ${Om(e.right)}`;
  return e.constraint && (t += ` ON ${At(e.constraint)}`), t;
}
function Om(e) {
  switch (e.type) {
    case "Collection":
      return x5(e);
    case "LeftJoin":
      return w5(e);
    default:
      Se(e);
  }
}
function S5(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function $C(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = At(n);
        return n.alias ? `${r} AS "${n.alias}"` : r;
      })
      .join(", ")}`),
    (t += ` FROM ${Om(e.from)}`),
    e.where && (t += ` WHERE ${At(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${At(n)} ${n.direction ?? "asc"}`)
        .join(", ")}`),
    e.limit && (t += ` LIMIT ${At(e.limit)}`),
    e.offset && (t += ` OFFSET ${At(e.offset)}`),
    S5(t)
  );
}
var k5 = Q3("query-engine");
function C5({ data: e }, t) {
  if (fC(e)) return new hC(e, t);
  if (og(e)) return e;
  if (dC(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Se(e, "Unsupported collection type");
}
var jj = class {
  constructor() {
    C(this, "useNewOptimizer", !1);
  }
  async query(e, t) {
    return this.useNewOptimizer || _5(e)
      ? this.queryNew(e, t)
      : this.queryOld(e, t);
  }
  async queryNew(e, t) {
    let n = new d5(e, t),
      [r, i] = n.optimize(),
      o = await r.evaluateAsync(),
      s = Object.entries(i);
    return await Promise.all(
      o.tuples.map(async (l) => {
        let c = await Promise.all(
          s.map(async ([u, f]) => {
            let d = l.getValue(f),
              m = await this.resolveValue(d);
            return [u, m];
          })
        );
        return Object.fromEntries(c);
      })
    );
  }
  async resolveValue(e) {
    if (e?.type === "richtext")
      return (
        V(e.value instanceof ug, "Pointer must be wrapped"), e.value.resolve()
      );
    if (e?.type === "array")
      return Promise.all(e.value.map(async (t) => this.resolveValue(t)));
    if (e?.type === "object") {
      let t = Object.entries(e.value),
        n = await Promise.all(
          t.map(async ([r, i]) => {
            let o = await this.resolveValue(i);
            return [r, o];
          })
        );
      return Object.fromEntries(n);
    }
    return e?.value ?? null;
  }
  async queryOld(e, t) {
    let [n, r, i] = this.createQueryPlan(e, t),
      o = await this.executeQueryPlan(r, i, e, n);
    return (
      k5.debug(`Query:
${$C(e)}

${(0, K3.default)(n.inspect())}`),
      o
    );
  }
  buildFrom(e, t, n, r) {
    switch (e.type) {
      case "Collection": {
        let i = C5(e, r);
        return n.push(i), Object.assign(t, i.schema), new bC(i, e.alias);
      }
      case "LeftJoin": {
        let i = this.buildFrom(e.left, t, n, r),
          o = this.buildFrom(e.right, t, n, r),
          s = Ft.from(e.constraint, t);
        return new Vz(i, o, s);
      }
      default:
        Se(e, "Unsupported data source");
    }
  }
  createQueryPlan(e, t) {
    var n;
    let r = {},
      i = [],
      o = this.buildFrom(e.from, r, i, t),
      [s] = i;
    V(s, "At least one collection must exist");
    let a = new Wz(i);
    if (e.where) {
      let f = Ft.from(e.where, r);
      i.length === 1 ? (o = Lm(s, f)) : (o = new xC(o, f));
    }
    let l =
      (n = e.orderBy) == null
        ? void 0
        : n.map(
            (f) => new Hz(Ft.from(f, r), f.direction ?? "asc", { type: 0 })
          );
    o = new Nz(o, l ?? [], s);
    let c;
    e.offset && (c = Ft.from(e.offset, r));
    let u;
    return (
      e.limit && (u = Ft.from(e.limit, r)),
      (c || u) && (o = new jz(o, c, u)),
      e.select.length > 0 && i.length === 1 && (o = new $z(o, s, a, e.select)),
      [o, r, a]
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = Ft.from(a, e),
            c = T5(a),
            u = l.evaluate(o);
          s[c] = await E5(t, a.type === "Identifier" ? a.name : void 0, u);
        }
        return s;
      })
    );
  }
};
function T5(e) {
  if (e.alias) return e.alias;
  if (e.type === "Identifier") return e.name;
  throw new Error("Can't serialize expression");
}
async function E5(e, t, n) {
  return Zo(n)
    ? null
    : n.type === "richtext"
    ? (V(xe(t), "Rich text field must be a string"), e.resolve(t, n.value))
    : n.value;
}
function Lm(e, t) {
  if (t instanceof Xi) {
    let n = t.operandExpressions.map((r) => Lm(e, r));
    return new Bz(n);
  }
  if (t instanceof wa) {
    let n = t.operandExpressions.map((r) => Lm(e, r));
    return new zz(n);
  }
  return R5(e, t) ?? F5(e, t);
}
function R5(e, t) {
  var n, r;
  if (t instanceof lr) return fm(e, t);
  if (t instanceof ja) return P5(e, t);
  if (
    t instanceof wt &&
    ((n = t.definition) == null ? void 0 : n.type) === "boolean"
  ) {
    let i = $e.fromBoolean(!0),
      o = new Jo(t, i);
    return fm(e, o);
  }
  if (
    t instanceof Fa &&
    t.valueExpression instanceof wt &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean"
  ) {
    let i = $e.fromBoolean(!0),
      o = new es(t.valueExpression, i);
    return fm(e, o);
  }
}
function fm(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof $e)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (Ne(o)) continue;
      let s = Ft.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof Jo && i.supportedLookupTypes.includes("Equals"))
        return new _r(i, [{ type: "Equals", value: r.evaluate() }, ...a]);
      if (t instanceof es && i.supportedLookupTypes.includes("NotEquals"))
        return new _r(i, [{ type: "NotEquals", value: r.evaluate() }, ...a]);
      if (t instanceof Ia && i.supportedLookupTypes.includes("LessThan"))
        return new _r(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Oa && i.supportedLookupTypes.includes("LessThan"))
        return new _r(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof La && i.supportedLookupTypes.includes("GreaterThan"))
        return new _r(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Ma && i.supportedLookupTypes.includes("GreaterThan"))
        return new _r(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function P5(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!Ne(n) && !Ne(r) && r instanceof $e)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (Ne(o)) continue;
      let s = Ft.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof qu && i.supportedLookupTypes.includes("Contains"))
        return new _r(i, [{ type: "Contains", value: r.evaluate() }, ...a]);
      if (t instanceof Xu && i.supportedLookupTypes.includes("StartsWith"))
        return new _r(i, [{ type: "StartsWith", value: r.evaluate() }, ...a]);
      if (t instanceof Yu && i.supportedLookupTypes.includes("EndsWith"))
        return new _r(i, [{ type: "EndsWith", value: r.evaluate() }, ...a]);
    }
}
function F5(e, t) {
  let n = new bC(e, void 0);
  return new xC(n, t);
}
function _5(e) {
  if (e.from.type !== "Collection") return !0;
  for (let t of e.select) if (t.type === "Identifier") return !0;
  return e.where ? pu(e.where) : !1;
}
function pu(e) {
  switch (e.type) {
    case "UnaryOperation":
      return pu(e.value);
    case "BinaryOperation":
      return e.operator === "in" ? !0 : pu(e.left) || pu(e.right);
    default:
      return !1;
  }
}
var mu = "default",
  I5 = new Set([mu]),
  gu,
  O5 = class {
    constructor() {
      C(this, "entries", new Map()), Zt(this, gu, {});
    }
    set(e, t, n, r) {
      switch (t) {
        case "transformTemplate": {
          V(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            this.setHash(e, r, { transformTemplate: n, legacy: !0 });
          break;
        }
        case "initial":
        case "animate": {
          V(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            this.setHash(e, r, { [t]: n, legacy: !0 });
          break;
        }
        default:
          break;
      }
    }
    setHash(e, t = mu, n) {
      let r = this.entries.get(e) ?? {},
        i = r[t] ?? {};
      (r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r);
    }
    variantHash(e, t) {
      if (e === t?.primaryVariantId) return mu;
      let n = ce(this, gu)[e];
      if (n) return n;
      let r = t?.variantClassNames[e];
      return r ? (ce(this, gu)[e] = cC(r)) : mu;
    }
    setAll(e, t = I5, n, r) {
      var i;
      if (n === null) {
        for (let c of t) this.setHash(e, this.variantHash(c, r), null);
        return;
      }
      let o = Or(n.transformTemplate)
          ? (i = n.transformTemplate) == null
            ? void 0
            : i.call(n, {}, L5)
          : void 0,
        s = n.__framer__presenceInitial ?? n.initial,
        a = n.__framer__presenceAnimate ?? n.animate,
        l = {
          initial: Ze(s) ? s : void 0,
          animate: Ze(a) ? a : void 0,
          transformTemplate: xe(o) ? o : void 0,
        };
      for (let c of t) this.setHash(e, this.variantHash(c, r), l);
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  };
gu = new WeakMap();
var Gj = new O5();
var L5 = "__Appear_Animation_Transform__";
var qj = "data-framer-appear-id",
  Xj = "data-framer-appear-animation";
function M5(e) {
  for (let [t, n] of Object.entries(e)) if (qt.matchMedia(n).matches) return t;
}
function A5(e) {
  var t;
  for (let { hash: n, mediaQuery: r } of e) {
    if (!r) continue;
    if (qt.matchMedia(r).matches) return n;
  }
  return (t = e[0]) == null ? void 0 : t.hash;
}
function Zj(e, t, n = !0) {
  let r = A(Xk),
    i = D(Qi() ? M5(t) ?? e : e),
    o = D(n && r ? e : i.current),
    s = Ik(),
    a = eb(),
    l = ie(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            (i.current = o.current = c),
              dr(() => {
                s();
              });
          });
      },
      [a, s]
    );
  return (
    _k(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    $(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = qt.matchMedia(f),
          m = (g) => {
            g.matches && l(u);
          };
        D5(d, m), c.push([d, m]);
      }
      return () => c.forEach(([u, f]) => V5(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function D5(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function V5(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
var z5 = "style[data-framer-breakpoint-css]";
function B5(e) {
  setTimeout(e, 1);
}
function Jj(e) {
  var t, n;
  let r = A5(e);
  if (r)
    for (let o of document.querySelectorAll(".hidden-" + r))
      (t = o.parentNode) == null || t.removeChild(o);
  (qt.requestIdleCallback ?? B5)(() => {
    var o;
    (o = document.querySelector(z5)) == null || o.remove();
  });
  for (let o of document.querySelectorAll(".ssr-variant:empty"))
    (n = o.parentNode) == null || n.removeChild(o);
}
function gg() {
  return be.current() === be.canvas;
}
var $5 = x.createContext(void 0),
  N5 = () => x.useContext($5);
var H5 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  j5 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  O1 = H5;
var W5 = "System Default",
  U5 = class {
    constructor() {
      C(this, "name", "local"),
        C(this, "fontFamilies", []),
        C(this, "byFamilyName", new Map()),
        C(this, "fontAliasBySelector", new Map()),
        C(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(O1)) {
        let i = O1[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(j5)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: W5, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = G5(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  L1 = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function G5(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${L1[e]} ${n}` : `${L1[e]}`;
}
var q5 = Kn(Am(), 1),
  Xo = "CUSTOM;";
function X5(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var Y5 = class {
  constructor() {
    C(this, "name", "custom"),
      C(this, "fontFamilies", []),
      C(this, "byFamilyName", new Map()),
      C(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    var t, n;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let r = [];
    for (let i of e) {
      if (!this.isValidCustomFontAsset(i)) continue;
      let o = X5(i.name, i.properties),
        s = this.createFontFamily(o),
        a = (t = i.properties) == null ? void 0 : t.font.openTypeData,
        l = {
          family: s,
          selector: `${Xo}${o}`,
          variant: this.inferVariantName(o),
          postscriptName:
            (n = i.properties) == null ? void 0 : n.font.postscriptName,
          file: i.url,
          openTypeFeatures: this.validateOpenTypeData(a),
        };
      s.fonts.push(l),
        (s.owner = i.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(o, i),
        r.push(...s.fonts);
    }
    return r;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  validateOpenTypeData(e) {
    if (e && Array.isArray(e))
      return e.map((t) => {
        if (this.isOpenTypeFeature(t))
          return { tag: t.tag, coverage: t.coverage };
      });
  }
  isOpenTypeFeature(e) {
    return !(
      typeof e != "object" ||
      e === null ||
      !("tag" in e) ||
      typeof e.tag != "string" ||
      ("coverage" in e && typeof e.coverage < "u" && !Array.isArray(e.coverage))
    );
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/gu, "")));
    return o ? o.replace(/^\w|\s\w/gu, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(Xo)) return null;
    let t = e.split(Xo);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${Xo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function NC(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = xe(f) ? f : f.name.toLocaleLowerCase(),
      m = n(d);
    m &&
      (s.set(`${m.weight}-${m.style}`, d),
      !(m.weight <= i) && (a.has(m.style) || a.set(m.style, d)));
  });
  let l = a.get(o),
    c = a.get("italic") ?? a.get("oblique");
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get("400-italic") ?? s.get("400-oblique") ?? c))
    : r.weight <= 500
    ? ((l = s.get(`700-${o}`) ?? l),
      (c = s.get("700-italic") ?? s.get("700-oblique") ?? c))
    : ((l = s.get(`900-${o}`) ?? l),
      (c = s.get("900-italic") ?? s.get("900-oblique") ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var K5 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function Q5(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Z5);
}
function Z5(e) {
  return K5.includes(e);
}
var vu = "FS;",
  HC = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  jC = Object.keys(HC),
  J5 = (() => new RegExp(`^(?:${[...jC, "italic"].join("|")})`, "u"))(),
  ui = class {
    constructor() {
      C(this, "name", "fontshare"),
        C(this, "fontFamilies", []),
        C(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = jC.find((s) => t.includes(s)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && HC[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(vu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(vu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${vu}${e}-${t.toLowerCase()}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!J5.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = ui.createSelector(o, s),
            c = ui.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: m,
              variantItalic: g,
            } = NC(s, r, ui.parseVariant),
            v = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? ui.createSelector(o, d) : void 0,
              selectorBoldItalic: m ? ui.createSelector(o, m) : void 0,
              selectorItalic: g ? ui.createSelector(o, g) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: e4(n.category),
            };
          a.fonts.push(v), t.push(v);
        }
      }
      return t;
    }
  };
function e4(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = Q5(e)[0];
  return n && t[n];
}
var t4 = "Inter",
  n4 = "FR;",
  r4 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  M1 = class {
    constructor() {
      C(this, "name", "framer"),
        C(this, "fontFamilies", []),
        C(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(n4) && !e.startsWith(t4)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && r4[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          o.fonts.push(s), t.push(s);
        }),
        t
      );
    }
  },
  yu = "GF;",
  fi = class {
    constructor() {
      C(this, "name", "google"),
        C(this, "fontFamilies", []),
        C(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(yu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(yu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${yu}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = fi.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = fi.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: m,
              } = NC(r, n.variants, fi.parseVariant),
              g = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? fi.createSelector(o, f) : void 0,
                selectorBoldItalic: m ? fi.createSelector(o, m) : void 0,
                selectorItalic: d ? fi.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: i4(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace("http://", "https://"),
              };
            s.fonts.push(g), t.push(g);
          });
        }),
        t
      );
    }
  };
function i4(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var o4 = Kn(b2(), 1),
  A1 = 5e3,
  s4 = 3,
  WC = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  dm = new Map(),
  hm = new Map(),
  a4 = (e, t) => UC(e, t);
async function UC(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${a}-${i}`;
  if (!dm.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: xe(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), GC(r, l, a)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < s4) return UC(e, t, n + 1);
          throw new WC(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    dm.set(c, f);
  }
  await dm.get(c);
}
async function GC(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!hm.has(r)) {
    let o = new o4.default(e, { style: t, weight: n }).load(null, A1);
    hm.set(r, o);
  }
  try {
    await hm.get(r);
  } catch {
    throw new WC(
      `Failed to check if font is ready (${A1}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var l4 = class {
    constructor() {
      C(this, "enabled", !1),
        C(this, "bySelector", new Map()),
        C(this, "getGoogleFontsListPromise"),
        C(this, "getFontshareFontsListPromise"),
        C(this, "loadedSelectors", new Set()),
        C(this, "local"),
        C(this, "google"),
        C(this, "fontshare"),
        C(this, "framer"),
        C(this, "custom"),
        (this.local = new U5()),
        (this.google = new fi()),
        (this.fontshare = new ui()),
        (this.framer = new M1()),
        (this.custom = new Y5()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = ut.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e)) this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = ut.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e)) this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(Xo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      if (e)
        return e.startsWith(Xo)
          ? this.custom.getFontBySelector(e, t)
          : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = fi.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = ui.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      let i = M1.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case "local":
          return this.loadedSelectors.add(e.selector), 1;
        case "framer":
          return (
            q5.default.env.NODE_ENV !== "test" &&
              (await GC(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await a4(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          Se(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(yu)),
        n = e.some((i) => i.startsWith(vu));
      if (t || n) {
        try {
          await this.importFontshareFonts();
        } catch (i) {
          Ca("Failed to load Fontshare fonts:", i);
        }
        try {
          await this.importGoogleFonts();
        } catch (i) {
          Ca("Failed to load Google fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !bu.isSelectorLoaded(i));
      if (n.length === 0) return;
      await bu.loadWebFontsFromSelectors(n),
        n.every((i) => bu.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return V(e, "Can\u2019t find Inter font"), e;
    }
  },
  bu = new l4();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
var qC = ((e) => (
    (e.Padding = "--framer-input-padding"),
    (e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
    (e.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
    (e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
    (e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
    (e.BorderColor = "--framer-input-border-color"),
    (e.BorderTopWidth = "--framer-input-border-top-width"),
    (e.BorderRightWidth = "--framer-input-border-right-width"),
    (e.BorderBottomWidth = "--framer-input-border-bottom-width"),
    (e.BorderLeftWidth = "--framer-input-border-left-width"),
    (e.BorderStyle = "--framer-input-border-style"),
    (e.Background = "--framer-input-background"),
    (e.FontFamily = "--framer-input-font-family"),
    (e.FontWeight = "--framer-input-font-weight"),
    (e.FontSize = "--framer-input-font-size"),
    (e.FontColor = "--framer-input-font-color"),
    (e.FontStyle = "--framer-input-font-style"),
    (e.FontLetterSpacing = "--framer-input-font-letter-spacing"),
    (e.FontTextAlignment = "--framer-input-font-text-alignment"),
    (e.FontLineHeight = "--framer-input-font-line-height"),
    (e.PlaceholderColor = "--framer-input-placeholder-color"),
    (e.BoxShadow = "--framer-input-box-shadow"),
    (e.FocusedBorderColor = "--framer-input-focused-border-color"),
    (e.FocusedBorderWidth = "--framer-input-focused-border-width"),
    (e.FocusedBorderStyle = "--framer-input-focused-border-style"),
    (e.FocusedBackground = "--framer-input-focused-background"),
    (e.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
    (e.FocusedTransition = "--framer-input-focused-transition"),
    (e.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
    (e.BooleanCheckedBorderColor =
      "--framer-input-boolean-checked-border-color"),
    (e.BooleanCheckedBorderWidth =
      "--framer-input-boolean-checked-border-width"),
    (e.BooleanCheckedBorderStyle =
      "--framer-input-boolean-checked-border-style"),
    (e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
    (e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
    (e.InvalidTextColor = "--framer-input-invalid-text-color"),
    (e.IconBackgroundImage = "--framer-input-icon-image"),
    (e.IconMaskImage = "--framer-input-icon-mask-image"),
    (e.IconColor = "--framer-input-icon-color"),
    (e.WrapperHeight = "--framer-input-wrapper-height"),
    e
  ))(qC || {}),
  Te = qC,
  D1 = "framer-form-input",
  c4 = "framer-form-input-wrapper";
function u4(e) {
  return typeof e == "number"
    ? e
    : e.startsWith("--")
    ? yt.variable(e)
    : e === ""
    ? '""'
    : e;
}
function yt(e, t) {
  let n = " ";
  for (let r in t) {
    let i = t[r];
    n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${u4(i)}; `;
  }
  return e + " {" + n + "}";
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith("--") ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(yt || (yt = {}));
var w8 = [
  yt(`.${D1}`, {
    padding: yt.variable(Te.Padding),
    background: "transparent",
    fontFamily: yt.variable(Te.FontFamily),
    fontWeight: yt.variable(Te.FontWeight),
    fontSize: yt.variable(Te.FontSize),
    fontStyle: yt.variable(Te.FontStyle),
    color: yt.variable(Te.FontColor),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: yt.variable(Te.WrapperHeight, "100%"),
    letterSpacing: yt.variable(Te.FontLetterSpacing),
    textAlign: yt.variable(Te.FontTextAlignment),
    lineHeight: yt.variable(Te.FontLineHeight),
  }),
  yt(`.${D1}:focus-visible`, { outline: "none" }),
];
var S8 = `var(${Te.BorderTopWidth}) var(${Te.BorderRightWidth}) var(${Te.BorderBottomWidth}) var(${Te.BorderLeftWidth})`,
  k8 = [
    `.${c4}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Te.BorderRadiusTopLeft});
        border-top-right-radius: var(${Te.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Te.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Te.BorderRadiusBottomLeft});
        border-color: var(${Te.BorderColor});
        border-top-width: var(${Te.BorderTopWidth});
        border-right-width: var(${Te.BorderRightWidth});
        border-bottom-width: var(${Te.BorderBottomWidth});
        border-left-width: var(${Te.BorderLeftWidth});
        border-style: var(${Te.BorderStyle});
        transition: var(${Te.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ];
var pm = 16,
  C8 = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${pm}px`,
    boxSizing: "content-box",
    padding: yt.variable(Te.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${pm}px`,
    maskRepeat: "no-repeat",
    maskSize: `${pm}px`,
    backgroundColor: yt.variable(Te.IconColor),
  };
var L8 = x.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, draggable: s, ...a } = t,
    l = { ...a.style };
  r && delete l.background;
  let c = $a(t.as);
  return ue(c, {
    ...a,
    style: l,
    ref: n,
    children: [r && k(Pk, { image: r, alt: o, draggable: s }), i],
  });
});
function f4(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var d4 = /[^\p{Letter}\p{Number}()]+/gu,
  h4 = /^-+|-+$/gu;
function p4(e) {
  return e.toLowerCase().replace(d4, "-").replace(h4, "");
}
var m4 = /[&<>'"]/g,
  g4 = (e) =>
    e.replace(
      m4,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  v4 =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function y4(e, t, n, r) {
  return e.replace(v4, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let m = l || c,
      g = ng(m.replace(/&amp;/g, "&"));
    if (!g || !g.target) return i;
    let v = t(g.target);
    if (!GS(v) || !GS(n)) return i;
    let b = v.path,
      h = n.path;
    if (!b || !h) return i;
    let p = ` data-framer-page-link-target="${g.target}"`,
      y = Dm(v, g.element ?? void 0);
    y && (p += ` data-framer-page-link-element="${g.element}"`);
    let w = Tm(m);
    if (!w || xe(w)) return i;
    iC(n, w, r) && (p += " data-framer-page-link-current");
    let T = b,
      S = Object.assign(
        {},
        r,
        (f = g.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(S).length > 0 && (T = T.replace(nC, (E, R) => "" + S[R])),
      (d = g.collectionItem) != null && d.pathVariables)
    ) {
      let E = new URLSearchParams(g.collectionItem.pathVariables);
      p += ` data-framer-page-link-path-variables="${E}"`;
    }
    return (T = Y1(h, T)), o + a + `"${g4(T + (y ? `#${y}` : ""))}"` + p + u;
  });
}
var b4 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  XC = /[&<>"']/gu,
  x4 = (() => new RegExp(XC.source))();
function V1(e) {
  return e && x4.test(e) ? e.replace(XC, (t) => b4[t] ?? "") : e || "";
}
var z1 = "{{ text-placeholder }}",
  w4 = "rich-text-wrapper",
  S4 = Ae(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: m,
        top: g,
        bottom: v,
        center: b,
        className: h,
        stylesPresetsClassName: p,
        visible: y = !0,
        opacity: w,
        rotation: T = 0,
        verticalAlignment: S = "top",
        isEditable: E = !1,
        willChangeTransform: R,
        environment: M = be.current,
        withExternalLayout: I = !1,
        positionSticky: G,
        positionStickyTop: z,
        positionStickyRight: de,
        positionStickyBottom: ye,
        positionStickyLeft: re,
        __htmlStructure: J,
        __fromCanvasComponent: W = !1,
        _forwardedOverrideId: X,
        _forwardedOverrides: se,
        _usesDOMRect: j,
        children: me,
        ...le
      } = t,
      fe = za(),
      Z = Na(t),
      Je = D(null),
      Me = n ?? Je,
      { navigate: ft, getRoute: we } = Nu(),
      Xt = $m();
    LL(t.preload ?? []), Uu(t, Me);
    let En = A(ts),
      Rn = gg(),
      he = a,
      Hn = X ?? r;
    if (Hn && se) {
      let qe = se[Hn];
      typeof qe == "string" && (he = qe);
    }
    let it = "";
    if (he) {
      let qe = V1(he);
      it = J ? J.replace(z1, qe) : `<p>${qe}</p>`;
    } else if (o) it = o;
    else if (l) {
      let qe = V1(l);
      it = J ? J.replace(z1, qe) : `<p>${qe}</p>`;
    } else s && (it = s);
    let fn = rC(),
      Ua = ae(
        () => (Rn || !we || !Xt ? it : y4(it, we, Xt, fn)),
        [Rn, it, we, Xt, fn]
      );
    if (
      ($(() => {
        let qe = Me.current;
        if (qe === null) return;
        function cr(Yt) {
          let pi = tg(Yt.target, Me.current);
          if (
            Yt.metaKey ||
            !ft ||
            !pi ||
            pi.getAttribute("target") === "_blank"
          )
            return;
          u3(ft, pi, fn) && Yt.preventDefault();
        }
        return (
          qe.addEventListener("click", cr),
          () => {
            qe.removeEventListener("click", cr);
          }
        );
      }, [ft, fn]),
      KC(c, W, Me),
      ot(() => {
        Ba();
      }, []),
      !y)
    )
      return null;
    let P = E && M() === be.canvas,
      F = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: YC(S),
        opacity: P ? 0 : w,
        flexShrink: 0,
      },
      L = be.hasRestrictions(),
      N = Ta(t, fe || 0, !1),
      pe = j && (u === "auto" || f === "auto"),
      dt =
        !!t.transformTemplate || !N || !L || W || pe
          ? t.transformTemplate ?? Wu(b)
          : void 0;
    if (!I) {
      if (N && L && !pe) {
        let qe = rt.getNumber(T).toFixed(4);
        (F.transform = `translate(${N.x}px, ${N.y}px) rotate(${qe}deg)`),
          (F.width = N.width),
          (F.minWidth = N.width),
          (F.height = N.height);
      } else
        (F.left = d),
          (F.right = m),
          (F.top = g),
          (F.bottom = v),
          (F.width = u),
          (F.height = f),
          (F.rotate = T);
      G
        ? (!Rn || En) &&
          ((F.position = "sticky"),
          (F.willChange = "transform"),
          (F.zIndex = 1),
          (F.top = z),
          (F.right = de),
          (F.bottom = ye),
          (F.left = re))
        : Rn &&
          (t.positionFixed || t.positionAbsolute) &&
          (F.position = "absolute");
    }
    return (
      Qm(t, F),
      jk(t, F),
      R && Xm(F),
      Object.assign(F, t.style),
      k(mn.div, {
        id: r,
        ref: Me,
        ...le,
        style: F,
        layoutId: Z,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": b,
        className: Sm(h, p, w4),
        transformTemplate: dt,
        dangerouslySetInnerHTML: { __html: Ua },
      })
    );
  });
function YC(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function KC(e, t, n) {
  let r = D([]);
  f4(r.current, e) ||
    ((r.current = e),
    bu.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t ||
        !n.current ||
        be.current() !== be.canvas ||
        (i > 0 && oD(n.current));
    }));
}
var QC = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  skewX: 0,
  skewY: 0,
  filter: "none",
};
function k4(e) {
  return e in QC;
}
function C4(e) {
  let t = {};
  for (let n in e) !k4(n) || Ne(e[n]) || (t[n] = [e[n], QC[n]]);
  return t;
}
var T4 =
  /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu;
function E4(e, t = "character", n, r) {
  switch (t) {
    case "character":
    case "line": {
      let i = e.split(" "),
        o = i.length - 1;
      return i.map((s, a) => {
        var l;
        let c = a === o,
          u = s.length <= 12;
        return ue(je, {
          children: [
            k(
              "span",
              {
                style: { whiteSpace: u ? "nowrap" : "unset" },
                children:
                  (l = s.match(T4)) == null
                    ? void 0
                    : l.map((f, d) => {
                        let m = to();
                        return (
                          n.add(m),
                          k("span", { ref: m, style: r, children: f }, f + d)
                        );
                      }),
              },
              s + a
            ),
            c ? null : " ",
          ],
        });
      });
    }
    case "word": {
      let i = e.split(" "),
        o = i.length - 1;
      return i.map((s, a) => {
        let l = a === o,
          c = to();
        return (
          n.add(c),
          ue(je, {
            children: [
              k("span", { ref: c, style: r, children: s }, s + a),
              l ? null : " ",
            ],
          })
        );
      });
    }
    case "element":
    default:
      return e;
  }
}
function R4(e) {
  let t = e.type;
  switch (t) {
    case "appear":
      return e.tokenization ?? "character";
    default:
      Se(t);
  }
}
function B1(e) {
  let t = [];
  return (
    bt(e.x) && t.push(`translateX(${e.x}px)`),
    bt(e.y) && t.push(`translateY(${e.y}px)`),
    bt(e.scale) && t.push(`scale(${e.scale})`),
    bt(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    bt(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    bt(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    bt(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    bt(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(" ")
  );
}
function P4(e, t, n) {
  if (!n || !n.effect) return;
  let r = n.type;
  switch (r) {
    case "appear":
      switch (n.tokenization) {
        case "element":
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: B1(n.effect),
              };
        case "line":
        case "word":
        case "character":
        default:
          return !e || !t
            ? { display: "inline-block" }
            : {
                display: "inline-block",
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: B1(n.effect),
              };
      }
    default:
      Se(r);
  }
}
function F4(e, t, n) {
  let r = Zi(() => new Set()),
    i = gg(),
    o = n || !i,
    s = D({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let a = e?.trigger ?? "onMount",
    l = e?.target,
    c = e?.threshold;
  $(() => {
    if (!o || n) return;
    s.current.hasMounted = !0;
    function d() {
      let { effect: m } = s.current;
      if (
        !o ||
        !m ||
        (m?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (m?.type === "appear" && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let g = m.type;
      switch (g) {
        case "appear": {
          let { transition: v, startDelay: b, repeat: h, tokenization: p } = m;
          return $1(p, m.effect, r, v, b, h, () => {
            Object.assign(s.current, { isAnimating: !1 });
          });
        }
        default:
          Se(g);
      }
    }
    switch (a) {
      case "onMount":
        d();
        return;
      case "onInView": {
        let m = t?.current;
        return m ? Fl(m, d, { amount: c ?? 0 }) : void 0;
      }
      case "onScrollTarget": {
        let m = l?.ref.current;
        return m
          ? Fl(m, d, {
              amount: c ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        Se(a);
    }
  }, [o, r, n, t, l, c, a]);
  let u = !!e,
    f = e ? R4(e) : void 0;
  return ae(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !u)) return;
        let { hasMounted: d, hasAnimatedOnce: m, effect: g } = s.current,
          v = P4(o, n || _4(d, m, g), s.current.effect);
        return {
          text: (b) => E4(b, f, r, v),
          props: (b) => {
            if (g?.tokenization !== "element") return;
            let h = to();
            return r.add(h), { ref: h, style: { ...b, ...v } };
          },
        };
      },
      play: () => {
        let { effect: d } = s.current;
        if (!d) return;
        let m = d.type;
        switch (m) {
          case "appear": {
            let { transition: g, startDelay: v } = d;
            $1(f, d.effect, r, g, v);
            break;
          }
          default:
            Se(m);
        }
      },
    }),
    [o, u, r, n, f]
  );
}
function _4(e, t, n) {
  return !(
    (e && n?.trigger === "onMount") ||
    (t &&
      !n?.repeat &&
      (n?.trigger === "onInView" || n?.trigger === "onScrollTarget"))
  );
}
function $1(e = "character", t, n, r, i = 0, o = !1, s) {
  let a = C4(t);
  switch (e) {
    case "character":
    case "element":
    case "word": {
      let l = I4(n);
      return l.length === 0 ||
        (Ti(l, a, {
          ...r,
          restDelta: 0.001,
          delay: Md(r?.delay ?? 0, { startDelay: i }),
        }).then(() => s?.()),
        !o)
        ? void 0
        : () =>
            void Ti(l, t, {
              ...r,
              restDelta: 0.001,
              delay: Md(r?.delay ?? 0, { startDelay: i }),
            });
    }
    case "line": {
      let l;
      return (
        ee.read(() => {
          (l = O4(n)),
            l.length !== 0 &&
              ee.update(() => {
                let c = l.map((u, f) =>
                  Ti(u, a, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + f * (r?.delay ?? 0),
                  })
                );
                Promise.all(c).then(() => s?.());
              });
        }),
        o
          ? () => {
              l.length !== 0 &&
                l.forEach((c, u) => {
                  Ti(c, t, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + u * (r?.delay ?? 0),
                  });
                });
            }
          : void 0
      );
    }
    default:
      Se(e);
  }
}
function I4(e) {
  let t = [];
  for (let n of e) n.current && t.push(n.current);
  return t;
}
function O4(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let o = i.current.offsetTop,
      s = i.current.offsetHeight;
    !s || r === null || o === r
      ? n.push(i.current)
      : (t.push(n), (n = [i.current])),
      s && (r = o);
  }
  return t.push(n), t;
}
var N1 = Ae(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    k(mn.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: k(mn.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    })
  ),
  L4 = Ae((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = be.current,
        fonts: d = [],
        height: m,
        isEditable: g = !1,
        left: v,
        name: b,
        opacity: h,
        positionSticky: p,
        positionStickyBottom: y,
        positionStickyLeft: w,
        positionStickyRight: T,
        positionStickyTop: S,
        right: E,
        rotation: R = 0,
        style: M,
        _initialStyle: I,
        stylesPresetsClassNames: G,
        text: z,
        top: de,
        verticalAlignment: ye = "top",
        visible: re = !0,
        width: J,
        willChangeTransform: W,
        withExternalLayout: X = !1,
        viewBox: se,
        viewBoxScale: j = 1,
        effect: me,
        ...le
      } = e,
      fe = za(),
      Z = gg(),
      Je = A(ts),
      Me = Na(e),
      ft = D(null),
      we = t ?? ft;
    Uu(e, we),
      KC(d, n, we),
      ot(() => {
        Ba();
      }, []);
    let Xt = F4(me, we),
      En = ae(() => {
        if (u) return ZC(u, G, z, s, void 0, Xt.getTokenizer());
      }, [u, G, z, s, Xt]);
    if (!re) return null;
    let Rn = g && f() === be.canvas,
      he = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: YC(ye),
        opacity: Rn ? 0 : h,
        flexShrink: 0,
      },
      Hn = be.hasRestrictions(),
      it = Ta(e, fe || 0, !1),
      fn = o && (J === "auto" || m === "auto"),
      P =
        !!e.transformTemplate || !it || !Hn || n || fn
          ? e.transformTemplate ?? Wu(c)
          : void 0;
    X ||
      (it && Hn && !fn
        ? ((he.x = it.x),
          (he.y = it.y),
          (he.rotate = rt.getNumber(R)),
          (he.width = it.width),
          (he.minWidth = it.width),
          (he.height = it.height))
        : ((he.left = v),
          (he.right = E),
          (he.top = de),
          (he.bottom = l),
          (he.width = J),
          (he.height = m),
          (he.rotate = R)),
      p
        ? (!Z || Je) &&
          ((he.position = "sticky"),
          (he.willChange = "transform"),
          (he.zIndex = 1),
          (he.top = S),
          (he.right = T),
          (he.bottom = y),
          (he.left = w))
        : Z &&
          (e.positionFixed || e.positionAbsolute) &&
          (he.position = "absolute")),
      Qm(e, he),
      jk(e, he),
      W && Xm(he),
      Object.assign(he, I, M),
      Me && (le.layout = "preserve-aspect");
    let F = $a(e.as);
    return xe(e.viewBox)
      ? e.as !== void 0
        ? k(F, {
            ...le,
            ref: we,
            style: he,
            layoutId: Me,
            transformTemplate: P,
            "data-framer-name": b,
            "data-framer-component-type": "RichTextContainer",
            children: k(N1, {
              viewBox: se,
              viewBoxScale: j,
              style: { width: "100%", height: "100%" },
              children: En,
            }),
          })
        : k(N1, {
            ...le,
            ref: we,
            style: he,
            layoutId: Me,
            viewBox: se,
            viewBoxScale: j,
            transformTemplate: P,
            "data-framer-name": b,
            "data-framer-component-type": "RichTextContainer",
            children: En,
          })
      : k(F, {
          ...le,
          ref: we,
          style: he,
          layoutId: Me,
          transformTemplate: P,
          "data-framer-name": b,
          "data-framer-component-type": "RichTextContainer",
          children: En,
        });
  });
function M4(e) {
  return e.type === ur;
}
function A4(e) {
  return e.type === "br";
}
function ZC(e, t, n, r, i = {}, o, s = M4(e) ? -1 : 0) {
  let a = jn.toArray(e.props.children);
  xe(n) && (a = a.slice(0, 1));
  let l = !0;
  a = a.map((f) => {
    if (((!zt(f) || !A4(f)) && (l = !1), zt(f)))
      return ZC(f, t, n, r, i, o, s + 1);
    let d = xe(n) ? n : f;
    return xe(d) && o ? o.text(d) : d;
  });
  let { ["data-preset-tag"]: c, ...u } = e.props;
  if (xe(e.type) || Od(e.type)) {
    let f = J0(e.type) || e.type,
      d = c || f,
      m = xe(d) ? t?.[d] : void 0;
    (u.className = Sm("framer-text", u.className, m)),
      o && s === 0 && !l && Object.assign(u, o.props(u.style));
    let g =
        f === "h1" ||
        f === "h2" ||
        f === "h3" ||
        f === "h4" ||
        f === "h5" ||
        f === "h6",
      v = t?.anchor;
    if (g && v) {
      let b = D4(a, i);
      u.id = b;
      let h = Sm("framer-text", v),
        p = k("a", { href: `#${b}`, className: h, children: a });
      (u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (a = [p]);
    }
  }
  return fr(e, u, ...a);
}
function D4(e, t) {
  let n = e.map(Mm).join(""),
    r = p4(n),
    i = t[r] ?? 0;
  return i > 0 && (r += `-${i}`), (t[r] = i + 1), r;
}
function Mm(e) {
  return xe(e) || bt(e)
    ? e.toString()
    : zt(e)
    ? Mm(e.props.children)
    : Array.isArray(e)
    ? e.map(Mm).join("")
    : "";
}
var B8 = Ae(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (xe(o)) {
    !r.stylesPresetsClassName &&
      Ze(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let s = { [xe(t) ? "html" : "htmlFromDesign"]: o };
    return k(S4, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && xe(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return k(L4, { ...r, ref: i, children: zt(o) ? o : void 0 });
});
function V4(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = cn(i.x, i.y),
    s = Cn(cn(0.5, 0.5), o),
    a = K.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((v) => ({ point: v, distance: cn.distance(o, v) }))
      .sort((v, b) => v.distance - b.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  V(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = a.filter((v) => !cn.isEqual(v, c) && !cn.isEqual(v, u));
  V(f && d, "linearGradientLine: Must have 2 opposing points.");
  let m = Cn.intersection(s, Cn(c, u)),
    g = Cn.intersection(s, Cn(f, d));
  return (
    V(m && g, "linearGradientLine: Must have a start and end point."), Cn(m, g)
  );
}
function z4(e, t) {
  var n, r;
  let i = V4(e.angle),
    o = Ha(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = Cn.pointAtPercentDistance(i, s),
    c = Cn.pointAtPercentDistance(i, a),
    u = ks([s, a], [0, 1]);
  return {
    id: `id${t}g${Ra.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: Ym.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function B4(e, t) {
  return {
    id: `id${t}g${Pa.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ha(e).map((n) => ({
      color: n.value,
      alpha: Ym.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function JC(e) {
  if (!xe(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return bt(r);
}
function eT(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return bt(n) ? n : 50;
}
function H1(e) {
  return JC(e) ? eT(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function j1(e) {
  return JC(e) ? eT(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function $4(e, t, n, r) {
  if (
    ((e = rt.get(e, "#09F")),
    !Ui.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === "fill" || a === "fit" || a === "tile" || !a) {
    let m = 1,
      g = 1,
      v = i / o,
      b = t.height * v,
      h = t.width / v,
      p = b / t.width,
      y = h / t.height;
    if (a === "tile") {
      e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2)));
      let w = t.x ?? 0,
        T = t.y ?? 0,
        S = 0,
        E = 0;
      r && ((S = w), (E = T)),
        (u = (t.width - l) * H1(e.positionX) + S),
        (f = (t.height - c) * j1(e.positionY) + E),
        (s = `translate(${u + w}, ${f + T})`);
    } else
      (a === "fill" || !a ? y > p : y < p)
        ? ((g = y), (f = (1 - y) * j1(e.positionY)))
        : ((m = p), (u = (1 - p) * H1(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${m}, ${g})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? "",
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var N4 = "framer/asset-reference,";
function H4(e) {
  return e.startsWith(`data:${N4}`);
}
function j4(e, t) {
  if (/^\w+:/.test(e) && !H4(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let n = be.current() === be.export;
  return ut.assetResolver(e, { pixelSize: t, isExport: n }) ?? "";
}
var W4 = ({
  id: e,
  path: t,
  transform: n,
  repeat: r,
  width: i,
  height: o,
  offsetX: s,
  offsetY: a,
}) => {
  let l = j4(t);
  return k("pattern", {
    id: e,
    width: r ? i : "100%",
    height: r ? o : "100%",
    patternContentUnits: r ? void 0 : "objectBoundingBox",
    patternUnits: r ? "userSpaceOnUse" : void 0,
    x: r ? s : void 0,
    y: r ? a : void 0,
    children: k(
      "image",
      {
        width: r ? i : 1,
        height: r ? o : 1,
        href: l,
        preserveAspectRatio: "none",
        transform: r ? void 0 : n,
        x: r ? 0 : void 0,
        y: r ? 0 : void 0,
      },
      l
    ),
  });
};
var mm,
  U4 = (() =>
    !QA() &&
    typeof Document < "u" &&
    typeof Document.parseHTMLUnsafe == "function")();
function G4(e, t) {
  return U4 && !t
    ? Document.parseHTMLUnsafe(e)
    : (mm ?? (mm = new DOMParser()), mm.parseFromString(e, t ?? "text/html"));
}
var W1 = Qi(),
  q4 = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  U1 =
    "position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict",
  X4 = class {
    constructor() {
      C(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = `svg${String(Vk(e))}_${String(e.length)}`);
        let i = e,
          o,
          s = Y4(e);
        s &&
          (t && K4(s, n),
          (s.id = n),
          (o = eB(s)),
          s.removeAttribute("xmlns"),
          s.removeAttribute("xlink"),
          s.removeAttribute("xmlns:xlink"),
          (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      if (W1) {
        let t = document?.getElementById(e.id);
        t?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      if (W1) {
        let s = document.getElementById("svg-templates");
        if (
          (s ||
            ((s = document.createElement("div")),
            (s.id = "svg-templates"),
            (s.ariaHidden = "true"),
            (s.style.cssText = U1),
            document.body.appendChild(s)),
          !document.getElementById(t))
        ) {
          let a = document.createElement("div");
          a.innerHTML = e;
          let l = a.firstElementChild;
          l && ((l.id = t), s.appendChild(l));
        }
      }
      let r = n ? `0 0 ${n.width} ${n.height}` : void 0,
        o = `<svg style="width:100%;height:100%"${
          r ? ` viewBox="${r}"` : ""
        }><use href="#${t}"/></svg>`;
      return new q4(t, e, o, r);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [];
      return (
        e.push(`<div id="svg-templates" style="${U1}" aria-hidden="true">`),
        this.entries.forEach((t) => e.push(t.svg)),
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  Go = new X4();
function Y4(e) {
  try {
    let n = G4(e).getElementsByTagName("svg")[0];
    if (!n) throw Error("no svg element found");
    return n;
  } catch {
    return;
  }
}
function K4(e, t) {
  let n = Q4(t);
  tT(e, n);
}
function Q4(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function tT(e, t) {
  Z4(e, t),
    Array.from(e.children).forEach((r) => {
      tT(r, t);
    });
}
function Z4(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var J4 = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function G1(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (J4[n[2]] || 1));
}
function eB(e) {
  let t = G1(e.getAttribute("width")),
    n = G1(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function j8(e) {
  let t = za(),
    n = Na(e),
    r = x.useRef(null),
    i = N5();
  return (
    Uu(e, r),
    k(sB, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var tB = 5e4;
function nB(e) {
  return e.indexOf("image") >= 0;
}
function rB(e) {
  return e.indexOf("var(--") >= 0;
}
function iB(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function q1(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? qt,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let m = Go.getViewBox(t.svg);
    m && s.setAttribute("viewBox", m);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && Va(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    Q(u) &&
    Q(f) &&
    s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%");
}
function oB() {
  return (
    x.useInsertionEffect(() => {
      Ba();
    }, []),
    null
  );
}
var sB = (() => {
  var e;
  return (
    (e = class extends uu {
      constructor() {
        super(...arguments),
          C(this, "container", x.createRef()),
          C(this, "svgElement", null),
          C(this, "setSVGElement", (t) => {
            (this.svgElement = t), this.setLayerElement(t);
          }),
          C(this, "previouslyRenderedSVG", ""),
          C(this, "unmountedSVG", "");
      }
      static frame(t) {
        return Ta(t, t.parentSize || 0);
      }
      get frame() {
        return Ta(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: t } = this.props,
            n = t ? `svg${t}` : null;
          Go.subscribe(this.unmountedSVG, !t, n),
            (this.previouslyRenderedSVG = this.unmountedSVG);
        }
        this.props.svgContentId || q1(this.container, this.props);
      }
      componentWillUnmount() {
        Go.unsubscribe(this.previouslyRenderedSVG),
          (this.unmountedSVG = this.previouslyRenderedSVG),
          (this.previouslyRenderedSVG = "");
      }
      componentDidUpdate(t) {
        if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
        let { fill: n } = this.props;
        Ui.isImageObject(n) &&
          Ui.isImageObject(t.fill) &&
          n.src !== t.fill.src &&
          Dk(this.svgElement, "fill", null, !1),
          q1(this.container, this.props);
      }
      collectLayout(t, n) {
        if (this.props.withExternalLayout) {
          (n.width = "100%"), (n.height = "100%"), (n.aspectRatio = "inherit");
          return;
        }
        let r = this.frame,
          {
            rotation: i,
            intrinsicWidth: o,
            intrinsicHeight: s,
            width: a,
            height: l,
          } = this.props,
          c = rt.getNumber(i);
        if (
          ((t.opacity = Q(this.props.opacity) ? this.props.opacity : 1),
          be.hasRestrictions() && r)
        ) {
          Object.assign(t, {
            transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
              4
            )}deg)`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          }),
            Va(this.props) && (t.position = "absolute");
          let g = r.width / (o || 1),
            v = r.height / (s || 1);
          n.transformOrigin = "top left";
          let { zoom: b, target: h } = wm;
          if (h === be.export) {
            let p = b > 1 ? b : 1;
            (n.transform = `scale(${g * p}, ${v * p})`), (n.zoom = 1 / p);
          } else n.transform = `scale(${g}, ${v})`;
          o && s && ((n.width = o), (n.height = s));
          return;
        }
        let { left: u, right: f, top: d, bottom: m } = this.props;
        Object.assign(t, {
          left: u,
          right: f,
          top: d,
          bottom: m,
          width: a,
          height: l,
          rotate: c,
        }),
          Object.assign(n, {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
          });
      }
      render() {
        let {
          id: t,
          visible: n,
          style: r,
          fill: i,
          svg: o,
          intrinsicHeight: s,
          intrinsicWidth: a,
          title: l,
          description: c,
          layoutId: u,
          className: f,
          variants: d,
          withExternalLayout: m,
          innerRef: g,
          svgContentId: v,
          height: b,
          opacity: h,
          width: p,
          ...y
        } = this.props;
        if (!m && (!n || !t)) return null;
        let w = t ?? u ?? "svg",
          T = this.frame,
          S = T || { width: a || 100, height: s || 100 },
          E = { ...r, imageRendering: "pixelated", flexShrink: 0 },
          R = {};
        this.collectLayout(E, R),
          qD(this.props, E),
          Qm(this.props, E),
          uu.applyWillChange(this.props, E, !1);
        let M = null;
        if (typeof i == "string" || U.isColorObject(i)) {
          let j = U.isColorObject(i) ? i.initialValue || U.toRgbString(i) : i;
          (E.fill = j), (E.color = j);
        } else if (Ra.isLinearGradient(i)) {
          let j = i,
            me = `${encodeURI(t || "")}g${Ra.hash(j)}`;
          E.fill = `url(#${me})`;
          let { stops: le, x1: fe, x2: Z, y1: Je, y2: Me } = z4(j, w);
          M = k("svg", {
            ref: this.setSVGElement,
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: k("linearGradient", {
              id: me,
              x1: fe,
              x2: Z,
              y1: Je,
              y2: Me,
              children: le.map((ft, we) =>
                k(
                  "stop",
                  {
                    offset: ft.position,
                    stopColor: ft.color,
                    stopOpacity: ft.alpha,
                  },
                  we
                )
              ),
            }),
          });
        } else if (Pa.isRadialGradient(i)) {
          let j = i,
            me = `${encodeURI(t || "")}g${Pa.hash(j)}`;
          E.fill = `url(#${me})`;
          let le = B4(j, w);
          M = k("svg", {
            ref: this.setSVGElement,
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: k("radialGradient", {
              id: me,
              cy: j.centerAnchorY,
              cx: j.centerAnchorX,
              r: j.widthFactor,
              children: le.stops.map((fe, Z) =>
                k(
                  "stop",
                  {
                    offset: fe.position,
                    stopColor: fe.color,
                    stopOpacity: fe.alpha,
                  },
                  Z
                )
              ),
            }),
          });
        } else if (Ui.isImageObject(i)) {
          let j = $4(i, S, w);
          j &&
            ((E.fill = `url(#${j.id})`),
            (M = k("svg", {
              ref: this.setSVGElement,
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: k("defs", { children: k(W4, { ...j }) }),
            })));
        }
        let I = { "data-framer-component-type": "SVG" },
          G = !T;
        G && Object.assign(I, Fk(this.props.center));
        let z =
            !M &&
            !E.fill &&
            !E.background &&
            !E.backgroundImage &&
            o.length < tB &&
            !nB(o) &&
            !rB(o),
          de = null;
        if (z)
          (E.backgroundSize = "100% 100%"),
            (E.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
              o
            )}')`),
            Go.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = "");
        else {
          let j = v ? `svg${v}` : null,
            me = Go.subscribe(o, !v, j);
          Go.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = o),
            iB(E) && (E.overflow = "hidden"),
            (de = ue(je, {
              children: [
                M,
                k(
                  "div",
                  {
                    className: "svgContainer",
                    style: R,
                    ref: this.container,
                    dangerouslySetInnerHTML: { __html: me },
                  },
                  Ui.isImageObject(i) ? i.src : ""
                ),
              ],
            }));
        }
        let ye = $a(this.props.as),
          { href: re, target: J, rel: W, onClick: X } = this.props,
          se = l || c;
        return ue(ye, {
          ...I,
          ...y,
          layoutId: u,
          transformTemplate: G ? Wu(this.props.center) : void 0,
          id: t,
          ref: g,
          style: E,
          className: f,
          variants: d,
          tabIndex: this.props.tabIndex,
          role: se ? "img" : void 0,
          "aria-label": l,
          "aria-description": c,
          "aria-hidden": se ? void 0 : "true",
          href: re,
          target: J,
          rel: W,
          onClick: X,
          children: [de, k(oB, {})],
        });
      }
    }),
    C(e, "supportsConstraints", !0),
    C(e, "defaultSVGProps", {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      style: void 0,
      _constraints: { enabled: !0, aspectRatio: null },
      parentSize: 0,
      rotation: 0,
      visible: !0,
      svg: "",
      shadows: [],
    }),
    C(e, "defaultProps", { ...uu.defaultProps, ...e.defaultSVGProps }),
    e
  );
})();
var aB = 1e3;
function J8(e) {
  return e > aB ? "lazy" : void 0;
}
function eW(e, t, n) {
  let r = nT(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function tW(e) {
  return e.fonts ?? [];
}
function nW(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : nT(e);
}
function nT(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) cB(r) ? n.push(r) : t.fonts.push(uB(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var lB = "explicitInter";
function cB(e) {
  return lB in e;
}
function uB(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith(
          "https://framerusercontent.com/third-party-assets/fontshare/"
        )
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
function rW(e, t) {
  let n = `${e}-start`;
  performance.mark(n), t();
  let r = `${e}-end`;
  performance.mark(r), performance.measure(e, n, r);
}
bl.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = Vr(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  x as a,
  jn as b,
  ur as c,
  fr as d,
  Qa as e,
  to as f,
  Ae as g,
  OT as h,
  dr as i,
  ie as j,
  $ as k,
  mi as l,
  ot as m,
  ae as n,
  D as o,
  Xe as p,
  St as q,
  k as r,
  ue as s,
  ee as t,
  We as u,
  mn as v,
  B0 as w,
  Ci as x,
  Pl as y,
  e_ as z,
  W0 as A,
  q0 as B,
  S_ as C,
  xS as D,
  h2 as E,
  MN as F,
  zN as G,
  NN as H,
  jN as I,
  UN as J,
  kL as K,
  fk as L,
  be as M,
  p6 as N,
  TM as O,
  b6 as P,
  CA as Q,
  x6 as R,
  cH as S,
  Sm as T,
  cj as U,
  mj as V,
  KV as W,
  Qk as X,
  wj as Y,
  i3 as Z,
  Rj as _,
  Ij as $,
  Vj as aa,
  Nj as ba,
  jj as ca,
  Gj as da,
  L5 as ea,
  qj as fa,
  Xj as ga,
  Zj as ha,
  Jj as ia,
  bu as ja,
  L8 as ka,
  B8 as la,
  Go as ma,
  j8 as na,
  J8 as oa,
  eW as pa,
  tW as qa,
  nW as ra,
  rW as sa,
};
//# sourceMappingURL=chunk-IALZBPUC.mjs.map
