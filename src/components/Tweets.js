import "../css/Tweets.css";
import Post from "./Post";
import TextareaAutosize from "react-textarea-autosize";
import {useState} from 'react'

function Tweets({userName}) {
  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const addPost = () => {
    console.log("Made it");
    let post = {
      id: Date.now(),
      body: userInput,
    };
    setPosts([...posts, post]);
    setUserInput("");
    setButtonEnabled(!buttonEnabled);
    document.getElementById("#autoresizing").value = "";
  };

  function handleChange(event) {
    setUserInput(event.target.value);
    if(!buttonEnabled)
    setButtonEnabled(!buttonEnabled)
  }

  return (
    <div className="Tweets">
      <div className="modal-content tabindex -1">
        <div className="modal-body">
          <div className="input-group">
            <img
              className="profileImg"
              src="https://www.gravatar.com/avatar/19f41f7f9559c25f79a72b6fb34f78e6"
              alt="profileImage"
            />
            <TextareaAutosize
              id="#autoresizing"
              rows={3}
              className="form-control input"
              aria-label="What's Happening?"
              placeholder="What's Happening?"
              onChange={handleChange}
            ></TextareaAutosize>
          </div>
          <div className="button-layout">
            <button className="tweet-button2" id="btn-submit" onClick={addPost} 
            disabled={buttonEnabled}>
              Tweet
            </button>
          </div>
        </div>
        <Post body={posts} userName={userName} />
      </div>
    </div>
  );
}


export default Tweets;
