package com.example.LogSign.controller;

public record LoginRequest(
        String email,
        String password
) {}
