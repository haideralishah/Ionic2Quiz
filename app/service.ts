/**
 * Created by Haider Ali Shah on 6/14/2016.
 */
import { Injectable } from '@angular/core';

@Injectable()

export class QuizService {
    quizData : any[] =  [
        {
            nameOfTest : "Apptitude",
            testMarks: 15,
            testDescription: "Quiz has 30 questions from Wily HTML and CSS by Jon Ducket." ,
            testTime: 70,
            passingMarks:10,
            Questions: [
                {
                    QuiestionNo: 1,
                    questionTitle: "",
                    Question: "Who was the founding father of Pakistan?",
                    correctAns: 0,
                    options: [
                        {option: "Muhammad Ali Jinnah", ansValue: true, marks: 5},
                        {option:"Allama Iqbal", ansValue: false, marks:0},
                        {option:"Liaquat Ali Khan",ansValue: false, marks:0},
                        {option:"Altaf Hussain", ansValue:false, marks:0}
                    ],
                    ans: 1
                },
                {
                    QuiestionNo: 2,
                    questionTitle: "Simplify the following:",
                    Question: "3 x 3 + 2 / 2 + 1",
                      correctAns: 1,
                    options: [
                        {option: "7", ansValue: false, marks: 0},
                        {option: "11", ansValue: true, marks: 5},
                        {option: "13", ansValue: false, marks: 0},
                        {option: "4", ansValue: false, marks: 0}
                    ],
                    ans: 2

                },
                {
                    QuiestionNo: 3,
                    questionTitle: "Change the voice",
                    Question: "He has eaten the food.",
                      correctAns: 0,
                    options: [
                        {option: "Food has been eaten by him", ansValue: true, marks: 5},
                        {option: "Food has eaten by him", ansValue: false, marks: 0},
                        {option: "Food has eat him", ansValue: false, marks: 0},
                        {option: "Food has been eated by him", ansValue: false, marks: 0}
                    ],
                    ans: 1
                }]

        },

        {
            nameOfTest : "Mathematics",
            testDescription: "Quiz has 30 questions from Mathematics 10." ,
            testMarks: 20,
            testTime: 60,
            passingMarks:15,
            Questions: [
                {
                    QuiestionNo: 1,
                    questionTitle: "Find the Square root of the following",
                    Question: "625",
                      correctAns: 3,
                    options: [
                        {option: "5", ansValue: false, marks: 0},
                        {option: "125", ansValue: false, marks: 0},
                        {option: "75", ansValue: false, marks: 0},
                        {option: "25", ansValue: true, marks: 5}
                    ],
                    ans: 4
                },
                {
                    QuiestionNo: 2,
                    questionTitle: "Simplify the following:",
                    Question: "3 x 3 + 2 / 2 + 1",
                      correctAns: 1,
                    options: [
                        {option: "7", ansValue: false, marks: 0},
                        {option:"11", ansValue: true, marks: 5},
                        {option: "13", ansValue: false, marks: 0},
                        {option: "4", ansValue: false, marks: 0}
                    ],
                    ans: 2
                },
                {
                    QuiestionNo: 3,
                    questionTitle: "Find the GCF",
                    Question: "125 , 625",
                      correctAns: 2,
                    options: [
                        {option: "5", ansValue: false, marks: 0},
                        {option:"25", ansValue: false, marks: 0},
                        {option: "125", ansValue: true, marks: 5},
                        {option: "625", ansValue: false, marks: 0}
                    ],
                    ans: 3
                },
                {
                    QuiestionNo: 4,
                    questionTitle: "Choose the correct answer.",
                    Question: "Select the largest nuumber",
                      correctAns: 0,
                    options: [
                        {option: "0", ansValue: true, marks: 5},
                        {option: "-0.1", ansValue: false, marks: 0},
                        {option: "-0.3", ansValue: false, marks: 0},
                        {option: "-0.2", ansValue: false, marks: 0}
                    ],
                    ans: 1
                }]

        }

    ];

    userName : string = 'Haider';

}
