import { useState } from "react";
import Follower from "./../../Follower/Follower";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface FollowersCarouselProps {
	followers: Follower[];
}
export default function FollowersCarousel({
	followers,
}: FollowersCarouselProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleSelect = (index: number) => {
		setSelectedIndex(index);
	};

	return (
		<>
			<div className="followers-carousel">
				<Carousel
					showStatus={false}
					showThumbs={false}
					selectedItem={selectedIndex}
					onChange={handleSelect}
					transitionTime={500}
					infiniteLoop={false}
					showArrows={true} // Show arrows when there are more items to scroll
				>
					{followers.map((follower) => (
						<Follower name={follower.name} url={follower.url} />
					))}
				</Carousel>
			</div>
		</>
	);
}
