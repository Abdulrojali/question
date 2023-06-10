let plus=document.querySelectorAll('.first i')

for(let i=0; i<plus.length; i++){
    plus[i].addEventListener('click',function(){
        let parent=plus[i].parentElement
        let sibling=parent.nextElementSibling
        sibling.classList.toggle('active')
    })
}