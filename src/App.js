
import './App.css';

import ChildComponent from './Component/ChildComponent';
import HOC from './Component/HOC';
import PureComponents from './Component/PureComponents';

function App() {
  return (
    <div className="App">
     <PureComponents/>
     <ChildComponent data={<HOC/>}/>
    </div>
  );
}

export default App;
