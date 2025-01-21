package com.cashmap.service;

import com.cashmap.dto.request.RegisterUserRequestDTO;
import com.cashmap.dto.response.UserResponseDTO;
import com.cashmap.entity.Transaction;
import com.cashmap.entity.User;

public interface UserService {
    UserResponseDTO registerUser(RegisterUserRequestDTO registerUserRequestDTO);
}
