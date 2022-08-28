import '../App.css';

const handleCategoryChange = (e) => {
  //update this when state mgmt is implemented
  console.log(`you changed the category to ${e.target.value}`);
};

const Categories = ({ categories }) => {
  return (
    <div className="categories-container comp">
      <p>this is the categories container</p>
      <label htmlFor="categories">Categories: </label>
      <select name="categories" id="categories" onChange={handleCategoryChange}>
        <option key="all" value={'all'}>
          All
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
