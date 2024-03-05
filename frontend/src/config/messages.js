import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    incoPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSucess',
    payload => !payload.msg ? 'Operation realizate with success!' : payload.msg,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Error, something is not right!' : payload.msg,
    { type: 'error', icon: 'times' }
)