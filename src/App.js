import "./Components/css/App.css";
import Notes from "./Components/NoteComponents/Notes";
import DarkMode from "./DarkMode.js";

function App() {
  return (
    <div className="main">
      <Notes />
      <DarkMode />
    </div>
  );
}
export default App;
