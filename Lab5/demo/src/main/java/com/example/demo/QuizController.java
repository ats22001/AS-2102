package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
public class QuizController {

    private QuestionBank questionBank = new QuestionBank();

    @PostMapping("/validatePassword")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Password> validatePassword(@RequestParam(value = "pwd") String pwd, @RequestParam(value = "username") String username, @RequestParam(value = "email") String email) {
        Password password = new Password(pwd, username, email);
        return new ResponseEntity<>(password, HttpStatus.OK);
    }
    
    @PostMapping("/validateEmail")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> checkEmail(@RequestParam(value = "email") String email) {
        return new ResponseEntity<>("The email is valid!", HttpStatus.OK);
    }

    @GetMapping("/question")
    public ResponseEntity<List<Question> > getQuizQuestions_() {
        List<Question> questions_ = questionBank.getQuestions_();
        return new ResponseEntity<>(questions_, HttpStatus.OK);
    }
}