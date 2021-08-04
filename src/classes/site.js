/**
 * Created by nitro on 04.08.2021.
 */

export class Site {
	constructor(selector){
		this.$el = document.querySelector(selector)
	}

	render(model){
		model.forEach(block => {
			this.$el.insertAdjacentHTML("beforeend", block.toHTML())
		});
	}
}