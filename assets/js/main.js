let chevron = document.querySelectorAll('.chevron01');
let chevron01 = document.querySelectorAll('.chevron01 img');
let subMenu = document.querySelectorAll('.sub-nav-items')



chevron.forEach(item=>{
    item.addEventListener("click",showSubMenu)
})



function showSubMenu() {
    subMenu.forEach(item=>{
        if (item.style.display === "none"){
            item.style.display="grid"
            chevron01.forEach(item=>{
                item.addEventListener("click",()=>{
                    item.style.transform = 'rotate(0)';
                })
            })
        }else {
            item.style.display="none";
            chevron01.forEach(item=>{
                item.addEventListener("click",()=>{
                    item.style.transform = 'rotate(180deg)';
                })
            })
        }
    })

}
