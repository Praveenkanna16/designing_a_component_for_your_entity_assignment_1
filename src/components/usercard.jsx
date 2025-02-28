// write the component code here
import React from "react";
const Usercard = () => {
  const profilePhoto = "https://media-hosting.imagekit.io//3142cdcf73ab4720/WhatsApp%20Image%202025-02-18%20at%2015.04.36.jpeg?Expires=1835325970&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OdxzB1CHs41OfzAAuYulAjIOPfmKZ8WMY~0uPJXQPCSSnJX5Iug7bpjtyY6uzL2E6vvZ8-ghDaka28FIPA0BZNWmJayzTDxjbRAPzJNJf5GDFukmOY5wuZ3yrdqRYoUV7MnJ2QCmtxGjt2OKOg-qi3PmbJrxY03IC8QjtN7Iw6ajJUg7VVaHOVIfQX5ByOCy-1dVF~EjvcRb6XMOy2EvLYVRXyiEAyl3kC~UQiprxJh4kPMWoGETkdrTOykzCyEGHMzPo52akw~vmtB392siHLoz0QyoVGSG5GQ0a14tNUOFYnXldePDqE1Xa6Mqar91ZE~Pa7sGcUz4tJ~McB2twg__";
  const name = "Kushal";
  const email = "kushalminor@gmail.com";
  const phone = "9988776655";
  const address = "Dubai, Dubai Main Road, Dubai Kuruku Sandhu";

  return (
    <div className="card">
      <img src={profilePhoto} width={"180px"} height={'320px'} alt="Profile Photo" className="profile-photo" />
      <div className="user-details">
        <h2>{name}</h2>
        <p><strong>Mail:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default Usercard;