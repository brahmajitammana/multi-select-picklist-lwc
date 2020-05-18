import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    fetchSelectedValues(){
        let selections = this.template.querySelector('c-mutli-select-picklist');
        console.log(selections.values);
    }
}