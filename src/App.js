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
    console.log(info);

    //api docs: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then((response) => {
      setInfo(false);
      console.log(info);
      setDefinition({
        meaningOne: response.data[0].meanings[0].definitions[0].definition,
      });
    });
  };
  // console.log(definition.meaningOne);

  const searchWords = (e) => {
    setKeyWord(e.target.value);
  };
  if (definition) {
    return (
      <div>
        <Result definition={definition} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>WELCOME TO SAMì DICTIONARI</h1>

        <DictionarySearch
          searchWords={searchWords}
          searchHandler={searchHandler}
        />
        <div className="picture-section">
          <img className="section" src={section} alt="main section" />
          <img className="person" src={person} alt="person" />
        </div>
      </div>
    );
  }
}

export default App;
