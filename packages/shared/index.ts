export interface User {
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
}

export function greetUser(user: User) {
    console.log(
        `Hello, ${user.firstName} ${user.lastName}! You are ${
            user.isAdmin ? "an admin." : "not an admin."
        }`
    );
}
