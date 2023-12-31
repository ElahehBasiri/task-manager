import { chakra } from "@chakra-ui/react";
const DisableIcon = (props: Props) => {
	return (
		<chakra.svg
			width="15"
			height="16"
			viewBox="0 0 15 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="7.5" cy="8" r="7" stroke="black" />
			<line
				x1="12.3536"
				y1="2.85355"
				x2="2.35355"
				y2="12.8536"
				stroke="currentColor"
			/>
		</chakra.svg>
	);
};

export default DisableIcon;
