package com.example.demo;

import java.util.UUID;

public class Question_ {
    private UUID uuid;
    private String question_;
    private boolean _answer;

    public Question_(UUID uuid, String question_, boolean _answer) {
        this.uuid = uuid;
        this.question_ = question_;
        this._answer = _answer;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getQuestion_() {
        return question_;
    }

    public void setQuestion_(String question_) {
        this.question_ = question_;
    }

    public boolean get_answer() {
        return _answer;
    }

    public void set_answer(boolean _answer) {
        this._answer = _answer;
    }
}