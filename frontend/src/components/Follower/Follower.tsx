import "./Follower.css";

interface Follower {
	name: string;
	url: string;
}

function Follower({ name, url }: Follower) {
	return (
		<>
			<div className="follower">
				<span className="outer-circle">
					<span className="image">
						<img src={url} />
					</span>
				</span>
				<p> {name} </p>
			</div>
		</>
	);
}

export default Follower;
