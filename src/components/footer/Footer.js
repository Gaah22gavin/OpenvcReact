import React from 'react';

const Footer = () => {
  return(
    <footer>
    <img src="./img/footer-line5.png" alt="" className="footer-lines"/>
    <div className="row">
        <div className="footer-box">
            <h2>Founders</h2>
            <h4>Grow your startup</h4>
            <h4>Start a company</h4>
            <h4>Raise Capital</h4>
        </div>
        <div class="footer-box">
            <h2>Open VC</h2>
            <h4>About Us</h4>
            <h4>Support</h4>
            <h4>Support</h4>
        </div>
        <div class="footer-box">
            <h2>Investors</h2>
            <h4>Trending industries</h4>
            <h4>Trending industries</h4>
            <h4>Equity splits</h4>
        </div>
    </div>
    <span>
        <img src="./img/footer-log.png" alt=""/>
        <hr/>
        <p>Privacy Policy 2021</p>
    </span>
</footer>

  );
};

export default Footer;
