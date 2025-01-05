import {User} from "./types/user.type";
export type {User} from "./types/user.type";
export function greetUser(user: User) {
    console.log(
        `Hello, ${user.firstName} ${user.lastName}! You are ${
            user.isAdmin ? "an admin." : "not an admin."
        }`
    );
}
