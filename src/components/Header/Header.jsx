import logo from "../../images/logo.svg";
import phoneSign from "../../images/phone.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { requestFormAction } from "../../store/requestFormReducer";
import { addModalAction } from "../../store/modalReducer";
import { mobileTel, cityTel, getCall } from "../../constants/constants";

const Header = () => {
	const dispatch = useDispatch();

	function sendCallInfo() {
		dispatch(addModalAction(true));
		dispatch(
			requestFormAction({
				isOpened: true,
			})
		);
	}

	return (
		<header className='w-full p-2 pb-5 flex xs:flex-col sm:flex-row xs:gap-2 items-center justify-between'>
			<img
				src={logo}
				className='xs:max-w-48 sm:max-w-48 md:max-w-64 '
				alt='logo'></img>
			<div className='flex flex-col items-center gap-1 xs:border-t-2 xs:border-t-red sm:border-none'>
				<ul className='list-none'>
					<li className='header__phone'>{mobileTel}</li>
					<li className='header__phone'>{cityTel}</li>
				</ul>
				<Button onClick={sendCallInfo} className={"header__btn"}>
					<span className='md:text-base xs:text-xs xs:leading-3 pl-2 text-red animate-pulse'>
						{getCall}
					</span>
					<img
						src={phoneSign}
						alt='phoneSign'
						className='xs:w-5 xs:h-5 max-w-6 max-h-6 pr-2 animate-pulse'
					/>
				</Button>
			</div>
		</header>
	);
};

export default Header;
