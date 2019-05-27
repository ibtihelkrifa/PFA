package com.example.appspring.controller;

import com.example.appspring.models.Produit;
import com.example.appspring.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produit")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")

public class ProduitController {
    @Autowired
    ProduitService produitService;
    @GetMapping(value = "/{souscategoriename}")
    List<Produit> getproducts(@PathVariable String souscategoriename)
    {
       return produitService.findProducts(souscategoriename);
    }
}
