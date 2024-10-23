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
		<div className='w-full h-full flex flex-col items-center justify-center bg-opacity-70 bg-black fixed top-0 '>
			<button
				src={closeBtn}
				className='transition-transform absolute top-2 right-2 w-10 h-10 hover:scale-110 hover:border-black hover:border-2 hover:rounded-full hover:bg-black'
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
