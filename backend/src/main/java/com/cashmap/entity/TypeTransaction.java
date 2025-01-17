package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "TYPE_TRANSACTIONS")
public class TypeTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer idTypeTransaction;

    @Column(name = "typeTransaction", nullable = false, length = 15)
    public String typeTransaction;
}