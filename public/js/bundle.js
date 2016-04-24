(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddItemActions = function () {
  function AddItemActions() {
    _classCallCheck(this, AddItemActions);

    this.generateActions('addItemSuccess', 'addItemFail', 'updateName', 'updateUPC', 'updateManu', 'updateSize', 'invalidName', 'invalidUPC', 'invalidManu', 'invalidSize');
  }

  _createClass(AddItemActions, [{
    key: 'addItem',
    value: function addItem(name, upc, manu, size) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/items',
        data: { name: name, upc: upc, manu: manu, size: size
        }
      }).done(function (data) {
        _this.actions.addItemSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addItemFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddItemActions;
}();

exports.default = _alt2.default.createActions(AddItemActions);

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getItemCountSuccess', 'getItemCountFail', 'findItemSuccess', 'findItemFail');
  }

  _createClass(NavbarActions, [{
    key: 'findItem',
    value: function findItem(payload) {
      var _this = this;

      $.ajax({
        url: '/api/items/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findItemSuccess(payload);
      }).fail(function () {
        _this.actions.findItemFail(payload);
      });
    }
  }, {
    key: 'getItemCount',
    value: function getItemCount() {
      var _this2 = this;

      $.ajax({ url: '/api/items/count' }).done(function (data) {
        _this2.actions.getItemCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getItemCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":3,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutUs = function (_React$Component) {
  _inherits(AboutUs, _React$Component);

  function AboutUs() {
    _classCallCheck(this, AboutUs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutUs).apply(this, arguments));
  }

  _createClass(AboutUs, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from AboutUs Component'
      );
    }
  }]);

  return AboutUs;
}(_react2.default.Component);

exports.default = AboutUs;

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddItemStore = require('../stores/AddItemStore');

var _AddItemStore2 = _interopRequireDefault(_AddItemStore);

var _AddItemActions = require('../actions/AddItemActions');

var _AddItemActions2 = _interopRequireDefault(_AddItemActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewItem = function (_React$Component) {
  _inherits(NewItem, _React$Component);

  function NewItem(props) {
    _classCallCheck(this, NewItem);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewItem).call(this, props));

    _this.state = _AddItemStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(NewItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddItemStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddItemStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var upc = this.state.upc;
      var manu = this.state.manu;
      var size = this.state.size;

      if (!name) {
        _AddItemActions2.default.invalidName();
        this.refs.nameTextField.getDOMNode().focus();
      }

      if (!upc) {
        _AddItemActions2.default.invalidUPC();
      }

      if (!manu) {
        _AddItemActions2.default.invalidManu();
      }

      if (!size) {
        _AddItemActions2.default.invalidSize();
      }

      if (name && upc && manu && size) {
        _AddItemActions2.default.addItem(name, upc, manu, size);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                _react2.default.createElement(
                  'h4',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    'Add UPC Item'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.nameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Item Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                      onChange: _AddItemActions2.default.updateName, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.upcValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'UPC Code'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'upcTextField', value: this.state.upc,
                      onChange: _AddItemActions2.default.updateUPC, autoFocus: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.manuValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Manufacturer'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'manuTextField', value: this.state.manu,
                      onChange: _AddItemActions2.default.updateManu, autoFocus: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.sizeValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Case Size'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'sizeTextField', value: this.state.size,
                      onChange: _AddItemActions2.default.updateSize, autoFocus: true })
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { className: 'panel display' },
              'Instructions:'
            )
          )
        )
      );
    }
  }]);

  return NewItem;
}(_react2.default.Component);

exports.default = NewItem;

},{"../actions/AddItemActions":1,"../stores/AddItemStore":55,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Scanner = require('./Scanner');

var _Scanner2 = _interopRequireDefault(_Scanner);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_Scanner2.default, null),
        _react2.default.createElement(_Navbar2.default, { hideHost: '', hideMod: '1', hideMgmt: '1' }),
        _react2.default.createElement(
          'div',
          { className: 'menu-offset' },
          this.props.children
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":22,"./Navbar":40,"./Scanner":47,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BizPagePanel = require('./BizPagePanel');

var _BizPagePanel2 = _interopRequireDefault(_BizPagePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizPage = function (_React$Component) {
	_inherits(BizPage, _React$Component);

	function BizPage() {
		_classCallCheck(this, BizPage);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BizPage).apply(this, arguments));
	}

	_createClass(BizPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-3' },
					_react2.default.createElement(
						'div',
						{ className: 'panel text-center display' },
						_react2.default.createElement(
							'h4',
							null,
							'Company ',
							this.props.params.id
						),
						_react2.default.createElement('img', { src: 'http://placehold.it/160x160/fdff00/000000?text=No+Picture+Provided' }),
						_react2.default.createElement(
							'h4',
							null,
							'BizTypes'
						),
						_react2.default.createElement(
							'h4',
							null,
							'Location(s)'
						),
						_react2.default.createElement(
							'h4',
							null,
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
							'Rating'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-9' },
					_react2.default.createElement(_BizPagePanel2.default, { id: '1', cost: '4.50', host: 'Bryan', dist: '0.5 km' })
				)
			);
		}
	}]);

	return BizPage;
}(_react2.default.Component);

exports.default = BizPage;

},{"./BizPagePanel":8,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizPagePanel = function (_React$Component) {
		_inherits(BizPagePanel, _React$Component);

		function BizPagePanel() {
				_classCallCheck(this, BizPagePanel);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(BizPagePanel).apply(this, arguments));
		}

		_createClass(BizPagePanel, [{
				key: 'render',
				value: function render() {
						var itemlink = "/itempg/" + this.props.id;
						var bizlink = "/bizpg/" + this.props.id;
						var hostlink = "/hostpg/" + this.props.id;

						return _react2.default.createElement(
								'div',
								{ className: 'well display' },
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'div',
												{ className: 'col-sm-3 text-center' },
												_react2.default.createElement(
														'h3',
														null,
														this.props.cost
												)
										),
										_react2.default.createElement(
												'div',
												{ className: 'col-sm-9' },
												_react2.default.createElement(
														'div',
														{ className: 'pull-right' },
														_react2.default.createElement('br', null),
														_react2.default.createElement('br', null),
														_react2.default.createElement(
																'h3',
																null,
																'Status'
														)
												),
												_react2.default.createElement(
														'div',
														{ className: 'pull-left' },
														_react2.default.createElement(
																_reactRouter.Link,
																{ to: itemlink },
																_react2.default.createElement(
																		'h3',
																		null,
																		'Item'
																)
														),
														_react2.default.createElement(
																_reactRouter.Link,
																{ to: bizlink },
																_react2.default.createElement(
																		'h3',
																		null,
																		'Vendor'
																)
														),
														_react2.default.createElement(
																'h5',
																null,
																_react2.default.createElement(
																		_reactRouter.Link,
																		{ to: hostlink },
																		this.props.host
																),
																' - Shares - ',
																_react2.default.createElement('span', { className: 'glyphicon glyphicon-map-marker' }),
																this.props.dist
														)
												)
										)
								)
						);
				}
		}]);

		return BizPagePanel;
}(_react2.default.Component);

exports.default = BizPagePanel;

},{"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizPanel = function (_React$Component) {
  _inherits(BizPanel, _React$Component);

  function BizPanel(props) {
    _classCallCheck(this, BizPanel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BizPanel).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(BizPanel, [{
    key: 'render',
    value: function render() {
      var bizlink = "/bizpg/" + this.props.name;
      var randomdeals = Math.floor(Math.random() * 50 + 1);
      var randomrate = Math.floor((Math.random() * 5 + 5) * 100) / 100;
      var biztype = Math.round(Math.random()) ? "Vendor" : "Manufacturer";
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-2' },
        _react2.default.createElement(
          'div',
          { className: 'well text-center' },
          _react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: bizlink },
            'BizName',
            this.props.name
          ),
          _react2.default.createElement('br', null),
          biztype,
          _react2.default.createElement('br', null),
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
          randomdeals,
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
          randomrate
        )
      );
    }
  }]);

  return BizPanel;
}(_react2.default.Component);

exports.default = BizPanel;

},{"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BizPanel = require('./BizPanel');

var _BizPanel2 = _interopRequireDefault(_BizPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizRows = function (_React$Component) {
  _inherits(BizRows, _React$Component);

  function BizRows() {
    _classCallCheck(this, BizRows);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BizRows).apply(this, arguments));
  }

  _createClass(BizRows, [{
    key: 'render',
    value: function render() {
      var totalBiz = this.props.totalBiz;
      var bizPerRow = this.props.bizPerRow;
      var numRows = this.props.numRows;
      var bizlist = this.props.bizlist;
      var bizs = [];

      for (var i = 1; i <= totalBiz; i++) {
        bizs.push({ name: i, id: i });
      }
      var bizlist = bizs.map(function (biz) {
        return _react2.default.createElement(_BizPanel2.default, { key: biz.id, name: biz.name });
      });
      bizs = [];
      return _react2.default.createElement(
        'div',
        { className: 'row display' },
        bizlist
      );
    }
  }]);

  return BizRows;
}(_react2.default.Component);

exports.default = BizRows;

},{"./BizPanel":9,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BizPanel = require('./BizPanel');

var _BizPanel2 = _interopRequireDefault(_BizPanel);

var _BizRows = require('./BizRows');

var _BizRows2 = _interopRequireDefault(_BizRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompanyLib = function (_React$Component) {
  _inherits(CompanyLib, _React$Component);

  function CompanyLib() {
    _classCallCheck(this, CompanyLib);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CompanyLib).apply(this, arguments));
  }

  _createClass(CompanyLib, [{
    key: 'render',
    value: function render() {
      var totalBiz = 24,
          bizPerRow = 6,
          //Change this if you change the View.
      numRows = totalBiz / bizPerRow,
          bizs = [],
          bizList = [];

      //genreate list of items
      for (var i = 1; i <= totalBiz; i++) {
        bizs.push({ name: i, id: i });
      }
      var bizlist = bizs.map(function (biz) {
        return _react2.default.createElement(_BizPanel2.default, { key: biz.id, name: biz.name });
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement(
          'h2',
          null,
          ' ',
          _react2.default.createElement(
            'b',
            null,
            'All Companies:'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row display' },
          bizlist
        ),
        _react2.default.createElement(_BizRows2.default, { totalBiz: totalBiz, bizPerRow: bizPerRow, numRows: numRows, bizlist: bizlist })
      );
    }
  }]);

  return CompanyLib;
}(_react2.default.Component);

exports.default = CompanyLib;

},{"./BizPanel":9,"./BizRows":10,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactPage = function (_React$Component) {
  _inherits(ContactPage, _React$Component);

  function ContactPage() {
    _classCallCheck(this, ContactPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactPage).apply(this, arguments));
  }

  _createClass(ContactPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from ContactPage Component'
      );
    }
  }]);

  return ContactPage;
}(_react2.default.Component);

exports.default = ContactPage;

},{"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CredMark = function (_React$Component) {
  _inherits(CredMark, _React$Component);

  function CredMark() {
    _classCallCheck(this, CredMark);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CredMark).apply(this, arguments));
  }

  _createClass(CredMark, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from CredMark Component'
      );
    }
  }]);

  return CredMark;
}(_react2.default.Component);

exports.default = CredMark;

},{"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DealsPanel = require('./DealsPanel');

var _DealsPanel2 = _interopRequireDefault(_DealsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DealCenter = function (_React$Component) {
  _inherits(DealCenter, _React$Component);

  function DealCenter() {
    _classCallCheck(this, DealCenter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DealCenter).apply(this, arguments));
  }

  _createClass(DealCenter, [{
    key: 'render',
    value: function render() {
      var deals = [{ _id: "1d", item: "Item 1", cost: '$30.99', host: "Host1", dist: '2km' }, { _id: "2d", item: "Item 2", cost: '$1.24', host: "Host2", dist: '1km' }, { _id: "3d", item: "Item 3", cost: '$5.01', host: "Host3", dist: '.7km' }, { _id: "4d", item: "Item 4", cost: '$6.67', host: "Host4", dist: '3km' }, { _id: "5d", item: "Item 5", cost: '$3.15', host: "Host5", dist: '8km' }, { _id: "6d", item: "Item 6", cost: '$54.69', host: "Host6", dist: '.7km' }, { _id: "7d", item: "Item 7", cost: '$4.44', host: "Host7", dist: '.5km' }, { _id: "8d", item: "Item 8", cost: '$10.99', host: "Host8", dist: '2km' }, { _id: "9d", item: "Item 9", cost: '$15.35', host: "Host9", dist: '15km' }, { _id: "10d", item: "Item 10", cost: '$0.99', host: "Host10", dist: '4km' }];
      var deallist = deals.map(function (deal) {
        return _react2.default.createElement(_DealsPanel2.default, { key: deal._id, cost: deal.cost, item: deal.item, host: deal.host, dist: deal.dist });
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'b',
              null,
              ' Deal Center:'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          deallist
        )
      );
    }
  }]);

  return DealCenter;
}(_react2.default.Component);

exports.default = DealCenter;

},{"./DealsPanel":16,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DealMgr = function (_React$Component) {
  _inherits(DealMgr, _React$Component);

  function DealMgr() {
    _classCallCheck(this, DealMgr);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DealMgr).apply(this, arguments));
  }

  _createClass(DealMgr, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/dealmgr' },
            _react2.default.createElement(
              'div',
              { className: 'panel text-center display' },
              _react2.default.createElement(
                'h4',
                null,
                'Active Deals'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/pastdls' },
            _react2.default.createElement(
              'div',
              { className: 'panel text-center display' },
              _react2.default.createElement(
                'h4',
                null,
                'Past Deals'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-9' },
          this.props.children
        )
      );
    }
  }]);

  return DealMgr;
}(_react2.default.Component);

exports.default = DealMgr;

},{"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DealsPanel = function (_React$Component) {
		_inherits(DealsPanel, _React$Component);

		function DealsPanel() {
				_classCallCheck(this, DealsPanel);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(DealsPanel).apply(this, arguments));
		}

		_createClass(DealsPanel, [{
				key: 'render',
				value: function render() {
						var randomrate = Math.floor((Math.random() * 5 + 5) * 100) / 100;
						var itemlink = "/itempg/" + this.props.id;

						return _react2.default.createElement(
								'div',
								{ className: 'col-sm-6' },
								_react2.default.createElement(
										'div',
										{ className: 'well display' },
										_react2.default.createElement(
												'div',
												{ className: 'row' },
												_react2.default.createElement(
														'div',
														{ className: 'col-sm-3 text-center' },
														_react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
														_react2.default.createElement('br', null),
														_react2.default.createElement('br', null),
														_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
														randomrate
												),
												_react2.default.createElement(
														'div',
														{ className: 'col-sm-9' },
														_react2.default.createElement(
																'div',
																{ className: 'pull-right' },
																_react2.default.createElement(
																		'h3',
																		null,
																		this.props.cost
																),
																_react2.default.createElement('br', null),
																_react2.default.createElement('br', null),
																_react2.default.createElement(
																		'h3',
																		null,
																		'Status'
																)
														),
														_react2.default.createElement(
																'div',
																{ className: 'pull-left' },
																_react2.default.createElement(
																		_reactRouter.Link,
																		{ to: itemlink },
																		_react2.default.createElement(
																				'h3',
																				null,
																				_react2.default.createElement(
																						'b',
																						null,
																						this.props.item
																				)
																		)
																),
																_react2.default.createElement(
																		'h4',
																		null,
																		'Manufacturer'
																),
																_react2.default.createElement(
																		'h4',
																		null,
																		'Vendor'
																),
																_react2.default.createElement(
																		'h5',
																		null,
																		this.props.host,
																		' - Shares - ',
																		_react2.default.createElement('span', { className: 'glyphicon glyphicon-map-marker' }),
																		this.props.dist
																)
														)
												)
										)
								)
						);
				}
		}]);

		return DealsPanel;
}(_react2.default.Component);

