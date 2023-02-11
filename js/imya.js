function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:7000/read_imya_unnoun', {
}).then(res => res.json())
    .then(announcements => {
        for (let announ of announcements) {
            let [tr, td1, td2, td3, td5, td6, td7, p] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'p');
            td1.textContent = announ.id;
            td2.textContent = announ.imya;
            td3.textContent = announ.yozish;
            td5.textContent = announ.sana + ' ' + announ.vaqt;
            td6.textContent = announ.yunalish;

            p.innerHTML = 'Batfsil';
            p.style.cursor = 'pointer';
            p.style.color = 'white';
            p.style.padding = '5px';
            p.style.color = 'blue';
            p.style.display = 'inline-block';
            p.addEventListener('click', () =>{
                localStorage.setItem('announ_imya', announ.imya);
                location.href = '../html/imya_id.html';
            })
                    
            td7.append(p);
            tr.append(td1, td2, td3, td5, td6, td7);
            tbody.append(tr);
        };
        
    });