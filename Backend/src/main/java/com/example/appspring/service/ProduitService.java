package com.example.appspring.service;

import com.example.appspring.models.Produit;
import com.example.appspring.models.SousCategorie;
import com.example.appspring.repository.ProduitRepository;
import com.example.appspring.repository.SousCategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProduitService {
    @Autowired
    ProduitRepository produitRepository;
    @Autowired
    SousCategorieRepository sousCategorieRepository;
@Transactional
   public  List<Produit> findProducts(String namesousCategorie)
    {
        SousCategorie sousCategorie=sousCategorieRepository.findByName(namesousCategorie);
        return produitRepository.findBySouscategorie(sousCategorie);
    }
    @Transactional
    public List<Produit> findpromoprduct()
    {

        return produitRepository.findAllByPromotionNotNull();
    }
}
