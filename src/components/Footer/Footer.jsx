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
} from "../../constants/constants";

const Footer = () => {
	return (
		<footer className='w-full bg-red p-2 flex flex-row justify-between items-center'>
			<ul className='flex flex-row gap-8'>
				<li className='flex flex-col gap-1'>
					<h3>{`${telTitle}:`}</h3>
					<div>
						<p>{cityTel}</p>
						<p>{mobileTel}</p>
					</div>
					<div>
						<h3>{`${emailTitle}:`}</h3>
						<p>{email}</p>
					</div>
				</li>
				<li>
					<h3>{`${adressTitle}:`}</h3>
					<p className='max-w-44'>{adress}</p>
				</li>
			</ul>
			<div className='flex flex-col items-end content-end'>
				<p className=''>{companyName}</p>
				<p className=''>{startAge}</p>
			</div>
		</footer>
	);
};

export default Footer;
