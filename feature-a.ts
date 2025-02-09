// Define a model for an array of integers
class IntArrayModel {
    private ints: number[];

    constructor(ints: number[]) {
        this.ints = ints;
    }

    // Method to add an integer to the array
    addInt(value: number): void {
        this.ints.push(value);
    }

    // Method to get the array of integers
    getInts(): number[] {
        return this.ints;
    }

    // Method to find the sum of the integers
    sumInts(): number {
        return this.ints.reduce((acc, curr) => acc + curr, 0);
    }

    // Method to find the average of the integers
    averageInts(): number {
        return this.ints.length ? this.sumInts() / this.ints.length : 0;
    }
}

// Example usage
const intArray = new IntArrayModel([1, 2, 3, 4, 5]);
console.log(intArray.getInts()); // [1, 2, 3, 4, 5]
console.log(intArray.sumInts()); // 15
console.log(intArray.averageInts()); // 3