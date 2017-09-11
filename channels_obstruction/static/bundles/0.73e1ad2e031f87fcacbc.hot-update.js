webpackHotUpdate(0,{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactWebsocket = __webpack_require__(186);

var _reactWebsocket2 = _interopRequireDefault(_reactWebsocket);

var _jquery = __webpack_require__(83);

var _jquery2 = _interopRequireDefault(_jquery);

var _PlayerGames = __webpack_require__(187);

var _PlayerGames2 = _interopRequireDefault(_PlayerGames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LobbyBase = function (_React$Component) {
    _inherits(LobbyBase, _React$Component);

    function LobbyBase(props) {
        _classCallCheck(this, LobbyBase);

        var _this = _possibleConstructorReturn(this, (LobbyBase.__proto__ || Object.getPrototypeOf(LobbyBase)).call(this, props));

        _this.state = {
            player_game_list: [],
            available_game_list: []

            // bind button click
        };_this.sendSocketMessage = _this.sendSocketMessage.bind(_this);
        return _this;
    }

    _createClass(LobbyBase, [{
        key: 'getPlayerGames',
        value: function getPlayerGames() {
            this.serverRequest = _jquery2.default.get(this.server_url + '/player-games/?format=json', function (result) {
                this.setState({
                    player_game_list: result
                });
            }.bind(this));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getPlayerGames();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.serverRequest.abort();
        }
    }, {
        key: 'handleData',
        value: function handleData(data) {
            //receives messages from the connected websocket
            var result = JSON.parse(data);
            // new games, so get an updated list of this player's game
            this.getPlayerGames();
            // we've received an updated list of available games
            this.setState({ available_game_list: result });
        }
    }, {
        key: 'sendSocketMessage',
        value: function sendSocketMessage(message) {
            // sends message to channels back-end
            var socket = this.refs.socket;
            socket.state.ws.send(JSON.stringify(message));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(_reactWebsocket2.default, { ref: 'socket', url: this.props.socket,
                    onMessage: this.handleData.bind(this), reconnect: true }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-lg-4' },
                    _react2.default.createElement(_PlayerGames2.default, { player: this.props.current_user, game_list: this.state.player_game_list,
                        sendSocketMessage: this.sendSocketMessage })
                )
            );
        }
    }]);

    return LobbyBase;
}(_react2.default.Component);

LobbyBase.propTypes = {
    socket: _react2.default.PropTypes.string
};

exports.default = LobbyBase;

/***/ })

})