import { Routes, Route } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './index'; // !! not working !!
import Navbar from './Navbar';
import PostDetail from './PostDetail';
import Home from './Home';
import CreatePost from './CreatePost';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/post" element={<PostDetail />} />
          <Route exact path="/create-post" element={<CreatePost/>} />
        </Routes>
      </div>
  );
}

export default App;
