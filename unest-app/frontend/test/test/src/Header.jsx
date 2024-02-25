import { Button } from "@material-tailwind/react";
import SearchBar from "./SearchBar.jsx"

const Header = () => {
    return (
        <div>
            <header className="sticky top-0">
                <ul>
                    <SearchBar/>
                    <Button variant = "contained" color = "primary" size = 'large' verticalAlign = 'align-middle'>test</Button>
                </ul>
            </header>
        </div>
    );
}
export default Header;