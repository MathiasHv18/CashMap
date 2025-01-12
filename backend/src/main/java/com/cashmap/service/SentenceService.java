package com.cashmap.service;

import com.cashmap.entity.Sentence;

import java.util.List;

public interface SentenceService {
    List<Sentence> getAllSentences();
    Sentence getSentenceById(Integer id);
}