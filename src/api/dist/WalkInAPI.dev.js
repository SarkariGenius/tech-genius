"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWalkIn = exports.deleteWalkIns = exports.addWalkIns = exports.getAllWalkInList = void 0;

var _ApiUrl = require("../config/ApiUrl");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllWalkInList = function getAllWalkInList() {
  var response;
  return regeneratorRuntime.async(function getAllWalkInList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_ApiUrl.API.GET_ALL_WALK_INS));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data.data || []);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching jobs:", _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllWalkInList = getAllWalkInList;

var addWalkIns = function addWalkIns(payload) {
  var response;
  return regeneratorRuntime.async(function addWalkIns$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(_ApiUrl.API.CREATE_WALK_IN, payload));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data.data || []);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching jobs:", _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.addWalkIns = addWalkIns;

var deleteWalkIns = function deleteWalkIns(id) {
  var responseData;
  return regeneratorRuntime.async(function deleteWalkIns$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_ApiUrl.API.DELETE_WALK_IN, "/").concat(id)));

        case 3:
          responseData = _context3.sent;
          return _context3.abrupt("return", responseData.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("error in delete Walk-Ins", _context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteWalkIns = deleteWalkIns;

var getWalkIn = function getWalkIn(id) {
  var responseData;
  return regeneratorRuntime.async(function getWalkIn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_ApiUrl.API.GET_WALK_IN, "/").concat(id)));

        case 3:
          responseData = _context4.sent;
          return _context4.abrupt("return", responseData.data);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error("error in delete Walk-Ins", _context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getWalkIn = getWalkIn;