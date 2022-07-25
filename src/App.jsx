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
    return (
      <>  
				<h1>Phonebook</h1>
          <ContactForm  addUserData={this.addUserData} />
				<h2>Contacts</h2>
					<Filter filter={filter} handlerFilter={this.handlerFilter}/>
					<ContactList usersList={this.getVisableUsers()} deleteUser={this.deleteUser}/>
      </>
    );
  }
}
export { App }
