import './App.css';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

function App() {

  //css via props
  const styleSheet = {
    fontSize: "25px",
    textAlign: "center",
    margin: "40px",
    border: "1px solid blue"
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Example1/>
      <Example2/>
      <Example3 styleSheet = {styleSheet}/>

    </div>
  );
}

export default App;
