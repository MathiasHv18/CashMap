package com.cashmap.security;

import com.cashmap.entity.User;
import com.cashmap.exception.ResourceNotFoundException;
import com.cashmap.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws ResourceNotFoundException {

        User user = userRepository.findByMail(email).orElseThrow(
                () -> new ResourceNotFoundException("Usuario no encontrado con el email: " + email)
        );

        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + user.getCategoryUser().getCategoryUser().name());

        return new UserPrincipal(
                user.getIdUser(),  // Cambio de getUsuarioId() a getId()
                user.getMail(),
                user.getPassword(),
                Collections.singletonList(authority),
                user
        );
    }
}
