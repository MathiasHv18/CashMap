package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@Table(name = "CATEGORY_TRANSACTIONS")
public class CategoryTransaction {
    @Id
    @Column(name = "idCategoryTransaction")
    private Integer idCategoryTransaction;

    @Column(name = "categoryTransaction", nullable = false, length = 15)
    private String categoryTransaction;
}