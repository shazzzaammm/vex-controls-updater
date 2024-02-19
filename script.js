const functions = [
    "Hold Intake",
    "Hold Outtake",
    "Toggle Intake",
    "Toggle Outtake",
    "Toggle Wings",
    "Toggle PTO",
    "Toggle Slapper",
    "Hold Slapper",
    "Reverse Chassis",
    "Toggle Endgame",
];

const a_select = createSelect("A");
const b_select = createSelect("B");
const x_select = createSelect("X");
const y_select = createSelect("Y");
const left_select = createSelect("LEFT");
const right_select = createSelect("RIGHT");
const up_select = createSelect("UP");
const down_select = createSelect("DOWN");
const r1_select = createSelect("R1");
const r2_select = createSelect("R2");
const l1_select = createSelect("L1");
const l2_select = createSelect("L2");

function createSelect(name) {
    const div = document.createElement("div");
    div.className = "control-pair";
    const label = document.createElement("span");
    label.innerText = name;
    const selector = document.createElement("select");
    for (const fn of functions) {
        let elem = document.createElement("option");
        elem.innerText = fn;
        selector.appendChild(elem);
    }
    div.appendChild(label);
    div.appendChild(selector);
    document.body.appendChild(div);
    return div;
}
