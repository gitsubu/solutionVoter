// console.log('hi');

console.log(document.querySelectorAll("button"));
document.querySelectorAll("button").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        console.log('clicked');
        let current_order = Number(btn.parentElement.style.order);
        btn.parentElement.style.order = current_order - 1;
        console.log(btn.children[0]);
        btn.children[0].textContent = Math.abs(current_order) + 1;
    })
});