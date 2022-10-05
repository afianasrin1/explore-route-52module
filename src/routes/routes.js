import { createBrowserRouter } from "react-router-dom";
import Countries from "../Components/Countries/Countries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
]);
