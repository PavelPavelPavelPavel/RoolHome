import logo from "../../images/logo.svg";
import phoneSign from "../../images/phone.svg";
import { mobileTel, cityTel, getCall } from "../../constants/constants";

const Header = () => {
	function sendCallInfo() {
		console.log("test");
	}

	return (
		<header className='w-full p-2  flex flex-row items-center justify-between'>
			<img src={logo} className='max-w-64' alt='logo'></img>
			<div className='flex flex-col items-center gap-1'>
				<ul className='list-none'>
					<li className='header__phone'>{mobileTel}</li>
					<li className='header__phone'>{cityTel}</li>
				</ul>
				<button onClick={sendCallInfo} className='header__btn'>
					<span className='pl-2 text-red'>{getCall}</span>
					<img
						src={phoneSign}
						alt='phoneSign'
						className='max-w-6 max-h-6 pr-2'
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
