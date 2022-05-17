/**
 * Created by Hleb_Kharoshyn on 17.05.22.
 */

public with sharing class ExerciseForCigaretteController {

    @AuraEnabled(Cacheable=true)
    public static List<Exercise__c> getExercises(){
        System.debug('DDDEBUG');
        List<Exercise__c>ex = [SELECT Id, Name FROM Exercise__c];
        System.debug(ex);
        return [SELECT Id, Name FROM Exercise__c];
    }
}