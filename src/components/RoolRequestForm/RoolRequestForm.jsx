import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "../../utils/hooks/useInput";
import Modal from "../Modal/Modal";
import { validityMaxLength } from "../../utils/validation/maxLength";
import { validityMinLength } from "../../utils/validation/minLength";
import { validityOnlyLetter } from "../../utils/validation/onlyLetter";
import { validityPhone } from "../../utils/validation/phoneRegex";
import { validityEmail } from "../../utils/validation/emailRegex";
import { replacementFirstLetterToUpperCase } from "../../utils/function/replacementFirstLetterToUpperCase";
import {
	formStyleInitial,
	formStyleIsOk,
	inputStyleError,
	inputStyleInitial,
} from "../../constants/stateConstants";
import {
	typeError,
	requiredFieldError,
	minFieldLengthError,
	maxFieldLengthError,
	phoneError,
	emailError,
} from "../../constants/errors";
import {
	requestFormTitle,
	formPlaceholder,
	submitBtnTextDisabled,
} from "../../constants/constants";
import { requestFormAction } from "../../store/requestFormReducer";
import { submitBtnText, inputTitle } from "../../constants/constants";

const RoolRequestForm = () => {
	const dispatch = useDispatch();
	const name = useInput("");
	const phone = useInput("");
	const text = useInput("");
	const email = useInput("");
	const [shadowColorForm, setShadowColorForm] = useState(formStyleInitial);
	const [btnSubmitText, setBtnSubmitText] = useState(submitBtnTextDisabled);
	const [isValidForm, setIsValidForm] = useState(false);

	// валидируем фому активируем кнопку и ставим стили подсветки
	useEffect(() => {
		if (!isValidForm) {
			setBtnSubmitText(submitBtnTextDisabled);
			setShadowColorForm(formStyleInitial);
		} else if (isValidForm) {
			setBtnSubmitText(submitBtnText);
			setShadowColorForm(formStyleIsOk);
		}
	}, [isValidForm]);

	//валидируем всю форму
	useEffect(() => {
		if (
			validationInputEmail().length > 0 ||
			validationInputPhone().length > 0 ||
			validationInputName().length > 0
		)
			setIsValidForm(false);
		else if (
			validationInputEmail() &&
			validationInputPhone() &&
			phone.blured &&
			validationInputName() &&
			name.blured
		) {
			setIsValidForm(true);
		}
	}, [validationInputName(), validationInputPhone(), validationInputEmail()]);

	function validationInputName() {
		if (validityOnlyLetter(name.value)) return typeError;
		else if (validityMaxLength(name.value, 10))
			return `${maxFieldLengthError}10`;
		else if (validityMinLength(name.value, 2))
			return `${minFieldLengthError}2`;
		else if (name.blured && name.value.length < 1)
			return requiredFieldError;
		else return true;
	}

	function validationInputPhone() {
		if (validityPhone(phone.value)) return phoneError;
		else if (phone.blured && phone.value.length < 1)
			return requiredFieldError;
		else return true;
	}

	function validationInputEmail() {
		if (validityEmail(email.value)) return emailError;
		else return true;
	}

	// ставим стили подсветке inputa
	function setStyleToInput(inputValidation) {
		if (!inputValidation) {
			return inputStyleInitial;
		} else if (inputValidation.length > 0) {
			return inputStyleError;
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await dispatch(
			requestFormAction({
				isOpened: false,
				name: name.value,
				phone: phone.value,
				text: text.value,
			})
		);
	}

	return (
		<Modal>
			{
				<>
					<form
						noValidate
						onSubmit={(e) => handleSubmit(e)}
						className={`form ${shadowColorForm}`}>
						<fieldset className='flex flex-col gap-1 w-full'>
							<legend className='w-full mb-5 text-center border-b-2 border-black font-bold text-2xl'>
								{requestFormTitle}
							</legend>
							<p className='input__wrapper'>
								<label className='input__label' htmlFor='name'>
									{inputTitle.name}
								</label>
								<input
									{...name}
									value={replacementFirstLetterToUpperCase(
										name.value
									)}
									autoComplete='off'
									onBlur={
										name.onBlur
											? () => name.onBlur(true)
											: undefined
									}
									onFocus={() => name.onBlur(true)}
									required
									className={`${inputStyleInitial} ${setStyleToInput(
										validationInputName()
									)}`}
									type='text'
									id='name'
									placeholder={`${formPlaceholder.name}`}
								/>
								<span className='input__err'>
									{name.blured && validationInputName()}
								</span>
							</p>
							<p className='input__wrapper'>
								<label className='input__label' htmlFor='tel'>
									{inputTitle.phone}
								</label>
								<input
									{...phone}
									autoComplete='off'
									onBlur={
										phone.onBlur
											? () => phone.onBlur(true)
											: undefined
									}
									onFocus={() => phone.onBlur(true)}
									required
									className={`${inputStyleInitial} ${setStyleToInput(
										validationInputPhone()
									)}`}
									type='tel'
									id='phone'
									placeholder={`${formPlaceholder.phone}`}
								/>
								<span className='input__err'>
									{phone.blured && validationInputPhone()}
								</span>
							</p>
							<p className='input__wrapper'>
								<label className='input__label' htmlFor='tel'>
									{inputTitle.email}
								</label>
								<input
									{...email}
									autoComplete='off'
									required
									onBlur={
										email.onBlur
											? () => email.onBlur(true)
											: undefined
									}
									onFocus={() => email.onBlur(true)}
									className={`${inputStyleInitial} ${setStyleToInput(
										validationInputEmail()
									)}`}
									type='email'
									id='email'
									placeholder={`${formPlaceholder.email}`}
								/>
								<span className='input__err'>
									{email.blured && validationInputEmail()}
								</span>
							</p>
							<p className='input__wrapper'>
								<label className='input__label' htmlFor='text'>
									{inputTitle.production}
								</label>
								<input
									{...text}
									autoComplete='off'
									maxLength='200'
									onBlur={
										text.onBlur
											? () => text.onBlur(true)
											: undefined
									}
									onFocus={() => text.onBlur(true)}
									className={`${inputStyleInitial}`}
									type='text'
									id='text'
									placeholder={`${formPlaceholder.text}`}
								/>
							</p>
						</fieldset>
						<button
							disabled={!isValidForm}
							type='submit'
							className='btn__submit-form'>
							{btnSubmitText}
						</button>
					</form>
				</>
			}
		</Modal>
	);
};

export default RoolRequestForm;
