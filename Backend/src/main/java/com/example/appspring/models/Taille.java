package com.example.appspring.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Taille implements java.io.Serializable{
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaille() {
        return taille;
    }

    public void setTaille(String taille) {
        this.taille = taille;
    }

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name="taille")
    String taille;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL,mappedBy ="tailles")

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
