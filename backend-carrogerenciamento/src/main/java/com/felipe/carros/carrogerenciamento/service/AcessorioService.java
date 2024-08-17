package com.felipe.carros.carrogerenciamento.service;

import com.felipe.carros.carrogerenciamento.entity.Acessorio;
import com.felipe.carros.carrogerenciamento.repository.AcessorioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcessorioService {
    AcessorioRepository acessorioRepository;

    public AcessorioService(AcessorioRepository acessorioRepository){
        this.acessorioRepository = acessorioRepository;
    }

    public Acessorio save(Acessorio acessorio){
        return acessorioRepository.save(acessorio);
    }

    public Acessorio update(long id, Acessorio acessorio){
        if(!acessorioRepository.existsById(id)){
            throw new RuntimeException("Acessorio com id: " + id + "não encontrado");
        }
        acessorio.setId(id);
        return acessorioRepository.save(acessorio);
    }

    public Acessorio findById(long id){
        return acessorioRepository.findById(id).get();
    }

    public List<Acessorio> findAll(){
        return acessorioRepository.findAll();
    }

    public void deleteById(long id){
        acessorioRepository.deleteById(id);
    }
}
