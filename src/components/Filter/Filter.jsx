import PropTypes from 'prop-types';

const Filter = ({ filter, handlerFilter }) => {
  return (
    <form>
      <label>
        Find user by name
        <input
          type="text"
          name="name"
          value={filter}
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};
Filter.propTypes = {
  handlerFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export { Filter };
