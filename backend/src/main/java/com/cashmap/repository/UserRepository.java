package com.cashmap.repository;

import com.cashmap.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByMail(String mail);
    Optional<User> findByMail(String mail);
}
