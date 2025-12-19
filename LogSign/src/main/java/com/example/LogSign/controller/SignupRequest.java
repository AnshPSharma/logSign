package com.example.LogSign.controller;

import com.example.LogSign.Entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record SignupRequest(

        @NotBlank
        String name,

        @NotBlank
        @Email(message = "Invalid email format")
        String email,

        @NotBlank
        @Size(min = 8, message = "Password must be at least 8 characters")
        @Pattern(
                regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).*$",
                message = "Password must contain 1 uppercase, 1 number, and 1 special character"
        )
        String password,

        Role role
) {}
