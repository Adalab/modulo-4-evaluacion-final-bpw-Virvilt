import PropTypes from "prop-types";
import BookItem from "./BookItem";

function BookList({ booksArray, platformsArray }) {
	if (booksArray === undefined) {
		return (
			<div>
				<p>Leyendo información</p>
				<div className="loading mt-1 ml-1"></div>
			</div>
		);
	}

	if (booksArray.length === 0) {
		return (
			<div>
				<p>No hay libros</p>
			</div>
		);
	}

	const bookHTML = booksArray.map((book) => (
		<li key={book.id} className="card">
			<BookItem book={book} platformsArray={platformsArray} />
		</li>
	));

	return (
		<>
			<ul className="cards">{bookHTML}</ul>
		</>
	);
}

BookList.propTypes = {
	booksArray: PropTypes.array,
	platformsArray: PropTypes.array,
};

export default BookList;
