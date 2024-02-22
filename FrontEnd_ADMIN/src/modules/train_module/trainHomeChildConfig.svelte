<script>

    import { NavLi, Select,NavUl} from 'flowbite-svelte'
    import { Card } from 'flowbite-svelte'
    import { Badge } from 'flowbite-svelte'
    import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
    import { ClockSolid } from 'flowbite-svelte-icons';
    import { seatType } from '../../data/train_details';
    let newSeatType = [] ;
    let passwordGiven ;
    let password = "password"

    let coach = "Select Coach", rows=6, columns = 5 ,compartments = 4;
    let col = columns ;
    if(col%2 === 1){
      col = columns - 1;
    }
    let customized = 'pl-60'
    let added_coach = false ;
    if(added_coach === false){
      customized = 'left-1/2'
    }
    let namesofCompartment = ['KA','KHA','GA','GHA','NGA','CHA','CHHA','JA','JHA','NYA','TA','THA','DA','DHA','NA','TA','THA','DA','DHA','NA','PA','PHA','BA','BHA','MA','YA','RA','LA','WA','SHA','SSA']


    let data = {
        train_uid : "Agnibina-735",
        coaches : ["SHOVAN","SHULAV","AC_S"] ,
        dimensions: [[6,4,4],[6,5,4],[6,5,4]] ,
        routes : [
                    {
                        "start": "Rajshahi",
                        "departure_time": "10:00:00",
                        "cost_class": [
                        100,
                        200,
                        350,
                        ]
                    },
                    {
                        "start": "NarayanGanj",
                        "departure_time": "11:00:00",
                        "cost_class": [
                        120,
                        220,
                        370,
                        ]
                    }
                    ],
        
        
    }
    let size = data.coaches.length ;

    console.log(seatType)

    //adding comapartments
    let compartments_modal = false ;
    function addComaprtments(coach_idx) {
      console.log(passwordGiven) ;
        //make an authentication chechking 
        /**
         * 
        */
       //raw for now
        if(password.localeCompare(passwordGiven)===0){
          console.log("Adding Comaprtments",coach_idx)
          data.dimensions[coach_idx][0] = compartments ;
          compartments_modal = false ;
        }
        else{
          compartments_modal = true ;
        }
    }


    //adding new coach
    let add_coach_modal = false ;
    function addCoach() {
        // event.preventDefault();
        console.log("Adding Coach")
        data.coaches.push(coach) ;
        data.dimensions.push([rows,columns,compartments]) ;
        console.log(data.coaches) ;
        // add_coach_modal = false ;

    }

    //remaining coachInfo
    console.log(seatType)
    function remainingCoachInfo() {
      console.log("Remaining Coach Info")
      newSeatType = [] ;
      seatType.forEach(f=>{
        let found = false ;
        data.coaches.forEach(e => {
          if(f.value.localeCompare(e) === 0){
            found = true ;
          }
        });
        if(found === false){
          newSeatType.push(f) ;
        }
      }) ;
      return newSeatType ;
    }

    remainingCoachInfo() ;

    console.log(coach)
  
</script>

