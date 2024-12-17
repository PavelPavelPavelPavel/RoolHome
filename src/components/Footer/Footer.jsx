import { useState, useEffect } from "react";
import { copyTextToClipboard } from "../../utils/function/copyTextToClipBoard";
import {
	mailTextStyle,
	messageCopyTextStyle,
} from "../../constants/stateConstants";
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
	const [emailDisplay, setEmailDisplay] = useState(false);

	function saveEmail() {
		setEmailDisplay(true);
		copyTextToClipboard(email);
		setTimeout(returnEmailBtn, 2000);
	}

	function returnEmailBtn() {
		setEmailDisplay(false);
	}

	return (
		<footer className='footer relative'>
			<ul className='flex xs:flex-col xs:text-xs xs:gap-2 sm:text-sm md:text-base sm:flex-row sm:gap-8'>
				<li className='flex flex-col gap-1'>
					<div className='xs:border-b-2 xs:pb-2 sm:pb-0 sm:border-none'>
						<h3 className='font-bold'>{`${telTitle}:`}</h3>
						<div>
							<p>{cityTel}</p>
							<p>{mobileTel}</p>
						</div>
					</div>
					<div className='flex flex-col gap-1 xs:border-b-2 sm:border-none xs:pb-2 sm:pb-0'>
						<h3 className='font-bold'>{`${emailTitle}:`}</h3>
						<button
							disabled={emailDisplay}
							className={`text-black  xs:text-left
								${emailDisplay ? messageCopyTextStyle : mailTextStyle}`}
							onClick={saveEmail}>
							{emailDisplay ? copyPhone : email}
						</button>
					</div>
				</li>
				<li className='xs:border-b-2 sm:border-none xs:pb-2 sm:pb-0'>
					<h3 className='font-bold'>{`${adressTitle}:`}</h3>
					<p className='max-w-44 '>{adress}</p>
				</li>
			</ul>
			<div className='h-full flex flex-col items-end justify-end text-xs xs:pt-3'>
				<p className=''>{startAge}</p>
				<p className='font-bold'>{companyName}</p>
			</div>
		</footer>
	);
};

export default Footer;
