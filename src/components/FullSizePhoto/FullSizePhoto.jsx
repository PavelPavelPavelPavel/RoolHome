import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "../Modal/Modal";

const FullSizePhoto = () => {
	const imgInfo = useSelector((state) => state.imgPopupReducer);
	console.log(imgInfo);
	return (
		<Modal>
			{
				<img
					className='py-3 max-w-2xl max-h-screen object-cover'
					src={require(`../../images/worksPhotosGallery/${imgInfo.fileName}`)}
					alt='#'
				/>
			}
		</Modal>
	);
};

export default FullSizePhoto;
