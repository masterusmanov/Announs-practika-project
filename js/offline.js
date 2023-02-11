let demo = document.querySelector('#demo');
function createElement(...tegs) {
    let store = []
    for (let teg of tegs) {
        let createdTeg = document.createElement(`${teg}`)
        store.push(createdTeg)
    }
    return store
}

fetch('http://localhost:7000/read_offline_unnoun', {
}).then(res => res.json())
    .then(main_unnouns => {
        console.log(main_unnouns.img);
        for (let annmain of main_unnouns) {
            if(annmain.turi == 'offline' || annmain.turi == 'Offline'){
                let [div1, img, div2, div3, div4, div5, h5, p, i1, i2, i3, i4, i5, i6, span, span2, span3, span4, span5, span6, span7] = createElement('div', 'img', 'div', 'div', 'div', 'div', 'h5', 'p', 'i', 'i', 'i', 'i', 'i', 'i', 'span', 'span', 'span', 'span', 'span', 'span', 'span');
            
                div1.className = 'card';
                div1.style.width = '350px';
                div1.style.backgroundColor = 'light';
                div1.style.display = 'inline-block';
                div1.style.margin = '10px';
                div1.style.boxShadow = '3px 3px 6px green';

                img.src = `../model/upload_file/${annmain.img}`
                img.setAttribute("width", "100%")
                
                h5.innerHTML = annmain.yozish + '\n';
                h5.style.textAlign = 'center';
                h5.style.paddingTop = '10px';
                h5.style.color = 'red';
                
                p.innerHTML = 'batafsil';
                p.style.float = 'right';
                p.style.marginRight = '20px';
                p.style.fontSize = '15px';
                p.style.color = 'green';
                p.style.cursor = 'pointer';
                p.style.marginBottom = '20px';
                p.style.paddingBottom = '30px';
                p.addEventListener('click', () =>{
                    localStorage.setItem('announ_id', annmain.id)
                window.location.href = '../html/main_page.html'
                })
                            
                i1.className += 'fa fa-user';
                i1.style.color = 'blue';
                i1.style.display = 'inline-block';
                i1.style.marginTop = '5px';
                i1.style.marginLeft = '10px';
                span.innerHTML = annmain.imya;
                span.style.display = 'inline-block';
                span.style.marginLeft = '5px';
                span.style.fontSize = '12px'
                
                i2.className += 'fa fa-hand-o-right';
                i2.style.color = 'blue';
                i2.style.display = 'inline-block';
                i2.style.marginTop = '5px';
                i2.style.marginLeft = '15px';
                span2.innerHTML = annmain.yunalish;
                span2.style.marginLeft = '5px';
                span2.style.fontSize = '12px'

                i3.className += 'fa fa-calendar';
                i3.style.marginLeft = '10px';
                i3.style.color = 'blue';
                i3.style.marginLeft = '10px';
                span3.innerHTML = annmain.sana;
                span3.style.fontSize = '12px';
                span3.style.marginLeft = '5px';
                
                i4.className += 'fa fa-clock-o ';
                i4.style.color = 'blue';
                i4.style.marginLeft = '30px';
                span4.innerHTML = annmain.vaqt;
                span4.style.fontSize = '12px';
                
                i5.className += 'fa fa-wifi';
                i5.style.color = 'blue';
                i5.style.marginLeft = '30px';
                span5.innerHTML = annmain.turi;
                span5.style.fontSize = '12px';

                i6.className += 'fa fa-phone';
                i6.style.color = 'blue';
                i6.style.marginLeft = '10px';
                span6.innerHTML = annmain.tel;
                span6.style.fontSize = '12px';
                span6.style.marginLeft = '5px';

                span7.innerHTML = annmain.tel1;
                span7.style.fontSize = '12px';
                span7.style.color = 'blue';
                span7.style.marginLeft = '30px';

                i1.append(span);
                i2.append(span2);
                i3.append(span3);
                i4.append(span4);
                i5.append(span5);
                i6.append(span6);
                
                div4.append(i1);
                div2.append(h5, p);
                div3.append(i1, i2)
                div4.append(i3, i4, i5)
                div5.append(i6, span7);
                div1.append(img, div2, div3, div4, div5)
                
                demo.append(div1)
            }
        };
    });