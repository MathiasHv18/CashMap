package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@Table(name = "TRANSACTIONS")
public class Transaction {
    @Id
    @Column(name = "idTransaction")
    private Integer idTransaction;

    @ManyToOne
    @JoinColumn(name = "idTypeTransaction", nullable = false)
    private TypeTransaction typeTransaction;

    @ManyToOne
    @JoinColumn(name = "idCategoryTransaction", nullable = false)
    private CategoryTransaction categoryTransaction;

    @Column(name = "concept", nullable = false, length = 20)
    private String concept;

    @Column(name = "amount", nullable = false)
    private Integer amount;

    @Column(name = "date", nullable = false)
    private java.sql.Date date;

    @Column(name = "category", nullable = false, length = 20)
    private String category;
}