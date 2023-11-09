const url = (`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`);


const main = document.querySelector(`main`);
console.log(main)

const names = [];

const puppies = async () => {
    const responce = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`);
    const jsonInfo = await responce.json();
    //console.log(jsonInfo.data.players);
    const dogList = jsonInfo.data.players;
    //console.log(dogList)
    renderAllPuppies(dogList);
    console.log(dogList)

    const html = `
<h2> Puppy Cards</h2>

<img width="200" height="200" src="http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg" alt="img">
<h2>${dogList[0]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg" alt="img">
<h2>${dogList[1]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg" alt="img">
<h2>${dogList[2]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg" alt="img">
<h2>${dogList[3]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg" alt="img">
<h2>${dogList[4]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg" alt="img">
<h2>${dogList[5]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Gina-PBXVI.jpg" alt="img">
<h2>${dogList[6]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_962/s_f/o_1/cx_25/cy_0/cw_962/ch_1443/APL/uploads/2019/12/Huck-PBXVI.jpg" alt="img">
<h2>${dogList[7]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg" alt="img">
<h2>${dogList[8]}</h2>
<img width="200" height="200" src="http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg" alt="img">
<h2>${dogList[9]}</h2>


`
main.innerHTML = html;
main.append(dogList)



    
}

const getSinglePuppy = async (name) => {
    responce = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players/${name}`)
    const singlePuppyInfo = await responce.json();
    console.log(singlePuppyInfo);


}

const renderAllPuppies = (listOfPuppies) => {
    
    const h2 = document.createElement(`h2`);
    h2.innerText = `Puppy Cards`;
    main.appendChild(h2);

    const puppyListElements = listOfPuppies.map((singlePuppy) => {
        return `<li>${singlePuppy.name}</li>`;
    });

    const ol = document.createElement(`ol`);
    ol.innerHTML = puppyListElements.join(``);
    
    main.appendChild(ol);

    const puppyListItems = document.querySelectorAll(`li`);
    puppyListItems.forEach((singlePuppyItem) => {
        singlePuppyItem.addEventListener(`click`, (event) => {
            getSinglePuppy(event.target.innerText);
        }); 

    })



}

puppies();

