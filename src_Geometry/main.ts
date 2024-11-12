import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Square } from './Square';
import { Triangle } from './Triangle';
import { Trapezoid } from './Trapezoid';
function main() {
    // Initialize instances
    const myCircle = new Circle(5);
    console.log(myCircle.describe());
    console.log(`This shape area is: ${myCircle.calculateArea().toFixed(2)}`);
    console.log(`This shape perimeter is: ${myCircle.calculatePerimeter().toFixed(2)}`);

    const myRectangle = new Rectangle(10, 5);
    console.log(myRectangle.describe());

    const mySquare = new Square(10);
    console.log(mySquare.describe());

    const myTriangle = new Triangle(10, 5, 7, 8);
    console.log(myTriangle.describe());

    const myTrapezoid = new Trapezoid(10, 5, 4, 6, 6);
    console.log(myTrapezoid.describe());
}

// Execute the main function
main();