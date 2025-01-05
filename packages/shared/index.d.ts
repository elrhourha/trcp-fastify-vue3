export interface User {
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
}
export declare function greetUser(user: User): void;
