import { React, useEffect, useState } from 'react';
import winTeam from '../img/win-team.png';
import logoTeam from '../img/uzbekistan.png';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';


const URL = 'https://premiyerliga.pythonanywhere.com/api/v1';

export default function Matches() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(http) {
      await axios.get(`${URL}/${http}`)
        .then((data) => {
          setData(data.data);
        })
    };
    getData('matches');
  }, []);






  return (
    <>
      <div className="matches">
        <div className="tp">
          <div className="container">
            {
              data.map((item, index) => {
                console.log(item, index);
                return (
                  <>
                    <NavLink to='/teams' className="match-data" key={index}>
                      <h4 className="tour">
                        {item.tour}
                        <span>-tur</span>
                      </h4>
                      <div className="match-data-flex">
                        <div className="match">
                          <div className={`team-home ${item.details.home_point < item.details.guest_point ? 'color-lose': ''}`}>
                           <img src={logoTeam} alt="logo team" width='25px' height='15px'/> {item.home.name} <span className='shot'>{item.details.home_point}</span>
                            {item.details.home_point > item.details.guest_point ? <img src={winTeam} className='win-dotter' height='8px' alt='png' /> : ''}
                          </div>
                          <div className={`team-guest ${item.details.home_point > item.details.guest_point ? 'color-lose': ''}`}>
                          <img src={logoTeam} alt="logo team" width='25px' height='15px' /> {item.guest.name} <span className='shot'>{item.details.guest_point}</span>
                            {item.details.guest_point > item.details.home_point ? <img src={winTeam} className='win-dotter' height='8px' alt='png' /> : ''}
                          </div>
                        </div>
                        <div className="match-info">
                          <div className="match-date">
                            {item.date}
                          </div>
                          <div className="match-link-video">
                            {item.details.link ? <iframe width="60" height="40" src={item.details.link} title="YouTube video player" frameborder="0" allowfullscreen>
                            </iframe> : ''}
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
