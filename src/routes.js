import Layout2 from '../src/pages/Layout2/Layout2'
import Login from '../src/component/Login'
import SignUp from '../src/component/SignUp'
import ForgotPassword from '../src/component/ForgotPassword'

const routes = [
  {path: '/Layout2', component: Layout2},
  {path: '/Login', component: Login},
  {path: '/SignUp', component: SignUp},
  {path: '/ForgotPassword', component: ForgotPassword},
  {path: '/', component: Layout2},
]

export default routes
