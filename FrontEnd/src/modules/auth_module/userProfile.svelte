<script>
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
    const items = Array(3);
    import { ShoppingCartSolid, CogOutline } from 'flowbite-svelte-icons';
    import { Avatar, Badge, Card, Timeline, TimelineItem } from 'flowbite-svelte';
    import { ButtonGroup } from 'flowbite-svelte';
    import { AdjustmentsVerticalOutline, DollarSolid } from 'flowbite-svelte-icons';
  </script>

    <div class="max-w-2xl w-fit " >

    <ButtonGroup >
      <Button outline color="dark" class= " rounded-l-md rounded-r-none">
        
        <AdjustmentsVerticalOutline class="w-3 h-3 me-2" />
        Sort by quickest flight
      </Button>
      <Button outline color="dark" class= "  rounded-none">
        <DollarSolid class="w-3 h-3 me-2" />
        Sort by pricing
      </Button>
      <Button outline color="dark" class= "  rounded-none">
        <i class="fa-solid fa-plane-departure"></i>
        Sort by earliest takeoff
      </Button>
      <Button outline color="dark" class= " rounded-r-md rounded-l-none" >
        <!-- <i class="fa-solid fa-plane-departure"></i> -->
        Unsort
      </Button>
    </ButtonGroup>

    </div>

  <div>
    <Accordion multiple>
        <div class="history_header" >
        <AccordionItem bind:open={items[0]}>
            <span slot="header" class="text-base flex gap-2">
            <ShoppingCartSolid class="mt-0.5" />
            <span style = "color:Black" ><b>US-Bangla Airlines Bnagladesh</b></span>
            </span>
            <!-- <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
            <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start websites even faster with components on top of Tailwind CSS.
            </p> -->
            <Card horizontal size = "xl" class = "bg-gray-40 w-fit relative" padding = "md" >
    
                <div class = " border-r border-gray-400 justify-center w-28 relative my-2">
                  <Avatar size="md" src = "" class = "ml-8"/>
                  <Badge color="yellow" class="mt-4 text-sm w-18 tracking-tight text-gray-500 dark:text-white relative">Bnagldesh BIman</Badge>
                </div>
    
               
    
                <div class = "justify-center w-24 relative my-auto">
                  <p class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative">Dhaka</p>
                  <Badge color="red" class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative font-bold">12-12-1202</Badge>
                  <p class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative font-bold">fuck off</p>
                </div>
    
                <div class = "my-auto relative w-96">
    
                <Timeline order="horizontal" >
                  <TimelineItem title="direct" date="" >
    
                    <svelte:fragment slot="icon">
                      <div class="flex items-center">
                        <!-- <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <DotsVerticalOutline class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                        </div> -->
                        <div class="hidden sm:flex w-80 ml-6 bg-gray-300 h-0.5 dark:bg-gray-700" />
                      </div>
                    </svelte:fragment>
                    
    
                  </TimelineItem>
    
    
                </Timeline>
    
                </div>
                
    
                <div class = " justify-center w-24 relative my-auto">
                  <p class="mt-1 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative">Mymenshigh</p>
                  <Badge color="green" class="mt-1 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative font-bold ">fuck off</Badge>
                  <p class="mt-1 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative font-bold">fuck off</p>
                </div>
    
              
    
                <div class = " border-r border-gray-400 justify-center w-24 relative my-auto">
                  
                  <p class="mt-1/2 text-sm w-24 tracking-tight text-gray-500 dark:text-white relative font-bold">19 h 23 m</p>
                </div>
    
                <div class = " border-l border-gray-800 justify-center w-24 relative my-2">
                  
                  <Badge color="yellow" class="mt-1/2 text-md w-24 tracking-tight text-gray-500 dark:text-white relative mb-4">Tk : 1212</Badge>
    
                  <Button shadow color="dark"> Book </Button> 
               
                </div>
    
              
    
                
              </Card>
        </AccordionItem>
        </div>
        <AccordionItem bind:open={items[1]}>
            <span slot="header" class="text-base flex gap-2">
            <ShoppingCartSolid class="mt-0.5" />
            <span>My Header 1</span>
            </span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
            <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start websites even faster with components on top of Tailwind CSS.
            </p>
        </AccordionItem>
      </Accordion>
  </div>
  