package com.cashmap.service.impl;

import com.cashmap.entity.Sentence;
import com.cashmap.repository.SentenceRepository;
import com.cashmap.service.SentenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class SentenceServiceImpl implements SentenceService {

    @Autowired
    private  SentenceRepository sentenceRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Sentence> getAllSentences() {
        return sentenceRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Sentence getSentenceById(Integer id) {
        return sentenceRepository.findById(id).orElseThrow(() -> new RuntimeException("Sentence not found"));
    }
}
