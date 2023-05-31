package com.udacity.store.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order {
//TODO: Add the details of the order class

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany
    private List<Product> products;

    @JoinColumn(name = "total")
    private Double total;
    @JoinColumn(name = "customer_name")
    private String customerName;
    @JoinColumn(name = "customer_address")
    private String customerAddress;
    @JoinColumn(name = "customer_credit_card")
    private String customerCreditCard;

}


