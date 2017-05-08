
import CoordinateTransforms from '../coordinateTransforms'
import { assert, should } from 'chai'
should()

const origin = { x: 100, y: 100 }
const radius = Math.sqrt(5000);
const data = {
    'cartesian': {
        I: { x: 50, y: 50 },
        II: { x: -50, y: 50 },
        III: { x: -50, y: -50 },
        IV: { x: 50, y: -50 }
    },
    'polar': {
        I: { r: radius, theta: 1 / 4 * Math.PI },
        II: { r: radius, theta: 3 / 4 * Math.PI },
        III: { r: radius, theta: 5 / 4 * Math.PI },
        IV: { r: radius, theta: 7 / 4 * Math.PI }
    },
    'canvas': {
        I: { x: 150, y: 50 },
        II: { x: 50, y: 50 },
        III: { x: 50, y: 150 },
        IV: { x: 150, y: 150 }
    }
}

const sut = new CoordinateTransforms(origin)

describe('coordinate transform test of', () => {
    describe('cartesian to polar conversions', () => {
        ['I', 'II', 'III', 'IV'].forEach(quadrant => {
            let msg = 'should convert quadrant ' + quadrant + ' coordinates to polar coordinates'
            it(msg, () => {
                let point = sut.cartesianToPolar(data.cartesian[quadrant])
                point.r.should.be.closeTo(data.polar[quadrant].r, 1e-4)
                point.theta.should.be.closeTo(data.polar[quadrant].theta, 1e-4)
            })
        })
    })

    describe('polar to cartesian conversions', () => {
        ['I', 'II', 'III', 'IV'].forEach(quadrant => {
            let msg = 'should convert polar coordinates to quadrant ' + quadrant + ' coordinates'
            it(msg, () => {
                let point = sut.polarToCartesian(data.polar[quadrant])
                point.x.should.be.closeTo(data.cartesian[quadrant].x, 1e-4)
                point.y.should.be.closeTo(data.cartesian[quadrant].y, 1e-4)
            })
        })
    })

    describe('cartesian to canvas conversions', () => {
        ['I', 'II', 'III', 'IV'].forEach(quadrant => {
            let msg = 'should convert quadrant ' + quadrant + ' coordinates to canvas coordinates'
            it(msg, () => {
                let point = sut.cartesianToCanvas(data.cartesian[quadrant])
                point.should.deep.equal(data.canvas[quadrant])
            })
        })
    })

    describe('canvas to cartesian conversions', () => {
        ['I', 'II', 'III', 'IV'].forEach(quadrant => {
            let msg = 'should convert canvas coordinates to quadrant ' + quadrant + ' coordinates'
            it(msg, () => {
                let point = sut.canvasToCartesian(data.canvas[quadrant])
                point.should.deep.equal(data.cartesian[quadrant])
            })
        })
    })

    describe('polar to canvas conversions', () => {
        ['I', 'II', 'III', 'IV'].forEach(quadrant => {
            let msg = 'should convert polar coordinates to canvas coordinates'
            it(msg, () => {
                let point = sut.polarToCanvas(data.polar[quadrant])
                point.x.should.be.closeTo(data.canvas[quadrant].x, 1e-4)
                point.y.should.be.closeTo(data.canvas[quadrant].y, 1e-4)
            })
        })
    })

    describe('canvas to polar conversions', () => {
        ['I', 'II', 'III', 'IV'].forEach(quadrant => {
            let msg = 'should convert canvas coordinates to polar coordinates'
            it(msg, () => {
                let point = sut.canvasToPolar(data.canvas[quadrant])
                point.r.should.be.closeTo(data.polar[quadrant].r, 1e-4)
                point.theta.should.be.closeTo(data.polar[quadrant].theta, 1e-4)
          })
        })
    })
})