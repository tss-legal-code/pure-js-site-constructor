/**
 * Created by nitro on 04.08.2021.
 */
import {model} from "./model"
import "./styles/main.css"
import {Site} from "./classes/site"

const site = new Site("#site");


site.render(model);

