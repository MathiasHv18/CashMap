package com.cashmap.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "SENTENCES")
public class Sentence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSentence;
    @Column(name = "sentence",  nullable = false ,length = 45)
    private String sentence;

    // Getters
    public Integer getIdSentence() {
        return idSentence;
    }

    public String getSentence() {
        return sentence;
    }

    // Setters
    public void setIdSentence(Integer idSentence) {
        this.idSentence = idSentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }
}