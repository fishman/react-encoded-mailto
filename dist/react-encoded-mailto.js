'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mailto = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Mailto, _Component);

  function Mailto() {
    (0, _classCallCheck3.default)(this, Mailto);
    return (0, _possibleConstructorReturn3.default)(this, (Mailto.__proto__ || (0, _getPrototypeOf2.default)(Mailto)).apply(this, arguments));
  }

  (0, _createClass3.default)(Mailto, [{
    key: 'charEncode',


    // not worth putting the condition in one with a base parameter
    value: function charEncode(chr) {
      return '&#' + chr.toString() + ';';
    }
  }, {
    key: 'hexEncode',
    value: function hexEncode(chr) {
      return '&#x' + chr.toString(16) + ';';
    }
  }, {
    key: 'encodeString',
    value: function encodeString(originalString) {
      var _props = this.props,
          obfuscate = _props.obfuscate,
          decimal = _props.decimal,
          hexadecimal = _props.hexadecimal;

      var originalLength = originalString.length;

      var encodedString = '';
      var encMode = void 0;

      if (!obfuscate) {
        return originalString;
      }

      if (decimal) {
        encMode = 1;
      } else if (hexadecimal) {
        encMode = 2;
      }

      for (var pos = 0; pos < originalLength; pos++) {
        var chr = Number(originalString.charCodeAt(pos));
        encMode = Math.ceil(2 * Math.random());
        switch (encMode) {
          case 1:
            encodedString += this.charEncode(chr);
            break;
          case 2:
            encodedString += this.hexEncode(chr);
            break;
          default:
            return 'ERROR: wrong random number.';
        }
      }
      return encodedString;
    }
  }, {
    key: 'encodeMail',
    value: function encodeMail(originalString) {
      var obfuscate = this.props.obfuscate;

      var originalLength = originalString.length;

      var encodedString = '';

      if (!obfuscate) {
        return originalString;
      }

      for (var pos = 0; pos < originalLength; pos++) {
        encodedString += '%' + Number(originalString.charCodeAt(pos)).toString(16);
      }
      return encodedString;
    }
  }, {
    key: 'generateHref',
    value: function generateHref(email) {
      return 'mailto:' + this.encodeMail(email);
    }
  }, {
    key: 'render',
    value: function render() {
      var email = this.props.email;


      return _react2.default.createElement(
        'a',
        { href: '' + this.generateHref(email) },
        this.props.children
      );
    }
  }]);
  return Mailto;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.string.isRequired,
  email: _react.PropTypes.string.isRequired,
  decimal: _react.PropTypes.bool,
  hexadecimal: _react.PropTypes.bool,
  obfuscate: _react.PropTypes.bool
}, _class.defaultProps = {
  obfuscate: false,
  decimal: false,
  hexadecimal: false
}, _temp);
exports.default = Mailto;
module.exports = exports['default'];