import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContent = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button`
  background-color: #ff5555;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

const FormLabel = styled.label`
  width: 100%;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap;
  align-items: stretch;
  justify-content: center;
`;

const InputIcon = styled.div`
  width: fit-content;
  margin: 0;
  padding: 0.375rem 0.75rem;
  display: flex;
  align-items: center;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 0.0625rem solid #ced4da;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  background-color: #e9ecef;
`;

const InputField = styled.input`
  flex-grow: 1;
  min-height: 3rem;
  padding: 0.375rem 0.75rem;
  display: block;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  border: 0.0625rem solid #ced4da;
  border-left: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;

  &:focus,
  &:focus-within,
  &:hover {
    + ${InputIcon} {
      color: #538e46;
    }
  }
`;

const ImageWrapper = styled.div`
  margin: 1rem auto;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 1rem auto;
`;

const FileInput = styled.input`
  display: none;
`;

const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cancel {
    background-color: #ff5555;
  }

  .save {
    background-color: #538e46;
  }
`;

const EditProfileModal = ({ onClose }) => {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Updated name:', name);
    console.log('Updated phone number:', phoneNumber);
    console.log('Updated email:', email);
    console.log('Updated password:', password);
    console.log('Selected file:', selectedFile);
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <ModalContent>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <ImageWrapper>
            <ProfileImage src={selectedFile ? URL.createObjectURL(selectedFile) : 'https://bit.ly/3jRbrbp'} alt="Profile Image" />
            <label htmlFor="fileInput">
              <span>Choose a photo</span>
              <FileInput
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </ImageWrapper>
          <div>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <InputWrapper>
              <InputIcon>👤</InputIcon>
              <InputField type="text" id="name" value={name} onChange={handleNameChange} />
            </InputWrapper>
          </div>
          <div>
            <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
            <InputWrapper>
              <InputIcon>📞</InputIcon>
              <InputField type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </InputWrapper>
          </div>
          <div>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <InputWrapper>
              <InputIcon>📧</InputIcon>
              <InputField type="email" id="email" value={email} onChange={handleEmailChange} />
            </InputWrapper>
          </div>
          <div>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <InputWrapper>
              <InputIcon>🔐</InputIcon>
              <InputField type="password" id="password" value={password} onChange={handlePasswordChange} />
            </InputWrapper>
          </div>
          <ActionButtons>
            <button className="save" type="submit">Save</button>
            <button className="cancel" onClick={onClose}>Close</button>
          </ActionButtons>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
