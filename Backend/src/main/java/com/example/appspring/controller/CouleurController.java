package com.example.appspring.controller;

import com.example.appspring.models.Couleur;
import com.example.appspring.service.CouleurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/couleur")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class CouleurController {
    @Autowired
    CouleurService couleurService;
    @GetMapping(value = "")
    List<Couleur> getcouleur()
    {
        return couleurService.getcouleur();
    }

}
