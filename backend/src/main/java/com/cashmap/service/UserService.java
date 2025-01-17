package com.cashmap.service;

import com.cashmap.entity.Transaction;
import com.cashmap.entity.User;

public interface UserService {
    User createUser(User user);
    User getUserById(Integer id);
    void deleteUser(Integer id);
}
