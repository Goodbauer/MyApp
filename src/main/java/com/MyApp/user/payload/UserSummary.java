package com.MyApp.user.payload;

import com.MyApp.user.entity.RoleName;
import lombok.Data;

@Data
public class UserSummary {
    private Long id;
    private String username;
    private String name;
    private RoleName userRole;

    public UserSummary(Long id, String username, String name, RoleName userRole) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.userRole = userRole;
    }
}
