package com.MyApp.user.service;

import com.MyApp.user.payload.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.MyApp.user.entity.User;
import com.MyApp.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public ResponseEntity createUser(String login, String password) {

        boolean checkUnique = userRepository.existsByLogin(login);
        if (!checkUnique) {
            User user = new User(login, password);
            userRepository.save(user);
            return new ResponseEntity(new ApiResponse(true, "User Created!"),
                    HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(new ApiResponse(false, "Login already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
    }
}

