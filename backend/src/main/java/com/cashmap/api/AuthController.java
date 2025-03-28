package com.cashmap.api;

import com.cashmap.dto.request.LoginUserRequestDTO;
import com.cashmap.dto.request.RegisterUserRequestDTO;
import com.cashmap.dto.response.AuthResponseDTO;
import com.cashmap.dto.response.UserResponseDTO;
import com.cashmap.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> registerUser(@Valid @RequestBody RegisterUserRequestDTO registerUserRequestDTO) {
        UserResponseDTO userResponseDTO = userService.registerUser(registerUserRequestDTO);
        return new ResponseEntity<>(userResponseDTO, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@Valid @RequestBody LoginUserRequestDTO loginUserRequestDTO) {
        AuthResponseDTO authResponseDTO = userService.login(loginUserRequestDTO);
        return new ResponseEntity<>(authResponseDTO, HttpStatus.OK);
    }
}
