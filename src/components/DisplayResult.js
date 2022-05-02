import "./displayresult.css";
import right from "../images/image 35.png";
import left from "../images/image 36.png";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
const Result = ({ definition, searchWords, searchHandler, info }) => {
  return (
    <div className="result-container">
      <header>
        <img src={right} alt="jingili" />
        <div>
          <h2>SAMì DICTIONARI</h2>
          <form onSubmit={searchHandler} className="result-form">
            <input
              className="result-input"
              placeholder="Search for another word"
              onChange={searchWords}
              type="search"
              disabled={info}
            />
          </form>
        </div>
        <img src={left} alt="jingili" />
      </header>
      <main>
        <h1>{definition.word}</h1>
        {definition.phonetics.map((phonetic, index) => (
          <div key={index}>
            <Phonetics phonetics={phonetic} />
          </div>
        ))}

        {definition.meanings.map((meanings, index) => (
          <div key={index}>
            <Meaning meanings={meanings} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Result;
