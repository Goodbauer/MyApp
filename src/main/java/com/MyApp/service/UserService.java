package com.MyApp.service;

import com.MyApp.entity.User;
import com.MyApp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public Long createUser(String login, String password) {
        User user = new User(login, password);
        return userRepository.save(user).getId();
    }
}

