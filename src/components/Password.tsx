import { Dispatch, SetStateAction, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
	password: string;
	copied: boolean;
	setCopied: Dispatch<SetStateAction<boolean>>;
}
export const Password = ({ password, copied, setCopied }: Props) => {
	return (
		<div className="flex justify-between items-center bg-dark_gray py-4 px-3 rounded-md">
			<span className={`${!password ? "text-almost_white/25" : ""} heading-m`}>
				{!password ? "password" : password}
			</span>

			<div className="flex ">
				{copied && <span className="text-neon_green mr-2">COPIED</span>}
				<CopyToClipboard onCopy={() => setCopied(true)} text={password}>
					<FaRegCopy className="w-5 h-5 mb-1 fill-neon_green hover:fill-white block " />
				</CopyToClipboard>
			</div>
		</div>
	);
};
