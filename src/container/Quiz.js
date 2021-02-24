import React, { Component } from 'react';
import axios from 'axios';
import Question from '../components/Question/Question'
import classes from './Quiz.module.css'
import Options from '../components/Options/Options';
import FirstPage from './Pages/FirstPage/FirstPage';
import LastPage from './Pages/LastPage/LastPage'
import Button from '../components/UI/Button/Button';
import image from '../assets/undraw_adventure_4hum.svg'
class Quiz extends Component {

  state = {
    data: [],
    start: false,
    quizData:[],
    estioqunsAnswered: -1,
    answeredCorrectly: 0,
    showNext: true,
    endQuiz: false,
    wrongAnswer: false,
    showImage: false
  }

  fetchData = async () =>{
  
    try{ const resp = await axios.get('https://restcountries.eu/rest/v2/all')
          const newData = resp.data.map(item=>{
        //console.log(item.currencies)
        return {name: item.name, capital: item.capital, flag: item.flag, continent: item.region}
      })
      this.setState({data: newData})
      console.log(this.state.data);
      
    }
    
    catch (err){ console.log(err)}
  }
  componentDidMount(){
    
  this.fetchData();
 
  }
  
startQuiz = () =>{
    this.setState({start: true, showImage: true});
    this.nextQuestionHandler()
    console.log(this.state.start)
  }

  restartQuiz = () =>{
    //window.location.reload(false);
    this.setState({start: false, endQuiz: false, answeredCorrectly: 0, showNext: true, wrongAnswer: false})
  }

  capitalQuestionHandler = () => {
  const index = Math.floor(Math.random() * 200 + 1);
  const capital = this.state.data[index].capital;
  const answer = this.state.data[index].name;
  const list = [{option: answer, status: ''}, {option: this.state.data[index+1].name, status: ''}, {option: this.state.data[index+2].name, status: ''}, {option: this.state.data[index+3].name, status: ''}]
  const options= list.sort(()=> Math.random() - 0.5)
  this.setState({quizData:{value: capital, type: 'capital', question: 'is the capital of', status: '', answers: options, answer:answer}})
  console.log(options)
  console.log(index)
  }

  flagQuestionHandler = () => {
    const index = Math.floor(Math.random() * 200 + 1);
  const flag = this.state.data[index].flag;
  const answer = this.state.data[index].name;
  const list = [{option: answer, status: ''}, {option: this.state.data[index+1].name, status: ''}, {option: this.state.data[index+2].name, status: ''}, {option: this.state.data[index+3].name, status: ''}]
  const options= list.sort(()=> Math.random() - 0.5)
  this.setState({quizData:{question: "Which country does this flag belong to?", status: '', type: 'flag', value: flag, answers: options, answer:answer}})
  }

    nextQuestionHandler = () =>{
      // let functions = [this.capitalQuestionHandler(), this.flagQuestionHandler()];
      // let list = functions.sort(()=> Math.random() - 0.5);
      // console.log(list)
      // return list[1]
      let i = Math.floor(Math.random() * 20);
      if(i > 10) this.capitalQuestionHandler();
      else this.flagQuestionHandler();
      console.log(i);
      this.setState(state=>({
        questionsAnswered: state.questionsAnswered + 1,
        showNext: !state.showNext
      }))

      if(this.state.wrongAnswer){
        this.endQuiz();
        this.setState({showImage: false})
      }
    }
    

    answeredCorrectly = () => {
      this.setState(state=>({answeredCorrectly: state.answeredCorrectly + 1}))
    }
    showNext = () => {
      this.setState({showNext: true})
    }
    wrongAnswer = () =>{
      this.setState({wrongAnswer: true})
    }
  endQuiz =()=>{
    this.setState({endQuiz: true})
  }
  render(){

    const Next = this.state.showNext ? (
      <div className={classes.Next}> 
     <Button className={classes.Next} click={this.nextQuestionHandler}>
        Next
      </Button> 
      </div>
    ): null
      let display = (
        <div className={classes.Quiz}>
          <div className={classes.Text}>Country Quiz</div>
    { !this.state.start ? <FirstPage click={this.startQuiz}/>: (
    <>
    {this.state.showImage ? <img src={image} className={classes.TopImage} alt="" /> : null}
     <Question data={this.state.data} quizData={this.state.quizData}/>
   <Options wrong={this.wrongAnswer} quizData={this.state.quizData} disabled={this.state.showNext} showNext = {this.showNext} correct ={this.answeredCorrectly} /> 
     {Next}
   </>)}</div>
    
      )
      if(this.state.endQuiz && this.state.start){
        display= (<div className={classes.Quiz}>
          <div className={classes.Text}>Country Quiz</div>
          <LastPage className={classes.LastPage} correct={this.state.answeredCorrectly} click={this.restartQuiz} /></div>)
      }
  return display
    }
};

export default Quiz;