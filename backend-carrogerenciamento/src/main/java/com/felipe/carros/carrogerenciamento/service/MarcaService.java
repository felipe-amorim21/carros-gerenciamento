package com.felipe.carros.carrogerenciamento.service;

import com.felipe.carros.carrogerenciamento.entity.Marca;
import com.felipe.carros.carrogerenciamento.repository.MarcaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarcaService {

    MarcaRepository marcaRepository;

    public MarcaService(MarcaRepository marcaRepository){
        this.marcaRepository = marcaRepository;
    }

    public Marca save(Marca marca){
        return marcaRepository.save(marca);
    }

    public Marca update(long id, Marca marca){
        if(marcaRepository.existsById(id)){
            throw new RuntimeException("Carro com id: " + id + " não encontrado!");
        }
        marca.setId(id);
        return marcaRepository.save(marca);
    }

    public Marca findById(long id){
        return marcaRepository.findById(id).get();
    }

    public List<Marca> findAll(){
        return marcaRepository.findAll();
    }

    public void deleteById(long id){
        marcaRepository.deleteById(id);
    }

}
