import React from 'react';
import { RxCrossCircled } from 'react-icons/rx'

const List = ({ people,delPeople }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <RxCrossCircled className='icon-styles' onClick={() => delPeople(id)} />
		  </article>
        );
      })}
    </>
  );
};

export default List;
