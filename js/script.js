function getSomthing(){
    const key = '2d199d80b9c44f6592ed05ddaaab1801'
    const url = `https://api.spotify.com/v1/artists/?client_id=${key}`

    fetch(url)
        .then(data =>{
            return data.json()
        })
        .then(data=>{console.log(data)})
        .catch((error)=> {console.error('Error:', error)})
}
