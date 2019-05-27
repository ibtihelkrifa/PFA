package com.example.appspring.repository;

import com.example.appspring.models.Categorie;
import com.example.appspring.models.SousCategorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SousCategorieRepository extends JpaRepository<SousCategorie,Long>{
SousCategorie findByName(String name);
List<SousCategorie>findByCategorie (Categorie categorie);

}
