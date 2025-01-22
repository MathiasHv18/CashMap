package com.cashmap.entity;

import com.cashmap.entity.enums.Rol;
import jakarta.persistence.*;

@Entity
@Table(name = "CATEGORY_USERS")
public class CategoryUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCategoryUser")
    private Integer idCategoryUser;

    @Enumerated(EnumType.STRING)
    @Column(name = "categoryUser", nullable = false, length = 30)
    private Rol name;

    public Integer getIdCategoryUser() {
        return idCategoryUser;
    }

    public void setIdCategoryUser(Integer idCategoryUser) {
        this.idCategoryUser = idCategoryUser;
    }

    public Rol getCategoryUser() {
        return name;
    }

    public void setCategoryUser(Rol categoryUser) {
        this.name = categoryUser;
    }
}