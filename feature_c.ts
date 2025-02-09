// Define a model for a User
class AppUser {
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
const appUser = new AppUser(1, 'John Doe', 'john.doe@example.com');
console.log(appUser.getId()); // 1
console.log(appUser.getName()); // John Doe
console.log(appUser.getEmail()); // john.doe@example.com
appUser.setName('Jane Doe');
appUser.setEmail('jane.doe@example.com');
console.log(appUser.getName()); // Jane Doe
console.log(appUser.getEmail()); // jane.doe@example.com