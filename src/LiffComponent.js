import React, { useEffect, useState } from "react";
import liff from "@line/liff";
import styled from "styled-components";
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
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
}
export default LiffComponent;
