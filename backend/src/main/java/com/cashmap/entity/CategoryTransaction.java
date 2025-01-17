package com.cashmap.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "CATEGORY_TRANSACTIONS")
public class CategoryTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer idCategoryTransaction;

    @Column(name = "categoryTransaction", nullable = false, length = 15)
    public String categoryTransaction;
}