import { React, useEffect, useState } from 'react';
import winTeam from '../img/win-team.png';
import axios from 'axios';


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
                    <div className="match-data">
                      <h4 className="tour">
                        {item.tour}
                        <span>-tur</span>
                      </h4>
                      <div className="match-data-flex">
                        <div className="match">
                          <div className="team-home">
                            {item.home.name} <span>{item.details.home_point}</span>
                            {item.details.home_point > item.details.guest_point ? <img src={winTeam} height='8px' alt='png' /> : ''}
                          </div>
                          <div className="team-guest">
                            {item.guest.name} <span>{item.details.guest_point}</span>
                            {item.details.guest_point > item.details.home_point ? <img src={winTeam} height='8px' alt='png' /> : ''}
                          </div>
                        </div>
                        <div className="match-info">
                          <div className="match-date">
                            {item.date}
                          </div>
                          <div className="match-link-video">
                            <a href="https://www.youtube.com/watch?v=_dBz4dTZocg" target='_blank'>
                              <img src="https://i.ytimg.com/an_webp/_dBz4dTZocg/mqdefault_6s.webp?du=3000&sqp=CIjc3p8G&rs=AOn4CLCGLU1UDhKBoSQIkRjwQdHKikPspQ" alt="video" width='50px' height='30px' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