exports.default = DealsPanel;

},{"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DlMgrPanel = require('./DlMgrPanel');

var _DlMgrPanel2 = _interopRequireDefault(_DlMgrPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DlMgrActive = function (_React$Component) {
  _inherits(DlMgrActive, _React$Component);

  function DlMgrActive() {
    _classCallCheck(this, DlMgrActive);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DlMgrActive).apply(this, arguments));
  }

  _createClass(DlMgrActive, [{
    key: 'render',
    value: function render() {
      var totalDeals = 4;
      var deallist = [];
      var deals = [];

      for (var i = 1; i <= totalDeals; i++) {
        deals.push({ name: i, id: i });
      }
      var deallist = deals.map(function (deal) {
        return _react2.default.createElement(_DlMgrPanel2.default, { key: deal.id, name: deal.name });
      });
      deals = [];
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement('br', null),
        deallist
      );
    }
  }]);

  return DlMgrActive;
}(_react2.default.Component);

exports.default = DlMgrActive;

},{"./DlMgrPanel":18,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DlMgrPanel = function (_React$Component) {
		_inherits(DlMgrPanel, _React$Component);

		function DlMgrPanel() {
				_classCallCheck(this, DlMgrPanel);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(DlMgrPanel).apply(this, arguments));
		}

		_createClass(DlMgrPanel, [{
				key: 'render',
				value: function render() {
						var itemlink = "/itempg/" + this.props.name;
						var bizlink = "/bizpg/" + this.props.name;

						return _react2.default.createElement(
								'div',
								{ className: 'well display' },
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'div',
												{ className: 'col-sm-3 text-center' },
												_react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
												_react2.default.createElement('br', null),
												_react2.default.createElement('br', null),
												_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
												Math.floor((Math.random() * 4 + 6) * 100) / 100
										),
										_react2.default.createElement(
												'div',
												{ className: 'col-sm-9' },
												_react2.default.createElement(
														'div',
														{ className: 'pull-right' },
														_react2.default.createElement(
																'h3',
																null,
																'$4.99'
														),
														_react2.default.createElement('br', null),
														_react2.default.createElement('br', null),
														_react2.default.createElement(
																'button',
																null,
																_react2.default.createElement('span', { className: 'glyphicon glyphicon-cog' })
														),
														' ',
														_react2.default.createElement(
																'button',
																null,
																_react2.default.createElement('span', { className: 'glyphicon glyphicon-trash' })
														)
												),
												_react2.default.createElement(
														'div',
														{ className: 'pull-left' },
														_react2.default.createElement(
																_reactRouter.Link,
																{ to: itemlink },
																_react2.default.createElement(
																		'h3',
																		null,
																		_react2.default.createElement(
																				'b',
																				null,
																				'Item Name',
																				this.props.name
																		)
																)
														),
														_react2.default.createElement(
																'h4',
																null,
																'Manufacturer'
														),
														_react2.default.createElement(
																'h4',
																null,
																'Vendor'
														),
														_react2.default.createElement(
																'h5',
																null,
																'Host - Shares - ',
																_react2.default.createElement('span', { className: 'glyphicon glyphicon-map-marker' }),
																'.4 km'
														)
												)
										)
								)
						);
				}
		}]);

		return DlMgrPanel;
}(_react2.default.Component);

exports.default = DlMgrPanel;

},{"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAQ = function (_React$Component) {
  _inherits(FAQ, _React$Component);

  function FAQ() {
    _classCallCheck(this, FAQ);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FAQ).apply(this, arguments));
  }

  _createClass(FAQ, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from FAQ Component'
      );
    }
  }]);

  return FAQ;
}(_react2.default.Component);

exports.default = FAQ;

},{"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemPanel = require('./ItemPanel');

var _ItemPanel2 = _interopRequireDefault(_ItemPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FavRows = function (_React$Component) {
  _inherits(FavRows, _React$Component);

  function FavRows() {
    _classCallCheck(this, FavRows);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FavRows).apply(this, arguments));
  }

  _createClass(FavRows, [{
    key: 'render',
    value: function render() {
      var numRows = this.props.numRows;
      var itemlist = this.props.itemlist;
      var totalItems = this.props.totalItems;
      var itemsPerRow = this.props.itemsPerRow;
      var items = [];

      for (var i = itemsPerRow + 1; i < itemsPerRow * 2 + 1; i++) {
        items.push({ name: i, id: i });
      }
      var itemlist = items.map(function (item) {
        return _react2.default.createElement(_ItemPanel2.default, { key: item.id, name: item.name });
      });
      return _react2.default.createElement(
        'div',
        { className: 'row display' },
        itemlist
      );
    }
  }]);

  return FavRows;
}(_react2.default.Component);

exports.default = FavRows;

},{"./ItemPanel":29,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemPanel = require('./ItemPanel');

var _ItemPanel2 = _interopRequireDefault(_ItemPanel);

var _FavRows = require('./FavRows');

var _FavRows2 = _interopRequireDefault(_FavRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Favourites = function (_React$Component) {
  _inherits(Favourites, _React$Component);

  function Favourites() {
    _classCallCheck(this, Favourites);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Favourites).apply(this, arguments));
  }

  _createClass(Favourites, [{
    key: 'render',
    value: function render() {
      var totalFavs = 12,
          favsPerRow = 6,
          //Change this if you change the View.
      numRows = totalFavs / favsPerRow,
          favs = [],
          favList = [];

      //genreate list of items
      for (var i = 1; i < favsPerRow + 1; i++) {
        favs.push({ name: i, id: i });
      }
      var favlist = favs.map(function (item) {
        return _react2.default.createElement(_ItemPanel2.default, { key: item.id, name: item.name });
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement(
          'h2',
          null,
          ' ',
          _react2.default.createElement(
            'b',
            null,
            'Your Favourite Items:'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row display' },
          favlist
        ),
        _react2.default.createElement(_FavRows2.default, { totalItems: totalFavs, itemsPerRow: favsPerRow, numRows: numRows, itemlist: favlist })
      );
    }
  }]);

  return Favourites;
}(_react2.default.Component);

exports.default = Favourites;

},{"./FavRows":20,"./ItemPanel":29,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ className: 'navbar navbar-inverse navbar-static-bottom' },
				_react2.default.createElement(
					'div',
					{ className: 'navbar-header' },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
						_react2.default.createElement(
							'span',
							{ className: 'sr-only' },
							'Toggle navigation'
						),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' })
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'navbar', className: 'navbar-collapse collapse' },
					_react2.default.createElement(
						'ul',
						{ className: 'nav navbar-nav' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/contact' },
								'Contact Us'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/faq' },
								'FAQ'
							)
						)
					),
					_react2.default.createElement(
						'ul',
						{ className: 'nav navbar-nav navbar-right' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/about' },
								'SHOPIDARITY | Connect, Share & Save - ©2015-',
								new Date().getFullYear()
							)
						)
					)
				)
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"react":"react","react-router":"react-router"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Top = require('./Top10');

var _Top2 = _interopRequireDefault(_Top);

var _LastDeals = require('./LastDeals');

var _LastDeals2 = _interopRequireDefault(_LastDeals);

var _HomeMap = require('./HomeMap');

var _HomeMap2 = _interopRequireDefault(_HomeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = { map: true };
    _this.handleMap = _this.handleMap.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'handleMap',
    value: function handleMap() {
      var newMap = !this.state.map;
      this.setState({ map: newMap });
    }
  }, {
    key: 'render',
    value: function render() {
      var map = this.state.map ? _react2.default.createElement(_Top2.default, null) : _react2.default.createElement(_HomeMap2.default, { className: 'map' });
      var btntxt = this.state.map ? "Switch to Map" : "Switch to Top10";

      return _react2.default.createElement(
        'div',
        null,
        map,
        _react2.default.createElement(
          'div',
          { className: 'display well text-center' },
          _react2.default.createElement(
            'button',
            { className: 'form-control btn btn-default', onClick: this.handleMap },
            btntxt
          )
        ),
        _react2.default.createElement(_LastDeals2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"./HomeMap":24,"./LastDeals":30,"./Top10":48,"react":"react"}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = require("react-google-maps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeMap = function (_React$Component) {
	_inherits(HomeMap, _React$Component);

	function HomeMap(props) {
		_classCallCheck(this, HomeMap);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HomeMap).call(this, props));

		_this.state = { markers: [{ key: 1, lat: 49.247525, lng: -123.0761721 }, { key: 2, lat: 49.247535, lng: -123.0761721 }] };
		return _this;
	}

	_createClass(HomeMap, [{
		key: "handleMarkerRightclick",
		value: function handleMarkerRightclick() {}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"section",
				{ style: { height: "320px", width: "100%" } },
				_react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {
					containerElement: _react2.default.createElement("div", _extends({}, this.props, {
						style: {
							height: "100%"
						}
					})),
					googleMapElement: _react2.default.createElement(
						_reactGoogleMaps.GoogleMap,
						{ className: "map",
							ref: function ref(map) {
								return console.log(map);
							},
							defaultZoom: 12,
							defaultCenter: { lat: 49.26717, lng: -123.07999 },
							onClick: this.handleMapClick },
						this.state.markers.map(function (marker, index) {
							return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({}, marker, {
								onRightclick: _this2.handleMarkerRightclick.bind(_this2, index) }));
						})
					)
				})
			);
		}
	}]);

	return HomeMap;
}(_react2.default.Component);

exports.default = HomeMap;

},{"react":"react","react-google-maps":112}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HostPage = function (_React$Component) {
  _inherits(HostPage, _React$Component);

  function HostPage() {
    _classCallCheck(this, HostPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HostPage).apply(this, arguments));
  }

  _createClass(HostPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from HostPage Component ',
        this.props.params.id
      );
    }
  }]);

  return HostPage;
}(_react2.default.Component);

exports.default = HostPage;

},{"react":"react"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MsgPanel = require('./MsgPanel');

var _MsgPanel2 = _interopRequireDefault(_MsgPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inbox = function (_React$Component) {
  _inherits(Inbox, _React$Component);

  function Inbox() {
    _classCallCheck(this, Inbox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Inbox).apply(this, arguments));
  }

  _createClass(Inbox, [{
    key: 'render',
    value: function render() {
      var totalMsg = 4;
      var msglist = [];
      var msgs = [];

      for (var i = 1; i <= totalMsg; i++) {
        msgs.push({ name: i, id: i });
      }
      var msglist = msgs.map(function (msg) {
        return _react2.default.createElement(_MsgPanel2.default, { key: msg.id, name: msg.name });
      });
      msgs = [];
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement('br', null),
        msglist
      );
    }
  }]);

  return Inbox;
}(_react2.default.Component);

exports.default = Inbox;

},{"./MsgPanel":39,"react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemPagePanel = require('./ItemPagePanel');

var _ItemPagePanel2 = _interopRequireDefault(_ItemPagePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemPage = function (_React$Component) {
  _inherits(ItemPage, _React$Component);

  function ItemPage() {
    _classCallCheck(this, ItemPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemPage).apply(this, arguments));
  }

  _createClass(ItemPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          _react2.default.createElement(
            'div',
            { className: 'panel text-center display' },
            _react2.default.createElement(
              'h4',
              null,
              'Item ',
              this.props.params.id
            ),
            _react2.default.createElement('img', { src: 'http://placehold.it/160x160/fdff00/000000?text=No+Picture+Provided' }),
            _react2.default.createElement(
              'h4',
              null,
              'Manufacturer'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'Case Size'
            ),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
              'Rating'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-9' },
          _react2.default.createElement(_ItemPagePanel2.default, { id: '1', cost: '4.50', host: 'Bryan', dist: '0.5 km' })
        )
      );
    }
  }]);

  return ItemPage;
}(_react2.default.Component);

exports.default = ItemPage;

},{"./ItemPagePanel":28,"react":"react"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemPagePanel = function (_React$Component) {
		_inherits(ItemPagePanel, _React$Component);

		function ItemPagePanel() {
				_classCallCheck(this, ItemPagePanel);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemPagePanel).apply(this, arguments));
		}

		_createClass(ItemPagePanel, [{
				key: 'render',
				value: function render() {
						var bizlink = "/bizpg/" + this.props.id;
						var hostlink = "/hostpg/" + this.props.id;

						return _react2.default.createElement(
								'div',
								{ className: 'well display' },
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'div',
												{ className: 'col-sm-3 text-center' },
												_react2.default.createElement(
														'h3',
														null,
														this.props.cost
												)
										),
										_react2.default.createElement(
												'div',
												{ className: 'col-sm-9' },
												_react2.default.createElement(
														'div',
														{ className: 'pull-right' },
														_react2.default.createElement('br', null),
														_react2.default.createElement('br', null),
														_react2.default.createElement(
																'h3',
																null,
																'Status'
														)
												),
												_react2.default.createElement(
														'div',
														{ className: 'pull-left' },
														_react2.default.createElement(
																_reactRouter.Link,
																{ to: bizlink },
																_react2.default.createElement(
																		'h3',
																		null,
																		'Vendor'
																)
														),
														_react2.default.createElement(
																'h5',
																null,
																_react2.default.createElement(
																		_reactRouter.Link,
																		{ to: hostlink },
																		this.props.host
																),
																' - Shares - ',
																_react2.default.createElement('span', { className: 'glyphicon glyphicon-map-marker' }),
																this.props.dist
														)
												)
										)
								)
						);
				}
		}]);

		return ItemPagePanel;
}(_react2.default.Component);

exports.default = ItemPagePanel;

},{"react":"react","react-router":"react-router"}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemPanel = function (_React$Component) {
  _inherits(ItemPanel, _React$Component);

  function ItemPanel(props) {
    _classCallCheck(this, ItemPanel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemPanel).call(this, props));

    _this.state = { fav: Math.round(Math.random() / 3) ? true : false };
    _this.handleFav = _this.handleFav.bind(_this);
    return _this;
  }

  _createClass(ItemPanel, [{
    key: 'handleFav',
    value: function handleFav() {
      var newFav = !this.state.fav;
      this.setState({ fav: newFav });
    }
  }, {
    key: 'render',
    value: function render() {
      var heartClass = this.state.fav ? "glyphicon glyphicon-heart pull-right" : "glyphicon glyphicon-heart-empty pull-right";
      var itemlink = "/itempg/" + this.props.name;
      var bizlink = "/bizpg/" + this.props.name;
      var randomdeals = Math.floor(Math.random() * 50 + 1);
      var randomrate = Math.floor((Math.random() * 5 + 5) * 100) / 100;

      return _react2.default.createElement(
        'div',
        { className: 'col-xs-2' },
        _react2.default.createElement(
          'div',
          { className: 'well text-center' },
          _react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: itemlink },
            'ItemName',
            this.props.name
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: bizlink },
            'Manufacturer',
            this.props.name
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
          randomdeals,
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6' },
              _react2.default.createElement(
                'span',
                { className: 'pull-right' },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
                randomrate
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6' },
              _react2.default.createElement('i', { onClick: this.handleFav, className: heartClass })
            )
          )
        )
      );
    }
  }]);

  return ItemPanel;
}(_react2.default.Component);

exports.default = ItemPanel;

},{"react":"react","react-router":"react-router"}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DealsPanel = require('./DealsPanel');

var _DealsPanel2 = _interopRequireDefault(_DealsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LastDeals = function (_React$Component) {
  _inherits(LastDeals, _React$Component);

  function LastDeals() {
    _classCallCheck(this, LastDeals);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LastDeals).apply(this, arguments));
  }

  _createClass(LastDeals, [{
    key: 'render',
    value: function render() {
      var deals = [{ _id: "1d", item: "Item 1", cost: '$30.99', host: "Host1", dist: '2km' }, { _id: "2d", item: "Item 2", cost: '$1.24', host: "Host2", dist: '1km' }, { _id: "3d", item: "Item 3", cost: '$5.01', host: "Host3", dist: '.7km' }, { _id: "4d", item: "Item 4", cost: '$6.67', host: "Host4", dist: '3km' }, { _id: "5d", item: "Item 5", cost: '$3.15', host: "Host5", dist: '8km' }, { _id: "6d", item: "Item 6", cost: '$54.69', host: "Host6", dist: '.7km' }, { _id: "7d", item: "Item 7", cost: '$4.44', host: "Host7", dist: '.5km' }, { _id: "8d", item: "Item 8", cost: '$10.99', host: "Host8", dist: '2km' }, { _id: "9d", item: "Item 9", cost: '$15.35', host: "Host9", dist: '15km' }, { _id: "10d", item: "Item 10", cost: '$0.99', host: "Host10", dist: '4km' }];
      var deallist = deals.map(function (deal) {
        return _react2.default.createElement(_DealsPanel2.default, { key: deal._id, id: deal._id, cost: deal.cost, item: deal.item, host: deal.host, dist: deal.dist });
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement(
          'div',
          { className: 'text-center' },
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              'b',
              null,
              _react2.default.createElement(
                'u',
                null,
                'Latest Deals:'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          deallist
        )
      );
    }
  }]);

  return LastDeals;
}(_react2.default.Component);

exports.default = LastDeals;

},{"./DealsPanel":16,"react":"react"}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemPanel = require('./ItemPanel');

