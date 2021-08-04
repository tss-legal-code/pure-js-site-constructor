/**
 * Created by nitro on 04.08.2021.
 */

const model = [
	{type: "title", value:"Hello world!"},
	{type: "text", value:"Here some single text!"},
	{type: "image", value:"./assets/gimp_render_filters_white.png"},
	{type: "columns", value:["Here some 1st column text!", "Here some 2nd column text!", "Here some 3rd column text!"]},
];

const $site = document.querySelector("#site");

model.forEach(block => {
	let html = "";

	if (block.type === "title") {
		html = title(block);
	}else if (block.type === "text") {
		html = text(block);
	}else if (block.type === "columns") {
		html = columns(block);
	}if (block.type === "image") {
		html = image(block);
	}

	$site.insertAdjacentHTML("beforeend", html)

});

function title(block){
	return `
		<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>
		`
}

function text(block){
	return `
		<div class="row">
			<div class="col-sm">
				<p>${block.value}</p>
			</div>
		</div>
		`
}

// NOT GOOD
//    |
//    V
//
// function columns(block){
//
// 	let html = "";
//
// 	block.value.forEach(element => {
// 		html += `
// 				 <div class="col-sm">
//                     <p>${element}</p>
//                 </div>
// 		`
// 	});
// 	return `
// 		<div class="row">
//             ${html}
//         </div>
// 		`
// }


// better
function columns(block){

	const html = block.value.map( item => `<div class="col-sm">${item}</div>`);

	return `
		<div class="row">
            ${html.join("")}
        </div>
		`
}

function image(block){
	return `
		<div class="row">
			<img src="${block.value}"  alt="${block.value}" />
		</div>
		`
}