package com.cashmap.dto.request;

import lombok.Data;

@Data
public class TransactionRequestDTO {
    private Double amount;
    private String concept;
    private String date;
    private Integer userId;
    private Integer idCategoryTransaction;
    private Integer idTypeTran;

    // Getters
    public Double getAmount() {
        return amount;
    }

    public String getConcept() {
        return concept;
    }

    public String getDate() {
        return date;
    }

    public Integer getUserId() {
        return userId;
    }

    public Integer getIdCategoryTransaction() {
        return idCategoryTransaction;
    }

    public Integer getIdTypeTran() {
        return idTypeTran;
    }

    // Setters
    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setIdCategoryTransaction(Integer idCategoryTransaction) {
        this.idCategoryTransaction = idCategoryTransaction;
    }

    public void setIdTypeTran(Integer idTypeTran) {
        this.idTypeTran = idTypeTran;
    }
}