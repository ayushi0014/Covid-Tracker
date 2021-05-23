import React from 'react'
import './WorldStat.css'
import { Pie } from 'react-chartjs-2';
import numeral from "numeral"




function WorldStat({countries, countryInfo}) {
  const data = {
    labels: ["Total cases", "Active cases", "Recovered cases", "Total deaths", "Critical cases"],
    datasets: [
      {
        label: '# of Votes',
        data: [countryInfo.cases, (countryInfo.active), countryInfo.recovered, (countryInfo.deaths*10), (countryInfo.critical*100)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
    return (
        <div className="worldstat">
            <h3 style={{color: "#6236ff"}}>World Stats</h3>
            <Pie data={data} style={{marginBottom: "20px"}} />
            <div  className="table">
            <div>
            {
                    countries.map((country) => (
                        <tr>
                            <td style={{color: "black", fontWeight: "600"}}>{country.country}</td>
                            <td style={{color: "grey", fontWeight: "400"}}>{numeral(country.active).format("0,0")}</td>
                        </tr>
                    ))
                }
                
            </div>
        </div>
        </div>
        
    )
}

export default WorldStat
