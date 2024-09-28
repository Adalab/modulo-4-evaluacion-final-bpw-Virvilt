import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CreateBook({ data, onSubmit, onInput }) {
	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSubmit();
	};

	const handleInput = (ev) => {
		onInput(ev.currentTarget.id, ev.currentTarget.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Datos de la nueva mascota</h2>
			<div className="fields">
				<label htmlFor="name">Nombre: </label>
				<input
					type="text"
					name="name"
					id="name"
					onInput={handleInput}
					value={data.name}
				/>
				<label htmlFor="species">Especie: </label>
				<input
					type="text"
					name="species"
					id="species"
					onInput={handleInput}
					value={data.species}
				/>
				<label htmlFor="breed">Raza: </label>
				<input
					type="text"
					name="breed"
					id="breed"
					onInput={handleInput}
					value={data.breed}
				/>
				<label htmlFor="age">Edad: </label>
				<input
					type="text"
					name="age"
					id="age"
					onInput={handleInput}
					value={data.age}
				/>
				<label htmlFor="reg_date">Fecha registro: </label>
				<input
					type="date"
					name="reg_date"
					id="reg_date"
					onInput={handleInput}
					value={data.reg_date}
				/>
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
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		species: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		reg_date: PropTypes.string.isRequired,
	}).isRequired,
	onSubmit: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
};

export default CreateBook;
