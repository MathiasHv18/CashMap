package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "LOG_TRANSACTIONS")
public class LogTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idLogTransaction")
    private Integer idLogTransaction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idUser", referencedColumnName = "idUser", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idTransaction", referencedColumnName = "idTransaction", nullable = false)
    private Transaction transaction;

    @Column(name = "actionType", nullable = false, length = 20)
    private String actionType;

    @Column(name = "logDate", nullable = false)
    private LocalDateTime logDate;

    @Column(name = "oldAmount")
    private Double oldAmount;

    @Column(name = "newAmount")
    private Double newAmount;

    @Column(name = "oldCategory", length = 50)
    private String oldCategory;

    @Column(name = "newCategory", length = 50)
    private String newCategory;

    @Column(name = "oldConcept", length = 50)
    private String oldConcept;

    @Column(name = "newConcept", length = 50)
    private String newConcept;

    @Column(name = "oldPaymentMethod", length = 50)
    private String oldPaymentMethod;

    @Column(name = "newPaymentMethod", length = 50)
    private String newPaymentMethod;

    // Getters
    public Integer getIdLogTransaction() {
        return idLogTransaction;
    }

    public User getUser() {
        return user;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public String getActionType() {
        return actionType;
    }

    public LocalDateTime getLogDate() {
        return logDate;
    }

    public Double getOldAmount() {
        return oldAmount;
    }

    public Double getNewAmount() {
        return newAmount;
    }

    public String getOldCategory() {
        return oldCategory;
    }

    public String getNewCategory() {
        return newCategory;
    }

    public String getOldConcept() {
        return oldConcept;
    }

    public String getNewConcept() {
        return newConcept;
    }

    public String getOldPaymentMethod() {
        return oldPaymentMethod;
    }

    public String getNewPaymentMethod() {
        return newPaymentMethod;
    }

    // Setters
    public void setIdLogTransaction(Integer idLogTransaction) {
        this.idLogTransaction = idLogTransaction;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    public void setActionType(String actionType) {
        this.actionType = actionType;
    }

    public void setLogDate(LocalDateTime logDate) {
        this.logDate = logDate;
    }

    public void setOldAmount(Double oldAmount) {
        this.oldAmount = oldAmount;
    }

    public void setNewAmount(Double newAmount) {
        this.newAmount = newAmount;
    }

    public void setOldCategory(String oldCategory) {
        this.oldCategory = oldCategory;
    }

    public void setNewCategory(String newCategory) {
        this.newCategory = newCategory;
    }

    public void setOldConcept(String oldConcept) {
        this.oldConcept = oldConcept;
    }

    public void setNewConcept(String newConcept) {
        this.newConcept = newConcept;
    }

    public void setOldPaymentMethod(String oldPaymentMethod) {
        this.oldPaymentMethod = oldPaymentMethod;
    }

    public void setNewPaymentMethod(String newPaymentMethod) {
        this.newPaymentMethod = newPaymentMethod;
    }
}