import { useState, useEffect } from "react";

interface Props {
	password: string;
}
export const StrengthStates = ({ password }: Props) => {
	const [strengthState, setStrengthState] = useState("");

	useEffect(() => {
		if (password.length <= 4 && password) {
			setStrengthState("too weak!");
		} else if (password.length > 4 && password.length <= 6) {
			setStrengthState("weak");
		} else if (password.length > 6 && password.length <= 10) {
			setStrengthState("medium");
		} else if (password.length > 10) {
			setStrengthState("strong");
		}
	}, [password]);

	return (
		<div className="flex items-center">
			<span className="body sm:heading-m mr-4 ">{strengthState}</span>

			{!strengthState && (
				<>
					<div className="h-7 w-[10px] border-2 border-almost_white mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white mr-2" />
					<div className="h-7 w-[10px]  border-2 border-almost_white a mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white" />
				</>
			)}

			{strengthState === "too weak!" && (
				<>
					<div className="h-7 w-[10px] bg-danger mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white mr-2" />
					<div className="h-7 w-[10px]  border-2 border-almost_white a mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white" />
				</>
			)}

			{strengthState === "weak" && (
				<>
					<div className="h-7 w-[10px] bg-peach mr-2" />
					<div className="h-7 w-[10px] bg-peach mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white a mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white" />
				</>
			)}

			{strengthState === "medium" && (
				<>
					<div className="h-7 w-[10px] bg-banana mr-2" />
					<div className="h-7 w-[10px] bg-banana mr-2" />
					<div className="h-7 w-[10px] bg-banana mr-2" />
					<div className="h-7 w-[10px] border-2 border-almost_white" />
				</>
			)}

			{strengthState === "strong" && (
				<>
					<div className="h-7 w-[10px] bg-neon_green mr-2" />
					<div className="h-7 w-[10px] bg-neon_green mr-2" />
					<div className="h-7 w-[10px] bg-neon_green mr-2" />
					<div className="h-7 w-[10px] bg-neon_green" />
				</>
			)}
		</div>
	);
};
