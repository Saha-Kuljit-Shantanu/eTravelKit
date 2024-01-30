<script>
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.min.css';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@fortawesome/fontawesome-free/css/all.css';

    export let default_Date

    //let date_today = today.toLocaleDateString(undefined, { timeZone: 'UTC+6'})



    

  
    export let selectedDate;
    let inputElement;
  
    function initializeDatePicker() {
      flatpickr(inputElement, {
        dateFormat: 'd-m-Y',
        onChange: (selectedDates, dateStr) => {
          selectedDate = dateStr;
        },
        defaultDate: default_Date
      });
    }
  
    import { afterUpdate } from 'svelte';
  
    afterUpdate(() => {
      initializeDatePicker();
    });
  
  </script>
  
  
  
  <div class = "relative">
    
    <i class="fa-solid fa-xl fa-calendar-check absolute left-3 top-1/2 cursor-pointer"></i>
    <input bind:this={ inputElement } type="text" id="datepicker" class = "pl-10 w-full rounded-none bg-gray-50 border-1 border-gray-300 h-18 hover:bg-green-200"  />
    
  
  </div>
  