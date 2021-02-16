package com.MyApp.controller;

import com.MyApp.controller.dto.UserRequestDTO;
import com.MyApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/login")
    public String user() {
        return "hello";
    }

    @PostMapping("/registration")
    public Long createUser(@RequestBody UserRequestDTO userRequestDTO) {
        return userService.createUser(userRequestDTO.getLogin(), userRequestDTO.getPassword());
    }
}
