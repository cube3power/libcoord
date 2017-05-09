
export default class libCoord {
    constructor(offset) {
        this.offset = offset
    }

    canvasToCartesian(point) {
        return libCoord.canvasToCartesian(point, this.offset)
    }

    cartesianToCanvas(point) {
        return libCoord.cartesianToCanvas(point, this.offset)
    }

    cartesianToPolar(point) {
        return libCoord.cartesianToPolar(point)
    }

    polarToCartesian(point) {
        return libCoord.polarToCartesian(point)
    }

    polarToCanvas(point) {
        var p2 = libCoord.polarToCartesian(point)
        return libCoord.cartesianToCanvas(p2, this.offset)
    }

    canvasToPolar(point) {
        var p2 = libCoord.canvasToCartesian(point, this.offset)
        return libCoord.cartesianToPolar(p2)
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

    static degreeToRadian(point){
        point.theta *= 57.2958
        return point
    }

    static radianToDegree(point){
        point.theta /= 57.2958
        return point
    }
}

module.exports = libCoord