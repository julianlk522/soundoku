package com.example.soundoku.services;

import com.example.soundoku.data.ScoresData;
import com.example.soundoku.models.Score;
import org.springframework.stereotype.Service;

@Service
public class ScoresService {
    private final ScoresData scoresData;

    public ScoresService(ScoresData scoresData) {
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

    public void deleteScore(Integer id) {
        scoresData.deleteById(id);
    }
}
