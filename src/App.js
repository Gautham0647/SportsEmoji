import React, { useState } from "react";
import "./App.css";

var sportsDictionary = {
  "🎾": "tennis",
  "🏸": "badminton",
  "🎱": "pool",
  "🎳": "bowling",
  "⚾": "baseball",
  "🏐": "volleyball",
  "⚽": "football",
  "🏉": "rugby",
  "🏏": "cricket",
  "🏑": "field hockey",
  "🏒": "ice hockey",
  "🎿": "skiing",
  "🥊": "boxing",
  "🏓": "ping-pong"
};

var sportsArray = Object.keys(sportsDictionary);

function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "The meaning will popup here"
  );

  function handleEmojiInput(e) {
    var emojiInput = e.target.value;
    if (emojiInput === "") {
      setEmojiMeaning("The meaning will popup here");
      return;
    }

    var meaning = sportsDictionary[emojiInput];
    if (meaning === undefined) {
      setEmojiMeaning("We dont have this sport in our database");
    } else {
      setEmojiMeaning(meaning);
    }
  }

  function handleEmojiClick(emoji) {
    var meaning = sportsDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="navbar">
        <h1 style={{ fontSize: "45px" }}>Flag Emoji Library!</h1>
      </div>
      <div className="main">
        <div className="desc">
          <p
            style={{
              fontSize: "35px",
              fontWeight: "normal",
              lineHeight: "1.5"
            }}
          >
            Input the sport emoji to check which sport it is!
            <br /> else select one of the option below.
          </p>
        </div>
        <div className="emoji-input">
          <input
            onChange={handleEmojiInput}
            style={{
              width: "500px",
              height: "100%",
              fontSize: "28px",
              paddingLeft: "10px"
            }}
          ></input>
        </div>
        <div className="premade-list">
          {sportsArray.map((item) => (
            <span
              key={item}
              onClick={() => handleEmojiClick(item)}
              style={{ cursor: "pointer", fontSize: "2.5rem", margin: "5px" }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="emoji-output">
          <h1>{emojiMeaning}</h1>
        </div>
      </div>
      <div className="bottom-container">
        <div className="icons">
         
        </div>
        <p className="copyright">© 2022 Gautham</p>
      </div>
    </div>
  );
}

export default App;