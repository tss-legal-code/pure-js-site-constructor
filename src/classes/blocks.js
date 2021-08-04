/**
 * Created by nitro on 04.08.2021.
 */
import {row, col, css} from "../utils"

class Block {
	constructor( value, options) {
		this.value = value;
		this.options = options;
	}


	toHTML() {
		throw new Error("method to HTML not defined!!!!")
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {tag = "h1", styles} = this.options;
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
	}
}


export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		return row(col(`<p>${this.value}</p>`), css(this.options.styles));
	}
}


export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {imageStyles: is, alt = "", styles} = this.options;
		return row(`<img src="${this.value}"  alt="${alt}" style="${css(is)}" />`, css(styles))
	}
}


export class ColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		return row(this.value.map(col).join(""), css(this.options.styles))
	}
}