var _ItemPanel2 = _interopRequireDefault(_ItemPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LibRows = function (_React$Component) {
  _inherits(LibRows, _React$Component);

  function LibRows() {
    _classCallCheck(this, LibRows);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LibRows).apply(this, arguments));
  }

  _createClass(LibRows, [{
    key: 'render',
    value: function render() {
      var totalItems = this.props.totalItems;
      var itemsPerRow = this.props.itemsPerRow;
      var numRows = this.props.numRows;
      var itemlist = [];
      var items = [];

      for (var i = 1; i <= totalItems; i++) {
        items.push({ name: i, id: i });
      }
      var itemlist = items.map(function (item) {
        return _react2.default.createElement(_ItemPanel2.default, { key: item.id, name: item.name });
      });
      items = [];
      return _react2.default.createElement(
        'div',
        { className: 'row display' },
        itemlist
      );
    }
  }]);

  return LibRows;
}(_react2.default.Component);

exports.default = LibRows;

},{"./ItemPanel":29,"react":"react"}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ItemPanel = require('./ItemPanel');

var _ItemPanel2 = _interopRequireDefault(_ItemPanel);

var _LibRows = require('./LibRows');

var _LibRows2 = _interopRequireDefault(_LibRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_React$Component) {
    _inherits(Library, _React$Component);

    function Library() {
        _classCallCheck(this, Library);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Library).apply(this, arguments));
    }

    _createClass(Library, [{
        key: 'render',
        value: function render() {
            var totalItems = 24,
                itemsPerRow = 6,
                //Change this if you change the View.
            numRows = totalItems / itemsPerRow,
                items = [],
                itemList = [];

            return _react2.default.createElement(
                'div',
                { className: 'panel display' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            ' ',
                            _react2.default.createElement(
                                'b',
                                null,
                                'All UPC Products:'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'h4',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/items' },
                                'UPC Codes'
                            ),
                            ' | ',
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/plu' },
                                'PLU Codes'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_LibRows2.default, { totalItems: totalItems, itemsPerRow: itemsPerRow, numRows: numRows })
            );
        }
    }]);

    return Library;
}(_react2.default.Component);

exports.default = Library;

},{"./ItemPanel":29,"./LibRows":31,"react":"react","react-router":"react-router"}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logo = require('./Logo.jsx');

var _Logo2 = _interopRequireDefault(_Logo);

var _Welcome = require('./Welcome.js');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _LoginForm = require('./LoginForm.js');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _Footer = require('./Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Logo2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'login row' },
            _react2.default.createElement(_Welcome2.default, null),
            _react2.default.createElement(_LoginForm2.default, null)
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;

},{"./Footer.js":22,"./LoginForm.js":34,"./Logo.jsx":35,"./Welcome.js":52,"react":"react"}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).apply(this, arguments));
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			var message = message ? message : "";
			return _react2.default.createElement(
				'div',
				{ className: 'login-right col-xs-6' },
				_react2.default.createElement(
					'h4',
					null,
					'Enter your information:'
				),
				message,
				_react2.default.createElement(
					'form',
					{ action: '/login', method: 'post' },
					_react2.default.createElement(
						'div',
						{ className: 'row text-center' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-4' },
							'Login:',
							_react2.default.createElement('input', { type: 'text', placeholder: 'email', name: 'email' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-4' },
							'Password:',
							_react2.default.createElement('input', { type: 'password', placeholder: 'password', name: 'password' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-4' },
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								'button',
								{ type: 'submit' },
								_react2.default.createElement(
									'span',
									null,
									'Login'
								)
							)
						)
					)
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					{ className: 'panel panel-default text-center signup' },
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'h4',
						null,
						'Is this you first time here?'
					),
					_react2.default.createElement(
						'form',
						{ action: '/signup', method: 'post' },
						_react2.default.createElement(
							'div',
							{ className: 'display' },
							_react2.default.createElement('input', { name: 'email', type: 'text', className: 'form-control', placeholder: 'Email' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement('input', { name: 'password', type: 'password', className: 'form-control', placeholder: 'Password' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement('input', { type: 'password', className: 'form-control', placeholder: 'Retype Password' }),
							_react2.default.createElement('br', null),
							'Date of Birth',
							_react2.default.createElement('br', null),
							_react2.default.createElement('input', { type: 'date', className: 'form-control', placeholder: 'Date of Birth' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								'button',
								{ type: 'submit' },
								_react2.default.createElement(
									'span',
									null,
									'Signup'
								)
							),
							_react2.default.createElement('br', null)
						)
					),
					_react2.default.createElement('br', null),
					this.message
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login;

},{"react":"react","react-router":"react-router"}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_React$Component) {
  _inherits(Logo, _React$Component);

  function Logo(props) {
    _classCallCheck(this, Logo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

    _this.state = { clicked: true };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Logo, [{
    key: 'onClick',
    value: function onClick() {
      var newColor = !this.state.clicked;
      this.setState({ clicked: newColor });
    }
  }, {
    key: 'render',
    value: function render() {
      var image = this.state.clicked ? './img/banner2.png' : './img/banner.png';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar-fixed-top' },
          _react2.default.createElement('img', { className: 'img-responsive', src: image, onClick: this.onClick, height: '70px', width: 'auto' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'app' },
          this.props.children
        )
      );
    }
  }]);

  return Logo;
}(_react2.default.Component);

exports.default = Logo;

},{"react":"react","react-dom":"react-dom"}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_React$Component) {
    _inherits(Logout, _React$Component);

    function Logout() {
        _classCallCheck(this, Logout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Logout).apply(this, arguments));
    }

    _createClass(Logout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //sessionStorage.clear();
            setInterval(function () {
                return redirect({
                    pathname: '/'
                });
            }, 2000);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                null,
                'You have been logged out, you will be redirected shortly to login...'
            );
        }
    }]);

    return Logout;
}(_react2.default.Component);

Logout.contextTypes = {
    router: _react2.default.PropTypes.func
};

exports.default = Logout;

},{"react":"react","react-router":"react-router"}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matches = function (_React$Component) {
  _inherits(Matches, _React$Component);

  function Matches() {
    _classCallCheck(this, Matches);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Matches).apply(this, arguments));
  }

  _createClass(Matches, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from Matches Component'
      );
    }
  }]);

  return Matches;
}(_react2.default.Component);

exports.default = Matches;

},{"react":"react"}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MsgPage = function (_React$Component) {
  _inherits(MsgPage, _React$Component);

  function MsgPage() {
    _classCallCheck(this, MsgPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MsgPage).apply(this, arguments));
  }

  _createClass(MsgPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/msg' },
            _react2.default.createElement(
              'div',
              { className: 'panel text-center display' },
              _react2.default.createElement(
                'h4',
                null,
                'Inbox'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/newmsg' },
            _react2.default.createElement(
              'div',
              { className: 'panel text-center display' },
              _react2.default.createElement(
                'h4',
                null,
                'New Message'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-9' },
          this.props.children
        )
      );
    }
  }]);

  return MsgPage;
}(_react2.default.Component);

exports.default = MsgPage;

},{"react":"react","react-router":"react-router"}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MsgPanel = function (_React$Component) {
  _inherits(MsgPanel, _React$Component);

  function MsgPanel() {
    _classCallCheck(this, MsgPanel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MsgPanel).apply(this, arguments));
  }

  _createClass(MsgPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'well display' },
        _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          _react2.default.createElement(
            'button',
            null,
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-repeat' })
          ),
          ' ',
          _react2.default.createElement(
            'button',
            null,
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-trash' })
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Subject'
        ),
        'Hello from MsgPanel Component',
        this.props.name
      );
    }
  }]);

  return MsgPanel;
}(_react2.default.Component);

exports.default = MsgPanel;

},{"react":"react"}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      _NavbarActions2.default.getItemCount();

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findItem({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var user = user;
      var hideHost = this.props.hideHost ? 'hidden' : 'dropdown';
      var hideMod = this.props.hideMod ? 'hidden' : 'dropdown';
      var hideMgmt = this.props.hideMgmt ? 'hidden' : 'dropdown';

      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-inverse navbar-fixed-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2.default.createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'pull-left' },
              _react2.default.createElement('image', { className: 'img-responsive logo', src: './img/smlogo.png', width: '40px' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', 'data-toggle': 'modal', 'data-target': '#myModal' },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-barcode' })
                )
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalItems + ' Items', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Cupboard',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/favs' },
                    'Favourites'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/msg' },
                    'Messages'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/dc' },
                    'Deal Center'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Library',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/items' },
                    'Items'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/comps' },
                    'Companies'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: hideHost },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Hosting',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/addit' },
                    'Add New Item'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/dealmgr' },
                    'Manage Deals'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/credmark' },
                    'Cred Market'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: hideMod },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Moderator',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/brand' },
                    'Upload Content'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/propose' },
                    'Product Proposals'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/subscribe' },
                    'Manage Subscription'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            _react2.default.createElement(
              'li',
              { className: hideMgmt },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Manage Site',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/mgrlib' },
                    'Edit Library'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/mgrcomps' },
                    'Company Certifications'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/mgrcred' },
                    'Cred Ledger'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Username',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/profile' },
                    'Profile'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/newhost' },
                    'Become a Host'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/login' },
                    'Logout'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":56,"react":"react","react-router":"react-router"}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DealsPanel = require('./DealsPanel');

var _DealsPanel2 = _interopRequireDefault(_DealsPanel);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewHost = function (_React$Component) {
  _inherits(NewHost, _React$Component);

  function NewHost() {
    _classCallCheck(this, NewHost);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewHost).apply(this, arguments));
  }

  _createClass(NewHost, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel display text-center' },
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement(
            'b',
            null,
            'Considering becoming a Host?'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Hosts get access to a whole bunch of exclusive features and content on the site.',
          _react2.default.createElement('br', null),
          'Only Hosts may post Deals for our community to participate in and they are the only',
          _react2.default.createElement('br', null),
          'ones on the site that may accumulate and spen Cred to claim Leftover items in Deals.',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          'Shopidarity is Cooperatively operated by our Hosts, that act as the Member/Owners of our Cooperative.',
          _react2.default.createElement('br', null),
          'Each Host gets to vote on the budget and for the Board of Directors at our Annual General Meeting if they want.',
          _react2.default.createElement('br', null),
          'When our Cooperative is profitable, the Hosts will recieve patronage payments dependant on their participation in our community.',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          'To become a Host a User must purchase a Member Share of the Cooperative to become a partial Owner of the enterprise.',
          _react2.default.createElement('br', null),
          'Hosts are alo required to satisfy a minimal annual Membership Fee to cover basic operating costs and ensure our collective success.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h4',
          null,
          'Current Cost for Member Share: $20'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Current Annual Membership Fee: $20'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h4',
          null,
          'First Year Total: $40'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Subsequent Years: $20'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default' },
          'Purchase Membership'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return NewHost;
}(_react2.default.Component);

exports.default = NewHost;

},{"./DealsPanel":16,"react":"react","react-router":"react-router"}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewMsg = function (_React$Component) {
  _inherits(NewMsg, _React$Component);

  function NewMsg() {
    _classCallCheck(this, NewMsg);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewMsg).apply(this, arguments));
  }

  _createClass(NewMsg, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel display' },
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'well display' },
          _react2.default.createElement(
            'div',
            { className: 'pull-right' },
            _react2.default.createElement(
              'button',
              null,
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-trash' })
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Subject'
          ),
          'Hello from NewMsg Component'
        )
      );
    }
  }]);

  return NewMsg;
}(_react2.default.Component);

exports.default = NewMsg;

},{"react":"react"}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ItemPanel = require('./ItemPanel');

var _ItemPanel2 = _interopRequireDefault(_ItemPanel);

var _PLURows = require('./PLURows');

var _PLURows2 = _interopRequireDefault(_PLURows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLULib = function (_React$Component) {
    _inherits(PLULib, _React$Component);

    function PLULib() {
        _classCallCheck(this, PLULib);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PLULib).apply(this, arguments));
    }

    _createClass(PLULib, [{
        key: 'render',
        value: function render() {
            var totalItems = 1444,
                itemsPerRow = 6,
                //Change this if you change the View.
            numRows = totalItems / itemsPerRow;

            return _react2.default.createElement(
                'div',
                { className: 'panel display' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            ' ',
                            _react2.default.createElement(
                                'b',
                                null,
                                'All PLU Items:'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'h4',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/items' },
                                'UPC Codes'
                            ),
                            ' | ',
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/plu' },
                                'PLU Codes'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_PLURows2.default, { totalItems: totalItems, itemsPerRow: itemsPerRow, numRows: numRows })
            );
        }
    }]);

    return PLULib;
}(_react2.default.Component);

exports.default = PLULib;

},{"./ItemPanel":29,"./PLURows":44,"react":"react","react-router":"react-router"}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemPanel = require('./ItemPanel');

var _ItemPanel2 = _interopRequireDefault(_ItemPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLURows = function (_React$Component) {
  _inherits(PLURows, _React$Component);

  function PLURows() {
    _classCallCheck(this, PLURows);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PLURows).apply(this, arguments));
  }

  _createClass(PLURows, [{
    key: 'render',
    value: function render() {
      var totalItems = this.props.totalItems;
      var itemsPerRow = this.props.itemsPerRow;
      var numRows = this.props.numRows;
      var itemlist = [];
      var items = [];

      for (var i = 1; i <= totalItems; i++) {
        items.push({ name: i, id: i });
      }
      var itemlist = items.map(function (item) {
        return _react2.default.createElement(_ItemPanel2.default, { key: item.id, name: item.name });
      });
      items = [];
      return _react2.default.createElement(
        'div',
        { className: 'row display' },
        itemlist
      );
    }
  }]);

  return PLURows;
}(_react2.default.Component);

exports.default = PLURows;

},{"./ItemPanel":29,"react":"react"}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DealsPanel = require('./DealsPanel');

