<script>

    import Usernavigation from './navigation/usernavigation.svelte';
    import Homesidebar from "./sidebar/homesidebar.svelte";

    

</script>


<div class = "flex flex-col w-screen h-screen fixed overflow-y-hidden overflow-x-hidden space-y-36">

    <div class = "basis-1/3 bg-yellow-300 w-full h-1/5 top-0 left-0 fixed " >
      
     
      <div class = "flex flex-row w-screen h-screen ">
  
        <Usernavigation />  
  
      </div>
      
    
    </div>

    

    <div class = "basis-2/3 w-full h-4/5 top-40 mt-2 left-0 space-y-12 fixed overflow-y-scroll"> 

        <div class="flex flex-row w-full ">

            <div class = "basis-1/5 h-full fixed top-40 mb-2 " > <Homesidebar /> </div>
            <div class = "w-screen pl-96 space-y-20">  
                  
              
            <div></div>
            
            </div>
        
          </div>

    </div>

</div>