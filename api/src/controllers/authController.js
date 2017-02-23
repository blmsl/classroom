"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express_1 = require("express");
var authService_1 = require("../services/authService");
var ErrorResponse_1 = require("../helpers/ErrorResponse");
var SuccessResponse_1 = require("../helpers/SuccessResponse");
var authenticated_1 = require("../middlewares/authenticated");
var authorizedWithRole_1 = require("../middlewares/authorizedWithRole");
var router = express_1.Router();
/* GET home page. */
router.post('/authenticate', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, authService_1.authService.authenticate(req.body)];
            case 1:
                token = _a.sent();
                res.status(200);
                res.json(new SuccessResponse_1.default(token));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(401);
                res.json(new ErrorResponse_1.default(e_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/current-user', authenticated_1.authenticated, authorizedWithRole_1.authorizedWithRole('ROLE_USER'), function (req, res) {
    if (req.user) {
        res.status(200);
        res.json(new SuccessResponse_1.default(req.user));
    }
    else {
        res.status(400);
        res.json(new ErrorResponse_1.default('Something went wrong.'));
    }
});
router.get('/logout', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var token, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.body.token || req.query.token || req.headers['x-access-token'];
                return [4 /*yield*/, authService_1.authService.blacklistToken(token)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(400);
                res.json(new ErrorResponse_1.default(e_2));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;