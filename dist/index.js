"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Coords(offset) {
        _classCallCheck(this, Coords);

        this.offset = offset;
    }

    _createClass(Coords, [{
        key: "canvasToCartesian",
        value: function canvasToCartesian(point) {
            return Coords.canvasToCartesian(point, this.offset);
        }
    }, {
        key: "cartesianToCanvas",
        value: function cartesianToCanvas(point) {
            return Coords.cartesianToCanvas(point, this.offset);
        }
    }, {
        key: "cartesianToPolar",
        value: function cartesianToPolar(point) {
            return Coords.cartesianToPolar(point);
        }
    }, {
        key: "polarToCartesian",
        value: function polarToCartesian(point) {
            return Coords.polarToCartesian(point);
        }
    }, {
        key: "polarToCanvas",
        value: function polarToCanvas(point) {
            var p2 = Coords.polarToCartesian(point);
            return Coords.cartesianToCanvas(p2, this.offset);
        }
    }, {
        key: "canvasToPolar",
        value: function canvasToPolar(point) {
            var p2 = Coords.canvasToCartesian(point, this.offset);
            return Coords.cartesianToPolar(p2);
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
        key: "eventToCanvas",
        value: function eventToCanvas(e) {
            var rect = document.getElementById(e.target.id).getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    }]);

    return Coords;
}();