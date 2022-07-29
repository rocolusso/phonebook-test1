export class View {
    renderAddForm(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'add_form');
        formElement.innerHTML = `
                <input name="name" placeholder="Name" class="contact_name">
                <input name="phone" placeholder="Phone number" type="tel" class="contact_number">
                <input name="position" placeholder="Position" class="contact_position">
                <button class="btn_add" type="submit">Add contact</button>`;
        phonebookContainer.append(formElement);
    }
    renderSearchContact(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('search_contact');
        formElement.setAttribute('id', 'search');
        formElement.innerHTML = `
            <input type="search" placeholder="Search" class="search">
            <select class="search_select">
                <option value="name">Name</option>
                <option value="number">Number</option>
                <option value="position">Position</option>
            </select>
            <button class="btn_clear">Clear</button>`;
        phonebookContainer.append(formElement);
    }

    renderChangeForm(phonebookContainerId , data) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'change_form');
        formElement.innerHTML = `
            <input name="name"  placeholder=${data.name} class="contact_name">
            <input name="phone" placeholder=${data.phone} type="tel" class="contact_number">
            <input name="position" placeholder=${data.position} class="contact_position">
            <button class="btn_add" type="submit">Change contact</button>
        `;
        phonebookContainer.append(formElement);
    }

    renderInfo(phonebookContainerId, data) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('about_contact_form')
        infoContainer.setAttribute('id', 'info_container')
        infoContainer.innerHTML =`
        <fieldset>
            <legend><b>INFO:</b> </legend>
            <h3 type="text" class="about_contact_name">${data.name}</h3>
            <p type="text" class="about_contact_number" >${data.phone}</p>
            <p type="text" class="about_contact_position" >${data.position}</p>
            <div class="about_contact_btns">
                <button class="about_contact_back">Back</button>
            </div>
        </fieldset>
        `
        phonebookContainer.append(infoContainer)
    }

    renderNoContact(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const noContactContainer = document.createElement('div');
        noContactContainer.classList.add('about_contact_form')
        noContactContainer.setAttribute('id', 'nocontact')
        noContactContainer.innerHTML =`
        <p type="text" class="about_contact_number">No contacts</p>
        `
        phonebookContainer.append(noContactContainer)
    }

    renderContactsContainer(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const contactsContainer = document.createElement('div');
        contactsContainer.classList.add('about_contact_form')
        contactsContainer.setAttribute('id', 'contact_container')
        contactsContainer.innerHTML =`
            <fieldset id="contact_item">
                <legend><b>CONTACTS :</b> </legend>
            </fieldset>
        `
        phonebookContainer.append(contactsContainer)
    }

    renderContactsItem(contactContainerId, data) {
        const contactsItem = document.createElement('div');
        contactsItem.setAttribute('data-id',`${data.id}`)
        contactsItem.classList.add('contact_item');
        contactsItem.innerHTML =`
        <h3 type="text" class="about_contact_name" >${data.name}</h3>
        <p type="text" class="about_contact_number">${data.phone}</p>
        <p type="text" class="about_contact_position">${data.position}</p>
        <div class="about_contact_btns">
            <button class="about_contact_change">Change</button>
            <button class="about_contact_info">Info</button>
            <button class="about_contact_remove">Remove</button>
        </div>
        `
        const contactContainer = document.getElementById(contactContainerId)
        contactContainer.append(contactsItem)
    }

}
