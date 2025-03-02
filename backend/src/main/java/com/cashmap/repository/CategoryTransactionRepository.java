package com.cashmap.repository;

import com.cashmap.entity.CategoryTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryTransactionRepository extends JpaRepository<CategoryTransaction,Integer> {
    List<CategoryTransaction> findByUser_IdUser(Integer userId);
}
