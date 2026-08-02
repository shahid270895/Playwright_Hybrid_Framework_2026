class RandomDataHelper {

    static getNumber(length = 6) {

        let number = "";

        for (let i = 0; i < length; i++) {

            number += Math.floor(Math.random() * 10);

        }

        return number;

    }

    static getString(length = 8) {

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let text = "";

        for (let i = 0; i < length; i++) {

            text += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );

        }

        return text;

    }

    static getEmail() {

        return `user_${this.getNumber(6)}@gmail.com`;

    }

    static getUsername() {

        return `user_${this.getString(6)}`;

    }

    static getPassword() {

        return `Pass@${this.getNumber(6)}`;

    }

    static getPhoneNumber() {

        return `9${this.getNumber(9)}`;

    }

}

module.exports = RandomDataHelper;