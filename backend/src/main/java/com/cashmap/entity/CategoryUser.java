package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "CATEGORY_USERS")
public class CategoryUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategoryUser;

    @Column(name = "categoryUser", nullable = false, length = 30)
    private String categoryUser;

    // Getters
    public Integer getIdCategoryUser() {
        return idCategoryUser;
    }

    public String getCategoryUser() {
        return categoryUser;
    }

    // Setters
    public void setIdCategoryUser(Integer idCategoryUser) {
        this.idCategoryUser = idCategoryUser;
    }

    public void setCategoryUser(String categoryUser) {
        this.categoryUser = categoryUser;
    }
}