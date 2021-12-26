package com.nicolas.springjwt.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cadeau")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Gift {
    @Id
    @Column(name = "id", nullable = false)
    private long id;
    private String title;
    private String descritpion;

}
