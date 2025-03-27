'use client'

import Link from 'next/link';
import { fetchData } from '../api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData('posts');
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 to-white text-white p-6 mb-6">
        <h1 className="text-3xl font-bold">{currentTime}</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-xl font-bold mb-2">{post.title}</h1>
            <p className="">{post.body}</p>
            <Link className="text-blue-500 hover:underline" href={`/posts/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
