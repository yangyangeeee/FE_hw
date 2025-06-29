// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<PostViewPage />} />
        <Route path="/write" element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
