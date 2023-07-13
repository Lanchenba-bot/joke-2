import {
  F,
  S,
  UIPlugin_default,
  Uppy_default,
  _,
  b,
  getTextDirection_default,
  isDOMElement,
  k,
  l,
  nanoid,
  require_prettierBytes,
  y
} from "/build/_shared/chunk-7OMVVKH3.js";
import {
  require_debounce
} from "/build/_shared/chunk-IS66ZX3I.js";
import {
  require_react
} from "/build/_shared/chunk-SEUKET6G.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames10() {
        var classes = [];
        for (var i3 = 0; i3 < arguments.length; i3++) {
          var arg = arguments[i3];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames10.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames10.default = classNames10;
        module.exports = classNames10;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames10;
        });
      } else {
        window.classNames = classNames10;
      }
    })();
  }
});

// node_modules/.pnpm/is-shallow-equal@1.0.1/node_modules/is-shallow-equal/index.js
var require_is_shallow_equal = __commonJS({
  "node_modules/.pnpm/is-shallow-equal@1.0.1/node_modules/is-shallow-equal/index.js"(exports, module) {
    module.exports = function isShallowEqual(a3, b4) {
      if (a3 === b4)
        return true;
      for (var i3 in a3)
        if (!(i3 in b4))
          return false;
      for (var i3 in b4)
        if (a3[i3] !== b4[i3])
          return false;
      return true;
    };
  }
});

// node_modules/.pnpm/@transloadit+prettier-bytes@0.0.7/node_modules/@transloadit/prettier-bytes/prettierBytes.js
var require_prettierBytes2 = __commonJS({
  "node_modules/.pnpm/@transloadit+prettier-bytes@0.0.7/node_modules/@transloadit/prettier-bytes/prettierBytes.js"(exports, module) {
    module.exports = function prettierBytes3(num) {
      if (typeof num !== "number" || isNaN(num)) {
        throw new TypeError("Expected a number, got " + typeof num);
      }
      var neg = num < 0;
      var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (neg) {
        num = -num;
      }
      if (num < 1) {
        return (neg ? "-" : "") + num + " B";
      }
      var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      num = Number(num / Math.pow(1024, exponent));
      var unit = units[exponent];
      if (num >= 10 || num % 1 === 0) {
        return (neg ? "-" : "") + num.toFixed(0) + " " + unit;
      } else {
        return (neg ? "-" : "") + num.toFixed(1) + " " + unit;
      }
    };
  }
});

// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s3 = 1; s3 < arguments.length; s3++) {
        from = Object(arguments[s3]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols.length; i3++) {
            if (propIsEnumerable.call(from, symbols[i3])) {
              to[symbols[i3]] = from[symbols[i3]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y3) {
        if (x2 === y3) {
          return x2 !== 0 || 1 / x2 === 1 / y3;
        } else {
          return x2 !== x2 && y3 !== y3;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i3 = 0; i3 < propValue.length; i3++) {
            var error = typeChecker(propValue, i3, componentName, location, propFullName + "[" + i3 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i3 = 0; i3 < expectedValues.length; i3++) {
            if (is(propValue, expectedValues[i3])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
          var checker = arrayOfTypeCheckers[i3];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i3 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i4 = 0; i4 < arrayOfTypeCheckers.length; i4++) {
            var checker2 = arrayOfTypeCheckers[i4];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/Dashboard.js
var import_react = __toESM(require_react(), 1);

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/emaFilter.js
function emaFilter(newValue, previousSmoothedValue, halfLife, dt) {
  if (halfLife === 0 || newValue === previousSmoothedValue)
    return newValue;
  if (dt === 0)
    return previousSmoothedValue;
  return newValue + (previousSmoothedValue - newValue) * 2 ** (-dt / halfLife);
}

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/StatusBarStates.js
var StatusBarStates_default = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete"
};

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/StatusBarUI.js
var import_classnames2 = __toESM(require_classnames(), 1);

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/calculateProcessingProgress.js
function calculateProcessingProgress(files) {
  const values = [];
  let mode;
  let message;
  for (const {
    progress
  } of Object.values(files)) {
    const {
      preprocess,
      postprocess
    } = progress;
    if (message == null && (preprocess || postprocess)) {
      ({
        mode,
        message
      } = preprocess || postprocess);
    }
    if ((preprocess == null ? void 0 : preprocess.mode) === "determinate")
      values.push(preprocess.value);
    if ((postprocess == null ? void 0 : postprocess.mode) === "determinate")
      values.push(postprocess.value);
  }
  const value = values.reduce((total, progressValue) => {
    return total + progressValue / values.length;
  }, 0);
  return {
    mode,
    message,
    value
  };
}

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/Components.js
var import_classnames = __toESM(require_classnames(), 1);
var import_prettier_bytes = __toESM(require_prettierBytes(), 1);

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/secondsToTime.js
function secondsToTime(rawSeconds) {
  const hours = Math.floor(rawSeconds / 3600) % 24;
  const minutes = Math.floor(rawSeconds / 60) % 60;
  const seconds = Math.floor(rawSeconds % 60);
  return {
    hours,
    minutes,
    seconds
  };
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/prettyETA.js
function prettyETA(seconds) {
  const time = secondsToTime(seconds);
  const hoursStr = time.hours === 0 ? "" : `${time.hours}h`;
  const minutesStr = time.minutes === 0 ? "" : `${time.hours === 0 ? time.minutes : ` ${time.minutes.toString(10).padStart(2, "0")}`}m`;
  const secondsStr = time.hours !== 0 ? "" : `${time.minutes === 0 ? time.seconds : ` ${time.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${hoursStr}${minutesStr}${secondsStr}`;
}

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/Components.js
var DOT = `\xB7`;
var renderDot = () => ` ${DOT} `;
function UploadBtn(props) {
  const {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    uploadState,
    isSomeGhost,
    startUpload
  } = props;
  const uploadBtnClassNames = (0, import_classnames.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
    "uppy-c-btn-primary": uploadState === StatusBarStates_default.STATE_WAITING
  }, {
    "uppy-StatusBar-actionBtn--disabled": isSomeGhost
  });
  const uploadBtnText = newFiles && isUploadStarted && !recoveredState ? i18n("uploadXNewFiles", {
    smart_count: newFiles
  }) : i18n("uploadXFiles", {
    smart_count: newFiles
  });
  return y("button", {
    type: "button",
    className: uploadBtnClassNames,
    "aria-label": i18n("uploadXFiles", {
      smart_count: newFiles
    }),
    onClick: startUpload,
    disabled: isSomeGhost,
    "data-uppy-super-focusable": true
  }, uploadBtnText);
}
function RetryBtn(props) {
  const {
    i18n,
    uppy: uppy2
  } = props;
  return y("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": i18n("retryUpload"),
    onClick: () => uppy2.retryAll().catch(() => {
    }),
    "data-uppy-super-focusable": true
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, y("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), i18n("retry"));
}
function CancelBtn(props) {
  const {
    i18n,
    uppy: uppy2
  } = props;
  return y("button", {
    type: "button",
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: i18n("cancel"),
    "aria-label": i18n("cancel"),
    onClick: () => uppy2.cancelAll(),
    "data-cy": "cancel",
    "data-uppy-super-focusable": true
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, y("g", {
    fill: "none",
    fillRule: "evenodd"
  }, y("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), y("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
}
function PauseResumeButton(props) {
  const {
    isAllPaused,
    i18n,
    isAllComplete,
    resumableUploads,
    uppy: uppy2
  } = props;
  const title = isAllPaused ? i18n("resume") : i18n("pause");
  function togglePauseResume() {
    if (isAllComplete)
      return null;
    if (!resumableUploads) {
      return uppy2.cancelAll();
    }
    if (isAllPaused) {
      return uppy2.resumeAll();
    }
    return uppy2.pauseAll();
  }
  return y("button", {
    title,
    "aria-label": title,
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onClick: togglePauseResume,
    "data-uppy-super-focusable": true
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, y("g", {
    fill: "none",
    fillRule: "evenodd"
  }, y("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), y("path", {
    fill: "#FFF",
    d: isAllPaused ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
  }))));
}
function DoneBtn(props) {
  const {
    i18n,
    doneButtonHandler
  } = props;
  return y("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
    onClick: doneButtonHandler,
    "data-uppy-super-focusable": true
  }, i18n("done"));
}
function LoadingSpinner() {
  return y("svg", {
    className: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, y("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    fillRule: "evenodd"
  }));
}
function ProgressBarProcessing(props) {
  const {
    progress
  } = props;
  const {
    value,
    mode,
    message
  } = progress;
  const roundedValue = Math.round(value * 100);
  const dot = `\xB7`;
  return y("div", {
    className: "uppy-StatusBar-content"
  }, y(LoadingSpinner, null), mode === "determinate" ? `${roundedValue}% ${dot} ` : "", message);
}
function ProgressDetails(props) {
  const {
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    i18n
  } = props;
  const ifShowFilesUploadedOfTotal = numUploads > 1;
  return y("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, ifShowFilesUploadedOfTotal && i18n("filesUploadedOfTotal", {
    complete,
    smart_count: numUploads
  }), y("span", {
    className: "uppy-StatusBar-additionalInfo"
  }, ifShowFilesUploadedOfTotal && renderDot(), i18n("dataUploadedOfTotal", {
    complete: (0, import_prettier_bytes.default)(totalUploadedSize),
    total: (0, import_prettier_bytes.default)(totalSize)
  }), renderDot(), i18n("xTimeLeft", {
    time: prettyETA(totalETA)
  })));
}
function FileUploadCount(props) {
  const {
    i18n,
    complete,
    numUploads
  } = props;
  return y("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, i18n("filesUploadedOfTotal", {
    complete,
    smart_count: numUploads
  }));
}
function UploadNewlyAddedFiles(props) {
  const {
    i18n,
    newFiles,
    startUpload
  } = props;
  const uploadBtnClassNames = (0, import_classnames.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
  return y("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, y("div", {
    className: "uppy-StatusBar-statusSecondaryHint"
  }, i18n("xMoreFilesAdded", {
    smart_count: newFiles
  })), y("button", {
    type: "button",
    className: uploadBtnClassNames,
    "aria-label": i18n("uploadXFiles", {
      smart_count: newFiles
    }),
    onClick: startUpload
  }, i18n("upload")));
}
function ProgressBarUploading(props) {
  const {
    i18n,
    supportsUploadProgress,
    totalProgress,
    showProgressDetails,
    isUploadStarted,
    isAllComplete,
    isAllPaused,
    newFiles,
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    startUpload
  } = props;
  const showUploadNewlyAddedFiles = newFiles && isUploadStarted;
  if (!isUploadStarted || isAllComplete) {
    return null;
  }
  const title = isAllPaused ? i18n("paused") : i18n("uploading");
  function renderProgressDetails() {
    if (!isAllPaused && !showUploadNewlyAddedFiles && showProgressDetails) {
      if (supportsUploadProgress) {
        return y(ProgressDetails, {
          numUploads,
          complete,
          totalUploadedSize,
          totalSize,
          totalETA,
          i18n
        });
      }
      return y(FileUploadCount, {
        i18n,
        complete,
        numUploads
      });
    }
    return null;
  }
  return y("div", {
    className: "uppy-StatusBar-content",
    "aria-label": title,
    title
  }, !isAllPaused ? y(LoadingSpinner, null) : null, y("div", {
    className: "uppy-StatusBar-status"
  }, y("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, supportsUploadProgress ? `${title}: ${totalProgress}%` : title), renderProgressDetails(), showUploadNewlyAddedFiles ? y(UploadNewlyAddedFiles, {
    i18n,
    newFiles,
    startUpload
  }) : null));
}
function ProgressBarComplete(props) {
  const {
    i18n
  } = props;
  return y("div", {
    className: "uppy-StatusBar-content",
    role: "status",
    title: i18n("complete")
  }, y("div", {
    className: "uppy-StatusBar-status"
  }, y("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, y("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), i18n("complete"))));
}
function ProgressBarError(props) {
  const {
    error,
    i18n,
    complete,
    numUploads
  } = props;
  function displayErrorAlert() {
    const errorMessage = `${i18n("uploadFailed")} 

 ${error}`;
    alert(errorMessage);
  }
  return y("div", {
    className: "uppy-StatusBar-content",
    title: i18n("uploadFailed")
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, y("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), y("div", {
    className: "uppy-StatusBar-status"
  }, y("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, i18n("uploadFailed"), y("button", {
    className: "uppy-u-reset uppy-StatusBar-details",
    "aria-label": i18n("showErrorDetails"),
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    onClick: displayErrorAlert,
    type: "button"
  }, "?")), y(FileUploadCount, {
    i18n,
    complete,
    numUploads
  })));
}

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/StatusBarUI.js
var {
  STATE_ERROR,
  STATE_WAITING,
  STATE_PREPROCESSING,
  STATE_UPLOADING,
  STATE_POSTPROCESSING,
  STATE_COMPLETE
} = StatusBarStates_default;
function StatusBar(props) {
  const {
    newFiles,
    allowNewUpload,
    isUploadInProgress,
    isAllPaused,
    resumableUploads,
    error,
    hideUploadButton,
    hidePauseResumeButton,
    hideCancelButton,
    hideRetryButton,
    recoveredState,
    uploadState,
    totalProgress,
    files,
    supportsUploadProgress,
    hideAfterFinish,
    isSomeGhost,
    doneButtonHandler,
    isUploadStarted,
    i18n,
    startUpload,
    uppy: uppy2,
    isAllComplete,
    showProgressDetails,
    numUploads,
    complete,
    totalSize,
    totalETA,
    totalUploadedSize
  } = props;
  function getProgressValue() {
    switch (uploadState) {
      case STATE_POSTPROCESSING:
      case STATE_PREPROCESSING: {
        const progress = calculateProcessingProgress(files);
        if (progress.mode === "determinate") {
          return progress.value * 100;
        }
        return totalProgress;
      }
      case STATE_ERROR: {
        return null;
      }
      case STATE_UPLOADING: {
        if (!supportsUploadProgress) {
          return null;
        }
        return totalProgress;
      }
      default:
        return totalProgress;
    }
  }
  function getIsIndeterminate() {
    switch (uploadState) {
      case STATE_POSTPROCESSING:
      case STATE_PREPROCESSING: {
        const {
          mode
        } = calculateProcessingProgress(files);
        return mode === "indeterminate";
      }
      case STATE_UPLOADING: {
        if (!supportsUploadProgress) {
          return true;
        }
        return false;
      }
      default:
        return false;
    }
  }
  function getIsHidden() {
    if (recoveredState) {
      return false;
    }
    switch (uploadState) {
      case STATE_WAITING:
        return hideUploadButton || newFiles === 0;
      case STATE_COMPLETE:
        return hideAfterFinish;
      default:
        return false;
    }
  }
  const progressValue = getProgressValue();
  const isHidden = getIsHidden();
  const width = progressValue != null ? progressValue : 100;
  const showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
  const showCancelBtn = !hideCancelButton && uploadState !== STATE_WAITING && uploadState !== STATE_COMPLETE;
  const showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === STATE_UPLOADING;
  const showRetryBtn = error && !isAllComplete && !hideRetryButton;
  const showDoneBtn = doneButtonHandler && uploadState === STATE_COMPLETE;
  const progressClassNames = (0, import_classnames2.default)("uppy-StatusBar-progress", {
    "is-indeterminate": getIsIndeterminate()
  });
  const statusBarClassNames = (0, import_classnames2.default)("uppy-StatusBar", `is-${uploadState}`, {
    "has-ghosts": isSomeGhost
  });
  return y("div", {
    className: statusBarClassNames,
    "aria-hidden": isHidden
  }, y("div", {
    className: progressClassNames,
    style: {
      width: `${width}%`
    },
    role: "progressbar",
    "aria-label": `${width}%`,
    "aria-valuetext": `${width}%`,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": progressValue
  }), (() => {
    switch (uploadState) {
      case STATE_PREPROCESSING:
      case STATE_POSTPROCESSING:
        return y(ProgressBarProcessing, {
          progress: calculateProcessingProgress(files)
        });
      case STATE_COMPLETE:
        return y(ProgressBarComplete, {
          i18n
        });
      case STATE_ERROR:
        return y(ProgressBarError, {
          error,
          i18n,
          numUploads,
          complete
        });
      case STATE_UPLOADING:
        return y(ProgressBarUploading, {
          i18n,
          supportsUploadProgress,
          totalProgress,
          showProgressDetails,
          isUploadStarted,
          isAllComplete,
          isAllPaused,
          newFiles,
          numUploads,
          complete,
          totalUploadedSize,
          totalSize,
          totalETA,
          startUpload
        });
      default:
        return null;
    }
  })(), y("div", {
    className: "uppy-StatusBar-actions"
  }, recoveredState || showUploadBtn ? y(UploadBtn, {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    isSomeGhost,
    startUpload,
    uploadState
  }) : null, showRetryBtn ? y(RetryBtn, {
    i18n,
    uppy: uppy2
  }) : null, showPauseResumeBtn ? y(PauseResumeButton, {
    isAllPaused,
    i18n,
    isAllComplete,
    resumableUploads,
    uppy: uppy2
  }) : null, showCancelBtn ? y(CancelBtn, {
    i18n,
    uppy: uppy2
  }) : null, showDoneBtn ? y(DoneBtn, {
    i18n,
    doneButtonHandler
  }) : null));
}

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/locale.js
var locale_default = {
  strings: {
    // Shown in the status bar while files are being uploaded.
    uploading: "Uploading",
    // Shown in the status bar once all files have been uploaded.
    complete: "Complete",
    // Shown in the status bar if an upload failed.
    uploadFailed: "Upload failed",
    // Shown in the status bar while the upload is paused.
    paused: "Paused",
    // Used as the label for the button that retries an upload.
    retry: "Retry",
    // Used as the label for the button that cancels an upload.
    cancel: "Cancel",
    // Used as the label for the button that pauses an upload.
    pause: "Pause",
    // Used as the label for the button that resumes an upload.
    resume: "Resume",
    // Used as the label for the button that resets the upload state after an upload
    done: "Done",
    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.
    filesUploadedOfTotal: {
      0: "%{complete} of %{smart_count} file uploaded",
      1: "%{complete} of %{smart_count} files uploaded"
    },
    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.
    dataUploadedOfTotal: "%{complete} of %{total}",
    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.
    xTimeLeft: "%{time} left",
    // Used as the label for the button that starts an upload.
    uploadXFiles: {
      0: "Upload %{smart_count} file",
      1: "Upload %{smart_count} files"
    },
    // Used as the label for the button that starts an upload, if another upload has been started in the past
    // and new files were added later.
    uploadXNewFiles: {
      0: "Upload +%{smart_count} file",
      1: "Upload +%{smart_count} files"
    },
    upload: "Upload",
    retryUpload: "Retry upload",
    xMoreFilesAdded: {
      0: "%{smart_count} more file added",
      1: "%{smart_count} more files added"
    },
    showErrorDetails: "Show error details"
  }
};

// node_modules/.pnpm/@uppy+status-bar@3.2.1_@uppy+core@3.3.0/node_modules/@uppy/status-bar/lib/StatusBar.js
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
var packageJson = {
  "version": "3.2.1"
};
var speedFilterHalfLife = 2e3;
var ETAFilterHalfLife = 2e3;
function getUploadingState(error, isAllComplete, recoveredState, files) {
  if (error) {
    return StatusBarStates_default.STATE_ERROR;
  }
  if (isAllComplete) {
    return StatusBarStates_default.STATE_COMPLETE;
  }
  if (recoveredState) {
    return StatusBarStates_default.STATE_WAITING;
  }
  let state = StatusBarStates_default.STATE_WAITING;
  const fileIDs = Object.keys(files);
  for (let i3 = 0; i3 < fileIDs.length; i3++) {
    const {
      progress
    } = files[fileIDs[i3]];
    if (progress.uploadStarted && !progress.uploadComplete) {
      return StatusBarStates_default.STATE_UPLOADING;
    }
    if (progress.preprocess && state !== StatusBarStates_default.STATE_UPLOADING) {
      state = StatusBarStates_default.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== StatusBarStates_default.STATE_UPLOADING && state !== StatusBarStates_default.STATE_PREPROCESSING) {
      state = StatusBarStates_default.STATE_POSTPROCESSING;
    }
  }
  return state;
}
var _lastUpdateTime = /* @__PURE__ */ _classPrivateFieldLooseKey("lastUpdateTime");
var _previousUploadedBytes = /* @__PURE__ */ _classPrivateFieldLooseKey("previousUploadedBytes");
var _previousSpeed = /* @__PURE__ */ _classPrivateFieldLooseKey("previousSpeed");
var _previousETA = /* @__PURE__ */ _classPrivateFieldLooseKey("previousETA");
var _computeSmoothETA = /* @__PURE__ */ _classPrivateFieldLooseKey("computeSmoothETA");
var StatusBar2 = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    Object.defineProperty(this, _computeSmoothETA, {
      value: _computeSmoothETA2
    });
    Object.defineProperty(this, _lastUpdateTime, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousUploadedBytes, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousSpeed, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousETA, {
      writable: true,
      value: void 0
    });
    this.startUpload = () => {
      const {
        recoveredState
      } = this.uppy.getState();
      _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed] = null;
      _classPrivateFieldLooseBase(this, _previousETA)[_previousETA] = null;
      if (recoveredState) {
        _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = Object.values(recoveredState.files).reduce((pv, _ref) => {
          let {
            progress
          } = _ref;
          return pv + progress.bytesUploaded;
        }, 0);
        this.uppy.emit("restore-confirmed");
        return void 0;
      }
      _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
      _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = 0;
      return this.uppy.upload().catch(() => {
      });
    };
    this.id = this.opts.id || "StatusBar";
    this.title = "StatusBar";
    this.type = "progressindicator";
    this.defaultLocale = locale_default;
    const defaultOptions = {
      target: "body",
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      showProgressDetails: false,
      hideAfterFinish: true,
      doneButtonHandler: null
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.render = this.render.bind(this);
    this.install = this.install.bind(this);
  }
  render(state) {
    const {
      capabilities,
      files,
      allowNewUpload,
      totalProgress,
      error,
      recoveredState
    } = state;
    const {
      newFiles,
      startedFiles,
      completeFiles,
      isUploadStarted,
      isAllComplete,
      isAllErrored,
      isAllPaused,
      isUploadInProgress,
      isSomeGhost
    } = this.uppy.getObjectOfFilesPerState();
    const newFilesOrRecovered = recoveredState ? Object.values(files) : newFiles;
    const resumableUploads = !!capabilities.resumableUploads;
    const supportsUploadProgress = capabilities.uploadProgress !== false;
    let totalSize = 0;
    let totalUploadedSize = 0;
    startedFiles.forEach((file) => {
      totalSize += file.progress.bytesTotal || 0;
      totalUploadedSize += file.progress.bytesUploaded || 0;
    });
    const totalETA = _classPrivateFieldLooseBase(this, _computeSmoothETA)[_computeSmoothETA]({
      uploaded: totalUploadedSize,
      total: totalSize,
      remaining: totalSize - totalUploadedSize
    });
    return StatusBar({
      error,
      uploadState: getUploadingState(error, isAllComplete, recoveredState, state.files || {}),
      allowNewUpload,
      totalProgress,
      totalSize,
      totalUploadedSize,
      isAllComplete: false,
      isAllPaused,
      isAllErrored,
      isUploadStarted,
      isUploadInProgress,
      isSomeGhost,
      recoveredState,
      complete: completeFiles.length,
      newFiles: newFilesOrRecovered.length,
      numUploads: startedFiles.length,
      totalETA,
      files,
      i18n: this.i18n,
      uppy: this.uppy,
      startUpload: this.startUpload,
      doneButtonHandler: this.opts.doneButtonHandler,
      resumableUploads,
      supportsUploadProgress,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
  }
  onMount() {
    const element = this.el;
    const direction = getTextDirection_default(element);
    if (!direction) {
      element.dir = "ltr";
    }
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
  uninstall() {
    this.unmount();
  }
};
function _computeSmoothETA2(totalBytes) {
  var _classPrivateFieldLoo, _classPrivateFieldLoo2;
  if (totalBytes.total === 0 || totalBytes.remaining === 0) {
    return 0;
  }
  (_classPrivateFieldLoo2 = (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _lastUpdateTime))[_lastUpdateTime]) != null ? _classPrivateFieldLoo2 : _classPrivateFieldLoo[_lastUpdateTime] = performance.now();
  const dt = performance.now() - _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime];
  if (dt === 0) {
    var _classPrivateFieldLoo3;
    return Math.round(((_classPrivateFieldLoo3 = _classPrivateFieldLooseBase(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo3 : 0) / 100) / 10;
  }
  const uploadedBytesSinceLastTick = totalBytes.uploaded - _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes];
  _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = totalBytes.uploaded;
  if (uploadedBytesSinceLastTick <= 0) {
    var _classPrivateFieldLoo4;
    return Math.round(((_classPrivateFieldLoo4 = _classPrivateFieldLooseBase(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo4 : 0) / 100) / 10;
  }
  const currentSpeed = uploadedBytesSinceLastTick / dt;
  const filteredSpeed = _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed] == null ? currentSpeed : emaFilter(currentSpeed, _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed], speedFilterHalfLife, dt);
  _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed] = filteredSpeed;
  const instantETA = totalBytes.remaining / filteredSpeed;
  const updatedPreviousETA = Math.max(_classPrivateFieldLooseBase(this, _previousETA)[_previousETA] - dt, 0);
  const filteredETA = _classPrivateFieldLooseBase(this, _previousETA)[_previousETA] == null ? instantETA : emaFilter(instantETA, updatedPreviousETA, ETAFilterHalfLife, dt);
  _classPrivateFieldLooseBase(this, _previousETA)[_previousETA] = filteredETA;
  _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
  return Math.round(filteredETA / 100) / 10;
}
StatusBar2.VERSION = packageJson.version;

// node_modules/.pnpm/@uppy+informer@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/informer/lib/FadeIn.js
var TRANSITION_MS = 300;
var FadeIn = class extends b {
  constructor() {
    super(...arguments);
    this.ref = _();
  }
  componentWillEnter(callback) {
    this.ref.current.style.opacity = "1";
    this.ref.current.style.transform = "none";
    setTimeout(callback, TRANSITION_MS);
  }
  componentWillLeave(callback) {
    this.ref.current.style.opacity = "0";
    this.ref.current.style.transform = "translateY(350%)";
    setTimeout(callback, TRANSITION_MS);
  }
  render() {
    const {
      children
    } = this.props;
    return y("div", {
      className: "uppy-Informer-animated",
      ref: this.ref
    }, children);
  }
};

// node_modules/.pnpm/@uppy+informer@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/informer/lib/TransitionGroup.js
function assign(obj, props) {
  return Object.assign(obj, props);
}
function getKey(vnode, fallback) {
  var _vnode$key;
  return (_vnode$key = vnode == null ? void 0 : vnode.key) != null ? _vnode$key : fallback;
}
function linkRef(component, name) {
  const cache = component._ptgLinkedRefs || (component._ptgLinkedRefs = {});
  return cache[name] || (cache[name] = (c3) => {
    component.refs[name] = c3;
  });
}
function getChildMapping(children) {
  const out = {};
  for (let i3 = 0; i3 < children.length; i3++) {
    if (children[i3] != null) {
      const key = getKey(children[i3], i3.toString(36));
      out[key] = children[i3];
    }
  }
  return out;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  const getValueForKey = (key) => next.hasOwnProperty(key) ? next[key] : prev[key];
  const nextKeysPending = {};
  let pendingKeys = [];
  for (const prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  const childMapping = {};
  for (const nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (let i3 = 0; i3 < nextKeysPending[nextKey].length; i3++) {
        const pendingNextKey = nextKeysPending[nextKey][i3];
        childMapping[nextKeysPending[nextKey][i3]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (let i3 = 0; i3 < pendingKeys.length; i3++) {
    childMapping[pendingKeys[i3]] = getValueForKey(pendingKeys[i3]);
  }
  return childMapping;
}
var identity = (i3) => i3;
var TransitionGroup = class extends b {
  constructor(props, context) {
    super(props, context);
    this.refs = {};
    this.state = {
      children: getChildMapping(S(S(this.props.children)) || [])
    };
    this.performAppear = this.performAppear.bind(this);
    this.performEnter = this.performEnter.bind(this);
    this.performLeave = this.performLeave.bind(this);
  }
  componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToAbortLeave = [];
    this.keysToEnter = [];
    this.keysToLeave = [];
  }
  componentDidMount() {
    const initialChildMapping = this.state.children;
    for (const key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const nextChildMapping = getChildMapping(S(nextProps.children) || []);
    const prevChildMapping = this.state.children;
    this.setState((prevState) => ({
      children: mergeChildMappings(prevState.children, nextChildMapping)
    }));
    let key;
    for (key in nextChildMapping) {
      if (nextChildMapping.hasOwnProperty(key)) {
        const hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && hasPrev && this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
          this.keysToAbortLeave.push(key);
        } else if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }
    }
    for (key in prevChildMapping) {
      if (prevChildMapping.hasOwnProperty(key)) {
        const hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
        if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
          this.keysToLeave.push(key);
        }
      }
    }
  }
  componentDidUpdate() {
    const {
      keysToEnter
    } = this;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);
    const {
      keysToLeave
    } = this;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  }
  _finishAbort(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      this.keysToAbortLeave.splice(idx, 1);
    }
  }
  performAppear(key) {
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillAppear) {
      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
    } else {
      this._handleDoneAppearing(key);
    }
  }
  _handleDoneAppearing(key) {
    const component = this.refs[key];
    if (component != null && component.componentDidAppear) {
      component.componentDidAppear();
    }
    delete this.currentlyTransitioningKeys[key];
    this._finishAbort(key);
    const currentChildMapping = getChildMapping(S(this.props.children) || []);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      this.performLeave(key);
    }
  }
  performEnter(key) {
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillEnter) {
      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
    } else {
      this._handleDoneEntering(key);
    }
  }
  _handleDoneEntering(key) {
    const component = this.refs[key];
    if (component != null && component.componentDidEnter) {
      component.componentDidEnter();
    }
    delete this.currentlyTransitioningKeys[key];
    this._finishAbort(key);
    const currentChildMapping = getChildMapping(S(this.props.children) || []);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      this.performLeave(key);
    }
  }
  performLeave(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      return;
    }
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillLeave) {
      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
    } else {
      this._handleDoneLeaving(key);
    }
  }
  _handleDoneLeaving(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      return;
    }
    const component = this.refs[key];
    if (component != null && component.componentDidLeave) {
      component.componentDidLeave();
    }
    delete this.currentlyTransitioningKeys[key];
    const currentChildMapping = getChildMapping(S(this.props.children) || []);
    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
      this.performEnter(key);
    } else {
      const children = assign({}, this.state.children);
      delete children[key];
      this.setState({
        children
      });
    }
  }
  render(_ref, _ref2) {
    let {
      childFactory,
      transitionLeave,
      transitionName: transitionName2,
      transitionAppear,
      transitionEnter,
      transitionLeaveTimeout,
      transitionEnterTimeout,
      transitionAppearTimeout,
      component,
      ...props
    } = _ref;
    let {
      children
    } = _ref2;
    const childrenToRender = Object.entries(children).map((_ref3) => {
      let [key, child] = _ref3;
      if (!child)
        return void 0;
      const ref = linkRef(this, key);
      return F(childFactory(child), {
        ref,
        key
      });
    }).filter(Boolean);
    return y(component, props, childrenToRender);
  }
};
TransitionGroup.defaultProps = {
  component: "span",
  childFactory: identity
};
var TransitionGroup_default = TransitionGroup;

// node_modules/.pnpm/@uppy+informer@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/informer/lib/Informer.js
var packageJson2 = {
  "version": "3.0.2"
};
var Informer = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    this.render = (state) => {
      return y("div", {
        className: "uppy uppy-Informer"
      }, y(TransitionGroup_default, null, state.info.map((info) => y(FadeIn, {
        key: info.message
      }, y("p", {
        role: "alert"
      }, info.message, " ", info.details && y("span", {
        "aria-label": info.details,
        "data-microtip-position": "top-left",
        "data-microtip-size": "medium",
        role: "tooltip",
        onClick: () => alert(`${info.message} 

 ${info.details}`)
      }, "?"))))));
    };
    this.type = "progressindicator";
    this.id = this.opts.id || "Informer";
    this.title = "Informer";
    const defaultOptions = {};
    this.opts = {
      ...defaultOptions,
      ...opts
    };
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
};
Informer.VERSION = packageJson2.version;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/dataURItoBlob.js
var DATA_URL_PATTERN = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function dataURItoBlob(dataURI, opts, toFile) {
  var _ref, _opts$mimeType;
  const dataURIData = DATA_URL_PATTERN.exec(dataURI);
  const mimeType = (_ref = (_opts$mimeType = opts.mimeType) != null ? _opts$mimeType : dataURIData == null ? void 0 : dataURIData[1]) != null ? _ref : "plain/text";
  let data;
  if (dataURIData[2] != null) {
    const binary = atob(decodeURIComponent(dataURIData[3]));
    const bytes = new Uint8Array(binary.length);
    for (let i3 = 0; i3 < binary.length; i3++) {
      bytes[i3] = binary.charCodeAt(i3);
    }
    data = [bytes];
  } else {
    data = [decodeURIComponent(dataURIData[3])];
  }
  if (toFile) {
    return new File(data, opts.name || "", {
      type: mimeType
    });
  }
  return new Blob(data, {
    type: mimeType
  });
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/isObjectURL.js
function isObjectURL(url) {
  return url.startsWith("blob:");
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/isPreviewSupported.js
function isPreviewSupported(fileType) {
  if (!fileType)
    return false;
  return /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(fileType);
}

// node_modules/.pnpm/exifr@7.1.3/node_modules/exifr/dist/mini.esm.mjs
function e(e3, t3, s3) {
  return t3 in e3 ? Object.defineProperty(e3, t3, { value: s3, enumerable: true, configurable: true, writable: true }) : e3[t3] = s3, e3;
}
var t = "undefined" != typeof self ? self : globalThis;
var s = "undefined" != typeof navigator;
var i = s && "undefined" == typeof HTMLImageElement;
var n = !("undefined" == typeof globalThis || "undefined" == typeof process || !process.versions || !process.versions.node);
var r = t.Buffer;
var a = !!r;
var h = (e3) => void 0 !== e3;
function f(e3) {
  return void 0 === e3 || (e3 instanceof Map ? 0 === e3.size : 0 === Object.values(e3).filter(h).length);
}
function l2(e3) {
  let t3 = new Error(e3);
  throw delete t3.stack, t3;
}
function o(e3) {
  let t3 = function(e4) {
    let t4 = 0;
    return e4.ifd0.enabled && (t4 += 1024), e4.exif.enabled && (t4 += 2048), e4.makerNote && (t4 += 2048), e4.userComment && (t4 += 1024), e4.gps.enabled && (t4 += 512), e4.interop.enabled && (t4 += 100), e4.ifd1.enabled && (t4 += 1024), t4 + 2048;
  }(e3);
  return e3.jfif.enabled && (t3 += 50), e3.xmp.enabled && (t3 += 2e4), e3.iptc.enabled && (t3 += 14e3), e3.icc.enabled && (t3 += 6e3), t3;
}
var u = (e3) => String.fromCharCode.apply(null, e3);
var d = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
var c = class {
  static from(e3, t3) {
    return e3 instanceof this && e3.le === t3 ? e3 : new c(e3, void 0, void 0, t3);
  }
  constructor(e3, t3 = 0, s3, i3) {
    if ("boolean" == typeof i3 && (this.le = i3), Array.isArray(e3) && (e3 = new Uint8Array(e3)), 0 === e3)
      this.byteOffset = 0, this.byteLength = 0;
    else if (e3 instanceof ArrayBuffer) {
      void 0 === s3 && (s3 = e3.byteLength - t3);
      let i4 = new DataView(e3, t3, s3);
      this._swapDataView(i4);
    } else if (e3 instanceof Uint8Array || e3 instanceof DataView || e3 instanceof c) {
      void 0 === s3 && (s3 = e3.byteLength - t3), (t3 += e3.byteOffset) + s3 > e3.byteOffset + e3.byteLength && l2("Creating view outside of available memory in ArrayBuffer");
      let i4 = new DataView(e3.buffer, t3, s3);
      this._swapDataView(i4);
    } else if ("number" == typeof e3) {
      let t4 = new DataView(new ArrayBuffer(e3));
      this._swapDataView(t4);
    } else
      l2("Invalid input argument for BufferView: " + e3);
  }
  _swapArrayBuffer(e3) {
    this._swapDataView(new DataView(e3));
  }
  _swapBuffer(e3) {
    this._swapDataView(new DataView(e3.buffer, e3.byteOffset, e3.byteLength));
  }
  _swapDataView(e3) {
    this.dataView = e3, this.buffer = e3.buffer, this.byteOffset = e3.byteOffset, this.byteLength = e3.byteLength;
  }
  _lengthToEnd(e3) {
    return this.byteLength - e3;
  }
  set(e3, t3, s3 = c) {
    return e3 instanceof DataView || e3 instanceof c ? e3 = new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength) : e3 instanceof ArrayBuffer && (e3 = new Uint8Array(e3)), e3 instanceof Uint8Array || l2("BufferView.set(): Invalid data argument."), this.toUint8().set(e3, t3), new s3(this, t3, e3.byteLength);
  }
  subarray(e3, t3) {
    return t3 = t3 || this._lengthToEnd(e3), new c(this, e3, t3);
  }
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  getUint8Array(e3, t3) {
    return new Uint8Array(this.buffer, this.byteOffset + e3, t3);
  }
  getString(e3 = 0, t3 = this.byteLength) {
    let s3 = this.getUint8Array(e3, t3);
    return i3 = s3, d ? d.decode(i3) : a ? Buffer.from(i3).toString("utf8") : decodeURIComponent(escape(u(i3)));
    var i3;
  }
  getLatin1String(e3 = 0, t3 = this.byteLength) {
    let s3 = this.getUint8Array(e3, t3);
    return u(s3);
  }
  getUnicodeString(e3 = 0, t3 = this.byteLength) {
    const s3 = [];
    for (let i3 = 0; i3 < t3 && e3 + i3 < this.byteLength; i3 += 2)
      s3.push(this.getUint16(e3 + i3));
    return u(s3);
  }
  getInt8(e3) {
    return this.dataView.getInt8(e3);
  }
  getUint8(e3) {
    return this.dataView.getUint8(e3);
  }
  getInt16(e3, t3 = this.le) {
    return this.dataView.getInt16(e3, t3);
  }
  getInt32(e3, t3 = this.le) {
    return this.dataView.getInt32(e3, t3);
  }
  getUint16(e3, t3 = this.le) {
    return this.dataView.getUint16(e3, t3);
  }
  getUint32(e3, t3 = this.le) {
    return this.dataView.getUint32(e3, t3);
  }
  getFloat32(e3, t3 = this.le) {
    return this.dataView.getFloat32(e3, t3);
  }
  getFloat64(e3, t3 = this.le) {
    return this.dataView.getFloat64(e3, t3);
  }
  getFloat(e3, t3 = this.le) {
    return this.dataView.getFloat32(e3, t3);
  }
  getDouble(e3, t3 = this.le) {
    return this.dataView.getFloat64(e3, t3);
  }
  getUintBytes(e3, t3, s3) {
    switch (t3) {
      case 1:
        return this.getUint8(e3, s3);
      case 2:
        return this.getUint16(e3, s3);
      case 4:
        return this.getUint32(e3, s3);
      case 8:
        return this.getUint64 && this.getUint64(e3, s3);
    }
  }
  getUint(e3, t3, s3) {
    switch (t3) {
      case 8:
        return this.getUint8(e3, s3);
      case 16:
        return this.getUint16(e3, s3);
      case 32:
        return this.getUint32(e3, s3);
      case 64:
        return this.getUint64 && this.getUint64(e3, s3);
    }
  }
  toString(e3) {
    return this.dataView.toString(e3, this.constructor.name);
  }
  ensureChunk() {
  }
};
function p(e3, t3) {
  l2(`${e3} '${t3}' was not loaded, try using full build of exifr.`);
}
var g = class extends Map {
  constructor(e3) {
    super(), this.kind = e3;
  }
  get(e3, t3) {
    return this.has(e3) || p(this.kind, e3), t3 && (e3 in t3 || function(e4, t4) {
      l2(`Unknown ${e4} '${t4}'.`);
    }(this.kind, e3), t3[e3].enabled || p(this.kind, e3)), super.get(e3);
  }
  keyList() {
    return Array.from(this.keys());
  }
};
var m = new g("file parser");
var y2 = new g("segment parser");
var b2 = new g("file reader");
var w = t.fetch;
function k2(e3, t3) {
  return (i3 = e3).startsWith("data:") || i3.length > 1e4 ? v(e3, t3, "base64") : n && e3.includes("://") ? O(e3, t3, "url", S2) : n ? v(e3, t3, "fs") : s ? O(e3, t3, "url", S2) : void l2("Invalid input argument");
  var i3;
}
async function O(e3, t3, s3, i3) {
  return b2.has(s3) ? v(e3, t3, s3) : i3 ? async function(e4, t4) {
    let s4 = await t4(e4);
    return new c(s4);
  }(e3, i3) : void l2(`Parser ${s3} is not loaded`);
}
async function v(e3, t3, s3) {
  let i3 = new (b2.get(s3))(e3, t3);
  return await i3.read(), i3;
}
var S2 = (e3) => w(e3).then((e4) => e4.arrayBuffer());
var A = (e3) => new Promise((t3, s3) => {
  let i3 = new FileReader();
  i3.onloadend = () => t3(i3.result || new ArrayBuffer()), i3.onerror = s3, i3.readAsArrayBuffer(e3);
});
var U = class extends Map {
  get tagKeys() {
    return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
  }
  get tagValues() {
    return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
  }
};
function x(e3, t3, s3) {
  let i3 = new U();
  for (let [e4, t4] of s3)
    i3.set(e4, t4);
  if (Array.isArray(t3))
    for (let s4 of t3)
      e3.set(s4, i3);
  else
    e3.set(t3, i3);
  return i3;
}
function C(e3, t3, s3) {
  let i3, n2 = e3.get(t3);
  for (i3 of s3)
    n2.set(i3[0], i3[1]);
}
var B = /* @__PURE__ */ new Map();
var V = /* @__PURE__ */ new Map();
var I = /* @__PURE__ */ new Map();
var L = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"];
var T = ["jfif", "xmp", "icc", "iptc", "ihdr"];
var z = ["tiff", ...T];
var P = ["ifd0", "ifd1", "exif", "gps", "interop"];
var F2 = [...z, ...P];
var j = ["makerNote", "userComment"];
var E = ["translateKeys", "translateValues", "reviveValues", "multiSegment"];
var M = [...E, "sanitize", "mergeOutput", "silentErrors"];
var _2 = class {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
};
var D = class extends _2 {
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(t3, s3, i3, n2) {
    if (super(), e(this, "enabled", false), e(this, "skip", /* @__PURE__ */ new Set()), e(this, "pick", /* @__PURE__ */ new Set()), e(this, "deps", /* @__PURE__ */ new Set()), e(this, "translateKeys", false), e(this, "translateValues", false), e(this, "reviveValues", false), this.key = t3, this.enabled = s3, this.parse = this.enabled, this.applyInheritables(n2), this.canBeFiltered = P.includes(t3), this.canBeFiltered && (this.dict = B.get(t3)), void 0 !== i3)
      if (Array.isArray(i3))
        this.parse = this.enabled = true, this.canBeFiltered && i3.length > 0 && this.translateTagSet(i3, this.pick);
      else if ("object" == typeof i3) {
        if (this.enabled = true, this.parse = false !== i3.parse, this.canBeFiltered) {
          let { pick: e3, skip: t4 } = i3;
          e3 && e3.length > 0 && this.translateTagSet(e3, this.pick), t4 && t4.length > 0 && this.translateTagSet(t4, this.skip);
        }
        this.applyInheritables(i3);
      } else
        true === i3 || false === i3 ? this.parse = this.enabled = i3 : l2(`Invalid options argument: ${i3}`);
  }
  applyInheritables(e3) {
    let t3, s3;
    for (t3 of E)
      s3 = e3[t3], void 0 !== s3 && (this[t3] = s3);
  }
  translateTagSet(e3, t3) {
    if (this.dict) {
      let s3, i3, { tagKeys: n2, tagValues: r3 } = this.dict;
      for (s3 of e3)
        "string" == typeof s3 ? (i3 = r3.indexOf(s3), -1 === i3 && (i3 = n2.indexOf(Number(s3))), -1 !== i3 && t3.add(Number(n2[i3]))) : t3.add(s3);
    } else
      for (let s3 of e3)
        t3.add(s3);
  }
  finalizeFilters() {
    !this.enabled && this.deps.size > 0 ? (this.enabled = true, X(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && X(this.pick, this.deps);
  }
};
var N = { jfif: false, tiff: true, xmp: false, icc: false, iptc: false, ifd0: true, ifd1: false, exif: true, gps: true, interop: false, ihdr: void 0, makerNote: false, userComment: false, multiSegment: false, skip: [], pick: [], translateKeys: true, translateValues: true, reviveValues: true, sanitize: true, mergeOutput: true, silentErrors: true, chunked: true, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 };
var $ = /* @__PURE__ */ new Map();
var R = class extends _2 {
  static useCached(e3) {
    let t3 = $.get(e3);
    return void 0 !== t3 || (t3 = new this(e3), $.set(e3, t3)), t3;
  }
  constructor(e3) {
    super(), true === e3 ? this.setupFromTrue() : void 0 === e3 ? this.setupFromUndefined() : Array.isArray(e3) ? this.setupFromArray(e3) : "object" == typeof e3 ? this.setupFromObject(e3) : l2(`Invalid options argument ${e3}`), void 0 === this.firstChunkSize && (this.firstChunkSize = s ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = false), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let e3;
    for (e3 of L)
      this[e3] = N[e3];
    for (e3 of M)
      this[e3] = N[e3];
    for (e3 of j)
      this[e3] = N[e3];
    for (e3 of F2)
      this[e3] = new D(e3, N[e3], void 0, this);
  }
  setupFromTrue() {
    let e3;
    for (e3 of L)
      this[e3] = N[e3];
    for (e3 of M)
      this[e3] = N[e3];
    for (e3 of j)
      this[e3] = true;
    for (e3 of F2)
      this[e3] = new D(e3, true, void 0, this);
  }
  setupFromArray(e3) {
    let t3;
    for (t3 of L)
      this[t3] = N[t3];
    for (t3 of M)
      this[t3] = N[t3];
    for (t3 of j)
      this[t3] = N[t3];
    for (t3 of F2)
      this[t3] = new D(t3, false, void 0, this);
    this.setupGlobalFilters(e3, void 0, P);
  }
  setupFromObject(e3) {
    let t3;
    for (t3 of (P.ifd0 = P.ifd0 || P.image, P.ifd1 = P.ifd1 || P.thumbnail, Object.assign(this, e3), L))
      this[t3] = W(e3[t3], N[t3]);
    for (t3 of M)
      this[t3] = W(e3[t3], N[t3]);
    for (t3 of j)
      this[t3] = W(e3[t3], N[t3]);
    for (t3 of z)
      this[t3] = new D(t3, N[t3], e3[t3], this);
    for (t3 of P)
      this[t3] = new D(t3, N[t3], e3[t3], this.tiff);
    this.setupGlobalFilters(e3.pick, e3.skip, P, F2), true === e3.tiff ? this.batchEnableWithBool(P, true) : false === e3.tiff ? this.batchEnableWithUserValue(P, e3) : Array.isArray(e3.tiff) ? this.setupGlobalFilters(e3.tiff, void 0, P) : "object" == typeof e3.tiff && this.setupGlobalFilters(e3.tiff.pick, e3.tiff.skip, P);
  }
  batchEnableWithBool(e3, t3) {
    for (let s3 of e3)
      this[s3].enabled = t3;
  }
  batchEnableWithUserValue(e3, t3) {
    for (let s3 of e3) {
      let e4 = t3[s3];
      this[s3].enabled = false !== e4 && void 0 !== e4;
    }
  }
  setupGlobalFilters(e3, t3, s3, i3 = s3) {
    if (e3 && e3.length) {
      for (let e4 of i3)
        this[e4].enabled = false;
      let t4 = K(e3, s3);
      for (let [e4, s4] of t4)
        X(this[e4].pick, s4), this[e4].enabled = true;
    } else if (t3 && t3.length) {
      let e4 = K(t3, s3);
      for (let [t4, s4] of e4)
        X(this[t4].skip, s4);
    }
  }
  filterNestedSegmentTags() {
    let { ifd0: e3, exif: t3, xmp: s3, iptc: i3, icc: n2 } = this;
    this.makerNote ? t3.deps.add(37500) : t3.skip.add(37500), this.userComment ? t3.deps.add(37510) : t3.skip.add(37510), s3.enabled || e3.skip.add(700), i3.enabled || e3.skip.add(33723), n2.enabled || e3.skip.add(34675);
  }
  traverseTiffDependencyTree() {
    let { ifd0: e3, exif: t3, gps: s3, interop: i3 } = this;
    i3.needed && (t3.deps.add(40965), e3.deps.add(40965)), t3.needed && e3.deps.add(34665), s3.needed && e3.deps.add(34853), this.tiff.enabled = P.some((e4) => true === this[e4].enabled) || this.makerNote || this.userComment;
    for (let e4 of P)
      this[e4].finalizeFilters();
  }
  get onlyTiff() {
    return !T.map((e3) => this[e3].enabled).some((e3) => true === e3) && this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let e3 of z)
      this[e3].enabled && !y2.has(e3) && p("segment parser", e3);
  }
};
function K(e3, t3) {
  let s3, i3, n2, r3, a3 = [];
  for (n2 of t3) {
    for (r3 of (s3 = B.get(n2), i3 = [], s3))
      (e3.includes(r3[0]) || e3.includes(r3[1])) && i3.push(r3[0]);
    i3.length && a3.push([n2, i3]);
  }
  return a3;
}
function W(e3, t3) {
  return void 0 !== e3 ? e3 : void 0 !== t3 ? t3 : void 0;
}
function X(e3, t3) {
  for (let s3 of t3)
    e3.add(s3);
}
e(R, "default", N);
var H = class {
  constructor(t3) {
    e(this, "parsers", {}), e(this, "output", {}), e(this, "errors", []), e(this, "pushToErrors", (e3) => this.errors.push(e3)), this.options = R.useCached(t3);
  }
  async read(e3) {
    this.file = await function(e4, t3) {
      return "string" == typeof e4 ? k2(e4, t3) : s && !i && e4 instanceof HTMLImageElement ? k2(e4.src, t3) : e4 instanceof Uint8Array || e4 instanceof ArrayBuffer || e4 instanceof DataView ? new c(e4) : s && e4 instanceof Blob ? O(e4, t3, "blob", A) : void l2("Invalid input argument");
    }(e3, this.options);
  }
  setup() {
    if (this.fileParser)
      return;
    let { file: e3 } = this, t3 = e3.getUint16(0);
    for (let [s3, i3] of m)
      if (i3.canHandle(e3, t3))
        return this.fileParser = new i3(this.options, this.file, this.parsers), e3[s3] = true;
    this.file.close && this.file.close(), l2("Unknown file format");
  }
  async parse() {
    let { output: e3, errors: t3 } = this;
    return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t3.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t3.length > 0 && (e3.errors = t3), f(s3 = e3) ? void 0 : s3;
    var s3;
  }
  async executeParsers() {
    let { output: e3 } = this;
    await this.fileParser.parse();
    let t3 = Object.values(this.parsers).map(async (t4) => {
      let s3 = await t4.parse();
      t4.assignToOutput(e3, s3);
    });
    this.options.silentErrors && (t3 = t3.map((e4) => e4.catch(this.pushToErrors))), await Promise.all(t3);
  }
  async extractThumbnail() {
    this.setup();
    let { options: e3, file: t3 } = this, s3 = y2.get("tiff", e3);
    var i3;
    if (t3.tiff ? i3 = { start: 0, type: "tiff" } : t3.jpeg && (i3 = await this.fileParser.getOrFindSegment("tiff")), void 0 === i3)
      return;
    let n2 = await this.fileParser.ensureSegmentChunk(i3), r3 = this.parsers.tiff = new s3(n2, e3, t3), a3 = await r3.extractThumbnail();
    return t3.close && t3.close(), a3;
  }
};
async function Y(e3, t3) {
  let s3 = new H(t3);
  return await s3.read(e3), s3.parse();
}
var G = Object.freeze({ __proto__: null, parse: Y, Exifr: H, fileParsers: m, segmentParsers: y2, fileReaders: b2, tagKeys: B, tagValues: V, tagRevivers: I, createDictionary: x, extendDictionary: C, fetchUrlAsArrayBuffer: S2, readBlobAsArrayBuffer: A, chunkedProps: L, otherSegments: T, segments: z, tiffBlocks: P, segmentsAndBlocks: F2, tiffExtractables: j, inheritables: E, allFormatters: M, Options: R });
var J = class {
  static findPosition(e3, t3) {
    let s3 = e3.getUint16(t3 + 2) + 2, i3 = "function" == typeof this.headerLength ? this.headerLength(e3, t3, s3) : this.headerLength, n2 = t3 + i3, r3 = s3 - i3;
    return { offset: t3, length: s3, headerLength: i3, start: n2, size: r3, end: n2 + r3 };
  }
  static parse(e3, t3 = {}) {
    return new this(e3, new R({ [this.type]: t3 }), e3).parse();
  }
  normalizeInput(e3) {
    return e3 instanceof c ? e3 : new c(e3);
  }
  constructor(t3, s3 = {}, i3) {
    e(this, "errors", []), e(this, "raw", /* @__PURE__ */ new Map()), e(this, "handleError", (e3) => {
      if (!this.options.silentErrors)
        throw e3;
      this.errors.push(e3.message);
    }), this.chunk = this.normalizeInput(t3), this.file = i3, this.type = this.constructor.type, this.globalOptions = this.options = s3, this.localOptions = s3[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
  }
  translate() {
    this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
  }
  get output() {
    return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
  }
  translateBlock(e3, t3) {
    let s3 = I.get(t3), i3 = V.get(t3), n2 = B.get(t3), r3 = this.options[t3], a3 = r3.reviveValues && !!s3, h9 = r3.translateValues && !!i3, f3 = r3.translateKeys && !!n2, l4 = {};
    for (let [t4, r4] of e3)
      a3 && s3.has(t4) ? r4 = s3.get(t4)(r4) : h9 && i3.has(t4) && (r4 = this.translateValue(r4, i3.get(t4))), f3 && n2.has(t4) && (t4 = n2.get(t4) || t4), l4[t4] = r4;
    return l4;
  }
  translateValue(e3, t3) {
    return t3[e3] || t3.DEFAULT || e3;
  }
  assignToOutput(e3, t3) {
    this.assignObjectToOutput(e3, this.constructor.type, t3);
  }
  assignObjectToOutput(e3, t3, s3) {
    if (this.globalOptions.mergeOutput)
      return Object.assign(e3, s3);
    e3[t3] ? Object.assign(e3[t3], s3) : e3[t3] = s3;
  }
};
e(J, "headerLength", 4), e(J, "type", void 0), e(J, "multiSegment", false), e(J, "canHandle", () => false);
function q(e3) {
  return 192 === e3 || 194 === e3 || 196 === e3 || 219 === e3 || 221 === e3 || 218 === e3 || 254 === e3;
}
function Q(e3) {
  return e3 >= 224 && e3 <= 239;
}
function Z(e3, t3, s3) {
  for (let [i3, n2] of y2)
    if (n2.canHandle(e3, t3, s3))
      return i3;
}
var ee = class extends class {
  constructor(t3, s3, i3) {
    e(this, "errors", []), e(this, "ensureSegmentChunk", async (e3) => {
      let t4 = e3.start, s4 = e3.size || 65536;
      if (this.file.chunked)
        if (this.file.available(t4, s4))
          e3.chunk = this.file.subarray(t4, s4);
        else
          try {
            e3.chunk = await this.file.readChunk(t4, s4);
          } catch (t5) {
            l2(`Couldn't read segment: ${JSON.stringify(e3)}. ${t5.message}`);
          }
      else
        this.file.byteLength > t4 + s4 ? e3.chunk = this.file.subarray(t4, s4) : void 0 === e3.size ? e3.chunk = this.file.subarray(t4) : l2("Segment unreachable: " + JSON.stringify(e3));
      return e3.chunk;
    }), this.extendOptions && this.extendOptions(t3), this.options = t3, this.file = s3, this.parsers = i3;
  }
  injectSegment(e3, t3) {
    this.options[e3].enabled && this.createParser(e3, t3);
  }
  createParser(e3, t3) {
    let s3 = new (y2.get(e3))(t3, this.options, this.file);
    return this.parsers[e3] = s3;
  }
  createParsers(e3) {
    for (let t3 of e3) {
      let { type: e4, chunk: s3 } = t3, i3 = this.options[e4];
      if (i3 && i3.enabled) {
        let t4 = this.parsers[e4];
        t4 && t4.append || t4 || this.createParser(e4, s3);
      }
    }
  }
  async readSegments(e3) {
    let t3 = e3.map(this.ensureSegmentChunk);
    await Promise.all(t3);
  }
} {
  constructor(...t3) {
    super(...t3), e(this, "appSegments", []), e(this, "jpegSegments", []), e(this, "unknownSegments", []);
  }
  static canHandle(e3, t3) {
    return 65496 === t3;
  }
  async parse() {
    await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
  }
  setupSegmentFinderArgs(e3) {
    true === e3 ? (this.findAll = true, this.wanted = new Set(y2.keyList())) : (e3 = void 0 === e3 ? y2.keyList().filter((e4) => this.options[e4].enabled) : e3.filter((e4) => this.options[e4].enabled && y2.has(e4)), this.findAll = false, this.remaining = new Set(e3), this.wanted = new Set(e3)), this.unfinishedMultiSegment = false;
  }
  async findAppSegments(e3 = 0, t3) {
    this.setupSegmentFinderArgs(t3);
    let { file: s3, findAll: i3, wanted: n2, remaining: r3 } = this;
    if (!i3 && this.file.chunked && (i3 = Array.from(n2).some((e4) => {
      let t4 = y2.get(e4), s4 = this.options[e4];
      return t4.multiSegment && s4.multiSegment;
    }), i3 && await this.file.readWhole()), e3 = this.findAppSegmentsInRange(e3, s3.byteLength), !this.options.onlyTiff && s3.chunked) {
      let t4 = false;
      for (; r3.size > 0 && !t4 && (s3.canReadNextChunk || this.unfinishedMultiSegment); ) {
        let { nextChunkOffset: i4 } = s3, n3 = this.appSegments.some((e4) => !this.file.available(e4.offset || e4.start, e4.length || e4.size));
        if (t4 = e3 > i4 && !n3 ? !await s3.readNextChunk(e3) : !await s3.readNextChunk(i4), void 0 === (e3 = this.findAppSegmentsInRange(e3, s3.byteLength)))
          return;
      }
    }
  }
  findAppSegmentsInRange(e3, t3) {
    t3 -= 2;
    let s3, i3, n2, r3, a3, h9, { file: f3, findAll: l4, wanted: o3, remaining: u3, options: d3 } = this;
    for (; e3 < t3; e3++)
      if (255 === f3.getUint8(e3)) {
        if (s3 = f3.getUint8(e3 + 1), Q(s3)) {
          if (i3 = f3.getUint16(e3 + 2), n2 = Z(f3, e3, i3), n2 && o3.has(n2) && (r3 = y2.get(n2), a3 = r3.findPosition(f3, e3), h9 = d3[n2], a3.type = n2, this.appSegments.push(a3), !l4 && (r3.multiSegment && h9.multiSegment ? (this.unfinishedMultiSegment = a3.chunkNumber < a3.chunkCount, this.unfinishedMultiSegment || u3.delete(n2)) : u3.delete(n2), 0 === u3.size)))
            break;
          d3.recordUnknownSegments && (a3 = J.findPosition(f3, e3), a3.marker = s3, this.unknownSegments.push(a3)), e3 += i3 + 1;
        } else if (q(s3)) {
          if (i3 = f3.getUint16(e3 + 2), 218 === s3 && false !== d3.stopAfterSos)
            return;
          d3.recordJpegSegments && this.jpegSegments.push({ offset: e3, length: i3, marker: s3 }), e3 += i3 + 1;
        }
      }
    return e3;
  }
  mergeMultiSegments() {
    if (!this.appSegments.some((e4) => e4.multiSegment))
      return;
    let e3 = function(e4, t3) {
      let s3, i3, n2, r3 = /* @__PURE__ */ new Map();
      for (let a3 = 0; a3 < e4.length; a3++)
        s3 = e4[a3], i3 = s3[t3], r3.has(i3) ? n2 = r3.get(i3) : r3.set(i3, n2 = []), n2.push(s3);
      return Array.from(r3);
    }(this.appSegments, "type");
    this.mergedAppSegments = e3.map(([e4, t3]) => {
      let s3 = y2.get(e4, this.options);
      if (s3.handleMultiSegments) {
        return { type: e4, chunk: s3.handleMultiSegments(t3) };
      }
      return t3[0];
    });
  }
  getSegment(e3) {
    return this.appSegments.find((t3) => t3.type === e3);
  }
  async getOrFindSegment(e3) {
    let t3 = this.getSegment(e3);
    return void 0 === t3 && (await this.findAppSegments(0, [e3]), t3 = this.getSegment(e3)), t3;
  }
};
e(ee, "type", "jpeg"), m.set("jpeg", ee);
var te = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
var se = class extends J {
  parseHeader() {
    var e3 = this.chunk.getUint16();
    18761 === e3 ? this.le = true : 19789 === e3 && (this.le = false), this.chunk.le = this.le, this.headerParsed = true;
  }
  parseTags(e3, t3, s3 = /* @__PURE__ */ new Map()) {
    let { pick: i3, skip: n2 } = this.options[t3];
    i3 = new Set(i3);
    let r3 = i3.size > 0, a3 = 0 === n2.size, h9 = this.chunk.getUint16(e3);
    e3 += 2;
    for (let f3 = 0; f3 < h9; f3++) {
      let h10 = this.chunk.getUint16(e3);
      if (r3) {
        if (i3.has(h10) && (s3.set(h10, this.parseTag(e3, h10, t3)), i3.delete(h10), 0 === i3.size))
          break;
      } else
        !a3 && n2.has(h10) || s3.set(h10, this.parseTag(e3, h10, t3));
      e3 += 12;
    }
    return s3;
  }
  parseTag(e3, t3, s3) {
    let { chunk: i3 } = this, n2 = i3.getUint16(e3 + 2), r3 = i3.getUint32(e3 + 4), a3 = te[n2];
    if (a3 * r3 <= 4 ? e3 += 8 : e3 = i3.getUint32(e3 + 8), (n2 < 1 || n2 > 13) && l2(`Invalid TIFF value type. block: ${s3.toUpperCase()}, tag: ${t3.toString(16)}, type: ${n2}, offset ${e3}`), e3 > i3.byteLength && l2(`Invalid TIFF value offset. block: ${s3.toUpperCase()}, tag: ${t3.toString(16)}, type: ${n2}, offset ${e3} is outside of chunk size ${i3.byteLength}`), 1 === n2)
      return i3.getUint8Array(e3, r3);
    if (2 === n2)
      return "" === (h9 = function(e4) {
        for (; e4.endsWith("\0"); )
          e4 = e4.slice(0, -1);
        return e4;
      }(h9 = i3.getString(e3, r3)).trim()) ? void 0 : h9;
    var h9;
    if (7 === n2)
      return i3.getUint8Array(e3, r3);
    if (1 === r3)
      return this.parseTagValue(n2, e3);
    {
      let t4 = new (function(e4) {
        switch (e4) {
          case 1:
            return Uint8Array;
          case 3:
            return Uint16Array;
          case 4:
            return Uint32Array;
          case 5:
            return Array;
          case 6:
            return Int8Array;
          case 8:
            return Int16Array;
          case 9:
            return Int32Array;
          case 10:
            return Array;
          case 11:
            return Float32Array;
          case 12:
            return Float64Array;
          default:
            return Array;
        }
      }(n2))(r3), s4 = a3;
      for (let i4 = 0; i4 < r3; i4++)
        t4[i4] = this.parseTagValue(n2, e3), e3 += s4;
      return t4;
    }
  }
  parseTagValue(e3, t3) {
    let { chunk: s3 } = this;
    switch (e3) {
      case 1:
        return s3.getUint8(t3);
      case 3:
        return s3.getUint16(t3);
      case 4:
        return s3.getUint32(t3);
      case 5:
        return s3.getUint32(t3) / s3.getUint32(t3 + 4);
      case 6:
        return s3.getInt8(t3);
      case 8:
        return s3.getInt16(t3);
      case 9:
        return s3.getInt32(t3);
      case 10:
        return s3.getInt32(t3) / s3.getInt32(t3 + 4);
      case 11:
        return s3.getFloat(t3);
      case 12:
        return s3.getDouble(t3);
      case 13:
        return s3.getUint32(t3);
      default:
        l2(`Invalid tiff type ${e3}`);
    }
  }
};
var ie = class extends se {
  static canHandle(e3, t3) {
    return 225 === e3.getUint8(t3 + 1) && 1165519206 === e3.getUint32(t3 + 4) && 0 === e3.getUint16(t3 + 8);
  }
  async parse() {
    this.parseHeader();
    let { options: e3 } = this;
    return e3.ifd0.enabled && await this.parseIfd0Block(), e3.exif.enabled && await this.safeParse("parseExifBlock"), e3.gps.enabled && await this.safeParse("parseGpsBlock"), e3.interop.enabled && await this.safeParse("parseInteropBlock"), e3.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
  }
  safeParse(e3) {
    let t3 = this[e3]();
    return void 0 !== t3.catch && (t3 = t3.catch(this.handleError)), t3;
  }
  findIfd0Offset() {
    void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
  }
  findIfd1Offset() {
    if (void 0 === this.ifd1Offset) {
      this.findIfd0Offset();
      let e3 = this.chunk.getUint16(this.ifd0Offset), t3 = this.ifd0Offset + 2 + 12 * e3;
      this.ifd1Offset = this.chunk.getUint32(t3);
    }
  }
  parseBlock(e3, t3) {
    let s3 = /* @__PURE__ */ new Map();
    return this[t3] = s3, this.parseTags(e3, t3, s3), s3;
  }
  async parseIfd0Block() {
    if (this.ifd0)
      return;
    let { file: e3 } = this;
    this.findIfd0Offset(), this.ifd0Offset < 8 && l2("Malformed EXIF data"), !e3.chunked && this.ifd0Offset > e3.byteLength && l2(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e3.byteLength}`), e3.tiff && await e3.ensureChunk(this.ifd0Offset, o(this.options));
    let t3 = this.parseBlock(this.ifd0Offset, "ifd0");
    return 0 !== t3.size ? (this.exifOffset = t3.get(34665), this.interopOffset = t3.get(40965), this.gpsOffset = t3.get(34853), this.xmp = t3.get(700), this.iptc = t3.get(33723), this.icc = t3.get(34675), this.options.sanitize && (t3.delete(34665), t3.delete(40965), t3.delete(34853), t3.delete(700), t3.delete(33723), t3.delete(34675)), t3) : void 0;
  }
  async parseExifBlock() {
    if (this.exif)
      return;
    if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset)
      return;
    this.file.tiff && await this.file.ensureChunk(this.exifOffset, o(this.options));
    let e3 = this.parseBlock(this.exifOffset, "exif");
    return this.interopOffset || (this.interopOffset = e3.get(40965)), this.makerNote = e3.get(37500), this.userComment = e3.get(37510), this.options.sanitize && (e3.delete(40965), e3.delete(37500), e3.delete(37510)), this.unpack(e3, 41728), this.unpack(e3, 41729), e3;
  }
  unpack(e3, t3) {
    let s3 = e3.get(t3);
    s3 && 1 === s3.length && e3.set(t3, s3[0]);
  }
  async parseGpsBlock() {
    if (this.gps)
      return;
    if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset)
      return;
    let e3 = this.parseBlock(this.gpsOffset, "gps");
    return e3 && e3.has(2) && e3.has(4) && (e3.set("latitude", ne(...e3.get(2), e3.get(1))), e3.set("longitude", ne(...e3.get(4), e3.get(3)))), e3;
  }
  async parseInteropBlock() {
    if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset))
      return this.parseBlock(this.interopOffset, "interop");
  }
  async parseThumbnailBlock(e3 = false) {
    if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e3))
      return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = true), this.ifd1;
  }
  async extractThumbnail() {
    if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(true), void 0 === this.ifd1)
      return;
    let e3 = this.ifd1.get(513), t3 = this.ifd1.get(514);
    return this.chunk.getUint8Array(e3, t3);
  }
  get image() {
    return this.ifd0;
  }
  get thumbnail() {
    return this.ifd1;
  }
  createOutput() {
    let e3, t3, s3, i3 = {};
    for (t3 of P)
      if (e3 = this[t3], !f(e3))
        if (s3 = this.canTranslate ? this.translateBlock(e3, t3) : Object.fromEntries(e3), this.options.mergeOutput) {
          if ("ifd1" === t3)
            continue;
          Object.assign(i3, s3);
        } else
          i3[t3] = s3;
    return this.makerNote && (i3.makerNote = this.makerNote), this.userComment && (i3.userComment = this.userComment), i3;
  }
  assignToOutput(e3, t3) {
    if (this.globalOptions.mergeOutput)
      Object.assign(e3, t3);
    else
      for (let [s3, i3] of Object.entries(t3))
        this.assignObjectToOutput(e3, s3, i3);
  }
};
function ne(e3, t3, s3, i3) {
  var n2 = e3 + t3 / 60 + s3 / 3600;
  return "S" !== i3 && "W" !== i3 || (n2 *= -1), n2;
}
e(ie, "type", "tiff"), e(ie, "headerLength", 10), y2.set("tiff", ie);
var re = Object.freeze({ __proto__: null, default: G, Exifr: H, fileParsers: m, segmentParsers: y2, fileReaders: b2, tagKeys: B, tagValues: V, tagRevivers: I, createDictionary: x, extendDictionary: C, fetchUrlAsArrayBuffer: S2, readBlobAsArrayBuffer: A, chunkedProps: L, otherSegments: T, segments: z, tiffBlocks: P, segmentsAndBlocks: F2, tiffExtractables: j, inheritables: E, allFormatters: M, Options: R, parse: Y });
var ae = { ifd0: false, ifd1: false, exif: false, gps: false, interop: false, sanitize: false, reviveValues: true, translateKeys: false, translateValues: false, mergeOutput: false };
var he = Object.assign({}, ae, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
var le = Object.assign({}, ae, { tiff: false, ifd1: true, mergeOutput: false });
var de = Object.assign({}, ae, { firstChunkSize: 4e4, ifd0: [274] });
async function ce(e3) {
  let t3 = new H(de);
  await t3.read(e3);
  let s3 = await t3.parse();
  if (s3 && s3.ifd0)
    return s3.ifd0[274];
}
var pe = Object.freeze({ 1: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
var ge = true;
var me = true;
if ("object" == typeof navigator) {
  let e3 = navigator.userAgent;
  if (e3.includes("iPad") || e3.includes("iPhone")) {
    let t3 = e3.match(/OS (\d+)_(\d+)/);
    if (t3) {
      let [, e4, s3] = t3, i3 = Number(e4) + 0.1 * Number(s3);
      ge = i3 < 13.4, me = false;
    }
  } else if (e3.includes("OS X 10")) {
    let [, t3] = e3.match(/OS X 10[_.](\d+)/);
    ge = me = Number(t3) < 15;
  }
  if (e3.includes("Chrome/")) {
    let [, t3] = e3.match(/Chrome\/(\d+)/);
    ge = me = Number(t3) < 81;
  } else if (e3.includes("Firefox/")) {
    let [, t3] = e3.match(/Firefox\/(\d+)/);
    ge = me = Number(t3) < 77;
  }
}
async function ye(e3) {
  let t3 = await ce(e3);
  return Object.assign({ canvas: ge, css: me }, pe[t3]);
}
var be = class extends c {
  constructor(...t3) {
    super(...t3), e(this, "ranges", new we()), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
  }
  _tryExtend(e3, t3, s3) {
    if (0 === e3 && 0 === this.byteLength && s3) {
      let e4 = new DataView(s3.buffer || s3, s3.byteOffset, s3.byteLength);
      this._swapDataView(e4);
    } else {
      let s4 = e3 + t3;
      if (s4 > this.byteLength) {
        let { dataView: e4 } = this._extend(s4);
        this._swapDataView(e4);
      }
    }
  }
  _extend(e3) {
    let t3;
    t3 = a ? r.allocUnsafe(e3) : new Uint8Array(e3);
    let s3 = new DataView(t3.buffer, t3.byteOffset, t3.byteLength);
    return t3.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: t3, dataView: s3 };
  }
  subarray(e3, t3, s3 = false) {
    return t3 = t3 || this._lengthToEnd(e3), s3 && this._tryExtend(e3, t3), this.ranges.add(e3, t3), super.subarray(e3, t3);
  }
  set(e3, t3, s3 = false) {
    s3 && this._tryExtend(t3, e3.byteLength, e3);
    let i3 = super.set(e3, t3);
    return this.ranges.add(t3, i3.byteLength), i3;
  }
  async ensureChunk(e3, t3) {
    this.chunked && (this.ranges.available(e3, t3) || await this.readChunk(e3, t3));
  }
  available(e3, t3) {
    return this.ranges.available(e3, t3);
  }
};
var we = class {
  constructor() {
    e(this, "list", []);
  }
  get length() {
    return this.list.length;
  }
  add(e3, t3, s3 = 0) {
    let i3 = e3 + t3, n2 = this.list.filter((t4) => ke(e3, t4.offset, i3) || ke(e3, t4.end, i3));
    if (n2.length > 0) {
      e3 = Math.min(e3, ...n2.map((e4) => e4.offset)), i3 = Math.max(i3, ...n2.map((e4) => e4.end)), t3 = i3 - e3;
      let s4 = n2.shift();
      s4.offset = e3, s4.length = t3, s4.end = i3, this.list = this.list.filter((e4) => !n2.includes(e4));
    } else
      this.list.push({ offset: e3, length: t3, end: i3 });
  }
  available(e3, t3) {
    let s3 = e3 + t3;
    return this.list.some((t4) => t4.offset <= e3 && s3 <= t4.end);
  }
};
function ke(e3, t3, s3) {
  return e3 <= t3 && t3 <= s3;
}
var Oe = class extends be {
  constructor(t3, s3) {
    super(0), e(this, "chunksRead", 0), this.input = t3, this.options = s3;
  }
  async readWhole() {
    this.chunked = false, await this.readChunk(this.nextChunkOffset);
  }
  async readChunked() {
    this.chunked = true, await this.readChunk(0, this.options.firstChunkSize);
  }
  async readNextChunk(e3 = this.nextChunkOffset) {
    if (this.fullyRead)
      return this.chunksRead++, false;
    let t3 = this.options.chunkSize, s3 = await this.readChunk(e3, t3);
    return !!s3 && s3.byteLength === t3;
  }
  async readChunk(e3, t3) {
    if (this.chunksRead++, 0 !== (t3 = this.safeWrapAddress(e3, t3)))
      return this._readChunk(e3, t3);
  }
  safeWrapAddress(e3, t3) {
    return void 0 !== this.size && e3 + t3 > this.size ? Math.max(0, this.size - e3) : t3;
  }
  get nextChunkOffset() {
    if (0 !== this.ranges.list.length)
      return this.ranges.list[0].length;
  }
  get canReadNextChunk() {
    return this.chunksRead < this.options.chunkLimit;
  }
  get fullyRead() {
    return void 0 !== this.size && this.nextChunkOffset === this.size;
  }
  read() {
    return this.options.chunked ? this.readChunked() : this.readWhole();
  }
  close() {
  }
};
b2.set("blob", class extends Oe {
  async readWhole() {
    this.chunked = false;
    let e3 = await A(this.input);
    this._swapArrayBuffer(e3);
  }
  readChunked() {
    return this.chunked = true, this.size = this.input.size, super.readChunked();
  }
  async _readChunk(e3, t3) {
    let s3 = t3 ? e3 + t3 : void 0, i3 = this.input.slice(e3, s3), n2 = await A(i3);
    return this.set(n2, e3, true);
  }
});

// node_modules/.pnpm/@uppy+thumbnail-generator@3.0.3_@uppy+core@3.3.0/node_modules/@uppy/thumbnail-generator/lib/locale.js
var locale_default2 = {
  strings: {
    generatingThumbnails: "Generating thumbnails..."
  }
};

// node_modules/.pnpm/@uppy+thumbnail-generator@3.0.3_@uppy+core@3.3.0/node_modules/@uppy/thumbnail-generator/lib/index.js
var packageJson3 = {
  "version": "3.0.3"
};
function canvasToBlob(canvas, type, quality) {
  try {
    canvas.getContext("2d").getImageData(0, 0, 1, 1);
  } catch (err) {
    if (err.code === 18) {
      return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
    }
  }
  if (canvas.toBlob) {
    return new Promise((resolve) => {
      canvas.toBlob(resolve, type, quality);
    }).then((blob) => {
      if (blob === null) {
        throw new Error("cannot read image, probably an svg with external resources");
      }
      return blob;
    });
  }
  return Promise.resolve().then(() => {
    return dataURItoBlob(canvas.toDataURL(type, quality), {});
  }).then((blob) => {
    if (blob === null) {
      throw new Error("could not extract blob, probably an old browser");
    }
    return blob;
  });
}
function rotateImage(image, translate) {
  let w3 = image.width;
  let h9 = image.height;
  if (translate.deg === 90 || translate.deg === 270) {
    w3 = image.height;
    h9 = image.width;
  }
  const canvas = document.createElement("canvas");
  canvas.width = w3;
  canvas.height = h9;
  const context = canvas.getContext("2d");
  context.translate(w3 / 2, h9 / 2);
  if (translate.canvas) {
    context.rotate(translate.rad);
    context.scale(translate.scaleX, translate.scaleY);
  }
  context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
  return canvas;
}
function protect(image) {
  const ratio = image.width / image.height;
  const maxSquare = 5e6;
  const maxSize = 4096;
  let maxW = Math.floor(Math.sqrt(maxSquare * ratio));
  let maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
  if (maxW > maxSize) {
    maxW = maxSize;
    maxH = Math.round(maxW / ratio);
  }
  if (maxH > maxSize) {
    maxH = maxSize;
    maxW = Math.round(ratio * maxH);
  }
  if (image.width > maxW) {
    const canvas = document.createElement("canvas");
    canvas.width = maxW;
    canvas.height = maxH;
    canvas.getContext("2d").drawImage(image, 0, 0, maxW, maxH);
    return canvas;
  }
  return image;
}
var ThumbnailGenerator = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    this.onFileAdded = (file) => {
      if (!file.preview && file.data && isPreviewSupported(file.type) && !file.isRemote) {
        this.addToQueue(file.id);
      }
    };
    this.onCancelRequest = (file) => {
      const index = this.queue.indexOf(file.id);
      if (index !== -1) {
        this.queue.splice(index, 1);
      }
    };
    this.onFileRemoved = (file) => {
      const index = this.queue.indexOf(file.id);
      if (index !== -1) {
        this.queue.splice(index, 1);
      }
      if (file.preview && isObjectURL(file.preview)) {
        URL.revokeObjectURL(file.preview);
      }
    };
    this.onRestored = () => {
      const restoredFiles = this.uppy.getFiles().filter((file) => file.isRestored);
      restoredFiles.forEach((file) => {
        if (!file.preview || isObjectURL(file.preview)) {
          this.addToQueue(file.id);
        }
      });
    };
    this.onAllFilesRemoved = () => {
      this.queue = [];
    };
    this.waitUntilAllProcessed = (fileIDs) => {
      fileIDs.forEach((fileID) => {
        const file = this.uppy.getFile(fileID);
        this.uppy.emit("preprocess-progress", file, {
          mode: "indeterminate",
          message: this.i18n("generatingThumbnails")
        });
      });
      const emitPreprocessCompleteForAll = () => {
        fileIDs.forEach((fileID) => {
          const file = this.uppy.getFile(fileID);
          this.uppy.emit("preprocess-complete", file);
        });
      };
      return new Promise((resolve) => {
        if (this.queueProcessing) {
          this.uppy.once("thumbnail:all-generated", () => {
            emitPreprocessCompleteForAll();
            resolve();
          });
        } else {
          emitPreprocessCompleteForAll();
          resolve();
        }
      });
    };
    this.type = "modifier";
    this.id = this.opts.id || "ThumbnailGenerator";
    this.title = "Thumbnail Generator";
    this.queue = [];
    this.queueProcessing = false;
    this.defaultThumbnailDimension = 200;
    this.thumbnailType = this.opts.thumbnailType || "image/jpeg";
    this.defaultLocale = locale_default2;
    const defaultOptions = {
      thumbnailWidth: null,
      thumbnailHeight: null,
      waitForThumbnailsBeforeUpload: false,
      lazy: false
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    if (this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload) {
      throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
    }
  }
  /**
   * Create a thumbnail for the given Uppy file object.
   *
   * @param {{data: Blob}} file
   * @param {number} targetWidth
   * @param {number} targetHeight
   * @returns {Promise}
   */
  createThumbnail(file, targetWidth, targetHeight) {
    const originalUrl = URL.createObjectURL(file.data);
    const onload = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = originalUrl;
      image.addEventListener("load", () => {
        URL.revokeObjectURL(originalUrl);
        resolve(image);
      });
      image.addEventListener("error", (event) => {
        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error("Could not create thumbnail"));
      });
    });
    const orientationPromise = ye(file.data).catch(() => 1);
    return Promise.all([onload, orientationPromise]).then((_ref) => {
      let [image, orientation] = _ref;
      const dimensions = this.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);
      const rotatedImage = rotateImage(image, orientation);
      const resizedImage = this.resizeImage(rotatedImage, dimensions.width, dimensions.height);
      return canvasToBlob(resizedImage, this.thumbnailType, 80);
    }).then((blob) => {
      return URL.createObjectURL(blob);
    });
  }
  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */
  getProportionalDimensions(img, width, height, rotation) {
    let aspect = img.width / img.height;
    if (rotation === 90 || rotation === 270) {
      aspect = img.height / img.width;
    }
    if (width != null) {
      return {
        width,
        height: Math.round(width / aspect)
      };
    }
    if (height != null) {
      return {
        width: Math.round(height * aspect),
        height
      };
    }
    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
  }
  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */
  // eslint-disable-next-line class-methods-use-this
  resizeImage(image, targetWidth, targetHeight) {
    let img = protect(image);
    let steps = Math.ceil(Math.log2(img.width / targetWidth));
    if (steps < 1) {
      steps = 1;
    }
    let sW = targetWidth * 2 ** (steps - 1);
    let sH = targetHeight * 2 ** (steps - 1);
    const x2 = 2;
    while (steps--) {
      const canvas = document.createElement("canvas");
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext("2d").drawImage(img, 0, 0, sW, sH);
      img = canvas;
      sW = Math.round(sW / x2);
      sH = Math.round(sH / x2);
    }
    return img;
  }
  /**
   * Set the preview URL for a file.
   */
  setPreviewURL(fileID, preview) {
    this.uppy.setFileState(fileID, {
      preview
    });
  }
  addToQueue(item) {
    this.queue.push(item);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
  }
  processQueue() {
    this.queueProcessing = true;
    if (this.queue.length > 0) {
      const current = this.uppy.getFile(this.queue.shift());
      if (!current) {
        this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error");
        return Promise.resolve();
      }
      return this.requestThumbnail(current).catch(() => {
      }).then(() => this.processQueue());
    }
    this.queueProcessing = false;
    this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue");
    this.uppy.emit("thumbnail:all-generated");
    return Promise.resolve();
  }
  requestThumbnail(file) {
    if (isPreviewSupported(file.type) && !file.isRemote) {
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((preview) => {
        this.setPreviewURL(file.id, preview);
        this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${file.id}`);
        this.uppy.emit("thumbnail:generated", this.uppy.getFile(file.id), preview);
      }).catch((err) => {
        this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${file.id}:`, "warning");
        this.uppy.log(err, "warning");
        this.uppy.emit("thumbnail:error", this.uppy.getFile(file.id), err);
      });
    }
    return Promise.resolve();
  }
  install() {
    this.uppy.on("file-removed", this.onFileRemoved);
    this.uppy.on("cancel-all", this.onAllFilesRemoved);
    if (this.opts.lazy) {
      this.uppy.on("thumbnail:request", this.onFileAdded);
      this.uppy.on("thumbnail:cancel", this.onCancelRequest);
    } else {
      this.uppy.on("file-added", this.onFileAdded);
      this.uppy.on("restored", this.onRestored);
    }
    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.addPreProcessor(this.waitUntilAllProcessed);
    }
  }
  uninstall() {
    this.uppy.off("file-removed", this.onFileRemoved);
    this.uppy.off("cancel-all", this.onAllFilesRemoved);
    if (this.opts.lazy) {
      this.uppy.off("thumbnail:request", this.onFileAdded);
      this.uppy.off("thumbnail:cancel", this.onCancelRequest);
    } else {
      this.uppy.off("file-added", this.onFileAdded);
      this.uppy.off("restored", this.onRestored);
    }
    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.removePreProcessor(this.waitUntilAllProcessed);
    }
  }
};
ThumbnailGenerator.VERSION = packageJson3.version;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/findAllDOMElements.js
function findAllDOMElements(element) {
  if (typeof element === "string") {
    const elements = document.querySelectorAll(element);
    return elements.length === 0 ? null : Array.from(elements);
  }
  if (typeof element === "object" && isDOMElement(element)) {
    return [element];
  }
  return null;
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/toArray.js
var toArray_default = Array.from;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js
function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  let {
    onSuccess
  } = _ref;
  directoryReader.readEntries(
    (entries) => {
      const newEntries = [...oldEntries, ...entries];
      if (entries.length) {
        queueMicrotask(() => {
          getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
            onSuccess
          });
        });
      } else {
        onSuccess(newEntries);
      }
    },
    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (error) => {
      logDropError(error);
      onSuccess(oldEntries);
    }
  );
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js
function getAsFileSystemHandleFromEntry(entry, logDropError) {
  if (entry == null)
    return entry;
  return {
    // eslint-disable-next-line no-nested-ternary
    kind: entry.isFile ? "file" : entry.isDirectory ? "directory" : void 0,
    name: entry.name,
    getFile() {
      return new Promise((resolve, reject) => entry.file(resolve, reject));
    },
    async *values() {
      const directoryReader = entry.createReader();
      const entries = await new Promise((resolve) => {
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: (dirEntries) => resolve(dirEntries.map((file) => getAsFileSystemHandleFromEntry(file, logDropError)))
        });
      });
      yield* entries;
    }
  };
}
function createPromiseToAddFileOrParseDirectory(entry, relativePath, lastResortFile) {
  try {
    if (lastResortFile === void 0) {
      lastResortFile = void 0;
    }
    return async function* () {
      if (entry.kind === "file") {
        const file = await entry.getFile();
        if (file != null) {
          file.relativePath = relativePath ? `${relativePath}/${entry.name}` : null;
          yield file;
        } else if (lastResortFile != null)
          yield lastResortFile;
      } else if (entry.kind === "directory") {
        for await (const handle of entry.values()) {
          yield* createPromiseToAddFileOrParseDirectory(handle, `${relativePath}/${entry.name}`);
        }
      } else if (lastResortFile != null)
        yield lastResortFile;
    }();
  } catch (e3) {
    return Promise.reject(e3);
  }
}
async function* getFilesFromDataTransfer(dataTransfer, logDropError) {
  const fileSystemHandles = await Promise.all(Array.from(dataTransfer.items, async (item) => {
    var _fileSystemHandle;
    let fileSystemHandle;
    const getAsEntry = () => typeof item.getAsEntry === "function" ? item.getAsEntry() : item.webkitGetAsEntry();
    (_fileSystemHandle = fileSystemHandle) != null ? _fileSystemHandle : fileSystemHandle = getAsFileSystemHandleFromEntry(getAsEntry(), logDropError);
    return {
      fileSystemHandle,
      lastResortFile: item.getAsFile()
      // can be used as a fallback in case other methods fail
    };
  }));
  for (const {
    lastResortFile,
    fileSystemHandle
  } of fileSystemHandles) {
    if (fileSystemHandle != null) {
      try {
        yield* createPromiseToAddFileOrParseDirectory(fileSystemHandle, "", lastResortFile);
      } catch (err) {
        if (lastResortFile != null) {
          yield lastResortFile;
        } else {
          logDropError(err);
        }
      }
    } else if (lastResortFile != null)
      yield lastResortFile;
  }
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js
function fallbackApi(dataTransfer) {
  const files = toArray_default(dataTransfer.files);
  return Promise.resolve(files);
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getDroppedFiles/index.js
async function getDroppedFiles(dataTransfer, _temp) {
  let {
    logDropError = () => {
    }
  } = _temp === void 0 ? {} : _temp;
  try {
    const accumulator = [];
    for await (const file of getFilesFromDataTransfer(dataTransfer, logDropError)) {
      accumulator.push(file);
    }
    return accumulator;
  } catch {
    return fallbackApi(dataTransfer);
  }
}

// node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i3 = 0; i3 < newInputs.length; i3++) {
    if (!isEqual(newInputs[i3], lastInputs[i3])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js
var FOCUSABLE_ELEMENTS_default = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js
function getActiveOverlayEl(dashboardEl, activeOverlayType) {
  if (activeOverlayType) {
    const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
    if (overlayEl)
      return overlayEl;
  }
  return dashboardEl;
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/utils/trapFocus.js
function focusOnFirstNode(event, nodes) {
  const node = nodes[0];
  if (node) {
    node.focus();
    event.preventDefault();
  }
}
function focusOnLastNode(event, nodes) {
  const node = nodes[nodes.length - 1];
  if (node) {
    node.focus();
    event.preventDefault();
  }
}
function isFocusInOverlay(activeOverlayEl) {
  return activeOverlayEl.contains(document.activeElement);
}
function trapFocus(event, activeOverlayType, dashboardEl) {
  const activeOverlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
  const focusableNodes = toArray_default(activeOverlayEl.querySelectorAll(FOCUSABLE_ELEMENTS_default));
  const focusedItemIndex = focusableNodes.indexOf(document.activeElement);
  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event, focusableNodes);
  } else if (event.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event, focusableNodes);
  } else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event, focusableNodes);
  }
}
function forInline(event, activeOverlayType, dashboardEl) {
  if (activeOverlayType === null) {
  } else {
    trapFocus(event, activeOverlayType, dashboardEl);
  }
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/utils/createSuperFocus.js
var import_debounce = __toESM(require_debounce(), 1);
function createSuperFocus() {
  let lastFocusWasOnSuperFocusableEl = false;
  const superFocus = (dashboardEl, activeOverlayType) => {
    const overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    const isFocusInOverlay2 = overlayEl.contains(document.activeElement);
    if (isFocusInOverlay2 && lastFocusWasOnSuperFocusableEl)
      return;
    const superFocusableEl = overlayEl.querySelector("[data-uppy-super-focusable]");
    if (isFocusInOverlay2 && !superFocusableEl)
      return;
    if (superFocusableEl) {
      superFocusableEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = true;
    } else {
      const firstEl = overlayEl.querySelector(FOCUSABLE_ELEMENTS_default);
      firstEl == null ? void 0 : firstEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = false;
    }
  };
  return (0, import_debounce.default)(superFocus, 260);
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/Dashboard.js
var import_classnames9 = __toESM(require_classnames(), 1);

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/isDragDropSupported.js
function isDragDropSupported() {
  const div = document.body;
  if (!("draggable" in div) || !("ondragstart" in div && "ondrop" in div)) {
    return false;
  }
  if (!("FormData" in window)) {
    return false;
  }
  if (!("FileReader" in window)) {
    return false;
  }
  return true;
}

// node_modules/.pnpm/preact@10.16.0/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l3 = l.__c;
var m2 = l.unmount;
function d2(t3, u3) {
  l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
  var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
}
function h2(n2) {
  return o2 = 1, s2(B2, n2);
}
function s2(n2, u3, i3) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.u)) {
    var f3 = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r3);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
    };
    r2.u = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function p2(u3, i3) {
  var o3 = d2(t2++, 3);
  !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
}
function F3(n2, r3) {
  var u3 = d2(t2++, 7);
  return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
}
function T2(n2, t3) {
  return o2 = 8, F3(function() {
    return n2;
  }, t3);
}
function b3() {
  for (var t3; t3 = f2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k3), t3.__H.__h.forEach(w2), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i3.__h.forEach(k3), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o3 = t3.__c;
  o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b3)), o3.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t3, r3) {
  r3.some(function(t4) {
    try {
      t4.__h.forEach(k3), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t4.__v);
    }
  }), l3 && l3(t3, r3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r3, u3 = t3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      k3(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k3(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function z2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function B2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/index.js
var import_classnames3 = __toESM(require_classnames(), 1);
var import_is_shallow_equal = __toESM(require_is_shallow_equal(), 1);

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js
function iconImage() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("g", {
    fill: "#686DE0",
    fillRule: "evenodd"
  }, y("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    fillRule: "nonzero"
  }), y("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    fillRule: "nonzero"
  }), y("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}
function iconAudio() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    fillRule: "nonzero"
  }));
}
function iconVideo() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    fillRule: "nonzero"
  }));
}
function iconPDF() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    fillRule: "nonzero"
  }));
}
function iconArchive() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    fillRule: "nonzero"
  }));
}
function iconFile() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("g", {
    fill: "#A7AFB7",
    fillRule: "nonzero"
  }, y("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), y("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}
function iconText() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, y("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    fillRule: "nonzero"
  }));
}
function getIconByMime(fileType) {
  const defaultChoice = {
    color: "#838999",
    icon: iconFile()
  };
  if (!fileType)
    return defaultChoice;
  const fileTypeGeneral = fileType.split("/")[0];
  const fileTypeSpecific = fileType.split("/")[1];
  if (fileTypeGeneral === "text") {
    return {
      color: "#5a5e69",
      icon: iconText()
    };
  }
  if (fileTypeGeneral === "image") {
    return {
      color: "#686de0",
      icon: iconImage()
    };
  }
  if (fileTypeGeneral === "audio") {
    return {
      color: "#068dbb",
      icon: iconAudio()
    };
  }
  if (fileTypeGeneral === "video") {
    return {
      color: "#19af67",
      icon: iconVideo()
    };
  }
  if (fileTypeGeneral === "application" && fileTypeSpecific === "pdf") {
    return {
      color: "#e25149",
      icon: iconPDF()
    };
  }
  const archiveTypes = ["zip", "x-7z-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"];
  if (fileTypeGeneral === "application" && archiveTypes.indexOf(fileTypeSpecific) !== -1) {
    return {
      color: "#00C469",
      icon: iconArchive()
    };
  }
  return defaultChoice;
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FilePreview.js
function FilePreview(props) {
  const {
    file
  } = props;
  if (file.preview) {
    return y("img", {
      className: "uppy-Dashboard-Item-previewImg",
      alt: file.name,
      src: file.preview
    });
  }
  const {
    color,
    icon
  } = getIconByMime(file.type);
  return y("div", {
    className: "uppy-Dashboard-Item-previewIconWrap"
  }, y("span", {
    className: "uppy-Dashboard-Item-previewIcon",
    style: {
      color
    }
  }, icon), y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-Dashboard-Item-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, y("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    fillRule: "evenodd"
  })));
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/MetaErrorMessage.js
var metaFieldIdToName = (metaFieldId, metaFields2) => {
  const fields = typeof metaFields2 === "function" ? metaFields2() : metaFields2;
  const field = fields.filter((f3) => f3.id === metaFieldId);
  return field[0].name;
};
function renderMissingMetaFieldsError(props) {
  const {
    file,
    toggleFileCard,
    i18n,
    metaFields: metaFields2
  } = props;
  const {
    missingRequiredMetaFields
  } = file;
  if (!(missingRequiredMetaFields != null && missingRequiredMetaFields.length)) {
    return null;
  }
  const metaFieldsString = missingRequiredMetaFields.map((missingMetaField) => metaFieldIdToName(missingMetaField, metaFields2)).join(", ");
  return y("div", {
    className: "uppy-Dashboard-Item-errorMessage"
  }, i18n("missingRequiredMetaFields", {
    smart_count: missingRequiredMetaFields.length,
    fields: metaFieldsString
  }), " ", y("button", {
    type: "button",
    class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
    onClick: () => toggleFileCard(true, file.id)
  }, i18n("editFile")));
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/FilePreviewAndLink/index.js
function FilePreviewAndLink(props) {
  const {
    file,
    i18n,
    toggleFileCard,
    metaFields: metaFields2,
    showLinkToFileUploadResult
  } = props;
  const white = "rgba(255, 255, 255, 0.5)";
  const previewBackgroundColor = file.preview ? white : getIconByMime(props.file.type).color;
  return y("div", {
    className: "uppy-Dashboard-Item-previewInnerWrap",
    style: {
      backgroundColor: previewBackgroundColor
    }
  }, showLinkToFileUploadResult && file.uploadURL && y("a", {
    className: "uppy-Dashboard-Item-previewLink",
    href: file.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": file.meta.name
  }, y("span", {
    hidden: true
  }, file.meta.name)), y(FilePreview, {
    file
  }), y(renderMissingMetaFieldsError, {
    file,
    i18n,
    toggleFileCard,
    metaFields: metaFields2
  }));
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/index.js
function onPauseResumeCancelRetry(props) {
  if (props.isUploaded)
    return;
  if (props.error && !props.hideRetryButton) {
    props.uppy.retryUpload(props.file.id);
    return;
  }
  if (props.resumableUploads && !props.hidePauseResumeButton) {
    props.uppy.pauseResume(props.file.id);
  } else if (props.individualCancellation && !props.hideCancelButton) {
    props.uppy.removeFile(props.file.id);
  }
}
function progressIndicatorTitle(props) {
  if (props.isUploaded) {
    return props.i18n("uploadComplete");
  }
  if (props.error) {
    return props.i18n("retryUpload");
  }
  if (props.resumableUploads) {
    if (props.file.isPaused) {
      return props.i18n("resumeUpload");
    }
    return props.i18n("pauseUpload");
  }
  if (props.individualCancellation) {
    return props.i18n("cancelUpload");
  }
  return "";
}
function ProgressIndicatorButton(props) {
  return y("div", {
    className: "uppy-Dashboard-Item-progress"
  }, y("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": progressIndicatorTitle(props),
    title: progressIndicatorTitle(props),
    onClick: () => onPauseResumeCancelRetry(props)
  }, props.children));
}
function ProgressCircleContainer(_ref) {
  let {
    children
  } = _ref;
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, children);
}
function ProgressCircle(_ref2) {
  let {
    progress
  } = _ref2;
  const circleLength = 2 * Math.PI * 15;
  return y("g", null, y("circle", {
    className: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), y("circle", {
    className: "uppy-Dashboard-Item-progressIcon--progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    fill: "none",
    "stroke-width": "2",
    "stroke-dasharray": circleLength,
    "stroke-dashoffset": circleLength - circleLength / 100 * progress
  }));
}
function FileProgress(props) {
  if (!props.file.progress.uploadStarted) {
    return null;
  }
  if (props.isUploaded) {
    return y("div", {
      className: "uppy-Dashboard-Item-progress"
    }, y("div", {
      className: "uppy-Dashboard-Item-progressIndicator"
    }, y(ProgressCircleContainer, null, y("circle", {
      r: "15",
      cx: "18",
      cy: "18",
      fill: "#1bb240"
    }), y("polygon", {
      className: "uppy-Dashboard-Item-progressIcon--check",
      transform: "translate(2, 3)",
      points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }))));
  }
  if (props.recoveredState) {
    return void 0;
  }
  if (props.error && !props.hideRetryButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      y(ProgressIndicatorButton, props, y("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
        width: "28",
        height: "31",
        viewBox: "0 0 16 19"
      }, y("path", {
        d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
      }), y("path", {
        d: "M7.9 3H10v2H7.9z"
      }), y("path", {
        d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
      }), y("path", {
        d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
      })))
    );
  }
  if (props.resumableUploads && !props.hidePauseResumeButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      y(ProgressIndicatorButton, props, y(ProgressCircleContainer, null, y(ProgressCircle, {
        progress: props.file.progress.percentage
      }), props.file.isPaused ? y("polygon", {
        className: "uppy-Dashboard-Item-progressIcon--play",
        transform: "translate(3, 3)",
        points: "12 20 12 10 20 15"
      }) : y("g", {
        className: "uppy-Dashboard-Item-progressIcon--pause",
        transform: "translate(14.5, 13)"
      }, y("rect", {
        x: "0",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }), y("rect", {
        x: "5",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }))))
    );
  }
  if (!props.resumableUploads && props.individualCancellation && !props.hideCancelButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      y(ProgressIndicatorButton, props, y(ProgressCircleContainer, null, y(ProgressCircle, {
        progress: props.file.progress.percentage
      }), y("polygon", {
        className: "cancel",
        transform: "translate(2, 2)",
        points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
      })))
    );
  }
  return y("div", {
    className: "uppy-Dashboard-Item-progress"
  }, y("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, y(ProgressCircleContainer, null, y(ProgressCircle, {
    progress: props.file.progress.percentage
  }))));
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js
var import_prettier_bytes2 = __toESM(require_prettierBytes2(), 1);

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/truncateString.js
var separator = "...";
function truncateString(string, maxLength) {
  if (maxLength === 0)
    return "";
  if (string.length <= maxLength)
    return string;
  if (maxLength <= separator.length + 1)
    return `${string.slice(0, maxLength - 1)}\u2026`;
  const charsToShow = maxLength - separator.length;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  return string.slice(0, frontChars) + separator + string.slice(-backChars);
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js
var renderFileName = (props) => {
  const {
    author,
    name
  } = props.file.meta;
  function getMaxNameLength() {
    if (props.isSingleFile && props.containerHeight >= 350) {
      return 90;
    }
    if (props.containerWidth <= 352) {
      return 35;
    }
    if (props.containerWidth <= 576) {
      return 60;
    }
    return author ? 20 : 30;
  }
  return y("div", {
    className: "uppy-Dashboard-Item-name",
    title: name
  }, truncateString(name, getMaxNameLength()));
};
var renderAuthor = (props) => {
  const {
    author
  } = props.file.meta;
  const {
    providerName
  } = props.file.remote;
  const dot = `\xB7`;
  if (!author) {
    return null;
  }
  return y("div", {
    className: "uppy-Dashboard-Item-author"
  }, y("a", {
    href: `${author.url}?utm_source=Companion&utm_medium=referral`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, truncateString(author.name, 13)), providerName ? y(k, null, ` ${dot} `, providerName, ` ${dot} `) : null);
};
var renderFileSize = (props) => props.file.size && y("div", {
  className: "uppy-Dashboard-Item-statusSize"
}, (0, import_prettier_bytes2.default)(props.file.size));
var ReSelectButton = (props) => props.file.isGhost && y("span", null, " \u2022 ", y("button", {
  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
  type: "button",
  onClick: props.toggleAddFilesPanel
}, props.i18n("reSelect")));
var ErrorButton = (_ref) => {
  let {
    file,
    onClick
  } = _ref;
  if (file.error) {
    return y("button", {
      className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
      "aria-label": file.error,
      "data-microtip-position": "bottom",
      "data-microtip-size": "medium",
      onClick,
      type: "button"
    }, "?");
  }
  return null;
};
function FileInfo(props) {
  const {
    file
  } = props;
  return y("div", {
    className: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": file.source
  }, y("div", {
    className: "uppy-Dashboard-Item-fileName"
  }, renderFileName(props), y(ErrorButton, {
    file: props.file,
    onClick: () => alert(props.file.error)
    // TODO: move to a custom alert implementation
  })), y("div", {
    className: "uppy-Dashboard-Item-status"
  }, renderAuthor(props), renderFileSize(props), ReSelectButton(props)), y(renderMissingMetaFieldsError, {
    file: props.file,
    i18n: props.i18n,
    toggleFileCard: props.toggleFileCard,
    metaFields: props.metaFields
  }));
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js
function copyToClipboard(textToCopy, fallbackString) {
  if (fallbackString === void 0) {
    fallbackString = "Copy the URL below";
  }
  return new Promise((resolve) => {
    const textArea = document.createElement("textarea");
    textArea.setAttribute("style", {
      position: "fixed",
      top: 0,
      left: 0,
      width: "2em",
      height: "2em",
      padding: 0,
      border: "none",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    });
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    const magicCopyFailed = () => {
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
    };
    try {
      const successful = document.execCommand("copy");
      if (!successful) {
        return magicCopyFailed("copy command unavailable");
      }
      document.body.removeChild(textArea);
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return magicCopyFailed(err);
    }
  });
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/Buttons/index.js
function EditButton(_ref) {
  let {
    file,
    uploadInProgressOrComplete,
    metaFields: metaFields2,
    canEditFile,
    i18n,
    onClick
  } = _ref;
  if (!uploadInProgressOrComplete && metaFields2 && metaFields2.length > 0 || !uploadInProgressOrComplete && canEditFile(file)) {
    return y("button", {
      className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
      type: "button",
      "aria-label": i18n("editFileWithFilename", {
        file: file.meta.name
      }),
      title: i18n("editFileWithFilename", {
        file: file.meta.name
      }),
      onClick: () => onClick()
    }, y("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, y("g", {
      fillRule: "evenodd"
    }, y("path", {
      d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
      fillRule: "nonzero"
    }), y("rect", {
      x: "1",
      y: "12.293",
      width: "11",
      height: "1",
      rx: ".5"
    }), y("path", {
      fillRule: "nonzero",
      d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
    }))));
  }
  return null;
}
function RemoveButton(_ref2) {
  let {
    i18n,
    onClick,
    file
  } = _ref2;
  return y("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
    type: "button",
    "aria-label": i18n("removeFile", {
      file: file.meta.name
    }),
    title: i18n("removeFile", {
      file: file.meta.name
    }),
    onClick: () => onClick()
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, y("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), y("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  })));
}
var copyLinkToClipboard = (event, props) => {
  copyToClipboard(props.file.uploadURL, props.i18n("copyLinkToClipboardFallback")).then(() => {
    props.uppy.log("Link copied to clipboard.");
    props.uppy.info(props.i18n("copyLinkToClipboardSuccess"), "info", 3e3);
  }).catch(props.uppy.log).then(() => event.target.focus({
    preventScroll: true
  }));
};
function CopyLinkButton(props) {
  const {
    i18n
  } = props;
  return y("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
    type: "button",
    "aria-label": i18n("copyLink"),
    title: i18n("copyLink"),
    onClick: (event) => copyLinkToClipboard(event, props)
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, y("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  })));
}
function Buttons(props) {
  const {
    uppy: uppy2,
    file,
    uploadInProgressOrComplete,
    canEditFile,
    metaFields: metaFields2,
    showLinkToFileUploadResult,
    showRemoveButton,
    i18n,
    toggleFileCard,
    openFileEditor
  } = props;
  const editAction = () => {
    if (metaFields2 && metaFields2.length > 0) {
      toggleFileCard(true, file.id);
    } else {
      openFileEditor(file);
    }
  };
  return y("div", {
    className: "uppy-Dashboard-Item-actionWrapper"
  }, y(EditButton, {
    i18n,
    file,
    uploadInProgressOrComplete,
    canEditFile,
    metaFields: metaFields2,
    onClick: editAction
  }), showLinkToFileUploadResult && file.uploadURL ? y(CopyLinkButton, {
    file,
    uppy: uppy2,
    i18n
  }) : null, showRemoveButton ? y(RemoveButton, {
    i18n,
    file,
    uppy: uppy2,
    onClick: () => props.uppy.removeFile(file.id, "removed-by-user")
  }) : null);
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileItem/index.js
var FileItem = class extends b {
  componentDidMount() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
  }
  shouldComponentUpdate(nextProps) {
    return !(0, import_is_shallow_equal.default)(this.props, nextProps);
  }
  // VirtualList mounts FileItems again and they emit `thumbnail:request`
  // Otherwise thumbnails are broken or missing after Golden Retriever restores files
  componentDidUpdate() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
  }
  componentWillUnmount() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleCancelThumbnail(file);
    }
  }
  render() {
    const {
      file
    } = this.props;
    const isProcessing = file.progress.preprocess || file.progress.postprocess;
    const isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
    const uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
    const uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    const error = file.error || false;
    const {
      isGhost
    } = file;
    let showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
    if (isUploaded && this.props.showRemoveButtonAfterComplete) {
      showRemoveButton = true;
    }
    const dashboardItemClass = (0, import_classnames3.default)({
      "uppy-Dashboard-Item": true,
      "is-inprogress": uploadInProgress && !this.props.recoveredState,
      "is-processing": isProcessing,
      "is-complete": isUploaded,
      "is-error": !!error,
      "is-resumable": this.props.resumableUploads,
      "is-noIndividualCancellation": !this.props.individualCancellation,
      "is-ghost": isGhost
    });
    return y("div", {
      className: dashboardItemClass,
      id: `uppy_${file.id}`,
      role: this.props.role
    }, y("div", {
      className: "uppy-Dashboard-Item-preview"
    }, y(FilePreviewAndLink, {
      file,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      i18n: this.props.i18n,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields
    }), y(FileProgress, {
      uppy: this.props.uppy,
      file,
      error,
      isUploaded,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      recoveredState: this.props.recoveredState,
      showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      i18n: this.props.i18n
    })), y("div", {
      className: "uppy-Dashboard-Item-fileInfoAndButtons"
    }, y(FileInfo, {
      file,
      id: this.props.id,
      acquirers: this.props.acquirers,
      containerWidth: this.props.containerWidth,
      containerHeight: this.props.containerHeight,
      i18n: this.props.i18n,
      toggleAddFilesPanel: this.props.toggleAddFilesPanel,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields,
      isSingleFile: this.props.isSingleFile
    }), y(Buttons, {
      file,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton,
      canEditFile: this.props.canEditFile,
      uploadInProgressOrComplete,
      toggleFileCard: this.props.toggleFileCard,
      openFileEditor: this.props.openFileEditor,
      uppy: this.props.uppy,
      i18n: this.props.i18n
    })));
  }
};

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/VirtualList.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var STYLE_INNER = {
  position: "relative",
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  //
  // overflow: 'hidden',
  width: "100%",
  minHeight: "100%"
};
var STYLE_CONTENT = {
  position: "absolute",
  top: 0,
  left: 0,
  // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
  // stretch far beyond the content. For our use case, the content div actually can get its height from
  // the elements inside it, so we don't need to specify a `height` property at all.
  //
  // height: '100%',
  width: "100%",
  overflow: "visible"
};
var VirtualList = class extends b {
  constructor(props) {
    super(props);
    this.handleScroll = () => {
      this.setState({
        offset: this.base.scrollTop
      });
    };
    this.handleResize = () => {
      this.resize();
    };
    this.focusElement = null;
    this.state = {
      offset: 0,
      height: 0
    };
  }
  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.handleResize);
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate() {
    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }
  }
  componentDidUpdate() {
    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }
    this.focusElement = null;
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  resize() {
    const {
      height
    } = this.state;
    if (height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }
  }
  render(_ref) {
    let {
      data,
      rowHeight,
      renderRow,
      overscanCount = 10,
      ...props
    } = _ref;
    const {
      offset,
      height
    } = this.state;
    let start = Math.floor(offset / rowHeight);
    let visibleRowCount = Math.floor(height / rowHeight);
    if (overscanCount) {
      start = Math.max(0, start - start % overscanCount);
      visibleRowCount += overscanCount;
    }
    const end = start + visibleRowCount + 4;
    const selection = data.slice(start, end);
    const styleInner = {
      ...STYLE_INNER,
      height: data.length * rowHeight
    };
    const styleContent = {
      ...STYLE_CONTENT,
      top: start * rowHeight
    };
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      y("div", _extends({
        onScroll: this.handleScroll
      }, props), y("div", {
        role: "presentation",
        style: styleInner
      }, y("div", {
        role: "presentation",
        style: styleContent
      }, selection.map(renderRow))))
    );
  }
};
var VirtualList_default = VirtualList;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileList.js
function chunks(list, size) {
  const chunked = [];
  let currentChunk = [];
  list.forEach((item) => {
    if (currentChunk.length < size) {
      currentChunk.push(item);
    } else {
      chunked.push(currentChunk);
      currentChunk = [item];
    }
  });
  if (currentChunk.length)
    chunked.push(currentChunk);
  return chunked;
}
var FileList_default = (_ref) => {
  let {
    id: id3,
    error,
    i18n,
    uppy: uppy2,
    files,
    acquirers,
    resumableUploads,
    hideRetryButton,
    hidePauseResumeButton,
    hideCancelButton,
    showLinkToFileUploadResult,
    showRemoveButtonAfterComplete,
    isWide,
    metaFields: metaFields2,
    isSingleFile,
    toggleFileCard,
    handleRequestThumbnail,
    handleCancelThumbnail,
    recoveredState,
    individualCancellation,
    itemsPerRow,
    openFileEditor,
    canEditFile,
    toggleAddFilesPanel,
    containerWidth,
    containerHeight
  } = _ref;
  const rowHeight = itemsPerRow === 1 ? 71 : 200;
  const rows = F3(() => {
    const sortByGhostComesFirst = (file1, file2) => files[file2].isGhost - files[file1].isGhost;
    const fileIds = Object.keys(files);
    if (recoveredState)
      fileIds.sort(sortByGhostComesFirst);
    return chunks(fileIds, itemsPerRow);
  }, [files, itemsPerRow, recoveredState]);
  const renderRow = (row) => (
    // The `role="presentation` attribute ensures that the list items are properly
    // associated with the `VirtualList` element.
    // We use the first file ID as the key—this should not change across scroll rerenders
    y("div", {
      class: "uppy-Dashboard-filesInner",
      role: "presentation",
      key: row[0]
    }, row.map((fileID) => y(FileItem, {
      key: fileID,
      uppy: uppy2,
      id: id3,
      error,
      i18n,
      acquirers,
      resumableUploads,
      individualCancellation,
      hideRetryButton,
      hidePauseResumeButton,
      hideCancelButton,
      showLinkToFileUploadResult,
      showRemoveButtonAfterComplete,
      isWide,
      metaFields: metaFields2,
      recoveredState,
      isSingleFile,
      containerWidth,
      containerHeight,
      toggleFileCard,
      handleRequestThumbnail,
      handleCancelThumbnail,
      role: "listitem",
      openFileEditor,
      canEditFile,
      toggleAddFilesPanel,
      file: files[fileID]
    })))
  );
  if (isSingleFile) {
    return y("div", {
      class: "uppy-Dashboard-files"
    }, renderRow(rows[0]));
  }
  return y(VirtualList_default, {
    class: "uppy-Dashboard-files",
    role: "list",
    data: rows,
    renderRow,
    rowHeight
  });
};

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/AddFiles.js
var _Symbol$for;
_Symbol$for = Symbol.for("uppy test: disable unused locale key warning");
var AddFiles = class extends b {
  constructor() {
    super(...arguments);
    this.triggerFileInputClick = () => {
      this.fileInput.click();
    };
    this.triggerFolderInputClick = () => {
      this.folderInput.click();
    };
    this.triggerVideoCameraInputClick = () => {
      this.mobileVideoFileInput.click();
    };
    this.triggerPhotoCameraInputClick = () => {
      this.mobilePhotoFileInput.click();
    };
    this.onFileInputChange = (event) => {
      this.props.handleInputChange(event);
      event.target.value = null;
    };
    this.renderHiddenInput = (isFolder, refCallback) => {
      return y("input", {
        className: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabIndex: -1,
        webkitdirectory: isFolder,
        type: "file",
        name: "files[]",
        multiple: this.props.maxNumberOfFiles !== 1,
        onChange: this.onFileInputChange,
        accept: this.props.allowedFileTypes,
        ref: refCallback
      });
    };
    this.renderHiddenCameraInput = (type, nativeCameraFacingMode, refCallback) => {
      const typeToAccept = {
        photo: "image/*",
        video: "video/*"
      };
      const accept = typeToAccept[type];
      return y("input", {
        className: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabIndex: -1,
        type: "file",
        name: `camera-${type}`,
        onChange: this.onFileInputChange,
        capture: nativeCameraFacingMode,
        accept,
        ref: refCallback
      });
    };
    this.renderMyDeviceAcquirer = () => {
      return y("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MyDevice"
      }, y("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerFileInputClick
      }, y("div", {
        className: "uppy-DashboardTab-inner"
      }, y("svg", {
        className: "uppy-DashboardTab-iconMyDevice",
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, y("path", {
        d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
        fill: "currentcolor",
        "fill-rule": "evenodd"
      }))), y("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("myDevice"))));
    };
    this.renderPhotoCamera = () => {
      return y("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MobilePhotoCamera"
      }, y("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerPhotoCameraInputClick
      }, y("div", {
        className: "uppy-DashboardTab-inner"
      }, y("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, y("path", {
        d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
        fill: "#02B383",
        "fill-rule": "nonzero"
      }))), y("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("takePictureBtn"))));
    };
    this.renderVideoCamera = () => {
      return y("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MobileVideoCamera"
      }, y("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerVideoCameraInputClick
      }, y("div", {
        className: "uppy-DashboardTab-inner"
      }, y("svg", {
        "aria-hidden": "true",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, y("path", {
        fill: "#FF675E",
        fillRule: "nonzero",
        d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
      }))), y("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("recordVideoBtn"))));
    };
    this.renderBrowseButton = (text, onClickFn) => {
      const numberOfAcquirers = this.props.acquirers.length;
      return y("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
        onClick: onClickFn,
        "data-uppy-super-focusable": numberOfAcquirers === 0
      }, text);
    };
    this.renderDropPasteBrowseTagline = (numberOfAcquirers) => {
      const browseFiles = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick);
      const browseFolders = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick);
      const lowerFMSelectionType = this.props.fileManagerSelectionType;
      const camelFMSelectionType = lowerFMSelectionType.charAt(0).toUpperCase() + lowerFMSelectionType.slice(1);
      return y(
        "div",
        {
          class: "uppy-Dashboard-AddFiles-title"
        },
        // eslint-disable-next-line no-nested-ternary
        this.props.disableLocalFiles ? this.props.i18n("importFiles") : numberOfAcquirers > 0 ? this.props.i18nArray(`dropPasteImport${camelFMSelectionType}`, {
          browseFiles,
          browseFolders,
          browse: browseFiles
        }) : this.props.i18nArray(`dropPaste${camelFMSelectionType}`, {
          browseFiles,
          browseFolders,
          browse: browseFiles
        })
      );
    };
    this.renderAcquirer = (acquirer) => {
      return y("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": acquirer.id
      }, y("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-cy": acquirer.id,
        "aria-controls": `uppy-DashboardContent-panel--${acquirer.id}`,
        "aria-selected": this.props.activePickerPanel.id === acquirer.id,
        "data-uppy-super-focusable": true,
        onClick: () => this.props.showPanel(acquirer.id)
      }, y("div", {
        className: "uppy-DashboardTab-inner"
      }, acquirer.icon()), y("div", {
        className: "uppy-DashboardTab-name"
      }, acquirer.name)));
    };
    this.renderAcquirers = (acquirers) => {
      const acquirersWithoutLastTwo = [...acquirers];
      const lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
      return y(k, null, acquirersWithoutLastTwo.map((acquirer) => this.renderAcquirer(acquirer)), y("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, lastTwoAcquirers.map((acquirer) => this.renderAcquirer(acquirer))));
    };
    this.renderSourcesList = (acquirers, disableLocalFiles) => {
      const {
        showNativePhotoCameraButton,
        showNativeVideoCameraButton
      } = this.props;
      let list = [];
      const myDeviceKey = "myDevice";
      if (!disableLocalFiles) {
        list.push({
          key: myDeviceKey,
          elements: this.renderMyDeviceAcquirer()
        });
        if (showNativePhotoCameraButton)
          list.push({
            key: "nativePhotoCameraButton",
            elements: this.renderPhotoCamera()
          });
        if (showNativeVideoCameraButton)
          list.push({
            key: "nativePhotoCameraButton",
            elements: this.renderVideoCamera()
          });
      }
      list.push(...acquirers.map((acquirer) => ({
        key: acquirer.id,
        elements: this.renderAcquirer(acquirer)
      })));
      const hasOnlyMyDevice = list.length === 1 && list[0].key === myDeviceKey;
      if (hasOnlyMyDevice)
        list = [];
      const listWithoutLastTwo = [...list];
      const lastTwo = listWithoutLastTwo.splice(list.length - 2, list.length);
      const renderList = (l4) => l4.map((_ref) => {
        let {
          key,
          elements
        } = _ref;
        return y(k, {
          key
        }, elements);
      });
      return y(k, null, this.renderDropPasteBrowseTagline(list.length), y("div", {
        className: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, renderList(listWithoutLastTwo), y("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, renderList(lastTwo))));
    };
  }
  [_Symbol$for]() {
    this.props.i18nArray("dropPasteBoth");
    this.props.i18nArray("dropPasteFiles");
    this.props.i18nArray("dropPasteFolders");
    this.props.i18nArray("dropPasteImportBoth");
    this.props.i18nArray("dropPasteImportFiles");
    this.props.i18nArray("dropPasteImportFolders");
  }
  renderPoweredByUppy() {
    const {
      i18nArray
    } = this.props;
    const uppyBranding = y("span", null, y("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, y("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      fillRule: "evenodd"
    })), y("span", {
      className: "uppy-Dashboard-poweredByUppy"
    }, "Uppy"));
    const linkText = i18nArray("poweredBy", {
      uppy: uppyBranding
    });
    return y("a", {
      tabIndex: "-1",
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "uppy-Dashboard-poweredBy"
    }, linkText);
  }
  render() {
    const {
      showNativePhotoCameraButton,
      showNativeVideoCameraButton,
      nativeCameraFacingMode
    } = this.props;
    return y("div", {
      className: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenInput(false, (ref) => {
      this.fileInput = ref;
    }), this.renderHiddenInput(true, (ref) => {
      this.folderInput = ref;
    }), showNativePhotoCameraButton && this.renderHiddenCameraInput("photo", nativeCameraFacingMode, (ref) => {
      this.mobilePhotoFileInput = ref;
    }), showNativeVideoCameraButton && this.renderHiddenCameraInput("video", nativeCameraFacingMode, (ref) => {
      this.mobileVideoFileInput = ref;
    }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), y("div", {
      className: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && y("div", {
      className: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
  }
};
var AddFiles_default = AddFiles;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js
var import_classnames4 = __toESM(require_classnames(), 1);
var AddFilesPanel = (props) => {
  return y("div", {
    className: (0, import_classnames4.default)("uppy-Dashboard-AddFilesPanel", props.className),
    "data-uppy-panelType": "AddFiles",
    "aria-hidden": props.showAddFilesPanel
  }, y("div", {
    className: "uppy-DashboardContent-bar"
  }, y("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n("addingMoreFiles")), y("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => props.toggleAddFilesPanel(false)
  }, props.i18n("back"))), y(AddFiles_default, props));
};
var AddFilesPanel_default = AddFilesPanel;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js
var import_classnames5 = __toESM(require_classnames(), 1);

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js
function ignoreEvent(ev) {
  const {
    tagName
  } = ev.target;
  if (tagName === "INPUT" || tagName === "TEXTAREA") {
    ev.stopPropagation();
    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
}
var ignoreEvent_default = ignoreEvent;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js
function PickerPanelContent(_ref) {
  let {
    activePickerPanel,
    className,
    hideAllPanels,
    i18n,
    state,
    uppy: uppy2
  } = _ref;
  return y("div", {
    className: (0, import_classnames5.default)("uppy-DashboardContent-panel", className),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${activePickerPanel.id}`,
    onDragOver: ignoreEvent_default,
    onDragLeave: ignoreEvent_default,
    onDrop: ignoreEvent_default,
    onPaste: ignoreEvent_default
  }, y("div", {
    className: "uppy-DashboardContent-bar"
  }, y("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18n("importFrom", {
    name: activePickerPanel.name
  })), y("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: hideAllPanels
  }, i18n("cancel"))), y("div", {
    className: "uppy-DashboardContent-panelBody"
  }, uppy2.getPlugin(activePickerPanel.id).render(state)));
}
var PickerPanelContent_default = PickerPanelContent;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/EditorPanel.js
var import_classnames6 = __toESM(require_classnames(), 1);
function EditorPanel(props) {
  const file = props.files[props.fileCardFor];
  return y("div", {
    className: (0, import_classnames6.default)("uppy-DashboardContent-panel", props.className),
    role: "tabpanel",
    "data-uppy-panelType": "FileEditor",
    id: "uppy-DashboardContent-panel--editor"
  }, y("div", {
    className: "uppy-DashboardContent-bar"
  }, y("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18nArray("editing", {
    file: y("span", {
      className: "uppy-DashboardContent-titleFile"
    }, file.meta ? file.meta.name : file.name)
  })), y("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: props.hideAllPanels
  }, props.i18n("cancel")), y("button", {
    className: "uppy-DashboardContent-save",
    type: "button",
    onClick: props.saveFileEditor
  }, props.i18n("save"))), y("div", {
    className: "uppy-DashboardContent-panelBody"
  }, props.editors.map((target) => {
    return props.uppy.getPlugin(target.id).render(props.state);
  })));
}
var EditorPanel_default = EditorPanel;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js
var uploadStates = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete",
  STATE_PAUSED: "paused"
};
function getUploadingState2(isAllErrored, isAllComplete, isAllPaused, files) {
  if (files === void 0) {
    files = {};
  }
  if (isAllErrored) {
    return uploadStates.STATE_ERROR;
  }
  if (isAllComplete) {
    return uploadStates.STATE_COMPLETE;
  }
  if (isAllPaused) {
    return uploadStates.STATE_PAUSED;
  }
  let state = uploadStates.STATE_WAITING;
  const fileIDs = Object.keys(files);
  for (let i3 = 0; i3 < fileIDs.length; i3++) {
    const {
      progress
    } = files[fileIDs[i3]];
    if (progress.uploadStarted && !progress.uploadComplete) {
      return uploadStates.STATE_UPLOADING;
    }
    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }
  return state;
}
function UploadStatus(_ref) {
  let {
    files,
    i18n,
    isAllComplete,
    isAllErrored,
    isAllPaused,
    inProgressNotPausedFiles,
    newFiles,
    processingFiles
  } = _ref;
  const uploadingState = getUploadingState2(isAllErrored, isAllComplete, isAllPaused, files);
  switch (uploadingState) {
    case "uploading":
      return i18n("uploadingXFiles", {
        smart_count: inProgressNotPausedFiles.length
      });
    case "preprocessing":
    case "postprocessing":
      return i18n("processingXFiles", {
        smart_count: processingFiles.length
      });
    case "paused":
      return i18n("uploadPaused");
    case "waiting":
      return i18n("xFilesSelected", {
        smart_count: newFiles.length
      });
    case "complete":
      return i18n("uploadComplete");
    case "error":
      return i18n("error");
    default:
  }
}
function PanelTopBar(props) {
  const {
    i18n,
    isAllComplete,
    hideCancelButton,
    maxNumberOfFiles,
    toggleAddFilesPanel,
    uppy: uppy2
  } = props;
  let {
    allowNewUpload
  } = props;
  if (allowNewUpload && maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }
  return y("div", {
    className: "uppy-DashboardContent-bar"
  }, !isAllComplete && !hideCancelButton ? y("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => uppy2.cancelAll()
  }, i18n("cancel")) : y("div", null), y("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, y(UploadStatus, props)), allowNewUpload ? y("button", {
    className: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": i18n("addMoreFiles"),
    title: i18n("addMoreFiles"),
    onClick: () => toggleAddFilesPanel(true)
  }, y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, y("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), y("span", {
    className: "uppy-DashboardContent-addMoreCaption"
  }, i18n("addMore"))) : y("div", null));
}
var PickerPanelTopBar_default = PanelTopBar;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileCard/index.js
var import_classnames7 = __toESM(require_classnames(), 1);

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileCard/RenderMetaFields.js
function RenderMetaFields(props) {
  const {
    computedMetaFields,
    requiredMetaFields,
    updateMeta,
    form,
    formState
  } = props;
  const fieldCSSClasses = {
    text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
  };
  return computedMetaFields.map((field) => {
    const id3 = `uppy-Dashboard-FileCard-input-${field.id}`;
    const required = requiredMetaFields.includes(field.id);
    return y("fieldset", {
      key: field.id,
      className: "uppy-Dashboard-FileCard-fieldset"
    }, y("label", {
      className: "uppy-Dashboard-FileCard-label",
      htmlFor: id3
    }, field.name), field.render !== void 0 ? field.render({
      value: formState[field.id],
      onChange: (newVal) => updateMeta(newVal, field.id),
      fieldCSSClasses,
      required,
      form: form.id
    }, y) : y("input", {
      className: fieldCSSClasses.text,
      id: id3,
      form: form.id,
      type: field.type || "text",
      required,
      value: formState[field.id],
      placeholder: field.placeholder,
      onInput: (ev) => updateMeta(ev.target.value, field.id),
      "data-uppy-super-focusable": true
    }));
  });
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/FileCard/index.js
function FileCard(props) {
  var _getMetaFields;
  const {
    uppy: uppy2,
    files,
    fileCardFor,
    toggleFileCard,
    saveFileCard,
    metaFields: metaFields2,
    requiredMetaFields,
    openFileEditor,
    i18n,
    i18nArray,
    className,
    canEditFile
  } = props;
  const getMetaFields = () => {
    return typeof metaFields2 === "function" ? metaFields2(files[fileCardFor]) : metaFields2;
  };
  const file = files[fileCardFor];
  const computedMetaFields = (_getMetaFields = getMetaFields()) != null ? _getMetaFields : [];
  const showEditButton = canEditFile(file);
  const storedMetaData = {};
  computedMetaFields.forEach((field) => {
    var _file$meta$field$id;
    storedMetaData[field.id] = (_file$meta$field$id = file.meta[field.id]) != null ? _file$meta$field$id : "";
  });
  const [formState, setFormState] = h2(storedMetaData);
  const handleSave = T2((ev) => {
    ev.preventDefault();
    saveFileCard(formState, fileCardFor);
  }, [saveFileCard, formState, fileCardFor]);
  const updateMeta = (newVal, name) => {
    setFormState({
      ...formState,
      [name]: newVal
    });
  };
  const handleCancel = () => {
    uppy2.emit("file-editor:cancel", file);
    toggleFileCard(false);
  };
  const [form] = h2(() => {
    const formEl = document.createElement("form");
    formEl.setAttribute("tabindex", "-1");
    formEl.id = nanoid();
    return formEl;
  });
  p2(() => {
    document.body.appendChild(form);
    form.addEventListener("submit", handleSave);
    return () => {
      form.removeEventListener("submit", handleSave);
      document.body.removeChild(form);
    };
  }, [form, handleSave]);
  return y("div", {
    className: (0, import_classnames7.default)("uppy-Dashboard-FileCard", className),
    "data-uppy-panelType": "FileCard",
    onDragOver: ignoreEvent_default,
    onDragLeave: ignoreEvent_default,
    onDrop: ignoreEvent_default,
    onPaste: ignoreEvent_default
  }, y("div", {
    className: "uppy-DashboardContent-bar"
  }, y("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18nArray("editing", {
    file: y("span", {
      className: "uppy-DashboardContent-titleFile"
    }, file.meta ? file.meta.name : file.name)
  })), y("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    form: form.id,
    title: i18n("finishEditingFile"),
    onClick: handleCancel
  }, i18n("cancel"))), y("div", {
    className: "uppy-Dashboard-FileCard-inner"
  }, y("div", {
    className: "uppy-Dashboard-FileCard-preview",
    style: {
      backgroundColor: getIconByMime(file.type).color
    }
  }, y(FilePreview, {
    file
  }), showEditButton && y("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
    onClick: (event) => {
      handleSave(event);
      openFileEditor(file);
    }
  }, i18n("editFile"))), y("div", {
    className: "uppy-Dashboard-FileCard-info"
  }, y(RenderMetaFields, {
    computedMetaFields,
    requiredMetaFields,
    updateMeta,
    form,
    formState
  })), y("div", {
    className: "uppy-Dashboard-FileCard-actions"
  }, y("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
    type: "submit",
    form: form.id
  }, i18n("saveChanges")), y("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
    type: "button",
    onClick: handleCancel,
    form: form.id
  }, i18n("cancel")))));
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/Slide.js
var import_classnames8 = __toESM(require_classnames(), 1);
var transitionName = "uppy-transition-slideDownUp";
var duration = 250;
var Slide = class extends b {
  constructor(props) {
    super(props);
    this.state = {
      cachedChildren: null,
      className: ""
    };
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate(nextProps) {
    const {
      cachedChildren
    } = this.state;
    const child = S(nextProps.children)[0];
    if (cachedChildren === child)
      return null;
    const patch = {
      cachedChildren: child
    };
    if (child && !cachedChildren) {
      patch.className = `${transitionName}-enter`;
      cancelAnimationFrame(this.animationFrame);
      clearTimeout(this.leaveTimeout);
      this.leaveTimeout = void 0;
      this.animationFrame = requestAnimationFrame(() => {
        this.setState({
          className: `${transitionName}-enter ${transitionName}-enter-active`
        });
        this.enterTimeout = setTimeout(() => {
          this.setState({
            className: ""
          });
        }, duration);
      });
    }
    if (cachedChildren && !child && this.leaveTimeout === void 0) {
      patch.cachedChildren = cachedChildren;
      patch.className = `${transitionName}-leave`;
      cancelAnimationFrame(this.animationFrame);
      clearTimeout(this.enterTimeout);
      this.enterTimeout = void 0;
      this.animationFrame = requestAnimationFrame(() => {
        this.setState({
          className: `${transitionName}-leave ${transitionName}-leave-active`
        });
        this.leaveTimeout = setTimeout(() => {
          this.setState({
            cachedChildren: null,
            className: ""
          });
        }, duration);
      });
    }
    this.setState(patch);
  }
  render() {
    const {
      cachedChildren,
      className
    } = this.state;
    if (!cachedChildren) {
      return null;
    }
    return F(cachedChildren, {
      className: (0, import_classnames8.default)(className, cachedChildren.props.className)
    });
  }
};
var Slide_default = Slide;

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/components/Dashboard.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var WIDTH_XL = 900;
var WIDTH_LG = 700;
var WIDTH_MD = 576;
var HEIGHT_MD = 330;
function Dashboard(props) {
  const isNoFiles = props.totalFileCount === 0;
  const isSingleFile = props.totalFileCount === 1;
  const isSizeMD = props.containerWidth > WIDTH_MD;
  const isSizeHeightMD = props.containerHeight > HEIGHT_MD;
  const dashboardClassName = (0, import_classnames9.default)({
    "uppy-Dashboard": true,
    "uppy-Dashboard--isDisabled": props.disabled,
    "uppy-Dashboard--animateOpenClose": props.animateOpenClose,
    "uppy-Dashboard--isClosing": props.isClosing,
    "uppy-Dashboard--isDraggingOver": props.isDraggingOver,
    "uppy-Dashboard--modal": !props.inline,
    "uppy-size--md": props.containerWidth > WIDTH_MD,
    "uppy-size--lg": props.containerWidth > WIDTH_LG,
    "uppy-size--xl": props.containerWidth > WIDTH_XL,
    "uppy-size--height-md": props.containerHeight > HEIGHT_MD,
    // We might want to enable this in the future
    // 'uppy-size--height-lg': props.containerHeight > HEIGHT_LG,
    // 'uppy-size--height-xl': props.containerHeight > HEIGHT_XL,
    "uppy-Dashboard--isAddFilesPanelVisible": props.showAddFilesPanel,
    "uppy-Dashboard--isInnerWrapVisible": props.areInsidesReadyToBeVisible,
    // Only enable “centered single file” mode when Dashboard is tall enough
    "uppy-Dashboard--singleFile": props.singleFileFullScreen && isSingleFile && isSizeHeightMD
  });
  let itemsPerRow = 1;
  if (props.containerWidth > WIDTH_XL) {
    itemsPerRow = 5;
  } else if (props.containerWidth > WIDTH_LG) {
    itemsPerRow = 4;
  } else if (props.containerWidth > WIDTH_MD) {
    itemsPerRow = 3;
  }
  const showFileList = props.showSelectedFiles && !isNoFiles;
  const numberOfFilesForRecovery = props.recoveredState ? Object.keys(props.recoveredState.files).length : null;
  const numberOfGhosts = props.files ? Object.keys(props.files).filter((fileID) => props.files[fileID].isGhost).length : null;
  const renderRestoredText = () => {
    if (numberOfGhosts > 0) {
      return props.i18n("recoveredXFiles", {
        smart_count: numberOfGhosts
      });
    }
    return props.i18n("recoveredAllFiles");
  };
  const dashboard2 = y("div", {
    className: dashboardClassName,
    "data-uppy-theme": props.theme,
    "data-uppy-num-acquirers": props.acquirers.length,
    "data-uppy-drag-drop-supported": !props.disableLocalFiles && isDragDropSupported(),
    "aria-hidden": props.inline ? "false" : props.isHidden,
    "aria-disabled": props.disabled,
    "aria-label": !props.inline ? props.i18n("dashboardWindowTitle") : props.i18n("dashboardTitle"),
    onPaste: props.handlePaste,
    onDragOver: props.handleDragOver,
    onDragLeave: props.handleDragLeave,
    onDrop: props.handleDrop
  }, y("div", {
    "aria-hidden": "true",
    className: "uppy-Dashboard-overlay",
    tabIndex: -1,
    onClick: props.handleClickOutside
  }), y("div", {
    className: "uppy-Dashboard-inner",
    "aria-modal": !props.inline && "true",
    role: !props.inline && "dialog",
    style: {
      width: props.inline && props.width ? props.width : "",
      height: props.inline && props.height ? props.height : ""
    }
  }, !props.inline ? y("button", {
    className: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": props.i18n("closeModal"),
    title: props.i18n("closeModal"),
    onClick: props.closeModal
  }, y("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, y("div", {
    className: "uppy-Dashboard-innerWrap"
  }, y("div", {
    className: "uppy-Dashboard-dropFilesHereHint"
  }, props.i18n("dropHint")), showFileList && y(PickerPanelTopBar_default, props), numberOfFilesForRecovery && y("div", {
    className: "uppy-Dashboard-serviceMsg"
  }, y("svg", {
    className: "uppy-Dashboard-serviceMsg-icon",
    "aria-hidden": "true",
    focusable: "false",
    width: "21",
    height: "16",
    viewBox: "0 0 24 19"
  }, y("g", {
    transform: "translate(0 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, y("path", {
    d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
    fill: "#FFD300"
  }), y("path", {
    fill: "#000",
    d: "M11 6h2l-.3 8h-1.4z"
  }), y("circle", {
    fill: "#000",
    cx: "12",
    cy: "17",
    r: "1"
  }))), y("strong", {
    className: "uppy-Dashboard-serviceMsg-title"
  }, props.i18n("sessionRestored")), y("div", {
    className: "uppy-Dashboard-serviceMsg-text"
  }, renderRestoredText())), showFileList ? y(FileList_default, {
    id: props.id,
    error: props.error,
    i18n: props.i18n,
    uppy: props.uppy,
    files: props.files,
    acquirers: props.acquirers,
    resumableUploads: props.resumableUploads,
    hideRetryButton: props.hideRetryButton,
    hidePauseResumeButton: props.hidePauseResumeButton,
    hideCancelButton: props.hideCancelButton,
    showLinkToFileUploadResult: props.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: props.showRemoveButtonAfterComplete,
    isWide: props.isWide,
    metaFields: props.metaFields,
    toggleFileCard: props.toggleFileCard,
    handleRequestThumbnail: props.handleRequestThumbnail,
    handleCancelThumbnail: props.handleCancelThumbnail,
    recoveredState: props.recoveredState,
    individualCancellation: props.individualCancellation,
    openFileEditor: props.openFileEditor,
    canEditFile: props.canEditFile,
    toggleAddFilesPanel: props.toggleAddFilesPanel,
    isSingleFile,
    itemsPerRow
  }) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    y(AddFiles_default, _extends2({}, props, {
      isSizeMD
    }))
  ), y(Slide_default, null, props.showAddFilesPanel ? y(AddFilesPanel_default, _extends2({
    key: "AddFiles"
  }, props, {
    isSizeMD
  })) : null), y(Slide_default, null, props.fileCardFor ? y(FileCard, _extends2({
    key: "FileCard"
  }, props)) : null), y(Slide_default, null, props.activePickerPanel ? y(PickerPanelContent_default, _extends2({
    key: "Picker"
  }, props)) : null), y(Slide_default, null, props.showFileEditor ? y(EditorPanel_default, _extends2({
    key: "Editor"
  }, props)) : null), y("div", {
    className: "uppy-Dashboard-progressindicators"
  }, props.progressindicators.map((target) => {
    return props.uppy.getPlugin(target.id).render(props.state);
  })))));
  return dashboard2;
}

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/locale.js
var locale_default3 = {
  strings: {
    // When `inline: false`, used as the screen reader label for the button that closes the modal.
    closeModal: "Close Modal",
    // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
    addMoreFiles: "Add more files",
    addingMoreFiles: "Adding more files",
    // Used as the header for import panels, e.g., “Import from Google Drive”.
    importFrom: "Import from %{name}",
    // When `inline: false`, used as the screen reader label for the dashboard modal.
    dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
    // When `inline: true`, used as the screen reader label for the dashboard area.
    dashboardTitle: "Uppy Dashboard",
    // Shown in the Informer when a link to a file was copied to the clipboard.
    copyLinkToClipboardSuccess: "Link copied to clipboard.",
    // Used when a link cannot be copied automatically — the user has to select the text from the
    // input element below this string.
    copyLinkToClipboardFallback: "Copy the URL below",
    // Used as the hover title and screen reader label for buttons that copy a file link.
    copyLink: "Copy link",
    back: "Back",
    // Used as the screen reader label for buttons that remove a file.
    removeFile: "Remove file",
    // Used as the screen reader label for buttons that open the metadata editor panel for a file.
    editFile: "Edit file",
    // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
    editing: "Editing %{file}",
    // Shown on the main upload screen when an upload error occurs
    error: "Error",
    // Used as the screen reader label for the button that saves metadata edits and returns to the
    // file list view.
    finishEditingFile: "Finish editing file",
    saveChanges: "Save changes",
    // Used as the label for the tab button that opens the system file selection dialog.
    myDevice: "My Device",
    dropHint: "Drop your files here",
    // Used as the hover text and screen reader label for file progress indicators when
    // they have been fully uploaded.
    uploadComplete: "Upload complete",
    uploadPaused: "Upload paused",
    // Used as the hover text and screen reader label for the buttons to resume paused uploads.
    resumeUpload: "Resume upload",
    // Used as the hover text and screen reader label for the buttons to pause uploads.
    pauseUpload: "Pause upload",
    // Used as the hover text and screen reader label for the buttons to retry failed uploads.
    retryUpload: "Retry upload",
    // Used as the hover text and screen reader label for the buttons to cancel uploads.
    cancelUpload: "Cancel upload",
    // Used in a title, how many files are currently selected
    xFilesSelected: {
      0: "%{smart_count} file selected",
      1: "%{smart_count} files selected"
    },
    uploadingXFiles: {
      0: "Uploading %{smart_count} file",
      1: "Uploading %{smart_count} files"
    },
    processingXFiles: {
      0: "Processing %{smart_count} file",
      1: "Processing %{smart_count} files"
    },
    // The "powered by Uppy" link at the bottom of the Dashboard.
    poweredBy: "Powered by %{uppy}",
    addMore: "Add more",
    editFileWithFilename: "Edit file %{file}",
    save: "Save",
    cancel: "Cancel",
    dropPasteFiles: "Drop files here or %{browseFiles}",
    dropPasteFolders: "Drop files here or %{browseFolders}",
    dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
    dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
    dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
    dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
    importFiles: "Import files from:",
    browseFiles: "browse files",
    browseFolders: "browse folders",
    recoveredXFiles: {
      0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
      1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
    },
    recoveredAllFiles: "We restored all files. You can now resume the upload.",
    sessionRestored: "Session restored",
    reSelect: "Re-select",
    missingRequiredMetaFields: {
      0: "Missing required meta field: %{fields}.",
      1: "Missing required meta fields: %{fields}."
    },
    // Used for native device camera buttons on mobile
    takePictureBtn: "Take Picture",
    recordVideoBtn: "Record Video"
  }
};

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/lib/Dashboard.js
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
var packageJson4 = {
  "version": "3.4.1"
};
var memoize = memoizeOne.default || memoizeOne;
var TAB_KEY = 9;
var ESC_KEY = 27;
function createPromise() {
  const o3 = {};
  o3.promise = new Promise((resolve, reject) => {
    o3.resolve = resolve;
    o3.reject = reject;
  });
  return o3;
}
function defaultPickerIcon() {
  return y("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, y("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}
var _disabledNodes = /* @__PURE__ */ _classPrivateFieldLooseKey2("disabledNodes");
var _generateLargeThumbnailIfSingleFile = /* @__PURE__ */ _classPrivateFieldLooseKey2("generateLargeThumbnailIfSingleFile");
var _openFileEditorWhenFilesAdded = /* @__PURE__ */ _classPrivateFieldLooseKey2("openFileEditorWhenFilesAdded");
var _attachRenderFunctionToTarget = /* @__PURE__ */ _classPrivateFieldLooseKey2("attachRenderFunctionToTarget");
var _isTargetSupported = /* @__PURE__ */ _classPrivateFieldLooseKey2("isTargetSupported");
var _getAcquirers = /* @__PURE__ */ _classPrivateFieldLooseKey2("getAcquirers");
var _getProgressIndicators = /* @__PURE__ */ _classPrivateFieldLooseKey2("getProgressIndicators");
var _getEditors = /* @__PURE__ */ _classPrivateFieldLooseKey2("getEditors");
var Dashboard2 = class extends UIPlugin_default {
  constructor(uppy2, _opts) {
    var _this;
    super(uppy2, _opts);
    _this = this;
    Object.defineProperty(this, _disabledNodes, {
      writable: true,
      value: null
    });
    this.removeTarget = (plugin) => {
      const pluginState = this.getPluginState();
      const newTargets = pluginState.targets.filter((target) => target.id !== plugin.id);
      this.setPluginState({
        targets: newTargets
      });
    };
    this.addTarget = (plugin) => {
      const callerPluginId = plugin.id || plugin.constructor.name;
      const callerPluginName = plugin.title || callerPluginId;
      const callerPluginType = plugin.type;
      if (callerPluginType !== "acquirer" && callerPluginType !== "progressindicator" && callerPluginType !== "editor") {
        const msg = "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor";
        this.uppy.log(msg, "error");
        return void 0;
      }
      const target = {
        id: callerPluginId,
        name: callerPluginName,
        type: callerPluginType
      };
      const state = this.getPluginState();
      const newTargets = state.targets.slice();
      newTargets.push(target);
      this.setPluginState({
        targets: newTargets
      });
      return this.el;
    };
    this.hideAllPanels = () => {
      const state = this.getPluginState();
      const update = {
        activePickerPanel: false,
        showAddFilesPanel: false,
        activeOverlayType: null,
        fileCardFor: null,
        showFileEditor: false
      };
      if (state.activePickerPanel === update.activePickerPanel && state.showAddFilesPanel === update.showAddFilesPanel && state.showFileEditor === update.showFileEditor && state.activeOverlayType === update.activeOverlayType) {
        return;
      }
      this.setPluginState(update);
    };
    this.showPanel = (id3) => {
      const {
        targets
      } = this.getPluginState();
      const activePickerPanel = targets.filter((target) => {
        return target.type === "acquirer" && target.id === id3;
      })[0];
      this.setPluginState({
        activePickerPanel,
        activeOverlayType: "PickerPanel"
      });
      this.uppy.emit("dashboard:show-panel", id3);
    };
    this.canEditFile = (file) => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase2(this, _getEditors)[_getEditors](targets);
      return editors.some((target) => this.uppy.getPlugin(target.id).canEditFile(file));
    };
    this.openFileEditor = (file) => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase2(this, _getEditors)[_getEditors](targets);
      this.setPluginState({
        showFileEditor: true,
        fileCardFor: file.id || null,
        activeOverlayType: "FileEditor"
      });
      editors.forEach((editor) => {
        this.uppy.getPlugin(editor.id).selectFile(file);
      });
    };
    this.saveFileEditor = () => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase2(this, _getEditors)[_getEditors](targets);
      editors.forEach((editor) => {
        this.uppy.getPlugin(editor.id).save();
      });
      this.hideAllPanels();
    };
    this.openModal = () => {
      const {
        promise,
        resolve
      } = createPromise();
      this.savedScrollPosition = window.pageYOffset;
      this.savedActiveElement = document.activeElement;
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.add("uppy-Dashboard-isFixed");
      }
      if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
        const handler = () => {
          this.setPluginState({
            isHidden: false
          });
          this.el.removeEventListener("animationend", handler, false);
          resolve();
        };
        this.el.addEventListener("animationend", handler, false);
      } else {
        this.setPluginState({
          isHidden: false
        });
        resolve();
      }
      if (this.opts.browserBackButtonClose) {
        this.updateBrowserHistory();
      }
      document.addEventListener("keydown", this.handleKeyDownInModal);
      this.uppy.emit("dashboard:modal-open");
      return promise;
    };
    this.closeModal = function(opts) {
      if (opts === void 0) {
        opts = {};
      }
      const {
        // Whether the modal is being closed by the user (`true`) or by other means (e.g. browser back button)
        manualClose = true
      } = opts;
      const {
        isHidden,
        isClosing
      } = _this.getPluginState();
      if (isHidden || isClosing) {
        return void 0;
      }
      const {
        promise,
        resolve
      } = createPromise();
      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove("uppy-Dashboard-isFixed");
      }
      if (_this.opts.animateOpenClose) {
        _this.setPluginState({
          isClosing: true
        });
        const handler = () => {
          _this.setPluginState({
            isHidden: true,
            isClosing: false
          });
          _this.superFocus.cancel();
          _this.savedActiveElement.focus();
          _this.el.removeEventListener("animationend", handler, false);
          resolve();
        };
        _this.el.addEventListener("animationend", handler, false);
      } else {
        _this.setPluginState({
          isHidden: true
        });
        _this.superFocus.cancel();
        _this.savedActiveElement.focus();
        resolve();
      }
      document.removeEventListener("keydown", _this.handleKeyDownInModal);
      if (manualClose) {
        if (_this.opts.browserBackButtonClose) {
          var _history$state;
          if ((_history$state = history.state) != null && _history$state[_this.modalName]) {
            history.back();
          }
        }
      }
      _this.uppy.emit("dashboard:modal-closed");
      return promise;
    };
    this.isModalOpen = () => {
      return !this.getPluginState().isHidden || false;
    };
    this.requestCloseModal = () => {
      if (this.opts.onRequestCloseModal) {
        return this.opts.onRequestCloseModal();
      }
      return this.closeModal();
    };
    this.setDarkModeCapability = (isDarkModeOn) => {
      const {
        capabilities
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          darkMode: isDarkModeOn
        }
      });
    };
    this.handleSystemDarkModeChange = (event) => {
      const isDarkModeOnNow = event.matches;
      this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnNow ? "on" : "off"}`);
      this.setDarkModeCapability(isDarkModeOnNow);
    };
    this.toggleFileCard = (show, fileID) => {
      const file = this.uppy.getFile(fileID);
      if (show) {
        this.uppy.emit("dashboard:file-edit-start", file);
      } else {
        this.uppy.emit("dashboard:file-edit-complete", file);
      }
      this.setPluginState({
        fileCardFor: show ? fileID : null,
        activeOverlayType: show ? "FileCard" : null
      });
    };
    this.toggleAddFilesPanel = (show) => {
      this.setPluginState({
        showAddFilesPanel: show,
        activeOverlayType: show ? "AddFiles" : null
      });
    };
    this.addFiles = (files) => {
      const descriptors = files.map((file) => ({
        source: this.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: file.relativePath || file.webkitRelativePath || null
        }
      }));
      try {
        this.uppy.addFiles(descriptors);
      } catch (err) {
        this.uppy.log(err);
      }
    };
    this.startListeningToResize = () => {
      this.resizeObserver = new ResizeObserver((entries) => {
        const uppyDashboardInnerEl = entries[0];
        const {
          width,
          height
        } = uppyDashboardInnerEl.contentRect;
        this.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });
      });
      this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner"));
      this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
        const pluginState = this.getPluginState();
        const isModalAndClosed = !this.opts.inline && pluginState.isHidden;
        if (
          // We might want to enable this in the future
          // if ResizeObserver hasn't yet fired,
          !pluginState.areInsidesReadyToBeVisible && !isModalAndClosed
        ) {
          this.uppy.log("[Dashboard] resize event didn\u2019t fire on time: defaulted to mobile layout", "warning");
          this.setPluginState({
            areInsidesReadyToBeVisible: true
          });
        }
      }, 1e3);
    };
    this.stopListeningToResize = () => {
      this.resizeObserver.disconnect();
      clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
    };
    this.recordIfFocusedOnUppyRecently = (event) => {
      if (this.el.contains(event.target)) {
        this.ifFocusedOnUppyRecently = true;
      } else {
        this.ifFocusedOnUppyRecently = false;
        this.superFocus.cancel();
      }
    };
    this.disableInteractiveElements = (disable) => {
      var _classPrivateFieldLoo;
      const NODES_TO_DISABLE = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'];
      const nodesToDisable = (_classPrivateFieldLoo = _classPrivateFieldLooseBase2(this, _disabledNodes)[_disabledNodes]) != null ? _classPrivateFieldLoo : toArray_default(this.el.querySelectorAll(NODES_TO_DISABLE)).filter((node) => !node.classList.contains("uppy-Dashboard-close"));
      for (const node of nodesToDisable) {
        if (node.tagName === "A") {
          node.setAttribute("aria-disabled", disable);
        } else {
          node.disabled = disable;
        }
      }
      if (disable) {
        _classPrivateFieldLooseBase2(this, _disabledNodes)[_disabledNodes] = nodesToDisable;
      } else {
        _classPrivateFieldLooseBase2(this, _disabledNodes)[_disabledNodes] = null;
      }
      this.dashboardIsDisabled = disable;
    };
    this.updateBrowserHistory = () => {
      var _history$state2;
      if (!((_history$state2 = history.state) != null && _history$state2[this.modalName])) {
        history.pushState({
          // eslint-disable-next-line no-restricted-globals
          ...history.state,
          [this.modalName]: true
        }, "");
      }
      window.addEventListener("popstate", this.handlePopState, false);
    };
    this.handlePopState = (event) => {
      var _event$state;
      if (this.isModalOpen() && (!event.state || !event.state[this.modalName])) {
        this.closeModal({
          manualClose: false
        });
      }
      if (!this.isModalOpen() && (_event$state = event.state) != null && _event$state[this.modalName]) {
        history.back();
      }
    };
    this.handleKeyDownInModal = (event) => {
      if (event.keyCode === ESC_KEY)
        this.requestCloseModal(event);
      if (event.keyCode === TAB_KEY)
        trapFocus(event, this.getPluginState().activeOverlayType, this.el);
    };
    this.handleClickOutside = () => {
      if (this.opts.closeModalOnClickOutside)
        this.requestCloseModal();
    };
    this.handlePaste = (event) => {
      this.uppy.iteratePlugins((plugin) => {
        if (plugin.type === "acquirer") {
          plugin.handleRootPaste == null ? void 0 : plugin.handleRootPaste(event);
        }
      });
      const files = toArray_default(event.clipboardData.files);
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files pasted");
        this.addFiles(files);
      }
    };
    this.handleInputChange = (event) => {
      event.preventDefault();
      const files = toArray_default(event.target.files);
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files selected through input");
        this.addFiles(files);
      }
    };
    this.handleDragOver = (event) => {
      var _this$opts$onDragOver, _this$opts;
      event.preventDefault();
      event.stopPropagation();
      const canSomePluginHandleRootDrop = () => {
        let somePluginCanHandleRootDrop2 = true;
        this.uppy.iteratePlugins((plugin) => {
          if (plugin.canHandleRootDrop != null && plugin.canHandleRootDrop(event)) {
            somePluginCanHandleRootDrop2 = true;
          }
        });
        return somePluginCanHandleRootDrop2;
      };
      const doesEventHaveFiles = () => {
        const {
          types
        } = event.dataTransfer;
        return types.some((type) => type === "Files");
      };
      const somePluginCanHandleRootDrop = canSomePluginHandleRootDrop(event);
      const hasFiles = doesEventHaveFiles(event);
      if (!somePluginCanHandleRootDrop && !hasFiles || this.opts.disabled || this.opts.disableLocalFiles && (hasFiles || !somePluginCanHandleRootDrop) || !this.uppy.getState().allowNewUpload) {
        event.dataTransfer.dropEffect = "none";
        clearTimeout(this.removeDragOverClassTimeout);
        return;
      }
      event.dataTransfer.dropEffect = "copy";
      clearTimeout(this.removeDragOverClassTimeout);
      this.setPluginState({
        isDraggingOver: true
      });
      (_this$opts$onDragOver = (_this$opts = this.opts).onDragOver) == null ? void 0 : _this$opts$onDragOver.call(_this$opts, event);
    };
    this.handleDragLeave = (event) => {
      var _this$opts$onDragLeav, _this$opts2;
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(this.removeDragOverClassTimeout);
      this.removeDragOverClassTimeout = setTimeout(() => {
        this.setPluginState({
          isDraggingOver: false
        });
      }, 50);
      (_this$opts$onDragLeav = (_this$opts2 = this.opts).onDragLeave) == null ? void 0 : _this$opts$onDragLeav.call(_this$opts2, event);
    };
    this.handleDrop = async (event) => {
      var _this$opts$onDrop, _this$opts3;
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(this.removeDragOverClassTimeout);
      this.setPluginState({
        isDraggingOver: false
      });
      this.uppy.iteratePlugins((plugin) => {
        if (plugin.type === "acquirer") {
          plugin.handleRootDrop == null ? void 0 : plugin.handleRootDrop(event);
        }
      });
      let executedDropErrorOnce = false;
      const logDropError = (error) => {
        this.uppy.log(error, "error");
        if (!executedDropErrorOnce) {
          this.uppy.info(error.message, "error");
          executedDropErrorOnce = true;
        }
      };
      this.uppy.log("[Dashboard] Processing dropped files");
      const files = await getDroppedFiles(event.dataTransfer, {
        logDropError
      });
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files dropped");
        this.addFiles(files);
      }
      (_this$opts$onDrop = (_this$opts3 = this.opts).onDrop) == null ? void 0 : _this$opts$onDrop.call(_this$opts3, event);
    };
    this.handleRequestThumbnail = (file) => {
      if (!this.opts.waitForThumbnailsBeforeUpload) {
        this.uppy.emit("thumbnail:request", file);
      }
    };
    this.handleCancelThumbnail = (file) => {
      if (!this.opts.waitForThumbnailsBeforeUpload) {
        this.uppy.emit("thumbnail:cancel", file);
      }
    };
    this.handleKeyDownInInline = (event) => {
      if (event.keyCode === TAB_KEY)
        forInline(event, this.getPluginState().activeOverlayType, this.el);
    };
    this.handlePasteOnBody = (event) => {
      const isFocusInOverlay2 = this.el.contains(document.activeElement);
      if (isFocusInOverlay2) {
        this.handlePaste(event);
      }
    };
    this.handleComplete = (_ref) => {
      let {
        failed
      } = _ref;
      if (this.opts.closeAfterFinish && failed.length === 0) {
        this.requestCloseModal();
      }
    };
    this.handleCancelRestore = () => {
      this.uppy.emit("restore-canceled");
    };
    Object.defineProperty(this, _generateLargeThumbnailIfSingleFile, {
      writable: true,
      value: () => {
        if (this.opts.disableThumbnailGenerator) {
          return;
        }
        const LARGE_THUMBNAIL = 600;
        const files = this.uppy.getFiles();
        if (files.length === 1) {
          const thumbnailGenerator = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
          thumbnailGenerator == null ? void 0 : thumbnailGenerator.setOptions({
            thumbnailWidth: LARGE_THUMBNAIL
          });
          const fileForThumbnail = {
            ...files[0],
            preview: void 0
          };
          thumbnailGenerator.requestThumbnail(fileForThumbnail).then(() => {
            thumbnailGenerator == null ? void 0 : thumbnailGenerator.setOptions({
              thumbnailWidth: this.opts.thumbnailWidth
            });
          });
        }
      }
    });
    Object.defineProperty(this, _openFileEditorWhenFilesAdded, {
      writable: true,
      value: (files) => {
        const firstFile = files[0];
        if (this.canEditFile(firstFile)) {
          this.openFileEditor(firstFile);
        }
      }
    });
    this.initEvents = () => {
      if (this.opts.trigger && !this.opts.inline) {
        const showModalTrigger = findAllDOMElements(this.opts.trigger);
        if (showModalTrigger) {
          showModalTrigger.forEach((trigger) => trigger.addEventListener("click", this.openModal));
        } else {
          this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
        }
      }
      this.startListeningToResize();
      document.addEventListener("paste", this.handlePasteOnBody);
      this.uppy.on("plugin-remove", this.removeTarget);
      this.uppy.on("file-added", this.hideAllPanels);
      this.uppy.on("dashboard:modal-closed", this.hideAllPanels);
      this.uppy.on("file-editor:complete", this.hideAllPanels);
      this.uppy.on("complete", this.handleComplete);
      this.uppy.on("files-added", _classPrivateFieldLooseBase2(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      this.uppy.on("file-removed", _classPrivateFieldLooseBase2(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, true);
      document.addEventListener("click", this.recordIfFocusedOnUppyRecently, true);
      if (this.opts.inline) {
        this.el.addEventListener("keydown", this.handleKeyDownInInline);
      }
      if (this.opts.autoOpenFileEditor) {
        this.uppy.on("files-added", _classPrivateFieldLooseBase2(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
      }
    };
    this.removeEvents = () => {
      const showModalTrigger = findAllDOMElements(this.opts.trigger);
      if (!this.opts.inline && showModalTrigger) {
        showModalTrigger.forEach((trigger) => trigger.removeEventListener("click", this.openModal));
      }
      this.stopListeningToResize();
      document.removeEventListener("paste", this.handlePasteOnBody);
      window.removeEventListener("popstate", this.handlePopState, false);
      this.uppy.off("plugin-remove", this.removeTarget);
      this.uppy.off("file-added", this.hideAllPanels);
      this.uppy.off("dashboard:modal-closed", this.hideAllPanels);
      this.uppy.off("file-editor:complete", this.hideAllPanels);
      this.uppy.off("complete", this.handleComplete);
      this.uppy.off("files-added", _classPrivateFieldLooseBase2(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      this.uppy.off("file-removed", _classPrivateFieldLooseBase2(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently);
      document.removeEventListener("click", this.recordIfFocusedOnUppyRecently);
      if (this.opts.inline) {
        this.el.removeEventListener("keydown", this.handleKeyDownInInline);
      }
      if (this.opts.autoOpenFileEditor) {
        this.uppy.off("files-added", _classPrivateFieldLooseBase2(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
      }
    };
    this.superFocusOnEachUpdate = () => {
      const isFocusInUppy = this.el.contains(document.activeElement);
      const isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
      const isInformerHidden = this.uppy.getState().info.length === 0;
      const isModal = !this.opts.inline;
      if (
        // If update is connected to showing the Informer - let the screen reader calmly read it.
        isInformerHidden && // If we are in a modal - always superfocus without concern for other elements
        // on the page (user is unlikely to want to interact with the rest of the page)
        (isModal || isFocusInUppy || isFocusNowhere && this.ifFocusedOnUppyRecently)
      ) {
        this.superFocus(this.el, this.getPluginState().activeOverlayType);
      } else {
        this.superFocus.cancel();
      }
    };
    this.afterUpdate = () => {
      if (this.opts.disabled && !this.dashboardIsDisabled) {
        this.disableInteractiveElements(true);
        return;
      }
      if (!this.opts.disabled && this.dashboardIsDisabled) {
        this.disableInteractiveElements(false);
      }
      this.superFocusOnEachUpdate();
    };
    this.saveFileCard = (meta, fileID) => {
      this.uppy.setFileMeta(fileID, meta);
      this.toggleFileCard(false, fileID);
    };
    Object.defineProperty(this, _attachRenderFunctionToTarget, {
      writable: true,
      value: (target) => {
        const plugin = this.uppy.getPlugin(target.id);
        return {
          ...target,
          icon: plugin.icon || this.opts.defaultPickerIcon,
          render: plugin.render
        };
      }
    });
    Object.defineProperty(this, _isTargetSupported, {
      writable: true,
      value: (target) => {
        const plugin = this.uppy.getPlugin(target.id);
        if (typeof plugin.isSupported !== "function") {
          return true;
        }
        return plugin.isSupported();
      }
    });
    Object.defineProperty(this, _getAcquirers, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "acquirer" && _classPrivateFieldLooseBase2(this, _isTargetSupported)[_isTargetSupported](target)).map(_classPrivateFieldLooseBase2(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    Object.defineProperty(this, _getProgressIndicators, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "progressindicator").map(_classPrivateFieldLooseBase2(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    Object.defineProperty(this, _getEditors, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "editor").map(_classPrivateFieldLooseBase2(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    this.render = (state) => {
      const pluginState = this.getPluginState();
      const {
        files,
        capabilities,
        allowNewUpload
      } = state;
      const {
        newFiles,
        uploadStartedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted,
        isAllComplete,
        isAllErrored,
        isAllPaused
      } = this.uppy.getObjectOfFilesPerState();
      const acquirers = _classPrivateFieldLooseBase2(this, _getAcquirers)[_getAcquirers](pluginState.targets);
      const progressindicators = _classPrivateFieldLooseBase2(this, _getProgressIndicators)[_getProgressIndicators](pluginState.targets);
      const editors = _classPrivateFieldLooseBase2(this, _getEditors)[_getEditors](pluginState.targets);
      let theme;
      if (this.opts.theme === "auto") {
        theme = capabilities.darkMode ? "dark" : "light";
      } else {
        theme = this.opts.theme;
      }
      if (["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0) {
        this.opts.fileManagerSelectionType = "files";
        console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`);
      }
      return Dashboard({
        state,
        isHidden: pluginState.isHidden,
        files,
        newFiles,
        uploadStartedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted,
        isAllComplete,
        isAllErrored,
        isAllPaused,
        totalFileCount: Object.keys(files).length,
        totalProgress: state.totalProgress,
        allowNewUpload,
        acquirers,
        theme,
        disabled: this.opts.disabled,
        disableLocalFiles: this.opts.disableLocalFiles,
        direction: this.opts.direction,
        activePickerPanel: pluginState.activePickerPanel,
        showFileEditor: pluginState.showFileEditor,
        saveFileEditor: this.saveFileEditor,
        disableInteractiveElements: this.disableInteractiveElements,
        animateOpenClose: this.opts.animateOpenClose,
        isClosing: pluginState.isClosing,
        progressindicators,
        editors,
        autoProceed: this.uppy.opts.autoProceed,
        id: this.id,
        closeModal: this.requestCloseModal,
        handleClickOutside: this.handleClickOutside,
        handleInputChange: this.handleInputChange,
        handlePaste: this.handlePaste,
        inline: this.opts.inline,
        showPanel: this.showPanel,
        hideAllPanels: this.hideAllPanels,
        i18n: this.i18n,
        i18nArray: this.i18nArray,
        uppy: this.uppy,
        note: this.opts.note,
        recoveredState: state.recoveredState,
        metaFields: pluginState.metaFields,
        resumableUploads: capabilities.resumableUploads || false,
        individualCancellation: capabilities.individualCancellation,
        isMobileDevice: capabilities.isMobileDevice,
        fileCardFor: pluginState.fileCardFor,
        toggleFileCard: this.toggleFileCard,
        toggleAddFilesPanel: this.toggleAddFilesPanel,
        showAddFilesPanel: pluginState.showAddFilesPanel,
        saveFileCard: this.saveFileCard,
        openFileEditor: this.openFileEditor,
        canEditFile: this.canEditFile,
        width: this.opts.width,
        height: this.opts.height,
        showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
        fileManagerSelectionType: this.opts.fileManagerSelectionType,
        proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
        hideCancelButton: this.opts.hideCancelButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
        containerWidth: pluginState.containerWidth,
        containerHeight: pluginState.containerHeight,
        areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
        isTargetDOMEl: this.isTargetDOMEl,
        parentElement: this.el,
        allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
        maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
        requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
        showSelectedFiles: this.opts.showSelectedFiles,
        showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
        showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
        nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
        singleFileFullScreen: this.opts.singleFileFullScreen,
        handleCancelRestore: this.handleCancelRestore,
        handleRequestThumbnail: this.handleRequestThumbnail,
        handleCancelThumbnail: this.handleCancelThumbnail,
        // drag props
        isDraggingOver: pluginState.isDraggingOver,
        handleDragOver: this.handleDragOver,
        handleDragLeave: this.handleDragLeave,
        handleDrop: this.handleDrop
      });
    };
    this.discoverProviderPlugins = () => {
      this.uppy.iteratePlugins((plugin) => {
        if (plugin && !plugin.target && plugin.opts && plugin.opts.target === this.constructor) {
          this.addTarget(plugin);
        }
      });
    };
    this.install = () => {
      this.setPluginState({
        isHidden: true,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: false,
        activePickerPanel: false,
        showFileEditor: false,
        metaFields: this.opts.metaFields,
        targets: [],
        // We'll make them visible once .containerWidth is determined
        areInsidesReadyToBeVisible: false,
        isDraggingOver: false
      });
      const {
        inline,
        closeAfterFinish
      } = this.opts;
      if (inline && closeAfterFinish) {
        throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
      }
      const {
        allowMultipleUploads,
        allowMultipleUploadBatches
      } = this.uppy.opts;
      if ((allowMultipleUploads || allowMultipleUploadBatches) && closeAfterFinish) {
        this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
      }
      const {
        target
      } = this.opts;
      if (target) {
        this.mount(target, this);
      }
      const plugins2 = this.opts.plugins || [];
      plugins2.forEach((pluginID) => {
        const plugin = this.uppy.getPlugin(pluginID);
        if (plugin) {
          plugin.mount(this, plugin);
        }
      });
      if (!this.opts.disableStatusBar) {
        this.uppy.use(StatusBar2, {
          id: `${this.id}:StatusBar`,
          target: this,
          hideUploadButton: this.opts.hideUploadButton,
          hideRetryButton: this.opts.hideRetryButton,
          hidePauseResumeButton: this.opts.hidePauseResumeButton,
          hideCancelButton: this.opts.hideCancelButton,
          showProgressDetails: this.opts.showProgressDetails,
          hideAfterFinish: this.opts.hideProgressAfterFinish,
          locale: this.opts.locale,
          doneButtonHandler: this.opts.doneButtonHandler
        });
      }
      if (!this.opts.disableInformer) {
        this.uppy.use(Informer, {
          id: `${this.id}:Informer`,
          target: this
        });
      }
      if (!this.opts.disableThumbnailGenerator) {
        this.uppy.use(ThumbnailGenerator, {
          id: `${this.id}:ThumbnailGenerator`,
          thumbnailWidth: this.opts.thumbnailWidth,
          thumbnailHeight: this.opts.thumbnailHeight,
          thumbnailType: this.opts.thumbnailType,
          waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload,
          // If we don't block on thumbnails, we can lazily generate them
          lazy: !this.opts.waitForThumbnailsBeforeUpload
        });
      }
      this.darkModeMediaQuery = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
      const isDarkModeOnFromTheStart = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : false;
      this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnFromTheStart ? "on" : "off"}`);
      this.setDarkModeCapability(isDarkModeOnFromTheStart);
      if (this.opts.theme === "auto") {
        this.darkModeMediaQuery.addListener(this.handleSystemDarkModeChange);
      }
      this.discoverProviderPlugins();
      this.initEvents();
    };
    this.uninstall = () => {
      if (!this.opts.disableInformer) {
        const informer = this.uppy.getPlugin(`${this.id}:Informer`);
        if (informer)
          this.uppy.removePlugin(informer);
      }
      if (!this.opts.disableStatusBar) {
        const statusBar = this.uppy.getPlugin(`${this.id}:StatusBar`);
        if (statusBar)
          this.uppy.removePlugin(statusBar);
      }
      if (!this.opts.disableThumbnailGenerator) {
        const thumbnail = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
        if (thumbnail)
          this.uppy.removePlugin(thumbnail);
      }
      const plugins2 = this.opts.plugins || [];
      plugins2.forEach((pluginID) => {
        const plugin = this.uppy.getPlugin(pluginID);
        if (plugin)
          plugin.unmount();
      });
      if (this.opts.theme === "auto") {
        this.darkModeMediaQuery.removeListener(this.handleSystemDarkModeChange);
      }
      this.unmount();
      this.removeEvents();
    };
    this.id = this.opts.id || "Dashboard";
    this.title = "Dashboard";
    this.type = "orchestrator";
    this.modalName = `uppy-Dashboard-${nanoid()}`;
    this.defaultLocale = locale_default3;
    const defaultOptions = {
      target: "body",
      metaFields: [],
      trigger: null,
      inline: false,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      thumbnailType: "image/jpeg",
      waitForThumbnailsBeforeUpload: false,
      defaultPickerIcon,
      showLinkToFileUploadResult: false,
      showProgressDetails: false,
      hideUploadButton: false,
      hideCancelButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideProgressAfterFinish: false,
      doneButtonHandler: () => {
        this.uppy.cancelAll();
        this.requestCloseModal();
      },
      note: null,
      closeModalOnClickOutside: false,
      closeAfterFinish: false,
      singleFileFullScreen: true,
      disableStatusBar: false,
      disableInformer: false,
      disableThumbnailGenerator: false,
      disablePageScrollWhenModalOpen: true,
      animateOpenClose: true,
      fileManagerSelectionType: "files",
      proudlyDisplayPoweredByUppy: true,
      onRequestCloseModal: () => this.closeModal(),
      showSelectedFiles: true,
      showRemoveButtonAfterComplete: false,
      browserBackButtonClose: false,
      showNativePhotoCameraButton: false,
      showNativeVideoCameraButton: false,
      theme: "light",
      autoOpenFileEditor: false,
      disabled: false,
      disableLocalFiles: false
    };
    this.opts = {
      ...defaultOptions,
      ..._opts
    };
    this.i18nInit();
    this.superFocus = createSuperFocus();
    this.ifFocusedOnUppyRecently = false;
    this.makeDashboardInsidesVisibleAnywayTimeout = null;
    this.removeDragOverClassTimeout = null;
  }
};
Dashboard2.VERSION = packageJson4.version;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/propTypes.js
var import_prop_types = __toESM(require_prop_types(), 1);
var uppy = import_prop_types.default.instanceOf(Uppy_default);
var plugins = import_prop_types.default.arrayOf(import_prop_types.default.string);
var locale = import_prop_types.default.shape({
  strings: import_prop_types.default.object,
  // eslint-disable-line react/forbid-prop-types
  pluralize: import_prop_types.default.func
});
var metaField = import_prop_types.default.shape({
  id: import_prop_types.default.string.isRequired,
  name: import_prop_types.default.string.isRequired,
  placeholder: import_prop_types.default.string
});
var metaFields = import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(metaField), import_prop_types.default.func]);
var cssSize = import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]);
var dashboard = {
  uppy,
  inline: import_prop_types.default.bool,
  plugins,
  width: cssSize,
  height: cssSize,
  showProgressDetails: import_prop_types.default.bool,
  hideUploadButton: import_prop_types.default.bool,
  hideProgressAfterFinish: import_prop_types.default.bool,
  note: import_prop_types.default.string,
  metaFields,
  proudlyDisplayPoweredByUppy: import_prop_types.default.bool,
  disableStatusBar: import_prop_types.default.bool,
  disableInformer: import_prop_types.default.bool,
  disableThumbnailGenerator: import_prop_types.default.bool,
  // pass-through to ThumbnailGenerator
  thumbnailWidth: import_prop_types.default.number,
  locale
};

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/getHTMLProps.js
var reactSupportedHtmlAttr = [
  // React-specific Attributes
  "defaultChecked",
  "defaultValue",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "dangerouslySetInnerHTML",
  // Standard HTML Attributes
  "accessKey",
  "className",
  "contentEditable",
  "contextMenu",
  "dir",
  "draggable",
  "hidden",
  "id",
  "lang",
  "placeholder",
  "slot",
  "spellCheck",
  "style",
  "tabIndex",
  "title",
  "translate",
  // Unknown
  "radioGroup",
  // WAI-ARIA
  "role",
  // RDFa Attributes
  "about",
  "datatype",
  "inlist",
  "prefix",
  "property",
  "resource",
  "typeof",
  "vocab",
  // Non-standard Attributes
  "autoCapitalize",
  "autoCorrect",
  "autoSave",
  "color",
  "itemProp",
  "itemScope",
  "itemType",
  "itemID",
  "itemRef",
  "results",
  "security",
  "unselectable",
  // Living Standard
  "inputMode",
  "is",
  // Clipboard Events
  "onCopy",
  "onCopyCapture",
  "onCut",
  "onCutCapture",
  "onPaste",
  "onPasteCapture",
  // Composition Events
  "onCompositionEnd",
  "onCompositionEndCapture",
  "onCompositionStart",
  "onCompositionStartCapture",
  "onCompositionUpdate",
  "onCompositionUpdateCapture",
  // Focus Events
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  // Form Events
  "onChange",
  "onChangeCapture",
  "onBeforeInput",
  "onBeforeInputCapture",
  "onInput",
  "onInputCapture",
  "onReset",
  "onResetCapture",
  "onSubmit",
  "onSubmitCapture",
  "onInvalid",
  "onInvalidCapture",
  // Image Events
  "onLoad",
  "onLoadCapture",
  "onError",
  // also a Media Event
  "onErrorCapture",
  // also a Media Event
  // Keyboard Events
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyPressCapture",
  "onKeyUp",
  "onKeyUpCapture",
  // Media Events
  "onAbort",
  "onAbortCapture",
  "onCanPlay",
  "onCanPlayCapture",
  "onCanPlayThrough",
  "onCanPlayThroughCapture",
  "onDurationChange",
  "onDurationChangeCapture",
  "onEmptied",
  "onEmptiedCapture",
  "onEncrypted",
  "onEncryptedCapture",
  "onEnded",
  "onEndedCapture",
  "onLoadedData",
  "onLoadedDataCapture",
  "onLoadedMetadata",
  "onLoadedMetadataCapture",
  "onLoadStart",
  "onLoadStartCapture",
  "onPause",
  "onPauseCapture",
  "onPlay",
  "onPlayCapture",
  "onPlaying",
  "onPlayingCapture",
  "onProgress",
  "onProgressCapture",
  "onRateChange",
  "onRateChangeCapture",
  "onSeeked",
  "onSeekedCapture",
  "onSeeking",
  "onSeekingCapture",
  "onStalled",
  "onStalledCapture",
  "onSuspend",
  "onSuspendCapture",
  "onTimeUpdate",
  "onTimeUpdateCapture",
  "onVolumeChange",
  "onVolumeChangeCapture",
  "onWaiting",
  "onWaitingCapture",
  // MouseEvents
  "onAuxClick",
  "onAuxClickCapture",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onContextMenuCapture",
  "onDoubleClick",
  "onDoubleClickCapture",
  "onDrag",
  "onDragCapture",
  "onDragEnd",
  "onDragEndCapture",
  "onDragEnter",
  "onDragEnterCapture",
  "onDragExit",
  "onDragExitCapture",
  "onDragLeave",
  "onDragLeaveCapture",
  "onDragOver",
  "onDragOverCapture",
  "onDragStart",
  "onDragStartCapture",
  "onDrop",
  "onDropCapture",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseMoveCapture",
  "onMouseOut",
  "onMouseOutCapture",
  "onMouseOver",
  "onMouseOverCapture",
  "onMouseUp",
  "onMouseUpCapture",
  // Selection Events
  "onSelect",
  "onSelectCapture",
  // Touch Events
  "onTouchCancel",
  "onTouchCancelCapture",
  "onTouchEnd",
  "onTouchEndCapture",
  "onTouchMove",
  "onTouchMoveCapture",
  "onTouchStart",
  "onTouchStartCapture",
  // Pointer Events
  "onPointerDown",
  "onPointerDownCapture",
  "onPointerMove",
  "onPointerMoveCapture",
  "onPointerUp",
  "onPointerUpCapture",
  "onPointerCancel",
  "onPointerCancelCapture",
  "onPointerEnter",
  "onPointerEnterCapture",
  "onPointerLeave",
  "onPointerLeaveCapture",
  "onPointerOver",
  "onPointerOverCapture",
  "onPointerOut",
  "onPointerOutCapture",
  "onGotPointerCapture",
  "onGotPointerCaptureCapture",
  "onLostPointerCapture",
  "onLostPointerCaptureCapture",
  // UI Events
  "onScroll",
  "onScrollCapture",
  // Wheel Events
  "onWheel",
  "onWheelCapture",
  // Animation Events
  "onAnimationStart",
  "onAnimationStartCapture",
  "onAnimationEnd",
  "onAnimationEndCapture",
  "onAnimationIteration",
  "onAnimationIterationCapture",
  // Transition Events
  "onTransitionEnd",
  "onTransitionEndCapture"
];
var validHTMLAttribute = /^(aria-|data-)/;
var getHTMLProps = (props) => {
  return Object.fromEntries(Object.entries(props).filter((_ref) => {
    let [key] = _ref;
    return validHTMLAttribute.test(key) || reactSupportedHtmlAttr.includes(key);
  }));
};
var getHTMLProps_default = getHTMLProps;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/nonHtmlPropsHaveChanged.js
function nonHtmlPropsHaveChanged(props, prevProps) {
  return Object.keys(props).some((key) => !Object.hasOwn(props, key) && props[key] !== prevProps[key]);
}

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/Dashboard.js
var Dashboard3 = class extends import_react.Component {
  componentDidMount() {
    this.installPlugin();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    } else if (nonHtmlPropsHaveChanged(this.props, prevProps)) {
      const options = {
        ...this.props,
        target: this.container
      };
      delete options.uppy;
      this.plugin.setOptions(options);
    }
  }
  componentWillUnmount() {
    this.uninstallPlugin();
  }
  installPlugin() {
    const {
      uppy: uppy2
    } = this.props;
    const options = {
      id: "react:Dashboard",
      ...this.props,
      target: this.container
    };
    delete options.uppy;
    uppy2.use(Dashboard2, options);
    this.plugin = uppy2.getPlugin(options.id);
  }
  uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }
    const {
      uppy: uppy2
    } = props;
    uppy2.removePlugin(this.plugin);
  }
  render() {
    return (0, import_react.createElement)("div", {
      className: "uppy-Container",
      ref: (container) => {
        this.container = container;
      },
      ...getHTMLProps_default(this.props)
    });
  }
};
Dashboard3.propTypes = dashboard;
Dashboard3.defaultProps = {
  inline: true
};
var Dashboard_default = Dashboard3;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/DashboardModal.js
var import_react2 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var DashboardModal = class extends import_react2.Component {
  componentDidMount() {
    this.installPlugin();
  }
  componentDidUpdate(prevProps) {
    const {
      uppy: uppy2,
      open,
      onRequestClose
    } = this.props;
    if (prevProps.uppy !== uppy2) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    } else if (nonHtmlPropsHaveChanged(this.props, prevProps)) {
      const options = {
        ...this.props,
        onRequestCloseModal: onRequestClose
      };
      delete options.uppy;
      this.plugin.setOptions(options);
    }
    if (prevProps.open && !open) {
      this.plugin.closeModal();
    } else if (!prevProps.open && open) {
      this.plugin.openModal();
    }
  }
  componentWillUnmount() {
    this.uninstallPlugin();
  }
  installPlugin() {
    const {
      uppy: uppy2,
      target,
      open,
      onRequestClose,
      closeModalOnClickOutside,
      disablePageScrollWhenModalOpen,
      inline,
      plugins: plugins2,
      // eslint-disable-line no-shadow
      width,
      height,
      showProgressDetails,
      note,
      metaFields: metaFields2,
      // eslint-disable-line no-shadow
      proudlyDisplayPoweredByUppy,
      autoOpenFileEditor,
      animateOpenClose,
      browserBackButtonClose,
      closeAfterFinish,
      disableStatusBar,
      disableInformer,
      disableThumbnailGenerator,
      disableLocalFiles,
      disabled,
      hideCancelButton,
      hidePauseResumeButton,
      hideProgressAfterFinish,
      hideRetryButton,
      hideUploadButton,
      showLinkToFileUploadResult,
      showRemoveButtonAfterComplete,
      showSelectedFiles,
      waitForThumbnailsBeforeUpload,
      fileManagerSelectionType,
      theme,
      thumbnailType,
      thumbnailWidth,
      locale: locale2
      // eslint-disable-line no-shadow
    } = this.props;
    const options = {
      id: "react:DashboardModal",
      target,
      closeModalOnClickOutside,
      disablePageScrollWhenModalOpen,
      inline,
      plugins: plugins2,
      width,
      height,
      showProgressDetails,
      note,
      metaFields: metaFields2,
      proudlyDisplayPoweredByUppy,
      autoOpenFileEditor,
      animateOpenClose,
      browserBackButtonClose,
      closeAfterFinish,
      disableStatusBar,
      disableInformer,
      disableThumbnailGenerator,
      disableLocalFiles,
      disabled,
      hideCancelButton,
      hidePauseResumeButton,
      hideProgressAfterFinish,
      hideRetryButton,
      hideUploadButton,
      showLinkToFileUploadResult,
      showRemoveButtonAfterComplete,
      showSelectedFiles,
      waitForThumbnailsBeforeUpload,
      fileManagerSelectionType,
      theme,
      thumbnailType,
      thumbnailWidth,
      locale: locale2,
      onRequestCloseModal: onRequestClose
    };
    if (!options.target) {
      options.target = this.container;
    }
    delete options.uppy;
    uppy2.use(Dashboard2, options);
    this.plugin = uppy2.getPlugin(options.id);
    if (open) {
      this.plugin.openModal();
    }
  }
  uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }
    const {
      uppy: uppy2
    } = props;
    uppy2.removePlugin(this.plugin);
  }
  render() {
    return (0, import_react2.createElement)("div", {
      className: "uppy-Container",
      ref: (container) => {
        this.container = container;
      },
      ...getHTMLProps_default(this.props)
    });
  }
};
DashboardModal.propTypes = {
  uppy: uppy.isRequired,
  target: typeof window !== "undefined" ? import_prop_types2.default.instanceOf(window.HTMLElement) : import_prop_types2.default.any,
  open: import_prop_types2.default.bool,
  onRequestClose: import_prop_types2.default.func,
  closeModalOnClickOutside: import_prop_types2.default.bool,
  disablePageScrollWhenModalOpen: import_prop_types2.default.bool,
  inline: import_prop_types2.default.bool,
  plugins,
  width: cssSize,
  height: cssSize,
  showProgressDetails: import_prop_types2.default.bool,
  note: import_prop_types2.default.string,
  metaFields,
  proudlyDisplayPoweredByUppy: import_prop_types2.default.bool,
  autoOpenFileEditor: import_prop_types2.default.bool,
  animateOpenClose: import_prop_types2.default.bool,
  browserBackButtonClose: import_prop_types2.default.bool,
  closeAfterFinish: import_prop_types2.default.bool,
  disableStatusBar: import_prop_types2.default.bool,
  disableInformer: import_prop_types2.default.bool,
  disableThumbnailGenerator: import_prop_types2.default.bool,
  disableLocalFiles: import_prop_types2.default.bool,
  disabled: import_prop_types2.default.bool,
  hideCancelButton: import_prop_types2.default.bool,
  hidePauseResumeButton: import_prop_types2.default.bool,
  hideProgressAfterFinish: import_prop_types2.default.bool,
  hideRetryButton: import_prop_types2.default.bool,
  hideUploadButton: import_prop_types2.default.bool,
  showLinkToFileUploadResult: import_prop_types2.default.bool,
  showRemoveButtonAfterComplete: import_prop_types2.default.bool,
  showSelectedFiles: import_prop_types2.default.bool,
  waitForThumbnailsBeforeUpload: import_prop_types2.default.bool,
  fileManagerSelectionType: import_prop_types2.default.string,
  theme: import_prop_types2.default.string,
  // pass-through to ThumbnailGenerator
  thumbnailType: import_prop_types2.default.string,
  thumbnailWidth: import_prop_types2.default.number,
  locale
};
DashboardModal.defaultProps = {
  metaFields: [],
  plugins: [],
  inline: false,
  width: 750,
  height: 550,
  thumbnailWidth: 280,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: false,
  showLinkToFileUploadResult: false,
  showProgressDetails: false,
  hideUploadButton: false,
  hideCancelButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideProgressAfterFinish: false,
  note: null,
  closeModalOnClickOutside: false,
  closeAfterFinish: false,
  disableStatusBar: false,
  disableInformer: false,
  disableThumbnailGenerator: false,
  disablePageScrollWhenModalOpen: true,
  animateOpenClose: true,
  fileManagerSelectionType: "files",
  proudlyDisplayPoweredByUppy: true,
  showSelectedFiles: true,
  showRemoveButtonAfterComplete: false,
  browserBackButtonClose: false,
  theme: "light",
  autoOpenFileEditor: false,
  disabled: false,
  disableLocalFiles: false,
  // extra
  open: void 0,
  target: void 0,
  locale: null,
  onRequestClose: void 0
};
var DashboardModal_default = DashboardModal;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/DragDrop.js
var import_react3 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@uppy+drag-drop@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/drag-drop/lib/locale.js
var locale_default4 = {
  strings: {
    // Text to show on the droppable area.
    // `%{browse}` is replaced with a link that opens the system file selection dialog.
    dropHereOr: "Drop here or %{browse}",
    // Used as the label for the link that opens the system file selection dialog.
    browse: "browse"
  }
};

// node_modules/.pnpm/@uppy+drag-drop@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/drag-drop/lib/DragDrop.js
var packageJson5 = {
  "version": "3.0.2"
};
var DragDrop = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    this.handleDrop = async (event) => {
      var _this$opts$onDrop, _this$opts;
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(this.removeDragOverClassTimeout);
      this.setPluginState({
        isDraggingOver: false
      });
      const logDropError = (error) => {
        this.uppy.log(error, "error");
      };
      const files = await getDroppedFiles(event.dataTransfer, {
        logDropError
      });
      if (files.length > 0) {
        this.uppy.log("[DragDrop] Files dropped");
        this.addFiles(files);
      }
      (_this$opts$onDrop = (_this$opts = this.opts).onDrop) == null ? void 0 : _this$opts$onDrop.call(_this$opts, event);
    };
    this.type = "acquirer";
    this.id = this.opts.id || "DragDrop";
    this.title = "Drag & Drop";
    this.defaultLocale = locale_default4;
    const defaultOpts = {
      target: null,
      inputName: "files[]",
      width: "100%",
      height: "100%",
      note: null
    };
    this.opts = {
      ...defaultOpts,
      ...opts
    };
    this.i18nInit();
    this.isDragDropSupported = isDragDropSupported();
    this.removeDragOverClassTimeout = null;
    this.onInputChange = this.onInputChange.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.addFiles = this.addFiles.bind(this);
    this.render = this.render.bind(this);
  }
  addFiles(files) {
    const descriptors = files.map((file) => ({
      source: this.id,
      name: file.name,
      type: file.type,
      data: file,
      meta: {
        // path of the file relative to the ancestor directory the user selected.
        // e.g. 'docs/Old Prague/airbnb.pdf'
        relativePath: file.relativePath || null
      }
    }));
    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
  }
  onInputChange(event) {
    const files = toArray_default(event.target.files);
    if (files.length > 0) {
      this.uppy.log("[DragDrop] Files selected through input");
      this.addFiles(files);
    }
    event.target.value = null;
  }
  handleDragOver(event) {
    var _this$opts$onDragOver, _this$opts2;
    event.preventDefault();
    event.stopPropagation();
    const {
      types
    } = event.dataTransfer;
    const hasFiles = types.some((type) => type === "Files");
    const {
      allowNewUpload
    } = this.uppy.getState();
    if (!hasFiles || !allowNewUpload) {
      event.dataTransfer.dropEffect = "none";
      clearTimeout(this.removeDragOverClassTimeout);
      return;
    }
    event.dataTransfer.dropEffect = "copy";
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
    (_this$opts$onDragOver = (_this$opts2 = this.opts).onDragOver) == null ? void 0 : _this$opts$onDragOver.call(_this$opts2, event);
  }
  handleDragLeave(event) {
    var _this$opts$onDragLeav, _this$opts3;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(() => {
      this.setPluginState({
        isDraggingOver: false
      });
    }, 50);
    (_this$opts$onDragLeav = (_this$opts3 = this.opts).onDragLeave) == null ? void 0 : _this$opts$onDragLeav.call(_this$opts3, event);
  }
  renderHiddenFileInput() {
    const {
      restrictions
    } = this.uppy.opts;
    return y("input", {
      className: "uppy-DragDrop-input",
      type: "file",
      hidden: true,
      ref: (ref) => {
        this.fileInputRef = ref;
      },
      name: this.opts.inputName,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept: restrictions.allowedFileTypes,
      onChange: this.onInputChange
    });
  }
  static renderArrowSvg() {
    return y("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-DragDrop-arrow",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, y("path", {
      d: "M11 10V0H5v10H2l6 6 6-6h-3zm0 0",
      fillRule: "evenodd"
    }));
  }
  renderLabel() {
    return y("div", {
      className: "uppy-DragDrop-label"
    }, this.i18nArray("dropHereOr", {
      browse: y("span", {
        className: "uppy-DragDrop-browse"
      }, this.i18n("browse"))
    }));
  }
  renderNote() {
    return y("span", {
      className: "uppy-DragDrop-note"
    }, this.opts.note);
  }
  render() {
    const dragDropClass = `uppy-u-reset
      uppy-DragDrop-container
      ${this.isDragDropSupported ? "uppy-DragDrop--isDragDropSupported" : ""}
      ${this.getPluginState().isDraggingOver ? "uppy-DragDrop--isDraggingOver" : ""}
    `;
    const dragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
    return y("button", {
      type: "button",
      className: dragDropClass,
      style: dragDropStyle,
      onClick: () => this.fileInputRef.click(),
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop
    }, this.renderHiddenFileInput(), y("div", {
      className: "uppy-DragDrop-inner"
    }, DragDrop.renderArrowSvg(), this.renderLabel(), this.renderNote()));
  }
  install() {
    const {
      target
    } = this.opts;
    this.setPluginState({
      isDraggingOver: false
    });
    if (target) {
      this.mount(target, this);
    }
  }
  uninstall() {
    this.unmount();
  }
};
DragDrop.VERSION = packageJson5.version;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/DragDrop.js
var DragDrop2 = class extends import_react3.Component {
  componentDidMount() {
    this.installPlugin();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    } else if (nonHtmlPropsHaveChanged(this.props, prevProps)) {
      const options = {
        ...this.props,
        target: this.container
      };
      delete options.uppy;
      this.plugin.setOptions(options);
    }
  }
  componentWillUnmount() {
    this.uninstallPlugin();
  }
  installPlugin() {
    const {
      uppy: uppy2,
      locale: locale2,
      inputName,
      width,
      height,
      note
    } = this.props;
    const options = {
      id: "react:DragDrop",
      locale: locale2,
      inputName,
      width,
      height,
      note,
      target: this.container
    };
    delete options.uppy;
    uppy2.use(DragDrop, options);
    this.plugin = uppy2.getPlugin(options.id);
  }
  uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }
    const {
      uppy: uppy2
    } = props;
    uppy2.removePlugin(this.plugin);
  }
  render() {
    return (0, import_react3.createElement)("div", {
      className: "uppy-Container",
      ref: (container) => {
        this.container = container;
      },
      ...getHTMLProps_default(this.props)
    });
  }
};
DragDrop2.propTypes = {
  uppy: uppy.isRequired,
  locale,
  inputName: import_prop_types3.default.string,
  width: import_prop_types3.default.string,
  height: import_prop_types3.default.string,
  note: import_prop_types3.default.string
};
DragDrop2.defaultProps = {
  locale: null,
  inputName: "files[]",
  width: "100%",
  height: "100%",
  note: null
};
var DragDrop_default = DragDrop2;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/ProgressBar.js
var import_react4 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@uppy+progress-bar@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/progress-bar/lib/ProgressBar.js
var packageJson6 = {
  "version": "3.0.2"
};
var ProgressBar = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    this.id = this.opts.id || "ProgressBar";
    this.title = "Progress Bar";
    this.type = "progressindicator";
    const defaultOptions = {
      target: "body",
      fixed: false,
      hideAfterFinish: true
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.render = this.render.bind(this);
  }
  render(state) {
    const progress = state.totalProgress || 0;
    const isHidden = (progress === 0 || progress === 100) && this.opts.hideAfterFinish;
    return y("div", {
      className: "uppy uppy-ProgressBar",
      style: {
        position: this.opts.fixed ? "fixed" : "initial"
      },
      "aria-hidden": isHidden
    }, y("div", {
      className: "uppy-ProgressBar-inner",
      style: {
        width: `${progress}%`
      }
    }), y("div", {
      className: "uppy-ProgressBar-percentage"
    }, progress));
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
  uninstall() {
    this.unmount();
  }
};
ProgressBar.VERSION = packageJson6.version;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/ProgressBar.js
var ProgressBar2 = class extends import_react4.Component {
  componentDidMount() {
    this.installPlugin();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    } else if (nonHtmlPropsHaveChanged(this.props, prevProps)) {
      const options = {
        ...this.props,
        target: this.container
      };
      delete options.uppy;
      this.plugin.setOptions(options);
    }
  }
  componentWillUnmount() {
    this.uninstallPlugin();
  }
  installPlugin() {
    const {
      uppy: uppy2,
      fixed,
      hideAfterFinish
    } = this.props;
    const options = {
      id: "react:ProgressBar",
      fixed,
      hideAfterFinish,
      target: this.container
    };
    delete options.uppy;
    uppy2.use(ProgressBar, options);
    this.plugin = uppy2.getPlugin(options.id);
  }
  uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }
    const {
      uppy: uppy2
    } = props;
    uppy2.removePlugin(this.plugin);
  }
  render() {
    return (0, import_react4.createElement)("div", {
      className: "uppy-Container",
      ref: (container) => {
        this.container = container;
      },
      ...getHTMLProps_default(this.props)
    });
  }
};
ProgressBar2.propTypes = {
  uppy: uppy.isRequired,
  fixed: import_prop_types4.default.bool,
  hideAfterFinish: import_prop_types4.default.bool
};
ProgressBar2.defaultProps = {
  fixed: false,
  hideAfterFinish: true
};
var ProgressBar_default = ProgressBar2;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/StatusBar.js
var import_react5 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);
var StatusBar3 = class extends import_react5.Component {
  componentDidMount() {
    this.installPlugin();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    } else if (nonHtmlPropsHaveChanged(this.props, prevProps)) {
      const options = {
        ...this.props,
        target: this.container
      };
      delete options.uppy;
      this.plugin.setOptions(options);
    }
  }
  componentWillUnmount() {
    this.uninstallPlugin();
  }
  installPlugin() {
    const {
      uppy: uppy2,
      hideUploadButton,
      hideRetryButton,
      hidePauseResumeButton,
      hideCancelButton,
      showProgressDetails,
      hideAfterFinish,
      doneButtonHandler
    } = this.props;
    const options = {
      id: "react:StatusBar",
      hideUploadButton,
      hideRetryButton,
      hidePauseResumeButton,
      hideCancelButton,
      showProgressDetails,
      hideAfterFinish,
      doneButtonHandler,
      target: this.container
    };
    delete options.uppy;
    uppy2.use(StatusBar2, options);
    this.plugin = uppy2.getPlugin(options.id);
  }
  uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }
    const {
      uppy: uppy2
    } = props;
    uppy2.removePlugin(this.plugin);
  }
  render() {
    return (0, import_react5.createElement)("div", {
      className: "uppy-Container",
      ref: (container) => {
        this.container = container;
      },
      ...getHTMLProps_default(this.props)
    });
  }
};
StatusBar3.propTypes = {
  uppy: uppy.isRequired,
  hideUploadButton: import_prop_types5.default.bool,
  hideRetryButton: import_prop_types5.default.bool,
  hidePauseResumeButton: import_prop_types5.default.bool,
  hideCancelButton: import_prop_types5.default.bool,
  showProgressDetails: import_prop_types5.default.bool,
  hideAfterFinish: import_prop_types5.default.bool,
  doneButtonHandler: import_prop_types5.default.func
};
StatusBar3.defaultProps = {
  hideUploadButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideCancelButton: false,
  showProgressDetails: false,
  hideAfterFinish: true,
  doneButtonHandler: null
};
var StatusBar_default = StatusBar3;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/FileInput.js
var import_react6 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@uppy+file-input@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/file-input/lib/locale.js
var locale_default5 = {
  strings: {
    chooseFiles: "Choose files"
  }
};

