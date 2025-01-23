package com.cashmap.mapper;

import com.cashmap.config.ModelMapperConfig;
import com.cashmap.dto.request.RegisterUserRequestDTO;
import com.cashmap.dto.response.AuthResponseDTO;
import com.cashmap.dto.response.UserResponseDTO;
import com.cashmap.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    @Autowired
    private ModelMapperConfig modelMapperConfig;
    @Autowired
    private ModelMapper modelMapper;

    // From RegisterDTO to User
    public User toUserEntity(RegisterUserRequestDTO registerUserRequestDTO) {
        return modelMapper.map(registerUserRequestDTO, User.class);
    }

    public UserResponseDTO toUserResponseDTO(User user) {
        return modelMapper.map(user, UserResponseDTO.class);
    }

    public AuthResponseDTO toAuthResponseDTO(User user, String token) {
        AuthResponseDTO authResponseDTO = new AuthResponseDTO();
        authResponseDTO.setToken(token);

        String firstName = (user != null) ? user.getName() : "Admin";
        String lastName = (user != null) ? user.getLastname() : "User";

        authResponseDTO.setFirstName(firstName);
        authResponseDTO.setLastName(lastName);

        authResponseDTO.setRole(user.getCategoryUser().getCategoryUser().name());

        return authResponseDTO;
    }
}
