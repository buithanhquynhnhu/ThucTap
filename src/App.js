import React, {useState,useEffect} from 'react';
import './App.css';
import Item from 'antd/es/list/Item';
// khu nghĩ dưỡng :little palm,The Ahwahnee Hotel,Spring Creek Ranch,Hope Lake Lodge
//Mountain Logde,High Peaks Resort,Resort Squaw Creek,Stein Eriksen Lodge
function App(){
    const [query,setQuery]=useState('')

    const [container,setContainer]=useState([])

    const [endPoint,setEndPoint]= useState('')

    useEffect(()=>{

    
    fetch(`https://ski-resort-forecast.p.rapidapi.com/+${query}/forecast?units=i&el=top`,{   
    "method": "GET",
        "headers":
            {
                'X-RapidAPI-Key': 'b839e7bedfmshb62471bf0747f84p1b0211jsn7b786c711393',
		'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
        }
    })
    .then(response => {
      return response.json() ;
     // console.log(response.json())
    })
    .then(data => {
    setContainer(data.forecast5Day);
    //console.log(data.forecast5Day)
    })
    .catch( err => {
        console.error(err)
    });
},[endPoint])
    const onChangeHandler=(e)=>{
        setQuery(e.target.value)
    }
    const onSubmitHandler= (e) =>{
        e.preventDefault()
        setEndPoint(query)
    }
    return (
       
        <div className='App'>
            
             <form className='FormSubmit' onSubmit={onSubmitHandler}>
             <h3>THỜI TIẾT KHU NGHĨ DƯỠNG: {query}</h3>
            <input type='text' value={query} onChange={onChangeHandler}/>
            <button type='submit'>Get</button>
     
        </form><br></br>
       
      {container.map((Item)=>{
        return (
            <div>
              <table border={1} className='Thoitiet' >
                <thead>
                <th>{Item.dayOfWeek} </th>
                    <th>summary</th>
                    <th>windSpeed</th>
                    <th>windDirection</th>
                    <th>snow</th>
                    <th>rain</th>
                    <th>maxTemp</th>
                    <th>minTemp</th>
                    <th>windChill</th>
                    <th>humidity</th>
                    <th>freezeLevel</th>
                </thead>
                <tbody >
                    <tr>
                        <td>AM</td>
                        <td>{Item.am.summary}</td>
                        <td>{Item.am.windSpeed}</td>
                        <td>{Item.am.windDirection}</td>
                        <td>{Item.am.snow}</td>
                        <td>{Item.am.rain}</td>
                        <td>{Item.am.maxTemp}</td>
                        <td>{Item.am.minTemp}</td>
                        <td>{Item.am.windChill}</td>
                        <td>{Item.am.humidity}</td>
                        <td>{Item.am.freezeLevel}</td>
                    </tr>
                    <tr>
                        <td>PM</td>
                        <td>{Item.pm.summary}</td>
                        <td>{Item.pm.windSpeed}</td>
                        <td>{Item.pm.windDirection}</td>
                        <td>{Item.pm.snow}</td>
                        <td>{Item.pm.rain}</td>
                        <td>{Item.pm.maxTemp}</td>
                        <td>{Item.pm.minTemp}</td>
                        <td>{Item.pm.windChill}</td>
                        <td>{Item.pm.humidity}</td>
                        <td>{Item.pm.freezeLevel}</td>
                    </tr>
                    <tr>
                        <td>NIGHT</td>
                        <td>{Item.night.summary}</td>
                        <td>{Item.night.windSpeed}</td>
                        <td>{Item.night.windDirection}</td>
                        <td>{Item.night.snow}</td>
                        <td>{Item.night.rain}</td>
                        <td>{Item.night.maxTemp}</td>
                        <td>{Item.night.minTemp}</td>
                        <td>{Item.night.windChill}</td>
                        <td>{Item.night.humidity}</td>
                        <td>{Item.am.freezeLevel}</td>
                    </tr>
                </tbody>
              </table><br></br>
               
            </div>
            
        )
      })}
       </div>
      
       
    )
}

export default App;
