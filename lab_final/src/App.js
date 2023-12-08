import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: 'Which country is the reigning FIFA World Cup champion? (Soccer)',
      options: ['Australia', 'France', 'Germany', 'Argentina'],
      correctAnswer: 'Argentina',
      feedback: {
        'Australia': 'Australia have never won the FIFA World Cup, they have won an Asian Cup in 2015 but no World Cup.',
        'France': 'France won in 2018, and were runners-up in 2022, but not champions.',
        'Germany': 'Germany is a powerhouse in football, but not the reigning champion.',
        'Argentina': 'Correct! Argentina are the current reigning champions after winning the penalty shootout against France in the final.', // Correct
      },
    },
    {
      question: 'Which country is the reigning ICC World Cup champion? (Cricket)',
      options: ['Pakistan', 'India', 'Australia', 'England'],
      correctAnswer: 'Australia',
      feedback: {
        'Pakistan': 'Pakistan have not won an ICC World Cup since 1992',
        'India': 'India won in 2011, but are not the current champions.',
        'Australia': 'Correct, Australia defeated hosts India in the 2023 final 3 weeks ago!', // Correct
        'England': 'England won the ICC World Cup in 2019, but are no longer the reigning champions.',
      },
    },
    {
      question: 'Who are the reigning UEFA Champions League champions? (Soccer)',
      options: ['Real Madrid', 'FC Barcelona', 'Bayern Munich', 'Liverpool', 'Manchester City'],
      correctAnswer: 'Manchester City',
      feedback: {
        'Real Madrid': 'Real Madrid have won the competition a record 14 times most recently in 2022 but not in 2023.',
        'FC Barcelona': 'FC Barcelona have not won the Champions League since 2015.',
        'Bayern Munich': 'Bayern Munich have not won the Champions League since 2020', 
        'Manchester City': 'Correct! Manchester City completed a historic treble in 2023.', // Correct
      },
    },
    {
      question: 'Who won the 2023 NBA Finals? (Basketball)',
      options: ['Los Angeles Lakers', 'Miami Heat', 'Denver Nuggets', 'Golden State Warriors'],
      correctAnswer: 'Denver Nuggets',
      feedback: {
        'Los Angeles Lakers': 'The Lakers won the 2020 NBA Finals, not 2023.',
        'Miami Heat': 'The Heat reached the finals in 2023 but did not win.',
        'Denver Nuggets': 'Correct! The Nuggets won the 2023 NBA Finals.', // Correct
        'Golden State Warriors': 'The Warriors won recent titles, most recently in 2022, but not in 2022.',
      },
    },
    {
      question: 'Who won the 2023 Wimbledon Men\'s Singles title? (Tennis)',
      options: ['Novak Djokovic', 'Roger Federer', 'Rafael Nadal', 'Carlos Alcaraz'],
      correctAnswer: 'Carlos Alcaraz',
      feedback: {
        'Novak Djokovic': 'Djokovic has won 7 Wimbledon Men\'s Singles titles, most recently in 2022, but not 2023.',
        'Roger Federer': 'Federer has won 8 Wimbledon Men\'s Singles titles, most recently in 2017, but not 2023.',
        'Rafael Nadal': 'Federer has won 2 Wimbledon Men\'s Singles titles, most recently in 2010, but not 2023.',
        'Carlos Alcaraz': 'Correct! Alcaraz won the 2023 Wimbledon Men\'s Singles title.', // Correct
      },
    },
    {
      question: 'Who won the 2023 Tour de France? (Cycling)',
      options: ['Jonas Vingegaard', 'Tadej Pogačar', 'Geraint Thomas', 'Chris Froome'],
      correctAnswer: 'Tadej Pogacar',
      feedback: {
        'Jonas Vingegaard': 'Correct! Vingegaard won the 2023 Tour de France.', // Correct
        'Tadej Pogačar': 'Pogačar won the 2021 Tour de France, not in 2023.',
        'Geraint Thomas': 'Thomas won the 2018 Tour de France, not in 2023.',
        'Chris Froome': 'Froome won multiple Tour de France titles but not in 2023.',
      },
    },
    {
      question: 'Which team won Super Bowl LVII in 2023? (American Football)',
      options: ['Kansas City Chiefs', 'Tampa Bay Buccaneers', 'Philadelhpia Eagles', 'Buffalo Bills'],
      correctAnswer: 'Kansas City Chiefs',
      feedback: {
        'Kansas City Chiefs': 'Correct! The Chiefs won a 3rd Super Bowl.', // Correct
        'Tampa Bay Buccaneers': 'The Buccaneers last won in 2021.',
        'Philadelhpia Eagles': 'The Eagles reached the Super Bowl but lost.',
        'Buffalo Bills': 'The Bills did not reach Super Bowl LVII.',
      },
    },
    {
      question: 'Who won the 2023 Formula 1 World Championship? (Motor Racing)',
      options: ['Lewis Hamilton', 'Max Verstappen', 'Sebastian Vettel', 'Valtteri Bottas'],
      correctAnswer: 'Max Verstappen',
      feedback: {
        'Lewis Hamilton': 'Hamilton is a 7 time Formula 1 champion but did not win in 2023.',
        'Max Verstappen': 'Correct! Verstappen won the 2023 Formula 1 World Championship, his 3rd championship in a row.', // Correct
        'Sebastian Vettel': 'Vettel is a 4 time Formula 1 champion but did not win in 2023.',
        'Valtteri Bottas': 'Bottas did not win the 2023 Formula 1 World Championship.',
      },
    },
    {
      question: 'Who won the 2022/2023 Premier League title? (Soccer)',
      options: ['Arsenal', 'Chelsea', 'Manchester City', 'Tottenham Hotspur'],
      correctAnswer: 'Manchester City',
      feedback: {
        'Arsenal': 'Arsenal were top of the league for 248 days but did not win the 2022/2023 Premier League.',
        'Chelsea': 'Chelsea have not won the league since 2017, they finished 12th.',
        'Manchester City': 'Correct! Manchester City won the Premier League for the 4th time in 5 years', // Correct
        'Tottenham Hotspur': 'Tottenham Hotspur have never won the Premier League :) They last won a first division title in 1963.',
      },
    },
    {
      question: 'Who won the 2023 Rugby World Cup? (Rugby Union)',
      options: ['New Zealand', 'South Africa', 'Australia', 'England'],
      correctAnswer: 'South Africa',
      feedback: {
        'New Zealand': 'New Zealand were runners-up in this year but did not win the 2023 Rugby World Cup.',
        'South Africa': 'Correct! South Africa won the 2023 Rugby World Cup.', // Correct
        'Australia': 'Australia have not won a Rugby World Cup since 1999.',
        'England': 'England have not won a Rugby World Cup since 2003.',
      },
    },
    
  ];
  

  const totalQuestions = questions.length;

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestionObj = questions[currentQuestion];

    if (selectedAnswer === currentQuestionObj.correctAnswer) {
      setScore(score + 1);
      const correctFeedback = currentQuestionObj.feedback[selectedAnswer];
      alert(correctFeedback);
    } else {
      const incorrectFeedback = currentQuestionObj.feedback[selectedAnswer];
      alert(incorrectFeedback);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOptions = () => {
    const currentQuestionObj = questions[currentQuestion];
    return currentQuestionObj.options.map((option, index) => (
      <button key={index} onClick={() => handleAnswerClick(option)}>
        {option}
      </button>
    ));
  };

  return (
    <div className="App">
      <h1>Sports Quiz</h1>
      <h2>Points scored: {score}</h2>

      {currentQuestion < totalQuestions ? (
        <div>
          <h3>{`Question ${currentQuestion + 1} of ${totalQuestions}`}</h3>
          <h3>{questions[currentQuestion].question}</h3>
          <div>{renderOptions()}</div>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed! Final Score: {score}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
