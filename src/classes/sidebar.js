/**
 * Created by nitro on 04.08.2021.
 */


import {block} from "../utils";
import {TitleBlock, TextBlock, ColumnsBlock,ImageBlock} from "./blocks"

export class Sidebar {
	constructor(selector, updateCallback) {
		this.$el = document.querySelector(selector);

		this.update = updateCallback;

		this.init()
	}

	init() {
		this.$el.insertAdjacentHTML("afterbegin", this.template);
		this.$el.addEventListener("submit", this.add.bind(this))
	}

	get template() {
		return [block("title"),block("text")].join('')
		// todo: implement ColumnsBlock & ImageBlock
	}

	add(event){
		event.preventDefault();

		const type = event.target.name;
		const value = event.target.value.value;
		const styles = event.target.styles.value;
		// console.log(type, value, styles)

		let newBlock;

		switch (type){
			case "title":
				newBlock = new TitleBlock(value, {styles});
				break;
			case "text":
				newBlock = new TextBlock(value, {styles});
				break;
			case "column": // todo: not implemented ColumnsBlock
				newBlock = new ColumnsBlock(value, {styles});
				break;
			case "image": // todo: not implemented ImageBlock
				newBlock = new ImageBlock(value, {styles});
				break;
		}
		// console.log(newBlock);

		this.update(newBlock);

		event.target.value.value = "";
		event.target.styles.value = "";
	}
}

