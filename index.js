let inputTask = document.querySelector('#inputTask')
let form = document.querySelector('.task-form')
let filter  = document.querySelector('#filter')
let list = document.querySelector('.task-list')
let clearBtn  = document.querySelector('.clear-task-btn')




form.addEventListener('submit',addTask)
filter.addEventListener('keyup',filterTask)
list.addEventListener('click',removeTask)
clearBtn.addEventListener('click',removeTaskAll)


  function   showalert(message,error){
        let container = document.querySelector('.container')
        form = document.querySelector('.task-form')
        let div = document.createElement('div')
        div.appendChild(document.createTextNode(message))
        div.className = `aleart ${error} `
     
        container.insertBefore(div,form)

        setTimeout(()=>{
            document.querySelector('.aleart').remove()
        },2000)
    }



function addTask(e){
 
   if (inputTask.value === ''){
      showalert('Please Fill The Field','error')
    
   }
    else{
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(inputTask.value + " "))
        let link = document.createElement('a')
        link.innerHTML = 'X'
        link.setAttribute('href','#')
        
        li.appendChild(link)
    
        list.appendChild(li)
        showalert('Added Sucessfully','success')
       
    }
   
    inputTask.value = ''
    e.preventDefault()
}

function filterTask(e){
     let text = e.target.value.toLowerCase()
     document.querySelectorAll('li').forEach((task)=>{
         let item = task.firstChild.textContent.toLowerCase()
         if(item.indexOf(text) != -1){
             task.style.display = 'block'
         }else{
            task.style.display = 'none'
         }
     })
 
     
    //  document.querySelectorAll('li').forEach(task=>{
    //      let item  = task
    //      console.log(item);
    //  })

}


function removeTask(e){
    if(e.target.hasAttribute('href')){
       let ele = e.target.parentElement
       ele.remove()
       showalert('Remove Successfully','success')
       
    }


}

function removeTaskAll(){
    list.innerHTML = ''
    showalert('All item Remove Successfully','success')

}


