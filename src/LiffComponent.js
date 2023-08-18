import React, { useEffect, useState } from "react";
import liff from "@line/liff";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LiffComponent() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((data) => setProfile(data));
    }
  }, []);
  console.log(profile);

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
          </div>
        ) : (
          <>
            <p>Loading...</p>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </>
        )}
      </div>
    </Container>
  );
}
export default LiffComponent;
