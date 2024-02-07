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

    import { onMount } from "svelte"
    

   
    function isSeatInList(row, col, list) {

      return list.some(item => item[0] === row && item[1] === col);

    }

    function removeSeatFromList(row, col, list) {
      return list.filter(item => !(item[0] === row && item[1] === col ));
    }

    let rows = 6;
    let columns = 4;
    
     
    let selectList = []
    let ara = [1,0,0,1,
              1,1,1,1,
              1,0,0,1,
              0,1,0,1,
              0,0,0,1,
              0,0,0,1]

  onMount( async() => {

    todo() 

  })

  function selectSeat(row,col){

    const newSeat = [ row, col ]

    selectList = [...selectList, newSeat]
    
    console.log(selectList)
  }

  function unSelectSeat(row,col){

    //const newSeat = [ row, col ]

    selectList = removeSeatFromList(row,col,selectList)

    console.log(selectList)
  }

  const doNothing = () => {}

    
    
</script>
  
<div class="grid_gap_4">
    {#each Array(rows) as _, rowIndex}
      {#each Array(columns) as _, colIndex}

      <!-- <p> {selectList} {selectList.includes( [0,1] ) }</p> -->

        {#if isSeatInList( rowIndex,colIndex,selectList )}

        
        
        <div role="button" tabindex="0" class="bg-blue-300 p-4 text-center cursor-pointer " on:click={ () => unSelectSeat(rowIndex,colIndex) } on:keydown={ doNothing }>
          {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
        </div>

        {:else if ara[columns*rowIndex + colIndex] === 0 }
        <div role="button" tabindex="0" class="bg-green-300 p-4 text-center cursor-pointer " on:click={ () => selectSeat(rowIndex,colIndex) } on:keydown={ doNothing }>
          {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
        </div>

        {:else}      
        <div class="bg-red-300 p-4 text-center cursor-not-allowed ">
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

<style>

.grid_gap_4 {

    display: grid;
    grid-template-columns: repeat(6 ,1fr);
    gap: 1rem
}

</style>