import { chakra } from "@chakra-ui/react";
const UserProfileEditIcon = (props: Props) => {
	return (
		<chakra.svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15 5.7C16.7 7.4 16.7 10.1 15 11.7C13.3 13.3 10.6 13.4 8.99999 11.7C7.39999 10 7.29999 7.3 8.99999 5.7C10.7 4.1 13.3 4.1 15 5.7"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M4 20.5C4 18 6 16 8.5 16H11.1"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M14 21.5H16.3L19.7 18.1C20.1 17.7 20.1 17.1 19.7 16.7L18.8 15.8C18.4 15.4 17.8 15.4 17.4 15.8L14 19.2V21.5V21.5H14Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	);
};

export default UserProfileEditIcon;
