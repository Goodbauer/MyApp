package com.MyApp.service;


import com.MyApp.entity.User;
import com.MyApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Long createUser(String login, String password) {
        User user = new User(login, password);
        return userRepository.save(user).getId();
    }
}

