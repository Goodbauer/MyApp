package com.MyApp;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;


@ConfigurationProperties(prefix = "app")
@Data
public class AppProperties {

    private final Auth auth = new Auth();

    @Data
    @NoArgsConstructor
    public static class Auth {

        private String jwtSecret;

        private int jwtExpirationInMs;


    }
}

