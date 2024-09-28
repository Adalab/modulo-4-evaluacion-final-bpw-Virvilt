import PropTypes from "prop-types";

function Filters({ searchName, order, onChange }) {
	const handleChangeName = (ev) => {
		onChange("name", ev.currentTarget.value);
	};

	const handleChangeOrder = (ev) => {
		onChange("order", ev.currentTarget.value);
	};

	return (
		<form className="mt-1 mb-1 ml-1">
			<label className="form__label" htmlFor="searchName">
				Por nombre:
			</label>
			<input
				className="form__input-text"
				type="text"
				name="searchName"
				id="searchName"
				value={searchName}
				onInput={handleChangeName}
			/>

			<label className="form__label ml-1">Ordenar por:</label>
			<input
				type="radio"
				name="order"
				id="orderBy-name"
				value="name"
				checked={order === "name"}
				onChange={handleChangeOrder}
			/>
			<label htmlFor="orderBy-name">Nombre</label>
			<input
				type="radio"
				name="order"
				id="orderBy-date"
				value="date"
				checked={order === "date"}
				onChange={handleChangeOrder}
			/>
			<label htmlFor="orderBy-date">Fecha</label>
		</form>
	);
}

Filters.propTypes = {
	searchName: PropTypes.string.isRequired,
	order: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Filters;
