<script>

    import { Alert, Button, ButtonGroup } from "flowbite-svelte"

    import { AdjustmentsVerticalOutline } from "flowbite-svelte-icons";

    import { AccordionItem, Accordion, Avatar, Badge, Card, Timeline, TimelineItem } from 'flowbite-svelte';

    import { histories } from "../../data/user_ticket_history";

</script>

<div class="max-w-2xl w-fit space-y-5" >

    <ButtonGroup >
      <Button outline color="dark" class= " rounded-l-md rounded-r-none" >
        
        <i class="fa-solid fa-plane me-2"></i>
        Flight History
      </Button>
      <Button outline color="dark" class= "  rounded-none" >
        <i class="fa-solid fa-bus me-2"></i>
        Bus or Coach Ticket History
      </Button>
      <Button outline color="dark" class= "  rounded-none " >
        <i class="fa-solid fa-train me-2"></i> 
        Train Ticket History
      </Button>
      <Button outline color="dark" class= " rounded-none " >
        <i class="fa-solid fa-ship me-2"></i>
        Launch Ticket History
      </Button>
      <Button outline color="dark" class= " rounded-r-md rounded-l-none ">
              
        <AdjustmentsVerticalOutline class="w-3 h-3 me-2" />
        Show All History
      </Button>
    </ButtonGroup>

    {#if window.sessionStorage.username === undefined} 

    

        <Alert>

            <span class="font-medium">Sorry!</span>
            You have to sign in first 

        </Alert>

    {:else }

        

      <Accordion>

        { #each histories as history }

          <AccordionItem class= "w-fit md:w-full">

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
            </span>

            <Card horizontal size = "xl" class = "bg-gray-200 w-fit relative cursor-pointer" padding = "md" >

              <div class = " border-r border-gray-400 justify-center w-32 md:w-28 lg:w-28 relative my-2 ">
                <Avatar size="md" src = { "" } class = "ml-8"/>
                <Badge color="yellow" class="mt-4 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative">{ history.air_company_name }</Badge>
                <Badge color="primary" class="mt-4 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative"> { history.flight } </Badge>
              </div>

             

              <div class = "  justify-center w-32 relative ">
                <div class = " border-r border-gray-400 ">
                  <p class="ml-1 mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative font-bold font-serif pb-12"> Source Port </p>

                  <p class="ml-1 mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative">{ history.from_Port }</p>
                  <Badge color="red" class="ml-1 mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative font-bold ">{ history.departure_time }</Badge>
                  <p class="ml-1 mt-1 text-sm w-32 tracking-tight text-gray-900 dark:text-white relative font-bold">{ history.departure_date }</p>
                  
                </div>
              </div>

              <!-- <div class = "my-auto relative w-96" > -->

              <!-- <Timeline order="horizontal" >
                <TimelineItem title="direct" date="" >
  
                  <svelte:fragment slot="icon">
                    <div class="flex items-center">
                     
                      <div class="hidden sm:flex w-80 ml-6 bg-rose-600 h-0.5 dark:bg-gray-700" />
                    </div>
                  </svelte:fragment>
                  
  
                </TimelineItem>

  
              </Timeline> -->

              <!-- </div> -->
              

              <div class = "justify-center w-32 relative  ">
                <div class = " border-r border-gray-400 ">
                  <p class="ml-1 mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative font-bold font-serif pb-12"> Dest. Port  </p>

                  <p class="mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative">{ history.to_Port }</p>
                  <Badge color="green" class="mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative font-bold ">{ history.arrival_time }</Badge>
                  <p class="mt-1 text-sm w-32 tracking-tight text-gray-900 dark:text-white relative font-bold">{ history.arrival_date }</p>
                </div>
              </div>

            

              

              <div class = " justify-center w-28 relative">

                <div class = " border-r border-gray-400 ">

                  <p class="ml-1 mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative font-bold font-serif "> Bill  </p>
                
                  <Badge color="yellow" class="mt-1/2 text-md w-24 tracking-tight text-gray-900 dark:text-white relative mb-4">Tk : { history.total_bill }</Badge> 

                  <div class = "pb-3"></div>
                  
                  <p class="ml-1 mt-1 text-sm w-28 tracking-tight text-gray-900 dark:text-white relative font-bold font-serif "> Class  </p>
                
                  <Badge color="yellow" class="mt-1/2 text-md w-24 tracking-tight text-gray-900 dark:text-white relative mb-4">{ history.seat_class }</Badge> 
             
                </div>
              
              </div>


              <div class = " justify-center w-24 relative my-auto">
                
                <p class="mt-1/2 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold">{ history.duration_hour } h { history.duration_minutes} m</p>
              
              </div>

            

              
            </Card>

            
            
          </AccordionItem>

        {/each}
      </Accordion>
          
       

    {/if}

    

    

</div>

