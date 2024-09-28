import PropTypes from "prop-types";

function BookItem({ book, platformsArray }) {
	let platform = "";
	if (platformsArray[book.platform_id] !== undefined) {
		platform = platformsArray[book.platform_id].name;
	}

	return (
		<>
			<h2 className="card__title">{book.name}</h2>
			<div>
				<div class="card_info">
					<p className="card__description text--bold">{book.year}</p>
					<p className="card__description">
						{book.category || "Sin categoria"}
					</p>
					<p className="card__description">{platform}</p>
				</div>
			</div>
		</>
	);
}

BookItem.propTypes = {
	book: PropTypes.shape({
		name: PropTypes.string.isRequired,
		year: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		platform_id: PropTypes.number.isRequired,
	}).isRequired,
	platformsArray: PropTypes.array.isRequired,
};

export default BookItem;
