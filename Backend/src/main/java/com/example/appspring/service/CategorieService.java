package com.example.appspring.service;

import com.example.appspring.models.Categorie;
import com.example.appspring.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CategorieService {
    @Autowired
    CategorieRepository categorieRepository;
    @Transactional
    public List<Categorie> getallcategories()
    {

        return categorieRepository.findAll();
    }
}
