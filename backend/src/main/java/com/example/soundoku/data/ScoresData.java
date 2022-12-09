package com.example.soundoku.data;

import com.example.soundoku.models.Score;
import org.springframework.data.repository.CrudRepository;

public interface ScoresData extends CrudRepository<Score, Integer> {
}
