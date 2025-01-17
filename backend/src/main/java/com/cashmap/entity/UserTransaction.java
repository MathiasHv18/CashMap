package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "USERS_TRANSACTIONS")
public class UserTransaction {
    @Id
    @ManyToOne
    @JoinColumn(name = "idUser",referencedColumnName = "idUser",nullable = false)
    public User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "idTransaction", referencedColumnName = "idTransaction",nullable = false)
    public Transaction transaction;
}