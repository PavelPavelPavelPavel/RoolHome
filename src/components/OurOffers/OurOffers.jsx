import Card from "../Card/Card";
import { useState } from "react";
import { ourOffer } from "../../constants/constants";
import { ourOffers } from "../../constants/images";

const OurOffers = () => {
	const [renderList, setRenderList] = useState(ourOffers);

	return (
		<section className=' py-2 flex flex-col justify-center items-center pb-5'>
			<h2 className='title'>{ourOffer}</h2>
			<ul className='sm:grid xs:flex xs:flex-col sm:grid-cols-3 md:grid-cols-4 auto-cols-fr xs:gap-2 md:gap-3 justify-items-center'>
				{renderList.map((item) => {
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
