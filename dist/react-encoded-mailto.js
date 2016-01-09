'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _react2 = _interopRequireDefault(_react);

var _components = {
  _$Mailto: {
    displayName: 'Mailto'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/react-encoded-mailto.jsx',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var Mailto = (function (_Component) {
  _inherits(Mailto, _Component);

  function Mailto() {
    _classCallCheck(this, _Mailto);

    _Component.apply(this, arguments);
  }

  // not worth putting the condition in one with a base parameter

  Mailto.prototype.charEncode = function charEncode(chr) {
    return '&#' + chr.toString() + ';';
  };

  Mailto.prototype.hexEncode = function hexEncode(chr) {
    return '&#x' + chr.toString(16) + ';';
  };

  Mailto.prototype.encodeString = function encodeString(originalString) {
    var _props = this.props;
    var obfuscate = _props.obfuscate;
    var decimal = _props.decimal;
    var hexadecimal = _props.hexadecimal;

    var originalLength = originalString.length;

    var encodedString = '';
    var encMode = undefined;

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
  };

  Mailto.prototype.encodeMail = function encodeMail(originalString) {
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
  };

  Mailto.prototype.generateHref = function generateHref(email) {
    return 'mailto:' + this.encodeMail(email);
  };

  Mailto.prototype.render = function render() {
    var email = this.props.email;

    return _react2['default'].createElement(
      'a',
      { href: '' + this.generateHref(email) },
      this.props.children
    );
  };

  _createClass(Mailto, null, [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.string.isRequired,
      email: _react.PropTypes.string.isRequired,
      decimal: _react.PropTypes.bool,
      hexadecimal: _react.PropTypes.bool,
      obfuscate: _react.PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      obfuscate: false,
      decimal: false,
      hexadecimal: false
    },
    enumerable: true
  }]);

  var _Mailto = Mailto;
  Mailto = _wrapComponent('_$Mailto')(Mailto) || Mailto;
  return Mailto;
})(_react.Component);

exports['default'] = Mailto;
module.exports = exports['default'];