var _DealsPanel2 = _interopRequireDefault(_DealsPanel);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfHome = function (_React$Component) {
	_inherits(ProfHome, _React$Component);

	function ProfHome() {
		_classCallCheck(this, ProfHome);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProfHome).apply(this, arguments));
	}

	_createClass(ProfHome, [{
		key: 'render',
		value: function render() {
			var randomrate = Math.floor((Math.random() * .5 + 9.5) * 100) / 100;
			var randomdeals = Math.floor(Math.random() * 50 + 1);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h4',
					null,
					_react2.default.createElement(
						'b',
						null,
						'Top Rated Items:'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row display' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-4' },
						_react2.default.createElement(
							'div',
							{ className: 'well text-center' },
							_react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/itempg/7' },
								'ItemName7'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/bizpg/7' },
								'Manufacturer7'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
							randomdeals,
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
							randomrate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-4' },
						_react2.default.createElement(
							'div',
							{ className: 'well text-center' },
							_react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/itempg/21' },
								'ItemName21'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/bizpg/21' },
								'Manufacturer21'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
							randomdeals,
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
							randomrate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-4' },
						_react2.default.createElement(
							'div',
							{ className: 'well text-center' },
							_react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/itempg/4' },
								'ItemName4'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/bizpg/4' },
								'Manufacturer4'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
							randomdeals,
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
							randomrate
						)
					)
				),
				_react2.default.createElement(
					'h4',
					null,
					_react2.default.createElement(
						'b',
						null,
						'Latest Deal:'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'well display' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-3 text-center' },
							_react2.default.createElement('img', { src: 'http://placehold.it/120x120/fdff00/000000?text=No+Picture+Provided' }),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null),
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
							randomrate
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-9' },
							_react2.default.createElement(
								'div',
								{ className: 'pull-right' },
								_react2.default.createElement(
									'h3',
									null,
									'$4.99'
								),
								_react2.default.createElement('br', null),
								_react2.default.createElement('br', null),
								_react2.default.createElement(
									'h3',
									null,
									'Completed'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'pull-left' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/itempg/8' },
									_react2.default.createElement(
										'h3',
										null,
										_react2.default.createElement(
											'b',
											null,
											'Giddy Yo-Yo'
										)
									)
								),
								_react2.default.createElement(
									'h4',
									null,
									'Manufacturer'
								),
								_react2.default.createElement(
									'h4',
									null,
									'Vendor'
								),
								_react2.default.createElement(
									'h5',
									null,
									'Host - Shares - ',
									_react2.default.createElement('span', { className: 'glyphicon glyphicon-map-marker' }),
									'.4 km'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return ProfHome;
}(_react2.default.Component);

exports.default = ProfHome;

},{"./DealsPanel":16,"react":"react","react-router":"react-router"}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DealsPanel = require('./DealsPanel');

var _DealsPanel2 = _interopRequireDefault(_DealsPanel);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          _react2.default.createElement(
            'div',
            { className: 'panel text-center display' },
            _react2.default.createElement(
              'h4',
              null,
              'Username'
            ),
            _react2.default.createElement('img', { src: 'http://placehold.it/160x160/fdff00/000000?text=No+Picture+Provided' }),
            _react2.default.createElement(
              'h4',
              null,
              'Location'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'Age'
            ),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
              'Rating'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-9' },
          this.props.children
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;

},{"./DealsPanel":16,"react":"react","react-router":"react-router"}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scanner = function (_React$Component) {
	_inherits(Scanner, _React$Component);

	function Scanner() {
		_classCallCheck(this, Scanner);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Scanner).apply(this, arguments));
	}

	_createClass(Scanner, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "modal fade modal-md", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel" },
				_react2.default.createElement(
					"div",
					{ className: "modal-dialog" },
					_react2.default.createElement(
						"div",
						{ className: "modal-content text-center" },
						_react2.default.createElement(
							"div",
							{ className: "modal-header" },
							_react2.default.createElement(
								"button",
								{ type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"×"
								)
							),
							_react2.default.createElement(
								"h4",
								{ className: "modal-title", id: "myModalLabel" },
								"UPC Scanner"
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "modal-body" },
							_react2.default.createElement(
								"div",
								{ className: "panel" },
								_react2.default.createElement(
									"h4",
									null,
									" Coming Soon!"
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "modal-footer" },
							_react2.default.createElement(
								"div",
								{ className: "well" },
								_react2.default.createElement(
									"button",
									{ type: "button", className: "btn btn-primary disable" },
									"Product Page"
								),
								_react2.default.createElement(
									"button",
									{ type: "button", className: "btn btn-default", "data-dismiss": "modal" },
									"Close"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Scanner;
}(_react2.default.Component);

exports.default = Scanner;

},{"react":"react"}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Top10Item = require('./Top10Item');

var _Top10Item2 = _interopRequireDefault(_Top10Item);

var _Top10Host = require('./Top10Host');

var _Top10Host2 = _interopRequireDefault(_Top10Host);

var _Top10Biz = require('./Top10Biz');

var _Top10Biz2 = _interopRequireDefault(_Top10Biz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top10 = function (_React$Component) {
    _inherits(Top10, _React$Component);

    function Top10() {
        _classCallCheck(this, Top10);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Top10).apply(this, arguments));
    }

    _createClass(Top10, [{
        key: 'render',
        value: function render() {
            var topitems = [{ _id: "1i", name: "Item 1", rate: "9.8", deals: "9" }, { _id: "2i", name: "Item 2", rate: "9.7", deals: "19" }, { _id: "3i", name: "Item 3", rate: "9.7", deals: "31" }, { _id: "4i", name: "Item 4", rate: "9.6", deals: "23" }, { _id: "5i", name: "Item 5", rate: "9.6", deals: "46" }, { _id: "6i", name: "Item 6", rate: "9.5", deals: "62" }, { _id: "7i", name: "Item 7", rate: "9.5", deals: "12" }, { _id: "8i", name: "Item 8", rate: "9.4", deals: "42" }, { _id: "9i", name: "Item 9", rate: "9.4", deals: "5" }, { _id: "10i", name: "Item 10", rate: "9.4", deals: "17" }];
            var itemlist = topitems.map(function (item) {
                return _react2.default.createElement(_Top10Item2.default, { key: item._id, _id: item._id, name: item.name, rate: item.rate, deals: item.deals });
            });
            var topbiz = [{ _id: "1b", name: "Biz 1", rate: "9.9", deals: "12" }, { _id: "2b", name: "Biz 2", rate: "9.8", deals: "40" }, { _id: "3b", name: "Biz 3", rate: "9.8", deals: "22" }, { _id: "4b", name: "Biz 4", rate: "9.7", deals: "59" }, { _id: "5b", name: "Biz 5", rate: "9.5", deals: "43" }, { _id: "6b", name: "Biz 6", rate: "9.5", deals: "67" }, { _id: "7b", name: "Biz 7", rate: "9.5", deals: "13" }, { _id: "8b", name: "Biz 8", rate: "9.5", deals: "51" }, { _id: "9b", name: "Biz 9", rate: "9.4", deals: "31" }, { _id: "10b", name: "Biz 10", rate: "9.4", deals: "9" }];
            var bizlist = topbiz.map(function (biz) {
                return _react2.default.createElement(_Top10Biz2.default, { key: biz._id, _id: biz._id, name: biz.name, rate: biz.rate, deals: biz.deals });
            });
            var tophost = [{ _id: "1h", name: "Host 1", rate: "9.9", deals: "8" }, { _id: "2h", name: "Host 2", rate: "9.8", deals: "11" }, { _id: "3h", name: "Host 3", rate: "9.8", deals: "9" }, { _id: "4h", name: "Host 4", rate: "9.7", deals: "5" }, { _id: "5h", name: "Host 5", rate: "9.5", deals: "8" }, { _id: "6h", name: "Host 6", rate: "9.5", deals: "2" }, { _id: "7h", name: "Host 7", rate: "9.5", deals: "7" }, { _id: "8h", name: "Host 8", rate: "9.5", deals: "5" }, { _id: "9h", name: "Host 9", rate: "9.4", deals: "3" }, { _id: "10h", name: "Host 10", rate: "9.4", deals: "4" }];
            var hostlist = tophost.map(function (host) {
                return _react2.default.createElement(_Top10Host2.default, { key: host._id, _id: host._id, name: host.name, rate: host.rate, deals: host.deals });
            });
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-4' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel top10 text-center' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            _react2.default.createElement(
                                'b',
                                null,
                                _react2.default.createElement(
                                    'u',
                                    null,
                                    'Top 10 Products'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'well top10' },
                            itemlist
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-4' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel top10 text-center' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            _react2.default.createElement(
                                'u',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Top 10 Hosts'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'well top10' },
                            hostlist
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-4' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel top10 text-center' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            _react2.default.createElement(
                                'u',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Top 10 Companies'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'well top10' },
                            bizlist
                        )
                    )
                )
            );
        }
    }]);

    return Top10;
}(_react2.default.Component);

exports.default = Top10;

},{"./Top10Biz":49,"./Top10Host":50,"./Top10Item":51,"react":"react"}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top10Biz = function (_React$Component) {
    _inherits(Top10Biz, _React$Component);

    function Top10Biz() {
        _classCallCheck(this, Top10Biz);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Top10Biz).apply(this, arguments));
    }

    _createClass(Top10Biz, [{
        key: 'render',
        value: function render() {
            var link = "/bizpg/" + this.props._id;
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    this.props._id
                ),
                ' - ',
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: link },
                    this.props.name
                ),
                ' - ',
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
                this.props.rate,
                ' - ',
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
                this.props.deals
            );
        }
    }]);

    return Top10Biz;
}(_react2.default.Component);

exports.default = Top10Biz;

},{"react":"react","react-router":"react-router"}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top10Host = function (_React$Component) {
    _inherits(Top10Host, _React$Component);

    function Top10Host() {
        _classCallCheck(this, Top10Host);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Top10Host).apply(this, arguments));
    }

    _createClass(Top10Host, [{
        key: 'render',
        value: function render() {
            var link = "/hostpg/" + this.props._id;
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    this.props._id
                ),
                ' - ',
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: link },
                    this.props.name
                ),
                ' - ',
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
                this.props.rate,
                ' - ',
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
                this.props.deals
            );
        }
    }]);

    return Top10Host;
}(_react2.default.Component);

exports.default = Top10Host;

},{"react":"react","react-router":"react-router"}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top10Item = function (_React$Component) {
  _inherits(Top10Item, _React$Component);

  function Top10Item(props) {
    _classCallCheck(this, Top10Item);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Top10Item).call(this, props));

    _this.state = { fav: false };
    _this.handleFav = _this.handleFav.bind(_this);
    return _this;
  }

  _createClass(Top10Item, [{
    key: 'handleFav',
    value: function handleFav() {
      var newFav = !this.state.fav;
      this.setState({ fav: newFav });
    }
  }, {
    key: 'render',
    value: function render() {
      var heartClass = this.state.fav ? "glyphicon glyphicon-heart" : "glyphicon glyphicon-heart-empty";
      var link = "/itempg/" + this.props._id;
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'b',
          null,
          this.props._id
        ),
        ' - ',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: link },
          this.props.name
        ),
        ' - ',
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),
        this.props.rate,
        ' - ',
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
        this.props.deals,
        ' - ',
        _react2.default.createElement('i', { onClick: this.handleFav, className: heartClass })
      );
    }
  }]);

  return Top10Item;
}(_react2.default.Component);

exports.default = Top10Item;

},{"react":"react","react-router":"react-router"}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Welcome = function (_React$Component) {
	_inherits(Welcome, _React$Component);

	function Welcome() {
		_classCallCheck(this, Welcome);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Welcome).apply(this, arguments));
	}

	_createClass(Welcome, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "col-xs-6" },
				_react2.default.createElement(
					"div",
					{ className: "welcome panel panel-default text-center" },
					_react2.default.createElement("br", null),
					_react2.default.createElement("img", { className: "img-responsive welcome-pic", src: "./img/vintage-female-md.png", height: "70%", width: "auto" }),
					_react2.default.createElement(
						"h2",
						null,
						_react2.default.createElement(
							"strong",
							null,
							"Let’s Buy Together, Because Healthy Local Products Shouldn’t be a Priveledge"
						)
					)
				)
			);
		}
	}]);

	return Welcome;
}(_react2.default.Component);

exports.default = Welcome;

},{"react":"react"}],53:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":54,"history/lib/createBrowserHistory":63,"react":"react","react-dom":"react-dom","react-router":"react-router"}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Logout = require('./components/Logout');

var _Logout2 = _interopRequireDefault(_Logout);

var _Favourites = require('./components/Favourites');

var _Favourites2 = _interopRequireDefault(_Favourites);

var _MsgPage = require('./components/MsgPage');

var _MsgPage2 = _interopRequireDefault(_MsgPage);

var _Inbox = require('./components/Inbox');

var _Inbox2 = _interopRequireDefault(_Inbox);

var _NewMsg = require('./components/NewMsg');

var _NewMsg2 = _interopRequireDefault(_NewMsg);

var _DealCenter = require('./components/DealCenter');

var _DealCenter2 = _interopRequireDefault(_DealCenter);

var _Library = require('./components/Library');

var _Library2 = _interopRequireDefault(_Library);

var _PLULib = require('./components/PLULib');

var _PLULib2 = _interopRequireDefault(_PLULib);

var _CompanyLib = require('./components/CompanyLib');

var _CompanyLib2 = _interopRequireDefault(_CompanyLib);

var _Matches = require('./components/Matches');

var _Matches2 = _interopRequireDefault(_Matches);

var _AddItem = require('./components/AddItem');

var _AddItem2 = _interopRequireDefault(_AddItem);

var _DealMgr = require('./components/DealMgr');

var _DealMgr2 = _interopRequireDefault(_DealMgr);

var _DlMgrActive = require('./components/DlMgrActive');

var _DlMgrActive2 = _interopRequireDefault(_DlMgrActive);

var _CredMark = require('./components/CredMark');

var _CredMark2 = _interopRequireDefault(_CredMark);

var _Profile = require('./components/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _ProfHome = require('./components/ProfHome');

var _ProfHome2 = _interopRequireDefault(_ProfHome);

var _NewHost = require('./components/NewHost');

var _NewHost2 = _interopRequireDefault(_NewHost);

var _ContactPage = require('./components/ContactPage');

var _ContactPage2 = _interopRequireDefault(_ContactPage);

var _FAQ = require('./components/FAQ');

var _FAQ2 = _interopRequireDefault(_FAQ);

var _AboutUs = require('./components/AboutUs');

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _ItemPage = require('./components/ItemPage');

var _ItemPage2 = _interopRequireDefault(_ItemPage);

var _BizPage = require('./components/BizPage');

var _BizPage2 = _interopRequireDefault(_BizPage);

var _HostPage = require('./components/HostPage');

var _HostPage2 = _interopRequireDefault(_HostPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	null,
	_react2.default.createElement(
		_reactRouter.Route,
		{ component: _App2.default },
		_react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/logout', component: _Logout2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/favs', component: _Favourites2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ component: _MsgPage2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/msg', component: _Inbox2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: '/newmsg', component: _NewMsg2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: '/dc', component: _DealCenter2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/items', component: _Library2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/plu', component: _PLULib2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/comps', component: _CompanyLib2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/match', component: _Matches2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/addit', component: _AddItem2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ component: _DealMgr2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/dealmgr', component: _DlMgrActive2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: '/credmark', component: _CredMark2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/brand', component: _CredMark2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/propose', component: _CredMark2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/subscribe', component: _CredMark2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/mgrlib', component: _CredMark2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/mgrcomps', component: _CredMark2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/mgrcred', component: _CredMark2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ component: _Profile2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _ProfHome2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: '/newhost', component: _NewHost2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: '/itempg/:id', component: _ItemPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/bizpg/:id', component: _BizPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/hostpg/:id', component: _HostPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _ContactPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/faq', component: _FAQ2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _AboutUs2.default })
	),
	_react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default })
);

},{"./components/AboutUs":4,"./components/AddItem":5,"./components/App":6,"./components/BizPage":7,"./components/CompanyLib":11,"./components/ContactPage":12,"./components/CredMark":13,"./components/DealCenter":14,"./components/DealMgr":15,"./components/DlMgrActive":17,"./components/FAQ":19,"./components/Favourites":21,"./components/Home":23,"./components/HostPage":25,"./components/Inbox":26,"./components/ItemPage":27,"./components/Library":32,"./components/Login":33,"./components/Logout":36,"./components/Matches":37,"./components/MsgPage":38,"./components/NewHost":41,"./components/NewMsg":42,"./components/PLULib":43,"./components/ProfHome":45,"./components/Profile":46,"react":"react","react-router":"react-router"}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddItemActions = require('../actions/AddItemActions');

