package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "USERS_TRANSACTIONS")
public class UserTransaction {

    @EmbeddedId
    private UserTransactionId id;

    @ManyToOne
    @MapsId("user")
    @JoinColumn(name = "idUser", referencedColumnName = "idUser", nullable = false)
    private User user;

    @ManyToOne
    @MapsId("transaction")
    @JoinColumn(name = "idTransaction", referencedColumnName = "idTransaction", nullable = false)
    private Transaction transaction;

    // Getters
    public UserTransactionId getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    // Setters
    public void setId(UserTransactionId id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }


}
