package com.cashmap.repository;

import com.cashmap.entity.Sentence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SentenceRepository extends JpaRepository<Sentence, Integer> {

}
