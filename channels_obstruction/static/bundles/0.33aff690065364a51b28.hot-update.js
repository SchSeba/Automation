webpackHotUpdate(0,{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _LobbyBase = __webpack_require__(100);

var _LobbyBase2 = _interopRequireDefault(_LobbyBase);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(83);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// lobby socket url
/**
 * Created by root on 9/11/17.
 */
var lobby_sock = 'ws://' + window.location.host + "/lobby/";
// preset the current_user
var current_user = null;

var server_url = "http://localhost:8000";

// renders out the base component
function render_component() {
  _reactDom2.default.render(_react2.default.createElement(_LobbyBase2.default, { current_user: current_user, socket: lobby_sock, server_url: server_url }), document.getElementById('lobby_component'));
}

render_component();

/***/ })

})