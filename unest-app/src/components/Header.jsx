import { Button } from "@material-tailwind/react";
import SearchBar from "./SearchBar.jsx";
import email from "../Assets/email.png";

const Header = () => {
    return (
        <div>
            <header className="sticky top-0">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    {/* <Button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">name</Button> */}
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar />
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img src={email} width={25} height={25} alt="" />
                        <span>Messages</span>
                    </button>
                </nav>
            </header>
        </div>
    );
}
export default Header;