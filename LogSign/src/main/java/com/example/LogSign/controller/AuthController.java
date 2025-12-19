package com.example.LogSign.controller;

import com.example.LogSign.Entity.User;
import com.example.LogSign.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public User signup(@Valid @RequestBody SignupRequest request) {
        return userService.signup(
                request.name(),
                request.email(),
                request.password(),
                request.role()
        );
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {
        return userService.login(
                request.email(),
                request.password()
        );
    }
}
