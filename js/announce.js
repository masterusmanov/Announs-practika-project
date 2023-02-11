let sana = document.querySelector('#sana');
let vaqt = document.querySelector('#vaqt');
let yunalish = document.querySelector('#yunalish');
let ichki = document.querySelector('#ichki');
let turi = document.querySelector('#turi');
let link = document.querySelector('#link');
let imya = document.querySelector('#imya');
let kasb = document.querySelector('#kasb');
let tel = document.querySelector('#tel');
let tel1 = document.querySelector('#tel1');
let tavsif = document.querySelector('#tavsif');
let rasm = document.querySelector('#rasm');
let yozish = document.querySelector('#yozish');



form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append('file', rasm.files[0])
    formData.append('sana', sana.value)
    formData.append('vaqt', vaqt.value)
    formData.append('yunalish', yunalish.value)
    formData.append('ichki', ichki.value)
    formData.append('turi', turi.value)
    formData.append('link', link.value)
    formData.append('imya', imya.value)
    formData.append('kasb', kasb.value)
    formData.append('tel', tel.value)
    formData.append('tel1', tel1.value)
    formData.append('tavsif', tavsif.value)
    formData.append('yozish', yozish.value)
     
    fetch('http://localhost:7000/create_announ', {
        method: 'POST',
        body: formData
    });

    alert("E'loningiz ro'yhatga qo'shildi. Admin tasdig'idan o'tguncha kuting!");
    document.location.href = '../index.html'
})