
import homeHome from "./assets/homeHome.svelte"

import trainHomeRoute from "./assets/train/trainHomeRoute.svelte"

import trainHomeSched from "./assets/train/trainHomeSched.svelte"

import trainHomeCoach from "./assets/train/trainHomeCoach.svelte"
import trainHomeConfig from './assets/train/trainHomeConfig.svelte'

// import trainHomeConfig from "./assets/train/trainHomeConfig.svelte"

import login from "./modules/auth_module/login.svelte"
import signupform from "./modules/auth_module/signupform.svelte"


// let username = ''

// export function getUsername(sent_username: string): void {
    
//     console.log(`Received username: ${sent_username}`);

//     username = sent_username
    
//     // username = '/' + username
    
// }

// console.log(username)

export const routes = {

    '/home/:username' : homeHome,

    '/home/:username/:train/route' : trainHomeRoute,

    '/home/:username/:train/sched' : trainHomeSched,

    '/home/:username/:train/coach' : trainHomeCoach,
    '/home/:username/:train/config' : trainHomeConfig,
    
    '/signup' : signupform,

    '/' : login,

    

    

    

}