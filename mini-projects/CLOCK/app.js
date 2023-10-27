import ClockController from "./clock/controller.js";
import ClockView from "./clock/view.js";
import ClockModel from "./clock/model.js";

const clockModel = new ClockModel;
const clockView = new ClockView(clockModel);
document.body.appendChild(clockView.getEl()); // montowanie

const clockController = new ClockController(clockModel);
