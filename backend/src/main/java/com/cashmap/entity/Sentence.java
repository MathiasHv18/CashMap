package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Entity
@Getter
@Setter
@Table(name = "SENTENCES")
public class Sentence {
    @Id
    @Column(name = "idSentence")
    public  Integer idSentence;
    @Column(name = "sentence",  nullable = false ,length = 45)
    public String sentence;
}