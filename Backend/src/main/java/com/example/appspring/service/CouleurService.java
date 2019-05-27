package com.example.appspring.service;

import com.example.appspring.models.Couleur;
import com.example.appspring.models.Produit;
import com.example.appspring.models.SousCategorie;
import com.example.appspring.repository.CouleurRepository;
import com.example.appspring.repository.ProduitRepository;
import com.example.appspring.repository.SousCategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CouleurService {
    @Autowired
    CouleurRepository couleurRepository;



    public List<Couleur> getcouleur() {
        return couleurRepository.findAll();
    }
}