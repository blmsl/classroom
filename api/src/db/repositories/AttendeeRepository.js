"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var BaseRepository_1 = require("./BaseRepository");
var r = require("rethinkdb");
var Attendee_1 = require("../../models/Attendee");
var MapperFactory_1 = require("../mappers/MapperFactory");
var AttendeeRepository = (function (_super) {
    __extends(AttendeeRepository, _super);
    function AttendeeRepository() {
        var _this = _super.call(this, 'users') || this;
        _this.mapper = MapperFactory_1.default.getMapper('Attendee');
        return _this;
    }
    AttendeeRepository.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getAll()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.map(function (userData) { return _this.mapper.hydrate(new Attendee_1.default(), userData); })];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, e_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AttendeeRepository.prototype.getByEmail = function (email, stripSensitive) {
        if (stripSensitive === void 0) { stripSensitive = false; }
        return __awaiter(this, void 0, void 0, function () {
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.filter({ email: email })];
                    case 1:
                        data = (_a.sent()).pop();
                        if (stripSensitive) {
                            data.stripSensitiveInfo();
                        }
                        return [2 /*return*/, this.mapper.hydrate(new Attendee_1.default(), data)];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, e_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AttendeeRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.get(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.mapper.hydrate(new Attendee_1.default(), data)];
                    case 2:
                        e_3 = _a.sent();
                        return [2 /*return*/, e_3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AttendeeRepository.prototype.getAttendeesByRole = function (role) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.filter(r.row('roles').contains(role))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.map(function (item) { return _this.mapper.hydrate(new Attendee_1.default(), item); })];
                    case 2:
                        e_4 = _a.sent();
                        return [2 /*return*/, e_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AttendeeRepository.prototype.getMapper = function () {
        return this.mapper;
    };
    return AttendeeRepository;
}(BaseRepository_1.default));
exports.AttendeeRepository = AttendeeRepository;
exports.attendeeRepository = new AttendeeRepository();
