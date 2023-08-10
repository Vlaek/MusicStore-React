import About from "../pages/About";
import Index from "../pages/Index";
import Contacts from "../pages/Contacts";

export const routes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/', element: <Index/>, exact: true},
    {path: '/contacts', element: <Contacts/>, exact: true},
]

// export const publicRoutes = [
//     {path: '/login', element: <Login/>, exact: true}
// ]