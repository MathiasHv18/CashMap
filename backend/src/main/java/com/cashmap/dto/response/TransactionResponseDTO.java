package com.cashmap.dto.response;

import lombok.Data;

@Data
public class TransactionResponseDTO {
    private Integer idTransaction;
    private Double amount;
    private String concept;
    private String date;
    private String userName;
    private String categoryDescription;
    private String typeDescription;
}
