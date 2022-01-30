const newItem = document.newItem

const listitem = document.list

form.addEventLsitener('submit', (e)=>{
    e.preventDefault()

    const input = form.input.value
    form.input.value = ""

    const newListItem = document.createElement("li")
    listitem.append(newListItem)

    const itemName = document.createElement("div")
    itemName.textContent = input
    newListItem.prepend(itemName)

    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    newListItem.predpend(editButton)

    const XButton = document.createElement("button")
    XButton.textContent = "X"
    newListItem.prepend(XButton)

    XButton.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
    })
})