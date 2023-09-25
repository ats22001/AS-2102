// package com.mycompany.app;

// import static org.junit.Assert.assertTrue;

// import org.junit.Test;

// /**
//  * Unit test for simple App.
//  */
// public class AppTest 
// {
//     /**
//      * Rigorous Test :-)
//      */
//     @Test
//     public void shouldAnswerWithTrue()
//     {
//         assertTrue( true );
//     }
// }
//Dedeep Singu, Sergio Montufar, & Atiksh Singh
package com.mycompany.app;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import com.mycompany.app.TestMe;
//  import c.TestMe;

public class TestMeTests {

    TestMe testMe;

    @Before
    public void setUp() throws Exception {
        testMe = new TestMe();
    }

    @Test
    public void squareTest() {
        double baseValue = 3.0;
        double expected = baseValue * baseValue;
        testMe.setValue(3.0);
        double actual = testMe.square();
        assertTrue(actual == expected);
    }

    @Test
    public void subtractionTest() {
        double baseValue = 5.0;
        double expected = 0.0;
        testMe.setValue(baseValue);
        double actual = testMe.subtraction();
        assertTrue(actual == expected);
    }

	@Test
    public void additionTest() {
        double baseValue = 20.0;
        double expected = baseValue + baseValue;
        testMe.setValue(baseValue);
        double actual = testMe.addition();
        assertTrue(actual == expected);
    }

	@Test
    public void divisionTest() {
        double baseValue = 30.0;
        double expected = 1.0;
        testMe.setValue(baseValue);
        double actual = testMe.division();
        assertTrue(actual == expected);
    }
}