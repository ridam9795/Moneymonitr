import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import TotalSpendings from "./Components/TotalSpendings";
import TrackList from "./Components/TrackList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TrackList name="Expense" />}></Route>
        <Route
          path="/investment"
          element={<TrackList name="Investment" />}
        ></Route>
        <Route path="/bills" element={<TrackList name="Bill" />}></Route>
        <Route path="/emi" element={<TrackList name="EMI" />}></Route>
        <Route path="/totalSpendings" element={<TotalSpendings />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
