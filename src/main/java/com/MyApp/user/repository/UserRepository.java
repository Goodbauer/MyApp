package com.MyApp.user.repository;

import com.MyApp.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);

    List<User> findByIdIn(List<Long> userIds);

    Boolean existsByLogin(String login);
}
