import "./SearchEngin.css";
const DictionarySearch = ({ searchWords, searchHandler, info }) => {
  return (
    <form onSubmit={searchHandler}>
      <input
        placeholder="Type To Search"
        onChange={searchWords}
        type="search"
        disabled={info}
      />
    </form>
  );
};

export default DictionarySearch;
