export class Model {
    constructor() {
        this.phonebookContainerId = 'phoneBook'
        this.contactContainerId = 'contact_item'
    }

    setData(contactData){
        if(!this.getData()){
         const arr = [];
        } else {

        }

        localStorage.setItem(this.phonebookContainerId,JSON.stringify(contactData))
    }

    getData(){
        return JSON.parse(localStorage.getItem(this.phonebookContainerId));
    }
}
