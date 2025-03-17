package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "PAYMENT_METHODS")
public class PaymentMethod {
    @Id
    @Column(name = "idPaymentMethod")
    private Integer idPaymentMethod;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idUser", referencedColumnName = "idUser", nullable = false)
    private User user;

    @Column(name = "paymentMethod", nullable = false, length = 50)
    private String paymentMethod;

    // Getters
    public Integer getIdPaymentMethod() {
        return idPaymentMethod;
    }

    public User getUser() {
        return user;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    // Setters
    public void setIdPaymentMethod(Integer idPaymentMethod) {
        this.idPaymentMethod = idPaymentMethod;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
}