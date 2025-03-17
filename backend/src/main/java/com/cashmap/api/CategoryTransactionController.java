package com.cashmap.api;

import com.cashmap.entity.CategoryTransaction;
import com.cashmap.entity.Transaction;
import com.cashmap.entity.User;
import com.cashmap.repository.CategoryTransactionRepository;
import com.cashmap.service.CategoryTransactionService;
import com.cashmap.service.UserService;
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
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<CategoryTransaction> createCategory(@RequestHeader("Authorization") String bearerToken,
                                                              @RequestBody CategoryTransaction categoryTransaction){
        User user = userService.getUser(bearerToken);
        CategoryTransaction newCategory = categoryTransactionService.createCategory(user.getIdUser(), categoryTransaction);
        return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<CategoryTransaction>> getCategoriesByUser(@RequestHeader("Authorization") String bearerToken){
        User user = userService.getUser(bearerToken);
        List<CategoryTransaction> categories = categoryTransactionService.getCategoriesByUser(user.getIdUser());
        return ResponseEntity.ok(categories);
    }
}