var _AddItemActions2 = _interopRequireDefault(_AddItemActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddItemStore = function () {
  function AddItemStore() {
    _classCallCheck(this, AddItemStore);

    this.bindActions(_AddItemActions2.default);
    this.name = '';
    this.upc = '';
    this.manu = '';
    this.size = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.upcValidationState = '';
    this.manuValidationState = '';
    this.sizeValidationState = '';
  }

  _createClass(AddItemStore, [{
    key: 'onAddItemSuccess',
    value: function onAddItemSuccess(successMessage) {
      this.nameValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddItemFail',
    value: function onAddItemFail(errorMessage) {
      this.nameValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateUPC',
    value: function onUpdateUPC(event) {
      this.upc = event.target.value;
      this.upcValidationState = '';
    }
  }, {
    key: 'onUpdateManu',
    value: function onUpdateManu(event) {
      this.manu = event.target.value;
      this.manuValidationState = '';
    }
  }, {
    key: 'onUpdateSize',
    value: function onUpdateSize(event) {
      this.size = event.target.value;
      this.sizeValidationState = '';
    }
  }, {
    key: 'onInvalidName',
    value: function onInvalidName() {
      this.nameValidationState = 'has-error';
      this.helpBlock = 'Please enter a Item name.';
    }
  }, {
    key: 'onInvalidUPC',
    value: function onInvalidUPC() {
      this.upcValidationState = 'has-error';
    }
  }, {
    key: 'onInvalidManu',
    value: function onInvalidManu() {
      this.manuValidationState = 'has-error';
    }
  }, {
    key: 'onInvalidSize',
    value: function onInvalidSize() {
      this.sizeValidationState = 'has-error';
    }
  }]);

  return AddItemStore;
}();

exports.default = _alt2.default.createStore(AddItemStore);

},{"../actions/AddItemActions":1,"../alt":3}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalItems = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindItemSuccess',
    value: function onFindItemSuccess(payload) {
      payload.history.pushState(null, '/items/' + payload.itemId);
    }
  }, {
    key: 'onFindItemFail',
    value: function onFindItemFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetItemCountSuccess',
    value: function onGetItemCountSuccess(data) {
      this.totalItems = data.count;
    }
  }, {
    key: 'onGetItemCountFail',
    value: function onGetItemCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":2,"../alt":3}],57:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],58:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],59:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],60:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":57,"warning":75}],61:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],62:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],63:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":58,"./DOMStateStorage":60,"./DOMUtils":61,"./ExecutionEnvironment":62,"./createDOMHistory":64,"./parsePath":69,"_process":57,"invariant":74}],64:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":61,"./ExecutionEnvironment":62,"./createHistory":65,"_process":57,"invariant":74}],65:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":58,"./AsyncUtils":59,"./createLocation":66,"./deprecate":67,"./parsePath":69,"./runTransitionHook":70,"deep-equal":71}],66:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":58,"./parsePath":69}],67:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],68:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],69:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":68,"_process":57,"warning":75}],70:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":57,"warning":75}],71:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":72,"./lib/keys.js":73}],72:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],73:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],74:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":57}],75:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":57}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsCircleCreator = require("./creators/CircleCreator");

var _creatorsCircleCreator2 = _interopRequireDefault(_creatorsCircleCreator);

var Circle = (function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    _get(Object.getPrototypeOf(Circle.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Circle, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getBounds() {
      return this.state.circle.getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.state.circle.getCenter();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.circle.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.circle.getEditable();
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.state.circle.getMap();
    }
  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.state.circle.getRadius();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.circle.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var circle = _creatorsCircleCreator2["default"]._createCircle(this.props);

      this.setState({ circle: circle });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.circle) {
        return _react2["default"].createElement(
          _creatorsCircleCreator2["default"],
          _extends({ circle: this.state.circle }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsCircleCreator.circleDefaultPropTypes, _creatorsCircleCreator.circleControlledPropTypes, _creatorsCircleCreator.circleEventPropTypes),
    enumerable: true
  }]);

  return Circle;
})(_react.Component);

exports["default"] = Circle;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/CircleCreator":89,"can-use-dom":120,"react":"react"}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsDirectionsRendererCreator = require("./creators/DirectionsRendererCreator");

var _creatorsDirectionsRendererCreator2 = _interopRequireDefault(_creatorsDirectionsRendererCreator);

/*
 * Original author: @alexishevia
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/22
 */

