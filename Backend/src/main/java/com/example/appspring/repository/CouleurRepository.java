package com.example.appspring.repository;

import com.example.appspring.models.Couleur;
import com.example.appspring.models.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public interface CouleurRepository extends JpaRepository<Couleur,Long > {
  List<Couleur> findAll();
}
