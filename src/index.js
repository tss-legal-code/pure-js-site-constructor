/**
 * Created by nitro on 04.08.2021.
 */

import {model} from "./model"
import {templates} from "./templates"
import "./styles/main.css"

const $site = document.querySelector("#site");

model.forEach(block => {
	const convertToHTML = templates[block.type]; // find just appropriate function
	if (convertToHTML) {
		$site.insertAdjacentHTML("beforeend", convertToHTML(block)) // call that function
	} else {
		console.log("can not find necessary function")
	}

});

