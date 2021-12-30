package com.nicolas.springjwt.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nicolas.springjwt.models.User;
import com.nicolas.springjwt.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class UserService {

    UserRepository userRepository;
    private ObjectMapper mapper;
    public UserService(UserRepository userRepository, ObjectMapper mapper) {
        this.userRepository =userRepository;
        this.mapper=mapper;
    }
    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    public List<User> findAll(){
        LOGGER.info("Appel de la liste des users");
        return this.userRepository.findAll();
    }
    /**
     *
     * @param id
     * @return one user
     */
    public User findById(long id){
        return this.userRepository.getById( id);
    }
    /**
     *
     * @return User
     */
    public User save(User user){
        return this.userRepository.save(user);
    }

    /**
     * Delete user
     * @param id
     */
    public void deleteById(long id){
        this.userRepository.deleteById(id);
    }
    
    
}
