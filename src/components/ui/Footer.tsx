import { footer } from "framer-motion/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#b7deb6] text-black-400 py-12 font-serif">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ab soluta ullam rerum iure quasi quo consequuntur temporibus consectetur. Architecto unde quaerat incidunt consequatur voluptatem? Cupiditate in velit facilis. Quo, temporibus laboriosam.
          </p>
        </div>
   
       
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.facebook.com/profile.php?id=61568615631445"
              className="hover:text-black transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2 w-[30px]"/>
              Facebook
            </a>
           
            <a
              href="https://www.instagram.com/farmerzone.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="hover:text-black transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2 w-[30px]" />
              Instagram 
            </a>
            
            <a
              href="www.youtube.com/@FarmerZoneOfficial"
              className="hover:text-black transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} className="mr-2 w-[30px]" />
             YouTube
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
          <p>Shop No-11, 1st Floor, Near Kopri Main Bazar, <br /> Opposite BuildingNo-3</p>
          <p>Kopri Colony-Thane East, Mumbai, Maharashtra 400603</p>
          <p>Email: farmerzonemumbai@gmail.com</p>
          <p>Phone: +91-7400200687</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2025 Farmerzone. All rights reserved.</p>
    </footer>
  )
}

export default Footer