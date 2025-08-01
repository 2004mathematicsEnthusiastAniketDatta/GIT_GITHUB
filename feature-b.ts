// Define a model for a User
class User {
    private id: number;
    private name: string;
    private email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Method to get the user's ID
    getId(): number {
        return this.id;
    }

    // Method to get the user's name
    getName(): string {
        return this.name;
    }

    // Method to get the user's email
    getEmail(): string {
        return this.email;
    }

    // Method to set the user's name
    setName(name: string): void {
        this.name = name;
    }

    // Method to set the user's email
    setEmail(email: string): void {
        this.email = email;
    }
}

// Example usage
const user = new User(1, 'John Doe', 'john.doe@example.com');
console.log(user.getId()); // 1
console.log(user.getName()); // John Doe
console.log(user.getEmail()); // john.doe@example.com
user.setName('Jane Doe');
user.setEmail('jane.doe@example.com');
console.log(user.getName()); // Jane Doe
console.log(user.getEmail()); // jane.doe@example.com