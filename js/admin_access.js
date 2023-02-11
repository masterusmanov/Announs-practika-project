function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:7000/announs', {
}).then(res => res.json())
    .then(announcements => {
        for (let announ of announcements) {
            let [tr, td1, td2, td3, td4, td5, td6, td7, p, p2] = createElement('tr', 'td', 'td', 'td', 'td', 'td', 'td', 'td', 'p', 'p');
            td1.textContent = announ.id;
            td2.textContent = announ.imya;
            td3.textContent = announ.yozish;
            td4.textContent = announ.tel;
            td5.textContent = announ.sana + ' ' + announ.vaqt;
            td6.textContent = announ.yunalish;

            p.innerHTML = 'Tasdiqlash';
            p.style.cursor = 'pointer';
            p.style.color = 'white';
            p.style.padding = '5px';
            p.style.backgroundColor = 'blue';
            p.style.display = 'inline-block';
            
            p2.innerHTML = 'Bekor qilish';
            p2.style.marginLeft = '10px';
            p2.style.cursor = 'pointer';
            p2.style.color = 'white';
            p2.style.padding = '5px';
            p2.style.backgroundColor = 'red';
            p2.style.display = 'inline-block';
            p2.addEventListener('click', () => {
                fetch(`http://localhost:7000/delete_announ/${announ.id}`
                ).then(res => res.json())
                    .then(info => console.log(info.msg))
            });
            
            p.addEventListener('click', () => {
                fetch(`http://localhost:7000/create_unnoun/${announ.id}`
                ).then(res => res.json())
                    .then(info => console.log(info.msg))
            });

            td7.append(p, p2);
            tr.append(td1, td2, td3, td4, td5, td6, td7);
            tbody.append(tr);
        };
        
    });