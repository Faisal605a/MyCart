package com.udacity.store.controller;

import com.udacity.store.model.Product;
import com.udacity.store.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:4200")


public class ProductController {
// TODO: Use the mapping products to add an API endpoint to fetch the products from the ProductRepository
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/get-products")
    public List<Product> getProducts() {
        System.out.println("getProducts called");
        System.out.println("Name: "+ productRepository.findAll().get(1).getName());
        System.out.println("ID: "+ productRepository.findAll().get(1).getId());

        return productRepository.findAll();
    }
}
