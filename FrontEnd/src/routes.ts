
import homeHome from "./assets/homeHome.svelte"
import airplaneHome from "./assets/airplaneHome.svelte"
import login from "./modules/auth_module/login.svelte"
import signupform from "./modules/auth_module/signupform.svelte"
import profile from "./assets/profilepage.svelte"
import airplaneQuery from "./modules/flight_module/airplaneQuery.svelte"
import grid from "./assets/grid.svelte"

// let username = ''

// export function getUsername(sent_username: string): void {
    
//     console.log(`Received username: ${sent_username}`);

//     username = sent_username
    
//     // username = '/' + username
    
// }

// console.log(username)

export const routes = {

    
    '/' : homeHome,

    '/home' : homeHome,

    '/home/:username' : homeHome,
    
    '/signup' : signupform,

    '/login' : login,

    '/profile' : profile,

    '/airplane/:source/:dest/:seatNumber/:seatClass/:selectedDate?' : airplaneQuery,

    '/airplane' : airplaneHome,

    '/airplane/:source/:dest/:seatNumber/:seatClass/:selectedDate?/:flight_id' : grid,

    

}