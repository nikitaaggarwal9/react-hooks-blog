import { Link } from 'react-router-dom';

export default function Navbar() {
  return <div className="navbar">
    <ul id="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
    </ul>
  </div>;
}
