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
            {/* ...โค้ดอื่น ๆ... */}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
            <div>
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
export default LiffComponent;
