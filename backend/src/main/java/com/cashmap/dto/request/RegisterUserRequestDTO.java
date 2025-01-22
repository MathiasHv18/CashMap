package com.cashmap.dto.request;

import jakarta.validation.constraints.NotBlank;

public class RegisterUserRequestDTO {
    @NotBlank(message = "Name is mandatory")
    private String name;
    @NotBlank(message = "Email is mandatory")
    private String mail;
    @NotBlank(message = "Password is mandatory")
    private String password;
    // Optional
    private String lastname;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setEmail(String email) {
        this.mail = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}