import "./Product.css";
import Categoria from "../Categoria/Categoria";

const Product = (props: {
  titulo: string;
  precio: number;
  imagen: string;
  id: number;
  categoria: string;
}) => {
  return (
    <div className="product">
      <Categoria nombre={props.categoria} />
      <img src={props.imagen} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <strong>${props.precio}</strong>
    </div>
  );
};

export default Product;
