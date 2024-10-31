import { useState } from "react";

const Card = ({ name, photo }) => {
	function splitPhotoName(name) {
		const replaceWhiteSpaceToBr = name.replace(" ", "<br />");
		const createMarkupName = {
			__html: replaceWhiteSpaceToBr,
		};
		return <div dangerouslySetInnerHTML={createMarkupName} />;
	}

	return (
		<li className='flex flex-col items-center gap-2 border-double border-black border-2 rounded-md last:-col-start-2 last:-col-end-4'>
			<h3 className='min-h-12 pt-2 text-md font-bold text-wrap text-center tracking-tighter antialiaseds'>
				{splitPhotoName(name)}
			</h3>
			<img
				className='box-border border-t-2 object-scale-down'
				src={photo}
				alt={name}></img>
		</li>
	);
};

export default Card;
