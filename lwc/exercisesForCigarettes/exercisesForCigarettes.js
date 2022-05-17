/**
 * Created by Hleb_Kharoshyn on 16.05.22.
 */

import {LightningElement, wire} from 'lwc';
import getExercises from '@salesforce/apex/ExerciseForCigaretteController.getExercises';

export default class ExercisesForCigarettes extends LightningElement {
    exercises;

    @wire(getExercises)
    wiredAccounts({data, error}) {
        if (data) {
            console.log('DATA')
            this.exercises = data;
            console.log(JSON.parse(JSON.stringify(this.exercises)));
        } else if (error) {
            console.log('Error');
            console.log(error);
        }
    }

}