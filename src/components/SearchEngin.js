import "./SearchEngin.css";
const DictionarySearch = ({ searchWords, searchHandler }) => {
  return (
    <form onSubmit={searchHandler}>
      <input
        placeholder="Type To Search"
        onChange={searchWords}
        type="search"
      />
    </form>
  );
};

export default DictionarySearch;
