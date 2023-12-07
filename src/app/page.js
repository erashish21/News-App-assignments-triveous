"use client";
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My News App</h1>
      <p>Please register or log in to access personalized content.</p>
      <Link href="/registration">Register</Link>
    </div>
  );
};

export default HomePage;
