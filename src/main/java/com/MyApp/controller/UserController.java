package com.MyApp.controller;

import com.MyApp.exception.AppException;
import com.MyApp.security.CurrentUser;
import com.MyApp.user.entity.Role;
import com.MyApp.user.entity.RoleName;
import com.MyApp.user.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.MyApp.user.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.MyApp.security.UserPrincipal;
import com.MyApp.user.payload.UserSummary;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getUsername(), userRole.getName());
        return userSummary;
    }
}
