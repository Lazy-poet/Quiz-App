import React, { Component } from 'react';
import Option from './Option/Option';
import classes from './Options.module.css'

//import CheckCircleOutlineIcon '@material-ui/icons/CheckCircleOutline';
//import CancelIcon from '@material-ui/icons/Cancel';

class Options extends Component {
  state = {
    quizData: this.props.quizData,
    disabled: false
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.quizData !== nextProps.quizData) {
      this.setState({ quizData: nextProps.quizData });
      console.log("Props got updated")
    }
  }

  correctAnswerHandler = () => {

  }

  showAnswer = (idx, id) => {
    const answer = this.state.quizData.answer;

    const data = [...this.state.quizData.answers];
    const index = this.state.quizData.answers.findIndex(result => result.option === answer)
    if (id === data[index].option) {
      data[index] = {
        ...data[index], status: 'Correct'
      };
      const quizData = { ...this.state.quizData, answers: data }
      this.setState({ quizData: quizData });
      this.props.correct();
    }
    else {
      data[idx] = {
        ...data[idx], status: 'Wrong'
      };
      data[index] = {
        ...data[index], status: 'Correct'
      }
      const quizData = { ...this.state.quizData, answers: data }
      this.setState({ quizData: quizData });
      this.props.wrong();
    }
    console.log('SHowanswer done!');
    this.props.showNext()
  }
  clickHandler = (e, idx, id) => {
    this.showAnswer(idx, id);
    console.log(e.target.dataset)
  }
  render() {

    return (
      <> {
        this.props.quizData.length !== 0 ? (<div className={classes.Options}>
          <Option
            disabled={this.props.disabled}
            btntype={this.state.quizData.answers[0].status}
            click={(e) => this.clickHandler(e, 0, this.state.quizData.answers[0].option)}
          >
            <span>A.</span> {this.state.quizData.answers[0].option} 
          </Option>
          <Option
            disabled={this.props.disabled}
            btntype={this.state.quizData.answers[1].status}
            click={(e) => this.clickHandler(e, 1, this.state.quizData.answers[1].option)}
          >
            <span>B.</span> {this.state.quizData.answers[1].option}  CheckCircleOutlineIcon         </Option>
          <Option
            disabled={this.props.disabled}
            btntype={this.state.quizData.answers[2].status}
            click={(e) => this.clickHandler(e, 2, this.state.quizData.answers[2].option)}
          >
            <span>C.</span>{this.state.quizData.answers[2].option}  CheckCircleOutlineIcon         </Option>
          <Option
            disabled={this.props.disabled}
            btntype={this.state.quizData.answers[3].status}
            click={(e) => this.clickHandler(e, 3, this.state.quizData.answers[3].option)}
          >
            <span>D.</span> {this.state.quizData.answers[3].option}
          </Option>
        </div>) : <p>Loading Questions</p>}</>
    );
  }
};

export default Options;