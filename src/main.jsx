import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "./index.css"
import Books, {loader as booksLoader} from "./routes/books";
import Authors, {loader as authorsLoader} from "./routes/authors";
import AdminProfile from "./routes/adminProfile";
import Home from "./routes/home";
import UpdateBook from "./routes/updateBook";
import UpdateAuthor from "./routes/updateAuthor";
import AddBook from "./routes/addBook";
import AddAuthor from "./routes/addAuthor";
import Login from "./routes/login";
import Users, {loader as usersLoader} from "./routes/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement : <ErrorPage />
      },
      {
        path: "/books",
        element: <Books />,
        errorElement : <ErrorPage />,
        loader : booksLoader,
      },
      {
        path: "/books/addBook",
        element: <AddBook />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/books/updateBook/:id",
        element: <UpdateBook />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/authors",
        element: <Authors />,
        errorElement : <ErrorPage />,
        loader : authorsLoader
      },
      {
        path: "/authors/addAuthor",
        element: <AddAuthor />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/authors/updateAuthor/:id",
        element: <UpdateAuthor />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/users",
        element: <Users />,
        errorElement : <ErrorPage />,
        loader : usersLoader
      },
      {
        path: "/profile",
        element: <AdminProfile />,
        errorElement : <ErrorPage />
      },
    ],
  },
  {
    path: "/admin/login",
    element: <Login />,
    errorElement : <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);