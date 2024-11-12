import { a as We } from "./chunk-4ONTLMIS.mjs";
import {
  $ as ye,
  A as Je,
  B as $e,
  C as ge,
  K as St,
  M as he,
  O as c,
  R as _e,
  S as Ie,
  T as et,
  U as xe,
  V as we,
  X as kt,
  Y as Mt,
  Z as At,
  b as Re,
  ba as W,
  c as y,
  d as qe,
  f as Ue,
  g as yt,
  h as vt,
  ha as zt,
  j as fe,
  ja as tt,
  k as L,
  ka as k,
  l as bt,
  la as v,
  m as Ct,
  n as X,
  na as ne,
  o as I,
  oa as f,
  p as me,
  pa as Tt,
  qa as rt,
  r as t,
  ra as Et,
  s as b,
  t as Le,
  u as je,
  v as Q,
  w as ue,
  x as Ye,
  y as Qe,
  z as Xe,
} from "./chunk-IALZBPUC.mjs";
import { b as x, c as d } from "./chunk-RIUMFBNJ.mjs";
var ke = (e) => e;
var Ne = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 };
function nt(e, r) {
  return r ? e * (1e3 / r) : 0;
}
var Rt = (e, r, a) =>
    (((1 - 3 * a + 3 * r) * e + (3 * a - 6 * r)) * e + 3 * r) * e,
  mr = 1e-7,
  hr = 12;
function dr(e, r, a, n, i) {
  let s,
    l,
    m = 0;
  do (l = r + (a - r) / 2), (s = Rt(l, n, i) - e), s > 0 ? (a = l) : (r = l);
  while (Math.abs(s) > mr && ++m < hr);
  return l;
}
function Me(e, r, a, n) {
  if (e === r && a === n) return ke;
  let i = (s) => dr(s, 0, 1, e, a);
  return (s) => (s === 0 || s === 1 ? s : Rt(i(s), r, n));
}
var Pi = {
  ease: Me(0.25, 0.1, 0.25, 1),
  "ease-in": Me(0.42, 0, 1, 1),
  "ease-in-out": Me(0.42, 0, 0.58, 1),
  "ease-out": Me(0, 0, 0.58, 1),
};
function Lt(e, r) {
  var a = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      r.indexOf(n) < 0 &&
      (a[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      r.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (a[n[i]] = e[n[i]]);
  }
  return a;
}
var ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.warning = function () {};
ve.invariant = function () {};
var Di = ve.__esModule,
  Zi = ve.warning,
  wr = ve.invariant;
var yr = 5;
function Ve(e, r, a) {
  let n = Math.max(r - yr, 0);
  return nt(a - e(n), r - n);
}
var be = { stiffness: 100, damping: 10, mass: 1 },
  vr = (e = be.stiffness, r = be.damping, a = be.mass) =>
    r / (2 * Math.sqrt(e * a));
function br(e, r, a) {
  return (e < r && a >= r) || (e > r && a <= r);
}
var it = ({
    stiffness: e = be.stiffness,
    damping: r = be.damping,
    mass: a = be.mass,
    from: n = 0,
    to: i = 1,
    velocity: s = 0,
    restSpeed: l = 2,
    restDistance: m = 0.5,
  } = {}) => {
    s = s ? Ne.s(s) : 0;
    let h = { done: !1, hasReachedTarget: !1, current: n, target: i },
      o = i - n,
      u = Math.sqrt(e / a) / 1e3,
      p = vr(e, r, a),
      R;
    if (p < 1) {
      let M = u * Math.sqrt(1 - p * p);
      R = (A) =>
        i -
        Math.exp(-p * u * A) *
          (((p * u * o - s) / M) * Math.sin(M * A) + o * Math.cos(M * A));
    } else R = (M) => i - Math.exp(-u * M) * (o + (u * o - s) * M);
    return (M) => {
      h.current = R(M);
      let A = M === 0 ? s : Ve(R, M, h.current),
        E = Math.abs(A) <= l,
        S = Math.abs(i - h.current) <= m;
      return (h.done = E && S), (h.hasReachedTarget = br(n, i, h.current)), h;
    };
  },
  jt = ({
    from: e = 0,
    velocity: r = 0,
    power: a = 0.8,
    decay: n = 0.325,
    bounceDamping: i,
    bounceStiffness: s,
    changeTarget: l,
    min: m,
    max: h,
    restDistance: o = 0.5,
    restSpeed: u,
  }) => {
    n = Ne.ms(n);
    let p = { hasReachedTarget: !1, done: !1, current: e, target: e },
      R = (g) => (m !== void 0 && g < m) || (h !== void 0 && g > h),
      M = (g) =>
        m === void 0
          ? h
          : h === void 0 || Math.abs(m - g) < Math.abs(h - g)
          ? m
          : h,
      A = a * r,
      E = e + A,
      S = l === void 0 ? E : l(E);
    (p.target = S), S !== E && (A = S - e);
    let O = (g) => -A * Math.exp(-g / n),
      N = (g) => S + O(g),
      V = (g) => {
        let j = O(g),
          K = N(g);
        (p.done = Math.abs(j) <= o), (p.current = p.done ? S : K);
      },
      H,
      F,
      Z = (g) => {
        R(p.current) &&
          ((H = g),
          (F = it({
            from: p.current,
            to: M(p.current),
            velocity: Ve(N, g, p.current),
            damping: i,
            stiffness: s,
            restDistance: o,
            restSpeed: u,
          })));
      };
    return (
      Z(0),
      (g) => {
        let j = !1;
        return (
          !F && H === void 0 && ((j = !0), V(g), Z(g)),
          H !== void 0 && g > H
            ? ((p.hasReachedTarget = !0), F(g - H))
            : ((p.hasReachedTarget = !1), !j && V(g), p)
        );
      }
    );
  },
  at = 10,
  Cr = 1e4;
function _t(e) {
  let r,
    a = at,
    n = e(0),
    i = [n.current];
  for (; !n.done && a < Cr; )
    (n = e(a)),
      i.push(n.done ? n.target : n.current),
      r === void 0 && n.hasReachedTarget && (r = a),
      (a += at);
  let s = a - at;
  return (
    i.length === 1 && i.push(n.current),
    { keyframes: i, duration: s / 1e3, overshootDuration: (r ?? s) / 1e3 }
  );
}
var Sr = ["", "X", "Y", "Z"],
  kr = ["translate", "scale", "rotate", "skew"];
var It = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  Mr = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: It,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: ke },
    skew: It,
  },
  Ar = new Map(),
  zr = (e) => `--motion-${e}`,
  Pt = ["x", "y", "z"];
kr.forEach((e) => {
  Sr.forEach((r) => {
    Pt.push(e + r), Ar.set(zr(e + r), Mr[e]);
  });
});
var wo = new Set(Pt);
var Wt = (e) => document.createElement("div").animate(e, { duration: 0.001 }),
  Nt = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Wt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Wt({ opacity: [0, 1] }).finished,
  },
  ot = {},
  Tr = {};
