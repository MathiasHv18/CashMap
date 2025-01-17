package com.cashmap.entity;

import java.io.Serializable;
import java.io.Serializable;
import java.util.Objects;

public class UserTransactionId implements Serializable {
    private Integer user;
    private Integer transaction;

    // Getters, Setters, hashCode, and equals methods
    public Integer getUser() {
        return user;
    }

    public void setUser(Integer user) {
        this.user = user;
    }

    public Integer getTransaction() {
        return transaction;
    }

    public void setTransaction(Integer transaction) {
        this.transaction = transaction;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserTransactionId that = (UserTransactionId) o;
        return Objects.equals(user, that.user) && Objects.equals(transaction, that.transaction);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, transaction);
    }
}
