package com.example.demo;

import org.junit.Test;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

@WebMvcTest(QuizController.class)
public class PasswordTest {
    @Test
    public void testValidPassword() {
        Password password = new Password("Dev", "Dev", "atiksh.singh@uconn.edu");
        assertTrue(password.validPassword());
    }

}