'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof BOOTSTRAP_CLIENT_STATE !== "undefined") console.log(BOOTSTRAP_CLIENT_STATE);

(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { routes: _routes.routes, history: _reactRouter.browserHistory }), document.getElementById('app'));