<script>

    import { onMount } from "svelte"

    import { dummystationList, stationList } from "../../data/train_details"

    import { Card, Select, TimelineItem, Timeline } from "flowbite-svelte"

    import { PlusOutline } from "flowbite-svelte-icons"


    // let train = []

    // const url = new URL(window.location.href)

    // const pathsegments = url.hash.split('/').filter(Boolean)

    // console.log(pathsegments)

    let train = window.sessionStorage.getItem("selected")

    let Route = [], trainstationList = []

    //export let option = "route"

    onMount( async() => {

        console.log(train)
    

    })

    trainstationList = dummystationList

    console.log(trainstationList) 



    function addRoute(idx){

       trainstationList.splice(idx+1,0,{ value : Route[idx] ,name : Route[idx] } )

       console.log(idx,trainstationList)

       trainstationList = trainstationList

       return;

       //Route = []
       //window.location.reload()

    }

</script>

<div class = "container">

    <h1 class = "font-bold text-center " > { train } </h1>

    <div class = "w-full mt-8 left-1/4 absolute h-fit">

        <Card >

        <h2 class = "font-bold text-left mb-8 font-serif" > Upstream </h2>


            <Timeline order="vertical" class = "border-rose-600 font-bold">

                { #each trainstationList as stoppage,idx }

                <TimelineItem title={ stoppage.name } date="">
                    <svelte:fragment slot="icon">
                    <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-50 rounded-full ring-8 ring-blue-50">
                    
                        <i class="fa-solid fa-map-marker-alt w-3 h-3 text-green-600 dark:text-green-400" ></i>

                    </span>
                    </svelte:fragment>
                    <p class=" text-base font-bold text-gray-500 dark:text-gray-400"> &nbsp; </p>
                    
                    
                    <Select items= { stationList } id="text" placeholder = "Add Route " bind:value = { Route[idx] } class = " pl-8 font-bold font-serif bg-gray-100 border-4 border-gray-400 w-1/2 rounded-lg hover:bg-green-200 cursor-pointer "  on:change = { () => addRoute(idx) } />

                    
                    
                </TimelineItem>
                { /each }

            </Timeline>

        </Card>

    </div>

    <div class = "w-full mt-8 left-2/3 absolute h-fit">

        <Card>

            <h2 class = "font-bold text-left mb-8 font-serif" > Downstream </h2>


            <Timeline order="vertical" class = "border-rose-600 font-bold">

                { #each trainstationList.slice().reverse() as stoppage }

                <TimelineItem title={ stoppage.name } date="">
                    <svelte:fragment slot="icon">
                    <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-50 rounded-full ring-8 ring-blue-50">
                    
                        <i class="fa-solid fa-map-marker-alt w-3 h-3 text-green-600 dark:text-green-400" ></i>

                    </span>
                    </svelte:fragment>
                    <p class=" text-base font-bold text-gray-500 dark:text-gray-400"> &nbsp; </p>
                </TimelineItem>
                { /each }

            </Timeline>

        </Card>

    

    </div>

</div>