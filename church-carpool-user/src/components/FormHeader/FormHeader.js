import React from "react";
const FormHeader = ({ children }) => {
  return (
    <>
      <div
        style={{
          height: "200px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.pexels.com/photos/27961331/pexels-photo-27961331/free-photo-of-centrum-historii-zajezdnia-wroclaw-poland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card Header"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            marginBottom: "8px",
            fontSize: "20px",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "-0.025em",
          }}
        >
          Ride Request Form
        </h3>
        <p
          style={{
            marginBottom: "16px",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          Fill out this form to request a ride. We'll make sure we find one for
          you soon as possible.
        </p>
        {children}
      </div>
    </>
  );
};

export default FormHeader;
