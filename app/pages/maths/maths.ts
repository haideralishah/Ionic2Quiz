import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/maths/maths.html'
})
export class MathsPage {
    constructor(private _navController: NavController) {
        console.log("maths page");
    }

    /*
     pushPage(){
     this._navController.push(SomeImportedPage, { userId: "12345"});
     }
     */
}
