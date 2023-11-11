package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;
import org.springframework.ui.Model;

@Controller 
public class HomeController {
  private final _QuestionBank _questionBank;
  public HomeController() {
    this._questionBank = new _QuestionBank();
  }

  @GetMapping("/")
  public String home() {
    return "home";
  }
  
  @GetMapping("/not_home")
  public String notHome(Model model) {
      List<Question> questions = _questionBank.getQuestion();
      model.addAttribute("questions", questions);
      return "not_home";
  }

  @PostMapping("/not_home")
  public String submitLoginForm(Model model) {
    List<Question> questions = _questionBank.getQuestion();
    model.addAttribute("questions", questions);
    return "not_home";
  }
  
  @GetMapping("/test")
  public String testPage() {
    return "test";
  }


}