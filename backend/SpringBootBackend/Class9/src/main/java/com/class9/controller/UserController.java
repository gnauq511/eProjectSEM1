package com.class9.controller;

import com.class9.model.User;
import com.class9.model.dto.ResultUser;
import com.class9.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public User createUser(@RequestBody User user) {

        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResultUser login(@RequestBody User user) {

        return userService.loginUser(user);
    }

}
