import React, { useState } from "react";
import fakeData from "../../fakeData";
import Card from "../card/Card";
import "./Friends.css";
import Header from "../Header/Header";

var amo = 0;

const Friends = () => {
  const [buddy, setBuddy] = useState([]);
  const [amount, setAmount] = useState(0);

  const handleFriensList = props => {
    amo = amo + parseFloat(props.income);
    console.log(amo);
    setAmount(amo);
    const newBuddy = [...buddy, props];
    setBuddy(newBuddy);
  };
    return (
    <section>
      <div>{<Header buddy={buddy.length} amo={amo} />}</div>

      <div className="friend-container">
        {fakeData.map(sf => (
          <Card friend={sf} handleFriensList={handleFriensList}></Card>
        ))
        }
      </div>
    </section>
  );
};

export default Friends;
