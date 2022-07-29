'use strict'
import {Controller} from "./Controller.js";
import {View} from "./View.js";
import {Model} from "./Model.js";

const app = new Controller(new View(), new Model());
app.start()
