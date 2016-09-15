var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');
//var Raven = require('raven-js')

// //sentry vars //
//
// var sentryKey = 'c45aad7e8e34416f83be83602444c660'
// var sentryApp = '98056'
// var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp
//
// //
//
// var _APP_INFO = {
//   name: 'Github Battle',
//   branch: '4',
//   version: '1.0'
// }
//
// Raven.config(sentryURL, {
//   release: _APP_INFO.version,
//   tag: {
//     branch: _APP_INFO.branch
//   }
// }).install();

ReactDOM.render(routes, document.getElementById('app'));
