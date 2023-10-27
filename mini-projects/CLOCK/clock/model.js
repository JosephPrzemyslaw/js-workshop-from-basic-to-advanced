class ClockModel {
    constructor() {
        this.date = new Date;
        this.updateView = null;
    }
    update() {
        this.date = new Date;
        this.updateView();
    }
    subscribe(viewRender) {
        this.updateView = viewRender;
    }
    getDate() {
        return this.date;
    }
}

export default ClockModel;