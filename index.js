function submitData() {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
        // .then((res) => res.json())
        // .then((data) => renderData(data))
    })

}