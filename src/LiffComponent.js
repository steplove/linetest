import React, { useEffect, useState } from "react";
import liff from "@line/liff";
import Pay from "./Pay";
import QRCode from "qrcode.react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin: auto;
  width: 200px;
  padding: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QRWrapper = styled.div`
  margin: auto;
  padding: 10px;
  display: ${(props) => (props.visible ? "block" : "none")}; // เพิ่มส่วนนี้
`;
const generatePayload = require("promptpay-qr");
function LiffComponent() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((data) => setProfile(data));
    }
  }, []);
  const [qrCode, setqrCode] = useState(null); // ปรับ qrCode เป็น null เริ่มต้น
  const [showQR, setShowQR] = useState(false); // เพิ่มสถานะเพื่อควบคุมการแสดง QR
  const [ amount, setAmount ] = useState(100.00);
  function handleQR() {
    const newQRCode = generatePayload("1103701855401", {amount});
    setqrCode(newQRCode); // เมื่อคลิก Generate Promptpay QR ให้อัพเดตค่า qrCode
    setShowQR(true); // แสดง QR Code
  }
  return (
    <Container>
      <div>
        {profile ? (
          <div>
            <img
              src={profile.pictureUrl}
              alt="Profile"
              style={{ width: "100px", height: "100px" }} // เปลี่ยนขนาดตามที่คุณต้องการ
            />
            <p>Name: {profile.displayName}</p>
            <p>Status: {liff.isLoggedIn() ? "Logged In" : "Logged Out"}</p>

            <FlexContainer>
              <QRWrapper visible={showQR}>
                {" "}
                {/* ใช้สถานะ showQR เพื่อควบคุมการแสดง */}
                {qrCode && (
                  <div>
                    <QRCode value={qrCode} />
                    <p>ขอตังหน่อย สแกนโอนเลยยยยยยย</p>
                  </div>
                )}
              </QRWrapper>
              <InputWrapper>
                <button onClick={handleQR}>ลองคลิ๊กสิ! มีไรจะบอก</button>
              </InputWrapper>
            </FlexContainer>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
}

export default LiffComponent;
