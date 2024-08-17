package com.felipe.carros.carrogerenciamento.controller;

import com.felipe.carros.carrogerenciamento.entity.Marca;
import com.felipe.carros.carrogerenciamento.service.MarcaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marca")
public class MarcaController {

    MarcaService marcaService;

    public MarcaController(MarcaService marcaService){
        this.marcaService = marcaService;
    }

    @PostMapping("/save")
    public ResponseEntity<Marca> save(@RequestBody Marca marca){
        return new ResponseEntity<>(marcaService.save(marca), HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Marca> update(@PathVariable long id, @RequestBody Marca marca){
        return new ResponseEntity<>(marcaService.update(id, marca), HttpStatus.OK);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Marca> findById(@PathVariable long id){
        return new ResponseEntity<>(marcaService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Marca>> findAll(){
        return new ResponseEntity<>(marcaService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id){
        marcaService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
