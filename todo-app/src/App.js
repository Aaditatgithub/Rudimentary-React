// import logo from './logo.svg';
import './App.css';
// import FirstComponent from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import LearningJavascript from './components/learning-examples/LearningJavascript';
import Counter from './components/Counter/Counter'

function App() {
  return (
    <div className="App">
      <h1>To Do application</h1>
        <Counter></Counter>
    </div>
  );
}

// function playingWithProps(properties){
  
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
    
//   return(
//     <div>Props</div>
//   );
// }

function playingWithProps({property1,property2  }){
  
  console.log(property1)
  console.log(property2)
    
  return(
    <div>Props</div>
  );
}

export default App;
