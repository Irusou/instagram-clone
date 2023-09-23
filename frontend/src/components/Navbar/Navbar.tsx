import "./Navbar.css";
import { Link } from "./Link/Link";

export const Navbar = () => {
	const title = "Instagram"; //could be changed in the future, like twitter

	return (
		<>
			<nav className="navbar">
				<a href="/" className="title-link">
					{title}
				</a>
				<Link children="Página inicial" icon="home" />
				<Link children="Pesquisa" icon="search" />
				<Link children="Explorar" icon="explore" />
				<Link children="Reels" icon="movie" />
				<Link children="Mensagens" icon="send" />
				<Link children="Notificações" icon="favorite" />
				<Link children="Criar" icon="add_box" />
				<Link children="Perfil" icon="" />
				<Link children="Mais" icon="menu" />
			</nav>
		</>
	);
};
