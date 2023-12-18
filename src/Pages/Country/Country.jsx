import React from 'react';
import './Country.css'

const Country = (props) => {
          // console.log(props.country);
          const {mon} = props
          const{name,capital,population} =props.country
          return (
                    <div className='p-3 rounded'style={{border:'3px solid green',margin:'20px',}}>
                              <div className='full'>
                              <h4>Country Name:{name.common}</h4>
                              <p>Population:{population}</p>
                              <p>Capital:{capital}</p>
                              <button className='btn btn-outline-success'>Click Hear{mon}</button>       
                              </div>
                    </div>
          );
};

export default Country;