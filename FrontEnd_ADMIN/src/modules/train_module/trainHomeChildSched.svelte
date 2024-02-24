<script>
	import { routes } from './../../routes.ts';

    import { Alert, Button, ButtonGroup, Select } from "flowbite-svelte"

    import { AdjustmentsVerticalOutline } from "flowbite-svelte-icons";

    import { AccordionItem, Accordion, Avatar, Badge, Card, Modal, Timeline, TimelineItem} from 'flowbite-svelte';
    import {Input, Label} from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';

    import { trainlines } from "../../data/train_details";
    import { intersection } from 'zod';
    import { onMount, onDestroy } from 'svelte';
    import { readable, writable } from 'svelte/store';
    import {fade} from 'svelte/transition';



    let showToast = false ;

    // Function to show the toast
    // function showToastMessage(message) {
    //   showToast.set(true);
    //   setTimeout(() => showToast.set(false), 3000); // Hide toast after 3 seconds
    // }

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


      //schedule adding
      let add_sched = false;
      let schedularModal = false;
      let iter,interval ;
      let trainRoutes = [
        {
          "start": "Rajshahi",
          "departure_time": "10:00:00",
          "cost_class": [
            100,
            200,
            350,
            375
          ]
        },
        {
          "start": "NarayanGanj",
          "departure_time": "11:00:00",
          "cost_class": [
            120,
            220,
            370,
            400
          ]
        },
        {
          "start": "NarayanGanj",
          "departure_time": "11:00:00",
          "cost_class": [
            120,
            220,
            370,
            400
          ]
        }
      ];
      //make a get req to get route from server
      let trainstationList = trainRoutes.map(f=>f.start);
      let schedInfo ;
      function init() {
        //init it to size of trainRoutes
        schedInfo = trainRoutes.map(f=>{
          return {
            date: null,
            departure_time: null
          }
        });
      }
      init() ;

      function doSchedule(){
        //ekhane post request create korbe
        let newRoutesSched = trainRoutes.map((f,idx)=>{
          return {
            ...f,
            date: new Date(schedInfo[idx].date),
            departure_time: schedInfo[idx].departure_time
          }
        });
        console.log(newRoutesSched);
      }

      function updateDates(interval) {
        //update the date by setDate of schedInfo
        schedInfo = schedInfo.map(f=>{
          let date = new Date(f.date);
          date.setDate(date.getDate() + interval);
          return {
            ...f,
            date: date,
          }
        });
        console.log(schedInfo)
      }

      function schedular(itr,interval) {
          if(schedInfo.some(f=>f.date === null || f.departure_time === null)){
            //show a alert message
            showToast = true ;
            return;
          }
          //call the doSchedule at every interval looping itr number
          doSchedule() 
          for (let i = 0; i < itr-1; i++) {
              updateDates(interval);
              doSchedule()
          }
          add_sched = false;

      }



</script>

