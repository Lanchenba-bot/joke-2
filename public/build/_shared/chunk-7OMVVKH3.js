import {
  BasePlugin,
  Translator,
  require_namespace_emitter,
  require_throttle
} from "/build/_shared/chunk-IS66ZX3I.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/.pnpm/@transloadit+prettier-bytes@0.0.9/node_modules/@transloadit/prettier-bytes/prettierBytes.js
var require_prettierBytes = __commonJS({
  "node_modules/.pnpm/@transloadit+prettier-bytes@0.0.9/node_modules/@transloadit/prettier-bytes/prettierBytes.js"(exports, module) {
    module.exports = function prettierBytes2(num) {
      if (typeof num !== "number" || isNaN(num)) {
        throw new TypeError(`Expected a number, got ${typeof num}`);
      }
      const neg = num < 0;
      const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (neg) {
        num = -num;
      }
      if (num < 1) {
        return `${(neg ? "-" : "") + num} B`;
      }
      const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      num = Number(num / Math.pow(1024, exponent));
      const unit = units[exponent];
      if (num >= 10 || num % 1 === 0) {
        return `${(neg ? "-" : "") + num.toFixed(0)} ${unit}`;
      }
      return `${(neg ? "-" : "") + num.toFixed(1)} ${unit}`;
    };
  }
});

// node_modules/.pnpm/wildcard@1.1.2/node_modules/wildcard/index.js
var require_wildcard = __commonJS({
  "node_modules/.pnpm/wildcard@1.1.2/node_modules/wildcard/index.js"(exports, module) {
    "use strict";
    function WildcardMatcher(text, separator) {
      this.text = text = text || "";
      this.hasWild = ~text.indexOf("*");
      this.separator = separator;
      this.parts = text.split(separator);
    }
    WildcardMatcher.prototype.match = function(input) {
      var matches = true;
      var parts = this.parts;
      var ii;
      var partsCount = parts.length;
      var testParts;
      if (typeof input == "string" || input instanceof String) {
        if (!this.hasWild && this.text != input) {
          matches = false;
        } else {
          testParts = (input || "").split(this.separator);
          for (ii = 0; matches && ii < partsCount; ii++) {
            if (parts[ii] === "*") {
              continue;
            } else if (ii < testParts.length) {
              matches = parts[ii] === testParts[ii];
            } else {
              matches = false;
            }
          }
          matches = matches && testParts;
        }
      } else if (typeof input.splice == "function") {
        matches = [];
        for (ii = input.length; ii--; ) {
          if (this.match(input[ii])) {
            matches[matches.length] = input[ii];
          }
        }
      } else if (typeof input == "object") {
        matches = {};
        for (var key in input) {
          if (this.match(key)) {
            matches[key] = input[key];
          }
        }
      }
      return matches;
    };
    module.exports = function(text, test, separator) {
      var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
      if (typeof test != "undefined") {
        return matcher.match(test);
      }
      return matcher;
    };
  }
});

// node_modules/.pnpm/mime-match@1.0.2/node_modules/mime-match/index.js
var require_mime_match = __commonJS({
  "node_modules/.pnpm/mime-match@1.0.2/node_modules/mime-match/index.js"(exports, module) {
    var wildcard = require_wildcard();
    var reMimePartSplit = /[\/\+\.]/;
    module.exports = function(target, pattern) {
      function test(pattern2) {
        var result = wildcard(pattern2, target, reMimePartSplit);
        return result && result.length >= 2;
      }
      return pattern ? test(pattern.split(";")[0]) : test;
    };
  }
});

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/Uppy.js
var import_namespace_emitter = __toESM(require_namespace_emitter(), 1);

// node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/non-secure/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var nanoid = (size = 21) => {
  let id4 = "";
  let i2 = size;
  while (i2--) {
    id4 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id4;
};

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/Uppy.js
var import_throttle = __toESM(require_throttle(), 1);

