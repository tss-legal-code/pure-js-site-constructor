/**
 * Created by nitro on 04.08.2021.
 */

const model = [
	{type: "title", value:"Hello world!"},
	{type: "text", value:"Here some text!"},
	{type: "columns", value:["Here some 1 text!", "Here some 2 text!", "Here some 3 text!"]},
];

const $site = document.querySelector("#site");

model.forEach(block => {
	let html = "";

	if (block.type === "title") {
		html = `
		<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>
	`
	}else if (block.type === "text") {
		html = `
		<div class="row">
			<div class="col-sm">
				<p>${block.value}</p>
			</div>
		</div>
		`
	}else if (block.type === "columns") {
		html = `
		<div class="row">
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
		`
	}

	$site.insertAdjacentHTML("beforeend", html)

});

