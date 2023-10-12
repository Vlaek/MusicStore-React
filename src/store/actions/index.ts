import * as ItemActionCreators from './itemActions'
import * as filterActionCreators from './filterActions'
import * as authActionCreators from './authActions'
import * as orderActionCreators from './orderActions'

export default {
	...ItemActionCreators,
	...filterActionCreators,
	...authActionCreators,
	...orderActionCreators,
}
