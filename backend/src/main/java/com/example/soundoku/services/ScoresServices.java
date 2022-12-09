package com.example.soundoku.services;

import com.example.soundoku.data.ScoresData;
import com.example.soundoku.models.Score;

public class ScoresServices {
    private final ScoresData scoresData;

    public ScoresServices(ScoresData scoresData) {
        this.scoresData = scoresData;
    }

    public Iterable<Score> getAllScores() {
        return scoresData.findAll();
    }

    public Score saveNewScore(String username, Integer duration, byte errors) {
        Score submission = new Score();
        submission.setUsername(username);
        submission.setDuration(duration);
        submission.setErrors(errors);
        return submission;
    }

    public void deleteScore(String id) {
        scoresData.deleteById(id);
    }
}
