package com.cashmap.repository;

import com.cashmap.entity.CategoryUser;
import com.cashmap.entity.enums.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryUserRepository extends JpaRepository<CategoryUser, Integer> {
    Optional<CategoryUser> findByName(Rol name);
}
