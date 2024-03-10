import SearchBar from "./SearchBar.jsx";
// import email from "../Assets/email.png";
// import bird from "../Assets/bird.jpg";
import {
    useNavigate,
  } from "react-router-dom";

  

const Header = () => {



    return (
        <div className="sticky top-0">
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar />
                </nav>
            </header>
        </div>
    );
}
export default Header;