package com.nicolas.springjwt.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "gift")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Gift {
    @Id
    @Column(name = "id", nullable = false)
    private long id;
    private String title;
    private String description;
    private String img;
    @ManyToMany(cascade=CascadeType.ALL,mappedBy = "giftList")
    private Set<User> users;

}
