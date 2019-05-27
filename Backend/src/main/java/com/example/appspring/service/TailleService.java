package com.example.appspring.service;

import com.example.appspring.models.Couleur;
import com.example.appspring.models.Taille;
import com.example.appspring.repository.CouleurRepository;
import com.example.appspring.repository.TailleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class TailleService {
    @Autowired
    TailleRepository tailleRepository;



    public List<Taille> gettaille() {
        return tailleRepository.findAll();
    }
}
