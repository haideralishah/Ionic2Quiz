import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {QuizService} from '../../service';
import {Result} from '../result/result';


@Component({
    templateUrl: 'build/pages/startTest/startTest.html',
    providers: [QuizService]

})
export class StartTest {
    Questions: any[];
    indexOfQuestion: number = 0;
    ans: any[];
    questionNo: number = 0;
    answerValue = null;
    answersNumber: number = 0;
    answerIndex: number = 0;
    correctAnsInd: any;
    serve :any;
    navParamsdata: any;
    lengthOfQuizQuestions: any;
    constructor(private nav: NavController, public navParams: NavParams, serve: QuizService) {
       // console.log(navParams.data);
       this.navParamsdata = navParams.data;
       this.serve = serve;
        this.Questions = serve.quizData[navParams.data].Questions[this.indexOfQuestion];
        this.ans = serve.quizData[navParams.data].Questions[this.indexOfQuestion].options;
        this.correctAnsInd = serve.quizData[navParams.data].Questions[this.indexOfQuestion].correctAns;
        this.lengthOfQuizQuestions = serve.quizData[navParams.data].Questions.length;
      //  console.log(this.ans);
      //  console.log(this.lengthOfQuizQuestions);


    }
    next(opt: any) {
        if(opt == this.ans[this.correctAnsInd].option){
        this.answersNumber += this.ans[this.correctAnsInd].marks;
        console.log(this.answersNumber);
        }
      //  console.log(this.indexOfQuestion);
      //  console.log(this.lengthOfQuizQuestions);
        if(this.indexOfQuestion + 1 < this.lengthOfQuizQuestions){
          this.indexOfQuestion++;
          this.Questions = this.serve.quizData[this.navParamsdata].Questions[this.indexOfQuestion];
          this.ans = this.serve.quizData[this.navParamsdata].Questions[this.indexOfQuestion].options;
          this.correctAnsInd = this.serve.quizData[this.navParamsdata].Questions[this.indexOfQuestion].correctAns;
          this.answerIndex++;
        }
        else{
          console.log(this.answersNumber, 'result');
          this.nav.push(Result, {
            obtainedMarks: this.answersNumber,
            passingMarks: this.serve.quizData[this.navParamsdata].passingMarks,
            testMarks:this.serve.quizData[this.navParamsdata].testMarks
          });
        }
    }


    /*
     pushPage(){
     this._navController.push(SomeImportedPage, { userId: "12345"});
     }
     */
}
