import { ProfilePhoto } from "../../ProfilePhoto/ProfilePhoto";
import "./Link.css";

interface Props {
	children: string;
	icon: string;
	isIcon: boolean;
	profileImage?: string;
}

export const Link = ({ children, icon, isIcon = false }: Props) => {
	return (
		<a href="/" className="link">
			{isIcon ? (
				<ProfilePhoto />
			) : (
				<span className="material-symbols-outlined ">{icon}</span>
			)}

			{children}
		</a>
	);
};
