import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {QuizService} from '../../service';
import {RoundOfPipe} from '../../pipe/pipe';


@Component({
    templateUrl: 'build/pages/result/result.html',
    providers: [QuizService],
    pipes: [RoundOfPipe]
})
export class Result {
  result: any;
  passingMarks: number;
  totalPercentage: any;
  obtainedMarks: string;
  passingmarks: number;
  totalMarks: number;
  resultStatement: string = "Congratulations! You have passed";
  constructor(private nav: NavController, public navParams: NavParams, serve: QuizService) {
    this.result = navParams.data;
  
    this.obtainedMarks= 'Your score is ' + this.result.obtainedMarks;
    this.passingMarks= this.result.passingMarks;

    this.totalMarks= this.result.testMarks;

    this.totalPercentage= (this.result.obtainedMarks / this.result.testMarks) * 100;

    if (this.result.obtainedMarks < this.passingmarks){
      this.resultStatement = "Failed, need to work hard";
    }
  }
}
