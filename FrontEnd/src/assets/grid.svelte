<script>
    
    let lastSixValues = []

    const url = new URL(window.location.href)

    const pathsegments = url.hash.split('/').filter(Boolean)

    console.log(pathsegments)

    lastSixValues = pathsegments.slice(-6)

    let status, grid

    console.log(lastSixValues)

    async function todo(){

      lastSixValues[4] = "2024-1-29"

      const response = await fetch(`http://localhost:3001/user/seat_details/${lastSixValues[0]}/${lastSixValues[1]}/${lastSixValues[4]}/person=${lastSixValues[2]}/${lastSixValues[3]}/${lastSixValues[5]}`)
      if (!response.ok) {
        status = response.status;
      }

      else grid = await response.json();
      console.log(grid);

      console.log(status)

    }

    import { onMount } from "svelte";

    onMount( async() => {

      todo() 

    })


    let rows = 6;
    let columns = 4;
    
    let ara = [1,0,0,1,
              1,1,1,1,
              1,0,0,1,
              0,1,0,1,
              0,0,0,1,
              0,0,0,1]

    

    
</script>
  
<div class="grid grid-cols-6 gap-4">
    {#each Array(rows) as _, rowIndex}
      {#each Array(columns) as _, colIndex}
        {#if ara[columns*rowIndex + colIndex] === 0}
        <div class="bg-green-300 p-4 text-center cursor-pointer">
          {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
        </div>

        {:else}
        <div class="bg-red-300 p-4 text-center cursor-not-allowed">
            {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
        </div>

        {/if}

        {#if colIndex === columns/2-1}

            <div class= "p-4"> </div>
            <div class= "p-4"> </div>
        
        {/if}

      {/each}
    {/each}
</div>