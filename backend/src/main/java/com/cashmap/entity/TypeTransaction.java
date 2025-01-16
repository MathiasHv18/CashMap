package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@Table(name = "TYPE_TRANSACTIONS")
public class TypeTransaction {
    @Id
    @Column(name = "idTypeTransaction")
    private Integer idTypeTransaction;

    @Column(name = "typeTransaction", nullable = false, length = 15)
    private String typeTransaction;
}