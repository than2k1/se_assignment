import React, { useState } from "react";
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";

const DetailItem = (prop) => {
  const DishInfo = prop.info;
  const turnOff = prop.off;
  const push = prop.addCard;
  // console.log(prop);

  const [amount, setAmount] = useState(1);

  const addAndDelete = () => {
    turnOff(0);
    push(DishInfo, amount);
    setAmount(1);
  };

  const increaseAmount = () => {
    let newAmount = amount;
    newAmount++;
    setAmount(newAmount);
  };
  const decreaseAmount = () => {
    if (amount === 1) return;
    let newAmount = amount;
    newAmount--;
    setAmount(newAmount);
  };

  const btnStyle = {
    color: amount === 1 ? "black" : "red",
    border: amount === 1 ? "1px solid black" : "1px solid red",
  };

  //return info of single product
  return (
    <div className="full">
      <div className="itemInfo">
        <div id="intro">
          <h4>ADD TO CART</h4>
          <span onClick={turnOff.bind(this, 0)}>
            <FaWindowClose style={{ color: "rgb(94 94 94)" }} />
          </span>
        </div>
        <div className="detail">
          <div id="detailImage">
            <img src={DishInfo.src} alt="food" height="auto" width="80%"></img>
          </div>
          <div id="detailInfo">
            <table
              width="80%"
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginTop: "10px",
                borderBottom: ".5px solid rgb(227 227 227)",
              }}
            >
              <thead style={{ color: "rgb(80 80 80)" }}>
                <tr>
                  <th width="20%">SKU</th>
                  <th width="50%">Name</th>
                  <th width="30%" style={{ textAlign: "right" }}>
                    Unit price
                  </th>
                </tr>
              </thead>
              <tbody style={{ height: "50px", color: "rgb(96 96 96)" }}>
                <tr>
                  <td>401</td>
                  <td>{DishInfo.title}</td>
                  <td
                    style={{
                      color: "rgb(222 60 69)",
                      fontSize: "120%",
                      fontWeight: "700",
                      textAlign: "right",
                    }}
                  >
                    kr {DishInfo.price}
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="quantity">
              <h4>Quantity</h4>
              <p>
                <button
                  className="btn"
                  onClick={decreaseAmount}
                  style={btnStyle}
                >
                  -
                </button>
                <span
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontWeight: "600",
                    fontSize: "110%",
                  }}
                >
                  {amount}
                </span>
                <button className="btn" onClick={increaseAmount}>
                  +
                </button>
              </p>
            </div>
            <div id="info">
              <p>
                Protein: <span> What is Lorem ipsum?</span>{" "}
              </p>
              <p>
                Additives: <span> 03</span>
              </p>
              <p>
                Baking material:<span> 040</span>
              </p>
              <p>
                Food decorations: <span> 04</span>
              </p>

              <div id="vegetable">
                <p>
                  Side dishes (<span>*</span>)
                </p>
                <span>Please select on of the properties below</span>
                <form>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vegetable"
                    value="vegetable"
                    style={{ color: "red" }}
                  ></input>
                  <label htmlFor="vegetable" style={{ color: "black" }}>
                    {" "}
                    Vegetable
                  </label>
                </form>
              </div>
            </div>
            <button className="btn" onClick={addAndDelete}>
              <FaShoppingCart style={{ marginRight: "10" }} /> Kr{" "}
              {DishInfo.price * amount} $
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
