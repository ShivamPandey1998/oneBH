import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import notificationsOutline from '@iconify-icons/ion/notifications-outline';
import penIcon from '@iconify-icons/mdi/pen';
import EditProfileModal from './EditProfileModal';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 24px;
  color: #ff5757;
  text-decoration: none;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff5757;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  font-size: 18px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff5757;
  }
`;

const Username = styled.span`
  font-weight: bold;
`;

const SearchBar = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  margin-left: 10px;
`;

const Header = () => {
  const apiUrl = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiUrl}?title=${searchTerm}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Logo href="#">Shopping</Logo>
        <Nav>
          <NavItem href="#">Phone</NavItem>
          <NavItem href="#">Charger</NavItem>
          <NavItem href="#">Medicine</NavItem>
          <NavItem href="#">Doctor</NavItem>
        </Nav>
        <UserProfile>
          <Icon icon={penIcon} />
          <Username>Search</Username>
          <SearchBar
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <IconWrapper>
            <Icon icon={notificationsOutline} />
          </IconWrapper>
          <UserAvatar
            src="https://bit.ly/3jRbrbp"
            alt="User Avatar"
            onClick={openModal}
          />
        </UserProfile>
      </HeaderContainer>
      {isModalOpen && <EditProfileModal onClose={closeModal} />}
    </>
  );
};

export default Header;
