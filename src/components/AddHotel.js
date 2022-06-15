import { render } from "@testing-library/react";
import React, { useState } from "react";
import styled from "styled-components";

function AddHotel({ updateHotelList, orderByIncrease, orderByDecrease }) {

  const pageChange = () => {
    var $addButton = document.querySelector('.addButton');
    var $pageName = document.querySelector('.pageName');

    if($addButton.textContent === '+') {
      $addButton.textContent = '<';
      $pageName = " LİSTE SAYFASINA DÖN"

      elementSetVisible('.hotelCard, .container, .deleteButton','none');
      elementSetVisible('Textarea, .addHotelButton','block');
    }
    else{
      document.querySelector('.addButton').textContent = '+';
      $pageName.innerText = " OTEL EKLE"

      elementSetVisible('.hotelCard, .container','block');
      elementSetVisible('Textarea, .addHotelButton, .deleteButton','none');
    }
  };

  const elementSetVisible = (selector, visible) => {
    document.querySelectorAll(selector).forEach(element => {
      element.style.display = visible;
    });
  }

  const addHotel = () => {
    if (item === '') {
      return;
    }

    var $addHotelButton = document.querySelector('.addHotelButton');

    $addHotelButton.style.backgroundColor = "#9AFE00"

    setButtonText("! EKLENDİ");
    
    setTimeout(() => {
      setButtonText("Ekle");
      setItem("");

      document.querySelector('.addButton').textContent = '+';
      document.querySelector('.pageName').innerText = " OTEL EKLE"

      elementSetVisible('Textarea, .addHotelButton','none');
      elementSetVisible('.hotelCard, .container','block');

      $addHotelButton.style.backgroundColor = "#0B28F8"
    }, 750);
  
    elementSetVisible('.hotelCard','block');

    updateHotelList(item);
  };

  const [item, setItem] = useState([]);
  
  const [buttonText, setButtonText] = useState("Ekle");

  const handleInput = (event) => { setItem(event.target.value); };

  const selectClick = (event) => {
    event.target.value === 'lowToHigh' ? orderByIncrease() : orderByDecrease();
  };

  return (
    <AddHotelContainer>
      <div className="titleArea">
        <ToggleButton className={'addButton'} onClick={pageChange}>{'+'}</ToggleButton> 
        <text className="pageName"> OTEL EKLE </text>
      </div>
      <Textarea
        value={item} 
        onChange={handleInput}
        placeholder="Otel Adını Giriniz"
      ></Textarea>
      <AddHotelButton className={'addHotelButton'} onClick={addHotel}>{buttonText}</AddHotelButton>
    <div className="container select">
      <Select className="custom-select" onClick={selectClick}>
        <option disabled>Sıralama</option>
        <option value='lowToHigh'>Puan (Artan)</option>
        <option value="highToLow">Puan (Azalan)</option>
      </Select>
    </div>
    </AddHotelContainer>
  );
}

const AddHotelContainer = styled.div`
  max-width: 380px;
  width: calc(100% - 30px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const ToggleButton = styled.button`
  border-radius: 4px;
  border: 1px solid #056BC0;
  position: relative;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  left: 230px;
  background-color: white;
  color: #056BC0;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  left: auto;
`;
const Textarea = styled.textarea`
  resize: none;
  outline: none;
  margin-top: 8px;
  display:none;
`;

const AddHotelButton = styled.button`
  position: relative;
  left: 230px;
  height: 40%;
  width: 40%;
  border-radius: 4px;
  border: 1px solid #056BC0;
  margin-top: 10px;
  background-color: #0B28F8;
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: none;
`;

const Select = styled.select`
  color: blue;
  width: 50%;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #056bfd;
  margin-top: 13px;
`;

export default AddHotel;
