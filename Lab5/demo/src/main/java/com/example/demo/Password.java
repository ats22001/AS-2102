package com.example.demo;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Password {
    private String password;
    private String _username;
    private String email;

    public Password(String password, String _username, String email) {
        this.password = password; //Storing password
        this._username = _username; //Storing uesrname
        this.email = email; //Storing email
    }

    public String getPwd() {
        return password; // Returning password whenever getPwd() is called
    }

    public boolean validPassword() {

        if (password.length() < 10) { //Password must be at least 10 characters
            return false;
        }

        Pattern pattern = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=]).+$");
        Matcher matcher = pattern.matcher(password);
        if (!matcher.matches()) {
            return false;
        }

        if (password.toLowerCase().contains(_username.toLowerCase()) || password.toLowerCase().contains(email.toLowerCase())) {
            return false;
        }

        return true;
    }
}