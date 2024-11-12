import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { requestFormTitle, formPlaceholder } from "../../constants/constants";
import { requestFormAction } from "../../store/requestFormReducer";
import { submitBtnText, inputTitle } from "../../constants/constants";

const RoolRequestForm = () => {
	const dispatch = useDispatch();
	const modalReducer = useSelector((state) => state.modalReducer);
	const [shadowColorInput, setShadowColorInput] = useState("shadow-none");
	const [shadowColorForm, setShadowColorForm] = useState("shadow-gray");
	const [isValidForm, setIsValidForm] = useState(true);
	const [isDirty, setIsDirty] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [production, setProduction] = useState("");

	useEffect(() => {
		console.log(formPlaceholder.name);
	}, []);

	function handleBlur() {
		setIsDirty(true);
	}

	function handleFocus() {
		setIsFocused(true);
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
			requestFormAction({
				isOpened: false,
				name,
				phone,
				text: production,
			})
		);
	}

	return (
		<Modal>
			{
				<form
					noValidate
					onSubmit={(e) => handleSubmit(e)}
					className={`w-4/12 px-5 pt-3 pb-5 rounded bg-gray/80 flex flex-col justify-center gap-3 shadow-${shadowColorForm} shadow-lg`}>
					<fieldset className='flex flex-col gap-3 w-full'>
						<legend className='w-full mb-5 text-center border-b-2 border-black font-bold text-2xl'>
							{requestFormTitle}
						</legend>
						<p className='input__wrapper'>
							<label className='input__label' htmlFor='name'>
								{inputTitle.name}
							</label>
							<input
								onBlur={handleBlur}
								onFocus={handleFocus}
								value={name}
								onChange={(e) => setName(e.target.value)}
								autoComplete='off'
								minLength={2}
								maxLength={20}
								required
								className={`${shadowColorInput} form__input `}
								type='text'
								id='name'
								placeholder={`${formPlaceholder.name}`}
							/>
						</p>
						<p className='input__wrapper'>
							<label className='input__label' htmlFor='tel'>
								{inputTitle.phone}
							</label>
							<input
								onBlur={() => handleBlur()}
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								autoComplete='off'
								required
								className='form__input'
								type='tel'
								id='phone'
								placeholder={`${formPlaceholder.phone}`}
							/>
						</p>
						<p className='input__wrapper'>
							<label className='input__label' htmlFor='text'>
								{inputTitle.production}
							</label>
							<input
								onBlur={() => handleBlur()}
								value={production}
								onChange={(e) => setProduction(e.target.value)}
								autoComplete='off'
								maxLength='200'
								className='form__input'
								type='text'
								id='text'
								placeholder={`${formPlaceholder.text}`}
							/>
						</p>
					</fieldset>
					<button
						disabled={isValidForm}
						type='submit'
						className='btn__submit-form'>
						{submitBtnText}
					</button>
				</form>
			}
		</Modal>
	);
};

export default RoolRequestForm;
