import './Product.css';

const Product = (props: { titulo: string, precio: number, imagen: string, id: number, categoria: string }) => {
  return (
    <div className="product">
      <img src={props.imagen} alt={props.titulo} />
      <h2>{props.titulo}</h2>
      <p>${props.precio}</p>
    </div>
  );
}

export default Product;