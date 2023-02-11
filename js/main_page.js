let yozish = document.querySelector('#yozish')
let yozish1 = document.querySelector('#yozish1')
let sana = document.querySelector('#sana')
let vaqt = document.querySelector('#vaqt')
let turi = document.querySelector('#turi')
let rasm = document.querySelector('#rasm')


let announ_id = JSON.parse(localStorage.getItem('announ_id'));


fetch('http://localhost:7000/main_announs/', {
}).then(res => res.json())
    .then(main_unnouns => {
        console.log(main_unnouns.img);
        for (let annmain of main_unnouns) {
            if(announ_id == annmain.id){
                yozish.textContent = annmain.yozish
                yozish1.textContent = annmain.yozish
                sana.textContent = annmain.sana
                vaqt.textContent = annmain.vaqt
                turi.textContent = annmain.turi
                rasm.src = `../model/upload_file/${annmain.img}`

            }
        };        
    });