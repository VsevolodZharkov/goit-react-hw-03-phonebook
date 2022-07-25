import { Component } from 'react';
import { ContactForm  } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList'
import {  Filter } from './components/Filter/Filter'
import './index'
class App extends Component {
  state = {
    contacts : [],
		filter: '',
  };

	componentDidMount() {
    const contactsLS = localStorage.getItem('contacts');
    if (contactsLS) {
      this.setState({contacts: JSON.parse(contactsLS)});
    }
  }

  componentDidUpdate( prevProps, prevState  ) {
		const { contacts } =  this.state;
    if (contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  addUserData = user => {
		const { contacts } = this.state;
		const a = contacts.find(({name}) => name === user.name)
		if(a) {
			alert( user.name + ' is already in contacts.' );
			return;
		}
    this.setState(prevState => ({
      contacts: [...prevState.contacts , user],
    }));
  };
	
	handlerFilter = ({target: {value}}) => {
		this.setState({filter: value})
	}
	getVisableUsers = () => {
		const { filter, contacts  } = this.state;
		return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
	}
	deleteUser = (userId) => {
		const { contacts } = this.state;
		let newMutMas = contacts.filter(({id}) => id !== userId)
		this.setState(({contacts: [...newMutMas]}))
	}

  render() {
		const { filter } = this.state;
		const userList = this.getVisableUsers();
    return (
      <>  
				<h1>Phonebook</h1>
          <ContactForm  addUserData={this.addUserData} />
				<h2>Contacts</h2>
					<Filter filter={filter} handlerFilter={this.handlerFilter}/>
					<ContactList usersList={userList} deleteUser={this.deleteUser}/>
      </>
    );
  }
}
export { App }
