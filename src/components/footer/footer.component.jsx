import React from 'react'
import './footer-style.scss';


function Footer() {
    return (
      
      <div className='footer'>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='social-icons'>
              <a
                className='social-icon-link Facebook'
                href='https://www.facebook.com/slamdunkpizza'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook' />
              </a>
              <a
                className='social-icon-link Instagram'
                href='https://www.instagram.com/slamdunkpizza/'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </a>
              <a
                className='social-icon-link Tiktok'
                href='https://www.tiktok.com/@slamdunkpizza?lang=en'
                aria-label='Tiktok'
              >
                <i className='fab fa-tiktok' />
              </a>
              <a
                className='social-icon-link Snapchat'
                href='https://www.snapchat.com/SlamDunkPizza'
                aria-label='Snapchat'
              >
                <i className='fab fa-snapchat' />
              </a>
              <a
                className='social-icon-link Twitter'
                href='https://twitter.com/slamdunkpizza1'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;