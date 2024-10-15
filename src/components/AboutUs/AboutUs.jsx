import { aboutUsTitle, aboutUsDescription } from "../../constants/constants";
import worker from "../../images/worker.jpg";
import sign from "../../images/sign.jpg";
import car from "../../images/car.jpg";

const AboutUs = () => {
	return (
		<section className='w-full flex flex-col justify-center items-center py-2'>
			<h2 className='title'>{aboutUsTitle}</h2>
			<ul className='flex flex-col justify-center items-center gap-4'>
				<li className='max-w-[1031px] inline-block max-h-40 border-2 rounded-md border-red'>
					<p className='text-center text-red'>
						{aboutUsDescription.four}
					</p>
				</li>
				<li className='aboutus__listitem'>
					<img className='aboutus__img' alt='car' src={car}></img>
					<p className='aboutus__text'>{aboutUsDescription.first}</p>
				</li>
				<li className='aboutus__listitem'>
					<img
						className='aboutus__img'
						alt='worker'
						src={worker}></img>
					<p className='aboutus__text'>{aboutUsDescription.second}</p>
				</li>
				<li className='aboutus__listitem'>
					<img className='aboutus__img' alt='sign' src={sign}></img>
					<p className='aboutus__text'>{aboutUsDescription.third}</p>
				</li>
			</ul>
		</section>
	);
};

export default AboutUs;
