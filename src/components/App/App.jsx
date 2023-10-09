import { Component } from "react";
import { Container, FeedbackLabel, FeedbackHeading } from "./App.styled";
import { FeadbackOptions } from "components/FeadbackOptions/FeadbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

export class App extends Component {

  static defaultProps = {
      initialValue: 0,
    };

    state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue
    }

    onleaveFeadback = option => {
      this.setState(prevState => ({
        [option]: prevState[option] + 1,
      }))
    }

    
    // countTotalFeedback(good, neutral, bad){
    //   let total = (good + neutral + bad);
    //   return total;
    // };

    // countPositiveFeedbackPercentage(good, neutral, bad){
    //   let positiveFeedback = Math.round(good / (good + neutral + bad) * 100);
    //   // console.log(positiveFeedback);
    //   return positiveFeedback;
    // }


    render() {
      const { good, neutral, bad } = this.state;
  
      return (
          <Container>
          <FeedbackLabel>
              <FeedbackHeading>Please leave feedback</FeedbackHeading>
          </FeedbackLabel>
          
        <FeadbackOptions options={['good', 'neutral', 'bad']} onleaveFeadback={this.onleaveFeadback}/>

        {
          good || neutral || bad ?  
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad} /> 
              :
            <Notification
              message="There is no feedback" 
         
        />
        
        }

      </Container>
      );      

    }

}
