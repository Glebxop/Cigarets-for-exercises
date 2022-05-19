 /**
 * Created by Hleb_Kharoshyn on 18.05.22.
 */

import {LightningElement, wire} from 'lwc';
import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
import myMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';

export default class CigarettesNumberDisplay extends LightningElement {
    subscription = null;
    outputMessage = 0;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                myMessageChannel,
                (message) => this.handleMessageChannel(message)
            );
        }
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessageChannel(message){
        this.outputMessage = this.outputMessage + parseInt(message.message);
    }
}