import { createBrowserRouter } from "react-router-dom";
import GameGrid from "./components/GameGrid";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'games/:id', element: <GameDetailPage /> }
        ]
    }
])

export default routes