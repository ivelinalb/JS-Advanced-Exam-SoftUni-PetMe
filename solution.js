function solve() {

    let addBtnElement = document.querySelector('#container > button');
    let allInputs = Array.from(document.querySelectorAll('#container > input'));
    let [nameElement, ageElement, kindElement, currentOwnerElement] = allInputs;
    let ulAdoptionEl = document.querySelector('#adoption > ul');
    let ulAdoptedEl = document.querySelector('#adopted > ul')


    addBtnElement.addEventListener('click', e => {
        e.preventDefault();
        if(!allInputs.every(x => x.value)) { return; }
        if(!Number(ageElement.value)) { return; }

        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let ownerElemet = document.createElement('span');
        let contactBtnElement = document.createElement('button');

        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        ownerElemet.innerText = `Owner: ${currentOwnerElement.value}`;
        contactBtnElement.innerText = `Contact with owner`;

        ulAdoptionEl.appendChild(liElement);
        liElement.appendChild(pElement);
        liElement.appendChild(ownerElemet);
        liElement.appendChild(contactBtnElement);

        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        currentOwnerElement.value = '';


        contactBtnElement.addEventListener('click', e => {
            contactBtnElement.remove();

            let toAdoptElements = document.createElement('div');
            let newOwnerNameElement = document.createElement('input');
            let newOwnerBtnElement = document.createElement('button');

            newOwnerNameElement.placeholder = `Enter your names`;
            newOwnerBtnElement.innerText = `Yes! I take it!`;

            liElement.appendChild(toAdoptElements);
            toAdoptElements.appendChild(newOwnerNameElement);
            toAdoptElements.appendChild(newOwnerBtnElement);


            newOwnerBtnElement.addEventListener('click', e => {

                let newOwnerName = newOwnerNameElement.value;

                if(newOwnerName === '') { return; }

                ulAdoptedEl.appendChild(liElement);
                ownerElemet.remove();
                newOwnerNameElement.remove();
                newOwnerBtnElement.remove();

                let checkedBtnElement = document.createElement('button');
                let newOwner = document.createElement('span');

                checkedBtnElement.innerText = `Checked`;
                newOwner.innerText = `New Owner: ${newOwnerName}`;

                liElement.appendChild(checkedBtnElement);
                liElement.appendChild(newOwner);

                    checkedBtnElement.addEventListener('click', e => {
                        liElement.remove();
                    });

            });

        });

    });

}
