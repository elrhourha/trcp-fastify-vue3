//import 'module-alias/register.js'
import {User} from "@/model/user.type";
import user from "@/model/user.type";
export type {User} from "@/model/user.type";
export function greetUser(user: User) {
    console.log(
        `Hello, ${user.firstName} ${user.lastName}! You are ${
            user.isAdmin ? "an admin." : "not an admin."
        }`
    );
}

greetUser(user)
