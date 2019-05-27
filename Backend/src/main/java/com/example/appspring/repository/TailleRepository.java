package com.example.appspring.repository;

import com.example.appspring.models.Couleur;
import com.example.appspring.models.Taille;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface TailleRepository  extends JpaRepository<Taille,Long > {
    List<Taille> findAll();

}
