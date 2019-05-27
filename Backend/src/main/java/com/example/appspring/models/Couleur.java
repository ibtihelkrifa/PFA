package com.example.appspring.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Couleur implements java.io.Serializable {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name="couleur")
    String  name;

    public Long getId() {
        return id;
    }

    private void setId(Long id) {
        this.id = id;
    }

    public String getCouleur() {
        return name;
    }

    public void setCouleur(String couleur) {
        this.name = couleur;
    }
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL,mappedBy ="couleurs")

    @JsonBackReference
    private Set<Produit> produits = new HashSet<>();
    public Set<Produit> getproduits()
    {
        return this.produits;
    }
    public void setproduits(Set<Produit> l)
    {
        this.produits=l;
    }

}

