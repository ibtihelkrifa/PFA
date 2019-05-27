package com.example.appspring.models;

import javax.persistence.*;
@Table
@Entity
public class SousCategorie implements java.io.Serializable{


    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name="souscategoriename")
    String name;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Column(name="url")
    String url;

    @ManyToOne
    @JoinColumn (name="id_categorie")
    private Categorie categorie;

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

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }
}
