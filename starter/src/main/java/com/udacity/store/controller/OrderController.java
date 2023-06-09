package com.udacity.store.controller;

import com.udacity.store.model.Order;
import com.udacity.store.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("orders/")
@CrossOrigin(origins = "http://localhost:4200")

public class OrderController {
// TODO: Use the mapping submit to add an API endpoint to fetch the products from the OrderRepository

    @Autowired
    private OrderRepository orderRepository;
    @PostMapping("submit")
    public ResponseEntity submitOrder(Order order){
        orderRepository.save(order);
        return  ResponseEntity.ok(HttpStatus.OK);

    }
}
