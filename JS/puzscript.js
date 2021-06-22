// =================================script Puzzel===================================================
var puzzle;
var positionDown;
var positinUp;

class Model {
    constructor() {
        puzzle = document.getElementsByClassName("Grid-item");
        for (let i = 0; i < 9; i++) {
            puzzle[i].id = "item" + (i + 1);
        }
    }
}

