import { useSelector, useDispatch } from "react-redux";
import { toggleFullSizeImgAction } from "../../store/imgPopupReducer";
import closeBtn from "../../images/closeBtn.svg";

const FullSizePhoto = () => {
	const dispatch = useDispatch();
	const toggleImgPopup = useSelector((state) => state.imgPopupReducer);

	function handleCloseImg() {
		dispatch(
			toggleFullSizeImgAction({
				isOpened: false,
			})
		);
	}

	return (
		<div className=' flex flex-col items-center justify-center w-full h-full bg-opacity-70 bg-black fixed top-0 '>
			<button
				src={closeBtn}
				className='transition-transform duration-300 absolute top-2 right-2 w-10 h-10 hover:duration-300 hover:scale-110 active:scale-95'
				onClick={() => {
					handleCloseImg();
				}}>
				<img src={closeBtn} alt='close button' />
			</button>
			<img
				className='py-3 max-w-2xl max-h-screen object-cover'
				src={require(`${process.env.REACT_APP_WORK_GALLERY_URL}${toggleImgPopup.fileName}`)}
				alt='#'
			/>
		</div>
	);
};

export default FullSizePhoto;
