import React,{useState, useEffect} from 'react'

import logo from '../images/covid19.png'
import virus from '../images/virus.png'

const CovidPage = () => {
    const [fetchdata, setfetchData] = useState([]);  
    const [loading, setLoading] = useState(true)
  
    const fetchData =async () =>{
        setLoading(false)        
        const res = await fetch(`https://api.covid19api.com/summary`)
        const resdata = await res.json()
        setfetchData(resdata.Countries)   
          
    }
    useEffect(() => {  
       fetchData()
    }, []);  

    if(loading) return <h3 style={{color:'#f4f4f4'}}>Loading....</h3>
    
    return (  
        <div>  
            <div className="row" style={{ 'margin': "10px" }}>  
                 <div>
                     <img src={virus} alt="covid-19 virus" className="img-fluid ml-3 virus_img"/>
                     <img src={logo} alt="covid-19" className="img-fluid mt-3"/>
                     <img src={virus} alt="covid-19 virus" className="img-fluid ml-3 virus_img"/>
                 </div>
                <div className="col-sm-12 font-weigth-bold text-white">  
                    Covid-19 World cases 
                 </div>  
            </div>  
            <table className="table my-3" >  
                <thead className="thead-dark">  
                    <tr>  
                        <th scope="col">Country</th>  
                        <th scope="col">Total Confirmed</th>  
                        <th scope="col">Total Recovered</th>  
                        <th scope="col">Total Deaths</th>   
                    </tr>  
                </thead>  
                <tbody>  
                    { 
                       fetchdata.map((curele,i)=>{
                           return (
                              
                               <tr key={i}>
                                   <td className="text-center">{curele.Country}</td>
                                   <td className="text-center">{curele.TotalConfirmed}</td>
                                   <td className="text-center">{curele.TotalRecovered}</td>
                                   <td className="text-center">{curele.TotalDeaths}</td>
                               </tr>
                           )
                       })

                    }  
                </tbody>  
            </table>  
  
        </div>  
    ) 
}

export default CovidPage
