import { Login } from '../components'
// import { withAuthentication } from '../utils/enhancers'
import Numi from '../components/numi/Numi'

const routes = [
  {
    path: '/',
    // component: withAuthentication(Numi),
    component: Numi,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
]

export default routes
