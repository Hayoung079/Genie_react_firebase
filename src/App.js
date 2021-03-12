import Counter from './Counter';
import User from './User';
import './App.css';
import './script/script'

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
