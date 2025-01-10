import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleFullSizeImgAction } from "../../store/imgPopupReducer";
import { addModalAction } from "../../store/modalReducer";
import { ourWorksTitle } from "../../constants/constants";
import { workGallary } from "../../constants/images";
import MainLoader from "../MainLoader/MainLoader";

const WorksGallery = () => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	const imgInfo = useSelector((state) => state.imgPopupReducer);

	function openFullSize(photo) {
		dispatch(addModalAction(true));
		dispatch(
			toggleFullSizeImgAction({
				fileName: photo,
				isOpened: true,
				id: crypto.randomUUID(),
			})
		);
	}

	return (
		<section className='py-2 flex flex-col items-center'>
			<h2 className='title xs:text-lg sm:text-2xl'>{ourWorksTitle}</h2>
			<div className='worksgallery__card-wrapper'>
				{workGallary.map((photo) => {
					return isLoading ? (
						<img
							onClick={() => {
								openFullSize(photo);
							}}
							key={crypto.randomUUID()}
							className='worksgallery__card'
							src={require(`../../images/worksPhotosGallery/${photo}`)}
							alt={photo.fileName}></img>
					) : (
						<MainLoader />
					);
				})}
			</div>
		</section>
	);
};

export default WorksGallery;
