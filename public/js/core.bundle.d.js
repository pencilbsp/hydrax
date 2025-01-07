var a0_0x1dcdd5 = function () {
    var _0x2f56dc = true;
    return function (_0x44eccf, _0x1d7d3c) {
      var _0x3013db = _0x2f56dc ? function () {
        if (_0x1d7d3c) {
          var _0x47d904 = _0x1d7d3c.apply(_0x44eccf, arguments);
          _0x1d7d3c = null;
          return _0x47d904;
        }
      } : function () {};
      _0x2f56dc = false;
      return _0x3013db;
    };
  }();
  var a0_0x1a50c5 = a0_0x1dcdd5(this, function () {
    return a0_0x1a50c5.toString().search("(((.+)+)+)+$").toString().constructor(a0_0x1a50c5).search("(((.+)+)+)+$");
  });
  a0_0x1a50c5();
  (() => {
    var _0x430fef = {
      0x1c8: (_0x132c85, _0x2a2105) => {
        'use strict';
  
        var _0x481047 = {
          "value": true
        };
        Object.defineProperty(_0x2a2105, "__esModule", _0x481047);
        var _0x2d17e8 = function () {
          function _0x2a562f(_0x288225, _0x3016dd) {
            if (undefined === _0x288225) {
              _0x288225 = 0x0;
            }
            var _0x43ef47 = null == _0x3016dd ? undefined : _0x3016dd.grow;
            this.grow = _0x43ef47 ? Number.isFinite(_0x43ef47) ? (_0x43ef47 >> 0x3) + Number(_0x43ef47 % 0x8 != 0x0) : _0x43ef47 : 0x0;
            this.buffer = 'number' == typeof _0x288225 ? new Uint8Array((_0x288225 >> 0x3) + Number(_0x288225 % 0x8 != 0x0)) : _0x288225;
          }
          var _0x5b7a23 = {
            "get": function () {
              return this.buffer.length << 0x3;
            },
            "enumerable": false,
            configurable: true
          };
          Object.defineProperty(_0x2a562f.prototype, "length", _0x5b7a23);
          _0x2a562f.prototype.get = function (_0x5adf07) {
            var _0x58019b = _0x5adf07 >> 0x3;
            return _0x58019b < this.buffer.length && !!(this.buffer[_0x58019b] & 0x80 >> _0x5adf07 % 0x8);
          };
          _0x2a562f.prototype.set = function (_0x30e225, _0x299c66) {
            if (undefined === _0x299c66) {
              _0x299c66 = true;
            }
            var _0x156246 = _0x30e225 >> 0x3;
            if (_0x299c66) {
              if (_0x156246 >= this.buffer.length) {
                var _0x1bbcac = Math.max(_0x156246 + 0x1, Math.min(0x2 * this.buffer.length, this.grow));
                if (_0x1bbcac <= this.grow) {
                  var _0xd1c6db = new Uint8Array(_0x1bbcac);
                  _0xd1c6db.set(this.buffer);
                  this.buffer = _0xd1c6db;
                }
              }
              this.buffer[_0x156246] |= 0x80 >> _0x30e225 % 0x8;
            } else if (_0x156246 < this.buffer.length) {
              this.buffer[_0x156246] &= ~(0x80 >> _0x30e225 % 0x8);
            }
          };
          _0x2a562f.prototype.setAll = function (_0x3ef0c2, _0x4fbda6) {
            if (undefined === _0x4fbda6) {
              _0x4fbda6 = 0x0;
            }
            var _0x8ed7f5 = Math.min((_0x4fbda6 + _0x3ef0c2.length >> 0x3) + Number((_0x4fbda6 + _0x3ef0c2.length) % 0x8 != 0x0), this.grow);
            if (this.buffer.length < _0x8ed7f5) {
              var _0x3f55e3 = new Uint8Array(_0x8ed7f5);
              _0x3f55e3.set(this.buffer);
              this.buffer = _0x3f55e3;
            }
            var _0x5f2557 = _0x4fbda6 >> 0x3;
            var _0x20b640 = 0x80 >> _0x4fbda6 % 0x8;
            for (var _0x4ae891 = 0x0; _0x4ae891 < _0x3ef0c2.length; _0x4ae891++) {
              if (_0x3ef0c2[_0x4ae891]) {
                this.buffer[_0x5f2557] |= _0x20b640;
              } else {
                this.buffer[_0x5f2557] &= ~_0x20b640;
              }
              if (0x1 === _0x20b640) {
                if ((_0x5f2557 += 0x1) >= this.buffer.length) {
                  break;
                }
                _0x20b640 = 0x80;
              } else {
                _0x20b640 >>= 0x1;
              }
            }
          };
          _0x2a562f.prototype.forEach = function (_0x217570, _0x79571a, _0x10c625) {
            if (undefined === _0x79571a) {
              _0x79571a = 0x0;
            }
            if (undefined === _0x10c625) {
              _0x10c625 = 0x8 * this.buffer.length;
            }
            var _0x112379 = _0x79571a >> 0x3;
            var _0x35e623 = 0x80 >> _0x79571a % 0x8;
            for (var _0x27ea20 = _0x79571a; _0x27ea20 < _0x10c625; _0x27ea20++) {
              _0x217570(!!(this.buffer[_0x112379] & _0x35e623), _0x27ea20);
              if (0x1 === _0x35e623) {
                _0x112379 += 0x1;
                _0x35e623 = 0x80;
              } else {
                _0x35e623 >>= 0x1;
              }
            }
          };
          _0x2a562f.prototype.isEmpty = function () {
            for (var _0x1cc4bb = 0x0; _0x1cc4bb < this.buffer.length; _0x1cc4bb++) {
              if (0x0 !== this.buffer[_0x1cc4bb]) {
                return false;
              }
            }
            return true;
          };
          return _0x2a562f;
        }();
        _0x2a2105['default'] = _0x2d17e8;
      },
      0x97: _0x198252 => {
        var _0xfed77a = {
          'utf8': {
            'stringToBytes': function (_0x1336eb) {
              return _0xfed77a.bin.stringToBytes(unescape(encodeURIComponent(_0x1336eb)));
            },
            'bytesToString': function (_0x2485fe) {
              return decodeURIComponent(escape(_0xfed77a.bin.bytesToString(_0x2485fe)));
            }
          },
          'bin': {
            'stringToBytes': function (_0xf2b33b) {
              var _0x1c0d82 = [];
              for (var _0x3b974f = 0x0; _0x3b974f < _0xf2b33b.length; _0x3b974f++) {
                _0x1c0d82.push(0xff & _0xf2b33b.charCodeAt(_0x3b974f));
              }
              return _0x1c0d82;
            },
            'bytesToString': function (_0x5d7f7a) {
              var _0x3f7650 = [];
              for (var _0x297737 = 0x0; _0x297737 < _0x5d7f7a.length; _0x297737++) {
                _0x3f7650.push(String.fromCharCode(_0x5d7f7a[_0x297737]));
              }
              return _0x3f7650.join('');
            }
          }
        };
        _0x198252.exports = _0xfed77a;
      },
      0x3ab: _0x3853e9 => {
        var _0x57413f;
        _0x57413f = {
          'rotl': function (_0x1cd785, _0x482c94) {
            return _0x1cd785 << _0x482c94 | _0x1cd785 >>> 0x20 - _0x482c94;
          },
          'rotr': function (_0x23c684, _0x5f342a) {
            return _0x23c684 << 0x20 - _0x5f342a | _0x23c684 >>> _0x5f342a;
          },
          'endian': function (_0x334386) {
            if (_0x334386.constructor == Number) {
              return 0xff00ff & (_0x334386 << 0x8 | _0x334386 >>> 24) | 0xff00ff00 & (_0x334386 << 0x18 | _0x334386 >>> 8);
            }
            for (var _0x3f391a = 0x0; _0x3f391a < _0x334386.length; _0x3f391a++) {
              _0x334386[_0x3f391a] = _0x57413f.endian(_0x334386[_0x3f391a]);
            }
            return _0x334386;
          },
          'randomBytes': function (_0x3c326c) {
            for (var _0x5c7539 = []; _0x3c326c > 0x0; _0x3c326c--) {
              _0x5c7539.push(Math.floor(0x100 * Math.random()));
            }
            return _0x5c7539;
          },
          'bytesToWords': function (_0x11df85) {
            var _0x1af346 = [];
            var _0x2143ea = 0x0;
            for (var _0x327c25 = 0x0; _0x2143ea < _0x11df85.length; _0x2143ea++, _0x327c25 += 0x8) {
              _0x1af346[_0x327c25 >>> 0x5] |= _0x11df85[_0x2143ea] << 0x18 - _0x327c25 % 0x20;
            }
            return _0x1af346;
          },
          'wordsToBytes': function (_0x2ed9a5) {
            var _0x34b8fc = [];
            for (var _0x46e6c6 = 0x0; _0x46e6c6 < 0x20 * _0x2ed9a5.length; _0x46e6c6 += 0x8) {
              _0x34b8fc.push(_0x2ed9a5[_0x46e6c6 >>> 0x5] >>> 0x18 - _0x46e6c6 % 0x20 & 0xff);
            }
            return _0x34b8fc;
          },
          'bytesToHex': function (_0xdc812c) {
            var _0x311d78 = [];
            for (var _0xfa63f2 = 0x0; _0xfa63f2 < _0xdc812c.length; _0xfa63f2++) {
              _0x311d78.push((_0xdc812c[_0xfa63f2] >>> 0x4).toString(0x10));
              _0x311d78.push((0xf & _0xdc812c[_0xfa63f2]).toString(0x10));
            }
            return _0x311d78.join('');
          },
          'hexToBytes': function (_0x5307a7) {
            var _0x15975b = [];
            for (var _0x4aa43e = 0x0; _0x4aa43e < _0x5307a7.length; _0x4aa43e += 0x2) {
              _0x15975b.push(parseInt(_0x5307a7.substr(_0x4aa43e, 0x2), 0x10));
            }
            return _0x15975b;
          },
          'bytesToBase64': function (_0x3df6a4) {
            var _0x3bde0b = [];
            for (var _0x11a7ac = 0x0; _0x11a7ac < _0x3df6a4.length; _0x11a7ac += 0x3) {
              var _0x5b192b = _0x3df6a4[_0x11a7ac] << 0x10 | _0x3df6a4[_0x11a7ac + 0x1] << 0x8 | _0x3df6a4[_0x11a7ac + 0x2];
              for (var _0x2a0b56 = 0x0; _0x2a0b56 < 0x4; _0x2a0b56++) {
                if (0x8 * _0x11a7ac + 0x6 * _0x2a0b56 <= 0x8 * _0x3df6a4.length) {
                  _0x3bde0b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_0x5b192b >>> 0x6 * (0x3 - _0x2a0b56) & 0x3f));
                } else {
                  _0x3bde0b.push('=');
                }
              }
            }
            return _0x3bde0b.join('');
          },
          'base64ToBytes': function (_0x48daa5) {
            _0x48daa5 = _0x48daa5.replace(/[^A-Z0-9+\/]/gi, '');
            var _0x3412c5 = [];
            var _0x47bdc4 = 0x0;
            for (var _0x4cf1ac = 0x0; _0x47bdc4 < _0x48daa5.length; _0x4cf1ac = ++_0x47bdc4 % 0x4) {
              if (0x0 != _0x4cf1ac) {
                _0x3412c5.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x48daa5.charAt(_0x47bdc4 - 0x1)) & Math.pow(0x2, -0x2 * _0x4cf1ac + 0x8) - 0x1) << 0x2 * _0x4cf1ac | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x48daa5.charAt(_0x47bdc4)) >>> 0x6 - 0x2 * _0x4cf1ac);
              }
            }
            return _0x3412c5;
          }
        };
        _0x3853e9.exports = _0x57413f;
      },
      0x341: (_0x49c48a, _0x3e439b, _0x5586aa) => {
        var _0x1bd33f = _0x5586aa(0x25e);
        _0x3e439b.formatArgs = function (_0x30d467) {
          _0x30d467[0x0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? " %c" : " ") + _0x30d467[0x0] + (this.useColors ? "%c " : " ") + '+' + _0x49c48a.exports.humanize(this.diff);
          if (!this.useColors) {
            return;
          }
          const _0x2a4755 = "color: " + this.color;
          _0x30d467.splice(0x1, 0x0, _0x2a4755, "color: inherit");
          let _0x19fca3 = 0x0;
          let _0x145f5b = 0x0;
          _0x30d467[0x0].replace(/%[a-zA-Z%]/g, _0x465a4b => {
            if ('%%' !== _0x465a4b) {
              _0x19fca3++;
              if ('%c' === _0x465a4b) {
                _0x145f5b = _0x19fca3;
              }
            }
          });
          _0x30d467.splice(_0x145f5b, 0x0, _0x2a4755);
        };
        _0x3e439b.save = function (_0x4bc3fc) {
          try {
            if (_0x4bc3fc) {
              _0x3e439b.storage.setItem("debug", _0x4bc3fc);
            } else {
              _0x3e439b.storage.removeItem("debug");
            }
          } catch (_0x21426) {}
        };
        _0x3e439b.load = function () {
          let _0xeb9b27;
          try {
            _0xeb9b27 = _0x3e439b.storage.getItem("debug");
          } catch (_0x10fe0a) {}
          if (!_0xeb9b27 && undefined !== _0x1bd33f && "env" in _0x1bd33f) {
            _0xeb9b27 = _0x1bd33f.env.DEBUG;
          }
          return _0xeb9b27;
        };
        _0x3e439b.useColors = function () {
          if ('undefined' != typeof window && window.process && ('renderer' === window.process.type || window.process.__nwjs)) {
            return true;
          }
          if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
          }
          let _0x41eaf2;
          return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (_0x41eaf2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(_0x41eaf2[0x1], 0xa) >= 0x1f || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        };
        _0x3e439b.storage = function () {
          try {
            return localStorage;
          } catch (_0x553950) {}
        }();
        _0x3e439b.destroy = (() => {
          let _0x2be7d0 = false;
          return () => {
            if (!_0x2be7d0) {
              _0x2be7d0 = true;
              console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }
          };
        })();
        _0x3e439b.colors = ['#0000CC', "#0000FF", "#0033CC", "#0033FF", '#0066CC', "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", '#00CCCC', "#00CCFF", "#3300CC", "#3300FF", '#3333CC', '#3333FF', "#3366CC", "#3366FF", '#3399CC', "#3399FF", "#33CC00", "#33CC33", '#33CC66', "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", '#6633FF', "#66CC00", "#66CC33", "#9900CC", "#9900FF", '#9933CC', '#9933FF', "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", '#CC00FF', '#CC3300', "#CC3333", "#CC3366", "#CC3399", '#CC33CC', "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", '#FF3399', "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", '#FFCC00', "#FFCC33"];
        _0x3e439b.log = console.debug || console.log || (() => {});
        _0x49c48a.exports = _0x5586aa(0x2e0)(_0x3e439b);
        const {
          formatters: _0x211bae
        } = _0x49c48a.exports;
        _0x211bae.j = function (_0x3bcbf4) {
          try {
            return JSON.stringify(_0x3bcbf4);
          } catch (_0x13952c) {
            return "[UnexpectedJSONParseError]: " + _0x13952c.message;
          }
        };
      },
      0x2e0: (_0x48f493, _0x495481, _0x1f7662) => {
        _0x48f493.exports = function (_0xbdd033) {
          function _0x386a1d(_0x28aa61) {
            let _0x1c337b;
            let _0x425702;
            let _0x46e0e8;
            let _0x5f3dbd = null;
            function _0x2f0ff4(..._0x39b958) {
              if (!_0x2f0ff4.enabled) {
                return;
              }
              const _0x28003e = Number(new Date());
              const _0x2c26f6 = _0x28003e - (_0x1c337b || _0x28003e);
              _0x2f0ff4.diff = _0x2c26f6;
              _0x2f0ff4.prev = _0x1c337b;
              _0x2f0ff4.curr = _0x28003e;
              _0x1c337b = _0x28003e;
              _0x39b958[0x0] = _0x386a1d.coerce(_0x39b958[0x0]);
              if ('string' != typeof _0x39b958[0x0]) {
                _0x39b958.unshift('%O');
              }
              let _0x313b7c = 0x0;
              _0x39b958[0x0] = _0x39b958[0x0].replace(/%([a-zA-Z%])/g, (_0x4c554b, _0x46a3e6) => {
                if ('%%' === _0x4c554b) {
                  return '%';
                }
                _0x313b7c++;
                const _0x12b188 = _0x386a1d.formatters[_0x46a3e6];
                if ('function' == typeof _0x12b188) {
                  const _0x1c6d68 = _0x39b958[_0x313b7c];
                  _0x4c554b = _0x12b188.call(_0x2f0ff4, _0x1c6d68);
                  _0x39b958.splice(_0x313b7c, 0x1);
                  _0x313b7c--;
                }
                return _0x4c554b;
              });
              _0x386a1d.formatArgs.call(_0x2f0ff4, _0x39b958);
              (_0x2f0ff4.log || _0x386a1d.log).apply(_0x2f0ff4, _0x39b958);
            }
            _0x2f0ff4.namespace = _0x28aa61;
            _0x2f0ff4.useColors = _0x386a1d.useColors();
            _0x2f0ff4.color = _0x386a1d.selectColor(_0x28aa61);
            _0x2f0ff4.extend = _0xb98683;
            _0x2f0ff4.destroy = _0x386a1d.destroy;
            Object.defineProperty(_0x2f0ff4, 'enabled', {
              'enumerable': true,
              'configurable': false,
              'get': () => null !== _0x5f3dbd ? _0x5f3dbd : (_0x425702 !== _0x386a1d.namespaces && (_0x425702 = _0x386a1d.namespaces, _0x46e0e8 = _0x386a1d.enabled(_0x28aa61)), _0x46e0e8),
              'set': _0x29afb6 => {
                _0x5f3dbd = _0x29afb6;
              }
            });
            if ("function" == typeof _0x386a1d.init) {
              _0x386a1d.init(_0x2f0ff4);
            }
            return _0x2f0ff4;
          }
          function _0xb98683(_0x5d5bac, _0xfa1004) {
            const _0x520543 = _0x386a1d(this.namespace + (undefined === _0xfa1004 ? ':' : _0xfa1004) + _0x5d5bac);
            _0x520543.log = this.log;
            return _0x520543;
          }
          function _0x57e4b5(_0x38b30c) {
            return _0x38b30c.toString().substring(0x2, _0x38b30c.toString().length - 0x2).replace(/\.\*\?$/, '*');
          }
          _0x386a1d.debug = _0x386a1d;
          _0x386a1d["default"] = _0x386a1d;
          _0x386a1d.coerce = function (_0x3b95df) {
            return _0x3b95df instanceof Error ? _0x3b95df.stack || _0x3b95df.message : _0x3b95df;
          };
          _0x386a1d.disable = function () {
            const _0xa9bd4a = [..._0x386a1d.names.map(_0x57e4b5), ..._0x386a1d.skips.map(_0x57e4b5).map(_0x3dad88 => '-' + _0x3dad88)].join(',');
            _0x386a1d.enable('');
            return _0xa9bd4a;
          };
          _0x386a1d.enable = function (_0x4d87c7) {
            let _0x4ab774;
            _0x386a1d.save(_0x4d87c7);
            _0x386a1d.namespaces = _0x4d87c7;
            _0x386a1d.names = [];
            _0x386a1d.skips = [];
            const _0x501b2a = ("string" == typeof _0x4d87c7 ? _0x4d87c7 : '').split(/[\s,]+/);
            const _0x1a4d13 = _0x501b2a.length;
            for (_0x4ab774 = 0x0; _0x4ab774 < _0x1a4d13; _0x4ab774++) {
              if (_0x501b2a[_0x4ab774]) {
                if ('-' === (_0x4d87c7 = _0x501b2a[_0x4ab774].replace(/\*/g, ".*?"))[0x0]) {
                  _0x386a1d.skips.push(new RegExp('^' + _0x4d87c7.slice(0x1) + '$'));
                } else {
                  _0x386a1d.names.push(new RegExp('^' + _0x4d87c7 + '$'));
                }
              }
            }
          };
          _0x386a1d.enabled = function (_0x5ec401) {
            if ('*' === _0x5ec401[_0x5ec401.length - 0x1]) {
              return true;
            }
            let _0x55ec76;
            let _0x5a1b7c;
            _0x55ec76 = 0x0;
            for (_0x5a1b7c = _0x386a1d.skips.length; _0x55ec76 < _0x5a1b7c; _0x55ec76++) {
              if (_0x386a1d.skips[_0x55ec76].test(_0x5ec401)) {
                return false;
              }
            }
            _0x55ec76 = 0x0;
            for (_0x5a1b7c = _0x386a1d.names.length; _0x55ec76 < _0x5a1b7c; _0x55ec76++) {
              if (_0x386a1d.names[_0x55ec76].test(_0x5ec401)) {
                return true;
              }
            }
            return false;
          };
          _0x386a1d.humanize = _0x1f7662(0x249);
          _0x386a1d.destroy = function () {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          };
          Object.keys(_0xbdd033).forEach(_0x165cbd => {
            _0x386a1d[_0x165cbd] = _0xbdd033[_0x165cbd];
          });
          _0x386a1d.names = [];
          _0x386a1d.skips = [];
          _0x386a1d.formatters = {};
          _0x386a1d.selectColor = function (_0x491f45) {
            let _0x1ed717 = 0x0;
            for (let _0x40a2ef = 0x0; _0x40a2ef < _0x491f45.length; _0x40a2ef++) {
              _0x1ed717 = (_0x1ed717 << 0x5) - _0x1ed717 + _0x491f45.charCodeAt(_0x40a2ef);
              _0x1ed717 |= 0x0;
            }
            return _0x386a1d.colors[Math.abs(_0x1ed717) % _0x386a1d.colors.length];
          };
          _0x386a1d.enable(_0x386a1d.load());
          return _0x386a1d;
        };
      },
      0x26b: function (_0x3e5997) {
        if ("undefined" != typeof self) {
          self;
        }
        _0x3e5997.exports = function (_0x38ca31) {
          var _0x351b0c = {};
          function _0x10e3e8(_0x3d7879) {
            if (_0x351b0c[_0x3d7879]) {
              return _0x351b0c[_0x3d7879].exports;
            }
            var _0x4a3ea2 = _0x351b0c[_0x3d7879] = {
              'i': _0x3d7879,
              'l': false,
              'exports': {}
            };
            _0x38ca31[_0x3d7879].call(_0x4a3ea2.exports, _0x4a3ea2, _0x4a3ea2.exports, _0x10e3e8);
            _0x4a3ea2.l = true;
            return _0x4a3ea2.exports;
          }
          _0x10e3e8.m = _0x38ca31;
          _0x10e3e8.c = _0x351b0c;
          _0x10e3e8.d = function (_0x47c918, _0x44f239, _0x16a748) {
            var _0x38cff8 = {
              configurable: false,
              "enumerable": true,
              get: _0x16a748
            };
            if (!_0x10e3e8.o(_0x47c918, _0x44f239)) {
              Object.defineProperty(_0x47c918, _0x44f239, _0x38cff8);
            }
          };
          _0x10e3e8.n = function (_0x34bb7e) {
            var _0x38950a = _0x34bb7e && _0x34bb7e.__esModule ? function () {
              return _0x34bb7e["default"];
            } : function () {
              return _0x34bb7e;
            };
            _0x10e3e8.d(_0x38950a, 'a', _0x38950a);
            return _0x38950a;
          };
          _0x10e3e8.o = function (_0x21f33e, _0x4dc353) {
            return Object.prototype.hasOwnProperty.call(_0x21f33e, _0x4dc353);
          };
          _0x10e3e8.p = '';
          return _0x10e3e8(_0x10e3e8.s = 0x4);
        }([function (_0x56702d, _0x1d72d3, _0x274046) {
          'use strict';
  
          _0x274046.d(_0x1d72d3, 'i', function () {
            return _0x13961a;
          });
          _0x274046.d(_0x1d72d3, 'd', function () {
            return _0x54c15b;
          });
          _0x274046.d(_0x1d72d3, 'e', function () {
            return _0x4d87b8;
          });
          _0x274046.d(_0x1d72d3, 'c', function () {
            return _0x4fb265;
          });
          _0x274046.d(_0x1d72d3, 'h', function () {
            return _0x1226cc;
          });
          _0x274046.d(_0x1d72d3, 'f', function () {
            return _0x846c30;
          });
          _0x274046.d(_0x1d72d3, 'b', function () {
            return _0x4b1882;
          });
          _0x274046.d(_0x1d72d3, 'g', function () {
            return _0x3a5d46;
          });
          _0x274046.d(_0x1d72d3, 'a', function () {
            return _0xffa9b3;
          });
          var _0xce3c74;
          var _0x1c867c;
          var _0x3a2929;
          var _0x30d6bb;
          var _0xeafb17;
          var _0x1aaae6 = _0x274046(0x3);
          var _0x4f9184 = Object(_0x1aaae6.b)();
          var _0x13961a = (null === (_0xce3c74 = null == _0x4f9184 ? undefined : _0x4f9184.navigator) || undefined === _0xce3c74 ? undefined : _0xce3c74.userAgent) || "unknown";
          var _0x54c15b = "InstallTrigger" in ((null == _0x4f9184 ? undefined : _0x4f9184.window) || {}) || /firefox/i.test(_0x13961a);
          var _0x4d87b8 = /trident/i.test(_0x13961a) || /msie/i.test(_0x13961a);
          var _0x4fb265 = /edge/i.test(_0x13961a) || /EdgiOS/i.test(_0x13961a);
          var _0x1226cc = /webkit/i.test(_0x13961a);
          var _0x846c30 = /IqiyiApp/.test(_0x13961a);
          var _0x4b1882 = undefined !== (null === (_0x1c867c = null == _0x4f9184 ? undefined : _0x4f9184.window) || undefined === _0x1c867c ? undefined : _0x1c867c.chrome) || /chrome/i.test(_0x13961a) || /CriOS/i.test(_0x13961a);
          var _0x3a5d46 = "[object SafariRemoteNotification]" === ((null === (_0x30d6bb = null === (_0x3a2929 = null == _0x4f9184 ? undefined : _0x4f9184.window) || undefined === _0x3a2929 ? undefined : _0x3a2929.safari) || undefined === _0x30d6bb ? undefined : _0x30d6bb.pushNotification) || false).toString() || /safari/i.test(_0x13961a) && !_0x4b1882;
          var _0xffa9b3 = 'function' == typeof (null === (_0xeafb17 = _0x4f9184.document) || undefined === _0xeafb17 ? undefined : _0xeafb17.createElement);
        }, function (_0x757411, _0x27bd29, _0x596248) {
          'use strict';
  
          _0x596248.d(_0x27bd29, 'b', function () {
            return _0x426a66;
          });
          _0x596248.d(_0x27bd29, 'c', function () {
            return _0x4a4723;
          });
          _0x596248.d(_0x27bd29, 'a', function () {
            return _0x206bbc;
          });
          var _0x206920 = _0x596248(0x0);
          function _0x424ff3(_0x4be2d7) {
            if (_0x206920.a && console) {
              if (!_0x206920.e && !_0x206920.c) {
                return console[_0x4be2d7];
              }
              if ("log" === _0x4be2d7 || "clear" === _0x4be2d7) {
                return function () {
                  var _0x15cd3f = [];
                  for (var _0x48558b = 0x0; _0x48558b < arguments.length; _0x48558b++) {
                    _0x15cd3f[_0x48558b] = arguments[_0x48558b];
                  }
                  console[_0x4be2d7].apply(console, _0x15cd3f);
                };
              }
            }
            return function () {
              var _0x515c88 = [];
              for (var _0x5aa673 = 0x0; _0x5aa673 < arguments.length; _0x5aa673++) {
                _0x515c88[_0x5aa673] = arguments[_0x5aa673];
              }
            };
          }
          var _0x426a66 = _0x424ff3("log");
          var _0x4a4723 = _0x424ff3("table");
          var _0x206bbc = _0x424ff3("clear");
        }, function (_0x1d7a43, _0x15c9e1, _0x313e71) {
          'use strict';
  
          _0x15c9e1.a = function (_0x2b5a76) {
            if (undefined === _0x2b5a76) {
              _0x2b5a76 = {};
            }
            var _0x2db547 = _0x2b5a76.includes;
            var _0x41d6de = undefined === _0x2db547 ? [] : _0x2db547;
            var _0x3035e5 = _0x2b5a76.excludes;
            var _0x3d9e56 = undefined === _0x3035e5 ? [] : _0x3035e5;
            var _0x328a54 = false;
            var _0x1ef9c3 = false;
            for (var _0x44435c = 0x0; _0x44435c < _0x41d6de.length; _0x44435c++) {
              if (true === _0x41d6de[_0x44435c]) {
                _0x328a54 = true;
                break;
              }
            }
            for (var _0x3898ca = 0x0; _0x3898ca < _0x3d9e56.length; _0x3898ca++) {
              if (true === _0x3d9e56[_0x3898ca]) {
                _0x1ef9c3 = true;
                break;
              }
            }
            return _0x328a54 && !_0x1ef9c3;
          };
        }, function (_0xd1bb5d, _0x4a7c8e, _0x2228a3) {
          'use strict';
  
          (function (_0x1f4e03) {
            _0x4a7c8e.b = _0x1674bc;
            _0x4a7c8e.a = function () {
              var _0x130d96;
              var _0x5155c4 = [];
              for (var _0x3e6a45 = 0x0; _0x3e6a45 < arguments.length; _0x3e6a45++) {
                _0x5155c4[_0x3e6a45] = arguments[_0x3e6a45];
              }
              var _0x16a771 = 'undefined' != typeof self ? self : "undefined" != typeof window ? window : undefined !== _0x1f4e03 ? _0x1f4e03 : this;
              return (null == _0x16a771 ? undefined : _0x16a771.document) ? (_0x130d96 = _0x16a771.document).createElement.apply(_0x130d96, _0x5155c4) : {};
            };
            _0x4a7c8e.c = function () {
              if (_0x5196e0) {
                return _0x5196e0;
              }
              if (_0x46cb08) {
                var _0xb713bf = new Blob([_0x4a402f.a.workerScript]);
                try {
                  var _0x1d3bdc = URL.createObjectURL(_0xb713bf);
                  _0x5196e0 = new _0x4a402f.a(new Worker(_0x1d3bdc));
                  URL.revokeObjectURL(_0x1d3bdc);
                } catch (_0x250ffa) {
                  try {
                    _0x5196e0 = new _0x4a402f.a(new Worker("data:text/javascript;base64,".concat(btoa(_0x4a402f.a.workerScript))));
                  } catch (_0x2185c7) {
                    _0x46cb08 = false;
                  }
                }
                return _0x5196e0;
              }
            };
            _0x2228a3.d(_0x4a7c8e, 'd', function () {
              return _0x3bfd0c;
            });
            var _0x5196e0;
            var _0x4a402f = _0x2228a3(0xa);
            var _0x4490a3 = this && this.__awaiter || function (_0x337ed3, _0x5ed52d, _0x55b9a9, _0x1d0f80) {
              return new (_0x55b9a9 || (_0x55b9a9 = Promise))(function (_0x49363a, _0x326c0d) {
                function _0x706ec4(_0x9954f6) {
                  try {
                    _0x5d2a7e(_0x1d0f80.next(_0x9954f6));
                  } catch (_0x30a918) {
                    _0x326c0d(_0x30a918);
                  }
                }
                function _0x136c18(_0x66325f) {
                  try {
                    _0x5d2a7e(_0x1d0f80["throw"](_0x66325f));
                  } catch (_0x48f940) {
                    _0x326c0d(_0x48f940);
                  }
                }
                function _0x5d2a7e(_0x57d8aa) {
                  if (_0x57d8aa.done) {
                    _0x49363a(_0x57d8aa.value);
                  } else {
                    (function (_0x3db578) {
                      return _0x3db578 instanceof _0x55b9a9 ? _0x3db578 : new _0x55b9a9(function (_0xb9e287) {
                        _0xb9e287(_0x3db578);
                      });
                    })(_0x57d8aa.value).then(_0x706ec4, _0x136c18);
                  }
                }
                _0x5d2a7e((_0x1d0f80 = _0x1d0f80.apply(_0x337ed3, _0x5ed52d || [])).next());
              });
            };
            var _0xbcf63c = this && this.__generator || function (_0x45f554, _0x48cf6f) {
              var _0x351003;
              var _0x84a443;
              var _0x1eeab6;
              var _0xd00ff6;
              var _0x54306f = {
                'label': 0x0,
                'sent': function () {
                  if (0x1 & _0x1eeab6[0x0]) {
                    throw _0x1eeab6[0x1];
                  }
                  return _0x1eeab6[0x1];
                },
                'trys': [],
                'ops': []
              };
              _0xd00ff6 = {
                'next': _0x1063f3(0x0),
                'throw': _0x1063f3(0x1),
                'return': _0x1063f3(0x2)
              };
              if ("function" == typeof Symbol) {
                _0xd00ff6[Symbol.iterator] = function () {
                  return this;
                };
              }
              return _0xd00ff6;
              function _0x1063f3(_0x224a3f) {
                return function (_0x1d4646) {
                  return function (_0x3adb04) {
                    if (_0x351003) {
                      throw new TypeError("Generator is already executing.");
                    }
                    for (; _0xd00ff6 && (_0xd00ff6 = 0x0, _0x3adb04[0x0] && (_0x54306f = 0x0)), _0x54306f;) {
                      try {
                        _0x351003 = 0x1;
                        if (_0x84a443 && (_0x1eeab6 = 0x2 & _0x3adb04[0x0] ? _0x84a443["return"] : _0x3adb04[0x0] ? _0x84a443['throw'] || ((_0x1eeab6 = _0x84a443["return"]) && _0x1eeab6.call(_0x84a443), 0x0) : _0x84a443.next) && !(_0x1eeab6 = _0x1eeab6.call(_0x84a443, _0x3adb04[0x1])).done) {
                          return _0x1eeab6;
                        }
                        _0x84a443 = 0x0;
                        if (_0x1eeab6) {
                          _0x3adb04 = [0x2 & _0x3adb04[0x0], _0x1eeab6.value];
                        }
                        switch (_0x3adb04[0x0]) {
                          case 0x0:
                          case 0x1:
                            _0x1eeab6 = _0x3adb04;
                            break;
                          case 0x4:
                            var _0x39ffde = {
                              value: _0x3adb04[0x1],
                              "done": false
                            };
                            _0x54306f.label++;
                            return _0x39ffde;
                          case 0x5:
                            _0x54306f.label++;
                            _0x84a443 = _0x3adb04[0x1];
                            _0x3adb04 = [0x0];
                            continue;
                          case 0x7:
                            _0x3adb04 = _0x54306f.ops.pop();
                            _0x54306f.trys.pop();
                            continue;
                          default:
                            if (!(_0x1eeab6 = (_0x1eeab6 = _0x54306f.trys).length > 0x0 && _0x1eeab6[_0x1eeab6.length - 0x1]) && (0x6 === _0x3adb04[0x0] || 0x2 === _0x3adb04[0x0])) {
                              _0x54306f = 0x0;
                              continue;
                            }
                            if (0x3 === _0x3adb04[0x0] && (!_0x1eeab6 || _0x3adb04[0x1] > _0x1eeab6[0x0] && _0x3adb04[0x1] < _0x1eeab6[0x3])) {
                              _0x54306f.label = _0x3adb04[0x1];
                              break;
                            }
                            if (0x6 === _0x3adb04[0x0] && _0x54306f.label < _0x1eeab6[0x1]) {
                              _0x54306f.label = _0x1eeab6[0x1];
                              _0x1eeab6 = _0x3adb04;
                              break;
                            }
                            if (_0x1eeab6 && _0x54306f.label < _0x1eeab6[0x2]) {
                              _0x54306f.label = _0x1eeab6[0x2];
                              _0x54306f.ops.push(_0x3adb04);
                              break;
                            }
                            if (_0x1eeab6[0x2]) {
                              _0x54306f.ops.pop();
                            }
                            _0x54306f.trys.pop();
                            continue;
                        }
                        _0x3adb04 = _0x48cf6f.call(_0x45f554, _0x54306f);
                      } catch (_0x4fa1f1) {
                        _0x3adb04 = [0x6, _0x4fa1f1];
                        _0x84a443 = 0x0;
                      } finally {
                        _0x351003 = _0x1eeab6 = 0x0;
                      }
                    }
                    if (0x5 & _0x3adb04[0x0]) {
                      throw _0x3adb04[0x1];
                    }
                    var _0x16de1a = {
                      "value": _0x3adb04[0x0] ? _0x3adb04[0x1] : undefined,
                      done: true
                    };
                    return _0x16de1a;
                  }([_0x224a3f, _0x1d4646]);
                };
              }
            };
            function _0x1674bc() {
              return 'undefined' != typeof self ? self : "undefined" != typeof window ? window : undefined !== _0x1f4e03 ? _0x1f4e03 : this;
            }
            var _0x46cb08 = true;
            var _0x3bfd0c = function () {
              return _0x4490a3(this, undefined, undefined, function () {
                var _0x5c1fbf;
                return _0xbcf63c(this, function (_0xc2eaed) {
                  switch (_0xc2eaed.label) {
                    case 0x0:
                      _0x5c1fbf = false;
                      if (!navigator.brave) {
                        return [0x3, 0x4];
                      }
                      if (!navigator.brave.isBrave) {
                        return [0x3, 0x4];
                      }
                      _0xc2eaed.label = 0x1;
                    case 0x1:
                      _0xc2eaed.trys.push([0x1, 0x3,, 0x4]);
                      return [0x4, Promise.race([navigator.brave.isBrave(), new Promise(function (_0x457208) {
                        return setTimeout(function () {
                          return _0x457208(false);
                        }, 0x3e8);
                      })])];
                    case 0x2:
                      _0x5c1fbf = _0xc2eaed.sent();
                      return [0x3, 0x4];
                    case 0x3:
                      _0xc2eaed.sent();
                      return [0x3, 0x4];
                    case 0x4:
                      _0x3bfd0c = function () {
                        return _0x4490a3(this, undefined, undefined, function () {
                          return _0xbcf63c(this, function (_0xcd411b) {
                            return [0x2, _0x5c1fbf];
                          });
                        });
                      };
                      return [0x2, _0x5c1fbf];
                  }
                });
              });
            };
          }).call(_0x4a7c8e, _0x2228a3(0x9));
        }, function (_0x2ad3ae, _0x38fffb, _0x31aa03) {
          'use strict';
  
          var _0x30fa03 = {
            value: true
          };
          Object.defineProperty(_0x38fffb, "__esModule", _0x30fa03);
          _0x38fffb.addListener = function (_0x57ec06) {
            _0x43bfb4.addListener(_0x57ec06);
          };
          _0x38fffb.removeListener = function (_0x2cd1dc) {
            _0x43bfb4.removeListener(_0x2cd1dc);
          };
          _0x38fffb.isLaunch = function () {
            return _0x43bfb4.isLaunch();
          };
          _0x38fffb.launch = function () {
            _0x43bfb4.launch();
          };
          _0x38fffb.stop = function () {
            _0x43bfb4.stop();
          };
          _0x38fffb.setDetectDelay = function (_0x6427b1) {
            _0x43bfb4.setDetectDelay(_0x6427b1);
          };
          var _0x15fbb1 = _0x31aa03(0x8);
          var _0x73733a = _0x31aa03(0xc);
          _0x31aa03.d(_0x38fffb, "DevtoolsDetector", function () {
            return _0x15fbb1.a;
          });
          _0x31aa03.d(_0x38fffb, "checkers", function () {
            return _0x73733a;
          });
          var _0x221aaf = _0x31aa03(0x17);
          _0x31aa03.d(_0x38fffb, "crashBrowserCurrentTab", function () {
            return _0x221aaf.b;
          });
          _0x31aa03.d(_0x38fffb, "crashBrowser", function () {
            return _0x221aaf.a;
          });
          var _0x496134 = _0x31aa03(0x2);
          _0x31aa03.d(_0x38fffb, "match", function () {
            return _0x496134.a;
          });
          var _0x268a85 = _0x31aa03(0x3);
          _0x31aa03.d(_0x38fffb, "getGlobalThis", function () {
            return _0x268a85.b;
          });
          _0x31aa03.d(_0x38fffb, "createElement", function () {
            return _0x268a85.a;
          });
          _0x31aa03.d(_0x38fffb, "getWorkerConsole", function () {
            return _0x268a85.c;
          });
          _0x31aa03.d(_0x38fffb, "isBrave", function () {
            return _0x268a85.d;
          });
          var _0x4356c2 = _0x31aa03(0x18);
          _0x31aa03.d(_0x38fffb, "versionMap", function () {
            return _0x4356c2.a;
          });
          var _0x3124c0 = _0x31aa03(0x0);
          _0x31aa03.d(_0x38fffb, "userAgent", function () {
            return _0x3124c0.i;
          });
          _0x31aa03.d(_0x38fffb, "isFirefox", function () {
            return _0x3124c0.d;
          });
          _0x31aa03.d(_0x38fffb, "isIE", function () {
            return _0x3124c0.e;
          });
          _0x31aa03.d(_0x38fffb, "isEdge", function () {
            return _0x3124c0.c;
          });
          _0x31aa03.d(_0x38fffb, "isWebkit", function () {
            return _0x3124c0.h;
          });
          _0x31aa03.d(_0x38fffb, "isIqiyiApp", function () {
            return _0x3124c0.f;
          });
          _0x31aa03.d(_0x38fffb, "isChrome", function () {
            return _0x3124c0.b;
          });
          _0x31aa03.d(_0x38fffb, "isSafari", function () {
            return _0x3124c0.g;
          });
          _0x31aa03.d(_0x38fffb, "inBrowser", function () {
            return _0x3124c0.a;
          });
          var _0x43c7ba = _0x31aa03(0x1);
          _0x31aa03.d(_0x38fffb, "log", function () {
            return _0x43c7ba.b;
          });
          _0x31aa03.d(_0x38fffb, "table", function () {
            return _0x43c7ba.c;
          });
          _0x31aa03.d(_0x38fffb, "clear", function () {
            return _0x43c7ba.a;
          });
          var _0xb8a177 = _0x31aa03(0x5);
          _0x31aa03.d(_0x38fffb, "isMac", function () {
            return _0xb8a177.d;
          });
          _0x31aa03.d(_0x38fffb, "isIpad", function () {
            return _0xb8a177.b;
          });
          _0x31aa03.d(_0x38fffb, "isIphone", function () {
            return _0xb8a177.c;
          });
          _0x31aa03.d(_0x38fffb, "isAndroid", function () {
            return _0xb8a177.a;
          });
          _0x31aa03.d(_0x38fffb, "isWindows", function () {
            return _0xb8a177.e;
          });
          var _0x531310 = {
            checkers: [_0x73733a.erudaChecker, _0x73733a.elementIdChecker, _0x73733a.regToStringChecker, _0x73733a.functionToStringChecker, _0x73733a.depRegToStringChecker, _0x73733a.dateToStringChecker, _0x73733a.devtoolsFormatterChecker, _0x73733a.performanceChecker, _0x73733a.debuggerChecker]
          };
          var _0x43bfb4 = new _0x15fbb1.a(_0x531310);
          _0x38fffb["default"] = _0x43bfb4;
        }, function (_0x9f1243, _0x24f8b3, _0x5232f9) {
          'use strict';
  
          _0x5232f9.d(_0x24f8b3, 'd', function () {
            return _0xf2479c;
          });
          _0x5232f9.d(_0x24f8b3, 'b', function () {
            return _0x54a5f2;
          });
          _0x5232f9.d(_0x24f8b3, 'c', function () {
            return _0x1a8ded;
          });
          _0x5232f9.d(_0x24f8b3, 'a', function () {
            return _0x3ac01;
          });
          _0x5232f9.d(_0x24f8b3, 'e', function () {
            return _0x21ad09;
          });
          var _0x48e2dd = _0x5232f9(0x0);
          var _0xf2479c = /macintosh/i.test(_0x48e2dd.i);
          var _0x54a5f2 = /ipad/i.test(_0x48e2dd.i) || _0xf2479c && navigator.maxTouchPoints > 0x1;
          var _0x1a8ded = /iphone/i.test(_0x48e2dd.i);
          var _0x3ac01 = /android/i.test(_0x48e2dd.i);
          var _0x21ad09 = /windows/i.test(_0x48e2dd.i);
        }, function (_0x3d665e, _0x815b84, _0x500fed) {
          'use strict';
  
          _0x815b84.a = function () {
            return 'undefined' != typeof performance ? performance.now() : Date.now();
          };
        }, function (_0x50e013, _0x46bef7, _0x2b4691) {
          'use strict';
  
          _0x46bef7.a = function () {
            if (null === _0x2971cb) {
              _0x2971cb = function () {
                var _0xbebd63 = function () {
                  var _0x1c3db7 = {};
                  for (var _0x3fb8f7 = 0x0; _0x3fb8f7 < 0x1f4; _0x3fb8f7++) {
                    _0x1c3db7[''.concat(_0x3fb8f7)] = ''.concat(_0x3fb8f7);
                  }
                  return _0x1c3db7;
                }();
                var _0xa5809f = [];
                for (var _0x43235d = 0x0; _0x43235d < 0x32; _0x43235d++) {
                  _0xa5809f.push(_0xbebd63);
                }
                return _0xa5809f;
              }();
            }
            return _0x2971cb;
          };
          var _0x2971cb = null;
        }, function (_0x2cd59f, _0x1620e4, _0xb84e53) {
          'use strict';
  
          _0xb84e53.d(_0x1620e4, 'a', function () {
            return _0x37446d;
          });
          var _0x24991b = _0xb84e53(0x0);
          var _0x438eed = this && this.__awaiter || function (_0x30696b, _0x3170fa, _0x1b118f, _0x369477) {
            return new (_0x1b118f || (_0x1b118f = Promise))(function (_0x551773, _0x323593) {
              function _0x4a1aa7(_0x40c4df) {
                try {
                  _0x5d3ffa(_0x369477.next(_0x40c4df));
                } catch (_0x16c743) {
                  _0x323593(_0x16c743);
                }
              }
              function _0x42bde0(_0x578742) {
                try {
                  _0x5d3ffa(_0x369477["throw"](_0x578742));
                } catch (_0x395158) {
                  _0x323593(_0x395158);
                }
              }
              function _0x5d3ffa(_0x457b31) {
                if (_0x457b31.done) {
                  _0x551773(_0x457b31.value);
                } else {
                  (function (_0xc66857) {
                    return _0xc66857 instanceof _0x1b118f ? _0xc66857 : new _0x1b118f(function (_0x2bef9a) {
                      _0x2bef9a(_0xc66857);
                    });
                  })(_0x457b31.value).then(_0x4a1aa7, _0x42bde0);
                }
              }
              _0x5d3ffa((_0x369477 = _0x369477.apply(_0x30696b, _0x3170fa || [])).next());
            });
          };
          var _0x1ba5c9 = this && this.__generator || function (_0xc1c044, _0x20a921) {
            var _0x34d089;
            var _0x4ab55e;
            var _0x13c3b0;
            var _0xf0cc3f;
            var _0x5b8023 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x13c3b0[0x0]) {
                  throw _0x13c3b0[0x1];
                }
                return _0x13c3b0[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0xf0cc3f = {
              'next': _0x4ab30e(0x0),
              'throw': _0x4ab30e(0x1),
              'return': _0x4ab30e(0x2)
            };
            if ('function' == typeof Symbol) {
              _0xf0cc3f[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0xf0cc3f;
            function _0x4ab30e(_0x53fe7e) {
              return function (_0x1ccf22) {
                return function (_0x43c1d8) {
                  if (_0x34d089) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0xf0cc3f && (_0xf0cc3f = 0x0, _0x43c1d8[0x0] && (_0x5b8023 = 0x0)), _0x5b8023;) {
                    try {
                      _0x34d089 = 0x1;
                      if (_0x4ab55e && (_0x13c3b0 = 0x2 & _0x43c1d8[0x0] ? _0x4ab55e["return"] : _0x43c1d8[0x0] ? _0x4ab55e["throw"] || ((_0x13c3b0 = _0x4ab55e['return']) && _0x13c3b0.call(_0x4ab55e), 0x0) : _0x4ab55e.next) && !(_0x13c3b0 = _0x13c3b0.call(_0x4ab55e, _0x43c1d8[0x1])).done) {
                        return _0x13c3b0;
                      }
                      _0x4ab55e = 0x0;
                      if (_0x13c3b0) {
                        _0x43c1d8 = [0x2 & _0x43c1d8[0x0], _0x13c3b0.value];
                      }
                      switch (_0x43c1d8[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x13c3b0 = _0x43c1d8;
                          break;
                        case 0x4:
                          var _0x3191f6 = {
                            value: _0x43c1d8[0x1],
                            done: false
                          };
                          _0x5b8023.label++;
                          return _0x3191f6;
                        case 0x5:
                          _0x5b8023.label++;
                          _0x4ab55e = _0x43c1d8[0x1];
                          _0x43c1d8 = [0x0];
                          continue;
                        case 0x7:
                          _0x43c1d8 = _0x5b8023.ops.pop();
                          _0x5b8023.trys.pop();
                          continue;
                        default:
                          if (!(_0x13c3b0 = (_0x13c3b0 = _0x5b8023.trys).length > 0x0 && _0x13c3b0[_0x13c3b0.length - 0x1]) && (0x6 === _0x43c1d8[0x0] || 0x2 === _0x43c1d8[0x0])) {
                            _0x5b8023 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x43c1d8[0x0] && (!_0x13c3b0 || _0x43c1d8[0x1] > _0x13c3b0[0x0] && _0x43c1d8[0x1] < _0x13c3b0[0x3])) {
                            _0x5b8023.label = _0x43c1d8[0x1];
                            break;
                          }
                          if (0x6 === _0x43c1d8[0x0] && _0x5b8023.label < _0x13c3b0[0x1]) {
                            _0x5b8023.label = _0x13c3b0[0x1];
                            _0x13c3b0 = _0x43c1d8;
                            break;
                          }
                          if (_0x13c3b0 && _0x5b8023.label < _0x13c3b0[0x2]) {
                            _0x5b8023.label = _0x13c3b0[0x2];
                            _0x5b8023.ops.push(_0x43c1d8);
                            break;
                          }
                          if (_0x13c3b0[0x2]) {
                            _0x5b8023.ops.pop();
                          }
                          _0x5b8023.trys.pop();
                          continue;
                      }
                      _0x43c1d8 = _0x20a921.call(_0xc1c044, _0x5b8023);
                    } catch (_0x5decad) {
                      _0x43c1d8 = [0x6, _0x5decad];
                      _0x4ab55e = 0x0;
                    } finally {
                      _0x34d089 = _0x13c3b0 = 0x0;
                    }
                  }
                  if (0x5 & _0x43c1d8[0x0]) {
                    throw _0x43c1d8[0x1];
                  }
                  var _0x103e27 = {
                    "value": _0x43c1d8[0x0] ? _0x43c1d8[0x1] : undefined,
                    done: true
                  };
                  return _0x103e27;
                }([_0x53fe7e, _0x1ccf22]);
              };
            }
          };
          var _0x37446d = function () {
            function _0x1ca2d2(_0xc5de34) {
              var _0x1202f1 = _0xc5de34.checkers;
              this._listeners = [];
              this._isOpen = false;
              this._detectLoopStopped = true;
              this._detectLoopDelay = 0x1f4;
              this._checkers = _0x1202f1.slice();
            }
            var _0x5db400 = {
              "get": function () {
                return this._isOpen;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(_0x1ca2d2.prototype, 'isOpen', _0x5db400);
            _0x1ca2d2.prototype.launch = function () {
              if (_0x24991b.a) {
                if (this._detectLoopDelay <= 0x0) {
                  this.setDetectDelay(0x1f4);
                }
                if (this._detectLoopStopped) {
                  this._detectLoopStopped = false;
                  this._detectLoop();
                }
              }
            };
            _0x1ca2d2.prototype.stop = function () {
              if (!this._detectLoopStopped) {
                this._detectLoopStopped = true;
                this._isOpen = false;
                clearTimeout(this._timer);
              }
            };
            _0x1ca2d2.prototype.isLaunch = function () {
              return !this._detectLoopStopped;
            };
            _0x1ca2d2.prototype.setDetectDelay = function (_0x189781) {
              this._detectLoopDelay = _0x189781;
            };
            _0x1ca2d2.prototype.addListener = function (_0x26f050) {
              this._listeners.push(_0x26f050);
            };
            _0x1ca2d2.prototype.removeListener = function (_0x21de51) {
              this._listeners = this._listeners.filter(function (_0xc454af) {
                return _0xc454af !== _0x21de51;
              });
            };
            _0x1ca2d2.prototype._broadcast = function (_0x3c66a4) {
              var _0x46e2c0 = 0x0;
              for (var _0x257c3c = this._listeners; _0x46e2c0 < _0x257c3c.length; _0x46e2c0++) {
                var _0xc88536 = _0x257c3c[_0x46e2c0];
                try {
                  _0xc88536(_0x3c66a4.isOpen, _0x3c66a4);
                } catch (_0x319131) {}
              }
            };
            _0x1ca2d2.prototype._detectLoop = function () {
              return _0x438eed(this, undefined, undefined, function () {
                var _0x25560e;
                var _0x1535c8;
                var _0x4181a6;
                var _0x5ae788;
                var _0x90e8f3;
                var _0x4bf3cb = this;
                return _0x1ba5c9(this, function (_0x406662) {
                  switch (_0x406662.label) {
                    case 0x0:
                      _0x25560e = false;
                      _0x1535c8 = '';
                      _0x4181a6 = 0x0;
                      _0x5ae788 = this._checkers;
                      _0x406662.label = 0x1;
                    case 0x1:
                      return _0x4181a6 < _0x5ae788.length ? [0x4, (_0x90e8f3 = _0x5ae788[_0x4181a6]).isEnable()] : [0x3, 0x6];
                    case 0x2:
                      return _0x406662.sent() ? (_0x1535c8 = _0x90e8f3.name, [0x4, _0x90e8f3.isOpen()]) : [0x3, 0x4];
                    case 0x3:
                      _0x25560e = _0x406662.sent();
                      _0x406662.label = 0x4;
                    case 0x4:
                      if (_0x25560e) {
                        return [0x3, 0x6];
                      }
                      _0x406662.label = 0x5;
                    case 0x5:
                      _0x4181a6++;
                      return [0x3, 0x1];
                    case 0x6:
                      if (_0x25560e != this._isOpen) {
                        this._isOpen = _0x25560e;
                        this._broadcast({
                          'isOpen': _0x25560e,
                          'checkerName': _0x1535c8
                        });
                      }
                      if (this._detectLoopDelay > 0x0 && !this._detectLoopStopped) {
                        this._timer = setTimeout(function () {
                          return _0x4bf3cb._detectLoop();
                        }, this._detectLoopDelay);
                      } else {
                        this.stop();
                      }
                      return [0x2];
                  }
                });
              });
            };
            return _0x1ca2d2;
          }();
        }, function (_0x5796e4, _0x1c7815) {
          var _0x1c68d2;
          _0x1c68d2 = function () {
            return this;
          }();
          try {
            _0x1c68d2 = _0x1c68d2 || Function("return this")() || (0x0, eval)("this");
          } catch (_0x14d0e9) {
            if ("object" == typeof window) {
              _0x1c68d2 = window;
            }
          }
          _0x5796e4.exports = _0x1c68d2;
        }, function (_0x35ae55, _0x1f6811, _0x47b1d1) {
          'use strict';
  
          _0x47b1d1.d(_0x1f6811, 'a', function () {
            return _0x4d071b;
          });
          var _0x3a1dfe = _0x47b1d1(0xb);
          var _0x3baf59 = this && this.__awaiter || function (_0x5d4dee, _0x5c4322, _0x572cca, _0x1b74a5) {
            return new (_0x572cca || (_0x572cca = Promise))(function (_0x27675b, _0x1f59ed) {
              function _0x16bcdd(_0x3d5705) {
                try {
                  _0x1a3f8d(_0x1b74a5.next(_0x3d5705));
                } catch (_0x42fd7d) {
                  _0x1f59ed(_0x42fd7d);
                }
              }
              function _0x1ad45f(_0x3a187a) {
                try {
                  _0x1a3f8d(_0x1b74a5["throw"](_0x3a187a));
                } catch (_0x23b95d) {
                  _0x1f59ed(_0x23b95d);
                }
              }
              function _0x1a3f8d(_0x5589a5) {
                if (_0x5589a5.done) {
                  _0x27675b(_0x5589a5.value);
                } else {
                  (function (_0x199db6) {
                    return _0x199db6 instanceof _0x572cca ? _0x199db6 : new _0x572cca(function (_0x49d0e5) {
                      _0x49d0e5(_0x199db6);
                    });
                  })(_0x5589a5.value).then(_0x16bcdd, _0x1ad45f);
                }
              }
              _0x1a3f8d((_0x1b74a5 = _0x1b74a5.apply(_0x5d4dee, _0x5c4322 || [])).next());
            });
          };
          var _0x26906b = this && this.__generator || function (_0xe50371, _0x386cc8) {
            var _0x9229d0;
            var _0x56f336;
            var _0x5131e2;
            var _0x3c7a31;
            var _0x1b45d4 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x5131e2[0x0]) {
                  throw _0x5131e2[0x1];
                }
                return _0x5131e2[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x3c7a31 = {
              'next': _0x396716(0x0),
              'throw': _0x396716(0x1),
              'return': _0x396716(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x3c7a31[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x3c7a31;
            function _0x396716(_0x431706) {
              return function (_0x425498) {
                return function (_0x33d43b) {
                  if (_0x9229d0) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x3c7a31 && (_0x3c7a31 = 0x0, _0x33d43b[0x0] && (_0x1b45d4 = 0x0)), _0x1b45d4;) {
                    try {
                      _0x9229d0 = 0x1;
                      if (_0x56f336 && (_0x5131e2 = 0x2 & _0x33d43b[0x0] ? _0x56f336["return"] : _0x33d43b[0x0] ? _0x56f336["throw"] || ((_0x5131e2 = _0x56f336["return"]) && _0x5131e2.call(_0x56f336), 0x0) : _0x56f336.next) && !(_0x5131e2 = _0x5131e2.call(_0x56f336, _0x33d43b[0x1])).done) {
                        return _0x5131e2;
                      }
                      _0x56f336 = 0x0;
                      if (_0x5131e2) {
                        _0x33d43b = [0x2 & _0x33d43b[0x0], _0x5131e2.value];
                      }
                      switch (_0x33d43b[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x5131e2 = _0x33d43b;
                          break;
                        case 0x4:
                          var _0x1fcaf8 = {
                            "value": _0x33d43b[0x1],
                            "done": false
                          };
                          _0x1b45d4.label++;
                          return _0x1fcaf8;
                        case 0x5:
                          _0x1b45d4.label++;
                          _0x56f336 = _0x33d43b[0x1];
                          _0x33d43b = [0x0];
                          continue;
                        case 0x7:
                          _0x33d43b = _0x1b45d4.ops.pop();
                          _0x1b45d4.trys.pop();
                          continue;
                        default:
                          if (!(_0x5131e2 = (_0x5131e2 = _0x1b45d4.trys).length > 0x0 && _0x5131e2[_0x5131e2.length - 0x1]) && (0x6 === _0x33d43b[0x0] || 0x2 === _0x33d43b[0x0])) {
                            _0x1b45d4 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x33d43b[0x0] && (!_0x5131e2 || _0x33d43b[0x1] > _0x5131e2[0x0] && _0x33d43b[0x1] < _0x5131e2[0x3])) {
                            _0x1b45d4.label = _0x33d43b[0x1];
                            break;
                          }
                          if (0x6 === _0x33d43b[0x0] && _0x1b45d4.label < _0x5131e2[0x1]) {
                            _0x1b45d4.label = _0x5131e2[0x1];
                            _0x5131e2 = _0x33d43b;
                            break;
                          }
                          if (_0x5131e2 && _0x1b45d4.label < _0x5131e2[0x2]) {
                            _0x1b45d4.label = _0x5131e2[0x2];
                            _0x1b45d4.ops.push(_0x33d43b);
                            break;
                          }
                          if (_0x5131e2[0x2]) {
                            _0x1b45d4.ops.pop();
                          }
                          _0x1b45d4.trys.pop();
                          continue;
                      }
                      _0x33d43b = _0x386cc8.call(_0xe50371, _0x1b45d4);
                    } catch (_0x9de20b) {
                      _0x33d43b = [0x6, _0x9de20b];
                      _0x56f336 = 0x0;
                    } finally {
                      _0x9229d0 = _0x5131e2 = 0x0;
                    }
                  }
                  if (0x5 & _0x33d43b[0x0]) {
                    throw _0x33d43b[0x1];
                  }
                  var _0x2f23e1 = {
                    "value": _0x33d43b[0x0] ? _0x33d43b[0x1] : undefined,
                    done: true
                  };
                  return _0x2f23e1;
                }([_0x431706, _0x425498]);
              };
            }
          };
          var _0x5c4423 = this && this.__spreadArray || function (_0x5dbf2a, _0x3589a3, _0x26e711) {
            if (_0x26e711 || 0x2 === arguments.length) {
              var _0x589a87;
              var _0x36e848 = 0x0;
              for (var _0x1e339b = _0x3589a3.length; _0x36e848 < _0x1e339b; _0x36e848++) {
                if (!(!_0x589a87 && _0x36e848 in _0x3589a3)) {
                  if (!_0x589a87) {
                    _0x589a87 = Array.prototype.slice.call(_0x3589a3, 0x0, _0x36e848);
                  }
                  _0x589a87[_0x36e848] = _0x3589a3[_0x36e848];
                }
              }
            }
            return _0x5dbf2a.concat(_0x589a87 || Array.prototype.slice.call(_0x3589a3));
          };
          var _0x4d071b = function () {
            function _0x5c8c61(_0x3b7ece) {
              var _0x27350a = this;
              this.callbacks = new Map();
              this.worker = _0x3b7ece;
              this.worker.onmessage = function (_0xcbcddb) {
                var _0x592fc8 = _0xcbcddb.data;
                var _0x1f5116 = _0x592fc8.id;
                var _0x6e041c = _0x27350a.callbacks.get(_0x592fc8.id);
                var _0x35b7ae = {
                  "time": _0x592fc8.time
                };
                if (_0x6e041c) {
                  _0x6e041c(_0x35b7ae);
                  _0x27350a.callbacks['delete'](_0x1f5116);
                }
              };
              this.log = function () {
                var _0x3b467d = [];
                for (var _0x42b35d = 0x0; _0x42b35d < arguments.length; _0x42b35d++) {
                  _0x3b467d[_0x42b35d] = arguments[_0x42b35d];
                }
                return _0x27350a.send.apply(_0x27350a, _0x5c4423(["log"], _0x3b467d, false));
              };
              this.table = function () {
                var _0x1e66a9 = [];
                for (var _0x4d6155 = 0x0; _0x4d6155 < arguments.length; _0x4d6155++) {
                  _0x1e66a9[_0x4d6155] = arguments[_0x4d6155];
                }
                return _0x27350a.send.apply(_0x27350a, _0x5c4423(['table'], _0x1e66a9, false));
              };
              this.clear = function () {
                var _0x3c09d1 = [];
                for (var _0x3a1292 = 0x0; _0x3a1292 < arguments.length; _0x3a1292++) {
                  _0x3c09d1[_0x3a1292] = arguments[_0x3a1292];
                }
                return _0x27350a.send.apply(_0x27350a, _0x5c4423(['clear'], _0x3c09d1, false));
              };
            }
            _0x5c8c61.prototype.send = function (_0x4be4b1) {
              var _0x86be67 = [];
              for (var _0x2b2416 = 0x1; _0x2b2416 < arguments.length; _0x2b2416++) {
                _0x86be67[_0x2b2416 - 0x1] = arguments[_0x2b2416];
              }
              return _0x3baf59(this, undefined, undefined, function () {
                var _0x19e7de;
                var _0x46ecf8 = this;
                return _0x26906b(this, function (_0x36a79c) {
                  _0x19e7de = Object(_0x3a1dfe.a)();
                  return [0x2, new Promise(function (_0x5dec1b, _0x59f41e) {
                    _0x46ecf8.callbacks.set(_0x19e7de, _0x5dec1b);
                    _0x46ecf8.worker.postMessage({
                      'id': _0x19e7de,
                      'type': _0x4be4b1,
                      'payload': _0x86be67
                    });
                    setTimeout(function () {
                      _0x59f41e(new Error("timeout"));
                      _0x46ecf8.callbacks["delete"](_0x19e7de);
                    }, 0x7d0);
                  })];
                });
              });
            };
            _0x5c8c61.workerScript = "\nonmessage = function(event) {\n  var action = event.data;\n  var startTime = performance.now()\n\n  console[action.type](...action.payload);\n  postMessage({\n    id: action.id,\n    time: performance.now() - startTime\n  })\n}\n";
            return _0x5c8c61;
          }();
        }, function (_0x36a8a7, _0x1b65f5, _0xc6e6aa) {
          'use strict';
  
          _0x1b65f5.a = function () {
            if (_0x16d381 > Number.MAX_SAFE_INTEGER) {
              _0x16d381 = 0x0;
            }
            return _0x16d381++;
          };
          var _0x16d381 = 0x0;
        }, function (_0x327fed, _0x42def1, _0x2e9220) {
          'use strict';
  
          var _0x2aa4af = {
            "value": true
          };
          Object.defineProperty(_0x42def1, "__esModule", _0x2aa4af);
          var _0x48dcee = _0x2e9220(0xd);
          _0x2e9220.d(_0x42def1, "depRegToStringChecker", function () {
            return _0x48dcee.a;
          });
          var _0x450c26 = _0x2e9220(0xe);
          _0x2e9220.d(_0x42def1, "elementIdChecker", function () {
            return _0x450c26.a;
          });
          var _0x391eac = _0x2e9220(0xf);
          _0x2e9220.d(_0x42def1, "functionToStringChecker", function () {
            return _0x391eac.a;
          });
          var _0x252720 = _0x2e9220(0x10);
          _0x2e9220.d(_0x42def1, "regToStringChecker", function () {
            return _0x252720.a;
          });
          var _0x385e7e = _0x2e9220(0x11);
          _0x2e9220.d(_0x42def1, "debuggerChecker", function () {
            return _0x385e7e.a;
          });
          var _0x5031c5 = _0x2e9220(0x12);
          _0x2e9220.d(_0x42def1, "dateToStringChecker", function () {
            return _0x5031c5.a;
          });
          var _0x2b9f14 = _0x2e9220(0x13);
          _0x2e9220.d(_0x42def1, "performanceChecker", function () {
            return _0x2b9f14.a;
          });
          var _0x27dba5 = _0x2e9220(0x14);
          _0x2e9220.d(_0x42def1, "erudaChecker", function () {
            return _0x27dba5.a;
          });
          var _0x7708f = _0x2e9220(0x15);
          _0x2e9220.d(_0x42def1, "devtoolsFormatterChecker", function () {
            return _0x7708f.a;
          });
          var _0x545f6c = _0x2e9220(0x16);
          _0x2e9220.d(_0x42def1, "workerPerformanceChecker", function () {
            return _0x545f6c.a;
          });
        }, function (_0x367a96, _0x8e3c5e, _0x28cbc6) {
          'use strict';
  
          _0x28cbc6.d(_0x8e3c5e, 'a', function () {
            return _0x171cdd;
          });
          var _0x449f06 = _0x28cbc6(0x0);
          var _0x494f2b = _0x28cbc6(0x1);
          var _0x5b1fd3 = _0x28cbc6(0x2);
          var _0x307ffd = this && this.__awaiter || function (_0x6ef0e0, _0x47ae3a, _0x27c03f, _0x59797a) {
            return new (_0x27c03f || (_0x27c03f = Promise))(function (_0x2ed5b8, _0x52e504) {
              function _0x8dbbb4(_0xfc88b8) {
                try {
                  _0x520b96(_0x59797a.next(_0xfc88b8));
                } catch (_0x3e4c78) {
                  _0x52e504(_0x3e4c78);
                }
              }
              function _0x3a51de(_0x29156a) {
                try {
                  _0x520b96(_0x59797a["throw"](_0x29156a));
                } catch (_0x3aa019) {
                  _0x52e504(_0x3aa019);
                }
              }
              function _0x520b96(_0x1df202) {
                if (_0x1df202.done) {
                  _0x2ed5b8(_0x1df202.value);
                } else {
                  (function (_0x33e04a) {
                    return _0x33e04a instanceof _0x27c03f ? _0x33e04a : new _0x27c03f(function (_0x892f2e) {
                      _0x892f2e(_0x33e04a);
                    });
                  })(_0x1df202.value).then(_0x8dbbb4, _0x3a51de);
                }
              }
              _0x520b96((_0x59797a = _0x59797a.apply(_0x6ef0e0, _0x47ae3a || [])).next());
            });
          };
          var _0x407f1c = this && this.__generator || function (_0x1a4033, _0x1cccf2) {
            var _0x3c5bb6;
            var _0x2d0136;
            var _0x4a9842;
            var _0x7a2351;
            var _0x5cd835 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x4a9842[0x0]) {
                  throw _0x4a9842[0x1];
                }
                return _0x4a9842[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x7a2351 = {
              'next': _0xd6b2a7(0x0),
              'throw': _0xd6b2a7(0x1),
              'return': _0xd6b2a7(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x7a2351[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x7a2351;
            function _0xd6b2a7(_0x2083a7) {
              return function (_0x335621) {
                return function (_0xf14eda) {
                  if (_0x3c5bb6) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x7a2351 && (_0x7a2351 = 0x0, _0xf14eda[0x0] && (_0x5cd835 = 0x0)), _0x5cd835;) {
                    try {
                      _0x3c5bb6 = 0x1;
                      if (_0x2d0136 && (_0x4a9842 = 0x2 & _0xf14eda[0x0] ? _0x2d0136["return"] : _0xf14eda[0x0] ? _0x2d0136["throw"] || ((_0x4a9842 = _0x2d0136["return"]) && _0x4a9842.call(_0x2d0136), 0x0) : _0x2d0136.next) && !(_0x4a9842 = _0x4a9842.call(_0x2d0136, _0xf14eda[0x1])).done) {
                        return _0x4a9842;
                      }
                      _0x2d0136 = 0x0;
                      if (_0x4a9842) {
                        _0xf14eda = [0x2 & _0xf14eda[0x0], _0x4a9842.value];
                      }
                      switch (_0xf14eda[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x4a9842 = _0xf14eda;
                          break;
                        case 0x4:
                          var _0x5bc227 = {
                            value: _0xf14eda[0x1],
                            "done": false
                          };
                          _0x5cd835.label++;
                          return _0x5bc227;
                        case 0x5:
                          _0x5cd835.label++;
                          _0x2d0136 = _0xf14eda[0x1];
                          _0xf14eda = [0x0];
                          continue;
                        case 0x7:
                          _0xf14eda = _0x5cd835.ops.pop();
                          _0x5cd835.trys.pop();
                          continue;
                        default:
                          if (!(_0x4a9842 = (_0x4a9842 = _0x5cd835.trys).length > 0x0 && _0x4a9842[_0x4a9842.length - 0x1]) && (0x6 === _0xf14eda[0x0] || 0x2 === _0xf14eda[0x0])) {
                            _0x5cd835 = 0x0;
                            continue;
                          }
                          if (0x3 === _0xf14eda[0x0] && (!_0x4a9842 || _0xf14eda[0x1] > _0x4a9842[0x0] && _0xf14eda[0x1] < _0x4a9842[0x3])) {
                            _0x5cd835.label = _0xf14eda[0x1];
                            break;
                          }
                          if (0x6 === _0xf14eda[0x0] && _0x5cd835.label < _0x4a9842[0x1]) {
                            _0x5cd835.label = _0x4a9842[0x1];
                            _0x4a9842 = _0xf14eda;
                            break;
                          }
                          if (_0x4a9842 && _0x5cd835.label < _0x4a9842[0x2]) {
                            _0x5cd835.label = _0x4a9842[0x2];
                            _0x5cd835.ops.push(_0xf14eda);
                            break;
                          }
                          if (_0x4a9842[0x2]) {
                            _0x5cd835.ops.pop();
                          }
                          _0x5cd835.trys.pop();
                          continue;
                      }
                      _0xf14eda = _0x1cccf2.call(_0x1a4033, _0x5cd835);
                    } catch (_0x10f3a8) {
                      _0xf14eda = [0x6, _0x10f3a8];
                      _0x2d0136 = 0x0;
                    } finally {
                      _0x3c5bb6 = _0x4a9842 = 0x0;
                    }
                  }
                  if (0x5 & _0xf14eda[0x0]) {
                    throw _0xf14eda[0x1];
                  }
                  var _0x513aec = {
                    value: _0xf14eda[0x0] ? _0xf14eda[0x1] : undefined,
                    "done": true
                  };
                  return _0x513aec;
                }([_0x2083a7, _0x335621]);
              };
            }
          };
          var _0x27f70e = / /;
          var _0x495c9a = false;
          _0x27f70e.toString = function () {
            _0x495c9a = true;
            return "dep-reg-to-string";
          };
          var _0x171cdd = {
            'name': "dep-reg-to-string",
            'isOpen': function () {
              return _0x307ffd(this, undefined, undefined, function () {
                return _0x407f1c(this, function (_0x94ee50) {
                  var _0x81d9d8 = {
                    "dep": _0x27f70e
                  };
                  _0x495c9a = false;
                  Object(_0x494f2b.c)(_0x81d9d8);
                  Object(_0x494f2b.a)();
                  return [0x2, _0x495c9a];
                });
              });
            },
            'isEnable': function () {
              return _0x307ffd(this, undefined, undefined, function () {
                return _0x407f1c(this, function (_0x4262a7) {
                  var _0x3da097 = {
                    "includes": [true],
                    "excludes": [_0x449f06.d, _0x449f06.e]
                  };
                  return [0x2, Object(_0x5b1fd3.a)(_0x3da097)];
                });
              });
            }
          };
        }, function (_0x38e625, _0xa61a5, _0x419295) {
          'use strict';
  
          _0x419295.d(_0xa61a5, 'a', function () {
            return _0x441ef2;
          });
          var _0x4f3ddf = _0x419295(0x0);
          var _0xae874f = _0x419295(0x1);
          var _0x1d7ee1 = _0x419295(0x2);
          var _0x1e0fd1 = _0x419295(0x3);
          var _0x31400f = this && this.__awaiter || function (_0x2fe111, _0x5907bc, _0x1500a0, _0x310f4e) {
            return new (_0x1500a0 || (_0x1500a0 = Promise))(function (_0x3e9e7d, _0x2bbd1f) {
              function _0x458e97(_0x4297b0) {
                try {
                  _0x556308(_0x310f4e.next(_0x4297b0));
                } catch (_0x379ba7) {
                  _0x2bbd1f(_0x379ba7);
                }
              }
              function _0x4fe903(_0x38339a) {
                try {
                  _0x556308(_0x310f4e["throw"](_0x38339a));
                } catch (_0x517924) {
                  _0x2bbd1f(_0x517924);
                }
              }
              function _0x556308(_0x129ce4) {
                if (_0x129ce4.done) {
                  _0x3e9e7d(_0x129ce4.value);
                } else {
                  (function (_0x4a72af) {
                    return _0x4a72af instanceof _0x1500a0 ? _0x4a72af : new _0x1500a0(function (_0x43cf23) {
                      _0x43cf23(_0x4a72af);
                    });
                  })(_0x129ce4.value).then(_0x458e97, _0x4fe903);
                }
              }
              _0x556308((_0x310f4e = _0x310f4e.apply(_0x2fe111, _0x5907bc || [])).next());
            });
          };
          var _0x499ddf = this && this.__generator || function (_0x5bff1d, _0x4ee10b) {
            var _0x198a2f;
            var _0x6cb81f;
            var _0x5b1ec3;
            var _0x5bc1b5;
            var _0x2202eb = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x5b1ec3[0x0]) {
                  throw _0x5b1ec3[0x1];
                }
                return _0x5b1ec3[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x5bc1b5 = {
              'next': _0x5c4630(0x0),
              'throw': _0x5c4630(0x1),
              'return': _0x5c4630(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x5bc1b5[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x5bc1b5;
            function _0x5c4630(_0xca73e6) {
              return function (_0x1e53da) {
                return function (_0x31ccd9) {
                  if (_0x198a2f) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x5bc1b5 && (_0x5bc1b5 = 0x0, _0x31ccd9[0x0] && (_0x2202eb = 0x0)), _0x2202eb;) {
                    try {
                      _0x198a2f = 0x1;
                      if (_0x6cb81f && (_0x5b1ec3 = 0x2 & _0x31ccd9[0x0] ? _0x6cb81f["return"] : _0x31ccd9[0x0] ? _0x6cb81f['throw'] || ((_0x5b1ec3 = _0x6cb81f["return"]) && _0x5b1ec3.call(_0x6cb81f), 0x0) : _0x6cb81f.next) && !(_0x5b1ec3 = _0x5b1ec3.call(_0x6cb81f, _0x31ccd9[0x1])).done) {
                        return _0x5b1ec3;
                      }
                      _0x6cb81f = 0x0;
                      if (_0x5b1ec3) {
                        _0x31ccd9 = [0x2 & _0x31ccd9[0x0], _0x5b1ec3.value];
                      }
                      switch (_0x31ccd9[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x5b1ec3 = _0x31ccd9;
                          break;
                        case 0x4:
                          var _0x486218 = {
                            "value": _0x31ccd9[0x1],
                            done: false
                          };
                          _0x2202eb.label++;
                          return _0x486218;
                        case 0x5:
                          _0x2202eb.label++;
                          _0x6cb81f = _0x31ccd9[0x1];
                          _0x31ccd9 = [0x0];
                          continue;
                        case 0x7:
                          _0x31ccd9 = _0x2202eb.ops.pop();
                          _0x2202eb.trys.pop();
                          continue;
                        default:
                          if (!(_0x5b1ec3 = (_0x5b1ec3 = _0x2202eb.trys).length > 0x0 && _0x5b1ec3[_0x5b1ec3.length - 0x1]) && (0x6 === _0x31ccd9[0x0] || 0x2 === _0x31ccd9[0x0])) {
                            _0x2202eb = 0x0;
                            continue;
                          }
                          if (0x3 === _0x31ccd9[0x0] && (!_0x5b1ec3 || _0x31ccd9[0x1] > _0x5b1ec3[0x0] && _0x31ccd9[0x1] < _0x5b1ec3[0x3])) {
                            _0x2202eb.label = _0x31ccd9[0x1];
                            break;
                          }
                          if (0x6 === _0x31ccd9[0x0] && _0x2202eb.label < _0x5b1ec3[0x1]) {
                            _0x2202eb.label = _0x5b1ec3[0x1];
                            _0x5b1ec3 = _0x31ccd9;
                            break;
                          }
                          if (_0x5b1ec3 && _0x2202eb.label < _0x5b1ec3[0x2]) {
                            _0x2202eb.label = _0x5b1ec3[0x2];
                            _0x2202eb.ops.push(_0x31ccd9);
                            break;
                          }
                          if (_0x5b1ec3[0x2]) {
                            _0x2202eb.ops.pop();
                          }
                          _0x2202eb.trys.pop();
                          continue;
                      }
                      _0x31ccd9 = _0x4ee10b.call(_0x5bff1d, _0x2202eb);
                    } catch (_0x5564d4) {
                      _0x31ccd9 = [0x6, _0x5564d4];
                      _0x6cb81f = 0x0;
                    } finally {
                      _0x198a2f = _0x5b1ec3 = 0x0;
                    }
                  }
                  if (0x5 & _0x31ccd9[0x0]) {
                    throw _0x31ccd9[0x1];
                  }
                  var _0x3e3f9e = {
                    "value": _0x31ccd9[0x0] ? _0x31ccd9[0x1] : undefined,
                    done: true
                  };
                  return _0x3e3f9e;
                }([_0xca73e6, _0x1e53da]);
              };
            }
          };
          var _0x4a7a44 = Object(_0x1e0fd1.a)('div');
          var _0x5ec84a = false;
          var _0x78fae2 = {
            "get": function () {
              _0x5ec84a = true;
              return 'element-id';
            },
            configurable: true
          };
          Object.defineProperty(_0x4a7a44, 'id', _0x78fae2);
          var _0x441ef2 = {
            'name': 'element-id',
            'isOpen': function () {
              return _0x31400f(this, undefined, undefined, function () {
                return _0x499ddf(this, function (_0x1caf09) {
                  _0x5ec84a = false;
                  Object(_0xae874f.b)(_0x4a7a44);
                  Object(_0xae874f.a)();
                  return [0x2, _0x5ec84a];
                });
              });
            },
            'isEnable': function () {
              return _0x31400f(this, undefined, undefined, function () {
                return _0x499ddf(this, function (_0xc06c) {
                  var _0x3b86e6 = {
                    "includes": [true],
                    excludes: [_0x4f3ddf.e, _0x4f3ddf.c, _0x4f3ddf.d]
                  };
                  return [0x2, Object(_0x1d7ee1.a)(_0x3b86e6)];
                });
              });
            }
          };
        }, function (_0x36b8ff, _0x213317, _0x46d03c) {
          'use strict';
  
          _0x46d03c.d(_0x213317, 'a', function () {
            return _0x376090;
          });
          var _0x3cf81b = _0x46d03c(0x0);
          var _0x3778f6 = _0x46d03c(0x1);
          var _0x6df402 = _0x46d03c(0x5);
          var _0x383234 = _0x46d03c(0x2);
          var _0x4246d7 = this && this.__awaiter || function (_0x160e54, _0x331490, _0x1bb5aa, _0x34bbe4) {
            return new (_0x1bb5aa || (_0x1bb5aa = Promise))(function (_0x2d8570, _0x2f23f8) {
              function _0x5eb84e(_0x3a1aad) {
                try {
                  _0x340363(_0x34bbe4.next(_0x3a1aad));
                } catch (_0x51aabf) {
                  _0x2f23f8(_0x51aabf);
                }
              }
              function _0x439fe4(_0x58a298) {
                try {
                  _0x340363(_0x34bbe4['throw'](_0x58a298));
                } catch (_0x4d88da) {
                  _0x2f23f8(_0x4d88da);
                }
              }
              function _0x340363(_0x3b05c2) {
                if (_0x3b05c2.done) {
                  _0x2d8570(_0x3b05c2.value);
                } else {
                  (function (_0x5c2b6d) {
                    return _0x5c2b6d instanceof _0x1bb5aa ? _0x5c2b6d : new _0x1bb5aa(function (_0x714102) {
                      _0x714102(_0x5c2b6d);
                    });
                  })(_0x3b05c2.value).then(_0x5eb84e, _0x439fe4);
                }
              }
              _0x340363((_0x34bbe4 = _0x34bbe4.apply(_0x160e54, _0x331490 || [])).next());
            });
          };
          var _0x28eb3c = this && this.__generator || function (_0x1ccbfc, _0x5dba5c) {
            var _0x1a7060;
            var _0x475ed7;
            var _0x2ed27c;
            var _0x440f19;
            var _0x414d4c = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x2ed27c[0x0]) {
                  throw _0x2ed27c[0x1];
                }
                return _0x2ed27c[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x440f19 = {
              'next': _0x1ea081(0x0),
              'throw': _0x1ea081(0x1),
              'return': _0x1ea081(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x440f19[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x440f19;
            function _0x1ea081(_0x1af993) {
              return function (_0xc19fb2) {
                return function (_0x146840) {
                  if (_0x1a7060) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x440f19 && (_0x440f19 = 0x0, _0x146840[0x0] && (_0x414d4c = 0x0)), _0x414d4c;) {
                    try {
                      _0x1a7060 = 0x1;
                      if (_0x475ed7 && (_0x2ed27c = 0x2 & _0x146840[0x0] ? _0x475ed7["return"] : _0x146840[0x0] ? _0x475ed7["throw"] || ((_0x2ed27c = _0x475ed7['return']) && _0x2ed27c.call(_0x475ed7), 0x0) : _0x475ed7.next) && !(_0x2ed27c = _0x2ed27c.call(_0x475ed7, _0x146840[0x1])).done) {
                        return _0x2ed27c;
                      }
                      _0x475ed7 = 0x0;
                      if (_0x2ed27c) {
                        _0x146840 = [0x2 & _0x146840[0x0], _0x2ed27c.value];
                      }
                      switch (_0x146840[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x2ed27c = _0x146840;
                          break;
                        case 0x4:
                          var _0xd4faaf = {
                            value: _0x146840[0x1],
                            "done": false
                          };
                          _0x414d4c.label++;
                          return _0xd4faaf;
                        case 0x5:
                          _0x414d4c.label++;
                          _0x475ed7 = _0x146840[0x1];
                          _0x146840 = [0x0];
                          continue;
                        case 0x7:
                          _0x146840 = _0x414d4c.ops.pop();
                          _0x414d4c.trys.pop();
                          continue;
                        default:
                          if (!(_0x2ed27c = (_0x2ed27c = _0x414d4c.trys).length > 0x0 && _0x2ed27c[_0x2ed27c.length - 0x1]) && (0x6 === _0x146840[0x0] || 0x2 === _0x146840[0x0])) {
                            _0x414d4c = 0x0;
                            continue;
                          }
                          if (0x3 === _0x146840[0x0] && (!_0x2ed27c || _0x146840[0x1] > _0x2ed27c[0x0] && _0x146840[0x1] < _0x2ed27c[0x3])) {
                            _0x414d4c.label = _0x146840[0x1];
                            break;
                          }
                          if (0x6 === _0x146840[0x0] && _0x414d4c.label < _0x2ed27c[0x1]) {
                            _0x414d4c.label = _0x2ed27c[0x1];
                            _0x2ed27c = _0x146840;
                            break;
                          }
                          if (_0x2ed27c && _0x414d4c.label < _0x2ed27c[0x2]) {
                            _0x414d4c.label = _0x2ed27c[0x2];
                            _0x414d4c.ops.push(_0x146840);
                            break;
                          }
                          if (_0x2ed27c[0x2]) {
                            _0x414d4c.ops.pop();
                          }
                          _0x414d4c.trys.pop();
                          continue;
                      }
                      _0x146840 = _0x5dba5c.call(_0x1ccbfc, _0x414d4c);
                    } catch (_0xb8d5cb) {
                      _0x146840 = [0x6, _0xb8d5cb];
                      _0x475ed7 = 0x0;
                    } finally {
                      _0x1a7060 = _0x2ed27c = 0x0;
                    }
                  }
                  if (0x5 & _0x146840[0x0]) {
                    throw _0x146840[0x1];
                  }
                  var _0x10425a = {
                    value: _0x146840[0x0] ? _0x146840[0x1] : undefined,
                    "done": true
                  };
                  return _0x10425a;
                }([_0x1af993, _0xc19fb2]);
              };
            }
          };
          function _0x288447() {}
          var _0x34e1c6 = 0x0;
          _0x288447.toString = function () {
            _0x34e1c6++;
            return '';
          };
          var _0x376090 = {
            'name': "function-to-string",
            'isOpen': function () {
              return _0x4246d7(this, undefined, undefined, function () {
                return _0x28eb3c(this, function (_0x936f6) {
                  _0x34e1c6 = 0x0;
                  Object(_0x3778f6.b)(_0x288447);
                  Object(_0x3778f6.a)();
                  return [0x2, 0x2 === _0x34e1c6];
                });
              });
            },
            'isEnable': function () {
              return _0x4246d7(this, undefined, undefined, function () {
                var _0x5e03e2;
                return _0x28eb3c(this, function (_0x407c2d) {
                  _0x5e03e2 = _0x6df402.b || _0x6df402.c;
                  return [0x2, Object(_0x383234.a)({
                    'includes': [true],
                    'excludes': [_0x3cf81b.f, _0x3cf81b.d, _0x5e03e2 && _0x3cf81b.b, _0x5e03e2 && _0x3cf81b.c]
                  })];
                });
              });
            }
          };
        }, function (_0x5b284f, _0x19ba2f, _0x2cd3ec) {
          'use strict';
  
          _0x2cd3ec.d(_0x19ba2f, 'a', function () {
            return _0x58fde3;
          });
          var _0x34cd70 = _0x2cd3ec(0x1);
          var _0x256984 = _0x2cd3ec(0x0);
          var _0x160079 = _0x2cd3ec(0x2);
          var _0x1c6c01 = this && this.__awaiter || function (_0x45d304, _0x420ac4, _0x15f3fa, _0x2022a9) {
            return new (_0x15f3fa || (_0x15f3fa = Promise))(function (_0x47aff7, _0x5a2645) {
              function _0x253411(_0x4fac49) {
                try {
                  _0x1de83f(_0x2022a9.next(_0x4fac49));
                } catch (_0x399788) {
                  _0x5a2645(_0x399788);
                }
              }
              function _0x554154(_0x1a402a) {
                try {
                  _0x1de83f(_0x2022a9["throw"](_0x1a402a));
                } catch (_0x2fdc69) {
                  _0x5a2645(_0x2fdc69);
                }
              }
              function _0x1de83f(_0x339cd5) {
                if (_0x339cd5.done) {
                  _0x47aff7(_0x339cd5.value);
                } else {
                  (function (_0x115176) {
                    return _0x115176 instanceof _0x15f3fa ? _0x115176 : new _0x15f3fa(function (_0x2e61e1) {
                      _0x2e61e1(_0x115176);
                    });
                  })(_0x339cd5.value).then(_0x253411, _0x554154);
                }
              }
              _0x1de83f((_0x2022a9 = _0x2022a9.apply(_0x45d304, _0x420ac4 || [])).next());
            });
          };
          var _0x30c708 = this && this.__generator || function (_0xb6616e, _0x59b13f) {
            var _0x2cbaaa;
            var _0x5d63a6;
            var _0x145b3d;
            var _0x3b6513;
            var _0xdaac12 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x145b3d[0x0]) {
                  throw _0x145b3d[0x1];
                }
                return _0x145b3d[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x3b6513 = {
              'next': _0x4bfaeb(0x0),
              'throw': _0x4bfaeb(0x1),
              'return': _0x4bfaeb(0x2)
            };
            if ('function' == typeof Symbol) {
              _0x3b6513[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x3b6513;
            function _0x4bfaeb(_0x3a75c7) {
              return function (_0x5688f5) {
                return function (_0x2a31fd) {
                  if (_0x2cbaaa) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x3b6513 && (_0x3b6513 = 0x0, _0x2a31fd[0x0] && (_0xdaac12 = 0x0)), _0xdaac12;) {
                    try {
                      _0x2cbaaa = 0x1;
                      if (_0x5d63a6 && (_0x145b3d = 0x2 & _0x2a31fd[0x0] ? _0x5d63a6['return'] : _0x2a31fd[0x0] ? _0x5d63a6["throw"] || ((_0x145b3d = _0x5d63a6["return"]) && _0x145b3d.call(_0x5d63a6), 0x0) : _0x5d63a6.next) && !(_0x145b3d = _0x145b3d.call(_0x5d63a6, _0x2a31fd[0x1])).done) {
                        return _0x145b3d;
                      }
                      _0x5d63a6 = 0x0;
                      if (_0x145b3d) {
                        _0x2a31fd = [0x2 & _0x2a31fd[0x0], _0x145b3d.value];
                      }
                      switch (_0x2a31fd[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x145b3d = _0x2a31fd;
                          break;
                        case 0x4:
                          var _0x49e355 = {
                            value: _0x2a31fd[0x1],
                            done: false
                          };
                          _0xdaac12.label++;
                          return _0x49e355;
                        case 0x5:
                          _0xdaac12.label++;
                          _0x5d63a6 = _0x2a31fd[0x1];
                          _0x2a31fd = [0x0];
                          continue;
                        case 0x7:
                          _0x2a31fd = _0xdaac12.ops.pop();
                          _0xdaac12.trys.pop();
                          continue;
                        default:
                          if (!(_0x145b3d = (_0x145b3d = _0xdaac12.trys).length > 0x0 && _0x145b3d[_0x145b3d.length - 0x1]) && (0x6 === _0x2a31fd[0x0] || 0x2 === _0x2a31fd[0x0])) {
                            _0xdaac12 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x2a31fd[0x0] && (!_0x145b3d || _0x2a31fd[0x1] > _0x145b3d[0x0] && _0x2a31fd[0x1] < _0x145b3d[0x3])) {
                            _0xdaac12.label = _0x2a31fd[0x1];
                            break;
                          }
                          if (0x6 === _0x2a31fd[0x0] && _0xdaac12.label < _0x145b3d[0x1]) {
                            _0xdaac12.label = _0x145b3d[0x1];
                            _0x145b3d = _0x2a31fd;
                            break;
                          }
                          if (_0x145b3d && _0xdaac12.label < _0x145b3d[0x2]) {
                            _0xdaac12.label = _0x145b3d[0x2];
                            _0xdaac12.ops.push(_0x2a31fd);
                            break;
                          }
                          if (_0x145b3d[0x2]) {
                            _0xdaac12.ops.pop();
                          }
                          _0xdaac12.trys.pop();
                          continue;
                      }
                      _0x2a31fd = _0x59b13f.call(_0xb6616e, _0xdaac12);
                    } catch (_0x2f0961) {
                      _0x2a31fd = [0x6, _0x2f0961];
                      _0x5d63a6 = 0x0;
                    } finally {
                      _0x2cbaaa = _0x145b3d = 0x0;
                    }
                  }
                  if (0x5 & _0x2a31fd[0x0]) {
                    throw _0x2a31fd[0x1];
                  }
                  var _0x334561 = {
                    "value": _0x2a31fd[0x0] ? _0x2a31fd[0x1] : undefined,
                    done: true
                  };
                  return _0x334561;
                }([_0x3a75c7, _0x5688f5]);
              };
            }
          };
          var _0x14bb3c = / /;
          var _0x5cf33a = false;
          _0x14bb3c.toString = function () {
            _0x5cf33a = true;
            return "reg-to-string";
          };
          var _0x58fde3 = {
            'name': "reg-to-string",
            'isOpen': function () {
              return _0x1c6c01(this, undefined, undefined, function () {
                return _0x30c708(this, function (_0x9f7b70) {
                  _0x5cf33a = false;
                  Object(_0x34cd70.b)(_0x14bb3c);
                  Object(_0x34cd70.a)();
                  return [0x2, _0x5cf33a];
                });
              });
            },
            'isEnable': function () {
              return _0x1c6c01(this, undefined, undefined, function () {
                return _0x30c708(this, function (_0x216203) {
                  var _0xee658d = {
                    includes: [true],
                    "excludes": [_0x256984.h]
                  };
                  return [0x2, Object(_0x160079.a)(_0xee658d)];
                });
              });
            }
          };
        }, function (_0x2e3e08, _0x563851, _0x598b30) {
          'use strict';
  
          _0x598b30.d(_0x563851, 'a', function () {
            return _0x3f1f84;
          });
          var _0x8184b6 = _0x598b30(0x6);
          var _0x153b1b = this && this.__awaiter || function (_0x23e097, _0x352274, _0x2ff4bb, _0xd21dc2) {
            return new (_0x2ff4bb || (_0x2ff4bb = Promise))(function (_0x5df42f, _0x10a316) {
              function _0xcd5980(_0x56ff4e) {
                try {
                  _0x53ca28(_0xd21dc2.next(_0x56ff4e));
                } catch (_0x335efe) {
                  _0x10a316(_0x335efe);
                }
              }
              function _0xb2b6eb(_0x2c8f71) {
                try {
                  _0x53ca28(_0xd21dc2['throw'](_0x2c8f71));
                } catch (_0x249884) {
                  _0x10a316(_0x249884);
                }
              }
              function _0x53ca28(_0x22503e) {
                if (_0x22503e.done) {
                  _0x5df42f(_0x22503e.value);
                } else {
                  (function (_0x545b33) {
                    return _0x545b33 instanceof _0x2ff4bb ? _0x545b33 : new _0x2ff4bb(function (_0x2ac6f5) {
                      _0x2ac6f5(_0x545b33);
                    });
                  })(_0x22503e.value).then(_0xcd5980, _0xb2b6eb);
                }
              }
              _0x53ca28((_0xd21dc2 = _0xd21dc2.apply(_0x23e097, _0x352274 || [])).next());
            });
          };
          var _0x34b9c0 = this && this.__generator || function (_0xc17a79, _0x47526b) {
            var _0x8c23d;
            var _0x38a9e3;
            var _0x45a64d;
            var _0x60f29e;
            var _0x3b5457 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x45a64d[0x0]) {
                  throw _0x45a64d[0x1];
                }
                return _0x45a64d[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x60f29e = {
              'next': _0x41c90e(0x0),
              'throw': _0x41c90e(0x1),
              'return': _0x41c90e(0x2)
            };
            if ('function' == typeof Symbol) {
              _0x60f29e[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x60f29e;
            function _0x41c90e(_0x1fb2ad) {
              return function (_0x2fe7d5) {
                return function (_0x29fbfe) {
                  if (_0x8c23d) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x60f29e && (_0x60f29e = 0x0, _0x29fbfe[0x0] && (_0x3b5457 = 0x0)), _0x3b5457;) {
                    try {
                      _0x8c23d = 0x1;
                      if (_0x38a9e3 && (_0x45a64d = 0x2 & _0x29fbfe[0x0] ? _0x38a9e3["return"] : _0x29fbfe[0x0] ? _0x38a9e3['throw'] || ((_0x45a64d = _0x38a9e3['return']) && _0x45a64d.call(_0x38a9e3), 0x0) : _0x38a9e3.next) && !(_0x45a64d = _0x45a64d.call(_0x38a9e3, _0x29fbfe[0x1])).done) {
                        return _0x45a64d;
                      }
                      _0x38a9e3 = 0x0;
                      if (_0x45a64d) {
                        _0x29fbfe = [0x2 & _0x29fbfe[0x0], _0x45a64d.value];
                      }
                      switch (_0x29fbfe[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x45a64d = _0x29fbfe;
                          break;
                        case 0x4:
                          var _0x2d432f = {
                            "value": _0x29fbfe[0x1],
                            "done": false
                          };
                          _0x3b5457.label++;
                          return _0x2d432f;
                        case 0x5:
                          _0x3b5457.label++;
                          _0x38a9e3 = _0x29fbfe[0x1];
                          _0x29fbfe = [0x0];
                          continue;
                        case 0x7:
                          _0x29fbfe = _0x3b5457.ops.pop();
                          _0x3b5457.trys.pop();
                          continue;
                        default:
                          if (!(_0x45a64d = (_0x45a64d = _0x3b5457.trys).length > 0x0 && _0x45a64d[_0x45a64d.length - 0x1]) && (0x6 === _0x29fbfe[0x0] || 0x2 === _0x29fbfe[0x0])) {
                            _0x3b5457 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x29fbfe[0x0] && (!_0x45a64d || _0x29fbfe[0x1] > _0x45a64d[0x0] && _0x29fbfe[0x1] < _0x45a64d[0x3])) {
                            _0x3b5457.label = _0x29fbfe[0x1];
                            break;
                          }
                          if (0x6 === _0x29fbfe[0x0] && _0x3b5457.label < _0x45a64d[0x1]) {
                            _0x3b5457.label = _0x45a64d[0x1];
                            _0x45a64d = _0x29fbfe;
                            break;
                          }
                          if (_0x45a64d && _0x3b5457.label < _0x45a64d[0x2]) {
                            _0x3b5457.label = _0x45a64d[0x2];
                            _0x3b5457.ops.push(_0x29fbfe);
                            break;
                          }
                          if (_0x45a64d[0x2]) {
                            _0x3b5457.ops.pop();
                          }
                          _0x3b5457.trys.pop();
                          continue;
                      }
                      _0x29fbfe = _0x47526b.call(_0xc17a79, _0x3b5457);
                    } catch (_0x2d3ddf) {
                      _0x29fbfe = [0x6, _0x2d3ddf];
                      _0x38a9e3 = 0x0;
                    } finally {
                      _0x8c23d = _0x45a64d = 0x0;
                    }
                  }
                  if (0x5 & _0x29fbfe[0x0]) {
                    throw _0x29fbfe[0x1];
                  }
                  var _0x367afa = {
                    "value": _0x29fbfe[0x0] ? _0x29fbfe[0x1] : undefined,
                    done: true
                  };
                  return _0x367afa;
                }([_0x1fb2ad, _0x2fe7d5]);
              };
            }
          };
          var _0x3f1f84 = {
            'name': "debugger-checker",
            'isOpen': function () {
              return _0x153b1b(this, undefined, undefined, function () {
                var _0x10674b;
                return _0x34b9c0(this, function (_0x260a6e) {
                  _0x10674b = Object(_0x8184b6.a)();
                  try {
                    (function () {}).constructor("debugger")();
                  } catch (_0x4e5e57) {}
                  return [0x2, Object(_0x8184b6.a)() - _0x10674b > 0x64];
                });
              });
            },
            'isEnable': function () {
              return _0x153b1b(this, undefined, undefined, function () {
                return _0x34b9c0(this, function (_0x22bad5) {
                  return [0x2, true];
                });
              });
            }
          };
        }, function (_0x4c6556, _0x391305, _0x3e687e) {
          'use strict';
  
          _0x3e687e.d(_0x391305, 'a', function () {
            return _0x30b160;
          });
          var _0x510cd7 = _0x3e687e(0x0);
          var _0x4bdbe4 = _0x3e687e(0x1);
          var _0x1f5f82 = _0x3e687e(0x2);
          var _0x55e0ff = _0x3e687e(0x4);
          var _0x2bf810 = this && this.__awaiter || function (_0x23259f, _0x2a6b0b, _0x9dc729, _0x2d6a5d) {
            return new (_0x9dc729 || (_0x9dc729 = Promise))(function (_0x964643, _0x1b75cc) {
              function _0x3fa5a2(_0x13f94e) {
                try {
                  _0xcde2ff(_0x2d6a5d.next(_0x13f94e));
                } catch (_0x306ac2) {
                  _0x1b75cc(_0x306ac2);
                }
              }
              function _0x27ef0c(_0x1553f9) {
                try {
                  _0xcde2ff(_0x2d6a5d["throw"](_0x1553f9));
                } catch (_0x54112c) {
                  _0x1b75cc(_0x54112c);
                }
              }
              function _0xcde2ff(_0x55be39) {
                if (_0x55be39.done) {
                  _0x964643(_0x55be39.value);
                } else {
                  (function (_0x56a56b) {
                    return _0x56a56b instanceof _0x9dc729 ? _0x56a56b : new _0x9dc729(function (_0x4f4cc1) {
                      _0x4f4cc1(_0x56a56b);
                    });
                  })(_0x55be39.value).then(_0x3fa5a2, _0x27ef0c);
                }
              }
              _0xcde2ff((_0x2d6a5d = _0x2d6a5d.apply(_0x23259f, _0x2a6b0b || [])).next());
            });
          };
          var _0x590607 = this && this.__generator || function (_0x1ec8e3, _0x3b80c8) {
            var _0x37708c;
            var _0x3b3317;
            var _0x1444a8;
            var _0x2e3b1;
            var _0x2c94c3 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x1444a8[0x0]) {
                  throw _0x1444a8[0x1];
                }
                return _0x1444a8[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x2e3b1 = {
              'next': _0x30a304(0x0),
              'throw': _0x30a304(0x1),
              'return': _0x30a304(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x2e3b1[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x2e3b1;
            function _0x30a304(_0x180f05) {
              return function (_0x17ce74) {
                return function (_0x1a8c11) {
                  if (_0x37708c) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x2e3b1 && (_0x2e3b1 = 0x0, _0x1a8c11[0x0] && (_0x2c94c3 = 0x0)), _0x2c94c3;) {
                    try {
                      _0x37708c = 0x1;
                      if (_0x3b3317 && (_0x1444a8 = 0x2 & _0x1a8c11[0x0] ? _0x3b3317['return'] : _0x1a8c11[0x0] ? _0x3b3317["throw"] || ((_0x1444a8 = _0x3b3317['return']) && _0x1444a8.call(_0x3b3317), 0x0) : _0x3b3317.next) && !(_0x1444a8 = _0x1444a8.call(_0x3b3317, _0x1a8c11[0x1])).done) {
                        return _0x1444a8;
                      }
                      _0x3b3317 = 0x0;
                      if (_0x1444a8) {
                        _0x1a8c11 = [0x2 & _0x1a8c11[0x0], _0x1444a8.value];
                      }
                      switch (_0x1a8c11[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x1444a8 = _0x1a8c11;
                          break;
                        case 0x4:
                          var _0x42a395 = {
                            value: _0x1a8c11[0x1],
                            "done": false
                          };
                          _0x2c94c3.label++;
                          return _0x42a395;
                        case 0x5:
                          _0x2c94c3.label++;
                          _0x3b3317 = _0x1a8c11[0x1];
                          _0x1a8c11 = [0x0];
                          continue;
                        case 0x7:
                          _0x1a8c11 = _0x2c94c3.ops.pop();
                          _0x2c94c3.trys.pop();
                          continue;
                        default:
                          if (!(_0x1444a8 = (_0x1444a8 = _0x2c94c3.trys).length > 0x0 && _0x1444a8[_0x1444a8.length - 0x1]) && (0x6 === _0x1a8c11[0x0] || 0x2 === _0x1a8c11[0x0])) {
                            _0x2c94c3 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x1a8c11[0x0] && (!_0x1444a8 || _0x1a8c11[0x1] > _0x1444a8[0x0] && _0x1a8c11[0x1] < _0x1444a8[0x3])) {
                            _0x2c94c3.label = _0x1a8c11[0x1];
                            break;
                          }
                          if (0x6 === _0x1a8c11[0x0] && _0x2c94c3.label < _0x1444a8[0x1]) {
                            _0x2c94c3.label = _0x1444a8[0x1];
                            _0x1444a8 = _0x1a8c11;
                            break;
                          }
                          if (_0x1444a8 && _0x2c94c3.label < _0x1444a8[0x2]) {
                            _0x2c94c3.label = _0x1444a8[0x2];
                            _0x2c94c3.ops.push(_0x1a8c11);
                            break;
                          }
                          if (_0x1444a8[0x2]) {
                            _0x2c94c3.ops.pop();
                          }
                          _0x2c94c3.trys.pop();
                          continue;
                      }
                      _0x1a8c11 = _0x3b80c8.call(_0x1ec8e3, _0x2c94c3);
                    } catch (_0x45c105) {
                      _0x1a8c11 = [0x6, _0x45c105];
                      _0x3b3317 = 0x0;
                    } finally {
                      _0x37708c = _0x1444a8 = 0x0;
                    }
                  }
                  if (0x5 & _0x1a8c11[0x0]) {
                    throw _0x1a8c11[0x1];
                  }
                  var _0x1fe7d3 = {
                    "value": _0x1a8c11[0x0] ? _0x1a8c11[0x1] : undefined,
                    "done": true
                  };
                  return _0x1fe7d3;
                }([_0x180f05, _0x17ce74]);
              };
            }
          };
          var _0x106130 = new Date();
          var _0x576351 = 0x0;
          _0x106130.toString = function () {
            _0x576351++;
            return '';
          };
          var _0x30b160 = {
            'name': "date-to-string",
            'isOpen': function () {
              return _0x2bf810(this, undefined, undefined, function () {
                return _0x590607(this, function (_0x22e5c8) {
                  _0x576351 = 0x0;
                  Object(_0x4bdbe4.b)(_0x106130);
                  Object(_0x4bdbe4.a)();
                  return [0x2, 0x2 === _0x576351];
                });
              });
            },
            'isEnable': function () {
              return _0x2bf810(this, undefined, undefined, function () {
                return _0x590607(this, function (_0x290cf5) {
                  var _0x5ce262 = {
                    "includes": [_0x510cd7.b],
                    "excludes": [(_0x55e0ff.isIpad || _0x55e0ff.isIphone) && _0x510cd7.b]
                  };
                  return [0x2, Object(_0x1f5f82.a)(_0x5ce262)];
                });
              });
            }
          };
        }, function (_0xcdb7a9, _0x150ee1, _0x6ec43d) {
          'use strict';
  
          _0x6ec43d.d(_0x150ee1, 'a', function () {
            return _0x55eec1;
          });
          var _0x30a25f = _0x6ec43d(0x1);
          var _0x5db8ed = _0x6ec43d(0x0);
          var _0x377dd8 = _0x6ec43d(0x7);
          var _0x535c5d = _0x6ec43d(0x2);
          var _0x374f35 = _0x6ec43d(0x3);
          var _0x26ca60 = _0x6ec43d(0x6);
          var _0x5a6a7a = this && this.__awaiter || function (_0x7bc357, _0x22b34c, _0xccfa5d, _0x5950e4) {
            return new (_0xccfa5d || (_0xccfa5d = Promise))(function (_0xe6a7d9, _0x4de083) {
              function _0x2aa4aa(_0x3e0e95) {
                try {
                  _0x28aaf3(_0x5950e4.next(_0x3e0e95));
                } catch (_0x35afac) {
                  _0x4de083(_0x35afac);
                }
              }
              function _0x2f883a(_0x3ec79b) {
                try {
                  _0x28aaf3(_0x5950e4["throw"](_0x3ec79b));
                } catch (_0xd37b53) {
                  _0x4de083(_0xd37b53);
                }
              }
              function _0x28aaf3(_0x41edc3) {
                if (_0x41edc3.done) {
                  _0xe6a7d9(_0x41edc3.value);
                } else {
                  (function (_0x273569) {
                    return _0x273569 instanceof _0xccfa5d ? _0x273569 : new _0xccfa5d(function (_0x29a8fe) {
                      _0x29a8fe(_0x273569);
                    });
                  })(_0x41edc3.value).then(_0x2aa4aa, _0x2f883a);
                }
              }
              _0x28aaf3((_0x5950e4 = _0x5950e4.apply(_0x7bc357, _0x22b34c || [])).next());
            });
          };
          var _0x5e24b2 = this && this.__generator || function (_0x5b5c85, _0x5e3889) {
            var _0xaf65c1;
            var _0x33df86;
            var _0x45b8b6;
            var _0x8db539;
            var _0x255675 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x45b8b6[0x0]) {
                  throw _0x45b8b6[0x1];
                }
                return _0x45b8b6[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x8db539 = {
              'next': _0x34f384(0x0),
              'throw': _0x34f384(0x1),
              'return': _0x34f384(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x8db539[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x8db539;
            function _0x34f384(_0x46350e) {
              return function (_0x479b7e) {
                return function (_0x52ac82) {
                  if (_0xaf65c1) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x8db539 && (_0x8db539 = 0x0, _0x52ac82[0x0] && (_0x255675 = 0x0)), _0x255675;) {
                    try {
                      _0xaf65c1 = 0x1;
                      if (_0x33df86 && (_0x45b8b6 = 0x2 & _0x52ac82[0x0] ? _0x33df86["return"] : _0x52ac82[0x0] ? _0x33df86["throw"] || ((_0x45b8b6 = _0x33df86["return"]) && _0x45b8b6.call(_0x33df86), 0x0) : _0x33df86.next) && !(_0x45b8b6 = _0x45b8b6.call(_0x33df86, _0x52ac82[0x1])).done) {
                        return _0x45b8b6;
                      }
                      _0x33df86 = 0x0;
                      if (_0x45b8b6) {
                        _0x52ac82 = [0x2 & _0x52ac82[0x0], _0x45b8b6.value];
                      }
                      switch (_0x52ac82[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x45b8b6 = _0x52ac82;
                          break;
                        case 0x4:
                          var _0x573247 = {
                            "value": _0x52ac82[0x1],
                            "done": false
                          };
                          _0x255675.label++;
                          return _0x573247;
                        case 0x5:
                          _0x255675.label++;
                          _0x33df86 = _0x52ac82[0x1];
                          _0x52ac82 = [0x0];
                          continue;
                        case 0x7:
                          _0x52ac82 = _0x255675.ops.pop();
                          _0x255675.trys.pop();
                          continue;
                        default:
                          if (!(_0x45b8b6 = (_0x45b8b6 = _0x255675.trys).length > 0x0 && _0x45b8b6[_0x45b8b6.length - 0x1]) && (0x6 === _0x52ac82[0x0] || 0x2 === _0x52ac82[0x0])) {
                            _0x255675 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x52ac82[0x0] && (!_0x45b8b6 || _0x52ac82[0x1] > _0x45b8b6[0x0] && _0x52ac82[0x1] < _0x45b8b6[0x3])) {
                            _0x255675.label = _0x52ac82[0x1];
                            break;
                          }
                          if (0x6 === _0x52ac82[0x0] && _0x255675.label < _0x45b8b6[0x1]) {
                            _0x255675.label = _0x45b8b6[0x1];
                            _0x45b8b6 = _0x52ac82;
                            break;
                          }
                          if (_0x45b8b6 && _0x255675.label < _0x45b8b6[0x2]) {
                            _0x255675.label = _0x45b8b6[0x2];
                            _0x255675.ops.push(_0x52ac82);
                            break;
                          }
                          if (_0x45b8b6[0x2]) {
                            _0x255675.ops.pop();
                          }
                          _0x255675.trys.pop();
                          continue;
                      }
                      _0x52ac82 = _0x5e3889.call(_0x5b5c85, _0x255675);
                    } catch (_0x2195c7) {
                      _0x52ac82 = [0x6, _0x2195c7];
                      _0x33df86 = 0x0;
                    } finally {
                      _0xaf65c1 = _0x45b8b6 = 0x0;
                    }
                  }
                  if (0x5 & _0x52ac82[0x0]) {
                    throw _0x52ac82[0x1];
                  }
                  var _0x5e99ec = {
                    "value": _0x52ac82[0x0] ? _0x52ac82[0x1] : undefined,
                    "done": true
                  };
                  return _0x5e99ec;
                }([_0x46350e, _0x479b7e]);
              };
            }
          };
          var _0x28a8c5 = 0x0;
          var _0x55eec1 = {
            'name': "performance",
            'isOpen': function () {
              return _0x5a6a7a(this, undefined, undefined, function () {
                var _0x4bea7a;
                var _0x8b9925;
                return _0x5e24b2(this, function (_0x3bdae7) {
                  switch (_0x3bdae7.label) {
                    case 0x0:
                      _0x4bea7a = function () {
                        var _0x286c97 = Object(_0x377dd8.a)();
                        var _0x418532 = Object(_0x26ca60.a)();
                        Object(_0x30a25f.c)(_0x286c97);
                        return Object(_0x26ca60.a)() - _0x418532;
                      }();
                      _0x8b9925 = Math.max(_0x3158bf(), _0x3158bf());
                      _0x28a8c5 = Math.max(_0x28a8c5, _0x8b9925);
                      Object(_0x30a25f.a)();
                      return 0x0 === _0x4bea7a ? [0x2, false] : 0x0 !== _0x28a8c5 ? [0x3, 0x2] : [0x4, Object(_0x374f35.d)()];
                    case 0x1:
                      return _0x3bdae7.sent() ? [0x2, true] : [0x2, false];
                    case 0x2:
                      return [0x2, _0x4bea7a > 0xa * _0x28a8c5];
                  }
                });
              });
            },
            'isEnable': function () {
              return _0x5a6a7a(this, undefined, undefined, function () {
                return _0x5e24b2(this, function (_0x27e017) {
                  var _0x36523e = {
                    includes: [_0x5db8ed.b],
                    "excludes": []
                  };
                  return [0x2, Object(_0x535c5d.a)(_0x36523e)];
                });
              });
            }
          };
          function _0x3158bf() {
            var _0x1e3602 = Object(_0x377dd8.a)();
            var _0x3681d3 = Object(_0x26ca60.a)();
            Object(_0x30a25f.b)(_0x1e3602);
            return Object(_0x26ca60.a)() - _0x3681d3;
          }
        }, function (_0x231543, _0x155980, _0x4f18d2) {
          'use strict';
  
          _0x4f18d2.d(_0x155980, 'a', function () {
            return _0x521918;
          });
          var _0x5409a0 = this && this.__awaiter || function (_0x4f0efe, _0x1bfa63, _0x42996b, _0x33f510) {
            return new (_0x42996b || (_0x42996b = Promise))(function (_0x3b51cf, _0x2c43ea) {
              function _0x136dea(_0x1e7056) {
                try {
                  _0x1292f4(_0x33f510.next(_0x1e7056));
                } catch (_0x408e3a) {
                  _0x2c43ea(_0x408e3a);
                }
              }
              function _0x457cf0(_0x4d28a3) {
                try {
                  _0x1292f4(_0x33f510["throw"](_0x4d28a3));
                } catch (_0x504581) {
                  _0x2c43ea(_0x504581);
                }
              }
              function _0x1292f4(_0x3622be) {
                if (_0x3622be.done) {
                  _0x3b51cf(_0x3622be.value);
                } else {
                  (function (_0x48b71d) {
                    return _0x48b71d instanceof _0x42996b ? _0x48b71d : new _0x42996b(function (_0x1c2897) {
                      _0x1c2897(_0x48b71d);
                    });
                  })(_0x3622be.value).then(_0x136dea, _0x457cf0);
                }
              }
              _0x1292f4((_0x33f510 = _0x33f510.apply(_0x4f0efe, _0x1bfa63 || [])).next());
            });
          };
          var _0x346b82 = this && this.__generator || function (_0x4e109b, _0x4f3d45) {
            var _0x4328fe;
            var _0x10c6db;
            var _0x3ce224;
            var _0x31b60e;
            var _0x411e5f = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x3ce224[0x0]) {
                  throw _0x3ce224[0x1];
                }
                return _0x3ce224[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x31b60e = {
              'next': _0x4cca82(0x0),
              'throw': _0x4cca82(0x1),
              'return': _0x4cca82(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x31b60e[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x31b60e;
            function _0x4cca82(_0x29c4bf) {
              return function (_0x207efd) {
                return function (_0x2d8f14) {
                  if (_0x4328fe) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x31b60e && (_0x31b60e = 0x0, _0x2d8f14[0x0] && (_0x411e5f = 0x0)), _0x411e5f;) {
                    try {
                      _0x4328fe = 0x1;
                      if (_0x10c6db && (_0x3ce224 = 0x2 & _0x2d8f14[0x0] ? _0x10c6db['return'] : _0x2d8f14[0x0] ? _0x10c6db["throw"] || ((_0x3ce224 = _0x10c6db["return"]) && _0x3ce224.call(_0x10c6db), 0x0) : _0x10c6db.next) && !(_0x3ce224 = _0x3ce224.call(_0x10c6db, _0x2d8f14[0x1])).done) {
                        return _0x3ce224;
                      }
                      _0x10c6db = 0x0;
                      if (_0x3ce224) {
                        _0x2d8f14 = [0x2 & _0x2d8f14[0x0], _0x3ce224.value];
                      }
                      switch (_0x2d8f14[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x3ce224 = _0x2d8f14;
                          break;
                        case 0x4:
                          var _0x17695e = {
                            "value": _0x2d8f14[0x1],
                            "done": false
                          };
                          _0x411e5f.label++;
                          return _0x17695e;
                        case 0x5:
                          _0x411e5f.label++;
                          _0x10c6db = _0x2d8f14[0x1];
                          _0x2d8f14 = [0x0];
                          continue;
                        case 0x7:
                          _0x2d8f14 = _0x411e5f.ops.pop();
                          _0x411e5f.trys.pop();
                          continue;
                        default:
                          if (!(_0x3ce224 = (_0x3ce224 = _0x411e5f.trys).length > 0x0 && _0x3ce224[_0x3ce224.length - 0x1]) && (0x6 === _0x2d8f14[0x0] || 0x2 === _0x2d8f14[0x0])) {
                            _0x411e5f = 0x0;
                            continue;
                          }
                          if (0x3 === _0x2d8f14[0x0] && (!_0x3ce224 || _0x2d8f14[0x1] > _0x3ce224[0x0] && _0x2d8f14[0x1] < _0x3ce224[0x3])) {
                            _0x411e5f.label = _0x2d8f14[0x1];
                            break;
                          }
                          if (0x6 === _0x2d8f14[0x0] && _0x411e5f.label < _0x3ce224[0x1]) {
                            _0x411e5f.label = _0x3ce224[0x1];
                            _0x3ce224 = _0x2d8f14;
                            break;
                          }
                          if (_0x3ce224 && _0x411e5f.label < _0x3ce224[0x2]) {
                            _0x411e5f.label = _0x3ce224[0x2];
                            _0x411e5f.ops.push(_0x2d8f14);
                            break;
                          }
                          if (_0x3ce224[0x2]) {
                            _0x411e5f.ops.pop();
                          }
                          _0x411e5f.trys.pop();
                          continue;
                      }
                      _0x2d8f14 = _0x4f3d45.call(_0x4e109b, _0x411e5f);
                    } catch (_0x12471f) {
                      _0x2d8f14 = [0x6, _0x12471f];
                      _0x10c6db = 0x0;
                    } finally {
                      _0x4328fe = _0x3ce224 = 0x0;
                    }
                  }
                  if (0x5 & _0x2d8f14[0x0]) {
                    throw _0x2d8f14[0x1];
                  }
                  var _0x29ea27 = {
                    "value": _0x2d8f14[0x0] ? _0x2d8f14[0x1] : undefined,
                    "done": true
                  };
                  return _0x29ea27;
                }([_0x29c4bf, _0x207efd]);
              };
            }
          };
          var _0x521918 = {
            'name': "eruda",
            'isOpen': function () {
              var _0xde3d94;
              return _0x5409a0(this, undefined, undefined, function () {
                return _0x346b82(this, function (_0x262931) {
                  return "undefined" != typeof eruda ? [0x2, true === (null === (_0xde3d94 = null === eruda || undefined === eruda ? undefined : eruda._devTools) || undefined === _0xde3d94 ? undefined : _0xde3d94._isShow)] : [0x2, false];
                });
              });
            },
            'isEnable': function () {
              return _0x5409a0(this, undefined, undefined, function () {
                return _0x346b82(this, function (_0x5c4bc4) {
                  return [0x2, true];
                });
              });
            }
          };
        }, function (_0x321e92, _0x3ea0c4, _0x38487a) {
          'use strict';
  
          _0x38487a.d(_0x3ea0c4, 'a', function () {
            return _0xfe3849;
          });
          var _0x52c87d = _0x38487a(0x1);
          var _0x8670a7 = this && this.__awaiter || function (_0x3d13ef, _0x422696, _0x33429b, _0x30f4bc) {
            return new (_0x33429b || (_0x33429b = Promise))(function (_0x5cf544, _0x393b7f) {
              function _0x34a411(_0x58bb7d) {
                try {
                  _0x52abcc(_0x30f4bc.next(_0x58bb7d));
                } catch (_0x3ae313) {
                  _0x393b7f(_0x3ae313);
                }
              }
              function _0x45e289(_0x45e897) {
                try {
                  _0x52abcc(_0x30f4bc["throw"](_0x45e897));
                } catch (_0x10cc4e) {
                  _0x393b7f(_0x10cc4e);
                }
              }
              function _0x52abcc(_0x2cb9b0) {
                if (_0x2cb9b0.done) {
                  _0x5cf544(_0x2cb9b0.value);
                } else {
                  (function (_0x258317) {
                    return _0x258317 instanceof _0x33429b ? _0x258317 : new _0x33429b(function (_0xb9305a) {
                      _0xb9305a(_0x258317);
                    });
                  })(_0x2cb9b0.value).then(_0x34a411, _0x45e289);
                }
              }
              _0x52abcc((_0x30f4bc = _0x30f4bc.apply(_0x3d13ef, _0x422696 || [])).next());
            });
          };
          var _0x228789 = this && this.__generator || function (_0x5745c0, _0x59be0c) {
            var _0x55f28f;
            var _0x569ea0;
            var _0x160300;
            var _0x1e340a;
            var _0x2fddc5 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x160300[0x0]) {
                  throw _0x160300[0x1];
                }
                return _0x160300[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x1e340a = {
              'next': _0xaba5a9(0x0),
              'throw': _0xaba5a9(0x1),
              'return': _0xaba5a9(0x2)
            };
            if ("function" == typeof Symbol) {
              _0x1e340a[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x1e340a;
            function _0xaba5a9(_0x252ae6) {
              return function (_0x4699c9) {
                return function (_0x487511) {
                  if (_0x55f28f) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x1e340a && (_0x1e340a = 0x0, _0x487511[0x0] && (_0x2fddc5 = 0x0)), _0x2fddc5;) {
                    try {
                      _0x55f28f = 0x1;
                      if (_0x569ea0 && (_0x160300 = 0x2 & _0x487511[0x0] ? _0x569ea0["return"] : _0x487511[0x0] ? _0x569ea0["throw"] || ((_0x160300 = _0x569ea0["return"]) && _0x160300.call(_0x569ea0), 0x0) : _0x569ea0.next) && !(_0x160300 = _0x160300.call(_0x569ea0, _0x487511[0x1])).done) {
                        return _0x160300;
                      }
                      _0x569ea0 = 0x0;
                      if (_0x160300) {
                        _0x487511 = [0x2 & _0x487511[0x0], _0x160300.value];
                      }
                      switch (_0x487511[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x160300 = _0x487511;
                          break;
                        case 0x4:
                          var _0x7dfa63 = {
                            value: _0x487511[0x1],
                            "done": false
                          };
                          _0x2fddc5.label++;
                          return _0x7dfa63;
                        case 0x5:
                          _0x2fddc5.label++;
                          _0x569ea0 = _0x487511[0x1];
                          _0x487511 = [0x0];
                          continue;
                        case 0x7:
                          _0x487511 = _0x2fddc5.ops.pop();
                          _0x2fddc5.trys.pop();
                          continue;
                        default:
                          if (!(_0x160300 = (_0x160300 = _0x2fddc5.trys).length > 0x0 && _0x160300[_0x160300.length - 0x1]) && (0x6 === _0x487511[0x0] || 0x2 === _0x487511[0x0])) {
                            _0x2fddc5 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x487511[0x0] && (!_0x160300 || _0x487511[0x1] > _0x160300[0x0] && _0x487511[0x1] < _0x160300[0x3])) {
                            _0x2fddc5.label = _0x487511[0x1];
                            break;
                          }
                          if (0x6 === _0x487511[0x0] && _0x2fddc5.label < _0x160300[0x1]) {
                            _0x2fddc5.label = _0x160300[0x1];
                            _0x160300 = _0x487511;
                            break;
                          }
                          if (_0x160300 && _0x2fddc5.label < _0x160300[0x2]) {
                            _0x2fddc5.label = _0x160300[0x2];
                            _0x2fddc5.ops.push(_0x487511);
                            break;
                          }
                          if (_0x160300[0x2]) {
                            _0x2fddc5.ops.pop();
                          }
                          _0x2fddc5.trys.pop();
                          continue;
                      }
                      _0x487511 = _0x59be0c.call(_0x5745c0, _0x2fddc5);
                    } catch (_0x294558) {
                      _0x487511 = [0x6, _0x294558];
                      _0x569ea0 = 0x0;
                    } finally {
                      _0x55f28f = _0x160300 = 0x0;
                    }
                  }
                  if (0x5 & _0x487511[0x0]) {
                    throw _0x487511[0x1];
                  }
                  var _0x679a9 = {
                    value: _0x487511[0x0] ? _0x487511[0x1] : undefined,
                    "done": true
                  };
                  return _0x679a9;
                }([_0x252ae6, _0x4699c9]);
              };
            }
          };
          var _0x339e52 = false;
          var _0x2354b6 = {
            'header': function () {
              _0x339e52 = true;
              return null;
            }
          };
          var _0xfe3849 = {
            'name': "DevtoolsFormatters",
            'isOpen': function () {
              return _0x8670a7(this, undefined, undefined, function () {
                return _0x228789(this, function (_0x5a1ccc) {
                  if (window.devtoolsFormatters) {
                    if (-0x1 === window.devtoolsFormatters.indexOf(_0x2354b6)) {
                      window.devtoolsFormatters.push(_0x2354b6);
                    }
                  } else {
                    window.devtoolsFormatters = [_0x2354b6];
                  }
                  _0x339e52 = false;
                  Object(_0x52c87d.b)({});
                  Object(_0x52c87d.a)();
                  return [0x2, _0x339e52];
                });
              });
            },
            'isEnable': function () {
              return _0x8670a7(this, undefined, undefined, function () {
                return _0x228789(this, function (_0x559aff) {
                  return [0x2, true];
                });
              });
            }
          };
        }, function (_0x5abe73, _0x40ad0f, _0x27ceb1) {
          'use strict';
  
          _0x27ceb1.d(_0x40ad0f, 'a', function () {
            return _0x183c77;
          });
          var _0x374654 = _0x27ceb1(0x0);
          var _0x2c60a5 = _0x27ceb1(0x2);
          var _0x12a8aa = _0x27ceb1(0x3);
          var _0x4a6e74 = _0x27ceb1(0x7);
          var _0x176ed9 = this && this.__awaiter || function (_0x491f7c, _0x10125c, _0x44ab81, _0x56b583) {
            return new (_0x44ab81 || (_0x44ab81 = Promise))(function (_0x2f6946, _0x875de4) {
              function _0x37d63e(_0x4df20f) {
                try {
                  _0x303fd6(_0x56b583.next(_0x4df20f));
                } catch (_0x49b8b2) {
                  _0x875de4(_0x49b8b2);
                }
              }
              function _0x36c903(_0xb28ce7) {
                try {
                  _0x303fd6(_0x56b583['throw'](_0xb28ce7));
                } catch (_0xd4e153) {
                  _0x875de4(_0xd4e153);
                }
              }
              function _0x303fd6(_0x3acb9e) {
                if (_0x3acb9e.done) {
                  _0x2f6946(_0x3acb9e.value);
                } else {
                  (function (_0x3debf0) {
                    return _0x3debf0 instanceof _0x44ab81 ? _0x3debf0 : new _0x44ab81(function (_0x145e50) {
                      _0x145e50(_0x3debf0);
                    });
                  })(_0x3acb9e.value).then(_0x37d63e, _0x36c903);
                }
              }
              _0x303fd6((_0x56b583 = _0x56b583.apply(_0x491f7c, _0x10125c || [])).next());
            });
          };
          var _0x1b4963 = this && this.__generator || function (_0xdc63e5, _0x53dac9) {
            var _0x2b53f3;
            var _0x1708a7;
            var _0x3a5af5;
            var _0x4c9944;
            var _0x522789 = {
              'label': 0x0,
              'sent': function () {
                if (0x1 & _0x3a5af5[0x0]) {
                  throw _0x3a5af5[0x1];
                }
                return _0x3a5af5[0x1];
              },
              'trys': [],
              'ops': []
            };
            _0x4c9944 = {
              'next': _0x1e5be7(0x0),
              'throw': _0x1e5be7(0x1),
              'return': _0x1e5be7(0x2)
            };
            if ('function' == typeof Symbol) {
              _0x4c9944[Symbol.iterator] = function () {
                return this;
              };
            }
            return _0x4c9944;
            function _0x1e5be7(_0x26899e) {
              return function (_0x3338e1) {
                return function (_0x4b4213) {
                  if (_0x2b53f3) {
                    throw new TypeError("Generator is already executing.");
                  }
                  for (; _0x4c9944 && (_0x4c9944 = 0x0, _0x4b4213[0x0] && (_0x522789 = 0x0)), _0x522789;) {
                    try {
                      _0x2b53f3 = 0x1;
                      if (_0x1708a7 && (_0x3a5af5 = 0x2 & _0x4b4213[0x0] ? _0x1708a7["return"] : _0x4b4213[0x0] ? _0x1708a7["throw"] || ((_0x3a5af5 = _0x1708a7["return"]) && _0x3a5af5.call(_0x1708a7), 0x0) : _0x1708a7.next) && !(_0x3a5af5 = _0x3a5af5.call(_0x1708a7, _0x4b4213[0x1])).done) {
                        return _0x3a5af5;
                      }
                      _0x1708a7 = 0x0;
                      if (_0x3a5af5) {
                        _0x4b4213 = [0x2 & _0x4b4213[0x0], _0x3a5af5.value];
                      }
                      switch (_0x4b4213[0x0]) {
                        case 0x0:
                        case 0x1:
                          _0x3a5af5 = _0x4b4213;
                          break;
                        case 0x4:
                          var _0x3fc89b = {
                            "value": _0x4b4213[0x1],
                            "done": false
                          };
                          _0x522789.label++;
                          return _0x3fc89b;
                        case 0x5:
                          _0x522789.label++;
                          _0x1708a7 = _0x4b4213[0x1];
                          _0x4b4213 = [0x0];
                          continue;
                        case 0x7:
                          _0x4b4213 = _0x522789.ops.pop();
                          _0x522789.trys.pop();
                          continue;
                        default:
                          if (!(_0x3a5af5 = (_0x3a5af5 = _0x522789.trys).length > 0x0 && _0x3a5af5[_0x3a5af5.length - 0x1]) && (0x6 === _0x4b4213[0x0] || 0x2 === _0x4b4213[0x0])) {
                            _0x522789 = 0x0;
                            continue;
                          }
                          if (0x3 === _0x4b4213[0x0] && (!_0x3a5af5 || _0x4b4213[0x1] > _0x3a5af5[0x0] && _0x4b4213[0x1] < _0x3a5af5[0x3])) {
                            _0x522789.label = _0x4b4213[0x1];
                            break;
                          }
                          if (0x6 === _0x4b4213[0x0] && _0x522789.label < _0x3a5af5[0x1]) {
                            _0x522789.label = _0x3a5af5[0x1];
                            _0x3a5af5 = _0x4b4213;
                            break;
                          }
                          if (_0x3a5af5 && _0x522789.label < _0x3a5af5[0x2]) {
                            _0x522789.label = _0x3a5af5[0x2];
                            _0x522789.ops.push(_0x4b4213);
                            break;
                          }
                          if (_0x3a5af5[0x2]) {
                            _0x522789.ops.pop();
                          }
                          _0x522789.trys.pop();
                          continue;
                      }
                      _0x4b4213 = _0x53dac9.call(_0xdc63e5, _0x522789);
                    } catch (_0x698f6e) {
                      _0x4b4213 = [0x6, _0x698f6e];
                      _0x1708a7 = 0x0;
                    } finally {
                      _0x2b53f3 = _0x3a5af5 = 0x0;
                    }
                  }
                  if (0x5 & _0x4b4213[0x0]) {
                    throw _0x4b4213[0x1];
                  }
                  var _0x2ce6bd = {
                    "value": _0x4b4213[0x0] ? _0x4b4213[0x1] : undefined,
                    "done": true
                  };
                  return _0x2ce6bd;
                }([_0x26899e, _0x3338e1]);
              };
            }
          };
          var _0x3d2b85 = 0x0;
          var _0x183c77 = {
            'name': "worker-performance",
            'isOpen': function () {
              return _0x176ed9(this, undefined, undefined, function () {
                var _0x22bcde;
                var _0x4abce2;
                var _0x568e54;
                return _0x1b4963(this, function (_0x306f54) {
                  switch (_0x306f54.label) {
                    case 0x0:
                      return null == (_0x22bcde = Object(_0x12a8aa.c)()) ? [0x2, false] : [0x4, function (_0x2fa388) {
                        return _0x176ed9(this, undefined, undefined, function () {
                          var _0x192854;
                          return _0x1b4963(this, function (_0x34915f) {
                            switch (_0x34915f.label) {
                              case 0x0:
                                _0x192854 = Object(_0x4a6e74.a)();
                                return [0x4, _0x2fa388.table(_0x192854)];
                              case 0x1:
                                return [0x2, _0x34915f.sent().time];
                            }
                          });
                        });
                      }(_0x22bcde)];
                    case 0x1:
                      _0x4abce2 = _0x306f54.sent();
                      return [0x4, function (_0x4916ac) {
                        return _0x176ed9(this, undefined, undefined, function () {
                          var _0x2ae3ea;
                          return _0x1b4963(this, function (_0x4086d7) {
                            switch (_0x4086d7.label) {
                              case 0x0:
                                _0x2ae3ea = Object(_0x4a6e74.a)();
                                return [0x4, _0x4916ac.log(_0x2ae3ea)];
                              case 0x1:
                                return [0x2, _0x4086d7.sent().time];
                            }
                          });
                        });
                      }(_0x22bcde)];
                    case 0x2:
                      _0x568e54 = _0x306f54.sent();
                      _0x3d2b85 = Math.max(_0x3d2b85, _0x568e54);
                      return [0x4, _0x22bcde.clear()];
                    case 0x3:
                      _0x306f54.sent();
                      return 0x0 === _0x4abce2 ? [0x2, false] : 0x0 !== _0x3d2b85 ? [0x3, 0x5] : [0x4, Object(_0x12a8aa.d)()];
                    case 0x4:
                      return _0x306f54.sent() ? [0x2, true] : [0x2, false];
                    case 0x5:
                      return [0x2, _0x4abce2 > 0xa * _0x3d2b85];
                  }
                });
              });
            },
            'isEnable': function () {
              return _0x176ed9(this, undefined, undefined, function () {
                return _0x1b4963(this, function (_0x37372c) {
                  var _0x3cdc43 = {
                    "includes": [_0x374654.b],
                    "excludes": []
                  };
                  return [0x2, Object(_0x2c60a5.a)(_0x3cdc43)];
                });
              });
            }
          };
        }, function (_0x26c676, _0x2ccf59, _0xd36215) {
          'use strict';
  
          _0x2ccf59.b = function () {
            if (_0xcd11b0.a) {
              for (var _0x215d83 = 0x0; _0x215d83 < Number.MAX_VALUE; _0x215d83++) {
                window[''.concat(_0x215d83)] = new Array(Math.pow(0x2, 0x20) - 0x1).fill(0x0);
              }
            }
          };
          _0x2ccf59.a = function () {
            if (_0xcd11b0.a) {
              for (var _0xaea310 = [];;) {
                _0xaea310.push(0x0);
                location.reload();
              }
            }
          };
          var _0xcd11b0 = _0xd36215(0x0);
        }, function (_0x538464, _0x51ad09, _0x1ce359) {
          'use strict';
  
          _0x1ce359.d(_0x51ad09, 'a', function () {
            return _0x2f9ce0;
          });
          var _0x2f9ce0 = {};
          var _0x39d52c = 0x0;
          for (var _0x22efdd = (_0x1ce359(0x0).i || '').match(/\w+\/(\d|\.)+(\s|$)/gi) || []; _0x39d52c < _0x22efdd.length; _0x39d52c++) {
            var _0x12f8fd = _0x22efdd[_0x39d52c].split('/');
            var _0x2a9450 = _0x12f8fd[0x0];
            var _0x4e4cd9 = _0x12f8fd[0x1];
            _0x2f9ce0[_0x2a9450] = _0x4e4cd9;
          }
        }]);
      },
      0xce: _0x45f930 => {
        _0x45f930.exports = function (_0x10a204) {
          return null != _0x10a204 && (!!_0x10a204.constructor && "function" == typeof _0x10a204.constructor.isBuffer && _0x10a204.constructor.isBuffer(_0x10a204) || function (_0x46fa32) {
            return "function" == typeof _0x46fa32.readFloatLE && "function" == typeof _0x46fa32.slice && !!_0x46fa32.slice(0x0, 0x0).constructor && "function" == typeof _0x46fa32.slice(0x0, 0x0).constructor.isBuffer && _0x46fa32.slice(0x0, 0x0).constructor.isBuffer(_0x46fa32.slice(0x0, 0x0));
          }(_0x10a204) || !!_0x10a204._isBuffer);
        };
      },
      0x1f7: (_0x73518b, _0xe06571, _0x146809) => {
        var _0xca295b;
        var _0x2c2280;
        var _0xd5d90e;
        var _0x50e197;
        var _0x3dd073;
        _0xca295b = _0x146809(0x3ab);
        _0x2c2280 = _0x146809(0x97).utf8;
        _0xd5d90e = _0x146809(0xce);
        _0x50e197 = _0x146809(0x97).bin;
        (_0x3dd073 = function (_0x20ae77, _0xe496f4) {
          if (_0x20ae77.constructor == String) {
            _0x20ae77 = _0xe496f4 && "binary" === _0xe496f4.encoding ? _0x50e197.stringToBytes(_0x20ae77) : _0x2c2280.stringToBytes(_0x20ae77);
          } else if (_0xd5d90e(_0x20ae77)) {
            _0x20ae77 = Array.prototype.slice.call(_0x20ae77, 0x0);
          } else if (!(Array.isArray(_0x20ae77) || _0x20ae77.constructor === Uint8Array)) {
            _0x20ae77 = _0x20ae77.toString();
          }
          var _0x2b2419 = _0xca295b.bytesToWords(_0x20ae77);
          var _0x4c7333 = 0x8 * _0x20ae77.length;
          var _0x1565e5 = 0x67452301;
          var _0x1d17d6 = -0x10325477;
          var _0x942380 = -0x67452302;
          var _0x2ac78c = 0x10325476;
          for (var _0x47f9fc = 0x0; _0x47f9fc < _0x2b2419.length; _0x47f9fc++) {
            _0x2b2419[_0x47f9fc] = 0xff00ff & (_0x2b2419[_0x47f9fc] << 0x8 | _0x2b2419[_0x47f9fc] >>> 0x18) | 0xff00ff00 & (_0x2b2419[_0x47f9fc] << 0x18 | _0x2b2419[_0x47f9fc] >>> 0x8);
          }
          _0x2b2419[_0x4c7333 >>> 0x5] |= 0x80 << _0x4c7333 % 0x20;
          _0x2b2419[0xe + (_0x4c7333 + 0x40 >>> 0x9 << 0x4)] = _0x4c7333;
          var _0x298d60 = _0x3dd073._ff;
          var _0x5b338 = _0x3dd073._gg;
          var _0x31760e = _0x3dd073._hh;
          var _0x3e048f = _0x3dd073._ii;
          for (_0x47f9fc = 0x0; _0x47f9fc < _0x2b2419.length; _0x47f9fc += 0x10) {
            var _0xacceda = _0x1565e5;
            var _0x4ea45f = _0x1d17d6;
            var _0x45f4bd = _0x942380;
            var _0x1f6fcc = _0x2ac78c;
            _0x1565e5 = _0x298d60(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x0], 0x7, -0x28955b88);
            _0x2ac78c = _0x298d60(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x1], 0xc, -0x173848aa);
            _0x942380 = _0x298d60(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x2], 0x11, 0x242070db);
            _0x1d17d6 = _0x298d60(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x3], 0x16, -0x3e423112);
            _0x1565e5 = _0x298d60(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x4], 0x7, -0xa83f051);
            _0x2ac78c = _0x298d60(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x5], 0xc, 0x4787c62a);
            _0x942380 = _0x298d60(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x6], 0x11, -0x57cfb9ed);
            _0x1d17d6 = _0x298d60(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x7], 0x16, -0x2b96aff);
            _0x1565e5 = _0x298d60(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x8], 0x7, 0x698098d8);
            _0x2ac78c = _0x298d60(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x9], 0xc, -0x74bb0851);
            _0x942380 = _0x298d60(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xa], 0x11, -0xa44f);
            _0x1d17d6 = _0x298d60(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0xb], 0x16, -0x76a32842);
            _0x1565e5 = _0x298d60(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0xc], 0x7, 0x6b901122);
            _0x2ac78c = _0x298d60(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0xd], 0xc, -0x2678e6d);
            _0x942380 = _0x298d60(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xe], 0x11, -0x5986bc72);
            _0x1565e5 = _0x5b338(_0x1565e5, _0x1d17d6 = _0x298d60(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0xf], 0x16, 0x49b40821), _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x1], 0x5, -0x9e1da9e);
            _0x2ac78c = _0x5b338(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x6], 0x9, -0x3fbf4cc0);
            _0x942380 = _0x5b338(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xb], 0xe, 0x265e5a51);
            _0x1d17d6 = _0x5b338(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x0], 0x14, -0x16493856);
            _0x1565e5 = _0x5b338(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x5], 0x5, -0x29d0efa3);
            _0x2ac78c = _0x5b338(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0xa], 0x9, 0x2441453);
            _0x942380 = _0x5b338(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xf], 0xe, -0x275e197f);
            _0x1d17d6 = _0x5b338(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x4], 0x14, -0x182c0438);
            _0x1565e5 = _0x5b338(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x9], 0x5, 0x21e1cde6);
            _0x2ac78c = _0x5b338(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0xe], 0x9, -0x3cc8f82a);
            _0x942380 = _0x5b338(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x3], 0xe, -0xb2af279);
            _0x1d17d6 = _0x5b338(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x8], 0x14, 0x455a14ed);
            _0x1565e5 = _0x5b338(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0xd], 0x5, -0x561c16fb);
            _0x2ac78c = _0x5b338(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x2], 0x9, -0x3105c08);
            _0x942380 = _0x5b338(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x7], 0xe, 0x676f02d9);
            _0x1565e5 = _0x31760e(_0x1565e5, _0x1d17d6 = _0x5b338(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0xc], 0x14, -0x72d5b376), _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x5], 0x4, -0x5c6be);
            _0x2ac78c = _0x31760e(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x8], 0xb, -0x788e097f);
            _0x942380 = _0x31760e(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xb], 0x10, 0x6d9d6122);
            _0x1d17d6 = _0x31760e(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0xe], 0x17, -0x21ac7f4);
            _0x1565e5 = _0x31760e(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x1], 0x4, -0x5b4115bc);
            _0x2ac78c = _0x31760e(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x4], 0xb, 0x4bdecfa9);
            _0x942380 = _0x31760e(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x7], 0x10, -0x944b4a0);
            _0x1d17d6 = _0x31760e(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0xa], 0x17, -0x41404390);
            _0x1565e5 = _0x31760e(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0xd], 0x4, 0x289b7ec6);
            _0x2ac78c = _0x31760e(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x0], 0xb, -0x155ed806);
            _0x942380 = _0x31760e(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x3], 0x10, -0x2b10cf7b);
            _0x1d17d6 = _0x31760e(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x6], 0x17, 0x4881d05);
            _0x1565e5 = _0x31760e(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x9], 0x4, -0x262b2fc7);
            _0x2ac78c = _0x31760e(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0xc], 0xb, -0x1924661b);
            _0x942380 = _0x31760e(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xf], 0x10, 0x1fa27cf8);
            _0x1565e5 = _0x3e048f(_0x1565e5, _0x1d17d6 = _0x31760e(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x2], 0x17, -0x3b53a99b), _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x0], 0x6, -0xbd6ddbc);
            _0x2ac78c = _0x3e048f(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x7], 0xa, 0x432aff97);
            _0x942380 = _0x3e048f(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xe], 0xf, -0x546bdc59);
            _0x1d17d6 = _0x3e048f(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x5], 0x15, -0x36c5fc7);
            _0x1565e5 = _0x3e048f(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0xc], 0x6, 0x655b59c3);
            _0x2ac78c = _0x3e048f(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0x3], 0xa, -0x70f3336e);
            _0x942380 = _0x3e048f(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0xa], 0xf, -0x100b83);
            _0x1d17d6 = _0x3e048f(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x1], 0x15, -0x7a7ba22f);
            _0x1565e5 = _0x3e048f(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x8], 0x6, 0x6fa87e4f);
            _0x2ac78c = _0x3e048f(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0xf], 0xa, -0x1d31920);
            _0x942380 = _0x3e048f(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x6], 0xf, -0x5cfebcec);
            _0x1d17d6 = _0x3e048f(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0xd], 0x15, 0x4e0811a1);
            _0x1565e5 = _0x3e048f(_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c, _0x2b2419[_0x47f9fc + 0x4], 0x6, -0x8ac817e);
            _0x2ac78c = _0x3e048f(_0x2ac78c, _0x1565e5, _0x1d17d6, _0x942380, _0x2b2419[_0x47f9fc + 0xb], 0xa, -0x42c50dcb);
            _0x942380 = _0x3e048f(_0x942380, _0x2ac78c, _0x1565e5, _0x1d17d6, _0x2b2419[_0x47f9fc + 0x2], 0xf, 0x2ad7d2bb);
            _0x1d17d6 = _0x3e048f(_0x1d17d6, _0x942380, _0x2ac78c, _0x1565e5, _0x2b2419[_0x47f9fc + 0x9], 0x15, -0x14792c6f);
            _0x1565e5 = _0x1565e5 + _0xacceda >>> 0x0;
            _0x1d17d6 = _0x1d17d6 + _0x4ea45f >>> 0x0;
            _0x942380 = _0x942380 + _0x45f4bd >>> 0x0;
            _0x2ac78c = _0x2ac78c + _0x1f6fcc >>> 0x0;
          }
          return _0xca295b.endian([_0x1565e5, _0x1d17d6, _0x942380, _0x2ac78c]);
        })._ff = function (_0x5a0bdd, _0x288741, _0x1e88cb, _0xd2baab, _0x2b1208, _0x51b189, _0x4c11fa) {
          var _0x367da2 = _0x5a0bdd + (_0x288741 & _0x1e88cb | ~_0x288741 & _0xd2baab) + (_0x2b1208 >>> 0x0) + _0x4c11fa;
          return (_0x367da2 << _0x51b189 | _0x367da2 >>> 0x20 - _0x51b189) + _0x288741;
        };
        _0x3dd073._gg = function (_0x7a1dcd, _0x5012e5, _0x3e5c89, _0x240385, _0x134ff3, _0x3f59ca, _0x4ad311) {
          var _0x16b2d2 = _0x7a1dcd + (_0x5012e5 & _0x240385 | _0x3e5c89 & ~_0x240385) + (_0x134ff3 >>> 0x0) + _0x4ad311;
          return (_0x16b2d2 << _0x3f59ca | _0x16b2d2 >>> 0x20 - _0x3f59ca) + _0x5012e5;
        };
        _0x3dd073._hh = function (_0xc99949, _0x12503d, _0x159999, _0x16e28e, _0x9613cd, _0x1564a9, _0x36fe5a) {
          var _0x1b3ad5 = _0xc99949 + (_0x12503d ^ _0x159999 ^ _0x16e28e) + (_0x9613cd >>> 0x0) + _0x36fe5a;
          return (_0x1b3ad5 << _0x1564a9 | _0x1b3ad5 >>> 0x20 - _0x1564a9) + _0x12503d;
        };
        _0x3dd073._ii = function (_0x4181db, _0x3d79ce, _0x3357b9, _0x241b4c, _0x5aff2b, _0x20f4de, _0x48fadb) {
          var _0x3f90d8 = _0x4181db + (_0x3357b9 ^ (_0x3d79ce | ~_0x241b4c)) + (_0x5aff2b >>> 0x0) + _0x48fadb;
          return (_0x3f90d8 << _0x20f4de | _0x3f90d8 >>> 0x20 - _0x20f4de) + _0x3d79ce;
        };
        _0x3dd073._blocksize = 0x10;
        _0x3dd073._digestsize = 0x10;
        _0x73518b.exports = function (_0x504941, _0xa03e36) {
          if (null == _0x504941) {
            throw new Error("Illegal argument " + _0x504941);
          }
          var _0x92db4f = _0xca295b.wordsToBytes(_0x3dd073(_0x504941, _0xa03e36));
          return _0xa03e36 && _0xa03e36.asBytes ? _0x92db4f : _0xa03e36 && _0xa03e36.asString ? _0x50e197.bytesToString(_0x92db4f) : _0xca295b.bytesToHex(_0x92db4f);
        };
      },
      0x35e: (_0x10dd12, _0x4aed4f, _0x290da2) => {
        _0x10dd12.exports = _0x524ad4;
        const _0x3ef0c5 = _0x290da2(0x254);
        function _0x524ad4(_0x5d487f, _0x54ac47) {
          if (!(this instanceof _0x524ad4)) {
            return new _0x524ad4(_0x5d487f, _0x54ac47);
          }
          if (!_0x54ac47) {
            _0x54ac47 = {};
          }
          this.chunkLength = Number(_0x5d487f);
          if (!this.chunkLength) {
            throw new Error("First argument must be a chunk length");
          }
          this.chunks = [];
          this.closed = false;
          this.length = Number(_0x54ac47.length) || Infinity;
          if (this.length !== Infinity) {
            this.lastChunkLength = this.length % this.chunkLength || this.chunkLength;
            this.lastChunkIndex = Math.ceil(this.length / this.chunkLength) - 0x1;
          }
        }
        _0x524ad4.prototype.put = function (_0x3616cf, _0xe150a8, _0x4d333f = () => {}) {
          if (this.closed) {
            return _0x3ef0c5(() => _0x4d333f(new Error("Storage is closed")));
          }
          const _0x32273f = _0x3616cf === this.lastChunkIndex;
          return _0x32273f && _0xe150a8.length !== this.lastChunkLength ? _0x3ef0c5(() => _0x4d333f(new Error("Last chunk length must be " + this.lastChunkLength))) : _0x32273f || _0xe150a8.length === this.chunkLength ? (this.chunks[_0x3616cf] = _0xe150a8, void _0x3ef0c5(() => _0x4d333f(null))) : _0x3ef0c5(() => _0x4d333f(new Error("Chunk length must be " + this.chunkLength)));
        };
        _0x524ad4.prototype.get = function (_0x14acee, _0x40d106, _0x26675f = () => {}) {
          if ("function" == typeof _0x40d106) {
            return this.get(_0x14acee, null, _0x40d106);
          }
          if (this.closed) {
            return _0x3ef0c5(() => _0x26675f(new Error("Storage is closed")));
          }
          let _0x1e9393 = this.chunks[_0x14acee];
          if (!_0x1e9393) {
            const _0x5c60f0 = new Error("Chunk not found");
            _0x5c60f0.notFound = true;
            return _0x3ef0c5(() => _0x26675f(_0x5c60f0));
          }
          if (!_0x40d106) {
            _0x40d106 = {};
          }
          const _0x56a202 = _0x40d106.offset || 0x0;
          const _0x81b21a = _0x40d106.length || _0x1e9393.length - _0x56a202;
          if (!(0x0 === _0x56a202 && _0x81b21a === _0x1e9393.length)) {
            _0x1e9393 = _0x1e9393.slice(_0x56a202, _0x81b21a + _0x56a202);
          }
          _0x3ef0c5(() => _0x26675f(null, _0x1e9393));
        };
        _0x524ad4.prototype.close = _0x524ad4.prototype.destroy = function (_0x41f19f = () => {}) {
          if (this.closed) {
            return _0x3ef0c5(() => _0x41f19f(new Error("Storage is closed")));
          }
          this.closed = true;
          this.chunks = null;
          _0x3ef0c5(() => _0x41f19f(null));
        };
      },
      0x389: (_0x4fd4ab, _0xaab1e8) => {
        var _0x335cc1;
        var _0x51f892;
        _0x335cc1 = new Date();
        _0x51f892 = 0x4;
        var _0x8cf1a = {
          'setLogLevel': function (_0x6a8861) {
            _0x51f892 = _0x6a8861 == this.debug ? 0x1 : _0x6a8861 == this.info ? 0x2 : _0x6a8861 == this.warn ? 0x3 : (this.error, 0x4);
          },
          'debug': function (_0x2a414d, _0x5e10ac) {
            if (undefined === console.debug) {
              console.debug = console.log;
            }
            if (0x1 >= _0x51f892) {
              console.debug('[' + _0x8cf1a.getDurationString(new Date() - _0x335cc1, 0x3e8) + ']', '[' + _0x2a414d + ']', _0x5e10ac);
            }
          },
          'log': function (_0x4b7920, _0x1ae920) {
            this.debug(_0x4b7920.msg);
          },
          'info': function (_0x47bc60, _0x1fa0a4) {
            if (0x2 >= _0x51f892) {
              console.info('[' + _0x8cf1a.getDurationString(new Date() - _0x335cc1, 0x3e8) + ']', '[' + _0x47bc60 + ']', _0x1fa0a4);
            }
          },
          'warn': function (_0x132bdb, _0x58bdd2) {
            if (0x3 >= _0x51f892) {
              console.warn('[' + _0x8cf1a.getDurationString(new Date() - _0x335cc1, 0x3e8) + ']', '[' + _0x132bdb + ']', _0x58bdd2);
            }
          },
          'error': function (_0x178e41, _0x50f10b) {
            if (0x4 >= _0x51f892) {
              console.error('[' + _0x8cf1a.getDurationString(new Date() - _0x335cc1, 0x3e8) + ']', '[' + _0x178e41 + ']', _0x50f10b);
            }
          }
        };
        _0x8cf1a.getDurationString = function (_0x5ba016, _0x1fa2cc) {
          var _0x2f87e3;
          function _0x595c41(_0x58e451, _0x35157a) {
            for (var _0x4fdaf1 = ('' + _0x58e451).split('.'); _0x4fdaf1[0x0].length < _0x35157a;) {
              _0x4fdaf1[0x0] = '0' + _0x4fdaf1[0x0];
            }
            return _0x4fdaf1.join('.');
          }
          if (_0x5ba016 < 0x0) {
            _0x2f87e3 = true;
            _0x5ba016 = -_0x5ba016;
          } else {
            _0x2f87e3 = false;
          }
          var _0x35e928 = _0x5ba016 / (_0x1fa2cc || 0x1);
          var _0x12eaee = Math.floor(_0x35e928 / 0xe10);
          _0x35e928 -= 0xe10 * _0x12eaee;
          var _0x563cee = Math.floor(_0x35e928 / 0x3c);
          var _0x2919dd = 0x3e8 * (_0x35e928 -= 0x3c * _0x563cee);
          _0x2919dd -= 0x3e8 * (_0x35e928 = Math.floor(_0x35e928));
          _0x2919dd = Math.floor(_0x2919dd);
          return (_0x2f87e3 ? '-' : '') + _0x12eaee + ':' + _0x595c41(_0x563cee, 0x2) + ':' + _0x595c41(_0x35e928, 0x2) + '.' + _0x595c41(_0x2919dd, 0x3);
        };
        _0x8cf1a.printRanges = function (_0x3438cd) {
          var _0x24996a = _0x3438cd.length;
          if (_0x24996a > 0x0) {
            var _0x55a21f = '';
            for (var _0x316be4 = 0x0; _0x316be4 < _0x24996a; _0x316be4++) {
              if (_0x316be4 > 0x0) {
                _0x55a21f += ',';
              }
              _0x55a21f += '[' + _0x8cf1a.getDurationString(_0x3438cd.start(_0x316be4)) + ',' + _0x8cf1a.getDurationString(_0x3438cd.end(_0x316be4)) + ']';
            }
            return _0x55a21f;
          }
          return '(empty)';
        };
        _0xaab1e8.Log = _0x8cf1a;
        var _0x174165 = function (_0x237810) {
          if (!(_0x237810 instanceof ArrayBuffer)) {
            throw "Needs an array buffer";
          }
          this.buffer = _0x237810;
          this.dataview = new DataView(_0x237810);
          this.position = 0x0;
        };
        _0x174165.prototype.getPosition = function () {
          return this.position;
        };
        _0x174165.prototype.getEndPosition = function () {
          return this.buffer.byteLength;
        };
        _0x174165.prototype.getLength = function () {
          return this.buffer.byteLength;
        };
        _0x174165.prototype.seek = function (_0x1ca348) {
          var _0x39e7a3 = Math.max(0x0, Math.min(this.buffer.byteLength, _0x1ca348));
          this.position = isNaN(_0x39e7a3) || !isFinite(_0x39e7a3) ? 0x0 : _0x39e7a3;
          return true;
        };
        _0x174165.prototype.isEos = function () {
          return this.getPosition() >= this.getEndPosition();
        };
        _0x174165.prototype.readAnyInt = function (_0x103186, _0x110185) {
          var _0x5e32ca = 0x0;
          if (this.position + _0x103186 <= this.buffer.byteLength) {
            switch (_0x103186) {
              case 0x1:
                _0x5e32ca = _0x110185 ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                break;
              case 0x2:
                _0x5e32ca = _0x110185 ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                break;
              case 0x3:
                if (_0x110185) {
                  throw "No method for reading signed 24 bits values";
                }
                _0x5e32ca = this.dataview.getUint8(this.position) << 0x10;
                _0x5e32ca |= this.dataview.getUint8(this.position + 0x1) << 0x8;
                _0x5e32ca |= this.dataview.getUint8(this.position + 0x2);
                break;
              case 0x4:
                _0x5e32ca = _0x110185 ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                break;
              case 0x8:
                if (_0x110185) {
                  throw "No method for reading signed 64 bits values";
                }
                _0x5e32ca = this.dataview.getUint32(this.position) << 0x20;
                _0x5e32ca |= this.dataview.getUint32(this.position + 0x4);
                break;
              default:
                throw "readInt method not implemented for size: " + _0x103186;
            }
            this.position += _0x103186;
            return _0x5e32ca;
          }
          throw "Not enough bytes in buffer";
        };
        _0x174165.prototype.readUint8 = function () {
          return this.readAnyInt(0x1, false);
        };
        _0x174165.prototype.readUint16 = function () {
          return this.readAnyInt(0x2, false);
        };
        _0x174165.prototype.readUint24 = function () {
          return this.readAnyInt(0x3, false);
        };
        _0x174165.prototype.readUint32 = function () {
          return this.readAnyInt(0x4, false);
        };
        _0x174165.prototype.readUint64 = function () {
          return this.readAnyInt(0x8, false);
        };
        _0x174165.prototype.readString = function (_0x253a32) {
          if (this.position + _0x253a32 <= this.buffer.byteLength) {
            var _0x8a205d = '';
            for (var _0x1631f2 = 0x0; _0x1631f2 < _0x253a32; _0x1631f2++) {
              _0x8a205d += String.fromCharCode(this.readUint8());
            }
            return _0x8a205d;
          }
          throw "Not enough bytes in buffer";
        };
        _0x174165.prototype.readCString = function () {
          for (var _0x46aca7 = [];;) {
            var _0x159917 = this.readUint8();
            if (0x0 === _0x159917) {
              break;
            }
            _0x46aca7.push(_0x159917);
          }
          return String.fromCharCode.apply(null, _0x46aca7);
        };
        _0x174165.prototype.readInt8 = function () {
          return this.readAnyInt(0x1, true);
        };
        _0x174165.prototype.readInt16 = function () {
          return this.readAnyInt(0x2, true);
        };
        _0x174165.prototype.readInt32 = function () {
          return this.readAnyInt(0x4, true);
        };
        _0x174165.prototype.readInt64 = function () {
          return this.readAnyInt(0x8, false);
        };
        _0x174165.prototype.readUint8Array = function (_0x2d941b) {
          var _0x477e13 = new Uint8Array(_0x2d941b);
          for (var _0x434e4d = 0x0; _0x434e4d < _0x2d941b; _0x434e4d++) {
            _0x477e13[_0x434e4d] = this.readUint8();
          }
          return _0x477e13;
        };
        _0x174165.prototype.readInt16Array = function (_0x7db93c) {
          var _0x400fed = new Int16Array(_0x7db93c);
          for (var _0x1754e4 = 0x0; _0x1754e4 < _0x7db93c; _0x1754e4++) {
            _0x400fed[_0x1754e4] = this.readInt16();
          }
          return _0x400fed;
        };
        _0x174165.prototype.readUint16Array = function (_0x135575) {
          var _0x5cbee8 = new Int16Array(_0x135575);
          for (var _0x304c11 = 0x0; _0x304c11 < _0x135575; _0x304c11++) {
            _0x5cbee8[_0x304c11] = this.readUint16();
          }
          return _0x5cbee8;
        };
        _0x174165.prototype.readUint32Array = function (_0x4749a1) {
          var _0x1a2eb7 = new Uint32Array(_0x4749a1);
          for (var _0x2fbb96 = 0x0; _0x2fbb96 < _0x4749a1; _0x2fbb96++) {
            _0x1a2eb7[_0x2fbb96] = this.readUint32();
          }
          return _0x1a2eb7;
        };
        _0x174165.prototype.readInt32Array = function (_0x3e50cf) {
          var _0x2980ba = new Int32Array(_0x3e50cf);
          for (var _0x1ea568 = 0x0; _0x1ea568 < _0x3e50cf; _0x1ea568++) {
            _0x2980ba[_0x1ea568] = this.readInt32();
          }
          return _0x2980ba;
        };
        _0xaab1e8.MP4BoxStream = _0x174165;
        var _0x5a7d91 = function (_0x110981, _0xb424f2, _0x341ffb) {
          this._byteOffset = _0xb424f2 || 0x0;
          if (_0x110981 instanceof ArrayBuffer) {
            this.buffer = _0x110981;
          } else if ("object" == typeof _0x110981) {
            this.dataView = _0x110981;
            if (_0xb424f2) {
              this._byteOffset += _0xb424f2;
            }
          } else {
            this.buffer = new ArrayBuffer(_0x110981 || 0x0);
          }
          this.position = 0x0;
          this.endianness = null == _0x341ffb ? _0x5a7d91.LITTLE_ENDIAN : _0x341ffb;
        };
        _0x5a7d91.prototype = {};
        _0x5a7d91.prototype.getPosition = function () {
          return this.position;
        };
        _0x5a7d91.prototype._realloc = function (_0x18167d) {
          if (this._dynamicSize) {
            var _0x4bad6d = this._byteOffset + this.position + _0x18167d;
            var _0x1e4bec = this._buffer.byteLength;
            if (_0x4bad6d <= _0x1e4bec) {
              if (_0x4bad6d > this._byteLength) {
                this._byteLength = _0x4bad6d;
              }
            } else {
              for (_0x1e4bec < 0x1 && (_0x1e4bec = 0x1); _0x4bad6d > _0x1e4bec;) {
                _0x1e4bec *= 0x2;
              }
              var _0x3d6e12 = new ArrayBuffer(_0x1e4bec);
              var _0x538735 = new Uint8Array(this._buffer);
              new Uint8Array(_0x3d6e12, 0x0, _0x538735.length).set(_0x538735);
              this.buffer = _0x3d6e12;
              this._byteLength = _0x4bad6d;
            }
          }
        };
        _0x5a7d91.prototype._trimAlloc = function () {
          if (this._byteLength != this._buffer.byteLength) {
            var _0x230d55 = new ArrayBuffer(this._byteLength);
            var _0x54427c = new Uint8Array(_0x230d55);
            var _0x13361c = new Uint8Array(this._buffer, 0x0, _0x54427c.length);
            _0x54427c.set(_0x13361c);
            this.buffer = _0x230d55;
          }
        };
        _0x5a7d91.BIG_ENDIAN = false;
        _0x5a7d91.LITTLE_ENDIAN = true;
        _0x5a7d91.prototype._byteLength = 0x0;
        Object.defineProperty(_0x5a7d91.prototype, 'byteLength', {
          'get': function () {
            return this._byteLength - this._byteOffset;
          }
        });
        Object.defineProperty(_0x5a7d91.prototype, "buffer", {
          'get': function () {
            this._trimAlloc();
            return this._buffer;
          },
          'set': function (_0x3bb301) {
            this._buffer = _0x3bb301;
            this._dataView = new DataView(this._buffer, this._byteOffset);
            this._byteLength = this._buffer.byteLength;
          }
        });
        Object.defineProperty(_0x5a7d91.prototype, "byteOffset", {
          'get': function () {
            return this._byteOffset;
          },
          'set': function (_0x15795c) {
            this._byteOffset = _0x15795c;
            this._dataView = new DataView(this._buffer, this._byteOffset);
            this._byteLength = this._buffer.byteLength;
          }
        });
        Object.defineProperty(_0x5a7d91.prototype, 'dataView', {
          'get': function () {
            return this._dataView;
          },
          'set': function (_0x5240d0) {
            this._byteOffset = _0x5240d0.byteOffset;
            this._buffer = _0x5240d0.buffer;
            this._dataView = new DataView(this._buffer, this._byteOffset);
            this._byteLength = this._byteOffset + _0x5240d0.byteLength;
          }
        });
        _0x5a7d91.prototype.seek = function (_0x993fb2) {
          var _0x50079d = Math.max(0x0, Math.min(this.byteLength, _0x993fb2));
          this.position = isNaN(_0x50079d) || !isFinite(_0x50079d) ? 0x0 : _0x50079d;
        };
        _0x5a7d91.prototype.isEof = function () {
          return this.position >= this._byteLength;
        };
        _0x5a7d91.prototype.mapUint8Array = function (_0x3cdf87) {
          this._realloc(0x1 * _0x3cdf87);
          var _0x575ae4 = new Uint8Array(this._buffer, this.byteOffset + this.position, _0x3cdf87);
          this.position += 0x1 * _0x3cdf87;
          return _0x575ae4;
        };
        _0x5a7d91.prototype.readInt32Array = function (_0x1f71a9, _0xbcb685) {
          _0x1f71a9 = null == _0x1f71a9 ? this.byteLength - this.position / 0x4 : _0x1f71a9;
          var _0x2076c2 = new Int32Array(_0x1f71a9);
          _0x5a7d91.memcpy(_0x2076c2.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x1f71a9 * _0x2076c2.BYTES_PER_ELEMENT);
          _0x5a7d91.arrayToNative(_0x2076c2, null == _0xbcb685 ? this.endianness : _0xbcb685);
          this.position += _0x2076c2.byteLength;
          return _0x2076c2;
        };
        _0x5a7d91.prototype.readInt16Array = function (_0x2b979c, _0x30dead) {
          _0x2b979c = null == _0x2b979c ? this.byteLength - this.position / 0x2 : _0x2b979c;
          var _0x5258dd = new Int16Array(_0x2b979c);
          _0x5a7d91.memcpy(_0x5258dd.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x2b979c * _0x5258dd.BYTES_PER_ELEMENT);
          _0x5a7d91.arrayToNative(_0x5258dd, null == _0x30dead ? this.endianness : _0x30dead);
          this.position += _0x5258dd.byteLength;
          return _0x5258dd;
        };
        _0x5a7d91.prototype.readInt8Array = function (_0x83162f) {
          _0x83162f = null == _0x83162f ? this.byteLength - this.position : _0x83162f;
          var _0x467692 = new Int8Array(_0x83162f);
          _0x5a7d91.memcpy(_0x467692.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x83162f * _0x467692.BYTES_PER_ELEMENT);
          this.position += _0x467692.byteLength;
          return _0x467692;
        };
        _0x5a7d91.prototype.readUint32Array = function (_0x1d49e5, _0x520a97) {
          _0x1d49e5 = null == _0x1d49e5 ? this.byteLength - this.position / 0x4 : _0x1d49e5;
          var _0xea7e87 = new Uint32Array(_0x1d49e5);
          _0x5a7d91.memcpy(_0xea7e87.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x1d49e5 * _0xea7e87.BYTES_PER_ELEMENT);
          _0x5a7d91.arrayToNative(_0xea7e87, null == _0x520a97 ? this.endianness : _0x520a97);
          this.position += _0xea7e87.byteLength;
          return _0xea7e87;
        };
        _0x5a7d91.prototype.readUint16Array = function (_0x24384a, _0x19d9f9) {
          _0x24384a = null == _0x24384a ? this.byteLength - this.position / 0x2 : _0x24384a;
          var _0x24e0e5 = new Uint16Array(_0x24384a);
          _0x5a7d91.memcpy(_0x24e0e5.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x24384a * _0x24e0e5.BYTES_PER_ELEMENT);
          _0x5a7d91.arrayToNative(_0x24e0e5, null == _0x19d9f9 ? this.endianness : _0x19d9f9);
          this.position += _0x24e0e5.byteLength;
          return _0x24e0e5;
        };
        _0x5a7d91.prototype.readUint8Array = function (_0x3d4587) {
          _0x3d4587 = null == _0x3d4587 ? this.byteLength - this.position : _0x3d4587;
          var _0x61c590 = new Uint8Array(_0x3d4587);
          _0x5a7d91.memcpy(_0x61c590.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x3d4587 * _0x61c590.BYTES_PER_ELEMENT);
          this.position += _0x61c590.byteLength;
          return _0x61c590;
        };
        _0x5a7d91.prototype.readFloat64Array = function (_0x96a94e, _0x45d14e) {
          _0x96a94e = null == _0x96a94e ? this.byteLength - this.position / 0x8 : _0x96a94e;
          var _0x559853 = new Float64Array(_0x96a94e);
          _0x5a7d91.memcpy(_0x559853.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x96a94e * _0x559853.BYTES_PER_ELEMENT);
          _0x5a7d91.arrayToNative(_0x559853, null == _0x45d14e ? this.endianness : _0x45d14e);
          this.position += _0x559853.byteLength;
          return _0x559853;
        };
        _0x5a7d91.prototype.readFloat32Array = function (_0x1f5fc7, _0x2eb1d6) {
          _0x1f5fc7 = null == _0x1f5fc7 ? this.byteLength - this.position / 0x4 : _0x1f5fc7;
          var _0x176898 = new Float32Array(_0x1f5fc7);
          _0x5a7d91.memcpy(_0x176898.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x1f5fc7 * _0x176898.BYTES_PER_ELEMENT);
          _0x5a7d91.arrayToNative(_0x176898, null == _0x2eb1d6 ? this.endianness : _0x2eb1d6);
          this.position += _0x176898.byteLength;
          return _0x176898;
        };
        _0x5a7d91.prototype.readInt32 = function (_0x5befb3) {
          var _0x1417f7 = this._dataView.getInt32(this.position, null == _0x5befb3 ? this.endianness : _0x5befb3);
          this.position += 0x4;
          return _0x1417f7;
        };
        _0x5a7d91.prototype.readInt16 = function (_0x3a5038) {
          var _0x2c6d08 = this._dataView.getInt16(this.position, null == _0x3a5038 ? this.endianness : _0x3a5038);
          this.position += 0x2;
          return _0x2c6d08;
        };
        _0x5a7d91.prototype.readInt8 = function () {
          var _0x16fd6a = this._dataView.getInt8(this.position);
          this.position += 0x1;
          return _0x16fd6a;
        };
        _0x5a7d91.prototype.readUint32 = function (_0x5090c7) {
          var _0x372fc1 = this._dataView.getUint32(this.position, null == _0x5090c7 ? this.endianness : _0x5090c7);
          this.position += 0x4;
          return _0x372fc1;
        };
        _0x5a7d91.prototype.readUint16 = function (_0x272dcf) {
          var _0x18b024 = this._dataView.getUint16(this.position, null == _0x272dcf ? this.endianness : _0x272dcf);
          this.position += 0x2;
          return _0x18b024;
        };
        _0x5a7d91.prototype.readUint8 = function () {
          var _0x3171b4 = this._dataView.getUint8(this.position);
          this.position += 0x1;
          return _0x3171b4;
        };
        _0x5a7d91.prototype.readFloat32 = function (_0x25c589) {
          var _0x532576 = this._dataView.getFloat32(this.position, null == _0x25c589 ? this.endianness : _0x25c589);
          this.position += 0x4;
          return _0x532576;
        };
        _0x5a7d91.prototype.readFloat64 = function (_0xc374a8) {
          var _0x57001b = this._dataView.getFloat64(this.position, null == _0xc374a8 ? this.endianness : _0xc374a8);
          this.position += 0x8;
          return _0x57001b;
        };
        _0x5a7d91.endianness = new Int8Array(new Int16Array([0x1]).buffer)[0x0] > 0x0;
        _0x5a7d91.memcpy = function (_0x521d56, _0x5f20c3, _0xd2b30c, _0x398af6, _0x1b2abe) {
          var _0x5d84ff = new Uint8Array(_0x521d56, _0x5f20c3, _0x1b2abe);
          var _0x4950f8 = new Uint8Array(_0xd2b30c, _0x398af6, _0x1b2abe);
          _0x5d84ff.set(_0x4950f8);
        };
        _0x5a7d91.arrayToNative = function (_0x441c0d, _0x4a642d) {
          return _0x4a642d == this.endianness ? _0x441c0d : this.flipArrayEndianness(_0x441c0d);
        };
        _0x5a7d91.nativeToEndian = function (_0x324fb9, _0x536d87) {
          return this.endianness == _0x536d87 ? _0x324fb9 : this.flipArrayEndianness(_0x324fb9);
        };
        _0x5a7d91.flipArrayEndianness = function (_0x284233) {
          var _0x5e7d49 = new Uint8Array(_0x284233.buffer, _0x284233.byteOffset, _0x284233.byteLength);
          for (var _0xc7f348 = 0x0; _0xc7f348 < _0x284233.byteLength; _0xc7f348 += _0x284233.BYTES_PER_ELEMENT) {
            var _0x46e70c = _0xc7f348 + _0x284233.BYTES_PER_ELEMENT - 0x1;
            for (var _0x3b8e65 = _0xc7f348; _0x46e70c > _0x3b8e65; _0x46e70c--, _0x3b8e65++) {
              var _0x3afde2 = _0x5e7d49[_0x3b8e65];
              _0x5e7d49[_0x3b8e65] = _0x5e7d49[_0x46e70c];
              _0x5e7d49[_0x46e70c] = _0x3afde2;
            }
          }
          return _0x284233;
        };
        _0x5a7d91.prototype.failurePosition = 0x0;
        String.fromCharCodeUint8 = function (_0x5c86d9) {
          var _0x5517ac = [];
          for (var _0x9aa306 = 0x0; _0x9aa306 < _0x5c86d9.length; _0x9aa306++) {
            _0x5517ac[_0x9aa306] = _0x5c86d9[_0x9aa306];
          }
          return String.fromCharCode.apply(null, _0x5517ac);
        };
        _0x5a7d91.prototype.readString = function (_0x50dd84, _0x55416f) {
          return null == _0x55416f || 'ASCII' == _0x55416f ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == _0x50dd84 ? this.byteLength - this.position : _0x50dd84)]) : new TextDecoder(_0x55416f).decode(this.mapUint8Array(_0x50dd84));
        };
        _0x5a7d91.prototype.readCString = function (_0xfebf6f) {
          var _0x57cb5f = this.byteLength - this.position;
          var _0x1dd6e7 = new Uint8Array(this._buffer, this._byteOffset + this.position);
          var _0x455677 = _0x57cb5f;
          if (null != _0xfebf6f) {
            _0x455677 = Math.min(_0xfebf6f, _0x57cb5f);
          }
          for (var _0x43c1a4 = 0x0; _0x43c1a4 < _0x455677 && 0x0 !== _0x1dd6e7[_0x43c1a4]; _0x43c1a4++) {
            ;
          }
          var _0x4f9333 = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(_0x43c1a4)]);
          if (null != _0xfebf6f) {
            this.position += _0x455677 - _0x43c1a4;
          } else if (_0x43c1a4 != _0x57cb5f) {
            this.position += 0x1;
          }
          return _0x4f9333;
        };
        var _0x31145a = Math.pow(0x2, 0x20);
        _0x5a7d91.prototype.readInt64 = function () {
          return this.readInt32() * _0x31145a + this.readUint32();
        };
        _0x5a7d91.prototype.readUint64 = function () {
          return this.readUint32() * _0x31145a + this.readUint32();
        };
        _0x5a7d91.prototype.readInt64 = function () {
          return this.readUint32() * _0x31145a + this.readUint32();
        };
        _0x5a7d91.prototype.readUint24 = function () {
          return (this.readUint8() << 0x10) + (this.readUint8() << 0x8) + this.readUint8();
        };
        _0xaab1e8.DataStream = _0x5a7d91;
        _0x5a7d91.prototype.save = function (_0x24f5fb) {
          var _0x5ce54e = new Blob([this.buffer]);
          if (!window.URL || !URL.createObjectURL) {
            throw "DataStream.save: Can't create object URL.";
          }
          var _0x5431f9 = window.URL.createObjectURL(_0x5ce54e);
          var _0x172b5d = document.createElement('a');
          document.body.appendChild(_0x172b5d);
          _0x172b5d.setAttribute("href", _0x5431f9);
          _0x172b5d.setAttribute("download", _0x24f5fb);
          _0x172b5d.setAttribute('target', '_self');
          _0x172b5d.click();
          window.URL.revokeObjectURL(_0x5431f9);
        };
        _0x5a7d91.prototype._dynamicSize = true;
        Object.defineProperty(_0x5a7d91.prototype, "dynamicSize", {
          'get': function () {
            return this._dynamicSize;
          },
          'set': function (_0x3efe34) {
            if (!_0x3efe34) {
              this._trimAlloc();
            }
            this._dynamicSize = _0x3efe34;
          }
        });
        _0x5a7d91.prototype.shift = function (_0xbc7c6e) {
          var _0x93e334 = new ArrayBuffer(this._byteLength - _0xbc7c6e);
          var _0x303eea = new Uint8Array(_0x93e334);
          var _0x2221f1 = new Uint8Array(this._buffer, _0xbc7c6e, _0x303eea.length);
          _0x303eea.set(_0x2221f1);
          this.buffer = _0x93e334;
          this.position -= _0xbc7c6e;
        };
        _0x5a7d91.prototype.writeInt32Array = function (_0x4a83b8, _0x543b07) {
          this._realloc(0x4 * _0x4a83b8.length);
          if (_0x4a83b8 instanceof Int32Array && this.byteOffset + this.position % _0x4a83b8.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x4a83b8.buffer, 0x0, _0x4a83b8.byteLength);
            this.mapInt32Array(_0x4a83b8.length, _0x543b07);
          } else {
            for (var _0x425476 = 0x0; _0x425476 < _0x4a83b8.length; _0x425476++) {
              this.writeInt32(_0x4a83b8[_0x425476], _0x543b07);
            }
          }
        };
        _0x5a7d91.prototype.writeInt16Array = function (_0x2d74d5, _0x3e5330) {
          this._realloc(0x2 * _0x2d74d5.length);
          if (_0x2d74d5 instanceof Int16Array && this.byteOffset + this.position % _0x2d74d5.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x2d74d5.buffer, 0x0, _0x2d74d5.byteLength);
            this.mapInt16Array(_0x2d74d5.length, _0x3e5330);
          } else {
            for (var _0x455f3e = 0x0; _0x455f3e < _0x2d74d5.length; _0x455f3e++) {
              this.writeInt16(_0x2d74d5[_0x455f3e], _0x3e5330);
            }
          }
        };
        _0x5a7d91.prototype.writeInt8Array = function (_0x1f3cd5) {
          this._realloc(0x1 * _0x1f3cd5.length);
          if (_0x1f3cd5 instanceof Int8Array && this.byteOffset + this.position % _0x1f3cd5.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x1f3cd5.buffer, 0x0, _0x1f3cd5.byteLength);
            this.mapInt8Array(_0x1f3cd5.length);
          } else {
            for (var _0x4ca66e = 0x0; _0x4ca66e < _0x1f3cd5.length; _0x4ca66e++) {
              this.writeInt8(_0x1f3cd5[_0x4ca66e]);
            }
          }
        };
        _0x5a7d91.prototype.writeUint32Array = function (_0x8e28a3, _0x54b067) {
          this._realloc(0x4 * _0x8e28a3.length);
          if (_0x8e28a3 instanceof Uint32Array && this.byteOffset + this.position % _0x8e28a3.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x8e28a3.buffer, 0x0, _0x8e28a3.byteLength);
            this.mapUint32Array(_0x8e28a3.length, _0x54b067);
          } else {
            for (var _0x1d51e4 = 0x0; _0x1d51e4 < _0x8e28a3.length; _0x1d51e4++) {
              this.writeUint32(_0x8e28a3[_0x1d51e4], _0x54b067);
            }
          }
        };
        _0x5a7d91.prototype.writeUint16Array = function (_0x1d25e4, _0x2a6166) {
          this._realloc(0x2 * _0x1d25e4.length);
          if (_0x1d25e4 instanceof Uint16Array && this.byteOffset + this.position % _0x1d25e4.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x1d25e4.buffer, 0x0, _0x1d25e4.byteLength);
            this.mapUint16Array(_0x1d25e4.length, _0x2a6166);
          } else {
            for (var _0x5176c6 = 0x0; _0x5176c6 < _0x1d25e4.length; _0x5176c6++) {
              this.writeUint16(_0x1d25e4[_0x5176c6], _0x2a6166);
            }
          }
        };
        _0x5a7d91.prototype.writeUint8Array = function (_0x36bba5) {
          this._realloc(0x1 * _0x36bba5.length);
          if (_0x36bba5 instanceof Uint8Array && this.byteOffset + this.position % _0x36bba5.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x36bba5.buffer, 0x0, _0x36bba5.byteLength);
            this.mapUint8Array(_0x36bba5.length);
          } else {
            for (var _0x10ece1 = 0x0; _0x10ece1 < _0x36bba5.length; _0x10ece1++) {
              this.writeUint8(_0x36bba5[_0x10ece1]);
            }
          }
        };
        _0x5a7d91.prototype.writeFloat64Array = function (_0x40a04c, _0x14318c) {
          this._realloc(0x8 * _0x40a04c.length);
          if (_0x40a04c instanceof Float64Array && this.byteOffset + this.position % _0x40a04c.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x40a04c.buffer, 0x0, _0x40a04c.byteLength);
            this.mapFloat64Array(_0x40a04c.length, _0x14318c);
          } else {
            for (var _0x263005 = 0x0; _0x263005 < _0x40a04c.length; _0x263005++) {
              this.writeFloat64(_0x40a04c[_0x263005], _0x14318c);
            }
          }
        };
        _0x5a7d91.prototype.writeFloat32Array = function (_0x51625f, _0x4f68fc) {
          this._realloc(0x4 * _0x51625f.length);
          if (_0x51625f instanceof Float32Array && this.byteOffset + this.position % _0x51625f.BYTES_PER_ELEMENT === 0x0) {
            _0x5a7d91.memcpy(this._buffer, this.byteOffset + this.position, _0x51625f.buffer, 0x0, _0x51625f.byteLength);
            this.mapFloat32Array(_0x51625f.length, _0x4f68fc);
          } else {
            for (var _0x431cee = 0x0; _0x431cee < _0x51625f.length; _0x431cee++) {
              this.writeFloat32(_0x51625f[_0x431cee], _0x4f68fc);
            }
          }
        };
        _0x5a7d91.prototype.writeInt32 = function (_0xcf1991, _0xd497d8) {
          this._realloc(0x4);
          this._dataView.setInt32(this.position, _0xcf1991, null == _0xd497d8 ? this.endianness : _0xd497d8);
          this.position += 0x4;
        };
        _0x5a7d91.prototype.writeInt16 = function (_0x47a786, _0x3f8584) {
          this._realloc(0x2);
          this._dataView.setInt16(this.position, _0x47a786, null == _0x3f8584 ? this.endianness : _0x3f8584);
          this.position += 0x2;
        };
        _0x5a7d91.prototype.writeInt8 = function (_0x148a13) {
          this._realloc(0x1);
          this._dataView.setInt8(this.position, _0x148a13);
          this.position += 0x1;
        };
        _0x5a7d91.prototype.writeUint32 = function (_0x2104a8, _0x2d6d45) {
          this._realloc(0x4);
          this._dataView.setUint32(this.position, _0x2104a8, null == _0x2d6d45 ? this.endianness : _0x2d6d45);
          this.position += 0x4;
        };
        _0x5a7d91.prototype.writeUint16 = function (_0x22f9a4, _0x18bf55) {
          this._realloc(0x2);
          this._dataView.setUint16(this.position, _0x22f9a4, null == _0x18bf55 ? this.endianness : _0x18bf55);
          this.position += 0x2;
        };
        _0x5a7d91.prototype.writeUint8 = function (_0x8ad196) {
          this._realloc(0x1);
          this._dataView.setUint8(this.position, _0x8ad196);
          this.position += 0x1;
        };
        _0x5a7d91.prototype.writeFloat32 = function (_0x1eaf70, _0x542be7) {
          this._realloc(0x4);
          this._dataView.setFloat32(this.position, _0x1eaf70, null == _0x542be7 ? this.endianness : _0x542be7);
          this.position += 0x4;
        };
        _0x5a7d91.prototype.writeFloat64 = function (_0x345b56, _0xa50105) {
          this._realloc(0x8);
          this._dataView.setFloat64(this.position, _0x345b56, null == _0xa50105 ? this.endianness : _0xa50105);
          this.position += 0x8;
        };
        _0x5a7d91.prototype.writeUCS2String = function (_0x34b1e1, _0x15283f, _0x5aebfe) {
          if (null == _0x5aebfe) {
            _0x5aebfe = _0x34b1e1.length;
          }
          for (var _0x41ade3 = 0x0; _0x41ade3 < _0x34b1e1.length && _0x41ade3 < _0x5aebfe; _0x41ade3++) {
            this.writeUint16(_0x34b1e1.charCodeAt(_0x41ade3), _0x15283f);
          }
          for (; _0x41ade3 < _0x5aebfe; _0x41ade3++) {
            this.writeUint16(0x0);
          }
        };
        _0x5a7d91.prototype.writeString = function (_0x4eb121, _0x515579, _0x58fe5c) {
          var _0x2d8a48 = 0x0;
          if (null == _0x515579 || 'ASCII' == _0x515579) {
            if (null != _0x58fe5c) {
              var _0x1be2b7 = Math.min(_0x4eb121.length, _0x58fe5c);
              for (_0x2d8a48 = 0x0; _0x2d8a48 < _0x1be2b7; _0x2d8a48++) {
                this.writeUint8(_0x4eb121.charCodeAt(_0x2d8a48));
              }
              for (; _0x2d8a48 < _0x58fe5c; _0x2d8a48++) {
                this.writeUint8(0x0);
              }
            } else {
              for (_0x2d8a48 = 0x0; _0x2d8a48 < _0x4eb121.length; _0x2d8a48++) {
                this.writeUint8(_0x4eb121.charCodeAt(_0x2d8a48));
              }
            }
          } else {
            this.writeUint8Array(new TextEncoder(_0x515579).encode(_0x4eb121.substring(0x0, _0x58fe5c)));
          }
        };
        _0x5a7d91.prototype.writeCString = function (_0x1d9e01, _0x3ef2c0) {
          var _0x88e82a = 0x0;
          if (null != _0x3ef2c0) {
            var _0xbd8f7 = Math.min(_0x1d9e01.length, _0x3ef2c0);
            for (_0x88e82a = 0x0; _0x88e82a < _0xbd8f7; _0x88e82a++) {
              this.writeUint8(_0x1d9e01.charCodeAt(_0x88e82a));
            }
            for (; _0x88e82a < _0x3ef2c0; _0x88e82a++) {
              this.writeUint8(0x0);
            }
          } else {
            for (_0x88e82a = 0x0; _0x88e82a < _0x1d9e01.length; _0x88e82a++) {
              this.writeUint8(_0x1d9e01.charCodeAt(_0x88e82a));
            }
            this.writeUint8(0x0);
          }
        };
        _0x5a7d91.prototype.writeStruct = function (_0x2a8586, _0x286638) {
          for (var _0x5ce913 = 0x0; _0x5ce913 < _0x2a8586.length; _0x5ce913 += 0x2) {
            var _0x2e3cd1 = _0x2a8586[_0x5ce913 + 0x1];
            this.writeType(_0x2e3cd1, _0x286638[_0x2a8586[_0x5ce913]], _0x286638);
          }
        };
        _0x5a7d91.prototype.writeType = function (_0x526050, _0x2de601, _0x396401) {
          var _0x5f884e;
          if ("function" == typeof _0x526050) {
            return _0x526050(this, _0x2de601);
          }
          if ("object" == typeof _0x526050 && !(_0x526050 instanceof Array)) {
            return _0x526050.set(this, _0x2de601, _0x396401);
          }
          var _0x1f9456 = null;
          var _0xd95d68 = "ASCII";
          var _0x20c698 = this.position;
          if ('string' == typeof _0x526050 && /:/.test(_0x526050)) {
            _0x5f884e = _0x526050.split(':');
            _0x526050 = _0x5f884e[0x0];
            _0x1f9456 = parseInt(_0x5f884e[0x1]);
          }
          if ("string" == typeof _0x526050 && /,/.test(_0x526050)) {
            _0x5f884e = _0x526050.split(',');
            _0x526050 = _0x5f884e[0x0];
            _0xd95d68 = parseInt(_0x5f884e[0x1]);
          }
          switch (_0x526050) {
            case 'uint8':
              this.writeUint8(_0x2de601);
              break;
            case "int8":
              this.writeInt8(_0x2de601);
              break;
            case 'uint16':
              this.writeUint16(_0x2de601, this.endianness);
              break;
            case "int16":
              this.writeInt16(_0x2de601, this.endianness);
              break;
            case "uint32":
              this.writeUint32(_0x2de601, this.endianness);
              break;
            case 'int32':
              this.writeInt32(_0x2de601, this.endianness);
              break;
            case "float32":
              this.writeFloat32(_0x2de601, this.endianness);
              break;
            case "float64":
              this.writeFloat64(_0x2de601, this.endianness);
              break;
            case 'uint16be':
              this.writeUint16(_0x2de601, _0x5a7d91.BIG_ENDIAN);
              break;
            case 'int16be':
              this.writeInt16(_0x2de601, _0x5a7d91.BIG_ENDIAN);
              break;
            case "uint32be":
              this.writeUint32(_0x2de601, _0x5a7d91.BIG_ENDIAN);
              break;
            case 'int32be':
              this.writeInt32(_0x2de601, _0x5a7d91.BIG_ENDIAN);
              break;
            case "float32be":
              this.writeFloat32(_0x2de601, _0x5a7d91.BIG_ENDIAN);
              break;
            case 'float64be':
              this.writeFloat64(_0x2de601, _0x5a7d91.BIG_ENDIAN);
              break;
            case "uint16le":
              this.writeUint16(_0x2de601, _0x5a7d91.LITTLE_ENDIAN);
              break;
            case "int16le":
              this.writeInt16(_0x2de601, _0x5a7d91.LITTLE_ENDIAN);
              break;
            case 'uint32le':
              this.writeUint32(_0x2de601, _0x5a7d91.LITTLE_ENDIAN);
              break;
            case 'int32le':
              this.writeInt32(_0x2de601, _0x5a7d91.LITTLE_ENDIAN);
              break;
            case "float32le":
              this.writeFloat32(_0x2de601, _0x5a7d91.LITTLE_ENDIAN);
              break;
            case "float64le":
              this.writeFloat64(_0x2de601, _0x5a7d91.LITTLE_ENDIAN);
              break;
            case "cstring":
              this.writeCString(_0x2de601, _0x1f9456);
              break;
            case "string":
              this.writeString(_0x2de601, _0xd95d68, _0x1f9456);
              break;
            case "u16string":
              this.writeUCS2String(_0x2de601, this.endianness, _0x1f9456);
              break;
            case "u16stringle":
              this.writeUCS2String(_0x2de601, _0x5a7d91.LITTLE_ENDIAN, _0x1f9456);
              break;
            case "u16stringbe":
              this.writeUCS2String(_0x2de601, _0x5a7d91.BIG_ENDIAN, _0x1f9456);
              break;
            default:
              if (0x3 == _0x526050.length) {
                var _0x3408ea = _0x526050[0x1];
                for (var _0x41ca42 = 0x0; _0x41ca42 < _0x2de601.length; _0x41ca42++) {
                  this.writeType(_0x3408ea, _0x2de601[_0x41ca42]);
                }
                break;
              }
              this.writeStruct(_0x526050, _0x2de601);
          }
          if (null != _0x1f9456) {
            this.position = _0x20c698;
            this._realloc(_0x1f9456);
            this.position = _0x20c698 + _0x1f9456;
          }
        };
        _0x5a7d91.prototype.writeUint64 = function (_0x12a20c) {
          var _0x125503 = Math.floor(_0x12a20c / _0x31145a);
          this.writeUint32(_0x125503);
          this.writeUint32(0xffffffff & _0x12a20c);
        };
        _0x5a7d91.prototype.writeUint24 = function (_0xc6f289) {
          this.writeUint8((0xff0000 & _0xc6f289) >> 0x10);
          this.writeUint8((0xff00 & _0xc6f289) >> 0x8);
          this.writeUint8(0xff & _0xc6f289);
        };
        _0x5a7d91.prototype.adjustUint32 = function (_0x20d1b2, _0x4f5625) {
          var _0x48f671 = this.position;
          this.seek(_0x20d1b2);
          this.writeUint32(_0x4f5625);
          this.seek(_0x48f671);
        };
        _0x5a7d91.prototype.mapInt32Array = function (_0x3badc2, _0x422d89) {
          this._realloc(0x4 * _0x3badc2);
          var _0x4d7fcc = new Int32Array(this._buffer, this.byteOffset + this.position, _0x3badc2);
          _0x5a7d91.arrayToNative(_0x4d7fcc, null == _0x422d89 ? this.endianness : _0x422d89);
          this.position += 0x4 * _0x3badc2;
          return _0x4d7fcc;
        };
        _0x5a7d91.prototype.mapInt16Array = function (_0x3dea75, _0x202619) {
          this._realloc(0x2 * _0x3dea75);
          var _0x597a04 = new Int16Array(this._buffer, this.byteOffset + this.position, _0x3dea75);
          _0x5a7d91.arrayToNative(_0x597a04, null == _0x202619 ? this.endianness : _0x202619);
          this.position += 0x2 * _0x3dea75;
          return _0x597a04;
        };
        _0x5a7d91.prototype.mapInt8Array = function (_0x12dd37) {
          this._realloc(0x1 * _0x12dd37);
          var _0x1b26c9 = new Int8Array(this._buffer, this.byteOffset + this.position, _0x12dd37);
          this.position += 0x1 * _0x12dd37;
          return _0x1b26c9;
        };
        _0x5a7d91.prototype.mapUint32Array = function (_0x3a8e56, _0x83e5e) {
          this._realloc(0x4 * _0x3a8e56);
          var _0x2742cc = new Uint32Array(this._buffer, this.byteOffset + this.position, _0x3a8e56);
          _0x5a7d91.arrayToNative(_0x2742cc, null == _0x83e5e ? this.endianness : _0x83e5e);
          this.position += 0x4 * _0x3a8e56;
          return _0x2742cc;
        };
        _0x5a7d91.prototype.mapUint16Array = function (_0x294a9a, _0x535ebd) {
          this._realloc(0x2 * _0x294a9a);
          var _0x10b3cb = new Uint16Array(this._buffer, this.byteOffset + this.position, _0x294a9a);
          _0x5a7d91.arrayToNative(_0x10b3cb, null == _0x535ebd ? this.endianness : _0x535ebd);
          this.position += 0x2 * _0x294a9a;
          return _0x10b3cb;
        };
        _0x5a7d91.prototype.mapFloat64Array = function (_0x5328de, _0x57a3d8) {
          this._realloc(0x8 * _0x5328de);
          var _0x432d8d = new Float64Array(this._buffer, this.byteOffset + this.position, _0x5328de);
          _0x5a7d91.arrayToNative(_0x432d8d, null == _0x57a3d8 ? this.endianness : _0x57a3d8);
          this.position += 0x8 * _0x5328de;
          return _0x432d8d;
        };
        _0x5a7d91.prototype.mapFloat32Array = function (_0x27433f, _0x2fd4fe) {
          this._realloc(0x4 * _0x27433f);
          var _0xaa675 = new Float32Array(this._buffer, this.byteOffset + this.position, _0x27433f);
          _0x5a7d91.arrayToNative(_0xaa675, null == _0x2fd4fe ? this.endianness : _0x2fd4fe);
          this.position += 0x4 * _0x27433f;
          return _0xaa675;
        };
        var _0x14091e = function (_0x570746) {
          this.buffers = [];
          this.bufferIndex = -0x1;
          if (_0x570746) {
            this.insertBuffer(_0x570746);
            this.bufferIndex = 0x0;
          }
        };
        (_0x14091e.prototype = new _0x5a7d91(new ArrayBuffer(), 0x0, _0x5a7d91.BIG_ENDIAN)).initialized = function () {
          var _0x2f82cb;
          return this.bufferIndex > -0x1 || (this.buffers.length > 0x0 ? 0x0 === (_0x2f82cb = this.buffers[0x0]).fileStart ? (this.buffer = _0x2f82cb, this.bufferIndex = 0x0, _0x8cf1a.debug("MultiBufferStream", "Stream ready for parsing"), true) : (_0x8cf1a.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), false) : (_0x8cf1a.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), false));
        };
        ArrayBuffer.concat = function (_0x429912, _0x59d7a8) {
          _0x8cf1a.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (_0x429912.byteLength + _0x59d7a8.byteLength));
          var _0x51bd54 = new Uint8Array(_0x429912.byteLength + _0x59d7a8.byteLength);
          _0x51bd54.set(new Uint8Array(_0x429912), 0x0);
          _0x51bd54.set(new Uint8Array(_0x59d7a8), _0x429912.byteLength);
          return _0x51bd54.buffer;
        };
        _0x14091e.prototype.reduceBuffer = function (_0x37727d, _0x534c67, _0x213326) {
          var _0x5002ea;
          (_0x5002ea = new Uint8Array(_0x213326)).set(new Uint8Array(_0x37727d, _0x534c67, _0x213326));
          _0x5002ea.buffer.fileStart = _0x37727d.fileStart + _0x534c67;
          _0x5002ea.buffer.usedBytes = 0x0;
          return _0x5002ea.buffer;
        };
        _0x14091e.prototype.insertBuffer = function (_0x4c3fbe) {
          var _0x5a945a = true;
          for (var _0x3a63ca = 0x0; _0x3a63ca < this.buffers.length; _0x3a63ca++) {
            var _0x46e8d7 = this.buffers[_0x3a63ca];
            if (_0x4c3fbe.fileStart <= _0x46e8d7.fileStart) {
              if (_0x4c3fbe.fileStart === _0x46e8d7.fileStart) {
                if (_0x4c3fbe.byteLength > _0x46e8d7.byteLength) {
                  this.buffers.splice(_0x3a63ca, 0x1);
                  _0x3a63ca--;
                  continue;
                }
                _0x8cf1a.warn("MultiBufferStream", "Buffer (fileStart: " + _0x4c3fbe.fileStart + " - Length: " + _0x4c3fbe.byteLength + ") already appended, ignoring");
              } else {
                if (!(_0x4c3fbe.fileStart + _0x4c3fbe.byteLength <= _0x46e8d7.fileStart)) {
                  _0x4c3fbe = this.reduceBuffer(_0x4c3fbe, 0x0, _0x46e8d7.fileStart - _0x4c3fbe.fileStart);
                }
                _0x8cf1a.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x4c3fbe.fileStart + " - Length: " + _0x4c3fbe.byteLength + ')');
                this.buffers.splice(_0x3a63ca, 0x0, _0x4c3fbe);
                if (0x0 === _0x3a63ca) {
                  this.buffer = _0x4c3fbe;
                }
              }
              _0x5a945a = false;
              break;
            }
            if (_0x4c3fbe.fileStart < _0x46e8d7.fileStart + _0x46e8d7.byteLength) {
              var _0x33720b = _0x46e8d7.fileStart + _0x46e8d7.byteLength - _0x4c3fbe.fileStart;
              var _0x1036a8 = _0x4c3fbe.byteLength - _0x33720b;
              if (!(_0x1036a8 > 0x0)) {
                _0x5a945a = false;
                break;
              }
              _0x4c3fbe = this.reduceBuffer(_0x4c3fbe, _0x33720b, _0x1036a8);
            }
          }
          if (_0x5a945a) {
            _0x8cf1a.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x4c3fbe.fileStart + " - Length: " + _0x4c3fbe.byteLength + ')');
            this.buffers.push(_0x4c3fbe);
            if (0x0 === _0x3a63ca) {
              this.buffer = _0x4c3fbe;
            }
          }
        };
        _0x14091e.prototype.logBufferLevel = function (_0x4a0330) {
          var _0x21ac2d;
          var _0x18ff4d;
          var _0x2f705e;
          var _0x2dbc01;
          var _0x974803;
          var _0x5e6d29 = [];
          var _0x37d45a = '';
          _0x2f705e = 0x0;
          _0x2dbc01 = 0x0;
          for (_0x21ac2d = 0x0; _0x21ac2d < this.buffers.length; _0x21ac2d++) {
            _0x18ff4d = this.buffers[_0x21ac2d];
            if (0x0 === _0x21ac2d) {
              _0x974803 = {};
              _0x5e6d29.push(_0x974803);
              _0x974803.start = _0x18ff4d.fileStart;
              _0x974803.end = _0x18ff4d.fileStart + _0x18ff4d.byteLength;
              _0x37d45a += '[' + _0x974803.start + '-';
            } else if (_0x974803.end === _0x18ff4d.fileStart) {
              _0x974803.end = _0x18ff4d.fileStart + _0x18ff4d.byteLength;
            } else {
              (_0x974803 = {}).start = _0x18ff4d.fileStart;
              _0x37d45a += _0x5e6d29[_0x5e6d29.length - 0x1].end - 0x1 + "], [" + _0x974803.start + '-';
              _0x974803.end = _0x18ff4d.fileStart + _0x18ff4d.byteLength;
              _0x5e6d29.push(_0x974803);
            }
            _0x2f705e += _0x18ff4d.usedBytes;
            _0x2dbc01 += _0x18ff4d.byteLength;
          }
          if (_0x5e6d29.length > 0x0) {
            _0x37d45a += _0x974803.end - 0x1 + ']';
          }
          var _0x592346 = _0x4a0330 ? _0x8cf1a.info : _0x8cf1a.debug;
          if (0x0 === this.buffers.length) {
            _0x592346("MultiBufferStream", "No more buffer in memory");
          } else {
            _0x592346("MultiBufferStream", this.buffers.length + " stored buffer(s) (" + _0x2f705e + '/' + _0x2dbc01 + " bytes), continuous ranges: " + _0x37d45a);
          }
        };
        _0x14091e.prototype.cleanBuffers = function () {
          var _0x1cb017;
          var _0x73b109;
          for (_0x1cb017 = 0x0; _0x1cb017 < this.buffers.length; _0x1cb017++) {
            if ((_0x73b109 = this.buffers[_0x1cb017]).usedBytes === _0x73b109.byteLength) {
              _0x8cf1a.debug("MultiBufferStream", "Removing buffer #" + _0x1cb017);
              this.buffers.splice(_0x1cb017, 0x1);
              _0x1cb017--;
            }
          }
        };
        _0x14091e.prototype.mergeNextBuffer = function () {
          var _0x3e5a89;
          if (this.bufferIndex + 0x1 < this.buffers.length) {
            if ((_0x3e5a89 = this.buffers[this.bufferIndex + 0x1]).fileStart === this.buffer.fileStart + this.buffer.byteLength) {
              var _0x1c4021 = this.buffer.byteLength;
              var _0x33d9c7 = this.buffer.usedBytes;
              var _0x12f474 = this.buffer.fileStart;
              this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, _0x3e5a89);
              this.buffer = this.buffers[this.bufferIndex];
              this.buffers.splice(this.bufferIndex + 0x1, 0x1);
              this.buffer.usedBytes = _0x33d9c7;
              this.buffer.fileStart = _0x12f474;
              _0x8cf1a.debug('ISOFile', "Concatenating buffer for box parsing (length: " + _0x1c4021 + '->' + this.buffer.byteLength + ')');
              return true;
            }
            return false;
          }
          return false;
        };
        _0x14091e.prototype.findPosition = function (_0x5a0296, _0x2ee0e1, _0x4a9ae1) {
          var _0x2c8034;
          var _0x1d46e7 = null;
          var _0x2692f2 = -0x1;
          for (_0x2c8034 = true === _0x5a0296 ? 0x0 : this.bufferIndex; _0x2c8034 < this.buffers.length && (_0x1d46e7 = this.buffers[_0x2c8034]).fileStart <= _0x2ee0e1;) {
            _0x2692f2 = _0x2c8034;
            if (_0x4a9ae1) {
              if (_0x1d46e7.fileStart + _0x1d46e7.byteLength <= _0x2ee0e1) {
                _0x1d46e7.usedBytes = _0x1d46e7.byteLength;
              } else {
                _0x1d46e7.usedBytes = _0x2ee0e1 - _0x1d46e7.fileStart;
              }
              this.logBufferLevel();
            }
            _0x2c8034++;
          }
          return -0x1 !== _0x2692f2 && (_0x1d46e7 = this.buffers[_0x2692f2]).fileStart + _0x1d46e7.byteLength >= _0x2ee0e1 ? (_0x8cf1a.debug("MultiBufferStream", "Found position in existing buffer #" + _0x2692f2), _0x2692f2) : -0x1;
        };
        _0x14091e.prototype.findEndContiguousBuf = function (_0x4f6e07) {
          var _0x28d9bf;
          var _0x431f88;
          var _0x2ff05d;
          var _0x100f64 = undefined !== _0x4f6e07 ? _0x4f6e07 : this.bufferIndex;
          _0x431f88 = this.buffers[_0x100f64];
          if (this.buffers.length > _0x100f64 + 0x1) {
            for (_0x28d9bf = _0x100f64 + 0x1; _0x28d9bf < this.buffers.length && (_0x2ff05d = this.buffers[_0x28d9bf]).fileStart === _0x431f88.fileStart + _0x431f88.byteLength; _0x28d9bf++) {
              _0x431f88 = _0x2ff05d;
            }
          }
          return _0x431f88.fileStart + _0x431f88.byteLength;
        };
        _0x14091e.prototype.getEndFilePositionAfter = function (_0xbe43b) {
          var _0x32f6ba = this.findPosition(true, _0xbe43b, false);
          return -0x1 !== _0x32f6ba ? this.findEndContiguousBuf(_0x32f6ba) : _0xbe43b;
        };
        _0x14091e.prototype.addUsedBytes = function (_0x2ebad5) {
          this.buffer.usedBytes += _0x2ebad5;
          this.logBufferLevel();
        };
        _0x14091e.prototype.setAllUsedBytes = function () {
          this.buffer.usedBytes = this.buffer.byteLength;
          this.logBufferLevel();
        };
        _0x14091e.prototype.seek = function (_0x262def, _0x5a2485, _0x48d673) {
          var _0x5e82f7;
          return -0x1 !== (_0x5e82f7 = this.findPosition(_0x5a2485, _0x262def, _0x48d673)) ? (this.buffer = this.buffers[_0x5e82f7], this.bufferIndex = _0x5e82f7, this.position = _0x262def - this.buffer.fileStart, _0x8cf1a.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), true) : (_0x8cf1a.debug("MultiBufferStream", "Position " + _0x262def + " not found in buffered data"), false);
        };
        _0x14091e.prototype.getPosition = function () {
          if (-0x1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) {
            throw "Error accessing position in the MultiBufferStream";
          }
          return this.buffers[this.bufferIndex].fileStart + this.position;
        };
        _0x14091e.prototype.getLength = function () {
          return this.byteLength;
        };
        _0x14091e.prototype.getEndPosition = function () {
          if (-0x1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) {
            throw "Error accessing position in the MultiBufferStream";
          }
          return this.buffers[this.bufferIndex].fileStart + this.byteLength;
        };
        _0xaab1e8.MultiBufferStream = _0x14091e;
        var _0x4e811b = function () {
          var _0x30943f = [];
          _0x30943f[0x3] = "ES_Descriptor";
          _0x30943f[0x4] = "DecoderConfigDescriptor";
          _0x30943f[0x5] = "DecoderSpecificInfo";
          _0x30943f[0x6] = "SLConfigDescriptor";
          this.getDescriptorName = function (_0x59ce41) {
            return _0x30943f[_0x59ce41];
          };
          var _0x5b9079 = this;
          var _0x47ab9d = {};
          this.parseOneDescriptor = function (_0x55e0e1) {
            var _0x48a54f;
            var _0x298709;
            var _0x122386;
            var _0x34c889 = 0x0;
            _0x48a54f = _0x55e0e1.readUint8();
            for (_0x122386 = _0x55e0e1.readUint8(); 0x80 & _0x122386;) {
              _0x34c889 = (0x7f & _0x122386) << 0x7;
              _0x122386 = _0x55e0e1.readUint8();
            }
            _0x34c889 += 0x7f & _0x122386;
            _0x8cf1a.debug("MPEG4DescriptorParser", "Found " + (_0x30943f[_0x48a54f] || "Descriptor " + _0x48a54f) + ", size " + _0x34c889 + " at position " + _0x55e0e1.getPosition());
            (_0x298709 = _0x30943f[_0x48a54f] ? new _0x47ab9d[_0x30943f[_0x48a54f]](_0x34c889) : new _0x47ab9d.Descriptor(_0x34c889)).parse(_0x55e0e1);
            return _0x298709;
          };
          _0x47ab9d.Descriptor = function (_0x38f6af, _0x1c1743) {
            this.tag = _0x38f6af;
            this.size = _0x1c1743;
            this.descs = [];
          };
          _0x47ab9d.Descriptor.prototype.parse = function (_0x459ee2) {
            this.data = _0x459ee2.readUint8Array(this.size);
          };
          _0x47ab9d.Descriptor.prototype.findDescriptor = function (_0x53655b) {
            for (var _0x295674 = 0x0; _0x295674 < this.descs.length; _0x295674++) {
              if (this.descs[_0x295674].tag == _0x53655b) {
                return this.descs[_0x295674];
              }
            }
            return null;
          };
          _0x47ab9d.Descriptor.prototype.parseRemainingDescriptors = function (_0x527737) {
            for (var _0xff1807 = _0x527737.position; _0x527737.position < _0xff1807 + this.size;) {
              var _0x124faf = _0x5b9079.parseOneDescriptor(_0x527737);
              this.descs.push(_0x124faf);
            }
          };
          _0x47ab9d.ES_Descriptor = function (_0x57dac0) {
            _0x47ab9d.Descriptor.call(this, 0x3, _0x57dac0);
          };
          _0x47ab9d.ES_Descriptor.prototype = new _0x47ab9d.Descriptor();
          _0x47ab9d.ES_Descriptor.prototype.parse = function (_0x4ce27a) {
            this.ES_ID = _0x4ce27a.readUint16();
            this.flags = _0x4ce27a.readUint8();
            this.size -= 0x3;
            if (0x80 & this.flags) {
              this.dependsOn_ES_ID = _0x4ce27a.readUint16();
              this.size -= 0x2;
            } else {
              this.dependsOn_ES_ID = 0x0;
            }
            if (0x40 & this.flags) {
              var _0x3f95b6 = _0x4ce27a.readUint8();
              this.URL = _0x4ce27a.readString(_0x3f95b6);
              this.size -= _0x3f95b6 + 0x1;
            } else {
              this.URL = '';
            }
            if (0x20 & this.flags) {
              this.OCR_ES_ID = _0x4ce27a.readUint16();
              this.size -= 0x2;
            } else {
              this.OCR_ES_ID = 0x0;
            }
            this.parseRemainingDescriptors(_0x4ce27a);
          };
          _0x47ab9d.ES_Descriptor.prototype.getOTI = function (_0x44f91b) {
            var _0x5b483d = this.findDescriptor(0x4);
            return _0x5b483d ? _0x5b483d.oti : 0x0;
          };
          _0x47ab9d.ES_Descriptor.prototype.getAudioConfig = function (_0x72a534) {
            var _0x3c2cb5 = this.findDescriptor(0x4);
            if (!_0x3c2cb5) {
              return null;
            }
            var _0xc7f688 = _0x3c2cb5.findDescriptor(0x5);
            if (_0xc7f688 && _0xc7f688.data) {
              var _0x3d6f12 = (0xf8 & _0xc7f688.data[0x0]) >> 0x3;
              if (0x1f === _0x3d6f12 && _0xc7f688.data.length >= 0x2) {
                _0x3d6f12 = 0x20 + ((0x7 & _0xc7f688.data[0x0]) << 0x3) + ((0xe0 & _0xc7f688.data[0x1]) >> 0x5);
              }
              return _0x3d6f12;
            }
            return null;
          };
          _0x47ab9d.DecoderConfigDescriptor = function (_0x377bfb) {
            _0x47ab9d.Descriptor.call(this, 0x4, _0x377bfb);
          };
          _0x47ab9d.DecoderConfigDescriptor.prototype = new _0x47ab9d.Descriptor();
          _0x47ab9d.DecoderConfigDescriptor.prototype.parse = function (_0x3afb63) {
            this.oti = _0x3afb63.readUint8();
            this.streamType = _0x3afb63.readUint8();
            this.bufferSize = _0x3afb63.readUint24();
            this.maxBitrate = _0x3afb63.readUint32();
            this.avgBitrate = _0x3afb63.readUint32();
            this.size -= 0xd;
            this.parseRemainingDescriptors(_0x3afb63);
          };
          _0x47ab9d.DecoderSpecificInfo = function (_0x276947) {
            _0x47ab9d.Descriptor.call(this, 0x5, _0x276947);
          };
          _0x47ab9d.DecoderSpecificInfo.prototype = new _0x47ab9d.Descriptor();
          _0x47ab9d.SLConfigDescriptor = function (_0x2be570) {
            _0x47ab9d.Descriptor.call(this, 0x6, _0x2be570);
          };
          _0x47ab9d.SLConfigDescriptor.prototype = new _0x47ab9d.Descriptor();
          return this;
        };
        _0xaab1e8.MPEG4DescriptorParser = _0x4e811b;
        var _0x1d941e = {
          'ERR_INVALID_DATA': -0x1,
          'ERR_NOT_ENOUGH_DATA': 0x0,
          'OK': 0x1,
          'BASIC_BOXES': ['mdat', "idat", 'free', 'skip', "meco", 'strk'],
          'FULL_BOXES': ['hmhd', 'nmhd', 'iods', "xml ", "bxml", 'ipro', "mere"],
          'CONTAINER_BOXES': [["moov", ["trak", "pssh"]], ['trak'], ['edts'], ["mdia"], ['minf'], ['dinf'], ["stbl", ["sgpd", "sbgp"]], ["mvex", ['trex']], ["moof", ["traf"]], ["traf", ["trun", "sgpd", "sbgp"]], ["vttc"], ['tref'], ['iref'], ["mfra", ['tfra']], ["meco"], ["hnti"], ["hinf"], ['strk'], ["strd"], ["sinf"], ["rinf"], ["schi"], ["trgr"], ["udta", ['kind']], ['iprp', ["ipma"]], ["ipco"]],
          'boxCodes': [],
          'fullBoxCodes': [],
          'containerBoxCodes': [],
          'sampleEntryCodes': {},
          'sampleGroupEntryCodes': [],
          'trackGroupTypes': [],
          'UUIDBoxes': {},
          'UUIDs': [],
          'initialize': function () {
            _0x1d941e.FullBox.prototype = new _0x1d941e.Box();
            _0x1d941e.ContainerBox.prototype = new _0x1d941e.Box();
            _0x1d941e.SampleEntry.prototype = new _0x1d941e.Box();
            _0x1d941e.TrackGroupTypeBox.prototype = new _0x1d941e.FullBox();
            _0x1d941e.BASIC_BOXES.forEach(function (_0x5c449d) {
              _0x1d941e.createBoxCtor(_0x5c449d);
            });
            _0x1d941e.FULL_BOXES.forEach(function (_0x501d1e) {
              _0x1d941e.createFullBoxCtor(_0x501d1e);
            });
            _0x1d941e.CONTAINER_BOXES.forEach(function (_0xa85836) {
              _0x1d941e.createContainerBoxCtor(_0xa85836[0x0], null, _0xa85836[0x1]);
            });
          },
          'Box': function (_0x476052, _0x334083, _0x13db23) {
            this.type = _0x476052;
            this.size = _0x334083;
            this.uuid = _0x13db23;
          },
          'FullBox': function (_0x18c66e, _0x83799e, _0x6410be) {
            _0x1d941e.Box.call(this, _0x18c66e, _0x83799e, _0x6410be);
            this.flags = 0x0;
            this.version = 0x0;
          },
          'ContainerBox': function (_0x1e2b06, _0x37712c, _0x2007c2) {
            _0x1d941e.Box.call(this, _0x1e2b06, _0x37712c, _0x2007c2);
            this.boxes = [];
          },
          'SampleEntry': function (_0x224193, _0x3b5a9f, _0x3cd304, _0x32ba0a) {
            _0x1d941e.ContainerBox.call(this, _0x224193, _0x3b5a9f);
            this.hdr_size = _0x3cd304;
            this.start = _0x32ba0a;
          },
          'SampleGroupEntry': function (_0x52382f) {
            this.grouping_type = _0x52382f;
          },
          'TrackGroupTypeBox': function (_0x3effed, _0x4f5e45) {
            _0x1d941e.FullBox.call(this, _0x3effed, _0x4f5e45);
          },
          'createBoxCtor': function (_0x1d65d2, _0x1bd2a7) {
            _0x1d941e.boxCodes.push(_0x1d65d2);
            _0x1d941e[_0x1d65d2 + 'Box'] = function (_0x5ae394) {
              _0x1d941e.Box.call(this, _0x1d65d2, _0x5ae394);
            };
            _0x1d941e[_0x1d65d2 + 'Box'].prototype = new _0x1d941e.Box();
            if (_0x1bd2a7) {
              _0x1d941e[_0x1d65d2 + "Box"].prototype.parse = _0x1bd2a7;
            }
          },
          'createFullBoxCtor': function (_0x586303, _0x517dc2) {
            _0x1d941e[_0x586303 + "Box"] = function (_0x1f165e) {
              _0x1d941e.FullBox.call(this, _0x586303, _0x1f165e);
            };
            _0x1d941e[_0x586303 + "Box"].prototype = new _0x1d941e.FullBox();
            _0x1d941e[_0x586303 + "Box"].prototype.parse = function (_0x3179ec) {
              this.parseFullHeader(_0x3179ec);
              if (_0x517dc2) {
                _0x517dc2.call(this, _0x3179ec);
              }
            };
          },
          'addSubBoxArrays': function (_0x12e9e3) {
            if (_0x12e9e3) {
              this.subBoxNames = _0x12e9e3;
              var _0x53ac30 = _0x12e9e3.length;
              for (var _0x21af20 = 0x0; _0x21af20 < _0x53ac30; _0x21af20++) {
                this[_0x12e9e3[_0x21af20] + 's'] = [];
              }
            }
          },
          'createContainerBoxCtor': function (_0x3c43b8, _0x38a09a, _0xa1abce) {
            _0x1d941e[_0x3c43b8 + "Box"] = function (_0x51f710) {
              _0x1d941e.ContainerBox.call(this, _0x3c43b8, _0x51f710);
              _0x1d941e.addSubBoxArrays.call(this, _0xa1abce);
            };
            _0x1d941e[_0x3c43b8 + "Box"].prototype = new _0x1d941e.ContainerBox();
            if (_0x38a09a) {
              _0x1d941e[_0x3c43b8 + "Box"].prototype.parse = _0x38a09a;
            }
          },
          'createMediaSampleEntryCtor': function (_0x34b482, _0x2a80be, _0x351be6) {
            _0x1d941e.sampleEntryCodes[_0x34b482] = [];
            _0x1d941e[_0x34b482 + "SampleEntry"] = function (_0x16062c, _0x31e420) {
              _0x1d941e.SampleEntry.call(this, _0x16062c, _0x31e420);
              _0x1d941e.addSubBoxArrays.call(this, _0x351be6);
            };
            _0x1d941e[_0x34b482 + "SampleEntry"].prototype = new _0x1d941e.SampleEntry();
            if (_0x2a80be) {
              _0x1d941e[_0x34b482 + "SampleEntry"].prototype.parse = _0x2a80be;
            }
          },
          'createSampleEntryCtor': function (_0x58320b, _0x20bf69, _0x20d232, _0x53bf52) {
            _0x1d941e.sampleEntryCodes[_0x58320b].push(_0x20bf69);
            _0x1d941e[_0x20bf69 + "SampleEntry"] = function (_0x2e2c9f) {
              _0x1d941e[_0x58320b + "SampleEntry"].call(this, _0x20bf69, _0x2e2c9f);
              _0x1d941e.addSubBoxArrays.call(this, _0x53bf52);
            };
            _0x1d941e[_0x20bf69 + "SampleEntry"].prototype = new _0x1d941e[_0x58320b + "SampleEntry"]();
            if (_0x20d232) {
              _0x1d941e[_0x20bf69 + "SampleEntry"].prototype.parse = _0x20d232;
            }
          },
          'createEncryptedSampleEntryCtor': function (_0x25467a, _0x50cfbb, _0xdd077f) {
            _0x1d941e.createSampleEntryCtor.call(this, _0x25467a, _0x50cfbb, _0xdd077f, ["sinf"]);
          },
          'createSampleGroupCtor': function (_0xe29bf, _0x52291b) {
            _0x1d941e[_0xe29bf + "SampleGroupEntry"] = function (_0x46a5ef) {
              _0x1d941e.SampleGroupEntry.call(this, _0xe29bf, _0x46a5ef);
            };
            _0x1d941e[_0xe29bf + "SampleGroupEntry"].prototype = new _0x1d941e.SampleGroupEntry();
            if (_0x52291b) {
              _0x1d941e[_0xe29bf + "SampleGroupEntry"].prototype.parse = _0x52291b;
            }
          },
          'createTrackGroupCtor': function (_0xc55861, _0x27af05) {
            _0x1d941e[_0xc55861 + "TrackGroupTypeBox"] = function (_0x1e8d53) {
              _0x1d941e.TrackGroupTypeBox.call(this, _0xc55861, _0x1e8d53);
            };
            _0x1d941e[_0xc55861 + "TrackGroupTypeBox"].prototype = new _0x1d941e.TrackGroupTypeBox();
            if (_0x27af05) {
              _0x1d941e[_0xc55861 + "TrackGroupTypeBox"].prototype.parse = _0x27af05;
            }
          },
          'createUUIDBox': function (_0x5465b3, _0x1acb6d, _0x631eaa, _0x37645d) {
            _0x1d941e.UUIDs.push(_0x5465b3);
            _0x1d941e.UUIDBoxes[_0x5465b3] = function (_0x49571a) {
              if (_0x1acb6d) {
                _0x1d941e.FullBox.call(this, "uuid", _0x49571a, _0x5465b3);
              } else if (_0x631eaa) {
                _0x1d941e.ContainerBox.call(this, "uuid", _0x49571a, _0x5465b3);
              } else {
                _0x1d941e.Box.call(this, "uuid", _0x49571a, _0x5465b3);
              }
            };
            _0x1d941e.UUIDBoxes[_0x5465b3].prototype = _0x1acb6d ? new _0x1d941e.FullBox() : _0x631eaa ? new _0x1d941e.ContainerBox() : new _0x1d941e.Box();
            if (_0x37645d) {
              _0x1d941e.UUIDBoxes[_0x5465b3].prototype.parse = _0x1acb6d ? function (_0x4e1d7d) {
                this.parseFullHeader(_0x4e1d7d);
                if (_0x37645d) {
                  _0x37645d.call(this, _0x4e1d7d);
                }
              } : _0x37645d;
            }
          }
        };
        _0x1d941e.initialize();
        _0x1d941e.TKHD_FLAG_ENABLED = 0x1;
        _0x1d941e.TKHD_FLAG_IN_MOVIE = 0x2;
        _0x1d941e.TKHD_FLAG_IN_PREVIEW = 0x4;
        _0x1d941e.TFHD_FLAG_BASE_DATA_OFFSET = 0x1;
        _0x1d941e.TFHD_FLAG_SAMPLE_DESC = 0x2;
        _0x1d941e.TFHD_FLAG_SAMPLE_DUR = 0x8;
        _0x1d941e.TFHD_FLAG_SAMPLE_SIZE = 0x10;
        _0x1d941e.TFHD_FLAG_SAMPLE_FLAGS = 0x20;
        _0x1d941e.TFHD_FLAG_DUR_EMPTY = 0x10000;
        _0x1d941e.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 0x20000;
        _0x1d941e.TRUN_FLAGS_DATA_OFFSET = 0x1;
        _0x1d941e.TRUN_FLAGS_FIRST_FLAG = 0x4;
        _0x1d941e.TRUN_FLAGS_DURATION = 0x100;
        _0x1d941e.TRUN_FLAGS_SIZE = 0x200;
        _0x1d941e.TRUN_FLAGS_FLAGS = 0x400;
        _0x1d941e.TRUN_FLAGS_CTS_OFFSET = 0x800;
        _0x1d941e.Box.prototype.add = function (_0x1c6e4d) {
          return this.addBox(new _0x1d941e[_0x1c6e4d + "Box"]());
        };
        _0x1d941e.Box.prototype.addBox = function (_0x57bba9) {
          this.boxes.push(_0x57bba9);
          if (this[_0x57bba9.type + 's']) {
            this[_0x57bba9.type + 's'].push(_0x57bba9);
          } else {
            this[_0x57bba9.type] = _0x57bba9;
          }
          return _0x57bba9;
        };
        _0x1d941e.Box.prototype.set = function (_0x257246, _0x28860e) {
          this[_0x257246] = _0x28860e;
          return this;
        };
        _0x1d941e.Box.prototype.addEntry = function (_0x1da22b, _0x24d93a) {
          var _0x5a283e = _0x24d93a || 'entries';
          if (!this[_0x5a283e]) {
            this[_0x5a283e] = [];
          }
          this[_0x5a283e].push(_0x1da22b);
          return this;
        };
        _0xaab1e8.BoxParser = _0x1d941e;
        _0x1d941e.parseUUID = function (_0x262f08) {
          return _0x1d941e.parseHex16(_0x262f08);
        };
        _0x1d941e.parseHex16 = function (_0x287553) {
          var _0x4f6794 = '';
          for (var _0x22fc63 = 0x0; _0x22fc63 < 0x10; _0x22fc63++) {
            var _0x46c24e = _0x287553.readUint8().toString(0x10);
            _0x4f6794 += 0x1 === _0x46c24e.length ? '0' + _0x46c24e : _0x46c24e;
          }
          return _0x4f6794;
        };
        _0x1d941e.parseOneBox = function (_0x255555, _0x2cad25, _0x637f73) {
          var _0x21cc35;
          var _0x38f4fc;
          var _0x2e43f2;
          var _0x34b3ce = _0x255555.getPosition();
          var _0x475234 = 0x0;
          var _0xc77135 = {
            code: 0x0
          };
          if (_0x255555.getEndPosition() - _0x34b3ce < 0x8) {
            _0x8cf1a.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
            return _0xc77135;
          }
          var _0x18c23e = {
            code: 0x0
          };
          if (_0x637f73 && _0x637f73 < 0x8) {
            _0x8cf1a.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
            return _0x18c23e;
          }
          var _0x4357ea = _0x255555.readUint32();
          var _0x2b484c = _0x255555.readString(0x4);
          var _0x7a93fd = _0x2b484c;
          _0x8cf1a.debug("BoxParser", "Found box of type '" + _0x2b484c + "' and size " + _0x4357ea + " at position " + _0x34b3ce);
          _0x475234 = 0x8;
          if ("uuid" == _0x2b484c) {
            var _0x1bdafb = {
              code: 0x0
            };
            if (_0x255555.getEndPosition() - _0x255555.getPosition() < 0x10 || _0x637f73 - _0x475234 < 0x10) {
              _0x255555.seek(_0x34b3ce);
              _0x8cf1a.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
              return _0x1bdafb;
            }
            _0x475234 += 0x10;
            _0x7a93fd = _0x2e43f2 = _0x1d941e.parseUUID(_0x255555);
          }
          if (0x1 == _0x4357ea) {
            var _0x550353 = {
              code: 0x0
            };
            if (_0x255555.getEndPosition() - _0x255555.getPosition() < 0x8 || _0x637f73 && _0x637f73 - _0x475234 < 0x8) {
              _0x255555.seek(_0x34b3ce);
              _0x8cf1a.warn("BoxParser", "Not enough data in stream to parse the extended size of the \"" + _0x2b484c + "\" box");
              return _0x550353;
            }
            _0x4357ea = _0x255555.readUint64();
            _0x475234 += 0x8;
          } else {
            if (0x0 === _0x4357ea) {
              if (_0x637f73) {
                _0x4357ea = _0x637f73;
              } else {
                if ("mdat" !== _0x2b484c) {
                  _0x8cf1a.error("BoxParser", "Unlimited box size not supported for type: '" + _0x2b484c + "'");
                  _0x21cc35 = new _0x1d941e.Box(_0x2b484c, _0x4357ea);
                  return {
                    'code': 0x1,
                    'box': _0x21cc35,
                    'size': _0x21cc35.size
                  };
                }
              }
            }
          }
          return 0x0 !== _0x4357ea && _0x4357ea < _0x475234 ? (_0x8cf1a.error("BoxParser", "Box of type " + _0x2b484c + " has an invalid size " + _0x4357ea + " (too small to be a box)"), {
            'code': 0x0,
            'type': _0x2b484c,
            'size': _0x4357ea,
            'hdr_size': _0x475234,
            'start': _0x34b3ce
          }) : 0x0 !== _0x4357ea && _0x637f73 && _0x4357ea > _0x637f73 ? (_0x8cf1a.error("BoxParser", "Box of type '" + _0x2b484c + "' has a size " + _0x4357ea + " greater than its container size " + _0x637f73), {
            'code': 0x0,
            'type': _0x2b484c,
            'size': _0x4357ea,
            'hdr_size': _0x475234,
            'start': _0x34b3ce
          }) : 0x0 !== _0x4357ea && _0x34b3ce + _0x4357ea > _0x255555.getEndPosition() ? (_0x255555.seek(_0x34b3ce), _0x8cf1a.info("BoxParser", "Not enough data in stream to parse the entire '" + _0x2b484c + "' box"), {
            'code': 0x0,
            'type': _0x2b484c,
            'size': _0x4357ea,
            'hdr_size': _0x475234,
            'start': _0x34b3ce
          }) : _0x2cad25 ? {
            'code': 0x1,
            'type': _0x2b484c,
            'size': _0x4357ea,
            'hdr_size': _0x475234,
            'start': _0x34b3ce
          } : (_0x1d941e[_0x2b484c + "Box"] ? _0x21cc35 = new _0x1d941e[_0x2b484c + "Box"](_0x4357ea) : "uuid" !== _0x2b484c ? (_0x8cf1a.warn("BoxParser", "Unknown box type: '" + _0x2b484c + "'"), (_0x21cc35 = new _0x1d941e.Box(_0x2b484c, _0x4357ea)).has_unparsed_data = true) : _0x1d941e.UUIDBoxes[_0x2e43f2] ? _0x21cc35 = new _0x1d941e.UUIDBoxes[_0x2e43f2](_0x4357ea) : (_0x8cf1a.warn("BoxParser", "Unknown uuid type: '" + _0x2e43f2 + "'"), (_0x21cc35 = new _0x1d941e.Box(_0x2b484c, _0x4357ea)).uuid = _0x2e43f2, _0x21cc35.has_unparsed_data = true), _0x21cc35.hdr_size = _0x475234, _0x21cc35.start = _0x34b3ce, _0x21cc35.write === _0x1d941e.Box.prototype.write && "mdat" !== _0x21cc35.type && (_0x8cf1a.info("BoxParser", "'" + _0x7a93fd + "' box writing not yet implemented, keeping unparsed data in memory for later write"), _0x21cc35.parseDataAndRewind(_0x255555)), _0x21cc35.parse(_0x255555), (_0x38f4fc = _0x255555.getPosition() - (_0x21cc35.start + _0x21cc35.size)) < 0x0 ? (_0x8cf1a.warn('BoxParser', "Parsing of box '" + _0x7a93fd + "' did not read the entire indicated box data size (missing " + -_0x38f4fc + " bytes), seeking forward"), _0x255555.seek(_0x21cc35.start + _0x21cc35.size)) : _0x38f4fc > 0x0 && (_0x8cf1a.error('BoxParser', "Parsing of box '" + _0x7a93fd + "' read " + _0x38f4fc + " more bytes than the indicated box data size, seeking backwards"), 0x0 !== _0x21cc35.size && _0x255555.seek(_0x21cc35.start + _0x21cc35.size)), {
            'code': 0x1,
            'box': _0x21cc35,
            'size': _0x21cc35.size
          });
        };
        _0x1d941e.Box.prototype.parse = function (_0x4a889a) {
          if ("mdat" != this.type) {
            this.data = _0x4a889a.readUint8Array(this.size - this.hdr_size);
          } else if (0x0 === this.size) {
            _0x4a889a.seek(_0x4a889a.getEndPosition());
          } else {
            _0x4a889a.seek(this.start + this.size);
          }
        };
        _0x1d941e.Box.prototype.parseDataAndRewind = function (_0x5c9cc0) {
          this.data = _0x5c9cc0.readUint8Array(this.size - this.hdr_size);
          _0x5c9cc0.position -= this.size - this.hdr_size;
        };
        _0x1d941e.FullBox.prototype.parseDataAndRewind = function (_0x1d7a89) {
          this.parseFullHeader(_0x1d7a89);
          this.data = _0x1d7a89.readUint8Array(this.size - this.hdr_size);
          this.hdr_size -= 0x4;
          _0x1d7a89.position -= this.size - this.hdr_size;
        };
        _0x1d941e.FullBox.prototype.parseFullHeader = function (_0x47910b) {
          this.version = _0x47910b.readUint8();
          this.flags = _0x47910b.readUint24();
          this.hdr_size += 0x4;
        };
        _0x1d941e.FullBox.prototype.parse = function (_0x164511) {
          this.parseFullHeader(_0x164511);
          this.data = _0x164511.readUint8Array(this.size - this.hdr_size);
        };
        _0x1d941e.ContainerBox.prototype.parse = function (_0x2f08ea) {
          var _0xfbd5f1;
          for (var _0x57edf5; _0x2f08ea.getPosition() < this.start + this.size;) {
            if ((_0xfbd5f1 = _0x1d941e.parseOneBox(_0x2f08ea, false, this.size - (_0x2f08ea.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            _0x57edf5 = _0xfbd5f1.box;
            this.boxes.push(_0x57edf5);
            if (this.subBoxNames && -0x1 != this.subBoxNames.indexOf(_0x57edf5.type)) {
              this[this.subBoxNames[this.subBoxNames.indexOf(_0x57edf5.type)] + 's'].push(_0x57edf5);
            } else {
              var _0x434da5 = "uuid" !== _0x57edf5.type ? _0x57edf5.type : _0x57edf5.uuid;
              if (this[_0x434da5]) {
                _0x8cf1a.warn("Box of type " + _0x434da5 + " already stored in field of this type");
              } else {
                this[_0x434da5] = _0x57edf5;
              }
            }
          }
        };
        _0x1d941e.Box.prototype.parseLanguage = function (_0x6ebc94) {
          this.language = _0x6ebc94.readUint16();
          var _0x5b0656 = [];
          _0x5b0656[0x0] = this.language >> 0xa & 0x1f;
          _0x5b0656[0x1] = this.language >> 0x5 & 0x1f;
          _0x5b0656[0x2] = 0x1f & this.language;
          this.languageString = String.fromCharCode(_0x5b0656[0x0] + 0x60, _0x5b0656[0x1] + 0x60, _0x5b0656[0x2] + 0x60);
        };
        _0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL = "Visual";
        _0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO = "Audio";
        _0x1d941e.SAMPLE_ENTRY_TYPE_HINT = 'Hint';
        _0x1d941e.SAMPLE_ENTRY_TYPE_METADATA = "Metadata";
        _0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle";
        _0x1d941e.SAMPLE_ENTRY_TYPE_SYSTEM = "System";
        _0x1d941e.SAMPLE_ENTRY_TYPE_TEXT = "Text";
        _0x1d941e.SampleEntry.prototype.parseHeader = function (_0x1ad9b7) {
          _0x1ad9b7.readUint8Array(0x6);
          this.data_reference_index = _0x1ad9b7.readUint16();
          this.hdr_size += 0x8;
        };
        _0x1d941e.SampleEntry.prototype.parse = function (_0x19eb7e) {
          this.parseHeader(_0x19eb7e);
          this.data = _0x19eb7e.readUint8Array(this.size - this.hdr_size);
        };
        _0x1d941e.SampleEntry.prototype.parseDataAndRewind = function (_0x1d1218) {
          this.parseHeader(_0x1d1218);
          this.data = _0x1d1218.readUint8Array(this.size - this.hdr_size);
          this.hdr_size -= 0x8;
          _0x1d1218.position -= this.size - this.hdr_size;
        };
        _0x1d941e.SampleEntry.prototype.parseFooter = function (_0x25b98b) {
          _0x1d941e.ContainerBox.prototype.parse.call(this, _0x25b98b);
        };
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_HINT);
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_METADATA);
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE);
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SYSTEM);
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_TEXT);
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, function (_0x349b4a) {
          var _0x11e596;
          this.parseHeader(_0x349b4a);
          _0x349b4a.readUint16();
          _0x349b4a.readUint16();
          _0x349b4a.readUint32Array(0x3);
          this.width = _0x349b4a.readUint16();
          this.height = _0x349b4a.readUint16();
          this.horizresolution = _0x349b4a.readUint32();
          this.vertresolution = _0x349b4a.readUint32();
          _0x349b4a.readUint32();
          this.frame_count = _0x349b4a.readUint16();
          _0x11e596 = Math.min(0x1f, _0x349b4a.readUint8());
          this.compressorname = _0x349b4a.readString(_0x11e596);
          if (_0x11e596 < 0x1f) {
            _0x349b4a.readString(0x1f - _0x11e596);
          }
          this.depth = _0x349b4a.readUint16();
          _0x349b4a.readUint16();
          this.parseFooter(_0x349b4a);
        });
        _0x1d941e.createMediaSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO, function (_0x37e31d) {
          this.parseHeader(_0x37e31d);
          _0x37e31d.readUint32Array(0x2);
          this.channel_count = _0x37e31d.readUint16();
          this.samplesize = _0x37e31d.readUint16();
          _0x37e31d.readUint16();
          _0x37e31d.readUint16();
          this.samplerate = _0x37e31d.readUint32() / 0x10000;
          this.parseFooter(_0x37e31d);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "avc1");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "avc2");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, 'avc3');
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "avc4");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "av01");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, 'hev1');
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "vp08");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "vp09");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3");
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO, "Opus");
        _0x1d941e.createEncryptedSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_VISUAL, "encv");
        _0x1d941e.createEncryptedSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_AUDIO, "enca");
        _0x1d941e.createEncryptedSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu");
        _0x1d941e.createEncryptedSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SYSTEM, 'encs');
        _0x1d941e.createEncryptedSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_TEXT, "enct");
        _0x1d941e.createEncryptedSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_METADATA, "encm");
        _0x1d941e.createBoxCtor("a1lx", function (_0x5ca4d9) {
          var _0x49094e = 0x10 * (0x1 + (0x1 & _0x5ca4d9.readUint8()));
          this.layer_size = [];
          for (var _0x23fd40 = 0x0; _0x23fd40 < 0x3; _0x23fd40++) {
            this.layer_size[_0x23fd40] = 0x10 == _0x49094e ? _0x5ca4d9.readUint16() : _0x5ca4d9.readUint32();
          }
        });
        _0x1d941e.createBoxCtor("a1op", function (_0x3f6020) {
          this.op_index = _0x3f6020.readUint8();
        });
        _0x1d941e.createFullBoxCtor("auxC", function (_0x477011) {
          this.aux_type = _0x477011.readCString();
          var _0x52cfc7 = this.size - this.hdr_size - (this.aux_type.length + 0x1);
          this.aux_subtype = _0x477011.readUint8Array(_0x52cfc7);
        });
        _0x1d941e.createBoxCtor("av1C", function (_0x12680b) {
          var _0x1ac67c = _0x12680b.readUint8();
          if (_0x1ac67c >> 0x7 & false) {
            _0x8cf1a.error("av1C marker problem");
          } else {
            this.version = 0x7f & _0x1ac67c;
            if (0x1 === this.version) {
              _0x1ac67c = _0x12680b.readUint8();
              this.seq_profile = _0x1ac67c >> 0x5 & 0x7;
              this.seq_level_idx_0 = 0x1f & _0x1ac67c;
              _0x1ac67c = _0x12680b.readUint8();
              this.seq_tier_0 = _0x1ac67c >> 0x7 & 0x1;
              this.high_bitdepth = _0x1ac67c >> 0x6 & 0x1;
              this.twelve_bit = _0x1ac67c >> 0x5 & 0x1;
              this.monochrome = _0x1ac67c >> 0x4 & 0x1;
              this.chroma_subsampling_x = _0x1ac67c >> 0x3 & 0x1;
              this.chroma_subsampling_y = _0x1ac67c >> 0x2 & 0x1;
              this.chroma_sample_position = 0x3 & _0x1ac67c;
              _0x1ac67c = _0x12680b.readUint8();
              this.reserved_1 = _0x1ac67c >> 0x5 & 0x7;
              if (0x0 === this.reserved_1) {
                this.initial_presentation_delay_present = _0x1ac67c >> 0x4 & 0x1;
                if (0x1 === this.initial_presentation_delay_present) {
                  this.initial_presentation_delay_minus_one = 0xf & _0x1ac67c;
                } else {
                  this.reserved_2 = 0xf & _0x1ac67c;
                  if (0x0 !== this.reserved_2) {
                    return void _0x8cf1a.error("av1C reserved_2 parsing problem");
                  }
                }
                var _0x4912dd = this.size - this.hdr_size - 0x4;
                this.configOBUs = _0x12680b.readUint8Array(_0x4912dd);
              } else {
                _0x8cf1a.error("av1C reserved_1 parsing problem");
              }
            } else {
              _0x8cf1a.error("av1C version " + this.version + " not supported");
            }
          }
        });
        _0x1d941e.createBoxCtor("avcC", function (_0x565c8a) {
          var _0x52a484;
          var _0x3a7593;
          this.configurationVersion = _0x565c8a.readUint8();
          this.AVCProfileIndication = _0x565c8a.readUint8();
          this.profile_compatibility = _0x565c8a.readUint8();
          this.AVCLevelIndication = _0x565c8a.readUint8();
          this.lengthSizeMinusOne = 0x3 & _0x565c8a.readUint8();
          this.nb_SPS_nalus = 0x1f & _0x565c8a.readUint8();
          _0x3a7593 = this.size - this.hdr_size - 0x6;
          this.SPS = [];
          for (_0x52a484 = 0x0; _0x52a484 < this.nb_SPS_nalus; _0x52a484++) {
            this.SPS[_0x52a484] = {};
            this.SPS[_0x52a484].length = _0x565c8a.readUint16();
            this.SPS[_0x52a484].nalu = _0x565c8a.readUint8Array(this.SPS[_0x52a484].length);
            _0x3a7593 -= 0x2 + this.SPS[_0x52a484].length;
          }
          this.nb_PPS_nalus = _0x565c8a.readUint8();
          _0x3a7593--;
          this.PPS = [];
          for (_0x52a484 = 0x0; _0x52a484 < this.nb_PPS_nalus; _0x52a484++) {
            this.PPS[_0x52a484] = {};
            this.PPS[_0x52a484].length = _0x565c8a.readUint16();
            this.PPS[_0x52a484].nalu = _0x565c8a.readUint8Array(this.PPS[_0x52a484].length);
            _0x3a7593 -= 0x2 + this.PPS[_0x52a484].length;
          }
          if (_0x3a7593 > 0x0) {
            this.ext = _0x565c8a.readUint8Array(_0x3a7593);
          }
        });
        _0x1d941e.createBoxCtor("btrt", function (_0x37fc4b) {
          this.bufferSizeDB = _0x37fc4b.readUint32();
          this.maxBitrate = _0x37fc4b.readUint32();
          this.avgBitrate = _0x37fc4b.readUint32();
        });
        _0x1d941e.createBoxCtor("clap", function (_0x118607) {
          this.cleanApertureWidthN = _0x118607.readUint32();
          this.cleanApertureWidthD = _0x118607.readUint32();
          this.cleanApertureHeightN = _0x118607.readUint32();
          this.cleanApertureHeightD = _0x118607.readUint32();
          this.horizOffN = _0x118607.readUint32();
          this.horizOffD = _0x118607.readUint32();
          this.vertOffN = _0x118607.readUint32();
          this.vertOffD = _0x118607.readUint32();
        });
        _0x1d941e.createBoxCtor("clli", function (_0x3661b4) {
          this.max_content_light_level = _0x3661b4.readUint16();
          this.max_pic_average_light_level = _0x3661b4.readUint16();
        });
        _0x1d941e.createFullBoxCtor("co64", function (_0x5667a7) {
          var _0x40e940;
          var _0x338bd4;
          _0x40e940 = _0x5667a7.readUint32();
          this.chunk_offsets = [];
          if (0x0 === this.version) {
            for (_0x338bd4 = 0x0; _0x338bd4 < _0x40e940; _0x338bd4++) {
              this.chunk_offsets.push(_0x5667a7.readUint64());
            }
          }
        });
        _0x1d941e.createFullBoxCtor("CoLL", function (_0x5c4751) {
          this.maxCLL = _0x5c4751.readUint16();
          this.maxFALL = _0x5c4751.readUint16();
        });
        _0x1d941e.createBoxCtor("colr", function (_0x13c745) {
          this.colour_type = _0x13c745.readString(0x4);
          if ("nclx" === this.colour_type) {
            this.colour_primaries = _0x13c745.readUint16();
            this.transfer_characteristics = _0x13c745.readUint16();
            this.matrix_coefficients = _0x13c745.readUint16();
            var _0xbaca1d = _0x13c745.readUint8();
            this.full_range_flag = _0xbaca1d >> 0x7;
          } else if ("rICC" === this.colour_type || "prof" === this.colour_type) {
            this.ICC_profile = _0x13c745.readUint8Array(this.size - 0x4);
          }
        });
        _0x1d941e.createFullBoxCtor("cprt", function (_0xfb3e02) {
          this.parseLanguage(_0xfb3e02);
          this.notice = _0xfb3e02.readCString();
        });
        _0x1d941e.createFullBoxCtor("cslg", function (_0x2922c6) {
          if (0x0 === this.version) {
            this.compositionToDTSShift = _0x2922c6.readInt32();
            this.leastDecodeToDisplayDelta = _0x2922c6.readInt32();
            this.greatestDecodeToDisplayDelta = _0x2922c6.readInt32();
            this.compositionStartTime = _0x2922c6.readInt32();
            this.compositionEndTime = _0x2922c6.readInt32();
          }
        });
        _0x1d941e.createFullBoxCtor("ctts", function (_0x2b0ba4) {
          var _0x41a487;
          var _0x1172ff;
          _0x41a487 = _0x2b0ba4.readUint32();
          this.sample_counts = [];
          this.sample_offsets = [];
          if (0x0 === this.version) {
            for (_0x1172ff = 0x0; _0x1172ff < _0x41a487; _0x1172ff++) {
              this.sample_counts.push(_0x2b0ba4.readUint32());
              var _0x1ccea0 = _0x2b0ba4.readInt32();
              if (_0x1ccea0 < 0x0) {
                _0x8cf1a.warn("BoxParser", "ctts box uses negative values without using version 1");
              }
              this.sample_offsets.push(_0x1ccea0);
            }
          } else {
            if (0x1 == this.version) {
              for (_0x1172ff = 0x0; _0x1172ff < _0x41a487; _0x1172ff++) {
                this.sample_counts.push(_0x2b0ba4.readUint32());
                this.sample_offsets.push(_0x2b0ba4.readInt32());
              }
            }
          }
        });
        _0x1d941e.createBoxCtor("dac3", function (_0x4fc56e) {
          var _0xdfc8c0 = _0x4fc56e.readUint8();
          var _0x31dcb1 = _0x4fc56e.readUint8();
          var _0x594fec = _0x4fc56e.readUint8();
          this.fscod = _0xdfc8c0 >> 0x6;
          this.bsid = _0xdfc8c0 >> 0x1 & 0x1f;
          this.bsmod = (0x1 & _0xdfc8c0) << 0x2 | _0x31dcb1 >> 0x6 & 0x3;
          this.acmod = _0x31dcb1 >> 0x3 & 0x7;
          this.lfeon = _0x31dcb1 >> 0x2 & 0x1;
          this.bit_rate_code = 0x3 & _0x31dcb1 | _0x594fec >> 0x5 & 0x7;
        });
        _0x1d941e.createBoxCtor("dec3", function (_0x54bf65) {
          var _0x2ba35c = _0x54bf65.readUint16();
          this.data_rate = _0x2ba35c >> 0x3;
          this.num_ind_sub = 0x7 & _0x2ba35c;
          this.ind_subs = [];
          for (var _0x197642 = 0x0; _0x197642 < this.num_ind_sub + 0x1; _0x197642++) {
            var _0x3fb1e9 = {};
            this.ind_subs.push(_0x3fb1e9);
            var _0x5c5f8b = _0x54bf65.readUint8();
            var _0x2b86fa = _0x54bf65.readUint8();
            var _0x2a974d = _0x54bf65.readUint8();
            _0x3fb1e9.fscod = _0x5c5f8b >> 0x6;
            _0x3fb1e9.bsid = _0x5c5f8b >> 0x1 & 0x1f;
            _0x3fb1e9.bsmod = (0x1 & _0x5c5f8b) << 0x4 | _0x2b86fa >> 0x4 & 0xf;
            _0x3fb1e9.acmod = _0x2b86fa >> 0x1 & 0x7;
            _0x3fb1e9.lfeon = 0x1 & _0x2b86fa;
            _0x3fb1e9.num_dep_sub = _0x2a974d >> 0x1 & 0xf;
            if (_0x3fb1e9.num_dep_sub > 0x0) {
              _0x3fb1e9.chan_loc = (0x1 & _0x2a974d) << 0x8 | _0x54bf65.readUint8();
            }
          }
        });
        _0x1d941e.createFullBoxCtor("dfLa", function (_0x1d6990) {
          var _0x2da2bc = [];
          var _0xc0d6e7 = ["STREAMINFO", 'PADDING', "APPLICATION", 'SEEKTABLE', "VORBIS_COMMENT", "CUESHEET", 'PICTURE', 'RESERVED'];
          for (this.parseFullHeader(_0x1d6990);;) {
            var _0x462bee = _0x1d6990.readUint8();
            var _0x3f12ba = Math.min(0x7f & _0x462bee, _0xc0d6e7.length - 0x1);
            if (_0x3f12ba) {
              _0x1d6990.readUint8Array(_0x1d6990.readUint24());
            } else {
              _0x1d6990.readUint8Array(0xd);
              this.samplerate = _0x1d6990.readUint32() >> 0xc;
              _0x1d6990.readUint8Array(0x14);
            }
            _0x2da2bc.push(_0xc0d6e7[_0x3f12ba]);
            if (0x80 & _0x462bee) {
              break;
            }
          }
          this.numMetadataBlocks = _0x2da2bc.length + " (" + _0x2da2bc.join(", ") + ')';
        });
        _0x1d941e.createBoxCtor("dimm", function (_0x108ece) {
          this.bytessent = _0x108ece.readUint64();
        });
        _0x1d941e.createBoxCtor("dmax", function (_0x5d34bc) {
          this.time = _0x5d34bc.readUint32();
        });
        _0x1d941e.createBoxCtor("dmed", function (_0x5f157a) {
          this.bytessent = _0x5f157a.readUint64();
        });
        _0x1d941e.createBoxCtor("dOps", function (_0x3a1103) {
          this.Version = _0x3a1103.readUint8();
          this.OutputChannelCount = _0x3a1103.readUint8();
          this.PreSkip = _0x3a1103.readUint16();
          this.InputSampleRate = _0x3a1103.readUint32();
          this.OutputGain = _0x3a1103.readInt16();
          this.ChannelMappingFamily = _0x3a1103.readUint8();
          if (0x0 !== this.ChannelMappingFamily) {
            this.StreamCount = _0x3a1103.readUint8();
            this.CoupledCount = _0x3a1103.readUint8();
            this.ChannelMapping = [];
            for (var _0x1829f7 = 0x0; _0x1829f7 < this.OutputChannelCount; _0x1829f7++) {
              this.ChannelMapping[_0x1829f7] = _0x3a1103.readUint8();
            }
          }
        });
        _0x1d941e.createFullBoxCtor("dref", function (_0x2eb070) {
          var _0x2050dc;
          var _0x2f2327;
          this.entries = [];
          var _0x32daeb = _0x2eb070.readUint32();
          for (var _0x559607 = 0x0; _0x559607 < _0x32daeb; _0x559607++) {
            if ((_0x2050dc = _0x1d941e.parseOneBox(_0x2eb070, false, this.size - (_0x2eb070.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            _0x2f2327 = _0x2050dc.box;
            this.entries.push(_0x2f2327);
          }
        });
        _0x1d941e.createBoxCtor("drep", function (_0x42bc6a) {
          this.bytessent = _0x42bc6a.readUint64();
        });
        _0x1d941e.createFullBoxCtor("elng", function (_0x32eddf) {
          this.extended_language = _0x32eddf.readString(this.size - this.hdr_size);
        });
        _0x1d941e.createFullBoxCtor("elst", function (_0x55bff4) {
          this.entries = [];
          var _0x2e7f60 = _0x55bff4.readUint32();
          for (var _0x2bd5f5 = 0x0; _0x2bd5f5 < _0x2e7f60; _0x2bd5f5++) {
            var _0xd889a1 = {};
            this.entries.push(_0xd889a1);
            if (0x1 === this.version) {
              _0xd889a1.segment_duration = _0x55bff4.readUint64();
              _0xd889a1.media_time = _0x55bff4.readInt64();
            } else {
              _0xd889a1.segment_duration = _0x55bff4.readUint32();
              _0xd889a1.media_time = _0x55bff4.readInt32();
            }
            _0xd889a1.media_rate_integer = _0x55bff4.readInt16();
            _0xd889a1.media_rate_fraction = _0x55bff4.readInt16();
          }
        });
        _0x1d941e.createFullBoxCtor('emsg', function (_0x8f7a11) {
          if (0x1 == this.version) {
            this.timescale = _0x8f7a11.readUint32();
            this.presentation_time = _0x8f7a11.readUint64();
            this.event_duration = _0x8f7a11.readUint32();
            this.id = _0x8f7a11.readUint32();
            this.scheme_id_uri = _0x8f7a11.readCString();
            this.value = _0x8f7a11.readCString();
          } else {
            this.scheme_id_uri = _0x8f7a11.readCString();
            this.value = _0x8f7a11.readCString();
            this.timescale = _0x8f7a11.readUint32();
            this.presentation_time_delta = _0x8f7a11.readUint32();
            this.event_duration = _0x8f7a11.readUint32();
            this.id = _0x8f7a11.readUint32();
          }
          var _0x42e87a = this.size - this.hdr_size - (0x10 + (this.scheme_id_uri.length + 0x1) + (this.value.length + 0x1));
          if (0x1 == this.version) {
            _0x42e87a -= 0x4;
          }
          this.message_data = _0x8f7a11.readUint8Array(_0x42e87a);
        });
        _0x1d941e.createFullBoxCtor("esds", function (_0x2cd632) {
          var _0x545bcd = _0x2cd632.readUint8Array(this.size - this.hdr_size);
          if (undefined !== _0x4e811b) {
            var _0x4021ea = new _0x4e811b();
            this.esd = _0x4021ea.parseOneDescriptor(new _0x5a7d91(_0x545bcd.buffer, 0x0, _0x5a7d91.BIG_ENDIAN));
          }
        });
        _0x1d941e.createBoxCtor("fiel", function (_0xd5347a) {
          this.fieldCount = _0xd5347a.readUint8();
          this.fieldOrdering = _0xd5347a.readUint8();
        });
        _0x1d941e.createBoxCtor("frma", function (_0x34cd41) {
          this.data_format = _0x34cd41.readString(0x4);
        });
        _0x1d941e.createBoxCtor('ftyp', function (_0x5453f6) {
          var _0x148fb2 = this.size - this.hdr_size;
          this.major_brand = _0x5453f6.readString(0x4);
          this.minor_version = _0x5453f6.readUint32();
          _0x148fb2 -= 0x8;
          this.compatible_brands = [];
          for (var _0x4b924b = 0x0; _0x148fb2 >= 0x4;) {
            this.compatible_brands[_0x4b924b] = _0x5453f6.readString(0x4);
            _0x148fb2 -= 0x4;
            _0x4b924b++;
          }
        });
        _0x1d941e.createFullBoxCtor("hdlr", function (_0x142d24) {
          if (0x0 === this.version) {
            _0x142d24.readUint32();
            this.handler = _0x142d24.readString(0x4);
            _0x142d24.readUint32Array(0x3);
            this.name = _0x142d24.readString(this.size - this.hdr_size - 0x14);
            if ("\0" === this.name[this.name.length - 0x1]) {
              this.name = this.name.slice(0x0, -0x1);
            }
          }
        });
        _0x1d941e.createBoxCtor("hvcC", function (_0x5539c9) {
          var _0x405388;
          var _0x4b8266;
          var _0x1ebef9;
          var _0x557616;
          this.configurationVersion = _0x5539c9.readUint8();
          _0x557616 = _0x5539c9.readUint8();
          this.general_profile_space = _0x557616 >> 0x6;
          this.general_tier_flag = (0x20 & _0x557616) >> 0x5;
          this.general_profile_idc = 0x1f & _0x557616;
          this.general_profile_compatibility = _0x5539c9.readUint32();
          this.general_constraint_indicator = _0x5539c9.readUint8Array(0x6);
          this.general_level_idc = _0x5539c9.readUint8();
          this.min_spatial_segmentation_idc = 0xfff & _0x5539c9.readUint16();
          this.parallelismType = 0x3 & _0x5539c9.readUint8();
          this.chroma_format_idc = 0x3 & _0x5539c9.readUint8();
          this.bit_depth_luma_minus8 = 0x7 & _0x5539c9.readUint8();
          this.bit_depth_chroma_minus8 = 0x7 & _0x5539c9.readUint8();
          this.avgFrameRate = _0x5539c9.readUint16();
          _0x557616 = _0x5539c9.readUint8();
          this.constantFrameRate = _0x557616 >> 0x6;
          this.numTemporalLayers = (0xd & _0x557616) >> 0x3;
          this.temporalIdNested = (0x4 & _0x557616) >> 0x2;
          this.lengthSizeMinusOne = 0x3 & _0x557616;
          this.nalu_arrays = [];
          var _0x32d656 = _0x5539c9.readUint8();
          for (_0x405388 = 0x0; _0x405388 < _0x32d656; _0x405388++) {
            var _0x2bf605 = [];
            this.nalu_arrays.push(_0x2bf605);
            _0x557616 = _0x5539c9.readUint8();
            _0x2bf605.completeness = (0x80 & _0x557616) >> 0x7;
            _0x2bf605.nalu_type = 0x3f & _0x557616;
            var _0x5b96b8 = _0x5539c9.readUint16();
            for (_0x4b8266 = 0x0; _0x4b8266 < _0x5b96b8; _0x4b8266++) {
              var _0xacda38 = {};
              _0x2bf605.push(_0xacda38);
              _0x1ebef9 = _0x5539c9.readUint16();
              _0xacda38.data = _0x5539c9.readUint8Array(_0x1ebef9);
            }
          }
        });
        _0x1d941e.createFullBoxCtor("iinf", function (_0x1b75e2) {
          var _0xd7ad12;
          if (0x0 === this.version) {
            this.entry_count = _0x1b75e2.readUint16();
          } else {
            this.entry_count = _0x1b75e2.readUint32();
          }
          this.item_infos = [];
          for (var _0x187b52 = 0x0; _0x187b52 < this.entry_count; _0x187b52++) {
            if ((_0xd7ad12 = _0x1d941e.parseOneBox(_0x1b75e2, false, this.size - (_0x1b75e2.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            if ('infe' !== _0xd7ad12.box.type) {
              _0x8cf1a.error("BoxParser", "Expected 'infe' box, got " + _0xd7ad12.box.type);
            }
            this.item_infos[_0x187b52] = _0xd7ad12.box;
          }
        });
        _0x1d941e.createFullBoxCtor('iloc', function (_0x55511c) {
          var _0x41574a;
          _0x41574a = _0x55511c.readUint8();
          this.offset_size = _0x41574a >> 0x4 & 0xf;
          this.length_size = 0xf & _0x41574a;
          _0x41574a = _0x55511c.readUint8();
          this.base_offset_size = _0x41574a >> 0x4 & 0xf;
          if (0x1 === this.version || 0x2 === this.version) {
            this.index_size = 0xf & _0x41574a;
          } else {
            this.index_size = 0x0;
          }
          this.items = [];
          var _0x47acec = 0x0;
          if (this.version < 0x2) {
            _0x47acec = _0x55511c.readUint16();
          } else {
            if (0x2 !== this.version) {
              throw "version of iloc box not supported";
            }
            _0x47acec = _0x55511c.readUint32();
          }
          for (var _0x56decb = 0x0; _0x56decb < _0x47acec; _0x56decb++) {
            var _0x21cfe5 = {};
            this.items.push(_0x21cfe5);
            if (this.version < 0x2) {
              _0x21cfe5.item_ID = _0x55511c.readUint16();
            } else {
              if (0x2 !== this.version) {
                throw "version of iloc box not supported";
              }
              _0x21cfe5.item_ID = _0x55511c.readUint16();
            }
            if (0x1 === this.version || 0x2 === this.version) {
              _0x21cfe5.construction_method = 0xf & _0x55511c.readUint16();
            } else {
              _0x21cfe5.construction_method = 0x0;
            }
            _0x21cfe5.data_reference_index = _0x55511c.readUint16();
            switch (this.base_offset_size) {
              case 0x0:
                _0x21cfe5.base_offset = 0x0;
                break;
              case 0x4:
                _0x21cfe5.base_offset = _0x55511c.readUint32();
                break;
              case 0x8:
                _0x21cfe5.base_offset = _0x55511c.readUint64();
                break;
              default:
                throw "Error reading base offset size";
            }
            var _0x157201 = _0x55511c.readUint16();
            _0x21cfe5.extents = [];
            for (var _0x16dfaa = 0x0; _0x16dfaa < _0x157201; _0x16dfaa++) {
              var _0x1845ff = {};
              _0x21cfe5.extents.push(_0x1845ff);
              if (0x1 === this.version || 0x2 === this.version) {
                switch (this.index_size) {
                  case 0x0:
                    _0x1845ff.extent_index = 0x0;
                    break;
                  case 0x4:
                    _0x1845ff.extent_index = _0x55511c.readUint32();
                    break;
                  case 0x8:
                    _0x1845ff.extent_index = _0x55511c.readUint64();
                    break;
                  default:
                    throw "Error reading extent index";
                }
              }
              switch (this.offset_size) {
                case 0x0:
                  _0x1845ff.extent_offset = 0x0;
                  break;
                case 0x4:
                  _0x1845ff.extent_offset = _0x55511c.readUint32();
                  break;
                case 0x8:
                  _0x1845ff.extent_offset = _0x55511c.readUint64();
                  break;
                default:
                  throw "Error reading extent index";
              }
              switch (this.length_size) {
                case 0x0:
                  _0x1845ff.extent_length = 0x0;
                  break;
                case 0x4:
                  _0x1845ff.extent_length = _0x55511c.readUint32();
                  break;
                case 0x8:
                  _0x1845ff.extent_length = _0x55511c.readUint64();
                  break;
                default:
                  throw "Error reading extent index";
              }
            }
          }
        });
        _0x1d941e.createBoxCtor("imir", function (_0x2b9d9a) {
          var _0x30ef73 = _0x2b9d9a.readUint8();
          this.reserved = _0x30ef73 >> 0x7;
          this.axis = 0x1 & _0x30ef73;
        });
        _0x1d941e.createFullBoxCtor('infe', function (_0x48d98d) {
          if (!(0x0 !== this.version && 0x1 !== this.version)) {
            this.item_ID = _0x48d98d.readUint16();
            this.item_protection_index = _0x48d98d.readUint16();
            this.item_name = _0x48d98d.readCString();
            this.content_type = _0x48d98d.readCString();
            this.content_encoding = _0x48d98d.readCString();
          }
          if (0x1 === this.version) {
            this.extension_type = _0x48d98d.readString(0x4);
            _0x8cf1a.warn('BoxParser', "Cannot parse extension type");
            return void _0x48d98d.seek(this.start + this.size);
          }
          if (this.version >= 0x2) {
            if (0x2 === this.version) {
              this.item_ID = _0x48d98d.readUint16();
            } else if (0x3 === this.version) {
              this.item_ID = _0x48d98d.readUint32();
            }
            this.item_protection_index = _0x48d98d.readUint16();
            this.item_type = _0x48d98d.readString(0x4);
            this.item_name = _0x48d98d.readCString();
            if ("mime" === this.item_type) {
              this.content_type = _0x48d98d.readCString();
              this.content_encoding = _0x48d98d.readCString();
            } else if ("uri " === this.item_type) {
              this.item_uri_type = _0x48d98d.readCString();
            }
          }
        });
        _0x1d941e.createFullBoxCtor("ipma", function (_0x265ba3) {
          var _0x4f3be0;
          var _0x5b2498;
          entry_count = _0x265ba3.readUint32();
          this.associations = [];
          for (_0x4f3be0 = 0x0; _0x4f3be0 < entry_count; _0x4f3be0++) {
            var _0x5263d5 = {};
            this.associations.push(_0x5263d5);
            if (this.version < 0x1) {
              _0x5263d5.id = _0x265ba3.readUint16();
            } else {
              _0x5263d5.id = _0x265ba3.readUint32();
            }
            var _0x3b984f = _0x265ba3.readUint8();
            _0x5263d5.props = [];
            for (_0x5b2498 = 0x0; _0x5b2498 < _0x3b984f; _0x5b2498++) {
              var _0x10f0d8 = _0x265ba3.readUint8();
              var _0x5a8495 = {};
              _0x5263d5.props.push(_0x5a8495);
              _0x5a8495.essential = (0x80 & _0x10f0d8) >> 0x7 == 0x1;
              if (0x1 & this.flags) {
                _0x5a8495.property_index = (0x7f & _0x10f0d8) << 0x8 | _0x265ba3.readUint8();
              } else {
                _0x5a8495.property_index = 0x7f & _0x10f0d8;
              }
            }
          }
        });
        _0x1d941e.createFullBoxCtor("iref", function (_0x3029db) {
          var _0x1e1382;
          var _0x81a193;
          for (this.references = []; _0x3029db.getPosition() < this.start + this.size;) {
            if ((_0x1e1382 = _0x1d941e.parseOneBox(_0x3029db, true, this.size - (_0x3029db.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            if ((_0x81a193 = 0x0 === this.version ? new _0x1d941e.SingleItemTypeReferenceBox(_0x1e1382.type, _0x1e1382.size, _0x1e1382.hdr_size, _0x1e1382.start) : new _0x1d941e.SingleItemTypeReferenceBoxLarge(_0x1e1382.type, _0x1e1382.size, _0x1e1382.hdr_size, _0x1e1382.start)).write === _0x1d941e.Box.prototype.write && "mdat" !== _0x81a193.type) {
              _0x8cf1a.warn("BoxParser", _0x81a193.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
              _0x81a193.parseDataAndRewind(_0x3029db);
            }
            _0x81a193.parse(_0x3029db);
            this.references.push(_0x81a193);
          }
        });
        _0x1d941e.createBoxCtor('irot', function (_0x49c7a3) {
          this.angle = 0x3 & _0x49c7a3.readUint8();
        });
        _0x1d941e.createFullBoxCtor("ispe", function (_0x94f940) {
          this.image_width = _0x94f940.readUint32();
          this.image_height = _0x94f940.readUint32();
        });
        _0x1d941e.createFullBoxCtor("kind", function (_0x195811) {
          this.schemeURI = _0x195811.readCString();
          this.value = _0x195811.readCString();
        });
        _0x1d941e.createFullBoxCtor("leva", function (_0x49ca10) {
          var _0x474cb3 = _0x49ca10.readUint8();
          this.levels = [];
          for (var _0x24558c = 0x0; _0x24558c < _0x474cb3; _0x24558c++) {
            var _0x196c60 = {};
            this.levels[_0x24558c] = _0x196c60;
            _0x196c60.track_ID = _0x49ca10.readUint32();
            var _0x22daf0 = _0x49ca10.readUint8();
            _0x196c60.padding_flag = _0x22daf0 >> 0x7;
            _0x196c60.assignment_type = 0x7f & _0x22daf0;
            switch (_0x196c60.assignment_type) {
              case 0x0:
                _0x196c60.grouping_type = _0x49ca10.readString(0x4);
                break;
              case 0x1:
                _0x196c60.grouping_type = _0x49ca10.readString(0x4);
                _0x196c60.grouping_type_parameter = _0x49ca10.readUint32();
                break;
              case 0x2:
              case 0x3:
                break;
              case 0x4:
                _0x196c60.sub_track_id = _0x49ca10.readUint32();
                break;
              default:
                _0x8cf1a.warn("BoxParser", "Unknown leva assignement type");
            }
          }
        });
        _0x1d941e.createBoxCtor("lsel", function (_0x4e2fb3) {
          this.layer_id = _0x4e2fb3.readUint16();
        });
        _0x1d941e.createBoxCtor('maxr', function (_0x3ca7af) {
          this.period = _0x3ca7af.readUint32();
          this.bytes = _0x3ca7af.readUint32();
        });
        _0x1d941e.createBoxCtor("mdcv", function (_0x107e4f) {
          this.display_primaries = [];
          this.display_primaries[0x0] = {};
          this.display_primaries[0x0].x = _0x107e4f.readUint16();
          this.display_primaries[0x0].y = _0x107e4f.readUint16();
          this.display_primaries[0x1] = {};
          this.display_primaries[0x1].x = _0x107e4f.readUint16();
          this.display_primaries[0x1].y = _0x107e4f.readUint16();
          this.display_primaries[0x2] = {};
          this.display_primaries[0x2].x = _0x107e4f.readUint16();
          this.display_primaries[0x2].y = _0x107e4f.readUint16();
          this.white_point = {};
          this.white_point.x = _0x107e4f.readUint16();
          this.white_point.y = _0x107e4f.readUint16();
          this.max_display_mastering_luminance = _0x107e4f.readUint32();
          this.min_display_mastering_luminance = _0x107e4f.readUint32();
        });
        _0x1d941e.createFullBoxCtor("mdhd", function (_0x49c334) {
          if (0x1 == this.version) {
            this.creation_time = _0x49c334.readUint64();
            this.modification_time = _0x49c334.readUint64();
            this.timescale = _0x49c334.readUint32();
            this.duration = _0x49c334.readUint64();
          } else {
            this.creation_time = _0x49c334.readUint32();
            this.modification_time = _0x49c334.readUint32();
            this.timescale = _0x49c334.readUint32();
            this.duration = _0x49c334.readUint32();
          }
          this.parseLanguage(_0x49c334);
          _0x49c334.readUint16();
        });
        _0x1d941e.createFullBoxCtor("mehd", function (_0x4f6352) {
          if (0x1 & this.flags) {
            _0x8cf1a.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
            this.version = 0x1;
          }
          if (0x1 == this.version) {
            this.fragment_duration = _0x4f6352.readUint64();
          } else {
            this.fragment_duration = _0x4f6352.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor("meta", function (_0x42035a) {
          this.boxes = [];
          _0x1d941e.ContainerBox.prototype.parse.call(this, _0x42035a);
        });
        _0x1d941e.createFullBoxCtor('mfhd', function (_0x28c16f) {
          this.sequence_number = _0x28c16f.readUint32();
        });
        _0x1d941e.createFullBoxCtor("mfro", function (_0x177eb3) {
          this._size = _0x177eb3.readUint32();
        });
        _0x1d941e.createFullBoxCtor('mvhd', function (_0xf08cd9) {
          if (0x1 == this.version) {
            this.creation_time = _0xf08cd9.readUint64();
            this.modification_time = _0xf08cd9.readUint64();
            this.timescale = _0xf08cd9.readUint32();
            this.duration = _0xf08cd9.readUint64();
          } else {
            this.creation_time = _0xf08cd9.readUint32();
            this.modification_time = _0xf08cd9.readUint32();
            this.timescale = _0xf08cd9.readUint32();
            this.duration = _0xf08cd9.readUint32();
          }
          this.rate = _0xf08cd9.readUint32();
          this.volume = _0xf08cd9.readUint16() >> 0x8;
          _0xf08cd9.readUint16();
          _0xf08cd9.readUint32Array(0x2);
          this.matrix = _0xf08cd9.readUint32Array(0x9);
          _0xf08cd9.readUint32Array(0x6);
          this.next_track_id = _0xf08cd9.readUint32();
        });
        _0x1d941e.createBoxCtor("npck", function (_0x23eafd) {
          this.packetssent = _0x23eafd.readUint32();
        });
        _0x1d941e.createBoxCtor("nump", function (_0x4ad6c5) {
          this.packetssent = _0x4ad6c5.readUint64();
        });
        _0x1d941e.createFullBoxCtor("padb", function (_0x5a93e6) {
          var _0x14901f = _0x5a93e6.readUint32();
          this.padbits = [];
          for (var _0x269e68 = 0x0; _0x269e68 < Math.floor((_0x14901f + 0x1) / 0x2); _0x269e68++) {
            this.padbits = _0x5a93e6.readUint8();
          }
        });
        _0x1d941e.createBoxCtor("pasp", function (_0x485af2) {
          this.hSpacing = _0x485af2.readUint32();
          this.vSpacing = _0x485af2.readUint32();
        });
        _0x1d941e.createBoxCtor("payl", function (_0x3b7265) {
          this.text = _0x3b7265.readString(this.size - this.hdr_size);
        });
        _0x1d941e.createBoxCtor("payt", function (_0x45b4de) {
          this.payloadID = _0x45b4de.readUint32();
          var _0x69b45b = _0x45b4de.readUint8();
          this.rtpmap_string = _0x45b4de.readString(_0x69b45b);
        });
        _0x1d941e.createFullBoxCtor("pdin", function (_0x351c4a) {
          var _0x48fdb6 = (this.size - this.hdr_size) / 0x8;
          this.rate = [];
          this.initial_delay = [];
          for (var _0x3e28fb = 0x0; _0x3e28fb < _0x48fdb6; _0x3e28fb++) {
            this.rate[_0x3e28fb] = _0x351c4a.readUint32();
            this.initial_delay[_0x3e28fb] = _0x351c4a.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor("pitm", function (_0x5488e2) {
          if (0x0 === this.version) {
            this.item_id = _0x5488e2.readUint16();
          } else {
            this.item_id = _0x5488e2.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor("pixi", function (_0x202b6b) {
          var _0x461be2;
          this.num_channels = _0x202b6b.readUint8();
          this.bits_per_channels = [];
          for (_0x461be2 = 0x0; _0x461be2 < this.num_channels; _0x461be2++) {
            this.bits_per_channels[_0x461be2] = _0x202b6b.readUint8();
          }
        });
        _0x1d941e.createBoxCtor("pmax", function (_0xc37cb6) {
          this.bytes = _0xc37cb6.readUint32();
        });
        _0x1d941e.createFullBoxCtor("prft", function (_0x25a640) {
          this.ref_track_id = _0x25a640.readUint32();
          this.ntp_timestamp = _0x25a640.readUint64();
          if (0x0 === this.version) {
            this.media_time = _0x25a640.readUint32();
          } else {
            this.media_time = _0x25a640.readUint64();
          }
        });
        _0x1d941e.createFullBoxCtor("pssh", function (_0x3c83c9) {
          this.system_id = _0x1d941e.parseHex16(_0x3c83c9);
          if (this.version > 0x0) {
            var _0x16f506 = _0x3c83c9.readUint32();
            this.kid = [];
            for (var _0x4af45b = 0x0; _0x4af45b < _0x16f506; _0x4af45b++) {
              this.kid[_0x4af45b] = _0x1d941e.parseHex16(_0x3c83c9);
            }
          }
          var _0x592ea8 = _0x3c83c9.readUint32();
          if (_0x592ea8 > 0x0) {
            this.data = _0x3c83c9.readUint8Array(_0x592ea8);
          }
        });
        _0x1d941e.createFullBoxCtor("clef", function (_0x18c5fd) {
          this.width = _0x18c5fd.readUint32();
          this.height = _0x18c5fd.readUint32();
        });
        _0x1d941e.createFullBoxCtor("enof", function (_0x19cb73) {
          this.width = _0x19cb73.readUint32();
          this.height = _0x19cb73.readUint32();
        });
        _0x1d941e.createFullBoxCtor("prof", function (_0xaede9b) {
          this.width = _0xaede9b.readUint32();
          this.height = _0xaede9b.readUint32();
        });
        _0x1d941e.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]);
        _0x1d941e.createBoxCtor("rtp ", function (_0x407bad) {
          this.descriptionformat = _0x407bad.readString(0x4);
          this.sdptext = _0x407bad.readString(this.size - this.hdr_size - 0x4);
        });
        _0x1d941e.createFullBoxCtor('saio', function (_0x35f836) {
          if (0x1 & this.flags) {
            this.aux_info_type = _0x35f836.readUint32();
            this.aux_info_type_parameter = _0x35f836.readUint32();
          }
          var _0xb50803 = _0x35f836.readUint32();
          this.offset = [];
          for (var _0x5c90b2 = 0x0; _0x5c90b2 < _0xb50803; _0x5c90b2++) {
            if (0x0 === this.version) {
              this.offset[_0x5c90b2] = _0x35f836.readUint32();
            } else {
              this.offset[_0x5c90b2] = _0x35f836.readUint64();
            }
          }
        });
        _0x1d941e.createFullBoxCtor('saiz', function (_0x4d2b18) {
          if (0x1 & this.flags) {
            this.aux_info_type = _0x4d2b18.readUint32();
            this.aux_info_type_parameter = _0x4d2b18.readUint32();
          }
          this.default_sample_info_size = _0x4d2b18.readUint8();
          var _0x49628e = _0x4d2b18.readUint32();
          this.sample_info_size = [];
          if (0x0 === this.default_sample_info_size) {
            for (var _0x5da343 = 0x0; _0x5da343 < _0x49628e; _0x5da343++) {
              this.sample_info_size[_0x5da343] = _0x4d2b18.readUint8();
            }
          }
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_METADATA, "mett", function (_0x23225d) {
          this.parseHeader(_0x23225d);
          this.content_encoding = _0x23225d.readCString();
          this.mime_format = _0x23225d.readCString();
          this.parseFooter(_0x23225d);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_METADATA, "metx", function (_0x5bb70d) {
          this.parseHeader(_0x5bb70d);
          this.content_encoding = _0x5bb70d.readCString();
          this.namespace = _0x5bb70d.readCString();
          this.schema_location = _0x5bb70d.readCString();
          this.parseFooter(_0x5bb70d);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function (_0x2e8291) {
          this.parseHeader(_0x2e8291);
          this.content_encoding = _0x2e8291.readCString();
          this.mime_format = _0x2e8291.readCString();
          this.parseFooter(_0x2e8291);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function (_0x52217d) {
          this.parseHeader(_0x52217d);
          this.namespace = _0x52217d.readCString();
          this.schema_location = _0x52217d.readCString();
          this.auxiliary_mime_types = _0x52217d.readCString();
          this.parseFooter(_0x52217d);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function (_0x23c7de) {
          this.parseHeader(_0x23c7de);
          this.content_encoding = _0x23c7de.readCString();
          this.mime_format = _0x23c7de.readCString();
          this.parseFooter(_0x23c7de);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_SUBTITLE, 'tx3g', function (_0xdd8031) {
          this.parseHeader(_0xdd8031);
          this.displayFlags = _0xdd8031.readUint32();
          this.horizontal_justification = _0xdd8031.readInt8();
          this.vertical_justification = _0xdd8031.readInt8();
          this.bg_color_rgba = _0xdd8031.readUint8Array(0x4);
          this.box_record = _0xdd8031.readInt16Array(0x4);
          this.style_record = _0xdd8031.readUint8Array(0xc);
          this.parseFooter(_0xdd8031);
        });
        _0x1d941e.createSampleEntryCtor(_0x1d941e.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function (_0x52bf8b) {
          this.parseHeader(_0x52bf8b);
          this.parseFooter(_0x52bf8b);
        });
        _0x1d941e.createSampleGroupCtor("alst", function (_0x3f7dd3) {
          var _0x466bec;
          var _0xa9095b = _0x3f7dd3.readUint16();
          this.first_output_sample = _0x3f7dd3.readUint16();
          this.sample_offset = [];
          for (_0x466bec = 0x0; _0x466bec < _0xa9095b; _0x466bec++) {
            this.sample_offset[_0x466bec] = _0x3f7dd3.readUint32();
          }
          var _0x5c39f6 = this.description_length - 0x4 - 0x4 * _0xa9095b;
          this.num_output_samples = [];
          this.num_total_samples = [];
          for (_0x466bec = 0x0; _0x466bec < _0x5c39f6 / 0x4; _0x466bec++) {
            this.num_output_samples[_0x466bec] = _0x3f7dd3.readUint16();
            this.num_total_samples[_0x466bec] = _0x3f7dd3.readUint16();
          }
        });
        _0x1d941e.createSampleGroupCtor("avll", function (_0x4e762a) {
          this.layerNumber = _0x4e762a.readUint8();
          this.accurateStatisticsFlag = _0x4e762a.readUint8();
          this.avgBitRate = _0x4e762a.readUint16();
          this.avgFrameRate = _0x4e762a.readUint16();
        });
        _0x1d941e.createSampleGroupCtor("avss", function (_0x5980c0) {
          this.subSequenceIdentifier = _0x5980c0.readUint16();
          this.layerNumber = _0x5980c0.readUint8();
          var _0x542d65 = _0x5980c0.readUint8();
          this.durationFlag = _0x542d65 >> 0x7;
          this.avgRateFlag = _0x542d65 >> 0x6 & 0x1;
          if (this.durationFlag) {
            this.duration = _0x5980c0.readUint32();
          }
          if (this.avgRateFlag) {
            this.accurateStatisticsFlag = _0x5980c0.readUint8();
            this.avgBitRate = _0x5980c0.readUint16();
            this.avgFrameRate = _0x5980c0.readUint16();
          }
          this.dependency = [];
          var _0x54a966 = _0x5980c0.readUint8();
          for (var _0x25dbf3 = 0x0; _0x25dbf3 < _0x54a966; _0x25dbf3++) {
            var _0x499649 = {};
            this.dependency.push(_0x499649);
            _0x499649.subSeqDirectionFlag = _0x5980c0.readUint8();
            _0x499649.layerNumber = _0x5980c0.readUint8();
            _0x499649.subSequenceIdentifier = _0x5980c0.readUint16();
          }
        });
        _0x1d941e.createSampleGroupCtor('dtrt', function (_0x3d39ed) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor("mvif", function (_0x4192e5) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor('prol', function (_0x34166f) {
          this.roll_distance = _0x34166f.readInt16();
        });
        _0x1d941e.createSampleGroupCtor("rap ", function (_0x1285b4) {
          var _0x3778dd = _0x1285b4.readUint8();
          this.num_leading_samples_known = _0x3778dd >> 0x7;
          this.num_leading_samples = 0x7f & _0x3778dd;
        });
        _0x1d941e.createSampleGroupCtor("rash", function (_0xcccfb2) {
          this.operation_point_count = _0xcccfb2.readUint16();
          if (this.description_length !== 0x2 + (0x1 === this.operation_point_count ? 0x2 : 0x6 * this.operation_point_count) + 0x9) {
            _0x8cf1a.warn('BoxParser', "Mismatch in " + this.grouping_type + " sample group length");
            this.data = _0xcccfb2.readUint8Array(this.description_length - 0x2);
          } else {
            if (0x1 === this.operation_point_count) {
              this.target_rate_share = _0xcccfb2.readUint16();
            } else {
              this.target_rate_share = [];
              this.available_bitrate = [];
              for (var _0x45fca2 = 0x0; _0x45fca2 < this.operation_point_count; _0x45fca2++) {
                this.available_bitrate[_0x45fca2] = _0xcccfb2.readUint32();
                this.target_rate_share[_0x45fca2] = _0xcccfb2.readUint16();
              }
            }
            this.maximum_bitrate = _0xcccfb2.readUint32();
            this.minimum_bitrate = _0xcccfb2.readUint32();
            this.discard_priority = _0xcccfb2.readUint8();
          }
        });
        _0x1d941e.createSampleGroupCtor('roll', function (_0x1c9fbf) {
          this.roll_distance = _0x1c9fbf.readInt16();
        });
        _0x1d941e.SampleGroupEntry.prototype.parse = function (_0x3691cf) {
          _0x8cf1a.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type);
          this.data = _0x3691cf.readUint8Array(this.description_length);
        };
        _0x1d941e.createSampleGroupCtor('scif', function (_0x109d3d) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor("scnm", function (_0x37142f) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor("seig", function (_0x45a032) {
          this.reserved = _0x45a032.readUint8();
          var _0x7d705d = _0x45a032.readUint8();
          this.crypt_byte_block = _0x7d705d >> 0x4;
          this.skip_byte_block = 0xf & _0x7d705d;
          this.isProtected = _0x45a032.readUint8();
          this.Per_Sample_IV_Size = _0x45a032.readUint8();
          this.KID = _0x1d941e.parseHex16(_0x45a032);
          this.constant_IV_size = 0x0;
          this.constant_IV = 0x0;
          if (0x1 === this.isProtected && 0x0 === this.Per_Sample_IV_Size) {
            this.constant_IV_size = _0x45a032.readUint8();
            this.constant_IV = _0x45a032.readUint8Array(this.constant_IV_size);
          }
        });
        _0x1d941e.createSampleGroupCtor("stsa", function (_0x22dccb) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor("sync", function (_0x454a1d) {
          var _0x2f2549 = _0x454a1d.readUint8();
          this.NAL_unit_type = 0x3f & _0x2f2549;
        });
        _0x1d941e.createSampleGroupCtor("tele", function (_0x21f1a8) {
          var _0x1c0bc0 = _0x21f1a8.readUint8();
          this.level_independently_decodable = _0x1c0bc0 >> 0x7;
        });
        _0x1d941e.createSampleGroupCtor("tsas", function (_0x54f619) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor("tscl", function (_0x505b1e) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createSampleGroupCtor('vipr', function (_0x461fa6) {
          _0x8cf1a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
        });
        _0x1d941e.createFullBoxCtor("sbgp", function (_0x50851e) {
          this.grouping_type = _0x50851e.readString(0x4);
          if (0x1 === this.version) {
            this.grouping_type_parameter = _0x50851e.readUint32();
          } else {
            this.grouping_type_parameter = 0x0;
          }
          this.entries = [];
          var _0x5bc097 = _0x50851e.readUint32();
          for (var _0x18cc99 = 0x0; _0x18cc99 < _0x5bc097; _0x18cc99++) {
            var _0x3bc36f = {};
            this.entries.push(_0x3bc36f);
            _0x3bc36f.sample_count = _0x50851e.readInt32();
            _0x3bc36f.group_description_index = _0x50851e.readInt32();
          }
        });
        _0x1d941e.createFullBoxCtor('schm', function (_0x3ee5d0) {
          this.scheme_type = _0x3ee5d0.readString(0x4);
          this.scheme_version = _0x3ee5d0.readUint32();
          if (0x1 & this.flags) {
            this.scheme_uri = _0x3ee5d0.readString(this.size - this.hdr_size - 0x8);
          }
        });
        _0x1d941e.createBoxCtor("sdp ", function (_0x1de598) {
          this.sdptext = _0x1de598.readString(this.size - this.hdr_size);
        });
        _0x1d941e.createFullBoxCtor('sdtp', function (_0xa9c646) {
          var _0x2b0ab3;
          var _0x314faa = this.size - this.hdr_size;
          this.is_leading = [];
          this.sample_depends_on = [];
          this.sample_is_depended_on = [];
          this.sample_has_redundancy = [];
          for (var _0x250fe3 = 0x0; _0x250fe3 < _0x314faa; _0x250fe3++) {
            _0x2b0ab3 = _0xa9c646.readUint8();
            this.is_leading[_0x250fe3] = _0x2b0ab3 >> 0x6;
            this.sample_depends_on[_0x250fe3] = _0x2b0ab3 >> 0x4 & 0x3;
            this.sample_is_depended_on[_0x250fe3] = _0x2b0ab3 >> 0x2 & 0x3;
            this.sample_has_redundancy[_0x250fe3] = 0x3 & _0x2b0ab3;
          }
        });
        _0x1d941e.createFullBoxCtor("senc");
        _0x1d941e.createFullBoxCtor('sgpd', function (_0x4aa2ee) {
          this.grouping_type = _0x4aa2ee.readString(0x4);
          _0x8cf1a.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
          if (0x1 === this.version) {
            this.default_length = _0x4aa2ee.readUint32();
          } else {
            this.default_length = 0x0;
          }
          if (this.version >= 0x2) {
            this.default_group_description_index = _0x4aa2ee.readUint32();
          }
          this.entries = [];
          var _0x25deb1 = _0x4aa2ee.readUint32();
          for (var _0x35d5a6 = 0x0; _0x35d5a6 < _0x25deb1; _0x35d5a6++) {
            var _0x440c8b;
            _0x440c8b = _0x1d941e[this.grouping_type + "SampleGroupEntry"] ? new _0x1d941e[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new _0x1d941e.SampleGroupEntry(this.grouping_type);
            this.entries.push(_0x440c8b);
            if (0x1 === this.version && 0x0 === this.default_length) {
              _0x440c8b.description_length = _0x4aa2ee.readUint32();
            } else {
              _0x440c8b.description_length = this.default_length;
            }
            if (_0x440c8b.write === _0x1d941e.SampleGroupEntry.prototype.write) {
              _0x8cf1a.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write");
              _0x440c8b.data = _0x4aa2ee.readUint8Array(_0x440c8b.description_length);
              _0x4aa2ee.position -= _0x440c8b.description_length;
            }
            _0x440c8b.parse(_0x4aa2ee);
          }
        });
        _0x1d941e.createFullBoxCtor("sidx", function (_0x566985) {
          this.reference_ID = _0x566985.readUint32();
          this.timescale = _0x566985.readUint32();
          if (0x0 === this.version) {
            this.earliest_presentation_time = _0x566985.readUint32();
            this.first_offset = _0x566985.readUint32();
          } else {
            this.earliest_presentation_time = _0x566985.readUint64();
            this.first_offset = _0x566985.readUint64();
          }
          _0x566985.readUint16();
          this.references = [];
          var _0x35525b = _0x566985.readUint16();
          for (var _0xd31f51 = 0x0; _0xd31f51 < _0x35525b; _0xd31f51++) {
            var _0x814e53 = {};
            this.references.push(_0x814e53);
            var _0x1365c2 = _0x566985.readUint32();
            _0x814e53.reference_type = _0x1365c2 >> 0x1f & 0x1;
            _0x814e53.referenced_size = 0x7fffffff & _0x1365c2;
            _0x814e53.subsegment_duration = _0x566985.readUint32();
            _0x1365c2 = _0x566985.readUint32();
            _0x814e53.starts_with_SAP = _0x1365c2 >> 0x1f & 0x1;
            _0x814e53.SAP_type = _0x1365c2 >> 0x1c & 0x7;
            _0x814e53.SAP_delta_time = 0xfffffff & _0x1365c2;
          }
        });
        _0x1d941e.SingleItemTypeReferenceBox = function (_0x664edf, _0xdc56fd, _0xf80331, _0x25fb45) {
          _0x1d941e.Box.call(this, _0x664edf, _0xdc56fd);
          this.hdr_size = _0xf80331;
          this.start = _0x25fb45;
        };
        _0x1d941e.SingleItemTypeReferenceBox.prototype = new _0x1d941e.Box();
        _0x1d941e.SingleItemTypeReferenceBox.prototype.parse = function (_0x185bfb) {
          this.from_item_ID = _0x185bfb.readUint16();
          var _0x5b65f1 = _0x185bfb.readUint16();
          this.references = [];
          for (var _0x3806f6 = 0x0; _0x3806f6 < _0x5b65f1; _0x3806f6++) {
            this.references[_0x3806f6] = _0x185bfb.readUint16();
          }
        };
        _0x1d941e.SingleItemTypeReferenceBoxLarge = function (_0x56d9c3, _0x25905c, _0x5b4406, _0x55f308) {
          _0x1d941e.Box.call(this, _0x56d9c3, _0x25905c);
          this.hdr_size = _0x5b4406;
          this.start = _0x55f308;
        };
        _0x1d941e.SingleItemTypeReferenceBoxLarge.prototype = new _0x1d941e.Box();
        _0x1d941e.SingleItemTypeReferenceBoxLarge.prototype.parse = function (_0x367f0f) {
          this.from_item_ID = _0x367f0f.readUint32();
          var _0x320fc3 = _0x367f0f.readUint16();
          this.references = [];
          for (var _0x18641e = 0x0; _0x18641e < _0x320fc3; _0x18641e++) {
            this.references[_0x18641e] = _0x367f0f.readUint32();
          }
        };
        _0x1d941e.createFullBoxCtor("SmDm", function (_0x5bdd4c) {
          this.primaryRChromaticity_x = _0x5bdd4c.readUint16();
          this.primaryRChromaticity_y = _0x5bdd4c.readUint16();
          this.primaryGChromaticity_x = _0x5bdd4c.readUint16();
          this.primaryGChromaticity_y = _0x5bdd4c.readUint16();
          this.primaryBChromaticity_x = _0x5bdd4c.readUint16();
          this.primaryBChromaticity_y = _0x5bdd4c.readUint16();
          this.whitePointChromaticity_x = _0x5bdd4c.readUint16();
          this.whitePointChromaticity_y = _0x5bdd4c.readUint16();
          this.luminanceMax = _0x5bdd4c.readUint32();
          this.luminanceMin = _0x5bdd4c.readUint32();
        });
        _0x1d941e.createFullBoxCtor("smhd", function (_0x15b197) {
          this.balance = _0x15b197.readUint16();
          _0x15b197.readUint16();
        });
        _0x1d941e.createFullBoxCtor('ssix', function (_0x290c20) {
          this.subsegments = [];
          var _0x4acf26 = _0x290c20.readUint32();
          for (var _0x9dc6a2 = 0x0; _0x9dc6a2 < _0x4acf26; _0x9dc6a2++) {
            var _0x19df91 = {};
            this.subsegments.push(_0x19df91);
            _0x19df91.ranges = [];
            var _0x20251f = _0x290c20.readUint32();
            for (var _0x3deae1 = 0x0; _0x3deae1 < _0x20251f; _0x3deae1++) {
              var _0x3b8995 = {};
              _0x19df91.ranges.push(_0x3b8995);
              _0x3b8995.level = _0x290c20.readUint8();
              _0x3b8995.range_size = _0x290c20.readUint24();
            }
          }
        });
        _0x1d941e.createFullBoxCtor("stco", function (_0xa455cb) {
          var _0x5f4951;
          _0x5f4951 = _0xa455cb.readUint32();
          this.chunk_offsets = [];
          if (0x0 === this.version) {
            for (var _0x6f0449 = 0x0; _0x6f0449 < _0x5f4951; _0x6f0449++) {
              this.chunk_offsets.push(_0xa455cb.readUint32());
            }
          }
        });
        _0x1d941e.createFullBoxCtor("stdp", function (_0x1e36a1) {
          var _0x5c72f3 = (this.size - this.hdr_size) / 0x2;
          this.priority = [];
          for (var _0x2dc749 = 0x0; _0x2dc749 < _0x5c72f3; _0x2dc749++) {
            this.priority[_0x2dc749] = _0x1e36a1.readUint16();
          }
        });
        _0x1d941e.createFullBoxCtor('sthd');
        _0x1d941e.createFullBoxCtor("stri", function (_0x2c4e31) {
          this.switch_group = _0x2c4e31.readUint16();
          this.alternate_group = _0x2c4e31.readUint16();
          this.sub_track_id = _0x2c4e31.readUint32();
          var _0x5b19a3 = (this.size - this.hdr_size - 0x8) / 0x4;
          this.attribute_list = [];
          for (var _0x485885 = 0x0; _0x485885 < _0x5b19a3; _0x485885++) {
            this.attribute_list[_0x485885] = _0x2c4e31.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor('stsc', function (_0x220f14) {
          var _0x3e5e29;
          var _0x44da50;
          _0x3e5e29 = _0x220f14.readUint32();
          this.first_chunk = [];
          this.samples_per_chunk = [];
          this.sample_description_index = [];
          if (0x0 === this.version) {
            for (_0x44da50 = 0x0; _0x44da50 < _0x3e5e29; _0x44da50++) {
              this.first_chunk.push(_0x220f14.readUint32());
              this.samples_per_chunk.push(_0x220f14.readUint32());
              this.sample_description_index.push(_0x220f14.readUint32());
            }
          }
        });
        _0x1d941e.createFullBoxCtor("stsd", function (_0x3ca2dc) {
          var _0x2d2e98;
          var _0x5759a7;
          var _0x2f16e7;
          var _0x31bf33;
          this.entries = [];
          _0x2f16e7 = _0x3ca2dc.readUint32();
          for (_0x2d2e98 = 0x1; _0x2d2e98 <= _0x2f16e7; _0x2d2e98++) {
            if ((_0x5759a7 = _0x1d941e.parseOneBox(_0x3ca2dc, true, this.size - (_0x3ca2dc.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            if (_0x1d941e[_0x5759a7.type + "SampleEntry"]) {
              (_0x31bf33 = new _0x1d941e[_0x5759a7.type + "SampleEntry"](_0x5759a7.size)).hdr_size = _0x5759a7.hdr_size;
              _0x31bf33.start = _0x5759a7.start;
            } else {
              _0x8cf1a.warn("BoxParser", "Unknown sample entry type: " + _0x5759a7.type);
              _0x31bf33 = new _0x1d941e.SampleEntry(_0x5759a7.type, _0x5759a7.size, _0x5759a7.hdr_size, _0x5759a7.start);
            }
            if (_0x31bf33.write === _0x1d941e.SampleEntry.prototype.write) {
              _0x8cf1a.info("BoxParser", "SampleEntry " + _0x31bf33.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
              _0x31bf33.parseDataAndRewind(_0x3ca2dc);
            }
            _0x31bf33.parse(_0x3ca2dc);
            this.entries.push(_0x31bf33);
          }
        });
        _0x1d941e.createFullBoxCtor("stsg", function (_0x279519) {
          this.grouping_type = _0x279519.readUint32();
          var _0x46bfdd = _0x279519.readUint16();
          this.group_description_index = [];
          for (var _0x4aaffe = 0x0; _0x4aaffe < _0x46bfdd; _0x4aaffe++) {
            this.group_description_index[_0x4aaffe] = _0x279519.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor('stsh', function (_0x4974d2) {
          var _0x3dfc01;
          var _0x47e5d3;
          _0x3dfc01 = _0x4974d2.readUint32();
          this.shadowed_sample_numbers = [];
          this.sync_sample_numbers = [];
          if (0x0 === this.version) {
            for (_0x47e5d3 = 0x0; _0x47e5d3 < _0x3dfc01; _0x47e5d3++) {
              this.shadowed_sample_numbers.push(_0x4974d2.readUint32());
              this.sync_sample_numbers.push(_0x4974d2.readUint32());
            }
          }
        });
        _0x1d941e.createFullBoxCtor("stss", function (_0x22cdb4) {
          var _0x4919d0;
          var _0x24629b;
          _0x24629b = _0x22cdb4.readUint32();
          if (0x0 === this.version) {
            this.sample_numbers = [];
            for (_0x4919d0 = 0x0; _0x4919d0 < _0x24629b; _0x4919d0++) {
              this.sample_numbers.push(_0x22cdb4.readUint32());
            }
          }
        });
        _0x1d941e.createFullBoxCtor("stsz", function (_0x83a2fd) {
          var _0x2864b3;
          this.sample_sizes = [];
          if (0x0 === this.version) {
            this.sample_size = _0x83a2fd.readUint32();
            this.sample_count = _0x83a2fd.readUint32();
            for (_0x2864b3 = 0x0; _0x2864b3 < this.sample_count; _0x2864b3++) {
              if (0x0 === this.sample_size) {
                this.sample_sizes.push(_0x83a2fd.readUint32());
              } else {
                this.sample_sizes[_0x2864b3] = this.sample_size;
              }
            }
          }
        });
        _0x1d941e.createFullBoxCtor('stts', function (_0x5d3355) {
          var _0x103ad8;
          var _0x26bdcc;
          var _0x193249;
          _0x103ad8 = _0x5d3355.readUint32();
          this.sample_counts = [];
          this.sample_deltas = [];
          if (0x0 === this.version) {
            for (_0x26bdcc = 0x0; _0x26bdcc < _0x103ad8; _0x26bdcc++) {
              this.sample_counts.push(_0x5d3355.readUint32());
              if ((_0x193249 = _0x5d3355.readInt32()) < 0x0) {
                _0x8cf1a.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
                _0x193249 = 0x1;
              }
              this.sample_deltas.push(_0x193249);
            }
          }
        });
        _0x1d941e.createFullBoxCtor("stvi", function (_0x393789) {
          var _0x8f3528 = _0x393789.readUint32();
          this.single_view_allowed = 0x3 & _0x8f3528;
          this.stereo_scheme = _0x393789.readUint32();
          var _0x415ba7;
          var _0x40790f;
          var _0x3c51b7 = _0x393789.readUint32();
          this.stereo_indication_type = _0x393789.readString(_0x3c51b7);
          for (this.boxes = []; _0x393789.getPosition() < this.start + this.size;) {
            if ((_0x415ba7 = _0x1d941e.parseOneBox(_0x393789, false, this.size - (_0x393789.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            _0x40790f = _0x415ba7.box;
            this.boxes.push(_0x40790f);
            this[_0x40790f.type] = _0x40790f;
          }
        });
        _0x1d941e.createBoxCtor("styp", function (_0x4de7e3) {
          _0x1d941e.ftypBox.prototype.parse.call(this, _0x4de7e3);
        });
        _0x1d941e.createFullBoxCtor("stz2", function (_0x357ec4) {
          var _0x5027b6;
          var _0x1e0102;
          this.sample_sizes = [];
          if (0x0 === this.version) {
            this.reserved = _0x357ec4.readUint24();
            this.field_size = _0x357ec4.readUint8();
            _0x1e0102 = _0x357ec4.readUint32();
            if (0x4 === this.field_size) {
              for (_0x5027b6 = 0x0; _0x5027b6 < _0x1e0102; _0x5027b6 += 0x2) {
                var _0x1e461c = _0x357ec4.readUint8();
                this.sample_sizes[_0x5027b6] = _0x1e461c >> 0x4 & 0xf;
                this.sample_sizes[_0x5027b6 + 0x1] = 0xf & _0x1e461c;
              }
            } else {
              if (0x8 === this.field_size) {
                for (_0x5027b6 = 0x0; _0x5027b6 < _0x1e0102; _0x5027b6++) {
                  this.sample_sizes[_0x5027b6] = _0x357ec4.readUint8();
                }
              } else {
                if (0x10 === this.field_size) {
                  for (_0x5027b6 = 0x0; _0x5027b6 < _0x1e0102; _0x5027b6++) {
                    this.sample_sizes[_0x5027b6] = _0x357ec4.readUint16();
                  }
                } else {
                  _0x8cf1a.error("BoxParser", "Error in length field in stz2 box");
                }
              }
            }
          }
        });
        _0x1d941e.createFullBoxCtor("subs", function (_0x58f766) {
          var _0x32a3e6;
          var _0x33e26c;
          var _0x237a64;
          var _0xf82105;
          _0x237a64 = _0x58f766.readUint32();
          this.entries = [];
          for (_0x32a3e6 = 0x0; _0x32a3e6 < _0x237a64; _0x32a3e6++) {
            var _0x427c2b = {};
            this.entries[_0x32a3e6] = _0x427c2b;
            _0x427c2b.sample_delta = _0x58f766.readUint32();
            _0x427c2b.subsamples = [];
            if ((_0xf82105 = _0x58f766.readUint16()) > 0x0) {
              for (_0x33e26c = 0x0; _0x33e26c < _0xf82105; _0x33e26c++) {
                var _0x561c4d = {};
                _0x427c2b.subsamples.push(_0x561c4d);
                if (0x1 == this.version) {
                  _0x561c4d.size = _0x58f766.readUint32();
                } else {
                  _0x561c4d.size = _0x58f766.readUint16();
                }
                _0x561c4d.priority = _0x58f766.readUint8();
                _0x561c4d.discardable = _0x58f766.readUint8();
                _0x561c4d.codec_specific_parameters = _0x58f766.readUint32();
              }
            }
          }
        });
        _0x1d941e.createFullBoxCtor("tenc", function (_0x235c3e) {
          _0x235c3e.readUint8();
          if (0x0 === this.version) {
            _0x235c3e.readUint8();
          } else {
            var _0x5d0140 = _0x235c3e.readUint8();
            this.default_crypt_byte_block = _0x5d0140 >> 0x4 & 0xf;
            this.default_skip_byte_block = 0xf & _0x5d0140;
          }
          this.default_isProtected = _0x235c3e.readUint8();
          this.default_Per_Sample_IV_Size = _0x235c3e.readUint8();
          this.default_KID = _0x1d941e.parseHex16(_0x235c3e);
          if (0x1 === this.default_isProtected && 0x0 === this.default_Per_Sample_IV_Size) {
            this.default_constant_IV_size = _0x235c3e.readUint8();
            this.default_constant_IV = _0x235c3e.readUint8Array(this.default_constant_IV_size);
          }
        });
        _0x1d941e.createFullBoxCtor("tfdt", function (_0x583031) {
          if (0x1 == this.version) {
            this.baseMediaDecodeTime = _0x583031.readUint64();
          } else {
            this.baseMediaDecodeTime = _0x583031.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor('tfhd', function (_0x1bef1c) {
          var _0x331c87 = 0x0;
          this.track_id = _0x1bef1c.readUint32();
          if (this.size - this.hdr_size > _0x331c87 && this.flags & _0x1d941e.TFHD_FLAG_BASE_DATA_OFFSET) {
            this.base_data_offset = _0x1bef1c.readUint64();
            _0x331c87 += 0x8;
          } else {
            this.base_data_offset = 0x0;
          }
          if (this.size - this.hdr_size > _0x331c87 && this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DESC) {
            this.default_sample_description_index = _0x1bef1c.readUint32();
            _0x331c87 += 0x4;
          } else {
            this.default_sample_description_index = 0x0;
          }
          if (this.size - this.hdr_size > _0x331c87 && this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DUR) {
            this.default_sample_duration = _0x1bef1c.readUint32();
            _0x331c87 += 0x4;
          } else {
            this.default_sample_duration = 0x0;
          }
          if (this.size - this.hdr_size > _0x331c87 && this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_SIZE) {
            this.default_sample_size = _0x1bef1c.readUint32();
            _0x331c87 += 0x4;
          } else {
            this.default_sample_size = 0x0;
          }
          if (this.size - this.hdr_size > _0x331c87 && this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_FLAGS) {
            this.default_sample_flags = _0x1bef1c.readUint32();
            _0x331c87 += 0x4;
          } else {
            this.default_sample_flags = 0x0;
          }
        });
        _0x1d941e.createFullBoxCtor("tfra", function (_0x18b0b2) {
          this.track_ID = _0x18b0b2.readUint32();
          _0x18b0b2.readUint24();
          var _0x5e69ce = _0x18b0b2.readUint8();
          this.length_size_of_traf_num = _0x5e69ce >> 0x4 & 0x3;
          this.length_size_of_trun_num = _0x5e69ce >> 0x2 & 0x3;
          this.length_size_of_sample_num = 0x3 & _0x5e69ce;
          this.entries = [];
          var _0x3acde2 = _0x18b0b2.readUint32();
          for (var _0x201200 = 0x0; _0x201200 < _0x3acde2; _0x201200++) {
            if (0x1 === this.version) {
              this.time = _0x18b0b2.readUint64();
              this.moof_offset = _0x18b0b2.readUint64();
            } else {
              this.time = _0x18b0b2.readUint32();
              this.moof_offset = _0x18b0b2.readUint32();
            }
            this.traf_number = _0x18b0b2['readUint' + 0x8 * (this.length_size_of_traf_num + 0x1)]();
            this.trun_number = _0x18b0b2["readUint" + 0x8 * (this.length_size_of_trun_num + 0x1)]();
            this.sample_number = _0x18b0b2["readUint" + 0x8 * (this.length_size_of_sample_num + 0x1)]();
          }
        });
        _0x1d941e.createFullBoxCtor('tkhd', function (_0x2b1ec8) {
          if (0x1 == this.version) {
            this.creation_time = _0x2b1ec8.readUint64();
            this.modification_time = _0x2b1ec8.readUint64();
            this.track_id = _0x2b1ec8.readUint32();
            _0x2b1ec8.readUint32();
            this.duration = _0x2b1ec8.readUint64();
          } else {
            this.creation_time = _0x2b1ec8.readUint32();
            this.modification_time = _0x2b1ec8.readUint32();
            this.track_id = _0x2b1ec8.readUint32();
            _0x2b1ec8.readUint32();
            this.duration = _0x2b1ec8.readUint32();
          }
          _0x2b1ec8.readUint32Array(0x2);
          this.layer = _0x2b1ec8.readInt16();
          this.alternate_group = _0x2b1ec8.readInt16();
          this.volume = _0x2b1ec8.readInt16() >> 0x8;
          _0x2b1ec8.readUint16();
          this.matrix = _0x2b1ec8.readInt32Array(0x9);
          this.width = _0x2b1ec8.readUint32();
          this.height = _0x2b1ec8.readUint32();
        });
        _0x1d941e.createBoxCtor('tmax', function (_0x5b7c4d) {
          this.time = _0x5b7c4d.readUint32();
        });
        _0x1d941e.createBoxCtor("tmin", function (_0x5a4e07) {
          this.time = _0x5a4e07.readUint32();
        });
        _0x1d941e.createBoxCtor("totl", function (_0x45e7e1) {
          this.bytessent = _0x45e7e1.readUint32();
        });
        _0x1d941e.createBoxCtor("tpay", function (_0xa1ae9d) {
          this.bytessent = _0xa1ae9d.readUint32();
        });
        _0x1d941e.createBoxCtor("tpyl", function (_0x3f6780) {
          this.bytessent = _0x3f6780.readUint64();
        });
        _0x1d941e.TrackGroupTypeBox.prototype.parse = function (_0x4d57a2) {
          this.parseFullHeader(_0x4d57a2);
          this.track_group_id = _0x4d57a2.readUint32();
        };
        _0x1d941e.createTrackGroupCtor("msrc");
        _0x1d941e.TrackReferenceTypeBox = function (_0x5becab, _0x4d26f0, _0x1f2da9, _0xad586f) {
          _0x1d941e.Box.call(this, _0x5becab, _0x4d26f0);
          this.hdr_size = _0x1f2da9;
          this.start = _0xad586f;
        };
        _0x1d941e.TrackReferenceTypeBox.prototype = new _0x1d941e.Box();
        _0x1d941e.TrackReferenceTypeBox.prototype.parse = function (_0x3b95c3) {
          this.track_ids = _0x3b95c3.readUint32Array((this.size - this.hdr_size) / 0x4);
        };
        _0x1d941e.trefBox.prototype.parse = function (_0xa6268a) {
          var _0xec9da;
          for (var _0x50469e; _0xa6268a.getPosition() < this.start + this.size;) {
            if ((_0xec9da = _0x1d941e.parseOneBox(_0xa6268a, true, this.size - (_0xa6268a.getPosition() - this.start))).code !== 0x1) {
              return;
            }
            if ((_0x50469e = new _0x1d941e.TrackReferenceTypeBox(_0xec9da.type, _0xec9da.size, _0xec9da.hdr_size, _0xec9da.start)).write === _0x1d941e.Box.prototype.write && "mdat" !== _0x50469e.type) {
              _0x8cf1a.info('BoxParser', "TrackReference " + _0x50469e.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
              _0x50469e.parseDataAndRewind(_0xa6268a);
            }
            _0x50469e.parse(_0xa6268a);
            this.boxes.push(_0x50469e);
          }
        };
        _0x1d941e.createFullBoxCtor('trep', function (_0x190c73) {
          this.track_ID = _0x190c73.readUint32();
          for (this.boxes = []; _0x190c73.getPosition() < this.start + this.size;) {
            ret = _0x1d941e.parseOneBox(_0x190c73, false, this.size - (_0x190c73.getPosition() - this.start));
            if (ret.code !== 0x1) {
              return;
            }
            box = ret.box;
            this.boxes.push(box);
          }
        });
        _0x1d941e.createFullBoxCtor("trex", function (_0x398b2d) {
          this.track_id = _0x398b2d.readUint32();
          this.default_sample_description_index = _0x398b2d.readUint32();
          this.default_sample_duration = _0x398b2d.readUint32();
          this.default_sample_size = _0x398b2d.readUint32();
          this.default_sample_flags = _0x398b2d.readUint32();
        });
        _0x1d941e.createBoxCtor("trpy", function (_0x3e9983) {
          this.bytessent = _0x3e9983.readUint64();
        });
        _0x1d941e.createFullBoxCtor("trun", function (_0x2a65c7) {
          var _0x3e0843 = 0x0;
          this.sample_count = _0x2a65c7.readUint32();
          _0x3e0843 += 0x4;
          if (this.size - this.hdr_size > _0x3e0843 && this.flags & _0x1d941e.TRUN_FLAGS_DATA_OFFSET) {
            this.data_offset = _0x2a65c7.readInt32();
            _0x3e0843 += 0x4;
          } else {
            this.data_offset = 0x0;
          }
          if (this.size - this.hdr_size > _0x3e0843 && this.flags & _0x1d941e.TRUN_FLAGS_FIRST_FLAG) {
            this.first_sample_flags = _0x2a65c7.readUint32();
            _0x3e0843 += 0x4;
          } else {
            this.first_sample_flags = 0x0;
          }
          this.sample_duration = [];
          this.sample_size = [];
          this.sample_flags = [];
          this.sample_composition_time_offset = [];
          if (this.size - this.hdr_size > _0x3e0843) {
            for (var _0x42e920 = 0x0; _0x42e920 < this.sample_count; _0x42e920++) {
              if (this.flags & _0x1d941e.TRUN_FLAGS_DURATION) {
                this.sample_duration[_0x42e920] = _0x2a65c7.readUint32();
              }
              if (this.flags & _0x1d941e.TRUN_FLAGS_SIZE) {
                this.sample_size[_0x42e920] = _0x2a65c7.readUint32();
              }
              if (this.flags & _0x1d941e.TRUN_FLAGS_FLAGS) {
                this.sample_flags[_0x42e920] = _0x2a65c7.readUint32();
              }
              if (this.flags & _0x1d941e.TRUN_FLAGS_CTS_OFFSET) {
                if (0x0 === this.version) {
                  this.sample_composition_time_offset[_0x42e920] = _0x2a65c7.readUint32();
                } else {
                  this.sample_composition_time_offset[_0x42e920] = _0x2a65c7.readInt32();
                }
              }
            }
          }
        });
        _0x1d941e.createFullBoxCtor("tsel", function (_0x243158) {
          this.switch_group = _0x243158.readUint32();
          var _0x20465f = (this.size - this.hdr_size - 0x4) / 0x4;
          this.attribute_list = [];
          for (var _0xf7e459 = 0x0; _0xf7e459 < _0x20465f; _0xf7e459++) {
            this.attribute_list[_0xf7e459] = _0x243158.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor("txtC", function (_0x2be1b7) {
          this.config = _0x2be1b7.readCString();
        });
        _0x1d941e.createFullBoxCtor("url ", function (_0x420d19) {
          if (0x1 !== this.flags) {
            this.location = _0x420d19.readCString();
          }
        });
        _0x1d941e.createFullBoxCtor("urn ", function (_0x3c5786) {
          this.name = _0x3c5786.readCString();
          if (this.size - this.hdr_size - this.name.length - 0x1 > 0x0) {
            this.location = _0x3c5786.readCString();
          }
        });
        _0x1d941e.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", true, false, function (_0x23f38b) {
          this.LiveServerManifest = _0x23f38b.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        });
        _0x1d941e.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", true, false, function (_0x3b0cb6) {
          this.system_id = _0x1d941e.parseHex16(_0x3b0cb6);
          var _0x181ee1 = _0x3b0cb6.readUint32();
          if (_0x181ee1 > 0x0) {
            this.data = _0x3b0cb6.readUint8Array(_0x181ee1);
          }
        });
        _0x1d941e.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", true, false);
        _0x1d941e.createUUIDBox("8974dbce7be74c5184f97148f9882554", true, false, function (_0x5dae7c) {
          this.default_AlgorithmID = _0x5dae7c.readUint24();
          this.default_IV_size = _0x5dae7c.readUint8();
          this.default_KID = _0x1d941e.parseHex16(_0x5dae7c);
        });
        _0x1d941e.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", true, false, function (_0x46c2e8) {
          this.fragment_count = _0x46c2e8.readUint8();
          this.entries = [];
          for (var _0x4ae575 = 0x0; _0x4ae575 < this.fragment_count; _0x4ae575++) {
            var _0x2613b4 = {};
            var _0x7a802c = 0x0;
            var _0x598f07 = 0x0;
            if (0x1 === this.version) {
              _0x7a802c = _0x46c2e8.readUint64();
              _0x598f07 = _0x46c2e8.readUint64();
            } else {
              _0x7a802c = _0x46c2e8.readUint32();
              _0x598f07 = _0x46c2e8.readUint32();
            }
            _0x2613b4.absolute_time = _0x7a802c;
            _0x2613b4.absolute_duration = _0x598f07;
            this.entries.push(_0x2613b4);
          }
        });
        _0x1d941e.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", true, false, function (_0xb11eb1) {
          if (0x1 === this.version) {
            this.absolute_time = _0xb11eb1.readUint64();
            this.duration = _0xb11eb1.readUint64();
          } else {
            this.absolute_time = _0xb11eb1.readUint32();
            this.duration = _0xb11eb1.readUint32();
          }
        });
        _0x1d941e.createFullBoxCtor("vmhd", function (_0x135ecb) {
          this.graphicsmode = _0x135ecb.readUint16();
          this.opcolor = _0x135ecb.readUint16Array(0x3);
        });
        _0x1d941e.createFullBoxCtor("vpcC", function (_0x3919f1) {
          var _0x43ae10;
          if (0x1 === this.version) {
            this.profile = _0x3919f1.readUint8();
            this.level = _0x3919f1.readUint8();
            _0x43ae10 = _0x3919f1.readUint8();
            this.bitDepth = _0x43ae10 >> 0x4;
            this.chromaSubsampling = _0x43ae10 >> 0x1 & 0x7;
            this.videoFullRangeFlag = 0x1 & _0x43ae10;
            this.colourPrimaries = _0x3919f1.readUint8();
            this.transferCharacteristics = _0x3919f1.readUint8();
            this.matrixCoefficients = _0x3919f1.readUint8();
            this.codecIntializationDataSize = _0x3919f1.readUint16();
            this.codecIntializationData = _0x3919f1.readUint8Array(this.codecIntializationDataSize);
          } else {
            this.profile = _0x3919f1.readUint8();
            this.level = _0x3919f1.readUint8();
            _0x43ae10 = _0x3919f1.readUint8();
            this.bitDepth = _0x43ae10 >> 0x4 & 0xf;
            this.colorSpace = 0xf & _0x43ae10;
            _0x43ae10 = _0x3919f1.readUint8();
            this.chromaSubsampling = _0x43ae10 >> 0x4 & 0xf;
            this.transferFunction = _0x43ae10 >> 0x1 & 0x7;
            this.videoFullRangeFlag = 0x1 & _0x43ae10;
            this.codecIntializationDataSize = _0x3919f1.readUint16();
            this.codecIntializationData = _0x3919f1.readUint8Array(this.codecIntializationDataSize);
          }
        });
        _0x1d941e.createBoxCtor("vttC", function (_0x1e7961) {
          this.text = _0x1e7961.readString(this.size - this.hdr_size);
        });
        _0x1d941e.createFullBoxCtor("vvcC", function (_0x16be89) {
          var _0x503539;
          var _0x41b519;
          var _0x4b665b = {
            'held_bits': undefined,
            'num_held_bits': 0x0,
            'stream_read_1_bytes': function (_0x4752d3) {
              this.held_bits = _0x4752d3.readUint8();
              this.num_held_bits = 0x8;
            },
            'stream_read_2_bytes': function (_0x224f9d) {
              this.held_bits = _0x224f9d.readUint16();
              this.num_held_bits = 0x10;
            },
            'extract_bits': function (_0x10b034) {
              var _0x59fb4b = this.held_bits >> this.num_held_bits - _0x10b034 & (0x1 << _0x10b034) - 0x1;
              this.num_held_bits -= _0x10b034;
              return _0x59fb4b;
            }
          };
          _0x4b665b.stream_read_1_bytes(_0x16be89);
          _0x4b665b.extract_bits(0x5);
          this.lengthSizeMinusOne = _0x4b665b.extract_bits(0x2);
          this.ptl_present_flag = _0x4b665b.extract_bits(0x1);
          if (this.ptl_present_flag) {
            _0x4b665b.stream_read_2_bytes(_0x16be89);
            this.ols_idx = _0x4b665b.extract_bits(0x9);
            this.num_sublayers = _0x4b665b.extract_bits(0x3);
            this.constant_frame_rate = _0x4b665b.extract_bits(0x2);
            this.chroma_format_idc = _0x4b665b.extract_bits(0x2);
            _0x4b665b.stream_read_1_bytes(_0x16be89);
            this.bit_depth_minus8 = _0x4b665b.extract_bits(0x3);
            _0x4b665b.extract_bits(0x5);
            _0x4b665b.stream_read_2_bytes(_0x16be89);
            _0x4b665b.extract_bits(0x2);
            this.num_bytes_constraint_info = _0x4b665b.extract_bits(0x6);
            this.general_profile_idc = _0x4b665b.extract_bits(0x7);
            this.general_tier_flag = _0x4b665b.extract_bits(0x1);
            this.general_level_idc = _0x16be89.readUint8();
            _0x4b665b.stream_read_1_bytes(_0x16be89);
            this.ptl_frame_only_constraint_flag = _0x4b665b.extract_bits(0x1);
            this.ptl_multilayer_enabled_flag = _0x4b665b.extract_bits(0x1);
            this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
            if (this.num_bytes_constraint_info) {
              for (_0x503539 = 0x0; _0x503539 < this.num_bytes_constraint_info - 0x1; _0x503539++) {
                var _0x139c03 = _0x4b665b.extract_bits(0x6);
                _0x4b665b.stream_read_1_bytes(_0x16be89);
                var _0x35d5b8 = _0x4b665b.extract_bits(0x2);
                this.general_constraint_info[_0x503539] = _0x139c03 << 0x2 | _0x35d5b8;
              }
              this.general_constraint_info[this.num_bytes_constraint_info - 0x1] = _0x4b665b.extract_bits(0x6);
            } else {
              _0x4b665b.extract_bits(0x6);
            }
            _0x4b665b.stream_read_1_bytes(_0x16be89);
            this.ptl_sublayer_present_mask = 0x0;
            for (_0x41b519 = this.num_sublayers - 0x2; _0x41b519 >= 0x0; --_0x41b519) {
              var _0x260c12 = _0x4b665b.extract_bits(0x1);
              this.ptl_sublayer_present_mask |= _0x260c12 << _0x41b519;
            }
            for (_0x41b519 = this.num_sublayers; _0x41b519 <= 0x8 && this.num_sublayers > 0x1; ++_0x41b519) {
              _0x4b665b.extract_bits(0x1);
            }
            for (_0x41b519 = this.num_sublayers - 0x2; _0x41b519 >= 0x0; --_0x41b519) {
              if (this.ptl_sublayer_present_mask & 0x1 << _0x41b519) {
                this.sublayer_level_idc[_0x41b519] = _0x16be89.readUint8();
              }
            }
            this.ptl_num_sub_profiles = _0x16be89.readUint8();
            this.general_sub_profile_idc = [];
            if (this.ptl_num_sub_profiles) {
              for (_0x503539 = 0x0; _0x503539 < this.ptl_num_sub_profiles; _0x503539++) {
                this.general_sub_profile_idc.push(_0x16be89.readUint32());
              }
            }
            this.max_picture_width = _0x16be89.readUint16();
            this.max_picture_height = _0x16be89.readUint16();
            this.avg_frame_rate = _0x16be89.readUint16();
          }
          this.nalu_arrays = [];
          var _0xe76d0a = _0x16be89.readUint8();
          for (_0x503539 = 0x0; _0x503539 < _0xe76d0a; _0x503539++) {
            var _0xa59340 = [];
            this.nalu_arrays.push(_0xa59340);
            _0x4b665b.stream_read_1_bytes(_0x16be89);
            _0xa59340.completeness = _0x4b665b.extract_bits(0x1);
            _0x4b665b.extract_bits(0x2);
            _0xa59340.nalu_type = _0x4b665b.extract_bits(0x5);
            var _0x4bafa8 = 0x1;
            if (0xd != _0xa59340.nalu_type && 0xc != _0xa59340.nalu_type) {
              _0x4bafa8 = _0x16be89.readUint16();
            }
            for (_0x41b519 = 0x0; _0x41b519 < _0x4bafa8; _0x41b519++) {
              var _0x469f45 = _0x16be89.readUint16();
              _0xa59340.push({
                'data': _0x16be89.readUint8Array(_0x469f45),
                'length': _0x469f45
              });
            }
          }
        });
        _0x1d941e.createFullBoxCtor("vvnC", function (_0x5d1a65) {
          var _0x19a952 = strm.readUint8();
          this.lengthSizeMinusOne = 0x3 & _0x19a952;
        });
        _0x1d941e.SampleEntry.prototype.isVideo = function () {
          return false;
        };
        _0x1d941e.SampleEntry.prototype.isAudio = function () {
          return false;
        };
        _0x1d941e.SampleEntry.prototype.isSubtitle = function () {
          return false;
        };
        _0x1d941e.SampleEntry.prototype.isMetadata = function () {
          return false;
        };
        _0x1d941e.SampleEntry.prototype.isHint = function () {
          return false;
        };
        _0x1d941e.SampleEntry.prototype.getCodec = function () {
          return this.type.replace('.', '');
        };
        _0x1d941e.SampleEntry.prototype.getWidth = function () {
          return '';
        };
        _0x1d941e.SampleEntry.prototype.getHeight = function () {
          return '';
        };
        _0x1d941e.SampleEntry.prototype.getChannelCount = function () {
          return '';
        };
        _0x1d941e.SampleEntry.prototype.getSampleRate = function () {
          return '';
        };
        _0x1d941e.SampleEntry.prototype.getSampleSize = function () {
          return '';
        };
        _0x1d941e.VisualSampleEntry.prototype.isVideo = function () {
          return true;
        };
        _0x1d941e.VisualSampleEntry.prototype.getWidth = function () {
          return this.width;
        };
        _0x1d941e.VisualSampleEntry.prototype.getHeight = function () {
          return this.height;
        };
        _0x1d941e.AudioSampleEntry.prototype.isAudio = function () {
          return true;
        };
        _0x1d941e.AudioSampleEntry.prototype.getChannelCount = function () {
          return this.channel_count;
        };
        _0x1d941e.AudioSampleEntry.prototype.getSampleRate = function () {
          return this.samplerate;
        };
        _0x1d941e.AudioSampleEntry.prototype.getSampleSize = function () {
          return this.samplesize;
        };
        _0x1d941e.SubtitleSampleEntry.prototype.isSubtitle = function () {
          return true;
        };
        _0x1d941e.MetadataSampleEntry.prototype.isMetadata = function () {
          return true;
        };
        _0x1d941e.decimalToHex = function (_0x5411b0, _0x44a4e3) {
          var _0x2a561d = Number(_0x5411b0).toString(0x10);
          for (_0x44a4e3 = null == _0x44a4e3 ? _0x44a4e3 = 0x2 : _0x44a4e3; _0x2a561d.length < _0x44a4e3;) {
            _0x2a561d = '0' + _0x2a561d;
          }
          return _0x2a561d;
        };
        _0x1d941e.avc1SampleEntry.prototype.getCodec = _0x1d941e.avc2SampleEntry.prototype.getCodec = _0x1d941e.avc3SampleEntry.prototype.getCodec = _0x1d941e.avc4SampleEntry.prototype.getCodec = function () {
          var _0x25e848 = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          return this.avcC ? _0x25e848 + '.' + _0x1d941e.decimalToHex(this.avcC.AVCProfileIndication) + _0x1d941e.decimalToHex(this.avcC.profile_compatibility) + _0x1d941e.decimalToHex(this.avcC.AVCLevelIndication) : _0x25e848;
        };
        _0x1d941e.hev1SampleEntry.prototype.getCodec = _0x1d941e.hvc1SampleEntry.prototype.getCodec = function () {
          var _0x1d5669;
          var _0x5e3ecb = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          if (this.hvcC) {
            _0x5e3ecb += '.';
            switch (this.hvcC.general_profile_space) {
              case 0x0:
                _0x5e3ecb += '';
                break;
              case 0x1:
                _0x5e3ecb += 'A';
                break;
              case 0x2:
                _0x5e3ecb += 'B';
                break;
              case 0x3:
                _0x5e3ecb += 'C';
            }
            _0x5e3ecb += this.hvcC.general_profile_idc;
            _0x5e3ecb += '.';
            var _0x481dd9 = this.hvcC.general_profile_compatibility;
            var _0x12958b = 0x0;
            for (_0x1d5669 = 0x0; _0x1d5669 < 0x20 && (_0x12958b |= 0x1 & _0x481dd9, 0x1f != _0x1d5669); _0x1d5669++) {
              _0x12958b <<= 0x1;
              _0x481dd9 >>= 0x1;
            }
            _0x5e3ecb += _0x1d941e.decimalToHex(_0x12958b, 0x0);
            _0x5e3ecb += '.';
            if (0x0 === this.hvcC.general_tier_flag) {
              _0x5e3ecb += 'L';
            } else {
              _0x5e3ecb += 'H';
            }
            _0x5e3ecb += this.hvcC.general_level_idc;
            var _0x155c50 = false;
            var _0x3b7617 = '';
            for (_0x1d5669 = 0x5; _0x1d5669 >= 0x0; _0x1d5669--) {
              if (this.hvcC.general_constraint_indicator[_0x1d5669] || _0x155c50) {
                _0x3b7617 = '.' + _0x1d941e.decimalToHex(this.hvcC.general_constraint_indicator[_0x1d5669], 0x0) + _0x3b7617;
                _0x155c50 = true;
              }
            }
            _0x5e3ecb += _0x3b7617;
          }
          return _0x5e3ecb;
        };
        _0x1d941e.vvc1SampleEntry.prototype.getCodec = _0x1d941e.vvi1SampleEntry.prototype.getCodec = function () {
          var _0x5dda05;
          var _0x1a68f9 = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          if (this.vvcC) {
            _0x1a68f9 += '.' + this.vvcC.general_profile_idc;
            if (this.vvcC.general_tier_flag) {
              _0x1a68f9 += '.H';
            } else {
              _0x1a68f9 += '.L';
            }
            _0x1a68f9 += this.vvcC.general_level_idc;
            var _0x519e83 = '';
            if (this.vvcC.general_constraint_info) {
              var _0x1741cb;
              var _0x54b2b6 = [];
              var _0x449ddd = 0x0;
              _0x449ddd |= this.vvcC.ptl_frame_only_constraint << 0x7;
              _0x449ddd |= this.vvcC.ptl_multilayer_enabled << 0x6;
              for (_0x5dda05 = 0x0; _0x5dda05 < this.vvcC.general_constraint_info.length; ++_0x5dda05) {
                _0x449ddd |= this.vvcC.general_constraint_info[_0x5dda05] >> 0x2 & 0x3f;
                _0x54b2b6.push(_0x449ddd);
                if (_0x449ddd) {
                  _0x1741cb = _0x5dda05;
                }
                _0x449ddd = this.vvcC.general_constraint_info[_0x5dda05] >> 0x2 & 0x3;
              }
              if (undefined === _0x1741cb) {
                _0x519e83 = ".CA";
              } else {
                _0x519e83 = '.C';
                var _0x246058 = 0x0;
                var _0x2f2b2d = 0x0;
                for (_0x5dda05 = 0x0; _0x5dda05 <= _0x1741cb; ++_0x5dda05) {
                  _0x246058 = _0x246058 << 0x8 | _0x54b2b6[_0x5dda05];
                  for (_0x2f2b2d += 0x8; _0x2f2b2d >= 0x5;) {
                    _0x519e83 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[_0x246058 >> _0x2f2b2d - 0x5 & 0x1f];
                    _0x246058 &= (0x1 << (_0x2f2b2d -= 0x5)) - 0x1;
                  }
                }
                if (_0x2f2b2d) {
                  _0x519e83 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[0x1f & (_0x246058 <<= 0x5 - _0x2f2b2d)];
                }
              }
            }
            _0x1a68f9 += _0x519e83;
          }
          return _0x1a68f9;
        };
        _0x1d941e.mp4aSampleEntry.prototype.getCodec = function () {
          var _0x109c26 = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          if (this.esds && this.esds.esd) {
            var _0x4f31ba = this.esds.esd.getOTI();
            var _0xee1bfb = this.esds.esd.getAudioConfig();
            return _0x109c26 + '.' + _0x1d941e.decimalToHex(_0x4f31ba) + (_0xee1bfb ? '.' + _0xee1bfb : '');
          }
          return _0x109c26;
        };
        _0x1d941e.stxtSampleEntry.prototype.getCodec = function () {
          var _0x3a935b = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          return this.mime_format ? _0x3a935b + '.' + this.mime_format : _0x3a935b;
        };
        _0x1d941e.vp08SampleEntry.prototype.getCodec = _0x1d941e.vp09SampleEntry.prototype.getCodec = function () {
          var _0x564aca = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          var _0x131d4b = this.vpcC.level;
          if (0x0 == _0x131d4b) {
            _0x131d4b = '00';
          }
          var _0x43cc4f = this.vpcC.bitDepth;
          if (0x8 == _0x43cc4f) {
            _0x43cc4f = '08';
          }
          return _0x564aca + '.0' + this.vpcC.profile + '.' + _0x131d4b + '.' + _0x43cc4f;
        };
        _0x1d941e.av01SampleEntry.prototype.getCodec = function () {
          var _0x3c1d55;
          var _0x2699a0 = _0x1d941e.SampleEntry.prototype.getCodec.call(this);
          var _0x49a7c1 = this.av1C.seq_level_idx_0;
          if (_0x49a7c1 < 0xa) {
            _0x49a7c1 = '0' + _0x49a7c1;
          }
          if (0x2 === this.av1C.seq_profile && 0x1 === this.av1C.high_bitdepth) {
            _0x3c1d55 = 0x1 === this.av1C.twelve_bit ? '12' : '10';
          } else if (this.av1C.seq_profile <= 0x2) {
            _0x3c1d55 = 0x1 === this.av1C.high_bitdepth ? '10' : '08';
          }
          return _0x2699a0 + '.' + this.av1C.seq_profile + '.' + _0x49a7c1 + (this.av1C.seq_tier_0 ? 'H' : 'M') + '.' + _0x3c1d55;
        };
        _0x1d941e.Box.prototype.writeHeader = function (_0x29a9fc, _0x4ccf59) {
          this.size += 0x8;
          if (this.size > _0x31145a) {
            this.size += 0x8;
          }
          if ("uuid" === this.type) {
            this.size += 0x10;
          }
          _0x8cf1a.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + _0x29a9fc.getPosition() + (_0x4ccf59 || ''));
          if (this.size > _0x31145a) {
            _0x29a9fc.writeUint32(0x1);
          } else {
            this.sizePosition = _0x29a9fc.getPosition();
            _0x29a9fc.writeUint32(this.size);
          }
          _0x29a9fc.writeString(this.type, null, 0x4);
          if ("uuid" === this.type) {
            _0x29a9fc.writeUint8Array(this.uuid);
          }
          if (this.size > _0x31145a) {
            _0x29a9fc.writeUint64(this.size);
          }
        };
        _0x1d941e.FullBox.prototype.writeHeader = function (_0x3ac5d5) {
          this.size += 0x4;
          _0x1d941e.Box.prototype.writeHeader.call(this, _0x3ac5d5, " v=" + this.version + " f=" + this.flags);
          _0x3ac5d5.writeUint8(this.version);
          _0x3ac5d5.writeUint24(this.flags);
        };
        _0x1d941e.Box.prototype.write = function (_0x266070) {
          if ('mdat' === this.type) {
            if (this.data) {
              this.size = this.data.length;
              this.writeHeader(_0x266070);
              _0x266070.writeUint8Array(this.data);
            }
          } else {
            this.size = this.data ? this.data.length : 0x0;
            this.writeHeader(_0x266070);
            if (this.data) {
              _0x266070.writeUint8Array(this.data);
            }
          }
        };
        _0x1d941e.ContainerBox.prototype.write = function (_0xa6e056) {
          this.size = 0x0;
          this.writeHeader(_0xa6e056);
          for (var _0x230196 = 0x0; _0x230196 < this.boxes.length; _0x230196++) {
            if (this.boxes[_0x230196]) {
              this.boxes[_0x230196].write(_0xa6e056);
              this.size += this.boxes[_0x230196].size;
            }
          }
          _0x8cf1a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
          _0xa6e056.adjustUint32(this.sizePosition, this.size);
        };
        _0x1d941e.TrackReferenceTypeBox.prototype.write = function (_0x50807f) {
          this.size = 0x4 * this.track_ids.length;
          this.writeHeader(_0x50807f);
          _0x50807f.writeUint32Array(this.track_ids);
        };
        _0x1d941e.avcCBox.prototype.write = function (_0x22f2c9) {
          var _0x427d8c;
          this.size = 0x7;
          for (_0x427d8c = 0x0; _0x427d8c < this.SPS.length; _0x427d8c++) {
            this.size += 0x2 + this.SPS[_0x427d8c].length;
          }
          for (_0x427d8c = 0x0; _0x427d8c < this.PPS.length; _0x427d8c++) {
            this.size += 0x2 + this.PPS[_0x427d8c].length;
          }
          if (this.ext) {
            this.size += this.ext.length;
          }
          this.writeHeader(_0x22f2c9);
          _0x22f2c9.writeUint8(this.configurationVersion);
          _0x22f2c9.writeUint8(this.AVCProfileIndication);
          _0x22f2c9.writeUint8(this.profile_compatibility);
          _0x22f2c9.writeUint8(this.AVCLevelIndication);
          _0x22f2c9.writeUint8(this.lengthSizeMinusOne + 0xfc);
          _0x22f2c9.writeUint8(this.SPS.length + 0xe0);
          for (_0x427d8c = 0x0; _0x427d8c < this.SPS.length; _0x427d8c++) {
            _0x22f2c9.writeUint16(this.SPS[_0x427d8c].length);
            _0x22f2c9.writeUint8Array(this.SPS[_0x427d8c].nalu);
          }
          _0x22f2c9.writeUint8(this.PPS.length);
          for (_0x427d8c = 0x0; _0x427d8c < this.PPS.length; _0x427d8c++) {
            _0x22f2c9.writeUint16(this.PPS[_0x427d8c].length);
            _0x22f2c9.writeUint8Array(this.PPS[_0x427d8c].nalu);
          }
          if (this.ext) {
            _0x22f2c9.writeUint8Array(this.ext);
          }
        };
        _0x1d941e.co64Box.prototype.write = function (_0x4c496f) {
          var _0x464404;
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0x8 * this.chunk_offsets.length;
          this.writeHeader(_0x4c496f);
          _0x4c496f.writeUint32(this.chunk_offsets.length);
          for (_0x464404 = 0x0; _0x464404 < this.chunk_offsets.length; _0x464404++) {
            _0x4c496f.writeUint64(this.chunk_offsets[_0x464404]);
          }
        };
        _0x1d941e.cslgBox.prototype.write = function (_0x7b0008) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x14;
          this.writeHeader(_0x7b0008);
          _0x7b0008.writeInt32(this.compositionToDTSShift);
          _0x7b0008.writeInt32(this.leastDecodeToDisplayDelta);
          _0x7b0008.writeInt32(this.greatestDecodeToDisplayDelta);
          _0x7b0008.writeInt32(this.compositionStartTime);
          _0x7b0008.writeInt32(this.compositionEndTime);
        };
        _0x1d941e.cttsBox.prototype.write = function (_0x2d1e00) {
          var _0x34bccc;
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0x8 * this.sample_counts.length;
          this.writeHeader(_0x2d1e00);
          _0x2d1e00.writeUint32(this.sample_counts.length);
          for (_0x34bccc = 0x0; _0x34bccc < this.sample_counts.length; _0x34bccc++) {
            _0x2d1e00.writeUint32(this.sample_counts[_0x34bccc]);
            if (0x1 === this.version) {
              _0x2d1e00.writeInt32(this.sample_offsets[_0x34bccc]);
            } else {
              _0x2d1e00.writeUint32(this.sample_offsets[_0x34bccc]);
            }
          }
        };
        _0x1d941e.drefBox.prototype.write = function (_0x49d53b) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4;
          this.writeHeader(_0x49d53b);
          _0x49d53b.writeUint32(this.entries.length);
          for (var _0x34e00f = 0x0; _0x34e00f < this.entries.length; _0x34e00f++) {
            this.entries[_0x34e00f].write(_0x49d53b);
            this.size += this.entries[_0x34e00f].size;
          }
          _0x8cf1a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
          _0x49d53b.adjustUint32(this.sizePosition, this.size);
        };
        _0x1d941e.elngBox.prototype.write = function (_0x4d5e3b) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = this.extended_language.length;
          this.writeHeader(_0x4d5e3b);
          _0x4d5e3b.writeString(this.extended_language);
        };
        _0x1d941e.elstBox.prototype.write = function (_0x1bba8d) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0xc * this.entries.length;
          this.writeHeader(_0x1bba8d);
          _0x1bba8d.writeUint32(this.entries.length);
          for (var _0x45bf5b = 0x0; _0x45bf5b < this.entries.length; _0x45bf5b++) {
            var _0x45d973 = this.entries[_0x45bf5b];
            _0x1bba8d.writeUint32(_0x45d973.segment_duration);
            _0x1bba8d.writeInt32(_0x45d973.media_time);
            _0x1bba8d.writeInt16(_0x45d973.media_rate_integer);
            _0x1bba8d.writeInt16(_0x45d973.media_rate_fraction);
          }
        };
        _0x1d941e.emsgBox.prototype.write = function (_0x445a38) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x10 + this.message_data.length + (this.scheme_id_uri.length + 0x1) + (this.value.length + 0x1);
          this.writeHeader(_0x445a38);
          _0x445a38.writeCString(this.scheme_id_uri);
          _0x445a38.writeCString(this.value);
          _0x445a38.writeUint32(this.timescale);
          _0x445a38.writeUint32(this.presentation_time_delta);
          _0x445a38.writeUint32(this.event_duration);
          _0x445a38.writeUint32(this.id);
          _0x445a38.writeUint8Array(this.message_data);
        };
        _0x1d941e.ftypBox.prototype.write = function (_0x3a330b) {
          this.size = 0x8 + 0x4 * this.compatible_brands.length;
          this.writeHeader(_0x3a330b);
          _0x3a330b.writeString(this.major_brand, null, 0x4);
          _0x3a330b.writeUint32(this.minor_version);
          for (var _0x13f483 = 0x0; _0x13f483 < this.compatible_brands.length; _0x13f483++) {
            _0x3a330b.writeString(this.compatible_brands[_0x13f483], null, 0x4);
          }
        };
        _0x1d941e.hdlrBox.prototype.write = function (_0x3e66a8) {
          this.size = 0x14 + this.name.length + 0x1;
          this.version = 0x0;
          this.flags = 0x0;
          this.writeHeader(_0x3e66a8);
          _0x3e66a8.writeUint32(0x0);
          _0x3e66a8.writeString(this.handler, null, 0x4);
          _0x3e66a8.writeUint32(0x0);
          _0x3e66a8.writeUint32(0x0);
          _0x3e66a8.writeUint32(0x0);
          _0x3e66a8.writeCString(this.name);
        };
        _0x1d941e.kindBox.prototype.write = function (_0x229f53) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = this.schemeURI.length + 0x1 + (this.value.length + 0x1);
          this.writeHeader(_0x229f53);
          _0x229f53.writeCString(this.schemeURI);
          _0x229f53.writeCString(this.value);
        };
        _0x1d941e.mdhdBox.prototype.write = function (_0x529b55) {
          this.size = 0x14;
          this.flags = 0x0;
          this.version = 0x0;
          this.writeHeader(_0x529b55);
          _0x529b55.writeUint32(this.creation_time);
          _0x529b55.writeUint32(this.modification_time);
          _0x529b55.writeUint32(this.timescale);
          _0x529b55.writeUint32(this.duration);
          _0x529b55.writeUint16(this.language);
          _0x529b55.writeUint16(0x0);
        };
        _0x1d941e.mehdBox.prototype.write = function (_0x52ee2d) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4;
          this.writeHeader(_0x52ee2d);
          _0x52ee2d.writeUint32(this.fragment_duration);
        };
        _0x1d941e.mfhdBox.prototype.write = function (_0x4f0692) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4;
          this.writeHeader(_0x4f0692);
          _0x4f0692.writeUint32(this.sequence_number);
        };
        _0x1d941e.mvhdBox.prototype.write = function (_0x52ef6e) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x60;
          this.writeHeader(_0x52ef6e);
          _0x52ef6e.writeUint32(this.creation_time);
          _0x52ef6e.writeUint32(this.modification_time);
          _0x52ef6e.writeUint32(this.timescale);
          _0x52ef6e.writeUint32(this.duration);
          _0x52ef6e.writeUint32(this.rate);
          _0x52ef6e.writeUint16(this.volume << 0x8);
          _0x52ef6e.writeUint16(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32Array(this.matrix);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(0x0);
          _0x52ef6e.writeUint32(this.next_track_id);
        };
        _0x1d941e.SampleEntry.prototype.writeHeader = function (_0xdb4c89) {
          this.size = 0x8;
          _0x1d941e.Box.prototype.writeHeader.call(this, _0xdb4c89);
          _0xdb4c89.writeUint8(0x0);
          _0xdb4c89.writeUint8(0x0);
          _0xdb4c89.writeUint8(0x0);
          _0xdb4c89.writeUint8(0x0);
          _0xdb4c89.writeUint8(0x0);
          _0xdb4c89.writeUint8(0x0);
          _0xdb4c89.writeUint16(this.data_reference_index);
        };
        _0x1d941e.SampleEntry.prototype.writeFooter = function (_0x574d19) {
          for (var _0x17b1de = 0x0; _0x17b1de < this.boxes.length; _0x17b1de++) {
            this.boxes[_0x17b1de].write(_0x574d19);
            this.size += this.boxes[_0x17b1de].size;
          }
          _0x8cf1a.debug('BoxWriter', "Adjusting box " + this.type + " with new size " + this.size);
          _0x574d19.adjustUint32(this.sizePosition, this.size);
        };
        _0x1d941e.SampleEntry.prototype.write = function (_0x2f7940) {
          this.writeHeader(_0x2f7940);
          _0x2f7940.writeUint8Array(this.data);
          this.size += this.data.length;
          _0x8cf1a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
          _0x2f7940.adjustUint32(this.sizePosition, this.size);
        };
        _0x1d941e.VisualSampleEntry.prototype.write = function (_0x482aa5) {
          this.writeHeader(_0x482aa5);
          this.size += 0x46;
          _0x482aa5.writeUint16(0x0);
          _0x482aa5.writeUint16(0x0);
          _0x482aa5.writeUint32(0x0);
          _0x482aa5.writeUint32(0x0);
          _0x482aa5.writeUint32(0x0);
          _0x482aa5.writeUint16(this.width);
          _0x482aa5.writeUint16(this.height);
          _0x482aa5.writeUint32(this.horizresolution);
          _0x482aa5.writeUint32(this.vertresolution);
          _0x482aa5.writeUint32(0x0);
          _0x482aa5.writeUint16(this.frame_count);
          _0x482aa5.writeUint8(Math.min(0x1f, this.compressorname.length));
          _0x482aa5.writeString(this.compressorname, null, 0x1f);
          _0x482aa5.writeUint16(this.depth);
          _0x482aa5.writeInt16(-0x1);
          this.writeFooter(_0x482aa5);
        };
        _0x1d941e.AudioSampleEntry.prototype.write = function (_0x55c3cd) {
          this.writeHeader(_0x55c3cd);
          this.size += 0x14;
          _0x55c3cd.writeUint32(0x0);
          _0x55c3cd.writeUint32(0x0);
          _0x55c3cd.writeUint16(this.channel_count);
          _0x55c3cd.writeUint16(this.samplesize);
          _0x55c3cd.writeUint16(0x0);
          _0x55c3cd.writeUint16(0x0);
          _0x55c3cd.writeUint32(this.samplerate << 0x10);
          this.writeFooter(_0x55c3cd);
        };
        _0x1d941e.stppSampleEntry.prototype.write = function (_0x17313c) {
          this.writeHeader(_0x17313c);
          this.size += this.namespace.length + 0x1 + this.schema_location.length + 0x1 + this.auxiliary_mime_types.length + 0x1;
          _0x17313c.writeCString(this.namespace);
          _0x17313c.writeCString(this.schema_location);
          _0x17313c.writeCString(this.auxiliary_mime_types);
          this.writeFooter(_0x17313c);
        };
        _0x1d941e.SampleGroupEntry.prototype.write = function (_0x215885) {
          _0x215885.writeUint8Array(this.data);
        };
        _0x1d941e.sbgpBox.prototype.write = function (_0x5d18f8) {
          this.version = 0x1;
          this.flags = 0x0;
          this.size = 0xc + 0x8 * this.entries.length;
          this.writeHeader(_0x5d18f8);
          _0x5d18f8.writeString(this.grouping_type, null, 0x4);
          _0x5d18f8.writeUint32(this.grouping_type_parameter);
          _0x5d18f8.writeUint32(this.entries.length);
          for (var _0x44e1e6 = 0x0; _0x44e1e6 < this.entries.length; _0x44e1e6++) {
            var _0x48781e = this.entries[_0x44e1e6];
            _0x5d18f8.writeInt32(_0x48781e.sample_count);
            _0x5d18f8.writeInt32(_0x48781e.group_description_index);
          }
        };
        _0x1d941e.sgpdBox.prototype.write = function (_0x1f8cae) {
          var _0x54cd63;
          var _0x26f674;
          this.flags = 0x0;
          this.size = 0xc;
          for (_0x54cd63 = 0x0; _0x54cd63 < this.entries.length; _0x54cd63++) {
            _0x26f674 = this.entries[_0x54cd63];
            if (0x1 === this.version) {
              if (0x0 === this.default_length) {
                this.size += 0x4;
              }
              this.size += _0x26f674.data.length;
            }
          }
          this.writeHeader(_0x1f8cae);
          _0x1f8cae.writeString(this.grouping_type, null, 0x4);
          if (0x1 === this.version) {
            _0x1f8cae.writeUint32(this.default_length);
          }
          if (this.version >= 0x2) {
            _0x1f8cae.writeUint32(this.default_sample_description_index);
          }
          _0x1f8cae.writeUint32(this.entries.length);
          for (_0x54cd63 = 0x0; _0x54cd63 < this.entries.length; _0x54cd63++) {
            _0x26f674 = this.entries[_0x54cd63];
            if (0x1 === this.version && 0x0 === this.default_length) {
              _0x1f8cae.writeUint32(_0x26f674.description_length);
            }
            _0x26f674.write(_0x1f8cae);
          }
        };
        _0x1d941e.sidxBox.prototype.write = function (_0x5dddbb) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x14 + 0xc * this.references.length;
          this.writeHeader(_0x5dddbb);
          _0x5dddbb.writeUint32(this.reference_ID);
          _0x5dddbb.writeUint32(this.timescale);
          _0x5dddbb.writeUint32(this.earliest_presentation_time);
          _0x5dddbb.writeUint32(this.first_offset);
          _0x5dddbb.writeUint16(0x0);
          _0x5dddbb.writeUint16(this.references.length);
          for (var _0x4f2d57 = 0x0; _0x4f2d57 < this.references.length; _0x4f2d57++) {
            var _0x24feac = this.references[_0x4f2d57];
            _0x5dddbb.writeUint32(_0x24feac.reference_type << 0x1f | _0x24feac.referenced_size);
            _0x5dddbb.writeUint32(_0x24feac.subsegment_duration);
            _0x5dddbb.writeUint32(_0x24feac.starts_with_SAP << 0x1f | _0x24feac.SAP_type << 0x1c | _0x24feac.SAP_delta_time);
          }
        };
        _0x1d941e.smhdBox.prototype.write = function (_0x5c57b0) {
          this.version = 0x0;
          this.flags = 0x1;
          this.size = 0x4;
          this.writeHeader(_0x5c57b0);
          _0x5c57b0.writeUint16(this.balance);
          _0x5c57b0.writeUint16(0x0);
        };
        _0x1d941e.stcoBox.prototype.write = function (_0x35c314) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0x4 * this.chunk_offsets.length;
          this.writeHeader(_0x35c314);
          _0x35c314.writeUint32(this.chunk_offsets.length);
          _0x35c314.writeUint32Array(this.chunk_offsets);
        };
        _0x1d941e.stscBox.prototype.write = function (_0x400ba6) {
          var _0x3bf86c;
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0xc * this.first_chunk.length;
          this.writeHeader(_0x400ba6);
          _0x400ba6.writeUint32(this.first_chunk.length);
          for (_0x3bf86c = 0x0; _0x3bf86c < this.first_chunk.length; _0x3bf86c++) {
            _0x400ba6.writeUint32(this.first_chunk[_0x3bf86c]);
            _0x400ba6.writeUint32(this.samples_per_chunk[_0x3bf86c]);
            _0x400ba6.writeUint32(this.sample_description_index[_0x3bf86c]);
          }
        };
        _0x1d941e.stsdBox.prototype.write = function (_0x525e18) {
          var _0x28b8c5;
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x0;
          this.writeHeader(_0x525e18);
          _0x525e18.writeUint32(this.entries.length);
          this.size += 0x4;
          for (_0x28b8c5 = 0x0; _0x28b8c5 < this.entries.length; _0x28b8c5++) {
            this.entries[_0x28b8c5].write(_0x525e18);
            this.size += this.entries[_0x28b8c5].size;
          }
          _0x8cf1a.debug('BoxWriter', "Adjusting box " + this.type + " with new size " + this.size);
          _0x525e18.adjustUint32(this.sizePosition, this.size);
        };
        _0x1d941e.stshBox.prototype.write = function (_0x4f7083) {
          var _0x4cf359;
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0x8 * this.shadowed_sample_numbers.length;
          this.writeHeader(_0x4f7083);
          _0x4f7083.writeUint32(this.shadowed_sample_numbers.length);
          for (_0x4cf359 = 0x0; _0x4cf359 < this.shadowed_sample_numbers.length; _0x4cf359++) {
            _0x4f7083.writeUint32(this.shadowed_sample_numbers[_0x4cf359]);
            _0x4f7083.writeUint32(this.sync_sample_numbers[_0x4cf359]);
          }
        };
        _0x1d941e.stssBox.prototype.write = function (_0x2cb05c) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0x4 * this.sample_numbers.length;
          this.writeHeader(_0x2cb05c);
          _0x2cb05c.writeUint32(this.sample_numbers.length);
          _0x2cb05c.writeUint32Array(this.sample_numbers);
        };
        _0x1d941e.stszBox.prototype.write = function (_0x2c4a4e) {
          var _0x463095;
          var _0x55ec45 = true;
          this.version = 0x0;
          this.flags = 0x0;
          if (this.sample_sizes.length > 0x0) {
            for (_0x463095 = 0x0; _0x463095 + 0x1 < this.sample_sizes.length;) {
              if (this.sample_sizes[_0x463095 + 0x1] !== this.sample_sizes[0x0]) {
                _0x55ec45 = false;
                break;
              }
              _0x463095++;
            }
          } else {
            _0x55ec45 = false;
          }
          this.size = 0x8;
          if (!_0x55ec45) {
            this.size += 0x4 * this.sample_sizes.length;
          }
          this.writeHeader(_0x2c4a4e);
          if (_0x55ec45) {
            _0x2c4a4e.writeUint32(this.sample_sizes[0x0]);
          } else {
            _0x2c4a4e.writeUint32(0x0);
          }
          _0x2c4a4e.writeUint32(this.sample_sizes.length);
          if (!_0x55ec45) {
            _0x2c4a4e.writeUint32Array(this.sample_sizes);
          }
        };
        _0x1d941e.sttsBox.prototype.write = function (_0x2f7a84) {
          var _0x53b9a2;
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x4 + 0x8 * this.sample_counts.length;
          this.writeHeader(_0x2f7a84);
          _0x2f7a84.writeUint32(this.sample_counts.length);
          for (_0x53b9a2 = 0x0; _0x53b9a2 < this.sample_counts.length; _0x53b9a2++) {
            _0x2f7a84.writeUint32(this.sample_counts[_0x53b9a2]);
            _0x2f7a84.writeUint32(this.sample_deltas[_0x53b9a2]);
          }
        };
        _0x1d941e.tfdtBox.prototype.write = function (_0x501225) {
          var _0x5b627c = Math.pow(0x2, 0x20) - 0x1;
          this.version = this.baseMediaDecodeTime > _0x5b627c ? 0x1 : 0x0;
          this.flags = 0x0;
          this.size = 0x4;
          if (0x1 === this.version) {
            this.size += 0x4;
          }
          this.writeHeader(_0x501225);
          if (0x1 === this.version) {
            _0x501225.writeUint64(this.baseMediaDecodeTime);
          } else {
            _0x501225.writeUint32(this.baseMediaDecodeTime);
          }
        };
        _0x1d941e.tfhdBox.prototype.write = function (_0x33451e) {
          this.version = 0x0;
          this.size = 0x4;
          if (this.flags & _0x1d941e.TFHD_FLAG_BASE_DATA_OFFSET) {
            this.size += 0x8;
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DESC) {
            this.size += 0x4;
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DUR) {
            this.size += 0x4;
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_SIZE) {
            this.size += 0x4;
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_FLAGS) {
            this.size += 0x4;
          }
          this.writeHeader(_0x33451e);
          _0x33451e.writeUint32(this.track_id);
          if (this.flags & _0x1d941e.TFHD_FLAG_BASE_DATA_OFFSET) {
            _0x33451e.writeUint64(this.base_data_offset);
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DESC) {
            _0x33451e.writeUint32(this.default_sample_description_index);
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DUR) {
            _0x33451e.writeUint32(this.default_sample_duration);
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_SIZE) {
            _0x33451e.writeUint32(this.default_sample_size);
          }
          if (this.flags & _0x1d941e.TFHD_FLAG_SAMPLE_FLAGS) {
            _0x33451e.writeUint32(this.default_sample_flags);
          }
        };
        _0x1d941e.tkhdBox.prototype.write = function (_0x1ce883) {
          this.version = 0x0;
          this.size = 0x50;
          this.writeHeader(_0x1ce883);
          _0x1ce883.writeUint32(this.creation_time);
          _0x1ce883.writeUint32(this.modification_time);
          _0x1ce883.writeUint32(this.track_id);
          _0x1ce883.writeUint32(0x0);
          _0x1ce883.writeUint32(this.duration);
          _0x1ce883.writeUint32(0x0);
          _0x1ce883.writeUint32(0x0);
          _0x1ce883.writeInt16(this.layer);
          _0x1ce883.writeInt16(this.alternate_group);
          _0x1ce883.writeInt16(this.volume << 0x8);
          _0x1ce883.writeUint16(0x0);
          _0x1ce883.writeInt32Array(this.matrix);
          _0x1ce883.writeUint32(this.width);
          _0x1ce883.writeUint32(this.height);
        };
        _0x1d941e.trexBox.prototype.write = function (_0x21b775) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = 0x14;
          this.writeHeader(_0x21b775);
          _0x21b775.writeUint32(this.track_id);
          _0x21b775.writeUint32(this.default_sample_description_index);
          _0x21b775.writeUint32(this.default_sample_duration);
          _0x21b775.writeUint32(this.default_sample_size);
          _0x21b775.writeUint32(this.default_sample_flags);
        };
        _0x1d941e.trunBox.prototype.write = function (_0x12fb35) {
          this.version = 0x0;
          this.size = 0x4;
          if (this.flags & _0x1d941e.TRUN_FLAGS_DATA_OFFSET) {
            this.size += 0x4;
          }
          if (this.flags & _0x1d941e.TRUN_FLAGS_FIRST_FLAG) {
            this.size += 0x4;
          }
          if (this.flags & _0x1d941e.TRUN_FLAGS_DURATION) {
            this.size += 0x4 * this.sample_duration.length;
          }
          if (this.flags & _0x1d941e.TRUN_FLAGS_SIZE) {
            this.size += 0x4 * this.sample_size.length;
          }
          if (this.flags & _0x1d941e.TRUN_FLAGS_FLAGS) {
            this.size += 0x4 * this.sample_flags.length;
          }
          if (this.flags & _0x1d941e.TRUN_FLAGS_CTS_OFFSET) {
            this.size += 0x4 * this.sample_composition_time_offset.length;
          }
          this.writeHeader(_0x12fb35);
          _0x12fb35.writeUint32(this.sample_count);
          if (this.flags & _0x1d941e.TRUN_FLAGS_DATA_OFFSET) {
            this.data_offset_position = _0x12fb35.getPosition();
            _0x12fb35.writeInt32(this.data_offset);
          }
          if (this.flags & _0x1d941e.TRUN_FLAGS_FIRST_FLAG) {
            _0x12fb35.writeUint32(this.first_sample_flags);
          }
          for (var _0x141ac5 = 0x0; _0x141ac5 < this.sample_count; _0x141ac5++) {
            if (this.flags & _0x1d941e.TRUN_FLAGS_DURATION) {
              _0x12fb35.writeUint32(this.sample_duration[_0x141ac5]);
            }
            if (this.flags & _0x1d941e.TRUN_FLAGS_SIZE) {
              _0x12fb35.writeUint32(this.sample_size[_0x141ac5]);
            }
            if (this.flags & _0x1d941e.TRUN_FLAGS_FLAGS) {
              _0x12fb35.writeUint32(this.sample_flags[_0x141ac5]);
            }
            if (this.flags & _0x1d941e.TRUN_FLAGS_CTS_OFFSET) {
              if (0x0 === this.version) {
                _0x12fb35.writeUint32(this.sample_composition_time_offset[_0x141ac5]);
              } else {
                _0x12fb35.writeInt32(this.sample_composition_time_offset[_0x141ac5]);
              }
            }
          }
        };
        _0x1d941e["url Box"].prototype.write = function (_0x41f1dd) {
          this.version = 0x0;
          if (this.location) {
            this.flags = 0x0;
            this.size = this.location.length + 0x1;
          } else {
            this.flags = 0x1;
            this.size = 0x0;
          }
          this.writeHeader(_0x41f1dd);
          if (this.location) {
            _0x41f1dd.writeCString(this.location);
          }
        };
        _0x1d941e["urn Box"].prototype.write = function (_0x1ce8e3) {
          this.version = 0x0;
          this.flags = 0x0;
          this.size = this.name.length + 0x1 + (this.location ? this.location.length + 0x1 : 0x0);
          this.writeHeader(_0x1ce8e3);
          _0x1ce8e3.writeCString(this.name);
          if (this.location) {
            _0x1ce8e3.writeCString(this.location);
          }
        };
        _0x1d941e.vmhdBox.prototype.write = function (_0x36ffad) {
          this.version = 0x0;
          this.flags = 0x1;
          this.size = 0x8;
          this.writeHeader(_0x36ffad);
          _0x36ffad.writeUint16(this.graphicsmode);
          _0x36ffad.writeUint16Array(this.opcolor);
        };
        _0x1d941e.cttsBox.prototype.unpack = function (_0x2630aa) {
          var _0x7f4f29;
          var _0x1f8a32;
          var _0x7fd425;
          _0x7fd425 = 0x0;
          for (_0x7f4f29 = 0x0; _0x7f4f29 < this.sample_counts.length; _0x7f4f29++) {
            for (_0x1f8a32 = 0x0; _0x1f8a32 < this.sample_counts[_0x7f4f29]; _0x1f8a32++) {
              _0x2630aa[_0x7fd425].pts = _0x2630aa[_0x7fd425].dts + this.sample_offsets[_0x7f4f29];
              _0x7fd425++;
            }
          }
        };
        _0x1d941e.sttsBox.prototype.unpack = function (_0x4d7281) {
          var _0x14c7d6;
          var _0x2d9cc3;
          var _0x4ab34f;
          _0x4ab34f = 0x0;
          for (_0x14c7d6 = 0x0; _0x14c7d6 < this.sample_counts.length; _0x14c7d6++) {
            for (_0x2d9cc3 = 0x0; _0x2d9cc3 < this.sample_counts[_0x14c7d6]; _0x2d9cc3++) {
              _0x4d7281[_0x4ab34f].dts = 0x0 === _0x4ab34f ? 0x0 : _0x4d7281[_0x4ab34f - 0x1].dts + this.sample_deltas[_0x14c7d6];
              _0x4ab34f++;
            }
          }
        };
        _0x1d941e.stcoBox.prototype.unpack = function (_0x5d72b0) {
          var _0x4f31ec;
          for (_0x4f31ec = 0x0; _0x4f31ec < this.chunk_offsets.length; _0x4f31ec++) {
            _0x5d72b0[_0x4f31ec].offset = this.chunk_offsets[_0x4f31ec];
          }
        };
        _0x1d941e.stscBox.prototype.unpack = function (_0x3009cc) {
          var _0x5d388c;
          var _0x35377a;
          var _0x4375c1;
          var _0x18bb05;
          var _0x206821;
          _0x18bb05 = 0x0;
          _0x206821 = 0x0;
          for (_0x5d388c = 0x0; _0x5d388c < this.first_chunk.length; _0x5d388c++) {
            for (_0x35377a = 0x0; _0x35377a < (_0x5d388c + 0x1 < this.first_chunk.length ? this.first_chunk[_0x5d388c + 0x1] : Infinity); _0x35377a++) {
              _0x206821++;
              for (_0x4375c1 = 0x0; _0x4375c1 < this.samples_per_chunk[_0x5d388c]; _0x4375c1++) {
                if (!_0x3009cc[_0x18bb05]) {
                  return;
                }
                _0x3009cc[_0x18bb05].description_index = this.sample_description_index[_0x5d388c];
                _0x3009cc[_0x18bb05].chunk_index = _0x206821;
                _0x18bb05++;
              }
            }
          }
        };
        _0x1d941e.stszBox.prototype.unpack = function (_0x47b954) {
          var _0x49416e;
          for (_0x49416e = 0x0; _0x49416e < this.sample_sizes.length; _0x49416e++) {
            _0x47b954[_0x49416e].size = this.sample_sizes[_0x49416e];
          }
        };
        _0x1d941e.DIFF_BOXES_PROP_NAMES = ['boxes', 'entries', "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", 'ranges', 'seekLists', "seekPoints", "esd", 'levels'];
        _0x1d941e.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", 'matrix', "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"];
        _0x1d941e.boxEqualFields = function (_0x3950b5, _0x4cb42c) {
          if (_0x3950b5 && !_0x4cb42c) {
            return false;
          }
          var _0xde3934;
          for (_0xde3934 in _0x3950b5) if (!(_0x1d941e.DIFF_BOXES_PROP_NAMES.indexOf(_0xde3934) > -0x1 || _0x3950b5[_0xde3934] instanceof _0x1d941e.Box || _0x4cb42c[_0xde3934] instanceof _0x1d941e.Box || undefined === _0x3950b5[_0xde3934] || undefined === _0x4cb42c[_0xde3934] || "function" == typeof _0x3950b5[_0xde3934] || 'function' == typeof _0x4cb42c[_0xde3934] || _0x3950b5.subBoxNames && _0x3950b5.subBoxNames.indexOf(_0xde3934.slice(0x0, 0x4)) > -0x1 || _0x4cb42c.subBoxNames && _0x4cb42c.subBoxNames.indexOf(_0xde3934.slice(0x0, 0x4)) > -0x1 || 'data' === _0xde3934 || 'start' === _0xde3934 || "size" === _0xde3934 || "creation_time" === _0xde3934 || "modification_time" === _0xde3934 || _0x1d941e.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(_0xde3934) > -0x1 || _0x3950b5[_0xde3934] === _0x4cb42c[_0xde3934])) {
            return false;
          }
          return true;
        };
        _0x1d941e.boxEqual = function (_0x3dd9e3, _0x26ad4f) {
          if (!_0x1d941e.boxEqualFields(_0x3dd9e3, _0x26ad4f)) {
            return false;
          }
          for (var _0x2dd44c = 0x0; _0x2dd44c < _0x1d941e.DIFF_BOXES_PROP_NAMES.length; _0x2dd44c++) {
            var _0x37ca24 = _0x1d941e.DIFF_BOXES_PROP_NAMES[_0x2dd44c];
            if (_0x3dd9e3[_0x37ca24] && _0x26ad4f[_0x37ca24] && !_0x1d941e.boxEqual(_0x3dd9e3[_0x37ca24], _0x26ad4f[_0x37ca24])) {
              return false;
            }
          }
          return true;
        };
        var _0x499d81 = function () {};
        _0x499d81.prototype.parseSample = function (_0x3cc1b9) {
          var _0x510c1b;
          var _0x40fa2e;
          var _0x3c6d9e = new _0x174165(_0x3cc1b9.buffer);
          for (_0x510c1b = []; !_0x3c6d9e.isEos();) {
            if ((_0x40fa2e = _0x1d941e.parseOneBox(_0x3c6d9e, false)).code === 0x1 && "vttc" === _0x40fa2e.box.type) {
              _0x510c1b.push(_0x40fa2e.box);
            }
          }
          return _0x510c1b;
        };
        _0x499d81.prototype.getText = function (_0x553eb7, _0x256101, _0xbf4a55) {
          function _0x2e69a7(_0xff8e4f, _0x41f123, _0x3745b1) {
            _0x3745b1 = _0x3745b1 || '0';
            return (_0xff8e4f += '').length >= _0x41f123 ? _0xff8e4f : new Array(_0x41f123 - _0xff8e4f.length + 0x1).join(_0x3745b1) + _0xff8e4f;
          }
          function _0x539872(_0x416bb7) {
            var _0x35e169 = Math.floor(_0x416bb7 / 0xe10);
            var _0x6911bf = Math.floor((_0x416bb7 - 0xe10 * _0x35e169) / 0x3c);
            var _0xa07dda = Math.floor(_0x416bb7 - 0xe10 * _0x35e169 - 0x3c * _0x6911bf);
            var _0x1921fc = Math.floor(0x3e8 * (_0x416bb7 - 0xe10 * _0x35e169 - 0x3c * _0x6911bf - _0xa07dda));
            return _0x2e69a7(_0x35e169, 0x2) + ':' + _0x2e69a7(_0x6911bf, 0x2) + ':' + _0x2e69a7(_0xa07dda, 0x2) + '.' + _0x2e69a7(_0x1921fc, 0x3);
          }
          var _0x44b4df = this.parseSample(_0xbf4a55);
          var _0x2a8820 = '';
          for (var _0x55083e = 0x0; _0x55083e < _0x44b4df.length; _0x55083e++) {
            var _0x86ea8c = _0x44b4df[_0x55083e];
            _0x2a8820 += _0x539872(_0x553eb7) + " --> " + _0x539872(_0x256101) + "\r\n";
            _0x2a8820 += _0x86ea8c.payl.text;
          }
          return _0x2a8820;
        };
        var _0x147f8a = function () {};
        _0x147f8a.prototype.parseSample = function (_0xd9c1f0) {
          var _0x2cf7b4 = {
            resources: []
          };
          var _0xcb7597;
          var _0x3280f1 = new _0x174165(_0xd9c1f0.data.buffer);
          if (_0xd9c1f0.subsamples && 0x0 !== _0xd9c1f0.subsamples.length) {
            _0x2cf7b4.documentString = _0x3280f1.readString(_0xd9c1f0.subsamples[0x0].size);
            if (_0xd9c1f0.subsamples.length > 0x1) {
              for (_0xcb7597 = 0x1; _0xcb7597 < _0xd9c1f0.subsamples.length; _0xcb7597++) {
                _0x2cf7b4.resources[_0xcb7597] = _0x3280f1.readUint8Array(_0xd9c1f0.subsamples[_0xcb7597].size);
              }
            }
          } else {
            _0x2cf7b4.documentString = _0x3280f1.readString(_0xd9c1f0.data.length);
          }
          if ('undefined' != typeof DOMParser) {
            _0x2cf7b4.document = new DOMParser().parseFromString(_0x2cf7b4.documentString, "application/xml");
          }
          return _0x2cf7b4;
        };
        var _0x33f268 = function () {};
        _0x33f268.prototype.parseSample = function (_0x19fd0f) {
          return new _0x174165(_0x19fd0f.data.buffer).readString(_0x19fd0f.data.length);
        };
        _0x33f268.prototype.parseConfig = function (_0x25221d) {
          var _0x808254 = new _0x174165(_0x25221d.buffer);
          _0x808254.readUint32();
          return _0x808254.readCString();
        };
        _0xaab1e8.XMLSubtitlein4Parser = _0x147f8a;
        _0xaab1e8.Textin4Parser = _0x33f268;
        var _0x4d4a69 = function (_0x1a3a34) {
          this.stream = _0x1a3a34 || new _0x14091e();
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
        _0x4d4a69.prototype.setSegmentOptions = function (_0x2de85b, _0x545a5a, _0x504e9b) {
          var _0x5f1c1c = this.getTrackById(_0x2de85b);
          if (_0x5f1c1c) {
            var _0x412dd8 = {};
            this.fragmentedTracks.push(_0x412dd8);
            _0x412dd8.id = _0x2de85b;
            _0x412dd8.user = _0x545a5a;
            _0x412dd8.trak = _0x5f1c1c;
            _0x5f1c1c.nextSample = 0x0;
            _0x412dd8.segmentStream = null;
            _0x412dd8.nb_samples = 0x3e8;
            _0x412dd8.rapAlignement = true;
            if (_0x504e9b) {
              if (_0x504e9b.nbSamples) {
                _0x412dd8.nb_samples = _0x504e9b.nbSamples;
              }
              if (_0x504e9b.rapAlignement) {
                _0x412dd8.rapAlignement = _0x504e9b.rapAlignement;
              }
            }
          }
        };
        _0x4d4a69.prototype.unsetSegmentOptions = function (_0x55b407) {
          var _0xfe8dda = -0x1;
          for (var _0x2227c2 = 0x0; _0x2227c2 < this.fragmentedTracks.length; _0x2227c2++) {
            if (this.fragmentedTracks[_0x2227c2].id == _0x55b407) {
              _0xfe8dda = _0x2227c2;
            }
          }
          if (_0xfe8dda > -0x1) {
            this.fragmentedTracks.splice(_0xfe8dda, 0x1);
          }
        };
        _0x4d4a69.prototype.setExtractionOptions = function (_0x28a15b, _0x38ecd9, _0x376661) {
          var _0x4a496f = this.getTrackById(_0x28a15b);
          if (_0x4a496f) {
            var _0x399003 = {};
            this.extractedTracks.push(_0x399003);
            _0x399003.id = _0x28a15b;
            _0x399003.user = _0x38ecd9;
            _0x399003.trak = _0x4a496f;
            _0x4a496f.nextSample = 0x0;
            _0x399003.nb_samples = 0x3e8;
            _0x399003.samples = [];
            if (_0x376661 && _0x376661.nbSamples) {
              _0x399003.nb_samples = _0x376661.nbSamples;
            }
          }
        };
        _0x4d4a69.prototype.unsetExtractionOptions = function (_0x43e775) {
          var _0x35e95b = -0x1;
          for (var _0x430a5b = 0x0; _0x430a5b < this.extractedTracks.length; _0x430a5b++) {
            if (this.extractedTracks[_0x430a5b].id == _0x43e775) {
              _0x35e95b = _0x430a5b;
            }
          }
          if (_0x35e95b > -0x1) {
            this.extractedTracks.splice(_0x35e95b, 0x1);
          }
        };
        _0x4d4a69.prototype.parse = function () {
          var _0x287c08;
          var _0x112133;
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
              if ((_0x287c08 = _0x1d941e.parseOneBox(this.stream, false)).code === 0x0) {
                if (this.processIncompleteBox) {
                  if (this.processIncompleteBox(_0x287c08)) {
                    continue;
                  }
                  return;
                }
                return;
              }
              var _0x47b7e9;
              _0x47b7e9 = "uuid" !== (_0x112133 = _0x287c08.box).type ? _0x112133.type : _0x112133.uuid;
              this.boxes.push(_0x112133);
              switch (_0x47b7e9) {
                case "mdat":
                  this.mdats.push(_0x112133);
                  break;
                case 'moof':
                  this.moofs.push(_0x112133);
                  break;
                case "moov":
                  this.moovStartFound = true;
                  if (0x0 === this.mdats.length) {
                    this.isProgressive = true;
                  }
                default:
                  if (undefined !== this[_0x47b7e9]) {
                    _0x8cf1a.warn("ISOFile", "Duplicate Box of type: " + _0x47b7e9 + ", overriding previous occurrence");
                  }
                  this[_0x47b7e9] = _0x112133;
              }
              if (this.updateUsedBytes) {
                this.updateUsedBytes(_0x112133, _0x287c08);
              }
            }
          }
        };
        _0x4d4a69.prototype.checkBuffer = function (_0x5d6669) {
          if (null == _0x5d6669) {
            throw "Buffer must be defined and non empty";
          }
          if (undefined === _0x5d6669.fileStart) {
            throw "Buffer must have a fileStart property";
          }
          return 0x0 === _0x5d6669.byteLength ? (_0x8cf1a.warn("ISOFile", "Ignoring empty buffer (fileStart: " + _0x5d6669.fileStart + ')'), this.stream.logBufferLevel(), false) : (_0x8cf1a.info("ISOFile", "Processing buffer (fileStart: " + _0x5d6669.fileStart + ')'), _0x5d6669.usedBytes = 0x0, this.stream.insertBuffer(_0x5d6669), this.stream.logBufferLevel(), !!this.stream.initialized() || (_0x8cf1a.warn("ISOFile", "Not ready to start parsing"), false));
        };
        _0x4d4a69.prototype.appendBuffer = function (_0x3b5e74, _0x248895) {
          var _0x321dbe;
          if (this.checkBuffer(_0x3b5e74)) {
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
              this.processSamples(_0x248895);
              if (this.nextSeekPosition) {
                _0x321dbe = this.nextSeekPosition;
                this.nextSeekPosition = undefined;
              } else {
                _0x321dbe = this.nextParsePosition;
              }
              if (this.stream.getEndFilePositionAfter) {
                _0x321dbe = this.stream.getEndFilePositionAfter(_0x321dbe);
              }
            } else {
              _0x321dbe = this.nextParsePosition ? this.nextParsePosition : 0x0;
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
              _0x8cf1a.info('ISOFile', "Done processing buffer (fileStart: " + _0x3b5e74.fileStart + ") - next buffer to fetch should have a fileStart position of " + _0x321dbe);
              this.stream.logBufferLevel();
              this.stream.cleanBuffers();
              this.stream.logBufferLevel(true);
              _0x8cf1a.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
            }
            return _0x321dbe;
          }
        };
        _0x4d4a69.prototype.getInfo = function () {
          var _0x2cefba;
          var _0x47a321;
          var _0x301f8c;
          var _0x4fe11b;
          var _0x502375;
          var _0xd68325;
          var _0x5d5b1e = {};
          var _0x5885e2 = new Date("1904-01-01T00:00:00Z").getTime();
          if (this.moov) {
            _0x5d5b1e.hasMoov = true;
            _0x5d5b1e.duration = this.moov.mvhd.duration;
            _0x5d5b1e.timescale = this.moov.mvhd.timescale;
            _0x5d5b1e.isFragmented = null != this.moov.mvex;
            if (_0x5d5b1e.isFragmented && this.moov.mvex.mehd) {
              _0x5d5b1e.fragment_duration = this.moov.mvex.mehd.fragment_duration;
            }
            _0x5d5b1e.isProgressive = this.isProgressive;
            _0x5d5b1e.hasIOD = null != this.moov.iods;
            _0x5d5b1e.brands = [];
            _0x5d5b1e.brands.push(this.ftyp.major_brand);
            _0x5d5b1e.brands = _0x5d5b1e.brands.concat(this.ftyp.compatible_brands);
            _0x5d5b1e.created = new Date(_0x5885e2 + 0x3e8 * this.moov.mvhd.creation_time);
            _0x5d5b1e.modified = new Date(_0x5885e2 + 0x3e8 * this.moov.mvhd.modification_time);
            _0x5d5b1e.tracks = [];
            _0x5d5b1e.audioTracks = [];
            _0x5d5b1e.videoTracks = [];
            _0x5d5b1e.subtitleTracks = [];
            _0x5d5b1e.metadataTracks = [];
            _0x5d5b1e.hintTracks = [];
            _0x5d5b1e.otherTracks = [];
            for (_0x2cefba = 0x0; _0x2cefba < this.moov.traks.length; _0x2cefba++) {
              _0xd68325 = (_0x301f8c = this.moov.traks[_0x2cefba]).mdia.minf.stbl.stsd.entries[0x0];
              _0x4fe11b = {};
              _0x5d5b1e.tracks.push(_0x4fe11b);
              _0x4fe11b.id = _0x301f8c.tkhd.track_id;
              _0x4fe11b.name = _0x301f8c.mdia.hdlr.name;
              _0x4fe11b.references = [];
              if (_0x301f8c.tref) {
                for (_0x47a321 = 0x0; _0x47a321 < _0x301f8c.tref.boxes.length; _0x47a321++) {
                  _0x502375 = {};
                  _0x4fe11b.references.push(_0x502375);
                  _0x502375.type = _0x301f8c.tref.boxes[_0x47a321].type;
                  _0x502375.track_ids = _0x301f8c.tref.boxes[_0x47a321].track_ids;
                }
              }
              var _0x5ccec3 = {
                "schemeURI": '',
                value: ''
              };
              if (_0x301f8c.edts) {
                _0x4fe11b.edits = _0x301f8c.edts.elst.entries;
              }
              _0x4fe11b.created = new Date(_0x5885e2 + 0x3e8 * _0x301f8c.tkhd.creation_time);
              _0x4fe11b.modified = new Date(_0x5885e2 + 0x3e8 * _0x301f8c.tkhd.modification_time);
              _0x4fe11b.movie_duration = _0x301f8c.tkhd.duration;
              _0x4fe11b.movie_timescale = _0x5d5b1e.timescale;
              _0x4fe11b.layer = _0x301f8c.tkhd.layer;
              _0x4fe11b.alternate_group = _0x301f8c.tkhd.alternate_group;
              _0x4fe11b.volume = _0x301f8c.tkhd.volume;
              _0x4fe11b.matrix = _0x301f8c.tkhd.matrix;
              _0x4fe11b.track_width = _0x301f8c.tkhd.width / 0x10000;
              _0x4fe11b.track_height = _0x301f8c.tkhd.height / 0x10000;
              _0x4fe11b.timescale = _0x301f8c.mdia.mdhd.timescale;
              _0x4fe11b.cts_shift = _0x301f8c.mdia.minf.stbl.cslg;
              _0x4fe11b.duration = _0x301f8c.mdia.mdhd.duration;
              _0x4fe11b.samples_duration = _0x301f8c.samples_duration;
              _0x4fe11b.codec = _0xd68325.getCodec();
              _0x4fe11b.kind = _0x301f8c.udta && _0x301f8c.udta.kinds.length ? _0x301f8c.udta.kinds[0x0] : _0x5ccec3;
              _0x4fe11b.language = _0x301f8c.mdia.elng ? _0x301f8c.mdia.elng.extended_language : _0x301f8c.mdia.mdhd.languageString;
              _0x4fe11b.nb_samples = _0x301f8c.samples.length;
              _0x4fe11b.size = _0x301f8c.samples_size;
              _0x4fe11b.bitrate = 0x8 * _0x4fe11b.size * _0x4fe11b.timescale / _0x4fe11b.samples_duration;
              if (_0xd68325.isAudio()) {
                _0x4fe11b.type = 'audio';
                _0x5d5b1e.audioTracks.push(_0x4fe11b);
                _0x4fe11b.audio = {};
                _0x4fe11b.audio.sample_rate = _0xd68325.getSampleRate();
                _0x4fe11b.audio.channel_count = _0xd68325.getChannelCount();
                _0x4fe11b.audio.sample_size = _0xd68325.getSampleSize();
              } else if (_0xd68325.isVideo()) {
                _0x4fe11b.type = "video";
                _0x5d5b1e.videoTracks.push(_0x4fe11b);
                _0x4fe11b.video = {};
                _0x4fe11b.video.width = _0xd68325.getWidth();
                _0x4fe11b.video.height = _0xd68325.getHeight();
              } else if (_0xd68325.isSubtitle()) {
                _0x4fe11b.type = "subtitles";
                _0x5d5b1e.subtitleTracks.push(_0x4fe11b);
              } else if (_0xd68325.isHint()) {
                _0x4fe11b.type = 'metadata';
                _0x5d5b1e.hintTracks.push(_0x4fe11b);
              } else if (_0xd68325.isMetadata()) {
                _0x4fe11b.type = 'metadata';
                _0x5d5b1e.metadataTracks.push(_0x4fe11b);
              } else {
                _0x4fe11b.type = "metadata";
                _0x5d5b1e.otherTracks.push(_0x4fe11b);
              }
            }
          } else {
            _0x5d5b1e.hasMoov = false;
          }
          _0x5d5b1e.mime = '';
          if (_0x5d5b1e.hasMoov && _0x5d5b1e.tracks) {
            if (_0x5d5b1e.videoTracks && _0x5d5b1e.videoTracks.length > 0x0) {
              _0x5d5b1e.mime += "video/mp4; codecs=\"";
            } else if (_0x5d5b1e.audioTracks && _0x5d5b1e.audioTracks.length > 0x0) {
              _0x5d5b1e.mime += "audio/mp4; codecs=\"";
            } else {
              _0x5d5b1e.mime += "application/mp4; codecs=\"";
            }
            for (_0x2cefba = 0x0; _0x2cefba < _0x5d5b1e.tracks.length; _0x2cefba++) {
              if (0x0 !== _0x2cefba) {
                _0x5d5b1e.mime += ',';
              }
              _0x5d5b1e.mime += _0x5d5b1e.tracks[_0x2cefba].codec;
            }
            _0x5d5b1e.mime += "\"; profiles=\"";
            _0x5d5b1e.mime += this.ftyp.compatible_brands.join();
            _0x5d5b1e.mime += "\"";
          }
          return _0x5d5b1e;
        };
        _0x4d4a69.prototype.processSamples = function (_0x1ac6f5) {
          var _0x442ab1;
          var _0x3ac278;
          if (this.sampleProcessingStarted) {
            if (this.isFragmentationInitialized && null !== this.onSegment) {
              for (_0x442ab1 = 0x0; _0x442ab1 < this.fragmentedTracks.length; _0x442ab1++) {
                var _0x279ed0 = this.fragmentedTracks[_0x442ab1];
                for (_0x3ac278 = _0x279ed0.trak; _0x3ac278.nextSample < _0x3ac278.samples.length && this.sampleProcessingStarted;) {
                  _0x8cf1a.debug('ISOFile', "Creating media fragment on track #" + _0x279ed0.id + " for sample " + _0x3ac278.nextSample);
                  var _0x176a27 = this.createFragment(_0x279ed0.id, _0x3ac278.nextSample, _0x279ed0.segmentStream);
                  if (!_0x176a27) {
                    break;
                  }
                  _0x279ed0.segmentStream = _0x176a27;
                  _0x3ac278.nextSample++;
                  if ((_0x3ac278.nextSample % _0x279ed0.nb_samples == 0x0 || _0x1ac6f5 || _0x3ac278.nextSample >= _0x3ac278.samples.length) && (_0x8cf1a.info("ISOFile", "Sending fragmented data on track #" + _0x279ed0.id + " for samples [" + Math.max(0x0, _0x3ac278.nextSample - _0x279ed0.nb_samples) + ',' + (_0x3ac278.nextSample - 0x1) + ']'), _0x8cf1a.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(_0x279ed0.id, _0x279ed0.user, _0x279ed0.segmentStream.buffer, _0x3ac278.nextSample, _0x1ac6f5 || _0x3ac278.nextSample >= _0x3ac278.samples.length), _0x279ed0.segmentStream = null, _0x279ed0 !== this.fragmentedTracks[_0x442ab1])) {
                    break;
                  }
                }
              }
            }
            if (null !== this.onSamples) {
              for (_0x442ab1 = 0x0; _0x442ab1 < this.extractedTracks.length; _0x442ab1++) {
                var _0x4d048e = this.extractedTracks[_0x442ab1];
                for (_0x3ac278 = _0x4d048e.trak; _0x3ac278.nextSample < _0x3ac278.samples.length && this.sampleProcessingStarted;) {
                  _0x8cf1a.debug('ISOFile', "Exporting on track #" + _0x4d048e.id + " sample #" + _0x3ac278.nextSample);
                  var _0x3d2884 = this.getSample(_0x3ac278, _0x3ac278.nextSample);
                  if (!_0x3d2884) {
                    break;
                  }
                  _0x3ac278.nextSample++;
                  _0x4d048e.samples.push(_0x3d2884);
                  if ((_0x3ac278.nextSample % _0x4d048e.nb_samples == 0x0 || _0x3ac278.nextSample >= _0x3ac278.samples.length) && (_0x8cf1a.debug("ISOFile", "Sending samples on track #" + _0x4d048e.id + " for sample " + _0x3ac278.nextSample), this.onSamples && this.onSamples(_0x4d048e.id, _0x4d048e.user, _0x4d048e.samples), _0x4d048e.samples = [], _0x4d048e !== this.extractedTracks[_0x442ab1])) {
                    break;
                  }
                }
              }
            }
          }
        };
        _0x4d4a69.prototype.getBox = function (_0x6e793f) {
          var _0x4054eb = this.getBoxes(_0x6e793f, true);
          return _0x4054eb.length ? _0x4054eb[0x0] : null;
        };
        _0x4d4a69.prototype.getBoxes = function (_0x4d3460, _0x4bd741) {
          var _0x1c8bbb = [];
          _0x4d4a69._sweep.call(this, _0x4d3460, _0x1c8bbb, _0x4bd741);
          return _0x1c8bbb;
        };
        _0x4d4a69._sweep = function (_0x24a76c, _0xbdb315, _0x49bf89) {
          if (this.type && this.type == _0x24a76c) {
            _0xbdb315.push(this);
          }
          for (var _0x51ebeb in this.boxes) {
            if (_0xbdb315.length && _0x49bf89) {
              return;
            }
            _0x4d4a69._sweep.call(this.boxes[_0x51ebeb], _0x24a76c, _0xbdb315, _0x49bf89);
          }
        };
        _0x4d4a69.prototype.getTrackSamplesInfo = function (_0x1cbd21) {
          var _0x5255a4 = this.getTrackById(_0x1cbd21);
          return _0x5255a4 ? _0x5255a4.samples : undefined;
        };
        _0x4d4a69.prototype.getTrackSample = function (_0x1c08ab, _0x53d656) {
          var _0x3b5336 = this.getTrackById(_0x1c08ab);
          return this.getSample(_0x3b5336, _0x53d656);
        };
        _0x4d4a69.prototype.releaseUsedSamples = function (_0xd606e2, _0x25bc46) {
          var _0x4e6488 = 0x0;
          var _0x332ef1 = this.getTrackById(_0xd606e2);
          if (!_0x332ef1.lastValidSample) {
            _0x332ef1.lastValidSample = 0x0;
          }
          for (var _0x2dfac0 = _0x332ef1.lastValidSample; _0x2dfac0 < _0x25bc46; _0x2dfac0++) {
            _0x4e6488 += this.releaseSample(_0x332ef1, _0x2dfac0);
          }
          _0x8cf1a.info("ISOFile", "Track #" + _0xd606e2 + " released samples up to " + _0x25bc46 + " (released size: " + _0x4e6488 + ", remaining: " + this.samplesDataSize + ')');
          _0x332ef1.lastValidSample = _0x25bc46;
        };
        _0x4d4a69.prototype.start = function () {
          this.sampleProcessingStarted = true;
          this.processSamples(false);
        };
        _0x4d4a69.prototype.stop = function () {
          this.sampleProcessingStarted = false;
        };
        _0x4d4a69.prototype.flush = function () {
          _0x8cf1a.info('ISOFile', "Flushing remaining samples");
          this.updateSampleLists();
          this.processSamples(true);
          this.stream.cleanBuffers();
          this.stream.logBufferLevel(true);
        };
        _0x4d4a69.prototype.seekTrack = function (_0x27e4b2, _0x376055, _0x1e6d89) {
          var _0x472485;
          var _0x5f5dad;
          var _0x52a580;
          var _0xf2339e;
          var _0x1c73dc = 0x0;
          var _0x8aae1a = 0x0;
          var _0x35b42e = {
            "offset": 0x0,
            "time": 0x0
          };
          if (0x0 === _0x1e6d89.samples.length) {
            _0x8cf1a.info("ISOFile", "No sample in track, cannot seek! Using time " + _0x8cf1a.getDurationString(0x0, 0x1) + " and offset: 0");
            return _0x35b42e;
          }
          for (_0x472485 = 0x0; _0x472485 < _0x1e6d89.samples.length; _0x472485++) {
            _0x5f5dad = _0x1e6d89.samples[_0x472485];
            if (0x0 === _0x472485) {
              _0x8aae1a = 0x0;
              _0xf2339e = _0x5f5dad.timescale;
            } else {
              if (_0x5f5dad.cts > _0x27e4b2 * _0x5f5dad.timescale) {
                _0x8aae1a = _0x472485 - 0x1;
                break;
              }
            }
            if (_0x376055 && _0x5f5dad.is_sync) {
              _0x1c73dc = _0x472485;
            }
          }
          if (_0x376055) {
            _0x8aae1a = _0x1c73dc;
          }
          _0x27e4b2 = _0x1e6d89.samples[_0x8aae1a].cts;
          for (_0x1e6d89.nextSample = _0x8aae1a; _0x1e6d89.samples[_0x8aae1a].alreadyRead === _0x1e6d89.samples[_0x8aae1a].size && _0x1e6d89.samples[_0x8aae1a + 0x1];) {
            _0x8aae1a++;
          }
          _0x52a580 = _0x1e6d89.samples[_0x8aae1a].offset + _0x1e6d89.samples[_0x8aae1a].alreadyRead;
          _0x8cf1a.info("ISOFile", "Seeking to " + (_0x376055 ? 'RAP' : '') + " sample #" + _0x1e6d89.nextSample + " on track " + _0x1e6d89.tkhd.track_id + ", time " + _0x8cf1a.getDurationString(_0x27e4b2, _0xf2339e) + " and offset: " + _0x52a580);
          return {
            'offset': _0x52a580,
            'time': _0x27e4b2 / _0xf2339e
          };
        };
        _0x4d4a69.prototype.seek = function (_0x209797, _0x40e75b) {
          var _0xe1ca7c = {
            offset: Infinity,
            "time": Infinity
          };
          var _0x52ae75;
          var _0x2b3ffb;
          var _0x3c084e;
          var _0x5f51d4 = this.moov;
          var _0x279f88 = _0xe1ca7c;
          if (this.moov) {
            for (_0x3c084e = 0x0; _0x3c084e < _0x5f51d4.traks.length; _0x3c084e++) {
              _0x52ae75 = _0x5f51d4.traks[_0x3c084e];
              if ((_0x2b3ffb = this.seekTrack(_0x209797, _0x40e75b, _0x52ae75)).offset < _0x279f88.offset) {
                _0x279f88.offset = _0x2b3ffb.offset;
              }
              if (_0x2b3ffb.time < _0x279f88.time) {
                _0x279f88.time = _0x2b3ffb.time;
              }
            }
            var _0x5112b0 = {
              "offset": this.nextParsePosition,
              "time": 0x0
            };
            _0x8cf1a.info("ISOFile", "Seeking at time " + _0x8cf1a.getDurationString(_0x279f88.time, 0x1) + " needs a buffer with a fileStart position of " + _0x279f88.offset);
            if (_0x279f88.offset === Infinity) {
              _0x279f88 = _0x5112b0;
            } else {
              _0x279f88.offset = this.stream.getEndFilePositionAfter(_0x279f88.offset);
            }
            _0x8cf1a.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + _0x279f88.offset);
            return _0x279f88;
          }
          throw "Cannot seek: moov not received!";
        };
        _0x4d4a69.prototype.equal = function (_0x3522d9) {
          for (var _0x105aee = 0x0; _0x105aee < this.boxes.length && _0x105aee < _0x3522d9.boxes.length;) {
            var _0xe6e0a8 = this.boxes[_0x105aee];
            var _0x529069 = _0x3522d9.boxes[_0x105aee];
            if (!_0x1d941e.boxEqual(_0xe6e0a8, _0x529069)) {
              return false;
            }
            _0x105aee++;
          }
          return true;
        };
        _0xaab1e8.ISOFile = _0x4d4a69;
        _0x4d4a69.prototype.lastBoxStartPosition = 0x0;
        _0x4d4a69.prototype.parsingMdat = null;
        _0x4d4a69.prototype.nextParsePosition = 0x0;
        _0x4d4a69.prototype.discardMdatData = false;
        _0x4d4a69.prototype.processIncompleteBox = function (_0x18de0c) {
          var _0x299204;
          return "mdat" === _0x18de0c.type ? (_0x299204 = new _0x1d941e[_0x18de0c.type + "Box"](_0x18de0c.size), this.parsingMdat = _0x299204, this.boxes.push(_0x299204), this.mdats.push(_0x299204), _0x299204.start = _0x18de0c.start, _0x299204.hdr_size = _0x18de0c.hdr_size, this.stream.addUsedBytes(_0x299204.hdr_size), this.lastBoxStartPosition = _0x299204.start + _0x299204.size, this.stream.seek(_0x299204.start + _0x299204.size, false, this.discardMdatData) ? (this.parsingMdat = null, true) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = _0x299204.start + _0x299204.size, false)) : ("moov" === _0x18de0c.type && (this.moovStartFound = true, 0x0 === this.mdats.length && (this.isProgressive = true)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer() ? (this.nextParsePosition = this.stream.getEndPosition(), true) : (_0x18de0c.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + _0x18de0c.size : this.nextParsePosition = this.stream.getEndPosition(), false));
        };
        _0x4d4a69.prototype.hasIncompleteMdat = function () {
          return null !== this.parsingMdat;
        };
        _0x4d4a69.prototype.processIncompleteMdat = function () {
          var _0x5f1852;
          _0x5f1852 = this.parsingMdat;
          return this.stream.seek(_0x5f1852.start + _0x5f1852.size, false, this.discardMdatData) ? (_0x8cf1a.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, true) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), false);
        };
        _0x4d4a69.prototype.restoreParsePosition = function () {
          return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
        };
        _0x4d4a69.prototype.saveParsePosition = function () {
          this.lastBoxStartPosition = this.stream.getPosition();
        };
        _0x4d4a69.prototype.updateUsedBytes = function (_0x5d4472, _0x1e2a5c) {
          if (this.stream.addUsedBytes) {
            if ("mdat" === _0x5d4472.type) {
              this.stream.addUsedBytes(_0x5d4472.hdr_size);
              if (this.discardMdatData) {
                this.stream.addUsedBytes(_0x5d4472.size - _0x5d4472.hdr_size);
              }
            } else {
              this.stream.addUsedBytes(_0x5d4472.size);
            }
          }
        };
        _0x4d4a69.prototype.add = _0x1d941e.Box.prototype.add;
        _0x4d4a69.prototype.addBox = _0x1d941e.Box.prototype.addBox;
        _0x4d4a69.prototype.init = function (_0x4dd3de) {
          var _0x42e71f = _0x4dd3de || {};
          this.add("ftyp").set("major_brand", _0x42e71f.brands && _0x42e71f.brands[0x0] || "iso4").set("minor_version", 0x0).set("compatible_brands", _0x42e71f.brands || ['iso4']);
          var _0x13c3a6 = this.add("moov");
          _0x13c3a6.add("mvhd").set("timescale", _0x42e71f.timescale || 0x258).set('rate', _0x42e71f.rate || 0x10000).set("creation_time", 0x0).set("modification_time", 0x0).set('duration', _0x42e71f.duration || 0x0).set("volume", _0x42e71f.width ? 0x0 : 0x100).set("matrix", [0x10000, 0x0, 0x0, 0x0, 0x10000, 0x0, 0x0, 0x0, 0x40000000]).set("next_track_id", 0x1);
          _0x13c3a6.add("mvex");
          return this;
        };
        _0x4d4a69.prototype.addTrack = function (_0x4131e8) {
          if (!this.moov) {
            this.init(_0x4131e8);
          }
          var _0x20ffea = _0x4131e8 || {};
          _0x20ffea.width = _0x20ffea.width || 0x140;
          _0x20ffea.height = _0x20ffea.height || 0x140;
          _0x20ffea.id = _0x20ffea.id || this.moov.mvhd.next_track_id;
          _0x20ffea.type = _0x20ffea.type || "avc1";
          var _0x55afb1 = this.moov.add("trak");
          this.moov.mvhd.next_track_id = _0x20ffea.id + 0x1;
          _0x55afb1.add("tkhd").set('flags', _0x1d941e.TKHD_FLAG_ENABLED | _0x1d941e.TKHD_FLAG_IN_MOVIE | _0x1d941e.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0x0).set("modification_time", 0x0).set('track_id', _0x20ffea.id).set("duration", _0x20ffea.duration || 0x0).set("layer", _0x20ffea.layer || 0x0).set("alternate_group", 0x0).set("volume", 0x1).set("matrix", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]).set('width', _0x20ffea.width << 0x10).set('height', _0x20ffea.height << 0x10);
          var _0x62b420 = _0x55afb1.add("mdia");
          _0x62b420.add("mdhd").set("creation_time", 0x0).set("modification_time", 0x0).set('timescale', _0x20ffea.timescale || 0x1).set('duration', _0x20ffea.media_duration || 0x0).set("language", _0x20ffea.language || 'und');
          _0x62b420.add("hdlr").set("handler", _0x20ffea.hdlr || "vide").set("name", _0x20ffea.name || "Track created with MP4Box.js");
          _0x62b420.add('elng').set("extended_language", _0x20ffea.language || "fr-FR");
          var _0x1d7bce = _0x62b420.add("minf");
          if (undefined !== _0x1d941e[_0x20ffea.type + "SampleEntry"]) {
            var _0x5aa5d0 = new _0x1d941e[_0x20ffea.type + "SampleEntry"]();
            _0x5aa5d0.data_reference_index = 0x1;
            var _0x57cb7e = '';
            for (var _0x408dae in _0x1d941e.sampleEntryCodes) {
              var _0x339a45 = _0x1d941e.sampleEntryCodes[_0x408dae];
              for (var _0x1619fd = 0x0; _0x1619fd < _0x339a45.length; _0x1619fd++) {
                if (_0x339a45.indexOf(_0x20ffea.type) > -0x1) {
                  _0x57cb7e = _0x408dae;
                  break;
                }
              }
            }
            switch (_0x57cb7e) {
              case "Visual":
                _0x1d7bce.add('vmhd').set("graphicsmode", 0x0).set("opcolor", [0x0, 0x0, 0x0]);
                _0x5aa5d0.set("width", _0x20ffea.width).set('height', _0x20ffea.height).set("horizresolution", 4718592).set("vertresolution", 4718592).set("frame_count", 0x1).set("compressorname", _0x20ffea.type + " Compressor").set("depth", 0x18);
                if (_0x20ffea.avcDecoderConfigRecord) {
                  var _0x2eec65 = new _0x1d941e.avcCBox();
                  var _0x31f165 = new _0x174165(_0x20ffea.avcDecoderConfigRecord);
                  _0x2eec65.parse(_0x31f165);
                  _0x5aa5d0.addBox(_0x2eec65);
                }
                break;
              case "Audio":
                _0x1d7bce.add("smhd").set("balance", _0x20ffea.balance || 0x0);
                _0x5aa5d0.set("channel_count", _0x20ffea.channel_count || 0x2).set("samplesize", _0x20ffea.samplesize || 0x10).set("samplerate", _0x20ffea.samplerate || 0x10000);
                break;
              case "Hint":
                _0x1d7bce.add('hmhd');
                break;
              case "Subtitle":
                _0x1d7bce.add('sthd');
                if ('stpp' === _0x20ffea.type) {
                  _0x5aa5d0.set("namespace", _0x20ffea.namespace || "nonamespace").set("schema_location", _0x20ffea.schema_location || '').set("auxiliary_mime_types", _0x20ffea.auxiliary_mime_types || '');
                }
                break;
              default:
                _0x1d7bce.add("nmhd");
            }
            if (_0x20ffea.description) {
              _0x5aa5d0.addBox(_0x20ffea.description);
            }
            if (_0x20ffea.description_boxes) {
              _0x20ffea.description_boxes.forEach(function (_0x461568) {
                _0x5aa5d0.addBox(_0x461568);
              });
            }
            _0x1d7bce.add("dinf").add("dref").addEntry(new _0x1d941e["url Box"]().set('flags', 0x1));
            var _0x29f57c = _0x1d7bce.add("stbl");
            _0x29f57c.add("stsd").addEntry(_0x5aa5d0);
            _0x29f57c.add("stts").set("sample_counts", []).set("sample_deltas", []);
            _0x29f57c.add('stsc').set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []);
            _0x29f57c.add("stco").set("chunk_offsets", []);
            _0x29f57c.add('stsz').set("sample_sizes", []);
            this.moov.mvex.add('trex').set("track_id", _0x20ffea.id).set("default_sample_description_index", _0x20ffea.default_sample_description_index || 0x1).set("default_sample_duration", _0x20ffea.default_sample_duration || 0x0).set("default_sample_size", _0x20ffea.default_sample_size || 0x0).set("default_sample_flags", _0x20ffea.default_sample_flags || 0x0);
            this.buildTrakSampleLists(_0x55afb1);
            return _0x20ffea.id;
          }
        };
        _0x1d941e.Box.prototype.computeSize = function (_0xcfe322) {
          var _0x3dbe4 = _0xcfe322 || new _0x5a7d91();
          _0x3dbe4.endianness = _0x5a7d91.BIG_ENDIAN;
          this.write(_0x3dbe4);
        };
        _0x4d4a69.prototype.addSample = function (_0x41c4f1, _0x59bf88, _0x36ba3d) {
          var _0x5b1f80 = _0x36ba3d || {};
          var _0x549bf2 = {};
          var _0x40e4e3 = this.getTrackById(_0x41c4f1);
          if (null !== _0x40e4e3) {
            _0x549bf2.number = _0x40e4e3.samples.length;
            _0x549bf2.track_id = _0x40e4e3.tkhd.track_id;
            _0x549bf2.timescale = _0x40e4e3.mdia.mdhd.timescale;
            _0x549bf2.description_index = _0x5b1f80.sample_description_index ? _0x5b1f80.sample_description_index - 0x1 : 0x0;
            _0x549bf2.description = _0x40e4e3.mdia.minf.stbl.stsd.entries[_0x549bf2.description_index];
            _0x549bf2.data = _0x59bf88;
            _0x549bf2.size = _0x59bf88.byteLength;
            _0x549bf2.alreadyRead = _0x549bf2.size;
            _0x549bf2.duration = _0x5b1f80.duration || 0x1;
            _0x549bf2.cts = _0x5b1f80.cts || 0x0;
            _0x549bf2.dts = _0x5b1f80.dts || 0x0;
            _0x549bf2.is_sync = _0x5b1f80.is_sync || false;
            _0x549bf2.is_leading = _0x5b1f80.is_leading || 0x0;
            _0x549bf2.depends_on = _0x5b1f80.depends_on || 0x0;
            _0x549bf2.is_depended_on = _0x5b1f80.is_depended_on || 0x0;
            _0x549bf2.has_redundancy = _0x5b1f80.has_redundancy || 0x0;
            _0x549bf2.degradation_priority = _0x5b1f80.degradation_priority || 0x0;
            _0x549bf2.offset = 0x0;
            _0x549bf2.subsamples = _0x5b1f80.subsamples;
            _0x40e4e3.samples.push(_0x549bf2);
            _0x40e4e3.samples_size += _0x549bf2.size;
            _0x40e4e3.samples_duration += _0x549bf2.duration;
            if (!_0x40e4e3.first_dts) {
              _0x40e4e3.first_dts = _0x5b1f80.dts;
            }
            this.processSamples();
            var _0x424e1c = this.createSingleSampleMoof(_0x549bf2);
            this.addBox(_0x424e1c);
            _0x424e1c.computeSize();
            _0x424e1c.trafs[0x0].truns[0x0].data_offset = _0x424e1c.size + 0x8;
            this.add("mdat").data = new Uint8Array(_0x59bf88);
            return _0x549bf2;
          }
        };
        _0x4d4a69.prototype.createSingleSampleMoof = function (_0x5a0dbb) {
          var _0x359bb0;
          _0x359bb0 = _0x5a0dbb.is_sync ? 33554432 : 0x10000;
          var _0x33880d = new _0x1d941e.moofBox();
          _0x33880d.add('mfhd').set("sequence_number", this.nextMoofNumber);
          this.nextMoofNumber++;
          var _0x442531 = _0x33880d.add("traf");
          var _0x3516a3 = this.getTrackById(_0x5a0dbb.track_id);
          _0x442531.add("tfhd").set("track_id", _0x5a0dbb.track_id).set("flags", _0x1d941e.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
          _0x442531.add('tfdt').set("baseMediaDecodeTime", _0x5a0dbb.dts - (_0x3516a3.first_dts || 0x0));
          _0x442531.add("trun").set('flags', _0x1d941e.TRUN_FLAGS_DATA_OFFSET | _0x1d941e.TRUN_FLAGS_DURATION | _0x1d941e.TRUN_FLAGS_SIZE | _0x1d941e.TRUN_FLAGS_FLAGS | _0x1d941e.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0x0).set("first_sample_flags", 0x0).set("sample_count", 0x1).set("sample_duration", [_0x5a0dbb.duration]).set("sample_size", [_0x5a0dbb.size]).set("sample_flags", [_0x359bb0]).set("sample_composition_time_offset", [_0x5a0dbb.cts - _0x5a0dbb.dts]);
          return _0x33880d;
        };
        _0x4d4a69.prototype.lastMoofIndex = 0x0;
        _0x4d4a69.prototype.samplesDataSize = 0x0;
        _0x4d4a69.prototype.resetTables = function () {
          var _0x305623;
          var _0x240603;
          var _0x5926c1;
          var _0x5b6e5b;
          var _0x385ce0;
          var _0x22b662;
          this.initial_duration = this.moov.mvhd.duration;
          this.moov.mvhd.duration = 0x0;
          for (_0x305623 = 0x0; _0x305623 < this.moov.traks.length; _0x305623++) {
            (_0x240603 = this.moov.traks[_0x305623]).tkhd.duration = 0x0;
            _0x240603.mdia.mdhd.duration = 0x0;
            (_0x240603.mdia.minf.stbl.stco || _0x240603.mdia.minf.stbl.co64).chunk_offsets = [];
            (_0x5926c1 = _0x240603.mdia.minf.stbl.stsc).first_chunk = [];
            _0x5926c1.samples_per_chunk = [];
            _0x5926c1.sample_description_index = [];
            (_0x240603.mdia.minf.stbl.stsz || _0x240603.mdia.minf.stbl.stz2).sample_sizes = [];
            (_0x5b6e5b = _0x240603.mdia.minf.stbl.stts).sample_counts = [];
            _0x5b6e5b.sample_deltas = [];
            if (_0x385ce0 = _0x240603.mdia.minf.stbl.ctts) {
              _0x385ce0.sample_counts = [];
              _0x385ce0.sample_offsets = [];
            }
            _0x22b662 = _0x240603.mdia.minf.stbl.stss;
            var _0x46631e = _0x240603.mdia.minf.stbl.boxes.indexOf(_0x22b662);
            if (-0x1 != _0x46631e) {
              _0x240603.mdia.minf.stbl.boxes[_0x46631e] = null;
            }
          }
        };
        _0x4d4a69.initSampleGroups = function (_0x4207d9, _0x57493c, _0x36ad89, _0x18f944, _0x117d87) {
          var _0x5abb9a;
          var _0x1dac5e;
          var _0x51e8ab;
          var _0x81e079;
          function _0x601e9e(_0x4eb5a5, _0x5653e8, _0x2c2207) {
            this.grouping_type = _0x4eb5a5;
            this.grouping_type_parameter = _0x5653e8;
            this.sbgp = _0x2c2207;
            this.last_sample_in_run = -0x1;
            this.entry_index = -0x1;
          }
          if (_0x57493c) {
            _0x57493c.sample_groups_info = [];
          }
          if (!_0x4207d9.sample_groups_info) {
            _0x4207d9.sample_groups_info = [];
          }
          for (_0x1dac5e = 0x0; _0x1dac5e < _0x36ad89.length; _0x1dac5e++) {
            _0x81e079 = _0x36ad89[_0x1dac5e].grouping_type + '/' + _0x36ad89[_0x1dac5e].grouping_type_parameter;
            _0x51e8ab = new _0x601e9e(_0x36ad89[_0x1dac5e].grouping_type, _0x36ad89[_0x1dac5e].grouping_type_parameter, _0x36ad89[_0x1dac5e]);
            if (_0x57493c) {
              _0x57493c.sample_groups_info[_0x81e079] = _0x51e8ab;
            }
            if (!_0x4207d9.sample_groups_info[_0x81e079]) {
              _0x4207d9.sample_groups_info[_0x81e079] = _0x51e8ab;
            }
            for (_0x5abb9a = 0x0; _0x5abb9a < _0x18f944.length; _0x5abb9a++) {
              if (_0x18f944[_0x5abb9a].grouping_type === _0x36ad89[_0x1dac5e].grouping_type) {
                _0x51e8ab.description = _0x18f944[_0x5abb9a];
                _0x51e8ab.description.used = true;
              }
            }
            if (_0x117d87) {
              for (_0x5abb9a = 0x0; _0x5abb9a < _0x117d87.length; _0x5abb9a++) {
                if (_0x117d87[_0x5abb9a].grouping_type === _0x36ad89[_0x1dac5e].grouping_type) {
                  _0x51e8ab.fragment_description = _0x117d87[_0x5abb9a];
                  _0x51e8ab.fragment_description.used = true;
                  _0x51e8ab.is_fragment = true;
                }
              }
            }
          }
          if (_0x57493c) {
            if (_0x117d87) {
              for (_0x1dac5e = 0x0; _0x1dac5e < _0x117d87.length; _0x1dac5e++) {
                if (!_0x117d87[_0x1dac5e].used && _0x117d87[_0x1dac5e].version >= 0x2) {
                  _0x81e079 = _0x117d87[_0x1dac5e].grouping_type + '/0';
                  (_0x51e8ab = new _0x601e9e(_0x117d87[_0x1dac5e].grouping_type, 0x0)).is_fragment = true;
                  if (!_0x57493c.sample_groups_info[_0x81e079]) {
                    _0x57493c.sample_groups_info[_0x81e079] = _0x51e8ab;
                  }
                }
              }
            }
          } else {
            for (_0x1dac5e = 0x0; _0x1dac5e < _0x18f944.length; _0x1dac5e++) {
              if (!_0x18f944[_0x1dac5e].used && _0x18f944[_0x1dac5e].version >= 0x2) {
                _0x81e079 = _0x18f944[_0x1dac5e].grouping_type + '/0';
                _0x51e8ab = new _0x601e9e(_0x18f944[_0x1dac5e].grouping_type, 0x0);
                if (!_0x4207d9.sample_groups_info[_0x81e079]) {
                  _0x4207d9.sample_groups_info[_0x81e079] = _0x51e8ab;
                }
              }
            }
          }
        };
        _0x4d4a69.setSampleGroupProperties = function (_0x19bfa7, _0x1951b3, _0x30968f, _0x5ea7a9) {
          var _0x1cd3e2;
          var _0x8c926d;
          _0x1951b3.sample_groups = [];
          for (_0x1cd3e2 in _0x5ea7a9) {
            var _0xf28d20;
            _0x1951b3.sample_groups[_0x1cd3e2] = {};
            _0x1951b3.sample_groups[_0x1cd3e2].grouping_type = _0x5ea7a9[_0x1cd3e2].grouping_type;
            _0x1951b3.sample_groups[_0x1cd3e2].grouping_type_parameter = _0x5ea7a9[_0x1cd3e2].grouping_type_parameter;
            if (_0x30968f >= _0x5ea7a9[_0x1cd3e2].last_sample_in_run) {
              if (_0x5ea7a9[_0x1cd3e2].last_sample_in_run < 0x0) {
                _0x5ea7a9[_0x1cd3e2].last_sample_in_run = 0x0;
              }
              _0x5ea7a9[_0x1cd3e2].entry_index++;
              if (_0x5ea7a9[_0x1cd3e2].entry_index <= _0x5ea7a9[_0x1cd3e2].sbgp.entries.length - 0x1) {
                _0x5ea7a9[_0x1cd3e2].last_sample_in_run += _0x5ea7a9[_0x1cd3e2].sbgp.entries[_0x5ea7a9[_0x1cd3e2].entry_index].sample_count;
              }
            }
            if (_0x5ea7a9[_0x1cd3e2].entry_index <= _0x5ea7a9[_0x1cd3e2].sbgp.entries.length - 0x1) {
              _0x1951b3.sample_groups[_0x1cd3e2].group_description_index = _0x5ea7a9[_0x1cd3e2].sbgp.entries[_0x5ea7a9[_0x1cd3e2].entry_index].group_description_index;
            } else {
              _0x1951b3.sample_groups[_0x1cd3e2].group_description_index = -0x1;
            }
            if (0x0 !== _0x1951b3.sample_groups[_0x1cd3e2].group_description_index) {
              _0xf28d20 = _0x5ea7a9[_0x1cd3e2].fragment_description ? _0x5ea7a9[_0x1cd3e2].fragment_description : _0x5ea7a9[_0x1cd3e2].description;
              if (_0x1951b3.sample_groups[_0x1cd3e2].group_description_index > 0x0) {
                _0x8c926d = _0x1951b3.sample_groups[_0x1cd3e2].group_description_index > 0xffff ? (_0x1951b3.sample_groups[_0x1cd3e2].group_description_index >> 0x10) - 0x1 : _0x1951b3.sample_groups[_0x1cd3e2].group_description_index - 0x1;
                if (_0xf28d20 && _0x8c926d >= 0x0) {
                  _0x1951b3.sample_groups[_0x1cd3e2].description = _0xf28d20.entries[_0x8c926d];
                }
              } else if (_0xf28d20 && _0xf28d20.version >= 0x2 && _0xf28d20.default_group_description_index > 0x0) {
                _0x1951b3.sample_groups[_0x1cd3e2].description = _0xf28d20.entries[_0xf28d20.default_group_description_index - 0x1];
              }
            }
          }
        };
        _0x4d4a69.process_sdtp = function (_0x1c9ce3, _0x33aa05, _0x31ee14) {
          if (_0x33aa05) {
            if (_0x1c9ce3) {
              _0x33aa05.is_leading = _0x1c9ce3.is_leading[_0x31ee14];
              _0x33aa05.depends_on = _0x1c9ce3.sample_depends_on[_0x31ee14];
              _0x33aa05.is_depended_on = _0x1c9ce3.sample_is_depended_on[_0x31ee14];
              _0x33aa05.has_redundancy = _0x1c9ce3.sample_has_redundancy[_0x31ee14];
            } else {
              _0x33aa05.is_leading = 0x0;
              _0x33aa05.depends_on = 0x0;
              _0x33aa05.is_depended_on = 0x0;
              _0x33aa05.has_redundancy = 0x0;
            }
          }
        };
        _0x4d4a69.prototype.buildSampleLists = function () {
          var _0x8af68b;
          var _0x5853c0;
          for (_0x8af68b = 0x0; _0x8af68b < this.moov.traks.length; _0x8af68b++) {
            _0x5853c0 = this.moov.traks[_0x8af68b];
            this.buildTrakSampleLists(_0x5853c0);
          }
        };
        _0x4d4a69.prototype.buildTrakSampleLists = function (_0x1090b0) {
          var _0x559746;
          var _0x544e69;
          var _0x2d5d63;
          var _0x876a4c;
          var _0x129a06;
          var _0x17ced9;
          var _0x1d1362;
          var _0x5d1671;
          var _0x35ef9d;
          var _0x209e01;
          var _0x13c380;
          var _0x26598f;
          var _0x4e993f;
          var _0x516063;
          var _0x2f2ca3;
          var _0x55528a;
          var _0x361845;
          var _0x2674ad;
          var _0x11a238;
          var _0x1c7c0b;
          var _0x3693a9;
          var _0x58a564;
          var _0x1c66b8;
          var _0x2c7e7d;
          _0x1090b0.samples = [];
          _0x1090b0.samples_duration = 0x0;
          _0x1090b0.samples_size = 0x0;
          _0x544e69 = _0x1090b0.mdia.minf.stbl.stco || _0x1090b0.mdia.minf.stbl.co64;
          _0x2d5d63 = _0x1090b0.mdia.minf.stbl.stsc;
          _0x876a4c = _0x1090b0.mdia.minf.stbl.stsz || _0x1090b0.mdia.minf.stbl.stz2;
          _0x129a06 = _0x1090b0.mdia.minf.stbl.stts;
          _0x17ced9 = _0x1090b0.mdia.minf.stbl.ctts;
          _0x1d1362 = _0x1090b0.mdia.minf.stbl.stss;
          _0x5d1671 = _0x1090b0.mdia.minf.stbl.stsd;
          _0x35ef9d = _0x1090b0.mdia.minf.stbl.subs;
          _0x26598f = _0x1090b0.mdia.minf.stbl.stdp;
          _0x209e01 = _0x1090b0.mdia.minf.stbl.sbgps;
          _0x13c380 = _0x1090b0.mdia.minf.stbl.sgpds;
          _0x2674ad = -0x1;
          _0x11a238 = -0x1;
          _0x1c7c0b = -0x1;
          _0x3693a9 = -0x1;
          _0x58a564 = 0x0;
          _0x1c66b8 = 0x0;
          _0x2c7e7d = 0x0;
          _0x4d4a69.initSampleGroups(_0x1090b0, null, _0x209e01, _0x13c380);
          if (undefined !== _0x876a4c) {
            for (_0x559746 = 0x0; _0x559746 < _0x876a4c.sample_sizes.length; _0x559746++) {
              var _0x60bf0 = {
                "number": _0x559746,
                track_id: _0x1090b0.tkhd.track_id,
                "timescale": _0x1090b0.mdia.mdhd.timescale,
                alreadyRead: 0x0
              };
              _0x1090b0.samples[_0x559746] = _0x60bf0;
              _0x60bf0.size = _0x876a4c.sample_sizes[_0x559746];
              _0x1090b0.samples_size += _0x60bf0.size;
              if (0x0 === _0x559746) {
                _0x516063 = 0x1;
                _0x4e993f = 0x0;
                _0x60bf0.chunk_index = _0x516063;
                _0x60bf0.chunk_run_index = _0x4e993f;
                _0x361845 = _0x2d5d63.samples_per_chunk[_0x4e993f];
                _0x55528a = 0x0;
                _0x2f2ca3 = _0x4e993f + 0x1 < _0x2d5d63.first_chunk.length ? _0x2d5d63.first_chunk[_0x4e993f + 0x1] - 0x1 : Infinity;
              } else if (_0x559746 < _0x361845) {
                _0x60bf0.chunk_index = _0x516063;
                _0x60bf0.chunk_run_index = _0x4e993f;
              } else {
                _0x516063++;
                _0x60bf0.chunk_index = _0x516063;
                _0x55528a = 0x0;
                if (!(_0x516063 <= _0x2f2ca3)) {
                  _0x2f2ca3 = 0x1 + ++_0x4e993f < _0x2d5d63.first_chunk.length ? _0x2d5d63.first_chunk[_0x4e993f + 0x1] - 0x1 : Infinity;
                }
                _0x60bf0.chunk_run_index = _0x4e993f;
                _0x361845 += _0x2d5d63.samples_per_chunk[_0x4e993f];
              }
              _0x60bf0.description_index = _0x2d5d63.sample_description_index[_0x60bf0.chunk_run_index] - 0x1;
              _0x60bf0.description = _0x5d1671.entries[_0x60bf0.description_index];
              _0x60bf0.offset = _0x544e69.chunk_offsets[_0x60bf0.chunk_index - 0x1] + _0x55528a;
              _0x55528a += _0x60bf0.size;
              if (_0x559746 > _0x2674ad) {
                _0x11a238++;
                if (_0x2674ad < 0x0) {
                  _0x2674ad = 0x0;
                }
                _0x2674ad += _0x129a06.sample_counts[_0x11a238];
              }
              if (_0x559746 > 0x0) {
                _0x1090b0.samples[_0x559746 - 0x1].duration = _0x129a06.sample_deltas[_0x11a238];
                _0x1090b0.samples_duration += _0x1090b0.samples[_0x559746 - 0x1].duration;
                _0x60bf0.dts = _0x1090b0.samples[_0x559746 - 0x1].dts + _0x1090b0.samples[_0x559746 - 0x1].duration;
              } else {
                _0x60bf0.dts = 0x0;
              }
              if (_0x17ced9) {
                if (_0x559746 >= _0x1c7c0b) {
                  _0x3693a9++;
                  if (_0x1c7c0b < 0x0) {
                    _0x1c7c0b = 0x0;
                  }
                  _0x1c7c0b += _0x17ced9.sample_counts[_0x3693a9];
                }
                _0x60bf0.cts = _0x1090b0.samples[_0x559746].dts + _0x17ced9.sample_offsets[_0x3693a9];
              } else {
                _0x60bf0.cts = _0x60bf0.dts;
              }
              if (_0x1d1362) {
                if (_0x559746 == _0x1d1362.sample_numbers[_0x58a564] - 0x1) {
                  _0x60bf0.is_sync = true;
                  _0x58a564++;
                } else {
                  _0x60bf0.is_sync = false;
                  _0x60bf0.degradation_priority = 0x0;
                }
                if (_0x35ef9d && _0x35ef9d.entries[_0x1c66b8].sample_delta + _0x2c7e7d == _0x559746 + 0x1) {
                  _0x60bf0.subsamples = _0x35ef9d.entries[_0x1c66b8].subsamples;
                  _0x2c7e7d += _0x35ef9d.entries[_0x1c66b8].sample_delta;
                  _0x1c66b8++;
                }
              } else {
                _0x60bf0.is_sync = true;
              }
              _0x4d4a69.process_sdtp(_0x1090b0.mdia.minf.stbl.sdtp, _0x60bf0, _0x60bf0.number);
              _0x60bf0.degradation_priority = _0x26598f ? _0x26598f.priority[_0x559746] : 0x0;
              if (_0x35ef9d && _0x35ef9d.entries[_0x1c66b8].sample_delta + _0x2c7e7d == _0x559746) {
                _0x60bf0.subsamples = _0x35ef9d.entries[_0x1c66b8].subsamples;
                _0x2c7e7d += _0x35ef9d.entries[_0x1c66b8].sample_delta;
              }
              if (_0x209e01.length > 0x0 || _0x13c380.length > 0x0) {
                _0x4d4a69.setSampleGroupProperties(_0x1090b0, _0x60bf0, _0x559746, _0x1090b0.sample_groups_info);
              }
            }
            if (_0x559746 > 0x0) {
              _0x1090b0.samples[_0x559746 - 0x1].duration = Math.max(_0x1090b0.mdia.mdhd.duration - _0x1090b0.samples[_0x559746 - 0x1].dts, 0x0);
              _0x1090b0.samples_duration += _0x1090b0.samples[_0x559746 - 0x1].duration;
            }
          }
        };
        _0x4d4a69.prototype.updateSampleLists = function () {
          var _0x11153b;
          var _0x5dd250;
          var _0x43342b;
          var _0x121040;
          var _0x2ff682;
          var _0x3fa4ee;
          var _0x284c68;
          var _0x4e9927;
          var _0x3e1a07;
          var _0x55e7a4;
          var _0x98ee3d;
          var _0x4a2a0f;
          var _0x5cf8fa;
          var _0x1615bc;
          var _0x115947;
          if (undefined !== this.moov) {
            for (; this.lastMoofIndex < this.moofs.length;) {
              _0x3e1a07 = this.moofs[this.lastMoofIndex];
              this.lastMoofIndex++;
              if ("moof" == _0x3e1a07.type) {
                _0x55e7a4 = _0x3e1a07;
                for (_0x11153b = 0x0; _0x11153b < _0x55e7a4.trafs.length; _0x11153b++) {
                  _0x98ee3d = _0x55e7a4.trafs[_0x11153b];
                  _0x4a2a0f = this.getTrackById(_0x98ee3d.tfhd.track_id);
                  _0x5cf8fa = this.getTrexById(_0x98ee3d.tfhd.track_id);
                  _0x121040 = _0x98ee3d.tfhd.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DESC ? _0x98ee3d.tfhd.default_sample_description_index : _0x5cf8fa ? _0x5cf8fa.default_sample_description_index : 0x1;
                  _0x2ff682 = _0x98ee3d.tfhd.flags & _0x1d941e.TFHD_FLAG_SAMPLE_DUR ? _0x98ee3d.tfhd.default_sample_duration : _0x5cf8fa ? _0x5cf8fa.default_sample_duration : 0x0;
                  _0x3fa4ee = _0x98ee3d.tfhd.flags & _0x1d941e.TFHD_FLAG_SAMPLE_SIZE ? _0x98ee3d.tfhd.default_sample_size : _0x5cf8fa ? _0x5cf8fa.default_sample_size : 0x0;
                  _0x284c68 = _0x98ee3d.tfhd.flags & _0x1d941e.TFHD_FLAG_SAMPLE_FLAGS ? _0x98ee3d.tfhd.default_sample_flags : _0x5cf8fa ? _0x5cf8fa.default_sample_flags : 0x0;
                  _0x98ee3d.sample_number = 0x0;
                  if (_0x98ee3d.sbgps.length > 0x0) {
                    _0x4d4a69.initSampleGroups(_0x4a2a0f, _0x98ee3d, _0x98ee3d.sbgps, _0x4a2a0f.mdia.minf.stbl.sgpds, _0x98ee3d.sgpds);
                  }
                  for (_0x5dd250 = 0x0; _0x5dd250 < _0x98ee3d.truns.length; _0x5dd250++) {
                    var _0x8877f4 = _0x98ee3d.truns[_0x5dd250];
                    for (_0x43342b = 0x0; _0x43342b < _0x8877f4.sample_count; _0x43342b++) {
                      (_0x1615bc = {}).moof_number = this.lastMoofIndex;
                      _0x1615bc.number_in_traf = _0x98ee3d.sample_number;
                      _0x98ee3d.sample_number++;
                      _0x1615bc.number = _0x4a2a0f.samples.length;
                      _0x98ee3d.first_sample_index = _0x4a2a0f.samples.length;
                      _0x4a2a0f.samples.push(_0x1615bc);
                      _0x1615bc.track_id = _0x4a2a0f.tkhd.track_id;
                      _0x1615bc.timescale = _0x4a2a0f.mdia.mdhd.timescale;
                      _0x1615bc.description_index = _0x121040 - 0x1;
                      _0x1615bc.description = _0x4a2a0f.mdia.minf.stbl.stsd.entries[_0x1615bc.description_index];
                      _0x1615bc.size = _0x3fa4ee;
                      if (_0x8877f4.flags & _0x1d941e.TRUN_FLAGS_SIZE) {
                        _0x1615bc.size = _0x8877f4.sample_size[_0x43342b];
                      }
                      _0x4a2a0f.samples_size += _0x1615bc.size;
                      _0x1615bc.duration = _0x2ff682;
                      if (_0x8877f4.flags & _0x1d941e.TRUN_FLAGS_DURATION) {
                        _0x1615bc.duration = _0x8877f4.sample_duration[_0x43342b];
                      }
                      _0x4a2a0f.samples_duration += _0x1615bc.duration;
                      if (_0x4a2a0f.first_traf_merged || _0x43342b > 0x0) {
                        _0x1615bc.dts = _0x4a2a0f.samples[_0x4a2a0f.samples.length - 0x2].dts + _0x4a2a0f.samples[_0x4a2a0f.samples.length - 0x2].duration;
                      } else {
                        if (_0x98ee3d.tfdt) {
                          _0x1615bc.dts = _0x98ee3d.tfdt.baseMediaDecodeTime;
                        } else {
                          _0x1615bc.dts = 0x0;
                        }
                        _0x4a2a0f.first_traf_merged = true;
                      }
                      _0x1615bc.cts = _0x1615bc.dts;
                      if (_0x8877f4.flags & _0x1d941e.TRUN_FLAGS_CTS_OFFSET) {
                        _0x1615bc.cts = _0x1615bc.dts + _0x8877f4.sample_composition_time_offset[_0x43342b];
                      }
                      _0x115947 = _0x284c68;
                      if (_0x8877f4.flags & _0x1d941e.TRUN_FLAGS_FLAGS) {
                        _0x115947 = _0x8877f4.sample_flags[_0x43342b];
                      } else if (0x0 === _0x43342b && _0x8877f4.flags & _0x1d941e.TRUN_FLAGS_FIRST_FLAG) {
                        _0x115947 = _0x8877f4.first_sample_flags;
                      }
                      _0x1615bc.is_sync = !(_0x115947 >> 0x10 & 0x1);
                      _0x1615bc.is_leading = _0x115947 >> 0x1a & 0x3;
                      _0x1615bc.depends_on = _0x115947 >> 0x18 & 0x3;
                      _0x1615bc.is_depended_on = _0x115947 >> 0x16 & 0x3;
                      _0x1615bc.has_redundancy = _0x115947 >> 0x14 & 0x3;
                      _0x1615bc.degradation_priority = 0xffff & _0x115947;
                      var _0x1ecb22;
                      var _0x5707f2 = !!(_0x98ee3d.tfhd.flags & _0x1d941e.TFHD_FLAG_BASE_DATA_OFFSET);
                      var _0x3061e1 = !!(_0x98ee3d.tfhd.flags & _0x1d941e.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
                      var _0x366c8a = !!(_0x8877f4.flags & _0x1d941e.TRUN_FLAGS_DATA_OFFSET);
                      _0x1ecb22 = _0x5707f2 ? _0x98ee3d.tfhd.base_data_offset : _0x3061e1 || 0x0 === _0x5dd250 ? _0x55e7a4.start : _0x4e9927;
                      _0x1615bc.offset = 0x0 === _0x5dd250 && 0x0 === _0x43342b ? _0x366c8a ? _0x1ecb22 + _0x8877f4.data_offset : _0x1ecb22 : _0x4e9927;
                      _0x4e9927 = _0x1615bc.offset + _0x1615bc.size;
                      if (_0x98ee3d.sbgps.length > 0x0 || _0x98ee3d.sgpds.length > 0x0 || _0x4a2a0f.mdia.minf.stbl.sbgps.length > 0x0 || _0x4a2a0f.mdia.minf.stbl.sgpds.length > 0x0) {
                        _0x4d4a69.setSampleGroupProperties(_0x4a2a0f, _0x1615bc, _0x1615bc.number_in_traf, _0x98ee3d.sample_groups_info);
                      }
                    }
                  }
                  if (_0x98ee3d.subs) {
                    _0x4a2a0f.has_fragment_subsamples = true;
                    var _0x27dc23 = _0x98ee3d.first_sample_index;
                    for (_0x5dd250 = 0x0; _0x5dd250 < _0x98ee3d.subs.entries.length; _0x5dd250++) {
                      _0x27dc23 += _0x98ee3d.subs.entries[_0x5dd250].sample_delta;
                      (_0x1615bc = _0x4a2a0f.samples[_0x27dc23 - 0x1]).subsamples = _0x98ee3d.subs.entries[_0x5dd250].subsamples;
                    }
                  }
                }
              }
            }
          }
        };
        _0x4d4a69.prototype.getSample = function (_0x408444, _0x3a1070) {
          var _0x192fdd;
          var _0x3b3562 = _0x408444.samples[_0x3a1070];
          if (!this.moov) {
            return null;
          }
          if (_0x3b3562.data) {
            if (_0x3b3562.alreadyRead == _0x3b3562.size) {
              return _0x3b3562;
            }
          } else {
            _0x3b3562.data = new Uint8Array(_0x3b3562.size);
            _0x3b3562.alreadyRead = 0x0;
            this.samplesDataSize += _0x3b3562.size;
            _0x8cf1a.debug("ISOFile", "Allocating sample #" + _0x3a1070 + " on track #" + _0x408444.tkhd.track_id + " of size " + _0x3b3562.size + " (total: " + this.samplesDataSize + ')');
          }
          for (;;) {
            var _0x3a8736 = this.stream.findPosition(true, _0x3b3562.offset + _0x3b3562.alreadyRead, false);
            if (!(_0x3a8736 > -0x1)) {
              return null;
            }
            var _0x31c759 = (_0x192fdd = this.stream.buffers[_0x3a8736]).byteLength - (_0x3b3562.offset + _0x3b3562.alreadyRead - _0x192fdd.fileStart);
            if (_0x3b3562.size - _0x3b3562.alreadyRead <= _0x31c759) {
              _0x8cf1a.debug('ISOFile', "Getting sample #" + _0x3a1070 + " data (alreadyRead: " + _0x3b3562.alreadyRead + " offset: " + (_0x3b3562.offset + _0x3b3562.alreadyRead - _0x192fdd.fileStart) + " read size: " + (_0x3b3562.size - _0x3b3562.alreadyRead) + " full size: " + _0x3b3562.size + ')');
              _0x5a7d91.memcpy(_0x3b3562.data.buffer, _0x3b3562.alreadyRead, _0x192fdd, _0x3b3562.offset + _0x3b3562.alreadyRead - _0x192fdd.fileStart, _0x3b3562.size - _0x3b3562.alreadyRead);
              _0x192fdd.usedBytes += _0x3b3562.size - _0x3b3562.alreadyRead;
              this.stream.logBufferLevel();
              _0x3b3562.alreadyRead = _0x3b3562.size;
              return _0x3b3562;
            }
            if (0x0 === _0x31c759) {
              return null;
            }
            _0x8cf1a.debug("ISOFile", "Getting sample #" + _0x3a1070 + " partial data (alreadyRead: " + _0x3b3562.alreadyRead + " offset: " + (_0x3b3562.offset + _0x3b3562.alreadyRead - _0x192fdd.fileStart) + " read size: " + _0x31c759 + " full size: " + _0x3b3562.size + ')');
            _0x5a7d91.memcpy(_0x3b3562.data.buffer, _0x3b3562.alreadyRead, _0x192fdd, _0x3b3562.offset + _0x3b3562.alreadyRead - _0x192fdd.fileStart, _0x31c759);
            _0x3b3562.alreadyRead += _0x31c759;
            _0x192fdd.usedBytes += _0x31c759;
            this.stream.logBufferLevel();
          }
        };
        _0x4d4a69.prototype.releaseSample = function (_0x2831f7, _0x3cf14c) {
          var _0x3bc47a = _0x2831f7.samples[_0x3cf14c];
          return _0x3bc47a.data ? (this.samplesDataSize -= _0x3bc47a.size, _0x3bc47a.data = null, _0x3bc47a.alreadyRead = 0x0, _0x3bc47a.size) : 0x0;
        };
        _0x4d4a69.prototype.getAllocatedSampleDataSize = function () {
          return this.samplesDataSize;
        };
        _0x4d4a69.prototype.getCodecs = function () {
          var _0x2b8a35;
          var _0x326d63 = '';
          for (_0x2b8a35 = 0x0; _0x2b8a35 < this.moov.traks.length; _0x2b8a35++) {
            if (_0x2b8a35 > 0x0) {
              _0x326d63 += ',';
            }
            _0x326d63 += this.moov.traks[_0x2b8a35].mdia.minf.stbl.stsd.entries[0x0].getCodec();
          }
          return _0x326d63;
        };
        _0x4d4a69.prototype.getTrexById = function (_0x3dd07e) {
          var _0x5d2b4a;
          if (!this.moov || !this.moov.mvex) {
            return null;
          }
          for (_0x5d2b4a = 0x0; _0x5d2b4a < this.moov.mvex.trexs.length; _0x5d2b4a++) {
            var _0x193ce3 = this.moov.mvex.trexs[_0x5d2b4a];
            if (_0x193ce3.track_id == _0x3dd07e) {
              return _0x193ce3;
            }
          }
          return null;
        };
        _0x4d4a69.prototype.getTrackById = function (_0x3348db) {
          if (undefined === this.moov) {
            return null;
          }
          for (var _0x3a3af6 = 0x0; _0x3a3af6 < this.moov.traks.length; _0x3a3af6++) {
            var _0x38edc0 = this.moov.traks[_0x3a3af6];
            if (_0x38edc0.tkhd.track_id == _0x3348db) {
              return _0x38edc0;
            }
          }
          return null;
        };
        _0x4d4a69.prototype.items = [];
        _0x4d4a69.prototype.itemsDataSize = 0x0;
        _0x4d4a69.prototype.flattenItemInfo = function () {
          var _0x2bf8bd;
          var _0xc35fab;
          var _0x35b202;
          var _0x1116e5 = this.items;
          var _0x1f377b = this.meta;
          if (null != _0x1f377b && undefined !== _0x1f377b.hdlr && undefined !== _0x1f377b.iinf) {
            for (_0x2bf8bd = 0x0; _0x2bf8bd < _0x1f377b.iinf.item_infos.length; _0x2bf8bd++) {
              (_0x35b202 = {}).id = _0x1f377b.iinf.item_infos[_0x2bf8bd].item_ID;
              _0x1116e5[_0x35b202.id] = _0x35b202;
              _0x35b202.ref_to = [];
              _0x35b202.name = _0x1f377b.iinf.item_infos[_0x2bf8bd].item_name;
              if (_0x1f377b.iinf.item_infos[_0x2bf8bd].protection_index > 0x0) {
                _0x35b202.protection = _0x1f377b.ipro.protections[_0x1f377b.iinf.item_infos[_0x2bf8bd].protection_index - 0x1];
              }
              if (_0x1f377b.iinf.item_infos[_0x2bf8bd].item_type) {
                _0x35b202.type = _0x1f377b.iinf.item_infos[_0x2bf8bd].item_type;
              } else {
                _0x35b202.type = "mime";
              }
              _0x35b202.content_type = _0x1f377b.iinf.item_infos[_0x2bf8bd].content_type;
              _0x35b202.content_encoding = _0x1f377b.iinf.item_infos[_0x2bf8bd].content_encoding;
            }
            if (_0x1f377b.iloc) {
              for (_0x2bf8bd = 0x0; _0x2bf8bd < _0x1f377b.iloc.items.length; _0x2bf8bd++) {
                var _0x2867ef = _0x1f377b.iloc.items[_0x2bf8bd];
                _0x35b202 = _0x1116e5[_0x2867ef.item_ID];
                if (0x0 !== _0x2867ef.data_reference_index) {
                  _0x8cf1a.warn("Item storage with reference to other files: not supported");
                  _0x35b202.source = _0x1f377b.dinf.boxes[_0x2867ef.data_reference_index - 0x1];
                }
                switch (_0x2867ef.construction_method) {
                  case 0x0:
                    break;
                  case 0x1:
                  case 0x2:
                    _0x8cf1a.warn("Item storage with construction_method : not supported");
                }
                _0x35b202.extents = [];
                _0x35b202.size = 0x0;
                for (_0xc35fab = 0x0; _0xc35fab < _0x2867ef.extents.length; _0xc35fab++) {
                  _0x35b202.extents[_0xc35fab] = {};
                  _0x35b202.extents[_0xc35fab].offset = _0x2867ef.extents[_0xc35fab].extent_offset + _0x2867ef.base_offset;
                  _0x35b202.extents[_0xc35fab].length = _0x2867ef.extents[_0xc35fab].extent_length;
                  _0x35b202.extents[_0xc35fab].alreadyRead = 0x0;
                  _0x35b202.size += _0x35b202.extents[_0xc35fab].length;
                }
              }
            }
            if (_0x1f377b.pitm) {
              _0x1116e5[_0x1f377b.pitm.item_id].primary = true;
            }
            if (_0x1f377b.iref) {
              for (_0x2bf8bd = 0x0; _0x2bf8bd < _0x1f377b.iref.references.length; _0x2bf8bd++) {
                var _0x48def3 = _0x1f377b.iref.references[_0x2bf8bd];
                for (_0xc35fab = 0x0; _0xc35fab < _0x48def3.references.length; _0xc35fab++) {
                  _0x1116e5[_0x48def3.from_item_ID].ref_to.push({
                    'type': _0x48def3.type,
                    'id': _0x48def3.references[_0xc35fab]
                  });
                }
              }
            }
            if (_0x1f377b.iprp) {
              for (var _0x4fa6ea = 0x0; _0x4fa6ea < _0x1f377b.iprp.ipmas.length; _0x4fa6ea++) {
                var _0x294161 = _0x1f377b.iprp.ipmas[_0x4fa6ea];
                for (_0x2bf8bd = 0x0; _0x2bf8bd < _0x294161.associations.length; _0x2bf8bd++) {
                  var _0x193f45 = _0x294161.associations[_0x2bf8bd];
                  if (undefined === (_0x35b202 = _0x1116e5[_0x193f45.id]).properties) {
                    _0x35b202.properties = {};
                    _0x35b202.properties.boxes = [];
                  }
                  for (_0xc35fab = 0x0; _0xc35fab < _0x193f45.props.length; _0xc35fab++) {
                    var _0x4db6a7 = _0x193f45.props[_0xc35fab];
                    if (_0x4db6a7.property_index > 0x0 && _0x4db6a7.property_index - 0x1 < _0x1f377b.iprp.ipco.boxes.length) {
                      var _0x4c623d = _0x1f377b.iprp.ipco.boxes[_0x4db6a7.property_index - 0x1];
                      _0x35b202.properties[_0x4c623d.type] = _0x4c623d;
                      _0x35b202.properties.boxes.push(_0x4c623d);
                    }
                  }
                }
              }
            }
          }
        };
        _0x4d4a69.prototype.getItem = function (_0x216fdc) {
          var _0x1f32f1;
          var _0x1a87ba;
          if (!this.meta) {
            return null;
          }
          if (!(_0x1a87ba = this.items[_0x216fdc]).data && _0x1a87ba.size) {
            _0x1a87ba.data = new Uint8Array(_0x1a87ba.size);
            _0x1a87ba.alreadyRead = 0x0;
            this.itemsDataSize += _0x1a87ba.size;
            _0x8cf1a.debug("ISOFile", "Allocating item #" + _0x216fdc + " of size " + _0x1a87ba.size + " (total: " + this.itemsDataSize + ')');
          } else {
            if (_0x1a87ba.alreadyRead === _0x1a87ba.size) {
              return _0x1a87ba;
            }
          }
          for (var _0x10c244 = 0x0; _0x10c244 < _0x1a87ba.extents.length; _0x10c244++) {
            var _0x2709f4 = _0x1a87ba.extents[_0x10c244];
            if (_0x2709f4.alreadyRead !== _0x2709f4.length) {
              var _0x4176e4 = this.stream.findPosition(true, _0x2709f4.offset + _0x2709f4.alreadyRead, false);
              if (!(_0x4176e4 > -0x1)) {
                return null;
              }
              var _0x497014 = (_0x1f32f1 = this.stream.buffers[_0x4176e4]).byteLength - (_0x2709f4.offset + _0x2709f4.alreadyRead - _0x1f32f1.fileStart);
              if (!(_0x2709f4.length - _0x2709f4.alreadyRead <= _0x497014)) {
                _0x8cf1a.debug('ISOFile', "Getting item #" + _0x216fdc + " extent #" + _0x10c244 + " partial data (alreadyRead: " + _0x2709f4.alreadyRead + " offset: " + (_0x2709f4.offset + _0x2709f4.alreadyRead - _0x1f32f1.fileStart) + " read size: " + _0x497014 + " full extent size: " + _0x2709f4.length + " full item size: " + _0x1a87ba.size + ')');
                _0x5a7d91.memcpy(_0x1a87ba.data.buffer, _0x1a87ba.alreadyRead, _0x1f32f1, _0x2709f4.offset + _0x2709f4.alreadyRead - _0x1f32f1.fileStart, _0x497014);
                _0x2709f4.alreadyRead += _0x497014;
                _0x1a87ba.alreadyRead += _0x497014;
                _0x1f32f1.usedBytes += _0x497014;
                this.stream.logBufferLevel();
                return null;
              }
              _0x8cf1a.debug("ISOFile", "Getting item #" + _0x216fdc + " extent #" + _0x10c244 + " data (alreadyRead: " + _0x2709f4.alreadyRead + " offset: " + (_0x2709f4.offset + _0x2709f4.alreadyRead - _0x1f32f1.fileStart) + " read size: " + (_0x2709f4.length - _0x2709f4.alreadyRead) + " full extent size: " + _0x2709f4.length + " full item size: " + _0x1a87ba.size + ')');
              _0x5a7d91.memcpy(_0x1a87ba.data.buffer, _0x1a87ba.alreadyRead, _0x1f32f1, _0x2709f4.offset + _0x2709f4.alreadyRead - _0x1f32f1.fileStart, _0x2709f4.length - _0x2709f4.alreadyRead);
              _0x1f32f1.usedBytes += _0x2709f4.length - _0x2709f4.alreadyRead;
              this.stream.logBufferLevel();
              _0x1a87ba.alreadyRead += _0x2709f4.length - _0x2709f4.alreadyRead;
              _0x2709f4.alreadyRead = _0x2709f4.length;
            }
          }
          return _0x1a87ba.alreadyRead === _0x1a87ba.size ? _0x1a87ba : null;
        };
        _0x4d4a69.prototype.releaseItem = function (_0x95b3a3) {
          var _0x287984 = this.items[_0x95b3a3];
          if (_0x287984.data) {
            this.itemsDataSize -= _0x287984.size;
            _0x287984.data = null;
            _0x287984.alreadyRead = 0x0;
            for (var _0x5b249a = 0x0; _0x5b249a < _0x287984.extents.length; _0x5b249a++) {
              _0x287984.extents[_0x5b249a].alreadyRead = 0x0;
            }
            return _0x287984.size;
          }
          return 0x0;
        };
        _0x4d4a69.prototype.processItems = function (_0x75a825) {
          for (var _0x3af923 in this.items) {
            var _0x752cd3 = this.items[_0x3af923];
            this.getItem(_0x752cd3.id);
            if (_0x75a825 && !_0x752cd3.sent) {
              _0x75a825(_0x752cd3);
              _0x752cd3.sent = true;
              _0x752cd3.data = null;
            }
          }
        };
        _0x4d4a69.prototype.hasItem = function (_0x89eced) {
          for (var _0x2d05a in this.items) {
            var _0x4370c4 = this.items[_0x2d05a];
            if (_0x4370c4.name === _0x89eced) {
              return _0x4370c4.id;
            }
          }
          return -0x1;
        };
        _0x4d4a69.prototype.getMetaHandler = function () {
          return this.meta ? this.meta.hdlr.handler : null;
        };
        _0x4d4a69.prototype.getPrimaryItem = function () {
          return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
        };
        _0x4d4a69.prototype.itemToFragmentedTrackFile = function (_0x3b6cb8) {
          var _0xf3869e;
          var _0xde4938 = _0x3b6cb8 || {};
          if (null == (_0xf3869e = _0xde4938.itemId ? this.getItem(_0xde4938.itemId) : this.getPrimaryItem())) {
            return null;
          }
          var _0x33bc36 = new _0x4d4a69();
          _0x33bc36.discardMdatData = false;
          var _0x4c374f = {
            type: _0xf3869e.type,
            description_boxes: _0xf3869e.properties.boxes
          };
          if (_0xf3869e.properties.ispe) {
            _0x4c374f.width = _0xf3869e.properties.ispe.image_width;
            _0x4c374f.height = _0xf3869e.properties.ispe.image_height;
          }
          var _0x37eb1a = _0x33bc36.addTrack(_0x4c374f);
          return _0x37eb1a ? (_0x33bc36.addSample(_0x37eb1a, _0xf3869e.data), _0x33bc36) : null;
        };
        _0x4d4a69.prototype.write = function (_0x51c076) {
          for (var _0x3e9fdc = 0x0; _0x3e9fdc < this.boxes.length; _0x3e9fdc++) {
            this.boxes[_0x3e9fdc].write(_0x51c076);
          }
        };
        _0x4d4a69.prototype.createFragment = function (_0x5849ea, _0xe25869, _0x4d22be) {
          var _0x4ba720 = this.getTrackById(_0x5849ea);
          var _0x5195d1 = this.getSample(_0x4ba720, _0xe25869);
          if (null == _0x5195d1) {
            _0x5195d1 = _0x4ba720.samples[_0xe25869];
            if (this.nextSeekPosition) {
              this.nextSeekPosition = Math.min(_0x5195d1.offset + _0x5195d1.alreadyRead, this.nextSeekPosition);
            } else {
              this.nextSeekPosition = _0x4ba720.samples[_0xe25869].offset + _0x5195d1.alreadyRead;
            }
            return null;
          }
          var _0x5ec4b3 = _0x4d22be || new _0x5a7d91();
          _0x5ec4b3.endianness = _0x5a7d91.BIG_ENDIAN;
          var _0x5ee032 = this.createSingleSampleMoof(_0x5195d1);
          _0x5ee032.write(_0x5ec4b3);
          _0x5ee032.trafs[0x0].truns[0x0].data_offset = _0x5ee032.size + 0x8;
          _0x8cf1a.debug("MP4Box", "Adjusting data_offset with new value " + _0x5ee032.trafs[0x0].truns[0x0].data_offset);
          _0x5ec4b3.adjustUint32(_0x5ee032.trafs[0x0].truns[0x0].data_offset_position, _0x5ee032.trafs[0x0].truns[0x0].data_offset);
          var _0xed7e11 = new _0x1d941e.mdatBox();
          _0xed7e11.data = _0x5195d1.data;
          _0xed7e11.write(_0x5ec4b3);
          return _0x5ec4b3;
        };
        _0x4d4a69.writeInitializationSegment = function (_0x162d7b, _0x107049, _0x3beb5c, _0x5f182b) {
          var _0x4a6468;
          _0x8cf1a.debug("ISOFile", "Generating initialization segment");
          var _0x4b6e83 = new _0x5a7d91();
          _0x4b6e83.endianness = _0x5a7d91.BIG_ENDIAN;
          _0x162d7b.write(_0x4b6e83);
          var _0x257388 = _0x107049.add("mvex");
          if (_0x3beb5c) {
            _0x257388.add("mehd").set("fragment_duration", _0x3beb5c);
          }
          for (_0x4a6468 = 0x0; _0x4a6468 < _0x107049.traks.length; _0x4a6468++) {
            _0x257388.add('trex').set("track_id", _0x107049.traks[_0x4a6468].tkhd.track_id).set("default_sample_description_index", 0x1).set("default_sample_duration", _0x5f182b).set("default_sample_size", 0x0).set("default_sample_flags", 0x10000);
          }
          _0x107049.write(_0x4b6e83);
          return _0x4b6e83.buffer;
        };
        _0x4d4a69.prototype.save = function (_0x525903) {
          var _0x17139b = new _0x5a7d91();
          _0x17139b.endianness = _0x5a7d91.BIG_ENDIAN;
          this.write(_0x17139b);
          _0x17139b.save(_0x525903);
        };
        _0x4d4a69.prototype.getBuffer = function () {
          var _0x4c23a1 = new _0x5a7d91();
          _0x4c23a1.endianness = _0x5a7d91.BIG_ENDIAN;
          this.write(_0x4c23a1);
          return _0x4c23a1.buffer;
        };
        _0x4d4a69.prototype.initializeSegmentation = function () {
          var _0x14dec9;
          var _0x332dad;
          var _0x2ea372;
          var _0x2e3e2f;
          if (null === this.onSegment) {
            _0x8cf1a.warn("MP4Box", "No segmentation callback set!");
          }
          if (!this.isFragmentationInitialized) {
            this.isFragmentationInitialized = true;
            this.nextMoofNumber = 0x0;
            this.resetTables();
          }
          _0x332dad = [];
          for (_0x14dec9 = 0x0; _0x14dec9 < this.fragmentedTracks.length; _0x14dec9++) {
            var _0xc3d0e5 = new _0x1d941e.moovBox();
            _0xc3d0e5.mvhd = this.moov.mvhd;
            _0xc3d0e5.boxes.push(_0xc3d0e5.mvhd);
            _0x2ea372 = this.getTrackById(this.fragmentedTracks[_0x14dec9].id);
            _0xc3d0e5.boxes.push(_0x2ea372);
            _0xc3d0e5.traks.push(_0x2ea372);
            (_0x2e3e2f = {}).id = _0x2ea372.tkhd.track_id;
            _0x2e3e2f.user = this.fragmentedTracks[_0x14dec9].user;
            _0x2e3e2f.buffer = _0x4d4a69.writeInitializationSegment(this.ftyp, _0xc3d0e5, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : undefined, this.moov.traks[_0x14dec9].samples.length > 0x0 ? this.moov.traks[_0x14dec9].samples[0x0].duration : 0x0);
            _0x332dad.push(_0x2e3e2f);
          }
          return _0x332dad;
        };
        _0x1d941e.Box.prototype.printHeader = function (_0x4b6d64) {
          this.size += 0x8;
          if (this.size > _0x31145a) {
            this.size += 0x8;
          }
          if ("uuid" === this.type) {
            this.size += 0x10;
          }
          _0x4b6d64.log(_0x4b6d64.indent + 'size:' + this.size);
          _0x4b6d64.log(_0x4b6d64.indent + "type:" + this.type);
        };
        _0x1d941e.FullBox.prototype.printHeader = function (_0x191c05) {
          this.size += 0x4;
          _0x1d941e.Box.prototype.printHeader.call(this, _0x191c05);
          _0x191c05.log(_0x191c05.indent + "version:" + this.version);
          _0x191c05.log(_0x191c05.indent + "flags:" + this.flags);
        };
        _0x1d941e.Box.prototype.print = function (_0x8252a5) {
          this.printHeader(_0x8252a5);
        };
        _0x1d941e.ContainerBox.prototype.print = function (_0x443ecb) {
          this.printHeader(_0x443ecb);
          for (var _0x54f98f = 0x0; _0x54f98f < this.boxes.length; _0x54f98f++) {
            if (this.boxes[_0x54f98f]) {
              var _0x543b2e = _0x443ecb.indent;
              _0x443ecb.indent += " ";
              this.boxes[_0x54f98f].print(_0x443ecb);
              _0x443ecb.indent = _0x543b2e;
            }
          }
        };
        _0x4d4a69.prototype.print = function (_0xbd10ba) {
          _0xbd10ba.indent = '';
          for (var _0x3f4b4b = 0x0; _0x3f4b4b < this.boxes.length; _0x3f4b4b++) {
            if (this.boxes[_0x3f4b4b]) {
              this.boxes[_0x3f4b4b].print(_0xbd10ba);
            }
          }
        };
        _0x1d941e.mvhdBox.prototype.print = function (_0x488e72) {
          _0x1d941e.FullBox.prototype.printHeader.call(this, _0x488e72);
          _0x488e72.log(_0x488e72.indent + "creation_time: " + this.creation_time);
          _0x488e72.log(_0x488e72.indent + "modification_time: " + this.modification_time);
          _0x488e72.log(_0x488e72.indent + "timescale: " + this.timescale);
          _0x488e72.log(_0x488e72.indent + "duration: " + this.duration);
          _0x488e72.log(_0x488e72.indent + "rate: " + this.rate);
          _0x488e72.log(_0x488e72.indent + "volume: " + (this.volume >> 0x8));
          _0x488e72.log(_0x488e72.indent + "matrix: " + this.matrix.join(", "));
          _0x488e72.log(_0x488e72.indent + "next_track_id: " + this.next_track_id);
        };
        _0x1d941e.tkhdBox.prototype.print = function (_0x3c4bfc) {
          _0x1d941e.FullBox.prototype.printHeader.call(this, _0x3c4bfc);
          _0x3c4bfc.log(_0x3c4bfc.indent + "creation_time: " + this.creation_time);
          _0x3c4bfc.log(_0x3c4bfc.indent + "modification_time: " + this.modification_time);
          _0x3c4bfc.log(_0x3c4bfc.indent + "track_id: " + this.track_id);
          _0x3c4bfc.log(_0x3c4bfc.indent + "duration: " + this.duration);
          _0x3c4bfc.log(_0x3c4bfc.indent + "volume: " + (this.volume >> 0x8));
          _0x3c4bfc.log(_0x3c4bfc.indent + "matrix: " + this.matrix.join(", "));
          _0x3c4bfc.log(_0x3c4bfc.indent + "layer: " + this.layer);
          _0x3c4bfc.log(_0x3c4bfc.indent + "alternate_group: " + this.alternate_group);
          _0x3c4bfc.log(_0x3c4bfc.indent + "width: " + this.width);
          _0x3c4bfc.log(_0x3c4bfc.indent + "height: " + this.height);
        };
        var _0x197779 = function (_0x7d1707, _0x5614d1) {
          var _0x19a682 = undefined === _0x7d1707 || _0x7d1707;
          var _0x55bc3f = new _0x4d4a69(_0x5614d1);
          _0x55bc3f.discardMdatData = !_0x19a682;
          return _0x55bc3f;
        };
        _0xaab1e8.createFile = _0x197779;
      },
      0x249: _0x2c9d3d => {
        function _0xe1b8d4(_0x40d201, _0xc49d6f, _0x3697cc, _0x1e49c9) {
          var _0x33b28e = _0xc49d6f >= 1.5 * _0x3697cc;
          return Math.round(_0x40d201 / _0x3697cc) + " " + _0x1e49c9 + (_0x33b28e ? 's' : '');
        }
        _0x2c9d3d.exports = function (_0x210aa9, _0x9d204c) {
          _0x9d204c = _0x9d204c || {};
          var _0x4f2b8a;
          var _0x1b8320;
          var _0x3f0322 = typeof _0x210aa9;
          if ("string" === _0x3f0322 && _0x210aa9.length > 0x0) {
            return function (_0x44836f) {
              if (!((_0x44836f = String(_0x44836f)).length > 0x64)) {
                var _0x39a578 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0x44836f);
                if (_0x39a578) {
                  var _0x58c756 = parseFloat(_0x39a578[0x1]);
                  switch ((_0x39a578[0x2] || 'ms').toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case 'yr':
                    case 'y':
                      return 0x758fac300 * _0x58c756;
                    case "weeks":
                    case "week":
                    case 'w':
                      return _0x58c756 * 604800000;
                    case "days":
                    case "day":
                    case 'd':
                      return _0x58c756 * 86400000;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case 'hr':
                    case 'h':
                      return _0x58c756 * 3600000;
                    case "minutes":
                    case "minute":
                    case 'mins':
                    case 'min':
                    case 'm':
                      return _0x58c756 * 60000;
                    case "seconds":
                    case "second":
                    case 'secs':
                    case "sec":
                    case 's':
                      return _0x58c756 * 0x3e8;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case 'ms':
                      return _0x58c756;
                    default:
                      return;
                  }
                }
              }
            }(_0x210aa9);
          }
          if ('number' === _0x3f0322 && isFinite(_0x210aa9)) {
            return _0x9d204c.long ? (_0x4f2b8a = _0x210aa9, (_0x1b8320 = Math.abs(_0x4f2b8a)) >= 86400000 ? _0xe1b8d4(_0x4f2b8a, _0x1b8320, 86400000, "day") : _0x1b8320 >= 3600000 ? _0xe1b8d4(_0x4f2b8a, _0x1b8320, 3600000, "hour") : _0x1b8320 >= 60000 ? _0xe1b8d4(_0x4f2b8a, _0x1b8320, 60000, "minute") : _0x1b8320 >= 0x3e8 ? _0xe1b8d4(_0x4f2b8a, _0x1b8320, 0x3e8, "second") : _0x4f2b8a + " ms") : function (_0x3037f8) {
              var _0x38b1df = Math.abs(_0x3037f8);
              return _0x38b1df >= 86400000 ? Math.round(_0x3037f8 / 86400000) + 'd' : _0x38b1df >= 3600000 ? Math.round(_0x3037f8 / 3600000) + 'h' : _0x38b1df >= 60000 ? Math.round(_0x3037f8 / 60000) + 'm' : _0x38b1df >= 0x3e8 ? Math.round(_0x3037f8 / 0x3e8) + 's' : _0x3037f8 + 'ms';
            }(_0x210aa9);
          }
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0x210aa9));
        };
      },
      0x25e: _0x491bc5 => {
        var _0x3b4933;
        var _0x2b7781;
        var _0x5375cf = _0x491bc5.exports = {};
        function _0x52fca8() {
          throw new Error("setTimeout has not been defined");
        }
        function _0x55aef9() {
          throw new Error("clearTimeout has not been defined");
        }
        function _0x5ee78c(_0x14b0bf) {
          if (_0x3b4933 === setTimeout) {
            return setTimeout(_0x14b0bf, 0x0);
          }
          if ((_0x3b4933 === _0x52fca8 || !_0x3b4933) && setTimeout) {
            _0x3b4933 = setTimeout;
            return setTimeout(_0x14b0bf, 0x0);
          }
          try {
            return _0x3b4933(_0x14b0bf, 0x0);
          } catch (_0x40ee3b) {
            try {
              return _0x3b4933.call(null, _0x14b0bf, 0x0);
            } catch (_0x38dda0) {
              return _0x3b4933.call(this, _0x14b0bf, 0x0);
            }
          }
        }
        !function () {
          try {
            _0x3b4933 = 'function' == typeof setTimeout ? setTimeout : _0x52fca8;
          } catch (_0x56252e) {
            _0x3b4933 = _0x52fca8;
          }
          try {
            _0x2b7781 = 'function' == typeof clearTimeout ? clearTimeout : _0x55aef9;
          } catch (_0x1cc97e) {
            _0x2b7781 = _0x55aef9;
          }
        }();
        var _0x2942ae;
        var _0x386af6 = [];
        var _0x1ee1bf = false;
        var _0x1449a4 = -0x1;
        function _0x2f1f1c() {
          if (_0x1ee1bf && _0x2942ae) {
            _0x1ee1bf = false;
            if (_0x2942ae.length) {
              _0x386af6 = _0x2942ae.concat(_0x386af6);
            } else {
              _0x1449a4 = -0x1;
            }
            if (_0x386af6.length) {
              _0x110fc0();
            }
          }
        }
        function _0x110fc0() {
          if (!_0x1ee1bf) {
            var _0xa29a48 = _0x5ee78c(_0x2f1f1c);
            _0x1ee1bf = true;
            for (var _0x3933df = _0x386af6.length; _0x3933df;) {
              _0x2942ae = _0x386af6;
              for (_0x386af6 = []; ++_0x1449a4 < _0x3933df;) {
                if (_0x2942ae) {
                  _0x2942ae[_0x1449a4].run();
                }
              }
              _0x1449a4 = -0x1;
              _0x3933df = _0x386af6.length;
            }
            _0x2942ae = null;
            _0x1ee1bf = false;
            (function (_0x1303d1) {
              if (_0x2b7781 === clearTimeout) {
                return clearTimeout(_0x1303d1);
              }
              if ((_0x2b7781 === _0x55aef9 || !_0x2b7781) && clearTimeout) {
                _0x2b7781 = clearTimeout;
                return clearTimeout(_0x1303d1);
              }
              try {
                return _0x2b7781(_0x1303d1);
              } catch (_0x37cb9b) {
                try {
                  return _0x2b7781.call(null, _0x1303d1);
                } catch (_0x2e2960) {
                  return _0x2b7781.call(this, _0x1303d1);
                }
              }
            })(_0xa29a48);
          }
        }
        function _0x33f919(_0x2ba25c, _0x32f2bd) {
          this.fun = _0x2ba25c;
          this.array = _0x32f2bd;
        }
        function _0x1b23e4() {}
        _0x5375cf.nextTick = function (_0x1f4026) {
          var _0x331852 = new Array(arguments.length - 0x1);
          if (arguments.length > 0x1) {
            for (var _0x3e7acd = 0x1; _0x3e7acd < arguments.length; _0x3e7acd++) {
              _0x331852[_0x3e7acd - 0x1] = arguments[_0x3e7acd];
            }
          }
          _0x386af6.push(new _0x33f919(_0x1f4026, _0x331852));
          if (!(0x1 !== _0x386af6.length || _0x1ee1bf)) {
            _0x5ee78c(_0x110fc0);
          }
        };
        _0x33f919.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        _0x5375cf.title = "browser";
        _0x5375cf.browser = true;
        _0x5375cf.env = {};
        _0x5375cf.argv = [];
        _0x5375cf.version = '';
        _0x5375cf.versions = {};
        _0x5375cf.on = _0x1b23e4;
        _0x5375cf.addListener = _0x1b23e4;
        _0x5375cf.once = _0x1b23e4;
        _0x5375cf.off = _0x1b23e4;
        _0x5375cf.removeListener = _0x1b23e4;
        _0x5375cf.removeAllListeners = _0x1b23e4;
        _0x5375cf.emit = _0x1b23e4;
        _0x5375cf.prependListener = _0x1b23e4;
        _0x5375cf.prependOnceListener = _0x1b23e4;
        _0x5375cf.listeners = function (_0xef0200) {
          return [];
        };
        _0x5375cf.binding = function (_0x4f1b27) {
          throw new Error("process.binding is not supported");
        };
        _0x5375cf.cwd = function () {
          return '/';
        };
        _0x5375cf.chdir = function (_0x46e969) {
          throw new Error("process.chdir is not supported");
        };
        _0x5375cf.umask = function () {
          return 0x0;
        };
      },
      0x254: (_0x41d335, _0x30fefe, _0x40f759) => {
        let _0x565b8;
        _0x41d335.exports = 'function' == typeof queueMicrotask ? queueMicrotask.bind("undefined" != typeof window ? window : _0x40f759.g) : _0x477f06 => (_0x565b8 || (_0x565b8 = Promise.resolve())).then(_0x477f06)["catch"](_0x45fd08 => setTimeout(() => {
          throw _0x45fd08;
        }, 0x0));
      },
      0x23: _0x15257c => {
        _0x15257c.exports = function (_0x1a98ac) {
          const _0x34a55e = +Date.now();
          const _0x124755 = 0xa * (_0x1a98ac || 0x5);
          const _0x21e7f1 = [0x0];
          let _0x406a41 = 0x1;
          let _0x22025d = ((+Date.now() - _0x34a55e) / 0x64 & 0xffff) - 0x1 & 0xffff;
          return function (_0x3caf7a) {
            const _0x352a47 = (+Date.now() - _0x34a55e) / 0x64 & 0xffff;
            let _0x1e8f3c = _0x352a47 - _0x22025d & 0xffff;
            if (_0x1e8f3c > _0x124755) {
              _0x1e8f3c = _0x124755;
            }
            for (_0x22025d = _0x352a47; _0x1e8f3c--;) {
              if (_0x406a41 === _0x124755) {
                _0x406a41 = 0x0;
              }
              _0x21e7f1[_0x406a41] = _0x21e7f1[0x0 === _0x406a41 ? _0x124755 - 0x1 : _0x406a41 - 0x1];
              _0x406a41++;
            }
            if (_0x3caf7a) {
              _0x21e7f1[_0x406a41 - 0x1] += _0x3caf7a;
            }
            const _0x2ec305 = _0x21e7f1[_0x406a41 - 0x1];
            const _0x39d430 = _0x21e7f1.length < _0x124755 ? 0x0 : _0x21e7f1[_0x406a41 === _0x124755 ? 0x0 : _0x406a41];
            return _0x21e7f1.length < 0xa ? _0x2ec305 : 0xa * (_0x2ec305 - _0x39d430) / _0x21e7f1.length;
          };
        };
      },
      0x284: _0x6f663 => {
        'use strict';
  
        _0x6f663.exports = function (_0x29e3d0 = 0x10000) {
          _0x29e3d0 = _0x29e3d0 || 0x10000;
          var _0x4930ea = new Uint8Array(0x0);
          return new TransformStream({
            'transform'(_0x12488b, _0x3895b9) {
              for (_0x4930ea = function (_0x210c31 = []) {
                if (!_0x210c31 || !_0x210c31.length) {
                  return false;
                }
                var _0x217f80 = 0x0;
                _0x210c31.forEach(_0x4acc98 => _0x217f80 += _0x4acc98.length);
                var _0x2a93cd = new Uint8Array(_0x217f80);
                var _0x5997d7 = 0x0;
                _0x210c31.forEach(_0x45bfea => {
                  _0x2a93cd.set(_0x45bfea, _0x5997d7);
                  _0x5997d7 += _0x45bfea.length;
                });
                return _0x2a93cd;
              }([_0x4930ea, _0x12488b]); _0x4930ea.length >= _0x29e3d0;) {
                const _0x31803f = _0x4930ea.slice(0x0, _0x29e3d0);
                _0x3895b9.enqueue(_0x31803f);
                _0x4930ea = _0x4930ea.slice(_0x29e3d0);
              }
            },
            'flush'(_0x526467) {
              if (_0x4930ea.length > 0x0) {
                _0x526467.enqueue(_0x4930ea);
              }
            }
          });
        };
      },
      0x25b: _0x19162f => {
        _0x19162f.exports = {
          'encode': _0xe9bfef => {
            var _0x20ebe7;
            var _0x1fc546;
            var _0x161545;
            var _0x5d0b6a;
            var _0x40b55e;
            var _0x1a354b;
            var _0xb038f;
            var _0x5e683c = '';
            var _0x5dcfc5 = 0x0;
            for (_0xe9bfef = function (_0x46bdc3) {
              _0x46bdc3 = _0x46bdc3.replace(/\r\n/g, "\n");
              var _0x1aa003 = '';
              for (var _0x3c5cd0 = 0x0; _0x3c5cd0 < _0x46bdc3.length; _0x3c5cd0++) {
                var _0x32e490 = _0x46bdc3.charCodeAt(_0x3c5cd0);
                if (_0x32e490 < 0x80) {
                  _0x1aa003 += String.fromCharCode(_0x32e490);
                } else if (_0x32e490 < 0x800) {
                  _0x1aa003 += String.fromCharCode(_0x32e490 >> 0x6 | 0xc0);
                  _0x1aa003 += String.fromCharCode(0x3f & _0x32e490 | 0x80);
                } else {
                  _0x1aa003 += String.fromCharCode(_0x32e490 >> 0xc | 0xe0);
                  _0x1aa003 += String.fromCharCode(_0x32e490 >> 0x6 & 0x3f | 0x80);
                  _0x1aa003 += String.fromCharCode(0x3f & _0x32e490 | 0x80);
                }
              }
              return _0x1aa003;
            }(_0xe9bfef); _0x5dcfc5 < _0xe9bfef.length;) {
              _0x5d0b6a = (_0x20ebe7 = _0xe9bfef.charCodeAt(_0x5dcfc5++)) >> 0x2;
              _0x40b55e = (0x3 & _0x20ebe7) << 0x4 | (_0x1fc546 = _0xe9bfef.charCodeAt(_0x5dcfc5++)) >> 0x4;
              _0x1a354b = (0xf & _0x1fc546) << 0x2 | (_0x161545 = _0xe9bfef.charCodeAt(_0x5dcfc5++)) >> 0x6;
              _0xb038f = 0x3f & _0x161545;
              if (isNaN(_0x1fc546)) {
                _0x1a354b = _0xb038f = 0x40;
              } else if (isNaN(_0x161545)) {
                _0xb038f = 0x40;
              }
              _0x5e683c += "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x5d0b6a) + "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x40b55e) + "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x1a354b) + "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0xb038f);
            }
            return _0x5e683c;
          },
          'decode': _0x169c48 => {
            var _0x1d8777;
            var _0x382168;
            var _0x4fcc58;
            var _0x5f28a4;
            var _0x47e53a;
            var _0x5f422f;
            var _0x4418eb = '';
            var _0x786890 = 0x0;
            for (_0x169c48 = _0x169c48.replace(/[^A-Za-z0-9\+\/\=]/g, ''); _0x786890 < _0x169c48.length;) {
              _0x1d8777 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x169c48.charAt(_0x786890++)) << 0x2 | (_0x5f28a4 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x169c48.charAt(_0x786890++))) >> 0x4;
              _0x382168 = (0xf & _0x5f28a4) << 0x4 | (_0x47e53a = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x169c48.charAt(_0x786890++))) >> 0x2;
              _0x4fcc58 = (0x3 & _0x47e53a) << 0x6 | (_0x5f422f = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x169c48.charAt(_0x786890++)));
              _0x4418eb += String.fromCharCode(_0x1d8777);
              if (0x40 != _0x47e53a) {
                _0x4418eb += String.fromCharCode(_0x382168);
              }
              if (0x40 != _0x5f422f) {
                _0x4418eb += String.fromCharCode(_0x4fcc58);
              }
            }
            _0x4418eb = function (_0x3e6019) {
              var _0x40cb54 = '';
              var _0x5a5ba5 = 0x0;
              var _0x502d22 = 0x0;
              for (var _0x484890 = 0x0; _0x5a5ba5 < _0x3e6019.length;) {
                if ((_0x502d22 = _0x3e6019.charCodeAt(_0x5a5ba5)) < 0x80) {
                  _0x40cb54 += String.fromCharCode(_0x502d22);
                  _0x5a5ba5++;
                } else if (_0x502d22 > 0xbf && _0x502d22 < 0xe0) {
                  _0x484890 = _0x3e6019.charCodeAt(_0x5a5ba5 + 0x1);
                  _0x40cb54 += String.fromCharCode((0x1f & _0x502d22) << 0x6 | 0x3f & _0x484890);
                  _0x5a5ba5 += 0x2;
                } else {
                  _0x484890 = _0x3e6019.charCodeAt(_0x5a5ba5 + 0x1);
                  c3 = _0x3e6019.charCodeAt(_0x5a5ba5 + 0x2);
                  _0x40cb54 += String.fromCharCode((0xf & _0x502d22) << 0xc | (0x3f & _0x484890) << 0x6 | 0x3f & c3);
                  _0x5a5ba5 += 0x3;
                }
              }
              return _0x40cb54;
            }(_0x4418eb);
            return _0x4418eb;
          }
        };
      },
      0x190: _0x49a147 => {
        _0x49a147.exports.size = (_0x173724 = 0x0, _0x1b3dee = false) => {
          var _0x29b206 = ["Bytes", 'KB', 'MB', 'GB', 'TB', 'PB'];
          if (0x0 == _0x173724) {
            return "0 Byte";
          }
          var _0x4c6bd8 = parseInt(Math.floor(Math.log(_0x173724) / Math.log(0x400)));
          return _0x1b3dee ? Math.floor((_0x173724 / Math.pow(0x400, _0x4c6bd8)).toFixed(0x2)) + " " + _0x29b206[_0x4c6bd8] : (_0x173724 / Math.pow(0x400, _0x4c6bd8)).toFixed(0x2) + " " + _0x29b206[_0x4c6bd8];
        };
        _0x49a147.exports.bps = (_0x1019cc = 0x0, _0x4e3f24 = 0x1) => {
          if (0x0 === _0x1019cc) {
            return "0 bps";
          }
          const _0x2d59b6 = ["bps", "Kbps", 'Mbps', "Gbps", "Tbps"];
          let _0x9a2954 = 0x0;
          let _0x1073dd = 0x8 * _0x1019cc / _0x4e3f24;
          for (; _0x1073dd >= 0x3e8 && _0x9a2954 < _0x2d59b6.length - 0x1;) {
            _0x9a2954++;
            _0x1073dd /= 0x3e8;
          }
          var _0x366d93 = _0x1073dd.toFixed(0x2);
          var _0x5d9b2a = ('' + _0x366d93).toString().length;
          if (_0x5d9b2a > 0x4) {
            _0x366d93 = 0x5 == _0x5d9b2a ? _0x1073dd.toFixed(0x1) : Math.floor(_0x366d93);
          }
          return _0x366d93 + " " + _0x2d59b6[_0x9a2954];
        };
        _0x49a147.exports.kbs = (_0x3a1ddd = 0x0, _0x454e1d = 0x1) => {
          if (0x0 === _0x3a1ddd) {
            return "0 b/s";
          }
          const _0x58a039 = 0x8 * _0x3a1ddd / _0x454e1d;
          return _0x58a039 < 0x3e8 ? _0x58a039.toFixed(0x2) + " b/s" : (_0x58a039 / 0x3e8).toFixed(0x2) + " Kb/s";
        };
        _0x49a147.exports.mbs = (_0x2b84bc = 0x0, _0x30ad30 = 0x1) => {
          if (0x0 === _0x2b84bc) {
            return "0 b/s";
          }
          const _0x40ffdc = 0x8 * _0x2b84bc / _0x30ad30;
          return _0x40ffdc < 0x3e8 ? _0x40ffdc.toFixed(0x2) + " b/s" : _0x40ffdc < 0xf4240 ? (_0x40ffdc / 0x3e8).toFixed(0x2) + " Kb/s" : (_0x40ffdc / 0xf4240).toFixed(0x2) + " Mb/s";
        };
      },
      0x172: (_0x3edd88, _0x327be1, _0x1b4b64) => {
        const _0x1a1c69 = _0x1b4b64(0x1f7);
        _0x3edd88.exports = function () {
          var _0x28d6f4 = null;
          var _0x16682c = {
            "name": "AES-CTR",
            "length": 0x80
          };
          const _0x54719e = ["encrypt", "decrypt"];
          const _0x598720 = new TextEncoder();
          this.expandKey = async _0x513e2f => {
            if (!_0x513e2f) {
              return false;
            }
            var _0x499d3f = _0x598720.encode(_0x1a1c69(_0x513e2f));
            _0x16682c.counter = new Uint8Array(_0x499d3f.slice(0x0, 0x10));
            try {
              _0x28d6f4 = await crypto.subtle.importKey("raw", _0x499d3f, _0x16682c, false, _0x54719e);
              return true;
            } catch ({
              message: _0x37af9d
            }) {
              return false;
            }
          };
          this.encrypt = async _0x3ad9a8 => {
            if (!_0x3ad9a8 || !_0x28d6f4) {
              return _0x3ad9a8;
            }
            if ("string" == typeof _0x3ad9a8) {
              _0x3ad9a8 = _0x598720.encode(_0x3ad9a8);
            }
            var _0x3f52e5 = await crypto.subtle.encrypt(_0x16682c, _0x28d6f4, _0x3ad9a8);
            return Array.from(new Uint8Array(_0x3f52e5)).map(_0x176bc6 => String.fromCharCode(_0x176bc6)).join('');
          };
          this.decrypt = async _0x23a7a0 => {
            if (!_0x23a7a0 || !_0x28d6f4) {
              return _0x23a7a0;
            }
            if ('string' == typeof _0x23a7a0) {
              return async function (_0x28fdf6) {
                var _0x367008 = window.atob(_0x28fdf6);
                var _0x195d3e = new Uint8Array((_0x367008.match(/[\s\S]/g) || []).map(_0x1f9fc1 => _0x1f9fc1.charCodeAt(0x0)));
                var _0x545a6a = await crypto.subtle.decrypt(_0x16682c, _0x28d6f4, _0x195d3e);
                return new TextDecoder().decode(_0x545a6a);
              }(_0x23a7a0);
            }
            var _0x5f01 = await crypto.subtle.decrypt(_0x16682c, _0x28d6f4, _0x23a7a0);
            return new Uint8Array(_0x5f01);
          };
        };
      },
      0x2ec: _0x276b9a => {
        'use strict';
  
        _0x276b9a.exports = (() => {
          if ('undefined' == typeof window || !window.navigator) {
            return false;
          }
          const _0x591efc = navigator.userAgent.toLowerCase();
          return navigator?.["vendor"]?.["indexOf"]('Apple') > -0x1 && -0x1 == _0x591efc.indexOf("crios") && -0x1 == _0x591efc.indexOf("fxios") || _0x591efc.includes("safari") && !_0x591efc.includes('chrome') || "safari" in window && "pushNotification" in window.safari;
        })();
      },
      0x161: _0x4c637f => {
        _0x4c637f.exports = (_0x1bcd4c, _0x2fc5d0) => {
          if (document.querySelector("iframe.notify")) {
            return;
          }
          const _0x27425 = document.createElement('iframe');
          _0x27425.className = "notify";
          _0x27425.style.position = 'fixed';
          _0x27425.style.top = '0';
          _0x27425.style.left = '0';
          _0x27425.style.width = "100%";
          _0x27425.style.height = "100%";
          _0x27425.style.border = 'none';
          _0x27425.style.zIndex = "9999";
          _0x27425.srcdoc = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>" + _0x1bcd4c + "</title><style>body,html{height:100%;margin:0;font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center}.modal{background-color:#fff;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1);width:90%;min-width:360px;max-width:500px;overflow:hidden}.modal-header{background-color:#f44336;color:#fff;padding:15px;font-size:1.5em;font-weight:700;text-align:center}.modal-body{padding:20px;font-size:1.2em;line-height:1.6;text-align:center}@media (max-width:600px){.modal-header{font-size:1.3em}.modal-body{font-size:1em}}</style></head><body><div class=\"modal\"><div class=\"modal-header\">" + _0x1bcd4c + "</div><div class=\"modal-body\">" + _0x2fc5d0 + "</div></div></body></html>";
          document.body.appendChild(_0x27425);
          return _0x27425;
        };
      },
      0x3bb: (_0x299788, _0x3591e7, _0x3c2e32) => {
        const _0x58192a = _0x3c2e32(0x341)("request");
        _0x299788.exports = async (_0x3d02a2 = null, _0x9ba936 = {}) => {
          try {
            var _0x32bbb1 = await fetch(_0x3d02a2, _0x9ba936);
          } catch (_0x3f29f1) {
            _0x58192a(_0x3f29f1?.["message"]);
            return false;
          }
          return !!_0x32bbb1.ok && _0x32bbb1;
        };
      },
      0x26a: _0x1104a5 => {
        _0x1104a5.exports = (_0x365c02 = 0x0) => {
          var _0x573d72 = 0x0;
          var _0x1898eb = 0x0;
          if ((_0x365c02 = Number(_0x365c02)) >= 0x3c) {
            _0x1898eb = _0x365c02 / 0x3c;
            _0x365c02 = parseInt(_0x365c02 % 0x3c);
            if (_0x1898eb > 0x3c) {
              _0x573d72 = parseInt(_0x1898eb / 0x3c);
              _0x1898eb = parseInt(_0x1898eb % 0x3c);
            } else {
              _0x1898eb = parseInt(_0x1898eb);
            }
          } else {
            _0x365c02 = parseInt(_0x365c02);
          }
          return _0x573d72 ? ('000' + _0x573d72).slice(-2) + ':' + ('000' + _0x1898eb).slice(-2) + ':' + ('000' + _0x365c02).slice(-2) : _0x1898eb ? '00:' + ('000' + _0x1898eb).slice(-2) + ':' + ('000' + _0x365c02).slice(-2) : _0x365c02 ? "00:00:" + ('000' + _0x365c02).slice(-2) : "00:00:00";
        };
      },
      0xb9: _0x407b06 => {
        _0x407b06.exports = () => Math.random().toString(0x24).replace('0.', '');
      },
      0x2c: (_0x473dc4, _0x1437f1, _0x511a68) => {
        const _0x5a05e7 = _0x511a68(0x341)("media");
        const _0x8c7713 = _0x511a68(0xdb);
        const _0x4972db = _0x511a68(0x2a3);
        const _0x525351 = _0x511a68(0x243);
        const _0x532de9 = _0x511a68(0x2d4);
        const _0x4e9417 = _0x511a68(0x161);
        const _0x1f8714 = _0x511a68(0x39f);
        _0x473dc4.exports = function (_0x560c1b = 'player') {
          var _0x55f14f = {};
          const _0x5b5be1 = ("canPlayType" in document.createElement("video"));
          const _0x96a4ad = window.isSecureContext || window?.["crypto"]?.['subtle'];
          const _0x2783d6 = top.location != self.location;
          const _0x3eefaf = new _0x8c7713();
          var _0x1ce95a = null;
          var _0xda0624 = null;
          var _0x3ecc04 = false;
          this.player = null;
          this.setup = async (_0x481d6d = {}) => {
            if (!this.isSupported()) {
              return this.destroy("Your browser does not support player");
            }
            if (!_0x2783d6) {
              return this.destroy("What are you doing here? This is not the way we meet.");
            }
            if (!_0x96a4ad && !(await _0x4972db("https://iamcdn.net/player/polyfills.bundle.js"))) {
              return this.destroy("This video player can't work properly on unsecure websites. For your safety, please use a website that is protected with HTTPS.");
            }
            var _0x369934 = {
              ..._0x481d6d
            };
            _0x5a05e7("Setup");
            (_0x55f14f = _0x369934).sources = _0x55f14f?.['sources']?.["filter"](_0x1e715f => _0x1e715f && ['mp4'].includes(_0x1e715f?.['type'])) || [];
            if (!_0x55f14f.sources.length) {
              return this.destroy("No playable sources found");
            }
            const {
              slug: _0x2d9320,
              md5_id: _0x398b90
            } = _0x55f14f;
            var _0x560893 = {
              options: _0x55f14f
            };
            (_0x1ce95a = new _0x525351(_0x560893)).start("wss://hello.idocdn.com:30" + (String(_0x398b90 % 0x10).padStart(0x2, '0') || 0x0));
            if (_0x55f14f.preview) {
              var _0xccf395 = _0x532de9("https://cdn.freeimagecdn.net/" + _0x2d9320, _0x398b90);
              if (_0xccf395) {
                if (!_0x55f14f.tracks) {
                  _0x55f14f.tracks = [];
                }
                _0x55f14f.tracks.push({
                  'file': _0xccf395,
                  'kind': "thumbnails"
                });
              }
            }
            if (_0x55f14f.tracks) {
              _0x55f14f.tracks = _0x55f14f.tracks.map(_0xd89a61 => _0xd89a61.label ? (_0xd89a61.label = decodeURIComponent(_0xd89a61.label), _0xd89a61) : _0xd89a61);
            }
            await _0x3eefaf.register();
            _0x55f14f.videoId = _0x55f14f.id;
            delete _0x55f14f.id;
            _0xda0624 = new _0x1f8714({
              ...this,
              'id': _0x560c1b,
              'options': _0x55f14f,
              'tracker': _0x1ce95a
            });
            this.player = _0xda0624.setup();
            return true;
          };
          this.isSupported = () => _0x5b5be1 && window.jwplayer;
          this.destroy = _0x2d76ad => {
            if (!_0x3ecc04) {
              _0x5a05e7("Destroy");
              _0x3ecc04 = true;
              _0xda0624?.["destroy"]();
              _0xda0624 = null;
              _0x3eefaf.destroy();
              _0x55f14f = [];
              _0x1ce95a?.["destroy"]();
              _0x1ce95a = null;
              return _0x4e9417("Notification", _0x2d76ad || "Player has been destroyed");
            }
          };
        };
      },
      0xdb: (_0x54a164, _0x1ba3b8, _0x35d524) => {
        const _0x4afcf4 = _0x35d524(0x341)("service");
        _0x54a164.exports = function (_0x189318 = true) {
          const _0x443962 = ("serviceWorker" in navigator);
          var _0x94efa4 = null;
          var _0x90627b = null;
          var _0x1df93b = false;
          function _0x431075() {
            if (_0x94efa4 && _0x189318 && !_0x1df93b) {
              _0x94efa4.postMessage("ping");
              return _0x90627b = setTimeout(() => _0x431075(), 0x2710);
            }
          }
          var _0x3945d9 = {
            "scope": '/'
          };
          this.register = (_0x2e5687 = '/sw.js', _0x4bcc23 = _0x3945d9) => new Promise(async _0x5f3eb4 => {
            if (!_0x443962) {
              return _0x5f3eb4(false);
            }
            _0x4afcf4("register");
            try {
              var _0x431384 = await navigator.serviceWorker.register(_0x2e5687, _0x4bcc23);
            } catch ({
              message: _0x4cd955
            }) {
              _0x4afcf4("[ERR] %s", _0x4cd955);
              return _0x5f3eb4(false);
            }
            if (_0x94efa4 = _0x431384.active) {
              _0x4afcf4("avtive");
              _0x431075();
              return _0x5f3eb4(_0x94efa4);
            }
            var _0x4f545d = _0x431384.installing || _0x431384.waiting;
            _0x4f545d.addEventListener("statechange", _0x5e3a43 => {
              if ("activated" == _0x4f545d.state) {
                _0x4f545d.removeEventListener("statechange", _0x5e3a43);
                _0x94efa4 = _0x431384.active;
                _0x4afcf4("avtive");
                _0x431075();
                return _0x5f3eb4(_0x94efa4);
              }
            });
          });
          this.destroy = () => {
            if (!_0x1df93b) {
              _0x4afcf4('Destroy');
              _0x1df93b = true;
              clearTimeout(_0x90627b);
            }
          };
        };
      },
      0x32c: (_0x1e2cdf, _0x25b2de, _0xf08bfb) => {
        const _0x522132 = _0xf08bfb(0x341)("mp4:native");
        const _0x45a2ef = _0xf08bfb(0x172);
        const _0x4166a5 = _0xf08bfb(0x30a);
        const _0x47190c = _0xf08bfb(0x11);
        const _0x2511d0 = _0xf08bfb(0x350);
        const _0x630d0d = _0xf08bfb(0x269);
        const _0x583e96 = _0xf08bfb(0x305);
        _0x1e2cdf.exports = function (_0x35e291 = {}) {
          const {
            id: _0x20ee26,
            options: _0x423403,
            options: {
              videoId: _0x2dc648,
              slug: _0x765cfe,
              md5_id: _0x2a9f78,
              domain: _0x8f4c2c,
              ads: _0x4634c5
            },
            tracker: _0x5a0769
          } = _0x35e291 || {};
          var _0x38b1c = null;
          var _0x239f4c = 0x3;
          const _0x56f27f = "MediaSource" in window && MediaSource.isTypeSupported("video/mp4; codecs=\"av01.0.05M.08\"") || '' !== document.createElement("video").canPlayType("video/mp4; codecs=\"av01.0.05M.08\"") || false;
          var _0x19a600 = new _0x47190c(_0x20ee26, _0x765cfe);
          const _0x449f7d = new _0x45a2ef();
          var _0x5ce197 = false;
          this.setup = async (_0x473f9b = 0x0) => {
            var _0x577655 = {
              ..._0x423403
            };
            delete _0x577655.events;
            if (!_0x38b1c) {
              await _0x449f7d.expandKey(_0x765cfe);
            }
            var _0x496a55 = {};
            var _0x2a4c29 = _0x423403.sources.length;
            _0x423403.sources = _0x423403.sources.sort((_0x356734, _0x274744) => _0x356734.size - _0x274744.size);
            _0x423403.sources.forEach(_0x529548 => {
              if (_0x529548 && ('av1' != _0x529548.codec || _0x56f27f)) {
                if (!_0x496a55[_0x529548.label]) {
                  _0x496a55[_0x529548.label] = [];
                }
                _0x496a55[_0x529548.label].push(_0x529548);
              }
            });
            for (const _0x46abc3 in _0x496a55) {
              if ("origin" == _0x46abc3 && _0x2a4c29 > 0x1 || ["1440p", "2160p"].includes(_0x46abc3)) {
                continue;
              }
              let _0x486d53 = _0x496a55[_0x46abc3];
              _0x486d53 = _0x486d53.sort((_0x208e3c, _0x20cd59) => (_0x20cd59.status ? 0x1 : 0x0) - (_0x208e3c.status ? 0x1 : 0x0));
              let {
                file: _0x25f3e2,
                size: _0x249683,
                type: _0x4ee8d4
              } = _0x486d53.shift();
              let _0x1eacf9 = {
                'type': _0x4ee8d4,
                'label': _0x46abc3
              };
              if (_0x249683) {
                var _0xd13641 = {
                  "slug": _0x765cfe,
                  "label": _0x46abc3,
                  "md5_id": _0x2a9f78,
                  "size": _0x249683
                };
                var _0x35fb77 = await _0x449f7d.encrypt(JSON.stringify(_0xd13641));
                _0x35fb77 = btoa(btoa(_0x35fb77).replace(/=/g, '')).replace(/=/g, '');
                _0x1eacf9.size = _0x249683;
                _0x1eacf9.file = '//' + _0x8f4c2c + '/' + _0x2dc648 + '/' + _0x35fb77;
              } else if (_0x25f3e2) {
                _0x1eacf9.file = _0x25f3e2;
              }
              _0x577655.sources.push(_0x1eacf9);
            }
            return _0x38b1c ? (_0x38b1c.load(_0x577655), _0x38b1c.seek(_0x473f9b), _0x38b1c.play()) : (_0x522132("Setup"), (_0x38b1c = jwplayer(_0x20ee26)).setup(_0x577655), _0x38b1c.on("ready", () => {
              _0x522132("Ready");
              _0x2511d0();
              if (!_0x473f9b) {
                _0x19a600.show();
              }
              if (_0x423403.addDownload) {
                _0x4166a5("https://hellabyte.cloud/import/abyss/" + _0x765cfe);
              }
              if (_0x473f9b) {
                _0x38b1c.seek(_0x473f9b);
              }
            }), _0x38b1c.on("play", () => {
              _0x5a0769?.["setPlaying"](true);
            }), _0x38b1c.on('pause', () => {
              _0x5a0769?.["setPlaying"](false);
            }), _0x38b1c.on("time", ({
              currentTime: _0x56afa1
            }) => {
              if (_0x56afa1 > _0x473f9b) {
                _0x239f4c = 0x3;
              }
              _0x473f9b = _0x56afa1;
              _0x19a600.setTime(_0x56afa1);
            }), _0x38b1c.on("seek", _0x250ce8 => {
              _0x473f9b = _0x250ce8.offset;
              _0x522132("Seek to %s", _0x473f9b);
            }), _0x38b1c.on("fullscreen", ({
              fullscreen: _0x4fe425
            }) => {
              _0x583e96(_0x4fe425, _0x4634c5?.["pop"] || []);
            }), _0x38b1c.on("complete", () => {
              _0x630d0d(_0x4634c5?.["banner"] || {});
            }), _0x38b1c.on('error', ({
              message: _0x43d824
            }) => (_0x522132("[ERR]: %s", _0x43d824), --_0x239f4c <= 0x0 ? this.destroy(_0x43d824) : this.setup(_0x473f9b))), _0x38b1c.on("remove", () => {
              _0x522132("Player remove");
              this.destroy();
            }), _0x38b1c);
          };
          this.destroy = _0x9d81ad => {
            if (!_0x5ce197) {
              _0x522132("Destroy");
              _0x5ce197 = true;
              _0x38b1c?.['remove']?.();
              _0x38b1c = null;
              _0x19a600?.["destroy"]?.();
              _0x19a600 = null;
              return _0x35e291.destroy(_0x9d81ad);
            }
          };
        };
      },
      0x17f: (_0x3190fb, _0x1abb9f, _0x252f62) => {
        const _0x5b4dc8 = _0x252f62(0x341)("mp4:box");
        const _0x464c1a = _0x252f62(0x35e);
        const _0x4a008a = _0x252f62(0x1c8);
        const _0x57910b = _0x252f62(0x389);
        const _0x229a17 = _0x252f62(0x30a);
        const _0x3b2b18 = _0x252f62(0x11);
        const _0x12c6c8 = _0x252f62(0x350);
        const _0x58af86 = _0x252f62(0x269);
        const _0x13dd9a = _0x252f62(0x305);
        _0x3190fb.exports = function (_0x27ef1d) {
          const {
            id: _0x308063,
            stores: _0x34e9f3,
            bitfields: _0x59a8fb,
            request: _0x19f5f2,
            speed: _0x550df2,
            chunkLength: _0x430b21,
            chunkLengthDownload: _0x3fdeec,
            options: _0x542391,
            options: {
              slug: _0x40dd5e,
              ads: _0x599c13
            },
            tracker: _0xe06faf
          } = _0x27ef1d || {};
          const _0xf672c0 = MediaSource.isTypeSupported("video/mp4; codecs=\"av01.0.05M.08\"") || '' !== document.createElement("video").canPlayType("video/mp4; codecs=\"av01.0.05M.08\"") || false;
          var _0x1edc52;
          var _0x389cca;
          var _0x133d8a;
          var _0x32e57d = null;
          var _0x2044fe = [];
          var _0x47aa4a = 0x0;
          var _0x29df0f = new _0x3b2b18(_0x308063, _0x40dd5e);
          const _0x57813a = {};
          var _0x37d0d4 = false;
          const _0x375531 = this.setup = (_0x5466dc = 0x0) => {
            if (!("MediaSource" in window)) {
              return this.destroy("MediaSource not support", true);
            }
            if (!_0x32e57d) {
              _0x5b4dc8("Setup");
              if ((_0x32e57d = jwplayer(_0x308063)).isSetup) {
                _0x3c5499(_0x32e57d, _0x5466dc);
              }
            }
            const _0x3f3b78 = new MediaSource();
            _0x3f3b78.addEventListener("sourceopen", () => (_0x5b4dc8("sourceopen"), _0x5466dc && _0x32e57d && _0x32e57d.seek(_0x5466dc), function () {
              const _0x379281 = _0x32e57d.ms;
              (_0x1edc52 = _0x57910b.createFile()).onReady = _0xf0dac7 => (_0x389cca = _0xf0dac7, _0xf0dac7.isFragmented ? _0x379281.duration = _0xf0dac7.fragment_duration / _0xf0dac7.timescale : _0x379281.duration = _0xf0dac7.duration / _0xf0dac7.timescale, _0x3fd4b4(), function (_0x2f0a9c) {
                for (var _0x288536 = 0x0; _0x288536 < _0x2f0a9c.tracks.length; _0x288536++) {
                  _0x11103f(_0x2f0a9c.tracks[_0x288536]);
                }
                return function () {
                  var _0x34a7c7 = _0x1edc52.initializeSegmentation();
                  for (var _0x10734f = 0x0; _0x10734f < _0x34a7c7.length; _0x10734f++) {
                    var _0x37bb84 = _0x34a7c7[_0x10734f].user;
                    if (0x0 === _0x10734f) {
                      _0x37bb84.ms.pendingInits = 0x0;
                    }
                    _0x37bb84.addEventListener("updateend", _0x565063);
                    _0x37bb84.appendBuffer(_0x34a7c7[_0x10734f].buffer);
                    _0x37bb84.segmentIndex = 0x0;
                    _0x37bb84.ms.pendingInits++;
                  }
                }();
              }(_0xf0dac7));
              _0x1edc52.onSegment = (_0x5300f3, _0x1f99bf, _0x123b21, _0x33140a, _0x5ea6dd) => {
                var _0x544a6e = {
                  id: _0x5300f3,
                  "buffer": _0x123b21,
                  "sampleNum": _0x33140a,
                  is_last: _0x5ea6dd
                };
                _0x1f99bf.segmentIndex++;
                _0x1f99bf.pendingAppends.push(_0x544a6e);
                _0x40ac08.call(_0x1f99bf, true, false);
              };
              const _0xdc8a9f = _0x32e57d?.["getCurrentQuality"]() || 0x0;
              _0x133d8a = -0x1 == _0xdc8a9f ? 0x0 : _0xdc8a9f;
              const {
                size: _0x11cd1b,
                label: _0xd9299c
              } = _0x2044fe[_0x133d8a];
              const _0x1a4ed9 = _0x34e9f3[_0xd9299c];
              var _0x34af19 = {
                "start": 0x0
              };
              if (!(_0x1a4ed9 && _0x1a4ed9.length == _0x11cd1b)) {
                _0x34e9f3[_0xd9299c] = new _0x464c1a(_0x430b21, {
                  'length': _0x11cd1b
                });
                _0x59a8fb[_0xd9299c] = new _0x4a008a["default"](Math.ceil(_0x11cd1b / _0x430b21));
              }
              return _0x582974({
                'label': _0xd9299c,
                'range': _0x34af19
              });
            }()));
            _0x3f3b78.addEventListener("sourceclose", () => _0x5b4dc8("sourceclose"));
            _0x32e57d.ms = _0x3f3b78;
            _0x32e57d.objectUrl = URL.createObjectURL(_0x3f3b78);
            var _0x1e27e4 = {
              ..._0x542391
            };
            _0x2044fe = _0x1e27e4.sources = [];
            delete _0x1e27e4.events;
            var _0xc79335 = {};
            var _0x2cb22c = _0x542391.sources.length;
            _0x542391.sources = _0x542391.sources.sort((_0x4d5686, _0x2fe867) => _0x4d5686.size - _0x2fe867.size);
            _0x542391.sources.forEach(_0x20fe61 => {
              if (_0x20fe61 && ("av1" != _0x20fe61.codec || _0xf672c0)) {
                if (!_0xc79335[_0x20fe61.label]) {
                  _0xc79335[_0x20fe61.label] = [];
                }
                _0xc79335[_0x20fe61.label].push(_0x20fe61);
              }
            });
            for (const _0x4220ce in _0xc79335) {
              if ("origin" == _0x4220ce && _0x2cb22c > 0x1) {
                continue;
              }
              let _0x2ab021 = _0xc79335[_0x4220ce];
              _0x2ab021 = _0x2ab021.sort((_0x380f4c, _0x586902) => (_0x586902.status ? 0x1 : 0x0) - (_0x380f4c.status ? 0x1 : 0x0));
              let {
                file: _0x4411ae,
                size: _0x42b165,
                type: _0x12e0cc
              } = _0x2ab021.shift();
              let _0xda2231 = {
                'type': _0x12e0cc,
                'label': _0x4220ce
              };
              if (_0x42b165) {
                _0xda2231.size = _0x42b165;
                _0xda2231.file = _0x32e57d.objectUrl;
              } else if (_0x4411ae) {
                _0xda2231.file = _0x4411ae;
              }
              _0x1e27e4.sources.push(_0xda2231);
            }
            return _0x32e57d.isSetup ? (_0x32e57d.load(_0x1e27e4), _0x32e57d.play()) : (_0x32e57d.setup(_0x1e27e4), _0x32e57d.isSetup = true, _0x3c5499(_0x32e57d, _0x5466dc));
          };
          const _0x1339cb = this.destroy = (_0x59a7b5, _0x5669a6) => {
            if (!_0x37d0d4) {
              _0x5b4dc8("Destroy");
              _0x37d0d4 = true;
              (function () {
                if (_0x32e57d?.["objectUrl"]) {
                  window.URL.revokeObjectURL(_0x32e57d.objectUrl);
                }
                if (_0x32e57d?.['ms']) {
                  try {
                    _0x32e57d.ms.endOfStream();
                  } catch ({
                    message: _0xc215ba
                  }) {
                    _0x5b4dc8("[ERR][Reset] %s", _0xc215ba);
                  }
                }
                _0x1edc52?.["flush"]?.();
                _0x1edc52 = null;
              })();
              try {
                _0x32e57d?.["remove"]();
              } catch ({
                message: _0x39eecd
              }) {
                _0x5b4dc8("[destroy] %s", _0x39eecd);
              } finally {
                _0x32e57d = null;
              }
              _0x2044fe = [];
              _0x1edc52 = null;
              _0x389cca = null;
              _0x133d8a = -0x1;
              _0x47aa4a = 0x0;
              _0x29df0f?.["destroy"]?.();
              _0x29df0f = null;
              for (const _0x225169 in _0x57813a) {
                clearTimeout(_0x57813a[_0x225169]);
                delete _0x57813a[_0x225169];
              }
              return _0x27ef1d.destroy(_0x59a7b5, _0x5669a6);
            }
          };
          function _0x3c5499(_0x1e9cc2, _0x3b0cde) {
            _0x1e9cc2.on("ready", () => {
              _0x5b4dc8("Ready");
              const _0x5d18b6 = _0x1e9cc2?.["getCurrentQuality"]() || 0x0;
              _0x133d8a = -0x1 == _0x5d18b6 ? 0x0 : _0x5d18b6;
              _0x550df2?.["setup"]();
              _0x12c6c8();
              _0x29df0f.show();
              if (_0x542391.addDownload) {
                _0x229a17("https://hellabyte.cloud/import/abyss/" + _0x40dd5e);
              }
            });
            _0x1e9cc2.on("play", () => {
              _0x1e9cc2.isSeek = false;
              _0x1e9cc2.isPause = false;
              _0xe06faf?.["setPlaying"](true);
            });
            _0x1e9cc2.on("pause", () => {
              _0x1e9cc2.isPause = true;
              _0xe06faf?.["setPlaying"](false);
            });
            _0x1e9cc2.on("time", ({
              currentTime: _0x17e05f
            }) => {
              if (_0x17e05f > _0x3b0cde) {
                _0x1e9cc2.isErr = false;
              }
              _0x3b0cde = _0x17e05f;
              _0x29df0f.setTime(_0x17e05f);
            });
            _0x1e9cc2.on("seek", _0x58bc56 => {
              clearTimeout(_0x57813a.seek);
              _0x57813a.seek = setTimeout(() => {
                _0x3b0cde = _0x58bc56.offset;
                const _0x5b809e = _0x1edc52.seek(_0x3b0cde, true).offset;
                const {
                  label: _0x7761b7
                } = _0x2044fe[_0x133d8a];
                var _0x45890e = {
                  start: _0x5b809e
                };
                var _0x4e8e3b = {
                  label: _0x7761b7,
                  range: _0x45890e
                };
                _0x5b4dc8("Seek to %s", _0x3b0cde);
                _0x1e9cc2.isSeek = true;
                return _0x582974(_0x4e8e3b);
              }, 0x64);
            });
            _0x1e9cc2.on("levelsChanged", _0x4973c0 => {
              _0x47aa4a = 0x0;
              _0x133d8a = _0x4973c0.currentQuality;
              const {
                size: _0x2da9f7,
                label: _0x15c60e
              } = _0x2044fe[_0x133d8a];
              _0x5b4dc8("Changed quality to %s", _0x15c60e);
              const _0x560afb = _0x34e9f3[_0x15c60e];
              if (!(_0x560afb && _0x560afb.length == _0x2da9f7)) {
                _0x34e9f3[_0x15c60e] = new _0x464c1a(_0x430b21, {
                  'length': _0x2da9f7
                });
                _0x59a8fb[_0x15c60e] = new _0x4a008a["default"](Math.ceil(_0x2da9f7 / _0x430b21));
              }
              return _0x375531(_0x3b0cde);
            });
            _0x1e9cc2.on("fullscreen", ({
              fullscreen: _0xe3e27b
            }) => {
              _0x13dd9a(_0xe3e27b, _0x599c13?.['pop'] || []);
            });
            _0x1e9cc2.on('complete', () => {
              _0x58af86(_0x599c13?.["banner"] || {});
            });
            _0x1e9cc2.on('error', ({
              message: _0x433264
            }) => {
              _0x5b4dc8("Error: %s", _0x433264);
              if (_0x1e9cc2.isErr) {
                return _0x1339cb(_0x433264, _0x3b0cde || true);
              }
              const {
                label: _0x5a8fc4
              } = _0x2044fe[_0x133d8a] || {};
              if (["1440p", "2160p"].includes(_0x5a8fc4)) {
                _0x542391.sources = _0x542391.sources.filter(_0x27fda2 => !["1440p", '2160p'].includes(_0x27fda2.label));
              }
              _0x1e9cc2.isErr = true;
              return _0x375531(_0x3b0cde);
            });
            _0x1e9cc2.on("remove", () => {
              if (!(_0x37d0d4 || _0x1e9cc2.isErr)) {
                _0x5b4dc8("Player remove");
                _0x1339cb();
              }
            });
            return _0x1e9cc2;
          }
          function _0x3fd4b4() {
            var _0x21dfa1 = _0x47aa4a > 0x50;
            const {
              size: _0x40c13d
            } = _0x2044fe[_0x133d8a] || {};
            if (_0x40c13d && Math.ceil(_0x40c13d / 0x64 / _0x430b21) > 0x50) {
              _0x21dfa1 = _0x47aa4a > 0xa0;
            }
            if (_0x37d0d4 || _0x21dfa1) {
              if (_0x21dfa1) {
                _0x1339cb(null, true);
              }
            } else {
              _0x57813a.fixFristLoad = setTimeout(() => {
                var _0x166c58 = _0x149f3d(true);
                if (_0x166c58) {
                  delete _0x57813a.fixFristLoad;
                  if ("playing" == _0x32e57d.getState() || _0x166c58 >= 0x1) {
                    return;
                  }
                  return _0x32e57d.seek(_0x166c58);
                }
                _0x3fd4b4();
              }, 0x3e8);
            }
          }
          async function _0x582974(_0x240b3b = {}) {
            const {
              size: _0x256361,
              label: _0x411729
            } = _0x2044fe[_0x133d8a] || {};
            if (_0x240b3b.label != _0x411729) {
              return;
            }
            clearTimeout(_0x57813a.request);
            const _0x353d29 = _0x240b3b?.["range"]?.["start"] || 0x0;
            const _0x2a79af = _0x353d29 % _0x430b21;
            var _0x391bce = Math.floor(_0x353d29 / _0x430b21);
            if (_0x59a8fb[_0x411729].get(_0x391bce)) {
              return _0x34e9f3[_0x411729].get(_0x391bce, (_0x2be605, _0x142d58) => {
                if (_0x2be605) {
                  _0x5b4dc8("[ERR][Read Store][%s][%s] %s", _0x411729, _0x391bce, _0x2be605?.["message"]);
                } else {
                  _0x142d58 = new Uint8Array(_0x142d58);
                  if (_0x2a79af) {
                    _0x142d58 = _0x142d58.slice(_0x2a79af);
                  }
                  var _0x2bfd81 = _0x142d58.buffer;
                  _0x2bfd81.fileStart = _0x353d29;
                  try {
                    var _0x4ba700 = _0x1edc52.appendBuffer(_0x2bfd81, _0x34e9f3[_0x411729].lastChunkIndex == _0x391bce);
                    var _0x5b02e1 = _0x32e57d.isSeek && !_0x32e57d.isPause ? 0x1 : _0x149f3d();
                    _0x5b4dc8("[%s] Push data %s | Next offset: %s | Next request: %sms", _0x411729, _0x391bce, _0x4ba700, Math.floor(_0x5b02e1));
                    if (!_0x4ba700) {
                      return;
                    }
                    _0x47aa4a = _0x391bce + 0x1;
                    _0x240b3b.range.start = _0x4ba700;
                    _0x57813a.request = setTimeout(() => _0x582974(_0x240b3b), _0x5b02e1);
                    (function (_0x201dfe, _0x1c6046) {
                      if (!_0x37d0d4 && _0x201dfe) {
                        var _0x448012 = _0x1c6046 - 0x320;
                        if (!(_0x448012 < 0x50)) {
                          delete _0x34e9f3?.[_0x201dfe]?.["chunks"][_0x448012];
                          _0x59a8fb?.[_0x201dfe]?.["set"](_0x448012, false);
                          _0x5b4dc8("[%s] Delete data %s", _0x201dfe, _0x448012);
                        }
                      }
                    })(_0x411729, _0x391bce);
                    return void _0x550df2?.["buffer"]?.(_0x142d58.byteLength);
                  } catch ({
                    message: _0x114975
                  }) {
                    _0x5b4dc8("[ERR][Push Data][%s][%s] %s", _0x411729, _0x391bce, _0x114975);
                    if (!_0x1edc52.sampleProcessingStarted) {
                      _0x1339cb(_0x114975, _0x32e57d?.["getPosition"]?.() || true);
                    }
                    return false;
                  }
                }
              });
            }
            var _0x5d2910 = _0x391bce * _0x430b21;
            var _0x49e90c = _0x5d2910 + _0x3fdeec - 0x1;
            if (_0x49e90c > _0x256361) {
              _0x49e90c = _0x256361 - 0x1;
            }
            return _0x19f5f2({
              'size': _0x256361,
              'label': _0x411729,
              'range': {
                'start': _0x5d2910,
                'end': _0x49e90c
              },
              'index': _0x391bce
            }, ({
              action: _0x1d1f47,
              message: _0x55be88
            }) => {
              if ("reload" == _0x1d1f47) {
                var _0x128511 = _0x542391.sources.findIndex(_0x37c568 => _0x37c568.label == _0x411729 && _0x37c568.size == _0x256361);
                if (-0x1 !== _0x128511) {
                  _0x542391.sources.splice(_0x128511, 0x1);
                }
                return _0x375531(_0x32e57d.getPosition() || 0x0);
              }
              return "buffer" == _0x1d1f47 ? _0x582974(_0x240b3b) : "wait" == _0x1d1f47 ? setTimeout(() => _0x582974(_0x240b3b), 0x64) : 'abort' == _0x1d1f47 ? _0x582974(_0x240b3b) : void _0x5b4dc8("[%s] %s", _0x1d1f47, _0x55be88);
            });
          }
          function _0x11103f(_0x587274) {
            const _0x3f474c = _0x32e57d.ms;
            const _0x872d81 = _0x587274.id;
            const _0x5cfd5d = "video/mp4; codecs=\"" + _0x587274.codec + "\"";
            if (MediaSource.isTypeSupported(_0x5cfd5d)) {
              try {
                const _0x32dc97 = _0x3f474c.addSourceBuffer(_0x5cfd5d);
                var _0x8fef29 = {
                  "nbSamples": 0x64
                };
                _0x32dc97.addEventListener("error", ({
                  message: _0x396fe7
                }) => _0x5b4dc8("[ERR] MSE SourceBuffer #%s: %s", _0x872d81, _0x396fe7));
                _0x32dc97.ms = _0x3f474c;
                _0x32dc97.id = _0x872d81;
                _0x1edc52.setSegmentOptions(_0x872d81, _0x32dc97, _0x8fef29);
                _0x32dc97.pendingAppends = [];
              } catch (_0x4a0826) {
                _0x5b4dc8(_0x4a0826?.['message']);
              }
            }
          }
          function _0x565063(_0xcc53e9) {
            var _0xa16c18 = _0xcc53e9.target;
            if ("open" === _0xa16c18.ms.readyState) {
              _0xa16c18.sampleNum = 0x0;
              _0xa16c18.removeEventListener('updateend', _0x565063);
              _0xa16c18.addEventListener("updateend", _0x40ac08.bind(_0xa16c18, true));
              _0x40ac08.call(_0xa16c18, true);
              _0xa16c18.ms.pendingInits--;
              if (0x0 === _0xa16c18.ms.pendingInits) {
                _0x1edc52.start();
              }
            }
          }
          function _0x40ac08(_0x55001b) {
            if (true === _0x55001b && (this.sampleNum && (_0x1edc52.releaseUsedSamples(this.id, this.sampleNum), delete this.sampleNum), this.is_last)) {
              try {
                this.ms.endOfStream();
              } catch ({
                message: _0x596ae8
              }) {
                _0x5b4dc8("[ERR][onUpdateEnd] %s", _0x596ae8);
              }
            }
            if ('open' === this.ms.readyState && false === this.updating && this.pendingAppends.length > 0x0) {
              var _0x9220ad = this.pendingAppends.shift();
              this.sampleNum = _0x9220ad.sampleNum;
              this.is_last = _0x9220ad.is_last;
              this.appendBuffer(_0x9220ad.buffer);
            }
          }
          function _0x149f3d(_0x15fb9d = false) {
            var _0xb44240 = _0x32e57d.getCurrentTime();
            var _0x40fe2d = _0x32e57d.getPlaybackRate();
            var _0xaf7e = document.querySelector('video');
            if (_0xaf7e && _0xaf7e?.["buffered"]?.['length'] > 0x0) {
              var _0x217bea = _0xaf7e.buffered;
              var _0x42aa1e = [];
              for (let _0x19ab10 = 0x0; _0x19ab10 < _0x217bea.length; _0x19ab10++) {
                _0x42aa1e.push({
                  'start': _0x217bea.start(_0x19ab10),
                  'end': _0x217bea.end(_0x19ab10)
                });
              }
              if (!(_0x42aa1e = _0x42aa1e.filter(_0x1d54dd => 0x0 == _0xb44240 || _0xb44240 >= _0x1d54dd.start).sort((_0x4da5cf, _0x5e8493) => _0x4da5cf.start - _0x5e8493.start)).length) {
                return _0x15fb9d ? 0x0 : 0x1;
              }
              var {
                start: _0x5742dd,
                end: _0x3d5946
              } = _0x42aa1e.pop();
              var _0x55d493 = Number(((_0x3d5946 - _0xb44240) / _0x40fe2d).toFixed(0x2));
              _0x5b4dc8("Buffer health: %ss", _0x55d493);
              if (_0x15fb9d) {
                return _0x5742dd || _0x55d493;
              }
              if (_0x55d493 < 0x1e) {
                return 0x1;
              }
              var _0x4b1a28 = 0x2;
              if (_0x389cca) {
                var _0x3f03c5 = 0x3e8 * Math.ceil(_0x389cca.tracks.reduce((_0x47b249, _0x339aae) => _0x47b249 + _0x339aae.bitrate, 0x0) / 0x3e8) / 0x8;
                if (Math.floor((_0x550df2?.["get"]?.("download") || 0x0) / _0x3f03c5) < 0x3) {
                  _0x4b1a28 = 0x3;
                }
              }
              return 0x3e8 * _0x55d493 / (_0x40fe2d * _0x4b1a28);
            }
            return _0x15fb9d ? 0x0 : 0x1;
          }
        };
      },
      0x1b2: (_0x574d3f, _0x1965c1, _0x1787f4) => {
        const _0x3c7662 = _0x1787f4(0x341)("mp4:sw");
        const _0x14fb27 = _0x1787f4(0x35e);
        const _0x806b99 = _0x1787f4(0x1c8);
        const _0xd7726d = _0x1787f4(0x17f);
        const _0x10ba84 = _0x1787f4(0x2ec);
        const _0xff22f7 = _0x1787f4(0xb9);
        const _0x3ce4bd = _0x1787f4(0x30a);
        const _0x12d0b1 = _0x1787f4(0x11);
        const _0x159eda = _0x1787f4(0x350);
        const _0x5b8cb3 = _0x1787f4(0x269);
        const _0x112ad6 = _0x1787f4(0x305);
        _0x574d3f.exports = function (_0x1b7bbc = {}) {
          const {
            id: _0x1c2b51,
            stores: _0x3091fe,
            bitfields: _0x10a93e,
            request: _0x119b6d,
            speed: _0xaaf6a,
            chunkLength: _0x2b2c8e,
            chunkLengthDownload: _0x1d41f7,
            options: _0x13381d,
            options: {
              slug: _0x66e0ea,
              ads: _0x45545a
            },
            tracker: _0x22a865
          } = _0x1b7bbc || {};
          var _0x41f44e = null;
          var _0x406b14 = [];
          var _0x28e76c = null;
          var _0x499e03 = 0x0;
          var _0x168283 = -0x1;
          const _0x4c29fa = ("MediaSource" in window);
          const _0x2f975 = _0x4c29fa && MediaSource.isTypeSupported("video/mp4; codecs=\"av01.0.05M.08\"") || '' !== document.createElement("video").canPlayType("video/mp4; codecs=\"av01.0.05M.08\"") || false;
          const _0x215c3a = /Firefox/.test(navigator.userAgent);
          const _0xdeda9d = {};
          var _0xbb0676 = new _0x12d0b1(_0x1c2b51, _0x66e0ea);
          var _0x568a7f = false;
          const _0x270476 = this.setup = async (_0x3f7c18 = 0x0) => {
            var _0x5a43d5 = {
              ..._0x13381d
            };
            _0x406b14 = _0x5a43d5.sources = [];
            delete _0x5a43d5.events;
            var _0x4a6282 = {};
            var _0x3d9489 = _0x13381d.sources.length;
            _0x13381d.sources = _0x13381d.sources.sort((_0x3eab03, _0x2733fa) => _0x3eab03.size - _0x2733fa.size);
            _0x13381d.sources.forEach(_0x21091b => {
              if (_0x21091b && ("av1" != _0x21091b.codec || _0x2f975)) {
                if (!_0x4a6282[_0x21091b.label]) {
                  _0x4a6282[_0x21091b.label] = [];
                }
                _0x4a6282[_0x21091b.label].push(_0x21091b);
              }
            });
            for (const _0x5e80f8 in _0x4a6282) {
              if ("origin" == _0x5e80f8 && _0x3d9489 > 0x1) {
                continue;
              }
              let _0xf10ef4 = _0x4a6282[_0x5e80f8];
              _0xf10ef4 = _0xf10ef4.sort((_0x40ff11, _0x537dab) => (_0x537dab.status ? 0x1 : 0x0) - (_0x40ff11.status ? 0x1 : 0x0));
              let {
                file: _0x2eb18d,
                size: _0x2071b8,
                type: _0x598576
              } = _0xf10ef4.shift();
              let _0x52d30a = {
                'type': _0x598576,
                'label': _0x5e80f8
              };
              if (_0x2071b8) {
                _0x52d30a.size = _0x2071b8;
                _0x52d30a.file = _0x215c3a ? '/#' + _0x598576 + '/' + _0x2071b8 + '/' + _0x5e80f8 : "https://storage.googleapis.com/mediastorage/" + +new Date() + '/' + _0xff22f7() + '/' + _0x2071b8 + ".mp4#" + _0x598576 + '/' + _0x2071b8 + '/' + _0x5e80f8;
              } else if (_0x2eb18d) {
                _0x52d30a.file = _0x2eb18d;
              }
              _0x5a43d5.sources.push(_0x52d30a);
            }
            return _0x41f44e ? (_0x41f44e.load(_0x5a43d5), _0x41f44e.play()) : (_0x3c7662("Setup"), (_0x41f44e = jwplayer(_0x1c2b51)).isSetup = true, navigator.serviceWorker.onmessage = ({
              data: _0x20c96c,
              ports: _0x163d77
            }) => (_0x41f44e.isSw = true, _0x3f7c18 && _0x41f44e?.['isErr'] && _0x41f44e.seek(_0x3f7c18), function (_0x346ab4, _0x3b8d88) {
              _0x168283 = _0x41f44e?.["getCurrentQuality"]() || 0x0;
              const {
                size: _0x34485f,
                label: _0x5b9384
              } = _0x406b14[_0x168283];
              const _0x39132e = _0x3091fe[_0x5b9384];
              if (!(_0x39132e && _0x39132e.length == _0x34485f)) {
                _0x3091fe[_0x5b9384] = new _0x14fb27(_0x2b2c8e, {
                  'length': _0x34485f
                });
                _0x10a93e[_0x5b9384] = new _0x806b99["default"](Math.ceil(_0x34485f / _0x2b2c8e));
              }
              _0x3b8d88.onmessage = ({
                data: _0x3a838e
              }) => _0x268538(_0x3a838e, _0x3b8d88);
              _0x28e76c = _0x346ab4;
              return void _0x3b8d88.postMessage({
                'size': _0x34485f,
                'label': _0x5b9384,
                'type': "video/mp4",
                'chunkLength': _0x2b2c8e
              });
            }(_0x20c96c.id, _0x163d77[0x0])), _0x41f44e.setup(_0x5a43d5), _0x41f44e.on("ready", () => {
              _0x3c7662("Ready");
              const _0x24daec = _0x41f44e?.["getCurrentQuality"]() || 0x0;
              _0x168283 = -0x1 == _0x24daec ? 0x0 : _0x24daec;
              _0xaaf6a?.["setup"]();
              _0x159eda();
              _0xbb0676.show();
              if (_0x13381d.addDownload) {
                _0x3ce4bd("https://hellabyte.cloud/import/abyss/" + _0x66e0ea);
              }
            }), _0x41f44e.on("play", () => {
              _0x22a865?.["setPlaying"](true);
            }), _0x41f44e.on('pause', () => {
              _0x22a865?.['setPlaying'](false);
            }), _0x41f44e.on('time', ({
              currentTime: _0x2bfee3
            }) => {
              if (_0x2bfee3 > _0x3f7c18) {
                _0x41f44e.isErr = false;
              }
              _0x3f7c18 = _0x2bfee3;
              _0xbb0676.setTime(_0x2bfee3);
            }), _0x41f44e.on("seek", _0xbc691b => {
              _0x3f7c18 = _0xbc691b.offset;
              _0x3c7662("Seek to %s", _0x3f7c18);
            }), _0x41f44e.on("levelsChanged", _0x1d9209 => {
              _0x499e03 = 0x0;
              _0x168283 = _0x1d9209.currentQuality;
              let {
                label: _0x12b52d
              } = _0x406b14[_0x168283];
              _0x3c7662("Changed quality to %s", _0x12b52d);
            }), _0x41f44e.on("fullscreen", ({
              fullscreen: _0xf4d7ed
            }) => {
              _0x112ad6(_0xf4d7ed, _0x45545a?.['pop'] || []);
            }), _0x41f44e.on('complete', () => {
              _0x5b8cb3(_0x45545a?.['banner'] || {});
            }), _0x41f44e.on("error", ({
              message: _0x26894b
            }) => {
              _0x3c7662("[ERR][Player] %s", _0x26894b);
              if (_0x215c3a) {
                return this.destroy(_0x26894b, _0x3f7c18 || true);
              }
              if (_0x41f44e.isErr || !_0x41f44e.isSw) {
                if (!_0x4c29fa) {
                  return this.destroy(_0x26894b, _0x3f7c18 || true);
                }
                var _0x577c89 = {
                  ..._0x1b7bbc
                };
                _0x577c89.destroy = this.destroy;
                return new _0xd7726d(_0x577c89).setup(_0x3f7c18);
              }
              const {
                label: _0x3fd645
              } = _0x406b14[_0x168283] || {};
              if (["1440p", '2160p'].includes(_0x3fd645)) {
                _0x13381d.sources = _0x13381d.sources.filter(_0x28100f => !["1440p", "2160p"].includes(_0x28100f.label));
              }
              _0x41f44e.isErr = true;
              return this.setup(_0x3f7c18);
            }), _0x41f44e.on("remove", () => {
              if (!(_0x568a7f || _0x41f44e.isErr)) {
                _0x3c7662("Player remove");
                this.destroy();
              }
            }), _0x41f44e);
          };
          async function _0x268538(_0x30a317 = null, _0x29344e, _0x5ec224 = false) {
            clearTimeout(_0xdeda9d.request);
            clearTimeout(_0xdeda9d.nextData);
            if (!_0x29344e || _0x568a7f) {
              return;
            }
            if (!_0x30a317) {
              return _0x516d15(_0x29344e);
            }
            const {
              id: _0x11bf16,
              range: _0x234c82,
              size: _0x3f739d,
              label: _0x227914
            } = _0x30a317 || {};
            if (!_0x227914 || _0x234c82?.["start"] > _0x3f739d) {
              return _0x516d15(_0x29344e);
            }
            var _0x246a1c = _0x234c82?.["start"] || 0x0;
            var _0x3d49c6 = Math.floor(_0x246a1c / _0x2b2c8e);
            if (_0x10a93e[_0x227914].get(_0x3d49c6)) {
              return _0x5ec224 ? (clearTimeout(_0xdeda9d.nextData), void (_0xdeda9d.nextData = setTimeout(() => _0x5a8b58(_0x30a317), 0x64))) : _0x3091fe[_0x227914].get(_0x3d49c6, (_0x30c9f2, _0x4ddc1d) => {
                if (_0x30c9f2) {
                  _0x3c7662("[ERR][Read Store][%s][%s] %s", _0x227914, _0x3d49c6, _0x30c9f2?.["message"]);
                  return _0x516d15(_0x29344e);
                }
                _0x29344e.postMessage(_0x4ddc1d);
                _0x499e03 = _0x3d49c6 + 0x1;
                _0x3c7662("[%s][%s] Push data %s", _0x227914, _0x11bf16.split('-').pop(), _0x3d49c6);
                (function (_0x4cf1dd, _0x543e32) {
                  if (!_0x568a7f && _0x4cf1dd) {
                    var _0x4d6589 = _0x543e32 - 0x320;
                    if (!(_0x4d6589 < 0x50)) {
                      delete _0x3091fe?.[_0x4cf1dd]?.["chunks"][_0x4d6589];
                      _0x10a93e?.[_0x4cf1dd]?.["set"](_0x4d6589, false);
                      _0x3c7662("[%s] Delete data %s", _0x4cf1dd, _0x4d6589);
                    }
                  }
                })(_0x227914, _0x3d49c6);
                clearTimeout(_0xdeda9d.nextData);
                _0xdeda9d.nextData = setTimeout(() => _0x5a8b58(_0x30a317), 0x64);
                _0xaaf6a?.["buffer"]?.(_0x4ddc1d.byteLength);
              });
            }
            if (_0x11bf16 != _0x28e76c) {
              _0x3c7662("Dismiss the data request and close the stream");
              return _0x516d15(_0x29344e);
            }
            var _0x3f29db = _0x3d49c6 * _0x2b2c8e;
            var _0x33781e = _0x3f29db + _0x1d41f7 - 0x1;
            if (_0x33781e > _0x3f739d) {
              _0x33781e = _0x3f739d - 0x1;
            }
            return _0x119b6d({
              'size': _0x3f739d,
              'label': _0x227914,
              'range': {
                'start': _0x3f29db,
                'end': _0x33781e
              },
              'index': _0x3d49c6
            }, ({
              action: _0x4c0269,
              message: _0xe92058
            }) => {
              if (_0x5ec224) {
                clearTimeout(_0xdeda9d.nextData);
                if ('done' == _0x4c0269) {
                  _0x5a8b58(_0x30a317);
                }
                return void ('wait' == _0x4c0269 && (_0xdeda9d.nextData = setTimeout(() => _0x5a8b58(_0x30a317), 0x64)));
              }
              if ("reload" == _0x4c0269) {
                var _0x11e52b = _0x13381d.sources.findIndex(_0x6cdad7 => _0x6cdad7.label == _0x227914 && _0x6cdad7.size == _0x3f739d);
                if (-0x1 !== _0x11e52b) {
                  _0x13381d.sources.splice(_0x11e52b, 0x1);
                }
                _0x270476(_0x41f44e.getPosition() || 0x0);
                return _0x516d15(_0x29344e);
              }
              return "buffer" == _0x4c0269 ? _0x268538(_0x30a317, _0x29344e) : "wait" == _0x4c0269 ? setTimeout(() => _0x268538(_0x30a317, _0x29344e), 0x64) : ("abort" == _0x4c0269 && _0x516d15(_0x29344e), void _0x3c7662("[%s] %s", _0x4c0269, _0xe92058));
            }, _0x5ec224);
          }
          async function _0x5a8b58(_0x3dece9) {
            if (_0x10ba84) {
              return;
            }
            clearTimeout(_0xdeda9d.nextData);
            const {
              label: _0xf3cc53
            } = _0x406b14[_0x168283];
            if (_0x3dece9.label == _0xf3cc53) {
              var _0x1447bd = _0x3091fe[_0xf3cc53].lastChunkIndex;
              var _0xe62de0 = _0x499e03 + 0xa0;
              if (_0xe62de0 > _0x1447bd) {
                _0xe62de0 = _0x1447bd;
              }
              for (let _0x46fe68 = _0x499e03; _0x46fe68 < _0xe62de0; _0x46fe68++) {
                if (!_0x10a93e[_0xf3cc53].get(_0x46fe68)) {
                  var _0x4fa573 = {
                    "start": _0x46fe68 * _0x2b2c8e
                  };
                  clearTimeout(_0xdeda9d.request);
                  _0x3dece9.range = _0x4fa573;
                  _0xdeda9d.request = setTimeout(() => _0x268538(_0x3dece9, {}, true), 0x64);
                  break;
                }
              }
            } else {
              _0x3c7662("[NextData] Breach quality %s", _0x3dece9.label);
            }
          }
          function _0x516d15(_0x5115f9) {
            if (_0x5115f9) {
              _0x5115f9?.["postMessage"]?.(false);
            }
          }
          this.destroy = (_0x4146f5, _0x2ac8f8) => {
            if (!_0x568a7f) {
              _0x3c7662("Destroy");
              _0x568a7f = true;
              _0x41f44e?.["remove"]?.();
              _0x41f44e = null;
              _0x406b14 = [];
              _0x28e76c = null;
              _0x499e03 = 0x0;
              _0x168283 = -0x1;
              _0xbb0676?.["destroy"]?.();
              _0xbb0676 = null;
              for (const _0x4491cb in _0xdeda9d) {
                clearTimeout(_0xdeda9d[_0x4491cb]);
                clearInterval(_0xdeda9d[_0x4491cb]);
                delete _0xdeda9d[_0x4491cb];
              }
              return _0x1b7bbc.destroy(_0x4146f5, _0x2ac8f8);
            }
          };
        };
      },
      0x244: (_0x1ab9ef, _0x1c13ff, _0x3612eb) => {
        _0x3612eb(0x341)("mp4:video");
        const _0x17359f = _0x3612eb(0x172);
        _0x1ab9ef.exports = function (_0x41cea1) {
          const {
            id: _0x59a56e,
            options: _0x478006,
            options: {
              videoId: _0xe2a41c,
              slug: _0xc3ec3e,
              md5_id: _0x362acf,
              domain: _0x49f4c0
            },
            tracker: _0x292a02
          } = _0x41cea1 || {};
          const _0x385c07 = document.getElementById(_0x59a56e);
          const _0x5985e4 = new _0x17359f();
          var _0x5296bd = null;
          var _0xe46902 = false;
          this.setup = async () => {
            if (!_0x385c07) {
              return this.destroy("Player element not found");
            }
            var _0x1d59aa = _0x478006.sources.filter(_0x22a897 => 'av1' != _0x22a897.codec && _0x22a897.res_id < 0x5).sort((_0x136cf7, _0xb035da) => _0x136cf7.res_id - _0xb035da.res_id);
            if (!_0x1d59aa.length) {
              return this.destroy("No playable sources found");
            }
            if (!_0x5296bd) {
              await _0x5985e4.expandKey(_0xc3ec3e);
            }
            var {
              res_id: _0x9bd05d
            } = _0x1d59aa[_0x1d59aa.length - 0x1];
            _0x1d59aa = _0x1d59aa.filter(_0x523a39 => _0x523a39.res_id == _0x9bd05d).sort((_0x4c7a12, _0x121de2) => (_0x121de2.status ? 0x1 : 0x0) - (_0x4c7a12.status ? 0x1 : 0x0));
            var {
              label: _0x291f7b,
              size: _0x56ba2b
            } = _0x1d59aa.shift();
            var _0x2cbd00 = await _0x5985e4.encrypt(JSON.stringify({
              'slug': _0xc3ec3e,
              'label': _0x291f7b,
              'md5_id': _0x362acf,
              'size': _0x56ba2b
            }));
            _0x2cbd00 = btoa(btoa(_0x2cbd00).replace(/=/g, '')).replace(/=/g, '');
            (_0x5296bd = document.createElement('video')).src = '//' + _0x49f4c0 + '/' + _0xe2a41c + '/' + _0x2cbd00;
            _0x5296bd.style.width = '100%';
            _0x5296bd.style.height = "100%";
            _0x5296bd.controls = true;
            _0x5296bd.onplay = () => _0x292a02?.["setPlaying"](true);
            _0x5296bd.onpause = () => _0x292a02?.["setPlaying"](false);
            _0x5296bd.onerror = () => this.destroy("Video error");
            _0x385c07.innerHTML = '';
            _0x385c07.append(_0x5296bd);
            return _0x5296bd;
          };
          this.destroy = _0x54fdc6 => {
            if (!_0xe46902) {
              _0xe46902 = true;
              _0x5296bd?.["remove"]?.();
              _0x5296bd = null;
              return _0x41cea1.destroy(_0x54fdc6);
            }
          };
        };
      },
      0x39f: (_0x1713a3, _0x47beeb, _0x408223) => {
        const _0x41f5ee = _0x408223(0x341)('mp4');
        const _0x23f63d = _0x408223(0x32c);
        const _0x16ff48 = _0x408223(0x1b2);
        const _0x2cc242 = _0x408223(0x17f);
        const _0x4c17c6 = _0x408223(0x244);
        const _0x53bdde = _0x408223(0x284);
        const _0x5eb5b8 = _0x408223(0x2ec);
        const _0x309369 = _0x408223(0xb9);
        const _0x4d2284 = _0x408223(0x172);
        const _0x33e0ff = _0x408223(0x3c8);
        const _0x37a817 = _0x408223(0x1f6);
        _0x1713a3.exports = function (_0x510465 = {}) {
          const {
            options: {
              videoId: _0xa52b1e,
              slug: _0x3e12cf,
              md5_id: _0x3b5924,
              domain: _0x5a3340,
              sources: _0x5dfd16
            }
          } = _0x510465 || {};
          var _0xd2bce7 = {};
          var _0xc6fcdc = null;
          var _0x478058 = false;
          var _0x30d5e8 = false;
          var _0xdcff49 = null;
          const _0x1f011a = {};
          const _0x280f1e = {};
          const _0x154678 = {};
          const _0x143fcc = {};
          const _0x1006d0 = {};
          const _0x130096 = new _0x4d2284();
          const _0x17b0fc = new _0x33e0ff();
          const _0x532be0 = ("MediaSource" in window);
          const _0x167d69 = ("serviceWorker" in navigator);
          const _0xfb7396 = navigator.userAgent;
          const _0x21e902 = /UCBrowser/.test(_0xfb7396);
          const _0x350f33 = /EdgA/.test(_0xfb7396);
          const _0x51b3b5 = /Android/.test(_0xfb7396);
          const _0x4d1112 = _0x350f33 && _0x51b3b5;
          const _0x4a9801 = /HeyTapBrowser/.test(_0xfb7396);
          var _0x171ed5 = false;
          async function _0x8372a4({
            size: _0x165be1,
            label: _0x3fa838,
            range: _0x56c6b3,
            index: _0x528d15
          }, _0x1c2995, _0xe85b9b = false) {
            clearTimeout(_0x1006d0.retry);
            var _0x5cf97b = false;
            for (const _0x26d924 in _0x1f011a) {
              const {
                controller: _0x2ff720,
                range: {
                  start: _0x4780f1,
                  end: _0x44535a
                },
                label: _0x43abab
              } = _0x1f011a[_0x26d924];
              var _0xecd80f = {
                action: "wait"
              };
              if (_0x44535a > _0x56c6b3.start && _0x4780f1 <= _0x56c6b3.start && _0x3fa838 == _0x43abab && _0x56c6b3.start) {
                if (!_0x5cf97b) {
                  _0x5cf97b = true;
                  if (_0x1c2995) {
                    _0x1c2995(_0xecd80f);
                  }
                }
              } else {
                if (!_0xe85b9b || !_0x5eb5b8) {
                  try {
                    _0x2ff720.abort();
                    delete _0x1f011a[_0x26d924];
                  } catch ({
                    message: _0x500ea3
                  }) {
                    _0x41f5ee("[ERR][Abort Request] %s", _0x500ea3);
                  }
                }
              }
            }
            if (_0x5cf97b) {
              return;
            }
            var _0x1cf04d = _0x143fcc[_0x165be1];
            if (!_0x1cf04d) {
              _0x1cf04d = _0x143fcc[_0x165be1] = new _0x4d2284();
              await _0x1cf04d.expandKey(_0x165be1);
            }
            const _0x887af9 = _0x309369();
            const _0x26c82f = new AbortController();
            var _0x29eb54 = {
              "range": _0x56c6b3,
              "controller": _0x26c82f,
              label: _0x3fa838
            };
            _0x1f011a[_0x887af9] = _0x29eb54;
            var _0x3719b7 = {
              "slug": _0x3e12cf,
              "md5_id": _0x3b5924,
              label: _0x3fa838,
              size: _0x165be1,
              "range": _0x56c6b3
            };
            const _0x4b22c6 = await _0x130096.encrypt(JSON.stringify(_0x3719b7));
            _0x41f5ee("[Request]%s[%s] bytes=%s-%s", _0xe85b9b ? "[PRELOAD]" : '', _0x528d15, _0x56c6b3.start, _0x56c6b3.end);
            var _0x5284c1 = '//' + _0x5a3340;
            if (!(_0x30d5e8 || _0xdcff49 || _0x478058)) {
              _0x30d5e8 = true;
              _0x478058 = true;
              _0x37a817(_0x5284c1).then(_0x428ff3 => {
                _0x478058 = false;
                if (_0x428ff3) {
                  _0xdcff49 = _0x428ff3;
                }
              });
            }
            if (_0xdcff49) {
              _0x5284c1 = _0xdcff49;
            }
            try {
              var _0x154a0b = {
                "content-type": "application/json"
              };
              var _0x58c1d8 = {
                hash: _0x4b22c6
              };
              var _0x49b85 = await fetch(_0x5284c1 + '/' + _0xa52b1e, {
                'method': 'POST',
                'headers': _0x154a0b,
                'body': JSON.stringify(_0x58c1d8),
                'signal': _0x26c82f.signal,
                mode: 'no-cors'
              });
            } catch ({
              message: _0x43ecd7
            }) {
              _0x41f5ee("[ERR] %s", _0x43ecd7);
              delete _0x1f011a[_0x887af9];
              _0xdcff49 = null;
              return void (_0x1006d0.retry = setTimeout(() => _0x1c2995 && _0x1c2995({
                'action': "abort",
                'message': _0x43ecd7
              }), 0xbb8));
            }
            if (!_0x49b85.ok) {
              delete _0x1f011a[_0x887af9];
              return 0x194 == _0x49b85.status ? _0x1c2995 && _0x1c2995({
                'action': "reload",
                'message': _0x49b85.status
              }) : (_0xdcff49 = null, _0x1c2995 && _0x1c2995({
                'action': "abort",
                'message': _0x49b85.status
              }));
            }
            try {
              var _0x56301e = false;
              var _0x3a0727 = true;
              const _0x4056ed = _0x49b85.body.pipeThrough(new _0x53bdde(0x10000)).getReader();
              for (;;) {
                const {
                  done: _0x111330,
                  value: _0x2eab9c
                } = await _0x4056ed.read();
                if (_0x111330) {
                  if (!_0x478058 && _0x56c6b3.end - _0x56c6b3.start + 0x1 == 0x200000) {
                    var _0x538d09 = _0x17b0fc?.["get"]("download");
                    if (_0x538d09 && _0x538d09 / 0x100000 < 0.7) {
                      _0x478058 = true;
                      _0x37a817('//' + _0x5a3340).then(_0x56d17f => {
                        _0x478058 = false;
                        if (_0x56d17f && _0x5284c1 != _0x56d17f) {
                          _0x30d5e8 = true;
                          _0xdcff49 = _0x56d17f;
                        }
                      });
                    }
                  }
                  var _0x17091d = {
                    action: "done"
                  };
                  delete _0x1f011a[_0x887af9];
                  if (_0xe85b9b && _0x1c2995) {
                    _0x1c2995(_0x17091d);
                  }
                  break;
                }
                if (_0x171ed5) {
                  break;
                }
                _0x17b0fc?.['download']?.(_0x2eab9c.length);
                var _0x54bc1d = _0x2eab9c;
                if (_0x3a0727) {
                  _0x3a0727 = false;
                  _0x54bc1d = await _0x1cf04d.decrypt(_0x2eab9c);
                }
                _0x280f1e[_0x3fa838].put(_0x528d15, _0x54bc1d, _0x2e71e1 => {
                  if (_0x2e71e1) {
                    _0x41f5ee("[ERR][Write Store][%s][%s] %s", _0x3fa838, _0x528d15, _0x2e71e1?.["message"]);
                    return _0x1c2995 && _0x1c2995({
                      'action': "error",
                      'message': _0x2e71e1?.["message"]
                    });
                  }
                  var _0x5242c1 = {
                    "action": "buffer",
                    "buffer": _0x2eab9c
                  };
                  _0x154678[_0x3fa838].set(_0x528d15, true);
                  _0x41f5ee("[%s]%s Got data %s", _0x3fa838, _0xe85b9b ? "[PRELOAD]" : '', _0x528d15);
                  _0x528d15++;
                  if (!(_0x56301e || _0xe85b9b || !_0x1c2995)) {
                    _0x56301e = true;
                    _0x1c2995(_0x5242c1);
                    _0x1c2995 = undefined;
                  }
                });
              }
            } catch ({
              message: _0x4b87a7
            }) {
              _0x41f5ee("[ERR][REQ] %s", _0x4b87a7);
              delete _0x1f011a[_0x887af9];
              return _0x1c2995 && _0x1c2995({
                'action': "error",
                'message': _0x4b87a7
              });
            }
          }
          this.setup = async () => {
            _0x41f5ee("Setup");
            var _0x3d2321 = [..._0x5dfd16].filter(_0x54689f => "mp4" == _0x54689f.type);
            var _0x4bc0a3 = {
              ..._0x510465
            };
            _0x4bc0a3.stores = _0x280f1e;
            _0x4bc0a3.bitfields = _0x154678;
            _0x4bc0a3.request = _0x8372a4;
            _0x4bc0a3.speed = _0x17b0fc;
            _0x4bc0a3.chunkLength = 0x10000;
            _0x4bc0a3.chunkLengthDownload = 0x200000;
            return _0x3d2321.length ? ((_0xd2bce7 = _0x4bc0a3).options.sources = _0x3d2321, _0xd2bce7.destroy = this.destroy, await _0x130096.expandKey(_0x3e12cf), _0x21e902 ? _0xc6fcdc = new _0x4c17c6(_0xd2bce7) : _0x3d2321.find(_0x5c75b4 => !!_0x5c75b4.size) && (!_0x167d69 || _0x4d1112 || _0x4a9801 ? _0x532be0 && (_0xc6fcdc = new _0x2cc242(_0xd2bce7)) : _0xc6fcdc = new _0x16ff48(_0xd2bce7)), _0xc6fcdc || (_0xc6fcdc = new _0x23f63d(_0xd2bce7)), _0xc6fcdc.setup()) : this.destroy("No playable sources found");
          };
          this.destroy = (_0x5ae2e0, _0x46082c) => {
            if (!_0x171ed5) {
              _0x41f5ee('Destroy');
              _0x171ed5 = true;
              _0xc6fcdc?.['destroy']?.();
              _0xc6fcdc = null;
              _0x17b0fc?.["destroy"]?.();
              _0x30d5e8 = false;
              _0xdcff49 = null;
              for (const _0xe8680d in _0x280f1e) delete _0x280f1e[_0xe8680d];
              for (const _0x53bf07 in _0x154678) delete _0x154678[_0x53bf07];
              for (const _0x141d7d in _0x1006d0) {
                clearTimeout(_0x1006d0[_0x141d7d]);
                delete _0x1006d0[_0x141d7d];
              }
              for (const _0x463f90 in _0x1f011a) {
                _0x1f011a[_0x463f90]?.["controller"]?.["abort"]?.();
                delete _0x1f011a[_0x463f90];
              }
              return _0x46082c ? (_0xd2bce7.destroy = _0x510465.destroy, _0xd2bce7.options.sources = [..._0x5dfd16].filter(_0x1ed5e6 => "mp4" == _0x1ed5e6.type), new _0x23f63d({
                ..._0xd2bce7
              }).setup(0x1 == _0x46082c ? 0x0 : _0x46082c), void (_0xd2bce7 = {})) : (_0xd2bce7 = {}, _0x510465.destroy(_0x5ae2e0));
            }
          };
        };
      },
      0x269: _0x36264d => {
        var _0x5a1cf9 = {
          url: null,
          width: "300px",
          "height": '250px'
        };
        _0x36264d.exports = (_0x54294b = _0x5a1cf9) => {
          if (!_0x54294b?.["url"]) {
            return;
          }
          const _0x41c72b = document.createElement("div");
          _0x41c72b.style.position = 'fixed';
          _0x41c72b.style.top = 0x0;
          _0x41c72b.style.left = 0x0;
          _0x41c72b.style.right = 0x0;
          _0x41c72b.style.bottom = 0x0;
          _0x41c72b.style.background = "#000";
          _0x41c72b.style.zIndex = 0x270f;
          _0x41c72b.style.display = 'flex';
          _0x41c72b.style.justifyContent = "center";
          _0x41c72b.style.alignItems = "center";
          document.body.appendChild(_0x41c72b);
          _0x41c72b.innerHTML = "\n        <div class=\"loading-overlay\">\n            <div class=\"loading-content\">\n                <span class=\"loading-text\">Loading ad</span>\n                <div class=\"loading-dots\">\n                    <div class=\"dot\"></div>\n                    <div class=\"dot\"></div>\n                    <div class=\"dot\"></div>\n                </div>\n            </div>\n        </div>\n    ";
          var _0x97d22d = document.createElement("style");
          _0x97d22d.textContent = ".loading-overlay{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;color:#fff;justify-content:center;align-items:center}.loading-content{display:flex;align-items:center}.loading-text{margin-right:10px;font-size:larger;font-weight:700;font-style:italic}.loading-dots{display:flex}.dot{width:8px;height:8px;margin:0 3px;background-color:#3498db;border-radius:50%;animation:1.5s ease-in-out infinite dot-pulse}.dot:nth-child(2){animation-delay:.2s}.dot:nth-child(3){animation-delay:.4s}@keyframes dot-pulse{0%,100%,60%{transform:scale(1);opacity:1}30%{transform:scale(.5);opacity:.5}}";
          _0x41c72b.appendChild(_0x97d22d);
          const _0x397fc9 = document.createElement("iframe");
          _0x397fc9.src = _0x54294b.url;
          _0x397fc9.style.width = _0x54294b.width || "300px";
          _0x397fc9.style.height = _0x54294b.height || '250px';
          _0x397fc9.style.border = "none";
          _0x397fc9.style.zIndex = 0x270f;
          _0x397fc9.onload = () => {
            const _0x313725 = _0x41c72b.querySelector(".loading-overlay");
            if (_0x313725) {
              _0x313725.style.display = "none";
            }
          };
          _0x41c72b.appendChild(_0x397fc9);
          var _0x14f06f = 0x5;
          const _0x176604 = document.createElement("button");
          _0x176604.textContent = "Skip ad in XXXs".replace("XXX", _0x14f06f);
          _0x176604.style.position = "fixed";
          _0x176604.style.bottom = '56px';
          _0x176604.style.right = "10px";
          _0x176604.style.border = 'none';
          _0x176604.style.background = '#000';
          _0x176604.style.color = '#fff';
          _0x176604.style.padding = "10px 15px";
          _0x176604.style.zIndex = 0x270f;
          _0x176604.style.borderRadius = "5px";
          _0x176604.style.fontWeight = "bold";
          _0x176604.style.display = "flex";
          _0x176604.style.alignItems = "center";
          const _0x183bd0 = setInterval(() => {
            _0x14f06f--;
            _0x176604.textContent = "Skip ad in XXXs".replace("XXX", _0x14f06f);
            if (_0x14f06f > 0x0) {
              return;
            }
            clearInterval(_0x183bd0);
            let _0x838839 = document.createElement('style');
            _0x838839.textContent = "button:hover { box-shadow: 1px 1px 5px #fff }";
            _0x41c72b.appendChild(_0x838839);
            _0x176604.innerHTML = "Close ad <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\" style=\"margin-left:5px\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z\" /></svg>";
            _0x176604.style.cursor = 'pointer';
            let _0x44594b = () => document.body.removeChild(_0x41c72b);
            if ("ontouchstart" in window || "onmsgesturechange" in window) {
              _0x176604.ontouchend = _0x44594b;
            } else {
              _0x176604.onclick = _0x44594b;
            }
          }, 0x3e8);
          _0x41c72b.appendChild(_0x176604);
          return _0x41c72b;
        };
      },
      0x305: _0x473fc2 => {
        var _0x4ec335 = -0x1;
        var _0x1b4c33 = null;
        function _0x2c6597() {
          if (_0x1b4c33) {
            var _0x685c92 = document.createElement('a');
            _0x685c92.setAttribute("href", _0x1b4c33);
            _0x685c92.setAttribute('target', "_blank");
            _0x685c92.click();
            document.onclick = null;
            document.ontouchend = null;
          }
        }
        _0x473fc2.exports = (_0x6005aa = false, _0x58ae87 = []) => {
          if (!_0x6005aa && _0x58ae87?.["length"]) {
            _0x1b4c33 = _0x58ae87[++_0x4ec335 % _0x58ae87.length];
            if (/iPhone|iPad|iPod|Mac OS/i.test(navigator.userAgent)) {
              document.onclick = _0x2c6597;
              if ("ontouchstart" in window || "onmsgesturechange" in window) {
                document.ontouchend = _0x2c6597;
              }
            } else {
              _0x2c6597();
            }
          }
        };
      },
      0x30a: _0x5c1e3b => {
        _0x5c1e3b.exports = _0xdfe234 => !(!_0xdfe234 || undefined === window.jwplayer) && jwplayer().addButton("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\" style=\"fill:none;stroke-width:2px\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3\" /></svg>", "Download video", () => window.open(_0xdfe234, "_blank"), "download", "download");
      },
      0x350: _0x56be39 => {
        _0x56be39.exports = () => {
          if (undefined === window.jwplayer) {
            return false;
          }
          const _0x5f9510 = document.querySelector(".jw-display-icon-rewind");
          if (_0x5f9510 && !document.querySelector(".jw-display-icon-forward")) {
            const _0x1fdf14 = _0x5f9510.cloneNode(true);
            const _0x32ac8f = _0x1fdf14.querySelector(".jw-icon-rewind");
            if (_0x32ac8f) {
              _0x32ac8f.classList.remove("jw-icon-rewind");
              _0x32ac8f.classList.add("jw-display-icon-forward");
              _0x32ac8f.ariaLabel = "Forward 10 Seconds";
              _0x32ac8f.querySelector('svg').innerHTML = "<path d=\"m 25.993957,57.778 v 125.3 c 0.03604,2.63589 2.164107,4.76396 4.8,4.8 h 62.7 v -19.3 h -48.2 v -96.4 H 160.99396 v 19.3 c 0,5.3 3.6,7.2 8,4.3 l 41.8,-27.9 c 2.93574,-1.480087 4.13843,-5.04363 2.7,-8 -0.57502,-1.174985 -1.52502,-2.124979 -2.7,-2.7 l -41.8,-27.9 c -4.4,-2.9 -8,-1 -8,4.3 v 19.3 H 30.893957 c -2.689569,0.03972 -4.860275,2.210431 -4.9,4.9 z m 163.422413,73.04577 c -3.72072,-6.30626 -10.38421,-10.29683 -17.7,-10.6 -7.31579,0.30317 -13.97928,4.29374 -17.7,10.6 -8.60009,14.23525 -8.60009,32.06475 0,46.3 3.72072,6.30626 10.38421,10.29683 17.7,10.6 7.31579,-0.30317 13.97928,-4.29374 17.7,-10.6 8.60009,-14.23525 8.60009,-32.06475 0,-46.3 z m -17.7,47.2 c -7.8,0 -14.4,-11 -14.4,-24.1 0,-13.1 6.6,-24.1 14.4,-24.1 7.8,0 14.4,11 14.4,24.1 0,13.1 -6.5,24.1 -14.4,24.1 z m -47.77056,9.72863 v -51 l -4.8,4.8 -6.8,-6.8 13,-12.99999 c 3.02543,-3.03598 8.21053,-0.88605 8.2,3.4 v 62.69999 z\"></path>";
              _0x32ac8f.onclick = () => jwplayer().seek(jwplayer().getPosition() + 0xa);
            }
            const _0x367576 = document.querySelector(".jw-display-icon-next");
            if (_0x367576) {
              _0x367576.parentNode.insertBefore(_0x1fdf14, _0x367576);
              _0x367576.remove();
            }
          }
          if (!document.querySelector(".forward")) {
            jwplayer().addButton("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\" class=\"jw-svg-icon jw-svg-icon-rewind\"><path d=\"m 25.993957,57.778 v 125.3 c 0.03604,2.63589 2.164107,4.76396 4.8,4.8 h 62.7 v -19.3 h -48.2 v -96.4 H 160.99396 v 19.3 c 0,5.3 3.6,7.2 8,4.3 l 41.8,-27.9 c 2.93574,-1.480087 4.13843,-5.04363 2.7,-8 -0.57502,-1.174985 -1.52502,-2.124979 -2.7,-2.7 l -41.8,-27.9 c -4.4,-2.9 -8,-1 -8,4.3 v 19.3 H 30.893957 c -2.689569,0.03972 -4.860275,2.210431 -4.9,4.9 z m 163.422413,73.04577 c -3.72072,-6.30626 -10.38421,-10.29683 -17.7,-10.6 -7.31579,0.30317 -13.97928,4.29374 -17.7,10.6 -8.60009,14.23525 -8.60009,32.06475 0,46.3 3.72072,6.30626 10.38421,10.29683 17.7,10.6 7.31579,-0.30317 13.97928,-4.29374 17.7,-10.6 8.60009,-14.23525 8.60009,-32.06475 0,-46.3 z m -17.7,47.2 c -7.8,0 -14.4,-11 -14.4,-24.1 0,-13.1 6.6,-24.1 14.4,-24.1 7.8,0 14.4,11 14.4,24.1 0,13.1 -6.5,24.1 -14.4,24.1 z m -47.77056,9.72863 v -51 l -4.8,4.8 -6.8,-6.8 13,-12.99999 c 3.02543,-3.03598 8.21053,-0.88605 8.2,3.4 v 62.69999 z\"></path></svg>", "Forward 10 Seconds", () => jwplayer().seek(jwplayer().getPosition() + 0xa), "forward", "forward");
            const _0x5bb5a4 = document.querySelector(".forward");
            const _0x506627 = document.querySelector(".jw-controlbar .jw-icon-next");
            if (_0x5bb5a4 && _0x506627 && _0x506627.parentNode) {
              _0x506627.parentNode.insertBefore(_0x5bb5a4, _0x506627);
            }
          }
          return true;
        };
      },
      0x174: (_0x116cca, _0x49936a, _0x15e63e) => {
        const _0xedc94e = _0x15e63e(0x26b);
        const _0x2282b0 = _0x15e63e(0x161);
        function _0x66ff7b() {
          try {
            if (window.jwplayer) {
              jwplayer()?.["remove"]?.();
            }
          } catch ({
            message: _0x546de0
          }) {
            console.error(_0x546de0);
          } finally {
            sessionStorage.setItem('devtool', "open");
          }
        }
        function _0x52e639() {
          const _0x278835 = new Date().getTime();
          (function () {}).constructor("debugger")();
          return new Date().getTime() - _0x278835 >= 0x64;
        }
        function _0x4f0a94() {
          var _0x127bdd = null;
          try {
            _0x127bdd = new URLSearchParams(new URL(document.location.href).search).get('v');
          } catch ({
            message: _0x294661
          }) {
            console.error(_0x294661);
          }
          return _0x2282b0("Security alert", "Due to security concerns, your access request has been denied. Kindly close your browser completely and try again. Kindly refrain from opening the developer tools (eg: F12)." + (_0x127bdd ? "<br>Vid: " + _0x127bdd : ''));
        }
        _0x116cca.exports = () => {
          var _0x23c7cb = "open" == sessionStorage.getItem("devtool");
          if (_0x23c7cb) {
            _0x4f0a94();
            return setInterval(() => {
              _0x66ff7b();
              console.clear();
            }, 0x64);
          }
          if ("ontouchstart" in window || "onmsgesturechange" in window) {
            setInterval(() => console.clear(), 0x64);
            var _0x11762c = setInterval(() => {
              if (_0x52e639()) {
                clearInterval(_0x11762c);
                _0x4f0a94();
                setInterval(() => _0x66ff7b(), 0x64);
              }
            }, 0x64);
            return _0x11762c;
          }
          _0xedc94e.addListener(_0x321f28 => {
            if ((_0x23c7cb = _0x321f28) && _0x52e639()) {
              _0x4f0a94();
              setInterval(() => _0x66ff7b(), 0x64);
            }
          });
          return _0xedc94e.launch();
        };
      },
      0x1f6: (_0x2f3278, _0x53a584, _0x8eb41e) => {
        const _0x2fdd2d = _0x8eb41e(0x3bb);
        _0x2f3278.exports = async _0x1e9f9a => {
          if (!_0x1e9f9a) {
            return false;
          }
          var _0x3186d2 = await _0x2fdd2d(_0x1e9f9a + '/tunnel');
          return !!_0x3186d2 && _0x3186d2.text();
        };
      },
      0x2a3: (_0x2078eb, _0x46d3de, _0x5b29d3) => {
        const _0x5a5470 = _0x5b29d3(0x341)("load-script");
        _0x2078eb.exports = (_0x12dab9 = null) => new Promise(_0x1b38e0 => {
          if (!_0x12dab9) {
            return _0x1b38e0(false);
          }
          var _0x59ec52 = document.createElement("script");
          _0x59ec52.src = _0x12dab9;
          _0x59ec52.onload = () => {
            _0x5a5470("Script loaded and executed");
            _0x1b38e0(true);
          };
          _0x59ec52.onerror = () => {
            _0x5a5470("Error loading script");
            _0x1b38e0(false);
          };
          return document.head.appendChild(_0x59ec52);
        });
      },
      0x2d4: _0x57d923 => {
        function _0x259c08(_0xeb9c8) {
          var _0x8be4ea = 0x0;
          var _0x45d842 = 0x0;
          if ((_0xeb9c8 = Number(_0xeb9c8)) >= 0x3c) {
            _0x45d842 = _0xeb9c8 / 0x3c;
            _0xeb9c8 = parseInt(_0xeb9c8 % 0x3c);
            if (_0x45d842 > 0x3c) {
              _0x8be4ea = parseInt(_0x45d842 / 0x3c);
              _0x45d842 = parseInt(_0x45d842 % 0x3c);
            } else {
              _0x45d842 = parseInt(_0x45d842);
            }
          } else {
            _0xeb9c8 = parseInt(_0xeb9c8);
          }
          if (_0x8be4ea) {
            if (0x1 == _0x8be4ea.toString().length) {
              _0x8be4ea = '0' + _0x8be4ea;
            }
          } else {
            _0x8be4ea = '00';
          }
          if (_0x45d842) {
            if (0x1 == _0x45d842.toString().length) {
              _0x45d842 = '0' + _0x45d842;
            }
          } else {
            _0x45d842 = '00';
          }
          if (0x1 == _0xeb9c8.toString().length) {
            _0xeb9c8 = '0' + _0xeb9c8;
          }
          return _0x8be4ea + ':' + _0x45d842 + ':' + _0xeb9c8 + ":000";
        }
        _0x57d923.exports = (_0x211ca4 = null, _0x2f6a00 = null) => {
          if (!_0x211ca4 || !_0x2f6a00) {
            return false;
          }
          var _0x5804f5 = 0x0;
          var _0xa1ebbb = 0x0;
          var _0x24115f = 0x0;
          var _0x5c7637 = 0x0;
          var _0x8a0357 = 0xa;
          var _0xa8aa4e = Math.ceil(0x708);
          var _0x22b544 = "WEBVTT\n\n";
          for (let _0x4664ff = 0x1; _0x4664ff < _0xa8aa4e; _0x4664ff++) {
            _0x22b544 += _0x4664ff + "\n";
            _0x22b544 += _0x259c08(_0x5c7637) + " --> " + _0x259c08(_0x8a0357) + "\n";
            _0x22b544 += _0x211ca4.replace("XXX", (_0x2f6a00 % 0xa).toString().padStart(0x3, '0')) + '/' + _0x24115f + ".jpg#xywh=" + _0x5804f5 + ',' + _0xa1ebbb + ",178,100\n";
            _0x5c7637 += 0xa;
            _0x8a0357 += 0xa;
            _0x5804f5 += 0xb2;
            if (_0x4664ff % 0x6 == 0x0) {
              _0xa1ebbb += 0x64;
              _0x5804f5 = 0x0;
            }
            if (_0x4664ff % 0x1e == 0x0) {
              _0x5804f5 = 0x0;
              _0xa1ebbb = 0x0;
              _0x24115f++;
            }
            if (_0x4664ff != _0xa8aa4e) {
              _0x22b544 += "\n";
            }
          }
          var _0x4617a2 = {
            type: "text/vtt"
          };
          return URL.createObjectURL(new Blob([_0x22b544], _0x4617a2));
        };
      },
      0x11: (_0x4903e8, _0x3857b5, _0x3a17dc) => {
        const _0x1cba76 = _0x3a17dc(0x341)("resuming-playback");
        const _0x4e79ad = _0x3a17dc(0x26a);
        _0x4903e8.exports = function (_0x24ffd8, _0x2ac7f8) {
          const _0x4ef9b9 = document.createElement("style");
          _0x4ef9b9.textContent = "\n            .jwp-popup {\n                z-index: 9999;\n                background-color: rgba(0, 0, 0, 0.8);\n                color: #fff;\n                border-radius: 8px;\n                padding: 20px;\n                text-align: center;\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n                max-width: 360px;\n                width: 90%;\n                box-sizing: border-box;\n                display: none;\n                box-shadow: 1px 1px 5px #ffffff94;\n            }\n            \n            .jwp-popup .popup-header {\n                font-size: 1.5em;\n                margin-bottom: 15px;\n                font-weight: bold;\n            }\n            \n            .jwp-popup .popup-body {\n                margin-bottom: 20px;\n            }\n\n            .jwp-popup .popup-footer {\n                display: flex;\n                flex-wrap: wrap; /* Cho phép các nút chuyển dòng nếu cần */\n                justify-content: center;\n                gap: 10px;\n            }\n            \n            .jwp-popup button {\n                background-color: #4CAF50;\n                color: white;\n                padding: 10px 20px;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 1em;\n            }\n            \n            .jwp-popup button:hover {\n                background-color: #3e8e41;\n            }\n            \n            .jwp-popup button.jwp-popup-cancel {\n                background-color: #f44336;\n            }\n            \n            .jwp-popup button.jwp-popup-cancel:hover {\n                background-color: #c62828;\n            }\n            \n            @media (max-width: 360px) {\n                .jwp-popup {\n                    display: none; /* Ẩn popup khi màn hình nhỏ hơn 360px */\n                }\n            }\n            \n            /* Responsive Design cho các thiết bị lớn hơn */\n            @media (min-width: 361px) {\n                .jwp-popup {\n                    display: block; /* Hiển thị popup khi màn hình lớn hơn 360px */\n                }\n            }\n        ";
          document.head.appendChild(_0x4ef9b9);
          var _0x161214 = null;
          var _0x5334c7 = null;
          var _0xfcfb2d = null;
          var _0x2d9eb3 = false;
          this.show = () => {
            if ('undefined' == typeof jwplayer || !_0x24ffd8 || !_0x2ac7f8 || _0x2d9eb3) {
              return;
            }
            var _0x43d1cd = function () {
              if (_0x2ac7f8) {
                try {
                  return Number(localStorage.getItem("time_" + _0x2ac7f8) || 0x0);
                } catch ({
                  message: _0x177735
                }) {
                  return void _0x1cba76(_0x177735);
                }
              }
            }();
            if (!Number.isFinite(_0x43d1cd) || Math.floor(_0x43d1cd) <= 0x0) {
              return;
            }
            (_0x161214 = document.createElement("div")).className = "jwp-popup";
            _0x161214.innerHTML = "\n                <div class=\"popup-header\">Continue watching</div>\n                <div class=\"popup-body\">\n                    <p>You have watched up to <u>" + _0x4e79ad(_0x43d1cd) + "</u>. Do you want to continue watching?</p>\n                </div>\n                <div class=\"popup-footer\">\n                    <button class=\"jwp-popup-continue\">Continue</button>\n                    <button class=\"jwp-popup-cancel\">Cancel (<span>10s</span>)</button>\n                </div>\n            ";
            const _0x366c37 = jwplayer(_0x24ffd8);
            (_0x5334c7 = _0x366c37.getContainer()).appendChild(_0x161214);
            var _0x4ad5af = 0xa;
            _0xfcfb2d = setInterval(() => {
              _0x4ad5af--;
              var _0x41b4e1 = document.querySelector(".jwp-popup-cancel span");
              if (!_0x41b4e1 || _0x4ad5af <= 0x0) {
                clearInterval(_0xfcfb2d);
                return _0x5334c7.removeChild(_0x161214);
              }
              _0x41b4e1.innerHTML = _0x4ad5af + 's';
            }, 0x3e8);
            _0x161214.querySelector(".jwp-popup-continue").addEventListener("click", () => {
              clearInterval(_0xfcfb2d);
              _0x5334c7.removeChild(_0x161214);
              _0x366c37.seek(_0x43d1cd);
              _0x366c37.play();
            });
            _0x161214.querySelector(".jwp-popup-cancel").addEventListener("click", () => {
              clearInterval(_0xfcfb2d);
              _0x5334c7.removeChild(_0x161214);
              _0x366c37.play();
            });
          };
          this.setTime = _0x5a4d61 => {
            if (Number.isFinite(_0x5a4d61) && !(_0x5a4d61 <= 0x0) && _0x24ffd8 && _0x2ac7f8 && !_0x2d9eb3) {
              try {
                localStorage.setItem("time_" + _0x2ac7f8, _0x5a4d61);
                return true;
              } catch ({
                message: _0x45943d
              }) {
                return void _0x1cba76(_0x45943d);
              }
            }
          };
          this.destroy = () => {
            if (!_0x2d9eb3) {
              _0x1cba76("Destroy");
              _0x2d9eb3 = true;
              clearInterval(_0xfcfb2d);
              _0xfcfb2d = null;
              document.head.removeChild(_0x4ef9b9);
              if (_0x161214 && _0x5334c7) {
                try {
                  _0x5334c7.removeChild(_0x161214);
                } catch ({
                  message: _0xd6c5c3
                }) {
                  _0x1cba76("[ERR] %s", _0xd6c5c3);
                }
                _0x161214 = null;
                _0x5334c7 = null;
              }
              return true;
            }
          };
        };
      },
      0x3c8: (_0x1db767, _0x426c9e, _0x382186) => {
        const _0x280d0f = _0x382186(0x23);
        const _0x237a5d = _0x382186(0x190);
        _0x1db767.exports = function () {
          var _0x3eb368 = null;
          var _0x530325 = null;
          var _0x5186d2 = false;
          var _0x424bac = false;
          var _0x25e86f = 0x0;
          var _0x2d876f = 0x0;
          const _0xcfa8c2 = ["download", 'buffer'];
          const _0x2342b2 = {};
          var _0x4c0540 = false;
          const _0x2b6ba2 = document.createElement("style");
          _0x2b6ba2.textContent = "\n            .jw-icon-display[aria-label=\"Loading\"] .player-buffer-speed {\n                display: block !important;\n            }\n            .player-buffer-speed {\n                display:none;\n                position:absolute;\n                color:#fff;\n                font-size: 12px;\n                text-shadow: 1px 1px #4f4f4fb3;\n                font-weight:bold;\n                z-index:9999;\n                animation: colorChange 5s linear infinite;\n            }\n            .player-download-speed {\n                display:flex;\n                align-items:center;\n                margin-left: 5px;\n            }\n            .player-download-speed svg {\n                width: 18px;\n                animation: colorChange 5s linear infinite;\n            }\n            .player-download-speed span {\n                font-size: 0.75em;\n            }\n            @keyframes colorChange {\n                0% { color: red; }\n                33% { color: green; }\n                66% { color: blue; }\n                100% { color: red; }\n            }\n        ";
          document.head.appendChild(_0x2b6ba2);
          this.setup = (_0x5ac379 = _0xcfa8c2) => {
            if (!_0x4c0540) {
              _0x5ac379.forEach(_0xb6eb4b => function (_0x52983f) {
                if (_0xcfa8c2.includes(_0x52983f)) {
                  if ('download' == _0x52983f) {
                    if (_0x5186d2) {
                      return true;
                    }
                    if ((_0xe92257 = document.querySelector(".jw-reset .jw-spacer")) && !document.querySelector(".player-download-speed")) {
                      var _0x10887b = "\n                        <div class=\"jw-reset player-download-speed\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\"></path></svg>\n                            <span></span>\n                        </div>\n                    ";
                      _0xe92257.insertAdjacentHTML("beforebegin", _0x10887b);
                    }
                    _0x530325 = new _0x280d0f();
                    return _0x5186d2 = true;
                  }
                  if (_0x424bac) {
                    return true;
                  }
                  var _0xe92257;
                  if (_0xe92257 = document.querySelector(".jw-icon-display")) {
                    if (!document.querySelector(".player-buffer-speed")) {
                      _0x10887b = "<div class=\"jw-reset player-buffer-speed\"><span></span></div>";
                      _0xe92257.insertAdjacentHTML("beforeend", _0x10887b);
                    }
                    _0x3eb368 = new _0x280d0f();
                    return _0x424bac = true;
                  }
                }
              }(_0xb6eb4b));
              return true;
            }
          };
          this.download = (_0x4de7bf = 0x0) => {
            clearInterval(_0x2342b2.downloadSpeed);
            if (!_0x5186d2 || !Number.isInteger(_0x4de7bf) || _0x4c0540) {
              return;
            }
            const _0x895a64 = document.querySelector(".player-download-speed span");
            return _0x895a64 ? (_0x25e86f = _0x530325(_0x4de7bf), _0x895a64.innerText = _0x237a5d.kbs(_0x25e86f), _0x2342b2.downloadSpeed = setInterval(() => {
              _0x25e86f = _0x530325(0x0);
              _0x895a64.innerText = _0x237a5d.kbs(_0x25e86f);
              if (!_0x25e86f) {
                clearInterval(_0x2342b2.downloadSpeed);
              }
            }, 0x3e8), _0x25e86f) : undefined;
          };
          this.buffer = (_0x248043 = 0x0) => {
            clearInterval(_0x2342b2.bufferSpeed);
            if (!_0x424bac || !Number.isInteger(_0x248043) || _0x4c0540) {
              return;
            }
            const _0x40521a = document.querySelector(".player-buffer-speed span");
            return _0x40521a ? (_0x2d876f = _0x3eb368(_0x248043), _0x40521a.innerText = _0x237a5d.bps(_0x2d876f), _0x2342b2.downloadSpeed = setInterval(() => {
              var _0x33491e = _0x3eb368(0x0);
              _0x40521a.innerText = _0x237a5d.bps(_0x33491e);
              if (!_0x33491e) {
                clearInterval(_0x2342b2.bufferSpeed);
              }
            }, 0x3e8), _0x2d876f) : undefined;
          };
          this.get = _0xe9981c => _0xcfa8c2.includes(_0xe9981c) ? "download" == _0xe9981c ? _0x25e86f : _0x2d876f : 0x0;
          this.destroy = () => {
            if (!_0x4c0540) {
              _0x4c0540 = true;
              _0x3eb368 = _0x530325 = () => {};
              _0x424bac = _0x5186d2 = false;
              document.head.removeChild(_0x2b6ba2);
              for (const _0x2baa3f in _0x2342b2) {
                clearInterval(_0x2342b2[_0x2baa3f]);
                delete _0x2342b2[_0x2baa3f];
              }
            }
          };
        };
      },
      0x243: (_0x431f9b, _0x549b90, _0xf65259) => {
        const _0x57802a = _0xf65259(0x341)("tracker");
        _0x431f9b.exports = function (_0x55a352 = {}) {
          const {
            options: {
              slug: _0xa49f07,
              md5_id: _0x550f3c,
              user_id: _0x19c54d
            }
          } = _0x55a352 || {};
          const _0x363eca = !!window.WebSocket;
          var _0x6ff60e = null;
          var _0x120ae7 = false;
          var _0xa768a4 = null;
          var _0x145b25 = false;
          this.start = (_0x302811 = null) => {
            if (_0x302811 && _0x363eca && !_0x145b25) {
              (_0x6ff60e = new WebSocket(_0x302811, [])).binaryType = "arraybuffer";
              _0x6ff60e.onopen = () => {
                _0x57802a("Connect open");
                _0x6ff60e.send(JSON.stringify(this.getInfo()));
                _0xa768a4 = setInterval(() => _0x6ff60e.send(JSON.stringify(this.getInfo())), 0x2710);
              };
              _0x6ff60e.onmessage = _0x5104ca => {};
              _0x6ff60e.onclose = () => {
                _0x57802a("Close connect");
                clearInterval(_0xa768a4);
                if (!_0x145b25) {
                  setTimeout(() => this.start(_0x302811), 0xbb8);
                }
              };
              _0x6ff60e.onerror = ({
                type: _0x1b7e99
              }) => {
                clearInterval(_0xa768a4);
                _0x57802a(_0x1b7e99);
              };
              return _0x6ff60e;
            }
          };
          this.setPlaying = _0x327bdb => {
            _0x120ae7 = !!_0x327bdb;
          };
          this.getInfo = () => ({
            'action': 'info',
            'slug': _0xa49f07,
            'md5_id': _0x550f3c,
            'user_id': _0x19c54d,
            'isPlaying': _0x120ae7
          });
          this.destroy = () => {
            if (!_0x145b25) {
              _0x145b25 = true;
              clearInterval(_0xa768a4);
              _0x6ff60e?.["close"]();
              _0x6ff60e = null;
            }
          };
        };
      },
      0x240: (_0x2c6d62, _0x3da96f, _0x344888) => {
        const _0x58afa2 = _0x344888(0x25b);
        const _0x3f5e02 = window.atob;
        _0x2c6d62.exports = () => {
          window.atob = new Proxy(_0x3f5e02, {
            'apply'(_0x3654b6, _0x51636b, _0x5f0953) {
              var _0x11f13f = _0x5f0953[0x0];
              return /_$/.test(_0x11f13f) ? _0x58afa2.decode(_0x11f13f.replace(/_/g, '')) : _0x3654b6.apply(_0x51636b, _0x5f0953);
            }
          });
        };
      }
    };
    var _0x3507d6 = {};
    function _0x3272a8(_0x586246) {
      var _0x3542de = _0x3507d6[_0x586246];
      if (undefined !== _0x3542de) {
        return _0x3542de.exports;
      }
      var _0x48d687 = {
        exports: {}
      };
      var _0x2d0366 = _0x3507d6[_0x586246] = _0x48d687;
      _0x430fef[_0x586246].call(_0x2d0366.exports, _0x2d0366, _0x2d0366.exports, _0x3272a8);
      return _0x2d0366.exports;
    }
    _0x3272a8.g = function () {
      if ('object' == typeof globalThis) {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0xc8fc5e) {
        if ("object" == typeof window) {
          return window;
        }
      }
    }();
    const _0x56c242 = _0x3272a8(0x2c);
    const _0x3104fd = _0x3272a8(0xdb);
    _0x3272a8(0x174)();
    _0x3272a8(0x240)();
    window.SoTrym = _0x4d98d8 => new _0x56c242(_0x4d98d8);
    new _0x3104fd(false).register();
  })();