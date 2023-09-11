import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const apiUrl = 'https://fakestoreapi.com/products';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <ProductListWrapper>
      <ProductListFilter>
        <FilterHeading>Filter by Category</FilterHeading>
        <CategoryFilter>
          <CategoryOption
            onClick={() => setSelectedCategory('All')}
            active={selectedCategory === 'All'}
          >
            All
          </CategoryOption>
          <CategoryOption
            onClick={() => setSelectedCategory('electronics')}
            active={selectedCategory === 'electronics'}
          >
            Electronics
          </CategoryOption>
          <CategoryOption
            onClick={() => setSelectedCategory('jewelery')}
            active={selectedCategory === 'jewelery'}
          >
            Jewelry
          </CategoryOption>
          <CategoryOption
            onClick={() => setSelectedCategory("men's clothing")} // Updated category name
            active={selectedCategory === "men's clothing"} // Updated category name
          >
            Men's Clothing
          </CategoryOption>
          <CategoryOption
            onClick={() => setSelectedCategory("women's clothing")} // Updated category name
            active={selectedCategory === "women's clothing"} // Updated category name
          >
            Women's Clothing
          </CategoryOption>
        </CategoryFilter>
      </ProductListFilter>
      <ProductListSection>
        <ProductListHeading>Explore Our Products</ProductListHeading>
        <ProductList>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={`/product/${product.id}`}> {/* Link to the product detail page */}
                <ProductImage src={product.image} alt={product.title} />
              </Link>
              <ProductInfo>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductList>
      </ProductListSection>
    </ProductListWrapper>
  );
};

const ProductListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const ProductListFilter = styled.div`
  flex: 1;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FilterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

const CategoryFilter = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryOption = styled.li`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? '#007bff' : '#ccc')};
  border-radius: 20px;
  color: ${({ active }) => (active ? '#007bff' : '#555')};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? '#007bff' : '#f7f7f7')};
    color: #007bff;
  }
`;

const ProductListSection = styled.div`
  flex: 3;
`;

const ProductListHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #007bff;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 5px;
`;

export default ProductListing;
