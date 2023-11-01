import { useEffect, useState } from "react";
import "./Main.css";
import Follower from "../Follower/Follower";
import MainNav from "./MainNav/MainNav";

interface Follower {
	name: string;
	url: string;
}

const demoFollowers: Follower[] = [
	{ name: "teste", url: "some-url" },
	{ name: "teste2", url: "some-url2" },
];

function Main() {
	const [forYou, setForYou] = useState(true);
	const [followers, setFollowers] = useState<Follower[]>(demoFollowers);
	const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	// fetch from db
	// 	setFollowers([]);
	// }, [forYou]);

	// useEffect(() => {
	// 	// fetch from db
	// 	setPosts([]);
	// }, [forYou]);

	const handleForYou = () => {
		setForYou(true);
		console.log(forYou);
	};

	const handleFollowing = () => {
		setForYou(false);
		console.log(forYou);
	};

	return (
		<>
			<main className="main">
				<MainNav
					handleForYou={handleForYou}
					handleFollowing={handleFollowing}
				/>
				<div className="followers-carousel">
					{followers &&
						followers.map((follower) => (
							<Follower url={follower.url} children={follower.name} />
						))}
				</div>
				<div className="posts-container">
					{
						posts &&
							posts.map((post) => (
								<span key={post}></span>
							)) /* <- transform into post component */
					}
				</div>
			</main>
		</>
	);
}

export default Main;
