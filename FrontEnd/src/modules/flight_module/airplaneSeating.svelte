<script>

    import Homenavigation from '../../assets/navigation/homenavigation.svelte';
    import Detailsidebar from "../../assets/sidebar/flightjourneysidebar.svelte";
    import AirplaneGrid from '../../assets/grid/airplaneGrid.svelte';

    

</script>


<div class = "flex flex-col w-screen h-screen fixed overflow-y-hidden overflow-x-hidden space-y-36">

  <div class = "basis-1/3 bg-yellow-300 w-full h-1/5 top-0 left-0 fixed " >
    
   
    <div class = "flex flex-row w-screen h-screen">

      <Homenavigation />


    </div>
  
  </div>

  <div class = "basis-2/3 w-full h-4/5 left-0 top-4 fixed overflow-x-hidden"> 

    <div class="flex flex-row w-full">

      <div class = "basis-1/5 h-full fixed mb-2 " id = "top-20" > <Detailsidebar /> </div>
        <div class = "w-screen absolute left_40 overflow-y-scroll space-y-4 mt-4 ">  
              
              
            <AirplaneGrid />
              
            <div></div>
            
        </div>
        
      </div>

    </div>

</div>

<style>

  #top-20 {

    top: 20%

  }

  .left_40 {

    left: 40%;

  }

</style>