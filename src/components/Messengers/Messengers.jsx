import { useEffect, useState } from "react";
import whatsAppIcon from "../../images/socialIcons/whatsapp.svg";
import telegramIcon from "../../images/socialIcons/telegram.svg";
import { telegram, whatsApp } from "../../constants/url";
import MessengerBtn from "./MessengerBtn";

const Messengers = () => {
	return (
		<ul className={`messengers`}>
			<MessengerBtn name={whatsApp} src={whatsAppIcon} />
			<MessengerBtn name={telegram} src={telegramIcon} />
		</ul>
	);
};

export default Messengers;
