import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const apiUrl = 'https://fakestoreapi.com/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ProductDetailContainer>
      {product ? (
        <>
          <ProductImage src={product.image} alt={product.title} />
          <ProductInfo>
            <ProductName>{product.title}</ProductName>
            <ProductCategory>Category: {product.category}</ProductCategory>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductInfo>
        </>
      ) : (
        <LoadingText>Loading...</LoadingText>
      )}
    </ProductDetailContainer>
  );
};

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const ProductInfo = styled.div`
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

const ProductCategory = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #ff5722;
`;

const LoadingText = styled.p`
  font-size: 24px;
  margin-top: 20px;
  color: #888;
`;

export default ProductDetail;
