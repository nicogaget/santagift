package com.nicolas.springjwt.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nicolas.springjwt.models.Gift;
import com.nicolas.springjwt.repository.GiftRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class GiftService {
    
    public GiftService(GiftRepository giftRepository, ObjectMapper mapper) {
        this.giftRepository = giftRepository;
        this.mapper = mapper;
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(GiftService.class);
    GiftRepository giftRepository;

    private ObjectMapper mapper;

    /**
     *
     * @return gift list
     */
    public List<Gift> findAll(){

        return this.giftRepository.findAll();
    }

    /**
     *
     * @param id
     * @return one gift
     */
    public Gift findById(long id){
        return this.giftRepository.getById( id);
    }
    /**
     *
     * @return Gift
     */
    public Gift save(Gift gift){
        return this.giftRepository.save(gift);
    }

    /**
     * Delete gift
     * @param id
     */
    public void deleteById(long id){
        this.giftRepository.deleteById(id);
    }

}
