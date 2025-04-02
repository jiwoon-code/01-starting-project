import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
  const [select, setSelect] = useState("components");
  function handleSelect(selectedButton) {
    setSelect(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onClick={() => handleSelect("State")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[select].title}</h3>
            <p>{EXAMPLES[select].description}</p>
            <pre>
              <code>{EXAMPLES[select].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
