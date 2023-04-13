import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePage from '../pages/Home'
import Layout from './Layout'

export default createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />
			}
		]
	},
	{
		path: '*',
		element: <Navigate to='/' replace />
	}
])
