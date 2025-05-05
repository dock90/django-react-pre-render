require('@babel/register')({
	presets: ['@babel/preset-react'],
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App.jsx').default;

const html = ReactDOMServer.renderToString(React.createElement(App));
console.log(html);
