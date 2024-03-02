
export async function proceedToPayment( formData ){
    console.log(formData)
    return await fetch(`http://localhost:8000/payment/init`,  {
        //  mode: 'cors',
         method: 'POST',
         headers: {
          'Content-Type': 'application/json', 
         },
         body: formData, 
      });

}
