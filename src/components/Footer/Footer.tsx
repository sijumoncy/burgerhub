import {HiPhone, HiMail, HiLocationMarker} from 'react-icons/hi'
import {FaXTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa6' 

function Footer() {
  return (
    <footer id="footer" className='mt-5'>
      <div className="container">
        <ul className="grid grid-col-1 items-start gap-5 pb-5 | tabM:grid-cols-2 | lap:grid-cols-4">
          <li>
            <div className="space-y-3">
              <a href="" className="text-4xl uppercase">
                <span className="text-primary">Burger</span>
                <span className="text-secondary">Hub</span>
              </a>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                aspernatur veniam reiciendis iusto tenetur porro. Debitis
                voluptatum qui.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg uppercase font-medium">Support</h3>
              <a href="text-xs hover:text-seconday">FAQ's</a>
              <a href="text-xs hover:text-seconday">Privacy Policy</a>
              <a href="text-xs hover:text-seconday">Terms & Conditions</a>
              <a href="text-xs hover:text-seconday">Contact</a>
            </div>
          </li>

          <li className="space-y-8">
            <div className="space-y-2">
                <h3 className="uppercase text-lg font-medium">Contact</h3>
                <p className="gap-2 flex items-center text-xs">
                    <HiPhone className="fill-primary text-lg"/>
                    +91 0012152820
                </p>
                <p className="gap-2 flex items-center text-xs">
                <HiMail className="fill-primary text-lg"/>
                    info@burgerub.bh
                </p>
            </div>
          </li>

          <li className="space-y-8">
            <div className="space-y-2">
                <h3 className="uppercase text-lg font-medium">Address</h3>
                <p className="gap-2 flex items-center text-xs">
                    <HiLocationMarker className="fill-primary text-lg"/>
                    BurgerHub , street 10 , Imagine city.
                </p>
            </div>
          </li>

          <li className="space-y-8">
            <div className="space-y-2"> 
                <h3 className="uppercase text-lg font-medium">Follow Us</h3>
                <div className='space-x-3 flex'>
                    {/*facebook, twitter, insta lg cursor seconday hover:*/}
                    <FaFacebookF className="fill-primary text-lg cursor-pointer hover:scale-110 hover:fill-primary/70"/>
                    <FaXTwitter className="fill-primary text-lg cursor-pointer hover:scale-110 hover:fill-primary/70"/>
                    <FaInstagram className="fill-primary text-lg cursor-pointer hover:scale-110 hover:fill-primary/70"/>
                </div>
            </div>
          </li>

        </ul>
        {/* copy right */}
        <div className='flex flex-col items-center border-t border-primary pt-5 | tabM:flex-row tabM:justify-center tabM:mt-5'>
            <p className='para__text'>Copyright © BurgerHub. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
