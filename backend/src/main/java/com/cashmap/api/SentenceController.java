package com.cashmap.api;

import com.cashmap.entity.Sentence;
import com.cashmap.repository.SentenceRepository;
import com.cashmap.service.SentenceService;
import com.cashmap.service.impl.SentenceServiceImpl;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sentence")
public class SentenceController {

    @Autowired
    private SentenceService sentenceService;

    @GetMapping
    public ResponseEntity<List<Sentence>> getAllSentences() {
        List<Sentence> sentences = sentenceService.getAllSentences();
        return ResponseEntity.ok(sentences);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sentence> getSentenceById(@PathVariable Integer id) {
        Sentence sentence = sentenceService.getSentenceById(id);
        return new ResponseEntity<Sentence>(sentence, HttpStatus.OK);
    }
}
