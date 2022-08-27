import '../App.css';

const Categories = ({ categories }) => {
  return (
    <div className="categories-container comp">
      <p>this is the categories container</p>
      <label htmlFor="categories">categories: </label>
      <select name="categories" id="categories">
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
