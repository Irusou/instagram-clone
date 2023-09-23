import "./MainNav.css";

interface Props {
	handleForYou: () => void;
	handleFollowing: () => void;
}

function MainNav({ handleForYou, handleFollowing }: Props) {
	return (
		<nav className="main-nav">
			<button onClick={handleForYou}>Para ti</button>
			<button onClick={handleFollowing}>A seguir</button>
		</nav>
	);
}

export default MainNav;
