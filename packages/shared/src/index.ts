import {User} from "model/user.type";
export type {User} from "model/user.type";
export {default as config} from "constants"
export function greetUser(user: User) {
    console.log(
        `Hello, ${user.firstName} ${user.lastName}! You are ${
            user.isAdmin ? "an admin." : "not an admin."
        }`
    );
}
