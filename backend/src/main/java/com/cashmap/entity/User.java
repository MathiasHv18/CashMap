package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "USERS")
public class User {
    @Id
    @Column(name = "idUser")
    public Integer idUser;

    @ManyToOne
    @JoinColumn(name = "idCategoryUser",referencedColumnName = "categoryUser" , nullable = false)
    public CategoryUser categoryUser;

    @Column(name = "name", nullable = false, length = 30)
    public String name;

    @Column(name = "lastname", nullable = false, length = 150)
    public String lastname;

    @Column(name = "mail", nullable = false, length = 200)
    public String mail;

    @Column(name = "password", nullable = false, length = 20)
    public String password;

    @Column(name = "age", nullable = false)
    public Integer age;

    @Column(name = "fisicalMoney", nullable = false)
    public Double fisicalMoney;

    @Column(name = "digitalMoney", nullable = false)
    public Double digitalMoney;
}