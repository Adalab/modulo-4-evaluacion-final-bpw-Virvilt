import { useState, useEffect } from "react";
import "../scss/App.scss";
import BookList from "./BookList";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Filters from "./Filters";
import CreateBook from "./CreateBook";

const INITIAL_BOOK_DATA = {
	name: "",
	category: "",
	year: "",
	platform_id: "",
};

function App() {
	const navigate = useNavigate();

	const [platformsArray, setPlatformsArray] = useState(undefined);
	const [booksArray, setBooksArray] = useState(undefined);

	// Filtros
	const [searchName, setSearchName] = useState("");
	const [order, setOrder] = useState("name");
	const [newBookData, setNewBookData] = useState(INITIAL_BOOK_DATA);

	const handleInput = (field, value) => {
		setNewBookData({
			...newBookData,
			[field]: value,
		});
	};

	const handleCreate = async () => {
		console.log("Enviar newBookData", newBookData);
		const res = await fetch("http://localhost:4000/api/books", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newBookData),
		});

		const resData = await res.json();

		console.log(resData);
	};

	const handleChangeFilters = (field, value) => {
		if (field === "name") {
			setSearchName(value);
		} else if (field === "order") {
			setOrder(value);
		}
	};

	useEffect(() => {}, [searchName, order]);

	useEffect(() => {
		async function fetchPlatforms() {
			try {
				const res = await fetch("http://localhost:4000/api/platforms");
				const data = await res.json();
				setPlatformsArray(data);
			} catch (error) {
				console.log("Error ", error);
			}
		}
		fetchPlatforms();

		async function fetchBooks() {
			try {
				const res = await fetch("http://localhost:4000/api/books");
				const data = await res.json();
				setBooksArray(data);
			} catch (error) {
				console.log("Error ", error);
			}
		}
		fetchBooks();
	}, []);

	return (
		<div className="page">
			<header>
				<h1>Biblioteca!</h1>
			</header>
			<main className="mt-1">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Filters
									searchName={searchName}
									order={order}
									onChange={handleChangeFilters}
								/>
								<BookList
									booksArray={booksArray}
									platformsArray={platformsArray}
								/>
								<Link className="form__btn" to="/create">
									Añadir libro
								</Link>
							</>
						}
					/>
					<Route
						path="/create"
						element={
							<CreateBook
								data={newBookData}
								onSubmit={handleCreate}
								onInput={handleInput}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
