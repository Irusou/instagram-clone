import "./Follower.css";

interface Props {
	children: string;
	url: string;
}

function Follower({ children, url }: Props) {
	return (
		<>
			<div className="follower">
				<span className="outer-circle">
					<span className="image">
						<img src={url} />
					</span>
				</span>
				<p> {children} </p>
			</div>
		</>
	);
}

export default Follower;
