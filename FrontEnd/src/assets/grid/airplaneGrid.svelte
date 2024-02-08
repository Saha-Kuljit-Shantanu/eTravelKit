<script>
    
    let lastSixValues = []

    const url = new URL(window.location.href)

    const pathsegments = url.hash.split('/').filter(Boolean)

    console.log(pathsegments)

    lastSixValues = pathsegments.slice(-6)

    let status, grid

    console.log(lastSixValues)

    function reformatDate(datedmy){

      let date = datedmy.split('-')

      let d = date[0], m = date[1], y = date[2]

      let datemdy = m + '-' + d + '-' + y

      return datemdy

    }

    async function todo(){

      let x = lastSixValues[4]

      lastSixValues[4] = reformatDate(lastSixValues[4])

      const response = await fetch(`http://localhost:3001/user/seat_details/${lastSixValues[0]}/${lastSixValues[1]}/${lastSixValues[4]}/person=${lastSixValues[2]}/${lastSixValues[3]}/${lastSixValues[5]}`)
      if (!response.ok) {
        status = response.status;
      }

      else grid = await response.json();

      lastSixValues[4] = x
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

    let rows = 12;
    let columns = 6;
    
     
    let selectList = []
    let ara = [1,0,0,1,1,1,
              1,1,1,1,0,1,
              1,0,0,1,1,0,
              0,1,0,1,0,0,
              0,0,0,1,1,0,
              0,0,0,1,0,0,
              1,0,0,1,1,1,
              1,1,1,1,0,1,
              1,0,0,1,1,0,
              0,1,0,1,0,0,
              0,0,0,1,1,0,
              0,0,0,1,0,0]

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



  {#each Array(rows) as _, rowIndex}

  <!-- <div class = "max-w-2xl space-y-16 overflow-y-auto"> -->
  
    <div class="grid_gap_4">
    
      {#each Array(columns) as _, colIndex}

      <!-- <p> {selectList} {selectList.includes( [0,1] ) }</p> -->

        {#if isSeatInList( rowIndex,colIndex,selectList )}

        
        
        <div role="button" tabindex="0" class="bg-blue-300 p-4 text-center cursor-pointer rounded-lg " on:click={ () => unSelectSeat(rowIndex,colIndex) } on:keydown={ doNothing }>
          {String.fromCharCode(65 + colIndex)}{rowIndex + 1}
        </div>

        {:else if ara[columns*rowIndex + colIndex] === 0 }
        <div role="button" tabindex="0" class="bg-gray-200 p-4 text-center cursor-pointer rounded-lg hover:bg-gray-800 hover:text-gray-200" on:click={ () => selectSeat(rowIndex,colIndex) } on:keydown={ doNothing }>
          {String.fromCharCode(65 + colIndex)}{rowIndex + 1}
        </div>

        {:else}      
        <div class="bg-gray-400 p-4 text-center text-gray-200 cursor-not-allowed rounded-lg">
            {String.fromCharCode(65 + colIndex)}{rowIndex + 1}
        </div>

        {/if}

        {#if colIndex === columns/2-1}

            <div class= "p-4"> </div>
            <div class= "p-4"> </div>
        
        {/if}

      {/each}
    
    </div>

  <!-- </div> -->
    
  {/each}

<div></div>

<style>

.grid_gap_4 {

    display: grid;
    grid-template-columns: repeat(auto-fill ,minmax(50px, 1fr));
    gap: 1rem;
    max-width: 42rem;
}

</style>