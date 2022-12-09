package com.example.soundoku.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoresController {
    @GetMapping("/")
    public String testEndpoint() {return "She workin!";}
}
