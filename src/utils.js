/**
 * Created by nitro on 04.08.2021.
 */

export function row(content, styles = "") {
	return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content, styles = "") {
	return `<div class="col-sm" style="${styles}">${content}</div>`
}

export function css(styles={}){
	const keys = Object.keys(styles);
	const array = keys.map(key => {
		return `${key} : ${styles[key]}`
	});
	console.log(array);
	return array.join(';')
}