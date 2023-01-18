import { useState, useEffect } from 'react';
import { onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

import { db, postsRef } from '../firebase';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const postRef = doc(db, 'posts', postId);
    getDoc(postRef).then((post) => {
      // console.log(post.data());
      setPost(post.data());
    });
  }, []);

  return (
    <div className='post-detail'>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  );
}
