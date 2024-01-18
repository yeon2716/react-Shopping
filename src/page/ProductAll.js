import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = ` https://my-json-server.typicode.com/yeon2716/react-Shopping/products`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []); //배열이 비어있을 경우에는 ProductAll이 실행될때 한번만 실행됨

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
