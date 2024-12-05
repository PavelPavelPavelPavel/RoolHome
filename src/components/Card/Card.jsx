import { useState } from "react";

const Card = ({ name, photo }) => {
	function splitPhotoName(name) {
		const replaceWhiteSpaceToBr = name.replace(" ", "<br />");
		const createMarkupName = {
			__html: replaceWhiteSpaceToBr,
		};
		return <p dangerouslySetInnerHTML={createMarkupName} />;
	}

	return (
		<li
			className={`bg-black/[0.1] flex flex-col items-center justify-between gap-2 rounded-md md:last:-col-start-2 md:last:-col-end-4 `}>
			<h3 className='flex items-center min-h-12 pt-1 text-md font-bold leading-none text-wrap text-center tracking-tighter antialiaseds'>
				{splitPhotoName(name)}
			</h3>
			<img
				className='w-[94%] h-[94%] mb-2 shadow-md shadow-black rounded-md object-cover'
				src={photo}
				alt={name}></img>
		</li>
	);
};

export default Card;
