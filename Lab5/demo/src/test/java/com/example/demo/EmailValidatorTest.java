package com.example.demo;
import org.junit.Test;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

@WebMvcTest(QuizController.class)
public class EmailValidatorTest {

    @Test
    public void testValidEmail() {
        assertTrue(EmailValidator.validEmail("atiksh.singh@uconn.edu")); //Validating our email
    }

    @Test
    public void testInvalidEmail2() {
        assertFalse(EmailValidator.validEmail("Hello there, Atiksh!"));
    }
}
