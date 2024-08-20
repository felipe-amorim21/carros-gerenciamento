package com.felipe.carros.carrogerenciamento.controller;

import com.felipe.carros.carrogerenciamento.entity.Carro;
import com.felipe.carros.carrogerenciamento.service.CarroService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carro")
@CrossOrigin(origins = "*")
public class CarroController {

    CarroService carroService;

    public CarroController(CarroService carroService){
        this.carroService = carroService;
    }

    @PostMapping("/save")
    public ResponseEntity<Carro> save(@RequestBody Carro carro){
        return new ResponseEntity<>(carroService.save(carro), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Carro> update(@RequestBody Carro carro, @PathVariable long id){
        return new ResponseEntity<>(carroService.update(id, carro), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Carro>> findAll(){
        return new ResponseEntity<>(carroService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Carro> findById(@PathVariable long id){
        return new ResponseEntity<>(carroService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("deleteById/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id){
        carroService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