// node_modules/.pnpm/@uppy+store-default@3.0.3/node_modules/@uppy/store-default/lib/index.js
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
  "version": "3.0.3"
};
var _callbacks = /* @__PURE__ */ _classPrivateFieldLooseKey("callbacks");
var _publish = /* @__PURE__ */ _classPrivateFieldLooseKey("publish");
var DefaultStore = class {
  constructor() {
    Object.defineProperty(this, _publish, {
      value: _publish2
    });
    Object.defineProperty(this, _callbacks, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    this.state = {};
  }
  getState() {
    return this.state;
  }
  setState(patch) {
    const prevState = {
      ...this.state
    };
    const nextState = {
      ...this.state,
      ...patch
    };
    this.state = nextState;
    _classPrivateFieldLooseBase(this, _publish)[_publish](prevState, nextState, patch);
  }
  subscribe(listener) {
    _classPrivateFieldLooseBase(this, _callbacks)[_callbacks].add(listener);
    return () => {
      _classPrivateFieldLooseBase(this, _callbacks)[_callbacks].delete(listener);
    };
  }
};
function _publish2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  _classPrivateFieldLooseBase(this, _callbacks)[_callbacks].forEach((listener) => {
    listener(...args);
  });
}
DefaultStore.VERSION = packageJson.version;
var lib_default = DefaultStore;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getFileNameAndExtension.js
function getFileNameAndExtension(fullFileName) {
  const lastDot = fullFileName.lastIndexOf(".");
  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
    return {
      name: fullFileName,
      extension: void 0
    };
  }
  return {
    name: fullFileName.slice(0, lastDot),
    extension: fullFileName.slice(lastDot + 1)
  };
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/mimeTypes.js
var mimeTypes_default = {
  md: "text/markdown",
  markdown: "text/markdown",
  mp4: "video/mp4",
  mp3: "audio/mp3",
  svg: "image/svg+xml",
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  heic: "image/heic",
  heif: "image/heif",
  yaml: "text/yaml",
  yml: "text/yaml",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  tab: "text/tab-separated-values",
  avi: "video/x-msvideo",
  mks: "video/x-matroska",
  mkv: "video/x-matroska",
  mov: "video/quicktime",
  dicom: "application/dicom",
  doc: "application/msword",
  docm: "application/vnd.ms-word.document.macroenabled.12",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dot: "application/msword",
  dotm: "application/vnd.ms-word.template.macroenabled.12",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  xla: "application/vnd.ms-excel",
  xlam: "application/vnd.ms-excel.addin.macroenabled.12",
  xlc: "application/vnd.ms-excel",
  xlf: "application/x-xliff+xml",
  xlm: "application/vnd.ms-excel",
  xls: "application/vnd.ms-excel",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xlt: "application/vnd.ms-excel",
  xltm: "application/vnd.ms-excel.template.macroenabled.12",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xlw: "application/vnd.ms-excel",
  txt: "text/plain",
  text: "text/plain",
  conf: "text/plain",
  log: "text/plain",
  pdf: "application/pdf",
  zip: "application/zip",
  "7z": "application/x-7z-compressed",
  rar: "application/x-rar-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  dmg: "application/x-apple-diskimage"
};

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getFileType.js
function getFileType(file) {
  var _getFileNameAndExtens;
  if (file.type)
    return file.type;
  const fileExtension = file.name ? (_getFileNameAndExtens = getFileNameAndExtension(file.name).extension) == null ? void 0 : _getFileNameAndExtens.toLowerCase() : null;
  if (fileExtension && fileExtension in mimeTypes_default) {
    return mimeTypes_default[fileExtension];
  }
  return "application/octet-stream";
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/generateFileID.js
function encodeCharacter(character) {
  return character.charCodeAt(0).toString(32);
}
function encodeFilename(name) {
  let suffix = "";
  return name.replace(/[^A-Z0-9]/ig, (character) => {
    suffix += `-${encodeCharacter(character)}`;
    return "/";
  }) + suffix;
}
function generateFileID(file) {
  let id4 = "uppy";
  if (typeof file.name === "string") {
    id4 += `-${encodeFilename(file.name.toLowerCase())}`;
  }
  if (file.type !== void 0) {
    id4 += `-${file.type}`;
  }
  if (file.meta && typeof file.meta.relativePath === "string") {
    id4 += `-${encodeFilename(file.meta.relativePath.toLowerCase())}`;
  }
  if (file.data.size !== void 0) {
    id4 += `-${file.data.size}`;
  }
  if (file.data.lastModified !== void 0) {
    id4 += `-${file.data.lastModified}`;
  }
  return id4;
}
function hasFileStableId(file) {
  if (!file.isRemote || !file.remote)
    return false;
  const stableIdProviders = /* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"]);
  return stableIdProviders.has(file.remote.provider);
}
function getSafeFileId(file) {
  if (hasFileStableId(file))
    return file.id;
  const fileType = getFileType(file);
  return generateFileID({
    ...file,
    type: fileType
  });
}

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/supportsUploadProgress.js
function supportsUploadProgress(userAgent) {
  if (userAgent == null && typeof navigator !== "undefined") {
    userAgent = navigator.userAgent;
  }
  if (!userAgent)
    return true;
  const m2 = /Edge\/(\d+\.\d+)/.exec(userAgent);
  if (!m2)
    return true;
  const edgeVersion = m2[1];
  let [major, minor] = edgeVersion.split(".");
  major = parseInt(major, 10);
  minor = parseInt(minor, 10);
  if (major < 15 || major === 15 && minor < 15063) {
    return true;
  }
  if (major > 18 || major === 18 && minor >= 18218) {
    return true;
  }
  return false;
}

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/getFileName.js
function getFileName(fileType, fileDescriptor) {
  if (fileDescriptor.name) {
    return fileDescriptor.name;
  }
  if (fileType.split("/")[0] === "image") {
    return `${fileType.split("/")[0]}.${fileType.split("/")[1]}`;
  }
  return "noname";
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getTimeStamp.js
function pad(number) {
  return number < 10 ? `0${number}` : number.toString();
}
function getTimeStamp() {
  const date = /* @__PURE__ */ new Date();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/loggers.js
var justErrorsLogger = {
  debug: () => {
  },
  warn: () => {
  },
  error: function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
  }
};
var debugLogger = {
  debug: function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return console.debug(`[Uppy] [${getTimeStamp()}]`, ...args);
  },
  warn: function() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
  },
  error: function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
  }
};

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/Restricter.js
var import_prettier_bytes = __toESM(require_prettierBytes(), 1);
var import_mime_match = __toESM(require_mime_match(), 1);
var defaultOptions = {
  maxFileSize: null,
  minFileSize: null,
  maxTotalFileSize: null,
  maxNumberOfFiles: null,
  minNumberOfFiles: null,
  allowedFileTypes: null,
  requiredMetaFields: []
};
var RestrictionError = class extends Error {
  constructor(message, _temp) {
    let {
      isUserFacing = true,
      file
    } = _temp === void 0 ? {} : _temp;
    super(message);
    this.isRestriction = true;
    this.isUserFacing = isUserFacing;
    if (file != null)
      this.file = file;
  }
};
var Restricter = class {
  constructor(getOpts, i18n) {
    this.i18n = i18n;
    this.getOpts = () => {
      const opts = getOpts();
      if (opts.restrictions.allowedFileTypes != null && !Array.isArray(opts.restrictions.allowedFileTypes)) {
        throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      }
      return opts;
    };
  }
  // Because these operations are slow, we cannot run them for every file (if we are adding multiple files)
  validateAggregateRestrictions(existingFiles, addingFiles) {
    const {
      maxTotalFileSize,
      maxNumberOfFiles
    } = this.getOpts().restrictions;
    if (maxNumberOfFiles) {
      const nonGhostFiles = existingFiles.filter((f2) => !f2.isGhost);
      if (nonGhostFiles.length + addingFiles.length > maxNumberOfFiles) {
        throw new RestrictionError(`${this.i18n("youCanOnlyUploadX", {
          smart_count: maxNumberOfFiles
        })}`);
      }
    }
    if (maxTotalFileSize) {
      let totalFilesSize = existingFiles.reduce((total, f2) => total + f2.size, 0);
      for (const addingFile of addingFiles) {
        if (addingFile.size != null) {
          totalFilesSize += addingFile.size;
          if (totalFilesSize > maxTotalFileSize) {
            throw new RestrictionError(this.i18n("exceedsSize", {
              size: (0, import_prettier_bytes.default)(maxTotalFileSize),
              file: addingFile.name
            }));
          }
        }
      }
    }
  }
  validateSingleFile(file) {
    const {
      maxFileSize,
      minFileSize,
      allowedFileTypes
    } = this.getOpts().restrictions;
    if (allowedFileTypes) {
      const isCorrectFileType = allowedFileTypes.some((type) => {
        if (type.includes("/")) {
          if (!file.type)
            return false;
          return (0, import_mime_match.default)(file.type.replace(/;.*?$/, ""), type);
        }
        if (type[0] === "." && file.extension) {
          return file.extension.toLowerCase() === type.slice(1).toLowerCase();
        }
        return false;
      });
      if (!isCorrectFileType) {
        const allowedFileTypesString = allowedFileTypes.join(", ");
        throw new RestrictionError(this.i18n("youCanOnlyUploadFileTypes", {
          types: allowedFileTypesString
        }), {
          file
        });
      }
    }
    if (maxFileSize && file.size != null && file.size > maxFileSize) {
      throw new RestrictionError(this.i18n("exceedsSize", {
        size: (0, import_prettier_bytes.default)(maxFileSize),
        file: file.name
      }), {
        file
      });
    }
    if (minFileSize && file.size != null && file.size < minFileSize) {
      throw new RestrictionError(this.i18n("inferiorSize", {
        size: (0, import_prettier_bytes.default)(minFileSize)
      }), {
        file
      });
    }
  }
  validate(existingFiles, addingFiles) {
    addingFiles.forEach((addingFile) => {
      this.validateSingleFile(addingFile);
    });
    this.validateAggregateRestrictions(existingFiles, addingFiles);
  }
  validateMinNumberOfFiles(files) {
    const {
      minNumberOfFiles
    } = this.getOpts().restrictions;
    if (Object.keys(files).length < minNumberOfFiles) {
      throw new RestrictionError(this.i18n("youHaveToAtLeastSelectX", {
        smart_count: minNumberOfFiles
      }));
    }
  }
  getMissingRequiredMetaFields(file) {
    const error = new RestrictionError(this.i18n("missingRequiredMetaFieldOnFile", {
      fileName: file.name
    }));
    const {
      requiredMetaFields
    } = this.getOpts().restrictions;
    const missingFields = [];
    for (const field of requiredMetaFields) {
      if (!Object.hasOwn(file.meta, field) || file.meta[field] === "") {
        missingFields.push(field);
      }
    }
    return {
      missingFields,
      error
    };
  }
};

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/locale.js
var locale_default = {
  strings: {
    addBulkFilesFailed: {
      0: "Failed to add %{smart_count} file due to an internal error",
      1: "Failed to add %{smart_count} files due to internal errors"
    },
    youCanOnlyUploadX: {
      0: "You can only upload %{smart_count} file",
      1: "You can only upload %{smart_count} files"
    },
    youHaveToAtLeastSelectX: {
      0: "You have to select at least %{smart_count} file",
      1: "You have to select at least %{smart_count} files"
    },
    exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
    missingRequiredMetaField: "Missing required meta fields",
    missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
    inferiorSize: "This file is smaller than the allowed size of %{size}",
    youCanOnlyUploadFileTypes: "You can only upload: %{types}",
    noMoreFilesAllowed: "Cannot add more files",
    noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
    companionError: "Connection with Companion failed",
    authAborted: "Authentication aborted",
    companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
    failedToUpload: "Failed to upload %{file}",
    noInternetConnection: "No Internet connection",
    connectedToInternet: "Connected to the Internet",
    // Strings for remote providers
    noFilesFound: "You have no files or folders here",
    noSearchResults: "Unfortunately, there are no results for this search",
    selectX: {
      0: "Select %{smart_count}",
      1: "Select %{smart_count}"
    },
    allFilesFromFolderNamed: "All files from folder %{name}",
    openFolderNamed: "Open folder %{name}",
    cancel: "Cancel",
    logOut: "Log out",
    filter: "Filter",
    resetFilter: "Reset filter",
    loading: "Loading...",
    authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
    authenticateWith: "Connect to %{pluginName}",
    signInWithGoogle: "Sign in with Google",
    searchImages: "Search for images",
    enterTextToSearch: "Enter text to search for images",
    search: "Search",
    resetSearch: "Reset search",
    emptyFolderAdded: "No files were added from empty folder",
    addedNumFiles: "Added %{numFiles} file(s)",
    folderAlreadyAdded: 'The folder "%{folder}" was already added',
    folderAdded: {
      0: "Added %{smart_count} file from %{folder}",
      1: "Added %{smart_count} files from %{folder}"
    },
    additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled"
  }
};

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/Uppy.js
var _Symbol$for;
var _Symbol$for2;
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
var packageJson2 = {
  "version": "3.3.0"
};
var _plugins = /* @__PURE__ */ _classPrivateFieldLooseKey2("plugins");
var _restricter = /* @__PURE__ */ _classPrivateFieldLooseKey2("restricter");
var _storeUnsubscribe = /* @__PURE__ */ _classPrivateFieldLooseKey2("storeUnsubscribe");
var _emitter = /* @__PURE__ */ _classPrivateFieldLooseKey2("emitter");
var _preProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey2("preProcessors");
var _uploaders = /* @__PURE__ */ _classPrivateFieldLooseKey2("uploaders");
var _postProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey2("postProcessors");
var _informAndEmit = /* @__PURE__ */ _classPrivateFieldLooseKey2("informAndEmit");
var _checkRequiredMetaFieldsOnFile = /* @__PURE__ */ _classPrivateFieldLooseKey2("checkRequiredMetaFieldsOnFile");
var _checkRequiredMetaFields = /* @__PURE__ */ _classPrivateFieldLooseKey2("checkRequiredMetaFields");
var _assertNewUploadAllowed = /* @__PURE__ */ _classPrivateFieldLooseKey2("assertNewUploadAllowed");
var _transformFile = /* @__PURE__ */ _classPrivateFieldLooseKey2("transformFile");
var _startIfAutoProceed = /* @__PURE__ */ _classPrivateFieldLooseKey2("startIfAutoProceed");
var _checkAndUpdateFileState = /* @__PURE__ */ _classPrivateFieldLooseKey2("checkAndUpdateFileState");
var _addListeners = /* @__PURE__ */ _classPrivateFieldLooseKey2("addListeners");
var _updateOnlineStatus = /* @__PURE__ */ _classPrivateFieldLooseKey2("updateOnlineStatus");
var _createUpload = /* @__PURE__ */ _classPrivateFieldLooseKey2("createUpload");
var _getUpload = /* @__PURE__ */ _classPrivateFieldLooseKey2("getUpload");
var _removeUpload = /* @__PURE__ */ _classPrivateFieldLooseKey2("removeUpload");
var _runUpload = /* @__PURE__ */ _classPrivateFieldLooseKey2("runUpload");
_Symbol$for = Symbol.for("uppy test: getPlugins");
_Symbol$for2 = Symbol.for("uppy test: createUpload");
var Uppy = class {
  /**
   * Instantiate Uppy
   *
   * @param {object} opts — Uppy options
   */
  constructor(_opts) {
    Object.defineProperty(this, _runUpload, {
      value: _runUpload2
    });
    Object.defineProperty(this, _removeUpload, {
      value: _removeUpload2
    });
    Object.defineProperty(this, _getUpload, {
      value: _getUpload2
    });
    Object.defineProperty(this, _createUpload, {
      value: _createUpload2
    });
    Object.defineProperty(this, _addListeners, {
      value: _addListeners2
    });
    Object.defineProperty(this, _checkAndUpdateFileState, {
      value: _checkAndUpdateFileState2
    });
    Object.defineProperty(this, _startIfAutoProceed, {
      value: _startIfAutoProceed2
    });
    Object.defineProperty(this, _transformFile, {
      value: _transformFile2
    });
    Object.defineProperty(this, _assertNewUploadAllowed, {
      value: _assertNewUploadAllowed2
    });
    Object.defineProperty(this, _checkRequiredMetaFields, {
      value: _checkRequiredMetaFields2
    });
    Object.defineProperty(this, _checkRequiredMetaFieldsOnFile, {
      value: _checkRequiredMetaFieldsOnFile2
    });
    Object.defineProperty(this, _informAndEmit, {
      value: _informAndEmit2
    });
    Object.defineProperty(this, _plugins, {
      writable: true,
      value: /* @__PURE__ */ Object.create(null)
    });
    Object.defineProperty(this, _restricter, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _storeUnsubscribe, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _emitter, {
      writable: true,
      value: (0, import_namespace_emitter.default)()
    });
    Object.defineProperty(this, _preProcessors, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, _uploaders, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, _postProcessors, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    this.calculateProgress = (0, import_throttle.default)((file, data) => {
      const fileInState = this.getFile(file == null ? void 0 : file.id);
      if (file == null || !fileInState) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      if (fileInState.progress.percentage === 100) {
        this.log(`Not setting progress for a file that has been already uploaded: ${file.id}`);
        return;
      }
      const canHavePercentage = Number.isFinite(data.bytesTotal) && data.bytesTotal > 0;
      this.setFileState(file.id, {
        progress: {
          ...fileInState.progress,
          bytesUploaded: data.bytesUploaded,
          bytesTotal: data.bytesTotal,
          percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
        }
      });
      this.calculateTotalProgress();
    }, 500, {
      leading: true,
      trailing: true
    });
    Object.defineProperty(this, _updateOnlineStatus, {
      writable: true,
      value: this.updateOnlineStatus.bind(this)
    });
    this.defaultLocale = locale_default;
    const defaultOptions2 = {
      id: "uppy",
      autoProceed: false,
      allowMultipleUploadBatches: true,
      debug: false,
      restrictions: defaultOptions,
      meta: {},
      onBeforeFileAdded: (currentFile) => currentFile,
      onBeforeUpload: (files) => files,
      store: new lib_default(),
      logger: justErrorsLogger,
      infoTimeout: 5e3
    };
    this.opts = {
      ...defaultOptions2,
      ..._opts,
      restrictions: {
        ...defaultOptions2.restrictions,
        ..._opts && _opts.restrictions
      }
    };
    if (_opts && _opts.logger && _opts.debug) {
      this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning");
    } else if (_opts && _opts.debug) {
      this.opts.logger = debugLogger;
    }
    this.log(`Using Core v${this.constructor.VERSION}`);
    this.i18nInit();
    this.store = this.opts.store;
    this.setState({
      plugins: {},
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      capabilities: {
        uploadProgress: supportsUploadProgress(),
        individualCancellation: true,
        resumableUploads: false
      },
      totalProgress: 0,
      meta: {
        ...this.opts.meta
      },
      info: [],
      recoveredState: null
    });
    _classPrivateFieldLooseBase2(this, _restricter)[_restricter] = new Restricter(() => this.opts, this.i18n);
    _classPrivateFieldLooseBase2(this, _storeUnsubscribe)[_storeUnsubscribe] = this.store.subscribe((prevState, nextState, patch) => {
      this.emit("state-update", prevState, nextState, patch);
      this.updateAll(nextState);
    });
    if (this.opts.debug && typeof window !== "undefined") {
      window[this.opts.id] = this;
    }
    _classPrivateFieldLooseBase2(this, _addListeners)[_addListeners]();
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    _classPrivateFieldLooseBase2(this, _emitter)[_emitter].emit(event, ...args);
  }
  on(event, callback) {
    _classPrivateFieldLooseBase2(this, _emitter)[_emitter].on(event, callback);
    return this;
  }
  once(event, callback) {
    _classPrivateFieldLooseBase2(this, _emitter)[_emitter].once(event, callback);
    return this;
  }
  off(event, callback) {
    _classPrivateFieldLooseBase2(this, _emitter)[_emitter].off(event, callback);
    return this;
  }
  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */
  updateAll(state) {
    this.iteratePlugins((plugin) => {
      plugin.update(state);
    });
  }
  /**
   * Updates state with a patch
   *
   * @param {object} patch {foo: 'bar'}
   */
  setState(patch) {
    this.store.setState(patch);
  }
  /**
   * Returns current state.
   *
   * @returns {object}
   */
  getState() {
    return this.store.getState();
  }
  patchFilesState(filesWithNewState) {
    const existingFilesState = this.getState().files;
    this.setState({
      files: {
        ...existingFilesState,
        ...Object.fromEntries(Object.entries(filesWithNewState).map((_ref) => {
          let [fileID, newFileState] = _ref;
          return [fileID, {
            ...existingFilesState[fileID],
            ...newFileState
          }];
        }))
      }
    });
  }
  /**
   * Shorthand to set state for a specific file.
   */
  setFileState(fileID, state) {
    if (!this.getState().files[fileID]) {
      throw new Error(`Can\u2019t set state for ${fileID} (the file could have been removed)`);
    }
    this.patchFilesState({
      [fileID]: state
    });
  }
  i18nInit() {
    const translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.i18n = translator.translate.bind(translator);
    this.i18nArray = translator.translateArray.bind(translator);
    this.locale = translator.locale;
  }
  setOptions(newOpts) {
    this.opts = {
      ...this.opts,
      ...newOpts,
      restrictions: {
        ...this.opts.restrictions,
        ...newOpts && newOpts.restrictions
      }
    };
    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }
    this.i18nInit();
    if (newOpts.locale) {
      this.iteratePlugins((plugin) => {
        plugin.setOptions(newOpts);
      });
    }
    this.setState();
  }
  resetProgress() {
    const defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };
    const files = {
      ...this.getState().files
    };
    const updatedFiles = {};
    Object.keys(files).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...files[fileID],
        progress: {
          ...files[fileID].progress,
          ...defaultProgress
        }
      };
    });
    this.setState({
      files: updatedFiles,
      totalProgress: 0,
      allowNewUpload: true,
      error: null,
      recoveredState: null
    });
    this.emit("reset-progress");
  }
  addPreProcessor(fn) {
    _classPrivateFieldLooseBase2(this, _preProcessors)[_preProcessors].add(fn);
  }
  removePreProcessor(fn) {
    return _classPrivateFieldLooseBase2(this, _preProcessors)[_preProcessors].delete(fn);
  }
  addPostProcessor(fn) {
    _classPrivateFieldLooseBase2(this, _postProcessors)[_postProcessors].add(fn);
  }
  removePostProcessor(fn) {
    return _classPrivateFieldLooseBase2(this, _postProcessors)[_postProcessors].delete(fn);
  }
  addUploader(fn) {
    _classPrivateFieldLooseBase2(this, _uploaders)[_uploaders].add(fn);
  }
  removeUploader(fn) {
    return _classPrivateFieldLooseBase2(this, _uploaders)[_uploaders].delete(fn);
  }
  setMeta(data) {
    const updatedMeta = {
      ...this.getState().meta,
      ...data
    };
    const updatedFiles = {
      ...this.getState().files
    };
    Object.keys(updatedFiles).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...updatedFiles[fileID],
        meta: {
          ...updatedFiles[fileID].meta,
          ...data
        }
      };
    });
    this.log("Adding metadata:");
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
  }
  setFileMeta(fileID, data) {
    const updatedFiles = {
      ...this.getState().files
    };
    if (!updatedFiles[fileID]) {
      this.log("Was trying to set metadata for a file that has been removed: ", fileID);
      return;
    }
    const newMeta = {
      ...updatedFiles[fileID].meta,
      ...data
    };
    updatedFiles[fileID] = {
      ...updatedFiles[fileID],
      meta: newMeta
    };
    this.setState({
      files: updatedFiles
    });
  }
  /**
   * Get a file object.
   *
   * @param {string} fileID The ID of the file object to return.
   */
  getFile(fileID) {
    return this.getState().files[fileID];
  }
  /**
   * Get all files in an array.
   */
  getFiles() {
    const {
      files
    } = this.getState();
    return Object.values(files);
  }
  getFilesByIds(ids) {
    return ids.map((id4) => this.getFile(id4));
  }
  getObjectOfFilesPerState() {
    const {
      files: filesObject,
      totalProgress,
      error
    } = this.getState();
    const files = Object.values(filesObject);
    const inProgressFiles = files.filter((_ref2) => {
      let {
        progress
      } = _ref2;
      return !progress.uploadComplete && progress.uploadStarted;
    });
    const newFiles = files.filter((file) => !file.progress.uploadStarted);
    const startedFiles = files.filter((file) => file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess);
    const uploadStartedFiles = files.filter((file) => file.progress.uploadStarted);
    const pausedFiles = files.filter((file) => file.isPaused);
    const completeFiles = files.filter((file) => file.progress.uploadComplete);
    const erroredFiles = files.filter((file) => file.error);
    const inProgressNotPausedFiles = inProgressFiles.filter((file) => !file.isPaused);
    const processingFiles = files.filter((file) => file.progress.preprocess || file.progress.postprocess);
    return {
      newFiles,
      startedFiles,
      uploadStartedFiles,
      pausedFiles,
      completeFiles,
      erroredFiles,
      inProgressFiles,
      inProgressNotPausedFiles,
      processingFiles,
      isUploadStarted: uploadStartedFiles.length > 0,
      isAllComplete: totalProgress === 100 && completeFiles.length === files.length && processingFiles.length === 0,
      isAllErrored: !!error && erroredFiles.length === files.length,
      isAllPaused: inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length,
      isUploadInProgress: inProgressFiles.length > 0,
      isSomeGhost: files.some((file) => file.isGhost)
    };
  }
  validateRestrictions(file, files) {
    if (files === void 0) {
      files = this.getFiles();
    }
    try {
      _classPrivateFieldLooseBase2(this, _restricter)[_restricter].validate(files, [file]);
    } catch (err) {
      return err;
    }
    return null;
  }
  checkIfFileAlreadyExists(fileID) {
    const {
      files
    } = this.getState();
    if (files[fileID] && !files[fileID].isGhost) {
      return true;
    }
    return false;
  }
  /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   *
   * @param {object} file object to add
   * @returns {string} id for the added file
   */
  addFile(file) {
    _classPrivateFieldLooseBase2(this, _assertNewUploadAllowed)[_assertNewUploadAllowed](file);
    const {
      nextFilesState,
      validFilesToAdd,
      errors
    } = _classPrivateFieldLooseBase2(this, _checkAndUpdateFileState)[_checkAndUpdateFileState]([file]);
    const restrictionErrors = errors.filter((error) => error.isRestriction);
    _classPrivateFieldLooseBase2(this, _informAndEmit)[_informAndEmit](restrictionErrors);
    if (errors.length > 0)
      throw errors[0];
    this.setState({
      files: nextFilesState
    });
    const [firstValidFileToAdd] = validFilesToAdd;
    this.emit("file-added", firstValidFileToAdd);
    this.emit("files-added", validFilesToAdd);
    this.log(`Added file: ${firstValidFileToAdd.name}, ${firstValidFileToAdd.id}, mime type: ${firstValidFileToAdd.type}`);
    _classPrivateFieldLooseBase2(this, _startIfAutoProceed)[_startIfAutoProceed]();
    return firstValidFileToAdd.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */
  addFiles(fileDescriptors) {
    _classPrivateFieldLooseBase2(this, _assertNewUploadAllowed)[_assertNewUploadAllowed]();
    const {
      nextFilesState,
      validFilesToAdd,
      errors
    } = _classPrivateFieldLooseBase2(this, _checkAndUpdateFileState)[_checkAndUpdateFileState](fileDescriptors);
    const restrictionErrors = errors.filter((error) => error.isRestriction);
    _classPrivateFieldLooseBase2(this, _informAndEmit)[_informAndEmit](restrictionErrors);
    const nonRestrictionErrors = errors.filter((error) => !error.isRestriction);
    if (nonRestrictionErrors.length > 0) {
      let message = "Multiple errors occurred while adding files:\n";
      nonRestrictionErrors.forEach((subError) => {
        message += `
 * ${subError.message}`;
      });
      this.info({
        message: this.i18n("addBulkFilesFailed", {
          smart_count: nonRestrictionErrors.length
        }),
        details: message
      }, "error", this.opts.infoTimeout);
      if (typeof AggregateError === "function") {
        throw new AggregateError(nonRestrictionErrors, message);
      } else {
        const err = new Error(message);
        err.errors = nonRestrictionErrors;
        throw err;
      }
    }
    this.setState({
      files: nextFilesState
    });
    validFilesToAdd.forEach((file) => {
      this.emit("file-added", file);
    });
    this.emit("files-added", validFilesToAdd);
    if (validFilesToAdd.length > 5) {
      this.log(`Added batch of ${validFilesToAdd.length} files`);
    } else {
      Object.values(validFilesToAdd).forEach((file) => {
        this.log(`Added file: ${file.name}
 id: ${file.id}
 type: ${file.type}`);
      });
    }
    if (validFilesToAdd.length > 0) {
      _classPrivateFieldLooseBase2(this, _startIfAutoProceed)[_startIfAutoProceed]();
    }
  }
  removeFiles(fileIDs, reason) {
    const {
      files,
      currentUploads
    } = this.getState();
    const updatedFiles = {
      ...files
    };
    const updatedUploads = {
      ...currentUploads
    };
    const removedFiles = /* @__PURE__ */ Object.create(null);
    fileIDs.forEach((fileID) => {
      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
    });
    function fileIsNotRemoved(uploadFileID) {
      return removedFiles[uploadFileID] === void 0;
    }
    Object.keys(updatedUploads).forEach((uploadID) => {
      const newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
      if (newFileIDs.length === 0) {
        delete updatedUploads[uploadID];
        return;
      }
      const {
        capabilities
      } = this.getState();
      if (newFileIDs.length !== currentUploads[uploadID].fileIDs.length && !capabilities.individualCancellation) {
        throw new Error("individualCancellation is disabled");
      }
      updatedUploads[uploadID] = {
        ...currentUploads[uploadID],
        fileIDs: newFileIDs
      };
    });
    const stateUpdate = {
      currentUploads: updatedUploads,
      files: updatedFiles
    };
    if (Object.keys(updatedFiles).length === 0) {
      stateUpdate.allowNewUpload = true;
      stateUpdate.error = null;
      stateUpdate.recoveredState = null;
    }
    this.setState(stateUpdate);
    this.calculateTotalProgress();
    const removedFileIDs = Object.keys(removedFiles);
    removedFileIDs.forEach((fileID) => {
      this.emit("file-removed", removedFiles[fileID], reason);
    });
    if (removedFileIDs.length > 5) {
      this.log(`Removed ${removedFileIDs.length} files`);
    } else {
      this.log(`Removed files: ${removedFileIDs.join(", ")}`);
    }
  }
  removeFile(fileID, reason) {
    if (reason === void 0) {
      reason = null;
    }
    this.removeFiles([fileID], reason);
  }
  pauseResume(fileID) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
      return void 0;
    }
    const wasPaused = this.getFile(fileID).isPaused || false;
    const isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused
    });
    this.emit("upload-pause", fileID, isPaused);
    return isPaused;
  }
  pauseAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: true
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit("pause-all");
  }
  resumeAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: false,
        error: null
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit("resume-all");
  }
  retryAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const filesToRetry = Object.keys(updatedFiles).filter((file) => {
      return updatedFiles[file].error;
    });
    filesToRetry.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: false,
        error: null
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit("retry-all", filesToRetry);
    if (filesToRetry.length === 0) {
      return Promise.resolve({
        successful: [],
        failed: []
      });
    }
    const uploadID = _classPrivateFieldLooseBase2(this, _createUpload)[_createUpload](filesToRetry, {
      forceAllowNewUpload: true
      // create new upload even if allowNewUpload: false
    });
    return _classPrivateFieldLooseBase2(this, _runUpload)[_runUpload](uploadID);
  }
  cancelAll(_temp) {
    let {
      reason = "user"
    } = _temp === void 0 ? {} : _temp;
    this.emit("cancel-all", {
      reason
    });
    if (reason === "user") {
      const {
        files
      } = this.getState();
      const fileIDs = Object.keys(files);
      if (fileIDs.length) {
        this.removeFiles(fileIDs, "cancel-all");
      }
      this.setState({
        totalProgress: 0,
        error: null,
        recoveredState: null
      });
    }
  }
  retryUpload(fileID) {
    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit("upload-retry", fileID);
    const uploadID = _classPrivateFieldLooseBase2(this, _createUpload)[_createUpload]([fileID], {
      forceAllowNewUpload: true
      // create new upload even if allowNewUpload: false
    });
    return _classPrivateFieldLooseBase2(this, _runUpload)[_runUpload](uploadID);
  }
  logout() {
    this.iteratePlugins((plugin) => {
      if (plugin.provider && plugin.provider.logout) {
        plugin.provider.logout();
      }
    });
  }
  calculateTotalProgress() {
    const files = this.getFiles();
    const inProgress = files.filter((file) => {
      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
    });
    if (inProgress.length === 0) {
      this.emit("progress", 0);
      this.setState({
        totalProgress: 0
      });
      return;
    }
    const sizedFiles = inProgress.filter((file) => file.progress.bytesTotal != null);
    const unsizedFiles = inProgress.filter((file) => file.progress.bytesTotal == null);
    if (sizedFiles.length === 0) {
      const progressMax = inProgress.length * 100;
      const currentProgress = unsizedFiles.reduce((acc, file) => {
        return acc + file.progress.percentage;
      }, 0);
      const totalProgress2 = Math.round(currentProgress / progressMax * 100);
      this.setState({
        totalProgress: totalProgress2
      });
      return;
    }
    let totalSize = sizedFiles.reduce((acc, file) => {
      return acc + file.progress.bytesTotal;
    }, 0);
    const averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    let uploadedSize = 0;
    sizedFiles.forEach((file) => {
      uploadedSize += file.progress.bytesUploaded;
    });
    unsizedFiles.forEach((file) => {
      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
    });
    let totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
    if (totalProgress > 100) {
      totalProgress = 100;
    }
    this.setState({
      totalProgress
    });
    this.emit("progress", totalProgress);
  }
  updateOnlineStatus() {
    const online = typeof window.navigator.onLine !== "undefined" ? window.navigator.onLine : true;
    if (!online) {
      this.emit("is-offline");
      this.info(this.i18n("noInternetConnection"), "error", 0);
      this.wasOffline = true;
    } else {
      this.emit("is-online");
      if (this.wasOffline) {
        this.emit("back-online");
        this.info(this.i18n("connectedToInternet"), "success", 3e3);
        this.wasOffline = false;
      }
    }
  }
  getID() {
    return this.opts.id;
  }
  /**
   * Registers a plugin with Core.
   *
   * @param {object} Plugin object
   * @param {object} [opts] object with options to be passed to Plugin
   * @returns {object} self for chaining
   */
  // eslint-disable-next-line no-shadow
  use(Plugin, opts) {
    if (typeof Plugin !== "function") {
      const msg = `Expected a plugin class, but got ${Plugin === null ? "null" : typeof Plugin}. Please verify that the plugin was imported and spelled correctly.`;
      throw new TypeError(msg);
    }
    const plugin = new Plugin(this, opts);
    const pluginId = plugin.id;
    if (!pluginId) {
      throw new Error("Your plugin must have an id");
    }
    if (!plugin.type) {
      throw new Error("Your plugin must have a type");
    }
    const existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      const msg = `Already found a plugin named '${existsPluginAlready.id}'. Tried to use: '${pluginId}'.
Uppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`;
      throw new Error(msg);
    }
    if (Plugin.VERSION) {
      this.log(`Using ${pluginId} v${Plugin.VERSION}`);
    }
    if (plugin.type in _classPrivateFieldLooseBase2(this, _plugins)[_plugins]) {
      _classPrivateFieldLooseBase2(this, _plugins)[_plugins][plugin.type].push(plugin);
    } else {
      _classPrivateFieldLooseBase2(this, _plugins)[_plugins][plugin.type] = [plugin];
    }
    plugin.install();
    return this;
  }
  /**
   * Find one Plugin by name.
   *
   * @param {string} id plugin id
   * @returns {BasePlugin|undefined}
   */
  getPlugin(id4) {
    for (const plugins of Object.values(_classPrivateFieldLooseBase2(this, _plugins)[_plugins])) {
      const foundPlugin = plugins.find((plugin) => plugin.id === id4);
      if (foundPlugin != null)
        return foundPlugin;
    }
    return void 0;
  }
  [_Symbol$for](type) {
    return _classPrivateFieldLooseBase2(this, _plugins)[_plugins][type];
  }
  /**
   * Iterate through all `use`d plugins.
   *
   * @param {Function} method that will be run on each plugin
   */
  iteratePlugins(method) {
    Object.values(_classPrivateFieldLooseBase2(this, _plugins)[_plugins]).flat(1).forEach(method);
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  removePlugin(instance) {
    this.log(`Removing plugin ${instance.id}`);
    this.emit("plugin-remove", instance);
    if (instance.uninstall) {
      instance.uninstall();
    }
    const list = _classPrivateFieldLooseBase2(this, _plugins)[_plugins][instance.type];
    const index = list.findIndex((item) => item.id === instance.id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    const state = this.getState();
    const updatedState = {
      plugins: {
        ...state.plugins,
        [instance.id]: void 0
      }
    };
    this.setState(updatedState);
  }
  /**
   * Uninstall all plugins and close down this Uppy instance.
   */
  close(_temp2) {
    let {
      reason
    } = _temp2 === void 0 ? {} : _temp2;
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`);
    this.cancelAll({
      reason
    });
    _classPrivateFieldLooseBase2(this, _storeUnsubscribe)[_storeUnsubscribe]();
    this.iteratePlugins((plugin) => {
      this.removePlugin(plugin);
    });
    if (typeof window !== "undefined" && window.removeEventListener) {
      window.removeEventListener("online", _classPrivateFieldLooseBase2(this, _updateOnlineStatus)[_updateOnlineStatus]);
      window.removeEventListener("offline", _classPrivateFieldLooseBase2(this, _updateOnlineStatus)[_updateOnlineStatus]);
    }
  }
  hideInfo() {
    const {
      info
    } = this.getState();
    this.setState({
      info: info.slice(1)
    });
    this.emit("info-hidden");
  }
  /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   *
   * @param {string | object} message Message to be displayed by the informer
   * @param {string} [type]
   * @param {number} [duration]
   */
  info(message, type, duration) {
    if (type === void 0) {
      type = "info";
    }
    if (duration === void 0) {
      duration = 3e3;
    }
    const isComplexMessage = typeof message === "object";
    this.setState({
      info: [...this.getState().info, {
        type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }]
    });
    setTimeout(() => this.hideInfo(), duration);
    this.emit("info-visible");
  }
  /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   *
   * @param {string|object} message to log
   * @param {string} [type] optional `error` or `warning`
   */
  log(message, type) {
    const {
      logger
    } = this.opts;
    switch (type) {
      case "error":
        logger.error(message);
        break;
      case "warning":
        logger.warn(message);
        break;
      default:
        logger.debug(message);
        break;
    }
  }
  /**
   * Restore an upload by its ID.
   */
  restore(uploadID) {
    this.log(`Core: attempting to restore upload "${uploadID}"`);
    if (!this.getState().currentUploads[uploadID]) {
      _classPrivateFieldLooseBase2(this, _removeUpload)[_removeUpload](uploadID);
      return Promise.reject(new Error("Nonexistent upload"));
    }
    return _classPrivateFieldLooseBase2(this, _runUpload)[_runUpload](uploadID);
  }
  [_Symbol$for2]() {
    return _classPrivateFieldLooseBase2(this, _createUpload)[_createUpload](...arguments);
  }
  /**
   * Add data to an upload's result object.
   *
   * @param {string} uploadID The ID of the upload.
   * @param {object} data Data properties to add to the result object.
   */
  addResultData(uploadID, data) {
    if (!_classPrivateFieldLooseBase2(this, _getUpload)[_getUpload](uploadID)) {
      this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
      return;
    }
    const {
      currentUploads
    } = this.getState();
    const currentUpload = {
      ...currentUploads[uploadID],
      result: {
        ...currentUploads[uploadID].result,
        ...data
      }
    };
    this.setState({
      currentUploads: {
        ...currentUploads,
        [uploadID]: currentUpload
      }
    });
  }
  /**
   * Start an upload for all the files that are not currently being uploaded.
   *
   * @returns {Promise}
   */
  upload() {
    var _classPrivateFieldLoo;
    if (!((_classPrivateFieldLoo = _classPrivateFieldLooseBase2(this, _plugins)[_plugins].uploader) != null && _classPrivateFieldLoo.length)) {
      this.log("No uploader type plugins are used", "warning");
    }
    let {
      files
    } = this.getState();
    const onBeforeUploadResult = this.opts.onBeforeUpload(files);
    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false"));
    }
    if (onBeforeUploadResult && typeof onBeforeUploadResult === "object") {
      files = onBeforeUploadResult;
      this.setState({
        files
      });
    }
    return Promise.resolve().then(() => _classPrivateFieldLooseBase2(this, _restricter)[_restricter].validateMinNumberOfFiles(files)).catch((err) => {
      _classPrivateFieldLooseBase2(this, _informAndEmit)[_informAndEmit]([err]);
      throw err;
    }).then(() => {
      if (!_classPrivateFieldLooseBase2(this, _checkRequiredMetaFields)[_checkRequiredMetaFields](files)) {
        throw new RestrictionError(this.i18n("missingRequiredMetaField"));
      }
    }).catch((err) => {
      throw err;
    }).then(() => {
      const {
        currentUploads
      } = this.getState();
      const currentlyUploadingFiles = Object.values(currentUploads).flatMap((curr) => curr.fileIDs);
      const waitingFileIDs = [];
      Object.keys(files).forEach((fileID) => {
        const file = this.getFile(fileID);
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
      });
      const uploadID = _classPrivateFieldLooseBase2(this, _createUpload)[_createUpload](waitingFileIDs);
      return _classPrivateFieldLooseBase2(this, _runUpload)[_runUpload](uploadID);
    }).catch((err) => {
      this.emit("error", err);
      this.log(err, "error");
      throw err;
    });
  }
};
function _informAndEmit2(errors) {
  for (const error of errors) {
    const {
      file,
      isRestriction
    } = error;
    if (isRestriction) {
      this.emit("restriction-failed", file, error);
    } else {
      this.emit("error", error);
    }
    this.log(error, "warning");
  }
  const userFacingErrors = errors.filter((error) => error.isUserFacing);
  const maxNumToShow = 4;
  const firstErrors = userFacingErrors.slice(0, maxNumToShow);
  const additionalErrors = userFacingErrors.slice(maxNumToShow);
  firstErrors.forEach((_ref3) => {
    let {
      message,
      details = ""
    } = _ref3;
    this.info({
      message,
      details
    }, "error", this.opts.infoTimeout);
  });
  if (additionalErrors.length > 0) {
    this.info({
      message: this.i18n("additionalRestrictionsFailed", {
        count: additionalErrors.length
      })
    });
  }
}
function _checkRequiredMetaFieldsOnFile2(file) {
  const {
    missingFields,
    error
  } = _classPrivateFieldLooseBase2(this, _restricter)[_restricter].getMissingRequiredMetaFields(file);
  if (missingFields.length > 0) {
    this.setFileState(file.id, {
      missingRequiredMetaFields: missingFields
    });
    this.log(error.message);
    this.emit("restriction-failed", file, error);
    return false;
  }
  return true;
}
function _checkRequiredMetaFields2(files) {
  let success = true;
  for (const file of Object.values(files)) {
    if (!_classPrivateFieldLooseBase2(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file)) {
      success = false;
    }
  }
  return success;
}
function _assertNewUploadAllowed2(file) {
  const {
    allowNewUpload
  } = this.getState();
  if (allowNewUpload === false) {
    const error = new RestrictionError(this.i18n("noMoreFilesAllowed"), {
      file
    });
    _classPrivateFieldLooseBase2(this, _informAndEmit)[_informAndEmit]([error]);
    throw error;
  }
}
function _transformFile2(fileDescriptorOrFile) {
  const fileDescriptor = fileDescriptorOrFile instanceof File ? {
    name: fileDescriptorOrFile.name,
    type: fileDescriptorOrFile.type,
    size: fileDescriptorOrFile.size,
    data: fileDescriptorOrFile
  } : fileDescriptorOrFile;
  const fileType = getFileType(fileDescriptor);
  const fileName = getFileName(fileType, fileDescriptor);
  const fileExtension = getFileNameAndExtension(fileName).extension;
  const isRemote = Boolean(fileDescriptor.isRemote);
  const id4 = getSafeFileId(fileDescriptor);
  const meta = fileDescriptor.meta || {};
  meta.name = fileName;
  meta.type = fileType;
  const size = Number.isFinite(fileDescriptor.data.size) ? fileDescriptor.data.size : null;
  return {
    source: fileDescriptor.source || "",
    id: id4,
    name: fileName,
    extension: fileExtension || "",
    meta: {
      ...this.getState().meta,
      ...meta
    },
    type: fileType,
    data: fileDescriptor.data,
    progress: {
      percentage: 0,
      bytesUploaded: 0,
      bytesTotal: size,
      uploadComplete: false,
      uploadStarted: null
    },
    size,
    isRemote,
    remote: fileDescriptor.remote || "",
    preview: fileDescriptor.preview
  };
}
function _startIfAutoProceed2() {
  if (this.opts.autoProceed && !this.scheduledAutoProceed) {
    this.scheduledAutoProceed = setTimeout(() => {
      this.scheduledAutoProceed = null;
      this.upload().catch((err) => {
        if (!err.isRestriction) {
          this.log(err.stack || err.message || err);
        }
      });
    }, 4);
  }
}
function _checkAndUpdateFileState2(filesToAdd) {
  const {
    files: existingFiles
  } = this.getState();
  const nextFilesState = {
    ...existingFiles
  };
  const validFilesToAdd = [];
  const errors = [];
  for (const fileToAdd of filesToAdd) {
    try {
      var _existingFiles$newFil;
      let newFile = _classPrivateFieldLooseBase2(this, _transformFile)[_transformFile](fileToAdd);
      if ((_existingFiles$newFil = existingFiles[newFile.id]) != null && _existingFiles$newFil.isGhost) {
        const {
          isGhost,
          ...existingFileState
        } = existingFiles[newFile.id];
        newFile = {
          ...existingFileState,
          data: fileToAdd.data
        };
        this.log(`Replaced the blob in the restored ghost file: ${newFile.name}, ${newFile.id}`);
      }
      if (this.checkIfFileAlreadyExists(newFile.id)) {
        throw new RestrictionError(this.i18n("noDuplicates", {
          fileName: newFile.name
        }), {
          file: fileToAdd
        });
      }
      const onBeforeFileAddedResult = this.opts.onBeforeFileAdded(newFile, nextFilesState);
      if (onBeforeFileAddedResult === false) {
        throw new RestrictionError("Cannot add the file because onBeforeFileAdded returned false.", {
          isUserFacing: false,
          file: fileToAdd
        });
      } else if (typeof onBeforeFileAddedResult === "object" && onBeforeFileAddedResult !== null) {
        newFile = onBeforeFileAddedResult;
      }
      _classPrivateFieldLooseBase2(this, _restricter)[_restricter].validateSingleFile(newFile);
      nextFilesState[newFile.id] = newFile;
      validFilesToAdd.push(newFile);
    } catch (err) {
      errors.push(err);
    }
  }
  try {
    _classPrivateFieldLooseBase2(this, _restricter)[_restricter].validateAggregateRestrictions(Object.values(existingFiles), validFilesToAdd);
  } catch (err) {
    errors.push(err);
    return {
      nextFilesState: existingFiles,
      validFilesToAdd: [],
      errors
    };
  }
  return {
    nextFilesState,
    validFilesToAdd,
    errors
  };
}
function _addListeners2() {
  const errorHandler = (error, file, response) => {
    let errorMsg = error.message || "Unknown error";
    if (error.details) {
      errorMsg += ` ${error.details}`;
    }
    this.setState({
      error: errorMsg
    });
    if (file != null && file.id in this.getState().files) {
      this.setFileState(file.id, {
        error: errorMsg,
        response
      });
    }
  };
  this.on("error", errorHandler);
  this.on("upload-error", (file, error, response) => {
    errorHandler(error, file, response);
    if (typeof error === "object" && error.message) {
      this.log(error.message, "error");
      const newError = new Error(this.i18n("failedToUpload", {
        file: file == null ? void 0 : file.name
      }));
      newError.isUserFacing = true;
      newError.details = error.message;
      if (error.details) {
        newError.details += ` ${error.details}`;
      }
      _classPrivateFieldLooseBase2(this, _informAndEmit)[_informAndEmit]([newError]);
    } else {
      _classPrivateFieldLooseBase2(this, _informAndEmit)[_informAndEmit]([error]);
    }
  });
  let uploadStalledWarningRecentlyEmitted;
  this.on("upload-stalled", (error, files) => {
    const {
      message
    } = error;
    const details = files.map((file) => file.meta.name).join(", ");
    if (!uploadStalledWarningRecentlyEmitted) {
      this.info({
        message,
        details
      }, "warning", this.opts.infoTimeout);
      uploadStalledWarningRecentlyEmitted = setTimeout(() => {
        uploadStalledWarningRecentlyEmitted = null;
      }, this.opts.infoTimeout);
    }
    this.log(`${message} ${details}`.trim(), "warning");
  });
  this.on("upload", () => {
    this.setState({
      error: null
    });
  });
  const onUploadStarted = (files) => {
    const filesFiltered = files.filter((file) => {
      const exists = file != null && this.getFile(file.id);
      if (!exists)
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return exists;
    });
    const filesState = Object.fromEntries(filesFiltered.map((file) => [file.id, {
      progress: {
        uploadStarted: Date.now(),
        uploadComplete: false,
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: file.size
      }
    }]));
    this.patchFilesState(filesState);
  };
  this.on("upload-start", (files) => {
    files.forEach((file) => {
      this.emit("upload-started", file);
    });
    onUploadStarted(files);
  });
  this.on("upload-progress", this.calculateProgress);
  this.on("upload-success", (file, uploadResp) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const currentProgress = this.getFile(file.id).progress;
    this.setFileState(file.id, {
      progress: {
        ...currentProgress,
        postprocess: _classPrivateFieldLooseBase2(this, _postProcessors)[_postProcessors].size > 0 ? {
          mode: "indeterminate"
        } : null,
        uploadComplete: true,
        percentage: 100,
        bytesUploaded: currentProgress.bytesTotal
      },
      response: uploadResp,
      uploadURL: uploadResp.uploadURL,
      isPaused: false
    });
    if (file.size == null) {
      this.setFileState(file.id, {
        size: uploadResp.bytesUploaded || currentProgress.bytesTotal
      });
    }
    this.calculateTotalProgress();
  });
  this.on("preprocess-progress", (file, progress) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    this.setFileState(file.id, {
      progress: {
        ...this.getFile(file.id).progress,
        preprocess: progress
      }
    });
  });
  this.on("preprocess-complete", (file) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const files = {
      ...this.getState().files
    };
    files[file.id] = {
      ...files[file.id],
      progress: {
        ...files[file.id].progress
      }
    };
    delete files[file.id].progress.preprocess;
    this.setState({
      files
    });
  });
  this.on("postprocess-progress", (file, progress) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    this.setFileState(file.id, {
      progress: {
        ...this.getState().files[file.id].progress,
        postprocess: progress
      }
    });
  });
  this.on("postprocess-complete", (file) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const files = {
      ...this.getState().files
    };
    files[file.id] = {
      ...files[file.id],
      progress: {
        ...files[file.id].progress
      }
    };
    delete files[file.id].progress.postprocess;
    this.setState({
      files
    });
  });
  this.on("restored", () => {
    this.calculateTotalProgress();
  });
  this.on("dashboard:file-edit-complete", (file) => {
    if (file) {
      _classPrivateFieldLooseBase2(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file);
    }
  });
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("online", _classPrivateFieldLooseBase2(this, _updateOnlineStatus)[_updateOnlineStatus]);
    window.addEventListener("offline", _classPrivateFieldLooseBase2(this, _updateOnlineStatus)[_updateOnlineStatus]);
    setTimeout(_classPrivateFieldLooseBase2(this, _updateOnlineStatus)[_updateOnlineStatus], 3e3);
  }
}
function _createUpload2(fileIDs, opts) {
  if (opts === void 0) {
    opts = {};
  }
  const {
    forceAllowNewUpload = false
  } = opts;
  const {
    allowNewUpload,
    currentUploads
  } = this.getState();
  if (!allowNewUpload && !forceAllowNewUpload) {
    throw new Error("Cannot create a new upload: already uploading.");
  }
  const uploadID = nanoid();
  this.emit("upload", {
    id: uploadID,
    fileIDs
  });
  this.setState({
    allowNewUpload: this.opts.allowMultipleUploadBatches !== false && this.opts.allowMultipleUploads !== false,
    currentUploads: {
      ...currentUploads,
      [uploadID]: {
        fileIDs,
        step: 0,
        result: {}
      }
    }
  });
  return uploadID;
}
function _getUpload2(uploadID) {
  const {
    currentUploads
  } = this.getState();
  return currentUploads[uploadID];
}
function _removeUpload2(uploadID) {
  const currentUploads = {
    ...this.getState().currentUploads
  };
  delete currentUploads[uploadID];
  this.setState({
    currentUploads
  });
}
async function _runUpload2(uploadID) {
  const getCurrentUpload = () => {
    const {
      currentUploads
    } = this.getState();
    return currentUploads[uploadID];
  };
  let currentUpload = getCurrentUpload();
  const steps = [..._classPrivateFieldLooseBase2(this, _preProcessors)[_preProcessors], ..._classPrivateFieldLooseBase2(this, _uploaders)[_uploaders], ..._classPrivateFieldLooseBase2(this, _postProcessors)[_postProcessors]];
  try {
    for (let step = currentUpload.step || 0; step < steps.length; step++) {
      if (!currentUpload) {
        break;
      }
      const fn = steps[step];
      this.setState({
        currentUploads: {
          ...this.getState().currentUploads,
          [uploadID]: {
            ...currentUpload,
            step
          }
        }
      });
      const {
        fileIDs
      } = currentUpload;
      await fn(fileIDs, uploadID);
      currentUpload = getCurrentUpload();
    }
  } catch (err) {
    _classPrivateFieldLooseBase2(this, _removeUpload)[_removeUpload](uploadID);
    throw err;
  }
  if (currentUpload) {
    currentUpload.fileIDs.forEach((fileID) => {
      const file = this.getFile(fileID);
      if (file && file.progress.postprocess) {
        this.emit("postprocess-complete", file);
      }
    });
    const files = currentUpload.fileIDs.map((fileID) => this.getFile(fileID));
    const successful = files.filter((file) => !file.error);
    const failed = files.filter((file) => file.error);
    await this.addResultData(uploadID, {
      successful,
      failed,
      uploadID
    });
    currentUpload = getCurrentUpload();
  }
  let result;
  if (currentUpload) {
    result = currentUpload.result;
    this.emit("complete", result);
    _classPrivateFieldLooseBase2(this, _removeUpload)[_removeUpload](uploadID);
  }
  if (result == null) {
    this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
  }
  return result;
}
Uppy.VERSION = packageJson2.version;
var Uppy_default = Uppy;

// node_modules/.pnpm/preact@10.16.0/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
function v(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d(l2, f2, i2, o2, null);
}
function d(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
  return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function _() {
  return { current: null };
}
function k(n2) {
  return n2.children;
}
function b(n2, l2) {
  this.props = n2, this.context = l2;
}
function g(n2, l2) {
  if (null == l2)
    return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? g(n2) : null;
}
function m(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return m(n2);
  }
}
function w(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n2, l2, u2, t2, o2, r2, e2, c2, s2;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (l2 = i.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = v({}, e2)).__v = e2.__v + 1, L(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g(e2) : c2, e2.__h, o2), M(t2, e2, o2), e2.__e != c2 && m(e2)), i.length > l2 && i.sort(f));
  x.__r = 0;
}
function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, v2) {
  var p2, y2, _2, b2, g2, m2, w2, x2, P2, S2, H2 = 0, I2 = t2 && t2.__k || s, T2 = I2.length, j2 = T2, z2 = l2.length;
  for (u2.__k = [], p2 = 0; p2 < z2; p2++)
    null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d(null, b2, null, null, b2) : h(b2) ? d(k, { children: b2 }, null, null, null) : b2.__b > 0 ? d(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) && (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (x2 = A(b2, I2, w2 = p2 + H2, j2)) ? _2 = c : (_2 = I2[x2] || c, I2[x2] = void 0, j2--), L(n2, b2, _2, i2, o2, r2, f2, e2, a2, v2), g2 = b2.__e, (y2 = b2.ref) && _2.ref != y2 && (_2.ref && O(_2.ref, null, b2), v2.push(y2, b2.__c || g2, b2)), null != g2 && (null == m2 && (m2 = g2), S2 = !(P2 = _2 === c || null === _2.__v) && x2 === w2, P2 ? -1 == x2 && H2-- : x2 !== w2 && (x2 === w2 + 1 ? (H2++, S2 = true) : x2 > w2 ? j2 > z2 - w2 ? (H2 += x2 - w2, S2 = true) : H2-- : H2 = x2 < w2 && x2 == w2 - 1 ? x2 - w2 : 0), w2 = p2 + H2, S2 = S2 || x2 == p2 && !P2, "function" != typeof b2.type || x2 === w2 && _2.__k !== b2.__k ? "function" == typeof b2.type || S2 ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = g2.nextSibling : e2 = $(n2, g2, e2) : e2 = C(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2)));
  for (u2.__e = m2, p2 = T2; p2--; )
    null != I2[p2] && ("function" == typeof u2.type && null != I2[p2].__e && I2[p2].__e == u2.__d && (u2.__d = I2[p2].__e.nextSibling), q(I2[p2], I2[p2]));
}
function C(n2, l2, u2) {
  for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
    (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? C(t2, l2, u2) : $(u2, t2.__e, l2));
  return l2;
}
function S(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
    S(n3, l2);
  }) : l2.push(n2)), l2;
}
function $(n2, l2, u2) {
  return null == u2 || u2.parentNode !== n2 ? n2.insertBefore(l2, null) : l2 == u2 && null != l2.parentNode || n2.insertBefore(l2, u2), l2.nextSibling;
}
function A(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
    return u2;
  if (t2 > (null != e2 ? 1 : 0))
    for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && i2 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && i2 == e2.key && o2 === e2.type)
          return f2;
        f2++;
      }
    }
  return -1;
}
function H(n2, l2, u2, t2, i2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || T(n2, o2, null, u2[o2], t2);
  for (o2 in l2)
    i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || T(n2, o2, l2[o2], u2[o2], t2);
}
function I(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
}
function T(n2, l2, u2, t2, i2) {
  var o2;
  n:
    if ("style" === l2) {
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || I(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] === t2[l2] || I(n2.style, l2, u2[l2]);
      }
    } else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 || n2.addEventListener(l2, o2 ? z : j, o2) : n2.removeEventListener(l2, o2 ? z : j, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (i2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j(n2) {
  return this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function z(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function L(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, _2, g2, m2, w2, x2, C2, S2, $2, A2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (w2 = u2.props, x2 = (a2 = T2.contextType) && i2[a2.__c], C2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = p2 = new T2(w2, C2) : (u2.__c = p2 = new b(w2, C2), p2.constructor = T2, p2.render = B), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != T2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, T2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u2, y2)
          null == T2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, C2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, C2) || u2.__v === t2.__v)) {
            for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), S2 = 0; S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f2.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, C2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _2, g2);
          });
        }
        if (p2.context = C2, p2.props = w2, p2.__P = n2, p2.__e = false, $2 = l.__r, A2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), H2 = 0; H2 < p2._sb.length; H2++)
            p2.__h.push(p2._sb[H2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i2 = v(v({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g2 = p2.getSnapshotBeforeUpdate(d2, _2)), P(n2, h(I2 = null != a2 && a2.type === k && null == a2.key ? a2.props.children : a2) ? I2 : [I2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), m2 && (p2.__E = p2.__ = null);
      } else
        null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = N(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
    (a2 = l.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, t2);
  }
}
function M(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    O(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function N(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
  var a2, v2, y2, d2 = t2.props, _2 = u2.props, k2 = u2.type, b2 = 0;
  if ("svg" === k2 && (o2 = true), null != r2) {
    for (; b2 < r2.length; b2++)
      if ((a2 = r2[b2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
        l2 = a2, r2[b2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === k2)
      return document.createTextNode(_2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _2.is && _2), r2 = null, e2 = false;
  }
  if (null === k2)
    d2 === _2 || e2 && l2.data === _2 || (l2.data = _2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), v2 = (d2 = t2.props || c).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e2) {
      if (null != r2)
        for (d2 = {}, b2 = 0; b2 < l2.attributes.length; b2++)
          d2[l2.attributes[b2].name] = l2.attributes[b2].value;
      (y2 || v2) && (y2 && (v2 && y2.__html == v2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
    }
    if (H(l2, _2, d2, o2, e2), y2)
      u2.__k = [];
    else if (P(l2, h(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g(t2, 0), e2, s2), null != r2)
      for (b2 = r2.length; b2--; )
        null != r2[b2] && p(r2[b2]);
    e2 || ("value" in _2 && void 0 !== (b2 = _2.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && T(l2, "value", b2, d2.value, false), "checked" in _2 && void 0 !== (b2 = _2.checked) && b2 !== l2.checked && T(l2, "checked", b2, d2.checked, false));
  }
  return l2;
}
function O(n2, u2, t2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function q(n2, u2, t2) {
  var i2, o2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || O(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    i2.base = i2.__P = null, n2.__c = void 0;
  }
  if (i2 = n2.__k)
    for (o2 = 0; o2 < i2.length; o2++)
      i2[o2] && q(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function D(u2, t2, i2) {
  var o2, r2, f2, e2;
  l.__ && l.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], L(t2, u2 = (!o2 && i2 || t2).__k = y(k, null, [u2]), r2 || c, c, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), M(f2, u2, e2);
}
function F(l2, u2, t2) {
  var i2, o2, r2, f2, e2 = v({}, l2.props);
  for (r2 in l2.type && l2.type.defaultProps && (f2 = l2.type.defaultProps), u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : e2[r2] = void 0 === u2[r2] && void 0 !== f2 ? f2[r2] : u2[r2];
  return arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), d(l2.type, e2, i2 || l2.key, o2 || l2.ref, null);
}
n = s.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, b.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u2), this.props)), n2 && v(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x.__r = 0, e = 0;

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/isDOMElement.js
function isDOMElement(obj) {
  return (obj == null ? void 0 : obj.nodeType) === Node.ELEMENT_NODE;
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/findDOMElement.js
function findDOMElement(element, context) {
  if (context === void 0) {
    context = document;
  }
  if (typeof element === "string") {
    return context.querySelector(element);
  }
  if (isDOMElement(element)) {
    return element;
  }
  return null;
}

// node_modules/.pnpm/@uppy+utils@5.4.0/node_modules/@uppy/utils/lib/getTextDirection.js
function getTextDirection(element) {
  var _element;
  while (element && !element.dir) {
    element = element.parentNode;
  }
  return (_element = element) == null ? void 0 : _element.dir;
}
var getTextDirection_default = getTextDirection;

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/lib/UIPlugin.js
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
function debounce(fn) {
  let calling = null;
  let latestArgs = null;
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(() => {
        calling = null;
        return fn(...latestArgs);
      });
    }
    return calling;
  };
}
var _updateUI = /* @__PURE__ */ _classPrivateFieldLooseKey3("updateUI");
var UIPlugin = class extends BasePlugin {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, _updateUI, {
      writable: true,
      value: void 0
    });
  }
  getTargetPlugin(target) {
    let targetPlugin;
    if (typeof target === "object" && target instanceof UIPlugin) {
      targetPlugin = target;
    } else if (typeof target === "function") {
      const Target = target;
      this.uppy.iteratePlugins((p2) => {
        if (p2 instanceof Target) {
          targetPlugin = p2;
        }
      });
    }
    return targetPlugin;
  }
  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   */
  mount(target, plugin) {
    const callerPluginName = plugin.id;
    const targetElement = findDOMElement(target);
    if (targetElement) {
      this.isTargetDOMEl = true;
      const uppyRootElement = document.createElement("div");
      uppyRootElement.classList.add("uppy-Root");
      _classPrivateFieldLooseBase3(this, _updateUI)[_updateUI] = debounce((state) => {
        if (!this.uppy.getPlugin(this.id))
          return;
        D(this.render(state), uppyRootElement);
        this.afterUpdate();
      });
      this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = "";
      }
      D(this.render(this.uppy.getState()), uppyRootElement);
      this.el = uppyRootElement;
      targetElement.appendChild(uppyRootElement);
      uppyRootElement.dir = this.opts.direction || getTextDirection_default(uppyRootElement) || "ltr";
      this.onMount();
      return this.el;
    }
    const targetPlugin = this.getTargetPlugin(target);
    if (targetPlugin) {
      this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
      return this.el;
    }
    this.uppy.log(`Not installing ${callerPluginName}`);
    let message = `Invalid target option given to ${callerPluginName}.`;
    if (typeof target === "function") {
      message += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.";
    } else {
      message += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.";
    }
    throw new Error(message);
  }
  update(state) {
    if (this.el != null) {
      var _classPrivateFieldLoo, _classPrivateFieldLoo2;
      (_classPrivateFieldLoo = (_classPrivateFieldLoo2 = _classPrivateFieldLooseBase3(this, _updateUI))[_updateUI]) == null ? void 0 : _classPrivateFieldLoo.call(_classPrivateFieldLoo2, state);
    }
  }
  unmount() {
    if (this.isTargetDOMEl) {
      var _this$el;
      (_this$el = this.el) == null ? void 0 : _this$el.remove();
    }
    this.onUnmount();
  }
  // eslint-disable-next-line class-methods-use-this
  onMount() {
  }
  // eslint-disable-next-line class-methods-use-this
  onUnmount() {
  }
};
var UIPlugin_default = UIPlugin;

export {
  l,
  y,
  _,
  k,
  b,
  S,
  F,
  nanoid,
  debugLogger,
  require_prettierBytes,
  Uppy_default,
  isDOMElement,
  getTextDirection_default,
  UIPlugin_default
};
//# sourceMappingURL=/build/_shared/chunk-7OMVVKH3.js.map
