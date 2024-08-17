package com.felipe.carros.carrogerenciamento.controller;

import com.felipe.carros.carrogerenciamento.entity.Acessorio;
import com.felipe.carros.carrogerenciamento.service.AcessorioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/acessorio")
public class AcessorioController {

    AcessorioService acessorioService;

    public AcessorioController(AcessorioService acessorioService){
        this.acessorioService = acessorioService;
    }

    @PostMapping("/save")
    public ResponseEntity<Acessorio> save(@RequestBody Acessorio acessorio){
        return new ResponseEntity<>(acessorioService.save(acessorio), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Acessorio> update(@PathVariable long id, @RequestBody Acessorio acessorio){
        return new ResponseEntity<>(acessorioService.update(id, acessorio), HttpStatus.OK);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Acessorio> findById(@PathVariable long id){
        return new ResponseEntity<>(acessorioService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Acessorio>> findAll(){
        return new ResponseEntity<>(acessorioService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
