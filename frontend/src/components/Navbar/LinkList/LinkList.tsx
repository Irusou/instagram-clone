import "./LinkList.css";
import { Link } from "../Link/Link";

export const LinkList = () => {
	return (
		<>
			<div className="links-container">
				<Link children="Página inicial" icon="home" isIcon={false} />
				<Link children="Pesquisa" icon="search" isIcon={false} />
				<Link children="Explorar" icon="explore" isIcon={false} />
				<Link children="Reels" icon="movie" isIcon={false} />
				<Link children="Mensagens" icon="send" isIcon={false} />
				<Link children="Notificações" icon="favorite" isIcon={false} />
				<Link children="Criar" icon="add_box" isIcon={false} />
				<Link children="Perfil" icon="" isIcon={true} />
			</div>
		</>
	);
};