<div class="space-x-8 space-y-8">
    <Card class = "shadow-none flex-justify-content" size = "xl">
        <h1>
            {data.train_uid}
        </h1>
        <!-- draw card of all the classes in scrpits horizontally having 3 -->
        <div class = "grid grid-cols-3 mx-8 my-8 h-auto">
            {#each Array(data.coaches.length) as _,coach_idx}
              <div class="px-8 py-8">
                  <Card class = "shadow-lg flex-justify-content" size = "md">
                      <Badge rounded color="gray" class="ml-1 mt-1 text-sm w-24 tracking-tight text-gray-900 dark:text-white relative font-bold w-fit bg-gray-300 border-black">
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4 5a2 2 0 0 0-2 2v2.5c0 .6.4 1 1 1a1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z"/>
                          </svg>
                          <h3 class= "text-left flex-justify-content">
                              <b>{data.coaches[coach_idx]} Coach</b>
                          </h3>
                      </Badge>
                      <h2 class= "text-left flex-justify-content"><b>Rows : {data.dimensions[coach_idx][2]}</b></h2>
                      <h2 class= "text-left flex-justify-content"><b>Columns : {data.dimensions[coach_idx][1]}</b></h2>
                      <h2 class= "text-left flex-justify-content"><b>Compartments : {data.dimensions[coach_idx][0]}</b></h2>
                      <h2 class= "text-left flex-justify-content"><b>Total seats : {data.dimensions[coach_idx][0]*data.dimensions[coach_idx][1]*data.dimensions[coach_idx][2]}</b></h2>
                      <Button color="light" pill class="mx-8 items-end " size ="sm" on:click={()=>compartments_modal = true }>Edit</Button>
                      <Modal bind:open={compartments_modal} size="xs" autoclose={false} class="w-full">
                          <!-- <form class="flex flex-col space-y-6"> -->
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">New Comapartment</h3>
                            <Label class="space-y-2">
                              <span>Compartment</span>
                              <Input id={coach_idx} bind:value = {compartments} type="number" name="Compartments" placeholder={data.dimensions[coach_idx][0]} required />
                            </Label>
                            <Label class="space-y-2">
                              <span>Your password to verify</span>
                              <Input id="password" bind:value = {passwordGiven} type="password" name="password" placeholder="•••••" required/>
                            </Label>
                            <Button type="submit" class="w-full1 bg-gray-300" on:click={()=>addComaprtments(coach_idx)}>Update info</Button>
                          <!-- </form> -->
                        </Modal>

                    
                  </Card>
              </div>
            {/each}

            <div class="px-8 py-8">
              <Card class = "shadow-lg flex-justify-content dark:md hover:rounded cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-shadow motion-reduce:hover:transform-none ..." size = "sm"
              on:click={()=>add_coach_modal = true}>
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clip-rule="evenodd"/>
                    </svg>
                    <h3 class= "text-left flex-justify-content">
                        <b>Add Coach</b>                
              </Card>
              <Modal bind:open={add_coach_modal} size="xs" autoclose={false} class="w-full">
                  <!-- <form class="flex flex-col space-y-6"> -->
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">New Coach info</h3>
                    <div class = "w-fit items-center grid grid-cols-2 space-x-8">

                      <Select items= {newSeatType} bind:value = {coach} id="text" class = " mr-8 pl-8 font-bold font-serif bg-gray-100 border-4 border-gray-400 h-18 rounded-lg hover:bg-gray-200 cursor-pointer flex-justify-content"
                      placeholder = "Coach" />
                      <!-- <Select items= { seatType } id="text" bind:value = { coach } class = " mx-8 pl-8 font-bold font-serif bg-gray-100 border-4 border-gray-400 h-18 rounded-lg hover:bg-gray-400 cursor-pointer "    /> -->
                  
                    </div>
                    <Label class="space-y-2">
                      <span>Rows</span>
                      <Input id="rows" type="number" name="rows" placeholder="place your row" required />
                    </Label>
                    <Label class="space-y-2">
                      <span>Columns</span>
                      <Input id="columns" type="number" name="columns" placeholder="place your column" required />
                    </Label>
                    <Label class="space-y-2">
                      <span>Compartments</span>
                      <Input id="compartments" type="number" name="compartments" placeholder="place your compartments" required />
                    </Label>
                    <Label class="space-y-2">
                      <span>Your password to verify</span>
                      <Input id="password" type="password" name="password" placeholder="•••••" required />
                    </Label>
                    <Button type="submit" class="w-full1 bg-gray-300" on:click={()=>addCoach()}>Update info</Button>
                  <!-- </form> -->
              </Modal>
            </div>
        

        </div>

        <div >
    </Card>
</div>