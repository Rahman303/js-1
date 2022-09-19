// console.log("Buradayam HTML")

//  const _data = "dsads"

const myButton = document.getElementById('btn')
// console.log(myButton)

const idEl = document.getElementById('id')
const lNameEl = document.getElementById('lname')
const fNameEl = document.getElementById('fname')
const statusEL = document.getElementById('status')
const editIcon = document.getElementById('edit-icon')
const deleteIcon = document.getElementById('delete-icon')

const studentInfoObj = {
    id:102144,
    soyad: "Huseynov",
    ad: "Cahangir",
    tehsilStatusu:true,
    editIcon: '<i class="fa-solid fa-pen-to-square"></i>',
    deleteIcon: '<i class="fa-solid fa-trash"></i>'
}
myButton.addEventListener('click', getAllData)
function getAllData() {
    idEl.innerText = studentInfoObj.id
    lNameEl.innerText = studentInfoObj.soyad
    fNameEl.innerText = studentInfoObj.ad
    statusEL.innerText = studentInfoObj.tehsilStatusu ? 'Student': 'Not Student'
    editIcon.innerHTML = studentInfoObj.editIcon
    deleteIcon.innerHTML = studentInfoObj.deleteIcon
}