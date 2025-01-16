package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@Table(name = "USERS")
public class User {
    @Id
    @Column(name = "idUser")
    private Integer idUser;

    @ManyToOne
    @JoinColumn(name = "idCategoryUser", nullable = false)
    private CategoryUser categoryUser;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

    @Column(name = "lastname", nullable = false, length = 150)
    private String lastname;

    @Column(name = "mail", nullable = false, length = 200)
    private String mail;

    @Column(name = "password", nullable = false, length = 20)
    private String password;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "fisicalMoney", nullable = false)
    private Double fisicalMoney;

    @Column(name = "digitalMoney", nullable = false)
    private Double digitalMoney;
}