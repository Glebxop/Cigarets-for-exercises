/**
 * Created by Hleb_Kharoshyn on 18.05.22.
 */

import {LightningElement, api, wire} from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import myMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';


export default class InputNumberModal extends LightningElement {

    @wire(MessageContext)
    messageContext;

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
        const payload = { message : this.count };
        publish(this.messageContext, myMessageChannel, payload);
        this.count = null;
        this.closeModal();
    }

}