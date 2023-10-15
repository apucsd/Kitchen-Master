import React, { useRef } from "react";

const Blog = () => {
  const ref = useRef();
  return (
    <div className="text-center my-12 mx-4">
      <div className="md:w-1/2 mx-auto" ref={ref}>
        <div className="shadow-lg p-4 my-4 border-t">
          <h1 className="font-semibold">
            Tell us the differences between uncontrolled and controlled
            components
          </h1>
          <p>
            In uncontrolled component, React does not manage forms every values
            state, In uncontrolled don't have to write event handlers for every
            form input.
            <br />A controlled component, React manages the state of the form
            element. In a controlled component, you typically have to write an
            event handler for every form input.
          </p>
        </div>
        <div className="shadow-lg p-4 my-4 border-t">
          <h1 className="font-semibold">
            How to validate React props using PropTypes?
          </h1>
          <p>
            PropTypes is a library that allows you to define and validate the
            props of a React component. It's a built-in feature of React, and it
            helps to catch errors
          </p>
        </div>
        <div className="shadow-lg p-4 my-4 border-t">
          <h1 className="font-semibold">
            Tell us the difference between nodejs and express js?
          </h1>
          <p>
            Node.js is a server-side JavaScript runtime environment that allows
            developers to build scalable, high-performance applications using
            JavaScript.On the other hand Express js is framework build using
            nodeJs. Node.js provides a platform for executing JavaScript code on
            the server-side, while Express.js provides a set of tools and
            features .
          </p>
        </div>
        <div className="shadow-lg p-4 my-4 border-t">
          <h1 className="font-semibold">
            What is a custom hook, and why will you create a custom hook??
          </h1>
          <p>
            Custom hooks are function that are created by developer when he/she
            need to reusable some logic or components. Custom hooks is create
            using react build in hooks like useState useEffect useLocation
            useNavigate etc. I will create custom hook when i need to use same
            code in multiple components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
