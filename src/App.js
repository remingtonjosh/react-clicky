import React, { Component } from "react";
import "./App.css";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>
          <p>
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </Title>

        {this.state.friends.map(friend => (
          <FriendCard id={friend.id} key={friend.id} image={friend.image} />
        ))}
      </Wrapper>
    );
  }
}
export default App;
