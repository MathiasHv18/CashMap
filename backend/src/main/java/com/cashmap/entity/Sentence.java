package com.cashmap.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "SENTENCES")
public class Sentence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer idSentence;
    @Column(name = "sentence",  nullable = false ,length = 45)
    public String sentence;
}