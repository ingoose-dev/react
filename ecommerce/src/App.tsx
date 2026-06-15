import "./App.css";
import Navbar from "./assets/Component/Navbar/Navbar";
import Product from "./assets/Component/Product/Product";
import { listProductos } from "./mocks/products.js";
import Footer from "./assets/Component/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bienvenido a nuestra tienda en línea</h1>
        <div className="product-list">
          {listProductos.map((producto) => (
            <Product
              titulo={producto.title}
              precio={producto.price}
              imagen={producto.image}
              id={producto.id}
              categoria={producto.category}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
