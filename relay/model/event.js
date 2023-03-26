class Event {
    constructor() {
        this.payload = "";
        this.time = new Date();
        this.sender = "";
    }

    setPayload(payload) {
        this.payload = payload;

        return this;
    }

    setTime(time) {
        this.time = time;

        return this;
    }

    setSender(sender) {
        this.sender = sender;

        return this;
    }
}

module.exports = {
    Event
}