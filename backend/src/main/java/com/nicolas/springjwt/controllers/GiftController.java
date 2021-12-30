package com.nicolas.springjwt.controllers;

import com.nicolas.springjwt.models.Gift;
import com.nicolas.springjwt.services.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/gifts")
public class GiftController {
    
    @Autowired
    GiftService giftService;
    
    @GetMapping()
    public List<Gift> getGifts(){
        return this.giftService.findAll();
    }
    
    @GetMapping("{id}")
    public Gift getGiftById(@PathVariable long id){
        return this.giftService.findById(id);
    }
    
    @PostMapping("")
    public Gift save(@RequestBody Gift gift){
        return this.giftService.save(gift);
    }

    /**
     *
     * @param id
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        this.giftService.deleteById(id);

    }


    
}
