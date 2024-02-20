
import homeHome from "./assets/homeHome.svelte"

import trainHomeRoute from "./assets/trainHomeRoute.svelte"

import trainHomeSched from "./assets/trainHomeSched.svelte"

import trainHomeCoach from "./assets/trainHomeCoach.svelte"

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
    
    '/signup' : signupform,

    '/' : login,

    

    

    

}