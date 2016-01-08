// __tests__/CheckboxWithLabel-test.js
jest.dontMock('../src/react-spamfree-mailto');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Mailto = require('../Mailto');

describe('Mailto', () => {

  it('returns unencoded string if obfuscated = false'), () => {
  }

  it('returns decimal code if'), () => {
  }

  it('returns hexadecimal code if'), () => {
  }

  it('changes the text after click', () => {

    // const mailto = TestUtils.renderIntoDocument(
    //   <Mailto email="info@testdomain.com" />
    // );

    const mailtoNode = ReactDOM.findDOMNode(mailto);

    // Verify that it's Off by default
    expect(mailtoNode.textContent).toEqual('Off');
  });

});
