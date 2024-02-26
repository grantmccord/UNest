import './App.css';
import Header from "./Components/Header/Header"
import Properties from "./Components/Properties/Properties"

function App() {
  return (
    <div>
      <div className="bg-red-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Search</span>
      </div>
      {/* <Header/> */}
      {/* <MessagesButton/> */}
      <Properties/>
    </div>
  );
}

export default App;
