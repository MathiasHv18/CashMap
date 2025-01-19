package com.cashmap.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

public class UserPrincipal extends User {
    private final Integer id;
    private final com.cashmap.entity.User user;

    public UserPrincipal(Integer id, String username, String password, Collection<? extends GrantedAuthority> authorities, com.cashmap.entity.User user) {
        super(username, password, authorities);
        this.id = id;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public com.cashmap.entity.User getUser() {
        return user;
    }
}