"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = greetUser;
function greetUser(user) {
    console.log("Hello, ".concat(user.firstName, " ").concat(user.lastName, "! You are ").concat(user.isAdmin ? "an admin." : "not an admin."));
}
