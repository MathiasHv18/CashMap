package com.cashmap.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "USERS_CATEGORY_TRANSACTIONS")
public class UserCategoryTransaction {

    @EmbeddedId
    private UserCategoryTransactionId id;

    // Getters and Setters
    public UserCategoryTransactionId getId() {
        return id;
    }

    public void setId(UserCategoryTransactionId id) {
        this.id = id;
    }
}