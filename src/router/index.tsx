import About from '../pages/About'
import Index from '../pages/Index'
import Contacts from '../pages/Contacts'
import Profile from '../pages/Profile'

export const routes = [
	{ path: '/MusicStore-React/about', element: <About />, exact: true },
	{ path: '/MusicStore-React/', element: <Index />, exact: true },
	{ path: '/MusicStore-React/contacts', element: <Contacts />, exact: true },
	{ path: '/MusicStore-React/profile', element: <Profile />, exact: true },
]
