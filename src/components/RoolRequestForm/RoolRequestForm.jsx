import Modal from "../Modal/Modal";
import { requestFormTitle } from "../../constants/constants";
import { submitBtnText, inputTitle } from "../../constants/constants";

const RoolRequestForm = () => {
	function handleSubmit(e) {
		e.preventDefault();
		console.log("click");
	}
	return (
		<Modal>
			{
				<form
					noValidate
					onSubmit={(e) => handleSubmit(e)}
					className='w-4/12 px-5 pt-3 pb-5 rounded bg-gray/80 flex flex-col justify-center gap-3'>
					<fieldset className='flex flex-col gap-3 w-full'>
						<legend className='w-full mb-5 text-center border-b-2 border-black font-bold text-2xl'>
							{requestFormTitle}
						</legend>
						<p className='input__wrapper'>
							<label className='input__label' htmlFor='name'>
								{inputTitle.name}
							</label>
							<input
								required
								className='form__input'
								type='text'
								id='name'
							/>
						</p>
						<p className='input__wrapper'>
							<label className='input__label' htmlFor='tel'>
								{inputTitle.phone}
							</label>
							<input
								required
								className='form__input'
								type='tel'
								id='phone'
							/>
						</p>
						<p className='input__wrapper'>
							<label className='input__label' htmlFor='text'>
								{inputTitle.production}
							</label>
							<input
								className='form__input'
								type='text'
								id='text'
							/>
						</p>
					</fieldset>
					<button
						type='submit'
						className='mt-5 w-full h-11 border-black border-2 rounded font-bold duration-200 text-xl hover:bg-blue/50 hover:border-blue active:scale-95'>
						{submitBtnText}
					</button>
				</form>
			}
		</Modal>
	);
};

export default RoolRequestForm;
