const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()


xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        let JSONData = xhr.responseText;
        let data = JSON.parse(JSONData)
        displayName(data.objects[0].pokemon)
    }
}

const displayName = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let h1 = document.createElement('h1');
        h1.textContent = `${arr[i].name}`;
        document.body.appendChild(h1);
    }
}

