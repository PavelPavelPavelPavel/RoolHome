import Card from "../Card/Card";
import { ourOffer, ourOffers } from "../../constants/constants";

const OurOffers = () => {
	return (
		<section className=' py-2 flex flex-col justify-center items-center'>
			<h2 className='title'>{ourOffer}</h2>
			<ul className='grid grid-rows-3 grid-flow-col gap-3'>
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
