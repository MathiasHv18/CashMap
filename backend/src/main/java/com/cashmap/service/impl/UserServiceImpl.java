package com.cashmap.service.impl;

import com.cashmap.dto.request.LoginUserRequestDTO;
import com.cashmap.dto.request.RegisterUserRequestDTO;
import com.cashmap.dto.response.AuthResponseDTO;
import com.cashmap.dto.response.UserResponseDTO;
import com.cashmap.entity.CategoryUser;
import com.cashmap.entity.User;
import com.cashmap.entity.enums.Rol;
import com.cashmap.exception.ResourceNotFoundException;
import com.cashmap.mapper.UserMapper;
import com.cashmap.repository.CategoryUserRepository;
import com.cashmap.repository.UserRepository;
import com.cashmap.security.TokenProvider;
import com.cashmap.security.UserPrincipal;
import com.cashmap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokenProvider tokenProvider;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CategoryUserRepository categoryUserRepository;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public UserResponseDTO registerUser(RegisterUserRequestDTO registerUserRequestDTO) {
        return registerUserCategory(registerUserRequestDTO);
    }


    private UserResponseDTO registerUserCategory(RegisterUserRequestDTO registerUserRequestDTO) {


        boolean existsByEmail = userRepository.existsByMail(registerUserRequestDTO.getMail());
        if (existsByEmail) {
            Optional<User> user = userRepository.findByMail(registerUserRequestDTO.getMail());
            Integer userId = user.get().getIdUser();

            boolean alreadyExists = userRepository.existsById(userId);

            if (alreadyExists) {
                throw new ResourceNotFoundException("A user with this email already exists");
            }
        }

        CategoryUser categoryUser = categoryUserRepository.findByName(Rol.USER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        System.out.println("Fetched categoryUser: " + categoryUser.getCategoryUser());

        registerUserRequestDTO.setPassword(passwordEncoder.encode(registerUserRequestDTO.getPassword()));

        User user = userMapper.toUserEntity(registerUserRequestDTO);
        user.setCategoryUser(categoryUser);
        User savedUser = userRepository.save(user);

        return userMapper.toUserResponseDTO(savedUser);
    }


    @Override
    public AuthResponseDTO login(LoginUserRequestDTO loginUserDTO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginUserDTO.getMail(), loginUserDTO.getPassword())
        );

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        User user = userPrincipal.getUser();

        String token = tokenProvider.createAccessToken(authentication);

        AuthResponseDTO authResponseDTO = userMapper.toAuthResponseDTO(user, token);

        return authResponseDTO;
    }

    @Override
    public User getUser(String bearerToken) {
        String mail = tokenProvider.getMail(bearerToken);
        User user = userRepository.findByMail(mail).orElseThrow(() -> new ResourceNotFoundException("Usuario con correo " + mail + " no fue encontrado"));
        return user;
    }

}
