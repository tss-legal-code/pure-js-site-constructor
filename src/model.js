/**
 * Created by nitro on 04.08.2021.
 */
import image from "./assets/gimp_render_filters.jpg"

export const model = [
	{
		type: "title",
		value: "Pure JS site constructor",
		options: {
			tag: "h5",
			// styles: `background: ; color: #fff; text-align:center; padding:1.5rem`
			styles: {
				background: "linear-gradient(to bottom, #0c7c00, #000923)",
				color: "#fff",
				'text-align': "center",
				padding: "1.5rem",
			}
		}
	},
	{type: "text", value: "Here some single text!"},
	{type: "image", value: image},
	{
		type: "columns",
		value: ["Here some 1st column text!", "Here some 2nd column text!", "Here some 3rd column text!"]
	},
];