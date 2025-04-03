import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import { fetchData } from "./redux/thunks";

const ProductsList = (props) => {
  const { language } = useContext(LanguageContext);
  const products = useSelector((state) => state.products[language] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="box mr-5 ml-5">
      <h2 className="title">Products</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
