import SearchBar from "./SearchBar.jsx";
import email from "../Assets/email.png";

const Header = () => {
    return (
        <div>
            <header className="sticky top-0">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    {/* <Button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">name</Button> */}
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar />
                    <div className=" flex items-center">
                        <button onclick="location.href = './MessagesPage.jsx'" class="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <img src={email} width={25} height={25} alt="" />
                            <div>Messages</div>
                        </button>
                        <button onclick="location.href = './PostPage.jsx'" class="bg-red-400 hover:bg-red-500 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <div>Create Post</div>
                        </button>
                    </div>
                    
                </nav>
            </header>
        </div>
    );
}
export default Header;