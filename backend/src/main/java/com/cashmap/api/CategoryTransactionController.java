package com.cashmap.api;

import com.cashmap.entity.CategoryTransaction;
import com.cashmap.entity.Transaction;
import com.cashmap.repository.CategoryTransactionRepository;
import com.cashmap.service.CategoryTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@RestController
@RequestMapping("/categoryTransaction")
public class CategoryTransactionController {

    @Autowired
    private CategoryTransactionService categoryTransactionService;

    @PostMapping("/{userId}")
    public ResponseEntity<CategoryTransaction> createCategory(@PathVariable Integer userId,
                                                              @RequestBody CategoryTransaction categoryTransaction){
        CategoryTransaction newCategory = categoryTransactionService.createCategory(userId, categoryTransaction);
        return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<CategoryTransaction>> getCategoriesByUser(@PathVariable Integer userId){
        List<CategoryTransaction> categories = categoryTransactionService.getCategoriesByUser(userId);
        return ResponseEntity.ok(categories);
    }


}
