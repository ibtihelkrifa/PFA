package com.example.appspring.repository;

import com.example.appspring.models.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long> {
Categorie findByName(String name);
}
