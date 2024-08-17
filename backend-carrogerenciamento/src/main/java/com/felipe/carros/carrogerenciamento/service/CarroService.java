package com.felipe.carros.carrogerenciamento.service;

import com.felipe.carros.carrogerenciamento.entity.Carro;
import com.felipe.carros.carrogerenciamento.repository.CarroRepository;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarroService {
    CarroRepository carroRepository;

    public CarroService(CarroRepository carroRepository){
        this.carroRepository = carroRepository;
    }
    
    public Carro save(Carro carro){
        return carroRepository.save(carro);
    }

    public Carro update(long id, Carro carro){
        if(!carroRepository.existsById(id)){
            throw new RuntimeException("Carro com id: " + id + " não encontrado!");
        }
        carro.setId(id);
        return carroRepository.save(carro);
    }

    public Carro findById(long id){
        return carroRepository.findById(id).orElseThrow(() -> new RuntimeException("Carro com id: "+ id + " Não encontrado!"));
    }

    public List<Carro> findAll(){
        return carroRepository.findAll();
    }

    public void deleteById(long id){
        carroRepository.deleteById(id);
    }
}
