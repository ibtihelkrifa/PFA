package com.example.appspring.controller;


import com.example.appspring.models.Produit;
import com.example.appspring.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/promotion")
public class PromotionController {
    @Autowired
    ProduitService produitService;
    @GetMapping(value = "")
    List<Produit> getproduitpromo()
    {
        return produitService.findpromoprduct();
    }
}
