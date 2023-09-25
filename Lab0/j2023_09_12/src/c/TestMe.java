//Dedeep Singu, Sergio Montufar, & Atiksh Singh
package j2023_09_12.src.c;

public class TestMe {
    private double value = Double.NaN;

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }

    public TestMe() {}

    public void setValue(double v) {
        value = v;
    }
	
	public double square() {
        return value * value;
    }//value*value

    public double subtraction() {
        return value - value;
    }//always returns 0

    public double addition() {
        return value + value;
    }//value *2

    public double division() {
        return value / value;
    }
}
