import React, { useState } from 'react'
import data from './data'
import List from './List'
import urls from './urls'
import Modal from './Modal'
function App() {
  const [people, setPeople] = useState(data)
	const [isOpen, setIsOpen] = useState(false)
	const randInd = () => {
		const rId = Math.round(Math.random() * 9)
		return rId
	}
  const addPerson = ({name, age}) => {
    const newId = people.length === 0 ? 1 : people.at(-1).id + 1;
    const newDetails = [...people, {
        id:newId,
        name:name,
        age:age,
        image:urls[randInd()]
    }];
    console.log("Person added ", newDetails);
    setPeople(newDetails);
  } 
  const filterPeople = (id) => {
	  const filteredPeople = people.filter((people) => people.id !== id);
	  setPeople(filteredPeople);
  }
  return (
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} delPeople={filterPeople} />
	        <button className='home-btns' onClick={() => setIsOpen(true) }> Add Person </button>
          <button className='home-btns' onClick={() => setPeople([])}>clear all</button>
	        { isOpen && <Modal setIsOpen={setIsOpen} addPerson={addPerson}/> }
        </section>
  )
}

export default App
