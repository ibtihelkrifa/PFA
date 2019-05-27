package com.example.appspring.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Promotion {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Float getTaux() {
        return taux;
    }

    public void setTaux(Float taux) {
        this.taux = taux;
    }

    public Date getDatedeb() {
        return datedeb;
    }

    public void setDatedeb(Date datedeb) {
        this.datedeb = datedeb;
    }

    public Date getDatefin() {
        return datefin;
    }

    public void setDatefin(Date datefin) {
        this.datefin = datefin;
    }

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name="taux")
    Float taux;
    @Column(name="datedebut")
    Date datedeb;
    @Column(name="datefin")
    Date datefin;

}
