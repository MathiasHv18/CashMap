package com.cashmap.repository;

import com.cashmap.entity.User;
import com.cashmap.entity.UserTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTransactionRepository extends JpaRepository<UserTransaction,Integer> {
    List<UserTransaction> findByUser(User user);

    List<UserTransaction> findByUser_IdUser(Integer userIdUser);
}
