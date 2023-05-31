package com.udacity.store;

import com.udacity.store.model.Product;
import com.udacity.store.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class StoreApplication  implements CommandLineRunner {

    public static void main(String[] args) {


        SpringApplication.run(StoreApplication.class, args);
        }

    @Autowired
    private ProductRepository productRepository;


    @Override
    public void run(String... args) throws Exception {
        // TODO: Populate the database with products
        System.out.println("Adding products...");
        //productRepository.deleteAll();
        productRepository.save(new Product(0L,"Hedphone","Wierless hedphones",33.3, "https://m.media-amazon.com/images/I/61BP0d2-0AL._AC_SX679_.jpg"));
        productRepository.save(new Product(0L,"Phone","Iphone 13 pro",357.1, "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_SX679_.jpg"));
        productRepository.save(new Product(0L,"Charger","Iphone charger with type-c cable",15.7, "https://m.media-amazon.com/images/I/51QqlQALknL._AC_SX679_.jpg"));
//        productRepository.save(new Product(3L,"Hedphones3","Wierless hedphones",33.3, "https://m.media-amazon.com/images/I/61BP0d2-0AL._AC_SX679_.jpg"));

    }
}
