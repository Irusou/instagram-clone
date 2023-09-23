import "./ProfilePhoto.css";

export const ProfilePhoto = () => {
	const url = "/frontend/public/eu.jpg";

	return (
		<>
			{/* 
        TODO: solve image not loading error
      */}
			<img src={url} />
		</>
	);
};
