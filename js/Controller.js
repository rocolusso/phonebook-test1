export class Controller {
    constructor(view, model) {
        this.view = view
        this.model = model
    }

    start() {
        this.view.renderAddForm(this.model.phonebookContainerId)
        this.view.renderSearchContact(this.model.phonebookContainerId)
        this.view.renderNoContact(this.model.phonebookContainerId)

        document.getElementById('add_form').addEventListener('submit', this.submitHandler);
    }

    submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const inputs = Array.from(e.target.querySelectorAll('input'));

        const getData = inputs.reduce((acc, item) => {
             acc[item.name] = item.value
            return acc;
        },{})

        this.model.setData(getData);
        const data = this.model.getData();


        this.view.renderContactsContainer(this.model.phonebookContainerId)
        this.view.renderContactsItem(this.model.contactContainerId, data)
        e.target.reset();
    }
}