var DirectionsRenderer = (function (_Component) {
  _inherits(DirectionsRenderer, _Component);

  function DirectionsRenderer() {
    _classCallCheck(this, DirectionsRenderer);

    _get(Object.getPrototypeOf(DirectionsRenderer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(DirectionsRenderer, [{
    key: "getDirections",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDirections() {
      return this.state.directionsRenderer.getDirections();
    }
  }, {
    key: "getPanel",
    value: function getPanel() {
      return this.state.directionsRenderer.getPanel();
    }
  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      return this.state.directionsRenderer.getRouteIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var directionsRenderer = _creatorsDirectionsRendererCreator2["default"]._createDirectionsRenderer(this.props);

      this.setState({ directionsRenderer: directionsRenderer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.directionsRenderer) {
        return _react2["default"].createElement(
          _creatorsDirectionsRendererCreator2["default"],
          _extends({ directionsRenderer: this.state.directionsRenderer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsDirectionsRendererCreator.directionsRendererDefaultPropTypes, _creatorsDirectionsRendererCreator.directionsRendererControlledPropTypes, _creatorsDirectionsRendererCreator.directionsRendererEventPropTypes),
    enumerable: true
  }]);

  return DirectionsRenderer;
})(_react.Component);

exports["default"] = DirectionsRenderer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/DirectionsRendererCreator":90,"can-use-dom":120,"react":"react"}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsDrawingManagerCreator = require("./creators/DrawingManagerCreator");

var _creatorsDrawingManagerCreator2 = _interopRequireDefault(_creatorsDrawingManagerCreator);

/*
 * Original author: @idolize
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/46
 */

var DrawingManager = (function (_Component) {
  _inherits(DrawingManager, _Component);

  function DrawingManager() {
    _classCallCheck(this, DrawingManager);

    _get(Object.getPrototypeOf(DrawingManager.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(DrawingManager, [{
    key: "getDrawingMode",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDrawingMode() {
      return this.state.drawingManager.getDrawingMode();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var drawingManager = _creatorsDrawingManagerCreator2["default"]._createDrawingManager(this.props);

      this.setState({ drawingManager: drawingManager });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.drawingManager) {
        return _react2["default"].createElement(
          _creatorsDrawingManagerCreator2["default"],
          _extends({ drawingManager: this.state.drawingManager }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsDrawingManagerCreator.drawingManagerDefaultPropTypes, _creatorsDrawingManagerCreator.drawingManagerControlledPropTypes, _creatorsDrawingManagerCreator.drawingManagerEventPropTypes),
    enumerable: true
  }]);

  return DrawingManager;
})(_react.Component);

exports["default"] = DrawingManager;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/DrawingManagerCreator":91,"can-use-dom":120,"react":"react"}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _creatorsGoogleMapHolder = require("./creators/GoogleMapHolder");

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var _GoogleMapLoader = require("./GoogleMapLoader");

var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__";

var GoogleMap = (function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    _get(Object.getPrototypeOf(GoogleMap.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleMap, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return (this.props.map || this.refs.delegate).getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return (this.props.map || this.refs.delegate).getCenter();
    }
  }, {
    key: "getDiv",
    value: function getDiv() {
      return (this.props.map || this.refs.delegate).getDiv();
    }
  }, {
    key: "getHeading",
    value: function getHeading() {
      return (this.props.map || this.refs.delegate).getHeading();
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return (this.props.map || this.refs.delegate).getMapTypeId();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return (this.props.map || this.refs.delegate).getProjection();
    }
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return (this.props.map || this.refs.delegate).getStreetView();
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return (this.props.map || this.refs.delegate).getTilt();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return (this.props.map || this.refs.delegate).getZoom();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // Public APIs - Use this carefully
    // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      return (this.props.map || this.refs.delegate).fitBounds(bounds);
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      return (this.props.map || this.refs.delegate).panBy(x, y);
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      return (this.props.map || this.refs.delegate).panTo(latLng);
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      return (this.props.map || this.refs.delegate).panToBounds(latLngBounds);
    }

    // END - Public APIs - Use this carefully
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var containerTagName = this.props.containerTagName;

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      (0, _warning2["default"])(isUsingNewBehavior, "\"GoogleMap\" with containerTagName is deprecated now and will be removed in next major release (5.0.0).\nUse \"GoogleMapLoader\" instead. See https://github.com/tomchentw/react-google-maps/pull/157 for more details.");
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var containerTagName = _props.containerTagName;
      var _props$containerProps = _props.containerProps;
      var containerProps = _props$containerProps === undefined ? {} : _props$containerProps;
      var children = _props.children;

      var mapProps = _objectWithoutProperties(_props, ["containerTagName", "containerProps", "children"]);

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      if (isUsingNewBehavior) {
        return _react2["default"].createElement(
          _creatorsGoogleMapHolder2["default"],
          mapProps,
          children
        );
      } else {
        // ------------ Deprecated ------------
        var realContainerTagName = containerTagName === undefined || containerTagName === null ? "div" : containerTagName;

        return _react2["default"].createElement(_GoogleMapLoader2["default"], {
          ref: "loader",
          containerElement: _react2["default"].createElement(realContainerTagName, containerProps),
          googleMapElement: _react2["default"].createElement(
            GoogleMap,
            _extends({ ref: "delegate", containerTagName: USE_NEW_BEHAVIOR_TAG_NAME }, mapProps),
            children
          )
        });
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({
      containerTagName: _react.PropTypes.string,
      containerProps: _react.PropTypes.object,
      map: _react.PropTypes.object
    }, _creatorsGoogleMapHolder.mapDefaultPropTypes, _creatorsGoogleMapHolder.mapControlledPropTypes, _creatorsGoogleMapHolder.mapEventPropTypes),
    enumerable: true
  }]);

  return GoogleMap;
})(_react.Component);

exports["default"] = GoogleMap;
module.exports = exports["default"];
// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./GoogleMapLoader":80,"./creators/GoogleMapHolder":92,"react":"react","warning":122}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _creatorsGoogleMapHolder = require("./creators/GoogleMapHolder");

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__"; /* CIRCULAR_DEPENDENCY */

var GoogleMapLoader = (function (_Component) {
  _inherits(GoogleMapLoader, _Component);

  function GoogleMapLoader() {
    _classCallCheck(this, GoogleMapLoader);

    _get(Object.getPrototypeOf(GoogleMapLoader.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      map: null
    };
  }

  _createClass(GoogleMapLoader, [{
    key: "mountGoogleMap",
    value: function mountGoogleMap(domEl) {
      if (this.state.map) {
        return;
      }
      var _props$googleMapElement$props = this.props.googleMapElement.props;
      var children = _props$googleMapElement$props.children;

      var mapProps = _objectWithoutProperties(_props$googleMapElement$props, ["children"]);

      //
      // Create google.maps.Map instance so that dom is initialized before
      // React's children creators.
      //
      var map = _creatorsGoogleMapHolder2["default"]._createMap(domEl, mapProps);
      this.setState({ map: map });
    }
  }, {
    key: "renderChild",
    value: function renderChild() {
      if (this.state.map) {
        // Notice: implementation details
        //
        // In this state, the DOM of google.maps.Map is already initialized in
        // my innerHTML. Adding extra React components will not clean it
        // in current version*. It will use prepend to add DOM of
        // GoogleMapHolder and become a sibling of the DOM of google.maps.Map
        // Not sure this is subject to change
        //
        // *current version: 0.13.3, 0.14.2
        //
        return _react2["default"].cloneElement(this.props.googleMapElement, {
          map: this.state.map,
          // ------------ Deprecated ------------
          containerTagName: USE_NEW_BEHAVIOR_TAG_NAME
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].cloneElement(this.props.containerElement, {
        ref: this.mountGoogleMap.bind(this)
      }, this.renderChild());
    }
  }], [{
    key: "propTypes",
    value: {
      containerElement: _react.PropTypes.node.isRequired,
      googleMapElement: _react.PropTypes.element.isRequired },
    enumerable: true
  }, {
    key: "defaultProps",
    /* CIRCULAR_DEPENDENCY. Uncomment when 5.0.0 comes: propTypesElementOfType(GoogleMap).isRequired, */
    value: {
      containerElement: _react2["default"].createElement("div", null)
    },
    enumerable: true
  }]);

  return GoogleMapLoader;
})(_react.Component);

exports["default"] = GoogleMapLoader;
module.exports = exports["default"];
},{"./creators/GoogleMapHolder":92,"react":"react"}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsInfoWindowCreator = require("./creators/InfoWindowCreator");

var _creatorsInfoWindowCreator2 = _interopRequireDefault(_creatorsInfoWindowCreator);

var InfoWindow = (function (_Component) {
  _inherits(InfoWindow, _Component);

  function InfoWindow() {
    _classCallCheck(this, InfoWindow);

    _get(Object.getPrototypeOf(InfoWindow.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(InfoWindow, [{
    key: "getContent",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getContent() {/* TODO: children */}
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.infoWindow.getPosition();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.infoWindow.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var infoWindow = _creatorsInfoWindowCreator2["default"]._createInfoWindow(this.props);

      this.setState({ infoWindow: infoWindow });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.infoWindow) {
        return _react2["default"].createElement(
          _creatorsInfoWindowCreator2["default"],
          _extends({ infoWindow: this.state.infoWindow }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsInfoWindowCreator.infoWindowDefaultPropTypes, _creatorsInfoWindowCreator.infoWindowControlledPropTypes, _creatorsInfoWindowCreator.infoWindowEventPropTypes),
    enumerable: true
  }]);

  return InfoWindow;
})(_react.Component);

exports["default"] = InfoWindow;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/InfoWindowCreator":93,"can-use-dom":120,"react":"react"}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsKmlLayerCreator = require("./creators/KmlLayerCreator");

var _creatorsKmlLayerCreator2 = _interopRequireDefault(_creatorsKmlLayerCreator);

var KmlLayer = (function (_Component) {
  _inherits(KmlLayer, _Component);

  function KmlLayer() {
    _classCallCheck(this, KmlLayer);

    _get(Object.getPrototypeOf(KmlLayer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(KmlLayer, [{
    key: "getDefaultViewport",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getDefaultViewport() {
      return this.state.kmlLayer.getDefaultViewport();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this.state.kmlLayer.getMetadata();
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.state.kmlLayer.getStatus();
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.state.kmlLayer.getUrl();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var kmlLayer = _creatorsKmlLayerCreator2["default"]._createKmlLayer(this.props);

      this.setState({ kmlLayer: kmlLayer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.kmlLayer) {
        return _react2["default"].createElement(
          _creatorsKmlLayerCreator2["default"],
          _extends({ kmlLayer: this.state.kmlLayer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsKmlLayerCreator.kmlLayerDefaultPropTypes, _creatorsKmlLayerCreator.kmlLayerControlledPropTypes, _creatorsKmlLayerCreator.kmlLayerEventPropTypes),
    enumerable: true
  }]);

  return KmlLayer;
})(_react.Component);

exports["default"] = KmlLayer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/KmlLayerCreator":94,"can-use-dom":120,"react":"react"}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsMarkerCreator = require("./creators/MarkerCreator");

var _creatorsMarkerCreator2 = _interopRequireDefault(_creatorsMarkerCreator);

var Marker = (function (_Component) {
  _inherits(Marker, _Component);

  function Marker() {
    _classCallCheck(this, Marker);

    _get(Object.getPrototypeOf(Marker.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Marker, [{
    key: "getAnimation",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getAnimation() {
      return this.state.marker.getAnimation();
    }
  }, {
    key: "getAttribution",
    value: function getAttribution() {
      return this.state.marker.getAttribution();
    }
  }, {
    key: "getClickable",
    value: function getClickable() {
      return this.state.marker.getClickable();
    }
  }, {
    key: "getCursor",
    value: function getCursor() {
      return this.state.marker.getCursor();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.marker.getDraggable();
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      return this.state.marker.getIcon();
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.state.marker.getLabel();
    }
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.state.marker.getOpacity();
    }
  }, {
    key: "getPlace",
    value: function getPlace() {
      return this.state.marker.getPlace();
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.marker.getPosition();
    }
  }, {
    key: "getShape",
    value: function getShape() {
      return this.state.marker.getShape();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.state.marker.getTitle();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.marker.getVisible();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var marker = _creatorsMarkerCreator2["default"]._createMarker(this.props);

      this.setState({ marker: marker });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_canUseDom2["default"]) {
        return;
      }

      var anchorHolderRef = this.props.anchorHolderRef;
      var marker = this.state.marker;

      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().removeMarker(marker);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.marker) {
        return _react2["default"].createElement(
          _creatorsMarkerCreator2["default"],
          _extends({ marker: this.state.marker }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsMarkerCreator.markerDefaultPropTypes, _creatorsMarkerCreator.markerControlledPropTypes, _creatorsMarkerCreator.markerEventPropTypes),
    enumerable: true
  }]);

  return Marker;
})(_react.Component);

exports["default"] = Marker;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/MarkerCreator":95,"can-use-dom":120,"react":"react"}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsOverlayViewCreator = require("./creators/OverlayViewCreator");

var _creatorsOverlayViewCreator2 = _interopRequireDefault(_creatorsOverlayViewCreator);

/*
 * Original author: @petebrowne
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/63
 */

var OverlayView = (function (_Component) {
  _inherits(OverlayView, _Component);

  function OverlayView() {
    _classCallCheck(this, OverlayView);

    _get(Object.getPrototypeOf(OverlayView.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(OverlayView, [{
    key: "getPanes",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getPanes() {
      return this.state.overlayView.getPanes();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.state.overlayView.getProjection();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var overlayView = _creatorsOverlayViewCreator2["default"]._createOverlayView(this.props);

      this.setState({ overlayView: overlayView });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.overlayView) {
        return _react2["default"].createElement(
          _creatorsOverlayViewCreator2["default"],
          _extends({ overlayView: this.state.overlayView }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "FLOAT_PANE",
    value: "floatPane",
    enumerable: true
  }, {
    key: "MAP_PANE",
    value: "mapPane",
    enumerable: true
  }, {
    key: "MARKER_LAYER",
    value: "markerLayer",
    enumerable: true
  }, {
    key: "OVERLAY_LAYER",
    value: "overlayLayer",
    enumerable: true
  }, {
    key: "OVERLAY_MOUSE_TARGET",
    value: "overlayMouseTarget",
    enumerable: true
  }, {
    key: "propTypes",
    value: _extends({}, _creatorsOverlayViewCreator.overlayViewDefaultPropTypes, _creatorsOverlayViewCreator.overlayViewControlledPropTypes),
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      mapPaneName: OverlayView.OVERLAY_LAYER
    },
    enumerable: true
  }]);

  return OverlayView;
})(_react.Component);

exports["default"] = OverlayView;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate
},{"./creators/OverlayViewCreator":96,"can-use-dom":120,"react":"react"}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsPolygonCreator = require("./creators/PolygonCreator");

var _creatorsPolygonCreator2 = _interopRequireDefault(_creatorsPolygonCreator);

var Polygon = (function (_Component) {
  _inherits(Polygon, _Component);

  function Polygon() {
    _classCallCheck(this, Polygon);

    _get(Object.getPrototypeOf(Polygon.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Polygon, [{
    key: "getDraggable",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDraggable() {
      return this.state.polygon.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.polygon.getEditable();
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.state.polygon.getPath();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      return this.state.polygon.getPaths();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.polygon.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var polygon = _creatorsPolygonCreator2["default"]._createPolygon(this.props);

      this.setState({ polygon: polygon });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.polygon) {
        return _react2["default"].createElement(
          _creatorsPolygonCreator2["default"],
          _extends({ polygon: this.state.polygon }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsPolygonCreator.polygonDefaultPropTypes, _creatorsPolygonCreator.polygonControlledPropTypes, _creatorsPolygonCreator.polygonEventPropTypes),
    enumerable: true
  }]);

  return Polygon;
})(_react.Component);

exports["default"] = Polygon;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/PolygonCreator":97,"can-use-dom":120,"react":"react"}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsPolylineCreator = require("./creators/PolylineCreator");

var _creatorsPolylineCreator2 = _interopRequireDefault(_creatorsPolylineCreator);

var Polyline = (function (_Component) {
  _inherits(Polyline, _Component);

  function Polyline() {
    _classCallCheck(this, Polyline);

    _get(Object.getPrototypeOf(Polyline.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Polyline, [{
    key: "getDraggable",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDraggable() {
      return this.state.polyline.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.polyline.getEditable();
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.state.polyline.getPath();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.polyline.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var polyline = _creatorsPolylineCreator2["default"]._createPolyline(this.props);

      this.setState({ polyline: polyline });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.polyline) {
        return _react2["default"].createElement(
          _creatorsPolylineCreator2["default"],
          _extends({ polyline: this.state.polyline }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsPolylineCreator.polylineDefaultPropTypes, _creatorsPolylineCreator.polylineControlledPropTypes, _creatorsPolylineCreator.polylineEventPropTypes),
    enumerable: true
  }]);

  return Polyline;
})(_react.Component);

exports["default"] = Polyline;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/PolylineCreator":98,"can-use-dom":120,"react":"react"}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsRectangleCreator = require("./creators/RectangleCreator");

var _creatorsRectangleCreator2 = _interopRequireDefault(_creatorsRectangleCreator);

/*
 * Original author: @alistairjcbrown
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/80
 */

var Rectangle = (function (_Component) {
  _inherits(Rectangle, _Component);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    _get(Object.getPrototypeOf(Rectangle.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Rectangle, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getBounds() {
      return this.state.rectangle.getBounds();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.rectangle.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.rectangle.getEditable();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.rectangle.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var rectangle = _creatorsRectangleCreator2["default"]._createRectangle(this.props);

      this.setState({ rectangle: rectangle });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.rectangle) {
        return _react2["default"].createElement(
          _creatorsRectangleCreator2["default"],
          _extends({ rectangle: this.state.rectangle }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsRectangleCreator.rectangleDefaultPropTypes, _creatorsRectangleCreator.rectangleControlledPropTypes, _creatorsRectangleCreator.rectangleEventPropTypes),
    enumerable: true
  }]);

  return Rectangle;
})(_react.Component);

exports["default"] = Rectangle;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/RectangleCreator":99,"can-use-dom":120,"react":"react"}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsSearchBoxCreator = require("./creators/SearchBoxCreator");

var _creatorsSearchBoxCreator2 = _interopRequireDefault(_creatorsSearchBoxCreator);

/*
 * Original author: @eyebraus
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/110
 */

var SearchBox = (function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox() {
    _classCallCheck(this, SearchBox);

    _get(Object.getPrototypeOf(SearchBox.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(SearchBox, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return this.state.searchBox.getBounds();
    }
  }, {
    key: "getPlaces",
    value: function getPlaces() {
      return this.state.searchBox.getPlaces();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var classes = _props.classes;
      var style = _props.style;
      var placeholder = _props.placeholder;

      var searchBoxProps = _objectWithoutProperties(_props, ["mapHolderRef", "classes", "style", "placeholder"]);

      // Cannot create input via component - Google Maps will mess with React's internal state by detaching/attaching.
      // Allow developers to style the "hidden element" via inputClasses.
      var domEl = document.createElement("input");
      domEl.className = classes;
      domEl.type = "text";
      domEl.placeholder = placeholder;

      for (var propKey in style) {
        if (style.hasOwnProperty(propKey)) {
          domEl.style[propKey] = style[propKey];
        }
      }

      var searchBox = _creatorsSearchBoxCreator2["default"]._createSearchBox(domEl, searchBoxProps);

      this.setState({
        inputElement: domEl,
        searchBox: searchBox
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var mapHolderRef = _props2.mapHolderRef;
      var controlPosition = _props2.controlPosition;

      return this.state.searchBox ? _react2["default"].createElement(
        _creatorsSearchBoxCreator2["default"],
        _extends({ controlPosition: controlPosition, inputElement: this.state.inputElement, mapHolderRef: mapHolderRef, searchBox: this.state.searchBox }, this.props),
        this.props.children
      ) : _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsSearchBoxCreator.searchBoxDefaultPropTypes, _creatorsSearchBoxCreator.searchBoxControlledPropTypes, _creatorsSearchBoxCreator.searchBoxEventPropTypes),
    enumerable: true
  }]);

  return SearchBox;
})(_react.Component);

exports["default"] = SearchBox;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
},{"./creators/SearchBoxCreator":100,"can-use-dom":120,"react":"react"}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsCircleEventList = require("../eventLists/CircleEventList");

var _eventListsCircleEventList2 = _interopRequireDefault(_eventListsCircleEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var circleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  center: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  radius: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};

exports.circleControlledPropTypes = circleControlledPropTypes;
var circleDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(circleControlledPropTypes);

exports.circleDefaultPropTypes = circleDefaultPropTypes;
var circleUpdaters = {
  center: function center(_center, component) {
    component.getCircle().setCenter(_center);
  },
  draggable: function draggable(_draggable, component) {
    component.getCircle().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getCircle().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getCircle().setOptions(_options);
  },
  radius: function radius(_radius, component) {
    component.getCircle().setRadius(_radius);
  },
  visible: function visible(_visible, component) {
    component.getCircle().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsCircleEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var circleEventPropTypes = eventPropTypes;

exports.circleEventPropTypes = circleEventPropTypes;

var CircleCreator = (function (_Component) {
  _inherits(CircleCreator, _Component);

  function CircleCreator() {
    _classCallCheck(this, _CircleCreator);

    _get(Object.getPrototypeOf(_CircleCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CircleCreator, [{
    key: "getCircle",
    value: function getCircle() {
      return this.props.circle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createCircle",
    value: function _createCircle(circleProps) {
      var mapHolderRef = circleProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
      var circle = new google.maps.Circle((0, _utilsComposeOptions2["default"])(circleProps, circleControlledPropTypes));

      circle.setMap(mapHolderRef.getMap());

      return circle;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      circle: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _CircleCreator = CircleCreator;
  CircleCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getCircle",
    updaters: circleUpdaters
  })(CircleCreator) || CircleCreator;
  return CircleCreator;
})(_react.Component);

exports["default"] = CircleCreator;
},{"../eventLists/CircleEventList":101,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsDirectionsRendererEventList = require("../eventLists/DirectionsRendererEventList");

var _eventListsDirectionsRendererEventList2 = _interopRequireDefault(_eventListsDirectionsRendererEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var directionsRendererControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: _react.PropTypes.any,
  options: _react.PropTypes.object,
  panel: _react.PropTypes.object,
  routeIndex: _react.PropTypes.number
};

exports.directionsRendererControlledPropTypes = directionsRendererControlledPropTypes;
var directionsRendererDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(directionsRendererControlledPropTypes);

exports.directionsRendererDefaultPropTypes = directionsRendererDefaultPropTypes;
var directionsRendererUpdaters = {
  directions: function directions(_directions, component) {
    component.getDirectionsRenderer().setDirections(_directions);
  },
  options: function options(_options, component) {
    component.getDirectionsRenderer().setOptions(_options);
  },
  panel: function panel(_panel, component) {
    component.getDirectionsRenderer().setPanel(_panel);
  },
  routeIndex: function routeIndex(_routeIndex, component) {
    component.getDirectionsRenderer().setRouteIndex(_routeIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsDirectionsRendererEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var directionsRendererEventPropTypes = eventPropTypes;

exports.directionsRendererEventPropTypes = directionsRendererEventPropTypes;

var DirectionsRendererCreator = (function (_Component) {
  _inherits(DirectionsRendererCreator, _Component);

  function DirectionsRendererCreator() {
    _classCallCheck(this, _DirectionsRendererCreator);

    _get(Object.getPrototypeOf(_DirectionsRendererCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DirectionsRendererCreator, [{
    key: "getDirectionsRenderer",
    value: function getDirectionsRenderer() {
      return this.props.directionsRenderer;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (_react.Children.count(children) > 0) {
        // TODO: take a look at DirectionsRendererOptions#infoWindow and DirectionsRendererOptions#markerOptions ?
        return _react2["default"].createElement(
          "div",
          null,
          children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createDirectionsRenderer",
    value: function _createDirectionsRenderer(directionsRendererProps) {
      var mapHolderRef = directionsRendererProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
      var directionsRenderer = new google.maps.DirectionsRenderer((0, _utilsComposeOptions2["default"])(directionsRendererProps, directionsRendererControlledPropTypes));

      directionsRenderer.setMap(mapHolderRef.getMap());

      return directionsRenderer;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      directionsRenderer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _DirectionsRendererCreator = DirectionsRendererCreator;
  DirectionsRendererCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getDirectionsRenderer",
    updaters: directionsRendererUpdaters
  })(DirectionsRendererCreator) || DirectionsRendererCreator;
  return DirectionsRendererCreator;
})(_react.Component);

exports["default"] = DirectionsRendererCreator;
},{"../eventLists/DirectionsRendererEventList":102,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsDrawingManagerEventList = require("../eventLists/DrawingManagerEventList");

var _eventListsDrawingManagerEventList2 = _interopRequireDefault(_eventListsDrawingManagerEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var drawingManagerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  drawingMode: _react.PropTypes.any,
  options: _react.PropTypes.object
};

exports.drawingManagerControlledPropTypes = drawingManagerControlledPropTypes;
var drawingManagerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(drawingManagerControlledPropTypes);

exports.drawingManagerDefaultPropTypes = drawingManagerDefaultPropTypes;
var drawingManagerUpdaters = {
  drawingMode: function drawingMode(_drawingMode, component) {
    component.getDrawingManager().setDrawingMode(_drawingMode);
  },
  options: function options(_options, component) {
    component.getDrawingManager().setOptions(_options);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsDrawingManagerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var drawingManagerEventPropTypes = eventPropTypes;

exports.drawingManagerEventPropTypes = drawingManagerEventPropTypes;

var DrawingManagerCreator = (function (_Component) {
  _inherits(DrawingManagerCreator, _Component);

  function DrawingManagerCreator() {
    _classCallCheck(this, _DrawingManagerCreator);

    _get(Object.getPrototypeOf(_DrawingManagerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DrawingManagerCreator, [{
    key: "getDrawingManager",
    value: function getDrawingManager() {
      return this.props.drawingManager;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createDrawingManager",
    value: function _createDrawingManager(drawingManagerProps) {
      var mapHolderRef = drawingManagerProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
      var drawingManager = new google.maps.drawing.DrawingManager((0, _utilsComposeOptions2["default"])(drawingManagerProps, drawingManagerControlledPropTypes));

      drawingManager.setMap(mapHolderRef.getMap());

      return drawingManager;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      drawingManager: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _DrawingManagerCreator = DrawingManagerCreator;
  DrawingManagerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getDrawingManager",
    updaters: drawingManagerUpdaters
  })(DrawingManagerCreator) || DrawingManagerCreator;
  return DrawingManagerCreator;
})(_react.Component);

exports["default"] = DrawingManagerCreator;
},{"../eventLists/DrawingManagerEventList":103,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _eventListsGoogleMapEventList = require("../eventLists/GoogleMapEventList");

var _eventListsGoogleMapEventList2 = _interopRequireDefault(_eventListsGoogleMapEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var mapControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  center: _react.PropTypes.object,
  heading: _react.PropTypes.number,
  mapTypeId: _react.PropTypes.any,
  options: _react.PropTypes.object,
  streetView: _react.PropTypes.any,
  tilt: _react.PropTypes.number,
  zoom: _react.PropTypes.number
};

exports.mapControlledPropTypes = mapControlledPropTypes;
var mapDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(mapControlledPropTypes);

exports.mapDefaultPropTypes = mapDefaultPropTypes;
var mapUpdaters = {
  center: function center(_center, component) {
    component.getMap().setCenter(_center);
  },
  heading: function heading(_heading, component) {
    component.getMap().setHeading(_heading);
  },
  mapTypeId: function mapTypeId(_mapTypeId, component) {
    component.getMap().setMapTypeId(_mapTypeId);
  },
  options: function options(_options, component) {
    component.getMap().setOptions(_options);
  },
  streetView: function streetView(_streetView, component) {
    component.getMap().setStreetView(_streetView);
  },
  tilt: function tilt(_tilt, component) {
    component.getMap().setTilt(_tilt);
  },
  zoom: function zoom(_zoom, component) {
    component.getMap().setZoom(_zoom);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsGoogleMapEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var mapEventPropTypes = eventPropTypes;

exports.mapEventPropTypes = mapEventPropTypes;

var GoogleMapHolder = (function (_Component) {
  _inherits(GoogleMapHolder, _Component);

  function GoogleMapHolder() {
    _classCallCheck(this, _GoogleMapHolder);

    _get(Object.getPrototypeOf(_GoogleMapHolder.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleMapHolder, [{
    key: "getMap",
    value: function getMap() {
      return this.props.map;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react2["default"].createElement(
        "div",
        null,
        _react.Children.map(this.props.children, function (childElement) {
          if (_react2["default"].isValidElement(childElement)) {
            return _react2["default"].cloneElement(childElement, {
              mapHolderRef: _this
            });
          } else {
            return childElement;
          }
        })
      );
    }
  }], [{
    key: "_createMap",
    value: function _createMap(domEl, mapProps) {
      (0, _warning2["default"])("undefined" !== typeof google, "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168");
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
      return new google.maps.Map(domEl, (0, _utilsComposeOptions2["default"])(mapProps, mapControlledPropTypes));
    }
  }, {
    key: "propTypes",
    value: {
      map: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _GoogleMapHolder = GoogleMapHolder;
  GoogleMapHolder = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getMap",
    updaters: mapUpdaters
  })(GoogleMapHolder) || GoogleMapHolder;
  return GoogleMapHolder;
})(_react.Component);

exports["default"] = GoogleMapHolder;
},{"../eventLists/GoogleMapEventList":104,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"react":"react","warning":122}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsInfoWindowEventList = require("../eventLists/InfoWindowEventList");

var _eventListsInfoWindowEventList2 = _interopRequireDefault(_eventListsInfoWindowEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsSetContentForOptionalReactElement = require("../utils/setContentForOptionalReactElement");

var _utilsSetContentForOptionalReactElement2 = _interopRequireDefault(_utilsSetContentForOptionalReactElement);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var infoWindowControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  zIndex: _react.PropTypes.number
};

exports.infoWindowControlledPropTypes = infoWindowControlledPropTypes;
var infoWindowDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(infoWindowControlledPropTypes);

exports.infoWindowDefaultPropTypes = infoWindowDefaultPropTypes;
var infoWindowUpdaters = {
  children: function children(_children, component) {
    (0, _utilsSetContentForOptionalReactElement2["default"])(_children, component.getInfoWindow());
  },
  content: function content(_content, component) {
    component.getInfoWindow().setContent(_content);
  },
  options: function options(_options, component) {
    component.getInfoWindow().setOptions(_options);
  },
  position: function position(_position, component) {
    component.getInfoWindow().setPosition(_position);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getInfoWindow().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsInfoWindowEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var infoWindowEventPropTypes = eventPropTypes;

exports.infoWindowEventPropTypes = infoWindowEventPropTypes;

var InfoWindowCreator = (function (_Component) {
  _inherits(InfoWindowCreator, _Component);

  function InfoWindowCreator() {
    _classCallCheck(this, _InfoWindowCreator);

    _get(Object.getPrototypeOf(_InfoWindowCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(InfoWindowCreator, [{
    key: "getInfoWindow",
    value: function getInfoWindow() {
      return this.props.infoWindow;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createInfoWindow",
    value: function _createInfoWindow(infoWindowProps) {
      var mapHolderRef = infoWindowProps.mapHolderRef;
      var anchorHolderRef = infoWindowProps.anchorHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
      var infoWindow = new google.maps.InfoWindow((0, _utilsComposeOptions2["default"])(infoWindowProps, infoWindowControlledPropTypes));

      if (infoWindowProps.children) {
        (0, _utilsSetContentForOptionalReactElement2["default"])(infoWindowProps.children, infoWindow);
      }

      if (anchorHolderRef) {
        infoWindow.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
      } else {
        infoWindow.setMap(mapHolderRef.getMap());
      }

      return infoWindow;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      infoWindow: _react.PropTypes.object.isRequired,
      anchorHolderRef: _react.PropTypes.object
    },
    enumerable: true
  }]);

  var _InfoWindowCreator = InfoWindowCreator;
  InfoWindowCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getInfoWindow",
    updaters: infoWindowUpdaters
  })(InfoWindowCreator) || InfoWindowCreator;
  return InfoWindowCreator;
})(_react.Component);

exports["default"] = InfoWindowCreator;
},{"../eventLists/InfoWindowEventList":105,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"../utils/setContentForOptionalReactElement":119,"./GoogleMapHolder":92,"react":"react"}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsKmlLayerEventList = require("../eventLists/KmlLayerEventList");

var _eventListsKmlLayerEventList2 = _interopRequireDefault(_eventListsKmlLayerEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var kmlLayerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: _react.PropTypes.any,
  metadata: _react.PropTypes.any,
  status: _react.PropTypes.any,
  url: _react.PropTypes.string,
  zIndex: _react.PropTypes.number
};

exports.kmlLayerControlledPropTypes = kmlLayerControlledPropTypes;
var kmlLayerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(kmlLayerControlledPropTypes);

exports.kmlLayerDefaultPropTypes = kmlLayerDefaultPropTypes;
var kmlLayerUpdaters = {
  defaultViewport: function defaultViewport(_defaultViewport, component) {
    component.getKmlLayer().setDefaultViewport(_defaultViewport);
  },
  metadata: function metadata(_metadata, component) {
    component.getKmlLayer().setMetadata(_metadata);
  },
  status: function status(_status, component) {
    component.getKmlLayer().setStatus(_status);
  },
  url: function url(_url, component) {
    component.getKmlLayer().setUrl(_url);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getKmlLayer().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsKmlLayerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var kmlLayerEventPropTypes = eventPropTypes;

exports.kmlLayerEventPropTypes = kmlLayerEventPropTypes;

var KmlLayerCreator = (function (_Component) {
  _inherits(KmlLayerCreator, _Component);

  function KmlLayerCreator() {
    _classCallCheck(this, _KmlLayerCreator);

    _get(Object.getPrototypeOf(_KmlLayerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(KmlLayerCreator, [{
    key: "getKmlLayer",
    value: function getKmlLayer() {
      return this.props.kmlLayer;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (_react.Children.count(children) > 0) {
        return _react2["default"].createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2["default"].cloneElement(childElement, {
              mapHolderRef: mapHolderRef
            });
          })
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createKmlLayer",
    value: function _createKmlLayer(kmlLayerProps) {
      var mapHolderRef = kmlLayerProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
      var kmlLayer = new google.maps.KmlLayer((0, _utilsComposeOptions2["default"])(kmlLayerProps, kmlLayerControlledPropTypes));

      kmlLayer.setMap(mapHolderRef.getMap());

      return kmlLayer;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      kmlLayer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _KmlLayerCreator = KmlLayerCreator;
  KmlLayerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getKmlLayer",
    updaters: kmlLayerUpdaters
  })(KmlLayerCreator) || KmlLayerCreator;
  return KmlLayerCreator;
})(_react.Component);

exports["default"] = KmlLayerCreator;
},{"../eventLists/KmlLayerEventList":106,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsMarkerEventList = require("../eventLists/MarkerEventList");

var _eventListsMarkerEventList2 = _interopRequireDefault(_eventListsMarkerEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var markerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  animation: _react.PropTypes.any,
  attribution: _react.PropTypes.any,
  clickable: _react.PropTypes.bool,
  cursor: _react.PropTypes.string,
  draggable: _react.PropTypes.bool,
  icon: _react.PropTypes.any,
  label: _react.PropTypes.any,
  opacity: _react.PropTypes.number,
  options: _react.PropTypes.object,
  place: _react.PropTypes.any,
  position: _react.PropTypes.any,
  shape: _react.PropTypes.any,
  title: _react.PropTypes.string,
  visible: _react.PropTypes.bool,
  zIndex: _react.PropTypes.number
};

exports.markerControlledPropTypes = markerControlledPropTypes;
var markerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(markerControlledPropTypes);

exports.markerDefaultPropTypes = markerDefaultPropTypes;
var markerUpdaters = {
  animation: function animation(_animation, component) {
    component.getMarker().setAnimation(_animation);
  },
  attribution: function attribution(_attribution, component) {
    component.getMarker().setAttribution(_attribution);
  },
  clickable: function clickable(_clickable, component) {
    component.getMarker().setClickable(_clickable);
  },
  cursor: function cursor(_cursor, component) {
    component.getMarker().setCursor(_cursor);
  },
  draggable: function draggable(_draggable, component) {
    component.getMarker().setDraggable(_draggable);
  },
  icon: function icon(_icon, component) {
    component.getMarker().setIcon(_icon);
  },
  label: function label(_label, component) {
    component.getMarker().setLabel(_label);
  },
  opacity: function opacity(_opacity, component) {
    component.getMarker().setOpacity(_opacity);
  },
  options: function options(_options, component) {
    component.getMarker().setOptions(_options);
  },
  place: function place(_place, component) {
    component.getMarker().setPlace(_place);
  },
  position: function position(_position, component) {
    component.getMarker().setPosition(_position);
  },
  shape: function shape(_shape, component) {
    component.getMarker().setShape(_shape);
  },
  title: function title(_title, component) {
    component.getMarker().setTitle(_title);
  },
  visible: function visible(_visible, component) {
    component.getMarker().setVisible(_visible);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getMarker().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsMarkerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var markerEventPropTypes = eventPropTypes;

exports.markerEventPropTypes = markerEventPropTypes;

var MarkerCreator = (function (_Component) {
  _inherits(MarkerCreator, _Component);

  function MarkerCreator() {
    _classCallCheck(this, _MarkerCreator);

    _get(Object.getPrototypeOf(_MarkerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MarkerCreator, [{
    key: "getMarker",
    value: function getMarker() {
      return this.props.marker;
    }

    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindowOptions
    // In the core API, the only anchor is the Marker class.
  }, {
    key: "getAnchor",
    value: function getAnchor() {
      return this.props.marker;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (_react.Children.count(children) > 0) {
        return _react2["default"].createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2["default"].cloneElement(childElement, {
              mapHolderRef: mapHolderRef,
              anchorHolderRef: _this
            });
          })
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createMarker",
    value: function _createMarker(markerProps) {
      var mapHolderRef = markerProps.mapHolderRef;
      var anchorHolderRef = markerProps.anchorHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
      var marker = new google.maps.Marker((0, _utilsComposeOptions2["default"])(markerProps, markerControlledPropTypes));

      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().addMarker(marker);
        }
      } else {
        marker.setMap(mapHolderRef.getMap());
      }

      return marker;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      marker: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _MarkerCreator = MarkerCreator;
  MarkerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getMarker",
    updaters: markerUpdaters
  })(MarkerCreator) || MarkerCreator;
  return MarkerCreator;
})(_react.Component);

exports["default"] = MarkerCreator;
},{"../eventLists/MarkerEventList":107,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var overlayViewControlledPropTypes = {
  // CustomProps
  mapPaneName: _react.PropTypes.string,
  getPixelPositionOffset: _react.PropTypes.func,
  position: _react.PropTypes.object,
  children: _react.PropTypes.node,
  bounds: _react.PropTypes.object
};

exports.overlayViewControlledPropTypes = overlayViewControlledPropTypes;
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference
var overlayViewDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(overlayViewControlledPropTypes);

exports.overlayViewDefaultPropTypes = overlayViewDefaultPropTypes;

var OverlayViewCreator = (function (_Component) {
  _inherits(OverlayViewCreator, _Component);

  function OverlayViewCreator() {
    _classCallCheck(this, OverlayViewCreator);

    _get(Object.getPrototypeOf(OverlayViewCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(OverlayViewCreator, [{
    key: "getOverlayView",
    value: function getOverlayView() {
      return this.props.overlayView;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getOverlayView().setMap(this.props.mapHolderRef.getMap());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.getOverlayView().setValues(this.props);
      this.getOverlayView()._redraw(this.props.mapPaneName !== prevProps.mapPaneName);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.getOverlayView().setMap(null);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createOverlayView",
    value: function _createOverlayView(overlayViewProps) {
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
      var overlayView = new google.maps.OverlayView();
      overlayView.setValues((0, _utilsComposeOptions2["default"])(overlayViewProps, overlayViewControlledPropTypes));

      overlayView.onAdd = function onAdd() {
        this._containerElement = document.createElement("div");
        this._containerElement.style.position = "absolute";
      };

      overlayView.draw = function draw() {
        this._mountContainerToPane();
        this._renderContent();
      };

      overlayView.onRemove = function onRemove() {
        (0, _reactDom.unmountComponentAtNode)(this._containerElement);
        this._unmountContainerFromPane();
        this._containerElement = null;
      };

      overlayView._redraw = function _redraw(mapPaneNameChanged) {
        if (mapPaneNameChanged) {
          this._unmountContainerFromPane();
          this._mountContainerToPane();
        }
        this._renderContent();
      };

      overlayView._renderContent = function _renderContent() {
        if (this._containerElement) {
          (0, _reactDom.render)(_react.Children.only(this.get("children")), this._containerElement, this._positionContainerElement.bind(this));
        }
      };

      overlayView._mountContainerToPane = function _mountContainerToPane() {
        var mapPaneName = this.get("mapPaneName");
        (0, _invariant2["default"])(!!mapPaneName, "OverlayView requires a mapPaneName/defaultMapPaneName in your props instead of %s", mapPaneName);

        this.getPanes()[mapPaneName].appendChild(this._containerElement);
      };

      overlayView._unmountContainerFromPane = function _unmountContainerFromPane() {
        this._containerElement.parentNode.removeChild(this._containerElement);
      };

      overlayView._positionContainerElement = function _positionContainerElement() {
        var left = undefined;
        var top = undefined;
        var offset = this._getOffset();
        if (this.get("bounds")) {
          var bounds = this._getPixelBounds();
          if (bounds) {
            var sw = bounds.sw;
            var ne = bounds.ne;

            if (offset) {
              sw.x += offset.x;
              ne.y += offset.y;
            }
            left = sw.x + "px";
            top = ne.y + "px";
            this._containerElement.style.width = ne.x - sw.x + "px";
            this._containerElement.style.height = sw.y - ne.y + "px";
          }
        } else {
          var position = this._getPixelPosition();
          if (position) {
            var x = position.x;
            var y = position.y;

            if (offset) {
              x += offset.x;
              y += offset.y;
            }
            left = x + "px";
            top = y + "px";
          }
        }

        this._containerElement.style.left = left;
        this._containerElement.style.top = top;
      };

      overlayView._getPixelPosition = function _getPixelPosition() {
        var projection = this.getProjection();
        var position = this.get("position");
        (0, _invariant2["default"])(!!position, "OverlayView requires a position/defaultPosition in your props instead of %s", position);
        if (projection && position) {
          if (!(position instanceof google.maps.LatLng)) {
            position = new google.maps.LatLng(position.lat, position.lng);
          }
          return projection.fromLatLngToDivPixel(position);
        }
      };

      overlayView._getPixelBounds = function _getPixelBounds() {
        var projection = this.getProjection();
        var bounds = this.get("bounds");
        (0, _invariant2["default"])(!!bounds, "OverlayView requires a bounds in your props instead of %s", bounds);
        if (projection && bounds) {
          if (!(bounds instanceof google.maps.LatLngBounds)) {
            bounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.ne.lat, bounds.ne.lng), new google.maps.LatLng(bounds.sw.lat, bounds.sw.lng));
          }
          return {
            sw: projection.fromLatLngToDivPixel(this.bounds.getSouthWest()),
            ne: projection.fromLatLngToDivPixel(this.bounds.getNorthEast())
          };
        }
      };

      overlayView._getOffset = function _getOffset() {
        // Allows the component to control the visual position of the OverlayView
        // relative to the LatLng pixel position.
        var getPixelPositionOffset = this.get("getPixelPositionOffset");
        if (getPixelPositionOffset) {
          return getPixelPositionOffset(this._containerElement.offsetWidth, this._containerElement.offsetHeight);
        }
      };

      return overlayView;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      mapPaneName: _react.PropTypes.string,
      overlayView: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  return OverlayViewCreator;
})(_react.Component);

exports["default"] = OverlayViewCreator;
},{"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"./GoogleMapHolder":92,"invariant":121,"react":"react","react-dom":"react-dom"}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsPolygonEventList = require("../eventLists/PolygonEventList");

var _eventListsPolygonEventList2 = _interopRequireDefault(_eventListsPolygonEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var polygonControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  paths: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

exports.polygonControlledPropTypes = polygonControlledPropTypes;
var polygonDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(polygonControlledPropTypes);

exports.polygonDefaultPropTypes = polygonDefaultPropTypes;
var polygonUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getPolygon().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getPolygon().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getPolygon().setOptions(_options);
  },
  path: function path(_path, component) {
    component.getPolygon().setPath(_path);
  },
  paths: function paths(_paths, component) {
    component.getPolygon().setPaths(_paths);
  },
  visible: function visible(_visible, component) {
    component.getPolygon().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsPolygonEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var polygonEventPropTypes = eventPropTypes;

exports.polygonEventPropTypes = polygonEventPropTypes;

var PolygonCreator = (function (_Component) {
  _inherits(PolygonCreator, _Component);

  function PolygonCreator() {
    _classCallCheck(this, _PolygonCreator);

    _get(Object.getPrototypeOf(_PolygonCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PolygonCreator, [{
    key: "getPolygon",
    value: function getPolygon() {
      return this.props.polygon;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createPolygon",
    value: function _createPolygon(polygonProps) {
      var mapHolderRef = polygonProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
      var polygon = new google.maps.Polygon((0, _utilsComposeOptions2["default"])(polygonProps, polygonControlledPropTypes));

      polygon.setMap(mapHolderRef.getMap());

      return polygon;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      polygon: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _PolygonCreator = PolygonCreator;
  PolygonCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getPolygon",
    updaters: polygonUpdaters
  })(PolygonCreator) || PolygonCreator;
  return PolygonCreator;
})(_react.Component);

exports["default"] = PolygonCreator;
},{"../eventLists/PolygonEventList":108,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsPolylineEventList = require("../eventLists/PolylineEventList");

var _eventListsPolylineEventList2 = _interopRequireDefault(_eventListsPolylineEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var polylineControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

exports.polylineControlledPropTypes = polylineControlledPropTypes;
var polylineDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(polylineControlledPropTypes);

exports.polylineDefaultPropTypes = polylineDefaultPropTypes;
var polylineUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getPolyline().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getPolyline().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getPolyline().setOptions(_options);
  },
  path: function path(_path, component) {
    component.getPolyline().setPath(_path);
  },
  visible: function visible(_visible, component) {
    component.getPolyline().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsPolylineEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var polylineEventPropTypes = eventPropTypes;

exports.polylineEventPropTypes = polylineEventPropTypes;

var PolylineCreator = (function (_Component) {
  _inherits(PolylineCreator, _Component);

  function PolylineCreator() {
    _classCallCheck(this, _PolylineCreator);

    _get(Object.getPrototypeOf(_PolylineCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PolylineCreator, [{
    key: "getPolyline",
    value: function getPolyline() {
      return this.props.polyline;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createPolyline",
    value: function _createPolyline(polylineProps) {
      var mapHolderRef = polylineProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
      var polyline = new google.maps.Polyline((0, _utilsComposeOptions2["default"])(polylineProps, polylineControlledPropTypes));

      polyline.setMap(mapHolderRef.getMap());

      return polyline;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      polyline: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _PolylineCreator = PolylineCreator;
  PolylineCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getPolyline",
    updaters: polylineUpdaters
  })(PolylineCreator) || PolylineCreator;
  return PolylineCreator;
})(_react.Component);

exports["default"] = PolylineCreator;
},{"../eventLists/PolylineEventList":109,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsRectangleEventList = require("../eventLists/RectangleEventList");

var _eventListsRectangleEventList2 = _interopRequireDefault(_eventListsRectangleEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var rectangleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  bounds: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  visible: _react.PropTypes.bool
};

exports.rectangleControlledPropTypes = rectangleControlledPropTypes;
var rectangleDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(rectangleControlledPropTypes);

exports.rectangleDefaultPropTypes = rectangleDefaultPropTypes;
var rectangleUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getRectangle().setBounds(_bounds);
  },
  draggable: function draggable(_draggable, component) {
    component.getRectangle().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getRectangle().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getRectangle().setOptions(_options);
  },
  visible: function visible(_visible, component) {
    component.getRectangle().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsRectangleEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var rectangleEventPropTypes = eventPropTypes;

exports.rectangleEventPropTypes = rectangleEventPropTypes;

var RectangleCreator = (function (_Component) {
  _inherits(RectangleCreator, _Component);

  function RectangleCreator() {
    _classCallCheck(this, _RectangleCreator);

    _get(Object.getPrototypeOf(_RectangleCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(RectangleCreator, [{
    key: "getRectangle",
    value: function getRectangle() {
      return this.props.rectangle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createRectangle",
    value: function _createRectangle(rectangleProps) {
      var mapHolderRef = rectangleProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
      var rectangle = new google.maps.Rectangle((0, _utilsComposeOptions2["default"])(rectangleProps, rectangleControlledPropTypes));

      rectangle.setMap(mapHolderRef.getMap());

      return rectangle;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      rectangle: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _RectangleCreator = RectangleCreator;
  RectangleCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getRectangle",
    updaters: rectangleUpdaters
  })(RectangleCreator) || RectangleCreator;
  return RectangleCreator;
})(_react.Component);

exports["default"] = RectangleCreator;
},{"../eventLists/RectangleEventList":110,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsSearchBoxEventList = require("../eventLists/SearchBoxEventList");

var _eventListsSearchBoxEventList2 = _interopRequireDefault(_eventListsSearchBoxEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var searchBoxControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  bounds: _react.PropTypes.any
};

exports.searchBoxControlledPropTypes = searchBoxControlledPropTypes;
var searchBoxDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(searchBoxControlledPropTypes);

exports.searchBoxDefaultPropTypes = searchBoxDefaultPropTypes;
var searchBoxUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getSearchBox().setBounds(_bounds);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsSearchBoxEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var searchBoxEventPropTypes = eventPropTypes;

exports.searchBoxEventPropTypes = searchBoxEventPropTypes;

var SearchBoxCreator = (function (_Component) {
  _inherits(SearchBoxCreator, _Component);

  function SearchBoxCreator() {
    _classCallCheck(this, _SearchBoxCreator);

    _get(Object.getPrototypeOf(_SearchBoxCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(SearchBoxCreator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mountComponentToMap(this.props.controlPosition);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.controlPosition !== prevProps.controlPosition) {
        this._unmountComponentFromMap(prevProps.controlPosition);
        this._mountComponentToMap(this.props.controlPosition);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmountComponentFromMap(this.props.controlPosition);
    }
  }, {
    key: "_mountComponentToMap",
    value: function _mountComponentToMap(controlPosition) {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var inputElement = _props.inputElement;

      mapHolderRef.getMap().controls[controlPosition].push(inputElement);
    }
  }, {
    key: "_unmountComponentFromMap",
    value: function _unmountComponentFromMap(controlPosition) {
      var _props2 = this.props;
      var mapHolderRef = _props2.mapHolderRef;
      var inputElement = _props2.inputElement;

      var index = mapHolderRef.getMap().controls[controlPosition].getArray().indexOf(inputElement);
      mapHolderRef.getMap().controls[controlPosition].removeAt(index);
    }
  }, {
    key: "getSearchBox",
    value: function getSearchBox() {
      return this.props.searchBox;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createSearchBox",
    value: function _createSearchBox(inputElement, searchBoxProps) {
      var searchBox = new google.maps.places.SearchBox(inputElement, (0, _utilsComposeOptions2["default"])(searchBoxProps, searchBoxControlledPropTypes));

      return searchBox;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      searchBox: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _SearchBoxCreator = SearchBoxCreator;
  SearchBoxCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getSearchBox",
    updaters: searchBoxUpdaters
  })(SearchBoxCreator) || SearchBoxCreator;
  return SearchBoxCreator;
})(_react.Component);

exports["default"] = SearchBoxCreator;
},{"../eventLists/SearchBoxEventList":111,"../utils/componentLifecycleDecorator":114,"../utils/composeOptions":115,"../utils/defaultPropsCreator":117,"../utils/eventHandlerCreator":118,"./GoogleMapHolder":92,"react":"react"}],101:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "radius_changed", "rightclick"];
module.exports = exports["default"];
},{}],102:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["directions_changed"];
module.exports = exports["default"];
},{}],103:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["circlecomplete", "markercomplete", "overlaycomplete", "polygoncomplete", "polylinecomplete", "rectanglecomplete"];
module.exports = exports["default"];
},{}],104:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "heading_changed", "idle", "maptypeid_changed", "mousemove", "mouseout", "mouseover", "projection_changed", "resize", "rightclick", "tilesloaded", "tilt_changed", "zoom_changed"];
module.exports = exports["default"];
},{}],105:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"];
module.exports = exports["default"];
},{}],106:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["click", "defaultviewport_changed", "status_changed"];
module.exports = exports["default"];
},{}],107:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["animation_changed", "click", "clickable_changed", "cursor_changed", "dblclick", "drag", "dragend", "draggable_changed", "dragstart", "flat_changed", "icon_changed", "mousedown", "mouseout", "mouseover", "mouseup", "position_changed", "rightclick", "shape_changed", "title_changed", "visible_changed", "zindex_changed"];
module.exports = exports["default"];
},{}],108:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
module.exports = exports["default"];
},{}],109:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
module.exports = exports["default"];
},{}],110:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["bounds_changed", "click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
module.exports = exports["default"];
},{}],111:[function(require,module,exports){
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["places_changed"];
module.exports = exports["default"];
},{}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

var _GoogleMapLoader = require("./GoogleMapLoader");

exports.GoogleMapLoader = _interopRequire(_GoogleMapLoader);

var _GoogleMap = require("./GoogleMap");

exports.GoogleMap = _interopRequire(_GoogleMap);

var _Circle = require("./Circle");

exports.Circle = _interopRequire(_Circle);

var _DirectionsRenderer = require("./DirectionsRenderer");

exports.DirectionsRenderer = _interopRequire(_DirectionsRenderer);

var _DrawingManager = require("./DrawingManager");

exports.DrawingManager = _interopRequire(_DrawingManager);

var _InfoWindow = require("./InfoWindow");

exports.InfoWindow = _interopRequire(_InfoWindow);

var _KmlLayer = require("./KmlLayer");

exports.KmlLayer = _interopRequire(_KmlLayer);

var _Marker = require("./Marker");

exports.Marker = _interopRequire(_Marker);

var _OverlayView = require("./OverlayView");

exports.OverlayView = _interopRequire(_OverlayView);

var _Polygon = require("./Polygon");

exports.Polygon = _interopRequire(_Polygon);

var _Polyline = require("./Polyline");

exports.Polyline = _interopRequire(_Polyline);

var _Rectangle = require("./Rectangle");

exports.Rectangle = _interopRequire(_Rectangle);

var _SearchBox = require("./SearchBox");

exports.SearchBox = _interopRequire(_SearchBox);
},{"./Circle":76,"./DirectionsRenderer":77,"./DrawingManager":78,"./GoogleMap":79,"./GoogleMapLoader":80,"./InfoWindow":81,"./KmlLayer":82,"./Marker":83,"./OverlayView":84,"./Polygon":85,"./Polyline":86,"./Rectangle":87,"./SearchBox":88}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addDefaultPrefix;

function addDefaultPrefix(name) {
  return "default" + (name[0].toUpperCase() + name.slice(1));
}

module.exports = exports["default"];
},{}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = componentLifecycleDecorator;

function componentLifecycleDecorator(_ref) {
  var registerEvents = _ref.registerEvents;
  var instanceMethodName = _ref.instanceMethodName;
  var updaters = _ref.updaters;

  // This modify the Component.prototype directly
  return function (Component) {
    function register() {
      this._unregisterEvents = registerEvents(google.maps.event, this.props, this[instanceMethodName]());
    }

    function unregister() {
      if (this._unregisterEvents) {
        this._unregisterEvents();
        this._unregisterEvents = null;
      }
    }

    function noop() {}

    // Stash component's own lifecycle methods to be invoked later
    var componentDidMount = Component.prototype.hasOwnProperty("componentDidMount") ? Component.prototype.componentDidMount : noop;
    var componentDidUpdate = Component.prototype.hasOwnProperty("componentDidUpdate") ? Component.prototype.componentDidUpdate : noop;
    var componentWillUnmount = Component.prototype.hasOwnProperty("componentWillUnmount") ? Component.prototype.componentWillUnmount : noop;

    Object.defineProperty(Component.prototype, "componentDidMount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        // Hook into client's implementation, if it has any
        componentDidMount.call(this);

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentDidUpdate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(prevProps) {
        unregister.call(this);

        for (var _name in updaters) {
          if (Object.prototype.hasOwnProperty.call(this.props, _name)) {
            updaters[_name](this.props[_name], this);
          }
        }

        // Hook into client's implementation, if it has any
        componentDidUpdate.call(this, prevProps);

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentWillUnmount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        // Hook into client's implementation, if it has any
        componentWillUnmount.call(this);

        unregister.call(this);
        var instance = this[instanceMethodName]();
        if ("setMap" in instance) {
          instance.setMap(null);
        }
      }
    });

    return Component;
  };
}

module.exports = exports["default"];
},{}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = composeOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _controlledOrDefault = require("./controlledOrDefault");

var _controlledOrDefault2 = _interopRequireDefault(_controlledOrDefault);

function composeOptions(props, controlledPropTypes) {
  var optionNameList = Object.keys(controlledPropTypes);
  var getter = (0, _controlledOrDefault2["default"])(props);

  // props from arguments may contain unknow props.
  // We only interested those in optionNameList
  return optionNameList.reduce(function (acc, optionName) {
    if ("options" !== optionName) {
      var value = getter(optionName);
      if ("undefined" !== typeof value) {
        acc[optionName] = value;
      }
    }
    return acc;
  }, _extends({}, getter("options")));
}

module.exports = exports["default"];
},{"./controlledOrDefault":116}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = controlledOrDefault;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _addDefaultPrefix = require("./addDefaultPrefix");

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function controlledOrDefault(props) {
  return function (name) {
    if (Object.prototype.hasOwnProperty.call(props, name)) {
      return props[name];
    } else {
      return props[(0, _addDefaultPrefix2["default"])(name)];
    }
  };
}

module.exports = exports["default"];
},{"./addDefaultPrefix":113}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultPropsCreator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _addDefaultPrefix = require("./addDefaultPrefix");

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function defaultPropsCreator(propTypes) {
  return Object.keys(propTypes).reduce(function (acc, name) {
    acc[(0, _addDefaultPrefix2["default"])(name)] = propTypes[name];
    return acc;
  }, {});
}

module.exports = exports["default"];
},{"./addDefaultPrefix":113}],118:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = eventHandlerCreator;

var _react = require("react");

function groupToUpperCase(match, group) {
  return group.toUpperCase();
}

function toOnEventName(rawName) {
  return "on" + rawName.replace(/^(.)/, groupToUpperCase).replace(/_(.)/g, groupToUpperCase);
}

function eventHandlerCreator(rawNameList) {
  var eventPropTypes = {};
  var onEventNameByRawName = {};

  rawNameList.forEach(function (rawName) {
    var onEventName = toOnEventName(rawName);
    eventPropTypes[onEventName] = _react.PropTypes.func;
    onEventNameByRawName[rawName] = onEventName;
  });

  function registerEvents(event, props, googleMapInstance) {
    var registered = rawNameList.reduce(function (acc, rawName) {
      var onEventName = onEventNameByRawName[rawName];

      if (Object.prototype.hasOwnProperty.call(props, onEventName)) {
        acc.push(event.addListener(googleMapInstance, rawName, props[onEventName]));
      }
      return acc;
    }, []);

    return registered.forEach.bind(registered, event.removeListener, event);
  }

  return {
    eventPropTypes: eventPropTypes,
    registerEvents: registerEvents
  };
}

module.exports = exports["default"];
},{"react":"react"}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setContentForOptionalReactElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function renderElement(contentElement, possiblePrevContent) {
  var prevContent = possiblePrevContent;
  if ("[object HTMLDivElement]" !== Object.prototype.toString.call(prevContent)) {
    prevContent = document.createElement("div");
  }

  (0, _reactDom.render)(contentElement, prevContent);
  return prevContent;
}

function setContentForOptionalReactElement(contentOptionalReactElement, infoWindowLikeInstance) {
  if (_react2["default"].isValidElement(contentOptionalReactElement)) {
    var contentElement = _react.Children.only(contentOptionalReactElement);
    var prevContent = infoWindowLikeInstance.getContent();

    var domEl = renderElement(contentElement, prevContent);
    infoWindowLikeInstance.setContent(domEl);
  } else {
    infoWindowLikeInstance.setContent(contentOptionalReactElement);
  }
}

module.exports = exports["default"];
},{"react":"react","react-dom":"react-dom"}],120:[function(require,module,exports){
var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;
},{}],121:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":57}],122:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":57}]},{},[53])


//# sourceMappingURL=bundle.js.map
