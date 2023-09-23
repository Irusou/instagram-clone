import "./Link.css";

interface Props {
	children: string;
	icon: string;
}

export const Link = ({ children, icon }: Props) => {
	return (
		<a href="/" className="link">
			<span className="material-symbols-outlined ">{icon}</span>
			{children}
		</a>
	);
};
