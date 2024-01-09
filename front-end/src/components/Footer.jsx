import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <div className="bg-white/30">
      <footer className="footer py-10 text-base-content section-container">
        <aside>
          <span className="text-xl font-bold">
            <span className="bg-primary rounded-md px-2 mr-[2px] text-white">F</span>
            OODI
          </span>
          <p className="text-sm">
            Savor the artistry where every dish<br /> is a culinary masterpiece
          </p>
        </aside> 
        <nav>
          <header className="footer-title">USEFUL LINKS</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav> 
        <nav>
          <header className="footer-title">MAIN MENU</header> 
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav> 
        <nav>
          <header className="footer-title">CONTACT US</header> 
          <a className="link link-hover">aden@gmail.com</a>
          <a className="link link-hover">+6281276169833</a>
          <a className="link link-hover">Social Media</a>
        </nav>
      </footer>

      <footer className="footer items-center p-4 text-neutral-content">
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to="/" className="bg-white/50 p-2 rounded-xl">
            <Twitter className="w-5 h-5 text-gray-800" />
          </Link>
          <Link to="/" className="bg-white/50 p-2 rounded-xl">
            <Instagram className="w-5 h-5 text-gray-800" />
          </Link>
          <Link to="/" className="bg-white/50 p-2 rounded-xl">
            <Github className="w-5 h-5 text-gray-800" />
          </Link>
        </nav>

        <p className="text-sm font-medium text-gray-600 ml-8">
          &copy; Copyright by Foodi 2023, All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer
