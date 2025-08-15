import { useState } from "react";

export default function TextArea(props) {
  let [text, setText] = useState(" ");
  function handleUp() {
    text = text.toUpperCase();
    setText(text);
    props.showAlert("Text converted to uppercase", "success")
  }
  function handleLow() {
    text = text.toLowerCase();
    setText(text);
    props.showAlert("Text converted to lowercase", "success")
   }
   function cleartext() {
     setText("");
     props.showAlert("Text has been cleared", "success")
   }
  return (
    <>
      <form
        className="form-floating "
        style={{ margin: "0 auto", minHeigh: "300px", width: "70vw" }}
      >
        <h4>Enter Some Text</h4>
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "300px", width: "70vw" }}
        ></textarea>

        <button onClick={handleUp} className="m-4 btn btn-dark" type="button">
          Convert to Uppercase
        </button>
        <button onClick={handleLow} className="m-4 btn btn-dark" type="button">
          Convert to Lowercase
        </button>
        <button onClick={cleartext} className="m-4 btn btn-dark" type="button">
          Clear Text
        </button>

        <h6>
          {text.split(" ").length} words and {text.length} characters
        </h6>
      </form>
    </>
  );
}
