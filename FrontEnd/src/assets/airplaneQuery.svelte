<script>

    import Homenavigation from "./navigation/homenavigation.svelte";


    import Endpoints from "./content/endpoints.svelte";

    import Otherflightparams from "./content/otherflightparams.svelte";

    import Sortsidebar from "./sidebar/sortsidebar.svelte";

    import { Button, Avatar,Timeline, TimelineItem, ButtonGroup,Badge } from "flowbite-svelte";

    import { AdjustmentsVerticalOutline, DollarSolid, DotsHorizontalOutline, DotsVerticalOutline } from "flowbite-svelte-icons";

    // import { air_line } from "../data/airline_query"

  
    
    //for query in backend
    let query = '' ;

    let lastFiveValues = []

    const url = new URL(window.location.href)

    const pathsegments = url.hash.split('/').filter(Boolean)

    console.log(pathsegments)

    lastFiveValues = pathsegments.slice(-5)

    console.log(lastFiveValues)

    


    console.log( url, url.pathname, pathsegments, lastFiveValues )

    import { Card } from 'flowbite-svelte';
    import { onMount } from "svelte";
    import { storeAirline } from "../store/store"

    import { push } from 'svelte-spa-router'

    let air_line = [], status = 0

    storeAirline.subscribe( line => { air_line = line} )

    async function todo(){

      lastFiveValues[4] = "2024-1-29"

      const response = await fetch(`http://localhost:3001/user/air/${lastFiveValues[0]}/${lastFiveValues[1]}/${lastFiveValues[4]}/person=${lastFiveValues[2]}/${lastFiveValues[3]}?${query}`)
      if (!response.ok) {
        status = response.status;
      }

      else air_line = await response.json();
    console.log(air_line);

    console.log(status)

    }
    // todo();

    onMount( async() => {

      todo()

    })

   

    async function Quickest(){
      query = 'q=quickest'
      todo()

    }

    async function Cheapest(){
      query = 'q=cheapest'
      todo()

    }

    async function Earliest(){
      query = 'q=early_takeoff'
      todo()

    }

    async function unsort(){
      query = ''
      todo()

    }

    import { storeSource, storeDest, storeSeatNumber, storePlaneClass, storeJourneyDate } from "../store/store"

    let source =  lastFiveValues[0], dest = lastFiveValues[1], seat_number= parseInt(lastFiveValues[2],10), seat_class= lastFiveValues[3], selectedDate= lastFiveValues[4]


    async function search(){


      storeSource.subscribe( val => { if(val != "Not yet" ) source = val } )

      storeDest.subscribe( val => { if(val != "Not yet" ) dest = val } )

      storeSeatNumber.subscribe( val => { if(val != 0 ) seat_number = val} )

      storePlaneClass.subscribe( val => { if(val != "Not yet" ) seat_class = val } )

      storeJourneyDate.subscribe( val => { selectedDate = val } )

      lastFiveValues = [ source, dest, seat_number,seat_class,new Date('2024-01-30') ]

      push(`/airplane/${source}/${dest}/${seat_number}/${seat_class}/${selectedDate}`)

      todo()

      
      
    }

    async function showGrid(flight_id){

      // /seat_details/${source}/${dest}/${seat_number}/${seat_class}/${selectedDate}/${flight_id}



      push(`/airplane/${source}/${dest}/${seat_number}/${seat_class}/${selectedDate}/${flight_id}`)




    }



    
</script>

