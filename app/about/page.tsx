import Link from 'next/link';
import React from 'react';

const About = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return (
    <div>
      <Link href="/about/another-about">Go to another about</Link> I am the
      About page
      {users.map((user) => (
        <div key={user.id}>Hello</div>
      ))}
    </div>
  );
};
export default About;
