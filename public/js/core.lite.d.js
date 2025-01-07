var a0_0x595514 = (function () {
    var _0x3bfc6e = true;
    return function (_0x13584d, _0x598f47) {
        var _0x349668 = _0x3bfc6e
            ? function () {
                  if (_0x598f47) {
                      var _0x3ad86c = _0x598f47.apply(_0x13584d, arguments);
                      _0x598f47 = null;
                      return _0x3ad86c;
                  }
              }
            : function () {};
        _0x3bfc6e = false;
        return _0x349668;
    };
})();
var a0_0x12491e = a0_0x595514(this, function () {
    return a0_0x12491e.toString().search("(((.+)+)+)+$").toString().constructor(a0_0x12491e).search("(((.+)+)+)+$");
});
a0_0x12491e();
(() => {
    var _0x2e4d95 = {
        0x1c8: (_0x73292b, _0x3f1faf) => {
            "use strict";

            var _0x3f6180 = {
                value: true,
            };
            Object.defineProperty(_0x3f1faf, "__esModule", _0x3f6180);
            var _0x53498b = (function () {
                function _0x3cf907(_0xabd340, _0x32ba51) {
                    if (undefined === _0xabd340) {
                        _0xabd340 = 0x0;
                    }
                    var _0x2c93bc = null == _0x32ba51 ? undefined : _0x32ba51.grow;
                    this.grow = _0x2c93bc ? (Number.isFinite(_0x2c93bc) ? (_0x2c93bc >> 0x3) + Number(_0x2c93bc % 0x8 != 0x0) : _0x2c93bc) : 0x0;
                    this.buffer = "number" == typeof _0xabd340 ? new Uint8Array((_0xabd340 >> 0x3) + Number(_0xabd340 % 0x8 != 0x0)) : _0xabd340;
                }
                var _0x207789 = {
                    get: function () {
                        return this.buffer.length << 0x3;
                    },
                    enumerable: false,
                    configurable: true,
                };
                Object.defineProperty(_0x3cf907.prototype, "length", _0x207789);
                _0x3cf907.prototype.get = function (_0xf08281) {
                    var _0x1a5b35 = _0xf08281 >> 0x3;
                    return _0x1a5b35 < this.buffer.length && !!(this.buffer[_0x1a5b35] & (0x80 >> _0xf08281 % 0x8));
                };
                _0x3cf907.prototype.set = function (_0x34d58f, _0x5e148e) {
                    if (undefined === _0x5e148e) {
                        _0x5e148e = true;
                    }
                    var _0x474cf7 = _0x34d58f >> 0x3;
                    if (_0x5e148e) {
                        if (_0x474cf7 >= this.buffer.length) {
                            var _0x456259 = Math.max(_0x474cf7 + 0x1, Math.min(0x2 * this.buffer.length, this.grow));
                            if (_0x456259 <= this.grow) {
                                var _0x1fe228 = new Uint8Array(_0x456259);
                                _0x1fe228.set(this.buffer);
                                this.buffer = _0x1fe228;
                            }
                        }
                        this.buffer[_0x474cf7] |= 0x80 >> _0x34d58f % 0x8;
                    } else if (_0x474cf7 < this.buffer.length) {
                        this.buffer[_0x474cf7] &= ~(0x80 >> _0x34d58f % 0x8);
                    }
                };
                _0x3cf907.prototype.setAll = function (_0x17263f, _0x45f161) {
                    if (undefined === _0x45f161) {
                        _0x45f161 = 0x0;
                    }
                    var _0x41c762 = Math.min(((_0x45f161 + _0x17263f.length) >> 0x3) + Number((_0x45f161 + _0x17263f.length) % 0x8 != 0x0), this.grow);
                    if (this.buffer.length < _0x41c762) {
                        var _0x4f023c = new Uint8Array(_0x41c762);
                        _0x4f023c.set(this.buffer);
                        this.buffer = _0x4f023c;
                    }
                    var _0x5cb025 = _0x45f161 >> 0x3;
                    var _0x2366ca = 0x80 >> _0x45f161 % 0x8;
                    for (var _0x5182d2 = 0x0; _0x5182d2 < _0x17263f.length; _0x5182d2++) {
                        if (_0x17263f[_0x5182d2]) {
                            this.buffer[_0x5cb025] |= _0x2366ca;
                        } else {
                            this.buffer[_0x5cb025] &= ~_0x2366ca;
                        }
                        if (0x1 === _0x2366ca) {
                            if ((_0x5cb025 += 0x1) >= this.buffer.length) {
                                break;
                            }
                            _0x2366ca = 0x80;
                        } else {
                            _0x2366ca >>= 0x1;
                        }
                    }
                };
                _0x3cf907.prototype.forEach = function (_0x4bc5dc, _0xd64e06, _0x372f8e) {
                    if (undefined === _0xd64e06) {
                        _0xd64e06 = 0x0;
                    }
                    if (undefined === _0x372f8e) {
                        _0x372f8e = 0x8 * this.buffer.length;
                    }
                    var _0x379f30 = _0xd64e06 >> 0x3;
                    var _0x4602d7 = 0x80 >> _0xd64e06 % 0x8;
                    for (var _0x44f961 = _0xd64e06; _0x44f961 < _0x372f8e; _0x44f961++) {
                        _0x4bc5dc(!!(this.buffer[_0x379f30] & _0x4602d7), _0x44f961);
                        if (0x1 === _0x4602d7) {
                            _0x379f30 += 0x1;
                            _0x4602d7 = 0x80;
                        } else {
                            _0x4602d7 >>= 0x1;
                        }
                    }
                };
                _0x3cf907.prototype.isEmpty = function () {
                    for (var _0x56c489 = 0x0; _0x56c489 < this.buffer.length; _0x56c489++) {
                        if (0x0 !== this.buffer[_0x56c489]) {
                            return false;
                        }
                    }
                    return true;
                };
                return _0x3cf907;
            })();
            _0x3f1faf["default"] = _0x53498b;
        },
        0x97: (_0x3fc1b5) => {
            var _0x597f7d = {
                utf8: {
                    stringToBytes: function (_0xac8513) {
                        return _0x597f7d.bin.stringToBytes(unescape(encodeURIComponent(_0xac8513)));
                    },
                    bytesToString: function (_0x6a79fe) {
                        return decodeURIComponent(escape(_0x597f7d.bin.bytesToString(_0x6a79fe)));
                    },
                },
                bin: {
                    stringToBytes: function (_0x2b9d22) {
                        var _0x178e1d = [];
                        for (var _0x4c635e = 0x0; _0x4c635e < _0x2b9d22.length; _0x4c635e++) {
                            _0x178e1d.push(0xff & _0x2b9d22.charCodeAt(_0x4c635e));
                        }
                        return _0x178e1d;
                    },
                    bytesToString: function (_0x4ed271) {
                        var _0x1a83b0 = [];
                        for (var _0x161802 = 0x0; _0x161802 < _0x4ed271.length; _0x161802++) {
                            _0x1a83b0.push(String.fromCharCode(_0x4ed271[_0x161802]));
                        }
                        return _0x1a83b0.join("");
                    },
                },
            };
            _0x3fc1b5.exports = _0x597f7d;
        },
        0x3ab: (_0x5878bb) => {
            var _0x4eb4e8;
            _0x4eb4e8 = {
                rotl: function (_0x4f9520, _0x5b8e54) {
                    return (_0x4f9520 << _0x5b8e54) | (_0x4f9520 >>> (0x20 - _0x5b8e54));
                },
                rotr: function (_0x4da712, _0x48275f) {
                    return (_0x4da712 << (0x20 - _0x48275f)) | (_0x4da712 >>> _0x48275f);
                },
                endian: function (_0x167374) {
                    if (_0x167374.constructor == Number) {
                        return (0xff00ff & ((_0x167374 << 0x8) | (_0x167374 >>> 24))) | (0xff00ff00 & ((_0x167374 << 0x18) | (_0x167374 >>> 8)));
                    }
                    for (var _0x3f16e9 = 0x0; _0x3f16e9 < _0x167374.length; _0x3f16e9++) {
                        _0x167374[_0x3f16e9] = _0x4eb4e8.endian(_0x167374[_0x3f16e9]);
                    }
                    return _0x167374;
                },
                randomBytes: function (_0x447d2f) {
                    for (var _0x400091 = []; _0x447d2f > 0x0; _0x447d2f--) {
                        _0x400091.push(Math.floor(0x100 * Math.random()));
                    }
                    return _0x400091;
                },
                bytesToWords: function (_0x2fd590) {
                    var _0x3f0fc8 = [];
                    var _0x402066 = 0x0;
                    for (var _0x9cab89 = 0x0; _0x402066 < _0x2fd590.length; _0x402066++, _0x9cab89 += 0x8) {
                        _0x3f0fc8[_0x9cab89 >>> 0x5] |= _0x2fd590[_0x402066] << (0x18 - (_0x9cab89 % 0x20));
                    }
                    return _0x3f0fc8;
                },
                wordsToBytes: function (_0x3925a6) {
                    var _0x13555a = [];
                    for (var _0x254a19 = 0x0; _0x254a19 < 0x20 * _0x3925a6.length; _0x254a19 += 0x8) {
                        _0x13555a.push((_0x3925a6[_0x254a19 >>> 0x5] >>> (0x18 - (_0x254a19 % 0x20))) & 0xff);
                    }
                    return _0x13555a;
                },
                bytesToHex: function (_0x493e58) {
                    var _0x5819fd = [];
                    for (var _0x20afe4 = 0x0; _0x20afe4 < _0x493e58.length; _0x20afe4++) {
                        _0x5819fd.push((_0x493e58[_0x20afe4] >>> 0x4).toString(0x10));
                        _0x5819fd.push((0xf & _0x493e58[_0x20afe4]).toString(0x10));
                    }
                    return _0x5819fd.join("");
                },
                hexToBytes: function (_0x5e4984) {
                    var _0x1542f3 = [];
                    for (var _0x179bf1 = 0x0; _0x179bf1 < _0x5e4984.length; _0x179bf1 += 0x2) {
                        _0x1542f3.push(parseInt(_0x5e4984.substr(_0x179bf1, 0x2), 0x10));
                    }
                    return _0x1542f3;
                },
                bytesToBase64: function (_0x47585b) {
                    var _0x52ae14 = [];
                    for (var _0x2af4f7 = 0x0; _0x2af4f7 < _0x47585b.length; _0x2af4f7 += 0x3) {
                        var _0x5b07c2 = (_0x47585b[_0x2af4f7] << 0x10) | (_0x47585b[_0x2af4f7 + 0x1] << 0x8) | _0x47585b[_0x2af4f7 + 0x2];
                        for (var _0x4130fc = 0x0; _0x4130fc < 0x4; _0x4130fc++) {
                            if (0x8 * _0x2af4f7 + 0x6 * _0x4130fc <= 0x8 * _0x47585b.length) {
                                _0x52ae14.push(
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((_0x5b07c2 >>> (0x6 * (0x3 - _0x4130fc))) & 0x3f)
                                );
                            } else {
                                _0x52ae14.push("=");
                            }
                        }
                    }
                    return _0x52ae14.join("");
                },
                base64ToBytes: function (_0x40f950) {
                    _0x40f950 = _0x40f950.replace(/[^A-Z0-9+\/]/gi, "");
                    var _0x5943a5 = [];
                    var _0x473b9a = 0x0;
                    for (var _0x2a0c85 = 0x0; _0x473b9a < _0x40f950.length; _0x2a0c85 = ++_0x473b9a % 0x4) {
                        if (0x0 != _0x2a0c85) {
                            _0x5943a5.push(
                                (("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x40f950.charAt(_0x473b9a - 0x1)) &
                                    (Math.pow(0x2, -0x2 * _0x2a0c85 + 0x8) - 0x1)) <<
                                    (0x2 * _0x2a0c85)) |
                                    ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x40f950.charAt(_0x473b9a)) >>>
                                        (0x6 - 0x2 * _0x2a0c85))
                            );
                        }
                    }
                    return _0x5943a5;
                },
            };
            _0x5878bb.exports = _0x4eb4e8;
        },
        0x341: (_0x3ea6d2, _0x1f04b8, _0x37bfd8) => {
            var _0x598edf = _0x37bfd8(0x25e);
            _0x1f04b8.formatArgs = function (_0x5ab799) {
                _0x5ab799[0x0] =
                    (this.useColors ? "%c" : "") +
                    this.namespace +
                    (this.useColors ? " %c" : " ") +
                    _0x5ab799[0x0] +
                    (this.useColors ? "%c " : " ") +
                    "+" +
                    _0x3ea6d2.exports.humanize(this.diff);
                if (!this.useColors) {
                    return;
                }
                const _0x55343e = "color: " + this.color;
                _0x5ab799.splice(0x1, 0x0, _0x55343e, "color: inherit");
                let _0x39fbd1 = 0x0;
                let _0x11718a = 0x0;
                _0x5ab799[0x0].replace(/%[a-zA-Z%]/g, (_0x1b22de) => {
                    if ("%%" !== _0x1b22de) {
                        _0x39fbd1++;
                        if ("%c" === _0x1b22de) {
                            _0x11718a = _0x39fbd1;
                        }
                    }
                });
                _0x5ab799.splice(_0x11718a, 0x0, _0x55343e);
            };
            _0x1f04b8.save = function (_0x49d7c6) {
                try {
                    if (_0x49d7c6) {
                        _0x1f04b8.storage.setItem("debug", _0x49d7c6);
                    } else {
                        _0x1f04b8.storage.removeItem("debug");
                    }
                } catch (_0x22f73a) {}
            };
            _0x1f04b8.load = function () {
                let _0x245f18;
                try {
                    _0x245f18 = _0x1f04b8.storage.getItem("debug");
                } catch (_0x1d7e90) {}
                if (!_0x245f18 && undefined !== _0x598edf && "env" in _0x598edf) {
                    _0x245f18 = _0x598edf.env.DEBUG;
                }
                return _0x245f18;
            };
            _0x1f04b8.useColors = function () {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) {
                    return true;
                }
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
                    return false;
                }
                let _0x260349;
                return (
                    ("undefined" != typeof document &&
                        document.documentElement &&
                        document.documentElement.style &&
                        document.documentElement.style.WebkitAppearance) ||
                    ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                    ("undefined" != typeof navigator &&
                        navigator.userAgent &&
                        (_0x260349 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
                        parseInt(_0x260349[0x1], 0xa) >= 0x1f) ||
                    ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                );
            };
            _0x1f04b8.storage = (function () {
                try {
                    return localStorage;
                } catch (_0x1257e9) {}
            })();
            _0x1f04b8.destroy = (() => {
                let _0xb885bd = false;
                return () => {
                    if (!_0xb885bd) {
                        _0xb885bd = true;
                        console.warn(
                            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                        );
                    }
                };
            })();
            _0x1f04b8.colors = [
                "#0000CC",
                "#0000FF",
                "#0033CC",
                "#0033FF",
                "#0066CC",
                "#0066FF",
                "#0099CC",
                "#0099FF",
                "#00CC00",
                "#00CC33",
                "#00CC66",
                "#00CC99",
                "#00CCCC",
                "#00CCFF",
                "#3300CC",
                "#3300FF",
                "#3333CC",
                "#3333FF",
                "#3366CC",
                "#3366FF",
                "#3399CC",
                "#3399FF",
                "#33CC00",
                "#33CC33",
                "#33CC66",
                "#33CC99",
                "#33CCCC",
                "#33CCFF",
                "#6600CC",
                "#6600FF",
                "#6633CC",
                "#6633FF",
                "#66CC00",
                "#66CC33",
                "#9900CC",
                "#9900FF",
                "#9933CC",
                "#9933FF",
                "#99CC00",
                "#99CC33",
                "#CC0000",
                "#CC0033",
                "#CC0066",
                "#CC0099",
                "#CC00CC",
                "#CC00FF",
                "#CC3300",
                "#CC3333",
                "#CC3366",
                "#CC3399",
                "#CC33CC",
                "#CC33FF",
                "#CC6600",
                "#CC6633",
                "#CC9900",
                "#CC9933",
                "#CCCC00",
                "#CCCC33",
                "#FF0000",
                "#FF0033",
                "#FF0066",
                "#FF0099",
                "#FF00CC",
                "#FF00FF",
                "#FF3300",
                "#FF3333",
                "#FF3366",
                "#FF3399",
                "#FF33CC",
                "#FF33FF",
                "#FF6600",
                "#FF6633",
                "#FF9900",
                "#FF9933",
                "#FFCC00",
                "#FFCC33",
            ];
            _0x1f04b8.log = console.debug || console.log || (() => {});
            _0x3ea6d2.exports = _0x37bfd8(0x2e0)(_0x1f04b8);
            const { formatters: _0x245cc4 } = _0x3ea6d2.exports;
            _0x245cc4.j = function (_0x261cf4) {
                try {
                    return JSON.stringify(_0x261cf4);
                } catch (_0x2b99bd) {
                    return "[UnexpectedJSONParseError]: " + _0x2b99bd.message;
                }
            };
        },
        0x2e0: (_0x4b31f9, _0x5d1f56, _0x584aa3) => {
            _0x4b31f9.exports = function (_0x68283d) {
                function _0x4c70a1(_0x14dd09) {
                    let _0x500fb1;
                    let _0x1b2584;
                    let _0x245cd3;
                    let _0x45a2bb = null;
                    function _0x59c75d(..._0x20207e) {
                        if (!_0x59c75d.enabled) {
                            return;
                        }
                        const _0x1ecc80 = Number(new Date());
                        const _0x5473fb = _0x1ecc80 - (_0x500fb1 || _0x1ecc80);
                        _0x59c75d.diff = _0x5473fb;
                        _0x59c75d.prev = _0x500fb1;
                        _0x59c75d.curr = _0x1ecc80;
                        _0x500fb1 = _0x1ecc80;
                        _0x20207e[0x0] = _0x4c70a1.coerce(_0x20207e[0x0]);
                        if ("string" != typeof _0x20207e[0x0]) {
                            _0x20207e.unshift("%O");
                        }
                        let _0x5bcf22 = 0x0;
                        _0x20207e[0x0] = _0x20207e[0x0].replace(/%([a-zA-Z%])/g, (_0x286c66, _0x3f0525) => {
                            if ("%%" === _0x286c66) {
                                return "%";
                            }
                            _0x5bcf22++;
                            const _0x124590 = _0x4c70a1.formatters[_0x3f0525];
                            if ("function" == typeof _0x124590) {
                                const _0x244e80 = _0x20207e[_0x5bcf22];
                                _0x286c66 = _0x124590.call(_0x59c75d, _0x244e80);
                                _0x20207e.splice(_0x5bcf22, 0x1);
                                _0x5bcf22--;
                            }
                            return _0x286c66;
                        });
                        _0x4c70a1.formatArgs.call(_0x59c75d, _0x20207e);
                        (_0x59c75d.log || _0x4c70a1.log).apply(_0x59c75d, _0x20207e);
                    }
                    _0x59c75d.namespace = _0x14dd09;
                    _0x59c75d.useColors = _0x4c70a1.useColors();
                    _0x59c75d.color = _0x4c70a1.selectColor(_0x14dd09);
                    _0x59c75d.extend = _0x281df2;
                    _0x59c75d.destroy = _0x4c70a1.destroy;
                    Object.defineProperty(_0x59c75d, "enabled", {
                        enumerable: true,
                        configurable: false,
                        get: () =>
                            null !== _0x45a2bb
                                ? _0x45a2bb
                                : (_0x1b2584 !== _0x4c70a1.namespaces && ((_0x1b2584 = _0x4c70a1.namespaces), (_0x245cd3 = _0x4c70a1.enabled(_0x14dd09))),
                                  _0x245cd3),
                        set: (_0x3228f1) => {
                            _0x45a2bb = _0x3228f1;
                        },
                    });
                    if ("function" == typeof _0x4c70a1.init) {
                        _0x4c70a1.init(_0x59c75d);
                    }
                    return _0x59c75d;
                }
                function _0x281df2(_0x479fe8, _0x536605) {
                    const _0x1e212c = _0x4c70a1(this.namespace + (undefined === _0x536605 ? ":" : _0x536605) + _0x479fe8);
                    _0x1e212c.log = this.log;
                    return _0x1e212c;
                }
                function _0x14a9c2(_0xd7d075) {
                    return _0xd7d075
                        .toString()
                        .substring(0x2, _0xd7d075.toString().length - 0x2)
                        .replace(/\.\*\?$/, "*");
                }
                _0x4c70a1.debug = _0x4c70a1;
                _0x4c70a1["default"] = _0x4c70a1;
                _0x4c70a1.coerce = function (_0x211b7a) {
                    return _0x211b7a instanceof Error ? _0x211b7a.stack || _0x211b7a.message : _0x211b7a;
                };
                _0x4c70a1.disable = function () {
                    const _0x22e43c = [..._0x4c70a1.names.map(_0x14a9c2), ..._0x4c70a1.skips.map(_0x14a9c2).map((_0x1b8563) => "-" + _0x1b8563)].join(",");
                    _0x4c70a1.enable("");
                    return _0x22e43c;
                };
                _0x4c70a1.enable = function (_0x32a7c1) {
                    let _0x5199ef;
                    _0x4c70a1.save(_0x32a7c1);
                    _0x4c70a1.namespaces = _0x32a7c1;
                    _0x4c70a1.names = [];
                    _0x4c70a1.skips = [];
                    const _0xb8b74e = ("string" == typeof _0x32a7c1 ? _0x32a7c1 : "").split(/[\s,]+/);
                    const _0x132b04 = _0xb8b74e.length;
                    for (_0x5199ef = 0x0; _0x5199ef < _0x132b04; _0x5199ef++) {
                        if (_0xb8b74e[_0x5199ef]) {
                            if ("-" === (_0x32a7c1 = _0xb8b74e[_0x5199ef].replace(/\*/g, ".*?"))[0x0]) {
                                _0x4c70a1.skips.push(new RegExp("^" + _0x32a7c1.slice(0x1) + "$"));
                            } else {
                                _0x4c70a1.names.push(new RegExp("^" + _0x32a7c1 + "$"));
                            }
                        }
                    }
                };
                _0x4c70a1.enabled = function (_0x287036) {
                    if ("*" === _0x287036[_0x287036.length - 0x1]) {
                        return true;
                    }
                    let _0x510c1b;
                    let _0x40a4ee;
                    _0x510c1b = 0x0;
                    for (_0x40a4ee = _0x4c70a1.skips.length; _0x510c1b < _0x40a4ee; _0x510c1b++) {
                        if (_0x4c70a1.skips[_0x510c1b].test(_0x287036)) {
                            return false;
                        }
                    }
                    _0x510c1b = 0x0;
                    for (_0x40a4ee = _0x4c70a1.names.length; _0x510c1b < _0x40a4ee; _0x510c1b++) {
                        if (_0x4c70a1.names[_0x510c1b].test(_0x287036)) {
                            return true;
                        }
                    }
                    return false;
                };
                _0x4c70a1.humanize = _0x584aa3(0x249);
                _0x4c70a1.destroy = function () {
                    console.warn(
                        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                    );
                };
                Object.keys(_0x68283d).forEach((_0x1950af) => {
                    _0x4c70a1[_0x1950af] = _0x68283d[_0x1950af];
                });
                _0x4c70a1.names = [];
                _0x4c70a1.skips = [];
                _0x4c70a1.formatters = {};
                _0x4c70a1.selectColor = function (_0x15c56e) {
                    let _0x41c52f = 0x0;
                    for (let _0xf5b150 = 0x0; _0xf5b150 < _0x15c56e.length; _0xf5b150++) {
                        _0x41c52f = (_0x41c52f << 0x5) - _0x41c52f + _0x15c56e.charCodeAt(_0xf5b150);
                        _0x41c52f |= 0x0;
                    }
                    return _0x4c70a1.colors[Math.abs(_0x41c52f) % _0x4c70a1.colors.length];
                };
                _0x4c70a1.enable(_0x4c70a1.load());
                return _0x4c70a1;
            };
        },
        0xce: (_0x5bdeb4) => {
            _0x5bdeb4.exports = function (_0x4bb5b0) {
                return (
                    null != _0x4bb5b0 &&
                    ((!!_0x4bb5b0.constructor && "function" == typeof _0x4bb5b0.constructor.isBuffer && _0x4bb5b0.constructor.isBuffer(_0x4bb5b0)) ||
                        (function (_0x1442d1) {
                            return (
                                "function" == typeof _0x1442d1.readFloatLE &&
                                "function" == typeof _0x1442d1.slice &&
                                !!_0x1442d1.slice(0x0, 0x0).constructor &&
                                "function" == typeof _0x1442d1.slice(0x0, 0x0).constructor.isBuffer &&
                                _0x1442d1.slice(0x0, 0x0).constructor.isBuffer(_0x1442d1.slice(0x0, 0x0))
                            );
                        })(_0x4bb5b0) ||
                        !!_0x4bb5b0._isBuffer)
                );
            };
        },
        0x1f7: (_0x1c4806, _0x707ab, _0xb6be75) => {
            var _0x4f8ebb;
            var _0x1d6fd9;
            var _0x4eb474;
            var _0x4bb8e8;
            var _0x513dc4;
            _0x4f8ebb = _0xb6be75(0x3ab);
            _0x1d6fd9 = _0xb6be75(0x97).utf8;
            _0x4eb474 = _0xb6be75(0xce);
            _0x4bb8e8 = _0xb6be75(0x97).bin;
            (_0x513dc4 = function (_0x16617f, _0x24c372) {
                if (_0x16617f.constructor == String) {
                    _0x16617f = _0x24c372 && "binary" === _0x24c372.encoding ? _0x4bb8e8.stringToBytes(_0x16617f) : _0x1d6fd9.stringToBytes(_0x16617f);
                } else if (_0x4eb474(_0x16617f)) {
                    _0x16617f = Array.prototype.slice.call(_0x16617f, 0x0);
                } else if (!(Array.isArray(_0x16617f) || _0x16617f.constructor === Uint8Array)) {
                    _0x16617f = _0x16617f.toString();
                }
                var _0x1dbfb0 = _0x4f8ebb.bytesToWords(_0x16617f);
                var _0x515f1f = 0x8 * _0x16617f.length;
                var _0x477121 = 0x67452301;
                var _0x149243 = -0x10325477;
                var _0x5b20ed = -0x67452302;
                var _0x21acb7 = 0x10325476;
                for (var _0x2a63b5 = 0x0; _0x2a63b5 < _0x1dbfb0.length; _0x2a63b5++) {
                    _0x1dbfb0[_0x2a63b5] =
                        (0xff00ff & ((_0x1dbfb0[_0x2a63b5] << 0x8) | (_0x1dbfb0[_0x2a63b5] >>> 0x18))) |
                        (0xff00ff00 & ((_0x1dbfb0[_0x2a63b5] << 0x18) | (_0x1dbfb0[_0x2a63b5] >>> 0x8)));
                }
                _0x1dbfb0[_0x515f1f >>> 0x5] |= 0x80 << _0x515f1f % 0x20;
                _0x1dbfb0[0xe + (((_0x515f1f + 0x40) >>> 0x9) << 0x4)] = _0x515f1f;
                var _0x548e4f = _0x513dc4._ff;
                var _0x1af648 = _0x513dc4._gg;
                var _0x93e89c = _0x513dc4._hh;
                var _0x3ff52a = _0x513dc4._ii;
                for (_0x2a63b5 = 0x0; _0x2a63b5 < _0x1dbfb0.length; _0x2a63b5 += 0x10) {
                    var _0x16257a = _0x477121;
                    var _0x4becf1 = _0x149243;
                    var _0x546906 = _0x5b20ed;
                    var _0x1ed7d3 = _0x21acb7;
                    _0x477121 = _0x548e4f(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x0], 0x7, -0x28955b88);
                    _0x21acb7 = _0x548e4f(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x1], 0xc, -0x173848aa);
                    _0x5b20ed = _0x548e4f(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x2], 0x11, 0x242070db);
                    _0x149243 = _0x548e4f(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x3], 0x16, -0x3e423112);
                    _0x477121 = _0x548e4f(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x4], 0x7, -0xa83f051);
                    _0x21acb7 = _0x548e4f(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x5], 0xc, 0x4787c62a);
                    _0x5b20ed = _0x548e4f(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x6], 0x11, -0x57cfb9ed);
                    _0x149243 = _0x548e4f(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x7], 0x16, -0x2b96aff);
                    _0x477121 = _0x548e4f(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x8], 0x7, 0x698098d8);
                    _0x21acb7 = _0x548e4f(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x9], 0xc, -0x74bb0851);
                    _0x5b20ed = _0x548e4f(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xa], 0x11, -0xa44f);
                    _0x149243 = _0x548e4f(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0xb], 0x16, -0x76a32842);
                    _0x477121 = _0x548e4f(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0xc], 0x7, 0x6b901122);
                    _0x21acb7 = _0x548e4f(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0xd], 0xc, -0x2678e6d);
                    _0x5b20ed = _0x548e4f(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xe], 0x11, -0x5986bc72);
                    _0x477121 = _0x1af648(
                        _0x477121,
                        (_0x149243 = _0x548e4f(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0xf], 0x16, 0x49b40821)),
                        _0x5b20ed,
                        _0x21acb7,
                        _0x1dbfb0[_0x2a63b5 + 0x1],
                        0x5,
                        -0x9e1da9e
                    );
                    _0x21acb7 = _0x1af648(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x6], 0x9, -0x3fbf4cc0);
                    _0x5b20ed = _0x1af648(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xb], 0xe, 0x265e5a51);
                    _0x149243 = _0x1af648(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x0], 0x14, -0x16493856);
                    _0x477121 = _0x1af648(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x5], 0x5, -0x29d0efa3);
                    _0x21acb7 = _0x1af648(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0xa], 0x9, 0x2441453);
                    _0x5b20ed = _0x1af648(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xf], 0xe, -0x275e197f);
                    _0x149243 = _0x1af648(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x4], 0x14, -0x182c0438);
                    _0x477121 = _0x1af648(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x9], 0x5, 0x21e1cde6);
                    _0x21acb7 = _0x1af648(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0xe], 0x9, -0x3cc8f82a);
                    _0x5b20ed = _0x1af648(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x3], 0xe, -0xb2af279);
                    _0x149243 = _0x1af648(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x8], 0x14, 0x455a14ed);
                    _0x477121 = _0x1af648(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0xd], 0x5, -0x561c16fb);
                    _0x21acb7 = _0x1af648(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x2], 0x9, -0x3105c08);
                    _0x5b20ed = _0x1af648(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x7], 0xe, 0x676f02d9);
                    _0x477121 = _0x93e89c(
                        _0x477121,
                        (_0x149243 = _0x1af648(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0xc], 0x14, -0x72d5b376)),
                        _0x5b20ed,
                        _0x21acb7,
                        _0x1dbfb0[_0x2a63b5 + 0x5],
                        0x4,
                        -0x5c6be
                    );
                    _0x21acb7 = _0x93e89c(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x8], 0xb, -0x788e097f);
                    _0x5b20ed = _0x93e89c(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xb], 0x10, 0x6d9d6122);
                    _0x149243 = _0x93e89c(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0xe], 0x17, -0x21ac7f4);
                    _0x477121 = _0x93e89c(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x1], 0x4, -0x5b4115bc);
                    _0x21acb7 = _0x93e89c(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x4], 0xb, 0x4bdecfa9);
                    _0x5b20ed = _0x93e89c(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x7], 0x10, -0x944b4a0);
                    _0x149243 = _0x93e89c(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0xa], 0x17, -0x41404390);
                    _0x477121 = _0x93e89c(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0xd], 0x4, 0x289b7ec6);
                    _0x21acb7 = _0x93e89c(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x0], 0xb, -0x155ed806);
                    _0x5b20ed = _0x93e89c(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x3], 0x10, -0x2b10cf7b);
                    _0x149243 = _0x93e89c(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x6], 0x17, 0x4881d05);
                    _0x477121 = _0x93e89c(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x9], 0x4, -0x262b2fc7);
                    _0x21acb7 = _0x93e89c(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0xc], 0xb, -0x1924661b);
                    _0x5b20ed = _0x93e89c(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xf], 0x10, 0x1fa27cf8);
                    _0x477121 = _0x3ff52a(
                        _0x477121,
                        (_0x149243 = _0x93e89c(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x2], 0x17, -0x3b53a99b)),
                        _0x5b20ed,
                        _0x21acb7,
                        _0x1dbfb0[_0x2a63b5 + 0x0],
                        0x6,
                        -0xbd6ddbc
                    );
                    _0x21acb7 = _0x3ff52a(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x7], 0xa, 0x432aff97);
                    _0x5b20ed = _0x3ff52a(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xe], 0xf, -0x546bdc59);
                    _0x149243 = _0x3ff52a(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x5], 0x15, -0x36c5fc7);
                    _0x477121 = _0x3ff52a(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0xc], 0x6, 0x655b59c3);
                    _0x21acb7 = _0x3ff52a(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0x3], 0xa, -0x70f3336e);
                    _0x5b20ed = _0x3ff52a(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0xa], 0xf, -0x100b83);
                    _0x149243 = _0x3ff52a(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x1], 0x15, -0x7a7ba22f);
                    _0x477121 = _0x3ff52a(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x8], 0x6, 0x6fa87e4f);
                    _0x21acb7 = _0x3ff52a(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0xf], 0xa, -0x1d31920);
                    _0x5b20ed = _0x3ff52a(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x6], 0xf, -0x5cfebcec);
                    _0x149243 = _0x3ff52a(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0xd], 0x15, 0x4e0811a1);
                    _0x477121 = _0x3ff52a(_0x477121, _0x149243, _0x5b20ed, _0x21acb7, _0x1dbfb0[_0x2a63b5 + 0x4], 0x6, -0x8ac817e);
                    _0x21acb7 = _0x3ff52a(_0x21acb7, _0x477121, _0x149243, _0x5b20ed, _0x1dbfb0[_0x2a63b5 + 0xb], 0xa, -0x42c50dcb);
                    _0x5b20ed = _0x3ff52a(_0x5b20ed, _0x21acb7, _0x477121, _0x149243, _0x1dbfb0[_0x2a63b5 + 0x2], 0xf, 0x2ad7d2bb);
                    _0x149243 = _0x3ff52a(_0x149243, _0x5b20ed, _0x21acb7, _0x477121, _0x1dbfb0[_0x2a63b5 + 0x9], 0x15, -0x14792c6f);
                    _0x477121 = (_0x477121 + _0x16257a) >>> 0x0;
                    _0x149243 = (_0x149243 + _0x4becf1) >>> 0x0;
                    _0x5b20ed = (_0x5b20ed + _0x546906) >>> 0x0;
                    _0x21acb7 = (_0x21acb7 + _0x1ed7d3) >>> 0x0;
                }
                return _0x4f8ebb.endian([_0x477121, _0x149243, _0x5b20ed, _0x21acb7]);
            })._ff = function (_0x2efd18, _0x206ac5, _0x49039d, _0x1fbebb, _0x285700, _0x199a66, _0x38e090) {
                var _0x19b334 = _0x2efd18 + ((_0x206ac5 & _0x49039d) | (~_0x206ac5 & _0x1fbebb)) + (_0x285700 >>> 0x0) + _0x38e090;
                return ((_0x19b334 << _0x199a66) | (_0x19b334 >>> (0x20 - _0x199a66))) + _0x206ac5;
            };
            _0x513dc4._gg = function (_0x22849e, _0x27c73b, _0x1b8a37, _0x4ffb7b, _0x12ec0f, _0x2af4c0, _0x2cd1af) {
                var _0x398437 = _0x22849e + ((_0x27c73b & _0x4ffb7b) | (_0x1b8a37 & ~_0x4ffb7b)) + (_0x12ec0f >>> 0x0) + _0x2cd1af;
                return ((_0x398437 << _0x2af4c0) | (_0x398437 >>> (0x20 - _0x2af4c0))) + _0x27c73b;
            };
            _0x513dc4._hh = function (_0x1742a7, _0xdf1911, _0x96c402, _0x404065, _0x432c2b, _0x48eace, _0x3d3f4f) {
                var _0x51f307 = _0x1742a7 + (_0xdf1911 ^ _0x96c402 ^ _0x404065) + (_0x432c2b >>> 0x0) + _0x3d3f4f;
                return ((_0x51f307 << _0x48eace) | (_0x51f307 >>> (0x20 - _0x48eace))) + _0xdf1911;
            };
            _0x513dc4._ii = function (_0x1c97e2, _0x4567e8, _0xaf1f84, _0x4f089f, _0x2a9b4e, _0x2b5cb2, _0x9b5b79) {
                var _0x1c4bf8 = _0x1c97e2 + (_0xaf1f84 ^ (_0x4567e8 | ~_0x4f089f)) + (_0x2a9b4e >>> 0x0) + _0x9b5b79;
                return ((_0x1c4bf8 << _0x2b5cb2) | (_0x1c4bf8 >>> (0x20 - _0x2b5cb2))) + _0x4567e8;
            };
            _0x513dc4._blocksize = 0x10;
            _0x513dc4._digestsize = 0x10;
            _0x1c4806.exports = function (_0x21458f, _0x8180b8) {
                if (null == _0x21458f) {
                    throw new Error("Illegal argument " + _0x21458f);
                }
                var _0x3e04d2 = _0x4f8ebb.wordsToBytes(_0x513dc4(_0x21458f, _0x8180b8));
                return _0x8180b8 && _0x8180b8.asBytes
                    ? _0x3e04d2
                    : _0x8180b8 && _0x8180b8.asString
                    ? _0x4bb8e8.bytesToString(_0x3e04d2)
                    : _0x4f8ebb.bytesToHex(_0x3e04d2);
            };
        },
        0x35e: (_0x2e0f2d, _0x7a7ac1, _0x36634a) => {
            _0x2e0f2d.exports = _0x11f911;
            const _0x5f4e7c = _0x36634a(0x254);
            function _0x11f911(_0x46744c, _0x53a66d) {
                if (!(this instanceof _0x11f911)) {
                    return new _0x11f911(_0x46744c, _0x53a66d);
                }
                if (!_0x53a66d) {
                    _0x53a66d = {};
                }
                this.chunkLength = Number(_0x46744c);
                if (!this.chunkLength) {
                    throw new Error("First argument must be a chunk length");
                }
                this.chunks = [];
                this.closed = false;
                this.length = Number(_0x53a66d.length) || Infinity;
                if (this.length !== Infinity) {
                    this.lastChunkLength = this.length % this.chunkLength || this.chunkLength;
                    this.lastChunkIndex = Math.ceil(this.length / this.chunkLength) - 0x1;
                }
            }
            _0x11f911.prototype.put = function (_0x3a2198, _0x44da1c, _0x53a0ab = () => {}) {
                if (this.closed) {
                    return _0x5f4e7c(() => _0x53a0ab(new Error("Storage is closed")));
                }
                const _0x45b260 = _0x3a2198 === this.lastChunkIndex;
                return _0x45b260 && _0x44da1c.length !== this.lastChunkLength
                    ? _0x5f4e7c(() => _0x53a0ab(new Error("Last chunk length must be " + this.lastChunkLength)))
                    : _0x45b260 || _0x44da1c.length === this.chunkLength
                    ? ((this.chunks[_0x3a2198] = _0x44da1c), void _0x5f4e7c(() => _0x53a0ab(null)))
                    : _0x5f4e7c(() => _0x53a0ab(new Error("Chunk length must be " + this.chunkLength)));
            };
            _0x11f911.prototype.get = function (_0x368ba4, _0x5c0115, _0x55e44f = () => {}) {
                if ("function" == typeof _0x5c0115) {
                    return this.get(_0x368ba4, null, _0x5c0115);
                }
                if (this.closed) {
                    return _0x5f4e7c(() => _0x55e44f(new Error("Storage is closed")));
                }
                let _0x4ab2fa = this.chunks[_0x368ba4];
                if (!_0x4ab2fa) {
                    const _0xf573c6 = new Error("Chunk not found");
                    _0xf573c6.notFound = true;
                    return _0x5f4e7c(() => _0x55e44f(_0xf573c6));
                }
                if (!_0x5c0115) {
                    _0x5c0115 = {};
                }
                const _0xee52db = _0x5c0115.offset || 0x0;
                const _0x3aa17 = _0x5c0115.length || _0x4ab2fa.length - _0xee52db;
                if (!(0x0 === _0xee52db && _0x3aa17 === _0x4ab2fa.length)) {
                    _0x4ab2fa = _0x4ab2fa.slice(_0xee52db, _0x3aa17 + _0xee52db);
                }
                _0x5f4e7c(() => _0x55e44f(null, _0x4ab2fa));
            };
            _0x11f911.prototype.close = _0x11f911.prototype.destroy = function (_0x1663cd = () => {}) {
                if (this.closed) {
                    return _0x5f4e7c(() => _0x1663cd(new Error("Storage is closed")));
                }
                this.closed = true;
                this.chunks = null;
                _0x5f4e7c(() => _0x1663cd(null));
            };
        },
        0x389: (_0x270352, _0x3644a2) => {
            var _0x18cd71;
            var _0xd28187;
            _0x18cd71 = new Date();
            _0xd28187 = 0x4;
            var _0x5a6c18 = {
                setLogLevel: function (_0x279c6b) {
                    _0xd28187 = _0x279c6b == this.debug ? 0x1 : _0x279c6b == this.info ? 0x2 : _0x279c6b == this.warn ? 0x3 : (this.error, 0x4);
                },
                debug: function (_0x5eda9f, _0x14f757) {
                    if (undefined === console.debug) {
                        console.debug = console.log;
                    }
                    if (0x1 >= _0xd28187) {
                        console.debug("[" + _0x5a6c18.getDurationString(new Date() - _0x18cd71, 0x3e8) + "]", "[" + _0x5eda9f + "]", _0x14f757);
                    }
                },
                log: function (_0x22aa8a, _0x2a597f) {
                    this.debug(_0x22aa8a.msg);
                },
                info: function (_0x1b08e9, _0x2a0594) {
                    if (0x2 >= _0xd28187) {
                        console.info("[" + _0x5a6c18.getDurationString(new Date() - _0x18cd71, 0x3e8) + "]", "[" + _0x1b08e9 + "]", _0x2a0594);
                    }
                },
                warn: function (_0xbc663a, _0xf0de58) {
                    if (0x3 >= _0xd28187) {
                        console.warn("[" + _0x5a6c18.getDurationString(new Date() - _0x18cd71, 0x3e8) + "]", "[" + _0xbc663a + "]", _0xf0de58);
                    }
                },
                error: function (_0xec9bad, _0x33e9c4) {
                    if (0x4 >= _0xd28187) {
                        console.error("[" + _0x5a6c18.getDurationString(new Date() - _0x18cd71, 0x3e8) + "]", "[" + _0xec9bad + "]", _0x33e9c4);
                    }
                },
            };
            _0x5a6c18.getDurationString = function (_0x391302, _0x384f7c) {
                var _0x163ef8;
                function _0x2e6d95(_0xa71662, _0x46d398) {
                    for (var _0x31628b = ("" + _0xa71662).split("."); _0x31628b[0x0].length < _0x46d398; ) {
                        _0x31628b[0x0] = "0" + _0x31628b[0x0];
                    }
                    return _0x31628b.join(".");
                }
                if (_0x391302 < 0x0) {
                    _0x163ef8 = true;
                    _0x391302 = -_0x391302;
                } else {
                    _0x163ef8 = false;
                }
                var _0x5eb6dc = _0x391302 / (_0x384f7c || 0x1);
                var _0xb20d16 = Math.floor(_0x5eb6dc / 0xe10);
                _0x5eb6dc -= 0xe10 * _0xb20d16;
                var _0x501550 = Math.floor(_0x5eb6dc / 0x3c);
                var _0x44ec98 = 0x3e8 * (_0x5eb6dc -= 0x3c * _0x501550);
                _0x44ec98 -= 0x3e8 * (_0x5eb6dc = Math.floor(_0x5eb6dc));
                _0x44ec98 = Math.floor(_0x44ec98);
                return (_0x163ef8 ? "-" : "") + _0xb20d16 + ":" + _0x2e6d95(_0x501550, 0x2) + ":" + _0x2e6d95(_0x5eb6dc, 0x2) + "." + _0x2e6d95(_0x44ec98, 0x3);
            };
            _0x5a6c18.printRanges = function (_0x442751) {
                var _0x3df6b7 = _0x442751.length;
                if (_0x3df6b7 > 0x0) {
                    var _0x2f6d2e = "";
                    for (var _0x2f7a37 = 0x0; _0x2f7a37 < _0x3df6b7; _0x2f7a37++) {
                        if (_0x2f7a37 > 0x0) {
                            _0x2f6d2e += ",";
                        }
                        _0x2f6d2e +=
                            "[" + _0x5a6c18.getDurationString(_0x442751.start(_0x2f7a37)) + "," + _0x5a6c18.getDurationString(_0x442751.end(_0x2f7a37)) + "]";
                    }
                    return _0x2f6d2e;
                }
                return "(empty)";
            };
            _0x3644a2.Log = _0x5a6c18;
            var _0x3934a9 = function (_0x29217c) {
                if (!(_0x29217c instanceof ArrayBuffer)) {
                    throw "Needs an array buffer";
                }
                this.buffer = _0x29217c;
                this.dataview = new DataView(_0x29217c);
                this.position = 0x0;
            };
            _0x3934a9.prototype.getPosition = function () {
                return this.position;
            };
            _0x3934a9.prototype.getEndPosition = function () {
                return this.buffer.byteLength;
            };
            _0x3934a9.prototype.getLength = function () {
                return this.buffer.byteLength;
            };
            _0x3934a9.prototype.seek = function (_0x46f3e8) {
                var _0x2eec3d = Math.max(0x0, Math.min(this.buffer.byteLength, _0x46f3e8));
                this.position = isNaN(_0x2eec3d) || !isFinite(_0x2eec3d) ? 0x0 : _0x2eec3d;
                return true;
            };
            _0x3934a9.prototype.isEos = function () {
                return this.getPosition() >= this.getEndPosition();
            };
            _0x3934a9.prototype.readAnyInt = function (_0x389cce, _0x3d2ab0) {
                var _0x183f29 = 0x0;
                if (this.position + _0x389cce <= this.buffer.byteLength) {
                    switch (_0x389cce) {
                        case 0x1:
                            _0x183f29 = _0x3d2ab0 ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                            break;
                        case 0x2:
                            _0x183f29 = _0x3d2ab0 ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                            break;
                        case 0x3:
                            if (_0x3d2ab0) {
                                throw "No method for reading signed 24 bits values";
                            }
                            _0x183f29 = this.dataview.getUint8(this.position) << 0x10;
                            _0x183f29 |= this.dataview.getUint8(this.position + 0x1) << 0x8;
                            _0x183f29 |= this.dataview.getUint8(this.position + 0x2);
                            break;
                        case 0x4:
                            _0x183f29 = _0x3d2ab0 ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                            break;
                        case 0x8:
                            if (_0x3d2ab0) {
                                throw "No method for reading signed 64 bits values";
                            }
                            _0x183f29 = this.dataview.getUint32(this.position) << 0x20;
                            _0x183f29 |= this.dataview.getUint32(this.position + 0x4);
                            break;
                        default:
                            throw "readInt method not implemented for size: " + _0x389cce;
                    }
                    this.position += _0x389cce;
                    return _0x183f29;
                }
                throw "Not enough bytes in buffer";
            };
            _0x3934a9.prototype.readUint8 = function () {
                return this.readAnyInt(0x1, false);
            };
            _0x3934a9.prototype.readUint16 = function () {
                return this.readAnyInt(0x2, false);
            };
            _0x3934a9.prototype.readUint24 = function () {
                return this.readAnyInt(0x3, false);
            };
            _0x3934a9.prototype.readUint32 = function () {
                return this.readAnyInt(0x4, false);
            };
            _0x3934a9.prototype.readUint64 = function () {
                return this.readAnyInt(0x8, false);
            };
            _0x3934a9.prototype.readString = function (_0x374832) {
                if (this.position + _0x374832 <= this.buffer.byteLength) {
                    var _0x5491df = "";
                    for (var _0x407b0e = 0x0; _0x407b0e < _0x374832; _0x407b0e++) {
                        _0x5491df += String.fromCharCode(this.readUint8());
                    }
                    return _0x5491df;
                }
                throw "Not enough bytes in buffer";
            };
            _0x3934a9.prototype.readCString = function () {
                for (var _0xedaed5 = []; ; ) {
                    var _0x110b9f = this.readUint8();
                    if (0x0 === _0x110b9f) {
                        break;
                    }
                    _0xedaed5.push(_0x110b9f);
                }
                return String.fromCharCode.apply(null, _0xedaed5);
            };
            _0x3934a9.prototype.readInt8 = function () {
                return this.readAnyInt(0x1, true);
            };
            _0x3934a9.prototype.readInt16 = function () {
                return this.readAnyInt(0x2, true);
            };
            _0x3934a9.prototype.readInt32 = function () {
                return this.readAnyInt(0x4, true);
            };
            _0x3934a9.prototype.readInt64 = function () {
                return this.readAnyInt(0x8, false);
            };
            _0x3934a9.prototype.readUint8Array = function (_0x5441e5) {
                var _0x2dc5a1 = new Uint8Array(_0x5441e5);
                for (var _0x20022d = 0x0; _0x20022d < _0x5441e5; _0x20022d++) {
                    _0x2dc5a1[_0x20022d] = this.readUint8();
                }
                return _0x2dc5a1;
            };
            _0x3934a9.prototype.readInt16Array = function (_0x5de360) {
                var _0x56c94e = new Int16Array(_0x5de360);
                for (var _0x212982 = 0x0; _0x212982 < _0x5de360; _0x212982++) {
                    _0x56c94e[_0x212982] = this.readInt16();
                }
                return _0x56c94e;
            };
            _0x3934a9.prototype.readUint16Array = function (_0x446079) {
                var _0x4f888b = new Int16Array(_0x446079);
                for (var _0x122b0f = 0x0; _0x122b0f < _0x446079; _0x122b0f++) {
                    _0x4f888b[_0x122b0f] = this.readUint16();
                }
                return _0x4f888b;
            };
            _0x3934a9.prototype.readUint32Array = function (_0x1d0e72) {
                var _0x414352 = new Uint32Array(_0x1d0e72);
                for (var _0x381f3a = 0x0; _0x381f3a < _0x1d0e72; _0x381f3a++) {
                    _0x414352[_0x381f3a] = this.readUint32();
                }
                return _0x414352;
            };
            _0x3934a9.prototype.readInt32Array = function (_0x466b73) {
                var _0x5ee5a8 = new Int32Array(_0x466b73);
                for (var _0x3ec662 = 0x0; _0x3ec662 < _0x466b73; _0x3ec662++) {
                    _0x5ee5a8[_0x3ec662] = this.readInt32();
                }
                return _0x5ee5a8;
            };
            _0x3644a2.MP4BoxStream = _0x3934a9;
            var _0x36e1b4 = function (_0x1eeb7e, _0x5566bf, _0x338f8c) {
                this._byteOffset = _0x5566bf || 0x0;
                if (_0x1eeb7e instanceof ArrayBuffer) {
                    this.buffer = _0x1eeb7e;
                } else if ("object" == typeof _0x1eeb7e) {
                    this.dataView = _0x1eeb7e;
                    if (_0x5566bf) {
                        this._byteOffset += _0x5566bf;
                    }
                } else {
                    this.buffer = new ArrayBuffer(_0x1eeb7e || 0x0);
                }
                this.position = 0x0;
                this.endianness = null == _0x338f8c ? _0x36e1b4.LITTLE_ENDIAN : _0x338f8c;
            };
            _0x36e1b4.prototype = {};
            _0x36e1b4.prototype.getPosition = function () {
                return this.position;
            };
            _0x36e1b4.prototype._realloc = function (_0x879a1e) {
                if (this._dynamicSize) {
                    var _0x1f2400 = this._byteOffset + this.position + _0x879a1e;
                    var _0x37c27e = this._buffer.byteLength;
                    if (_0x1f2400 <= _0x37c27e) {
                        if (_0x1f2400 > this._byteLength) {
                            this._byteLength = _0x1f2400;
                        }
                    } else {
                        for (_0x37c27e < 0x1 && (_0x37c27e = 0x1); _0x1f2400 > _0x37c27e; ) {
                            _0x37c27e *= 0x2;
                        }
                        var _0x27601d = new ArrayBuffer(_0x37c27e);
                        var _0x2632ad = new Uint8Array(this._buffer);
                        new Uint8Array(_0x27601d, 0x0, _0x2632ad.length).set(_0x2632ad);
                        this.buffer = _0x27601d;
                        this._byteLength = _0x1f2400;
                    }
                }
            };
            _0x36e1b4.prototype._trimAlloc = function () {
                if (this._byteLength != this._buffer.byteLength) {
                    var _0xec81c0 = new ArrayBuffer(this._byteLength);
                    var _0x2dae33 = new Uint8Array(_0xec81c0);
                    var _0x4e4ba8 = new Uint8Array(this._buffer, 0x0, _0x2dae33.length);
                    _0x2dae33.set(_0x4e4ba8);
                    this.buffer = _0xec81c0;
                }
            };
            _0x36e1b4.BIG_ENDIAN = false;
            _0x36e1b4.LITTLE_ENDIAN = true;
            _0x36e1b4.prototype._byteLength = 0x0;
            Object.defineProperty(_0x36e1b4.prototype, "byteLength", {
                get: function () {
                    return this._byteLength - this._byteOffset;
                },
            });
            Object.defineProperty(_0x36e1b4.prototype, "buffer", {
                get: function () {
                    this._trimAlloc();
                    return this._buffer;
                },
                set: function (_0x2dab2a) {
                    this._buffer = _0x2dab2a;
                    this._dataView = new DataView(this._buffer, this._byteOffset);
                    this._byteLength = this._buffer.byteLength;
                },
            });
            Object.defineProperty(_0x36e1b4.prototype, "byteOffset", {
                get: function () {
                    return this._byteOffset;
                },
                set: function (_0x1a0d27) {
                    this._byteOffset = _0x1a0d27;
                    this._dataView = new DataView(this._buffer, this._byteOffset);
                    this._byteLength = this._buffer.byteLength;
                },
            });
            Object.defineProperty(_0x36e1b4.prototype, "dataView", {
                get: function () {
                    return this._dataView;
                },
                set: function (_0x2d9ffc) {
                    this._byteOffset = _0x2d9ffc.byteOffset;
                    this._buffer = _0x2d9ffc.buffer;
                    this._dataView = new DataView(this._buffer, this._byteOffset);
                    this._byteLength = this._byteOffset + _0x2d9ffc.byteLength;
                },
            });
            _0x36e1b4.prototype.seek = function (_0x4075c7) {
                var _0x23cc72 = Math.max(0x0, Math.min(this.byteLength, _0x4075c7));
                this.position = isNaN(_0x23cc72) || !isFinite(_0x23cc72) ? 0x0 : _0x23cc72;
            };
            _0x36e1b4.prototype.isEof = function () {
                return this.position >= this._byteLength;
            };
            _0x36e1b4.prototype.mapUint8Array = function (_0x57567c) {
                this._realloc(0x1 * _0x57567c);
                var _0x357cdd = new Uint8Array(this._buffer, this.byteOffset + this.position, _0x57567c);
                this.position += 0x1 * _0x57567c;
                return _0x357cdd;
            };
            _0x36e1b4.prototype.readInt32Array = function (_0x16c7cc, _0x5b141a) {
                _0x16c7cc = null == _0x16c7cc ? this.byteLength - this.position / 0x4 : _0x16c7cc;
                var _0x378923 = new Int32Array(_0x16c7cc);
                _0x36e1b4.memcpy(_0x378923.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x16c7cc * _0x378923.BYTES_PER_ELEMENT);
                _0x36e1b4.arrayToNative(_0x378923, null == _0x5b141a ? this.endianness : _0x5b141a);
                this.position += _0x378923.byteLength;
                return _0x378923;
            };
            _0x36e1b4.prototype.readInt16Array = function (_0x56901a, _0x31b9fb) {
                _0x56901a = null == _0x56901a ? this.byteLength - this.position / 0x2 : _0x56901a;
                var _0x45b466 = new Int16Array(_0x56901a);
                _0x36e1b4.memcpy(_0x45b466.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x56901a * _0x45b466.BYTES_PER_ELEMENT);
                _0x36e1b4.arrayToNative(_0x45b466, null == _0x31b9fb ? this.endianness : _0x31b9fb);
                this.position += _0x45b466.byteLength;
                return _0x45b466;
            };
            _0x36e1b4.prototype.readInt8Array = function (_0x2d66dc) {
                _0x2d66dc = null == _0x2d66dc ? this.byteLength - this.position : _0x2d66dc;
                var _0x1c00db = new Int8Array(_0x2d66dc);
                _0x36e1b4.memcpy(_0x1c00db.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x2d66dc * _0x1c00db.BYTES_PER_ELEMENT);
                this.position += _0x1c00db.byteLength;
                return _0x1c00db;
            };
            _0x36e1b4.prototype.readUint32Array = function (_0x52db16, _0x5e6113) {
                _0x52db16 = null == _0x52db16 ? this.byteLength - this.position / 0x4 : _0x52db16;
                var _0x3c4814 = new Uint32Array(_0x52db16);
                _0x36e1b4.memcpy(_0x3c4814.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x52db16 * _0x3c4814.BYTES_PER_ELEMENT);
                _0x36e1b4.arrayToNative(_0x3c4814, null == _0x5e6113 ? this.endianness : _0x5e6113);
                this.position += _0x3c4814.byteLength;
                return _0x3c4814;
            };
            _0x36e1b4.prototype.readUint16Array = function (_0x4d7229, _0x5c48b7) {
                _0x4d7229 = null == _0x4d7229 ? this.byteLength - this.position / 0x2 : _0x4d7229;
                var _0x5f32d9 = new Uint16Array(_0x4d7229);
                _0x36e1b4.memcpy(_0x5f32d9.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x4d7229 * _0x5f32d9.BYTES_PER_ELEMENT);
                _0x36e1b4.arrayToNative(_0x5f32d9, null == _0x5c48b7 ? this.endianness : _0x5c48b7);
                this.position += _0x5f32d9.byteLength;
                return _0x5f32d9;
            };
            _0x36e1b4.prototype.readUint8Array = function (_0x4a13b7) {
                _0x4a13b7 = null == _0x4a13b7 ? this.byteLength - this.position : _0x4a13b7;
                var _0x5b6a4e = new Uint8Array(_0x4a13b7);
                _0x36e1b4.memcpy(_0x5b6a4e.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x4a13b7 * _0x5b6a4e.BYTES_PER_ELEMENT);
                this.position += _0x5b6a4e.byteLength;
                return _0x5b6a4e;
            };
            _0x36e1b4.prototype.readFloat64Array = function (_0x1f3aba, _0x4a646d) {
                _0x1f3aba = null == _0x1f3aba ? this.byteLength - this.position / 0x8 : _0x1f3aba;
                var _0x55a66e = new Float64Array(_0x1f3aba);
                _0x36e1b4.memcpy(_0x55a66e.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x1f3aba * _0x55a66e.BYTES_PER_ELEMENT);
                _0x36e1b4.arrayToNative(_0x55a66e, null == _0x4a646d ? this.endianness : _0x4a646d);
                this.position += _0x55a66e.byteLength;
                return _0x55a66e;
            };
            _0x36e1b4.prototype.readFloat32Array = function (_0x20838c, _0x3d0ad9) {
                _0x20838c = null == _0x20838c ? this.byteLength - this.position / 0x4 : _0x20838c;
                var _0xa1998a = new Float32Array(_0x20838c);
                _0x36e1b4.memcpy(_0xa1998a.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x20838c * _0xa1998a.BYTES_PER_ELEMENT);
                _0x36e1b4.arrayToNative(_0xa1998a, null == _0x3d0ad9 ? this.endianness : _0x3d0ad9);
                this.position += _0xa1998a.byteLength;
                return _0xa1998a;
            };
            _0x36e1b4.prototype.readInt32 = function (_0x545470) {
                var _0x48ecc4 = this._dataView.getInt32(this.position, null == _0x545470 ? this.endianness : _0x545470);
                this.position += 0x4;
                return _0x48ecc4;
            };
            _0x36e1b4.prototype.readInt16 = function (_0x464c9d) {
                var _0x3607db = this._dataView.getInt16(this.position, null == _0x464c9d ? this.endianness : _0x464c9d);
                this.position += 0x2;
                return _0x3607db;
            };
            _0x36e1b4.prototype.readInt8 = function () {
                var _0x4c6104 = this._dataView.getInt8(this.position);
                this.position += 0x1;
                return _0x4c6104;
            };
            _0x36e1b4.prototype.readUint32 = function (_0x24baa0) {
                var _0x2fc0dc = this._dataView.getUint32(this.position, null == _0x24baa0 ? this.endianness : _0x24baa0);
                this.position += 0x4;
                return _0x2fc0dc;
            };
            _0x36e1b4.prototype.readUint16 = function (_0x121383) {
                var _0x4973c3 = this._dataView.getUint16(this.position, null == _0x121383 ? this.endianness : _0x121383);
                this.position += 0x2;
                return _0x4973c3;
            };
            _0x36e1b4.prototype.readUint8 = function () {
                var _0x418952 = this._dataView.getUint8(this.position);
                this.position += 0x1;
                return _0x418952;
            };
            _0x36e1b4.prototype.readFloat32 = function (_0x4490bd) {
                var _0x4544dc = this._dataView.getFloat32(this.position, null == _0x4490bd ? this.endianness : _0x4490bd);
                this.position += 0x4;
                return _0x4544dc;
            };
            _0x36e1b4.prototype.readFloat64 = function (_0x1e3c7a) {
                var _0x17e2fa = this._dataView.getFloat64(this.position, null == _0x1e3c7a ? this.endianness : _0x1e3c7a);
                this.position += 0x8;
                return _0x17e2fa;
            };
            _0x36e1b4.endianness = new Int8Array(new Int16Array([0x1]).buffer)[0x0] > 0x0;
            _0x36e1b4.memcpy = function (_0x320953, _0x3c4083, _0x176905, _0x472cc7, _0x5833f0) {
                var _0x3cdb5d = new Uint8Array(_0x320953, _0x3c4083, _0x5833f0);
                var _0x53172b = new Uint8Array(_0x176905, _0x472cc7, _0x5833f0);
                _0x3cdb5d.set(_0x53172b);
            };
            _0x36e1b4.arrayToNative = function (_0x2a802b, _0x121054) {
                return _0x121054 == this.endianness ? _0x2a802b : this.flipArrayEndianness(_0x2a802b);
            };
            _0x36e1b4.nativeToEndian = function (_0x4f5fd3, _0x2b14fb) {
                return this.endianness == _0x2b14fb ? _0x4f5fd3 : this.flipArrayEndianness(_0x4f5fd3);
            };
            _0x36e1b4.flipArrayEndianness = function (_0x55e2a2) {
                var _0x2f6a4f = new Uint8Array(_0x55e2a2.buffer, _0x55e2a2.byteOffset, _0x55e2a2.byteLength);
                for (var _0x12c65a = 0x0; _0x12c65a < _0x55e2a2.byteLength; _0x12c65a += _0x55e2a2.BYTES_PER_ELEMENT) {
                    var _0x33053e = _0x12c65a + _0x55e2a2.BYTES_PER_ELEMENT - 0x1;
                    for (var _0x5b4c2c = _0x12c65a; _0x33053e > _0x5b4c2c; _0x33053e--, _0x5b4c2c++) {
                        var _0x3d5b6e = _0x2f6a4f[_0x5b4c2c];
                        _0x2f6a4f[_0x5b4c2c] = _0x2f6a4f[_0x33053e];
                        _0x2f6a4f[_0x33053e] = _0x3d5b6e;
                    }
                }
                return _0x55e2a2;
            };
            _0x36e1b4.prototype.failurePosition = 0x0;
            String.fromCharCodeUint8 = function (_0x160f96) {
                var _0x3be70b = [];
                for (var _0x5e90e1 = 0x0; _0x5e90e1 < _0x160f96.length; _0x5e90e1++) {
                    _0x3be70b[_0x5e90e1] = _0x160f96[_0x5e90e1];
                }
                return String.fromCharCode.apply(null, _0x3be70b);
            };
            _0x36e1b4.prototype.readString = function (_0x5d8f0e, _0x5670cb) {
                return null == _0x5670cb || "ASCII" == _0x5670cb
                    ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == _0x5d8f0e ? this.byteLength - this.position : _0x5d8f0e)])
                    : new TextDecoder(_0x5670cb).decode(this.mapUint8Array(_0x5d8f0e));
            };
            _0x36e1b4.prototype.readCString = function (_0x4c0817) {
                var _0xb1bf32 = this.byteLength - this.position;
                var _0x4f1e72 = new Uint8Array(this._buffer, this._byteOffset + this.position);
                var _0x4156a4 = _0xb1bf32;
                if (null != _0x4c0817) {
                    _0x4156a4 = Math.min(_0x4c0817, _0xb1bf32);
                }
                for (var _0xbb642d = 0x0; _0xbb642d < _0x4156a4 && 0x0 !== _0x4f1e72[_0xbb642d]; _0xbb642d++) {}
                var _0x5783a5 = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(_0xbb642d)]);
                if (null != _0x4c0817) {
                    this.position += _0x4156a4 - _0xbb642d;
                } else if (_0xbb642d != _0xb1bf32) {
                    this.position += 0x1;
                }
                return _0x5783a5;
            };
            var _0x2cf13d = Math.pow(0x2, 0x20);
            _0x36e1b4.prototype.readInt64 = function () {
                return this.readInt32() * _0x2cf13d + this.readUint32();
            };
            _0x36e1b4.prototype.readUint64 = function () {
                return this.readUint32() * _0x2cf13d + this.readUint32();
            };
            _0x36e1b4.prototype.readInt64 = function () {
                return this.readUint32() * _0x2cf13d + this.readUint32();
            };
            _0x36e1b4.prototype.readUint24 = function () {
                return (this.readUint8() << 0x10) + (this.readUint8() << 0x8) + this.readUint8();
            };
            _0x3644a2.DataStream = _0x36e1b4;
            _0x36e1b4.prototype.save = function (_0x86fd14) {
                var _0x3425ae = new Blob([this.buffer]);
                if (!window.URL || !URL.createObjectURL) {
                    throw "DataStream.save: Can't create object URL.";
                }
                var _0x38478a = window.URL.createObjectURL(_0x3425ae);
                var _0x2f7ea7 = document.createElement("a");
                document.body.appendChild(_0x2f7ea7);
                _0x2f7ea7.setAttribute("href", _0x38478a);
                _0x2f7ea7.setAttribute("download", _0x86fd14);
                _0x2f7ea7.setAttribute("target", "_self");
                _0x2f7ea7.click();
                window.URL.revokeObjectURL(_0x38478a);
            };
            _0x36e1b4.prototype._dynamicSize = true;
            Object.defineProperty(_0x36e1b4.prototype, "dynamicSize", {
                get: function () {
                    return this._dynamicSize;
                },
                set: function (_0x134d42) {
                    if (!_0x134d42) {
                        this._trimAlloc();
                    }
                    this._dynamicSize = _0x134d42;
                },
            });
            _0x36e1b4.prototype.shift = function (_0x5f28e8) {
                var _0x1109c3 = new ArrayBuffer(this._byteLength - _0x5f28e8);
                var _0x4ecdef = new Uint8Array(_0x1109c3);
                var _0x5dbc0b = new Uint8Array(this._buffer, _0x5f28e8, _0x4ecdef.length);
                _0x4ecdef.set(_0x5dbc0b);
                this.buffer = _0x1109c3;
                this.position -= _0x5f28e8;
            };
            _0x36e1b4.prototype.writeInt32Array = function (_0x572b71, _0x2bfc84) {
                this._realloc(0x4 * _0x572b71.length);
                if (_0x572b71 instanceof Int32Array && this.byteOffset + (this.position % _0x572b71.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x572b71.buffer, 0x0, _0x572b71.byteLength);
                    this.mapInt32Array(_0x572b71.length, _0x2bfc84);
                } else {
                    for (var _0x5db3ce = 0x0; _0x5db3ce < _0x572b71.length; _0x5db3ce++) {
                        this.writeInt32(_0x572b71[_0x5db3ce], _0x2bfc84);
                    }
                }
            };
            _0x36e1b4.prototype.writeInt16Array = function (_0x3339bd, _0x175327) {
                this._realloc(0x2 * _0x3339bd.length);
                if (_0x3339bd instanceof Int16Array && this.byteOffset + (this.position % _0x3339bd.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x3339bd.buffer, 0x0, _0x3339bd.byteLength);
                    this.mapInt16Array(_0x3339bd.length, _0x175327);
                } else {
                    for (var _0x5afd69 = 0x0; _0x5afd69 < _0x3339bd.length; _0x5afd69++) {
                        this.writeInt16(_0x3339bd[_0x5afd69], _0x175327);
                    }
                }
            };
            _0x36e1b4.prototype.writeInt8Array = function (_0x9d8c65) {
                this._realloc(0x1 * _0x9d8c65.length);
                if (_0x9d8c65 instanceof Int8Array && this.byteOffset + (this.position % _0x9d8c65.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x9d8c65.buffer, 0x0, _0x9d8c65.byteLength);
                    this.mapInt8Array(_0x9d8c65.length);
                } else {
                    for (var _0x24e62c = 0x0; _0x24e62c < _0x9d8c65.length; _0x24e62c++) {
                        this.writeInt8(_0x9d8c65[_0x24e62c]);
                    }
                }
            };
            _0x36e1b4.prototype.writeUint32Array = function (_0x1e7afa, _0x4c1612) {
                this._realloc(0x4 * _0x1e7afa.length);
                if (_0x1e7afa instanceof Uint32Array && this.byteOffset + (this.position % _0x1e7afa.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x1e7afa.buffer, 0x0, _0x1e7afa.byteLength);
                    this.mapUint32Array(_0x1e7afa.length, _0x4c1612);
                } else {
                    for (var _0x1e5fce = 0x0; _0x1e5fce < _0x1e7afa.length; _0x1e5fce++) {
                        this.writeUint32(_0x1e7afa[_0x1e5fce], _0x4c1612);
                    }
                }
            };
            _0x36e1b4.prototype.writeUint16Array = function (_0xa4c3a7, _0x3b8eb9) {
                this._realloc(0x2 * _0xa4c3a7.length);
                if (_0xa4c3a7 instanceof Uint16Array && this.byteOffset + (this.position % _0xa4c3a7.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0xa4c3a7.buffer, 0x0, _0xa4c3a7.byteLength);
                    this.mapUint16Array(_0xa4c3a7.length, _0x3b8eb9);
                } else {
                    for (var _0x4f9429 = 0x0; _0x4f9429 < _0xa4c3a7.length; _0x4f9429++) {
                        this.writeUint16(_0xa4c3a7[_0x4f9429], _0x3b8eb9);
                    }
                }
            };
            _0x36e1b4.prototype.writeUint8Array = function (_0x4a4a09) {
                this._realloc(0x1 * _0x4a4a09.length);
                if (_0x4a4a09 instanceof Uint8Array && this.byteOffset + (this.position % _0x4a4a09.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x4a4a09.buffer, 0x0, _0x4a4a09.byteLength);
                    this.mapUint8Array(_0x4a4a09.length);
                } else {
                    for (var _0x501e88 = 0x0; _0x501e88 < _0x4a4a09.length; _0x501e88++) {
                        this.writeUint8(_0x4a4a09[_0x501e88]);
                    }
                }
            };
            _0x36e1b4.prototype.writeFloat64Array = function (_0x1ee265, _0x282dbc) {
                this._realloc(0x8 * _0x1ee265.length);
                if (_0x1ee265 instanceof Float64Array && this.byteOffset + (this.position % _0x1ee265.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x1ee265.buffer, 0x0, _0x1ee265.byteLength);
                    this.mapFloat64Array(_0x1ee265.length, _0x282dbc);
                } else {
                    for (var _0x550e38 = 0x0; _0x550e38 < _0x1ee265.length; _0x550e38++) {
                        this.writeFloat64(_0x1ee265[_0x550e38], _0x282dbc);
                    }
                }
            };
            _0x36e1b4.prototype.writeFloat32Array = function (_0x250627, _0x15f49c) {
                this._realloc(0x4 * _0x250627.length);
                if (_0x250627 instanceof Float32Array && this.byteOffset + (this.position % _0x250627.BYTES_PER_ELEMENT) === 0x0) {
                    _0x36e1b4.memcpy(this._buffer, this.byteOffset + this.position, _0x250627.buffer, 0x0, _0x250627.byteLength);
                    this.mapFloat32Array(_0x250627.length, _0x15f49c);
                } else {
                    for (var _0x22577d = 0x0; _0x22577d < _0x250627.length; _0x22577d++) {
                        this.writeFloat32(_0x250627[_0x22577d], _0x15f49c);
                    }
                }
            };
            _0x36e1b4.prototype.writeInt32 = function (_0x5bf3ac, _0x1138ef) {
                this._realloc(0x4);
                this._dataView.setInt32(this.position, _0x5bf3ac, null == _0x1138ef ? this.endianness : _0x1138ef);
                this.position += 0x4;
            };
            _0x36e1b4.prototype.writeInt16 = function (_0x390789, _0x29a038) {
                this._realloc(0x2);
                this._dataView.setInt16(this.position, _0x390789, null == _0x29a038 ? this.endianness : _0x29a038);
                this.position += 0x2;
            };
            _0x36e1b4.prototype.writeInt8 = function (_0x49c817) {
                this._realloc(0x1);
                this._dataView.setInt8(this.position, _0x49c817);
                this.position += 0x1;
            };
            _0x36e1b4.prototype.writeUint32 = function (_0x421050, _0x1029ba) {
                this._realloc(0x4);
                this._dataView.setUint32(this.position, _0x421050, null == _0x1029ba ? this.endianness : _0x1029ba);
                this.position += 0x4;
            };
            _0x36e1b4.prototype.writeUint16 = function (_0x58981d, _0x1896e4) {
                this._realloc(0x2);
                this._dataView.setUint16(this.position, _0x58981d, null == _0x1896e4 ? this.endianness : _0x1896e4);
                this.position += 0x2;
            };
            _0x36e1b4.prototype.writeUint8 = function (_0x5dc61e) {
                this._realloc(0x1);
                this._dataView.setUint8(this.position, _0x5dc61e);
                this.position += 0x1;
            };
            _0x36e1b4.prototype.writeFloat32 = function (_0x17e4c6, _0x19328e) {
                this._realloc(0x4);
                this._dataView.setFloat32(this.position, _0x17e4c6, null == _0x19328e ? this.endianness : _0x19328e);
                this.position += 0x4;
            };
            _0x36e1b4.prototype.writeFloat64 = function (_0x153fe1, _0x517c52) {
                this._realloc(0x8);
                this._dataView.setFloat64(this.position, _0x153fe1, null == _0x517c52 ? this.endianness : _0x517c52);
                this.position += 0x8;
            };
            _0x36e1b4.prototype.writeUCS2String = function (_0x5a0dbb, _0x2e80d9, _0x364b43) {
                if (null == _0x364b43) {
                    _0x364b43 = _0x5a0dbb.length;
                }
                for (var _0x1a4863 = 0x0; _0x1a4863 < _0x5a0dbb.length && _0x1a4863 < _0x364b43; _0x1a4863++) {
                    this.writeUint16(_0x5a0dbb.charCodeAt(_0x1a4863), _0x2e80d9);
                }
                for (; _0x1a4863 < _0x364b43; _0x1a4863++) {
                    this.writeUint16(0x0);
                }
            };
            _0x36e1b4.prototype.writeString = function (_0xbfb27f, _0x56643e, _0x4ed61c) {
                var _0xdc1cc4 = 0x0;
                if (null == _0x56643e || "ASCII" == _0x56643e) {
                    if (null != _0x4ed61c) {
                        var _0x5a044e = Math.min(_0xbfb27f.length, _0x4ed61c);
                        for (_0xdc1cc4 = 0x0; _0xdc1cc4 < _0x5a044e; _0xdc1cc4++) {
                            this.writeUint8(_0xbfb27f.charCodeAt(_0xdc1cc4));
                        }
                        for (; _0xdc1cc4 < _0x4ed61c; _0xdc1cc4++) {
                            this.writeUint8(0x0);
                        }
                    } else {
                        for (_0xdc1cc4 = 0x0; _0xdc1cc4 < _0xbfb27f.length; _0xdc1cc4++) {
                            this.writeUint8(_0xbfb27f.charCodeAt(_0xdc1cc4));
                        }
                    }
                } else {
                    this.writeUint8Array(new TextEncoder(_0x56643e).encode(_0xbfb27f.substring(0x0, _0x4ed61c)));
                }
            };
            _0x36e1b4.prototype.writeCString = function (_0x290c03, _0x4a69ae) {
                var _0x490a26 = 0x0;
                if (null != _0x4a69ae) {
                    var _0x225816 = Math.min(_0x290c03.length, _0x4a69ae);
                    for (_0x490a26 = 0x0; _0x490a26 < _0x225816; _0x490a26++) {
                        this.writeUint8(_0x290c03.charCodeAt(_0x490a26));
                    }
                    for (; _0x490a26 < _0x4a69ae; _0x490a26++) {
                        this.writeUint8(0x0);
                    }
                } else {
                    for (_0x490a26 = 0x0; _0x490a26 < _0x290c03.length; _0x490a26++) {
                        this.writeUint8(_0x290c03.charCodeAt(_0x490a26));
                    }
                    this.writeUint8(0x0);
                }
            };
            _0x36e1b4.prototype.writeStruct = function (_0x55cf8e, _0x1a966d) {
                for (var _0x466699 = 0x0; _0x466699 < _0x55cf8e.length; _0x466699 += 0x2) {
                    var _0x490c7c = _0x55cf8e[_0x466699 + 0x1];
                    this.writeType(_0x490c7c, _0x1a966d[_0x55cf8e[_0x466699]], _0x1a966d);
                }
            };
            _0x36e1b4.prototype.writeType = function (_0x1b5859, _0x4172ba, _0x260f48) {
                var _0x28ad91;
                if ("function" == typeof _0x1b5859) {
                    return _0x1b5859(this, _0x4172ba);
                }
                if ("object" == typeof _0x1b5859 && !(_0x1b5859 instanceof Array)) {
                    return _0x1b5859.set(this, _0x4172ba, _0x260f48);
                }
                var _0x4e7e1d = null;
                var _0x4728bc = "ASCII";
                var _0x50fa6f = this.position;
                if ("string" == typeof _0x1b5859 && /:/.test(_0x1b5859)) {
                    _0x28ad91 = _0x1b5859.split(":");
                    _0x1b5859 = _0x28ad91[0x0];
                    _0x4e7e1d = parseInt(_0x28ad91[0x1]);
                }
                if ("string" == typeof _0x1b5859 && /,/.test(_0x1b5859)) {
                    _0x28ad91 = _0x1b5859.split(",");
                    _0x1b5859 = _0x28ad91[0x0];
                    _0x4728bc = parseInt(_0x28ad91[0x1]);
                }
                switch (_0x1b5859) {
                    case "uint8":
                        this.writeUint8(_0x4172ba);
                        break;
                    case "int8":
                        this.writeInt8(_0x4172ba);
                        break;
                    case "uint16":
                        this.writeUint16(_0x4172ba, this.endianness);
                        break;
                    case "int16":
                        this.writeInt16(_0x4172ba, this.endianness);
                        break;
                    case "uint32":
                        this.writeUint32(_0x4172ba, this.endianness);
                        break;
                    case "int32":
                        this.writeInt32(_0x4172ba, this.endianness);
                        break;
                    case "float32":
                        this.writeFloat32(_0x4172ba, this.endianness);
                        break;
                    case "float64":
                        this.writeFloat64(_0x4172ba, this.endianness);
                        break;
                    case "uint16be":
                        this.writeUint16(_0x4172ba, _0x36e1b4.BIG_ENDIAN);
                        break;
                    case "int16be":
                        this.writeInt16(_0x4172ba, _0x36e1b4.BIG_ENDIAN);
                        break;
                    case "uint32be":
                        this.writeUint32(_0x4172ba, _0x36e1b4.BIG_ENDIAN);
                        break;
                    case "int32be":
                        this.writeInt32(_0x4172ba, _0x36e1b4.BIG_ENDIAN);
                        break;
                    case "float32be":
                        this.writeFloat32(_0x4172ba, _0x36e1b4.BIG_ENDIAN);
                        break;
                    case "float64be":
                        this.writeFloat64(_0x4172ba, _0x36e1b4.BIG_ENDIAN);
                        break;
                    case "uint16le":
                        this.writeUint16(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN);
                        break;
                    case "int16le":
                        this.writeInt16(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN);
                        break;
                    case "uint32le":
                        this.writeUint32(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN);
                        break;
                    case "int32le":
                        this.writeInt32(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN);
                        break;
                    case "float32le":
                        this.writeFloat32(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN);
                        break;
                    case "float64le":
                        this.writeFloat64(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN);
                        break;
                    case "cstring":
                        this.writeCString(_0x4172ba, _0x4e7e1d);
                        break;
                    case "string":
                        this.writeString(_0x4172ba, _0x4728bc, _0x4e7e1d);
                        break;
                    case "u16string":
                        this.writeUCS2String(_0x4172ba, this.endianness, _0x4e7e1d);
                        break;
                    case "u16stringle":
                        this.writeUCS2String(_0x4172ba, _0x36e1b4.LITTLE_ENDIAN, _0x4e7e1d);
                        break;
                    case "u16stringbe":
                        this.writeUCS2String(_0x4172ba, _0x36e1b4.BIG_ENDIAN, _0x4e7e1d);
                        break;
                    default:
                        if (0x3 == _0x1b5859.length) {
                            var _0x3f636d = _0x1b5859[0x1];
                            for (var _0x27937d = 0x0; _0x27937d < _0x4172ba.length; _0x27937d++) {
                                this.writeType(_0x3f636d, _0x4172ba[_0x27937d]);
                            }
                            break;
                        }
                        this.writeStruct(_0x1b5859, _0x4172ba);
                }
                if (null != _0x4e7e1d) {
                    this.position = _0x50fa6f;
                    this._realloc(_0x4e7e1d);
                    this.position = _0x50fa6f + _0x4e7e1d;
                }
            };
            _0x36e1b4.prototype.writeUint64 = function (_0x8fdab8) {
                var _0x12e773 = Math.floor(_0x8fdab8 / _0x2cf13d);
                this.writeUint32(_0x12e773);
                this.writeUint32(0xffffffff & _0x8fdab8);
            };
            _0x36e1b4.prototype.writeUint24 = function (_0xb9b139) {
                this.writeUint8((0xff0000 & _0xb9b139) >> 0x10);
                this.writeUint8((0xff00 & _0xb9b139) >> 0x8);
                this.writeUint8(0xff & _0xb9b139);
            };
            _0x36e1b4.prototype.adjustUint32 = function (_0x546903, _0x2d4a07) {
                var _0x3a0bd6 = this.position;
                this.seek(_0x546903);
                this.writeUint32(_0x2d4a07);
                this.seek(_0x3a0bd6);
            };
            _0x36e1b4.prototype.mapInt32Array = function (_0x5b9828, _0x4d6dc0) {
                this._realloc(0x4 * _0x5b9828);
                var _0x16efd4 = new Int32Array(this._buffer, this.byteOffset + this.position, _0x5b9828);
                _0x36e1b4.arrayToNative(_0x16efd4, null == _0x4d6dc0 ? this.endianness : _0x4d6dc0);
                this.position += 0x4 * _0x5b9828;
                return _0x16efd4;
            };
            _0x36e1b4.prototype.mapInt16Array = function (_0x49f080, _0x29ff88) {
                this._realloc(0x2 * _0x49f080);
                var _0x2c92fb = new Int16Array(this._buffer, this.byteOffset + this.position, _0x49f080);
                _0x36e1b4.arrayToNative(_0x2c92fb, null == _0x29ff88 ? this.endianness : _0x29ff88);
                this.position += 0x2 * _0x49f080;
                return _0x2c92fb;
            };
            _0x36e1b4.prototype.mapInt8Array = function (_0x42a96c) {
                this._realloc(0x1 * _0x42a96c);
                var _0x1a2c29 = new Int8Array(this._buffer, this.byteOffset + this.position, _0x42a96c);
                this.position += 0x1 * _0x42a96c;
                return _0x1a2c29;
            };
            _0x36e1b4.prototype.mapUint32Array = function (_0xb79297, _0xca1683) {
                this._realloc(0x4 * _0xb79297);
                var _0x449fdb = new Uint32Array(this._buffer, this.byteOffset + this.position, _0xb79297);
                _0x36e1b4.arrayToNative(_0x449fdb, null == _0xca1683 ? this.endianness : _0xca1683);
                this.position += 0x4 * _0xb79297;
                return _0x449fdb;
            };
            _0x36e1b4.prototype.mapUint16Array = function (_0x4a951e, _0xe2e1f2) {
                this._realloc(0x2 * _0x4a951e);
                var _0x2fa313 = new Uint16Array(this._buffer, this.byteOffset + this.position, _0x4a951e);
                _0x36e1b4.arrayToNative(_0x2fa313, null == _0xe2e1f2 ? this.endianness : _0xe2e1f2);
                this.position += 0x2 * _0x4a951e;
                return _0x2fa313;
            };
            _0x36e1b4.prototype.mapFloat64Array = function (_0x5a162e, _0x4adaeb) {
                this._realloc(0x8 * _0x5a162e);
                var _0x25b139 = new Float64Array(this._buffer, this.byteOffset + this.position, _0x5a162e);
                _0x36e1b4.arrayToNative(_0x25b139, null == _0x4adaeb ? this.endianness : _0x4adaeb);
                this.position += 0x8 * _0x5a162e;
                return _0x25b139;
            };
            _0x36e1b4.prototype.mapFloat32Array = function (_0x879a5, _0x56fd4f) {
                this._realloc(0x4 * _0x879a5);
                var _0x3fcb04 = new Float32Array(this._buffer, this.byteOffset + this.position, _0x879a5);
                _0x36e1b4.arrayToNative(_0x3fcb04, null == _0x56fd4f ? this.endianness : _0x56fd4f);
                this.position += 0x4 * _0x879a5;
                return _0x3fcb04;
            };
            var _0x3f29c = function (_0x3bf926) {
                this.buffers = [];
                this.bufferIndex = -0x1;
                if (_0x3bf926) {
                    this.insertBuffer(_0x3bf926);
                    this.bufferIndex = 0x0;
                }
            };
            (_0x3f29c.prototype = new _0x36e1b4(new ArrayBuffer(), 0x0, _0x36e1b4.BIG_ENDIAN)).initialized = function () {
                var _0x281602;
                return (
                    this.bufferIndex > -0x1 ||
                    (this.buffers.length > 0x0
                        ? 0x0 === (_0x281602 = this.buffers[0x0]).fileStart
                            ? ((this.buffer = _0x281602), (this.bufferIndex = 0x0), _0x5a6c18.debug("MultiBufferStream", "Stream ready for parsing"), true)
                            : (_0x5a6c18.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), false)
                        : (_0x5a6c18.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), false))
                );
            };
            ArrayBuffer.concat = function (_0x3a8584, _0x24daf0) {
                _0x5a6c18.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (_0x3a8584.byteLength + _0x24daf0.byteLength));
                var _0x3091a9 = new Uint8Array(_0x3a8584.byteLength + _0x24daf0.byteLength);
                _0x3091a9.set(new Uint8Array(_0x3a8584), 0x0);
                _0x3091a9.set(new Uint8Array(_0x24daf0), _0x3a8584.byteLength);
                return _0x3091a9.buffer;
            };
            _0x3f29c.prototype.reduceBuffer = function (_0x2b5ca7, _0x504bd9, _0x11d175) {
                var _0x2921f9;
                (_0x2921f9 = new Uint8Array(_0x11d175)).set(new Uint8Array(_0x2b5ca7, _0x504bd9, _0x11d175));
                _0x2921f9.buffer.fileStart = _0x2b5ca7.fileStart + _0x504bd9;
                _0x2921f9.buffer.usedBytes = 0x0;
                return _0x2921f9.buffer;
            };
            _0x3f29c.prototype.insertBuffer = function (_0x10a378) {
                var _0x10fc42 = true;
                for (var _0x11e884 = 0x0; _0x11e884 < this.buffers.length; _0x11e884++) {
                    var _0x4fad3a = this.buffers[_0x11e884];
                    if (_0x10a378.fileStart <= _0x4fad3a.fileStart) {
                        if (_0x10a378.fileStart === _0x4fad3a.fileStart) {
                            if (_0x10a378.byteLength > _0x4fad3a.byteLength) {
                                this.buffers.splice(_0x11e884, 0x1);
                                _0x11e884--;
                                continue;
                            }
                            _0x5a6c18.warn(
                                "MultiBufferStream",
                                "Buffer (fileStart: " + _0x10a378.fileStart + " - Length: " + _0x10a378.byteLength + ") already appended, ignoring"
                            );
                        } else {
                            if (!(_0x10a378.fileStart + _0x10a378.byteLength <= _0x4fad3a.fileStart)) {
                                _0x10a378 = this.reduceBuffer(_0x10a378, 0x0, _0x4fad3a.fileStart - _0x10a378.fileStart);
                            }
                            _0x5a6c18.debug(
                                "MultiBufferStream",
                                "Appending new buffer (fileStart: " + _0x10a378.fileStart + " - Length: " + _0x10a378.byteLength + ")"
                            );
                            this.buffers.splice(_0x11e884, 0x0, _0x10a378);
                            if (0x0 === _0x11e884) {
                                this.buffer = _0x10a378;
                            }
                        }
                        _0x10fc42 = false;
                        break;
                    }
                    if (_0x10a378.fileStart < _0x4fad3a.fileStart + _0x4fad3a.byteLength) {
                        var _0x150454 = _0x4fad3a.fileStart + _0x4fad3a.byteLength - _0x10a378.fileStart;
                        var _0x3d23bf = _0x10a378.byteLength - _0x150454;
                        if (!(_0x3d23bf > 0x0)) {
                            _0x10fc42 = false;
                            break;
                        }
                        _0x10a378 = this.reduceBuffer(_0x10a378, _0x150454, _0x3d23bf);
                    }
                }
                if (_0x10fc42) {
                    _0x5a6c18.debug(
                        "MultiBufferStream",
                        "Appending new buffer (fileStart: " + _0x10a378.fileStart + " - Length: " + _0x10a378.byteLength + ")"
                    );
                    this.buffers.push(_0x10a378);
                    if (0x0 === _0x11e884) {
                        this.buffer = _0x10a378;
                    }
                }
            };
            _0x3f29c.prototype.logBufferLevel = function (_0x22a293) {
                var _0x2ede8d;
                var _0x293aae;
                var _0x287a60;
                var _0x5ac33b;
                var _0x1aca9f;
                var _0x550366 = [];
                var _0x17c882 = "";
                _0x287a60 = 0x0;
                _0x5ac33b = 0x0;
                for (_0x2ede8d = 0x0; _0x2ede8d < this.buffers.length; _0x2ede8d++) {
                    _0x293aae = this.buffers[_0x2ede8d];
                    if (0x0 === _0x2ede8d) {
                        _0x1aca9f = {};
                        _0x550366.push(_0x1aca9f);
                        _0x1aca9f.start = _0x293aae.fileStart;
                        _0x1aca9f.end = _0x293aae.fileStart + _0x293aae.byteLength;
                        _0x17c882 += "[" + _0x1aca9f.start + "-";
                    } else if (_0x1aca9f.end === _0x293aae.fileStart) {
                        _0x1aca9f.end = _0x293aae.fileStart + _0x293aae.byteLength;
                    } else {
                        (_0x1aca9f = {}).start = _0x293aae.fileStart;
                        _0x17c882 += _0x550366[_0x550366.length - 0x1].end - 0x1 + "], [" + _0x1aca9f.start + "-";
                        _0x1aca9f.end = _0x293aae.fileStart + _0x293aae.byteLength;
                        _0x550366.push(_0x1aca9f);
                    }
                    _0x287a60 += _0x293aae.usedBytes;
                    _0x5ac33b += _0x293aae.byteLength;
                }
                if (_0x550366.length > 0x0) {
                    _0x17c882 += _0x1aca9f.end - 0x1 + "]";
                }
                var _0x2cda11 = _0x22a293 ? _0x5a6c18.info : _0x5a6c18.debug;
                if (0x0 === this.buffers.length) {
                    _0x2cda11("MultiBufferStream", "No more buffer in memory");
                } else {
                    _0x2cda11(
                        "MultiBufferStream",
                        this.buffers.length + " stored buffer(s) (" + _0x287a60 + "/" + _0x5ac33b + " bytes), continuous ranges: " + _0x17c882
                    );
                }
            };
            _0x3f29c.prototype.cleanBuffers = function () {
                var _0x3df898;
                var _0x5172d9;
                for (_0x3df898 = 0x0; _0x3df898 < this.buffers.length; _0x3df898++) {
                    if ((_0x5172d9 = this.buffers[_0x3df898]).usedBytes === _0x5172d9.byteLength) {
                        _0x5a6c18.debug("MultiBufferStream", "Removing buffer #" + _0x3df898);
                        this.buffers.splice(_0x3df898, 0x1);
                        _0x3df898--;
                    }
                }
            };
            _0x3f29c.prototype.mergeNextBuffer = function () {
                var _0xaca080;
                if (this.bufferIndex + 0x1 < this.buffers.length) {
                    if ((_0xaca080 = this.buffers[this.bufferIndex + 0x1]).fileStart === this.buffer.fileStart + this.buffer.byteLength) {
                        var _0x2a16e3 = this.buffer.byteLength;
                        var _0x1284e9 = this.buffer.usedBytes;
                        var _0x20d674 = this.buffer.fileStart;
                        this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, _0xaca080);
                        this.buffer = this.buffers[this.bufferIndex];
                        this.buffers.splice(this.bufferIndex + 0x1, 0x1);
                        this.buffer.usedBytes = _0x1284e9;
                        this.buffer.fileStart = _0x20d674;
                        _0x5a6c18.debug("ISOFile", "Concatenating buffer for box parsing (length: " + _0x2a16e3 + "->" + this.buffer.byteLength + ")");
                        return true;
                    }
                    return false;
                }
                return false;
            };
            _0x3f29c.prototype.findPosition = function (_0x4a766d, _0x150138, _0x3c3f00) {
                var _0x1df703;
                var _0x2a895f = null;
                var _0x513a6a = -0x1;
                for (
                    _0x1df703 = true === _0x4a766d ? 0x0 : this.bufferIndex;
                    _0x1df703 < this.buffers.length && (_0x2a895f = this.buffers[_0x1df703]).fileStart <= _0x150138;

                ) {
                    _0x513a6a = _0x1df703;
                    if (_0x3c3f00) {
                        if (_0x2a895f.fileStart + _0x2a895f.byteLength <= _0x150138) {
                            _0x2a895f.usedBytes = _0x2a895f.byteLength;
                        } else {
                            _0x2a895f.usedBytes = _0x150138 - _0x2a895f.fileStart;
                        }
                        this.logBufferLevel();
                    }
                    _0x1df703++;
                }
                return -0x1 !== _0x513a6a && (_0x2a895f = this.buffers[_0x513a6a]).fileStart + _0x2a895f.byteLength >= _0x150138
                    ? (_0x5a6c18.debug("MultiBufferStream", "Found position in existing buffer #" + _0x513a6a), _0x513a6a)
                    : -0x1;
            };
            _0x3f29c.prototype.findEndContiguousBuf = function (_0xea5a39) {
                var _0x2b256b;
                var _0x184979;
                var _0x4fc680;
                var _0x16e673 = undefined !== _0xea5a39 ? _0xea5a39 : this.bufferIndex;
                _0x184979 = this.buffers[_0x16e673];
                if (this.buffers.length > _0x16e673 + 0x1) {
                    for (
                        _0x2b256b = _0x16e673 + 0x1;
                        _0x2b256b < this.buffers.length && (_0x4fc680 = this.buffers[_0x2b256b]).fileStart === _0x184979.fileStart + _0x184979.byteLength;
                        _0x2b256b++
                    ) {
                        _0x184979 = _0x4fc680;
                    }
                }
                return _0x184979.fileStart + _0x184979.byteLength;
            };
            _0x3f29c.prototype.getEndFilePositionAfter = function (_0x118f19) {
                var _0x3f0655 = this.findPosition(true, _0x118f19, false);
                return -0x1 !== _0x3f0655 ? this.findEndContiguousBuf(_0x3f0655) : _0x118f19;
            };
            _0x3f29c.prototype.addUsedBytes = function (_0xc1c335) {
                this.buffer.usedBytes += _0xc1c335;
                this.logBufferLevel();
            };
            _0x3f29c.prototype.setAllUsedBytes = function () {
                this.buffer.usedBytes = this.buffer.byteLength;
                this.logBufferLevel();
            };
            _0x3f29c.prototype.seek = function (_0x1fd648, _0x203c25, _0x51aa0d) {
                var _0x3d4e01;
                return -0x1 !== (_0x3d4e01 = this.findPosition(_0x203c25, _0x1fd648, _0x51aa0d))
                    ? ((this.buffer = this.buffers[_0x3d4e01]),
                      (this.bufferIndex = _0x3d4e01),
                      (this.position = _0x1fd648 - this.buffer.fileStart),
                      _0x5a6c18.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position),
                      true)
                    : (_0x5a6c18.debug("MultiBufferStream", "Position " + _0x1fd648 + " not found in buffered data"), false);
            };
            _0x3f29c.prototype.getPosition = function () {
                if (-0x1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) {
                    throw "Error accessing position in the MultiBufferStream";
                }
                return this.buffers[this.bufferIndex].fileStart + this.position;
            };
            _0x3f29c.prototype.getLength = function () {
                return this.byteLength;
            };
            _0x3f29c.prototype.getEndPosition = function () {
                if (-0x1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) {
                    throw "Error accessing position in the MultiBufferStream";
                }
                return this.buffers[this.bufferIndex].fileStart + this.byteLength;
            };
            _0x3644a2.MultiBufferStream = _0x3f29c;
            var _0x55495a = function () {
                var _0xfeb6b2 = [];
                _0xfeb6b2[0x3] = "ES_Descriptor";
                _0xfeb6b2[0x4] = "DecoderConfigDescriptor";
                _0xfeb6b2[0x5] = "DecoderSpecificInfo";
                _0xfeb6b2[0x6] = "SLConfigDescriptor";
                this.getDescriptorName = function (_0x51f837) {
                    return _0xfeb6b2[_0x51f837];
                };
                var _0x5951af = this;
                var _0x5d8999 = {};
                this.parseOneDescriptor = function (_0x52680e) {
                    var _0x1e610e;
                    var _0x48440c;
                    var _0x4d8e6b;
                    var _0x5cc411 = 0x0;
                    _0x1e610e = _0x52680e.readUint8();
                    for (_0x4d8e6b = _0x52680e.readUint8(); 0x80 & _0x4d8e6b; ) {
                        _0x5cc411 = (0x7f & _0x4d8e6b) << 0x7;
                        _0x4d8e6b = _0x52680e.readUint8();
                    }
                    _0x5cc411 += 0x7f & _0x4d8e6b;
                    _0x5a6c18.debug(
                        "MPEG4DescriptorParser",
                        "Found " + (_0xfeb6b2[_0x1e610e] || "Descriptor " + _0x1e610e) + ", size " + _0x5cc411 + " at position " + _0x52680e.getPosition()
                    );
                    (_0x48440c = _0xfeb6b2[_0x1e610e] ? new _0x5d8999[_0xfeb6b2[_0x1e610e]](_0x5cc411) : new _0x5d8999.Descriptor(_0x5cc411)).parse(_0x52680e);
                    return _0x48440c;
                };
                _0x5d8999.Descriptor = function (_0x561222, _0x1fb9fc) {
                    this.tag = _0x561222;
                    this.size = _0x1fb9fc;
                    this.descs = [];
                };
                _0x5d8999.Descriptor.prototype.parse = function (_0x533136) {
                    this.data = _0x533136.readUint8Array(this.size);
                };
                _0x5d8999.Descriptor.prototype.findDescriptor = function (_0x5243ae) {
                    for (var _0x52f355 = 0x0; _0x52f355 < this.descs.length; _0x52f355++) {
                        if (this.descs[_0x52f355].tag == _0x5243ae) {
                            return this.descs[_0x52f355];
                        }
                    }
                    return null;
                };
                _0x5d8999.Descriptor.prototype.parseRemainingDescriptors = function (_0x5724f7) {
                    for (var _0x4f9797 = _0x5724f7.position; _0x5724f7.position < _0x4f9797 + this.size; ) {
                        var _0x14632b = _0x5951af.parseOneDescriptor(_0x5724f7);
                        this.descs.push(_0x14632b);
                    }
                };
                _0x5d8999.ES_Descriptor = function (_0x39aee8) {
                    _0x5d8999.Descriptor.call(this, 0x3, _0x39aee8);
                };
                _0x5d8999.ES_Descriptor.prototype = new _0x5d8999.Descriptor();
                _0x5d8999.ES_Descriptor.prototype.parse = function (_0x596587) {
                    this.ES_ID = _0x596587.readUint16();
                    this.flags = _0x596587.readUint8();
                    this.size -= 0x3;
                    if (0x80 & this.flags) {
                        this.dependsOn_ES_ID = _0x596587.readUint16();
                        this.size -= 0x2;
                    } else {
                        this.dependsOn_ES_ID = 0x0;
                    }
                    if (0x40 & this.flags) {
                        var _0x4857ad = _0x596587.readUint8();
                        this.URL = _0x596587.readString(_0x4857ad);
                        this.size -= _0x4857ad + 0x1;
                    } else {
                        this.URL = "";
                    }
                    if (0x20 & this.flags) {
                        this.OCR_ES_ID = _0x596587.readUint16();
                        this.size -= 0x2;
                    } else {
                        this.OCR_ES_ID = 0x0;
                    }
                    this.parseRemainingDescriptors(_0x596587);
                };
                _0x5d8999.ES_Descriptor.prototype.getOTI = function (_0x529834) {
                    var _0xd01425 = this.findDescriptor(0x4);
                    return _0xd01425 ? _0xd01425.oti : 0x0;
                };
                _0x5d8999.ES_Descriptor.prototype.getAudioConfig = function (_0x110737) {
                    var _0x2d8a11 = this.findDescriptor(0x4);
                    if (!_0x2d8a11) {
                        return null;
                    }
                    var _0x331fc2 = _0x2d8a11.findDescriptor(0x5);
                    if (_0x331fc2 && _0x331fc2.data) {
                        var _0x8f768 = (0xf8 & _0x331fc2.data[0x0]) >> 0x3;
                        if (0x1f === _0x8f768 && _0x331fc2.data.length >= 0x2) {
                            _0x8f768 = 0x20 + ((0x7 & _0x331fc2.data[0x0]) << 0x3) + ((0xe0 & _0x331fc2.data[0x1]) >> 0x5);
                        }
                        return _0x8f768;
                    }
                    return null;
                };
                _0x5d8999.DecoderConfigDescriptor = function (_0x3ab23b) {
                    _0x5d8999.Descriptor.call(this, 0x4, _0x3ab23b);
                };
                _0x5d8999.DecoderConfigDescriptor.prototype = new _0x5d8999.Descriptor();
                _0x5d8999.DecoderConfigDescriptor.prototype.parse = function (_0x49fa7f) {
                    this.oti = _0x49fa7f.readUint8();
                    this.streamType = _0x49fa7f.readUint8();
                    this.bufferSize = _0x49fa7f.readUint24();
                    this.maxBitrate = _0x49fa7f.readUint32();
                    this.avgBitrate = _0x49fa7f.readUint32();
                    this.size -= 0xd;
                    this.parseRemainingDescriptors(_0x49fa7f);
                };
                _0x5d8999.DecoderSpecificInfo = function (_0x382fc3) {
                    _0x5d8999.Descriptor.call(this, 0x5, _0x382fc3);
                };
                _0x5d8999.DecoderSpecificInfo.prototype = new _0x5d8999.Descriptor();
                _0x5d8999.SLConfigDescriptor = function (_0x5e2cf1) {
                    _0x5d8999.Descriptor.call(this, 0x6, _0x5e2cf1);
                };
                _0x5d8999.SLConfigDescriptor.prototype = new _0x5d8999.Descriptor();
                return this;
            };
            _0x3644a2.MPEG4DescriptorParser = _0x55495a;
            var _0x5a8df5 = {
                ERR_INVALID_DATA: -0x1,
                ERR_NOT_ENOUGH_DATA: 0x0,
                OK: 0x1,
                BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
                FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
                CONTAINER_BOXES: [
                    ["moov", ["trak", "pssh"]],
                    ["trak"],
                    ["edts"],
                    ["mdia"],
                    ["minf"],
                    ["dinf"],
                    ["stbl", ["sgpd", "sbgp"]],
                    ["mvex", ["trex"]],
                    ["moof", ["traf"]],
                    ["traf", ["trun", "sgpd", "sbgp"]],
                    ["vttc"],
                    ["tref"],
                    ["iref"],
                    ["mfra", ["tfra"]],
                    ["meco"],
                    ["hnti"],
                    ["hinf"],
                    ["strk"],
                    ["strd"],
                    ["sinf"],
                    ["rinf"],
                    ["schi"],
                    ["trgr"],
                    ["udta", ["kind"]],
                    ["iprp", ["ipma"]],
                    ["ipco"],
                ],
                boxCodes: [],
                fullBoxCodes: [],
                containerBoxCodes: [],
                sampleEntryCodes: {},
                sampleGroupEntryCodes: [],
                trackGroupTypes: [],
                UUIDBoxes: {},
                UUIDs: [],
                initialize: function () {
                    _0x5a8df5.FullBox.prototype = new _0x5a8df5.Box();
                    _0x5a8df5.ContainerBox.prototype = new _0x5a8df5.Box();
                    _0x5a8df5.SampleEntry.prototype = new _0x5a8df5.Box();
                    _0x5a8df5.TrackGroupTypeBox.prototype = new _0x5a8df5.FullBox();
                    _0x5a8df5.BASIC_BOXES.forEach(function (_0x53efd0) {
                        _0x5a8df5.createBoxCtor(_0x53efd0);
                    });
                    _0x5a8df5.FULL_BOXES.forEach(function (_0x198912) {
                        _0x5a8df5.createFullBoxCtor(_0x198912);
                    });
                    _0x5a8df5.CONTAINER_BOXES.forEach(function (_0x3a3b47) {
                        _0x5a8df5.createContainerBoxCtor(_0x3a3b47[0x0], null, _0x3a3b47[0x1]);
                    });
                },
                Box: function (_0x2a5352, _0x6f511f, _0x4926a1) {
                    this.type = _0x2a5352;
                    this.size = _0x6f511f;
                    this.uuid = _0x4926a1;
                },
                FullBox: function (_0x15ebfd, _0x38bd22, _0x218c31) {
                    _0x5a8df5.Box.call(this, _0x15ebfd, _0x38bd22, _0x218c31);
                    this.flags = 0x0;
                    this.version = 0x0;
                },
                ContainerBox: function (_0x2c1e9d, _0x4f09ab, _0x2135dc) {
                    _0x5a8df5.Box.call(this, _0x2c1e9d, _0x4f09ab, _0x2135dc);
                    this.boxes = [];
                },
                SampleEntry: function (_0x2615ef, _0x53f865, _0xd10c77, _0x244f0a) {
                    _0x5a8df5.ContainerBox.call(this, _0x2615ef, _0x53f865);
                    this.hdr_size = _0xd10c77;
                    this.start = _0x244f0a;
                },
                SampleGroupEntry: function (_0xc846bd) {
                    this.grouping_type = _0xc846bd;
                },
                TrackGroupTypeBox: function (_0x5e35c1, _0x53579f) {
                    _0x5a8df5.FullBox.call(this, _0x5e35c1, _0x53579f);
                },
                createBoxCtor: function (_0xa7f37c, _0x39abe3) {
                    _0x5a8df5.boxCodes.push(_0xa7f37c);
                    _0x5a8df5[_0xa7f37c + "Box"] = function (_0x27f8c3) {
                        _0x5a8df5.Box.call(this, _0xa7f37c, _0x27f8c3);
                    };
                    _0x5a8df5[_0xa7f37c + "Box"].prototype = new _0x5a8df5.Box();
                    if (_0x39abe3) {
                        _0x5a8df5[_0xa7f37c + "Box"].prototype.parse = _0x39abe3;
                    }
                },
                createFullBoxCtor: function (_0x15d8c0, _0x3a7b40) {
                    _0x5a8df5[_0x15d8c0 + "Box"] = function (_0x5cdfda) {
                        _0x5a8df5.FullBox.call(this, _0x15d8c0, _0x5cdfda);
                    };
                    _0x5a8df5[_0x15d8c0 + "Box"].prototype = new _0x5a8df5.FullBox();
                    _0x5a8df5[_0x15d8c0 + "Box"].prototype.parse = function (_0x202be5) {
                        this.parseFullHeader(_0x202be5);
                        if (_0x3a7b40) {
                            _0x3a7b40.call(this, _0x202be5);
                        }
                    };
                },
                addSubBoxArrays: function (_0x81535c) {
                    if (_0x81535c) {
                        this.subBoxNames = _0x81535c;
                        var _0x202b54 = _0x81535c.length;
                        for (var _0x3450d6 = 0x0; _0x3450d6 < _0x202b54; _0x3450d6++) {
                            this[_0x81535c[_0x3450d6] + "s"] = [];
                        }
                    }
                },
                createContainerBoxCtor: function (_0x53a381, _0x48a25b, _0x269c8d) {
                    _0x5a8df5[_0x53a381 + "Box"] = function (_0x3c4c0b) {
                        _0x5a8df5.ContainerBox.call(this, _0x53a381, _0x3c4c0b);
                        _0x5a8df5.addSubBoxArrays.call(this, _0x269c8d);
                    };
                    _0x5a8df5[_0x53a381 + "Box"].prototype = new _0x5a8df5.ContainerBox();
                    if (_0x48a25b) {
                        _0x5a8df5[_0x53a381 + "Box"].prototype.parse = _0x48a25b;
                    }
                },
                createMediaSampleEntryCtor: function (_0x44327f, _0x45515d, _0x3aed5f) {
                    _0x5a8df5.sampleEntryCodes[_0x44327f] = [];
                    _0x5a8df5[_0x44327f + "SampleEntry"] = function (_0x2b3b2e, _0x1a2426) {
                        _0x5a8df5.SampleEntry.call(this, _0x2b3b2e, _0x1a2426);
                        _0x5a8df5.addSubBoxArrays.call(this, _0x3aed5f);
                    };
                    _0x5a8df5[_0x44327f + "SampleEntry"].prototype = new _0x5a8df5.SampleEntry();
                    if (_0x45515d) {
                        _0x5a8df5[_0x44327f + "SampleEntry"].prototype.parse = _0x45515d;
                    }
                },
                createSampleEntryCtor: function (_0x55d533, _0x57e7ca, _0x1c11b9, _0x43d7cd) {
                    _0x5a8df5.sampleEntryCodes[_0x55d533].push(_0x57e7ca);
                    _0x5a8df5[_0x57e7ca + "SampleEntry"] = function (_0x5625ad) {
                        _0x5a8df5[_0x55d533 + "SampleEntry"].call(this, _0x57e7ca, _0x5625ad);
                        _0x5a8df5.addSubBoxArrays.call(this, _0x43d7cd);
                    };
                    _0x5a8df5[_0x57e7ca + "SampleEntry"].prototype = new _0x5a8df5[_0x55d533 + "SampleEntry"]();
                    if (_0x1c11b9) {
                        _0x5a8df5[_0x57e7ca + "SampleEntry"].prototype.parse = _0x1c11b9;
                    }
                },
                createEncryptedSampleEntryCtor: function (_0x463f5f, _0x26bc3d, _0x51802a) {
                    _0x5a8df5.createSampleEntryCtor.call(this, _0x463f5f, _0x26bc3d, _0x51802a, ["sinf"]);
                },
                createSampleGroupCtor: function (_0x115e67, _0x5a736a) {
                    _0x5a8df5[_0x115e67 + "SampleGroupEntry"] = function (_0x496295) {
                        _0x5a8df5.SampleGroupEntry.call(this, _0x115e67, _0x496295);
                    };
                    _0x5a8df5[_0x115e67 + "SampleGroupEntry"].prototype = new _0x5a8df5.SampleGroupEntry();
                    if (_0x5a736a) {
                        _0x5a8df5[_0x115e67 + "SampleGroupEntry"].prototype.parse = _0x5a736a;
                    }
                },
                createTrackGroupCtor: function (_0x42b465, _0x23e78e) {
                    _0x5a8df5[_0x42b465 + "TrackGroupTypeBox"] = function (_0x34d9f8) {
                        _0x5a8df5.TrackGroupTypeBox.call(this, _0x42b465, _0x34d9f8);
                    };
                    _0x5a8df5[_0x42b465 + "TrackGroupTypeBox"].prototype = new _0x5a8df5.TrackGroupTypeBox();
                    if (_0x23e78e) {
                        _0x5a8df5[_0x42b465 + "TrackGroupTypeBox"].prototype.parse = _0x23e78e;
                    }
                },
                createUUIDBox: function (_0x1a9388, _0x146e51, _0x232b1d, _0x3909dc) {
                    _0x5a8df5.UUIDs.push(_0x1a9388);
                    _0x5a8df5.UUIDBoxes[_0x1a9388] = function (_0x169094) {
                        if (_0x146e51) {
                            _0x5a8df5.FullBox.call(this, "uuid", _0x169094, _0x1a9388);
                        } else if (_0x232b1d) {
                            _0x5a8df5.ContainerBox.call(this, "uuid", _0x169094, _0x1a9388);
                        } else {
                            _0x5a8df5.Box.call(this, "uuid", _0x169094, _0x1a9388);
                        }
                    };
                    _0x5a8df5.UUIDBoxes[_0x1a9388].prototype = _0x146e51
                        ? new _0x5a8df5.FullBox()
                        : _0x232b1d
                        ? new _0x5a8df5.ContainerBox()
                        : new _0x5a8df5.Box();
                    if (_0x3909dc) {
                        _0x5a8df5.UUIDBoxes[_0x1a9388].prototype.parse = _0x146e51
                            ? function (_0x3de73f) {
                                  this.parseFullHeader(_0x3de73f);
                                  if (_0x3909dc) {
                                      _0x3909dc.call(this, _0x3de73f);
                                  }
                              }
                            : _0x3909dc;
                    }
                },
            };
            _0x5a8df5.initialize();
            _0x5a8df5.TKHD_FLAG_ENABLED = 0x1;
            _0x5a8df5.TKHD_FLAG_IN_MOVIE = 0x2;
            _0x5a8df5.TKHD_FLAG_IN_PREVIEW = 0x4;
            _0x5a8df5.TFHD_FLAG_BASE_DATA_OFFSET = 0x1;
            _0x5a8df5.TFHD_FLAG_SAMPLE_DESC = 0x2;
            _0x5a8df5.TFHD_FLAG_SAMPLE_DUR = 0x8;
            _0x5a8df5.TFHD_FLAG_SAMPLE_SIZE = 0x10;
            _0x5a8df5.TFHD_FLAG_SAMPLE_FLAGS = 0x20;
            _0x5a8df5.TFHD_FLAG_DUR_EMPTY = 0x10000;
            _0x5a8df5.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 0x20000;
            _0x5a8df5.TRUN_FLAGS_DATA_OFFSET = 0x1;
            _0x5a8df5.TRUN_FLAGS_FIRST_FLAG = 0x4;
            _0x5a8df5.TRUN_FLAGS_DURATION = 0x100;
            _0x5a8df5.TRUN_FLAGS_SIZE = 0x200;
            _0x5a8df5.TRUN_FLAGS_FLAGS = 0x400;
            _0x5a8df5.TRUN_FLAGS_CTS_OFFSET = 0x800;
            _0x5a8df5.Box.prototype.add = function (_0x4771e2) {
                return this.addBox(new _0x5a8df5[_0x4771e2 + "Box"]());
            };
            _0x5a8df5.Box.prototype.addBox = function (_0x2639dd) {
                this.boxes.push(_0x2639dd);
                if (this[_0x2639dd.type + "s"]) {
                    this[_0x2639dd.type + "s"].push(_0x2639dd);
                } else {
                    this[_0x2639dd.type] = _0x2639dd;
                }
                return _0x2639dd;
            };
            _0x5a8df5.Box.prototype.set = function (_0x11694b, _0x5c05c9) {
                this[_0x11694b] = _0x5c05c9;
                return this;
            };
            _0x5a8df5.Box.prototype.addEntry = function (_0x34a922, _0x5ce9f7) {
                var _0x3fb107 = _0x5ce9f7 || "entries";
                if (!this[_0x3fb107]) {
                    this[_0x3fb107] = [];
                }
                this[_0x3fb107].push(_0x34a922);
                return this;
            };
            _0x3644a2.BoxParser = _0x5a8df5;
            _0x5a8df5.parseUUID = function (_0x67e7c5) {
                return _0x5a8df5.parseHex16(_0x67e7c5);
            };
            _0x5a8df5.parseHex16 = function (_0x510e26) {
                var _0x54558f = "";
                for (var _0x219f5b = 0x0; _0x219f5b < 0x10; _0x219f5b++) {
                    var _0x2b5c97 = _0x510e26.readUint8().toString(0x10);
                    _0x54558f += 0x1 === _0x2b5c97.length ? "0" + _0x2b5c97 : _0x2b5c97;
                }
                return _0x54558f;
            };
            _0x5a8df5.parseOneBox = function (_0x3bd9c5, _0x164b42, _0x548cdd) {
                var _0x3d9ca0;
                var _0x2701b4;
                var _0x1117c7;
                var _0x2f87f2 = _0x3bd9c5.getPosition();
                var _0x13e7e1 = 0x0;
                var _0x505368 = {
                    code: 0x0,
                };
                if (_0x3bd9c5.getEndPosition() - _0x2f87f2 < 0x8) {
                    _0x5a6c18.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
                    return _0x505368;
                }
                var _0x34d585 = {
                    code: 0x0,
                };
                if (_0x548cdd && _0x548cdd < 0x8) {
                    _0x5a6c18.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
                    return _0x34d585;
                }
                var _0x28309f = _0x3bd9c5.readUint32();
                var _0x314b18 = _0x3bd9c5.readString(0x4);
                var _0x2a6f81 = _0x314b18;
                _0x5a6c18.debug("BoxParser", "Found box of type '" + _0x314b18 + "' and size " + _0x28309f + " at position " + _0x2f87f2);
                _0x13e7e1 = 0x8;
                if ("uuid" == _0x314b18) {
                    var _0x1cd6be = {
                        code: 0x0,
                    };
                    if (_0x3bd9c5.getEndPosition() - _0x3bd9c5.getPosition() < 0x10 || _0x548cdd - _0x13e7e1 < 0x10) {
                        _0x3bd9c5.seek(_0x2f87f2);
                        _0x5a6c18.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
                        return _0x1cd6be;
                    }
                    _0x13e7e1 += 0x10;
                    _0x2a6f81 = _0x1117c7 = _0x5a8df5.parseUUID(_0x3bd9c5);
                }
                if (0x1 == _0x28309f) {
                    var _0x1f8696 = {
                        code: 0x0,
                    };
                    if (_0x3bd9c5.getEndPosition() - _0x3bd9c5.getPosition() < 0x8 || (_0x548cdd && _0x548cdd - _0x13e7e1 < 0x8)) {
                        _0x3bd9c5.seek(_0x2f87f2);
                        _0x5a6c18.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + _0x314b18 + '" box');
                        return _0x1f8696;
                    }
                    _0x28309f = _0x3bd9c5.readUint64();
                    _0x13e7e1 += 0x8;
                } else {
                    if (0x0 === _0x28309f) {
                        if (_0x548cdd) {
                            _0x28309f = _0x548cdd;
                        } else {
                            if ("mdat" !== _0x314b18) {
                                _0x5a6c18.error("BoxParser", "Unlimited box size not supported for type: '" + _0x314b18 + "'");
                                _0x3d9ca0 = new _0x5a8df5.Box(_0x314b18, _0x28309f);
                                return {
                                    code: 0x1,
                                    box: _0x3d9ca0,
                                    size: _0x3d9ca0.size,
                                };
                            }
                        }
                    }
                }
                return 0x0 !== _0x28309f && _0x28309f < _0x13e7e1
                    ? (_0x5a6c18.error("BoxParser", "Box of type " + _0x314b18 + " has an invalid size " + _0x28309f + " (too small to be a box)"),
                      {
                          code: 0x0,
                          type: _0x314b18,
                          size: _0x28309f,
                          hdr_size: _0x13e7e1,
                          start: _0x2f87f2,
                      })
                    : 0x0 !== _0x28309f && _0x548cdd && _0x28309f > _0x548cdd
                    ? (_0x5a6c18.error(
                          "BoxParser",
                          "Box of type '" + _0x314b18 + "' has a size " + _0x28309f + " greater than its container size " + _0x548cdd
                      ),
                      {
                          code: 0x0,
                          type: _0x314b18,
                          size: _0x28309f,
                          hdr_size: _0x13e7e1,
                          start: _0x2f87f2,
                      })
                    : 0x0 !== _0x28309f && _0x2f87f2 + _0x28309f > _0x3bd9c5.getEndPosition()
                    ? (_0x3bd9c5.seek(_0x2f87f2),
                      _0x5a6c18.info("BoxParser", "Not enough data in stream to parse the entire '" + _0x314b18 + "' box"),
                      {
                          code: 0x0,
                          type: _0x314b18,
                          size: _0x28309f,
                          hdr_size: _0x13e7e1,
                          start: _0x2f87f2,
                      })
                    : _0x164b42
                    ? {
                          code: 0x1,
                          type: _0x314b18,
                          size: _0x28309f,
                          hdr_size: _0x13e7e1,
                          start: _0x2f87f2,
                      }
                    : (_0x5a8df5[_0x314b18 + "Box"]
                          ? (_0x3d9ca0 = new _0x5a8df5[_0x314b18 + "Box"](_0x28309f))
                          : "uuid" !== _0x314b18
                          ? (_0x5a6c18.warn("BoxParser", "Unknown box type: '" + _0x314b18 + "'"),
                            ((_0x3d9ca0 = new _0x5a8df5.Box(_0x314b18, _0x28309f)).has_unparsed_data = true))
                          : _0x5a8df5.UUIDBoxes[_0x1117c7]
                          ? (_0x3d9ca0 = new _0x5a8df5.UUIDBoxes[_0x1117c7](_0x28309f))
                          : (_0x5a6c18.warn("BoxParser", "Unknown uuid type: '" + _0x1117c7 + "'"),
                            ((_0x3d9ca0 = new _0x5a8df5.Box(_0x314b18, _0x28309f)).uuid = _0x1117c7),
                            (_0x3d9ca0.has_unparsed_data = true)),
                      (_0x3d9ca0.hdr_size = _0x13e7e1),
                      (_0x3d9ca0.start = _0x2f87f2),
                      _0x3d9ca0.write === _0x5a8df5.Box.prototype.write &&
                          "mdat" !== _0x3d9ca0.type &&
                          (_0x5a6c18.info("BoxParser", "'" + _0x2a6f81 + "' box writing not yet implemented, keeping unparsed data in memory for later write"),
                          _0x3d9ca0.parseDataAndRewind(_0x3bd9c5)),
                      _0x3d9ca0.parse(_0x3bd9c5),
                      (_0x2701b4 = _0x3bd9c5.getPosition() - (_0x3d9ca0.start + _0x3d9ca0.size)) < 0x0
                          ? (_0x5a6c18.warn(
                                "BoxParser",
                                "Parsing of box '" +
                                    _0x2a6f81 +
                                    "' did not read the entire indicated box data size (missing " +
                                    -_0x2701b4 +
                                    " bytes), seeking forward"
                            ),
                            _0x3bd9c5.seek(_0x3d9ca0.start + _0x3d9ca0.size))
                          : _0x2701b4 > 0x0 &&
                            (_0x5a6c18.error(
                                "BoxParser",
                                "Parsing of box '" + _0x2a6f81 + "' read " + _0x2701b4 + " more bytes than the indicated box data size, seeking backwards"
                            ),
                            0x0 !== _0x3d9ca0.size && _0x3bd9c5.seek(_0x3d9ca0.start + _0x3d9ca0.size)),
                      {
                          code: 0x1,
                          box: _0x3d9ca0,
                          size: _0x3d9ca0.size,
                      });
            };
            _0x5a8df5.Box.prototype.parse = function (_0x310531) {
                if ("mdat" != this.type) {
                    this.data = _0x310531.readUint8Array(this.size - this.hdr_size);
                } else if (0x0 === this.size) {
                    _0x310531.seek(_0x310531.getEndPosition());
                } else {
                    _0x310531.seek(this.start + this.size);
                }
            };
            _0x5a8df5.Box.prototype.parseDataAndRewind = function (_0x250ef2) {
                this.data = _0x250ef2.readUint8Array(this.size - this.hdr_size);
                _0x250ef2.position -= this.size - this.hdr_size;
            };
            _0x5a8df5.FullBox.prototype.parseDataAndRewind = function (_0x3a048b) {
                this.parseFullHeader(_0x3a048b);
                this.data = _0x3a048b.readUint8Array(this.size - this.hdr_size);
                this.hdr_size -= 0x4;
                _0x3a048b.position -= this.size - this.hdr_size;
            };
            _0x5a8df5.FullBox.prototype.parseFullHeader = function (_0x276d5c) {
                this.version = _0x276d5c.readUint8();
                this.flags = _0x276d5c.readUint24();
                this.hdr_size += 0x4;
            };
            _0x5a8df5.FullBox.prototype.parse = function (_0x575fa0) {
                this.parseFullHeader(_0x575fa0);
                this.data = _0x575fa0.readUint8Array(this.size - this.hdr_size);
            };
            _0x5a8df5.ContainerBox.prototype.parse = function (_0x52cf4f) {
                var _0x44a530;
                for (var _0x249253; _0x52cf4f.getPosition() < this.start + this.size; ) {
                    if ((_0x44a530 = _0x5a8df5.parseOneBox(_0x52cf4f, false, this.size - (_0x52cf4f.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    _0x249253 = _0x44a530.box;
                    this.boxes.push(_0x249253);
                    if (this.subBoxNames && -0x1 != this.subBoxNames.indexOf(_0x249253.type)) {
                        this[this.subBoxNames[this.subBoxNames.indexOf(_0x249253.type)] + "s"].push(_0x249253);
                    } else {
                        var _0x465029 = "uuid" !== _0x249253.type ? _0x249253.type : _0x249253.uuid;
                        if (this[_0x465029]) {
                            _0x5a6c18.warn("Box of type " + _0x465029 + " already stored in field of this type");
                        } else {
                            this[_0x465029] = _0x249253;
                        }
                    }
                }
            };
            _0x5a8df5.Box.prototype.parseLanguage = function (_0x441f9f) {
                this.language = _0x441f9f.readUint16();
                var _0xe475c1 = [];
                _0xe475c1[0x0] = (this.language >> 0xa) & 0x1f;
                _0xe475c1[0x1] = (this.language >> 0x5) & 0x1f;
                _0xe475c1[0x2] = 0x1f & this.language;
                this.languageString = String.fromCharCode(_0xe475c1[0x0] + 0x60, _0xe475c1[0x1] + 0x60, _0xe475c1[0x2] + 0x60);
            };
            _0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL = "Visual";
            _0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO = "Audio";
            _0x5a8df5.SAMPLE_ENTRY_TYPE_HINT = "Hint";
            _0x5a8df5.SAMPLE_ENTRY_TYPE_METADATA = "Metadata";
            _0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle";
            _0x5a8df5.SAMPLE_ENTRY_TYPE_SYSTEM = "System";
            _0x5a8df5.SAMPLE_ENTRY_TYPE_TEXT = "Text";
            _0x5a8df5.SampleEntry.prototype.parseHeader = function (_0x117d25) {
                _0x117d25.readUint8Array(0x6);
                this.data_reference_index = _0x117d25.readUint16();
                this.hdr_size += 0x8;
            };
            _0x5a8df5.SampleEntry.prototype.parse = function (_0x1ed3f3) {
                this.parseHeader(_0x1ed3f3);
                this.data = _0x1ed3f3.readUint8Array(this.size - this.hdr_size);
            };
            _0x5a8df5.SampleEntry.prototype.parseDataAndRewind = function (_0x4d60b7) {
                this.parseHeader(_0x4d60b7);
                this.data = _0x4d60b7.readUint8Array(this.size - this.hdr_size);
                this.hdr_size -= 0x8;
                _0x4d60b7.position -= this.size - this.hdr_size;
            };
            _0x5a8df5.SampleEntry.prototype.parseFooter = function (_0x1c91ae) {
                _0x5a8df5.ContainerBox.prototype.parse.call(this, _0x1c91ae);
            };
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_HINT);
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_METADATA);
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE);
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SYSTEM);
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_TEXT);
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, function (_0x259cc8) {
                var _0x1e53db;
                this.parseHeader(_0x259cc8);
                _0x259cc8.readUint16();
                _0x259cc8.readUint16();
                _0x259cc8.readUint32Array(0x3);
                this.width = _0x259cc8.readUint16();
                this.height = _0x259cc8.readUint16();
                this.horizresolution = _0x259cc8.readUint32();
                this.vertresolution = _0x259cc8.readUint32();
                _0x259cc8.readUint32();
                this.frame_count = _0x259cc8.readUint16();
                _0x1e53db = Math.min(0x1f, _0x259cc8.readUint8());
                this.compressorname = _0x259cc8.readString(_0x1e53db);
                if (_0x1e53db < 0x1f) {
                    _0x259cc8.readString(0x1f - _0x1e53db);
                }
                this.depth = _0x259cc8.readUint16();
                _0x259cc8.readUint16();
                this.parseFooter(_0x259cc8);
            });
            _0x5a8df5.createMediaSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO, function (_0x21c1a7) {
                this.parseHeader(_0x21c1a7);
                _0x21c1a7.readUint32Array(0x2);
                this.channel_count = _0x21c1a7.readUint16();
                this.samplesize = _0x21c1a7.readUint16();
                _0x21c1a7.readUint16();
                _0x21c1a7.readUint16();
                this.samplerate = _0x21c1a7.readUint32() / 0x10000;
                this.parseFooter(_0x21c1a7);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "avc1");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "avc2");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "avc3");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "avc4");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "av01");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "hev1");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "vp08");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "vp09");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3");
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO, "Opus");
            _0x5a8df5.createEncryptedSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_VISUAL, "encv");
            _0x5a8df5.createEncryptedSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_AUDIO, "enca");
            _0x5a8df5.createEncryptedSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu");
            _0x5a8df5.createEncryptedSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SYSTEM, "encs");
            _0x5a8df5.createEncryptedSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_TEXT, "enct");
            _0x5a8df5.createEncryptedSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_METADATA, "encm");
            _0x5a8df5.createBoxCtor("a1lx", function (_0x538dd4) {
                var _0x189521 = 0x10 * (0x1 + (0x1 & _0x538dd4.readUint8()));
                this.layer_size = [];
                for (var _0x39b338 = 0x0; _0x39b338 < 0x3; _0x39b338++) {
                    this.layer_size[_0x39b338] = 0x10 == _0x189521 ? _0x538dd4.readUint16() : _0x538dd4.readUint32();
                }
            });
            _0x5a8df5.createBoxCtor("a1op", function (_0x3699ad) {
                this.op_index = _0x3699ad.readUint8();
            });
            _0x5a8df5.createFullBoxCtor("auxC", function (_0x374b14) {
                this.aux_type = _0x374b14.readCString();
                var _0x10552c = this.size - this.hdr_size - (this.aux_type.length + 0x1);
                this.aux_subtype = _0x374b14.readUint8Array(_0x10552c);
            });
            _0x5a8df5.createBoxCtor("av1C", function (_0x10dde6) {
                var _0x4827a0 = _0x10dde6.readUint8();
                if ((_0x4827a0 >> 0x7) & false) {
                    _0x5a6c18.error("av1C marker problem");
                } else {
                    this.version = 0x7f & _0x4827a0;
                    if (0x1 === this.version) {
                        _0x4827a0 = _0x10dde6.readUint8();
                        this.seq_profile = (_0x4827a0 >> 0x5) & 0x7;
                        this.seq_level_idx_0 = 0x1f & _0x4827a0;
                        _0x4827a0 = _0x10dde6.readUint8();
                        this.seq_tier_0 = (_0x4827a0 >> 0x7) & 0x1;
                        this.high_bitdepth = (_0x4827a0 >> 0x6) & 0x1;
                        this.twelve_bit = (_0x4827a0 >> 0x5) & 0x1;
                        this.monochrome = (_0x4827a0 >> 0x4) & 0x1;
                        this.chroma_subsampling_x = (_0x4827a0 >> 0x3) & 0x1;
                        this.chroma_subsampling_y = (_0x4827a0 >> 0x2) & 0x1;
                        this.chroma_sample_position = 0x3 & _0x4827a0;
                        _0x4827a0 = _0x10dde6.readUint8();
                        this.reserved_1 = (_0x4827a0 >> 0x5) & 0x7;
                        if (0x0 === this.reserved_1) {
                            this.initial_presentation_delay_present = (_0x4827a0 >> 0x4) & 0x1;
                            if (0x1 === this.initial_presentation_delay_present) {
                                this.initial_presentation_delay_minus_one = 0xf & _0x4827a0;
                            } else {
                                this.reserved_2 = 0xf & _0x4827a0;
                                if (0x0 !== this.reserved_2) {
                                    return void _0x5a6c18.error("av1C reserved_2 parsing problem");
                                }
                            }
                            var _0xa86168 = this.size - this.hdr_size - 0x4;
                            this.configOBUs = _0x10dde6.readUint8Array(_0xa86168);
                        } else {
                            _0x5a6c18.error("av1C reserved_1 parsing problem");
                        }
                    } else {
                        _0x5a6c18.error("av1C version " + this.version + " not supported");
                    }
                }
            });
            _0x5a8df5.createBoxCtor("avcC", function (_0x696caa) {
                var _0x232ab1;
                var _0x2df107;
                this.configurationVersion = _0x696caa.readUint8();
                this.AVCProfileIndication = _0x696caa.readUint8();
                this.profile_compatibility = _0x696caa.readUint8();
                this.AVCLevelIndication = _0x696caa.readUint8();
                this.lengthSizeMinusOne = 0x3 & _0x696caa.readUint8();
                this.nb_SPS_nalus = 0x1f & _0x696caa.readUint8();
                _0x2df107 = this.size - this.hdr_size - 0x6;
                this.SPS = [];
                for (_0x232ab1 = 0x0; _0x232ab1 < this.nb_SPS_nalus; _0x232ab1++) {
                    this.SPS[_0x232ab1] = {};
                    this.SPS[_0x232ab1].length = _0x696caa.readUint16();
                    this.SPS[_0x232ab1].nalu = _0x696caa.readUint8Array(this.SPS[_0x232ab1].length);
                    _0x2df107 -= 0x2 + this.SPS[_0x232ab1].length;
                }
                this.nb_PPS_nalus = _0x696caa.readUint8();
                _0x2df107--;
                this.PPS = [];
                for (_0x232ab1 = 0x0; _0x232ab1 < this.nb_PPS_nalus; _0x232ab1++) {
                    this.PPS[_0x232ab1] = {};
                    this.PPS[_0x232ab1].length = _0x696caa.readUint16();
                    this.PPS[_0x232ab1].nalu = _0x696caa.readUint8Array(this.PPS[_0x232ab1].length);
                    _0x2df107 -= 0x2 + this.PPS[_0x232ab1].length;
                }
                if (_0x2df107 > 0x0) {
                    this.ext = _0x696caa.readUint8Array(_0x2df107);
                }
            });
            _0x5a8df5.createBoxCtor("btrt", function (_0x54f40c) {
                this.bufferSizeDB = _0x54f40c.readUint32();
                this.maxBitrate = _0x54f40c.readUint32();
                this.avgBitrate = _0x54f40c.readUint32();
            });
            _0x5a8df5.createBoxCtor("clap", function (_0x2d4e6b) {
                this.cleanApertureWidthN = _0x2d4e6b.readUint32();
                this.cleanApertureWidthD = _0x2d4e6b.readUint32();
                this.cleanApertureHeightN = _0x2d4e6b.readUint32();
                this.cleanApertureHeightD = _0x2d4e6b.readUint32();
                this.horizOffN = _0x2d4e6b.readUint32();
                this.horizOffD = _0x2d4e6b.readUint32();
                this.vertOffN = _0x2d4e6b.readUint32();
                this.vertOffD = _0x2d4e6b.readUint32();
            });
            _0x5a8df5.createBoxCtor("clli", function (_0xb0b34f) {
                this.max_content_light_level = _0xb0b34f.readUint16();
                this.max_pic_average_light_level = _0xb0b34f.readUint16();
            });
            _0x5a8df5.createFullBoxCtor("co64", function (_0x46f160) {
                var _0x212350;
                var _0x5eb6c8;
                _0x212350 = _0x46f160.readUint32();
                this.chunk_offsets = [];
                if (0x0 === this.version) {
                    for (_0x5eb6c8 = 0x0; _0x5eb6c8 < _0x212350; _0x5eb6c8++) {
                        this.chunk_offsets.push(_0x46f160.readUint64());
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("CoLL", function (_0x5e215e) {
                this.maxCLL = _0x5e215e.readUint16();
                this.maxFALL = _0x5e215e.readUint16();
            });
            _0x5a8df5.createBoxCtor("colr", function (_0x307685) {
                this.colour_type = _0x307685.readString(0x4);
                if ("nclx" === this.colour_type) {
                    this.colour_primaries = _0x307685.readUint16();
                    this.transfer_characteristics = _0x307685.readUint16();
                    this.matrix_coefficients = _0x307685.readUint16();
                    var _0x402a4a = _0x307685.readUint8();
                    this.full_range_flag = _0x402a4a >> 0x7;
                } else if ("rICC" === this.colour_type || "prof" === this.colour_type) {
                    this.ICC_profile = _0x307685.readUint8Array(this.size - 0x4);
                }
            });
            _0x5a8df5.createFullBoxCtor("cprt", function (_0x5615d3) {
                this.parseLanguage(_0x5615d3);
                this.notice = _0x5615d3.readCString();
            });
            _0x5a8df5.createFullBoxCtor("cslg", function (_0x4efc9e) {
                if (0x0 === this.version) {
                    this.compositionToDTSShift = _0x4efc9e.readInt32();
                    this.leastDecodeToDisplayDelta = _0x4efc9e.readInt32();
                    this.greatestDecodeToDisplayDelta = _0x4efc9e.readInt32();
                    this.compositionStartTime = _0x4efc9e.readInt32();
                    this.compositionEndTime = _0x4efc9e.readInt32();
                }
            });
            _0x5a8df5.createFullBoxCtor("ctts", function (_0x664c3c) {
                var _0x3538e1;
                var _0xfab54d;
                _0x3538e1 = _0x664c3c.readUint32();
                this.sample_counts = [];
                this.sample_offsets = [];
                if (0x0 === this.version) {
                    for (_0xfab54d = 0x0; _0xfab54d < _0x3538e1; _0xfab54d++) {
                        this.sample_counts.push(_0x664c3c.readUint32());
                        var _0x517298 = _0x664c3c.readInt32();
                        if (_0x517298 < 0x0) {
                            _0x5a6c18.warn("BoxParser", "ctts box uses negative values without using version 1");
                        }
                        this.sample_offsets.push(_0x517298);
                    }
                } else {
                    if (0x1 == this.version) {
                        for (_0xfab54d = 0x0; _0xfab54d < _0x3538e1; _0xfab54d++) {
                            this.sample_counts.push(_0x664c3c.readUint32());
                            this.sample_offsets.push(_0x664c3c.readInt32());
                        }
                    }
                }
            });
            _0x5a8df5.createBoxCtor("dac3", function (_0x5dea57) {
                var _0x65f59c = _0x5dea57.readUint8();
                var _0x9f160f = _0x5dea57.readUint8();
                var _0x150999 = _0x5dea57.readUint8();
                this.fscod = _0x65f59c >> 0x6;
                this.bsid = (_0x65f59c >> 0x1) & 0x1f;
                this.bsmod = ((0x1 & _0x65f59c) << 0x2) | ((_0x9f160f >> 0x6) & 0x3);
                this.acmod = (_0x9f160f >> 0x3) & 0x7;
                this.lfeon = (_0x9f160f >> 0x2) & 0x1;
                this.bit_rate_code = (0x3 & _0x9f160f) | ((_0x150999 >> 0x5) & 0x7);
            });
            _0x5a8df5.createBoxCtor("dec3", function (_0x1987b0) {
                var _0x30b016 = _0x1987b0.readUint16();
                this.data_rate = _0x30b016 >> 0x3;
                this.num_ind_sub = 0x7 & _0x30b016;
                this.ind_subs = [];
                for (var _0x3ce2e0 = 0x0; _0x3ce2e0 < this.num_ind_sub + 0x1; _0x3ce2e0++) {
                    var _0x55c559 = {};
                    this.ind_subs.push(_0x55c559);
                    var _0x36dc98 = _0x1987b0.readUint8();
                    var _0x1faf16 = _0x1987b0.readUint8();
                    var _0x36fef3 = _0x1987b0.readUint8();
                    _0x55c559.fscod = _0x36dc98 >> 0x6;
                    _0x55c559.bsid = (_0x36dc98 >> 0x1) & 0x1f;
                    _0x55c559.bsmod = ((0x1 & _0x36dc98) << 0x4) | ((_0x1faf16 >> 0x4) & 0xf);
                    _0x55c559.acmod = (_0x1faf16 >> 0x1) & 0x7;
                    _0x55c559.lfeon = 0x1 & _0x1faf16;
                    _0x55c559.num_dep_sub = (_0x36fef3 >> 0x1) & 0xf;
                    if (_0x55c559.num_dep_sub > 0x0) {
                        _0x55c559.chan_loc = ((0x1 & _0x36fef3) << 0x8) | _0x1987b0.readUint8();
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("dfLa", function (_0x407ec3) {
                var _0xda01be = [];
                var _0x43c4fe = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
                for (this.parseFullHeader(_0x407ec3); ; ) {
                    var _0xb4af9e = _0x407ec3.readUint8();
                    var _0x5de060 = Math.min(0x7f & _0xb4af9e, _0x43c4fe.length - 0x1);
                    if (_0x5de060) {
                        _0x407ec3.readUint8Array(_0x407ec3.readUint24());
                    } else {
                        _0x407ec3.readUint8Array(0xd);
                        this.samplerate = _0x407ec3.readUint32() >> 0xc;
                        _0x407ec3.readUint8Array(0x14);
                    }
                    _0xda01be.push(_0x43c4fe[_0x5de060]);
                    if (0x80 & _0xb4af9e) {
                        break;
                    }
                }
                this.numMetadataBlocks = _0xda01be.length + " (" + _0xda01be.join(", ") + ")";
            });
            _0x5a8df5.createBoxCtor("dimm", function (_0x3e8826) {
                this.bytessent = _0x3e8826.readUint64();
            });
            _0x5a8df5.createBoxCtor("dmax", function (_0x4dfa0f) {
                this.time = _0x4dfa0f.readUint32();
            });
            _0x5a8df5.createBoxCtor("dmed", function (_0x521ad8) {
                this.bytessent = _0x521ad8.readUint64();
            });
            _0x5a8df5.createBoxCtor("dOps", function (_0x171cc7) {
                this.Version = _0x171cc7.readUint8();
                this.OutputChannelCount = _0x171cc7.readUint8();
                this.PreSkip = _0x171cc7.readUint16();
                this.InputSampleRate = _0x171cc7.readUint32();
                this.OutputGain = _0x171cc7.readInt16();
                this.ChannelMappingFamily = _0x171cc7.readUint8();
                if (0x0 !== this.ChannelMappingFamily) {
                    this.StreamCount = _0x171cc7.readUint8();
                    this.CoupledCount = _0x171cc7.readUint8();
                    this.ChannelMapping = [];
                    for (var _0x30666e = 0x0; _0x30666e < this.OutputChannelCount; _0x30666e++) {
                        this.ChannelMapping[_0x30666e] = _0x171cc7.readUint8();
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("dref", function (_0x6dec55) {
                var _0xe88df1;
                var _0x593de2;
                this.entries = [];
                var _0xc5bba7 = _0x6dec55.readUint32();
                for (var _0x4ee218 = 0x0; _0x4ee218 < _0xc5bba7; _0x4ee218++) {
                    if ((_0xe88df1 = _0x5a8df5.parseOneBox(_0x6dec55, false, this.size - (_0x6dec55.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    _0x593de2 = _0xe88df1.box;
                    this.entries.push(_0x593de2);
                }
            });
            _0x5a8df5.createBoxCtor("drep", function (_0x2d139f) {
                this.bytessent = _0x2d139f.readUint64();
            });
            _0x5a8df5.createFullBoxCtor("elng", function (_0x763469) {
                this.extended_language = _0x763469.readString(this.size - this.hdr_size);
            });
            _0x5a8df5.createFullBoxCtor("elst", function (_0x2bb9c6) {
                this.entries = [];
                var _0xa76869 = _0x2bb9c6.readUint32();
                for (var _0x594cc7 = 0x0; _0x594cc7 < _0xa76869; _0x594cc7++) {
                    var _0x43c07b = {};
                    this.entries.push(_0x43c07b);
                    if (0x1 === this.version) {
                        _0x43c07b.segment_duration = _0x2bb9c6.readUint64();
                        _0x43c07b.media_time = _0x2bb9c6.readInt64();
                    } else {
                        _0x43c07b.segment_duration = _0x2bb9c6.readUint32();
                        _0x43c07b.media_time = _0x2bb9c6.readInt32();
                    }
                    _0x43c07b.media_rate_integer = _0x2bb9c6.readInt16();
                    _0x43c07b.media_rate_fraction = _0x2bb9c6.readInt16();
                }
            });
            _0x5a8df5.createFullBoxCtor("emsg", function (_0x496f28) {
                if (0x1 == this.version) {
                    this.timescale = _0x496f28.readUint32();
                    this.presentation_time = _0x496f28.readUint64();
                    this.event_duration = _0x496f28.readUint32();
                    this.id = _0x496f28.readUint32();
                    this.scheme_id_uri = _0x496f28.readCString();
                    this.value = _0x496f28.readCString();
                } else {
                    this.scheme_id_uri = _0x496f28.readCString();
                    this.value = _0x496f28.readCString();
                    this.timescale = _0x496f28.readUint32();
                    this.presentation_time_delta = _0x496f28.readUint32();
                    this.event_duration = _0x496f28.readUint32();
                    this.id = _0x496f28.readUint32();
                }
                var _0x419be7 = this.size - this.hdr_size - (0x10 + (this.scheme_id_uri.length + 0x1) + (this.value.length + 0x1));
                if (0x1 == this.version) {
                    _0x419be7 -= 0x4;
                }
                this.message_data = _0x496f28.readUint8Array(_0x419be7);
            });
            _0x5a8df5.createFullBoxCtor("esds", function (_0x579575) {
                var _0x36bcd1 = _0x579575.readUint8Array(this.size - this.hdr_size);
                if (undefined !== _0x55495a) {
                    var _0x531834 = new _0x55495a();
                    this.esd = _0x531834.parseOneDescriptor(new _0x36e1b4(_0x36bcd1.buffer, 0x0, _0x36e1b4.BIG_ENDIAN));
                }
            });
            _0x5a8df5.createBoxCtor("fiel", function (_0x3b68ff) {
                this.fieldCount = _0x3b68ff.readUint8();
                this.fieldOrdering = _0x3b68ff.readUint8();
            });
            _0x5a8df5.createBoxCtor("frma", function (_0xf09edc) {
                this.data_format = _0xf09edc.readString(0x4);
            });
            _0x5a8df5.createBoxCtor("ftyp", function (_0xab967f) {
                var _0x55c454 = this.size - this.hdr_size;
                this.major_brand = _0xab967f.readString(0x4);
                this.minor_version = _0xab967f.readUint32();
                _0x55c454 -= 0x8;
                this.compatible_brands = [];
                for (var _0x57f26d = 0x0; _0x55c454 >= 0x4; ) {
                    this.compatible_brands[_0x57f26d] = _0xab967f.readString(0x4);
                    _0x55c454 -= 0x4;
                    _0x57f26d++;
                }
            });
            _0x5a8df5.createFullBoxCtor("hdlr", function (_0xdd7e30) {
                if (0x0 === this.version) {
                    _0xdd7e30.readUint32();
                    this.handler = _0xdd7e30.readString(0x4);
                    _0xdd7e30.readUint32Array(0x3);
                    this.name = _0xdd7e30.readString(this.size - this.hdr_size - 0x14);
                    if ("\0" === this.name[this.name.length - 0x1]) {
                        this.name = this.name.slice(0x0, -0x1);
                    }
                }
            });
            _0x5a8df5.createBoxCtor("hvcC", function (_0x3d7dc6) {
                var _0x5e2773;
                var _0x108f7a;
                var _0x3df713;
                var _0x13fc95;
                this.configurationVersion = _0x3d7dc6.readUint8();
                _0x13fc95 = _0x3d7dc6.readUint8();
                this.general_profile_space = _0x13fc95 >> 0x6;
                this.general_tier_flag = (0x20 & _0x13fc95) >> 0x5;
                this.general_profile_idc = 0x1f & _0x13fc95;
                this.general_profile_compatibility = _0x3d7dc6.readUint32();
                this.general_constraint_indicator = _0x3d7dc6.readUint8Array(0x6);
                this.general_level_idc = _0x3d7dc6.readUint8();
                this.min_spatial_segmentation_idc = 0xfff & _0x3d7dc6.readUint16();
                this.parallelismType = 0x3 & _0x3d7dc6.readUint8();
                this.chroma_format_idc = 0x3 & _0x3d7dc6.readUint8();
                this.bit_depth_luma_minus8 = 0x7 & _0x3d7dc6.readUint8();
                this.bit_depth_chroma_minus8 = 0x7 & _0x3d7dc6.readUint8();
                this.avgFrameRate = _0x3d7dc6.readUint16();
                _0x13fc95 = _0x3d7dc6.readUint8();
                this.constantFrameRate = _0x13fc95 >> 0x6;
                this.numTemporalLayers = (0xd & _0x13fc95) >> 0x3;
                this.temporalIdNested = (0x4 & _0x13fc95) >> 0x2;
                this.lengthSizeMinusOne = 0x3 & _0x13fc95;
                this.nalu_arrays = [];
                var _0x44ea8b = _0x3d7dc6.readUint8();
                for (_0x5e2773 = 0x0; _0x5e2773 < _0x44ea8b; _0x5e2773++) {
                    var _0xdc13bc = [];
                    this.nalu_arrays.push(_0xdc13bc);
                    _0x13fc95 = _0x3d7dc6.readUint8();
                    _0xdc13bc.completeness = (0x80 & _0x13fc95) >> 0x7;
                    _0xdc13bc.nalu_type = 0x3f & _0x13fc95;
                    var _0x294baa = _0x3d7dc6.readUint16();
                    for (_0x108f7a = 0x0; _0x108f7a < _0x294baa; _0x108f7a++) {
                        var _0x52af17 = {};
                        _0xdc13bc.push(_0x52af17);
                        _0x3df713 = _0x3d7dc6.readUint16();
                        _0x52af17.data = _0x3d7dc6.readUint8Array(_0x3df713);
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("iinf", function (_0x4e665d) {
                var _0x2f6892;
                if (0x0 === this.version) {
                    this.entry_count = _0x4e665d.readUint16();
                } else {
                    this.entry_count = _0x4e665d.readUint32();
                }
                this.item_infos = [];
                for (var _0x181fee = 0x0; _0x181fee < this.entry_count; _0x181fee++) {
                    if ((_0x2f6892 = _0x5a8df5.parseOneBox(_0x4e665d, false, this.size - (_0x4e665d.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    if ("infe" !== _0x2f6892.box.type) {
                        _0x5a6c18.error("BoxParser", "Expected 'infe' box, got " + _0x2f6892.box.type);
                    }
                    this.item_infos[_0x181fee] = _0x2f6892.box;
                }
            });
            _0x5a8df5.createFullBoxCtor("iloc", function (_0x1aca51) {
                var _0x1a6c7a;
                _0x1a6c7a = _0x1aca51.readUint8();
                this.offset_size = (_0x1a6c7a >> 0x4) & 0xf;
                this.length_size = 0xf & _0x1a6c7a;
                _0x1a6c7a = _0x1aca51.readUint8();
                this.base_offset_size = (_0x1a6c7a >> 0x4) & 0xf;
                if (0x1 === this.version || 0x2 === this.version) {
                    this.index_size = 0xf & _0x1a6c7a;
                } else {
                    this.index_size = 0x0;
                }
                this.items = [];
                var _0x323d7e = 0x0;
                if (this.version < 0x2) {
                    _0x323d7e = _0x1aca51.readUint16();
                } else {
                    if (0x2 !== this.version) {
                        throw "version of iloc box not supported";
                    }
                    _0x323d7e = _0x1aca51.readUint32();
                }
                for (var _0x3eccca = 0x0; _0x3eccca < _0x323d7e; _0x3eccca++) {
                    var _0x140b47 = {};
                    this.items.push(_0x140b47);
                    if (this.version < 0x2) {
                        _0x140b47.item_ID = _0x1aca51.readUint16();
                    } else {
                        if (0x2 !== this.version) {
                            throw "version of iloc box not supported";
                        }
                        _0x140b47.item_ID = _0x1aca51.readUint16();
                    }
                    if (0x1 === this.version || 0x2 === this.version) {
                        _0x140b47.construction_method = 0xf & _0x1aca51.readUint16();
                    } else {
                        _0x140b47.construction_method = 0x0;
                    }
                    _0x140b47.data_reference_index = _0x1aca51.readUint16();
                    switch (this.base_offset_size) {
                        case 0x0:
                            _0x140b47.base_offset = 0x0;
                            break;
                        case 0x4:
                            _0x140b47.base_offset = _0x1aca51.readUint32();
                            break;
                        case 0x8:
                            _0x140b47.base_offset = _0x1aca51.readUint64();
                            break;
                        default:
                            throw "Error reading base offset size";
                    }
                    var _0x14d3b9 = _0x1aca51.readUint16();
                    _0x140b47.extents = [];
                    for (var _0xff7285 = 0x0; _0xff7285 < _0x14d3b9; _0xff7285++) {
                        var _0xf5b4f9 = {};
                        _0x140b47.extents.push(_0xf5b4f9);
                        if (0x1 === this.version || 0x2 === this.version) {
                            switch (this.index_size) {
                                case 0x0:
                                    _0xf5b4f9.extent_index = 0x0;
                                    break;
                                case 0x4:
                                    _0xf5b4f9.extent_index = _0x1aca51.readUint32();
                                    break;
                                case 0x8:
                                    _0xf5b4f9.extent_index = _0x1aca51.readUint64();
                                    break;
                                default:
                                    throw "Error reading extent index";
                            }
                        }
                        switch (this.offset_size) {
                            case 0x0:
                                _0xf5b4f9.extent_offset = 0x0;
                                break;
                            case 0x4:
                                _0xf5b4f9.extent_offset = _0x1aca51.readUint32();
                                break;
                            case 0x8:
                                _0xf5b4f9.extent_offset = _0x1aca51.readUint64();
                                break;
                            default:
                                throw "Error reading extent index";
                        }
                        switch (this.length_size) {
                            case 0x0:
                                _0xf5b4f9.extent_length = 0x0;
                                break;
                            case 0x4:
                                _0xf5b4f9.extent_length = _0x1aca51.readUint32();
                                break;
                            case 0x8:
                                _0xf5b4f9.extent_length = _0x1aca51.readUint64();
                                break;
                            default:
                                throw "Error reading extent index";
                        }
                    }
                }
            });
            _0x5a8df5.createBoxCtor("imir", function (_0xd1e2ce) {
                var _0x189350 = _0xd1e2ce.readUint8();
                this.reserved = _0x189350 >> 0x7;
                this.axis = 0x1 & _0x189350;
            });
            _0x5a8df5.createFullBoxCtor("infe", function (_0x1e6369) {
                if (!(0x0 !== this.version && 0x1 !== this.version)) {
                    this.item_ID = _0x1e6369.readUint16();
                    this.item_protection_index = _0x1e6369.readUint16();
                    this.item_name = _0x1e6369.readCString();
                    this.content_type = _0x1e6369.readCString();
                    this.content_encoding = _0x1e6369.readCString();
                }
                if (0x1 === this.version) {
                    this.extension_type = _0x1e6369.readString(0x4);
                    _0x5a6c18.warn("BoxParser", "Cannot parse extension type");
                    return void _0x1e6369.seek(this.start + this.size);
                }
                if (this.version >= 0x2) {
                    if (0x2 === this.version) {
                        this.item_ID = _0x1e6369.readUint16();
                    } else if (0x3 === this.version) {
                        this.item_ID = _0x1e6369.readUint32();
                    }
                    this.item_protection_index = _0x1e6369.readUint16();
                    this.item_type = _0x1e6369.readString(0x4);
                    this.item_name = _0x1e6369.readCString();
                    if ("mime" === this.item_type) {
                        this.content_type = _0x1e6369.readCString();
                        this.content_encoding = _0x1e6369.readCString();
                    } else if ("uri " === this.item_type) {
                        this.item_uri_type = _0x1e6369.readCString();
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("ipma", function (_0x947655) {
                var _0x10eb30;
                var _0x53eecc;
                entry_count = _0x947655.readUint32();
                this.associations = [];
                for (_0x10eb30 = 0x0; _0x10eb30 < entry_count; _0x10eb30++) {
                    var _0x10858b = {};
                    this.associations.push(_0x10858b);
                    if (this.version < 0x1) {
                        _0x10858b.id = _0x947655.readUint16();
                    } else {
                        _0x10858b.id = _0x947655.readUint32();
                    }
                    var _0x16956f = _0x947655.readUint8();
                    _0x10858b.props = [];
                    for (_0x53eecc = 0x0; _0x53eecc < _0x16956f; _0x53eecc++) {
                        var _0xe5022 = _0x947655.readUint8();
                        var _0x27a4f9 = {};
                        _0x10858b.props.push(_0x27a4f9);
                        _0x27a4f9.essential = (0x80 & _0xe5022) >> 0x7 == 0x1;
                        if (0x1 & this.flags) {
                            _0x27a4f9.property_index = ((0x7f & _0xe5022) << 0x8) | _0x947655.readUint8();
                        } else {
                            _0x27a4f9.property_index = 0x7f & _0xe5022;
                        }
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("iref", function (_0x45796e) {
                var _0x52076d;
                var _0x677f8a;
                for (this.references = []; _0x45796e.getPosition() < this.start + this.size; ) {
                    if ((_0x52076d = _0x5a8df5.parseOneBox(_0x45796e, true, this.size - (_0x45796e.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    if (
                        (_0x677f8a =
                            0x0 === this.version
                                ? new _0x5a8df5.SingleItemTypeReferenceBox(_0x52076d.type, _0x52076d.size, _0x52076d.hdr_size, _0x52076d.start)
                                : new _0x5a8df5.SingleItemTypeReferenceBoxLarge(_0x52076d.type, _0x52076d.size, _0x52076d.hdr_size, _0x52076d.start)).write ===
                            _0x5a8df5.Box.prototype.write &&
                        "mdat" !== _0x677f8a.type
                    ) {
                        _0x5a6c18.warn("BoxParser", _0x677f8a.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
                        _0x677f8a.parseDataAndRewind(_0x45796e);
                    }
                    _0x677f8a.parse(_0x45796e);
                    this.references.push(_0x677f8a);
                }
            });
            _0x5a8df5.createBoxCtor("irot", function (_0x5be494) {
                this.angle = 0x3 & _0x5be494.readUint8();
            });
            _0x5a8df5.createFullBoxCtor("ispe", function (_0x229f1f) {
                this.image_width = _0x229f1f.readUint32();
                this.image_height = _0x229f1f.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("kind", function (_0x4703f5) {
                this.schemeURI = _0x4703f5.readCString();
                this.value = _0x4703f5.readCString();
            });
            _0x5a8df5.createFullBoxCtor("leva", function (_0x5e2bdd) {
                var _0x5b6c9e = _0x5e2bdd.readUint8();
                this.levels = [];
                for (var _0x2c7970 = 0x0; _0x2c7970 < _0x5b6c9e; _0x2c7970++) {
                    var _0x30df41 = {};
                    this.levels[_0x2c7970] = _0x30df41;
                    _0x30df41.track_ID = _0x5e2bdd.readUint32();
                    var _0x98cc78 = _0x5e2bdd.readUint8();
                    _0x30df41.padding_flag = _0x98cc78 >> 0x7;
                    _0x30df41.assignment_type = 0x7f & _0x98cc78;
                    switch (_0x30df41.assignment_type) {
                        case 0x0:
                            _0x30df41.grouping_type = _0x5e2bdd.readString(0x4);
                            break;
                        case 0x1:
                            _0x30df41.grouping_type = _0x5e2bdd.readString(0x4);
                            _0x30df41.grouping_type_parameter = _0x5e2bdd.readUint32();
                            break;
                        case 0x2:
                        case 0x3:
                            break;
                        case 0x4:
                            _0x30df41.sub_track_id = _0x5e2bdd.readUint32();
                            break;
                        default:
                            _0x5a6c18.warn("BoxParser", "Unknown leva assignement type");
                    }
                }
            });
            _0x5a8df5.createBoxCtor("lsel", function (_0x168050) {
                this.layer_id = _0x168050.readUint16();
            });
            _0x5a8df5.createBoxCtor("maxr", function (_0x43d6ee) {
                this.period = _0x43d6ee.readUint32();
                this.bytes = _0x43d6ee.readUint32();
            });
            _0x5a8df5.createBoxCtor("mdcv", function (_0x3466f5) {
                this.display_primaries = [];
                this.display_primaries[0x0] = {};
                this.display_primaries[0x0].x = _0x3466f5.readUint16();
                this.display_primaries[0x0].y = _0x3466f5.readUint16();
                this.display_primaries[0x1] = {};
                this.display_primaries[0x1].x = _0x3466f5.readUint16();
                this.display_primaries[0x1].y = _0x3466f5.readUint16();
                this.display_primaries[0x2] = {};
                this.display_primaries[0x2].x = _0x3466f5.readUint16();
                this.display_primaries[0x2].y = _0x3466f5.readUint16();
                this.white_point = {};
                this.white_point.x = _0x3466f5.readUint16();
                this.white_point.y = _0x3466f5.readUint16();
                this.max_display_mastering_luminance = _0x3466f5.readUint32();
                this.min_display_mastering_luminance = _0x3466f5.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("mdhd", function (_0xa80825) {
                if (0x1 == this.version) {
                    this.creation_time = _0xa80825.readUint64();
                    this.modification_time = _0xa80825.readUint64();
                    this.timescale = _0xa80825.readUint32();
                    this.duration = _0xa80825.readUint64();
                } else {
                    this.creation_time = _0xa80825.readUint32();
                    this.modification_time = _0xa80825.readUint32();
                    this.timescale = _0xa80825.readUint32();
                    this.duration = _0xa80825.readUint32();
                }
                this.parseLanguage(_0xa80825);
                _0xa80825.readUint16();
            });
            _0x5a8df5.createFullBoxCtor("mehd", function (_0x5849e1) {
                if (0x1 & this.flags) {
                    _0x5a6c18.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
                    this.version = 0x1;
                }
                if (0x1 == this.version) {
                    this.fragment_duration = _0x5849e1.readUint64();
                } else {
                    this.fragment_duration = _0x5849e1.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("meta", function (_0x3b7102) {
                this.boxes = [];
                _0x5a8df5.ContainerBox.prototype.parse.call(this, _0x3b7102);
            });
            _0x5a8df5.createFullBoxCtor("mfhd", function (_0x4281c9) {
                this.sequence_number = _0x4281c9.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("mfro", function (_0x2e03ce) {
                this._size = _0x2e03ce.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("mvhd", function (_0x3ed47e) {
                if (0x1 == this.version) {
                    this.creation_time = _0x3ed47e.readUint64();
                    this.modification_time = _0x3ed47e.readUint64();
                    this.timescale = _0x3ed47e.readUint32();
                    this.duration = _0x3ed47e.readUint64();
                } else {
                    this.creation_time = _0x3ed47e.readUint32();
                    this.modification_time = _0x3ed47e.readUint32();
                    this.timescale = _0x3ed47e.readUint32();
                    this.duration = _0x3ed47e.readUint32();
                }
                this.rate = _0x3ed47e.readUint32();
                this.volume = _0x3ed47e.readUint16() >> 0x8;
                _0x3ed47e.readUint16();
                _0x3ed47e.readUint32Array(0x2);
                this.matrix = _0x3ed47e.readUint32Array(0x9);
                _0x3ed47e.readUint32Array(0x6);
                this.next_track_id = _0x3ed47e.readUint32();
            });
            _0x5a8df5.createBoxCtor("npck", function (_0x54ce60) {
                this.packetssent = _0x54ce60.readUint32();
            });
            _0x5a8df5.createBoxCtor("nump", function (_0x5ba1b6) {
                this.packetssent = _0x5ba1b6.readUint64();
            });
            _0x5a8df5.createFullBoxCtor("padb", function (_0x38290b) {
                var _0x4a514f = _0x38290b.readUint32();
                this.padbits = [];
                for (var _0x316b99 = 0x0; _0x316b99 < Math.floor((_0x4a514f + 0x1) / 0x2); _0x316b99++) {
                    this.padbits = _0x38290b.readUint8();
                }
            });
            _0x5a8df5.createBoxCtor("pasp", function (_0x312fc3) {
                this.hSpacing = _0x312fc3.readUint32();
                this.vSpacing = _0x312fc3.readUint32();
            });
            _0x5a8df5.createBoxCtor("payl", function (_0x402ef2) {
                this.text = _0x402ef2.readString(this.size - this.hdr_size);
            });
            _0x5a8df5.createBoxCtor("payt", function (_0xfdc3d) {
                this.payloadID = _0xfdc3d.readUint32();
                var _0x2924be = _0xfdc3d.readUint8();
                this.rtpmap_string = _0xfdc3d.readString(_0x2924be);
            });
            _0x5a8df5.createFullBoxCtor("pdin", function (_0x4f06fa) {
                var _0x5b33a6 = (this.size - this.hdr_size) / 0x8;
                this.rate = [];
                this.initial_delay = [];
                for (var _0x4bee13 = 0x0; _0x4bee13 < _0x5b33a6; _0x4bee13++) {
                    this.rate[_0x4bee13] = _0x4f06fa.readUint32();
                    this.initial_delay[_0x4bee13] = _0x4f06fa.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("pitm", function (_0x1bea41) {
                if (0x0 === this.version) {
                    this.item_id = _0x1bea41.readUint16();
                } else {
                    this.item_id = _0x1bea41.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("pixi", function (_0x1088ba) {
                var _0x2bcdf5;
                this.num_channels = _0x1088ba.readUint8();
                this.bits_per_channels = [];
                for (_0x2bcdf5 = 0x0; _0x2bcdf5 < this.num_channels; _0x2bcdf5++) {
                    this.bits_per_channels[_0x2bcdf5] = _0x1088ba.readUint8();
                }
            });
            _0x5a8df5.createBoxCtor("pmax", function (_0x92281c) {
                this.bytes = _0x92281c.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("prft", function (_0x49e71a) {
                this.ref_track_id = _0x49e71a.readUint32();
                this.ntp_timestamp = _0x49e71a.readUint64();
                if (0x0 === this.version) {
                    this.media_time = _0x49e71a.readUint32();
                } else {
                    this.media_time = _0x49e71a.readUint64();
                }
            });
            _0x5a8df5.createFullBoxCtor("pssh", function (_0x214575) {
                this.system_id = _0x5a8df5.parseHex16(_0x214575);
                if (this.version > 0x0) {
                    var _0x4d55de = _0x214575.readUint32();
                    this.kid = [];
                    for (var _0x1094a1 = 0x0; _0x1094a1 < _0x4d55de; _0x1094a1++) {
                        this.kid[_0x1094a1] = _0x5a8df5.parseHex16(_0x214575);
                    }
                }
                var _0x22d2c8 = _0x214575.readUint32();
                if (_0x22d2c8 > 0x0) {
                    this.data = _0x214575.readUint8Array(_0x22d2c8);
                }
            });
            _0x5a8df5.createFullBoxCtor("clef", function (_0x305a61) {
                this.width = _0x305a61.readUint32();
                this.height = _0x305a61.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("enof", function (_0x4acff3) {
                this.width = _0x4acff3.readUint32();
                this.height = _0x4acff3.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("prof", function (_0x5911bf) {
                this.width = _0x5911bf.readUint32();
                this.height = _0x5911bf.readUint32();
            });
            _0x5a8df5.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]);
            _0x5a8df5.createBoxCtor("rtp ", function (_0x27a51f) {
                this.descriptionformat = _0x27a51f.readString(0x4);
                this.sdptext = _0x27a51f.readString(this.size - this.hdr_size - 0x4);
            });
            _0x5a8df5.createFullBoxCtor("saio", function (_0x23b39a) {
                if (0x1 & this.flags) {
                    this.aux_info_type = _0x23b39a.readUint32();
                    this.aux_info_type_parameter = _0x23b39a.readUint32();
                }
                var _0x377f0b = _0x23b39a.readUint32();
                this.offset = [];
                for (var _0x26fcb1 = 0x0; _0x26fcb1 < _0x377f0b; _0x26fcb1++) {
                    if (0x0 === this.version) {
                        this.offset[_0x26fcb1] = _0x23b39a.readUint32();
                    } else {
                        this.offset[_0x26fcb1] = _0x23b39a.readUint64();
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("saiz", function (_0x5583ba) {
                if (0x1 & this.flags) {
                    this.aux_info_type = _0x5583ba.readUint32();
                    this.aux_info_type_parameter = _0x5583ba.readUint32();
                }
                this.default_sample_info_size = _0x5583ba.readUint8();
                var _0x78949f = _0x5583ba.readUint32();
                this.sample_info_size = [];
                if (0x0 === this.default_sample_info_size) {
                    for (var _0x4f33a5 = 0x0; _0x4f33a5 < _0x78949f; _0x4f33a5++) {
                        this.sample_info_size[_0x4f33a5] = _0x5583ba.readUint8();
                    }
                }
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_METADATA, "mett", function (_0x1aa4fc) {
                this.parseHeader(_0x1aa4fc);
                this.content_encoding = _0x1aa4fc.readCString();
                this.mime_format = _0x1aa4fc.readCString();
                this.parseFooter(_0x1aa4fc);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_METADATA, "metx", function (_0x697bd5) {
                this.parseHeader(_0x697bd5);
                this.content_encoding = _0x697bd5.readCString();
                this.namespace = _0x697bd5.readCString();
                this.schema_location = _0x697bd5.readCString();
                this.parseFooter(_0x697bd5);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function (_0x14eb8c) {
                this.parseHeader(_0x14eb8c);
                this.content_encoding = _0x14eb8c.readCString();
                this.mime_format = _0x14eb8c.readCString();
                this.parseFooter(_0x14eb8c);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function (_0x586cf5) {
                this.parseHeader(_0x586cf5);
                this.namespace = _0x586cf5.readCString();
                this.schema_location = _0x586cf5.readCString();
                this.auxiliary_mime_types = _0x586cf5.readCString();
                this.parseFooter(_0x586cf5);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function (_0x73baad) {
                this.parseHeader(_0x73baad);
                this.content_encoding = _0x73baad.readCString();
                this.mime_format = _0x73baad.readCString();
                this.parseFooter(_0x73baad);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function (_0x9aa2f) {
                this.parseHeader(_0x9aa2f);
                this.displayFlags = _0x9aa2f.readUint32();
                this.horizontal_justification = _0x9aa2f.readInt8();
                this.vertical_justification = _0x9aa2f.readInt8();
                this.bg_color_rgba = _0x9aa2f.readUint8Array(0x4);
                this.box_record = _0x9aa2f.readInt16Array(0x4);
                this.style_record = _0x9aa2f.readUint8Array(0xc);
                this.parseFooter(_0x9aa2f);
            });
            _0x5a8df5.createSampleEntryCtor(_0x5a8df5.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function (_0x4da31e) {
                this.parseHeader(_0x4da31e);
                this.parseFooter(_0x4da31e);
            });
            _0x5a8df5.createSampleGroupCtor("alst", function (_0x741ccd) {
                var _0x374f5a;
                var _0x2d838e = _0x741ccd.readUint16();
                this.first_output_sample = _0x741ccd.readUint16();
                this.sample_offset = [];
                for (_0x374f5a = 0x0; _0x374f5a < _0x2d838e; _0x374f5a++) {
                    this.sample_offset[_0x374f5a] = _0x741ccd.readUint32();
                }
                var _0x412c36 = this.description_length - 0x4 - 0x4 * _0x2d838e;
                this.num_output_samples = [];
                this.num_total_samples = [];
                for (_0x374f5a = 0x0; _0x374f5a < _0x412c36 / 0x4; _0x374f5a++) {
                    this.num_output_samples[_0x374f5a] = _0x741ccd.readUint16();
                    this.num_total_samples[_0x374f5a] = _0x741ccd.readUint16();
                }
            });
            _0x5a8df5.createSampleGroupCtor("avll", function (_0x2242dc) {
                this.layerNumber = _0x2242dc.readUint8();
                this.accurateStatisticsFlag = _0x2242dc.readUint8();
                this.avgBitRate = _0x2242dc.readUint16();
                this.avgFrameRate = _0x2242dc.readUint16();
            });
            _0x5a8df5.createSampleGroupCtor("avss", function (_0x56fec1) {
                this.subSequenceIdentifier = _0x56fec1.readUint16();
                this.layerNumber = _0x56fec1.readUint8();
                var _0x3792d2 = _0x56fec1.readUint8();
                this.durationFlag = _0x3792d2 >> 0x7;
                this.avgRateFlag = (_0x3792d2 >> 0x6) & 0x1;
                if (this.durationFlag) {
                    this.duration = _0x56fec1.readUint32();
                }
                if (this.avgRateFlag) {
                    this.accurateStatisticsFlag = _0x56fec1.readUint8();
                    this.avgBitRate = _0x56fec1.readUint16();
                    this.avgFrameRate = _0x56fec1.readUint16();
                }
                this.dependency = [];
                var _0x35eff1 = _0x56fec1.readUint8();
                for (var _0x58bf6f = 0x0; _0x58bf6f < _0x35eff1; _0x58bf6f++) {
                    var _0x2e2e4f = {};
                    this.dependency.push(_0x2e2e4f);
                    _0x2e2e4f.subSeqDirectionFlag = _0x56fec1.readUint8();
                    _0x2e2e4f.layerNumber = _0x56fec1.readUint8();
                    _0x2e2e4f.subSequenceIdentifier = _0x56fec1.readUint16();
                }
            });
            _0x5a8df5.createSampleGroupCtor("dtrt", function (_0x4a3e95) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("mvif", function (_0x715011) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("prol", function (_0x49411e) {
                this.roll_distance = _0x49411e.readInt16();
            });
            _0x5a8df5.createSampleGroupCtor("rap ", function (_0x3051be) {
                var _0x37dc62 = _0x3051be.readUint8();
                this.num_leading_samples_known = _0x37dc62 >> 0x7;
                this.num_leading_samples = 0x7f & _0x37dc62;
            });
            _0x5a8df5.createSampleGroupCtor("rash", function (_0x1b402f) {
                this.operation_point_count = _0x1b402f.readUint16();
                if (this.description_length !== 0x2 + (0x1 === this.operation_point_count ? 0x2 : 0x6 * this.operation_point_count) + 0x9) {
                    _0x5a6c18.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length");
                    this.data = _0x1b402f.readUint8Array(this.description_length - 0x2);
                } else {
                    if (0x1 === this.operation_point_count) {
                        this.target_rate_share = _0x1b402f.readUint16();
                    } else {
                        this.target_rate_share = [];
                        this.available_bitrate = [];
                        for (var _0x3a9fc9 = 0x0; _0x3a9fc9 < this.operation_point_count; _0x3a9fc9++) {
                            this.available_bitrate[_0x3a9fc9] = _0x1b402f.readUint32();
                            this.target_rate_share[_0x3a9fc9] = _0x1b402f.readUint16();
                        }
                    }
                    this.maximum_bitrate = _0x1b402f.readUint32();
                    this.minimum_bitrate = _0x1b402f.readUint32();
                    this.discard_priority = _0x1b402f.readUint8();
                }
            });
            _0x5a8df5.createSampleGroupCtor("roll", function (_0x4cae37) {
                this.roll_distance = _0x4cae37.readInt16();
            });
            _0x5a8df5.SampleGroupEntry.prototype.parse = function (_0x41210a) {
                _0x5a6c18.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type);
                this.data = _0x41210a.readUint8Array(this.description_length);
            };
            _0x5a8df5.createSampleGroupCtor("scif", function (_0x580d1b) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("scnm", function (_0x29709e) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("seig", function (_0x5ca19f) {
                this.reserved = _0x5ca19f.readUint8();
                var _0x37a99b = _0x5ca19f.readUint8();
                this.crypt_byte_block = _0x37a99b >> 0x4;
                this.skip_byte_block = 0xf & _0x37a99b;
                this.isProtected = _0x5ca19f.readUint8();
                this.Per_Sample_IV_Size = _0x5ca19f.readUint8();
                this.KID = _0x5a8df5.parseHex16(_0x5ca19f);
                this.constant_IV_size = 0x0;
                this.constant_IV = 0x0;
                if (0x1 === this.isProtected && 0x0 === this.Per_Sample_IV_Size) {
                    this.constant_IV_size = _0x5ca19f.readUint8();
                    this.constant_IV = _0x5ca19f.readUint8Array(this.constant_IV_size);
                }
            });
            _0x5a8df5.createSampleGroupCtor("stsa", function (_0x17f204) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("sync", function (_0x17f680) {
                var _0x26b219 = _0x17f680.readUint8();
                this.NAL_unit_type = 0x3f & _0x26b219;
            });
            _0x5a8df5.createSampleGroupCtor("tele", function (_0x47fd40) {
                var _0x405b09 = _0x47fd40.readUint8();
                this.level_independently_decodable = _0x405b09 >> 0x7;
            });
            _0x5a8df5.createSampleGroupCtor("tsas", function (_0x29fa90) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("tscl", function (_0x4d6ac0) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createSampleGroupCtor("vipr", function (_0x146ff4) {
                _0x5a6c18.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
            });
            _0x5a8df5.createFullBoxCtor("sbgp", function (_0xcc58e9) {
                this.grouping_type = _0xcc58e9.readString(0x4);
                if (0x1 === this.version) {
                    this.grouping_type_parameter = _0xcc58e9.readUint32();
                } else {
                    this.grouping_type_parameter = 0x0;
                }
                this.entries = [];
                var _0x47cb38 = _0xcc58e9.readUint32();
                for (var _0x1112a0 = 0x0; _0x1112a0 < _0x47cb38; _0x1112a0++) {
                    var _0x290e8f = {};
                    this.entries.push(_0x290e8f);
                    _0x290e8f.sample_count = _0xcc58e9.readInt32();
                    _0x290e8f.group_description_index = _0xcc58e9.readInt32();
                }
            });
            _0x5a8df5.createFullBoxCtor("schm", function (_0x64f19d) {
                this.scheme_type = _0x64f19d.readString(0x4);
                this.scheme_version = _0x64f19d.readUint32();
                if (0x1 & this.flags) {
                    this.scheme_uri = _0x64f19d.readString(this.size - this.hdr_size - 0x8);
                }
            });
            _0x5a8df5.createBoxCtor("sdp ", function (_0x1e6d7d) {
                this.sdptext = _0x1e6d7d.readString(this.size - this.hdr_size);
            });
            _0x5a8df5.createFullBoxCtor("sdtp", function (_0x4ec63a) {
                var _0x34a969;
                var _0x3d42a4 = this.size - this.hdr_size;
                this.is_leading = [];
                this.sample_depends_on = [];
                this.sample_is_depended_on = [];
                this.sample_has_redundancy = [];
                for (var _0xd89313 = 0x0; _0xd89313 < _0x3d42a4; _0xd89313++) {
                    _0x34a969 = _0x4ec63a.readUint8();
                    this.is_leading[_0xd89313] = _0x34a969 >> 0x6;
                    this.sample_depends_on[_0xd89313] = (_0x34a969 >> 0x4) & 0x3;
                    this.sample_is_depended_on[_0xd89313] = (_0x34a969 >> 0x2) & 0x3;
                    this.sample_has_redundancy[_0xd89313] = 0x3 & _0x34a969;
                }
            });
            _0x5a8df5.createFullBoxCtor("senc");
            _0x5a8df5.createFullBoxCtor("sgpd", function (_0x81b82c) {
                this.grouping_type = _0x81b82c.readString(0x4);
                _0x5a6c18.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
                if (0x1 === this.version) {
                    this.default_length = _0x81b82c.readUint32();
                } else {
                    this.default_length = 0x0;
                }
                if (this.version >= 0x2) {
                    this.default_group_description_index = _0x81b82c.readUint32();
                }
                this.entries = [];
                var _0x4506ab = _0x81b82c.readUint32();
                for (var _0x5d30b5 = 0x0; _0x5d30b5 < _0x4506ab; _0x5d30b5++) {
                    var _0x516b86;
                    _0x516b86 = _0x5a8df5[this.grouping_type + "SampleGroupEntry"]
                        ? new _0x5a8df5[this.grouping_type + "SampleGroupEntry"](this.grouping_type)
                        : new _0x5a8df5.SampleGroupEntry(this.grouping_type);
                    this.entries.push(_0x516b86);
                    if (0x1 === this.version && 0x0 === this.default_length) {
                        _0x516b86.description_length = _0x81b82c.readUint32();
                    } else {
                        _0x516b86.description_length = this.default_length;
                    }
                    if (_0x516b86.write === _0x5a8df5.SampleGroupEntry.prototype.write) {
                        _0x5a6c18.info(
                            "BoxParser",
                            "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"
                        );
                        _0x516b86.data = _0x81b82c.readUint8Array(_0x516b86.description_length);
                        _0x81b82c.position -= _0x516b86.description_length;
                    }
                    _0x516b86.parse(_0x81b82c);
                }
            });
            _0x5a8df5.createFullBoxCtor("sidx", function (_0x1d51a6) {
                this.reference_ID = _0x1d51a6.readUint32();
                this.timescale = _0x1d51a6.readUint32();
                if (0x0 === this.version) {
                    this.earliest_presentation_time = _0x1d51a6.readUint32();
                    this.first_offset = _0x1d51a6.readUint32();
                } else {
                    this.earliest_presentation_time = _0x1d51a6.readUint64();
                    this.first_offset = _0x1d51a6.readUint64();
                }
                _0x1d51a6.readUint16();
                this.references = [];
                var _0x201e02 = _0x1d51a6.readUint16();
                for (var _0x26a8e3 = 0x0; _0x26a8e3 < _0x201e02; _0x26a8e3++) {
                    var _0x30d09e = {};
                    this.references.push(_0x30d09e);
                    var _0x58e814 = _0x1d51a6.readUint32();
                    _0x30d09e.reference_type = (_0x58e814 >> 0x1f) & 0x1;
                    _0x30d09e.referenced_size = 0x7fffffff & _0x58e814;
                    _0x30d09e.subsegment_duration = _0x1d51a6.readUint32();
                    _0x58e814 = _0x1d51a6.readUint32();
                    _0x30d09e.starts_with_SAP = (_0x58e814 >> 0x1f) & 0x1;
                    _0x30d09e.SAP_type = (_0x58e814 >> 0x1c) & 0x7;
                    _0x30d09e.SAP_delta_time = 0xfffffff & _0x58e814;
                }
            });
            _0x5a8df5.SingleItemTypeReferenceBox = function (_0x217fd5, _0x65260e, _0xb9071, _0x1e5078) {
                _0x5a8df5.Box.call(this, _0x217fd5, _0x65260e);
                this.hdr_size = _0xb9071;
                this.start = _0x1e5078;
            };
            _0x5a8df5.SingleItemTypeReferenceBox.prototype = new _0x5a8df5.Box();
            _0x5a8df5.SingleItemTypeReferenceBox.prototype.parse = function (_0x5cde55) {
                this.from_item_ID = _0x5cde55.readUint16();
                var _0x191602 = _0x5cde55.readUint16();
                this.references = [];
                for (var _0x22a7bc = 0x0; _0x22a7bc < _0x191602; _0x22a7bc++) {
                    this.references[_0x22a7bc] = _0x5cde55.readUint16();
                }
            };
            _0x5a8df5.SingleItemTypeReferenceBoxLarge = function (_0x18d536, _0x3d7c4c, _0x1daa17, _0xbfca34) {
                _0x5a8df5.Box.call(this, _0x18d536, _0x3d7c4c);
                this.hdr_size = _0x1daa17;
                this.start = _0xbfca34;
            };
            _0x5a8df5.SingleItemTypeReferenceBoxLarge.prototype = new _0x5a8df5.Box();
            _0x5a8df5.SingleItemTypeReferenceBoxLarge.prototype.parse = function (_0x251ce3) {
                this.from_item_ID = _0x251ce3.readUint32();
                var _0x5a7e98 = _0x251ce3.readUint16();
                this.references = [];
                for (var _0x5d73bf = 0x0; _0x5d73bf < _0x5a7e98; _0x5d73bf++) {
                    this.references[_0x5d73bf] = _0x251ce3.readUint32();
                }
            };
            _0x5a8df5.createFullBoxCtor("SmDm", function (_0x420d0a) {
                this.primaryRChromaticity_x = _0x420d0a.readUint16();
                this.primaryRChromaticity_y = _0x420d0a.readUint16();
                this.primaryGChromaticity_x = _0x420d0a.readUint16();
                this.primaryGChromaticity_y = _0x420d0a.readUint16();
                this.primaryBChromaticity_x = _0x420d0a.readUint16();
                this.primaryBChromaticity_y = _0x420d0a.readUint16();
                this.whitePointChromaticity_x = _0x420d0a.readUint16();
                this.whitePointChromaticity_y = _0x420d0a.readUint16();
                this.luminanceMax = _0x420d0a.readUint32();
                this.luminanceMin = _0x420d0a.readUint32();
            });
            _0x5a8df5.createFullBoxCtor("smhd", function (_0x26c265) {
                this.balance = _0x26c265.readUint16();
                _0x26c265.readUint16();
            });
            _0x5a8df5.createFullBoxCtor("ssix", function (_0x40b5ac) {
                this.subsegments = [];
                var _0x2c92c4 = _0x40b5ac.readUint32();
                for (var _0x421e2e = 0x0; _0x421e2e < _0x2c92c4; _0x421e2e++) {
                    var _0x53ed98 = {};
                    this.subsegments.push(_0x53ed98);
                    _0x53ed98.ranges = [];
                    var _0x5d53f5 = _0x40b5ac.readUint32();
                    for (var _0x4b5439 = 0x0; _0x4b5439 < _0x5d53f5; _0x4b5439++) {
                        var _0x1c0afb = {};
                        _0x53ed98.ranges.push(_0x1c0afb);
                        _0x1c0afb.level = _0x40b5ac.readUint8();
                        _0x1c0afb.range_size = _0x40b5ac.readUint24();
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stco", function (_0x21eacc) {
                var _0x18e992;
                _0x18e992 = _0x21eacc.readUint32();
                this.chunk_offsets = [];
                if (0x0 === this.version) {
                    for (var _0x2a21c6 = 0x0; _0x2a21c6 < _0x18e992; _0x2a21c6++) {
                        this.chunk_offsets.push(_0x21eacc.readUint32());
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stdp", function (_0x8e6345) {
                var _0x5599b2 = (this.size - this.hdr_size) / 0x2;
                this.priority = [];
                for (var _0x1ca8c3 = 0x0; _0x1ca8c3 < _0x5599b2; _0x1ca8c3++) {
                    this.priority[_0x1ca8c3] = _0x8e6345.readUint16();
                }
            });
            _0x5a8df5.createFullBoxCtor("sthd");
            _0x5a8df5.createFullBoxCtor("stri", function (_0x401750) {
                this.switch_group = _0x401750.readUint16();
                this.alternate_group = _0x401750.readUint16();
                this.sub_track_id = _0x401750.readUint32();
                var _0x3e6332 = (this.size - this.hdr_size - 0x8) / 0x4;
                this.attribute_list = [];
                for (var _0x275b1b = 0x0; _0x275b1b < _0x3e6332; _0x275b1b++) {
                    this.attribute_list[_0x275b1b] = _0x401750.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("stsc", function (_0x55bef1) {
                var _0x1d87e7;
                var _0x1a2173;
                _0x1d87e7 = _0x55bef1.readUint32();
                this.first_chunk = [];
                this.samples_per_chunk = [];
                this.sample_description_index = [];
                if (0x0 === this.version) {
                    for (_0x1a2173 = 0x0; _0x1a2173 < _0x1d87e7; _0x1a2173++) {
                        this.first_chunk.push(_0x55bef1.readUint32());
                        this.samples_per_chunk.push(_0x55bef1.readUint32());
                        this.sample_description_index.push(_0x55bef1.readUint32());
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stsd", function (_0x8a68d6) {
                var _0x3f8658;
                var _0x4e010d;
                var _0x5c47a2;
                var _0xde131f;
                this.entries = [];
                _0x5c47a2 = _0x8a68d6.readUint32();
                for (_0x3f8658 = 0x1; _0x3f8658 <= _0x5c47a2; _0x3f8658++) {
                    if ((_0x4e010d = _0x5a8df5.parseOneBox(_0x8a68d6, true, this.size - (_0x8a68d6.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    if (_0x5a8df5[_0x4e010d.type + "SampleEntry"]) {
                        (_0xde131f = new _0x5a8df5[_0x4e010d.type + "SampleEntry"](_0x4e010d.size)).hdr_size = _0x4e010d.hdr_size;
                        _0xde131f.start = _0x4e010d.start;
                    } else {
                        _0x5a6c18.warn("BoxParser", "Unknown sample entry type: " + _0x4e010d.type);
                        _0xde131f = new _0x5a8df5.SampleEntry(_0x4e010d.type, _0x4e010d.size, _0x4e010d.hdr_size, _0x4e010d.start);
                    }
                    if (_0xde131f.write === _0x5a8df5.SampleEntry.prototype.write) {
                        _0x5a6c18.info(
                            "BoxParser",
                            "SampleEntry " + _0xde131f.type + " box writing not yet implemented, keeping unparsed data in memory for later write"
                        );
                        _0xde131f.parseDataAndRewind(_0x8a68d6);
                    }
                    _0xde131f.parse(_0x8a68d6);
                    this.entries.push(_0xde131f);
                }
            });
            _0x5a8df5.createFullBoxCtor("stsg", function (_0x5907a3) {
                this.grouping_type = _0x5907a3.readUint32();
                var _0x524ccc = _0x5907a3.readUint16();
                this.group_description_index = [];
                for (var _0x1a2821 = 0x0; _0x1a2821 < _0x524ccc; _0x1a2821++) {
                    this.group_description_index[_0x1a2821] = _0x5907a3.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("stsh", function (_0x627d35) {
                var _0xbaa51b;
                var _0x5056eb;
                _0xbaa51b = _0x627d35.readUint32();
                this.shadowed_sample_numbers = [];
                this.sync_sample_numbers = [];
                if (0x0 === this.version) {
                    for (_0x5056eb = 0x0; _0x5056eb < _0xbaa51b; _0x5056eb++) {
                        this.shadowed_sample_numbers.push(_0x627d35.readUint32());
                        this.sync_sample_numbers.push(_0x627d35.readUint32());
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stss", function (_0xbfdec6) {
                var _0x2dc007;
                var _0x26f53f;
                _0x26f53f = _0xbfdec6.readUint32();
                if (0x0 === this.version) {
                    this.sample_numbers = [];
                    for (_0x2dc007 = 0x0; _0x2dc007 < _0x26f53f; _0x2dc007++) {
                        this.sample_numbers.push(_0xbfdec6.readUint32());
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stsz", function (_0x17414a) {
                var _0x472bc4;
                this.sample_sizes = [];
                if (0x0 === this.version) {
                    this.sample_size = _0x17414a.readUint32();
                    this.sample_count = _0x17414a.readUint32();
                    for (_0x472bc4 = 0x0; _0x472bc4 < this.sample_count; _0x472bc4++) {
                        if (0x0 === this.sample_size) {
                            this.sample_sizes.push(_0x17414a.readUint32());
                        } else {
                            this.sample_sizes[_0x472bc4] = this.sample_size;
                        }
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stts", function (_0x52638c) {
                var _0x47275f;
                var _0x1fd4c8;
                var _0x23fe91;
                _0x47275f = _0x52638c.readUint32();
                this.sample_counts = [];
                this.sample_deltas = [];
                if (0x0 === this.version) {
                    for (_0x1fd4c8 = 0x0; _0x1fd4c8 < _0x47275f; _0x1fd4c8++) {
                        this.sample_counts.push(_0x52638c.readUint32());
                        if ((_0x23fe91 = _0x52638c.readInt32()) < 0x0) {
                            _0x5a6c18.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
                            _0x23fe91 = 0x1;
                        }
                        this.sample_deltas.push(_0x23fe91);
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("stvi", function (_0x64e9b9) {
                var _0x5e5939 = _0x64e9b9.readUint32();
                this.single_view_allowed = 0x3 & _0x5e5939;
                this.stereo_scheme = _0x64e9b9.readUint32();
                var _0x1b7c20;
                var _0x33b127;
                var _0x344773 = _0x64e9b9.readUint32();
                this.stereo_indication_type = _0x64e9b9.readString(_0x344773);
                for (this.boxes = []; _0x64e9b9.getPosition() < this.start + this.size; ) {
                    if ((_0x1b7c20 = _0x5a8df5.parseOneBox(_0x64e9b9, false, this.size - (_0x64e9b9.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    _0x33b127 = _0x1b7c20.box;
                    this.boxes.push(_0x33b127);
                    this[_0x33b127.type] = _0x33b127;
                }
            });
            _0x5a8df5.createBoxCtor("styp", function (_0x503759) {
                _0x5a8df5.ftypBox.prototype.parse.call(this, _0x503759);
            });
            _0x5a8df5.createFullBoxCtor("stz2", function (_0xbee328) {
                var _0x2c73a4;
                var _0x3bddd1;
                this.sample_sizes = [];
                if (0x0 === this.version) {
                    this.reserved = _0xbee328.readUint24();
                    this.field_size = _0xbee328.readUint8();
                    _0x3bddd1 = _0xbee328.readUint32();
                    if (0x4 === this.field_size) {
                        for (_0x2c73a4 = 0x0; _0x2c73a4 < _0x3bddd1; _0x2c73a4 += 0x2) {
                            var _0x227866 = _0xbee328.readUint8();
                            this.sample_sizes[_0x2c73a4] = (_0x227866 >> 0x4) & 0xf;
                            this.sample_sizes[_0x2c73a4 + 0x1] = 0xf & _0x227866;
                        }
                    } else {
                        if (0x8 === this.field_size) {
                            for (_0x2c73a4 = 0x0; _0x2c73a4 < _0x3bddd1; _0x2c73a4++) {
                                this.sample_sizes[_0x2c73a4] = _0xbee328.readUint8();
                            }
                        } else {
                            if (0x10 === this.field_size) {
                                for (_0x2c73a4 = 0x0; _0x2c73a4 < _0x3bddd1; _0x2c73a4++) {
                                    this.sample_sizes[_0x2c73a4] = _0xbee328.readUint16();
                                }
                            } else {
                                _0x5a6c18.error("BoxParser", "Error in length field in stz2 box");
                            }
                        }
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("subs", function (_0x100a16) {
                var _0x39cc2f;
                var _0x55168d;
                var _0x377a83;
                var _0x165ba8;
                _0x377a83 = _0x100a16.readUint32();
                this.entries = [];
                for (_0x39cc2f = 0x0; _0x39cc2f < _0x377a83; _0x39cc2f++) {
                    var _0x493861 = {};
                    this.entries[_0x39cc2f] = _0x493861;
                    _0x493861.sample_delta = _0x100a16.readUint32();
                    _0x493861.subsamples = [];
                    if ((_0x165ba8 = _0x100a16.readUint16()) > 0x0) {
                        for (_0x55168d = 0x0; _0x55168d < _0x165ba8; _0x55168d++) {
                            var _0x5275a9 = {};
                            _0x493861.subsamples.push(_0x5275a9);
                            if (0x1 == this.version) {
                                _0x5275a9.size = _0x100a16.readUint32();
                            } else {
                                _0x5275a9.size = _0x100a16.readUint16();
                            }
                            _0x5275a9.priority = _0x100a16.readUint8();
                            _0x5275a9.discardable = _0x100a16.readUint8();
                            _0x5275a9.codec_specific_parameters = _0x100a16.readUint32();
                        }
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("tenc", function (_0x41f845) {
                _0x41f845.readUint8();
                if (0x0 === this.version) {
                    _0x41f845.readUint8();
                } else {
                    var _0x4c0e61 = _0x41f845.readUint8();
                    this.default_crypt_byte_block = (_0x4c0e61 >> 0x4) & 0xf;
                    this.default_skip_byte_block = 0xf & _0x4c0e61;
                }
                this.default_isProtected = _0x41f845.readUint8();
                this.default_Per_Sample_IV_Size = _0x41f845.readUint8();
                this.default_KID = _0x5a8df5.parseHex16(_0x41f845);
                if (0x1 === this.default_isProtected && 0x0 === this.default_Per_Sample_IV_Size) {
                    this.default_constant_IV_size = _0x41f845.readUint8();
                    this.default_constant_IV = _0x41f845.readUint8Array(this.default_constant_IV_size);
                }
            });
            _0x5a8df5.createFullBoxCtor("tfdt", function (_0x5d06e0) {
                if (0x1 == this.version) {
                    this.baseMediaDecodeTime = _0x5d06e0.readUint64();
                } else {
                    this.baseMediaDecodeTime = _0x5d06e0.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("tfhd", function (_0x2eb7d1) {
                var _0x141913 = 0x0;
                this.track_id = _0x2eb7d1.readUint32();
                if (this.size - this.hdr_size > _0x141913 && this.flags & _0x5a8df5.TFHD_FLAG_BASE_DATA_OFFSET) {
                    this.base_data_offset = _0x2eb7d1.readUint64();
                    _0x141913 += 0x8;
                } else {
                    this.base_data_offset = 0x0;
                }
                if (this.size - this.hdr_size > _0x141913 && this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DESC) {
                    this.default_sample_description_index = _0x2eb7d1.readUint32();
                    _0x141913 += 0x4;
                } else {
                    this.default_sample_description_index = 0x0;
                }
                if (this.size - this.hdr_size > _0x141913 && this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DUR) {
                    this.default_sample_duration = _0x2eb7d1.readUint32();
                    _0x141913 += 0x4;
                } else {
                    this.default_sample_duration = 0x0;
                }
                if (this.size - this.hdr_size > _0x141913 && this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_SIZE) {
                    this.default_sample_size = _0x2eb7d1.readUint32();
                    _0x141913 += 0x4;
                } else {
                    this.default_sample_size = 0x0;
                }
                if (this.size - this.hdr_size > _0x141913 && this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_FLAGS) {
                    this.default_sample_flags = _0x2eb7d1.readUint32();
                    _0x141913 += 0x4;
                } else {
                    this.default_sample_flags = 0x0;
                }
            });
            _0x5a8df5.createFullBoxCtor("tfra", function (_0x25a7bc) {
                this.track_ID = _0x25a7bc.readUint32();
                _0x25a7bc.readUint24();
                var _0x243ab8 = _0x25a7bc.readUint8();
                this.length_size_of_traf_num = (_0x243ab8 >> 0x4) & 0x3;
                this.length_size_of_trun_num = (_0x243ab8 >> 0x2) & 0x3;
                this.length_size_of_sample_num = 0x3 & _0x243ab8;
                this.entries = [];
                var _0x5e31a4 = _0x25a7bc.readUint32();
                for (var _0x1f10f5 = 0x0; _0x1f10f5 < _0x5e31a4; _0x1f10f5++) {
                    if (0x1 === this.version) {
                        this.time = _0x25a7bc.readUint64();
                        this.moof_offset = _0x25a7bc.readUint64();
                    } else {
                        this.time = _0x25a7bc.readUint32();
                        this.moof_offset = _0x25a7bc.readUint32();
                    }
                    this.traf_number = _0x25a7bc["readUint" + 0x8 * (this.length_size_of_traf_num + 0x1)]();
                    this.trun_number = _0x25a7bc["readUint" + 0x8 * (this.length_size_of_trun_num + 0x1)]();
                    this.sample_number = _0x25a7bc["readUint" + 0x8 * (this.length_size_of_sample_num + 0x1)]();
                }
            });
            _0x5a8df5.createFullBoxCtor("tkhd", function (_0x13bb9e) {
                if (0x1 == this.version) {
                    this.creation_time = _0x13bb9e.readUint64();
                    this.modification_time = _0x13bb9e.readUint64();
                    this.track_id = _0x13bb9e.readUint32();
                    _0x13bb9e.readUint32();
                    this.duration = _0x13bb9e.readUint64();
                } else {
                    this.creation_time = _0x13bb9e.readUint32();
                    this.modification_time = _0x13bb9e.readUint32();
                    this.track_id = _0x13bb9e.readUint32();
                    _0x13bb9e.readUint32();
                    this.duration = _0x13bb9e.readUint32();
                }
                _0x13bb9e.readUint32Array(0x2);
                this.layer = _0x13bb9e.readInt16();
                this.alternate_group = _0x13bb9e.readInt16();
                this.volume = _0x13bb9e.readInt16() >> 0x8;
                _0x13bb9e.readUint16();
                this.matrix = _0x13bb9e.readInt32Array(0x9);
                this.width = _0x13bb9e.readUint32();
                this.height = _0x13bb9e.readUint32();
            });
            _0x5a8df5.createBoxCtor("tmax", function (_0x3d4789) {
                this.time = _0x3d4789.readUint32();
            });
            _0x5a8df5.createBoxCtor("tmin", function (_0x96fa95) {
                this.time = _0x96fa95.readUint32();
            });
            _0x5a8df5.createBoxCtor("totl", function (_0x14d250) {
                this.bytessent = _0x14d250.readUint32();
            });
            _0x5a8df5.createBoxCtor("tpay", function (_0x4138a8) {
                this.bytessent = _0x4138a8.readUint32();
            });
            _0x5a8df5.createBoxCtor("tpyl", function (_0x554f89) {
                this.bytessent = _0x554f89.readUint64();
            });
            _0x5a8df5.TrackGroupTypeBox.prototype.parse = function (_0x37dafb) {
                this.parseFullHeader(_0x37dafb);
                this.track_group_id = _0x37dafb.readUint32();
            };
            _0x5a8df5.createTrackGroupCtor("msrc");
            _0x5a8df5.TrackReferenceTypeBox = function (_0x233b08, _0x4ecbce, _0x355b9b, _0x586a94) {
                _0x5a8df5.Box.call(this, _0x233b08, _0x4ecbce);
                this.hdr_size = _0x355b9b;
                this.start = _0x586a94;
            };
            _0x5a8df5.TrackReferenceTypeBox.prototype = new _0x5a8df5.Box();
            _0x5a8df5.TrackReferenceTypeBox.prototype.parse = function (_0x51a9ad) {
                this.track_ids = _0x51a9ad.readUint32Array((this.size - this.hdr_size) / 0x4);
            };
            _0x5a8df5.trefBox.prototype.parse = function (_0x29c7b1) {
                var _0x5ee102;
                for (var _0x13a5be; _0x29c7b1.getPosition() < this.start + this.size; ) {
                    if ((_0x5ee102 = _0x5a8df5.parseOneBox(_0x29c7b1, true, this.size - (_0x29c7b1.getPosition() - this.start))).code !== 0x1) {
                        return;
                    }
                    if (
                        (_0x13a5be = new _0x5a8df5.TrackReferenceTypeBox(_0x5ee102.type, _0x5ee102.size, _0x5ee102.hdr_size, _0x5ee102.start)).write ===
                            _0x5a8df5.Box.prototype.write &&
                        "mdat" !== _0x13a5be.type
                    ) {
                        _0x5a6c18.info(
                            "BoxParser",
                            "TrackReference " + _0x13a5be.type + " box writing not yet implemented, keeping unparsed data in memory for later write"
                        );
                        _0x13a5be.parseDataAndRewind(_0x29c7b1);
                    }
                    _0x13a5be.parse(_0x29c7b1);
                    this.boxes.push(_0x13a5be);
                }
            };
            _0x5a8df5.createFullBoxCtor("trep", function (_0x5dab03) {
                this.track_ID = _0x5dab03.readUint32();
                for (this.boxes = []; _0x5dab03.getPosition() < this.start + this.size; ) {
                    ret = _0x5a8df5.parseOneBox(_0x5dab03, false, this.size - (_0x5dab03.getPosition() - this.start));
                    if (ret.code !== 0x1) {
                        return;
                    }
                    box = ret.box;
                    this.boxes.push(box);
                }
            });
            _0x5a8df5.createFullBoxCtor("trex", function (_0x5869c9) {
                this.track_id = _0x5869c9.readUint32();
                this.default_sample_description_index = _0x5869c9.readUint32();
                this.default_sample_duration = _0x5869c9.readUint32();
                this.default_sample_size = _0x5869c9.readUint32();
                this.default_sample_flags = _0x5869c9.readUint32();
            });
            _0x5a8df5.createBoxCtor("trpy", function (_0x4b38f4) {
                this.bytessent = _0x4b38f4.readUint64();
            });
            _0x5a8df5.createFullBoxCtor("trun", function (_0x2b373b) {
                var _0x580b20 = 0x0;
                this.sample_count = _0x2b373b.readUint32();
                _0x580b20 += 0x4;
                if (this.size - this.hdr_size > _0x580b20 && this.flags & _0x5a8df5.TRUN_FLAGS_DATA_OFFSET) {
                    this.data_offset = _0x2b373b.readInt32();
                    _0x580b20 += 0x4;
                } else {
                    this.data_offset = 0x0;
                }
                if (this.size - this.hdr_size > _0x580b20 && this.flags & _0x5a8df5.TRUN_FLAGS_FIRST_FLAG) {
                    this.first_sample_flags = _0x2b373b.readUint32();
                    _0x580b20 += 0x4;
                } else {
                    this.first_sample_flags = 0x0;
                }
                this.sample_duration = [];
                this.sample_size = [];
                this.sample_flags = [];
                this.sample_composition_time_offset = [];
                if (this.size - this.hdr_size > _0x580b20) {
                    for (var _0x8dd4d6 = 0x0; _0x8dd4d6 < this.sample_count; _0x8dd4d6++) {
                        if (this.flags & _0x5a8df5.TRUN_FLAGS_DURATION) {
                            this.sample_duration[_0x8dd4d6] = _0x2b373b.readUint32();
                        }
                        if (this.flags & _0x5a8df5.TRUN_FLAGS_SIZE) {
                            this.sample_size[_0x8dd4d6] = _0x2b373b.readUint32();
                        }
                        if (this.flags & _0x5a8df5.TRUN_FLAGS_FLAGS) {
                            this.sample_flags[_0x8dd4d6] = _0x2b373b.readUint32();
                        }
                        if (this.flags & _0x5a8df5.TRUN_FLAGS_CTS_OFFSET) {
                            if (0x0 === this.version) {
                                this.sample_composition_time_offset[_0x8dd4d6] = _0x2b373b.readUint32();
                            } else {
                                this.sample_composition_time_offset[_0x8dd4d6] = _0x2b373b.readInt32();
                            }
                        }
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("tsel", function (_0x4c4389) {
                this.switch_group = _0x4c4389.readUint32();
                var _0x5d5944 = (this.size - this.hdr_size - 0x4) / 0x4;
                this.attribute_list = [];
                for (var _0x1107b4 = 0x0; _0x1107b4 < _0x5d5944; _0x1107b4++) {
                    this.attribute_list[_0x1107b4] = _0x4c4389.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("txtC", function (_0x2cbbc4) {
                this.config = _0x2cbbc4.readCString();
            });
            _0x5a8df5.createFullBoxCtor("url ", function (_0x9d0d4d) {
                if (0x1 !== this.flags) {
                    this.location = _0x9d0d4d.readCString();
                }
            });
            _0x5a8df5.createFullBoxCtor("urn ", function (_0xa07420) {
                this.name = _0xa07420.readCString();
                if (this.size - this.hdr_size - this.name.length - 0x1 > 0x0) {
                    this.location = _0xa07420.readCString();
                }
            });
            _0x5a8df5.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", true, false, function (_0x3e6381) {
                this.LiveServerManifest = _0x3e6381
                    .readString(this.size - this.hdr_size)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            });
            _0x5a8df5.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", true, false, function (_0x2c72ce) {
                this.system_id = _0x5a8df5.parseHex16(_0x2c72ce);
                var _0x5c8b62 = _0x2c72ce.readUint32();
                if (_0x5c8b62 > 0x0) {
                    this.data = _0x2c72ce.readUint8Array(_0x5c8b62);
                }
            });
            _0x5a8df5.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", true, false);
            _0x5a8df5.createUUIDBox("8974dbce7be74c5184f97148f9882554", true, false, function (_0x1bc5c9) {
                this.default_AlgorithmID = _0x1bc5c9.readUint24();
                this.default_IV_size = _0x1bc5c9.readUint8();
                this.default_KID = _0x5a8df5.parseHex16(_0x1bc5c9);
            });
            _0x5a8df5.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", true, false, function (_0x3f518f) {
                this.fragment_count = _0x3f518f.readUint8();
                this.entries = [];
                for (var _0x2936ba = 0x0; _0x2936ba < this.fragment_count; _0x2936ba++) {
                    var _0x21cda1 = {};
                    var _0x400321 = 0x0;
                    var _0x179a33 = 0x0;
                    if (0x1 === this.version) {
                        _0x400321 = _0x3f518f.readUint64();
                        _0x179a33 = _0x3f518f.readUint64();
                    } else {
                        _0x400321 = _0x3f518f.readUint32();
                        _0x179a33 = _0x3f518f.readUint32();
                    }
                    _0x21cda1.absolute_time = _0x400321;
                    _0x21cda1.absolute_duration = _0x179a33;
                    this.entries.push(_0x21cda1);
                }
            });
            _0x5a8df5.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", true, false, function (_0x252938) {
                if (0x1 === this.version) {
                    this.absolute_time = _0x252938.readUint64();
                    this.duration = _0x252938.readUint64();
                } else {
                    this.absolute_time = _0x252938.readUint32();
                    this.duration = _0x252938.readUint32();
                }
            });
            _0x5a8df5.createFullBoxCtor("vmhd", function (_0x1c9c0e) {
                this.graphicsmode = _0x1c9c0e.readUint16();
                this.opcolor = _0x1c9c0e.readUint16Array(0x3);
            });
            _0x5a8df5.createFullBoxCtor("vpcC", function (_0x1557e0) {
                var _0x5ba0e6;
                if (0x1 === this.version) {
                    this.profile = _0x1557e0.readUint8();
                    this.level = _0x1557e0.readUint8();
                    _0x5ba0e6 = _0x1557e0.readUint8();
                    this.bitDepth = _0x5ba0e6 >> 0x4;
                    this.chromaSubsampling = (_0x5ba0e6 >> 0x1) & 0x7;
                    this.videoFullRangeFlag = 0x1 & _0x5ba0e6;
                    this.colourPrimaries = _0x1557e0.readUint8();
                    this.transferCharacteristics = _0x1557e0.readUint8();
                    this.matrixCoefficients = _0x1557e0.readUint8();
                    this.codecIntializationDataSize = _0x1557e0.readUint16();
                    this.codecIntializationData = _0x1557e0.readUint8Array(this.codecIntializationDataSize);
                } else {
                    this.profile = _0x1557e0.readUint8();
                    this.level = _0x1557e0.readUint8();
                    _0x5ba0e6 = _0x1557e0.readUint8();
                    this.bitDepth = (_0x5ba0e6 >> 0x4) & 0xf;
                    this.colorSpace = 0xf & _0x5ba0e6;
                    _0x5ba0e6 = _0x1557e0.readUint8();
                    this.chromaSubsampling = (_0x5ba0e6 >> 0x4) & 0xf;
                    this.transferFunction = (_0x5ba0e6 >> 0x1) & 0x7;
                    this.videoFullRangeFlag = 0x1 & _0x5ba0e6;
                    this.codecIntializationDataSize = _0x1557e0.readUint16();
                    this.codecIntializationData = _0x1557e0.readUint8Array(this.codecIntializationDataSize);
                }
            });
            _0x5a8df5.createBoxCtor("vttC", function (_0x3fff8c) {
                this.text = _0x3fff8c.readString(this.size - this.hdr_size);
            });
            _0x5a8df5.createFullBoxCtor("vvcC", function (_0x384935) {
                var _0xfdde0e;
                var _0x4646cc;
                var _0xf7ad40 = {
                    held_bits: undefined,
                    num_held_bits: 0x0,
                    stream_read_1_bytes: function (_0x594e53) {
                        this.held_bits = _0x594e53.readUint8();
                        this.num_held_bits = 0x8;
                    },
                    stream_read_2_bytes: function (_0x297205) {
                        this.held_bits = _0x297205.readUint16();
                        this.num_held_bits = 0x10;
                    },
                    extract_bits: function (_0x1a0291) {
                        var _0x1fb263 = (this.held_bits >> (this.num_held_bits - _0x1a0291)) & ((0x1 << _0x1a0291) - 0x1);
                        this.num_held_bits -= _0x1a0291;
                        return _0x1fb263;
                    },
                };
                _0xf7ad40.stream_read_1_bytes(_0x384935);
                _0xf7ad40.extract_bits(0x5);
                this.lengthSizeMinusOne = _0xf7ad40.extract_bits(0x2);
                this.ptl_present_flag = _0xf7ad40.extract_bits(0x1);
                if (this.ptl_present_flag) {
                    _0xf7ad40.stream_read_2_bytes(_0x384935);
                    this.ols_idx = _0xf7ad40.extract_bits(0x9);
                    this.num_sublayers = _0xf7ad40.extract_bits(0x3);
                    this.constant_frame_rate = _0xf7ad40.extract_bits(0x2);
                    this.chroma_format_idc = _0xf7ad40.extract_bits(0x2);
                    _0xf7ad40.stream_read_1_bytes(_0x384935);
                    this.bit_depth_minus8 = _0xf7ad40.extract_bits(0x3);
                    _0xf7ad40.extract_bits(0x5);
                    _0xf7ad40.stream_read_2_bytes(_0x384935);
                    _0xf7ad40.extract_bits(0x2);
                    this.num_bytes_constraint_info = _0xf7ad40.extract_bits(0x6);
                    this.general_profile_idc = _0xf7ad40.extract_bits(0x7);
                    this.general_tier_flag = _0xf7ad40.extract_bits(0x1);
                    this.general_level_idc = _0x384935.readUint8();
                    _0xf7ad40.stream_read_1_bytes(_0x384935);
                    this.ptl_frame_only_constraint_flag = _0xf7ad40.extract_bits(0x1);
                    this.ptl_multilayer_enabled_flag = _0xf7ad40.extract_bits(0x1);
                    this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
                    if (this.num_bytes_constraint_info) {
                        for (_0xfdde0e = 0x0; _0xfdde0e < this.num_bytes_constraint_info - 0x1; _0xfdde0e++) {
                            var _0x2afc3f = _0xf7ad40.extract_bits(0x6);
                            _0xf7ad40.stream_read_1_bytes(_0x384935);
                            var _0x45106b = _0xf7ad40.extract_bits(0x2);
                            this.general_constraint_info[_0xfdde0e] = (_0x2afc3f << 0x2) | _0x45106b;
                        }
                        this.general_constraint_info[this.num_bytes_constraint_info - 0x1] = _0xf7ad40.extract_bits(0x6);
                    } else {
                        _0xf7ad40.extract_bits(0x6);
                    }
                    _0xf7ad40.stream_read_1_bytes(_0x384935);
                    this.ptl_sublayer_present_mask = 0x0;
                    for (_0x4646cc = this.num_sublayers - 0x2; _0x4646cc >= 0x0; --_0x4646cc) {
                        var _0x47d657 = _0xf7ad40.extract_bits(0x1);
                        this.ptl_sublayer_present_mask |= _0x47d657 << _0x4646cc;
                    }
                    for (_0x4646cc = this.num_sublayers; _0x4646cc <= 0x8 && this.num_sublayers > 0x1; ++_0x4646cc) {
                        _0xf7ad40.extract_bits(0x1);
                    }
                    for (_0x4646cc = this.num_sublayers - 0x2; _0x4646cc >= 0x0; --_0x4646cc) {
                        if (this.ptl_sublayer_present_mask & (0x1 << _0x4646cc)) {
                            this.sublayer_level_idc[_0x4646cc] = _0x384935.readUint8();
                        }
                    }
                    this.ptl_num_sub_profiles = _0x384935.readUint8();
                    this.general_sub_profile_idc = [];
                    if (this.ptl_num_sub_profiles) {
                        for (_0xfdde0e = 0x0; _0xfdde0e < this.ptl_num_sub_profiles; _0xfdde0e++) {
                            this.general_sub_profile_idc.push(_0x384935.readUint32());
                        }
                    }
                    this.max_picture_width = _0x384935.readUint16();
                    this.max_picture_height = _0x384935.readUint16();
                    this.avg_frame_rate = _0x384935.readUint16();
                }
                this.nalu_arrays = [];
                var _0x116bfc = _0x384935.readUint8();
                for (_0xfdde0e = 0x0; _0xfdde0e < _0x116bfc; _0xfdde0e++) {
                    var _0xda51d4 = [];
                    this.nalu_arrays.push(_0xda51d4);
                    _0xf7ad40.stream_read_1_bytes(_0x384935);
                    _0xda51d4.completeness = _0xf7ad40.extract_bits(0x1);
                    _0xf7ad40.extract_bits(0x2);
                    _0xda51d4.nalu_type = _0xf7ad40.extract_bits(0x5);
                    var _0x20a136 = 0x1;
                    if (0xd != _0xda51d4.nalu_type && 0xc != _0xda51d4.nalu_type) {
                        _0x20a136 = _0x384935.readUint16();
                    }
                    for (_0x4646cc = 0x0; _0x4646cc < _0x20a136; _0x4646cc++) {
                        var _0x4a0433 = _0x384935.readUint16();
                        _0xda51d4.push({
                            data: _0x384935.readUint8Array(_0x4a0433),
                            length: _0x4a0433,
                        });
                    }
                }
            });
            _0x5a8df5.createFullBoxCtor("vvnC", function (_0x33afd4) {
                var _0x4cb7cb = strm.readUint8();
                this.lengthSizeMinusOne = 0x3 & _0x4cb7cb;
            });
            _0x5a8df5.SampleEntry.prototype.isVideo = function () {
                return false;
            };
            _0x5a8df5.SampleEntry.prototype.isAudio = function () {
                return false;
            };
            _0x5a8df5.SampleEntry.prototype.isSubtitle = function () {
                return false;
            };
            _0x5a8df5.SampleEntry.prototype.isMetadata = function () {
                return false;
            };
            _0x5a8df5.SampleEntry.prototype.isHint = function () {
                return false;
            };
            _0x5a8df5.SampleEntry.prototype.getCodec = function () {
                return this.type.replace(".", "");
            };
            _0x5a8df5.SampleEntry.prototype.getWidth = function () {
                return "";
            };
            _0x5a8df5.SampleEntry.prototype.getHeight = function () {
                return "";
            };
            _0x5a8df5.SampleEntry.prototype.getChannelCount = function () {
                return "";
            };
            _0x5a8df5.SampleEntry.prototype.getSampleRate = function () {
                return "";
            };
            _0x5a8df5.SampleEntry.prototype.getSampleSize = function () {
                return "";
            };
            _0x5a8df5.VisualSampleEntry.prototype.isVideo = function () {
                return true;
            };
            _0x5a8df5.VisualSampleEntry.prototype.getWidth = function () {
                return this.width;
            };
            _0x5a8df5.VisualSampleEntry.prototype.getHeight = function () {
                return this.height;
            };
            _0x5a8df5.AudioSampleEntry.prototype.isAudio = function () {
                return true;
            };
            _0x5a8df5.AudioSampleEntry.prototype.getChannelCount = function () {
                return this.channel_count;
            };
            _0x5a8df5.AudioSampleEntry.prototype.getSampleRate = function () {
                return this.samplerate;
            };
            _0x5a8df5.AudioSampleEntry.prototype.getSampleSize = function () {
                return this.samplesize;
            };
            _0x5a8df5.SubtitleSampleEntry.prototype.isSubtitle = function () {
                return true;
            };
            _0x5a8df5.MetadataSampleEntry.prototype.isMetadata = function () {
                return true;
            };
            _0x5a8df5.decimalToHex = function (_0x5af1d2, _0x4f2076) {
                var _0x494750 = Number(_0x5af1d2).toString(0x10);
                for (_0x4f2076 = null == _0x4f2076 ? (_0x4f2076 = 0x2) : _0x4f2076; _0x494750.length < _0x4f2076; ) {
                    _0x494750 = "0" + _0x494750;
                }
                return _0x494750;
            };
            _0x5a8df5.avc1SampleEntry.prototype.getCodec =
                _0x5a8df5.avc2SampleEntry.prototype.getCodec =
                _0x5a8df5.avc3SampleEntry.prototype.getCodec =
                _0x5a8df5.avc4SampleEntry.prototype.getCodec =
                    function () {
                        var _0x532ad2 = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                        return this.avcC
                            ? _0x532ad2 +
                                  "." +
                                  _0x5a8df5.decimalToHex(this.avcC.AVCProfileIndication) +
                                  _0x5a8df5.decimalToHex(this.avcC.profile_compatibility) +
                                  _0x5a8df5.decimalToHex(this.avcC.AVCLevelIndication)
                            : _0x532ad2;
                    };
            _0x5a8df5.hev1SampleEntry.prototype.getCodec = _0x5a8df5.hvc1SampleEntry.prototype.getCodec = function () {
                var _0x360864;
                var _0x31535c = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                if (this.hvcC) {
                    _0x31535c += ".";
                    switch (this.hvcC.general_profile_space) {
                        case 0x0:
                            _0x31535c += "";
                            break;
                        case 0x1:
                            _0x31535c += "A";
                            break;
                        case 0x2:
                            _0x31535c += "B";
                            break;
                        case 0x3:
                            _0x31535c += "C";
                    }
                    _0x31535c += this.hvcC.general_profile_idc;
                    _0x31535c += ".";
                    var _0x25a2f4 = this.hvcC.general_profile_compatibility;
                    var _0x274055 = 0x0;
                    for (_0x360864 = 0x0; _0x360864 < 0x20 && ((_0x274055 |= 0x1 & _0x25a2f4), 0x1f != _0x360864); _0x360864++) {
                        _0x274055 <<= 0x1;
                        _0x25a2f4 >>= 0x1;
                    }
                    _0x31535c += _0x5a8df5.decimalToHex(_0x274055, 0x0);
                    _0x31535c += ".";
                    if (0x0 === this.hvcC.general_tier_flag) {
                        _0x31535c += "L";
                    } else {
                        _0x31535c += "H";
                    }
                    _0x31535c += this.hvcC.general_level_idc;
                    var _0x3122ed = false;
                    var _0x20fe70 = "";
                    for (_0x360864 = 0x5; _0x360864 >= 0x0; _0x360864--) {
                        if (this.hvcC.general_constraint_indicator[_0x360864] || _0x3122ed) {
                            _0x20fe70 = "." + _0x5a8df5.decimalToHex(this.hvcC.general_constraint_indicator[_0x360864], 0x0) + _0x20fe70;
                            _0x3122ed = true;
                        }
                    }
                    _0x31535c += _0x20fe70;
                }
                return _0x31535c;
            };
            _0x5a8df5.vvc1SampleEntry.prototype.getCodec = _0x5a8df5.vvi1SampleEntry.prototype.getCodec = function () {
                var _0x48491d;
                var _0x20dd2f = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                if (this.vvcC) {
                    _0x20dd2f += "." + this.vvcC.general_profile_idc;
                    if (this.vvcC.general_tier_flag) {
                        _0x20dd2f += ".H";
                    } else {
                        _0x20dd2f += ".L";
                    }
                    _0x20dd2f += this.vvcC.general_level_idc;
                    var _0x3ad1d6 = "";
                    if (this.vvcC.general_constraint_info) {
                        var _0x549276;
                        var _0x1513c8 = [];
                        var _0x1acc95 = 0x0;
                        _0x1acc95 |= this.vvcC.ptl_frame_only_constraint << 0x7;
                        _0x1acc95 |= this.vvcC.ptl_multilayer_enabled << 0x6;
                        for (_0x48491d = 0x0; _0x48491d < this.vvcC.general_constraint_info.length; ++_0x48491d) {
                            _0x1acc95 |= (this.vvcC.general_constraint_info[_0x48491d] >> 0x2) & 0x3f;
                            _0x1513c8.push(_0x1acc95);
                            if (_0x1acc95) {
                                _0x549276 = _0x48491d;
                            }
                            _0x1acc95 = (this.vvcC.general_constraint_info[_0x48491d] >> 0x2) & 0x3;
                        }
                        if (undefined === _0x549276) {
                            _0x3ad1d6 = ".CA";
                        } else {
                            _0x3ad1d6 = ".C";
                            var _0xb143fa = 0x0;
                            var _0x53c8cc = 0x0;
                            for (_0x48491d = 0x0; _0x48491d <= _0x549276; ++_0x48491d) {
                                _0xb143fa = (_0xb143fa << 0x8) | _0x1513c8[_0x48491d];
                                for (_0x53c8cc += 0x8; _0x53c8cc >= 0x5; ) {
                                    _0x3ad1d6 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[(_0xb143fa >> (_0x53c8cc - 0x5)) & 0x1f];
                                    _0xb143fa &= (0x1 << (_0x53c8cc -= 0x5)) - 0x1;
                                }
                            }
                            if (_0x53c8cc) {
                                _0x3ad1d6 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[0x1f & (_0xb143fa <<= 0x5 - _0x53c8cc)];
                            }
                        }
                    }
                    _0x20dd2f += _0x3ad1d6;
                }
                return _0x20dd2f;
            };
            _0x5a8df5.mp4aSampleEntry.prototype.getCodec = function () {
                var _0x5ab9e2 = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                if (this.esds && this.esds.esd) {
                    var _0x619c50 = this.esds.esd.getOTI();
                    var _0x579916 = this.esds.esd.getAudioConfig();
                    return _0x5ab9e2 + "." + _0x5a8df5.decimalToHex(_0x619c50) + (_0x579916 ? "." + _0x579916 : "");
                }
                return _0x5ab9e2;
            };
            _0x5a8df5.stxtSampleEntry.prototype.getCodec = function () {
                var _0x4554c8 = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                return this.mime_format ? _0x4554c8 + "." + this.mime_format : _0x4554c8;
            };
            _0x5a8df5.vp08SampleEntry.prototype.getCodec = _0x5a8df5.vp09SampleEntry.prototype.getCodec = function () {
                var _0x3e778e = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                var _0x59f4ce = this.vpcC.level;
                if (0x0 == _0x59f4ce) {
                    _0x59f4ce = "00";
                }
                var _0x570839 = this.vpcC.bitDepth;
                if (0x8 == _0x570839) {
                    _0x570839 = "08";
                }
                return _0x3e778e + ".0" + this.vpcC.profile + "." + _0x59f4ce + "." + _0x570839;
            };
            _0x5a8df5.av01SampleEntry.prototype.getCodec = function () {
                var _0x1e8eca;
                var _0x133daf = _0x5a8df5.SampleEntry.prototype.getCodec.call(this);
                var _0x256e61 = this.av1C.seq_level_idx_0;
                if (_0x256e61 < 0xa) {
                    _0x256e61 = "0" + _0x256e61;
                }
                if (0x2 === this.av1C.seq_profile && 0x1 === this.av1C.high_bitdepth) {
                    _0x1e8eca = 0x1 === this.av1C.twelve_bit ? "12" : "10";
                } else if (this.av1C.seq_profile <= 0x2) {
                    _0x1e8eca = 0x1 === this.av1C.high_bitdepth ? "10" : "08";
                }
                return _0x133daf + "." + this.av1C.seq_profile + "." + _0x256e61 + (this.av1C.seq_tier_0 ? "H" : "M") + "." + _0x1e8eca;
            };
            _0x5a8df5.Box.prototype.writeHeader = function (_0x12b3b4, _0x2c355b) {
                this.size += 0x8;
                if (this.size > _0x2cf13d) {
                    this.size += 0x8;
                }
                if ("uuid" === this.type) {
                    this.size += 0x10;
                }
                _0x5a6c18.debug(
                    "BoxWriter",
                    "Writing box " + this.type + " of size: " + this.size + " at position " + _0x12b3b4.getPosition() + (_0x2c355b || "")
                );
                if (this.size > _0x2cf13d) {
                    _0x12b3b4.writeUint32(0x1);
                } else {
                    this.sizePosition = _0x12b3b4.getPosition();
                    _0x12b3b4.writeUint32(this.size);
                }
                _0x12b3b4.writeString(this.type, null, 0x4);
                if ("uuid" === this.type) {
                    _0x12b3b4.writeUint8Array(this.uuid);
                }
                if (this.size > _0x2cf13d) {
                    _0x12b3b4.writeUint64(this.size);
                }
            };
            _0x5a8df5.FullBox.prototype.writeHeader = function (_0x3949df) {
                this.size += 0x4;
                _0x5a8df5.Box.prototype.writeHeader.call(this, _0x3949df, " v=" + this.version + " f=" + this.flags);
                _0x3949df.writeUint8(this.version);
                _0x3949df.writeUint24(this.flags);
            };
            _0x5a8df5.Box.prototype.write = function (_0x246639) {
                if ("mdat" === this.type) {
                    if (this.data) {
                        this.size = this.data.length;
                        this.writeHeader(_0x246639);
                        _0x246639.writeUint8Array(this.data);
                    }
                } else {
                    this.size = this.data ? this.data.length : 0x0;
                    this.writeHeader(_0x246639);
                    if (this.data) {
                        _0x246639.writeUint8Array(this.data);
                    }
                }
            };
            _0x5a8df5.ContainerBox.prototype.write = function (_0x2e0361) {
                this.size = 0x0;
                this.writeHeader(_0x2e0361);
                for (var _0x305d2a = 0x0; _0x305d2a < this.boxes.length; _0x305d2a++) {
                    if (this.boxes[_0x305d2a]) {
                        this.boxes[_0x305d2a].write(_0x2e0361);
                        this.size += this.boxes[_0x305d2a].size;
                    }
                }
                _0x5a6c18.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
                _0x2e0361.adjustUint32(this.sizePosition, this.size);
            };
            _0x5a8df5.TrackReferenceTypeBox.prototype.write = function (_0x31d644) {
                this.size = 0x4 * this.track_ids.length;
                this.writeHeader(_0x31d644);
                _0x31d644.writeUint32Array(this.track_ids);
            };
            _0x5a8df5.avcCBox.prototype.write = function (_0xf5abdf) {
                var _0x3af662;
                this.size = 0x7;
                for (_0x3af662 = 0x0; _0x3af662 < this.SPS.length; _0x3af662++) {
                    this.size += 0x2 + this.SPS[_0x3af662].length;
                }
                for (_0x3af662 = 0x0; _0x3af662 < this.PPS.length; _0x3af662++) {
                    this.size += 0x2 + this.PPS[_0x3af662].length;
                }
                if (this.ext) {
                    this.size += this.ext.length;
                }
                this.writeHeader(_0xf5abdf);
                _0xf5abdf.writeUint8(this.configurationVersion);
                _0xf5abdf.writeUint8(this.AVCProfileIndication);
                _0xf5abdf.writeUint8(this.profile_compatibility);
                _0xf5abdf.writeUint8(this.AVCLevelIndication);
                _0xf5abdf.writeUint8(this.lengthSizeMinusOne + 0xfc);
                _0xf5abdf.writeUint8(this.SPS.length + 0xe0);
                for (_0x3af662 = 0x0; _0x3af662 < this.SPS.length; _0x3af662++) {
                    _0xf5abdf.writeUint16(this.SPS[_0x3af662].length);
                    _0xf5abdf.writeUint8Array(this.SPS[_0x3af662].nalu);
                }
                _0xf5abdf.writeUint8(this.PPS.length);
                for (_0x3af662 = 0x0; _0x3af662 < this.PPS.length; _0x3af662++) {
                    _0xf5abdf.writeUint16(this.PPS[_0x3af662].length);
                    _0xf5abdf.writeUint8Array(this.PPS[_0x3af662].nalu);
                }
                if (this.ext) {
                    _0xf5abdf.writeUint8Array(this.ext);
                }
            };
            _0x5a8df5.co64Box.prototype.write = function (_0x6048f6) {
                var _0x2c9fa8;
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0x8 * this.chunk_offsets.length;
                this.writeHeader(_0x6048f6);
                _0x6048f6.writeUint32(this.chunk_offsets.length);
                for (_0x2c9fa8 = 0x0; _0x2c9fa8 < this.chunk_offsets.length; _0x2c9fa8++) {
                    _0x6048f6.writeUint64(this.chunk_offsets[_0x2c9fa8]);
                }
            };
            _0x5a8df5.cslgBox.prototype.write = function (_0x4beb83) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x14;
                this.writeHeader(_0x4beb83);
                _0x4beb83.writeInt32(this.compositionToDTSShift);
                _0x4beb83.writeInt32(this.leastDecodeToDisplayDelta);
                _0x4beb83.writeInt32(this.greatestDecodeToDisplayDelta);
                _0x4beb83.writeInt32(this.compositionStartTime);
                _0x4beb83.writeInt32(this.compositionEndTime);
            };
            _0x5a8df5.cttsBox.prototype.write = function (_0x5f197d) {
                var _0x1538de;
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0x8 * this.sample_counts.length;
                this.writeHeader(_0x5f197d);
                _0x5f197d.writeUint32(this.sample_counts.length);
                for (_0x1538de = 0x0; _0x1538de < this.sample_counts.length; _0x1538de++) {
                    _0x5f197d.writeUint32(this.sample_counts[_0x1538de]);
                    if (0x1 === this.version) {
                        _0x5f197d.writeInt32(this.sample_offsets[_0x1538de]);
                    } else {
                        _0x5f197d.writeUint32(this.sample_offsets[_0x1538de]);
                    }
                }
            };
            _0x5a8df5.drefBox.prototype.write = function (_0x26aa07) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4;
                this.writeHeader(_0x26aa07);
                _0x26aa07.writeUint32(this.entries.length);
                for (var _0x1ff3e0 = 0x0; _0x1ff3e0 < this.entries.length; _0x1ff3e0++) {
                    this.entries[_0x1ff3e0].write(_0x26aa07);
                    this.size += this.entries[_0x1ff3e0].size;
                }
                _0x5a6c18.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
                _0x26aa07.adjustUint32(this.sizePosition, this.size);
            };
            _0x5a8df5.elngBox.prototype.write = function (_0x8f898d) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = this.extended_language.length;
                this.writeHeader(_0x8f898d);
                _0x8f898d.writeString(this.extended_language);
            };
            _0x5a8df5.elstBox.prototype.write = function (_0x2f20b7) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0xc * this.entries.length;
                this.writeHeader(_0x2f20b7);
                _0x2f20b7.writeUint32(this.entries.length);
                for (var _0x3b1004 = 0x0; _0x3b1004 < this.entries.length; _0x3b1004++) {
                    var _0x3a8102 = this.entries[_0x3b1004];
                    _0x2f20b7.writeUint32(_0x3a8102.segment_duration);
                    _0x2f20b7.writeInt32(_0x3a8102.media_time);
                    _0x2f20b7.writeInt16(_0x3a8102.media_rate_integer);
                    _0x2f20b7.writeInt16(_0x3a8102.media_rate_fraction);
                }
            };
            _0x5a8df5.emsgBox.prototype.write = function (_0x699ba1) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x10 + this.message_data.length + (this.scheme_id_uri.length + 0x1) + (this.value.length + 0x1);
                this.writeHeader(_0x699ba1);
                _0x699ba1.writeCString(this.scheme_id_uri);
                _0x699ba1.writeCString(this.value);
                _0x699ba1.writeUint32(this.timescale);
                _0x699ba1.writeUint32(this.presentation_time_delta);
                _0x699ba1.writeUint32(this.event_duration);
                _0x699ba1.writeUint32(this.id);
                _0x699ba1.writeUint8Array(this.message_data);
            };
            _0x5a8df5.ftypBox.prototype.write = function (_0x30c184) {
                this.size = 0x8 + 0x4 * this.compatible_brands.length;
                this.writeHeader(_0x30c184);
                _0x30c184.writeString(this.major_brand, null, 0x4);
                _0x30c184.writeUint32(this.minor_version);
                for (var _0x2be285 = 0x0; _0x2be285 < this.compatible_brands.length; _0x2be285++) {
                    _0x30c184.writeString(this.compatible_brands[_0x2be285], null, 0x4);
                }
            };
            _0x5a8df5.hdlrBox.prototype.write = function (_0x1de013) {
                this.size = 0x14 + this.name.length + 0x1;
                this.version = 0x0;
                this.flags = 0x0;
                this.writeHeader(_0x1de013);
                _0x1de013.writeUint32(0x0);
                _0x1de013.writeString(this.handler, null, 0x4);
                _0x1de013.writeUint32(0x0);
                _0x1de013.writeUint32(0x0);
                _0x1de013.writeUint32(0x0);
                _0x1de013.writeCString(this.name);
            };
            _0x5a8df5.kindBox.prototype.write = function (_0x49a3ca) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = this.schemeURI.length + 0x1 + (this.value.length + 0x1);
                this.writeHeader(_0x49a3ca);
                _0x49a3ca.writeCString(this.schemeURI);
                _0x49a3ca.writeCString(this.value);
            };
            _0x5a8df5.mdhdBox.prototype.write = function (_0x37f584) {
                this.size = 0x14;
                this.flags = 0x0;
                this.version = 0x0;
                this.writeHeader(_0x37f584);
                _0x37f584.writeUint32(this.creation_time);
                _0x37f584.writeUint32(this.modification_time);
                _0x37f584.writeUint32(this.timescale);
                _0x37f584.writeUint32(this.duration);
                _0x37f584.writeUint16(this.language);
                _0x37f584.writeUint16(0x0);
            };
            _0x5a8df5.mehdBox.prototype.write = function (_0x565c73) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4;
                this.writeHeader(_0x565c73);
                _0x565c73.writeUint32(this.fragment_duration);
            };
            _0x5a8df5.mfhdBox.prototype.write = function (_0x300fee) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4;
                this.writeHeader(_0x300fee);
                _0x300fee.writeUint32(this.sequence_number);
            };
            _0x5a8df5.mvhdBox.prototype.write = function (_0x11d9a0) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x60;
                this.writeHeader(_0x11d9a0);
                _0x11d9a0.writeUint32(this.creation_time);
                _0x11d9a0.writeUint32(this.modification_time);
                _0x11d9a0.writeUint32(this.timescale);
                _0x11d9a0.writeUint32(this.duration);
                _0x11d9a0.writeUint32(this.rate);
                _0x11d9a0.writeUint16(this.volume << 0x8);
                _0x11d9a0.writeUint16(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32Array(this.matrix);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(0x0);
                _0x11d9a0.writeUint32(this.next_track_id);
            };
            _0x5a8df5.SampleEntry.prototype.writeHeader = function (_0xda1884) {
                this.size = 0x8;
                _0x5a8df5.Box.prototype.writeHeader.call(this, _0xda1884);
                _0xda1884.writeUint8(0x0);
                _0xda1884.writeUint8(0x0);
                _0xda1884.writeUint8(0x0);
                _0xda1884.writeUint8(0x0);
                _0xda1884.writeUint8(0x0);
                _0xda1884.writeUint8(0x0);
                _0xda1884.writeUint16(this.data_reference_index);
            };
            _0x5a8df5.SampleEntry.prototype.writeFooter = function (_0xcf922a) {
                for (var _0x61b579 = 0x0; _0x61b579 < this.boxes.length; _0x61b579++) {
                    this.boxes[_0x61b579].write(_0xcf922a);
                    this.size += this.boxes[_0x61b579].size;
                }
                _0x5a6c18.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
                _0xcf922a.adjustUint32(this.sizePosition, this.size);
            };
            _0x5a8df5.SampleEntry.prototype.write = function (_0x2bd865) {
                this.writeHeader(_0x2bd865);
                _0x2bd865.writeUint8Array(this.data);
                this.size += this.data.length;
                _0x5a6c18.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
                _0x2bd865.adjustUint32(this.sizePosition, this.size);
            };
            _0x5a8df5.VisualSampleEntry.prototype.write = function (_0x288645) {
                this.writeHeader(_0x288645);
                this.size += 0x46;
                _0x288645.writeUint16(0x0);
                _0x288645.writeUint16(0x0);
                _0x288645.writeUint32(0x0);
                _0x288645.writeUint32(0x0);
                _0x288645.writeUint32(0x0);
                _0x288645.writeUint16(this.width);
                _0x288645.writeUint16(this.height);
                _0x288645.writeUint32(this.horizresolution);
                _0x288645.writeUint32(this.vertresolution);
                _0x288645.writeUint32(0x0);
                _0x288645.writeUint16(this.frame_count);
                _0x288645.writeUint8(Math.min(0x1f, this.compressorname.length));
                _0x288645.writeString(this.compressorname, null, 0x1f);
                _0x288645.writeUint16(this.depth);
                _0x288645.writeInt16(-0x1);
                this.writeFooter(_0x288645);
            };
            _0x5a8df5.AudioSampleEntry.prototype.write = function (_0x138f66) {
                this.writeHeader(_0x138f66);
                this.size += 0x14;
                _0x138f66.writeUint32(0x0);
                _0x138f66.writeUint32(0x0);
                _0x138f66.writeUint16(this.channel_count);
                _0x138f66.writeUint16(this.samplesize);
                _0x138f66.writeUint16(0x0);
                _0x138f66.writeUint16(0x0);
                _0x138f66.writeUint32(this.samplerate << 0x10);
                this.writeFooter(_0x138f66);
            };
            _0x5a8df5.stppSampleEntry.prototype.write = function (_0xc222f7) {
                this.writeHeader(_0xc222f7);
                this.size += this.namespace.length + 0x1 + this.schema_location.length + 0x1 + this.auxiliary_mime_types.length + 0x1;
                _0xc222f7.writeCString(this.namespace);
                _0xc222f7.writeCString(this.schema_location);
                _0xc222f7.writeCString(this.auxiliary_mime_types);
                this.writeFooter(_0xc222f7);
            };
            _0x5a8df5.SampleGroupEntry.prototype.write = function (_0x3cbb14) {
                _0x3cbb14.writeUint8Array(this.data);
            };
            _0x5a8df5.sbgpBox.prototype.write = function (_0x5f06a4) {
                this.version = 0x1;
                this.flags = 0x0;
                this.size = 0xc + 0x8 * this.entries.length;
                this.writeHeader(_0x5f06a4);
                _0x5f06a4.writeString(this.grouping_type, null, 0x4);
                _0x5f06a4.writeUint32(this.grouping_type_parameter);
                _0x5f06a4.writeUint32(this.entries.length);
                for (var _0x4fc730 = 0x0; _0x4fc730 < this.entries.length; _0x4fc730++) {
                    var _0x20ce0a = this.entries[_0x4fc730];
                    _0x5f06a4.writeInt32(_0x20ce0a.sample_count);
                    _0x5f06a4.writeInt32(_0x20ce0a.group_description_index);
                }
            };
            _0x5a8df5.sgpdBox.prototype.write = function (_0x8b57bd) {
                var _0x43e2e7;
                var _0x157d6f;
                this.flags = 0x0;
                this.size = 0xc;
                for (_0x43e2e7 = 0x0; _0x43e2e7 < this.entries.length; _0x43e2e7++) {
                    _0x157d6f = this.entries[_0x43e2e7];
                    if (0x1 === this.version) {
                        if (0x0 === this.default_length) {
                            this.size += 0x4;
                        }
                        this.size += _0x157d6f.data.length;
                    }
                }
                this.writeHeader(_0x8b57bd);
                _0x8b57bd.writeString(this.grouping_type, null, 0x4);
                if (0x1 === this.version) {
                    _0x8b57bd.writeUint32(this.default_length);
                }
                if (this.version >= 0x2) {
                    _0x8b57bd.writeUint32(this.default_sample_description_index);
                }
                _0x8b57bd.writeUint32(this.entries.length);
                for (_0x43e2e7 = 0x0; _0x43e2e7 < this.entries.length; _0x43e2e7++) {
                    _0x157d6f = this.entries[_0x43e2e7];
                    if (0x1 === this.version && 0x0 === this.default_length) {
                        _0x8b57bd.writeUint32(_0x157d6f.description_length);
                    }
                    _0x157d6f.write(_0x8b57bd);
                }
            };
            _0x5a8df5.sidxBox.prototype.write = function (_0x1f65b3) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x14 + 0xc * this.references.length;
                this.writeHeader(_0x1f65b3);
                _0x1f65b3.writeUint32(this.reference_ID);
                _0x1f65b3.writeUint32(this.timescale);
                _0x1f65b3.writeUint32(this.earliest_presentation_time);
                _0x1f65b3.writeUint32(this.first_offset);
                _0x1f65b3.writeUint16(0x0);
                _0x1f65b3.writeUint16(this.references.length);
                for (var _0x1cb288 = 0x0; _0x1cb288 < this.references.length; _0x1cb288++) {
                    var _0x15c916 = this.references[_0x1cb288];
                    _0x1f65b3.writeUint32((_0x15c916.reference_type << 0x1f) | _0x15c916.referenced_size);
                    _0x1f65b3.writeUint32(_0x15c916.subsegment_duration);
                    _0x1f65b3.writeUint32((_0x15c916.starts_with_SAP << 0x1f) | (_0x15c916.SAP_type << 0x1c) | _0x15c916.SAP_delta_time);
                }
            };
            _0x5a8df5.smhdBox.prototype.write = function (_0x479bba) {
                this.version = 0x0;
                this.flags = 0x1;
                this.size = 0x4;
                this.writeHeader(_0x479bba);
                _0x479bba.writeUint16(this.balance);
                _0x479bba.writeUint16(0x0);
            };
            _0x5a8df5.stcoBox.prototype.write = function (_0x483734) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0x4 * this.chunk_offsets.length;
                this.writeHeader(_0x483734);
                _0x483734.writeUint32(this.chunk_offsets.length);
                _0x483734.writeUint32Array(this.chunk_offsets);
            };
            _0x5a8df5.stscBox.prototype.write = function (_0x5d78af) {
                var _0xe73e56;
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0xc * this.first_chunk.length;
                this.writeHeader(_0x5d78af);
                _0x5d78af.writeUint32(this.first_chunk.length);
                for (_0xe73e56 = 0x0; _0xe73e56 < this.first_chunk.length; _0xe73e56++) {
                    _0x5d78af.writeUint32(this.first_chunk[_0xe73e56]);
                    _0x5d78af.writeUint32(this.samples_per_chunk[_0xe73e56]);
                    _0x5d78af.writeUint32(this.sample_description_index[_0xe73e56]);
                }
            };
            _0x5a8df5.stsdBox.prototype.write = function (_0x2dcd1e) {
                var _0x179775;
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x0;
                this.writeHeader(_0x2dcd1e);
                _0x2dcd1e.writeUint32(this.entries.length);
                this.size += 0x4;
                for (_0x179775 = 0x0; _0x179775 < this.entries.length; _0x179775++) {
                    this.entries[_0x179775].write(_0x2dcd1e);
                    this.size += this.entries[_0x179775].size;
                }
                _0x5a6c18.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
                _0x2dcd1e.adjustUint32(this.sizePosition, this.size);
            };
            _0x5a8df5.stshBox.prototype.write = function (_0x284e86) {
                var _0x16aa26;
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0x8 * this.shadowed_sample_numbers.length;
                this.writeHeader(_0x284e86);
                _0x284e86.writeUint32(this.shadowed_sample_numbers.length);
                for (_0x16aa26 = 0x0; _0x16aa26 < this.shadowed_sample_numbers.length; _0x16aa26++) {
                    _0x284e86.writeUint32(this.shadowed_sample_numbers[_0x16aa26]);
                    _0x284e86.writeUint32(this.sync_sample_numbers[_0x16aa26]);
                }
            };
            _0x5a8df5.stssBox.prototype.write = function (_0x1128b9) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0x4 * this.sample_numbers.length;
                this.writeHeader(_0x1128b9);
                _0x1128b9.writeUint32(this.sample_numbers.length);
                _0x1128b9.writeUint32Array(this.sample_numbers);
            };
            _0x5a8df5.stszBox.prototype.write = function (_0xc65918) {
                var _0x3a7fa3;
                var _0x119da2 = true;
                this.version = 0x0;
                this.flags = 0x0;
                if (this.sample_sizes.length > 0x0) {
                    for (_0x3a7fa3 = 0x0; _0x3a7fa3 + 0x1 < this.sample_sizes.length; ) {
                        if (this.sample_sizes[_0x3a7fa3 + 0x1] !== this.sample_sizes[0x0]) {
                            _0x119da2 = false;
                            break;
                        }
                        _0x3a7fa3++;
                    }
                } else {
                    _0x119da2 = false;
                }
                this.size = 0x8;
                if (!_0x119da2) {
                    this.size += 0x4 * this.sample_sizes.length;
                }
                this.writeHeader(_0xc65918);
                if (_0x119da2) {
                    _0xc65918.writeUint32(this.sample_sizes[0x0]);
                } else {
                    _0xc65918.writeUint32(0x0);
                }
                _0xc65918.writeUint32(this.sample_sizes.length);
                if (!_0x119da2) {
                    _0xc65918.writeUint32Array(this.sample_sizes);
                }
            };
            _0x5a8df5.sttsBox.prototype.write = function (_0x1f5a1f) {
                var _0xd254d2;
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x4 + 0x8 * this.sample_counts.length;
                this.writeHeader(_0x1f5a1f);
                _0x1f5a1f.writeUint32(this.sample_counts.length);
                for (_0xd254d2 = 0x0; _0xd254d2 < this.sample_counts.length; _0xd254d2++) {
                    _0x1f5a1f.writeUint32(this.sample_counts[_0xd254d2]);
                    _0x1f5a1f.writeUint32(this.sample_deltas[_0xd254d2]);
                }
            };
            _0x5a8df5.tfdtBox.prototype.write = function (_0x323bc7) {
                var _0x268081 = Math.pow(0x2, 0x20) - 0x1;
                this.version = this.baseMediaDecodeTime > _0x268081 ? 0x1 : 0x0;
                this.flags = 0x0;
                this.size = 0x4;
                if (0x1 === this.version) {
                    this.size += 0x4;
                }
                this.writeHeader(_0x323bc7);
                if (0x1 === this.version) {
                    _0x323bc7.writeUint64(this.baseMediaDecodeTime);
                } else {
                    _0x323bc7.writeUint32(this.baseMediaDecodeTime);
                }
            };
            _0x5a8df5.tfhdBox.prototype.write = function (_0x448a56) {
                this.version = 0x0;
                this.size = 0x4;
                if (this.flags & _0x5a8df5.TFHD_FLAG_BASE_DATA_OFFSET) {
                    this.size += 0x8;
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DESC) {
                    this.size += 0x4;
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DUR) {
                    this.size += 0x4;
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_SIZE) {
                    this.size += 0x4;
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_FLAGS) {
                    this.size += 0x4;
                }
                this.writeHeader(_0x448a56);
                _0x448a56.writeUint32(this.track_id);
                if (this.flags & _0x5a8df5.TFHD_FLAG_BASE_DATA_OFFSET) {
                    _0x448a56.writeUint64(this.base_data_offset);
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DESC) {
                    _0x448a56.writeUint32(this.default_sample_description_index);
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DUR) {
                    _0x448a56.writeUint32(this.default_sample_duration);
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_SIZE) {
                    _0x448a56.writeUint32(this.default_sample_size);
                }
                if (this.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_FLAGS) {
                    _0x448a56.writeUint32(this.default_sample_flags);
                }
            };
            _0x5a8df5.tkhdBox.prototype.write = function (_0x51157a) {
                this.version = 0x0;
                this.size = 0x50;
                this.writeHeader(_0x51157a);
                _0x51157a.writeUint32(this.creation_time);
                _0x51157a.writeUint32(this.modification_time);
                _0x51157a.writeUint32(this.track_id);
                _0x51157a.writeUint32(0x0);
                _0x51157a.writeUint32(this.duration);
                _0x51157a.writeUint32(0x0);
                _0x51157a.writeUint32(0x0);
                _0x51157a.writeInt16(this.layer);
                _0x51157a.writeInt16(this.alternate_group);
                _0x51157a.writeInt16(this.volume << 0x8);
                _0x51157a.writeUint16(0x0);
                _0x51157a.writeInt32Array(this.matrix);
                _0x51157a.writeUint32(this.width);
                _0x51157a.writeUint32(this.height);
            };
            _0x5a8df5.trexBox.prototype.write = function (_0x2b765f) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = 0x14;
                this.writeHeader(_0x2b765f);
                _0x2b765f.writeUint32(this.track_id);
                _0x2b765f.writeUint32(this.default_sample_description_index);
                _0x2b765f.writeUint32(this.default_sample_duration);
                _0x2b765f.writeUint32(this.default_sample_size);
                _0x2b765f.writeUint32(this.default_sample_flags);
            };
            _0x5a8df5.trunBox.prototype.write = function (_0x4df891) {
                this.version = 0x0;
                this.size = 0x4;
                if (this.flags & _0x5a8df5.TRUN_FLAGS_DATA_OFFSET) {
                    this.size += 0x4;
                }
                if (this.flags & _0x5a8df5.TRUN_FLAGS_FIRST_FLAG) {
                    this.size += 0x4;
                }
                if (this.flags & _0x5a8df5.TRUN_FLAGS_DURATION) {
                    this.size += 0x4 * this.sample_duration.length;
                }
                if (this.flags & _0x5a8df5.TRUN_FLAGS_SIZE) {
                    this.size += 0x4 * this.sample_size.length;
                }
                if (this.flags & _0x5a8df5.TRUN_FLAGS_FLAGS) {
                    this.size += 0x4 * this.sample_flags.length;
                }
                if (this.flags & _0x5a8df5.TRUN_FLAGS_CTS_OFFSET) {
                    this.size += 0x4 * this.sample_composition_time_offset.length;
                }
                this.writeHeader(_0x4df891);
                _0x4df891.writeUint32(this.sample_count);
                if (this.flags & _0x5a8df5.TRUN_FLAGS_DATA_OFFSET) {
                    this.data_offset_position = _0x4df891.getPosition();
                    _0x4df891.writeInt32(this.data_offset);
                }
                if (this.flags & _0x5a8df5.TRUN_FLAGS_FIRST_FLAG) {
                    _0x4df891.writeUint32(this.first_sample_flags);
                }
                for (var _0x41c813 = 0x0; _0x41c813 < this.sample_count; _0x41c813++) {
                    if (this.flags & _0x5a8df5.TRUN_FLAGS_DURATION) {
                        _0x4df891.writeUint32(this.sample_duration[_0x41c813]);
                    }
                    if (this.flags & _0x5a8df5.TRUN_FLAGS_SIZE) {
                        _0x4df891.writeUint32(this.sample_size[_0x41c813]);
                    }
                    if (this.flags & _0x5a8df5.TRUN_FLAGS_FLAGS) {
                        _0x4df891.writeUint32(this.sample_flags[_0x41c813]);
                    }
                    if (this.flags & _0x5a8df5.TRUN_FLAGS_CTS_OFFSET) {
                        if (0x0 === this.version) {
                            _0x4df891.writeUint32(this.sample_composition_time_offset[_0x41c813]);
                        } else {
                            _0x4df891.writeInt32(this.sample_composition_time_offset[_0x41c813]);
                        }
                    }
                }
            };
            _0x5a8df5["url Box"].prototype.write = function (_0x4c1548) {
                this.version = 0x0;
                if (this.location) {
                    this.flags = 0x0;
                    this.size = this.location.length + 0x1;
                } else {
                    this.flags = 0x1;
                    this.size = 0x0;
                }
                this.writeHeader(_0x4c1548);
                if (this.location) {
                    _0x4c1548.writeCString(this.location);
                }
            };
            _0x5a8df5["urn Box"].prototype.write = function (_0x21b141) {
                this.version = 0x0;
                this.flags = 0x0;
                this.size = this.name.length + 0x1 + (this.location ? this.location.length + 0x1 : 0x0);
                this.writeHeader(_0x21b141);
                _0x21b141.writeCString(this.name);
                if (this.location) {
                    _0x21b141.writeCString(this.location);
                }
            };
            _0x5a8df5.vmhdBox.prototype.write = function (_0x2a2e0b) {
                this.version = 0x0;
                this.flags = 0x1;
                this.size = 0x8;
                this.writeHeader(_0x2a2e0b);
                _0x2a2e0b.writeUint16(this.graphicsmode);
                _0x2a2e0b.writeUint16Array(this.opcolor);
            };
            _0x5a8df5.cttsBox.prototype.unpack = function (_0xc7f3fa) {
                var _0x38b339;
                var _0x4be5a7;
                var _0x5850c2;
                _0x5850c2 = 0x0;
                for (_0x38b339 = 0x0; _0x38b339 < this.sample_counts.length; _0x38b339++) {
                    for (_0x4be5a7 = 0x0; _0x4be5a7 < this.sample_counts[_0x38b339]; _0x4be5a7++) {
                        _0xc7f3fa[_0x5850c2].pts = _0xc7f3fa[_0x5850c2].dts + this.sample_offsets[_0x38b339];
                        _0x5850c2++;
                    }
                }
            };
            _0x5a8df5.sttsBox.prototype.unpack = function (_0x1f8adc) {
                var _0x24c5ed;
                var _0x11c51f;
                var _0x32b77c;
                _0x32b77c = 0x0;
                for (_0x24c5ed = 0x0; _0x24c5ed < this.sample_counts.length; _0x24c5ed++) {
                    for (_0x11c51f = 0x0; _0x11c51f < this.sample_counts[_0x24c5ed]; _0x11c51f++) {
                        _0x1f8adc[_0x32b77c].dts = 0x0 === _0x32b77c ? 0x0 : _0x1f8adc[_0x32b77c - 0x1].dts + this.sample_deltas[_0x24c5ed];
                        _0x32b77c++;
                    }
                }
            };
            _0x5a8df5.stcoBox.prototype.unpack = function (_0x33668e) {
                var _0x293799;
                for (_0x293799 = 0x0; _0x293799 < this.chunk_offsets.length; _0x293799++) {
                    _0x33668e[_0x293799].offset = this.chunk_offsets[_0x293799];
                }
            };
            _0x5a8df5.stscBox.prototype.unpack = function (_0x274ef5) {
                var _0x12167f;
                var _0x1ba897;
                var _0x38f259;
                var _0x275723;
                var _0x3d7409;
                _0x275723 = 0x0;
                _0x3d7409 = 0x0;
                for (_0x12167f = 0x0; _0x12167f < this.first_chunk.length; _0x12167f++) {
                    for (_0x1ba897 = 0x0; _0x1ba897 < (_0x12167f + 0x1 < this.first_chunk.length ? this.first_chunk[_0x12167f + 0x1] : Infinity); _0x1ba897++) {
                        _0x3d7409++;
                        for (_0x38f259 = 0x0; _0x38f259 < this.samples_per_chunk[_0x12167f]; _0x38f259++) {
                            if (!_0x274ef5[_0x275723]) {
                                return;
                            }
                            _0x274ef5[_0x275723].description_index = this.sample_description_index[_0x12167f];
                            _0x274ef5[_0x275723].chunk_index = _0x3d7409;
                            _0x275723++;
                        }
                    }
                }
            };
            _0x5a8df5.stszBox.prototype.unpack = function (_0x5855a4) {
                var _0x54e518;
                for (_0x54e518 = 0x0; _0x54e518 < this.sample_sizes.length; _0x54e518++) {
                    _0x5855a4[_0x54e518].size = this.sample_sizes[_0x54e518];
                }
            };
            _0x5a8df5.DIFF_BOXES_PROP_NAMES = [
                "boxes",
                "entries",
                "references",
                "subsamples",
                "items",
                "item_infos",
                "extents",
                "associations",
                "subsegments",
                "ranges",
                "seekLists",
                "seekPoints",
                "esd",
                "levels",
            ];
            _0x5a8df5.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [
                "compatible_brands",
                "matrix",
                "opcolor",
                "sample_counts",
                "sample_counts",
                "sample_deltas",
                "first_chunk",
                "samples_per_chunk",
                "sample_sizes",
                "chunk_offsets",
                "sample_offsets",
                "sample_description_index",
                "sample_duration",
            ];
            _0x5a8df5.boxEqualFields = function (_0x4bd21a, _0x2f796b) {
                if (_0x4bd21a && !_0x2f796b) {
                    return false;
                }
                var _0xf072f7;
                for (_0xf072f7 in _0x4bd21a)
                    if (
                        !(
                            _0x5a8df5.DIFF_BOXES_PROP_NAMES.indexOf(_0xf072f7) > -0x1 ||
                            _0x4bd21a[_0xf072f7] instanceof _0x5a8df5.Box ||
                            _0x2f796b[_0xf072f7] instanceof _0x5a8df5.Box ||
                            undefined === _0x4bd21a[_0xf072f7] ||
                            undefined === _0x2f796b[_0xf072f7] ||
                            "function" == typeof _0x4bd21a[_0xf072f7] ||
                            "function" == typeof _0x2f796b[_0xf072f7] ||
                            (_0x4bd21a.subBoxNames && _0x4bd21a.subBoxNames.indexOf(_0xf072f7.slice(0x0, 0x4)) > -0x1) ||
                            (_0x2f796b.subBoxNames && _0x2f796b.subBoxNames.indexOf(_0xf072f7.slice(0x0, 0x4)) > -0x1) ||
                            "data" === _0xf072f7 ||
                            "start" === _0xf072f7 ||
                            "size" === _0xf072f7 ||
                            "creation_time" === _0xf072f7 ||
                            "modification_time" === _0xf072f7 ||
                            _0x5a8df5.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(_0xf072f7) > -0x1 ||
                            _0x4bd21a[_0xf072f7] === _0x2f796b[_0xf072f7]
                        )
                    ) {
                        return false;
                    }
                return true;
            };
            _0x5a8df5.boxEqual = function (_0x300550, _0x1f170c) {
                if (!_0x5a8df5.boxEqualFields(_0x300550, _0x1f170c)) {
                    return false;
                }
                for (var _0x3d5cf2 = 0x0; _0x3d5cf2 < _0x5a8df5.DIFF_BOXES_PROP_NAMES.length; _0x3d5cf2++) {
                    var _0x41a8d5 = _0x5a8df5.DIFF_BOXES_PROP_NAMES[_0x3d5cf2];
                    if (_0x300550[_0x41a8d5] && _0x1f170c[_0x41a8d5] && !_0x5a8df5.boxEqual(_0x300550[_0x41a8d5], _0x1f170c[_0x41a8d5])) {
                        return false;
                    }
                }
                return true;
            };
            var _0x3e64b9 = function () {};
            _0x3e64b9.prototype.parseSample = function (_0xc297f) {
                var _0x42b5e5;
                var _0x41ce44;
                var _0xe5dbf7 = new _0x3934a9(_0xc297f.buffer);
                for (_0x42b5e5 = []; !_0xe5dbf7.isEos(); ) {
                    if ((_0x41ce44 = _0x5a8df5.parseOneBox(_0xe5dbf7, false)).code === 0x1 && "vttc" === _0x41ce44.box.type) {
                        _0x42b5e5.push(_0x41ce44.box);
                    }
                }
                return _0x42b5e5;
            };
            _0x3e64b9.prototype.getText = function (_0x149aeb, _0x3a081a, _0x5edf86) {
                function _0x2fe2c4(_0xe35647, _0x4c5b48, _0x3b23ab) {
                    _0x3b23ab = _0x3b23ab || "0";
                    return (_0xe35647 += "").length >= _0x4c5b48 ? _0xe35647 : new Array(_0x4c5b48 - _0xe35647.length + 0x1).join(_0x3b23ab) + _0xe35647;
                }
                function _0x74d1da(_0x7ba141) {
                    var _0x38b99f = Math.floor(_0x7ba141 / 0xe10);
                    var _0x388995 = Math.floor((_0x7ba141 - 0xe10 * _0x38b99f) / 0x3c);
                    var _0x18fa1e = Math.floor(_0x7ba141 - 0xe10 * _0x38b99f - 0x3c * _0x388995);
                    var _0x36d0cf = Math.floor(0x3e8 * (_0x7ba141 - 0xe10 * _0x38b99f - 0x3c * _0x388995 - _0x18fa1e));
                    return _0x2fe2c4(_0x38b99f, 0x2) + ":" + _0x2fe2c4(_0x388995, 0x2) + ":" + _0x2fe2c4(_0x18fa1e, 0x2) + "." + _0x2fe2c4(_0x36d0cf, 0x3);
                }
                var _0x139818 = this.parseSample(_0x5edf86);
                var _0x2c70a0 = "";
                for (var _0x4c8933 = 0x0; _0x4c8933 < _0x139818.length; _0x4c8933++) {
                    var _0x51af98 = _0x139818[_0x4c8933];
                    _0x2c70a0 += _0x74d1da(_0x149aeb) + " --> " + _0x74d1da(_0x3a081a) + "\r\n";
                    _0x2c70a0 += _0x51af98.payl.text;
                }
                return _0x2c70a0;
            };
            var _0x52fa26 = function () {};
            _0x52fa26.prototype.parseSample = function (_0x3060aa) {
                var _0x98d41f = {
                    resources: [],
                };
                var _0x5268bb;
                var _0x4db4aa = new _0x3934a9(_0x3060aa.data.buffer);
                if (_0x3060aa.subsamples && 0x0 !== _0x3060aa.subsamples.length) {
                    _0x98d41f.documentString = _0x4db4aa.readString(_0x3060aa.subsamples[0x0].size);
                    if (_0x3060aa.subsamples.length > 0x1) {
                        for (_0x5268bb = 0x1; _0x5268bb < _0x3060aa.subsamples.length; _0x5268bb++) {
                            _0x98d41f.resources[_0x5268bb] = _0x4db4aa.readUint8Array(_0x3060aa.subsamples[_0x5268bb].size);
                        }
                    }
                } else {
                    _0x98d41f.documentString = _0x4db4aa.readString(_0x3060aa.data.length);
                }
                if ("undefined" != typeof DOMParser) {
                    _0x98d41f.document = new DOMParser().parseFromString(_0x98d41f.documentString, "application/xml");
                }
                return _0x98d41f;
            };
            var _0x4c060e = function () {};
            _0x4c060e.prototype.parseSample = function (_0x2f2a6b) {
                return new _0x3934a9(_0x2f2a6b.data.buffer).readString(_0x2f2a6b.data.length);
            };
            _0x4c060e.prototype.parseConfig = function (_0x2d66ef) {
                var _0x269701 = new _0x3934a9(_0x2d66ef.buffer);
                _0x269701.readUint32();
                return _0x269701.readCString();
            };
            _0x3644a2.XMLSubtitlein4Parser = _0x52fa26;
            _0x3644a2.Textin4Parser = _0x4c060e;
            var _0x40b724 = function (_0x53acc5) {
                this.stream = _0x53acc5 || new _0x3f29c();
                this.boxes = [];
                this.mdats = [];
                this.moofs = [];
                this.isProgressive = false;
                this.moovStartFound = false;
                this.onMoovStart = null;
                this.moovStartSent = false;
                this.onReady = null;
                this.readySent = false;
                this.onSegment = null;
                this.onSamples = null;
                this.onError = null;
                this.sampleListBuilt = false;
                this.fragmentedTracks = [];
                this.extractedTracks = [];
                this.isFragmentationInitialized = false;
                this.sampleProcessingStarted = false;
                this.nextMoofNumber = 0x0;
                this.itemListBuilt = false;
                this.onSidx = null;
                this.sidxSent = false;
            };
            _0x40b724.prototype.setSegmentOptions = function (_0x2da082, _0x4b761, _0x356c83) {
                var _0x1685cd = this.getTrackById(_0x2da082);
                if (_0x1685cd) {
                    var _0x240ef3 = {};
                    this.fragmentedTracks.push(_0x240ef3);
                    _0x240ef3.id = _0x2da082;
                    _0x240ef3.user = _0x4b761;
                    _0x240ef3.trak = _0x1685cd;
                    _0x1685cd.nextSample = 0x0;
                    _0x240ef3.segmentStream = null;
                    _0x240ef3.nb_samples = 0x3e8;
                    _0x240ef3.rapAlignement = true;
                    if (_0x356c83) {
                        if (_0x356c83.nbSamples) {
                            _0x240ef3.nb_samples = _0x356c83.nbSamples;
                        }
                        if (_0x356c83.rapAlignement) {
                            _0x240ef3.rapAlignement = _0x356c83.rapAlignement;
                        }
                    }
                }
            };
            _0x40b724.prototype.unsetSegmentOptions = function (_0x53b08a) {
                var _0x5aa29b = -0x1;
                for (var _0x4ba360 = 0x0; _0x4ba360 < this.fragmentedTracks.length; _0x4ba360++) {
                    if (this.fragmentedTracks[_0x4ba360].id == _0x53b08a) {
                        _0x5aa29b = _0x4ba360;
                    }
                }
                if (_0x5aa29b > -0x1) {
                    this.fragmentedTracks.splice(_0x5aa29b, 0x1);
                }
            };
            _0x40b724.prototype.setExtractionOptions = function (_0x14ed53, _0x4737df, _0x45d2d0) {
                var _0x333a48 = this.getTrackById(_0x14ed53);
                if (_0x333a48) {
                    var _0x466a94 = {};
                    this.extractedTracks.push(_0x466a94);
                    _0x466a94.id = _0x14ed53;
                    _0x466a94.user = _0x4737df;
                    _0x466a94.trak = _0x333a48;
                    _0x333a48.nextSample = 0x0;
                    _0x466a94.nb_samples = 0x3e8;
                    _0x466a94.samples = [];
                    if (_0x45d2d0 && _0x45d2d0.nbSamples) {
                        _0x466a94.nb_samples = _0x45d2d0.nbSamples;
                    }
                }
            };
            _0x40b724.prototype.unsetExtractionOptions = function (_0x6ada86) {
                var _0x507155 = -0x1;
                for (var _0x590557 = 0x0; _0x590557 < this.extractedTracks.length; _0x590557++) {
                    if (this.extractedTracks[_0x590557].id == _0x6ada86) {
                        _0x507155 = _0x590557;
                    }
                }
                if (_0x507155 > -0x1) {
                    this.extractedTracks.splice(_0x507155, 0x1);
                }
            };
            _0x40b724.prototype.parse = function () {
                var _0x18befd;
                var _0x52a750;
                if (!this.restoreParsePosition || this.restoreParsePosition()) {
                    for (;;) {
                        if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                            if (this.processIncompleteMdat()) {
                                continue;
                            }
                            return;
                        }
                        if (this.saveParsePosition) {
                            this.saveParsePosition();
                        }
                        if ((_0x18befd = _0x5a8df5.parseOneBox(this.stream, false)).code === 0x0) {
                            if (this.processIncompleteBox) {
                                if (this.processIncompleteBox(_0x18befd)) {
                                    continue;
                                }
                                return;
                            }
                            return;
                        }
                        var _0x4d6f47;
                        _0x4d6f47 = "uuid" !== (_0x52a750 = _0x18befd.box).type ? _0x52a750.type : _0x52a750.uuid;
                        this.boxes.push(_0x52a750);
                        switch (_0x4d6f47) {
                            case "mdat":
                                this.mdats.push(_0x52a750);
                                break;
                            case "moof":
                                this.moofs.push(_0x52a750);
                                break;
                            case "moov":
                                this.moovStartFound = true;
                                if (0x0 === this.mdats.length) {
                                    this.isProgressive = true;
                                }
                            default:
                                if (undefined !== this[_0x4d6f47]) {
                                    _0x5a6c18.warn("ISOFile", "Duplicate Box of type: " + _0x4d6f47 + ", overriding previous occurrence");
                                }
                                this[_0x4d6f47] = _0x52a750;
                        }
                        if (this.updateUsedBytes) {
                            this.updateUsedBytes(_0x52a750, _0x18befd);
                        }
                    }
                }
            };
            _0x40b724.prototype.checkBuffer = function (_0x496936) {
                if (null == _0x496936) {
                    throw "Buffer must be defined and non empty";
                }
                if (undefined === _0x496936.fileStart) {
                    throw "Buffer must have a fileStart property";
                }
                return 0x0 === _0x496936.byteLength
                    ? (_0x5a6c18.warn("ISOFile", "Ignoring empty buffer (fileStart: " + _0x496936.fileStart + ")"), this.stream.logBufferLevel(), false)
                    : (_0x5a6c18.info("ISOFile", "Processing buffer (fileStart: " + _0x496936.fileStart + ")"),
                      (_0x496936.usedBytes = 0x0),
                      this.stream.insertBuffer(_0x496936),
                      this.stream.logBufferLevel(),
                      !!this.stream.initialized() || (_0x5a6c18.warn("ISOFile", "Not ready to start parsing"), false));
            };
            _0x40b724.prototype.appendBuffer = function (_0x3cc79b, _0x4c5328) {
                var _0x58fba6;
                if (this.checkBuffer(_0x3cc79b)) {
                    this.parse();
                    if (this.moovStartFound && !this.moovStartSent) {
                        this.moovStartSent = true;
                        if (this.onMoovStart) {
                            this.onMoovStart();
                        }
                    }
                    if (this.moov) {
                        if (!this.sampleListBuilt) {
                            this.buildSampleLists();
                            this.sampleListBuilt = true;
                        }
                        this.updateSampleLists();
                        if (this.onReady && !this.readySent) {
                            this.readySent = true;
                            this.onReady(this.getInfo());
                        }
                        this.processSamples(_0x4c5328);
                        if (this.nextSeekPosition) {
                            _0x58fba6 = this.nextSeekPosition;
                            this.nextSeekPosition = undefined;
                        } else {
                            _0x58fba6 = this.nextParsePosition;
                        }
                        if (this.stream.getEndFilePositionAfter) {
                            _0x58fba6 = this.stream.getEndFilePositionAfter(_0x58fba6);
                        }
                    } else {
                        _0x58fba6 = this.nextParsePosition ? this.nextParsePosition : 0x0;
                    }
                    if (this.sidx && this.onSidx && !this.sidxSent) {
                        this.onSidx(this.sidx);
                        this.sidxSent = true;
                    }
                    if (this.meta) {
                        if (this.flattenItemInfo && !this.itemListBuilt) {
                            this.flattenItemInfo();
                            this.itemListBuilt = true;
                        }
                        if (this.processItems) {
                            this.processItems(this.onItem);
                        }
                    }
                    if (this.stream.cleanBuffers) {
                        _0x5a6c18.info(
                            "ISOFile",
                            "Done processing buffer (fileStart: " +
                                _0x3cc79b.fileStart +
                                ") - next buffer to fetch should have a fileStart position of " +
                                _0x58fba6
                        );
                        this.stream.logBufferLevel();
                        this.stream.cleanBuffers();
                        this.stream.logBufferLevel(true);
                        _0x5a6c18.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
                    }
                    return _0x58fba6;
                }
            };
            _0x40b724.prototype.getInfo = function () {
                var _0x49e910;
                var _0x46c1b3;
                var _0x50f7e0;
                var _0x56bba1;
                var _0x4efccc;
                var _0x5a8e19;
                var _0x4bdb50 = {};
                var _0x363d91 = new Date("1904-01-01T00:00:00Z").getTime();
                if (this.moov) {
                    _0x4bdb50.hasMoov = true;
                    _0x4bdb50.duration = this.moov.mvhd.duration;
                    _0x4bdb50.timescale = this.moov.mvhd.timescale;
                    _0x4bdb50.isFragmented = null != this.moov.mvex;
                    if (_0x4bdb50.isFragmented && this.moov.mvex.mehd) {
                        _0x4bdb50.fragment_duration = this.moov.mvex.mehd.fragment_duration;
                    }
                    _0x4bdb50.isProgressive = this.isProgressive;
                    _0x4bdb50.hasIOD = null != this.moov.iods;
                    _0x4bdb50.brands = [];
                    _0x4bdb50.brands.push(this.ftyp.major_brand);
                    _0x4bdb50.brands = _0x4bdb50.brands.concat(this.ftyp.compatible_brands);
                    _0x4bdb50.created = new Date(_0x363d91 + 0x3e8 * this.moov.mvhd.creation_time);
                    _0x4bdb50.modified = new Date(_0x363d91 + 0x3e8 * this.moov.mvhd.modification_time);
                    _0x4bdb50.tracks = [];
                    _0x4bdb50.audioTracks = [];
                    _0x4bdb50.videoTracks = [];
                    _0x4bdb50.subtitleTracks = [];
                    _0x4bdb50.metadataTracks = [];
                    _0x4bdb50.hintTracks = [];
                    _0x4bdb50.otherTracks = [];
                    for (_0x49e910 = 0x0; _0x49e910 < this.moov.traks.length; _0x49e910++) {
                        _0x5a8e19 = (_0x50f7e0 = this.moov.traks[_0x49e910]).mdia.minf.stbl.stsd.entries[0x0];
                        _0x56bba1 = {};
                        _0x4bdb50.tracks.push(_0x56bba1);
                        _0x56bba1.id = _0x50f7e0.tkhd.track_id;
                        _0x56bba1.name = _0x50f7e0.mdia.hdlr.name;
                        _0x56bba1.references = [];
                        if (_0x50f7e0.tref) {
                            for (_0x46c1b3 = 0x0; _0x46c1b3 < _0x50f7e0.tref.boxes.length; _0x46c1b3++) {
                                _0x4efccc = {};
                                _0x56bba1.references.push(_0x4efccc);
                                _0x4efccc.type = _0x50f7e0.tref.boxes[_0x46c1b3].type;
                                _0x4efccc.track_ids = _0x50f7e0.tref.boxes[_0x46c1b3].track_ids;
                            }
                        }
                        var _0x5d51b3 = {
                            schemeURI: "",
                            value: "",
                        };
                        if (_0x50f7e0.edts) {
                            _0x56bba1.edits = _0x50f7e0.edts.elst.entries;
                        }
                        _0x56bba1.created = new Date(_0x363d91 + 0x3e8 * _0x50f7e0.tkhd.creation_time);
                        _0x56bba1.modified = new Date(_0x363d91 + 0x3e8 * _0x50f7e0.tkhd.modification_time);
                        _0x56bba1.movie_duration = _0x50f7e0.tkhd.duration;
                        _0x56bba1.movie_timescale = _0x4bdb50.timescale;
                        _0x56bba1.layer = _0x50f7e0.tkhd.layer;
                        _0x56bba1.alternate_group = _0x50f7e0.tkhd.alternate_group;
                        _0x56bba1.volume = _0x50f7e0.tkhd.volume;
                        _0x56bba1.matrix = _0x50f7e0.tkhd.matrix;
                        _0x56bba1.track_width = _0x50f7e0.tkhd.width / 0x10000;
                        _0x56bba1.track_height = _0x50f7e0.tkhd.height / 0x10000;
                        _0x56bba1.timescale = _0x50f7e0.mdia.mdhd.timescale;
                        _0x56bba1.cts_shift = _0x50f7e0.mdia.minf.stbl.cslg;
                        _0x56bba1.duration = _0x50f7e0.mdia.mdhd.duration;
                        _0x56bba1.samples_duration = _0x50f7e0.samples_duration;
                        _0x56bba1.codec = _0x5a8e19.getCodec();
                        _0x56bba1.kind = _0x50f7e0.udta && _0x50f7e0.udta.kinds.length ? _0x50f7e0.udta.kinds[0x0] : _0x5d51b3;
                        _0x56bba1.language = _0x50f7e0.mdia.elng ? _0x50f7e0.mdia.elng.extended_language : _0x50f7e0.mdia.mdhd.languageString;
                        _0x56bba1.nb_samples = _0x50f7e0.samples.length;
                        _0x56bba1.size = _0x50f7e0.samples_size;
                        _0x56bba1.bitrate = (0x8 * _0x56bba1.size * _0x56bba1.timescale) / _0x56bba1.samples_duration;
                        if (_0x5a8e19.isAudio()) {
                            _0x56bba1.type = "audio";
                            _0x4bdb50.audioTracks.push(_0x56bba1);
                            _0x56bba1.audio = {};
                            _0x56bba1.audio.sample_rate = _0x5a8e19.getSampleRate();
                            _0x56bba1.audio.channel_count = _0x5a8e19.getChannelCount();
                            _0x56bba1.audio.sample_size = _0x5a8e19.getSampleSize();
                        } else if (_0x5a8e19.isVideo()) {
                            _0x56bba1.type = "video";
                            _0x4bdb50.videoTracks.push(_0x56bba1);
                            _0x56bba1.video = {};
                            _0x56bba1.video.width = _0x5a8e19.getWidth();
                            _0x56bba1.video.height = _0x5a8e19.getHeight();
                        } else if (_0x5a8e19.isSubtitle()) {
                            _0x56bba1.type = "subtitles";
                            _0x4bdb50.subtitleTracks.push(_0x56bba1);
                        } else if (_0x5a8e19.isHint()) {
                            _0x56bba1.type = "metadata";
                            _0x4bdb50.hintTracks.push(_0x56bba1);
                        } else if (_0x5a8e19.isMetadata()) {
                            _0x56bba1.type = "metadata";
                            _0x4bdb50.metadataTracks.push(_0x56bba1);
                        } else {
                            _0x56bba1.type = "metadata";
                            _0x4bdb50.otherTracks.push(_0x56bba1);
                        }
                    }
                } else {
                    _0x4bdb50.hasMoov = false;
                }
                _0x4bdb50.mime = "";
                if (_0x4bdb50.hasMoov && _0x4bdb50.tracks) {
                    if (_0x4bdb50.videoTracks && _0x4bdb50.videoTracks.length > 0x0) {
                        _0x4bdb50.mime += 'video/mp4; codecs="';
                    } else if (_0x4bdb50.audioTracks && _0x4bdb50.audioTracks.length > 0x0) {
                        _0x4bdb50.mime += 'audio/mp4; codecs="';
                    } else {
                        _0x4bdb50.mime += 'application/mp4; codecs="';
                    }
                    for (_0x49e910 = 0x0; _0x49e910 < _0x4bdb50.tracks.length; _0x49e910++) {
                        if (0x0 !== _0x49e910) {
                            _0x4bdb50.mime += ",";
                        }
                        _0x4bdb50.mime += _0x4bdb50.tracks[_0x49e910].codec;
                    }
                    _0x4bdb50.mime += '"; profiles="';
                    _0x4bdb50.mime += this.ftyp.compatible_brands.join();
                    _0x4bdb50.mime += '"';
                }
                return _0x4bdb50;
            };
            _0x40b724.prototype.processSamples = function (_0x4166d3) {
                var _0x347a38;
                var _0x5ef856;
                if (this.sampleProcessingStarted) {
                    if (this.isFragmentationInitialized && null !== this.onSegment) {
                        for (_0x347a38 = 0x0; _0x347a38 < this.fragmentedTracks.length; _0x347a38++) {
                            var _0x599022 = this.fragmentedTracks[_0x347a38];
                            for (_0x5ef856 = _0x599022.trak; _0x5ef856.nextSample < _0x5ef856.samples.length && this.sampleProcessingStarted; ) {
                                _0x5a6c18.debug("ISOFile", "Creating media fragment on track #" + _0x599022.id + " for sample " + _0x5ef856.nextSample);
                                var _0x14c804 = this.createFragment(_0x599022.id, _0x5ef856.nextSample, _0x599022.segmentStream);
                                if (!_0x14c804) {
                                    break;
                                }
                                _0x599022.segmentStream = _0x14c804;
                                _0x5ef856.nextSample++;
                                if (
                                    (_0x5ef856.nextSample % _0x599022.nb_samples == 0x0 || _0x4166d3 || _0x5ef856.nextSample >= _0x5ef856.samples.length) &&
                                    (_0x5a6c18.info(
                                        "ISOFile",
                                        "Sending fragmented data on track #" +
                                            _0x599022.id +
                                            " for samples [" +
                                            Math.max(0x0, _0x5ef856.nextSample - _0x599022.nb_samples) +
                                            "," +
                                            (_0x5ef856.nextSample - 0x1) +
                                            "]"
                                    ),
                                    _0x5a6c18.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()),
                                    this.onSegment &&
                                        this.onSegment(
                                            _0x599022.id,
                                            _0x599022.user,
                                            _0x599022.segmentStream.buffer,
                                            _0x5ef856.nextSample,
                                            _0x4166d3 || _0x5ef856.nextSample >= _0x5ef856.samples.length
                                        ),
                                    (_0x599022.segmentStream = null),
                                    _0x599022 !== this.fragmentedTracks[_0x347a38])
                                ) {
                                    break;
                                }
                            }
                        }
                    }
                    if (null !== this.onSamples) {
                        for (_0x347a38 = 0x0; _0x347a38 < this.extractedTracks.length; _0x347a38++) {
                            var _0x10ebd7 = this.extractedTracks[_0x347a38];
                            for (_0x5ef856 = _0x10ebd7.trak; _0x5ef856.nextSample < _0x5ef856.samples.length && this.sampleProcessingStarted; ) {
                                _0x5a6c18.debug("ISOFile", "Exporting on track #" + _0x10ebd7.id + " sample #" + _0x5ef856.nextSample);
                                var _0xdcaa26 = this.getSample(_0x5ef856, _0x5ef856.nextSample);
                                if (!_0xdcaa26) {
                                    break;
                                }
                                _0x5ef856.nextSample++;
                                _0x10ebd7.samples.push(_0xdcaa26);
                                if (
                                    (_0x5ef856.nextSample % _0x10ebd7.nb_samples == 0x0 || _0x5ef856.nextSample >= _0x5ef856.samples.length) &&
                                    (_0x5a6c18.debug("ISOFile", "Sending samples on track #" + _0x10ebd7.id + " for sample " + _0x5ef856.nextSample),
                                    this.onSamples && this.onSamples(_0x10ebd7.id, _0x10ebd7.user, _0x10ebd7.samples),
                                    (_0x10ebd7.samples = []),
                                    _0x10ebd7 !== this.extractedTracks[_0x347a38])
                                ) {
                                    break;
                                }
                            }
                        }
                    }
                }
            };
            _0x40b724.prototype.getBox = function (_0x144b5e) {
                var _0x5534fb = this.getBoxes(_0x144b5e, true);
                return _0x5534fb.length ? _0x5534fb[0x0] : null;
            };
            _0x40b724.prototype.getBoxes = function (_0x30c02b, _0x1349be) {
                var _0xc383be = [];
                _0x40b724._sweep.call(this, _0x30c02b, _0xc383be, _0x1349be);
                return _0xc383be;
            };
            _0x40b724._sweep = function (_0x182d88, _0x3a6271, _0x4818a4) {
                if (this.type && this.type == _0x182d88) {
                    _0x3a6271.push(this);
                }
                for (var _0xfa7712 in this.boxes) {
                    if (_0x3a6271.length && _0x4818a4) {
                        return;
                    }
                    _0x40b724._sweep.call(this.boxes[_0xfa7712], _0x182d88, _0x3a6271, _0x4818a4);
                }
            };
            _0x40b724.prototype.getTrackSamplesInfo = function (_0x38d887) {
                var _0x7ec120 = this.getTrackById(_0x38d887);
                return _0x7ec120 ? _0x7ec120.samples : undefined;
            };
            _0x40b724.prototype.getTrackSample = function (_0x14a773, _0x1fee6e) {
                var _0x138d21 = this.getTrackById(_0x14a773);
                return this.getSample(_0x138d21, _0x1fee6e);
            };
            _0x40b724.prototype.releaseUsedSamples = function (_0x3758ee, _0x6eacf8) {
                var _0xcfadc9 = 0x0;
                var _0xf0efeb = this.getTrackById(_0x3758ee);
                if (!_0xf0efeb.lastValidSample) {
                    _0xf0efeb.lastValidSample = 0x0;
                }
                for (var _0xce0f12 = _0xf0efeb.lastValidSample; _0xce0f12 < _0x6eacf8; _0xce0f12++) {
                    _0xcfadc9 += this.releaseSample(_0xf0efeb, _0xce0f12);
                }
                _0x5a6c18.info(
                    "ISOFile",
                    "Track #" +
                        _0x3758ee +
                        " released samples up to " +
                        _0x6eacf8 +
                        " (released size: " +
                        _0xcfadc9 +
                        ", remaining: " +
                        this.samplesDataSize +
                        ")"
                );
                _0xf0efeb.lastValidSample = _0x6eacf8;
            };
            _0x40b724.prototype.start = function () {
                this.sampleProcessingStarted = true;
                this.processSamples(false);
            };
            _0x40b724.prototype.stop = function () {
                this.sampleProcessingStarted = false;
            };
            _0x40b724.prototype.flush = function () {
                _0x5a6c18.info("ISOFile", "Flushing remaining samples");
                this.updateSampleLists();
                this.processSamples(true);
                this.stream.cleanBuffers();
                this.stream.logBufferLevel(true);
            };
            _0x40b724.prototype.seekTrack = function (_0x218ed9, _0x5ddd35, _0x308ddf) {
                var _0x2b1312;
                var _0x408e48;
                var _0xfcda48;
                var _0x22ac9f;
                var _0x5dfceb = 0x0;
                var _0x993dca = 0x0;
                var _0x1848cd = {
                    offset: 0x0,
                    time: 0x0,
                };
                if (0x0 === _0x308ddf.samples.length) {
                    _0x5a6c18.info("ISOFile", "No sample in track, cannot seek! Using time " + _0x5a6c18.getDurationString(0x0, 0x1) + " and offset: 0");
                    return _0x1848cd;
                }
                for (_0x2b1312 = 0x0; _0x2b1312 < _0x308ddf.samples.length; _0x2b1312++) {
                    _0x408e48 = _0x308ddf.samples[_0x2b1312];
                    if (0x0 === _0x2b1312) {
                        _0x993dca = 0x0;
                        _0x22ac9f = _0x408e48.timescale;
                    } else {
                        if (_0x408e48.cts > _0x218ed9 * _0x408e48.timescale) {
                            _0x993dca = _0x2b1312 - 0x1;
                            break;
                        }
                    }
                    if (_0x5ddd35 && _0x408e48.is_sync) {
                        _0x5dfceb = _0x2b1312;
                    }
                }
                if (_0x5ddd35) {
                    _0x993dca = _0x5dfceb;
                }
                _0x218ed9 = _0x308ddf.samples[_0x993dca].cts;
                for (
                    _0x308ddf.nextSample = _0x993dca;
                    _0x308ddf.samples[_0x993dca].alreadyRead === _0x308ddf.samples[_0x993dca].size && _0x308ddf.samples[_0x993dca + 0x1];

                ) {
                    _0x993dca++;
                }
                _0xfcda48 = _0x308ddf.samples[_0x993dca].offset + _0x308ddf.samples[_0x993dca].alreadyRead;
                _0x5a6c18.info(
                    "ISOFile",
                    "Seeking to " +
                        (_0x5ddd35 ? "RAP" : "") +
                        " sample #" +
                        _0x308ddf.nextSample +
                        " on track " +
                        _0x308ddf.tkhd.track_id +
                        ", time " +
                        _0x5a6c18.getDurationString(_0x218ed9, _0x22ac9f) +
                        " and offset: " +
                        _0xfcda48
                );
                return {
                    offset: _0xfcda48,
                    time: _0x218ed9 / _0x22ac9f,
                };
            };
            _0x40b724.prototype.seek = function (_0x5fc44a, _0x483272) {
                var _0x155da9 = {
                    offset: Infinity,
                    time: Infinity,
                };
                var _0x1f0a36;
                var _0x5ef0b7;
                var _0x1f3a8d;
                var _0x65badd = this.moov;
                var _0x1d57b5 = _0x155da9;
                if (this.moov) {
                    for (_0x1f3a8d = 0x0; _0x1f3a8d < _0x65badd.traks.length; _0x1f3a8d++) {
                        _0x1f0a36 = _0x65badd.traks[_0x1f3a8d];
                        if ((_0x5ef0b7 = this.seekTrack(_0x5fc44a, _0x483272, _0x1f0a36)).offset < _0x1d57b5.offset) {
                            _0x1d57b5.offset = _0x5ef0b7.offset;
                        }
                        if (_0x5ef0b7.time < _0x1d57b5.time) {
                            _0x1d57b5.time = _0x5ef0b7.time;
                        }
                    }
                    var _0x1d9137 = {
                        offset: this.nextParsePosition,
                        time: 0x0,
                    };
                    _0x5a6c18.info(
                        "ISOFile",
                        "Seeking at time " +
                            _0x5a6c18.getDurationString(_0x1d57b5.time, 0x1) +
                            " needs a buffer with a fileStart position of " +
                            _0x1d57b5.offset
                    );
                    if (_0x1d57b5.offset === Infinity) {
                        _0x1d57b5 = _0x1d9137;
                    } else {
                        _0x1d57b5.offset = this.stream.getEndFilePositionAfter(_0x1d57b5.offset);
                    }
                    _0x5a6c18.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + _0x1d57b5.offset);
                    return _0x1d57b5;
                }
                throw "Cannot seek: moov not received!";
            };
            _0x40b724.prototype.equal = function (_0x1ffd63) {
                for (var _0x8c06e8 = 0x0; _0x8c06e8 < this.boxes.length && _0x8c06e8 < _0x1ffd63.boxes.length; ) {
                    var _0x44f25f = this.boxes[_0x8c06e8];
                    var _0x5326c3 = _0x1ffd63.boxes[_0x8c06e8];
                    if (!_0x5a8df5.boxEqual(_0x44f25f, _0x5326c3)) {
                        return false;
                    }
                    _0x8c06e8++;
                }
                return true;
            };
            _0x3644a2.ISOFile = _0x40b724;
            _0x40b724.prototype.lastBoxStartPosition = 0x0;
            _0x40b724.prototype.parsingMdat = null;
            _0x40b724.prototype.nextParsePosition = 0x0;
            _0x40b724.prototype.discardMdatData = false;
            _0x40b724.prototype.processIncompleteBox = function (_0x339905) {
                var _0xc90202;
                return "mdat" === _0x339905.type
                    ? ((_0xc90202 = new _0x5a8df5[_0x339905.type + "Box"](_0x339905.size)),
                      (this.parsingMdat = _0xc90202),
                      this.boxes.push(_0xc90202),
                      this.mdats.push(_0xc90202),
                      (_0xc90202.start = _0x339905.start),
                      (_0xc90202.hdr_size = _0x339905.hdr_size),
                      this.stream.addUsedBytes(_0xc90202.hdr_size),
                      (this.lastBoxStartPosition = _0xc90202.start + _0xc90202.size),
                      this.stream.seek(_0xc90202.start + _0xc90202.size, false, this.discardMdatData)
                          ? ((this.parsingMdat = null), true)
                          : (this.moovStartFound
                                ? (this.nextParsePosition = this.stream.findEndContiguousBuf())
                                : (this.nextParsePosition = _0xc90202.start + _0xc90202.size),
                            false))
                    : ("moov" === _0x339905.type && ((this.moovStartFound = true), 0x0 === this.mdats.length && (this.isProgressive = true)),
                      this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()
                          ? ((this.nextParsePosition = this.stream.getEndPosition()), true)
                          : (_0x339905.type
                                ? this.moovStartFound
                                    ? (this.nextParsePosition = this.stream.getEndPosition())
                                    : (this.nextParsePosition = this.stream.getPosition() + _0x339905.size)
                                : (this.nextParsePosition = this.stream.getEndPosition()),
                            false));
            };
            _0x40b724.prototype.hasIncompleteMdat = function () {
                return null !== this.parsingMdat;
            };
            _0x40b724.prototype.processIncompleteMdat = function () {
                var _0xab7d32;
                _0xab7d32 = this.parsingMdat;
                return this.stream.seek(_0xab7d32.start + _0xab7d32.size, false, this.discardMdatData)
                    ? (_0x5a6c18.debug("ISOFile", "Found 'mdat' end in buffered data"), (this.parsingMdat = null), true)
                    : ((this.nextParsePosition = this.stream.findEndContiguousBuf()), false);
            };
            _0x40b724.prototype.restoreParsePosition = function () {
                return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
            };
            _0x40b724.prototype.saveParsePosition = function () {
                this.lastBoxStartPosition = this.stream.getPosition();
            };
            _0x40b724.prototype.updateUsedBytes = function (_0x1d7638, _0x38e65b) {
                if (this.stream.addUsedBytes) {
                    if ("mdat" === _0x1d7638.type) {
                        this.stream.addUsedBytes(_0x1d7638.hdr_size);
                        if (this.discardMdatData) {
                            this.stream.addUsedBytes(_0x1d7638.size - _0x1d7638.hdr_size);
                        }
                    } else {
                        this.stream.addUsedBytes(_0x1d7638.size);
                    }
                }
            };
            _0x40b724.prototype.add = _0x5a8df5.Box.prototype.add;
            _0x40b724.prototype.addBox = _0x5a8df5.Box.prototype.addBox;
            _0x40b724.prototype.init = function (_0x1b29dd) {
                var _0x5b31c2 = _0x1b29dd || {};
                this.add("ftyp")
                    .set("major_brand", (_0x5b31c2.brands && _0x5b31c2.brands[0x0]) || "iso4")
                    .set("minor_version", 0x0)
                    .set("compatible_brands", _0x5b31c2.brands || ["iso4"]);
                var _0x31b9b5 = this.add("moov");
                _0x31b9b5
                    .add("mvhd")
                    .set("timescale", _0x5b31c2.timescale || 0x258)
                    .set("rate", _0x5b31c2.rate || 0x10000)
                    .set("creation_time", 0x0)
                    .set("modification_time", 0x0)
                    .set("duration", _0x5b31c2.duration || 0x0)
                    .set("volume", _0x5b31c2.width ? 0x0 : 0x100)
                    .set("matrix", [0x10000, 0x0, 0x0, 0x0, 0x10000, 0x0, 0x0, 0x0, 0x40000000])
                    .set("next_track_id", 0x1);
                _0x31b9b5.add("mvex");
                return this;
            };
            _0x40b724.prototype.addTrack = function (_0x56d9bc) {
                if (!this.moov) {
                    this.init(_0x56d9bc);
                }
                var _0x53feff = _0x56d9bc || {};
                _0x53feff.width = _0x53feff.width || 0x140;
                _0x53feff.height = _0x53feff.height || 0x140;
                _0x53feff.id = _0x53feff.id || this.moov.mvhd.next_track_id;
                _0x53feff.type = _0x53feff.type || "avc1";
                var _0x43dc49 = this.moov.add("trak");
                this.moov.mvhd.next_track_id = _0x53feff.id + 0x1;
                _0x43dc49
                    .add("tkhd")
                    .set("flags", _0x5a8df5.TKHD_FLAG_ENABLED | _0x5a8df5.TKHD_FLAG_IN_MOVIE | _0x5a8df5.TKHD_FLAG_IN_PREVIEW)
                    .set("creation_time", 0x0)
                    .set("modification_time", 0x0)
                    .set("track_id", _0x53feff.id)
                    .set("duration", _0x53feff.duration || 0x0)
                    .set("layer", _0x53feff.layer || 0x0)
                    .set("alternate_group", 0x0)
                    .set("volume", 0x1)
                    .set("matrix", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
                    .set("width", _0x53feff.width << 0x10)
                    .set("height", _0x53feff.height << 0x10);
                var _0x303f48 = _0x43dc49.add("mdia");
                _0x303f48
                    .add("mdhd")
                    .set("creation_time", 0x0)
                    .set("modification_time", 0x0)
                    .set("timescale", _0x53feff.timescale || 0x1)
                    .set("duration", _0x53feff.media_duration || 0x0)
                    .set("language", _0x53feff.language || "und");
                _0x303f48
                    .add("hdlr")
                    .set("handler", _0x53feff.hdlr || "vide")
                    .set("name", _0x53feff.name || "Track created with MP4Box.js");
                _0x303f48.add("elng").set("extended_language", _0x53feff.language || "fr-FR");
                var _0x329c59 = _0x303f48.add("minf");
                if (undefined !== _0x5a8df5[_0x53feff.type + "SampleEntry"]) {
                    var _0x3ee715 = new _0x5a8df5[_0x53feff.type + "SampleEntry"]();
                    _0x3ee715.data_reference_index = 0x1;
                    var _0x5a10c1 = "";
                    for (var _0x249726 in _0x5a8df5.sampleEntryCodes) {
                        var _0x18485f = _0x5a8df5.sampleEntryCodes[_0x249726];
                        for (var _0x4f5039 = 0x0; _0x4f5039 < _0x18485f.length; _0x4f5039++) {
                            if (_0x18485f.indexOf(_0x53feff.type) > -0x1) {
                                _0x5a10c1 = _0x249726;
                                break;
                            }
                        }
                    }
                    switch (_0x5a10c1) {
                        case "Visual":
                            _0x329c59.add("vmhd").set("graphicsmode", 0x0).set("opcolor", [0x0, 0x0, 0x0]);
                            _0x3ee715
                                .set("width", _0x53feff.width)
                                .set("height", _0x53feff.height)
                                .set("horizresolution", 4718592)
                                .set("vertresolution", 4718592)
                                .set("frame_count", 0x1)
                                .set("compressorname", _0x53feff.type + " Compressor")
                                .set("depth", 0x18);
                            if (_0x53feff.avcDecoderConfigRecord) {
                                var _0x23e27c = new _0x5a8df5.avcCBox();
                                var _0x1ca84d = new _0x3934a9(_0x53feff.avcDecoderConfigRecord);
                                _0x23e27c.parse(_0x1ca84d);
                                _0x3ee715.addBox(_0x23e27c);
                            }
                            break;
                        case "Audio":
                            _0x329c59.add("smhd").set("balance", _0x53feff.balance || 0x0);
                            _0x3ee715
                                .set("channel_count", _0x53feff.channel_count || 0x2)
                                .set("samplesize", _0x53feff.samplesize || 0x10)
                                .set("samplerate", _0x53feff.samplerate || 0x10000);
                            break;
                        case "Hint":
                            _0x329c59.add("hmhd");
                            break;
                        case "Subtitle":
                            _0x329c59.add("sthd");
                            if ("stpp" === _0x53feff.type) {
                                _0x3ee715
                                    .set("namespace", _0x53feff.namespace || "nonamespace")
                                    .set("schema_location", _0x53feff.schema_location || "")
                                    .set("auxiliary_mime_types", _0x53feff.auxiliary_mime_types || "");
                            }
                            break;
                        default:
                            _0x329c59.add("nmhd");
                    }
                    if (_0x53feff.description) {
                        _0x3ee715.addBox(_0x53feff.description);
                    }
                    if (_0x53feff.description_boxes) {
                        _0x53feff.description_boxes.forEach(function (_0x305427) {
                            _0x3ee715.addBox(_0x305427);
                        });
                    }
                    _0x329c59.add("dinf").add("dref").addEntry(new _0x5a8df5["url Box"]().set("flags", 0x1));
                    var _0x10731f = _0x329c59.add("stbl");
                    _0x10731f.add("stsd").addEntry(_0x3ee715);
                    _0x10731f.add("stts").set("sample_counts", []).set("sample_deltas", []);
                    _0x10731f.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []);
                    _0x10731f.add("stco").set("chunk_offsets", []);
                    _0x10731f.add("stsz").set("sample_sizes", []);
                    this.moov.mvex
                        .add("trex")
                        .set("track_id", _0x53feff.id)
                        .set("default_sample_description_index", _0x53feff.default_sample_description_index || 0x1)
                        .set("default_sample_duration", _0x53feff.default_sample_duration || 0x0)
                        .set("default_sample_size", _0x53feff.default_sample_size || 0x0)
                        .set("default_sample_flags", _0x53feff.default_sample_flags || 0x0);
                    this.buildTrakSampleLists(_0x43dc49);
                    return _0x53feff.id;
                }
            };
            _0x5a8df5.Box.prototype.computeSize = function (_0x304b98) {
                var _0xa8bef3 = _0x304b98 || new _0x36e1b4();
                _0xa8bef3.endianness = _0x36e1b4.BIG_ENDIAN;
                this.write(_0xa8bef3);
            };
            _0x40b724.prototype.addSample = function (_0x41162e, _0x3251ce, _0x1c9349) {
                var _0x386062 = _0x1c9349 || {};
                var _0x50a49c = {};
                var _0xb8e56e = this.getTrackById(_0x41162e);
                if (null !== _0xb8e56e) {
                    _0x50a49c.number = _0xb8e56e.samples.length;
                    _0x50a49c.track_id = _0xb8e56e.tkhd.track_id;
                    _0x50a49c.timescale = _0xb8e56e.mdia.mdhd.timescale;
                    _0x50a49c.description_index = _0x386062.sample_description_index ? _0x386062.sample_description_index - 0x1 : 0x0;
                    _0x50a49c.description = _0xb8e56e.mdia.minf.stbl.stsd.entries[_0x50a49c.description_index];
                    _0x50a49c.data = _0x3251ce;
                    _0x50a49c.size = _0x3251ce.byteLength;
                    _0x50a49c.alreadyRead = _0x50a49c.size;
                    _0x50a49c.duration = _0x386062.duration || 0x1;
                    _0x50a49c.cts = _0x386062.cts || 0x0;
                    _0x50a49c.dts = _0x386062.dts || 0x0;
                    _0x50a49c.is_sync = _0x386062.is_sync || false;
                    _0x50a49c.is_leading = _0x386062.is_leading || 0x0;
                    _0x50a49c.depends_on = _0x386062.depends_on || 0x0;
                    _0x50a49c.is_depended_on = _0x386062.is_depended_on || 0x0;
                    _0x50a49c.has_redundancy = _0x386062.has_redundancy || 0x0;
                    _0x50a49c.degradation_priority = _0x386062.degradation_priority || 0x0;
                    _0x50a49c.offset = 0x0;
                    _0x50a49c.subsamples = _0x386062.subsamples;
                    _0xb8e56e.samples.push(_0x50a49c);
                    _0xb8e56e.samples_size += _0x50a49c.size;
                    _0xb8e56e.samples_duration += _0x50a49c.duration;
                    if (!_0xb8e56e.first_dts) {
                        _0xb8e56e.first_dts = _0x386062.dts;
                    }
                    this.processSamples();
                    var _0x326f3d = this.createSingleSampleMoof(_0x50a49c);
                    this.addBox(_0x326f3d);
                    _0x326f3d.computeSize();
                    _0x326f3d.trafs[0x0].truns[0x0].data_offset = _0x326f3d.size + 0x8;
                    this.add("mdat").data = new Uint8Array(_0x3251ce);
                    return _0x50a49c;
                }
            };
            _0x40b724.prototype.createSingleSampleMoof = function (_0x107849) {
                var _0x2d93f5;
                _0x2d93f5 = _0x107849.is_sync ? 33554432 : 0x10000;
                var _0x57cb7d = new _0x5a8df5.moofBox();
                _0x57cb7d.add("mfhd").set("sequence_number", this.nextMoofNumber);
                this.nextMoofNumber++;
                var _0x418fe5 = _0x57cb7d.add("traf");
                var _0x5dba16 = this.getTrackById(_0x107849.track_id);
                _0x418fe5.add("tfhd").set("track_id", _0x107849.track_id).set("flags", _0x5a8df5.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
                _0x418fe5.add("tfdt").set("baseMediaDecodeTime", _0x107849.dts - (_0x5dba16.first_dts || 0x0));
                _0x418fe5
                    .add("trun")
                    .set(
                        "flags",
                        _0x5a8df5.TRUN_FLAGS_DATA_OFFSET |
                            _0x5a8df5.TRUN_FLAGS_DURATION |
                            _0x5a8df5.TRUN_FLAGS_SIZE |
                            _0x5a8df5.TRUN_FLAGS_FLAGS |
                            _0x5a8df5.TRUN_FLAGS_CTS_OFFSET
                    )
                    .set("data_offset", 0x0)
                    .set("first_sample_flags", 0x0)
                    .set("sample_count", 0x1)
                    .set("sample_duration", [_0x107849.duration])
                    .set("sample_size", [_0x107849.size])
                    .set("sample_flags", [_0x2d93f5])
                    .set("sample_composition_time_offset", [_0x107849.cts - _0x107849.dts]);
                return _0x57cb7d;
            };
            _0x40b724.prototype.lastMoofIndex = 0x0;
            _0x40b724.prototype.samplesDataSize = 0x0;
            _0x40b724.prototype.resetTables = function () {
                var _0x34c721;
                var _0x12cd5d;
                var _0x4bc2f1;
                var _0x39328e;
                var _0x5e1b44;
                var _0xca68a;
                this.initial_duration = this.moov.mvhd.duration;
                this.moov.mvhd.duration = 0x0;
                for (_0x34c721 = 0x0; _0x34c721 < this.moov.traks.length; _0x34c721++) {
                    (_0x12cd5d = this.moov.traks[_0x34c721]).tkhd.duration = 0x0;
                    _0x12cd5d.mdia.mdhd.duration = 0x0;
                    (_0x12cd5d.mdia.minf.stbl.stco || _0x12cd5d.mdia.minf.stbl.co64).chunk_offsets = [];
                    (_0x4bc2f1 = _0x12cd5d.mdia.minf.stbl.stsc).first_chunk = [];
                    _0x4bc2f1.samples_per_chunk = [];
                    _0x4bc2f1.sample_description_index = [];
                    (_0x12cd5d.mdia.minf.stbl.stsz || _0x12cd5d.mdia.minf.stbl.stz2).sample_sizes = [];
                    (_0x39328e = _0x12cd5d.mdia.minf.stbl.stts).sample_counts = [];
                    _0x39328e.sample_deltas = [];
                    if ((_0x5e1b44 = _0x12cd5d.mdia.minf.stbl.ctts)) {
                        _0x5e1b44.sample_counts = [];
                        _0x5e1b44.sample_offsets = [];
                    }
                    _0xca68a = _0x12cd5d.mdia.minf.stbl.stss;
                    var _0xdbf90 = _0x12cd5d.mdia.minf.stbl.boxes.indexOf(_0xca68a);
                    if (-0x1 != _0xdbf90) {
                        _0x12cd5d.mdia.minf.stbl.boxes[_0xdbf90] = null;
                    }
                }
            };
            _0x40b724.initSampleGroups = function (_0x5634c3, _0x45adb7, _0x406c46, _0x35844f, _0x56c640) {
                var _0x320b96;
                var _0x2cab98;
                var _0x172767;
                var _0x12e41b;
                function _0x3d6424(_0x511577, _0x28ff11, _0x5a225c) {
                    this.grouping_type = _0x511577;
                    this.grouping_type_parameter = _0x28ff11;
                    this.sbgp = _0x5a225c;
                    this.last_sample_in_run = -0x1;
                    this.entry_index = -0x1;
                }
                if (_0x45adb7) {
                    _0x45adb7.sample_groups_info = [];
                }
                if (!_0x5634c3.sample_groups_info) {
                    _0x5634c3.sample_groups_info = [];
                }
                for (_0x2cab98 = 0x0; _0x2cab98 < _0x406c46.length; _0x2cab98++) {
                    _0x12e41b = _0x406c46[_0x2cab98].grouping_type + "/" + _0x406c46[_0x2cab98].grouping_type_parameter;
                    _0x172767 = new _0x3d6424(_0x406c46[_0x2cab98].grouping_type, _0x406c46[_0x2cab98].grouping_type_parameter, _0x406c46[_0x2cab98]);
                    if (_0x45adb7) {
                        _0x45adb7.sample_groups_info[_0x12e41b] = _0x172767;
                    }
                    if (!_0x5634c3.sample_groups_info[_0x12e41b]) {
                        _0x5634c3.sample_groups_info[_0x12e41b] = _0x172767;
                    }
                    for (_0x320b96 = 0x0; _0x320b96 < _0x35844f.length; _0x320b96++) {
                        if (_0x35844f[_0x320b96].grouping_type === _0x406c46[_0x2cab98].grouping_type) {
                            _0x172767.description = _0x35844f[_0x320b96];
                            _0x172767.description.used = true;
                        }
                    }
                    if (_0x56c640) {
                        for (_0x320b96 = 0x0; _0x320b96 < _0x56c640.length; _0x320b96++) {
                            if (_0x56c640[_0x320b96].grouping_type === _0x406c46[_0x2cab98].grouping_type) {
                                _0x172767.fragment_description = _0x56c640[_0x320b96];
                                _0x172767.fragment_description.used = true;
                                _0x172767.is_fragment = true;
                            }
                        }
                    }
                }
                if (_0x45adb7) {
                    if (_0x56c640) {
                        for (_0x2cab98 = 0x0; _0x2cab98 < _0x56c640.length; _0x2cab98++) {
                            if (!_0x56c640[_0x2cab98].used && _0x56c640[_0x2cab98].version >= 0x2) {
                                _0x12e41b = _0x56c640[_0x2cab98].grouping_type + "/0";
                                (_0x172767 = new _0x3d6424(_0x56c640[_0x2cab98].grouping_type, 0x0)).is_fragment = true;
                                if (!_0x45adb7.sample_groups_info[_0x12e41b]) {
                                    _0x45adb7.sample_groups_info[_0x12e41b] = _0x172767;
                                }
                            }
                        }
                    }
                } else {
                    for (_0x2cab98 = 0x0; _0x2cab98 < _0x35844f.length; _0x2cab98++) {
                        if (!_0x35844f[_0x2cab98].used && _0x35844f[_0x2cab98].version >= 0x2) {
                            _0x12e41b = _0x35844f[_0x2cab98].grouping_type + "/0";
                            _0x172767 = new _0x3d6424(_0x35844f[_0x2cab98].grouping_type, 0x0);
                            if (!_0x5634c3.sample_groups_info[_0x12e41b]) {
                                _0x5634c3.sample_groups_info[_0x12e41b] = _0x172767;
                            }
                        }
                    }
                }
            };
            _0x40b724.setSampleGroupProperties = function (_0x516800, _0x224ffc, _0x4e384c, _0x47f5b1) {
                var _0x4e0803;
                var _0x333653;
                _0x224ffc.sample_groups = [];
                for (_0x4e0803 in _0x47f5b1) {
                    var _0x30f139;
                    _0x224ffc.sample_groups[_0x4e0803] = {};
                    _0x224ffc.sample_groups[_0x4e0803].grouping_type = _0x47f5b1[_0x4e0803].grouping_type;
                    _0x224ffc.sample_groups[_0x4e0803].grouping_type_parameter = _0x47f5b1[_0x4e0803].grouping_type_parameter;
                    if (_0x4e384c >= _0x47f5b1[_0x4e0803].last_sample_in_run) {
                        if (_0x47f5b1[_0x4e0803].last_sample_in_run < 0x0) {
                            _0x47f5b1[_0x4e0803].last_sample_in_run = 0x0;
                        }
                        _0x47f5b1[_0x4e0803].entry_index++;
                        if (_0x47f5b1[_0x4e0803].entry_index <= _0x47f5b1[_0x4e0803].sbgp.entries.length - 0x1) {
                            _0x47f5b1[_0x4e0803].last_sample_in_run += _0x47f5b1[_0x4e0803].sbgp.entries[_0x47f5b1[_0x4e0803].entry_index].sample_count;
                        }
                    }
                    if (_0x47f5b1[_0x4e0803].entry_index <= _0x47f5b1[_0x4e0803].sbgp.entries.length - 0x1) {
                        _0x224ffc.sample_groups[_0x4e0803].group_description_index =
                            _0x47f5b1[_0x4e0803].sbgp.entries[_0x47f5b1[_0x4e0803].entry_index].group_description_index;
                    } else {
                        _0x224ffc.sample_groups[_0x4e0803].group_description_index = -0x1;
                    }
                    if (0x0 !== _0x224ffc.sample_groups[_0x4e0803].group_description_index) {
                        _0x30f139 = _0x47f5b1[_0x4e0803].fragment_description ? _0x47f5b1[_0x4e0803].fragment_description : _0x47f5b1[_0x4e0803].description;
                        if (_0x224ffc.sample_groups[_0x4e0803].group_description_index > 0x0) {
                            _0x333653 =
                                _0x224ffc.sample_groups[_0x4e0803].group_description_index > 0xffff
                                    ? (_0x224ffc.sample_groups[_0x4e0803].group_description_index >> 0x10) - 0x1
                                    : _0x224ffc.sample_groups[_0x4e0803].group_description_index - 0x1;
                            if (_0x30f139 && _0x333653 >= 0x0) {
                                _0x224ffc.sample_groups[_0x4e0803].description = _0x30f139.entries[_0x333653];
                            }
                        } else if (_0x30f139 && _0x30f139.version >= 0x2 && _0x30f139.default_group_description_index > 0x0) {
                            _0x224ffc.sample_groups[_0x4e0803].description = _0x30f139.entries[_0x30f139.default_group_description_index - 0x1];
                        }
                    }
                }
            };
            _0x40b724.process_sdtp = function (_0x4fa675, _0x6365e, _0x3e2256) {
                if (_0x6365e) {
                    if (_0x4fa675) {
                        _0x6365e.is_leading = _0x4fa675.is_leading[_0x3e2256];
                        _0x6365e.depends_on = _0x4fa675.sample_depends_on[_0x3e2256];
                        _0x6365e.is_depended_on = _0x4fa675.sample_is_depended_on[_0x3e2256];
                        _0x6365e.has_redundancy = _0x4fa675.sample_has_redundancy[_0x3e2256];
                    } else {
                        _0x6365e.is_leading = 0x0;
                        _0x6365e.depends_on = 0x0;
                        _0x6365e.is_depended_on = 0x0;
                        _0x6365e.has_redundancy = 0x0;
                    }
                }
            };
            _0x40b724.prototype.buildSampleLists = function () {
                var _0x26cdec;
                var _0x11a30b;
                for (_0x26cdec = 0x0; _0x26cdec < this.moov.traks.length; _0x26cdec++) {
                    _0x11a30b = this.moov.traks[_0x26cdec];
                    this.buildTrakSampleLists(_0x11a30b);
                }
            };
            _0x40b724.prototype.buildTrakSampleLists = function (_0x4b081c) {
                var _0x156de2;
                var _0x58abe2;
                var _0x31d716;
                var _0x1de938;
                var _0xa96f43;
                var _0xdca079;
                var _0x85d5fe;
                var _0x2b987b;
                var _0x3a3f68;
                var _0x12a845;
                var _0x21516e;
                var _0x392d1c;
                var _0x5f08cf;
                var _0x3f55d8;
                var _0xbd14b0;
                var _0x1daeda;
                var _0x3d1981;
                var _0x1b5f79;
                var _0x19216a;
                var _0x3d839d;
                var _0x1afa3e;
                var _0x5091b4;
                var _0x48c10a;
                var _0x13848d;
                _0x4b081c.samples = [];
                _0x4b081c.samples_duration = 0x0;
                _0x4b081c.samples_size = 0x0;
                _0x58abe2 = _0x4b081c.mdia.minf.stbl.stco || _0x4b081c.mdia.minf.stbl.co64;
                _0x31d716 = _0x4b081c.mdia.minf.stbl.stsc;
                _0x1de938 = _0x4b081c.mdia.minf.stbl.stsz || _0x4b081c.mdia.minf.stbl.stz2;
                _0xa96f43 = _0x4b081c.mdia.minf.stbl.stts;
                _0xdca079 = _0x4b081c.mdia.minf.stbl.ctts;
                _0x85d5fe = _0x4b081c.mdia.minf.stbl.stss;
                _0x2b987b = _0x4b081c.mdia.minf.stbl.stsd;
                _0x3a3f68 = _0x4b081c.mdia.minf.stbl.subs;
                _0x392d1c = _0x4b081c.mdia.minf.stbl.stdp;
                _0x12a845 = _0x4b081c.mdia.minf.stbl.sbgps;
                _0x21516e = _0x4b081c.mdia.minf.stbl.sgpds;
                _0x1b5f79 = -0x1;
                _0x19216a = -0x1;
                _0x3d839d = -0x1;
                _0x1afa3e = -0x1;
                _0x5091b4 = 0x0;
                _0x48c10a = 0x0;
                _0x13848d = 0x0;
                _0x40b724.initSampleGroups(_0x4b081c, null, _0x12a845, _0x21516e);
                if (undefined !== _0x1de938) {
                    for (_0x156de2 = 0x0; _0x156de2 < _0x1de938.sample_sizes.length; _0x156de2++) {
                        var _0x35d99e = {
                            number: _0x156de2,
                            track_id: _0x4b081c.tkhd.track_id,
                            timescale: _0x4b081c.mdia.mdhd.timescale,
                            alreadyRead: 0x0,
                        };
                        _0x4b081c.samples[_0x156de2] = _0x35d99e;
                        _0x35d99e.size = _0x1de938.sample_sizes[_0x156de2];
                        _0x4b081c.samples_size += _0x35d99e.size;
                        if (0x0 === _0x156de2) {
                            _0x3f55d8 = 0x1;
                            _0x5f08cf = 0x0;
                            _0x35d99e.chunk_index = _0x3f55d8;
                            _0x35d99e.chunk_run_index = _0x5f08cf;
                            _0x3d1981 = _0x31d716.samples_per_chunk[_0x5f08cf];
                            _0x1daeda = 0x0;
                            _0xbd14b0 = _0x5f08cf + 0x1 < _0x31d716.first_chunk.length ? _0x31d716.first_chunk[_0x5f08cf + 0x1] - 0x1 : Infinity;
                        } else if (_0x156de2 < _0x3d1981) {
                            _0x35d99e.chunk_index = _0x3f55d8;
                            _0x35d99e.chunk_run_index = _0x5f08cf;
                        } else {
                            _0x3f55d8++;
                            _0x35d99e.chunk_index = _0x3f55d8;
                            _0x1daeda = 0x0;
                            if (!(_0x3f55d8 <= _0xbd14b0)) {
                                _0xbd14b0 = 0x1 + ++_0x5f08cf < _0x31d716.first_chunk.length ? _0x31d716.first_chunk[_0x5f08cf + 0x1] - 0x1 : Infinity;
                            }
                            _0x35d99e.chunk_run_index = _0x5f08cf;
                            _0x3d1981 += _0x31d716.samples_per_chunk[_0x5f08cf];
                        }
                        _0x35d99e.description_index = _0x31d716.sample_description_index[_0x35d99e.chunk_run_index] - 0x1;
                        _0x35d99e.description = _0x2b987b.entries[_0x35d99e.description_index];
                        _0x35d99e.offset = _0x58abe2.chunk_offsets[_0x35d99e.chunk_index - 0x1] + _0x1daeda;
                        _0x1daeda += _0x35d99e.size;
                        if (_0x156de2 > _0x1b5f79) {
                            _0x19216a++;
                            if (_0x1b5f79 < 0x0) {
                                _0x1b5f79 = 0x0;
                            }
                            _0x1b5f79 += _0xa96f43.sample_counts[_0x19216a];
                        }
                        if (_0x156de2 > 0x0) {
                            _0x4b081c.samples[_0x156de2 - 0x1].duration = _0xa96f43.sample_deltas[_0x19216a];
                            _0x4b081c.samples_duration += _0x4b081c.samples[_0x156de2 - 0x1].duration;
                            _0x35d99e.dts = _0x4b081c.samples[_0x156de2 - 0x1].dts + _0x4b081c.samples[_0x156de2 - 0x1].duration;
                        } else {
                            _0x35d99e.dts = 0x0;
                        }
                        if (_0xdca079) {
                            if (_0x156de2 >= _0x3d839d) {
                                _0x1afa3e++;
                                if (_0x3d839d < 0x0) {
                                    _0x3d839d = 0x0;
                                }
                                _0x3d839d += _0xdca079.sample_counts[_0x1afa3e];
                            }
                            _0x35d99e.cts = _0x4b081c.samples[_0x156de2].dts + _0xdca079.sample_offsets[_0x1afa3e];
                        } else {
                            _0x35d99e.cts = _0x35d99e.dts;
                        }
                        if (_0x85d5fe) {
                            if (_0x156de2 == _0x85d5fe.sample_numbers[_0x5091b4] - 0x1) {
                                _0x35d99e.is_sync = true;
                                _0x5091b4++;
                            } else {
                                _0x35d99e.is_sync = false;
                                _0x35d99e.degradation_priority = 0x0;
                            }
                            if (_0x3a3f68 && _0x3a3f68.entries[_0x48c10a].sample_delta + _0x13848d == _0x156de2 + 0x1) {
                                _0x35d99e.subsamples = _0x3a3f68.entries[_0x48c10a].subsamples;
                                _0x13848d += _0x3a3f68.entries[_0x48c10a].sample_delta;
                                _0x48c10a++;
                            }
                        } else {
                            _0x35d99e.is_sync = true;
                        }
                        _0x40b724.process_sdtp(_0x4b081c.mdia.minf.stbl.sdtp, _0x35d99e, _0x35d99e.number);
                        _0x35d99e.degradation_priority = _0x392d1c ? _0x392d1c.priority[_0x156de2] : 0x0;
                        if (_0x3a3f68 && _0x3a3f68.entries[_0x48c10a].sample_delta + _0x13848d == _0x156de2) {
                            _0x35d99e.subsamples = _0x3a3f68.entries[_0x48c10a].subsamples;
                            _0x13848d += _0x3a3f68.entries[_0x48c10a].sample_delta;
                        }
                        if (_0x12a845.length > 0x0 || _0x21516e.length > 0x0) {
                            _0x40b724.setSampleGroupProperties(_0x4b081c, _0x35d99e, _0x156de2, _0x4b081c.sample_groups_info);
                        }
                    }
                    if (_0x156de2 > 0x0) {
                        _0x4b081c.samples[_0x156de2 - 0x1].duration = Math.max(_0x4b081c.mdia.mdhd.duration - _0x4b081c.samples[_0x156de2 - 0x1].dts, 0x0);
                        _0x4b081c.samples_duration += _0x4b081c.samples[_0x156de2 - 0x1].duration;
                    }
                }
            };
            _0x40b724.prototype.updateSampleLists = function () {
                var _0x1f669c;
                var _0x228caa;
                var _0x36e424;
                var _0x43b56c;
                var _0x1b978e;
                var _0x37f246;
                var _0x5162d9;
                var _0x62a6a4;
                var _0x4f2d64;
                var _0x32903b;
                var _0x412cd4;
                var _0x63ae06;
                var _0x4e9141;
                var _0x3862e8;
                var _0x3f7e1c;
                if (undefined !== this.moov) {
                    for (; this.lastMoofIndex < this.moofs.length; ) {
                        _0x4f2d64 = this.moofs[this.lastMoofIndex];
                        this.lastMoofIndex++;
                        if ("moof" == _0x4f2d64.type) {
                            _0x32903b = _0x4f2d64;
                            for (_0x1f669c = 0x0; _0x1f669c < _0x32903b.trafs.length; _0x1f669c++) {
                                _0x412cd4 = _0x32903b.trafs[_0x1f669c];
                                _0x63ae06 = this.getTrackById(_0x412cd4.tfhd.track_id);
                                _0x4e9141 = this.getTrexById(_0x412cd4.tfhd.track_id);
                                _0x43b56c =
                                    _0x412cd4.tfhd.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DESC
                                        ? _0x412cd4.tfhd.default_sample_description_index
                                        : _0x4e9141
                                        ? _0x4e9141.default_sample_description_index
                                        : 0x1;
                                _0x1b978e =
                                    _0x412cd4.tfhd.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_DUR
                                        ? _0x412cd4.tfhd.default_sample_duration
                                        : _0x4e9141
                                        ? _0x4e9141.default_sample_duration
                                        : 0x0;
                                _0x37f246 =
                                    _0x412cd4.tfhd.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_SIZE
                                        ? _0x412cd4.tfhd.default_sample_size
                                        : _0x4e9141
                                        ? _0x4e9141.default_sample_size
                                        : 0x0;
                                _0x5162d9 =
                                    _0x412cd4.tfhd.flags & _0x5a8df5.TFHD_FLAG_SAMPLE_FLAGS
                                        ? _0x412cd4.tfhd.default_sample_flags
                                        : _0x4e9141
                                        ? _0x4e9141.default_sample_flags
                                        : 0x0;
                                _0x412cd4.sample_number = 0x0;
                                if (_0x412cd4.sbgps.length > 0x0) {
                                    _0x40b724.initSampleGroups(_0x63ae06, _0x412cd4, _0x412cd4.sbgps, _0x63ae06.mdia.minf.stbl.sgpds, _0x412cd4.sgpds);
                                }
                                for (_0x228caa = 0x0; _0x228caa < _0x412cd4.truns.length; _0x228caa++) {
                                    var _0xa47e44 = _0x412cd4.truns[_0x228caa];
                                    for (_0x36e424 = 0x0; _0x36e424 < _0xa47e44.sample_count; _0x36e424++) {
                                        (_0x3862e8 = {}).moof_number = this.lastMoofIndex;
                                        _0x3862e8.number_in_traf = _0x412cd4.sample_number;
                                        _0x412cd4.sample_number++;
                                        _0x3862e8.number = _0x63ae06.samples.length;
                                        _0x412cd4.first_sample_index = _0x63ae06.samples.length;
                                        _0x63ae06.samples.push(_0x3862e8);
                                        _0x3862e8.track_id = _0x63ae06.tkhd.track_id;
                                        _0x3862e8.timescale = _0x63ae06.mdia.mdhd.timescale;
                                        _0x3862e8.description_index = _0x43b56c - 0x1;
                                        _0x3862e8.description = _0x63ae06.mdia.minf.stbl.stsd.entries[_0x3862e8.description_index];
                                        _0x3862e8.size = _0x37f246;
                                        if (_0xa47e44.flags & _0x5a8df5.TRUN_FLAGS_SIZE) {
                                            _0x3862e8.size = _0xa47e44.sample_size[_0x36e424];
                                        }
                                        _0x63ae06.samples_size += _0x3862e8.size;
                                        _0x3862e8.duration = _0x1b978e;
                                        if (_0xa47e44.flags & _0x5a8df5.TRUN_FLAGS_DURATION) {
                                            _0x3862e8.duration = _0xa47e44.sample_duration[_0x36e424];
                                        }
                                        _0x63ae06.samples_duration += _0x3862e8.duration;
                                        if (_0x63ae06.first_traf_merged || _0x36e424 > 0x0) {
                                            _0x3862e8.dts =
                                                _0x63ae06.samples[_0x63ae06.samples.length - 0x2].dts +
                                                _0x63ae06.samples[_0x63ae06.samples.length - 0x2].duration;
                                        } else {
                                            if (_0x412cd4.tfdt) {
                                                _0x3862e8.dts = _0x412cd4.tfdt.baseMediaDecodeTime;
                                            } else {
                                                _0x3862e8.dts = 0x0;
                                            }
                                            _0x63ae06.first_traf_merged = true;
                                        }
                                        _0x3862e8.cts = _0x3862e8.dts;
                                        if (_0xa47e44.flags & _0x5a8df5.TRUN_FLAGS_CTS_OFFSET) {
                                            _0x3862e8.cts = _0x3862e8.dts + _0xa47e44.sample_composition_time_offset[_0x36e424];
                                        }
                                        _0x3f7e1c = _0x5162d9;
                                        if (_0xa47e44.flags & _0x5a8df5.TRUN_FLAGS_FLAGS) {
                                            _0x3f7e1c = _0xa47e44.sample_flags[_0x36e424];
                                        } else if (0x0 === _0x36e424 && _0xa47e44.flags & _0x5a8df5.TRUN_FLAGS_FIRST_FLAG) {
                                            _0x3f7e1c = _0xa47e44.first_sample_flags;
                                        }
                                        _0x3862e8.is_sync = !((_0x3f7e1c >> 0x10) & 0x1);
                                        _0x3862e8.is_leading = (_0x3f7e1c >> 0x1a) & 0x3;
                                        _0x3862e8.depends_on = (_0x3f7e1c >> 0x18) & 0x3;
                                        _0x3862e8.is_depended_on = (_0x3f7e1c >> 0x16) & 0x3;
                                        _0x3862e8.has_redundancy = (_0x3f7e1c >> 0x14) & 0x3;
                                        _0x3862e8.degradation_priority = 0xffff & _0x3f7e1c;
                                        var _0x26ba11;
                                        var _0x2abc54 = !!(_0x412cd4.tfhd.flags & _0x5a8df5.TFHD_FLAG_BASE_DATA_OFFSET);
                                        var _0x9da02f = !!(_0x412cd4.tfhd.flags & _0x5a8df5.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
                                        var _0x814877 = !!(_0xa47e44.flags & _0x5a8df5.TRUN_FLAGS_DATA_OFFSET);
                                        _0x26ba11 = _0x2abc54 ? _0x412cd4.tfhd.base_data_offset : _0x9da02f || 0x0 === _0x228caa ? _0x32903b.start : _0x62a6a4;
                                        _0x3862e8.offset =
                                            0x0 === _0x228caa && 0x0 === _0x36e424 ? (_0x814877 ? _0x26ba11 + _0xa47e44.data_offset : _0x26ba11) : _0x62a6a4;
                                        _0x62a6a4 = _0x3862e8.offset + _0x3862e8.size;
                                        if (
                                            _0x412cd4.sbgps.length > 0x0 ||
                                            _0x412cd4.sgpds.length > 0x0 ||
                                            _0x63ae06.mdia.minf.stbl.sbgps.length > 0x0 ||
                                            _0x63ae06.mdia.minf.stbl.sgpds.length > 0x0
                                        ) {
                                            _0x40b724.setSampleGroupProperties(_0x63ae06, _0x3862e8, _0x3862e8.number_in_traf, _0x412cd4.sample_groups_info);
                                        }
                                    }
                                }
                                if (_0x412cd4.subs) {
                                    _0x63ae06.has_fragment_subsamples = true;
                                    var _0xb9aae5 = _0x412cd4.first_sample_index;
                                    for (_0x228caa = 0x0; _0x228caa < _0x412cd4.subs.entries.length; _0x228caa++) {
                                        _0xb9aae5 += _0x412cd4.subs.entries[_0x228caa].sample_delta;
                                        (_0x3862e8 = _0x63ae06.samples[_0xb9aae5 - 0x1]).subsamples = _0x412cd4.subs.entries[_0x228caa].subsamples;
                                    }
                                }
                            }
                        }
                    }
                }
            };
            _0x40b724.prototype.getSample = function (_0x1cd687, _0x1bab39) {
                var _0x599d3c;
                var _0x5a19d5 = _0x1cd687.samples[_0x1bab39];
                if (!this.moov) {
                    return null;
                }
                if (_0x5a19d5.data) {
                    if (_0x5a19d5.alreadyRead == _0x5a19d5.size) {
                        return _0x5a19d5;
                    }
                } else {
                    _0x5a19d5.data = new Uint8Array(_0x5a19d5.size);
                    _0x5a19d5.alreadyRead = 0x0;
                    this.samplesDataSize += _0x5a19d5.size;
                    _0x5a6c18.debug(
                        "ISOFile",
                        "Allocating sample #" +
                            _0x1bab39 +
                            " on track #" +
                            _0x1cd687.tkhd.track_id +
                            " of size " +
                            _0x5a19d5.size +
                            " (total: " +
                            this.samplesDataSize +
                            ")"
                    );
                }
                for (;;) {
                    var _0xe790e2 = this.stream.findPosition(true, _0x5a19d5.offset + _0x5a19d5.alreadyRead, false);
                    if (!(_0xe790e2 > -0x1)) {
                        return null;
                    }
                    var _0x358ca1 = (_0x599d3c = this.stream.buffers[_0xe790e2]).byteLength - (_0x5a19d5.offset + _0x5a19d5.alreadyRead - _0x599d3c.fileStart);
                    if (_0x5a19d5.size - _0x5a19d5.alreadyRead <= _0x358ca1) {
                        _0x5a6c18.debug(
                            "ISOFile",
                            "Getting sample #" +
                                _0x1bab39 +
                                " data (alreadyRead: " +
                                _0x5a19d5.alreadyRead +
                                " offset: " +
                                (_0x5a19d5.offset + _0x5a19d5.alreadyRead - _0x599d3c.fileStart) +
                                " read size: " +
                                (_0x5a19d5.size - _0x5a19d5.alreadyRead) +
                                " full size: " +
                                _0x5a19d5.size +
                                ")"
                        );
                        _0x36e1b4.memcpy(
                            _0x5a19d5.data.buffer,
                            _0x5a19d5.alreadyRead,
                            _0x599d3c,
                            _0x5a19d5.offset + _0x5a19d5.alreadyRead - _0x599d3c.fileStart,
                            _0x5a19d5.size - _0x5a19d5.alreadyRead
                        );
                        _0x599d3c.usedBytes += _0x5a19d5.size - _0x5a19d5.alreadyRead;
                        this.stream.logBufferLevel();
                        _0x5a19d5.alreadyRead = _0x5a19d5.size;
                        return _0x5a19d5;
                    }
                    if (0x0 === _0x358ca1) {
                        return null;
                    }
                    _0x5a6c18.debug(
                        "ISOFile",
                        "Getting sample #" +
                            _0x1bab39 +
                            " partial data (alreadyRead: " +
                            _0x5a19d5.alreadyRead +
                            " offset: " +
                            (_0x5a19d5.offset + _0x5a19d5.alreadyRead - _0x599d3c.fileStart) +
                            " read size: " +
                            _0x358ca1 +
                            " full size: " +
                            _0x5a19d5.size +
                            ")"
                    );
                    _0x36e1b4.memcpy(
                        _0x5a19d5.data.buffer,
                        _0x5a19d5.alreadyRead,
                        _0x599d3c,
                        _0x5a19d5.offset + _0x5a19d5.alreadyRead - _0x599d3c.fileStart,
                        _0x358ca1
                    );
                    _0x5a19d5.alreadyRead += _0x358ca1;
                    _0x599d3c.usedBytes += _0x358ca1;
                    this.stream.logBufferLevel();
                }
            };
            _0x40b724.prototype.releaseSample = function (_0x142cd6, _0x56c771) {
                var _0x4c294d = _0x142cd6.samples[_0x56c771];
                return _0x4c294d.data
                    ? ((this.samplesDataSize -= _0x4c294d.size), (_0x4c294d.data = null), (_0x4c294d.alreadyRead = 0x0), _0x4c294d.size)
                    : 0x0;
            };
            _0x40b724.prototype.getAllocatedSampleDataSize = function () {
                return this.samplesDataSize;
            };
            _0x40b724.prototype.getCodecs = function () {
                var _0x53848d;
                var _0x4c6b10 = "";
                for (_0x53848d = 0x0; _0x53848d < this.moov.traks.length; _0x53848d++) {
                    if (_0x53848d > 0x0) {
                        _0x4c6b10 += ",";
                    }
                    _0x4c6b10 += this.moov.traks[_0x53848d].mdia.minf.stbl.stsd.entries[0x0].getCodec();
                }
                return _0x4c6b10;
            };
            _0x40b724.prototype.getTrexById = function (_0x14ffd4) {
                var _0x33a305;
                if (!this.moov || !this.moov.mvex) {
                    return null;
                }
                for (_0x33a305 = 0x0; _0x33a305 < this.moov.mvex.trexs.length; _0x33a305++) {
                    var _0x4e493b = this.moov.mvex.trexs[_0x33a305];
                    if (_0x4e493b.track_id == _0x14ffd4) {
                        return _0x4e493b;
                    }
                }
                return null;
            };
            _0x40b724.prototype.getTrackById = function (_0x234cfb) {
                if (undefined === this.moov) {
                    return null;
                }
                for (var _0x5ccadf = 0x0; _0x5ccadf < this.moov.traks.length; _0x5ccadf++) {
                    var _0x2cf83b = this.moov.traks[_0x5ccadf];
                    if (_0x2cf83b.tkhd.track_id == _0x234cfb) {
                        return _0x2cf83b;
                    }
                }
                return null;
            };
            _0x40b724.prototype.items = [];
            _0x40b724.prototype.itemsDataSize = 0x0;
            _0x40b724.prototype.flattenItemInfo = function () {
                var _0x5070ba;
                var _0xbde68b;
                var _0x1cc9cc;
                var _0x5c2bd2 = this.items;
                var _0x154ad4 = this.meta;
                if (null != _0x154ad4 && undefined !== _0x154ad4.hdlr && undefined !== _0x154ad4.iinf) {
                    for (_0x5070ba = 0x0; _0x5070ba < _0x154ad4.iinf.item_infos.length; _0x5070ba++) {
                        (_0x1cc9cc = {}).id = _0x154ad4.iinf.item_infos[_0x5070ba].item_ID;
                        _0x5c2bd2[_0x1cc9cc.id] = _0x1cc9cc;
                        _0x1cc9cc.ref_to = [];
                        _0x1cc9cc.name = _0x154ad4.iinf.item_infos[_0x5070ba].item_name;
                        if (_0x154ad4.iinf.item_infos[_0x5070ba].protection_index > 0x0) {
                            _0x1cc9cc.protection = _0x154ad4.ipro.protections[_0x154ad4.iinf.item_infos[_0x5070ba].protection_index - 0x1];
                        }
                        if (_0x154ad4.iinf.item_infos[_0x5070ba].item_type) {
                            _0x1cc9cc.type = _0x154ad4.iinf.item_infos[_0x5070ba].item_type;
                        } else {
                            _0x1cc9cc.type = "mime";
                        }
                        _0x1cc9cc.content_type = _0x154ad4.iinf.item_infos[_0x5070ba].content_type;
                        _0x1cc9cc.content_encoding = _0x154ad4.iinf.item_infos[_0x5070ba].content_encoding;
                    }
                    if (_0x154ad4.iloc) {
                        for (_0x5070ba = 0x0; _0x5070ba < _0x154ad4.iloc.items.length; _0x5070ba++) {
                            var _0x1f12d1 = _0x154ad4.iloc.items[_0x5070ba];
                            _0x1cc9cc = _0x5c2bd2[_0x1f12d1.item_ID];
                            if (0x0 !== _0x1f12d1.data_reference_index) {
                                _0x5a6c18.warn("Item storage with reference to other files: not supported");
                                _0x1cc9cc.source = _0x154ad4.dinf.boxes[_0x1f12d1.data_reference_index - 0x1];
                            }
                            switch (_0x1f12d1.construction_method) {
                                case 0x0:
                                    break;
                                case 0x1:
                                case 0x2:
                                    _0x5a6c18.warn("Item storage with construction_method : not supported");
                            }
                            _0x1cc9cc.extents = [];
                            _0x1cc9cc.size = 0x0;
                            for (_0xbde68b = 0x0; _0xbde68b < _0x1f12d1.extents.length; _0xbde68b++) {
                                _0x1cc9cc.extents[_0xbde68b] = {};
                                _0x1cc9cc.extents[_0xbde68b].offset = _0x1f12d1.extents[_0xbde68b].extent_offset + _0x1f12d1.base_offset;
                                _0x1cc9cc.extents[_0xbde68b].length = _0x1f12d1.extents[_0xbde68b].extent_length;
                                _0x1cc9cc.extents[_0xbde68b].alreadyRead = 0x0;
                                _0x1cc9cc.size += _0x1cc9cc.extents[_0xbde68b].length;
                            }
                        }
                    }
                    if (_0x154ad4.pitm) {
                        _0x5c2bd2[_0x154ad4.pitm.item_id].primary = true;
                    }
                    if (_0x154ad4.iref) {
                        for (_0x5070ba = 0x0; _0x5070ba < _0x154ad4.iref.references.length; _0x5070ba++) {
                            var _0x5c0516 = _0x154ad4.iref.references[_0x5070ba];
                            for (_0xbde68b = 0x0; _0xbde68b < _0x5c0516.references.length; _0xbde68b++) {
                                _0x5c2bd2[_0x5c0516.from_item_ID].ref_to.push({
                                    type: _0x5c0516.type,
                                    id: _0x5c0516.references[_0xbde68b],
                                });
                            }
                        }
                    }
                    if (_0x154ad4.iprp) {
                        for (var _0x29cb63 = 0x0; _0x29cb63 < _0x154ad4.iprp.ipmas.length; _0x29cb63++) {
                            var _0x86d581 = _0x154ad4.iprp.ipmas[_0x29cb63];
                            for (_0x5070ba = 0x0; _0x5070ba < _0x86d581.associations.length; _0x5070ba++) {
                                var _0x112b6c = _0x86d581.associations[_0x5070ba];
                                if (undefined === (_0x1cc9cc = _0x5c2bd2[_0x112b6c.id]).properties) {
                                    _0x1cc9cc.properties = {};
                                    _0x1cc9cc.properties.boxes = [];
                                }
                                for (_0xbde68b = 0x0; _0xbde68b < _0x112b6c.props.length; _0xbde68b++) {
                                    var _0x1e770e = _0x112b6c.props[_0xbde68b];
                                    if (_0x1e770e.property_index > 0x0 && _0x1e770e.property_index - 0x1 < _0x154ad4.iprp.ipco.boxes.length) {
                                        var _0x447eec = _0x154ad4.iprp.ipco.boxes[_0x1e770e.property_index - 0x1];
                                        _0x1cc9cc.properties[_0x447eec.type] = _0x447eec;
                                        _0x1cc9cc.properties.boxes.push(_0x447eec);
                                    }
                                }
                            }
                        }
                    }
                }
            };
            _0x40b724.prototype.getItem = function (_0x4cde00) {
                var _0x1b64e2;
                var _0x10cb4d;
                if (!this.meta) {
                    return null;
                }
                if (!(_0x10cb4d = this.items[_0x4cde00]).data && _0x10cb4d.size) {
                    _0x10cb4d.data = new Uint8Array(_0x10cb4d.size);
                    _0x10cb4d.alreadyRead = 0x0;
                    this.itemsDataSize += _0x10cb4d.size;
                    _0x5a6c18.debug("ISOFile", "Allocating item #" + _0x4cde00 + " of size " + _0x10cb4d.size + " (total: " + this.itemsDataSize + ")");
                } else {
                    if (_0x10cb4d.alreadyRead === _0x10cb4d.size) {
                        return _0x10cb4d;
                    }
                }
                for (var _0x5f498e = 0x0; _0x5f498e < _0x10cb4d.extents.length; _0x5f498e++) {
                    var _0x2ea802 = _0x10cb4d.extents[_0x5f498e];
                    if (_0x2ea802.alreadyRead !== _0x2ea802.length) {
                        var _0x205218 = this.stream.findPosition(true, _0x2ea802.offset + _0x2ea802.alreadyRead, false);
                        if (!(_0x205218 > -0x1)) {
                            return null;
                        }
                        var _0x3a1348 =
                            (_0x1b64e2 = this.stream.buffers[_0x205218]).byteLength - (_0x2ea802.offset + _0x2ea802.alreadyRead - _0x1b64e2.fileStart);
                        if (!(_0x2ea802.length - _0x2ea802.alreadyRead <= _0x3a1348)) {
                            _0x5a6c18.debug(
                                "ISOFile",
                                "Getting item #" +
                                    _0x4cde00 +
                                    " extent #" +
                                    _0x5f498e +
                                    " partial data (alreadyRead: " +
                                    _0x2ea802.alreadyRead +
                                    " offset: " +
                                    (_0x2ea802.offset + _0x2ea802.alreadyRead - _0x1b64e2.fileStart) +
                                    " read size: " +
                                    _0x3a1348 +
                                    " full extent size: " +
                                    _0x2ea802.length +
                                    " full item size: " +
                                    _0x10cb4d.size +
                                    ")"
                            );
                            _0x36e1b4.memcpy(
                                _0x10cb4d.data.buffer,
                                _0x10cb4d.alreadyRead,
                                _0x1b64e2,
                                _0x2ea802.offset + _0x2ea802.alreadyRead - _0x1b64e2.fileStart,
                                _0x3a1348
                            );
                            _0x2ea802.alreadyRead += _0x3a1348;
                            _0x10cb4d.alreadyRead += _0x3a1348;
                            _0x1b64e2.usedBytes += _0x3a1348;
                            this.stream.logBufferLevel();
                            return null;
                        }
                        _0x5a6c18.debug(
                            "ISOFile",
                            "Getting item #" +
                                _0x4cde00 +
                                " extent #" +
                                _0x5f498e +
                                " data (alreadyRead: " +
                                _0x2ea802.alreadyRead +
                                " offset: " +
                                (_0x2ea802.offset + _0x2ea802.alreadyRead - _0x1b64e2.fileStart) +
                                " read size: " +
                                (_0x2ea802.length - _0x2ea802.alreadyRead) +
                                " full extent size: " +
                                _0x2ea802.length +
                                " full item size: " +
                                _0x10cb4d.size +
                                ")"
                        );
                        _0x36e1b4.memcpy(
                            _0x10cb4d.data.buffer,
                            _0x10cb4d.alreadyRead,
                            _0x1b64e2,
                            _0x2ea802.offset + _0x2ea802.alreadyRead - _0x1b64e2.fileStart,
                            _0x2ea802.length - _0x2ea802.alreadyRead
                        );
                        _0x1b64e2.usedBytes += _0x2ea802.length - _0x2ea802.alreadyRead;
                        this.stream.logBufferLevel();
                        _0x10cb4d.alreadyRead += _0x2ea802.length - _0x2ea802.alreadyRead;
                        _0x2ea802.alreadyRead = _0x2ea802.length;
                    }
                }
                return _0x10cb4d.alreadyRead === _0x10cb4d.size ? _0x10cb4d : null;
            };
            _0x40b724.prototype.releaseItem = function (_0x5a0a9a) {
                var _0x5e239d = this.items[_0x5a0a9a];
                if (_0x5e239d.data) {
                    this.itemsDataSize -= _0x5e239d.size;
                    _0x5e239d.data = null;
                    _0x5e239d.alreadyRead = 0x0;
                    for (var _0x2db0a2 = 0x0; _0x2db0a2 < _0x5e239d.extents.length; _0x2db0a2++) {
                        _0x5e239d.extents[_0x2db0a2].alreadyRead = 0x0;
                    }
                    return _0x5e239d.size;
                }
                return 0x0;
            };
            _0x40b724.prototype.processItems = function (_0x4283ec) {
                for (var _0x556628 in this.items) {
                    var _0x1377c6 = this.items[_0x556628];
                    this.getItem(_0x1377c6.id);
                    if (_0x4283ec && !_0x1377c6.sent) {
                        _0x4283ec(_0x1377c6);
                        _0x1377c6.sent = true;
                        _0x1377c6.data = null;
                    }
                }
            };
            _0x40b724.prototype.hasItem = function (_0x2908de) {
                for (var _0x33ef55 in this.items) {
                    var _0x505253 = this.items[_0x33ef55];
                    if (_0x505253.name === _0x2908de) {
                        return _0x505253.id;
                    }
                }
                return -0x1;
            };
            _0x40b724.prototype.getMetaHandler = function () {
                return this.meta ? this.meta.hdlr.handler : null;
            };
            _0x40b724.prototype.getPrimaryItem = function () {
                return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
            };
            _0x40b724.prototype.itemToFragmentedTrackFile = function (_0x4492d1) {
                var _0x2e14bc;
                var _0x42c2fb = _0x4492d1 || {};
                if (null == (_0x2e14bc = _0x42c2fb.itemId ? this.getItem(_0x42c2fb.itemId) : this.getPrimaryItem())) {
                    return null;
                }
                var _0x78789f = new _0x40b724();
                _0x78789f.discardMdatData = false;
                var _0x452047 = {
                    type: _0x2e14bc.type,
                    description_boxes: _0x2e14bc.properties.boxes,
                };
                if (_0x2e14bc.properties.ispe) {
                    _0x452047.width = _0x2e14bc.properties.ispe.image_width;
                    _0x452047.height = _0x2e14bc.properties.ispe.image_height;
                }
                var _0x3aece6 = _0x78789f.addTrack(_0x452047);
                return _0x3aece6 ? (_0x78789f.addSample(_0x3aece6, _0x2e14bc.data), _0x78789f) : null;
            };
            _0x40b724.prototype.write = function (_0x3b8c9f) {
                for (var _0x17b88a = 0x0; _0x17b88a < this.boxes.length; _0x17b88a++) {
                    this.boxes[_0x17b88a].write(_0x3b8c9f);
                }
            };
            _0x40b724.prototype.createFragment = function (_0x5ed027, _0x405cbc, _0x7f9dd) {
                var _0x41f31c = this.getTrackById(_0x5ed027);
                var _0x1f9212 = this.getSample(_0x41f31c, _0x405cbc);
                if (null == _0x1f9212) {
                    _0x1f9212 = _0x41f31c.samples[_0x405cbc];
                    if (this.nextSeekPosition) {
                        this.nextSeekPosition = Math.min(_0x1f9212.offset + _0x1f9212.alreadyRead, this.nextSeekPosition);
                    } else {
                        this.nextSeekPosition = _0x41f31c.samples[_0x405cbc].offset + _0x1f9212.alreadyRead;
                    }
                    return null;
                }
                var _0x352ed7 = _0x7f9dd || new _0x36e1b4();
                _0x352ed7.endianness = _0x36e1b4.BIG_ENDIAN;
                var _0x571962 = this.createSingleSampleMoof(_0x1f9212);
                _0x571962.write(_0x352ed7);
                _0x571962.trafs[0x0].truns[0x0].data_offset = _0x571962.size + 0x8;
                _0x5a6c18.debug("MP4Box", "Adjusting data_offset with new value " + _0x571962.trafs[0x0].truns[0x0].data_offset);
                _0x352ed7.adjustUint32(_0x571962.trafs[0x0].truns[0x0].data_offset_position, _0x571962.trafs[0x0].truns[0x0].data_offset);
                var _0x480004 = new _0x5a8df5.mdatBox();
                _0x480004.data = _0x1f9212.data;
                _0x480004.write(_0x352ed7);
                return _0x352ed7;
            };
            _0x40b724.writeInitializationSegment = function (_0x6ca897, _0x33ab31, _0x17f9ab, _0x296ad5) {
                var _0x2302dc;
                _0x5a6c18.debug("ISOFile", "Generating initialization segment");
                var _0x27213c = new _0x36e1b4();
                _0x27213c.endianness = _0x36e1b4.BIG_ENDIAN;
                _0x6ca897.write(_0x27213c);
                var _0x5517b1 = _0x33ab31.add("mvex");
                if (_0x17f9ab) {
                    _0x5517b1.add("mehd").set("fragment_duration", _0x17f9ab);
                }
                for (_0x2302dc = 0x0; _0x2302dc < _0x33ab31.traks.length; _0x2302dc++) {
                    _0x5517b1
                        .add("trex")
                        .set("track_id", _0x33ab31.traks[_0x2302dc].tkhd.track_id)
                        .set("default_sample_description_index", 0x1)
                        .set("default_sample_duration", _0x296ad5)
                        .set("default_sample_size", 0x0)
                        .set("default_sample_flags", 0x10000);
                }
                _0x33ab31.write(_0x27213c);
                return _0x27213c.buffer;
            };
            _0x40b724.prototype.save = function (_0x10c18d) {
                var _0x40f2cb = new _0x36e1b4();
                _0x40f2cb.endianness = _0x36e1b4.BIG_ENDIAN;
                this.write(_0x40f2cb);
                _0x40f2cb.save(_0x10c18d);
            };
            _0x40b724.prototype.getBuffer = function () {
                var _0x1f32e8 = new _0x36e1b4();
                _0x1f32e8.endianness = _0x36e1b4.BIG_ENDIAN;
                this.write(_0x1f32e8);
                return _0x1f32e8.buffer;
            };
            _0x40b724.prototype.initializeSegmentation = function () {
                var _0x5a9941;
                var _0x9a2e2b;
                var _0x4bc175;
                var _0x1abaa1;
                if (null === this.onSegment) {
                    _0x5a6c18.warn("MP4Box", "No segmentation callback set!");
                }
                if (!this.isFragmentationInitialized) {
                    this.isFragmentationInitialized = true;
                    this.nextMoofNumber = 0x0;
                    this.resetTables();
                }
                _0x9a2e2b = [];
                for (_0x5a9941 = 0x0; _0x5a9941 < this.fragmentedTracks.length; _0x5a9941++) {
                    var _0xcd90cd = new _0x5a8df5.moovBox();
                    _0xcd90cd.mvhd = this.moov.mvhd;
                    _0xcd90cd.boxes.push(_0xcd90cd.mvhd);
                    _0x4bc175 = this.getTrackById(this.fragmentedTracks[_0x5a9941].id);
                    _0xcd90cd.boxes.push(_0x4bc175);
                    _0xcd90cd.traks.push(_0x4bc175);
                    (_0x1abaa1 = {}).id = _0x4bc175.tkhd.track_id;
                    _0x1abaa1.user = this.fragmentedTracks[_0x5a9941].user;
                    _0x1abaa1.buffer = _0x40b724.writeInitializationSegment(
                        this.ftyp,
                        _0xcd90cd,
                        this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : undefined,
                        this.moov.traks[_0x5a9941].samples.length > 0x0 ? this.moov.traks[_0x5a9941].samples[0x0].duration : 0x0
                    );
                    _0x9a2e2b.push(_0x1abaa1);
                }
                return _0x9a2e2b;
            };
            _0x5a8df5.Box.prototype.printHeader = function (_0x2d3ff6) {
                this.size += 0x8;
                if (this.size > _0x2cf13d) {
                    this.size += 0x8;
                }
                if ("uuid" === this.type) {
                    this.size += 0x10;
                }
                _0x2d3ff6.log(_0x2d3ff6.indent + "size:" + this.size);
                _0x2d3ff6.log(_0x2d3ff6.indent + "type:" + this.type);
            };
            _0x5a8df5.FullBox.prototype.printHeader = function (_0x4d7c28) {
                this.size += 0x4;
                _0x5a8df5.Box.prototype.printHeader.call(this, _0x4d7c28);
                _0x4d7c28.log(_0x4d7c28.indent + "version:" + this.version);
                _0x4d7c28.log(_0x4d7c28.indent + "flags:" + this.flags);
            };
            _0x5a8df5.Box.prototype.print = function (_0x24c86e) {
                this.printHeader(_0x24c86e);
            };
            _0x5a8df5.ContainerBox.prototype.print = function (_0x132ed3) {
                this.printHeader(_0x132ed3);
                for (var _0x154dc5 = 0x0; _0x154dc5 < this.boxes.length; _0x154dc5++) {
                    if (this.boxes[_0x154dc5]) {
                        var _0x3dc782 = _0x132ed3.indent;
                        _0x132ed3.indent += " ";
                        this.boxes[_0x154dc5].print(_0x132ed3);
                        _0x132ed3.indent = _0x3dc782;
                    }
                }
            };
            _0x40b724.prototype.print = function (_0xfc7d38) {
                _0xfc7d38.indent = "";
                for (var _0x44e84f = 0x0; _0x44e84f < this.boxes.length; _0x44e84f++) {
                    if (this.boxes[_0x44e84f]) {
                        this.boxes[_0x44e84f].print(_0xfc7d38);
                    }
                }
            };
            _0x5a8df5.mvhdBox.prototype.print = function (_0x2e6807) {
                _0x5a8df5.FullBox.prototype.printHeader.call(this, _0x2e6807);
                _0x2e6807.log(_0x2e6807.indent + "creation_time: " + this.creation_time);
                _0x2e6807.log(_0x2e6807.indent + "modification_time: " + this.modification_time);
                _0x2e6807.log(_0x2e6807.indent + "timescale: " + this.timescale);
                _0x2e6807.log(_0x2e6807.indent + "duration: " + this.duration);
                _0x2e6807.log(_0x2e6807.indent + "rate: " + this.rate);
                _0x2e6807.log(_0x2e6807.indent + "volume: " + (this.volume >> 0x8));
                _0x2e6807.log(_0x2e6807.indent + "matrix: " + this.matrix.join(", "));
                _0x2e6807.log(_0x2e6807.indent + "next_track_id: " + this.next_track_id);
            };
            _0x5a8df5.tkhdBox.prototype.print = function (_0x50334e) {
                _0x5a8df5.FullBox.prototype.printHeader.call(this, _0x50334e);
                _0x50334e.log(_0x50334e.indent + "creation_time: " + this.creation_time);
                _0x50334e.log(_0x50334e.indent + "modification_time: " + this.modification_time);
                _0x50334e.log(_0x50334e.indent + "track_id: " + this.track_id);
                _0x50334e.log(_0x50334e.indent + "duration: " + this.duration);
                _0x50334e.log(_0x50334e.indent + "volume: " + (this.volume >> 0x8));
                _0x50334e.log(_0x50334e.indent + "matrix: " + this.matrix.join(", "));
                _0x50334e.log(_0x50334e.indent + "layer: " + this.layer);
                _0x50334e.log(_0x50334e.indent + "alternate_group: " + this.alternate_group);
                _0x50334e.log(_0x50334e.indent + "width: " + this.width);
                _0x50334e.log(_0x50334e.indent + "height: " + this.height);
            };
            var _0x33efba = function (_0x4e9162, _0x5d8013) {
                var _0x208f05 = undefined === _0x4e9162 || _0x4e9162;
                var _0x361114 = new _0x40b724(_0x5d8013);
                _0x361114.discardMdatData = !_0x208f05;
                return _0x361114;
            };
            _0x3644a2.createFile = _0x33efba;
        },
        0x249: (_0x15ab7b) => {
            function _0x11e42a(_0x4f4ea7, _0x586dc0, _0x407b16, _0x3acbc4) {
                var _0x3d39e5 = _0x586dc0 >= 1.5 * _0x407b16;
                return Math.round(_0x4f4ea7 / _0x407b16) + " " + _0x3acbc4 + (_0x3d39e5 ? "s" : "");
            }
            _0x15ab7b.exports = function (_0x463d46, _0x54b76e) {
                _0x54b76e = _0x54b76e || {};
                var _0x4e6c45;
                var _0x300538;
                var _0x9720f0 = typeof _0x463d46;
                if ("string" === _0x9720f0 && _0x463d46.length > 0x0) {
                    return (function (_0x543c1a) {
                        if (!((_0x543c1a = String(_0x543c1a)).length > 0x64)) {
                            var _0x2d8711 =
                                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                                    _0x543c1a
                                );
                            if (_0x2d8711) {
                                var _0x3c7b52 = parseFloat(_0x2d8711[0x1]);
                                switch ((_0x2d8711[0x2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 0x758fac300 * _0x3c7b52;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return _0x3c7b52 * 604800000;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return _0x3c7b52 * 86400000;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return _0x3c7b52 * 3600000;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return _0x3c7b52 * 60000;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return _0x3c7b52 * 0x3e8;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return _0x3c7b52;
                                    default:
                                        return;
                                }
                            }
                        }
                    })(_0x463d46);
                }
                if ("number" === _0x9720f0 && isFinite(_0x463d46)) {
                    return _0x54b76e.long
                        ? ((_0x4e6c45 = _0x463d46),
                          (_0x300538 = Math.abs(_0x4e6c45)) >= 86400000
                              ? _0x11e42a(_0x4e6c45, _0x300538, 86400000, "day")
                              : _0x300538 >= 3600000
                              ? _0x11e42a(_0x4e6c45, _0x300538, 3600000, "hour")
                              : _0x300538 >= 60000
                              ? _0x11e42a(_0x4e6c45, _0x300538, 60000, "minute")
                              : _0x300538 >= 0x3e8
                              ? _0x11e42a(_0x4e6c45, _0x300538, 0x3e8, "second")
                              : _0x4e6c45 + " ms")
                        : (function (_0x2c0227) {
                              var _0x447134 = Math.abs(_0x2c0227);
                              return _0x447134 >= 86400000
                                  ? Math.round(_0x2c0227 / 86400000) + "d"
                                  : _0x447134 >= 3600000
                                  ? Math.round(_0x2c0227 / 3600000) + "h"
                                  : _0x447134 >= 60000
                                  ? Math.round(_0x2c0227 / 60000) + "m"
                                  : _0x447134 >= 0x3e8
                                  ? Math.round(_0x2c0227 / 0x3e8) + "s"
                                  : _0x2c0227 + "ms";
                          })(_0x463d46);
                }
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0x463d46));
            };
        },
        0x25e: (_0x14634b) => {
            var _0x580874;
            var _0x1f5f53;
            var _0x366e9c = (_0x14634b.exports = {});
            function _0x17b6aa() {
                throw new Error("setTimeout has not been defined");
            }
            function _0x501f18() {
                throw new Error("clearTimeout has not been defined");
            }
            function _0x4714a1(_0x409e74) {
                if (_0x580874 === setTimeout) {
                    return setTimeout(_0x409e74, 0x0);
                }
                if ((_0x580874 === _0x17b6aa || !_0x580874) && setTimeout) {
                    _0x580874 = setTimeout;
                    return setTimeout(_0x409e74, 0x0);
                }
                try {
                    return _0x580874(_0x409e74, 0x0);
                } catch (_0x23263c) {
                    try {
                        return _0x580874.call(null, _0x409e74, 0x0);
                    } catch (_0x52edb0) {
                        return _0x580874.call(this, _0x409e74, 0x0);
                    }
                }
            }
            !(function () {
                try {
                    _0x580874 = "function" == typeof setTimeout ? setTimeout : _0x17b6aa;
                } catch (_0x32d014) {
                    _0x580874 = _0x17b6aa;
                }
                try {
                    _0x1f5f53 = "function" == typeof clearTimeout ? clearTimeout : _0x501f18;
                } catch (_0xe76cb7) {
                    _0x1f5f53 = _0x501f18;
                }
            })();
            var _0x1c7f5c;
            var _0x117beb = [];
            var _0x1aa8e9 = false;
            var _0x5ac7af = -0x1;
            function _0x54e609() {
                if (_0x1aa8e9 && _0x1c7f5c) {
                    _0x1aa8e9 = false;
                    if (_0x1c7f5c.length) {
                        _0x117beb = _0x1c7f5c.concat(_0x117beb);
                    } else {
                        _0x5ac7af = -0x1;
                    }
                    if (_0x117beb.length) {
                        _0x12f691();
                    }
                }
            }
            function _0x12f691() {
                if (!_0x1aa8e9) {
                    var _0x3bce81 = _0x4714a1(_0x54e609);
                    _0x1aa8e9 = true;
                    for (var _0x3aa775 = _0x117beb.length; _0x3aa775; ) {
                        _0x1c7f5c = _0x117beb;
                        for (_0x117beb = []; ++_0x5ac7af < _0x3aa775; ) {
                            if (_0x1c7f5c) {
                                _0x1c7f5c[_0x5ac7af].run();
                            }
                        }
                        _0x5ac7af = -0x1;
                        _0x3aa775 = _0x117beb.length;
                    }
                    _0x1c7f5c = null;
                    _0x1aa8e9 = false;
                    (function (_0x3b3008) {
                        if (_0x1f5f53 === clearTimeout) {
                            return clearTimeout(_0x3b3008);
                        }
                        if ((_0x1f5f53 === _0x501f18 || !_0x1f5f53) && clearTimeout) {
                            _0x1f5f53 = clearTimeout;
                            return clearTimeout(_0x3b3008);
                        }
                        try {
                            return _0x1f5f53(_0x3b3008);
                        } catch (_0x509d55) {
                            try {
                                return _0x1f5f53.call(null, _0x3b3008);
                            } catch (_0x34b6d5) {
                                return _0x1f5f53.call(this, _0x3b3008);
                            }
                        }
                    })(_0x3bce81);
                }
            }
            function _0x5a0812(_0x32b5ce, _0xeb548f) {
                this.fun = _0x32b5ce;
                this.array = _0xeb548f;
            }
            function _0x4d02e1() {}
            _0x366e9c.nextTick = function (_0x15bce4) {
                var _0xefc7d6 = new Array(arguments.length - 0x1);
                if (arguments.length > 0x1) {
                    for (var _0x2b532d = 0x1; _0x2b532d < arguments.length; _0x2b532d++) {
                        _0xefc7d6[_0x2b532d - 0x1] = arguments[_0x2b532d];
                    }
                }
                _0x117beb.push(new _0x5a0812(_0x15bce4, _0xefc7d6));
                if (!(0x1 !== _0x117beb.length || _0x1aa8e9)) {
                    _0x4714a1(_0x12f691);
                }
            };
            _0x5a0812.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            _0x366e9c.title = "browser";
            _0x366e9c.browser = true;
            _0x366e9c.env = {};
            _0x366e9c.argv = [];
            _0x366e9c.version = "";
            _0x366e9c.versions = {};
            _0x366e9c.on = _0x4d02e1;
            _0x366e9c.addListener = _0x4d02e1;
            _0x366e9c.once = _0x4d02e1;
            _0x366e9c.off = _0x4d02e1;
            _0x366e9c.removeListener = _0x4d02e1;
            _0x366e9c.removeAllListeners = _0x4d02e1;
            _0x366e9c.emit = _0x4d02e1;
            _0x366e9c.prependListener = _0x4d02e1;
            _0x366e9c.prependOnceListener = _0x4d02e1;
            _0x366e9c.listeners = function (_0x26f171) {
                return [];
            };
            _0x366e9c.binding = function (_0x2b8a16) {
                throw new Error("process.binding is not supported");
            };
            _0x366e9c.cwd = function () {
                return "/";
            };
            _0x366e9c.chdir = function (_0x5eda1e) {
                throw new Error("process.chdir is not supported");
            };
            _0x366e9c.umask = function () {
                return 0x0;
            };
        },
        0x254: (_0x3f0f54, _0x31799c, _0x3156f7) => {
            let _0xcfdea8;
            _0x3f0f54.exports =
                "function" == typeof queueMicrotask
                    ? queueMicrotask.bind("undefined" != typeof window ? window : _0x3156f7.g)
                    : (_0x5df924) =>
                          (_0xcfdea8 || (_0xcfdea8 = Promise.resolve())).then(_0x5df924)["catch"]((_0x2df4ad) =>
                              setTimeout(() => {
                                  throw _0x2df4ad;
                              }, 0x0)
                          );
        },
        0x23: (_0x54114d) => {
            _0x54114d.exports = function (_0x42879b) {
                const _0x3bf6a7 = +Date.now();
                const _0x44a9ed = 0xa * (_0x42879b || 0x5);
                const _0x56bc6a = [0x0];
                let _0xbbdc7e = 0x1;
                let _0x7f235 = ((((+Date.now() - _0x3bf6a7) / 0x64) & 0xffff) - 0x1) & 0xffff;
                return function (_0x33b93f) {
                    const _0x406d80 = ((+Date.now() - _0x3bf6a7) / 0x64) & 0xffff;
                    let _0x12b63f = (_0x406d80 - _0x7f235) & 0xffff;
                    if (_0x12b63f > _0x44a9ed) {
                        _0x12b63f = _0x44a9ed;
                    }
                    for (_0x7f235 = _0x406d80; _0x12b63f--; ) {
                        if (_0xbbdc7e === _0x44a9ed) {
                            _0xbbdc7e = 0x0;
                        }
                        _0x56bc6a[_0xbbdc7e] = _0x56bc6a[0x0 === _0xbbdc7e ? _0x44a9ed - 0x1 : _0xbbdc7e - 0x1];
                        _0xbbdc7e++;
                    }
                    if (_0x33b93f) {
                        _0x56bc6a[_0xbbdc7e - 0x1] += _0x33b93f;
                    }
                    const _0x504d58 = _0x56bc6a[_0xbbdc7e - 0x1];
                    const _0x9231d2 = _0x56bc6a.length < _0x44a9ed ? 0x0 : _0x56bc6a[_0xbbdc7e === _0x44a9ed ? 0x0 : _0xbbdc7e];
                    return _0x56bc6a.length < 0xa ? _0x504d58 : (0xa * (_0x504d58 - _0x9231d2)) / _0x56bc6a.length;
                };
            };
        },
        0x284: (_0x738d94) => {
            "use strict";

            _0x738d94.exports = function (_0x5cf880 = 0x10000) {
                _0x5cf880 = _0x5cf880 || 0x10000;
                var _0x3fe40d = new Uint8Array(0x0);
                return new TransformStream({
                    transform(_0x17c872, _0x40d4c4) {
                        for (
                            _0x3fe40d = (function (_0x4e4525 = []) {
                                if (!_0x4e4525 || !_0x4e4525.length) {
                                    return false;
                                }
                                var _0x428f63 = 0x0;
                                _0x4e4525.forEach((_0x298693) => (_0x428f63 += _0x298693.length));
                                var _0x5d4bca = new Uint8Array(_0x428f63);
                                var _0x54c4e1 = 0x0;
                                _0x4e4525.forEach((_0x192040) => {
                                    _0x5d4bca.set(_0x192040, _0x54c4e1);
                                    _0x54c4e1 += _0x192040.length;
                                });
                                return _0x5d4bca;
                            })([_0x3fe40d, _0x17c872]);
                            _0x3fe40d.length >= _0x5cf880;

                        ) {
                            const _0x4ba7b3 = _0x3fe40d.slice(0x0, _0x5cf880);
                            _0x40d4c4.enqueue(_0x4ba7b3);
                            _0x3fe40d = _0x3fe40d.slice(_0x5cf880);
                        }
                    },
                    flush(_0x47aa48) {
                        if (_0x3fe40d.length > 0x0) {
                            _0x47aa48.enqueue(_0x3fe40d);
                        }
                    },
                });
            };
        },
        0x25b: (_0x1022d9) => {
            _0x1022d9.exports = {
                encode: (_0x4e1271) => {
                    var _0x37f7da;
                    var _0x42f6a3;
                    var _0x11afdd;
                    var _0x4ff331;
                    var _0x3ab32c;
                    var _0x256984;
                    var _0x2471ec;
                    var _0x2343b5 = "";
                    var _0x45a9be = 0x0;
                    for (
                        _0x4e1271 = (function (_0x1b7656) {
                            _0x1b7656 = _0x1b7656.replace(/\r\n/g, "\n");
                            var _0x326670 = "";
                            for (var _0x227b90 = 0x0; _0x227b90 < _0x1b7656.length; _0x227b90++) {
                                var _0x408d8f = _0x1b7656.charCodeAt(_0x227b90);
                                if (_0x408d8f < 0x80) {
                                    _0x326670 += String.fromCharCode(_0x408d8f);
                                } else if (_0x408d8f < 0x800) {
                                    _0x326670 += String.fromCharCode((_0x408d8f >> 0x6) | 0xc0);
                                    _0x326670 += String.fromCharCode((0x3f & _0x408d8f) | 0x80);
                                } else {
                                    _0x326670 += String.fromCharCode((_0x408d8f >> 0xc) | 0xe0);
                                    _0x326670 += String.fromCharCode(((_0x408d8f >> 0x6) & 0x3f) | 0x80);
                                    _0x326670 += String.fromCharCode((0x3f & _0x408d8f) | 0x80);
                                }
                            }
                            return _0x326670;
                        })(_0x4e1271);
                        _0x45a9be < _0x4e1271.length;

                    ) {
                        _0x4ff331 = (_0x37f7da = _0x4e1271.charCodeAt(_0x45a9be++)) >> 0x2;
                        _0x3ab32c = ((0x3 & _0x37f7da) << 0x4) | ((_0x42f6a3 = _0x4e1271.charCodeAt(_0x45a9be++)) >> 0x4);
                        _0x256984 = ((0xf & _0x42f6a3) << 0x2) | ((_0x11afdd = _0x4e1271.charCodeAt(_0x45a9be++)) >> 0x6);
                        _0x2471ec = 0x3f & _0x11afdd;
                        if (isNaN(_0x42f6a3)) {
                            _0x256984 = _0x2471ec = 0x40;
                        } else if (isNaN(_0x11afdd)) {
                            _0x2471ec = 0x40;
                        }
                        _0x2343b5 +=
                            "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x4ff331) +
                            "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x3ab32c) +
                            "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x256984) +
                            "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x2471ec);
                    }
                    return _0x2343b5;
                },
                decode: (_0x4cb852) => {
                    var _0x2b0dd8;
                    var _0x116189;
                    var _0x2cd2f8;
                    var _0x8925f4;
                    var _0x37ed74;
                    var _0x586587;
                    var _0xe05c60 = "";
                    var _0x457e06 = 0x0;
                    for (_0x4cb852 = _0x4cb852.replace(/[^A-Za-z0-9\+\/\=]/g, ""); _0x457e06 < _0x4cb852.length; ) {
                        _0x2b0dd8 =
                            ("RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x4cb852.charAt(_0x457e06++)) << 0x2) |
                            ((_0x8925f4 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x4cb852.charAt(_0x457e06++))) >> 0x4);
                        _0x116189 =
                            ((0xf & _0x8925f4) << 0x4) |
                            ((_0x37ed74 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x4cb852.charAt(_0x457e06++))) >> 0x2);
                        _0x2cd2f8 =
                            ((0x3 & _0x37ed74) << 0x6) |
                            (_0x586587 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x4cb852.charAt(_0x457e06++)));
                        _0xe05c60 += String.fromCharCode(_0x2b0dd8);
                        if (0x40 != _0x37ed74) {
                            _0xe05c60 += String.fromCharCode(_0x116189);
                        }
                        if (0x40 != _0x586587) {
                            _0xe05c60 += String.fromCharCode(_0x2cd2f8);
                        }
                    }
                    _0xe05c60 = (function (_0x468dab) {
                        var _0x3c7113 = "";
                        var _0x3ee83c = 0x0;
                        var _0x1d5bb5 = 0x0;
                        for (var _0x27cf9d = 0x0; _0x3ee83c < _0x468dab.length; ) {
                            if ((_0x1d5bb5 = _0x468dab.charCodeAt(_0x3ee83c)) < 0x80) {
                                _0x3c7113 += String.fromCharCode(_0x1d5bb5);
                                _0x3ee83c++;
                            } else if (_0x1d5bb5 > 0xbf && _0x1d5bb5 < 0xe0) {
                                _0x27cf9d = _0x468dab.charCodeAt(_0x3ee83c + 0x1);
                                _0x3c7113 += String.fromCharCode(((0x1f & _0x1d5bb5) << 0x6) | (0x3f & _0x27cf9d));
                                _0x3ee83c += 0x2;
                            } else {
                                _0x27cf9d = _0x468dab.charCodeAt(_0x3ee83c + 0x1);
                                c3 = _0x468dab.charCodeAt(_0x3ee83c + 0x2);
                                _0x3c7113 += String.fromCharCode(((0xf & _0x1d5bb5) << 0xc) | ((0x3f & _0x27cf9d) << 0x6) | (0x3f & c3));
                                _0x3ee83c += 0x3;
                            }
                        }
                        return _0x3c7113;
                    })(_0xe05c60);
                    return _0xe05c60;
                },
            };
        },
        0x190: (_0xc5f7d8) => {
            _0xc5f7d8.exports.size = (_0x3102c8 = 0x0, _0x285476 = false) => {
                var _0x17345b = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
                if (0x0 == _0x3102c8) {
                    return "0 Byte";
                }
                var _0x1b35a8 = parseInt(Math.floor(Math.log(_0x3102c8) / Math.log(0x400)));
                return _0x285476
                    ? Math.floor((_0x3102c8 / Math.pow(0x400, _0x1b35a8)).toFixed(0x2)) + " " + _0x17345b[_0x1b35a8]
                    : (_0x3102c8 / Math.pow(0x400, _0x1b35a8)).toFixed(0x2) + " " + _0x17345b[_0x1b35a8];
            };
            _0xc5f7d8.exports.bps = (_0x7ce42a = 0x0, _0x24fc47 = 0x1) => {
                if (0x0 === _0x7ce42a) {
                    return "0 bps";
                }
                const _0x47150d = ["bps", "Kbps", "Mbps", "Gbps", "Tbps"];
                let _0x172adb = 0x0;
                let _0x277bff = (0x8 * _0x7ce42a) / _0x24fc47;
                for (; _0x277bff >= 0x3e8 && _0x172adb < _0x47150d.length - 0x1; ) {
                    _0x172adb++;
                    _0x277bff /= 0x3e8;
                }
                var _0x543047 = _0x277bff.toFixed(0x2);
                var _0x1f3b36 = ("" + _0x543047).toString().length;
                if (_0x1f3b36 > 0x4) {
                    _0x543047 = 0x5 == _0x1f3b36 ? _0x277bff.toFixed(0x1) : Math.floor(_0x543047);
                }
                return _0x543047 + " " + _0x47150d[_0x172adb];
            };
            _0xc5f7d8.exports.kbs = (_0x2e3457 = 0x0, _0x2d33ee = 0x1) => {
                if (0x0 === _0x2e3457) {
                    return "0 b/s";
                }
                const _0x33f6a7 = (0x8 * _0x2e3457) / _0x2d33ee;
                return _0x33f6a7 < 0x3e8 ? _0x33f6a7.toFixed(0x2) + " b/s" : (_0x33f6a7 / 0x3e8).toFixed(0x2) + " Kb/s";
            };
            _0xc5f7d8.exports.mbs = (_0x537713 = 0x0, _0x170e45 = 0x1) => {
                if (0x0 === _0x537713) {
                    return "0 b/s";
                }
                const _0xe4e64 = (0x8 * _0x537713) / _0x170e45;
                return _0xe4e64 < 0x3e8
                    ? _0xe4e64.toFixed(0x2) + " b/s"
                    : _0xe4e64 < 0xf4240
                    ? (_0xe4e64 / 0x3e8).toFixed(0x2) + " Kb/s"
                    : (_0xe4e64 / 0xf4240).toFixed(0x2) + " Mb/s";
            };
        },
        0x172: (_0x36ed4d, _0x3c2c2c, _0x5a936a) => {
            const _0x4b3ee0 = _0x5a936a(0x1f7);
            _0x36ed4d.exports = function () {
                var _0x300b17 = null;
                var _0xc6b069 = {
                    name: "AES-CTR",
                    length: 0x80,
                };
                const _0x2364cf = ["encrypt", "decrypt"];
                const _0x4ab103 = new TextEncoder();
                this.expandKey = async (_0x1cb06d) => {
                    if (!_0x1cb06d) {
                        return false;
                    }
                    var _0x39c2fb = _0x4ab103.encode(_0x4b3ee0(_0x1cb06d));
                    _0xc6b069.counter = new Uint8Array(_0x39c2fb.slice(0x0, 0x10));
                    try {
                        _0x300b17 = await crypto.subtle.importKey("raw", _0x39c2fb, _0xc6b069, false, _0x2364cf);
                        return true;
                    } catch ({ message: _0x160c89 }) {
                        return false;
                    }
                };
                this.encrypt = async (_0x5d5177) => {
                    if (!_0x5d5177 || !_0x300b17) {
                        return _0x5d5177;
                    }
                    if ("string" == typeof _0x5d5177) {
                        _0x5d5177 = _0x4ab103.encode(_0x5d5177);
                    }
                    var _0x4fc76e = await crypto.subtle.encrypt(_0xc6b069, _0x300b17, _0x5d5177);
                    return Array.from(new Uint8Array(_0x4fc76e))
                        .map((_0x5a568a) => String.fromCharCode(_0x5a568a))
                        .join("");
                };
                this.decrypt = async (_0x253ea8) => {
                    if (!_0x253ea8 || !_0x300b17) {
                        return _0x253ea8;
                    }
                    if ("string" == typeof _0x253ea8) {
                        return (async function (_0x37d646) {
                            var _0x498bbb = window.atob(_0x37d646);
                            var _0x487be6 = new Uint8Array((_0x498bbb.match(/[\s\S]/g) || []).map((_0x2de2d0) => _0x2de2d0.charCodeAt(0x0)));
                            var _0x26a697 = await crypto.subtle.decrypt(_0xc6b069, _0x300b17, _0x487be6);
                            return new TextDecoder().decode(_0x26a697);
                        })(_0x253ea8);
                    }
                    var _0x21e521 = await crypto.subtle.decrypt(_0xc6b069, _0x300b17, _0x253ea8);
                    return new Uint8Array(_0x21e521);
                };
            };
        },
        0x2ec: (_0x4cfa22) => {
            "use strict";

            _0x4cfa22.exports = (() => {
                if ("undefined" == typeof window || !window.navigator) {
                    return false;
                }
                const _0x278a78 = navigator.userAgent.toLowerCase();
                return (
                    (navigator?.["vendor"]?.["indexOf"]("Apple") > -0x1 && -0x1 == _0x278a78.indexOf("crios") && -0x1 == _0x278a78.indexOf("fxios")) ||
                    (_0x278a78.includes("safari") && !_0x278a78.includes("chrome")) ||
                    ("safari" in window && "pushNotification" in window.safari)
                );
            })();
        },
        0x161: (_0x40770d) => {
            _0x40770d.exports = (_0x5d7bd1, _0xd71002) => {
                if (document.querySelector("iframe.notify")) {
                    return;
                }
                const _0x10c90d = document.createElement("iframe");
                _0x10c90d.className = "notify";
                _0x10c90d.style.position = "fixed";
                _0x10c90d.style.top = "0";
                _0x10c90d.style.left = "0";
                _0x10c90d.style.width = "100%";
                _0x10c90d.style.height = "100%";
                _0x10c90d.style.border = "none";
                _0x10c90d.style.zIndex = "9999";
                _0x10c90d.srcdoc =
                    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' +
                    _0x5d7bd1 +
                    '</title><style>body,html{height:100%;margin:0;font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center}.modal{background-color:#fff;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1);width:90%;min-width:360px;max-width:500px;overflow:hidden}.modal-header{background-color:#f44336;color:#fff;padding:15px;font-size:1.5em;font-weight:700;text-align:center}.modal-body{padding:20px;font-size:1.2em;line-height:1.6;text-align:center}@media (max-width:600px){.modal-header{font-size:1.3em}.modal-body{font-size:1em}}</style></head><body><div class="modal"><div class="modal-header">' +
                    _0x5d7bd1 +
                    '</div><div class="modal-body">' +
                    _0xd71002 +
                    "</div></div></body></html>";
                document.body.appendChild(_0x10c90d);
                return _0x10c90d;
            };
        },
        0x3bb: (_0x16eebc, _0x304faf, _0x3f7deb) => {
            const _0x195df8 = _0x3f7deb(0x341)("request");
            _0x16eebc.exports = async (_0x48b0f7 = null, _0x279fe8 = {}) => {
                try {
                    var _0x5c6616 = await fetch(_0x48b0f7, _0x279fe8);
                } catch (_0x599787) {
                    _0x195df8(_0x599787?.["message"]);
                    return false;
                }
                return !!_0x5c6616.ok && _0x5c6616;
            };
        },
        0x26a: (_0x462599) => {
            _0x462599.exports = (_0x465e36 = 0x0) => {
                var _0x513742 = 0x0;
                var _0x205c9b = 0x0;
                if ((_0x465e36 = Number(_0x465e36)) >= 0x3c) {
                    _0x205c9b = _0x465e36 / 0x3c;
                    _0x465e36 = parseInt(_0x465e36 % 0x3c);
                    if (_0x205c9b > 0x3c) {
                        _0x513742 = parseInt(_0x205c9b / 0x3c);
                        _0x205c9b = parseInt(_0x205c9b % 0x3c);
                    } else {
                        _0x205c9b = parseInt(_0x205c9b);
                    }
                } else {
                    _0x465e36 = parseInt(_0x465e36);
                }
                return _0x513742
                    ? ("000" + _0x513742).slice(-2) + ":" + ("000" + _0x205c9b).slice(-2) + ":" + ("000" + _0x465e36).slice(-2)
                    : _0x205c9b
                    ? "00:" + ("000" + _0x205c9b).slice(-2) + ":" + ("000" + _0x465e36).slice(-2)
                    : _0x465e36
                    ? "00:00:" + ("000" + _0x465e36).slice(-2)
                    : "00:00:00";
            };
        },
        0xb9: (_0x4892f9) => {
            _0x4892f9.exports = () => Math.random().toString(0x24).replace("0.", "");
        },
        0x2c: (_0x506312, _0xe3a526, _0x5396ae) => {
            const _0x36dbd7 = _0x5396ae(0x341)("media");
            const _0x5e957c = _0x5396ae(0xdb);
            const _0x14df10 = _0x5396ae(0x2a3);
            const _0x53eff1 = _0x5396ae(0x243);
            const _0x4fe1ac = _0x5396ae(0x2d4);
            const _0x5c4462 = _0x5396ae(0x161);
            const _0x2b2bea = _0x5396ae(0x39f);
            _0x506312.exports = function (_0x562e9b = "player") {
                var _0x4f5841 = {};
                const _0x39ba4a = "canPlayType" in document.createElement("video");
                const _0x5d9ce7 = window.isSecureContext || window?.["crypto"]?.["subtle"];
                const _0x136bdf = top.location != self.location;
                const _0x32dd3b = new _0x5e957c();
                var _0x46e6aa = null;
                var _0x46019a = null;
                var _0x405453 = false;
                this.player = null;
                this.setup = async (_0x6184ae = {}) => {
                    if (!this.isSupported()) {
                        return this.destroy("Your browser does not support player");
                    }
                    if (!_0x136bdf) {
                        return this.destroy("What are you doing here? This is not the way we meet.");
                    }
                    if (!_0x5d9ce7 && !(await _0x14df10("https://iamcdn.net/player/polyfills.bundle.js"))) {
                        return this.destroy(
                            "This video player can't work properly on unsecure websites. For your safety, please use a website that is protected with HTTPS."
                        );
                    }
                    var _0x2696d8 = {
                        ..._0x6184ae,
                    };
                    _0x36dbd7("Setup");
                    (_0x4f5841 = _0x2696d8).sources = _0x4f5841?.["sources"]?.["filter"]((_0xd536a) => _0xd536a && ["mp4"].includes(_0xd536a?.["type"])) || [];
                    if (!_0x4f5841.sources.length) {
                        return this.destroy("No playable sources found");
                    }
                    const { slug: _0x193ce6, md5_id: _0xdd0529 } = _0x4f5841;
                    var _0x1eca6c = {
                        options: _0x4f5841,
                    };
                    (_0x46e6aa = new _0x53eff1(_0x1eca6c)).start("wss://hello.idocdn.com:30" + (String(_0xdd0529 % 0x10).padStart(0x2, "0") || 0x0));
                    if (_0x4f5841.preview) {
                        var _0x104f34 = _0x4fe1ac("https://cdn.freeimagecdn.net/" + _0x193ce6, _0xdd0529);
                        if (_0x104f34) {
                            if (!_0x4f5841.tracks) {
                                _0x4f5841.tracks = [];
                            }
                            _0x4f5841.tracks.push({
                                file: _0x104f34,
                                kind: "thumbnails",
                            });
                        }
                    }
                    if (_0x4f5841.tracks) {
                        _0x4f5841.tracks = _0x4f5841.tracks.map((_0xee7346) =>
                            _0xee7346.label ? ((_0xee7346.label = decodeURIComponent(_0xee7346.label)), _0xee7346) : _0xee7346
                        );
                    }
                    await _0x32dd3b.register();
                    _0x4f5841.videoId = _0x4f5841.id;
                    delete _0x4f5841.id;
                    _0x46019a = new _0x2b2bea({
                        ...this,
                        id: _0x562e9b,
                        options: _0x4f5841,
                        tracker: _0x46e6aa,
                    });
                    this.player = _0x46019a.setup();
                    return true;
                };
                this.isSupported = () => _0x39ba4a && window.jwplayer;
                this.destroy = (_0x2d7f17) => {
                    if (!_0x405453) {
                        _0x36dbd7("Destroy");
                        _0x405453 = true;
                        _0x46019a?.["destroy"]();
                        _0x46019a = null;
                        _0x32dd3b.destroy();
                        _0x4f5841 = [];
                        _0x46e6aa?.["destroy"]();
                        _0x46e6aa = null;
                        return _0x5c4462("Notification", _0x2d7f17 || "Player has been destroyed");
                    }
                };
            };
        },
        0xdb: (_0x4c0bc8, _0x9d6119, _0x790174) => {
            const _0x1f0d9f = _0x790174(0x341)("service");
            _0x4c0bc8.exports = function (_0x33f071 = true) {
                const _0xcd31c0 = "serviceWorker" in navigator;
                var _0x5b4111 = null;
                var _0x2628e1 = null;
                var _0x836e54 = false;
                function _0x5b1e96() {
                    if (_0x5b4111 && _0x33f071 && !_0x836e54) {
                        _0x5b4111.postMessage("ping");
                        return (_0x2628e1 = setTimeout(() => _0x5b1e96(), 0x2710));
                    }
                }
                var _0x59425b = {
                    scope: "/",
                };
                this.register = (_0xece7c2 = "/sw.js", _0xd061 = _0x59425b) =>
                    new Promise(async (_0x357f22) => {
                        if (!_0xcd31c0) {
                            return _0x357f22(false);
                        }
                        _0x1f0d9f("register");
                        try {
                            var _0x2c2e23 = await navigator.serviceWorker.register(_0xece7c2, _0xd061);
                        } catch ({ message: _0x37ca74 }) {
                            _0x1f0d9f("[ERR] %s", _0x37ca74);
                            return _0x357f22(false);
                        }
                        if ((_0x5b4111 = _0x2c2e23.active)) {
                            _0x1f0d9f("avtive");
                            _0x5b1e96();
                            return _0x357f22(_0x5b4111);
                        }
                        var _0x37ca91 = _0x2c2e23.installing || _0x2c2e23.waiting;
                        _0x37ca91.addEventListener("statechange", (_0x3fb65c) => {
                            if ("activated" == _0x37ca91.state) {
                                _0x37ca91.removeEventListener("statechange", _0x3fb65c);
                                _0x5b4111 = _0x2c2e23.active;
                                _0x1f0d9f("avtive");
                                _0x5b1e96();
                                return _0x357f22(_0x5b4111);
                            }
                        });
                    });
                this.destroy = () => {
                    if (!_0x836e54) {
                        _0x1f0d9f("Destroy");
                        _0x836e54 = true;
                        clearTimeout(_0x2628e1);
                    }
                };
            };
        },
        0x32c: (_0x53c3d0, _0x328300, _0x39909b) => {
            const _0x5b455c = _0x39909b(0x341)("mp4:native");
            const _0x8de10e = _0x39909b(0x172);
            const _0x1d90a9 = _0x39909b(0x30a);
            const _0x3f38ab = _0x39909b(0x11);
            const _0x5da0ab = _0x39909b(0x350);
            const _0x461895 = _0x39909b(0x269);
            const _0x294e2d = _0x39909b(0x305);
            _0x53c3d0.exports = function (_0x9c3d7f = {}) {
                const {
                    id: _0x26c67d,
                    options: _0x549a0d,
                    options: { videoId: _0x31cb54, slug: _0x386524, md5_id: _0x5ed7ba, domain: _0x5d1112, ads: _0x373c6c },
                    tracker: _0x1edaa4,
                } = _0x9c3d7f || {};
                var _0xaa55e7 = null;
                var _0x418c8d = 0x3;
                const _0x1bff00 =
                    ("MediaSource" in window && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.05M.08"')) ||
                    "" !== document.createElement("video").canPlayType('video/mp4; codecs="av01.0.05M.08"') ||
                    false;
                var _0x1215fc = new _0x3f38ab(_0x26c67d, _0x386524);
                const _0x1e7824 = new _0x8de10e();
                var _0x6579f9 = false;
                this.setup = async (_0x2ccb93 = 0x0) => {
                    var _0x370221 = {
                        ..._0x549a0d,
                    };
                    delete _0x370221.events;
                    if (!_0xaa55e7) {
                        await _0x1e7824.expandKey(_0x386524);
                    }
                    var _0x1d42d5 = {};
                    var _0xaef4e9 = _0x549a0d.sources.length;
                    _0x549a0d.sources = _0x549a0d.sources.sort((_0x5c05ef, _0x1cb688) => _0x5c05ef.size - _0x1cb688.size);
                    _0x549a0d.sources.forEach((_0x1202fd) => {
                        if (_0x1202fd && ("av1" != _0x1202fd.codec || _0x1bff00)) {
                            if (!_0x1d42d5[_0x1202fd.label]) {
                                _0x1d42d5[_0x1202fd.label] = [];
                            }
                            _0x1d42d5[_0x1202fd.label].push(_0x1202fd);
                        }
                    });
                    for (const _0x31086c in _0x1d42d5) {
                        if (("origin" == _0x31086c && _0xaef4e9 > 0x1) || ["1440p", "2160p"].includes(_0x31086c)) {
                            continue;
                        }
                        let _0x36341d = _0x1d42d5[_0x31086c];
                        _0x36341d = _0x36341d.sort((_0x2d1eef, _0x6bcfe2) => (_0x6bcfe2.status ? 0x1 : 0x0) - (_0x2d1eef.status ? 0x1 : 0x0));
                        let { file: _0x5729da, size: _0x34fd5a, type: _0x520999 } = _0x36341d.shift();
                        let _0x1ee99e = {
                            type: _0x520999,
                            label: _0x31086c,
                        };
                        if (_0x34fd5a) {
                            var _0x32aa4c = {
                                slug: _0x386524,
                                label: _0x31086c,
                                md5_id: _0x5ed7ba,
                                size: _0x34fd5a,
                            };
                            var _0x2508a9 = await _0x1e7824.encrypt(JSON.stringify(_0x32aa4c));
                            _0x2508a9 = btoa(btoa(_0x2508a9).replace(/=/g, "")).replace(/=/g, "");
                            _0x1ee99e.size = _0x34fd5a;
                            _0x1ee99e.file = "//" + _0x5d1112 + "/" + _0x31cb54 + "/" + _0x2508a9;
                        } else if (_0x5729da) {
                            _0x1ee99e.file = _0x5729da;
                        }
                        _0x370221.sources.push(_0x1ee99e);
                    }
                    return _0xaa55e7
                        ? (_0xaa55e7.load(_0x370221), _0xaa55e7.seek(_0x2ccb93), _0xaa55e7.play())
                        : (_0x5b455c("Setup"),
                          (_0xaa55e7 = jwplayer(_0x26c67d)).setup(_0x370221),
                          _0xaa55e7.on("ready", () => {
                              _0x5b455c("Ready");
                              _0x5da0ab();
                              if (!_0x2ccb93) {
                                  _0x1215fc.show();
                              }
                              if (_0x549a0d.addDownload) {
                                  _0x1d90a9("https://hellabyte.cloud/import/abyss/" + _0x386524);
                              }
                              if (_0x2ccb93) {
                                  _0xaa55e7.seek(_0x2ccb93);
                              }
                          }),
                          _0xaa55e7.on("play", () => {
                              _0x1edaa4?.["setPlaying"](true);
                          }),
                          _0xaa55e7.on("pause", () => {
                              _0x1edaa4?.["setPlaying"](false);
                          }),
                          _0xaa55e7.on("time", ({ currentTime: _0x2f9f3d }) => {
                              if (_0x2f9f3d > _0x2ccb93) {
                                  _0x418c8d = 0x3;
                              }
                              _0x2ccb93 = _0x2f9f3d;
                              _0x1215fc.setTime(_0x2f9f3d);
                          }),
                          _0xaa55e7.on("seek", (_0x55cdeb) => {
                              _0x2ccb93 = _0x55cdeb.offset;
                              _0x5b455c("Seek to %s", _0x2ccb93);
                          }),
                          _0xaa55e7.on("fullscreen", ({ fullscreen: _0x10e815 }) => {
                              _0x294e2d(_0x10e815, _0x373c6c?.["pop"] || []);
                          }),
                          _0xaa55e7.on("complete", () => {
                              _0x461895(_0x373c6c?.["banner"] || {});
                          }),
                          _0xaa55e7.on(
                              "error",
                              ({ message: _0x3a5993 }) => (
                                  _0x5b455c("[ERR]: %s", _0x3a5993), --_0x418c8d <= 0x0 ? this.destroy(_0x3a5993) : this.setup(_0x2ccb93)
                              )
                          ),
                          _0xaa55e7.on("remove", () => {
                              _0x5b455c("Player remove");
                              this.destroy();
                          }),
                          _0xaa55e7);
                };
                this.destroy = (_0x4bb52b) => {
                    if (!_0x6579f9) {
                        _0x5b455c("Destroy");
                        _0x6579f9 = true;
                        _0xaa55e7?.["remove"]?.();
                        _0xaa55e7 = null;
                        _0x1215fc?.["destroy"]?.();
                        _0x1215fc = null;
                        return _0x9c3d7f.destroy(_0x4bb52b);
                    }
                };
            };
        },
        0x17f: (_0x4d339f, _0x398aab, _0xc340db) => {
            const _0x3fae8c = _0xc340db(0x341)("mp4:box");
            const _0x25153e = _0xc340db(0x35e);
            const _0x186b03 = _0xc340db(0x1c8);
            const _0x1e38d5 = _0xc340db(0x389);
            const _0x43ca82 = _0xc340db(0x30a);
            const _0x1fa78d = _0xc340db(0x11);
            const _0x8a37e2 = _0xc340db(0x350);
            const _0x36ed49 = _0xc340db(0x269);
            const _0x51f37b = _0xc340db(0x305);
            _0x4d339f.exports = function (_0x1b296f) {
                const {
                    id: _0x19dc61,
                    stores: _0xc533db,
                    bitfields: _0x4b4efb,
                    request: _0x250fb2,
                    speed: _0x34cf81,
                    chunkLength: _0x4ba7fb,
                    chunkLengthDownload: _0x1e7686,
                    options: _0x443b89,
                    options: { slug: _0x45be62, ads: _0x52140f },
                    tracker: _0x569bf4,
                } = _0x1b296f || {};
                const _0x3f163f =
                    MediaSource.isTypeSupported('video/mp4; codecs="av01.0.05M.08"') ||
                    "" !== document.createElement("video").canPlayType('video/mp4; codecs="av01.0.05M.08"') ||
                    false;
                var _0x5a7e0b;
                var _0x3d76ec;
                var _0xe2d736;
                var _0x4ec507 = null;
                var _0x380344 = [];
                var _0x305b9f = 0x0;
                var _0xaf912d = new _0x1fa78d(_0x19dc61, _0x45be62);
                const _0x3412f6 = {};
                var _0x455561 = false;
                const _0x25abca = (this.setup = (_0x2f1391 = 0x0) => {
                    if (!("MediaSource" in window)) {
                        return this.destroy("MediaSource not support", true);
                    }
                    if (!_0x4ec507) {
                        _0x3fae8c("Setup");
                        if ((_0x4ec507 = jwplayer(_0x19dc61)).isSetup) {
                            _0x196ca2(_0x4ec507, _0x2f1391);
                        }
                    }
                    const _0x3681c3 = new MediaSource();
                    _0x3681c3.addEventListener(
                        "sourceopen",
                        () => (
                            _0x3fae8c("sourceopen"),
                            _0x2f1391 && _0x4ec507 && _0x4ec507.seek(_0x2f1391),
                            (function () {
                                const _0x39e236 = _0x4ec507.ms;
                                (_0x5a7e0b = _0x1e38d5.createFile()).onReady = (_0x194cd0) => (
                                    (_0x3d76ec = _0x194cd0),
                                    _0x194cd0.isFragmented
                                        ? (_0x39e236.duration = _0x194cd0.fragment_duration / _0x194cd0.timescale)
                                        : (_0x39e236.duration = _0x194cd0.duration / _0x194cd0.timescale),
                                    _0x2f51ac(),
                                    (function (_0x67a36b) {
                                        for (var _0x4ea758 = 0x0; _0x4ea758 < _0x67a36b.tracks.length; _0x4ea758++) {
                                            _0x352371(_0x67a36b.tracks[_0x4ea758]);
                                        }
                                        return (function () {
                                            var _0x802d9e = _0x5a7e0b.initializeSegmentation();
                                            for (var _0x3317c6 = 0x0; _0x3317c6 < _0x802d9e.length; _0x3317c6++) {
                                                var _0x1b8a7e = _0x802d9e[_0x3317c6].user;
                                                if (0x0 === _0x3317c6) {
                                                    _0x1b8a7e.ms.pendingInits = 0x0;
                                                }
                                                _0x1b8a7e.addEventListener("updateend", _0x555f50);
                                                _0x1b8a7e.appendBuffer(_0x802d9e[_0x3317c6].buffer);
                                                _0x1b8a7e.segmentIndex = 0x0;
                                                _0x1b8a7e.ms.pendingInits++;
                                            }
                                        })();
                                    })(_0x194cd0)
                                );
                                _0x5a7e0b.onSegment = (_0x4078a6, _0x45c42b, _0x2a9ae1, _0x1c3ed9, _0x2e1c17) => {
                                    var _0x15cd80 = {
                                        id: _0x4078a6,
                                        buffer: _0x2a9ae1,
                                        sampleNum: _0x1c3ed9,
                                        is_last: _0x2e1c17,
                                    };
                                    _0x45c42b.segmentIndex++;
                                    _0x45c42b.pendingAppends.push(_0x15cd80);
                                    _0x48e282.call(_0x45c42b, true, false);
                                };
                                const _0x556397 = _0x4ec507?.["getCurrentQuality"]() || 0x0;
                                _0xe2d736 = -0x1 == _0x556397 ? 0x0 : _0x556397;
                                const { size: _0x14c15c, label: _0x12110c } = _0x380344[_0xe2d736];
                                const _0x10254e = _0xc533db[_0x12110c];
                                var _0x331459 = {
                                    start: 0x0,
                                };
                                if (!(_0x10254e && _0x10254e.length == _0x14c15c)) {
                                    _0xc533db[_0x12110c] = new _0x25153e(_0x4ba7fb, {
                                        length: _0x14c15c,
                                    });
                                    _0x4b4efb[_0x12110c] = new _0x186b03["default"](Math.ceil(_0x14c15c / _0x4ba7fb));
                                }
                                return _0x41f4bc({
                                    label: _0x12110c,
                                    range: _0x331459,
                                });
                            })()
                        )
                    );
                    _0x3681c3.addEventListener("sourceclose", () => _0x3fae8c("sourceclose"));
                    _0x4ec507.ms = _0x3681c3;
                    _0x4ec507.objectUrl = URL.createObjectURL(_0x3681c3);
                    var _0x1082d5 = {
                        ..._0x443b89,
                    };
                    _0x380344 = _0x1082d5.sources = [];
                    delete _0x1082d5.events;
                    var _0x3cb63f = {};
                    var _0x35577d = _0x443b89.sources.length;
                    _0x443b89.sources = _0x443b89.sources.sort((_0x178548, _0x30ca2f) => _0x178548.size - _0x30ca2f.size);
                    _0x443b89.sources.forEach((_0x795843) => {
                        if (_0x795843 && ("av1" != _0x795843.codec || _0x3f163f)) {
                            if (!_0x3cb63f[_0x795843.label]) {
                                _0x3cb63f[_0x795843.label] = [];
                            }
                            _0x3cb63f[_0x795843.label].push(_0x795843);
                        }
                    });
                    for (const _0x20ba2f in _0x3cb63f) {
                        if ("origin" == _0x20ba2f && _0x35577d > 0x1) {
                            continue;
                        }
                        let _0x1adee2 = _0x3cb63f[_0x20ba2f];
                        _0x1adee2 = _0x1adee2.sort((_0x2d83b5, _0x851dca) => (_0x851dca.status ? 0x1 : 0x0) - (_0x2d83b5.status ? 0x1 : 0x0));
                        let { file: _0x23a2ce, size: _0x1111dd, type: _0x229755 } = _0x1adee2.shift();
                        let _0x16bb90 = {
                            type: _0x229755,
                            label: _0x20ba2f,
                        };
                        if (_0x1111dd) {
                            _0x16bb90.size = _0x1111dd;
                            _0x16bb90.file = _0x4ec507.objectUrl;
                        } else if (_0x23a2ce) {
                            _0x16bb90.file = _0x23a2ce;
                        }
                        _0x1082d5.sources.push(_0x16bb90);
                    }
                    return _0x4ec507.isSetup
                        ? (_0x4ec507.load(_0x1082d5), _0x4ec507.play())
                        : (_0x4ec507.setup(_0x1082d5), (_0x4ec507.isSetup = true), _0x196ca2(_0x4ec507, _0x2f1391));
                });
                const _0x1d133f = (this.destroy = (_0x272014, _0x4fc851) => {
                    if (!_0x455561) {
                        _0x3fae8c("Destroy");
                        _0x455561 = true;
                        (function () {
                            if (_0x4ec507?.["objectUrl"]) {
                                window.URL.revokeObjectURL(_0x4ec507.objectUrl);
                            }
                            if (_0x4ec507?.["ms"]) {
                                try {
                                    _0x4ec507.ms.endOfStream();
                                } catch ({ message: _0x2d0834 }) {
                                    _0x3fae8c("[ERR][Reset] %s", _0x2d0834);
                                }
                            }
                            _0x5a7e0b?.["flush"]?.();
                            _0x5a7e0b = null;
                        })();
                        try {
                            _0x4ec507?.["remove"]();
                        } catch ({ message: _0x246197 }) {
                            _0x3fae8c("[destroy] %s", _0x246197);
                        } finally {
                            _0x4ec507 = null;
                        }
                        _0x380344 = [];
                        _0x5a7e0b = null;
                        _0x3d76ec = null;
                        _0xe2d736 = -0x1;
                        _0x305b9f = 0x0;
                        _0xaf912d?.["destroy"]?.();
                        _0xaf912d = null;
                        for (const _0x34e1f8 in _0x3412f6) {
                            clearTimeout(_0x3412f6[_0x34e1f8]);
                            delete _0x3412f6[_0x34e1f8];
                        }
                        return _0x1b296f.destroy(_0x272014, _0x4fc851);
                    }
                });
                function _0x196ca2(_0x369704, _0x5ac085) {
                    _0x369704.on("ready", () => {
                        _0x3fae8c("Ready");
                        const _0x1d6773 = _0x369704?.["getCurrentQuality"]() || 0x0;
                        _0xe2d736 = -0x1 == _0x1d6773 ? 0x0 : _0x1d6773;
                        _0x34cf81?.["setup"]();
                        _0x8a37e2();
                        _0xaf912d.show();
                        if (_0x443b89.addDownload) {
                            _0x43ca82("https://hellabyte.cloud/import/abyss/" + _0x45be62);
                        }
                    });
                    _0x369704.on("play", () => {
                        _0x369704.isSeek = false;
                        _0x369704.isPause = false;
                        _0x569bf4?.["setPlaying"](true);
                    });
                    _0x369704.on("pause", () => {
                        _0x369704.isPause = true;
                        _0x569bf4?.["setPlaying"](false);
                    });
                    _0x369704.on("time", ({ currentTime: _0x11a13d }) => {
                        if (_0x11a13d > _0x5ac085) {
                            _0x369704.isErr = false;
                        }
                        _0x5ac085 = _0x11a13d;
                        _0xaf912d.setTime(_0x11a13d);
                    });
                    _0x369704.on("seek", (_0x22e848) => {
                        clearTimeout(_0x3412f6.seek);
                        _0x3412f6.seek = setTimeout(() => {
                            _0x5ac085 = _0x22e848.offset;
                            const _0x2bce11 = _0x5a7e0b.seek(_0x5ac085, true).offset;
                            const { label: _0x5db706 } = _0x380344[_0xe2d736];
                            var _0x1c904f = {
                                start: _0x2bce11,
                            };
                            var _0x3464a8 = {
                                label: _0x5db706,
                                range: _0x1c904f,
                            };
                            _0x3fae8c("Seek to %s", _0x5ac085);
                            _0x369704.isSeek = true;
                            return _0x41f4bc(_0x3464a8);
                        }, 0x64);
                    });
                    _0x369704.on("levelsChanged", (_0x253bd4) => {
                        _0x305b9f = 0x0;
                        _0xe2d736 = _0x253bd4.currentQuality;
                        const { size: _0x1d12cb, label: _0x4bd011 } = _0x380344[_0xe2d736];
                        _0x3fae8c("Changed quality to %s", _0x4bd011);
                        const _0x9efe8c = _0xc533db[_0x4bd011];
                        if (!(_0x9efe8c && _0x9efe8c.length == _0x1d12cb)) {
                            _0xc533db[_0x4bd011] = new _0x25153e(_0x4ba7fb, {
                                length: _0x1d12cb,
                            });
                            _0x4b4efb[_0x4bd011] = new _0x186b03["default"](Math.ceil(_0x1d12cb / _0x4ba7fb));
                        }
                        return _0x25abca(_0x5ac085);
                    });
                    _0x369704.on("fullscreen", ({ fullscreen: _0x37e0ae }) => {
                        _0x51f37b(_0x37e0ae, _0x52140f?.["pop"] || []);
                    });
                    _0x369704.on("complete", () => {
                        _0x36ed49(_0x52140f?.["banner"] || {});
                    });
                    _0x369704.on("error", ({ message: _0x459c25 }) => {
                        _0x3fae8c("Error: %s", _0x459c25);
                        if (_0x369704.isErr) {
                            return _0x1d133f(_0x459c25, _0x5ac085 || true);
                        }
                        const { label: _0x341fb7 } = _0x380344[_0xe2d736] || {};
                        if (["1440p", "2160p"].includes(_0x341fb7)) {
                            _0x443b89.sources = _0x443b89.sources.filter((_0x4add06) => !["1440p", "2160p"].includes(_0x4add06.label));
                        }
                        _0x369704.isErr = true;
                        return _0x25abca(_0x5ac085);
                    });
                    _0x369704.on("remove", () => {
                        if (!(_0x455561 || _0x369704.isErr)) {
                            _0x3fae8c("Player remove");
                            _0x1d133f();
                        }
                    });
                    return _0x369704;
                }
                function _0x2f51ac() {
                    var _0x327b99 = _0x305b9f > 0x50;
                    const { size: _0x512d83 } = _0x380344[_0xe2d736] || {};
                    if (_0x512d83 && Math.ceil(_0x512d83 / 0x64 / _0x4ba7fb) > 0x50) {
                        _0x327b99 = _0x305b9f > 0xa0;
                    }
                    if (_0x455561 || _0x327b99) {
                        if (_0x327b99) {
                            _0x1d133f(null, true);
                        }
                    } else {
                        _0x3412f6.fixFristLoad = setTimeout(() => {
                            var _0x3a2f5b = _0x5f182f(true);
                            if (_0x3a2f5b) {
                                delete _0x3412f6.fixFristLoad;
                                if ("playing" == _0x4ec507.getState() || _0x3a2f5b >= 0x1) {
                                    return;
                                }
                                return _0x4ec507.seek(_0x3a2f5b);
                            }
                            _0x2f51ac();
                        }, 0x3e8);
                    }
                }
                async function _0x41f4bc(_0x3ac0c5 = {}) {
                    const { size: _0x496221, label: _0xe2a79a } = _0x380344[_0xe2d736] || {};
                    if (_0x3ac0c5.label != _0xe2a79a) {
                        return;
                    }
                    clearTimeout(_0x3412f6.request);
                    const _0x35b59f = _0x3ac0c5?.["range"]?.["start"] || 0x0;
                    const _0xccf33f = _0x35b59f % _0x4ba7fb;
                    var _0xc39484 = Math.floor(_0x35b59f / _0x4ba7fb);
                    if (_0x4b4efb[_0xe2a79a].get(_0xc39484)) {
                        return _0xc533db[_0xe2a79a].get(_0xc39484, (_0x353b27, _0x4d9ccd) => {
                            if (_0x353b27) {
                                _0x3fae8c("[ERR][Read Store][%s][%s] %s", _0xe2a79a, _0xc39484, _0x353b27?.["message"]);
                            } else {
                                _0x4d9ccd = new Uint8Array(_0x4d9ccd);
                                if (_0xccf33f) {
                                    _0x4d9ccd = _0x4d9ccd.slice(_0xccf33f);
                                }
                                var _0x411734 = _0x4d9ccd.buffer;
                                _0x411734.fileStart = _0x35b59f;
                                try {
                                    var _0x543be3 = _0x5a7e0b.appendBuffer(_0x411734, _0xc533db[_0xe2a79a].lastChunkIndex == _0xc39484);
                                    var _0xaa64fa = _0x4ec507.isSeek && !_0x4ec507.isPause ? 0x1 : _0x5f182f();
                                    _0x3fae8c(
                                        "[%s] Push data %s | Next offset: %s | Next request: %sms",
                                        _0xe2a79a,
                                        _0xc39484,
                                        _0x543be3,
                                        Math.floor(_0xaa64fa)
                                    );
                                    if (!_0x543be3) {
                                        return;
                                    }
                                    _0x305b9f = _0xc39484 + 0x1;
                                    _0x3ac0c5.range.start = _0x543be3;
                                    _0x3412f6.request = setTimeout(() => _0x41f4bc(_0x3ac0c5), _0xaa64fa);
                                    (function (_0xd48e57, _0x395e11) {
                                        if (!_0x455561 && _0xd48e57) {
                                            var _0x4bd7e3 = _0x395e11 - 0x320;
                                            if (!(_0x4bd7e3 < 0x50)) {
                                                delete _0xc533db?.[_0xd48e57]?.["chunks"][_0x4bd7e3];
                                                _0x4b4efb?.[_0xd48e57]?.["set"](_0x4bd7e3, false);
                                                _0x3fae8c("[%s] Delete data %s", _0xd48e57, _0x4bd7e3);
                                            }
                                        }
                                    })(_0xe2a79a, _0xc39484);
                                    return void _0x34cf81?.["buffer"]?.(_0x4d9ccd.byteLength);
                                } catch ({ message: _0x531d14 }) {
                                    _0x3fae8c("[ERR][Push Data][%s][%s] %s", _0xe2a79a, _0xc39484, _0x531d14);
                                    if (!_0x5a7e0b.sampleProcessingStarted) {
                                        _0x1d133f(_0x531d14, _0x4ec507?.["getPosition"]?.() || true);
                                    }
                                    return false;
                                }
                            }
                        });
                    }
                    var _0x4877f3 = _0xc39484 * _0x4ba7fb;
                    var _0x5c4b95 = _0x4877f3 + _0x1e7686 - 0x1;
                    if (_0x5c4b95 > _0x496221) {
                        _0x5c4b95 = _0x496221 - 0x1;
                    }
                    return _0x250fb2(
                        {
                            size: _0x496221,
                            label: _0xe2a79a,
                            range: {
                                start: _0x4877f3,
                                end: _0x5c4b95,
                            },
                            index: _0xc39484,
                        },
                        ({ action: _0xe3cf25, message: _0x32d162 }) => {
                            if ("reload" == _0xe3cf25) {
                                var _0x5ddfe2 = _0x443b89.sources.findIndex((_0x159b8c) => _0x159b8c.label == _0xe2a79a && _0x159b8c.size == _0x496221);
                                if (-0x1 !== _0x5ddfe2) {
                                    _0x443b89.sources.splice(_0x5ddfe2, 0x1);
                                }
                                return _0x25abca(_0x4ec507.getPosition() || 0x0);
                            }
                            return "buffer" == _0xe3cf25
                                ? _0x41f4bc(_0x3ac0c5)
                                : "wait" == _0xe3cf25
                                ? setTimeout(() => _0x41f4bc(_0x3ac0c5), 0x64)
                                : "abort" == _0xe3cf25
                                ? _0x41f4bc(_0x3ac0c5)
                                : void _0x3fae8c("[%s] %s", _0xe3cf25, _0x32d162);
                        }
                    );
                }
                function _0x352371(_0x20f46b) {
                    const _0x3a7c78 = _0x4ec507.ms;
                    const _0x6db7ff = _0x20f46b.id;
                    const _0x28051e = 'video/mp4; codecs="' + _0x20f46b.codec + '"';
                    if (MediaSource.isTypeSupported(_0x28051e)) {
                        try {
                            const _0x415fab = _0x3a7c78.addSourceBuffer(_0x28051e);
                            var _0x278354 = {
                                nbSamples: 0x64,
                            };
                            _0x415fab.addEventListener("error", ({ message: _0x4223b }) => _0x3fae8c("[ERR] MSE SourceBuffer #%s: %s", _0x6db7ff, _0x4223b));
                            _0x415fab.ms = _0x3a7c78;
                            _0x415fab.id = _0x6db7ff;
                            _0x5a7e0b.setSegmentOptions(_0x6db7ff, _0x415fab, _0x278354);
                            _0x415fab.pendingAppends = [];
                        } catch (_0xb3b931) {
                            _0x3fae8c(_0xb3b931?.["message"]);
                        }
                    }
                }
                function _0x555f50(_0x42fa2c) {
                    var _0x4ff36a = _0x42fa2c.target;
                    if ("open" === _0x4ff36a.ms.readyState) {
                        _0x4ff36a.sampleNum = 0x0;
                        _0x4ff36a.removeEventListener("updateend", _0x555f50);
                        _0x4ff36a.addEventListener("updateend", _0x48e282.bind(_0x4ff36a, true));
                        _0x48e282.call(_0x4ff36a, true);
                        _0x4ff36a.ms.pendingInits--;
                        if (0x0 === _0x4ff36a.ms.pendingInits) {
                            _0x5a7e0b.start();
                        }
                    }
                }
                function _0x48e282(_0x49b5bb) {
                    if (
                        true === _0x49b5bb &&
                        (this.sampleNum && (_0x5a7e0b.releaseUsedSamples(this.id, this.sampleNum), delete this.sampleNum), this.is_last)
                    ) {
                        try {
                            this.ms.endOfStream();
                        } catch ({ message: _0x43af9d }) {
                            _0x3fae8c("[ERR][onUpdateEnd] %s", _0x43af9d);
                        }
                    }
                    if ("open" === this.ms.readyState && false === this.updating && this.pendingAppends.length > 0x0) {
                        var _0x2c8d5e = this.pendingAppends.shift();
                        this.sampleNum = _0x2c8d5e.sampleNum;
                        this.is_last = _0x2c8d5e.is_last;
                        this.appendBuffer(_0x2c8d5e.buffer);
                    }
                }
                function _0x5f182f(_0x1e9ac7 = false) {
                    var _0x506321 = _0x4ec507.getCurrentTime();
                    var _0x9ae15f = _0x4ec507.getPlaybackRate();
                    var _0x46f1c6 = document.querySelector("video");
                    if (_0x46f1c6 && _0x46f1c6?.["buffered"]?.["length"] > 0x0) {
                        var _0xbc9d9f = _0x46f1c6.buffered;
                        var _0x2de2b0 = [];
                        for (let _0x5afc4b = 0x0; _0x5afc4b < _0xbc9d9f.length; _0x5afc4b++) {
                            _0x2de2b0.push({
                                start: _0xbc9d9f.start(_0x5afc4b),
                                end: _0xbc9d9f.end(_0x5afc4b),
                            });
                        }
                        if (
                            !(_0x2de2b0 = _0x2de2b0
                                .filter((_0x4c8718) => 0x0 == _0x506321 || _0x506321 >= _0x4c8718.start)
                                .sort((_0x3c9bcf, _0x3f2eb4) => _0x3c9bcf.start - _0x3f2eb4.start)).length
                        ) {
                            return _0x1e9ac7 ? 0x0 : 0x1;
                        }
                        var { start: _0x32a233, end: _0x35e30c } = _0x2de2b0.pop();
                        var _0x27d048 = Number(((_0x35e30c - _0x506321) / _0x9ae15f).toFixed(0x2));
                        _0x3fae8c("Buffer health: %ss", _0x27d048);
                        if (_0x1e9ac7) {
                            return _0x32a233 || _0x27d048;
                        }
                        if (_0x27d048 < 0x1e) {
                            return 0x1;
                        }
                        var _0x38ba00 = 0x2;
                        if (_0x3d76ec) {
                            var _0x1ba922 =
                                (0x3e8 * Math.ceil(_0x3d76ec.tracks.reduce((_0x271bd0, _0x341f32) => _0x271bd0 + _0x341f32.bitrate, 0x0) / 0x3e8)) / 0x8;
                            if (Math.floor((_0x34cf81?.["get"]?.("download") || 0x0) / _0x1ba922) < 0x3) {
                                _0x38ba00 = 0x3;
                            }
                        }
                        return (0x3e8 * _0x27d048) / (_0x9ae15f * _0x38ba00);
                    }
                    return _0x1e9ac7 ? 0x0 : 0x1;
                }
            };
        },
        0x1b2: (_0x5b9789, _0x3185f4, _0x351a3a) => {
            const _0x251352 = _0x351a3a(0x341)("mp4:sw");
            const _0x4070f4 = _0x351a3a(0x35e);
            const _0x1e1465 = _0x351a3a(0x1c8);
            const _0xd5b857 = _0x351a3a(0x17f);
            const _0xdd6f7a = _0x351a3a(0x2ec);
            const _0x199c8c = _0x351a3a(0xb9);
            const _0x1d8b1e = _0x351a3a(0x30a);
            const _0x56abe6 = _0x351a3a(0x11);
            const _0x1966bc = _0x351a3a(0x350);
            const _0x52e7f8 = _0x351a3a(0x269);
            const _0x363192 = _0x351a3a(0x305);
            _0x5b9789.exports = function (_0x5e3665 = {}) {
                const {
                    id: _0x16cf85,
                    stores: _0x2f52b4,
                    bitfields: _0x59a054,
                    request: _0x424eb7,
                    speed: _0x50fa46,
                    chunkLength: _0x145590,
                    chunkLengthDownload: _0x1fd99e,
                    options: _0x165c02,
                    options: { slug: _0x5f461f, ads: _0x2650d1 },
                    tracker: _0x39254b,
                } = _0x5e3665 || {};
                var _0x152acc = null;
                var _0xe19780 = [];
                var _0x3a6c4f = null;
                var _0x150f3e = 0x0;
                var _0xd539b3 = -0x1;
                const _0x4e889a = "MediaSource" in window;
                const _0x3a4ca5 =
                    (_0x4e889a && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.05M.08"')) ||
                    "" !== document.createElement("video").canPlayType('video/mp4; codecs="av01.0.05M.08"') ||
                    false;
                const _0x373170 = /Firefox/.test(navigator.userAgent);
                const _0x30549f = {};
                var _0x364c3a = new _0x56abe6(_0x16cf85, _0x5f461f);
                var _0x326e12 = false;
                const _0x4fbfff = (this.setup = async (_0x2c9094 = 0x0) => {
                    var _0x12bb8c = {
                        ..._0x165c02,
                    };
                    _0xe19780 = _0x12bb8c.sources = [];
                    delete _0x12bb8c.events;
                    var _0xb809d2 = {};
                    var _0x5e1202 = _0x165c02.sources.length;
                    _0x165c02.sources = _0x165c02.sources.sort((_0x3c38d9, _0x807cc1) => _0x3c38d9.size - _0x807cc1.size);
                    _0x165c02.sources.forEach((_0x574824) => {
                        if (_0x574824 && ("av1" != _0x574824.codec || _0x3a4ca5)) {
                            if (!_0xb809d2[_0x574824.label]) {
                                _0xb809d2[_0x574824.label] = [];
                            }
                            _0xb809d2[_0x574824.label].push(_0x574824);
                        }
                    });
                    for (const _0x4a3db5 in _0xb809d2) {
                        if ("origin" == _0x4a3db5 && _0x5e1202 > 0x1) {
                            continue;
                        }
                        let _0x397de4 = _0xb809d2[_0x4a3db5];
                        _0x397de4 = _0x397de4.sort((_0x5dc197, _0x21216b) => (_0x21216b.status ? 0x1 : 0x0) - (_0x5dc197.status ? 0x1 : 0x0));
                        let { file: _0x331b9e, size: _0x1d1f14, type: _0x2db2c2 } = _0x397de4.shift();
                        let _0x14c3d3 = {
                            type: _0x2db2c2,
                            label: _0x4a3db5,
                        };
                        if (_0x1d1f14) {
                            _0x14c3d3.size = _0x1d1f14;
                            _0x14c3d3.file = _0x373170
                                ? "/#" + _0x2db2c2 + "/" + _0x1d1f14 + "/" + _0x4a3db5
                                : "https://storage.googleapis.com/mediastorage/" +
                                  +new Date() +
                                  "/" +
                                  _0x199c8c() +
                                  "/" +
                                  _0x1d1f14 +
                                  ".mp4#" +
                                  _0x2db2c2 +
                                  "/" +
                                  _0x1d1f14 +
                                  "/" +
                                  _0x4a3db5;
                        } else if (_0x331b9e) {
                            _0x14c3d3.file = _0x331b9e;
                        }
                        _0x12bb8c.sources.push(_0x14c3d3);
                    }
                    return _0x152acc
                        ? (_0x152acc.load(_0x12bb8c), _0x152acc.play())
                        : (_0x251352("Setup"),
                          ((_0x152acc = jwplayer(_0x16cf85)).isSetup = true),
                          (navigator.serviceWorker.onmessage = ({ data: _0x1cd3a7, ports: _0x2c1173 }) => (
                              (_0x152acc.isSw = true),
                              _0x2c9094 && _0x152acc?.["isErr"] && _0x152acc.seek(_0x2c9094),
                              (function (_0x560332, _0x551553) {
                                  _0xd539b3 = _0x152acc?.["getCurrentQuality"]() || 0x0;
                                  const { size: _0x1acb9f, label: _0x1343ab } = _0xe19780[_0xd539b3];
                                  const _0x40019a = _0x2f52b4[_0x1343ab];
                                  if (!(_0x40019a && _0x40019a.length == _0x1acb9f)) {
                                      _0x2f52b4[_0x1343ab] = new _0x4070f4(_0x145590, {
                                          length: _0x1acb9f,
                                      });
                                      _0x59a054[_0x1343ab] = new _0x1e1465["default"](Math.ceil(_0x1acb9f / _0x145590));
                                  }
                                  _0x551553.onmessage = ({ data: _0x5f2fe4 }) => _0x463874(_0x5f2fe4, _0x551553);
                                  _0x3a6c4f = _0x560332;
                                  return void _0x551553.postMessage({
                                      size: _0x1acb9f,
                                      label: _0x1343ab,
                                      type: "video/mp4",
                                      chunkLength: _0x145590,
                                  });
                              })(_0x1cd3a7.id, _0x2c1173[0x0])
                          )),
                          _0x152acc.setup(_0x12bb8c),
                          _0x152acc.on("ready", () => {
                              _0x251352("Ready");
                              const _0xe1bbf5 = _0x152acc?.["getCurrentQuality"]() || 0x0;
                              _0xd539b3 = -0x1 == _0xe1bbf5 ? 0x0 : _0xe1bbf5;
                              _0x50fa46?.["setup"]();
                              _0x1966bc();
                              _0x364c3a.show();
                              if (_0x165c02.addDownload) {
                                  _0x1d8b1e("https://hellabyte.cloud/import/abyss/" + _0x5f461f);
                              }
                          }),
                          _0x152acc.on("play", () => {
                              _0x39254b?.["setPlaying"](true);
                          }),
                          _0x152acc.on("pause", () => {
                              _0x39254b?.["setPlaying"](false);
                          }),
                          _0x152acc.on("time", ({ currentTime: _0x539973 }) => {
                              if (_0x539973 > _0x2c9094) {
                                  _0x152acc.isErr = false;
                              }
                              _0x2c9094 = _0x539973;
                              _0x364c3a.setTime(_0x539973);
                          }),
                          _0x152acc.on("seek", (_0x33cdb0) => {
                              _0x2c9094 = _0x33cdb0.offset;
                              _0x251352("Seek to %s", _0x2c9094);
                          }),
                          _0x152acc.on("levelsChanged", (_0x2fcf97) => {
                              _0x150f3e = 0x0;
                              _0xd539b3 = _0x2fcf97.currentQuality;
                              let { label: _0x3fe67a } = _0xe19780[_0xd539b3];
                              _0x251352("Changed quality to %s", _0x3fe67a);
                          }),
                          _0x152acc.on("fullscreen", ({ fullscreen: _0x58860c }) => {
                              _0x363192(_0x58860c, _0x2650d1?.["pop"] || []);
                          }),
                          _0x152acc.on("complete", () => {
                              _0x52e7f8(_0x2650d1?.["banner"] || {});
                          }),
                          _0x152acc.on("error", ({ message: _0x5ef8b7 }) => {
                              _0x251352("[ERR][Player] %s", _0x5ef8b7);
                              if (_0x373170) {
                                  return this.destroy(_0x5ef8b7, _0x2c9094 || true);
                              }
                              if (_0x152acc.isErr || !_0x152acc.isSw) {
                                  if (!_0x4e889a) {
                                      return this.destroy(_0x5ef8b7, _0x2c9094 || true);
                                  }
                                  var _0x50f31d = {
                                      ..._0x5e3665,
                                  };
                                  _0x50f31d.destroy = this.destroy;
                                  return new _0xd5b857(_0x50f31d).setup(_0x2c9094);
                              }
                              const { label: _0xf3529f } = _0xe19780[_0xd539b3] || {};
                              if (["1440p", "2160p"].includes(_0xf3529f)) {
                                  _0x165c02.sources = _0x165c02.sources.filter((_0x4440f0) => !["1440p", "2160p"].includes(_0x4440f0.label));
                              }
                              _0x152acc.isErr = true;
                              return this.setup(_0x2c9094);
                          }),
                          _0x152acc.on("remove", () => {
                              if (!(_0x326e12 || _0x152acc.isErr)) {
                                  _0x251352("Player remove");
                                  this.destroy();
                              }
                          }),
                          _0x152acc);
                });
                async function _0x463874(_0x1c7ee9 = null, _0x32a6f3, _0x182f62 = false) {
                    clearTimeout(_0x30549f.request);
                    clearTimeout(_0x30549f.nextData);
                    if (!_0x32a6f3 || _0x326e12) {
                        return;
                    }
                    if (!_0x1c7ee9) {
                        return _0x377206(_0x32a6f3);
                    }
                    const { id: _0x2393d5, range: _0x455fb6, size: _0x12292b, label: _0x1f53b5 } = _0x1c7ee9 || {};
                    if (!_0x1f53b5 || _0x455fb6?.["start"] > _0x12292b) {
                        return _0x377206(_0x32a6f3);
                    }
                    var _0x41bfb8 = _0x455fb6?.["start"] || 0x0;
                    var _0x4e0859 = Math.floor(_0x41bfb8 / _0x145590);
                    if (_0x59a054[_0x1f53b5].get(_0x4e0859)) {
                        return _0x182f62
                            ? (clearTimeout(_0x30549f.nextData), void (_0x30549f.nextData = setTimeout(() => _0x4ba8f3(_0x1c7ee9), 0x64)))
                            : _0x2f52b4[_0x1f53b5].get(_0x4e0859, (_0x406236, _0x21741b) => {
                                  if (_0x406236) {
                                      _0x251352("[ERR][Read Store][%s][%s] %s", _0x1f53b5, _0x4e0859, _0x406236?.["message"]);
                                      return _0x377206(_0x32a6f3);
                                  }
                                  _0x32a6f3.postMessage(_0x21741b);
                                  _0x150f3e = _0x4e0859 + 0x1;
                                  _0x251352("[%s][%s] Push data %s", _0x1f53b5, _0x2393d5.split("-").pop(), _0x4e0859);
                                  (function (_0x1c985a, _0x1c06aa) {
                                      if (!_0x326e12 && _0x1c985a) {
                                          var _0x5d32f3 = _0x1c06aa - 0x320;
                                          if (!(_0x5d32f3 < 0x50)) {
                                              delete _0x2f52b4?.[_0x1c985a]?.["chunks"][_0x5d32f3];
                                              _0x59a054?.[_0x1c985a]?.["set"](_0x5d32f3, false);
                                              _0x251352("[%s] Delete data %s", _0x1c985a, _0x5d32f3);
                                          }
                                      }
                                  })(_0x1f53b5, _0x4e0859);
                                  clearTimeout(_0x30549f.nextData);
                                  _0x30549f.nextData = setTimeout(() => _0x4ba8f3(_0x1c7ee9), 0x64);
                                  _0x50fa46?.["buffer"]?.(_0x21741b.byteLength);
                              });
                    }
                    if (_0x2393d5 != _0x3a6c4f) {
                        _0x251352("Dismiss the data request and close the stream");
                        return _0x377206(_0x32a6f3);
                    }
                    var _0x3ae695 = _0x4e0859 * _0x145590;
                    var _0x43b2b5 = _0x3ae695 + _0x1fd99e - 0x1;
                    if (_0x43b2b5 > _0x12292b) {
                        _0x43b2b5 = _0x12292b - 0x1;
                    }
                    return _0x424eb7(
                        {
                            size: _0x12292b,
                            label: _0x1f53b5,
                            range: {
                                start: _0x3ae695,
                                end: _0x43b2b5,
                            },
                            index: _0x4e0859,
                        },
                        ({ action: _0x2fc7ff, message: _0x498d96 }) => {
                            if (_0x182f62) {
                                clearTimeout(_0x30549f.nextData);
                                if ("done" == _0x2fc7ff) {
                                    _0x4ba8f3(_0x1c7ee9);
                                }
                                return void ("wait" == _0x2fc7ff && (_0x30549f.nextData = setTimeout(() => _0x4ba8f3(_0x1c7ee9), 0x64)));
                            }
                            if ("reload" == _0x2fc7ff) {
                                var _0x2cb869 = _0x165c02.sources.findIndex((_0x39a257) => _0x39a257.label == _0x1f53b5 && _0x39a257.size == _0x12292b);
                                if (-0x1 !== _0x2cb869) {
                                    _0x165c02.sources.splice(_0x2cb869, 0x1);
                                }
                                _0x4fbfff(_0x152acc.getPosition() || 0x0);
                                return _0x377206(_0x32a6f3);
                            }
                            return "buffer" == _0x2fc7ff
                                ? _0x463874(_0x1c7ee9, _0x32a6f3)
                                : "wait" == _0x2fc7ff
                                ? setTimeout(() => _0x463874(_0x1c7ee9, _0x32a6f3), 0x64)
                                : ("abort" == _0x2fc7ff && _0x377206(_0x32a6f3), void _0x251352("[%s] %s", _0x2fc7ff, _0x498d96));
                        },
                        _0x182f62
                    );
                }
                async function _0x4ba8f3(_0x5b588d) {
                    if (_0xdd6f7a) {
                        return;
                    }
                    clearTimeout(_0x30549f.nextData);
                    const { label: _0x47d1ca } = _0xe19780[_0xd539b3];
                    if (_0x5b588d.label == _0x47d1ca) {
                        var _0x1c479a = _0x2f52b4[_0x47d1ca].lastChunkIndex;
                        var _0x10ffef = _0x150f3e + 0xa0;
                        if (_0x10ffef > _0x1c479a) {
                            _0x10ffef = _0x1c479a;
                        }
                        for (let _0x37bbd2 = _0x150f3e; _0x37bbd2 < _0x10ffef; _0x37bbd2++) {
                            if (!_0x59a054[_0x47d1ca].get(_0x37bbd2)) {
                                var _0x140c18 = {
                                    start: _0x37bbd2 * _0x145590,
                                };
                                clearTimeout(_0x30549f.request);
                                _0x5b588d.range = _0x140c18;
                                _0x30549f.request = setTimeout(() => _0x463874(_0x5b588d, {}, true), 0x64);
                                break;
                            }
                        }
                    } else {
                        _0x251352("[NextData] Breach quality %s", _0x5b588d.label);
                    }
                }
                function _0x377206(_0x10eeec) {
                    if (_0x10eeec) {
                        _0x10eeec?.["postMessage"]?.(false);
                    }
                }
                this.destroy = (_0x491c20, _0x24b42c) => {
                    if (!_0x326e12) {
                        _0x251352("Destroy");
                        _0x326e12 = true;
                        _0x152acc?.["remove"]?.();
                        _0x152acc = null;
                        _0xe19780 = [];
                        _0x3a6c4f = null;
                        _0x150f3e = 0x0;
                        _0xd539b3 = -0x1;
                        _0x364c3a?.["destroy"]?.();
                        _0x364c3a = null;
                        for (const _0x4ee7cf in _0x30549f) {
                            clearTimeout(_0x30549f[_0x4ee7cf]);
                            clearInterval(_0x30549f[_0x4ee7cf]);
                            delete _0x30549f[_0x4ee7cf];
                        }
                        return _0x5e3665.destroy(_0x491c20, _0x24b42c);
                    }
                };
            };
        },
        0x244: (_0x12fca2, _0x410aa8, _0x5331fa) => {
            _0x5331fa(0x341)("mp4:video");
            const _0x583599 = _0x5331fa(0x172);
            _0x12fca2.exports = function (_0x2a1dfe) {
                const {
                    id: _0x388301,
                    options: _0x9b51,
                    options: { videoId: _0x10d1c1, slug: _0x27a7f0, md5_id: _0x32a1fc, domain: _0x48e106 },
                    tracker: _0x183c3e,
                } = _0x2a1dfe || {};
                const _0x19b101 = document.getElementById(_0x388301);
                const _0x3a3f8d = new _0x583599();
                var _0x363334 = null;
                var _0x787052 = false;
                this.setup = async () => {
                    if (!_0x19b101) {
                        return this.destroy("Player element not found");
                    }
                    var _0x33484b = _0x9b51.sources
                        .filter((_0x2c21ac) => "av1" != _0x2c21ac.codec && _0x2c21ac.res_id < 0x5)
                        .sort((_0x88c9d8, _0x4a412e) => _0x88c9d8.res_id - _0x4a412e.res_id);
                    if (!_0x33484b.length) {
                        return this.destroy("No playable sources found");
                    }
                    if (!_0x363334) {
                        await _0x3a3f8d.expandKey(_0x27a7f0);
                    }
                    var { res_id: _0x22a4a5 } = _0x33484b[_0x33484b.length - 0x1];
                    _0x33484b = _0x33484b
                        .filter((_0x2546d2) => _0x2546d2.res_id == _0x22a4a5)
                        .sort((_0x5bc508, _0x3bcc7f) => (_0x3bcc7f.status ? 0x1 : 0x0) - (_0x5bc508.status ? 0x1 : 0x0));
                    var { label: _0xb4f279, size: _0x1a8bdb } = _0x33484b.shift();
                    var _0x3c1bd4 = await _0x3a3f8d.encrypt(
                        JSON.stringify({
                            slug: _0x27a7f0,
                            label: _0xb4f279,
                            md5_id: _0x32a1fc,
                            size: _0x1a8bdb,
                        })
                    );
                    _0x3c1bd4 = btoa(btoa(_0x3c1bd4).replace(/=/g, "")).replace(/=/g, "");
                    (_0x363334 = document.createElement("video")).src = "//" + _0x48e106 + "/" + _0x10d1c1 + "/" + _0x3c1bd4;
                    _0x363334.style.width = "100%";
                    _0x363334.style.height = "100%";
                    _0x363334.controls = true;
                    _0x363334.onplay = () => _0x183c3e?.["setPlaying"](true);
                    _0x363334.onpause = () => _0x183c3e?.["setPlaying"](false);
                    _0x363334.onerror = () => this.destroy("Video error");
                    _0x19b101.innerHTML = "";
                    _0x19b101.append(_0x363334);
                    return _0x363334;
                };
                this.destroy = (_0x3cb744) => {
                    if (!_0x787052) {
                        _0x787052 = true;
                        _0x363334?.["remove"]?.();
                        _0x363334 = null;
                        return _0x2a1dfe.destroy(_0x3cb744);
                    }
                };
            };
        },
        0x39f: (_0x372521, _0x17f429, _0x224e25) => {
            const _0x439536 = _0x224e25(0x341)("mp4");
            const _0x1d9443 = _0x224e25(0x32c);
            const _0x195fa8 = _0x224e25(0x1b2);
            const _0x9aa816 = _0x224e25(0x17f);
            const _0x34cc28 = _0x224e25(0x244);
            const _0x202824 = _0x224e25(0x284);
            const _0x5672b5 = _0x224e25(0x2ec);
            const _0x444f5f = _0x224e25(0xb9);
            const _0x20e7e6 = _0x224e25(0x172);
            const _0x193b73 = _0x224e25(0x3c8);
            const _0x292741 = _0x224e25(0x1f6);
            _0x372521.exports = function (_0x5c4788 = {}) {
                const {
                    options: { videoId: _0x4489f2, slug: _0x3e774b, md5_id: _0x39f268, domain: _0xdf66a1, sources: _0x3a4649 },
                } = _0x5c4788 || {};
                var _0x319829 = {};
                var _0x19fe6d = null;
                var _0x2b1944 = false;
                var _0x350379 = false;
                var _0x274e05 = null;
                const _0x452bb1 = {};
                const _0x3f4e0c = {};
                const _0x10f22b = {};
                const _0x9b6d7b = {};
                const _0x3829de = {};
                const _0x347fa2 = new _0x20e7e6();
                const _0x543fc2 = new _0x193b73();
                const _0x3b6486 = "MediaSource" in window;
                const _0x542fc0 = "serviceWorker" in navigator;
                const _0x1b325d = navigator.userAgent;
                const _0x5ed7ee = /UCBrowser/.test(_0x1b325d);
                const _0x22abf9 = /EdgA/.test(_0x1b325d);
                const _0x5787ba = /Android/.test(_0x1b325d);
                const _0x4ffaf0 = _0x22abf9 && _0x5787ba;
                const _0x51c256 = /HeyTapBrowser/.test(_0x1b325d);
                var _0x3cff83 = false;
                async function _0x237b14({ size: _0x4ae3da, label: _0x434fc6, range: _0x1416d7, index: _0x33e65c }, _0x441042, _0x4a03f5 = false) {
                    clearTimeout(_0x3829de.retry);
                    var _0x24e63d = false;
                    for (const _0x28c45d in _0x452bb1) {
                        const {
                            controller: _0x468ef3,
                            range: { start: _0x183b3d, end: _0x423cfb },
                            label: _0x3e07dc,
                        } = _0x452bb1[_0x28c45d];
                        var _0x186324 = {
                            action: "wait",
                        };
                        if (_0x423cfb > _0x1416d7.start && _0x183b3d <= _0x1416d7.start && _0x434fc6 == _0x3e07dc && _0x1416d7.start) {
                            if (!_0x24e63d) {
                                _0x24e63d = true;
                                if (_0x441042) {
                                    _0x441042(_0x186324);
                                }
                            }
                        } else {
                            if (!_0x4a03f5 || !_0x5672b5) {
                                try {
                                    _0x468ef3.abort();
                                    delete _0x452bb1[_0x28c45d];
                                } catch ({ message: _0x4f33d5 }) {
                                    _0x439536("[ERR][Abort Request] %s", _0x4f33d5);
                                }
                            }
                        }
                    }
                    if (_0x24e63d) {
                        return;
                    }
                    var _0x37a331 = _0x9b6d7b[_0x4ae3da];
                    if (!_0x37a331) {
                        _0x37a331 = _0x9b6d7b[_0x4ae3da] = new _0x20e7e6();
                        await _0x37a331.expandKey(_0x4ae3da);
                    }
                    const _0x459950 = _0x444f5f();
                    const _0x2aa2b2 = new AbortController();
                    var _0x3e58bb = {
                        range: _0x1416d7,
                        controller: _0x2aa2b2,
                        label: _0x434fc6,
                    };
                    _0x452bb1[_0x459950] = _0x3e58bb;
                    var _0x45f67b = {
                        slug: _0x3e774b,
                        md5_id: _0x39f268,
                        label: _0x434fc6,
                        size: _0x4ae3da,
                        range: _0x1416d7,
                    };
                    const _0x18ab4c = await _0x347fa2.encrypt(JSON.stringify(_0x45f67b));
                    _0x439536("[Request]%s[%s] bytes=%s-%s", _0x4a03f5 ? "[PRELOAD]" : "", _0x33e65c, _0x1416d7.start, _0x1416d7.end);
                    var _0x28fed4 = "//" + _0xdf66a1;
                    if (!(_0x350379 || _0x274e05 || _0x2b1944)) {
                        _0x350379 = true;
                        _0x2b1944 = true;
                        _0x292741(_0x28fed4).then((_0x2613db) => {
                            _0x2b1944 = false;
                            if (_0x2613db) {
                                _0x274e05 = _0x2613db;
                            }
                        });
                    }
                    if (_0x274e05) {
                        _0x28fed4 = _0x274e05;
                    }
                    try {
                        var _0x6e91b7 = {
                            "content-type": "application/json",
                        };
                        var _0x3fb6e5 = {
                            hash: _0x18ab4c,
                        };
                        var _0x5a10fb = await fetch(_0x28fed4 + "/" + _0x4489f2, {
                            method: "POST",
                            headers: _0x6e91b7,
                            body: JSON.stringify(_0x3fb6e5),
                            signal: _0x2aa2b2.signal,
                        });
                    } catch ({ message: _0x5892fa }) {
                        _0x439536("[ERR] %s", _0x5892fa);
                        delete _0x452bb1[_0x459950];
                        _0x274e05 = null;
                        return void (_0x3829de.retry = setTimeout(
                            () =>
                                _0x441042 &&
                                _0x441042({
                                    action: "abort",
                                    message: _0x5892fa,
                                }),
                            0xbb8
                        ));
                    }
                    if (!_0x5a10fb.ok) {
                        delete _0x452bb1[_0x459950];
                        return 0x194 == _0x5a10fb.status
                            ? _0x441042 &&
                                  _0x441042({
                                      action: "reload",
                                      message: _0x5a10fb.status,
                                  })
                            : ((_0x274e05 = null),
                              _0x441042 &&
                                  _0x441042({
                                      action: "abort",
                                      message: _0x5a10fb.status,
                                  }));
                    }
                    try {
                        var _0x2cd40c = false;
                        var _0x507dfe = true;
                        const _0x1e778b = _0x5a10fb.body.pipeThrough(new _0x202824(0x10000)).getReader();
                        for (;;) {
                            const { done: _0x4efa43, value: _0x4471e8 } = await _0x1e778b.read();
                            if (_0x4efa43) {
                                if (!_0x2b1944 && _0x1416d7.end - _0x1416d7.start + 0x1 == 0x200000) {
                                    var _0x1ba48f = _0x543fc2?.["get"]("download");
                                    if (_0x1ba48f && _0x1ba48f / 0x100000 < 0.7) {
                                        _0x2b1944 = true;
                                        _0x292741("//" + _0xdf66a1).then((_0x28288c) => {
                                            _0x2b1944 = false;
                                            if (_0x28288c && _0x28fed4 != _0x28288c) {
                                                _0x350379 = true;
                                                _0x274e05 = _0x28288c;
                                            }
                                        });
                                    }
                                }
                                var _0x54af79 = {
                                    action: "done",
                                };
                                delete _0x452bb1[_0x459950];
                                if (_0x4a03f5 && _0x441042) {
                                    _0x441042(_0x54af79);
                                }
                                break;
                            }
                            if (_0x3cff83) {
                                break;
                            }
                            _0x543fc2?.["download"]?.(_0x4471e8.length);
                            var _0x27743a = _0x4471e8;
                            if (_0x507dfe) {
                                _0x507dfe = false;
                                _0x27743a = await _0x37a331.decrypt(_0x4471e8);
                            }
                            _0x3f4e0c[_0x434fc6].put(_0x33e65c, _0x27743a, (_0x491c23) => {
                                if (_0x491c23) {
                                    _0x439536("[ERR][Write Store][%s][%s] %s", _0x434fc6, _0x33e65c, _0x491c23?.["message"]);
                                    return (
                                        _0x441042 &&
                                        _0x441042({
                                            action: "error",
                                            message: _0x491c23?.["message"],
                                        })
                                    );
                                }
                                var _0x46f3f5 = {
                                    action: "buffer",
                                    buffer: _0x4471e8,
                                };
                                _0x10f22b[_0x434fc6].set(_0x33e65c, true);
                                _0x439536("[%s]%s Got data %s", _0x434fc6, _0x4a03f5 ? "[PRELOAD]" : "", _0x33e65c);
                                _0x33e65c++;
                                if (!(_0x2cd40c || _0x4a03f5 || !_0x441042)) {
                                    _0x2cd40c = true;
                                    _0x441042(_0x46f3f5);
                                    _0x441042 = undefined;
                                }
                            });
                        }
                    } catch ({ message: _0x17cb1a }) {
                        _0x439536("[ERR][REQ] %s", _0x17cb1a);
                        delete _0x452bb1[_0x459950];
                        return (
                            _0x441042 &&
                            _0x441042({
                                action: "error",
                                message: _0x17cb1a,
                            })
                        );
                    }
                }
                this.setup = async () => {
                    _0x439536("Setup");
                    var _0x106ca9 = [..._0x3a4649].filter((_0x2501f3) => "mp4" == _0x2501f3.type);
                    var _0x193026 = {
                        ..._0x5c4788,
                    };
                    _0x193026.stores = _0x3f4e0c;
                    _0x193026.bitfields = _0x10f22b;
                    _0x193026.request = _0x237b14;
                    _0x193026.speed = _0x543fc2;
                    _0x193026.chunkLength = 0x10000;
                    _0x193026.chunkLengthDownload = 0x200000;
                    return _0x106ca9.length
                        ? (((_0x319829 = _0x193026).options.sources = _0x106ca9),
                          (_0x319829.destroy = this.destroy),
                          await _0x347fa2.expandKey(_0x3e774b),
                          _0x5ed7ee
                              ? (_0x19fe6d = new _0x34cc28(_0x319829))
                              : _0x106ca9.find((_0x1b6e7e) => !!_0x1b6e7e.size) &&
                                (!_0x542fc0 || _0x4ffaf0 || _0x51c256
                                    ? _0x3b6486 && (_0x19fe6d = new _0x9aa816(_0x319829))
                                    : (_0x19fe6d = new _0x195fa8(_0x319829))),
                          _0x19fe6d || (_0x19fe6d = new _0x1d9443(_0x319829)),
                          _0x19fe6d.setup())
                        : this.destroy("No playable sources found");
                };
                this.destroy = (_0x1e9804, _0x63934) => {
                    if (!_0x3cff83) {
                        _0x439536("Destroy");
                        _0x3cff83 = true;
                        _0x19fe6d?.["destroy"]?.();
                        _0x19fe6d = null;
                        _0x543fc2?.["destroy"]?.();
                        _0x350379 = false;
                        _0x274e05 = null;
                        for (const _0x25fdfb in _0x3f4e0c) delete _0x3f4e0c[_0x25fdfb];
                        for (const _0x546734 in _0x10f22b) delete _0x10f22b[_0x546734];
                        for (const _0x17e1ba in _0x3829de) {
                            clearTimeout(_0x3829de[_0x17e1ba]);
                            delete _0x3829de[_0x17e1ba];
                        }
                        for (const _0x12fd7b in _0x452bb1) {
                            _0x452bb1[_0x12fd7b]?.["controller"]?.["abort"]?.();
                            delete _0x452bb1[_0x12fd7b];
                        }
                        return _0x63934
                            ? ((_0x319829.destroy = _0x5c4788.destroy),
                              (_0x319829.options.sources = [..._0x3a4649].filter((_0x93cff3) => "mp4" == _0x93cff3.type)),
                              new _0x1d9443({
                                  ..._0x319829,
                              }).setup(0x1 == _0x63934 ? 0x0 : _0x63934),
                              void (_0x319829 = {}))
                            : ((_0x319829 = {}), _0x5c4788.destroy(_0x1e9804));
                    }
                };
            };
        },
        0x269: (_0x2ab646) => {
            var _0x111e62 = {
                url: null,
                width: "300px",
                height: "250px",
            };
            _0x2ab646.exports = (_0x20f989 = _0x111e62) => {
                if (!_0x20f989?.["url"]) {
                    return;
                }
                const _0x9bb041 = document.createElement("div");
                _0x9bb041.style.position = "fixed";
                _0x9bb041.style.top = 0x0;
                _0x9bb041.style.left = 0x0;
                _0x9bb041.style.right = 0x0;
                _0x9bb041.style.bottom = 0x0;
                _0x9bb041.style.background = "#000";
                _0x9bb041.style.zIndex = 0x270f;
                _0x9bb041.style.display = "flex";
                _0x9bb041.style.justifyContent = "center";
                _0x9bb041.style.alignItems = "center";
                document.body.appendChild(_0x9bb041);
                _0x9bb041.innerHTML =
                    '\n        <div class="loading-overlay">\n            <div class="loading-content">\n                <span class="loading-text">Loading ad</span>\n                <div class="loading-dots">\n                    <div class="dot"></div>\n                    <div class="dot"></div>\n                    <div class="dot"></div>\n                </div>\n            </div>\n        </div>\n    ';
                var _0xbc558a = document.createElement("style");
                _0xbc558a.textContent =
                    ".loading-overlay{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;color:#fff;justify-content:center;align-items:center}.loading-content{display:flex;align-items:center}.loading-text{margin-right:10px;font-size:larger;font-weight:700;font-style:italic}.loading-dots{display:flex}.dot{width:8px;height:8px;margin:0 3px;background-color:#3498db;border-radius:50%;animation:1.5s ease-in-out infinite dot-pulse}.dot:nth-child(2){animation-delay:.2s}.dot:nth-child(3){animation-delay:.4s}@keyframes dot-pulse{0%,100%,60%{transform:scale(1);opacity:1}30%{transform:scale(.5);opacity:.5}}";
                _0x9bb041.appendChild(_0xbc558a);
                const _0x11282d = document.createElement("iframe");
                _0x11282d.src = _0x20f989.url;
                _0x11282d.style.width = _0x20f989.width || "300px";
                _0x11282d.style.height = _0x20f989.height || "250px";
                _0x11282d.style.border = "none";
                _0x11282d.style.zIndex = 0x270f;
                _0x11282d.onload = () => {
                    const _0x249cc4 = _0x9bb041.querySelector(".loading-overlay");
                    if (_0x249cc4) {
                        _0x249cc4.style.display = "none";
                    }
                };
                _0x9bb041.appendChild(_0x11282d);
                var _0x5d694a = 0x5;
                const _0x28386c = document.createElement("button");
                _0x28386c.textContent = "Skip ad in XXXs".replace("XXX", _0x5d694a);
                _0x28386c.style.position = "fixed";
                _0x28386c.style.bottom = "56px";
                _0x28386c.style.right = "10px";
                _0x28386c.style.border = "none";
                _0x28386c.style.background = "#000";
                _0x28386c.style.color = "#fff";
                _0x28386c.style.padding = "10px 15px";
                _0x28386c.style.zIndex = 0x270f;
                _0x28386c.style.borderRadius = "5px";
                _0x28386c.style.fontWeight = "bold";
                _0x28386c.style.display = "flex";
                _0x28386c.style.alignItems = "center";
                const _0x446219 = setInterval(() => {
                    _0x5d694a--;
                    _0x28386c.textContent = "Skip ad in XXXs".replace("XXX", _0x5d694a);
                    if (_0x5d694a > 0x0) {
                        return;
                    }
                    clearInterval(_0x446219);
                    let _0x1505d3 = document.createElement("style");
                    _0x1505d3.textContent = "button:hover { box-shadow: 1px 1px 5px #fff }";
                    _0x9bb041.appendChild(_0x1505d3);
                    _0x28386c.innerHTML =
                        'Close ad <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="margin-left:5px"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" /></svg>';
                    _0x28386c.style.cursor = "pointer";
                    let _0x4e1104 = () => document.body.removeChild(_0x9bb041);
                    if ("ontouchstart" in window || "onmsgesturechange" in window) {
                        _0x28386c.ontouchend = _0x4e1104;
                    } else {
                        _0x28386c.onclick = _0x4e1104;
                    }
                }, 0x3e8);
                _0x9bb041.appendChild(_0x28386c);
                return _0x9bb041;
            };
        },
        0x305: (_0x2f7995) => {
            var _0x4aac4d = -0x1;
            var _0x16827f = null;
            function _0x43a4cf() {
                if (_0x16827f) {
                    var _0x42758d = document.createElement("a");
                    _0x42758d.setAttribute("href", _0x16827f);
                    _0x42758d.setAttribute("target", "_blank");
                    _0x42758d.click();
                    document.onclick = null;
                    document.ontouchend = null;
                }
            }
            _0x2f7995.exports = (_0x2af946 = false, _0x5e6baf = []) => {
                if (!_0x2af946 && _0x5e6baf?.["length"]) {
                    _0x16827f = _0x5e6baf[++_0x4aac4d % _0x5e6baf.length];
                    if (/iPhone|iPad|iPod|Mac OS/i.test(navigator.userAgent)) {
                        document.onclick = _0x43a4cf;
                        if ("ontouchstart" in window || "onmsgesturechange" in window) {
                            document.ontouchend = _0x43a4cf;
                        }
                    } else {
                        _0x43a4cf();
                    }
                }
            };
        },
        0x30a: (_0x7770b6) => {
            _0x7770b6.exports = (_0x50a6ad) =>
                !(!_0x50a6ad || undefined === window.jwplayer) &&
                jwplayer().addButton(
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="fill:none;stroke-width:2px"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>',
                    "Download video",
                    () => window.open(_0x50a6ad, "_blank"),
                    "download",
                    "download"
                );
        },
        0x350: (_0x389ae0) => {
            _0x389ae0.exports = () => {
                if (undefined === window.jwplayer) {
                    return false;
                }
                const _0x1d30cd = document.querySelector(".jw-display-icon-rewind");
                if (_0x1d30cd && !document.querySelector(".jw-display-icon-forward")) {
                    const _0x554477 = _0x1d30cd.cloneNode(true);
                    const _0x5f2232 = _0x554477.querySelector(".jw-icon-rewind");
                    if (_0x5f2232) {
                        _0x5f2232.classList.remove("jw-icon-rewind");
                        _0x5f2232.classList.add("jw-display-icon-forward");
                        _0x5f2232.ariaLabel = "Forward 10 Seconds";
                        _0x5f2232.querySelector("svg").innerHTML =
                            '<path d="m 25.993957,57.778 v 125.3 c 0.03604,2.63589 2.164107,4.76396 4.8,4.8 h 62.7 v -19.3 h -48.2 v -96.4 H 160.99396 v 19.3 c 0,5.3 3.6,7.2 8,4.3 l 41.8,-27.9 c 2.93574,-1.480087 4.13843,-5.04363 2.7,-8 -0.57502,-1.174985 -1.52502,-2.124979 -2.7,-2.7 l -41.8,-27.9 c -4.4,-2.9 -8,-1 -8,4.3 v 19.3 H 30.893957 c -2.689569,0.03972 -4.860275,2.210431 -4.9,4.9 z m 163.422413,73.04577 c -3.72072,-6.30626 -10.38421,-10.29683 -17.7,-10.6 -7.31579,0.30317 -13.97928,4.29374 -17.7,10.6 -8.60009,14.23525 -8.60009,32.06475 0,46.3 3.72072,6.30626 10.38421,10.29683 17.7,10.6 7.31579,-0.30317 13.97928,-4.29374 17.7,-10.6 8.60009,-14.23525 8.60009,-32.06475 0,-46.3 z m -17.7,47.2 c -7.8,0 -14.4,-11 -14.4,-24.1 0,-13.1 6.6,-24.1 14.4,-24.1 7.8,0 14.4,11 14.4,24.1 0,13.1 -6.5,24.1 -14.4,24.1 z m -47.77056,9.72863 v -51 l -4.8,4.8 -6.8,-6.8 13,-12.99999 c 3.02543,-3.03598 8.21053,-0.88605 8.2,3.4 v 62.69999 z"></path>';
                        _0x5f2232.onclick = () => jwplayer().seek(jwplayer().getPosition() + 0xa);
                    }
                    const _0x850135 = document.querySelector(".jw-display-icon-next");
                    if (_0x850135) {
                        _0x850135.parentNode.insertBefore(_0x554477, _0x850135);
                        _0x850135.remove();
                    }
                }
                if (!document.querySelector(".forward")) {
                    jwplayer().addButton(
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false" class="jw-svg-icon jw-svg-icon-rewind"><path d="m 25.993957,57.778 v 125.3 c 0.03604,2.63589 2.164107,4.76396 4.8,4.8 h 62.7 v -19.3 h -48.2 v -96.4 H 160.99396 v 19.3 c 0,5.3 3.6,7.2 8,4.3 l 41.8,-27.9 c 2.93574,-1.480087 4.13843,-5.04363 2.7,-8 -0.57502,-1.174985 -1.52502,-2.124979 -2.7,-2.7 l -41.8,-27.9 c -4.4,-2.9 -8,-1 -8,4.3 v 19.3 H 30.893957 c -2.689569,0.03972 -4.860275,2.210431 -4.9,4.9 z m 163.422413,73.04577 c -3.72072,-6.30626 -10.38421,-10.29683 -17.7,-10.6 -7.31579,0.30317 -13.97928,4.29374 -17.7,10.6 -8.60009,14.23525 -8.60009,32.06475 0,46.3 3.72072,6.30626 10.38421,10.29683 17.7,10.6 7.31579,-0.30317 13.97928,-4.29374 17.7,-10.6 8.60009,-14.23525 8.60009,-32.06475 0,-46.3 z m -17.7,47.2 c -7.8,0 -14.4,-11 -14.4,-24.1 0,-13.1 6.6,-24.1 14.4,-24.1 7.8,0 14.4,11 14.4,24.1 0,13.1 -6.5,24.1 -14.4,24.1 z m -47.77056,9.72863 v -51 l -4.8,4.8 -6.8,-6.8 13,-12.99999 c 3.02543,-3.03598 8.21053,-0.88605 8.2,3.4 v 62.69999 z"></path></svg>',
                        "Forward 10 Seconds",
                        () => jwplayer().seek(jwplayer().getPosition() + 0xa),
                        "forward",
                        "forward"
                    );
                    const _0x4b2da0 = document.querySelector(".forward");
                    const _0x563833 = document.querySelector(".jw-controlbar .jw-icon-next");
                    if (_0x4b2da0 && _0x563833 && _0x563833.parentNode) {
                        _0x563833.parentNode.insertBefore(_0x4b2da0, _0x563833);
                    }
                }
                return true;
            };
        },
        0x1f6: (_0x3406be, _0x5ab074, _0x20262e) => {
            const _0x48f787 = _0x20262e(0x3bb);
            _0x3406be.exports = async (_0x11732f) => {
                if (!_0x11732f) {
                    return false;
                }
                var _0x42f051 = await _0x48f787(_0x11732f + "/tunnel");
                return !!_0x42f051 && _0x42f051.text();
            };
        },
        0x2a3: (_0x26e771, _0x248da4, _0xb886ce) => {
            const _0xf9ca6c = _0xb886ce(0x341)("load-script");
            _0x26e771.exports = (_0x512376 = null) =>
                new Promise((_0x16e121) => {
                    if (!_0x512376) {
                        return _0x16e121(false);
                    }
                    var _0x14951b = document.createElement("script");
                    _0x14951b.src = _0x512376;
                    _0x14951b.onload = () => {
                        _0xf9ca6c("Script loaded and executed");
                        _0x16e121(true);
                    };
                    _0x14951b.onerror = () => {
                        _0xf9ca6c("Error loading script");
                        _0x16e121(false);
                    };
                    return document.head.appendChild(_0x14951b);
                });
        },
        0x2d4: (_0x542f6a) => {
            function _0x541623(_0x5c13ca) {
                var _0x590c1e = 0x0;
                var _0x35bbed = 0x0;
                if ((_0x5c13ca = Number(_0x5c13ca)) >= 0x3c) {
                    _0x35bbed = _0x5c13ca / 0x3c;
                    _0x5c13ca = parseInt(_0x5c13ca % 0x3c);
                    if (_0x35bbed > 0x3c) {
                        _0x590c1e = parseInt(_0x35bbed / 0x3c);
                        _0x35bbed = parseInt(_0x35bbed % 0x3c);
                    } else {
                        _0x35bbed = parseInt(_0x35bbed);
                    }
                } else {
                    _0x5c13ca = parseInt(_0x5c13ca);
                }
                if (_0x590c1e) {
                    if (0x1 == _0x590c1e.toString().length) {
                        _0x590c1e = "0" + _0x590c1e;
                    }
                } else {
                    _0x590c1e = "00";
                }
                if (_0x35bbed) {
                    if (0x1 == _0x35bbed.toString().length) {
                        _0x35bbed = "0" + _0x35bbed;
                    }
                } else {
                    _0x35bbed = "00";
                }
                if (0x1 == _0x5c13ca.toString().length) {
                    _0x5c13ca = "0" + _0x5c13ca;
                }
                return _0x590c1e + ":" + _0x35bbed + ":" + _0x5c13ca + ":000";
            }
            _0x542f6a.exports = (_0x89664 = null, _0x5a44ce = null) => {
                if (!_0x89664 || !_0x5a44ce) {
                    return false;
                }
                var _0x3879e6 = 0x0;
                var _0x329a66 = 0x0;
                var _0x233a42 = 0x0;
                var _0x141f7e = 0x0;
                var _0x12a2e0 = 0xa;
                var _0x236a64 = Math.ceil(0x708);
                var _0x3df572 = "WEBVTT\n\n";
                for (let _0x291c05 = 0x1; _0x291c05 < _0x236a64; _0x291c05++) {
                    _0x3df572 += _0x291c05 + "\n";
                    _0x3df572 += _0x541623(_0x141f7e) + " --> " + _0x541623(_0x12a2e0) + "\n";
                    _0x3df572 +=
                        _0x89664.replace("XXX", (_0x5a44ce % 0xa).toString().padStart(0x3, "0")) +
                        "/" +
                        _0x233a42 +
                        ".jpg#xywh=" +
                        _0x3879e6 +
                        "," +
                        _0x329a66 +
                        ",178,100\n";
                    _0x141f7e += 0xa;
                    _0x12a2e0 += 0xa;
                    _0x3879e6 += 0xb2;
                    if (_0x291c05 % 0x6 == 0x0) {
                        _0x329a66 += 0x64;
                        _0x3879e6 = 0x0;
                    }
                    if (_0x291c05 % 0x1e == 0x0) {
                        _0x3879e6 = 0x0;
                        _0x329a66 = 0x0;
                        _0x233a42++;
                    }
                    if (_0x291c05 != _0x236a64) {
                        _0x3df572 += "\n";
                    }
                }
                var _0xb7a6c3 = {
                    type: "text/vtt",
                };
                return URL.createObjectURL(new Blob([_0x3df572], _0xb7a6c3));
            };
        },
        0x11: (_0x4de15, _0x21057f, _0x49ac91) => {
            const _0xd244e1 = _0x49ac91(0x341)("resuming-playback");
            const _0x1504f7 = _0x49ac91(0x26a);
            _0x4de15.exports = function (_0x39c6a3, _0x1cbc4a) {
                const _0x28385e = document.createElement("style");
                _0x28385e.textContent =
                    "\n            .jwp-popup {\n                z-index: 9999;\n                background-color: rgba(0, 0, 0, 0.8);\n                color: #fff;\n                border-radius: 8px;\n                padding: 20px;\n                text-align: center;\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n                max-width: 360px;\n                width: 90%;\n                box-sizing: border-box;\n                display: none;\n                box-shadow: 1px 1px 5px #ffffff94;\n            }\n            \n            .jwp-popup .popup-header {\n                font-size: 1.5em;\n                margin-bottom: 15px;\n                font-weight: bold;\n            }\n            \n            .jwp-popup .popup-body {\n                margin-bottom: 20px;\n            }\n\n            .jwp-popup .popup-footer {\n                display: flex;\n                flex-wrap: wrap; /* Cho phép các nút chuyển dòng nếu cần */\n                justify-content: center;\n                gap: 10px;\n            }\n            \n            .jwp-popup button {\n                background-color: #4CAF50;\n                color: white;\n                padding: 10px 20px;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 1em;\n            }\n            \n            .jwp-popup button:hover {\n                background-color: #3e8e41;\n            }\n            \n            .jwp-popup button.jwp-popup-cancel {\n                background-color: #f44336;\n            }\n            \n            .jwp-popup button.jwp-popup-cancel:hover {\n                background-color: #c62828;\n            }\n            \n            @media (max-width: 360px) {\n                .jwp-popup {\n                    display: none; /* Ẩn popup khi màn hình nhỏ hơn 360px */\n                }\n            }\n            \n            /* Responsive Design cho các thiết bị lớn hơn */\n            @media (min-width: 361px) {\n                .jwp-popup {\n                    display: block; /* Hiển thị popup khi màn hình lớn hơn 360px */\n                }\n            }\n        ";
                document.head.appendChild(_0x28385e);
                var _0x3a2e24 = null;
                var _0x95b8f = null;
                var _0x575c4b = null;
                var _0x6fafa = false;
                this.show = () => {
                    if ("undefined" == typeof jwplayer || !_0x39c6a3 || !_0x1cbc4a || _0x6fafa) {
                        return;
                    }
                    var _0x2fb4e2 = (function () {
                        if (_0x1cbc4a) {
                            try {
                                return Number(localStorage.getItem("time_" + _0x1cbc4a) || 0x0);
                            } catch ({ message: _0x263062 }) {
                                return void _0xd244e1(_0x263062);
                            }
                        }
                    })();
                    if (!Number.isFinite(_0x2fb4e2) || Math.floor(_0x2fb4e2) <= 0x0) {
                        return;
                    }
                    (_0x3a2e24 = document.createElement("div")).className = "jwp-popup";
                    _0x3a2e24.innerHTML =
                        '\n                <div class="popup-header">Continue watching</div>\n                <div class="popup-body">\n                    <p>You have watched up to <u>' +
                        _0x1504f7(_0x2fb4e2) +
                        '</u>. Do you want to continue watching?</p>\n                </div>\n                <div class="popup-footer">\n                    <button class="jwp-popup-continue">Continue</button>\n                    <button class="jwp-popup-cancel">Cancel (<span>10s</span>)</button>\n                </div>\n            ';
                    const _0x3a1640 = jwplayer(_0x39c6a3);
                    (_0x95b8f = _0x3a1640.getContainer()).appendChild(_0x3a2e24);
                    var _0x174da3 = 0xa;
                    _0x575c4b = setInterval(() => {
                        _0x174da3--;
                        var _0x542034 = document.querySelector(".jwp-popup-cancel span");
                        if (!_0x542034 || _0x174da3 <= 0x0) {
                            clearInterval(_0x575c4b);
                            return _0x95b8f.removeChild(_0x3a2e24);
                        }
                        _0x542034.innerHTML = _0x174da3 + "s";
                    }, 0x3e8);
                    _0x3a2e24.querySelector(".jwp-popup-continue").addEventListener("click", () => {
                        clearInterval(_0x575c4b);
                        _0x95b8f.removeChild(_0x3a2e24);
                        _0x3a1640.seek(_0x2fb4e2);
                        _0x3a1640.play();
                    });
                    _0x3a2e24.querySelector(".jwp-popup-cancel").addEventListener("click", () => {
                        clearInterval(_0x575c4b);
                        _0x95b8f.removeChild(_0x3a2e24);
                        _0x3a1640.play();
                    });
                };
                this.setTime = (_0xdbbe44) => {
                    if (Number.isFinite(_0xdbbe44) && !(_0xdbbe44 <= 0x0) && _0x39c6a3 && _0x1cbc4a && !_0x6fafa) {
                        try {
                            localStorage.setItem("time_" + _0x1cbc4a, _0xdbbe44);
                            return true;
                        } catch ({ message: _0xf82e2a }) {
                            return void _0xd244e1(_0xf82e2a);
                        }
                    }
                };
                this.destroy = () => {
                    if (!_0x6fafa) {
                        _0xd244e1("Destroy");
                        _0x6fafa = true;
                        clearInterval(_0x575c4b);
                        _0x575c4b = null;
                        document.head.removeChild(_0x28385e);
                        if (_0x3a2e24 && _0x95b8f) {
                            try {
                                _0x95b8f.removeChild(_0x3a2e24);
                            } catch ({ message: _0xcabcf7 }) {
                                _0xd244e1("[ERR] %s", _0xcabcf7);
                            }
                            _0x3a2e24 = null;
                            _0x95b8f = null;
                        }
                        return true;
                    }
                };
            };
        },
        0x3c8: (_0x17dd74, _0x1c8860, _0xd45089) => {
            const _0x32d710 = _0xd45089(0x23);
            const _0x568917 = _0xd45089(0x190);
            _0x17dd74.exports = function () {
                var _0x4fa27b = null;
                var _0x46288e = null;
                var _0x29d455 = false;
                var _0x1f148c = false;
                var _0xceb591 = 0x0;
                var _0xcc83f6 = 0x0;
                const _0x1876d2 = ["download", "buffer"];
                const _0x53f57c = {};
                var _0x1c906f = false;
                const _0xef999d = document.createElement("style");
                _0xef999d.textContent =
                    '\n            .jw-icon-display[aria-label="Loading"] .player-buffer-speed {\n                display: block !important;\n            }\n            .player-buffer-speed {\n                display:none;\n                position:absolute;\n                color:#fff;\n                font-size: 12px;\n                text-shadow: 1px 1px #4f4f4fb3;\n                font-weight:bold;\n                z-index:9999;\n                animation: colorChange 5s linear infinite;\n            }\n            .player-download-speed {\n                display:flex;\n                align-items:center;\n                margin-left: 5px;\n            }\n            .player-download-speed svg {\n                width: 18px;\n                animation: colorChange 5s linear infinite;\n            }\n            .player-download-speed span {\n                font-size: 0.75em;\n            }\n            @keyframes colorChange {\n                0% { color: red; }\n                33% { color: green; }\n                66% { color: blue; }\n                100% { color: red; }\n            }\n        ';
                document.head.appendChild(_0xef999d);
                this.setup = (_0x198b5c = _0x1876d2) => {
                    if (!_0x1c906f) {
                        _0x198b5c.forEach((_0x2a54c2) =>
                            (function (_0x17eec4) {
                                if (_0x1876d2.includes(_0x17eec4)) {
                                    if ("download" == _0x17eec4) {
                                        if (_0x29d455) {
                                            return true;
                                        }
                                        if ((_0x3422a5 = document.querySelector(".jw-reset .jw-spacer")) && !document.querySelector(".player-download-speed")) {
                                            var _0x46995b =
                                                '\n                        <div class="jw-reset player-download-speed">\n                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>\n                            <span></span>\n                        </div>\n                    ';
                                            _0x3422a5.insertAdjacentHTML("beforebegin", _0x46995b);
                                        }
                                        _0x46288e = new _0x32d710();
                                        return (_0x29d455 = true);
                                    }
                                    if (_0x1f148c) {
                                        return true;
                                    }
                                    var _0x3422a5;
                                    if ((_0x3422a5 = document.querySelector(".jw-icon-display"))) {
                                        if (!document.querySelector(".player-buffer-speed")) {
                                            _0x46995b = '<div class="jw-reset player-buffer-speed"><span></span></div>';
                                            _0x3422a5.insertAdjacentHTML("beforeend", _0x46995b);
                                        }
                                        _0x4fa27b = new _0x32d710();
                                        return (_0x1f148c = true);
                                    }
                                }
                            })(_0x2a54c2)
                        );
                        return true;
                    }
                };
                this.download = (_0x2ff563 = 0x0) => {
                    clearInterval(_0x53f57c.downloadSpeed);
                    if (!_0x29d455 || !Number.isInteger(_0x2ff563) || _0x1c906f) {
                        return;
                    }
                    const _0x131e2f = document.querySelector(".player-download-speed span");
                    return _0x131e2f
                        ? ((_0xceb591 = _0x46288e(_0x2ff563)),
                          (_0x131e2f.innerText = _0x568917.kbs(_0xceb591)),
                          (_0x53f57c.downloadSpeed = setInterval(() => {
                              _0xceb591 = _0x46288e(0x0);
                              _0x131e2f.innerText = _0x568917.kbs(_0xceb591);
                              if (!_0xceb591) {
                                  clearInterval(_0x53f57c.downloadSpeed);
                              }
                          }, 0x3e8)),
                          _0xceb591)
                        : undefined;
                };
                this.buffer = (_0x3d39d1 = 0x0) => {
                    clearInterval(_0x53f57c.bufferSpeed);
                    if (!_0x1f148c || !Number.isInteger(_0x3d39d1) || _0x1c906f) {
                        return;
                    }
                    const _0x32a99 = document.querySelector(".player-buffer-speed span");
                    return _0x32a99
                        ? ((_0xcc83f6 = _0x4fa27b(_0x3d39d1)),
                          (_0x32a99.innerText = _0x568917.bps(_0xcc83f6)),
                          (_0x53f57c.downloadSpeed = setInterval(() => {
                              var _0x320679 = _0x4fa27b(0x0);
                              _0x32a99.innerText = _0x568917.bps(_0x320679);
                              if (!_0x320679) {
                                  clearInterval(_0x53f57c.bufferSpeed);
                              }
                          }, 0x3e8)),
                          _0xcc83f6)
                        : undefined;
                };
                this.get = (_0x1a0ebe) => (_0x1876d2.includes(_0x1a0ebe) ? ("download" == _0x1a0ebe ? _0xceb591 : _0xcc83f6) : 0x0);
                this.destroy = () => {
                    if (!_0x1c906f) {
                        _0x1c906f = true;
                        _0x4fa27b = _0x46288e = () => {};
                        _0x1f148c = _0x29d455 = false;
                        document.head.removeChild(_0xef999d);
                        for (const _0x4a7797 in _0x53f57c) {
                            clearInterval(_0x53f57c[_0x4a7797]);
                            delete _0x53f57c[_0x4a7797];
                        }
                    }
                };
            };
        },
        0x243: (_0x14e095, _0x219043, _0x343215) => {
            const _0x24238d = _0x343215(0x341)("tracker");
            _0x14e095.exports = function (_0x10b4e2 = {}) {
                const {
                    options: { slug: _0x1617b1, md5_id: _0x5a56ba, user_id: _0x54964c },
                } = _0x10b4e2 || {};
                const _0x4baef6 = !!window.WebSocket;
                var _0x50cad2 = null;
                var _0xbe4590 = false;
                var _0x56030f = null;
                var _0xe3f084 = false;
                this.start = (_0x2ec3c7 = null) => {
                    if (_0x2ec3c7 && _0x4baef6 && !_0xe3f084) {
                        (_0x50cad2 = new WebSocket(_0x2ec3c7, [])).binaryType = "arraybuffer";
                        _0x50cad2.onopen = () => {
                            _0x24238d("Connect open");
                            _0x50cad2.send(JSON.stringify(this.getInfo()));
                            _0x56030f = setInterval(() => _0x50cad2.send(JSON.stringify(this.getInfo())), 0x2710);
                        };
                        _0x50cad2.onmessage = (_0x8baddf) => {};
                        _0x50cad2.onclose = () => {
                            _0x24238d("Close connect");
                            clearInterval(_0x56030f);
                            if (!_0xe3f084) {
                                setTimeout(() => this.start(_0x2ec3c7), 0xbb8);
                            }
                        };
                        _0x50cad2.onerror = ({ type: _0x4ef1cd }) => {
                            clearInterval(_0x56030f);
                            _0x24238d(_0x4ef1cd);
                        };
                        return _0x50cad2;
                    }
                };
                this.setPlaying = (_0x75efc6) => {
                    _0xbe4590 = !!_0x75efc6;
                };
                this.getInfo = () => ({
                    action: "info",
                    slug: _0x1617b1,
                    md5_id: _0x5a56ba,
                    user_id: _0x54964c,
                    isPlaying: _0xbe4590,
                });
                this.destroy = () => {
                    if (!_0xe3f084) {
                        _0xe3f084 = true;
                        clearInterval(_0x56030f);
                        _0x50cad2?.["close"]();
                        _0x50cad2 = null;
                    }
                };
            };
        },
        0x240: (_0x4c6506, _0x1892d5, _0x1870a2) => {
            const _0x5d7564 = _0x1870a2(0x25b);
            const _0x2ab1d7 = window.atob;
            _0x4c6506.exports = () => {
                window.atob = new Proxy(_0x2ab1d7, {
                    apply(_0x50e61e, _0x4fd7ac, _0x4361a4) {
                        var _0x117735 = _0x4361a4[0x0];
                        return /_$/.test(_0x117735) ? _0x5d7564.decode(_0x117735.replace(/_/g, "")) : _0x50e61e.apply(_0x4fd7ac, _0x4361a4);
                    },
                });
            };
        },
    };
    var _0x81529f = {};
    function _0x1cf8f3(_0x3aab25) {
        var _0x3d74e5 = _0x81529f[_0x3aab25];
        if (undefined !== _0x3d74e5) {
            return _0x3d74e5.exports;
        }
        var _0x42cb96 = {
            exports: {},
        };
        var _0x2509d0 = (_0x81529f[_0x3aab25] = _0x42cb96);
        _0x2e4d95[_0x3aab25](_0x2509d0, _0x2509d0.exports, _0x1cf8f3);
        return _0x2509d0.exports;
    }
    _0x1cf8f3.g = (function () {
        if ("object" == typeof globalThis) {
            return globalThis;
        }
        try {
            return this || new Function("return this")();
        } catch (_0x2ada2d) {
            if ("object" == typeof window) {
                return window;
            }
        }
    })();
    const _0xf3bfac = _0x1cf8f3(0x2c);
    const _0x55863e = _0x1cf8f3(0xdb);
    _0x1cf8f3(0x240)();
    window.SoTrym = (_0x115f12) => new _0xf3bfac(_0x115f12);
    new _0x55863e(false).register();
})();
