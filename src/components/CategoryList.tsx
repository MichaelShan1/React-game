import useCategory from '../hooks/useCategory';

const CategoryList = () => {
  const { data } = useCategory();
  return (
    <ul>
      {data.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
