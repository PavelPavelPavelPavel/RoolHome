import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleFullSizeImgAction } from "../../store/imgPopupReducer";
import { ourWorksTitle } from "../../constants/constants";
import { workGallary } from "../../constants/images";

const WorksGallery = () => {
	const dispatch = useDispatch();

	function createPhotosArr(arr) {
		const photosArrForRender = [];
		arr.forEach((item) => {
			photosArrForRender.push({
				id: crypto.randomUUID(),
				fileName: item,
			});
		});
		return photosArrForRender;
	}

	function openFullSize(photo) {
		dispatch(
			toggleFullSizeImgAction({
				isOpened: true,
				fileName: photo.fileName,
			})
		);
	}

	return (
		<section className='py-2 flex flex-col items-center'>
			<h2 className='title'>{ourWorksTitle}</h2>
			<div className='p-2 w-full h-full grid grid-cols-3 gap-2 border-y-2 border-black border-opacity-45'>
				{createPhotosArr(workGallary).map((photo) => {
					return (
						<img
							onClick={() => {
								openFullSize(photo);
							}}
							key={photo.id}
							className='w-full h-full rounded-sm object-cover cursor-pointer active:opacity-65 hover:opacity-85 hover:duration-75'
							src={require(`${process.env.REACT_APP_WORK_GALLERY_URL}${photo.fileName}`)}
							alt={photo.fileName}></img>
					);
				})}
			</div>
		</section>
	);
};

export default WorksGallery;
