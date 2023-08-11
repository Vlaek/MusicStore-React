import About from "../pages/About";
import Index from "../pages/Index";
import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";

export const routes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/', element: <Index/>, exact: true},
    {path: '/contacts', element: <Contacts/>, exact: true},
    {path: '/profile', element: <Profile/>, exact: true},
]

// export const publicRoutes = [
//     {path: '/login', element: <Login/>, exact: true}
// ]