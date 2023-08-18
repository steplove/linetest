import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const generatePayload = require('promptpay-qr');

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Container = styled.div`
  height: 100vh;
  padding: 4em;
  background: papayawhip;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const QRWrapper = styled.div`
  margin: auto;
  padding: 10px;
  display: ${props => props.visible ? 'block' : 'none'}; // เพิ่มส่วนนี้
`

const InputWrapper = styled.div`
  margin: auto;
  width: 200px;
  padding: 10px;
`

function Pay() {

  const [qrCode, setqrCode] = useState(null); // ปรับ qrCode เป็น null เริ่มต้น
  const [showQR, setShowQR] = useState(false); // เพิ่มสถานะเพื่อควบคุมการแสดง QR


  function handleQR() {
    const newQRCode = generatePayload("1103701855401",  "100" );
    setqrCode(newQRCode); // เมื่อคลิก Generate Promptpay QR ให้อัพเดตค่า qrCode
    setShowQR(true); // แสดง QR Code
  }

  return (
    <Container>
      <FlexContainer>
        <QRWrapper visible={showQR}> {/* ใช้สถานะ showQR เพื่อควบคุมการแสดง */}
          {qrCode && <QRCode value={qrCode} />} {/* แสดง QR Code เมื่อ qrCode ไม่เป็น null */}
        </QRWrapper>
        <InputWrapper>
          <button onClick={handleQR}>Generate Promptpay QR</button>
        </InputWrapper>
      </FlexContainer>
    </Container>
  );
}

export default Pay;
