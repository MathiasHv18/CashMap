package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "sentences")
public class Sentence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSentence;
    @Column(name = "sentence",  nullable = false ,length = 45)
    private String  sentence;
}