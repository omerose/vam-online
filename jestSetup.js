// Make functions available in all test files without importing
import { shallow, render, mount } from "enzyme";
import renderer from "react-test-renderer";
import sinon from "sinon";
import React from "react";
import ReactDOM from "react-dom";

// Test Suite
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
global.renderer = renderer;

// Framework
global.React = React;
global.ReactDOM = ReactDOM;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
