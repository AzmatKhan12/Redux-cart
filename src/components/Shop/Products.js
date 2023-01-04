import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyData = [
  {
    id: "p1",
    price: 10,
    title: "my first book",
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    price: 19,
    title: "my 2nd book",
    description: "the second book i ever wrote",
  },
  {
    id: "p3",
    price: 12,
    title: "my 3rd book",
    description: "the third book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyData.map((product) => (
          <ProductItem
           id = {product.id}
            key = {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
