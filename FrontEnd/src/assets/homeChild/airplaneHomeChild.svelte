<script>



import Endpoints from "../content/endpoints.svelte"
import Otherflightparams from "../content/otherflightparams.svelte";

import { storeSource, storeDest, storeSeatNumber, storePlaneClass, storeJourneyDate } from "../../store/store"


import { push } from 'svelte-spa-router'


import { Button } from 'flowbite-svelte'


let  source, dest, seat_number, seat_class, selectedDate



async function airline_query(){

  storeSource.subscribe( val => { source = val } )

  storeDest.subscribe( val => { dest = val } )

  storeSeatNumber.subscribe( val => { seat_number = val} )

  storePlaneClass.subscribe( val => { seat_class = val } )

  storeJourneyDate.subscribe( val => { selectedDate = val } )

  push(`/airplane/${source}/${dest}/${seat_number}/${seat_class}/${selectedDate}`)

}


function validateInputs() {
    const form = document.querySelector('form');

    
      if (form.reportValidity()) {
      
        airline_query();

      }
}

</script>

<form>


<div class = "container">

    <div class = "w-full ">


      <div class="font-serif w-1/2 top-24 absolute font-bold"> <p class= "text-3xl"> Where do you want to go ?</p></div>

    
      <div class="grid gap-6 mb-6 grid-cols-2 w-1/2 top-48 absolute">

        

        <Endpoints placeholder_status = "true" />


      </div>

    
    
      <div class="grid gap-8 mb-6 grid-cols-2 top-48 w-full absolute">

        <i class="fa-solid fa-lg fa-arrow-right justify-center cursor-pointer mt-7 ml-3"></i>
    
      </div>

    </div>

    <div class = "w-full ">


      <div class="container w-1/2 top-72 absolute">

        <Otherflightparams defaultDate = { new Date() }  placeholder_status = "true" />

      </div>

      <div class="right-8 top-72 absolute">

        <Button shadow color="dark" type = "submit" border-color = "dark" class = "border-4 mt-2" on:click = { () => validateInputs() }> Search </Button>

      </div>


    </div>

      
    
    <!-- <i class="fa-solid fa-xl fa-plane-departure absolute left-3 top-1/2 cursor-pointer"></i>
          <Select items= { airports } id="src" placeholder="From" bind:value = { source } class = ""  required /> -->


</div>

    
</form>  
  