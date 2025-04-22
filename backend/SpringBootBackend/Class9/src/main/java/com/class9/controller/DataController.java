package com.class9.controller;

import com.class9.model.dto.CategoryDTO;
import com.class9.model.dto.DataImportDTO;
import com.class9.model.dto.ProductDTO;
import com.class9.service.DataImportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/data")
public class DataController {

    private final DataImportService dataImportService;

    public DataController(DataImportService dataImportService) {
        this.dataImportService = dataImportService;
    }

    @PostMapping("/import")
    public String importData(@RequestBody DataImportDTO data) {
        dataImportService.importData(data.getCategories(), data.getProducts());
        return "Data imported successfully!";
    }
}
