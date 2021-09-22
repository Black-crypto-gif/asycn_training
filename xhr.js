const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            /* console.log(request.responseText); */
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState === 4) {
            /* console.log('could not fetch the data') */
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', './todos.json');
    request.send();
};


getTodos((err, data) => {
    console.log('Callback fired')
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});







/*
Rule number 1:
This is above it's http request, like this i'm fetching data from the database or the url server that contain the data, then i must use the  callback to shod the actual data, remember you  must define the variable with XHR the open a request with the target endpoint then send the data and i fetch it with readystatechange event and make a if statement to check the status of the data coming from the server, after that i must use the callback function to actual show the data in the browser
*/

/*
Rule number 2 :
after i made the http request i can wrap it with one function i can call it callback function, then i can make the argument as a err or data to get what ever iw ant from the xhr him self and it's can be more usable as callback function i can run it maytime or change it and rerun it again with different parameters 
*/

/**
 * Rule number 2-1:
 * after you made the call back the data that came from the server is in json, so we must turn it in to javascript lists of objects and then parse it with the @JSON.parse();
 * after that the data turn into javascript list of objects wish will be easy to delte with 
 */