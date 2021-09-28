// const results = document.getElementById('results')
// const resultsList = document.getElementById('results_list')


function handleSubmit(event) {
    event.preventDefault()
    const results = document.getElementById('results')
    const resultsList = document.getElementById('results_list')
    console.log("::: Form Submitted :::")
    let formText = document.getElementById('search-keyword').value
    resultsList.innerHTML =''
    
    // check what text was put into the form field
    Client.checkForName(formText)
    console.log(Client.URLChecker(formText))

    // check if URL is valid or not
    if(Client.URLChecker(formText)){
        results.innerHTML = '<strong>Loading...</strong>'
        document.getElementById('search-keyword').value = ''

    sendUrl('http://localhost:3030/postUrl', {url: formText})
    .then(()=> getDataUpdatePage('http://localhost:3030/getResults'))
    }else{
        alert('Invalid URL, please try with a valid URL.')
    }
    
    // fetch('http://localhost:3030/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}


//Function to post url (urlToCheck)
const sendUrl = async (url, urlToCheck)=>{
    console.log('::: Send URL to Analysis :::', urlToCheck)
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    body: JSON.stringify(urlToCheck),
    })
    try {
        const requireData = await req.json()
        return requireData
    }catch(error) {
        console.log('Error : ', error)
    }
}

//Function to update User interface dynamically
const getDataUpdatePage = async (url)=>{
    const res = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    try {
        const data = await res.json();
        console.log(data)

        for (const property in data) {
            console.log(`${property}: ${data[property]}`)
            dataList({property, data: data[property] })
        }
        // document.getElementById('results').innerHTML = data.confidence
    }catch(error) {
        console.log('Error : ', error)
    }
}

//function to add dynamic data
const dataList = ({property, data})=>{
    const results = document.getElementById('results')
    const resultsList = document.getElementById('results_list')
    let list = document.createElement('li')
    let title = property.toUpperCase()
    let text = `<strong><em>${title}</em> :</strong> ${data}`
    list.innerHTML = text
    resultsList.appendChild(list)
    results.innerHTML = ''
}

export {handleSubmit, sendUrl, getDataUpdatePage, dataList}