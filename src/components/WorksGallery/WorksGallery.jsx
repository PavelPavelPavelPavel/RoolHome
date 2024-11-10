import { useDispatch, useSelector } from "react-redux";
import { toggleFullSizeImgAction } from "../../store/imgPopupReducer";
import { addModalAction } from "../../store/modalReducer";
import { ourWorksTitle } from "../../constants/constants";
import { workGallary } from "../../constants/images";

const WorksGallery = () => {
	const dispatch = useDispatch();

	function openFullSize(photo) {
		dispatch(addModalAction(true));
		dispatch(
			toggleFullSizeImgAction({
				fileName: photo,
				isOpened: true,
			})
		);
	}

	return (
		<section className='py-2 flex flex-col items-center'>
			<h2 className='title'>{ourWorksTitle}</h2>
			<div className='p-2 w-full h-full grid grid-cols-4 gap-2 border-y-2 border-black border-opacity-45'>
				{workGallary.map((photo) => {
					return (
						<img
							onClick={() => {
								openFullSize(photo);
							}}
							key={crypto.randomUUID()}
							className='w-full h-[350px]  first:col-span-3 rounded-sm object-cover cursor-pointer opacity:0 duration-500 active:opacity-65 hover:opacity-85 hover:duration-500 overflow-hidden'
							src={require(`${process.env.REACT_APP_WORK_GALLERY_URL}${photo}`)}
							alt={photo.fileName}></img>
					);
				})}
			</div>
		</section>
	);
};

export default WorksGallery;
