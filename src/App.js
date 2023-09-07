import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./views/header-view";
import MainView from "./views/main-view";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about-page";
import Contact from "./components/contact-page";
import Error from "./components/error-page";
import RestaurantMenu from "./components/restaurant-menu";

/**
 * <Outlet /> is a function provided by react-router, in which the
 * component(<Outlet />) gets replaced by the children of the parent route,
 * according to the concerned routes. For e.g.,
 * when the route will be '/', Outlet => MainView
 * when the route will be '/about', Outlet => About
 * when the route will be '/contact', Outlet => Contact
 */

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

/**
 * There is a concept of children routes, suppose as here, we want our other components
 * to load as a child of <AppLayout />, then, children routes concept is used
 * Here, we can see, our <Header /> will be intact and the children component will load according
 * to the routes.
 *
 * This is achieved by a property of React-router 'Outlet' explained above.
 */

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <MainView />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
