package com.cashmap.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

//@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponseDTO {
    private Integer id;
    private String mail;
    private String name;
    private String lastname = "";
    private Integer age = 0;
    private Double fisicalMoney = 0.0;
    private Double digitalMoney = 0.0;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
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