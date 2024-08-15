package com.felipe.carros.carrogerenciamento.repository;

import com.felipe.carros.carrogerenciamento.entity.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepository extends JpaRepository<Marca, Long> {
}
