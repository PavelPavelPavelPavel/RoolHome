import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModalAction } from "../../store/modalReducer";
import { copyTextToClipboard } from "../../utils/function/copyTextToClipBoard";
import {
	companyName,
	startAge,
	cityTel,
	mobileTel,
	telTitle,
	adress,
	adressTitle,
	email,
	emailTitle,
	copyPhone,
} from "../../constants/constants";

const Footer = () => {
	const dispatch = useDispatch();
	const [btnEmailCondition, setBtnEmailCondition] = useState(false);
	const isOpened = useSelector((state) => state.modalReducer.isOpened);
	const mailTextStyle = "mail__text";
	const messageCopyTextStyle = "mail__copytext";

	function saveEmail() {
		dispatch(addModalAction(true));
		copyTextToClipboard(email);
		setBtnEmailCondition(true);
		setTimeout(returnEmailBtn, 2000);
	}

	function returnEmailBtn() {
		dispatch(addModalAction(false));
		setBtnEmailCondition(false);
	}

	return (
		<footer className='footer relative'>
			<ul className='flex flex-row gap-8'>
				<li className='flex flex-col gap-1'>
					<h3 className='font-bold'>{`${telTitle}:`}</h3>
					<div>
						<p>{cityTel}</p>
						<p>{mobileTel}</p>
					</div>
					<div className='flex flex-col gap-1'>
						<h3 className='font-bold'>{`${emailTitle}:`}</h3>
						<button
							disabled={btnEmailCondition}
							className={
								isOpened ? messageCopyTextStyle : mailTextStyle
							}
							onClick={saveEmail}>
							{isOpened ? copyPhone : email}
						</button>
					</div>
				</li>
				<li>
					<h3 className='font-bold'>{`${adressTitle}:`}</h3>
					<p className='max-w-44'>{adress}</p>
				</li>
			</ul>
			<div className='h-full flex flex-col items-end justify-end text-xs'>
				<p className=''>{startAge}</p>
				<p className='font-bold'>{companyName}</p>
			</div>
		</footer>
	);
};

export default Footer;
