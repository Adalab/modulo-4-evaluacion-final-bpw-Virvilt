import PropTypes from "prop-types";

function BookItem({ book, platformsArray }) {
	const { name, year, category, platform_id } = book;

	return (
		<>
			<h2 className="card__title">{name}</h2>
			<div className="col2">
				<div>
					<p className="card__title text--bold">{year}</p>
					<p className="card__description">
						{category || "Sin categoria"}
					</p>
					<p className="card__description">
						{platformsArray[platform_id].name}
					</p>
				</div>
			</div>
		</>
	);
}

BookItem.propTypes = {
	book: PropTypes.shape({
		name: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		category: PropTypes.string.isRequired,
		platform: PropTypes.number.isRequired,
	}).isRequired,
	platformsArray: PropTypes.array.isRequired,
};

export default BookItem;
