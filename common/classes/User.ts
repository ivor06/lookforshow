import {UserInterface, ProfileLocal} from "../interfaces/User";

export {
    User
}

class User implements UserInterface {

    public local: ProfileLocal;

    static getName(user: UserInterface): string {
        return user.local.firstName + " " + user.local.lastName;
    }

    constructor(user?: UserInterface) {
        if (user)
            for (const key in user)
                if (user.hasOwnProperty(key))
                    this[key] = user[key];
    }

    getName(): string {
        return this.local.firstName + " " + this.local.lastName;
    }
}
