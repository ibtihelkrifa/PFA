package com.example.appspring.controller;

import com.example.appspring.models.Categorie;
import com.example.appspring.models.SousCategorie;
import com.example.appspring.repository.CategorieRepository;
import com.example.appspring.service.SousCategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/souscategorie")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class SousCategorieController {
    @Autowired
    SousCategorieService souscatservice;

    @GetMapping(value = "/{name}")
    List<SousCategorie> getsouscategorie(@PathVariable String name){
        return souscatservice.FindSousCategorieByName(name);
    }


}
