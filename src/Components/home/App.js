import React,{useState,useEffect} from "react";
import { Routes, Route} from 'react-router-dom';
import Navibar from "./Navibar";
import Matches from '../matches/Matches';
import News from '../news/News';
import NewsCardInfo from '../news/NewsCardInfo';
import Table from "../statistica/Table";
import Stat from "../statistica/Stat";
import Teams from "../teams/Teams";
import Kubok from "../kuboks/Kubok";
import Footer from './Footer';
import NotFount from "./NotFount";
import axios from "axios";
import Preloader from "./Preloader";
import MatchInfo from "../matches/MatchInfo";
import logoClub from '../../img/mpliga.png';
import ballPng from '../../img/ball.png';
import redCardPng from '../../img/red-card.png';
import yellowCardPng from '../../img/yellow-card.png';
import newsFootball from '../../img/news-football.jpg';
import youtube from '../../img/youtube.png';

function App() {
  const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1';

  const [dataNews, setDataNews] = useState([]);


  // function ForStat(n) {
  //   let arr = [];
  //   for (let i = 0; i < n; i++) {
  //     arr.push(i)
  //   }
  //   return arr;
  // }


  useEffect(() => {
      async function getDataNews(http) {
          await axios.get(`${URL}/${http}`)
              .then((data) => {
                  setDataNews(data.data);
              })
      };
      getDataNews('news');
  }, []);

  const [dataMatch, setDataMatch] = useState([]);

  useEffect(() => {
      async function getDataMatch(http) {
          await axios.get(`${URL}/${http}`)
              .then((data) => {
                  setDataMatch(data.data);
              })
      };
      getDataMatch('matches');
  }, []);

  return (
    <>
      <Navibar />
      <Routes>
        <Route path='/' element={<Matches />} />
        <Route path='/news' element={<News />} />
        <Route path='/table' element={<Table />} />
        <Route path='/stat' element={<Stat />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/kubok' element={<Kubok />} />
        {
        dataNews.map(item => {
          return(
        <Route path={`/news-${item.id}`} element={
         
         <>
        <NewsCardInfo key={item.id}>
          <div className="news-link-history">
            home - yangiliklar - yangilik
          </div>
          <div className="news-link-title">
            {item.title}
          </div>
          <div className="news-link-image">
            <img src={item.image} alt='rasim yuklashda hatolik' width='70%'/>
          </div>
          <div className='news-link-body'>
            {item.info}
          </div>
          <div className="news-link-author">
            {item.interview_author} <span>Sana: {item.date}</span>
          </div>
        </NewsCardInfo>
        </>
        }/>
          )})
          }

{
dataMatch.map(item => {
  console.log(item);
  return(
    <Route path={`/match-${item.id}`} element={
  <>
  <MatchInfo key={item.id} >
    <div className="match-date">
      <span className="mpl-name">MP-Liga <span>{item.date}</span></span>
      <span className="match-finished">{item.finished ? "Bo'lib o'tgan" : "Bo'lib O'tmagan"}</span>
    </div>
    <div className="match-teams">
      <div className="match-team-home">
        <div className="match-team-flex">
           <span className="team-home">
             <img src={logoClub} alt='logo' width='80'/>
             <span>{item.home.name}</span>
           </span>
          <div className='team-home-point'>
           {item.details.home_point}
          </div>
        </div>
        <div className="match-team-home-stat">
          <div>
            <img src={redCardPng} className='stat-img' alt='red-card' width='20px'/>
            x <span>{item.details.home_red_card}</span>
          </div>
          <div>
             <img src={yellowCardPng} className='stat-img' alt='yellow-card' width='20px'/>
             x <span>{item.details.home_yellow_card}</span>
          </div>
        </div>
      </div>
      <span className="match-defis">-</span>
      <div className="match-team-guest">
        <div className="match-team-flex match-team-flex-2">
           <div className='team-guest-point'>
            {item.details.guest_point}
           </div>
           <span className="team-guest">
             <img src={logoClub} alt='logo' width='80'/>
             <span>{item.guest.name}</span>
           </span>
        </div>
        <div className="match-team-guest-stat">
          <div>
            <img src={redCardPng} className='stat-img' alt='red-card' width='20px'/>
            x <span>{item.details.guest_red_card}</span>
          </div>
          <div>
            <img src={yellowCardPng} className='stat-img' alt='yellow-card' width='20px'/>
            x <span>{item.details.guest_yellow_card}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="match-video">
     
    <a target='_blank' href={item.details.link} className="match-link-video">
      <div className="youtube"><img src={youtube} alt='youtube' width='100'/></div>
        {
          item.details.link ?
            <img
            className="link-video-youtube"
              src={newsFootball}
              width="70%"
              title="YouTube video player"
            /> : ''
        }
      </a>
    </div>
  </MatchInfo>
  </>
    }/>
  )
})
}

        <Route path='*' element={<NotFount />} />
      </Routes>

     

      <Footer/>
    </>
  );
}

export default App;
