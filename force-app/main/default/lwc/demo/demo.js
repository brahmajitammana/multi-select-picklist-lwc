import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {

    //This array can be anything as per values
    values =    [{label : 'New', value : 'New', selected : false},
                {label : 'In progress', value : 'In Progress', selected : false},
                {label : 'Completed', value : 'Completed'},
                {label : 'Canceled', value : 'Canceled'},
                {label : 'Aborted', value : 'Aborted'}];

    //To get the picklist values in container component
    fetchSelectedValues(){
        let selections = this.template.querySelector('c-mutli-select-picklist');
        console.log(selections.values);
    }
}