import axios from "axios";
import React, { useContext , useState} from "react";
import { UserContext } from "../context/UserContext";

function FormQuotes() {

  const {token} = useContext(UserContext)



  const addQuotes = async () => {
    await axios.post("http://localhost:8000/quotes", {
      content: quotesObj.content,
      author: quotesObj.author,
      tags: quotesObj.tags,
    });
  };

  const [quotesObj, setQuotesObj] = useState({
    content: "",
    author: "",
    tags: [],
  });

  const handleOnChange = (value, inputType) => {
    inputType !== "tags"
      ? setQuotesObj({ ...quotesObj, [inputType]: value })
      : setQuotesObj({ ...quotesObj, [inputType]: [value] });
  };

  return (
    <div className="form-container">
      <form>
        <label>
          content:
          <input
            onChange={(e) => {
              handleOnChange(e.target.value, "content");
            }}
            type="content"
            name="content"
          />
        </label>
        <label>
          author:
          <input
            onChange={(e) => {
              handleOnChange(e.target.value, "author");
            }}
            type="author"
            name="author"
          />
        </label>
        <label>
          tags:
          <input
            onChange={(e) => {
              handleOnChange(e.target.value, "tags");
            }}
            type="tags"
            name="tags"
          />
        </label>
        <input
          onClick={() => {
            addQuotes();
          }}
          value="Submit"
        />
      </form>
    </div>
  );
}

export default FormQuotes;