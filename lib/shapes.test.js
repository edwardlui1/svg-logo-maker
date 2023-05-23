const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle Test", () => {
    it("should render a triangle with an orange background", () => {
        // Arrange
        const svgTest = new Triangle ();
        svgTest.setColor("orange");
        // Act
        actualSVG = svgTest.render();
        expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="orange"/>`
        // Assert
        expect(expectedSVG).toEqual(actualSVG);
    });
});

describe("Triangle Hex Test", () => {
    it("should render a triangle with an orange background using a hexadecimal", () => {
        // Arrange
        const svgTest = new Triangle ();
        svgTest.setColor("#FFA500");
        // Act
        actualSVG = svgTest.render();
        expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="#FFA500"/>`
        // Assert
        expect(expectedSVG).toEqual(actualSVG);
    });
});

describe("Square Test", () => {
    it("should render a square with a blue background", () => {
        // Arrange
        const svgTest = new Square ();
        svgTest.setColor("blue");
        // Act
        actualSVG = svgTest.render();
        expectedSVG = `<rect x="73" y="40" width="160" height="160" fill="blue"/>`
        // Assert
        expect(expectedSVG).toEqual(actualSVG);
    });
});

describe("Square Hex Test", () => {
    it("should render a triangle with a blue background using a hexadecimal", () => {
        // Arrange
        const svgTest = new Square ();
        svgTest.setColor("#0000FF");
        // Act
        actualSVG = svgTest.render();
        expectedSVG = `<rect x="73" y="40" width="160" height="160" fill="#0000FF"/>`
        // Assert
        expect(expectedSVG).toEqual(actualSVG);
    });
});

describe("Circle Test", () => {
    it("should render a circle with a green background", () => {
        // Arrange
        const svgTest = new Circle ();
        svgTest.setColor("green");
        // Act
        actualSVG = svgTest.render();
        expectedSVG = `<circle cx="150" cy="115" r="80" fill="green"/>`
        // Assert
        expect(expectedSVG).toEqual(actualSVG);
    });
});

describe("Triangle Test", () => {
    it("should render a triangle with an orange background using a hexadecimal", () => {
        // Arrange
        const svgTest = new Circle ();
        svgTest.setColor("#00FF00");
        // Act
        actualSVG = svgTest.render();
        expectedSVG = `<circle cx="150" cy="115" r="80" fill="#00FF00"/>`
        // Assert
        expect(expectedSVG).toEqual(actualSVG);
    });
});