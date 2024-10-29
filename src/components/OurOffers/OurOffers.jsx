import Card from "../Card/Card";
import { ourOffer } from "../../constants/constants";
import { ourOffers } from "../../constants/images";

const OurOffers = () => {
	return (
		<section className=' py-2 flex flex-col justify-center items-center'>
			<h2 className='title'>{ourOffer}</h2>
			<ul className='grid grid-cols-4 auto-cols-fr gap-3 justify-items-center'>
				{ourOffers.map((item) => {
					return (
						<Card
							key={crypto.randomUUID()}
							name={item.name}
							photo={item.photo}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default OurOffers;
