import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-link">
              <div className="join-team">Jamoangiz bormi? unda bizga <Link to='/contact'>qo'shiling</Link></div>
              <Link to='/contact' className="contact">Kontakt</Link>
            </div>
            <div className="footer-link-massage">

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
