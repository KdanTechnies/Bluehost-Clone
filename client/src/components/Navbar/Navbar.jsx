import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import './Navbar.css'
import Logo from "../../assets/images/NavLogo.png"
import Sidee from "../../assets/images/Side.png"
import Rev from "../../assets/images/Revv.png"
import Nom from "../../assets/images/Nom-Arena.png"
import { MdOutlineStarPurple500 } from "react-icons/md";

const Navbar = () => {
  return (
    <div>

      <nav>
     <div className="Header-One">
         <div className="Header-logo">
         <img src={Logo}  alt="" />
         </div>
         <ul className="Header-List">
             <li><a href="#"><select title="resource" className="SelOp">
                 <option value="listings">Resources</option>
                 <option value="ai"><a href="#">AI Int</a></option>
                 <option value="pl"><a href="#">Public Cu</a></option>
                 <option value="op"><a href="#">Linkings</a></option>
                 <option value="st"><a href="#">Pricing</a></option>
             </select></a></li>
             <li><a href="#"><select title="log" className="SelOp">
                 <option value="d"><a href="#">Login</a></option>
                 <option value="d"><a href="#">Sign Up</a></option>
                 <option value="d"><a href="#">Create acc</a></option>
             </select></a></li>
             <li className="Blck"><a href="#">Store</a></li>
             <li><a href="#"><select title="currency" className="SelOp">
                 <option value="america">USD</option>
                 <option value="uk">EUR</option>
                 <option value="china">SHIL</option>
                 <option value="nigeria">NAIRA</option>
             </select></a></li>
         </ul>
     </div>
 </nav>


 <main>
        <div className="Hero-Page">
            <div className="Write-Up">
                <h1>Building and hosting your <br/>website just got easier.</h1>
            </div>
            <div className="Img-Div1">
                <img src={Sidee} alt="" />
            </div>

            <div className="Ul-list1">
            <div className="List-Hook">
                <ul>
                    <li><a href="#"><i class='bx bxs-rocket'></i><GiCheckMark />Free domain for 1st yr</a></li>
                    <li><a href="#"><i class='bx bxs-rocket'></i><GiCheckMark />AI site creation tools</a></li>
                    <li><a href="#"><i class='bx bxs-rocket'></i><GiCheckMark />1-click wordpress ins</a></li>
                    <li><a href="#"><i class='bx bxs-rocket'></i><GiCheckMark />Expert 24/7 support</a></li>
                </ul>
            </div>
            <div className="FloatU">
                <ul className="Float">
                    <li className='Bottom'><a href="#">Starting at</a></li>
                    <li><a href="#"><h1>$X.XX/mo*</h1></a></li>
                </ul>
            </div>
            </div>
                <div className="BTn">
                <button type="submit">View Plans</button>
                </div>
                <div className="React-dollar">
                    <div className="J">
                    <AiFillDollarCircle /> 
                    </div>
                    <h2>30-day money-back guarantee</h2>
                </div>
             
                <div className="Review">
                    <img src={Rev} alt="" />
                    <h2>Bluehost rated as a Top-Tier WordPress Provider for both <span>Site Speed & Perfect Uptime</span></h2>
                 </div>
        </div> 
       

    </main>

    <div className="Section-Main">
        <div className="First-Page">
                <div className="Full-Scalp">
                    <h5><b>Basic</b></h5>
                    <p>Made for a simple website or blog</p>
                    <div className="G-Margin">
                        <h1>$2.95/mo</h1>
                        <button type="reset">Save 75%</button>
                    </div>
                    <div className="P-Graph">
                        <h6>For 12 month term</h6>
                        <h6>Renews at $11.99/mo</h6>
                    </div>
                    <div className="Button-Ch">
                        <button type="submit" className='Plan'>Choose Plan</button>
                    </div>
                    <div className="Write-Up">
                        <h4>Websites & Hosting</h4>
                        <p>10 Websites </p>
                        <p>10 GB SSD Storage </p>  
                        <p> Ideal for 40K visits/mo </p> 
                        <p>AI Site Creation Tools</p>
                        <div className="AD">
                        <p><a href="#">30-day Money-Back Guarantee</a></p>
                        <p><a href="#">Free Domain 1st Year</a></p>
                        <p><a href="#">Free Site Migration Tool</a></p>
                        </div>
                        <p>Free CDN - Cloudflare with Argo Routing</p> 
                        <p> Managed WordPress Updates </p>
                        <p> 24/7 Chat Support</p>
                    </div>
                    <div className="Write-Down">
                        <h4>Security</h4>
                        <p>Free SSL- Let's Encrypt</p>
                        <p>Free Malware Scanning</p>
                        <p>Web Application Firewall</p>
                        <p>DDoS Protection Included</p>
                        <p>Daily Website Backups</p>
                    </div>
                    <div className="Write-Center">
                        <h4>Marketing</h4>
                        <p>Yoast SEO - Free Plugin</p>
                        <p><a href="#">Pro Email - Free Trial</a></p>
                        <p>Creative Mail - Email Marketing</p>
                    </div>
                    <div className="Last">
                        <h4>Advanced</h4>
                        <p>Static Content Caching</p>
                        <p>Object Caching</p>
                        <p>SSH & WP-CLI</p>
                        <p>WordPress Staging Site</p>
                    </div>
                </div>
        </div>
        <div className="Second-Page">
                <div className="Header-Div">
                    <h1>RECOMMENDED</h1>
                </div>
                <div className="Full-Scalp">
                <h5><b>Choice Plus</b></h5>
                    <p>Ideal for multiple sites needing storage, security, + backups</p>
                    <div className="G-Marvin">
                        <h1>$3.95/mo</h1>
                        <button type="reset" className='BBL'>Save 75%</button>
                    </div>
                    <div className="P-Graph">
                        <h6>For 12 month term</h6>
                        <h6>Renews at $15.99/mo</h6>
                    </div>
                    <div className="Button-Ch">
                        <button type="submit" className='Blan'>Choose Plan</button>
                    </div>
                    <div className="Write-Up">
                        <h4>Websites & Hosting</h4>
                        <p>50 Websites </p>
                        <p>50 GB SSD Storage </p>  
                        <p> Ideal for 200K visits/mo </p> 
                        <p>AI Site Creation Tools</p>
                        <div className="AD">
                        <p><a href="#">30-day Money-Back Guarantee</a></p>
                        <p><a href="#">Free Domain 1st Year</a></p>
                        <p><a href="#">Free Site Migration Tool</a></p>
                        </div>
                        <p>Free CDN - Cloudflare with Argo Routing</p> 
                        <p> Managed WordPress Updates </p>
                        <p> 24/7 Chat Support</p>
                    </div>
                    <div className="Write-Down">
                        <h4>Security</h4>
                        <p>Free SSL- Let's Encrypt</p>
                        <p>Free Malware Scanning</p>
                        <p>Web Application Firewall</p>
                        <p>DDoS Protection Included</p>
                        <p>Domain Privacy- Free 1st year</p>
                        <p>Daily Website Backups</p>
                    </div>
                    <div className="Write-Center">
                        <h4>Marketing</h4>
                        <p>Yoast SEO - Free Plugin</p>
                        <p><a href="#">Pro Email - Free Trial</a></p>
                        <p>Creative Mail - Email Marketing</p>
                    </div>
                    <div className="Last">
                        <h4>Advanced</h4>
                        <p>Static Content Caching</p>
                        <p>Object Caching</p>
                        <p>SSH & WP-CLI</p>
                        <p>WordPress Staging Site</p>
                    </div>
                </div>
        </div>
        <div className="Third-Page">
        <div className="Full-Scalp">
                <h5><b>eCommerce Essentials</b></h5>
                    <p>Essential commerce tools to sell your content online</p>
                    <div className="G-Margin">
                        <h1>$6.95/mo</h1>
                        <button type="reset">Save 54%</button>
                    </div>
                    <div className="P-Graph">
                        <h6>For 12 month term</h6>
                        <h6>Renews at $18.99/mo</h6>
                    </div>
                    <div className="Button-Ch">
                        <button type="submit" className='Plan'>Choose Plan</button>
                    </div>
                    <div className="Write-Up">
                        <h4>Websites & Hosting</h4>
                        <p>100 Websites</p>
                        <p>100 GB NVMe Storage</p>  
                        <p> Ideal for 400K visits/mo </p> 
                        <p>AI Site Creation Tools</p>
                        <div className="AD">
                        <p><a href="#">30-day Money-Back Guarantee</a></p>
                        <p><a href="#">Free Domain 1st Year</a></p>
                        <p><a href="#">Free Site Migration Tool</a></p>
                        </div>
                        <p>Free CDN - Cloudflare with Argo Routing</p> 
                        <p> Managed WordPress Updates </p>
                        <p> 24/7 Chat Support</p>
                    </div>
                    <div className="Write-Down">
                        <h4>Commerce Tools</h4>
                        <p>Secure Payment Processing</p>
                        <p>WooCommerce Auto-Install</p>
                        <p>Product Subscriptions</p>
                        <p>Visitor Memberships</p>
                        <p>Offer Paid Courses</p>
                        <p>Affiliate Program</p>
                        <p>Custom Email Templates</p>
                        <p>Easy Social Logins </p>
                    </div>
                    <div className="Write-Center">
                        <h4>Security</h4>
                        <p>Free SSL- Let's Encrypt</p>
                        <p>Free Malware Scanning</p>
                        <p>Web Application Firewall</p>
                        <p>DDoS Protection Included</p>
                        <p>Domain Privacy- Free 1st year</p>
                        <p>Daily Website Backups</p>
                    </div>
                    <div className="Second-To">
                         <h4>Marketing</h4>
                        <p>Yoast SEO - Free Plugin</p>
                        <p><a href="#">Pro Email - Free Trial</a></p>
                        <p>Creative Mail - Email Marketing</p>
                    </div>
                    <div className="Last">
                        <h4>Advanced</h4>
                        <p>Static Content Caching</p>
                        <p>Object Caching</p>
                        <p>SSH & WP-CLI</p>
                        <p>WordPress Staging Site</p>
                    </div>
                    
                     </div>
             </div>
    </div>                          

    <div className="Nom">
          <a href="http://www.youtube.com/embed/7tChMHOrQJM?si=-9t_25Y8vdKVzVFY "><img src={Nom} alt=""  /> </a>
        <div className="Float">
            <h4>AI WEBSITE TOOLS</h4>
            <h1>A custom site started for you, courtesy of AI.</h1>
        </div>
    </div>

    <div className="Miniz">
        <div className="Wht">
            <h1>What our customers are saying:</h1>
        </div>
        <div className="Flx">
            <div className="First">
                    <div className="Starz">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    </div>
            </div>
            <div className="Second">

            </div>
            <div className="Third">

            </div>
            <div className="Fourth">

            </div>
            <div className="Fifth">

            </div>
        </div>
    </div>

    
   
    
    </div>
  
  )
}

export default Navbar
