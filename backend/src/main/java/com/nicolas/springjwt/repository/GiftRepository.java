package com.nicolas.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nicolas.springjwt.models.Gift;

public interface GiftRepository extends JpaRepository<Gift,Long> {
}
