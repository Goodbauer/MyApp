CREATE SEQUENCE users_id_seq START 1000000;
CREATE TABLE IF NOT EXISTS users
(
    user_id       BIGINT PRIMARY KEY DEFAULT nextval('users_id_seq'),
    login         VARCHAR(200) NOT NULL,
    password      VARCHAR(254) NOT NULL
);

CREATE SEQUENCE roles_id_seq START 1000000;
CREATE TABLE IF NOT EXISTS roles
(
    role_id       BIGINT PRIMARY KEY DEFAULT nextval('roles_id_seq'),
    roleName      VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_roles
(
    user_id       BIGINT NOT NULL REFERENCES users,
    role_id       BIGINT NOT NULL REFERENCES roles
);

INSERT INTO users VALUES
(1, 'Vassily', '123'),
(2, 'Pjotr', '322');

INSERT INTO roles Values
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

INSERT INTO user_roles VALUES
(1, 1),
(2, 2);



