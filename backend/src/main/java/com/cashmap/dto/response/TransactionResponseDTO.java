package com.cashmap.dto.response;

import com.cashmap.entity.CategoryTransaction;
import lombok.Data;

@Data
public class TransactionResponseDTO {
    private Integer idTransaction;
    private Double amount;
    private String concept;
    private String date;
    private String userName;
    private CategoryTransaction categoryDescription;
    private String typeDescription;

    // Getter y Setter para idTransaction
    public Integer getIdTransaction() {
        return idTransaction;
    }

    public void setIdTransaction(Integer idTransaction) {
        this.idTransaction = idTransaction;
    }

    // Getter y Setter para amount
    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    // Getter y Setter para concept
    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    // Getter y Setter para date
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    // Getter y Setter para userName
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    // Getter y Setter para categoryDescription
    public CategoryTransaction getCategoryDescription() {
        return categoryDescription;
    }

    public void setCategoryDescription(CategoryTransaction categoryDescription) {
        this.categoryDescription = categoryDescription;
    }

    // Getter y Setter para typeDescription
    public String getTypeDescription() {
        return typeDescription;
    }

    public void setTypeDescription(String typeDescription) {
        this.typeDescription = typeDescription;
    }

}
