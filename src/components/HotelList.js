import React, { useState, useRef } from "react";
import hotelData from "../data/data";
import Card from "./Card";
import styled from "styled-components";
import AddHotel from "./AddHotel";
import ConfirmDialog from "./ConfirmDialog";


function HotelList() {
  const [hotels, setHotels] = useState(hotelData);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameHotel: "",
  });
  const idHotelRef = useRef();

  const handleDialog = (message, isLoading, nameHotel) => {
    setDialog({
      message,
      isLoading,
      nameHotel,
    });
  };

  var randomImage = function(id) {
    var imageList = ['https://images.etstur.com/files/images/hotelImages/TR/52042/m/Janna-Bodrum-Boutique---Spa-Genel-200072.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/50787/m/Rixos-Premium-Tekirova-Genel-340743.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/92903/m/LABRANDA-Bodrum-Princess---SPA-Genel-138764.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/215680/m/Cullinan-Golf---Resort-Genel-332826.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/51858/m/Grand-Yazici-Club-Turban-Thermal-Hotel-Genel-326671.jpg',
    'https://images.etstur.com//files/images/hotelImages/CY/50073/m/Merit-Crystal-Cove-Hotel-Casino-Genel-294057.jpg',
    'https://images.etstur.com//files/images/hotelImages/CY/97431/m/Kaya-Palazzo-Resort---Casino-Genel-256867.jpg',
    'https://images.etstur.com//files/images/hotelImages/CY/53386/m/Salamis-Bay-Conti-Aktivite-287240.jpg',
    'https://images.etstur.com//files/images/hotelImages/CY/92077/m/Lords-Palace-Hotel---SPA---Casino-Genel-284515.jpg',
    'https://images.odamax.com/img/400x400/odamax/image/upload/jfofzgknrjvhay0ly5gc.jpg',
    'https://images.odamax.com/img/400x400/odamax/image/upload/gizen2rjkjdg6ienhedy.jpg',
    'https://images.etstur.com/files/images/hotelImages/test/TR/50495/m/Adrina.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/50995/m/Korel-Thermal-Resort-Hotel-Genel-116583.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/51310/m/Orucoglu-Thermal-Resort-Genel-328240.jpg',
    'https://images.etstur.com/files/images/hotelImages/TR/51982/m/Sianji-Well-Being-Resort-Genel-303909.jpg'];

    return imageList[id] || imageList[0];
};

  const deleteHotel = (id) => {
    const index = hotels.findIndex((hotel) => hotel.id === id);

    handleDialog(
      `${hotels[index].name}' i silmek istediğinizden emin misiniz? `,
      true
    );
    idHotelRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setHotels(hotels.filter((hotel) => hotel.id !== idHotelRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  const handleAddNewHotel = (newHotel) => {
    let addedHotel = [
      {
        id: hotels.length + 1,
        name: newHotel,
        hotelScore: 0,
      },
    ];
    let updatedList = addedHotel.concat(hotels);
    localStorage.setItem("hotelList", JSON.stringify(updatedList));
    setHotels(updatedList);
  };


  const handleMouseMove = (id) => {
    setTimeout(function() {
      document.querySelector('.card_' + id + ' .deleteButton').style.display ="inline-block";
    }, 375);
  }

  const handleThumbsUp = (idx) => {
    let updatedHotelList = [...hotels];
    let obj = updatedHotelList[idx];
    let currentScore = obj["hotelScore"];
    obj["hotelScore"] = currentScore + 1;
    updatedHotelList[idx] = obj;
    setHotels(updatedHotelList);
  };


  const handleThumbsDown = (idx) => {
    let updatedHotelList = [...hotels];
    let obj = updatedHotelList[idx];
    let currentScore = obj["hotelScore"];
    if (currentScore !== 0) {
      obj["hotelScore"] = currentScore - 1;
    }
    updatedHotelList[idx] = obj;
    setHotels(updatedHotelList);
  };

  const orderByIncrease = () => {
    let copiedHotels = [...hotels];
    copiedHotels.sort((a, b) => a["hotelScore"] - b["hotelScore"]);
    setHotels(copiedHotels);
  };

  const orderByDecrease = () => {
    let copiedHotels = [...hotels];
    copiedHotels.sort((a, b) => b["hotelScore"] - a["hotelScore"]);
    setHotels(copiedHotels);
  };

  return (
    <div className="hotelList">
    <List>
      <AddHotel
        updateHotelList={handleAddNewHotel}
        orderByIncrease={orderByIncrease}
        orderByDecrease={orderByDecrease}
      />
      {hotels.length > 0 &&
        hotels.map((hotel, index) => {
          return (
            <>
            <div className= {'hotel' + ' card_' + hotel.id}  onMouseMove={() => handleMouseMove(hotel.id)}> 
              <Card
                key={hotel.id}
                name={hotel.name}
                index={index}
                img={randomImage(hotel.id)}
                hotelScore={hotel.hotelScore}
                handleThumbsUp={handleThumbsUp}
                handleThumbsDown={handleThumbsDown}
              />
                <DeleteButton className='deleteButton' onClick={ 
                () => deleteHotel(hotel.id)}>
                X
              </DeleteButton>
              </div>
            </>
          );
        })}
      {dialog.isLoading && (
        <ConfirmDialog
          nameHotel={dialog.nameHotel}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </List>
    </div>
  );
}

const List = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
margin: 0 auto;
    background-color: red;
    border: none;
    padding: 8px;
    cursor: pointer;
    color: white;
    position: relative;
    left: 532px;
    bottom: 157px;
    display: none;
    bor: 22px;
    height: 30px;
    width: 30px;
    border-radius: 22px;
`;

export default HotelList;
