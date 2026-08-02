class DateTimeHelper {

    // Stores one timestamp for the entire execution
    static executionTimestamp = null;

    static getCurrentDateTime() {

        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    static getFileTimestamp() {

        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    }

    // Returns the same timestamp throughout one execution
    static getExecutionTimestamp() {

        if (!this.executionTimestamp) {
            this.executionTimestamp = this.getFileTimestamp();
        }

        return this.executionTimestamp;
    }

}

module.exports = DateTimeHelper;