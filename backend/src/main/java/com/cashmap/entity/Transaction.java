package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "TRANSACTIONS")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer idTransaction;

    @ManyToOne
    @JoinColumn(name = "idTypeTransaction", referencedColumnName = "idTypeTransaction", nullable = false)
    public TypeTransaction typeTransaction;

    @ManyToOne
    @JoinColumn(name = "idCategoryTransaction",referencedColumnName = "idCategoryTransaction", nullable = false)
    public CategoryTransaction categoryTransaction;

    @Column(name = "concept", nullable = false, length = 20)
    public String concept;

    @Column(name = "amount", nullable = false)
    public Integer amount;

    @Column(name = "date", nullable = false)
    public java.sql.Date date;

    @Column(name = "category", nullable = false, length = 20)
    public String category;
}