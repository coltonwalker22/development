const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()


xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        let JSONData = xhr.responseText;
        let data = JSON.parse(JSONData)
        displayName(data.objects[0].pokemon)
        console.log(data.objects)
    }
}

function displayName(arr){
    for(let i = 0; i < arr.length; i++){
        let div = document.createElement('div');
        // div.textContent = `${arr[i].name}`;
        div.textContent = arr[i].name
        document.body.appendChild(div);
    }
}

