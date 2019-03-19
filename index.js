parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) try {
    f(t[c]);
  } catch (e) {
    i || (i = e);
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "PxDr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.setMatrixArrayType = a, exports.toRadian = s, exports.equals = p, exports.RANDOM = exports.ARRAY_TYPE = exports.EPSILON = void 0;
    var r = 1e-6;
    exports.EPSILON = r;
    var t = "undefined" != typeof Float32Array ? Float32Array : Array;
    exports.ARRAY_TYPE = t;
    var e = Math.random;

    function a(r) {
      exports.ARRAY_TYPE = t = r;
    }

    exports.RANDOM = e;
    var o = Math.PI / 180;

    function s(r) {
      return r * o;
    }

    function p(t, e) {
      return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e));
    }
  }, {}],
  "hSOw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = e, exports.clone = n, exports.copy = o, exports.identity = a, exports.fromValues = u, exports.set = s, exports.transpose = i, exports.invert = p, exports.adjoint = c, exports.determinant = f, exports.multiply = x, exports.rotate = l, exports.scale = M, exports.fromRotation = h, exports.fromScaling = b, exports.str = v, exports.frob = m, exports.LDU = d, exports.add = P, exports.subtract = y, exports.exactEquals = O, exports.equals = A, exports.multiplyScalar = w, exports.multiplyScalarAndAdd = E, exports.sub = exports.mul = void 0;
    var t = r(require("./common.js"));

    function r(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, e) : {};
        n.get || n.set ? Object.defineProperty(r, e, n) : r[e] = t[e];
      }
      return r.default = t, r;
    }

    function e() {
      var r = new t.ARRAY_TYPE(4);
      return t.ARRAY_TYPE != Float32Array && (r[1] = 0, r[2] = 0), r[0] = 1, r[3] = 1, r;
    }

    function n(r) {
      var e = new t.ARRAY_TYPE(4);
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e;
    }

    function o(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t;
    }

    function a(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
    }

    function u(r, e, n, o) {
      var a = new t.ARRAY_TYPE(4);
      return a[0] = r, a[1] = e, a[2] = n, a[3] = o, a;
    }

    function s(t, r, e, n, o) {
      return t[0] = r, t[1] = e, t[2] = n, t[3] = o, t;
    }

    function i(t, r) {
      if (t === r) {
        var e = r[1];
        t[1] = r[2], t[2] = e;
      } else t[0] = r[0], t[1] = r[2], t[2] = r[1], t[3] = r[3];

      return t;
    }

    function p(t, r) {
      var e = r[0],
          n = r[1],
          o = r[2],
          a = r[3],
          u = e * a - o * n;
      return u ? (u = 1 / u, t[0] = a * u, t[1] = -n * u, t[2] = -o * u, t[3] = e * u, t) : null;
    }

    function c(t, r) {
      var e = r[0];
      return t[0] = r[3], t[1] = -r[1], t[2] = -r[2], t[3] = e, t;
    }

    function f(t) {
      return t[0] * t[3] - t[2] * t[1];
    }

    function x(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          u = r[3],
          s = e[0],
          i = e[1],
          p = e[2],
          c = e[3];
      return t[0] = n * s + a * i, t[1] = o * s + u * i, t[2] = n * p + a * c, t[3] = o * p + u * c, t;
    }

    function l(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          u = r[3],
          s = Math.sin(e),
          i = Math.cos(e);
      return t[0] = n * i + a * s, t[1] = o * i + u * s, t[2] = n * -s + a * i, t[3] = o * -s + u * i, t;
    }

    function M(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          u = r[3],
          s = e[0],
          i = e[1];
      return t[0] = n * s, t[1] = o * s, t[2] = a * i, t[3] = u * i, t;
    }

    function h(t, r) {
      var e = Math.sin(r),
          n = Math.cos(r);
      return t[0] = n, t[1] = e, t[2] = -e, t[3] = n, t;
    }

    function b(t, r) {
      return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = r[1], t;
    }

    function v(t) {
      return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    }

    function m(t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
    }

    function d(t, r, e, n) {
      return t[2] = n[2] / n[0], e[0] = n[0], e[1] = n[1], e[3] = n[3] - t[2] * e[1], [t, r, e];
    }

    function P(t, r, e) {
      return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], t;
    }

    function y(t, r, e) {
      return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], t;
    }

    function O(t, r) {
      return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
    }

    function A(r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          u = r[3],
          s = e[0],
          i = e[1],
          p = e[2],
          c = e[3];
      return Math.abs(n - s) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(o - i) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(i)) && Math.abs(a - p) <= t.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(u - c) <= t.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
    }

    function w(t, r, e) {
      return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
    }

    function E(t, r, e, n) {
      return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, t;
    }

    var R = x;
    exports.mul = R;
    var j = y;
    exports.sub = j;
  }, {
    "./common.js": "PxDr"
  }],
  "n7Ma": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = e, exports.clone = a, exports.copy = n, exports.identity = o, exports.fromValues = s, exports.set = u, exports.invert = i, exports.determinant = p, exports.multiply = c, exports.rotate = f, exports.scale = M, exports.translate = h, exports.fromRotation = x, exports.fromScaling = l, exports.fromTranslation = b, exports.str = m, exports.frob = v, exports.add = P, exports.subtract = d, exports.multiplyScalar = O, exports.multiplyScalarAndAdd = y, exports.exactEquals = w, exports.equals = A, exports.sub = exports.mul = void 0;
    var t = r(require("./common.js"));

    function r(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, e) : {};
        a.get || a.set ? Object.defineProperty(r, e, a) : r[e] = t[e];
      }
      return r.default = t, r;
    }

    function e() {
      var r = new t.ARRAY_TYPE(6);
      return t.ARRAY_TYPE != Float32Array && (r[1] = 0, r[2] = 0, r[4] = 0, r[5] = 0), r[0] = 1, r[3] = 1, r;
    }

    function a(r) {
      var e = new t.ARRAY_TYPE(6);
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e;
    }

    function n(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], t;
    }

    function o(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }

    function s(r, e, a, n, o, s) {
      var u = new t.ARRAY_TYPE(6);
      return u[0] = r, u[1] = e, u[2] = a, u[3] = n, u[4] = o, u[5] = s, u;
    }

    function u(t, r, e, a, n, o, s) {
      return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = s, t;
    }

    function i(t, r) {
      var e = r[0],
          a = r[1],
          n = r[2],
          o = r[3],
          s = r[4],
          u = r[5],
          i = e * o - a * n;
      return i ? (i = 1 / i, t[0] = o * i, t[1] = -a * i, t[2] = -n * i, t[3] = e * i, t[4] = (n * u - o * s) * i, t[5] = (a * s - e * u) * i, t) : null;
    }

    function p(t) {
      return t[0] * t[3] - t[1] * t[2];
    }

    function c(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          i = r[5],
          p = e[0],
          c = e[1],
          f = e[2],
          M = e[3],
          h = e[4],
          x = e[5];
      return t[0] = a * p + o * c, t[1] = n * p + s * c, t[2] = a * f + o * M, t[3] = n * f + s * M, t[4] = a * h + o * x + u, t[5] = n * h + s * x + i, t;
    }

    function f(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          i = r[5],
          p = Math.sin(e),
          c = Math.cos(e);
      return t[0] = a * c + o * p, t[1] = n * c + s * p, t[2] = a * -p + o * c, t[3] = n * -p + s * c, t[4] = u, t[5] = i, t;
    }

    function M(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          i = r[5],
          p = e[0],
          c = e[1];
      return t[0] = a * p, t[1] = n * p, t[2] = o * c, t[3] = s * c, t[4] = u, t[5] = i, t;
    }

    function h(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          i = r[5],
          p = e[0],
          c = e[1];
      return t[0] = a, t[1] = n, t[2] = o, t[3] = s, t[4] = a * p + o * c + u, t[5] = n * p + s * c + i, t;
    }

    function x(t, r) {
      var e = Math.sin(r),
          a = Math.cos(r);
      return t[0] = a, t[1] = e, t[2] = -e, t[3] = a, t[4] = 0, t[5] = 0, t;
    }

    function l(t, r) {
      return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = r[1], t[4] = 0, t[5] = 0, t;
    }

    function b(t, r) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = r[0], t[5] = r[1], t;
    }

    function m(t) {
      return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
    }

    function v(t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
    }

    function P(t, r, e) {
      return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], t[4] = r[4] + e[4], t[5] = r[5] + e[5], t;
    }

    function d(t, r, e) {
      return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], t[4] = r[4] - e[4], t[5] = r[5] - e[5], t;
    }

    function O(t, r, e) {
      return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, t[5] = r[5] * e, t;
    }

    function y(t, r, e, a) {
      return t[0] = r[0] + e[0] * a, t[1] = r[1] + e[1] * a, t[2] = r[2] + e[2] * a, t[3] = r[3] + e[3] * a, t[4] = r[4] + e[4] * a, t[5] = r[5] + e[5] * a, t;
    }

    function w(t, r) {
      return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5];
    }

    function A(r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          i = r[5],
          p = e[0],
          c = e[1],
          f = e[2],
          M = e[3],
          h = e[4],
          x = e[5];
      return Math.abs(a - p) <= t.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(n - c) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(o - f) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(s - M) <= t.EPSILON * Math.max(1, Math.abs(s), Math.abs(M)) && Math.abs(u - h) <= t.EPSILON * Math.max(1, Math.abs(u), Math.abs(h)) && Math.abs(i - x) <= t.EPSILON * Math.max(1, Math.abs(i), Math.abs(x));
    }

    var E = c;
    exports.mul = E;
    var R = d;
    exports.sub = R;
  }, {
    "./common.js": "PxDr"
  }],
  "SRDq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = a, exports.fromMat4 = n, exports.clone = e, exports.copy = o, exports.fromValues = s, exports.set = u, exports.identity = p, exports.transpose = i, exports.invert = M, exports.adjoint = c, exports.determinant = h, exports.multiply = f, exports.translate = x, exports.rotate = b, exports.scale = l, exports.fromTranslation = m, exports.fromRotation = v, exports.fromScaling = P, exports.fromMat2d = O, exports.fromQuat = d, exports.normalFromMat4 = w, exports.projection = E, exports.str = y, exports.frob = S, exports.add = A, exports.subtract = j, exports.multiplyScalar = I, exports.multiplyScalarAndAdd = L, exports.exactEquals = N, exports.equals = R, exports.sub = exports.mul = void 0;
    var t = r(require("./common.js"));

    function r(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, a) : {};
        n.get || n.set ? Object.defineProperty(r, a, n) : r[a] = t[a];
      }
      return r.default = t, r;
    }

    function a() {
      var r = new t.ARRAY_TYPE(9);
      return t.ARRAY_TYPE != Float32Array && (r[1] = 0, r[2] = 0, r[3] = 0, r[5] = 0, r[6] = 0, r[7] = 0), r[0] = 1, r[4] = 1, r[8] = 1, r;
    }

    function n(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[4], t[4] = r[5], t[5] = r[6], t[6] = r[8], t[7] = r[9], t[8] = r[10], t;
    }

    function e(r) {
      var a = new t.ARRAY_TYPE(9);
      return a[0] = r[0], a[1] = r[1], a[2] = r[2], a[3] = r[3], a[4] = r[4], a[5] = r[5], a[6] = r[6], a[7] = r[7], a[8] = r[8], a;
    }

    function o(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t;
    }

    function s(r, a, n, e, o, s, u, p, i) {
      var M = new t.ARRAY_TYPE(9);
      return M[0] = r, M[1] = a, M[2] = n, M[3] = e, M[4] = o, M[5] = s, M[6] = u, M[7] = p, M[8] = i, M;
    }

    function u(t, r, a, n, e, o, s, u, p, i) {
      return t[0] = r, t[1] = a, t[2] = n, t[3] = e, t[4] = o, t[5] = s, t[6] = u, t[7] = p, t[8] = i, t;
    }

    function p(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }

    function i(t, r) {
      if (t === r) {
        var a = r[1],
            n = r[2],
            e = r[5];
        t[1] = r[3], t[2] = r[6], t[3] = a, t[5] = r[7], t[6] = n, t[7] = e;
      } else t[0] = r[0], t[1] = r[3], t[2] = r[6], t[3] = r[1], t[4] = r[4], t[5] = r[7], t[6] = r[2], t[7] = r[5], t[8] = r[8];

      return t;
    }

    function M(t, r) {
      var a = r[0],
          n = r[1],
          e = r[2],
          o = r[3],
          s = r[4],
          u = r[5],
          p = r[6],
          i = r[7],
          M = r[8],
          c = M * s - u * i,
          h = -M * o + u * p,
          f = i * o - s * p,
          x = a * c + n * h + e * f;
      return x ? (x = 1 / x, t[0] = c * x, t[1] = (-M * n + e * i) * x, t[2] = (u * n - e * s) * x, t[3] = h * x, t[4] = (M * a - e * p) * x, t[5] = (-u * a + e * o) * x, t[6] = f * x, t[7] = (-i * a + n * p) * x, t[8] = (s * a - n * o) * x, t) : null;
    }

    function c(t, r) {
      var a = r[0],
          n = r[1],
          e = r[2],
          o = r[3],
          s = r[4],
          u = r[5],
          p = r[6],
          i = r[7],
          M = r[8];
      return t[0] = s * M - u * i, t[1] = e * i - n * M, t[2] = n * u - e * s, t[3] = u * p - o * M, t[4] = a * M - e * p, t[5] = e * o - a * u, t[6] = o * i - s * p, t[7] = n * p - a * i, t[8] = a * s - n * o, t;
    }

    function h(t) {
      var r = t[0],
          a = t[1],
          n = t[2],
          e = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          p = t[7],
          i = t[8];
      return r * (i * o - s * p) + a * (-i * e + s * u) + n * (p * e - o * u);
    }

    function f(t, r, a) {
      var n = r[0],
          e = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          p = r[5],
          i = r[6],
          M = r[7],
          c = r[8],
          h = a[0],
          f = a[1],
          x = a[2],
          b = a[3],
          l = a[4],
          m = a[5],
          v = a[6],
          P = a[7],
          O = a[8];
      return t[0] = h * n + f * s + x * i, t[1] = h * e + f * u + x * M, t[2] = h * o + f * p + x * c, t[3] = b * n + l * s + m * i, t[4] = b * e + l * u + m * M, t[5] = b * o + l * p + m * c, t[6] = v * n + P * s + O * i, t[7] = v * e + P * u + O * M, t[8] = v * o + P * p + O * c, t;
    }

    function x(t, r, a) {
      var n = r[0],
          e = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          p = r[5],
          i = r[6],
          M = r[7],
          c = r[8],
          h = a[0],
          f = a[1];
      return t[0] = n, t[1] = e, t[2] = o, t[3] = s, t[4] = u, t[5] = p, t[6] = h * n + f * s + i, t[7] = h * e + f * u + M, t[8] = h * o + f * p + c, t;
    }

    function b(t, r, a) {
      var n = r[0],
          e = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          p = r[5],
          i = r[6],
          M = r[7],
          c = r[8],
          h = Math.sin(a),
          f = Math.cos(a);
      return t[0] = f * n + h * s, t[1] = f * e + h * u, t[2] = f * o + h * p, t[3] = f * s - h * n, t[4] = f * u - h * e, t[5] = f * p - h * o, t[6] = i, t[7] = M, t[8] = c, t;
    }

    function l(t, r, a) {
      var n = a[0],
          e = a[1];
      return t[0] = n * r[0], t[1] = n * r[1], t[2] = n * r[2], t[3] = e * r[3], t[4] = e * r[4], t[5] = e * r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t;
    }

    function m(t, r) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = r[0], t[7] = r[1], t[8] = 1, t;
    }

    function v(t, r) {
      var a = Math.sin(r),
          n = Math.cos(r);
      return t[0] = n, t[1] = a, t[2] = 0, t[3] = -a, t[4] = n, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }

    function P(t, r) {
      return t[0] = r[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = r[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }

    function O(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = 0, t[3] = r[2], t[4] = r[3], t[5] = 0, t[6] = r[4], t[7] = r[5], t[8] = 1, t;
    }

    function d(t, r) {
      var a = r[0],
          n = r[1],
          e = r[2],
          o = r[3],
          s = a + a,
          u = n + n,
          p = e + e,
          i = a * s,
          M = n * s,
          c = n * u,
          h = e * s,
          f = e * u,
          x = e * p,
          b = o * s,
          l = o * u,
          m = o * p;
      return t[0] = 1 - c - x, t[3] = M - m, t[6] = h + l, t[1] = M + m, t[4] = 1 - i - x, t[7] = f - b, t[2] = h - l, t[5] = f + b, t[8] = 1 - i - c, t;
    }

    function w(t, r) {
      var a = r[0],
          n = r[1],
          e = r[2],
          o = r[3],
          s = r[4],
          u = r[5],
          p = r[6],
          i = r[7],
          M = r[8],
          c = r[9],
          h = r[10],
          f = r[11],
          x = r[12],
          b = r[13],
          l = r[14],
          m = r[15],
          v = a * u - n * s,
          P = a * p - e * s,
          O = a * i - o * s,
          d = n * p - e * u,
          w = n * i - o * u,
          E = e * i - o * p,
          y = M * b - c * x,
          S = M * l - h * x,
          A = M * m - f * x,
          j = c * l - h * b,
          I = c * m - f * b,
          L = h * m - f * l,
          N = v * L - P * I + O * j + d * A - w * S + E * y;
      return N ? (N = 1 / N, t[0] = (u * L - p * I + i * j) * N, t[1] = (p * A - s * L - i * S) * N, t[2] = (s * I - u * A + i * y) * N, t[3] = (e * I - n * L - o * j) * N, t[4] = (a * L - e * A + o * S) * N, t[5] = (n * A - a * I - o * y) * N, t[6] = (b * E - l * w + m * d) * N, t[7] = (l * O - x * E - m * P) * N, t[8] = (x * w - b * O + m * v) * N, t) : null;
    }

    function E(t, r, a) {
      return t[0] = 2 / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
    }

    function y(t) {
      return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
    }

    function S(t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
    }

    function A(t, r, a) {
      return t[0] = r[0] + a[0], t[1] = r[1] + a[1], t[2] = r[2] + a[2], t[3] = r[3] + a[3], t[4] = r[4] + a[4], t[5] = r[5] + a[5], t[6] = r[6] + a[6], t[7] = r[7] + a[7], t[8] = r[8] + a[8], t;
    }

    function j(t, r, a) {
      return t[0] = r[0] - a[0], t[1] = r[1] - a[1], t[2] = r[2] - a[2], t[3] = r[3] - a[3], t[4] = r[4] - a[4], t[5] = r[5] - a[5], t[6] = r[6] - a[6], t[7] = r[7] - a[7], t[8] = r[8] - a[8], t;
    }

    function I(t, r, a) {
      return t[0] = r[0] * a, t[1] = r[1] * a, t[2] = r[2] * a, t[3] = r[3] * a, t[4] = r[4] * a, t[5] = r[5] * a, t[6] = r[6] * a, t[7] = r[7] * a, t[8] = r[8] * a, t;
    }

    function L(t, r, a, n) {
      return t[0] = r[0] + a[0] * n, t[1] = r[1] + a[1] * n, t[2] = r[2] + a[2] * n, t[3] = r[3] + a[3] * n, t[4] = r[4] + a[4] * n, t[5] = r[5] + a[5] * n, t[6] = r[6] + a[6] * n, t[7] = r[7] + a[7] * n, t[8] = r[8] + a[8] * n, t;
    }

    function N(t, r) {
      return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5] && t[6] === r[6] && t[7] === r[7] && t[8] === r[8];
    }

    function R(r, a) {
      var n = r[0],
          e = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          p = r[5],
          i = r[6],
          M = r[7],
          c = r[8],
          h = a[0],
          f = a[1],
          x = a[2],
          b = a[3],
          l = a[4],
          m = a[5],
          v = a[6],
          P = a[7],
          O = a[8];
      return Math.abs(n - h) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(e - f) <= t.EPSILON * Math.max(1, Math.abs(e), Math.abs(f)) && Math.abs(o - x) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(x)) && Math.abs(s - b) <= t.EPSILON * Math.max(1, Math.abs(s), Math.abs(b)) && Math.abs(u - l) <= t.EPSILON * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(p - m) <= t.EPSILON * Math.max(1, Math.abs(p), Math.abs(m)) && Math.abs(i - v) <= t.EPSILON * Math.max(1, Math.abs(i), Math.abs(v)) && Math.abs(M - P) <= t.EPSILON * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(c - O) <= t.EPSILON * Math.max(1, Math.abs(c), Math.abs(O));
    }

    var Y = f;
    exports.mul = Y;
    var _ = j;
    exports.sub = _;
  }, {
    "./common.js": "PxDr"
  }],
  "9Wdl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = r, exports.clone = n, exports.copy = o, exports.fromValues = e, exports.set = s, exports.identity = h, exports.transpose = M, exports.invert = u, exports.adjoint = i, exports.determinant = p, exports.multiply = c, exports.translate = f, exports.scale = x, exports.rotate = b, exports.rotateX = l, exports.rotateY = v, exports.rotateZ = m, exports.fromTranslation = P, exports.fromScaling = O, exports.fromRotation = E, exports.fromXRotation = S, exports.fromYRotation = w, exports.fromZRotation = I, exports.fromRotationTranslation = L, exports.fromQuat2 = N, exports.getTranslation = q, exports.getScaling = R, exports.getRotation = d, exports.fromRotationTranslationScale = g, exports.fromRotationTranslationScaleOrigin = A, exports.fromQuat = y, exports.frustum = Y, exports.perspective = T, exports.perspectiveFromFieldOfView = _, exports.ortho = j, exports.lookAt = D, exports.targetTo = F, exports.str = Q, exports.frob = V, exports.add = X, exports.subtract = Z, exports.multiplyScalar = k, exports.multiplyScalarAndAdd = z, exports.exactEquals = B, exports.equals = C, exports.sub = exports.mul = void 0;
    var t = a(require("./common.js"));

    function a(t) {
      if (t && t.__esModule) return t;
      var a = {};
      if (null != t) for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
        n.get || n.set ? Object.defineProperty(a, r, n) : a[r] = t[r];
      }
      return a.default = t, a;
    }

    function r() {
      var a = new t.ARRAY_TYPE(16);
      return t.ARRAY_TYPE != Float32Array && (a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0), a[0] = 1, a[5] = 1, a[10] = 1, a[15] = 1, a;
    }

    function n(a) {
      var r = new t.ARRAY_TYPE(16);
      return r[0] = a[0], r[1] = a[1], r[2] = a[2], r[3] = a[3], r[4] = a[4], r[5] = a[5], r[6] = a[6], r[7] = a[7], r[8] = a[8], r[9] = a[9], r[10] = a[10], r[11] = a[11], r[12] = a[12], r[13] = a[13], r[14] = a[14], r[15] = a[15], r;
    }

    function o(t, a) {
      return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
    }

    function e(a, r, n, o, e, s, h, M, u, i, p, c, f, x, b, l) {
      var v = new t.ARRAY_TYPE(16);
      return v[0] = a, v[1] = r, v[2] = n, v[3] = o, v[4] = e, v[5] = s, v[6] = h, v[7] = M, v[8] = u, v[9] = i, v[10] = p, v[11] = c, v[12] = f, v[13] = x, v[14] = b, v[15] = l, v;
    }

    function s(t, a, r, n, o, e, s, h, M, u, i, p, c, f, x, b, l) {
      return t[0] = a, t[1] = r, t[2] = n, t[3] = o, t[4] = e, t[5] = s, t[6] = h, t[7] = M, t[8] = u, t[9] = i, t[10] = p, t[11] = c, t[12] = f, t[13] = x, t[14] = b, t[15] = l, t;
    }

    function h(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }

    function M(t, a) {
      if (t === a) {
        var r = a[1],
            n = a[2],
            o = a[3],
            e = a[6],
            s = a[7],
            h = a[11];
        t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = r, t[6] = a[9], t[7] = a[13], t[8] = n, t[9] = e, t[11] = a[14], t[12] = o, t[13] = s, t[14] = h;
      } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];

      return t;
    }

    function u(t, a) {
      var r = a[0],
          n = a[1],
          o = a[2],
          e = a[3],
          s = a[4],
          h = a[5],
          M = a[6],
          u = a[7],
          i = a[8],
          p = a[9],
          c = a[10],
          f = a[11],
          x = a[12],
          b = a[13],
          l = a[14],
          v = a[15],
          m = r * h - n * s,
          P = r * M - o * s,
          O = r * u - e * s,
          E = n * M - o * h,
          S = n * u - e * h,
          w = o * u - e * M,
          I = i * b - p * x,
          L = i * l - c * x,
          N = i * v - f * x,
          q = p * l - c * b,
          R = p * v - f * b,
          d = c * v - f * l,
          g = m * d - P * R + O * q + E * N - S * L + w * I;
      return g ? (g = 1 / g, t[0] = (h * d - M * R + u * q) * g, t[1] = (o * R - n * d - e * q) * g, t[2] = (b * w - l * S + v * E) * g, t[3] = (c * S - p * w - f * E) * g, t[4] = (M * N - s * d - u * L) * g, t[5] = (r * d - o * N + e * L) * g, t[6] = (l * O - x * w - v * P) * g, t[7] = (i * w - c * O + f * P) * g, t[8] = (s * R - h * N + u * I) * g, t[9] = (n * N - r * R - e * I) * g, t[10] = (x * S - b * O + v * m) * g, t[11] = (p * O - i * S - f * m) * g, t[12] = (h * L - s * q - M * I) * g, t[13] = (r * q - n * L + o * I) * g, t[14] = (b * P - x * E - l * m) * g, t[15] = (i * E - p * P + c * m) * g, t) : null;
    }

    function i(t, a) {
      var r = a[0],
          n = a[1],
          o = a[2],
          e = a[3],
          s = a[4],
          h = a[5],
          M = a[6],
          u = a[7],
          i = a[8],
          p = a[9],
          c = a[10],
          f = a[11],
          x = a[12],
          b = a[13],
          l = a[14],
          v = a[15];
      return t[0] = h * (c * v - f * l) - p * (M * v - u * l) + b * (M * f - u * c), t[1] = -(n * (c * v - f * l) - p * (o * v - e * l) + b * (o * f - e * c)), t[2] = n * (M * v - u * l) - h * (o * v - e * l) + b * (o * u - e * M), t[3] = -(n * (M * f - u * c) - h * (o * f - e * c) + p * (o * u - e * M)), t[4] = -(s * (c * v - f * l) - i * (M * v - u * l) + x * (M * f - u * c)), t[5] = r * (c * v - f * l) - i * (o * v - e * l) + x * (o * f - e * c), t[6] = -(r * (M * v - u * l) - s * (o * v - e * l) + x * (o * u - e * M)), t[7] = r * (M * f - u * c) - s * (o * f - e * c) + i * (o * u - e * M), t[8] = s * (p * v - f * b) - i * (h * v - u * b) + x * (h * f - u * p), t[9] = -(r * (p * v - f * b) - i * (n * v - e * b) + x * (n * f - e * p)), t[10] = r * (h * v - u * b) - s * (n * v - e * b) + x * (n * u - e * h), t[11] = -(r * (h * f - u * p) - s * (n * f - e * p) + i * (n * u - e * h)), t[12] = -(s * (p * l - c * b) - i * (h * l - M * b) + x * (h * c - M * p)), t[13] = r * (p * l - c * b) - i * (n * l - o * b) + x * (n * c - o * p), t[14] = -(r * (h * l - M * b) - s * (n * l - o * b) + x * (n * M - o * h)), t[15] = r * (h * c - M * p) - s * (n * c - o * p) + i * (n * M - o * h), t;
    }

    function p(t) {
      var a = t[0],
          r = t[1],
          n = t[2],
          o = t[3],
          e = t[4],
          s = t[5],
          h = t[6],
          M = t[7],
          u = t[8],
          i = t[9],
          p = t[10],
          c = t[11],
          f = t[12],
          x = t[13],
          b = t[14],
          l = t[15];
      return (a * s - r * e) * (p * l - c * b) - (a * h - n * e) * (i * l - c * x) + (a * M - o * e) * (i * b - p * x) + (r * h - n * s) * (u * l - c * f) - (r * M - o * s) * (u * b - p * f) + (n * M - o * h) * (u * x - i * f);
    }

    function c(t, a, r) {
      var n = a[0],
          o = a[1],
          e = a[2],
          s = a[3],
          h = a[4],
          M = a[5],
          u = a[6],
          i = a[7],
          p = a[8],
          c = a[9],
          f = a[10],
          x = a[11],
          b = a[12],
          l = a[13],
          v = a[14],
          m = a[15],
          P = r[0],
          O = r[1],
          E = r[2],
          S = r[3];
      return t[0] = P * n + O * h + E * p + S * b, t[1] = P * o + O * M + E * c + S * l, t[2] = P * e + O * u + E * f + S * v, t[3] = P * s + O * i + E * x + S * m, P = r[4], O = r[5], E = r[6], S = r[7], t[4] = P * n + O * h + E * p + S * b, t[5] = P * o + O * M + E * c + S * l, t[6] = P * e + O * u + E * f + S * v, t[7] = P * s + O * i + E * x + S * m, P = r[8], O = r[9], E = r[10], S = r[11], t[8] = P * n + O * h + E * p + S * b, t[9] = P * o + O * M + E * c + S * l, t[10] = P * e + O * u + E * f + S * v, t[11] = P * s + O * i + E * x + S * m, P = r[12], O = r[13], E = r[14], S = r[15], t[12] = P * n + O * h + E * p + S * b, t[13] = P * o + O * M + E * c + S * l, t[14] = P * e + O * u + E * f + S * v, t[15] = P * s + O * i + E * x + S * m, t;
    }

    function f(t, a, r) {
      var n,
          o,
          e,
          s,
          h,
          M,
          u,
          i,
          p,
          c,
          f,
          x,
          b = r[0],
          l = r[1],
          v = r[2];
      return a === t ? (t[12] = a[0] * b + a[4] * l + a[8] * v + a[12], t[13] = a[1] * b + a[5] * l + a[9] * v + a[13], t[14] = a[2] * b + a[6] * l + a[10] * v + a[14], t[15] = a[3] * b + a[7] * l + a[11] * v + a[15]) : (n = a[0], o = a[1], e = a[2], s = a[3], h = a[4], M = a[5], u = a[6], i = a[7], p = a[8], c = a[9], f = a[10], x = a[11], t[0] = n, t[1] = o, t[2] = e, t[3] = s, t[4] = h, t[5] = M, t[6] = u, t[7] = i, t[8] = p, t[9] = c, t[10] = f, t[11] = x, t[12] = n * b + h * l + p * v + a[12], t[13] = o * b + M * l + c * v + a[13], t[14] = e * b + u * l + f * v + a[14], t[15] = s * b + i * l + x * v + a[15]), t;
    }

    function x(t, a, r) {
      var n = r[0],
          o = r[1],
          e = r[2];
      return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * o, t[5] = a[5] * o, t[6] = a[6] * o, t[7] = a[7] * o, t[8] = a[8] * e, t[9] = a[9] * e, t[10] = a[10] * e, t[11] = a[11] * e, t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
    }

    function b(a, r, n, o) {
      var e,
          s,
          h,
          M,
          u,
          i,
          p,
          c,
          f,
          x,
          b,
          l,
          v,
          m,
          P,
          O,
          E,
          S,
          w,
          I,
          L,
          N,
          q,
          R,
          d = o[0],
          g = o[1],
          A = o[2],
          y = Math.sqrt(d * d + g * g + A * A);
      return y < t.EPSILON ? null : (d *= y = 1 / y, g *= y, A *= y, e = Math.sin(n), h = 1 - (s = Math.cos(n)), M = r[0], u = r[1], i = r[2], p = r[3], c = r[4], f = r[5], x = r[6], b = r[7], l = r[8], v = r[9], m = r[10], P = r[11], O = d * d * h + s, E = g * d * h + A * e, S = A * d * h - g * e, w = d * g * h - A * e, I = g * g * h + s, L = A * g * h + d * e, N = d * A * h + g * e, q = g * A * h - d * e, R = A * A * h + s, a[0] = M * O + c * E + l * S, a[1] = u * O + f * E + v * S, a[2] = i * O + x * E + m * S, a[3] = p * O + b * E + P * S, a[4] = M * w + c * I + l * L, a[5] = u * w + f * I + v * L, a[6] = i * w + x * I + m * L, a[7] = p * w + b * I + P * L, a[8] = M * N + c * q + l * R, a[9] = u * N + f * q + v * R, a[10] = i * N + x * q + m * R, a[11] = p * N + b * q + P * R, r !== a && (a[12] = r[12], a[13] = r[13], a[14] = r[14], a[15] = r[15]), a);
    }

    function l(t, a, r) {
      var n = Math.sin(r),
          o = Math.cos(r),
          e = a[4],
          s = a[5],
          h = a[6],
          M = a[7],
          u = a[8],
          i = a[9],
          p = a[10],
          c = a[11];
      return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = e * o + u * n, t[5] = s * o + i * n, t[6] = h * o + p * n, t[7] = M * o + c * n, t[8] = u * o - e * n, t[9] = i * o - s * n, t[10] = p * o - h * n, t[11] = c * o - M * n, t;
    }

    function v(t, a, r) {
      var n = Math.sin(r),
          o = Math.cos(r),
          e = a[0],
          s = a[1],
          h = a[2],
          M = a[3],
          u = a[8],
          i = a[9],
          p = a[10],
          c = a[11];
      return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = e * o - u * n, t[1] = s * o - i * n, t[2] = h * o - p * n, t[3] = M * o - c * n, t[8] = e * n + u * o, t[9] = s * n + i * o, t[10] = h * n + p * o, t[11] = M * n + c * o, t;
    }

    function m(t, a, r) {
      var n = Math.sin(r),
          o = Math.cos(r),
          e = a[0],
          s = a[1],
          h = a[2],
          M = a[3],
          u = a[4],
          i = a[5],
          p = a[6],
          c = a[7];
      return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = e * o + u * n, t[1] = s * o + i * n, t[2] = h * o + p * n, t[3] = M * o + c * n, t[4] = u * o - e * n, t[5] = i * o - s * n, t[6] = p * o - h * n, t[7] = c * o - M * n, t;
    }

    function P(t, a) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t;
    }

    function O(t, a) {
      return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }

    function E(a, r, n) {
      var o,
          e,
          s,
          h = n[0],
          M = n[1],
          u = n[2],
          i = Math.sqrt(h * h + M * M + u * u);
      return i < t.EPSILON ? null : (h *= i = 1 / i, M *= i, u *= i, o = Math.sin(r), s = 1 - (e = Math.cos(r)), a[0] = h * h * s + e, a[1] = M * h * s + u * o, a[2] = u * h * s - M * o, a[3] = 0, a[4] = h * M * s - u * o, a[5] = M * M * s + e, a[6] = u * M * s + h * o, a[7] = 0, a[8] = h * u * s + M * o, a[9] = M * u * s - h * o, a[10] = u * u * s + e, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a);
    }

    function S(t, a) {
      var r = Math.sin(a),
          n = Math.cos(a);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }

    function w(t, a) {
      var r = Math.sin(a),
          n = Math.cos(a);
      return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }

    function I(t, a) {
      var r = Math.sin(a),
          n = Math.cos(a);
      return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }

    function L(t, a, r) {
      var n = a[0],
          o = a[1],
          e = a[2],
          s = a[3],
          h = n + n,
          M = o + o,
          u = e + e,
          i = n * h,
          p = n * M,
          c = n * u,
          f = o * M,
          x = o * u,
          b = e * u,
          l = s * h,
          v = s * M,
          m = s * u;
      return t[0] = 1 - (f + b), t[1] = p + m, t[2] = c - v, t[3] = 0, t[4] = p - m, t[5] = 1 - (i + b), t[6] = x + l, t[7] = 0, t[8] = c + v, t[9] = x - l, t[10] = 1 - (i + f), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
    }

    function N(a, r) {
      var n = new t.ARRAY_TYPE(3),
          o = -r[0],
          e = -r[1],
          s = -r[2],
          h = r[3],
          M = r[4],
          u = r[5],
          i = r[6],
          p = r[7],
          c = o * o + e * e + s * s + h * h;
      return c > 0 ? (n[0] = 2 * (M * h + p * o + u * s - i * e) / c, n[1] = 2 * (u * h + p * e + i * o - M * s) / c, n[2] = 2 * (i * h + p * s + M * e - u * o) / c) : (n[0] = 2 * (M * h + p * o + u * s - i * e), n[1] = 2 * (u * h + p * e + i * o - M * s), n[2] = 2 * (i * h + p * s + M * e - u * o)), L(a, r, n), a;
    }

    function q(t, a) {
      return t[0] = a[12], t[1] = a[13], t[2] = a[14], t;
    }

    function R(t, a) {
      var r = a[0],
          n = a[1],
          o = a[2],
          e = a[4],
          s = a[5],
          h = a[6],
          M = a[8],
          u = a[9],
          i = a[10];
      return t[0] = Math.sqrt(r * r + n * n + o * o), t[1] = Math.sqrt(e * e + s * s + h * h), t[2] = Math.sqrt(M * M + u * u + i * i), t;
    }

    function d(t, a) {
      var r = a[0] + a[5] + a[10],
          n = 0;
      return r > 0 ? (n = 2 * Math.sqrt(r + 1), t[3] = .25 * n, t[0] = (a[6] - a[9]) / n, t[1] = (a[8] - a[2]) / n, t[2] = (a[1] - a[4]) / n) : a[0] > a[5] && a[0] > a[10] ? (n = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), t[3] = (a[6] - a[9]) / n, t[0] = .25 * n, t[1] = (a[1] + a[4]) / n, t[2] = (a[8] + a[2]) / n) : a[5] > a[10] ? (n = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), t[3] = (a[8] - a[2]) / n, t[0] = (a[1] + a[4]) / n, t[1] = .25 * n, t[2] = (a[6] + a[9]) / n) : (n = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), t[3] = (a[1] - a[4]) / n, t[0] = (a[8] + a[2]) / n, t[1] = (a[6] + a[9]) / n, t[2] = .25 * n), t;
    }

    function g(t, a, r, n) {
      var o = a[0],
          e = a[1],
          s = a[2],
          h = a[3],
          M = o + o,
          u = e + e,
          i = s + s,
          p = o * M,
          c = o * u,
          f = o * i,
          x = e * u,
          b = e * i,
          l = s * i,
          v = h * M,
          m = h * u,
          P = h * i,
          O = n[0],
          E = n[1],
          S = n[2];
      return t[0] = (1 - (x + l)) * O, t[1] = (c + P) * O, t[2] = (f - m) * O, t[3] = 0, t[4] = (c - P) * E, t[5] = (1 - (p + l)) * E, t[6] = (b + v) * E, t[7] = 0, t[8] = (f + m) * S, t[9] = (b - v) * S, t[10] = (1 - (p + x)) * S, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
    }

    function A(t, a, r, n, o) {
      var e = a[0],
          s = a[1],
          h = a[2],
          M = a[3],
          u = e + e,
          i = s + s,
          p = h + h,
          c = e * u,
          f = e * i,
          x = e * p,
          b = s * i,
          l = s * p,
          v = h * p,
          m = M * u,
          P = M * i,
          O = M * p,
          E = n[0],
          S = n[1],
          w = n[2],
          I = o[0],
          L = o[1],
          N = o[2],
          q = (1 - (b + v)) * E,
          R = (f + O) * E,
          d = (x - P) * E,
          g = (f - O) * S,
          A = (1 - (c + v)) * S,
          y = (l + m) * S,
          Y = (x + P) * w,
          T = (l - m) * w,
          _ = (1 - (c + b)) * w;

      return t[0] = q, t[1] = R, t[2] = d, t[3] = 0, t[4] = g, t[5] = A, t[6] = y, t[7] = 0, t[8] = Y, t[9] = T, t[10] = _, t[11] = 0, t[12] = r[0] + I - (q * I + g * L + Y * N), t[13] = r[1] + L - (R * I + A * L + T * N), t[14] = r[2] + N - (d * I + y * L + _ * N), t[15] = 1, t;
    }

    function y(t, a) {
      var r = a[0],
          n = a[1],
          o = a[2],
          e = a[3],
          s = r + r,
          h = n + n,
          M = o + o,
          u = r * s,
          i = n * s,
          p = n * h,
          c = o * s,
          f = o * h,
          x = o * M,
          b = e * s,
          l = e * h,
          v = e * M;
      return t[0] = 1 - p - x, t[1] = i + v, t[2] = c - l, t[3] = 0, t[4] = i - v, t[5] = 1 - u - x, t[6] = f + b, t[7] = 0, t[8] = c + l, t[9] = f - b, t[10] = 1 - u - p, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }

    function Y(t, a, r, n, o, e, s) {
      var h = 1 / (r - a),
          M = 1 / (o - n),
          u = 1 / (e - s);
      return t[0] = 2 * e * h, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * M, t[6] = 0, t[7] = 0, t[8] = (r + a) * h, t[9] = (o + n) * M, t[10] = (s + e) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = s * e * 2 * u, t[15] = 0, t;
    }

    function T(t, a, r, n, o) {
      var e,
          s = 1 / Math.tan(a / 2);
      return t[0] = s / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != o && o !== 1 / 0 ? (e = 1 / (n - o), t[10] = (o + n) * e, t[14] = 2 * o * n * e) : (t[10] = -1, t[14] = -2 * n), t;
    }

    function _(t, a, r, n) {
      var o = Math.tan(a.upDegrees * Math.PI / 180),
          e = Math.tan(a.downDegrees * Math.PI / 180),
          s = Math.tan(a.leftDegrees * Math.PI / 180),
          h = Math.tan(a.rightDegrees * Math.PI / 180),
          M = 2 / (s + h),
          u = 2 / (o + e);
      return t[0] = M, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = -(s - h) * M * .5, t[9] = (o - e) * u * .5, t[10] = n / (r - n), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = n * r / (r - n), t[15] = 0, t;
    }

    function j(t, a, r, n, o, e, s) {
      var h = 1 / (a - r),
          M = 1 / (n - o),
          u = 1 / (e - s);
      return t[0] = -2 * h, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * M, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * u, t[11] = 0, t[12] = (a + r) * h, t[13] = (o + n) * M, t[14] = (s + e) * u, t[15] = 1, t;
    }

    function D(a, r, n, o) {
      var e,
          s,
          M,
          u,
          i,
          p,
          c,
          f,
          x,
          b,
          l = r[0],
          v = r[1],
          m = r[2],
          P = o[0],
          O = o[1],
          E = o[2],
          S = n[0],
          w = n[1],
          I = n[2];
      return Math.abs(l - S) < t.EPSILON && Math.abs(v - w) < t.EPSILON && Math.abs(m - I) < t.EPSILON ? h(a) : (c = l - S, f = v - w, x = m - I, e = O * (x *= b = 1 / Math.sqrt(c * c + f * f + x * x)) - E * (f *= b), s = E * (c *= b) - P * x, M = P * f - O * c, (b = Math.sqrt(e * e + s * s + M * M)) ? (e *= b = 1 / b, s *= b, M *= b) : (e = 0, s = 0, M = 0), u = f * M - x * s, i = x * e - c * M, p = c * s - f * e, (b = Math.sqrt(u * u + i * i + p * p)) ? (u *= b = 1 / b, i *= b, p *= b) : (u = 0, i = 0, p = 0), a[0] = e, a[1] = u, a[2] = c, a[3] = 0, a[4] = s, a[5] = i, a[6] = f, a[7] = 0, a[8] = M, a[9] = p, a[10] = x, a[11] = 0, a[12] = -(e * l + s * v + M * m), a[13] = -(u * l + i * v + p * m), a[14] = -(c * l + f * v + x * m), a[15] = 1, a);
    }

    function F(t, a, r, n) {
      var o = a[0],
          e = a[1],
          s = a[2],
          h = n[0],
          M = n[1],
          u = n[2],
          i = o - r[0],
          p = e - r[1],
          c = s - r[2],
          f = i * i + p * p + c * c;
      f > 0 && (i *= f = 1 / Math.sqrt(f), p *= f, c *= f);
      var x = M * c - u * p,
          b = u * i - h * c,
          l = h * p - M * i;
      return (f = x * x + b * b + l * l) > 0 && (x *= f = 1 / Math.sqrt(f), b *= f, l *= f), t[0] = x, t[1] = b, t[2] = l, t[3] = 0, t[4] = p * l - c * b, t[5] = c * x - i * l, t[6] = i * b - p * x, t[7] = 0, t[8] = i, t[9] = p, t[10] = c, t[11] = 0, t[12] = o, t[13] = e, t[14] = s, t[15] = 1, t;
    }

    function Q(t) {
      return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
    }

    function V(t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
    }

    function X(t, a, r) {
      return t[0] = a[0] + r[0], t[1] = a[1] + r[1], t[2] = a[2] + r[2], t[3] = a[3] + r[3], t[4] = a[4] + r[4], t[5] = a[5] + r[5], t[6] = a[6] + r[6], t[7] = a[7] + r[7], t[8] = a[8] + r[8], t[9] = a[9] + r[9], t[10] = a[10] + r[10], t[11] = a[11] + r[11], t[12] = a[12] + r[12], t[13] = a[13] + r[13], t[14] = a[14] + r[14], t[15] = a[15] + r[15], t;
    }

    function Z(t, a, r) {
      return t[0] = a[0] - r[0], t[1] = a[1] - r[1], t[2] = a[2] - r[2], t[3] = a[3] - r[3], t[4] = a[4] - r[4], t[5] = a[5] - r[5], t[6] = a[6] - r[6], t[7] = a[7] - r[7], t[8] = a[8] - r[8], t[9] = a[9] - r[9], t[10] = a[10] - r[10], t[11] = a[11] - r[11], t[12] = a[12] - r[12], t[13] = a[13] - r[13], t[14] = a[14] - r[14], t[15] = a[15] - r[15], t;
    }

    function k(t, a, r) {
      return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * r, t[5] = a[5] * r, t[6] = a[6] * r, t[7] = a[7] * r, t[8] = a[8] * r, t[9] = a[9] * r, t[10] = a[10] * r, t[11] = a[11] * r, t[12] = a[12] * r, t[13] = a[13] * r, t[14] = a[14] * r, t[15] = a[15] * r, t;
    }

    function z(t, a, r, n) {
      return t[0] = a[0] + r[0] * n, t[1] = a[1] + r[1] * n, t[2] = a[2] + r[2] * n, t[3] = a[3] + r[3] * n, t[4] = a[4] + r[4] * n, t[5] = a[5] + r[5] * n, t[6] = a[6] + r[6] * n, t[7] = a[7] + r[7] * n, t[8] = a[8] + r[8] * n, t[9] = a[9] + r[9] * n, t[10] = a[10] + r[10] * n, t[11] = a[11] + r[11] * n, t[12] = a[12] + r[12] * n, t[13] = a[13] + r[13] * n, t[14] = a[14] + r[14] * n, t[15] = a[15] + r[15] * n, t;
    }

    function B(t, a) {
      return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15];
    }

    function C(a, r) {
      var n = a[0],
          o = a[1],
          e = a[2],
          s = a[3],
          h = a[4],
          M = a[5],
          u = a[6],
          i = a[7],
          p = a[8],
          c = a[9],
          f = a[10],
          x = a[11],
          b = a[12],
          l = a[13],
          v = a[14],
          m = a[15],
          P = r[0],
          O = r[1],
          E = r[2],
          S = r[3],
          w = r[4],
          I = r[5],
          L = r[6],
          N = r[7],
          q = r[8],
          R = r[9],
          d = r[10],
          g = r[11],
          A = r[12],
          y = r[13],
          Y = r[14],
          T = r[15];
      return Math.abs(n - P) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(P)) && Math.abs(o - O) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(O)) && Math.abs(e - E) <= t.EPSILON * Math.max(1, Math.abs(e), Math.abs(E)) && Math.abs(s - S) <= t.EPSILON * Math.max(1, Math.abs(s), Math.abs(S)) && Math.abs(h - w) <= t.EPSILON * Math.max(1, Math.abs(h), Math.abs(w)) && Math.abs(M - I) <= t.EPSILON * Math.max(1, Math.abs(M), Math.abs(I)) && Math.abs(u - L) <= t.EPSILON * Math.max(1, Math.abs(u), Math.abs(L)) && Math.abs(i - N) <= t.EPSILON * Math.max(1, Math.abs(i), Math.abs(N)) && Math.abs(p - q) <= t.EPSILON * Math.max(1, Math.abs(p), Math.abs(q)) && Math.abs(c - R) <= t.EPSILON * Math.max(1, Math.abs(c), Math.abs(R)) && Math.abs(f - d) <= t.EPSILON * Math.max(1, Math.abs(f), Math.abs(d)) && Math.abs(x - g) <= t.EPSILON * Math.max(1, Math.abs(x), Math.abs(g)) && Math.abs(b - A) <= t.EPSILON * Math.max(1, Math.abs(b), Math.abs(A)) && Math.abs(l - y) <= t.EPSILON * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(v - Y) <= t.EPSILON * Math.max(1, Math.abs(v), Math.abs(Y)) && Math.abs(m - T) <= t.EPSILON * Math.max(1, Math.abs(m), Math.abs(T));
    }

    var G = c;
    exports.mul = G;
    var H = Z;
    exports.sub = H;
  }, {
    "./common.js": "PxDr"
  }],
  "Ijz7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = e, exports.clone = n, exports.length = o, exports.fromValues = a, exports.copy = s, exports.set = u, exports.add = i, exports.subtract = c, exports.multiply = p, exports.divide = x, exports.ceil = f, exports.floor = h, exports.min = M, exports.max = v, exports.round = l, exports.scale = d, exports.scaleAndAdd = m, exports.distance = b, exports.squaredDistance = P, exports.squaredLength = O, exports.negate = q, exports.inverse = A, exports.normalize = y, exports.dot = E, exports.cross = R, exports.lerp = g, exports.hermite = Y, exports.bezier = _, exports.random = j, exports.transformMat4 = D, exports.transformMat3 = w, exports.transformQuat = L, exports.rotateX = I, exports.rotateY = N, exports.rotateZ = T, exports.angle = z, exports.zero = S, exports.str = F, exports.exactEquals = Q, exports.equals = V, exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;
    var t = r(require("./common.js"));

    function r(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, e) : {};
        n.get || n.set ? Object.defineProperty(r, e, n) : r[e] = t[e];
      }
      return r.default = t, r;
    }

    function e() {
      var r = new t.ARRAY_TYPE(3);
      return t.ARRAY_TYPE != Float32Array && (r[0] = 0, r[1] = 0, r[2] = 0), r;
    }

    function n(r) {
      var e = new t.ARRAY_TYPE(3);
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e;
    }

    function o(t) {
      var r = t[0],
          e = t[1],
          n = t[2];
      return Math.sqrt(r * r + e * e + n * n);
    }

    function a(r, e, n) {
      var o = new t.ARRAY_TYPE(3);
      return o[0] = r, o[1] = e, o[2] = n, o;
    }

    function s(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t;
    }

    function u(t, r, e, n) {
      return t[0] = r, t[1] = e, t[2] = n, t;
    }

    function i(t, r, e) {
      return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t;
    }

    function c(t, r, e) {
      return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t;
    }

    function p(t, r, e) {
      return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t;
    }

    function x(t, r, e) {
      return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t;
    }

    function f(t, r) {
      return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t[2] = Math.ceil(r[2]), t;
    }

    function h(t, r) {
      return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t[2] = Math.floor(r[2]), t;
    }

    function M(t, r, e) {
      return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t[2] = Math.min(r[2], e[2]), t;
    }

    function v(t, r, e) {
      return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t[2] = Math.max(r[2], e[2]), t;
    }

    function l(t, r) {
      return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t[2] = Math.round(r[2]), t;
    }

    function d(t, r, e) {
      return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t;
    }

    function m(t, r, e, n) {
      return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t;
    }

    function b(t, r) {
      var e = r[0] - t[0],
          n = r[1] - t[1],
          o = r[2] - t[2];
      return Math.sqrt(e * e + n * n + o * o);
    }

    function P(t, r) {
      var e = r[0] - t[0],
          n = r[1] - t[1],
          o = r[2] - t[2];
      return e * e + n * n + o * o;
    }

    function O(t) {
      var r = t[0],
          e = t[1],
          n = t[2];
      return r * r + e * e + n * n;
    }

    function q(t, r) {
      return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t;
    }

    function A(t, r) {
      return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t;
    }

    function y(t, r) {
      var e = r[0],
          n = r[1],
          o = r[2],
          a = e * e + n * n + o * o;
      return a > 0 && (a = 1 / Math.sqrt(a)), t[0] = r[0] * a, t[1] = r[1] * a, t[2] = r[2] * a, t;
    }

    function E(t, r) {
      return t[0] * r[0] + t[1] * r[1] + t[2] * r[2];
    }

    function R(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          s = e[0],
          u = e[1],
          i = e[2];
      return t[0] = o * i - a * u, t[1] = a * s - n * i, t[2] = n * u - o * s, t;
    }

    function g(t, r, e, n) {
      var o = r[0],
          a = r[1],
          s = r[2];
      return t[0] = o + n * (e[0] - o), t[1] = a + n * (e[1] - a), t[2] = s + n * (e[2] - s), t;
    }

    function Y(t, r, e, n, o, a) {
      var s = a * a,
          u = s * (2 * a - 3) + 1,
          i = s * (a - 2) + a,
          c = s * (a - 1),
          p = s * (3 - 2 * a);
      return t[0] = r[0] * u + e[0] * i + n[0] * c + o[0] * p, t[1] = r[1] * u + e[1] * i + n[1] * c + o[1] * p, t[2] = r[2] * u + e[2] * i + n[2] * c + o[2] * p, t;
    }

    function _(t, r, e, n, o, a) {
      var s = 1 - a,
          u = s * s,
          i = a * a,
          c = u * s,
          p = 3 * a * u,
          x = 3 * i * s,
          f = i * a;
      return t[0] = r[0] * c + e[0] * p + n[0] * x + o[0] * f, t[1] = r[1] * c + e[1] * p + n[1] * x + o[1] * f, t[2] = r[2] * c + e[2] * p + n[2] * x + o[2] * f, t;
    }

    function j(r, e) {
      e = e || 1;
      var n = 2 * t.RANDOM() * Math.PI,
          o = 2 * t.RANDOM() - 1,
          a = Math.sqrt(1 - o * o) * e;
      return r[0] = Math.cos(n) * a, r[1] = Math.sin(n) * a, r[2] = o * e, r;
    }

    function D(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          s = e[3] * n + e[7] * o + e[11] * a + e[15];
      return s = s || 1, t[0] = (e[0] * n + e[4] * o + e[8] * a + e[12]) / s, t[1] = (e[1] * n + e[5] * o + e[9] * a + e[13]) / s, t[2] = (e[2] * n + e[6] * o + e[10] * a + e[14]) / s, t;
    }

    function w(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2];
      return t[0] = n * e[0] + o * e[3] + a * e[6], t[1] = n * e[1] + o * e[4] + a * e[7], t[2] = n * e[2] + o * e[5] + a * e[8], t;
    }

    function L(t, r, e) {
      var n = e[0],
          o = e[1],
          a = e[2],
          s = e[3],
          u = r[0],
          i = r[1],
          c = r[2],
          p = o * c - a * i,
          x = a * u - n * c,
          f = n * i - o * u,
          h = o * f - a * x,
          M = a * p - n * f,
          v = n * x - o * p,
          l = 2 * s;
      return p *= l, x *= l, f *= l, h *= 2, M *= 2, v *= 2, t[0] = u + p + h, t[1] = i + x + M, t[2] = c + f + v, t;
    }

    function I(t, r, e, n) {
      var o = [],
          a = [];
      return o[0] = r[0] - e[0], o[1] = r[1] - e[1], o[2] = r[2] - e[2], a[0] = o[0], a[1] = o[1] * Math.cos(n) - o[2] * Math.sin(n), a[2] = o[1] * Math.sin(n) + o[2] * Math.cos(n), t[0] = a[0] + e[0], t[1] = a[1] + e[1], t[2] = a[2] + e[2], t;
    }

    function N(t, r, e, n) {
      var o = [],
          a = [];
      return o[0] = r[0] - e[0], o[1] = r[1] - e[1], o[2] = r[2] - e[2], a[0] = o[2] * Math.sin(n) + o[0] * Math.cos(n), a[1] = o[1], a[2] = o[2] * Math.cos(n) - o[0] * Math.sin(n), t[0] = a[0] + e[0], t[1] = a[1] + e[1], t[2] = a[2] + e[2], t;
    }

    function T(t, r, e, n) {
      var o = [],
          a = [];
      return o[0] = r[0] - e[0], o[1] = r[1] - e[1], o[2] = r[2] - e[2], a[0] = o[0] * Math.cos(n) - o[1] * Math.sin(n), a[1] = o[0] * Math.sin(n) + o[1] * Math.cos(n), a[2] = o[2], t[0] = a[0] + e[0], t[1] = a[1] + e[1], t[2] = a[2] + e[2], t;
    }

    function z(t, r) {
      var e = a(t[0], t[1], t[2]),
          n = a(r[0], r[1], r[2]);
      y(e, e), y(n, n);
      var o = E(e, n);
      return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o);
    }

    function S(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t;
    }

    function F(t) {
      return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    }

    function Q(t, r) {
      return t[0] === r[0] && t[1] === r[1] && t[2] === r[2];
    }

    function V(r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          s = e[0],
          u = e[1],
          i = e[2];
      return Math.abs(n - s) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(o - u) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(a - i) <= t.EPSILON * Math.max(1, Math.abs(a), Math.abs(i));
    }

    var X = c;
    exports.sub = X;
    var Z = p;
    exports.mul = Z;
    var k = x;
    exports.div = k;
    var B = b;
    exports.dist = B;
    var C = P;
    exports.sqrDist = C;
    var G = o;
    exports.len = G;
    var H = O;
    exports.sqrLen = H;

    var J = function () {
      var t = e();
      return function (r, e, n, o, a, s) {
        var u, i;

        for (e || (e = 3), n || (n = 0), i = o ? Math.min(o * e + n, r.length) : r.length, u = n; u < i; u += e) t[0] = r[u], t[1] = r[u + 1], t[2] = r[u + 2], a(t, t, s), r[u] = t[0], r[u + 1] = t[1], r[u + 2] = t[2];

        return r;
      };
    }();

    exports.forEach = J;
  }, {
    "./common.js": "PxDr"
  }],
  "QGfo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = e, exports.clone = n, exports.fromValues = o, exports.copy = a, exports.set = s, exports.add = u, exports.subtract = i, exports.multiply = c, exports.divide = p, exports.ceil = x, exports.floor = f, exports.min = h, exports.max = M, exports.round = l, exports.scale = v, exports.scaleAndAdd = d, exports.distance = m, exports.squaredDistance = b, exports.length = O, exports.squaredLength = A, exports.negate = P, exports.inverse = q, exports.normalize = R, exports.dot = E, exports.cross = y, exports.lerp = D, exports.random = g, exports.transformMat4 = w, exports.transformQuat = N, exports.zero = Y, exports.str = _, exports.exactEquals = j, exports.equals = L, exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;
    var t = r(require("./common.js"));

    function r(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, e) : {};
        n.get || n.set ? Object.defineProperty(r, e, n) : r[e] = t[e];
      }
      return r.default = t, r;
    }

    function e() {
      var r = new t.ARRAY_TYPE(4);
      return t.ARRAY_TYPE != Float32Array && (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0), r;
    }

    function n(r) {
      var e = new t.ARRAY_TYPE(4);
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e;
    }

    function o(r, e, n, o) {
      var a = new t.ARRAY_TYPE(4);
      return a[0] = r, a[1] = e, a[2] = n, a[3] = o, a;
    }

    function a(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t;
    }

    function s(t, r, e, n, o) {
      return t[0] = r, t[1] = e, t[2] = n, t[3] = o, t;
    }

    function u(t, r, e) {
      return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], t;
    }

    function i(t, r, e) {
      return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], t;
    }

    function c(t, r, e) {
      return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t[3] = r[3] * e[3], t;
    }

    function p(t, r, e) {
      return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t[3] = r[3] / e[3], t;
    }

    function x(t, r) {
      return t[0] = Math.ceil(r[0]), t[1] = Math.ceil(r[1]), t[2] = Math.ceil(r[2]), t[3] = Math.ceil(r[3]), t;
    }

    function f(t, r) {
      return t[0] = Math.floor(r[0]), t[1] = Math.floor(r[1]), t[2] = Math.floor(r[2]), t[3] = Math.floor(r[3]), t;
    }

    function h(t, r, e) {
      return t[0] = Math.min(r[0], e[0]), t[1] = Math.min(r[1], e[1]), t[2] = Math.min(r[2], e[2]), t[3] = Math.min(r[3], e[3]), t;
    }

    function M(t, r, e) {
      return t[0] = Math.max(r[0], e[0]), t[1] = Math.max(r[1], e[1]), t[2] = Math.max(r[2], e[2]), t[3] = Math.max(r[3], e[3]), t;
    }

    function l(t, r) {
      return t[0] = Math.round(r[0]), t[1] = Math.round(r[1]), t[2] = Math.round(r[2]), t[3] = Math.round(r[3]), t;
    }

    function v(t, r, e) {
      return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t;
    }

    function d(t, r, e, n) {
      return t[0] = r[0] + e[0] * n, t[1] = r[1] + e[1] * n, t[2] = r[2] + e[2] * n, t[3] = r[3] + e[3] * n, t;
    }

    function m(t, r) {
      var e = r[0] - t[0],
          n = r[1] - t[1],
          o = r[2] - t[2],
          a = r[3] - t[3];
      return Math.sqrt(e * e + n * n + o * o + a * a);
    }

    function b(t, r) {
      var e = r[0] - t[0],
          n = r[1] - t[1],
          o = r[2] - t[2],
          a = r[3] - t[3];
      return e * e + n * n + o * o + a * a;
    }

    function O(t) {
      var r = t[0],
          e = t[1],
          n = t[2],
          o = t[3];
      return Math.sqrt(r * r + e * e + n * n + o * o);
    }

    function A(t) {
      var r = t[0],
          e = t[1],
          n = t[2],
          o = t[3];
      return r * r + e * e + n * n + o * o;
    }

    function P(t, r) {
      return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t[3] = -r[3], t;
    }

    function q(t, r) {
      return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t[3] = 1 / r[3], t;
    }

    function R(t, r) {
      var e = r[0],
          n = r[1],
          o = r[2],
          a = r[3],
          s = e * e + n * n + o * o + a * a;
      return s > 0 && (s = 1 / Math.sqrt(s)), t[0] = e * s, t[1] = n * s, t[2] = o * s, t[3] = a * s, t;
    }

    function E(t, r) {
      return t[0] * r[0] + t[1] * r[1] + t[2] * r[2] + t[3] * r[3];
    }

    function y(t, r, e, n) {
      var o = e[0] * n[1] - e[1] * n[0],
          a = e[0] * n[2] - e[2] * n[0],
          s = e[0] * n[3] - e[3] * n[0],
          u = e[1] * n[2] - e[2] * n[1],
          i = e[1] * n[3] - e[3] * n[1],
          c = e[2] * n[3] - e[3] * n[2],
          p = r[0],
          x = r[1],
          f = r[2],
          h = r[3];
      return t[0] = x * c - f * i + h * u, t[1] = -p * c + f * s - h * a, t[2] = p * i - x * s + h * o, t[3] = -p * u + x * a - f * o, t;
    }

    function D(t, r, e, n) {
      var o = r[0],
          a = r[1],
          s = r[2],
          u = r[3];
      return t[0] = o + n * (e[0] - o), t[1] = a + n * (e[1] - a), t[2] = s + n * (e[2] - s), t[3] = u + n * (e[3] - u), t;
    }

    function g(r, e) {
      var n, o, a, s, u, i;
      e = e || 1;

      do {
        u = (n = 2 * t.RANDOM() - 1) * n + (o = 2 * t.RANDOM() - 1) * o;
      } while (u >= 1);

      do {
        i = (a = 2 * t.RANDOM() - 1) * a + (s = 2 * t.RANDOM() - 1) * s;
      } while (i >= 1);

      var c = Math.sqrt((1 - u) / i);
      return r[0] = e * n, r[1] = e * o, r[2] = e * a * c, r[3] = e * s * c, r;
    }

    function w(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          s = r[3];
      return t[0] = e[0] * n + e[4] * o + e[8] * a + e[12] * s, t[1] = e[1] * n + e[5] * o + e[9] * a + e[13] * s, t[2] = e[2] * n + e[6] * o + e[10] * a + e[14] * s, t[3] = e[3] * n + e[7] * o + e[11] * a + e[15] * s, t;
    }

    function N(t, r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          s = e[0],
          u = e[1],
          i = e[2],
          c = e[3],
          p = c * n + u * a - i * o,
          x = c * o + i * n - s * a,
          f = c * a + s * o - u * n,
          h = -s * n - u * o - i * a;
      return t[0] = p * c + h * -s + x * -i - f * -u, t[1] = x * c + h * -u + f * -s - p * -i, t[2] = f * c + h * -i + p * -u - x * -s, t[3] = r[3], t;
    }

    function Y(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
    }

    function _(t) {
      return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    }

    function j(t, r) {
      return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3];
    }

    function L(r, e) {
      var n = r[0],
          o = r[1],
          a = r[2],
          s = r[3],
          u = e[0],
          i = e[1],
          c = e[2],
          p = e[3];
      return Math.abs(n - u) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(o - i) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(i)) && Math.abs(a - c) <= t.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(s - p) <= t.EPSILON * Math.max(1, Math.abs(s), Math.abs(p));
    }

    var I = i;
    exports.sub = I;
    var S = c;
    exports.mul = S;
    var T = p;
    exports.div = T;
    var z = m;
    exports.dist = z;
    var F = b;
    exports.sqrDist = F;
    var Q = O;
    exports.len = Q;
    var V = A;
    exports.sqrLen = V;

    var k = function () {
      var t = e();
      return function (r, e, n, o, a, s) {
        var u, i;

        for (e || (e = 4), n || (n = 0), i = o ? Math.min(o * e + n, r.length) : r.length, u = n; u < i; u += e) t[0] = r[u], t[1] = r[u + 1], t[2] = r[u + 2], t[3] = r[u + 3], a(t, t, s), r[u] = t[0], r[u + 1] = t[1], r[u + 2] = t[2], r[u + 3] = t[3];

        return r;
      };
    }();

    exports.forEach = k;
  }, {
    "./common.js": "PxDr"
  }],
  "PXH2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = a, exports.identity = n, exports.setAxisAngle = u, exports.getAxisAngle = p, exports.multiply = c, exports.rotateX = i, exports.rotateY = x, exports.rotateZ = l, exports.calculateW = v, exports.slerp = h, exports.random = M, exports.invert = f, exports.conjugate = q, exports.fromMat3 = d, exports.fromEuler = m, exports.str = P, exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = void 0;
    var r = s(require("./common.js")),
        t = s(require("./mat3.js")),
        e = s(require("./vec3.js")),
        o = s(require("./vec4.js"));

    function s(r) {
      if (r && r.__esModule) return r;
      var t = {};
      if (null != r) for (var e in r) if (Object.prototype.hasOwnProperty.call(r, e)) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(r, e) : {};
        o.get || o.set ? Object.defineProperty(t, e, o) : t[e] = r[e];
      }
      return t.default = r, t;
    }

    function a() {
      var t = new r.ARRAY_TYPE(4);
      return r.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t;
    }

    function n(r) {
      return r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r;
    }

    function u(r, t, e) {
      e *= .5;
      var o = Math.sin(e);
      return r[0] = o * t[0], r[1] = o * t[1], r[2] = o * t[2], r[3] = Math.cos(e), r;
    }

    function p(t, e) {
      var o = 2 * Math.acos(e[3]),
          s = Math.sin(o / 2);
      return s > r.EPSILON ? (t[0] = e[0] / s, t[1] = e[1] / s, t[2] = e[2] / s) : (t[0] = 1, t[1] = 0, t[2] = 0), o;
    }

    function c(r, t, e) {
      var o = t[0],
          s = t[1],
          a = t[2],
          n = t[3],
          u = e[0],
          p = e[1],
          c = e[2],
          i = e[3];
      return r[0] = o * i + n * u + s * c - a * p, r[1] = s * i + n * p + a * u - o * c, r[2] = a * i + n * c + o * p - s * u, r[3] = n * i - o * u - s * p - a * c, r;
    }

    function i(r, t, e) {
      e *= .5;
      var o = t[0],
          s = t[1],
          a = t[2],
          n = t[3],
          u = Math.sin(e),
          p = Math.cos(e);
      return r[0] = o * p + n * u, r[1] = s * p + a * u, r[2] = a * p - s * u, r[3] = n * p - o * u, r;
    }

    function x(r, t, e) {
      e *= .5;
      var o = t[0],
          s = t[1],
          a = t[2],
          n = t[3],
          u = Math.sin(e),
          p = Math.cos(e);
      return r[0] = o * p - a * u, r[1] = s * p + n * u, r[2] = a * p + o * u, r[3] = n * p - s * u, r;
    }

    function l(r, t, e) {
      e *= .5;
      var o = t[0],
          s = t[1],
          a = t[2],
          n = t[3],
          u = Math.sin(e),
          p = Math.cos(e);
      return r[0] = o * p + s * u, r[1] = s * p - o * u, r[2] = a * p + n * u, r[3] = n * p - a * u, r;
    }

    function v(r, t) {
      var e = t[0],
          o = t[1],
          s = t[2];
      return r[0] = e, r[1] = o, r[2] = s, r[3] = Math.sqrt(Math.abs(1 - e * e - o * o - s * s)), r;
    }

    function h(t, e, o, s) {
      var a,
          n,
          u,
          p,
          c,
          i = e[0],
          x = e[1],
          l = e[2],
          v = e[3],
          h = o[0],
          M = o[1],
          f = o[2],
          q = o[3];
      return (n = i * h + x * M + l * f + v * q) < 0 && (n = -n, h = -h, M = -M, f = -f, q = -q), 1 - n > r.EPSILON ? (a = Math.acos(n), u = Math.sin(a), p = Math.sin((1 - s) * a) / u, c = Math.sin(s * a) / u) : (p = 1 - s, c = s), t[0] = p * i + c * h, t[1] = p * x + c * M, t[2] = p * l + c * f, t[3] = p * v + c * q, t;
    }

    function M(t) {
      var e = r.RANDOM(),
          o = r.RANDOM(),
          s = r.RANDOM(),
          a = Math.sqrt(1 - e),
          n = Math.sqrt(e);
      return t[0] = a * Math.sin(2 * Math.PI * o), t[1] = a * Math.cos(2 * Math.PI * o), t[2] = n * Math.sin(2 * Math.PI * s), t[3] = n * Math.cos(2 * Math.PI * s), t;
    }

    function f(r, t) {
      var e = t[0],
          o = t[1],
          s = t[2],
          a = t[3],
          n = e * e + o * o + s * s + a * a,
          u = n ? 1 / n : 0;
      return r[0] = -e * u, r[1] = -o * u, r[2] = -s * u, r[3] = a * u, r;
    }

    function q(r, t) {
      return r[0] = -t[0], r[1] = -t[1], r[2] = -t[2], r[3] = t[3], r;
    }

    function d(r, t) {
      var e,
          o = t[0] + t[4] + t[8];
      if (o > 0) e = Math.sqrt(o + 1), r[3] = .5 * e, e = .5 / e, r[0] = (t[5] - t[7]) * e, r[1] = (t[6] - t[2]) * e, r[2] = (t[1] - t[3]) * e;else {
        var s = 0;
        t[4] > t[0] && (s = 1), t[8] > t[3 * s + s] && (s = 2);
        var a = (s + 1) % 3,
            n = (s + 2) % 3;
        e = Math.sqrt(t[3 * s + s] - t[3 * a + a] - t[3 * n + n] + 1), r[s] = .5 * e, e = .5 / e, r[3] = (t[3 * a + n] - t[3 * n + a]) * e, r[a] = (t[3 * a + s] + t[3 * s + a]) * e, r[n] = (t[3 * n + s] + t[3 * s + n]) * e;
      }
      return r;
    }

    function m(r, t, e, o) {
      var s = .5 * Math.PI / 180;
      t *= s, e *= s, o *= s;
      var a = Math.sin(t),
          n = Math.cos(t),
          u = Math.sin(e),
          p = Math.cos(e),
          c = Math.sin(o),
          i = Math.cos(o);
      return r[0] = a * p * i - n * u * c, r[1] = n * u * i + a * p * c, r[2] = n * p * c - a * u * i, r[3] = n * p * i + a * u * c, r;
    }

    function P(r) {
      return "quat(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] + ")";
    }

    var A = o.clone;
    exports.clone = A;
    var O = o.fromValues;
    exports.fromValues = O;
    var g = o.copy;
    exports.copy = g;
    var y = o.set;
    exports.set = y;
    var j = o.add;
    exports.add = j;
    var E = c;
    exports.mul = E;
    var I = o.scale;
    exports.scale = I;
    var b = o.dot;
    exports.dot = b;
    var L = o.lerp;
    exports.lerp = L;
    var R = o.length;
    exports.length = R;
    var _ = R;
    exports.len = _;
    var D = o.squaredLength;
    exports.squaredLength = D;
    var N = D;
    exports.sqrLen = N;
    var V = o.normalize;
    exports.normalize = V;
    var Y = o.exactEquals;
    exports.exactEquals = Y;
    var w = o.equals;
    exports.equals = w;

    var z = function () {
      var r = e.create(),
          t = e.fromValues(1, 0, 0),
          o = e.fromValues(0, 1, 0);
      return function (s, a, n) {
        var p = e.dot(a, n);
        return p < -.999999 ? (e.cross(r, t, a), e.len(r) < 1e-6 && e.cross(r, o, a), e.normalize(r, r), u(s, r, Math.PI), s) : p > .999999 ? (s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 1, s) : (e.cross(r, a, n), s[0] = r[0], s[1] = r[1], s[2] = r[2], s[3] = 1 + p, V(s, s));
      };
    }();

    exports.rotationTo = z;

    var T = function () {
      var r = a(),
          t = a();
      return function (e, o, s, a, n, u) {
        return h(r, o, n, u), h(t, s, a, u), h(e, r, t, 2 * u * (1 - u)), e;
      };
    }();

    exports.sqlerp = T;

    var S = function () {
      var r = t.create();
      return function (t, e, o, s) {
        return r[0] = o[0], r[3] = o[1], r[6] = o[2], r[1] = s[0], r[4] = s[1], r[7] = s[2], r[2] = -e[0], r[5] = -e[1], r[8] = -e[2], V(t, d(t, r));
      };
    }();

    exports.setAxes = S;
  }, {
    "./common.js": "PxDr",
    "./mat3.js": "SRDq",
    "./vec3.js": "Ijz7",
    "./vec4.js": "QGfo"
  }],
  "BYXr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = n, exports.clone = o, exports.fromValues = s, exports.fromRotationTranslationValues = u, exports.fromRotationTranslation = p, exports.fromTranslation = i, exports.fromRotation = x, exports.fromMat4 = c, exports.copy = f, exports.identity = h, exports.set = M, exports.getDual = l, exports.setDual = P, exports.getTranslation = m, exports.translate = R, exports.rotateX = d, exports.rotateY = O, exports.rotateZ = g, exports.rotateByQuatAppend = A, exports.rotateByQuatPrepend = E, exports.rotateAroundAxis = y, exports.add = q, exports.multiply = L, exports.scale = T, exports.lerp = _, exports.invert = I, exports.conjugate = N, exports.normalize = Q, exports.str = V, exports.exactEquals = X, exports.equals = Z, exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.dot = exports.mul = exports.setReal = exports.getReal = void 0;
    var t = a(require("./common.js")),
        r = a(require("./quat.js")),
        e = a(require("./mat4.js"));

    function a(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, e) : {};
        a.get || a.set ? Object.defineProperty(r, e, a) : r[e] = t[e];
      }
      return r.default = t, r;
    }

    function n() {
      var r = new t.ARRAY_TYPE(8);
      return t.ARRAY_TYPE != Float32Array && (r[0] = 0, r[1] = 0, r[2] = 0, r[4] = 0, r[5] = 0, r[6] = 0, r[7] = 0), r[3] = 1, r;
    }

    function o(r) {
      var e = new t.ARRAY_TYPE(8);
      return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e[4] = r[4], e[5] = r[5], e[6] = r[6], e[7] = r[7], e;
    }

    function s(r, e, a, n, o, s, u, p) {
      var i = new t.ARRAY_TYPE(8);
      return i[0] = r, i[1] = e, i[2] = a, i[3] = n, i[4] = o, i[5] = s, i[6] = u, i[7] = p, i;
    }

    function u(r, e, a, n, o, s, u) {
      var p = new t.ARRAY_TYPE(8);
      p[0] = r, p[1] = e, p[2] = a, p[3] = n;
      var i = .5 * o,
          x = .5 * s,
          c = .5 * u;
      return p[4] = i * n + x * a - c * e, p[5] = x * n + c * r - i * a, p[6] = c * n + i * e - x * r, p[7] = -i * r - x * e - c * a, p;
    }

    function p(t, r, e) {
      var a = .5 * e[0],
          n = .5 * e[1],
          o = .5 * e[2],
          s = r[0],
          u = r[1],
          p = r[2],
          i = r[3];
      return t[0] = s, t[1] = u, t[2] = p, t[3] = i, t[4] = a * i + n * p - o * u, t[5] = n * i + o * s - a * p, t[6] = o * i + a * u - n * s, t[7] = -a * s - n * u - o * p, t;
    }

    function i(t, r) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * r[0], t[5] = .5 * r[1], t[6] = .5 * r[2], t[7] = 0, t;
    }

    function x(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t;
    }

    function c(a, n) {
      var o = r.create();
      e.getRotation(o, n);
      var s = new t.ARRAY_TYPE(3);
      return e.getTranslation(s, n), p(a, o, s), a;
    }

    function f(t, r) {
      return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t;
    }

    function h(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t;
    }

    function M(t, r, e, a, n, o, s, u, p) {
      return t[0] = r, t[1] = e, t[2] = a, t[3] = n, t[4] = o, t[5] = s, t[6] = u, t[7] = p, t;
    }

    var v = r.copy;

    function l(t, r) {
      return t[0] = r[4], t[1] = r[5], t[2] = r[6], t[3] = r[7], t;
    }

    exports.getReal = v;
    var b = r.copy;

    function P(t, r) {
      return t[4] = r[0], t[5] = r[1], t[6] = r[2], t[7] = r[3], t;
    }

    function m(t, r) {
      var e = r[4],
          a = r[5],
          n = r[6],
          o = r[7],
          s = -r[0],
          u = -r[1],
          p = -r[2],
          i = r[3];
      return t[0] = 2 * (e * i + o * s + a * p - n * u), t[1] = 2 * (a * i + o * u + n * s - e * p), t[2] = 2 * (n * i + o * p + e * u - a * s), t;
    }

    function R(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = .5 * e[0],
          p = .5 * e[1],
          i = .5 * e[2],
          x = r[4],
          c = r[5],
          f = r[6],
          h = r[7];
      return t[0] = a, t[1] = n, t[2] = o, t[3] = s, t[4] = s * u + n * i - o * p + x, t[5] = s * p + o * u - a * i + c, t[6] = s * i + a * p - n * u + f, t[7] = -a * u - n * p - o * i + h, t;
    }

    function d(t, e, a) {
      var n = -e[0],
          o = -e[1],
          s = -e[2],
          u = e[3],
          p = e[4],
          i = e[5],
          x = e[6],
          c = e[7],
          f = p * u + c * n + i * s - x * o,
          h = i * u + c * o + x * n - p * s,
          M = x * u + c * s + p * o - i * n,
          v = c * u - p * n - i * o - x * s;
      return r.rotateX(t, e, a), n = t[0], o = t[1], s = t[2], u = t[3], t[4] = f * u + v * n + h * s - M * o, t[5] = h * u + v * o + M * n - f * s, t[6] = M * u + v * s + f * o - h * n, t[7] = v * u - f * n - h * o - M * s, t;
    }

    function O(t, e, a) {
      var n = -e[0],
          o = -e[1],
          s = -e[2],
          u = e[3],
          p = e[4],
          i = e[5],
          x = e[6],
          c = e[7],
          f = p * u + c * n + i * s - x * o,
          h = i * u + c * o + x * n - p * s,
          M = x * u + c * s + p * o - i * n,
          v = c * u - p * n - i * o - x * s;
      return r.rotateY(t, e, a), n = t[0], o = t[1], s = t[2], u = t[3], t[4] = f * u + v * n + h * s - M * o, t[5] = h * u + v * o + M * n - f * s, t[6] = M * u + v * s + f * o - h * n, t[7] = v * u - f * n - h * o - M * s, t;
    }

    function g(t, e, a) {
      var n = -e[0],
          o = -e[1],
          s = -e[2],
          u = e[3],
          p = e[4],
          i = e[5],
          x = e[6],
          c = e[7],
          f = p * u + c * n + i * s - x * o,
          h = i * u + c * o + x * n - p * s,
          M = x * u + c * s + p * o - i * n,
          v = c * u - p * n - i * o - x * s;
      return r.rotateZ(t, e, a), n = t[0], o = t[1], s = t[2], u = t[3], t[4] = f * u + v * n + h * s - M * o, t[5] = h * u + v * o + M * n - f * s, t[6] = M * u + v * s + f * o - h * n, t[7] = v * u - f * n - h * o - M * s, t;
    }

    function A(t, r, e) {
      var a = e[0],
          n = e[1],
          o = e[2],
          s = e[3],
          u = r[0],
          p = r[1],
          i = r[2],
          x = r[3];
      return t[0] = u * s + x * a + p * o - i * n, t[1] = p * s + x * n + i * a - u * o, t[2] = i * s + x * o + u * n - p * a, t[3] = x * s - u * a - p * n - i * o, u = r[4], p = r[5], i = r[6], x = r[7], t[4] = u * s + x * a + p * o - i * n, t[5] = p * s + x * n + i * a - u * o, t[6] = i * s + x * o + u * n - p * a, t[7] = x * s - u * a - p * n - i * o, t;
    }

    function E(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = e[0],
          p = e[1],
          i = e[2],
          x = e[3];
      return t[0] = a * x + s * u + n * i - o * p, t[1] = n * x + s * p + o * u - a * i, t[2] = o * x + s * i + a * p - n * u, t[3] = s * x - a * u - n * p - o * i, u = e[4], p = e[5], i = e[6], x = e[7], t[4] = a * x + s * u + n * i - o * p, t[5] = n * x + s * p + o * u - a * i, t[6] = o * x + s * i + a * p - n * u, t[7] = s * x - a * u - n * p - o * i, t;
    }

    function y(r, e, a, n) {
      if (Math.abs(n) < t.EPSILON) return f(r, e);
      var o = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
      n *= .5;
      var s = Math.sin(n),
          u = s * a[0] / o,
          p = s * a[1] / o,
          i = s * a[2] / o,
          x = Math.cos(n),
          c = e[0],
          h = e[1],
          M = e[2],
          v = e[3];
      r[0] = c * x + v * u + h * i - M * p, r[1] = h * x + v * p + M * u - c * i, r[2] = M * x + v * i + c * p - h * u, r[3] = v * x - c * u - h * p - M * i;
      var l = e[4],
          b = e[5],
          P = e[6],
          m = e[7];
      return r[4] = l * x + m * u + b * i - P * p, r[5] = b * x + m * p + P * u - l * i, r[6] = P * x + m * i + l * p - b * u, r[7] = m * x - l * u - b * p - P * i, r;
    }

    function q(t, r, e) {
      return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], t[4] = r[4] + e[4], t[5] = r[5] + e[5], t[6] = r[6] + e[6], t[7] = r[7] + e[7], t;
    }

    function L(t, r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = e[4],
          p = e[5],
          i = e[6],
          x = e[7],
          c = r[4],
          f = r[5],
          h = r[6],
          M = r[7],
          v = e[0],
          l = e[1],
          b = e[2],
          P = e[3];
      return t[0] = a * P + s * v + n * b - o * l, t[1] = n * P + s * l + o * v - a * b, t[2] = o * P + s * b + a * l - n * v, t[3] = s * P - a * v - n * l - o * b, t[4] = a * x + s * u + n * i - o * p + c * P + M * v + f * b - h * l, t[5] = n * x + s * p + o * u - a * i + f * P + M * l + h * v - c * b, t[6] = o * x + s * i + a * p - n * u + h * P + M * b + c * l - f * v, t[7] = s * x - a * u - n * p - o * i + M * P - c * v - f * l - h * b, t;
    }

    exports.setReal = b;
    var Y = L;

    function T(t, r, e) {
      return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, t[5] = r[5] * e, t[6] = r[6] * e, t[7] = r[7] * e, t;
    }

    exports.mul = Y;
    var j = r.dot;

    function _(t, r, e, a) {
      var n = 1 - a;
      return j(r, e) < 0 && (a = -a), t[0] = r[0] * n + e[0] * a, t[1] = r[1] * n + e[1] * a, t[2] = r[2] * n + e[2] * a, t[3] = r[3] * n + e[3] * a, t[4] = r[4] * n + e[4] * a, t[5] = r[5] * n + e[5] * a, t[6] = r[6] * n + e[6] * a, t[7] = r[7] * n + e[7] * a, t;
    }

    function I(t, r) {
      var e = D(r);
      return t[0] = -r[0] / e, t[1] = -r[1] / e, t[2] = -r[2] / e, t[3] = r[3] / e, t[4] = -r[4] / e, t[5] = -r[5] / e, t[6] = -r[6] / e, t[7] = r[7] / e, t;
    }

    function N(t, r) {
      return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t[3] = r[3], t[4] = -r[4], t[5] = -r[5], t[6] = -r[6], t[7] = r[7], t;
    }

    exports.dot = j;
    var S = r.length;
    exports.length = S;
    var w = S;
    exports.len = w;
    var D = r.squaredLength;
    exports.squaredLength = D;
    var B = D;

    function Q(t, r) {
      var e = D(r);

      if (e > 0) {
        e = Math.sqrt(e);
        var a = r[0] / e,
            n = r[1] / e,
            o = r[2] / e,
            s = r[3] / e,
            u = r[4],
            p = r[5],
            i = r[6],
            x = r[7],
            c = a * u + n * p + o * i + s * x;
        t[0] = a, t[1] = n, t[2] = o, t[3] = s, t[4] = (u - a * c) / e, t[5] = (p - n * c) / e, t[6] = (i - o * c) / e, t[7] = (x - s * c) / e;
      }

      return t;
    }

    function V(t) {
      return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")";
    }

    function X(t, r) {
      return t[0] === r[0] && t[1] === r[1] && t[2] === r[2] && t[3] === r[3] && t[4] === r[4] && t[5] === r[5] && t[6] === r[6] && t[7] === r[7];
    }

    function Z(r, e) {
      var a = r[0],
          n = r[1],
          o = r[2],
          s = r[3],
          u = r[4],
          p = r[5],
          i = r[6],
          x = r[7],
          c = e[0],
          f = e[1],
          h = e[2],
          M = e[3],
          v = e[4],
          l = e[5],
          b = e[6],
          P = e[7];
      return Math.abs(a - c) <= t.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(n - f) <= t.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(o - h) <= t.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(s - M) <= t.EPSILON * Math.max(1, Math.abs(s), Math.abs(M)) && Math.abs(u - v) <= t.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(p - l) <= t.EPSILON * Math.max(1, Math.abs(p), Math.abs(l)) && Math.abs(i - b) <= t.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(x - P) <= t.EPSILON * Math.max(1, Math.abs(x), Math.abs(P));
    }

    exports.sqrLen = B;
  }, {
    "./common.js": "PxDr",
    "./quat.js": "PXH2",
    "./mat4.js": "9Wdl"
  }],
  "28cH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.create = e, exports.clone = n, exports.fromValues = o, exports.copy = a, exports.set = s, exports.add = u, exports.subtract = i, exports.multiply = c, exports.divide = p, exports.ceil = x, exports.floor = f, exports.min = v, exports.max = h, exports.round = M, exports.scale = l, exports.scaleAndAdd = d, exports.distance = m, exports.squaredDistance = b, exports.length = q, exports.squaredLength = P, exports.negate = A, exports.inverse = O, exports.normalize = y, exports.dot = g, exports.cross = E, exports.lerp = R, exports.random = Y, exports.transformMat2 = _, exports.transformMat2d = j, exports.transformMat3 = w, exports.transformMat4 = D, exports.rotate = L, exports.angle = I, exports.zero = T, exports.str = N, exports.exactEquals = z, exports.equals = S, exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = void 0;
    var r = t(require("./common.js"));

    function t(r) {
      if (r && r.__esModule) return r;
      var t = {};
      if (null != r) for (var e in r) if (Object.prototype.hasOwnProperty.call(r, e)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(r, e) : {};
        n.get || n.set ? Object.defineProperty(t, e, n) : t[e] = r[e];
      }
      return t.default = r, t;
    }

    function e() {
      var t = new r.ARRAY_TYPE(2);
      return r.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0), t;
    }

    function n(t) {
      var e = new r.ARRAY_TYPE(2);
      return e[0] = t[0], e[1] = t[1], e;
    }

    function o(t, e) {
      var n = new r.ARRAY_TYPE(2);
      return n[0] = t, n[1] = e, n;
    }

    function a(r, t) {
      return r[0] = t[0], r[1] = t[1], r;
    }

    function s(r, t, e) {
      return r[0] = t, r[1] = e, r;
    }

    function u(r, t, e) {
      return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
    }

    function i(r, t, e) {
      return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
    }

    function c(r, t, e) {
      return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
    }

    function p(r, t, e) {
      return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
    }

    function x(r, t) {
      return r[0] = Math.ceil(t[0]), r[1] = Math.ceil(t[1]), r;
    }

    function f(r, t) {
      return r[0] = Math.floor(t[0]), r[1] = Math.floor(t[1]), r;
    }

    function v(r, t, e) {
      return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
    }

    function h(r, t, e) {
      return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
    }

    function M(r, t) {
      return r[0] = Math.round(t[0]), r[1] = Math.round(t[1]), r;
    }

    function l(r, t, e) {
      return r[0] = t[0] * e, r[1] = t[1] * e, r;
    }

    function d(r, t, e, n) {
      return r[0] = t[0] + e[0] * n, r[1] = t[1] + e[1] * n, r;
    }

    function m(r, t) {
      var e = t[0] - r[0],
          n = t[1] - r[1];
      return Math.sqrt(e * e + n * n);
    }

    function b(r, t) {
      var e = t[0] - r[0],
          n = t[1] - r[1];
      return e * e + n * n;
    }

    function q(r) {
      var t = r[0],
          e = r[1];
      return Math.sqrt(t * t + e * e);
    }

    function P(r) {
      var t = r[0],
          e = r[1];
      return t * t + e * e;
    }

    function A(r, t) {
      return r[0] = -t[0], r[1] = -t[1], r;
    }

    function O(r, t) {
      return r[0] = 1 / t[0], r[1] = 1 / t[1], r;
    }

    function y(r, t) {
      var e = t[0],
          n = t[1],
          o = e * e + n * n;
      return o > 0 && (o = 1 / Math.sqrt(o)), r[0] = t[0] * o, r[1] = t[1] * o, r;
    }

    function g(r, t) {
      return r[0] * t[0] + r[1] * t[1];
    }

    function E(r, t, e) {
      var n = t[0] * e[1] - t[1] * e[0];
      return r[0] = r[1] = 0, r[2] = n, r;
    }

    function R(r, t, e, n) {
      var o = t[0],
          a = t[1];
      return r[0] = o + n * (e[0] - o), r[1] = a + n * (e[1] - a), r;
    }

    function Y(t, e) {
      e = e || 1;
      var n = 2 * r.RANDOM() * Math.PI;
      return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t;
    }

    function _(r, t, e) {
      var n = t[0],
          o = t[1];
      return r[0] = e[0] * n + e[2] * o, r[1] = e[1] * n + e[3] * o, r;
    }

    function j(r, t, e) {
      var n = t[0],
          o = t[1];
      return r[0] = e[0] * n + e[2] * o + e[4], r[1] = e[1] * n + e[3] * o + e[5], r;
    }

    function w(r, t, e) {
      var n = t[0],
          o = t[1];
      return r[0] = e[0] * n + e[3] * o + e[6], r[1] = e[1] * n + e[4] * o + e[7], r;
    }

    function D(r, t, e) {
      var n = t[0],
          o = t[1];
      return r[0] = e[0] * n + e[4] * o + e[12], r[1] = e[1] * n + e[5] * o + e[13], r;
    }

    function L(r, t, e, n) {
      var o = t[0] - e[0],
          a = t[1] - e[1],
          s = Math.sin(n),
          u = Math.cos(n);
      return r[0] = o * u - a * s + e[0], r[1] = o * s + a * u + e[1], r;
    }

    function I(r, t) {
      var e = r[0],
          n = r[1],
          o = t[0],
          a = t[1],
          s = e * e + n * n;
      s > 0 && (s = 1 / Math.sqrt(s));
      var u = o * o + a * a;
      u > 0 && (u = 1 / Math.sqrt(u));
      var i = (e * o + n * a) * s * u;
      return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
    }

    function T(r) {
      return r[0] = 0, r[1] = 0, r;
    }

    function N(r) {
      return "vec2(" + r[0] + ", " + r[1] + ")";
    }

    function z(r, t) {
      return r[0] === t[0] && r[1] === t[1];
    }

    function S(t, e) {
      var n = t[0],
          o = t[1],
          a = e[0],
          s = e[1];
      return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s));
    }

    var F = q;
    exports.len = F;
    var V = i;
    exports.sub = V;
    var k = c;
    exports.mul = k;
    var B = p;
    exports.div = B;
    var C = m;
    exports.dist = C;
    var G = b;
    exports.sqrDist = G;
    var H = P;
    exports.sqrLen = H;

    var J = function () {
      var r = e();
      return function (t, e, n, o, a, s) {
        var u, i;

        for (e || (e = 2), n || (n = 0), i = o ? Math.min(o * e + n, t.length) : t.length, u = n; u < i; u += e) r[0] = t[u], r[1] = t[u + 1], a(r, r, s), t[u] = r[0], t[u + 1] = r[1];

        return t;
      };
    }();

    exports.forEach = J;
  }, {
    "./common.js": "PxDr"
  }],
  "C+pl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0;
    var e = x(require("./common.js"));
    exports.glMatrix = e;
    var r = x(require("./mat2.js"));
    exports.mat2 = r;
    var t = x(require("./mat2d.js"));
    exports.mat2d = t;
    var s = x(require("./mat3.js"));
    exports.mat3 = s;
    var o = x(require("./mat4.js"));
    exports.mat4 = o;
    var a = x(require("./quat.js"));
    exports.quat = a;
    var p = x(require("./quat2.js"));
    exports.quat2 = p;
    var u = x(require("./vec2.js"));
    exports.vec2 = u;
    var i = x(require("./vec3.js"));
    exports.vec3 = i;
    var v = x(require("./vec4.js"));

    function x(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var s = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        s.get || s.set ? Object.defineProperty(r, t, s) : r[t] = e[t];
      }
      return r.default = e, r;
    }

    exports.vec4 = v;
  }, {
    "./common.js": "PxDr",
    "./mat2.js": "hSOw",
    "./mat2d.js": "n7Ma",
    "./mat3.js": "SRDq",
    "./mat4.js": "9Wdl",
    "./quat.js": "PXH2",
    "./quat2.js": "BYXr",
    "./vec2.js": "28cH",
    "./vec3.js": "Ijz7",
    "./vec4.js": "QGfo"
  }],
  "Focm": [function (require, module, exports) {
    "use strict";

    var A = require("gl-matrix"),
        g = {
      vertex: [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]
    },
        e = "#version 300 es\nin vec3 vertex;\n// in vec4 color;\n\nout vec4 vColor;\nout vec2 tCoord;\n\nuniform mat4 trans;\nuniform mat4 proj;\n\nvoid main() {\n  gl_Position = proj * trans * vec4(vertex, 1);\n // vColor = color;\n  tCoord = 1.0f*vertex.xy/2.0f + 0.5f;\n}",
        f = "#version 300 es\nprecision mediump float;\n//in vec4 vColor;\nin vec2 tCoord;\nout vec4 FragColor;\n\nuniform sampler2D texSample;\n\nvoid main() {\n  // FragColor = vColor;\n  FragColor = texture(texSample, tCoord);\n  // FragColor = vec4(1);\n  if(FragColor.a < 0.5f)\n    discard;\n}",
        B = document.createElement("canvas");

    B.width = document.body.clientWidth, B.height = document.body.clientHeight, document.querySelector("body").appendChild(B);
    var r = B.getContext("webgl2");
    r || alert("couldn't init webgl2.0"), r.viewport(0, 0, r.canvas.width, r.canvas.height), window.onresize = function () {
      B.width = document.body.clientWidth, B.height = document.body.clientHeight, r.viewport(0, 0, r.canvas.width, r.canvas.height);
    };
    var P = g.vertex,
        C = new Float32Array(P),
        w = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, w), r.bufferData(r.ARRAY_BUFFER, C, r.STATIC_DRAW);
    var v = r.createShader(r.VERTEX_SHADER);
    r.shaderSource(v, e), r.compileShader(v);
    var Q = r.createShader(r.FRAGMENT_SHADER);
    r.shaderSource(Q, f), r.compileShader(Q), r.getShaderParameter(v, r.COMPILE_STATUS) || alert(r.getShaderInfoLog(v)), r.getShaderParameter(Q, r.COMPILE_STATUS) || alert(r.getShaderInfoLog(Q));
    var n = r.createProgram();
    r.attachShader(n, v), r.attachShader(n, Q), r.linkProgram(n), r.deleteShader(v), r.deleteShader(Q);
    var D = r.createVertexArray(),
        c = r.getAttribLocation(n, "vertex");
    r.bindVertexArray(D), r.bindBuffer(r.ARRAY_BUFFER, w), r.enableVertexAttribArray(c), r.vertexAttribPointer(c, 3, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, null);
    var E = g.indices,
        I = new Uint16Array(E),
        o = r.createBuffer();
    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, o), r.bufferData(r.ELEMENT_ARRAY_BUFFER, I, r.STATIC_DRAW), r.disableVertexAttribArray(c), r.bindVertexArray(null);
    var t,
        X = new Image();
    X.onload = function () {
      t = r.createTexture(), r.bindTexture(r.TEXTURE_2D, t), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, X), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.generateMipmap(r.TEXTURE_2D);
    }, X.src = "data:image/png;base64,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", r.useProgram(n);
    var u = r.getUniformLocation(n, "texSample"),
        H = r.getUniformLocation(n, "proj"),
        y = r.getUniformLocation(n, "trans");
    r.uniform1i(u, 0);
    var i = A.mat4.create();
    A.mat4.perspective(i, 45, 1.8, .1, 1e3), r.uniformMatrix4fv(H, !1, i);
    var l = A.mat4.create();

    function a(g) {
      r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT), r.useProgram(n);
      Math.sin(g / 1e3 * 1.5), Math.cos(g / 1e3 * 1.5);
      A.mat4.identity(l), A.mat4.translate(l, l, [0, 0, -5]), A.mat4.rotateY(l, l, g / 1e3 * 1.5 * .5), r.uniformMatrix4fv(y, !1, l), r.bindTexture(r.TEXTURE_2D, t), r.activeTexture(r.TEXTURE0), r.bindVertexArray(D), r.enableVertexAttribArray(c), r.drawElements(r.TRIANGLES, 36, r.UNSIGNED_SHORT, 0);
    }

    function T(A) {
      a(A), window.requestAnimationFrame(T);
    }

    A.mat4.translate(l, l, [0, 0, -5]), r.uniformMatrix4fv(y, !1, l), r.enable(r.DEPTH_TEST), T(0);
  }, {
    "gl-matrix": "C+pl"
  }]
}, {}, ["Focm"], null);