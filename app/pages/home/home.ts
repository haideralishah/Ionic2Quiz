import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {AptitudePage} from '../aptitude/aptitude';
import {MathsPage} from '../maths/maths';
import {TestCondition} from '../testCondition/testCondition';
@Component({
    templateUrl: 'build/pages/home/home.html'

})
export class HomePage {
    constructor(private nav: NavController) {
    }
    quizSelection(quizName: string){

        if(quizName == 'aptitude'){
            
            this.nav.push(TestCondition, 0);
        }
        else if(quizName == 'maths'){
           
            this.nav.push(TestCondition, 1);
        }
    }
    /*
     pushPage(){
     this._navController.push(SomeImportedPage, { userId: "12345"});
     }
     */
}
