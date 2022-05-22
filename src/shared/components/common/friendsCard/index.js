import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import avatarBaseUrl from "../../../utilities/avatarBaseUrl";
import { ProfilePlaceHolder } from "../../../../assets";
import "./style.css";

function FriendsCard(props) {
  const [user, setUser] = useState([]);
  const getUser = () => {
    axios
      .get(`users/${props.id}`)
      .then((res) => {
        if (res.statusText === "OK") {
          console.log(res.data);
          setUser(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="300">
      <Card style={{ width: "19.5rem" }}>
        <div class="profile px-3 pt-3">
          <img
            src={
              user?.avatar
                ? `${avatarBaseUrl}${user.avatar}`
                : ProfilePlaceHolder
            }
            alt="profilePic"
            width="130"
            class="rounded mb-2 img-thumbnail"
          />
        </div>
        <Card.Body>
          <Card.Title className="cardTextStyle">
            {user.firstname} {user.lastname}
          </Card.Title>
          <Card.Text className="cardTextLimit">{user.bio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FriendsCard;
