/**
 * Created by Hleb_Kharoshyn on 18.05.22.
 */

import {LightningElement, api} from 'lwc';

export default class InputNumberModal extends LightningElement {

    isShowModal = false;
    count;

    @api
    openModal() {
        this.isShowModal = true;
    }

    closeModal() {
        this.isShowModal = false;
    }

    handleInputChange(event) {
        this.count = event.detail.value;
    }

    submitInput(){
        console.log(this.count);
    }

}