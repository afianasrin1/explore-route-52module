import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Posts from "./Components/Posts/Posts";
import Main from "./Layout/Main";
import Friends from "./Components/Friends/Friends";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/home", element: <Home /> },

        {
          path: "/posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },

          element: <Posts />,
        },
        {
          path: "/post/:postId",
          loader: async ({ params }) => {
            // console.log(params.postId)
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails />,
        },

        {
          path: "/friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends />,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            // console.log(params.friendId)
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails />,
        },
      ],
    },

    { path: "/about", element: <About /> },
    { path: "*", element: <div>This route not found /404</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
//   // eita routes folder create kore kora  kaj

//   return (
//     <div className="App">
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }

export default App;
