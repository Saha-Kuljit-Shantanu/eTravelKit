<script>

    import { Alert, Button, ButtonGroup } from "flowbite-svelte"

    import { AdjustmentsVerticalOutline } from "flowbite-svelte-icons";

    import { AccordionItem, Accordion, Avatar, Badge, Card, Modal, Timeline, TimelineItem } from 'flowbite-svelte';

    import { trainlines } from "../../data/train_details";

    let train = window.sessionStorage.getItem("selected")

    let modalRoute = {}, color, openRouteViewModal = false , size = 'sm';

    async function showModal(train){

      

      //   let jsonData = {
      // //mail,pass,phone,nid
        
      //     "train_uid" : station.train_uid,
      //     "schedule_id" : station.schedule_id,
          
        

      //   };

      //   const formData = JSON.stringify(jsonData);

      //   const response = await getTrainRoute( formData );

      //   modalRoute = await response.json()

      //   modalRoute = modalRoute[0]

        modalRoute = train

        console.log(modalRoute)

        color = "blue"

        openRouteViewModal = true

        

      



        //openModal = true;

      }



</script>

<div class="max-w-2xl w-fit space-y-5" >

    

    {#if window.sessionStorage.username === undefined} 

    

        <Alert>

            <span class="font-medium">Sorry!</span>
            You have to sign in first 

        </Alert>

    {:else }

    <h1 class = "font-bold text-center " > { train } </h1>

        

      <!-- <Accordion> -->

        { #each trainlines as trainline }

           <!-- <AccordionItem class= "w-fit md:w-full">

            <span slot="header" class = " md:flex items-center font-serif font-bold " >

              <span class="flex-1 text-center">{ history.flight }</span>
              <div class="md:flex-1 h-0 md:w-24 border-b border-black"></div>
              <span class="flex-1 text-center">{ history.from_Port }</span>
              <div class="md:flex-1 lg:flex-2 h-0 md:w-24 lg:w-48 border-b border-black"></div>
              <span class="flex-1 text-center">{ history.to_Port }</span>
              <div class="md:flex-1 h-0 md:w-24 lg:w-24 border-b border-black"></div>
              <span class="flex-2 text-center">{ history.departure_date }</span>

            </span>
            <div slot="arrowup">
              <i class="fa-solid fa-caret-up h-3 w-3 -me-2"></i>
            </div>
            <span slot="arrowdown">
              <i class="fa-solid fa-caret-down h-3 w-3 -me-2"></i>
            </span> -->

            <Card horizontal size = "xl" class = "bg-gray-200 w-fit relative cursor-pointer" padding = "md" on:click = { () => showModal(trainline)}>

              <div class = " border-r border-gray-400 justify-center w-28 relative my-2">
                <Avatar size="md" src = { trainline.logo } class = "ml-8"/>
                <Badge color="yellow" class="mt-4 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative">{ trainline.train_uid }</Badge>
              </div>

             

              <div class = "justify-center w-24 relative my-auto">
                <p class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative">{ trainline.routes[0].start }</p>
                <Badge color="red" class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ trainline.routes[0].departure_time  }</Badge>
                <p class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ new Date(trainline.departure_date).toLocaleDateString() }</p>
              </div>

              <div class = "my-auto relative w-72 " >

              <Timeline order="horizontal" >

                  <TimelineItem title="routes" date="" >
    
                    <svelte:fragment slot="icon">
                      <div class="flex items-center">
                        <!-- <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <DotsVerticalOutline class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                        </div> -->
                        <div class="hidden sm:flex w-60 ml-6 bg-rose-600 h-0.5 dark:bg-gray-700" />
                      </div>
                    </svelte:fragment>
                    
    
                  </TimelineItem>

                

             
                    <!-- <TimelineItem title={ pullString(trainline.transits) } date="" >

                    

                    
    
                      <svelte:fragment slot="icon">
                        <div class="flex items-center">
                           <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <DotsVerticalOutline class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                          </div> 
                          <div class="hidden sm:flex w-80 ml-6 bg-rose-600 h-0.5 dark:bg-gray-700" />
                        </div>
                      </svelte:fragment>
                      
      
                    

                    

                    </TimelineItem> -->

                   

                  

                
  
              </Timeline>

              </div>
              

              <div class = " justify-center w-24 relative my-auto ">
                <p class="mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative">{ trainline.routes[trainline.routes.length-1].start }</p>
                <Badge color="green" class="mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold ">{ trainline.routes[trainline.routes.length-1].departure_time }</Badge>
                <p class="mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ new Date(trainline.arrival_date).toLocaleDateString() }</p>
              </div>

            

              <div class = " justify-center w-24 relative my-auto">
                
                <p class="mt-1/2 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ trainline.duration_hour } h { trainline.duration_minutes} m</p>
              </div>

            


              
            </Card>

            
            
          <!-- </AccordionItem> -->

        {/each}
      <!-- </Accordion> -->
          
       

    {/if}

    

    

</div>

<Modal title= { modalRoute.train_uid } bind:open={ openRouteViewModal } { size } { color } autoclose>
  <Timeline order="vertical" class = "border-rose-600 font-bold">
    <TimelineItem title={ modalRoute.routes[0].start } date={  new Date(  modalRoute.routes[0].date ).toLocaleDateString()  }>
      <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
          
          <i class="fa-solid fa-train w-3 h-3 text-primary-600 dark:text-primary-400" ></i>

        </span>
      </svelte:fragment>
      <p class=" text-base font-bold text-gray-500 dark:text-gray-400">{ modalRoute.routes[0].departure_time }</p>
      <!-- <p class=" text-base font-bold font-serif text-gray-500 dark:text-gray-400">{ modalRoute.flight_id }</p> -->
      
    </TimelineItem>

    { #if modalRoute.routes.length != 0 }

      { #each modalRoute.routes as route,index }

        {#if index != 0 && index != modalRoute.routes.length-1 }

          <TimelineItem title={ route.start } date={ new Date(route.date).toLocaleDateString() }>
            <svelte:fragment slot="icon">
              <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-50 rounded-full ring-8 ring-blue-50">
            
                <i class="fa-solid fa-map-marker-alt w-3 h-3 text-green-600 dark:text-green-400" ></i>

              </span>
            </svelte:fragment>
            <p class=" text-base font-bold text-gray-500 dark:text-gray-400"> { route.departure_time } </p>
            <!-- <p class=" text-base font-bold font-serif text-gray-500 dark:text-gray-400"> { transit.flight_id } </p> -->
            
          </TimelineItem>

        {/if }

      { /each }

    {/if}
    

    <TimelineItem title={ modalRoute.routes[modalRoute.routes.length-1].start } date={ new Date(modalRoute.routes[modalRoute.routes.length-1].date).toLocaleDateString() }>
      <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        
          <i class="fa-solid fa-train w-3 h-3 text-primary-600 dark:text-primary-400" ></i>
        
        </span>
      </svelte:fragment>
      <p class="text-base font-bond text-gray-500 dark:text-gray-400"> { modalRoute.routes[modalRoute.routes.length-1].departure_time } </p>
    </TimelineItem>

  </Timeline>
</Modal>

