import Chocolate from './Chocolate';
import './App.css';

function App() {
  return (
    <>
    <h1 className='text-center'>Hello Anand...{10+10}</h1> <hr/>
    <div className="App">
      <h1 className='app-header text-center mt-3'>Chocolate App 💙</h1>
      <Chocolate title="Kharbuj" description="Khabuj is fruit"/>
      <Chocolate title="Dairy Milk" description="dairy milk is sweet"/>
      <Chocolate title="Perk" description="perk is chocolate"/>
      
    </div>
    </>
  );
}

export default App;
