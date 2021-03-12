import logo from './logo.svg';
import React,{useState} from 'react'
import Bars from './Bar'
import './App.css';
import Countries from './Countries'
import axios from 'axios'
function App() {
  const [country,setCountry]=useState('Afghanistan')
  const [data,setData]=useState({})
  // useEffect(() => {
  //   axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
  //   .then(
  //     res => {console.log(res)}
  //   )
  //   .catch(
  //     (err) => console.log("The error is",err)
  //   )
  // }, [country])
  const handleSearch = ()=>{
        axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then(
      res => {setData(res.data)}
    )
    .catch(
      (err) => console.log("The error is",err)
    )
  }
  const onChangeHandler = (e) =>{
    setCountry(e.target.value)
  }
  return (
    <div className="App">
      <h1>Covid Tracker</h1>
      <Countries onChangeHandler={onChangeHandler}/>
      <button onClick={()=>handleSearch()}>Go</button>
      <h1>{data.active}</h1>
      <h1>{data.cases}</h1>
      <h1>{data.deaths}</h1>
      <Bars active={data.active} cases={data.cases} deaths={data.deaths}/>
    </div>
  );
}
export default App;
