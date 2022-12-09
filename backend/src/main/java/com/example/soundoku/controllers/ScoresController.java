package com.example.soundoku.controllers;

import com.example.soundoku.models.Score;
import com.example.soundoku.services.ScoresService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoresController {

    private final ScoresService scoresService;

    public ScoresController(ScoresService scoresService) {
        this.scoresService = scoresService;
    }

    @GetMapping("/scores")
    public Iterable<Score> getScores() {
        return scoresService.getAllScores();
    }

    @PostMapping("/scores")
    public Score addScore(Score newScore) {
        return scoresService.saveNewScore(newScore.getUsername(), newScore.getDuration(), newScore.getErrors());
    }

    @DeleteMapping("/scores/{id}")
    public void deleteScore(Integer id) {
        scoresService.deleteScore(id);
    }
}
