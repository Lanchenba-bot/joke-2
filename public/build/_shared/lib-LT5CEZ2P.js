import {
  BasePlugin,
  has,
  require_namespace_emitter,
  require_throttle
} from "/build/_shared/chunk-IS66ZX3I.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/requires-port@1.0.0/node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/.pnpm/requires-port@1.0.0/node_modules/requires-port/index.js"(exports, module) {
    "use strict";
    module.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/.pnpm/querystringify@2.2.0/node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/.pnpm/querystringify@2.2.0/node_modules/querystringify/index.js"(exports) {
    "use strict";
    var has2 = Object.prototype.hasOwnProperty;
    var undef;
    function decode2(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function encode2(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode2(part[1]), value = decode2(part[2]);
        if (key === null || value === null || key in result)
          continue;
        result[key] = value;
      }
      return result;
    }
    function querystringify(obj, prefix) {
      prefix = prefix || "";
      var pairs = [], value, key;
      if ("string" !== typeof prefix)
        prefix = "?";
      for (key in obj) {
        if (has2.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key = encode2(key);
          value = encode2(value);
          if (key === null || value === null)
            continue;
          pairs.push(key + "=" + value);
        }
      }
      return pairs.length ? prefix + pairs.join("&") : "";
    }
    exports.stringify = querystringify;
    exports.parse = querystring;
  }
});

// node_modules/.pnpm/url-parse@1.5.10/node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/.pnpm/url-parse@1.5.10/node_modules/url-parse/index.js"(exports, module) {
    "use strict";
    var required = require_requires_port();
    var qs = require_querystringify();
    var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
    var CRHTLF = /[\n\r\t]/g;
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var port = /:\d+$/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
    var windowsDriveLetter = /^[a-zA-Z]:/;
    function trimLeft(str) {
      return (str ? str : "").toString().replace(controlOrWhitespace, "");
    }
    var rules = [
      ["#", "hash"],
      // Extract from the back.
      ["?", "query"],
      // Extract from the back.
      function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
      },
      ["/", "pathname"],
      // Extract from the back.
      ["@", "auth", 1],
      // Extract from the front.
      [NaN, "host", void 0, 1, 1],
      // Set left over value.
      [/:(\d*)$/, "port", void 0, 1],
      // RegExp the back.
      [NaN, "hostname", void 0, 1, 1]
      // Set left over.
    ];
    var ignore = { hash: 1, query: 1 };
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof globalThis !== "undefined")
        globalVar = globalThis;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {}, type = typeof loc, key;
      if ("blob:" === loc.protocol) {
        finaldestination = new Url(unescape(loc.pathname), {});
      } else if ("string" === type) {
        finaldestination = new Url(loc, {});
        for (key in ignore)
          delete finaldestination[key];
      } else if ("object" === type) {
        for (key in loc) {
          if (key in ignore)
            continue;
          finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function isSpecial(scheme) {
      return scheme === "file:" || scheme === "ftp:" || scheme === "http:" || scheme === "https:" || scheme === "ws:" || scheme === "wss:";
    }
    function extractProtocol(address, location) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      location = location || {};
      var match = protocolre.exec(address);
      var protocol = match[1] ? match[1].toLowerCase() : "";
      var forwardSlashes = !!match[2];
      var otherSlashes = !!match[3];
      var slashesCount = 0;
      var rest;
      if (forwardSlashes) {
        if (otherSlashes) {
          rest = match[2] + match[3] + match[4];
          slashesCount = match[2].length + match[3].length;
        } else {
          rest = match[2] + match[4];
          slashesCount = match[2].length;
        }
      } else {
        if (otherSlashes) {
          rest = match[3] + match[4];
          slashesCount = match[3].length;
        } else {
          rest = match[4];
        }
      }
      if (protocol === "file:") {
        if (slashesCount >= 2) {
          rest = rest.slice(2);
        }
      } else if (isSpecial(protocol)) {
        rest = match[4];
      } else if (protocol) {
        if (forwardSlashes) {
          rest = rest.slice(2);
        }
      } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
      }
      return {
        protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount,
        rest
      };
    }
    function resolve(relative, base) {
      if (relative === "")
        return base;
      var path = (base || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path[i] === ".") {
          path.splice(i, 1);
        } else if (path[i] === "..") {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path.unshift("");
      if (last === "." || last === "..")
        path.push("");
      return path.join("/");
    }
    function Url(address, location, parser) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      if (!(this instanceof Url)) {
        return new Url(address, location, parser);
      }
      var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
      if ("object" !== type && "string" !== type) {
        parser = location;
        location = null;
      }
      if (parser && "function" !== typeof parser)
        parser = qs.parse;
      location = lolcation(location);
      extracted = extractProtocol(address || "", location);
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || "";
      address = extracted.rest;
      if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [/(.*)/, "pathname"];
      }
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address, url);
          continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) {
          url[key] = address;
        } else if ("string" === typeof parse) {
          index = parse === "@" ? address.lastIndexOf(parse) : address.indexOf(parse);
          if (~index) {
            if ("number" === typeof instruction[2]) {
              url[key] = address.slice(0, index);
              address = address.slice(index + instruction[2]);
            } else {
              url[key] = address.slice(index);
              address = address.slice(0, index);
            }
          }
        } else if (index = parse.exec(address)) {
          url[key] = index[1];
          address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
        if (instruction[4])
          url[key] = url[key].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve(url.pathname, location.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        index = url.auth.indexOf(":");
        if (~index) {
          url.username = url.auth.slice(0, index);
          url.username = encodeURIComponent(decodeURIComponent(url.username));
          url.password = url.auth.slice(index + 1);
          url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
          url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ":" + url.password : url.username;
      }
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if ("string" === typeof value && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (port.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        case "username":
        case "password":
          url[part] = encodeURIComponent(value);
          break;
        case "auth":
          var index = value.indexOf(":");
          if (~index) {
            url.username = value.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = value.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
          } else {
            url.username = encodeURIComponent(decodeURIComponent(value));
          }
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.auth = url.password ? url.username + ":" + url.password : url.username;
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify) {
      if (!stringify || "function" !== typeof stringify)
        stringify = qs.stringify;
      var query, url = this, host = url.host, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      } else if (url.password) {
        result += ":" + url.password;
        result += "@";
      } else if (url.protocol !== "file:" && isSpecial(url.protocol) && !host && url.pathname !== "/") {
        result += "@";
      }
      if (host[host.length - 1] === ":" || port.test(url.hostname) && !url.port) {
        host += ":";
      }
      result += host + url.pathname;
      query = "object" === typeof url.query ? stringify(url.query) : url.query;
      if (query)
        result += "?" !== query.charAt(0) ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url.prototype = { set, toString };
    Url.extractProtocol = extractProtocol;
    Url.location = lolcation;
    Url.trimLeft = trimLeft;
    Url.qs = qs;
    module.exports = Url;
  }
});

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/UploaderPlugin.js
function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}
var _queueRequestSocketToken = /* @__PURE__ */ _classPrivateFieldLooseKey("queueRequestSocketToken");
var UploaderPlugin = class extends BasePlugin {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, _queueRequestSocketToken, {
      writable: true,
      value: void 0
    });
  }
  /** @protected */
  setQueueRequestSocketToken(fn) {
    _classPrivateFieldLooseBase(this, _queueRequestSocketToken)[_queueRequestSocketToken] = fn;
  }
  async uploadRemoteFile(file, options) {
    if (options === void 0) {
      options = {};
    }
    try {
      if (file.serverToken) {
        return await this.connectToServerSocket(file);
      }
      const serverToken = await _classPrivateFieldLooseBase(this, _queueRequestSocketToken)[_queueRequestSocketToken](file).abortOn(options.signal);
      if (!this.uppy.getState().files[file.id])
        return void 0;
      this.uppy.setFileState(file.id, {
        serverToken
      });
      return await this.connectToServerSocket(this.uppy.getFile(file.id));
    } catch (err) {
      var _err$cause;
      if ((err == null ? void 0 : (_err$cause = err.cause) == null ? void 0 : _err$cause.name) === "AbortError") {
        return void 0;
      }
      this.uppy.setFileState(file.id, {
        serverToken: void 0
      });
      this.uppy.emit("upload-error", file, err);
      throw err;
    }
  }
};

