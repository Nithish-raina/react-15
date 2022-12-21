import React, {useState} from 'react';

const Categories = ({ categories, filterItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${index === activeIndex && "active"}`}
            key={index}
            onClick={() => { filterItems(category);
				setActiveIndex(index) }
			}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
