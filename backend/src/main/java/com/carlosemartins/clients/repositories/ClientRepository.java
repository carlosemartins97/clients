package com.carlosemartins.clients.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carlosemartins.clients.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>  {

}
