import { writable } from 'svelte/store';

// export const storecardstatus = writable(false);
// export const storestringcard = writable("This is nothing");

export const storecardtitle = writable("No title");
export const storecardcontent = writable("No content");

// -------  Store username until logout --------

//export const storeusername = writable("");

// -------- Store plane journey detail --------

export const storeSource = writable("Not yet");
export const storeDest = writable("Not yet");

export const storeSeatNumber = writable(0);
export const storePlaneClass = writable("Not yet");
export const storeJourneyDate = writable( new Date().toLocaleDateString(undefined, { day: 'numeric' , month : 'numeric' , year : 'numeric'}).split('/').join('-') );

export const storeAirline = writable([]);
export const lowerMoneyLimit = writable(0);

export const upperMoneyLimit = writable(1000);




