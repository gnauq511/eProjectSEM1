package com.class9.service;

import com.class9.model.Category;
import com.class9.model.Product;
import com.class9.model.dto.CategoryDTO;
import com.class9.model.dto.ProductDTO;
import com.class9.repository.CategoryRepository;
import com.class9.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DataImportService {

    private final CategoryRepository categoryRepo;
    private final ProductRepository productRepo;

    public DataImportService(CategoryRepository categoryRepo, ProductRepository productRepo) {
        this.categoryRepo = categoryRepo;
        this.productRepo = productRepo;
    }

    public void importData(List<CategoryDTO> categoryDTOs, List<ProductDTO> productDTOs) {
        Map<Long, Category> categoryMap = new HashMap<>();

        // Chuyển DTO sang Entity
        for (CategoryDTO dto : categoryDTOs) {
            Category category = new Category();
            category.setId(dto.getId());
            category.setName(dto.getName());
            categoryMap.put(dto.getId(), category);
        }

        List<Product> products = new ArrayList<>();
        for (ProductDTO dto : productDTOs) {
            Product product = new Product();
            product.setId(dto.getId());
            product.setName(dto.getName());
            product.setDescription(dto.getDescription());
            product.setPrice(dto.getPrice());
            product.setImage(dto.getImage());
            product.setSale(dto.getSale());
            product.setCategory(categoryMap.get(dto.getCategories()));
            products.add(product);
        }

        categoryRepo.saveAll(categoryMap.values());
        productRepo.saveAll(products);
    }
}
