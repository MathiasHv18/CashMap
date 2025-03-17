package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Entity
@Getter
@Setter
@Table(name = "TRANSACTIONS")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTransaction;

    @ManyToOne
    @JoinColumn(name = "idTypeTransaction", referencedColumnName = "idTypeTransaction", nullable = false)
    private TypeTransaction typeTransaction;

    @ManyToOne
    @JoinColumn(name = "idCategoryTransaction", referencedColumnName = "idCategoryTransaction", nullable = false)
    private CategoryTransaction categoryTransaction;

    @Column(name = "concept", nullable = false, length = 130)
    private String concept;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    // Getters
    public Integer getIdTransaction() {
        return idTransaction;
    }

    public TypeTransaction getTypeTransaction() {
        return typeTransaction;
    }

    public CategoryTransaction getCategoryTransaction() {
        return categoryTransaction;
    }

    public String getConcept() {
        return concept;
    }

    public Double getAmount() {
        return amount;
    }

    public LocalDate getDate() {
        return date;
    }

    // Setters
    public void setIdTransaction(Integer idTransaction) {
        this.idTransaction = idTransaction;
    }

    public void setTypeTransaction(TypeTransaction typeTransaction) {
        this.typeTransaction = typeTransaction;
    }

    public void setCategoryTransaction(CategoryTransaction categoryTransaction) {
        this.categoryTransaction = categoryTransaction;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}