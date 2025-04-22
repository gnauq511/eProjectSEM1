package com.class9.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    private Long id;

    private String name;

    @Column(length = 1000)
    private String description;

    private String price;
    private String image;
    private Integer sale;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    public Integer getSale() {
        return sale;
    }

    public Category getCategory() {
        return category;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setSale(Integer sale) {
        this.sale = sale;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
