package com.cashmap.entity;

import com.cashmap.entity.enums.Rol;
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

    @Enumerated(EnumType.STRING)
    @Column(name = "categoryUser", nullable = false, length = 30)
    private Rol categoryUser;
}