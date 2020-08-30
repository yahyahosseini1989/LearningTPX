"use strict";
exports.__esModule = true;
exports.UserService = void 0;
var axios_1 = require("axios");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getAll = function () {
        return axios_1["default"].get("https://next.json-generator.com/api/json/get/NJEkPer9u");
    };
    UserService.prototype.postData = function (data) {
        return axios_1["default"].post("https://next.json-generator.com/api/json/get/NJEkPer9u", data);
    };
    UserService.prototype.deleteData = function (id) {
        return axios_1["default"]["delete"]("https://next.json-generator.com/api/json/get/NJEkPer9u", id);
    };
    return UserService;
}());
exports.UserService = UserService;
