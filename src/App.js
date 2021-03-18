import  Counter from './Counter';
import User from './User';
import './App.css';
import './script/script';
import config from './config';

fetch(`${config.api}/position`)

function App() {
  return (
    <div className="App">
    <div id="root">
      <div className="container">
        <section id="formHolder">
          <Counter />
          <User />
        </section>
      </div> 
    </div>
    </div>
  );
}

export default App;
