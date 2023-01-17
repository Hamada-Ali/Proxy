// Proxy Pattern

// in javascript there is a bulid in proxy object you can use , you don't have to create one



const APIData = {
    statusAPI: 200,
    key: "sudo",
    data: "test test test"
}



// proxy object
                            //(target, handler)
const proxyOverApi = new Proxy(APIData, {
    get: (obj, key) => {
        if(obj[key] === 200) {
            console.log('send success')
            return;
        } else {
            console.log('something wrong')
        }
    },
    set: (obj, key, value) => {
        if(obj[key] === 200) {
            obj[key] =  value
        }
    }
})

proxyOverApi.statusAPI = 200;

console.log(APIData)

console.log(proxyOverApi.statusAPI)