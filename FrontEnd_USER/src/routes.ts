
import homeHome from "./assets/homeHome.svelte"
import airplaneHome from "./assets/airplaneHome.svelte"
import trainHome from "./assets/trainHome.svelte"
import login from "./modules/auth_module/login.svelte"
import signupform from "./modules/auth_module/signupform.svelte"
import profile from "./modules/flight_module/airplaneSeating.svelte"
import airplaneQuery from "./modules/flight_module/airplaneQuery.svelte"
import trainQuery from "./modules/train_module/trainQuery.svelte"
import airplaneSeating from "./modules/flight_module/airplaneSeating.svelte"
import trainSeating from "./modules/train_module/trainSeating.svelte"
import ticketHistory from "./modules/ticket_history/ticket_history_home.svelte"
import airplanePassengers from "./modules/flight_module/airplanePassengers.svelte"

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

    '/train/:source/:dest/:seatNumber/:seatClass/:selectedDate?' : trainQuery,

    '/airplane' : airplaneHome,

    '/train' : trainHome,

    '/airplane/:source/:dest/:seatNumber/:seatClass/:selectedDate?/:flight_id' : airplaneSeating,

    '/train/:source/:dest/:seatNumber/:seatClass/:selectedDate?/:train_uid' : trainSeating,

    '/airplane/:username/:source/:dest/:seatNumber/:seatClass/:selectedDate?/:flight_id/bookseat' : airplanePassengers,

    '/history/:username' : ticketHistory,

    

    

}