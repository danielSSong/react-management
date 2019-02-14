import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Daniel Song',
  'birthday': '910111',
  'gender': 'Male',
  'job': 'Student'

},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Lionel Messi',
  'birthday': '123456',
  'gender': 'Male',
  'job': 'Student'

},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Good Job',
  'birthday': '910111',
  'gender': 'Male',
  'job': 'Student'

}]
class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;
