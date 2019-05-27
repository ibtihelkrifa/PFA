package com.example.appspring.service;

import com.example.appspring.models.Categorie;
import com.example.appspring.models.SousCategorie;
import com.example.appspring.repository.CategorieRepository;
import com.example.appspring.repository.SousCategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SousCategorieService {
    @Autowired
    CategorieRepository categorieRepository;
    @Autowired
    SousCategorieRepository sousCategorieRepository;

@Transactional
    public List<SousCategorie> FindSousCategorieByName(String name)
   {
       Categorie categorie = categorieRepository.findByName(name);
      return sousCategorieRepository.findByCategorie(categorie);
   }

}
