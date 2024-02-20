<script>

    import { Select } from 'flowbite-svelte'

    import { seatType } from '../../data/train_details';

    let coach = "AC_S", rows=3, columns = 4
  
</script>

<div class = "w-1/2 items-center">

    <Select items= { seatType } id="text" bind:value = { coach } class = " pl-8 font-bold font-serif bg-gray-100 border-4 border-gray-400 h-18 rounded-lg hover:bg-green-200 cursor-pointer "    />

</div>

{#each Array(rows) as _, rowIndex}

  <!-- <div class = "max-w-2xl space-y-16 overflow-y-auto"> -->
  
    <div class="grid_gap_4">
    
      {#each Array(columns) as _, colIndex}

      <!-- <p> {selectList} {selectList.includes( [0,1] ) }</p> -->

        <!-- {#if isSeatInList( rowIndex, colIndex, selectedCompartment, selectList )}

        
        
        <div role="button" tabindex="0" class="bg-blue-300 p-4 text-center cursor-pointer rounded-lg  " on:click={ () => unSelectSeat(rowIndex, colIndex, selectedCompartment) } on:keydown={ doNothing }>
          {String.fromCharCode(65 + colIndex)}{rowIndex + 1}
        </div>

        {:else if seat_array[columns*(compartments* selectedCompartment + rowIndex) + colIndex][2] === 0 }
        <div role="button" tabindex="0" class="bg-gray-200 p-4 text-center cursor-pointer rounded-lg hover:bg-gray-800 hover:text-gray-200 " on:click={ () => selectSeat(rowIndex, colIndex, selectedCompartment) } on:keydown={ doNothing }>
          {String.fromCharCode(65 + colIndex)}{rowIndex + 1}
        </div>

        {:else}       -->
        <div class="bg-gray-400 p-4 text-center text-gray-200 cursor-not-allowed rounded-lg">
            {String.fromCharCode(65 + colIndex)}{rowIndex + 1}
        </div>

        <!-- {/if} -->

        {#if colIndex === columns/2-1}

            <div class= "p-4"> </div>
            <div class= "p-4"> </div>
        
        {/if}

      {/each}
    
    </div>

  <!-- </div> -->
    
  {/each}

  <style>

    .grid_gap_4 {
    
        display: grid;
        grid-template-columns: repeat(auto-fill ,minmax(50px, 1fr));
        gap: 1rem;
        max-width: 42rem;
    
    }
    
    /* @media only screen and (max-width: 2048px){
    
      .top-adjust {
    
        top: 20%
    
      }
    
    } */
    
    
    
    </style>