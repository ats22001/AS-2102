package com.example.demo;

import java.util.UUID;
import java.util.ArrayList;
import java.util.List;

public class QuestionBank {
    private List<Question> questionsList;

    public QuestionBank() {
        this.questionsList = new ArrayList<>();

        Question Q1 = new Question(UUID.randomUUID(), "Are France the reigning World Cup Champions?", false);
        Question Q2 = new Question(UUID.randomUUID(), "Kai Havertz has 0 goals this season", false);
        Question Q3 = new Question(UUID.randomUUID(), "Lionel Messi plays for Inter Miami", true);
        
        questionsList.add(Q1);
        questionsList.add(Q2);
        questionsList.add(Q3);
    }

    public List<Question> getQuestionsList() {
        return questionsList;
    }
}