import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import DisplayTab from './components/DisplayTab';
import UserForm from './components/UserForm';

function App() {
  const [alltabs, setAlltabs] = useState([
    {
      label:'default label',
      checked: false
    },
    {
      label:'second label',
      checked: false
    }
  ]);
  const createTab = (newTabObj) =>{
    setAlltabs([...alltabs, newTabObj])
  }
  return (
    <div className="App">
      <h1>Welcome to DutTech.org</h1>
      {JSON.stringify(alltabs)}
      <UserForm createTab ={createTab}/>
      <DisplayTab alltabs ={alltabs} setAlltabs={setAlltabs}/>
    </div>
  );
}

export default App;
