import Login from './../views/Login';
import Dashboard from '@/../views/Dashboard'
const routes = [
    {
        path: '/', 
        name: 'Dashboard',
        meta: { requiredAuth: true },
        title: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/login', 
        name: 'Login',
        meta: { requiredAuth: false },
        title: 'Login',
        component: Login,
    }
]

export default routes;