package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUser")
    private Integer idUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idCategoryUser",referencedColumnName = "idCategoryUser" , nullable = false)
    private CategoryUser categoryUser;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "lastname", length = 150)
    private String lastname;

    @Column(name = "mail", nullable = false, length = 200)
    private String mail;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "age")
    private Integer age;

    @Column(name = "cashBalance")
    private Double cashBalance;

    @Column(name = "digitalBalance")
    private Double digitalBalance;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Getters
    public Integer getIdUser() {
        return idUser;
    }

    public CategoryUser getCategoryUser() {
        return categoryUser;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public String getMail() {
        return mail;
    }

    public String getPassword() {
        return password;
    }

    public Integer getAge() {
        return age;
    }

    public Double getCashBalance() {
        return cashBalance;
    }

    public Double getDigitalBalance() {
        return digitalBalance;
    }

    // Setters
    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public void setCategoryUser(CategoryUser categoryUser) {
        this.categoryUser = categoryUser;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setCashBalance(Double cashBalance) {
        this.cashBalance = cashBalance;
    }

    public void setDigitalBalance(Double digitalBalance) {
        this.digitalBalance = digitalBalance;
    }
}