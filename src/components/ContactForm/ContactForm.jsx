import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

class ContactForm extends Component {
	static propTypes = {
		addUserData: PropTypes.func.isRequired
	};
  state = {
    name: '',
    number: '',
  };
	
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

	resetForm = () => {
		this.setState({ name: '', number: '' });
	}

  onSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const user = { ...this.state, id };
		if(user.name.trim() === '' || user.number.trim() === '' ) {
			alert('Invalid data entry.')
			return;
		}
		this.props.addUserData(user);
		this.resetForm();
  };
	
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
					type="text"
					name="name"
					value={name}
          onChange={this.handleChange}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
          />
        </label>
        <label>
          Number
          <input
					 type="tel"
					 name="number"
					 value={number}
					 onChange={this.handleChange}
					 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					 required
          />
        </label>

        <button type="submit" onClick={this.onSubmit}>Add contact</button>
      </form>
    );
  }
}

export { ContactForm };