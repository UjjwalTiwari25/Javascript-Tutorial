//Basic syntax
fetch(url, options)
    .then(response => {
        // Handle the response
    })
    .catch(error => {
        // Handle errors
    });
/*
Parameters
url: The resource you want to fetch (required).
options: An object containing configuration for the request (optional). Example:
method (GET, POST, PUT, DELETE)
headers (Custom headers like Content-Type)
body (Data to send in a POST or PUT request)
*/

//1. GET Request

fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

//2. POST Request

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    //3. Handling Errors
    /*Fetch only rejects the promise for network failures or if the request was aborted.
For HTTP errors, you need to check the response.ok or response.status.
    */
fetch('https://api.github.com/invalid-url')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
})
.catch(error => {
    console.error('Error:', error);
});


//Using async/await with fetch
// Modern JavaScript allows you to use async/await to simplify fetch calls.
const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchData();


//Advance Usage....Custom Headers
fetch('https://api.example.com/data', {
    headers: {
        'Authorization': 'Bearer your-token',
        'Content-Type': 'application/json'
    }
});
