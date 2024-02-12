<script>

    import Homenavigation from '../../assets/navigation/homenavigation.svelte';

    import DatePicker from '../../assets/datepickers/formdatepicker.svelte';

    import { Button, Card, FloatingLabelInput, Label, Select } from "flowbite-svelte";

    import { storeAirplaneSelectedSeat } from '../../store/store';

    let seatlist = []

    let date_of_Birth = []

    storeAirplaneSelectedSeat.subscribe( list => { seatlist = list})

    let gender = [

        { name : "male", value : "Male" },
        { name : "female", value : "Female" },
        { name : "other", value : "Other" },

    ]

</script>

<div class = "flex flex-col w-screen h-screen fixed overflow-y-scroll overflow-x-hidden">
  
    <div class = "basis-1/3 bg-yellow-300 w-full h-1/5 top-0 left-0 fixed " >
      
     
      <div class = "flex flex-row w-screen h-screen ">
  
        <Homenavigation />
  
  
      </div>
      
    
    </div>

    <div class = "basis-2/3 w-full h-4/5 left-0 my-2 ml-2 space-y-2 fixed overflow-x-scroll" id = "top-20">

        <form>

        <div class="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3 relative">

            {#each seatlist as seat,index}

                <Card >

                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Passenger {index+1}</h3>
        
                    <FloatingLabelInput id="name_${index}" name="floating_standard" type="text" label="Floating standard" required>
        
                        Enter Name
        
                    </FloatingLabelInput>
        
                    <FloatingLabelInput id="nid_${index}" name="floating_standard" type="text" label="Floating standard" required>
        
                        Enter NID
        
                    </FloatingLabelInput>
        
                    <!-- <Label for="gender" class="sr-only">Underline select</Label> -->
                    <Select id="Gender_${index}" underline class="mt-2 cursor-pointer" items={ gender } required/>
                    <!-- <Label for="datepicker" class="mb-2"></Label> -->
                    <Label for="datepicker"><DatePicker bind:selectedDate= { date_of_Birth[index] } /></Label>
        
                </Card>
            
            {/each}

            

        </div>

        <div ><Button type="submit" shadow color="dark" class = "h-fit w-1/2 " >Submit</Button></div>

        <div> &nbsp </div>

        </form>


    </div>

</div>

<style>

    #top-20 {
  
      top: 20%
  
    }
    
</style>