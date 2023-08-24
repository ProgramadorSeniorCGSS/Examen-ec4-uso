import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntast4',
  templateUrl: './preguntast4.component.html',
  styleUrls: ['./preguntast4.component.scss']
})
export class Preguntast4Component {
  public name: string = "";
  public questionList: any[] = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(public questionService: PreguntasService, private router: Router) {

   }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    //this.questionService.getQuestionJson().subscribe(res => {this.questionList = res.questions;});
    this.questionService.getQuestionFire().subscribe(res => {this.questionList = res})
    
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  salir(){
    this.router.navigate(['principal/test4']);
  }

  answer(currentQno: number, option: any) {

    if (option.correct) {
      //this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
        if(currentQno === this.questionList.length){
          this.isQuizCompleted = true;
          this.stopCounter();
          this.points = (this.correctAnswer*10)/(this.questionList.length);
        }
      }, 1000);

    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
        if(currentQno === this.questionList.length){
          this.isQuizCompleted = true;
          this.stopCounter();
          this.points = (this.correctAnswer*10)/(this.questionList.length);
        }
      }, 1000);


    }

  }

  startCounter() {
    
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.getProgressPercent();
          if(this.currentQuestion === this.questionList.length){
            this.isQuizCompleted = true;
            this.stopCounter();
            this.points = (this.correctAnswer*10)/(this.questionList.length);
          }
        }

      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);

  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    //this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}
