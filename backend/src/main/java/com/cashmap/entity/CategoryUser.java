package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@Table(name = "CATEGORY_USERS")
public class CategoryUser {
    @Id
    @Column(name = "idCategoryUser")
    private Integer idCategoryUser;

    @Column(name = "categoryUser", nullable = false, length = 30)
    private String categoryUser;
}