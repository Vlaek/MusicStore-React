import Index from '../pages/Index/Index'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../router'

const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} element={route.element}></Route>
			))}
			<Route path='*' element={<Index />}></Route>
		</Routes>
	)
}

export default AppRouter
