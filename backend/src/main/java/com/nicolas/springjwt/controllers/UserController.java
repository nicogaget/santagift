package com.nicolas.springjwt.controllers;

import com.nicolas.springjwt.models.User;
import com.nicolas.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")

public class UserController {

    @Autowired
    UserService userService;

    @GetMapping()
    public List<User> getUsers(){
        return this.userService.findAll();
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable long id){
        return this.userService.findById(id);
    }

    @PostMapping("")
    public User save(@RequestBody User user){
        return this.userService.save(user);
    }

    /**
     *
     * @param id
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        this.userService.deleteById(id);

    }

}
