import Navbar from "./components/Navbar";
import Welcom from "./components/Welcom";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="wrapper">
                <Welcom></Welcom>
              </div>
            }
          ></Route>
          <Route path="/blogs" element={<AllBlogs></AllBlogs>}></Route>
          <Route path="/add" element={<AddBlog></AddBlog>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
