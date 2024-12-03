import { useEffect, useState } from "react";
import whatsAppIcon from "../../images/socialIcons/whatsapp.svg";
import telegramIcon from "../../images/socialIcons/telegram.svg";
import { telegram, whatsApp } from "../../constants/url";

const Messengers = () => {
	const [style, setStyle] = useState("bottom-5");

	function handleScroll() {
		if (window.scrollY > 3350) {
			setStyle("bottom-44");
		} else setStyle("bottom-5");
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<ul className={` ${style} messengers`}>
			<li className='messengers__list-item'>
				<a target='blanc' href={whatsApp} className='messengers__link'>
					<img
						className='rounded-full'
						src={whatsAppIcon}
						alt='icon'
					/>
				</a>
			</li>
			<li className='messengers__list-item'>
				<a target='blanc' href={telegram} className='messengers__link'>
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
