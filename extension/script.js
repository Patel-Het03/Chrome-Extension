// javascript
const inputbtn = document.getElementById("save-el")
const inputel = document.getElementById("input-el")
let mylist = []
const ulel = document.querySelector("#ul-el")
const listfromstorage = JSON.parse(localStorage.getItem("mylist"))
const deletebtn=document.querySelector("#delete-el")
const tabbtn=document.querySelector("#save-tab")
console.log(listfromstorage)

function print(list){
    let listitem = ""
  for (let i = 0; i < list.length; i++) {
    listitem += `<li>
      <a href='${list[i]}' target='_blank'>  ${list[i]} 
      </a>
      </li>`
  }
  ulel.innerHTML = listitem
}

if (listfromstorage) {
  mylist = listfromstorage
  print(mylist)  
}



tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow:true},function(tabs){
       mylist.push(tabs[0].url)
       localStorage.setItem("mylist", JSON.stringify(mylist))
    print(mylist)
    })
    
    
    
})

deletebtn.addEventListener("click",function(){
    localStorage.clear()
    mylist=[]
    print(mylist)
    
})

inputbtn.addEventListener("click", function() {
  mylist.push(inputel.value)
  inputel.value = ""
  console.log(mylist)
  localStorage.setItem("mylist", JSON.stringify(mylist))
  print(mylist)
})

