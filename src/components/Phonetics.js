import "./phonetic.css";
const Phonetics = ({ phonetics }) => {
  console.log(phonetics);
  return (
      
    <div className="phonetic-section">
      <p>{phonetics.text}</p>
      <a href={phonetics.audio}>listen</a>
    </div>
  );
};

export default Phonetics;
