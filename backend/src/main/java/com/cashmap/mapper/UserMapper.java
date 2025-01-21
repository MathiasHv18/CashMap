package com.cashmap.mapper;

import com.cashmap.config.ModelMapperConfig;
import com.cashmap.dto.request.RegisterUserRequestDTO;
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

}
