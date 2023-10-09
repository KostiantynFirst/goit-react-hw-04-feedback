import { useState } from "react";
import { Container, FeedbackLabel, FeedbackHeading } from "./App.styled";
import { FeadbackOptions } from "components/FeadbackOptions/FeadbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const  onleaveFeadback = option => {
      switch (option) {
        case 'good':
          setGood(good + 1);
          break;
          case 'neutral':
          setNeutral(neutral + 1);
          break;
          case 'bad':
          setBad(bad + 1);
          break;

        default:
          break;
      }
          }

    return (
      <Container>
      <FeedbackLabel>
          <FeedbackHeading>Please leave feedback</FeedbackHeading>
      </FeedbackLabel>
      
    <FeadbackOptions options={['good', 'neutral', 'bad']} onleaveFeadback={onleaveFeadback}/>

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


{/* export class App extends Component {

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

} */}