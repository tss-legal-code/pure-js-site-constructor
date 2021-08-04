/**
 * Created by nitro on 04.08.2021.
 */

import {row, col, css} from "./utils"

function title(block){
	const {tag = "h1", styles} = block.options;
	return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block){
	return row(col(`<p>${block.value}</p>`));
}

function columns(block){
	return row(block.value.map(col).join(""))
}

function image(block){
	return row (`<img src="${block.value}"  alt="${block.value}" />`)
}

export const templates = {
	title,
	text,
	columns,
	image,
};