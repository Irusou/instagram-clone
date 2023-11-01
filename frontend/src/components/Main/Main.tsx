import { useState } from "react";
import "./Main.css";
import MainNav from "./MainNav/MainNav";
import FollowersCarousel from "./FollowersCarousel/FollowersCarousel";
import Follower from "../Follower/Follower";

function Main() {
	const [forYou, setForYou] = useState(true);
	const followers: Follower[] = [
		{
			name: "Irus0u",
			url: "/public/eu.jpg",
		},
		{
			name: "Garou",
			url: "/public/garou.jpg",
		},
		{
			name: "Sung",
			url: "/public/unkklnown.png",
		},
		{
			name: "I_uwuzumi",
			url: "/public/izumi.jpg",
		},
	];

	const posts: any[] = [];

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
				<FollowersCarousel followers={followers} />
				<div className="posts-container">
					{posts && posts.map((post) => <span key={post}></span>)}
				</div>
			</main>
		</>
	);
}

export default Main;
