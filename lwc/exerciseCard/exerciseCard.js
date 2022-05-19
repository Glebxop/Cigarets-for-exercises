/**
 * Created by Hleb_Kharoshyn on 17.05.22.
 */

import {api, LightningElement} from 'lwc';

export default class ExerciseCard extends LightningElement {

    @api
    exercise;

    get id() {
        return this.exercise.Id;
    }

    get name() {
        return this.exercise.Name;
    }

    clickCard() {
        this.template.querySelector("c-input-number-modal").openModal();
    }

}