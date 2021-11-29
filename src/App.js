import "./App.css";
import Form from "./Components/Form/Form";

function App() {
    return (
        <div className="App">
            <h1>KSCoaching</h1>
            <h2>
                Candidature pour un poste de{" "}
                <span className="spanJob">développeur front-end</span>
            </h2>
            <Form />
        </div>
    );
}

export default App;
