import logo from "../../images/logo.svg";
import phoneSign from "../../images/phone.svg";
import { useDispatch, useSelector } from "react-redux";
import { requestFormAction } from "../../store/requestFormReducer";
import { addModalAction, modalReducer } from "../../store/modalReducer";
import { mobileTel, cityTel, getCall } from "../../constants/constants";
import { requestFormReducer } from "../../store/requestFormReducer";

const Header = () => {
	const dispatch = useDispatch();
	const test = useSelector((state) => state.requestFormReducer);

	function sendCallInfo() {
		dispatch(addModalAction(true));
		dispatch(
			requestFormAction({
				isOpened: true,
			})
		);
	}

	return (
		<header className='w-full p-2 pb-5  flex flex-row items-center justify-between'>
			<img src={logo} className='max-w-64' alt='logo'></img>
			<div className='flex flex-col items-center gap-1'>
				<ul className='list-none'>
					<li className='header__phone'>{mobileTel}</li>
					<li className='header__phone'>{cityTel}</li>
				</ul>
				<button onClick={sendCallInfo} className='header__btn'>
					<span className='pl-2 text-red animate-pulse'>
						{getCall}
					</span>
					<img
						src={phoneSign}
						alt='phoneSign'
						className='max-w-6 max-h-6 pr-2 animate-pulse'
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
