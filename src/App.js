import { useState } from "react";
import "./App.css";
import DictionarySearch from "./components/SearchEngin";
import section from "./images/section.svg";
import person from "./images/person.png";
import axios from "axios";
import Result from "./components/DisplayResult";

function App() {
  const [keyWord, setKeyWord] = useState("");
  const [definition, setDefinition] = useState();
  const [info, setInfo] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    setInfo(true);

    //api docs: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then((response) => {
      setInfo(false);
      console.log(info);
      setDefinition(response.data[0]);
    });
  };

  const searchWords = (e) => {
    setKeyWord(e.target.value);
  };
  if (definition) {
    return (
      <div>
        <Result
          definition={definition}
          searchWords={searchWords}
          searchHandler={searchHandler}
          info={info}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>WELCOME TO SAMì DICTIONARI</h1>
        <div className="mobile-version">
          <DictionarySearch
            searchWords={searchWords}
            searchHandler={searchHandler}
            info={info}
          />
        </div>
        <div className="picture-section">
          <img className="section" src={section} alt="main section" />
          <img className="person" src={person} alt="person" />
        </div>
      </div>
    );
  }
}

export default App;
