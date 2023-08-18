import React, { useEffect, useState } from "react";
import liff from "@line/liff";
import Pay from "./Pay";

function LiffComponent() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((data) => setProfile(data));
    }
  }, []);

  return (
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
          <Pay />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LiffComponent;