<div class = "flex flex-col w-screen h-screen fixed overflow-y-hidden overflow-x-hidden fixed">
  
    <div class = "basis-1/3 bg-yellow-300 w-full h-1/5 top-0 left-0 fixed " >
      
     
      <div class = "flex flex-row w-screen h-screen ">
  
        <Homenavigation />
  
  
      </div>
      
    
    </div>


    <div class = "basis-1/3 bg-blue-800 w-full h-1/5 top-36 left-0 space-y-12 fixed">

        <form>


            
            
                <div class = "w-full ">
            
            
                  
                
                  <div class="grid gap-6 mb-6 grid-cols-2 w-1/2 top-4 left-1/4 absolute">
            
                    
            
                    <Endpoints placeholder_status = "false"/>
            
            
                  </div>
            
                
                
                  <div class="grid gap-8 mb-6 grid-cols-2 top-4 w-full left-1/4 absolute">
            
                    <i class="fa-solid fa-lg fa-arrow-right justify-center cursor-pointer mt-7 ml-3 text-gray-200" ></i>
                
                  </div>
            
                </div>
            
                <div class = "w-full ">
            
            
                  <div class="container w-1/2 top-20 left-1/4 absolute">
            
                    <Otherflightparams defaultDate = { lastFiveValues[4] } placeholder_status = "false"/>
            
                  </div>
            
                  <div class="right-8 top-20 absolute">
            
                    <Button shadow color="dark" type = "submit" border-color = "dark" class = "border-4 mt-2" on:click = { () => search() }> Search </Button>
            
                  </div>
            
            
                </div>
            
                  
                
                <!-- <i class="fa-solid fa-xl fa-plane-departure absolute left-3 top-1/2 cursor-pointer"></i>
                      <Select items= { airports } id="src" placeholder="From" bind:value = { source } class = ""  required /> -->
            
            
            
            
                
            </form>  
    
    </div>


    <div class = "basis-1/3 w-full h-3/5 top-80 left-0 fixed overflow-y-scroll overflow-x-hidden"> 

      <div class="flex flex-row w-full ">
  
        <div class = "basis-1/5 h-full fixed top-72 mb-2 " > <Sortsidebar /> </div> 

        
        

        <div class = "w-screen left-96 space-y-10 absolute overflow-y-scroll ">  

          <div class="max-w-2xl w-fit " >

          <ButtonGroup >
            <Button outline color="dark" class= " rounded-l-md rounded-r-none" on:click = { () => Quickest()}>
              
              <AdjustmentsVerticalOutline class="w-3 h-3 me-2" />
              Sort by quickest flight
            </Button>
            <Button outline color="dark" class= "  rounded-none" on:click = { () => Cheapest()}>
              <DollarSolid class="w-3 h-3 me-2" />
              Sort by pricing
            </Button>
            <Button outline color="dark" class= "  rounded-none" on:click = { () => Earliest()}>
              <i class="fa-solid fa-plane-departure"></i>
              Sort by earliest takeoff
            </Button>
            <Button outline color="dark" class= " rounded-r-md rounded-l-none" on:click = { () => unsort()}>
              <!-- <i class="fa-solid fa-plane-departure"></i> -->
              Unsort
            </Button>
          </ButtonGroup>

          </div>

          {#if status === 404} <p> No flights match your search </p>

          {:else}


          {#each air_line as airline}
  
          
          <!-- -->
          <div class="max-w-2xl" >

            

            

            <Card href="/cards" horizontal size = "xl" class = "bg-gray-200 w-fit relative" padding = "md" >

              <div class = " border-r border-gray-400 justify-center w-28 relative my-2">
                <Avatar size="md" src = { airline.logo } class = "ml-8"/>
                <Badge color="yellow" class="mt-4 text-sm w-18 tracking-tight text-gray-900 dark:text-white relative">{ airline.air_company_name }</Badge>
              </div>

             

              <div class = "justify-center w-24 relative my-auto">
                <p class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative">{ airline.from_Port }</p>
                <Badge color="red" class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ airline.departure_time }</Badge>
                <p class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ airline.departure_date }</p>
              </div>

              <div class = "my-auto relative w-96">

              <Timeline order="horizontal" >
                <TimelineItem title="direct" date="" >
  
                  <svelte:fragment slot="icon">
                    <div class="flex items-center">
                      <!-- <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <DotsVerticalOutline class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                      </div> -->
                      <div class="hidden sm:flex w-80 ml-6 bg-rose-600 h-0.5 dark:bg-gray-700" />
                    </div>
                  </svelte:fragment>
                  
  
                </TimelineItem>

  
              </Timeline>

              </div>
              

              <div class = " justify-center w-24 relative my-auto">
                <p class="mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative">{ airline.to_Port }</p>
                <Badge color="green" class="mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold ">{ airline.arrival_time }</Badge>
                <p class="mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ airline.arrival_date }</p>
              </div>

            

              <div class = " border-r border-gray-400 justify-center w-24 relative my-auto">
                
                <p class="mt-1/2 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ airline.duration_hour } h { airline.duration_minutes} m</p>
              </div>

              <div class = " border-l border-gray-800 justify-center w-24 relative my-2">
                
                <Badge color="yellow" class="mt-1/2 text-md w-24 tracking-tight text-gray-900 dark:text-white relative mb-4">Tk : { airline.cost_class }</Badge>

                <Button shadow color="dark" on:click = { () => showGrid(airline.flight_id)}> Book </Button> 
             
              </div>

            

              
            </Card>

            

          </div>

          {/each}

          {/if}
          
        <div></div>

        <div></div>

        

        
        </div>

       
    
      </div>
    
    </div>

</div>

