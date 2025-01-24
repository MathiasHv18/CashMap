package com.cashmap.api;

import com.cashmap.dto.response.UserProfileResponseDTO;
import com.cashmap.entity.User;
import com.cashmap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RequestMapping("/user")
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponseDTO> getProfile(@RequestHeader("Authorization") String bearerToken) throws IOException {
        User user = userService.getUser(bearerToken);
        UserProfileResponseDTO userProfileResponseDTO = new UserProfileResponseDTO();
        userProfileResponseDTO.setId(user.getIdUser());
        userProfileResponseDTO.setMail(user.getMail());
        userProfileResponseDTO.setCategoryUser(user.getCategoryUser());
        userProfileResponseDTO.setLastname(user.getLastname());
        userProfileResponseDTO.setAge(user.getAge());
        userProfileResponseDTO.setDigitalMoney(user.getDigitalMoney());
        userProfileResponseDTO.setFisicalMoney(user.getFisicalMoney());
        userProfileResponseDTO.setName(user.getName());

        return new ResponseEntity<UserProfileResponseDTO>(userProfileResponseDTO, HttpStatus.OK);


    }
}
