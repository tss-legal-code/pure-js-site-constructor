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
			styles: {
				background: "linear-gradient(to bottom, #0c7c00, #000923)",
				color: "#fff",
				'text-align': "center",
				padding: "1.5rem",
			}
		}
	},
	{
		type: "text", value: "Here some single text!", options: {
		tag: "h5",
		styles: {
			background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
			color: "#ce9",
			'font-weight': 700,
			padding: "1rem",
		}
	},
	},
	{
		type: "image",
		value: image,
		options: {
			styles: {
				padding: ".4rem 0",
				display: 'flex',
				'justify-content': "center",
			},
			imageStyles: {
				width: "500px",
				height: "auto",
			},
			alt: "Это картинка",
		}
	},
	{
		type: "columns",
		value: ["Here some 1st column text!", "Here some 2nd column text!", "Here some 3rd column text!"], options: {
		tag: "h5",
		// styles: `background: ; color: #fff; text-align:center; padding:1.5rem`
		styles: {
			background: "linear-gradient(to top, #8e2de2, #4a00e0)",
			color: "#cda",
			'font-weight': 700,
			padding: "2rem",
		}
	},
	},
];