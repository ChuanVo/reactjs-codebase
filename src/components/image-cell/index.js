import { useState } from "react";

function ImageCell(props) {
  const [open, setOpen] = useState(false)
  const [mouseOver, setMouseOver] = useState(false)

		// Event handlers to modify state values
	function _mouseEnter(e) {
		e.preventDefault();
		if (mouseOver === false) {
			console.log(props.data.name);
			setMouseOver(true)
		}
	}
	function _mouseLeave(e) {
		e.preventDefault();
		if (mouseOver === true) {
			setMouseOver(false)
		}
	}

	function _clickHandler(e) {
		e.preventDefault();
		if (open === false) {
			setOpen(true)
		} else {
			setOpen(false)
		}
	}

		// Modify styles based on state values
		let cellStyle = {};
		let headerStyle = {};
		let zoom = {};
		// When tile clicked
		if (open) {
			cellStyle = {
				width: '62vw',
				height: '62vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-31vw',
				marginLeft: '-31vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			cellStyle = {
				width: '18vw',
				height: '18vw'
			};
		}

		return (
			<div className="image-cell">
				<img
					onMouseEnter={_mouseEnter}
					onMouseLeave={_mouseLeave}
					onClick={_clickHandler}
					src={props.data.image}
					alt={props.data.name}
					style={cellStyle}
				/>
			</div>
		);
}

export default ImageCell