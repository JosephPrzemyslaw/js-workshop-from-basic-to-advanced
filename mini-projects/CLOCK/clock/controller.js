class ClockController {
    constructor(model) {
        this.clockModel = model;
        setInterval(() => this.updateModel(), 1000);
    }
    updateModel() {
        this.clockModel.update();
    }
}

export default ClockController;