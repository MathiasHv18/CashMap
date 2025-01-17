package com.cashmap.repository;

import com.cashmap.entity.TypeTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeTransactionRepository extends JpaRepository<TypeTransaction,Integer> {
}
