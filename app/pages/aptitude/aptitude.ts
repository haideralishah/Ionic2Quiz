/**
 * Created by Haider Ali Shah on 6/14/2016.
 */


import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/aptitude/aptitude.html'
})
export class AptitudePage {
    constructor(private _navController: NavController) {
    }
   
    /*
     pushPage(){
     this._navController.push(SomeImportedPage, { userId: "12345"});
     }
     */
}
