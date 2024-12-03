import { useState } from "react";
import whatsAppIcon from "../../images/socialIcons/whatsapp.svg";
import telegramIcon from "../../images/socialIcons/telegram.svg";
import { telegram, whatsApp } from "../../constants/url";
const Messengers = () => {
	return (
		<ul className='messengers'>
			<li className='messengers__list-item'>
				<a target='blanc' href={whatsApp} className='messengers__btn'>
					<img
						className='rounded-full'
						src={whatsAppIcon}
						alt='icon'
					/>
				</a>
			</li>
			<li className='messengers__list-item'>
				<a target='blanc' href={telegram} className='messengers__btn'>
					<img
						className='rounded-full'
						src={telegramIcon}
						alt='icon'
					/>
				</a>
			</li>
		</ul>
	);
};

export default Messengers;
