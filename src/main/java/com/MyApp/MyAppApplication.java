package com.MyApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({AppProperties.class})
public class MyAppApplication {
		public static void main(String[] args) {
		SpringApplication.run(MyAppApplication.class, args);
	}
}
