package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "CATEGORY_TRANSACTIONS")
public class CategoryTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategoryTransaction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idUser", referencedColumnName = "idUser", nullable = false)
    private User user;

    @Column(name = "categoryTransaction")
    private String categoryTransaction;

    public Integer getIdCategoryTransaction() {
        return idCategoryTransaction;
    }

    public String getCategoryTransaction() {
        return categoryTransaction;
    }

    // Setters
    public void setIdCategoryTransaction(Integer idCategoryTransaction) {
        this.idCategoryTransaction = idCategoryTransaction;
    }

    public void setCategoryTransaction(String categoryTransaction) {
        this.categoryTransaction = categoryTransaction;
    }

    public void setUser(User user) {
        this.user = user;
    }
}