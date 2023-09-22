
import Grid from "@mui/material/Unstable_Grid2";
import "../css/pages/HomePage.css";
import Slider1 from "../css/sliders/slider1";
import Slider2 from "../css/sliders/slider2";
import Slider3 from "../css/sliders/slider3";
import Slider4 from "../css/sliders/slider4";
import myImage from "../assets/images/sc1hkg.jpg";
export const HomePage = () => {
  return (
    <div>
      <div className="main_container">
        <div className="first_container">
          <div>
            <Grid
              className="first_child"
              container
              columns={{ xs: 4, sm: 8, md: 9 }}
              spacing={{ xs: 1, sm: 1, md: 4 }}
              textAlign={"center"}
              bgcolor={"white"}
              width={"95%"}
              margin={"auto"}
              marginTop={"-2.5%"}
            >
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>{" "}
              <Grid xs={1} sm={1} md={1}>
                <img
                  src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  alt="image1"
                />
                Grocery
              </Grid>
            </Grid>
          </div>
          <div className="second_child" style={{ marginTop: "20px" }}>
            <Slider1 />
          </div>
          <div className="third_child" style={{ display: "inline" }}>
            <div
              style={{
                width: "92%",
                margin: "auto",
                marginTop: "2rem",
                backgroundColor: "white",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  marginBottom: "0.2rem",
                }}
              >
                <h2>Best of Electronics</h2>
                <button>{">"}</button>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "80%",
                    marginRight: "25px",
                    height: "90%",
                    alignItems: "center",
                  }}
                >
                  <Slider2 />
                </div>
                <div>
                  <img
                    style={{ width: "230px", height: "270px" }}
                    src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/bc5ca8677d96765c.jpg?q=20"
                    alt="image44"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                width: "92%",
                margin: "auto",
                marginTop: "2rem",
                backgroundColor: "white",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  marginBottom: "0.2rem",
                }}
              >
                <h2>Beauty, Food, Toys & more</h2>
                <button>{">"}</button>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "100%",
                    marginRight: "25px",
                    height: "90%",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <Slider3 />
                </div>
              </div>
            </div>
            <div
              style={{
                width: "92%",
                margin: "auto",
                marginTop: "2rem",
                backgroundColor: "white",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  marginBottom: "0.2rem",
                }}
              >
                <h2>Sports, Healthcare & more</h2>
                <button>{">"}</button>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "100%",
                    marginRight: "25px",
                    height: "90%",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <Slider4 />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "7rem" }}>
              <div style={{ width: "95%", margin: "auto" }}>
                <img src={myImage} style={{ width: "100%" }} alt="ih" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: "#212020" }}>
        <div
          style={{
            width: "90%",
            margin: "auto",
            marginTop: "125rem",
            color: "white",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            justifyContent: "space-between",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div
            style={{
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            <div>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
            <div>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
            <div>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
            <div style={{ borderRight: "1px solid white" }}>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
          </div>
          <div
            style={{
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            <div>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
            <div>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
            <div>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
            <div style={{ borderRight: "1px solid white" }}>
              <h5 style={{ color: "grey" }}>ABOUT</h5>
              <h4> Contact Us</h4>
              <h4>About Us</h4>
              <h4>Careers</h4>
              <h4>Flipkart Stories</h4>
              <h4>Press</h4>
              <h4>Flikart Wholesale</h4>
              <h4>Cleartrip</h4>
            </div>
          </div>
        </div>
        <hr />
        <div
          style={{
            width: "92%",
            margin: "auto",
            justifyContent: "space-between",
            color: "white",
            display: "flex",
            padding: "1rem",
          }}
        >
          <div>Become a Seller</div>
          <div>Advertise</div>
          <div>GiftCards</div>
          <div>Help Center</div>
          <div>2007-2023 Flipkart.com</div>
          <div>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
              alt="image123"
            />
          </div>
        </div>
      </footer>{" "}
    </div>
  );
};