for (let e in Nt) Tr[e] = () => (ot[e] === void 0 && (ot[e] = Nt[e]()), ot[e]);
function Bt(e, r) {
  var a;
  return (
    typeof e == "string"
      ? r
        ? (((a = r[e]) !== null && a !== void 0) ||
            (r[e] = document.querySelectorAll(e)),
          (e = r[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Ot(e) {
  let r = new WeakMap();
  return (a = {}) => {
    let n = new Map(),
      i = (l = 0, m = 100, h = 0, o = !1) => {
        let u = `${l}-${m}-${h}-${o}`;
        return (
          n.has(u) ||
            n.set(
              u,
              e(
                Object.assign(
                  {
                    from: l,
                    to: m,
                    velocity: h,
                    restSpeed: o ? 0.05 : 2,
                    restDistance: o ? 0.01 : 0.5,
                  },
                  a
                )
              )
            ),
          n.get(u)
        );
      },
      s = (l) => (r.has(l) || r.set(l, _t(l)), r.get(l));
    return {
      createAnimation: (l, m, h, o, u) => {
        var p, R;
        let M,
          A = l.length;
        if (h && A <= 2 && l.every(Er)) {
          let S = l[A - 1],
            O = A === 1 ? null : l[0],
            N = 0,
            V = 0,
            H = u?.generator;
          if (H) {
            let { animation: g, generatorStartTime: j } = u,
              K = g?.startTime || j || 0,
              _ = g?.currentTime || performance.now() - K,
              J = H(_).current;
            (V = (p = O) !== null && p !== void 0 ? p : J),
              (A === 1 || (A === 2 && l[0] === null)) &&
                (N = Ve((G) => H(G).current, _, J));
          } else V = (R = O) !== null && R !== void 0 ? R : parseFloat(m());
          let F = i(V, S, N, o?.includes("scale")),
            Z = s(F);
          (M = Object.assign(Object.assign({}, Z), { easing: "linear" })),
            u &&
              ((u.generator = F), (u.generatorStartTime = performance.now()));
        } else M = { easing: "ease", duration: s(i(0, 100)).overshootDuration };
        return M;
      },
    };
  };
}
var Er = (e) => typeof e != "string",
  yo = Ot(it),
  vo = Ot(jt),
  Rr = { any: 0, all: 1 };
function Lr(e, r, { root: a, margin: n, amount: i = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let s = Bt(e),
    l = new WeakMap(),
    m = (o) => {
      o.forEach((u) => {
        let p = l.get(u.target);
        if (u.isIntersecting !== !!p)
          if (u.isIntersecting) {
            let R = r(u);
            typeof R == "function" ? l.set(u.target, R) : h.unobserve(u.target);
          } else p && (p(u), l.delete(u.target));
      });
    },
    h = new IntersectionObserver(m, {
      root: a,
      rootMargin: n,
      threshold: typeof i == "number" ? i : Rr[i],
    });
  return s.forEach((o) => h.observe(o)), () => h.disconnect();
}
var He = new WeakMap(),
  ae;
function jr(e, r) {
  if (r) {
    let { inlineSize: a, blockSize: n } = r[0];
    return { width: a, height: n };
  }
  return e instanceof SVGElement && "getBBox" in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function _r({ target: e, contentRect: r, borderBoxSize: a }) {
  var n;
  (n = He.get(e)) === null ||
    n === void 0 ||
    n.forEach((i) => {
      i({
        target: e,
        contentSize: r,
        get size() {
          return jr(e, a);
        },
      });
    });
}
function Ir(e) {
  e.forEach(_r);
}
function Wr() {
  typeof ResizeObserver < "u" && (ae = new ResizeObserver(Ir));
}
function Nr(e, r) {
  ae || Wr();
  let a = Bt(e);
  return (
    a.forEach((n) => {
      let i = He.get(n);
      i || ((i = new Set()), He.set(n, i)), i.add(r), ae?.observe(n);
    }),
    () => {
      a.forEach((n) => {
        let i = He.get(n);
        i?.delete(r), i?.size || ae?.unobserve(n);
      });
    }
  );
}
var Pe = new Set(),
  Ae;
function Vr() {
  (Ae = () => {
    let e = { width: d.innerWidth, height: d.innerHeight },
      r = { target: d, size: e, contentSize: e };
    Pe.forEach((a) => a(r));
  }),
    d.addEventListener("resize", Ae);
}
function Hr(e) {
  return (
    Pe.add(e),
    Ae || Vr(),
    () => {
      Pe.delete(e), !Pe.size && Ae && (Ae = void 0);
    }
  );
}
function Ft(e, r) {
  return typeof e == "function" ? Hr(e) : Nr(e, r);
}
function st(e, r, a) {
  e.dispatchEvent(new CustomEvent(r, { detail: { originalEvent: a } }));
}
function Vt(e, r, a) {
  e.dispatchEvent(new CustomEvent(r, { detail: { originalEntry: a } }));
}
var Pr = {
    isActive: (e) => !!e.inView,
    subscribe: (e, { enable: r, disable: a }, { inViewOptions: n = {} }) => {
      let { once: i } = n,
        s = Lt(n, ["once"]);
      return Lr(
        e,
        (l) => {
          if ((r(), Vt(e, "viewenter", l), !i))
            return (m) => {
              a(), Vt(e, "viewleave", m);
            };
        },
        s
      );
    },
  },
  Ht = (e, r, a) => (n) => {
    (!n.pointerType || n.pointerType === "mouse") && (a(), st(e, r, n));
  },
  Br = {
    isActive: (e) => !!e.hover,
    subscribe: (e, { enable: r, disable: a }) => {
      let n = Ht(e, "hoverstart", r),
        i = Ht(e, "hoverend", a);
      return (
        e.addEventListener("pointerenter", n),
        e.addEventListener("pointerleave", i),
        () => {
          e.removeEventListener("pointerenter", n),
            e.removeEventListener("pointerleave", i);
        }
      );
    },
  },
  Or = {
    isActive: (e) => !!e.press,
    subscribe: (e, { enable: r, disable: a }) => {
      let n = (s) => {
          a(), st(e, "pressend", s), d.removeEventListener("pointerup", n);
        },
        i = (s) => {
          r(), st(e, "pressstart", s), d.addEventListener("pointerup", n);
        };
      return (
        e.addEventListener("pointerdown", i),
        () => {
          e.removeEventListener("pointerdown", i),
            d.removeEventListener("pointerup", n);
        }
      );
    },
  },
  Fr = { inView: Pr, hover: Br, press: Or },
  bo = ["initial", "animate", ...Object.keys(Fr), "exit"];
var Kr = 100,
  Dr = {
    left: (e) => `translateX(-${e}px)`,
    right: (e) => `translateX(${e}px)`,
    top: (e) => `translateY(-${e}px)`,
    bottom: (e) => `translateY(${e}px)`,
  },
  lt =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function ie(e) {
  let {
      slots: r,
      gap: a,
      padding: n,
      paddingPerSide: i,
      paddingTop: s,
      paddingRight: l,
      paddingBottom: m,
      paddingLeft: h,
      speed: o,
      hoverFactor: u,
      direction: p,
      alignment: R,
      sizingOptions: M,
      fadeOptions: A,
      style: E,
    } = e,
    {
      fadeContent: S,
      overflow: O,
      fadeWidth: N,
      fadeInset: V,
      fadeAlpha: H,
    } = A,
    { widthType: F, heightType: Z } = M,
    g = i ? `${s}px ${l}px ${m}px ${h}px` : `${n}px`,
    j = he.current() === he.canvas,
    K = r.filter(Boolean),
    _ = Re.count(K),
    J = _ > 0;
  p === !0 && (p = "left");
  let G = p === "left" || p === "right",
    Ce = Ye(0),
    q = Dr[p],
    Oe = Qe(Ce, q),
    P = I(null),
    B = X(() => [Ue(), Ue()], []),
    [$, U] = me({ parent: null, children: null }),
    re = [],
    oe = [],
    ee = 0,
    Se = 0;
  j && ((ee = _ ? Math.floor(10 / _) : 0), (Se = 1)),
    !j &&
      J &&
      $.parent &&
      ((ee = Math.round(($.parent / $.children) * 2) + 1),
      (ee = Math.min(ee, Kr)),
      (Se = 1));
  let ze = fe(() => {
      if (J && P.current) {
        let z = G ? P.current.offsetWidth : P.current.offsetHeight,
          T = B[0].current
            ? G
              ? B[0].current.offsetLeft
              : B[0].current.offsetTop
            : 0,
          D =
            (B[1].current
              ? G
                ? B[1].current.offsetLeft + B[1].current.offsetWidth
                : B[1].current.offsetTop + B[1].current.offsetHeight
              : 0) -
            T +
            a;
        U({ parent: z, children: D });
      }
    }, []),
    Te = j ? { contentVisibility: "auto" } : {};
  if (J) {
    if (!j) {
      let z = I(!0);
      L(
        () => (
          Le.read(ze),
          Ft(P.current, ({ contentSize: T }) => {
            !z.current && (T.width || T.height) && Le.read(ze),
              (z.current = !1);
          })
        ),
        []
      );
    }
    re = Re.map(K, (z, T) => {
      var te, D, se, le;
      let ce;
      T === 0 && (ce = B[0]), T === K.length - 1 && (ce = B[1]);
      let pe = {
        width: F
          ? (te = z.props) === null || te === void 0
            ? void 0
            : te.width
          : "100%",
        height: Z
          ? (D = z.props) === null || D === void 0
            ? void 0
            : D.height
          : "100%",
      };
      return t(ue, {
        inherit: "id",
        children: t("li", {
          ref: ce,
          style: pe,
          children: qe(
            z,
            {
              style: {
                ...((se = z.props) === null || se === void 0
                  ? void 0
                  : se.style),
                ...pe,
                flexShrink: 0,
                ...Te,
              },
              layoutId: z.props.layoutId
                ? z.props.layoutId + "-original-" + T
                : void 0,
            },
            (le = z.props) === null || le === void 0 ? void 0 : le.children
          ),
        }),
      });
    });
  }
  if (!j)
    for (let z = 0; z < ee; z++)
      oe = [
        ...oe,
        ...Re.map(K, (T, te) => {
          var D, se, le, ce, pe, Ge;
          let lr = {
            width: F
              ? (D = T.props) === null || D === void 0
                ? void 0
                : D.width
              : "100%",
            height: Z
              ? (se = T.props) === null || se === void 0
                ? void 0
                : se.height
              : "100%",
            willChange: "transform",
          };
          return t(
            ue,
            {
              inherit: "id",
              children: t(
                "li",
                {
                  style: lr,
                  "aria-hidden": !0,
                  children: qe(
                    T,
                    {
                      key: z + " " + te,
                      style: {
                        ...((le = T.props) === null || le === void 0
                          ? void 0
                          : le.style),
                        width: F
                          ? (ce = T.props) === null || ce === void 0
                            ? void 0
                            : ce.width
                          : "100%",
                        height: Z
                          ? (pe = T.props) === null || pe === void 0
                            ? void 0
                            : pe.height
                          : "100%",
                        flexShrink: 0,
                        ...Te,
                      },
                      layoutId: T.props.layoutId
                        ? T.props.layoutId + "-dupe-" + z
                        : void 0,
                    },
                    (Ge = T.props) === null || Ge === void 0
                      ? void 0
                      : Ge.children
                  ),
                },
                z + "li" + te
              ),
            },
            z + "lg" + te
          );
        }),
      ];
  let w = $.children + $.children * Math.round($.parent / $.children),
    Fe = I(null),
    Ke = I(null),
    Ee = I(0),
    De = I(!1),
    gt = Je(),
    xt = I(null),
    Y = I(null);
  if (!j) {
    let z = ge(P);
    lt
      ? (L(() => {
          if (!(gt || !w || !o))
            return (
              (Y.current = xt.current.animate(
                { transform: [q(0), q(w)] },
                {
                  duration: (Math.abs(w) / o) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => Y.current.cancel()
            );
        }, [u, w, o]),
        L(() => {
          Y.current &&
            (z && Y.current.playState === "paused"
              ? Y.current.play()
              : !z && Y.current.playState === "running" && Y.current.pause());
        }, [z]))
      : Xe((T) => {
          if (!w || gt || lt) return;
          Fe.current === null && (Fe.current = T), (T = T - Fe.current);
          let D = (Ke.current === null ? 0 : T - Ke.current) * (o / 1e3);
          De.current && (D *= u),
            (Ee.current += D),
            (Ee.current = $e(0, w, Ee.current)),
            (Ke.current = T),
            z && Ce.set(Ee.current);
        });
  }
  let ar = G ? "to right" : "to bottom",
    wt = N / 2,
    ir = 100 - N / 2,
    or = Yr(V, 0, wt),
    sr = 100 - V,
    Ze = `linear-gradient(${ar}, rgba(0, 0, 0, ${H}) ${or}%, rgba(0, 0, 0, 1) ${wt}%, rgba(0, 0, 0, 1) ${ir}%, rgba(0, 0, 0, ${H}) ${sr}%)`;
  return J
    ? t("section", {
        style: {
          ...Kt,
          opacity: Se,
          WebkitMaskImage: S ? Ze : void 0,
          MozMaskImage: S ? Ze : void 0,
          maskImage: S ? Ze : void 0,
          overflow: O ? "visible" : "hidden",
          padding: g,
        },
        ref: P,
        children: b(Q.ul, {
          ref: xt,
          style: {
            ...Kt,
            gap: a,
            top: p === "bottom" && Dt(w) ? -w : void 0,
            left: p === "right" && Dt(w) ? -w : void 0,
            placeItems: R,
            position: "relative",
            flexDirection: G ? "row" : "column",
            ...E,
            willChange: j ? "auto" : "transform",
            transform: lt ? q(0) : Oe,
          },
          onMouseEnter: () => {
            (De.current = !0), Y.current && (Y.current.playbackRate = u);
          },
          onMouseLeave: () => {
            (De.current = !1), Y.current && (Y.current.playbackRate = 1);
          },
          children: [re, oe],
        }),
      })
    : b("section", {
        style: Zr,
        children: [
          t("div", { style: Gr, children: "\u2728" }),
          t("p", { style: qr, children: "Connect to Content" }),
          t("p", {
            style: Ur,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
ie.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
_e(ie, {
  slots: {
    type: c.Array,
    title: "Children",
    control: { type: c.ComponentInstance },
  },
  speed: {
    type: c.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: c.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: c.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: c.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: c.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: c.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: c.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: c.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: c.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: c.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: c.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: c.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: c.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: c.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: c.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Kt = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Zr = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Gr = { fontSize: 32, marginBottom: 10 },
  qr = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Ur = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Yr = (e, r, a) => Math.min(Math.max(e, r), a),
  Dt = (e) => typeof e == "number" && !isNaN(e);
var Zt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Qr = {
    ...Zt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  ct = {
    onClick: { type: c.EventHandler },
    onMouseEnter: { type: c.EventHandler },
    onMouseLeave: { type: c.EventHandler },
  },
  Xr = {
    type: c.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Jr = {
    font: {
      type: c.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: c.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: e }) => !e,
    },
    fontWeight: {
      type: c.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: e }) => !e,
    },
  };
function ft(e, r) {
  return Gt(!0, e, r);
}
function mt(e, r) {
  return Gt(!1, e, r);
}
function Gt(e, r, a = !0) {
  let n = Ie();
  L(() => {
    a && n === e && r();
  }, [n]);
}
var $r = () => {
    if (typeof x < "u") {
      let e = x.userAgent.toLowerCase();
      return (
        (e.indexOf("safari") > -1 ||
          e.indexOf("framermobile") > -1 ||
          e.indexOf("framerx") > -1) &&
        e.indexOf("chrome") < 0
      );
    } else return !1;
  },
  ht = () => X(() => $r(), []);
function dt() {
  return X(() => he.current() === he.canvas, []);
}
function pt(e) {
  let {
    borderRadius: r,
    isMixedBorderRadius: a,
    topLeftRadius: n,
    topRightRadius: i,
    bottomRightRadius: s,
    bottomLeftRadius: l,
  } = e;
  return X(
    () => (a ? `${n}px ${i}px ${s}px ${l}px` : `${r}px`),
    [r, a, n, i, s, l]
  );
}
var ut = {
  borderRadius: {
    title: "Radius",
    type: c.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var rn = {
  padding: {
    type: c.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var Yt;
(function (e) {
  (e.Fill = "fill"),
    (e.Contain = "contain"),
    (e.Cover = "cover"),
    (e.None = "none"),
    (e.ScaleDown = "scale-down");
})(Yt || (Yt = {}));
var Qt;
(function (e) {
  (e.Video = "Upload"), (e.Url = "URL");
})(Qt || (Qt = {}));
function nn(e) {
  let {
    width: r,
    height: a,
    topLeft: n,
    topRight: i,
    bottomRight: s,
    bottomLeft: l,
    id: m,
    children: h,
    ...o
  } = e;
  return o;
}
function de(e) {
  let r = nn(e);
  return t(sn, { ...r });
}
function an(e) {
  let r = Ie(),
    a = I(!1),
    n = I(!1),
    i = fe((m) => {
      if (!e.current) return;
      let h = (m === 1 ? 0.999 : m) * e.current.duration,
        o = Math.abs(e.current.currentTime - h) < 0.1;
      e.current.duration > 0 && !o && (e.current.currentTime = h);
    }, []),
    s = fe(() => {
      let m = e.current;
      if (!m) return;
      (m.preload = "auto"),
        !(
          m.currentTime > 0 &&
          m.onplaying &&
          !m.paused &&
          !m.ended &&
          m.readyState >= m.HAVE_CURRENT_DATA
        ) &&
          m &&
          !a.current &&
          r &&
          ((a.current = !0),
          (n.current = !0),
          m
            .play()
            .catch((o) => {})
            .finally(() => (a.current = !1)));
    }, []),
    l = fe(() => {
      !e.current || a.current || (e.current.pause(), (n.current = !1));
    }, []);
  return { play: s, pause: l, setProgress: i, isPlaying: n };
}
function on({
  playingProp: e,
  muted: r,
  loop: a,
  playsinline: n,
  controls: i,
}) {
  let [s] = me(() => e),
    [l, m] = me(!1);
  e !== s && !l && m(!0);
  let h = s && r && a && n && !i && !l,
    o;
  return (
    h ? (o = "on-viewport") : s ? (o = "on-mount") : (o = "no-autoplay"), o
  );
}
var Xt = !1,
  sn = vt(function (r) {
    let {
        srcType: a,
        srcFile: n,
        srcUrl: i,
        playing: s,
        muted: l,
        playsinline: m,
        controls: h,
        progress: o,
        objectFit: u,
        backgroundColor: p,
        onSeeked: R,
        onPause: M,
        onPlay: A,
        onEnd: E,
        onClick: S,
        onMouseEnter: O,
        onMouseLeave: N,
        onMouseDown: V,
        onMouseUp: H,
        poster: F,
        posterEnabled: Z,
        startTime: g,
        volume: j,
        loop: K,
      } = r,
      _ = I(),
      J = ht(),
      G = I(null),
      Ce = I(null),
      q = dt(),
      Oe = pt(r),
      P = q
        ? "no-autoplay"
        : on({
            playingProp: s,
            muted: l,
            loop: K,
            playsinline: m,
            controls: h,
          }),
      B = q ? !0 : ge(_),
      $ = q ? !1 : ge(_, { margin: "100px", once: !0 }),
      U = g === 100 ? 99.9 : g,
      { play: re, pause: oe, setProgress: ee, isPlaying: Se } = an(_);
    L(() => {
      q || (s ? re() : oe());
    }, [s]),
      L(() => {
        q || (P === "on-viewport" && (B ? re() : oe()));
      }, [P, B]),
      L(() => {
        if (!Xt) {
          Xt = !0;
          return;
        }
        let w = je(o) ? o.get() : (o ?? 0) * 0.01;
        ee((w ?? 0) || (U ?? 0) / 100);
      }, [U, n, i, o]),
      L(() => {
        if (je(o)) return o.on("change", (w) => ee(w));
      }, [o]),
      ft(() => {
        G.current !== null && _.current && ((!Ce && K) || !G.current) && re();
      }),
      mt(() => {
        _.current &&
          ((Ce.current = _.current.ended),
          (G.current = _.current.paused),
          oe());
      });
    let ze = X(() => {
      let w = "";
      if (a === "URL") return i + w;
      if (a === "Upload") return n + w;
    }, [a, n, i, U]);
    L(() => {
      J && _.current && P === "on-mount" && setTimeout(() => re(), 50);
    }, []),
      L(() => {
        _.current && !l && (_.current.volume = (j ?? 0) / 100);
      }, [j]);
    let Te = () => {
      let w = _.current;
      w &&
        (w.currentTime < 0.3 && U > 0 && ee((U ?? 0) * 0.01),
        P === "on-mount" && re());
    };
    return t("video", {
      onClick: S,
      onMouseEnter: O,
      onMouseLeave: N,
      onMouseDown: V,
      onMouseUp: H,
      src: ze,
      loop: K,
      ref: _,
      onSeeked: (w) => R?.(w),
      onPause: (w) => M?.(w),
      onPlay: (w) => A?.(w),
      onEnded: (w) => E?.(w),
      autoPlay: P === "on-mount",
      preload: Se.current
        ? "auto"
        : P !== "on-mount" && Z && !$
        ? "none"
        : "metadata",
      poster: Z ? F : void 0,
      onLoadedData: Te,
      controls: h,
      muted: q ? !0 : l,
      playsInline: m,
      style: {
        cursor: S ? "pointer" : "auto",
        width: "100%",
        height: "100%",
        borderRadius: Oe,
        display: "block",
        objectFit: u,
        backgroundColor: p,
        objectPosition: "50% 50%",
      },
    });
  });
de.displayName = "Video";
de.defaultProps = {
  srcType: "URL",
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: "cover",
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
function ln(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function cn(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(ln)
    .join(" ");
}
var Jt = ["cover", "fill", "contain", "scale-down", "none"];
_e(de, {
  srcType: {
    type: c.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: c.String,
    title: "URL",
    placeholder: "../example.mp4",
    hidden(e) {
      return e.srcType === "Upload";
    },
  },
  srcFile: {
    type: c.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(e) {
      return e.srcType === "URL";
    },
  },
  playing: {
    type: c.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: c.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
    description:
      "We recommend adding a poster. [Learn more](http://framer.com/help/articles/how-are-videos-optimized-in-framer/).",
  },
  poster: { type: c.Image, title: " ", hidden: ({ posterEnabled: e }) => !e },
  backgroundColor: { type: c.Color, title: "Background" },
  ...ut,
  startTime: {
    title: "Start Time",
    type: c.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: c.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: c.Enum,
    title: "Fit",
    options: Jt,
    optionTitles: Jt.map(cn),
  },
  controls: {
    type: c.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: c.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: c.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: e }) => e,
  },
  onEnd: { type: c.EventHandler },
  onSeeked: { type: c.EventHandler },
  onPause: { type: c.EventHandler },
  onPlay: { type: c.EventHandler },
  ...ct,
});
tt.loadFonts([]);
var $t = [{ explicitInter: !0, fonts: [] }],
  er = [
    ".framer-B1jGh .framer-styles-preset-pcslo6:not(.rich-text-wrapper), .framer-B1jGh .framer-styles-preset-pcslo6.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #2efefe; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }",
  ],
  tr = "framer-B1jGh";
var mn = rt(ie),
  hn = rt(de),
  dn = {
    BJp3tRdKe: "(min-width: 810px) and (max-width: 1199px)",
    imoZ0iwwr: "(max-width: 809px)",
    WQLkyLRf1: "(min-width: 1200px)",
  };
var rr = "framer-1hhCh",
  pn = {
    BJp3tRdKe: "framer-v-mkdk8t",
    imoZ0iwwr: "framer-v-141hc6v",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  nr = (e, r) => `translateY(-50%) ${r}`,
  Tl = We(),
  un = { Desktop: "WQLkyLRf1", Phone: "imoZ0iwwr", Tablet: "BJp3tRdKe" },
  gn = ({ height: e, id: r, width: a, ...n }) => {
    var i, s;
    return {
      ...n,
      variant:
        (s = (i = un[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && s !== void 0
          ? s
          : "WQLkyLRf1",
    };
  },
  xn = yt(function (e, r) {
    let { activeLocale: a, setLocale: n } = St(),
      { style: i, className: s, layoutId: l, variant: m, ...h } = gn(e);
    L(() => {
      let E = We(void 0, a);
      if (E.robots) {
        let S = document.querySelector('meta[name="robots"]');
        S
          ? S.setAttribute("content", E.robots)
          : ((S = document.createElement("meta")),
            S.setAttribute("name", "robots"),
            S.setAttribute("content", E.robots),
            document.head.appendChild(S));
      }
    }, [void 0, a]),
      Ct(() => {
        let E = We(void 0, a);
        if (((document.title = E.title || ""), E.viewport)) {
          var S;
          (S = document.querySelector('meta[name="viewport"]')) === null ||
            S === void 0 ||
            S.setAttribute("content", E.viewport);
        }
        let O = E.bodyClassName;
        if (O) {
          let N = document.body;
          N.classList.forEach(
            (V) => V.startsWith("framer-body-") && N.classList.remove(V)
          ),
            N.classList.add(`${E.bodyClassName}-framer-1hhCh`);
        }
        return () => {
          O &&
            document.body.classList.remove(`${E.bodyClassName}-framer-1hhCh`);
        };
      }, [void 0, a]);
    let [o, u] = zt(m, dn, !1),
      p = void 0,
      R = I(null),
      M = bt(),
      A = [tr];
    return (
      Mt({}),
      t(At.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: pn },
        children: b(ue, {
          id: l ?? M,
          children: [
            b(k, {
              ...h,
              background: {
                alt: "",
                fit: "fill",
                loading: f(0),
                pixelHeight: 338,
                pixelWidth: 600,
                sizes: "100vw",
                src: "https://framerusercontent.com/images/LPMOqwlrilCRjhvbeAc5wdtQ4.gif",
                srcSet:
                  "https://framerusercontent.com/images/LPMOqwlrilCRjhvbeAc5wdtQ4.gif?scale-down-to=512 512w,https://framerusercontent.com/images/LPMOqwlrilCRjhvbeAc5wdtQ4.gif 600w",
              },
              className: et(rr, ...A, "framer-72rtr7", s),
              ref: r ?? R,
              style: { ...i },
              children: [
                t("div", {
                  className: "framer-ky41vh",
                  children: t(xe, {
                    children: t(we, {
                      className: "framer-gz71kj-container",
                      children: t(ie, {
                        alignment: "center",
                        direction: "left",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 0,
                          overflow: !1,
                        },
                        gap: 10,
                        height: "100%",
                        hoverFactor: 1,
                        id: "eQJzUUgcT",
                        layoutId: "eQJzUUgcT",
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          b(Q.div, {
                            className: "framer-172lqqu",
                            "data-framer-name": "Stock 1",
                            name: "Stock 1",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "AMZN",
                                  }),
                                }),
                                className: "framer-1jh80tl",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-h3ds52",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-sopud6",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          b(Q.div, {
                            className: "framer-e58rdj",
                            "data-framer-name": "Stock 3",
                            name: "Stock 3",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "NVDA",
                                  }),
                                }),
                                className: "framer-18spzth",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-1rx6m1u",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-ygqrrm",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          b(Q.div, {
                            className: "framer-itx9wv",
                            "data-framer-name": "Stock 2",
                            name: "Stock 2",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "AAPL",
                                  }),
                                }),
                                className: "framer-1agizi5",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-1muxj77",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-1xpx8pi",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          b(Q.div, {
                            className: "framer-cl62bj",
                            "data-framer-name": "Stock 4",
                            name: "Stock 4",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "META",
                                  }),
                                }),
                                className: "framer-12m5bmq",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-3wkdf9",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-18yhnl9",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          b(Q.div, {
                            className: "framer-2benss",
                            "data-framer-name": "Stock 5",
                            name: "Stock 5",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "AMZN",
                                  }),
                                }),
                                className: "framer-1fplu0r",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-1gycfyr",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-xf18fu",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          b(Q.div, {
                            className: "framer-15u69bu",
                            "data-framer-name": "Stock 6",
                            name: "Stock 6",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "MSFT",
                                  }),
                                }),
                                className: "framer-85lysa",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-1vti0m1",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-v1qjf3",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          b(Q.div, {
                            className: "framer-1tefj8",
                            "data-framer-name": "Stock 7",
                            name: "Stock 7",
                            children: [
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "TSLA",
                                  }),
                                }),
                                className: "framer-14inzbe",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              t(ne, {
                                className: "framer-5289hl",
                                layout: "position",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 17"><path d="M 8.989 0.5 L 0 16.488 L 17.978 16.488 Z" fill="rgb(28, 255, 119)"></path></svg>',
                                svgContentId: 11772398324,
                                withExternalLayout: !0,
                              }),
                              t(v, {
                                __fromCanvasComponent: !0,
                                children: t(y, {
                                  children: t("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7S29kZSBNb25vLTcwMA==",
                                      "--framer-font-family":
                                        '"Kode Mono", monospace',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "2px",
                                      "--framer-line-height": "90%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(30, 255, 120)",
                                    },
                                    children: "6900%",
                                  }),
                                }),
                                className: "framer-1nh1m0s",
                                fonts: ["GF;Kode Mono-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                        speed: 150,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                b("div", {
                  className: "framer-58olak",
                  "data-border": !0,
                  children: [
                    b("div", {
                      className: "framer-fzgzr4",
                      children: [
                        t(W, {
                          breakpoint: o,
                          overrides: {
                            BJp3tRdKe: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 648,
                                intrinsicWidth: 860.5,
                                pixelHeight: 1296,
                                pixelWidth: 1721,
                                sizes: "500px",
                                src: "https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=512 512w,https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png 1721w",
                              },
                            },
                            imoZ0iwwr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 648,
                                intrinsicWidth: 860.5,
                                loading: f(123.25000000000017),
                                pixelHeight: 1296,
                                pixelWidth: 1721,
                                sizes: "calc(min(95vw, 1400px) * 0.9)",
                                src: "https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=512 512w,https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png 1721w",
                              },
                            },
                          },
                          children: t(k, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 648,
                              intrinsicWidth: 860.5,
                              loading: f(259.25000000000017),
                              pixelHeight: 1296,
                              pixelWidth: 1721,
                              sizes: "500px",
                              src: "https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=1024",
                              srcSet:
                                "https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=512 512w,https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3a4VeaCgyunnBKXKCcSyj2KGck.png 1721w",
                            },
                            className: "framer-6e7v9b",
                            "data-framer-name": "MAGICLogo",
                            name: "MAGICLogo",
                          }),
                        }),
                        b("div", {
                          className: "framer-1mef9l1",
                          children: [
                            t(ye, {
                              href: "https://pump.fun/8fc9oYwVY2eww42SbAmNuJYvCdRtzfxsCv14xiDpump",
                              children: t(W, {
                                breakpoint: o,
                                overrides: {
                                  BJp3tRdKe: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                  imoZ0iwwr: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: f(549.7500000000002),
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                },
                                children: t(k, {
                                  as: "a",
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: f(685.7500000000002),
                                    pixelHeight: 400,
                                    pixelWidth: 640,
                                    src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                    srcSet:
                                      "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                  },
                                  className: "framer-14brblw framer-lux5qc",
                                  "data-border": !0,
                                  children: t(v, {
                                    __fromCanvasComponent: !0,
                                    children: t(y, {
                                      children: t("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7S29kZSBNb25vLTcwMA==",
                                          "--framer-font-family":
                                            '"Kode Mono", monospace',
                                          "--framer-font-size": "20px",
                                          "--framer-font-weight": "700",
                                          "--framer-letter-spacing": "2px",
                                          "--framer-line-height": "90%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "BUY NOW",
                                      }),
                                    }),
                                    className: "framer-1axeh4f",
                                    fonts: ["GF;Kode Mono-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                            t(ye, {
                              style: {
                                display: "none",
                              },
                              href: "https://www.dextools.io/app/en/ether/pair-explorer/0xb36c443298dc695be4339bc57e0b3ae0c1ac91d8?t=1729118201981",
                              children: t(W, {
                                breakpoint: o,
                                overrides: {
                                  BJp3tRdKe: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                  imoZ0iwwr: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: f(617.7500000000002),
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                },
                                children: t(k, {
                 
                                  as: "a",
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: f(685.7500000000002),
                                    pixelHeight: 400,
                                    pixelWidth: 640,
                                    src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                    srcSet:
                                      "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                  },
                                  className: "framer-vs6v38 framer-lux5qc",
                                  "data-border": !0,
                                  children: t(v, {
                                    __fromCanvasComponent: !0,
                                    children: t(y, {
                                      children: t("p", {
                                        style: {
                                          
                                          "--font-selector":
                                            "R0Y7S29kZSBNb25vLTcwMA==",
                                          "--framer-font-family":
                                            '"Kode Mono", monospace',
                                          "--framer-font-size": "20px",
                                          "--framer-font-weight": "700",
                                          "--framer-letter-spacing": "2px",
                                          "--framer-line-height": "90%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "DEXTOOLS",
                                      }),
                                    }),
                                    className: "framer-ff7rxg",
                                    fonts: ["GF;Kode Mono-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                            t(W, {
                              breakpoint: o,
                              overrides: {
                                BJp3tRdKe: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 400,
                                    pixelWidth: 640,
                                    src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                    srcSet:
                                      "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                  },
                                },
                              },
                              children: t(k, {
                                style: {
                                  display: "none",
                                },
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: f(685.7500000000002),
                                  pixelHeight: 400,
                                  pixelWidth: 640,
                                  src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                  srcSet:
                                    "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                },
                                className: "framer-1oys1yc",
                                "data-border": !0,
                                children: t(v, {
                                  style: {
                                    display: "none",
                                  },
                                  __fromCanvasComponent: !0,
                                  children: t(y, {
                                    children: t("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7S29kZSBNb25vLTcwMA==",
                                        "--framer-font-family":
                                          '"Kode Mono", monospace',
                                        "--framer-font-size": "20px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "2px",
                                        "--framer-line-height": "90%",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "DEXSCREENER",
                                    }),
                                  }),
                                  style: {
                                    display: "none",
                                  },
                                  fonts: ["GF;Kode Mono-700"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            t(ye, {
                              href: "https://t.me/Magic7777Coin",
                              children: t(W, {
                                breakpoint: o,
                                overrides: {
                                  BJp3tRdKe: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                  imoZ0iwwr: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: f(753.7500000000002),
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                },
                                children: t(k, {
                                  as: "a",
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: f(685.7500000000002),
                                    pixelHeight: 400,
                                    pixelWidth: 640,
                                    src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                    srcSet:
                                      "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                  },
                                  className: "framer-1yu4ubh framer-lux5qc",
                                  "data-border": !0,
                                  children: t(v, {
                                    __fromCanvasComponent: !0,
                                    children: t(y, {
                                      children: t("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7S29kZSBNb25vLTcwMA==",
                                          "--framer-font-family":
                                            '"Kode Mono", monospace',
                                          "--framer-font-size": "20px",
                                          "--framer-font-weight": "700",
                                          "--framer-letter-spacing": "2px",
                                          "--framer-line-height": "90%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "TELEGRAM",
                                      }),
                                    }),
                                    className: "framer-e831hc",
                                    fonts: ["GF;Kode Mono-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                            t(ye, {
                              href: "https://x.com/Magic7777Coin",
                              openInNewTab: !0,
                              children: t(W, {
                                breakpoint: o,
                                overrides: {
                                  BJp3tRdKe: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                  imoZ0iwwr: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: f(821.7500000000002),
                                      pixelHeight: 400,
                                      pixelWidth: 640,
                                      src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                      srcSet:
                                        "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                    },
                                  },
                                },
                                children: t(k, {
                                  as: "a",
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: f(685.7500000000002),
                                    pixelHeight: 400,
                                    pixelWidth: 640,
                                    src: "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif",
                                    srcSet:
                                      "https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif?scale-down-to=512 512w,https://framerusercontent.com/images/erPMbMQtzwzfbZDCiHCMUyH0A0.gif 640w",
                                  },
                                  className: "framer-lrreyc framer-lux5qc",
                                  "data-border": !0,
                                  children: t(v, {
                                    __fromCanvasComponent: !0,
                                    children: t(y, {
                                      children: t("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7S29kZSBNb25vLTcwMA==",
                                          "--framer-font-family":
                                            '"Kode Mono", monospace',
                                          "--framer-font-size": "20px",
                                          "--framer-font-weight": "700",
                                          "--framer-letter-spacing": "2px",
                                          "--framer-line-height": "90%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "TWITTER",
                                      }),
                                    }),
                                    className: "framer-1fkn0oc",
                                    fonts: ["GF;Kode Mono-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    t(xe, {
                      children: t(we, {
                        className: "framer-z92dwf-container",
                        children: t(de, {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: "100%",
                          id: "z1uPUcBvk",
                          isMixedBorderRadius: !1,
                          layoutId: "z1uPUcBvk",
                          loop: !0,
                          muted: !0,
                          objectFit: "cover",
                          playing: !0,
                          posterEnabled: !1,
                          srcFile:
                            "https://framerusercontent.com/assets/Vhx9r8fqgTpkgjwUHIUOCkDA1xE.mp4",
                          srcType: "Upload",
                          srcUrl:
                            "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                          startTime: 0,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                t("div", {
                  background: { alt: "", fit: "fill" },
                  className: "framer-zvijug",
                  children: b("div", {
                    className: "framer-pxkjn3",
                    children: [
                      t(W, {
                        breakpoint: o,
                        overrides: {
                          BJp3tRdKe: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 93.5,
                              intrinsicWidth: 1061,
                              loading: f(1021.5),
                              pixelHeight: 768,
                              pixelWidth: 2500,
                              sizes: "567.3797px",
                              src: "https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=2048",
                              srcSet:
                                "https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=512 512w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png 2500w",
                            },
                          },
                          imoZ0iwwr: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 93.5,
                              intrinsicWidth: 1061,
                              loading: f(1541.5),
                              pixelHeight: 768,
                              pixelWidth: 2500,
                              sizes: "340px",
                              src: "https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=2048",
                              srcSet:
                                "https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=512 512w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png 2500w",
                            },
                          },
                        },
                        children: t(k, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 93.5,
                            intrinsicWidth: 1061,
                            loading: f(1021.5),
                            pixelHeight: 768,
                            pixelWidth: 2500,
                            sizes: "907.8075px",
                            src: "https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=2048",
                            srcSet:
                              "https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=512 512w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/WLKCjnpX1dOObmsAeDgXdsTRio.png 2500w",
                          },
                          className: "framer-1xe3lsk",
                          "data-framer-name": "Image",
                          name: "Image",
                        }),
                      }),
                      t(v, {
                        __fromCanvasComponent: !0,
                        children: t(y, {
                          children: t("p", {
                            style: {
                              "--font-selector": "R0Y7S29kZSBNb25vLTcwMA==",
                              "--framer-font-family": '"Kode Mono", monospace',
                              "--framer-font-size": "32px",
                              "--framer-font-weight": "700",
                              "--framer-letter-spacing": "-0.01em",
                              "--framer-line-height": "160%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: t(ye, {
                              href: "https://pump.fun/8fc9oYwVY2eww42SbAmNuJYvCdRtzfxsCv14xiDpump",
                              openInNewTab: !0,
                              smoothScroll: !1,
                              children: t("a", {
                                className: "framer-styles-preset-pcslo6",
                                "data-styles-preset": "wdlj3MR4a",
                                children:
                                  "8fc9oYwVY2eww42SbAmNuJYvCdRtzfxsCv14xiDpump",
                              }),
                            }),
                          }),
                        }),
                        className: "framer-147zwly",
                        fonts: ["GF;Kode Mono-700"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      t(v, {
                        __fromCanvasComponent: !0,
                        children: b(y, {
                          children: [
                            t("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Kode Mono", monospace',
                                "--framer-font-size": "24px",
                                "--framer-letter-spacing": "-0.01em",
                                "--framer-line-height": "160%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "The \u201CMagnificent 7\u201D stocks\u2014Apple, Microsoft, Alphabet, Amazon, Meta, Tesla, and Nvidia\u2014are the titans that have shaped the modern world, driving innovation, technology, and global dominance.",
                            }),
                            t("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Kode Mono", monospace',
                                "--framer-font-size": "20px",
                                "--framer-letter-spacing": "-0.01em",
                                "--framer-line-height": "160%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: t("br", {
                                className: "trailing-break",
                              }),
                            }),
                            t("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Kode Mono", monospace',
                                "--framer-font-size": "24px",
                                "--framer-letter-spacing": "-0.01em",
                                "--framer-line-height": "160%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "But now, a new force is rising to harness their power and ascend to even greater heights. The people have summoned 7777 powerful wizards, known as the Magnificent 7777, to channel the energy of these corporate behemoths and lead the charge into a new era of prosperity.",
                            }),
                          ],
                        }),
                        className: "framer-1lc7idg",
                        fonts: ["GF;Kode Mono-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                b("div", {
                  className: "framer-16og77a",
                  "data-border": !0,
                  children: [
                    t(xe, {
                      children: t(we, {
                        className: "framer-1slanfb-container",
                        children: t(ie, {
                          alignment: "center",
                          direction: "left",
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !0,
                            fadeInset: 0,
                            fadeWidth: 0,
                            overflow: !1,
                          },
                          gap: 0,
                          height: "100%",
                          hoverFactor: 1,
                          id: "K94tc9dJW",
                          layoutId: "K94tc9dJW",
                          padding: 0,
                          paddingBottom: 0,
                          paddingLeft: 0,
                          paddingPerSide: !1,
                          paddingRight: 0,
                          paddingTop: 0,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.6234px",
                                src: "https://framerusercontent.com/images/AmMUN3g9MPAqYz6bQRw6E8WzbwM.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/AmMUN3g9MPAqYz6bQRw6E8WzbwM.png?scale-down-to=1024 771w,https://framerusercontent.com/images/AmMUN3g9MPAqYz6bQRw6E8WzbwM.png 928w",
                              },
                              className: "framer-tnylp2",
                              "data-framer-name": "Pic1",
                              name: "Pic1",
                            }),
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.6234px",
                                src: "https://framerusercontent.com/images/ojRINYWQXudfcNzq5hGD8SxuoiU.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/ojRINYWQXudfcNzq5hGD8SxuoiU.png?scale-down-to=1024 771w,https://framerusercontent.com/images/ojRINYWQXudfcNzq5hGD8SxuoiU.png 928w",
                              },
                              className: "framer-16bdgez",
                              "data-framer-name": "Pic2",
                              name: "Pic2",
                            }),
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.5px",
                                src: "https://framerusercontent.com/images/pkuX1QAWRE7VZ8qKJHf4rKpNHNM.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/pkuX1QAWRE7VZ8qKJHf4rKpNHNM.png?scale-down-to=1024 771w,https://framerusercontent.com/images/pkuX1QAWRE7VZ8qKJHf4rKpNHNM.png 928w",
                              },
                              className: "framer-1t602vo",
                              "data-framer-name": "Pic3",
                              name: "Pic3",
                            }),
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.5px",
                                src: "https://framerusercontent.com/images/Zz6qEXiJi73EW4sg6siGFpWl5vQ.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/Zz6qEXiJi73EW4sg6siGFpWl5vQ.png?scale-down-to=1024 771w,https://framerusercontent.com/images/Zz6qEXiJi73EW4sg6siGFpWl5vQ.png 928w",
                              },
                              className: "framer-seu8ys",
                              "data-framer-name": "Pic4",
                              name: "Pic4",
                            }),
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.6234px",
                                src: "https://framerusercontent.com/images/q8lj2vSjAlCY8pbn16sEvvVzg.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/q8lj2vSjAlCY8pbn16sEvvVzg.png?scale-down-to=1024 771w,https://framerusercontent.com/images/q8lj2vSjAlCY8pbn16sEvvVzg.png 928w",
                              },
                              className: "framer-f495fw",
                              "data-framer-name": "Pic5",
                              name: "Pic5",
                            }),
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.6234px",
                                src: "https://framerusercontent.com/images/v0sGbKnBJxLcTRki6o0aW3Og.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/v0sGbKnBJxLcTRki6o0aW3Og.png?scale-down-to=1024 771w,https://framerusercontent.com/images/v0sGbKnBJxLcTRki6o0aW3Og.png 928w",
                              },
                              className: "framer-10kidyk",
                              "data-framer-name": "Pic6",
                              name: "Pic6",
                            }),
                            t(k, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 616,
                                intrinsicWidth: 464,
                                pixelHeight: 1232,
                                pixelWidth: 928,
                                sizes: "376.5px",
                                src: "https://framerusercontent.com/images/p1SmDkxgvrsp3sI4el5YKqRAe8.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/p1SmDkxgvrsp3sI4el5YKqRAe8.png?scale-down-to=1024 771w,https://framerusercontent.com/images/p1SmDkxgvrsp3sI4el5YKqRAe8.png 928w",
                              },
                              className: "framer-16g7n0s",
                              "data-framer-name": "Pic7",
                              name: "Pic7",
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    t(W, {
                      breakpoint: o,
                      overrides: {
                        BJp3tRdKe: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 200,
                            intrinsicWidth: 200,
                            loading: f(1951.5),
                            pixelHeight: 400,
                            pixelWidth: 400,
                            src: "https://framerusercontent.com/images/Uqemi040bnkmJpGSx1RhgrWr7E.gif",
                          },
                        },
                        imoZ0iwwr: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 200,
                            intrinsicWidth: 200,
                            loading: f(844.5),
                            pixelHeight: 400,
                            pixelWidth: 400,
                            src: "https://framerusercontent.com/images/Uqemi040bnkmJpGSx1RhgrWr7E.gif",
                          },
                        },
                      },
                      children: t(k, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 200,
                          intrinsicWidth: 200,
                          loading: f(1984.5),
                          pixelHeight: 400,
                          pixelWidth: 400,
                          src: "https://framerusercontent.com/images/Uqemi040bnkmJpGSx1RhgrWr7E.gif",
                        },
                        className: "framer-paih0j",
                        "data-framer-name": "Ezgif.com-animated-gif-maker",
                        name: "Ezgif.com-animated-gif-maker",
                      }),
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-1x2k5ma",
                  children: [
                    t(W, {
                      breakpoint: o,
                      overrides: {
                        BJp3tRdKe: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 315.5,
                            intrinsicWidth: 636,
                            loading: f(2451.5),
                            pixelHeight: 1280,
                            pixelWidth: 1280,
                            positionX: "center",
                            positionY: "top",
                            sizes: "308px",
                            src: "https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg 1280w",
                          },
                        },
                        imoZ0iwwr: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 315.5,
                            intrinsicWidth: 636,
                            loading: f(2531.5),
                            pixelHeight: 1280,
                            pixelWidth: 1280,
                            positionX: "center",
                            positionY: "top",
                            sizes: "min(min(95vw, 1400px), 1200px)",
                            src: "https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg 1280w",
                          },
                        },
                      },
                      children: t(k, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 315.5,
                          intrinsicWidth: 636,
                          loading: f(2581.5),
                          pixelHeight: 1280,
                          pixelWidth: 1280,
                          positionX: "center",
                          positionY: "top",
                          sizes: "418px",
                          src: "https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=1024",
                          srcSet:
                            "https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/ASBtQ1vjWc2uv1BTXFtBYtM8.jpg 1280w",
                        },
                        className: "framer-w5x8uz",
                        "data-border": !0,
                        "data-framer-name": "2024-10-16 11.01.53",
                        name: "2024-10-16 11.01.53",
                      }),
                    }),
                    t(W, {
                      breakpoint: o,
                      overrides: {
                        BJp3tRdKe: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 315.5,
                            intrinsicWidth: 636,
                            loading: f(2451.5),
                            pixelHeight: 640,
                            pixelWidth: 1280,
                            positionX: "center",
                            positionY: "bottom",
                            sizes: "max(min(95vw, 1400px) - 328px, 1px)",
                            src: "https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg 1280w",
                          },
                        },
                        imoZ0iwwr: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 315.5,
                            intrinsicWidth: 636,
                            loading: f(2924.5),
                            pixelHeight: 640,
                            pixelWidth: 1280,
                            positionX: "center",
                            positionY: "bottom",
                            sizes: "min(95vw, 1400px)",
                            src: "https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg 1280w",
                          },
                        },
                      },
                      children: t(k, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 315.5,
                          intrinsicWidth: 636,
                          loading: f(2581.5),
                          pixelHeight: 640,
                          pixelWidth: 1280,
                          positionX: "center",
                          positionY: "bottom",
                          sizes: "max(min(95vw, 1400px) - 438px, 1px)",
                          src: "https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=1024",
                          srcSet:
                            "https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/3DvLi7ahklr0rvMC915Au6xj1IA.jpg 1280w",
                        },
                        className: "framer-1tydo3p",
                        "data-border": !0,
                        "data-framer-name": "2024-10-16 11.01.53",
                        name: "2024-10-16 11.01.53",
                      }),
                    }),
                  ],
                }),
                t("div", {
                  background: { alt: "", fit: "fill" },
                  className: "framer-bawqy6",
                  children: t("div", {
                    className: "framer-1tgulp6",
                    children: t(v, {
                      __fromCanvasComponent: !0,
                      children: b(y, {
                        children: [
                          t("p", {
                            style: {
                              "--font-selector": "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                              "--framer-font-family": '"Kode Mono", monospace',
                              "--framer-font-size": "24px",
                              "--framer-letter-spacing": "-0.01em",
                              "--framer-line-height": "160%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children:
                              "The number 7777 represents your unstoppable drive, unwavering resilience, and ability to overcome any obstacle. It's a symbol of wisdom, motivation, and the courage to transform challenges into triumphs. These wizards don\u2019t battle against the future\u2014they build it.",
                          }),
                          t("p", {
                            style: {
                              "--font-selector": "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                              "--framer-font-family": '"Kode Mono", monospace',
                              "--framer-font-size": "20px",
                              "--framer-letter-spacing": "-0.01em",
                              "--framer-line-height": "160%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: t("br", { className: "trailing-break" }),
                          }),
                          t("p", {
                            style: {
                              "--font-selector": "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                              "--framer-font-family": '"Kode Mono", monospace',
                              "--framer-font-size": "24px",
                              "--framer-letter-spacing": "-0.01em",
                              "--framer-line-height": "160%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children:
                              "By harnessing the power of innovation, technology, and magic, the Magnificent 7777 wizards will send the Magic7777 memecoin soaring to the stratosphere. With each spell cast and every strategic move, the wizards aim for one goal\u2014taking the Magic7777 coin to billions.",
                          }),
                        ],
                      }),
                      className: "framer-1wy0ry",
                      fonts: ["GF;Kode Mono-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                }),
                b("div", {
                  className: "framer-1gq301w",
                  children: [
                    b("div", {
                      className: "framer-le3e2c",
                      children: [
                        t(W, {
                          breakpoint: o,
                          overrides: {
                            BJp3tRdKe: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 315.5,
                                intrinsicWidth: 636,
                                loading: f(3535.5),
                                pixelHeight: 200,
                                pixelWidth: 200,
                                positionX: "center",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/uVQecqQzkHPXJLxGanWC315f4.gif",
                              },
                            },
                            imoZ0iwwr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 315.5,
                                intrinsicWidth: 636,
                                loading: f(3931.5),
                                pixelHeight: 200,
                                pixelWidth: 200,
                                positionX: "center",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/uVQecqQzkHPXJLxGanWC315f4.gif",
                              },
                            },
                          },
                          children: t(k, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 315.5,
                              intrinsicWidth: 636,
                              loading: f(3765.5),
                              pixelHeight: 200,
                              pixelWidth: 200,
                              positionX: "center",
                              positionY: "top",
                              src: "https://framerusercontent.com/images/uVQecqQzkHPXJLxGanWC315f4.gif",
                            },
                            className: "framer-3xb121",
                            "data-border": !0,
                            "data-framer-name": "2024-10-16 11.01.53",
                            name: "2024-10-16 11.01.53",
                            children: t(xe, {
                              children: t(we, {
                                className: "framer-1jyy81l-container",
                                children: t(de, {
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: "100%",
                                  id: "qMo_RdtLA",
                                  isMixedBorderRadius: !1,
                                  layoutId: "qMo_RdtLA",
                                  loop: !0,
                                  muted: !0,
                                  objectFit: "cover",
                                  playing: !0,
                                  posterEnabled: !1,
                                  srcFile:
                                    "https://framerusercontent.com/assets/8nEexopPXTGdIrjaVyLwj2yHY.mp4",
                                  srcType: "Upload",
                                  srcUrl:
                                    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                  startTime: 0,
                                  style: { height: "100%", width: "100%" },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                        t(W, {
                          breakpoint: o,
                          overrides: {
                            BJp3tRdKe: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 640,
                                intrinsicWidth: 544,
                                loading: f(3535.5),
                                pixelHeight: 1280,
                                pixelWidth: 1088,
                                sizes: "241px",
                                src: "https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg?scale-down-to=1024 870w,https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg 1088w",
                              },
                            },
                            imoZ0iwwr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 640,
                                intrinsicWidth: 544,
                                loading: f(4162.5),
                                pixelHeight: 1280,
                                pixelWidth: 1088,
                                sizes: "min(min(95vw, 1400px), 1200px)",
                                src: "https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg?scale-down-to=1024 870w,https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg 1088w",
                              },
                            },
                          },
                          children: t(k, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 640,
                              intrinsicWidth: 544,
                              loading: f(3765.5),
                              pixelHeight: 1280,
                              pixelWidth: 1088,
                              sizes: "340px",
                              src: "https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg?scale-down-to=1024",
                              srcSet:
                                "https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg?scale-down-to=1024 870w,https://framerusercontent.com/images/m4xNzlKtuTT9SM8w235sgE7rZEk.jpg 1088w",
                            },
                            className: "framer-un4cer",
                            "data-border": !0,
                            "data-framer-name": "2024-10-16 11.01.46",
                            name: "2024-10-16 11.01.46",
                          }),
                        }),
                      ],
                    }),
                    b("div", {
                      className: "framer-130r96",
                      "data-border": !0,
                      children: [
                        b("div", {
                          className: "framer-1313zqh",
                          children: [
                            t(W, {
                              breakpoint: o,
                              overrides: {
                                BJp3tRdKe: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 90.5,
                                    intrinsicWidth: 781.5,
                                    loading: f(3754.5),
                                    pixelHeight: 181,
                                    pixelWidth: 1563,
                                    sizes: "690.8287px",
                                    src: "https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=1024",
                                    srcSet:
                                      "https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=512 512w,https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png 1563w",
                                  },
                                },
                                imoZ0iwwr: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 90.5,
                                    intrinsicWidth: 781.5,
                                    loading: f(4268.5),
                                    pixelHeight: 181,
                                    pixelWidth: 1563,
                                    sizes: "276px",
                                    src: "https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=1024",
                                    srcSet:
                                      "https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=512 512w,https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png 1563w",
                                  },
                                },
                              },
                              children: t(k, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 90.5,
                                  intrinsicWidth: 781.5,
                                  loading: f(4084.5),
                                  pixelHeight: 181,
                                  pixelWidth: 1563,
                                  sizes: "690.8287px",
                                  src: "https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=512 512w,https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0si5AuzWz7x6V0DIrYQIgLtA14.png 1563w",
                                },
                                className: "framer-hgiruz",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                            t(v, {
                              __fromCanvasComponent: !0,
                              children: t(y, {
                                children: t("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Kode Mono", monospace',
                                    "--framer-font-size": "24px",
                                    "--framer-letter-spacing": "-0.01em",
                                    "--framer-line-height": "160%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "This is the journey to greatness. Together, we\u2019re not just dreaming of billions\u2014we\u2019re casting the spell to make it happen.",
                                }),
                              }),
                              className: "framer-19hiwfs",
                              fonts: ["GF;Kode Mono-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            b("div", {
                              className: "framer-d9iknv",
                              children: [
                                b("div", {
                                  className: "framer-k0jkfe",
                                  children: [
                                    t(v, {
                                      __fromCanvasComponent: !0,
                                      children: t(y, {
                                        children: t("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Kode Mono", monospace',
                                            "--framer-font-size": "30px",
                                            "--framer-letter-spacing":
                                              "-0.01em",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: t("strong", {
                                            children: "1,000,000,000",
                                          }),
                                        }),
                                      }),
                                      className: "framer-ejpfy7",
                                      fonts: [
                                        "GF;Kode Mono-regular",
                                        "GF;Kode Mono-700",
                                      ],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    t(v, {
                                      __fromCanvasComponent: !0,
                                      children: t(y, {
                                        children: t("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S29kZSBNb25vLTYwMA==",
                                            "--framer-font-family":
                                              '"Kode Mono", monospace',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "600",
                                            "--framer-letter-spacing": "2px",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "SUPPLY",
                                        }),
                                      }),
                                      className: "framer-1oaxu6a",
                                      fonts: ["GF;Kode Mono-600"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                b("div", {
                                  className: "framer-1psjqn",
                                  children: [
                                    t(v, {
                                      __fromCanvasComponent: !0,
                                      children: t(y, {
                                        children: t("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Kode Mono", monospace',
                                            "--framer-font-size": "30px",
                                            "--framer-letter-spacing":
                                              "-0.01em",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: t("strong", {
                                            children: "Locked",
                                          }),
                                        }),
                                      }),
                                      className: "framer-uovy57",
                                      fonts: [
                                        "GF;Kode Mono-regular",
                                        "GF;Kode Mono-700",
                                      ],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    t(v, {
                                      __fromCanvasComponent: !0,
                                      children: t(y, {
                                        children: t("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S29kZSBNb25vLTYwMA==",
                                            "--framer-font-family":
                                              '"Kode Mono", monospace',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "600",
                                            "--framer-letter-spacing": "2px",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "LIQUIDITY",
                                        }),
                                      }),
                                      className: "framer-1g7v23r",
                                      fonts: ["GF;Kode Mono-600"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                b("div", {
                                  className: "framer-6885is",
                                  children: [
                                    t(v, {
                                      __fromCanvasComponent: !0,
                                      children: t(y, {
                                        children: t("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S29kZSBNb25vLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Kode Mono", monospace',
                                            "--framer-font-size": "30px",
                                            "--framer-letter-spacing":
                                              "-0.01em",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: t("strong", {
                                            children: "0/0",
                                          }),
                                        }),
                                      }),
                                      className: "framer-tuofwk",
                                      fonts: [
                                        "GF;Kode Mono-regular",
                                        "GF;Kode Mono-700",
                                      ],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    t(v, {
                                      __fromCanvasComponent: !0,
                                      children: t(y, {
                                        children: t("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S29kZSBNb25vLTYwMA==",
                                            "--framer-font-family":
                                              '"Kode Mono", monospace',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "600",
                                            "--framer-letter-spacing": "2px",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "TAX",
                                        }),
                                      }),
                                      className: "framer-p7vlxq",
                                      fonts: ["GF;Kode Mono-600"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t(W, {
                          breakpoint: o,
                          overrides: {
                            BJp3tRdKe: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 350,
                                intrinsicWidth: 512,
                                loading: f(3845.5),
                                pixelHeight: 700,
                                pixelWidth: 1024,
                                sizes: "min(95vw, 1400px)",
                                src: "https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif?scale-down-to=512 512w,https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif 1024w",
                              },
                            },
                            imoZ0iwwr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 350,
                                intrinsicWidth: 512,
                                loading: f(4825.5),
                                pixelHeight: 700,
                                pixelWidth: 1024,
                                sizes: "min(95vw, 1400px)",
                                src: "https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif?scale-down-to=512 512w,https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif 1024w",
                              },
                            },
                          },
                          children: t(k, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 350,
                              intrinsicWidth: 512,
                              loading: f(4175.5),
                              pixelHeight: 700,
                              pixelWidth: 1024,
                              sizes: "min(95vw, 1400px)",
                              src: "https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif?scale-down-to=512 512w,https://framerusercontent.com/images/nt5TmqF8g48G8ilTypviyGmhZbQ.gif 1024w",
                            },
                            className: "framer-ozq5n1",
                            "data-framer-name":
                              "C7762ba98a4e45b84b479b00778ae411",
                            name: "C7762ba98a4e45b84b479b00778ae411",
                          }),
                        }),
                      ],
                    }),
                    t("div", {
                      className: "framer-b7cwte",
                      "data-border": !0,
                      children: t(W, {
                        breakpoint: o,
                        overrides: {
                          BJp3tRdKe: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 350,
                              intrinsicWidth: 512,
                              loading: f(4355.5),
                              pixelHeight: 250,
                              pixelWidth: 600,
                              sizes: "min(95vw, 1400px)",
                              src: "https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif?scale-down-to=512 512w,https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif 600w",
                            },
                          },
                          imoZ0iwwr: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 350,
                              intrinsicWidth: 512,
                              loading: f(5335.5),
                              pixelHeight: 250,
                              pixelWidth: 600,
                              sizes: "min(90.3718vw, 1400px)",
                              src: "https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif?scale-down-to=512 512w,https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif 600w",
                            },
                          },
                        },
                        children: t(k, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 350,
                            intrinsicWidth: 512,
                            loading: f(4685.5),
                            pixelHeight: 250,
                            pixelWidth: 600,
                            sizes: "min(95vw, 1400px)",
                            src: "https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif?scale-down-to=512 512w,https://framerusercontent.com/images/rUfaoi2RKI4CiIVAOsn3PJ0Nxk4.gif 600w",
                          },
                          className: "framer-i5oidq",
                          "data-framer-name":
                            "C7762ba98a4e45b84b479b00778ae411",
                          name: "C7762ba98a4e45b84b479b00778ae411",
                        }),
                      }),
                    }),
                    t(W, {
                      breakpoint: o,
                      overrides: {
                        BJp3tRdKe: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 616,
                            intrinsicWidth: 464,
                            loading: f(4196),
                            pixelHeight: 1232,
                            pixelWidth: 928,
                            sizes: "267px",
                            src: "https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png?scale-down-to=1024 771w,https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png 928w",
                          },
                          transformTemplate: void 0,
                        },
                        imoZ0iwwr: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 616,
                            intrinsicWidth: 464,
                            loading: f(4391),
                            pixelHeight: 1232,
                            pixelWidth: 928,
                            sizes: "233px",
                            src: "https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png?scale-down-to=1024 771w,https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png 928w",
                          },
                          transformTemplate: void 0,
                        },
                      },
                      children: t(k, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 616,
                          intrinsicWidth: 464,
                          loading: f(4261.5),
                          pixelHeight: 1232,
                          pixelWidth: 928,
                          sizes: "383px",
                          src: "https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png?scale-down-to=1024",
                          srcSet:
                            "https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png?scale-down-to=1024 771w,https://framerusercontent.com/images/E1NEntvsnv6bubybcNaOyS30E4.png 928w",
                        },
                        className: "framer-o27e3",
                        "data-framer-name": "Applewitch2trans",
                        name: "Applewitch2trans",
                        transformTemplate: nr,
                      }),
                    }),
                    t(W, {
                      breakpoint: o,
                      overrides: {
                        BJp3tRdKe: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 616,
                            intrinsicWidth: 464,
                            loading: f(3773),
                            pixelHeight: 1232,
                            pixelWidth: 928,
                            sizes: "258px",
                            src: "https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png?scale-down-to=1024 771w,https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png 928w",
                          },
                          transformTemplate: void 0,
                        },
                        imoZ0iwwr: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 616,
                            intrinsicWidth: 464,
                            loading: f(4990),
                            pixelHeight: 1232,
                            pixelWidth: 928,
                            sizes: "237px",
                            src: "https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png?scale-down-to=1024 771w,https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png 928w",
                          },
                          transformTemplate: void 0,
                        },
                      },
                      children: t(k, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 616,
                          intrinsicWidth: 464,
                          loading: f(4261.863387978143),
                          pixelHeight: 1232,
                          pixelWidth: 928,
                          sizes: "338px",
                          src: "https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png?scale-down-to=1024",
                          srcSet:
                            "https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png?scale-down-to=1024 771w,https://framerusercontent.com/images/IhIK3dGWGkEnzp3ScPWeZKOL5lc.png 928w",
                        },
                        className: "framer-zui7is",
                        "data-framer-name": "Teslawtich2trans",
                        name: "Teslawtich2trans",
                        transformTemplate: nr,
                      }),
                    }),
                  ],
                }),
                t(xe, {
                  children: t(we, {
                    className: "framer-c2jyqw-container",
                    children: t(ie, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 0,
                        overflow: !1,
                      },
                      gap: 20,
                      height: "100%",
                      hoverFactor: 1,
                      id: "LN3EadyRG",
                      layoutId: "LN3EadyRG",
                      padding: 0,
                      paddingBottom: 0,
                      paddingLeft: 0,
                      paddingPerSide: !1,
                      paddingRight: 0,
                      paddingTop: 0,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        t(k, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 200,
                            intrinsicWidth: 200,
                            pixelHeight: 400,
                            pixelWidth: 400,
                            src: "https://framerusercontent.com/images/Uqemi040bnkmJpGSx1RhgrWr7E.gif",
                          },
                          className: "framer-6aqz68",
                          "data-framer-name": "Coin",
                          name: "Coin",
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            t("div", { className: et(rr, ...A), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  wn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-1hhCh.framer-lux5qc, .framer-1hhCh .framer-lux5qc { display: block; }",
    ".framer-1hhCh.framer-72rtr7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-1hhCh .framer-ky41vh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-1hhCh .framer-gz71kj-container { flex: none; height: 62px; position: relative; width: 100%; z-index: 1; }",
    ".framer-1hhCh .framer-172lqqu, .framer-1hhCh .framer-e58rdj, .framer-1hhCh .framer-itx9wv, .framer-1hhCh .framer-cl62bj, .framer-1hhCh .framer-15u69bu, .framer-1hhCh .framer-1tefj8 { align-content: center; align-items: center; background-color: #141414; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: min-content; }",
    ".framer-1hhCh .framer-1jh80tl, .framer-1hhCh .framer-sopud6, .framer-1hhCh .framer-18spzth, .framer-1hhCh .framer-ygqrrm, .framer-1hhCh .framer-1agizi5, .framer-1hhCh .framer-1xpx8pi, .framer-1hhCh .framer-12m5bmq, .framer-1hhCh .framer-18yhnl9, .framer-1hhCh .framer-1fplu0r, .framer-1hhCh .framer-xf18fu, .framer-1hhCh .framer-85lysa, .framer-1hhCh .framer-v1qjf3, .framer-1hhCh .framer-14inzbe, .framer-1hhCh .framer-1nh1m0s, .framer-1hhCh .framer-1axeh4f, .framer-1hhCh .framer-ff7rxg, .framer-1hhCh .framer-1v3u8x3, .framer-1hhCh .framer-e831hc, .framer-1hhCh .framer-1fkn0oc { --framer-paragraph-spacing: 0px; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }",
    ".framer-1hhCh .framer-h3ds52, .framer-1hhCh .framer-1rx6m1u, .framer-1hhCh .framer-1muxj77, .framer-1hhCh .framer-3wkdf9, .framer-1hhCh .framer-1gycfyr, .framer-1hhCh .framer-1vti0m1, .framer-1hhCh .framer-5289hl { flex: none; height: 17px; position: relative; width: 18px; }",
    ".framer-1hhCh .framer-2benss { align-content: center; align-items: center; background-color: #141414; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 62px; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: min-content; }",
    ".framer-1hhCh .framer-58olak { --border-bottom-width: 7px; --border-color: #ff1cfb; --border-left-width: 7px; --border-right-width: 7px; --border-style: solid; --border-top-width: 7px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; max-width: 1400px; overflow: hidden; padding: 0px; position: relative; width: 95%; }",
    ".framer-1hhCh .framer-fzgzr4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); z-index: 1; }",
    ".framer-1hhCh .framer-6e7v9b { aspect-ratio: 1.3279320987654322 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 377px); overflow: visible; position: relative; width: 500px; z-index: 1; }",
    ".framer-1hhCh .framer-1mef9l1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1080px; }",
    ".framer-1hhCh .framer-14brblw, .framer-1hhCh .framer-vs6v38, .framer-1hhCh .framer-1yu4ubh, .framer-1hhCh .framer-lrreyc { --border-bottom-width: 5px; --border-color: #fe3fff; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-1hhCh .framer-1oys1yc { --border-bottom-width: 5px; --border-color: #fe3fff; display: none; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: min-content; }",
    ".framer-1hhCh .framer-z92dwf-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-1hhCh .framer-zvijug, .framer-1hhCh .framer-bawqy6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1400px; overflow: hidden; padding: 100px; position: relative; width: 100%; }",
    ".framer-1hhCh .framer-pxkjn3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 90%; }",
    ".framer-1hhCh .framer-1xe3lsk { aspect-ratio: 11.3475935828877 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: visible; position: relative; width: 908px; }",
    ".framer-1hhCh .framer-147zwly, .framer-1hhCh .framer-1lc7idg, .framer-1hhCh .framer-1wy0ry, .framer-1hhCh .framer-19hiwfs, .framer-1hhCh .framer-ejpfy7, .framer-1hhCh .framer-1oaxu6a, .framer-1hhCh .framer-uovy57, .framer-1hhCh .framer-1g7v23r, .framer-1hhCh .framer-tuofwk, .framer-1hhCh .framer-p7vlxq { --framer-paragraph-spacing: 0px; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-1hhCh .framer-16og77a { --border-bottom-width: 5px; --border-color: #ff1bfb; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 500px; justify-content: center; max-width: 1400px; overflow: visible; padding: 0px; position: relative; width: 95%; }",
    ".framer-1hhCh .framer-1slanfb-container { flex: none; height: 500px; position: relative; width: 100%; z-index: 0; }",
    ".framer-1hhCh .framer-tnylp2, .framer-1hhCh .framer-16bdgez, .framer-1hhCh .framer-1t602vo, .framer-1hhCh .framer-seu8ys, .framer-1hhCh .framer-f495fw, .framer-1hhCh .framer-10kidyk, .framer-1hhCh .framer-16g7n0s { aspect-ratio: 0.7532467532467533 / 1; height: var(--framer-aspect-ratio-supported, 500px); overflow: visible; position: relative; width: 377px; }",
    ".framer-1hhCh .framer-paih0j { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 314px); overflow: visible; position: absolute; right: -137px; top: -77px; width: 314px; z-index: 4; }",
    ".framer-1hhCh .framer-1x2k5ma { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 400px; justify-content: center; max-width: 1400px; overflow: hidden; padding: 0px; position: relative; width: 95%; }",
    ".framer-1hhCh .framer-w5x8uz { --border-bottom-width: 5px; --border-color: #ff1bfb; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; flex: none; height: 100%; max-width: 1200px; overflow: visible; position: relative; width: 418px; }",
    ".framer-1hhCh .framer-1tydo3p { --border-bottom-width: 5px; --border-color: #ff1bfb; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }",
    ".framer-1hhCh .framer-1tgulp6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 90%; }",
    ".framer-1hhCh .framer-1gq301w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 95%; }",
    ".framer-1hhCh .framer-le3e2c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 400px; justify-content: center; max-width: 1400px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-1hhCh .framer-3xb121 { --border-bottom-width: 5px; --border-color: #ff1bfb; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; flex: 1 0 0px; height: 100%; max-width: 1200px; overflow: visible; position: relative; width: 1px; }",
    ".framer-1hhCh .framer-1jyy81l-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }",
    ".framer-1hhCh .framer-un4cer { --border-bottom-width: 5px; --border-color: #ff1bfb; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; flex: none; height: 100%; max-width: 1200px; overflow: visible; position: relative; width: 340px; }",
    ".framer-1hhCh .framer-130r96, .framer-1hhCh .framer-b7cwte { --border-bottom-width: 7px; --border-color: #ff1cfb; --border-left-width: 7px; --border-right-width: 7px; --border-style: solid; --border-top-width: 7px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 500px; justify-content: center; max-width: 1400px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-1hhCh .framer-1313zqh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 59%; z-index: 5; }",
    ".framer-1hhCh .framer-hgiruz { aspect-ratio: 8.6353591160221 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: visible; position: relative; width: 691px; }",
    ".framer-1hhCh .framer-d9iknv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-1hhCh .framer-k0jkfe, .framer-1hhCh .framer-1psjqn, .framer-1hhCh .framer-6885is { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-1hhCh .framer-ozq5n1 { bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.3; overflow: visible; position: absolute; width: 100%; z-index: 0; }",
    ".framer-1hhCh .framer-i5oidq { bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; width: 100%; z-index: 0; }",
    ".framer-1hhCh .framer-o27e3 { aspect-ratio: 0.7532467532467533 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 508px); left: -171px; overflow: visible; position: absolute; top: 53%; transform: translateY(-50%); width: 383px; z-index: 1; }",
    ".framer-1hhCh .framer-zui7is { aspect-ratio: 0.7532467532467533 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 449px); overflow: visible; position: absolute; right: -100px; top: 51%; transform: translateY(-50%); width: 338px; z-index: 1; }",
    ".framer-1hhCh .framer-c2jyqw-container { flex: none; height: 200px; position: relative; width: 100%; z-index: 1; }",
    ".framer-1hhCh .framer-6aqz68 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 200px); overflow: visible; position: relative; width: 200px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-1hhCh.framer-72rtr7, .framer-1hhCh .framer-ky41vh, .framer-1hhCh .framer-172lqqu, .framer-1hhCh .framer-e58rdj, .framer-1hhCh .framer-itx9wv, .framer-1hhCh .framer-cl62bj, .framer-1hhCh .framer-2benss, .framer-1hhCh .framer-15u69bu, .framer-1hhCh .framer-1tefj8, .framer-1hhCh .framer-58olak, .framer-1hhCh .framer-fzgzr4, .framer-1hhCh .framer-1mef9l1, .framer-1hhCh .framer-14brblw, .framer-1hhCh .framer-vs6v38, .framer-1hhCh .framer-1oys1yc, .framer-1hhCh .framer-1yu4ubh, .framer-1hhCh .framer-lrreyc, .framer-1hhCh .framer-zvijug, .framer-1hhCh .framer-pxkjn3, .framer-1hhCh .framer-16og77a, .framer-1hhCh .framer-1x2k5ma, .framer-1hhCh .framer-bawqy6, .framer-1hhCh .framer-1tgulp6, .framer-1hhCh .framer-1gq301w, .framer-1hhCh .framer-le3e2c, .framer-1hhCh .framer-130r96, .framer-1hhCh .framer-1313zqh, .framer-1hhCh .framer-d9iknv, .framer-1hhCh .framer-k0jkfe, .framer-1hhCh .framer-1psjqn, .framer-1hhCh .framer-6885is, .framer-1hhCh .framer-b7cwte { gap: 0px; } .framer-1hhCh.framer-72rtr7 > *, .framer-1hhCh .framer-pxkjn3 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1hhCh.framer-72rtr7 > :first-child, .framer-1hhCh .framer-ky41vh > :first-child, .framer-1hhCh .framer-58olak > :first-child, .framer-1hhCh .framer-fzgzr4 > :first-child, .framer-1hhCh .framer-zvijug > :first-child, .framer-1hhCh .framer-pxkjn3 > :first-child, .framer-1hhCh .framer-bawqy6 > :first-child, .framer-1hhCh .framer-1tgulp6 > :first-child, .framer-1hhCh .framer-1gq301w > :first-child, .framer-1hhCh .framer-130r96 > :first-child, .framer-1hhCh .framer-1313zqh > :first-child, .framer-1hhCh .framer-k0jkfe > :first-child, .framer-1hhCh .framer-1psjqn > :first-child, .framer-1hhCh .framer-6885is > :first-child, .framer-1hhCh .framer-b7cwte > :first-child { margin-top: 0px; } .framer-1hhCh.framer-72rtr7 > :last-child, .framer-1hhCh .framer-ky41vh > :last-child, .framer-1hhCh .framer-58olak > :last-child, .framer-1hhCh .framer-fzgzr4 > :last-child, .framer-1hhCh .framer-zvijug > :last-child, .framer-1hhCh .framer-pxkjn3 > :last-child, .framer-1hhCh .framer-bawqy6 > :last-child, .framer-1hhCh .framer-1tgulp6 > :last-child, .framer-1hhCh .framer-1gq301w > :last-child, .framer-1hhCh .framer-130r96 > :last-child, .framer-1hhCh .framer-1313zqh > :last-child, .framer-1hhCh .framer-k0jkfe > :last-child, .framer-1hhCh .framer-1psjqn > :last-child, .framer-1hhCh .framer-6885is > :last-child, .framer-1hhCh .framer-b7cwte > :last-child { margin-bottom: 0px; } .framer-1hhCh .framer-ky41vh > *, .framer-1hhCh .framer-58olak > *, .framer-1hhCh .framer-1tgulp6 > *, .framer-1hhCh .framer-1gq301w > *, .framer-1hhCh .framer-130r96 > *, .framer-1hhCh .framer-k0jkfe > *, .framer-1hhCh .framer-1psjqn > *, .framer-1hhCh .framer-6885is > *, .framer-1hhCh .framer-b7cwte > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-1hhCh .framer-172lqqu > *, .framer-1hhCh .framer-e58rdj > *, .framer-1hhCh .framer-itx9wv > *, .framer-1hhCh .framer-cl62bj > *, .framer-1hhCh .framer-2benss > *, .framer-1hhCh .framer-15u69bu > *, .framer-1hhCh .framer-1tefj8 > *, .framer-1hhCh .framer-1mef9l1 > *, .framer-1hhCh .framer-14brblw > *, .framer-1hhCh .framer-vs6v38 > *, .framer-1hhCh .framer-1oys1yc > *, .framer-1hhCh .framer-1yu4ubh > *, .framer-1hhCh .framer-lrreyc > *, .framer-1hhCh .framer-d9iknv > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1hhCh .framer-172lqqu > :first-child, .framer-1hhCh .framer-e58rdj > :first-child, .framer-1hhCh .framer-itx9wv > :first-child, .framer-1hhCh .framer-cl62bj > :first-child, .framer-1hhCh .framer-2benss > :first-child, .framer-1hhCh .framer-15u69bu > :first-child, .framer-1hhCh .framer-1tefj8 > :first-child, .framer-1hhCh .framer-1mef9l1 > :first-child, .framer-1hhCh .framer-14brblw > :first-child, .framer-1hhCh .framer-vs6v38 > :first-child, .framer-1hhCh .framer-1oys1yc > :first-child, .framer-1hhCh .framer-1yu4ubh > :first-child, .framer-1hhCh .framer-lrreyc > :first-child, .framer-1hhCh .framer-16og77a > :first-child, .framer-1hhCh .framer-1x2k5ma > :first-child, .framer-1hhCh .framer-le3e2c > :first-child, .framer-1hhCh .framer-d9iknv > :first-child { margin-left: 0px; } .framer-1hhCh .framer-172lqqu > :last-child, .framer-1hhCh .framer-e58rdj > :last-child, .framer-1hhCh .framer-itx9wv > :last-child, .framer-1hhCh .framer-cl62bj > :last-child, .framer-1hhCh .framer-2benss > :last-child, .framer-1hhCh .framer-15u69bu > :last-child, .framer-1hhCh .framer-1tefj8 > :last-child, .framer-1hhCh .framer-1mef9l1 > :last-child, .framer-1hhCh .framer-14brblw > :last-child, .framer-1hhCh .framer-vs6v38 > :last-child, .framer-1hhCh .framer-1oys1yc > :last-child, .framer-1hhCh .framer-1yu4ubh > :last-child, .framer-1hhCh .framer-lrreyc > :last-child, .framer-1hhCh .framer-16og77a > :last-child, .framer-1hhCh .framer-1x2k5ma > :last-child, .framer-1hhCh .framer-le3e2c > :last-child, .framer-1hhCh .framer-d9iknv > :last-child { margin-right: 0px; } .framer-1hhCh .framer-fzgzr4 > *, .framer-1hhCh .framer-1313zqh > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-1hhCh .framer-zvijug > *, .framer-1hhCh .framer-bawqy6 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-1hhCh .framer-16og77a > *, .framer-1hhCh .framer-1x2k5ma > *, .framer-1hhCh .framer-le3e2c > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
    "@media (min-width: 810px) and (max-width: 1199px) { .framer-1hhCh.framer-72rtr7 { width: 810px; } .framer-1hhCh .framer-1mef9l1 { flex-wrap: wrap; width: 611px; } .framer-1hhCh .framer-1xe3lsk { height: var(--framer-aspect-ratio-supported, 50px); width: 567px; } .framer-1hhCh .framer-16og77a { height: 400px; } .framer-1hhCh .framer-1slanfb-container { height: 100%; } .framer-1hhCh .framer-paih0j { height: var(--framer-aspect-ratio-supported, 237px); left: 531px; right: unset; top: -80px; width: 237px; } .framer-1hhCh .framer-1x2k5ma, .framer-1hhCh .framer-le3e2c { height: 300px; } .framer-1hhCh .framer-w5x8uz { width: 308px; } .framer-1hhCh .framer-un4cer { width: 241px; } .framer-1hhCh .framer-1313zqh { width: 80%; } .framer-1hhCh .framer-o27e3 { bottom: 305px; height: var(--framer-aspect-ratio-supported, 355px); left: -135px; top: unset; transform: unset; width: 267px; } .framer-1hhCh .framer-zui7is { height: var(--framer-aspect-ratio-supported, 343px); right: -60px; top: 238px; transform: unset; width: 258px; }}",
    "@media (max-width: 809px) { .framer-1hhCh.framer-72rtr7 { width: 390px; } .framer-1hhCh .framer-ky41vh { order: 0; } .framer-1hhCh .framer-58olak { order: 1; padding: 104px 0px 104px 0px; } .framer-1hhCh .framer-6e7v9b { height: var(--framer-aspect-ratio-supported, 151px); width: 90%; } .framer-1hhCh .framer-1mef9l1 { flex-direction: column; width: 220px; } .framer-1hhCh .framer-z92dwf-container { flex: none; height: 800px; width: 100%; } .framer-1hhCh .framer-zvijug { order: 3; padding: 100px 0px 100px 0px; width: 95%; } .framer-1hhCh .framer-1xe3lsk { height: var(--framer-aspect-ratio-supported, 30px); width: 340px; } .framer-1hhCh .framer-16og77a { flex-direction: column; height: min-content; order: 2; } .framer-1hhCh .framer-1x2k5ma { flex-direction: column; height: min-content; order: 4; } .framer-1hhCh .framer-w5x8uz { height: 373px; width: 100%; } .framer-1hhCh .framer-1tydo3p { flex: none; height: 235px; width: 100%; } .framer-1hhCh .framer-bawqy6 { order: 5; padding: 100px 0px 238px 0px; width: 95%; } .framer-1hhCh .framer-1gq301w { height: 1268px; order: 6; } .framer-1hhCh .framer-le3e2c { flex-direction: column; height: min-content; } .framer-1hhCh .framer-3xb121 { flex: none; height: 211px; order: 0; width: 100%; } .framer-1hhCh .framer-un4cer { height: 353px; order: 1; width: 100%; } .framer-1hhCh .framer-130r96 { height: 800px; } .framer-1hhCh .framer-1313zqh { width: 90%; } .framer-1hhCh .framer-hgiruz { height: var(--framer-aspect-ratio-supported, 32px); width: 276px; } .framer-1hhCh .framer-d9iknv { flex-direction: column; gap: 30px; } .framer-1hhCh .framer-k0jkfe, .framer-1hhCh .framer-1psjqn, .framer-1hhCh .framer-6885is { flex: none; width: 100%; } .framer-1hhCh .framer-ozq5n1 { height: 500px; } .framer-1hhCh .framer-b7cwte { height: 164px; width: 95%; } .framer-1hhCh .framer-o27e3 { height: var(--framer-aspect-ratio-supported, 309px); left: -22px; top: 310px; transform: unset; width: 233px; } .framer-1hhCh .framer-zui7is { bottom: 46px; height: var(--framer-aspect-ratio-supported, 314px); right: -118px; top: unset; transform: unset; width: 237px; } .framer-1hhCh .framer-c2jyqw-container { order: 7; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-1hhCh .framer-1mef9l1, .framer-1hhCh .framer-16og77a, .framer-1hhCh .framer-1x2k5ma, .framer-1hhCh .framer-le3e2c, .framer-1hhCh .framer-d9iknv { gap: 0px; } .framer-1hhCh .framer-1mef9l1 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-1hhCh .framer-1mef9l1 > :first-child, .framer-1hhCh .framer-16og77a > :first-child, .framer-1hhCh .framer-1x2k5ma > :first-child, .framer-1hhCh .framer-le3e2c > :first-child, .framer-1hhCh .framer-d9iknv > :first-child { margin-top: 0px; } .framer-1hhCh .framer-1mef9l1 > :last-child, .framer-1hhCh .framer-16og77a > :last-child, .framer-1hhCh .framer-1x2k5ma > :last-child, .framer-1hhCh .framer-le3e2c > :last-child, .framer-1hhCh .framer-d9iknv > :last-child { margin-bottom: 0px; } .framer-1hhCh .framer-16og77a > *, .framer-1hhCh .framer-1x2k5ma > *, .framer-1hhCh .framer-le3e2c > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1hhCh .framer-d9iknv > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }}",
    ...er,
    '.framer-1hhCh[data-border="true"]::after, .framer-1hhCh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Be = kt(xn, wn, "framer-1hhCh"),
  El = Be;
Be.displayName = "Home";
Be.defaultProps = { height: 4906.5, width: 1200 };
Tt(
  Be,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Kode Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kodemono/v2/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq3619D-TaOW2A3k.woff2",
          weight: "700",
        },
        {
          family: "Kode Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kodemono/v2/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq5my9D-TaOW2A3k.woff2",
          weight: "400",
        },
        {
          family: "Kode Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kodemono/v2/A2BLn5pb0QgtVEPFnlYkkaoBgw4qv9odq0e19D-TaOW2A3k.woff2",
          weight: "600",
        },
      ],
    },
    ...mn,
    ...hn,
    ...Et($t),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Rl = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1200",
        framerIntrinsicHeight: "4906.5",
        framerResponsiveScreen: "",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BJp3tRdKe":{"layout":["fixed","auto"]},"imoZ0iwwr":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Rl as __FramerMetadata__, El as default };
//# sourceMappingURL=kVahCkFfONo6F9-9K3KebQurbjMNKwpltn6JTGT6mx4.A6ZPP6FK.mjs.map
