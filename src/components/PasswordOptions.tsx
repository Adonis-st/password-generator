import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { StrengthStates } from "./StrengthStates";

interface Props {
	password: string;
	setPassword: Dispatch<SetStateAction<string>>;
	setCopied: Dispatch<SetStateAction<boolean>>;
}
export const PasswordOptions = ({ password, setPassword, setCopied }: Props) => {
	const [passwordLength, setPasswordLength] = useState(10);
	const maxPasswordLength = 20;

	const getBackgroundSize = {
		backgroundSize: `${(passwordLength * 100) / maxPasswordLength}% 100%`,
	};

	const [include, setInclude] = useState({
		upperCase: false,
		lowerCase: false,
		numbers: false,
		symbols: false,
	});

	const notify = (text: string) => toast.error(text);

	const handleSlide = (e: any) => {
		setPasswordLength(e.target.value);
	};

	const handleChange = (e: any) => {
		setInclude((prevState) => ({
			...prevState,
			[e.target.name]: e.target.checked,
		}));
	};

	const random = (min = 0, max = 1) => {
		return Math.floor(Math.random() * (max + 1 - min) + min);
	};

	const randomLower = () => {
		return String.fromCharCode(random(97, 122));
	};

	const randomUpper = () => {
		return String.fromCharCode(random(65, 90));
	};

	const randomSymbol = () => {
		const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
		return symbols[random(0, symbols.length - 1)];
	};

	const generatePassword = (e: any) => {
		e.preventDefault();

		if (passwordLength < 1) {
			return notify("Your password is to small");
		}

		if (include.lowerCase || include.upperCase || include.symbols || include.numbers) {
			let password = "";
			for (let i = 0; i < passwordLength; i++) {
				let choice = random(0, 3);
				if (include.lowerCase && choice === 0) {
					password += randomLower();
				} else if (include.upperCase && choice === 1) {
					password += randomUpper();
				} else if (include.symbols && choice === 2) {
					password += randomSymbol();
				} else if (include.numbers && choice === 3) {
					password += random(0, 9);
				} else {
					i--;
				}
			}
			setPassword(password);
			setCopied(false);
		} else {
			return notify("Please select a option");
		}
	};

	useEffect(() => {
		(e: any) => generatePassword(e);
	}, []);

	return (
		<div className="bg-dark_gray mt-4 py-4 px-3 rounded-md">
			<Toaster />
			<div className="flex items-center justify-between">
				<span className="font-bold text-almost_white">Character Length</span>
				<span className="heading-m text-neon_green">{passwordLength}</span>
			</div>
			<input
				type="range"
				min={0}
				max={maxPasswordLength}
				value={passwordLength}
				className="slider"
				style={getBackgroundSize}
				onChange={handleSlide}
			/>

			<form onSubmit={generatePassword}>
				<div className="flex mt-5">
					<input
						type="checkbox"
						id="upperCase"
						name="upperCase"
						onChange={handleChange}
						checked={include.upperCase}
						className="input-check"
					/>
					<label htmlFor="upperCase" className="text-almost_white font-bold ml-4">
						Include Uppercase Letters
					</label>
				</div>
				<div className="mt-3">
					<input
						type="checkbox"
						id="lowerCase"
						name="lowerCase"
						onChange={handleChange}
						checked={include.lowerCase}
						className="input-check"
					/>
					<label htmlFor="lowerCase" className="text-almost_white font-bold ml-4">
						Include Lowercase Letters
					</label>
				</div>
				<div className="mt-3">
					<input
						type="checkbox"
						id="numbers"
						name="numbers"
						onChange={handleChange}
						checked={include.numbers}
						className="input-check"
					/>
					<label htmlFor="numbers" className="text-almost_white font-bold ml-4">
						Include Numbers
					</label>
				</div>

				<div className="mt-3 ">
					<input
						type="checkbox"
						id="symbols"
						name="symbols"
						onChange={handleChange}
						checked={include.symbols}
						className="input-check"
					/>
					<label htmlFor="symbols" className="text-almost_white font-bold ml-4">
						Include Symbols
					</label>
				</div>
				<div className="bg-very_dark_gray px-3 py-3 uppercase mt-4 flex justify-between items-center">
					<span className="text-light_gray">Strength</span>
					<StrengthStates password={password} />
				</div>
				<button
					type="submit"
					className="px-2 py-4 uppercase bg-neon_green w-full mt-4 flex items-center justify-center border border-neon_green hover:bg-transparent hover:text-neon_green">
					<span>Generate</span>
					<span className="ml-2">
						<FaArrowRight />
					</span>
				</button>
			</form>
		</div>
	);
};