// node_modules/.pnpm/@uppy+file-input@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/file-input/lib/FileInput.js
var packageJson7 = {
  "version": "3.0.2"
};
var FileInput = class extends UIPlugin_default {
  constructor(uppy2, opts) {
    super(uppy2, opts);
    this.id = this.opts.id || "FileInput";
    this.title = "File Input";
    this.type = "acquirer";
    this.defaultLocale = locale_default5;
    const defaultOptions = {
      target: null,
      pretty: true,
      inputName: "files[]"
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.render = this.render.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  addFiles(files) {
    const descriptors = files.map((file) => ({
      source: this.id,
      name: file.name,
      type: file.type,
      data: file
    }));
    try {
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
  }
  handleInputChange(event) {
    this.uppy.log("[FileInput] Something selected through input...");
    const files = toArray_default(event.target.files);
    this.addFiles(files);
    event.target.value = null;
  }
  handleClick() {
    this.input.click();
  }
  render() {
    const hiddenInputStyle = {
      width: "0.1px",
      height: "0.1px",
      opacity: 0,
      overflow: "hidden",
      position: "absolute",
      zIndex: -1
    };
    const {
      restrictions
    } = this.uppy.opts;
    const accept = restrictions.allowedFileTypes ? restrictions.allowedFileTypes.join(",") : null;
    return y("div", {
      className: "uppy-FileInput-container"
    }, y("input", {
      className: "uppy-FileInput-input",
      style: this.opts.pretty && hiddenInputStyle,
      type: "file",
      name: this.opts.inputName,
      onChange: this.handleInputChange,
      multiple: restrictions.maxNumberOfFiles !== 1,
      accept,
      ref: (input) => {
        this.input = input;
      }
    }), this.opts.pretty && y("button", {
      className: "uppy-FileInput-btn",
      type: "button",
      onClick: this.handleClick
    }, this.i18n("chooseFiles")));
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
  uninstall() {
    this.unmount();
  }
};
FileInput.VERSION = packageJson7.version;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/FileInput.js
var FileInput2 = class extends import_react6.Component {
  componentDidMount() {
    this.installPlugin();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
  }
  componentWillUnmount() {
    this.uninstallPlugin();
  }
  installPlugin() {
    const {
      uppy: uppy2,
      locale: locale2,
      pretty,
      inputName
    } = this.props;
    const options = {
      id: "react:FileInput",
      locale: locale2,
      pretty,
      inputName,
      target: this.container
    };
    delete options.uppy;
    uppy2.use(FileInput, options);
    this.plugin = uppy2.getPlugin(options.id);
  }
  uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }
    const {
      uppy: uppy2
    } = props;
    uppy2.removePlugin(this.plugin);
  }
  render() {
    return (0, import_react6.createElement)("div", {
      className: "uppy-Container",
      ref: (container) => {
        this.container = container;
      }
    });
  }
};
FileInput2.propTypes = {
  uppy: uppy.isRequired,
  locale,
  pretty: import_prop_types6.default.bool,
  inputName: import_prop_types6.default.string
};
FileInput2.defaultProps = {
  locale: void 0,
  pretty: true,
  inputName: "files[]"
};
var FileInput_default = FileInput2;

// node_modules/.pnpm/@uppy+react@3.1.2_@uppy+core@3.3.0_@uppy+dashboard@3.4.1_@uppy+drag-drop@3.0.2_@uppy+file-inp_axqx3dogoxsw7qy3gijl3nj3u4/node_modules/@uppy/react/lib/useUppy.js
var import_react7 = __toESM(require_react(), 1);
function useUppy(factory) {
  if (typeof factory !== "function") {
    throw new TypeError("useUppy: expected a function that returns a new Uppy instance");
  }
  const uppy2 = (0, import_react7.useRef)(void 0);
  if (uppy2.current === void 0) {
    uppy2.current = factory();
    if (!(uppy2.current instanceof Uppy_default)) {
      throw new TypeError(`useUppy: factory function must return an Uppy instance, got ${typeof uppy2.current}`);
    }
  }
  (0, import_react7.useEffect)(() => {
    return () => {
      var _uppy$current;
      (_uppy$current = uppy2.current) == null ? void 0 : _uppy$current.close({
        reason: "unmount"
      });
      uppy2.current = void 0;
    };
  }, [uppy2]);
  return uppy2.current;
}
export {
  Dashboard_default as Dashboard,
  DashboardModal_default as DashboardModal,
  DragDrop_default as DragDrop,
  FileInput_default as FileInput,
  ProgressBar_default as ProgressBar,
  StatusBar_default as StatusBar,
  useUppy
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/lib-BOZRWUB2.js.map
