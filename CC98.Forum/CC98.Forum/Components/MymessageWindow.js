"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require("react");
var MymessageSender_1 = require("./MymessageSender");
var MymessageReceiver_1 = require("./MymessageReceiver");
var MymessageWindow = (function (_super) {
    __extends(MymessageWindow, _super);
    function MymessageWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.coverMymessageProps = function (item) {
            if (item.title == '回复提示' || item.title == '@提示' || item.title == '转账通知' || item.title == '系统消息' || item.title == "\u7528\u6237\uFF1A" + _this.props.myName + " \u5728\u5E16\u5B50\u4E2D\u56DE\u590D\u4E86\u4F60") {
            }
            else if (item.senderName == _this.props.chatName) {
                return React.createElement(MymessageReceiver_1.MymessageReceiver, { id: item.id, senderName: item.senderName, receiverName: item.receiverName, title: item.title, content: item.content, isRead: item.isRead, sendTime: item.sendTime, chatPortraitUrl: item.chatPortraitUrl, myPortraitUrl: item.myPortraitUrl });
            }
            else {
                return React.createElement(MymessageSender_1.MymessageSender, { id: item.id, senderName: item.senderName, receiverName: item.receiverName, title: item.title, content: item.content, isRead: item.isRead, sendTime: item.sendTime, chatPortraitUrl: item.chatPortraitUrl, myPortraitUrl: item.myPortraitUrl });
            }
        };
        _this.postMessage = function () {
            var bodyObj = { receiverName: _this.props.chatName, title: '你好', content: $('#myMessageContent').val() };
            var bodyContent = JSON.stringify(bodyObj);
            var messageId = fetch('https://api.cc98.org/Message', {
                method: 'POST',
                headers: { Authorization: "Bearer " + _this.props.token, 'content-type': 'application/json' },
                body: bodyContent
            });
            //重新获取数据并渲染
            console.log($('#myMessageContent').val());
            //这里写法有点奇怪，但是这样写才能暂停0.2秒再执行this.getMessageData，不能在setTimeout的第一个函数里直接调用this.getMessageData,那样会立即执行
            var self = _this;
            setTimeout(function () { self.getMessageData(self.props); }, 200);
            //清空输入框
            $('#myMessageContent').val('');
        };
        _this.report = function () {
            alert('举报他人恶意私信请到【论坛事务】按照格式发帖投诉，记得截图保留证据，管理员会及时进行处理！感谢您对CC98的支持！');
        };
        _this.state = { data: [] };
        _this.getMessageData = _this.getMessageData.bind(_this);
        return _this;
    }
    MymessageWindow.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getMessageData(this.props);
                return [2 /*return*/];
            });
        });
    };
    MymessageWindow.prototype.componentWillReceiveProps = function (nextProps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getMessageData(nextProps);
                return [2 /*return*/];
            });
        });
    };
    MymessageWindow.prototype.getMessageData = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, startPage, response, nowData, i, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item.chatName != '系统')) return [3 /*break*/, 6];
                        data = [];
                        startPage = -50;
                        _a.label = 1;
                    case 1:
                        startPage += 50;
                        return [4 /*yield*/, fetch("https://api.cc98.org/Message?userName=" + item.chatName + "&filter=both", {
                                headers: {
                                    Range: "bytes=" + startPage + "-" + (startPage + 49),
                                    Authorization: "Bearer " + item.token
                                }
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        nowData = _a.sent();
                        for (i in nowData) {
                            data.push(nowData[i]);
                        }
                        _a.label = 4;
                    case 4:
                        if (data.length % 50 == 0) return [3 /*break*/, 1];
                        _a.label = 5;
                    case 5:
                        //给每个数据都加上我和正在聊天者的头像的图片地址
                        for (i in data) {
                            data[i].chatPortraitUrl = item.chatPortraitUrl;
                            data[i].myPortraitUrl = item.myPortraitUrl;
                        }
                        //因为服务器上存储每条消息的时间只精确到分，所以同一分钟内的所有消息顺序正好是反的，所以需要重新排一下顺序，等樱桃把服务器上消息发送时间精确到秒之后就可以把这个步骤去掉了
                        sortArr(data);
                        this.setState({ data: data });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MymessageWindow.prototype.render = function () {
        console.log('开始render');
        return (React.createElement("div", { className: 'mymessage-message-window' },
            React.createElement("div", { className: 'mymessage-message-wHeader' },
                React.createElement("div", { className: 'mymessage-message-wReport' }),
                React.createElement("div", { className: 'mymessage-message-wTitle' },
                    "\u4E0E ",
                    this.props.chatName,
                    " \u7684\u79C1\u4FE1"),
                React.createElement("div", { className: 'mymessage-message-wReport' },
                    React.createElement("button", { onClick: this.report }, "\u4E3E\u62A5"))),
            React.createElement("div", { className: 'mymessage-message-wContent' }, this.state.data.map(this.coverMymessageProps)),
            React.createElement("div", { className: 'mymessage-message-wPost' },
                React.createElement("textarea", { className: 'mymessage-message-wPostArea', id: 'myMessageContent' }),
                React.createElement("button", { className: 'mymessage-message-wPostBtn', onClick: this.postMessage }, "\u56DE\u590D"))));
    };
    return MymessageWindow;
}(React.Component));
exports.MymessageWindow = MymessageWindow;
function sortArr(arr) {
    var s = -1;
    var e = -1;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].sendTime == arr[i + 1].sendTime && s == -1) {
            s = i;
        }
        else if (arr[i].sendTime != arr[i + 1].sendTime && s != -1) {
            e = i;
        }
        if (s != -1 && e != -1) {
            reverseArr(arr, s, e);
            s = -1;
            e = -1;
        }
    }
}
function reverseArr(arr, s, e) {
    for (var i = s; i < e; i++) {
        _a = [arr[e], arr[i]], arr[i] = _a[0], arr[e] = _a[1];
        e--;
    }
    var _a;
}
//# sourceMappingURL=MymessageWindow.js.map