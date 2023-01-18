import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { postsRef } from '../firebase';
import { Link } from 'react-router-dom';
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(postsRef, (docsSnapshot) => {
      const posts = docsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setPosts(posts);
    });
  }, []);
  return (
    <div className="home">
      <h1>Tech Blog</h1>

      <div id="blog-by">
        Nikita
        {posts.map((post, index) => (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
