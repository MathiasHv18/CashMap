package com.cashmap.dto.response;

import com.cashmap.entity.CategoryUser;

public class UserProfileResponseDTO {

    private Integer id;
    private CategoryUser categoryUser;
    private String name;
    private String lastname;
    private String mail;
    private Integer age;
    private Double fisicalMoney;
    private Double digitalMoney;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public CategoryUser getCategoryUser() {
        return categoryUser;
    }

    public void setCategoryUser(CategoryUser categoryUser) {
        this.categoryUser = categoryUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Double getFisicalMoney() {
        return fisicalMoney;
    }

    public void setFisicalMoney(Double fisicalMoney) {
        this.fisicalMoney = fisicalMoney;
    }

    public Double getDigitalMoney() {
        return digitalMoney;
    }

    public void setDigitalMoney(Double digitalMoney) {
        this.digitalMoney = digitalMoney;
    }
}