<div class="max-w-2xl w-fit space-y-5">

    

    {#if window.sessionStorage.username === undefined} 

    

        <Alert>

            <span class="font-medium">Sorry!</span>
            You have to sign in first 

        </Alert>

    {:else }

    <h1 class = "font-bold text-center " > { train } </h1>
      <Card style="background-color:#ffffee" class = "shadow-lg flex-justify-content dark:md hover:rounded cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-shadow motion-reduce:hover:transform-none ..." size = "sm"
      on:click={()=>add_sched = true}>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clip-rule="evenodd"/>
            </svg>
            <h3 class= "text-left flex-justify-content">
                <b>Add Schedule</b>                
      </Card>
      {#if add_sched}
      <!-- <Card class="w-full"> -->
      <!-- <div class = "w-full mt-8 left-1/4 absolute h-fit"> -->
        <Card class="addsched shadow-lg" size="md" style="background-color:#ffffee">

        <h2 class = "font-bold text-left mb-8 font-serif" > Route-1 </h2>
            <Timeline order="vertical" class = "border-rose-600 font-bold event fade-in">

                { #each trainstationList as stoppage,idx }
                <div class="flex-justify-content grid grid-cols-3 space-x-px">

                    <TimelineItem title={ stoppage } date="">
                        <svelte:fragment slot="icon">
                        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-50 rounded-full ring-8 ring-blue-50">
                            <i class="fa-solid fa-map-marker-alt w-3 h-3 text-green-600 dark:text-green-400" ></i>
                        </span>
                        </svelte:fragment>
                        <p class=" text-base font-bold text-gray-500 dark:text-gray-400"> &nbsp; </p>                        
                        
                    </TimelineItem>
                    <div class="flex flex-col space-y-4">
                      <Input type="date" bind:value={schedInfo[idx].date} id="date"  required />
                    </div>
                    <div class="flex flex-col space-y-4">
                      <Input type="time" bind:value={schedInfo[idx].departure_time} id="time"  required />
                    </div>
                </div>
                { /each }

            </Timeline>
            <div class="flex-justify-content grid-cols-2">
              <ButtonGroup class="w-16 space-x-px">
                <Button pill color="purple"class="hover:bg-blue-500" on:click={()=>schedularModal = true}>Schedular</Button>
                <Button pill color="purple" class="hover:bg-green-500" on:click={()=>schedular(1,1)}>Submit</Button>
                <Button pill color="purple" class="hover:bg-red-500" on:click={()=>add_sched=false}>Cancel</Button>
              </ButtonGroup>
              <!-- <div>
                <Button class="mx-96 bg-blue-500 hover:bg-blue-700 rounded-lg" 

              </div>
              <div> 
                <Button class="mx-96 bg-green-500 hover:bg-green-700 rounded-lg" </Button>
              </div>
              <div> 
                <Button class="mx-96 bg-red-500 hover:bg-red-700 rounded-lg" on:click={()=>add_sched=false}>Cancel</Button>
              </div> -->
            </div>

        </Card>
        

      <!-- </div> -->
<!-- 
    <div class = "w-full mt-8 left-2/3 absolute h-fit"> -->

        <!-- <Card style="background-color:#ffffee" class="w-full mt-8 left-2/3 absolute h-fit">

            <h2 class = "font-bold text-left mb-8 font-serif" > Route-2 </h2>


            <Timeline order="vertical" class = "border-rose-600 font-bold">

                { #each trainstationList.slice().reverse() as stoppage }
                  {#if stoppage}

                    <TimelineItem title={ stoppage} date="">
                        <svelte:fragment slot="icon">
                        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-50 rounded-full ring-8 ring-blue-50">
                        
                            <i class="fa-solid fa-map-marker-alt w-3 h-3 text-green-600 dark:text-green-400" ></i>
    
                        </span>
                        </svelte:fragment>
                        <p class=" text-base font-bold text-gray-500 dark:text-gray-400"> &nbsp; </p>
                    </TimelineItem>
                  {/if}
                { /each }

            </Timeline>

        </Card> -->

    

      <!-- </div> -->
    <!-- </Card> -->
    <!-- make an else block -->
    <!-- {:else} -->
    {/if}

        

      <!-- <Accordion> -->
        

        { #each trainlines as trainline }
            <Card horizontal style="background-color:#ffffee" size = "xl" class = "rounded-lg w-fit relative cursor-pointer" padding = "md" on:click = { () => showModal(trainline)}>

              <div class = " border-r border-gray-400 justify-center w-28 relative my-2">
                <Avatar size="md" src = { trainline.logo } class = "ml-8"/>
                <Badge rounded class="bg-gray-200 mt-4 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative border-black" border>{ trainline.train_uid }</Badge>
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
      <!-- {/if} -->
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

<Modal title="Routine Schedular" bind:open={schedularModal} autoclose={false} size="sm">
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-4">
      <Label for="schedule" class="mb-2">Number of Schedule</Label>
      <Input type="number" bind:value={iter} id="schedule" placeholder="Enter NUmber of SChedule" required />
    </div>
    <div class="flex flex-col space-y-4">
      <Label for="interval" class="mb-2">Interval</Label>
      <Input type="number" bind:value={interval} id="interval" placeholder="Enter interval" required />
    </div>
  </div>
  <div class="flex-justify-content">
    <Button class="mx-96 bg-blue-500 hover:bg-blue-700 rounded-lg" on:click={()=>schedular(iter,interval)}>Submit</Button>
  </div>
</Modal>

