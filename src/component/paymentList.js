import React from "react";
import { FaWindowClose } from "react-icons/fa";

const ListPay = (prop) => {
  const itemSingle = prop.itemCard;
  const deleteSingle = prop.deleteItem;
  const increase = prop.increase;
  const decrease = prop.decrease;

  const btnStyle = {
    color: itemSingle.amount === 1 ? "black" : "red",
    border: itemSingle.amount === 1 ? "1px solid black" : "1px solid red",
  };

  //display list of items were added into cart and its quantity
  return (
    <div className="singleItemPay">
      <div className="payImg">
        <img src={itemSingle.src} alt="food" height="60px" width="60px"></img>
      </div>
      <div className="billItem">
        <h5>{itemSingle.title}</h5>
        <p>
          <button
            className="btn"
            onClick={decrease.bind(this, itemSingle.id)}
            style={btnStyle}
          >
            -
          </button>
          <span style={{ marginLeft: "3px", marginRight: "3px" }}>
            {itemSingle.amount}
          </span>
          <button className="btn" onClick={increase.bind(this, itemSingle.id)}>
            +
          </button>
        </p>

        <span
          className="btnDelete"
          onClick={deleteSingle.bind(this, itemSingle.id)}
        >
          <FaWindowClose style={{ color: "rgb(76 88 107)" }} />
        </span>
      </div>
      <div className="billPrice">
        <h6>
          Kr {parseFloat(itemSingle.price * itemSingle.amount).toFixed(2)}
          <span>$</span>
        </h6>
        <p>
          [Incl tax 10% = Kr{" "}
          {parseFloat(itemSingle.price * itemSingle.amount * 0.1).toFixed(2)}]
        </p>
      </div>
    </div>
  );
};

export default ListPay;
