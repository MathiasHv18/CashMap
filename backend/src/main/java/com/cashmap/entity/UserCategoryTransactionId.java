package com.cashmap.entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserCategoryTransactionId implements Serializable {
    private Integer idUser;
    private Integer idCategoryTransaction;

    // Getters and Setters
    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdCategoryTransaction() {
        return idCategoryTransaction;
    }

    public void setIdCategoryTransaction(Integer idCategoryTransaction) {
        this.idCategoryTransaction = idCategoryTransaction;
    }

    // hashCode and equals
    @Override
    public int hashCode() {
        return Objects.hash(idUser, idCategoryTransaction);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        UserCategoryTransactionId that = (UserCategoryTransactionId) obj;
        return Objects.equals(idUser, that.idUser) &&
                Objects.equals(idCategoryTransaction, that.idCategoryTransaction);
    }
}