// node_modules/.pnpm/js-base64@3.7.5/node_modules/js-base64/base64.mjs
var version = "3.7.5";
var VERSION = version;
var _hasatob = typeof atob === "function";
var _hasbtoa = typeof btoa === "function";
var _hasBuffer = typeof Buffer === "function";
var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var b64chs = Array.prototype.slice.call(b64ch);
var b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => tab[c] = i);
  return tab;
})(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
var btoaPolyfill = (bin) => {
  let u32, c0, c1, c2, asc = "";
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
      throw new TypeError("invalid character found");
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
  const maxargs = 4096;
  let strs = [];
  for (let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(""));
};
var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
var cb_utob = (c) => {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
  } else {
    var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
    return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
  }
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var utob = (u) => u.replace(re_utob, cb_utob);
var _encode = _hasBuffer ? (s) => Buffer.from(s, "utf8").toString("base64") : _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
var encodeURI = (src) => encode(src, true);
var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = (cccc) => {
  switch (cccc.length) {
    case 4:
      var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
      return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
    case 3:
      return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
    default:
      return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
  }
};
var btou = (b) => b.replace(re_btou, cb_btou);
var atobPolyfill = (asc) => {
  asc = asc.replace(/\s+/g, "");
  if (!b64re.test(asc))
    throw new TypeError("malformed base64.");
  asc += "==".slice(2 - (asc.length & 3));
  let u24, bin = "", r1, r2;
  for (let i = 0; i < asc.length; ) {
    u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
var _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
var toUint8Array = (a) => _toUint8Array(_unURI(a));
var _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
var decode = (src) => _decode(_unURI(src));
var isValid = (src) => {
  if (typeof src !== "string")
    return false;
  const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
var _noEnum = (v) => {
  return {
    value: v,
    enumerable: false,
    writable: true,
    configurable: true
  };
};
var extendString = function() {
  const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
  _add("fromBase64", function() {
    return decode(this);
  });
  _add("toBase64", function(urlsafe) {
    return encode(this, urlsafe);
  });
  _add("toBase64URI", function() {
    return encode(this, true);
  });
  _add("toBase64URL", function() {
    return encode(this, true);
  });
  _add("toUint8Array", function() {
    return toUint8Array(this);
  });
};
var extendUint8Array = function() {
  const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
  _add("toBase64", function(urlsafe) {
    return fromUint8Array(this, urlsafe);
  });
  _add("toBase64URI", function() {
    return fromUint8Array(this, true);
  });
  _add("toBase64URL", function() {
    return fromUint8Array(this, true);
  });
};
var extendBuiltins = () => {
  extendString();
  extendUint8Array();
};
var gBase64 = {
  version,
  VERSION,
  atob: _atob,
  atobPolyfill,
  btoa: _btoa,
  btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode,
  encodeURI,
  encodeURL: encodeURI,
  utob,
  btou,
  decode,
  isValid,
  fromUint8Array,
  toUint8Array,
  extendString,
  extendUint8Array,
  extendBuiltins
};

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/upload.js
var import_url_parse = __toESM(require_url_parse());

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/error.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var DetailedError = /* @__PURE__ */ function(_Error) {
  _inherits(DetailedError2, _Error);
  var _super = _createSuper(DetailedError2);
  function DetailedError2(message) {
    var _this;
    var causingErr = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var req = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var res = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    _classCallCheck(this, DetailedError2);
    _this = _super.call(this, message);
    _this.originalRequest = req;
    _this.originalResponse = res;
    _this.causingError = causingErr;
    if (causingErr != null) {
      message += ", caused by ".concat(causingErr.toString());
    }
    if (req != null) {
      var requestId = req.getHeader("X-Request-ID") || "n/a";
      var method = req.getMethod();
      var url = req.getURL();
      var status = res ? res.getStatus() : "n/a";
      var body = res ? res.getBody() || "" : "n/a";
      message += ", originated from request (method: ".concat(method, ", url: ").concat(url, ", response code: ").concat(status, ", response text: ").concat(body, ", request id: ").concat(requestId, ")");
    }
    _this.message = message;
    return _this;
  }
  return _createClass(DetailedError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var error_default = DetailedError;

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/logger.js
var isEnabled = false;
function log(msg) {
  if (!isEnabled)
    return;
  console.log(msg);
}

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/uuid.js
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    var v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/upload.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len2) {
  if (len2 == null || len2 > arr.length)
    len2 = arr.length;
  for (var i = 0, arr2 = new Array(len2); i < len2; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var defaultOptions = {
  endpoint: null,
  uploadUrl: null,
  metadata: {},
  fingerprint: null,
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  onUploadUrlAvailable: null,
  overridePatchMethod: false,
  headers: {},
  addRequestId: false,
  onBeforeRequest: null,
  onAfterResponse: null,
  onShouldRetry: null,
  chunkSize: Infinity,
  retryDelays: [0, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  parallelUploadBoundaries: null,
  storeFingerprintForResuming: true,
  removeFingerprintOnSuccess: false,
  uploadLengthDeferred: false,
  uploadDataDuringCreation: false,
  urlStorage: null,
  fileReader: null,
  httpStack: null
};
var BaseUpload = /* @__PURE__ */ function() {
  function BaseUpload2(file, options) {
    _classCallCheck2(this, BaseUpload2);
    if ("resume" in options) {
      console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead.");
    }
    this.options = options;
    this.options.chunkSize = Number(this.options.chunkSize);
    this._urlStorage = this.options.urlStorage;
    this.file = file;
    this.url = null;
    this._req = null;
    this._fingerprint = null;
    this._urlStorageKey = null;
    this._offset = null;
    this._aborted = false;
    this._size = null;
    this._source = null;
    this._retryAttempt = 0;
    this._retryTimeout = null;
    this._offsetBeforeRetry = 0;
    this._parallelUploads = null;
    this._parallelUploadUrls = null;
  }
  _createClass2(BaseUpload2, [{
    key: "findPreviousUploads",
    value: function findPreviousUploads() {
      var _this = this;
      return this.options.fingerprint(this.file, this.options).then(function(fingerprint2) {
        return _this._urlStorage.findUploadsByFingerprint(fingerprint2);
      });
    }
  }, {
    key: "resumeFromPreviousUpload",
    value: function resumeFromPreviousUpload(previousUpload) {
      this.url = previousUpload.uploadUrl || null;
      this._parallelUploadUrls = previousUpload.parallelUploadUrls || null;
      this._urlStorageKey = previousUpload.urlStorageKey;
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      var file = this.file;
      if (!file) {
        this._emitError(new Error("tus: no file or stream to upload provided"));
        return;
      }
      if (!this.options.endpoint && !this.options.uploadUrl && !this.url) {
        this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
        return;
      }
      var retryDelays = this.options.retryDelays;
      if (retryDelays != null && Object.prototype.toString.call(retryDelays) !== "[object Array]") {
        this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
        return;
      }
      if (this.options.parallelUploads > 1) {
        for (var _i = 0, _arr = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; _i < _arr.length; _i++) {
          var optionName = _arr[_i];
          if (this.options[optionName]) {
            this._emitError(new Error("tus: cannot use the ".concat(optionName, " option when parallelUploads is enabled")));
            return;
          }
        }
      }
      if (this.options.parallelUploadBoundaries) {
        if (this.options.parallelUploads <= 1) {
          this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));
          return;
        }
        if (this.options.parallelUploads !== this.options.parallelUploadBoundaries.length) {
          this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));
          return;
        }
      }
      this.options.fingerprint(file, this.options).then(function(fingerprint2) {
        if (fingerprint2 == null) {
          log("No fingerprint was calculated meaning that the upload cannot be stored in the URL storage.");
        } else {
          log("Calculated fingerprint: ".concat(fingerprint2));
        }
        _this2._fingerprint = fingerprint2;
        if (_this2._source) {
          return _this2._source;
        }
        return _this2.options.fileReader.openFile(file, _this2.options.chunkSize);
      }).then(function(source) {
        _this2._source = source;
        if (_this2.options.uploadLengthDeferred) {
          _this2._size = null;
        } else if (_this2.options.uploadSize != null) {
          _this2._size = Number(_this2.options.uploadSize);
          if (Number.isNaN(_this2._size)) {
            _this2._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
            return;
          }
        } else {
          _this2._size = _this2._source.size;
          if (_this2._size == null) {
            _this2._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));
            return;
          }
        }
        if (_this2.options.parallelUploads > 1 || _this2._parallelUploadUrls != null) {
          _this2._startParallelUpload();
        } else {
          _this2._startSingleUpload();
        }
      })["catch"](function(err) {
        _this2._emitError(err);
      });
    }
    /**
     * Initiate the uploading procedure for a parallelized upload, where one file is split into
     * multiple request which are run in parallel.
     *
     * @api private
     */
  }, {
    key: "_startParallelUpload",
    value: function _startParallelUpload() {
      var _this$options$paralle, _this3 = this;
      var totalSize = this._size;
      var totalProgress = 0;
      this._parallelUploads = [];
      var partCount = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads;
      var parts = (_this$options$paralle = this.options.parallelUploadBoundaries) !== null && _this$options$paralle !== void 0 ? _this$options$paralle : splitSizeIntoParts(this._source.size, partCount);
      if (this._parallelUploadUrls) {
        parts.forEach(function(part, index) {
          part.uploadUrl = _this3._parallelUploadUrls[index] || null;
        });
      }
      this._parallelUploadUrls = new Array(parts.length);
      var uploads = parts.map(function(part, index) {
        var lastPartProgress = 0;
        return _this3._source.slice(part.start, part.end).then(function(_ref) {
          var value = _ref.value;
          return new Promise(function(resolve, reject) {
            var options = _objectSpread(_objectSpread({}, _this3.options), {}, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: part.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: false,
              removeFingerprintOnSuccess: false,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              // Reset this option as we are not doing a parallel upload.
              parallelUploadBoundaries: null,
              metadata: {},
              // Add the header to indicate the this is a partial upload.
              headers: _objectSpread(_objectSpread({}, _this3.options.headers), {}, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: resolve,
              onError: reject,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function onProgress(newPartProgress) {
                totalProgress = totalProgress - lastPartProgress + newPartProgress;
                lastPartProgress = newPartProgress;
                _this3._emitProgress(totalProgress, totalSize);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function onUploadUrlAvailable() {
                _this3._parallelUploadUrls[index] = upload.url;
                if (_this3._parallelUploadUrls.filter(function(u) {
                  return Boolean(u);
                }).length === parts.length) {
                  _this3._saveUploadInUrlStorage();
                }
              }
            });
            var upload = new BaseUpload2(value, options);
            upload.start();
            _this3._parallelUploads.push(upload);
          });
        });
      });
      var req;
      Promise.all(uploads).then(function() {
        req = _this3._openRequest("POST", _this3.options.endpoint);
        req.setHeader("Upload-Concat", "final;".concat(_this3._parallelUploadUrls.join(" ")));
        var metadata = encodeMetadata(_this3.options.metadata);
        if (metadata !== "") {
          req.setHeader("Upload-Metadata", metadata);
        }
        return _this3._sendRequest(req, null);
      }).then(function(res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this3._emitHttpError(req, res, "tus: unexpected response while creating upload");
          return;
        }
        var location = res.getHeader("Location");
        if (location == null) {
          _this3._emitHttpError(req, res, "tus: invalid or missing Location header");
          return;
        }
        _this3.url = resolveUrl(_this3.options.endpoint, location);
        log("Created upload at ".concat(_this3.url));
        _this3._emitSuccess();
      })["catch"](function(err) {
        _this3._emitError(err);
      });
    }
    /**
     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
     * uploaded in a sequential matter.
     *
     * @api private
     */
  }, {
    key: "_startSingleUpload",
    value: function _startSingleUpload() {
      this._aborted = false;
      if (this.url != null) {
        log("Resuming upload from previous URL: ".concat(this.url));
        this._resumeUpload();
        return;
      }
      if (this.options.uploadUrl != null) {
        log("Resuming upload from provided URL: ".concat(this.options.uploadUrl));
        this.url = this.options.uploadUrl;
        this._resumeUpload();
        return;
      }
      log("Creating a new upload");
      this._createUpload();
    }
    /**
     * Abort any running request and stop the current upload. After abort is called, no event
     * handler will be invoked anymore. You can use the `start` method to resume the upload
     * again.
     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
     * current upload from the server.
     *
     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
     */
  }, {
    key: "abort",
    value: function abort(shouldTerminate) {
      var _this4 = this;
      if (this._parallelUploads != null) {
        this._parallelUploads.forEach(function(upload) {
          upload.abort(shouldTerminate);
        });
      }
      if (this._req !== null) {
        this._req.abort();
      }
      this._aborted = true;
      if (this._retryTimeout != null) {
        clearTimeout(this._retryTimeout);
        this._retryTimeout = null;
      }
      if (!shouldTerminate || this.url == null) {
        return Promise.resolve();
      }
      return BaseUpload2.terminate(this.url, this.options).then(function() {
        return _this4._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function _emitHttpError(req, res, message, causingErr) {
      this._emitError(new error_default(message, causingErr, req, res));
    }
  }, {
    key: "_emitError",
    value: function _emitError(err) {
      var _this5 = this;
      if (this._aborted)
        return;
      if (this.options.retryDelays != null) {
        var shouldResetDelays = this._offset != null && this._offset > this._offsetBeforeRetry;
        if (shouldResetDelays) {
          this._retryAttempt = 0;
        }
        if (shouldRetry(err, this._retryAttempt, this.options)) {
          var delay = this.options.retryDelays[this._retryAttempt++];
          this._offsetBeforeRetry = this._offset;
          this._retryTimeout = setTimeout(function() {
            _this5.start();
          }, delay);
          return;
        }
      }
      if (typeof this.options.onError === "function") {
        this.options.onError(err);
      } else {
        throw err;
      }
    }
    /**
     * Publishes notification if the upload has been successfully completed.
     *
     * @api private
     */
  }, {
    key: "_emitSuccess",
    value: function _emitSuccess() {
      if (this.options.removeFingerprintOnSuccess) {
        this._removeFromUrlStorage();
      }
      if (typeof this.options.onSuccess === "function") {
        this.options.onSuccess();
      }
    }
    /**
     * Publishes notification when data has been sent to the server. This
     * data may not have been accepted by the server yet.
     *
     * @param {number} bytesSent  Number of bytes sent to the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitProgress",
    value: function _emitProgress(bytesSent, bytesTotal) {
      if (typeof this.options.onProgress === "function") {
        this.options.onProgress(bytesSent, bytesTotal);
      }
    }
    /**
     * Publishes notification when a chunk of data has been sent to the server
     * and accepted by the server.
     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
     * @param {number} bytesAccepted Total number of bytes that have been
     *                                accepted by the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitChunkComplete",
    value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
      if (typeof this.options.onChunkComplete === "function") {
        this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
      }
    }
    /**
     * Create a new upload using the creation extension by sending a POST
     * request to the endpoint. After successful creation the file will be
     * uploaded
     *
     * @api private
     */
  }, {
    key: "_createUpload",
    value: function _createUpload() {
      var _this6 = this;
      if (!this.options.endpoint) {
        this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
        return;
      }
      var req = this._openRequest("POST", this.options.endpoint);
      if (this.options.uploadLengthDeferred) {
        req.setHeader("Upload-Defer-Length", 1);
      } else {
        req.setHeader("Upload-Length", this._size);
      }
      var metadata = encodeMetadata(this.options.metadata);
      if (metadata !== "") {
        req.setHeader("Upload-Metadata", metadata);
      }
      var promise;
      if (this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred) {
        this._offset = 0;
        promise = this._addChunkToRequest(req);
      } else {
        promise = this._sendRequest(req, null);
      }
      promise.then(function(res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this6._emitHttpError(req, res, "tus: unexpected response while creating upload");
          return;
        }
        var location = res.getHeader("Location");
        if (location == null) {
          _this6._emitHttpError(req, res, "tus: invalid or missing Location header");
          return;
        }
        _this6.url = resolveUrl(_this6.options.endpoint, location);
        log("Created upload at ".concat(_this6.url));
        if (typeof _this6.options.onUploadUrlAvailable === "function") {
          _this6.options.onUploadUrlAvailable();
        }
        if (_this6._size === 0) {
          _this6._emitSuccess();
          _this6._source.close();
          return;
        }
        _this6._saveUploadInUrlStorage().then(function() {
          if (_this6.options.uploadDataDuringCreation) {
            _this6._handleUploadResponse(req, res);
          } else {
            _this6._offset = 0;
            _this6._performUpload();
          }
        });
      })["catch"](function(err) {
        _this6._emitHttpError(req, null, "tus: failed to create upload", err);
      });
    }
    /*
     * Try to resume an existing upload. First a HEAD request will be sent
     * to retrieve the offset. If the request fails a new upload will be
     * created. In the case of a successful response the file will be uploaded.
     *
     * @api private
     */
  }, {
    key: "_resumeUpload",
    value: function _resumeUpload() {
      var _this7 = this;
      var req = this._openRequest("HEAD", this.url);
      var promise = this._sendRequest(req, null);
      promise.then(function(res) {
        var status = res.getStatus();
        if (!inStatusCategory(status, 200)) {
          if (status === 423) {
            _this7._emitHttpError(req, res, "tus: upload is currently locked; retry later");
            return;
          }
          if (inStatusCategory(status, 400)) {
            _this7._removeFromUrlStorage();
          }
          if (!_this7.options.endpoint) {
            _this7._emitHttpError(req, res, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
            return;
          }
          _this7.url = null;
          _this7._createUpload();
          return;
        }
        var offset = parseInt(res.getHeader("Upload-Offset"), 10);
        if (Number.isNaN(offset)) {
          _this7._emitHttpError(req, res, "tus: invalid or missing offset value");
          return;
        }
        var length = parseInt(res.getHeader("Upload-Length"), 10);
        if (Number.isNaN(length) && !_this7.options.uploadLengthDeferred) {
          _this7._emitHttpError(req, res, "tus: invalid or missing length value");
          return;
        }
        if (typeof _this7.options.onUploadUrlAvailable === "function") {
          _this7.options.onUploadUrlAvailable();
        }
        _this7._saveUploadInUrlStorage().then(function() {
          if (offset === length) {
            _this7._emitProgress(length, length);
            _this7._emitSuccess();
            return;
          }
          _this7._offset = offset;
          _this7._performUpload();
        });
      })["catch"](function(err) {
        _this7._emitHttpError(req, null, "tus: failed to resume upload", err);
      });
    }
    /**
     * Start uploading the file using PATCH requests. The file will be divided
     * into chunks as specified in the chunkSize option. During the upload
     * the onProgress event handler may be invoked multiple times.
     *
     * @api private
     */
  }, {
    key: "_performUpload",
    value: function _performUpload() {
      var _this8 = this;
      if (this._aborted) {
        return;
      }
      var req;
      if (this.options.overridePatchMethod) {
        req = this._openRequest("POST", this.url);
        req.setHeader("X-HTTP-Method-Override", "PATCH");
      } else {
        req = this._openRequest("PATCH", this.url);
      }
      req.setHeader("Upload-Offset", this._offset);
      var promise = this._addChunkToRequest(req);
      promise.then(function(res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this8._emitHttpError(req, res, "tus: unexpected response while uploading chunk");
          return;
        }
        _this8._handleUploadResponse(req, res);
      })["catch"](function(err) {
        if (_this8._aborted) {
          return;
        }
        _this8._emitHttpError(req, null, "tus: failed to upload chunk at offset ".concat(_this8._offset), err);
      });
    }
    /**
     * _addChunktoRequest reads a chunk from the source and sends it using the
     * supplied request object. It will not handle the response.
     *
     * @api private
     */
  }, {
    key: "_addChunkToRequest",
    value: function _addChunkToRequest(req) {
      var _this9 = this;
      var start = this._offset;
      var end = this._offset + this.options.chunkSize;
      req.setProgressHandler(function(bytesSent) {
        _this9._emitProgress(start + bytesSent, _this9._size);
      });
      req.setHeader("Content-Type", "application/offset+octet-stream");
      if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
        end = this._size;
      }
      return this._source.slice(start, end).then(function(_ref2) {
        var value = _ref2.value, done = _ref2.done;
        if (_this9.options.uploadLengthDeferred && done) {
          _this9._size = _this9._offset + (value && value.size ? value.size : 0);
          req.setHeader("Upload-Length", _this9._size);
        }
        if (value === null) {
          return _this9._sendRequest(req);
        }
        _this9._emitProgress(_this9._offset, _this9._size);
        return _this9._sendRequest(req, value);
      });
    }
    /**
     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
     * and already have received a response.
     *
     * @api private
     */
  }, {
    key: "_handleUploadResponse",
    value: function _handleUploadResponse(req, res) {
      var offset = parseInt(res.getHeader("Upload-Offset"), 10);
      if (Number.isNaN(offset)) {
        this._emitHttpError(req, res, "tus: invalid or missing offset value");
        return;
      }
      this._emitProgress(offset, this._size);
      this._emitChunkComplete(offset - this._offset, offset, this._size);
      this._offset = offset;
      if (offset === this._size) {
        this._emitSuccess();
        this._source.close();
        return;
      }
      this._performUpload();
    }
    /**
     * Create a new HTTP request object with the given method and URL.
     *
     * @api private
     */
  }, {
    key: "_openRequest",
    value: function _openRequest(method, url) {
      var req = openRequest(method, url, this.options);
      this._req = req;
      return req;
    }
    /**
     * Remove the entry in the URL storage, if it has been saved before.
     *
     * @api private
     */
  }, {
    key: "_removeFromUrlStorage",
    value: function _removeFromUrlStorage() {
      var _this10 = this;
      if (!this._urlStorageKey)
        return;
      this._urlStorage.removeUpload(this._urlStorageKey)["catch"](function(err) {
        _this10._emitError(err);
      });
      this._urlStorageKey = null;
    }
    /**
     * Add the upload URL to the URL storage, if possible.
     *
     * @api private
     */
  }, {
    key: "_saveUploadInUrlStorage",
    value: function _saveUploadInUrlStorage() {
      var _this11 = this;
      if (!this.options.storeFingerprintForResuming || !this._fingerprint || this._urlStorageKey !== null) {
        return Promise.resolve();
      }
      var storedUpload = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: (/* @__PURE__ */ new Date()).toString()
      };
      if (this._parallelUploads) {
        storedUpload.parallelUploadUrls = this._parallelUploadUrls;
      } else {
        storedUpload.uploadUrl = this.url;
      }
      return this._urlStorage.addUpload(this._fingerprint, storedUpload).then(function(urlStorageKey) {
        _this11._urlStorageKey = urlStorageKey;
      });
    }
    /**
     * Send a request with the provided body.
     *
     * @api private
     */
  }, {
    key: "_sendRequest",
    value: function _sendRequest(req) {
      var body = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return sendRequest(req, body, this.options);
    }
  }], [{
    key: "terminate",
    value: function terminate(url) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var req = openRequest("DELETE", url, options);
      return sendRequest(req, null, options).then(function(res) {
        if (res.getStatus() === 204) {
          return;
        }
        throw new error_default("tus: unexpected response while terminating upload", null, req, res);
      })["catch"](function(err) {
        if (!(err instanceof error_default)) {
          err = new error_default("tus: failed to terminate upload", err, req, null);
        }
        if (!shouldRetry(err, 0, options)) {
          throw err;
        }
        var delay = options.retryDelays[0];
        var remainingDelays = options.retryDelays.slice(1);
        var newOptions = _objectSpread(_objectSpread({}, options), {}, {
          retryDelays: remainingDelays
        });
        return new Promise(function(resolve) {
          return setTimeout(resolve, delay);
        }).then(function() {
          return BaseUpload2.terminate(url, newOptions);
        });
      });
    }
  }]);
  return BaseUpload2;
}();
function encodeMetadata(metadata) {
  return Object.entries(metadata).map(function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
    return "".concat(key, " ").concat(gBase64.encode(String(value)));
  }).join(",");
}
function inStatusCategory(status, category) {
  return status >= category && status < category + 100;
}
function openRequest(method, url, options) {
  var req = options.httpStack.createRequest(method, url);
  req.setHeader("Tus-Resumable", "1.0.0");
  var headers = options.headers || {};
  Object.entries(headers).forEach(function(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2), name = _ref6[0], value = _ref6[1];
    req.setHeader(name, value);
  });
  if (options.addRequestId) {
    var requestId = uuid();
    req.setHeader("X-Request-ID", requestId);
  }
  return req;
}
function sendRequest(req, body, options) {
  var onBeforeRequestPromise = typeof options.onBeforeRequest === "function" ? Promise.resolve(options.onBeforeRequest(req)) : Promise.resolve();
  return onBeforeRequestPromise.then(function() {
    return req.send(body).then(function(res) {
      var onAfterResponsePromise = typeof options.onAfterResponse === "function" ? Promise.resolve(options.onAfterResponse(req, res)) : Promise.resolve();
      return onAfterResponsePromise.then(function() {
        return res;
      });
    });
  });
}
function isOnline() {
  var online = true;
  if (typeof window !== "undefined" && "navigator" in window && window.navigator.onLine === false) {
    online = false;
  }
  return online;
}
function shouldRetry(err, retryAttempt, options) {
  if (options.retryDelays == null || retryAttempt >= options.retryDelays.length || err.originalRequest == null) {
    return false;
  }
  if (options && typeof options.onShouldRetry === "function") {
    return options.onShouldRetry(err, retryAttempt, options);
  }
  var status = err.originalResponse ? err.originalResponse.getStatus() : 0;
  return (!inStatusCategory(status, 400) || status === 409 || status === 423) && isOnline();
}
function resolveUrl(origin, link) {
  return new import_url_parse.default(link, origin).toString();
}
function splitSizeIntoParts(totalSize, partCount) {
  var partSize = Math.floor(totalSize / partCount);
  var parts = [];
  for (var i = 0; i < partCount; i++) {
    parts.push({
      start: partSize * i,
      end: partSize * (i + 1)
    });
  }
  parts[partCount - 1].end = totalSize;
  return parts;
}
BaseUpload.defaultOptions = defaultOptions;
var upload_default = BaseUpload;

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/noopUrlStorage.js
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var NoopUrlStorage = /* @__PURE__ */ function() {
  function NoopUrlStorage2() {
    _classCallCheck3(this, NoopUrlStorage2);
  }
  _createClass3(NoopUrlStorage2, [{
    key: "listAllUploads",
    value: function listAllUploads() {
      return Promise.resolve([]);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function findUploadsByFingerprint(fingerprint2) {
      return Promise.resolve([]);
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(urlStorageKey) {
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function addUpload(fingerprint2, upload) {
      return Promise.resolve(null);
    }
  }]);
  return NoopUrlStorage2;
}();

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/urlStorage.js
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasStorage = false;
try {
  hasStorage = "localStorage" in window;
  key = "tusSupport";
  originalValue = localStorage.getItem(key);
  localStorage.setItem(key, originalValue);
  if (originalValue === null)
    localStorage.removeItem(key);
} catch (e) {
  if (e.code === e.SECURITY_ERR || e.code === e.QUOTA_EXCEEDED_ERR) {
    hasStorage = false;
  } else {
    throw e;
  }
}
var key;
var originalValue;
var canStoreURLs = hasStorage;
var WebStorageUrlStorage = /* @__PURE__ */ function() {
  function WebStorageUrlStorage2() {
    _classCallCheck4(this, WebStorageUrlStorage2);
  }
  _createClass4(WebStorageUrlStorage2, [{
    key: "findAllUploads",
    value: function findAllUploads() {
      var results = this._findEntries("tus::");
      return Promise.resolve(results);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function findUploadsByFingerprint(fingerprint2) {
      var results = this._findEntries("tus::".concat(fingerprint2, "::"));
      return Promise.resolve(results);
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(urlStorageKey) {
      localStorage.removeItem(urlStorageKey);
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function addUpload(fingerprint2, upload) {
      var id8 = Math.round(Math.random() * 1e12);
      var key = "tus::".concat(fingerprint2, "::").concat(id8);
      localStorage.setItem(key, JSON.stringify(upload));
      return Promise.resolve(key);
    }
  }, {
    key: "_findEntries",
    value: function _findEntries(prefix) {
      var results = [];
      for (var i = 0; i < localStorage.length; i++) {
        var _key = localStorage.key(i);
        if (_key.indexOf(prefix) !== 0)
          continue;
        try {
          var upload = JSON.parse(localStorage.getItem(_key));
          upload.urlStorageKey = _key;
          results.push(upload);
        } catch (e) {
        }
      }
      return results;
    }
  }]);
  return WebStorageUrlStorage2;
}();

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/httpStack.js
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var XHRHttpStack = /* @__PURE__ */ function() {
  function XHRHttpStack2() {
    _classCallCheck5(this, XHRHttpStack2);
  }
  _createClass5(XHRHttpStack2, [{
    key: "createRequest",
    value: function createRequest(method, url) {
      return new Request(method, url);
    }
  }, {
    key: "getName",
    value: function getName2() {
      return "XHRHttpStack";
    }
  }]);
  return XHRHttpStack2;
}();
var Request = /* @__PURE__ */ function() {
  function Request2(method, url) {
    _classCallCheck5(this, Request2);
    this._xhr = new XMLHttpRequest();
    this._xhr.open(method, url, true);
    this._method = method;
    this._url = url;
    this._headers = {};
  }
  _createClass5(Request2, [{
    key: "getMethod",
    value: function getMethod() {
      return this._method;
    }
  }, {
    key: "getURL",
    value: function getURL() {
      return this._url;
    }
  }, {
    key: "setHeader",
    value: function setHeader(header, value) {
      this._xhr.setRequestHeader(header, value);
      this._headers[header] = value;
    }
  }, {
    key: "getHeader",
    value: function getHeader(header) {
      return this._headers[header];
    }
  }, {
    key: "setProgressHandler",
    value: function setProgressHandler(progressHandler) {
      if (!("upload" in this._xhr)) {
        return;
      }
      this._xhr.upload.onprogress = function(e) {
        if (!e.lengthComputable) {
          return;
        }
        progressHandler(e.loaded);
      };
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;
      var body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return new Promise(function(resolve, reject) {
        _this._xhr.onload = function() {
          resolve(new Response(_this._xhr));
        };
        _this._xhr.onerror = function(err) {
          reject(err);
        };
        _this._xhr.send(body);
      });
    }
  }, {
    key: "abort",
    value: function abort() {
      this._xhr.abort();
      return Promise.resolve();
    }
  }, {
    key: "getUnderlyingObject",
    value: function getUnderlyingObject() {
      return this._xhr;
    }
  }]);
  return Request2;
}();
var Response = /* @__PURE__ */ function() {
  function Response2(xhr) {
    _classCallCheck5(this, Response2);
    this._xhr = xhr;
  }
  _createClass5(Response2, [{
    key: "getStatus",
    value: function getStatus() {
      return this._xhr.status;
    }
  }, {
    key: "getHeader",
    value: function getHeader(header) {
      return this._xhr.getResponseHeader(header);
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this._xhr.responseText;
    }
  }, {
    key: "getUnderlyingObject",
    value: function getUnderlyingObject() {
      return this._xhr;
    }
  }]);
  return Response2;
}();

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/isReactNative.js
var isReactNative = function isReactNative2() {
  return typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
};
var isReactNative_default = isReactNative;

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/uriToBlob.js
function uriToBlob(uri) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function() {
      var blob = xhr.response;
      resolve(blob);
    };
    xhr.onerror = function(err) {
      reject(err);
    };
    xhr.open("GET", uri);
    xhr.send();
  });
}

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/sources/isCordova.js
var isCordova = function isCordova2() {
  return typeof window !== "undefined" && (typeof window.PhoneGap !== "undefined" || typeof window.Cordova !== "undefined" || typeof window.cordova !== "undefined");
};
var isCordova_default = isCordova;

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/sources/readAsByteArray.js
function readAsByteArray(chunk) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function() {
      var value = new Uint8Array(reader.result);
      resolve({
        value
      });
    };
    reader.onerror = function(err) {
      reject(err);
    };
    reader.readAsArrayBuffer(chunk);
  });
}

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/sources/FileSource.js
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties6(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var FileSource = /* @__PURE__ */ function() {
  function FileSource2(file) {
    _classCallCheck6(this, FileSource2);
    this._file = file;
    this.size = file.size;
  }
  _createClass6(FileSource2, [{
    key: "slice",
    value: function slice(start, end) {
      if (isCordova_default()) {
        return readAsByteArray(this._file.slice(start, end));
      }
      var value = this._file.slice(start, end);
      return Promise.resolve({
        value
      });
    }
  }, {
    key: "close",
    value: function close() {
    }
  }]);
  return FileSource2;
}();

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/sources/StreamSource.js
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties7(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function len(blobOrArray) {
  if (blobOrArray === void 0)
    return 0;
  if (blobOrArray.size !== void 0)
    return blobOrArray.size;
  return blobOrArray.length;
}
function concat(a, b) {
  if (a.concat) {
    return a.concat(b);
  }
  if (a instanceof Blob) {
    return new Blob([a, b], {
      type: a.type
    });
  }
  if (a.set) {
    var c = new a.constructor(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
  }
  throw new Error("Unknown data type");
}
var StreamSource = /* @__PURE__ */ function() {
  function StreamSource2(reader) {
    _classCallCheck7(this, StreamSource2);
    this._buffer = void 0;
    this._bufferOffset = 0;
    this._reader = reader;
    this._done = false;
  }
  _createClass7(StreamSource2, [{
    key: "slice",
    value: function slice(start, end) {
      if (start < this._bufferOffset) {
        return Promise.reject(new Error("Requested data is before the reader's current offset"));
      }
      return this._readUntilEnoughDataOrDone(start, end);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function _readUntilEnoughDataOrDone(start, end) {
      var _this = this;
      var hasEnoughData = end <= this._bufferOffset + len(this._buffer);
      if (this._done || hasEnoughData) {
        var value = this._getDataFromBuffer(start, end);
        var done = value == null ? this._done : false;
        return Promise.resolve({
          value,
          done
        });
      }
      return this._reader.read().then(function(_ref) {
        var value2 = _ref.value, done2 = _ref.done;
        if (done2) {
          _this._done = true;
        } else if (_this._buffer === void 0) {
          _this._buffer = value2;
        } else {
          _this._buffer = concat(_this._buffer, value2);
        }
        return _this._readUntilEnoughDataOrDone(start, end);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function _getDataFromBuffer(start, end) {
      if (start > this._bufferOffset) {
        this._buffer = this._buffer.slice(start - this._bufferOffset);
        this._bufferOffset = start;
      }
      var hasAllDataBeenRead = len(this._buffer) === 0;
      if (this._done && hasAllDataBeenRead) {
        return null;
      }
      return this._buffer.slice(0, end - start);
    }
  }, {
    key: "close",
    value: function close() {
      if (this._reader.cancel) {
        this._reader.cancel();
      }
    }
  }]);
  return StreamSource2;
}();

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/fileReader.js
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var FileReader2 = /* @__PURE__ */ function() {
  function FileReader3() {
    _classCallCheck8(this, FileReader3);
  }
  _createClass8(FileReader3, [{
    key: "openFile",
    value: function openFile(input, chunkSize) {
      if (isReactNative_default() && input && typeof input.uri !== "undefined") {
        return uriToBlob(input.uri).then(function(blob) {
          return new FileSource(blob);
        })["catch"](function(err) {
          throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(err));
        });
      }
      if (typeof input.slice === "function" && typeof input.size !== "undefined") {
        return Promise.resolve(new FileSource(input));
      }
      if (typeof input.read === "function") {
        chunkSize = Number(chunkSize);
        if (!Number.isFinite(chunkSize)) {
          return Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"));
        }
        return Promise.resolve(new StreamSource(input, chunkSize));
      }
      return Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"));
    }
  }]);
  return FileReader3;
}();

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/fileSignature.js
function fingerprint(file, options) {
  if (isReactNative_default()) {
    return Promise.resolve(reactNativeFingerprint(file, options));
  }
  return Promise.resolve(["tus-br", file.name, file.type, file.size, file.lastModified, options.endpoint].join("-"));
}
function reactNativeFingerprint(file, options) {
  var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : "noexif";
  return ["tus-rn", file.name || "noname", file.size || "nosize", exifHash, options.endpoint].join("/");
}
function hashCode(str) {
  var hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (var i = 0; i < str.length; i++) {
    var _char = str.charCodeAt(i);
    hash = (hash << 5) - hash + _char;
    hash &= hash;
  }
  return hash;
}

// node_modules/.pnpm/tus-js-client@3.1.0/node_modules/tus-js-client/lib.esm/browser/index.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (_typeof2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defaultOptions2 = _objectSpread2(_objectSpread2({}, upload_default.defaultOptions), {}, {
  httpStack: new XHRHttpStack(),
  fileReader: new FileReader2(),
  urlStorage: canStoreURLs ? new WebStorageUrlStorage() : new NoopUrlStorage(),
  fingerprint
});
var Upload = /* @__PURE__ */ function(_BaseUpload) {
  _inherits2(Upload2, _BaseUpload);
  var _super = _createSuper2(Upload2);
  function Upload2() {
    var file = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck9(this, Upload2);
    options = _objectSpread2(_objectSpread2({}, defaultOptions2), options);
    return _super.call(this, file, options);
  }
  _createClass9(Upload2, null, [{
    key: "terminate",
    value: function terminate(url) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      options = _objectSpread2(_objectSpread2({}, defaultOptions2), options);
      return upload_default.terminate(url, options);
    }
  }]);
  return Upload2;
}(upload_default);
var _window = window;
var XMLHttpRequest2 = _window.XMLHttpRequest;
var Blob2 = _window.Blob;
var isSupported = XMLHttpRequest2 && Blob2 && typeof Blob2.prototype.slice === "function";

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/NetworkError.js
var NetworkError = class extends Error {
  constructor(error, xhr) {
    if (xhr === void 0) {
      xhr = null;
    }
    super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.`);
    this.cause = error;
    this.isNetworkError = true;
    this.request = xhr;
  }
};
var NetworkError_default = NetworkError;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/fetchWithNetworkError.js
function fetchWithNetworkError() {
  return fetch(...arguments).catch((err) => {
    if (err.name === "AbortError") {
      throw err;
    } else {
      throw new NetworkError_default(err);
    }
  });
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/ErrorWithCause.js
var ErrorWithCause = class extends Error {
  constructor(message, options) {
    if (options === void 0) {
      options = {};
    }
    super(message);
    this.cause = options.cause;
    if (this.cause && has(this.cause, "isNetworkError")) {
      this.isNetworkError = this.cause.isNetworkError;
    }
  }
};
var ErrorWithCause_default = ErrorWithCause;

// node_modules/.pnpm/@uppy+companion-client@3.2.0/node_modules/@uppy/companion-client/lib/AuthError.js
var AuthError = class extends Error {
  constructor() {
    super("Authorization required");
    this.name = "AuthError";
    this.isAuthError = true;
  }
};
var AuthError_default = AuthError;

// node_modules/.pnpm/@uppy+companion-client@3.2.0/node_modules/@uppy/companion-client/lib/RequestClient.js
var _Symbol$for;
function _classPrivateFieldLooseBase2(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id2 = 0;
function _classPrivateFieldLooseKey2(name) {
  return "__private_" + id2++ + "_" + name;
}
var packageJson = {
  "version": "3.2.0"
};
function stripSlash(url) {
  return url.replace(/\/$/, "");
}
async function handleJSONResponse(res) {
  if (res.status === 401) {
    throw new AuthError_default();
  }
  const jsonPromise = res.json();
  if (res.ok) {
    return jsonPromise;
  }
  let errMsg = `Failed request with status: ${res.status}. ${res.statusText}`;
  try {
    const errData = await jsonPromise;
    errMsg = errData.message ? `${errMsg} message: ${errData.message}` : errMsg;
    errMsg = errData.requestId ? `${errMsg} request-Id: ${errData.requestId}` : errMsg;
  } catch {
  }
  throw new Error(errMsg);
}
var allowedHeadersCache = /* @__PURE__ */ new Map();
var _companionHeaders = /* @__PURE__ */ _classPrivateFieldLooseKey2("companionHeaders");
var _getUrl = /* @__PURE__ */ _classPrivateFieldLooseKey2("getUrl");
_Symbol$for = Symbol.for("uppy test: getCompanionHeaders");
var RequestClient = class {
  constructor(uppy, opts) {
    Object.defineProperty(this, _getUrl, {
      value: _getUrl2
    });
    Object.defineProperty(this, _companionHeaders, {
      writable: true,
      value: void 0
    });
    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    _classPrivateFieldLooseBase2(this, _companionHeaders)[_companionHeaders] = opts == null ? void 0 : opts.companionHeaders;
  }
  setCompanionHeaders(headers) {
    _classPrivateFieldLooseBase2(this, _companionHeaders)[_companionHeaders] = headers;
  }
  [_Symbol$for]() {
    return _classPrivateFieldLooseBase2(this, _companionHeaders)[_companionHeaders];
  }
  get hostname() {
    const {
      companion
    } = this.uppy.getState();
    const host = this.opts.companionUrl;
    return stripSlash(companion && companion[host] ? companion[host] : host);
  }
  async headers() {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Uppy-Versions": `@uppy/companion-client=${RequestClient.VERSION}`
    };
    return {
      ...defaultHeaders,
      ..._classPrivateFieldLooseBase2(this, _companionHeaders)[_companionHeaders]
    };
  }
  onReceiveResponse(_ref) {
    let {
      headers
    } = _ref;
    const state = this.uppy.getState();
    const companion = state.companion || {};
    const host = this.opts.companionUrl;
    if (headers.has("i-am") && headers.get("i-am") !== companion[host]) {
      this.uppy.setState({
        companion: {
          ...companion,
          [host]: headers.get("i-am")
        }
      });
    }
  }
  /*
    Preflight was added to avoid breaking change between older Companion-client versions and
    newer Companion versions and vice-versa. Usually the break will manifest via CORS errors because a
    version of companion-client could be sending certain headers to a version of Companion server that
    does not support those headers. In which case, the default preflight would lead to CORS.
    So to avoid those errors, we do preflight ourselves, to see what headers the Companion server
    we are communicating with allows. And based on that, companion-client knows what headers to
    send and what headers to not send.
     The preflight only happens once throughout the life-cycle of a certain
    Companion-client <-> Companion-server pair (allowedHeadersCache).
    Subsequent requests use the cached result of the preflight.
    However if there is an error retrieving the allowed headers, we will try again next time
  */
  async preflight(path) {
    const allowedHeadersCached = allowedHeadersCache.get(this.hostname);
    if (allowedHeadersCached != null)
      return allowedHeadersCached;
    const fallbackAllowedHeaders = ["accept", "content-type", "uppy-auth-token"];
    const promise = (async () => {
      try {
        const response = await fetch(_classPrivateFieldLooseBase2(this, _getUrl)[_getUrl](path), {
          method: "OPTIONS"
        });
        const header = response.headers.get("access-control-allow-headers");
        if (header == null || header === "*") {
          allowedHeadersCache.set(this.hostname, fallbackAllowedHeaders);
          return fallbackAllowedHeaders;
        }
        this.uppy.log(`[CompanionClient] adding allowed preflight headers to companion cache: ${this.hostname} ${header}`);
        const allowedHeaders = header.split(",").map((headerName) => headerName.trim().toLowerCase());
        allowedHeadersCache.set(this.hostname, allowedHeaders);
        return allowedHeaders;
      } catch (err) {
        this.uppy.log(`[CompanionClient] unable to make preflight request ${err}`, "warning");
        allowedHeadersCache.delete(this.hostname);
        return fallbackAllowedHeaders;
      }
    })();
    allowedHeadersCache.set(this.hostname, promise);
    return promise;
  }
  async preflightAndHeaders(path) {
    const [allowedHeaders, headers] = await Promise.all([this.preflight(path), this.headers()]);
    return Object.fromEntries(Object.entries(headers).filter((_ref2) => {
      let [header] = _ref2;
      if (!allowedHeaders.includes(header.toLowerCase())) {
        this.uppy.log(`[CompanionClient] excluding disallowed header ${header}`);
        return false;
      }
      return true;
    }));
  }
  /** @protected */
  async request(_ref3) {
    let {
      path,
      method = "GET",
      data,
      skipPostResponse,
      signal
    } = _ref3;
    try {
      const headers = await this.preflightAndHeaders(path);
      const response = await fetchWithNetworkError(_classPrivateFieldLooseBase2(this, _getUrl)[_getUrl](path), {
        method,
        signal,
        headers,
        credentials: this.opts.companionCookiesRule || "same-origin",
        body: data ? JSON.stringify(data) : null
      });
      if (!skipPostResponse)
        this.onReceiveResponse(response);
      return handleJSONResponse(response);
    } catch (err) {
      if (err != null && err.isAuthError)
        throw err;
      throw new ErrorWithCause_default(`Could not ${method} ${_classPrivateFieldLooseBase2(this, _getUrl)[_getUrl](path)}`, {
        cause: err
      });
    }
  }
  async get(path, options) {
    if (options === void 0) {
      options = void 0;
    }
    if (typeof options === "boolean")
      options = {
        skipPostResponse: options
      };
    return this.request({
      ...options,
      path
    });
  }
  async post(path, data, options) {
    if (options === void 0) {
      options = void 0;
    }
    if (typeof options === "boolean")
      options = {
        skipPostResponse: options
      };
    return this.request({
      ...options,
      path,
      method: "POST",
      data
    });
  }
  async delete(path, data, options) {
    if (data === void 0) {
      data = void 0;
    }
    if (typeof options === "boolean")
      options = {
        skipPostResponse: options
      };
    return this.request({
      ...options,
      path,
      method: "DELETE",
      data
    });
  }
};
function _getUrl2(url) {
  if (/^(https?:|)\/\//.test(url)) {
    return url;
  }
  return `${this.hostname}/${url}`;
}
RequestClient.VERSION = packageJson.version;

// node_modules/.pnpm/@uppy+companion-client@3.2.0/node_modules/@uppy/companion-client/lib/tokenStorage.js
var tokenStorage_exports = {};
__export(tokenStorage_exports, {
  getItem: () => getItem,
  removeItem: () => removeItem,
  setItem: () => setItem
});
function setItem(key, value) {
  return new Promise((resolve) => {
    localStorage.setItem(key, value);
    resolve();
  });
}
function getItem(key) {
  return Promise.resolve(localStorage.getItem(key));
}
function removeItem(key) {
  return new Promise((resolve) => {
    localStorage.removeItem(key);
    resolve();
  });
}

// node_modules/.pnpm/@uppy+companion-client@3.2.0/node_modules/@uppy/companion-client/lib/Provider.js
function _classPrivateFieldLooseBase3(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id3 = 0;
function _classPrivateFieldLooseKey3(name) {
  return "__private_" + id3++ + "_" + name;
}
var getName = (id8) => {
  return id8.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
};
var _refreshingTokenPromise = /* @__PURE__ */ _classPrivateFieldLooseKey3("refreshingTokenPromise");
var _getAuthToken = /* @__PURE__ */ _classPrivateFieldLooseKey3("getAuthToken");
var _removeAuthToken = /* @__PURE__ */ _classPrivateFieldLooseKey3("removeAuthToken");
var Provider = class extends RequestClient {
  constructor(uppy, opts) {
    super(uppy, opts);
    Object.defineProperty(this, _removeAuthToken, {
      value: _removeAuthToken2
    });
    Object.defineProperty(this, _getAuthToken, {
      value: _getAuthToken2
    });
    Object.defineProperty(this, _refreshingTokenPromise, {
      writable: true,
      value: void 0
    });
    this.provider = opts.provider;
    this.id = this.provider;
    this.name = this.opts.name || getName(this.id);
    this.pluginId = this.opts.pluginId;
    this.tokenKey = `companion-${this.pluginId}-auth-token`;
    this.companionKeysParams = this.opts.companionKeysParams;
    this.preAuthToken = null;
  }
  async headers() {
    const [headers, token] = await Promise.all([super.headers(), _classPrivateFieldLooseBase3(this, _getAuthToken)[_getAuthToken]()]);
    const authHeaders = {};
    if (token) {
      authHeaders["uppy-auth-token"] = token;
    }
    if (this.companionKeysParams) {
      authHeaders["uppy-credentials-params"] = btoa(JSON.stringify({
        params: this.companionKeysParams
      }));
    }
    return {
      ...headers,
      ...authHeaders
    };
  }
  onReceiveResponse(response) {
    super.onReceiveResponse(response);
    const plugin = this.uppy.getPlugin(this.pluginId);
    const oldAuthenticated = plugin.getPluginState().authenticated;
    const authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated
    });
    return response;
  }
  async setAuthToken(token) {
    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
  }
  /**
   * Ensure we have a preauth token if necessary. Attempts to fetch one if we don't,
   * or rejects if loading one fails.
   */
  async ensurePreAuth() {
    if (this.companionKeysParams && !this.preAuthToken) {
      await this.fetchPreAuthToken();
      if (!this.preAuthToken) {
        throw new Error("Could not load authentication data required for third-party login. Please try again later.");
      }
    }
  }
  authUrl(queries) {
    if (queries === void 0) {
      queries = {};
    }
    const params = new URLSearchParams(queries);
    if (this.preAuthToken) {
      params.set("uppyPreAuthToken", this.preAuthToken);
    }
    return `${this.hostname}/${this.id}/connect?${params}`;
  }
  refreshTokenUrl() {
    return `${this.hostname}/${this.id}/refresh-token`;
  }
  fileUrl(id8) {
    return `${this.hostname}/${this.id}/get/${id8}`;
  }
  /** @protected */
  async request() {
    await _classPrivateFieldLooseBase3(this, _refreshingTokenPromise)[_refreshingTokenPromise];
    try {
      return await super.request(...arguments);
    } catch (err) {
      if (!err.isAuthError)
        throw err;
      await _classPrivateFieldLooseBase3(this, _refreshingTokenPromise)[_refreshingTokenPromise];
      _classPrivateFieldLooseBase3(this, _refreshingTokenPromise)[_refreshingTokenPromise] = (async () => {
        try {
          const response = await super.request({
            path: this.refreshTokenUrl(),
            method: "POST"
          });
          await this.setAuthToken(response.uppyAuthToken);
        } finally {
          _classPrivateFieldLooseBase3(this, _refreshingTokenPromise)[_refreshingTokenPromise] = void 0;
        }
      })();
      await _classPrivateFieldLooseBase3(this, _refreshingTokenPromise)[_refreshingTokenPromise];
      return super.request(...arguments);
    }
  }
  async fetchPreAuthToken() {
    if (!this.companionKeysParams) {
      return;
    }
    try {
      const res = await this.post(`${this.id}/preauth/`, {
        params: this.companionKeysParams
      });
      this.preAuthToken = res.token;
    } catch (err) {
      this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${err}`, "warning");
    }
  }
  list(directory) {
    return this.get(`${this.id}/list/${directory || ""}`);
  }
  async logout() {
    const response = await this.get(`${this.id}/logout`);
    await _classPrivateFieldLooseBase3(this, _removeAuthToken)[_removeAuthToken]();
    return response;
  }
  static initPlugin(plugin, opts, defaultOpts) {
    plugin.type = "acquirer";
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = {
        ...defaultOpts,
        ...opts
      };
    }
    if (opts.serverUrl || opts.serverPattern) {
      throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");
    }
    if (opts.companionAllowedHosts) {
      const pattern = opts.companionAllowedHosts;
      if (typeof pattern !== "string" && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
        throw new TypeError(`${plugin.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
      }
      plugin.opts.companionAllowedHosts = pattern;
    } else if (/^(?!https?:\/\/).*$/i.test(opts.companionUrl)) {
      plugin.opts.companionAllowedHosts = `https://${opts.companionUrl.replace(/^\/\//, "")}`;
    } else {
      plugin.opts.companionAllowedHosts = new URL(opts.companionUrl).origin;
    }
    plugin.storage = plugin.opts.storage || tokenStorage_exports;
  }
};
async function _getAuthToken2() {
  return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
}
async function _removeAuthToken2() {
  return this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey);
}

// node_modules/.pnpm/@uppy+companion-client@3.2.0/node_modules/@uppy/companion-client/lib/Socket.js
var import_namespace_emitter = __toESM(require_namespace_emitter(), 1);
var _Symbol$for2;
var _Symbol$for22;
function _classPrivateFieldLooseBase4(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id4 = 0;
function _classPrivateFieldLooseKey4(name) {
  return "__private_" + id4++ + "_" + name;
}
var _queued = /* @__PURE__ */ _classPrivateFieldLooseKey4("queued");
var _emitter = /* @__PURE__ */ _classPrivateFieldLooseKey4("emitter");
var _isOpen = /* @__PURE__ */ _classPrivateFieldLooseKey4("isOpen");
var _socket = /* @__PURE__ */ _classPrivateFieldLooseKey4("socket");
var _handleMessage = /* @__PURE__ */ _classPrivateFieldLooseKey4("handleMessage");
_Symbol$for2 = Symbol.for("uppy test: getSocket");
_Symbol$for22 = Symbol.for("uppy test: getQueued");
var UppySocket = class {
  constructor(opts) {
    Object.defineProperty(this, _queued, {
      writable: true,
      value: []
    });
    Object.defineProperty(this, _emitter, {
      writable: true,
      value: (0, import_namespace_emitter.default)()
    });
    Object.defineProperty(this, _isOpen, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _socket, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _handleMessage, {
      writable: true,
      value: (e) => {
        try {
          const message = JSON.parse(e.data);
          this.emit(message.action, message.payload);
        } catch (err) {
          console.log(err);
        }
      }
    });
    this.opts = opts;
    if (!opts || opts.autoOpen !== false) {
      this.open();
    }
  }
  get isOpen() {
    return _classPrivateFieldLooseBase4(this, _isOpen)[_isOpen];
  }
  [_Symbol$for2]() {
    return _classPrivateFieldLooseBase4(this, _socket)[_socket];
  }
  [_Symbol$for22]() {
    return _classPrivateFieldLooseBase4(this, _queued)[_queued];
  }
  open() {
    if (_classPrivateFieldLooseBase4(this, _socket)[_socket] != null)
      return;
    _classPrivateFieldLooseBase4(this, _socket)[_socket] = new WebSocket(this.opts.target);
    _classPrivateFieldLooseBase4(this, _socket)[_socket].onopen = () => {
      _classPrivateFieldLooseBase4(this, _isOpen)[_isOpen] = true;
      while (_classPrivateFieldLooseBase4(this, _queued)[_queued].length > 0 && _classPrivateFieldLooseBase4(this, _isOpen)[_isOpen]) {
        const first = _classPrivateFieldLooseBase4(this, _queued)[_queued].shift();
        this.send(first.action, first.payload);
      }
    };
    _classPrivateFieldLooseBase4(this, _socket)[_socket].onclose = () => {
      _classPrivateFieldLooseBase4(this, _isOpen)[_isOpen] = false;
      _classPrivateFieldLooseBase4(this, _socket)[_socket] = null;
    };
    _classPrivateFieldLooseBase4(this, _socket)[_socket].onmessage = _classPrivateFieldLooseBase4(this, _handleMessage)[_handleMessage];
  }
  close() {
    var _classPrivateFieldLoo;
    (_classPrivateFieldLoo = _classPrivateFieldLooseBase4(this, _socket)[_socket]) == null ? void 0 : _classPrivateFieldLoo.close();
  }
  send(action, payload) {
    if (!_classPrivateFieldLooseBase4(this, _isOpen)[_isOpen]) {
      _classPrivateFieldLooseBase4(this, _queued)[_queued].push({
        action,
        payload
      });
      return;
    }
    _classPrivateFieldLooseBase4(this, _socket)[_socket].send(JSON.stringify({
      action,
      payload
    }));
  }
  on(action, handler) {
    _classPrivateFieldLooseBase4(this, _emitter)[_emitter].on(action, handler);
  }
  emit(action, payload) {
    _classPrivateFieldLooseBase4(this, _emitter)[_emitter].emit(action, payload);
  }
  once(action, handler) {
    _classPrivateFieldLooseBase4(this, _emitter)[_emitter].once(action, handler);
  }
};

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/emitSocketProgress.js
var import_throttle = __toESM(require_throttle(), 1);
function emitSocketProgress(uploader, progressData, file) {
  const {
    progress,
    bytesUploaded,
    bytesTotal
  } = progressData;
  if (progress) {
    uploader.uppy.log(`Upload progress: ${progress}`);
    uploader.uppy.emit("upload-progress", file, {
      uploader,
      bytesUploaded,
      bytesTotal
    });
  }
}
var emitSocketProgress_default = (0, import_throttle.default)(emitSocketProgress, 300, {
  leading: true,
  trailing: true
});

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getSocketHost.js
function getSocketHost(url) {
  const regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  const host = regex.exec(url)[1];
  const socketProtocol = /^http:\/\//i.test(url) ? "ws" : "wss";
  return `${socketProtocol}://${host}`;
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/EventManager.js
function _classPrivateFieldLooseBase5(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id5 = 0;
function _classPrivateFieldLooseKey5(name) {
  return "__private_" + id5++ + "_" + name;
}
var _emitter2 = /* @__PURE__ */ _classPrivateFieldLooseKey5("emitter");
var _events = /* @__PURE__ */ _classPrivateFieldLooseKey5("events");
var EventManager = class {
  constructor(emitter) {
    Object.defineProperty(this, _emitter2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _events, {
      writable: true,
      value: []
    });
    _classPrivateFieldLooseBase5(this, _emitter2)[_emitter2] = emitter;
  }
  on(event, fn) {
    _classPrivateFieldLooseBase5(this, _events)[_events].push([event, fn]);
    return _classPrivateFieldLooseBase5(this, _emitter2)[_emitter2].on(event, fn);
  }
  remove() {
    for (const [event, fn] of _classPrivateFieldLooseBase5(this, _events)[_events].splice(0)) {
      _classPrivateFieldLooseBase5(this, _emitter2)[_emitter2].off(event, fn);
    }
  }
};

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/isNetworkError.js
function isNetworkError(xhr) {
  if (!xhr) {
    return false;
  }
  return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
}
var isNetworkError_default = isNetworkError;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/RateLimitedQueue.js
function _classPrivateFieldLooseBase6(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id6 = 0;
function _classPrivateFieldLooseKey6(name) {
  return "__private_" + id6++ + "_" + name;
}
function createCancelError(cause) {
  return new Error("Cancelled", {
    cause
  });
}
function abortOn(signal) {
  if (signal != null) {
    var _this$then;
    const abortPromise = () => this.abort(signal.reason);
    signal.addEventListener("abort", abortPromise, {
      once: true
    });
    const removeAbortListener = () => {
      signal.removeEventListener("abort", abortPromise);
    };
    (_this$then = this.then) == null ? void 0 : _this$then.call(this, removeAbortListener, removeAbortListener);
  }
  return this;
}
var _activeRequests = /* @__PURE__ */ _classPrivateFieldLooseKey6("activeRequests");
var _queuedHandlers = /* @__PURE__ */ _classPrivateFieldLooseKey6("queuedHandlers");
var _paused = /* @__PURE__ */ _classPrivateFieldLooseKey6("paused");
var _pauseTimer = /* @__PURE__ */ _classPrivateFieldLooseKey6("pauseTimer");
var _downLimit = /* @__PURE__ */ _classPrivateFieldLooseKey6("downLimit");
var _upperLimit = /* @__PURE__ */ _classPrivateFieldLooseKey6("upperLimit");
var _rateLimitingTimer = /* @__PURE__ */ _classPrivateFieldLooseKey6("rateLimitingTimer");
var _call = /* @__PURE__ */ _classPrivateFieldLooseKey6("call");
var _queueNext = /* @__PURE__ */ _classPrivateFieldLooseKey6("queueNext");
var _next = /* @__PURE__ */ _classPrivateFieldLooseKey6("next");
var _queue = /* @__PURE__ */ _classPrivateFieldLooseKey6("queue");
var _dequeue = /* @__PURE__ */ _classPrivateFieldLooseKey6("dequeue");
var _resume = /* @__PURE__ */ _classPrivateFieldLooseKey6("resume");
var _increaseLimit = /* @__PURE__ */ _classPrivateFieldLooseKey6("increaseLimit");
var RateLimitedQueue = class {
  constructor(limit) {
    Object.defineProperty(this, _dequeue, {
      value: _dequeue2
    });
    Object.defineProperty(this, _queue, {
      value: _queue2
    });
    Object.defineProperty(this, _next, {
      value: _next2
    });
    Object.defineProperty(this, _queueNext, {
      value: _queueNext2
    });
    Object.defineProperty(this, _call, {
      value: _call2
    });
    Object.defineProperty(this, _activeRequests, {
      writable: true,
      value: 0
    });
    Object.defineProperty(this, _queuedHandlers, {
      writable: true,
      value: []
    });
    Object.defineProperty(this, _paused, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _pauseTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _downLimit, {
      writable: true,
      value: 1
    });
    Object.defineProperty(this, _upperLimit, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _rateLimitingTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _resume, {
      writable: true,
      value: () => this.resume()
    });
    Object.defineProperty(this, _increaseLimit, {
      writable: true,
      value: () => {
        if (_classPrivateFieldLooseBase6(this, _paused)[_paused]) {
          _classPrivateFieldLooseBase6(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase6(this, _increaseLimit)[_increaseLimit], 0);
          return;
        }
        _classPrivateFieldLooseBase6(this, _downLimit)[_downLimit] = this.limit;
        this.limit = Math.ceil((_classPrivateFieldLooseBase6(this, _upperLimit)[_upperLimit] + _classPrivateFieldLooseBase6(this, _downLimit)[_downLimit]) / 2);
        for (let i = _classPrivateFieldLooseBase6(this, _downLimit)[_downLimit]; i <= this.limit; i++) {
          _classPrivateFieldLooseBase6(this, _queueNext)[_queueNext]();
        }
        if (_classPrivateFieldLooseBase6(this, _upperLimit)[_upperLimit] - _classPrivateFieldLooseBase6(this, _downLimit)[_downLimit] > 3) {
          _classPrivateFieldLooseBase6(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase6(this, _increaseLimit)[_increaseLimit], 2e3);
        } else {
          _classPrivateFieldLooseBase6(this, _downLimit)[_downLimit] = Math.floor(_classPrivateFieldLooseBase6(this, _downLimit)[_downLimit] / 2);
        }
      }
    });
    if (typeof limit !== "number" || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
  }
  run(fn, queueOptions) {
    if (!_classPrivateFieldLooseBase6(this, _paused)[_paused] && _classPrivateFieldLooseBase6(this, _activeRequests)[_activeRequests] < this.limit) {
      return _classPrivateFieldLooseBase6(this, _call)[_call](fn);
    }
    return _classPrivateFieldLooseBase6(this, _queue)[_queue](fn, queueOptions);
  }
  wrapSyncFunction(fn, queueOptions) {
    var _this = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const queuedRequest = _this.run(() => {
        fn(...args);
        queueMicrotask(() => queuedRequest.done());
        return () => {
        };
      }, queueOptions);
      return {
        abortOn,
        abort() {
          queuedRequest.abort();
        }
      };
    };
  }
  wrapPromiseFunction(fn, queueOptions) {
    var _this2 = this;
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      let queuedRequest;
      const outerPromise = new Promise((resolve, reject) => {
        queuedRequest = _this2.run(() => {
          let cancelError;
          let innerPromise;
          try {
            innerPromise = Promise.resolve(fn(...args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then((result) => {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
          }, (err) => {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
          });
          return (cause) => {
            cancelError = createCancelError(cause);
          };
        }, queueOptions);
      });
      outerPromise.abort = (cause) => {
        queuedRequest.abort(cause);
      };
      outerPromise.abortOn = abortOn;
      return outerPromise;
    };
  }
  resume() {
    _classPrivateFieldLooseBase6(this, _paused)[_paused] = false;
    clearTimeout(_classPrivateFieldLooseBase6(this, _pauseTimer)[_pauseTimer]);
    for (let i = 0; i < this.limit; i++) {
      _classPrivateFieldLooseBase6(this, _queueNext)[_queueNext]();
    }
  }
  /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */
  pause(duration) {
    if (duration === void 0) {
      duration = null;
    }
    _classPrivateFieldLooseBase6(this, _paused)[_paused] = true;
    clearTimeout(_classPrivateFieldLooseBase6(this, _pauseTimer)[_pauseTimer]);
    if (duration != null) {
      _classPrivateFieldLooseBase6(this, _pauseTimer)[_pauseTimer] = setTimeout(_classPrivateFieldLooseBase6(this, _resume)[_resume], duration);
    }
  }
  /**
   * Pauses the queue for a duration, and lower the limit of concurrent requests
   * when the queue resumes. When the queue resumes, it tries to progressively
   * increase the limit in `this.#increaseLimit` until another call is made to
   * `this.rateLimit`.
   * Call this function when using the RateLimitedQueue for network requests and
   * the remote server responds with 429 HTTP code.
   *
   * @param {number} duration in milliseconds.
   */
  rateLimit(duration) {
    clearTimeout(_classPrivateFieldLooseBase6(this, _rateLimitingTimer)[_rateLimitingTimer]);
    this.pause(duration);
    if (this.limit > 1 && Number.isFinite(this.limit)) {
      _classPrivateFieldLooseBase6(this, _upperLimit)[_upperLimit] = this.limit - 1;
      this.limit = _classPrivateFieldLooseBase6(this, _downLimit)[_downLimit];
      _classPrivateFieldLooseBase6(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase6(this, _increaseLimit)[_increaseLimit], duration);
    }
  }
  get isPaused() {
    return _classPrivateFieldLooseBase6(this, _paused)[_paused];
  }
};
function _call2(fn) {
  _classPrivateFieldLooseBase6(this, _activeRequests)[_activeRequests] += 1;
  let done = false;
  let cancelActive;
  try {
    cancelActive = fn();
  } catch (err) {
    _classPrivateFieldLooseBase6(this, _activeRequests)[_activeRequests] -= 1;
    throw err;
  }
  return {
    abort: (cause) => {
      if (done)
        return;
      done = true;
      _classPrivateFieldLooseBase6(this, _activeRequests)[_activeRequests] -= 1;
      cancelActive(cause);
      _classPrivateFieldLooseBase6(this, _queueNext)[_queueNext]();
    },
    done: () => {
      if (done)
        return;
      done = true;
      _classPrivateFieldLooseBase6(this, _activeRequests)[_activeRequests] -= 1;
      _classPrivateFieldLooseBase6(this, _queueNext)[_queueNext]();
    }
  };
}
function _queueNext2() {
  queueMicrotask(() => _classPrivateFieldLooseBase6(this, _next)[_next]());
}
function _next2() {
  if (_classPrivateFieldLooseBase6(this, _paused)[_paused] || _classPrivateFieldLooseBase6(this, _activeRequests)[_activeRequests] >= this.limit) {
    return;
  }
  if (_classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].length === 0) {
    return;
  }
  const next = _classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].shift();
  const handler = _classPrivateFieldLooseBase6(this, _call)[_call](next.fn);
  next.abort = handler.abort;
  next.done = handler.done;
}
function _queue2(fn, options) {
  if (options === void 0) {
    options = {};
  }
  const handler = {
    fn,
    priority: options.priority || 0,
    abort: () => {
      _classPrivateFieldLooseBase6(this, _dequeue)[_dequeue](handler);
    },
    done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    }
  };
  const index = _classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].findIndex((other) => {
    return handler.priority > other.priority;
  });
  if (index === -1) {
    _classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].push(handler);
  } else {
    _classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].splice(index, 0, handler);
  }
  return handler;
}
function _dequeue2(handler) {
  const index = _classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].indexOf(handler);
  if (index !== -1) {
    _classPrivateFieldLooseBase6(this, _queuedHandlers)[_queuedHandlers].splice(index, 1);
  }
}
var internalRateLimitedQueue = Symbol("__queue");

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/fileFilters.js
function filterNonFailedFiles(files) {
  const hasError = (file) => "error" in file && file.error;
  return files.filter((file) => !hasError(file));
}
function filterFilesToEmitUploadStarted(files) {
  return files.filter((file) => !file.progress.uploadStarted || !file.isRestored);
}

