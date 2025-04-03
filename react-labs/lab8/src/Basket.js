import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";

const Basket = (props) => {
	const basketText = {
		"en-US": "Your basket is empty.",
		"de-DE": "Ihr Warenkorb ist leer.",
		"pl-PL": "Twój koszyk jest pusty.",
	};

	const { language } = useContext(LanguageContext);
	const products = useSelector((state) => state.products);
	const productsInBasket = useSelector((state) => state.productsInBasket);

	return (
		<div className="box">
			<h2 className="title">Basket</h2>
			{productsInBasket.length > 0
				? (<ul>
					{productsInBasket.map((product) =>
					(
						<BasketItem
							key={product.id}
							product={products[language].find((p) => p.id === product.id)}
						/>
					))}
				</ul>)
				: <p>{basketText[language]}</p>}
		</div>
	);
};

export default Basket;
