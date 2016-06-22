/**
 * Created by Haider Ali Shah on 6/14/2016.
 */
import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {QuizService} from '../../service';
import {StartTest} from '../startTest/startTest';


@Component({
    templateUrl: 'build/pages/testCondition/testCondition.html',
    providers: [QuizService]
})
export class TestCondition {

    quizBank: any [];
    testDescription: string;
    testTime: number;
    testName: string;

    constructor(private nave: NavController, serve: QuizService, public navpar: NavParams) {
        this.quizBank = serve.quizData[this.navpar.data];
        console.log(this.quizBank);
        this.testDescription = serve.quizData[this.navpar.data].testDescription;
        this.testTime = serve.quizData[this.navpar.data].testTime;
        this.testName = serve.quizData[this.navpar.data].nameOfTest;
        console.log(this.testDescription, this.testTime, this.testName);       
    }
    takeQuiz(testName: string){
      if(testName == 'Apptitude'){
            
            this.nave.push(StartTest, 0);
        }
        else if(testName == 'Mathematics'){
           
            this.nave.push(StartTest, 1);
        }


    }



    /*
     pushPage(){
     this._navController.push(SomeImportedPage, { userId: "12345"});
     }
     */
}
