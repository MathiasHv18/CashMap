package com.cashmap.dto.request;

import com.cashmap.entity.CategoryTransaction;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class TransactionRequestDTO {
    private Double amount;
    private String concept;
    private String date;
    private Integer userId;
    private CategoryTransaction categoryTransaction;
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

    public CategoryTransaction getCategoryTransaction() {
        return categoryTransaction;
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

    public void setCategoryTran(CategoryTransaction categoryTran) {
        this.categoryTransaction = categoryTran;
    }

    public void setIdTypeTran(Integer idTypeTran) {
        this.idTypeTran = idTypeTran;
    }
}
