package com.example.appspring.repository;

import com.example.appspring.models.Produit;
import com.example.appspring.models.SousCategorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Repository
@Transactional
public interface ProduitRepository extends JpaRepository<Produit,Long>{
List<Produit> findBySouscategorie(SousCategorie sousCategorie);
Set<Produit> findByName(String name);
List<Produit> findAllByPromotionNotNull();

}
