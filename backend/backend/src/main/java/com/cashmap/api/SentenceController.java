package com.cashmap.api;

import com.cashmap.entity.Sentence;
import com.cashmap.service.SentenceService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sentence")
public class SentenceController {

    private final SentenceService sentenceService;

    @GetMapping
    public ResponseEntity<List<Sentence>> getAllSentences() {
        List<Sentence> sentences = sentenceService.getAllSentences();
        return new ResponseEntity<List<Sentence>>(sentences, HttpStatus.OK);
    }
}
