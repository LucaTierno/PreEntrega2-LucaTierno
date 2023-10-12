import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="card-productos" key={item.id}>
      <Link to={`/itemDetail/${item.id}`} className="card-redireccion">
        <div className="card-container-img">
          <img src={item.imgPrincipal} alt="" />
        </div>
        <h5 className="card-titulo">{item.title}</h5>
      </Link>
      <p className="card-categoria">{item.category}</p>
      <p className="card-precio">${item.price}</p>
    </div>
  );
};

export default ProductCard;
