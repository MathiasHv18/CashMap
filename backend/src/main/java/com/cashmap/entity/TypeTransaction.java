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
    private Integer idTypeTransaction;

    @Column(name = "typeTransaction", nullable = false, length = 15)
    private String typeTransaction;

    // Getters
    public Integer getIdTypeTransaction() {
        return idTypeTransaction;
    }

    public String getTypeTransaction() {
        return typeTransaction;
    }

    // Setters
    public void setIdTypeTransaction(Integer idTypeTransaction) {
        this.idTypeTransaction = idTypeTransaction;
    }

    public void setTypeTransaction(String typeTransaction) {
        this.typeTransaction = typeTransaction;
    }
}