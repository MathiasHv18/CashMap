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
@Table(name = "sentences")
public class Sentence {
    @Id
    @Column(name = "idsentence")
    private  Integer idsentence;
    @Column(name = "sentence",  nullable = false ,length = 45)
    public String sentence;
}