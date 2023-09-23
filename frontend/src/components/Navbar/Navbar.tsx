import "./Navbar.css";
import { LinkList } from "./LinkList/LinkList";
import { Link } from "./Link/Link";

export const Navbar = () => {
	const title = "Instagram"; //could be changed in the future, like twitter

	return (
		<>
			<nav className="navbar">
				<a href="/" className="title-link">
					{title}
				</a>
				<LinkList />
				<Link children="Mais" icon="menu" isIcon={false} />
			</nav>
		</>
	);
};
