class ClockView {
    constructor(model) {
        this.clockModel = model;
        this.el = document.createElement("div");
        this.el.classList.add("clock");

        this.clockModel.subscribe(() => this.render());
        // <div class="clock"></div>
    }
    getEl() {
        return this.el;
    }
    render() {
        const clockDate = this.clockModel.getDate();

        let [hours, minutes, seconds] = [clockDate.getHours(), clockDate.getMinutes(), clockDate.getSeconds()];
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        this.el.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

export default ClockView;