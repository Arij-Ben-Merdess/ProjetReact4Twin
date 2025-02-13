import { useState, useEffect } from "react";
import Product from "./Product";
import { Container, Row, Col, Alert } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("src/products.json") // ✅ Accès correct au fichier JSON
      .then((response) => response.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Données JSON invalides :", data);
        }
      })
      .catch((error) => console.error("Erreur lors du chargement des produits :", error));
  }, []);

  // Fonction pour acheter un produit
  const buy = (productIndex) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, index) =>
        index === productIndex && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );

    setMessage("Vous avez réservé un produit");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  // Fonction pour gérer le Like/Dislike
  const toggleLike = (productIndex) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, index) =>
        index === productIndex
          ? { ...product, like: product.like === 1 ? 0 : 1 }
          : product
      )
    );
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Liste des Produits</h2>

      {message && <Alert variant="success">{message}</Alert>}

      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4}>
            <Product
              name={product.name}
              img={product.img}
              price={product.price}
              quantity={product.quantity} // ✅ Correction ici
              like={product.like}
              buy={() => buy(index)}
              toggleLike={() => toggleLike(index)}
              description={product.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
