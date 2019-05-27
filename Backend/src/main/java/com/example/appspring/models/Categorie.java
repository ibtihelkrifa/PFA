package com.example.appspring.models;

import javax.persistence.*;

@Table
@Entity
public class Categorie implements java.io.Serializable {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name="categoriename")
    String name;

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


}
