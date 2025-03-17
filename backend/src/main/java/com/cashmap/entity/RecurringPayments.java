package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "RECURRING_PAYMENTS")
public class RecurringPayments {
    @Id
    private Integer idRecurringPayment;

    @ManyToOne
    @JoinColumn(name = "idUser", referencedColumnName = "idUser", nullable = false)
    private User user;

    @Column(name = "serviceName", nullable = false, length = 130)
    private String serviceName;

    @Column(name = "paymentDay", nullable = false)
    private LocalDate paymentDay;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "frequencyPayment", nullable = true, length = 50)
    private String frequencyPayment;

    // Getters
    public Integer getIdRecurringPayment() {
        return idRecurringPayment;
    }

    public User getUser() {
        return user;
    }

    public String getServiceName() {
        return serviceName;
    }

    public LocalDate getPaymentDay() {
        return paymentDay;
    }

    public Double getAmount() {
        return amount;
    }

    public String getFrequencyPayment() {
        return frequencyPayment;
    }

    // Setters
    public void setIdRecurringPayment(Integer idRecurringPayment) {
        this.idRecurringPayment = idRecurringPayment;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public void setPaymentDay(LocalDate paymentDay) {
        this.paymentDay = paymentDay;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setFrequencyPayment(String frequencyPayment) {
        this.frequencyPayment = frequencyPayment;
    }
}