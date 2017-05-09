# libCoord
A coordinate transform library for the HTML5 canvas or svg elements.

## Coordinate Systems
### Canvas
The canvas or svg elements place the origin (0,0) of the coordinate
system in the upper-left with the X axis increasing to the right and
the Y axis increasing downwards.

### Cartesian
The origin of the cartesian coordinate system is placed at the offset
provided by the constructor. The offset is the point on the canvas that
corresponds to (0,0).

### Polar
The origin of the polar coordinate system is placed at the offset
provided by the constructor. The offset is the point on the canvas that
corresponds to (0,0). The angle increases counter-clockwise with zero
being at the east, or rgiht, position.

## Coordinates
Cartesian coordinates are objects with x and y properties: {x:0, y:0}

Canvas coordinates are similar to cartesian coordinates except x and y are constrainted to positive values.

Polar coordinates are objects with r (radius) and theta (angle) properties: {r:0, theta:0} 

Angels are measured in radians, 1 radian = 57.2958 degrees.

## API
### Static functions
static canvasToCartesian(canvasPoint, offset) 

static cartesianToCanvas(cartesianPoint, offset)

static cartesianToPolar(cartesianPoint) 

static polarToCartesian(polarPoint) 
### Instance functions

canvasToCartesian(canvasPoint) 

cartesianToCanvas(cartesianPoint) 

cartesianToPolar(cartesianPoint) 

polarToCartesian(polarPoint)

polarToCanvas(polarPoint) 

canvasToPolar(CanvasPoint) 