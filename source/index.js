
module.exports = class Coords {
    constructor(offset) {
        this.offset = offset
    }

    canvasToCartesian(point) {
        return Coords.canvasToCartesian(point, this.offset)
    }

    cartesianToCanvas(point) {
        return Coords.cartesianToCanvas(point, this.offset)
    }

    cartesianToPolar(point) {
        return Coords.cartesianToPolar(point)
    }

    polarToCartesian(point) {
        return Coords.polarToCartesian(point)
    }

    polarToCanvas(point) {
        var p2 = Coords.polarToCartesian(point)
        return Coords.cartesianToCanvas(p2, this.offset)
    }

    canvasToPolar(point) {
        var p2 = Coords.canvasToCartesian(point, this.offset)
        return Coords.cartesianToPolar(p2)
    }
    
    static canvasToCartesian(point, offset) {
        return {
            x: point.x - offset.x,
            y: offset.y - point.y
        }
    }

    static cartesianToCanvas(point, offset) {
        return {
            x: point.x + offset.x,
            y: offset.y - point.y
        }
    }

    static cartesianToPolar(point) {
        let theta = Math.atan2(point.y, point.x);
        if (point.y < 0) theta += 2 * Math.PI
        return {
            r: Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)),
            theta: theta
        }
    }

    static polarToCartesian(point) {
        return {
            x: point.r * Math.cos(point.theta),
            y: point.r * Math.sin(point.theta)
        }
    }

    static eventToCanvas(e) {
        var rect = document.getElementById(e.target.id).getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
}