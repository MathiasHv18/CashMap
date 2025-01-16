package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@Table(name = "USERS_TRANSACTIONS")
public class UserTransaction {
    @Id
    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "idTransaction", nullable = false)
    private Transaction transaction;
}