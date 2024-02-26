export async function addDetails(data) {
    console.log(data)
    return await fetch(`http://localhost:30062/admin/train/addDetails`,{
        // mode : 'no-cors' ,
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export async function addRoutes(data) {
    console.log(data)
    return await fetch(`http://localhost:30062/admin/routes/add`,{
        // mode : 'no-cors' ,
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

//deleteRoutes
export async function deleteRoutes(data) {
    console.log(data)
    return await fetch(`http://localhost:30062/admin/routes/deleteRoutes`,{
        // mode : 'no-cors' ,
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

//updateRoutes
export async function updateRoutes(data) {
    console.log(data)
    return await fetch(`http://localhost:30062/admin/routes/update`,{
        // mode : 'no-cors' ,
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}