import React from 'react';

const Blog = () => {
  return (
    <div className="text-3xl font-bold">
      <br />
      <h2>1. When should you used context api?</h2>
      <p>Ans: Context api used some data needs to be accessible by many components at different nesting levels.</p>
      <br />
      <h2>2. What is Custom Hook?</h2>
      <p>Ans: The custom hook is a special JavaScript function whose name starts with use and can be used to call other hooks. </p>
      <br />
      <h2>3. What is useRef?</h2>
      <p>Ans: UseRef is the built-in React hook that accepts one argument as the initial value and returns a reference.</p>
      <br />
      <h2>4. What is useMemo?</h2>
      <p>Ans: UseMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. </p>
    </div>
  );
};

export default Blog;