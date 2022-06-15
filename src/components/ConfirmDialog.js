import React from "react";
import styled from "styled-components";

function ConfirmDialog({ message, onDialog, nameProduct }) {
  return (
    <DialogWrapper
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={() => onDialog(false)}
    >
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Message>{message}</Message>
        <ProductName>{nameProduct}</ProductName>
        <ButtonWrapper>
          <RemoveButton onClick={() => onDialog(true)}>Hoteli Sil</RemoveButton>
          <CancelButton onClick={() => onDialog(false)}>Vazgeç</CancelButton>
        </ButtonWrapper>
      </Dialog>
    </DialogWrapper>
  );
}

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backgroundcolor: rgba(0, 0, 0, 0.5);
`;

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

const Message = styled.h3`
  color: #111;
  font-size: 16px;
`;

const ProductName = styled.h3`
  color: blue;
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const RemoveButton = styled.button`
  background: #056bfd;
  color: white;
  padding: 10px;
  margin-left: 4px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
`;

const CancelButton = styled.button`
  background: hsl(188 78% 41%);
  color: white;
  padding: 10px;
  margin-left: 4px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default ConfirmDialog;
