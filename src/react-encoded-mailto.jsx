import React, {Component, PropTypes} from 'react';

export default class Mailto extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    decimal: PropTypes.bool,
    hexadecimal: PropTypes.bool,
    obfuscate: PropTypes.bool
  };

  static defaultProps = {
    obfuscate: false,
    decimal: false,
    hexadecimal: false
  };

  // not worth putting the condition in one with a base parameter
  charEncode(chr) {
    return '&#' + chr.toString() + ';';
  }

  hexEncode(chr) {
    return '&#x' + chr.toString(16) + ';';
  }

  encodeString(originalString) {
    const {obfuscate, decimal, hexadecimal} = this.props;
    const originalLength = originalString.length;

    let encodedString = '';
    let encMode;

    if (!obfuscate) {
      return originalString;
    }

    if (decimal) {
      encMode = 1;
    } else if (hexadecimal) {
      encMode = 2;
    }

    for (let pos = 0; pos < originalLength; pos++) {
      const chr = Number(originalString.charCodeAt(pos));
      encMode = Math.ceil( 2 * Math.random() );
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

  encodeMail(originalString) {
    const {obfuscate} = this.props;
    const originalLength = originalString.length;

    let encodedString = '';

    if (!obfuscate) {
      return originalString;
    }

    for (let pos = 0; pos < originalLength; pos++) {
      encodedString += '%' + Number( originalString.charCodeAt(pos) ).toString( 16 );
    }
    return encodedString;
  }

  generateHref(email) {
    return 'mailto:' + this.encodeMail(email);
  }

  render() {
    const {email} = this.props;

    return (
      <a href={`${this.generateHref(email)}`}>{this.props.children}</a>
    );
  }

}
