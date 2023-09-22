import React from "react";
import loginlogo from "../assets/images/login logo.jpg";
export const LoginPage = () => {
  return (
    <div
      style={{
        paddingTop: "1%",
        width: "70%",
        height: "auto",
        margin: "auto",
        marginTop: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "520px",
        }}
      >
        <div
          style={{
            backgroundColor: "#2974F1",
            width: "45%",
            padding: "5%",
            color: "white",
          }}
        >
          <h1>Login</h1>
          <h3 style={{ marginTop: "15%", fontWeight: "lighter" }}>
            Get access to your Orders,
          </h3>
          <h4 style={{ fontWeight: "lighter" }}>
            Wishlists and Recommendations
          </h4>
          <br />
          <div style={{ width: "60%", margin: "auto", marginTop: "15%" }}>
            <img
              src={loginlogo}
              style={{ width: "100%", mixBlendMode: "normal" }}
              alt="image"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "50%",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "auto",
              paddingTop: "5%",
              padding: "7%",
              marginTop: "10%",
              fontSize: "20px",
              color: "gray",
            }}
          >
            <input
              type="text"
              placeholder="Enter Email"
              style={{
                border: "none",
                borderBottom: "1px solid grey",
                fontSize: "20px",
              }}
            />{" "}
            <br />
            <input
              type="text"
              style={{
                border: "none",
                borderBottom: "1px solid grey",
                fontSize: "20px",
              }}
              placeholder="Password"
            />{" "}
            <br />
            <h6 style={{ fontWeight: "lighter" }}>
              By Continuing You Agree to Flipkart's Terms & Conditions and
              Privacy Policy{" "}
            </h6>
            <input
              style={{
                width: "100%",
                height: "40px",
                margin: "auto",
                borderRadius: "10px",
                marginTop: "30px",
              }}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
