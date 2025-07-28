import './footer.css';
import logo from '../assets/logo.png'; 
const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
  <img src={logo} alt="Logo" className="footer-logo" />

  <div >
    <p className="powered">
      Powered By <img src={logo} alt="Mini logo" className="powered-logo" />
    </p>
    
    <p className="newsletter-text">Subscribe to our Newsletter</p>


    <form className="footer-subscribe" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="subscribe-input"
        required
      />
      <button type="submit" className="subscribe-button">Subscribe</button>
    </form>
  </div>
</div>

            <div className="footer-links">

               <ul>
                <li><a href="/Business Listings">Business Listings</a></li>
                <li><a href="/External">External</a></li>
                <li><a href="/Legal">Legal</a></li>
                <li><a href="/Become a partner">Become a Partner</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Terms & Conditions">Terms & Conditions</a></li>
                <li><a href="/Faq">FAQ</a></li>
                <li><a href="/Docs">Docs</a> </li>   
                <li><a href="/Privacy Policy">Privacy Policy</a> </li>             
                <li><a href="/contact">Contact Us</a></li>
                </ul>
                </div>
            <p>2025 &copy;  HathorUnion. All rights reserved.</p>
            
            </div>
        
    </footer>
    );
}
            
export default Footer;