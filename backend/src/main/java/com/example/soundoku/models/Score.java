package com.example.soundoku.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("SCORES")
public class Score {
    @Id
    private Integer id;
    private String username;
    private Integer duration;
    private byte errors;

    public Integer getScoreId() {
        return id;
    }

    public void setScoreId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public byte getErrors() {
        return errors;
    }

    public void setErrors(byte errors) {
        this.errors = errors;
    }
}
