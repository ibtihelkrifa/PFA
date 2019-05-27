package com.example.appspring.controller;

import com.example.appspring.models.Couleur;
import com.example.appspring.models.Taille;
import com.example.appspring.service.CouleurService;
import com.example.appspring.service.TailleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/taille")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")

public class TailleController {
    @Autowired
    TailleService tailleService;
    @GetMapping(value = "")
    List<Taille> getcouleur()
    {
        return tailleService.gettaille();
    }


}