// node_modules/.pnpm/@uppy+tus@3.1.2_@uppy+core@3.3.0/node_modules/@uppy/tus/lib/getFingerprint.js
function isCordova3() {
  return typeof window !== "undefined" && (typeof window.PhoneGap !== "undefined" || typeof window.Cordova !== "undefined" || typeof window.cordova !== "undefined");
}
function isReactNative3() {
  return typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
}
function getFingerprint(uppyFileObj) {
  return (file, options) => {
    if (isCordova3() || isReactNative3()) {
      return defaultOptions2.fingerprint(file, options);
    }
    const uppyFingerprint = ["tus", uppyFileObj.id, options.endpoint].join("-");
    return Promise.resolve(uppyFingerprint);
  };
}

// node_modules/.pnpm/@uppy+tus@3.1.2_@uppy+core@3.3.0/node_modules/@uppy/tus/lib/index.js
function _classPrivateFieldLooseBase7(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id7 = 0;
function _classPrivateFieldLooseKey7(name) {
  return "__private_" + id7++ + "_" + name;
}
var packageJson2 = {
  "version": "3.1.2"
};
var tusDefaultOptions = {
  endpoint: "",
  uploadUrl: null,
  metadata: {},
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  overridePatchMethod: false,
  headers: {},
  addRequestId: false,
  chunkSize: Infinity,
  retryDelays: [100, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  removeFingerprintOnSuccess: false,
  uploadLengthDeferred: false,
  uploadDataDuringCreation: false
};
var _retryDelayIterator = /* @__PURE__ */ _classPrivateFieldLooseKey7("retryDelayIterator");
var _upload = /* @__PURE__ */ _classPrivateFieldLooseKey7("upload");
var _requestSocketToken = /* @__PURE__ */ _classPrivateFieldLooseKey7("requestSocketToken");
var _uploadFiles = /* @__PURE__ */ _classPrivateFieldLooseKey7("uploadFiles");
var _handleUpload = /* @__PURE__ */ _classPrivateFieldLooseKey7("handleUpload");
var Tus = class extends UploaderPlugin {
  /**
   * @param {Uppy} uppy
   * @param {TusOptions} opts
   */
  constructor(uppy, _opts) {
    var _this$opts$rateLimite, _this$opts$retryDelay;
    super(uppy, _opts);
    Object.defineProperty(this, _uploadFiles, {
      value: _uploadFiles2
    });
    Object.defineProperty(this, _upload, {
      value: _upload2
    });
    Object.defineProperty(this, _retryDelayIterator, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _requestSocketToken, {
      writable: true,
      value: async (file, options) => {
        const Client = file.remote.providerOptions.provider ? Provider : RequestClient;
        const client = new Client(this.uppy, file.remote.providerOptions);
        const opts = {
          ...this.opts
        };
        if (file.tus) {
          Object.assign(opts, file.tus);
        }
        const res = await client.post(file.remote.url, {
          ...file.remote.body,
          endpoint: opts.endpoint,
          uploadUrl: opts.uploadUrl,
          protocol: "tus",
          size: file.data.size,
          headers: opts.headers,
          metadata: file.meta
        }, options);
        return res.token;
      }
    });
    Object.defineProperty(this, _handleUpload, {
      writable: true,
      value: async (fileIDs) => {
        if (fileIDs.length === 0) {
          this.uppy.log("[Tus] No files to upload");
          return;
        }
        if (this.opts.limit === 0) {
          this.uppy.log("[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0", "warning");
        }
        this.uppy.log("[Tus] Uploading...");
        const filesToUpload = this.uppy.getFilesByIds(fileIDs);
        await _classPrivateFieldLooseBase7(this, _uploadFiles)[_uploadFiles](filesToUpload);
      }
    });
    this.type = "uploader";
    this.id = this.opts.id || "Tus";
    this.title = "Tus";
    const defaultOptions3 = {
      useFastRemoteRetry: true,
      limit: 20,
      retryDelays: tusDefaultOptions.retryDelays,
      withCredentials: false
    };
    this.opts = {
      ...defaultOptions3,
      ..._opts
    };
    if ((_opts == null ? void 0 : _opts.allowedMetaFields) === void 0 && "metaFields" in this.opts) {
      throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
    }
    if ("autoRetry" in _opts) {
      throw new Error("The `autoRetry` option was deprecated and has been removed.");
    }
    this.requests = (_this$opts$rateLimite = this.opts.rateLimitedQueue) != null ? _this$opts$rateLimite : new RateLimitedQueue(this.opts.limit);
    _classPrivateFieldLooseBase7(this, _retryDelayIterator)[_retryDelayIterator] = (_this$opts$retryDelay = this.opts.retryDelays) == null ? void 0 : _this$opts$retryDelay.values();
    this.uploaders = /* @__PURE__ */ Object.create(null);
    this.uploaderEvents = /* @__PURE__ */ Object.create(null);
    this.uploaderSockets = /* @__PURE__ */ Object.create(null);
    this.handleResetProgress = this.handleResetProgress.bind(this);
    this.setQueueRequestSocketToken(this.requests.wrapPromiseFunction(_classPrivateFieldLooseBase7(this, _requestSocketToken)[_requestSocketToken], {
      priority: -1
    }));
  }
  handleResetProgress() {
    const files = {
      ...this.uppy.getState().files
    };
    Object.keys(files).forEach((fileID) => {
      if (files[fileID].tus && files[fileID].tus.uploadUrl) {
        const tusState = {
          ...files[fileID].tus
        };
        delete tusState.uploadUrl;
        files[fileID] = {
          ...files[fileID],
          tus: tusState
        };
      }
    });
    this.uppy.setState({
      files
    });
  }
  /**
   * Clean up all references for a file's upload: the tus.Upload instance,
   * any events related to the file, and the Companion WebSocket connection.
   *
   * @param {string} fileID
   */
  resetUploaderReferences(fileID, opts) {
    if (opts === void 0) {
      opts = {};
    }
    if (this.uploaders[fileID]) {
      const uploader = this.uploaders[fileID];
      uploader.abort();
      if (opts.abort) {
        uploader.abort(true);
      }
      this.uploaders[fileID] = null;
    }
    if (this.uploaderEvents[fileID]) {
      this.uploaderEvents[fileID].remove();
      this.uploaderEvents[fileID] = null;
    }
    if (this.uploaderSockets[fileID]) {
      this.uploaderSockets[fileID].close();
      this.uploaderSockets[fileID] = null;
    }
  }
  /**
   * See the comment on the upload() method.
   *
   * Additionally, when an upload is removed, completed, or cancelled, we need to close the WebSocket connection. This is
   * handled by the resetUploaderReferences() function, so the same guidelines apply as in upload().
   *
   * @param {UppyFile} file
   */
  async connectToServerSocket(file) {
    var _this = this;
    return new Promise((resolve, reject) => {
      const token = file.serverToken;
      const host = getSocketHost(file.remote.companionUrl);
      const socket = new UppySocket({
        target: `${host}/api/${token}`,
        autoOpen: false
      });
      this.uploaderSockets[file.id] = socket;
      this.uploaderEvents[file.id] = new EventManager(this.uppy);
      let queuedRequest;
      this.onFileRemove(file.id, () => {
        socket.send("cancel", {});
        queuedRequest.abort();
        this.resetUploaderReferences(file.id);
        resolve(`upload ${file.id} was removed`);
      });
      this.onPause(file.id, (isPaused) => {
        if (isPaused) {
          socket.send("pause", {});
          queuedRequest.abort();
        } else {
          queuedRequest.abort();
          queuedRequest = this.requests.run(() => {
            socket.open();
            socket.send("resume", {});
            return () => {
            };
          });
        }
      });
      this.onPauseAll(file.id, () => {
        socket.send("pause", {});
        queuedRequest.abort();
      });
      this.onCancelAll(file.id, function(_temp) {
        let {
          reason
        } = _temp === void 0 ? {} : _temp;
        if (reason === "user") {
          socket.send("cancel", {});
          queuedRequest.abort();
          _this.resetUploaderReferences(file.id);
        }
        resolve(`upload ${file.id} was canceled`);
      });
      this.onResumeAll(file.id, () => {
        queuedRequest.abort();
        if (file.error) {
          socket.send("pause", {});
        }
        queuedRequest = this.requests.run(() => {
          socket.open();
          socket.send("resume", {});
          return () => {
          };
        });
      });
      this.onRetry(file.id, () => {
        if (socket.isOpen) {
          socket.send("pause", {});
          socket.send("resume", {});
        }
      });
      this.onRetryAll(file.id, () => {
        if (socket.isOpen) {
          socket.send("pause", {});
          socket.send("resume", {});
        }
      });
      socket.on("progress", (progressData) => emitSocketProgress_default(this, progressData, file));
      socket.on("error", (errData) => {
        const {
          message
        } = errData.error;
        const error = Object.assign(new Error(message), {
          cause: errData.error
        });
        if (!this.opts.useFastRemoteRetry) {
          this.resetUploaderReferences(file.id);
          this.uppy.setFileState(file.id, {
            serverToken: null
          });
        } else {
          socket.close();
        }
        this.uppy.emit("upload-error", file, error);
        queuedRequest.done();
        reject(error);
      });
      socket.on("success", (data) => {
        const uploadResp = {
          uploadURL: data.url
        };
        this.uppy.emit("upload-success", file, uploadResp);
        this.resetUploaderReferences(file.id);
        queuedRequest.done();
        socket.close();
        resolve();
      });
      queuedRequest = this.requests.run(() => {
        if (file.isPaused) {
          socket.send("pause", {});
        } else {
          socket.open();
        }
        return () => {
        };
      });
    });
  }
  /**
   * Store the uploadUrl on the file options, so that when Golden Retriever
   * restores state, we will continue uploading to the correct URL.
   *
   * @param {UppyFile} file
   * @param {string} uploadURL
   */
  onReceiveUploadUrl(file, uploadURL) {
    const currentFile = this.uppy.getFile(file.id);
    if (!currentFile)
      return;
    if (!currentFile.tus || currentFile.tus.uploadUrl !== uploadURL) {
      this.uppy.log("[Tus] Storing upload url");
      this.uppy.setFileState(currentFile.id, {
        tus: {
          ...currentFile.tus,
          uploadUrl: uploadURL
        }
      });
    }
  }
  /**
   * @param {string} fileID
   * @param {function(string): void} cb
   */
  onFileRemove(fileID, cb) {
    this.uploaderEvents[fileID].on("file-removed", (file) => {
      if (fileID === file.id)
        cb(file.id);
    });
  }
  /**
   * @param {string} fileID
   * @param {function(boolean): void} cb
   */
  onPause(fileID, cb) {
    this.uploaderEvents[fileID].on("upload-pause", (targetFileID, isPaused) => {
      if (fileID === targetFileID) {
        cb(isPaused);
      }
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onRetry(fileID, cb) {
    this.uploaderEvents[fileID].on("upload-retry", (targetFileID) => {
      if (fileID === targetFileID) {
        cb();
      }
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onRetryAll(fileID, cb) {
    this.uploaderEvents[fileID].on("retry-all", () => {
      if (!this.uppy.getFile(fileID))
        return;
      cb();
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onPauseAll(fileID, cb) {
    this.uploaderEvents[fileID].on("pause-all", () => {
      if (!this.uppy.getFile(fileID))
        return;
      cb();
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} eventHandler
   */
  onCancelAll(fileID, eventHandler) {
    var _this2 = this;
    this.uploaderEvents[fileID].on("cancel-all", function() {
      if (!_this2.uppy.getFile(fileID))
        return;
      eventHandler(...arguments);
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onResumeAll(fileID, cb) {
    this.uploaderEvents[fileID].on("resume-all", () => {
      if (!this.uppy.getFile(fileID))
        return;
      cb();
    });
  }
  install() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: true
      }
    });
    this.uppy.addUploader(_classPrivateFieldLooseBase7(this, _handleUpload)[_handleUpload]);
    this.uppy.on("reset-progress", this.handleResetProgress);
  }
  uninstall() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: false
      }
    });
    this.uppy.removeUploader(_classPrivateFieldLooseBase7(this, _handleUpload)[_handleUpload]);
  }
};
function _upload2(file) {
  var _this3 = this;
  this.resetUploaderReferences(file.id);
  return new Promise((resolve, reject) => {
    let queuedRequest;
    let qRequest;
    let upload;
    const opts = {
      ...this.opts,
      ...file.tus || {}
    };
    if (typeof opts.headers === "function") {
      opts.headers = opts.headers(file);
    }
    const uploadOptions = {
      ...tusDefaultOptions,
      ...opts
    };
    uploadOptions.fingerprint = getFingerprint(file);
    uploadOptions.onBeforeRequest = (req) => {
      const xhr = req.getUnderlyingObject();
      xhr.withCredentials = !!opts.withCredentials;
      let userProvidedPromise;
      if (typeof opts.onBeforeRequest === "function") {
        userProvidedPromise = opts.onBeforeRequest(req, file);
      }
      if (has(queuedRequest, "shouldBeRequeued")) {
        if (!queuedRequest.shouldBeRequeued)
          return Promise.reject();
        let done;
        const p = new Promise((res) => {
          done = res;
        });
        queuedRequest = this.requests.run(() => {
          if (file.isPaused) {
            queuedRequest.abort();
          }
          done();
          return () => {
          };
        });
        return Promise.all([p, userProvidedPromise]);
      }
      return userProvidedPromise;
    };
    uploadOptions.onError = (err) => {
      var _queuedRequest;
      this.uppy.log(err);
      const xhr = err.originalRequest ? err.originalRequest.getUnderlyingObject() : null;
      if (isNetworkError_default(xhr)) {
        err = new NetworkError_default(err, xhr);
      }
      this.resetUploaderReferences(file.id);
      (_queuedRequest = queuedRequest) == null ? void 0 : _queuedRequest.abort();
      this.uppy.emit("upload-error", file, err);
      reject(err);
    };
    uploadOptions.onProgress = (bytesUploaded, bytesTotal) => {
      this.onReceiveUploadUrl(file, upload.url);
      this.uppy.emit("upload-progress", file, {
        uploader: this,
        bytesUploaded,
        bytesTotal
      });
    };
    uploadOptions.onSuccess = () => {
      const uploadResp = {
        uploadURL: upload.url
      };
      this.resetUploaderReferences(file.id);
      queuedRequest.done();
      this.uppy.emit("upload-success", file, uploadResp);
      if (upload.url) {
        this.uppy.log(`Download ${upload.file.name} from ${upload.url}`);
      }
      resolve(upload);
    };
    const defaultOnShouldRetry = (err) => {
      var _err$originalResponse;
      const status = err == null ? void 0 : (_err$originalResponse = err.originalResponse) == null ? void 0 : _err$originalResponse.getStatus();
      if (status === 429) {
        if (!this.requests.isPaused) {
          var _classPrivateFieldLoo;
          const next = (_classPrivateFieldLoo = _classPrivateFieldLooseBase7(this, _retryDelayIterator)[_retryDelayIterator]) == null ? void 0 : _classPrivateFieldLoo.next();
          if (next == null || next.done) {
            return false;
          }
          this.requests.rateLimit(next.value);
        }
      } else if (status > 400 && status < 500 && status !== 409 && status !== 423) {
        return false;
      } else if (typeof navigator !== "undefined" && navigator.onLine === false) {
        if (!this.requests.isPaused) {
          this.requests.pause();
          window.addEventListener("online", () => {
            this.requests.resume();
          }, {
            once: true
          });
        }
      }
      queuedRequest.abort();
      queuedRequest = {
        shouldBeRequeued: true,
        abort() {
          this.shouldBeRequeued = false;
        },
        done() {
          throw new Error("Cannot mark a queued request as done: this indicates a bug");
        },
        fn() {
          throw new Error("Cannot run a queued request: this indicates a bug");
        }
      };
      return true;
    };
    if (opts.onShouldRetry != null) {
      uploadOptions.onShouldRetry = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return opts.onShouldRetry(...args, defaultOnShouldRetry);
      };
    } else {
      uploadOptions.onShouldRetry = defaultOnShouldRetry;
    }
    const copyProp = (obj, srcProp, destProp) => {
      if (has(obj, srcProp) && !has(obj, destProp)) {
        obj[destProp] = obj[srcProp];
      }
    };
    const meta = {};
    const allowedMetaFields = Array.isArray(opts.allowedMetaFields) ? opts.allowedMetaFields : Object.keys(file.meta);
    allowedMetaFields.forEach((item) => {
      meta[item] = file.meta[item];
    });
    copyProp(meta, "type", "filetype");
    copyProp(meta, "name", "filename");
    uploadOptions.metadata = meta;
    upload = new Upload(file.data, uploadOptions);
    this.uploaders[file.id] = upload;
    this.uploaderEvents[file.id] = new EventManager(this.uppy);
    qRequest = () => {
      if (!file.isPaused) {
        upload.start();
      }
      return () => {
      };
    };
    upload.findPreviousUploads().then((previousUploads) => {
      const previousUpload = previousUploads[0];
      if (previousUpload) {
        this.uppy.log(`[Tus] Resuming upload of ${file.id} started at ${previousUpload.creationTime}`);
        upload.resumeFromPreviousUpload(previousUpload);
      }
    });
    queuedRequest = this.requests.run(qRequest);
    this.onFileRemove(file.id, (targetFileID) => {
      queuedRequest.abort();
      this.resetUploaderReferences(file.id, {
        abort: !!upload.url
      });
      resolve(`upload ${targetFileID} was removed`);
    });
    this.onPause(file.id, (isPaused) => {
      queuedRequest.abort();
      if (isPaused) {
        upload.abort();
      } else {
        queuedRequest = this.requests.run(qRequest);
      }
    });
    this.onPauseAll(file.id, () => {
      queuedRequest.abort();
      upload.abort();
    });
    this.onCancelAll(file.id, function(_temp2) {
      let {
        reason
      } = _temp2 === void 0 ? {} : _temp2;
      if (reason === "user") {
        queuedRequest.abort();
        _this3.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });
      }
      resolve(`upload ${file.id} was canceled`);
    });
    this.onResumeAll(file.id, () => {
      queuedRequest.abort();
      if (file.error) {
        upload.abort();
      }
      queuedRequest = this.requests.run(qRequest);
    });
  }).catch((err) => {
    this.uppy.emit("upload-error", file, err);
    throw err;
  });
}
async function _uploadFiles2(files) {
  const filesFiltered = filterNonFailedFiles(files);
  const filesToEmit = filterFilesToEmitUploadStarted(filesFiltered);
  this.uppy.emit("upload-start", filesToEmit);
  await Promise.allSettled(filesFiltered.map((file, i) => {
    const current = i + 1;
    const total = files.length;
    if (file.isRemote) {
      const controller = new AbortController();
      const removedHandler = (removedFile) => {
        if (removedFile.id === file.id)
          controller.abort();
      };
      this.uppy.on("file-removed", removedHandler);
      this.resetUploaderReferences(file.id);
      const uploadPromise = this.uploadRemoteFile(file, {
        signal: controller.signal
      });
      this.requests.wrapSyncFunction(() => {
        this.uppy.off("file-removed", removedHandler);
      }, {
        priority: -1
      })();
      return uploadPromise;
    }
    return _classPrivateFieldLooseBase7(this, _upload)[_upload](file, current, total);
  }));
}
Tus.VERSION = packageJson2.version;
export {
  Tus as default
};
//# sourceMappingURL=/build/_shared/lib-LT5CEZ2P.js.map
