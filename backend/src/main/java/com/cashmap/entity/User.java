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
    private Integer idUser;

    @ManyToOne
    @JoinColumn(name = "idCategoryUser",referencedColumnName = "categoryUser" , nullable = false)
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

    public Double getFisicalMoney() {
        return fisicalMoney;
    }

    public Double getDigitalMoney() {
        return digitalMoney;
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

    public void setFisicalMoney(Double fisicalMoney) {
        this.fisicalMoney = fisicalMoney;
    }

    public void setDigitalMoney(Double digitalMoney) {
        this.digitalMoney = digitalMoney;
    }
}