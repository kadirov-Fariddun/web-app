import axios from 'axios';
import React, { useState, useEffect } from 'react';
import logoClub from '../../img/mpliga.png';
import winPng from '../../img/win.png';
import drawPng from '../../img/draw.png';
import losePng from '../../img/lose.png';
import Preloader from '../home/Preloader';
const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1';

export default function Table(props) {

  const [data, setData] = useState([])
  async function getData(https) {
    await axios.get(`${URL}/${https}`)
      .then(data => {
        setData(data.data);
      })
  }

  useEffect(() => {
    getData('table');
  }, []);
  let i = 1;
  console.log(data);




  return (
    <>
      <div className="table">
        <div className="tp">
          <div className="container">
            <Preloader data={data} />
            <h3 className="table-year">
              2023 MP-Liga
            </h3>


            {/* first table */}
            <div className="table-flex">
              <div>
                <table className="table-one">
                  <tr>
                    <th className="table-title">
                      Club
                    </th>
                  </tr>
                  {
                    data.map(item => {
                      return (
                        <tr key={item.id}>
                          <span className={`team-number ${i <= 3 ? 'liders' : ''} ${i === 4 ? 'tops' : ''} ${i >= 9 ? 'outsiders' : ''}`}>
                            {i++}
                          </span>
                          <img src={logoClub} alt="" className="logo-club" height='30px' />
                          <div className="club-name" key={item.club.id}>
                            {item.club.name}
                          </div>
                        </tr>
                      )
                    })
                  }
                </table>
              </div>
              {/* first table end */}

              {/* last table */}
              <div className="table-flex-two">
                <table className="table-two">
                  <tr>
                    <th className="table-title table-title-two">G</th>
                    <th className="table-title table-title-two">W</th>
                    <th className="table-title table-title-two">D</th>
                    <th className="table-title table-title-two">L</th>
                    <th className="table-title table-title-two">P</th>
                    <th className="table-title table-title-two">Oxirgi 5 natija</th>
                  </tr>
                  {
                    data.map(item => {
                      return (
                        <tr key={item.id}>
                          <td className="club-games">
                            {item.game}
                          </td>
                          <td className="club-win">
                            {item.win}
                          </td>
                          <td className="club-draw">
                            {item.draw}
                          </td>
                          <td className="club-lose">
                            {item.lose}
                          </td>
                          <td className="club-point">
                            {item.point}
                          </td>
                          <td className='club-last-5'>
                            <div>
                              <span>
                                {item.oxirgi_1.toLowerCase() === 'win' ? <img src={winPng} alt='win' width='20px' /> : ''}
                                {item.oxirgi_1.toLowerCase() === 'draw' ? <img src={drawPng} alt='draw' width='18px' /> : ''}
                                {item.oxirgi_1.toLowerCase() === 'lose' ? <img src={losePng} alt='lose' width='20px' /> : ''}
                                {item.oxirgi_2.toLowerCase() === 'win' ? <img src={winPng} alt='win' width='20px' /> : ''}
                                {item.oxirgi_2.toLowerCase() === 'draw' ? <img src={drawPng} alt='draw' width='18px' /> : ''}
                                {item.oxirgi_2.toLowerCase() === 'lose' ? <img src={losePng} alt='lose' width='20px' /> : ''}
                                {item.oxirgi_3.toLowerCase() === 'win' ? <img src={winPng} alt='win' width='20px' /> : ''}
                                {item.oxirgi_3.toLowerCase() === 'draw' ? <img src={drawPng} alt='draw' width='18px' /> : ''}
                                {item.oxirgi_3.toLowerCase() === 'lose' ? <img src={losePng} alt='lose' width='20px' /> : ''}
                                {item.oxirgi_4.toLowerCase() === 'win' ? <img src={winPng} alt='win' width='20px' /> : ''}
                                {item.oxirgi_4.toLowerCase() === 'draw' ? <img src={drawPng} alt='draw' width='18px' /> : ''}
                                {item.oxirgi_4.toLowerCase() === 'lose' ? <img src={losePng} alt='lose' width='20px' /> : ''}
                                {item.oxirgi_5.toLowerCase() === 'win' ? <img src={winPng} alt='win' width='20px' /> : ''}
                                {item.oxirgi_5.toLowerCase() === 'draw' ? <img src={drawPng} alt='draw' width='18px' /> : ''}
                                {item.oxirgi_5.toLowerCase() === 'lose' ? <img src={losePng} alt='lose' width='20px' /> : ''}
                              </span>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </table>
              </div>
              {/* last table end */}
            </div>












            <div className="table-footer">
              <div className="table-footer-flex">
                <div className="table-footer-info">
                  <h4>
                    Manolar/darajalar
                  </h4>
                  <div className='table-liders'><span></span> Turnir Liderlari</div>
                  <div className='table-tops'><span></span> Turnir Toplari</div>
                  <div className='table-outsiders'><span></span> Turnir Autsayderlari</div>
                  <div className="table-coments">
                    <div><span></span> G (o'yinlar)</div>
                    <div><span></span> W (g'alabalar)</div>
                    <div><span></span> D (duranglar)</div>
                    <div><span></span> L (mag'lubiyatlar) </div>
                    <div><span></span> P (ochkolar) </div>
                  </div>
                </div>
                <div className="table-footer-last-5">
                  <div><img src={winPng} alt="win" width='15px' /> G'alaba</div>
                  <div><img src={drawPng} alt="draw" width='15px' /> Durang</div>
                  <div><img src={losePng} alt="lose" width='15px' /> mag'lubiyat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
