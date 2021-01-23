"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Busy = exports.AlreadyConnected = exports.Timeout = exports.MaxTimeouts = void 0;
class MaxTimeouts extends Error {
}
exports.MaxTimeouts = MaxTimeouts;
class Timeout extends Error {
}
exports.Timeout = Timeout;
class AlreadyConnected extends Error {
}
exports.AlreadyConnected = AlreadyConnected;
class Busy extends Error {
}
exports.Busy = Busy;
