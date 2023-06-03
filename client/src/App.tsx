import React from "react";
import "./index.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useNavigate,
	useLocation,
	Navigate,
} from "react-router-dom";
import Test from "./Test";
import Home from "./Pages/Home";
import Charts from "./Pages/Charts";
import News from "./Pages/News";
import Schedule from "./Pages/Schedule";
import MostView from "./Pages/MostView";
import FastNews from "./Pages/FastNews";
import Error from "./Pages/Error";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Create from "./components/Create";
import CreateNews from "./Pages/CreateNews";
import CreateFastNews from "./Pages/CreateFastNews";
function PrivateRoute({
	children,
	...rest
}: {
	children: React.ReactNode;
	[x: string]: any;
}): JSX.Element {
	const isLoggedIn = true;

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}

	return children as JSX.Element;
}
function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const isLoggedIn: boolean = false;
	if (!isLoggedIn && location.pathname === "/create") {
		navigate("/login");
		console.log("flase");
	}
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/charts" element={<Charts />} />
			<Route path="/news" element={<News />} />
			<Route path="/detail/:id" element={<Detail />} />
			<Route path="/schedule" element={<Schedule />} />
			<Route path="/mostview" element={<MostView />} />
			<Route path="/fastnews" element={<FastNews />} />
			<Route path="/login" element={<Login />} />
			<Route
				path="/create"
				element={
					<PrivateRoute>
						<Create />
					</PrivateRoute>
				}
			/>
			<Route path="/createNews" element={<CreateNews />} />
			<Route path="/createFastNews" element={<CreateFastNews />} />

			<Route path="/test" element={<Test />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
