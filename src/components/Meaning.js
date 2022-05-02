import "./meaning.css";
const Meaning = ({ meanings }) => {
  return (
    <div className="show-meaning">
      <h3>{meanings.partOfSpeech}</h3>
      {meanings.definitions.map((definitions, index) => (
        <div className="each-definition" key={index}>
          {/* we use index as key only when do this if items have no stable IDs, We don’t recommend using 
          indexes for keys if the order of items may change. This can negatively impact performance and 
          may cause issues with component state. */}
          <p>
            {index + 1}. {definitions.definition}
          </p>
          <small>
            <em>{definitions.example}</em>
          </small>
          <p>
            {meanings.synonyms.length > 1 ? "synonyms:" : null}
            {meanings.synonyms.map((synonym, index) => (
              <span className="synonym" key={index}>
                {synonym}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Meaning;
