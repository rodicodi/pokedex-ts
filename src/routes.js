import { createBrowserRouter } from 'react-router-dom'
import Pokedex from './Pokedex'

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Pokedex />,
	},
	{
		path: "about",
		element: <div>About</div>,
	},
]);
