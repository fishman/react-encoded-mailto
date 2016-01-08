# React Encoded &lt;Mailto&gt;

> A react component to create and display a [mailto](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links) link.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-encoded-mailto`


## TODO

- add honeypot

## Usage

```javascript
var React  = require('react');
var Mailto = require('react-mailto');

var Component = React.createClass({
  render: function () {
    return (
      <Mailto email="info@domain.com" obfuscate>
        info(at)domain.com
      </Mailto>
    );
  }
});
```


## Options


Property  | Type      | Argument     | Default   | Description
----------|-----------|--------------|-----------|------------
email     | `string`  | `<required>` | `null`    | email address of the intended recipient.
obfuscate | `boolean` | `<optional>` | `true`    | obfuscate email content


## Developing

[react-mailto](https://github.com/fishman/react-encoded-mailto) is built using **ES7**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```

## License
Copyright (c) 2015 [Reza Jelveh](http://reza.jelveh.me)
Licensed under the GPL-v2 license.

## Credits
- [Jason Bellamy](https://github.com/jasonbellamy/react-mailto)
- Andreas Neudecker for his encodeString function

