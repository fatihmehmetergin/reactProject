import styled from "styled-components";

function Card({ name, handleThumbsUp, handleThumbsDown, index, hotelScore, img }) {
  const handleUpClick = () => {
    handleThumbsUp(index);
  };

  const handleDownClick = () => {
    handleThumbsDown(index);
  };

  return (
    <CardContainer>
      <CardContent>
        <img src={img} alt="hotel-card" />
        <CardInfo>
          <Title>{name}</Title>
          <Score>
            <Subtitle>{hotelScore} Puan</Subtitle>
          </Score>
          <RateContainer>
            <RateUp onClick={handleUpClick}>Puan Artır</RateUp>
            <RateDown onClick={handleDownClick}>Puan Azalt</RateDown>
          </RateContainer>
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  max-width: 400px;
  width: calc(100% - 30px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 24px;
  margin-top: 24px;

  img {
    width: 150px;
    height: 100px;
    border-radius: 10px;
    margin: 8px 8px 8px 2px;
  }
`;

const CardContent = styled.div`
  display: flex;
`;

const CardInfo = styled.div`
  margin-top: 8px;
  margin-left: 16px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
`;

const Score = styled.div`
  background-color: hsl(214 64% 98%);
  border-radius: 5px;
  margin-top: 8px;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  color: turquoise;
  margin-left: 8px;
`;

const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const RateUp = styled.button`
  font-size: 14px;
  padding: 0.25em 1em;
  border: 1px solid #056bfd;
  border-radius: 5px;
  background-color: #fff;
  color: #056bfd;
`;

const RateDown = styled.button`
  font-size: 14px;
  padding: 0.25em 1em;
  border: 1px solid #056bfd;
  border-radius: 5px;
  margin-left: 8px;
  background-color: #fff;
  color: #056bfd;
`;

export default Card;
