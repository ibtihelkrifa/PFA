package com.example.appspring.models;



import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.*;

@Entity
public class Produit implements java.io.Serializable{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name="nomproduit")
    String name;
    @Column(name="url")
    String url;
    @Column(name="prix")
    float prix;
    @Basic(optional = false)
    @Column(name = "Data_Ajout", insertable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    public Long getId() {
        return id;
    }

    private void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public SousCategorie getSouscategorie() {
        return souscategorie;
    }

    public void setSouscategorie(SousCategorie souscategorie) {
        this.souscategorie = souscategorie;
    }

    @ManyToOne
    @JoinColumn (name="id_souscategorie")
    private SousCategorie souscategorie;

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    @ManyToOne
    @JoinColumn (name="id_promotion")
    private Promotion promotion;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "prod_couleur",
            joinColumns = { @JoinColumn(name = "produit_id") },
            inverseJoinColumns = { @JoinColumn(name = "couleur_id") })

    @JsonBackReference

    private Set<Couleur> couleurs = new HashSet<>();
    public Set<Couleur> getcouleur()
    {
        return this.couleurs;
    }
    public void setcouleur(Set<Couleur> c )
    {
        this.couleurs=c;
    }


    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "prod_taille",
            joinColumns = { @JoinColumn(name = "produit_id") },
            inverseJoinColumns = { @JoinColumn(name = "taille_id") })

    @JsonBackReference

    private Set<Taille> tailles = new HashSet<>();
    public Set<Taille> gettaille()
    {
        return this.tailles;
    }
    public void settaille(Set<Taille> c )
    {
        this.tailles=c;
    }




}
