"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var libCoord = function () {
    function libCoord(offset) {
        _classCallCheck(this, libCoord);

        this.offset = offset;
    }

    _createClass(libCoord, [{
        key: "canvasToCartesian",
        value: function canvasToCartesian(point) {
            return libCoord.canvasToCartesian(point, this.offset);
        }
    }, {
        key: "cartesianToCanvas",
        value: function cartesianToCanvas(point) {
            return libCoord.cartesianToCanvas(point, this.offset);
        }
    }, {
        key: "cartesianToPolar",
        value: function cartesianToPolar(point) {
            return libCoord.cartesianToPolar(point);
        }
    }, {
        key: "polarToCartesian",
        value: function polarToCartesian(point) {
            return libCoord.polarToCartesian(point);
        }
    }, {
        key: "polarToCanvas",
        value: function polarToCanvas(point) {
            var p2 = libCoord.polarToCartesian(point);
            return libCoord.cartesianToCanvas(p2, this.offset);
        }
    }, {
        key: "canvasToPolar",
        value: function canvasToPolar(point) {
            var p2 = libCoord.canvasToCartesian(point, this.offset);
            return libCoord.cartesianToPolar(p2);
        }
    }], [{
        key: "canvasToCartesian",
        value: function canvasToCartesian(point, offset) {
            return {
                x: point.x - offset.x,
                y: offset.y - point.y
            };
        }
    }, {
        key: "cartesianToCanvas",
        value: function cartesianToCanvas(point, offset) {
            return {
                x: point.x + offset.x,
                y: offset.y - point.y
            };
        }
    }, {
        key: "cartesianToPolar",
        value: function cartesianToPolar(point) {
            var theta = Math.atan2(point.y, point.x);
            if (point.y < 0) theta += 2 * Math.PI;
            return {
                r: Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)),
                theta: theta
            };
        }
    }, {
        key: "polarToCartesian",
        value: function polarToCartesian(point) {
            return {
                x: point.r * Math.cos(point.theta),
                y: point.r * Math.sin(point.theta)
            };
        }
    }, {
        key: "degreeToRadian",
        value: function degreeToRadian(point) {
            point.theta *= 57.2958;
            return point;
        }
    }, {
        key: "radianToDegree",
        value: function radianToDegree(point) {
            point.theta /= 57.2958;
            return point;
        }
    }]);

    return libCoord;
}();

exports.default = libCoord;


module.exports = libCoord;