package com.personal.gym_flow_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class GymFlowApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GymFlowApiApplication.class, args);
	}

}
