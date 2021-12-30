package com.nicolas.springjwt.configs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nicolas.springjwt.repository.GiftRepository;
import com.nicolas.springjwt.repository.UserRepository;
import com.nicolas.springjwt.services.GiftService;
import com.nicolas.springjwt.services.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class config {
    @Bean
    public GiftService giftService(GiftRepository giftRepository, ObjectMapper mapper){
        return new GiftService(giftRepository, mapper);
    }
    @Bean
    public UserService userService(UserRepository userRepository, ObjectMapper mapper){
        return new UserService(userRepository, mapper);
    }
}
