import PropTypes from 'prop-types';
const ContactList = ({ usersList, deleteUser }) => {
  return (
    <ul>
      {usersList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}: {number}</p>
						<button type='button'onClick={() => deleteUser(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
	deleteUser: PropTypes.func.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export { ContactList };
