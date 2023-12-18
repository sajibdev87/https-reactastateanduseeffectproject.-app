import React, { useEffect } from 'react';
import{ useState } from'react'
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
          const[countries,setCountries] =useState([])
          const money =555;
          // console.log(countries);
          useEffect(()=>{
                    fetch('https://restcountries.com/v3.1/all')
                    .then(res=>res.json())
                    .then(data =>setCountries(data))

          },[])
          return (
                    <div >
                       <h1 className='country'>See All Country</h1> 
                     <div className='common'>
                     {
                              countries.map(country =><Country
                              mon = {money}
                              key={country.cca3}
                                  country={country} 
                              >

                              </Country>)      
                       }      
                    </div> 



                    </div>
          );
};

export default Home;