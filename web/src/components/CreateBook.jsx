import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CreateBook({ platformsArray, data, onSubmit, onInput }) {
	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSubmit();
	};

	const handleInput = (ev) => {
		onInput(ev.currentTarget.id, ev.currentTarget.value);
	};
	const handleNumber = (ev) => {
		onInput(ev.currentTarget.id, parseInt(ev.currentTarget.value));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Datos del libro</h2>
			<div className="fields">
				<label htmlFor="name">Título: </label>
				<input
					type="text"
					name="name"
					id="name"
					onInput={handleInput}
					value={data.name}
				/>
				<label htmlFor="year">Año: </label>
				<input
					type="numeric"
					name="year"
					id="year"
					onInput={handleNumber}
					value={data.year}
				/>
				<label htmlFor="category">Categoría: </label>
				<input
					type="text"
					name="category"
					id="category"
					onInput={handleInput}
					value={data.category}
				/>
				<label htmlFor="platform">Tienda: </label>
				<select
					name="platform_id"
					id="platform_id"
					onInput={handleNumber}
					value={data.platform_id}
				>
					{platformsArray.map((opcion, index) => (
						<option key={index} value={opcion.id}>
							{opcion.name}
						</option>
					))}
				</select>
			</div>

			<button className="form__btn" onClick={handleSubmit}>
				Guardar
			</button>
			<Link className="form__btn" to="/">
				Volver
			</Link>
		</form>
	);
}

CreateBook.propTypes = {
	platformsArray: PropTypes.array,
	data: PropTypes.shape({
		name: PropTypes.string,
		year: PropTypes.number,
		category: PropTypes.string,
		platform: PropTypes.number,
	}).isRequired,
	onSubmit: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
};

export default CreateBook;
