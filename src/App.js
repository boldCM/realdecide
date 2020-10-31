import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RealDecide from "./components/RealDecide";
import "./global.css";
import { choosOneRandom } from "./utils/helpers";

function App() {
  const [values, setValues] = useState([]);
  const [alreadyChoosen, setAlredyChoosen] = useState([]);
  const [theLuckyOne, setTheLuckyOne] = useState("");

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item !== value);

    setValues(valuesCleaned);
    setAlredyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Form setValues={setValues} setAlreadyChoosen={setAlredyChoosen} />

        <div className="realDecide">
          <h2>wheelTitel</h2>
          <button
            className="button__reRun"
            onClick={() => {
              if (values.length > 0) {
                const randomPerson = choosOneRandom(values);
                setTheLuckyOne(randomPerson);
                moveFromValuesToAlreadyChoosen(randomPerson);
              } else {
                setValues(alreadyChoosen);
                setTheLuckyOne(null);
                setAlredyChoosen([]);
              }
            }}
          >
            ReRun
          </button>
          {theLuckyOne && (
            <>
              <h2>Its you!</h2>
              <h3>{theLuckyOne}</h3>
            </>
          )}
          <div className="valuesToChoose">
            {values.length > 0 && (
              <>
                <h2>Participants</h2>
                <RealDecide values={values} />
              </>
            )}
          </div>

          <div className="alreadyChoosen">
            {alreadyChoosen.length > 0 && (
              <>
                <h2>Already Choosen</h2>
                <RealDecide values={alreadyChoosen} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
