package com.felipe.carros.carrogerenciamento.repository;

import com.felipe.carros.carrogerenciamento.entity.Carro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarroRepository extends JpaRepository<Carro, Long> {
}
