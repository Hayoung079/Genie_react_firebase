import Counter from './Counter';
import User from './User';
import './App.css';

function App() {
  return (
    <div>
    <div id="root">
      <div className="container">
        <section id="formHolder">
          <User />
          <Counter />
        </section>
      </div> 
    </div>
    </div>
  );
}

export default App;
